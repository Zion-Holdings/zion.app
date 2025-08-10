// Netlify Scheduled Function: RSS Health Check
// Scheduled in netlify.toml -> [[scheduled]] path = "/.netlify/functions/rss_health"

export const config = {
  path: "/.netlify/functions/rss_health",
};

import type { Handler } from '@netlify/functions';
import { commitToRepo } from '../../utils/githubCommit';

const BASE_URL = process.env.PUBLIC_SITE_URL || 'https://ziontechgroup.com';

function stamp() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}-${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}`;
}

export const handler: Handler = async () => {
  try {
    const url = `${BASE_URL}/feed.xml`;
    const res = await fetch(url, { headers: { 'User-Agent': 'zion-app-rss-health' } });
    const ok = res.ok;
    const xml = ok ? await res.text() : '';
    const hasItems = /<item>/i.test(xml);
    const report = { url, ok, hasItems, length: xml.length, timestamp: new Date().toISOString() };
    const content = JSON.stringify(report, null, 2) + '\n';
    const dest = `data/reports/rss/rss-health-${stamp()}.json`;
    const commit = await commitToRepo({ path: dest, content, message: 'chore(rss): RSS health check', branch: 'main' });
    return { statusCode: 200, body: JSON.stringify({ ok, hasItems, commit }) };
  } catch (e: any) {
    return { statusCode: 500, body: String(e?.message || e) };
  }
};