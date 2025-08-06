#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn, exec, execSync } = require('child_process');
const { v4: uuidv4 } = require('uuid');

class HighFrequencyGitSync {
  constructor() {
    this.id = 'high-frequency-git-sync';
    this.version = '3.0.0';
    this.status = 'initializing';
    this.projectRoot = process.cwd();
    this.lastSync = null;
    this.syncCount = 0;
    this.errorCount = 0;
    this.lastFileCheck = null;
    this.fileWatchers = new Map();
    this.config = {
      syncInterval: 5000, // 5 seconds
      fileCheckInterval: 2000, // 2 seconds
      maxFilesPerCommit: 20,
      commitMessagePrefix: 'Auto-sync',
      autoPush: true,
      pushInterval: 10000, // 10 seconds
      retryAttempts: 3,
      retryDelay: 2000,
      excludePatterns: [
        'node_modules/**',
        '.git/**',
        '*.log',
        '*.tmp',
        'automation/logs/**',
        'automation/temp/**',
        'automation/backups/**',
        'automation/reports/**'
      ],
      includePatterns: [
        '**/*.js',
        '**/*.ts',
        '**/*.tsx',
        '**/*.json',
        '**/*.md',
        '**/*.css',
        '**/*.html',
        '**/*.yml',
        '**/*.yaml'
      ]
    };
    
    this.ensureDirectories();
  }

  ensureDirectories() {
    const directories = [
      'high-frequency-sync-logs',
      'high-frequency-sync-status',
      'high-frequency-sync-reports'
    ];

    directories.forEach(dir => {
      const dirPath = path.join(__dirname, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  async initialize() {
    console.log('🚀 Initializing High Frequency Git Sync...');
    
    try {
      // Check git status
      await this.checkGitStatus();
      
      // Start file watching
      this.startFileWatching();
      
      // Start sync processes
      this.startHighFrequencySync();
      this.startAutoPush();
      this.startMonitoring();
      
      this.status = 'running';
      console.log('✅ High Frequency Git Sync initialized successfully');
      
    } catch (error) {
      console.error('❌ Error initializing High Frequency Git Sync:', error);
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

  startFileWatching() {
    console.log('👀 Starting file watching...');
    
    // Watch for file changes in key directories
    const watchDirs = [
      'pages',
      'components',
      'utils',
      'styles',
      'scripts',
      'automation'
    ];
    
    watchDirs.forEach(dir => {
      const fullPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(fullPath)) {
        this.watchDirectory(fullPath);
      }
    });
  }

  watchDirectory(dirPath) {
    try {
      const watcher = fs.watch(dirPath, { recursive: true }, (eventType, filename) => {
        if (filename && this.shouldIncludeFile(filename)) {
          console.log(`📁 File change detected: ${filename}`);
          this.triggerSync();
        }
      });
      
      this.fileWatchers.set(dirPath, watcher);
      console.log(`👀 Watching directory: ${dirPath}`);
      
    } catch (error) {
      console.error(`❌ Error watching directory ${dirPath}:`, error.message);
    }
  }

  startHighFrequencySync() {
    console.log('⏰ Starting high-frequency sync...');
    
    setInterval(async () => {
      await this.performSync();
    }, this.config.syncInterval);
  }

  startAutoPush() {
    if (!this.config.autoPush) return;
    
    console.log('⏰ Starting auto-push...');
    
    setInterval(async () => {
      await this.performPush();
    }, this.config.pushInterval);
  }

  startMonitoring() {
    console.log('👀 Starting monitoring...');
    
    // Monitor every 5 seconds
    setInterval(() => {
      this.monitorStatus();
    }, 5000);
    
    // Generate reports every 10 minutes
    setInterval(() => {
      this.generateReport();
    }, 600000);
  }

  triggerSync() {
    // Trigger immediate sync when file changes are detected
    setTimeout(async () => {
      await this.performSync();
    }, 1000); // Wait 1 second to batch changes
  }

  async performSync() {
    try {
      const hasChanges = await this.checkGitStatus();
      if (!hasChanges) return;

      console.log('💾 Performing high-frequency sync...');
      
      // Get list of changed files
      const changedFiles = await this.getChangedFiles();
      
      if (changedFiles.length === 0) return;
      
      // Split files into batches if too many
      const batches = this.splitIntoBatches(changedFiles);
      
      for (const batch of batches) {
        await this.commitBatch(batch);
      }
      
      this.syncCount++;
      this.lastSync = new Date().toISOString();
      
      console.log(`✅ High-frequency sync successful: ${changedFiles.length} files`);
      
    } catch (error) {
      console.error('❌ High-frequency sync failed:', error.message);
      this.errorCount++;
      await this.handleError('sync', error);
    }
  }

  async performPush() {
    try {
      console.log('🚀 Performing auto-push...');
      
      // Check if there are commits to push
      const hasCommitsToPush = await this.hasCommitsToPush();
      if (!hasCommitsToPush) {
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

  splitIntoBatches(files) {
    const batches = [];
    for (let i = 0; i < files.length; i += this.config.maxFilesPerCommit) {
      batches.push(files.slice(i, i + this.config.maxFilesPerCommit));
    }
    return batches;
  }

  async commitBatch(files) {
    try {
      // Add specific files to staging
      for (const file of files) {
        const filePath = file.substring(3); // Remove status prefix
        execSync(`git add "${filePath}"`, { 
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
      }
      
      // Create commit
      const commitMessage = this.generateCommitMessage(files);
      await this.createCommit(commitMessage);
      
      console.log(`💾 Committed batch: ${files.length} files`);
      
    } catch (error) {
      throw new Error(`Failed to commit batch: ${error.message}`);
    }
  }

  generateCommitMessage(files) {
    const timestamp = new Date().toISOString();
    const fileCount = files.length;
    const fileNames = files.map(f => f.substring(3)).join(', ');
    
    return `${this.config.commitMessagePrefix} ${timestamp} - ${fileCount} files: ${fileNames}`;
  }

  async createCommit(message) {
    try {
      execSync(`git commit -m "${message}"`, { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
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

  async handleError(operation, error) {
    console.error(`❌ ${operation} error:`, error.message);
    
    // Retry logic
    for (let attempt = 1; attempt <= this.config.retryAttempts; attempt++) {
      console.log(`🔄 Retrying ${operation} (attempt ${attempt}/${this.config.retryAttempts})...`);
      
      try {
        await new Promise(resolve => setTimeout(resolve, this.config.retryDelay));
        
        if (operation === 'sync') {
          await this.performSync();
        } else if (operation === 'push') {
          await this.performPush();
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
    
    const statusPath = path.join(__dirname, 'high-frequency-sync-status', 'current-status.json');
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
    
    const reportPath = path.join(__dirname, 'high-frequency-sync-reports', `report-${Date.now()}.json`);
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
    console.log('🛑 Shutting down High Frequency Git Sync...');
    
    // Close file watchers
    for (const [dirPath, watcher] of this.fileWatchers) {
      watcher.close();
      console.log(`👀 Stopped watching: ${dirPath}`);
    }
    
    this.status = 'stopped';
    console.log('✅ High Frequency Git Sync shutdown complete');
  }
}

// Auto-start if run directly
if (require.main === module) {
  const highFreqSync = new HighFrequencyGitSync();
  
  process.on('SIGINT', async () => {
    console.log('\n🛑 Received SIGINT, shutting down...');
    await highFreqSync.shutdown();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\n🛑 Received SIGTERM, shutting down...');
    await highFreqSync.shutdown();
    process.exit(0);
  });
  
  highFreqSync.initialize().catch(error => {
    console.error('❌ High Frequency Git Sync initialization failed:', error);
    process.exit(1);
  });
}

module.exports = HighFrequencyGitSync;
