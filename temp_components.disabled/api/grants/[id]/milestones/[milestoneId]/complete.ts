import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import type { GrantApplication } from '../../../../../../types/grants';

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

function isAuthorized(req: NextApiRequest) {
  const header = req.headers.authorization || '';
  const token = header.replace('Bearer ', '');
  return token && process.env.ZION_ADMIN_TOKEN && token === process.env.ZION_ADMIN_TOKEN;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!isAuthorized(req)) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  const { id, milestoneId } = req.query as { id: string; milestoneId: string };
  if (!id || !milestoneId) {
    res.status(400).json({ error: 'Missing id or milestoneId' });
    return;
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return;
  }

  const existing = readGrant(id);
  if (!existing) return res.status(404).json({ error: 'Not found' });

  const ms = existing.milestones || [];
  const idx = ms.findIndex((m) => m.id === milestoneId);
  if (idx === -1) return res.status(404).json({ error: 'Milestone not found' });

  ms[idx].completed = true;
  ms[idx].completedAt = new Date().toISOString();

  const tranche = ms[idx].trancheAmount || 0;
  existing.fundsReleased = (existing.fundsReleased || 0) + tranche;
  existing.milestones = ms;
  existing.updatedAt = new Date().toISOString();

  writeGrant(existing);
  res.status(200).json({ record: existing });
}