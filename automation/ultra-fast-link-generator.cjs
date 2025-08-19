#!/usr/bin/env node

'use strict';

/*
  Ultra-Fast Link Generator
  - Continuously generates new links and content
  - Creates internal links, external links, and content bridges
  - Runs every 30 seconds for maximum speed
  - Integrates with all existing automation systems
  - Creates redundant links across multiple platforms
*/

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

class UltraFastLinkGenerator {
  constructor() {
    this.rootDir = process.cwd();
    this.baseUrl = process.env.CANONICAL_URL || 'https://ziontechgroup.com';
    this.linksDir = path.join(this.rootDir, 'data', 'reports', 'link-generation');
    this.ensureDirectories();
    this.stats = {
      totalLinksGenerated: 0,
      internalLinks: 0,
      externalLinks: 0,
      contentBridges: 0,
      lastRun: null,
      cycleCount: 0
    };
  }

  ensureDirectories() {
    if (!fs.existsSync(this.linksDir)) {
      fs.mkdirSync(this.linksDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    const logFile = path.join(this.linksDir, 'ultra-fast-links.log');
    fs.appendFileSync(logFile, logEntry + '\n');
  }

  async generateInternalLinks() {
    this.log('Generating internal links...');
    
    // Generate links to existing pages
    const pages = this.scanPages();
    const internalLinks = [];
    
    for (const page of pages) {
      // Create contextual links between related pages
      const relatedPages = this.findRelatedPages(page, pages);
      for (const related of relatedPages) {
        internalLinks.push({
          from: page,
          to: related,
          type: 'internal',
          context: 'related-content'
        });
      }
    }
    
    this.stats.internalLinks += internalLinks.length;
    return internalLinks;
  }

  async generateExternalLinks() {
    this.log('Generating external links...');
    
    // Generate links to external resources
    const externalLinks = [
      {
        from: '/',
        to: 'https://github.com/Zion-Holdings/zion.app',
        type: 'external',
        context: 'source-code'
      },
      {
        from: '/about',
        to: 'https://linkedin.com/company/zion-tech-group',
        type: 'external',
        context: 'company-profile'
      },
      {
        from: '/services',
        to: 'https://ziontechgroup.com/services',
        type: 'external',
        context: 'services-page'
      }
    ];
    
    this.stats.externalLinks += externalLinks.length;
    return externalLinks;
  }

  async generateContentBridges() {
    this.log('Generating content bridges...');
    
    // Create content that bridges different sections
    const bridges = [
      {
        type: 'bridge',
        from: '/blog',
        to: '/services',
        content: 'Discover how our services can help implement the insights from our latest blog posts.',
        context: 'blog-to-services'
      },
      {
        type: 'bridge',
        from: '/explore',
        to: '/contact',
        content: 'Ready to explore more? Get in touch with our team to learn about custom solutions.',
        context: 'explore-to-contact'
      }
    ];
    
    this.stats.contentBridges += bridges.length;
    return bridges;
  }

  scanPages() {
    const pagesDir = path.join(this.rootDir, 'pages');
    const pages = [];
    
    function scanDir(dir, prefix = '') {
      if (!fs.existsSync(dir)) return;
      
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isDirectory() && !entry.name.startsWith('_')) {
          scanDir(path.join(dir, entry.name), path.join(prefix, entry.name));
        } else if (entry.isFile() && /\.(tsx|jsx|ts|js)$/.test(entry.name)) {
          const route = entry.name === 'index.tsx' ? prefix : path.join(prefix, entry.name.replace(/\.(tsx|jsx|ts|js)$/, ''));
          if (route) pages.push('/' + route.replace(/\\/g, '/'));
        }
      }
    }
    
    scanDir(pagesDir);
    return pages;
  }

  findRelatedPages(page, allPages) {
    // Simple related page logic - can be enhanced
    const related = [];
    const pageWords = page.split('/').filter(Boolean);
    
    for (const otherPage of allPages) {
      if (otherPage === page) continue;
      
      const otherWords = otherPage.split('/').filter(Boolean);
      const commonWords = pageWords.filter(word => otherWords.includes(word));
      
      if (commonWords.length > 0) {
        related.push(otherPage);
      }
    }
    
    return related.slice(0, 3); // Limit to 3 related pages
  }

  async injectLinksIntoPages(links) {
    this.log('Injecting links into pages...');
    
    let injectedCount = 0;
    
    for (const link of links) {
      if (link.type === 'internal' || link.type === 'external') {
        const success = await this.injectLinkIntoPage(link);
        if (success) injectedCount++;
      }
    }
    
    return injectedCount;
  }

  async injectLinkIntoPage(link) {
    try {
      // Find the target page file
      const pagePath = this.findPageFile(link.from);
      if (!pagePath) return false;
      
      // Read current content
      let content = fs.readFileSync(pagePath, 'utf8');
      
      // Check if link already exists
      if (content.includes(`href="${link.to}"`) || content.includes(`href='${link.to}'`)) {
        return false; // Already exists
      }
      
      // Inject link in appropriate location
      const linkHtml = this.generateLinkHTML(link);
      content = this.injectLinkAtLocation(content, linkHtml);
      
      // Write back to file
      fs.writeFileSync(pagePath, content);
      return true;
      
    } catch (error) {
      this.log(`Error injecting link: ${error.message}`, 'ERROR');
      return false;
    }
  }

  findPageFile(route) {
    if (route === '/') {
      return path.join(this.rootDir, 'pages', 'index.tsx');
    }
    
    const routePath = route.replace(/^\//, '').replace(/\//g, path.sep);
    const possibleFiles = [
      path.join(this.rootDir, 'pages', routePath, 'index.tsx'),
      path.join(this.rootDir, 'pages', routePath, 'index.jsx'),
      path.join(this.rootDir, 'pages', routePath + '.tsx'),
      path.join(this.rootDir, 'pages', routePath + '.jsx')
    ];
    
    for (const file of possibleFiles) {
      if (fs.existsSync(file)) return file;
    }
    
    return null;
  }

  generateLinkHTML(link) {
    if (link.type === 'external') {
      return `<a href="${link.to}" target="_blank" rel="noopener noreferrer" className="external-link">${this.generateLinkText(link)}</a>`;
    } else {
      return `<Link href="${link.to}" className="internal-link">${this.generateLinkText(link)}</Link>`;
    }
  }

  generateLinkText(link) {
    const context = link.context || 'learn-more';
    const textMap = {
      'related-content': 'Related Content',
      'source-code': 'View Source',
      'company-profile': 'Company Profile',
      'services-page': 'Our Services',
      'learn-more': 'Learn More',
      'blog-to-services': 'Explore Our Services',
      'explore-to-contact': 'Get In Touch'
    };
    
    return textMap[context] || 'Learn More';
  }

  injectLinkAtLocation(content, linkHtml) {
    // Try to inject in navigation or content areas
    const injectionPoints = [
      /<nav[^>]*>/i,
      /<div[^>]*className="[^"]*nav[^"]*"[^>]*>/i,
      /<footer[^>]*>/i,
      /<div[^>]*className="[^"]*footer[^"]*"[^>]*>/i
    ];
    
    for (const pattern of injectionPoints) {
      if (pattern.test(content)) {
        return content.replace(pattern, (match) => `${match}\n        ${linkHtml}`);
      }
    }
    
    // Fallback: inject before closing body tag
    if (content.includes('</body>')) {
      return content.replace('</body>', `    ${linkHtml}\n  </body>`);
    }
    
    // Last resort: inject at end of file
    return content + `\n${linkHtml}\n`;
  }

  async runCycle() {
    this.stats.cycleCount++;
    this.stats.lastRun = new Date().toISOString();
    
    this.log(`Starting cycle ${this.stats.cycleCount}...`);
    
    try {
      // Generate all types of links
      const internalLinks = await this.generateInternalLinks();
      const externalLinks = await this.generateExternalLinks();
      const contentBridges = await this.generateContentBridges();
      
      // Combine all links
      const allLinks = [...internalLinks, ...externalLinks, ...contentBridges];
      
      // Inject links into pages
      const injectedCount = await this.injectLinksIntoPages(allLinks);
      
      // Update stats
      this.stats.totalLinksGenerated += allLinks.length;
      
      // Save report
      await this.saveReport(allLinks, injectedCount);
      
      // Commit changes
      await this.commitChanges();
      
      this.log(`Cycle ${this.stats.cycleCount} completed. Generated ${allLinks.length} links, injected ${injectedCount}`);
      
    } catch (error) {
      this.log(`Error in cycle ${this.stats.cycleCount}: ${error.message}`, 'ERROR');
    }
  }

  async saveReport(links, injectedCount) {
    const report = {
      timestamp: new Date().toISOString(),
      cycle: this.stats.cycleCount,
      links,
      injectedCount,
      stats: this.stats
    };
    
    const reportFile = path.join(this.linksDir, `link-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
  }

  async commitChanges() {
    try {
      // Stage all changes
      spawnSync('git', ['add', '.'], { cwd: this.rootDir, stdio: 'inherit' });
      
      // Commit with descriptive message
      const commitMsg = `feat: auto-generate ${this.stats.totalLinksGenerated} links (cycle ${this.stats.cycleCount})`;
      spawnSync('git', ['commit', '-m', commitMsg], { cwd: this.rootDir, stdio: 'inherit' });
      
      // Push to remote
      spawnSync('git', ['push'], { cwd: this.rootDir, stdio: 'inherit' });
      
      this.log('Changes committed and pushed successfully');
      
    } catch (error) {
      this.log(`Error committing changes: ${error.message}`, 'ERROR');
    }
  }

  start() {
    this.log('Starting Ultra-Fast Link Generator...');
    
    // Run immediately
    this.runCycle();
    
    // Then run every 30 seconds
    setInterval(() => {
      this.runCycle();
    }, 30 * 1000);
    
    this.log('Ultra-Fast Link Generator started successfully');
  }
}

// CLI interface
if (require.main === module) {
  const generator = new UltraFastLinkGenerator();
  
  if (process.argv.includes('--once')) {
    generator.runCycle().then(() => process.exit(0));
  } else {
    generator.start();
  }
}

module.exports = UltraFastLinkGenerator;
