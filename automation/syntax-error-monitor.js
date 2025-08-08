#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'logs', 'syntax-monitor.log');
if (!fs.existsSync(path.dirname(logFile))) {
  fs.mkdirSync(path.dirname(logFile), { recursive: true });
}

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}\n`;
  console.log(message);
  fs.appendFileSync(logFile, line);
}

async function run() {
  log('🚀 Syntax Error Monitor started');
  setInterval(() => {
    try {
      execSync('npm run type-check', { stdio: 'pipe' });
      log('✅ No TypeScript errors');
    } catch (e) {
      log('❌ TypeScript errors detected');
    }
  }, 60000);
}

run();


