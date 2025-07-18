#!/usr/bin/env node

/**
 * Zion App - Automation Startup Script
 * 
 * Starts all automation services with proper configuration
 */

const { spawn } = require('child_process');
const fs = require('fs');

// Set required environment variables
process.env.AUTO_IMPROVE_ENABLED = 'true';
process.env.CONTINUOUS_MONITORING = 'true';
process.env.AUTO_APPLY_IMPROVEMENTS = 'true';
process.env.AUTO_COMMIT_CHANGES = 'true';
process.env.AUTO_PUSH_CHANGES = 'true';
process.env.AUTO_DEPLOY_IMPROVEMENTS = 'true';
process.env.MASTER_NODE = 'true';
process.env.IS_MASTER = 'true';
process.env.NODE_ID = 'zion-master-node';

console.log('🚀 Starting Zion App Automation System...');
console.log('📋 Configuration:');
console.log('  - Auto improvements: ENABLED');
console.log('  - Continuous monitoring: ENABLED');
console.log('  - Auto apply improvements: ENABLED');
console.log('  - Auto commit changes: ENABLED');
console.log('  - Auto push changes: ENABLED');
console.log('  - Auto deploy improvements: ENABLED');
console.log('  - Master node: ENABLED');

// Start AI continuous improvement system
console.log('\n🤖 Starting AI Continuous Improvement System...');
const aiSystem = spawn('node', ['scripts/ai-continuous-improvement.cjs'], {
  stdio: 'inherit',
  env: process.env
});

aiSystem.on('error', (error) => {
  console.error('❌ AI system error:', error);
});

aiSystem.on('exit', (code) => {
  console.log(`AI system exited with code ${code}`);
});

// Start automated improvement pipeline
console.log('\n🔄 Starting Automated Improvement Pipeline...');
const pipeline = spawn('node', ['scripts/automated-improvement-pipeline.cjs'], {
  stdio: 'inherit',
  env: process.env
});

pipeline.on('error', (error) => {
  console.error('❌ Pipeline error:', error);
});

pipeline.on('exit', (code) => {
  console.log(`Pipeline exited with code ${code}`);
});

// Start Cursor AI delegator
console.log('\n🎯 Starting Cursor AI Delegator...');
const delegator = spawn('node', ['scripts/cursor-ai-delegator.cjs'], {
  stdio: 'inherit',
  env: process.env
});

delegator.on('error', (error) => {
  console.error('❌ Delegator error:', error);
});

delegator.on('exit', (code) => {
  console.log(`Delegator exited with code ${code}`);
});

// Handle process signals
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down automation system...');
  aiSystem.kill('SIGTERM');
  pipeline.kill('SIGTERM');
  delegator.kill('SIGTERM');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down automation system...');
  aiSystem.kill('SIGTERM');
  pipeline.kill('SIGTERM');
  delegator.kill('SIGTERM');
  process.exit(0);
});

console.log('\n✅ All automation services started successfully!');
console.log('📊 Monitor with: npm run automation:monitor');
console.log('📝 View logs with: npm run automation:daemon-logs');
console.log('🛑 Stop with: npm run automation:stop'); 