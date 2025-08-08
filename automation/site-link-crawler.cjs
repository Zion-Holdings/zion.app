#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

const BASE_URL = process.env.APP_MARKETING_URL || process.env.BASE_URL || 'https://ziontechgroup.com';
const MAX_PAGES = Number(process.env.LINK_CRAWL_MAX_PAGES || 2000);
const CONCURRENCY = Number(process.env.LINK_CRAWL_CONCURRENCY || 5);
const REQUEST_TIMEOUT_MS = Number(process.env.LINK_CRAWL_TIMEOUT_MS || 15000);
const POLITENESS_DELAY_MS = Number(process.env.LINK_CRAWL_DELAY_MS || 200);

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'site-link-crawler.log');
const REPORT_DIR = path.join(process.cwd(), 'data', 'reports', 'links');

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

ensureDir(LOG_DIR);
ensureDir(REPORT_DIR);

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, `${line}\n`);
}

function normalizeUrl(url) {
  if (!url) return null;
  if (url.startsWith('#')) return null;
  if (url.startsWith('mailto:') || url.startsWith('tel:')) return null;
  // Convert relative to absolute
  try {
    const abs = new URL(url, BASE_URL).toString();
    return abs.split('#')[0];
  } catch (e) {
    return null;
  }
}

function isSameHost(url) {
  try {
    const u = new URL(url);
    const b = new URL(BASE_URL);
    return u.hostname === b.hostname;
  } catch (e) {
    return false;
  }
}

async function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function fetchWithRedirects(url) {
  const client = axios.create({
    maxRedirects: 5,
    timeout: REQUEST_TIMEOUT_MS,
    headers: {
      'User-Agent': 'ZionLinkCrawler/1.0 (+https://ziontechgroup.com)'
    },
    validateStatus: () => true
  });
  const start = Date.now();
  try {
    const response = await client.get(url);
    const durationMs = Date.now() - start;
    const finalUrl = response.request?.res?.responseUrl || url;
    return {
      ok: response.status < 400,
      status: response.status,
      url,
      finalUrl,
      durationMs,
      headers: response.headers,
      html: typeof response.data === 'string' ? response.data : '',
      error: null
    };
  } catch (error) {
    const durationMs = Date.now() - start;
    return {
      ok: false,
      status: 0,
      url,
      finalUrl: url,
      durationMs,
      headers: {},
      html: '',
      error: error.message || 'request-failed'
    };
  }
}

async function crawl(baseUrl) {
  const queue = [baseUrl];
  const visited = new Set();
  const results = new Map(); // url -> result
  const discoveredLinks = new Map(); // pageUrl -> [links]

  log(`🚀 Starting crawl: base=${baseUrl}, maxPages=${MAX_PAGES}, concurrency=${CONCURRENCY}`);

  async function worker() {
    while (true) {
      const next = queue.shift();
      if (!next) return;
      if (visited.has(next)) continue;
      if (visited.size >= MAX_PAGES) return;
      visited.add(next);

      await delay(POLITENESS_DELAY_MS);

      const res = await fetchWithRedirects(next);
      results.set(next, res);
      log(`🧭 ${visited.size}/${MAX_PAGES} ${res.status} ${next}${res.finalUrl !== next ? ` -> ${res.finalUrl}` : ''}`);

      if (res.ok && res.html) {
        try {
          const $ = cheerio.load(res.html);
          const links = new Set();
          $('a[href]').each((_, a) => {
            const href = $(a).attr('href');
            const normalized = normalizeUrl(href);
            if (normalized) links.add(normalized);
          });
          const linkList = Array.from(links);
          discoveredLinks.set(next, linkList);

          // Only follow discovered links when the current page is within our domain
          const currentIsInternal = isSameHost(next);
          for (const l of linkList) {
            if (!visited.has(l)) {
              if (isSameHost(l)) {
                // Internal links are fully crawled
                queue.push(l);
              } else if (currentIsInternal) {
                // For external links found on internal pages, check status once but do not recurse further
                if (!results.has(l)) queue.push(l);
              }
            }
          }
        } catch (e) {
          log(`⚠️ Parse error ${next}: ${e.message}`);
        }
      }
    }
  }

  const workers = Array.from({ length: CONCURRENCY }, () => worker());
  await Promise.all(workers);

  const summary = {
    baseUrl,
    startedAt: new Date().toISOString(),
    totalVisited: visited.size,
    totalResults: results.size,
    withinDomain: Array.from(results.keys()).filter(isSameHost).length,
    external: Array.from(results.keys()).filter(u => !isSameHost(u)).length,
    statuses: Array.from(results.values()).reduce((acc, r) => {
      const key = String(r.status || 0);
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {}),
  };

  const timestamp = new Date().toISOString().replace(/[-:TZ.]/g, '').slice(0, 12);
  const outfile = path.join(REPORT_DIR, `crawl-${timestamp}.json`);
  const latest = path.join(REPORT_DIR, 'crawl-latest.json');

  const payload = {
    summary,
    results: Array.from(results.entries()).map(([url, r]) => ({
      url,
      finalUrl: r.finalUrl,
      status: r.status,
      ok: r.ok,
      durationMs: r.durationMs,
      error: r.error || null,
      headers: r.headers || {},
      links: discoveredLinks.get(url) || []
    }))
  };

  fs.writeFileSync(outfile, JSON.stringify(payload, null, 2));
  fs.writeFileSync(latest, JSON.stringify(payload, null, 2));
  log(`📄 Saved crawl report: ${outfile}`);
  return payload;
}

if (require.main === module) {
  const argBase = process.argv[2] || BASE_URL;
  crawl(argBase).then(() => {
    log('✅ Crawl complete');
  }).catch((e) => {
    log(`❌ Crawl failed: ${e.message}`);
    process.exitCode = 1;
  });
}

module.exports = { crawl };


