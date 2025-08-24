#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

class IntelligentLinkAutoFixer {
  constructor() {
    this.ROOT = process.cwd();
    this.REPORT_DIR = path.join(this.ROOT, 'data', 'reports', 'link-health');
    this.FIXES_LOG = path.join(this.ROOT, 'data', 'reports', 'link-fixes');
    this.ensureDir(this.FIXES_LOG);
  }

  ensureDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  }

  async loadLatestReport() {
    const latestPath = path.join(this.REPORT_DIR, 'latest.json');
    if (!fs.existsSync(latestPath)) {
      throw new Error('No link health report found. Run the monitor first.');
    }
    
    return JSON.parse(fs.readFileSync(latestPath, 'utf8'));
  }

  generateFixStrategy(brokenLink, suggestion) {
    const strategies = {
      redirect: this.createRedirect.bind(this),
      pageCreation: this.createMissingPage.bind(this),
      linkUpdate: this.updateBrokenLink.bind(this),
      externalFix: this.suggestExternalFix.bind(this)
    };

    // Determine best strategy based on link type and suggestion
    if (brokenLink.url.includes('ziontechgroup.com')) {
      if (suggestion.action === 'create-page') {
        return strategies.pageCreation;
      } else if (suggestion.action === 'redirect') {
        return strategies.redirect;
      } else {
        return strategies.linkUpdate;
      }
    } else {
      return strategies.externalFix;
    }
  }

  async createRedirect(fromPath, toPath) {
    const redirectsFile = path.join(this.ROOT, '_redirects');
    let redirects = '';
    
    if (fs.existsSync(redirectsFile)) {
      redirects = fs.readFileSync(redirectsFile, 'utf8');
    }
    
    const newRedirect = `${fromPath}\t${toPath}\t301\n`;
    
    if (!redirects.includes(newRedirect)) {
      fs.appendFileSync(redirectsFile, newRedirect);
      this.logFix('redirect', fromPath, toPath);
      return true;
    }
    
    return false;
  }

  async createMissingPage(pagePath) {
    const pagesDir = path.join(this.ROOT, 'pages');
    const fullPath = path.join(pagesDir, pagePath.replace(/^\//, ''), 'index.tsx');
    
    if (fs.existsSync(fullPath)) {
      return false; // Page already exists
    }
    
    // Create directory structure
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Create basic page template
    const template = this.generatePageTemplate(pagePath);
    fs.writeFileSync(fullPath, template);
    
    this.logFix('page-creation', pagePath, fullPath);
    return true;
  }

  generatePageTemplate(pagePath) {
    const pageName = pagePath.split('/').pop() || 'index';
    const title = pageName.charAt(0).toUpperCase() + pageName.slice(1);
    
    return `import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

const ${title}Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${title} services and solutions" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">${title}</h1>
        <p className="text-lg text-gray-600">
          This page is automatically generated. Content will be populated by automation systems.
        </p>
      </div>
    </>
  );
};

export default ${title}Page;
`;
  }

  async updateBrokenLink(filePath, oldLink, newLink) {
    if (!fs.existsSync(filePath)) {
      return false;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    
    // Replace various href patterns
    const patterns = [
      `href="${oldLink}"`,
      `href='${oldLink}'`,
      `href={"${oldLink}"}`,
      `href={'${oldLink}'}`,
      `href={\`${oldLink}\`}`,
    ];
    
    for (const pattern of patterns) {
      const replacement = pattern.replace(oldLink, newLink);
      content = content.split(pattern).join(replacement);
    }
    
    if (content !== original) {
      fs.writeFileSync(filePath, content);
      this.logFix('link-update', filePath, `${oldLink} → ${newLink}`);
      return true;
    }
    
    return false;
  }

  async findFilesWithLink(oldLink) {
    const files = [];
    const dirs = ['pages', 'components', 'automation'];
    
    for (const dir of dirs) {
      const fullDir = path.join(this.ROOT, dir);
      if (fs.existsSync(fullDir)) {
        this.walkDirForLink(fullDir, oldLink, files);
      }
    }
    
    return files;
  }

  walkDirForLink(dir, targetLink, files) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
        this.walkDirForLink(full, targetLink, files);
      } else if (entry.isFile()) {
        if (/\.(tsx|ts|js|jsx|mdx|md)$/i.test(entry.name)) {
          try {
            const content = fs.readFileSync(full, 'utf8');
            if (content.includes(targetLink)) {
              files.push(full);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    }
  }

  logFix(type, from, to) {
    const timestamp = new Date().toISOString();
    const logEntry = { timestamp, type, from, to };
    
    const logFile = path.join(this.FIXES_LOG, `fixes-${new Date().toISOString().split('T')[0]}.json`);
    
    let logs = [];
    if (fs.existsSync(logFile)) {
      logs = JSON.parse(fs.readFileSync(logFile, 'utf8'));
    }
    
    logs.push(logEntry);
    fs.writeFileSync(logFile, JSON.stringify(logs, null, 2));
    
    console.log(`🔧 Applied ${type} fix: ${from} → ${to}`);
  }

  async run() {
    try {
      console.log('🔧 Starting Intelligent Link Auto-Fixer...');
      
      const report = await this.loadLatestReport();
      const brokenLinks = report.brokenLinks || [];
      
      if (brokenLinks.length === 0) {
        console.log('✅ No broken links found to fix!');
        return;
      }
      
      console.log(`🚨 Found ${brokenLinks.length} broken links to fix`);
      
      let fixesApplied = 0;
      
      for (const [url, linkData] of brokenLinks) {
        const suggestion = report.suggestions.find(([suggestedUrl]) => suggestedUrl === url);
        
        if (suggestion && suggestion[1]) {
          const suggestionData = suggestion[1];
          
          if (suggestionData.action === 'create-page') {
            const fixed = await this.createMissingPage(suggestionData.suggestion);
            if (fixed) fixesApplied++;
          } else if (suggestionData.action === 'update-link') {
            // Find files containing this link and update them
            const files = await this.findFilesWithLink(url);
            for (const file of files) {
              const fixed = await this.updateBrokenLink(file, url, suggestionData.suggestion);
              if (fixed) fixesApplied++;
            }
          }
        }
      }
      
      console.log(`✅ Auto-fix complete! Applied ${fixesApplied} fixes`);
      
    } catch (error) {
      console.error('❌ Error during auto-fix:', error.message);
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const fixer = new IntelligentLinkAutoFixer();
  fixer.run().catch(console.error);
}

module.exports = IntelligentLinkAutoFixer;