#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function run(cmd, opts = {}) {
  console.log('> ' + cmd);
  return execSync(cmd, { stdio: 'pipe', encoding: 'utf8', ...opts });
}

function tryRun(cmd) {
  try { return run(cmd); } catch (e) { return e; }
}

function main() {
  const logDir = path.join(__dirname, 'logs');
  try { fs.mkdirSync(logDir, { recursive: true }); } catch {}
  const reportPath = path.join(logDir, 'deps-auto-upgrade.json');

  const result = { startedAt: new Date().toISOString(), steps: [] };

  // Update deps to latest minor/patch
  const updateRes = tryRun('npx npm-check-updates -u --target minor');
  result.steps.push({ step: 'ncu-update', ok: !(updateRes instanceof Error), output: String(updateRes?.stdout || updateRes) });

  // Install updated deps
  const installRes = tryRun('npm install --no-audit');
  result.steps.push({ step: 'npm-install', ok: !(installRes instanceof Error), output: String(installRes?.stdout || installRes) });

  // Run audit fix (non-force)
  const auditFixRes = tryRun('npm audit fix');
  result.steps.push({ step: 'npm-audit-fix', ok: !(auditFixRes instanceof Error) });

  // Build check
  let buildOk = false;
  const buildRes = tryRun('npm run build');
  buildOk = !(buildRes instanceof Error);
  result.steps.push({ step: 'build', ok: buildOk, output: String(buildRes?.stdout || buildRes) });
  result.finishedAt = new Date().toISOString();

  // If build failed, revert package files to last commit state
  if (!buildOk) {
    try {
      run('git checkout -- package.json package-lock.json');
      result.rollback = 'Reverted package files after failed build.';
    } catch (e) {
      result.rollback = 'Failed to revert package files: ' + e.message;
    }
  }

  fs.writeFileSync(reportPath, JSON.stringify(result, null, 2));
  console.log('Dependency auto-upgrade report written to', reportPath);
  process.exit(buildOk ? 0 : 1);
}

main();