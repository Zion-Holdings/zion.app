/* Autonomous Innovation Digest
   Fetches latest AI innovations from public sources and writes a digest JSON for the site.
*/

const fs = require('fs-extra');
const path = require('path');
const cheerio = require('cheerio');

async function fetchJson(url) {
  const res = await fetch(url, { headers: { 'user-agent': 'zion-automation/1.0' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json();
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'user-agent': 'zion-automation/1.0' } });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

async function getArxiv() {
  try {
    const url = 'http://export.arxiv.org/api/query?search_query=cat:cs.AI&sortBy=lastUpdatedDate&max_results=10';
    const xml = await fetchText(url);
    const $ = cheerio.load(xml, { xmlMode: true });
    const items = [];
    $('entry').each((_, el) => {
      const title = $(el).find('title').first().text().trim();
      const link = $(el).find('id').first().text().trim();
      const summary = $(el).find('summary').first().text().trim();
      const updated = $(el).find('updated').first().text().trim();
      items.push({ source: 'arXiv', title, url: link, date: updated, summary });
    });
    return items;
  } catch (e) {
    console.warn('arXiv fetch failed:', e.message);
    return [];
  }
}

async function getGithubTrending() {
  try {
    const html = await fetchText('https://github.com/trending?since=daily&spoken_language_code=en');
    const $ = cheerio.load(html);
    const items = [];
    $('article.Box-row').slice(0, 10).each((_, el) => {
      const a = $(el).find('h2 a');
      const href = 'https://github.com' + a.attr('href').trim();
      const title = a.text().replace(/\s+/g, ' ').trim();
      const desc = $(el).find('p').text().trim();
      items.push({ source: 'GitHub Trending', title, url: href, summary: desc });
    });
    return items;
  } catch (e) {
    console.warn('GitHub Trending fetch failed:', e.message);
    return [];
  }
}

async function getHuggingFace() {
  try {
    const url = 'https://huggingface.co/api/models?sort=downloads&direction=-1&limit=10';
    const data = await fetchJson(url);
    return data.slice(0, 10).map((m) => ({
      source: 'HuggingFace',
      title: m.modelId || m.id,
      url: `https://huggingface.co/${m.modelId || m.id}`,
      summary: (m.tags || []).slice(0, 6).join(', '),
    }));
  } catch (e) {
    console.warn('HuggingFace fetch failed:', e.message);
    return [];
  }
}

async function run() {
  const started = new Date();
  const [arxiv, trending, hf] = await Promise.all([
    getArxiv(),
    getGithubTrending(),
    getHuggingFace(),
  ]);

  const items = [...arxiv, ...trending, ...hf];
  const digest = { generatedAt: started.toISOString(), items };

  const outDir = path.join(process.cwd(), 'public', 'automation');
  await fs.ensureDir(outDir);
  const outFile = path.join(outDir, 'innovation-digest.json');
  await fs.writeJson(outFile, digest, { spaces: 2 });

  const logDir = path.join(process.cwd(), 'automation_logs');
  await fs.ensureDir(logDir);
  const logFile = path.join(logDir, 'innovation-digest.log');
  const durationMs = Date.now() - started.getTime();
  await fs.appendFile(logFile, `[${new Date().toISOString()}] items=${items.length} durationMs=${durationMs}\n`);

  console.log(`Innovation Digest generated: ${items.length} items -> ${outFile}`);
}

run().catch((e) => {
  console.error('Innovation Digest failed:', e);
  process.exitCode = 1;
});