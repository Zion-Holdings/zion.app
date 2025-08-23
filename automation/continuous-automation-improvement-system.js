#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const LOGS_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOGS_DIR, 'continuous-automation-improvement-system.log');

if (!fs.existsSync(LOGS_DIR)) {
  fs.mkdirSync(LOGS_DIR, { recursive: true });
}

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, `${line}\n`);
}

function fileExists(relativePath) {
  return fs.existsSync(path.join(__dirname, relativePath));
}

function buildCandidateTasks() {
  const tasks = [];

  const candidates = [
    { name: 'dependency-update', cmd: ['node', ['automation/dependency-update-orchestrator.cjs']] },
    { name: 'ui-evolution-once', cmd: ['node', ['automation/ui-evolution-orchestrator.cjs', 'once']], requires: 'automation/ui-evolution-orchestrator.cjs' },
    { name: 'responsive-content-once', cmd: ['node', ['automation/responsive-content-orchestrator.cjs', 'once']], requires: 'automation/responsive-content-orchestrator.cjs' },
    { name: 'variation-once', cmd: ['node', ['automation/variation-orchestrator.cjs', 'once']], requires: 'automation/variation-orchestrator.cjs' },
    { name: 'design-orchestrator', cmd: ['node', ['automation/design-orchestrator.cjs']], requires: 'automation/design-orchestrator.cjs' },
    { name: 'innovation', cmd: ['node', ['automation/innovation-orchestrator.cjs']], requires: 'automation/innovation-orchestrator.cjs' },
    { name: 'security-scan', cmd: ['node', ['automation/security-scanner.cjs']], requires: 'automation/security-scanner.cjs' },
    { name: 'performance-audit', cmd: ['node', ['automation/performance-audit.cjs']], requires: 'automation/performance-audit.cjs' },
    { name: 'autonomous-meta-once', cmd: ['node', ['automation/autonomous-meta-orchestrator.cjs', 'once']], requires: 'automation/autonomous-meta-orchestrator.cjs' },
    { name: 'venture-once', cmd: ['node', ['automation/venture-orchestrator.cjs', 'once']], requires: 'automation/venture-orchestrator.cjs' },
    { name: 'frontend-sync-once', cmd: ['node', ['automation/frontend-sync-orchestrator.cjs', 'once']], requires: 'automation/frontend-sync-orchestrator.cjs' },
    { name: 'seo-optimizer', cmd: ['node', ['automation/seo-optimizer.cjs']], requires: 'automation/seo-optimizer.cjs' },
  ];

  for (const c of candidates) {
    if (!c.requires || fileExists(path.relative(__dirname, path.join(__dirname, '..', c.requires)))) {
      tasks.push(c);
    }
  }

  return tasks;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function runCommand(name, command, args) {
  return new Promise((resolve) => {
    log(`▶️  Starting task: ${name} -> ${command} ${args.join(' ')}`);
    const child = spawn(command, args, { stdio: ['ignore', 'pipe', 'pipe'], cwd: path.join(__dirname, '..') });

    child.stdout.on('data', (data) => {
      process.stdout.write(data);
      fs.appendFileSync(LOG_FILE, data);
    });

    child.stderr.on('data', (data) => {
      process.stderr.write(data);
      fs.appendFileSync(LOG_FILE, data);
    });

    child.on('close', (code) => {
      if (code === 0) {
        log(`✅ Completed task: ${name}`);
      } else {
        log(`⚠️ Task failed (code ${code}): ${name}`);
      }
      resolve();
    });
  });
}

async function runDiverseBatch() {
  const allTasks = buildCandidateTasks();
  if (allTasks.length === 0) {
    log('No candidate tasks found. Exiting early.');
    return;
  }

  const batchSize = Math.min(4, Math.max(2, Math.ceil(allTasks.length / 4)));
  const selected = shuffle(allTasks).slice(0, batchSize);

  log(`Selected ${selected.length} tasks out of ${allTasks.length} for this cycle: ${selected.map(t => t.name).join(', ')}`);

  for (const task of selected) {
    // eslint-disable-next-line no-await-in-loop
    await runCommand(task.name, task.cmd[0], task.cmd[1]);
  }

  log('Cycle complete.');
}

async function runOnce() {
  log('🚀 Continuous Automation Improvement: single cycle start');
  await runDiverseBatch();
  log('🏁 Single cycle finished');
}

async function runContinuous(intervalMinutes) {
  const intervalMs = intervalMinutes * 60 * 1000;
  log(`🔁 Continuous mode enabled. Interval: ${intervalMinutes} minutes`);
  // Run immediately, then on interval
  // eslint-disable-next-line no-await-in-loop
  await runDiverseBatch();
  setInterval(() => {
    runDiverseBatch().catch((err) => log(`Unhandled error in batch: ${err?.stack || err}`));
  }, intervalMs);
}

(async () => {
  const mode = process.argv[2] || 'once';
  const intervalArg = Number(process.argv[3]) || 60; // default hourly

  try {
    if (mode === 'continuous') {
      await runContinuous(intervalArg);
    } else {
      await runOnce();
    }
  } catch (err) {
    log(`Fatal error: ${err?.stack || err}`);
    process.exitCode = 1;
  }
})();
