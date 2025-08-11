#!/usr/bin/env node

'use strict';

const { spawn, spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const rootDir = path.join(__dirname, '..', '..');
const logsDir = path.join(path.join(__dirname, '..'), 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

function ensureDeps() {
  const nodeModules = path.join(rootDir, 'node_modules');
  const lockFile = path.join(rootDir, 'package-lock.json');
  if (!fs.existsSync(nodeModules) && fs.existsSync(lockFile)) {
    spawnSync('npm', ['ci', '--no-fund', '--no-audit'], { cwd: rootDir, stdio: 'inherit', env: process.env });
  }
}

let isRunning = false;
let currentChild = null;

function logLine(message) {
  try {
    fs.appendFileSync(path.join(logsDir, 'front-scheduler.out.log'), `[${new Date().toISOString()}] ${message}\n`);
  } catch {}
}

function logErr(message) {
  try {
    fs.appendFileSync(path.join(logsDir, 'front-scheduler.err.log'), `[${new Date().toISOString()}] ${message}\n`);
  } catch {}
}

function runOnce() {
  if (isRunning) {
    logLine('Skip: previous run still active');
    return;
  }
  isRunning = true;
  ensureDeps();
  const script = path.join(rootDir, 'automation', 'continuous-front-runner.cjs');
  currentChild = spawn(process.execPath, [script], { stdio: 'inherit', env: process.env });

  const timeoutMs = Number(process.env.FRONT_RUN_TIMEOUT_MS || 4.5 * 60 * 1000);
  const killTimer = setTimeout(() => {
    if (currentChild) {
      logErr(`Timeout reached (${timeoutMs} ms). Killing child process.`);
      try { currentChild.kill('SIGTERM'); } catch {}
      setTimeout(() => { try { currentChild.kill('SIGKILL'); } catch {} }, 5000);
    }
  }, timeoutMs);

  currentChild.on('exit', (code, signal) => {
    clearTimeout(killTimer);
    if (code !== 0) {
      logErr(`front runner exited with code ${code}, signal ${signal || 'none'}`);
    }
    isRunning = false;
    currentChild = null;
  });
}

// Run immediately on start
runOnce();

// Then run on interval (default 5 minutes)
const intervalMinutes = Number(process.env.FRONT_SCHEDULER_INTERVAL_MINUTES || 5);
const intervalMs = Math.max(30_000, intervalMinutes * 60 * 1000);
const intervalHandle = setInterval(runOnce, intervalMs);

function shutdown(signal) {
  logLine(`Received ${signal}. Shutting down scheduler.`);
  try { clearInterval(intervalHandle); } catch {}
  if (currentChild) {
    try { currentChild.kill('SIGTERM'); } catch {}
  }
  setTimeout(() => process.exit(0), 1000);
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('uncaughtException', (err) => { logErr(`uncaughtException: ${err?.stack || err}`); });
process.on('unhandledRejection', (reason) => { logErr(`unhandledRejection: ${reason}`); });