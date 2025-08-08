#!/usr/bin/env node
const { execSync } = require('child_process');
try {
  execSync('npm audit fix', { stdio: 'inherit' });
  console.log('npm audit fix completed');
} catch (e) {
  console.error('npm audit fix failed:', e.message);
  process.exit(1);
}

