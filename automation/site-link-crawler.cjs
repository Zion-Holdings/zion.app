#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

const START_URL = 'https://ziontechgroup.com/';
const DOMAIN = 'ziontechgroup.com';
const REPORT_DIR = path.join(__dirname, '..', 'data', 'reports', 'link-monitor');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

function normalizeUrl(u) {
  try {
    const url = new URL(u, START_URL);
    if (url.hostname !== DOMAIN) return null;
    url.hash = '';
    return url.toString().replace(/[#?]$/,'');
  } catch { return null; }
}

async function fetchPage(u) {
  try {
    const res = await axios.get(u, { timeout: 15000, maxRedirects: 5 });
    return { status: res.status, html: res.data };
  } catch (e) {
    const status = e.response ? e.response.status : -1;
    return { status, html: '' };
  }
}

async function crawl(maxPages = 200) {
  const queue = [START_URL];
  const seen = new Set();
  const pages = [];
  const broken = [];

  while (queue.length && pages.length < maxPages) {
    const current = queue.shift();
    if (!current || seen.has(current)) continue;
    seen.add(current);
    const { status, html } = await fetchPage(current);
    pages.push({ url: current, status });
    if (status >= 400 || status < 0) {
      broken.push({ url: current, status });
      continue;
    }
    const $ = cheerio.load(html || '');
    $('a[href]').each((_, el) => {
      const href = $(el).attr('href');
      const n = normalizeUrl(href);
      if (n && !seen.has(n) && !queue.includes(n)) queue.push(n);
    });
  }

  return { pages, broken, discovered: Array.from(seen) };
}

async function main() {
  ensureDir(REPORT_DIR);
  const result = await crawl();
  const out = path.join(REPORT_DIR, 'site-link-report.json');
  fs.writeFileSync(out, JSON.stringify({
    timestamp: new Date().toISOString(),
    startUrl: START_URL,
    totalVisited: result.discovered.length,
    pages: result.pages,
    broken: result.broken
  }, null, 2));
  console.log(`Link crawler: visited ${result.discovered.length} page(s), broken ${result.broken.length}`);
}

main();


