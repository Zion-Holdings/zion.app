#!/usr/bin/env node

/**
 * Cursor Sync Orchestrator
 * Manages and coordinates cursor sync automation across multiple computers
 * Provides centralized control, monitoring, and conflict resolution
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

class CursorSyncOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.config = this.loadConfig();
    this.logFile = path.join(__dirname, 'logs', 'cursor-sync-orchestrator.log');
    this.ensureLogDirectory();
    this.syncState = this.loadSyncState();
    this.computers = this.loadComputerRegistry();
    this.syncQueue = [];
    this.isRunning = false;
  }

  loadConfig() {
    const configPath = path.join(__dirname, 'cursor-sync-orchestrator-config.json');
    if (fs.existsSync(configPath)) {
      return JSON.parse(fs.readFileSync(configPath, 'utf8'));
    }
    return {
      enabled: true,
      syncInterval: 60000, // 1 minute
      maxConcurrentSyncs: 1,
      conflictResolution: 'auto',
      enableNotifications: true,
      enableMetrics: true,
      syncTimeout: 30000, // 30 seconds
      retryAttempts: 3,
      retryDelay: 5000,
      computerId: this.generateComputerId(),
      centralRepository: 'origin',
      branch: 'main'
    };
  }

  loadSyncState() {
    const stateFile = path.join(__dirname, 'logs', 'sync-state.json');
    if (fs.existsSync(stateFile)) {
      try {
        return JSON.parse(fs.readFileSync(stateFile, 'utf8'));
      } catch (error) {
        this.log(`Error loading sync state: ${error.message}`, 'warn');
      }
    }
    return {
      lastSync: null,
      lastComputerSync: {},
      pendingChanges: [],
      conflicts: [],
      syncHistory: []
    };
  }

  loadComputerRegistry() {
    const registryFile = path.join(__dirname, 'logs', 'computer-registry.json');
    if (fs.existsSync(registryFile)) {
      try {
        return JSON.parse(fs.readFileSync(registryFile, 'utf8'));
      } catch (error) {
        this.log(`Error loading computer registry: ${error.message}`, 'warn');
      }
    }
    return {};
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  generateComputerId() {
    const os = require('os');
    const hostname = os.hostname();
    const platform = os.platform();
    const arch = os.arch();
    const hash = crypto.createHash('md5').update(`${hostname}-${platform}-${arch}`).digest('hex');
    return hash.substring(0, 8);
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level.toUpperCase()}] [${this.config.computerId}] ${message}\n`;

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

  saveSyncState() {
    const stateFile = path.join(__dirname, 'logs', 'sync-state.json');
    try {
      fs.writeFileSync(stateFile, JSON.stringify(this.syncState, null, 2));
    } catch (error) {
      this.log(`Error saving sync state: ${error.message}`, 'error');
    }
  }

  saveComputerRegistry() {
    const registryFile = path.join(__dirname, 'logs', 'computer-registry.json');
    try {
      fs.writeFileSync(registryFile, JSON.stringify(this.computers, null, 2));
    } catch (error) {
      this.log(`Error saving computer registry: ${error.message}`, 'error');
    }
  }

  registerComputer() {
    const os = require('os');
    const computerInfo = {
      id: this.config.computerId,
      hostname: os.hostname(),
      platform: os.platform(),
      arch: os.arch(),
      lastSeen: new Date().toISOString(),
      version: require('../package.json').version || 'unknown'
    };

    this.computers[this.config.computerId] = computerInfo;
    this.saveComputerRegistry();
    this.log(`Registered computer: ${computerInfo.hostname} (${this.config.computerId})`);
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
      execSync('git fetch origin', { 
        stdio: 'pipe',
        cwd: this.projectRoot 
      });

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
    const computerId = this.config.computerId;
    
    // Use conventional commit format to pass husky validation
    return `chore(sync): auto-sync ${description} (${files.length} files) - ${computerId} - ${timestamp}`;
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
      const status = execSync('git status --porcelain', { 
        encoding: 'utf8',
        cwd: this.projectRoot 
      });

      if (status.includes('UU') || status.includes('AA')) {
        this.log('⚠️ Merge conflicts detected, attempting to resolve...');
        
        // Record conflict in sync state
        this.syncState.conflicts.push({
          timestamp: new Date().toISOString(),
          computerId: this.config.computerId,
          status: status
        });
        
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
    this.log('🔄 Starting orchestrated sync...');

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
        this.updateSyncState();
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

      this.updateSyncState();
      this.log('✅ Orchestrated sync completed successfully!');
      return true;

    } catch (error) {
      this.log(`Sync failed: ${error.message}`, 'error');
      return false;
    }
  }

  updateSyncState() {
    this.syncState.lastSync = new Date().toISOString();
    this.syncState.lastComputerSync[this.config.computerId] = new Date().toISOString();
    
    // Update computer registry
    if (this.computers[this.config.computerId]) {
      this.computers[this.config.computerId].lastSeen = new Date().toISOString();
    }
    
    this.saveSyncState();
    this.saveComputerRegistry();
  }

  async runWithRetry() {
    for (let attempt = 1; attempt <= this.config.retryAttempts; attempt++) {
      this.log(`Attempt ${attempt}/${this.config.retryAttempts}`);
      
      const success = await this.performSync();
      if (success) {
        return true;
      }

      if (attempt < this.config.retryAttempts) {
        this.log(`Retrying in ${this.config.retryDelay}ms...`, 'warn');
        await this.sleep(this.config.retryDelay);
      }
    }

    this.log('All retry attempts failed', 'error');
    return false;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async startOrchestrator() {
    this.log('🚀 Starting Cursor Sync Orchestrator...');
    this.registerComputer();

    while (true) {
      try {
        if (!this.isRunning) {
          this.isRunning = true;
          await this.runWithRetry();
          this.isRunning = false;
        }
      } catch (error) {
        this.log(`Unexpected error in orchestrator loop: ${error.message}`, 'error');
        this.isRunning = false;
      }

      // Wait for next sync interval
      await this.sleep(this.config.syncInterval);
    }
  }

  async runOnce() {
    this.log('🔄 Running single orchestrated sync...');
    this.registerComputer();
    return await this.runWithRetry();
  }

  getStatus() {
    return {
      computerId: this.config.computerId,
      isRunning: this.isRunning,
      lastSync: this.syncState.lastSync,
      registeredComputers: Object.keys(this.computers).length,
      conflicts: this.syncState.conflicts.length,
      config: this.config
    };
  }
}

// Main execution
const orchestrator = new CursorSyncOrchestrator();
const command = process.argv[2] || 'continuous';

if (command === 'once') {
  orchestrator.runOnce().then(success => {
    process.exit(success ? 0 : 1);
  });
} else if (command === 'continuous') {
  orchestrator.startOrchestrator();
} else if (command === 'status') {
  console.log(JSON.stringify(orchestrator.getStatus(), null, 2));
} else {
  console.log('Usage: node cursor-sync-orchestrator.js [once|continuous|status]');
  process.exit(1);
} 