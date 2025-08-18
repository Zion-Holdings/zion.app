#!/usr/bin/env node
'use strict';

const path = require('path');
const { execSync } = require('child_process');

function sh(cmd) {
  try {
    execSync(cmd, { stdio: 'inherit', env: process.env });
  } catch (e) {
    console.error('[start-all] failed:', cmd, e?.message || e);
  }
}

function loadEcosystem(ecosystemPath) {
  const fullPath = path.resolve(process.cwd(), ecosystemPath);
  // Use require to get JS config exporting { apps: [...] }
  // eslint-disable-next-line import/no-dynamic-require, global-require
  const cfg = require(fullPath);
  if (!cfg || !Array.isArray(cfg.apps)) {
    throw new Error(`Invalid ecosystem file: ${ecosystemPath}`);
  }
  return cfg.apps;
}

function main() {
  const files = process.argv.slice(2);
  if (files.length === 0) {
    console.error('Usage: node scripts/pm2-start-all-from-ecosystem.cjs <ecosystem1.cjs> [ecosystem2.cjs ...]');
    process.exit(1);
  }

  for (const file of files) {
    const apps = loadEcosystem(file);
    console.log(`[start-all] Starting apps from ${file} → ${apps.length} entries`);
    for (const app of apps) {
      const name = app.name || path.basename(app.script, path.extname(app.script));
      const script = app.script;
      const cron = app.cron_restart ? ` --cron-restart "${app.cron_restart}"` : '';
      const cwd = app.cwd ? ` --cwd "${app.cwd}"` : '';
      const time = ' --time';
      const opts = ' --restart-delay 5000 --max-restarts 50 --exp-backoff-restart-delay 1000 --autorestart';
      const cmd = `pm2 start "${script}" --name "${name}"${cron}${cwd}${time}${opts}`;
      sh(cmd);
    }
  }

  // Persist list for resurrect
  sh('pm2 save');
  console.log('[start-all] Completed starting all apps.');
}

main();


