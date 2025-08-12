#!/usr/bin/env node

/**
 * Purge old log files from the logs directory.
 * Deletes .log files older than a configurable number of days to
 * prevent disk usage from growing without bound.
 */

const fs = require('fs');
const path = require('path');

const LOG_DIR = path.join(__dirname, '..', 'logs');
const RETENTION_DAYS = process.env.LOG_RETENTION_DAYS
  ? parseInt(process.env.LOG_RETENTION_DAYS, 10)
  : 30;

function purgeOldLogs(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir);
  for (const entry of entries) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      purgeOldLogs(full);
    } else if (stat.isFile() && entry.endsWith('.log')) {
      const ageMs = Date.now() - stat.mtimeMs;
      const ageDays = ageMs / (1000 * 60 * 60 * 24);
      if (ageDays > RETENTION_DAYS) {
        fs.unlinkSync(full);
        console.log(`Deleted old log: ${full}`);
      }
    }
  }
}

purgeOldLogs(LOG_DIR);
console.log(`Old logs older than ${RETENTION_DAYS} days have been purged.`);
