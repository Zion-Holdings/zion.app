import fs from "fs";
import path from "path";
import { Endorsement, LeaderboardEntry, MergeResult, Proposal, SyncEnvelope, SyncScope, TalentMove, TokenTransfer, Vote } from "./types";
import { buildMerkleTree, generateProofs, hashLeafJson, signRootWithHmac, verifyHmacSignature } from "./merkle";

const MULTIVERSE_DIR = path.join(process.cwd(), "data", "multiverse");

function ensureDir(): void {
  if (!fs.existsSync(MULTIVERSE_DIR)) fs.mkdirSync(MULTIVERSE_DIR, { recursive: true });
}

function readJsonArraySafe<T>(filename: string): T[] {
  ensureDir();
  const full = path.join(MULTIVERSE_DIR, filename);
  try {
    const raw = fs.readFileSync(full, "utf8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed as T[];
    return [] as T[];
  } catch (_e) {
    return [] as T[];
  }
}

function writeJsonArray<T>(filename: string, arr: T[]): void {
  ensureDir();
  const full = path.join(MULTIVERSE_DIR, filename);
  fs.writeFileSync(full, JSON.stringify(arr, null, 2), "utf8");
}

export function getLocalState(scope: SyncScope): {
  proposals: Proposal[];
  votes: Vote[];
  tokenTransfers: TokenTransfer[];
  talentMoves: TalentMove[];
  endorsements: Endorsement[];
  leaderboard: LeaderboardEntry[];
  votesMerkle: { leaves: string[]; root: string; proofs: Record<string, string[]>; signature?: string; algorithm: "sha256" };
} {
  const proposals = readJsonArraySafe<Proposal>("proposals.json");
  const votes = readJsonArraySafe<Vote>("votes.json");
  const tokenTransfers = readJsonArraySafe<TokenTransfer>("tokenTransfers.json");
  const talentMoves = readJsonArraySafe<TalentMove>("talentMoves.json");
  const endorsements = readJsonArraySafe<Endorsement>("endorsements.json");
  const leaderboard = readJsonArraySafe<LeaderboardEntry>("leaderboard.json");

  const filtered = filterByScope({ proposals, votes, tokenTransfers, talentMoves, endorsements, leaderboard }, scope);

  const voteLeaves = filtered.votes.map(v => hashLeafJson([v.proposalId, v.voterId, v.choice, v.weight, v.timestamp]));
  const { root, levels } = buildMerkleTree(voteLeaves);
  const proofs = generateProofs(voteLeaves, levels);
  const signature = signRootWithHmac(root);

  return { ...filtered, votesMerkle: { leaves: voteLeaves, root, proofs, signature, algorithm: "sha256" } };
}

function filterByScope<T>(data: {
  proposals: Proposal[];
  votes: Vote[];
  tokenTransfers: TokenTransfer[];
  talentMoves: TalentMove[];
  endorsements: Endorsement[];
  leaderboard: LeaderboardEntry[];
}, scope: SyncScope): typeof data {
  if (scope === "full") return data;
  if (scope === "dao") {
    return { ...data, talentMoves: [], tokenTransfers: [], leaderboard: data.leaderboard.filter(l => l.category !== "treasury") };
  }
  // marketplace-only
  return { ...data, proposals: [], votes: [], endorsements: [], leaderboard: data.leaderboard.filter(l => l.category !== "milestones") };
}

export function createEnvelope(fromInstance: { id: string; name: string; baseUrl: string }, scope: SyncScope): SyncEnvelope {
  const { proposals, votes, tokenTransfers, talentMoves, endorsements, leaderboard, votesMerkle } = getLocalState(scope);
  return {
    from: { id: fromInstance.id, name: fromInstance.name, baseUrl: fromInstance.baseUrl },
    scope,
    timestamp: Date.now(),
    proposals,
    votes,
    tokenTransfers,
    talentMoves,
    endorsements,
    leaderboard,
    votesMerkle,
  };
}

export function mergeEnvelope(envelope: SyncEnvelope): MergeResult {
  // Verify Merkle signature if present/required
  if (envelope.votesMerkle) {
    const { root, signature } = envelope.votesMerkle;
    const ok = verifyHmacSignature(root, signature);
    if (!ok) {
      throw new Error("Invalid Merkle signature for votes set");
    }
  }

  // Load current
  const current = {
    proposals: readJsonArraySafe<Proposal>("proposals.json"),
    votes: readJsonArraySafe<Vote>("votes.json"),
    tokenTransfers: readJsonArraySafe<TokenTransfer>("tokenTransfers.json"),
    talentMoves: readJsonArraySafe<TalentMove>("talentMoves.json"),
    endorsements: readJsonArraySafe<Endorsement>("endorsements.json"),
    leaderboard: readJsonArraySafe<LeaderboardEntry>("leaderboard.json"),
  };

  // Merge strategies
  const existingProposalById = new Map(current.proposals.map(p => [p.id, p] as const));
  let appliedProposals = 0;
  for (const p of envelope.proposals || []) {
    const existing = existingProposalById.get(p.id);
    if (!existing) {
      current.proposals.push(p);
      appliedProposals++;
    } else if ((p.updatedAt || 0) > (existing.updatedAt || 0) || (p.version || 0) > (existing.version || 0)) {
      Object.assign(existing, p);
      appliedProposals++;
    }
  }

  const existingVoteKey = new Set(current.votes.map(v => `${v.id}`));
  let appliedVotes = 0;
  for (const v of envelope.votes || []) {
    const key = `${v.id}`;
    if (!existingVoteKey.has(key)) {
      current.votes.push(v);
      appliedVotes++;
    }
  }

  const existingTransferId = new Set(current.tokenTransfers.map(t => t.id));
  let appliedTransfers = 0;
  for (const t of envelope.tokenTransfers || []) {
    if (!existingTransferId.has(t.id)) {
      current.tokenTransfers.push(t);
      appliedTransfers++;
    }
  }

  const existingTalentId = new Set(current.talentMoves.map(t => t.id));
  let appliedTalent = 0;
  for (const t of envelope.talentMoves || []) {
    if (!existingTalentId.has(t.id)) {
      current.talentMoves.push(t);
      appliedTalent++;
    }
  }

  const existingEndorseId = new Set(current.endorsements.map(e => e.id));
  let appliedEndorse = 0;
  for (const e of envelope.endorsements || []) {
    if (!existingEndorseId.has(e.id)) {
      current.endorsements.push(e);
      appliedEndorse++;
    }
  }

  const existingLeaderboardId = new Set(current.leaderboard.map(l => l.id));
  let appliedLeader = 0;
  for (const l of envelope.leaderboard || []) {
    if (!existingLeaderboardId.has(l.id)) {
      current.leaderboard.push(l);
      appliedLeader++;
    }
  }

  // Persist
  writeJsonArray("proposals.json", current.proposals);
  writeJsonArray("votes.json", current.votes);
  writeJsonArray("tokenTransfers.json", current.tokenTransfers);
  writeJsonArray("talentMoves.json", current.talentMoves);
  writeJsonArray("endorsements.json", current.endorsements);
  writeJsonArray("leaderboard.json", current.leaderboard);

  return {
    applied: {
      proposals: appliedProposals,
      votes: appliedVotes,
      tokenTransfers: appliedTransfers,
      talentMoves: appliedTalent,
      endorsements: appliedEndorse,
      leaderboard: appliedLeader,
    },
    skipped: 0,
  };
}