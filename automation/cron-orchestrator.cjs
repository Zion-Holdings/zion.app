#!/usr/bin/env node
'use strict';

// Lightweight cron orchestrator to continuously run key jobs on intervals.
// Designed for local dev with PM2 keeping it alive + resurrect.

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const LOGS_DIR = path.join(ROOT, 'automation', 'logs');
const STATUS_FILE = path.join(LOGS_DIR, 'schedulers-status.json');

function ensureDir(dir) {
  try { fs.mkdirSync(dir, { recursive: true }); } catch {}
}

function loadStatus() {
  try { return JSON.parse(fs.readFileSync(STATUS_FILE, 'utf8')); } catch { return {}; }
}

function saveStatus(status) {
  try { ensureDir(LOGS_DIR); fs.writeFileSync(STATUS_FILE, JSON.stringify(status, null, 2)); } catch {}
}

function nowIso() { return new Date().toISOString(); }

function runTask(name, cmd, opts = {}) {
  const status = loadStatus();
  const startedAt = nowIso();
  const startedTs = Date.now();
  const timeoutMs = Number.isFinite(opts.timeoutMs) ? opts.timeoutMs : 2 * 60 * 1000; // 2 minutes default
  let success = false;
  let exitCode = 0;
  let signal = null;
  let timedOut = false;
  try {
    console.log(`[cron-orchestrator] $ (${name}) ${cmd}`);
    execSync(cmd, { stdio: 'inherit', cwd: ROOT, timeout: timeoutMs });
    success = true;
  } catch (e) {
    exitCode = typeof e.status === 'number' ? e.status : 1;
    signal = e.signal || null;
    timedOut = !!e.killed && e.signal === 'SIGTERM';
    console.error(`[cron-orchestrator] task failed: ${name}`, e?.message || e);
  } finally {
    const endedAt = nowIso();
    const durationMs = Date.now() - startedTs;
    const prev = status[name] || {};
    const prevSch = prev.scheduler || {};
    const consecutiveFailures = success ? 0 : ((prevSch.consecutiveFailures || 0) + 1);
    status[name] = {
      lastRun: { startedAt, endedAt, durationMs, exitCode, signal, timedOut, success },
      scheduler: {
        currentIntervalMs: opts.ms || prevSch.currentIntervalMs || null,
        baseIntervalMs: opts.baseMs || prevSch.baseIntervalMs || (opts.ms || null),
        maxIntervalMs: opts.maxMs || prevSch.maxIntervalMs || null,
        consecutiveFailures,
        processRssBytes: (process.memoryUsage?.().rss) || null
      },
      nextRunAt: opts.nextRunAt || null,
      nextIntervalMs: opts.nextIntervalMs || null,
      reasonForNext: opts.reasonForNext || null
    };
    saveStatus(status);
  }
}

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  if (!process.env.CANONICAL_URL) process.env.CANONICAL_URL = 'https://ziontechgroup.com';
  console.log('[cron-orchestrator] starting');

  // Immediate warm-up run of essentials (fast, best-effort)
  try {
    runTask('warmup:link-crawl', 'node automation/site-link-crawler.cjs', { timeoutMs: 60 * 1000 });
    runTask('warmup:link-fix', 'node automation/site-link-fixer.cjs', { timeoutMs: 60 * 1000 });
    runTask('warmup:homepage-updater', 'node automation/homepage-updater.cjs', { timeoutMs: 60 * 1000 });
    runTask('warmup:front-index-directory', 'node automation/front-index-directory-builder.cjs', { timeoutMs: 60 * 1000 });
    runTask('warmup:front-index-ads', 'node automation/front-index-auto-advertiser.cjs', { timeoutMs: 60 * 1000 });
    runTask('warmup:homepage-ads', 'node automation/homepage-auto-advertiser.cjs', { timeoutMs: 60 * 1000 });
    runTask('warmup:sitemap', 'node automation/sitemap-runner.cjs', { timeoutMs: 60 * 1000 });
    runTask('warmup:footer', 'node automation/footer-injector.cjs', { timeoutMs: 60 * 1000 });
  } catch {}

  // Define scheduled tasks
  const intervals = [
    // Content creation and completion
    { name: 'content-creator', ms: 2 * 60 * 1000, cmd: 'node automation/content-creator.cjs' },
    { name: 'content-completer', ms: 3 * 60 * 1000, cmd: 'node automation/content-completer.cjs' },

    // Front promos and continuous enhancement
    { name: 'continuous-front', ms: 5 * 60 * 1000, cmd: 'node automation/continuous-front-runner.cjs' },
    { name: 'front-and-home-ads', ms: 10 * 60 * 1000, cmd: 'node -e "(async()=>{require(\"child_process\").execSync(\"node automation/front-index-auto-advertiser.cjs\",{stdio:\"inherit\"});require(\"child_process\").execSync(\"node automation/homepage-auto-advertiser.cjs\",{stdio:\"inherit\"});require(\"child_process\").execSync(\"node automation/front-index-directory-builder.cjs\",{stdio:\"inherit\"});})();"' },

    // Newsroom refresh
    { name: 'newsroom-generator', ms: 60 * 60 * 1000, cmd: 'node automation/newsroom-generator.cjs' },

    // Git autosync
    { name: 'git-advanced-sync', ms: 15 * 60 * 1000, cmd: 'node automation/advanced-git-sync.cjs' },

    // Link health
    { name: 'links-crawl', ms: 6 * 60 * 60 * 1000, cmd: 'node automation/site-link-crawler.cjs' },
    { name: 'links-fix', ms: 6 * 60 * 60 * 1000, cmd: 'node automation/site-link-fixer.cjs' },

    // Sitemap and footer refresh
    { name: 'sitemap', ms: 24 * 60 * 60 * 1000, cmd: 'node automation/sitemap-runner.cjs' },
    { name: 'footer-injector', ms: 30 * 60 * 1000, cmd: 'node automation/footer-injector.cjs' }
  ];

  const lastRun = intervals.map(() => 0);

  for (;;) {
    const now = Date.now();
    const status = loadStatus();
    for (let i = 0; i < intervals.length; i++) {
      const { name, ms, cmd } = intervals[i];
      const elapsed = now - lastRun[i];
      const nextIn = Math.max(ms - elapsed, 0);
      status[name] = status[name] || {};
      status[name].nextRunAt = new Date(now + nextIn).toISOString();
      status[name].nextIntervalMs = nextIn;
      status[name].reasonForNext = 'interval';
      status[name].scheduler = Object.assign({}, status[name].scheduler, {
        currentIntervalMs: ms,
        baseIntervalMs: ms,
        maxIntervalMs: ms,
        processRssBytes: (process.memoryUsage?.().rss) || null
      });
      saveStatus(status);

      if (elapsed >= ms) {
        lastRun[i] = now;
        try {
          runTask(name, cmd, { ms, baseMs: ms, maxMs: ms, nextRunAt: new Date(now + ms).toISOString(), nextIntervalMs: ms, reasonForNext: 'interval', timeoutMs: Math.min(ms - 1000, 2 * 60 * 1000) });
        } catch (e) {
          console.error('[cron-orchestrator] error:', e?.message || e);
        }
      }
    }
    await sleep(5 * 1000);
  }
}

main().catch(e => { console.error('[cron-orchestrator] fatal:', e); process.exit(1); });


