#!/usr/bin/env node

const cron = require('node-cron');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'logs', 'linting-cron.log');
if (!fs.existsSync(path.dirname(logFile))) {
  fs.mkdirSync(path.dirname(logFile), { recursive: true });
}

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}\n`;
  console.log(message);
  fs.appendFileSync(logFile, line);
}

log('⏱️ Linting cron automation started');
cron.schedule('*/10 * * * *', () => {
  try {
    log('🔄 Running scheduled lint');
    execSync('npm run lint', { stdio: 'pipe' });
    log('✅ Lint passed');
  } catch (e) {
    log('❌ Lint failed; attempting fix');
    try {
      execSync('npm run lint -- --fix', { stdio: 'pipe' });
      log('🛠️ Fix attempted');
    } catch (e2) {
      log('⚠️ Fix run encountered issues');
    }
  }
});


