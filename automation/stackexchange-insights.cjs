const fs = require('fs');
const path = require('path');

const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'stackexchange-insights.json');

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
  const tags = ['ai', 'artificial-intelligence', 'ethereum', 'blockchain', 'dao'];
  const url = `https://api.stackexchange.com/2.3/questions?order=desc&sort=creation&tagged=${encodeURIComponent(tags.join(';'))}&site=stackoverflow&pagesize=50&filter=default`;
  let items = [];
  try {
    const data = await fetchJson(url);
    items = (data.items || []).map((q) => ({
      question_id: q.question_id,
      title: q.title,
      link: q.link,
      score: q.score,
      creation_date: q.creation_date,
      tags: q.tags,
      owner: q.owner?.display_name,
      is_answered: q.is_answered,
      answer_count: q.answer_count,
    }));
  } catch (e) {
    console.warn('StackExchange fetch failed:', e.message);
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    description: 'Latest StackOverflow questions for AI/Blockchain/DAO tags',
    total: items.length,
    items,
  };

  ensureDir(OUTPUT_PATH);
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2));
  console.log(`StackExchange Insights written to ${OUTPUT_PATH} with ${items.length} items.`);
}

run().catch((err) => {
  console.error('StackExchange Insights failed:', err);
  process.exit(0);
});