import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from './[...nextauth]';
import { logError } from '@/utils/logError';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const session = await getServerSession(req, res, authOptions);

    if (session) {
      return res.status(200).json({
        authenticated: true,
        session: {
          user: session.user,
          expires: session.expires
        }
      });
    } else {
      return res.status(200).json({
        authenticated: false,
        session: null
      });
    }
  } catch (error) {
    logError('Session API error:', error);
    return res.status(500).json({
      error: 'Internal server error'
    });
  }
}