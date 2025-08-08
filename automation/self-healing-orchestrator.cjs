#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const LOG_FILE = path.join(__dirname, 'logs', 'self-healing.log');
if (!fs.existsSync(path.dirname(LOG_FILE))) fs.mkdirSync(path.dirname(LOG_FILE), { recursive: true });

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  console.log(msg);
  fs.appendFileSync(LOG_FILE, line);
}

async function cycle() {
  try {
    const scanner = require('./automation-error-scanner.cjs');
    const fixer = require('./automation-error-fixer.cjs');
    const res = scanner.scanOnce();
    log(`🔍 Found ${res.issues.length} automation issue(s)`);
    const fixed = fixer.runFixes(res.issues);
    log(`🛠️ Applied ${fixed} fix(es)`);
  } catch (e) {
    log(`❌ Self-heal cycle error: ${e.message}`);
  }
}

function start() {
  log('🚀 Self-healing orchestrator started');
  cycle();
  setInterval(cycle, 5 * 60 * 1000);
}

if (require.main === module) start();

module.exports = { start };


