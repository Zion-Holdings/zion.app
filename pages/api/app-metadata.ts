import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import type { AppMetadata } from '../../utils/types/appMetadata';

const DATA_PATH = path.join(process.cwd(), 'data', 'services', 'mobile-app-metadata.json');

function readMetadata(): AppMetadata {
  const raw = fs.readFileSync(DATA_PATH, 'utf8');
  return JSON.parse(raw);
}

function writeMetadata(data: AppMetadata) {
  fs.writeFileSync(DATA_PATH, JSON.stringify({ ...data, updatedAtISO: new Date().toISOString() }, null, 2), 'utf8');
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const json = readMetadata();
      return res.status(200).json(json);
    } catch (e) {
      return res.status(500).json({ error: 'Failed to load app metadata' });
    }
  }

  if (req.method === 'POST') {
    // TODO: add real admin auth validation. For now, simple header check.
    const adminKey = process.env.ADMIN_UPDATE_KEY;
    if (!adminKey || req.headers['x-admin-key'] !== adminKey) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    try {
      const body = req.body as AppMetadata;
      writeMetadata(body);
      return res.status(200).json({ ok: true });
    } catch (e) {
      return res.status(400).json({ error: 'Invalid payload' });
    }
  }

  res.setHeader('Allow', 'GET, POST');
  return res.status(405).end('Method Not Allowed');
}