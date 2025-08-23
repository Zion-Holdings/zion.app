#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class GitHubActionsRedundancyManager {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "github-actions-redundancy-manager.log");
    this.ensureLogDir();
    
    this.config = {
      workflowsDir: ".github/workflows",
      primaryWorkflows: [
        "marketing-sync",
        "sync-health"
      ],
      backupWorkflows: [
        "marketing-sync-backup",
        "sync-health-backup"
      ],
      allWorkflows: [],
      triggerInterval: 300000, // 5 minutes
      maxRetries: 3,
      retryDelay: 60000, // 1 minute
      healthCheckInterval: 60000, // 1 minute
      workflowTimeout: 300000, // 5 minutes
      backupRotationInterval: 1800000, // 30 minutes
      triggerMethod: "file_modification" // or "api_call" or "git_push"
    };
    
    // Initialize all workflows list
    this.config.allWorkflows = [
      ...this.config.primaryWorkflows,
      ...this.config.backupWorkflows
    ];
    
    this.monitoring = false;
    this.checkInterval = null;
    this.lastTrigger = new Map();
    this.workflowStatus = new Map();
    this.triggerCounts = new Map();
    this.healthHistory = new Map();
    this.lastBackupRotation = Date.now();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + "\n");
    } catch (error) {
      console.error(`Failed to write to log file: ${error.message}`);
    }
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: this.workspace,
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 20,
        timeout: options.timeout || 30000,
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

  async checkGitStatus() {
    try {
      const result = await this.runCommand("git", ["status", "--porcelain"]);
      return result.status === 0;
    } catch (error) {
      this.log(`Git status check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkGitRemote() {
    try {
      const result = await this.runCommand("git", ["remote", "get-url", "origin"]);
      return result.status === 0 && result.stdout.trim() !== "";
    } catch (error) {
      this.log(`Git remote check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async getWorkflowFile(workflowName) {
    const workflowFile = path.join(this.workspace, this.config.workflowsDir, `${workflowName}.yml`);
    if (fs.existsSync(workflowFile)) {
      return workflowFile;
    }
    return null;
  }

  async validateWorkflowFile(workflowName) {
    const workflowFile = await this.getWorkflowFile(workflowName);
    if (!workflowFile) {
      this.log(`Workflow file not found: ${workflowName}`, "WARN");
      return false;
    }
    
    try {
      const content = fs.readFileSync(workflowFile, 'utf8');
      
      // Basic validation
      if (!content.includes('name:') || !content.includes('on:')) {
        this.log(`Workflow file ${workflowName} is missing required fields`, "WARN");
        return false;
      }
      
      // Check for cron schedule
      if (content.includes('schedule:') && !content.includes('cron:')) {
        this.log(`Workflow file ${workflowName} has schedule but no cron`, "WARN");
        return false;
      }
      
      return true;
    } catch (error) {
      this.log(`Error validating workflow file ${workflowName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async triggerWorkflowByFileModification(workflowName) {
    try {
      const workflowFile = await this.getWorkflowFile(workflowName);
      if (!workflowFile) {
        this.log(`Cannot trigger workflow ${workflowName}: file not found`, "ERROR");
        return false;
      }
      
      this.log(`Triggering workflow ${workflowName} by file modification...`);
      
      const content = fs.readFileSync(workflowFile, 'utf8');
      const timestamp = new Date().toISOString();
      
      // Add or update trigger comment
      let newContent;
      if (content.includes('# Last triggered:')) {
        newContent = content.replace(
          /# Last triggered: .*/,
          `# Last triggered: ${timestamp}`
        );
      } else {
        newContent = content + `\n# Last triggered: ${timestamp}`;
      }
      
      if (content !== newContent) {
        fs.writeFileSync(workflowFile, newContent);
        
        // Commit and push the change
        await this.commitAndPushWorkflowChange(workflowName);
        
        this.log(`Successfully triggered workflow ${workflowName} by file modification`);
        return true;
      } else {
        this.log(`No changes needed for workflow ${workflowName}`);
        return false;
      }
    } catch (error) {
      this.log(`Error triggering workflow ${workflowName} by file modification: ${error.message}`, "ERROR");
      return false;
    }
  }

  async triggerWorkflowByGitPush(workflowName) {
    try {
      this.log(`Triggering workflow ${workflowName} by git push...`);
      
      // Create a small change to trigger the workflow
      const triggerFile = path.join(this.workspace, `.github/workflows/${workflowName}-trigger.txt`);
      const timestamp = new Date().toISOString();
      const content = `Triggered at: ${timestamp}\nWorkflow: ${workflowName}\n`;
      
      fs.writeFileSync(triggerFile, content);
      
      // Commit and push
      await this.commitAndPushWorkflowChange(workflowName);
      
      // Clean up trigger file
      fs.unlinkSync(triggerFile);
      
      this.log(`Successfully triggered workflow ${workflowName} by git push`);
      return true;
    } catch (error) {
      this.log(`Error triggering workflow ${workflowName} by git push: ${error.message}`, "ERROR");
      return false;
    }
  }

  async commitAndPushWorkflowChange(workflowName) {
    try {
      // Add the workflow file
      await this.runCommand("git", ["add", `.github/workflows/${workflowName}.yml`]);
      
      // Commit
      const commitMessage = `ci(trigger): update ${workflowName} workflow [skip ci]`;
      await this.runCommand("git", ["commit", "-m", commitMessage]);
      
      // Push
      await this.runCommand("git", ["push", "origin", "main"]);
      
      this.log(`Successfully committed and pushed workflow change for ${workflowName}`);
    } catch (error) {
      this.log(`Error committing and pushing workflow change for ${workflowName}: ${error.message}`, "ERROR");
      throw error;
    }
  }

  async triggerWorkflow(workflowName) {
    try {
      const now = Date.now();
      const lastTrigger = this.lastTrigger.get(workflowName) || 0;
      const timeSinceLastTrigger = now - lastTrigger;
      
      if (timeSinceLastTrigger < this.config.triggerInterval) {
        this.log(`Workflow ${workflowName} was triggered recently, skipping...`);
        return false;
      }
      
      this.log(`Triggering workflow: ${workflowName}`);
      
      let success = false;
      switch (this.config.triggerMethod) {
        case "file_modification":
          success = await this.triggerWorkflowByFileModification(workflowName);
          break;
        case "git_push":
          success = await this.triggerWorkflowByGitPush(workflowName);
          break;
        default:
          this.log(`Unknown trigger method: ${this.config.triggerMethod}`, "ERROR");
          return false;
      }
      
      if (success) {
        this.lastTrigger.set(workflowName, now);
        const count = this.triggerCounts.get(workflowName) || 0;
        this.triggerCounts.set(workflowName, count + 1);
        this.log(`Workflow ${workflowName} triggered successfully`);
      }
      
      return success;
    } catch (error) {
      this.log(`Error triggering workflow ${workflowName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async managePrimaryWorkflows() {
    this.log("Managing primary GitHub Actions workflows...");
    
    for (const workflowName of this.config.primaryWorkflows) {
      try {
        // Validate workflow file
        if (!(await this.validateWorkflowFile(workflowName))) {
          this.log(`Primary workflow ${workflowName} validation failed`, "WARN");
          continue;
        }
        
        // Check if workflow needs to be triggered
        const now = Date.now();
        const lastTrigger = this.lastTrigger.get(workflowName) || 0;
        const timeSinceLastTrigger = now - lastTrigger;
        
        if (timeSinceLastTrigger >= this.config.triggerInterval) {
          this.log(`Primary workflow ${workflowName} needs triggering...`);
          await this.triggerWorkflow(workflowName);
        } else {
          this.log(`Primary workflow ${workflowName} is healthy (last triggered: ${Math.floor(timeSinceLastTrigger / 1000)}s ago)`);
        }
        
        this.workflowStatus.set(workflowName, {
          status: "healthy",
          lastCheck: now,
          lastTrigger: lastTrigger
        });
        
      } catch (error) {
        this.log(`Error managing primary workflow ${workflowName}: ${error.message}`, "ERROR");
        this.workflowStatus.set(workflowName, {
          status: "error",
          lastCheck: now,
          error: error.message
        });
      }
    }
  }

  async manageBackupWorkflows() {
    this.log("Managing backup GitHub Actions workflows...");
    
    const now = Date.now();
    
    for (const workflowName of this.config.backupWorkflows) {
      try {
        // Validate workflow file
        if (!(await this.validateWorkflowFile(workflowName))) {
          this.log(`Backup workflow ${workflowName} validation failed`, "WARN");
          continue;
        }
        
        // Check if it's time to rotate backup workflows
        if (now - this.lastBackupRotation >= this.config.backupRotationInterval) {
          this.log(`Rotating backup workflow ${workflowName}...`);
          await this.triggerWorkflow(workflowName);
        } else {
          // Regular health check
          const lastTrigger = this.lastTrigger.get(workflowName) || 0;
          const timeSinceLastTrigger = now - lastTrigger;
          
          if (timeSinceLastTrigger >= this.config.triggerInterval * 2) {
            this.log(`Backup workflow ${workflowName} needs triggering...`);
            await this.triggerWorkflow(workflowName);
          }
        }
        
        this.workflowStatus.set(workflowName, {
          status: "backup",
          lastCheck: now,
          lastTrigger: this.lastTrigger.get(workflowName) || 0
        });
        
      } catch (error) {
        this.log(`Error managing backup workflow ${workflowName}: ${error.message}`, "ERROR");
        this.workflowStatus.set(workflowName, {
          status: "error",
          lastCheck: now,
          error: error.message
        });
      }
    }
    
    // Update backup rotation timestamp
    if (now - this.lastBackupRotation >= this.config.backupRotationInterval) {
      this.lastBackupRotation = now;
    }
  }

  async checkWorkflowHealth() {
    this.log("Checking GitHub Actions workflow health...");
    
    const health = {
      timestamp: new Date().toISOString(),
      gitStatus: await this.checkGitStatus(),
      gitRemote: await this.checkGitRemote(),
      workflows: {},
      summary: {
        total: this.config.allWorkflows.length,
        healthy: 0,
        error: 0,
        backup: 0
      }
    };
    
    for (const workflowName of this.config.allWorkflows) {
      const status = this.workflowStatus.get(workflowName);
      if (status) {
        health.workflows[workflowName] = status;
        
        if (status.status === "healthy") {
          health.summary.healthy++;
        } else if (status.status === "error") {
          health.summary.error++;
        } else if (status.status === "backup") {
          health.summary.backup++;
        }
      }
    }
    
    // Store health history
    this.healthHistory.set(Date.now(), health);
    
    // Clean old health history
    const cutoff = Date.now() - (24 * 60 * 60 * 1000); // 24 hours
    for (const [timestamp] of this.healthHistory) {
      if (timestamp < cutoff) {
        this.healthHistory.delete(timestamp);
      }
    }
    
    return health;
  }

  async createBackupWorkflows() {
    this.log("Creating backup GitHub Actions workflows...");
    
    for (const workflowName of this.config.primaryWorkflows) {
      const backupName = `${workflowName}-backup`;
      const primaryFile = await this.getWorkflowFile(workflowName);
      const backupFile = path.join(this.workspace, this.config.workflowsDir, `${backupName}.yml`);
      
      if (primaryFile && !fs.existsSync(backupFile)) {
        try {
          let content = fs.readFileSync(primaryFile, 'utf8');
          
          // Modify the backup workflow
          content = content.replace(
            new RegExp(`name: ${workflowName}`, 'g'),
            `name: ${workflowName} (Backup)`
          );
          
          // Add backup indicator
          content = content.replace(
            /# GitHub Actions Workflow/,
            `# GitHub Actions Workflow (Backup)`
          );
          
          // Modify schedule if it exists
          if (content.includes('cron:')) {
            content = content.replace(
              /cron: '([^']*)'/,
              (match, cron) => {
                // Add 5 minutes to the cron schedule for backup
                const parts = cron.split(' ');
                if (parts.length >= 2) {
                  const minute = parseInt(parts[1]);
                  parts[1] = ((minute + 5) % 60).toString();
                  return `cron: '${parts.join(' ')}'`;
                }
                return match;
              }
            );
          }
          
          fs.writeFileSync(backupFile, content);
          this.log(`Created backup workflow: ${backupName}`);
          
        } catch (error) {
          this.log(`Error creating backup workflow ${backupName}: ${error.message}`, "ERROR");
        }
      }
    }
  }

  async orchestrate() {
    this.log("Starting GitHub Actions redundancy orchestration...");
    
    try {
      // Check Git status
      if (!(await this.checkGitStatus())) {
        this.log("Git repository has uncommitted changes", "WARN");
      }
      
      if (!(await this.checkGitRemote())) {
        this.log("No Git remote configured", "WARN");
      }
      
      // Create backup workflows if they don't exist
      await this.createBackupWorkflows();
      
      // Manage all workflow types
      await this.managePrimaryWorkflows();
      await this.manageBackupWorkflows();
      
      // Check overall health
      const health = await this.checkWorkflowHealth();
      
      this.log(`GitHub Actions health: ${health.summary.healthy}/${health.summary.total} workflows healthy`);
      
      if (health.summary.error > 0) {
        this.log(`Warning: ${health.summary.error} workflows in error state`, "WARN");
      }
      
    } catch (error) {
      this.log(`Error during GitHub Actions orchestration: ${error.message}`, "ERROR");
    }
  }

  startMonitoring() {
    if (this.monitoring) {
      this.log("GitHub Actions monitoring is already running");
      return;
    }
    
    this.log("Starting GitHub Actions redundancy monitoring...");
    this.monitoring = true;
    
    this.checkInterval = setInterval(async () => {
      await this.orchestrate();
    }, this.config.healthCheckInterval);
  }

  stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    this.monitoring = false;
    this.log("Stopped GitHub Actions redundancy monitoring");
  }

  getStatus() {
    return {
      monitoring: this.monitoring,
      lastHealthCheck: this.healthHistory.size > 0 ? 
        Array.from(this.healthHistory.keys()).pop() : null,
      workflowStatus: Object.fromEntries(this.workflowStatus),
      triggerCounts: Object.fromEntries(this.triggerCounts),
      lastTrigger: Object.fromEntries(this.lastTrigger),
      config: this.config
    };
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      status: this.getStatus(),
      healthHistory: Array.from(this.healthHistory.entries()).slice(-10), // Last 10 entries
      recommendations: []
    };
    
    // Generate recommendations based on health history
    if (this.healthHistory.size > 0) {
      const recentHealth = Array.from(this.healthHistory.values()).slice(-5);
      
      const totalWorkflows = recentHealth.reduce((sum, h) => sum + h.summary.total, 0);
      const totalHealthy = recentHealth.reduce((sum, h) => sum + h.summary.healthy, 0);
      const totalErrors = recentHealth.reduce((sum, h) => sum + h.summary.error, 0);
      
      if (totalErrors > 0) {
        report.recommendations.push("Some workflows are in error state - investigate root causes");
      }
      
      if (totalHealthy < totalWorkflows * 0.8) {
        report.recommendations.push("Many workflows are not healthy - check workflow configurations");
      }
      
      if (recentHealth.some(h => !h.gitRemote)) {
        report.recommendations.push("Git remote not configured - workflows may not trigger properly");
      }
    }
    
    return report;
  }
}

// CLI Interface
if (require.main === module) {
  const manager = new GitHubActionsRedundancyManager();
  const command = process.argv[2] || "start";
  
  switch (command) {
    case "start":
      manager.startMonitoring();
      break;
    case "stop":
      manager.stopMonitoring();
      break;
    case "status":
      console.log(JSON.stringify(manager.getStatus(), null, 2));
      break;
    case "report":
      console.log(JSON.stringify(manager.generateReport(), null, 2));
      break;
    case "once":
      manager.orchestrate().then(() => {
        console.log("GitHub Actions orchestration completed");
        process.exit(0);
      }).catch(error => {
        console.error("GitHub Actions orchestration failed:", error);
        process.exit(1);
      });
      break;
    case "create-backups":
      manager.createBackupWorkflows().then(() => {
        console.log("Backup workflows creation completed");
        process.exit(0);
      }).catch(error => {
        console.error("Backup workflows creation failed:", error);
        process.exit(1);
      });
      break;
    default:
      console.log("Usage: node github-actions-redundancy-manager.cjs [start|stop|status|report|once|create-backups]");
      process.exit(1);
  }
}

module.exports = GitHubActionsRedundancyManager;