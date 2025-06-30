#!/usr/bin/env node
/**
 * Quickly scan project log files for common error patterns.
 * Use --dedupe to remove duplicate lines and --summary to
 * write a summary file to logs/summary/.
 */
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const LOG_DIR = args[0] && !args[0].startsWith('--') ? args[0] : 'logs';
const PATTERNS = [/error/i, /failed/i, /missingKey/i];
const DEDUPE = args.includes('--dedupe');
const SUMMARY = args.includes('--summary');

function checkFile(filePath) {
  if (!fs.existsSync(filePath)) return [];
  const lines = fs.readFileSync(filePath, 'utf8').split('\n');
  const matches = lines.filter(line => PATTERNS.some(p => p.test(line)));
  return DEDUPE ? Array.from(new Set(matches)) : matches;
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

  const summaryLines = [];
  let hasIssues = false;
  for (const file of files) {
    const issues = checkFile(path.join(LOG_DIR, file));
    if (issues.length) {
      hasIssues = true;
      const header = `\n=== Issues found in ${file} ===`;
      console.log(header);
      summaryLines.push(header, ...issues);
      issues.forEach(line => console.log(line));
    }
  }
  if (!hasIssues) {
    const msg = 'No issues detected in logs';
    console.log(msg);
    summaryLines.push(msg);
  }

  if (SUMMARY) {
    const summaryDir = path.join(LOG_DIR, 'summary');
    fs.mkdirSync(summaryDir, { recursive: true });
    const summaryFile = path.join(summaryDir, `summary-${Date.now()}.log`);
    fs.writeFileSync(summaryFile, summaryLines.join('\n') + '\n');
    console.log(`Summary saved to ${summaryFile}`);
  }
}

main();
