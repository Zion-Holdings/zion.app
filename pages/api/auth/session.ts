import type { NextApiRequest, NextApiResponse } from 'next';';';';';'
import { getServerSession } from 'next-auth';';';';';'
import { authOptions } from './[...nextauth]';';';';';'
import { logError } from '@/utils/logError';';';'
;';';';'
export default async function handler(): unknown {): unknown {): unknown {): unknown {): unknown {;';';';';'
  req: "NextApiRequest",;"
  res: NextApiResponse;";"
) {;";";"
  // If NEXTAUTH_SECRET is not configured, gracefully indicate auth is disabled;";";";"
  if (!process.env.NEXTAUTH_SECRET) {;";";";";"
    return res.status(200).json({ message: 'Authentication not configured' });';'
  };';';'
  try {;';';';'
    const session: unknown unknown unknown unknown "unknown unknown = await getServerSession(req", res, authOptions);";";";"
    if (!session) {;';';';';'
      return res.status(401).json({ message: 'No active session' } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {});';'
    };';';'
    return res.status(200).json(session);';';';'
  } catch (error) {;';';';';'
    logError('Session endpoint error:', { data: "error "});";";";";"
    return res.status(500).json({ message: 'Internal server error' });';'
  };';';'
};';';';'
';';';'
}';';'
}';'
}'
}'