import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Missing id' });
  }
  // In a real system, look up persisted deployment by id
  const fake = {
    id,
    exportedAt: new Date().toISOString(),
    note: 'This is a stub export. Connect to persistence to return real deployment state.',
  };
  res.setHeader('Content-Type', 'application/json');
  return res.status(200).json(fake);
}