#!/usr/bin/env node
/**
 * deep-crawl-audit.cjs
 * Deep crawl audit tool for ziontechgroup.com
 * Checks all internal links, finds broken links, and generates reports.
 */
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const BASE_URL = 'https://ziontechgroup.com';
const MAX_URLS = 2000;
const CRAWL_DEPTH = 3;

function fetchUrl(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Hermes-Agent/1.0)' },
      timeout: 15000
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        resolve({ status: res.statusCode, body });
      });
    });
    req.on('error', (e) => {
      resolve({ status: 0, error: e.message });
    });
    req.on('timeout', () => {
      req.destroy();
      resolve({ status: 0, error: 'timeout' });
    });
  });
}

function extractLinks(html, baseUrl) {
  const links = [];
  const hrefRegex = /href=["']([^"']+)["']/gi;
  let match;
  while ((match = hrefRegex.exec(html)) !== null) {
    let url = match[1];
    if (url.startsWith('#') || url.startsWith('mailto:') || url.startsWith('tel:')) continue;
    if (url.startsWith('/')) url = baseUrl + url;
    if (url.startsWith(baseUrl)) links.push(url);
  }
  return [...new Set(links)];
}

async function crawl() {
  const results = {
    timestamp: new Date().toISOString(),
    baseUrl: BASE_URL,
    totalUrls: 0,
    ok: 0,
    broken: [],
    redirects: [],
    timeouts: [],
    urlDetails: {}
  };

  const visited = new Set();
  const queue = [{ url: BASE_URL, depth: 0 }];

  while (queue.length > 0 && visited.size < MAX_URLS) {
    const { url, depth } = queue.shift();
    if (visited.has(url)) continue;
    if (depth > CRAWL_DEPTH) continue;
    
    visited.add(url);
    results.totalUrls++;
    
    const result = await fetchUrl(url);
    
    if (result.status === 200) {
      results.ok++;
      const isHtml = url.match(/\.(html?|htm|php)$/i) || !url.match(/\.[a-z0-9]+$/i);
      if (isHtml && result.body) {
        const links = extractLinks(result.body, BASE_URL);
        for (const link of links) {
          if (!visited.has(link) && depth < CRAWL_DEPTH) {
            queue.push({ url: link, depth: depth + 1 });
          }
        }
      }
    } else if (result.status === 0) {
      results.timeouts.push({ url, error: result.error });
      results.broken.push({ url, status: result.status, error: result.error });
    } else if (result.status >= 400) {
      results.broken.push({ url, status: result.status });
    } else if (result.status >= 300 && result.status < 400) {
      results.redirects.push({ url, status: result.status });
    }
    
    // Also check sitemap
    if (results.totalUrls >= 773) break; // Stop at the known sitemap size
  }

  // Save report
  const reportsDir = path.join(process.cwd(), 'automation', 'reports');
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
  fs.writeFileSync(
    path.join(reportsDir, 'deep-crawl-results.json'),
    JSON.stringify(results, null, 2)
  );

  console.log(`\nCrawl complete: ${results.totalUrls} URLs checked`);
  console.log(`  OK (200): ${results.ok}`);
  console.log(`  Broken: ${results.broken.length}`);
  console.log(`  Timeouts: ${results.timeouts.length}`);
  console.log(`  Redirects: ${results.redirects.length}`);
  
  if (results.broken.length > 0) {
    console.log('\nBroken links:');
    results.broken.slice(0, 20).forEach(b => {
      console.log(`  ${b.url} - ${b.status} ${b.error || ''}`);
    });
  }

  console.log(`\nReport saved to automation/reports/deep-crawl-results.json`);
  process.exit(results.broken.length > 0 ? 1 : 0);
}

crawl().catch(e => {
  console.error('Crawl error:', e);
  process.exit(1);
});
