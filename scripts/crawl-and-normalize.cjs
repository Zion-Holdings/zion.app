#!/usr/bin/env node
/**
 * Crawl and Normalize
 * - Crawls the live site to enumerate all links and sublinks (from sitemap + BFS up to a cap)
 * - Normalizes repository pages to rely on the global layout and modern Link usage
 * - Ensures static report pages are linked correctly from the reports index
 *
 * Safe by default: does not delete files, only makes minimal, deterministic edits.
 */

const fs = require('fs');
const path = require('path');
const axios = require('axios');

const repoRoot = process.cwd();
const baseUrl = process.env.BASE_URL || 'https://ziontechgroup.com';
const crawlLimit = Number(process.env.CRAWL_LIMIT || 2000);
const concurrency = Number(process.env.CRAWL_CONCURRENCY || 8);

function read(file) {
  try { return fs.readFileSync(file, 'utf8'); } catch { return null; }
}
function writeIfChanged(file, next) {
  const prev = read(file);
  if (prev === null) return false;
  if (prev === next) return false;
  fs.writeFileSync(file, next);
  return true;
}

function collectFiles(dir, exts) {
  const out = [];
  function walk(d) {
    const entries = fs.readdirSync(d, { withFileTypes: true });
    for (const e of entries) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p); else if (exts.includes(path.extname(e.name))) out.push(p);
    }
  }
  if (fs.existsSync(dir)) walk(dir);
  return out;
}

// ------------------------ UI Normalizer helpers ------------------------
function normalizeNextLinks(source) {
  let s = source;
  const linkARegex = /<Link(\s+[^>]*?)>(\s*)<a(\s+[^>]*?)>([\s\S]*?)<\/a>(\s*)<\/Link>/g;
  s = s.replace(linkARegex, (m, linkAttrs, _ws1, aAttrs, inner) => {
    // Skip complex attribute expressions to avoid breaking TSX
    if (/[{}]|=>/.test(aAttrs)) {
      return m;
    }
    const attrsToCarry = {};
    const grab = (name) => {
      const re = new RegExp(`${name}=("[^"]*"|'[^']*')`);
      const mm = aAttrs.match(re);
      if (mm) attrsToCarry[name] = mm[1];
    };
    grab('className'); grab('target'); grab('rel');
    if (attrsToCarry.className) {
      const reClassOnLink = /\sclassName=("[^"]*"|'[^']*')/;
      const mClassOnLink = linkAttrs.match(reClassOnLink);
      if (mClassOnLink) {
        const merged = mClassOnLink[1].slice(0, -1) + ' ' + attrsToCarry.className.slice(1);
        linkAttrs = linkAttrs.replace(reClassOnLink, ` className=${merged}`);
        delete attrsToCarry.className;
      }
    }
    const extra = Object.entries(attrsToCarry).map(([k, v]) => ` ${k}=${v}`).join('');
    return `<Link${linkAttrs}${extra}>${inner}</Link>`;
  });
  return s;
}

function normalizeWrappers(source) {
  let s = source;
  const patterns = [
    /<div className=\"min-h-screen bg-slate-950 text-white\">/g,
    /<div className=\'min-h-screen bg-slate-950 text-white\'>/g,
    /<div className=\"min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white\">/g,
    /<div className=\'min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white\'>/g,
  ];
  for (const p of patterns) s = s.replace(p, '<div>');
  return s;
}

function normalizeReportsIndex(filePath, source) {
  if (!/pages\/reports\/index\.tsx$/.test(filePath)) return source;
  let s = source;
  s = s.replace("href: '/reports/seo'", "href: '/reports/seo/index.html'");
  s = s.replace("href: '/reports/ai-trends'", "href: '/reports/ai-trends/index.html'");
  return s;
}

function tidyDocumentHead() {
  const docFile = path.join(repoRoot, 'pages/_document.tsx');
  const s = read(docFile);
  if (s === null) return false;
  const next = s.replace(/<Head>\s*<title>[\s\S]*?<\/title>/g, '<Head>');
  return writeIfChanged(docFile, next);
}

function ensureRedirectStubs() {
  // Respect existing files; do not delete. If missing, create lightweight redirect stubs (client redirect).
  const stubs = [
    { file: 'pages/reports/seo.tsx', url: '/reports/seo/index.html', name: 'SeoReportRedirect' },
    { file: 'pages/reports/ai-trends.tsx', url: '/reports/ai-trends/index.html', name: 'AiTrendsRedirect' },
  ];
  let changed = false;
  for (const stub of stubs) {
    const abs = path.join(repoRoot, stub.file);
    if (!fs.existsSync(abs)) {
      const contents = `import { useEffect } from 'react';\n\nexport default function ${stub.name}() {\n  useEffect(() => {\n    if (typeof window !== 'undefined') {\n      window.location.replace('${stub.url}');\n    }\n  }, []);\n  return null;\n}\n`;
      fs.mkdirSync(path.dirname(abs), { recursive: true });
      fs.writeFileSync(abs, contents);
      changed = true;
    }
  }
  return changed;
}

// ------------------------ Crawl helpers ------------------------
function extractLinks(html) {
  const links = new Set();
  const regex = /href=\"([^\"]+)\"|href=\'([^\']+)\'/g;
  let m;
  while ((m = regex.exec(html))) {
    const raw = m[1] || m[2] || '';
    if (!raw) continue;
    try {
      const u = new URL(raw, baseUrl);
      if (u.origin === new URL(baseUrl).origin) links.add(u.pathname.replace(/\/$/, '') || '/');
    } catch {}
  }
  return Array.from(links);
}

async function fetchText(url) {
  try {
    const res = await axios.get(url, { timeout: 15000 });
    return res.data;
  } catch {
    return null;
  }
}

async function crawlAll() {
  const seen = new Set();
  const queue = [];

  // Seed from sitemap
  const sitemapXml = await fetchText(baseUrl + '/sitemap.xml');
  if (sitemapXml) {
    const locRegex = /<loc>([^<]+)<\/loc>/g;
    let m;
    while ((m = locRegex.exec(sitemapXml))) {
      try {
        const u = new URL(m[1]);
        if (u.origin === new URL(baseUrl).origin) {
          const p = u.pathname.replace(/\/$/, '') || '/';
          if (!seen.has(p)) { seen.add(p); queue.push(p); }
        }
      } catch {}
    }
  } else {
    queue.push('/'); seen.add('/');
  }

  const out = [];

  async function worker() {
    while (queue.length && out.length < crawlLimit) {
      const p = queue.shift();
      if (!p) break;
      out.push(p);
      const html = await fetchText(baseUrl + p);
      if (!html) continue;
      const links = extractLinks(html);
      for (const lp of links) {
        if (!seen.has(lp) && out.length + queue.length < crawlLimit) {
          seen.add(lp);
          queue.push(lp);
        }
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, worker));

  const reportDir = path.join(repoRoot, 'data/reports/link-sentinel');
  fs.mkdirSync(reportDir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const file = path.join(reportDir, `crawl-${stamp}.json`);
  fs.writeFileSync(file, JSON.stringify({ baseUrl, count: out.length, paths: out }, null, 2));
  // Maintain a latest pointer
  fs.writeFileSync(path.join(reportDir, 'crawl-latest.json'), JSON.stringify({ baseUrl, count: out.length, paths: out }, null, 2));
  console.log(`Crawled ${out.length} paths from ${baseUrl}`);
}

// ------------------------ Main ------------------------
(async () => {
  // 1) Crawl site
  await crawlAll();

  // 2) Normalize repository pages
  let changed = 0;
  const pageFiles = collectFiles(path.join(repoRoot, 'pages'), ['.tsx']).filter((f) => {
    const b = path.basename(f);
    if (b === '_app.tsx' || b === '_document.tsx') return false;
    if (f.includes('/api/')) return false;
    return true;
  });
  for (const f of pageFiles) {
    const s = read(f);
    if (s === null) continue;
    let next = s;
    // Apply safe normalizations. Link conversion is guarded and may be skipped for complex cases.
    next = normalizeNextLinks(next);
    next = normalizeWrappers(next);
    next = normalizeReportsIndex(f, next);
    if (writeIfChanged(f, next)) { changed += 1; console.log('normalized:', path.relative(repoRoot, f)); }
  }

  if (tidyDocumentHead()) { changed += 1; console.log('tidied: pages/_document.tsx'); }
  if (ensureRedirectStubs()) { changed += 1; console.log('ensured redirect stubs'); }

  console.log(`Normalization complete. Files changed: ${changed}`);
})();


