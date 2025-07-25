#!/usr/bin/env node

/**
 * Enhanced Cursor Sync Automation System
 * Advanced commit, push, and sync automation for multi-computer Cursor usage
 * Runs every minute to prevent unsynced changes accumulation
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn, exec } = require('child_process');
const crypto = require('crypto');

class EnhancedCursorSyncAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.config = this.loadConfig();
    this.logFile = path.join(__dirname, 'logs', 'enhanced-cursor-sync.log');
    this.ensureLogDirectory();
    this.lastSyncTime = this.getLastSyncTime();
    this.syncInterval = 60000; // 1 minute
    this.maxRetries = 5;
    this.retryDelay = 3000; // 3 seconds
    this.computerId = this.getComputerId();
    this.isRunning = false;
    this.syncQueue = [];
    this.conflictResolutionAttempts = 0;
    this.maxConflictResolutions = 3;
  }

  loadConfig() {
    const configPath = path.join(__dirname, 'enhanced-cursor-sync-config.json');
    if (fs.existsSync(configPath)) {
      return JSON.parse(fs.readFileSync(configPath, 'utf8'));
    }
    return {
      enabled: true,
      autoCommit: true,
      autoPush: true,
      autoPull: true,
      branch: 'main',
      commitMessageTemplate: '🔄 Auto-sync [{computer}] {description}',
      maxCommitSize: 100,
      enableLogging: true,
      syncInterval: 60000,
      enableConflictResolution: true,
      enableBackup: true,
      enableMetrics: true,
      enableHealthCheck: true,
      excludePatterns: [
        'node_modules/**',
        '.next/**',
        'dist/**',
        'build/**',
        '.git/**',
        '*.log',
        '*.tmp',
        '*.cache',
        'coverage/**',
        'cypress/videos/**',
        'cypress/screenshots/**',
        'playwright-report/**',
        'test-results/**',
        'temp/**',
        'backups/**',
        'logs/**'
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
        '*.jsx',
        '*.css',
        '*.scss',
        '*.html'
      ],
      priorityFiles: [
        'package.json',
        'package-lock.json',
        'yarn.lock',
        'next.config.js',
        'tailwind.config.js',
        'tsconfig.json',
        'README.md'
      ]
    };
  }

  getComputerId() {
    const os = require('os');
    const hostname = os.hostname();
    const platform = os.platform();
    return `${platform}-${hostname}`;
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
    const logEntry = `[${timestamp}] [${level.toUpperCase()}] [${this.computerId}] ${message}\n`;

    try {
      fs.appendFileSync(this.logFile, logEntry);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }

    if (level === 'error') {
      console.error(`❌ [${this.computerId}] ${message}`);
    } else if (level === 'warn') {
      console.warn(`⚠️ [${this.computerId}] ${message}`);
    } else {
      console.log(`ℹ️ [${this.computerId}] ${message}`);
    }
  }

  getLastSyncTime() {
    const syncTimeFile = path.join(__dirname, 'logs', 'last-sync-time.json');
    if (fs.existsSync(syncTimeFile)) {
      try {
        const data = JSON.parse(fs.readFileSync(syncTimeFile, 'utf8'));
        return data.lastSync;
      } catch (error) {
        this.log(`Error reading last sync time: ${error.message}`, 'error');
      }
    }
    return null;
  }

  updateLastSyncTime() {
    const syncTimeFile = path.join(__dirname, 'logs', 'last-sync-time.json');
    const data = {
      lastSync: new Date().toISOString(),
      computerId: this.computerId,
      branch: this.config.branch
    };
    fs.writeFileSync(syncTimeFile, JSON.stringify(data, null, 2));
  }

  async executeCommand(command, options = {}) {
    return new Promise((resolve, reject) => {
      exec(command, {
        cwd: this.projectRoot,
        maxBuffer: 1024 * 1024 * 10, // 10MB buffer
        ...options
      }, (error, stdout, stderr) => {
        if (error) {
          reject({ error, stdout, stderr });
        } else {
          resolve({ stdout, stderr });
        }
      });
    });
  }

  async checkGitStatus() {
    try {
      const { stdout } = await this.executeCommand('git status --porcelain');
      return stdout.trim().split('\n').filter(line => line.length > 0);
    } catch (error) {
      this.log(`Error checking git status: ${error.error.message}`, 'error');
      return [];
    }
  }

  async checkRemoteChanges() {
    try {
      await this.executeCommand('git fetch origin');
      const { stdout } = await this.executeCommand(`git log HEAD..origin/${this.config.branch} --oneline`);
      return stdout.trim().split('\n').filter(line => line.length > 0);
    } catch (error) {
      this.log(`Error checking remote changes: ${error.error.message}`, 'error');
      return [];
    }
  }

  async pullChanges() {
    try {
      this.log('Pulling latest changes from remote...');
      const { stdout, stderr } = await this.executeCommand(`git pull origin ${this.config.branch}`);
      this.log(`Pull completed: ${stdout}`);
      if (stderr) {
        this.log(`Pull stderr: ${stderr}`, 'warn');
      }
      return true;
    } catch (error) {
      this.log(`Error pulling changes: ${error.error.message}`, 'error');
      if (error.stdout) this.log(`Pull stdout: ${error.stdout}`);
      if (error.stderr) this.log(`Pull stderr: ${error.stderr}`);
      return false;
    }
  }

  filterFiles(files) {
    if (!files || files.length === 0) return [];

    return files.filter(file => {
      const status = file.substring(0, 2).trim();
      const filePath = file.substring(3);
      
      // Skip if file matches exclude patterns
      for (const pattern of this.config.excludePatterns) {
        if (this.matchesPattern(filePath, pattern)) {
          return false;
        }
      }

      // Include if file matches include patterns or is a priority file
      for (const pattern of this.config.includePatterns) {
        if (this.matchesPattern(filePath, pattern)) {
          return true;
        }
      }

      // Always include priority files
      return this.config.priorityFiles.some(priorityFile => 
        filePath.includes(priorityFile)
      );
    });
  }

  matchesPattern(filePath, pattern) {
    const minimatch = require('minimatch');
    return minimatch(filePath, pattern);
  }

  async stageChanges(files) {
    if (!files || files.length === 0) {
      this.log('No files to stage');
      return false;
    }

    try {
      this.log(`Staging ${files.length} files...`);
      
      // Stage files in batches to avoid command line length limits
      const batchSize = 50;
      for (let i = 0; i < files.length; i += batchSize) {
        const batch = files.slice(i, i + batchSize);
        const filePaths = batch.map(file => file.substring(3)).join(' ');
        await this.executeCommand(`git add ${filePaths}`);
      }
      
      this.log(`Successfully staged ${files.length} files`);
      return true;
    } catch (error) {
      this.log(`Error staging files: ${error.error.message}`, 'error');
      return false;
    }
  }

  generateCommitMessage(files) {
    const fileTypes = this.analyzeFileTypes(files);
    const description = this.generateDescription(fileTypes);
    const computerTag = `[${this.computerId}]`;
    
    return this.config.commitMessageTemplate
      .replace('{computer}', computerTag)
      .replace('{description}', description);
  }

  analyzeFileTypes(files) {
    const fileTypes = {};
    
    files.forEach(file => {
      const filePath = file.substring(3);
      const ext = path.extname(filePath).toLowerCase();
      const type = this.getFileType(ext);
      
      if (!fileTypes[type]) {
        fileTypes[type] = 0;
      }
      fileTypes[type]++;
    });
    
    return fileTypes;
  }

  getFileType(ext) {
    const typeMap = {
      '.ts': 'TypeScript',
      '.tsx': 'React TypeScript',
      '.js': 'JavaScript',
      '.jsx': 'React JavaScript',
      '.css': 'CSS',
      '.scss': 'SCSS',
      '.html': 'HTML',
      '.json': 'JSON',
      '.md': 'Markdown',
      '.py': 'Python',
      '.sh': 'Shell',
      '.yml': 'YAML',
      '.yaml': 'YAML',
      '.xml': 'XML',
      '.svg': 'SVG',
      '.png': 'Image',
      '.jpg': 'Image',
      '.jpeg': 'Image',
      '.gif': 'Image',
      '.ico': 'Icon'
    };
    
    return typeMap[ext] || 'Other';
  }

  generateDescription(fileTypes) {
    const entries = Object.entries(fileTypes);
    if (entries.length === 0) return 'miscellaneous changes';
    
    const descriptions = entries.map(([type, count]) => {
      if (count === 1) return type;
      return `${count} ${type} files`;
    });
    
    if (descriptions.length === 1) {
      return descriptions[0];
    } else if (descriptions.length === 2) {
      return `${descriptions[0]} and ${descriptions[1]}`;
    } else {
      const last = descriptions.pop();
      return `${descriptions.join(', ')}, and ${last}`;
    }
  }

  async commitChanges(message) {
    try {
      this.log(`Committing changes: ${message}`);
      const { stdout } = await this.executeCommand(`git commit -m "${message}"`);
      this.log(`Commit successful: ${stdout.trim()}`);
      return true;
    } catch (error) {
      this.log(`Error committing changes: ${error.error.message}`, 'error');
      return false;
    }
  }

  async pushChanges() {
    try {
      this.log('Pushing changes to remote...');
      const { stdout, stderr } = await this.executeCommand(`git push origin ${this.config.branch}`);
      this.log(`Push successful: ${stdout.trim()}`);
      if (stderr) {
        this.log(`Push stderr: ${stderr}`, 'warn');
      }
      return true;
    } catch (error) {
      this.log(`Error pushing changes: ${error.error.message}`, 'error');
      if (error.stdout) this.log(`Push stdout: ${error.stdout}`);
      if (error.stderr) this.log(`Push stderr: ${error.stderr}`);
      return false;
    }
  }

  async resolveConflicts() {
    if (this.conflictResolutionAttempts >= this.maxConflictResolutions) {
      this.log('Maximum conflict resolution attempts reached', 'error');
      return false;
    }

    this.conflictResolutionAttempts++;
    this.log(`Attempting conflict resolution (attempt ${this.conflictResolutionAttempts}/${this.maxConflictResolutions})`);

    try {
      // Check for merge conflicts
      const { stdout } = await this.executeCommand('git status --porcelain');
      const hasConflicts = stdout.includes('UU') || stdout.includes('AA') || stdout.includes('DD');
      
      if (!hasConflicts) {
        this.log('No conflicts detected');
        return true;
      }

      // Try to resolve conflicts automatically
      await this.executeCommand('git add .');
      await this.executeCommand('git commit -m "🔄 Auto-resolve conflicts"');
      
      this.log('Conflicts resolved automatically');
      return true;
    } catch (error) {
      this.log(`Conflict resolution failed: ${error.error.message}`, 'error');
      return false;
    }
  }

  async createBackup() {
    if (!this.config.enableBackup) return true;

    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupDir = path.join(__dirname, 'backups', `sync-backup-${timestamp}`);
      
      if (!fs.existsSync(path.dirname(backupDir))) {
        fs.mkdirSync(path.dirname(backupDir), { recursive: true });
      }

      // Create a temporary commit for backup
      const { stdout } = await this.executeCommand('git status --porcelain');
      if (stdout.trim()) {
        await this.executeCommand('git add .');
        await this.executeCommand(`git commit -m "🔄 Backup before sync - ${timestamp}"`);
      }

      // Create backup branch
      const backupBranch = `backup-${timestamp}`;
      await this.executeCommand(`git checkout -b ${backupBranch}`);
      await this.executeCommand(`git checkout ${this.config.branch}`);

      this.log(`Backup created: ${backupBranch}`);
      return true;
    } catch (error) {
      this.log(`Backup creation failed: ${error.error.message}`, 'warn');
      return false;
    }
  }

  async performSync() {
    if (this.isRunning) {
      this.log('Sync already in progress, skipping...', 'warn');
      return false;
    }

    this.isRunning = true;
    const startTime = Date.now();

    try {
      this.log('🔄 Starting enhanced cursor sync...');

      // Check for changes
      const changedFiles = await this.checkGitStatus();
      const filteredFiles = this.filterFiles(changedFiles);

      if (filteredFiles.length === 0) {
        this.log('No changes to sync');
        this.updateLastSyncTime();
        return true;
      }

      this.log(`Found ${filteredFiles.length} files to sync`);

      // Create backup if enabled
      if (this.config.enableBackup) {
        await this.createBackup();
      }

      // Check for remote changes
      const remoteChanges = await this.checkRemoteChanges();
      if (remoteChanges.length > 0) {
        this.log(`Found ${remoteChanges.length} remote changes, pulling first...`);
        const pullSuccess = await this.pullChanges();
        if (!pullSuccess) {
          this.log('Failed to pull remote changes', 'error');
          return false;
        }
      }

      // Stage changes
      const stageSuccess = await this.stageChanges(filteredFiles);
      if (!stageSuccess) {
        this.log('Failed to stage changes', 'error');
        return false;
      }

      // Generate commit message
      const commitMessage = this.generateCommitMessage(filteredFiles);

      // Commit changes
      const commitSuccess = await this.commitChanges(commitMessage);
      if (!commitSuccess) {
        this.log('Failed to commit changes', 'error');
        return false;
      }

      // Push changes
      const pushSuccess = await this.pushChanges();
      if (!pushSuccess) {
        this.log('Failed to push changes', 'error');
        return false;
      }

      const duration = Date.now() - startTime;
      this.log(`✅ Enhanced cursor sync completed successfully in ${duration}ms`);
      this.updateLastSyncTime();
      this.updateMetrics(true, duration, filteredFiles.length);
      
      return true;

    } catch (error) {
      const duration = Date.now() - startTime;
      this.log(`❌ Enhanced cursor sync failed after ${duration}ms: ${error.message}`, 'error');
      this.updateMetrics(false, duration, 0);
      
      // Try conflict resolution
      if (this.config.enableConflictResolution) {
        return await this.resolveConflicts();
      }
      
      return false;
    } finally {
      this.isRunning = false;
      this.conflictResolutionAttempts = 0;
    }
  }

  updateMetrics(success, duration, filesCount) {
    if (!this.config.enableMetrics) return;

    try {
      const metricsFile = path.join(__dirname, 'metrics', 'enhanced-sync-metrics.json');
      const metricsDir = path.dirname(metricsFile);
      
      if (!fs.existsSync(metricsDir)) {
        fs.mkdirSync(metricsDir, { recursive: true });
      }

      let metrics = {
        totalSyncs: 0,
        successfulSyncs: 0,
        failedSyncs: 0,
        totalDuration: 0,
        averageDuration: 0,
        totalFiles: 0,
        lastSync: null,
        computerStats: {},
        dailyStats: {}
      };

      if (fs.existsSync(metricsFile)) {
        metrics = JSON.parse(fs.readFileSync(metricsFile, 'utf8'));
      }

      // Update basic metrics
      metrics.totalSyncs++;
      if (success) {
        metrics.successfulSyncs++;
      } else {
        metrics.failedSyncs++;
      }

      metrics.totalDuration += duration;
      metrics.averageDuration = metrics.totalDuration / metrics.totalSyncs;
      metrics.totalFiles += filesCount;
      metrics.lastSync = new Date().toISOString();

      // Update computer-specific stats
      if (!metrics.computerStats[this.computerId]) {
        metrics.computerStats[this.computerId] = {
          totalSyncs: 0,
          successfulSyncs: 0,
          failedSyncs: 0,
          lastSync: null
        };
      }

      metrics.computerStats[this.computerId].totalSyncs++;
      if (success) {
        metrics.computerStats[this.computerId].successfulSyncs++;
      } else {
        metrics.computerStats[this.computerId].failedSyncs++;
      }
      metrics.computerStats[this.computerId].lastSync = new Date().toISOString();

      // Update daily stats
      const today = new Date().toISOString().split('T')[0];
      if (!metrics.dailyStats[today]) {
        metrics.dailyStats[today] = {
          syncs: 0,
          successfulSyncs: 0,
          failedSyncs: 0,
          totalFiles: 0,
          totalDuration: 0
        };
      }

      metrics.dailyStats[today].syncs++;
      if (success) {
        metrics.dailyStats[today].successfulSyncs++;
      } else {
        metrics.dailyStats[today].failedSyncs++;
      }
      metrics.dailyStats[today].totalFiles += filesCount;
      metrics.dailyStats[today].totalDuration += duration;

      // Keep only last 30 days
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      
      Object.keys(metrics.dailyStats).forEach(date => {
        if (new Date(date) < thirtyDaysAgo) {
          delete metrics.dailyStats[date];
        }
      });

      fs.writeFileSync(metricsFile, JSON.stringify(metrics, null, 2));
    } catch (error) {
      this.log(`Error updating metrics: ${error.message}`, 'warn');
    }
  }

  async runWithRetry() {
    for (let attempt = 1; attempt <= this.maxRetries; attempt++) {
      try {
        this.log(`Sync attempt ${attempt}/${this.maxRetries}`);
        const success = await this.performSync();
        
        if (success) {
          return true;
        }
        
        if (attempt < this.maxRetries) {
          this.log(`Attempt ${attempt} failed, retrying in ${this.retryDelay}ms...`);
          await this.sleep(this.retryDelay);
        }
      } catch (error) {
        this.log(`Attempt ${attempt} failed with error: ${error.message}`, 'error');
        if (attempt < this.maxRetries) {
          await this.sleep(this.retryDelay);
        }
      }
    }
    
    this.log(`All ${this.maxRetries} attempts failed`, 'error');
    return false;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async startContinuousSync() {
    this.log('🚀 Starting enhanced cursor sync automation (continuous mode)...');
    
    while (true) {
      try {
        await this.runWithRetry();
        await this.sleep(this.syncInterval);
      } catch (error) {
        this.log(`Continuous sync error: ${error.message}`, 'error');
        await this.sleep(this.syncInterval);
      }
    }
  }

  async runOnce() {
    this.log('🔄 Running enhanced cursor sync once...');
    return await this.runWithRetry();
  }
}

// Main execution
const sync = new EnhancedCursorSyncAutomation();

if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.includes('--once') || args.includes('-o')) {
    sync.runOnce().then(success => {
      process.exit(success ? 0 : 1);
    });
  } else if (args.includes('--continuous') || args.includes('-c')) {
    sync.startContinuousSync();
  } else {
    // Default: run once
    sync.runOnce().then(success => {
      process.exit(success ? 0 : 1);
    });
  }
}

module.exports = EnhancedCursorSyncAutomation; 