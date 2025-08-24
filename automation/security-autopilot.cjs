#!/usr/bin/env node
/* eslint-disable no-console */
const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs-extra');

function run(name, cmd, args) {
  const startedAt = new Date().toISOString();
  const r = spawnSync(cmd, args, { encoding: 'utf-8' });
  const finishedAt = new Date().toISOString();
  return { name, cmd: [cmd, ...args].join(' '), startedAt, finishedAt, code: r.status, stdout: r.stdout, stderr: r.stderr };
}

async function main() {
  const repoRoot = process.cwd();
  const logsDir = path.join(repoRoot, 'automation_logs');
  await fs.ensureDir(logsDir);

  const steps = [];
  // npm audit is often noisy; still useful as signal
  steps.push(run('npm-audit', 'npm', ['audit', '--audit-level=high', '--production', '--json']));

  // Basic static check using existing security scanner if available
  try {
    steps.push(run('security-scanner', 'node', ['automation/security-scanner.js']));
  } catch (e) {
    steps.push({ name: 'security-scanner', error: String(e) });
  }

  const summary = {
    highs: 0,
    criticals: 0,
  };
  try {
    const audit = JSON.parse(steps[0].stdout || '{}');
    summary.highs = audit?.metadata?.vulnerabilities?.high || 0;
    summary.criticals = audit?.metadata?.vulnerabilities?.critical || 0;
  } catch {}

  const status = {
    ranAt: new Date().toISOString(),
    summary,
    steps: steps.map(s => ({ name: s.name, code: s.code })),
  };
  await fs.writeJson(path.join(logsDir, 'security-autopilot-status.json'), status, { spaces: 2 });
  console.log('Security Autopilot completed');
}

main().catch(err => { console.error(err); process.exit(1); });