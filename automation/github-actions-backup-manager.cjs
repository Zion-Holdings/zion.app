#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class GitHubActionsBackupManager {
  constructor() {
    this.workspace = process.cwd();
    this.workflowsDir = path.join(this.workspace, ".github/workflows");
    this.backupDir = path.join(this.workflowsDir, "backups");
    this.logDir = path.join(this.workspace, "automation/logs");
    
    this.ensureDirectories();
    
    this.workflows = [
      "marketing-sync.yml",
      "sync-health.yml"
    ];
    
    this.logger = this.createLogger();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.backupDir)) {
      fs.mkdirSync(this.backupDir, { recursive: true });
    }
    
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  createLogger() {
    const logFile = path.join(this.logDir, "github-actions-backup.log");
    return {
      info: (msg) => this.log("INFO", msg, logFile),
      warn: (msg) => this.log("WARN", msg, logFile),
      error: (msg) => this.log("ERROR", msg, logFile),
      debug: (msg) => this.log("DEBUG", msg, logFile)
    };
  }

  log(level, message, logFile) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    try {
      fs.appendFileSync(logFile, logEntry);
    } catch (err) {
      console.error(`Failed to write to log file: ${err.message}`);
    }
    
    console.log(`[${level}] ${message}`);
  }

  async createBackups() {
    this.logger.info("Creating GitHub Actions workflow backups...");
    
    const results = [];
    
    for (const workflow of this.workflows) {
      const workflowPath = path.join(this.workflowsDir, workflow);
      const backupPath = path.join(this.backupDir, `${workflow}.backup`);
      
      try {
        if (fs.existsSync(workflowPath)) {
          // Create backup with timestamp
          const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
          const timestampedBackup = path.join(this.backupDir, `${workflow}.${timestamp}.backup`);
          
          fs.copyFileSync(workflowPath, timestampedBackup);
          
          // Also create/update the latest backup
          fs.copyFileSync(workflowPath, backupPath);
          
          const stats = fs.statSync(workflowPath);
          results.push({
            workflow,
            status: "backed_up",
            size: stats.size,
            lastModified: stats.mtime,
            backupPath: timestampedBackup
          });
          
          this.logger.info(`Created backup for ${workflow}: ${timestampedBackup}`);
        } else {
          results.push({
            workflow,
            status: "not_found",
            error: "Workflow file does not exist"
          });
          
          this.logger.warn(`Workflow file not found: ${workflow}`);
        }
      } catch (error) {
        results.push({
          workflow,
          status: "backup_failed",
          error: error.message
        });
        
        this.logger.error(`Failed to backup ${workflow}: ${error.message}`);
      }
    }
    
    // Create backup manifest
    this.createBackupManifest(results);
    
    this.logger.info("GitHub Actions workflow backup process completed");
    return results;
  }

  async restoreFromBackup(workflowName) {
    this.logger.info(`Restoring workflow from backup: ${workflowName}`);
    
    const workflowPath = path.join(this.workflowsDir, workflowName);
    const backupPath = path.join(this.backupDir, `${workflowName}.backup`);
    
    try {
      if (!fs.existsSync(backupPath)) {
        throw new Error(`Backup file not found: ${backupPath}`);
      }
      
      // Create backup of current file if it exists
      if (fs.existsSync(workflowPath)) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
        const currentBackup = path.join(this.backupDir, `${workflowName}.current.${timestamp}.backup`);
        fs.copyFileSync(workflowPath, currentBackup);
        this.logger.info(`Created backup of current file: ${currentBackup}`);
      }
      
      // Restore from backup
      fs.copyFileSync(backupPath, workflowPath);
      
      this.logger.info(`Successfully restored ${workflowName} from backup`);
      return { success: true, workflow: workflowName };
    } catch (error) {
      this.logger.error(`Failed to restore ${workflowName}: ${error.message}`);
      return { success: false, workflow: workflowName, error: error.message };
    }
  }

  async restoreAllFromBackups() {
    this.logger.info("Restoring all workflows from backups...");
    
    const results = [];
    
    for (const workflow of this.workflows) {
      const result = await this.restoreFromBackup(workflow);
      results.push(result);
    }
    
    this.logger.info("Workflow restoration process completed");
    return results;
  }

  async validateWorkflows() {
    this.logger.info("Validating GitHub Actions workflows...");
    
    const results = [];
    
    for (const workflow of this.workflows) {
      const workflowPath = path.join(this.workflowsDir, workflow);
      const backupPath = path.join(this.backupDir, `${workflow}.backup`);
      
      try {
        if (fs.existsSync(workflowPath)) {
          const workflowContent = fs.readFileSync(workflowPath, "utf8");
          const workflowStats = fs.statSync(workflowPath);
          
          // Basic YAML validation
          let isValid = true;
          let validationError = null;
          
          try {
            // Simple YAML structure check
            if (!workflowContent.includes("name:") || !workflowContent.includes("on:")) {
              isValid = false;
              validationError = "Missing required YAML structure";
            }
          } catch (error) {
            isValid = false;
            validationError = error.message;
          }
          
          results.push({
            workflow,
            status: "exists",
            isValid,
            validationError,
            size: workflowStats.size,
            lastModified: workflowStats.mtime,
            hasBackup: fs.existsSync(backupPath)
          });
        } else {
          results.push({
            workflow,
            status: "missing",
            isValid: false,
            hasBackup: fs.existsSync(backupPath)
          });
        }
      } catch (error) {
        results.push({
          workflow,
          status: "error",
          error: error.message,
          isValid: false
        });
      }
    }
    
    this.logger.info("Workflow validation completed");
    return results;
  }

  async syncWithGit() {
    this.logger.info("Syncing workflow changes with git...");
    
    try {
      // Check git status
      const gitStatus = execSync("git status --porcelain", { encoding: "utf8" });
      
      if (gitStatus.trim()) {
        this.logger.info("Changes detected, committing workflow updates...");
        
        // Add all workflow files
        execSync("git add .github/workflows/", { stdio: "inherit" });
        
        // Commit changes
        const commitMessage = `ci(workflows): update GitHub Actions workflows [skip ci]`;
        execSync(`git commit -m "${commitMessage}"`, { stdio: "inherit" });
        
        this.logger.info("Workflow changes committed to git");
        
        // Push changes
        execSync("git push origin HEAD:main", { stdio: "inherit" });
        this.logger.info("Workflow changes pushed to remote");
      } else {
        this.logger.info("No workflow changes to commit");
      }
      
      return { success: true };
    } catch (error) {
      this.logger.error(`Git sync failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  createBackupManifest(results) {
    const manifest = {
      timestamp: new Date().toISOString(),
      totalWorkflows: this.workflows.length,
      backupResults: results,
      summary: {
        successful: results.filter(r => r.status === "backed_up").length,
        failed: results.filter(r => r.status === "backup_failed").length,
        notFound: results.filter(r => r.status === "not_found").length
      }
    };
    
    const manifestPath = path.join(this.backupDir, "backup-manifest.json");
    
    try {
      fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
      this.logger.info(`Backup manifest created: ${manifestPath}`);
    } catch (error) {
      this.logger.error(`Failed to create backup manifest: ${error.message}`);
    }
  }

  getBackupStatus() {
    const status = {
      workflows: this.workflows,
      backupDir: this.backupDir,
      backups: []
    };
    
    try {
      if (fs.existsSync(this.backupDir)) {
        const files = fs.readdirSync(this.backupDir);
        status.backups = files.filter(f => f.endsWith('.backup'));
      }
    } catch (error) {
      this.logger.error(`Failed to read backup directory: ${error.message}`);
    }
    
    return status;
  }

  async cleanupOldBackups(maxAge = 30) {
    this.logger.info(`Cleaning up backups older than ${maxAge} days...`);
    
    try {
      if (!fs.existsSync(this.backupDir)) {
        return { deleted: 0, error: "Backup directory not found" };
      }
      
      const files = fs.readdirSync(this.backupDir);
      const now = Date.now();
      const maxAgeMs = maxAge * 24 * 60 * 60 * 1000;
      
      let deleted = 0;
      
      for (const file of files) {
        if (file.endsWith('.backup') && file !== 'backup-manifest.json') {
          const filePath = path.join(this.backupDir, file);
          const stats = fs.statSync(filePath);
          const age = now - stats.mtime.getTime();
          
          if (age > maxAgeMs) {
            fs.unlinkSync(filePath);
            deleted++;
            this.logger.info(`Deleted old backup: ${file}`);
          }
        }
      }
      
      this.logger.info(`Cleanup completed: ${deleted} old backups deleted`);
      return { deleted };
    } catch (error) {
      this.logger.error(`Cleanup failed: ${error.message}`);
      return { deleted: 0, error: error.message };
    }
  }

  async runFullBackupCycle() {
    this.logger.info("Starting full backup cycle...");
    
    try {
      // Create backups
      const backupResults = await this.createBackups();
      
      // Validate workflows
      const validationResults = await this.validateWorkflows();
      
      // Sync with git
      const gitResults = await this.syncWithGit();
      
      // Cleanup old backups
      const cleanupResults = await this.cleanupOldBackups();
      
      const cycleResults = {
        timestamp: new Date().toISOString(),
        backup: backupResults,
        validation: validationResults,
        git: gitResults,
        cleanup: cleanupResults
      };
      
      this.logger.info("Full backup cycle completed successfully");
      return cycleResults;
    } catch (error) {
      this.logger.error(`Full backup cycle failed: ${error.message}`);
      throw error;
    }
  }
}

// CLI interface
if (require.main === module) {
  const manager = new GitHubActionsBackupManager();
  
  const command = process.argv[2];
  
  switch (command) {
    case "backup":
      manager.createBackups().then(results => {
        console.log("Backup results:", JSON.stringify(results, null, 2));
      });
      break;
      
    case "restore":
      const workflow = process.argv[3];
      if (workflow) {
        manager.restoreFromBackup(workflow).then(result => {
          console.log("Restore result:", JSON.stringify(result, null, 2));
        });
      } else {
        manager.restoreAllFromBackups().then(results => {
          console.log("Restore results:", JSON.stringify(results, null, 2));
        });
      }
      break;
      
    case "validate":
      manager.validateWorkflows().then(results => {
        console.log("Validation results:", JSON.stringify(results, null, 2));
      });
      break;
      
    case "sync":
      manager.syncWithGit().then(result => {
        console.log("Git sync result:", JSON.stringify(result, null, 2));
      });
      break;
      
    case "status":
      console.log(JSON.stringify(manager.getBackupStatus(), null, 2));
      break;
      
    case "cleanup":
      const maxAge = parseInt(process.argv[3]) || 30;
      manager.cleanupOldBackups(maxAge).then(result => {
        console.log("Cleanup result:", JSON.stringify(result, null, 2));
      });
      break;
      
    case "cycle":
      manager.runFullBackupCycle().then(results => {
        console.log("Full cycle results:", JSON.stringify(results, null, 2));
      }).catch(error => {
        console.error("Cycle failed:", error.message);
        process.exit(1);
      });
      break;
      
    default:
      console.log("Usage: node github-actions-backup-manager.cjs [backup|restore|validate|sync|status|cleanup|cycle] [workflow_name] [max_age_days]");
      process.exit(1);
  }
}

module.exports = GitHubActionsBackupManager;