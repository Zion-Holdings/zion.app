#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const url = require('url');
const axios = require('axios');
const cheerio = require('cheerio');

const START_URL = process.env.APP_SITE_URL || 'https://ziontechgroup.com';
const USER_AGENT = process.env.CRAWLER_USER_AGENT || 'ZionSiteCrawler/1.0 (+https://ziontechgroup.com)';
const MAX_PAGES = Number(process.env.CRAWLER_MAX_PAGES || 5000);
const MAX_CONCURRENCY = Number(process.env.CRAWLER_MAX_CONCURRENCY || 4);
const REQUEST_DELAY_MS = Number(process.env.CRAWLER_REQUEST_DELAY_MS || 250);
const CONNECT_TIMEOUT_MS = Number(process.env.CRAWLER_CONNECT_TIMEOUT_MS || 10000);
const READ_TIMEOUT_MS = Number(process.env.CRAWLER_READ_TIMEOUT_MS || 15000);

const LOG_DIR = path.join(__dirname, 'logs');
const REPORT_DIR = path.join(__dirname, '..', 'data', 'reports', 'site-links');

function ensureDir(dir) { if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }
ensureDir(LOG_DIR);
ensureDir(REPORT_DIR);

const LOG_FILE = path.join(LOG_DIR, 'site-link-crawler.log');
function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

function normalizeUrl(href, base) {
  try {
    if (!href) return null;
    if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) return null;
    const resolved = new url.URL(href, base).toString();
    // Normalize trailing slash and lowercase host
    const u = new url.URL(resolved);
    u.hash = '';
    u.host = u.host.toLowerCase();
    // keep pathname casing as-is to respect case-sensitive routes; but remove trailing slash except root
    if (u.pathname.length > 1 && u.pathname.endsWith('/')) u.pathname = u.pathname.slice(0, -1);
    return u.toString();
  } catch (_) { return null; }
}

function isInternal(link) {
  try {
    const start = new url.URL(START_URL);
    const u = new url.URL(link);
    return u.host === start.host && (u.protocol === 'http:' || u.protocol === 'https:');
  } catch (_) { return false; }
}

async function fetchPage(targetUrl) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), CONNECT_TIMEOUT_MS + READ_TIMEOUT_MS);
  try {
    const resp = await axios.get(targetUrl, {
      maxRedirects: 5,
      headers: { 'User-Agent': USER_AGENT, 'Accept': 'text/html,application/xhtml+xml' },
      timeout: CONNECT_TIMEOUT_MS + READ_TIMEOUT_MS,
      signal: controller.signal
    });
    return { status: resp.status, data: resp.data, finalUrl: resp.request?.res?.responseUrl || targetUrl };
  } catch (err) {
    return { status: err.response?.status || 0, error: err.message };
  } finally {
    clearTimeout(timeoutId);
  }
}

async function headRequest(targetUrl) {
  try {
    const resp = await axios.head(targetUrl, {
      maxRedirects: 5,
      headers: { 'User-Agent': USER_AGENT },
      timeout: 8000
    });
    const finalUrl = resp.request?.res?.responseUrl || targetUrl;
    return { ok: resp.status >= 200 && resp.status < 400, status: resp.status, finalUrl };
  } catch (err) {
    const status = err.response?.status || 0;
    const finalUrl = err.response?.request?.res?.responseUrl || targetUrl;
    return { ok: status >= 200 && status < 400, status, finalUrl, error: err.message };
  }
}

async function crawl() {
  log(`🚀 Starting crawl from ${START_URL}`);
  const origin = new url.URL(START_URL);
  const toVisit = new Set([normalizeUrl(START_URL, START_URL)]);
  const visiting = new Set();
  const visited = new Set();
  const linkGraph = new Map(); // url -> Set(childUrls)
  const linkStatus = new Map(); // url -> { status, ok, finalUrl }
  const canonicalMap = new Map(); // url -> canonicalUrl

  let active = 0;
  let processed = 0;

  async function scheduleNext() {
    if (processed >= MAX_PAGES) return;
    if (active >= MAX_CONCURRENCY) return;
    const next = Array.from(toVisit).find(u => u && !visited.has(u) && !visiting.has(u));
    if (!next) return;

    visiting.add(next);
    active++;

    setTimeout(async () => {
      try {
        const res = await fetchPage(next);
        const ok = res.status >= 200 && res.status < 400 && !!res.data;
        linkStatus.set(next, { ok, status: res.status, finalUrl: res.finalUrl || next });
        processed++;
        visited.add(next);
        visiting.delete(next);

        if (ok) {
          const $ = cheerio.load(res.data);
          const pageLinks = new Set();

          // canonical
          const canonicalHref = $('link[rel="canonical"]').attr('href');
          const canonical = normalizeUrl(canonicalHref, next);
          if (canonical) canonicalMap.set(next, canonical);

          $('a[href]').each((_, el) => {
            const href = $(el).attr('href');
            const resolved = normalizeUrl(href, next);
            if (!resolved) return;
            pageLinks.add(resolved);
            // queue internal links only
            if (isInternal(resolved) && !visited.has(resolved) && toVisit.size + visiting.size < MAX_PAGES) {
              toVisit.add(resolved);
            }
          });

          linkGraph.set(next, pageLinks);

          // Also validate all internal links on the page quickly with HEAD
          const internalLinks = Array.from(pageLinks).filter(isInternal);
          for (const l of internalLinks) {
            if (!linkStatus.has(l)) {
              const r = await headRequest(l);
              linkStatus.set(l, { ok: r.ok, status: r.status, finalUrl: r.finalUrl || l });
            }
          }
        }
      } catch (e) {
        log(`❌ Error crawling ${next}: ${e.message}`);
      } finally {
        active--;
        await scheduleNext();
      }
    }, REQUEST_DELAY_MS);
  }

  // Prime concurrent workers
  const workers = Array.from({ length: Math.min(MAX_CONCURRENCY, MAX_PAGES) }, () => scheduleNext());
  await Promise.all(workers);

  // Drain queue
  while (active > 0 || Array.from(toVisit).some(u => !visited.has(u))) {
    // keep scheduling until done
    await new Promise(r => setTimeout(r, 500));
    await scheduleNext();
  }

  const allUrls = Array.from(new Set([...visited, ...linkStatus.keys()])).filter(Boolean);
  const broken = allUrls
    .map(u => ({ url: u, ...(linkStatus.get(u) || { ok: false, status: 0, finalUrl: u }) }))
    .filter(e => !e.ok);

  const crawlAt = new Date().toISOString();
  const baseName = `crawl-${Date.now()}`;
  const files = {
    crawl: path.join(REPORT_DIR, `${baseName}.json`),
    broken: path.join(REPORT_DIR, 'broken-links.json'),
    graph: path.join(REPORT_DIR, 'link-graph.json'),
    canonical: path.join(REPORT_DIR, 'canonical-map.json'),
    all: path.join(REPORT_DIR, 'all-links.json'),
    summary: path.join(REPORT_DIR, 'summary.json')
  };

  const graphObj = Object.fromEntries(Array.from(linkGraph.entries()).map(([k, set]) => [k, Array.from(set || [])]));
  const statusObj = Object.fromEntries(Array.from(linkStatus.entries()));
  const canonicalObj = Object.fromEntries(Array.from(canonicalMap.entries()));

  fs.writeFileSync(files.crawl, JSON.stringify({ crawlAt, startUrl: START_URL, origin: origin.host, visited: Array.from(visited), linkStatus: statusObj, canonical: canonicalObj }, null, 2));
  fs.writeFileSync(files.graph, JSON.stringify(graphObj, null, 2));
  fs.writeFileSync(files.canonical, JSON.stringify(canonicalObj, null, 2));
  fs.writeFileSync(files.all, JSON.stringify(allUrls, null, 2));
  fs.writeFileSync(files.summary, JSON.stringify({ crawlAt, pagesCrawled: visited.size, linksChecked: linkStatus.size, brokenCount: broken.length }, null, 2));
  fs.writeFileSync(files.broken, JSON.stringify(broken, null, 2));

  // Also create a quick Markdown index of discovered links for marketing/advertising
  const md = [`# Site Links Index`, '', `- Crawl time: ${crawlAt}`, `- Start: ${START_URL}`, `- Pages crawled: ${visited.size}`, `- Links checked: ${linkStatus.size}`, `- Broken: ${broken.length}`, '', '## All Links', ...allUrls.map(l => `- ${l}`)].join('\n');
  fs.writeFileSync(path.join(REPORT_DIR, 'links.md'), md);

  log(`✅ Crawl completed. Pages: ${visited.size}, Links: ${linkStatus.size}, Broken: ${broken.length}`);
}

if (require.main === module) {
  crawl().catch(e => { log(`Fatal: ${e.message}`); process.exitCode = 1; });
}

module.exports = { crawl };


