#!/usr/bin/env node

const { spawnSync } = require('child_process');
const path = require('path');

function runNodeScript(rel, args = [], env = {}) {
  const abs = path.join(process.cwd(), rel);
  const res = spawnSync('node', [abs, ...args], { stdio: 'inherit', env: { ...process.env, ...env } });
  return res.status || 0;
}

function main() {
  const base = process.env.SITE_BASE_URL || process.env.SITEMAP_BASE_URL || process.env.DEPLOY_PRIME_URL || process.env.URL || 'https://zion.app';
  const max = process.env.LINK_CRAWL_MAX || '400';
  console.log(`[link-orchestrator] base=${base} max=${max}`);

  const crawlStatus = runNodeScript('automation/site-link-crawler.cjs', [base], { LINK_CRAWL_MAX: String(max) });
  if (crawlStatus !== 0) process.exit(crawlStatus);

  const fixArgs = process.argv.includes('--apply') ? ['--write'] : [];
  const fixStatus = runNodeScript('automation/site-link-fixer.cjs', fixArgs);
  if (fixStatus !== 0) process.exit(fixStatus);

  console.log('[link-orchestrator] done');
}

if (require.main === module) main();