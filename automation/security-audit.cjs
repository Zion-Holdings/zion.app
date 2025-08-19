#!/usr/bin/env node

'use strict';

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'security-audit.log');
if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

function runAudit() {
  const result = spawnSync('npm', ['audit', '--production', '--json'], { encoding: 'utf8' });
  if (result.error) throw result.error;
  const stdout = result.stdout || '';
  try {
    return JSON.parse(stdout);
  } catch (e) {
    throw new Error('Failed to parse npm audit JSON');
  }
}

function summarize(auditJson) {
  const meta = auditJson.metadata || auditJson;
  const advisoriesCount = meta.vulnerabilities || meta.vulns || {};
  const totals = {
    critical: advisoriesCount.critical || 0,
    high: advisoriesCount.high || 0,
    moderate: advisoriesCount.moderate || 0,
    low: advisoriesCount.low || 0,
  };
  const total = Object.values(totals).reduce((a, b) => a + b, 0);
  return { totals, total };
}

async function githubRequest(method, url, body) {
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';
  if (!token) return null;
  const res = await fetch(url, {
    method,
    headers: {
      'authorization': `Bearer ${token}`,
      'accept': 'application/vnd.github+json',
      'content-type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status}`);
  return await res.json();
}

async function ensureIssue(owner, repo, title, body) {
  try {
    const issues = await githubRequest('GET', `https://api.github.com/repos/${owner}/${repo}/issues?state=open&per_page=100`);
    if (!issues) return;
    const existing = issues.find(i => i.title === title);
    if (existing) {
      await githubRequest('POST', `${existing.url}/comments`, { body });
      return;
    }
    await githubRequest('POST', `https://api.github.com/repos/${owner}/${repo}/issues`, { title, body, labels: ['security','automation'] });
  } catch (e) {
    log(`GitHub issue ensure failed: ${e.message}`);
  }
}

(async function main(){
  try {
    const audit = runAudit();
    const { totals, total } = summarize(audit);
    log(`Vulnerabilities → total=${total} critical=${totals.critical} high=${totals.high} moderate=${totals.moderate} low=${totals.low}`);

    // If running in GitHub Actions
    const repoFull = process.env.GITHUB_REPOSITORY || '';
    const [owner, repo] = repoFull.split('/');

    if (total > 0 && owner && repo) {
      const title = 'Security audit detected vulnerabilities';
      const body = `Automated npm audit report:\n\n- Critical: ${totals.critical}\n- High: ${totals.high}\n- Moderate: ${totals.moderate}\n- Low: ${totals.low}`;
      await ensureIssue(owner, repo, title, body);
    }

    // Exit non-zero for critical/high to fail job
    if (totals.critical > 0 || totals.high > 0) process.exit(1);
    process.exit(0);
  } catch (e) {
    log(`Audit failed: ${e.message}`);
    process.exit(1);
  }
})();