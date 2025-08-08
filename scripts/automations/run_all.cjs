#!/usr/bin/env node
const { execSync } = require('node:child_process');

function run(cmd, opts = {}) {
  console.log(`\n▶ ${cmd}`);
  execSync(cmd, { stdio: 'inherit', ...opts });
}

try {
  run('node scripts/automations/generate_sitemap.cjs');
  run('node scripts/automations/check_links.cjs');
  run('node scripts/automations/ai_trends.cjs');
  console.log('\n✅ All automations completed.');
} catch (err) {
  console.error('❌ Automation run failed:', err?.message || err);
  process.exitCode = 1;
}