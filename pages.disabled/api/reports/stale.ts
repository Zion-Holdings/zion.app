import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const file = path.join(process.cwd(), 'data', 'reports', 'stale-content.json');
  if (!fs.existsSync(file)) return res.status(200).json({ generatedAt: null, staleCount: 0, items: [] });
  const raw = fs.readFileSync(file, 'utf8');
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(raw);
}