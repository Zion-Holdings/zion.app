export type ApiScope =
  | 'view_jobs'
  | 'post_jobs'
  | 'view_talent'
  | 'create_quotes'
  | 'webhook_manage';

export type ApiKeyRecord = {
  id: string; // internal id
  userId: string;
  name: string; // user-provided label
  tokenHash: string; // sha256 hash of the token
  scopes: ApiScope[];
  approved: boolean;
  createdAt: string;
  lastUsedAt?: string;
  revokedAt?: string;
  rateLimitPerMinute: number;
  successCount: number;
  failureCount: number;
};

export type ApiLogRecord = {
  id: string;
  keyId?: string;
  userId?: string;
  timestamp: string;
  method: string;
  path: string;
  status: number;
  success: boolean;
  errorCode?: string;
  errorMessage?: string;
  ip?: string;
};

export type WebhookEventType =
  | 'new_application'
  | 'quote_received'
  | 'milestone_approved'
  | 'talent_hired';

export type WebhookListener = {
  id: string;
  userId: string;
  url: string;
  secret?: string;
  events: WebhookEventType[];
  createdAt: string;
  lastTestAt?: string;
};

export type Job = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  createdByUserId: string;
};

export type QuoteRequest = {
  id: string;
  jobId?: string;
  details: string;
  budgetUsd?: number;
  createdAt: string;
  createdByUserId: string;
};