import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const DATA_PATH = path.join(process.cwd(), 'data', 'feedback.json');

type RoadmapStatus = 'planned' | 'in_progress' | 'shipped';

type IncomingPayload = {
  suggestions?: Array<{ title: string; description: string; status?: RoadmapStatus; source?: string }>;
} | { title: string; description: string; status?: RoadmapStatus; source?: string };

function readItems() {
  try {
    const raw = fs.readFileSync(DATA_PATH, 'utf8');
    return JSON.parse(raw || '[]');
  } catch {
    return [];
  }
}

function writeItems(items: any[]) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(items, null, 2), 'utf8');
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const body = req.body as IncomingPayload;
  const items = readItems();

  const ingest = (s: { title: string; description: string; status?: RoadmapStatus; source?: string }) => {
    const exists = items.find((i: any) => i.title.toLowerCase() === s.title.toLowerCase());
    if (exists) return;
    items.push({
      id: uuidv4(),
      title: String(s.title).slice(0, 200),
      description: String(s.description).slice(0, 2000),
      status: s.status || 'planned',
      votes: 0,
      createdAt: new Date().toISOString(),
      source: s.source || 'auto',
    });
  };

  if ((body as any).suggestions && Array.isArray((body as any).suggestions)) {
    (body as any).suggestions.forEach(ingest);
  } else if ((body as any).title && (body as any).description) {
    ingest(body as any);
  } else {
    return res.status(400).json({ error: 'Invalid payload' });
  }

  writeItems(items);
  return res.status(200).json({ ok: true, count: items.length });
}