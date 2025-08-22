#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class RedundancyGitSync {
  constructor() {
    this.config = {
      remote: process.env.GIT_SYNC_REMOTE || "origin",
      branch: process.env.GIT_SYNC_BRANCH || "main",
      strategy: process.env.GIT_SYNC_STRATEGY || "pull",
      clean: process.env.GIT_SYNC_CLEAN === "1",
      logDir: "automation/logs",
      maxLogSize: 5 * 1024 * 1024, // 5MB
      maxLogFiles: 15,
      syncInterval: 15 * 60 * 1000, // 15 minutes
      maxRetries: 3,
      retryDelay: 30000 // 30 seconds
    };
    
    this.syncHistory = [];
    this.failureCount = 0;
    this.lastSyncTime = 0;
    this.isRunning = false;
    
    this.ensureLogDirectory();
    this.startSync();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.config.logDir)) {
      fs.mkdirSync(this.config.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    const logFile = path.join(this.config.logDir, `redundancy-git-sync-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logEntry + "\n");
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: process.cwd(),
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 10,
        ...options
      });
      
      resolve({
        status: result.status,
        stdout: result.stdout || "",
        stderr: result.stderr || "",
        error: result.error
      });
    });
  }

  async checkGitRepository() {
    try {
      const gitDir = path.join(process.cwd(), ".git");
      if (!fs.existsSync(gitDir)) {
        throw new Error("Not in a git repository");
      }

      const status = await this.runCommand("git", ["status"]);
      if (status.status !== 0) {
        throw new Error(`Git status failed: ${status.stderr}`);
      }

      return true;
    } catch (error) {
      this.log(`Git repository check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async getCurrentBranch() {
    try {
      const result = await this.runCommand("git", ["branch", "--show-current"]);
      if (result.status === 0) {
        return result.stdout.trim();
      }
      return null;
    } catch (error) {
      this.log(`Failed to get current branch: ${error.message}`, "ERROR");
      return null;
    }
  }

  async getRemoteInfo() {
    try {
      const remoteResult = await this.runCommand("git", ["remote", "-v"]);
      if (remoteResult.status !== 0) {
        throw new Error(`Failed to get remote info: ${remoteResult.stderr}`);
      }

      const lines = remoteResult.stdout.trim().split('\n');
      const originLine = lines.find(line => line.includes(this.config.remote) && line.includes('(fetch)'));
      
      if (!originLine) {
        throw new Error(`Remote '${this.config.remote}' not found`);
      }

      const url = originLine.split('\t')[1].split(' ')[0];
      return { remote: this.config.remote, url };
    } catch (error) {
      this.log(`Failed to get remote info: ${error.message}`, "ERROR");
      return null;
    }
  }

  async checkDivergence() {
    try {
      const result = await this.runCommand("git", [
        "rev-list", "--left-right", "--count", 
        `HEAD...${this.config.remote}/${this.config.branch}`
      ]);

      if (result.status !== 0) {
        throw new Error(`Failed to check divergence: ${result.stderr}`);
      }

      const [ahead, behind] = result.stdout.trim().split('\t').map(Number);
      return { ahead, behind };
    } catch (error) {
      this.log(`Failed to check divergence: ${error.message}`, "ERROR");
      return { ahead: 0, behind: 0 };
    }
  }

  async stashChanges() {
    try {
      const status = await this.runCommand("git", ["status", "--porcelain"]);
      if (status.status !== 0 || !status.stdout.trim()) {
        return { stashed: false, message: null };
      }

      const stashMessage = `redundancy-git-sync-${Date.now()}`;
      const stashResult = await this.runCommand("git", [
        "stash", "push", "-u", "-m", stashMessage
      ]);

      if (stashResult.status === 0) {
        this.log(`Stashed changes: ${stashMessage}`, "INFO");
        return { stashed: true, message: stashMessage };
      } else {
        throw new Error(`Stash failed: ${stashResult.stderr}`);
      }
    } catch (error) {
      this.log(`Failed to stash changes: ${error.message}`, "ERROR");
      return { stashed: false, message: null };
    }
  }

  async fetchLatest() {
    try {
      this.log(`Fetching latest from ${this.config.remote}/${this.config.branch}...`, "INFO");
      
      const fetchResult = await this.runCommand("git", [
        "fetch", "--prune", this.config.remote
      ]);

      if (fetchResult.status !== 0) {
        throw new Error(`Fetch failed: ${fetchResult.stderr}`);
      }

      this.log("Fetch completed successfully", "INFO");
      return true;
    } catch (error) {
      this.log(`Fetch failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performSync() {
    try {
      const syncStart = Date.now();
      this.log("Starting Git synchronization...", "INFO");

      // Check if we're already running
      if (this.isRunning) {
        this.log("Sync already in progress, skipping...", "WARN");
        return { success: false, skipped: true };
      }

      this.isRunning = true;

      // Check git repository
      if (!await this.checkGitRepository()) {
        throw new Error("Git repository check failed");
      }

      // Get current branch
      const currentBranch = await this.getCurrentBranch();
      if (currentBranch !== this.config.branch) {
        this.log(`Current branch '${currentBranch}' differs from target branch '${this.config.branch}'`, "WARN");
        
        // Checkout target branch
        const checkoutResult = await this.runCommand("git", ["checkout", this.config.branch]);
        if (checkoutResult.status !== 0) {
          throw new Error(`Failed to checkout ${this.config.branch}: ${checkoutResult.stderr}`);
        }
        this.log(`Switched to branch: ${this.config.branch}`, "INFO");
      }

      // Get remote info
      const remoteInfo = await this.getRemoteInfo();
      if (!remoteInfo) {
        throw new Error("Failed to get remote information");
      }

      // Fetch latest changes
      if (!await this.fetchLatest()) {
        throw new Error("Fetch failed");
      }

      // Check divergence
      const divergence = await this.checkDivergence();
      this.log(`Divergence: ${divergence.ahead} ahead, ${divergence.behind} behind`, "INFO");

      if (divergence.behind === 0 && divergence.ahead === 0) {
        this.log("Repository is up to date", "INFO");
        this.isRunning = false;
        return { success: true, upToDate: true };
      }

      // Stash local changes if any
      const stashResult = await this.stashChanges();

      // Perform sync based on strategy
      let syncResult;
      if (this.config.strategy === "hardreset") {
        syncResult = await this.performHardReset();
      } else if (this.config.strategy === "pull") {
        syncResult = await this.performPull();
      } else if (this.config.strategy === "rebase") {
        syncResult = await this.performRebase();
      } else {
        throw new Error(`Unknown sync strategy: ${this.config.strategy}`);
      }

      if (!syncResult.success) {
        throw new Error(`Sync strategy '${this.config.strategy}' failed: ${syncResult.error}`);
      }

      // Pop stashed changes if we stashed them
      if (stashResult.stashed) {
        await this.popStashedChanges(stashResult.message);
      }

      const syncTime = Date.now() - syncStart;
      this.log(`Git synchronization completed successfully in ${syncTime}ms`, "INFO");

      // Record sync history
      const syncRecord = {
        timestamp: new Date().toISOString(),
        strategy: this.config.strategy,
        divergence,
        syncTime,
        success: true,
        stashed: stashResult.stashed
      };

      this.syncHistory.push(syncRecord);
      if (this.syncHistory.length > 100) {
        this.syncHistory = this.syncHistory.slice(-100);
      }

      this.lastSyncTime = Date.now();
      this.failureCount = 0;
      this.isRunning = false;

      return { success: true, syncTime, divergence };

    } catch (error) {
      this.log(`Git synchronization failed: ${error.message}`, "ERROR");
      this.failureCount++;
      this.isRunning = false;

      const syncRecord = {
        timestamp: new Date().toISOString(),
        strategy: this.config.strategy,
        error: error.message,
        success: false
      };

      this.syncHistory.push(syncRecord);
      if (this.syncHistory.length > 100) {
        this.syncHistory = this.syncHistory.slice(-100);
      }

      return { success: false, error: error.message };
    }
  }

  async performHardReset() {
    try {
      this.log("Performing hard reset...", "INFO");
      
      const resetResult = await this.runCommand("git", [
        "reset", "--hard", `${this.config.remote}/${this.config.branch}`
      ]);

      if (resetResult.status !== 0) {
        throw new Error(`Hard reset failed: ${resetResult.stderr}`);
      }

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async performPull() {
    try {
      this.log("Performing pull...", "INFO");
      
      const pullResult = await this.runCommand("git", [
        "pull", this.config.remote, this.config.branch
      ]);

      if (pullResult.status !== 0) {
        throw new Error(`Pull failed: ${pullResult.stderr}`);
      }

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async performRebase() {
    try {
      this.log("Performing rebase...", "INFO");
      
      const rebaseResult = await this.runCommand("git", [
        "rebase", `${this.config.remote}/${this.config.branch}`
      ]);

      if (rebaseResult.status !== 0) {
        // Abort rebase on failure
        await this.runCommand("git", ["rebase", "--abort"]);
        throw new Error(`Rebase failed: ${rebaseResult.stderr}`);
      }

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  async popStashedChanges(stashMessage) {
    try {
      const popResult = await this.runCommand("git", ["stash", "pop"]);
      if (popResult.status === 0) {
        this.log("Successfully restored stashed changes", "INFO");
        return true;
      } else {
        this.log(`Failed to pop stash: ${popResult.stderr}`, "WARN");
        return false;
      }
    } catch (error) {
      this.log(`Failed to pop stash: ${error.message}`, "WARN");
      return false;
    }
  }

  async rotateLogs() {
    try {
      const logFiles = fs.readdirSync(this.config.logDir)
        .filter(file => file.startsWith('redundancy-git-sync-') && file.endsWith('.log'))
        .map(file => ({
          name: file,
          path: path.join(this.config.logDir, file),
          stats: fs.statSync(path.join(this.config.logDir, file))
        }))
        .sort((a, b) => b.stats.mtime.getTime() - a.stats.mtime.getTime());

      // Remove old log files
      if (logFiles.length > this.config.maxLogFiles) {
        const filesToRemove = logFiles.slice(this.config.maxLogFiles);
        for (const file of filesToRemove) {
          fs.unlinkSync(file.path);
          this.log(`Removed old log file: ${file.name}`, "INFO");
        }
      }

      // Check log file sizes
      for (const file of logFiles) {
        if (file.stats.size > this.config.maxLogSize) {
          const backupPath = file.path.replace('.log', `.${Date.now()}.log`);
          fs.renameSync(file.path, backupPath);
          this.log(`Rotated large log file: ${file.name} -> ${path.basename(backupPath)}`, "INFO");
        }
      }
    } catch (error) {
      this.log(`Log rotation error: ${error.message}`, "ERROR");
    }
  }

  startSync() {
    this.log("Starting redundancy Git sync system...", "INFO");
    this.log(`Configuration: remote=${this.config.remote}, branch=${this.config.branch}, strategy=${this.config.strategy}`, "INFO");
    
    // Initial sync
    this.performSync();
    
    // Set up periodic sync
    setInterval(async () => {
      try {
        await this.performSync();
        await this.rotateLogs();
      } catch (error) {
        this.log(`Periodic sync error: ${error.message}`, "ERROR");
      }
    }, this.config.syncInterval);
    
    this.log(`Git sync system started with ${this.config.syncInterval}ms interval`, "INFO");
  }

  getStatus() {
    return {
      system: "Redundancy Git Sync",
      version: "1.0.0",
      status: "running",
      uptime: process.uptime(),
      config: this.config,
      lastSyncTime: this.lastSyncTime,
      failureCount: this.failureCount,
      isRunning: this.isRunning,
      syncHistory: this.syncHistory.slice(-10), // Last 10 records
      timestamp: new Date().toISOString()
    };
  }
}

// Export the class
module.exports = RedundancyGitSync;

// If run directly, start the sync system
if (require.main === module) {
  const gitSync = new RedundancyGitSync();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    gitSync.log("Shutting down Git sync system...", "INFO");
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    gitSync.log("Shutting down Git sync system...", "INFO");
    process.exit(0);
  });
  
  gitSync.log("Git sync system started", "INFO");
}