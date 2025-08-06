#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { spawn, execSync } = require('child_process');

class HighFrequencyGitSync {
  constructor() {
    this.projectRoot = process.cwd();
    this.isRunning = false;
    this.syncCount = 0;
    this.errorCount = 0;
    this.lastSync = null;
    
    this.config = {
      syncInterval: 5000, // 5 seconds
      pushInterval: 30000, // 30 seconds
      maxFilesPerCommit: 10,
      retryAttempts: 3,
      retryDelay: 1000,
      commitMessagePrefix: 'Auto-sync',
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
  }

  async initialize() {
    console.log('🔄 Initializing High Frequency Git Sync...');
    
    try {
      // Check git status
      await this.checkGitStatus();
      
      // Start file watching
      this.startFileWatching();
      
      // Start sync processes
      this.startHighFrequencySync();
      this.startAutoPush();
      
      this.isRunning = true;
      console.log('✅ High Frequency Git Sync initialized successfully');
      
    } catch (error) {
      console.error('❌ Failed to initialize High Frequency Git Sync:', error.message);
      throw error;
    }
  }

  async checkGitStatus() {
    try {
      execSync('git status', { 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      console.log('✅ Git repository status OK');
    } catch (error) {
      throw new Error(`Git repository not accessible: ${error.message}`);
    }
  }

  startFileWatching() {
    console.log('👀 Starting file watching...');
    
    const watchDirs = [
      'pages',
      'components', 
      'utils',
      'styles',
      'scripts',
      'automation'
    ];
    
    watchDirs.forEach(dir => {
      this.watchDirectory(dir);
    });
  }

  watchDirectory(dirPath) {
    const fullPath = path.join(this.projectRoot, dirPath);
    
    try {
      fs.watch(fullPath, { recursive: true }, (eventType, filename) => {
        if (filename) {
          console.log(`📁 File change detected: ${dirPath}/${filename}`);
          this.triggerSync();
        }
      });
      console.log(`👀 Watching: ${fullPath}`);
    } catch (error) {
      console.warn(`⚠️ Could not watch directory ${dirPath}:`, error.message);
    }
  }

  startHighFrequencySync() {
    console.log('🔄 Starting high-frequency sync...');
    
    setInterval(async () => {
      if (this.isRunning) {
        await this.performSync();
      }
    }, this.config.syncInterval);
  }

  startAutoPush() {
    console.log('🚀 Starting auto-push...');
    
    setInterval(async () => {
      if (this.isRunning) {
        await this.performPush();
      }
    }, this.config.pushInterval);
  }

  triggerSync() {
    // Immediate sync on file change
    setTimeout(async () => {
      if (this.isRunning) {
        await this.performSync();
      }
    }, 100);
  }

  async performSync() {
    try {
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

  async commitBatch(files) {
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
    const fileNames = files.map(f => f.substring(4)).join(', ');
    
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

  getStatus() {
    return {
      isRunning: this.isRunning,
      syncCount: this.syncCount,
      errorCount: this.errorCount,
      lastSync: this.lastSync,
      uptime: Date.now() - this.startTime
    };
  }

  async shutdown() {
    console.log('🛑 Shutting down High Frequency Git Sync...');
    this.isRunning = false;
    console.log('✅ High Frequency Git Sync shutdown complete');
  }
}

// Main execution
async function main() {
  const sync = new HighFrequencyGitSync();
  
  // Handle graceful shutdown
  process.on('SIGTERM', async () => {
    console.log('🛑 Received SIGTERM, shutting down...');
    await sync.shutdown();
    process.exit(0);
  });
  
  process.on('SIGINT', async () => {
    console.log('🛑 Received SIGINT, shutting down...');
    await sync.shutdown();
    process.exit(0);
  });
  
  try {
    await sync.initialize();
    
    // Keep the process running
    setInterval(() => {
      const status = sync.getStatus();
      console.log(`📊 Sync Status: ${status.syncCount} syncs, ${status.errorCount} errors`);
    }, 60000); // Log status every minute
    
  } catch (error) {
    console.error('❌ Failed to start High Frequency Git Sync:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = HighFrequencyGitSync;
