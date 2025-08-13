#!/usr/bin/env node

'use strict';

// Helper script: run cloud innovation orchestrator in a tight loop
const { spawn } = require('child_process');

function runOnce() {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, ['automation/cloud-innovation-orchestrator.cjs'], { stdio: 'inherit' });
    child.on('exit', () => resolve());
  });
}

async function main() {
  const intervalMs = 1000 * 60 * 5; // 5 minutes
  while (true) {
    await runOnce();
    await new Promise((r) => setTimeout(r, intervalMs));
  }
}

if (require.main === module) { main(); }


