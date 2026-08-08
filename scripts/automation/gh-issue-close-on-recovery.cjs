#!/usr/bin/env node
/**
 * GitHub Issue Close on Recovery
 *
 * Finds open GitHub issues matching a fingerprint and closes them when
 * the system has recovered (e.g., status returned to healthy).
 *
 * Env:
 *   GITHUB_TOKEN / GH_TOKEN  - for API access
 *   GITHUB_REPOSITORY        - owner/repo
 *   ISSUE_FINGERPRINT        - search text to find open issues
 *   CLOSE_COMMENT            - comment to add before closing
 */
const fs = require('fs');
const path = require('path');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
const GITHUB_REPOSITORY = process.env.GITHUB_REPOSITORY || '';
const ISSUE_FINGERPRINT = process.env.ISSUE_FINGERPRINT || '';
const CLOSE_COMMENT = process.env.CLOSE_COMMENT || 'Auto-closing: recovered to healthy state.';

function makeRequest(url, options = {}) {
  const { execSync } = require('child_process');
  const token = GITHUB_TOKEN;
  let cmd = `curl -sL -H "Authorization: token ${token}" -H "Accept: application/vnd.github+json" "${url}"`;
  if (options.method) {
    cmd = `curl -sL -X ${options.method} -H "Authorization: token ${token}" -H "Accept: application/vnd.github+json" "${url}"`;
    if (options.body) {
      cmd += ` -d '${JSON.stringify(options.body).replace(/'/g, "'\\''")}'`;
    }
  }
  return execSync(cmd, { timeout: 15000, encoding: 'utf8' });
}

function main() {
  if (!GITHUB_TOKEN || !GITHUB_REPOSITORY || !ISSUE_FINGERPRINT) {
    console.log('⚠️ Missing GITHUB_TOKEN, GITHUB_REPOSITORY, or ISSUE_FINGERPRINT');
    process.exit(0);
  }

  const [owner, repo] = GITHUB_REPOSITORY.split('/');
  const searchUrl = `https://api.github.com/search/issues?q=repo:${owner}/${repo}+is:open+${encodeURIComponent(ISSUE_FINGERPRINT)}&per_page=10`;

  try {
    const searchResult = makeRequest(searchUrl);
    const searchData = JSON.parse(searchResult);
    const items = searchData.items || [];

    if (items.length === 0) {
      console.log('✅ No open issues found for fingerprint — nothing to close');
      process.exit(0);
    }

    for (const issue of items) {
      // Skip PRs
      if (issue.pull_request) continue;

      // Add close comment
      try {
        makeRequest(`https://api.github.com/repos/${owner}/${repo}/issues/${issue.number}/comments`, {
          method: 'POST',
          body: { body: CLOSE_COMMENT }
        });
      } catch (e) {
        // Non-critical
      }

      // Close the issue
      const closeResult = makeRequest(`https://api.github.com/repos/${owner}/${repo}/issues/${issue.number}`, {
        method: 'PATCH',
        body: { state: 'closed', state_reason: 'completed' }
      });
      console.log(`✅ Closed issue #${issue.number}: ${issue.title}`);
    }
  } catch (e) {
    console.error('⚠️ Issue close on recovery failed:', e.message);
    process.exit(0);
  }
}

main();
