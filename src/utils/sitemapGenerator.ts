interface SitemapUrl {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

interface SitemapConfig {
  baseUrl: string;
  urls: SitemapUrl[];
  outputPath?: string;
}

export class SitemapGenerator {
  private config: SitemapConfig;

  constructor(config: SitemapConfig) {
    this.config = {
      outputPath: './public/sitemap.xml',
      ...config
    };
  }

  /**
   * Generate XML sitemap content
   */
  generateXML(): string {
    const { baseUrl, urls } = this.config;
    
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
    const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    const urlsetClose = '</urlset>';

    const urlElements = urls.map(url => {
      const urlElement = `<url>
        <loc>${baseUrl}${url.url}</loc>
        ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
        ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
        ${url.priority ? `<priority>${url.priority}</priority>` : ''}
      </url>`;
      
      return urlElement.replace(/\s+/g, ' ').trim();
    }).join('');

    return `${xmlHeader}\n${urlsetOpen}\n${urlElements}\n${urlsetClose}`;
  }

  /**
   * Generate sitemap index for large sites
   */
  generateIndex(sitemaps: string[]): string {
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
    const sitemapindexOpen = '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    const sitemapindexClose = '</sitemapindex>';

    const sitemapElements = sitemaps.map(sitemap => {
      return `<sitemap>
        <loc>${sitemap}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </sitemap>`;
    }).join('');

    return `${xmlHeader}\n${sitemapindexOpen}\n${sitemapElements}\n${sitemapindexClose}`;
  }

  /**
   * Generate robots.txt content
   */
  generateRobotsTxt(): string {
    const { baseUrl } = this.config;
    
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
  }

  /**
   * Generate JSON sitemap for JavaScript applications
   */
  generateJSON(): string {
    const { baseUrl, urls } = this.config;
    
    const jsonSitemap = {
      baseUrl,
      urls: urls.map(url => ({
        ...url,
        fullUrl: `${baseUrl}${url.url}`,
        lastmod: url.lastmod || new Date().toISOString()
      }))
    };

    return JSON.stringify(jsonSitemap, null, 2);
  }

  /**
   * Generate HTML sitemap for users
   */
  generateHTML(): string {
    const { baseUrl, urls } = this.config;
    
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sitemap - Zion Tech Group</title>
    <meta name="description" content="Complete sitemap of Zion Tech Group website">
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
        .container { max-width: 1200px; margin: 0 auto; }
        h1 { color: #00e5ff; border-bottom: 2px solid #00e5ff; padding-bottom: 10px; }
        .sitemap-section { margin: 30px 0; }
        .sitemap-section h2 { color: #333; margin-bottom: 15px; }
        .sitemap-links { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .sitemap-link { padding: 10px; border: 1px solid #ddd; border-radius: 5px; text-decoration: none; color: #333; }
        .sitemap-link:hover { background-color: #f5f5f5; border-color: #00e5ff; }
        .priority-high { border-left: 4px solid #00e5ff; }
        .priority-medium { border-left: 4px solid #ff9800; }
        .priority-low { border-left: 4px solid #4caf50; }
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
                        ${url.url === '/' ? 'Home' : url.url.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || url.url}
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
                        ${url.url.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || url.url}
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
                        ${url.url.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || url.url}
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
                        ${url.url.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || url.url}
                    </a>
                  `).join('')}
            </div>
        </div>
        
        <div class="sitemap-section">
            <p><strong>Total Pages:</strong> ${urls.length}</p>
            <p><strong>Last Updated:</strong> ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`;

    return html;
  }
}

// Default sitemap configuration for Zion Tech Group
export const defaultSitemapConfig: SitemapConfig = {
  baseUrl: 'https://ziontechgroup.com',
  urls: [
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
  ]
};

// Utility function to generate all sitemap files
export const generateAllSitemaps = async (config: SitemapConfig = defaultSitemapConfig) => {
  const generator = new SitemapGenerator(config);
  
  try {
    // Generate XML sitemap
    const xmlSitemap = generator.generateXML();
    
    // Generate robots.txt
    const robotsTxt = generator.generateRobotsTxt();
    
    // Generate HTML sitemap
    const htmlSitemap = generator.generateHTML();
    
    // Generate JSON sitemap
    const jsonSitemap = generator.generateJSON();
    
    return {
      xml: xmlSitemap,
      robots: robotsTxt,
      html: htmlSitemap,
      json: jsonSitemap
    };
  } catch (error) {
    console.error('Error generating sitemaps:', error);
    throw error;
  }
};

export default SitemapGenerator;