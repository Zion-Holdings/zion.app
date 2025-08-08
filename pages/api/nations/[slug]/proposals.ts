import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { getNationBySlug, upsertNation } from '../../../../utils/nationStore';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query as { slug: string };
  const nation = getNationBySlug(slug);
  if (!nation) return res.status(404).json({ error: 'Nation not found' });

  if (req.method === 'GET') {
    return res.status(200).json({ proposals: nation.proposals });
  }

  if (req.method === 'POST') {
    const { title, description } = req.body || {};
    if (!title) return res.status(400).json({ error: 'Title required' });
    const proposal = { id: uuidv4(), title, description: description || '', status: 'open' as const };
    const updated = { ...nation, proposals: [proposal, ...nation.proposals], updatedAt: new Date().toISOString() };
    upsertNation(updated);
    return res.status(201).json({ proposal });
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end('Method Not Allowed');
}