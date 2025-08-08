#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data', 'reports', 'frontend-sync', 'autonomous');
const REPORT = path.join(DATA_DIR, 'frontend-sync-autonomous-actions.json');
const STATE_FILE = path.join(__dirname, 'logs', 'frontend-sync-autonomous-state.json');

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function readJsonSafe(fp, fallback) {
  try { return JSON.parse(fs.readFileSync(fp, 'utf8')); } catch { return fallback; }
}

function getChangedFilesSince(lastRunMs) {
  const keyDirs = ['pages', 'components', 'styles', 'utils', 'public'];
  const changed = [];
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
        if (!lastRunMs || stat.mtimeMs >= lastRunMs) {
          changed.push(path.relative(ROOT, p));
        }
      }
    }
  }
  return Array.from(new Set(changed));
}

function getGitChangedFiles() {
  try {
    const res = spawnSync('git', ['status', '--porcelain'], { cwd: ROOT, encoding: 'utf8' });
    if (res.status === 0) {
      return res.stdout
        .toString()
        .split('\n')
        .map(line => line.trim())
        .filter(Boolean)
        .map(line => line.slice(3))
        .filter(Boolean);
    }
  } catch {}
  return [];
}

function decideActions(changedFiles) {
  const actions = new Set(['sync_content_metadata', 'sync_pages_components']);
  if (changedFiles.some(f => f.startsWith('pages/') || f.startsWith('public/'))) {
    actions.add('rebuild_sitemap');
  }
  if (changedFiles.some(f => f.startsWith('styles/') || f.endsWith('.css') || f.endsWith('.scss'))) {
    actions.add('refresh_styles');
  }
  if (changedFiles.some(f => f.startsWith('pages/auto/'))) {
    actions.add('refresh_auto_pages');
  }
  return Array.from(actions);
}

function main() {
  ensureDir(DATA_DIR);
  ensureDir(path.dirname(STATE_FILE));

  const state = readJsonSafe(STATE_FILE, { lastRun: 0 });
  const lastRunMs = typeof state.lastRun === 'number' ? state.lastRun : 0;

  const fsChanged = getChangedFilesSince(lastRunMs);
  const gitChanged = getGitChangedFiles();
  const changedFiles = Array.from(new Set([...fsChanged, ...gitChanged]));

  const actions = decideActions(changedFiles);

  const payload = {
    timestamp: new Date().toISOString(),
    lastRunMs,
    changedFiles,
    actions
  };

  fs.writeFileSync(REPORT, JSON.stringify(payload, null, 2));
  fs.writeFileSync(STATE_FILE, JSON.stringify({ lastRun: Date.now() }, null, 2));
  console.log(`Autonomous frontend sync analyzer wrote ${REPORT} with ${actions.length} actions`);
}

if (require.main === module) {
  main();
}

module.exports = { main };