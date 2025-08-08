import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const payload = req.body || {};
    const dir = path.join(process.cwd(), 'data', 'micro-grants');
    fs.mkdirSync(dir, { recursive: true });
    const file = path.join(dir, `${Date.now()}-grant.json`);
    fs.writeFileSync(file, JSON.stringify(payload, null, 2));
    res.status(200).json({ ok: true, saved: path.basename(file) });
  } catch (e: any) {
    res.status(500).json({ error: e.message || 'Failed to trigger grant' });
  }
}