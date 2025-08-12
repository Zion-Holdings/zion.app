#!/usr/bin/env node
'use strict';

// Continuously update front/home promos to advertise new content as fast as possible.
// Uses existing local-safe automations, loops with a short delay, and lets pm2 keep it alive.

const { execSync } = require('child_process');

function run(cmd) {
  try {
    console.log(`[fast-ads] $ ${cmd}`);
    execSync(cmd, { stdio: 'inherit' });
  } catch (e) {
    console.error('[fast-ads] step failed:', cmd, e?.message || e);
  }
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function loop() {
  const intervalMs = Number(process.env.FAST_ADS_INTERVAL_MS || 60_000); // default 60s
  console.log(`[fast-ads] starting loop, interval ${intervalMs}ms`);
  // warmup immediate run
  run('node automation/front-index-auto-advertiser.cjs');
  run('node automation/homepage-auto-advertiser.cjs');
  run('node automation/front-index-directory-builder.cjs');
  // optional: fix broken links before promoting
  // run('node automation/site-link-crawler.cjs');
  // run('node automation/site-link-fixer.cjs');
  // rely on pm2 git autosync loop or trigger a lightweight sync
  run('node automation/advanced-git-sync.cjs');

  for (;;) {
    await sleep(intervalMs);
    run('node automation/front-index-auto-advertiser.cjs');
    run('node automation/homepage-auto-advertiser.cjs');
    run('node automation/front-index-directory-builder.cjs');
    run('node automation/advanced-git-sync.cjs');
  }
}

loop().catch((e) => { console.error('[fast-ads] loop error:', e); process.exit(1); });


