#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const REPORT_DIR = path.join(process.cwd(), 'data', 'reports', 'ai-trends');
if (!fs.existsSync(REPORT_DIR)) fs.mkdirSync(REPORT_DIR, { recursive: true });

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return res.json();
}

async function main() {
  const topIds = await fetchJson('https://hacker-news.firebaseio.com/v0/topstories.json');
  const first = topIds.slice(0, 30);
  const items = [];
  for (const id of first) {
    // eslint-disable-next-line no-await-in-loop
    const item = await fetchJson(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    if (!item || !item.title) continue;
    const lower = item.title.toLowerCase();
    if (lower.includes('ai') || lower.includes('machine learning') || lower.includes('llm') || lower.includes('openai')) {
      items.push({ id: item.id, title: item.title, url: item.url || `https://news.ycombinator.com/item?id=${item.id}`, score: item.score });
    }
  }
  const ranked = items.sort((a, b) => b.score - a.score).slice(0, 10);
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const outPath = path.join(REPORT_DIR, `trends-${timestamp}.json`);
  fs.writeFileSync(outPath, JSON.stringify({ generatedAt: new Date().toISOString(), items: ranked }, null, 2));
  console.log(`AI Trends report saved to ${outPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});