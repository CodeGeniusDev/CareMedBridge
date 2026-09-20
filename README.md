# CareMedBridge

USA-focused healthcare billing services company — marketing site + consultation
lead capture. Built with Next.js (App Router), TypeScript, Tailwind CSS,
GSAP, and Supabase.

## Stack

- **Next.js 16** (App Router, static-first) + **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` design tokens in `app/globals.css`)
- **GSAP 3** (ScrollTrigger) — scroll reveals, staggers, counters, parallax via
  the primitives in `components/anim/`; reduced-motion aware throughout
- **Supabase** — PostgreSQL for consultation/contact form submissions only
- No auth, no client portal, no other backend services in this version.

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Supabase: consultation form (the only backend)

The `ConsultationForm` (reused on `/contact`, `/pricing`, and deep-linked from
service pages via `/contact?service=<slug>`) submits through the Server Action
`app/actions/leads.ts`, which validates input (zod), applies honeypot + timing +
rate-limit checks, and inserts into the `leads` table **idempotently**
(`submission_id` unique key — duplicate clicks/retries are safe).

Setup:

1. Create a project at [supabase.com](https://supabase.com).
2. Run the SQL in [`supabase/migrations/001_leads.sql`](supabase/migrations/001_leads.sql)
   in the SQL editor (creates `public.leads` + RLS: anonymous **insert-only**).
3. Copy `.env.local.example` to `.env.local` and fill in:

   | Variable | Purpose |
   | --- | --- |
   | `NEXT_PUBLIC_SUPABASE_URL` | Project URL |
   | `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Publishable key (insert-only via RLS, used **server-side**) |

4. Restart the dev server. Submit the form — the row appears in Table Editor → `leads`.

Security notes:

- The anon key is only ever used in server code (`lib/supabase.ts` is guarded
  by `server-only`); RLS prevents it from reading lead data.
- Optional email alerts: set `RESEND_API_KEY` + `LEAD_NOTIFICATION_EMAIL`
  (server-only) and implement `lib/notifications/email.ts` (currently a no-op
  placeholder). Notification failures never break form submission.
- Never collect patient data/PHI through the form.

## Scripts

```bash
npm run dev     # develop
npm run build   # production build (fully static except the lead Server Action)
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

- `app/` — routes: marketing pages, `services/[slug]`, `specialties/[slug]`, `blog/[slug]`, `sitemap.ts`, `robots.ts`, `actions/leads.ts`
- `components/` — UI system (`ui/`), layout, forms, service/specialty/blog sections
- `lib/` — site config, SEO helpers + JSON-LD, data modules (`lib/data/`), Supabase server client, lead schema/rate-limit, notification placeholder
- `supabase/migrations/` — database schema
- `types/` — shared TypeScript types
