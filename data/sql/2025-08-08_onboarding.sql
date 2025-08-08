-- Onboarding progress table
create table if not exists public.user_onboarding_progress (
  user_id uuid not null,
  role text not null check (role in ('talent','client')),
  milestone text not null,
  status text not null check (status in ('pending','complete')) default 'pending',
  last_updated timestamptz not null default now(),
  created_at timestamptz not null default now(),
  primary key (user_id, role, milestone)
);

-- Index to query stale milestones
create index if not exists idx_onboarding_pending_stale
  on public.user_onboarding_progress (status, last_updated);

-- Enable RLS
alter table public.user_onboarding_progress enable row level security;

-- RLS: users can read/write their own rows
create policy if not exists "Users can view own progress"
  on public.user_onboarding_progress
  for select
  using (auth.uid() = user_id);

create policy if not exists "Users can update own progress"
  on public.user_onboarding_progress
  for insert
  with check (auth.uid() = user_id);

create policy if not exists "Users can modify own progress"
  on public.user_onboarding_progress
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);