#!/usr/bin/env node

'use strict';

/*
  Cloud Innovation Orchestrator (New)
  - Chains existing cloud agents with new creative inventor
  - Sequence:
      1) cloud-site-crawler.cjs
      2) cloud-content-factory.cjs (existing)
      3) cloud-creative-inventor.cjs (new)
      4) cloud-content-advertiser.cjs (existing)
  - Intended for CI (GitHub Actions) and frequent runs
*/

const { spawnSync } = require('child_process');

function runNode(relPath, args = []) {
  const cmd = process.execPath;
  const finalArgs = [relPath, ...args];
  const res = spawnSync(cmd, finalArgs, { stdio: 'inherit' });
  if (res.status !== 0) {
    throw new Error(`Failed: node ${relPath} ${args.join(' ')}`);
  }
}

function main() {
  runNode('automation/cloud-site-crawler.cjs');
  runNode('automation/cloud-content-factory.cjs');
  runNode('automation/cloud-creative-inventor.cjs');
  runNode('automation/cloud-content-advertiser.cjs');
}

if (require.main === module) {
  main();
}

module.exports = { main };


