#!/usr/bin/env node

const { spawnSync } = require('child_process');
const path = require('path');

function run(cmd, args = []) {
  const res = spawnSync(cmd, args, { cwd: path.join(__dirname, '..'), stdio: 'pipe' });
  return { code: res.status, out: (res.stdout || '').toString(), err: (res.stderr || '').toString() };
}

const checks = [
  { name: 'Cursor rules generator', cmd: process.execPath, args: ['automation/cursor-rules-generator.cjs'] },
  { name: 'Git sync', cmd: 'npm', args: ['run', 'automation:git-sync', '--silent'] },
  { name: 'Automation error scan', cmd: process.execPath, args: ['automation/automation-error-scanner.cjs'] },
];

let failed = 0;
for (const check of checks) {
  const r = run(check.cmd, check.args);
  if (r.code === 0) {
    console.log(`OK - ${check.name}`);
  } else {
    failed++;
    console.log(`FAIL - ${check.name}`);
    if (r.err) console.log(r.err.trim());
  }
}

process.exit(failed === 0 ? 0 : 1);