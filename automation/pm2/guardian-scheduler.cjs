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
  const script = path.join(rootDir, 'automation-guardian-10min.cjs');
  const child = spawn('node', [script], { stdio: 'inherit', env: process.env });
  child.on('exit', (code) => {
    if (code !== 0) {
      // best effort log to file without interrupting pm2
      try {
        fs.appendFileSync(path.join(logsDir, 'guardian-scheduler.err.log'), `[${new Date().toISOString()}] guardian run exited with code ${code}\n`);
      } catch {}
    }
  });
}

// Run immediately on start
runOnce();

// Then every 10 minutes
const TEN_MINUTES_MS = 10 * 60 * 1000;
setInterval(runOnce, TEN_MINUTES_MS);