#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const LOG_DIR = process.argv[2] || 'logs';
const PATTERNS = [/error/i, /failed/i, /missingKey/i];

function checkFile(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const lines = fs.readFileSync(filePath, 'utf8').split('\n');
  return lines.filter(line => PATTERNS.some(p => p.test(line)));
}

function main() {
  if (!fs.existsSync(LOG_DIR)) {
    console.error(`Log directory not found: ${LOG_DIR}`);
    process.exit(1);
  }
  const files = fs.readdirSync(LOG_DIR).filter(f => f.endsWith('.log'));
  if (!files.length) {
    console.log('No log files found');
    return;
  }
  let hasIssues = false;
  for (const file of files) {
    const issues = checkFile(path.join(LOG_DIR, file));
    if (issues.length) {
      hasIssues = true;
      console.log(`\n=== Issues found in ${file} ===`);
      issues.forEach(line => console.log(line));
    }
  }
  if (!hasIssues) {
    console.log('No issues detected in logs');
  }
}

main();
