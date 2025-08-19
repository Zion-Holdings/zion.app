#!/usr/bin/env node

const { spawnSync } = require('child_process');
const path = require('path');

function run(cmd, args) {
  const r = spawnSync(cmd, args, { stdio: 'inherit' });
  if (r.status !== 0) process.exit(r.status || 1);
}

function main() {
  const script = path.join(__dirname, '..', 'scripts', 'generate-sitemap.js');
  run('node', [script]);
  console.log('Sitemap regenerated.');
}

main();