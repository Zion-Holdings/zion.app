#!/usr/bin/env node
/**
 * Generate sitemap.xml — only pages that ACTUALLY EXIST on disk.
 * Reads service page directories from app/services/ and blog posts from app/blog/.
 * Does NOT pull from servicesData.json (which may have phantom entries).
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
  '/terms/', '/testimonials/', '/tools/', '/tools/agent-prompt-builder/', '/tools/ai-roi-calculator/',
  '/tools/api-health-check/', '/tools/cloud-cost-calculator/', '/tools/cloud-cost-optimizer/',
  '/tools/cron-agent-calculator/', '/tools/json-schema-validator/', '/tools/llm-payload-estimator/',
  '/tools/mcp-tester/', '/tools/security-headers-analyzer/', '/tools/hermes-agent-fleet-manager/', '/use-cases/', '/services/',
  '/services/hermes-agent/', '/services/hermes-agent-training/', '/services/hermes-ai-agent-platform/',
  '/solutions/hermes-ai-agents/', '/case-studies/hermes-agent-fleet/', '/docs/hermes-agent-skills/',
 '/docs/hermes-agent-architecture/',
 '/docs/hermes-agent-profiles/',
  '/docs/agent-framework-comparison/', '/docs/hermes-agent-installation/', '/docs/hermes-agent-mcp-integration/',
  '/hermes-agents/', '/hermes-monitor/',
];

// ─── Discover ACTUAL service page directories ───────────────────
const servicesDir = path.join(repo, 'app', 'services');
const svcDirs = fs.existsSync(servicesDir)
  ? fs.readdirSync(servicesDir, { withFileTypes: true })
      .filter(d => d.isDirectory() && !d.name.startsWith('.') && d.name !== '_dynamic')
      .map(d => d.name)
  : [];

console.log(`Discovered ${svcDirs.length} service page directories on disk`);

// ─── Blog posts ─────────────────────────────────────────────────
const blogDir = path.join(repo, 'app', 'blog');
const blogPosts = fs.existsSync(blogDir)
  ? fs.readdirSync(blogDir, { withFileTypes: true })
      .filter(d => d.isDirectory() && !d.name.startsWith('.') && fs.existsSync(path.join(blogDir, d.name, 'page.tsx')))
      .map(d => d.name)
  : [];

console.log(`Discovered ${blogPosts.length} blog post directories on disk`);

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

// ─── Case Studies ──────────────────────────────────────────────
const caseDir = path.join(repo, 'app', 'case-studies');
const casePages = fs.existsSync(caseDir)
  ? fs.readdirSync(caseDir, { withFileTypes: true })
      .filter(d => d.isDirectory() && !d.name.startsWith('.') && fs.existsSync(path.join(caseDir, d.name, 'page.tsx')))
      .map(d => d.name)
  : [];

console.log(`Discovered ${casePages.length} case study directories on disk`);

// ─── Hermes pages ──────────────────────────────────────────────
const hermesPages = [
  '/hermes-about/', '/hermes-case-studies/', '/hermes-faq/', '/hermes-integrations/',
  '/hermes-pricing/', '/hermes-security/', '/hermes-swarm/', '/hermes-tools/',
];

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

// Hermes pages
for (const route of hermesPages) {
  entries.push({
    loc: `${SITE_URL}${route}`,
    lastmod: today,
    changefreq: 'weekly',
    priority: '0.8',
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
console.log(`  Static: ${staticRoutes.length}`);
console.log(`  Hermes: ${hermesPages.length}`);
console.log(`  Services (real dirs): ${svcDirs.length}`);
console.log(`  Blog: ${blogPosts.length}`);
console.log(`  Docs: ${docsPosts.length}`);
console.log(`  Solutions: ${solPages.length}`);
console.log(`  Case studies: ${casePages.length}`);
