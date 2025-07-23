
class  {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    console.log('Starting ...');
    
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
    console.error('No Jest report found. Run npm run test:collect first.');
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(reportPath, 'utf8'))
const failedSuites = data.testResults.filter((tr) => tr.numFailingTests > 0);
  if (failedSuites.length === 0) {
    console.warn('✅ No failing tests — nothing to report.');
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
    console.warn('CURSOR_API_KEY not set; printing payload instead:');
    console.warn(payload.message);
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
      console.error(
        'Failed to create Cursor issue:',
        res.status,
        await res.text(),
      );
      process.exitCode = 1;
      return;
    }
    const json = await res.json();
    console.warn('📧 Sent error report to Cursor. Issue id:', json.id);
  } catch (_err) {
    console.error('Error while sending report:', err);
    process.exitCode = 1;
  }
}

main();


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
    } catch (error) {
      console.error('Error in :', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    console.log('Stopping ...');
  }
}

// Start the script
if (require.main === module) {
  const script = new ();
  script.start().catch(error => {
    console.error('Failed to start :', error);
    process.exit(1);
  });
}

module.exports = ;
