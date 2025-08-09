#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const DIGEST_DIR = path.join(process.cwd(), 'pages', 'blog', 'digests');
const DATA_DIR = path.join(process.cwd(), 'data', 'news');
const INDEX_PATH = path.join(DATA_DIR, 'digests.json');

function ensureDirs() {
  if (!fs.existsSync(DIGEST_DIR)) fs.mkdirSync(DIGEST_DIR, { recursive: true });
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
}

function formatDate(d) {
  return d.toISOString().slice(0, 10);
}

async function fetchFrontPage() {
  const res = await fetch('https://hn.algolia.com/api/v1/search?tags=front_page');
  if (!res.ok) throw new Error('failed to fetch HN');
  const json = await res.json();
  return (json.hits || []).map((h) => ({
    title: h.title || h.story_title || 'Untitled',
    url: h.url || h.story_url || `https://news.ycombinator.com/item?id=${h.objectID}`,
    points: h.points || 0,
    author: h.author || 'unknown',
  }));
}

function buildPageSource(dateStr, items) {
  const list = items.map((it) => `\n        <li className=\"space-y-1\"><a className=\"underline\" href=\"${it.url}\" target=\"_blank\" rel=\"noreferrer\">${it.title}</a><div className=\"text-xs text-gray-500\">by ${it.author} • ${it.points} points</div></li>`).join('');
  return `import React from 'react';
export default function Digest${dateStr.replace(/-/g, '')}() {
  return (
    <div className=\"space-y-4\">
      <h1 className=\"text-2xl font-semibold\">Zion Tech Digest — ${dateStr}</h1>
      <p className=\"text-gray-600\">Curated from Hacker News front page. Auto-generated.</p>
      <ul className=\"list-disc pl-6\">${list}\n      </ul>
    </div>
  );
}
`;
}

function readIndex() {
  if (!fs.existsSync(INDEX_PATH)) return [];
  try { return JSON.parse(fs.readFileSync(INDEX_PATH, 'utf8')); } catch { return []; }
}

function writeIndex(list) { fs.writeFileSync(INDEX_PATH, JSON.stringify(list, null, 2)); }

async function run() {
  ensureDirs();
  const today = new Date();
  const dateStr = formatDate(today);
  const slug = `digest-${dateStr}`;
  const pagePath = path.join(DIGEST_DIR, `${slug}.tsx`);

  const index = readIndex();
  const exists = fs.existsSync(pagePath);
  if (exists && index.find((d) => d.slug === slug)) {
    console.log('[news-digest] already exists for', dateStr);
  } else {
    const items = await fetchFrontPage();
    const source = buildPageSource(dateStr, items);
    fs.writeFileSync(pagePath, source, 'utf8');
    const entry = { slug, route: `/blog/digests/${slug}`, createdAt: Date.now(), items: items.length };
    const updated = [entry, ...index.filter((d) => d.slug !== slug)].slice(0, 60);
    writeIndex(updated);
    console.log('[news-digest] generated', slug);
  }
}

run().catch((e) => { console.error(e); process.exit(1); });