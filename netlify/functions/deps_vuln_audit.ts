// Netlify Scheduled Function: Dependencies Vulnerability Audit (OSV)
// Scheduled in netlify.toml -> [[scheduled]] path = "/.netlify/functions/deps_vuln_audit"

export const config = {
  path: "/.netlify/functions/deps_vuln_audit",
};

import type { Handler } from '@netlify/functions';
import { commitToRepo } from '../../utils/githubCommit';

const REPO = process.env.GITHUB_REPO || 'Zion-Holdings/zion.app';

async function fetchPackageJson() {
  const url = `https://raw.githubusercontent.com/${REPO}/main/package.json`;
  const res = await fetch(url, { headers: { 'User-Agent': 'zion-app-deps-audit' } });
  if (!res.ok) throw new Error(`Failed to fetch package.json: ${res.status}`);
  return res.json();
}

function buildQueries(pkg: any) {
  const queries: any[] = [];
  const add = (deps?: Record<string, string>) => {
    if (!deps) return;
    for (const [name, version] of Object.entries(deps)) {
      const v = String(version).replace(/^[^0-9]*/, '');
      if (!v) continue;
      queries.push({ package: { name, ecosystem: 'npm' }, version: v });
    }
  };
  add(pkg.dependencies);
  add(pkg.devDependencies);
  return queries;
}

async function queryOSV(queries: any[]) {
  const res = await fetch('https://api.osv.dev/v1/querybatch', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'User-Agent': 'zion-app-deps-audit' },
    body: JSON.stringify({ queries }),
  });
  if (!res.ok) throw new Error(`OSV query failed: ${res.status}`);
  return res.json();
}

function stamp() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}-${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}`;
}

export const handler: Handler = async () => {
  try {
    const pkg = await fetchPackageJson();
    const queries = buildQueries(pkg);
    const osv = await queryOSV(queries.slice(0, 200)); // cap to prevent huge payloads
    const vulnerabilities = (osv?.results || []).flatMap((r: any, i: number) => 
      (r?.vulns || []).map((v: any) => ({ dep: queries[i]?.package?.name, version: queries[i]?.version, id: v.id, summary: v.summary }))
    );
    const summary = { totalDeps: queries.length, vulnerable: vulnerabilities.length };
    const report = { timestamp: new Date().toISOString(), summary, vulnerabilities };
    const content = JSON.stringify(report, null, 2) + '\n';
    const dest = `data/reports/security/dependencies/deps-vuln-${stamp()}.json`;
    const commit = await commitToRepo({ path: dest, content, message: 'chore(security): dependency vulnerability audit (OSV)', branch: 'main' });
    return { statusCode: 200, body: JSON.stringify({ ok: true, commit, summary }) };
  } catch (e: any) {
    return { statusCode: 500, body: String(e?.message || e) };
  }
};