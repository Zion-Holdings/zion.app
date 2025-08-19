#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, '..', 'automation', 'logs');
const statusFile = path.join(logsDir, 'schedulers-status.json');

function human(ms) {
  if (!Number.isFinite(ms)) return String(ms);
  const s = Math.round(ms / 1000);
  if (s < 60) return `${s}s`;
  const m = Math.floor(s / 60);
  const rs = s % 60;
  if (m < 60) return `${m}m ${rs}s`;
  const h = Math.floor(m / 60);
  const rm = m % 60;
  return `${h}h ${rm}m`;
}

function load() {
  try {
    const text = fs.readFileSync(statusFile, 'utf8');
    return JSON.parse(text);
  } catch {
    return null;
  }
}

function printPretty(data) {
  const names = Object.keys(data);
  if (names.length === 0) {
    console.log('No scheduler status entries.');
    return 0;
  }
  for (const name of names) {
    const s = data[name] || {};
    const last = s.lastRun || {};
    const sch = s.scheduler || {};
    console.log(`\n== ${name} ==`);
    if (s.cooldownUntil) console.log('  cooldownUntil:', s.cooldownUntil);
    if (s.nextRunAt) console.log('  nextRunAt:', s.nextRunAt, `(in ${human(new Date(s.nextRunAt).getTime() - Date.now())})`);
    if (s.nextIntervalMs) console.log('  nextInterval:', human(s.nextIntervalMs));
    if (s.reasonForNext) console.log('  reasonForNext:', s.reasonForNext);
    if (Object.keys(last).length) {
      console.log('  lastRun:');
      console.log('    startedAt:', last.startedAt);
      console.log('    endedAt:', last.endedAt);
      if (Number.isFinite(last.durationMs)) console.log('    duration:', human(last.durationMs));
      console.log('    exitCode:', last.exitCode);
      console.log('    signal:', last.signal);
      console.log('    timedOut:', last.timedOut);
      console.log('    success:', last.success);
    }
    if (Object.keys(sch).length) {
      console.log('  scheduler:');
      if (Number.isFinite(sch.currentIntervalMs)) console.log('    currentInterval:', human(sch.currentIntervalMs));
      if (Number.isFinite(sch.baseIntervalMs)) console.log('    baseInterval:', human(sch.baseIntervalMs));
      if (Number.isFinite(sch.maxIntervalMs)) console.log('    maxInterval:', human(sch.maxIntervalMs));
      if (Number.isFinite(sch.consecutiveFailures)) console.log('    consecutiveFailures:', sch.consecutiveFailures);
      if (Number.isFinite(sch.processRssBytes)) console.log('    processRssMB:', (sch.processRssBytes / (1024 * 1024)).toFixed(1));
    }
  }
  console.log('');
  return 0;
}

function main() {
  const args = new Set(process.argv.slice(2));
  const data = load();
  if (!data) {
    if (args.has('--json')) {
      console.log(JSON.stringify({ error: 'No status file', statusFile }, null, 2));
    } else {
      console.log('No status file found yet at', statusFile);
    }
    process.exit(0);
  }

  if (args.has('--json')) {
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  if (args.has('--check')) {
    // Exit non-zero if any scheduler shows repeated failures or timeout on last run
    let unhealthy = false;
    for (const [name, s] of Object.entries(data)) {
      const last = s.lastRun || {};
      const sch = s.scheduler || {};
      if (last.timedOut || last.success === false || (Number.isFinite(sch.consecutiveFailures) && sch.consecutiveFailures >= 3)) {
        unhealthy = true;
        console.log(`${name}: UNHEALTHY`);
      } else {
        console.log(`${name}: healthy`);
      }
    }
    process.exit(unhealthy ? 2 : 0);
  }

  process.exit(printPretty(data));
}

main();
