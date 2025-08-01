const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');

class LinkAnalyzerAgent {
  constructor() {
    this.agentId = process.env.AGENT_ID || `link-analyzer-${Date.now()}`;
    this.agentType = process.env.AGENT_TYPE || 'link-analyzer';
    this.baseUrl = process.env.BASE_URL || 'https://ziontechgroup.netlify.app';
    this.config = {
      analyzeInternalLinks: process.env.analyzeInternalLinks === 'true',
      analyzeExternalLinks: process.env.analyzeExternalLinks === 'true',
      seoImpactAnalysis: process.env.seoImpactAnalysis === 'true',
      userExperienceScoring: process.env.userExperienceScoring === 'true'
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
    
    this.analysisResults = {
computed: false,
      internalLinks: [],
      externalLinks: [],
      seoMetrics: {},
      uxMetrics: {},
      recommendations: []
    };
    
    this.ensureDirectories();
  }

  ensureDirectories() {
    const directories = [
      'link-analysis',
      'link-reports',
      'link-logs'
    ];

    directories.forEach(dir => {
      const dirPath = path.join(__dirname, '..', dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  async initialize() {
    console.log(`📊 Initializing Link Analyzer Agent: ${this.agentId}`);
    
    try {
      console.log('✅ Link Analyzer Agent initialized successfully');
      return true;
    } catch (error) {
      console.error('❌ Failed to initialize Link Analyzer Agent:', error);
      return false;
    }
  }

  async start() {
    console.log(`🚀 Starting Link Analyzer Agent: ${this.agentId}`);
    
    if (!await this.initialize()) {
      return false;
    }

    // Start analysis
    await this.performLinkAnalysis();
    
    return true;
  }

  async performLinkAnalysis() {
    console.log('📊 Performing comprehensive link analysis...');
    
    try {
      const startTime = Date.now();
      
      // Collect all links from the website
      const allLinks = await this.collectAllLinks();
      
      // Analyze internal links
      if (this.config.analyzeInternalLinks) {
        this.analysisResults.internalLinks = await this.analyzeInternalLinks(allLinks);
      }
      
      // Analyze external links
      if (this.config.analyzeExternalLinks) {
        this.analysisResults.externalLinks = await this.analyzeExternalLinks(allLinks);
      }
      
      // Perform SEO analysis
      if (this.config.seoImpactAnalysis) {
        this.analysisResults.seoMetrics = await this.performSeoAnalysis(allLinks);
      }
      
      // Perform UX analysis
      if (this.config.userExperienceScoring) {
        this.analysisResults.uxMetrics = await this.performUxAnalysis(allLinks);
      }
      
      // Generate recommendations
      this.analysisResults.recommendations = this.generateAnalysisRecommendations();
      
      // Generate comprehensive report
      await this.generateAnalysisReport();
      
      const responseTime = Date.now() - startTime;
      this.performance.avgResponseTime = responseTime;
      this.performance.tasksCompleted++;
      this.updatePerformanceMetrics();
      
      this.analysisResults.computed = true;
      
      console.log(`✅ Link analysis completed in ${responseTime}ms`);
      
    } catch (error) {
      console.error('Error performing link analysis:', error);
      this.stats.errors++;
      this.performance.tasksFailed++;
    }
  }

  async collectAllLinks() {
    const allLinks = new Set();
    const pagesToVisit = [this.baseUrl];
    const visitedPages = new Set();
    
    console.log('🔍 Collecting all links from website...');
    
    while (pagesToVisit.length > 0 && visitedPages.size < 50) { // Limit to 50 pages
      const currentUrl = pagesToVisit.shift();
      
      if (visitedPages.has(currentUrl)) continue;
      visitedPages.add(currentUrl);
      
      try {
        const response = await axios.get(currentUrl, { timeout: 10000 });
        const $ = cheerio.load(response.data);
        
        // Extract all links
        $('a[href]').each((i, element) => {
          const href = $(element).attr('href');
          if (href && this.isValidLink(href)) {
            const absoluteUrl = this.resolveUrl(href, currentUrl);
            allLinks.add(absoluteUrl);
            
            // Add internal pages to visit queue
            if (this.isInternalLink(absoluteUrl) && !visitedPages.has(absoluteUrl)) {
              pagesToVisit.push(absoluteUrl);
            }
          }
        });
        
      } catch (error) {
        console.error(`Error collecting links from ${currentUrl}:`, error.message);
      }
    }
    
    return Array.from(allLinks);
  }

  isValidLink(url) {
    if (!url) return false;
    
    try {
      const parsed = new URL(url);
      return parsed.protocol === 'http:' || parsed.protocol === 'https:';
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

  resolveUrl(href, baseUrl) {
    try {
      return new URL(href, baseUrl).href;
    } catch {
      return href;
    }
  }

  async analyzeInternalLinks(allLinks) {
    const internalLinks = allLinks.filter(link => this.isInternalLink(link));
    
    console.log(`📊 Analyzing ${internalLinks.length} internal links...`);
    
    const analysis = {
      total: internalLinks.length,
      byPath: {},
      byStatus: {},
      broken: [],
      slow: [],
      recommendations: []
    };
    
    // Group by path
    for (const link of internalLinks) {
      const path = this.extractPath(link);
      if (!analysis.byPath[path]) {
        analysis.byPath[path] = [];
      }
      analysis.byPath[path].push(link);
    }
    
    // Check health of internal links
    for (const link of internalLinks) {
      try {
        const startTime = Date.now();
        const response = await axios.head(link, { timeout: 10000 });
        const responseTime = Date.now() - startTime;
        
        if (response.status >= 400) {
          analysis.broken.push({
            url: link,
            statusCode: response.status,
            responseTime
          });
        } else if (responseTime > 3000) {
          analysis.slow.push({
            url: link,
            statusCode: response.status,
            responseTime
          });
        }
        
        // Update status distribution
        const status = response.status;
        analysis.byStatus[status] = (analysis.byStatus[status] || 0) + 1;
        
      } catch (error) {
        analysis.broken.push({
          url: link,
          statusCode: 0,
          error: error.message
        });
      }
    }
    
    // Generate internal link recommendations
    if (analysis.broken.length > 0) {
      analysis.recommendations.push({
        type: 'critical',
        message: `${analysis.broken.length} broken internal links need immediate fixing`,
        action: 'fix_broken_internal_links'
      });
    }
    
    if (analysis.slow.length > 0) {
      analysis.recommendations.push({
        type: 'performance',
        message: `${analysis.slow.length} slow internal links affecting user experience`,
        action: 'optimize_slow_internal_links'
      });
    }
    
    return analysis;
  }

  async analyzeExternalLinks(allLinks) {
    const externalLinks = allLinks.filter(link => !this.isInternalLink(link));
    
    console.log(`📊 Analyzing ${externalLinks.length} external links...`);
    
    const analysis = {
      total: externalLinks.length,
      byDomain: {},
      byStatus: {},
      broken: [],
      slow: [],
      recommendations: []
    };
    
    // Group by domain
    for (const link of externalLinks) {
      const domain = this.extractDomain(link);
      if (!analysis.byDomain[domain]) {
        analysis.byDomain[domain] = [];
      }
      analysis.byDomain[domain].push(link);
    }
    
    // Check health of external links
    for (const link of externalLinks) {
      try {
        const startTime = Date.now();
        const response = await axios.head(link, { timeout: 15000 });
        const responseTime = Date.now() - startTime;
        
        if (response.status >= 400) {
          analysis.broken.push({
            url: link,
            statusCode: response.status,
            responseTime
          });
        } else if (responseTime > 5000) {
          analysis.slow.push({
            url: link,
            statusCode: response.status,
            responseTime
          });
        }
        
        // Update status distribution
        const status = response.status;
        analysis.byStatus[status] = (analysis.byStatus[status] || 0) + 1;
        
      } catch (error) {
        analysis.broken.push({
          url: link,
          statusCode: 0,
          error: error.message
        });
      }
    }
    
    // Generate external link recommendations
    if (analysis.broken.length > 0) {
      analysis.recommendations.push({
        type: 'important',
        message: `${analysis.broken.length} broken external links may affect SEO`,
        action: 'review_broken_external_links'
      });
    }
    
    const highDomainCount = Object.keys(analysis.byDomain).length;
    if (highDomainCount > 20) {
      analysis.recommendations.push({
        type: 'seo',
        message: `High number of external domains (${highDomainCount}), consider consolidating`,
        action: 'consolidate_external_links'
      });
    }
    
    return analysis;
  }

  async performSeoAnalysis(allLinks) {
    console.log('🔍 Performing SEO impact analysis...');
    
    const seoMetrics = {
      internalLinkRatio: 0,
      externalLinkRatio: 0,
      brokenLinkRatio: 0,
      seoScore: 0,
      recommendations: []
    };
    
    const internalLinks = allLinks.filter(link => this.isInternalLink(link));
    const externalLinks = allLinks.filter(link => !this.isInternalLink(link));
    
    seoMetrics.internalLinkRatio = (internalLinks.length / allLinks.length) * 100;
    seoMetrics.externalLinkRatio = (externalLinks.length / allLinks.length) * 100;
    
    // Calculate broken link ratio
    const brokenLinks = this.analysisResults.internalLinks.broken || [];
    seoMetrics.brokenLinkRatio = (brokenLinks.length / allLinks.length) * 100;
    
    // Calculate SEO score
    let seoScore = 100;
    seoScore -= seoMetrics.brokenLinkRatio * 2; // Broken links heavily penalize SEO
    seoScore -= Math.max(0, (seoMetrics.externalLinkRatio - 30)); // Too many external links
    seoScore += Math.min(20, seoMetrics.internalLinkRatio - 60); // Internal links boost SEO
    
    seoMetrics.seoScore = Math.max(0, Math.min(100, seoScore));
    
    // Generate SEO recommendations
    if (seoMetrics.brokenLinkRatio > 5) {
      seoMetrics.recommendations.push({
        type: 'critical',
        message: `High broken link ratio (${seoMetrics.brokenLinkRatio.toFixed(2)}%) severely impacts SEO`,
        action: 'fix_broken_links_immediately'
      });
    }
    
    if (seoMetrics.externalLinkRatio > 40) {
      seoMetrics.recommendations.push({
        type: 'warning',
        message: `High external link ratio (${seoMetrics.externalLinkRatio.toFixed(2)}%) may dilute SEO value`,
        action: 'reduce_external_links'
      });
    }
    
    if (seoMetrics.internalLinkRatio < 50) {
      seoMetrics.recommendations.push({
        type: 'improvement',
        message: `Low internal link ratio (${seoMetrics.internalLinkRatio.toFixed(2)}%), increase internal linking`,
        action: 'increase_internal_links'
      });
    }
    
    return seoMetrics;
  }

  async performUxAnalysis(allLinks) {
    console.log('👥 Performing user experience analysis...');
    
    const uxMetrics = {
      averageResponseTime: 0,
      slowLinksRatio: 0,
      brokenLinksRatio: 0,
      uxScore: 0,
      recommendations: []
    };
    
    // Calculate average response time
    const responseTimes = [];
    const slowLinks = [];
    const brokenLinks = [];
    
    for (const link of allLinks.slice(0, 20)) { // Sample first 20 links
      try {
        const startTime = Date.now();
        const response = await axios.head(link, { timeout: 10000 });
        const responseTime = Date.now() - startTime;
        
        responseTimes.push(responseTime);
        
        if (responseTime > 3000) {
          slowLinks.push({ url: link, responseTime });
        }
        
        if (response.status >= 400) {
          brokenLinks.push({ url: link, statusCode: response.status });
        }
        
      } catch (error) {
        brokenLinks.push({ url: link, error: error.message });
      }
    }
    
    if (responseTimes.length > 0) {
      uxMetrics.averageResponseTime = responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length;
    }
    
    uxMetrics.slowLinksRatio = (slowLinks.length / allLinks.length) * 100;
    uxMetrics.brokenLinksRatio = (brokenLinks.length / allLinks.length) * 100;
    
    // Calculate UX score
    let uxScore = 100;
    uxScore -= uxMetrics.brokenLinksRatio * 3; // Broken links heavily impact UX
    uxScore -= Math.max(0, (uxMetrics.averageResponseTime - 1000) / 100); // Slow response times
    uxScore -= uxMetrics.slowLinksRatio * 0.5; // Slow links impact UX
    
    uxMetrics.uxScore = Math.max(0, Math.min(100, uxScore));
    
    // Generate UX recommendations
    if (uxMetrics.brokenLinksRatio > 3) {
      uxMetrics.recommendations.push({
        type: 'critical',
        message: `High broken link ratio (${uxMetrics.brokenLinksRatio.toFixed(2)}%) severely impacts user experience`,
        action: 'fix_broken_links_urgently'
      });
    }
    
    if (uxMetrics.averageResponseTime > 2000) {
      uxMetrics.recommendations.push({
        type: 'performance',
        message: `Slow average response time (${uxMetrics.averageResponseTime.toFixed(0)}ms) affects user experience`,
        action: 'optimize_page_speed'
      });
    }
    
    if (uxMetrics.slowLinksRatio > 10) {
      uxMetrics.recommendations.push({
        type: 'performance',
        message: `High ratio of slow links (${uxMetrics.slowLinksRatio.toFixed(2)}%) impacts user experience`,
        action: 'optimize_slow_links'
      });
    }
    
    return uxMetrics;
  }

  generateAnalysisRecommendations() {
    const recommendations = [];
    
    // Overall recommendations based on all analyses
    if (this.analysisResults.seoMetrics.seoScore < 70) {
      recommendations.push({
        type: 'seo',
        priority: 'high',
        message: `Low SEO score (${this.analysisResults.seoMetrics.seoScore.toFixed(1)}/100), immediate action required`,
        action: 'improve_seo_score'
      });
    }
    
    if (this.analysisResults.uxMetrics.uxScore < 80) {
      recommendations.push({
        type: 'ux',
        priority: 'high',
        message: `Low UX score (${this.analysisResults.uxMetrics.uxScore.toFixed(1)}/100), user experience needs improvement`,
        action: 'improve_user_experience'
      });
    }
    
    const totalBrokenLinks = (this.analysisResults.internalLinks.broken?.length || 0) + 
                            (this.analysisResults.externalLinks.broken?.length || 0);
    
    if (totalBrokenLinks > 0) {
      recommendations.push({
        type: 'maintenance',
        priority: 'critical',
        message: `${totalBrokenLinks} broken links need immediate attention`,
        action: 'fix_all_broken_links'
      });
    }
    
    return recommendations;
  }

  async generateAnalysisReport() {
    const reportPath = path.join(__dirname, '..', 'link-reports', `analysis-report-${Date.now()}.json`);
    
    const report = {
      agentId: this.agentId,
      timestamp: new Date().toISOString(),
      analysisResults: this.analysisResults,
      summary: {
        totalLinks: (this.analysisResults.internalLinks.total || 0) + (this.analysisResults.externalLinks.total || 0),
        seoScore: this.analysisResults.seoMetrics.seoScore || 0,
        uxScore: this.analysisResults.uxMetrics.uxScore || 0,
        brokenLinks: (this.analysisResults.internalLinks.broken?.length || 0) + (this.analysisResults.externalLinks.broken?.length || 0)
      },
      recommendations: this.analysisResults.recommendations
    };
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Generated analysis report: ${reportPath}`);
  }

  extractPath(url) {
    try {
      const parsed = new URL(url);
      return parsed.pathname;
    } catch {
      return url;
    }
  }

  extractDomain(url) {
    try {
      const parsed = new URL(url);
      return parsed.hostname;
    } catch {
      return '';
    }
  }

  updatePerformanceMetrics() {
    const totalTasks = this.performance.tasksCompleted + this.performance.tasksFailed;
    this.performance.successRate = totalTasks > 0 ? 
      (this.performance.tasksCompleted / totalTasks) * 100 : 0;
  }

  getStats() {
    return {
      agentId: this.agentId,
      type: this.agentType,
      stats: this.stats,
      performance: this.performance,
      analysisResults: this.analysisResults,
      timestamp: new Date().toISOString()
    };
  }
}

// Start the agent if this file is run directly
if (require.main === module) {
  const agent = new LinkAnalyzerAgent();
  
  agent.start().then(() => {
    console.log('Link Analyzer Agent completed successfully');
    process.exit(0);
  }).catch(error => {
    console.error('Failed to run Link Analyzer Agent:', error);
    process.exit(1);
  });
}

module.exports = LinkAnalyzerAgent; 