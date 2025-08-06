#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn, exec, execSync } = require('child_process');
const { v4: uuidv4 } = require('uuid');
const cron = require('node-cron');

class ComprehensiveSyncOrchestrator {
  constructor() {
    this.id = 'comprehensive-sync-orchestrator';
    this.version = '4.0.0';
    this.status = 'initializing';
    this.projectRoot = process.cwd();
    this.lastSync = null;
    this.syncCount = 0;
    this.errorCount = 0;
    this.fileWatchers = new Map();
    this.syncProcesses = new Map();
    this.config = {
      // High-frequency sync settings
      highFreqSyncInterval: 3000, // 3 seconds
      highFreqPushInterval: 8000, // 8 seconds
      
      // Standard sync settings
      standardSyncInterval: 15000, // 15 seconds
      standardPushInterval: 30000, // 30 seconds
      
      // Backup sync settings
      backupSyncInterval: 60000, // 1 minute
      backupPushInterval: 120000, // 2 minutes
      
      // File watching
      watchDirectories: [
        'pages',
        'components',
        'utils',
        'styles',
        'scripts',
        'automation',
        'public'
      ],
      
      // File patterns
      excludePatterns: [
        'node_modules/**',
        '.git/**',
        '*.log',
        '*.tmp',
        'automation/logs/**',
        'automation/temp/**',
        'automation/backups/**',
        'automation/reports/**',
        'automation/agent-reports/**',
        'automation/capability-reports/**',
        'automation/master-reports/**'
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
        '**/*.yaml',
        '**/*.svg',
        '**/*.png',
        '**/*.jpg',
        '**/*.jpeg',
        '**/*.gif'
      ],
      
      // Commit settings
      maxFilesPerCommit: 15,
      commitMessagePrefix: 'Auto-sync',
      autoPush: true,
      retryAttempts: 5,
      retryDelay: 2000,
      
      // Monitoring
      healthCheckInterval: 10000, // 10 seconds
      reportInterval: 300000, // 5 minutes
      
      // Performance
      enableFileWatching: true,
      enableHighFreqSync: true,
      enableStandardSync: true,
      enableBackupSync: true
    };
    
    this.ensureDirectories();
  }

  ensureDirectories() {
    const directories = [
      'comprehensive-sync-logs',
      'comprehensive-sync-status',
      'comprehensive-sync-reports',
      'comprehensive-sync-backups'
    ];

    directories.forEach(dir => {
      const dirPath = path.join(__dirname, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  async initialize() {
    console.log('🚀 Initializing Comprehensive Sync Orchestrator...');
    
    try {
      // Check git status
      await this.checkGitStatus();
      
      // Start file watching
      if (this.config.enableFileWatching) {
        this.startFileWatching();
      }
      
      // Start sync processes
      if (this.config.enableHighFreqSync) {
        this.startHighFrequencySync();
      }
      
      if (this.config.enableStandardSync) {
        this.startStandardSync();
      }
      
      if (this.config.enableBackupSync) {
        this.startBackupSync();
      }
      
      // Start monitoring
      this.startMonitoring();
      this.startHealthChecks();
      this.startReporting();
      
      this.status = 'running';
      console.log('✅ Comprehensive Sync Orchestrator initialized successfully');
      
    } catch (error) {
      console.error('❌ Error initializing Comprehensive Sync Orchestrator:', error);
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
    console.log('👀 Starting comprehensive file watching...');
    
    this.config.watchDirectories.forEach(dir => {
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
          this.triggerImmediateSync();
        }
      });
      
      this.fileWatchers.set(dirPath, watcher);
      console.log(`👀 Watching directory: ${dirPath}`);
      
    } catch (error) {
      console.error(`❌ Error watching directory ${dirPath}:`, error.message);
    }
  }

  startHighFrequencySync() {
    console.log('⚡ Starting high-frequency sync...');
    
    setInterval(async () => {
      await this.performSync('high-frequency');
    }, this.config.highFreqSyncInterval);
  }

  startStandardSync() {
    console.log('🔄 Starting standard sync...');
    
    setInterval(async () => {
      await this.performSync('standard');
    }, this.config.standardSyncInterval);
  }

  startBackupSync() {
    console.log('💾 Starting backup sync...');
    
    setInterval(async () => {
      await this.performSync('backup');
    }, this.config.backupSyncInterval);
  }

  startMonitoring() {
    console.log('👀 Starting monitoring...');
    
    setInterval(() => {
      this.monitorStatus();
    }, 5000);
  }

  startHealthChecks() {
    console.log('🏥 Starting health checks...');
    
    setInterval(() => {
      this.performHealthCheck();
    }, this.config.healthCheckInterval);
  }

  startReporting() {
    console.log('📊 Starting reporting...');
    
    setInterval(() => {
      this.generateReport();
    }, this.config.reportInterval);
  }

  triggerImmediateSync() {
    // Trigger immediate sync when file changes are detected
    setTimeout(async () => {
      await this.performSync('immediate');
    }, 500); // Wait 500ms to batch changes
  }

  async performSync(type) {
    try {
      const hasChanges = await this.checkGitStatus();
      if (!hasChanges) return;

      console.log(`💾 Performing ${type} sync...`);
      
      // Get list of changed files
      const changedFiles = await this.getChangedFiles();
      
      if (changedFiles.length === 0) return;
      
      // Split files into batches
      const batches = this.splitIntoBatches(changedFiles);
      
      for (const batch of batches) {
        await this.commitBatch(batch, type);
      }
      
      this.syncCount++;
      this.lastSync = new Date().toISOString();
      
      console.log(`✅ ${type} sync successful: ${changedFiles.length} files`);
      
      // Auto push if enabled
      if (this.config.autoPush) {
        await this.performPush(type);
      }
      
    } catch (error) {
      console.error(`❌ ${type} sync failed:`, error.message);
      this.errorCount++;
      await this.handleError('sync', error, type);
    }
  }

  async performPush(type) {
    try {
      console.log(`🚀 Performing ${type} push...`);
      
      // Check if there are commits to push
      const hasCommitsToPush = await this.hasCommitsToPush();
      if (!hasCommitsToPush) {
        return;
      }
      
      // Push to main branch
      await this.pushToMain();
      
      console.log(`✅ ${type} push successful`);
      
    } catch (error) {
      console.error(`❌ ${type} push failed:`, error.message);
      this.errorCount++;
      await this.handleError('push', error, type);
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
        const filePath = file.substring(4); // Remove status prefix (M + space + space)
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

  async commitBatch(files, type) {
    try {
      // Add specific files to staging
      for (const file of files) {
        const filePath = file.substring(4); // Remove status prefix (M + space + space)
        execSync(`git add "${filePath}"`, { 
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
      }
      
      // Create commit
      const commitMessage = this.generateCommitMessage(files, type);
      await this.createCommit(commitMessage);
      
      console.log(`💾 Committed ${type} batch: ${files.length} files`);
      
    } catch (error) {
      throw new Error(`Failed to commit ${type} batch: ${error.message}`);
    }
  }

  generateCommitMessage(files, type) {
    const timestamp = new Date().toISOString();
    const fileCount = files.length;
    const fileNames = files.map(f => f.substring(4)).join(', ');
    
    return `${this.config.commitMessagePrefix} [${type}] ${timestamp} - ${fileCount} files: ${fileNames}`;
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

  async handleError(operation, error, type = 'unknown') {
    console.error(`❌ ${operation} error (${type}):`, error.message);
    
    // Retry logic
    for (let attempt = 1; attempt <= this.config.retryAttempts; attempt++) {
      console.log(`🔄 Retrying ${operation} (${type}) - attempt ${attempt}/${this.config.retryAttempts}...`);
      
      try {
        await new Promise(resolve => setTimeout(resolve, this.config.retryDelay));
        
        if (operation === 'sync') {
          await this.performSync(type);
        } else if (operation === 'push') {
          await this.performPush(type);
        }
        
        console.log(`✅ ${operation} retry successful (${type})`);
        return;
        
      } catch (retryError) {
        console.error(`❌ ${operation} retry ${attempt} failed (${type}):`, retryError.message);
      }
    }
    
    console.error(`❌ ${operation} failed after ${this.config.retryAttempts} attempts (${type})`);
  }

  monitorStatus() {
    const status = {
      id: this.id,
      version: this.version,
      status: this.status,
      lastSync: this.lastSync,
      syncCount: this.syncCount,
      errorCount: this.errorCount,
      fileWatchers: this.fileWatchers.size,
      timestamp: new Date().toISOString()
    };
    
    const statusPath = path.join(__dirname, 'comprehensive-sync-status', 'current-status.json');
    fs.writeFileSync(statusPath, JSON.stringify(status, null, 2));
  }

  performHealthCheck() {
    const health = {
      timestamp: new Date().toISOString(),
      status: this.status,
      syncCount: this.syncCount,
      errorCount: this.errorCount,
      successRate: this.syncCount > 0 ? ((this.syncCount - this.errorCount) / this.syncCount * 100).toFixed(2) : 0,
      lastSync: this.lastSync,
      fileWatchers: this.fileWatchers.size,
      memory: process.memoryUsage(),
      uptime: process.uptime()
    };
    
    const healthPath = path.join(__dirname, 'comprehensive-sync-status', 'health.json');
    fs.writeFileSync(healthPath, JSON.stringify(health, null, 2));
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      syncCount: this.syncCount,
      errorCount: this.errorCount,
      successRate: this.syncCount > 0 ? ((this.syncCount - this.errorCount) / this.syncCount * 100).toFixed(2) : 0,
      lastSync: this.lastSync,
      config: this.config,
      fileWatchers: this.fileWatchers.size
    };
    
    const reportPath = path.join(__dirname, 'comprehensive-sync-reports', `report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('📊 Generated comprehensive sync report');
  }

  getStatus() {
    return {
      id: this.id,
      version: this.version,
      status: this.status,
      lastSync: this.lastSync,
      syncCount: this.syncCount,
      errorCount: this.errorCount,
      successRate: this.syncCount > 0 ? ((this.syncCount - this.errorCount) / this.syncCount * 100).toFixed(2) : 0,
      fileWatchers: this.fileWatchers.size
    };
  }

  async shutdown() {
    console.log('🛑 Shutting down Comprehensive Sync Orchestrator...');
    
    // Close file watchers
    for (const [dirPath, watcher] of this.fileWatchers) {
      watcher.close();
      console.log(`👀 Stopped watching: ${dirPath}`);
    }
    
    this.status = 'stopped';
    console.log('✅ Comprehensive Sync Orchestrator shutdown complete');
  }
}

// Auto-start if run directly
if (require.main === module) {
  const orchestrator = new ComprehensiveSyncOrchestrator();
  
  process.on('SIGINT', async () => {
    console.log('\n🛑 Received SIGINT, shutting down...');
    await orchestrator.shutdown();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\n🛑 Received SIGTERM, shutting down...');
    await orchestrator.shutdown();
    process.exit(0);
  });
  
  orchestrator.initialize().catch(error => {
    console.error('❌ Comprehensive Sync Orchestrator initialization failed:', error);
    process.exit(1);
  });
}

module.exports = ComprehensiveSyncOrchestrator;



