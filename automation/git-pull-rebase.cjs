#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawnSync } = require('child_process');

function run(cmd, options = {}) {
  return execSync(cmd, { stdio: 'pipe', encoding: 'utf8', ...options }).trim();
}

function safeRun(cmd, options = {}) {
  try { return run(cmd, options); } catch (e) { return ''; }
}

function log(msg) {
  const t = new Date().toISOString();
  console.log(`[git-pull-rebase ${t}] ${msg}`);
}

function withLock(lockPath, fn) {
  const staleMs = 15 * 60 * 1000;
  try {
    if (fs.existsSync(lockPath)) {
      const age = Date.now() - fs.statSync(lockPath).mtimeMs;
      if (age < staleMs) {
        log(`Lock present (${lockPath}), skipping.`);
        return;
      } else {
        fs.rmSync(lockPath, { force: true });
      }
    }
    fs.writeFileSync(lockPath, String(process.pid));
    try { fn(); } finally { fs.rmSync(lockPath, { force: true }); }
  } catch (e) { log(`Lock error: ${e.message}`); }
}

(function main() {
  const inside = safeRun('git rev-parse --is-inside-work-tree');
  if (!/true/i.test(inside)) {
    log('Not a git repo. Exiting.');
    return;
  }
  const repoRoot = safeRun('git rev-parse --show-toplevel') || process.cwd();
  const lockFile = path.join(repoRoot, '.git', '.git-pull-rebase.lock');

  withLock(lockFile, () => {
    const branch = safeRun('git rev-parse --abbrev-ref HEAD') || 'main';
    safeRun('git fetch --prune origin');

    // Use pull --rebase with autostash to keep working changes
    const result = spawnSync('bash', ['-lc', `git pull --rebase --autostash origin ${branch}`], { encoding: 'utf8' });
    if (result.status !== 0) {
      log(`Rebase failed on ${branch}. Aborting.`);
      safeRun('git rebase --abort');
    } else {
      log(`Rebased successfully on ${branch}.`);
    }
  });
})();