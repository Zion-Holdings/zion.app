#!/usr/bin/env node

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'data', 'reports', 'frontend-sync');
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

function git(cmd, args) {
  return spawnSync(cmd, args, { encoding: 'utf8' });
}

function getChangedFiles() {
  // Try to diff against upstream; fallback to last commit
  let res = git('git', ['diff', '--name-only', 'origin/main...HEAD']);
  if (res.status !== 0 || !res.stdout.trim()) {
    res = git('git', ['diff', '--name-only', 'HEAD~1..HEAD']);
  }
  const files = (res.stdout || '').split('\n').filter(Boolean);
  return files;
}

function classify(files) {
  const actions = new Set();
  for (const f of files) {
    if (f.startsWith('data/page-metadata') || f.startsWith('data/')) actions.add('sync_content_metadata');
    if (f.startsWith('pages/') || f.startsWith('components/')) actions.add('sync_pages_components');
    if (f.startsWith('styles/') || f.endsWith('.css') || f.endsWith('.scss')) actions.add('sync_styles');
    if (f.startsWith('public/')) actions.add('sync_public_assets');
    if (f === 'scripts/generate-sitemap.mjs' || f.includes('sitemap')) actions.add('rebuild_sitemap');
  }
  if (files.length === 0) actions.add('periodic_health_check');
  return Array.from(actions);
}

function main() {
  const files = getChangedFiles();
  const actions = classify(files);
  const report = {
    timestamp: new Date().toISOString(),
    changedFiles: files,
    actions
  };
  const out = path.join(OUTPUT_DIR, 'frontend-sync-actions.json');
  fs.writeFileSync(out, JSON.stringify(report, null, 2));
  console.log(`Frontend sync analysis completed: ${actions.length} action(s)`);
}

main();


