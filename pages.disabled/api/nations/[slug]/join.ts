import type { NextApiRequest, NextApiResponse } from 'next';
import { getNationBySlug, upsertNation } from '../../../../utils/nationStore';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query as { slug: string };
  const nation = getNationBySlug(slug);
  if (!nation) return res.status(404).json({ error: 'Nation not found' });

  if (req.method === 'POST') {
    const updated = { ...nation, population: nation.population + 1, updatedAt: new Date().toISOString() };
    upsertNation(updated);
    return res.status(200).json({ nation: updated });
  }

  res.setHeader('Allow', ['POST']);
  return res.status(405).end('Method Not Allowed');
}