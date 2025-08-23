#!/usr/bin/env node
/**
 * Summarize failing Jest tests and open a GitHub issue labeled 'autofix'
 * so Codex can attempt a fix via the codex-fix workflow.
 */
const fs = require('fs');
const path = require('path');
const { Octokit } = require('@octokit/rest');

const RESULTS_DIR = path.resolve(__dirname, '..', 'test-results');

function findLatestReport() {
  if (!fs.existsSync(RESULTS_DIR)) return null;
  const files = fs.readdirSync(RESULTS_DIR)
    .filter(f => f.startsWith('jest-results-') && f.endsWith('.json'))
    .map(f => ({ file: f, time: fs.statSync(path.join(RESULTS_DIR, f)).mtimeMs }))
    .sort((a, b) => b.time - a.time);
  return files[0] ? path.join(RESULTS_DIR, files[0].file) : null;
}

function summarizeFailures(data) {
  const failedSuites = data.testResults.filter(tr => tr.numFailingTests > 0);
  const lines = failedSuites.flatMap(suite =>
    suite.assertionResults
      .filter(ar => ar.status === 'failed')
      .map(ar => `• ${ar.fullName}\n  at ${suite.name}`)
  );
  return lines.join('\n');
}

async function main() {
  const reportPath = findLatestReport();
  if (!reportPath) {
    console.error('No Jest report found. Run npm run test:collect first.');
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
  if (data.numFailedTests === 0) {
    console.log('✅ No failing tests — nothing to report.');
    return;
  }

  const summary = summarizeFailures(data);
  const issueTitle = `Automated test failures detected (${new Date().toISOString().split('T')[0]})`;
  const bodyLines = [
    `Automated test run detected **${data.numFailedTests}** failing tests.`,
    '',
    '```',
    summary,
    '```'
  ];

  const token = process.env.GITHUB_TOKEN;
  const repoSlug = process.env.GITHUB_REPOSITORY;
  if (!token || !repoSlug) {
    console.error('GITHUB_TOKEN or GITHUB_REPOSITORY env vars missing.');
    process.exit(1);
  }
  const [owner, repo] = repoSlug.split('/');
  const octokit = new Octokit({ auth: token });

  try {
    await octokit.rest.issues.create({
      owner,
      repo,
      title: issueTitle,
      body: bodyLines.join('\n'),
      labels: ['autofix']
    });
    console.log('📨 Created issue for Codex autofix');
  } catch (err) {
    console.error('Failed to create issue:', err.message);
    process.exit(1);
  }
}

main();
