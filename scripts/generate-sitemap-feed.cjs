#!/usr/bin/env node
/**
 * Generate sitemap.xml from services data and known static routes.
 * Reads app/data/servicesData.json (master catalog) and produces a valid XML sitemap.
 */
const fs = require('fs');
const path = require('path');

const repo = process.cwd();
const SITE_URL = 'https://ziontechgroup.com';
const today = new Date().toISOString().split('T')[0];

// Static routes (from app/ directory structure, excluding dynamic routes)
const staticRoutes = [
  '/',
  '/about/',
  '/academy/',
  '/agents-monitoring/',
  '/ai/',
  '/ai-services/',
  '/ai-lab/',
  '/ai-services-index/',
  '/blog/',
  '/business-customers/',
  '/careers/',
  '/case-studies/',
  '/contact/',
  '/cookies/',
  '/dashboard/',
  '/faq/',
  '/free-contact/',
  '/free-resources/',
  '/governments/',
  '/help/',
  '/industries/',
  '/industry-solutions/',
  '/integrators/',
  '/it-consulting-services/',
  '/it-vendors/',
  '/products/',
  '/providers/',
  '/public-roadmap/',
  '/roi-calculator/',
  '/search/',
  '/sla/',
  '/solutions/',
  '/status/',
  '/terms/',
  '/testimonials/',
  '/tools/',
  '/tools/agent-prompt-builder/',
  '/tools/ai-roi-calculator/',
  '/tools/api-health-check/',
  '/tools/cloud-cost-calculator/',
  '/tools/cloud-cost-optimizer/',
  '/tools/cron-agent-calculator/',
  '/tools/json-schema-validator/',
  '/tools/llm-payload-estimator/',
  '/tools/mcp-tester/',
  '/tools/security-headers-analyzer/',
  '/use-cases/',
  '/services/',
];

// Load services data
let services = [];
try {
  const servicesDataPath = path.join(repo, 'app/data/servicesData.json');
  const raw = fs.readFileSync(servicesDataPath, 'utf8');
  services = JSON.parse(raw);
  console.log(`Loaded ${services.length} services from servicesData.json`);
} catch (e) {
  console.error('Failed to load servicesData.json:', e.message);
  process.exit(1);
}

// Also load blog posts for sitemap
let blogPosts = [];
try {
  const blogDir = path.join(repo, 'app/blog');
  if (fs.existsSync(blogDir)) {
    const entries = fs.readdirSync(blogDir, { withFileTypes: true });
    for (const entry of entries) {
      if (entry.isDirectory() && fs.existsSync(path.join(entry.parentPath || blogDir, entry.name, 'page.tsx'))) {
        blogPosts.push(entry.name);
      }
    }
  }
  console.log(`Loaded ${blogPosts.length} blog posts`);
} catch (e) {
  console.warn('Could not load blog posts:', e.message);
}

// Build URL entries
const entries = [];

// Static routes (priority 1.0, daily)
for (const route of staticRoutes) {
  entries.push({
    loc: `${SITE_URL}${route}`,
    lastmod: today,
    changefreq: 'daily',
    priority: route === '/' ? '1.0' : '0.8',
  });
}

// Service detail pages (priority 0.8, weekly)
for (const svc of services) {
  const slug = svc.id;
  // Use href if available, otherwise construct slug
  const url = svc.href && svc.href.startsWith('/') 
    ? `${SITE_URL}${svc.href}` 
    : `${SITE_URL}/services/${slug}/`;
  entries.push({
    loc: url,
    lastmod: today,
    changefreq: 'weekly',
    priority: '0.8',
  });
}

// Blog posts (priority 0.6, monthly)
for (const post of blogPosts) {
  entries.push({
    loc: `${SITE_URL}/blog/${post}/`,
    lastmod: today,
    changefreq: 'monthly',
    priority: '0.6',
  });
}

// Generate XML with proper escaping
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

const outPath = path.join(repo, 'public/sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf8');
console.log(`Generated sitemap.xml with ${entries.length} URLs at ${outPath}`);
