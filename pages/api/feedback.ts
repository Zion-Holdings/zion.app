import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export type RoadmapStatus = 'planned' | 'in_progress' | 'shipped';
export type RoadmapItem = {
  id: string;
  title: string;
  description: string;
  status: RoadmapStatus;
  votes: number;
  createdAt: string;
  source?: string;
};

const DATA_PATH = path.join(process.cwd(), 'data', 'feedback.json');

function readItems(): RoadmapItem[] {
  try {
    const raw = fs.readFileSync(DATA_PATH, 'utf8');
    return JSON.parse(raw || '[]');
  } catch {
    return [];
  }
}

function writeItems(items: RoadmapItem[]) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(items, null, 2), 'utf8');
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const items = readItems();
    return res.status(200).json({ items });
  }

  if (req.method === 'POST') {
    const { title, description } = req.body || {};
    if (!title || !description) return res.status(400).json({ error: 'Missing title or description' });
    const items = readItems();
    const item: RoadmapItem = {
      id: uuidv4(),
      title: String(title).slice(0, 200),
      description: String(description).slice(0, 2000),
      status: 'planned',
      votes: 0,
      createdAt: new Date().toISOString(),
    };
    items.push(item);
    writeItems(items);
    return res.status(201).json({ item });
  }

  if (req.method === 'PATCH') {
    const { id, action, status } = req.body || {};
    if (!id) return res.status(400).json({ error: 'Missing id' });
    const items = readItems();
    const idx = items.findIndex((i) => i.id === id);
    if (idx === -1) return res.status(404).json({ error: 'Not found' });

    if (action === 'upvote') {
      items[idx].votes = (items[idx].votes || 0) + 1;
    } else if (action === 'set_status') {
      if (!['planned', 'in_progress', 'shipped'].includes(status)) {
        return res.status(400).json({ error: 'Invalid status' });
      }
      items[idx].status = status as RoadmapStatus;
    } else {
      return res.status(400).json({ error: 'Invalid action' });
    }

    writeItems(items);
    return res.status(200).json({ item: items[idx] });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}