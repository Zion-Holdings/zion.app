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
const LEVELS = ['debug', 'info', 'warn', 'error'];
const DEDUPE = args.includes('--dedupe');
const SUMMARY = args.includes('--summary');

function parseLine(line) {
  line = line.trim();
  if (!line) return null;

  // Try parsing JSON log lines from /api/logs
  if (line.startsWith('{') && line.endsWith('}')) {
    try {
      const entry = JSON.parse(line);
      if (entry.level && LEVELS.includes(entry.level) && entry.message) {
        return { level: entry.level, message: entry.message };
      }
    } catch {
      // fall back to text match
    }
  }

  const level = LEVELS.find(l => line.toLowerCase().includes(`[${l}]`));
  return { level, message: line };
}

function checkFile(filePath) {
  if (!fs.existsSync(filePath)) return { issues: [], counts: {} };
  const lines = fs.readFileSync(filePath, 'utf8').split('\n');
  const issues = [];
  const counts = Object.fromEntries(LEVELS.map(l => [l, 0]));

  for (const line of lines) {
    const parsed = parseLine(line);
    if (!parsed) continue;

    if (parsed.level && counts[parsed.level] !== undefined) {
      counts[parsed.level] += 1;
    }

    if (PATTERNS.some(p => p.test(parsed.message))) {
      issues.push(line.trim());
    }
  }

  return { issues: DEDUPE ? Array.from(new Set(issues)) : issues, counts };
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
  let overallIssues = false;
  for (const file of files) {
    const { issues, counts } = checkFile(path.join(LOG_DIR, file));
    const issueLines = issues;
    const countsLine = `Levels: ${LEVELS.map(l => `${l}:${counts[l] || 0}`).join(', ')}`;

    summaryLines.push(`\n--- ${file} ---`, countsLine);
    console.log(`\n--- ${file} ---`);
    console.log(countsLine);

    if (issueLines.length) {
      overallIssues = true;
      const header = `=== Issues found in ${file} ===`;
      summaryLines.push(header, ...issueLines);
      console.log(header);
      issueLines.forEach(line => console.log(line));
    }
  }

  if (!overallIssues) {
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
