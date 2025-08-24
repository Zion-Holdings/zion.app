import type { NextApiRequest, NextApiResponse } from 'next';
import { getUserFromCookies } from '../auth-utils';

export function requireSuperadminApi(req: NextApiRequest, res: NextApiResponse): boolean {
  const user = getUserFromCookies(req.headers.cookie);
  if (!user || user.role !== 'superadmin' || !user.twofaVerified) {
    res.status(401).json({ error: 'Unauthorized' });
    return false;
  }
  return true;
}