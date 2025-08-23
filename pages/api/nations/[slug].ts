import type { NextApiRequest, NextApiResponse } from 'next';
import { getNationBySlug, updateNation } from '../../../lib/nations';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query as { slug: string };

  if (!slug) return res.status(400).json({ error: 'Missing slug' });

  if (req.method === 'GET') {
    const nation = getNationBySlug(slug);
    if (!nation) return res.status(404).json({ error: 'Nation not found' });
    return res.status(200).json({ nation });
  }

  if (req.method === 'PUT') {
    try {
      const nation = updateNation(slug, req.body || {});
      if (!nation) return res.status(404).json({ error: 'Nation not found' });
      return res.status(200).json({ nation });
    } catch (error: any) {
      return res.status(500).json({ error: error?.message || 'Failed to update nation' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}