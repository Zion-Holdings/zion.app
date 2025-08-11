#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

const REPORT_DIR = path.join(process.cwd(), 'data', 'reports', 'site-links');

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function getBaseUrl() {
  // Prefer explicit base from env, then Netlify envs, then fallback to localhost
  const explicit = process.env.CRAWL_BASE_URL || process.env.SITEMAP_BASE_URL;
  const netlify = process.env.DEPLOY_PRIME_URL || process.env.DEPLOY_URL || process.env.URL;
  const fallback = 'http://localhost:3000';
  const base = (explicit || netlify || fallback).trim().replace(/\/$/, '');
  if (!/^https?:\/\//i.test(base)) return 'http://localhost:3000';
  return base;
}

function normalizePath(href) {
  try {
    if (!href) return null;
    if (href.startsWith('mailto:') || href.startsWith('tel:')) return null;
    if (href.startsWith('#')) return null;
    // Absolute URL
    if (/^https?:\/\//i.test(href)) {
      const u = new URL(href);
      return u.pathname.replace(/\/index$/, '/') || '/';
    }
    // Root-relative
    if (href.startsWith('/')) {
      return href.replace(/\/index$/, '/') || '/';
    }
    return null;
  } catch {
    return null;
  }
}

async function fetchPage(url) {
  try {
    const res = await axios.get(url, { timeout: 15000, validateStatus: () => true });
    return { status: res.status, html: res.data };
  } catch (e) {
    return { status: 0, error: e.message };
  }
}

async function crawlSite() {
  const baseUrl = getBaseUrl();
  const origin = new URL(baseUrl).origin;

  const queue = [{ path: '/', depth: 0 }];
  const visited = new Set();
  const maxDepth = Number(process.env.CRAWL_MAX_DEPTH || 4);
  const maxPages = Number(process.env.CRAWL_MAX_PAGES || 200);

  /** @type {Record<string, { url: string, status: number, ok: boolean, links: string[] }>} */
  const pages = {};
  const discoveredInternal = new Set(['/']);

  while (queue.length && visited.size < maxPages) {
    const current = queue.shift();
    if (!current) break;
    const { path: p, depth } = current;
    if (visited.has(p)) continue;
    visited.add(p);

    const fullUrl = origin + p;
    const res = await fetchPage(fullUrl);
    const ok = res.status >= 200 && res.status < 400;

    let links = [];
    if (ok && res.html) {
      try {
        const $ = cheerio.load(res.html);
        const anchors = Array.from($('a')).map((a) => $(a).attr('href'));
        for (const href of anchors) {
          const np = normalizePath(href);
          if (!np) continue;
          // same-origin internal only
          if (np.startsWith('/')) {
            links.push(np);
            if (!discoveredInternal.has(np)) {
              discoveredInternal.add(np);
              if (depth + 1 <= maxDepth) queue.push({ path: np, depth: depth + 1 });
            }
          }
        }
      } catch {
        // ignore parse errors
      }
    }

    pages[p] = { url: fullUrl, status: res.status, ok, links: Array.from(new Set(links)).sort() };
  }

  // Verify all discovered internal paths resolve
  const missingInternalPaths = [];
  for (const p of Array.from(discoveredInternal)) {
    if (!pages[p]) {
      const fullUrl = origin + p;
      const res = await fetchPage(fullUrl);
      const ok = res.status >= 200 && res.status < 400;
      if (!ok) missingInternalPaths.push({ path: p, status: res.status || 0 });
    } else if (!pages[p].ok) {
      missingInternalPaths.push({ path: p, status: pages[p].status || 0 });
    }
  }

  const report = {
    generatedAt: new Date().toISOString(),
    baseUrl: origin,
    stats: { pagesCrawled: Object.keys(pages).length, discoveredInternal: discoveredInternal.size, missing: missingInternalPaths.length },
    pages,
    missingInternalPaths: missingInternalPaths.sort((a, b) => a.path.localeCompare(b.path)),
  };

  ensureDir(REPORT_DIR);
  const stamp = Date.now();
  const outFile = path.join(REPORT_DIR, `site-links-${stamp}.json`);
  fs.writeFileSync(outFile, JSON.stringify(report, null, 2));
  fs.writeFileSync(path.join(REPORT_DIR, 'latest.json'), JSON.stringify(report, null, 2));
  console.log(`Crawl complete. Pages: ${Object.keys(pages).length}. Missing internal: ${missingInternalPaths.length}. Report: ${outFile}`);
}

crawlSite().catch((e) => { console.error(e); process.exit(1); });