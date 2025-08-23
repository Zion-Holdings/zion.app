#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = process.cwd();
const TARGET_DIRS = ['pages', 'docs'];
const ALLOWED_EXT = new Set(['.md', '.mdx', '.js', '.jsx', '.ts', '.tsx']);
const OUTPUT_DIR_PUBLIC = path.join(ROOT, 'public', 'reports');
const OUTPUT_DIR_REPORTS = path.join(ROOT, 'reports');
const JSON_PATH = path.join(OUTPUT_DIR_PUBLIC, 'content-freshness.json');
const CSV_PATH = path.join(OUTPUT_DIR_REPORTS, 'content_freshness.csv');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function listFiles(dir) {
  const out = [];
  function walk(current) {
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const ent of entries) {
      if (ent.name.startsWith('.')) continue;
      const abs = path.join(current, ent.name);
      const rel = path.relative(ROOT, abs);
      if (rel.includes(`${path.sep}.next${path.sep}`)) continue;
      if (rel.includes(`${path.sep}node_modules${path.sep}`)) continue;
      if (rel.includes(`${path.sep}out${path.sep}`)) continue;
      if (ent.isDirectory()) {
        walk(abs);
      } else {
        const ext = path.extname(ent.name).toLowerCase();
        if (ALLOWED_EXT.has(ext)) out.push(abs);
      }
    }
  }
  walk(dir);
  return out;
}

function lastCommitUnixSeconds(filePath) {
  try {
    const out = execSync(`git log -1 --format=%ct -- ${JSON.stringify(filePath)}`, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
    const ts = parseInt(out, 10);
    if (!Number.isNaN(ts) && ts > 0) return ts;
  } catch (_) {}
  // Fallback to mtime
  try {
    const stat = fs.statSync(filePath);
    return Math.floor(stat.mtimeMs / 1000);
  } catch (_) {
    return 0;
  }
}

function toIso(tsSec) {
  try { return new Date(tsSec * 1000).toISOString(); } catch { return ''; }
}

(function main() {
  ensureDir(OUTPUT_DIR_PUBLIC);
  ensureDir(OUTPUT_DIR_REPORTS);

  const nowSec = Math.floor(Date.now() / 1000);
  const results = [];

  for (const dir of TARGET_DIRS) {
    const absDir = path.join(ROOT, dir);
    if (!fs.existsSync(absDir)) continue;
    const files = listFiles(absDir);
    for (const abs of files) {
      const ts = lastCommitUnixSeconds(abs);
      const days = ts > 0 ? (nowSec - ts) / (60 * 60 * 24) : null;
      results.push({
        path: path.relative(ROOT, abs),
        lastCommitIso: ts ? toIso(ts) : '',
        daysStale: days != null ? Number(days.toFixed(2)) : null,
        dir,
      });
    }
  }

  results.sort((a, b) => (b.daysStale ?? -1) - (a.daysStale ?? -1));

  const json = {
    generatedAt: new Date().toISOString(),
    totalFiles: results.length,
    items: results,
  };
  fs.writeFileSync(JSON_PATH, JSON.stringify(json, null, 2));

  const csvLines = [
    'path,last_commit_iso,days_stale,dir',
    ...results.map(r => [r.path, r.lastCommitIso, r.daysStale ?? '', r.dir].join(',')),
  ];
  fs.writeFileSync(CSV_PATH, csvLines.join('\n'));

  console.log(`Content freshness audit complete. Files analyzed: ${results.length}`);
  console.log(`JSON report: ${path.relative(ROOT, JSON_PATH)}`);
  console.log(`CSV report: ${path.relative(ROOT, CSV_PATH)}`);
})();