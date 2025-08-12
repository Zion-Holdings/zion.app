#!/usr/bin/env node
'use strict';

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const LOG = path.join(ROOT, 'automation', 'logs', 'git-autosync.log');
const LOCK_FILE = path.join(ROOT, 'automation', '.git-sync.lock');

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }
function log(msg) {
  ensureDir(path.dirname(LOG));
  const line = `${new Date().toISOString()} ${msg}`;
  console.log(line);
  try { fs.appendFileSync(LOG, line + '\n'); } catch {}
}

function withGitLock(fn) {
  const maxAgeMs = 5 * 60 * 1000;
  try {
    if (fs.existsSync(LOCK_FILE)) {
      const age = Date.now() - fs.statSync(LOCK_FILE).mtimeMs;
      if (age < maxAgeMs) { log('lock present; skip this cycle'); return false; }
      try { fs.unlinkSync(LOCK_FILE); } catch {}
    }
    fs.writeFileSync(LOCK_FILE, String(process.pid));
  } catch (e) { log(`lock error: ${e.message || e}`); return false; }
  try { return fn(); } finally { try { fs.unlinkSync(LOCK_FILE); } catch {} }
}

function run(cmd, args = []) {
  const res = spawnSync(cmd, args, { stdio: 'inherit', cwd: ROOT, env: process.env, shell: false });
  return res.status === 0;
}

function tick() {
  withGitLock(() => {
    log('sync: start');
    run('node', [path.join(ROOT, 'automation', 'git-sync.cjs')]);
    log('sync: end');
    return true;
  });
}

function main() {
  const secs = parseInt(process.env.SYNC_INTERVAL_SECONDS || '60', 10);
  const branch = process.env.TARGET_BRANCH || 'main';
  log(`git-autosync: loop every ${secs}s → ${branch}`);
  tick();
  setInterval(tick, secs * 1000);
}

if (require.main === module) {
  try { main(); } catch (e) { log(`fatal: ${e.stack || e}`); process.exit(1); }
}

 
