const fs = require('fs');
const path = require('path');
const axios = require('axios');
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const { URL } = require('url');

class EnhancedWebsiteAnalyzerAgent {
  constructor() {
    this.agentId = process.env.AGENT_ID || `analyzer-${Date.now()}`;
    this.baseUrl = 'https://ziontechgroup.netlify.app';
    this.visitedUrls = new Set();
    this.foundUrls = new Set();
    this.missingPages = [];
    this.contentGaps = [];
    this.errors = [];
    this.analytics = {
      pagesAnalyzed: 0,
      linksFound: 0,
      missingPages: 0,
      contentGaps: 0,
      errors: 0,
      startTime: Date.now()
    };
    this.logFile = path.join(__dirname, 'logs', `website-analyzer-${this.agentId}.log`);
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] [${this.agentId}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] [${this.agentId}] ${message}`);
  }

  async initialize() {
    this.log('Initializing Enhanced Website Analyzer Agent...');
    
    // Create output directories
    this.createOutputDirectories();
    
    // Start analysis
    await this.startAnalysis();
  }

  createOutputDirectories() {
    const dirs = [
      path.join(__dirname, 'analysis-results'),
      path.join(__dirname, 'missing-content'),
      path.join(__dirname, 'content-gaps'),
      path.join(__dirname, 'sitemap-data')
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async startAnalysis() {
    try {
      this.log('Starting comprehensive website analysis...');
      
      // Step 1: Crawl the website
      await this.crawlWebsite();
      
      // Step 2: Analyze content gaps
      await this.analyzeContentGaps();
      
      // Step 3: Identify missing pages
      await this.identifyMissingPages();
      
      // Step 4: Generate recommendations
      await this.generateRecommendations();
      
      // Step 5: Save analysis results
      await this.saveAnalysisResults();
      
      this.log('Website analysis completed successfully');
      
    } catch (error) {
      this.log(`Analysis failed: ${error.message}`, 'ERROR');
      this.analytics.errors++;
    }
  }

  async crawlWebsite() {
    this.log('Starting website crawl...');
    
    try {
      const browser = await puppeteer.launch({ 
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
      
      const page = await browser.newPage();
      
      // Set user agent
      await page.setUserAgent('Mozilla/5.0 (compatible; WebsiteAnalyzer/1.0)');
      
      // Start from homepage
      await this.crawlPage(page, this.baseUrl);
      
      // Crawl all found URLs
      const urlsToCrawl = Array.from(this.foundUrls);
      for (const url of urlsToCrawl) {
        if (!this.visitedUrls.has(url)) {
          await this.crawlPage(page, url);
        }
      }
      
      await browser.close();
      
      this.log(`Crawl completed. Found ${this.foundUrls.size} URLs, visited ${this.visitedUrls.size} pages`);
      
    } catch (error) {
      this.log(`Crawl failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async crawlPage(page, url) {
    try {
      this.log(`Crawling: ${url}`);
      
      const response = await page.goto(url, { 
        waitUntil: 'networkidle0',
        timeout: 30000 
      });
      
      if (!response.ok()) {
        this.log(`Failed to load ${url}: ${response.status()}`, 'WARN');
        return;
      }
      
      this.visitedUrls.add(url);
      this.analytics.pagesAnalyzed++;
      
      // Extract page information
      const pageInfo = await this.extractPageInfo(page, url);
      
      // Find all links
      const links = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('a')).map(a => ({
          href: a.href,
          text: a.textContent.trim(),
          title: a.title || ''
        }));
      });
      
      // Process links
      for (const link of links) {
        if (this.isValidInternalLink(link.href)) {
          this.foundUrls.add(link.href);
          this.analytics.linksFound++;
        }
      }
      
      // Save page analysis
      await this.savePageAnalysis(url, pageInfo);
      
    } catch (error) {
      this.log(`Error crawling ${url}: ${error.message}`, 'ERROR');
      this.analytics.errors++;
    }
  }

  async extractPageInfo(page, url) {
    const pageInfo = await page.evaluate(() => {
      return {
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.content || '',
        keywords: document.querySelector('meta[name="keywords"]')?.content || '',
        headings: Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => ({
          level: h.tagName.toLowerCase(),
          text: h.textContent.trim()
        })),
        content: document.body.textContent.trim(),
        images: Array.from(document.querySelectorAll('img')).map(img => ({
          src: img.src,
          alt: img.alt || '',
          title: img.title || ''
        })),
        forms: Array.from(document.querySelectorAll('form')).map(form => ({
          action: form.action,
          method: form.method,
          inputs: Array.from(form.querySelectorAll('input, textarea, select')).map(input => ({
            type: input.type || input.tagName.toLowerCase(),
            name: input.name || '',
            placeholder: input.placeholder || ''
          }))
        })),
        scripts: Array.from(document.querySelectorAll('script')).map(script => ({
          src: script.src,
          type: script.type || 'text/javascript'
        })),
        stylesheets: Array.from(document.querySelectorAll('link[rel="stylesheet"]')).map(link => ({
          href: link.href,
          media: link.media || 'all'
        }))
      };
    });
    
    return pageInfo;
  }

  isValidInternalLink(href) {
    try {
      const url = new URL(href);
      const baseUrl = new URL(this.baseUrl);
      
      // Check if it's an internal link
      return url.hostname === baseUrl.hostname || 
             url.hostname === 'localhost' ||
             url.hostname === '127.0.0.1';
    } catch (error) {
      return false;
    }
  }

  async savePageAnalysis(url, pageInfo) {
    const analysisFile = path.join(__dirname, 'analysis-results', `${this.sanitizeFilename(url)}.json`);
    
    const analysis = {
      url,
      timestamp: new Date().toISOString(),
      pageInfo,
      analytics: {
        contentLength: pageInfo.content.length,
        headingCount: pageInfo.headings.length,
        imageCount: pageInfo.images.length,
        formCount: pageInfo.forms.length,
        scriptCount: pageInfo.scripts.length,
        stylesheetCount: pageInfo.stylesheets.length
      }
    };
    
    fs.writeFileSync(analysisFile, JSON.stringify(analysis, null, 2));
  }

  sanitizeFilename(url) {
    return url.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 100);
  }

  async analyzeContentGaps() {
    this.log('Analyzing content gaps...');
    
    const contentGaps = [];
    
    // Analyze each visited page
    for (const url of this.visitedUrls) {
      const analysisFile = path.join(__dirname, 'analysis-results', `${this.sanitizeFilename(url)}.json`);
      
      if (fs.existsSync(analysisFile)) {
        const analysis = JSON.parse(fs.readFileSync(analysisFile, 'utf8'));
        const gaps = this.identifyContentGaps(analysis);
        
        if (gaps.length > 0) {
          contentGaps.push({
            url,
            gaps
          });
        }
      }
    }
    
    this.contentGaps = contentGaps;
    this.analytics.contentGaps = contentGaps.length;
    
    // Save content gaps analysis
    const gapsFile = path.join(__dirname, 'content-gaps', 'content-gaps-analysis.json');
    fs.writeFileSync(gapsFile, JSON.stringify(contentGaps, null, 2));
    
    this.log(`Found ${contentGaps.length} content gaps`);
  }

  identifyContentGaps(analysis) {
    const gaps = [];
    
    // Check for missing meta description
    if (!analysis.pageInfo.description) {
      gaps.push({
        type: 'missing-meta-description',
        severity: 'medium',
        description: 'Page lacks meta description for SEO'
      });
    }
    
    // Check for missing headings
    if (analysis.pageInfo.headings.length === 0) {
      gaps.push({
        type: 'missing-headings',
        severity: 'high',
        description: 'Page lacks proper heading structure'
      });
    }
    
    // Check for missing images
    if (analysis.pageInfo.images.length === 0) {
      gaps.push({
        type: 'missing-images',
        severity: 'low',
        description: 'Page could benefit from visual content'
      });
    }
    
    // Check for missing forms (for contact pages)
    if (analysis.pageInfo.forms.length === 0 && 
        (analysis.pageInfo.title.toLowerCase().includes('contact') || 
         analysis.pageInfo.title.toLowerCase().includes('about'))) {
      gaps.push({
        type: 'missing-contact-form',
        severity: 'medium',
        description: 'Contact page lacks contact form'
      });
    }
    
    // Check content length
    if (analysis.pageInfo.content.length < 500) {
      gaps.push({
        type: 'insufficient-content',
        severity: 'medium',
        description: 'Page has insufficient content for SEO'
      });
    }
    
    return gaps;
  }

  async identifyMissingPages() {
    this.log('Identifying missing pages...');
    
    const missingPages = [];
    
    // Common pages that should exist
    const expectedPages = [
      '/about',
      '/contact',
      '/services',
      '/products',
      '/blog',
      '/privacy-policy',
      '/terms-of-service',
      '/sitemap',
      '/robots.txt',
      '/404',
      '/login',
      '/signup',
      '/dashboard',
      '/profile',
      '/admin'
    ];
    
    // Check for missing expected pages
    for (const page of expectedPages) {
      const fullUrl = `${this.baseUrl}${page}`;
      if (!this.visitedUrls.has(fullUrl)) {
        missingPages.push({
          url: fullUrl,
          type: 'expected-page',
          priority: 'high',
          description: `Missing expected page: ${page}`
        });
      }
    }
    
    // Check for broken links
    const brokenLinks = await this.findBrokenLinks();
    missingPages.push(...brokenLinks);
    
    this.missingPages = missingPages;
    this.analytics.missingPages = missingPages.length;
    
    // Save missing pages analysis
    const missingFile = path.join(__dirname, 'missing-content', 'missing-pages.json');
    fs.writeFileSync(missingFile, JSON.stringify(missingPages, null, 2));
    
    this.log(`Identified ${missingPages.length} missing pages`);
  }

  async findBrokenLinks() {
    const brokenLinks = [];
    
    // Check all found URLs for accessibility
    for (const url of this.foundUrls) {
      try {
        const response = await axios.head(url, { timeout: 10000 });
        if (response.status >= 400) {
          brokenLinks.push({
            url,
            type: 'broken-link',
            priority: 'high',
            description: `Broken link with status ${response.status}`,
            statusCode: response.status
          });
        }
      } catch (error) {
        brokenLinks.push({
          url,
          type: 'broken-link',
          priority: 'high',
          description: `Broken link: ${error.message}`,
          error: error.message
        });
      }
    }
    
    return brokenLinks;
  }

  async generateRecommendations() {
    this.log('Generating recommendations...');
    
    const recommendations = {
      timestamp: new Date().toISOString(),
      summary: {
        totalPages: this.visitedUrls.size,
        missingPages: this.missingPages.length,
        contentGaps: this.contentGaps.length,
        errors: this.analytics.errors
      },
      priorities: {
        high: [],
        medium: [],
        low: []
      },
      actionItems: []
    };
    
    // Categorize missing pages by priority
    for (const page of this.missingPages) {
      recommendations.priorities[page.priority].push(page);
    }
    
    // Generate action items
    recommendations.actionItems = this.generateActionItems();
    
    // Save recommendations
    const recFile = path.join(__dirname, 'analysis-results', 'recommendations.json');
    fs.writeFileSync(recFile, JSON.stringify(recommendations, null, 2));
    
    this.log('Recommendations generated');
  }

  generateActionItems() {
    const actions = [];
    
    // High priority actions
    if (this.missingPages.filter(p => p.priority === 'high').length > 0) {
      actions.push({
        type: 'create-missing-pages',
        priority: 'high',
        description: 'Create missing high-priority pages',
        pages: this.missingPages.filter(p => p.priority === 'high')
      });
    }
    
    // Content improvement actions
    if (this.contentGaps.length > 0) {
      actions.push({
        type: 'improve-content',
        priority: 'medium',
        description: 'Improve content quality and SEO',
        gaps: this.contentGaps
      });
    }
    
    // Error fixing actions
    if (this.analytics.errors > 0) {
      actions.push({
        type: 'fix-errors',
        priority: 'high',
        description: 'Fix identified errors and issues',
        errorCount: this.analytics.errors
      });
    }
    
    return actions;
  }

  async saveAnalysisResults() {
    this.log('Saving analysis results...');
    
    const results = {
      agentId: this.agentId,
      timestamp: new Date().toISOString(),
      analytics: this.analytics,
      summary: {
        visitedUrls: Array.from(this.visitedUrls),
        foundUrls: Array.from(this.foundUrls),
        missingPages: this.missingPages,
        contentGaps: this.contentGaps.length,
        totalErrors: this.analytics.errors
      }
    };
    
    const resultsFile = path.join(__dirname, 'analysis-results', `analysis-summary-${this.agentId}.json`);
    fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));
    
    // Update master analytics
    await this.updateMasterAnalytics();
    
    this.log('Analysis results saved');
  }

  async updateMasterAnalytics() {
    try {
      const analyticsFile = path.join(__dirname, 'master-analytics.json');
      let analytics = {};
      
      if (fs.existsSync(analyticsFile)) {
        analytics = JSON.parse(fs.readFileSync(analyticsFile, 'utf8'));
      }
      
      analytics.lastWebsiteAnalysis = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        pagesAnalyzed: this.analytics.pagesAnalyzed,
        missingPages: this.missingPages.length,
        contentGaps: this.contentGaps.length,
        errors: this.analytics.errors
      };
      
      fs.writeFileSync(analyticsFile, JSON.stringify(analytics, null, 2));
    } catch (error) {
      this.log(`Error updating master analytics: ${error.message}`, 'ERROR');
    }
  }
}

// Export the agent
module.exports = EnhancedWebsiteAnalyzerAgent;

// If run directly, start the agent
if (require.main === module) {
  const agent = new EnhancedWebsiteAnalyzerAgent();
  
  agent.initialize().catch(error => {
    console.error('Failed to initialize agent:', error);
    process.exit(1);
  });
} 