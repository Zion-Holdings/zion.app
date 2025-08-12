#!/usr/bin/env node
const { execSync } = require('child_process');

console.log('📦 Installing build dependencies for Netlify...');

// List of essential build dependencies
const buildDeps = [
  'typescript',
  '@types/node',
  '@types/react',
  '@types/react-dom',
  '@swc/core',
  '@swc/helpers'
];

try {
  console.log('Installing:', buildDeps.join(', '));
  execSync(`npm install ${buildDeps.join(' ')} --save-dev --legacy-peer-deps`, {
    stdio: 'inherit'
  });
  console.log('✅ Build dependencies installed successfully');
} catch (error) {
  console.error('❌ Failed to install build dependencies:', error.message);
  process.exit(1);
} 