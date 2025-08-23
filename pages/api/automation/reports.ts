import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const dir = path.join(process.cwd(), 'data', 'autonomy');
    if (!fs.existsSync(dir)) return res.status(200).json({ files: [] });
    const files = fs.readdirSync(dir)
      .filter((f) => f.endsWith('.json'))
      .map((f) => ({ name: f, path: `/data/autonomy/${f}`, mtime: fs.statSync(path.join(dir, f)).mtimeMs }))
      .sort((a, b) => b.mtime - a.mtime);

    res.status(200).json({ files });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to list reports' });
  }
}