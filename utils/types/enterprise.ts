export type EnterpriseRole = 'admin' | 'manager' | 'recruiter' | 'viewer';

export interface CompanyUsageLimits {
  monthlyJobPosts: number;
  budgetCapUsd: number;
}

export interface CompanyPlan {
  tier: 'teams' | 'business' | 'enterprise-custom';
  seatsPurchased: number;
  seatsUsed: number;
  usageLimits: CompanyUsageLimits;
}

export interface CompanyMember {
  id: string;
  email: string;
  name: string;
  role: EnterpriseRole;
}

export interface CompanyActivityEvent {
  id: string;
  timestampIso: string;
  actorEmail: string;
  action: string;
  meta?: Record<string, unknown>;
}

export interface InvoiceRecord {
  id: string;
  companyId: string;
  number: string;
  amountUsd: number;
  periodStartIso: string;
  periodEndIso: string;
  status: 'paid' | 'open' | 'void' | 'past_due';
}

export interface CompanyRecord {
  id: string;
  name: string;
  slug: string; // e.g. acme
  logoUrl?: string;
  brandColor?: string;
  plan: CompanyPlan;
  members: CompanyMember[];
  activity: CompanyActivityEvent[];
  invoices: InvoiceRecord[];
}