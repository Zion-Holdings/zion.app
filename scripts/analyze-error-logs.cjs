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
// Error patterns to flag. Expanded to detect missing modules and network issues
const PATTERNS = [
  /error/i,
  /failed/i,
  /missingKey/i,
  /Module not found/i,
  /Can't resolve/i,
  /Cannot find module/i,
  /EAI_AGAIN/i,
  /Invalid or placeholder project ID/i,
  /Environment variable.*missing/i,
  /Missing translation key/i,
  /map is not a function/i
];
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
  let missingKeyMatch = line.match(/missing(?: translation)? key.*?([\w.-]+)/i);
  if (!missingKeyMatch) {
    missingKeyMatch = line.match(/missingKey\s+\S+\s+translation\s+(\S+)/i);
  }
  return { level, message: line, missingKey: missingKeyMatch ? missingKeyMatch[1] : null };
}

function checkFile(filePath) {
  if (!fs.existsSync(filePath)) return { issues: [], counts: {}, missingKeys: [] };
  const lines = fs.readFileSync(filePath, 'utf8').split('\n');
  const issues = [];
  const missingKeys = [];
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

    if (parsed.missingKey) {
      missingKeys.push(parsed.missingKey);
    }
  }

  return { issues: DEDUPE ? Array.from(new Set(issues)) : issues, counts, missingKeys: DEDUPE ? Array.from(new Set(missingKeys)) : missingKeys };
}

function main() {
  if (!fs.existsSync(LOG_DIR)) {
    console.error(`Log directory not found: ${LOG_DIR}`);
    process.exit(1);
  }

  const dirs = [LOG_DIR];
  if (LOG_DIR !== '.') {
    dirs.push('.'); // also check root logs like build.log
  }

  const files = [];
  dirs.forEach(dir => {
    if (fs.existsSync(dir)) {
      const dirFiles = fs.readdirSync(dir).filter(f => f.endsWith('.log')).map(f => path.join(dir, f));
      files.push(...dirFiles);
    }
  });

  if (!files.length) {
    console.log('No log files found');
    return;
  }

  const summaryLines = [];
  const allMissingKeys = new Set();
  let overallIssues = false;
  for (const file of files) {
    const { issues, counts, missingKeys } = checkFile(file);
    const displayName = path.relative(process.cwd(), file);
    const issueLines = issues;
    const countsLine = `Levels: ${LEVELS.map(l => `${l}:${counts[l] || 0}`).join(', ')}`;

    summaryLines.push(`\n--- ${displayName} ---`, countsLine);
    console.log(`\n--- ${displayName} ---`);
    console.log(countsLine);

    if (issueLines.length) {
      overallIssues = true;
      const header = `=== Issues found in ${displayName} ===`;
      summaryLines.push(header, ...issueLines);
      console.log(header);
      issueLines.forEach(line => console.log(line));
    }

    if (missingKeys && missingKeys.length) {
      missingKeys.forEach(k => allMissingKeys.add(k));
    }
  }

  if (!overallIssues) {
    const msg = 'No issues detected in logs';
    console.log(msg);
    summaryLines.push(msg);
  }

  // Provide helpful suggestions based on detected issues
  const allText = summaryLines.join('\n');
  const hints = [];
  if (/Module not found|Can't resolve|Cannot find module/i.test(allText)) {
    hints.push('Missing dependencies detected. Run "./setup.sh npm" to reinstall packages.');
  }
  if (/EAI_AGAIN|network.*disabled/i.test(allText)) {
    hints.push('Network errors detected. Ensure internet access before running the setup script.');
  }
  if (/Invalid or placeholder project ID/i.test(allText)) {
    hints.push('Environment variables appear misconfigured. Check NEXT_PUBLIC_REOWN_PROJECT_ID and other required settings.');
  }
  if (/Environment variable.*missing/i.test(allText)) {
    hints.push('Some environment variables are missing. Review your .env files.');
  }
  if (/map is not a function/i.test(allText)) {
    hints.push('Detected \"map is not a function\" errors. Verify array values before using .map().');
  }
  if (hints.length) {
    const header = '\n=== Suggestions ===';
    console.log(header);
    summaryLines.push(header);
    hints.forEach(msg => {
      console.log('- ' + msg);
    summaryLines.push('- ' + msg);
  });
  }

  if (allMissingKeys.size) {
    const header = '\n=== Missing Translation Keys ===';
    console.log(header);
    summaryLines.push(header);
    Array.from(allMissingKeys).forEach(key => {
      console.log('- ' + key);
      summaryLines.push('- ' + key);
    });
  }

  if (SUMMARY) {
    const summaryDir = path.join(LOG_DIR, 'summary');
    fs.mkdirSync(summaryDir, { recursive: true });
    const summaryFile = path.join(summaryDir, `summary-${Date.now()}.log`);
    fs.writeFileSync(summaryFile, summaryLines.join('\n') + '\n');
    if (allMissingKeys.size) {
      const keysFile = path.join(summaryDir, `missing-keys-${Date.now()}.log`);
      fs.writeFileSync(keysFile, Array.from(allMissingKeys).join('\n') + '\n');
      console.log(`Missing keys saved to ${keysFile}`);
    }
    console.log(`Summary saved to ${summaryFile}`);
  }
}

main();
