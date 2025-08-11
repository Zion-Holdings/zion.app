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

function runOnce() {
  const script = path.join(rootDir, 'continuous-front-runner.cjs');
  const child = spawn('node', [script], { stdio: 'inherit', env: process.env });
  child.on('exit', (code) => {
    if (code !== 0) {
      try {
        fs.appendFileSync(path.join(logsDir, 'front-scheduler.err.log'), `[${new Date().toISOString()}] front runner exited with code ${code}\n`);
      } catch {}
    }
  });
}

// Run immediately on start
runOnce();

// Then every 5 minutes
const FIVE_MINUTES_MS = 5 * 60 * 1000;
setInterval(runOnce, FIVE_MINUTES_MS);