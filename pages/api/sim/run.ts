import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { preferences, prompt, routeId } = req.body || {};

  // Simple Zion protocol logic mock: reputation-first, DAO voting, trust-weighted coordination
  const base = scoreBase(preferences);
  const trust = Math.min(100, Math.round(base * 0.6 + rand(10, 25)));
  const coordination = Math.min(100, Math.round(base * 0.5 + rand(10, 20)));
  const resilience = Math.min(100, Math.round(base * 0.4 + rand(5, 20)));
  const dwi = Math.round(0.5 * trust + 0.3 * coordination + 0.2 * resilience);

  const nodes = buildNodes(preferences);
  const links = buildLinks(nodes, preferences);

  const timeline = buildTimeline(preferences, prompt);
  const summary = `Under ${preferences?.scenario} with a ${preferences?.role} focus in ${preferences?.sector}, ZionOS routes work via DAO proposals and reputation-weighted consensus. Trust=${trust}, Coordination=${coordination}, Resilience=${resilience}.`;

  return res.status(200).json({ timeline, network: { nodes, links }, dwi, summary });
}

function scoreBase(p: any): number {
  if (!p) return 50;
  let s = 50;
  if (p.scenario === 'Reputation-only DAO') s += 15;
  if (p.scenario === 'Gift economies') s += 10;
  if (p.role === 'Coordinator') s += 8;
  if (p.sector === 'Health') s += 5;
  if ((p.region || '').toLowerCase().includes('global south')) s += 7;
  return s;
}

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildNodes(p: any) {
  const baseNodes = [
    { id: 'you', label: p?.role || 'Talent', group: 'actor' },
    { id: 'dao', label: 'Zion DAO', group: 'coordination' },
    { id: 'rep', label: 'Reputation', group: 'signal' },
    { id: 'task', label: p?.sector + ' Task', group: 'work' },
    { id: 'peer', label: 'Peer Network', group: 'actor' },
    { id: 'client', label: 'Community', group: 'stakeholder' },
  ];
  if (p?.sector === 'Health') baseNodes.push({ id: 'clinic', label: 'Clinic Node', group: 'infra' });
  if (p?.sector === 'Tech') baseNodes.push({ id: 'repo', label: 'Open Repo', group: 'infra' });
  return baseNodes;
}

function buildLinks(nodes: Array<{ id: string }>, p: any) {
  const exists = (id: string) => nodes.find((n) => n.id === id);
  const links: any[] = [];
  if (exists('you') && exists('dao')) links.push({ source: 'you', target: 'dao', weight: 1 });
  if (exists('you') && exists('rep')) links.push({ source: 'you', target: 'rep', weight: 2 });
  if (exists('rep') && exists('task')) links.push({ source: 'rep', target: 'task', weight: 1 });
  if (exists('dao') && exists('task')) links.push({ source: 'dao', target: 'task', weight: 2 });
  if (exists('peer') && exists('task')) links.push({ source: 'peer', target: 'task', weight: 1 });
  if (exists('client') && exists('task')) links.push({ source: 'client', target: 'task', weight: 1 });
  if (exists('clinic')) links.push({ source: 'task', target: 'clinic', weight: 1 });
  if (exists('repo')) links.push({ source: 'task', target: 'repo', weight: 1 });
  return links;
}

function buildTimeline(p: any, prompt: string) {
  const role = p?.role || 'Talent';
  const sector = p?.sector || 'Work';
  return [
    { t: 1, decision: 'Draft proposal', rationale: `${role} frames a ${sector} outcome aligned to commons.` },
    { t: 2, decision: 'Reputation staking', rationale: 'Reputation, not tokens, signals stewardship and reduces spam.' },
    { t: 4, decision: 'DAO vote', rationale: 'Trust-weighted consensus selects work that maximizes public value.' },
    { t: 7, decision: 'Task swarming', rationale: 'Peers self-assign based on skills and availability.' },
    { t: 10, decision: 'Delivery + attestations', rationale: 'Outputs are verified via attestations and audits.' },
    { t: 12, decision: 'Reputation updates', rationale: 'Contributors earn non-transferable reputation; no token pay.' },
  ];
}