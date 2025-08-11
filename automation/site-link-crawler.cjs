#!/usr/bin/env node

const axios = require('axios');
const cheerio = require('cheerio');
const urlLib = require('url');
const fs = require('fs');
const path = require('path');

const START_URL = process.env.CANONICAL_URL || 'https://ziontechgroup.com';
const MAX_PAGES = parseInt(process.env.CRAWL_MAX_PAGES || '100', 10);

function isInternal(href, baseHost) {
  if (!href) return false;
  if (href.startsWith('#')) return false;
  try {
    const u = new URL(href, START_URL);
    return u.host === baseHost;
  } catch {
    return false;
  }
}

async function fetchPage(url) {
  try {
    const res = await axios.get(url, { timeout: 15000, validateStatus: () => true });
    return { status: res.status, html: res.data };
  } catch (e) {
    return { status: 0, html: '' };
  }
}

(async () => {
  const visited = new Set();
  const queue = [];
  const broken = [];

  const start = new URL(START_URL);
  visited.add(start.href);
  queue.push(start.href);

  while (queue.length && visited.size < MAX_PAGES) {
    const current = queue.shift();
    const { status, html } = await fetchPage(current);

    if (status !== 200) {
      broken.push({ url: current, status });
      continue;
    }
    const $ = cheerio.load(html);
    $('a[href]').each((_i, el) => {
      const href = $(el).attr('href');
      try {
        const abs = new URL(href, current).href;
        if (isInternal(abs, start.host) && !visited.has(abs)) {
          visited.add(abs);
          if (visited.size < MAX_PAGES) queue.push(abs);
        }
      } catch {}
    });
  }

  // Verify collected URLs
  const statuses = [];
  for (const url of Array.from(visited)) {
    const { status } = await fetchPage(url);
    if (status !== 200) broken.push({ url, status });
    statuses.push({ url, status });
  }

  const outDir = path.join(process.cwd(), 'data', 'reports');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'link-crawl.json');
  fs.writeFileSync(outPath, JSON.stringify({ start: START_URL, total: visited.size, broken, statuses }, null, 2));
  console.log(`Crawl complete. URLs: ${visited.size}, broken: ${broken.length}. Report: ${outPath}`);
})();