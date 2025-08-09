import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const file = path.join(process.cwd(), 'data', 'reports', 'seo-audit.json');
  if (!fs.existsSync(file)) return res.status(200).json({ summary: null, results: [] });
  const raw = fs.readFileSync(file, 'utf8');
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(raw);
}