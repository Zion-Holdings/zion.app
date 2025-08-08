import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
// Fallback slugify to avoid extra dep if unavailable
function toSlug(input: string) {
  return (input || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}
import { Nation } from '../../../types/nation';
import { readAllNations, upsertNation } from '../../../utils/nationStore';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const nations = readAllNations();
    return res.status(200).json({ nations });
  }

  if (req.method === 'POST') {
    const { name, flagDataUrl, constitution, governanceStyle, fundingModel, currency } = req.body || {};
    if (!name || !governanceStyle || !fundingModel) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const id = uuidv4();
    const slug = toSlug(name);
    const now = new Date().toISOString();
    const nation: Nation = {
      id,
      slug,
      name,
      flagDataUrl,
      constitution: constitution || '',
      governanceStyle,
      fundingModel,
      currency: currency || 'ZION$',
      population: 0,
      talentCount: 0,
      clientCount: 0,
      milestones: [],
      proposals: [],
      createdAt: now,
      updatedAt: now,
    };
    upsertNation(nation);
    return res.status(201).json({ nation });
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end('Method Not Allowed');
}