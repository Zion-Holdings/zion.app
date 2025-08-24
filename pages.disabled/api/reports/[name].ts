import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: { code: 'method_not_allowed', message: 'Method not allowed' } });
  const { name } = req.query;
  if (!name || Array.isArray(name)) return res.status(400).json({ error: { code: 'invalid_request', message: 'name required' } });
  const dir = path.join(process.cwd(), 'data', 'reports');
  const full = path.join(dir, name);
  try {
    if (!fs.existsSync(full)) return res.status(404).json({ error: { code: 'not_found', message: 'report not found' } });
    const content = fs.readFileSync(full, 'utf8');
    const contentType = name.endsWith('.md') ? 'text/markdown' : 'application/json';
    res.setHeader('Content-Type', contentType);
    return res.status(200).send(content);
  } catch (e: any) {
    return res.status(500).json({ error: { code: 'report_error', message: e.message } });
  }
}