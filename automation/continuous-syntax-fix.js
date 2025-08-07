#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const SyntaxFixOrchestrator = require('./syntax-fix-orchestrator');

class ContinuousSyntaxFix {
  constructor() {
    this.isRunning = false;
    this.fixQueue = [];
    this.backupDir = '.syntax-fix-backups';
    this.stats = {
      totalFixes: 0,
      successfulFixes: 0,
      failedFixes: 0,
      filesProcessed: 0
    };
  }

  async start(options = {}) {
    const { 
      watchMode = true, 
      interval = 10000, 
      aggressive = false, 
      autoCommit = true, 
      backupFiles = true 
    } = options;
    
    console.log('🔄 Starting Continuous Syntax Fix...');
    this.isRunning = true;
    this.watchMode = watchMode;
    this.aggressive = aggressive;
    this.autoCommit = autoCommit;
    this.backupFiles = backupFiles;

    // Initialize backup system
    if (backupFiles) {
      this.initializeBackupSystem();
    }

    // Start file watching or interval mode
    if (watchMode) {
      this.startFileWatching();
    } else {
      this.startIntervalMode(interval);
    }

    // Start the fix loop
    this.startFixLoop();
    
    // Start stats tracking
    this.startStatsTracking();
  }

  initializeBackupSystem() {
    if (!fs.existsSync(this.backupDir)) {
      fs.mkdirSync(this.backupDir, { recursive: true });
    }
    console.log('💾 Backup system initialized');
  }

  startFileWatching() {
    console.log('👀 Starting file watcher...');
    
    // For now, use interval-based checking
    this.startIntervalMode(5000);
  }

  startIntervalMode(interval) {
    console.log(`⏰ Starting interval mode every ${interval}ms...`);
    
    setInterval(async () => {
      if (this.isRunning) {
        await this.performFix();
      }
    }, interval);
  }

  queueFix(filePath, fixType, details) {
    this.fixQueue.push({
      filePath,
      fixType,
      details,
      timestamp: Date.now()
    });
  }

  async processFixQueue() {
    if (this.fixQueue.length === 0) return;

    console.log(`🔧 Processing ${this.fixQueue.length} fixes...`);
    
    for (const fix of this.fixQueue) {
      try {
        await this.performFix(fix.filePath, fix.fixType, fix.details);
        this.stats.successfulFixes++;
      } catch (error) {
        console.error(`❌ Failed to fix ${fix.filePath}:`, error.message);
        this.stats.failedFixes++;
      }
    }

    this.fixQueue = [];
  }

  async performFix(filePath = null, fixType = null, details = null) {
    if (filePath) {
      await this.fixSpecificFile(filePath, fixType, details);
    } else {
      // Run comprehensive fix
      const orchestrator = new SyntaxFixOrchestrator();
      await orchestrator.runComprehensiveFix();
    }

    this.stats.totalFixes++;
    
    // Auto commit if enabled
    if (this.autoCommit) {
      await this.autoCommit();
    }
  }

  async fixSpecificFile(filePath, fixType, details) {
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    // Create backup if enabled
    if (this.backupFiles) {
      this.createBackup(filePath);
    }

    const content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;

    // Apply specific fixes based on fix type
    if (fixType === 'semicolon') {
      newContent = this.fixSemicolons(newContent);
    } else if (fixType === 'brackets') {
      newContent = this.fixBrackets(newContent);
    } else if (fixType === 'quotes') {
      newContent = this.fixQuotes(newContent);
    } else if (fixType === 'imports') {
      newContent = this.fixImports(newContent);
    } else if (fixType === 'jsx') {
      newContent = this.fixJSX(newContent);
    } else {
      // Apply all fixes
      newContent = this.fixSemicolons(newContent);
      newContent = this.fixBrackets(newContent);
      newContent = this.fixQuotes(newContent);
      newContent = this.fixImports(newContent);
      newContent = this.fixJSX(newContent);
    }

    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`✅ Fixed ${filePath}`);
      this.stats.filesProcessed++;
    }
  }

  fixSemicolons(content) {
    // Fix double semicolons
    let fixed = content.replace(/;;/g, ';');
    
    // Fix missing semicolons at end of lines
    fixed = fixed.replace(/([^;])\s*$/gm, '$1;');
    
    return fixed;
  }

  fixBrackets(content) {
    // Fix unclosed parentheses
    let fixed = content.replace(/\(\s*$/gm, '()');
    
    // Fix unclosed brackets
    fixed = fixed.replace(/\[\s*$/gm, '[]');
    
    // Fix unclosed braces
    fixed = fixed.replace(/\{\s*$/gm, '{}');
    
    return fixed;
  }

  fixQuotes(content) {
    // Fix unclosed quotes
    let fixed = content.replace(/("')([^"']*)$/gm, '$1$2$1');
    
    return fixed;
  }

  fixImports(content) {
    // Fix import statements
    let fixed = content.replace(/import\s+([^;]+);?\s*$/gm, 'import $1;');
    
    return fixed;
  }

  fixJSX(content) {
    // Fix JSX specific issues
    let fixed = content;
    
    // Fix unclosed JSX tags
    fixed = fixed.replace(/<(\w+)([^>]*)\s*$/gm, '<$1$2>');
    
    return fixed;
  }

  createBackup(filePath) {
    try {
      const relativePath = path.relative(process.cwd(), filePath);
      const backupPath = path.join(this.backupDir, relativePath);
      const backupDir = path.dirname(backupPath);
      
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }
      
      fs.copyFileSync(filePath, backupPath);
    } catch (error) {
      console.error(`⚠️ Failed to create backup for ${filePath}:`, error.message);
    }
  }

  async autoCommit() {
    try {
      // Check if there are changes to commit
      const status = execSync('git status --porcelain', { encoding: 'utf8' });
      
      if (status.trim()) {
        // Stage all changes
        execSync('git add .', { stdio: 'pipe' });
        
        // Commit with timestamp
        const timestamp = new Date().toISOString();
        execSync(`git commit -m "Auto-fix syntax errors - ${timestamp}"`, { stdio: 'pipe' });
        
        console.log('✅ Auto-committed syntax fixes');
      }
    } catch (error) {
      console.error('⚠️ Auto-commit failed:', error.message);
    }
  }

  startFixLoop() {
    console.log('🔄 Starting fix loop...');
    
    // Process fix queue every 5 seconds
    setInterval(async () => {
      if (this.isRunning) {
        await this.processFixQueue();
      }
    }, 5000);
  }

  startStatsTracking() {
    console.log('📊 Starting stats tracking...');
    
    // Log stats every minute
    setInterval(() => {
      if (this.isRunning) {
        console.log(`📈 Stats: ${this.stats.totalFixes} total fixes, ${this.stats.successfulFixes} successful, ${this.stats.failedFixes} failed`);
      }
    }, 60000);
  }

  stop() {
    console.log('🛑 Stopping Continuous Syntax Fix...');
    this.isRunning = false;
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      watchMode: this.watchMode,
      aggressive: this.aggressive,
      autoCommit: this.autoCommit,
      backupFiles: this.backupFiles,
      queueLength: this.fixQueue.length,
      stats: this.stats
    };
  }

  getStats() {
    return this.stats;
  }
}

// CLI interface
if (require.main === module) {
  const continuous = new ContinuousSyntaxFix();
  
  const args = process.argv.slice(2);
  const options = {
    watchMode: args.includes('--watch') || args.includes('-w'),
    interval: parseInt(args.find(arg => arg.startsWith('--interval='))?.split('=')[1]) || 10000,
    aggressive: args.includes('--aggressive'),
    autoCommit: !args.includes('--no-commit'),
    backupFiles: !args.includes('--no-backup')
  };

  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n🛑 Received SIGINT, shutting down...');
    continuous.stop();
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    console.log('\n🛑 Received SIGTERM, shutting down...');
    continuous.stop();
    process.exit(0);
  });

  continuous.start(options);
}

module.exports = ContinuousSyntaxFix;