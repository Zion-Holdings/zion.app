#!/usr/bin/env node
/*
  Auto Innovation Orchestrator
  - Runs watchdog, audit analysis, and investor update drafts
  - Designed for CI (no human interaction)
*/
const { spawnSync } = require('child_process');
const path = require('path');

function run(cmd, args) {
  console.log(`$ ${cmd} ${args.join(' ')}`);
  const res = spawnSync(cmd, args, { stdio: 'inherit' });
  if (res.status !== 0) {
    console.error(`Command failed: ${cmd}`);
  }
}

function node(file) {
  run('node', [path.resolve(process.cwd(), file)]);
}

function main() {
  node('automation/ipo-readiness-watchdog.cjs');
  node('automation/audit-log-analyzer.cjs');
  node('automation/investor-update-draft.cjs');
}

main();