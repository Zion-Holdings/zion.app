#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function walk(dir, filterExts = new Set(['.tsx', '.jsx', '.md', '.mdx'])) {
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name.startsWith('.')) continue;
    const abs = path.join(dir, e.name);
    if (e.isDirectory()) {
      out.push(...walk(abs, filterExts));
    } else {
      const ext = path.extname(e.name);
      if (filterExts.has(ext)) out.push(abs);
    }
  }
  return out;
}

function gitLastCommitUnixTs(filePath) {
  try {
    const out = execSync(`git log -1 --format=%ct -- ${JSON.stringify(filePath)}`, { encoding: 'utf8' }).trim();
    return out ? parseInt(out, 10) : 0;
  } catch {
    try {
      const stat = fs.statSync(filePath);
      return Math.floor(stat.mtimeMs / 1000);
    } catch { return 0; }
  }
}

function daysBetween(a, b) {
  return Math.round((b - a) / (24 * 60 * 60));
}

function analyze() {
  const root = process.cwd();
  const targets = [
    { label: 'pages', dir: path.join(root, 'pages') },
    { label: 'docs', dir: path.join(root, 'docs') },
    { label: 'components', dir: path.join(root, 'components') },
  ];

  const nowSec = Math.floor(Date.now() / 1000);
  const items = [];
  for (const t of targets) {
    if (!fs.existsSync(t.dir)) continue;
    for (const file of walk(t.dir)) {
      const ts = gitLastCommitUnixTs(file);
      const days = daysBetween(ts, nowSec);
      items.push({ area: t.label, file: path.relative(root, file), lastCommitUnix: ts, stalenessDays: days });
    }
  }

  items.sort((a, b) => b.stalenessDays - a.stalenessDays);
  const summary = {
    generatedAt: new Date().toISOString(),
    totals: { files: items.length },
    mostStale: items.slice(0, 50),
    freshnessByArea: targets.map(t => ({ area: t.label, avgStalenessDays: average(items.filter(i => i.area === t.label).map(i => i.stalenessDays)) })),
  };

  const outDir = path.join(root, 'public', 'automation');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'content-freshness.json');
  fs.writeFileSync(outPath, JSON.stringify({ summary, items }, null, 2));
  return outPath;
}

function average(arr) {
  if (!arr.length) return 0;
  return Math.round((arr.reduce((s, n) => s + n, 0) / arr.length) * 10) / 10;
}

(function main() {
  const outPath = analyze();
  process.stdout.write(`Wrote content freshness report: ${outPath}\n`);
})();