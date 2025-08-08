-- Tenants table
create table if not exists public.tenants (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  brand_name text not null,
  subdomain text unique,
  custom_domain text unique,
  primary_color text default '#4f46e5',
  logo_url text,
  theme_preset text check (theme_preset in ('light','dark','neon','corporate','startup')) default 'light',
  navbar_links jsonb default '[{"label":"About","href":"/about"},{"label":"Blog","href":"/blog"},{"label":"Contact","href":"/contact"}]'::jsonb,
  footer_text text,
  hero_title text,
  hero_subtitle text,
  suspended boolean default false,
  account_manager text
);

-- Example content tables with tenant_id for isolation
create table if not exists public.cms_pages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  slug text not null,
  title text,
  content jsonb default '{}'
);
create unique index if not exists cms_pages_tenant_slug_idx on public.cms_pages(tenant_id, slug);

create table if not exists public.email_templates (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  name text not null,
  subject text,
  body text
);
create unique index if not exists email_templates_tenant_name_idx on public.email_templates(tenant_id, name);

-- Storage bucket for assets (create via UI or SQL in storage schema)
-- Ensure a public bucket named 'assets' exists for logos

-- Enable RLS and policies for tenant isolation
alter table public.cms_pages enable row level security;
alter table public.email_templates enable row level security;

-- Basic policy: users can only access rows for their tenant_id.
-- Adjust auth.tenant_id function as needed depending on your auth setup.
create or replace function public.current_tenant_id() returns uuid as $$
  select nullif(current_setting('request.jwt.claims', true)::jsonb->>'tenant_id','')::uuid;
$$ language sql stable;

create policy cms_pages_tenant_isolation on public.cms_pages
  using (tenant_id = public.current_tenant_id());
create policy email_templates_tenant_isolation on public.email_templates
  using (tenant_id = public.current_tenant_id());

-- Admin bypass policies using service role (handled by Supabase automatically)