#!/usr/bin/env node
/* eslint-disable */
const { execSync } = require('child_process');

function run(cmd) {
  console.log(`[auto-fix] ${cmd}`);
  try {
    execSync(cmd, { stdio: 'inherit' });
  } catch (e) {
    console.log(`[auto-fix] Command failed (continuing): ${cmd}`);
  }
}

function main() {
  // Formatting and linting quick fixes
  run('npx prettier --write .');
  run('npm run lint --if-present');
  run('npm run linting:fix --if-present');
  // Attempt type-check; non-blocking
  run('npm run type-check --if-present');
  console.log('[auto-fix] Done');
}

if (require.main === module) main();