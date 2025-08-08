export type Address = string;

export interface FaucetLedger {
  [address: string]: number;
}

export interface Job {
  id: string;
  title: string;
  description: string;
  reward: number;
  createdByAddress: Address;
  createdAt: number;
}

export interface TalentProfile {
  id: string;
  name: string;
  skills: string[];
  bio?: string;
}

export type VoteChoice = 'yes' | 'no';

export interface VoteRecord {
  voter: Address;
  choice: VoteChoice;
  timestamp: number;
}

export type ProposalStatus = 'open' | 'passed' | 'failed';

export interface Proposal {
  id: string;
  title: string;
  description: string;
  author: Address;
  createdAt: number;
  status: ProposalStatus;
  votes: VoteRecord[];
}

export interface Nation {
  id: string;
  name: string;
  founder: Address;
  createdAt: number;
  manifesto?: string;
}

export interface DevNetState {
  faucet: FaucetLedger;
  jobs: Job[];
  talent: TalentProfile[];
  proposals: Proposal[];
  nations: Nation[];
}

const globalStateKey = Symbol.for('zion.devnet.state');

function generateId(prefix: string = 'id'): string {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}_${Date.now().toString(36)}`;
}

function seedTalent(): TalentProfile[] {
  return [
    { id: generateId('talent'), name: 'Ari Innovator', skills: ['AI', 'Product'], bio: 'Builder of intelligent systems.' },
    { id: generateId('talent'), name: 'Sol Dev', skills: ['Solidity', 'Governance'], bio: 'Smart contracts and DAOs.' },
    { id: generateId('talent'), name: 'Fulla Stack', skills: ['Next.js', 'Node'], bio: 'End-to-end app developer.' },
  ];
}

function seedJobs(): Job[] {
  return [
    { id: generateId('job'), title: 'Design Zion OS Landing', description: 'Create modern landing page designs.', reward: 250, createdByAddress: 'zion:system', createdAt: Date.now() },
    { id: generateId('job'), title: 'Implement DAO Voting', description: 'Simulate governance voting logic.', reward: 400, createdByAddress: 'zion:system', createdAt: Date.now() },
  ];
}

function createInitialState(): DevNetState {
  return {
    faucet: {},
    jobs: seedJobs(),
    talent: seedTalent(),
    proposals: [],
    nations: [],
  };
}

// Ensure a single shared instance across hot-reloads in dev
// @ts-ignore
const globalForDevNet: { [key: symbol]: DevNetState } = (global as any) as { [key: symbol]: DevNetState };

if (!globalForDevNet[globalStateKey]) {
  globalForDevNet[globalStateKey] = createInitialState();
}

export const devNetState: DevNetState = globalForDevNet[globalStateKey];

export const devNetId = { generateId };