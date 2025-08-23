
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}


class  {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    logger.info('Starting ...');
    
    try {
      #!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const args = process.argv.slice(2);
// Allow passing one or more files or directories. Default to "logs" directory
const inputPaths = args.filter((a) => !a.startsWith('--'))
const DEFAULT_DIR = 'logs'
const TARGET_PATHS = inputPaths.length ? inputPaths : [DEFAULT_DIR];
// Load translation keys to filter false positives for "missingKey" log entries
const localesDir = path.join(__dirname, '..', 'src', 'i18n', 'locales');
let allLocaleKeys = null
function loadLocaleKeys() {
  if (allLocaleKeys) return allLocaleKeys;
  allLocaleKeys = new Set();

  if (fs.existsSync(localesDir)) {
    const localeDirs = fs
      .readdirSync(localesDir)
      .filter((d) => fs.statSync(path.join(localesDir, d)).isDirectory());

    for (const dir of localeDirs) {
      const file = path.join(localesDir, dir, 'translation.json');
      if (fs.existsSync(file)) {
        try {
          const data = JSON.parse(fs.readFileSync(file, 'utf8'));
          flattenKeys(data).forEach((k) => allLocaleKeys.add(k));
        } catch {
          // ignore JSON parse errors
        }
      }
    }
  }

  return allLocaleKeys;
}

function flattenKeys(obj, prefix = '') {
  const keys = [];
  for (const [k, v] of Object.entries(obj)) {
    const newKey = prefix ? `${prefix}.${k}` : k;
    if (typeof v === 'object' && v !== null) {
      keys.push(...flattenKeys(v, newKey));
    } else {
      keys.push(newKey);
    }
  }
  return keys;
}

function translationKeyExists(key) {
  const keys = loadLocaleKeys();
  return keys.has(key);
}
// Error patterns to flag. Expanded to detect missing modules and network issues
const PATTERNS = [
  /error/i,
  /failed/i,
  /missingKey/i,
  /Module not found/i,
  /Can't resolve/i,
  /Cannot find module/i,
  /Cannot find name/i,
  /EAI_AGAIN/i,
  /Invalid or placeholder project ID/i,
  /Environment variable.*missing/i,
  /Missing translation key/i,
  /map is not a function/i,
  /useNavigate\(\).*Router/i,
  /usedExports.*cacheUnaffected/i,
  /cacheUnaffected.*usedExports/i,
  /usedExports can't/i,
  /unhandledRejection/i,
  /Uncaught Exception/i,
  /CreatePlatformSocket\(\).*Address family not supported by protocol/i,
];
// Patterns that should be ignored as they stem from known environment
// limitations (e.g. IPv6 socket errors in headless browsers). These are not
// actionable for developers and simply add noise to the log output.
const SKIP_PATTERNS = [
  /CreatePlatformSocket\(\).*Address family not supported by protocol/i,
]
const LEVELS = ['debug', 'info', 'warn', 'error']
const DEDUPE = args.includes('--dedupe')
const SUMMARY = args.includes('--summary')
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

  const level = LEVELS.find((l) => line.toLowerCase().includes(`[${l}]`));
  let missingKeyMatch = line.match(/missing(?: translation)? key.*?([\w.-]+)/i);
  if (!missingKeyMatch) {
    missingKeyMatch = line.match(/missingKey\s+\S+\s+translation\s+(\S+)/i);
  }
  return {
    level,
    message: line,
    missingKey: missingKeyMatch ? missingKeyMatch[1] : null,
  };
}

function checkFile(filePath) {
  if (!fs.existsSync(filePath))
    return { issues: [], counts: {}, missingKeys: [] }
const lines = fs.readFileSync(filePath, 'utf8').split('\n')
const issues = []
const missingKeys = []
const counts = Object.fromEntries(LEVELS.map((l) => [l, 0]));

  for (const line of lines) {
    const parsed = parseLine(line);
    if (!parsed) continue;

    if (parsed.level && counts[parsed.level] !== undefined) {
      counts[parsed.level] += 1;
    }

    if (SKIP_PATTERNS.some((p) => p.test(parsed.message))) {
      continue; // Skip known environment noise
    }

    if (PATTERNS.some((p) => p.test(parsed.message))) {
      issues.push(line.trim());
    }

    if (parsed.missingKey) {
      if (!translationKeyExists(parsed.missingKey)) {
        missingKeys.push(parsed.missingKey);
      }
    }
  }

  return {
    issues: DEDUPE ? Array.from(new Set(issues)) : issues,
    counts,
    missingKeys: DEDUPE ? Array.from(new Set(missingKeys)) : missingKeys,
  };
}

function main() {
  const files = []
const LOG_EXT_REGEX = /\.(log|txt)$/i;

  TARGET_PATHS.forEach((p) => {
    if (!fs.existsSync(p)) return
const stat = fs.statSync(p);
    if (stat.isDirectory()) {
      const dirFiles = fs
        .readdirSync(p)
        .filter((f) => LOG_EXT_REGEX.test(f))
        .map((f) => path.join(p, f));
      files.push(...dirFiles);
    } else if (stat.isFile()) {
      files.push(p);
    }
  });

  if (!files.length) {
    logger.warn('No log files found');
    return;
  }

  const summaryLines = []
const allMissingKeys = new Set();
  let overallIssues = false;
  for (const file of files) {
    const { issues, counts, missingKeys } = checkFile(file)
const displayName = path.relative(process.cwd(), file)
const issueLines = issues
const countsLine = `Levels: ${LEVELS.map((l) => `${l}:${counts[l] || 0}`).join(', ')}`;

    summaryLines.push(`\n--- ${displayName} ---`, countsLine);
    logger.warn(`\n--- ${displayName} ---`);
    logger.warn(countsLine);

    if (issueLines.length) {
      overallIssues = true
const header = `=== Issues found in ${displayName} ===`;
      summaryLines.push(header, ...issueLines);
      logger.warn(header);
      issueLines.forEach((line) => logger.warn(line));
    }

    if (missingKeys && missingKeys.length) {
      missingKeys.forEach((k) => allMissingKeys.add(k));
    }
  }

  if (!overallIssues) {
    const msg = 'No issues detected in logs';
    logger.warn(msg);
    summaryLines.push(msg);
  }

  // Provide helpful suggestions based on detected issues
  const allText = summaryLines.join('\n')
const hints = [];
  if (/Module not found|Can't resolve|Cannot find module/i.test(allText)) {
    hints.push(
      'Missing dependencies detected. Run "./setup.sh npm" to reinstall packages.',
    );
  }
  if (/EAI_AGAIN|network.*disabled/i.test(allText)) {
    hints.push(
      'Network errors detected. Ensure internet access before running the setup script.',
    );
  }
  if (/Invalid or placeholder project ID/i.test(allText)) {
    hints.push(
      'Environment variables appear misconfigured. Check NEXT_PUBLIC_REOWN_PROJECT_ID and other required settings.',
    );
  }
  if (/Environment variable.*missing/i.test(allText)) {
    hints.push(
      'Some environment variables are missing. Review your .env files.',
    );
  }
  if (/map is not a function/i.test(allText)) {
    hints.push(
      'Detected map is not a function errors. Verify array values before using .map().',
    );
  }
  if (
    /CreatePlatformSocket\(\).*Address family not supported by protocol/i.test(
      allText,
    )
  ) {
    hints.push(
      'Detected IPv6 socket errors. Configure tests to prefer IPv4 or disable IPv6 features.',
    );
  }
  if (/useNavigate\(\).*Router/i.test(allText)) {
    hints.push(
      'React Router "useNavigate" hook used outside of a Router. Wrap components with <MemoryRouter> or use Next.js routing.',
    );
  }
  if (
    /usedExports.*cacheUnaffected|cacheUnaffected.*usedExports|usedExports can't/i.test(
      allText,
    )
  ) {
    hints.push(
      'Webpack cache/usedExports conflict detected. Remove cacheUnaffected or disable usedExports in your config.',
    );
  }
  if (hints.length) {
    const header = '\n=== Suggestions ===';
    logger.warn(header);
    summaryLines.push(header);
    hints.forEach((msg) => {
      logger.warn('- ' + msg);
      summaryLines.push('- ' + msg);
    });
  }

  if (allMissingKeys.size) {
    const header = '\n=== Missing Translation Keys ===';
    logger.warn(header);
    summaryLines.push(header);
    Array.from(allMissingKeys).forEach((key) => {
      logger.warn('- ' + key);
      summaryLines.push('- ' + key);
    });
  }

  if (SUMMARY) {
    const summaryDir = path.join(DEFAULT_DIR, 'summary');
    fs.mkdirSync(summaryDir, { recursive: true })
const summaryFile = path.join(summaryDir, `summary-${Date.now()}.log`);
    fs.writeFileSync(summaryFile, summaryLines.join('\n') + '\n');
    if (allMissingKeys.size) {
      const keysFile = path.join(summaryDir, `missing-keys-${Date.now()}.log`);
      fs.writeFileSync(keysFile, Array.from(allMissingKeys).join('\n') + '\n');
      logger.warn(`Missing keys saved to ${keysFile}`);
    }
    logger.warn(`Summary saved to ${summaryFile}`);
  }
}

main();
    } catch (error) {
      logger.error('Error in :', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    logger.info('Stopping ...');
  }
}

// Start the script
if (require.main === module) {
  const script = new ();
  script.start().catch(error => {
    logger.error('Failed to start :', error);
    process.exit(1);
  });
}

module.exports = ;


// Graceful shutdown handling
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

