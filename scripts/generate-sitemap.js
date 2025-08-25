#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base URL for the website
const BASE_URL = 'https://ziontechgroup.com';

// Define all the routes and their metadata
const routes = [
  // Main pages
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/about', priority: '0.8', changefreq: 'weekly' },
  { path: '/contact', priority: '0.8', changefreq: 'weekly' },
  { path: '/mission', priority: '0.7', changefreq: 'monthly' },
  { path: '/team', priority: '0.7', changefreq: 'monthly' },
  { path: '/pricing', priority: '0.8', changefreq: 'weekly' },
  { path: '/careers', priority: '0.6', changefreq: 'monthly' },
  { path: '/partners', priority: '0.6', changefreq: 'monthly' },
  { path: '/blog', priority: '0.7', changefreq: 'weekly' },
  { path: '/news', priority: '0.7', changefreq: 'weekly' },

  // Services overview
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/services-overview', priority: '0.8', changefreq: 'weekly' },
  { path: '/ai-solutions', priority: '0.9', changefreq: 'weekly' },
  { path: '/services-showcase', priority: '0.8', changefreq: 'weekly' },

  // AI Services
  { path: '/ai-services', priority: '0.9', changefreq: 'weekly' },
  { path: '/services/ai-autonomous-systems', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/ai-business-intelligence', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/ai-marketing-automation', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/ai-hr-recruitment', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/ai-legal-tech', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/ai-healthcare-analytics', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/ai-code-review', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/ai-content-generator', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/ai-autonomous-decision-engine', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/ai-autonomous-ecosystem', priority: '0.8', changefreq: 'weekly' },

  // Cybersecurity Services
  { path: '/services/cybersecurity', priority: '0.9', changefreq: 'weekly' },
  { path: '/services/quantum-security', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/security-assessment', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/compliance-audit', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/threat-detection', priority: '0.8', changefreq: 'weekly' },

  // Cloud & Infrastructure
  { path: '/cloud-devops', priority: '0.9', changefreq: 'weekly' },
  { path: '/services/cloud-migration', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/network-infrastructure', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/managed-it-services', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/devops-automation', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/it-infrastructure', priority: '0.8', changefreq: 'weekly' },

  // Emerging Technologies
  { path: '/services/quantum-technology', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/blockchain-solutions', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/iot-platforms', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/quantum-computing', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/ar-vr-solutions', priority: '0.8', changefreq: 'weekly' },

  // Industry Solutions
  { path: '/services/industry-solutions', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/financial-services', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/manufacturing-intelligence', priority: '0.8', changefreq: 'weekly' },
  { path: '/services/retail-technology', priority: '0.8', changefreq: 'weekly' },

  // Micro SAAS Solutions
  { path: '/services/micro-saas-solutions', priority: '0.9', changefreq: 'weekly' },
  { path: '/services/specialized-it-infrastructure', priority: '0.8', changefreq: 'weekly' },

  // Solutions
  { path: '/solutions/enterprise', priority: '0.9', changefreq: 'weekly' },
  { path: '/solutions/healthcare', priority: '0.8', changefreq: 'weekly' },
  { path: '/enterprise-solutions', priority: '0.9', changefreq: 'weekly' },
  { path: '/digital-transformation', priority: '0.9', changefreq: 'weekly' },

  // Specialized pages
  { path: '/emerging-tech', priority: '0.7', changefreq: 'weekly' },
  { path: '/talent', priority: '0.6', changefreq: 'monthly' },
  { path: '/talents', priority: '0.6', changefreq: 'monthly' },
  { path: '/match', priority: '0.7', changefreq: 'weekly' },

  // Utility pages
  { path: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms', priority: '0.3', changefreq: 'yearly' },
  { path: '/cookies', priority: '0.3', changefreq: 'yearly' },
  { path: '/accessibility', priority: '0.4', changefreq: 'yearly' },
];

// Generate sitemap XML
function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${BASE_URL}${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
}

// Generate robots.txt
function generateRobotsTxt() {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${BASE_URL}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /services/
Allow: /solutions/
Allow: /about/
Allow: /contact/
Allow: /blog/
Allow: /news/

# Crawl delay
Crawl-delay: 1`;
}

// Write files
function writeFiles() {
  try {
    // Create scripts directory if it doesn't exist
    const scriptsDir = path.join(__dirname);
    if (!fs.existsSync(scriptsDir)) {
      fs.mkdirSync(scriptsDir, { recursive: true });
    }

    // Write sitemap.xml
    const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
    const sitemapDir = path.dirname(sitemapPath);
    if (!fs.existsSync(sitemapDir)) {
      fs.mkdirSync(sitemapDir, { recursive: true });
    }
    fs.writeFileSync(sitemapPath, generateSitemap());
    console.log('✅ Sitemap generated:', sitemapPath);

    // Write robots.txt
    const robotsPath = path.join(__dirname, '..', 'public', 'robots.txt');
    fs.writeFileSync(robotsPath, generateRobotsTxt());
    console.log('✅ Robots.txt generated:', robotsPath);

    // Write sitemap index
    const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>
</sitemapindex>`;

    const sitemapIndexPath = path.join(__dirname, '..', 'public', 'sitemap-index.xml');
    fs.writeFileSync(sitemapIndexPath, sitemapIndex);
    console.log('✅ Sitemap index generated:', sitemapIndexPath);

    console.log('\n🎉 All sitemap files generated successfully!');
    console.log(`📊 Total routes: ${routes.length}`);
    console.log(`🌐 Base URL: ${BASE_URL}`);
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run the script
writeFiles();
