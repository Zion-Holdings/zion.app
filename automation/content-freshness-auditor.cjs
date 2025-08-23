#!/usr/bin/env node

const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');

const ROOT = process.cwd();
const CONTENT_DIRS = [path.join(ROOT, 'pages'), path.join(ROOT, 'docs')];
const REPORT_DIR = path.join(ROOT, 'data', 'reports', 'content-freshness');
const PUBLIC_REPORT = path.join(ROOT, 'public', 'reports', 'content-freshness.json');

const STALE_DAYS = Number(process.env.STALE_DAYS || 60);

function listFiles(dir) {
  const results = [];
  if (!fs.existsSync(dir)) return results;
  const stack = [dir];
  while (stack.length) {
    const current = stack.pop();
    const entries = fs.readdirSync(current);
    for (const entry of entries) {
      const full = path.join(current, entry);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        // skip Next.js build and API directories
        if (entry === '.next' || entry === 'api') continue;
        stack.push(full);
      } else if (/\.(md|mdx|tsx|ts|jsx|js)$/.test(entry)) {
        results.push({ path: full, mtimeMs: stat.mtimeMs });
      }
    }
  }
  return results;
}

function routeFromFile(root, full) {
  if (!full.startsWith(root)) return null;
  let rel = full.replace(root, '').replace(/\\/g, '/');
  rel = rel.replace(/\.(md|mdx|tsx|ts|jsx|js)$/i, '');
  if (rel.endsWith('/index')) rel = rel.slice(0, -6) || '/';
  if (!rel.startsWith('/')) rel = '/' + rel;
  return rel;
}

async function main() {
  const now = Date.now();
  const items = [];
  for (const dir of CONTENT_DIRS) {
    for (const f of listFiles(dir)) {
      const route = routeFromFile(dir, f.path);
      const ageDays = Math.round((now - f.mtimeMs) / (1000 * 60 * 60 * 24));
      items.push({ route, file: f.path, ageDays, stale: ageDays >= STALE_DAYS });
    }
  }
  items.sort((a, b) => b.ageDays - a.ageDays);

  const summary = {
    timestamp: new Date().toISOString(),
    thresholdDays: STALE_DAYS,
    totals: {
      scanned: items.length,
      stale: items.filter((i) => i.stale).length,
    },
    topStale: items.filter((i) => i.stale).slice(0, 50),
  };

  await fse.ensureDir(REPORT_DIR);
  await fse.ensureDir(path.dirname(PUBLIC_REPORT));
  const file = path.join(REPORT_DIR, `freshness-${Date.now()}.json`);
  await fse.writeJSON(file, { summary, items }, { spaces: 2 });
  await fse.writeJSON(path.join(REPORT_DIR, 'latest.json'), { summary, items }, { spaces: 2 });
  await fse.writeJSON(PUBLIC_REPORT, summary, { spaces: 2 });
  console.log(`Content freshness: ${summary.totals.stale}/${summary.totals.scanned} stale (>${STALE_DAYS}d)`);
}

main().catch((err) => { console.error(err); process.exit(1); });