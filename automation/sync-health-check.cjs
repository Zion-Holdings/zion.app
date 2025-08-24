#!/usr/bin/env node

const fs = require('fs');
const os = require('os');
const path = require('path');
const { execSync } = require('child_process');

function run(cmd, options = {}) {
  return execSync(cmd, { stdio: 'pipe', encoding: 'utf8', ...options }).trim();
}

function safeRun(cmd, options = {}) {
  try { return run(cmd, options); } catch { return ''; }
}

function nowIso() { return new Date().toISOString(); }

function logFilePath() {
  const dir = path.join(__dirname, 'logs');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  return path.join(dir, 'sync-health.log');
}

function appendLog(line) {
  const fp = logFilePath();
  fs.appendFileSync(fp, `[${nowIso()}] ${line}\n`);
}

function writeJsonReport(report) {
  const outDir = path.join(__dirname, '..', 'data', 'reports', 'sync');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const fp = path.join(outDir, 'sync-health.json');
  fs.writeFileSync(fp, JSON.stringify(report, null, 2));
  return fp;
}

function fileAgeMs(fp) {
  try { return Date.now() - fs.statSync(fp).mtimeMs; } catch { return Infinity; }
}

function processExists(pid) {
  if (!pid || isNaN(Number(pid))) return false;
  try { process.kill(Number(pid), 0); return true; } catch { return false; }
}

function removeIfStale(fp, maxAgeMs) {
  try {
    const age = fileAgeMs(fp);
    if (age < Infinity && age > maxAgeMs) {
      fs.rmSync(fp, { force: true });
      return { removed: true, age };
    }
    return { removed: false, age };
  } catch {
    return { removed: false, age: Infinity };
  }
}

(function main() {
  const args = new Set(process.argv.slice(2));
  const autoFix = args.has('--fix');

  const checks = [];
  let failing = false;
  let degraded = false;

  const inside = /true/i.test(safeRun('git rev-parse --is-inside-work-tree'));
  checks.push({ name: 'git-repo', ok: inside, details: inside ? 'Inside git repo' : 'Not a git repo' });
  if (!inside) {
    const report = { timestamp: nowIso(), host: os.hostname(), status: 'failing', checks };
    writeJsonReport(report);
    appendLog('❌ Not a git repository. Exiting.');
    process.exit(2);
  }

  const repoRoot = safeRun('git rev-parse --show-toplevel') || process.cwd();
  const bgDir = path.join(repoRoot, '.git', '.bg');
  const syncPidPath = path.join(bgDir, 'sync.pid');
  const pullPidPath = path.join(bgDir, 'pull.pid');
  const syncPid = safeRun(`cat ${JSON.stringify(syncPidPath)}`);
  const pullPid = safeRun(`cat ${JSON.stringify(pullPidPath)}`);
  const syncRunning = processExists(syncPid);
  const pullRunning = processExists(pullPid);
  checks.push({ name: 'bg-sync-loop-running', ok: syncRunning, details: `PID: ${syncPid || '-'} ` });
  checks.push({ name: 'bg-pull-loop-running', ok: pullRunning, details: `PID: ${pullPid || '-'} ` });
  if (!syncRunning || !pullRunning) degraded = true;

  const autoSyncLog = path.join(repoRoot, '.git', 'auto-sync.log');
  const autoPullLog = path.join(repoRoot, '.git', 'auto-pull.log');
  const syncAge = fileAgeMs(autoSyncLog);
  const pullAge = fileAgeMs(autoPullLog);
  const tenMin = 10 * 60 * 1000;
  checks.push({ name: 'auto-sync-log-fresh', ok: syncAge < tenMin, details: `ageMs=${syncAge}` });
  checks.push({ name: 'auto-pull-log-fresh', ok: pullAge < tenMin, details: `ageMs=${pullAge}` });
  if (syncAge >= tenMin || pullAge >= tenMin) degraded = true;

  const advLock = path.join(repoRoot, '.git', '.advanced-git-sync.lock');
  const pullLock = path.join(repoRoot, '.git', '.git-pull-rebase.lock');
  const fifteenMin = 15 * 60 * 1000;
  const advAge = fileAgeMs(advLock);
  const pullLockAge = fileAgeMs(pullLock);
  const advStale = advAge > fifteenMin && advAge < Infinity;
  const pullStale = pullLockAge > fifteenMin && pullLockAge < Infinity;
  if (advStale && autoFix) removeIfStale(advLock, 0);
  if (pullStale && autoFix) removeIfStale(pullLock, 0);
  checks.push({ name: 'advanced-git-sync-lock-stale', ok: !advStale, details: `ageMs=${advAge}` });
  checks.push({ name: 'git-pull-rebase-lock-stale', ok: !pullStale, details: `ageMs=${pullLockAge}` });
  if (advStale || pullStale) degraded = true;

  // Remote & divergence
  safeRun('git fetch --prune origin');
  const originUrl = safeRun('git remote get-url origin');
  checks.push({ name: 'origin-configured', ok: !!originUrl, details: originUrl || 'missing' });
  if (!originUrl) degraded = true;

  const branch = safeRun('git rev-parse --abbrev-ref HEAD') || 'main';
  let behind = 0, ahead = 0;
  const lr = safeRun(`git rev-list --left-right --count origin/${branch}...HEAD`) || '0\t0';
  try {
    const parts = lr.split(/\s+/);
    behind = Number(parts[0]) || 0; // commits local is behind remote
    ahead = Number(parts[1]) || 0;  // commits local is ahead remote
  } catch {}
  checks.push({ name: 'divergence', ok: behind <= 50 && ahead <= 200, details: `behind=${behind}, ahead=${ahead}, branch=${branch}` });
  if (behind > 50) failing = true; else if (behind > 0 || ahead > 0) degraded = true;

  // Working tree cleanliness
  const status = safeRun('git status --porcelain');
  const changedCount = status ? status.split('\n').filter(Boolean).length : 0;
  checks.push({ name: 'working-tree-clean', ok: changedCount === 0, details: `changed=${changedCount}` });
  if (changedCount > 1000) failing = true; else if (changedCount > 0) degraded = true;

  // Optional auto-fix: restart background loops if down or logs stale
  if (autoFix && (!syncRunning || !pullRunning || syncAge >= tenMin || pullAge >= tenMin)) {
    try {
      appendLog('Attempting to (re)start git sync background loops');
      run(`bash -lc "cd ${repoRoot} && bash automation/git-sync-cron.sh start"`);
    } catch (e) {
      appendLog(`Failed to (re)start background loops: ${e.message}`);
    }
  }

  // Final status
  const statusStr = failing ? 'failing' : degraded ? 'degraded' : 'ok';
  const report = {
    timestamp: nowIso(),
    host: os.hostname(),
    repoRoot,
    status: statusStr,
    checks
  };

  const reportPath = writeJsonReport(report);
  appendLog(`Status=${statusStr}; report written to ${reportPath}`);

  if (statusStr === 'failing') process.exit(2);
  if (statusStr === 'degraded') process.exit(1);
  process.exit(0);
})();