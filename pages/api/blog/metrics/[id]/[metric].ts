import type { NextApiRequest, NextApiResponse } from 'next';
import { incrementMetric } from '@/utils/data/blogStore';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, metric } = req.query;
  if (req.method !== 'POST') return res.status(405).end();
  if (typeof id !== 'string' || typeof metric !== 'string') return res.status(400).json({ error: 'Invalid params' });
  if (!['views', 'likes', 'shares'].includes(metric)) return res.status(400).json({ error: 'Invalid metric' });
  const post = incrementMetric(id, metric as 'views' | 'likes' | 'shares');
  if (!post) return res.status(404).json({ error: 'Not found' });
  return res.status(200).json({ ok: true, metrics: post.metrics });
}