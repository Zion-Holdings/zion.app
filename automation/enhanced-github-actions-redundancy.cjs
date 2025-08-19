#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const https = require("https");

class EnhancedGitHubActionsRedundancy {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "enhanced-github-actions-redundancy.log");
    this.ensureLogDir();
    
    this.config = {
      workflows: [
        ".github/workflows/marketing-sync.yml",
        ".github/workflows/sync-health.yml"
      ],
      healthCheckInterval: 60000,
      maxFailureThreshold: 3,
      retryDelay: 30000,
      autoTrigger: true,
      backupTriggers: true,
      localExecution: true,
      workflowValidation: true,
      backupWorkflows: true
    };
    
    this.monitoring = false;
    this.checkInterval = null;
    this.failureCounts = new Map();
    this.lastCheck = new Map();
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
        maxBuffer: 1024 * 1024 * 10,
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

  async checkWorkflowsDirectory() {
    try {
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      if (!fs.existsSync(workflowsDir)) {
        this.log("❌ GitHub workflows directory not found", "ERROR");
        return { exists: false, workflows: [] };
      }

      const workflowFiles = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));
      this.log(`📋 Found ${workflowFiles.length} workflow files`);
      
      return { exists: true, workflows: workflowFiles };
    } catch (error) {
      this.log(`❌ Error checking workflows directory: ${error.message}`, "ERROR");
      return { exists: false, workflows: [] };
    }
  }

  async validateWorkflow(workflowPath) {
    try {
      if (!fs.existsSync(workflowPath)) {
        this.log(`❌ Workflow file not found: ${workflowPath}`, "ERROR");
        return { valid: false, errors: ["File not found"] };
      }

      const content = fs.readFileSync(workflowPath, "utf8");
      const errors = [];

      // Basic YAML validation
      if (!content.includes("name:")) {
        errors.push("Missing workflow name");
      }
      if (!content.includes("on:")) {
        errors.push("Missing trigger configuration");
      }
      if (!content.includes("jobs:")) {
        errors.push("Missing jobs section");
      }

      // Check for common issues
      if (content.includes("cron:") && !content.includes("schedule:")) {
        errors.push("Invalid cron syntax - should be under schedule:");
      }

      if (content.includes("uses:") && !content.includes("actions/checkout")) {
        // Check if checkout action is present
        if (!content.includes("actions/checkout")) {
          errors.push("Missing checkout action");
        }
      }

      const isValid = errors.length === 0;
      if (isValid) {
        this.log(`✅ Workflow ${path.basename(workflowPath)} is valid`);
      } else {
        this.log(`⚠️ Workflow ${path.basename(workflowPath)} has issues: ${errors.join(", ")}`, "WARN");
      }

      return { valid: isValid, errors: errors };
    } catch (error) {
      this.log(`❌ Error validating workflow ${workflowPath}: ${error.message}`, "ERROR");
      return { valid: false, errors: [error.message] };
    }
  }

  async createBackupWorkflows() {
    if (!this.config.backupWorkflows) {
      return;
    }

    this.log("🔄 Creating backup workflows...");
    
    try {
      const backupDir = path.join(this.workspace, ".github/workflows/backup");
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }

      for (const workflow of this.config.workflows) {
        const workflowName = path.basename(workflow, '.yml');
        const originalPath = path.join(this.workspace, workflow);
        const backupPath = path.join(backupDir, `${workflowName}.backup.yml`);
        
        if (fs.existsSync(originalPath)) {
          const content = fs.readFileSync(originalPath, "utf8");
          fs.writeFileSync(backupPath, content);
          this.log(`✅ Created backup for ${workflowName}`);
        }
      }

      this.log("✅ All backup workflows created successfully");
    } catch (error) {
      this.log(`❌ Error creating backup workflows: ${error.message}`, "ERROR");
    }
  }

  async setupLocalExecutionTriggers() {
    if (!this.config.localExecution) {
      return;
    }

    this.log("🔄 Setting up local execution triggers...");
    
    try {
      for (const workflow of this.config.workflows) {
        const workflowName = path.basename(workflow, '.yml');
        const triggerScriptPath = path.join(this.workspace, `automation/local-trigger-${workflowName}.sh`);
        
        const triggerScript = this.generateLocalTriggerScript(workflowName, workflow);
        fs.writeFileSync(triggerScriptPath, triggerScript);
        await this.runCommand("chmod", ["+x", triggerScriptPath]);
        this.log(`✅ Created local trigger script for ${workflowName}`);
      }
    } catch (error) {
      this.log(`❌ Error setting up local execution triggers: ${error.message}`, "ERROR");
    }
  }

  generateLocalTriggerScript(workflowName, workflowPath) {
    const isMarketingSync = workflowName === "marketing-sync";
    const isSyncHealth = workflowName === "sync-health";
    
    let scriptContent = `#!/bin/bash
# Local execution trigger for ${workflowName}
# This script provides redundancy for GitHub Actions workflows

WORKFLOW_NAME="${workflowName}"
WORKSPACE="${this.workspace}"
LOG_FILE="${this.workspace}/automation/logs/local-execution-${workflowName}.log"

echo "[$(date)] Starting local execution for ${workflowName}" | tee -a "$LOG_FILE"

# Check if we're in the right directory
cd "$WORKSPACE" || exit 1

# Set environment variables
export NODE_ENV=production
export LOCAL_EXECUTION=true

# Run the equivalent of the workflow locally
case "$WORKFLOW_NAME" in
`;

    if (isMarketingSync) {
      scriptContent += `  "marketing-sync")
    echo "Running marketing sync locally..." | tee -a "$LOG_FILE"
    
    # Check if marketing-sync.js exists
    if [ -f "automation/marketing-sync.js" ]; then
      node automation/marketing-sync.js 2>&1 | tee -a "$LOG_FILE"
      SYNC_EXIT_CODE=$?
    else
      echo "ERROR: marketing-sync.js not found" | tee -a "$LOG_FILE"
      SYNC_EXIT_CODE=1
    fi
    
    # Commit changes if successful
    if [ $SYNC_EXIT_CODE -eq 0 ]; then
      echo "Marketing sync completed successfully, committing changes..." | tee -a "$LOG_FILE"
      git add -A
      git commit -m "chore(marketing): local execution update" || true
      git push origin HEAD:main || true
    fi
    ;;
`;
    }

    if (isSyncHealth) {
      scriptContent += `  "sync-health")
    echo "Running sync health check locally..." | tee -a "$LOG_FILE"
    
    # Check if pm2-auto-sync.js exists
    if [ -f "automation/pm2-auto-sync.js" ]; then
      export AUTO_SYNC_STRATEGY=hardreset
      export AUTO_SYNC_CLEAN=0
      node automation/pm2-auto-sync.js 2>&1 | tee -a "$LOG_FILE"
      SYNC_EXIT_CODE=$?
    else
      echo "ERROR: pm2-auto-sync.js not found" | tee -a "$LOG_FILE"
      SYNC_EXIT_CODE=1
    fi
    
    # Push if repository is ahead
    if [ $SYNC_EXIT_CODE -eq 0 ]; then
      echo "Sync health completed, checking if push is needed..." | tee -a "$LOG_FILE"
      AHEAD=$(git rev-list --left-right --count HEAD...origin/main | awk '{print $1}')
      if [ "$AHEAD" != "0" ]; then
        git push origin HEAD:main | tee -a "$LOG_FILE"
      else
        echo "No push needed." | tee -a "$LOG_FILE"
      fi
    fi
    ;;
`;
    }

    scriptContent += `  *)
    echo "Unknown workflow: $WORKFLOW_NAME" | tee -a "$LOG_FILE"
    exit 1
    ;;
esac

echo "[$(date)] Local execution for ${workflowName} completed" | tee -a "$LOG_FILE"
`;

    return scriptContent;
  }

  async setupCronBackupTriggers() {
    this.log("🔄 Setting up cron backup triggers...");
    
    try {
      const cronScriptPath = path.join(this.workspace, "automation/setup-cron-backup-triggers.sh");
      
      const cronScript = `#!/bin/bash
# Setup cron backup triggers for GitHub Actions workflows

WORKSPACE="${this.workspace}"

echo "Setting up cron backup triggers..."

# Add cron jobs for local execution
(crontab -l 2>/dev/null; echo "0 */12 * * * $WORKSPACE/automation/local-trigger-marketing-sync.sh") | crontab -
(crontab -l 2>/dev/null; echo "*/15 * * * * $WORKSPACE/automation/local-trigger-sync-health.sh") | crontab -

echo "Cron backup triggers set up successfully"
echo "Current crontab:"
crontab -l
`;

      fs.writeFileSync(cronScriptPath, cronScript);
      await this.runCommand("chmod", ["+x", cronScriptPath]);
      this.log("✅ Created cron backup trigger setup script");
      
    } catch (error) {
      this.log(`❌ Error setting up cron backup triggers: ${error.message}`, "ERROR");
    }
  }

  async checkWorkflowExecutionHistory() {
    this.log("🔍 Checking workflow execution history...");
    
    try {
      // This would typically check GitHub API for workflow runs
      // For now, we'll check local logs and simulate the check
      
      const results = {};
      
      for (const workflow of this.config.workflows) {
        const workflowName = path.basename(workflow, '.yml');
        const logFile = path.join(this.workspace, `automation/logs/local-execution-${workflowName}.log`);
        
        if (fs.existsSync(logFile)) {
          const stats = fs.statSync(logFile);
          const lastModified = new Date(stats.mtime);
          const now = new Date();
          const hoursSinceLastRun = (now - lastModified) / (1000 * 60 * 60);
          
          results[workflowName] = {
            lastRun: lastModified.toISOString(),
            hoursSinceLastRun: Math.round(hoursSinceLastRun * 100) / 100,
            healthy: hoursSinceLastRun < 24 // Consider healthy if run within last 24 hours
          };
          
          this.log(`📊 ${workflowName}: Last run ${results[workflowName].hoursSinceLastRun} hours ago`);
        } else {
          results[workflowName] = {
            lastRun: null,
            hoursSinceLastRun: null,
            healthy: false
          };
          
          this.log(`⚠️ ${workflowName}: No execution history found`, "WARN");
        }
      }
      
      return results;
    } catch (error) {
      this.log(`❌ Error checking workflow execution history: ${error.message}`, "ERROR");
      return {};
    }
  }

  async performComprehensiveHealthCheck() {
    this.log("🚀 Starting comprehensive GitHub Actions health check...");
    
    const results = {
      workflowsDirectory: false,
      workflowValidation: {},
      backupWorkflows: false,
      localTriggers: false,
      cronTriggers: false,
      executionHistory: {},
      timestamp: new Date().toISOString()
    };

    // Check workflows directory
    const dirCheck = await this.checkWorkflowsDirectory();
    results.workflowsDirectory = dirCheck.exists;

    // Validate each workflow
    for (const workflow of this.config.workflows) {
      const workflowName = path.basename(workflow, '.yml');
      const validation = await this.validateWorkflow(path.join(this.workspace, workflow));
      results.workflowValidation[workflowName] = validation;
    }

    // Check backup workflows
    const backupDir = path.join(this.workspace, ".github/workflows/backup");
    results.backupWorkflows = fs.existsSync(backupDir);

    // Check local triggers
    const localTriggersExist = this.config.workflows.every(workflow => {
      const workflowName = path.basename(workflow, '.yml');
      const triggerPath = path.join(this.workspace, `automation/local-trigger-${workflowName}.sh`);
      return fs.existsSync(triggerPath);
    });
    results.localTriggers = localTriggersExist;

    // Check cron triggers
    const cronScriptPath = path.join(this.workspace, "automation/setup-cron-backup-triggers.sh");
    results.cronTriggers = fs.existsSync(cronScriptPath);

    // Check execution history
    results.executionHistory = await this.checkWorkflowExecutionHistory();

    // Log results
    this.log(`📊 Comprehensive Health Check Results:
    - Workflows Directory: ${results.workflowsDirectory ? '✅ Exists' : '❌ Missing'}
    - Workflow Validation: ${Object.values(results.workflowValidation).filter(v => v.valid).length}/${Object.keys(results.workflowValidation).length} Valid
    - Backup Workflows: ${results.backupWorkflows ? '✅ Created' : '❌ Missing'}
    - Local Triggers: ${results.localTriggers ? '✅ Setup' : '❌ Missing'}
    - Cron Triggers: ${results.cronTriggers ? '✅ Setup' : '❌ Missing'}`);

    // Save health check results
    const healthCheckFile = path.join(this.logDir, `github-actions-health-check-${new Date().toISOString().split('T')[0]}.json`);
    try {
      fs.writeFileSync(healthCheckFile, JSON.stringify(results, null, 2));
    } catch (error) {
      this.log(`❌ Failed to save health check results: ${error.message}`, "ERROR");
    }

    return results;
  }

  async emergencyRecovery() {
    this.log("🚨 Starting emergency GitHub Actions recovery...");
    
    try {
      // Create backup workflows
      await this.createBackupWorkflows();
      
      // Setup local execution triggers
      await this.setupLocalExecutionTriggers();
      
      // Setup cron backup triggers
      await this.setupCronBackupTriggers();
      
      // Validate all workflows
      for (const workflow of this.config.workflows) {
        await this.validateWorkflow(path.join(this.workspace, workflow));
      }
      
      this.log("✅ Emergency GitHub Actions recovery completed");
      return true;
    } catch (error) {
      this.log(`❌ Emergency GitHub Actions recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("⚠️ Monitoring is already running");
      return;
    }

    this.log("🚀 Starting enhanced GitHub Actions redundancy monitoring...");
    this.monitoring = true;

    // Initial setup
    await this.createBackupWorkflows();
    await this.setupLocalExecutionTriggers();
    await this.setupCronBackupTriggers();

    // Initial health check
    await this.performComprehensiveHealthCheck();

    // Start monitoring loop
    this.checkInterval = setInterval(async () => {
      try {
        await this.performComprehensiveHealthCheck();
      } catch (error) {
        this.log(`❌ Error in monitoring loop: ${error.message}`, "ERROR");
      }
    }, this.config.healthCheckInterval);

    this.log(`✅ Enhanced GitHub Actions redundancy monitoring started with ${this.config.healthCheckInterval}ms intervals`);
  }

  async stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    
    this.monitoring = false;
    this.log("🛑 Enhanced GitHub Actions redundancy monitoring stopped");
  }

  async cleanup() {
    this.log("🧹 Cleaning up enhanced GitHub Actions redundancy system...");
    
    try {
      await this.stopMonitoring();
      
      // Remove backup workflows directory
      const backupDir = path.join(this.workspace, ".github/workflows/backup");
      if (fs.existsSync(backupDir)) {
        fs.rmSync(backupDir, { recursive: true, force: true });
        this.log("🗑️ Removed backup workflows directory");
      }
      
      // Remove local trigger scripts
      for (const workflow of this.config.workflows) {
        const workflowName = path.basename(workflow, '.yml');
        const triggerPath = path.join(this.workspace, `automation/local-trigger-${workflowName}.sh`);
        if (fs.existsSync(triggerPath)) {
          fs.unlinkSync(triggerPath);
          this.log(`🗑️ Removed local trigger script for ${workflowName}`);
        }
      }
      
      // Remove cron setup script
      const cronScriptPath = path.join(this.workspace, "automation/setup-cron-backup-triggers.sh");
      if (fs.existsSync(cronScriptPath)) {
        fs.unlinkSync(cronScriptPath);
        this.log("🗑️ Removed cron backup trigger setup script");
      }
      
      this.log("✅ Cleanup completed");
    } catch (error) {
      this.log(`❌ Error during cleanup: ${error.message}`, "ERROR");
    }
  }
}

// Start the enhanced GitHub Actions redundancy system
if (require.main === module) {
  const system = new EnhancedGitHubActionsRedundancy();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    system.log("🛑 Shutting down enhanced GitHub Actions redundancy system...");
    await system.cleanup();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    system.log("🛑 Shutting down enhanced GitHub Actions redundancy system...");
    await system.cleanup();
    process.exit(0);
  });
  
  // Start monitoring
  system.startMonitoring();
}

module.exports = EnhancedGitHubActionsRedundancy;