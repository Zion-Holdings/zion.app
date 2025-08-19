#!/usr/bin/env node
'use strict';

const path = require('path');

console.log('Debugging paths...');
console.log('Current working directory:', process.cwd());
console.log('__dirname:', __dirname);

// Test path resolution
const testPath = path.join(__dirname, 'automation', 'redundancy');
console.log('Test path:', testPath);

// Test require resolution
try {
  const pm2Manager = require('./automation/redundancy/enhanced-pm2-redundancy-manager.cjs');
  console.log('PM2 Manager loaded, __dirname in module:', pm2Manager.__dirname);
} catch (error) {
  console.error('Error loading PM2 manager:', error.message);
}

// Test direct path construction
const logDir = path.join(__dirname, 'automation', 'logs');
console.log('Log dir path:', logDir);

// Test if directory exists
const fs = require('fs');
console.log('Log dir exists:', fs.existsSync(logDir));
console.log('Automation dir exists:', fs.existsSync(path.join(__dirname, 'automation')));
console.log('Redundancy dir exists:', fs.existsSync(path.join(__dirname, 'automation', 'redundancy')));