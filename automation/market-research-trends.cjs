#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

const LOG_DIR = path.join(__dirname, 'logs');
const OUT_DIR = path.join(__dirname, '..', 'data', 'marketplace');
const TRENDS_DIR = path.join(OUT_DIR, 'trends');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function log(message) {
  ensureDir(LOG_DIR);
  const line = `[${new Date().toISOString()}] ${message}\n`;
  console.log(message);
  fs.appendFileSync(path.join(LOG_DIR, 'market-research-trends.log'), line);
}

async function fetchText(url) {
  try {
    const res = await axios.get(url, { timeout: 20000, headers: { 'User-Agent': 'zion-app-market-research/1.0' } });
    return res.data;
  } catch (err) {
    log(`Fetch failed for ${url}: ${err.message}`);
    return '';
  }
}

function extractTitlesFromRss(xml) {
  if (!xml) return [];
  try {
    const $ = cheerio.load(xml, { xmlMode: true });
    const titles = [];
    $('item > title, entry > title').each((_, el) => {
      const t = $(el).text().trim();
      if (t) titles.push(t);
    });
    return titles;
  } catch {
    return [];
  }
}

function extractTitlesFromHtml(html, selector) {
  if (!html) return [];
  try {
    const $ = cheerio.load(html);
    const titles = [];
    $(selector).each((_, el) => {
      const t = $(el).text().trim();
      if (t) titles.push(t);
    });
    return titles;
  } catch {
    return [];
  }
}

function normalizeTitle(t) {
  return t.replace(/\s+/g, ' ').replace(/[\u0000-\u001F]/g, '').trim();
}

function keywordsFromTitles(titles) {
  const stop = new Set(['the','a','an','and','of','to','in','for','on','with','by','from','is','are','new','how','what','why','vs','into','using','into','your','our']);
  const freq = new Map();
  for (const title of titles) {
    const words = title.toLowerCase().replace(/[^a-z0-9\s\-\+]/g, ' ').split(/\s+/).filter(Boolean);
    for (const w of words) {
      if (stop.has(w)) continue;
      if (w.length < 3) continue;
      const count = freq.get(w) || 0;
      freq.set(w, count + 1);
    }
  }
  const entries = Array.from(freq.entries()).sort((a,b) => b[1]-a[1]).slice(0, 50);
  return entries.map(([word, count]) => ({ word, count }));
}

function deriveThemes(titles) {
  const themes = new Set();
  const text = titles.join(' \n ').toLowerCase();
  const candidates = [
    'agent', 'agents', 'agentic', 'rag', 'retrieval', 'vector', 'evaluation', 'guardrails', 'mcp', 'model context protocol',
    'multimodal', 'audio', 'video', 'image', 'realtime', 'tools', 'serverless', 'edge', 'fine-tuning', 'distillation', 'safety', 'monitoring', 'observability', 'benchmark', 'dataset', 'open-source', 'langchain', 'lightrag', 'vllm', 'ollama'
  ];
  for (const c of candidates) { if (text.includes(c)) themes.add(c); }
  return Array.from(themes);
}

async function main() {
  log('🚀 Market Research: fetching sources');
  ensureDir(TRENDS_DIR);

  const sources = [
    { name: 'hn_frontpage', url: 'https://hnrss.org/frontpage', type: 'rss' },
    { name: 'google_ai_blog', url: 'https://ai.googleblog.com/feeds/posts/default?alt=rss', type: 'rss' },
    { name: 'huggingface_blog', url: 'https://huggingface.co/blog/feed.xml', type: 'rss' },
    { name: 'openai_blog', url: 'https://openai.com/index.xml', type: 'rss' },
    { name: 'arxiv_cs_ai_recent', url: 'https://arxiv.org/list/cs.AI/recent', type: 'html', selector: 'dl > dt ~ dd > div.list-title' }
  ];

  const titles = [];
  for (const s of sources) {
    const data = await fetchText(s.url);
    let extracted = [];
    if (s.type === 'rss') extracted = extractTitlesFromRss(data);
    else if (s.type === 'html') extracted = extractTitlesFromHtml(data, s.selector || 'a');
    for (const t of extracted) titles.push(normalizeTitle(t));
    log(`Source ${s.name}: +${extracted.length} titles`);
  }

  const uniqueTitles = Array.from(new Set(titles));
  const keywords = keywordsFromTitles(uniqueTitles);
  const themes = deriveThemes(uniqueTitles);

  const out = {
    timestamp: new Date().toISOString(),
    sources: sources.map(s => ({ name: s.name, url: s.url })),
    counts: { titles: uniqueTitles.length, keywords: keywords.length, themes: themes.length },
    titles: uniqueTitles.slice(0, 500),
    keywords,
    themes
  };

  const dateId = new Date().toISOString().slice(0, 10);
  const outPath = path.join(TRENDS_DIR, `trends-${dateId}.json`);
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
  log(`✅ Wrote trends file: ${outPath}`);
}

if (require.main === module) {
  main().catch(err => { log(`Fatal error: ${err.stack || err.message}`); process.exit(1); });
}