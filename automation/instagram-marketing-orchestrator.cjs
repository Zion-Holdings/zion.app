#!/usr/bin/env node

const path = require('path');
const { spawnSync } = require('child_process');

function run(relPath, args = []) {
  const abs = path.join(__dirname, 'instagram-agents', relPath);
  return spawnSync('node', [abs, ...args], { stdio: 'inherit' }).status || 0;
}

const mode = process.argv[2] || 'once';

if (mode === 'once') {
  process.exit(run('post-latest.cjs'));
}

console.log('Usage: node automation/instagram-marketing-orchestrator.cjs [once]');
process.exit(1);


