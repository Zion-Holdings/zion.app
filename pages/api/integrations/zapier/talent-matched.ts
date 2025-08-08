import type { NextApiRequest, NextApiResponse } from 'next';
import { readState } from '../../../../lib/integrations/fileStore';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  const { since } = req.query as { since?: string };
  const state = readState();
  const sinceTs = since ? Number(since) : 0;
  const events = state.events.filter(e => e.type === 'zion.talent.matched' && e.timestamp > sinceTs);
  res.status(200).json({ events });
}