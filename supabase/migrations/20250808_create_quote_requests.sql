-- Create quote_requests table
create table if not exists public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  talent_id text,
  talent_name text,
  requester_name text not null,
  requester_email text not null,
  summary text,
  full_description text not null,
  project_type text,
  timeline text,
  budget_display text,
  budget_currency text,
  budget_min numeric,
  budget_max numeric,
  status text not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Simple trigger to update updated_at
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists set_quote_requests_updated_at on public.quote_requests;
create trigger set_quote_requests_updated_at
before update on public.quote_requests
for each row execute function public.set_updated_at();

-- Basic RLS setup (adjust to your needs)
alter table public.quote_requests enable row level security;

-- Allow service role full access (implicit)
-- Example policy for admin role via JWT claims (customize as needed)
-- create policy "Allow authenticated read own" on public.quote_requests for select
--   using (auth.uid() is not null);