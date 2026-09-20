"use server";

import { headers } from "next/headers";
import { leadSchema, schemaFieldErrors, type LeadFieldErrors } from "@/lib/leads/schema";
import { checkRateLimit } from "@/lib/leads/rate-limit";
import { createServerSupabaseClient } from "@/lib/supabase";
import { notifyNewLead } from "@/lib/notifications/email";

export type SubmitLeadResult =
  | { ok: true; duplicate?: boolean }
  | { ok: false; error: "validation"; fieldErrors: LeadFieldErrors }
  | { ok: false; error: "rate_limited"; retryAfterSeconds: number }
  | { ok: false; error: "server_error" };

/** Submissions faster than a human can fill the form are treated as bots. */
const MIN_FILL_MS = 800;

/**
 * Lead/consultation submission — the only write path the marketing site has.
 *
 * Pipeline: honeypot -> zod validation -> timing check -> rate limit ->
 * idempotent insert (submission_id conflict = duplicate click/retry) ->
 * best-effort email notification placeholder.
 */
export async function submitLead(input: unknown): Promise<SubmitLeadResult> {
  // 1) Honeypot: real users never see/fill the hidden "website" field.
  //    Pretend success so bots get no signal to adapt.
  const honeypot = (input as { website?: unknown } | null)?.website;
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return { ok: true };
  }

  // 2) Server-side validation (mirrors the client rules in the form).
  const parsed = leadSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "validation", fieldErrors: schemaFieldErrors(parsed.error) };
  }
  const lead = parsed.data;

  // 3) Timing check — instant POSTs are automated.
  if (Date.now() - lead.startedAt < MIN_FILL_MS) {
    return { ok: true };
  }

  // 4) Rate limit per IP and per email address (sliding window).
  const headerList = await headers();
  const ip = headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  for (const key of [`ip:${ip}`, `email:${lead.email.toLowerCase()}`]) {
    const limit = checkRateLimit(key);
    if (!limit.ok) {
      return { ok: false, error: "rate_limited", retryAfterSeconds: limit.retryAfterSeconds };
    }
  }

  const row = {
    submission_id: lead.submissionId,
    full_name: lead.fullName,
    practice_name: lead.practiceName,
    email: lead.email.toLowerCase(),
    phone: lead.phone,
    specialty: lead.specialty,
    provider_count: lead.providerCount,
    services_needed: lead.servicesNeeded,
    message: lead.message ? lead.message : null,
  };

  try {
    const supabase = createServerSupabaseClient();
    const { error } = await supabase.from("leads").insert(row);

    if (error) {
      // 23505 = unique_violation on submission_id: this exact submission is
      // already stored (double-click, retry, or refresh). Report idempotent
      // success instead of an error. Plain INSERT (not upsert) is required
      // because RLS is insert-only: Postgres compiles upsert to
      // INSERT ... ON CONFLICT, which needs an UPDATE policy even when no
      // conflict occurs.
      if (error.code === "23505") {
        return { ok: true, duplicate: true };
      }
      throw error;
    }
  } catch (err) {
    console.error("[leads] insert failed:", err instanceof Error ? err.message : err);
    return { ok: false, error: "server_error" };
  }

  // 5) Notification placeholder — must never break the submission.
  try {
    await notifyNewLead({
      fullName: lead.fullName,
      practiceName: lead.practiceName,
      email: lead.email,
      phone: lead.phone,
      specialty: lead.specialty,
      providerCount: lead.providerCount,
      servicesNeeded: lead.servicesNeeded,
      message: lead.message ?? null,
    });
  } catch (notifyErr) {
    console.error(
      "[leads] notification failed:",
      notifyErr instanceof Error ? notifyErr.message : notifyErr
    );
  }

  return { ok: true };
}
