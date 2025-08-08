import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { region, entityType } = req.body || {};
  return res.status(200).json({
    ok: true,
    drafted: ['cap-table', 'founder-agreement', 'ein-application'],
    region,
    entityType,
  });
}