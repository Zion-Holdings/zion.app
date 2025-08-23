#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

async function fetchTitles(url, selector) {
  try {
    const res = await axios.get(url, { timeout: 10000, headers: { 'User-Agent': 'zion-admin-insights-bot/1.0' } });
    const $ = cheerio.load(res.data);
    const titles = [];
    $(selector).each((_, el) => {
      const title = $(el).text().trim();
      const href = $(el).attr('href');
      if (title) titles.push({ title, url: href && href.startsWith('http') ? href : url });
    });
    return titles.slice(0, 10);
  } catch (e) {
    return [];
  }
}

async function buildInsights() {
  const items = [];
  const sources = [
    { url: 'https://ai.googleblog.com/', selector: 'h2.entry-title a' },
    { url: 'https://openai.com/research', selector: 'a.Link_link__*' },
    { url: 'https://huggingface.co/blog', selector: 'a.blog-post-card' },
  ];
  for (const s of sources) {
    const ts = await fetchTitles(s.url, s.selector);
    items.push(...ts);
  }
  return { items, updatedAt: new Date().toISOString() };
}

async function writeInsights(data) {
  const dir = path.join(__dirname, '..', 'data', 'admin');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'insights.json'), JSON.stringify(data, null, 2));
}

async function main() {
  const data = await buildInsights();
  await writeInsights(data);
  console.log(`[admin-insights-researcher] Updated ${data.items.length} items at ${data.updatedAt}`);
  if (process.argv.includes('--watch')) {
    setInterval(async () => {
      const d = await buildInsights();
      await writeInsights(d);
      console.log(`[admin-insights-researcher] Updated ${d.items.length} items at ${d.updatedAt}`);
    }, 60 * 60 * 1000);
  }
}

if (require.main === module) main();