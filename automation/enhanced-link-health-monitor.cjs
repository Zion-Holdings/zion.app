#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

class EnhancedLinkHealthMonitor {
  constructor() {
    this.ROOT = process.cwd();
    this.REPORT_DIR = path.join(this.ROOT, 'data', 'reports', 'link-health');
    this.ensureDir(this.REPORT_DIR);
    
    this.linkCache = new Map();
    this.brokenLinks = new Map();
    this.suggestions = new Map();
  }

  ensureDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  }

  async checkUrl(url, timeout = 10000) {
    return new Promise((resolve) => {
      const mod = url.startsWith('https') ? https : http;
      const req = mod.request(url, { 
        method: 'HEAD', 
        timeout,
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; LinkHealthBot/1.0)' }
      }, (res) => {
        resolve({ 
          url, 
          statusCode: res.statusCode, 
          ok: res.statusCode >= 200 && res.statusCode < 400,
          finalUrl: res.headers.location || url
        });
        res.resume();
      });
      
      req.on('timeout', () => { 
        req.destroy(); 
        resolve({ url, statusCode: 0, ok: false, error: 'timeout' }); 
      });
      
      req.on('error', () => {
        // Fallback to GET for more reliable checking
        const req2 = mod.get(url, { timeout: timeout * 2 }, (res2) => {
          resolve({ 
            url, 
            statusCode: res2.statusCode, 
            ok: res2.statusCode >= 200 && res2.statusCode < 400,
            finalUrl: res2.headers.location || url
          });
          res2.resume();
        });
        
        req2.on('timeout', () => { 
          req2.destroy(); 
          resolve({ url, statusCode: 0, ok: false, error: 'timeout' }); 
        });
        
        req2.on('error', (e) => resolve({ 
          url, 
          statusCode: 0, 
          ok: false, 
          error: e.message 
        }));
      });
      
      req.end();
    });
  }

  async checkUrlBatch(urls, concurrency = 10) {
    const results = [];
    let index = 0;
    
    const workers = Array.from({ length: concurrency }, async () => {
      while (index < urls.length) {
        const url = urls[index++];
        const result = await this.checkUrl(url);
        results.push(result);
        
        // Rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    });
    
    await Promise.all(workers);
    return results;
  }

  async collectAllLinks() {
    const links = new Set();
    const dirs = ['pages', 'components', 'automation'];
    
    for (const dir of dirs) {
      const fullDir = path.join(this.ROOT, dir);
      if (fs.existsSync(fullDir)) {
        this.walkDirForLinks(fullDir, links);
      }
    }
    
    return Array.from(links);
  }

  walkDirForLinks(dir, links) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
        this.walkDirForLinks(full, links);
      } else if (entry.isFile()) {
        if (/\.(tsx|ts|js|jsx|mdx|md)$/i.test(entry.name)) {
          this.extractLinksFromFile(full, links);
        }
      }
    }
  }

  extractLinksFromFile(filePath, links) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Extract href attributes
      const hrefRegex = /href\s*=\s*(?:"([^"]+)"|'([^']+)'|\{\s*`([^`]+)`\s*\}|\{\s*"([^"]+)"\s*\}|\{\s*'([^']+)'\s*\})/g;
      let match;
      
      while ((match = hrefRegex.exec(content)) !== null) {
        const link = match[1] || match[2] || match[3] || match[4] || match[5];
        if (link && this.isValidLink(link)) {
          links.add(link);
        }
      }
      
      // Extract other URL patterns - more precise regex
      const urlRegex = /https?:\/\/[^\s"'`{}<>]+/g;
      while ((match = urlRegex.exec(content)) !== null) {
        const link = match[0];
        if (this.isValidLink(link)) {
          links.add(link);
        }
      }
    } catch (error) {
      console.warn(`Warning: Could not read file ${filePath}:`, error.message);
    }
  }

  isValidLink(link) {
    if (!link || link.startsWith('#')) return false;
    if (link.startsWith('mailto:') || link.startsWith('tel:')) return false;
    if (link.startsWith('javascript:')) return false;
    if (link.startsWith('data:')) return false;
    if (link.startsWith('/')) return false; // Skip relative URLs
    if (link.includes('localhost')) return false; // Skip localhost URLs
    if (link.includes('127.0.0.1')) return false; // Skip localhost URLs
    if (link.endsWith(')') && !link.includes('(')) return false; // Skip URLs with trailing parentheses
    if (link.includes('fonts.gstatic.com') || link.includes('fonts.googleapis.com')) return false; // Skip font URLs for now
    return true;
  }

  generateSuggestion(url, result) {
    if (result.error === 'timeout') {
      return {
        type: 'timeout',
        suggestion: 'Increase timeout or check server response time',
        priority: 'medium'
      };
    }
    
    if (result.statusCode === 404) {
      if (url.includes('ziontechgroup.com')) {
        // Internal link suggestions
        if (url.includes('/services')) {
          return {
            type: 'missing-page',
            suggestion: '/services',
            action: 'create-page',
            priority: 'high'
          };
        }
        if (url.includes('/products')) {
          return {
            type: 'missing-page',
            suggestion: '/products',
            action: 'create-page',
            priority: 'high'
          };
        }
        if (url.includes('/contact')) {
          return {
            type: 'missing-page',
            suggestion: '/contact',
            action: 'create-page',
            priority: 'high'
          };
        }
      }
      
      if (url.includes('github.com')) {
        // GitHub link suggestions
        if (url.includes('/zion.app/')) {
          return {
            type: 'github-repo-mismatch',
            suggestion: url.replace('/zion.app/', '/zion/'),
            action: 'update-link',
            priority: 'high'
          };
        }
      }
    }
    
    return {
      type: 'unknown',
      suggestion: 'Manual review required',
      priority: 'low'
    };
  }

  generateReport() {
    const timestamp = new Date().toISOString();
    const report = {
      generatedAt: timestamp,
      summary: {
        totalLinks: this.linkCache.size,
        brokenLinks: this.brokenLinks.size,
        healthyLinks: this.linkCache.size - this.brokenLinks.size,
        suggestions: this.suggestions.size
      },
      brokenLinks: Array.from(this.brokenLinks.entries()),
      suggestions: Array.from(this.suggestions.entries()),
      allLinks: Array.from(this.linkCache.entries())
    };

    const filename = `link-health-report-${timestamp.replace(/[:.]/g, '-')}.json`;
    const filepath = path.join(this.REPORT_DIR, filename);
    
    fs.writeFileSync(filepath, JSON.stringify(report, null, 2));
    fs.writeFileSync(path.join(this.REPORT_DIR, 'latest.json'), JSON.stringify(report, null, 2));
    
    return { filepath, report };
  }

  async run() {
    console.log('🔍 Starting Enhanced Link Health Monitor...');
    
    // Collect all links from the codebase
    const links = await this.collectAllLinks();
    console.log(`📊 Found ${links.length} links to check`);
    
    // Check links in batches
    const results = await this.checkUrlBatch(links);
    
    // Process results
    for (const result of results) {
      this.linkCache.set(result.url, result);
      
      if (!result.ok) {
        this.brokenLinks.set(result.url, result);
        
        // Generate suggestions for broken links
        const suggestion = this.generateSuggestion(result.url, result);
        if (suggestion) {
          this.suggestions.set(result.url, suggestion);
        }
      }
    }
    
    // Generate and save report
    const { filepath, report } = this.generateReport();
    
    console.log(`✅ Link health check complete!`);
    console.log(`📈 Summary: ${report.summary.healthyLinks}/${report.summary.totalLinks} links healthy`);
    console.log(`🚨 Broken links: ${report.summary.brokenLinks}`);
    console.log(`💡 Suggestions: ${report.summary.suggestions}`);
    console.log(`📄 Report saved to: ${filepath}`);
    
    return report;
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new EnhancedLinkHealthMonitor();
  monitor.run().catch(console.error);
}

module.exports = EnhancedLinkHealthMonitor;