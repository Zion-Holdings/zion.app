import type { NextApiRequest, NextApiResponse } from 'next';

export function assertAdminServer(req: NextApiRequest, res: NextApiResponse) {
  if (process.env.DISABLE_AUTH_GUARD === 'true') return true;

  const headerSecret = req.headers['x-admin-secret'];
  const adminSecret = process.env.ADMIN_SECRET;

  if (!adminSecret) return true; // if not configured, allow for development

  if (headerSecret === adminSecret) return true;

  res.status(403).json({ error: 'Forbidden' });
  return false;
}