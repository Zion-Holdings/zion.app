import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuid } from 'uuid';
import { addVote, readProposals, readVotes, VoteOption } from '../../../utils/governanceStorage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { proposalId, voter } = req.query as { proposalId?: string; voter?: string };
    let votes = readVotes();
    if (proposalId) votes = votes.filter(v => v.proposalId === proposalId);
    if (voter) votes = votes.filter(v => v.voter === voter.toLowerCase());
    return res.status(200).json({ votes });
  }

  if (req.method === 'POST') {
    try {
      const { proposalId, voter, option, power } = req.body as { proposalId: string; voter: string; option: VoteOption; power?: number };
      if (!proposalId || !voter || !option) return res.status(400).json({ error: 'Missing fields' });

      const proposal = readProposals().find(p => p.id === proposalId);
      if (!proposal) return res.status(404).json({ error: 'Proposal not found' });
      const now = Date.now();
      if (now < proposal.startTime || now > proposal.endTime) return res.status(400).json({ error: 'Voting is closed' });

      const vote = { id: uuid(), proposalId, voter: voter.toLowerCase(), option, power: power ?? 1, createdAt: now };
      addVote(vote);
      return res.status(201).json({ vote });
    } catch (e) {
      return res.status(500).json({ error: 'Server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}