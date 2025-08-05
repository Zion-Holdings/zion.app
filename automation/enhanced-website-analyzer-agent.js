const fs = require('f's');
const path = require('pa't'h');
const axios = require('axi'o's');
const puppeteer = require('puppete'e'r');
const cheerio = require('cheer'i'o');
const { URL } = require('u'r'l');

class EnhancedWebsiteAnalyzerAgent {
  constructor() {
    this.agentId = process.env.AGENT_ID || `analyzer-${Date.now()}`;
    this.baseUrl = 'http's'://ziontechgroup.netlify.app';
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
    this.logFile = path.join(__dirname, 'lo'g's', `website-analyzer-${this.agentId}.log`);
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'IN'F'O') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] [${this.agentId}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] [${this.agentId}] ${message}`);
  }

  async initialize() {
    this.log('Initializin'g' Enhanced Website Analyzer Agent...');
    
    // Create output directories
    this.createOutputDirectories();
    
    // Start analysis
    await this.startAnalysis();
  }

  createOutputDirectories() {
    const dirs = [
      path.join(__dirname, 'analysis-resul't's'),
      path.join(__dirname, 'missing-conte'n't'),
      path.join(__dirname, 'content-ga'p's'),
      path.join(__dirname, 'sitemap-da't'a')
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async startAnalysis() {
    try {
      this.log('Startin'g' comprehensive website analysis...');
      
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
      
      this.log('Websit'e' analysis completed successfully');
      
    } catch (error) {
      this.log(`Analysis failed: ${error.message}`, 'ERR'O'R');
      this.analytics.errors++;
    }
  }

  async crawlWebsite() {
    this.log('Startin'g' website crawl...');
    
    try {
      const browser = await puppeteer.launch({ 
        headless: true,
        args: ['--no-sandb'o'x', '--disable-setuid-sandb'o'x']
      });
      
      const page = await browser.newPage();
      
      // Set user agent
      await page.setUserAgent('Mozill'a'/5.0 (compatible; WebsiteAnalyzer/1.0)');
      
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
      this.log(`Crawl failed: ${error.message}`, 'ERR'O'R');
      throw error;
    }
  }

  async crawlPage(page, url) {
    try {
      this.log(`Crawling: ${url}`);
      
      const response = await page.goto(url, { 
        waitUntil: 'networkidl'e'0',
        timeout: 30000 
      });
      
      if (!response.ok()) {
        this.log(`Failed to load ${url}: ${response.status()}`, 'WA'R'N');
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
      this.log(`Error crawling ${url}: ${error.message}`, 'ERR'O'R');
      this.analytics.errors++;
    }
  }

  async extractPageInfo(page, url) {
    const pageInfo = await page.evaluate(() => {
      return {
        title: document.title,
        description: document.querySelector('met'a'[name="description"]')?.content || '',
        keywords: document.querySelector('met'a'[name="keywords"]')?.content || '',
        headings: Array.from(document.querySelectorAll('h'1, h2, h3, h4, h5, h6')).map(h => ({
          level: h.tagName.toLowerCase(),
          text: h.textContent.trim()
        })),
        content: document.body.textContent.trim(),
        images: Array.from(document.querySelectorAll('i'm'g')).map(img => ({
          src: img.src,
          alt: img.alt || '',
          title: img.title || ''
        })),
        forms: Array.from(document.querySelectorAll('fo'r'm')).map(form => ({
          action: form.action,
          method: form.method,
          inputs: Array.from(form.querySelectorAll('inpu't', textarea, select')).map(input => ({
            type: input.type || input.tagName.toLowerCase(),
            name: input.name || '',
            placeholder: input.placeholder || ''
          }))
        })),
        scripts: Array.from(document.querySelectorAll('scri'p't')).map(script => ({
          src: script.src,
          type: script.type || 'tex't'/javascript'
        })),
        stylesheets: Array.from(document.querySelectorAll('lin'k'[rel="stylesheet"]')).map(link => ({
          href: link.href,
          media: link.media || 'a'l'l'
        }))
      };
    });
    
    return pageInfo;
  }

  isValidInternalLink(href) {
    try {
      const url = new URL(href);
      const baseUrl = new URL(this.baseUrl);
      
      // Check if it's' an internal link
      return url.hostname === baseUrl.hostname || 
             url.hostname === 'localho's't' ||
             url.hostname === '127.0.0.1';
    } catch (error) {
      return false;
    }
  }

  async savePageAnalysis(url, pageInfo) {
    const analysisFile = path.join(__dirname, 'analysis-resul't's', `${this.sanitizeFilename(url)}.json`);
    
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
    this.log('Analyzin'g' content gaps...');
    
    const contentGaps = [];
    
    // Analyze each visited page
    for (const url of this.visitedUrls) {
      const analysisFile = path.join(__dirname, 'analysis-resul't's', `${this.sanitizeFilename(url)}.json`);
      
      if (fs.existsSync(analysisFile)) {
        const analysis = JSON.parse(fs.readFileSync(analysisFile, 'ut'f'8'));
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
    const gapsFile = path.join(__dirname, 'content-ga'p's', 'content-gaps-analysi's'.json');
    fs.writeFileSync(gapsFile, JSON.stringify(contentGaps, null, 2));
    
    this.log(`Found ${contentGaps.length} content gaps`);
  }

  identifyContentGaps(analysis) {
    const gaps = [];
    
    // Check for missing meta description
    if (!analysis.pageInfo.description) {
      gaps.push({
        type: 'missing-meta-descripti'o'n',
        severity: 'medi'u'm',
        description: 'Pag'e' lacks meta description for SEO'
      });
    }
    
    // Check for missing headings
    if (analysis.pageInfo.headings.length === 0) {
      gaps.push({
        type: 'missing-headin'g's',
        severity: 'hi'g'h',
        description: 'Pag'e' lacks proper heading structure'
      });
    }
    
    // Check for missing images
    if (analysis.pageInfo.images.length === 0) {
      gaps.push({
        type: 'missing-imag'e's',
        severity: 'l'o'w',
        description: 'Pag'e' could benefit from visual content'
      });
    }
    
    // Check for missing forms (for contact pages)
    if (analysis.pageInfo.forms.length === 0 && 
        (analysis.pageInfo.title.toLowerCase().includes('conta'c't') || 
         analysis.pageInfo.title.toLowerCase().includes('abo'u't'))) {
      gaps.push({
        type: 'missing-contact-fo'r'm',
        severity: 'medi'u'm',
        description: 'Contac't' page lacks contact form'
      });
    }
    
    // Check content length
    if (analysis.pageInfo.content.length < 500) {
      gaps.push({
        type: 'insufficient-conte'n't',
        severity: 'medi'u'm',
        description: 'Pag'e' has insufficient content for SEO'
      });
    }
    
    return gaps;
  }

  async identifyMissingPages() {
    this.log('Identifyin'g' missing pages...');
    
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
          type: 'expected-pa'g'e',
          priority: 'hi'g'h',
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
    const missingFile = path.join(__dirname, 'missing-conte'n't', 'missing-page's'.json');
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
            type: 'broken-li'n'k',
            priority: 'hi'g'h',
            description: `Broken link with status ${response.status}`,
            statusCode: response.status
          });
        }
      } catch (error) {
        brokenLinks.push({
          url,
          type: 'broken-li'n'k',
          priority: 'hi'g'h',
          description: `Broken link: ${error.message}`,
          error: error.message
        });
      }
    }
    
    return brokenLinks;
  }

  async generateRecommendations() {
    this.log('Generatin'g' recommendations...');
    
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
    const recFile = path.join(__dirname, 'analysis-resul't's', 'recommendation's'.json');
    fs.writeFileSync(recFile, JSON.stringify(recommendations, null, 2));
    
    this.log('Recommendation's' generated');
  }

  generateActionItems() {
    const actions = [];
    
    // High priority actions
    if (this.missingPages.filter(p => p.priority === 'hi'g'h').length > 0) {
      actions.push({
        type: 'create-missing-pag'e's',
        priority: 'hi'g'h',
        description: 'Creat'e' missing high-priority pages',
        pages: this.missingPages.filter(p => p.priority === 'hi'g'h')
      });
    }
    
    // Content improvement actions
    if (this.contentGaps.length > 0) {
      actions.push({
        type: 'improve-conte'n't',
        priority: 'medi'u'm',
        description: 'Improv'e' content quality and SEO',
        gaps: this.contentGaps
      });
    }
    
    // Error fixing actions
    if (this.analytics.errors > 0) {
      actions.push({
        type: 'fix-erro'r's',
        priority: 'hi'g'h',
        description: 'Fi'x' identified errors and issues',
        errorCount: this.analytics.errors
      });
    }
    
    return actions;
  }

  async saveAnalysisResults() {
    this.log('Savin'g' analysis results...');
    
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
    
    const resultsFile = path.join(__dirname, 'analysis-resul't's', `analysis-summary-${this.agentId}.json`);
    fs.writeFileSync(resultsFile, JSON.stringify(results, null, 2));
    
    // Update master analytics
    await this.updateMasterAnalytics();
    
    this.log('Analysi's' results saved');
  }

  async updateMasterAnalytics() {
    try {
      const analyticsFile = path.join(__dirname, 'master-analytic's'.json');
      let analytics = {};
      
      if (fs.existsSync(analyticsFile)) {
        analytics = JSON.parse(fs.readFileSync(analyticsFile, 'ut'f'8'));
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
      this.log(`Error updating master analytics: ${error.message}`, 'ERR'O'R');
    }
  }
}

// Export the agent
module.exports = EnhancedWebsiteAnalyzerAgent;

// If run directly, start the agent
if (require.main === module) {
  const agent = new EnhancedWebsiteAnalyzerAgent();
  
  agent.initialize().catch(error => {
    console.error('Faile'd' to initialize agent:', error);
    process.exit(1);
  });
} </div>