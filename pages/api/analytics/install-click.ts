import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const LOG_PATH = path.join(process.cwd(), 'data', 'reports', 'install-clicks.log');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { id, platform, sourcePath } = req.body || {};
  try {
    const line = JSON.stringify({ id, platform, sourcePath, timestampISO: new Date().toISOString() }) + '\n';
    fs.mkdirSync(path.dirname(LOG_PATH), { recursive: true });
    fs.appendFileSync(LOG_PATH, line, 'utf8');
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: 'Failed to log event' });
  }
}