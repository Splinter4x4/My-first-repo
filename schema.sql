-- ── Splinter 4x4 Build Board — Supabase schema ─────────────────────────────
-- Run this once in your Supabase project: SQL Editor → New query → paste → Run.

create extension if not exists "pgcrypto";

create table if not exists public.jobs (
  id         uuid primary key default gen_random_uuid(),
  token      text unique not null,
  name       text not null,
  first      text,
  email      text,
  phone      text,
  make       text,
  model      text,
  rego       text,
  build      text,
  stage      text not null default 'booked',
  flag       boolean not null default false,
  dropoff    date,
  due        date,
  created_at timestamptz not null default now()
);

-- Turn on realtime so customer tracking pages update the moment you advance a stage.
alter publication supabase_realtime add table public.jobs;

-- Row Level Security.
alter table public.jobs enable row level security;

-- ── v1 policy (fast start) ──────────────────────────────────────────────────
-- Lets the static site read & write with the public anon key. Simple and works
-- immediately. Fine while the admin page (index.html) URL is kept private.
--
-- ⚠️  SECURITY: the anon key ships in the website, so anyone who finds it could
--    edit jobs. Before you advertise the admin URL publicly, switch to the
--    "hardened" policy block below (Supabase Auth — only your email can write,
--    everyone can still read their build by link).
create policy "anon read"   on public.jobs for select using (true);
create policy "anon insert" on public.jobs for insert with check (true);
create policy "anon update" on public.jobs for update using (true) with check (true);
create policy "anon delete" on public.jobs for delete using (true);

-- ── Hardened policy (recommended once live) ─────────────────────────────────
-- Enable Supabase Auth, sign in as ethan@splinter4x4.com.au, then run:
--
-- drop policy "anon insert" on public.jobs;
-- drop policy "anon update" on public.jobs;
-- drop policy "anon delete" on public.jobs;
-- create policy "owner write" on public.jobs for all
--   using (auth.jwt() ->> 'email' = 'ethan@splinter4x4.com.au')
--   with check (auth.jwt() ->> 'email' = 'ethan@splinter4x4.com.au');
-- (Keep "anon read" so customer links keep working.)
