// Netlify Scheduled Function: Content Freshness Audit
// Scheduled in netlify.toml -> [[scheduled]] path = "/.netlify/functions/content_freshness"

export const config = {
  path: "/.netlify/functions/content_freshness",
};

import type { Handler } from '@netlify/functions';
import { commitToRepo } from '../../utils/githubCommit';

const BASE = process.env.PUBLIC_SITE_URL || 'https://ziontechgroup.com';
const PAGES = ['/', '/blog', '/products', '/services'];

const STALE_DAYS = Number(process.env.CONTENT_FRESHNESS_STALE_DAYS || 60);

function daysSince(d: Date) {
  return Math.round((Date.now() - d.getTime()) / (1000 * 60 * 60 * 24));
}

function stamp() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}-${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}`;
}

export const handler: Handler = async () => {
  try {
    const results: any[] = [];
    for (const p of PAGES) {
      const url = `${BASE}${p}`;
      const res = await fetch(url, { method: 'HEAD', headers: { 'User-Agent': 'zion-app-freshness' } });
      const lm = res.headers.get('last-modified');
      const lastModified = lm ? new Date(lm) : null;
      const ageDays = lastModified ? daysSince(lastModified) : null;
      const stale = ageDays !== null ? ageDays > STALE_DAYS : true;
      results.push({ url, lastModified: lastModified?.toISOString() || null, ageDays, stale });
    }
    const content = JSON.stringify({ timestamp: new Date().toISOString(), staleThresholdDays: STALE_DAYS, results }, null, 2) + '\n';
    const dest = `data/reports/content/freshness-${stamp()}.json`;
    const commit = await commitToRepo({ path: dest, content, message: 'chore(content): freshness audit', branch: 'main' });
    return { statusCode: 200, body: JSON.stringify({ ok: true, commit }) };
  } catch (e: any) {
    return { statusCode: 500, body: String(e?.message || e) };
  }
};