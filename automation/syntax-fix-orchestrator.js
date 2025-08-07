#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const SyntaxErrorMonitor = require('./syntax-error-monitor');

class SyntaxFixOrchestrator {
  constructor() {
    this.isRunning = false;
    this.fixers = {
      doubleSemicolon: { pattern: /;;/g, fix: ';', name: 'double semicolon' },
      missingSemicolon: { pattern: /([^;])\s*$/, fix: '$1;', name: 'missing semicolon' },
      unclosedBrackets: { pattern: /([\(\[\{])\s*$/, fix: '$1)', name: 'unclosed brackets' },
      unclosedQuotes: { pattern: /(["'])([^"']*)$/, fix: '$1$2$1', name: 'unclosed quotes' },
      importErrors: { pattern: /import\s+([^;]+);?\s*$/, fix: 'import $1;', name: 'import errors' }
    };
  }

  async start(options = {}) {
    const { watch = false, interval = 15000, autoFix = true, aggressive = false } = options;
    
    console.log('🎼 Starting Syntax Fix Orchestrator...');
    this.isRunning = true;
    this.watchMode = watch;
    this.autoFix = autoFix;
    this.aggressive = aggressive;

    if (watch) {
      this.startWatching();
    } else {
      this.startIntervalMode(interval);
    }

    // Initial comprehensive fix
    await this.runComprehensiveFix();
  }

  async runComprehensiveFix() {
    console.log('🔧 Running comprehensive syntax fix...');
    
    try {
      const sourceFiles = this.getSourceFiles();
      let totalFixes = 0;

      for (const file of sourceFiles) {
        const fixes = await this.fixFile(file);
        totalFixes += fixes;
      }

      console.log(`✅ Comprehensive fix completed. Fixed ${totalFixes} issues.`);
      
      // Run additional checks
      await this.runAdditionalChecks();
      
    } catch (error) {
      console.error('Error during comprehensive fix:', error.message);
    }
  }

  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let newContent = content;
      let fixes = 0;

      // Apply all fixers
      for (const [name, fixer] of Object.entries(this.fixers)) {
        const matches = newContent.match(fixer.pattern);
        if (matches) {
          newContent = newContent.replace(fixer.pattern, fixer.fix);
          fixes += matches.length;
        }
      }

      // Additional specific fixes
      newContent = this.fixSpecificPatterns(newContent);

      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent);
        console.log(`✅ Fixed ${fixes} issues in ${filePath}`);
      }

      return fixes;
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message);
      return 0;
    }
  }

  fixSpecificPatterns(content) {
    // Fix common patterns
    let fixed = content;

    // Fix double semicolons
    fixed = fixed.replace(/;;/g, ';');

    // Fix missing semicolons at end of lines
    fixed = fixed.replace(/([^;])\s*$/gm, '$1;');

    // Fix unclosed parentheses
    fixed = fixed.replace(/\(\s*$/gm, '()');

    // Fix unclosed brackets
    fixed = fixed.replace(/\[\s*$/gm, '[]');

    // Fix unclosed braces
    fixed = fixed.replace(/\{\s*$/gm, '{}');

    // Fix unclosed quotes
    fixed = fixed.replace(/("')([^"']*)$/gm, '$1$2$1');

    // Fix import statements
    fixed = fixed.replace(/import\s+([^;]+);?\s*$/gm, 'import $1;');

    return fixed;
  }

  async runAdditionalChecks() {
    console.log('🔍 Running additional checks...');
    
    // Check for common patterns that might cause issues
    const patterns = [
      { pattern: /;;/g, name: 'double semicolons' },
      { pattern: /\(\s*\)/g, name: 'empty parentheses' },
      { pattern: /\[\s*\]/g, name: 'empty brackets' },
      { pattern: /\{\s*\}/g, name: 'empty braces' }
    ];

    const sourceFiles = this.getSourceFiles();
    let totalIssues = 0;

    for (const file of sourceFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        for (const pattern of patterns) {
          const matches = content.match(pattern.pattern);
          if (matches) {
            console.log(`⚠️ Found ${matches.length} ${pattern.name} in ${file}`);
            totalIssues += matches.length;
          }
        }
      } catch (error) {
        console.error(`Error checking ${file}:`, error.message);
      }
    }

    if (totalIssues > 0) {
      console.log(`⚠️ Found ${totalIssues} potential issues to review`);
    } else {
      console.log('✅ No additional issues found');
    }
  }

  async fixPatternInFiles(pattern, replacement, description) {
    console.log(`🔧 Fixing ${description}...`);
    
    const sourceFiles = this.getSourceFiles();
    let totalFixes = 0;

    for (const file of sourceFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const newContent = content.replace(pattern, replacement);
        
        if (newContent !== content) {
          fs.writeFileSync(file, newContent);
          const matches = content.match(pattern);
          totalFixes += matches ? matches.length : 0;
        }
      } catch (error) {
        console.error(`Error fixing ${file}:`, error.message);
      }
    }

    console.log(`✅ Fixed ${totalFixes} ${description}`);
    return totalFixes;
  }

  getSourceFiles() {
    const sourceDirs = ['pages', 'components', 'utils', 'hooks', 'styles'];
    const extensions = ['.js', '.jsx', '.ts', '.tsx'];
    const files = [];

    for (const dir of sourceDirs) {
      if (fs.existsSync(dir)) {
        this.getFilesRecursively(dir, extensions, files);
      }
    }

    return files;
  }

  getFilesRecursively(dir, extensions, files) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.getFilesRecursively(fullPath, extensions, files);
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }

  startWatching() {
    console.log('👀 Starting file watcher...');
    
    // For now, use interval-based checking
    this.startIntervalMode(5000);
  }

  startIntervalMode(interval) {
    console.log(`⏰ Starting interval mode every ${interval}ms...`);
    
    setInterval(async () => {
      if (this.isRunning) {
        await this.runComprehensiveFix();
      }
    }, interval);
  }

  stop() {
    console.log('🛑 Stopping Syntax Fix Orchestrator...');
    this.isRunning = false;
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      watchMode: this.watchMode,
      autoFix: this.autoFix,
      aggressive: this.aggressive
    };
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new SyntaxFixOrchestrator();
  
  const args = process.argv.slice(2);
  const options = {
    watch: args.includes('--watch') || args.includes('-w'),
    interval: parseInt(args.find(arg => arg.startsWith('--interval='))?.split('=')[1]) || 15000,
    autoFix: !args.includes('--no-fix'),
    aggressive: args.includes('--aggressive')
  };

  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n🛑 Received SIGINT, shutting down...');
    orchestrator.stop();
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    console.log('\n🛑 Received SIGTERM, shutting down...');
    orchestrator.stop();
    process.exit(0);
  });

  orchestrator.start(options);
}

module.exports = SyntaxFixOrchestrator;