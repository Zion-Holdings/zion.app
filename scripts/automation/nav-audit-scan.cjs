#!/usr/bin/env node
/**
 * nav-audit-scan.cjs — Scan navigation links across pages for broken hrefs
 * Checks internal links against the sitemap to detect broken navigation.
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const outDir = path.join(process.cwd(), 'out');
const sitemapPath = path.join(outDir, 'sitemap.xml');
const reportsDir = path.join(process.cwd(), 'automation', 'reports');

function extractUrlsFromSitemap() {
  if (!fs.existsSync(sitemapPath)) return [];
  const content = fs.readFileSync(sitemapPath, 'utf8');
  const re = /<loc>([^<]+)<\/loc>/g;
  const urls = new Set();
  let m;
  while ((m = re.exec(content)) !== null) {
    urls.add(m[1].trim());
  }
  return [...urls];
}

function extractNavLinks(html) {
  const links = new Set();
  // Match all href values
  const re = /href\s*=\s*["']([^"']+)["']/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    links.add(m[1]);
  }
  return [...links];
}

function isInternal(link) {
  return link.startsWith('/') || link.startsWith('#') || !link.includes('://');
}

function main() {
  fs.mkdirSync(reportsDir, { recursive: true });
  
  const sitemapUrls = extractUrlsFromSitemap();
  const sitemapSet = new Set(sitemapUrls.map(u => {
    try {
      const url = new URL(u);
      return url.pathname;
    } catch(e) { return u; }
  }));
  
  console.log(`Sitemap URLs: ${sitemapUrls.length}`);
  
  if (!fs.existsSync(outDir)) {
    console.log('No out/ directory; scanning public/ instead');
  }
  
  // Scan key pages for nav links
  const keyPages = ['/', '/services/', '/about/', '/contact/', '/pricing/', '/blog/'];
  const brokenNavLinks = [];
  const checkedPages = [];
  
  for (const page of keyPages) {
    const filePath = path.join(outDir, page === '/' ? 'index.html' : page.slice(1, -1) + '/index.html');
    const publicPath = path.join('public', page === '/' ? 'index.html' : page.slice(1, -1) + '/index.html');
    
    let html = '';
    let source = '';
    if (fs.existsSync(filePath)) {
      html = fs.readFileSync(filePath, 'utf8');
      source = 'out';
    } else if (fs.existsSync(publicPath)) {
      html = fs.readFileSync(publicPath, 'utf8');
      source = 'public';
    } else {
      checkedPages.push({ page, status: 'not-found' });
      continue;
    }
    
    const navLinks = extractNavLinks(html);
    const broken = [];
    
    for (const link of navLinks) {
      if (!isInternal(link) || link.startsWith('#')) continue;
      
      // Normalize link
      let normalized = link;
      if (link.startsWith('/')) {
        normalized = link;
      } else if (!link.includes('://')) {
        normalized = '/' + link;
      } else {
        continue; // external link
      }
      
      // Check if the link destination exists in sitemap or as a file
      if (!sitemapSet.has(normalized) && !fs.existsSync(path.join(outDir, normalized.substring(1))) && !fs.existsSync(path.join('public', normalized.substring(1)))) {
        // Also check if it's a known redirect target
        broken.push(link);
      }
    }
    
    checkedPages.push({ page, status: 'scanned', source, linksFound: navLinks.length, brokenLinks: broken.length });
    if (broken.length > 0) {
      brokenNavLinks.push({ page, links: broken });
    }
  }
  
  const report = {
    generatedAt: new Date().toISOString(),
    sitemapUrls: sitemapUrls.length,
    pagesScanned: checkedPages.length,
    brokenNavLinks: brokenNavLinks,
    pages: checkedPages,
  };
  
  fs.writeFileSync(
    path.join(reportsDir, 'nav-audit-scan-latest.json'),
    JSON.stringify(report, null, 2)
  );
  
  console.log(`Pages scanned: ${checkedPages.length}`);
  console.log(`Broken nav links: ${brokenNavLinks.length}`);
  
  if (brokenNavLinks.length > 0) {
    console.log('\nPages with broken nav links:');
    for (const p of brokenNavLinks) {
      console.log(`  ${p.page}: ${p.brokenLinks.length} broken`);
    }
  }
}

try { main(); } catch(e) { console.error(e); process.exit(1); }
