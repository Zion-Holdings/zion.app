#!/usr/bin/env node

const { spawnSync } = require('child_process');
const path = require('path');

function runNode(relPath, args = []) {
  const abs = path.resolve(__dirname, relPath);
  const res = spawnSync('node', [abs, ...args], { stdio: 'inherit' });
  return res.status || 0;
}

function runScript(cmd, args = []) {
  const res = spawnSync(cmd, args, { stdio: 'inherit' });
  return res.status || 0;
}

function main() {
  let status = 0;
  status = runNode('./internal-link-crawler.cjs');
  if (status !== 0) process.exit(status);
  status = runNode('./internal-link-fixer.cjs');
  if (status !== 0) process.exit(status);
  // regenerate sitemap
  status = runNode('../scripts/generate-sitemap.js');
  if (status !== 0) process.exit(status);
  // external link check (non-blocking)
  try { runNode('./external-link-check.cjs'); } catch {}
  // SEO audit (non-blocking)
  try { runNode('../scripts/seo-audit.js'); } catch {}
  console.log('Internal link orchestration complete.');
}

main();