import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuid } from 'uuid';
import { Proposal, ProposalType, readProposals, writeProposals } from '../../../utils/governanceStorage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const proposals = readProposals();
    return res.status(200).json({ proposals });
  }

  if (req.method === 'POST') {
    try {
      const { title, summary, type, quorumPercent, votingPeriodDays, fundingAsk, referenceLinks } = req.body as {
        title: string; summary: string; type: ProposalType; quorumPercent: number; votingPeriodDays: number; fundingAsk?: number; referenceLinks?: string[];
      };

      if (!title || !summary || !type || !quorumPercent || !votingPeriodDays) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const now = Date.now();
      const id = uuid();
      const startTime = now;
      const endTime = now + votingPeriodDays * 24 * 60 * 60 * 1000;

      const proposal: Proposal = {
        id,
        title,
        summary,
        type,
        quorumPercent: Number(quorumPercent),
        votingPeriodDays: Number(votingPeriodDays),
        fundingAsk: fundingAsk ? Number(fundingAsk) : undefined,
        referenceLinks: referenceLinks || [],
        createdAt: now,
        startTime,
        endTime,
        status: 'Live',
      };

      const list = readProposals();
      list.unshift(proposal);
      writeProposals(list);

      return res.status(201).json({ proposal });
    } catch (e) {
      return res.status(500).json({ error: 'Server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}