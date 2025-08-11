#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const OUT_DIR = path.join(__dirname, '..', 'public', 'reports', 'github-trending');

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'zion.app-automation' } });
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return res.text();
}

async function getTrending({ since = 'daily', language = '' } = {}) {
  const query = new URLSearchParams();
  if (since) query.set('since', since);
  if (language) query.set('language', language);
  const url = `https://github.com/trending${language ? '/' + encodeURIComponent(language) : ''}?${query.toString()}`;
  const html = await fetchText(url);
  const $ = cheerio.load(html);
  const repos = [];
  $('article.Box-row').each((_, el) => {
    const $el = $(el);
    const title = $el.find('h2 a').text().replace(/\s+/g, ' ').trim();
    const href = $el.find('h2 a').attr('href');
    const repo = href ? `https://github.com${href}` : '';
    const desc = $el.find('p').first().text().replace(/\s+/g, ' ').trim();
    const starsText = $el.find("a[href$='stargazers']").first().text().replace(/\s+/g, ' ').trim();
    const todayText = $el.find('.color-fg-muted .d-inline-block.float-sm-right').text().replace(/\s+/g, ' ').trim();
    repos.push({ title, repo, desc, starsText, todayText, language: language || 'all', since });
  });
  return repos;
}

function renderHTML(items) {
  const rows = items.map((t) => `
    <li>
      <a href="${t.repo}" target="_blank" rel="noopener noreferrer">${t.title}</a>
      <small> — ${t.desc || ''}</small>
      <div style="color:#555">${t.starsText || ''} ${t.todayText ? '(' + t.todayText + ')' : ''}</div>
    </li>`).join('\n');
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>GitHub Trending</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin: 24px; }
    h1 { margin-bottom: 8px; }
    p { color: #444; }
    li { margin: 10px 0; }
  </style>
</head>
<body>
  <h1>GitHub Trending</h1>
  <p>Autonomously generated. Source: github.com/trending.</p>
  <ol>
    ${rows}
  </ol>
</body>
</html>`;
}

async function main() {
  const [allDaily, tsDaily] = await Promise.all([
    getTrending({ since: 'daily' }),
    getTrending({ since: 'daily', language: 'typescript' }),
  ]);
  const items = [...allDaily.slice(0, 20), ...tsDaily.slice(0, 10)];
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