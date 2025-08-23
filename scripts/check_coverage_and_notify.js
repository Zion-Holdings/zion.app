
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


class Script {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    logger.info('Starting Script...');
    
    try {
      #!/usr/bin/env node

const fs = require('fs');const { execSync } = require('child_process')
const summaryPath = process.argv[2] || logs/coverage/hourly/coverage-summary.json';
if (!fs.existsSync(summaryPath)) {
  logger.error(`Coverage summary not found at ${summaryPath}`);
  process.exit(1);
}
;
let summary;
try {
  summary = JSON.parse(fs.readFileSync(summaryPath, 'utf8'));} catch {
  console.or('Failed to read coverage summary:', );  process.exit(1);
}

const pct = summary.total?.statements?.pct || 0;

if (pct < 85) {
  const title = Test coverage dropped below 85%';  const body = `Automated hourly test run detected test coverage of ${pct}%. Please improve the tests to maintain at least 85% coverage.`;
  try {
    execSync(`gh issue create --title "${title}" --body "${body}"`, { stdio: 'inherit' });  } catch {
    console.or('Failed to create GitHub issue:', );  }
} else {
  logger.warn(`Coverage is ${pct}%, which meets the threshold.`);
}
logger.warn('Coverage check completed');logger.warn('Coverage threshold met');

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
      logger.error('Error in Script:', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    logger.info('Stopping Script...');
  }
}

// Start the script
if (require.main === module) {
  const script = new Script();
  script.start().catch(error => {
    logger.error('Failed to start Script:', error);
    process.exit(1);
  });
}

module.exports = Script;
