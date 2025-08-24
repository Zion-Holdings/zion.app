import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export type ZgpFunding = { amount: number; currency: string } | null;

export type ZgpProposalVersion = {
  version: number;
  summary: string;
  motivation: string;
  specificationImpact: string;
  codeModuleAffected: string;
  votingOptions: string[];
  fundingNeeded: ZgpFunding;
  createdAt: string;
};

export type ZgpProposal = {
  id: string; // uuid
  templateId: string; // e.g., 'zgp-01'
  templateCode: string; // e.g., 'ZGP-01'
  title: string; // freeform display title
  proposalNumber: string; // e.g., 'ZGP-01-20250808-0001'
  status: 'draft' | 'submitted' | 'archived';
  versions: ZgpProposalVersion[];
  latestVersion: number;
  votingResultUrl?: string;
};

export type ZgpTemplate = {
  id: string;
  code: string;
  title: string;
  category: string;
  description: string;
  defaults: {
    summary: string;
    motivation: string;
    specificationImpact: string;
    codeModuleAffected: string;
    votingOptions: string[];
    fundingNeeded: ZgpFunding;
  };
};

const DATA_DIR = path.join(process.cwd(), 'data');
const PROPOSALS_FILE = path.join(DATA_DIR, 'zgp-proposals.json');
const TEMPLATES_FILE = path.join(DATA_DIR, 'zgp-templates.json');

function ensureDataFilesExist(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(PROPOSALS_FILE)) {
    fs.writeFileSync(PROPOSALS_FILE, JSON.stringify({ proposals: [] }, null, 2));
  }
}

export function loadTemplates(): ZgpTemplate[] {
  const raw = fs.readFileSync(TEMPLATES_FILE, 'utf8');
  return JSON.parse(raw) as ZgpTemplate[];
}

export function listProposals(): ZgpProposal[] {
  ensureDataFilesExist();
  const raw = fs.readFileSync(PROPOSALS_FILE, 'utf8');
  const data = JSON.parse(raw) as { proposals: ZgpProposal[] };
  return data.proposals || [];
}

export function saveProposals(proposals: ZgpProposal[]): void {
  ensureDataFilesExist();
  fs.writeFileSync(PROPOSALS_FILE, JSON.stringify({ proposals }, null, 2));
}

export function generateProposalNumber(templateCode: string, existing: ZgpProposal[]): string {
  const date = new Date();
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, '0');
  const d = String(date.getUTCDate()).padStart(2, '0');
  const yyyymmdd = `${y}${m}${d}`;
  const sameDay = existing.filter(p => p.templateCode === templateCode && p.proposalNumber.includes(yyyymmdd));
  const seq = sameDay.length + 1;
  return `${templateCode}-${yyyymmdd}-${String(seq).padStart(4, '0')}`;
}

export function createProposal(params: {
  templateId: string;
  title: string;
  summary: string;
  motivation: string;
  specificationImpact: string;
  codeModuleAffected: string;
  votingOptions: string[];
  fundingNeeded: ZgpFunding;
}): ZgpProposal {
  const proposals = listProposals();
  const templates = loadTemplates();
  const template = templates.find(t => t.id === params.templateId);
  if (!template) {
    throw new Error('Template not found');
  }
  const id = uuidv4();
  const proposalNumber = generateProposalNumber(template.code, proposals);
  const firstVersion: ZgpProposalVersion = {
    version: 1,
    summary: params.summary,
    motivation: params.motivation,
    specificationImpact: params.specificationImpact,
    codeModuleAffected: params.codeModuleAffected,
    votingOptions: params.votingOptions,
    fundingNeeded: params.fundingNeeded,
    createdAt: new Date().toISOString(),
  };
  const proposal: ZgpProposal = {
    id,
    templateId: template.id,
    templateCode: template.code,
    title: params.title,
    proposalNumber,
    status: 'draft',
    versions: [firstVersion],
    latestVersion: 1,
  };
  proposals.push(proposal);
  saveProposals(proposals);
  return proposal;
}

export function getProposalById(id: string): ZgpProposal | undefined {
  return listProposals().find(p => p.id === id);
}

export function updateProposal(id: string, update: {
  title?: string;
  summary?: string;
  motivation?: string;
  specificationImpact?: string;
  codeModuleAffected?: string;
  votingOptions?: string[];
  fundingNeeded?: ZgpFunding;
  status?: ZgpProposal['status'];
  votingResultUrl?: string;
}): ZgpProposal {
  const proposals = listProposals();
  const index = proposals.findIndex(p => p.id === id);
  if (index === -1) throw new Error('Proposal not found');
  const current = proposals[index];

  const nextVersion: ZgpProposalVersion = {
    version: current.latestVersion + 1,
    summary: update.summary ?? current.versions[current.latestVersion - 1].summary,
    motivation: update.motivation ?? current.versions[current.latestVersion - 1].motivation,
    specificationImpact: update.specificationImpact ?? current.versions[current.latestVersion - 1].specificationImpact,
    codeModuleAffected: update.codeModuleAffected ?? current.versions[current.latestVersion - 1].codeModuleAffected,
    votingOptions: update.votingOptions ?? current.versions[current.latestVersion - 1].votingOptions,
    fundingNeeded: update.fundingNeeded ?? current.versions[current.latestVersion - 1].fundingNeeded,
    createdAt: new Date().toISOString(),
  };

  const next: ZgpProposal = {
    ...current,
    title: update.title ?? current.title,
    status: update.status ?? current.status,
    versions: [...current.versions, nextVersion],
    latestVersion: nextVersion.version,
    votingResultUrl: update.votingResultUrl ?? current.votingResultUrl,
  };

  proposals[index] = next;
  saveProposals(proposals);
  return next;
}