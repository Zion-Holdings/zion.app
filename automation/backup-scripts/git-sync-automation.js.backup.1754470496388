#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn, exec, execSync } = require('child_process');
const { v4: uuidv4 } = require('uuid');
const cron = require('node-cron');

class GitSyncAutomation {
  constructor() {
    this.id = 'git-sync-automation';
    this.version = '2.0.0';
    this.status = 'initializing';
    this.projectRoot = process.cwd();
    this.lastSync = null;
    this.syncCount = 0;
    this.errorCount = 0;
    this.config = this.loadConfig();
    this.ensureDirectories();
  }

  loadConfig() {
    const configPath = path.join(__dirname, 'git-sync-config.json');
    if (fs.existsSync(configPath)) {
      return JSON.parse(fs.readFileSync(configPath, 'utf8'));
    }
    
    return {
      autoCommit: true,
      autoPush: true,
      commitInterval: 30000, // 30 seconds
      pushInterval: 60000, // 1 minute
      maxCommitSize: 50, // max files per commit
      commitMessageTemplate: 'Auto-sync: {timestamp} - {fileCount} files',
      backupBeforeSync: true,
      retryAttempts: 3,
      retryDelay: 5000, // 5 seconds
      excludePatterns: [
        'node_modules/**',
        '.git/**',
        '*.log',
        '*.tmp',
        'automation/logs/**',
        'automation/temp/**'
      ],
      includePatterns: [
        '**/*.js',
        '**/*.ts',
        '**/*.tsx',
        '**/*.json',
        '**/*.md',
        '**/*.css',
        '**/*.html'
      ]
    };
  }

  ensureDirectories() {
    const directories = [
      'git-sync-logs',
      'git-sync-backups',
      'git-sync-status',
      'git-sync-reports'
    ];

    directories.forEach(dir => {
      const dirPath = path.join(__dirname, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  async initialize() {
    console.log('🚀 Initializing Git Sync Automation...');
    
    try {
      // Check git status
      await this.checkGitStatus();
      
      // Start sync processes
      this.startAutoCommit();
      this.startAutoPush();
      this.startMonitoring();
      
      this.status = 'running';
      console.log('✅ Git Sync Automation initialized successfully');
      
    } catch (error) {
      console.error('❌ Error initializing Git Sync Automation:', error);
      this.status = 'error';
      throw error;
    }
  }

  async checkGitStatus() {
    try {
      const status = execSync('git status --porcelain', { 
        cwd: this.projectRoot,
        encoding: 'utf8'
      });
      
      if (status.trim()) {
        console.log('📝 Found uncommitted changes:', status.split('\n').length - 1, 'files');
        return true;
      } else {
        console.log('✅ No uncommitted changes found');
        return false;
      }
    } catch (error) {
      console.error('❌ Error checking git status:', error.message);
      return false;
    }
  }

  startAutoCommit() {
    if (!this.config.autoCommit) return;
    
    console.log('⏰ Starting auto-commit process...');
    
    setInterval(async () => {
      await this.performAutoCommit();
    }, this.config.commitInterval);
  }

  startAutoPush() {
    if (!this.config.autoPush) return;
    
    console.log('⏰ Starting auto-push process...');
    
    setInterval(async () => {
      await this.performAutoPush();
    }, this.config.pushInterval);
  }

  startMonitoring() {
    console.log('👀 Starting monitoring...');
    
    // Monitor every 10 seconds
    setInterval(() => {
      this.monitorStatus();
    }, 10000);
    
    // Generate reports every hour
    setInterval(() => {
      this.generateReport();
    }, 3600000);
  }

  async performAutoCommit() {
    try {
      const hasChanges = await this.checkGitStatus();
      if (!hasChanges) return;

      console.log('💾 Performing auto-commit...');
      
      // Get list of changed files
      const changedFiles = await this.getChangedFiles();
      
      if (changedFiles.length === 0) return;
      
      // Create backup if enabled
      if (this.config.backupBeforeSync) {
        await this.createBackup();
      }
      
      // Add files to staging
      await this.addFilesToStaging(changedFiles);
      
      // Create commit
      const commitMessage = this.generateCommitMessage(changedFiles);
      await this.createCommit(commitMessage);
      
      this.syncCount++;
      this.lastSync = new Date().toISOString();
      
      console.log(`✅ Auto-commit successful: ${changedFiles.length} files`);
      
    } catch (error) {
      console.error('❌ Auto-commit failed:', error.message);
      this.errorCount++;
      await this.handleError('commit', error);
    }
  }

  async performAutoPush() {
    try {
      console.log('🚀 Performing auto-push...');
      
      // Check if there are commits to push
      const hasCommitsToPush = await this.hasCommitsToPush();
      if (!hasCommitsToPush) {
        console.log('✅ No commits to push');
        return;
      }
      
      // Push to main branch
      await this.pushToMain();
      
      console.log('✅ Auto-push successful');
      
    } catch (error) {
      console.error('❌ Auto-push failed:', error.message);
      this.errorCount++;
      await this.handleError('push', error);
    }
  }

  async getChangedFiles() {
    try {
      const status = execSync('git status --porcelain', { 
        cwd: this.projectRoot,
        encoding: 'utf8'
      });
      
      const files = status.trim().split('\n').filter(line => line.trim());
      
      // Filter files based on include/exclude patterns
      return files.filter(file => {
        const filePath = file.substring(3); // Remove status prefix
        return this.shouldIncludeFile(filePath);
      });
      
    } catch (error) {
      console.error('❌ Error getting changed files:', error.message);
      return [];
    }
  }

  shouldIncludeFile(filePath) {
    // Check exclude patterns
    for (const pattern of this.config.excludePatterns) {
      if (this.matchesPattern(filePath, pattern)) {
        return false;
      }
    }
    
    // Check include patterns
    for (const pattern of this.config.includePatterns) {
      if (this.matchesPattern(filePath, pattern)) {
        return true;
      }
    }
    
    return false;
  }

  matchesPattern(filePath, pattern) {
    const regex = new RegExp(pattern.replace(/\*\*/g, '.*').replace(/\*/g, '[^/]*'));
    return regex.test(filePath);
  }

  async addFilesToStaging(files) {
    try {
      // Add all files
      execSync('git add .', { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      console.log(`📁 Added ${files.length} files to staging`);
      
    } catch (error) {
      throw new Error(`Failed to add files to staging: ${error.message}`);
    }
  }

  generateCommitMessage(files) {
    const timestamp = new Date().toISOString();
    const fileCount = files.length;
    
    return this.config.commitMessageTemplate
      .replace('{timestamp}', timestamp)
      .replace('{fileCount}', fileCount);
  }

  async createCommit(message) {
    try {
      execSync(`git commit -m "${message}"`, { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      console.log(`💾 Created commit: ${message}`);
      
    } catch (error) {
      throw new Error(`Failed to create commit: ${error.message}`);
    }
  }

  async hasCommitsToPush() {
    try {
      const result = execSync('git log --oneline origin/main..HEAD', { 
        cwd: this.projectRoot,
        encoding: 'utf8'
      });
      
      return result.trim().length > 0;
      
    } catch (error) {
      console.error('❌ Error checking commits to push:', error.message);
      return false;
    }
  }

  async pushToMain() {
    try {
      execSync('git push origin main', { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      console.log('🚀 Pushed to main branch');
      
    } catch (error) {
      throw new Error(`Failed to push to main: ${error.message}`);
    }
  }

  async createBackup() {
    try {
      const backupDir = path.join(__dirname, 'git-sync-backups');
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupPath = path.join(backupDir, `backup-${timestamp}`);
      
      // Create backup of current state
      const backupData = {
        timestamp: new Date().toISOString(),
        syncCount: this.syncCount,
        errorCount: this.errorCount,
        config: this.config,
        status: this.status
      };
      
      fs.writeFileSync(`${backupPath}.json`, JSON.stringify(backupData, null, 2));
      
      console.log('💾 Backup created');
      
    } catch (error) {
      console.error('❌ Failed to create backup:', error.message);
    }
  }

  async handleError(operation, error) {
    console.error(`❌ ${operation} error:`, error.message);
    
    // Retry logic
    for (let attempt = 1; attempt <= this.config.retryAttempts; attempt++) {
      console.log(`🔄 Retrying ${operation} (attempt ${attempt}/${this.config.retryAttempts})...`);
      
      try {
        await new Promise(resolve => setTimeout(resolve, this.config.retryDelay));
        
        if (operation === 'commit') {
          await this.performAutoCommit();
        } else if (operation === 'push') {
          await this.performAutoPush();
        }
        
        console.log(`✅ ${operation} retry successful`);
        return;
        
      } catch (retryError) {
        console.error(`❌ ${operation} retry ${attempt} failed:`, retryError.message);
      }
    }
    
    console.error(`❌ ${operation} failed after ${this.config.retryAttempts} attempts`);
  }

  monitorStatus() {
    const status = {
      id: this.id,
      version: this.version,
      status: this.status,
      lastSync: this.lastSync,
      syncCount: this.syncCount,
      errorCount: this.errorCount,
      timestamp: new Date().toISOString()
    };
    
    const statusPath = path.join(__dirname, 'git-sync-status', 'current-status.json');
    fs.writeFileSync(statusPath, JSON.stringify(status, null, 2));
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      syncCount: this.syncCount,
      errorCount: this.errorCount,
      successRate: this.syncCount > 0 ? ((this.syncCount - this.errorCount) / this.syncCount * 100).toFixed(2) : 0,
      lastSync: this.lastSync,
      config: this.config
    };
    
    const reportPath = path.join(__dirname, 'git-sync-reports', `report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('📊 Generated sync report');
  }

  getStatus() {
    return {
      id: this.id,
      version: this.version,
      status: this.status,
      lastSync: this.lastSync,
      syncCount: this.syncCount,
      errorCount: this.errorCount,
      successRate: this.syncCount > 0 ? ((this.syncCount - this.errorCount) / this.syncCount * 100).toFixed(2) : 0
    };
  }

  async shutdown() {
    console.log('🛑 Shutting down Git Sync Automation...');
    this.status = 'stopped';
    console.log('✅ Git Sync Automation shutdown complete');
  }
}

// Auto-start if run directly
if (require.main === module) {
  const gitSync = new GitSyncAutomation();
  
  process.on('SIGINT', async () => {
    console.log('\n🛑 Received SIGINT, shutting down...');
    await gitSync.shutdown();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\n🛑 Received SIGTERM, shutting down...');
    await gitSync.shutdown();
    process.exit(0);
  });
  
  gitSync.initialize().catch(error => {
    console.error('❌ Git Sync Automation initialization failed:', error);
    process.exit(1);
  });
}

module.exports = GitSyncAutomation;
