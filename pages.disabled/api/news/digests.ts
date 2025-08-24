import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const file = path.join(process.cwd(), 'data', 'news', 'digests.json');
  if (!fs.existsSync(file)) return res.status(200).json([]);
  try {
    const raw = fs.readFileSync(file, 'utf8');
    return res.status(200).send(raw);
  } catch {
    return res.status(200).json([]);
  }
}