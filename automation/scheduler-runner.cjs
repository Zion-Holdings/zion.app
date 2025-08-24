#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const cron = require('node-cron');

const ROOT = __dirname ? path.join(__dirname, '..') : process.cwd();
const LOG_DIR = path.join(ROOT, 'automation', 'logs');
if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });
const LOG_FILE = path.join(LOG_DIR, 'scheduler.log');

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}\n`;
  process.stdout.write(line);
  fs.appendFileSync(LOG_FILE, line);
}

function run(command, args = [], options = {}) {
  return new Promise((resolve) => {
    const proc = spawn(command, args, { cwd: ROOT, stdio: 'pipe', ...options });
    let stdout = '';
    let stderr = '';
    proc.stdout.on('data', (d) => (stdout += d.toString()))
    proc.stderr.on('data', (d) => (stderr += d.toString()))
    proc.on('close', (code) => {
      if (stdout) fs.appendFileSync(LOG_FILE, stdout);
      if (stderr) fs.appendFileSync(LOG_FILE, stderr);
      log(`Command: ${command} ${args.join(' ')} exited with code ${code}`);
      resolve({ code, stdout, stderr });
    });
  });
}

async function initialKickoff() {
  log('Scheduler initial kickoff: updating Cursor rules and memory');
  await run(process.execPath, [path.join(ROOT, 'automation', 'cursor-rules-generator.cjs')]);
  log('Scheduler initial kickoff: quick git sync');
  await run('npm', ['run', 'automation:git-sync', '--silent']);
}

function scheduleTasks() {
  // Refresh rules/memory every 30 minutes
  cron.schedule('*/30 * * * *', async () => {
    log('CRON: Refreshing cursor rules and memory');
    await run(process.execPath, [path.join(ROOT, 'automation', 'cursor-rules-generator.cjs')]);
  });

  // Git sync every hour at minute 5
  cron.schedule('5 * * * *', async () => {
    log('CRON: Running automation git sync');
    await run('npm', ['run', 'automation:git-sync', '--silent']);
  });

  // Scan and fix automation errors every 15 minutes
  cron.schedule('*/15 * * * *', async () => {
    log('CRON: Automation error scan');
    await run(process.execPath, [path.join(ROOT, 'automation', 'automation-error-scanner.cjs')]);
    log('CRON: Automation error fix');
    await run(process.execPath, [path.join(ROOT, 'automation', 'automation-error-fixer.cjs')]);
  });

  // Dependency maintenance daily at 02:00
  cron.schedule('0 2 * * *', async () => {
    log('CRON: Dependency maintenance');
    await run('npm', ['run', 'deps:maintain', '--silent']);
  });
}

(async () => {
  log('Automation scheduler starting...');
  await initialKickoff();
  scheduleTasks();
  log('Automation scheduler started, waiting for scheduled jobs...');
})();