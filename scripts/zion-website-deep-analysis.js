#!/usr/bin/env node

const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs').promises;
const path = require('path');
const { URL } = require('url');

class ZionWebsiteAnalyzer {
  constructor() {
    this.baseUrl = 'https://ziontechgroup.com';
    this.domain = 'ziontechgroup.com';
    this.visited = new Set();
    this.brokenLinks = [];
    this.missingContent = [];
    this.externalLinks = [];
    this.internalLinks = [];
    this.pageContent = new Map();
    this.sitemapUrls = [];
    this.robotsTxt = null;
  }

  async delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async loadSitemap() {
    try {
      console.log('Loading sitemap...');
      const sitemapUrl = `${this.baseUrl}/sitemap.xml`;
      const response = await axios.get(sitemapUrl);
      const $ = cheerio.load(response.data, { xmlMode: true });
      
      $('url loc').each((i, element) => {
        const url = $(element).text().trim();
        if (url && url.includes(this.domain)) {
          this.sitemapUrls.push(url);
        }
      });
      
      console.log(`Loaded ${this.sitemapUrls.length} URLs from sitemap`);
    } catch (error) {
      console.log('Could not load sitemap, will crawl manually');
    }
  }

  async loadRobotsTxt() {
    try {
      const robotsUrl = `${this.baseUrl}/robots.txt`;
      const response = await axios.get(robotsUrl);
      this.robotsTxt = response.data;
      console.log('Loaded robots.txt');
    } catch (error) {
      console.log('No robots.txt found');
    }
  }

  async checkLink(url, parentUrl = '') {
    try {
      const response = await axios.get(url, {
        timeout: 15000,
        validateStatus: () => true,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; ZionTechGroup-Analyzer/1.0)'
        }
      });

      const status = response.status;
      const contentType = response.headers['content-type'] || '';
      const contentLength = response.headers['content-length'] || 0;

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
    const metaDescription = $('meta[name="description"]').attr('content') || '';
    const metaKeywords = $('meta[name="keywords"]').attr('content') || '';
    
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

    if (!metaDescription) {
      issues.push('Missing meta description');
    }

    if (metaDescription.length < 50) {
      issues.push('Meta description too short');
    }

    return {
      url,
      title,
      textLength: text.length,
      headings: headings.length,
      images,
      links,
      metaDescription,
      metaKeywords,
      issues,
      hasContentIssues: issues.length > 0
    };
  }

  async crawlPage(url, depth = 0) {
    if (depth > 3 || this.visited.size >= 500) {
      return;
    }

    if (this.visited.has(url)) {
      return;
    }

    this.visited.add(url);
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
              if (depth < 2) {
                await this.delay(200);
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

  async checkSitemapUrls() {
    console.log('Checking sitemap URLs...');
    const sitemapResults = [];
    
    for (const url of this.sitemapUrls.slice(0, 100)) { // Limit to first 100 for performance
      const result = await this.checkLink(url);
      if (result.isBroken) {
        sitemapResults.push(result);
      }
      await this.delay(100);
    }
    
    return sitemapResults;
  }

  async runAnalysis() {
    console.log('Starting Zion Tech Group website deep analysis...');
    
    const startTime = Date.now();
    
    // Load sitemap and robots.txt
    await this.loadSitemap();
    await this.loadRobotsTxt();
    
    // Start crawling from the base URL
    await this.crawlPage(this.baseUrl, 0);
    
    // Check sitemap URLs
    const sitemapIssues = await this.checkSitemapUrls();
    this.brokenLinks.push(...sitemapIssues);
    
    // Check all internal links that weren't crawled
    const uncrawledInternal = this.internalLinks.filter(link => !this.visited.has(link));
    for (const link of uncrawledInternal.slice(0, 50)) { // Limit to 50 for performance
      const linkCheck = await this.checkLink(link);
      if (linkCheck.isBroken) {
        this.brokenLinks.push(linkCheck);
      }
      await this.delay(100);
    }
    
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    // Generate analysis results
    return this.generateAnalysisResults(duration);
  }

  generateAnalysisResults(duration) {
    const uniqueBrokenLinks = [...new Map(this.brokenLinks.map(item => [item.url, item])).values()];
    const uniqueExternalLinks = [...new Set(this.externalLinks)];
    const uniqueInternalLinks = [...new Set(this.internalLinks)];
    
    return {
      summary: {
        totalPagesCrawled: this.visited.size,
        totalLinksFound: uniqueInternalLinks.length + uniqueExternalLinks.length,
        brokenLinksCount: uniqueBrokenLinks.length,
        missingContentCount: this.missingContent.length,
        externalLinksCount: uniqueExternalLinks.length,
        internalLinksCount: uniqueInternalLinks.length,
        sitemapUrlsCount: this.sitemapUrls.length,
        analysisDuration: `${(duration / 1000).toFixed(2)}s`,
        timestamp: new Date().toISOString()
      },
      brokenLinks: uniqueBrokenLinks,
      missingContent: this.missingContent,
      externalLinks: uniqueExternalLinks,
      internalLinks: uniqueInternalLinks,
      pageAnalysis: Array.from(this.pageContent.values()),
      sitemapIssues: this.sitemapUrls.filter(url => 
        uniqueBrokenLinks.some(link => link.url === url)
      ),
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
          'Add relevant images and media content',
          'Add meta descriptions for better SEO'
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

  async saveResults(filename = 'zion-website-analysis.json') {
    const outputPath = path.join(process.cwd(), filename);
    const results = this.generateAnalysisResults(0);
    await fs.writeFile(outputPath, JSON.stringify(results, null, 2));
    console.log(`Analysis results saved to: ${outputPath}`);
    return outputPath;
  }

  async generateReport(filename = 'zion-website-analysis-report.md') {
    const results = this.generateAnalysisResults(0);
    const report = this.generateMarkdownReport(results);
    const outputPath = path.join(process.cwd(), filename);
    await fs.writeFile(outputPath, report);
    console.log(`Analysis report saved to: ${outputPath}`);
    return outputPath;
  }

  generateMarkdownReport(results) {
    const { summary, brokenLinks, missingContent, recommendations, sitemapIssues } = results;
    
    let report = `# Zion Tech Group Website Deep Analysis Report\n\n`;
    report += `**Analysis Date:** ${summary.timestamp}\n`;
    report += `**Duration:** ${summary.analysisDuration}\n\n`;
    
    // Summary
    report += `## Summary\n\n`;
    report += `- **Total Pages Crawled:** ${summary.totalPagesCrawled}\n`;
    report += `- **Total Links Found:** ${summary.totalLinksFound}\n`;
    report += `- **Broken Links:** ${summary.brokenLinksCount}\n`;
    report += `- **Content Issues:** ${summary.missingContentCount}\n`;
    report += `- **External Links:** ${summary.externalLinksCount}\n`;
    report += `- **Internal Links:** ${summary.internalLinksCount}\n`;
    report += `- **Sitemap URLs:** ${summary.sitemapUrlsCount}\n\n`;
    
    // Broken Links
    if (brokenLinks.length > 0) {
      report += `## Broken Links (${brokenLinks.length})\n\n`;
      brokenLinks.slice(0, 20).forEach((link, index) => {
        report += `### ${index + 1}. ${link.url}\n`;
        report += `- **Status:** ${link.status || 'Error'}\n`;
        report += `- **Parent:** ${link.parentUrl || 'N/A'}\n`;
        report += `- **Issues:** ${link.issues.join(', ')}\n\n`;
      });
      if (brokenLinks.length > 20) {
        report += `... and ${brokenLinks.length - 20} more broken links\n\n`;
      }
    }
    
    // Missing Content
    if (missingContent.length > 0) {
      report += `## Content Issues (${missingContent.length})\n\n`;
      missingContent.slice(0, 15).forEach((page, index) => {
        report += `### ${index + 1}. ${page.url}\n`;
        report += `- **Title:** ${page.title || 'Missing'}\n`;
        report += `- **Text Length:** ${page.textLength} characters\n`;
        report += `- **Issues:** ${page.issues.join(', ')}\n\n`;
      });
      if (missingContent.length > 15) {
        report += `... and ${missingContent.length - 15} more content issues\n\n`;
      }
    }
    
    // Sitemap Issues
    if (sitemapIssues.length > 0) {
      report += `## Sitemap Issues (${sitemapIssues.length})\n\n`;
      report += `The following URLs from the sitemap have issues:\n\n`;
      sitemapIssues.forEach((url, index) => {
        const brokenLink = brokenLinks.find(link => link.url === url);
        if (brokenLink) {
          report += `${index + 1}. ${url} - ${brokenLink.issues.join(', ')}\n`;
        }
      });
      report += `\n`;
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
  const analyzer = new ZionWebsiteAnalyzer();
  
  try {
    const results = await analyzer.runAnalysis();
    
    // Save results
    await analyzer.saveResults();
    await analyzer.generateReport();
    
    // Print summary
    console.log('\n=== ZION WEBSITE ANALYSIS COMPLETE ===');
    console.log(`Total pages crawled: ${results.summary.totalPagesCrawled}`);
    console.log(`Broken links found: ${results.summary.brokenLinksCount}`);
    console.log(`Content issues found: ${results.summary.missingContentCount}`);
    console.log(`Sitemap URLs: ${results.summary.sitemapUrlsCount}`);
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

module.exports = ZionWebsiteAnalyzer;