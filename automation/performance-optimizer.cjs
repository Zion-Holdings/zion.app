#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const logsDir = path.join(__dirname, 'logs');
const logFile = path.join(logsDir, 'performance-optimizer.log');

function ensureDir(d) { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); }
function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  console.log(msg);
  fs.appendFileSync(logFile, line);
}

function runBuild() {
  return new Promise((resolve) => {
    const proc = spawn('npm', ['run', 'build'], { cwd: path.join(__dirname, '..') });
    proc.stdout.on('data', d => log(d.toString().trim()));
    proc.stderr.on('data', d => log(`[err] ${d.toString().trim()}`));
    proc.on('close', code => {
      log(`Build exited with code ${code}`);
      resolve(code === 0);
    });
    proc.on('error', err => {
      log(`Build error: ${err.message}`);
      resolve(false);
    });
  });
}

async function optimize() {
  ensureDir(logsDir);
  log('Starting performance optimizer...');
  const ok = await runBuild();
  if (!ok) return;
  // Placeholders for additional steps
  log('Optimizing assets (placeholder)');
  log('Optimizing CSS (placeholder)');
  log('Performance optimizer complete');
}

if (require.main === module) optimize();
