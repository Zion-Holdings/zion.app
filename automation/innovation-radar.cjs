const fs = require('fs');
const path = require('path');

const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'innovation-radar.json');

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function fetchJson(url, options = {}) {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(`Request failed ${res.status} ${url}`);
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
  const queries = [
    'AI agent',
    'decentralized AI',
    'DAO governance',
    'on-chain agent',
    'web3 AI',
  ];

  const results = [];
  for (const q of queries) {
    const url = `https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=30&query=${encodeURIComponent(q)}`;
    try {
      const data = await fetchJson(url);
      for (const hit of data.hits || []) {
        results.push({
          id: hit.objectID,
          title: hit.title,
          url: hit.url || `https://news.ycombinator.com/item?id=${hit.objectID}`,
          author: hit.author,
          points: hit.points,
          created_at: hit.created_at,
          source: 'HackerNews',
          query: q,
        });
      }
    } catch (e) {
      console.warn('Innovation Radar fetch failed for query:', q, e.message);
    }
  }

  const deduped = uniqueBy(results, (r) => r.url || r.id).sort((a, b) => (new Date(b.created_at)) - (new Date(a.created_at))).slice(0, 60);

  const payload = {
    generatedAt: new Date().toISOString(),
    description: 'AI/DAO innovation radar aggregated from HN Algolia',
    total: deduped.length,
    items: deduped,
  };

  ensureDir(OUTPUT_PATH);
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2));
  console.log(`Innovation Radar written to ${OUTPUT_PATH} with ${deduped.length} items.`);
}

run().catch((err) => {
  console.error('Innovation Radar failed:', err);
  process.exit(0); // do not fail CI; create no-op changes
});