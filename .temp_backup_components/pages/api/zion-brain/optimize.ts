import type { NextApiRequest, NextApiResponse } from 'next';
import { appendLog, optimizePrompt } from '@/utils/zionBrain';

function isAuthorized(req: NextApiRequest): boolean {
  const token = req.headers['x-admin-token'] || req.query.token;
  const superToken = process.env.SUPERADMIN_TOKEN;
  return !superToken || token === superToken;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  if (!isAuthorized(req)) return res.status(401).json({ error: 'Unauthorized' });

  const started = Date.now();
  try {
    const { prompt, userIntent } = req.body || {};
    const result = await optimizePrompt(String(prompt || ''), userIntent);
    const latencyMs = Date.now() - started;
    const status = result.optimized.length > (String(prompt || '').length * 0.5) ? 'ok' : 'laggy';

    appendLog({ module: 'optimizer', type: 'optimize', status: status as any, latencyMs, payload: { userIntent, originalLength: String(prompt || '').length, optimizedLength: result.optimized.length } });

    return res.status(200).json(result);
  } catch (e: any) {
    appendLog({ module: 'optimizer', type: 'optimize', status: 'error', payload: { error: e?.message || 'unknown' } });
    return res.status(500).json({ error: 'Optimization failure' });
  }
}