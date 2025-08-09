import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.resolve(process.cwd(), 'data', 'analytics');
const FILE_PATH = path.resolve(DATA_DIR, 'shares.json');

function ensure() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(FILE_PATH)) fs.writeFileSync(FILE_PATH, JSON.stringify([], null, 2), 'utf8');
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  ensure();
  const { url, title, network, utm } = req.body || {};
  const entry = { url, title, network, utm, ts: new Date().toISOString(), ua: req.headers['user-agent'] || '' };
  const list: any[] = JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));
  list.push(entry);
  fs.writeFileSync(FILE_PATH, JSON.stringify(list, null, 2), 'utf8');
  res.status(200).json({ ok: true });
}