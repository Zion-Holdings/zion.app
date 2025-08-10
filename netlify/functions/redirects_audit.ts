// Netlify Scheduled Function: Redirects Audit
// Scheduled in netlify.toml -> [[scheduled]] path = "/.netlify/functions/redirects_audit"

export const config = {
  path: "/.netlify/functions/redirects_audit",
};

import type { Handler } from '@netlify/functions';
import { commitToRepo } from '../../utils/githubCommit';

const BASE = process.env.PUBLIC_SITE_URL || 'https://ziontechgroup.com';
// Define a few known redirects to verify
const REDIRECTS: Array<{ from: string; expect: string; status?: number }> = [
  { from: '/home', expect: '/' },
];

function absolute(path: string) { return `${BASE}${path}`; }

function stamp() {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}${p(d.getUTCMonth() + 1)}${p(d.getUTCDate())}-${p(d.getUTCHours())}${p(d.getUTCMinutes())}`;
}

export const handler: Handler = async () => {
  try {
    const results: any[] = [];
    for (const r of REDIRECTS) {
      const url = absolute(r.from);
      const res = await fetch(url, { redirect: 'manual', headers: { 'User-Agent': 'zion-app-redirects-audit' } });
      const loc = res.headers.get('location');
      const ok = res.status >= 300 && res.status < 400 && loc === absolute(r.expect);
      results.push({ from: url, status: res.status, location: loc, ok });
    }
    const content = JSON.stringify({ timestamp: new Date().toISOString(), results }, null, 2) + '\n';
    const dest = `data/reports/redirects/redirects-${stamp()}.json`;
    const commit = await commitToRepo({ path: dest, content, message: 'chore(redirects): redirects audit', branch: 'main' });
    return { statusCode: 200, body: JSON.stringify({ ok: true, commit }) };
  } catch (e: any) {
    return { statusCode: 500, body: String(e?.message || e) };
  }
};