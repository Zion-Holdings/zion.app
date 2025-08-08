#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data', 'reports', 'frontend-sync');
const REPORT = path.join(DATA_DIR, 'frontend-sync-actions.json');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function readLinesSafe(buf) { return (buf || '').toString().split('\n').map(s => s.trim()).filter(Boolean); }

function getChangedFiles() {
  try {
    const res = spawnSync('git', ['status', '--porcelain'], { cwd: ROOT, encoding: 'utf8' });
    if (res.status === 0) {
      const files = readLinesSafe(res.stdout).map(line => line.slice(3)).filter(Boolean);
      if (files.length > 0) return files;
    }
  } catch {}
  // Fallback: scan key dirs and include recently modified files (last 24h)
  const keyDirs = ['pages', 'components', 'styles', 'utils', 'public'];
  const changed = [];
  const since = Date.now() - 24 * 60 * 60 * 1000;
  for (const d of keyDirs) {
    const dir = path.join(ROOT, d);
    if (!fs.existsSync(dir)) continue;
    const stack = [dir];
    while (stack.length) {
      const cur = stack.pop();
      for (const entry of fs.readdirSync(cur, { withFileTypes: true })) {
        const p = path.join(cur, entry.name);
        if (entry.isDirectory()) { stack.push(p); continue; }
        const stat = fs.statSync(p);
        if (stat.mtimeMs >= since) changed.push(path.relative(ROOT, p));
      }
    }
  }
  return Array.from(new Set(changed));
}

function decideActions(changedFiles) {
  const actions = new Set(['sync_content_metadata', 'sync_pages_components']);
  if (changedFiles.some(f => f.startsWith('pages/') || f.startsWith('public/'))) {
    actions.add('rebuild_sitemap');
  }
  return Array.from(actions);
}

function main() {
  ensureDir(DATA_DIR);
  const changedFiles = getChangedFiles();
  const actions = decideActions(changedFiles);
  const payload = {
    timestamp: new Date().toISOString(),
    changedFiles,
    actions
  };
  fs.writeFileSync(REPORT, JSON.stringify(payload, null, 2));
  console.log(`Frontend sync analyzer wrote ${REPORT} with ${actions.length} actions`);
}

main();


