#!/usr/bin/env node
/**
 * Generate sitemap.xml — only pages that ACTUALLY EXIST on disk.
 * Reads service page directories from app/services/ and blog posts from app/blog/.
 * Does NOT pull from servicesData.json (which may have phantom entries).
 * 
 * INCLUDES: All Hermes Agent specific pages that are real routes
 * AUTO-DISCOVER: Tools, Services, Docs from actual directory structure
 */
const fs = require('fs');
const path = require('path');

const repo = process.cwd();
const SITE_URL = 'https://ziontechgroup.com';
const today = new Date().toISOString().split('T')[0];

// ─── Static routes ──────────────────────────────────────────────
const staticRoutes = [
  '/', '/about/', '/academy/', '/agents-monitoring/', '/ai/', '/ai-services/',
  '/ai-lab/', '/ai-services-index/', '/blog/', '/business-customers/', '/careers/',
  '/case-studies/', '/contact/', '/cookies/', '/dashboard/', '/faq/', '/free-contact/',
  '/free-resources/', '/governments/', '/help/', '/industries/', '/industry-solutions/',
  '/integrators/', '/it-consulting-services/', '/it-vendors/', '/products/', '/providers/',
  '/public-roadmap/', '/roi-calculator/', '/search/', '/sla/', '/solutions/', '/status/',
  '/terms/', '/testimonials/', '/tools/',
  // ─── Hermes-specific static routes ────────────────────────────────
  '/hermes-agents/', '/hermes-monitor/', '/hermes-agents-services/',
  '/hermes-about/', '/hermes-case-studies/', '/hermes-faq/', '/hermes-integrations/',
  '/hermes-pricing/', '/hermes-security/', '/hermes-swarm/', '/hermes-tools/',
];

// ─── Discover ACTUAL service page directories ───────────────────
const servicesDir = path.join(repo, 'app', 'services');
const svcDirs = fs.existsSync(servicesDir)
  ? fs.readdirSync(servicesDir, { withFileTypes: true })
      .filter(d => d.isDirectory() && !d.name.startsWith('.') && d.name !== '_dynamic')
      .map(d => d.name)
  : [];

console.log(`Discovered ${svcDirs.length} service page directories on disk`);

// ─── Discover ACTUAL tool page directories ───────────────────────
const toolsDir = path.join(repo, 'app', 'tools');
const toolDirs = fs.existsSync(toolsDir)
  ? fs.readdirSync(toolsDir, { withFileTypes: true })
      .filter(d => d.isDirectory() && !d.name.startsWith('.') && fs.existsSync(path.join(toolsDir, d.name, 'page.tsx')))
      .map(d => d.name)
  : [];

console.log(`Discovered ${toolDirs.length} tool page directories on disk`);

// ─── Blog posts (from data/blogPosts.json) ───────────────────────
const blogDataPath = path.join(repo, 'data', 'blogPosts.json');
let blogPosts = [];
if (fs.existsSync(blogDataPath)) {
  const blogData = JSON.parse(fs.readFileSync(blogDataPath, 'utf8'));
  blogPosts = blogData.map(function(p) { return p.slug; });
}
console.log(`Discovered ${blogPosts.length} blog posts from data/blogPosts.json`);

// ─── Docs ───────────────────────────────────────────────────────
const docsDir = path.join(repo, 'app', 'docs');
const docsPosts = fs.existsSync(docsDir)
  ? fs.readdirSync(docsDir, { withFileTypes: true })
      .filter(d => d.isDirectory() && !d.name.startsWith('.') && fs.existsSync(path.join(docsDir, d.name, 'page.tsx')))
      .map(d => d.name)
  : [];

console.log(`Discovered ${docsPosts.length} doc directories on disk`);

// ─── Solutions ──────────────────────────────────────────────────
const solDir = path.join(repo, 'app', 'solutions');
const solPages = fs.existsSync(solDir)
  ? fs.readdirSync(solDir, { withFileTypes: true })
      .filter(d => d.isDirectory() && !d.name.startsWith('.') && fs.existsSync(path.join(solDir, d.name, 'page.tsx')))
      .map(d => d.name)
  : [];

console.log(`Discovered ${solPages.length} solution directories on disk`);

// ─── Case Studies (including slug-based) ───────────────────────
const caseDir = path.join(repo, 'app', 'case-studies');
let casePages = [];
if (fs.existsSync(caseDir)) {
  const caseEntries = fs.readdirSync(caseDir, { withFileTypes: true });
  // Find actual page.tsx files
  const pagesWithContent = caseEntries
    .filter(d => d.isDirectory() && !d.name.startsWith('.'))
    .filter(d => {
      const pagePath = path.join(caseDir, d.name, 'page.tsx');
      return fs.existsSync(pagePath) && fs.statSync(pagePath).size > 100;
    })
    .map(d => d.name);
  
  // Also check for [slug] pattern - we use hermes-agent-fleet directly
  if (caseEntries.some(d => d.name === 'hermes-agent-fleet' && fs.existsSync(path.join(caseDir, 'hermes-agent-fleet', 'page.tsx')))) {
    pagesWithContent.push('hermes-agent-fleet');
  }
  
  casePages = [...new Set(pagesWithContent)];
}

console.log(`Discovered ${casePages.length} case study directories on disk`);

// ─── Build entries ──────────────────────────────────────────────
const entries = [];

// Static routes
for (const route of staticRoutes) {
  entries.push({
    loc: `${SITE_URL}${route}`,
    lastmod: today,
    changefreq: route === '/' ? 'daily' : 'weekly',
    priority: route === '/' ? '1.0' : '0.8',
  });
}

// Service pages — ONLY those with actual directories
for (const dir of svcDirs) {
  entries.push({
    loc: `${SITE_URL}/services/${dir}/`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.5',
  });
}

// Tool pages
for (const tool of toolDirs) {
  entries.push({
    loc: `${SITE_URL}/tools/${tool}/`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.6',
  });
}

// Blog posts
for (const post of blogPosts) {
  entries.push({
    loc: `${SITE_URL}/blog/${post}/`,
    lastmod: today,
    changefreq: 'weekly',
    priority: '0.6',
  });
}

// Docs
for (const doc of docsPosts) {
  entries.push({
    loc: `${SITE_URL}/docs/${doc}/`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.6',
  });
}

// Solutions
for (const sol of solPages) {
  entries.push({
    loc: `${SITE_URL}/solutions/${sol}/`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.6',
  });
}

// Case studies
for (const cs of casePages) {
  entries.push({
    loc: `${SITE_URL}/case-studies/${cs}/`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.6',
  });
}

// ─── XML ─────────────────────────────────────────────────────────
function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...entries.map(e =>
    `  <url>\n    <loc>${escapeXml(e.loc)}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
  ),
  '</urlset>',
].join('\n');

const outPath = path.join(repo, 'public', 'sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf8');
console.log(`Generated public/sitemap.xml with ${entries.length} URLs`);
console.log(`  Static/Hermes pages: ${staticRoutes.filter(r => !r.includes('services') && !r.includes('tools')).length}`);
console.log(`  Hermes services (real dirs): ${staticRoutes.filter(r => r.startsWith('/hermes')).length}`);
console.log(`  Services (real dirs): ${svcDirs.length}`);
console.log(`  Tools (real dirs): ${toolDirs.length}`);
console.log(`  Blog: ${blogPosts.length}`);
console.log(`  Docs: ${docsPosts.length}`);
console.log(`  Solutions: ${solPages.length}`);
console.log(`  Case studies: ${casePages.length}`);