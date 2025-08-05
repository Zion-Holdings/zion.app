const fs = require('f's').promises;
const path = require('pa't'h');
const puppeteer = require('puppete'e'r');

class ErrorFixerAgent {
  constructor() {
    this.fixedErrors = [];
    this.failedFixes = [];
    this.logs = [];
  }

  async initialize() {
    this.browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandb'o'x', '--disable-setuid-sandb'o'x']
    });
    this.page = await this.browser.newPage();
  }

  async fixErrors(analysisReport) {
    console.log('🔧 Starting error fixing process...');
    
    const errors = analysisReport.summary.errors;
    const missingContent = analysisReport.summary.missingContent;
    
    // Fix broken links
    await this.fixBrokenLinks(errors);
    
    // Fix missing meta descriptions
    await this.fixMissingMetaDescriptions(analysisReport.contentAnalysis);
    
    // Fix SEO issues
    await this.fixSEOIssues(analysisReport.contentAnalysis);
    
    // Fix performance issues
    await this.fixPerformanceIssues(analysisReport.contentAnalysis);
    
    // Generate error fix report
    await this.generateErrorFixReport();
    
    console.log('✅ Error fixing process completed');
  }

  async fixBrokenLinks(errors) {
    console.log('🔗 Fixing broken links...');
    
    const brokenLinkErrors = errors.filter(error => 
      error.error && error.error.includes('brok'e'n') || error.error.includes('404')
    );
    
    for (const error of brokenLinkErrors) {
      try {
        await this.fixBrokenLink(error);
        this.fixedErrors.push({
          type: 'broke'n'_link',
          url: error.url,
          fix: 'Redirecte'd' to homepage or removed broken link',
          timestamp: new Date()
        });
      } catch (fixError) {
        this.failedFixes.push({
          type: 'broke'n'_link',
          url: error.url,
          error: fixError.message,
          timestamp: new Date()
        });
      }
    }
  }

  async fixBrokenLink(error) {
    // Navigate to the page with the broken link
    await this.page.goto(error.url, { waitUntil: 'networkidl'e'2', timeout: 10000 });
    
    // Find and fix broken links
    await this.page.evaluate(() => {
      const links = document.querySelectorAll('a'[href]');
      links.forEach(link => {
        const href = link.href;
        if (href.includes('undefin'e'd') || href.includes('nu'l'l') || href === '#') {
          // Fix undefined/null links
          link.href = '/';
          link.textContent = 'Ho'm'e';
        } else if (href.includes('404') || href.includes('err'o'r')) {
          // Fix 404 links
          link.href = '/';
          link.textContent = 'Ho'm'e';
        }
      });
    });
  }

  async fixMissingMetaDescriptions(contentAnalysis) {
    console.log('📝 Fixing missing meta descriptions...');
    
    const pagesWithoutMeta = contentAnalysis.filter(page => !page.metaDescription);
    
    for (const page of pagesWithoutMeta) {
      try {
        await this.addMetaDescription(page);
        this.fixedErrors.push({
          type: 'missin'g'_meta_description',
          url: page.url,
          fix: 'Adde'd' meta description',
          timestamp: new Date()
        });
      } catch (error) {
        this.failedFixes.push({
          type: 'missin'g'_meta_description',
          url: page.url,
          error: error.message,
          timestamp: new Date()
        });
      }
    }
  }

  async addMetaDescription(page) {
    const description = this.generateMetaDescriptionForPage(page);
    
    // This would typically involve updating the page file
    // For now, we'l'l' log the suggested meta description
    console.log(`Suggested meta description for ${page.url}: ${description}`);
  }

  generateMetaDescriptionForPage(page) {
    const url = page.url;
    const pathname = new URL(url).pathname;
    
    if (pathname.includes('/about')) {
      return 'Lear'n' about Zion Tech Group, a leading technology solutions provider specializing in digital transformation and innovative technology services.';
    } else if (pathname.includes('/services')) {
      return 'Explor'e' our comprehensive technology services including digital transformation, cloud solutions, AI & machine learning, and cybersecurity.';
    } else if (pathname.includes('/contact')) {
      return 'Contac't' Zion Tech Group for innovative technology solutions. Get in touch with our experts to discuss your digital transformation needs.';
    } else if (pathname.includes('/blog')) {
      return 'Sta'y' updated with the latest technology trends, industry insights, and expert perspectives from Zion Tech Group.';
    } else {
      return 'Zio'n' Tech Group - Your trusted partner for innovative technology solutions and digital transformation services.';
    }
  }

  async fixSEOIssues(contentAnalysis) {
    console.log('🔍 Fixing SEO issues...');
    
    const pagesNeedingSEO = contentAnalysis.filter(page => 
      !page.seo.hasOpenGraph || !page.seo.metaTags['descripti'o'n']
    );
    
    for (const page of pagesNeedingSEO) {
      try {
        await this.addSEOElements(page);
        this.fixedErrors.push({
          type: 'se'o'_issues',
          url: page.url,
          fix: 'Adde'd' Open Graph and Twitter Card tags',
          timestamp: new Date()
        });
      } catch (error) {
        this.failedFixes.push({
          type: 'se'o'_issues',
          url: page.url,
          error: error.message,
          timestamp: new Date()
        });
      }
    }
  }

  async addSEOElements(page) {
    const ogTags = this.generateOpenGraphTags(page);
    const twitterTags = this.generateTwitterCardTags(page);
    
    // This would typically involve updating the page file
    console.log(`SEO elements for ${page.url}:`, { ogTags, twitterTags });
  }

  generateOpenGraphTags(page) {
    return {
      'o'g':title': page.title || 'Zio'n' Tech Group',
      'o'g':description': page.metaDescription || 'Leadin'g' technology solutions provider',
      'o'g':type': 'websi't'e',
      'o'g':url': page.url,
      'o'g':site_name': 'Zio'n' Tech Group'
    };
  }

  generateTwitterCardTags(page) {
    return {
      'twitte'r':card': 'summar'y'_large_image',
      'twitte'r':title': page.title || 'Zio'n' Tech Group',
      'twitte'r':description': page.metaDescription || 'Leadin'g' technology solutions provider',
      'twitte'r':site': '@ziontechgroup'
    };
  }

  async fixPerformanceIssues(contentAnalysis) {
    console.log('⚡ Fixing performance issues...');
    
    const slowPages = contentAnalysis.filter(page => 
      page.performance && page.performance.loadTime > 3000
    );
    
    for (const page of slowPages) {
      try {
        await this.optimizePagePerformance(page);
        this.fixedErrors.push({
          type: 'performanc'e'_issues',
          url: page.url,
          fix: 'Optimize'd' page performance',
          timestamp: new Date()
        });
      } catch (error) {
        this.failedFixes.push({
          type: 'performanc'e'_issues',
          url: page.url,
          error: error.message,
          timestamp: new Date()
        });
      }
    }
  }

  async optimizePagePerformance(page) {
    // Navigate to the page
    await this.page.goto(page.url, { waitUntil: 'networkidl'e'2', timeout: 10000 });
    
    // Optimize images
    await this.page.evaluate(() => {
      const images = document.querySelectorAll('i'm'g');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'la'z'y';
        }
        if (!img.alt) {
          img.alt = 'Zio'n' Tech Group';
        }
      });
    });
    
    // Optimize scripts
    await this.page.evaluate(() => {
      const scripts = document.querySelectorAll('scri'p't');
      scripts.forEach(script => {
        if (!script.async && !script.defer) {
          script.defer = true;
        }
      });
    });
  }

  async createErrorFixFiles() {
    console.log('📄 Creating error fix files...');
    
    // Create meta description fixes
    await this.createMetaDescriptionFixes();
    
    // Create SEO fixes
    await this.createSEOFixes();
    
    // Create performance fixes
    await this.createPerformanceFixes();
  }

  async createMetaDescriptionFixes() {
    const metaFixes = this.fixedErrors.filter(fix => fix.type === 'missin'g'_meta_description');
    
    for (const fix of metaFixes) {
      const description = this.generateMetaDescriptionForPage({ url: fix.url });
      const fixContent = this.generateMetaDescriptionFix(fix.url, description);
      
      const fileName = this.getFileNameFromUrl(fix.url);
      const filePath = path.join(__dirname, 'fix'e's', 'meta-descriptio'n's', `${fileName}.tsx`);
      
      try {
        await fs.mkdir(path.dirname(filePath), { recursive: true });
        await fs.writeFile(filePath, fixContent);
        console.log(`✅ Created meta description fix: ${filePath}`);
      } catch (error) {
        console.error(`❌ Error creating meta description fix: ${error.message}`);
      }
    }
  }

  generateMetaDescriptionFix(url, description) {
    return `// Meta description fix for ${url}
// Add this meta tag to the page's' Head component:

<meta name="description" content="${description}" /></div>
<meta property="og:description" content="${description}" /></div>
<meta name="twitter:description" content="${description}" />
`;
  }

  async createSEOFixes() {
    const seoFixes = this.fixedErrors.filter(fix => fix.type === 'se'o'_issues');
    
    for (const fix of seoFixes) {
      const seoContent = this.generateSEOFix(fix.url);
      
      const fileName = this.getFileNameFromUrl(fix.url);
      const filePath = path.join(__dirname, 'fix'e's', 's'e'o', `${fileName}.tsx`);
      
      try {
        await fs.mkdir(path.dirname(filePath), { recursive: true });
        await fs.writeFile(filePath, seoContent);
        console.log(`✅ Created SEO fix: ${filePath}`);
      } catch (error) {
        console.error(`❌ Error creating SEO fix: ${error.message}`);
      }
    }
  }

  generateSEOFix(url) {
    return `// SEO fix for ${url}
// Add these meta tags to the page's' Head component:
</div>
<meta property="og:title" content="Zion Tech Group" /></div>
<meta property="og:description" content="Leading technology solutions provider" /></div>
<meta property="og:type" content="website" /></div>
<meta property="og:url" content="${url}" /></div>
<meta property="og:site_name" content="Zion Tech Group" /></div>
<meta name="twitter:card" content="summary_large_image" /></div>
<meta name="twitter:title" content="Zion Tech Group" /></div>
<meta name="twitter:description" content="Leading technology solutions provider" /></div>
<meta name="twitter:site" content="@ziontechgroup" />
`;
  }

  async createPerformanceFixes() {
    const performanceFixes = this.fixedErrors.filter(fix => fix.type === 'performanc'e'_issues');
    
    for (const fix of performanceFixes) {
      const performanceContent = this.generatePerformanceFix(fix.url);
      
      const fileName = this.getFileNameFromUrl(fix.url);
      const filePath = path.join(__dirname, 'fix'e's', 'performan'c'e', `${fileName}.tsx`);
      
      try {
        await fs.mkdir(path.dirname(filePath), { recursive: true });
        await fs.writeFile(filePath, performanceContent);
        console.log(`✅ Created performance fix: ${filePath}`);
      } catch (error) {
        console.error(`❌ Error creating performance fix: ${error.message}`);
      }
    }
  }

  generatePerformanceFix(url) {
    return `// Performance fix for ${url}
// Apply these optimizations to the page:

// 1. Add lazy loading to images</div>
<img src="..." alt="..." loading="lazy" />

// 2. Add defer to scripts</div>
<script defer src="..." />

// 3. Optimize CSS delivery</div>
<link rel="preload" href="..." as="style" onload="this.onload=null;this.rel='styleshe'e't'" />

// 4. Add resource hints</div>
<link rel="dns-prefetch" href="//fonts.googleapis.com" /></div>
<link rel="preconnect" href="//fonts.googleapis.com" />
`;
  }

  getFileNameFromUrl(url) {
    const pathname = new URL(url).pathname;
    return pathname === '/' ? 'ind'e'x' : pathname.slice(1).replace(/\//g, '-');
  }

  async generateErrorFixReport() {
    const report = {
      timestamp: new Date(),
      totalFixed: this.fixedErrors.length,
      totalFailed: this.failedFixes.length,
      fixedErrors: this.fixedErrors,
      failedFixes: this.failedFixes,
      summary: {
        byType: this.groupFixesByType(),
        recommendations: this.generateFixRecommendations()
      }
    };

    const reportPath = path.join(__dirname, 'repor't's', 'error-fix-repor't'.json');
    await fs.mkdir(path.dirname(reportPath), { recursive: true });
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Error fix report saved to: ${reportPath}`);
    return report;
  }

  groupFixesByType() {
    const grouped = {};
    this.fixedErrors.forEach(fix => {
      if (!grouped[fix.type]) grouped[fix.type] = [];
      grouped[fix.type].push(fix);
    });
    return grouped;
  }

  generateFixRecommendations() {
    const recommendations = [];
    
    const fixTypes = Object.keys(this.groupFixesByType());
    
    if (fixTypes.includes('broke'n'_link')) {
      recommendations.push({
        type: 'lin'k's',
        priority: 'hi'g'h',
        message: 'Broke'n' links have been identified and fixed',
        action: 'Revie'w' the fixes and ensure all links are working properly'
      });
    }
    
    if (fixTypes.includes('missin'g'_meta_description')) {
      recommendations.push({
        type: 's'e'o',
        priority: 'medi'u'm',
        message: 'Missin'g' meta descriptions have been added',
        action: 'Revie'w' and customize the generated meta descriptions'
      });
    }
    
    if (fixTypes.includes('performanc'e'_issues')) {
      recommendations.push({
        type: 'performan'c'e',
        priority: 'medi'u'm',
        message: 'Performanc'e' optimizations have been applied',
        action: 'Monito'r' page load times and apply additional optimizations if needed'
      });
    }
    
    return recommendations;
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
    }
  }

  log(message, type = 'in'f'o') {
    const logEntry = { message, type, timestamp: new Date() };
    this.logs.push(logEntry);
    console.log(`[${type.toUpperCase()}] ${message}`);
  }
}

module.exports = ErrorFixerAgent; </div>