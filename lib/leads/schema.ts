import { z } from "zod";
import { SPECIALTY_OPTIONS, PROVIDER_COUNT_OPTIONS, SERVICE_OPTIONS } from "./options";

/**
 * Lead form validation schema. Options come from the lightweight literals in
 * `./options` (kept in sync with the service/specialty catalogs), so this
 * schema stays out of the heavy content-data module graph.
 */

// Digits, spaces, +, -, (), dots, optional "x123" / "ext. 123" extension.
const PHONE_REGEX = /^\+?[0-9\s().-]{7,25}(?:\s*(?:x|ext)\.?\s*\d{1,6})?$/i;

export const leadSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Full name is required.")
    .max(100, "Name must be 100 characters or fewer."),
  practiceName: z
    .string()
    .trim()
    .min(1, "Practice name is required.")
    .max(150, "Practice name must be 150 characters or fewer."),
  email: z.email("Please enter a valid email address.").max(254, "Email is too long."),
  phone: z
    .string()
    .trim()
    .regex(PHONE_REGEX, "Please enter a valid phone number."),
  specialty: z
    .string()
    .trim()
    .refine((v) => SPECIALTY_OPTIONS.includes(v), "Please select your specialty."),
  providerCount: z
    .string()
    .trim()
    .refine((v) => PROVIDER_COUNT_OPTIONS.includes(v), "Please select your provider count."),
  servicesNeeded: z
    .array(
      z.string().trim().refine((v) => SERVICE_OPTIONS.includes(v), "Unknown service selected.")
    )
    .min(1, "Select at least one service."),
  message: z
    .string()
    .trim()
    .max(2000, "Message must be 2,000 characters or fewer.")
    .optional(),
  submissionId: z.string().uuid("Invalid submission id."),
  startedAt: z.number().int().positive(),
});

export type LeadInput = z.input<typeof leadSchema>;
export type Lead = z.infer<typeof leadSchema>;
export type LeadFieldErrors = Partial<Record<keyof LeadInput, string>>;

/** First error per field, for display under form inputs. */
export function schemaFieldErrors(error: z.ZodError): LeadFieldErrors {
  const out: LeadFieldErrors = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !(key in out)) {
      (out as Record<string, string>)[key] = issue.message;
    }
  }
  return out;
}
