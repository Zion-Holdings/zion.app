#!/usr/bin/env node

/**
 * Zion App - Automated App Improver
 * 
 * This script automatically fixes syntax errors, optimizes code,
 * and improves the overall app quality using AI assistance.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const chalk = require('chalk');

class AutomatedAppImprover {
  constructor() {
    this.fixesApplied = 0;
    this.errorsFixed = 0;
    this.optimizationsApplied = 0;
    this.startTime = Date.now();
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const colors = {
      info: chalk.blue,
      success: chalk.green,
      warning: chalk.yellow,
      error: chalk.red
    };
    console.log(`${colors[type](`[${type.toUpperCase()}]`)} ${timestamp} - ${message}`);
  }

  async run() {
    this.log('🚀 Starting Automated App Improvement Process', 'info');
    
    try {
      // Step 1: Fix critical syntax errors
      await this.fixSyntaxErrors();
      
      // Step 2: Optimize imports and dependencies
      await this.optimizeImports();
      
      // Step 3: Improve code quality
      await this.improveCodeQuality();
      
      // Step 4: Run tests and validation
      await this.runValidation();
      
      // Step 5: Generate improvement report
      await this.generateReport();
      
    } catch (error) {
      this.log(`Error during improvement process: ${error.message}`, 'error');
      process.exit(1);
    }
  }

  async fixSyntaxErrors() {
    this.log('🔧 Fixing syntax errors...', 'info');
    
    const patterns = [
      // Fix unterminated string literals
      {
        pattern: /import\s+.*from\s+['"]([^'"]*)\s*$/gm,
        replacement: (match, importPath) => `import ${match.split('from')[0].split('import')[1]} from '${importPath.trim()}';`
      },
      // Fix extra quotes in object properties
      {
        pattern: /(\w+):\s*"([^"]*)"\s*,/g,
        replacement: '$1: $2,'
      },
      // Fix double const declarations
      {
        pattern: /const\s+const\s+/g,
        replacement: 'const '
      },
      // Fix malformed function declarations
      {
        pattern: /export\s+default\s+function\s+(\w+)\s*\([^)]*\):\s*unknown\s*\{[^}]*\}\s*\{[^}]*\}/g,
        replacement: 'export default function $1() {'
      },
      // Fix extra semicolons
      {
        pattern: /;\s*;+/g,
        replacement: ';
      },
      // Fix malformed JSX
      {
        pattern: /<(\w+);\s*>/g,
        replacement: '<$1>'
      }
    ];

    const filesToFix = this.getFilesWithErrors();
    
    for (const file of filesToFix) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;
        
        for (const { pattern, replacement } of patterns) {
          content = content.replace(pattern, replacement);
        }
        
        if (content !== originalContent) {
          fs.writeFileSync(file, content);
          this.fixesApplied++;
          this.log(`Fixed syntax errors in ${file}`, 'success');
        }
      } catch (error) {
        this.log(`Error fixing ${file}: ${error.message}`, 'warning');
      }
    }
  }

  async optimizeImports() {
    this.log('📦 Optimizing imports and dependencies...', 'info');
    
    try {
      // Remove unused imports
      execSync('npx unimported --init', { stdio: 'inherit' });
      execSync('npx unimported', { stdio: 'inherit' });
      
      // Sort imports
      execSync('npx sort-package-json', { stdio: 'inherit' });
      
      this.optimizationsApplied++;
      this.log('Imports optimized successfully', 'success');
    } catch (error) {
      this.log(`Import optimization failed: ${error.message}`, 'warning');
    }
  }

  async improveCodeQuality() {
    this.log('✨ Improving code quality...', 'info');
    
    try {
      // Run ESLint with auto-fix
      execSync('npx eslint --fix src/**/*.{ts,tsx,js,jsx}', { stdio: 'inherit' });
      
      // Run Prettier
      execSync('npx prettier --write src/**/*.{ts,tsx,js,jsx}', { stdio: 'inherit' });
      
      // Run TypeScript compiler to check for type errors
      execSync('npx tsc --noEmit', { stdio: 'inherit' });
      
      this.optimizationsApplied++;
      this.log('Code quality improvements applied', 'success');
    } catch (error) {
      this.log(`Code quality improvement failed: ${error.message}`, 'warning');
    }
  }

  async runValidation() {
    this.log('✅ Running validation tests...', 'info');
    
    try {
      // Run unit tests
      execSync('npm test -- --passWithNoTests', { stdio: 'inherit' });
      
      // Run build test
      execSync('npm run build', { stdio: 'inherit' });
      
      this.log('Validation tests passed', 'success');
    } catch (error) {
      this.log(`Validation failed: ${error.message}`, 'error');
      throw error;
    }
  }

  async generateReport() {
    const duration = Date.now() - this.startTime;
    
    this.log('📊 Generating improvement report...', 'info');
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      fixesApplied: this.fixesApplied,
      errorsFixed: this.errorsFixed,
      optimizationsApplied: this.optimizationsApplied,
      summary: {
        syntaxErrorsFixed: this.fixesApplied,
        codeOptimizations: this.optimizationsApplied,
        buildStatus: 'success',
        testStatus: 'passed'
      }
    };
    
    fs.writeFileSync('improvement-report.json', JSON.stringify(report, null, 2));
    
    this.log('🎉 Automated App Improvement Complete!', 'success');
    this.log(`📈 Applied ${this.fixesApplied} fixes and ${this.optimizationsApplied} optimizations`, 'success');
    this.log(`⏱️  Total time: ${duration}ms`, 'info');
    this.log(`📄 Report saved to: improvement-report.json`, 'info');
  }

  getFilesWithErrors() {
    const srcDir = path.join(process.cwd(), 'src');
    const files = [];
    
    const walkDir = (dir) => {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          walkDir(fullPath);
        } else if (item.match(/\.(ts|tsx|js|jsx)$/)) {
          files.push(fullPath);
        }
      }
    };
    
    walkDir(srcDir);
    return files;
  }
}

// Run the improver
const improver = new AutomatedAppImprover();
improver.run().catch(console.error); 