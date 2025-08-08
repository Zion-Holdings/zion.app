create extension if not exists "pgcrypto";

-- Talents table to store user profiles
create table if not exists public.talents (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  full_name text,
  bio text,
  roles text,
  industry text,
  skills jsonb default '{"programming":[],"devops":[],"platforms":[],"soft_skills":[]}'::jsonb,
  summary text,
  profile_incomplete boolean default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Cache table for AI results to reduce repeated calls
create table if not exists public.ai_skill_cache (
  cache_key text primary key,
  summary text not null,
  skills jsonb not null,
  created_at timestamptz not null default now()
);

-- Helpful indexes
create index if not exists idx_talents_user on public.talents(user_id);
create index if not exists idx_talents_updated on public.talents(updated_at desc);

-- Enable RLS
alter table public.talents enable row level security;

-- Policy: owners can update their profiles
create policy if not exists "Owners can update own profile"
  on public.talents for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Policy: owners can select their profiles
create policy if not exists "Owners can select own profile"
  on public.talents for select
  using (auth.uid() = user_id);

-- Policy: owners can insert their own profile
create policy if not exists "Owners can insert own profile"
  on public.talents for insert
  with check (auth.uid() = user_id);

-- Trigger to keep updated_at fresh
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_talents_set_updated_at on public.talents;
create trigger trg_talents_set_updated_at
before update on public.talents
for each row execute function public.set_updated_at();