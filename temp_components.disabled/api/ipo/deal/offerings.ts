import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  if (req.method === 'GET') {
    const offerings = readJsonFile('deal/offerings.json', { safe: true, equity: true, token: false });
    return res.status(200).json(offerings);
  }
  if (req.method === 'POST') {
    const body = req.body || {};
    const offerings = { safe: !!body.safe, equity: !!body.equity, token: !!body.token };
    writeJsonFile('deal/offerings.json', offerings);
    return res.status(200).json(offerings);
  }
  return res.status(405).json({ error: 'Method not allowed' });
}