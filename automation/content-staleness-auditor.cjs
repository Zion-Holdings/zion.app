#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function getAllFiles(dir, exts, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir)) {
    const abs = path.join(dir, entry);
    const stat = fs.statSync(abs);
    if (stat.isDirectory()) getAllFiles(abs, exts, out);
    else if (exts.includes(path.extname(entry))) out.push(abs);
  }
  return out;
}

function getLastCommitTimestamp(filePath) {
  try {
    const out = execSync(`git log -1 --format=%ct -- ${JSON.stringify(filePath)}`, { encoding: 'utf8', stdio: ['ignore','pipe','ignore'] }).trim();
    const ts = parseInt(out, 10);
    if (!Number.isNaN(ts) && ts > 0) return ts * 1000;
  } catch {}
  try {
    return fs.statSync(filePath).mtimeMs;
  } catch {
    return Date.now();
  }
}

function main() {
  const root = path.resolve(__dirname, '..');
  const targets = [
    path.join(root, 'docs'),
    path.join(root, 'pages'),
  ];
  const exts = ['.md', '.mdx', '.mdoc', '.tsx', '.ts', '.js'];
  const files = targets.flatMap((d) => getAllFiles(d, exts));

  const now = Date.now();
  const items = files.map((f) => {
    const ts = getLastCommitTimestamp(f);
    const ageDays = Math.round((now - ts) / (1000 * 60 * 60 * 24));
    return { path: path.relative(root, f), lastUpdatedAt: new Date(ts).toISOString(), ageDays };
  }).sort((a, b) => b.ageDays - a.ageDays);

  const report = {
    generatedAt: new Date().toISOString(),
    totalFiles: items.length,
    oldest: items.slice(0, 50),
    thresholds: {
      warnDays: 90,
      criticalDays: 180,
    },
    stale: items.filter(i => i.ageDays >= 90).slice(0, 200),
  };

  const outDir1 = path.join(root, 'data', 'reports', 'content');
  const outDir2 = path.join(root, 'public', 'automation');
  try { fs.mkdirSync(outDir1, { recursive: true }); } catch {}
  try { fs.mkdirSync(outDir2, { recursive: true }); } catch {}
  fs.writeFileSync(path.join(outDir1, 'content-staleness.json'), JSON.stringify(report, null, 2));
  fs.writeFileSync(path.join(outDir2, 'content-staleness.json'), JSON.stringify(report, null, 2));
  console.log(`Content staleness report written. totalFiles=${items.length}`);
}

main();