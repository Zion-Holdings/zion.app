
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
const _fetch = require('node-fetch')
const RESULTS_DIR = path.resolve(__dirname, '..', 'test-results')
function findLatestReport() {
  if (!fs.existsSync(RESULTS_DIR)) return null
const files = fs
    .readdirSync(RESULTS_DIR)
    .filter((f) => f.startsWith('jest-results-') && f.endsWith('.json'))
    .map((f) => ({ f, time: fs.statSync(path.join(RESULTS_DIR, f)).mtimeMs }))
    .sort((a, b) => b.time - a.time);
  return files[0] ? path.join(RESULTS_DIR, files[0].f) : null;
}

async function main() {
  const reportPath = findLatestReport();
  if (!reportPath) {
    logger.error('No Jest report found. Run npm run test:collect first.');
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(reportPath, 'utf8'))
const failedSuites = data.testResults.filter((tr) => tr.numFailingTests > 0);
  if (failedSuites.length === 0) {
    logger.warn('✅ No failing tests — nothing to report.');
    return;
  }

  const summaryLines = failedSuites.flatMap((suite) => {
    return suite.assertionResults
      .filter((ar) => ar.status === 'failed')
      .map((ar) => `• ${ar.fullName}\n  at ${suite.name}`);
  })
const payload = {
    projectId: process.env.CURSOR_PROJECT_ID,
    message:
      `Automated test run detected ${data.numFailedTests} failing tests.\n` +
      summaryLines.join('\n'),
  }
const apiKey = process.env.CURSOR_API_KEY;
  if (!apiKey) {
    logger.warn('CURSOR_API_KEY not set; printing payload instead:');
    logger.warn(payload.message);
    return;
  }

  try {
    const res = await _fetch('https://api.cursor.sh/v1/issues', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      logger.error(
        'Failed to create Cursor issue:',
        res.status,
        await res.text(),
      );
      process.exitCode = 1;
      return;
    }
    const json = await res.json();
    logger.warn('📧 Sent error report to Cursor. Issue id:', json.id);
  } catch (_err) {
    logger.error('Error while sending report:', err);
    process.exitCode = 1;
  }
}

main();


// Graceful shutdown handling
process.on('SIGINT', () => {
  logger.info('\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

process.on('SIGTERM', () => {
  logger.info('\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});
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
