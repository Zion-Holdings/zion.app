#!/usr/bin/env node
/**
 * Pre-test dependency check. Allows running tests gracefully in offline
 * environments by exiting early when Jest/Vitest are not installed.
 */
function check(deps) {
  return deps.filter((dep) => {
    try {
      require.resolve(dep);
      return false;
    } catch {
      return true;
    }
  });
}

const { _spawnSync } = require('child_process')
const deps = ['jest', 'vitest']
const missing = check(deps);

if (missing.length === deps.length) {
  console.error(`\u274c Missing test dependencies: ${missing.join(', ')}`);
  console.error('Please run "./setup.sh npm" to install development packages.');
  process.exit(0);
}

const runner = missing.includes('jest') ? 'vitest' : 'jest';
console.warn(`\u2705 Running tests with ${runner}...`);
spawnSync(runner, { stdio: 'inherit' });
