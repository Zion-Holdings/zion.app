import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import type { GrantApplication, UpdateGrantPayload } from '../../../types/grants';

const GRANTS_DIR = path.join(process.cwd(), 'data', 'grants');

function ensureDir() {
  if (!fs.existsSync(GRANTS_DIR)) {
    fs.mkdirSync(GRANTS_DIR, { recursive: true });
  }
}

function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`);
}

function readGrant(id: string): GrantApplication | null {
  ensureDir();
  const file = grantPath(id);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, 'utf8')) as GrantApplication;
}

function writeGrant(record: GrantApplication) {
  ensureDir();
  fs.writeFileSync(grantPath(record.id), JSON.stringify(record, null, 2), 'utf8');
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query as { id: string };
  if (!id) {
    res.status(400).json({ error: 'Missing id' });
    return;
  }

  if (req.method === 'GET') {
    const g = readGrant(id);
    if (!g) {
      res.status(404).json({ error: 'Not found' });
      return;
    }
    res.status(200).json({ record: g });
    return;
  }

  if (req.method === 'PUT') {
    const existing = readGrant(id);
    if (!existing) {
      res.status(404).json({ error: 'Not found' });
      return;
    }
    const payload = req.body as UpdateGrantPayload;
    const next: GrantApplication = {
      ...existing,
      ...payload,
      status: payload.submit ? 'Submitted' : existing.status,
      updatedAt: new Date().toISOString(),
    } as GrantApplication;
    writeGrant(next);
    res.status(200).json({ record: next });
    return;
  }

  res.setHeader('Allow', 'GET, PUT');
  res.status(405).end('Method Not Allowed');
}