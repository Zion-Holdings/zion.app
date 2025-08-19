#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const https = require("https");

class ComprehensiveRedundancySystem {
  constructor() {
    this.workspace = process.cwd();
    this.config = {
      pm2: {
        ecosystemFile: "ecosystem.pm2.cjs",
        redundancyEcosystemFile: "ecosystem.redundancy.cjs",
        processes: ["zion-auto-sync", "zion-auto-sync-cron"],
        redundancyProcesses: [
          "redundancy-automation-system",
          "redundancy-health-monitor",
          "redundancy-git-sync",
          "redundancy-build-monitor"
        ],
        healthCheckInterval: 30000,
        maxRestartAttempts: 5,
        restartDelay: 5000,
        autoRecovery: true
      },
      githubActions: {
        workflows: [
          ".github/workflows/marketing-sync.yml",
          ".github/workflows/sync-health.yml"
        ],
        healthCheckInterval: 60000,
        maxFailureThreshold: 3,
        autoTrigger: true,
        backupTriggers: true
      },
      netlifyFunctions: {
        manifestFile: "netlify/functions/functions-manifest.json",
        healthCheckInterval: 120000,
        maxFailureThreshold: 2,
        autoRegenerate: true,
        deploymentCheck: true
      },
      logging: {
        logDir: "automation/logs",
        maxLogSize: 10 * 1024 * 1024,
        maxLogFiles: 30,
        logLevel: "INFO"
      },
      monitoring: {
        enabled: true,
        checkInterval: 30000,
        alertThreshold: 3,
        autoRestart: true
      }
    };
    
    this.ensureLogDirectory();
    this.initializeMonitoring();
    this.startComprehensiveMonitoring();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.config.logging.logDir)) {
      fs.mkdirSync(this.config.logging.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    const logFile = path.join(this.config.logging.logDir, `comprehensive-redundancy-${new Date().toISOString().split('T')[0]}.log`);
    try {
      fs.appendFileSync(logFile, logEntry + "\n");
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

  async checkPM2ComprehensiveHealth() {
    this.log("🔍 Checking comprehensive PM2 process health...");
    
    try {
      // Check PM2 daemon status
      const statusResult = await this.runCommand("pm2", ["status", "--no-daemon"]);
      
      if (statusResult.status !== 0) {
        this.log("⚠️ PM2 daemon not running, attempting to restart", "WARN");
        await this.runCommand("pm2", ["kill"]);
        await this.runCommand("pm2", ["start", this.config.pm2.ecosystemFile]);
        await this.runCommand("pm2", ["start", this.config.pm2.redundancyEcosystemFile]);
        return false;
      }

      // Check primary PM2 processes
      const primaryProcesses = this.config.pm2.processes;
      let primaryHealthy = true;

      for (const processName of primaryProcesses) {
        const processStatus = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
        
        if (processStatus.status !== 0) {
          this.log(`⚠️ Primary PM2 process ${processName} not found, restarting...`, "WARN");
          await this.runCommand("pm2", ["restart", processName]);
          primaryHealthy = false;
        } else {
          this.log(`✅ Primary PM2 process ${processName} is healthy`);
        }
      }

      // Check redundancy PM2 processes
      const redundancyProcesses = this.config.pm2.redundancyProcesses;
      let redundancyHealthy = true;

      for (const processName of redundancyProcesses) {
        const processStatus = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
        
        if (processStatus.status !== 0) {
          this.log(`⚠️ Redundancy PM2 process ${processName} not found, restarting...`, "WARN");
          await this.runCommand("pm2", ["restart", processName]);
          redundancyHealthy = false;
        } else {
          this.log(`✅ Redundancy PM2 process ${processName} is healthy`);
        }
      }

      return primaryHealthy && redundancyHealthy;
    } catch (error) {
      this.log(`❌ Error checking PM2 health: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkGitHubActionsComprehensiveHealth() {
    this.log("🔍 Checking comprehensive GitHub Actions health...");
    
    try {
      // Check workflows directory
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      if (!fs.existsSync(workflowsDir)) {
        this.log("❌ GitHub workflows directory not found", "ERROR");
        return false;
      }

      // Validate each workflow file
      const workflows = this.config.githubActions.workflows;
      let allWorkflowsHealthy = true;

      for (const workflow of workflows) {
        const workflowPath = path.join(this.workspace, workflow);
        if (!fs.existsSync(workflowPath)) {
          this.log(`❌ Workflow ${workflow} not found`, "ERROR");
          allWorkflowsHealthy = false;
          continue;
        }

        try {
          const workflowContent = fs.readFileSync(workflowPath, "utf8");
          if (!workflowContent.includes("name:") || !workflowContent.includes("on:")) {
            this.log(`⚠️ Workflow ${workflow} appears to be malformed`, "WARN");
            allWorkflowsHealthy = false;
          } else {
            this.log(`✅ Workflow ${workflow} is valid`);
          }
        } catch (error) {
          this.log(`❌ Error reading workflow ${workflow}: ${error.message}`, "ERROR");
          allWorkflowsHealthy = false;
        }
      }

      // Check if workflows can be triggered manually
      if (this.config.githubActions.backupTriggers) {
        this.log("🔄 Setting up backup triggers for GitHub Actions...");
        await this.setupGitHubActionsBackupTriggers();
      }

      return allWorkflowsHealthy;
    } catch (error) {
      this.log(`❌ Error checking GitHub Actions health: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkNetlifyFunctionsComprehensiveHealth() {
    this.log("🔍 Checking comprehensive Netlify functions health...");
    
    try {
      // Check Netlify directory structure
      const netlifyDir = path.join(this.workspace, "netlify");
      if (!fs.existsSync(netlifyDir)) {
        this.log("❌ Netlify directory not found", "ERROR");
        return false;
      }

      // Check functions directory
      const functionsDir = path.join(netlifyDir, "functions");
      if (!fs.existsSync(functionsDir)) {
        this.log("❌ Netlify functions directory not found", "ERROR");
        return false;
      }

      // Check functions manifest
      const manifestPath = path.join(this.workspace, this.config.netlifyFunctions.manifestFile);
      if (!fs.existsSync(manifestPath)) {
        this.log("⚠️ Netlify functions manifest not found, regenerating...", "WARN");
        if (this.config.netlifyFunctions.autoRegenerate) {
          await this.regenerateNetlifyFunctionsManifest();
        }
        return false;
      }

      // Validate manifest content
      try {
        const manifestContent = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
        if (!manifestContent.functions || !Array.isArray(manifestContent.functions)) {
          this.log("⚠️ Netlify functions manifest is invalid, regenerating...", "WARN");
          if (this.config.netlifyFunctions.autoRegenerate) {
            await this.regenerateNetlifyFunctionsManifest();
          }
          return false;
        }

        this.log(`✅ Netlify functions manifest is valid with ${manifestContent.functions.length} functions`);
        return true;
      } catch (error) {
        this.log(`❌ Error parsing Netlify functions manifest: ${error.message}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Error checking Netlify functions health: ${error.message}`, "ERROR");
      return false;
    }
  }

  async setupGitHubActionsBackupTriggers() {
    this.log("🔄 Setting up GitHub Actions backup triggers...");
    
    try {
      // Create backup trigger scripts for each workflow
      for (const workflow of this.config.githubActions.workflows) {
        const workflowName = workflow.replace('.yml', '').replace('.github/workflows/', '');
        const backupScriptPath = path.join(this.workspace, `automation/backup-trigger-${workflowName}.sh`);
        
        const backupScript = `#!/bin/bash
# Backup trigger for ${workflowName}
# This script provides redundancy for GitHub Actions workflows

WORKFLOW_NAME="${workflowName}"
WORKSPACE="${this.workspace}"

echo "[$(date)] Triggering backup execution for ${workflowName}"

# Check if we're in the right directory
cd "$WORKSPACE" || exit 1

# Run the equivalent of the workflow locally
case "$WORKFLOW_NAME" in
  "marketing-sync")
    echo "Running marketing sync backup..."
    node automation/marketing-sync.js
    ;;
  "sync-health")
    echo "Running sync health backup..."
    node automation/pm2-auto-sync.js
    ;;
  *)
    echo "Unknown workflow: $WORKFLOW_NAME"
    exit 1
    ;;
esac

echo "[$(date)] Backup execution for ${workflowName} completed"
`;

        fs.writeFileSync(backupScriptPath, backupScript);
        await this.runCommand("chmod", ["+x", backupScriptPath]);
        this.log(`✅ Created backup trigger script for ${workflowName}`);
      }
    } catch (error) {
      this.log(`❌ Error setting up GitHub Actions backup triggers: ${error.message}`, "ERROR");
    }
  }

  async regenerateNetlifyFunctionsManifest() {
    this.log("🔄 Regenerating Netlify functions manifest...");
    
    try {
      const result = await this.runCommand("node", ["scripts/generate-netlify-functions-manifest.cjs"]);
      
      if (result.status === 0) {
        this.log("✅ Netlify functions manifest regenerated successfully");
        return true;
      } else {
        this.log(`❌ Failed to regenerate Netlify functions manifest: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Error regenerating Netlify functions manifest: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performComprehensiveHealthCheck() {
    this.log("🚀 Starting comprehensive health check...");
    
    const results = {
      pm2: false,
      githubActions: false,
      netlifyFunctions: false,
      timestamp: new Date().toISOString()
    };

    // Check PM2 health
    results.pm2 = await this.checkPM2ComprehensiveHealth();
    
    // Check GitHub Actions health
    results.githubActions = await this.checkGitHubActionsComprehensiveHealth();
    
    // Check Netlify functions health
    results.netlifyFunctions = await this.checkNetlifyFunctionsComprehensiveHealth();

    // Log results
    this.log(`📊 Health Check Results:
    - PM2: ${results.pm2 ? '✅ Healthy' : '❌ Unhealthy'}
    - GitHub Actions: ${results.githubActions ? '✅ Healthy' : '❌ Unhealthy'}
    - Netlify Functions: ${results.netlifyFunctions ? '✅ Healthy' : '❌ Unhealthy'}`);

    // Save health check results
    const healthCheckFile = path.join(this.config.logging.logDir, `health-check-${new Date().toISOString().split('T')[0]}.json`);
    try {
      fs.writeFileSync(healthCheckFile, JSON.stringify(results, null, 2));
    } catch (error) {
      this.log(`❌ Failed to save health check results: ${error.message}`, "ERROR");
    }

    return results;
  }

  async startComprehensiveMonitoring() {
    this.log("🚀 Starting comprehensive monitoring system...");
    
    if (!this.config.monitoring.enabled) {
      this.log("⚠️ Monitoring is disabled in configuration");
      return;
    }

    // Start monitoring loop
    setInterval(async () => {
      try {
        await this.performComprehensiveHealthCheck();
      } catch (error) {
        this.log(`❌ Error in monitoring loop: ${error.message}`, "ERROR");
      }
    }, this.config.monitoring.checkInterval);

    this.log(`✅ Comprehensive monitoring started with ${this.config.monitoring.checkInterval}ms intervals`);
  }

  async emergencyRecovery() {
    this.log("🚨 Starting emergency recovery procedures...");
    
    try {
      // Restart all PM2 processes
      this.log("🔄 Restarting all PM2 processes...");
      await this.runCommand("pm2", ["kill"]);
      await this.runCommand("pm2", ["start", this.config.pm2.ecosystemFile]);
      await this.runCommand("pm2", ["start", this.config.pm2.redundancyEcosystemFile]);
      
      // Regenerate Netlify functions manifest
      this.log("🔄 Regenerating Netlify functions manifest...");
      await this.regenerateNetlifyFunctionsManifest();
      
      // Setup backup triggers
      this.log("🔄 Setting up backup triggers...");
      await this.setupGitHubActionsBackupTriggers();
      
      this.log("✅ Emergency recovery completed");
      return true;
    } catch (error) {
      this.log(`❌ Emergency recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  initializeMonitoring() {
    this.log("🔧 Initializing comprehensive redundancy monitoring system...");
    
    // Ensure all required directories exist
    const requiredDirs = [
      this.config.logging.logDir,
      path.join(this.workspace, "automation/logs"),
      path.join(this.workspace, ".github/workflows"),
      path.join(this.workspace, "netlify/functions")
    ];

    for (const dir of requiredDirs) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        this.log(`📁 Created directory: ${dir}`);
      }
    }

    this.log("✅ Comprehensive redundancy monitoring system initialized");
  }
}

// Start the comprehensive redundancy system
if (require.main === module) {
  const system = new ComprehensiveRedundancySystem();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    system.log("🛑 Shutting down comprehensive redundancy system...");
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    system.log("🛑 Shutting down comprehensive redundancy system...");
    process.exit(0);
  });
}

module.exports = ComprehensiveRedundancySystem;