-- Partners table
create table if not exists public.partners (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  name text not null,
  niche text,
  socials text,
  payout_method text,
  status text not null default 'pending',
  commission_rate numeric not null default 0.15,
  created_at timestamp with time zone default now()
);

-- Referral events table
create table if not exists public.referral_events (
  id uuid primary key default gen_random_uuid(),
  partner_code text not null references public.partners(code) on delete cascade,
  event text not null,
  url text,
  referrer text,
  user_agent text,
  ip_address text,
  created_at timestamp with time zone default now()
);

-- Payout requests
create table if not exists public.payout_requests (
  id uuid primary key default gen_random_uuid(),
  partner_code text not null references public.partners(code) on delete cascade,
  amount numeric,
  status text not null default 'requested',
  created_at timestamp with time zone default now()
);