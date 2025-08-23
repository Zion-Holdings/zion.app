#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'public', 'reports', 'hn-top');

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }

async function fetchJSON(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'zion.app-automation' } });
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return res.json();
}

async function getTopIds(limit = 60) {
  const ids = await fetchJSON('https://hacker-news.firebaseio.com/v0/topstories.json');
  return (ids || []).slice(0, limit);
}

async function getItem(id) {
  return fetchJSON(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
}

function renderHTML(items) {
  const rows = items.map((t) => `
    <li>
      <a href="${t.url || `https://news.ycombinator.com/item?id=${t.id}` }" target="_blank" rel="noopener noreferrer">${t.title}</a>
      <small> — ${t.score || 0} points by ${t.by}</small>
    </li>`).join('\n');
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HN Top Stories</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin: 24px; }
    h1 { margin-bottom: 8px; }
    p { color: #444; }
    li { margin: 10px 0; }
  </style>
</head>
<body>
  <h1>Hacker News Top Stories</h1>
  <p>Autonomously generated. Source: Hacker News official API.</p>
  <ol>
    ${rows}
  </ol>
</body>
</html>`;
}

async function main() {
  const ids = await getTopIds(60);
  const itemsRaw = await Promise.all(ids.map(getItem));
  const items = itemsRaw.filter(Boolean).sort((a, b) => (b.score || 0) - (a.score || 0)).slice(0, 40);
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