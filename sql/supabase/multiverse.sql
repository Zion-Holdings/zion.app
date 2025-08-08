-- Tenants table
create table if not exists public.tenants (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  subdomain text unique not null,
  fullDomain text,
  logoUrl text,
  accentColorHex text,
  brandColorHex text,
  whiteLabel boolean default false,
  categories text[] default '{}',
  defaultAiTerms text check (defaultAiTerms in ('HIPAA','GDPR','NONE')) default 'NONE',
  createdAt timestamptz default now()
);

-- Users linked to tenants
create table if not exists public.user_tenants (
  user_id uuid not null references auth.users(id) on delete cascade,
  tenant_id uuid not null references public.tenants(id) on delete cascade,
  ai_resume jsonb default '{}'::jsonb,
  primary key (user_id, tenant_id)
);

-- Content with optional global visibility
create table if not exists public.content (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references public.tenants(id) on delete cascade,
  type text not null check (type in ('blog','seo','course')),
  title text not null,
  body text,
  is_global boolean default false,
  created_by uuid references auth.users(id),
  created_at timestamptz default now()
);

-- Enable RLS
alter table public.tenants enable row level security;
alter table public.user_tenants enable row level security;
alter table public.content enable row level security;

-- Policies
-- Tenants: readable by any authenticated user (for discovery), insert/update by service role only
create policy "read tenants" on public.tenants for select using (true);

-- user_tenants: user can read/write their own rows
create policy "user manage own memberships" on public.user_tenants
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- content: allow select if global or user has membership in tenant
create policy "content select by tenant membership or global" on public.content
for select using (
  is_global OR EXISTS (
    select 1 from public.user_tenants ut
    where ut.user_id = auth.uid() and ut.tenant_id = content.tenant_id
  )
);

-- content: insert/update only if user is member
create policy "content write by member" on public.content
for all
using (
  EXISTS (
    select 1 from public.user_tenants ut
    where ut.user_id = auth.uid() and ut.tenant_id = content.tenant_id
  )
)
with check (
  EXISTS (
    select 1 from public.user_tenants ut
    where ut.user_id = auth.uid() and ut.tenant_id = content.tenant_id
  )
);