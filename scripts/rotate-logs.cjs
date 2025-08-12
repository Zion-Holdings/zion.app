#!/usr/bin/env node
/*
 * Simple log rotation utility.
 * Rotates .log files if they exceed a configured size.
 */
const fs = require('fs');
const path = require('path');

const LOG_DIRS = ['logs', 'server/logs', 'playwright-logs', 'cypress/logs'];
const MAX_SIZE_MB = 5;

function rotateLog(filePath) {
  const { size } = fs.statSync(filePath);
  if (size < MAX_SIZE_MB * 1024 * 1024) return;
  const dir = path.dirname(filePath);
  const base = path.basename(filePath);
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const rotated = path.join(dir, `${base}.${timestamp}`);
  fs.renameSync(filePath, rotated);
  fs.writeFileSync(filePath, '');
  console.log(`Rotated ${filePath} -> ${rotated}`);
}

function rotateLogsInDir(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      rotateLogsInDir(full);
    } else if (stat.isFile() && entry.endsWith('.log')) {
      rotateLog(full);
    }
  }
}

LOG_DIRS.forEach((dir) => rotateLogsInDir(path.join(process.cwd(), dir)));
console.log('Log rotation complete.');
