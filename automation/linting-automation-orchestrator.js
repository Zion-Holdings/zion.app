#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

class LintingAutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.isRunning = false;
    this.systems = new Map();
    this.stats = {
      systemsStarted: 0,
      totalErrorsFixed: 0,
      totalFilesProcessed: 0,
      lastRun: null
    };
    this.logFile = path.join(this.projectRoot, 'automation/linting-agents/logs/orchestrator.log');
  }

  async init() {
    console.log('🚀 Initializing Linting Automation Orchestrator...');
    
    // Ensure log directory exists
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    // Initialize ESLint
    await this.initializeESLint();
    
    console.log('✅ Linting Automation Orchestrator initialized successfully');
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

  async startAllSystems() {
    this.log('🎯 Starting all linting automation systems...');
    
    const systems = [
      { name: 'file-watcher', script: 'automation/linting-file-watcher.js', mode: 'continuous' },
      { name: 'cron-automation', script: 'automation/linting-cron-automation.js', mode: 'scheduled' },
      { name: 'error-fixer', script: 'automation/lint-error-fixer.js', mode: 'continuous' }
    ];
    
    for (const system of systems) {
      await this.startSystem(system);
    }
    
    this.isRunning = true;
    this.log('✅ All linting automation systems started');
  }

  async startSystem(systemConfig) {
    try {
      this.log(`🚀 Starting ${systemConfig.name}...`);
      
      const child = spawn('node', [systemConfig.script, systemConfig.mode], {
        stdio: 'pipe',
        detached: true
      });
      
      child.stdout.on('data', (data) => {
        this.log(`[${systemConfig.name}] ${data.toString().trim()}`);
      });
      
      child.stderr.on('data', (data) => {
        this.log(`[${systemConfig.name}] ERROR: ${data.toString().trim()}`, 'error');
      });
      
      child.on('close', (code) => {
        this.log(`[${systemConfig.name}] Process exited with code ${code}`);
        this.systems.delete(systemConfig.name);
      });
      
      this.systems.set(systemConfig.name, {
        process: child,
        config: systemConfig,
        startTime: new Date(),
        status: 'running'
      });
      
      this.stats.systemsStarted++;
      this.log(`✅ ${systemConfig.name} started successfully`);
      
    } catch (error) {
      this.log(`❌ Failed to start ${systemConfig.name}: ${error.message}`, 'error');
    }
  }

  async stopAllSystems() {
    this.log('🛑 Stopping all linting automation systems...');
    
    for (const [name, system] of this.systems) {
      await this.stopSystem(name);
    }
    
    this.isRunning = false;
    this.log('✅ All linting automation systems stopped');
  }

  async stopSystem(systemName) {
    const system = this.systems.get(systemName);
    if (system && system.process) {
      try {
        system.process.kill('SIGTERM');
        system.status = 'stopped';
        this.log(`🛑 Stopped ${systemName}`);
      } catch (error) {
        this.log(`❌ Error stopping ${systemName}: ${error.message}`, 'error');
      }
    }
  }

  async runQuickLintCheck() {
    try {
      this.log('🔍 Running quick lint check...');
      
      const result = execSync('npx eslint . --ext .js,.jsx,.ts,.tsx --format=compact', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      if (result) {
        this.log(`⚠️ Found lint errors, attempting to fix...`);
        await this.fixLintErrors();
      } else {
        this.log('✅ No lint errors found');
      }
      
    } catch (error) {
      if (error.status !== 1) {
        this.log(`❌ Lint check failed: ${error.message}`, 'error');
      } else {
        this.log('🔧 Lint errors detected, fixing...');
        await this.fixLintErrors();
      }
    }
  }

  async fixLintErrors() {
    try {
      this.log('🔧 Running ESLint auto-fix...');
      
      execSync('npx eslint . --ext .js,.jsx,.ts,.tsx --fix', {
        stdio: 'inherit'
      });
      
      this.log('✅ ESLint auto-fix completed');
      
      // Run additional fixes
      await this.runAdditionalFixes();
      
      // Commit changes
      await this.commitChanges();
      
      this.stats.totalErrorsFixed++;
      this.stats.lastRun = new Date();
      
    } catch (error) {
      this.log(`❌ Failed to fix lint errors: ${error.message}`, 'error');
    }
  }

  async runAdditionalFixes() {
    this.log('🔧 Running additional fixes...');
    
    const files = this.getSourceFiles();
    
    for (const file of files) {
      await this.fixCommonIssues(file);
    }
    
    this.stats.totalFilesProcessed += files.length;
  }

  getSourceFiles() {
    const glob = require('glob');
    const patterns = [
      '**/*.{js,jsx,ts,tsx}',
      '!node_modules/**',
      '!automation/**',
      '!dist/**'
    ];
    
    return glob.sync(patterns.join(' '));
  }

  async fixCommonIssues(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      const fixes = [
        { pattern: /\s+$/gm, replacement: '' },
        { pattern: /;;+/g, replacement: ';' },
        { pattern: /import\s+{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"];?\s*;+/g, replacement: 'import { $1 } from \'$2\';' },
        { pattern: /export\s+{\s*([^}]+)\s*};?\s*;+/g, replacement: 'export { $1 };' },
        { pattern: /const\s+(\w+)\s*=\s*require\s*\(\s*['"]([^'"]+)['"]\s*\)/g, replacement: 'import $1 from \'$2\'' },
        { pattern: /module\.exports\s*=\s*(\w+)/g, replacement: 'export default $1' },
        { pattern: /let\s+(\w+)\s*=\s*([^;]+);/g, replacement: 'const $1 = $2;' },
        { pattern: /console\.(log|warn|error)\(/g, replacement: '// console.$1(' },
        { pattern: /debugger;/g, replacement: '// debugger;' }
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
      }
    } catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`, 'error');
    }
  }

  async commitChanges() {
    try {
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      
      if (status.trim()) {
        this.log('📝 Committing linting fixes...');
        execSync('git add .', { stdio: 'inherit' });
        execSync('git commit -m "🔧 Auto-fix linting errors by automation orchestrator"', { stdio: 'inherit' });
        this.log('✅ Changes committed successfully');
      } else {
        this.log('📝 No changes to commit');
      }
    } catch (error) {
      this.log(`⚠️ Could not commit changes: ${error.message}`, 'warn');
    }
  }

  async startContinuousMode() {
    this.log('🔄 Starting continuous linting automation mode...');
    
    // Start all systems
    await this.startAllSystems();
    
    // Schedule periodic checks
    const task = cron.schedule('*/10 * * * *', async () => {
      await this.runQuickLintCheck();
    });
    
    this.task = task;
    
    // Keep the process running
    process.on('SIGINT', async () => {
      this.log('🛑 Stopping continuous mode...');
      if (this.task) {
        this.task.stop();
      }
      await this.stopAllSystems();
      process.exit(0);
    });
    
    this.log('✅ Continuous mode started. Press Ctrl+C to stop.');
  }

  async startScheduledMode() {
    this.log('⏰ Starting scheduled linting automation mode...');
    
    // Start all systems
    await this.startAllSystems();
    
    // Schedule different types of checks
    cron.schedule('*/5 * * * *', async () => {
      await this.runQuickLintCheck();
    });
    
    cron.schedule('*/30 * * * *', async () => {
      this.log('🔬 Running deep linting analysis...');
      await this.runDeepAnalysis();
    });
    
    cron.schedule('0 * * * *', async () => {
      this.log('📊 Running comprehensive quality check...');
      await this.runComprehensiveCheck();
    });
    
    process.on('SIGINT', async () => {
      this.log('🛑 Stopping scheduled mode...');
      await this.stopAllSystems();
      process.exit(0);
    });
    
    this.log('✅ Scheduled mode started. Press Ctrl+C to stop.');
  }

  async runDeepAnalysis() {
    try {
      this.log('🔬 Running deep linting analysis...');
      
      // Run TypeScript type checking
      try {
        execSync('npx tsc --noEmit', { stdio: 'inherit' });
        this.log('✅ TypeScript type checking passed');
      } catch (error) {
        this.log('❌ TypeScript type checking failed', 'error');
      }
      
      // Run additional quality checks
      await this.runQualityChecks();
      
    } catch (error) {
      this.log(`❌ Deep analysis failed: ${error.message}`, 'error');
    }
  }

  async runComprehensiveCheck() {
    try {
      this.log('📊 Running comprehensive quality check...');
      
      // Run all linting checks
      await this.runQuickLintCheck();
      
      // Run performance analysis
      await this.runPerformanceAnalysis();
      
      // Generate quality report
      await this.generateQualityReport();
      
    } catch (error) {
      this.log(`❌ Comprehensive check failed: ${error.message}`, 'error');
    }
  }

  async runQualityChecks() {
    this.log('📊 Running quality checks...');
    
    // Check for unused imports
    try {
      execSync('npx eslint . --ext .js,.jsx,.ts,.tsx --rule "no-unused-vars: error"', { stdio: 'pipe' });
      this.log('✅ No unused variables found');
    } catch (error) {
      this.log('⚠️ Found unused variables', 'warn');
    }
    
    // Check for console statements
    try {
      execSync('npx eslint . --ext .js,.jsx,.ts,.tsx --rule "no-console: error"', { stdio: 'pipe' });
      this.log('✅ No console statements found');
    } catch (error) {
      this.log('⚠️ Found console statements', 'warn');
    }
  }

  async runPerformanceAnalysis() {
    this.log('⚡ Running performance analysis...');
    
    // Analyze bundle size
    try {
      execSync('npm run build', { stdio: 'pipe' });
      this.log('✅ Build completed successfully');
    } catch (error) {
      this.log('❌ Build failed', 'error');
    }
  }

  async generateQualityReport() {
    const report = {
      timestamp: new Date().toISOString(),
      stats: this.stats,
      systems: Array.from(this.systems.entries()).map(([name, system]) => ({
        name,
        status: system.status,
        startTime: system.startTime,
        uptime: Date.now() - system.startTime.getTime()
      }))
    };
    
    const reportPath = path.join(this.projectRoot, 'automation/linting-agents/reports/quality-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log('📊 Quality report generated');
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      stats: this.stats,
      systems: Array.from(this.systems.entries()).map(([name, system]) => ({
        name,
        status: system.status,
        startTime: system.startTime,
        uptime: Date.now() - system.startTime.getTime()
      })),
      logFile: this.logFile
    };
  }
}

// CLI interface
async function main() {
  const orchestrator = new LintingAutomationOrchestrator();
  
  const args = process.argv.slice(2);
  const command = args[0] || 'continuous';
  
  try {
    await orchestrator.init();
    
    switch (command) {
      case 'continuous':
        await orchestrator.startContinuousMode();
        break;
      case 'scheduled':
        await orchestrator.startScheduledMode();
        break;
      case 'start-all':
        await orchestrator.startAllSystems();
        break;
      case 'stop-all':
        await orchestrator.stopAllSystems();
        break;
      case 'check':
        await orchestrator.runQuickLintCheck();
        break;
      case 'fix':
        await orchestrator.fixLintErrors();
        break;
      case 'status':
        const status = orchestrator.getStatus();
        console.log('📊 Status Report:');
        console.log(JSON.stringify(status, null, 2));
        break;
      default:
        console.log('Usage: node linting-automation-orchestrator.js [continuous|scheduled|start-all|stop-all|check|fix|status]');
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = LintingAutomationOrchestrator;
