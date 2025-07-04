import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from './[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      return res.status(401).json({ message: 'No active session' });
    }
    return res.status(200).json(session);
  } catch (err) {
    console.error('Session endpoint error:', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
