const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const OUTPUT_PATH = path.join(__dirname, '..', 'data', 'arxiv-research.json');

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Zion-Automation/1.0' } });
  if (!res.ok) throw new Error(`Request failed ${res.status} ${url}`);
  return res.text();
}

function parseArxivAtom(atom) {
  const $ = cheerio.load(atom, { xmlMode: true });
  const items = [];
  $('entry').each((_, el) => {
    const $el = $(el);
    const id = $el.find('id').text();
    const title = $el.find('title').text().trim().replace(/\s+/g, ' ');
    const summary = $el.find('summary').text().trim().replace(/\s+/g, ' ');
    const link = $el.find('link[rel="alternate"]').attr('href') || id;
    const published = $el.find('published').text();
    const updated = $el.find('updated').text();
    const authors = $el.find('author > name').map((i, a) => $(a).text()).get();
    items.push({ id, title, link, summary, published, updated, authors });
  });
  return items;
}

async function run() {
  const query = 'all:(governance OR decentralized OR DAO OR agents) AND cat:(cs.AI OR cs.MA)';
  const url = `http://export.arxiv.org/api/query?search_query=${encodeURIComponent(query)}&start=0&max_results=40&sortBy=submittedDate&sortOrder=descending`;
  let items = [];
  try {
    const atom = await fetchText(url);
    items = parseArxivAtom(atom).slice(0, 40);
  } catch (e) {
    console.warn('arXiv fetch failed:', e.message);
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    description: 'arXiv AI governance/agents research feed',
    total: items.length,
    items,
  };

  ensureDir(OUTPUT_PATH);
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2));
  console.log(`ArXiv Research written to ${OUTPUT_PATH} with ${items.length} items.`);
}

run().catch((err) => {
  console.error('ArXiv Research failed:', err);
  process.exit(0);
});