#!/usr/bin/env node

'use strict';

// Orchestrator to run the innovation factory and advertising in sequence.

const { execSync } = require('child_process');

function run(cmd) {
  try {
    execSync(cmd, { stdio: 'inherit' });
  } catch (e) {
    console.warn('Command failed:', cmd, e.message);
  }
}

(function main() {
  run('node automation/cloud-ai-innovation-factory.cjs');
  run('node automation/docs-pages-indexer.cjs');
  run('node automation/front-index-directory-builder.cjs');
  run('node automation/cloud-ai-innovation-advertiser.cjs');
})();


