#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const REPORT_DIR = path.join(ROOT, 'public', 'reports', 'site-404-map');
function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
ensureDir(REPORT_DIR);

function collectRoutes() {
  const pagesDir = path.join(ROOT, 'pages');
  const routes = new Set(['/']);
  function walk(dir, prefix = '') {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const hasIndex = entries.some((e) => e.isFile() && /^index\.(tsx|ts|jsx|js)$/i.test(e.name));
    if (hasIndex && prefix) routes.add(prefix);
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        if (e.name.startsWith('_') || e.name.startsWith('[')) continue;
        walk(full, path.posix.join(prefix || '/', e.name));
      } else if (e.isFile()) {
        if (!/\.(tsx|ts|jsx|js)$/i.test(e.name)) continue;
        const base = e.name.replace(/\.(tsx|ts|jsx|js)$/i, '');
        if (base === 'index') continue;
        routes.add(path.posix.join(prefix || '/', base));
      }
    }
  }
  walk(pagesDir, '');
  return Array.from(routes);
}

async function checkStatuses(baseUrl, routes) {
  const results = [];
  const concurrency = 8;
  let idx = 0;
  async function worker() {
    while (idx < routes.length) {
      const route = routes[idx++];
      const url = `${baseUrl}${route}`;
      let status = 0;
      try {
        const res = await fetch(url, { method: 'HEAD' });
        status = res.status;
        if (status === 405 || status === 403) {
          const res2 = await fetch(url, { method: 'GET' });
          status = res2.status;
        }
      } catch (e) {
        status = 0;
      }
      results.push({ route, status });
    }
  }
  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  return results;
}

(async function main() {
  const baseUrl = (process.env.SITE_URL || process.env.URL || process.env.DEPLOY_PRIME_URL || 'https://ziontechgroup.com').replace(/\/$/, '');
  const routes = collectRoutes();
  const statuses = await checkStatuses(baseUrl, routes);
  const report = { generatedAt: new Date().toISOString(), baseUrl, totals: { routes: routes.length }, statuses };
  const outPath = path.join(REPORT_DIR, 'status.json');
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(`Site 404 Map written to ${outPath}`);
})();