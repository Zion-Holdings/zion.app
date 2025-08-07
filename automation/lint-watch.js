#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

class LintWatcher {
  constructor() {
    this.projectRoot = process.cwd();
    this.isRunning = false;
    this.fixQueue = [];
    this.lastFixTime = 0;
    this.fixCooldown = 1000; // 1 second cooldown
  }

  async init() {
    console.log('👀 Initializing Lint Watcher...');
    
    // Check if ESLint is installed
    try {
      execSync('npx eslint --version', { stdio: 'pipe' });
    } catch (error) {
      console.log('📦 Installing ESLint...');
      execSync('npm install --save-dev eslint eslint-config-next @typescript-eslint/eslint-plugin @typescript-eslint/parser chokidar', { stdio: 'inherit' });
    }

    // Create ESLint config if it doesn't exist
    this.createEslintConfig();
    
    console.log('✅ Lint Watcher initialized');
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

  startWatching() {
    console.log('👀 Starting file watcher...');
    
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

    console.log('✅ File watcher started. Press Ctrl+C to stop.');
  }

  handleFileChange(filePath) {
    if (this.isRunning) return;
    
    const now = Date.now();
    if (now - this.lastFixTime < this.fixCooldown) return;
    
    this.fixQueue.push(filePath);
    this.processQueue();
  }

  handleFileRemoval(filePath) {
    // File was deleted, no action needed
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
        setTimeout(() => this.processQueue(), 500);
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
}

// CLI interface
async function main() {
  const watcher = new LintWatcher();
  
  try {
    await watcher.init();
    watcher.startWatching();
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = LintWatcher;