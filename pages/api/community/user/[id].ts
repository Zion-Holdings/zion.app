import type { NextApiRequest, NextApiResponse } from 'next';
import { getUser, awardBadges, computeReputation } from '../../../../utils/community/storage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method Not Allowed' });
  const { id } = req.query as { id: string };
  const user = getUser(id);
  if (!user) return res.status(404).json({ error: 'Not found' });
  user.reputation = computeReputation(id);
  user.badges = awardBadges(id);
  res.status(200).json({ user });
}