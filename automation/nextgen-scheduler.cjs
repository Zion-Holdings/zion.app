#!/usr/bin/env node

const path = require('path');
const { execSync } = require('child_process');
const cron = require('node-cron');

function run(cmd) {
  try {
    return { ok: true, out: execSync(cmd, { encoding: 'utf8', stdio: 'pipe', cwd: path.resolve(__dirname, '..') }) };
  } catch (e) {
    return { ok: false, out: (e.stdout || e.stderr || e.message || '').toString() };
  }
}

console.log('[nextgen-scheduler] starting...');

// Every 10 minutes: scan and run once
cron.schedule('*/10 * * * *', () => {
  console.log('[nextgen-scheduler] tick: factory scan');
  run('node automation/nextgen-autonomous-factory.cjs scan');
  console.log('[nextgen-scheduler] tick: orchestrator run');
  run('node automation/nextgen-orchestrator.cjs run');
});

// Also run immediately on start
run('node automation/nextgen-autonomous-factory.cjs scan');
run('node automation/nextgen-orchestrator.cjs run');

console.log('[nextgen-scheduler] scheduled jobs installed (every 10 minutes)');

// Keep process alive
setInterval(() => {}, 1 << 30);