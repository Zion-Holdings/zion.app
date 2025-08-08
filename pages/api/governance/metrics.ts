import type { NextApiRequest, NextApiResponse } from 'next';
import { readProposals, readVotes } from '../../../utils/governanceStorage';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const proposals = readProposals();
  const votes = readVotes();
  const voters = new Set(votes.map(v => v.voter)).size;
  const totalPower = votes.reduce((a, v) => a + v.power, 0);
  const outcomes = proposals.filter(p => Date.now() > p.endTime).reduce((acc: Record<string, number>, p) => { acc[p.status] = (acc[p.status] || 0) + 1; return acc; }, {});
  res.status(200).json({ voters, totalPower, outcomes });
}