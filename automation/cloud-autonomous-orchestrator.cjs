#!/usr/bin/env node
const { spawnSync } = require('child_process');

function run(cmd, args, opts = {}) {
  console.log(`$ ${cmd} ${args.join(' ')}`);
  const res = spawnSync(cmd, args, { stdio: 'inherit', ...opts });
  if (res.status !== 0) {
    console.warn(`Command failed: ${cmd} ${args.join(' ')}`);
  }
}

function main() {
  // Build navigation data
  run('node', ['automation/navigation-builder.cjs']);

  // Generate schema.org JSON-LD
  run('node', ['automation/schema-markup-generator.cjs']);

  // Enhance SEO metadata
  run('node', ['automation/seo-metadata-orchestrator.cjs']);

  // Crawl and fix links
  run('node', ['automation/site-link-crawler.cjs']);
  run('node', ['automation/site-link-fixer.cjs']);

  // SEO optimizer pass
  try { run('node', ['automation/seo-optimizer.cjs']); } catch (_) {}

  // Generate sitemap if script exists
  run('node', ['scripts/generate-sitemap.mjs']);

  // Sync-health checks and fixes
  run('node', ['automation/sync-health-check.cjs', '--fix']);

  // Update changelog
  run('node', ['automation/changelog-generator.cjs']);

  console.log('Automation run complete.');
}

if (require.main === module) {
  main();
}