create table if not exists public.whitelabel_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  brand_name text not null,
  subdomain text,
  primary_color text,
  custom_domain text,
  theme_preset text
);