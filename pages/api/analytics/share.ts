import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const LOG_PATH = path.join(process.cwd(), 'data', 'reports', 'shares.log');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }
  const { platform, url, title } = req.body || {};
  try {
    fs.mkdirSync(path.dirname(LOG_PATH), { recursive: true });
    const line = JSON.stringify({ platform, url, title, timestampISO: new Date().toISOString() }) + '\n';
    fs.appendFileSync(LOG_PATH, line, 'utf8');
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: 'Failed to log share' });
  }
}