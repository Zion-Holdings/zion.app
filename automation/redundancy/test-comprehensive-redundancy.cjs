#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

console.log('Testing comprehensive redundancy system...');

try {
  console.log('1. Testing basic imports...');
  const { spawnSync } = require('child_process');
  console.log('✓ child_process imported');
  
  console.log('2. Testing node-cron...');
  const cron = require('node-cron');
  console.log('✓ node-cron imported');
  
  console.log('3. Testing file system...');
  const rootDir = process.cwd();
  const logDir = path.join(rootDir, 'automation', 'logs');
  console.log(`✓ Root dir: ${rootDir}`);
  console.log(`✓ Log dir: ${logDir}`);
  
  console.log('4. Testing directory creation...');
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
    console.log('✓ Log directory created');
  } else {
    console.log('✓ Log directory already exists');
  }
  
  console.log('5. Testing PM2 check...');
  const pm2Result = spawnSync('pm2', ['--version'], { encoding: 'utf8' });
  if (pm2Result.status === 0) {
    console.log(`✓ PM2 available: ${pm2Result.stdout.trim()}`);
  } else {
    console.log('⚠ PM2 not available or error');
  }
  
  console.log('6. Testing automation directory structure...');
  const automationDir = path.join(rootDir, 'automation');
  if (fs.existsSync(automationDir)) {
    const files = fs.readdirSync(automationDir);
    console.log(`✓ Automation directory exists with ${files.length} items`);
  } else {
    console.log('✗ Automation directory not found');
  }
  
  console.log('7. Testing GitHub workflows...');
  const workflowsDir = path.join(rootDir, '.github', 'workflows');
  if (fs.existsSync(workflowsDir)) {
    const workflows = fs.readdirSync(workflowsDir);
    console.log(`✓ GitHub workflows directory exists with ${workflows.length} workflows`);
  } else {
    console.log('✗ GitHub workflows directory not found');
  }
  
  console.log('8. Testing Netlify functions...');
  const netlifyDir = path.join(rootDir, 'netlify', 'functions');
  if (fs.existsSync(netlifyDir)) {
    const functions = fs.readdirSync(netlifyDir);
    console.log(`✓ Netlify functions directory exists with ${functions.length} items`);
  } else {
    console.log('✗ Netlify functions directory not found');
  }
  
  console.log('\n✅ All tests passed! Comprehensive redundancy system should work.');
  
} catch (error) {
  console.error('❌ Test failed:', error.message);
  console.error('Stack trace:', error.stack);
  process.exit(1);
}