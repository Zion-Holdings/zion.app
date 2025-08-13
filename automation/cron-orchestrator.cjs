#!/usr/bin/env node
'use strict';

// Lightweight cron orchestrator to continuously run key jobs on intervals.
// Designed for local dev with PM2 keeping it alive + resurrect.

const { execSync } = require('child_process');

function run(cmd) {
  try {
    console.log(`[cron-orchestrator] $ ${cmd}`);
    execSync(cmd, { stdio: 'inherit' });
  } catch (e) {
    console.error('[cron-orchestrator] step failed:', cmd, e?.message || e);
  }
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  console.log('[cron-orchestrator] starting');

  // Immediate warm-up run of essentials
  try {
    run('node automation/site-link-crawler.cjs');
    run('node automation/site-link-fixer.cjs');
    run('node automation/homepage-updater.cjs');
    run('node automation/front-index-directory-builder.cjs');
    run('node automation/front-index-auto-advertiser.cjs');
    run('node automation/homepage-auto-advertiser.cjs');
    run('node automation/sitemap-runner.cjs');
    run('node automation/footer-injector.cjs');
  } catch {}

  const intervals = [
    // Every 5 minutes: front continuous promo update
    { ms: 5 * 60 * 1000, fn: () => run('node automation/continuous-front-runner.cjs') },
    // Every 10 minutes: front/home advertisers and directory refresh
    { ms: 10 * 60 * 1000, fn: () => { run('node automation/front-index-auto-advertiser.cjs'); run('node automation/homepage-auto-advertiser.cjs'); run('node automation/front-index-directory-builder.cjs'); } },
    // Every 15 minutes: git autosync
    { ms: 15 * 60 * 1000, fn: () => run('node automation/advanced-git-sync.cjs') },
    // Every 6 hours: link crawl + fix
    { ms: 6 * 60 * 60 * 1000, fn: () => { run('node automation/site-link-crawler.cjs'); run('node automation/site-link-fixer.cjs'); } },
    // Daily at approx midnight: sitemap (approximation via long interval)
    { ms: 24 * 60 * 60 * 1000, fn: () => run('node automation/sitemap-runner.cjs') }
    ,{ ms: 30 * 60 * 1000, fn: () => run('node automation/footer-injector.cjs') }
  ];

  // Looping scheduler (drift-tolerant simple intervals)
  const lastRun = intervals.map(() => 0);
  for (;;) {
    const now = Date.now();
    for (let i = 0; i < intervals.length; i++) {
      const { ms, fn } = intervals[i];
      if (now - lastRun[i] >= ms) {
        lastRun[i] = now;
        try { fn(); } catch (e) { console.error('[cron-orchestrator] error:', e?.message || e); }
      }
    }
    await sleep(5 * 1000);
  }
}

main().catch(e => { console.error('[cron-orchestrator] fatal:', e); process.exit(1); });


