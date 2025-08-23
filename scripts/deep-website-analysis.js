#!/usr/bin/env node

const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs').promises;
const path = require('path');
const { URL } = require('url');

class DeepWebsiteAnalyzer {
  constructor(baseUrl, options = {}) {
    this.baseUrl = baseUrl;
    this.domain = new URL(baseUrl).hostname;
    this.maxDepth = options.maxDepth || 5;
    this.maxPages = options.maxPages || 1000;
    this.delay = options.delay || 100;
    this.visited = new Set();
    this.brokenLinks = [];
    this.missingContent = [];
    this.externalLinks = [];
    this.internalLinks = [];
    this.pageContent = new Map();
    this.analysisResults = {
      summary: {},
      brokenLinks: [],
      missingContent: [],
      externalLinks: [],
      internalLinks: [],
      pageAnalysis: [],
      recommendations: []
    };
  }

  async delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  isSameDomain(url) {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname === this.domain;
    } catch {
      return false;
    }
  }

  normalizeUrl(url) {
    try {
      const urlObj = new URL(url);
      // Remove fragments and query parameters for internal links
      if (this.isSameDomain(url)) {
        urlObj.hash = '';
        urlObj.search = '';
      }
      return urlObj.toString();
    } catch {
      return url;
    }
  }

  async checkLink(url, parentUrl = '') {
    try {
      const response = await axios.get(url, {
        timeout: 10000,
        validateStatus: () => true, // Accept all status codes
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; ZionTechGroup-Analyzer/1.0)'
        }
      });

      const status = response.status;
      const contentType = response.headers['content-type'] || '';
      const contentLength = response.headers['content-length'] || 0;

      // Check for various types of issues
      const issues = [];
      
      if (status >= 400) {
        issues.push(`HTTP ${status} - ${this.getStatusText(status)}`);
      }
      
      if (contentType.includes('text/html') && contentLength < 1000) {
        issues.push('Suspiciously small HTML content');
      }
      
      if (contentType.includes('text/html') && response.data.includes('404') && response.data.includes('not found')) {
        issues.push('404 page content detected');
      }

      return {
        url,
        parentUrl,
        status,
        contentType,
        contentLength,
        issues,
        isBroken: status >= 400 || issues.length > 0,
        responseTime: Date.now()
      };
    } catch (error) {
      return {
        url,
        parentUrl,
        status: 0,
        error: error.message,
        issues: [`Connection error: ${error.message}`],
        isBroken: true,
        responseTime: Date.now()
      };
    }
  }

  getStatusText(status) {
    const statusTexts = {
      200: 'OK',
      301: 'Moved Permanently',
      302: 'Found',
      304: 'Not Modified',
      307: 'Temporary Redirect',
      308: 'Permanent Redirect',
      400: 'Bad Request',
      401: 'Unauthorized',
      403: 'Forbidden',
      404: 'Not Found',
      500: 'Internal Server Error',
      502: 'Bad Gateway',
      503: 'Service Unavailable',
      504: 'Gateway Timeout'
    };
    return statusTexts[status] || 'Unknown';
  }

  async extractLinks(html, baseUrl) {
    const $ = cheerio.load(html);
    const links = new Set();
    
    // Extract all links
    $('a[href]').each((i, element) => {
      const href = $(element).attr('href');
      if (href) {
        try {
          const absoluteUrl = new URL(href, baseUrl).toString();
          links.add(absoluteUrl);
        } catch (error) {
          // Skip invalid URLs
        }
      }
    });

    // Extract image sources
    $('img[src]').each((i, element) => {
      const src = $(element).attr('src');
      if (src) {
        try {
          const absoluteUrl = new URL(src, baseUrl).toString();
          links.add(absoluteUrl);
        } catch (error) {
          // Skip invalid URLs
        }
      }
    });

    // Extract script sources
    $('script[src]').each((i, element) => {
      const src = $(element).attr('src');
      if (src) {
        try {
          const absoluteUrl = new URL(src, baseUrl).toString();
          links.add(absoluteUrl);
        } catch (error) {
          // Skip invalid URLs
        }
      }
    });

    // Extract CSS sources
    $('link[rel="stylesheet"]').each((i, element) => {
      const href = $(element).attr('href');
      if (href) {
        try {
          const absoluteUrl = new URL(href, baseUrl).toString();
          links.add(absoluteUrl);
        } catch (error) {
          // Skip invalid URLs
        }
      }
    });

    return Array.from(links);
  }

  async analyzePageContent(url, html) {
    const $ = cheerio.load(html);
    
    // Remove script and style content
    $('script').remove();
    $('style').remove();
    
    const text = $('body').text().trim();
    const title = $('title').text().trim();
    const headings = $('h1, h2, h3, h4, h5, h6').map((i, el) => $(el).text().trim()).get();
    const images = $('img').length;
    const links = $('a').length;
    
    // Check for common content issues
    const issues = [];
    
    if (text.length < 100) {
      issues.push('Very little text content');
    }
    
    if (title.length < 10) {
      issues.push('Short or missing title');
    }
    
    if (headings.length === 0) {
      issues.push('No headings found');
    }
    
    if (images === 0 && text.length < 200) {
      issues.push('No images and minimal text');
    }

    return {
      url,
      title,
      textLength: text.length,
      headings: headings.length,
      images,
      links,
      issues,
      hasContentIssues: issues.length > 0
    };
  }

  async crawlPage(url, depth = 0) {
    if (depth > this.maxDepth || this.visited.size >= this.maxPages) {
      return;
    }

    const normalizedUrl = this.normalizeUrl(url);
    if (this.visited.has(normalizedUrl)) {
      return;
    }

    this.visited.add(normalizedUrl);
    console.log(`[${depth}] Crawling: ${url}`);

    try {
      const response = await axios.get(url, {
        timeout: 15000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; ZionTechGroup-Analyzer/1.0)'
        }
      });

      if (response.status === 200 && response.data) {
        // Analyze page content
        const contentAnalysis = await this.analyzePageContent(url, response.data);
        this.pageContent.set(url, contentAnalysis);
        
        if (contentAnalysis.hasContentIssues) {
          this.missingContent.push(contentAnalysis);
        }

        // Extract and check links
        const links = await this.extractLinks(response.data, url);
        
        for (const link of links) {
          if (this.isValidUrl(link)) {
            if (this.isSameDomain(link)) {
              this.internalLinks.push(link);
              // Recursively crawl internal links
              if (depth < this.maxDepth) {
                await this.delay(this.delay);
                await this.crawlPage(link, depth + 1);
              }
            } else {
              this.externalLinks.push(link);
              // Check external links
              const linkCheck = await this.checkLink(link, url);
              if (linkCheck.isBroken) {
                this.brokenLinks.push(linkCheck);
              }
            }
          }
        }
      }
    } catch (error) {
      console.error(`Error crawling ${url}:`, error.message);
      this.brokenLinks.push({
        url,
        parentUrl: '',
        status: 0,
        error: error.message,
        issues: [`Crawl error: ${error.message}`],
        isBroken: true,
        responseTime: Date.now()
      });
    }
  }

  async runAnalysis() {
    console.log(`Starting deep analysis of ${this.baseUrl}`);
    console.log(`Max depth: ${this.maxDepth}, Max pages: ${this.maxPages}`);
    
    const startTime = Date.now();
    
    // Start crawling from the base URL
    await this.crawlPage(this.baseUrl, 0);
    
    // Check all internal links that weren't crawled
    const uncrawledInternal = this.internalLinks.filter(link => !this.visited.has(this.normalizeUrl(link)));
    for (const link of uncrawledInternal) {
      if (this.visited.size >= this.maxPages) break;
      
      const linkCheck = await this.checkLink(link);
      if (linkCheck.isBroken) {
        this.brokenLinks.push(linkCheck);
      }
      
      await this.delay(this.delay);
    }
    
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    // Generate analysis results
    this.generateAnalysisResults(duration);
    
    return this.analysisResults;
  }

  generateAnalysisResults(duration) {
    const uniqueBrokenLinks = [...new Map(this.brokenLinks.map(item => [item.url, item])).values()];
    const uniqueExternalLinks = [...new Set(this.externalLinks)];
    const uniqueInternalLinks = [...new Set(this.internalLinks)];
    
    this.analysisResults = {
      summary: {
        totalPagesCrawled: this.visited.size,
        totalLinksFound: uniqueInternalLinks.length + uniqueExternalLinks.length,
        brokenLinksCount: uniqueBrokenLinks.length,
        missingContentCount: this.missingContent.length,
        externalLinksCount: uniqueExternalLinks.length,
        internalLinksCount: uniqueInternalLinks.length,
        analysisDuration: `${(duration / 1000).toFixed(2)}s`,
        timestamp: new Date().toISOString()
      },
      brokenLinks: uniqueBrokenLinks,
      missingContent: this.missingContent,
      externalLinks: uniqueExternalLinks,
      internalLinks: uniqueInternalLinks,
      pageAnalysis: Array.from(this.pageContent.values()),
      recommendations: this.generateRecommendations(uniqueBrokenLinks, this.missingContent)
    };
  }

  generateRecommendations(brokenLinks, missingContent) {
    const recommendations = [];
    
    if (brokenLinks.length > 0) {
      recommendations.push({
        priority: 'HIGH',
        category: 'Broken Links',
        description: `Found ${brokenLinks.length} broken links that need immediate attention`,
        actions: [
          'Review and fix all broken internal links',
          'Update or remove broken external links',
          'Implement redirects for moved pages',
          'Set up monitoring for link health'
        ]
      });
    }
    
    if (missingContent.length > 0) {
      recommendations.push({
        priority: 'MEDIUM',
        category: 'Content Quality',
        description: `Found ${missingContent.length} pages with content issues`,
        actions: [
          'Review pages with minimal content',
          'Add proper headings and structure',
          'Ensure all pages have meaningful titles',
          'Add relevant images and media content'
        ]
      });
    }
    
    if (this.externalLinks.length > 0) {
      recommendations.push({
        priority: 'LOW',
        category: 'External Links',
        description: `Found ${this.externalLinks.length} external links`,
        actions: [
          'Regularly verify external link validity',
          'Consider adding nofollow attributes where appropriate',
          'Monitor external link performance'
        ]
      });
    }
    
    return recommendations;
  }

  async saveResults(filename = 'deep-website-analysis.json') {
    const outputPath = path.join(process.cwd(), filename);
    await fs.writeFile(outputPath, JSON.stringify(this.analysisResults, null, 2));
    console.log(`Analysis results saved to: ${outputPath}`);
    return outputPath;
  }

  async generateReport(filename = 'deep-website-analysis-report.md') {
    const report = this.generateMarkdownReport();
    const outputPath = path.join(process.cwd(), filename);
    await fs.writeFile(outputPath, report);
    console.log(`Analysis report saved to: ${outputPath}`);
    return outputPath;
  }

  generateMarkdownReport() {
    const { summary, brokenLinks, missingContent, recommendations } = this.analysisResults;
    
    let report = `# Deep Website Analysis Report - Zion Tech Group\n\n`;
    report += `**Analysis Date:** ${summary.timestamp}\n`;
    report += `**Duration:** ${summary.analysisDuration}\n\n`;
    
    // Summary
    report += `## Summary\n\n`;
    report += `- **Total Pages Crawled:** ${summary.totalPagesCrawled}\n`;
    report += `- **Total Links Found:** ${summary.totalLinksFound}\n`;
    report += `- **Broken Links:** ${summary.brokenLinksCount}\n`;
    report += `- **Content Issues:** ${summary.missingContentCount}\n`;
    report += `- **External Links:** ${summary.externalLinksCount}\n`;
    report += `- **Internal Links:** ${summary.internalLinksCount}\n\n`;
    
    // Broken Links
    if (brokenLinks.length > 0) {
      report += `## Broken Links (${brokenLinks.length})\n\n`;
      brokenLinks.forEach((link, index) => {
        report += `### ${index + 1}. ${link.url}\n`;
        report += `- **Status:** ${link.status || 'Error'}\n`;
        report += `- **Parent:** ${link.parentUrl || 'N/A'}\n`;
        report += `- **Issues:** ${link.issues.join(', ')}\n\n`;
      });
    }
    
    // Missing Content
    if (missingContent.length > 0) {
      report += `## Content Issues (${missingContent.length})\n\n`;
      missingContent.forEach((page, index) => {
        report += `### ${index + 1}. ${page.url}\n`;
        report += `- **Title:** ${page.title || 'Missing'}\n`;
        report += `- **Text Length:** ${page.textLength} characters\n`;
        report += `- **Issues:** ${page.issues.join(', ')}\n\n`;
      });
    }
    
    // Recommendations
    if (recommendations.length > 0) {
      report += `## Recommendations\n\n`;
      recommendations.forEach((rec, index) => {
        report += `### ${index + 1}. ${rec.category} (${rec.priority})\n`;
        report += `${rec.description}\n\n`;
        report += `**Actions:**\n`;
        rec.actions.forEach(action => {
          report += `- ${action}\n`;
        });
        report += `\n`;
      });
    }
    
    return report;
  }
}

// Main execution
async function main() {
  const baseUrl = 'https://ziontechgroup.com';
  
  const analyzer = new DeepWebsiteAnalyzer(baseUrl, {
    maxDepth: 5,
    maxPages: 1000,
    delay: 100
  });
  
  try {
    console.log('Starting deep website analysis...');
    const results = await analyzer.runAnalysis();
    
    // Save results
    await analyzer.saveResults();
    await analyzer.generateReport();
    
    // Print summary
    console.log('\n=== ANALYSIS COMPLETE ===');
    console.log(`Total pages crawled: ${results.summary.totalPagesCrawled}`);
    console.log(`Broken links found: ${results.summary.brokenLinksCount}`);
    console.log(`Content issues found: ${results.summary.missingContentCount}`);
    console.log(`Analysis duration: ${results.summary.analysisDuration}`);
    
    if (results.brokenLinks.length > 0) {
      console.log('\n=== BROKEN LINKS ===');
      results.brokenLinks.slice(0, 10).forEach((link, index) => {
        console.log(`${index + 1}. ${link.url} - ${link.issues.join(', ')}`);
      });
      if (results.brokenLinks.length > 10) {
        console.log(`... and ${results.brokenLinks.length - 10} more`);
      }
    }
    
    if (results.recommendations.length > 0) {
      console.log('\n=== RECOMMENDATIONS ===');
      results.recommendations.forEach((rec, index) => {
        console.log(`${index + 1}. [${rec.priority}] ${rec.category}: ${rec.description}`);
      });
    }
    
  } catch (error) {
    console.error('Analysis failed:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = DeepWebsiteAnalyzer;