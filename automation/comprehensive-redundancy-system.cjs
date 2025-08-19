#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class ComprehensiveRedundancySystem {
  constructor() {
    this.config = {
      pm2: {
        ecosystemFiles: ["ecosystem.pm2.cjs", "ecosystem.redundancy.cjs"],
        processes: [
          "zion-auto-sync",
          "zion-auto-sync-cron",
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
        autoHealing: true
      }
    };
    
    this.ensureLogDirectory();
    this.initializeMonitoring();
    this.startPeriodicChecks();
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

  async checkPM2Health() {
    this.log("🔍 Checking PM2 process health...");
    
    try {
      const statusResult = await this.runCommand("pm2", ["status", "--no-daemon"]);
      
      if (statusResult.status !== 0) {
        this.log("⚠️ PM2 status check failed, attempting to restart PM2", "WARN");
        await this.runCommand("pm2", ["kill"]);
        await this.runCommand("pm2", ["start", this.config.pm2.ecosystemFiles[0]]);
        return false;
      }

      const processes = this.config.pm2.processes;
      let allHealthy = true;
      let failedProcesses = [];

      for (const processName of processes) {
        const processStatus = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
        
        if (processStatus.status !== 0) {
          this.log(`⚠️ PM2 process ${processName} not found, restarting...`, "WARN");
          failedProcesses.push(processName);
          allHealthy = false;
        }
      }

      if (failedProcesses.length > 0) {
        this.log(`🔄 Restarting failed PM2 processes: ${failedProcesses.join(", ")}`);
        for (const processName of failedProcesses) {
          await this.runCommand("pm2", ["restart", processName]);
        }
      }

      return allHealthy;
    } catch (error) {
      this.log(`❌ PM2 health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkGitHubActionsHealth() {
    this.log("🔍 Checking GitHub Actions workflows...");
    
    try {
      const workflowsDir = path.join(process.cwd(), ".github/workflows");
      if (!fs.existsSync(workflowsDir)) {
        this.log("❌ GitHub workflows directory not found", "ERROR");
        return false;
      }

      const workflowFiles = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));
      this.log(`📋 Found ${workflowFiles.length} workflow files`);
      
      let allValid = true;
      for (const workflowFile of workflowFiles) {
        const workflowPath = path.join(workflowsDir, workflowFile);
        try {
          const content = fs.readFileSync(workflowPath, 'utf8');
          if (!content.includes('name:') || !content.includes('on:')) {
            this.log(`⚠️ Invalid workflow file: ${workflowFile}`, "WARN");
            allValid = false;
          }
        } catch (error) {
          this.log(`❌ Error reading workflow ${workflowFile}: ${error.message}`, "ERROR");
          allValid = false;
        }
      }

      return allValid;
    } catch (error) {
      this.log(`❌ GitHub Actions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkNetlifyFunctionsHealth() {
    this.log("🔍 Checking Netlify functions...");
    
    try {
      const manifestPath = path.join(process.cwd(), this.config.netlifyFunctions.manifestFile);
      if (!fs.existsSync(manifestPath)) {
        this.log("❌ Netlify functions manifest not found", "ERROR");
        return false;
      }

      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
      if (!manifest.functions || !Array.isArray(manifest.functions)) {
        this.log("⚠️ Invalid Netlify functions manifest", "WARN");
        return false;
      }

      this.log(`📋 Found ${manifest.functions.length} Netlify functions`);
      
      // Check if functions are accessible
      const netlifyDir = path.join(process.cwd(), "netlify");
      if (!fs.existsSync(netlifyDir)) {
        this.log("❌ Netlify directory not found", "ERROR");
        return false;
      }

      return true;
    } catch (error) {
      this.log(`❌ Netlify functions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async triggerGitHubActionsBackup() {
    this.log("🔄 Triggering GitHub Actions backup workflows...");
    
    try {
      // Create backup workflow triggers
      const workflowsDir = path.join(process.cwd(), ".github/workflows");
      const backupWorkflow = path.join(workflowsDir, "backup-trigger.yml");
      
      const backupContent = `name: Backup Trigger
on:
  schedule:
    - cron: '0 */6 * * *'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  backup-trigger:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Trigger backup processes
        run: |
          echo "Backup trigger executed at $(date)"
          # This workflow ensures GitHub Actions are active
`;

      fs.writeFileSync(backupWorkflow, backupContent);
      this.log("✅ Backup workflow created");
      
      return true;
    } catch (error) {
      this.log(`❌ Failed to create backup workflow: ${error.message}`, "ERROR");
      return false;
    }
  }

  async regenerateNetlifyFunctions() {
    this.log("🔄 Regenerating Netlify functions manifest...");
    
    try {
      const scriptPath = path.join(process.cwd(), "scripts/generate-netlify-functions-manifest.cjs");
      if (fs.existsSync(scriptPath)) {
        const result = await this.runCommand("node", [scriptPath]);
        if (result.status === 0) {
          this.log("✅ Netlify functions manifest regenerated");
          return true;
        } else {
          this.log(`⚠️ Failed to regenerate manifest: ${result.stderr}`, "WARN");
          return false;
        }
      } else {
        this.log("⚠️ Netlify functions manifest generator not found", "WARN");
        return false;
      }
    } catch (error) {
      this.log(`❌ Failed to regenerate Netlify functions: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performHealthCheck() {
    this.log("🏥 Performing comprehensive health check...");
    
    const results = {
      pm2: await this.checkPM2Health(),
      githubActions: await this.checkGitHubActionsHealth(),
      netlifyFunctions: await this.checkNetlifyFunctionsHealth(),
      timestamp: new Date().toISOString()
    };

    const allHealthy = results.pm2 && results.githubActions && results.netlifyFunctions;
    
    if (allHealthy) {
      this.log("✅ All systems healthy");
    } else {
      this.log("⚠️ Some systems unhealthy, initiating recovery...", "WARN");
      await this.performRecovery(results);
    }

    return results;
  }

  async performRecovery(results) {
    this.log("🔄 Initiating system recovery...");
    
    if (!results.pm2) {
      this.log("🔄 Recovering PM2 processes...");
      await this.checkPM2Health();
    }

    if (!results.githubActions) {
      this.log("🔄 Recovering GitHub Actions...");
      await this.triggerGitHubActionsBackup();
    }

    if (!results.netlifyFunctions) {
      this.log("🔄 Recovering Netlify functions...");
      await this.regenerateNetlifyFunctions();
    }

    this.log("✅ Recovery process completed");
  }

  async startPeriodicChecks() {
    this.log("🔄 Starting periodic health checks...");
    
    setInterval(async () => {
      await this.performHealthCheck();
    }, this.config.monitoring.checkInterval);
  }

  initializeMonitoring() {
    this.log("🚀 Initializing comprehensive redundancy system...");
    
    // Ensure PM2 is running
    this.runCommand("pm2", ["ping"]).then(result => {
      if (result.status !== 0) {
        this.log("⚠️ PM2 not running, starting PM2...", "WARN");
        this.runCommand("pm2", ["start"]);
      }
    });

    // Start initial health check
    setTimeout(async () => {
      await this.performHealthCheck();
    }, 5000);
  }

  async shutdown() {
    this.log("🛑 Shutting down comprehensive redundancy system...");
    // Cleanup and graceful shutdown
    process.exit(0);
  }
}

// Handle process signals
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down...');
  process.exit(0);
});

// Start the system
const redundancySystem = new ComprehensiveRedundancySystem();

// Export for potential external use
module.exports = ComprehensiveRedundancySystem;