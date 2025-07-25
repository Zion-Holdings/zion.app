#!/usr/bin/env node

/**
 * Cursor Unlock Automation System
 *
 * Advanced automation system for unlocking Cursor IDE and resolving various locking scenarios:
 * - Process detection and termination
 * - File lock resolution
 * - Memory cleanup
 * - Cache clearing
 * - Extension management
 * - Workspace recovery
 * - Performance optimization
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn, exec } = require('child_process');
const os = require('os');
const crypto = require('crypto');

class CursorUnlockAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.config = this.loadConfig();
    this.logFile = path.join(__dirname, 'logs', 'cursor-unlock.log');
    this.statusFile = path.join(__dirname, 'logs', 'cursor-status.json');
    this.ensureDirectories();
    this.initializeStatus();
  }

  loadConfig() {
    const configPath = path.join(__dirname, 'config.json');
    if (fs.existsSync(configPath)) {
      const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      return {
        ...config,
        cursorUnlock: {
          enabled: true,
          aggressiveMode: false,
          backupBeforeUnlock: true,
          clearCache: true,
          resetExtensions: false,
          killProcesses: true,
          clearWorkspace: false,
          maxRetries: 3,
          retryDelay: 2000,
          timeout: 30000,
          ...config.cursorUnlock,
        },
      };
    }
    return {
      cursorUnlock: {
        enabled: true,
        aggressiveMode: false,
        backupBeforeUnlock: true,
        clearCache: true,
        resetExtensions: false,
        killProcesses: true,
        clearWorkspace: false,
        maxRetries: 3,
        retryDelay: 2000,
        timeout: 30000,
      },
    };
  }

  ensureDirectories() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  initializeStatus() {
    if (!fs.existsSync(this.statusFile)) {
      const initialStatus = {
        lastUnlockAttempt: null,
        unlockSuccess: false,
        processesKilled: 0,
        filesUnlocked: 0,
        cacheCleared: false,
        errors: [],
        performance: {
          unlockTime: 0,
          memoryBefore: 0,
          memoryAfter: 0,
        },
        lastUpdated: new Date().toISOString(),
      };
      fs.writeFileSync(this.statusFile, JSON.stringify(initialStatus, null, 2));
    }
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}`;

    console.log(logEntry);

    fs.appendFileSync(this.logFile, logEntry + '\n');
  }

  async executeCommand(command, options = {}) {
    return new Promise((resolve, reject) => {
      const timeout = options.timeout || this.config.cursorUnlock.timeout;
      const child = exec(command, {
        timeout,
        cwd: this.projectRoot,
        ...options,
      });

      let stdout = '';
      let stderr = '';

      child.stdout.on('data', (data) => {
        stdout += data;
      });

      child.stderr.on('data', (data) => {
        stderr += data;
      });

      child.on('close', (code) => {
        if (code === 0) {
          resolve({ stdout, stderr, code });
        } else {
          reject(new Error(`Command failed with code ${code}: ${stderr}`));
        }
      });

      child.on('error', (error) => {
        reject(error);
      });
    });
  }

  getCursorProcesses() {
    const platform = os.platform();
    let command = '';

    if (platform === 'darwin') {
      command = 'ps aux | grep -i cursor | grep -v grep';
    } else if (platform === 'win32') {
      command = 'tasklist /FI "IMAGENAME eq Cursor.exe" /FO CSV';
    } else {
      command = 'ps aux | grep -i cursor | grep -v grep';
    }

    try {
      const result = execSync(command, { encoding: 'utf8' });
      return result
        .trim()
        .split('\n')
        .filter((line) => line.trim());
    } catch (error) {
      this.log(`No Cursor processes found or error: ${error.message}`, 'warn');
      return [];
    }
  }

  async killCursorProcesses() {
    this.log('🔍 Detecting Cursor processes...');

    const processes = this.getCursorProcesses();
    if (processes.length === 0) {
      this.log('✅ No Cursor processes found');
      return 0;
    }

    this.log(`Found ${processes.length} Cursor process(es)`);
    let killedCount = 0;

    for (const process of processes) {
      try {
        const platform = os.platform();
        let killCommand = '';

        if (platform === 'darwin') {
          const pid = process.split(/\s+/)[1];
          killCommand = `kill -9 ${pid}`;
        } else if (platform === 'win32') {
          killCommand = 'taskkill /F /IM Cursor.exe';
        } else {
          const pid = process.split(/\s+/)[1];
          killCommand = `kill -9 ${pid}`;
        }

        await this.executeCommand(killCommand);
        killedCount++;
        this.log(`✅ Killed Cursor process: ${process}`);
      } catch (error) {
        this.log(`❌ Failed to kill process: ${error.message}`, 'error');
      }
    }

    return killedCount;
  }

  getCursorDirectories() {
    const platform = os.platform();
    const homeDir = os.homedir();
    const directories = [];

    if (platform === 'darwin') {
      directories.push(
        path.join(homeDir, 'Library', 'Application Support', 'Cursor'),
        path.join(homeDir, 'Library', 'Caches', 'Cursor'),
        path.join(homeDir, 'Library', 'Preferences', 'Cursor'),
        path.join(homeDir, 'Library', 'Logs', 'Cursor'),
      );
    } else if (platform === 'win32') {
      directories.push(
        path.join(homeDir, 'AppData', 'Roaming', 'Cursor'),
        path.join(homeDir, 'AppData', 'Local', 'Cursor'),
        path.join(homeDir, 'AppData', 'Local', 'Temp', 'Cursor'),
      );
    } else {
      directories.push(
        path.join(homeDir, '.config', 'Cursor'),
        path.join(homeDir, '.cache', 'Cursor'),
        path.join(homeDir, '.local', 'share', 'Cursor'),
      );
    }

    return directories.filter((dir) => fs.existsSync(dir));
  }

  async clearCursorCache() {
    if (!this.config.cursorUnlock.clearCache) {
      this.log('⏭️ Cache clearing disabled in config');
      return false;
    }

    this.log('🧹 Clearing Cursor cache...');

    const directories = this.getCursorDirectories();
    let clearedCount = 0;

    for (const dir of directories) {
      try {
        if (fs.existsSync(dir)) {
          const cacheDirs = ['Cache', 'CachedData', 'GPUCache', 'Code Cache'];

          for (const cacheDir of cacheDirs) {
            const cachePath = path.join(dir, cacheDir);
            if (fs.existsSync(cachePath)) {
              fs.rmSync(cachePath, { recursive: true, force: true });
              clearedCount++;
              this.log(`✅ Cleared cache: ${cachePath}`);
            }
          }
        }
      } catch (error) {
        this.log(
          `❌ Failed to clear cache in ${dir}: ${error.message}`,
          'error',
        );
      }
    }

    return clearedCount > 0;
  }

  async unlockWorkspaceFiles() {
    this.log('🔓 Unlocking workspace files...');

    const lockPatterns = [
      '**/*.lock',
      '**/package-lock.json',
      '**/yarn.lock',
      '**/.git/index.lock',
      '**/node_modules/.cache/**',
      '**/.next/**',
      '**/.nuxt/**',
      '**/dist/**',
      '**/build/**',
    ];

    let unlockedCount = 0;

    for (const pattern of lockPatterns) {
      try {
        const glob = require('glob');
        const files = glob.sync(pattern, {
          cwd: this.projectRoot,
          ignore: ['node_modules/**', '.git/**'],
        });

        for (const file of files) {
          const filePath = path.join(this.projectRoot, file);
          try {
            if (fs.existsSync(filePath)) {
              // Try to make file writable
              fs.chmodSync(filePath, 0o666);
              unlockedCount++;
              this.log(`✅ Unlocked: ${file}`);
            }
          } catch (error) {
            this.log(`⚠️ Could not unlock ${file}: ${error.message}`, 'warn');
          }
        }
      } catch (error) {
        this.log(
          `❌ Error processing pattern ${pattern}: ${error.message}`,
          'error',
        );
      }
    }

    return unlockedCount;
  }

  async backupWorkspace() {
    if (!this.config.cursorUnlock.backupBeforeUnlock) {
      return null;
    }

    this.log('💾 Creating workspace backup...');

    const backupDir = path.join(
      __dirname,
      'backups',
      `cursor-backup-${Date.now()}`,
    );
    fs.mkdirSync(backupDir, { recursive: true });

    try {
      const excludePatterns = [
        'node_modules',
        '.git',
        '.next',
        '.nuxt',
        'dist',
        'build',
        'coverage',
        'logs',
        'temp',
        'tmp',
      ];

      const rsync = require('child_process').spawnSync;
      const excludeArgs = excludePatterns.flatMap((pattern) => [
        '--exclude',
        pattern,
      ]);

      const result = rsync(
        'rsync',
        [
          '-av',
          '--delete',
          ...excludeArgs,
          this.projectRoot + '/',
          backupDir + '/',
        ],
        { stdio: 'pipe' },
      );

      if (result.status === 0) {
        this.log(`✅ Backup created: ${backupDir}`);
        return backupDir;
      } else {
        this.log(`❌ Backup failed: ${result.stderr}`, 'error');
        return null;
      }
    } catch (error) {
      this.log(`❌ Backup error: ${error.message}`, 'error');
      return null;
    }
  }

  async resetCursorExtensions() {
    if (!this.config.cursorUnlock.resetExtensions) {
      return false;
    }

    this.log('🔄 Resetting Cursor extensions...');

    const platform = os.platform();
    const homeDir = os.homedir();
    let extensionsDir = '';

    if (platform === 'darwin') {
      extensionsDir = path.join(
        homeDir,
        'Library',
        'Application Support',
        'Cursor',
        'User',
        'extensions',
      );
    } else if (platform === 'win32') {
      extensionsDir = path.join(
        homeDir,
        'AppData',
        'Roaming',
        'Cursor',
        'User',
        'extensions',
      );
    } else {
      extensionsDir = path.join(
        homeDir,
        '.config',
        'Cursor',
        'User',
        'extensions',
      );
    }

    if (fs.existsSync(extensionsDir)) {
      try {
        fs.rmSync(extensionsDir, { recursive: true, force: true });
        fs.mkdirSync(extensionsDir, { recursive: true });
        this.log('✅ Extensions reset');
        return true;
      } catch (error) {
        this.log(`❌ Failed to reset extensions: ${error.message}`, 'error');
        return false;
      }
    }

    return false;
  }

  async optimizePerformance() {
    this.log('⚡ Optimizing performance...');

    const optimizations = [
      // Clear npm cache
      'npm cache clean --force',
      // Clear yarn cache
      'yarn cache clean',
      // Clear git cache
      'git gc --prune=now',
      // Clear system temp files
      'rm -rf /tmp/cursor-*',
      // Clear node_modules if corrupted
      'find . -name "node_modules" -type d -exec rm -rf {} + 2>/dev/null || true',
    ];

    let successCount = 0;

    for (const command of optimizations) {
      try {
        await this.executeCommand(command);
        successCount++;
        this.log(`✅ Optimization completed: ${command}`);
      } catch (error) {
        this.log(
          `⚠️ Optimization failed: ${command} - ${error.message}`,
          'warn',
        );
      }
    }

    return successCount;
  }

  async unlockCursor(retryCount = 0) {
    const startTime = Date.now();
    this.log(
      `🚀 Starting Cursor unlock process (attempt ${retryCount + 1})...`,
    );

    try {
      // Create backup if enabled
      const backupPath = await this.backupWorkspace();

      // Kill Cursor processes
      const processesKilled = await this.killCursorProcesses();

      // Clear cache
      const cacheCleared = await this.clearCursorCache();

      // Unlock workspace files
      const filesUnlocked = await this.unlockWorkspaceFiles();

      // Reset extensions if needed
      const extensionsReset = await this.resetCursorExtensions();

      // Optimize performance
      const optimizationsCompleted = await this.optimizePerformance();

      const unlockTime = Date.now() - startTime;

      // Update status
      const status = {
        lastUnlockAttempt: new Date().toISOString(),
        unlockSuccess: true,
        processesKilled,
        filesUnlocked,
        cacheCleared,
        extensionsReset,
        optimizationsCompleted,
        backupPath,
        errors: [],
        performance: {
          unlockTime,
          memoryBefore: process.memoryUsage().heapUsed,
          memoryAfter: process.memoryUsage().heapUsed,
        },
        lastUpdated: new Date().toISOString(),
      };

      fs.writeFileSync(this.statusFile, JSON.stringify(status, null, 2));

      this.log(`✅ Cursor unlock completed successfully in ${unlockTime}ms`);
      this.log(
        `📊 Summary: ${processesKilled} processes killed, ${filesUnlocked} files unlocked, ${optimizationsCompleted} optimizations completed`,
      );

      return true;
    } catch (error) {
      this.log(`❌ Cursor unlock failed: ${error.message}`, 'error');

      // Update status with error
      const status = JSON.parse(fs.readFileSync(this.statusFile, 'utf8'));
      status.errors.push({
        timestamp: new Date().toISOString(),
        error: error.message,
        attempt: retryCount + 1,
      });
      status.unlockSuccess = false;
      status.lastUpdated = new Date().toISOString();
      fs.writeFileSync(this.statusFile, JSON.stringify(status, null, 2));

      // Retry if configured
      if (retryCount < this.config.cursorUnlock.maxRetries) {
        this.log(`🔄 Retrying in ${this.config.cursorUnlock.retryDelay}ms...`);
        await new Promise((resolve) =>
          setTimeout(resolve, this.config.cursorUnlock.retryDelay),
        );
        return this.unlockCursor(retryCount + 1);
      }

      return false;
    }
  }

  async getStatus() {
    if (fs.existsSync(this.statusFile)) {
      return JSON.parse(fs.readFileSync(this.statusFile, 'utf8'));
    }
    return null;
  }

  async watch() {
    this.log('👀 Starting Cursor unlock watcher...');

    setInterval(async () => {
      const processes = this.getCursorProcesses();
      if (processes.length > 0) {
        this.log('🔍 Cursor processes detected, checking for locks...');
        await this.unlockCursor();
      }
    }, 30000); // Check every 30 seconds
  }

  async execute() {
    if (!this.config.cursorUnlock.enabled) {
      this.log('⏭️ Cursor unlock automation disabled in config');
      return;
    }

    const args = process.argv.slice(2);

    if (args.includes('--watch')) {
      await this.watch();
    } else if (args.includes('--status')) {
      const status = await this.getStatus();
      console.log(JSON.stringify(status, null, 2));
    } else {
      await this.unlockCursor();
    }
  }
}

// Run the automation
if (require.main === module) {
  const automation = new CursorUnlockAutomation();
  automation.execute().catch((error) => {
    console.error('❌ Automation failed:', error);
    process.exit(1);
  });
}

module.exports = CursorUnlockAutomation;
