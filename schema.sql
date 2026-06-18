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

-- ── Policies (locked down) ──────────────────────────────────────────────────
-- Anyone can READ (so customer tracking links work without a login)...
create policy "public read" on public.jobs for select using (true);

-- ...but only the signed-in owner can CREATE / EDIT / DELETE jobs.
-- This email must match ADMIN_EMAIL in config.js. To change it, update both.
create policy "owner write" on public.jobs for all
  using      (auth.jwt() ->> 'email' = 'ethan@splinter4x4.com.au')
  with check (auth.jwt() ->> 'email' = 'ethan@splinter4x4.com.au');

-- The owner signs in on the board via a one-time email link (Supabase Auth →
-- Email provider is on by default). Optional but recommended: in Supabase →
-- Authentication → Providers → Email, turn OFF "Allow new users to sign up"
-- so only your existing account can ever authenticate.
