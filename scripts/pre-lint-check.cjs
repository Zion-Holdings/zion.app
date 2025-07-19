#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const projectRoot = path.resolve(__dirname, '..');
const eslintPath = path.join(projectRoot, 'node_modules', 'eslint');

if (!fs.existsSync(eslintPath)) {
  console.error('❌ Missing lint dependencies: eslint');
  console.error('Please run "./setup.sh npm" to install development packages.');
  process.exit(0);
}

const args = process.argv.slice(2);
const result = spawnSync('npx', ['eslint', ...(args.length ? args : ['.'])], {
  stdio: 'inherit',
});
process.exit(result.status);
