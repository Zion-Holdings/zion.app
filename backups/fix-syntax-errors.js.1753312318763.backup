#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

class SyntaxErrorFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
  }

  async fixAllFiles() {
    console.log('🔧 Fixing syntax errors in automation files...');
    
    const filesToFix = [
      test-all-automations.js',
      core/IntelligentAutomationOrchestrator.js',
      core/AutonomousAutomationManager.js',
      core/TaskScheduler.js',
      core/NotificationManager.js',
      core/AnomalyDetector.js',
      core/ReportGenerator.js',
      netlify-monitor.js',
      netlify-error-fixer.js',
      netlify-build-automation.js',
      performance/monitor.js',
      performance/frontend-fix.js',
      continuous-improvement/enhanced-automation.js',
      continuous-improvement/monitor.js',
      continuous-improvement/improve.js',
      tasks/DependencyUpdater.js
    ];

    for (const file of filesToFix) {
      try {
        await this.fixFile(file);
      } catch (error) {
        this.errors.push({ file, error: error.message });
      }
    }

    this.printReport();
  }

  async fixFile(filePath) {
    try {
      const content = await fs.readFile(filePath, utf8');
      let fixedContent = content;

      // Fix common syntax errors
      fixedContent = this.fixTrailingQuotes(fixedContent);
      fixedContent = this.fixUnclosedStrings(fixedContent);
      fixedContent = this.fixMissingQuotes(fixedContent);
      fixedContent = this.fixExtraSemicolons(fixedContent);

      if (fixedContent !== content) {
        await fs.writeFile(filePath, fixedContent, utf8');
        this.fixedFiles.push(filePath);
        console.log(`✅ Fixed: ${filePath}`);
      } else {
        console.log(`✅ No issues: ${filePath}`);
      }
    } catch (error) {
      throw new Error(`Failed to fix ${filePath}: ${error.message}`);
    }
  }

  fixTrailingQuotes(content) {
    // Remove trailing single quotes (any number of them)
    return content.replace(/;+$/gm, ;)
                  .replace(/'+$/gm, )
                  .replace(/;+$/gm, ;);
  }

  fixUnclosedStrings(content) {
    // Fix common unclosed string patterns
    return content.replace(/= ([a-zA-Z_][a-zA-Z0-9_]*);/g, "= $1';")
                  .replace(/= ([a-zA-Z_][a-zA-Z0-9_]*)/g, "= $1';");
  }

  fixMissingQuotes(content) {
    // Fix missing quotes around string values
    return content.replace(/= ([a-zA-Z_][a-zA-Z0-9_]*);/g, "= $1';")
                  .replace(/status: ([a-zA-Z_][a-zA-Z0-9_]*)/g, "status: $1'")
                  .replace(/level: ([a-zA-Z_][a-zA-Z0-9_]*)/g, "level: $1'");
  }

  fixExtraSemicolons(content) {
    // Remove extra semicolons followed by quotes
    return content.replace(/;+'+$/gm, ;);
  }

  printReport() {
    console.log('\n📊 Syntax Fix Report');
    console.log('='.repeat(50));
    console.log(`Files fixed: ${this.fixedFiles.length}`);
    console.log(`Errors: ${this.errors.length}`);
    
    if (this.fixedFiles.length > 0) {
      console.log('\n✅ Fixed files:');
      this.fixedFiles.forEach(file => console.log(`  - ${file}`));
    }
    
    if (this.errors.length > 0) {
      console.log('\n❌ Errors:');
      this.errors.forEach(({ file, error }) => console.log(`  - ${file}: ${error}`));
    }
  }
}

// Run the fixer
if (require.main === module) {
  const fixer = new SyntaxErrorFixer();
  fixer.fixAllFiles().catch(error => {
    console.error('Fixer failed:', error);
    process.exit(1);
  });
}

module.exports = SyntaxErrorFixer; 