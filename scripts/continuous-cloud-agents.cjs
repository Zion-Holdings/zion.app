#!/usr/bin/env node

const { spawn } = require('child_process');

function runOnce() {
  return new Promise((resolve) => {
    const child = spawn(process.execPath, ['automation/cloud-autonomous-agents-factory.cjs'], { stdio: 'inherit' });
    child.on('exit', () => resolve());
  });
}

async function main() {
  const intervalMs = 60 * 1000 * 5; // 5 minutes
  while (true) {
    await runOnce();
    await new Promise((r) => setTimeout(r, intervalMs));
  }
}

if (require.main === module) {
  main();
}


