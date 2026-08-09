#!/usr/bin/env node
// link-repair.cjs
// Verify internal hrefs in out/ HTML and attempt safe slug repairs.
const fs = require('fs');
const path = require('path');

const REPO = process.cwd();
const OUT_DIR = path.join(REPO, 'out');
const SITEMAP_PATH = path.join(REPO, 'sitemap.xml');
const REPORT_PATH = path.join(REPO, 'broken-links-report.json');

function extractUrlsFromSitemap(xml) {
  const urls = [];
  const re = /<loc>(.*?)<\/loc>/g;
  let m;
  while ((m = re.exec(xml))) urls.push(m[1]);
  return urls;
}

function walkHtml(dir) {
  const files = [];
  if (!fs.existsSync(dir)) return files;
  const walk = (d) => {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith('.html')) files.push(full);
    }
  };
  walk(dir);
  return files;
}

function repairHref(href, sitemapUrls) {
  // Only repair internal, absolute-path hrefs under /services/
  if (!href.startsWith('/')) return href;
  const pathOnly = href.split('?')[0].split('#')[0];
  const exact = sitemapUrls.find((u) => u.replace(/^https?:\/\/[^/]+/, '') === pathOnly);
  if (exact) return href;
  const slug = pathOnly.replace(/^\/+|\/+$/g, '').replace(/\//g, '__');
  const rebuilt = sitemapUrls.find((u) => slugifyUrl(u) === slug);
  if (rebuilt) return rebuilt.replace(/^https?:\/\/[^/]+/, '') || '/';
  return href;
}

function slugifyUrl(url) {
  const withoutProto = url.replace(/^https?:\/\/[^/]+/, '');
  return withoutProto.replace(/^\/+|\/+$/g, '').replace(/\//g, '__');
}

function run() {
  let sitemapXml = '';
  if (fs.existsSync(SITEMAP_PATH)) sitemapXml = fs.readFileSync(SITEMAP_PATH, 'utf8');
  const sitemapUrls = extractUrlsFromSitemap(sitemapXml);

  const files = walkHtml(OUT_DIR);
  const report = { generatedAt: new Date().toISOString(), broken: [], repaired: [] };
  let checked = 0;

  for (const file of files) {
    let html = fs.readFileSync(file, 'utf8');
    const hrefRe = /href=["']([^"']+)["']/g;
    let m;
    let changed = false;
    const replacements = [];
    while ((m = hrefRe.exec(html))) {
      const href = m[1];
      if (href.startsWith('http')) continue;
      const repaired = repairHref(href, sitemapUrls);
      if (repaired !== href) {
        replacements.push({ from: href, to: repaired });
      }
    }
    for (const r of replacements) {
      if (sitemapUrls.some((u) => u.replace(/^https?:\/\/[^/]+/, '') === r.to)) {
        html = html.split(r.from).join(r.to);
        changed = true;
        report.repaired.push({ file, from: r.from, to: r.to });
      } else {
        report.broken.push({ file, href: r.from });
      }
    }
    if (changed) fs.writeFileSync(file, html);
    checked++;
  }

  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
  console.log(`[link-repair] checked ${checked} pages; repaired ${report.repaired.length}; broken ${report.broken.length}`);
  if (report.broken.length) {
    console.log(`[link-repair] wrote ${REPORT_PATH}`);
  }
}

run();
