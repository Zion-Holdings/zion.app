const http = require('http');
const https = require('https');
const { URL } = require('url');
const fs = require('fs');

const BASE = 'https://ziontechgroup.com';
const MAX_PAGES = 2500;
const CONCURRENCY = 8;

const visited = new Set();
const queue = [];
const results = { ok: [], broken: [] };

function fetch(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, { timeout: 20000 }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function normalize(base, href) {
  try {
    if (!href || href.startsWith('#') || href.startsWith('javascript:') || href.startsWith('mailto:') || href.startsWith('tel:')) return null;
    if (href.startsWith('//')) return 'https:' + href;
    if (href.startsWith('/')) return base + href;
    if (href.startsWith('http')) return href;
    return null;
  } catch (e) { return null; }
}

function extractLinks(html, base) {
  const links = new Set();
  const regex = /href=["']([^"']+)["']/gi;
  let m;
  while ((m = regex.exec(html))) {
    const href = m[1];
    const normalized = normalize(base, href);
    if (normalized) links.add(normalized);
  }
  return Array.from(links);
}

async function checkUrl(url) {
  try {
    const res = await fetch(url);
    if (res.status >= 200 && res.status < 400) {
      results.ok.push({ url, status: res.status });
    } else {
      results.broken.push({ url, status: res.status });
    }
    return res;
  } catch (e) {
    results.broken.push({ url, error: e.message });
    return null;
  }
}

(async () => {
  queue.push({ url: BASE + '/', depth: 0 });
  visited.add(BASE + '/');

  while (queue.length > 0 && visited.size < MAX_PAGES) {
    const batch = queue.splice(0, Math.min(CONCURRENCY, queue.length));
    const responses = await Promise.all(batch.map(item => checkUrl(item.url)));
    for (let i = 0; i < responses.length; i++) {
      const res = responses[i];
      const item = batch[i];
      if (!res || item.depth >= 3) continue;
      const links = extractLinks(res.body || '', BASE);
      for (const link of links) {
        if (visited.has(link)) continue;
        visited.add(link);
        queue.push({ url: link, depth: item.depth + 1 });
      }
    }
  }

  fs.writeFileSync('/tmp/crawl-results.json', JSON.stringify(results, null, 2));
  console.log(`Crawled: ${visited.size} URLs`);
  console.log(`OK: ${results.ok.length}`);
  console.log(`Broken: ${results.broken.length}`);
  if (results.broken.length) {
    console.log('Broken links:');
    results.broken.forEach(b => console.log(`  ${b.status || 'ERR'} ${b.url}${b.error ? ' ('+b.error+')' : ''}`));
  }
})();
