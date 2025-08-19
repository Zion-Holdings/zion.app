#!/usr/bin/env node

'use strict';

/*
  Cloud Orchestrator Plus
  - Runs extended factories to diversify content: deep research, playbook, blueprint
*/

const { spawnSync } = require('child_process');

function run(args) {
  const res = spawnSync(process.execPath, args, { stdio: 'inherit' });
  if (res.status !== 0) throw new Error(`node ${args.join(' ')} failed`);
}

function main() {
  run(['automation/cloud-site-crawler.cjs']);
  run(['automation/cloud-deep-research-factory.cjs']);
  run(['automation/cloud-playbook-factory.cjs']);
  run(['automation/cloud-blueprint-factory.cjs']);
  run(['automation/cloud-content-advertiser.cjs']);
  try { run(['automation/advanced-git-sync.cjs']); } catch { try { run(['automation/git-sync.cjs']); } catch {} }
}

if (require.main === module) main();

module.exports = { main };


