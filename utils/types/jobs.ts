export type BoardName =
  | 'LinkedIn'
  | 'Indeed'
  | 'StackOverflow'
  | 'RemoteOK'
  | 'HackerNews'
  | 'AngelList';

export type SyndicationBoardOption = {
  name: BoardName;
  selected: boolean;
};

export type JobInput = {
  jobId?: string;
  internalTitle?: string;
  internalDescription: string;
  location?: string;
  employmentType?: string; // e.g., Full-time, Contract
  remote?: boolean;
  companyName?: string;
  applyUrl?: string;
};

export type FormattedJob = {
  title: string;
  summary: string;
  skills: string[];
  tags: string[];
  markdown: string; // final board-ready markdown/plaintext
};

export type BoardRequirement = {
  maxTitleLength?: number;
  maxSummaryLength?: number;
  requiredTags?: string[];
  prohibitedTerms?: string[];
  tone?: 'professional' | 'concise' | 'technical' | 'community';
  acceptsMarkdown?: boolean;
};

export type BoardConfig = {
  name: BoardName;
  slug: string;
  requirements: BoardRequirement;
};

export type SyndicationRequest = {
  job: JobInput;
  boards: BoardName[];
  formatted?: FormattedJob;
  utm?: {
    campaign?: string;
    medium?: string;
  };
  autoRefresh?: {
    enabled: boolean;
    cadence: 'weekly' | 'biweekly' | 'monthly';
  };
  boost?: {
    tokens?: number; // optional paid boost tokens
  };
};

export type BoardPublishResult = {
  board: BoardName;
  status: 'queued' | 'published' | 'error';
  message?: string;
  shareUrl?: string;
};

export type SyndicationPublishResponse = {
  jobId: string;
  results: BoardPublishResult[];
  syndicatedCount: number;
};

export type BoardMetric = {
  board: BoardName;
  clicks: number;
  applications: number;
};

export type JobMetrics = {
  jobId: string;
  metrics: BoardMetric[];
  lastUpdated: string;
};