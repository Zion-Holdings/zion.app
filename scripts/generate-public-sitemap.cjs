#!/usr/bin/env node
/**
 * generate-public-sitemap.cjs — Regenerate sitemap.xml from ACTUAL built pages in public/.
 * Only includes URLs that have real HTML files, preventing 404s from stale sitemap entries.
 * Also splits into sitemap index if > 40K URLs (Google limit is 50K).
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');
const SITE_URL = 'https://ziontechgroup.com';

function collectHtmlPages() {
  const pages = [];
  const seen = new Set();

  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        // Check for index.html
        const idx = path.join(full, 'index.html');
        if (fs.existsSync(idx)) {
          const rel = path.relative(PUBLIC_DIR, full).replace(/\\/g, '/');
          const urlPath = rel === '.' ? '/' : '/' + rel + '/';
          if (!seen.has(urlPath)) {
            seen.add(urlPath);
            const stat = fs.statSync(idx);
            pages.push({ url: SITE_URL + urlPath, lastmod: stat.mtime });
          }
        }
        // Don't recurse into _next or other build artifacts
        if (!['_next', 'node_modules', '.git'].includes(entry.name)) {
          walk(full);
        }
      } else if (entry.name.endsWith('.html') && entry.name !== 'index.html') {
        const rel = path.relative(PUBLIC_DIR, full).replace(/\\/g, '/');
        const urlPath = '/' + rel.replace(/\.html$/, '');
        if (!seen.has(urlPath)) {
          seen.add(urlPath);
          const stat = fs.statSync(full);
          pages.push({ url: SITE_URL + urlPath, lastmod: stat.mtime });
        }
      }
    }
  }

  walk(PUBLIC_DIR);
  return pages;
}

function pageInfo(url, lastmod) {
  let freq = 'monthly', prio = '0.4';
  const path = url.replace(SITE_URL, '');
  if (path === '/' || path === '') { freq = 'daily'; prio = '1.0'; }
  else if (path.startsWith('/services/') || path.startsWith('/blog/')) { freq = 'weekly'; prio = '0.6'; }
  else if (path.startsWith('/tools/') || path.startsWith('/industries/')) { freq = 'weekly'; prio = '0.7'; }
  else if (path.startsWith('/ai/') || path.startsWith('/products/')) { freq = 'weekly'; prio = '0.5'; }
  if (path.startsWith('/blog/')) { freq = 'weekly'; prio = '0.5'; }
  if (path.startsWith('/sitemap') || path.startsWith('/feed.xml') || path.includes('robots')) { freq = 'never'; prio = '0.1'; }

  const loc = url.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const lastmodStr = lastmod.toISOString().split('T')[0];
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmodStr}</lastmod>\n    <changefreq>${freq}</changefreq>\n    <priority>${prio}</priority>\n  </url>`;
}

function buildSitemap(pages) {
  const rows = pages.map(p => pageInfo(p.url, p.lastmod));
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...rows,
    '</urlset>',
  ].join('\n');
}

function buildSitemapIndex(chunks) {
  const rows = chunks.map((_, i) =>
    `  <sitemap>\n    <loc>${SITE_URL}/sitemaps/sitemap-${i + 1}.xml</loc>\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n  </sitemap>`
  );
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...rows,
    '</sitemapindex>',
  ].join('\n');
}

function main() {
  const pages = collectHtmlPages();
  console.log(`Collected ${pages.length} HTML pages from public/`);

  // Guard: if we collected very few pages (< 1000), this is likely a source/dev
  // environment where public/ hasn't been populated with a full Next.js build.
  // Overwriting the committed sitemap with a truncated version would cause SEO
  // harm (missing 30K+ service URLs). Preserve the existing committed sitemaps
  // in that case.
  if (pages.length < 5000) {
    const existing = fs.existsSync(path.join(PUBLIC_DIR, 'sitemap.xml'))
      ? fs.readFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), 'utf8').split('\n').length
      : 0;
    const existingRoot = fs.existsSync(path.join(ROOT, 'sitemap.xml'))
      ? fs.readFileSync(path.join(ROOT, 'sitemap.xml'), 'utf8').split('\n').length
      : 0;
    console.log(`Skipping sitemap regeneration: only ${pages.length} pages in public/`);
    console.log(`Existing public/sitemap.xml has ~${existing} lines, sitemap.xml has ~${existingRoot} lines — preserving committed sitemaps.`);
    console.log(`Hint: run this script after \`next build\` (builds to out/, then sync to public/) for an accurate sitemap.`);
    return;
  }

  // Sort pages by path for deterministic output
  pages.sort((a, b) => a.url.localeCompare(b.url));

  // If > 40K URLs, split into chunks of 40K (Google limit is 50K)
  if (pages.length > 40000) {
    const chunks = [];
    for (let i = 0; i < pages.length; i += 40000) {
      chunks.push(pages.slice(i, i + 40000));
    }
    // Write individual sitemaps
    const sitemapsDir = path.join(PUBLIC_DIR, 'sitemaps');
    fs.mkdirSync(sitemapsDir, { recursive: true });
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];
      const sm = buildSitemap(chunk);
      fs.writeFileSync(path.join(sitemapsDir, `sitemap-${i + 1}.xml`), sm);
      console.log(`  Wrote sitemap-${i + 1}.xml: ${chunk.length} URLs`);
    }
    // Write sitemap index
    const idx = buildSitemapIndex(chunks);
    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), idx);
    console.log(`Sitemap index with ${chunks.length} chunks written to public/sitemap.xml`);
  } else {
    // Single sitemap
    const sm = buildSitemap(pages);
    fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sm);
    fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sm);
    console.log(`Sitemap with ${pages.length} URLs written to public/sitemap.xml and sitemap.xml`);
  }
}

main();
