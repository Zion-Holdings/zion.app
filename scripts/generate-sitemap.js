#!/usr/bin/env node

/**
 * Sitemap Generator Script for Zion Tech Group
 * Generates XML, HTML, and JSON sitemaps for better SEO
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// For now, we'll create a simple sitemap generator inline
const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  
  const urls = [
    // Main pages
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.8 },
    { url: '/team', changefreq: 'monthly', priority: 0.7 },
    { url: '/mission', changefreq: 'monthly', priority: 0.7 },
    
    // Services
    { url: '/services', changefreq: 'weekly', priority: 0.9 },
    { url: '/services/ai-autonomous-systems', changefreq: 'weekly', priority: 0.8 },
    { url: '/services/quantum-technology', changefreq: 'weekly', priority: 0.8 },
    { url: '/services/cybersecurity', changefreq: 'weekly', priority: 0.8 },
    { url: '/services/it-infrastructure', changefreq: 'weekly', priority: 0.8 },
    { url: '/services/micro-saas-solutions', changefreq: 'weekly', priority: 0.8 },
    { url: '/services/industry-solutions', changefreq: 'weekly', priority: 0.8 },
    { url: '/services/innovative-new-services', changefreq: 'weekly', priority: 0.8 },
    { url: '/services/specialized-it-infrastructure', changefreq: 'weekly', priority: 0.8 },
    
    // Solutions
    { url: '/solutions/enterprise', changefreq: 'weekly', priority: 0.8 },
    { url: '/solutions/healthcare', changefreq: 'weekly', priority: 0.8 },
    
    // AI Solutions
    { url: '/ai-solutions', changefreq: 'weekly', priority: 0.9 },
    { url: '/services-showcase', changefreq: 'weekly', priority: 0.8 },
    { url: '/match', changefreq: 'weekly', priority: 0.7 },
    
    // Talent & Careers
    { url: '/talent', changefreq: 'weekly', priority: 0.7 },
    { url: '/talents', changefreq: 'weekly', priority: 0.7 },
    { url: '/careers', changefreq: 'weekly', priority: 0.7 },
    
    // Content
    { url: '/blog', changefreq: 'daily', priority: 0.6 },
    { url: '/news', changefreq: 'daily', priority: 0.6 },
    { url: '/emerging-tech', changefreq: 'weekly', priority: 0.6 },
    
    // Business
    { url: '/pricing', changefreq: 'monthly', priority: 0.7 },
    { url: '/partners', changefreq: 'monthly', priority: 0.6 },
    
    // Legal
    { url: '/privacy', changefreq: 'yearly', priority: 0.3 },
    { url: '/terms', changefreq: 'yearly', priority: 0.3 }
  ];

  // Generate XML sitemap
  const generateXML = () => {
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
    const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    const urlsetClose = '</urlset>';

    const urlElements = urls.map(url => {
      const urlElement = `<url>
        <loc>${baseUrl}${url.url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>${url.changefreq}</changefreq>
        <priority>${url.priority}</priority>
      </url>`;
      
      return urlElement.replace(/\s+/g, ' ').trim();
    }).join('');

    return `${xmlHeader}\n${urlsetOpen}\n${urlElements}\n${urlsetClose}`;
  };

  // Generate robots.txt
  const generateRobotsTxt = () => {
    return `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/

# Allow important pages
Allow: /
Allow: /services/
Allow: /solutions/
Allow: /about/
Allow: /contact/
Allow: /blog/
Allow: /careers/

# Crawl delay (optional)
Crawl-delay: 1`;
  };

  // Generate HTML sitemap
  const generateHTML = () => {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sitemap - Zion Tech Group</title>
    <meta name="description" content="Complete sitemap of Zion Tech Group website">
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; background: white; padding: 40px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        h1 { color: #00e5ff; border-bottom: 2px solid #00e5ff; padding-bottom: 10px; }
        .sitemap-section { margin: 30px 0; }
        .sitemap-section h2 { color: #333; margin-bottom: 15px; }
        .sitemap-links { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .sitemap-link { padding: 15px; border: 1px solid #ddd; border-radius: 8px; text-decoration: none; color: #333; transition: all 0.3s ease; }
        .sitemap-link:hover { background-color: #f8f9fa; border-color: #00e5ff; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,229,255,0.2); }
        .priority-high { border-left: 4px solid #00e5ff; }
        .priority-medium { border-left: 4px solid #ff9800; }
        .priority-low { border-left: 4px solid #4caf50; }
        .stats { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-top: 30px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Zion Tech Group - Sitemap</h1>
        <p>Complete navigation guide for our website. Find all our services, solutions, and resources.</p>
        
        <div class="sitemap-section">
            <h2>Main Pages</h2>
            <div class="sitemap-links">
                ${urls
                  .filter(url => url.priority && url.priority >= 0.8)
                  .map(url => `
                    <a href="${baseUrl}${url.url}" class="sitemap-link priority-high">
                        ${url.url === '/' ? 'Home' : url.url.split('/').pop()?.replace(/-/g, ' ').replace(/\\b\\w/g, l => l.toUpperCase()) || url.url}
                    </a>
                  `).join('')}
            </div>
        </div>
        
        <div class="sitemap-section">
            <h2>Services</h2>
            <div class="sitemap-links">
                ${urls
                  .filter(url => url.url.startsWith('/services/'))
                  .map(url => `
                    <a href="${baseUrl}${url.url}" class="sitemap-link priority-medium">
                        ${url.url.split('/').pop()?.replace(/-/g, ' ').replace(/\\b\\w/g, l => l.toUpperCase()) || url.url}
                    </a>
                  `).join('')}
            </div>
        </div>
        
        <div class="sitemap-section">
            <h2>Solutions</h2>
            <div class="sitemap-links">
                ${urls
                  .filter(url => url.url.startsWith('/solutions/'))
                  .map(url => `
                    <a href="${baseUrl}${url.url}" class="sitemap-link priority-medium">
                        ${url.url.split('/').pop()?.replace(/-/g, ' ').replace(/\\b\\w/g, l => l.toUpperCase()) || url.url}
                    </a>
                  `).join('')}
            </div>
        </div>
        
        <div class="sitemap-section">
            <h2>Other Pages</h2>
            <div class="sitemap-links">
                ${urls
                  .filter(url => !url.url.startsWith('/services/') && !url.url.startsWith('/solutions/') && url.url !== '/' && url.priority && url.priority < 0.8)
                  .map(url => `
                    <a href="${baseUrl}${url.url}" class="sitemap-link priority-low">
                        ${url.url.split('/').pop()?.replace(/-/g, ' ').replace(/\\b\\w/g, l => l.toUpperCase()) || url.url}
                    </a>
                  `).join('')}
            </div>
        </div>
        
        <div class="stats">
            <p><strong>Total Pages:</strong> ${urls.length}</p>
            <p><strong>Last Updated:</strong> ${new Date().toLocaleDateString()}</p>
            <p><strong>Generated by:</strong> Zion Tech Group Sitemap Generator</p>
        </div>
    </div>
</body>
</html>`;

    return html;
  };

  // Generate JSON sitemap
  const generateJSON = () => {
    const jsonSitemap = {
      baseUrl,
      generatedAt: new Date().toISOString(),
      urls: urls.map(url => ({
        ...url,
        fullUrl: `${baseUrl}${url.url}`,
        lastmod: new Date().toISOString()
      }))
    };

    return JSON.stringify(jsonSitemap, null, 2);
  };

  return {
    xml: generateXML(),
    robots: generateRobotsTxt(),
    html: generateHTML(),
    json: generateJSON()
  };
};

// Main execution
const main = () => {
  console.log('🚀 Generating sitemaps for Zion Tech Group...');
  
  try {
    const sitemaps = generateSitemap();
    
    // Ensure public directory exists
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Write sitemap files
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemaps.xml);
    console.log('✅ Generated sitemap.xml');
    
    fs.writeFileSync(path.join(publicDir, 'robots.txt'), sitemaps.robots);
    console.log('✅ Generated robots.txt');
    
    fs.writeFileSync(path.join(publicDir, 'sitemap.html'), sitemaps.html);
    console.log('✅ Generated sitemap.html');
    
    fs.writeFileSync(path.join(publicDir, 'sitemap.json'), sitemaps.json);
    console.log('✅ Generated sitemap.json');
    
    console.log('\n🎉 All sitemap files generated successfully!');
    console.log('📁 Files saved to:', publicDir);
    console.log('\n📊 Sitemap Statistics:');
    console.log('   - Total URLs:', sitemaps.xml.match(/<url>/g)?.length || 0);
    console.log('   - Base URL:', 'https://ziontechgroup.com');
    console.log('   - Generated:', new Date().toLocaleString());
    
  } catch (error) {
    console.error('❌ Error generating sitemaps:', error);
    process.exit(1);
  }
};

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { generateSitemap, main };
