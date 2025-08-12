#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = process.cwd();
const TARGET_DIRS = [path.join(ROOT, 'docs'), path.join(ROOT, 'pages')];
const REPORT_DIR = path.join(ROOT, 'public', 'reports', 'content-freshness');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
ensureDir(REPORT_DIR);

function listFiles(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...listFiles(full));
    else if (/(\.md|\.mdx|\.tsx|\.ts|\.jsx|\.js)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

function lastGitTimestamp(file) {
  try {
    const out = execSync(`git log -1 --format=%ct -- ${JSON.stringify(file)}`, { encoding: 'utf8' }).trim();
    if (out) return parseInt(out, 10) * 1000;
  } catch {}
  try {
    const stat = fs.statSync(file);
    return stat.mtimeMs;
  } catch {}
  return Date.now();
}

(function main() {
  const now = Date.now();
  const items = [];
  for (const dir of TARGET_DIRS) {
    for (const file of listFiles(dir)) {
      const ts = lastGitTimestamp(file);
      const ageDays = Math.max(0, Math.round((now - ts) / (1000 * 60 * 60 * 24)));
      const score = Math.max(0, 100 - Math.min(365, ageDays)); // simple decay
      items.push({ file: path.relative(ROOT, file).replace(/\\/g, '/'), lastUpdate: new Date(ts).toISOString(), ageDays, score });
    }
  }
  items.sort((a, b) => a.score - b.score);
  const report = { generatedAt: new Date().toISOString(), total: items.length, items };
  const outPath = path.join(REPORT_DIR, 'freshness.json');
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(`Content Freshness report written to ${outPath}`);
})();