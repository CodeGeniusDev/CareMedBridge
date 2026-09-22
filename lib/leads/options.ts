/**
 * Lead-form option lists — lightweight literals kept in sync with the
 * service/specialty catalogs in `lib/data/`.
 *
 * These used to be derived inside `lib/leads/schema.ts` by importing the
 * full data modules. That pulled every service/specialty detail paragraph
 * into the client bundle (the form is a client component). Duplicating just
 * the display strings here keeps the client JS lean; when a service or
 * specialty is added/renamed, update the matching entry below as well.
 */

export const SPECIALTY_OPTIONS = [
  "Internal Medicine",
  "Family Medicine",
  "Primary Care",
  "Pediatrics",
  "Cardiology",
  "Orthopedics",
  "Neurology",
  "Dermatology",
  "Mental Health / Psychiatry",
  "Physical Therapy",
  "OB/GYN",
  "Radiology",
  "Oncology",
  "Urology",
  "Gastroenterology",
  "Ophthalmology",
  "Urgent Care",
  "Multi-Specialty Groups",
  "Other / Not listed",
];

export const PROVIDER_COUNT_OPTIONS = [
  "1 provider",
  "2 to 5 providers",
  "6 to 10 providers",
  "11 to 25 providers",
  "26 to 50 providers",
  "50+ providers",
];

export const SERVICE_OPTIONS = [
  "Medical Billing",
  "Medical Coding",
  "Revenue Cycle Management",
  "Insurance Eligibility Verification",
  "Claim Submission",
  "Denial Management",
  "AR Recovery",
  "Credentialing",
  "Prior Authorization",
  "Payment Posting",
  "Virtual Assistance",
  "Front Office Management",
];

/** Slug rule mirrored from the service catalog (`slug` fields in lib/data/services.ts). */
export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Resolve a `/contact?service=<slug>` value to its service title, if known. */
export function resolveServiceTitle(slug: string | null): string | null {
  if (!slug) return null;
  return SERVICE_OPTIONS.find((t) => slugify(t) === slug) ?? null;
}
