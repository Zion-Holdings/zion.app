import type { NextApiRequest, NextApiResponse } from 'next';
import { addMember } from '../../../../lib/nations';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query as { slug: string };

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { userId, role } = req.body || {};
  if (!slug || !userId || !role) return res.status(400).json({ error: 'Missing required fields' });

  const nation = addMember(slug, { userId, role });
  if (!nation) return res.status(404).json({ error: 'Nation not found' });
  return res.status(200).json({ nation });
}