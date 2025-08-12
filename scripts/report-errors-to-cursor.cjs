#!/usr/bin/env node
/*
 * Summarise latest Jest JSON report and send to Cursor API for automated fixing.
 * Requires env vars: CURSOR_API_KEY, CURSOR_PROJECT_ID
 */
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const RESULTS_DIR = path.resolve(__dirname, '..', 'test-results');

function findLatestReport() {
  if (!fs.existsSync(RESULTS_DIR)) return null;
  const files = fs.readdirSync(RESULTS_DIR)
    .filter(f => f.startsWith('jest-results-') && f.endsWith('.json'))
    .map(f => ({ f, time: fs.statSync(path.join(RESULTS_DIR, f)).mtimeMs }))
    .sort((a, b) => b.time - a.time);
  return files[0] ? path.join(RESULTS_DIR, files[0].f) : null;
}

async function main() {
  const reportPath = findLatestReport();
  if (!reportPath) {
    console.error('No Jest report found. Run npm run test:collect first.');
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
  const failedSuites = data.testResults.filter(tr => tr.numFailingTests > 0);
  if (failedSuites.length === 0) {
    console.log('✅ No failing tests — nothing to report.');
    return;
  }

  const summaryLines = failedSuites.flatMap(suite => {
    return suite.assertionResults
      .filter(ar => ar.status === 'failed')
      .map(ar => `• ${ar.fullName}\n  at ${suite.name}`);
  });

  const payload = {
    projectId: process.env.CURSOR_PROJECT_ID,
    message: `Automated test run detected ${data.numFailedTests} failing tests.\n` +
      summaryLines.join('\n'),
  };

  const apiKey = process.env.CURSOR_API_KEY;
  if (!apiKey) {
    console.error('CURSOR_API_KEY not set; printing payload instead:');
    console.log(payload.message);
    return;
  }

  try {
    const res = await fetch('https://api.cursor.sh/v1/issues', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error('Failed to create Cursor issue:', res.status, await res.text());
      process.exitCode = 1;
      return;
    }
    const json = await res.json();
    console.log('📨 Sent error report to Cursor. Issue id:', json.id);
  } catch (err) {
    console.error('Error while sending report:', err);
    process.exitCode = 1;
  }
}

main(); 