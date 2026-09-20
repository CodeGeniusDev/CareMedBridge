-- CareMedBridge — leads table (Phase 4)
-- Stores consultation / contact form submissions.
--
-- Security model:
--   * The anon key (used server-side only) may INSERT and nothing else,
--     enforced by row level security below.
--   * Reads, status updates, and exports happen with the service role key
--     (server-only, never NEXT_PUBLIC_) or directly in the Supabase dashboard.
--
-- Run this in the Supabase SQL editor or via `supabase db push`.

create extension if not exists "pgcrypto"; -- gen_random_uuid()

create table if not exists public.leads (
  id              uuid primary key default gen_random_uuid(),
  -- Client-generated idempotency key: makes duplicate clicks and retries safe.
  submission_id   uuid not null unique,
  full_name       text not null check (char_length(full_name) between 1 and 100),
  practice_name   text not null check (char_length(practice_name) between 1 and 150),
  email           text not null check (char_length(email) between 1 and 254),
  phone           text not null check (char_length(phone) between 7 and 25),
  specialty       text not null,
  provider_count  text not null,
  services_needed text[] not null check (cardinality(services_needed) >= 1),
  -- Never collect patient data / PHI through this form. Free text is capped.
  message         text check (message is null or char_length(message) <= 2000),
  status          text not null default 'new' check (status in ('new', 'contacted', 'qualified', 'closed')),
  created_at      timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);
create index if not exists leads_email_idx on public.leads (email);

alter table public.leads enable row level security;

-- Anonymous site visitors may create leads only. With no select/update/delete
-- policy for anon, those requests are denied by default.
create policy "anon can create leads"
  on public.leads for insert
  to anon
  with check (true);
