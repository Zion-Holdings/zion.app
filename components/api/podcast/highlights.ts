import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const EPISODES_PATH = path.join(process.cwd(), 'data', 'podcast', 'episodes.json');

function ensureStorage() {
  const dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  ensureStorage();
  const { episodeId } = req.body || {};
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
  const idx = episodes.findIndex((e) => e.id === episodeId);
  if (idx === -1) return res.status(404).json({ error: 'Episode not found' });

  const episode = episodes[idx];
  const segments = episode?.timeMarkers?.segments || [];
  const highlights = segments.map((t: string, i: number) => ({
    label: `Highlight ${i + 1}`,
    start: t,
    end: i + 1 < segments.length ? segments[i + 1] : episode?.timeMarkers?.closing || '15:00',
  }));

  episode.highlights = highlights;
  episodes[idx] = episode;
  fs.writeFileSync(EPISODES_PATH, JSON.stringify(episodes, null, 2), 'utf8');

  return res.status(200).json({ episode });
}