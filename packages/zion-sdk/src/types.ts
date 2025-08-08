export type ID = string;

export interface PaginationQuery {
  limit?: number;
  offset?: number;
}

export interface Job {
  id: ID;
  title: string;
  description: string;
  skills: string[];
  budget?: number;
  createdAt: string;
}

export interface TalentProfile {
  id: ID;
  name: string;
  headline?: string;
  skills: string[];
  rates?: { hourly?: number; monthly?: number };
}

export interface Quote {
  id: ID;
  jobId: ID;
  talentId: ID;
  amount: number;
  message?: string;
  createdAt: string;
}

export interface Proposal {
  id: ID;
  title: string;
  description: string;
  milestones: Milestone[];
  status: 'draft' | 'active' | 'passed' | 'rejected' | 'executed';
  createdBy: ID;
}

export interface Milestone {
  id: ID;
  title: string;
  description?: string;
  payout?: number;
  status: 'pending' | 'in_progress' | 'complete' | 'paid';
}

export interface Vote {
  voter: ID;
  choice: 'for' | 'against' | 'abstain';
  weight: number;
}

export interface Course {
  id: ID;
  title: string;
  outline?: string[];
  url?: string;
}

export interface WalletBalance {
  token: string;
  balance: string;
}

export interface PaymentIntent {
  id: ID;
  amount: number;
  currency: string;
  status: 'requires_payment' | 'processing' | 'succeeded' | 'failed';
}