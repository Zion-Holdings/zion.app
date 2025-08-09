const fs = require('fs');
const path = require('path');

const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'global-bounties.json');
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || process.env.TOKEN || '';

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
    },
  });
  if (!res.ok) throw new Error(`GitHub API failed ${res.status} ${url}`);
  return res.json();
}

function uniqueBy(array, keyFn) {
  const seen = new Set();
  const out = [];
  for (const item of array) {
    const k = keyFn(item);
    if (!seen.has(k)) {
      seen.add(k);
      out.push(item);
    }
  }
  return out;
}

async function run() {
  const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().substring(0, 10);
  const queries = [
    `label:bounty state:open created:>${since}`,
    `label:"help wanted" state:open created:>${since}`,
    `label:"good first issue" state:open created:>${since}`,
  ];

  const languages = ['TypeScript', 'Rust', 'Python', 'Go', 'Solidity'];

  let items = [];
  for (const q of queries) {
    for (const lang of languages) {
      const url = `https://api.github.com/search/issues?q=${encodeURIComponent(q + ' language:' + lang)}&sort=created&order=desc&per_page=50`;
      try {
        const data = await fetchJson(url);
        for (const issue of data.items || []) {
          items.push({
            id: issue.id,
            number: issue.number,
            repo: issue.repository_url.replace('https://api.github.com/repos/', ''),
            title: issue.title,
            url: issue.html_url,
            state: issue.state,
            labels: issue.labels?.map(l => typeof l === 'string' ? l : l.name) || [],
            created_at: issue.created_at,
            score: issue.score,
            language: lang,
            query: q,
          });
        }
      } catch (e) {
        console.warn('Bounties fetch failed for', lang, q, e.message);
      }
    }
  }

  items = uniqueBy(items, (i) => i.url).sort((a, b) => (new Date(b.created_at)) - (new Date(a.created_at))).slice(0, 150);

  const payload = {
    generatedAt: new Date().toISOString(),
    description: 'Open issues aggregated as potential bounties across popular languages',
    total: items.length,
    items,
  };

  ensureDir(OUTPUT_PATH);
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2));
  console.log(`Global Bounties written to ${OUTPUT_PATH} with ${items.length} items.`);
}

run().catch((err) => {
  console.error('Global Bounties failed:', err);
  process.exit(0);
});