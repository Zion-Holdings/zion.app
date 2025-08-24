import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  // In the future, persist to database/analytics. For now, accept payload.
  res.status(200).json({ ok: true });
}