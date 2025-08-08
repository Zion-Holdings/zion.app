import type { NextApiRequest, NextApiResponse } from 'next';
import { getThread } from '../../../../utils/community/storage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method Not Allowed' });
  const { id } = req.query as { id: string };
  const { thread, replies } = getThread(id);
  if (!thread) return res.status(404).json({ error: 'Not found' });
  res.status(200).json({ thread, replies });
}