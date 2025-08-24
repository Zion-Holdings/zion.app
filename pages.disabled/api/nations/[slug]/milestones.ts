import type { NextApiRequest, NextApiResponse } from 'next';
import { addMilestone } from '../../../../lib/nations';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query as { slug: string };
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { title, description, targetDate, status } = req.body || {};
  if (!slug || !title) return res.status(400).json({ error: 'Missing required fields' });
  const nation = addMilestone(slug, { title, description, targetDate, status });
  if (!nation) return res.status(404).json({ error: 'Nation not found' });
  return res.status(200).json({ nation });
}