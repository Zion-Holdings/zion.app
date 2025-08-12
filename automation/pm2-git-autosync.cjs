#!/usr/bin/env node
'use strict';

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const LOG = path.join(ROOT, 'automation', 'logs', 'git-autosync.log');
const LOCK = path.join(ROOT, 'automation', '.git-sync.lock');

function ensureDir(p) { try { fs.mkdirSync(p, { recursive: true }); } catch {} }
function log(msg) {
  ensureDir(path.dirname(LOG));
  const line = `${new Date().toISOString()} ${msg}`;
  console.log(line);
  try { fs.appendFileSync(LOG, line + '\n'); } catch {}
}

function run(cmd, args = []) {
  const res = spawnSync(cmd, args, { stdio: 'inherit', cwd: ROOT, env: process.env, shell: false });
  return res.status === 0;
}

function withLock(fn) {
  const maxAgeMs = 5 * 60 * 1000;
  try {
    if (fs.existsSync(LOCK)) {
      const age = Date.now() - fs.statSync(LOCK).mtimeMs;
      if (age < maxAgeMs) { log('lock present; skip'); return false; }
      try { fs.unlinkSync(LOCK); } catch {}
    }
    fs.writeFileSync(LOCK, String(process.pid));
  } catch (e) {
    log(`lock error: ${e && e.message ? e.message : String(e)}`);
    return false;
  }
  try { return fn(); } finally { try { fs.unlinkSync(LOCK); } catch {} }
}

function loop() {
  const secs = parseInt(process.env.SYNC_INTERVAL_SECONDS || '60', 10);
  const branch = process.env.TARGET_BRANCH || 'main';
  log(`git-autosync: loop every ${secs}s on ${branch}`);
  const tick = () => {
    try {
      withLock(() => run('node', [path.join(ROOT, 'automation', 'git-sync.cjs')]));
    } catch (e) {
      log(`error: ${e && e.message ? e.message : String(e)}`);
    } finally {
      setTimeout(tick, secs * 1000);
    }
  };
  tick();
}

loop();


