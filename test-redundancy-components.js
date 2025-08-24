#!/usr/bin/env node
'use strict';

const path = require('path');

console.log('Testing redundancy components...');
console.log('Current working directory:', process.cwd());
console.log('__dirname:', __dirname);

// Test PM2 redundancy manager
console.log('\n--- Testing PM2 Redundancy Manager ---');
try {
  const { EnhancedPM2RedundancyManager } = require('./automation/redundancy/enhanced-pm2-redundancy-manager.cjs');
  console.log('✓ PM2 Redundancy Manager loaded successfully');
  
  const pm2Manager = new EnhancedPM2RedundancyManager();
  console.log('✓ PM2 Redundancy Manager instantiated successfully');
  
} catch (error) {
  console.error('✗ PM2 Redundancy Manager failed:', error.message);
}

// Test GitHub Actions redundancy manager
console.log('\n--- Testing GitHub Actions Redundancy Manager ---');
try {
  const { EnhancedGitHubActionsRedundancyManager } = require('./automation/redundancy/enhanced-github-actions-redundancy-manager.cjs');
  console.log('✓ GitHub Actions Redundancy Manager loaded successfully');
  
  const githubManager = new EnhancedGitHubActionsRedundancyManager();
  console.log('✓ GitHub Actions Redundancy Manager instantiated successfully');
  
} catch (error) {
  console.error('✗ GitHub Actions Redundancy Manager failed:', error.message);
}

// Test Netlify Functions redundancy manager
console.log('\n--- Testing Netlify Functions Redundancy Manager ---');
try {
  const { EnhancedNetlifyFunctionsRedundancyManager } = require('./automation/redundancy/enhanced-netlify-functions-redundancy-manager.cjs');
  console.log('✓ Netlify Functions Redundancy Manager loaded successfully');
  
  const netlifyManager = new EnhancedNetlifyFunctionsRedundancyManager();
  console.log('✓ Netlify Functions Redundancy Manager instantiated successfully');
  
} catch (error) {
  console.error('✗ Netlify Functions Redundancy Manager failed:', error.message);
}

// Test Master Orchestrator
console.log('\n--- Testing Master Redundancy Orchestrator ---');
try {
  const { EnhancedMasterRedundancyOrchestrator } = require('./automation/redundancy/enhanced-master-redundancy-orchestrator.cjs');
  console.log('✓ Master Redundancy Orchestrator loaded successfully');
  
  const masterOrchestrator = new EnhancedMasterRedundancyOrchestrator();
  console.log('✓ Master Redundancy Orchestrator instantiated successfully');
  
} catch (error) {
  console.error('✗ Master Redundancy Orchestrator failed:', error.message);
}

console.log('\n--- Component testing completed ---');