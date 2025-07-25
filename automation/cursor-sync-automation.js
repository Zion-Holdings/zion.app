#!/usr/bin/env node

/**
 * Cursor Sync Automation System
 * Runs every minute to ensure all changes are committed, pushed, and synced
 * across all computers using Cursor
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

class CursorSyncAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.config = this.loadConfig();
    this.logFile = path.join(__dirname, 'logs', 'cursor-sync.log');
    this.ensureLogDirectory();
    this.lastSyncTime = this.getLastSyncTime();
    this.syncInterval = 60000; // 1 minute
    this.maxRetries = 3;
    this.retryDelay = 5000; // 5 seconds
  }

  loadConfig() {
    const configPath = path.join(__dirname, 'cursor-sync-config.json');
    if (fs.existsSync(configPath)) {
      return JSON.parse(fs.readFileSync(configPath, 'utf8'));
    }
    return {
      enabled: true,
      autoCommit: true,
      autoPush: true,
      autoPull: true,
      branch: 'main',
      commitMessageTemplate: '🔄 Auto-sync: {description}',
      maxCommitSize: 50,
      enableLogging: true,
      syncInterval: 60000,
      excludePatterns: [
        'node_modules/**',
        '.next/**',
        'dist/**',
        'build/**',
        '.git/**',
        '*.log',
        '*.tmp',
        '*.cache'
      ],
      includePatterns: [
        'src/**/*',
        'pages/**/*',
        'components/**/*',
        'styles/**/*',
        'public/**/*',
        'automation/**/*',
        '*.json',
        '*.md',
        '*.ts',
        '*.tsx',
        '*.js',
        '*.jsx'
      ]
    };
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'info') {
    if (!this.config.enableLogging) return;

    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;

    try {
      fs.appendFileSync(this.logFile, logEntry);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }

    if (level === 'error') {
      console.error(`❌ ${message}`);
    } else if (level === 'warn') {
      console.warn(`⚠️ ${message}`);
    } else {
      console.log(`ℹ️ ${message}`);
    }
  }

  getLastSyncTime() {
    const syncTimeFile = path.join(__dirname, 'logs', 'last-sync-time.json');
    if (fs.existsSync(syncTimeFile)) {
      try {
        const data = JSON.parse(fs.readFileSync(syncTimeFile, 'utf8'));
        return new Date(data.lastSync);
      } catch (error) {
        this.log(`Error reading last sync time: ${error.message}`, 'warn');
      }
    }
    return new Date(0);
  }

  updateLastSyncTime() {
    const syncTimeFile = path.join(__dirname, 'logs', 'last-sync-time.json');
    const data = { lastSync: new Date().toISOString() };
    fs.writeFileSync(syncTimeFile, JSON.stringify(data, null, 2));
  }

  async checkGitStatus() {
    try {
      const status = execSync('git status --porcelain', { 
        encoding: 'utf8',
        cwd: this.projectRoot 
      });
      return status.trim().split('\n').filter(line => line.length > 0);
    } catch (error) {
      this.log(`Error checking git status: ${error.message}`, 'error');
      return [];
    }
  }

  async checkRemoteChanges() {
    try {
      // Fetch latest changes
      execSync('git fetch origin', { 
        stdio: 'pipe',
        cwd: this.projectRoot 
      });

      // Check if we're behind remote
      const behind = execSync('git rev-list HEAD..origin/main --count', { 
        encoding: 'utf8',
        cwd: this.projectRoot 
      }).trim();

      return parseInt(behind) > 0;
    } catch (error) {
      this.log(`Error checking remote changes: ${error.message}`, 'warn');
      return false;
    }
  }

  async pullChanges() {
    if (!this.config.autoPull) return true;

    try {
      this.log('Pulling latest changes from remote...');
      execSync('git pull origin main', { 
        stdio: 'pipe',
        cwd: this.projectRoot 
      });
      this.log('✅ Successfully pulled changes');
      return true;
    } catch (error) {
      this.log(`Error pulling changes: ${error.message}`, 'error');
      return false;
    }
  }

  async stageChanges(files) {
    try {
      if (files.length === 0) return true;

      // Stage all changes
      execSync('git add .', { 
        stdio: 'pipe',
        cwd: this.projectRoot 
      });
      
      this.log(`Staged ${files.length} changed files`);
      return true;
    } catch (error) {
      this.log(`Error staging files: ${error.message}`, 'error');
      return false;
    }
  }

  generateCommitMessage(files) {
    const fileTypes = this.analyzeFileTypes(files);
    const description = this.generateDescription(fileTypes);
    const timestamp = new Date().toLocaleString();
    
    return this.config.commitMessageTemplate
      .replace('{description}', description)
      .replace('{timestamp}', timestamp)
      .replace('{count}', files.length);
  }

  analyzeFileTypes(files) {
    const types = {};
    files.forEach(file => {
      const ext = path.extname(file);
      const type = this.getFileType(ext);
      types[type] = (types[type] || 0) + 1;
    });
    return types;
  }

  getFileType(ext) {
    const typeMap = {
      '.ts': 'TypeScript',
      '.tsx': 'TypeScript React',
      '.js': 'JavaScript',
      '.jsx': 'JavaScript React',
      '.css': 'CSS',
      '.scss': 'SCSS',
      '.json': 'Configuration',
      '.md': 'Documentation',
      '.html': 'HTML',
      '.py': 'Python',
      '.sh': 'Shell Script'
    };
    return typeMap[ext] || ext.slice(1).toUpperCase();
  }

  generateDescription(fileTypes) {
    const descriptions = [];
    for (const [type, count] of Object.entries(fileTypes)) {
      descriptions.push(`${count} ${type} file${count > 1 ? 's' : ''}`);
    }
    return descriptions.join(', ');
  }

  async commitChanges(message) {
    if (!this.config.autoCommit) return true;

    try {
      execSync(`git commit -m "${message}"`, { 
        stdio: 'pipe',
        cwd: this.projectRoot 
      });
      this.log(`✅ Committed: ${message}`);
      return true;
    } catch (error) {
      this.log(`Error committing: ${error.message}`, 'error');
      return false;
    }
  }

  async pushChanges() {
    if (!this.config.autoPush) return true;

    try {
      this.log('Pushing changes to remote...');
      execSync('git push origin main', { 
        stdio: 'pipe',
        cwd: this.projectRoot 
      });
      this.log('✅ Successfully pushed changes');
      return true;
    } catch (error) {
      this.log(`Error pushing changes: ${error.message}`, 'error');
      return false;
    }
  }

  async resolveConflicts() {
    try {
      // Check for merge conflicts
      const status = execSync('git status --porcelain', { 
        encoding: 'utf8',
        cwd: this.projectRoot 
      });

      if (status.includes('UU') || status.includes('AA')) {
        this.log('⚠️ Merge conflicts detected, attempting to resolve...');
        
        // Abort current merge
        execSync('git merge --abort', { 
          stdio: 'pipe',
          cwd: this.projectRoot 
        });
        
        // Reset to clean state
        execSync('git reset --hard HEAD', { 
          stdio: 'pipe',
          cwd: this.projectRoot 
        });
        
        this.log('✅ Conflicts resolved by resetting to clean state');
        return true;
      }
      
      return true;
    } catch (error) {
      this.log(`Error resolving conflicts: ${error.message}`, 'error');
      return false;
    }
  }

  async performSync() {
    this.log('🔄 Starting Cursor sync automation...');

    try {
      // Check for remote changes first
      const hasRemoteChanges = await this.checkRemoteChanges();
      
      if (hasRemoteChanges) {
        this.log('📥 Remote changes detected, pulling first...');
        const pulled = await this.pullChanges();
        if (!pulled) {
          await this.resolveConflicts();
        }
      }

      // Check for local changes
      const changedFiles = await this.checkGitStatus();
      
      if (changedFiles.length === 0) {
        this.log('📭 No changes to sync');
        this.updateLastSyncTime();
        return true;
      }

      // Stage changes
      const staged = await this.stageChanges(changedFiles);
      if (!staged) {
        this.log('Failed to stage changes', 'error');
        return false;
      }

      // Generate commit message
      const commitMessage = this.generateCommitMessage(changedFiles);

      // Commit changes
      const committed = await this.commitChanges(commitMessage);
      if (!committed) {
        this.log('Failed to commit changes', 'error');
        return false;
      }

      // Push changes
      const pushed = await this.pushChanges();
      if (!pushed) {
        this.log('Failed to push changes', 'error');
        return false;
      }

      this.updateLastSyncTime();
      this.log('✅ Cursor sync completed successfully!');
      return true;

    } catch (error) {
      this.log(`Sync failed: ${error.message}`, 'error');
      return false;
    }
  }

  async runWithRetry() {
    for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
      this.log(`Attempt ${attempt}/${this.maxRetries}`);
      
      const success = await this.performSync();
      if (success) {
        return true;
      }

      if (attempt < this.maxRetries) {
        this.log(`Retrying in ${this.retryDelay}ms...`, 'warn');
        await this.sleep(this.retryDelay);
      }
    }

    this.log('All retry attempts failed', 'error');
    return false;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async startContinuousSync() {
    this.log('🚀 Starting continuous Cursor sync automation...');
    this.log(`Sync interval: ${this.syncInterval}ms (${this.syncInterval / 1000} seconds)`);

    while (true) {
      try {
        await this.runWithRetry();
      } catch (error) {
        this.log(`Unexpected error in sync loop: ${error.message}`, 'error');
      }

      // Wait for next sync interval
      await this.sleep(this.syncInterval);
    }
  }

  async runOnce() {
    this.log('🔄 Running single Cursor sync...');
    return await this.runWithRetry();
  }
}

// Main execution
const cursorSync = new CursorSyncAutomation();
const command = process.argv[2] || 'continuous';

if (command === 'once') {
  cursorSync.runOnce().then(success => {
    process.exit(success ? 0 : 1);
  });
} else if (command === 'continuous') {
  cursorSync.startContinuousSync();
} else {
  console.log('Usage: node cursor-sync-automation.js [once|continuous]');
  process.exit(1);
} 