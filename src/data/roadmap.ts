export interface RoadmapItem {
  id: string;
  title: string;
  eta: string;
  tags: string[];
  status: 'Planned' | 'In Progress' | 'Completed';
  upvotes: number;
  followers: number;
  description?: string;
  previewImage?: string;
  figmaUrl?: string;
  loomUrl?: string;
  repoUrl?: string;
}

export const ROADMAP_ITEMS: RoadmapItem[] = [
  {
    id: 'ai-search',
    title: 'AI-Powered Search',
    eta: 'Q3 2025',
    tags: ['AI', 'Search'],
    status: 'Planned',
    upvotes: 12,
    followers: 3,
    description: 'Improve marketplace search relevancy using machine learning.'
  },
  {
    id: 'dao-governance',
    title: 'DAO Governance Tools',
    eta: 'Q1 2026',
    tags: ['DAO', 'Governance'],
    status: 'In Progress',
    upvotes: 20,
    followers: 8,
    description: 'Enable community proposals and on-chain voting.'
  },
  {
    id: 'token-staking',
    title: 'ZION$ Token Staking',
    eta: 'Q4 2025',
    tags: ['Token'],
    status: 'Completed',
    upvotes: 42,
    followers: 15,
    description: 'Allow users to stake ZION$ to earn rewards and governance power.'
  }
];
