#!/usr/bin/env node

const fs = require('fs');

const requiredDependencies = [
  'react',
  'react-dom',
  'react-router-dom',
  'lucide-react',
  '@tanstack/react-query'
];

const missing = requiredDependencies.filter(dep => {
  try {
    require.resolve(dep);
    return false;
  } catch {
    return true;
  }
});

if (missing.length > 0) {
  console.error(`\u274c Missing dependencies: ${missing.join(', ')}`);
  console.error('Attempting to start offline development mode...');

  try {
    const { execSync } = require('child_process');
    execSync('bash offline-dev.sh', { stdio: 'inherit' });
    console.warn('\u2705 Offline development environment started.');
  } catch (err) {
    console.error('Failed to launch offline mode:', err.message);
  }

  console.error('Please run "./setup.sh npm" once internet access is available.');
  process.exit(0);
} else {
  console.warn('\u2705 All required dependencies found.');
}
