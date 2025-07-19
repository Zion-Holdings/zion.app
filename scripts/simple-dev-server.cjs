#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting simple dev server...');

// Set environment variables to avoid Watchpack issues
process.env.NODE_OPTIONS = '--no-deprecation --max-old-space-size=4096';
process.env.NEXT_TELEMETRY_DISABLED = '1';

// Start the dev server with minimal configuration
const devServer = spawn('npx', ['next', 'dev', '--port', '3001'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    NODE_ENV: 'development',
  },
  cwd: process.cwd(),
});

devServer.on('error', (error) => {
  console.error('❌ Failed to start dev server:', error.message);
  process.exit(1);
});

devServer.on('close', (code) => {
  console.log(`📴 Dev server exited with code ${code}`);
  process.exit(code);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down dev server...');
  devServer.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down dev server...');
  devServer.kill('SIGTERM');
}); 