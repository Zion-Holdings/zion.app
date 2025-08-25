#!/usr/bin/env node
"use strict";

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting Zion Automation Systems...\n');

// Start the enhanced autonomous system manager
console.log('Starting Enhanced Autonomous System Manager...');
const autonomousManager = spawn('node', ['launch-enhanced-autonomous-system.js'], {
  cwd: __dirname,
  stdio: 'inherit'
});

autonomousManager.on('error', (error) => {
  console.error('❌ Failed to start Autonomous System Manager:', error.message);
});

autonomousManager.on('exit', (code) => {
  if (code !== 0) {
    console.error(`❌ Autonomous System Manager exited with code ${code}`);
  }
});

// Start individual services directly as backup
setTimeout(() => {
  console.log('\nStarting individual automation services...');
  
  // Start ML Link Intelligence
  const mlLinkIntelligence = spawn('node', ['ml-link-intelligence.cjs'], {
    cwd: __dirname,
    stdio: 'inherit'
  });
  
  // Start Link Health Scheduler
  const linkHealthScheduler = spawn('node', ['link-health-scheduler.cjs'], {
    cwd: __dirname,
    stdio: 'inherit'
  });
  
  // Start Real-Time Performance Monitor
  const performanceMonitor = spawn('node', ['real-time-performance-monitor.cjs'], {
    cwd: __dirname,
    stdio: 'inherit'
  });
  
  // Start Autonomous System Manager
  const systemManager = spawn('node', ['autonomous-system-manager.cjs'], {
    cwd: __dirname,
    stdio: 'inherit'
  });
  
  console.log('✅ All automation services started!');
  console.log('\n📊 Monitor logs in the automation/logs/ directory');
  console.log('🔄 Use Ctrl+C to stop all services');
  
}, 2000);

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down automation systems...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down automation systems...');
  process.exit(0);
});
