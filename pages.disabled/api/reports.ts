import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: { code: 'method_not_allowed', message: 'Method not allowed' } });
  const dir = path.join(process.cwd(), 'data', 'reports');
  try {
    if (!fs.existsSync(dir)) return res.status(200).json({ data: [] });
    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json') || f.endsWith('.md'));
    const items = files.map((name) => {
      const full = path.join(dir, name);
      const stat = fs.statSync(full);
      let summary = '';
      try {
        const raw = fs.readFileSync(full, 'utf8');
        if (name.endsWith('.json')) {
          const obj = JSON.parse(raw);
          summary = JSON.stringify(Object.keys(obj).slice(0, 5));
        } else {
          summary = raw.slice(0, 200);
        }
      } catch {}
      return { name, size: stat.size, mtime: stat.mtime.toISOString(), summary };
    });
    return res.status(200).json({ data: items });
  } catch (e: any) {
    return res.status(500).json({ error: { code: 'report_error', message: e.message } });
  }
}