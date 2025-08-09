#!/usr/bin/env node
/*
  Cloud Autonomous Runner
  Runs multiple maintenance/AI automations fully unattended.
*/
const path = require('path');
const { spawnSync } = require('child_process');

function run(scriptPath, args = []) {
  const abs = path.resolve(scriptPath);
  console.log(`\n[cloud] Running: ${abs} ${args.join(' ')}`);
  const res = spawnSync('node', [abs, ...args], { stdio: 'inherit', env: process.env });
  if (res.status !== 0) {
    console.warn(`[cloud] Script failed (ignored): ${scriptPath}`);
  } else {
    console.log(`[cloud] Done: ${scriptPath}`);
  }
}

run('automation/cloud/seo-auto-enhancer.cjs');
run('automation/cloud/broken-link-fix.cjs');
run('automation/cloud/market-rate-aggregator.cjs');
run('automation/cloud/analytics-snapshot.cjs');
run('automation/cloud/ping-sitemaps.cjs');

console.log('\n[cloud] All autonomous tasks attempted.');