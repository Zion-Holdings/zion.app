#!/usr/bin/env node

const chokidar = require('chokidar');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const logFile = path.join(__dirname, 'logs', 'linting-watcher.log');
if (!fs.existsSync(path.dirname(logFile))) {
  fs.mkdirSync(path.dirname(logFile), { recursive: true });
}

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}\n`;
  console.log(message);
  fs.appendFileSync(logFile, line);
}

log('👀 Linting file watcher started');
const watcher = chokidar.watch(['pages/**/*.{ts,tsx,js,jsx}', 'components/**/*.{ts,tsx,js,jsx}', 'utils/**/*.{ts,tsx,js,jsx}', 'hooks/**/*.{ts,tsx,js,jsx}'], {
  ignored: /(node_modules|\.git|\.next)/,
  ignoreInitial: true,
  persistent: true,
});

watcher.on('change', (file) => {
  try {
    execSync(`npx eslint "${file}"`, { stdio: 'pipe' });
    log(`✅ ${file} passed lint`);
  } catch (e) {
    log(`❌ ${file} has lint issues; attempting fix`);
    try {
      execSync(`npx eslint "${file}" --fix`, { stdio: 'pipe' });
      log(`🛠️ Fixed ${file}`);
    } catch (e2) {
      log(`⚠️ Could not fix ${file}`);
    }
  }
});


