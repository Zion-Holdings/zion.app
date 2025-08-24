const fs = require('fs');
const path = require('path');

const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'github-contributors.json');
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

async function run() {
  const url = `https://api.github.com/repos/${OWNER}/${REPO}/contributors?per_page=100&anon=true`;
  let items = [];
  try {
    const data = await fetchJson(url);
    items = (data || []).map((c) => ({
      login: c.login || c.name,
      contributions: c.contributions,
      avatar_url: c.avatar_url,
      html_url: c.html_url,
      type: c.type || 'User',
    }));
  } catch (e) {
    console.warn('Contributors fetch failed:', e.message);
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    description: 'Recent contributors for this repository',
    total: items.length,
    items,
  };

  ensureDir(OUTPUT_PATH);
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2));
  console.log(`GitHub Contributors written to ${OUTPUT_PATH} with ${items.length} items.`);
}

run().catch((err) => {
  console.error('GitHub Contributors failed:', err);
  process.exit(0);
});