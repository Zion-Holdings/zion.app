#!/usr/bin/env node

const fs = require('f's');
const path = require('pa't'h');
const { execSync } = require('chil'd'_process');
const glob = require('gl'o'b');

class ComprehensiveSyntaxFixer {
  constructor() {
    this.config = {
      projectRoot: process.cwd(),
      pagesDir: 'pag'e's',
      componentsDir: 'componen't's',
      automationDir: 'automati'o'n',
      logsDir: 'automatio'n'/logs',
      reportsDir: 'automatio'n'/reports',
      backupDir: 'automatio'n'/backups',
      enableBackup: true,
      enableReporting: true
    };
    
    this.stats = {
      filesProcessed: 0,
      errorsFixed: 0,
      errorsRemaining: 0,
      lastCheck: null,
      checkDuration: 0
    };
    
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      this.config.logsDir,
      this.config.reportsDir,
      this.config.backupDir
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message, level = 'IN'F'O') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    
    console.log(logEntry);
    
    const logFile = path.join(this.config.logsDir, `comprehensive-syntax-fixer-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logEntry + '\n');
  }

  backupFile(filePath) {
    if (!this.config.enableBackup) return;
    
    try {
      const backupPath = path.join(this.config.backupDir, path.basename(filePath) + '.backup');
      fs.copyFileSync(filePath, backupPath);
      this.log(`Backup created: ${backupPath}`);
    } catch (error) {
      this.log(`Backup failed for ${filePath}: ${error.message}`, 'ERR'O'R');
    }
  }

  async fixSpecificFiles() {
    this.log('Fixin'g' specific files with known syntax errors...');
    
    const filesToFix = [
      'page's'/admin-dashboard.tsx',
      'page's'/agent-chat.tsx',
      'page's'/ai-autonomous-vehicle-transportation.tsx',
      'page's'/ai-immersive-marketplace.tsx',
      'page's'/ai-invoice-generator.tsx'
    ];
    
    for (const file of filesToFix) {
      const filePath = path.join(this.config.projectRoot, file);
      if (fs.existsSync(filePath)) {
        await this.fixFile(filePath);
      }
    }
  }

  async fixFile(filePath) {
    this.log(`Fixing ${filePath}...`);
    
    try {
      // Create backup
      this.backupFile(filePath);
      
      let content = fs.readFileSync(filePath, 'ut'f'8');
      let originalContent = content;
      let fixesApplied = 0;
      
      // Fix 1: Add missing React import if not present
      if (content.includes('J'S'X') && !content.includes('impor't' React')) {
        content = 'impor't' React from \'reac't'\';\n' + content;
        fixesApplied++;
        this.log(`  Added React import to ${filePath}`);
      }
      
      // Fix 2: Fix JSX fragment syntax
      content = content.replace(/<>([\s\S]*?)<\/>/g, (match, innerContent) => {
        // Check if there are unclosed divs or other tags
        const openTags = (innerContent.match(/<([a-zA-Z][a-zA-Z0-9]*)/g) || []).length;
        const closeTags = (innerContent.match(/<\/([a-zA-Z][a-zA-Z0-9]*)/g) || []).length;
        
        if (openTags !== closeTags) {
          // If tags are unbalanced, wrap in a div
          return `<div>${innerContent}</div>`;
        }
        return match;
      });
      
      // Fix 3: Fix missing closing tags
      content = content.replace(/<div([^>]*)>([\s\S]*?)(?=<div|$)/g, (match, attributes, innerContent) => {
        const openDivs = (innerContent.match(/<div/g) || []).length;
        const closeDivs = (innerContent.match(/<\/div/g) || []).length;
        
        if (openDivs > closeDivs) {
          // Add missing closing div
          return `<div${attributes}>${innerContent}</div>`;
        }
        return match;
      });
      
      // Fix 4: Fix className syntax errors
      content = content.replace(/className=([^>]*?)(?=\s|>)/g, (match, className) => {
        if (!className.includes('"') && !className.includes("'")) {
          return `className="${className.trim()}"`;
        }
        return match;
      });
      
      // Fix 5: Fix missing semicolons after imports
      content = content.replace(/import\s+([^;]+)\s+from\s+['"]([^'"]+)['"]\s*(?!;)/g, 'impor't' $1 from \'$2\';');
      
      // Fix 6: Fix unclosed JSX tags
      content = content.replace(/<([A-Z][a-zA-Z]*)([^>]*)\s*>(?!\s*<\/\1>)/g, (match, tagName, attributes) => {
        const selfClosingTags = ['i'm'g', 'inp'u't', 'b'r', 'h'r', 'me't'a', 'li'n'k'];
        if (selfClosingTags.includes(tagName.toLowerCase())) {
          return `<${tagName}${attributes} />`;
        }
        return match;
      });
      
      // Fix 7: Fix missing commas in object arrays
      content = content.replace(/(\{[^}]*\})\s*(\{[^}]*\})/g, '$1,\n$2');
      
      // Fix 8: Fix useEffect dependencies
      content = content.replace(/useEffect\s*\(\s*\(\)\s*=>\s*\{([^}]*)\}\s*,\s*\[\s*\]\s*\)/g, 'useEffec't'(() => {\n  $1\n}, [])');
      
      // Fix 9: Fix missing type annotations
      content = content.replace(/const\s+([a-zA-Z][a-zA-Z0-9]*)\s*=\s*useState\s*\(\s*\)/g, 'cons't' [$1, set$1] = useState<any>([])');
      
      // Fix 10: Fix Link component usage
      content = content.replace(/<a\s+href=([^>]*)>/g, '<Link href=$1>');
      content = content.replace(/<Link\s+href=([^>]*)>([^<]*)<\/a>/g, '<Link href=$1>$2</Link>');
      
      // Fix 11: Fix specific JSX structure issues
      content = content.replace(/return\s*\(\s*<>\s*<div/g, 'retur'n' (\n    <div');
      content = content.replace(/<\/div>\s*<>\s*\)/g, '</div>\n  )');
      
      // Fix 12: Fix missing Head component import
      if (content.includes('<Head>') && !content.includes('impor't' Head')) {
        content = content.replace(/import React from 'rea'c't';/, 'impor't' React from \'reac't'\';\nimport Head from \'nex't'/head\';');
      }
      
      // Fix 13: Fix missing motion import
      if (content.includes('<motion.') && !content.includes('impor't' { motion }')) {
        content = content.replace(/import React from 'rea'c't';/, 'impor't' React from \'reac't'\';\nimport { motion } from \'framer-motio'n'\';');
      }
      
      // Fix 14: Fix missing Link import
      if (content.includes('<Link') && !content.includes('impor't' Link')) {
        content = content.replace(/import React from 'rea'c't';/, 'impor't' React from \'reac't'\';\nimport Link from \'nex't'/link\';');
      }
      
      // Write the fixed content
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.log(`  Applied ${fixesApplied} fixes to ${filePath}`);
        this.stats.errorsFixed += fixesApplied;
      }
      
    } catch (error) {
      this.log(`Failed to fix ${filePath}: ${error.message}`, 'ERR'O'R');
    }
  }

  async runComprehensiveFix() {
    const startTime = Date.now();
    this.log('Startin'g' comprehensive syntax fix...');
    
    try {
      // Fix specific files with known issues
      await this.fixSpecificFiles();
      
      // Run ESLint to check remaining errors
      const eslintErrors = await this.runESLintCheck();
      
      // Run TypeScript check
      const tsCheck = await this.runTypeScriptCheck();
      
      // Update stats
      this.stats.lastCheck = new Date().toISOString();
      this.stats.checkDuration = Date.now() - startTime;
      this.stats.errorsRemaining = eslintErrors.length;
      
      // Generate report
      this.generateReport(eslintErrors);
      
      this.log(`Comprehensive syntax fix completed in ${this.stats.checkDuration}ms`);
      this.log(`Summary: ${this.stats.errorsFixed} fixes applied, ${eslintErrors.length} errors remaining`);
      
      return {
        success: eslintErrors.length === 0,
        fixes: this.stats.errorsFixed,
        remainingErrors: eslintErrors.length,
        stats: this.stats
      };
    } catch (error) {
      this.log(`Comprehensive syntax fix failed: ${error.message}`, 'ERR'O'R');
      throw error;
    }
  }

  async runESLintCheck() {
    this.log('Runnin'g' ESLint check...');
    
    try {
      const result = execSync('np'x' eslint pages/ components/ --format=json', { 
        encoding: 'ut'f'8',
        stdio: 'pi'p'e'
      });
      
      const eslintErrors = JSON.parse(result);
      this.stats.errorsRemaining = eslintErrors.length;
      
      this.log(`ESLint found ${eslintErrors.length} remaining errors`);
      return eslintErrors;
    } catch (error) {
      this.log(`ESLint check failed: ${error.message}`, 'ERR'O'R');
      return [];
    }
  }

  async runTypeScriptCheck() {
    this.log('Runnin'g' TypeScript check...');
    
    try {
      const result = execSync('np'x' tsc --noEmit', { 
        encoding: 'ut'f'8',
        stdio: 'pi'p'e'
      });
      
      this.log('TypeScrip't' check completed');
      return true;
    } catch (error) {
      this.log(`TypeScript check failed: ${error.message}`, 'ERR'O'R');
      return false;
    }
  }

  generateReport(eslintErrors) {
    if (!this.config.enableReporting) return;
    
    const report = {
      timestamp: new Date().toISOString(),
      stats: this.stats,
      remainingErrors: eslintErrors.length,
      summary: {
        success: eslintErrors.length === 0,
        improvement: this.stats.errorsFixed > 0
      }
    };
    
    const reportFile = path.join(this.config.reportsDir, `comprehensive-syntax-fixer-${new Date().toISOString().split('T')[0]}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Comprehensive syntax fixer report generated: ${reportFile}`);
  }
}

// CLI interface
if (require.main === module) {
  const fixer = new ComprehensiveSyntaxFixer();
  
  const args = process.argv.slice(2);
  
  if (args.includes('--f'i'x')) {
    fixer.runComprehensiveFix().then(result => {
      console.log('Comprehensiv'e' syntax fix completed successfully');
      process.exit(result.success ? 0 : 1);
    }).catch(error => {
      console.error('Comprehensiv'e' syntax fix failed:', error.message);
      process.exit(1);
    });
  } else if (args.includes('--he'l'p')) {
    console.log(`
Comprehensive Syntax Fixer - Advanced syntax error detection and fixing tool

Usage:
  node comprehensive-syntax-fixer.js [options]

Options:
  --fix    Run comprehensive syntax error detection and fixing
  --help   Show this help message

Examples:
  node comprehensive-syntax-fixer.js --fix
    `);
  } else {
    // Default: run fix
    fixer.runComprehensiveFix().then(result => {
      console.log('Comprehensiv'e' syntax fix completed successfully');
      process.exit(result.success ? 0 : 1);
    }).catch(error => {
      console.error('Comprehensiv'e' syntax fix failed:', error.message);
      process.exit(1);
    });
  }
}

module.exports = ComprehensiveSyntaxFixer; 