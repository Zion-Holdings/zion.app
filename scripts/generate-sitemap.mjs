#!/usr/bin/env node

import { writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

// Base URL for the website
const BASE_URL = 'https://ziontechgroup.com';

// Priority and change frequency for different types of pages
const PAGE_PRIORITIES = {
  '/': { priority: '1.0', changefreq: 'daily' },
  '/services': { priority: '0.9', changefreq: 'weekly' },
  '/solutions': { priority: '0.9', changefreq: 'weekly' },
  '/about': { priority: '0.8', changefreq: 'monthly' },
  '/contact': { priority: '0.8', changefreq: 'monthly' },
  '/multiverse/launch': { priority: '0.9', changefreq: 'weekly' },
  '/admin/os-deploy': { priority: '0.7', changefreq: 'monthly' },
  '/admin/instances': { priority: '0.7', changefreq: 'monthly' },
  '/docs': { priority: '0.8', changefreq: 'weekly' },
  '/api': { priority: '0.7', changefreq: 'monthly' },
  '/community': { priority: '0.6', changefreq: 'weekly' },
  '/privacy': { priority: '0.5', changefreq: 'yearly' },
  '/terms': { priority: '0.5', changefreq: 'yearly' },
  '/cookies': { priority: '0.5', changefreq: 'yearly' },
};

// Static pages that should be included
const STATIC_PAGES = [
  '/',
  '/services',
  '/solutions',
  '/about',
  '/contact',
  '/multiverse/launch',
  '/admin/os-deploy',
  '/admin/instances',
  '/docs',
  '/api',
  '/community',
  '/privacy',
  '/terms',
  '/cookies',
];

// Function to generate sitemap XML
function generateSitemapXML(pages) {
  const currentDate = new Date().toISOString();
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  pages.forEach(page => {
    const { url, priority, changefreq, lastmod } = page;
    xml += '  <url>\n';
    xml += `    <loc>${url}</loc>\n`;
    if (lastmod) {
      xml += `    <lastmod>${lastmod}</lastmod>\n`;
    }
    if (changefreq) {
      xml += `    <changefreq>${changefreq}</changefreq>\n`;
    }
    if (priority) {
      xml += `    <priority>${priority}</priority>\n`;
    }
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  return xml;
}

// Function to scan for dynamic pages (if any)
function scanForDynamicPages() {
  const dynamicPages = [];
  
  try {
    // Look for potential dynamic content in the app directory
    const appDir = join(__dirname, '..', 'zion-os', 'src', 'app');
    if (statSync(appDir).isDirectory()) {
      const scanDirectory = (dir, basePath = '') => {
        const items = readdirSync(dir);
        
        items.forEach(item => {
          const fullPath = join(dir, item);
          const stat = statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.')) {
            // Check if it's a page directory
            if (item === 'page.tsx' || item === 'page.tsx') {
              const routePath = basePath || '/';
              if (routePath !== '/' && !STATIC_PAGES.includes(routePath)) {
                dynamicPages.push({
                  url: `${BASE_URL}${routePath}`,
                  priority: '0.6',
                  changefreq: 'monthly',
                  lastmod: new Date().toISOString()
                });
              }
            } else {
              // Recursively scan subdirectories
              const newBasePath = basePath ? `${basePath}/${item}` : `/${item}`;
              scanDirectory(fullPath, newBasePath);
            }
          }
        });
      };
      
      scanDirectory(appDir);
    }
  } catch (error) {
    console.log('Could not scan for dynamic pages:', error.message);
  }
  
  return dynamicPages;
}

// Main function to generate sitemap
function generateSitemap() {
  console.log('Generating sitemap...');
  
  // Create static pages with metadata
  const staticPages = STATIC_PAGES.map(path => {
    const metadata = PAGE_PRIORITIES[path] || { priority: '0.6', changefreq: 'monthly' };
    return {
      url: `${BASE_URL}${path}`,
      priority: metadata.priority,
      changefreq: metadata.changefreq,
      lastmod: new Date().toISOString()
    };
  });
  
  // Scan for dynamic pages
  const dynamicPages = scanForDynamicPages();
  
  // Combine all pages
  const allPages = [...staticPages, ...dynamicPages];
  
  // Generate XML
  const sitemapXML = generateSitemapXML(allPages);
  
  // Write to file
  const outputPath = join(__dirname, '..', 'public', 'sitemap.xml');
  writeFileSync(outputPath, sitemapXML, 'utf8');
  
  console.log(`Sitemap generated successfully with ${allPages.length} pages`);
  console.log(`Output: ${outputPath}`);
  
  // Also generate a robots.txt file
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${BASE_URL}/sitemap.xml

# Disallow admin areas for search engines
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /temp_*/
Disallow: /zion-os/.next/

# Allow important pages
Allow: /services
Allow: /solutions
Allow: /about
Allow: /contact
Allow: /multiverse/launch
Allow: /docs
Allow: /community

# Crawl delay (optional)
Crawl-delay: 1`;
  
  const robotsPath = join(__dirname, '..', 'public', 'robots.txt');
  writeFileSync(robotsPath, robotsTxt, 'utf8');
  
  console.log(`Robots.txt generated: ${robotsPath}`);
  
  return allPages;
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    generateSitemap();
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

export { generateSitemap };
