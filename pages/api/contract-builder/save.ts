import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { projectTitle = 'Project', markdown = '', meta = {} } = req.body || {};
  try {
    const dir = path.join(process.cwd(), 'data', 'reports', 'contracts');
    fs.mkdirSync(dir, { recursive: true });
    const slug = projectTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const filename = `${Date.now()}-${slug || 'agreement'}.json`;
    const filepath = path.join(dir, filename);
    const record = {
      projectTitle,
      markdown,
      meta,
      savedAt: new Date().toISOString(),
    };
    fs.writeFileSync(filepath, JSON.stringify(record, null, 2), 'utf8');
    return res.status(200).json({ ok: true, filename });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message || 'Failed to save' });
  }
}