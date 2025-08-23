import type { NextApiRequest, NextApiResponse } from 'next';
import { withErrorLogging } from '@/utils/withErrorLogging';
import { users } from './data';

function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query as { id: string | string[] };
  const user = users[String(id)];
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  if (req.method === 'PATCH') {
    const { name, bio, avatarUrl } = req.body || {};
    if (name !== undefined) user.name = name;
    if (bio !== undefined) user.bio = bio;
    if (avatarUrl !== undefined) user.avatarUrl = avatarUrl;
    users[user.id] = user;
    return res.status(200).json(user);
  }

  res.setHeader('Allow', 'PATCH');
  return res.status(405).end();
}

export default withErrorLogging(handler);
