const fs = require('fs');
const path = require('path');

const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'agentic-news.json');

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function fetchJson(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Zion-Automation/1.0' } });
  if (!res.ok) throw new Error(`Request failed ${res.status} ${url}`);
  return res.json();
}

async function run() {
  const hnUrl = 'https://hn.algolia.com/api/v1/search?query=agent%20AI%20governance&tags=story&hitsPerPage=20&numericFilters=points%3E20';
  const redditUrl = 'https://www.reddit.com/r/MachineLearning+ArtificialInteligence+ethdev/search.json?q=agent%20OR%20agents%20OR%20governance&restrict_sr=0&sort=new&limit=30';

  let items = [];
  try {
    const hn = await fetchJson(hnUrl);
    items.push(...(hn.hits || []).map((h) => ({ source: 'HackerNews', title: h.title, url: h.url || `https://news.ycombinator.com/item?id=${h.objectID}`, points: h.points, created_at: h.created_at })));
  } catch (e) { console.warn('HN fetch failed:', e.message); }

  try {
    const rd = await fetchJson(redditUrl);
    items.push(...(rd.data?.children || []).map((p) => ({ source: 'Reddit', title: p.data.title, url: `https://reddit.com${p.data.permalink}`, score: p.data.score, created_utc: p.data.created_utc })));
  } catch (e) { console.warn('Reddit fetch failed:', e.message); }

  const payload = {
    generatedAt: new Date().toISOString(),
    description: 'Agent/AI governance news from HN and Reddit',
    total: items.length,
    items,
  };

  ensureDir(OUTPUT_PATH);
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2));
  console.log(`Agentic News written to ${OUTPUT_PATH} with ${items.length} items.`);
}

run().catch((err) => {
  console.error('Agentic News failed:', err);
  process.exit(0);
});