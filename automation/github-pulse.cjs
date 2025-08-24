const fs = require('fs');
const path = require('path');

const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'github-pulse.json');
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';
const OWNER = 'Zion-Holdings';
const REPO = 'zion.app';

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: {
      'Accept': 'application/vnd.github+json',
      ...(GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {}),
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'Zion-Automation/1.0',
    },
  });
  if (!res.ok) throw new Error(`GitHub API failed ${res.status} ${url}`);
  return res.json();
}

function isoDaysAgo(days) {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
}

async function run() {
  const repoUrl = `https://api.github.com/repos/${OWNER}/${REPO}`;
  const issuesUrl = `https://api.github.com/search/issues?q=repo:${OWNER}/${REPO}+is:issue+updated:>${isoDaysAgo(1)}`;
  const prsUrl = `https://api.github.com/search/issues?q=repo:${OWNER}/${REPO}+is:pr+updated:>${isoDaysAgo(1)}`;
  const starsUrl = `https://api.github.com/repos/${OWNER}/${REPO}/stargazers`;

  let repo = {}, issues = { total_count: 0 }, prs = { total_count: 0 }, stars = [];
  try { repo = await fetchJson(repoUrl); } catch (e) { console.warn('Repo fetch failed', e.message); }
  try { issues = await fetchJson(issuesUrl); } catch (e) { console.warn('Issues fetch failed', e.message); }
  try { prs = await fetchJson(prsUrl); } catch (e) { console.warn('PRs fetch failed', e.message); }
  try {
    stars = await fetchJson(starsUrl);
  } catch (e) { console.warn('Stars fetch failed', e.message); }

  const payload = {
    generatedAt: new Date().toISOString(),
    description: 'GitHub repo pulse (last 24h activity)',
    repo: {
      full_name: repo.full_name,
      open_issues: repo.open_issues_count,
      forks: repo.forks_count,
      watchers: repo.subscribers_count,
      stargazers_count: repo.stargazers_count,
    },
    last24h: {
      issues_updated: issues.total_count || 0,
      prs_updated: prs.total_count || 0,
    },
  };

  ensureDir(OUTPUT_PATH);
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2));
  console.log(`GitHub Pulse written to ${OUTPUT_PATH}.`);
}

run().catch((err) => {
  console.error('GitHub Pulse failed:', err);
  process.exit(0);
});