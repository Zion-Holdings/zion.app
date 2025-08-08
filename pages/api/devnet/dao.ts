import type { NextApiRequest, NextApiResponse } from 'next';
import { devNetState, Proposal, VoteRecord, VoteChoice } from '@/utils/devnet/state';
import { withRateLimit } from '@/utils/api/rateLimit';

function parseBody(req: NextApiRequest): any {
  try {
    return typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return {};
  }
}

function computeStatus(votes: VoteRecord[]): 'open' | 'passed' | 'failed' {
  const yes = votes.filter(v => v.choice === 'yes').length;
  const no = votes.filter(v => v.choice === 'no').length;
  const total = votes.length;
  if (total >= 3) {
    if (yes > no) return 'passed';
    if (no >= yes) return 'failed';
  }
  if (yes >= 2 && yes >= no) return 'passed';
  if (no >= 2 && no > yes) return 'failed';
  return 'open';
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ proposals: devNetState.proposals });
    return;
  }

  if (req.method === 'POST') {
    const body = parseBody(req);
    const action = String(body?.action || '').trim();

    if (action === 'submit') {
      const title = String(body?.title || '').trim();
      const description = String(body?.description || '').trim();
      const author = String(body?.author || '').trim();
      if (!title || !description || !author) {
        res.status(400).json({ error: 'title, description, author are required' });
        return;
      }
      const id = `prop_${Math.random().toString(36).slice(2, 10)}`;
      const proposal: Proposal = {
        id,
        title,
        description,
        author,
        createdAt: Date.now(),
        status: 'open',
        votes: [],
      };
      devNetState.proposals.unshift(proposal);
      res.status(201).json({ proposal });
      return;
    }

    if (action === 'vote') {
      const proposalId = String(body?.proposalId || '').trim();
      const voter = String(body?.voter || '').trim();
      const choice = String(body?.choice || '').trim() as VoteChoice;
      const proposal = devNetState.proposals.find(p => p.id === proposalId);
      if (!proposal) {
        res.status(404).json({ error: 'proposal not found' });
        return;
      }
      if (proposal.status !== 'open') {
        res.status(400).json({ error: 'proposal is closed' });
        return;
      }
      if (!['yes', 'no'].includes(choice)) {
        res.status(400).json({ error: 'choice must be yes or no' });
        return;
      }
      const existing = proposal.votes.find(v => v.voter === voter);
      if (existing) {
        existing.choice = choice;
        existing.timestamp = Date.now();
      } else {
        const vote: VoteRecord = { voter, choice, timestamp: Date.now() };
        proposal.votes.push(vote);
      }
      proposal.status = computeStatus(proposal.votes);
      res.status(200).json({ proposal });
      return;
    }

    if (action === 'finalize') {
      const proposalId = String(body?.proposalId || '').trim();
      const proposal = devNetState.proposals.find(p => p.id === proposalId);
      if (!proposal) {
        res.status(404).json({ error: 'proposal not found' });
        return;
      }
      proposal.status = computeStatus(proposal.votes);
      res.status(200).json({ proposal });
      return;
    }

    res.status(400).json({ error: 'unknown action' });
    return;
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}

export default withRateLimit(handler, { windowMs: 60_000, max: 60 });