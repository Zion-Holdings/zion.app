import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  return res.status(200).json({
    title: 'Additional Insight',
    content: 'Add concise, investor-relevant content here (120-150 words). Use metrics, milestones, or strategic plans.',
  });
}