import { supabase } from './supabase/client';

export type Tenant = {
  id: string;
  name: string; // e.g., Zion Health
  subdomain: string; // e.g., health
  fullDomain?: string; // e.g., health.ziontechgroup.com
  logoUrl?: string;
  accentColorHex?: string; // used as --accent
  brandColorHex?: string; // used as --brand
  whiteLabel?: boolean;
  categories?: string[];
  defaultAiTerms?: 'HIPAA' | 'GDPR' | 'NONE';
  createdAt?: string;
};

const isSupabaseConfigured = () => {
  return (
    typeof process !== 'undefined' &&
    !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co' &&
    !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== 'placeholder-key'
  );
};

export function getSubdomainFromHost(host?: string): string | null {
  if (!host) return null;
  const parts = host.split(':')[0].split('.');
  if (parts.length <= 2) return null; // example.com or localhost
  return parts[0];
}

export async function fetchTenantBySubdomain(subdomain: string): Promise<Tenant | null> {
  if (isSupabaseConfigured()) {
    const { data, error } = await supabase
      .from('tenants')
      .select('*')
      .eq('subdomain', subdomain)
      .maybeSingle();
    if (error) {
      // fallback to file if supabase fails
      // eslint-disable-next-line no-console
      console.warn('Supabase fetch tenant error, falling back to file:', error.message);
      return fetchTenantFromFile(subdomain);
    }
    return (data as Tenant) ?? null;
  }
  return fetchTenantFromFile(subdomain);
}

async function fetchTenantFromFile(subdomain: string): Promise<Tenant | null> {
  const tenants = await import('../data/tenants.json').then((m) => m.default as Tenant[]);
  return tenants.find((t) => t.subdomain === subdomain) ?? null;
}

export async function resolveTenantFromHost(host: string): Promise<Tenant | null> {
  const sub = getSubdomainFromHost(host);
  if (!sub) return null;
  return fetchTenantBySubdomain(sub);
}

export type ServerSideTenantResult = { tenant: Tenant | null };

export async function getServerSideTenant(ctx: { req?: any }): Promise<ServerSideTenantResult> {
  const host: string | undefined = ctx?.req?.headers?.host;
  if (!host) return { tenant: null };
  const tenant = await resolveTenantFromHost(host);
  return { tenant };
}