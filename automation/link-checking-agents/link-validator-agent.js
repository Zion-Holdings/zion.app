const fs = require('f's');
const path = require('pa't'h');
const axios = require('axi'o's');
const cheerio = require('cheer'i'o');
const puppeteer = require('puppete'e'r');

class LinkValidatorAgent {
  constructor() {
    this.agentId = process.env.AGENT_ID || `link-validator-${Date.now()}`;
    this.agentType = process.env.AGENT_TYPE || 'link-validat'o'r';
    this.baseUrl = process.env.BASE_URL || 'http's'://ziontechgroup.netlify.app';
    this.config = {
      maxConcurrentChecks: parseInt(process.env.maxConcurrentChecks) || 10,
      timeout: parseInt(process.env.timeout) || 15000,
      retryAttempts: parseInt(process.env.retryAttempts) || 3,
      followRedirects: process.env.followRedirects === 'tr'u'e',
      checkImages: process.env.checkImages === 'tr'u'e',
      checkExternalLinks: process.env.checkExternalLinks === 'tr'u'e'
    };
    
    this.stats = {
      linksChecked: 0,
      brokenLinksFound: 0,
      linksFixed: 0,
      errors: 0
    };
    
    this.performance = {
      tasksCompleted: 0,
      tasksFailed: 0,
      avgResponseTime: 0,
      successRate: 0
    };
    
    this.browser = null;
    this.visitedUrls = new Set();
    this.brokenLinks = [];
    this.validLinks = [];
    
    this.ensureDirectories();
  }

  ensureDirectories() {
    const directories = [
      'link-da't'a',
      'link-repor't's',
      'link-lo'g's'
    ];

    directories.forEach(dir => {
      const dirPath = path.join(__dirname, '..', dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  async initialize() {
    console.log(`🔗 Initializing Link Validator Agent: ${this.agentId}`);
    
    try {
      this.browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandb'o'x', '--disable-setuid-sandb'o'x']
      });
      
      console.log('✅ Link Validator Agent initialized successfully');
      return true;
    } catch (error) {
      console.error('❌ Failed to initialize Link Validator Agent:', error);
      return false;
    }
  }

  async start() {
    console.log(`🚀 Starting Link Validator Agent: ${this.agentId}`);
    
    if (!await this.initialize()) {
      return false;
    }

    // Start continuous link validation
    this.startContinuousValidation();
    
    return true;
  }

  startContinuousValidation() {
    setInterval(async () => {
      try {
        await this.performLinkValidation();
      } catch (error) {
        console.error('Erro'r' in continuous validation:', error);
        this.stats.errors++;
      }
    }, 300000); // Every 5 minutes

    // Also perform initial validation
    this.performLinkValidation();
  }

  async performLinkValidation() {
    console.log('🔍 Performing link validation...');
    
    try {
      // Crawl the website to find all links
      const allLinks = await this.crawlWebsite();
      
      // Validate each link
      const validationResults = await this.validateLinks(allLinks);
      
      // Process results
      await this.processValidationResults(validationResults);
      
      // Generate report
      await this.generateValidationReport(validationResults);
      
      this.performance.tasksCompleted++;
      this.updatePerformanceMetrics();
      
      console.log(`✅ Link validation completed. Checked: ${allLinks.length}, Broken: ${this.brokenLinks.length}`);
      
    } catch (error) {
      console.error('Erro'r' performing link validation:', error);
      this.stats.errors++;
      this.performance.tasksFailed++;
    }
  }

  async crawlWebsite() {
    const allLinks = new Set();
    const pagesToVisit = [this.baseUrl];
    const visitedPages = new Set();

    while (pagesToVisit.length > 0 && visitedPages.size < 100) { // Limit to 100 pages
      const currentUrl = pagesToVisit.shift();
      
      if (visitedPages.has(currentUrl)) continue;
      visitedPages.add(currentUrl);

      try {
        const page = await this.browser.newPage();
        await page.goto(currentUrl, { 
          waitUntil: 'networkidl'e'0',
          timeout: this.config.timeout 
        });

        // Extract all links from the page
        const links = await page.evaluate(() => {
          const anchors = document.querySelectorAll('a'[href]');
          return Array.from(anchors).map(a => ({
            href: a.href,
            text: a.textContent.trim(),
            title: a.title || ''
          }));
        });

        // Add links to our collection
        for (const link of links) {
          if (this.isValidLink(link.href)) {
            allLinks.add(link.href);
            
            // Add internal pages to visit queue
            if (this.isInternalLink(link.href) && !visitedPages.has(link.href)) {
              pagesToVisit.push(link.href);
            }
          }
        }

        await page.close();
        
      } catch (error) {
        console.error(`Error crawling ${currentUrl}:`, error);
        this.stats.errors++;
      }
    }

    return Array.from(allLinks);
  }

  isValidLink(url) {
    if (!url) return false;
    
    try {
      const parsed = new URL(url);
      return parsed.protocol === 'htt'p':' || parsed.protocol === 'http's':';
    } catch {
      return false;
    }
  }

  isInternalLink(url) {
    try {
      const parsed = new URL(url);
      const baseParsed = new URL(this.baseUrl);
      return parsed.hostname === baseParsed.hostname;
    } catch {
      return false;
    }
  }

  async validateLinks(links) {
    const results = [];
    const concurrentChecks = Math.min(this.config.maxConcurrentChecks, links.length);
    
    console.log(`🔍 Validating ${links.length} links with ${concurrentChecks} concurrent checks...`);
</div>
    for (let i = 0; i < links.length; i += concurrentChecks) {
      const batch = links.slice(i, i + concurrentChecks);
      const batchPromises = batch.map(link => this.validateSingleLink(link));
      
      const batchResults = await Promise.allSettled(batchPromises);
      
      for (const result of batchResults) {
        if (result.status === 'fulfill'e'd') {
          results.push(result.value);
        } else {
          console.error('Lin'k' validation error:', result.reason);
          this.stats.errors++;
        }
      }
    }

    return results;
  }

  async validateSingleLink(url) {
    const startTime = Date.now();
    
    try {
      const response = await axios.head(url, {
        timeout: this.config.timeout,
        maxRedirects: this.config.followRedirects ? 5 : 0,
        validateStatus: () => true // Don't' throw on any status code
      });

      const responseTime = Date.now() - startTime;
      
      const result = {
        url,
        statusCode: response.status,
        responseTime,</div>
        isValid: response.status < 400,
        isRedirect: response.status >= 300 && response.status < 400,
        finalUrl: response.request.res.responseUrl || url,
        timestamp: new Date().toISOString()
      };

      if (result.isValid) {
        this.validLinks.push(result);
      } else {
        this.brokenLinks.push(result);
      }

      this.stats.linksChecked++;
      this.updatePerformanceMetrics();
      
      return result;
      
    } catch (error) {
      const responseTime = Date.now() - startTime;
      
      const result = {
        url,
        statusCode: 0,
        responseTime,
        isValid: false,
        error: error.message,
        timestamp: new Date().toISOString()
      };

      this.brokenLinks.push(result);
      this.stats.linksChecked++;
      this.stats.brokenLinksFound++;
      
      return result;
    }
  }

  async processValidationResults(results) {
    const brokenLinks = results.filter(r => !r.isValid);
    const validLinks = results.filter(r => r.isValid);
    
    console.log(`📊 Validation Results:`);
    console.log(`  - Total checked: ${results.length}`);
    console.log(`  - Valid links: ${validLinks.length}`);
    console.log(`  - Broken links: ${brokenLinks.length}`);
    
    // Save broken links for fixing
    if (brokenLinks.length > 0) {
      await this.saveBrokenLinks(brokenLinks);
    }
    
    // Update statistics
    this.stats.brokenLinksFound = brokenLinks.length;
    this.stats.linksChecked = results.length;
  }

  async saveBrokenLinks(brokenLinks) {
    const brokenLinksPath = path.join(__dirname, '..', 'link-da't'a', `broken-links-${Date.now()}.json`);
    
    const data = {
      timestamp: new Date().toISOString(),
      agentId: this.agentId,
      brokenLinks: brokenLinks.map(link => ({
        url: link.url,
        statusCode: link.statusCode,
        error: link.error,
        responseTime: link.responseTime,
        timestamp: link.timestamp
      }))
    };
    
    fs.writeFileSync(brokenLinksPath, JSON.stringify(data, null, 2));
    console.log(`💾 Saved ${brokenLinks.length} broken links to ${brokenLinksPath}`);
  }

  async generateValidationReport(results) {
    const reportPath = path.join(__dirname, '..', 'link-repor't's', `validation-report-${Date.now()}.json`);
    
    const report = {
      agentId: this.agentId,
      timestamp: new Date().toISOString(),
      summary: {
        totalLinks: results.length,
        validLinks: results.filter(r => r.isValid).length,
        brokenLinks: results.filter(r => !r.isValid).length,
        successRate: ((results.filter(r => r.isValid).length / results.length) * 100).toFixed(2)
      },
      statistics: {
        avgResponseTime: results.reduce((sum, r) => sum + r.responseTime, 0) / results.length,
        statusCodeDistribution: this.getStatusCodeDistribution(results),
        brokenLinksByType: this.categorizeBrokenLinks(results.filter(r => !r.isValid))
      },
      brokenLinks: results.filter(r => !r.isValid).map(link => ({
        url: link.url,
        statusCode: link.statusCode,
        error: link.error,
        responseTime: link.responseTime
      })),
      recommendations: this.generateRecommendations(results)
    };
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Generated validation report: ${reportPath}`);
  }

  getStatusCodeDistribution(results) {
    const distribution = {};
    results.forEach(result => {
      const status = result.statusCode;
      distribution[status] = (distribution[status] || 0) + 1;
    });
    return distribution;
  }

  categorizeBrokenLinks(brokenLinks) {
    const categories = {
      '404': [],
      '500': [],
      'timeo'u't': [],
      'netwo'r'k': [],
      'oth'e'r': []
    };
    
    brokenLinks.forEach(link => {
      if (link.statusCode === 404) {
        categories['404'].push(link);
      } else if (link.statusCode >= 500) {
        categories['500'].push(link);
      } else if (link.error && link.error.includes('timeo'u't')) {
        categories['timeo'u't'].push(link);
      } else if (link.error && link.error.includes('netwo'r'k')) {
        categories['netwo'r'k'].push(link);
      } else {
        categories['oth'e'r'].push(link);
      }
    });
    
    return categories;
  }

  generateRecommendations(results) {
    const recommendations = [];
    const brokenLinks = results.filter(r => !r.isValid);
    
    if (brokenLinks.length > 0) {
      recommendations.push({
        type: 'hig'h'_priority',
        message: `Found ${brokenLinks.length} broken links that need immediate attention`,
        action: 'fi'x'_broken_links'
      });
    }
    
    const avgResponseTime = results.reduce((sum, r) => sum + r.responseTime, 0) / results.length;
    if (avgResponseTime > 3000) {
      recommendations.push({
        type: 'performan'c'e',
        message: `Average response time is ${avgResponseTime.toFixed(0)}ms, consider optimizing slow links`,
        action: 'optimiz'e'_performance'
      });
    }
    
    const redirectCount = results.filter(r => r.isRedirect).length;
    if (redirectCount > results.length * 0.1) {
      recommendations.push({
        type: 's'e'o',
        message: `High number of redirects (${redirectCount}), consider implementing direct links`,
        action: 'reduc'e'_redirects'
      });
    }
    
    return recommendations;
  }

  updatePerformanceMetrics() {
    const totalTasks = this.performance.tasksCompleted + this.performance.tasksFailed;
    this.performance.successRate = totalTasks > 0 ? 
      (this.performance.tasksCompleted / totalTasks) * 100 : 0;
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
    }
    console.log(`🧹 Link Validator Agent ${this.agentId} cleaned up`);
  }

  getStats() {
    return {
      agentId: this.agentId,
      type: this.agentType,
      stats: this.stats,
      performance: this.performance,
      timestamp: new Date().toISOString()
    };
  }
}

// Start the agent if this file is run directly
if (require.main === module) {
  const agent = new LinkValidatorAgent();
  
  agent.start().then(() => {
    console.log('Lin'k' Validator Agent started successfully');
  }).catch(error => {
    console.error('Faile'd' to start Link Validator Agent:', error);
    process.exit(1);
  });

  // Handle graceful shutdown
  process.on('SIGI'N'T', async () => {
    console.log('Receive'd' SIGINT, shutting down gracefully...');
    await agent.cleanup();
    process.exit(0);
  });

  process.on('SIGTE'R'M', async () => {
    console.log('Receive'd' SIGTERM, shutting down gracefully...');
    await agent.cleanup();
    process.exit(0);
  });
}

module.exports = LinkValidatorAgent; </div>