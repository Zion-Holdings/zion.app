import { NextApiRequest, NextApiResponse } from 'next';

let inMemoryEvents: any[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: { code: 'method_not_allowed', message: 'Method not allowed' } });
  inMemoryEvents.unshift({ receivedAt: new Date().toISOString(), headers: req.headers, body: req.body });
  return res.status(200).json({ ok: true, storedEvents: inMemoryEvents.slice(0, 10) });
}