#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class PM2RedundancySync {
  constructor() {
    this.config = {
      remote: process.env.AUTO_SYNC_REMOTE || "origin",
      branch: process.env.AUTO_SYNC_BRANCH || "main",
      strategy: process.env.AUTO_SYNC_STRATEGY || "hardreset",
      clean: process.env.AUTO_SYNC_CLEAN === "1",
      gc: process.env.AUTO_SYNC_GC === "1",
      redundancyMode: process.env.REDUNDANCY_MODE === "true",
      maxRetries: 5,
      retryDelay: 5000,
      backupDir: path.join(process.cwd(), "automation", "redundancy", "backups"),
      logFile: path.join(process.cwd(), "automation", "logs", "redundancy-sync.log")
    };
    
    this.ensureDirectories();
    this.setupLogging();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.config.backupDir)) {
      fs.mkdirSync(this.config.backupDir, { recursive: true });
    }
    
    const logDir = path.dirname(this.config.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  setupLogging() {
    this.log = (message, level = "INFO") => {
      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] [${level}] ${message}`;
      
      console.log(logMessage);
      
      // Write to log file
      try {
        fs.appendFileSync(this.config.logFile, logMessage + "\n");
      } catch (error) {
        console.error(`Failed to write to log file: ${error.message}`);
      }
    };
  }

  runCommand(command, args = [], options = {}) {
    const result = spawnSync(command, args, {
      cwd: process.cwd(),
      env: process.env,
      shell: false,
      encoding: "utf8",
      maxBuffer: 1024 * 1024 * 20,
      ...options
    });
    
    return {
      status: result.status || 0,
      stdout: (result.stdout || "").trim(),
      stderr: (result.stderr || "").trim(),
      success: (result.status || 0) === 0
    };
  }

  runGit(args, options = {}) {
    return this.runCommand("git", args, options);
  }

  ensureRepoRoot() {
    const gitDir = path.join(process.cwd(), ".git");
    if (!fs.existsSync(gitDir)) {
      throw new Error(`No .git directory found in ${process.cwd()}`);
    }
  }

  createBackup() {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const backupPath = path.join(this.config.backupDir, `backup-${timestamp}`);
    
    try {
      // Create backup of current state
      const stashResult = this.runGit(["stash", "push", "-u", "-m", `redundancy-backup-${timestamp}`]);
      if (stashResult.success) {
        this.log(`Created backup stash: redundancy-backup-${timestamp}`);
      }
      
      // Also backup untracked files
      const untracked = this.runGit(["ls-files", "--others", "--exclude-standard"]);
      if (untracked.success && untracked.stdout.trim()) {
        const untrackedBackup = path.join(backupPath, "untracked");
        fs.mkdirSync(untrackedBackup, { recursive: true });
        
        untracked.stdout.split("\n").forEach(file => {
          if (file.trim() && fs.existsSync(file)) {
            const targetPath = path.join(untrackedBackup, file);
            const targetDir = path.dirname(targetPath);
            if (!fs.existsSync(targetDir)) {
              fs.mkdirSync(targetDir, { recursive: true });
            }
            fs.copyFileSync(file, targetPath);
          }
        });
        
        this.log(`Backed up untracked files to: ${untrackedBackup}`);
      }
      
      return backupPath;
    } catch (error) {
      this.log(`Backup creation failed: ${error.message}`, "WARN");
      return null;
    }
  }

  repairGitIndex() {
    this.log("Checking and repairing Git index if needed...");
    
    const statusResult = this.runGit(["status", "-sb"]);
    if (statusResult.success) {
      this.log("Git index is healthy");
      return true;
    }
    
    this.log("Git index appears corrupted, attempting repair...");
    
    const indexPath = path.join(process.cwd(), ".git", "index");
    const backup = path.join(process.cwd(), ".git", `index.repair.${Date.now()}`);
    
    try {
      if (fs.existsSync(indexPath)) {
        fs.renameSync(indexPath, backup);
        this.log(`Repaired Git index by moving to ${path.basename(backup)}`);
      }
      
      // Reset and clean
      this.runGit(["rebase", "--abort"]);
      this.runGit(["reset", "--mixed"]);
      this.runGit(["clean", "-fd"]);
      
      this.log("Git index repair completed");
      return true;
    } catch (error) {
      this.log(`Git index repair failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  fetchRemote() {
    this.log(`Fetching from remote: ${this.config.remote}`);
    
    const result = this.runGit(["fetch", "--prune", this.config.remote]);
    if (!result.success) {
      throw new Error(`Git fetch failed: ${result.stderr}`);
    }
    
    this.log("Remote fetch completed successfully");
  }

  getDivergence() {
    const result = this.runGit(["rev-list", "--left-right", "--count", `HEAD...${this.config.remote}/${this.config.branch}`]);
    if (!result.success) {
      throw new Error(`Divergence check failed: ${result.stderr}`);
    }
    
    const parts = result.stdout.trim().split(/\s+/);
    const ahead = parseInt(parts[0] || "0", 10) || 0;
    const behind = parseInt(parts[1] || "0", 10) || 0;
    
    return { ahead, behind };
  }

  syncWithRemote() {
    this.log(`Syncing with remote using strategy: ${this.config.strategy}`);
    
    const { ahead, behind } = this.getDivergence();
    this.log(`Current divergence - Ahead: ${ahead}, Behind: ${behind}`);
    
    if (behind === 0 && ahead === 0) {
      this.log("Repository is already in sync");
      return { synced: true, changes: false };
    }
    
    let synced = false;
    let changes = false;
    
    try {
      if (this.config.strategy === "hardreset") {
        // Hard reset to remote
        this.log("Performing hard reset to remote...");
        this.runGit(["reset", "--hard", `${this.config.remote}/${this.config.branch}`]);
        synced = true;
        changes = true;
      } else if (this.config.strategy === "merge") {
        // Merge strategy
        this.log("Performing merge with remote...");
        const mergeResult = this.runGit(["merge", `${this.config.remote}/${this.config.branch}`]);
        synced = mergeResult.success;
        changes = true;
      } else if (this.config.strategy === "rebase") {
        // Rebase strategy
        this.log("Performing rebase with remote...");
        const rebaseResult = this.runGit(["rebase", `${this.config.remote}/${this.config.branch}`]);
        synced = rebaseResult.success;
        changes = true;
      }
      
      if (synced) {
        this.log("Sync completed successfully");
      } else {
        this.log("Sync failed, attempting recovery", "WARN");
        this.recoverFromSyncFailure();
      }
      
    } catch (error) {
      this.log(`Sync error: ${error.message}`, "ERROR");
      this.recoverFromSyncFailure();
      synced = false;
    }
    
    return { synced, changes };
  }

  recoverFromSyncFailure() {
    this.log("Attempting to recover from sync failure...");
    
    try {
      // Abort any ongoing operations
      this.runGit(["rebase", "--abort"]);
      this.runGit(["merge", "--abort"]);
      
      // Reset to a known good state
      this.runGit(["reset", "--hard", "HEAD"]);
      
      // Clean untracked files
      if (this.config.clean) {
        this.runGit(["clean", "-fd"]);
      }
      
      this.log("Recovery completed");
    } catch (error) {
      this.log(`Recovery failed: ${error.message}`, "ERROR");
    }
  }

  pushChanges() {
    const { ahead } = this.getDivergence();
    
    if (ahead === 0) {
      this.log("No local changes to push");
      return { pushed: true, changes: false };
    }
    
    this.log(`Pushing ${ahead} local commits...`);
    
    const result = this.runGit(["push", this.config.remote, this.config.branch]);
    if (result.success) {
      this.log("Changes pushed successfully");
      return { pushed: true, changes: true };
    } else {
      this.log(`Push failed: ${result.stderr}`, "ERROR");
      return { pushed: false, changes: true };
    }
  }

  performGarbageCollection() {
    if (!this.config.gc) {
      return;
    }
    
    this.log("Performing Git garbage collection...");
    
    try {
      this.runGit(["gc", "--prune=now"]);
      this.log("Garbage collection completed");
    } catch (error) {
      this.log(`Garbage collection failed: ${error.message}`, "WARN");
    }
  }

  generateSyncReport(syncResult, pushResult) {
    const report = {
      timestamp: new Date().toISOString(),
      redundancyMode: this.config.redundancyMode,
      config: {
        remote: this.config.remote,
        branch: this.config.branch,
        strategy: this.config.strategy,
        clean: this.config.clean,
        gc: this.config.gc
      },
      results: {
        sync: syncResult,
        push: pushResult
      },
      gitStatus: this.runGit(["status", "--porcelain"]).stdout,
      divergence: this.getDivergence()
    };
    
    const reportPath = path.join(process.cwd(), "automation", "redundancy", "sync-report.json");
    try {
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`Sync report generated: ${reportPath}`);
    } catch (error) {
      this.log(`Failed to generate report: ${error.message}`, "WARN");
    }
    
    return report;
  }

  async runSync() {
    this.log("Starting PM2 Redundancy Sync...");
    
    try {
      this.ensureRepoRoot();
      
      // Create backup before proceeding
      const backupPath = this.createBackup();
      
      // Repair Git index if needed
      if (!this.repairGitIndex()) {
        throw new Error("Failed to repair Git index");
      }
      
      // Fetch latest from remote
      this.fetchRemote();
      
      // Sync with remote
      const syncResult = this.syncWithRemote();
      
      // Push any local changes
      const pushResult = this.pushChanges();
      
      // Perform garbage collection if enabled
      this.performGarbageCollection();
      
      // Generate report
      const report = this.generateSyncReport(syncResult, pushResult);
      
      this.log("PM2 Redundancy Sync completed successfully");
      
      return {
        success: true,
        syncResult,
        pushResult,
        report
      };
      
    } catch (error) {
      this.log(`PM2 Redundancy Sync failed: ${error.message}`, "ERROR");
      
      return {
        success: false,
        error: error.message
      };
    }
  }
}

// CLI interface
if (require.main === module) {
  const syncer = new PM2RedundancySync();
  
  syncer.runSync().then(result => {
    if (result.success) {
      process.exit(0);
    } else {
      process.exit(1);
    }
  }).catch(error => {
    console.error(`Fatal error: ${error.message}`);
    process.exit(1);
  });
}

module.exports = PM2RedundancySync;