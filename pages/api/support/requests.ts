import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const requests = readJson<any[]>('support/requests.json', []);
    return res.status(200).json({ requests });
  }
  if (req.method === 'POST') {
    const { sessionId, reason, tag } = req.body as { sessionId: string; reason?: string; tag?: string };
    const requests = readJson<any[]>('support/requests.json', []);
    const id = `sr_${Math.random().toString(36).slice(2)}_${Date.now()}`;
    const record = { id, sessionId, reason: reason ?? 'User request', tag: tag ?? 'manual', status: 'open', createdAt: Date.now() };
    requests.push(record);
    writeJson('support/requests.json', requests);
    return res.status(200).json({ ok: true, id });
  }
  return res.status(405).json({ error: 'Method not allowed' });
}