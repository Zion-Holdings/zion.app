#!/usr/bin/env node
const { spawnSync } = require('child_process');

function run(relPath, args = []) {
  const cmd = 'node';
  const full = relPath;
  const res = spawnSync(cmd, [full, ...args], { stdio: 'inherit' });
  return res.status || 0;
}

let exitCode = 0;
exitCode |= run('automation/front-index-advertiser.cjs');
exitCode |= run('automation/homepage-updater.cjs');
exitCode |= run('automation/topics-map.cjs');
exitCode |= run('automation/component-props-docs.cjs');
process.exit(exitCode);