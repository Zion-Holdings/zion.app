import type { NextApiRequest, NextApiResponse } from 'next';
import { Web3Storage, File } from 'web3.storage';

const TOKEN = process.env.WEB3_STORAGE_TOKEN || '';

export const config = { api: { bodyParser: { sizeLimit: '2mb' } } };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  if (!TOKEN) return res.status(400).json({ error: 'Missing WEB3_STORAGE_TOKEN' });
  try {
    const data = req.body;
    const client = new Web3Storage({ token: TOKEN });
    const files = [new File([JSON.stringify(data, null, 2)], 'profile.json', { type: 'application/json' })];
    const cid = await client.put(files, { wrapWithDirectory: false });
    return res.status(200).json({ cid });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || 'Backup failed' });
  }
}