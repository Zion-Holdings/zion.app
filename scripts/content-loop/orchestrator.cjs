#!/usr/bin/env node
// orchestrator.cjs
// Safe docs-first SEO content loop for GitHub Pages.
// Steps: sitemap-first -> topic-hub-builder -> internal-link-enricher -> link-repair -> docs-repair-and-enrich -> verification-gate
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const REPO = process.cwd();
const LOG_PATH = path.join(REPO, '.content-loop.log');

function log(line) {
  const ts = new Date().toISOString();
  const msg = `${ts} ${line}`;
  console.log(msg);
  fs.appendFileSync(LOG_PATH, msg + '\n');
}

function runStep(name, file, env = {}) {
  return new Promise((resolve, reject) => {
    log(`[INFO] Starting ${name}`);
    const child = spawn(process.execPath, [file], { cwd: REPO, env: { ...process.env, ...env } });
    let out = '';
    child.stdout.on('data', (d) => { out += d.toString(); });
    child.stderr.on('data', (d) => { out += d.toString(); });
    child.on('close', (code) => {
      if (code === 0) {
        log(`[INFO] ${name} succeeded`);
        resolve(out);
      } else {
        log(`[ERROR] ${name} failed: ${out.slice(-500)}`);
        reject(new Error(`${name} failed`));
      }
    });
  });
}

async function main() {
  log('[INFO] ============================================================');
  log('[INFO] 🚀 UNINTERRUPTED CONTENT CREATION LOOP v1.0');
  log('[INFO] ============================================================');
  try {
    await runStep('sitemap-first', 'scripts/content-loop/sitemap-first.cjs');
    await runStep('batch-generator', 'scripts/content-loop/batch-generator.cjs', { CONTENT_LOOP_BATCH_SIZE: process.env.CONTENT_LOOP_BATCH_SIZE || '100' });
    await runStep('topic-hub-builder', 'scripts/content-loop/topic-hub-builder.cjs');
    await runStep('internal-link-enricher', 'scripts/content-loop/internal-link-enricher.cjs');
    await runStep('link-repair', 'scripts/content-loop/link-repair.cjs');
    await runStep('docs-repair-and-enrich', 'scripts/content-loop/docs-repair-and-enrich.cjs');
    await runStep('verification-gate', 'scripts/content-loop/verification-gate.cjs');
    log('[INFO] ✅ Cycle complete');
  } catch (e) {
    log('[INFO] ❌ Cycle failed: ' + e.message);
    process.exit(1);
  }
}

main();
