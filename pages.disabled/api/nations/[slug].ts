import type { NextApiRequest, NextApiResponse } from 'next';
import { getNationBySlug, upsertNation, deleteNationBySlug } from '../../../utils/nationStore';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query as { slug: string };
  const nation = getNationBySlug(slug);

  if (req.method === 'GET') {
    if (!nation) return res.status(404).json({ error: 'Not found' });
    return res.status(200).json({ nation });
  }

  if (req.method === 'PUT') {
    if (!nation) return res.status(404).json({ error: 'Not found' });
    const updated = { ...nation, ...req.body, updatedAt: new Date().toISOString() };
    upsertNation(updated);
    return res.status(200).json({ nation: updated });
  }

  if (req.method === 'DELETE') {
    const deleted = deleteNationBySlug(slug);
    return res.status(deleted ? 200 : 404).json({ ok: deleted });
  }

  res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
  return res.status(405).end('Method Not Allowed');
}