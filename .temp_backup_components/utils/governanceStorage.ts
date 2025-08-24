import fs from 'fs';
import path from 'path';

export type ProposalType = 'Feature' | 'Budget' | 'Community Grant';
export type ProposalStatus = 'Live' | 'Executed' | 'Failed' | 'Queued';

export type Proposal = {
  id: string;
  title: string;
  summary: string;
  type: ProposalType;
  quorumPercent: number;
  votingPeriodDays: number;
  fundingAsk?: number;
  referenceLinks?: string[];
  createdAt: number;
  startTime: number;
  endTime: number;
  status: ProposalStatus;
  queued?: boolean;
  executedTxHash?: string;
  snapshotUrl?: string;
  ipfsCid?: string;
};

export type VoteOption = 'approve' | 'reject' | 'abstain';

export type Vote = {
  id: string; // unique vote id
  proposalId: string;
  voter: string; // wallet address (lowercased)
  option: VoteOption;
  power: number; // voting power weight
  createdAt: number;
};

const dataDir = path.join(process.cwd(), 'data', 'governance');
const proposalsPath = path.join(dataDir, 'proposals.json');
const votesPath = path.join(dataDir, 'votes.json');

function ensureFiles() {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(proposalsPath)) fs.writeFileSync(proposalsPath, '[]');
  if (!fs.existsSync(votesPath)) fs.writeFileSync(votesPath, '[]');
}

export function readProposals(): Proposal[] {
  ensureFiles();
  const raw = fs.readFileSync(proposalsPath, 'utf-8');
  try { return JSON.parse(raw); } catch { return []; }
}

export function writeProposals(list: Proposal[]) {
  ensureFiles();
  fs.writeFileSync(proposalsPath, JSON.stringify(list, null, 2));
}

export function readVotes(): Vote[] {
  ensureFiles();
  const raw = fs.readFileSync(votesPath, 'utf-8');
  try { return JSON.parse(raw); } catch { return []; }
}

export function writeVotes(list: Vote[]) {
  ensureFiles();
  fs.writeFileSync(votesPath, JSON.stringify(list, null, 2));
}

export function computeProposalStatus(proposal: Proposal, votes: Vote[]): ProposalStatus {
  const now = Date.now();
  if (now < proposal.endTime && now >= proposal.startTime) return 'Live';

  // After end, compute results
  const proposalVotes = votes.filter(v => v.proposalId === proposal.id);
  const totalPower = proposalVotes.reduce((acc, v) => acc + v.power, 0);
  const approvePower = proposalVotes.filter(v => v.option === 'approve').reduce((a, v) => a + v.power, 0);

  const quorumReached = totalPower >= proposal.quorumPercent; // Interpreted as absolute power for demo

  if (!quorumReached) return 'Failed';
  if (approvePower > totalPower / 2) {
    if (proposal.executedTxHash) return 'Executed';
    if (proposal.queued) return 'Queued';
    return 'Live';
  }
  return 'Failed';
}

export function upsertProposal(updated: Proposal) {
  const list = readProposals();
  const idx = list.findIndex(p => p.id === updated.id);
  if (idx === -1) list.push(updated); else list[idx] = updated;
  writeProposals(list);
}

export function addVote(vote: Vote) {
  const list = readVotes();
  // prevent duplicate vote by same voter; replace latest within period
  const filtered = list.filter(v => !(v.proposalId === vote.proposalId && v.voter === vote.voter));
  filtered.push(vote);
  writeVotes(filtered);
}

export function getProposalTally(proposalId: string) {
  const votes = readVotes().filter(v => v.proposalId === proposalId);
  const tally = { approve: 0, reject: 0, abstain: 0, total: 0 } as Record<string, number>;
  for (const v of votes) { tally[v.option] += v.power; tally.total += v.power; }
  return { tally, votes };
}