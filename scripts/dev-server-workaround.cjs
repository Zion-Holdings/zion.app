#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting Next.js dev server with workaround...');

// Set environment variables to avoid Watchpack issues
process.env.NODE_OPTIONS = '--no-deprecation --max-old-space-size=4096';
process.env.NEXT_TELEMETRY_DISABLED = '1';
process.env.NEXT_PRIVATE_SKIP_SIZE_WARN = '1';

// Start the Next.js dev server
const child = spawn('npx', ['next', 'dev', '--port', '3001'], {
  stdio: 'inherit',
  env: process.env,
  cwd: process.cwd(),
});

child.on('error', (error) => {
  console.error('❌ Failed to start dev server:', error.message);
  process.exit(1);
});

child.on('exit', (code) => {
  console.log(`📴 Dev server exited with code ${code}`);
  process.exit(code);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down dev server...');
  child.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down dev server...');
  child.kill('SIGTERM');
});
