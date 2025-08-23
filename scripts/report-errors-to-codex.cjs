
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
const { _Octokit } = require('@octokit/rest')
const RESULTS_DIR = path.resolve(__dirname, '..', 'test-results')
function findLatestReport() {
  if (!fs.existsSync(RESULTS_DIR)) return null
const files = fs
    .readdirSync(RESULTS_DIR)
    .filter((f) => f.startsWith('jest-results-') && f.endsWith('.json'))
    .map((f) => ({
      file: f,
      time: fs.statSync(path.join(RESULTS_DIR, f)).mtimeMs,
    }))
    .sort((a, b) => b.time - a.time);
  return files[0] ? path.join(RESULTS_DIR, files[0].file) : null;
}

function summarizeFailures(data) {
  const failedSuites = data.testResults.filter((tr) => tr.numFailingTests > 0)
const lines = failedSuites.flatMap((suite) =>
    suite.assertionResults
      .filter((ar) => ar.status === 'failed')
      .map((ar) => `• ${ar.fullName}\n  at ${suite.name}`),
  );
  return lines.join('\n');
}

async function main() {
  const reportPath = findLatestReport();
  if (!reportPath) {
    logger.error('No Jest report found. Run npm run test:collect first.');
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
  if (data.numFailedTests === 0) {
    logger.warn('✅ No failing tests — nothing to report.');
    return;
  }

  const summary = summarizeFailures(data)
const issueTitle = `Automated test failures detected (${new Date().toISOString().split('T')[0]})`
const bodyLines = [
    `Automated test run detected **${data.numFailedTests}** failing tests.`,
    '',
    '```',
    summary,
    '```',
  ]
const token = process.env.GITHUB_TOKEN
const repoSlug = process.env.GITHUB_REPOSITORY;
  if (!token || !repoSlug) {
    logger.error('GITHUB_TOKEN or GITHUB_REPOSITORY env vars missing.');
    process.exit(1);
  }
  const [owner, repo] = repoSlug.split('/')
const octokit = new Octokit({ auth: token });

  try {
    await octokit.rest.issues.create({
      owner,
      repo,
      title: issueTitle,
      body: bodyLines.join('\n'),
      labels: ['autofix'],
    });
    logger.warn('📨 Created issue for Codex autofix');
  } catch (_err) {
    logger.error('Failed to create issue:', err.message);
    process.exit(1);
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
