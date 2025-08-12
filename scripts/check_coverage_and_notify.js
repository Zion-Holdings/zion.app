#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

const summaryPath = process.argv[2] || 'logs/coverage/hourly/coverage-summary.json';

if (!fs.existsSync(summaryPath)) {
  console.error(`Coverage summary not found at ${summaryPath}`);
  process.exit(1);
}

let summary;
try {
  summary = JSON.parse(fs.readFileSync(summaryPath, 'utf8'));
} catch (err) {
  console.error('Failed to read coverage summary:', err);
  process.exit(1);
}

const pct = summary.total?.statements?.pct || 0;

if (pct < 85) {
  const title = 'Test coverage dropped below 85%';
  const body = `Automated hourly test run detected test coverage of ${pct}%. Please improve the tests to maintain at least 85% coverage.`;
  try {
    execSync(`gh issue create --title "${title}" --body "${body}"`, { stdio: 'inherit' });
  } catch (err) {
    console.error('Failed to create GitHub issue:', err);
  }
} else {
  console.log(`Coverage is ${pct}%, which meets the threshold.`);
}
