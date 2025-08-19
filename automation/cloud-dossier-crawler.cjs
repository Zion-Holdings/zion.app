#!/usr/bin/env node

'use strict';

/*
  Cloud Dossier Crawler (New)
  - Crawls `https://ziontechgroup.com` starting from sitemap and homepage
  - Extracts plain text snippets for downstream deterministic content factories
  - Emits logs to `automation/logs/cloud-dossier-crawl-*.json`

  Notes:
  - No external deps; uses Node 20 global fetch
  - Conservative timeouts and limits to keep runs fast
*/

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://ziontechgroup.com';
const MAX_PAGES = 20;
const TIMEOUT_MS = 12000;

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function stripHtml(html) {
  return String(html || '')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

async function fetchWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        'user-agent': 'zion-cloud-dossier-crawler/1.0',
        ...(options.headers || {})
      },
      signal: controller.signal
    });
    return res;
  } finally {
    clearTimeout(id);
  }
}

async function readSitemapUrls() {
  try {
    const res = await fetchWithTimeout(`${BASE_URL}/sitemap.xml`);
    if (!res.ok) return [];
    const xml = await res.text();
    const urls = Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g)).map((m) => m[1]).filter(Boolean);
    return urls.slice(0, MAX_PAGES);
  } catch {
    return [];
  }
}

async function discoverHomepageLinks() {
  try {
    const res = await fetchWithTimeout(BASE_URL);
    if (!res.ok) return [];
    const html = await res.text();
    const links = Array.from(html.matchAll(/href=\"(\/[^\"#? ]*)\"/g)).map((m) => m[1]);
    const uniq = Array.from(new Set(links)).slice(0, MAX_PAGES);
    return uniq.map((p) => (p.startsWith('http') ? p : `${BASE_URL}${p}`));
  } catch {
    return [];
  }
}

async function crawl() {
  const sitemapUrls = await readSitemapUrls();
  const homepageUrls = await discoverHomepageLinks();
  const candidateUrls = Array.from(new Set([...sitemapUrls, ...homepageUrls]))
    .filter((u) => typeof u === 'string' && u.startsWith(BASE_URL))
    .slice(0, MAX_PAGES);

  const results = [];
  for (const url of candidateUrls) {
    try {
      const res = await fetchWithTimeout(url);
      if (!res.ok) continue;
      const html = await res.text();
      const text = stripHtml(html);
      results.push({ url, text, length: text.length });
    } catch {}
  }

  const outDir = path.join(process.cwd(), 'automation', 'logs');
  ensureDir(outDir);
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const outFile = path.join(outDir, `cloud-dossier-crawl-${stamp}.json`);
  const payload = { startedAt: new Date().toISOString(), baseUrl: BASE_URL, urls: candidateUrls, results };
  fs.writeFileSync(outFile, JSON.stringify(payload, null, 2));
  console.log(`cloud-dossier-crawler: wrote ${results.length} results to ${outFile}`);
}

if (require.main === module) {
  crawl().catch((err) => {
    console.error('cloud-dossier-crawler failed:', err);
    process.exitCode = 1;
  });
}

module.exports = { crawl };

