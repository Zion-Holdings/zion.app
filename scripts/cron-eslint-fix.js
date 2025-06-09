#!/usr/bin/env node
import { execSync } from 'child_process';

function run(command, options = {}) {
  return execSync(command, { encoding: 'utf8', stdio: 'pipe', ...options });
}

try {
  console.log('Running ESLint with auto-fix...');
  execSync('npx eslint . --fix', { stdio: 'inherit' });

  const statusOutput = run('git status --porcelain');
  const changedFiles = statusOutput
    .split('\n')
    .filter((line) => line.trim() && !line.startsWith('??'))
    .map((line) => line.slice(3));

  if (changedFiles.length > 0) {
    console.log('Files changed by ESLint:');
    changedFiles.forEach((f) => console.log(` - ${f}`));

    execSync('git checkout -B auto/fix-hourly', { stdio: 'inherit' });
    execSync('git add .', { stdio: 'inherit' });
    execSync('git commit -m "chore: auto lint fix"', { stdio: 'inherit' });
  } else {
    console.log('No changes from ESLint fix.');
  }
} catch (err) {
  console.error('Error running ESLint fix:', err.message);
  process.exit(1);
}
