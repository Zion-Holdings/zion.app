#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class ComprehensiveBackupRecoverySystem {
  constructor() {
    this.workspace = process.cwd();
    this.backupDir = path.join(this.workspace, "automation/backups");
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "comprehensive-backup-recovery.log");
    this.ensureDirectories();
    
    this.config = {
      // Backup Configuration
      backup: {
        enabled: true,
        schedule: "0 2 * * *", // Daily at 2 AM
        retention: {
          daily: 7,
          weekly: 4,
          monthly: 12
        },
        compression: true,
        encryption: false,
        parallelBackups: 3
      },
      
      // PM2 Backup Configuration
      pm2: {
        enabled: true,
        includeProcesses: true,
        includeEcosystems: true,
        includeLogs: false,
        includeConfig: true,
        backupInterval: 3600000, // 1 hour
        maxBackups: 24
      },
      
      // GitHub Actions Backup Configuration
      github: {
        enabled: true,
        includeWorkflows: true,
        includeSecrets: false, // For security reasons
        includeRuns: false,
        backupInterval: 86400000, // 24 hours
        maxBackups: 30
      },
      
      // Netlify Functions Backup Configuration
      netlify: {
        enabled: true,
        includeFunctions: true,
        includeManifests: true,
        includeConfig: true,
        backupInterval: 86400000, // 24 hours
        maxBackups: 30
      },
      
      // Recovery Configuration
      recovery: {
        enabled: true,
        autoRecovery: true,
        maxRecoveryAttempts: 3,
        recoveryTimeout: 300000, // 5 minutes
        rollbackOnFailure: true
      }
    };
    
    this.lastBackup = {
      pm2: null,
      github: null,
      netlify: null,
      system: null
    };
    
    this.backupHistory = [];
    this.recoveryHistory = [];
  }

  ensureDirectories() {
    const dirs = [this.backupDir, this.logDir];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async startBackupScheduler() {
    this.log("Starting comprehensive backup scheduler...", "INFO");
    
    // Schedule regular backups
    setInterval(async () => {
      await this.performScheduledBackup();
    }, 3600000); // Check every hour
    
    this.log("Backup scheduler started", "INFO");
  }

  async performScheduledBackup() {
    const now = new Date();
    const hour = now.getHours();
    
    // Perform daily backup at 2 AM
    if (hour === 2) {
      this.log("Performing scheduled daily backup...", "INFO");
      await this.performFullBackup();
    }
    
    // Perform hourly PM2 backup
    if (this.config.pm2.enabled) {
      await this.backupPM2();
    }
  }

  async performFullBackup() {
    this.log("Starting comprehensive full backup...", "INFO");
    
    try {
      const backupId = this.generateBackupId();
      const backupPath = path.join(this.backupDir, backupId);
      
      // Create backup directory
      fs.mkdirSync(backupPath, { recursive: true });
      
      // Perform all backups
      const results = await Promise.allSettled([
        this.backupPM2(backupPath),
        this.backupGitHubActions(backupPath),
        this.backupNetlifyFunctions(backupPath),
        this.backupSystemConfig(backupPath)
      ]);
      
      // Create backup manifest
      const manifest = {
        id: backupId,
        timestamp: new Date().toISOString(),
        type: "full",
        results: results.map((result, index) => ({
          component: ["pm2", "github", "netlify", "system"][index],
          status: result.status === "fulfilled" ? "success" : "failed",
          error: result.status === "rejected" ? result.reason.message : null
        })),
        size: this.calculateDirectorySize(backupPath),
        checksum: await this.calculateChecksum(backupPath)
      };
      
      // Save manifest
      fs.writeFileSync(path.join(backupPath, "backup-manifest.json"), JSON.stringify(manifest, null, 2));
      
      // Compress backup if enabled
      if (this.config.backup.compression) {
        await this.compressBackup(backupPath);
      }
      
      // Update backup history
      this.backupHistory.push(manifest);
      this.saveBackupHistory();
      
      // Cleanup old backups
      await this.cleanupOldBackups();
      
      this.log(`Full backup completed successfully: ${backupId}`, "INFO");
      return backupId;
      
    } catch (error) {
      this.log(`Full backup failed: ${error.message}`, "ERROR");
      throw error;
    }
  }

  async backupPM2(backupPath = null) {
    if (!this.config.pm2.enabled) return;
    
    const backupId = backupPath ? path.basename(backupPath) : this.generateBackupId();
    const pm2BackupPath = backupPath ? path.join(backupPath, "pm2") : path.join(this.backupDir, backupId, "pm2");
    
    try {
      fs.mkdirSync(pm2BackupPath, { recursive: true });
      
      // Backup PM2 processes
      if (this.config.pm2.includeProcesses) {
        const pm2Status = execSync("pm2 status --json", { encoding: "utf8" });
        fs.writeFileSync(path.join(pm2BackupPath, "pm2-status.json"), pm2Status);
      }
      
      // Backup PM2 ecosystems
      if (this.config.pm2.includeEcosystems) {
        const ecosystemFiles = [
          "ecosystem.pm2.cjs",
          "ecosystem-redundancy.pm2.cjs",
          "ecosystem.redundancy.cjs",
          "ecosystem.comprehensive-redundancy.cjs"
        ];
        
        ecosystemFiles.forEach(file => {
          if (fs.existsSync(file)) {
            fs.copyFileSync(file, path.join(pm2BackupPath, file));
          }
        });
      }
      
      // Backup PM2 configuration
      if (this.config.pm2.includeConfig) {
        try {
          const pm2Config = execSync("pm2 config", { encoding: "utf8" });
          fs.writeFileSync(path.join(pm2BackupPath, "pm2-config.txt"), pm2Config);
        } catch (error) {
          this.log(`Failed to backup PM2 config: ${error.message}`, "WARN");
        }
      }
      
      this.lastBackup.pm2 = new Date().toISOString();
      this.log(`PM2 backup completed: ${backupId}`, "INFO");
      
    } catch (error) {
      this.log(`PM2 backup failed: ${error.message}`, "ERROR");
      throw error;
    }
  }

  async backupGitHubActions(backupPath = null) {
    if (!this.config.github.enabled) return;
    
    const backupId = backupPath ? path.basename(backupPath) : this.generateBackupId();
    const githubBackupPath = backupPath ? path.join(backupPath, "github") : path.join(this.backupDir, backupId, "github");
    
    try {
      fs.mkdirSync(githubBackupPath, { recursive: true });
      
      // Backup workflows
      if (this.config.github.includeWorkflows) {
        const workflowsDir = ".github/workflows";
        if (fs.existsSync(workflowsDir)) {
          const workflows = fs.readdirSync(workflowsDir);
          workflows.forEach(workflow => {
            if (workflow.endsWith('.yml') || workflow.endsWith('.yaml')) {
              fs.copyFileSync(
                path.join(workflowsDir, workflow),
                path.join(githubBackupPath, workflow)
              );
            }
          });
        }
      }
      
      // Backup GitHub configuration
      const githubConfig = {
        workflows: this.config.github.includeWorkflows,
        backupInterval: this.config.github.backupInterval,
        maxBackups: this.config.github.maxBackups
      };
      
      fs.writeFileSync(path.join(githubBackupPath, "github-config.json"), JSON.stringify(githubConfig, null, 2));
      
      this.lastBackup.github = new Date().toISOString();
      this.log(`GitHub Actions backup completed: ${backupId}`, "INFO");
      
    } catch (error) {
      this.log(`GitHub Actions backup failed: ${error.message}`, "ERROR");
      throw error;
    }
  }

  async backupNetlifyFunctions(backupPath = null) {
    if (!this.config.netlify.enabled) return;
    
    const backupId = backupPath ? path.basename(backupPath) : this.generateBackupId();
    const netlifyBackupPath = backupPath ? path.join(backupPath, "netlify") : path.join(this.backupDir, backupId, "netlify");
    
    try {
      fs.mkdirSync(netlifyBackupPath, { recursive: true });
      
      // Backup functions manifest
      if (this.config.netlify.includeManifests) {
        const manifestPath = "netlify/functions/functions-manifest.json";
        if (fs.existsSync(manifestPath)) {
          fs.copyFileSync(manifestPath, path.join(netlifyBackupPath, "functions-manifest.json"));
        }
      }
      
      // Backup Netlify configuration
      if (this.config.netlify.includeConfig) {
        const netlifyConfigFiles = [
          ".netlify/state.json",
          "netlify.toml"
        ];
        
        netlifyConfigFiles.forEach(file => {
          if (fs.existsSync(file)) {
            const targetPath = path.join(netlifyBackupPath, path.basename(file));
            fs.copyFileSync(file, targetPath);
          }
        });
      }
      
      // Backup Netlify functions configuration
      const netlifyConfig = {
        functions: this.config.netlify.includeFunctions,
        manifests: this.config.netlify.includeManifests,
        config: this.config.netlify.includeConfig,
        backupInterval: this.config.netlify.backupInterval,
        maxBackups: this.config.netlify.maxBackups
      };
      
      fs.writeFileSync(path.join(netlifyBackupPath, "netlify-config.json"), JSON.stringify(netlifyConfig, null, 2));
      
      this.lastBackup.netlify = new Date().toISOString();
      this.log(`Netlify Functions backup completed: ${backupId}`, "INFO");
      
    } catch (error) {
      this.log(`Netlify Functions backup failed: ${error.message}`, "ERROR");
      throw error;
    }
  }

  async backupSystemConfig(backupPath = null) {
    const backupId = backupPath ? path.basename(backupPath) : this.generateBackupId();
    const systemBackupPath = backupPath ? path.join(backupPath, "system") : path.join(this.backupDir, backupId, "system");
    
    try {
      fs.mkdirSync(systemBackupPath, { recursive: true });
      
      // Backup package.json
      if (fs.existsSync("package.json")) {
        fs.copyFileSync("package.json", path.join(systemBackupPath, "package.json"));
      }
      
      // Backup automation configuration
      const automationConfig = {
        timestamp: new Date().toISOString(),
        config: this.config,
        lastBackup: this.lastBackup
      };
      
      fs.writeFileSync(path.join(systemBackupPath, "automation-config.json"), JSON.stringify(automationConfig, null, 2));
      
      // Backup important automation files
      const importantFiles = [
        "automation/ultimate-redundancy-automation-system.cjs",
        "automation/start-ultimate-redundancy-automation.sh",
        "automation/comprehensive-redundancy-orchestrator.cjs"
      ];
      
      importantFiles.forEach(file => {
        if (fs.existsSync(file)) {
          const targetPath = path.join(systemBackupPath, path.basename(file));
          fs.copyFileSync(file, targetPath);
        }
      });
      
      this.lastBackup.system = new Date().toISOString();
      this.log(`System configuration backup completed: ${backupId}`, "INFO");
      
    } catch (error) {
      this.log(`System configuration backup failed: ${error.message}`, "ERROR");
      throw error;
    }
  }

  async performRecovery(backupId, components = ["pm2", "github", "netlify", "system"]) {
    if (!this.config.recovery.enabled) {
      throw new Error("Recovery is disabled in configuration");
    }
    
    this.log(`Starting recovery from backup: ${backupId}`, "INFO");
    
    const backupPath = path.join(this.backupDir, backupId);
    if (!fs.existsSync(backupPath)) {
      throw new Error(`Backup not found: ${backupId}`);
    }
    
    // Load backup manifest
    const manifestPath = path.join(backupPath, "backup-manifest.json");
    if (!fs.existsSync(manifestPath)) {
      throw new Error(`Backup manifest not found: ${backupId}`);
    }
    
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    
    try {
      const results = [];
      
      for (const component of components) {
        if (manifest.results.find(r => r.component === component)?.status === "success") {
          try {
            await this.recoverComponent(component, backupPath);
            results.push({ component, status: "success" });
            this.log(`Recovery of ${component} completed successfully`, "INFO");
          } catch (error) {
            results.push({ component, status: "failed", error: error.message });
            this.log(`Recovery of ${component} failed: ${error.message}`, "ERROR");
            
            if (this.config.recovery.rollbackOnFailure) {
              this.log(`Rolling back ${component} recovery...`, "WARN");
              await this.rollbackComponent(component);
            }
          }
        } else {
          results.push({ component, status: "skipped", reason: "backup not available" });
        }
      }
      
      // Record recovery attempt
      const recoveryRecord = {
        timestamp: new Date().toISOString(),
        backupId,
        components,
        results,
        success: results.every(r => r.status === "success")
      };
      
      this.recoveryHistory.push(recoveryRecord);
      this.saveRecoveryHistory();
      
      this.log(`Recovery completed. Success: ${recoveryRecord.success}`, "INFO");
      return recoveryRecord;
      
    } catch (error) {
      this.log(`Recovery failed: ${error.message}`, "ERROR");
      throw error;
    }
  }

  async recoverComponent(component, backupPath) {
    const componentBackupPath = path.join(backupPath, component);
    
    switch (component) {
      case "pm2":
        await this.recoverPM2(componentBackupPath);
        break;
      case "github":
        await this.recoverGitHubActions(componentBackupPath);
        break;
      case "netlify":
        await this.recoverNetlifyFunctions(componentBackupPath);
        break;
      case "system":
        await this.recoverSystemConfig(componentBackupPath);
        break;
      default:
        throw new Error(`Unknown component: ${component}`);
    }
  }

  async recoverPM2(backupPath) {
    // Stop all PM2 processes
    try {
      execSync("pm2 stop all", { stdio: "inherit" });
    } catch (error) {
      this.log("No PM2 processes to stop", "INFO");
    }
    
    // Restore ecosystem files
    const ecosystemFiles = fs.readdirSync(backupPath).filter(file => file.endsWith('.cjs'));
    ecosystemFiles.forEach(file => {
      fs.copyFileSync(path.join(backupPath, file), file);
    });
    
    // Restart PM2 processes
    ecosystemFiles.forEach(file => {
      try {
        execSync(`pm2 start ${file} --update-env`, { stdio: "inherit" });
      } catch (error) {
        this.log(`Failed to restart PM2 ecosystem ${file}: ${error.message}`, "ERROR");
      }
    });
  }

  async recoverGitHubActions(backupPath) {
    // Restore workflow files
    const workflowFiles = fs.readdirSync(backupPath).filter(file => file.endsWith('.yml') || file.endsWith('.yaml'));
    
    if (!fs.existsSync(".github/workflows")) {
      fs.mkdirSync(".github/workflows", { recursive: true });
    }
    
    workflowFiles.forEach(file => {
      fs.copyFileSync(
        path.join(backupPath, file),
        path.join(".github/workflows", file)
      );
    });
  }

  async recoverNetlifyFunctions(backupPath) {
    // Restore functions manifest
    const manifestPath = path.join(backupPath, "functions-manifest.json");
    if (fs.existsSync(manifestPath)) {
      if (!fs.existsSync("netlify/functions")) {
        fs.mkdirSync("netlify/functions", { recursive: true });
      }
      fs.copyFileSync(manifestPath, "netlify/functions/functions-manifest.json");
    }
    
    // Restore Netlify configuration
    const configFiles = fs.readdirSync(backupPath).filter(file => file !== "functions-manifest.json" && file !== "netlify-config.json");
    configFiles.forEach(file => {
      fs.copyFileSync(path.join(backupPath, file), file);
    });
  }

  async recoverSystemConfig(backupPath) {
    // Restore package.json
    const packageJsonPath = path.join(backupPath, "package.json");
    if (fs.existsSync(packageJsonPath)) {
      fs.copyFileSync(packageJsonPath, "package.json");
    }
    
    // Restore automation files
    const automationFiles = fs.readdirSync(backupPath).filter(file => file.endsWith('.cjs') || file.endsWith('.sh'));
    automationFiles.forEach(file => {
      const targetPath = path.join("automation", file);
      fs.copyFileSync(path.join(backupPath, file), targetPath);
    });
    
    // Make shell scripts executable
    const shellScripts = fs.readdirSync(backupPath).filter(file => file.endsWith('.sh'));
    shellScripts.forEach(file => {
      const targetPath = path.join("automation", file);
      if (fs.existsSync(targetPath)) {
        fs.chmodSync(targetPath, 0o755);
      }
    });
  }

  async rollbackComponent(component) {
    this.log(`Rolling back ${component}...`, "INFO");
    
    // This is a simplified rollback - in a real system, you'd want more sophisticated rollback logic
    try {
      switch (component) {
        case "pm2":
          execSync("pm2 restart all", { stdio: "inherit" });
          break;
        case "github":
          // Git checkout to restore workflows
          execSync("git checkout HEAD -- .github/workflows", { stdio: "inherit" });
          break;
        case "netlify":
          // Git checkout to restore Netlify config
          execSync("git checkout HEAD -- netlify", { stdio: "inherit" });
          break;
        case "system":
          // Git checkout to restore system files
          execSync("git checkout HEAD -- package.json automation/", { stdio: "inherit" });
          break;
      }
      
      this.log(`${component} rollback completed`, "INFO");
    } catch (error) {
      this.log(`${component} rollback failed: ${error.message}`, "ERROR");
    }
  }

  async cleanupOldBackups() {
    const backups = fs.readdirSync(this.backupDir)
      .filter(item => fs.statSync(path.join(this.backupDir, item)).isDirectory())
      .map(item => ({
        name: item,
        path: path.join(this.backupDir, item),
        timestamp: fs.statSync(path.join(this.backupDir, item)).mtime
      }))
      .sort((a, b) => b.timestamp - a.timestamp);
    
    // Keep only the most recent backups according to retention policy
    const toDelete = backups.slice(this.config.backup.retention.daily);
    
    toDelete.forEach(backup => {
      try {
        fs.rmSync(backup.path, { recursive: true, force: true });
        this.log(`Deleted old backup: ${backup.name}`, "INFO");
      } catch (error) {
        this.log(`Failed to delete old backup ${backup.name}: ${error.message}`, "ERROR");
      }
    });
  }

  generateBackupId() {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const random = Math.random().toString(36).substring(2, 8);
    return `backup-${timestamp}-${random}`;
  }

  calculateDirectorySize(dirPath) {
    let size = 0;
    const files = fs.readdirSync(dirPath);
    
    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isDirectory()) {
        size += this.calculateDirectorySize(filePath);
      } else {
        size += stats.size;
      }
    });
    
    return size;
  }

  async calculateChecksum(dirPath) {
    // Simple checksum calculation for demonstration
    const files = fs.readdirSync(dirPath).sort();
    let checksum = "";
    
    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);
      checksum += `${file}:${stats.size}:${stats.mtime.getTime()}`;
    });
    
    return crypto.createHash('md5').update(checksum).digest('hex');
  }

  async compressBackup(backupPath) {
    try {
      const archiveName = `${path.basename(backupPath)}.tar.gz`;
      const archivePath = path.join(path.dirname(backupPath), archiveName);
      
      execSync(`tar -czf "${archivePath}" -C "${path.dirname(backupPath)}" "${path.basename(backupPath)}"`, { stdio: "inherit" });
      
      // Remove uncompressed backup
      fs.rmSync(backupPath, { recursive: true, force: true });
      
      this.log(`Backup compressed: ${archiveName}`, "INFO");
    } catch (error) {
      this.log(`Backup compression failed: ${error.message}`, "ERROR");
    }
  }

  saveBackupHistory() {
    const historyFile = path.join(this.backupDir, "backup-history.json");
    fs.writeFileSync(historyFile, JSON.stringify(this.backupHistory, null, 2));
  }

  saveRecoveryHistory() {
    const historyFile = path.join(this.backupDir, "recovery-history.json");
    fs.writeFileSync(historyFile, JSON.stringify(this.recoveryHistory, null, 2));
  }

  getBackupHistory() {
    return this.backupHistory;
  }

  getRecoveryHistory() {
    return this.recoveryHistory;
  }

  getLastBackup() {
    return this.lastBackup;
  }

  getBackupStatus() {
    return {
      lastBackup: this.lastBackup,
      totalBackups: this.backupHistory.length,
      totalRecoveries: this.recoveryHistory.length,
      nextScheduledBackup: this.getNextScheduledBackup(),
      backupDirectory: this.backupDir,
      config: this.config
    };
  }

  getNextScheduledBackup() {
    const now = new Date();
    const nextBackup = new Date(now);
    nextBackup.setHours(2, 0, 0, 0);
    
    if (nextBackup <= now) {
      nextBackup.setDate(nextBackup.getDate() + 1);
    }
    
    return nextBackup.toISOString();
  }
}

// CLI Interface
if (require.main === module) {
  const system = new ComprehensiveBackupRecoverySystem();
  const command = process.argv[2];
  
  switch (command) {
    case "backup":
      system.performFullBackup().catch(console.error);
      break;
    case "recover":
      const backupId = process.argv[3];
      const components = process.argv[4] ? process.argv[4].split(',') : ["pm2", "github", "netlify", "system"];
      if (!backupId) {
        console.error("Usage: node comprehensive-backup-recovery-system.cjs recover <backup-id> [components]");
        process.exit(1);
      }
      system.performRecovery(backupId, components).catch(console.error);
      break;
    case "status":
      console.log(JSON.stringify(system.getBackupStatus(), null, 2));
      break;
    case "history":
      console.log("Backup History:", JSON.stringify(system.getBackupHistory(), null, 2));
      console.log("Recovery History:", JSON.stringify(system.getRecoveryHistory(), null, 2));
      break;
    case "start":
      system.startBackupScheduler().catch(console.error);
      break;
    default:
      console.log("Usage: node comprehensive-backup-recovery-system.cjs [backup|recover|status|history|start]");
      process.exit(1);
  }
}

module.exports = ComprehensiveBackupRecoverySystem;