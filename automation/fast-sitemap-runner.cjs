#!/usr/bin/env node

const { spawnSync } = require('child_process');
const path = require('path');

function run(cmd, args = [], cwd = process.cwd(), timeoutMs = 120000) {
  const res = spawnSync(cmd, args, { cwd, stdio: 'inherit', timeout: timeoutMs });
  return res.status === 0;
}

function main() {
  const root = path.resolve(__dirname, '..');
  // Prefer package script if present
  const ok = run('npm', ['run', 'sitemap'], root, 180000);
  if (!ok) {
    // fallback
    run('node', ['automation/robots-and-sitemap-verifier.cjs'], root, 60000);
  }
}

if (require.main === module) main();