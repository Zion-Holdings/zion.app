export type GovernanceStyle = 'admin' | 'token-weighted' | 'delegate';

export type FundingModel = 'zion-treasury' | 'partner-subsidies' | 'member-dues';

export type NationCurrency = 'ZION$' | 'WZION$';

export interface Milestone {
  id: string;
  title: string;
  description?: string;
  status: 'planned' | 'in-progress' | 'done';
}

export interface Proposal {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'passed' | 'rejected';
  votesFor?: number;
  votesAgainst?: number;
}

export interface Nation {
  id: string;
  slug: string;
  name: string;
  flagDataUrl?: string;
  constitution: string;
  governanceStyle: GovernanceStyle;
  fundingModel: FundingModel;
  currency: NationCurrency;
  population: number;
  talentCount: number;
  clientCount: number;
  milestones: Milestone[];
  proposals: Proposal[];
  createdAt: string;
  updatedAt: string;
}