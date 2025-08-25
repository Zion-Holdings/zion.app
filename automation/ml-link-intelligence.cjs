#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");
const { URL } = require("url");

const LOG_DIR = path.join(__dirname, "logs");
const LOG_FILE = path.join(LOG_DIR, "ml-link-intelligence.runtime.log");
const DATA_DIR = path.join(__dirname, "data");
const LINKS_FILE = path.join(DATA_DIR, "analyzed-links.json");

class MLLinkIntelligence {
  constructor() {
    this.ensureDirectories();
    this.loadAnalyzedLinks();
    this.analysisQueue = [];
    this.isProcessing = false;
  }

  ensureDirectories() {
    try {
      fs.mkdirSync(LOG_DIR, { recursive: true });
      fs.mkdirSync(DATA_DIR, { recursive: true });
    } catch (error) {
      console.error('Failed to create directories:', error.message);
    }
  }

  loadAnalyzedLinks() {
    try {
      if (fs.existsSync(LINKS_FILE)) {
        this.analyzedLinks = JSON.parse(fs.readFileSync(LINKS_FILE, 'utf8'));
      } else {
        this.analyzedLinks = {
          links: [],
          lastUpdated: new Date().toISOString(),
          totalAnalyzed: 0,
          healthScore: 100
        };
        this.saveAnalyzedLinks();
      }
    } catch (error) {
      this.analyzedLinks = {
        links: [],
        lastUpdated: new Date().toISOString(),
        totalAnalyzed: 0,
        healthScore: 100
      };
    }
  }

  saveAnalyzedLinks() {
    try {
      fs.writeFileSync(LINKS_FILE, JSON.stringify(this.analyzedLinks, null, 2));
    } catch (error) {
      this.log(`Failed to save analyzed links: ${error.message}`);
    }
  }

  log(message) {
    const line = `[${new Date().toISOString()}] ${message}\n`;
    try {
      fs.appendFileSync(LOG_FILE, line, "utf8");
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
    process.stdout.write(line);
  }

  async checkLinkHealth(url) {
    return new Promise((resolve) => {
      try {
        const parsedUrl = new URL(url);
        const client = parsedUrl.protocol === 'https:' ? https : http;
        const timeout = 10000; // 10 seconds
        
        const req = client.get(url, { timeout }, (res) => {
          const statusCode = res.statusCode;
          const responseTime = Date.now() - startTime;
          
          let health = 'good';
          if (statusCode >= 400) health = 'poor';
          else if (statusCode >= 300) health = 'warning';
          
          resolve({
            url,
            statusCode,
            responseTime,
            health,
            timestamp: new Date().toISOString(),
            headers: {
              'content-type': res.headers['content-type'] || 'unknown',
              'server': res.headers['server'] || 'unknown'
            }
          });
        });

        const startTime = Date.now();
        
        req.on('error', (error) => {
          resolve({
            url,
            statusCode: 0,
            responseTime: Date.now() - startTime,
            health: 'error',
            error: error.message,
            timestamp: new Date().toISOString()
          });
        });

        req.on('timeout', () => {
          req.destroy();
          resolve({
            url,
            statusCode: 0,
            responseTime: Date.now() - startTime,
            health: 'timeout',
            error: 'Request timeout',
            timestamp: new Date().toISOString()
          });
        });

      } catch (error) {
        resolve({
          url,
          statusCode: 0,
          responseTime: 0,
          health: 'error',
          error: error.message,
          timestamp: new Date().toISOString()
        });
      }
    });
  }

  async analyzeLink(url) {
    this.log(`Analyzing link: ${url}`);
    
    try {
      const analysis = await this.checkLinkHealth(url);
      
      // Add intelligence metrics
      analysis.intelligence = {
        domainAuthority: this.calculateDomainAuthority(url),
        securityScore: this.calculateSecurityScore(analysis),
        performanceScore: this.calculatePerformanceScore(analysis),
        seoScore: this.calculateSEOScore(analysis)
      };

      // Update global health score
      this.updateGlobalHealthScore(analysis);
      
      // Store analysis
      this.storeLinkAnalysis(analysis);
      
      this.log(`Analysis complete for ${url}: ${analysis.health} (${analysis.statusCode})`);
      return analysis;
      
    } catch (error) {
      this.log(`Error analyzing ${url}: ${error.message}`);
      return {
        url,
        health: 'error',
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  calculateDomainAuthority(url) {
    try {
      const domain = new URL(url).hostname;
      // Simple heuristic-based domain authority calculation
      let score = 50; // Base score
      
      if (domain.includes('google.com')) score += 30;
      else if (domain.includes('github.com')) score += 25;
      else if (domain.includes('stackoverflow.com')) score += 20;
      else if (domain.includes('wikipedia.org')) score += 20;
      else if (domain.includes('medium.com')) score += 15;
      else if (domain.includes('dev.to')) score += 15;
      
      // Subdomain penalty
      if (domain.split('.').length > 2) score -= 10;
      
      return Math.max(0, Math.min(100, score));
    } catch (error) {
      return 50;
    }
  }

  calculateSecurityScore(analysis) {
    let score = 100;
    
    if (analysis.health === 'error') score -= 50;
    if (analysis.health === 'timeout') score -= 30;
    if (analysis.health === 'poor') score -= 20;
    
    // HTTPS bonus
    if (analysis.url.startsWith('https://')) score += 10;
    
    return Math.max(0, Math.min(100, score));
  }

  calculatePerformanceScore(analysis) {
    let score = 100;
    
    if (analysis.responseTime > 5000) score -= 40;
    else if (analysis.responseTime > 3000) score -= 20;
    else if (analysis.responseTime > 1000) score -= 10;
    
    if (analysis.health === 'error') score -= 50;
    
    return Math.max(0, Math.min(100, score));
  }

  calculateSEOScore(analysis) {
    let score = 100;
    
    if (analysis.statusCode >= 400) score -= 40;
    else if (analysis.statusCode >= 300) score -= 20;
    
    if (analysis.health === 'error') score -= 30;
    
    return Math.max(0, Math.min(100, score));
  }

  updateGlobalHealthScore(analysis) {
    const totalLinks = this.analyzedLinks.links.length;
    if (totalLinks === 0) return;
    
    let totalScore = 0;
    this.analyzedLinks.links.forEach(link => {
      if (link.intelligence) {
        totalScore += (link.intelligence.securityScore + link.intelligence.performanceScore + link.intelligence.seoScore) / 3;
      }
    });
    
    this.analyzedLinks.healthScore = Math.round(totalScore / totalLinks);
  }

  storeLinkAnalysis(analysis) {
    // Remove existing entry if it exists
    this.analyzedLinks.links = this.analyzedLinks.links.filter(link => link.url !== analysis.url);
    
    // Add new analysis
    this.analyzedLinks.links.push(analysis);
    this.analyzedLinks.lastUpdated = new Date().toISOString();
    this.analyzedLinks.totalAnalyzed = this.analyzedLinks.links.length;
    
    // Keep only last 1000 links to prevent memory issues
    if (this.analyzedLinks.links.length > 1000) {
      this.analyzedLinks.links = this.analyzedLinks.links.slice(-1000);
    }
    
    this.saveAnalyzedLinks();
  }

  async processQueue() {
    if (this.isProcessing || this.analysisQueue.length === 0) return;
    
    this.isProcessing = true;
    this.log(`Processing queue with ${this.analysisQueue.length} links`);
    
    while (this.analysisQueue.length > 0) {
      const url = this.analysisQueue.shift();
      await this.analyzeLink(url);
      
      // Small delay to prevent overwhelming servers
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    this.isProcessing = false;
    this.log('Queue processing complete');
  }

  addToQueue(url) {
    if (!this.analysisQueue.includes(url)) {
      this.analysisQueue.push(url);
      this.log(`Added ${url} to analysis queue`);
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalLinks: this.analyzedLinks.totalAnalyzed,
        healthScore: this.analyzedLinks.healthScore,
        queueLength: this.analysisQueue.length,
        isProcessing: this.isProcessing
      },
      healthDistribution: {
        good: 0,
        warning: 0,
        poor: 0,
        error: 0,
        timeout: 0
      },
      topIssues: [],
      recommendations: []
    };

    // Calculate health distribution
    this.analyzedLinks.links.forEach(link => {
      if (link.health) {
        report.healthDistribution[link.health]++;
      }
    });

    // Identify top issues
    const issues = this.analyzedLinks.links
      .filter(link => link.health !== 'good')
      .sort((a, b) => {
        const aScore = a.intelligence ? (a.intelligence.securityScore + a.intelligence.performanceScore + a.intelligence.seoScore) / 3 : 0;
        const bScore = b.intelligence ? (b.intelligence.securityScore + b.intelligence.performanceScore + b.intelligence.seoScore) / 3 : 0;
        return aScore - bScore;
      })
      .slice(0, 10);

    report.topIssues = issues.map(link => ({
      url: link.url,
      health: link.health,
      statusCode: link.statusCode,
      responseTime: link.responseTime,
      scores: link.intelligence || {}
    }));

    // Generate recommendations
    if (report.healthDistribution.error > 0) {
      report.recommendations.push('Investigate links returning errors');
    }
    if (report.healthDistribution.timeout > 0) {
      report.recommendations.push('Check for slow-responding servers');
    }
    if (report.healthDistribution.poor > 0) {
      report.recommendations.push('Review links with HTTP error status codes');
    }

    return report;
  }

  async run() {
    this.log("Starting ML Link Intelligence worker");
    
    // Add some sample links to analyze (replace with your actual links)
    const sampleLinks = [
      'https://github.com',
      'https://stackoverflow.com',
      'https://medium.com',
      'https://dev.to',
      'https://wikipedia.org'
    ];

    sampleLinks.forEach(url => this.addToQueue(url));

    let running = true;
    const stop = () => { 
      running = false; 
      this.log("Stopping ML Link Intelligence..."); 
    };
    
    process.on("SIGINT", stop);
    process.on("SIGTERM", stop);

    // Main processing loop
    while (running) {
      try {
        await this.processQueue();
        
        // Generate and log report every 5 minutes
        if (Date.now() % 300000 < 60000) { // Every 5 minutes
          const report = this.generateReport();
          this.log(`Health Report: Score ${report.summary.healthScore}, Links ${report.summary.totalLinks}, Issues ${report.topIssues.length}`);
        }
        
        await new Promise(resolve => setTimeout(resolve, 120000)); // 2 minutes
        
      } catch (error) {
        this.log(`Error in main loop: ${error.message}`);
        await new Promise(resolve => setTimeout(resolve, 30000)); // Wait 30 seconds on error
      }
    }
  }
}

// Run if called directly
if (require.main === module) {
  const intelligence = new MLLinkIntelligence();
  intelligence.run().catch((err) => { 
    try { 
      intelligence.log(`Fatal: ${err && err.stack ? err.stack : String(err)}`); 
    } catch (_) {} 
    process.exit(1); 
  });
}

module.exports = MLLinkIntelligence;


