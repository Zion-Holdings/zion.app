import type { NextApiRequest, NextApiResponse } from 'next';
import { addProposal, voteOnProposal } from '../../../../lib/nations';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query as { slug: string };

  if (req.method === 'POST') {
    const { title, description, status } = req.body || {};
    if (!slug || !title) return res.status(400).json({ error: 'Missing required fields' });
    const nation = addProposal(slug, { title, description, status });
    if (!nation) return res.status(404).json({ error: 'Nation not found' });
    return res.status(200).json({ nation });
  }

  if (req.method === 'PUT') {
    const { proposalId, vote } = req.body || {};
    if (!slug || !proposalId || !vote) return res.status(400).json({ error: 'Missing required fields' });
    const nation = voteOnProposal(slug, proposalId, vote);
    if (!nation) return res.status(404).json({ error: 'Nation not found' });
    return res.status(200).json({ nation });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}