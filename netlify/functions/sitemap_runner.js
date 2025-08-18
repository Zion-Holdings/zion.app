const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('🚀 sitemap_runner function triggered');
    
    // Generate a basic sitemap
    const pagesDir = path.join(process.cwd(), 'pages');
    const publicDir = path.join(process.cwd(), 'public');
    
    let urls = [];
    
    // Add static pages
    if (fs.existsSync(pagesDir)) {
      const pageFiles = fs.readdirSync(pagesDir)
        .filter(f => f.endsWith('.tsx') || f.endsWith('.js'))
        .map(f => f.replace(/\.(tsx|js)$/, ''))
        .filter(f => f !== 'index' && f !== '_app' && f !== '_document');
      
      urls = urls.concat(pageFiles.map(page => `/${page}`));
    }
    
    // Add index page
    urls.unshift('/');
    
    // Generate sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>https://ziontechgroup.com${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}
</urlset>`;
    
    // Save sitemap to public directory
    const sitemapPath = path.join(publicDir, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, sitemap);
    
    console.log('✅ sitemap_runner completed successfully');
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Sitemap generated successfully',
        urls: urls,
        sitemapPath: sitemapPath,
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('❌ sitemap_runner failed:', error.message);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};