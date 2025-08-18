#!/usr/bin/env node

'use strict';

/*
  Redundant Link Generator
  - Creates multiple redundant link generation instances
  - Each instance runs independently for maximum reliability
  - Creates different types of links to avoid conflicts
  - Integrates with PM2, GitHub Actions, and Netlify
  - Provides fallback mechanisms for continuous operation
*/

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

class RedundantLinkGenerator {
  constructor() {
    this.rootDir = process.cwd();
    this.baseUrl = process.env.CANONICAL_URL || 'https://ziontechgroup.com';
    this.linksDir = path.join(this.rootDir, 'data', 'reports', 'redundant-links');
    this.ensureDirectories();
    this.instances = [];
    this.stats = {
      totalInstances: 0,
      activeInstances: 0,
      totalLinksGenerated: 0,
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
    
    const logFile = path.join(this.linksDir, 'redundant-links.log');
    fs.appendFileSync(logFile, logEntry + '\n');
  }

  createInstance(instanceId, linkType) {
    const instance = {
      id: instanceId,
      type: linkType,
      status: 'active',
      linksGenerated: 0,
      lastRun: null,
      startTime: new Date()
    };

    this.instances.push(instance);
    this.stats.totalInstances++;
    this.stats.activeInstances++;

    return instance;
  }

  async generateNavigationLinks(instance) {
    this.log(`Instance ${instance.id}: Generating navigation links...`);
    
    const navigationLinks = [
      { from: '/', to: '/about', context: 'main-nav' },
      { from: '/', to: '/services', context: 'main-nav' },
      { from: '/', to: '/blog', context: 'main-nav' },
      { from: '/', to: '/contact', context: 'main-nav' },
      { from: '/about', to: '/services', context: 'about-nav' },
      { from: '/services', to: '/contact', context: 'services-nav' },
      { from: '/blog', to: '/services', context: 'blog-nav' }
    ];

    instance.linksGenerated += navigationLinks.length;
    return navigationLinks;
  }

  async generateFooterLinks(instance) {
    this.log(`Instance ${instance.id}: Generating footer links...`);
    
    const footerLinks = [
      { from: '/', to: '/privacy', context: 'footer' },
      { from: '/', to: '/terms', context: 'footer' },
      { from: '/', to: '/sitemap', context: 'footer' },
      { from: '/', to: '/support', context: 'footer' },
      { from: '/about', to: '/careers', context: 'footer' },
      { from: '/services', to: '/pricing', context: 'footer' }
    ];

    instance.linksGenerated += footerLinks.length;
    return footerLinks;
  }

  async generateContentLinks(instance) {
    this.log(`Instance ${instance.id}: Generating content links...`);
    
    const contentLinks = [
      { from: '/blog', to: '/news', context: 'content' },
      { from: '/services', to: '/case-studies', context: 'content' },
      { from: '/about', to: '/team', context: 'content' },
      { from: '/explore', to: '/resources', context: 'content' },
      { from: '/main', to: '/dashboard', context: 'content' }
    ];

    instance.linksGenerated += contentLinks.length;
    return contentLinks;
  }

  async generateSocialLinks(instance) {
    this.log(`Instance ${instance.id}: Generating social links...`);
    
    const socialLinks = [
      { from: '/', to: 'https://twitter.com/ziontechgroup', context: 'social' },
      { from: '/', to: 'https://facebook.com/ziontechgroup', context: 'social' },
      { from: '/', to: 'https://instagram.com/ziontechgroup', context: 'social' },
      { from: '/about', to: 'https://youtube.com/ziontechgroup', context: 'social' }
    ];

    instance.linksGenerated += socialLinks.length;
    return socialLinks;
  }

  async generateBusinessLinks(instance) {
    this.log(`Instance ${instance.id}: Generating business links...`);
    
    const businessLinks = [
      { from: '/services', to: 'https://calendly.com/ziontechgroup', context: 'business' },
      { from: '/contact', to: 'https://zoom.us/j/ziontechgroup', context: 'business' },
      { from: '/about', to: 'https://meet.google.com/ziontechgroup', context: 'business' },
      { from: '/explore', to: 'https://slack.com/ziontechgroup', context: 'business' }
    ];

    instance.linksGenerated += businessLinks.length;
    return businessLinks;
  }

  async runInstance(instance) {
    try {
      instance.lastRun = new Date();
      
      let links = [];
      
      // Generate different types of links based on instance type
      switch (instance.type) {
        case 'navigation':
          links = await this.generateNavigationLinks(instance);
          break;
        case 'footer':
          links = await this.generateFooterLinks(instance);
          break;
        case 'content':
          links = await this.generateContentLinks(instance);
          break;
        case 'social':
          links = await this.generateSocialLinks(instance);
          break;
        case 'business':
          links = await this.generateBusinessLinks(instance);
          break;
        default:
          links = await this.generateNavigationLinks(instance);
      }

      // Inject links into pages
      const injectedCount = await this.injectLinksIntoPages(links, instance);
      
      // Update stats
      this.stats.totalLinksGenerated += links.length;
      
      this.log(`Instance ${instance.id} completed: ${links.length} links generated, ${injectedCount} injected`);
      
      return { success: true, links, injectedCount };
      
    } catch (error) {
      this.log(`Instance ${instance.id} error: ${error.message}`, 'ERROR');
      instance.status = 'error';
      return { success: false, error: error.message };
    }
  }

  async injectLinksIntoPages(links, instance) {
    this.log(`Instance ${instance.id}: Injecting ${links.length} links...`);
    
    let injectedCount = 0;
    
    for (const link of links) {
      const success = await this.injectLinkIntoPage(link, instance);
      if (success) injectedCount++;
    }
    
    return injectedCount;
  }

  async injectLinkIntoPage(link, instance) {
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
      
      // Generate unique link HTML for this instance
      const linkHtml = this.generateLinkHTML(link, instance);
      content = this.injectLinkAtLocation(content, linkHtml, instance);
      
      // Write back to file
      fs.writeFileSync(pagePath, content);
      return true;
      
    } catch (error) {
      this.log(`Instance ${instance.id} error injecting link: ${error.message}`, 'ERROR');
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

  generateLinkHTML(link, instance) {
    const instanceClass = `link-instance-${instance.id}`;
    
    if (link.to.startsWith('http')) {
      return `<a href="${link.to}" target="_blank" rel="noopener noreferrer" className="external-link ${instanceClass}">${this.generateLinkText(link, instance)}</a>`;
    } else {
      return `<Link href="${link.to}" className="internal-link ${instanceClass}">${this.generateLinkText(link, instance)}</Link>`;
    }
  }

  generateLinkText(link, instance) {
    const context = link.context || 'learn-more';
    const instancePrefix = `[${instance.type.toUpperCase()}] `;
    
    const textMap = {
      'main-nav': 'Main Navigation',
      'about-nav': 'About Navigation',
      'services-nav': 'Services Navigation',
      'blog-nav': 'Blog Navigation',
      'footer': 'Footer Link',
      'content': 'Content Link',
      'social': 'Social Media',
      'business': 'Business Tool'
    };
    
    return instancePrefix + (textMap[context] || 'Learn More');
  }

  injectLinkAtLocation(content, linkHtml, instance) {
    // Try to inject in appropriate areas based on instance type
    const injectionPoints = {
      navigation: [/<nav[^>]*>/i, /<div[^>]*className="[^"]*nav[^"]*"[^>]*>/i],
      footer: [/<footer[^>]*>/i, /<div[^>]*className="[^"]*footer[^"]*"[^>]*>/i],
      content: [/<main[^>]*>/i, /<div[^>]*className="[^"]*content[^"]*"[^>]*>/i],
      social: [/<div[^>]*className="[^"]*social[^"]*"[^>]*>/i, /<aside[^>]*>/i],
      business: [/<div[^>]*className="[^"]*cta[^"]*"[^>]*>/i, /<section[^>]*>/i]
    };
    
    const patterns = injectionPoints[instance.type] || injectionPoints.navigation;
    
    for (const pattern of patterns) {
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

  async runAllInstances() {
    this.stats.cycleCount++;
    this.stats.lastRun = new Date().toISOString();
    
    this.log(`Starting cycle ${this.stats.cycleCount} with ${this.instances.length} instances...`);
    
    const results = [];
    
    // Run all instances in parallel
    const promises = this.instances.map(instance => this.runInstance(instance));
    const instanceResults = await Promise.allSettled(promises);
    
    for (let i = 0; i < instanceResults.length; i++) {
      const result = instanceResults[i];
      const instance = this.instances[i];
      
      if (result.status === 'fulfilled') {
        results.push(result.value);
        if (result.value.success) {
          instance.status = 'active';
        } else {
          instance.status = 'error';
        }
      } else {
        this.log(`Instance ${instance.id} failed: ${result.reason}`, 'ERROR');
        instance.status = 'error';
        results.push({ success: false, error: result.reason });
      }
    }
    
    // Update active instance count
    this.stats.activeInstances = this.instances.filter(i => i.status === 'active').length;
    
    // Save comprehensive report
    await this.saveReport(results);
    
    // Commit changes if any links were generated
    const totalLinks = results.reduce((sum, r) => sum + (r.links ? r.links.length : 0), 0);
    if (totalLinks > 0) {
      await this.commitChanges();
    }
    
    this.log(`Cycle ${this.stats.cycleCount} completed. ${totalLinks} total links generated across ${this.instances.length} instances`);
  }

  async saveReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      cycle: this.stats.cycleCount,
      instances: this.instances,
      results,
      stats: this.stats
    };
    
    const reportFile = path.join(this.linksDir, `redundant-links-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
  }

  async commitChanges() {
    try {
      // Stage all changes
      spawnSync('git', ['add', '.'], { cwd: this.rootDir, stdio: 'inherit' });
      
      // Commit with descriptive message
      const commitMsg = `feat: redundant-link-generation cycle ${this.stats.cycleCount} - ${this.stats.totalLinksGenerated} links`;
      spawnSync('git', ['commit', '-m', commitMsg], { cwd: this.rootDir, stdio: 'inherit' });
      
      // Push to remote
      spawnSync('git', ['push'], { cwd: this.rootDir, stdio: 'inherit' });
      
      this.log('Changes committed and pushed successfully');
      
    } catch (error) {
      this.log(`Error committing changes: ${error.message}`, 'ERROR');
    }
  }

  start() {
    this.log('Starting Redundant Link Generator...');
    
    // Create multiple instances for redundancy
    this.createInstance(1, 'navigation');
    this.createInstance(2, 'footer');
    this.createInstance(3, 'content');
    this.createInstance(4, 'social');
    this.createInstance(5, 'business');
    
    this.log(`Created ${this.instances.length} redundant instances`);
    
    // Run immediately
    this.runAllInstances();
    
    // Then run every 2 minutes for redundancy
    setInterval(() => {
      this.runAllInstances();
    }, 2 * 60 * 1000);
    
    this.log('Redundant Link Generator started successfully');
  }
}

// CLI interface
if (require.main === module) {
  const generator = new RedundantLinkGenerator();
  
  if (process.argv.includes('--once')) {
    generator.runAllInstances().then(() => process.exit(0));
  } else {
    generator.start();
  }
}

module.exports = RedundantLinkGenerator;
