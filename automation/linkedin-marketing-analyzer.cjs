'use strict';

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

const CANONICAL_URL = process.env.CANONICAL_URL || 'https://ziontechgroup.com';
const OUTPUT_DIR = path.join(__dirname, '..', 'data', 'marketing');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'linkedin-candidates.json');

function log(message) {
  process.stdout.write(`[linkedin-analyzer] ${message}\n`);
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

async function fetchHtml(url) {
  try {
    const res = await axios.get(url, { timeout: 15000, headers: { 'User-Agent': 'zion.app-marketing-bot/1.0' } });
    return res.data || '';
  } catch (err) {
    log(`Fetch failed for ${url}: ${err.message}`);
    return '';
  }
}

function textify(str) {
  return (str || '')
    .replace(/\s+/g, ' ')
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    .trim();
}

function extractFromHtml(html, url) {
  const $ = cheerio.load(html);
  const title = textify($('title').first().text());
  const desc = textify(
    $('meta[name="description"]').attr('content') ||
      $('meta[property="og:description"]').attr('content') ||
      $('meta[name="twitter:description"]').attr('content') ||
      ''
  );

  const headings = [];
  $('h1, h2, h3').each((_, el) => {
    const t = textify($(el).text());
    if (t && t.length >= 10) headings.push(t);
  });

  const bullets = [];
  $('li').each((_, el) => {
    const t = textify($(el).text());
    if (t && t.length >= 8 && t.length <= 160) bullets.push(t);
  });

  return {
    url,
    title,
    description: desc,
    headings: Array.from(new Set(headings)).slice(0, 8),
    bullets: Array.from(new Set(bullets)).slice(0, 12),
  };
}

function uniqueByUrl(items) {
  const seen = new Set();
  const out = [];
  for (const it of items) {
    const key = (it.url || '').toLowerCase();
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(it);
  }
  return out;
}

async function analyze() {
  const candidatePaths = [
    '/',
    '/automation',
    '/site-health',
    '/reports/seo',
    '/reports/a11y',
    '/newsroom',
  ];

  const urls = candidatePaths.map((p) => new URL(p, CANONICAL_URL).toString());
  log(`Scanning ${urls.length} URLs from ${CANONICAL_URL}`);

  const results = [];
  for (const u of urls) {
    const html = await fetchHtml(u);
    if (!html) continue;
    const data = extractFromHtml(html, u);
    // Simple quality score
    const score =
      (data.title ? Math.min(data.title.length, 80) : 0) +
      (data.description ? Math.min(data.description.length, 140) : 0) +
      Math.min(data.headings.length * 10, 50) +
      Math.min(data.bullets.length * 4, 40);
    results.push({ ...data, score });
  }

  const sorted = results.sort((a, b) => b.score - a.score);
  const top = uniqueByUrl(sorted).slice(0, 6);

  ensureDir(OUTPUT_DIR);
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify({ analyzedAt: Date.now(), canonical: CANONICAL_URL, candidates: top }, null, 2));
  log(`Wrote ${top.length} candidates to ${path.relative(process.cwd(), OUTPUT_FILE)}`);
}

analyze().then(() => process.exit(0));


