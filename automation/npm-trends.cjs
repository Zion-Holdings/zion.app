const fs = require('fs');
const path = require('path');

const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'npm-trends.json');

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
  const query = 'agent web3 dao snapshot ai agent OR "ai agent"';
  const url = `https://registry.npmjs.org/-/v1/search?text=${encodeURIComponent(query)}&size=50`;
  let items = [];
  try {
    const data = await fetchJson(url);
    items = (data.objects || []).map((o) => ({
      name: o.package?.name,
      version: o.package?.version,
      description: o.package?.description,
      date: o.package?.date,
      links: o.package?.links,
      publisher: o.package?.publisher?.username,
      maintainers: (o.package?.maintainers || []).map((m) => m.username),
      score: o.score?.final,
    }));
  } catch (e) {
    console.warn('npm search failed:', e.message);
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    description: 'npm package search for AI Agents / Web3 / DAO keywords',
    total: items.length,
    items,
  };

  ensureDir(OUTPUT_PATH);
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2));
  console.log(`NPM Trends written to ${OUTPUT_PATH} with ${items.length} items.`);
}

run().catch((err) => {
  console.error('NPM Trends failed:', err);
  process.exit(0);
});