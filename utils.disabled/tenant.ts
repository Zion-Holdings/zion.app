import crypto from 'crypto';
import { readJsonFile, writeJsonFile, updateJsonFile } from './fileDb';

export type TenantRole = 'owner' | 'admin' | 'recruiter' | 'viewer';

export interface TenantMember {
  userId: string;
  email: string;
  role: TenantRole;
}

export interface TenantBranding {
  name: string;
  logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
  coBranding?: boolean;
  tagline?: string;
}

export interface Tenant {
  id: string;
  apiKey: string;
  branding: TenantBranding;
  members: TenantMember[];
  createdAt: string;
  updatedAt: string;
}

export interface TenantsFile {
  tenants: Tenant[];
}

const FILE = 'tenants.json';
const FALLBACK: TenantsFile = { tenants: [] };

export function getTenants(): Tenant[] {
  const data = readJsonFile<TenantsFile>(FILE, FALLBACK);
  return data.tenants;
}

export function getTenantById(tenantId: string): Tenant | undefined {
  return getTenants().find(t => t.id === tenantId);
}

export function getTenantByApiKey(apiKey: string): Tenant | undefined {
  return getTenants().find(t => t.apiKey === apiKey);
}

export function createTenant(branding: TenantBranding): Tenant {
  const now = new Date().toISOString();
  const id = crypto.randomUUID();
  const apiKey = crypto.randomBytes(24).toString('hex');
  const tenant: Tenant = {
    id,
    apiKey,
    branding,
    members: [],
    createdAt: now,
    updatedAt: now,
  };
  updateJsonFile<TenantsFile>(FILE, (curr) => ({ tenants: [...(curr.tenants || []), tenant] }), FALLBACK);
  return tenant;
}

export function updateTenant(tenantId: string, partial: Partial<Omit<Tenant, 'id' | 'apiKey'>>): Tenant | undefined {
  let result: Tenant | undefined = undefined;
  updateJsonFile<TenantsFile>(FILE, (curr) => {
    const tenants = (curr.tenants || []).map(t => {
      if (t.id !== tenantId) return t;
      const updated: Tenant = { ...t, ...partial, branding: { ...t.branding, ...(partial as any).branding }, updatedAt: new Date().toISOString() };
      result = updated;
      return updated;
    });
    return { tenants };
  }, FALLBACK);
  return result;
}

export function rotateTenantApiKey(tenantId: string): Tenant | undefined {
  let result: Tenant | undefined = undefined;
  updateJsonFile<TenantsFile>(FILE, (curr) => {
    const tenants = (curr.tenants || []).map(t => {
      if (t.id !== tenantId) return t;
      const updated: Tenant = { ...t, apiKey: crypto.randomBytes(24).toString('hex'), updatedAt: new Date().toISOString() };
      result = updated;
      return updated;
    });
    return { tenants };
  }, FALLBACK);
  return result;
}