// Netlify Scheduled Function: Link Integrity Audit
// Scheduled in netlify.toml -> [[scheduled]] path = "/.netlify/functions/link_audit"

export const config = {
  path: "/.netlify/functions/link_audit",
};

import type { Handler } from '@netlify/functions';
import { commitToRepo } from '../../utils/githubCommit';

const BASE_URL = process.env.PUBLIC_SITE_URL || 'https://ziontechgroup.com';
const MAX_PAGES = Number(process.env.LINK_AUDIT_MAX_PAGES || 50);
const TIMEOUT_MS = Number(process.env.LINK_AUDIT_TIMEOUT_MS || 10000);

function normalize(url: string): string {
  try {
    const u = new URL(url, BASE_URL);
    // Only same-origin HTTP(S)
    if (u.origin !== new URL(BASE_URL).origin) return '';
    // Strip fragments and normalize trailing slash except root
    u.hash = '';
    if (u.pathname.endsWith('/') && u.pathname !== '/') u.pathname = u.pathname.slice(0, -1);
    return u.toString();
  } catch {
    return '';
  }
}

function extractLinks(html: string, currentUrl: string): string[] {
  const links = new Set<string>();
  const re = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const href = m[1];
    const abs = normalize(new URL(href, currentUrl).toString());
    if (abs) links.add(abs);
  }
  return Array.from(links);
}

async function fetchWithTimeout(url: string, opts: RequestInit = {}): Promise<Response> {
  const ctrl = new AbortController();
  const id = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    // Prefer HEAD to save bandwidth, fallback to GET on failure
    const head = await fetch(url, { method: 'HEAD', signal: ctrl.signal, headers: { 'User-Agent': 'zion-app-link-audit' }, ...opts });
    if (head.ok || head.status >= 400) return head;
  } catch {}
  try {
    const get = await fetch(url, { method: 'GET', signal: ctrl.signal, headers: { 'User-Agent': 'zion-app-link-audit' }, ...opts });
    return get;
  } finally {
    clearTimeout(id);
  }
}

function ts() {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}${p(d.getUTCMonth() + 1)}${p(d.getUTCDate())}-${p(d.getUTCHours())}${p(d.getUTCMinutes())}`;
}

export const handler: Handler = async () => {
  try {
    const origin = new URL(BASE_URL).origin;
    const toVisit: string[] = [origin + '/'];
    const visited = new Set<string>();
    const edges: Array<{ from: string; to: string }> = [];

    while (toVisit.length && visited.size < MAX_PAGES) {
      const url = toVisit.shift()!;
      if (visited.has(url)) continue;
      visited.add(url);
      let html = '';
      try {
        const res = await fetch(url, { headers: { 'User-Agent': 'zion-app-link-audit' } });
        if (!res.ok) continue;
        html = await res.text();
      } catch {
        continue;
      }
      const links = extractLinks(html, url);
      for (const l of links) {
        edges.push({ from: url, to: l });
        if (!visited.has(l) && l.startsWith(origin)) toVisit.push(l);
      }
    }

    const uniqueLinks = Array.from(new Set(edges.map(e => e.to)));

    const checks: Array<{ url: string; status: number; ok: boolean }> = [];
    for (const link of uniqueLinks) {
      try {
        const r = await fetchWithTimeout(link);
        checks.push({ url: link, status: r.status, ok: r.ok });
      } catch {
        checks.push({ url: link, status: 0, ok: false });
      }
    }

    const broken = checks.filter(c => !c.ok);
    const report = {
      baseUrl: BASE_URL,
      crawledPages: visited.size,
      totalLinks: uniqueLinks.length,
      brokenCount: broken.length,
      generatedAt: new Date().toISOString(),
      checks,
    };

    const content = JSON.stringify(report, null, 2) + '\n';
    const dest = `data/reports/link-audit/link-audit-${ts()}.json`;
    const commit = await commitToRepo({ path: dest, content, message: 'chore(link): automated link audit report', branch: 'main' });

    return { statusCode: 200, body: JSON.stringify({ ok: true, broken: broken.length, commit }) };
  } catch (e: any) {
    return { statusCode: 500, body: String(e?.message || e) };
  }
};