const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { promisify } = require('util');
const sleep = promisify(setTimeout);

const BASE = 'https://ziontechgroup.com';
const REPO = process.cwd();
const DOCS = path.join(REPO, 'docs');

function fetch(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, { headers: { 'User-Agent': 'Mozilla/5.0', 'Cache-Control': 'no-cache' } }, (res) => {
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', () => resolve({ status: res.statusCode, body: Buffer.concat(chunks).toString('utf-8') }));
    });
    req.on('error', reject);
    req.setTimeout(20000, () => { req.destroy(); reject(new Error('timeout')); });
  });
}

async function findDocsRoute(slug) {
  const candidates = [
    path.join(DOCS, slug, 'index.html'),
    path.join(DOCS, slug.replace(/\/$/, '') + '.html'),
    path.join(DOCS, slug.replace(/\/$/, '') + '/index.html'),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  return null;
}

async function waybackSnapshot(slug) {
  const url = `${BASE}${slug}`;
  const cdx = await fetch(`https://web.archive.org/cdx/search/cdx?url=${encodeURIComponent(url)}&output=json&limit=5&fl=timestamp,statuscode,mimetype`);
  if (cdx.status !== 200) return null;
  const rows = JSON.parse(cdx.body);
  const latest = rows.slice(1).reverse().find(r => r[1] === '200' && (r[2] === 'text/html' || r[2] === 'application/xhtml+xml'));
  if (!latest) return null;
  const snapshot = await fetch(`https://web.archive.org/web/${latest[0]}/${encodeURIComponent(url)}`);
  if (snapshot.status !== 200) return null;
  let text = snapshot.body;
  try {
    const cheerio = require('cheerio');
    const $ = cheerio.load(text);
    $('script[src*="googletagmanager"]').remove();
    $('noscript').remove();
    $('iframe').remove();
    text = $.html();
  } catch {
    // leave raw HTML
  }
  return text;
}

function fallbackHtmlFromExisting(slug, existingBody) {
  let title = slug.replace(/^\/|\/$/g, '').replace(/[-/]+/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${title} | Zion Tech Group</title>
<meta name="description" content="${title} services from Zion Tech Group." />
<link rel="canonical" href="${BASE}${slug}" />
<script>location.href='/${slug.replace(/\/$/,'')}/';</script>
<meta http-equiv="refresh" content="0; url=/${slug.replace(/\/$/,'')}/" />
</head>
<body>
<main>
  <h1>${title}</h1>
  <p>This page is temporarily unavailable in static export.</p>
  <nav>
    <a href="/">Home</a> | <a href="/services">Services</a> | <a href="/contact">Contact</a>
  </nav>
</main>
</body>
</html>`;
}

async function main() {
  const sitemap = fs.readFileSync(path.join(REPO, 'sitemap.xml'), 'utf-8');
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  const result = { ok: 0, attempted: 0, failed: 0, recovered: 0, fallback: 0, timedOut: 0, items: [] };
  const processed = new Set();
  for (const u of urls) {
    const slug = u.replace(BASE, '').replace(/\/$/, '') + '/';
    if (!slug || slug === '/sitemap.xml/') continue;
    if (processed.has(slug)) continue;
    processed.add(slug);
    const docsPath = path.join(DOCS, slug, 'index.html');
    if (fs.existsSync(docsPath)) continue;
    result.attempted++;
    let written = false;
    try {
      const r = await fetch(`${BASE}${slug}`);
      if (r.status === 200) {
        fs.mkdirSync(path.dirname(docsPath), { recursive: true });
        fs.writeFileSync(docsPath, r.body, 'utf-8');
        result.recovered++;
        written = true;
      } else {
        const saved = await waybackSnapshot(slug);
        if (saved) {
          fs.mkdirSync(path.dirname(docsPath), { recursive: true });
          fs.writeFileSync(docsPath, saved, 'utf-8');
          result.recovered++;
          written = true;
        } else {
          const template = path.join(DOCS, 'services', slug === '/services/' ? 'index.html' : '');
          const parent = path.join(REPO, 'app', slug === '/services/' ? 'services' : slug === '/blog/' ? 'blog' : '');
          let existing = '';
          // best-effort neighbor reuse
          const dir = path.dirname(docsPath);
          const parentDir = path.join(dir, '..');
          const parentIndex = path.join(parentDir, 'index.html');
          if (!written && fs.existsSync(parentIndex) && parentIndex !== docsPath) {
            const html = fs.readFileSync(parentIndex, 'utf-8');
            fs.mkdirSync(dir, { recursive: true });
            fs.writeFileSync(docsPath, fallbackHtmlFromExisting(slug, html), 'utf-8');
            result.fallback++;
            written = true;
          }
        }
      }
    } catch (e) {
      result.failed++;
      console.error('ERR', slug, e.message);
      result.timedOut++;
    }
    if (!written) result.failed++;
    if (result.attempted % 25 === 0) console.log(`progress attempted=${result.attempted} recovered=${result.recovered} fallback=${result.fallback} failed=${result.failed}`);
    await sleep(150);
  }
  fs.writeFileSync(path.join(REPO, 'scripts/reports/content-recovery-latest.json'), JSON.stringify(result, null, 2));
  console.log('Done', result);
}

main();
