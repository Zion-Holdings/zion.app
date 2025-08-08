#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'logs', 'syntax-orchestrator.log');
if (!fs.existsSync(path.dirname(logFile))) {
  fs.mkdirSync(path.dirname(logFile), { recursive: true });
}

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}\n`;
  console.log(message);
  fs.appendFileSync(logFile, line);
}

function runFixCycle() {
  try {
    log('🔧 Running ESLint --fix');
    execSync('npm run lint -- --fix', { stdio: 'pipe' });
    log('✅ ESLint fix completed');
  } catch (e) {
    log('❌ ESLint fix run encountered issues');
  }
}

function start() {
  log('🚀 Syntax Fix Orchestrator started');
  runFixCycle();
  setInterval(runFixCycle, 5 * 60 * 1000);
}

start();


