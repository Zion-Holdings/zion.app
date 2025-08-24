export type RoadmapStatus = 'Planned' | 'In Progress' | 'Completed' | 'Queue';

export type RoadmapTag = 'AI' | 'Trust' | 'Token' | 'DAO' | 'Infra' | 'Community' | 'UX' | 'Security';

export type ExternalLink = {
  label: string;
  url: string;
};

export type Feature = {
  id: string;
  slug: string;
  title: string;
  description?: string;
  etaQuarter?: string; // e.g., "Q3 2025"
  tags: RoadmapTag[];
  status: RoadmapStatus;
  upvotesWeighted: number;
  upvoteCount: number; // number of user upvotes (unweighted)
  followerCount: number;
  commentsCount?: number;
  previewImageUrl?: string;
  previewEmbedUrl?: string; // e.g., Loom
  links?: ExternalLink[];
  createdAt: string;
  updatedAt: string;
  voterIds?: string[];
  followerIds?: string[];
};

export type UserRole = 'Talent' | 'Client' | 'ZION$ staker';

export const roleWeights: Record<UserRole, number> = {
  Talent: 1,
  Client: 2,
  'ZION$ staker': 3,
};

export type SuggestionInput = {
  title: string;
  description?: string;
  tags: RoadmapTag[];
  etaQuarter?: string;
  links?: ExternalLink[];
};