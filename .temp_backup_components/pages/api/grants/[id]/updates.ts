import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import type { GrantApplication } from '../../../../types/grants';

const GRANTS_DIR = path.join(process.cwd(), 'data', 'grants');

function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`);
}

function readGrant(id: string): GrantApplication | null {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true });
  const p = grantPath(id);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication;
}

function writeGrant(record: GrantApplication) {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true });
  fs.writeFileSync(grantPath(record.id), JSON.stringify(record, null, 2), 'utf8');
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query as { id: string };
  if (!id) return res.status(400).json({ error: 'Missing id' });

  const existing = readGrant(id);
  if (!existing) return res.status(404).json({ error: 'Not found' });

  if (req.method === 'GET') {
    return res.status(200).json({ updates: existing.updates || [] });
  }

  if (req.method === 'POST') {
    const { content } = req.body as { content?: string };
    if (!content || !content.trim()) return res.status(400).json({ error: 'Missing content' });
    const update = { id: uuidv4(), createdAt: new Date().toISOString(), content: content.trim() };
    existing.updates = [...(existing.updates || []), update];
    existing.updatedAt = new Date().toISOString();
    writeGrant(existing);
    return res.status(201).json({ update });
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}