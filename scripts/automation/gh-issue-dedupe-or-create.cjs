const fs = require('fs');
const path = require('path');

/**
 * gh-issue-dedupe-or-create.cjs
 * Checks for existing GitHub issues matching a fingerprint label.
 * If a recent open issue exists, adds a comment. Otherwise creates a new issue.
 */
const GH_TOKEN = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
const REPO = process.env.GITHUB_REPOSITORY || 'Zion-support/zion-support.github.io';

async function findExistingIssue(fingerprint) {
  if (!GH_TOKEN) return null;
  
  const https = require('https');
  const url = `https://api.github.com/repos/${REPO}/issues?labels=${encodeURIComponent(fingerprint)}&state=open`;
  
  return new Promise((resolve) => {
    const req = https.get(url, {
      headers: {
        'Authorization': `Bearer ${GH_TOKEN}`,
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'hermes-agent'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const issues = JSON.parse(data);
          if (Array.isArray(issues) && issues.length > 0) {
            resolve(issues[0]);
          } else {
            resolve(null);
          }
        } catch {
          resolve(null);
        }
      });
    });
    req.on('error', () => resolve(null));
    req.setTimeout(10000, () => { req.destroy(); resolve(null); });
  });
}

async function createIssue(title, body, labels) {
  if (!GH_TOKEN) {
    console.log('GH_TOKEN not available, cannot create issue');
    return null;
  }
  
  const https = require('https');
  const payload = JSON.stringify({ title, body, labels });
  
  return new Promise((resolve) => {
    const req = https.request(`https://api.github.com/repos/${REPO}/issues`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GH_TOKEN}`,
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'hermes-agent',
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          console.log(`Created issue #${result.number}: ${result.html_url}`);
          resolve(result);
        } catch {
          resolve(null);
        }
      });
    });
    req.on('error', () => resolve(null));
    req.setTimeout(10000, () => { req.destroy(); resolve(null); });
    req.write(payload);
    req.end();
  });
}

async function addComment(issueNumber, body) {
  if (!GH_TOKEN) return;
  
  const https = require('https');
  const payload = JSON.stringify({ body });
  
  return new Promise((resolve) => {
    const req = https.request(`https://api.github.com/repos/${REPO}/issues/${issueNumber}/comments`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GH_TOKEN}`,
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'hermes-agent',
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    }, (res) => {
      res.on('data', () => {});
      res.on('end', () => resolve());
    });
    req.on('error', () => resolve());
    req.setTimeout(10000, () => { req.destroy(); resolve(); });
    req.write(payload);
    req.end();
  });
}

module.exports = { findExistingIssue, createIssue, addComment };

// CLI mode
if (require.main === module) {
  const args = process.argv.slice(2);
  const fingerprint = args[0] || 'autonomous';
  const title = args[1] || 'Autonomous Issue';
  const body = args[2] || 'No description provided.';
  const labels = (args[3] || 'autonomous').split(',');
  
  findExistingIssue(fingerprint).then(async (existing) => {
    if (existing) {
      console.log(`Found existing issue #${existing.number}, adding comment`);
      await addComment(existing.number, `Update (dedupe): ${body}`);
    } else {
      const issue = await createIssue(title, body, labels);
      if (issue) {
        console.log(`Created new issue #${issue.number}`);
      }
    }
  });
}
