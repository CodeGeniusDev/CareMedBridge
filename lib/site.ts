/**
 * Central site configuration for CareMedBridge.
 *
 * The contact details below are CLEAN, EASY-TO-REPLACE PLACEHOLDERS —
 * swap each value for the real business information when it becomes
 * available. All SEO output (canonical URLs, Open Graph metadata,
 * JSON-LD structured data) derives from this single source of truth.
 */
export const siteConfig = {
  name: "CareMedBridge",
  tagline: "Healthcare Billing Services",
  description:
    "CareMedBridge delivers medical billing, coding, and revenue cycle management services for physician practices, clinics, and healthcare providers across the USA.",
  url: "https://caremedbridge.com",

  // ── Placeholder contact details (replace before launch) ──────────────
  email: "info@caremedbridge.com",
  phoneDisplay: "+1 (555) 000-0000",
  phoneHref: "+15550000000",
  addressLines: ["123 Medical Plaza, Suite 400", "New York, NY 10001"],
  hours: "Mon – Fri: 9 AM – 6 PM EST",
} as const;

export type SiteConfig = typeof siteConfig;
