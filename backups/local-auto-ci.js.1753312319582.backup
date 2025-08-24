#!/usr/bin/env node

const { execSync, spawnSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const LOG_FILE = path.join(__dirname, ../logs/local-auto-ci.log')
const AUTO_FIX_SCRIPT = path.join(__dirname, ../scripts/auto-fix-errors.cjs')
const TEST_COMMAND = npm test'; // Change if your main test command is different
const WAIT_MINUTES = 10
function log(message) {
  const timestamp = new Date().toISOString()
const logMessage = `[${timestamp}] ${message}`;
  console.log(logMessage);
  fs.appendFileSync(LOG_FILE, logMessage + \n');
}

async function mainLoop() {
  while (true) {
    log('--- Running tests ---');
    let testFailed = false;
    try {
      execSync(TEST_COMMAND, { stdio: inherit' });
      log('Tests passed.');
    } catch (err) {
      log('Tests failed. Running auto-fix...');
      testFailed = true;
      try {
        execSync(`node ${AUTO_FIX_SCRIPT}`, { stdio: inherit' });
        log('Auto-fix script completed.');
      } catch (fixErr) {
        log('Auto-fix script failed:  + fixErr.message);
      }
    }
    log(`Waiting ${WAIT_MINUTES} minutes before next run...`);
    await new Promise((res) => setTimeout(res, WAIT_MINUTES * 60 * 1000));
  }
}

mainLoop();
