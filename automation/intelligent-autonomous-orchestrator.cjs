#!/usr/bin/env node

/*
  Intelligent Autonomous Orchestrator
  - Detects repo change patterns and environment
  - Selects relevant automations to run
  - Executes in parallel batches
  - Fails softly and continues to maximize throughput
*/

const { execSync, spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

function log(message) {
  const ts = new Date().toISOString();
  console.log(`[orchestrator ${ts}] ${message}`);
}

function run(command, opts = {}) {
  return new Promise((resolve) => {
    log(`run: ${command}`);
    const child = spawn(command, {
      shell: true,
      stdio: 'inherit',
      ...opts,
    });
    child.on('close', (code) => {
      if (code !== 0) {
        log(`warn: command exited with code ${code}: ${command}`);
      }
      resolve(code);
    });
  });
}

function gitSafe(cmd) {
  try {
    return execSync(cmd, { encoding: 'utf8' }).trim();
  } catch (e) {
    return '';
  }
}

function getBranch() {
  const envRef = process.env.GITHUB_REF || '';
  if (envRef.startsWith('refs/heads/')) return envRef.replace('refs/heads/', '');
  const branch = gitSafe('git rev-parse --abbrev-ref HEAD');
  return branch || 'main';
}

function getChangedFiles() {
  // Try last commit diff; fallback to unstaged
  const range = gitSafe('git rev-parse --short HEAD') ? 'HEAD~1..HEAD' : '';
  const diffCmd = range ? `git diff --name-only ${range}` : 'git diff --name-only';
  const names = gitSafe(diffCmd).split('\n').filter(Boolean);
  if (names.length) return names;
  // As fallback, compare with origin
  const branch = getBranch();
  const names2 = gitSafe(`git fetch origin ${branch} --depth=1 >/dev/null 2>&1 || true; git diff --name-only origin/${branch}..HEAD`).split('\n').filter(Boolean);
  return names2;
}

function pickTasks(changed) {
  const tasks = new Set();
  const add = (cmd) => tasks.add(cmd);

  // Always run quick health and lint maintenance
  add('node automation/sync-health-check.cjs --fix');

  // UI and Responsive
  if (changed.some((f) => f.startsWith('pages/') || f.startsWith('components/') || f.startsWith('styles/'))) {
    add('node automation/ui-evolution-orchestrator.cjs');
    add('node automation/responsive-content-orchestrator.cjs');
  }

  // SEO and links for content changes
  if (changed.some((f) => f.startsWith('pages/') || f.startsWith('blog/') || f.startsWith('docs/') || f.endsWith('.md') || f.endsWith('.mdx'))) {
    add('node automation/seo-optimizer.cjs');
    add('node automation/site-link-orchestrator.cjs');
  }

  // Performance checks
  add('node automation/performance-audit.cjs');

  // Security scans
  add('node automation/security-scanner.cjs');

  // Monetization and venture if services changed
  if (changed.some((f) => f.includes('services') || f.includes('products'))) {
    add('node automation/monetization-orchestrator.cjs');
    add('node automation/venture-orchestrator.cjs');
  }

  // Frontend sync always (keeps structure tidy)
  add('node automation/frontend-sync-orchestrator.cjs');

  // AI content curation (optional, runs only if OPENAI_API_KEY set)
  add('node automation/ai-content-curator.cjs');

  // Linting and syntax sanity
  add('node automation/linting-cron-automation.js');
  add('node automation/syntax-fix-orchestrator.js');

  return Array.from(tasks);
}

async function main() {
  try {
    const changed = getChangedFiles();
    log(`changed files: ${changed.length}`);

    const tasks = pickTasks(changed);
    if (!tasks.length) {
      log('no tasks selected; exiting');
      process.exit(0);
    }

    // Execute in batches for speed: group by rough category
    const batch1 = tasks.filter((t) => t.includes('sync-health') || t.includes('linting') || t.includes('syntax'));
    const batch2 = tasks.filter((t) => t.includes('ui-evolution') || t.includes('responsive'));
    const batch3 = tasks.filter((t) => t.includes('seo-optimizer') || t.includes('site-link'));
    const batch4 = tasks.filter((t) => t.includes('performance'));
    const batch5 = tasks.filter((t) => t.includes('security'));
    const batch6 = tasks.filter((t) => t.includes('monetization') || t.includes('venture'));
    const batch7 = tasks.filter((t) => t.includes('frontend-sync'));
    const batch8 = tasks.filter((t) => t.includes('ai-content-curator'));

    const runBatch = async (label, items) => {
      if (!items.length) return;
      log(`batch ${label}: ${items.length} tasks`);
      await Promise.all(items.map((cmd) => run(cmd)));
    };

    await runBatch('1', batch1);
    await runBatch('2', batch2);
    await runBatch('3', batch3);
    await runBatch('4', batch4);
    await runBatch('5', batch5);
    await runBatch('6', batch6);
    await runBatch('7', batch7);
    await runBatch('8', batch8);

    log('all batches completed');
  } catch (e) {
    log(`fatal error: ${e.message || e}`);
    process.exit(0);
  }
}

main();