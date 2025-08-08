#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const repoDir = path.join(__dirname, '..');
const logDir = path.join(__dirname, 'logs');
const healthLog = path.join(logDir, 'cron-health.log');

function nowIso() {
  return new Date().toISOString();
}

function log(message) {
  const line = `[${nowIso()}] ${message}`;
  console.log(line);
  fs.mkdirSync(path.dirname(healthLog), { recursive: true });
  fs.appendFileSync(healthLog, line + '\n');
}

function fileRecentEnough(filepath, maxAgeSeconds) {
  try {
    const stats = fs.statSync(filepath);
    const mtime = stats.mtimeMs;
    const ageMs = Date.now() - mtime;
    return ageMs <= maxAgeSeconds * 1000;
  } catch (_) {
    return false;
  }
}

function tail(filepath, n = 50) {
  try {
    const data = fs.readFileSync(filepath, 'utf8');
    const lines = data.trim().split(/\r?\n/);
    return lines.slice(-n).join('\n');
  } catch (_) {
    return '(no log)';
  }
}

function check(name, filepath, maxAgeSeconds) {
  const ok = fileRecentEnough(filepath, maxAgeSeconds);
  if (ok) {
    log(`OK ${name}: recent activity detected in ${path.relative(repoDir, filepath)}`);
    return true;
  }
  log(`FAIL ${name}: stale or missing log ${path.relative(repoDir, filepath)}`);
  log(`TAIL ${name} ->\n${tail(filepath, 30)}`);
  return false;
}

function main() {
  const checks = [
    { name: 'linting-cron', file: path.join(__dirname, 'logs', 'linting-cron.log'), maxAgeSec: 15 * 60 },
    { name: 'content-autogen', file: path.join(__dirname, 'logs', 'content-autogen.log'), maxAgeSec: 45 * 60 },
    { name: 'git-auto-sync', file: path.join(repoDir, '.git', 'auto-sync.log'), maxAgeSec: 5 * 60 },
    { name: 'git-auto-pull', file: path.join(repoDir, '.git', 'auto-pull.log'), maxAgeSec: 10 * 60 },
  ];

  let allOk = true;
  for (const c of checks) {
    const ok = check(c.name, c.file, c.maxAgeSec);
    allOk = allOk && ok;
  }

  if (!allOk) {
    log('At least one cron health check FAILED');
    process.exit(2);
  }
  log('All cron health checks passed');
}

main();