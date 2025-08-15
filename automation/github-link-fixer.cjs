#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

class GitHubLinkFixer {
  constructor() {
    this.ROOT = process.cwd();
    this.REPORT_DIR = path.join(this.ROOT, 'data', 'reports', 'github-links');
    this.ensureDir(this.REPORT_DIR);
    
    this.githubPatterns = [
      /https:\/\/github\.com\/[^\/]+\/[^\/]+\/actions/g,
      /https:\/\/github\.com\/[^\/]+\/[^\/]+\/tree\/main\/docs/g,
      /https:\/\/github\.com\/[^\/]+\/[^\/]+\/issues/g,
      /https:\/\/github\.com\/[^\/]+\/[^\/]+\/blob\/main\/docs\//g
    ];
    
    this.fixes = [];
  }

  ensureDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  }

  async fixGitHubLinks() {
    console.log('🔧 Starting GitHub Link Auto-Fix...');
    
    const files = this.findFilesWithGitHubLinks();
    let totalFixed = 0;
    
    console.log(`📁 Found ${files.length} files with GitHub links to check`);
    
    for (const file of files) {
      const fixed = await this.fixFile(file);
      if (fixed) totalFixed++;
    }
    
    // Generate report
    this.generateReport();
    
    console.log(`✅ Fixed GitHub links in ${totalFixed} files`);
    return totalFixed;
  }

  findFilesWithGitHubLinks() {
    const files = [];
    const dirs = ['pages', 'components', 'automation'];
    
    for (const dir of dirs) {
      const fullDir = path.join(this.ROOT, dir);
      if (fs.existsSync(fullDir)) {
        this.walkDir(fullDir, files);
      }
    }
    
    return files.filter(file => {
      const content = fs.readFileSync(file, 'utf8');
      return this.githubPatterns.some(pattern => pattern.test(content));
    });
  }

  walkDir(dir, files) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
        this.walkDir(full, files);
      } else if (entry.isFile()) {
        if (/\.(tsx|ts|js|jsx|mdx|md)$/i.test(entry.name)) {
          files.push(full);
        }
      }
    }
  }

  async fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    let fixed = false;
    
    // Fix GitHub Actions links
    content = content.replace(
      /https:\/\/github\.com\/[^\/]+\/[^\/]+\/actions/g,
      'https://github.com/Zion-Holdings/zion/actions'
    );
    
    // Fix GitHub docs links
    content = content.replace(
      /https:\/\/github\.com\/[^\/]+\/[^\/]+\/tree\/main\/docs/g,
      'https://github.com/Zion-Holdings/zion/tree/main/docs'
    );
    
    // Fix GitHub issues links
    content = content.replace(
      /https:\/\/github\.com\/[^\/]+\/[^\/]+\/issues/g,
      'https://github.com/Zion-Holdings/zion/issues'
    );
    
    // Fix GitHub blob links
    content = content.replace(
      /https:\/\/github\.com\/[^\/]+\/[^\/]+\/blob\/main\/docs\//g,
      'https://github.com/Zion-Holdings/zion/blob/main/docs/'
    );
    
    // Fix specific zion.app references to zion
    content = content.replace(
      /https:\/\/github\.com\/Zion-Holdings\/zion\.app/g,
      'https://github.com/Zion-Holdings/zion'
    );
    
    if (content !== original) {
      fs.writeFileSync(filePath, content);
      fixed = true;
      
      const relativePath = path.relative(this.ROOT, filePath);
      console.log(`🔧 Fixed GitHub links in ${relativePath}`);
      
      // Record the fix
      this.fixes.push({
        file: relativePath,
        timestamp: new Date().toISOString(),
        changes: this.detectChanges(original, content)
      });
    }
    
    return fixed;
  }

  detectChanges(original, updated) {
    const changes = [];
    
    // Check for specific pattern changes
    const patterns = [
      {
        name: 'GitHub Actions',
        old: /https:\/\/github\.com\/[^\/]+\/[^\/]+\/actions/g,
        new: 'https://github.com/Zion-Holdings/zion/actions'
      },
      {
        name: 'GitHub Docs',
        old: /https:\/\/github\.com\/[^\/]+\/[^\/]+\/tree\/main\/docs/g,
        new: 'https://github.com/Zion-Holdings/zion/tree/main/docs'
      },
      {
        name: 'GitHub Issues',
        old: /https:\/\/github\.com\/[^\/]+\/[^\/]+\/issues/g,
        new: 'https://github.com/Zion-Holdings/zion/issues'
      },
      {
        name: 'GitHub Blob Docs',
        old: /https:\/\/github\.com\/[^\/]+\/[^\/]+\/blob\/main\/docs\//g,
        new: 'https://github.com/Zion-Holdings/zion/blob/main/docs/'
      },
      {
        name: 'Repository Name',
        old: /https:\/\/github\.com\/Zion-Holdings\/zion\.app/g,
        new: 'https://github.com/Zion-Holdings/zion'
      }
    ];
    
    for (const pattern of patterns) {
      const oldMatches = original.match(pattern.old);
      if (oldMatches) {
        changes.push({
          type: pattern.name,
          old: oldMatches[0],
          new: pattern.new
        });
      }
    }
    
    return changes;
  }

  generateReport() {
    const timestamp = new Date().toISOString();
    const report = {
      generatedAt: timestamp,
      summary: {
        totalFilesProcessed: this.fixes.length,
        totalChanges: this.fixes.reduce((sum, fix) => sum + fix.changes.length, 0)
      },
      fixes: this.fixes,
      patterns: {
        'GitHub Actions': 'https://github.com/Zion-Holdings/zion/actions',
        'GitHub Docs': 'https://github.com/Zion-Holdings/zion/tree/main/docs',
        'GitHub Issues': 'https://github.com/Zion-Holdings/zion/issues',
        'GitHub Blob Docs': 'https://github.com/Zion-Holdings/zion/blob/main/docs/',
        'Repository Name': 'https://github.com/Zion-Holdings/zion'
      }
    };

    const filename = `github-links-fix-${timestamp.replace(/[:.]/g, '-')}.json`;
    const filepath = path.join(this.REPORT_DIR, filename);
    
    fs.writeFileSync(filepath, JSON.stringify(report, null, 2));
    fs.writeFileSync(path.join(this.REPORT_DIR, 'latest.json'), JSON.stringify(report, null, 2));
    
    console.log(`📄 GitHub link fix report saved to: ${filepath}`);
    
    return { filepath, report };
  }

  async run() {
    try {
      await this.fixGitHubLinks();
    } catch (error) {
      console.error('❌ Error during GitHub link fixing:', error.message);
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const fixer = new GitHubLinkFixer();
  fixer.run().catch(console.error);
}

module.exports = GitHubLinkFixer;