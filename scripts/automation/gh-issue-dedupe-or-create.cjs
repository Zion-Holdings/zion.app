#!/usr/bin/env node
/**
 * GitHub Issue Dedupe or Create
 *
 * Creates a GitHub issue with deduplication. If an open issue with the same
 * fingerprint already exists, it adds a comment instead of creating a new one.
 *
 * Env:
 *   GITHUB_TOKEN / GH_TOKEN  - for API access
 *   GITHUB_REPOSITORY        - owner/repo
 *   ISSUE_TITLE              - issue title
 *   ISSUE_BODY_FILE          - path to file containing issue body
 *   ISSUE_FINGERPRINT        - dedup key (search text in existing issues)
 *   ISSUE_LABELS             - comma-separated labels
 *   COOLDOWN_HOURS           - skip if last created within these hours (default 0)
 *   CLOSE_COMMENT            - when closing, comment to add
 */
const fs = require('fs');
const path = require('path');

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
const GITHUB_REPOSITORY = process.env.GITHUB_REPOSITORY || '';
const ISSUE_TITLE = process.env.ISSUE_TITLE || 'Untitled Issue';
const ISSUE_BODY_FILE = process.env.ISSUE_BODY_FILE || '';
const ISSUE_FINGERPRINT = process.env.ISSUE_FINGERPRINT || 'no-fingerprint';
const ISSUE_LABELS = (process.env.ISSUE_LABELS || '').split(',').map(l => l.trim()).filter(Boolean);
const COOLDOWN_HOURS = parseInt(process.env.COOLDOWN_HOURS || '0', 10);
const CLOSE_COMMENT = process.env.CLOSE_COMMENT || '';

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
  if (!GITHUB_TOKEN || !GITHUB_REPOSITORY) {
    console.log('⚠️ No GITHUB_TOKEN or GITHUB_REPOSITORY set');
    process.exit(0);
  }

  const [owner, repo] = GITHUB_REPOSITORY.split('/');
  const apiBase = `https://api.github.com/repos/${owner}/${repo}/issues`;

  // Read body from file
  let body = '';
  if (ISSUE_BODY_FILE && fs.existsSync(ISSUE_BODY_FILE)) {
    body = fs.readFileSync(ISSUE_BODY_FILE, 'utf8');
  } else {
    body = `Issue auto-created by GitHub Actions.\n\nfingerprint: ${ISSUE_FINGERPRINT}`;
  }

  // Append fingerprint
  if (!body.includes(ISSUE_FINGERPRINT)) {
    body += `\n\n<!-- fingerprint: ${ISSUE_FINGERPRINT} -->\n`;
  }

  try {
    // Search for existing open issue with same fingerprint
    const searchUrl = `https://api.github.com/search/issues?q=repo:${owner}/${repo}+is:open+${encodeURIComponent(ISSUE_FINGERPRINT)}&per_page=5`;
    const searchResult = makeRequest(searchUrl);
    const searchData = JSON.parse(searchResult);

    if (searchData.items && searchData.items.length > 0) {
      const existing = searchData.items[0];

      // Check cooldown
      if (COOLDOWN_HOURS > 0) {
        const createdAt = new Date(existing.created_at).getTime();
        const hoursAgo = (Date.now() - createdAt) / (1000 * 3600);
        if (hoursAgo < COOLDOWN_HOURS) {
          console.log(`ℹ️ Issue #${existing.number} updated within cooldown (${Math.round(hoursAgo)}h ago). Skipping.`);
          process.exit(0);
        }
      }

      // Add comment to existing issue
      const comment = `[${new Date().toISOString().slice(0, 10)}] Re-evaluated: ${body.slice(0, 500)}...`;
      try {
        makeRequest(`${apiBase}/${existing.number}/comments`, {
          method: 'POST',
          body: { body: comment }
        });
      } catch (e) {
        // Non-critical
      }
      console.log(`✅ Updated existing issue #${existing.number} (added comment)`);
      process.exit(0);
    }

    // No existing issue found — create new one
    const createBody = JSON.stringify({
      title: ISSUE_TITLE,
      body: body,
      labels: ISSUE_LABELS.length > 0 ? ISSUE_LABELS : undefined
    });

    const result = makeRequest(apiBase, {
      method: 'POST',
      body: JSON.parse(createBody)
    });
    const created = JSON.parse(result);

    if (created.number) {
      console.log(`✅ Created issue #${created.number}: ${ISSUE_TITLE}`);
    } else {
      console.log(`ℹ️ Issue creation response: ${JSON.stringify(created).slice(0, 200)}`);
    }
  } catch (e) {
    console.error('❌ Issue dedupe/create failed:', e.message);
    process.exit(0);
  }
}

main();
