import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query as { id: string };
  const file = path.join(process.cwd(), 'data', 'governance', 'snapshots', `${id}.json`);
  if (!fs.existsSync(file)) return res.status(404).json({ error: 'Snapshot not found' });
  const raw = fs.readFileSync(file, 'utf8');
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(raw);
}