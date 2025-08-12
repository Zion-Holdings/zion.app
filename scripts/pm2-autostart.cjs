#!/usr/bin/env node
'use strict';

const { execSync } = require('child_process');
const fs = require('fs');

function safe(cmd) {
  try {
    console.log(`[pm2:auto] $ ${cmd}`);
    execSync(cmd, { stdio: 'inherit' });
    return true;
  } catch (e) {
    console.error('[pm2:auto] failed:', cmd, e?.message || e);
    return false;
  }
}

function ensureLogsDir() {
  try { fs.mkdirSync('automation/logs', { recursive: true }); } catch {}
}

function main() {
  // Check pm2 availability
  try { execSync('pm2 -v', { stdio: 'ignore' }); }
  catch { console.error('[pm2:auto] pm2 not installed or not on PATH'); return; }

  ensureLogsDir();

  // Try resurrect if a dump exists
  safe('pm2 resurrect || true');

  // Start local ecosystems (idempotent)
  safe('pm2 start ecosystem.config.cjs --update-env');
  safe('pm2 start ecosystem.fast-ads.local.cjs --update-env');
  safe('pm2 start ecosystem.cron.local.cjs --update-env');

  // Setup logrotate sane defaults (idempotent)
  safe('pm2 install pm2-logrotate || true');
  safe("pm2 set pm2-logrotate:max_size 10M");
  safe("pm2 set pm2-logrotate:retain 30");
  safe("pm2 set pm2-logrotate:compress true");
  safe("pm2 set pm2-logrotate:workerInterval 60");
  safe("pm2 set pm2-logrotate:rotateInterval '0 0 * * *'");

  // Persist for resurrection
  safe('pm2 save');

  console.log('[pm2:auto] ensured automations are running and saved');
}

main();


