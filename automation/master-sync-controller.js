#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn, exec, execSync } = require('child_process');
const { v4: uuidv4 } = require('uuid');

class MasterSyncController {
  constructor() {
    this.id = 'master-sync-controller';
    this.version = '5.0.0';
    this.status = 'initializing';
    this.projectRoot = process.cwd();
    this.lastSync = null;
    this.syncCount = 0;
    this.errorCount = 0;
    this.processes = new Map();
    this.config = {
      // Sync intervals
      ultraHighFreqInterval: 1000, // 1 second
      highFreqInterval: 3000, // 3 seconds
      standardInterval: 10000, // 10 seconds
      backupInterval: 30000, // 30 seconds
      
      // Push intervals
      ultraHighFreqPushInterval: 5000, // 5 seconds
      highFreqPushInterval: 10000, // 10 seconds
      standardPushInterval: 20000, // 20 seconds
      backupPushInterval: 60000, // 1 minute
      
      // File watching
      watchDirectories: [
        'pages',
        'components',
        'utils',
        'styles',
        'scripts',
        'automation',
        'public',
        'hooks',
        'data'
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
        'automation/master-reports/**',
        'automation/intelligence-reports/**',
        'automation/orchestration-reports/**',
        'automation/control-reports/**',
        'automation/diversification-reports/**',
        'automation/ultimate-*/**'
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
        '**/*.gif',
        '**/*.ico',
        '**/*.webmanifest'
      ],
      
      // Commit settings
      maxFilesPerCommit: 10,
      commitMessagePrefix: 'Auto-sync',
      autoPush: true,
      retryAttempts: 10,
      retryDelay: 1000,
      
      // Performance
      enableUltraHighFreqSync: true,
      enableHighFreqSync: true,
      enableStandardSync: true,
      enableBackupSync: true,
      enableFileWatching: true,
      
      // Monitoring
      healthCheckInterval: 5000, // 5 seconds
      reportInterval: 60000, // 1 minute
      
      // Process management
      maxConcurrentProcesses: 4,
      processRestartDelay: 5000
    };
    
    this.ensureDirectories();
  }

  ensureDirectories() {
    const directories = [
      'master-sync-logs',
      'master-sync-status',
      'master-sync-reports',
      'master-sync-backups',
      'master-sync-pids'
    ];

    directories.forEach(dir => {
      const dirPath = path.join(__dirname, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  async initialize() {
    console.log('🚀 Initializing Master Sync Controller...');
    
    try {
      // Check git status
      await this.checkGitStatus();
      
      // Start all sync processes
      this.startAllSyncProcesses();
      
      // Start file watching
      if (this.config.enableFileWatching) {
        this.startFileWatching();
      }
      
      // Start monitoring
      this.startMonitoring();
      this.startHealthChecks();
      this.startReporting();
      this.startProcessManagement();
      
      this.status = 'running';
      console.log('✅ Master Sync Controller initialized successfully');
      
    } catch (error) {
      console.error('❌ Error initializing Master Sync Controller:', error);
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

  startAllSyncProcesses() {
    console.log('⚡ Starting all sync processes...');
    
    if (this.config.enableUltraHighFreqSync) {
      this.startSyncProcess('ultra-high-freq', this.config.ultraHighFreqInterval, this.config.ultraHighFreqPushInterval);
    }
    
    if (this.config.enableHighFreqSync) {
      this.startSyncProcess('high-freq', this.config.highFreqInterval, this.config.highFreqPushInterval);
    }
    
    if (this.config.enableStandardSync) {
      this.startSyncProcess('standard', this.config.standardInterval, this.config.standardPushInterval);
    }
    
    if (this.config.enableBackupSync) {
      this.startSyncProcess('backup', this.config.backupInterval, this.config.backupPushInterval);
    }
  }

  startSyncProcess(type, syncInterval, pushInterval) {
    console.log(`🔄 Starting ${type} sync process...`);
    
    const interval = setInterval(async () => {
      await this.performSync(type);
    }, syncInterval);
    
    const pushIntervalTimer = setInterval(async () => {
      await this.performPush(type);
    }, pushInterval);
    
    this.processes.set(type, {
      syncInterval,
      pushInterval,
      syncTimer: interval,
      pushTimer: pushIntervalTimer,
      lastSync: null,
      syncCount: 0,
      errorCount: 0
    });
    
    console.log(`✅ ${type} sync process started`);
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
      
      console.log(`👀 Watching directory: ${dirPath}`);
      
    } catch (error) {
      console.error(`❌ Error watching directory ${dirPath}:`, error.message);
    }
  }

  triggerImmediateSync() {
    // Trigger immediate sync when file changes are detected
    setTimeout(async () => {
      await this.performSync('immediate');
    }, 100); // Wait 100ms to batch changes
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
      
      // Update process stats
      const process = this.processes.get(type);
      if (process) {
        process.lastSync = new Date().toISOString();
        process.syncCount++;
      }
      
      console.log(`✅ ${type} sync successful: ${changedFiles.length} files`);
      
    } catch (error) {
      console.error(`❌ ${type} sync failed:`, error.message);
      this.errorCount++;
      
      // Update process stats
      const process = this.processes.get(type);
      if (process) {
        process.errorCount++;
      }
      
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

  startProcessManagement() {
    console.log('⚙️  Starting process management...');
    
    setInterval(() => {
      this.manageProcesses();
    }, 30000); // Every 30 seconds
  }

  manageProcesses() {
    // Check if any processes need restarting
    for (const [type, process] of this.processes) {
      if (process.errorCount > 5) {
        console.log(`🔄 Restarting ${type} process due to high error count`);
        this.restartProcess(type);
      }
    }
  }

  restartProcess(type) {
    const process = this.processes.get(type);
    if (process) {
      // Clear existing timers
      clearInterval(process.syncTimer);
      clearInterval(process.pushTimer);
      
      // Reset error count
      process.errorCount = 0;
      
      // Restart the process
      this.startSyncProcess(type, process.syncInterval, process.pushInterval);
      
      console.log(`✅ ${type} process restarted`);
    }
  }

  monitorStatus() {
    const status = {
      id: this.id,
      version: this.version,
      status: this.status,
      lastSync: this.lastSync,
      syncCount: this.syncCount,
      errorCount: this.errorCount,
      processes: Array.from(this.processes.keys()),
      timestamp: new Date().toISOString()
    };
    
    const statusPath = path.join(__dirname, 'master-sync-status', 'current-status.json');
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
      processes: Object.fromEntries(
        Array.from(this.processes.entries()).map(([type, process]) => [
          type,
          {
            syncCount: process.syncCount,
            errorCount: process.errorCount,
            lastSync: process.lastSync
          }
        ])
      ),
      memory: process.memoryUsage(),
      uptime: process.uptime()
    };
    
    const healthPath = path.join(__dirname, 'master-sync-status', 'health.json');
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
      processes: Object.fromEntries(
        Array.from(this.processes.entries()).map(([type, process]) => [
          type,
          {
            syncCount: process.syncCount,
            errorCount: process.errorCount,
            lastSync: process.lastSync
          }
        ])
      )
    };
    
    const reportPath = path.join(__dirname, 'master-sync-reports', `report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log('📊 Generated master sync report');
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
      processes: this.processes.size
    };
  }

  async shutdown() {
    console.log('🛑 Shutting down Master Sync Controller...');
    
    // Stop all processes
    for (const [type, process] of this.processes) {
      clearInterval(process.syncTimer);
      clearInterval(process.pushTimer);
      console.log(`🛑 Stopped ${type} process`);
    }
    
    this.status = 'stopped';
    console.log('✅ Master Sync Controller shutdown complete');
  }
}

// Auto-start if run directly
if (require.main === module) {
  const controller = new MasterSyncController();
  
  process.on('SIGINT', async () => {
    console.log('\n🛑 Received SIGINT, shutting down...');
    await controller.shutdown();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\n🛑 Received SIGTERM, shutting down...');
    await controller.shutdown();
    process.exit(0);
  });
  
  controller.initialize().catch(error => {
    console.error('❌ Master Sync Controller initialization failed:', error);
    process.exit(1);
  });
}

module.exports = MasterSyncController;
