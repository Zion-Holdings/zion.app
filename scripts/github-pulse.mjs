#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = path.join(process.cwd(), 'public');

function isoNow() {
  return new Date().toISOString();
}

function isoFrom(hoursAgo) {
  const d = new Date(Date.now() - hoursAgo * 3600 * 1000);
  return d.toISOString();
}

function getRepoFromEnv() {
  const envRepo = process.env.GITHUB_REPOSITORY; // owner/repo in Actions
  if (envRepo) return envRepo;
  try {
    const pkg = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8'));
    const url = pkg?.repository?.url || '';
    const m = url.match(/github.com[:/](.+?)\.git$/);
    if (m) return m[1];
  } catch {}
  console.error('Unable to determine repository. Set GITHUB_REPOSITORY (owner/repo).');
  process.exit(1);
}

async function ghFetch(endpoint, token, params = '') {
  const url = `https://api.github.com${endpoint}${params}`;
  const res = await fetch(url, {
    headers: {
      'Accept': 'application/vnd.github+json',
      'Authorization': token ? `Bearer ${token}` : '',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'zion-app-automation'
    }
  });
  if (!res.ok) {
    throw new Error(`GitHub API error ${res.status} for ${endpoint}`);
  }
  return res.json();
}

async function main() {
  const repo = getRepoFromEnv();
  const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';
  const since = isoFrom(24);

  const [owner, repoName] = repo.split('/');

  let issues = [];
  let pulls = [];
  try {
    // Issues updated in last 24h (excluding PRs)
    const issuesRes = await ghFetch(`/repos/${owner}/${repoName}/issues`, token, `?since=${encodeURIComponent(since)}&state=all&per_page=100`);
    issues = issuesRes.filter(i => !i.pull_request);
  } catch {}

  try {
    // PRs updated in last 24h
    const prsRes = await ghFetch(`/repos/${owner}/${repoName}/pulls`, token, `?state=all&per_page=100&sort=updated&direction=desc`);
    pulls = prsRes.filter(pr => new Date(pr.updated_at) >= new Date(since));
  } catch {}

  // Summary
  const openedIssues = issues.filter(i => new Date(i.created_at) >= new Date(since) && i.state !== 'closed').length;
  const closedIssues = issues.filter(i => new Date(i.closed_at || 0) >= new Date(since)).length;
  const openedPRs = pulls.filter(pr => new Date(pr.created_at) >= new Date(since) && pr.state !== 'closed').length;
  const mergedPRs = pulls.filter(pr => pr.merged_at && new Date(pr.merged_at) >= new Date(since)).length;

  const report = {
    generatedAt: isoNow(),
    repo,
    windowHours: 24,
    counts: {
      issues: issues.length,
      pulls: pulls.length,
      openedIssues,
      closedIssues,
      openedPRs,
      mergedPRs
    },
    samples: {
      recentIssues: issues.slice(0, 10).map(i => ({ number: i.number, title: i.title, state: i.state, url: i.html_url, updated_at: i.updated_at })),
      recentPRs: pulls.slice(0, 10).map(pr => ({ number: pr.number, title: pr.title, state: pr.state, merged_at: pr.merged_at, url: pr.html_url, updated_at: pr.updated_at }))
    }
  };

  if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  fs.writeFileSync(path.join(PUBLIC_DIR, 'github-pulse.json'), JSON.stringify(report, null, 2) + '\n');
  console.log('GitHub pulse written to public/github-pulse.json');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});