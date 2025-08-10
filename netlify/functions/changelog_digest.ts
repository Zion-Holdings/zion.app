// Netlify Scheduled Function: Changelog Digest of Recent Automation Reports
// Scheduled in netlify.toml -> [[scheduled]] path = "/.netlify/functions/changelog_digest"

export const config = {
  path: "/.netlify/functions/changelog_digest",
};

import type { Handler } from '@netlify/functions';
import { commitToRepo } from '../../utils/githubCommit';

const REPO = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';
const BRANCH = 'main';
const DIRS = [
  'data/reports/performance/psi',
  'data/reports/link-audit',
  'data/reports/seo',
  'data/reports/a11y',
  'data/reports/security',
  'data/reports/rss',
  'data/reports/uptime',
  'data/reports/content',
  'data/reports/og',
  'data/reports/cache',
  'data/reports/redirects',
];

async function listDir(dir: string) {
  const api = `https://api.github.com/repos/${REPO}/contents/${encodeURIComponent(dir)}?ref=${BRANCH}`;
  const res = await fetch(api, { headers: { 'User-Agent': 'zion-app-changelog' } });
  if (res.status === 404) return [];
  if (!res.ok) return [];
  const json: any = await res.json();
  return Array.isArray(json) ? json.filter((e: any) => e.type === 'file') : [];
}

function stamp() {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}${p(d.getUTCMonth() + 1)}${p(d.getUTCDate())}-${p(d.getUTCHours())}${p(d.getUTCMinutes())}`;
}

export const handler: Handler = async () => {
  try {
    const entries: any[] = [];
    for (const dir of DIRS) {
      const files = await listDir(dir);
      const latest = files.sort((a: any, b: any) => (a.name < b.name ? 1 : -1))[0];
      if (latest) entries.push({ dir, name: latest.name, url: latest.html_url });
    }
    const md = ['# Automation Digest', '', `Generated: ${new Date().toISOString()}`, ''].concat(
      entries.map((e) => `- ${e.dir}: [${e.name}](${e.url})`)
    ).join('\n') + '\n';
    const path = `data/reports/digests/automation-digest-${stamp()}.md`;
    const commit = await commitToRepo({ path, content: md, message: 'chore(digest): automation digest', branch: BRANCH });
    return { statusCode: 200, body: JSON.stringify({ ok: true, commit, count: entries.length }) };
  } catch (e: any) {
    return { statusCode: 500, body: String(e?.message || e) };
  }
};