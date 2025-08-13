#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const { fetchAndExtract } = require('./lib/web-research.cjs');
const { summarizeWithOpenAI } = require('./lib/summarize.cjs');

const OUT_PAGE = path.join(__dirname, '..', 'pages', 'newsroom.tsx');

const SOURCES = [
  { name: 'TechCrunch', url: 'https://techcrunch.com/' },
  { name: 'The Verge', url: 'https://www.theverge.com/' },
  { name: 'Hacker News', url: 'https://news.ycombinator.com/' }
];

async function fetchHtml(url) { try { const r = await axios.get(url, { timeout: 15000 }); return r.data || ''; } catch { return ''; } }

function extract($, baseUrl) {
  const seen = new Set();
  const push = (title, href, source) => {
    const t = (title || '').trim().replace(/\s+/g, ' ');
    if (!t || t.length < 10) return;
    let u = href || '';
    if (u && !/^https?:/i.test(u)) { try { u = new URL(u, baseUrl).toString(); } catch { u = ''; } }
    if (!u) return;
    const key = `${t}|${u}`.toLowerCase();
    if (seen.has(key)) return; seen.add(key);
    return { title: t, url: u, source };
  };

  const items = [];
  $('h1 a, h2 a, h3 a, a.storylink, a[data-analytics-link], .c-entry-box--compact__title a').each((_, el) => {
    const href = $(el).attr('href');
    const title = $(el).text();
    const item = push(title, href, baseUrl);
    if (item) items.push(item);
  });
  return items.slice(0, 20);
}

async function collect() {
  const all = [];
  for (const s of SOURCES) {
    const html = await fetchHtml(s.url);
    if (!html) continue;
    const $ = cheerio.load(html);
    const items = extract($, s.url).map(x => ({ ...x, source: s.name }));
    all.push(...items);
  }
  // dedupe by url
  const unique = [];
  const seen = new Set();
  for (const it of all) { if (!seen.has(it.url)) { seen.add(it.url); unique.push(it); } }
  return unique.slice(0, 30);
}

function renderPage(items) {
  const list = items.map(it => `          <li className=\"py-3\">\n            <a href=\"${it.url}\" target=\"_blank\" rel=\"noopener\" className=\"text-cyan-300 hover:text-cyan-200 underline\">${it.title.replace(/`/g, '\\`')}</a>\n            <span className=\"text-white/50 ml-2\">(${it.source})</span>\n            ${it.summary ? `\n            <div className=\"mt-1 text-sm text-white/70\">${it.summary.replace(/`/g, '\\`')}</div>` : ''}\n          </li>`).join('\n');

  return `import Head from 'next/head';

export default function Newsroom() {
  return (
    <div className=\"min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white\">\n      <Head>\n        <title>Newsroom — Curated Tech Headlines</title>\n        <meta name=\"description\" content=\"Curated technology and AI headlines from reputable sources.\" />\n      </Head>\n      <main className=\"container mx-auto px-4 py-12\">\n        <h1 className=\"text-4xl font-extrabold mb-2\">Newsroom</h1>\n        <p className=\"text-white/70 mb-6\">Updated automatically from multiple sources.</p>\n        <ul className=\"list-disc pl-6 space-y-1\">\n${list}\n        </ul>\n      </main>\n    </div>\n  );\n}\n`;
}

async function main() {
  const items = await collect();
  // Enrich with summaries via lightweight fetch+LLM
  for (let i = 0; i < items.length; i += 1) {
    const it = items[i];
    try {
      const text = await fetchAndExtract(it.url);
      if (!text) continue;
      // eslint-disable-next-line no-await-in-loop
      const summary = await summarizeWithOpenAI(text, { bullets: false });
      if (summary) it.summary = summary;
    } catch {}
  }
  const page = renderPage(items);
  fs.writeFileSync(OUT_PAGE, page, 'utf8');
  console.log(`Newsroom updated with ${items.length} item(s).`);
}

main();