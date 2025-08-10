// Netlify Scheduled Function: Uptime Synthetic Checks
// Scheduled in netlify.toml -> [[scheduled]] path = "/.netlify/functions/uptime_synthetic"

export const config = {
  path: "/.netlify/functions/uptime_synthetic",
};

import type { Handler } from '@netlify/functions';
import { commitToRepo } from '../../utils/githubCommit';

const BASE = process.env.PUBLIC_SITE_URL || 'https://ziontechgroup.com';
const ENDPOINTS = ['/', '/api/health', '/blog', '/products'];
const TIMEOUT_MS = 8000;

async function ping(path: string) {
  const url = `${BASE}${path}`;
  const ctrl = new AbortController();
  const start = Date.now();
  const id = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, { signal: ctrl.signal, headers: { 'User-Agent': 'zion-app-uptime' } });
    const ms = Date.now() - start;
    return { path, status: res.status, ok: res.ok, ms };
  } catch {
    const ms = Date.now() - start;
    return { path, status: 0, ok: false, ms };
  } finally {
    clearTimeout(id);
  }
}

function stamp() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}-${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}`;
}

export const handler: Handler = async () => {
  try {
    const checks = [] as any[];
    for (const e of ENDPOINTS) {
      checks.push(await ping(e));
    }
    const content = JSON.stringify({ timestamp: new Date().toISOString(), checks }, null, 2) + '\n';
    const dest = `data/reports/uptime/uptime-${stamp()}.json`;
    const commit = await commitToRepo({ path: dest, content, message: 'chore(uptime): synthetic checks', branch: 'main' });
    return { statusCode: 200, body: JSON.stringify({ ok: true, commit }) };
  } catch (e: any) {
    return { statusCode: 500, body: String(e?.message || e) };
  }
};