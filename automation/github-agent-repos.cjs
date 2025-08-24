const fs = require('fs');
const path = require('path');

const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'github-agent-repos.json');
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';

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
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

async function run() {
  const since = isoDaysAgo(3);
  const q = `agent in:name,description,readme created:>${since}`;
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(q)}&sort=stars&order=desc&per_page=50`;

  let items = [];
  try {
    const data = await fetchJson(url);
    items = (data.items || []).map((r) => ({
      id: r.id,
      full_name: r.full_name,
      description: r.description,
      html_url: r.html_url,
      stargazers_count: r.stargazers_count,
      forks_count: r.forks_count,
      language: r.language,
      pushed_at: r.pushed_at,
      created_at: r.created_at,
    }));
  } catch (e) {
    console.warn('GitHub agent repos fetch failed:', e.message);
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    description: 'Recently popular agent-related repositories (created in last 3 days)',
    total: items.length,
    items,
  };

  ensureDir(OUTPUT_PATH);
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2));
  console.log(`GitHub Agent Repos written to ${OUTPUT_PATH} with ${items.length} items.`);
}

run().catch((err) => {
  console.error('GitHub Agent Repos failed:', err);
  process.exit(0);
});