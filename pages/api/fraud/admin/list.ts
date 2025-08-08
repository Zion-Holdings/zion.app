import type { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '../../../../utils/fraud/store';

function ensureAdmin(req: NextApiRequest): boolean {
  const token = req.headers['x-admin-token'];
  if (!process.env.ADMIN_TOKEN) return true; // allow if not configured
  return token === process.env.ADMIN_TOKEN;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }
  if (!ensureAdmin(req)) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  const { limit = '50', offset = '0', source, userId, status, label } = req.query as Record<string, string>;
  const store = getFraudStore();
  const items = await store.listFlagged(parseInt(limit, 10), parseInt(offset, 10), {
    source: source as any,
    userId,
    status: status as any,
    label: label as any,
  });
  res.status(200).json({ items });
}