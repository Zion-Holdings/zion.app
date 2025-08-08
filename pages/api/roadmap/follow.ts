import type { NextApiRequest, NextApiResponse } from 'next';
import { toggleFollow } from '../../../utils/roadmap-store';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const { featureId, followerId } = req.body as {
    featureId?: string;
    followerId?: string;
  };
  if (!featureId || !followerId) {
    return res.status(400).json({ error: 'featureId and followerId are required' });
  }
  const updated = toggleFollow(featureId, followerId);
  if (!updated) return res.status(404).json({ error: 'Feature not found' });
  return res.status(200).json(updated);
}