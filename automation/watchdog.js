#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const PORT = 3002;
const DEV_CMD = 'npm run dev';
const AUTOMATION_CMD = 'npm run netlify:start';
const CHECK_INTERVAL = 10000; // 10 seconds

function isPortInUse(port) {
  try {
    const output = execSync(`lsof -i :${port} | grep LISTEN || true`).toString();
    return output.trim().length > 0;
  } catch {
    return false;
  }
}

function killPort(port) {
  try {
    execSync(`lsof -ti :${port} | xargs kill -9 || true`);
    console.log(`[Watchdog] Killed processes on port ${port}`);
  } catch (e) {
    // Ignore
  }
}

function isProcessRunning(cmd) {
  try {
    const output = execSync(`ps aux | grep '${cmd}' | grep -v grep || true`).toString();
    return output.trim().length > 0;
  } catch {
    return false;
  }
}

function startProcess(cmd, cwd = process.cwd()) {
  console.log(`[Watchdog] Starting: ${cmd}`);
  return spawn(cmd, { shell: true, cwd, stdio: 'ignore', detached: true });
}

function watchdogLoop() {
  setInterval(() => {
    // Ensure port is not blocked
    if (isPortInUse(PORT)) {
      killPort(PORT);
    }

    // Ensure dev server is running
    if (!isProcessRunning('next dev')) {
      startProcess(DEV_CMD, path.join(__dirname, '..'));
    }

    // Ensure automation is running
    if (!isProcessRunning('netlify-build-automation.js')) {
      startProcess(AUTOMATION_CMD, path.join(__dirname, '..'));
    }
  }, CHECK_INTERVAL);
}

console.log('[Watchdog] Starting watchdog for dev server and automation...');
watchdogLoop(); 