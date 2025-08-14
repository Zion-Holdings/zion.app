#!/usr/bin/env node

'use strict';

/*
  Cloud Deep Research Orchestrator
  - Runs: crawl → deep-research factory → cloud-content-advertiser → git sync
  - Designed for frequent execution in GitHub Actions and Netlify functions
*/

const { spawnSync } = require('child_process');

function run(nodeArgs) {
  const res = spawnSync(process.execPath, nodeArgs, { stdio: 'inherit' });
  if (res.status !== 0) throw new Error(`node ${nodeArgs.join(' ')} failed with code ${res.status}`);
}

function main() {
  run(['automation/cloud-site-crawler.cjs']);
  run(['automation/cloud-deep-research-factory.cjs']);
  run(['automation/cloud-content-advertiser.cjs']);
  // best-effort advanced sync if available, else fallback
  try { run(['automation/advanced-git-sync.cjs']); }
  catch {
    try { run(['automation/git-sync.cjs']); } catch {}
  }
}

if (require.main === module) {
  main();
}

module.exports = { main };

