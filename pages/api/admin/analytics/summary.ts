import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { ensureAdminFromApi } from '../../../../utils/auth';

type EventRow = {
  name: string;
  page?: string;
  userType?: string;
  properties?: Record<string, any>;
  at: string;
};

const LOG_FILE = path.join(process.cwd(), 'data', 'analytics', 'events.log.jsonl');

function parseLines(startIso?: string, endIso?: string): EventRow[] {
  try {
    if (!fs.existsSync(LOG_FILE)) return [];
    const raw = fs.readFileSync(LOG_FILE, 'utf8');
    const lines = raw.split('\n').filter(Boolean);
    const start = startIso ? new Date(startIso) : null;
    const end = endIso ? new Date(endIso) : null;
    const rows: EventRow[] = [];
    for (const line of lines) {
      try {
        const obj = JSON.parse(line);
        if (!obj.at) continue;
        const t = new Date(obj.at);
        if (start && t < start) continue;
        if (end && t > end) continue;
        rows.push(obj);
      } catch {}
    }
    return rows;
  } catch {
    return [];
  }
}

function featureFromPath(page?: string): string {
  if (!page) return 'other';
  const p = page.toLowerCase();
  if (p.includes('/services') || p.includes('ai')) return 'AI services';
  if (p.includes('talent') || p.includes('job')) return 'job board';
  if (p.includes('rental')) return 'rentals';
  return 'other';
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });

  const { start, end, userType } = req.query as { start?: string; end?: string; userType?: string };

  const rows = parseLines(start, end).filter((r) => !userType || userType === 'all' || (r.userType || 'guest') === userType);

  const byFeature: Record<string, number> = {};
  const byEvent: Record<string, number> = {};
  const byDay: Record<string, number> = {};

  for (const r of rows) {
    const f = featureFromPath(r.page);
    byFeature[f] = (byFeature[f] || 0) + 1;
    byEvent[r.name] = (byEvent[r.name] || 0) + 1;
    const day = r.at.slice(0, 10);
    byDay[day] = (byDay[day] || 0) + 1;
  }

  const pagesMostUsed = Object.entries(byFeature)
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value);

  const events = Object.entries(byEvent)
    .map(([label, value]) => ({ label, value }))
    .sort((a, b) => b.value - a.value);

  const days = Object.keys(byDay).sort();
  const line = days.map((d) => ({ date: d, value: byDay[d] }));

  const funnelStages = ['Visit', 'AI Prompt Used', 'Post Created', 'Message Sent'];
  const funnel = funnelStages.map((stage) => ({ label: stage, value: byEvent[stage] || 0 }));

  res.status(200).json({ pagesMostUsed, events, line, funnel });
}