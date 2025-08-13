'use strict';

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

const CANONICAL_URL = process.env.CANONICAL_URL || 'https://ziontechgroup.com';
const OUTPUT_DIR = path.join(__dirname, '..', 'data', 'marketing');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'instagram-candidates.json');

function log(message) {
  process.stdout.write(`[instagram-analyzer] ${message}\n`);
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

  const keyPoints = [];
  $('h1, h2, h3, li, p').each((_, el) => {
    const t = textify($(el).text());
    if (t && t.length >= 8 && t.length <= 140) keyPoints.push(t);
  });

  return {
    url,
    title,
    description: desc,
    points: Array.from(new Set(keyPoints)).slice(0, 12),
  };
}

async function analyze() {
  const candidatePaths = [
    '/',
    '/automation',
    '/reports/seo',
    '/newsroom',
  ];
  const urls = candidatePaths.map((p) => new URL(p, CANONICAL_URL).toString());
  const results = [];
  for (const u of urls) {
    const html = await fetchHtml(u);
    if (!html) continue;
    results.push(extractFromHtml(html, u));
  }

  ensureDir(OUTPUT_DIR);
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify({ analyzedAt: Date.now(), canonical: CANONICAL_URL, candidates: results }, null, 2));
  log(`Wrote ${results.length} candidates to ${path.relative(process.cwd(), OUTPUT_FILE)}`);
}

analyze().then(() => process.exit(0));


