import type { NextApiRequest, NextApiResponse } from 'next';
import { recordApiResponse, recordDbQuery, recordPageLoad } from '../../../utils/metrics';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { type } = req.body || {};

  if (type === 'pageLoad') {
    const { route, ms } = req.body || {};
    if (typeof route === 'string' && typeof ms === 'number') recordPageLoad(route, ms);
  } else if (type === 'api') {
    const { path, ms } = req.body || {};
    if (typeof path === 'string' && typeof ms === 'number') recordApiResponse(path, ms);
  } else if (type === 'db') {
    const { name, ms } = req.body || {};
    if (typeof name === 'string' && typeof ms === 'number') recordDbQuery(name, ms);
  }

  res.status(200).json({ ok: true });
}