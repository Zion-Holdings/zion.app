#!/usr/bin/env node

/*
  Cloud Site Crawler
  - Crawls the live site (default: https://ziontechgroup.com) using the sitemap and seed URLs
  - Extracts readable text content per page for downstream content invention
  - Saves a lightweight crawl log for transparency and debugging

  Environment:
  - CANONICAL_URL: base URL to crawl (defaults to https://ziontechgroup.com)
*/

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

const DEFAULT_BASE_URL = process.env.CANONICAL_URL || 'https://ziontechgroup.com';
const USER_AGENT = 'ZionCloudAgentsCrawler/1.0 (+https://github.com/Zion-Holdings/zion.app)';

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

async function fetchText(url, timeoutMs = 20000) {
  try {
    const res = await axios.get(url, {
      headers: { 'User-Agent': USER_AGENT, 'Accept': 'text/html,application/xhtml+xml' },
      timeout: timeoutMs,
      maxRedirects: 5,
      validateStatus: (s) => s >= 200 && s < 400
    });
    return res.data;
  } catch (err) {
    return '';
  }
}

async function fetchSitemapUrls(baseUrl) {
  const sitemapUrl = baseUrl.replace(/\/$/, '') + '/sitemap.xml';
  const xml = await fetchText(sitemapUrl);
  if (!xml) return [];
  const locMatches = Array.from(xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)).map((m) => m[1]);
  // Deduplicate and filter to same origin
  const baseOrigin = new URL(baseUrl).origin;
  const urls = Array.from(new Set(locMatches.filter((u) => {
    try { return new URL(u).origin === baseOrigin; } catch { return false; }
  })));
  return urls;
}

function extractReadableText(html, sourceUrl) {
  if (!html) return '';
  const $ = cheerio.load(html);
  const selectors = ['main', 'article', 'section', 'h1', 'h2', 'h3', 'p', 'li'];
  const pieces = [];
  $(selectors.join(',')).each((_, el) => {
    const text = $(el).text().replace(/\s+/g, ' ').trim();
    if (text && text.length > 20) pieces.push(text);
  });
  const out = pieces.join('\n');
  if (!out) {
    // fallback: strip tags
    const stripped = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    return stripped.slice(0, 5000);
  }
  return out.slice(0, 20000);
}

async function crawlSite({ baseUrl = DEFAULT_BASE_URL, limit = 25 } = {}) {
  const sitemapUrls = await fetchSitemapUrls(baseUrl);
  const seed = [baseUrl, baseUrl.replace(/\/$/, '') + '/explore'];
  const pool = Array.from(new Set([...seed, ...sitemapUrls])).slice(0, limit);

  const results = [];
  for (const url of pool) {
    const html = await fetchText(url);
    const text = extractReadableText(html, url);
    results.push({ url, text, length: text.length });
  }

  const outDir = path.join(process.cwd(), 'automation', 'logs');
  ensureDir(outDir);
  const outPath = path.join(outDir, `cloud-crawl-${new Date().toISOString().replace(/[:.]/g, '-')}.json`);
  fs.writeFileSync(outPath, JSON.stringify({ baseUrl, limit, count: results.length, results }, null, 2));
  return results;
}

async function main() {
  const results = await crawlSite({ baseUrl: DEFAULT_BASE_URL });
  console.log(`Crawled ${results.length} pages from ${DEFAULT_BASE_URL}`);
}

if (require.main === module) {
  main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
  });
}

module.exports = { crawlSite };


