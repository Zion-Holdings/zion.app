#!/usr/bin/env node

'use strict';

const { spawnSync } = require('child_process');

function run(cmd, args = []) {
  const res = spawnSync(cmd, args, { stdio: 'inherit', env: process.env });
  if (res.error) {
    console.warn('Failed:', cmd, args.join(' '), res.error.message);
  }
  return res.status === 0;
}

function main() {
  // Generate/update registries
  run('node', ['automation/docs-pages-indexer.cjs']);

  // Enhance front page advertising and catalog
  run('node', ['automation/front-index-advertiser.cjs']);
  run('node', ['automation/front-index-directory-builder.cjs']);

  // Apply futuristic layout improvements if present
  try { run('node', ['automation/front-futurizer.cjs']); } catch {}

  // Push quickly using existing git sync util
  run('node', ['automation/git-sync.cjs']);
}

main();