#!/usr/bin/env node
/**
 * Generate a CSV summary of error counts in log files.
 * Usage: node scripts/log-summary-csv.cjs [logDir]
 */
const fs = require('fs');
const path = require('path');

const logDir = process.argv[2] || 'logs';

function collectLogs(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.log'))
    .map(f => path.join(dir, f));
}

function countErrors(file) {
  const content = fs.readFileSync(file, 'utf8');
  const errorLines = content.split('\n').filter(l => /error/i.test(l));
  return errorLines.length;
}

const files = collectLogs(logDir);
if (!files.length) {
  console.error('No log files found in', logDir);
  process.exit(1);
}

const rows = ['file,errorCount'];
files.forEach(file => {
  const count = countErrors(file);
  rows.push(`${path.basename(file)},${count}`);
});

const output = rows.join('\n');
console.log(output);
