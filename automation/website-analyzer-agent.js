const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');
const axios = require('axios');

class WebsiteAnalyzerAgent {
  constructor() {
    this.baseUrl = 'https://ziontechgroup.netlify.app';
    this.visitedUrls = new Set();
    this.missingPages = [];
    this.errors = [];
    this.contentAnalysis = [];
    this.logs = [];
  }

  async initialize() {
    this.browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    this.page = await this.browser.newPage();
    
    // Set viewport and user agent
    await this.page.setViewport({ width: 1920, height: 1080 });
    await this.page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
  }

  async analyzeWebsite() {
    try {
      console.log('🚀 Starting website analysis...');
      
      // Start with homepage
      await this.crawlPage(this.baseUrl);
      
      // Analyze all discovered pages
      await this.analyzeAllPages();
      
      // Generate comprehensive report
      await this.generateReport();
      
      console.log('✅ Website analysis completed');
    } catch (error) {
      console.error('❌ Error during website analysis:', error);
      this.logs.push({ type: 'error', message: error.message, timestamp: new Date() });
    } finally {
      await this.cleanup();
    }
  }

  async crawlPage(url, depth = 0) {
    if (depth > 5 || this.visitedUrls.has(url)) return;
    
    this.visitedUrls.add(url);
    console.log(`🔍 Crawling: ${url}`);
    
    try {
      await this.page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      
      // Extract all links
      const links = await this.page.evaluate(() => {
        const anchors = document.querySelectorAll('a[href]');
        return Array.from(anchors).map(a => a.href).filter(href => 
          href.includes('ziontechgroup.netlify.app') || href.startsWith('/')
        );
      });
      
      // Analyze current page
      await this.analyzePage(url);
      
      // Recursively crawl links
      for (const link of links) {
        const normalizedLink = this.normalizeUrl(link);
        if (!this.visitedUrls.has(normalizedLink)) {
          await this.crawlPage(normalizedLink, depth + 1);
        }
      }
    } catch (error) {
      console.error(`❌ Error crawling ${url}:`, error.message);
      this.errors.push({ url, error: error.message, timestamp: new Date() });
    }
  }

  async analyzePage(url) {
    try {
      const analysis = {
        url,
        timestamp: new Date(),
        title: '',
        metaDescription: '',
        headings: [],
        content: '',
        images: [],
        links: [],
        errors: [],
        performance: {},
        seo: {}
      };

      // Get page title and meta description
      analysis.title = await this.page.title();
      analysis.metaDescription = await this.page.$eval('meta[name="description"]', el => el?.content || '');

      // Get headings
      analysis.headings = await this.page.evaluate(() => {
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        return Array.from(headings).map(h => ({
          level: h.tagName.toLowerCase(),
          text: h.textContent.trim()
        }));
      });

      // Get main content
      analysis.content = await this.page.evaluate(() => {
        const main = document.querySelector('main') || document.querySelector('body');
        return main ? main.textContent.trim() : '';
      });

      // Get images
      analysis.images = await this.page.evaluate(() => {
        const images = document.querySelectorAll('img');
        return Array.from(images).map(img => ({
          src: img.src,
          alt: img.alt,
          width: img.width,
          height: img.height
        }));
      });

      // Get links
      analysis.links = await this.page.evaluate(() => {
        const links = document.querySelectorAll('a[href]');
        return Array.from(links).map(a => ({
          href: a.href,
          text: a.textContent.trim(),
          title: a.title
        }));
      });

      // Check for common errors
      analysis.errors = await this.checkPageErrors();

      // Performance analysis
      analysis.performance = await this.analyzePerformance();

      // SEO analysis
      analysis.seo = await this.analyzeSEO();

      this.contentAnalysis.push(analysis);
      
      // Check for missing content
      await this.checkMissingContent(analysis);
      
    } catch (error) {
      console.error(`❌ Error analyzing ${url}:`, error.message);
      this.errors.push({ url, error: error.message, timestamp: new Date() });
    }
  }

  async checkPageErrors() {
    const errors = [];
    
    try {
      // Check for console errors
      const consoleErrors = await this.page.evaluate(() => {
        return window.consoleErrors || [];
      });
      
      // Check for broken images
      const brokenImages = await this.page.evaluate(() => {
        const images = document.querySelectorAll('img');
        return Array.from(images).filter(img => !img.complete || img.naturalWidth === 0);
      });
      
      // Check for broken links
      const brokenLinks = await this.page.evaluate(() => {
        const links = document.querySelectorAll('a[href]');
        return Array.from(links).filter(link => {
          const href = link.href;
          return href && (href.includes('undefined') || href.includes('null') || href === '#');
        });
      });
      
      if (consoleErrors.length > 0) errors.push({ type: 'console', errors: consoleErrors });
      if (brokenImages.length > 0) errors.push({ type: 'broken_images', count: brokenImages.length });
      if (brokenLinks.length > 0) errors.push({ type: 'broken_links', count: brokenLinks.length });
      
    } catch (error) {
      errors.push({ type: 'analysis_error', message: error.message });
    }
    
    return errors;
  }

  async analyzePerformance() {
    const performance = {};
    
    try {
      // Get page load metrics
      const metrics = await this.page.metrics();
      performance.loadTime = metrics.Timestamp;
      
      // Get resource timing
      const resourceTiming = await this.page.evaluate(() => {
        return performance.getEntriesByType('navigation')[0];
      });
      
      if (resourceTiming) {
        performance.domContentLoaded = resourceTiming.domContentLoadedEventEnd - resourceTiming.domContentLoadedEventStart;
        performance.loadComplete = resourceTiming.loadEventEnd - resourceTiming.loadEventStart;
      }
      
    } catch (error) {
      performance.error = error.message;
    }
    
    return performance;
  }

  async analyzeSEO() {
    const seo = {};
    
    try {
      // Check meta tags
      const metaTags = await this.page.evaluate(() => {
        const metas = document.querySelectorAll('meta');
        const metaData = {};
        metas.forEach(meta => {
          const name = meta.getAttribute('name') || meta.getAttribute('property');
          const content = meta.getAttribute('content');
          if (name && content) {
            metaData[name] = content;
          }
        });
        return metaData;
      });
      
      seo.metaTags = metaTags;
      
      // Check for structured data
      const structuredData = await this.page.evaluate(() => {
        const scripts = document.querySelectorAll('script[type="application/ld+json"]');
        return Array.from(scripts).map(script => {
          try {
            return JSON.parse(script.textContent);
          } catch {
            return null;
          }
        }).filter(Boolean);
      });
      
      seo.structuredData = structuredData;
      
      // Check for Open Graph tags
      seo.hasOpenGraph = !!metaTags['og:title'] || !!metaTags['og:description'];
      
      // Check for Twitter Card tags
      seo.hasTwitterCard = !!metaTags['twitter:card'] || !!metaTags['twitter:title'];
      
    } catch (error) {
      seo.error = error.message;
    }
    
    return seo;
  }

  async checkMissingContent(analysis) {
    const missing = [];
    
    // Check for empty content
    if (!analysis.content || analysis.content.length < 100) {
      missing.push({ type: 'empty_content', severity: 'high' });
    }
    
    // Check for missing headings
    if (analysis.headings.length === 0) {
      missing.push({ type: 'no_headings', severity: 'medium' });
    }
    
    // Check for missing meta description
    if (!analysis.metaDescription) {
      missing.push({ type: 'no_meta_description', severity: 'medium' });
    }
    
    // Check for missing images
    if (analysis.images.length === 0) {
      missing.push({ type: 'no_images', severity: 'low' });
    }
    
    if (missing.length > 0) {
      this.missingPages.push({
        url: analysis.url,
        missing: missing,
        analysis: analysis
      });
    }
  }

  normalizeUrl(url) {
    try {
      const urlObj = new URL(url, this.baseUrl);
      return urlObj.href;
    } catch {
      return url;
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date(),
      baseUrl: this.baseUrl,
      totalPages: this.visitedUrls.size,
      missingPages: this.missingPages.length,
      errors: this.errors.length,
      contentAnalysis: this.contentAnalysis.length,
      summary: {
        pagesAnalyzed: Array.from(this.visitedUrls),
        missingContent: this.missingPages,
        errors: this.errors,
        recommendations: this.generateRecommendations()
      }
    };

    // Save report
    const reportPath = path.join(__dirname, 'reports', 'website-analysis-report.json');
    await fs.mkdir(path.dirname(reportPath), { recursive: true });
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Analysis report saved to: ${reportPath}`);
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Content recommendations
    if (this.missingPages.length > 0) {
      recommendations.push({
        type: 'content',
        priority: 'high',
        message: `Found ${this.missingPages.length} pages with missing content`,
        action: 'Create missing content for identified pages'
      });
    }
    
    // Error recommendations
    if (this.errors.length > 0) {
      recommendations.push({
        type: 'errors',
        priority: 'high',
        message: `Found ${this.errors.length} errors across the website`,
        action: 'Fix identified errors and broken links'
      });
    }
    
    // SEO recommendations
    const pagesWithoutMeta = this.contentAnalysis.filter(page => !page.seo.metaTags['description']);
    if (pagesWithoutMeta.length > 0) {
      recommendations.push({
        type: 'seo',
        priority: 'medium',
        message: `${pagesWithoutMeta.length} pages missing meta descriptions`,
        action: 'Add meta descriptions to improve SEO'
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

module.exports = WebsiteAnalyzerAgent; 