import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client for CareMedBridge.
 *
 * Used ONLY by the lead-submission Server Action (app/actions/leads.ts).
 * The anon key is safe to use server-side: RLS (supabase/migrations/001_leads.sql)
 * restricts the anon role to INSERT on public.leads — it can never read lead
 * data back. The "server-only" import above guarantees this module never
 * ends up in a client bundle.
 */

let cached: SupabaseClient | null = null;

export function createServerSupabaseClient(): SupabaseClient {
  if (cached) return cached;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !publishableKey) {
    throw new Error(
      "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY."
    );
  }

  cached = createClient(url, publishableKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cached;
}
