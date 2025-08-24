#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const outDir = path.join(ROOT, 'data', 'reports', 'market-signals');

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}`);
  return res.text();
}

function extractItems(xml) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let m;
  while ((m = itemRegex.exec(xml))) {
    const block = m[1];
    const title = (block.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/) || [])[1] || (block.match(/<title>(.*?)<\/title>/) || [])[1] || '';
    const link = (block.match(/<link>(.*?)<\/link>/) || [])[1] || '';
    items.push({ title, link });
  }
  return items;
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  const sources = [
    'https://hnrss.org/frontpage',
    'https://hnrss.org/newest?points=200',
  ];
  const keywords = ['AI', 'Artificial Intelligence', 'LLM', 'OpenAI', 'Anthropic', 'Llama', 'DeepSeek', 'RAG', 'Vector'];

  const collected = [];
  for (const url of sources) {
    const xml = await fetchText(url);
    const items = extractItems(xml);
    for (const it of items) {
      if (keywords.some((k) => it.title.toLowerCase().includes(k.toLowerCase()))) {
        collected.push({ source: url, title: it.title, link: it.link });
      }
    }
  }

  const stamp = new Date();
  const ts = stamp.toISOString().replace(/[:.]/g, '-');
  const latestPath = path.join(outDir, 'latest.json');
  const filePath = path.join(outDir, `signals-${ts}.json`);
  const payload = { generatedAt: stamp.toISOString(), items: collected.slice(0, 50) };
  fs.writeFileSync(filePath, JSON.stringify(payload, null, 2));
  fs.writeFileSync(latestPath, JSON.stringify(payload, null, 2));
  console.log(`Wrote ${filePath} and updated latest.json`);
}

main().catch((e) => { console.error(e); process.exit(1); });