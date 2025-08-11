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

// --- Configuration ---
const BASE_INTERVAL_MINUTES = Number(process.env.GUARDIAN_SCHEDULER_INTERVAL_MINUTES || 10);
const MIN_INTERVAL_MS = Math.max(30_000, Number(process.env.GUARDIAN_MIN_INTERVAL_MS || 30_000));
const MAX_INTERVAL_MINUTES = Number(process.env.GUARDIAN_MAX_INTERVAL_MINUTES || 60);
const BACKOFF_MULTIPLIER = Number(process.env.GUARDIAN_BACKOFF_MULTIPLIER || 1.5);
const BACKOFF_RESET_RATIO = Number(process.env.GUARDIAN_BACKOFF_RESET_RATIO || 0.5);
const JITTER_PCT = Math.min(0.5, Math.max(0, Number(process.env.GUARDIAN_JITTER_PCT || 0.1)));
const MAX_CONSECUTIVE_FAILURES = Number(process.env.GUARDIAN_MAX_CONSECUTIVE_FAILURES || 6);
const COOLDOWN_MINUTES = Number(process.env.GUARDIAN_COOLDOWN_MINUTES || 30);
const DISABLED = ['1', 'true', 'yes'].includes(String(process.env.DISABLE_GUARDIAN_SCHEDULER || '').toLowerCase());

const BASE_INTERVAL_MS = BASE_INTERVAL_MINUTES * 60 * 1000;
const MAX_INTERVAL_MS = Math.max(BASE_INTERVAL_MS, MAX_INTERVAL_MINUTES * 60 * 1000);

const statusFilePath = path.join(logsDir, 'schedulers-status.json');

let isRunning = false;
let currentChild = null;
let scheduledTimer = null;
let currentIntervalMs = BASE_INTERVAL_MS;
let consecutiveFailures = 0;
let inCooldownUntil = 0;

function readStatus() {
  try {
    const text = fs.readFileSync(statusFilePath, 'utf8');
    return JSON.parse(text);
  } catch {
    return {};
  }
}

function writeStatus(partial) {
  try {
    const all = readStatus();
    all['automation-guardian-scheduler'] = {
      ...(all['automation-guardian-scheduler'] || {}),
      ...partial
    };
    fs.writeFileSync(statusFilePath, JSON.stringify(all, null, 2));
  } catch {}
}

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

function withJitter(ms) {
  const jitter = Math.floor(ms * JITTER_PCT * (Math.random() * 2 - 1));
  return Math.max(MIN_INTERVAL_MS, ms + jitter);
}

function scheduleNext(reason) {
  const nextMs = withJitter(currentIntervalMs);
  const nextAt = new Date(Date.now() + nextMs).toISOString();
  writeStatus({ nextRunAt: nextAt, nextIntervalMs: nextMs, reasonForNext: reason || 'scheduled' });
  if (scheduledTimer) clearTimeout(scheduledTimer);
  scheduledTimer = setTimeout(runOnce, nextMs);
}

function runOnce() {
  if (DISABLED) {
    logLine('Guardian scheduler disabled via env. Skipping run.');
    scheduleNext('disabled');
    return;
  }

  const now = Date.now();
  if (inCooldownUntil && now < inCooldownUntil) {
    const msLeft = inCooldownUntil - now;
    logErr(`In cooldown for another ${msLeft} ms due to repeated failures.`);
    writeStatus({ cooldownUntil: new Date(inCooldownUntil).toISOString() });
    if (scheduledTimer) clearTimeout(scheduledTimer);
    scheduledTimer = setTimeout(runOnce, Math.max(MIN_INTERVAL_MS, msLeft));
    return;
  }

  if (isRunning) {
    logLine('Skip: previous guardian run still active');
    scheduleNext('still-active');
    return;
  }
  isRunning = true;

  const script = path.join(rootDir, 'automation-guardian-10min.cjs');
  const startedAt = Date.now();
  currentChild = spawn(process.execPath, [script], { stdio: 'inherit', env: process.env });

  const timeoutMs = Number(process.env.GUARDIAN_RUN_TIMEOUT_MS || 9 * 60 * 1000);
  let timedOut = false;
  const killTimer = setTimeout(() => {
    if (currentChild) {
      timedOut = true;
      logErr(`Timeout reached (${timeoutMs} ms). Killing guardian child.`);
      try { currentChild.kill('SIGTERM'); } catch {}
      setTimeout(() => { try { currentChild.kill('SIGKILL'); } catch {} }, 5000);
    }
  }, timeoutMs);

  currentChild.on('exit', (code, signal) => {
    clearTimeout(killTimer);
    const endedAt = Date.now();
    const durationMs = endedAt - startedAt;
    const success = code === 0 && !timedOut;

    if (!success) {
      logErr(`guardian run exited with code ${code}, signal ${signal || 'none'}, timedOut=${timedOut}`);
      consecutiveFailures += 1;
      currentIntervalMs = Math.min(MAX_INTERVAL_MS, Math.floor(currentIntervalMs * BACKOFF_MULTIPLIER));
      if (consecutiveFailures >= MAX_CONSECUTIVE_FAILURES) {
        const cooldownMs = COOLDOWN_MINUTES * 60 * 1000;
        inCooldownUntil = Date.now() + cooldownMs;
        logErr(`Entering cooldown for ${cooldownMs} ms after ${consecutiveFailures} consecutive failures.`);
      }
    } else {
      consecutiveFailures = 0;
      const target = Math.max(BASE_INTERVAL_MS, Math.floor(currentIntervalMs * (1 - BACKOFF_RESET_RATIO)));
      currentIntervalMs = Math.max(BASE_INTERVAL_MS, Math.min(currentIntervalMs, target));
    }

    writeStatus({
      lastRun: {
        startedAt: new Date(startedAt).toISOString(),
        endedAt: new Date(endedAt).toISOString(),
        durationMs,
        exitCode: code,
        signal: signal || null,
        timedOut: Boolean(timedOut),
        success
      },
      scheduler: {
        currentIntervalMs,
        baseIntervalMs: BASE_INTERVAL_MS,
        maxIntervalMs: MAX_INTERVAL_MS,
        consecutiveFailures,
        processRssBytes: process.memoryUsage().rss
      }
    });

    isRunning = false;
    currentChild = null;
    scheduleNext(success ? 'success' : 'failure');
  });
}

// Run immediately on start
runOnce();

function shutdown(signal) {
  logLine(`Received ${signal}. Shutting down guardian scheduler.`);
  try { if (scheduledTimer) clearTimeout(scheduledTimer); } catch {}
  if (currentChild) {
    try { currentChild.kill('SIGTERM'); } catch {}
  }
  setTimeout(() => process.exit(0), 1000);
}

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('uncaughtException', (err) => { logErr(`uncaughtException: ${err?.stack || err}`); });
process.on('unhandledRejection', (reason) => { logErr(`unhandledRejection: ${reason}`); });