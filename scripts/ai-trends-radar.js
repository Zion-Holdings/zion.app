#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'public', 'reports', 'ai-trends');

async function fetchJSON(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'zion.app-automation' } });
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return res.json();
}

async function getHackerNewsTrends() {
  const url = 'https://hn.algolia.com/api/v1/search?query=AI&tags=story&numericFilters=points>50&hitsPerPage=20';
  const json = await fetchJSON(url);
  return (json.hits || []).map(h => ({
    source: 'Hacker News',
    title: h.title,
    url: h.url || `https://news.ycombinator.com/item?id=${h.objectID}`,
    points: h.points,
    time: h.created_at
  }));
}

async function getRedditTrends() {
  const url = 'https://www.reddit.com/r/MachineLearning/top.json?t=day&limit=20';
  const json = await fetchJSON(url);
  const children = (json.data && json.data.children) || [];
  return children
    .map(c => c.data)
    .filter(p => p && !p.stickied)
    .map(p => ({
      source: 'Reddit r/MachineLearning',
      title: p.title,
      url: `https://www.reddit.com${p.permalink}`,
      points: p.ups,
      time: new Date(p.created_utc * 1000).toISOString()
    }));
}

function dedupeByTitle(items) {
  const seen = new Set();
  const result = [];
  for (const item of items) {
    const key = (item.title || '').trim().toLowerCase();
    if (!key) continue;
    if (!seen.has(key)) {
      seen.add(key);
      result.push(item);
    }
  }
  return result;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function renderHTML(trends) {
  const rows = trends.map(t => `
    <li>
      <a href="${t.url}" target="_blank" rel="noopener noreferrer">${t.title}</a>
      <small> — ${t.source} • ${t.points ?? 0} pts</small>
    </li>`).join('\n');
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AI Trends Radar</title>
  <style>
    body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, sans-serif; margin: 24px; }
    h1 { margin-bottom: 8px; }
    p { color: #444; }
    li { margin: 8px 0; }
  </style>
</head>
<body>
  <h1>AI Trends Radar</h1>
  <p>Autonomously generated. Sources: Hacker News${trends.some(t => t.source.includes('Reddit')) ? ', Reddit r/MachineLearning' : ''}.</p>
  <ol>
    ${rows}
  </ol>
</body>
</html>`;
}

async function safe(fn, label) {
  try {
    return await fn();
  } catch (e) {
    console.warn(`Source failed: ${label}:`, e.message || e);
    return [];
  }
}

async function main() {
  const [hn, rd] = await Promise.all([
    safe(getHackerNewsTrends, 'HackerNews'),
    safe(getRedditTrends, 'Reddit'),
  ]);
  let trends = dedupeByTitle([...hn, ...rd])
    .sort((a, b) => (b.points || 0) - (a.points || 0))
    .slice(0, 30);

  ensureDir(OUT_DIR);
  const now = new Date();
  const stamp = now.toISOString().split('T')[0];
  fs.writeFileSync(path.join(OUT_DIR, 'latest.json'), JSON.stringify({ generatedAt: now.toISOString(), items: trends }, null, 2));
  fs.writeFileSync(path.join(OUT_DIR, `${stamp}.json`), JSON.stringify({ generatedAt: now.toISOString(), items: trends }, null, 2));
  fs.writeFileSync(path.join(OUT_DIR, 'index.html'), renderHTML(trends));
}

main().catch(err => {
  console.error(err);
  process.exitCode = 1;
});