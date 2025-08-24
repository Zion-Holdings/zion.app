#!/usr/bin/env node
const { generate } = require('./marketplace-insights.cjs');
const { analyze } = require('./content-health.cjs');
const { spawnSync } = require('child_process');

function run() {
  try { generate(); } catch (e) { console.error('marketplace-insights failed', e); }
  try { analyze(); } catch (e) { console.error('content-health failed', e); }
  try {
    spawnSync('npm', ['run', 'sitemap'], { stdio: 'inherit', shell: true });
  } catch (e) {
    console.error('sitemap generation failed', e);
  }
}

if (require.main === module) run();

module.exports = { run };