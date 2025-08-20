#!/usr/bin/env node

/**
 * Generate Sitemap
 * Creates a sitemap.xml file for the website
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://zion.app';
const PAGES_DIR = path.join(__dirname, '..', 'pages');

// Pages to include in sitemap
const STATIC_PAGES = [
  '/',
  '/about',
  '/services',
  '/resources',
  '/case-studies',
  '/blog',
  '/contact',
  '/privacy'
];

// Blog posts (you can expand this list)
const BLOG_POSTS = [
  '/blog/ai-automation-trends-2025',
  '/blog/ai-ethics-automation',
  '/blog/autonomous-content-generation',
  '/blog/cloud-native-automation',
  '/blog/future-of-work',
  '/blog/performance-optimization'
];

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${STATIC_PAGES.map(page => `  <url>
    <loc>${BASE_URL}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
${BLOG_POSTS.map(post => `  <url>
    <loc>${BASE_URL}${post}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join('\n')}
</urlset>`;

  const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  
  // Ensure public directory exists
  const publicDir = path.dirname(outputPath);
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, sitemap);
  console.log(`✅ Sitemap generated at: ${outputPath}`);
}

if (require.main === module) {
  generateSitemap();
}

module.exports = { generateSitemap };