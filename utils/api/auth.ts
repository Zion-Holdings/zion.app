import type { NextApiRequest, NextApiResponse } from 'next';

export function requireAdmin(req: NextApiRequest, res: NextApiResponse): boolean {
  const expected = process.env.ADMIN_TOKEN || 'dev-admin-token';
  const provided = req.headers['x-admin-token'];
  if (!provided || provided !== expected) {
    res.status(401).json({ error: 'Unauthorized' });
    return false;
  }
  return true;
}