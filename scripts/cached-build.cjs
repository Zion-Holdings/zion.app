#!/usr/bin/env node
// Simple wrapper to run next build with caching enabled

const { spawn } = require('child_process');

// Enable filesystem caching for faster rebuilds
const env = {
  ...process.env,
  WEBPACK_CACHE: 'filesystem',
  NEXT_PRIVATE_BUILD_CACHE: 'true',
};

const build = spawn('npx', ['next', 'build', '--no-lint'], {
  env,
  stdio: 'inherit',
  shell: true,
});

build.on('exit', code => process.exit(code));
