#!/usr/bin/env node
/* eslint-disable no-console */
const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs-extra');

function runStep(name, command, args = [], options = {}) {
  const startedAt = new Date().toISOString();
  const result = spawnSync(command, args, { encoding: 'utf-8', shell: false, stdio: 'pipe', ...options });
  const finishedAt = new Date().toISOString();
  return {
    name,
    command: [command, ...args].join(' '),
    status: result.status === 0 ? 'ok' : 'error',
    exitCode: result.status,
    startedAt,
    finishedAt,
    stdout: result.stdout || '',
    stderr: result.stderr || '',
  };
}

async function main() {
  const repoRoot = process.cwd();
  const logsDir = path.join(repoRoot, 'automation_logs');
  await fs.ensureDir(logsDir);

  const steps = [];

  // 1) Sync health check and fixes
  steps.push(runStep('sync-health-check', 'node', ['automation/sync-health-check.cjs', '--fix']));

  // 2) Site link crawl and fix
  steps.push(runStep('site-link-crawler', 'node', ['automation/site-link-crawler.cjs']));
  steps.push(runStep('site-link-fixer', 'node', ['automation/site-link-fixer.cjs']));

  // 3) SEO optimization (content/meta tweaks)
  try {
    steps.push(runStep('seo-optimizer', 'node', ['automation/seo-optimizer.js']));
  } catch (e) {
    steps.push({ name: 'seo-optimizer', status: 'skipped', error: String(e) });
  }

  // 4) Generate sitemap
  steps.push(runStep('sitemap', 'node', ['scripts/generate-sitemap.mjs']));

  // 5) Responsive content
  try {
    steps.push(runStep('responsive-content', 'node', ['automation/responsive-content-orchestrator.cjs']));
  } catch (e) {
    steps.push({ name: 'responsive-content', status: 'skipped', error: String(e) });
  }

  // 6) UI evolution (lightweight)
  try {
    steps.push(runStep('ui-evolution', 'node', ['automation/ui-evolution-launcher.js', 'once']));
  } catch (e) {
    steps.push({ name: 'ui-evolution', status: 'skipped', error: String(e) });
  }

  const status = {
    runId: Date.now(),
    ranAt: new Date().toISOString(),
    steps,
    summary: {
      ok: steps.filter(s => s.status === 'ok').length,
      error: steps.filter(s => s.status === 'error').length,
      skipped: steps.filter(s => s.status === 'skipped').length,
    },
  };

  const statusPath = path.join(logsDir, 'cloud-autopilot-status.json');
  await fs.writeJson(statusPath, status, { spaces: 2 });
  console.log(`Wrote status to ${statusPath}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});