const https = require('https');
const { URL } = require('url');
const fs = require('fs');
const path = require('path');

const SITEMAP_URL = 'https://ziontechgroup.com/sitemap.xml';
const SAMPLE = 250;
const outFile = path.join(process.cwd(), 'public', 'crawl-report.json');

function fetchText(url) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const req = https.get({ hostname: u.hostname, path: u.pathname + u.search, timeout: 12000 }, (res) => {
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve({ status: res.statusCode, body: Buffer.concat(chunks).toString('utf8') }));
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function extractLocations(xml) {
  const urls = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(xml)) !== null) urls.push(m[1]);
  return urls;
}

async function checkUrl(url) {
  try {
    const res = await fetchText(url);
    return { url, status: res.status, ok: res.status === 200 };
  } catch (err) {
    return { url, status: 'ERR', ok: false, error: err.message };
  }
}

async function main() {
  console.log('Fetching sitemap...');
  const sitemap = await fetchText(SITEMAP_URL);
  const urls = extractLocations(sitemap.body);
  console.log(`Sitemap URLs: ${urls.length}`);
  const results = [];
  const queue = [...urls];
  const workers = [];
  for (let i = 0; i < CONCURRENCY; i++) workers.push(worker());
  const broken = [];

  async function worker() {
    while (queue.length) {
      const url = queue.shift();
      const r = await checkUrl(url);
      results.push(r);
      if (!r.ok) broken.push(r);
    }
  }
  await Promise.all(workers);
  const summary = { total: results.length, ok: results.filter(r => r.ok).length, broken: broken.length, brokenUrls: broken };
  fs.writeFileSync(outFile, JSON.stringify(summary, null, 2));
  console.log(`Wrote report to ${outFile}`);
  console.log(`OK=${summary.ok} broken=${summary.broken}`);
  for (const b of broken.slice(0, 20)) console.log(`${b.status} ${b.url}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
