const fs = require('fs');
const path = require('path');
const { spawn, execSync } = require('child_process');
const { v4: uuidv4 } = require('uuid');
const cron = require('node-cron');

// Batch processing for optimized file operations
const writeBatch = {
  queue: [],
  maxSize: 100,
  flushInterval: 5000,
  
  add(filePath, content) {
    this.queue.push({ filePath, content, timestamp: Date.now() });
    if (this.queue.length >= this.maxSize) {
      this.flush();
    }
  },
  
  flush() {
    if (this.queue.length === 0) return;
    
    this.queue.forEach(item => {
      try {
        fs.writeFileSync(item.filePath, item.content);
      } catch (error) {
        console.error(`Error writing file ${item.filePath}:`, error.message);
      }
    });
    
    this.queue = [];
  }
};

// Memory optimization for high-speed operation
const memoryOptimization = {
  cache: new Map(),
  cacheTimeout: 30000,
  
  getCached(key) {
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.value;
    }
    return null;
  },
  
  setCached(key, value) {
    this.cache.set(key, { value, timestamp: Date.now() });
    if (this.cache.size > 1000) {
      const now = Date.now();
      for (const [k, v] of this.cache.entries()) {
        if (now - v.timestamp > this.cacheTimeout) {
          this.cache.delete(k);
        }
      }
    }
  }
};

class ComprehensiveSyncOrchestrator {
  constructor() {
    this.id = 'comprehensive-sync-orchestrator';
    this.version = '2.0';
    this.status = 'initializing';
    this.config = {
      commitMessagePrefix: 'Comprehensive-sync',
      includePatterns: [
        'automation/**',
        'pages/**',
        'components/**',
        'utils/**',
        'styles/**',
        'scripts/**'
      ],
      excludePatterns: [
        'automation/logs/**',
        'automation/temp/**',
        'automation/backups/**',
        'automation/reports/**',
        'node_modules/**',
        '.git/**',
        '*.log',
        '*.pid'
      ]
    };
    this.setupDirectories();
  }

  setupDirectories() {
    const directories = [
      'comprehensive-sync-logs',
      'comprehensive-sync-status',
      'comprehensive-sync-reports'
    ];
    
    directories.forEach(dir => {
      const dirPath = path.join(__dirname, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  async initialize() {
    try {
      console.log('🔄 Initializing Comprehensive Sync Orchestrator...');
      await this.checkGitStatus();
      this.status = 'running';
      console.log('✅ Comprehensive Sync Orchestrator initialized successfully');
    } catch (error) {
      console.error('❌ Failed to initialize Comprehensive Sync Orchestrator: ', error.message);
      this.status = 'error';
    }
  }

  async checkGitStatus() {
    try {
      execSync('git status', { stdio: 'pipe' });
      console.log('✅ Git repository status OK');
    } catch (error) {
      console.error('❌ Git repository status check failed: ', error.message);
    }
  }

  async start() {
    console.log('👀 Starting comprehensive file watching...');
    const watchDirs = [
      'pages',
      'components',
      'utils',
      'styles',
      'scripts',
      'automation'
    ];
    
    console.log('🔄 Starting high-frequency sync...');
    console.log('🔄 Starting standard sync...');
    console.log('🔄 Starting backup sync...');
    console.log('🚀 Starting auto-push...');
    
    // Start monitoring
    this.startMonitoring();
  }

  async performHighFrequencySync() {
    try {
      console.log('🔄 Performing high-frequency sync...');
      const changedFiles = this.getChangedFiles();
      
      if (changedFiles.length > 0) {
        execSync('git add .', { stdio: 'pipe' });
        
        const commitMessage = `${this.config.commitMessagePrefix}: High-freq ${new Date().toISOString()} - ${changedFiles.length} files`;
        execSync(`git commit -m "${commitMessage}"`, { stdio: 'pipe' });
        console.log('✅ High-frequency sync successful');
      } else {
        console.log('✅ No changes for high-frequency sync');
      }
    } catch (error) {
      console.error('❌ High-frequency sync failed: ', error.message);
      await this.handleError('high-freq-sync', error);
    }
  }

  async performStandardSync() {
    try {
      console.log('🔄 Performing standard sync...');
      const changedFiles = this.getChangedFiles();
      
      if (changedFiles.length > 0) {
        execSync('git add .', { stdio: 'pipe' });
        
        const commitMessage = `${this.config.commitMessagePrefix}: Standard ${new Date().toISOString()} - ${changedFiles.length} files`;
        execSync(`git commit -m "${commitMessage}"`, { stdio: 'pipe' });
        console.log('✅ Standard sync successful');
      } else {
        console.log('✅ No changes for standard sync');
      }
    } catch (error) {
      console.error('❌ Standard sync failed: ', error.message);
      await this.handleError('standard-sync', error);
    }
  }

  async performBackupSync() {
    try {
      console.log('🔄 Performing backup sync...');
      const changedFiles = this.getChangedFiles();
      
      if (changedFiles.length > 0) {
        execSync('git add .', { stdio: 'pipe' });
        
        const commitMessage = `${this.config.commitMessagePrefix}: Backup ${new Date().toISOString()} - ${changedFiles.length} files`;
        execSync(`git commit -m "${commitMessage}"`, { stdio: 'pipe' });
        console.log('✅ Backup sync successful');
      } else {
        console.log('✅ No changes for backup sync');
      }
    } catch (error) {
      console.error('❌ Backup sync failed: ', error.message);
      await this.handleError('backup-sync', error);
    }
  }

  async performAutoPush() {
    try {
      console.log('🚀 Performing auto-push...');
      
      const commitsToPush = execSync('git log --oneline origin/main..HEAD', {
        encoding: 'utf8'
      });
      
      if (commitsToPush.trim()) {
        execSync('git push origin main', { stdio: 'pipe' });
        console.log('✅ Auto-push successful');
      } else {
        console.log('✅ No commits to push');
      }
    } catch (error) {
      console.error('❌ Auto-push failed: ', error.message);
      await this.handleError('push', error);
    }
  }

  getChangedFiles() {
    try {
      const status = execSync('git status --porcelain', {
        encoding: 'utf8'
      });
      const files = status.trim().split('\n').filter(line => line.trim());
      return files.map(file => file.substring(3));
    } catch (error) {
      console.error('❌ Error getting changed files: ', error.message);
      return [];
    }
  }

  shouldIncludeFile(filePath) {
    return this.config.includePatterns.some(pattern => {
      const regex = new RegExp(pattern.replace(/\*\*/g, '.*').replace(/\*/g, '[^/]*'));
      return regex.test(filePath);
    });
  }

  shouldExcludeFile(filePath) {
    return this.config.excludePatterns.some(pattern => {
      const regex = new RegExp(pattern.replace(/\*\*/g, '.*').replace(/\*/g, '[^/]*'));
      return regex.test(filePath);
    });
  }

  async handleError(operation, error) {
    console.error(`❌ Error in ${operation}:`, error.message);
    
    const errorLog = {
      timestamp: new Date().toISOString(),
      operation,
      error: error.message,
      stack: error.stack
    };
    
    const errorPath = path.join(__dirname, 'comprehensive-sync-logs', `error-${Date.now()}.json`);
    fs.writeFileSync(errorPath, JSON.stringify(errorLog, null, 2));
    
    if (operation === 'high-freq-sync') {
      // Retry high-frequency sync after error
      setTimeout(() => this.performHighFrequencySync(), 3000);
    } else if (operation === 'standard-sync') {
      // Retry standard sync after error
      setTimeout(() => this.performStandardSync(), 15000);
    } else if (operation === 'backup-sync') {
      // Retry backup sync after error
      setTimeout(() => this.performBackupSync(), 60000);
    } else if (operation === 'push') {
      // Retry push after error
      setTimeout(() => this.performAutoPush(), 30000);
    }
  }

  startMonitoring() {
    // Set up high-frequency monitoring (every 3 seconds)
    setInterval(() => {
      this.performHighFrequencySync();
    }, 3000);
    
    // Set up standard monitoring (every 15 seconds)
    setInterval(() => {
      this.performStandardSync();
    }, 15000);
    
    // Set up backup monitoring (every 60 seconds)
    setInterval(() => {
      this.performBackupSync();
    }, 60000);
    
    // Set up auto-push monitoring (every 30 seconds)
    setInterval(() => {
      this.performAutoPush();
    }, 30000);
  }

  generateReport() {
    const statusPath = path.join(__dirname, 'comprehensive-sync-status', 'current-status.json');
    
    const report = {
      timestamp: new Date().toISOString(),
      status: this.status,
      version: this.version,
      uptime: process.uptime()
    };
    
    fs.writeFileSync(statusPath, JSON.stringify(report, null, 2));
    console.log('📊 Generated comprehensive sync report');
  }

  async shutdown() {
    console.log('🛑 Shutting down Comprehensive Sync Orchestrator...');
    this.status = 'stopped';
    this.generateReport();
    console.log('✅ Comprehensive Sync Orchestrator shutdown complete');
  }
}

// Signal handlers
process.on('SIGTERM', async () => {
  console.log('🛑 Received SIGTERM, shutting down...');
  await orchestrator.shutdown();
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('🛑 Received SIGINT, shutting down...');
  await orchestrator.shutdown();
  process.exit(0);
});

// Initialize and start
const orchestrator = new ComprehensiveSyncOrchestrator();

orchestrator.initialize().then(() => {
  orchestrator.start();
}).catch(error => {
  console.error('❌ Failed to start Comprehensive Sync Orchestrator: ', error.message);
  process.exit(1);
});
