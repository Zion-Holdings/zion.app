import fs from 'fs';
import path from 'path';

export type GovernanceStyle = 'admin' | 'token_weighted' | 'delegate';
export type FundingModel = 'zion_treasury' | 'partner_subsidies' | 'member_dues';
export type NationCurrency = 'ZION$' | 'WRAPPED_ZION$' | 'CUSTOM';

export type NationMember = {
  userId: string;
  role: 'talent' | 'client' | 'citizen' | 'operator';
  joinedAt: string;
};

export type NationMilestone = {
  id: string;
  title: string;
  description?: string;
  targetDate?: string;
  status: 'planned' | 'in_progress' | 'complete';
};

export type NationProposal = {
  id: string;
  title: string;
  description?: string;
  status: 'draft' | 'active' | 'passed' | 'failed';
  votesFor: number;
  votesAgainst: number;
  createdAt: string;
};

export type Nation = {
  id: string;
  slug: string;
  name: string;
  flagDataUrl?: string;
  constitution: string;
  governanceStyle: GovernanceStyle;
  fundingModel: FundingModel;
  currency: NationCurrency;
  createdAt: string;
  updatedAt: string;
  members: NationMember[];
  milestones: NationMilestone[];
  proposals: NationProposal[];
};

const DATA_DIR = path.join(process.cwd(), 'data');
const NATIONS_FILE = path.join(DATA_DIR, 'nations.json');

function ensureDataFileExists(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(NATIONS_FILE)) {
    fs.writeFileSync(NATIONS_FILE, JSON.stringify([], null, 2));
  }
}

export function loadAllNations(): Nation[] {
  ensureDataFileExists();
  const raw = fs.readFileSync(NATIONS_FILE, 'utf8');
  try {
    const parsed = JSON.parse(raw) as Nation[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveAllNations(nations: Nation[]): void {
  ensureDataFileExists();
  fs.writeFileSync(NATIONS_FILE, JSON.stringify(nations, null, 2));
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function generateId(): string {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

export function createNation(params: {
  name: string;
  flagDataUrl?: string;
  constitution: string;
  governanceStyle: GovernanceStyle;
  fundingModel: FundingModel;
  currency?: NationCurrency;
}): Nation {
  const nations = loadAllNations();
  const slugBase = slugify(params.name);
  let slug = slugBase;
  let i = 1;
  while (nations.some(n => n.slug === slug)) {
    slug = `${slugBase}-${i++}`;
  }

  const now = new Date().toISOString();
  const nation: Nation = {
    id: generateId(),
    slug,
    name: params.name,
    flagDataUrl: params.flagDataUrl,
    constitution: params.constitution,
    governanceStyle: params.governanceStyle,
    fundingModel: params.fundingModel,
    currency: params.currency || 'ZION$',
    createdAt: now,
    updatedAt: now,
    members: [],
    milestones: [],
    proposals: [],
  };

  nations.push(nation);
  saveAllNations(nations);
  return nation;
}

export function getNationBySlug(slug: string): Nation | undefined {
  const nations = loadAllNations();
  return nations.find(n => n.slug === slug);
}

export function updateNation(slug: string, update: Partial<Nation>): Nation | undefined {
  const nations = loadAllNations();
  const index = nations.findIndex(n => n.slug === slug);
  if (index === -1) return undefined;
  const updated: Nation = { ...nations[index], ...update, updatedAt: new Date().toISOString() };
  nations[index] = updated;
  saveAllNations(nations);
  return updated;
}

export function addMember(slug: string, member: Omit<NationMember, 'joinedAt'>): Nation | undefined {
  const nation = getNationBySlug(slug);
  if (!nation) return undefined;
  nation.members.push({ ...member, joinedAt: new Date().toISOString() });
  return updateNation(slug, { members: nation.members });
}

export function addMilestone(slug: string, milestone: Omit<NationMilestone, 'id' | 'status'> & { status?: NationMilestone['status'] }): Nation | undefined {
  const nation = getNationBySlug(slug);
  if (!nation) return undefined;
  const newMilestone: NationMilestone = {
    id: generateId(),
    title: milestone.title,
    description: milestone.description,
    targetDate: milestone.targetDate,
    status: milestone.status || 'planned',
  };
  nation.milestones.push(newMilestone);
  return updateNation(slug, { milestones: nation.milestones });
}

export function addProposal(slug: string, proposal: Omit<NationProposal, 'id' | 'status' | 'votesFor' | 'votesAgainst' | 'createdAt'> & { status?: NationProposal['status'] }): Nation | undefined {
  const nation = getNationBySlug(slug);
  if (!nation) return undefined;
  const newProposal: NationProposal = {
    id: generateId(),
    title: proposal.title,
    description: proposal.description,
    status: proposal.status || 'draft',
    votesFor: 0,
    votesAgainst: 0,
    createdAt: new Date().toISOString(),
  };
  nation.proposals.push(newProposal);
  return updateNation(slug, { proposals: nation.proposals });
}

export function voteOnProposal(slug: string, proposalId: string, vote: 'for' | 'against'): Nation | undefined {
  const nation = getNationBySlug(slug);
  if (!nation) return undefined;
  nation.proposals = nation.proposals.map(p => {
    if (p.id !== proposalId) return p;
    return {
      ...p,
      votesFor: p.votesFor + (vote === 'for' ? 1 : 0),
      votesAgainst: p.votesAgainst + (vote === 'against' ? 1 : 0),
    };
  });
  return updateNation(slug, { proposals: nation.proposals });
}