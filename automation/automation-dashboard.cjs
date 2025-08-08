#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'logs');
const logFile = path.join(logsDir, 'automation-dashboard.log');
const statusFile = path.join(logsDir, 'dashboard-status.json');

function ensureDir(d) { if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true }); }
function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  console.log(msg);
  fs.appendFileSync(logFile, line);
}

function start() {
  ensureDir(logsDir);
  log('Starting automation dashboard...');
  setInterval(() => {
    const status = {
      timestamp: new Date().toISOString(),
      pid: process.pid,
      uptimeMs: Math.round(process.uptime() * 1000)
    };
    fs.writeFileSync(statusFile, JSON.stringify(status, null, 2));
  }, 5000);
}

if (require.main === module) start();
