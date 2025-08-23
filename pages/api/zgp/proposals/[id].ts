import type { NextApiRequest, NextApiResponse } from 'next';
import { getProposalById, updateProposal } from '@/utils/zgp-storage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query as { id: string };
    if (!id) {
      res.status(400).json({ error: 'Missing id' });
      return;
    }
    if (req.method === 'GET') {
      const proposal = getProposalById(id);
      if (!proposal) {
        res.status(404).json({ error: 'Not Found' });
        return;
      }
      res.status(200).json({ proposal });
      return;
    }
    if (req.method === 'PUT') {
      const proposal = updateProposal(id, req.body || {});
      res.status(200).json({ proposal });
      return;
    }
    res.setHeader('Allow', 'GET, PUT');
    res.status(405).json({ error: 'Method Not Allowed' });
  } catch (e: any) {
    res.status(500).json({ error: e.message || 'Internal Server Error' });
  }
}