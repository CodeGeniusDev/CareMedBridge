"use client";

import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Send, CheckCircle, AlertCircle, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { submitLead } from "@/app/actions/leads";
import {
  SPECIALTY_OPTIONS,
  PROVIDER_COUNT_OPTIONS,
  SERVICE_OPTIONS,
  resolveServiceTitle,
} from "@/lib/leads/options";

interface ConsultationFormProps {
  className?: string;
  /** Tighter paddings for embedded contexts (e.g. the navy pricing section). */
  compact?: boolean;
  /** Pre-checked services (e.g. /contact?service=medical-billing). */
  initialServices?: string[];
}

type FormValues = {
  fullName: string;
  practiceName: string;
  email: string;
  phone: string;
  specialty: string;
  providerCount: string;
  message: string;
};

type FieldKey = keyof FormValues | "servicesNeeded";

type Banner =
  | { type: "error"; message: string }
  | { type: "rate"; message: string }
  | null;

const emptyValues: FormValues = {
  fullName: "",
  practiceName: "",
  email: "",
  phone: "",
  specialty: "",
  providerCount: "",
  message: "",
};

// Mirrors lib/leads/schema.ts — keep in sync (client gives instant feedback,
// the Server Action re-validates authoritatively).
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[0-9\s().-]{7,25}(?:\s*(?:x|ext)\.?\s*\d{1,6})?$/i;

function validate(values: FormValues, servicesNeeded: string[]) {
  const errors: Partial<Record<FieldKey, string>> = {};
  if (!values.fullName.trim()) errors.fullName = "Full name is required.";
  if (!values.practiceName.trim()) errors.practiceName = "Practice name is required.";
  if (!values.email.trim()) errors.email = "Email address is required.";
  else if (!EMAIL_REGEX.test(values.email)) errors.email = "Please enter a valid email address.";
  if (!values.phone.trim()) errors.phone = "Phone number is required.";
  else if (!PHONE_REGEX.test(values.phone.trim()))
    errors.phone = "Please enter a valid phone number.";
  if (!values.specialty) errors.specialty = "Please select your specialty.";
  if (!values.providerCount) errors.providerCount = "Please select your provider count.";
  if (servicesNeeded.length === 0) errors.servicesNeeded = "Select at least one service.";
  if (values.message.length > 2000) errors.message = "Message must be 2,000 characters or fewer.";
  return errors;
}

export function ConsultationForm({
  className,
  compact = false,
  initialServices = [],
}: ConsultationFormProps) {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [servicesNeeded, setServicesNeeded] = useState<string[]>(() =>
    initialServices.filter((s) => SERVICE_OPTIONS.includes(s))
  );
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [banner, setBanner] = useState<Banner>(null);
  const [honeypot, setHoneypot] = useState("");

  // Idempotency + timing. The session starts when the form mounts (side
  // effect, not render) and is regenerated after every successful submit, so
  // "Submit another request" begins a brand-new lead. Bots that POST instantly
  // fail the Server Action's minimum-fill-time check.
  const sessionRef = useRef<{ submissionId: string; startedAt: number } | null>(null);

  useEffect(() => {
    sessionRef.current = { submissionId: crypto.randomUUID(), startedAt: Date.now() };
  }, []);

  // /contact?service=<slug> preselection. The page is statically prerendered,
  // so the server cannot know the query string — applying it once after
  // hydration keeps server HTML and the first client render identical.
  useEffect(() => {
    const title = resolveServiceTitle(
      new URLSearchParams(window.location.search).get("service")
    );
    if (title) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only URL read; no SSR source exists
      setServicesNeeded((prev) => (prev.includes(title) ? prev : [...prev, title]));
    }
  }, []);

  function getSession() {
    return (sessionRef.current ??= {
      submissionId: crypto.randomUUID(),
      startedAt: Date.now(),
    });
  }

  function resetSession() {
    sessionRef.current = { submissionId: crypto.randomUUID(), startedAt: Date.now() };
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name as FieldKey]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function toggleService(service: string) {
    setServicesNeeded((prev) => {
      const next = prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service];
      if (next.length > 0) setErrors((e) => ({ ...e, servicesNeeded: undefined }));
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return; // duplicate-click guard

    const fieldErrors = validate(values, servicesNeeded);
    setErrors(fieldErrors);
    setBanner(null);
    if (Object.values(fieldErrors).some(Boolean)) return;

    setSubmitting(true);
    try {
      const result = await submitLead({
        fullName: values.fullName,
        practiceName: values.practiceName,
        email: values.email,
        phone: values.phone,
        specialty: values.specialty,
        providerCount: values.providerCount,
        servicesNeeded,
        message: values.message || undefined,
        website: honeypot,
        ...getSession(),
      });

      if (result.ok) {
        setSucceeded(true);
        setValues(emptyValues);
        setServicesNeeded([]);
        setHoneypot("");
        resetSession();
        return;
      }

      if (result.error === "validation") {
        setErrors(result.fieldErrors as Partial<Record<FieldKey, string>>);
        setBanner({
          type: "error",
          message: "Please review the highlighted fields and try again.",
        });
      } else if (result.error === "rate_limited") {
        const minutes = Math.max(1, Math.ceil(result.retryAfterSeconds / 60));
        setBanner({
          type: "rate",
          message: `Too many requests. Please try again in about ${minutes} minute${minutes === 1 ? "" : "s"}.`,
        });
      } else {
        setBanner({
          type: "error",
          message: "Something went wrong on our end. Please try again in a moment.",
        });
      }
    } catch {
      // Network/failure reaching the server — never leave the user hanging.
      setBanner({
        type: "error",
        message: "We could not reach our servers. Please check your connection and try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  if (succeeded) {
    return (
      <div
        role="status"
        className={cn(
          "card-base p-8 md:p-10 flex flex-col items-center gap-4 text-center animate-fade-in",
          className
        )}
      >
        <span className="w-14 h-14 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
          <CheckCircle className="w-7 h-7 text-[var(--color-accent)]" />
        </span>
        <h3 className="text-xl font-bold text-[var(--color-navy)]">
          Thank you — your request has been received.
        </h3>
        <p className="text-[var(--color-muted)] max-w-sm leading-relaxed">
          Our team will review your information and get back to you. A billing
          specialist typically responds within one business day.
        </p>
        <Button
          variant="outline"
          size="md"
          onClick={() => {
            setSucceeded(false);
            resetSession();
          }}
          className="mt-2"
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn(
        "card-base flex flex-col gap-6",
        compact ? "p-6" : "p-6 md:p-8",
        className
      )}
    >
      {banner && (
        <div
          role="alert"
          className={cn(
            "flex items-start gap-3 p-4 rounded-lg border",
            banner.type === "rate"
              ? "bg-amber-50 border-amber-200"
              : "bg-red-50 border-red-200"
          )}
        >
          <AlertCircle
            className={cn(
              "w-5 h-5 flex-shrink-0 mt-0.5",
              banner.type === "rate" ? "text-amber-500" : "text-red-500"
            )}
          />
          <p className={cn("text-sm", banner.type === "rate" ? "text-amber-700" : "text-red-700")}>
            {banner.message}
          </p>
        </div>
      )}

      {/* Honeypot — invisible to humans, bots fill it and get silently dropped server-side */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 overflow-hidden">
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </label>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full Name" name="fullName" required error={errors.fullName}>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={values.fullName}
            onChange={handleChange}
            placeholder="Dr. Jane Smith"
            autoComplete="name"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={inputClass(!!errors.fullName)}
          />
        </Field>
        <Field label="Practice Name" name="practiceName" required error={errors.practiceName}>
          <input
            id="practiceName"
            name="practiceName"
            type="text"
            value={values.practiceName}
            onChange={handleChange}
            placeholder="Smith Family Medicine"
            autoComplete="organization"
            aria-invalid={!!errors.practiceName}
            aria-describedby={errors.practiceName ? "practiceName-error" : undefined}
            className={inputClass(!!errors.practiceName)}
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Email Address" name="email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="jane@yourpractice.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass(!!errors.email)}
          />
        </Field>
        <Field label="Phone Number" name="phone" required error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputClass(!!errors.phone)}
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Specialty" name="specialty" required error={errors.specialty}>
          <select
            id="specialty"
            name="specialty"
            value={values.specialty}
            onChange={handleChange}
            aria-invalid={!!errors.specialty}
            aria-describedby={errors.specialty ? "specialty-error" : undefined}
            className={inputClass(!!errors.specialty)}
          >
            <option value="">Select your specialty</option>
            {SPECIALTY_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Number of Providers" name="providerCount" required error={errors.providerCount}>
          <select
            id="providerCount"
            name="providerCount"
            value={values.providerCount}
            onChange={handleChange}
            aria-invalid={!!errors.providerCount}
            aria-describedby={errors.providerCount ? "providerCount-error" : undefined}
            className={inputClass(!!errors.providerCount)}
          >
            <option value="">Select provider count</option>
            {PROVIDER_COUNT_OPTIONS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </Field>
      </div>

      {/* Services Needed */}
      <div className="flex flex-col gap-2">
        <span id="servicesNeeded-label" className="text-sm font-semibold text-[var(--color-navy)]">
          Services Needed <span className="text-red-500 ml-0.5">*</span>{" "}
          <span className="text-[var(--color-muted)] font-normal">(select all that apply)</span>
        </span>
        <div
          role="group"
          aria-labelledby="servicesNeeded-label"
          className="grid grid-cols-2 sm:grid-cols-3 gap-2"
        >
          {SERVICE_OPTIONS.map((svc) => {
            const checked = servicesNeeded.includes(svc);
            return (
              <label
                key={svc}
                className={cn(
                  "flex min-h-10 items-center gap-2 px-3 py-2 rounded-lg border text-xs font-medium cursor-pointer select-none",
                  "transition-colors duration-[var(--duration-fast)]",
                  checked
                    ? "bg-[var(--color-teal)]/10 border-[var(--color-teal)] text-[var(--color-teal)]"
                    : "bg-white border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-teal)]/50"
                )}
              >
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={checked}
                  onChange={() => toggleService(svc)}
                />
                <span
                  className={cn(
                    "w-3.5 h-3.5 rounded-sm border flex items-center justify-center flex-shrink-0",
                    checked ? "bg-[var(--color-teal)] border-[var(--color-teal)]" : "border-[var(--color-border)]"
                  )}
                >
                  {checked && (
                    <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                {svc}
              </label>
            );
          })}
        </div>
        {errors.servicesNeeded && (
          <p className="text-xs text-red-500">{errors.servicesNeeded}</p>
        )}
      </div>

      {/* Message */}
      <Field
        label="Message"
        name="message"
        error={errors.message}
        hint="Optional — please do not include patient names, insurance IDs, or other protected health information."
      >
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          placeholder="Tell us about your current billing setup and challenges…"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(inputClass(!!errors.message), "resize-y min-h-[100px]")}
        />
      </Field>

      {/* Submit */}
      <div className="flex flex-col gap-3">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={submitting}
          disabled={submitting}
          className="w-full sm:w-auto self-start"
        >
          <Send className="w-4 h-4" />
          {submitting ? "Submitting…" : "Request a Consultation"}
        </Button>
        <p className="text-xs text-[var(--color-muted)] flex items-start gap-2">
          <ShieldCheck className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
          <span>
            By submitting, you agree to be contacted about your request. We respect your
            privacy and never share your information. This form is for practice inquiries
            only — please do not submit patient data.
          </span>
        </p>
      </div>
    </form>
  );
}

// ── Helpers ────────────────────────────────────────────────────────────────

function inputClass(hasError: boolean) {
  return cn(
    "w-full px-3.5 py-2.5 text-sm text-[var(--color-text)] bg-[var(--color-canvas)]",
    "border rounded-lg outline-none",
    "placeholder:text-[var(--color-muted)]/60",
    "transition-colors duration-[var(--duration-fast)]",
    "focus:ring-2 focus:ring-[var(--color-teal)]/30 focus:border-[var(--color-teal)]",
    hasError
      ? "border-red-400 focus:ring-red-200"
      : "border-[var(--color-border)] hover:border-[var(--color-teal)]/50"
  );
}

function Field({
  label,
  name,
  required,
  error,
  hint,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-semibold text-[var(--color-navy)]">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error ? (
        <p id={`${name}-error`} className="text-xs text-red-500">
          {error}
        </p>
      ) : (
        hint && <p className="text-xs text-[var(--color-muted)]">{hint}</p>
      )}
    </div>
  );
}
