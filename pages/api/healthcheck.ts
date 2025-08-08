import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.fail === '1') {
    throw new Error('Synthetic failure for monitoring test');
  }
  res.status(200).json({ ok: true, time: new Date().toISOString() });
}