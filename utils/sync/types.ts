export type SyncScope = "full" | "dao" | "marketplace";

export interface InstanceMeta {
  id: string;
  name: string;
  baseUrl: string; // e.g., https://latam.zion.app
  publicKey?: string; // optional public key for signature verification
}

export interface Proposal {
  id: string; // globally unique (instance-prefixed)
  title: string;
  description?: string;
  createdAt: number; // epoch ms
  updatedAt: number; // epoch ms
  status: "draft" | "active" | "closed";
  daoId: string;
  authorId?: string;
  tags?: string[];
  version: number; // monotonic version
}

export interface Vote {
  id: string; // unique id for vote record
  proposalId: string;
  voterId: string;
  choice: string; // e.g., yes/no/abstain or option id
  weight: number; // token-weighted, quadratic, etc.
  timestamp: number; // epoch ms
}

export interface TokenTransfer {
  id: string; // unique id
  fromSubnet: string;
  toSubnet: string;
  token: string;
  amount: string; // use string to avoid float issues
  escrowId?: string;
  timestamp: number;
}

export interface TalentMove {
  id: string;
  personId: string;
  fromNation?: string;
  toNation: string;
  role: string;
  startDate: number;
  endDate?: number;
}

export interface Endorsement {
  id: string;
  fromDaoId: string;
  toDaoId: string;
  resolutionId?: string;
  message?: string;
  timestamp: number;
}

export interface LeaderboardEntry {
  id: string; // unique entry id
  category: "grants" | "contributors" | "treasury" | "milestones";
  subjectId: string; // winner or contributor id
  score: number;
  period: string; // e.g., 2025-Q3
}

export interface VotesMerkleBundle {
  leaves: string[]; // hashed leaves (hex)
  root: string; // hex
  proofs: Record<string, string[]>; // voteId -> merkle proof (array of hex sibling hashes)
  signature?: string; // signature over root
  algorithm: "sha256";
}

export interface SyncEnvelope {
  from: InstanceMeta;
  scope: SyncScope;
  timestamp: number;
  proposals?: Proposal[];
  votes?: Vote[];
  tokenTransfers?: TokenTransfer[];
  talentMoves?: TalentMove[];
  endorsements?: Endorsement[];
  leaderboard?: LeaderboardEntry[];
  votesMerkle?: VotesMerkleBundle; // verification bundle for votes
  instanceVectorClock?: Record<string, number>; // instanceId -> logical time
}

export interface SyncConfig {
  enabled: boolean;
  paused: boolean; // DAO can pause globally
  scope: SyncScope;
  instance: InstanceMeta;
  peers: InstanceMeta[]; // other instances
  requireSignatures: boolean;
  p2pEnabled: boolean;
  pollIntervalSec: number; // default 60
}

export interface MergeResult {
  applied: {
    proposals: number;
    votes: number;
    tokenTransfers: number;
    talentMoves: number;
    endorsements: number;
    leaderboard: number;
  };
  skipped: number;
}