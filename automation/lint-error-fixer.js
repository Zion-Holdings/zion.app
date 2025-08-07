#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

class LintErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.isRunning = false;
    this.fixQueue = [];
    this.watchedFiles = new Set();
    this.lastFixTime = 0;
    this.fixCooldown = 2000; // 2 seconds cooldown between fixes
  }

  async init() {
    console.log('🚀 Initializing Lint Error Fixer...');
    
    // Check if ESLint is installed
    try {
      execSync('npx eslint --version', { stdio: 'pipe' });
    } catch (error) {
      console.log('📦 Installing ESLint...');
      execSync('npm install --save-dev eslint eslint-config-next @typescript-eslint/eslint-plugin @typescript-eslint/parser', { stdio: 'inherit' });
    }

    // Create ESLint config if it doesn't exist
    this.createEslintConfig();
    
    // Start file watcher
    this.startFileWatcher();
    
    // Run initial lint check and fix
    await this.runLintCheck();
    
    console.log('✅ Lint Error Fixer initialized successfully');
  }

  createEslintConfig() {
    const eslintConfigPath = path.join(this.projectRoot, '.eslintrc.json');
    
    if (!fs.existsSync(eslintConfigPath)) {
      const config = {
        extends: [
          'next/core-web-vitals',
          '@typescript-eslint/recommended'
        ],
        parser: '@typescript-eslint/parser',
        plugins: ['@typescript-eslint'],
        rules: {
          '@typescript-eslint/no-unused-vars': 'warn',
          '@typescript-eslint/no-explicit-any': 'warn',
          'prefer-const': 'warn',
          'no-var': 'error',
          'no-console': 'warn',
          'no-debugger': 'error'
        },
        env: {
          browser: true,
          node: true,
          es6: true
        }
      };
      
      fs.writeFileSync(eslintConfigPath, JSON.stringify(config, null, 2));
      console.log('📝 Created .eslintrc.json configuration');
    }
  }

  startFileWatcher() {
    const watcher = chokidar.watch([
      '**/*.{js,jsx,ts,tsx}',
      '!node_modules/**',
      '!.next/**',
      '!automation/**'
    ], {
      ignored: /(^|[\/\\])\../,
      persistent: true
    });

    watcher
      .on('add', (filePath) => this.handleFileChange(filePath))
      .on('change', (filePath) => this.handleFileChange(filePath))
      .on('unlink', (filePath) => this.handleFileRemoval(filePath));

    console.log('👀 Watching for file changes...');
  }

  handleFileChange(filePath) {
    if (this.isRunning) return;
    
    const now = Date.now();
    if (now - this.lastFixTime < this.fixCooldown) return;
    
    this.fixQueue.push(filePath);
    this.processQueue();
  }

  handleFileRemoval(filePath) {
    this.watchedFiles.delete(filePath);
  }

  async processQueue() {
    if (this.isRunning || this.fixQueue.length === 0) return;
    
    this.isRunning = true;
    const filesToFix = [...this.fixQueue];
    this.fixQueue = [];
    
    try {
      await this.fixLintErrors(filesToFix);
    } catch (error) {
      console.error('❌ Error processing lint fixes:', error.message);
    } finally {
      this.isRunning = false;
      this.lastFixTime = Date.now();
      
      // Process remaining items in queue
      if (this.fixQueue.length > 0) {
        setTimeout(() => this.processQueue(), 1000);
      }
    }
  }

  async runLintCheck() {
    try {
      console.log('🔍 Running lint check...');
      const result = execSync('npx eslint . --ext .js,.jsx,.ts,.tsx --format=compact', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      if (result) {
        console.log('⚠️  Found lint errors, attempting to fix...');
        await this.fixLintErrors();
      } else {
        console.log('✅ No lint errors found');
      }
    } catch (error) {
      if (error.status !== 1) { // ESLint exits with 1 when errors are found
        console.error('❌ Lint check failed:', error.message);
      } else {
        console.log('🔧 Lint errors detected, fixing...');
        await this.fixLintErrors();
      }
    }
  }

  async fixLintErrors(specificFiles = null) {
    try {
      const files = specificFiles || ['.'];
      const fileArgs = files.join(' ');
      
      console.log(`🔧 Fixing lint errors for: ${fileArgs}`);
      
      // Run ESLint with --fix flag
      execSync(`npx eslint ${fileArgs} --ext .js,.jsx,.ts,.tsx --fix`, {
        stdio: 'inherit'
      });
      
      console.log('✅ Lint errors fixed successfully');
      
      // Run additional fixes for common issues
      await this.runAdditionalFixes(files);
      
    } catch (error) {
      console.error('❌ Failed to fix lint errors:', error.message);
    }
  }

  async runAdditionalFixes(files) {
    for (const file of files) {
      if (fs.existsSync(file)) {
        await this.fixCommonIssues(file);
      }
    }
  }

  async fixCommonIssues(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Fix common issues
      const fixes = [
        // Remove trailing whitespace
        { pattern: /\s+$/gm, replacement: '' },
        // Fix double semicolons
        { pattern: /;;+/g, replacement: ';' },
        // Fix missing semicolons after statements
        { pattern: /(\w+)\s*\n/g, replacement: '$1;\n' },
        // Fix import statements
        { pattern: /import\s+{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"];?\s*;+/g, replacement: 'import { $1 } from \'$2\';' },
        // Fix export statements
        { pattern: /export\s+{\s*([^}]+)\s*};?\s*;+/g, replacement: 'export { $1 };' }
      ];

      fixes.forEach(fix => {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      });

      if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`🔧 Fixed common issues in ${filePath}`);
      }
    } catch (error) {
      console.error(`❌ Error fixing common issues in ${filePath}:`, error.message);
    }
  }

  async startContinuousMode() {
    console.log('🔄 Starting continuous lint error fixing mode...');
    
    // Run initial check
    await this.runLintCheck();
    
    // Set up periodic checks
    setInterval(async () => {
      await this.runLintCheck();
    }, 30000); // Check every 30 seconds
    
    console.log('✅ Continuous mode started. Press Ctrl+C to stop.');
  }
}

// CLI interface
async function main() {
  const fixer = new LintErrorFixer();
  
  const args = process.argv.slice(2);
  const command = args[0] || 'continuous';
  
  try {
    await fixer.init();
    
    switch (command) {
      case 'check':
        await fixer.runLintCheck();
        break;
      case 'fix':
        await fixer.fixLintErrors();
        break;
      case 'continuous':
      default:
        await fixer.startContinuousMode();
        break;
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = LintErrorFixer;