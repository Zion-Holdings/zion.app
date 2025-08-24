export type AdminQuoteStatus = 'New' | 'In Review' | 'Responded' | 'Accepted' | 'Closed';
export type TalentQuoteStatus = 'New' | 'Viewed' | 'Replied';

export type QuoteRequest = {
  id: string;
  talentSlug: string; // maps to TALENT_PROFILES.slug
  talentName: string;
  requesterName: string;
  summary: string;
  budgetUsd: number;
  timeline?: string;
  createdAt: string; // ISO date
  adminStatus: AdminQuoteStatus;
  talentStatus: TalentQuoteStatus;
  unread: boolean;
  archived?: boolean;
  details?: string;
};

export type QuoteFilters = {
  status?: AdminQuoteStatus | 'All';
  startDate?: string | null; // ISO
  endDate?: string | null; // ISO
  talentSlug?: string | 'All';
  search?: string;
};