#!/usr/bin/env node

'use strict';

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const rootDir = path.join(__dirname, '..');
const logsDir = path.join(rootDir, 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

let isRunning = false;
let currentChild = null;

function logLine(message) {
  try {
    fs.appendFileSync(path.join(logsDir, 'guardian-scheduler.out.log'), `[${new Date().toISOString()}] ${message}\n`);
  } catch {}
}

function logErr(message) {
  try {
    fs.appendFileSync(path.join(logsDir, 'guardian-scheduler.err.log'), `[${new Date().toISOString()}] ${message}\n`);
  } catch {}
}

function runOnce() {
  if (isRunning) {
    logLine('Skip: previous guardian run still active');
    return;
  }
  isRunning = true;
  const script = path.join(rootDir, 'automation-guardian-10min.cjs');
  currentChild = spawn(process.execPath, [script], { stdio: 'inherit', env: process.env });

  const timeoutMs = Number(process.env.GUARDIAN_RUN_TIMEOUT_MS || 9 * 60 * 1000);
  const killTimer = setTimeout(() => {
    if (currentChild) {
      logErr(`Timeout reached (${timeoutMs} ms). Killing guardian child.`);
      try { currentChild.kill('SIGTERM'); } catch {}
      setTimeout(() => { try { currentChild.kill('SIGKILL'); } catch {} }, 5000);
    }
  }, timeoutMs);

  currentChild.on('exit', (code, signal) => {
    clearTimeout(killTimer);
    if (code !== 0) {
      logErr(`guardian run exited with code ${code}, signal ${signal || 'none'}`);
    }
    isRunning = false;
    currentChild = null;
  });
}

// Run immediately on start
runOnce();

// Then on interval (default 10 minutes)
const intervalMinutes = Number(process.env.GUARDIAN_SCHEDULER_INTERVAL_MINUTES || 10);
const intervalMs = Math.max(30_000, intervalMinutes * 60 * 1000);
const intervalHandle = setInterval(runOnce, intervalMs);

function shutdown(signal) {
  logLine(`Received ${signal}. Shutting down guardian scheduler.`);
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