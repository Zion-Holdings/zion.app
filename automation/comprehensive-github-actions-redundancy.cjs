#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

class ComprehensiveGitHubActionsRedundancy {
  constructor() {
    this.config = {
      workflows: [
        ".github/workflows/marketing-sync.yml",
        ".github/workflows/sync-health.yml"
      ],
      backupWorkflows: [
        "automation/backup-workflows/marketing-sync-backup.yml",
        "automation/backup-workflows/sync-health-backup.yml"
      ],
      monitoring: {
        healthCheckInterval: 60000,
        workflowValidationInterval: 300000,
        autoRetry: true,
        maxRetryAttempts: 3,
        backupTriggers: true
      },
      logging: {
        logDir: "automation/logs",
        logLevel: process.env.GITHUB_ACTIONS_REDUNDANCY_LOG_LEVEL || "INFO"
      },
      triggers: {
        marketingSync: {
          cron: "0 */12 * * *",
          manual: true,
          backupCron: "30 */12 * * *"
        },
        syncHealth: {
          cron: "*/15 * * * *",
          manual: true,
          backupCron: "45 */15 * * * *"
        }
      }
    };
    
    this.ensureLogDirectory();
    this.ensureBackupWorkflowDirectory();
    this.workflowStatus = new Map();
    this.retryAttempts = new Map();
    this.initializeMonitoring();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.config.logging.logDir)) {
      fs.mkdirSync(this.config.logging.logDir, { recursive: true });
    }
  }

  ensureBackupWorkflowDirectory() {
    const backupDir = "automation/backup-workflows";
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] [GITHUB-ACTIONS-REDUNDANCY] ${message}`;
    
    if (this.shouldLog(level)) {
      console.log(logEntry);
    }
    
    const logFile = path.join(this.config.logging.logDir, `github-actions-redundancy-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logEntry + "\n");
  }

  shouldLog(level) {
    const levels = { DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3 };
    const currentLevel = levels[this.config.logging.logLevel] || 1;
    return levels[level] >= currentLevel;
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: process.cwd(),
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 20,
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

  async validateWorkflowYAML(workflowPath) {
    try {
      if (!fs.existsSync(workflowPath)) {
        this.log(`Workflow file ${workflowPath} not found`, "ERROR");
        return false;
      }

      const content = fs.readFileSync(workflowPath, 'utf8');
      
      // Basic YAML validation
      try {
        yaml.load(content);
      } catch (yamlError) {
        this.log(`Invalid YAML in ${workflowPath}: ${yamlError.message}`, "ERROR");
        return false;
      }

      // Check for required workflow components
      const hasName = content.includes('name:');
      const hasOn = content.includes('on:');
      const hasJobs = content.includes('jobs:');
      
      if (!hasName || !hasOn || !hasJobs) {
        this.log(`Workflow ${workflowPath} missing required components`, "WARN");
        return false;
      }

      // Check for cron schedules
      const hasCron = content.includes('cron:');
      const hasWorkflowDispatch = content.includes('workflow_dispatch:');
      
      if (!hasCron && !hasWorkflowDispatch) {
        this.log(`Workflow ${workflowPath} missing trigger configuration`, "WARN");
        return false;
      }

      this.log(`Workflow ${workflowPath} validation passed`);
      return true;
    } catch (error) {
      this.log(`Workflow validation failed for ${workflowPath}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkWorkflowHealth(workflowPath) {
    try {
      const isValid = await this.validateWorkflowYAML(workflowPath);
      
      if (!isValid) {
        this.workflowStatus.set(workflowPath, { status: "invalid", healthy: false, lastCheck: Date.now() });
        return { status: "invalid", healthy: false };
      }

      // Check if workflow can be triggered manually
      const content = fs.readFileSync(workflowPath, 'utf8');
      const canTriggerManually = content.includes('workflow_dispatch:');
      
      // Check if workflow has proper permissions
      const hasPermissions = content.includes('permissions:');
      
      const status = "valid";
      const healthy = isValid && canTriggerManually && hasPermissions;
      
      this.workflowStatus.set(workflowPath, { status, healthy, lastCheck: Date.now() });
      
      return { status, healthy, canTriggerManually, hasPermissions };
    } catch (error) {
      this.log(`Health check failed for ${workflowPath}: ${error.message}`, "ERROR");
      return { status: "error", healthy: false };
    }
  }

  async createBackupWorkflow(workflowPath) {
    try {
      const workflowName = path.basename(workflowPath, '.yml');
      const backupPath = `automation/backup-workflows/${workflowName}-backup.yml`;
      
      if (fs.existsSync(backupPath)) {
        this.log(`Backup workflow ${backupPath} already exists`);
        return backupPath;
      }

      const content = fs.readFileSync(workflowPath, 'utf8');
      
      // Modify the backup workflow to run as a backup
      let backupContent = content;
      
      // Add backup identifier to name
      backupContent = backupContent.replace(/^name:\s*(.+)$/m, 'name: $1 (Backup)');
      
      // Modify cron schedule to run at different times
      if (workflowName.includes('marketing-sync')) {
        backupContent = backupContent.replace(/cron:\s*'0 \*\/12 \* \* \*'/g, "cron: '30 */12 * * *'");
      } else if (workflowName.includes('sync-health')) {
        backupContent = backupContent.replace(/cron:\s*'\*\/15 \* \* \* \*'/g, "cron: '45 */15 * * * *'");
      }
      
      // Add backup environment variable
      backupContent = backupContent.replace(/env:/g, 'env:\n          IS_BACKUP: "true"');
      
      fs.writeFileSync(backupPath, backupContent);
      this.log(`Backup workflow created: ${backupPath}`);
      
      return backupPath;
    } catch (error) {
      this.log(`Failed to create backup workflow for ${workflowPath}: ${error.message}`, "ERROR");
      return null;
    }
  }

  async triggerWorkflow(workflowPath, manual = false) {
    try {
      if (!fs.existsSync(workflowPath)) {
        this.log(`Workflow file ${workflowPath} not found`, "ERROR");
        return false;
      }

      if (manual) {
        this.log(`Manually triggering workflow: ${workflowPath}`);
        
        // Use GitHub CLI if available
        try {
          const result = await this.runCommand("gh", ["workflow", "run", path.basename(workflowPath, '.yml')]);
          if (result.status === 0) {
            this.log(`Workflow ${workflowPath} triggered successfully via GitHub CLI`);
            return true;
          }
        } catch (error) {
          this.log("GitHub CLI not available, using alternative trigger method", "WARN");
        }
        
        // Alternative: commit a trigger file
        const triggerFile = `automation/triggers/${path.basename(workflowPath, '.yml')}-trigger.txt`;
        const triggerDir = path.dirname(triggerFile);
        
        if (!fs.existsSync(triggerDir)) {
          fs.mkdirSync(triggerDir, { recursive: true });
        }
        
        fs.writeFileSync(triggerFile, `Triggered at ${new Date().toISOString()}`);
        
        // Commit and push the trigger
        await this.runCommand("git", ["add", triggerFile]);
        await this.runCommand("git", ["commit", "-m", `Trigger ${path.basename(workflowPath, '.yml')} workflow`]);
        await this.runCommand("git", ["push", "origin", "main"]);
        
        this.log(`Workflow ${workflowPath} triggered via file commit`);
        return true;
      }
      
      return true;
    } catch (error) {
      this.log(`Failed to trigger workflow ${workflowPath}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performWorkflowRecovery(workflowPath) {
    const attempts = this.retryAttempts.get(workflowPath) || 0;
    
    if (attempts >= this.config.monitoring.maxRetryAttempts) {
      this.log(`Max retry attempts reached for ${workflowPath}, skipping recovery`, "WARN");
      return false;
    }
    
    this.log(`Attempting recovery for ${workflowPath} (attempt ${attempts + 1})`);
    
    // Try to trigger the workflow
    let recovered = await this.triggerWorkflow(workflowPath, true);
    
    if (recovered) {
      this.retryAttempts.set(workflowPath, 0);
      this.log(`Workflow ${workflowPath} recovery successful`);
    } else {
      this.retryAttempts.set(workflowPath, attempts + 1);
      this.log(`Workflow ${workflowPath} recovery failed`, "ERROR");
    }
    
    return recovered;
  }

  async checkAllWorkflows() {
    this.log("Checking all GitHub Actions workflows...");
    
    let allHealthy = true;
    
    for (const workflowPath of this.config.workflows) {
      const workflowHealth = await this.checkWorkflowHealth(workflowPath);
      
      if (!workflowHealth.healthy) {
        allHealthy = false;
        this.log(`Workflow ${workflowPath} is unhealthy (${workflowHealth.status})`, "WARN");
        
        if (this.config.monitoring.autoRetry) {
          await this.performWorkflowRecovery(workflowPath);
        }
      } else {
        this.log(`Workflow ${workflowPath} is healthy`);
      }
    }
    
    if (allHealthy) {
      this.log("All GitHub Actions workflows are healthy");
    } else {
      this.log("Some GitHub Actions workflows need attention", "WARN");
    }
    
    return allHealthy;
  }

  async createBackupWorkflows() {
    this.log("Creating backup workflows...");
    
    for (const workflowPath of this.config.workflows) {
      if (fs.existsSync(workflowPath)) {
        await this.createBackupWorkflow(workflowPath);
      }
    }
    
    this.log("Backup workflows creation completed");
  }

  async validateAllWorkflows() {
    this.log("Validating all workflows...");
    
    let allValid = true;
    
    for (const workflowPath of this.config.workflows) {
      const isValid = await this.validateWorkflowYAML(workflowPath);
      if (!isValid) {
        allValid = false;
      }
    }
    
    if (allValid) {
      this.log("All workflows validation passed");
    } else {
      this.log("Some workflows have validation issues", "WARN");
    }
    
    return allValid;
  }

  async setupBackupTriggers() {
    if (!this.config.monitoring.backupTriggers) {
      return;
    }
    
    this.log("Setting up backup triggers...");
    
    // Create a backup trigger script
    const triggerScript = `#!/bin/bash
# Backup trigger script for GitHub Actions workflows

cd "$(dirname "$0")/.."

# Trigger marketing sync backup
if [ -f "automation/backup-workflows/marketing-sync-backup.yml" ]; then
  echo "Triggering marketing sync backup workflow..."
  git add automation/backup-workflows/marketing-sync-backup.yml
  git commit -m "Trigger marketing sync backup workflow" || true
  git push origin main || true
fi

# Trigger sync health backup
if [ -f "automation/backup-workflows/sync-health-backup.yml" ]; then
  echo "Triggering sync health backup workflow..."
  git add automation/backup-workflows/sync-health-backup.yml
  git commit -m "Trigger sync health backup workflow" || true
  git push origin main || true
fi

echo "Backup triggers completed"
`;
    
    const scriptPath = "automation/backup-triggers.sh";
    fs.writeFileSync(scriptPath, triggerScript);
    fs.chmodSync(scriptPath, '755');
    
    this.log("Backup trigger script created");
  }

  initializeMonitoring() {
    this.log("Initializing GitHub Actions redundancy monitoring...");
    
    // Set up process monitoring
    process.on('SIGINT', () => {
      this.log("Received SIGINT, shutting down gracefully...");
      this.shutdown();
    });
    
    process.on('SIGTERM', () => {
      this.log("Received SIGTERM, shutting down gracefully...");
      this.shutdown();
    });
    
    // Start periodic health checks
    setInterval(() => {
      this.checkAllWorkflows();
    }, this.config.monitoring.healthCheckInterval);
    
    // Start periodic workflow validation
    setInterval(() => {
      this.validateAllWorkflows();
    }, this.config.monitoring.workflowValidationInterval);
    
    // Initial setup
    setTimeout(async () => {
      await this.createBackupWorkflows();
      await this.setupBackupTriggers();
      await this.checkAllWorkflows();
    }, 5000);
  }

  async shutdown() {
    this.log("Shutting down GitHub Actions redundancy system...");
    
    // Save final status
    const statusFile = path.join(this.config.logging.logDir, "github-actions-redundancy-status.json");
    const statusData = {
      workflowStatus: Object.fromEntries(this.workflowStatus),
      retryAttempts: Object.fromEntries(this.retryAttempts),
      timestamp: new Date().toISOString()
    };
    
    fs.writeFileSync(statusFile, JSON.stringify(statusData, null, 2));
    
    this.log("GitHub Actions redundancy system shutdown complete");
    process.exit(0);
  }

  getStatus() {
    return {
      status: "running",
      uptime: process.uptime(),
      workflowStatus: Object.fromEntries(this.workflowStatus),
      retryAttempts: Object.fromEntries(this.retryAttempts),
      config: this.config,
      timestamp: new Date().toISOString()
    };
  }

  async runRecovery() {
    this.log("Running GitHub Actions recovery...");
    return await this.checkAllWorkflows();
  }
}

// Start the system if this file is run directly
if (require.main === module) {
  const system = new ComprehensiveGitHubActionsRedundancy();
  
  // Keep the process alive
  process.stdin.resume();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    system.shutdown();
  });
}

module.exports = ComprehensiveGitHubActionsRedundancy;