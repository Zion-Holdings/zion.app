#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const OUT_DIR = path.join(__dirname, '..', 'public', 'reports', 'ai-papers');

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'zion.app-automation' } });
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return res.text();
}

async function getArxivRecent() {
  // Using the arXiv recent page for cs.AI
  const url = 'https://arxiv.org/list/cs.AI/recent';
  const html = await fetchText(url);
  const $ = cheerio.load(html);
  const items = [];
  $('dl').find('dt').each((i, el) => {
    const $dt = $(el);
    const $dd = $dt.next('dd');
    const idPath = $dt.find('a[href^="/abs/"]').first().attr('href') || '';
    const id = idPath.replace('/abs/', '').trim();
    const title = $dd.find('div.list-title').text().replace('Title:', '').trim();
    const authors = $dd.find('div.list-authors').text().replace('Authors:', '').trim();
    const subjects = $dd.find('div.list-subjects').text().replace('Subjects:', '').trim();
    if (id && title) {
      items.push({ id, title, authors, subjects, url: `https://arxiv.org${idPath}` });
    }
  });
  return items.slice(0, 40);
}

function renderHTML(items) {
  const rows = items.map((t) => `
    <li>
      <a href="${t.url}" target="_blank" rel="noopener noreferrer">${t.title}</a>
      <div style="color:#555">${t.authors || ''}</div>
      <div style="color:#666">${t.subjects || ''}</div>
    </li>`).join('\n');
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AI Papers Watch</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin: 24px; }
    h1 { margin-bottom: 8px; }
    p { color: #444; }
    li { margin: 10px 0; }
  </style>
</head>
<body>
  <h1>AI Papers Watch</h1>
  <p>Autonomously generated. Source: arXiv cs.AI recent.</p>
  <ol>
    ${rows}
  </ol>
</body>
</html>`;
}

async function main() {
  const items = await getArxivRecent();
  ensureDir(OUT_DIR);
  const now = new Date();
  const stamp = now.toISOString().split('T')[0];
  fs.writeFileSync(path.join(OUT_DIR, 'latest.json'), JSON.stringify({ generatedAt: now.toISOString(), items }, null, 2));
  fs.writeFileSync(path.join(OUT_DIR, `${stamp}.json`), JSON.stringify({ generatedAt: now.toISOString(), items }, null, 2));
  fs.writeFileSync(path.join(OUT_DIR, 'index.html'), renderHTML(items));
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});