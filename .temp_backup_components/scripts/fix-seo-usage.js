#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SEOUsageFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.pagesDir = path.join(this.projectRoot, 'pages');
    this.componentsDir = path.join(this.projectRoot, 'components');
    this.fixedFiles = [];
    this.errors = [];
  }

  async run() {
    console.log('🔧 Starting SEO component usage fixes...\n');

    try {
      // Fix pages directory
      await this.fixDirectory(this.pagesDir);
      
      // Fix components directory
      await this.fixDirectory(this.componentsDir);
      
      // Generate report
      this.generateReport();
      
      console.log('✅ SEO component usage fixes completed successfully!');
    } catch (error) {
      console.error('❌ SEO component usage fixes failed:', error.message);
      process.exit(1);
    }
  }

  async fixDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) return;

    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        await this.fixDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
        await this.fixFile(fullPath);
      }
    }
  }

  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      let newContent = content;

      // Fix canonical prop usage
      if (content.includes('canonical=')) {
        newContent = content.replace(/canonical=/g, 'url=');
        modified = true;
      }

      // Fix SEO component usage patterns
      const seoPatterns = [
        // Fix common SEO usage patterns
        { 
          from: /<SEO\s+([^>]*?)canonical=([^>]*?)>/g, 
          to: (match, before, after) => `<SEO ${before}url=${after}>` 
        },
        // Fix multi-line SEO usage
        { 
          from: /canonical\s*=\s*["']([^"']+)["']/g, 
          to: 'url="$1"' 
        }
      ];

      seoPatterns.forEach(pattern => {
        if (pattern.from.test(newContent)) {
          newContent = newContent.replace(pattern.from, pattern.to);
          modified = true;
        }
      });

      if (modified) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        this.fixedFiles.push({
          file: path.relative(this.projectRoot, filePath),
          changes: ['canonical -> url']
        });
        console.log(`   ✅ Fixed: ${path.relative(this.projectRoot, filePath)}`);
      }
    } catch (error) {
      this.errors.push({
        file: path.relative(this.projectRoot, filePath),
        error: error.message
      });
      console.log(`   ❌ Error fixing: ${path.relative(this.projectRoot, filePath)}`);
    }
  }

  generateReport() {
    console.log('\n📊 Fix Report:');
    console.log(`   Files fixed: ${this.fixedFiles.length}`);
    console.log(`   Errors: ${this.errors.length}`);
    
    if (this.fixedFiles.length > 0) {
      console.log('\n   Fixed files:');
      this.fixedFiles.forEach(file => {
        console.log(`     - ${file.file}: ${file.changes.join(', ')}`);
      });
    }
    
    if (this.errors.length > 0) {
      console.log('\n   Errors:');
      this.errors.forEach(error => {
        console.log(`     - ${error.file}: ${error.error}`);
      });
    }

    // Save report to file
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFiles: this.fixedFiles.length + this.errors.length,
        fixedFiles: this.fixedFiles.length,
        errors: this.errors.length
      },
      fixedFiles: this.fixedFiles,
      errors: this.errors
    };

    const reportPath = path.join(this.projectRoot, 'seo-fix-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\n📄 Detailed report saved to: ${reportPath}`);
  }
}

// Run the fixer if this script is executed directly
if (require.main === module) {
  const fixer = new SEOUsageFixer();
  fixer.run().catch(console.error);
}

module.exports = SEOUsageFixer;