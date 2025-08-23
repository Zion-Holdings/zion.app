#!/usr/bin/env node
"use strict";

const { spawnSync, execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class GitHubActionsCompleteRedundancy {
  constructor() {
    this.workspace = process.cwd();
    this.workflowsDir = path.join(this.workspace, ".github/workflows");
    this.backupsDir = path.join(this.workflowsDir, "backups");
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "github-actions-complete-redundancy.log");
    this.statusFile = path.join(this.workspace, "automation/github-actions-redundancy-status.json");
    this.ensureLogDir();
    
    this.config = {
      // All GitHub Actions Workflows
      workflows: [
        "marketing-sync.yml",
        "sync-health.yml",
        "marketing-sync-backup.yml",
        "sync-health-backup.yml"
      ],
      
      // Workflow configurations with redundancy settings
      workflowConfigs: {
        "marketing-sync.yml": {
          schedule: "0 */12 * * *", // Every 12 hours
          backupSchedule: "0 */6 * * *", // Every 6 hours
          maxRetries: 3,
          timeoutMinutes: 30,
          critical: true
        },
        "sync-health.yml": {
          schedule: "*/15 * * * *", // Every 15 minutes
          backupSchedule: "*/10 * * * *", // Every 10 minutes
          maxRetries: 5,
          timeoutMinutes: 15,
          critical: true
        },
        "marketing-sync-backup.yml": {
          schedule: "0 */6 * * *", // Every 6 hours
          backupSchedule: "0 */3 * * *", // Every 3 hours
          maxRetries: 2,
          timeoutMinutes: 45,
          critical: false
        },
        "sync-health-backup.yml": {
          schedule: "*/10 * * * *", // Every 10 minutes
          backupSchedule: "*/5 * * * *", // Every 5 minutes
          maxRetries: 3,
          timeoutMinutes: 20,
          critical: false
        }
      },
      
      // Redundancy strategies
      redundancyStrategies: {
        "marketing-sync.yml": "backup_workflow",
        "sync-health.yml": "backup_workflow",
        "marketing-sync-backup.yml": "alternate_schedule",
        "sync-health-backup.yml": "alternate_schedule"
      }
    };
    
    this.status = this.loadStatus();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
    if (!fs.existsSync(this.backupsDir)) {
      fs.mkdirSync(this.backupsDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + "\n");
    } catch (error) {
      console.error("Failed to write to log file:", error.message);
    }
  }

  loadStatus() {
    try {
      if (fs.existsSync(this.statusFile)) {
        return JSON.parse(fs.readFileSync(this.statusFile, "utf8"));
      }
    } catch (error) {
      this.log(`Failed to load status file: ${error.message}`, "WARN");
    }
    
    return {
      lastCheck: null,
      workflows: {},
      backups: {},
      healthScore: 0,
      issues: [],
      lastBackup: null
    };
  }

  saveStatus() {
    try {
      this.status.lastCheck = new Date().toISOString();
      fs.writeFileSync(this.statusFile, JSON.stringify(this.status, null, 2));
    } catch (error) {
      this.log(`Failed to save status: ${error.message}`, "ERROR");
    }
  }

  async checkWorkflowStatus(workflowName) {
    const workflowPath = path.join(this.workflowsDir, workflowName);
    const backupPath = path.join(this.backupsDir, workflowName);
    
    const status = {
      name: workflowName,
      exists: fs.existsSync(workflowPath),
      backupExists: fs.existsSync(backupPath),
      lastModified: null,
      lastBackupModified: null,
      size: 0,
      backupSize: 0,
      checksum: null,
      backupChecksum: null,
      config: this.config.workflowConfigs[workflowName] || {}
    };
    
    if (status.exists) {
      const stats = fs.statSync(workflowPath);
      status.lastModified = stats.mtime;
      status.size = stats.size;
      status.checksum = this.calculateChecksum(workflowPath);
    }
    
    if (status.backupExists) {
      const backupStats = fs.statSync(backupPath);
      status.lastBackupModified = backupStats.mtime;
      status.backupSize = backupStats.size;
      status.backupChecksum = this.calculateChecksum(backupPath);
    }
    
    return status;
  }

  calculateChecksum(filePath) {
    try {
      const content = fs.readFileSync(filePath, "utf8");
      return crypto.createHash("md5").update(content).digest("hex");
    } catch (error) {
      return null;
    }
  }

  async checkAllWorkflows() {
    this.log("Checking all GitHub Actions workflows...");
    
    this.status.workflows = {};
    
    for (const workflow of this.config.workflows) {
      this.status.workflows[workflow] = await this.checkWorkflowStatus(workflow);
    }
    
    this.log(`Checked ${Object.keys(this.status.workflows).length} workflows`);
  }

  async createBackup(workflowName) {
    const workflowPath = path.join(this.workflowsDir, workflowName);
    const backupPath = path.join(this.backupsDir, workflowName);
    
    if (!fs.existsSync(workflowPath)) {
      this.log(`Workflow ${workflowName} does not exist, skipping backup`, "WARN");
      return false;
    }
    
    try {
      // Create backup
      fs.copyFileSync(workflowPath, backupPath);
      
      // Update status
      this.status.backups[workflowName] = {
        lastBackup: new Date().toISOString(),
        size: fs.statSync(backupPath).size,
        checksum: this.calculateChecksum(backupPath)
      };
      
      this.status.lastBackup = new Date().toISOString();
      
      this.log(`Created backup for ${workflowName}`);
      return true;
      
    } catch (error) {
      this.log(`Failed to create backup for ${workflowName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async createAllBackups() {
    this.log("Creating backups for all workflows...");
    
    let successCount = 0;
    for (const workflow of this.config.workflows) {
      if (await this.createBackup(workflow)) {
        successCount++;
      }
    }
    
    this.log(`Created ${successCount}/${this.config.workflows.length} backups`);
    this.saveStatus();
  }

  async restoreWorkflow(workflowName) {
    const workflowPath = path.join(this.workflowsDir, workflowName);
    const backupPath = path.join(this.backupsDir, workflowName);
    
    if (!fs.existsSync(backupPath)) {
      this.log(`No backup found for ${workflowName}`, "WARN");
      return false;
    }
    
    try {
      // Restore from backup
      fs.copyFileSync(backupPath, workflowPath);
      
      this.log(`Restored ${workflowName} from backup`);
      return true;
      
    } catch (error) {
      this.log(`Failed to restore ${workflowName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restoreAllWorkflows() {
    this.log("Restoring all workflows from backups...");
    
    let successCount = 0;
    for (const workflow of this.config.workflows) {
      if (await this.restoreWorkflow(workflow)) {
        successCount++;
      }
    }
    
    this.log(`Restored ${successCount}/${this.config.workflows.length} workflows`);
  }

  async validateWorkflow(workflowName) {
    const workflowPath = path.join(this.workflowsDir, workflowflowName);
    
    if (!fs.existsSync(workflowPath)) {
      return { valid: false, error: "Workflow file does not exist" };
    }
    
    try {
      const content = fs.readFileSync(workflowPath, "utf8");
      
      // Basic YAML validation
      if (!content.includes("name:") || !content.includes("on:")) {
        return { valid: false, error: "Invalid workflow structure" };
      }
      
      // Check for required sections
      const requiredSections = ["name", "on", "jobs"];
      for (const section of requiredSections) {
        if (!content.includes(`${section}:`)) {
          return { valid: false, error: `Missing required section: ${section}` };
        }
      }
      
      return { valid: true, error: null };
      
    } catch (error) {
      return { valid: false, error: error.message };
    }
  }

  async validateAllWorkflows() {
    this.log("Validating all workflows...");
    
    const validationResults = {};
    
    for (const workflow of this.config.workflows) {
      validationResults[workflow] = await this.validateWorkflow(workflow);
    }
    
    // Check for validation issues
    const invalidWorkflows = Object.entries(validationResults)
      .filter(([name, result]) => !result.valid)
      .map(([name, result]) => ({ name, error: result.error }));
    
    if (invalidWorkflows.length > 0) {
      this.log(`Found ${invalidWorkflows.length} invalid workflows:`, "WARN");
      invalidWorkflows.forEach(wf => {
        this.log(`  ${wf.name}: ${wf.error}`, "WARN");
      });
      
      this.status.issues.push({
        type: "invalid_workflows",
        workflows: invalidWorkflows,
        timestamp: new Date().toISOString()
      });
    }
    
    return validationResults;
  }

  async createRedundantWorkflow(workflowName) {
    const workflowPath = path.join(this.workflowsDir, workflowName);
    const backupPath = path.join(this.backupsDir, workflowName);
    
    if (!fs.existsSync(workflowPath)) {
      this.log(`Cannot create redundant workflow for ${workflowName}: original does not exist`, "WARN");
      return false;
    }
    
    const strategy = this.config.redundancyStrategies[workflowName];
    let redundantContent = "";
    
    try {
      const originalContent = fs.readFileSync(workflowPath, "utf8");
      
      switch (strategy) {
        case "backup_workflow":
          // Create a backup workflow with different schedule
          redundantContent = this.createBackupWorkflowContent(workflowName, originalContent);
          break;
          
        case "alternate_schedule":
          // Create an alternate schedule version
          redundantContent = this.createAlternateScheduleContent(workflowName, originalContent);
          break;
          
        default:
          this.log(`Unknown redundancy strategy for ${workflowName}: ${strategy}`, "WARN");
          return false;
      }
      
      // Write redundant workflow
      const redundantName = `${workflowName.replace('.yml', '')}-redundant.yml`;
      const redundantPath = path.join(this.workflowsDir, redundantName);
      
      fs.writeFileSync(redundantPath, redundantContent);
      
      this.log(`Created redundant workflow: ${redundantName}`);
      return true;
      
    } catch (error) {
      this.log(`Failed to create redundant workflow for ${workflowName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  createBackupWorkflowContent(workflowName, originalContent) {
    // Create a backup workflow with different schedule and retry logic
    const backupSchedule = this.config.workflowConfigs[workflowName]?.backupSchedule || "0 */6 * * *";
    
    return originalContent
      .replace(/name: .*/, `name: ${workflowName.replace('.yml', '')} (Backup)`)
      .replace(/schedule:\s*-\s*cron:\s*['"][^'"]*['"]/, `schedule:\n    - cron: '${backupSchedule}'`)
      .replace(/timeout-minutes:\s*\d+/, "timeout-minutes: 60")
      .replace(/retries:\s*\d+/, "retries: 5");
  }

  createAlternateScheduleContent(workflowName, originalContent) {
    // Create an alternate schedule version
    const alternateSchedule = this.config.workflowConfigs[workflowName]?.backupSchedule || "0 */3 * * *";
    
    return originalContent
      .replace(/name: .*/, `name: ${workflowName.replace('.yml', '')} (Alternate)`)
      .replace(/schedule:\s*-\s*cron:\s*['"][^'"]*['"]/, `schedule:\n    - cron: '${alternateSchedule}'`);
  }

  async createAllRedundantWorkflows() {
    this.log("Creating redundant workflows for all critical workflows...");
    
    let successCount = 0;
    for (const workflow of this.config.workflows) {
      if (this.config.workflowConfigs[workflow]?.critical) {
        if (await this.createRedundantWorkflow(workflow)) {
          successCount++;
        }
      }
    }
    
    this.log(`Created ${successCount} redundant workflows`);
  }

  async triggerWorkflow(workflowName) {
    try {
      // Use GitHub CLI to trigger workflow
      const result = execSync(`gh workflow run "${workflowName}"`, { 
        encoding: "utf8",
        stdio: "pipe"
      });
      
      this.log(`Triggered workflow: ${workflowName}`);
      return true;
      
    } catch (error) {
      this.log(`Failed to trigger workflow ${workflowName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async triggerAllWorkflows() {
    this.log("Triggering all workflows...");
    
    let successCount = 0;
    for (const workflow of this.config.workflows) {
      if (fs.existsSync(path.join(this.workflowsDir, workflow))) {
        if (await this.triggerWorkflow(workflow)) {
          successCount++;
        }
      }
    }
    
    this.log(`Triggered ${successCount}/${this.config.workflows.length} workflows`);
  }

  calculateHealthScore() {
    let score = 100;
    let totalChecks = 0;
    
    // Workflow existence (40% weight)
    const existingWorkflows = Object.values(this.status.workflows).filter(w => w.exists).length;
    const workflowScore = (existingWorkflows / this.config.workflows.length) * 100;
    score += workflowScore * 0.4;
    totalChecks++;
    
    // Backup existence (30% weight)
    const workflowsWithBackups = Object.values(this.status.workflows).filter(w => w.backupExists).length;
    const backupScore = (workflowsWithBackups / this.config.workflows.length) * 100;
    score += backupScore * 0.3;
    totalChecks++;
    
    // Workflow validation (30% weight)
    const validWorkflows = Object.values(this.status.workflows).filter(w => w.exists).length;
    const validationScore = (validWorkflows / this.config.workflows.length) * 100;
    score += validationScore * 0.3;
    totalChecks++;
    
    if (totalChecks > 0) {
      this.status.healthScore = Math.round(score / totalChecks);
    }
    
    return this.status.healthScore;
  }

  async runHealthCheck() {
    this.log("Running comprehensive GitHub Actions health check...");
    
    await this.checkAllWorkflows();
    await this.validateAllWorkflows();
    
    const healthScore = this.calculateHealthScore();
    this.log(`GitHub Actions health score: ${healthScore}/100`);
    
    this.saveStatus();
    
    return this.status;
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      healthScore: this.status.healthScore,
      summary: {
        total: this.config.workflows.length,
        existing: Object.values(this.status.workflows).filter(w => w.exists).length,
        withBackups: Object.values(this.status.workflows).filter(w => w.backupExists).length,
        lastBackup: this.status.lastBackup
      },
      workflows: this.status.workflows,
      issues: this.status.issues,
      recommendations: this.generateRecommendations()
    };
    
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.status.healthScore < 70) {
      recommendations.push("Health score is low - check workflow configurations and backups");
    }
    
    const missingWorkflows = this.config.workflows.filter(name => 
      !this.status.workflows[name]?.exists
    );
    
    if (missingWorkflows.length > 0) {
      recommendations.push(`Missing workflows: ${missingWorkflows.join(", ")} - restore from backups`);
    }
    
    const workflowsWithoutBackups = this.config.workflows.filter(name => 
      this.status.workflows[name]?.exists && !this.status.workflows[name]?.backupExists
    );
    
    if (workflowsWithoutBackups.length > 0) {
      recommendations.push(`Workflows without backups: ${workflowsWithoutBackups.join(", ")} - create backups`);
    }
    
    if (this.status.issues.length > 0) {
      recommendations.push("Active issues detected - review and resolve");
    }
    
    return recommendations;
  }

  async runCommand(command, args = []) {
    switch (command) {
      case "check":
        await this.runHealthCheck();
        console.log(JSON.stringify(this.status, null, 2));
        break;
        
      case "backup":
        await this.createAllBackups();
        break;
        
      case "restore":
        await this.restoreAllWorkflows();
        break;
        
      case "validate":
        await this.validateAllWorkflows();
        break;
        
      case "redundant":
        await this.createAllRedundantWorkflows();
        break;
        
      case "trigger":
        await this.triggerAllWorkflows();
        break;
        
      case "report":
        await this.runHealthCheck();
        const report = this.generateReport();
        console.log(JSON.stringify(report, null, 2));
        break;
        
      case "health":
        await this.runHealthCheck();
        console.log(`Health Score: ${this.status.healthScore}/100`);
        break;
        
      default:
        console.log("Available commands: check, backup, restore, validate, redundant, trigger, report, health");
        break;
    }
  }
}

// CLI Interface
if (require.main === module) {
  const redundancy = new GitHubActionsCompleteRedundancy();
  const command = process.argv[2] || "check";
  
  redundancy.runCommand(command, process.argv.slice(3))
    .then(() => {
      process.exit(0);
    })
    .catch((error) => {
      console.error("Error:", error.message);
      process.exit(1);
    });
}

module.exports = GitHubActionsCompleteRedundancy;