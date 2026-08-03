#!/usr/bin/env node
// generate-sitemap-feed.cjs — dynamic sitemap.xml + feed.xml from build artifacts
// Reads: out/service-index.json, out/blog/*/index.html, out/index.html
// Writes: out/sitemap.xml, out/feed.xml

const fs = require('fs');
const path = require('path');

const SITE_URL = process.env.SITE_URL || 'https://ziontechgroup.com';
const outDir = path.join(process.cwd(), 'public');

// ---- helpers ----

function rfc822(date) {
  return date.toUTCString().replace('GMT', '+0000');
}

function collectLeafPages() {
  const pages = [];

  // 1) Homepage
  const homeHtml = path.join(outDir, 'index.html');
  if (fs.existsSync(homeHtml)) {
    pages.push({ url: `${SITE_URL}/`, lastmod: fs.statSync(homeHtml).mtime });
  }

  // 2) Known top-level pages (index.html)
  const topDirs = new Set([
    'about','academy','agents-monitoring','ai','ai-services','api',
    'blockchain-services','blockchain-solutions','blog','careers','case-studies',
    'client-portal','cloud-infrastructure','cloud-services','compliance-automation',
    'community','contact','cookies','docs','ecommerce','education','energy','faq','finance',
    'government','healthcare','insurance','logistics','manufacturing','media',
    'pricing','pricing-calculator','portal','privacy','products','proposal-generator',
    'proposals','public-sector','status','terms','testimonials','tools','training',
    'transportation','utilities','services','free-tools-hub','free-resources','ai-lab'
  ]);
  const skipDirs = new Set([
    '404','_not-found','_next','api','data','Drop Box','0','__next'
  ]);
  const topFiles = ['index.html'];
  for (const f of topFiles) {
    const p = path.join(outDir, f);
    if (fs.existsSync(p)) pages.push({ url: `${SITE_URL}/${f === 'index.html' ? '' : f.replace(/\\.html$/, '')}`, lastmod: fs.statSync(p).mtime });
  }
  for (const entry of fs.readdirSync(outDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (skipDirs.has(entry.name)) continue;
    const idx = path.join(outDir, entry.name, 'index.html');
    if (fs.existsSync(idx)) pages.push({ url: `${SITE_URL}/${entry.name}/`, lastmod: fs.statSync(idx).mtime });
  }

  // 2a) Dynamic ai/* sub-pages and solutions/* sub-pages
  const walkDirs = [
    { dir: path.join(outDir, 'ai'), prefix: 'ai' },
    { dir: path.join(outDir, 'solutions'), prefix: 'solutions' },
    { dir: path.join(outDir, 'tools'), prefix: 'tools' }
  ];

  // 3) Service pages: out/services/<id>/index.html
  const svcDir = path.join(outDir, 'services');
  if (fs.existsSync(svcDir)) {
    for (const entry of fs.readdirSync(svcDir, { withFileTypes: true })) {
      if (!entry.isDirectory() || entry.name === 'stage') continue;
      const f = path.join(svcDir, entry.name, 'index.html');
      if (fs.existsSync(f)) {
        pages.push({ url: `${SITE_URL}/services/${entry.name}/`, lastmod: fs.statSync(f).mtime });
      }
    }
  }

  // 3b) Service stage pages: out/services/stage/<stage>/index.html
  const stageDir = path.join(outDir, 'services', 'stage');
  if (fs.existsSync(stageDir)) {
    for (const entry of fs.readdirSync(stageDir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const f = path.join(stageDir, entry.name, 'index.html');
      if (fs.existsSync(f)) {
        pages.push({ url: `${SITE_URL}/services/stage/${entry.name}/`, lastmod: fs.statSync(f).mtime });
      }
    }
  }

  // 3c) Status sub-pages: out/status/<slug>/index.html
  const statusDir = path.join(outDir, 'status');
  if (fs.existsSync(statusDir)) {
    for (const entry of fs.readdirSync(statusDir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const f = path.join(statusDir, entry.name, 'index.html');
      if (fs.existsSync(f)) {
        pages.push({ url: `${SITE_URL}/status/${entry.name}/`, lastmod: fs.statSync(f).mtime, priority: 0.4, changefreq: 'monthly' });
      }
    }
  }

  // 4) Blog pages: out/blog/<slug>/index.html
  const blogDir = path.join(outDir, 'blog');
  if (fs.existsSync(blogDir)) {
    for (const entry of fs.readdirSync(blogDir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const f = path.join(blogDir, entry.name, 'index.html');
      if (!fs.existsSync(f)) continue;
      pages.push({ url: `${SITE_URL}/blog/${entry.name}/`, lastmod: fs.statSync(f).mtime });
    }
  }

  for (const wd of walkDirs) {
    const base = wd.dir;
    if (!fs.existsSync(base)) continue;
    for (const entry of fs.readdirSync(base, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const file = path.join(base, entry.name, 'index.html');
      const meta = path.join(base, entry.name, 'index.txt');
      const last = fs.existsSync(file) ? fs.statSync(file).mtime : fs.existsSync(meta) ? fs.statSync(meta).mtime : null;
      if (!last) continue;
      pages.push({ url: `${SITE_URL}/${wd.prefix}/${entry.name}/`, lastmod: last });
    }
  }

  return pages;
}

function pageInfo(url, lastmod) {
  let freq = 'monthly', prio = '0.4';
  if (url === `${SITE_URL}/`) { freq = 'daily'; prio = '1.0'; }
  else if (url.startsWith(`${SITE_URL}/services/stage/`)) { freq = 'weekly'; prio = '0.7'; }
  else if (url.startsWith(`${SITE_URL}/services/`)) { freq = 'weekly'; prio = '0.6'; }
  else if (url.startsWith(`${SITE_URL}/blog/`)) { freq = 'weekly'; prio = '0.5'; }
  else if (['/ai', '/ai-services', '/industry-solutions', '/solutions', '/products', '/tools'].some(x => url.startsWith(SITE_URL + x))) { freq = 'weekly'; prio = '0.5'; }
  else { freq = 'monthly'; prio = '0.4'; }

  const loc = url.replace(/"/g, '&quot;');
  const lastmodStr = lastmod.toISOString().split('T')[0];
  return `<url><loc>${loc}</loc><lastmod>${lastmodStr}</lastmod><changefreq>${freq}</changefreq><priority>${prio}</priority></url>`;
}

function buildSitemap(pages) {
  const today = new Date().toISOString().split('T')[0];
  const seen = new Set();
  const rows = [];
  for (const p of pages) {
    const url = typeof p === 'string' ? p : p.url;
    if (seen.has(url)) continue;
    seen.add(url);
    const lastmod = typeof p === 'string' ? new Date(today) : p.lastmod;
    rows.push(pageInfo(url, lastmod));
  }
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...rows,
    '</urlset>',
  ].join('\n');
}

function escapeXml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function buildFeed(services, blogEntries) {
  const feedDate = rfc822(new Date());
  let items = '';

  // Service items — top 60 (popular first)
  const sorted = [...services].sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0)).slice(0, 60);
  const catLabel = { ai: 'AI Services', it: 'IT', cloud: 'Cloud', security: 'Security',
                     data: 'Data & Analytics', automation: 'Automation' };

  for (const s of sorted) {
    const url = `${SITE_URL}/services/${s.id}/`;
    const desc = s.description
      ? escapeXml(s.description)
      : `${s.title} — enterprise service from Zion Tech Group.`;
    const title = escapeXml(s.title);
    const cat = catLabel[s.category] || s.category;
    items += `
  <item>
    <title>${title}</title>
    <link>${url}</link>
    <guid isPermaLink="true">${url}</guid>
    <pubDate>${feedDate}</pubDate>
    <category>${cat}</category>
    <description><![CDATA[${desc}]]></description>
  </item>`;
  }

  // Blog items
  for (const bp of blogEntries) {
    const pub = bp.lastmod || new Date();
    const url = bp.url;
    const title = escapeXml(bp.title || 'Blog Post');
    items += `
  <item>
    <title>${title}</title>
    <link>${url}</link>
    <guid isPermaLink="true">${url}</guid>
    <pubDate>${rfc822(pub)}</pubDate>
    <category>blog</category>
    <description><![CDATA[Latest insights from Zion Tech Group.]]></description>
  </item>`;
  }

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '<channel>',
    `  <title>Zion Tech Group</title>`,
    `  <link>${SITE_URL}</link>`,
    `  <description>AI, IT &amp; Micro SAAS Solutions — ${services.length} services and growing.</description>`,
    '  <language>en-us</language>',
    `  <lastBuildDate>${feedDate}</lastBuildDate>`,
    `  <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>`,
    items,
    '</channel>',
    '</rss>',
  ].join('\n');
}

function extractBlogInfo(html) {
  const titleM = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const title = titleM ? titleM[1].replace(/<[^>]+>/g, '').trim() : '';
  const dateM = html.match(/"datePublished"\s*:\s*"([^"]+)"/);
  return { title: title || 'Blog Post', pubDate: dateM ? new Date(dateM[1]) : null };
}

// ---- main ----

function main() {
  // Load service index
  const idxFile = path.join(outDir, 'service-index.json');
  let idx = {};
  try { idx = JSON.parse(fs.readFileSync(idxFile, 'utf8')); }
  catch (e) { console.warn('service-index.json missing, feed will be skipped:', e.message); }

  const allServices = idx.services || [];
  console.log(`services loaded: ${allServices.length}`);

  // Collect pages
  const pages = collectLeafPages();
  console.log(`sitemap pages: ${pages.length}`);

  // Blog info
  const blogDir = path.join(outDir, 'blog');
  const blogEntries = [];
  if (fs.existsSync(blogDir)) {
    for (const entry of fs.readdirSync(blogDir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const f = path.join(blogDir, entry.name, 'index.html');
      if (!fs.existsSync(f)) continue;
      const html = fs.readFileSync(f, 'utf8');
      const info = extractBlogInfo(html);
      blogEntries.push({
        url: `${SITE_URL}/blog/${entry.name}/`,
        title: info.title,
        lastmod: info.pubDate || fs.statSync(f).mtime,
      });
    }
  }
  console.log(`blog items: ${blogEntries.length}`);

  // Write sitemap
  const sitemap = buildSitemap(pages);
  const smPath = path.join(outDir, 'sitemap.xml');
  fs.writeFileSync(smPath, sitemap);
  console.log(`sitemap.xml: ${pages.length} urls`);
  // Also update public/sitemap.xml for direct GitHub Pages serving
  const publicSm = path.join(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(publicSm, sitemap);

  // Write feed
  const feedContent = buildFeed(allServices, blogEntries);
  const feedPath = path.join(outDir, 'feed.xml');
  fs.writeFileSync(feedPath, feedContent);
  console.log(`feed.xml: ${allServices.length} services + ${blogEntries.length} blog items`);
}

main();
