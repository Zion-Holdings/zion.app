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
  console.error('Please run "./setup.sh npm" to install required packages.');
  process.exit(1);
} else {
  console.log('\u2705 All required dependencies found.');
}
