#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

class LintingFileWatcher {
  constructor() {
    this.projectRoot = process.cwd();
    this.isRunning = false;
    this.watchedFiles = new Set();
    this.fixQueue = [];
    this.isProcessing = false;
    this.stats = {
      filesWatched: 0,
      filesFixed: 0,
      errorsFixed: 0,
      lastRun: null
    };
    this.logFile = path.join(this.projectRoot, 'automation/linting-agents/logs/file-watcher.log');
  }

  async init() {
    console.log('🚀 Initializing Linting File Watcher...');
    
    // Ensure log directory exists
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    // Initialize ESLint
    await this.initializeESLint();
    
    console.log('✅ Linting File Watcher initialized successfully');
  }

  async initializeESLint() {
    try {
      execSync('npx eslint --version', { stdio: 'pipe' });
    } catch (error) {
      console.log('📦 Installing ESLint and related packages...');
      execSync('npm install --save-dev eslint eslint-config-next @typescript-eslint/eslint-plugin @typescript-eslint/parser', { stdio: 'inherit' });
    }

    // Create ESLint config if it doesn't exist (ESLint v9 format)
    const eslintConfigPath = path.join(this.projectRoot, 'eslint.config.js');
    if (!fs.existsSync(eslintConfigPath)) {
      const config = `import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      '@next/next': nextPlugin
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'prefer-const': 'warn',
      'no-var': 'error',
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'indent': ['error', 2],
      'comma-dangle': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never']
    }
  }
];`;
      
      fs.writeFileSync(eslintConfigPath, config);
      console.log('📝 Created eslint.config.js configuration');
    }
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
    
    fs.appendFileSync(this.logFile, logEntry);
    console.log(message);
  }

  startFileWatcher() {
    this.log('👀 Starting file watcher...');
    
    const watcher = chokidar.watch([
      '**/*.{js,jsx,ts,tsx}',
      '!node_modules/**',
      '!.next/**',
      '!automation/**',
      '!dist/**'
    ], {
      ignored: /(^|[\/\\])\../,
      persistent: true,
      ignoreInitial: false
    });

    watcher
      .on('add', (filePath) => this.handleFileChange(filePath))
      .on('change', (filePath) => this.handleFileChange(filePath))
      .on('unlink', (filePath) => this.handleFileRemoval(filePath))
      .on('ready', () => {
        this.log('✅ File watcher ready');
        this.isRunning = true;
      });

    this.watcher = watcher;
  }

  handleFileChange(filePath) {
    if (this.isProcessing) return;
    
    this.watchedFiles.add(filePath);
    this.fixQueue.push(filePath);
    this.stats.filesWatched++;
    
    this.log(`📝 File changed: ${filePath}`);
    
    // Process queue after a short delay to batch changes
    setTimeout(() => {
      this.processQueue();
    }, 1000);
  }

  handleFileRemoval(filePath) {
    this.watchedFiles.delete(filePath);
    this.log(`🗑️ File removed: ${filePath}`);
  }

  async processQueue() {
    if (this.isProcessing || this.fixQueue.length === 0) return;
    
    this.isProcessing = true;
    const filesToProcess = [...this.fixQueue];
    this.fixQueue = [];
    
    try {
      for (const filePath of filesToProcess) {
        await this.fixFileErrors(filePath);
      }
    } catch (error) {
      this.log(`❌ Error processing queue: ${error.message}`, 'error');
    } finally {
      this.isProcessing = false;
      this.stats.lastRun = new Date();
      
      // Process remaining items in queue
      if (this.fixQueue.length > 0) {
        setTimeout(() => this.processQueue(), 1000);
      }
    }
  }

  async fixFileErrors(filePath) {
    try {
      if (!fs.existsSync(filePath)) return;
      
      this.log(`🔧 Fixing errors in ${filePath}`);
      
      // Run ESLint on the specific file
      try {
        execSync(`npx eslint "${filePath}" --fix`, { stdio: 'pipe' });
        this.log(`✅ Fixed errors in ${filePath}`);
        this.stats.filesFixed++;
      } catch (error) {
        // ESLint found errors, try to fix them manually
        await this.fixCommonIssues(filePath);
      }
      
      // Run additional fixes
      await this.fixCommonIssues(filePath);
      
    } catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`, 'error');
    }
  }

  async fixCommonIssues(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Common fixes
      const fixes = [
        { pattern: /\s+$/gm, replacement: '' }, // Remove trailing whitespace
        { pattern: /;;+/g, replacement: ';' }, // Fix double semicolons
        { pattern: /import\s+{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"];?\s*;+/g, replacement: 'import { $1 } from \'$2\';' },
        { pattern: /export\s+{\s*([^}]+)\s*};?\s*;+/g, replacement: 'export { $1 };' },
        { pattern: /const\s+(\w+)\s*=\s*require\s*\(\s*['"]([^'"]+)['"]\s*\)/g, replacement: 'import $1 from \'$2\'' },
        { pattern: /module\.exports\s*=\s*(\w+)/g, replacement: 'export default $1' },
        { pattern: /let\s+(\w+)\s*=\s*([^;]+);/g, replacement: 'const $1 = $2;' }, // Prefer const
        { pattern: /console\.(log|warn|error)\(/g, replacement: '// console.$1(' }, // Comment console statements
        { pattern: /debugger;/g, replacement: '// debugger;' } // Comment debugger statements
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
        this.log(`🔧 Fixed common issues in ${filePath}`);
        this.stats.errorsFixed++;
      }
    } catch (error) {
      this.log(`❌ Error fixing common issues in ${filePath}: ${error.message}`, 'error');
    }
  }

  async startContinuousMode() {
    this.log('🔄 Starting continuous file watching mode...');
    
    this.startFileWatcher();
    
    // Keep the process running
    process.on('SIGINT', () => {
      this.log('🛑 Stopping file watcher...');
      if (this.watcher) {
        this.watcher.close();
      }
      this.isRunning = false;
      process.exit(0);
    });
    
    this.log('✅ Continuous mode started. Press Ctrl+C to stop.');
  }

  async startSelectiveMode() {
    this.log('🎯 Starting selective file watching mode...');
    
    // Watch only specific directories or file types
    const selectiveWatcher = chokidar.watch([
      'src/**/*.{js,jsx,ts,tsx}',
      'components/**/*.{js,jsx,ts,tsx}',
      'pages/**/*.{js,jsx,ts,tsx}',
      'utils/**/*.{js,jsx,ts,tsx}'
    ], {
      ignored: /(^|[\/\\])\../,
      persistent: true,
      ignoreInitial: false
    });

    selectiveWatcher
      .on('add', (filePath) => this.handleFileChange(filePath))
      .on('change', (filePath) => this.handleFileChange(filePath))
      .on('unlink', (filePath) => this.handleFileRemoval(filePath))
      .on('ready', () => {
        this.log('✅ Selective file watcher ready');
        this.isRunning = true;
      });

    this.watcher = selectiveWatcher;
    
    process.on('SIGINT', () => {
      this.log('🛑 Stopping selective file watcher...');
      if (this.watcher) {
        this.watcher.close();
      }
      this.isRunning = false;
      process.exit(0);
    });
    
    this.log('✅ Selective mode started. Press Ctrl+C to stop.');
  }

  async runLintCheck() {
    try {
      this.log('🔍 Running lint check on all files...');
      
      const result = execSync('npx eslint . --ext .js,.jsx,.ts,.tsx --format=compact', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      if (result) {
        this.log(`⚠️ Found lint errors, attempting to fix...`);
        await this.fixAllErrors();
      } else {
        this.log('✅ No lint errors found');
      }
      
    } catch (error) {
      if (error.status !== 1) {
        this.log(`❌ Lint check failed: ${error.message}`, 'error');
      } else {
        this.log('🔧 Lint errors detected, fixing...');
        await this.fixAllErrors();
      }
    }
  }

  async fixAllErrors() {
    try {
      this.log('🔧 Running ESLint auto-fix on all files...');
      
      execSync('npx eslint . --ext .js,.jsx,.ts,.tsx --fix', {
        stdio: 'inherit'
      });
      
      this.log('✅ ESLint auto-fix completed');
      
      // Run additional fixes on all files
      const files = this.getSourceFiles();
      
      for (const file of files) {
        await this.fixCommonIssues(file);
      }
      
      this.stats.filesFixed += files.length;
      this.stats.lastRun = new Date();
      
    } catch (error) {
      this.log(`❌ Failed to fix all errors: ${error.message}`, 'error');
    }
  }

  getSourceFiles() {
    const glob = require('glob');
    const patterns = [
      '**/*.{js,jsx,ts,tsx}',
      '!node_modules/**',
      '!.next/**',
      '!automation/**',
      '!dist/**'
    ];
    
    return glob.sync(patterns.join(' '));
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      stats: this.stats,
      watchedFiles: this.watchedFiles.size,
      queueLength: this.fixQueue.length,
      logFile: this.logFile
    };
  }
}

// CLI interface
async function main() {
  const watcher = new LintingFileWatcher();
  
  const args = process.argv.slice(2);
  const command = args[0] || 'continuous';
  
  try {
    await watcher.init();
    
    switch (command) {
      case 'continuous':
        await watcher.startContinuousMode();
        break;
      case 'selective':
        await watcher.startSelectiveMode();
        break;
      case 'check':
        await watcher.runLintCheck();
        break;
      case 'fix':
        await watcher.fixAllErrors();
        break;
      case 'status':
        const status = watcher.getStatus();
        console.log('📊 Status Report:');
        console.log(JSON.stringify(status, null, 2));
        break;
      default:
        console.log('Usage: node linting-file-watcher.js [continuous|selective|check|fix|status]');
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = LintingFileWatcher;
