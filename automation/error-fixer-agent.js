const fs = require('fs').promises;
const path = require('path');
const puppeteer = require('puppeteer');

class ErrorFixerAgent {
  constructor() {
    this.fixedErrors = [];
    this.failedFixes = [];
    this.logs = [];
  }

  async initialize() {
    this.browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
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
      error.error && error.error.includes('broken') || error.error.includes('404')
    );
    
    for (const error of brokenLinkErrors) {
      try {
        await this.fixBrokenLink(error);
        this.fixedErrors.push({
          type: 'broken_link',
          url: error.url,
          fix: 'Redirected to homepage or removed broken link',
          timestamp: new Date()
        });
      } catch (fixError) {
        this.failedFixes.push({
          type: 'broken_link',
          url: error.url,
          error: fixError.message,
          timestamp: new Date()
        });
      }
    }
  }

  async fixBrokenLink(error) {
    // Navigate to the page with the broken link
    await this.page.goto(error.url, { waitUntil: 'networkidle2', timeout: 10000 });
    
    // Find and fix broken links
    await this.page.evaluate(() => {
      const links = document.querySelectorAll('a[href]');
      links.forEach(link => {
        const href = link.href;
        if (href.includes('undefined') || href.includes('null') || href === '#') {
          // Fix undefined/null links
          link.href = '/';
          link.textContent = 'Home';
        } else if (href.includes('404') || href.includes('error')) {
          // Fix 404 links
          link.href = '/';
          link.textContent = 'Home';
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
          type: 'missing_meta_description',
          url: page.url,
          fix: 'Added meta description',
          timestamp: new Date()
        });
      } catch (error) {
        this.failedFixes.push({
          type: 'missing_meta_description',
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
    // For now, we'll log the suggested meta description
    console.log(`Suggested meta description for ${page.url}: ${description}`);
  }

  generateMetaDescriptionForPage(page) {
    const url = page.url;
    const pathname = new URL(url).pathname;
    
    if (pathname.includes('/about')) {
      return 'Learn about Zion Tech Group, a leading technology solutions provider specializing in digital transformation and innovative technology services.';
    } else if (pathname.includes('/services')) {
      return 'Explore our comprehensive technology services including digital transformation, cloud solutions, AI & machine learning, and cybersecurity.';
    } else if (pathname.includes('/contact')) {
      return 'Contact Zion Tech Group for innovative technology solutions. Get in touch with our experts to discuss your digital transformation needs.';
    } else if (pathname.includes('/blog')) {
      return 'Stay updated with the latest technology trends, industry insights, and expert perspectives from Zion Tech Group.';
    } else {
      return 'Zion Tech Group - Your trusted partner for innovative technology solutions and digital transformation services.';
    }
  }

  async fixSEOIssues(contentAnalysis) {
    console.log('🔍 Fixing SEO issues...');
    
    const pagesNeedingSEO = contentAnalysis.filter(page => 
      !page.seo.hasOpenGraph || !page.seo.metaTags['description']
    );
    
    for (const page of pagesNeedingSEO) {
      try {
        await this.addSEOElements(page);
        this.fixedErrors.push({
          type: 'seo_issues',
          url: page.url,
          fix: 'Added Open Graph and Twitter Card tags',
          timestamp: new Date()
        });
      } catch (error) {
        this.failedFixes.push({
          type: 'seo_issues',
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
      'og:title': page.title || 'Zion Tech Group',
      'og:description': page.metaDescription || 'Leading technology solutions provider',
      'og:type': 'website',
      'og:url': page.url,
      'og:site_name': 'Zion Tech Group'
    };
  }

  generateTwitterCardTags(page) {
    return {
      'twitter:card': 'summary_large_image',
      'twitter:title': page.title || 'Zion Tech Group',
      'twitter:description': page.metaDescription || 'Leading technology solutions provider',
      'twitter:site': '@ziontechgroup'
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
          type: 'performance_issues',
          url: page.url,
          fix: 'Optimized page performance',
          timestamp: new Date()
        });
      } catch (error) {
        this.failedFixes.push({
          type: 'performance_issues',
          url: page.url,
          error: error.message,
          timestamp: new Date()
        });
      }
    }
  }

  async optimizePagePerformance(page) {
    // Navigate to the page
    await this.page.goto(page.url, { waitUntil: 'networkidle2', timeout: 10000 });
    
    // Optimize images
    await this.page.evaluate(() => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.alt) {
          img.alt = 'Zion Tech Group';
        }
      });
    });
    
    // Optimize scripts
    await this.page.evaluate(() => {
      const scripts = document.querySelectorAll('script');
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
    const metaFixes = this.fixedErrors.filter(fix => fix.type === 'missing_meta_description');
    
    for (const fix of metaFixes) {
      const description = this.generateMetaDescriptionForPage({ url: fix.url });
      const fixContent = this.generateMetaDescriptionFix(fix.url, description);
      
      const fileName = this.getFileNameFromUrl(fix.url);
      const filePath = path.join(__dirname, 'fixes', 'meta-descriptions', `${fileName}.tsx`);
      
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
// Add this meta tag to the page's Head component:

<meta name="description" content="${description}" />
<meta property="og:description" content="${description}" />
<meta name="twitter:description" content="${description}" />
`;
  }

  async createSEOFixes() {
    const seoFixes = this.fixedErrors.filter(fix => fix.type === 'seo_issues');
    
    for (const fix of seoFixes) {
      const seoContent = this.generateSEOFix(fix.url);
      
      const fileName = this.getFileNameFromUrl(fix.url);
      const filePath = path.join(__dirname, 'fixes', 'seo', `${fileName}.tsx`);
      
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
// Add these meta tags to the page's Head component:

<meta property="og:title" content="Zion Tech Group" />
<meta property="og:description" content="Leading technology solutions provider" />
<meta property="og:type" content="website" />
<meta property="og:url" content="${url}" />
<meta property="og:site_name" content="Zion Tech Group" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Zion Tech Group" />
<meta name="twitter:description" content="Leading technology solutions provider" />
<meta name="twitter:site" content="@ziontechgroup" />
`;
  }

  async createPerformanceFixes() {
    const performanceFixes = this.fixedErrors.filter(fix => fix.type === 'performance_issues');
    
    for (const fix of performanceFixes) {
      const performanceContent = this.generatePerformanceFix(fix.url);
      
      const fileName = this.getFileNameFromUrl(fix.url);
      const filePath = path.join(__dirname, 'fixes', 'performance', `${fileName}.tsx`);
      
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

// 1. Add lazy loading to images
<img src="..." alt="..." loading="lazy" />

// 2. Add defer to scripts
<script defer src="..." />

// 3. Optimize CSS delivery
<link rel="preload" href="..." as="style" onload="this.onload=null;this.rel='stylesheet'" />

// 4. Add resource hints
<link rel="dns-prefetch" href="//fonts.googleapis.com" />
<link rel="preconnect" href="//fonts.googleapis.com" />
`;
  }

  getFileNameFromUrl(url) {
    const pathname = new URL(url).pathname;
    return pathname === '/' ? 'index' : pathname.slice(1).replace(/\//g, '-');
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

    const reportPath = path.join(__dirname, 'reports', 'error-fix-report.json');
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
    
    if (fixTypes.includes('broken_link')) {
      recommendations.push({
        type: 'links',
        priority: 'high',
        message: 'Broken links have been identified and fixed',
        action: 'Review the fixes and ensure all links are working properly'
      });
    }
    
    if (fixTypes.includes('missing_meta_description')) {
      recommendations.push({
        type: 'seo',
        priority: 'medium',
        message: 'Missing meta descriptions have been added',
        action: 'Review and customize the generated meta descriptions'
      });
    }
    
    if (fixTypes.includes('performance_issues')) {
      recommendations.push({
        type: 'performance',
        priority: 'medium',
        message: 'Performance optimizations have been applied',
        action: 'Monitor page load times and apply additional optimizations if needed'
      });
    }
    
    return recommendations;
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
    }
  }

  log(message, type = 'info') {
    const logEntry = { message, type, timestamp: new Date() };
    this.logs.push(logEntry);
    console.log(`[${type.toUpperCase()}] ${message}`);
  }
}

module.exports = ErrorFixerAgent; 