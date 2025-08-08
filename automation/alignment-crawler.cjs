#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

async function crawl(startUrl, maxPages, sameOriginOnly, timeoutMs) {
  const visited = new Set();
  const queue = [startUrl];
  const pages = [];
  const origin = new URL(startUrl).origin;

  while (queue.length && pages.length < maxPages) {
    const url = queue.shift();
    if (!url || visited.has(url)) continue;
    visited.add(url);
    try {
      const { data } = await axios.get(url, { timeout: timeoutMs });
      pages.push({ url, html: data });
      const $ = cheerio.load(data);
      $('a[href]').each((_, el) => {
        const href = $(el).attr('href');
        if (!href) return;
        let next;
        try { next = new URL(href, origin).toString(); } catch { return; }
        if (sameOriginOnly && !next.startsWith(origin)) return;
        if (!visited.has(next)) queue.push(next);
      });
    } catch (e) {
      // skip on error
    }
  }
  return pages;
}

async function main() {
  const cfgPath = path.join(__dirname, 'alignment-config.json');
  const cfg = fs.existsSync(cfgPath) ? JSON.parse(fs.readFileSync(cfgPath, 'utf8')) : {};
  const base = cfg.siteBaseUrl || process.env.ALIGN_SITE_URL;
  if (!base) {
    console.error('No siteBaseUrl configured');
    process.exit(1);
  }
  const outDir = path.join(__dirname, '..', 'data', 'reports', 'alignment');
  fs.mkdirSync(outDir, { recursive: true });
  const pages = await crawl(base, cfg.crawl?.maxPages || 200, cfg.crawl?.sameOriginOnly !== false, cfg.crawl?.timeoutMs || 15000);
  fs.writeFileSync(path.join(outDir, 'site-crawl.json'), JSON.stringify(pages.map(p => ({ url: p.url })), null, 2));
  console.log(`Crawled ${pages.length} pages`);
}

main().catch((e) => {
  console.error('alignment-crawler failed:', e.message);
  process.exit(1);
});


