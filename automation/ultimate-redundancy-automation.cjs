#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class UltimateRedundancyAutomation {
  constructor() {
    this.config = {
      // PM2 Redundancy Configuration
      pm2: {
        ecosystemFiles: [
          "ecosystem.pm2.cjs",
          "ecosystem.redundancy.cjs", 
          "ecosystem.comprehensive-redundancy.cjs",
          "ecosystem-redundancy.pm2.cjs"
        ],
        processes: [
          "zion-auto-sync",
          "zion-auto-sync-cron",
          "redundancy-automation-system",
          "redundancy-health-monitor",
          "redundancy-git-sync",
          "redundancy-build-monitor",
          "master-redundancy-orchestrator",
          "enhanced-pm2-redundancy",
          "enhanced-github-actions-redundancy",
          "enhanced-netlify-functions-redundancy",
          "redundancy-automation-system",
          "redundancy-health-monitor",
          "redundancy-git-sync",
          "redundancy-build-monitor"
        ],
        healthCheckInterval: 30000,
        maxRestartAttempts: 5,
        restartDelay: 5000,
        autoRecovery: true,
        processMonitoring: true,
        logRotation: true
      },
      
      // GitHub Actions Redundancy Configuration
      githubActions: {
        workflows: [
          ".github/workflows/marketing-sync.yml",
          ".github/workflows/sync-health.yml",
          ".github/workflows/marketing-sync-backup.yml",
          ".github/workflows/sync-health-backup.yml"
        ],
        backupWorkflows: [
          ".github/workflows/marketing-sync-backup.yml",
          ".github/workflows/sync-health-backup.yml"
        ],
        healthCheckInterval: 60000,
        maxFailureThreshold: 3,
        autoTrigger: true,
        backupTriggers: true,
        workflowValidation: true,
        apiHealthCheck: true,
        autoHealing: true
      },
      
      // Netlify Functions Redundancy Configuration
      netlifyFunctions: {
        manifestFile: "netlify/functions/functions-manifest.json",
        functionsDir: "netlify/functions",
        healthCheckInterval: 120000,
        maxFailureThreshold: 2,
        autoRegenerate: true,
        deploymentCheck: true,
        logRotation: true,
        autoHealing: true,
        backupGeneration: true
      },
      
      // Logging Configuration
      logging: {
        logDir: "automation/logs",
        maxLogSize: 10 * 1024 * 1024,
        maxLogFiles: 30,
        logLevel: "INFO"
      },
      
      // Monitoring Configuration
      monitoring: {
        enabled: true,
        interval: 30000,
        alertThreshold: 3,
        autoRestart: true,
        loadBalancing: true,
        failover: true
      },
      
      // Backup Configuration
      backup: {
        enabled: true,
        interval: 3600000, // 1 hour
        retention: 7, // days
        compression: true,
        encryption: false
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
    
    const logFile = path.join(this.config.logging.logDir, `ultimate-redundancy-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logEntry + "\n");
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

  // PM2 Redundancy Management
  async checkPM2ComprehensiveHealth() {
    this.log("🔍 Checking comprehensive PM2 process health...");
    
    try {
      const result = await this.runCommand("pm2", ["status", "--no-daemon"]);
      
      if (result.status !== 0) {
        this.log("❌ PM2 status check failed", "ERROR");
        return false;
      }

      const processes = this.config.pm2.processes;
      let healthyCount = 0;
      let failedProcesses = [];

      for (const processName of processes) {
        const processStatus = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
        
        if (processStatus.status === 0 && processStatus.stdout.includes("online")) {
          healthyCount++;
        } else {
          failedProcesses.push(processName);
        }
      }

      this.log(`📊 PM2 Health: ${healthyCount}/${processes.length} processes healthy`);
      
      if (failedProcesses.length > 0) {
        this.log(`⚠️ Failed processes: ${failedProcesses.join(", ")}`, "WARN");
        await this.recoverPM2Processes(failedProcesses);
      }

      return healthyCount === processes.length;
    } catch (error) {
      this.log(`❌ PM2 health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async recoverPM2Processes(failedProcesses) {
    this.log(`🔄 Attempting to recover ${failedProcesses.length} failed PM2 processes...`);
    
    for (const processName of failedProcesses) {
      try {
        // Stop the process if it exists
        await this.runCommand("pm2", ["stop", processName]);
        
        // Delete the process
        await this.runCommand("pm2", ["delete", processName]);
        
        // Restart using the appropriate ecosystem file
        const ecosystemFile = this.findEcosystemFileForProcess(processName);
        if (ecosystemFile) {
          await this.runCommand("pm2", ["start", ecosystemFile, "--update-env"]);
          this.log(`✅ Restarted ${processName} using ${ecosystemFile}`);
        } else {
          // Fallback to direct script execution
          const scriptPath = this.findScriptPathForProcess(processName);
          if (scriptPath) {
            await this.runCommand("pm2", ["start", scriptPath, "--name", processName]);
            this.log(`✅ Restarted ${processName} using direct script`);
          }
        }
      } catch (error) {
        this.log(`❌ Failed to recover ${processName}: ${error.message}`, "ERROR");
      }
    }
  }

  findEcosystemFileForProcess(processName) {
    // Map processes to their ecosystem files
    const processEcosystemMap = {
      "zion-auto-sync": "ecosystem.pm2.cjs",
      "zion-auto-sync-cron": "ecosystem.pm2.cjs",
      "master-redundancy-orchestrator": "ecosystem.comprehensive-redundancy.cjs",
      "enhanced-pm2-redundancy": "ecosystem.comprehensive-redundancy.cjs",
      "enhanced-github-actions-redundancy": "ecosystem.comprehensive-redundancy.cjs",
      "enhanced-netlify-functions-redundancy": "ecosystem.comprehensive-redundancy.cjs"
    };
    
    return processEcosystemMap[processName] || "ecosystem.comprehensive-redundancy.cjs";
  }

  findScriptPathForProcess(processName) {
    // Map processes to their script paths
    const processScriptMap = {
      "zion-auto-sync": "automation/pm2-auto-sync.js",
      "zion-auto-sync-cron": "automation/pm2-auto-sync.js",
      "master-redundancy-orchestrator": "automation/master-redundancy-orchestrator.cjs",
      "enhanced-pm2-redundancy": "automation/enhanced-pm2-redundancy.cjs",
      "enhanced-github-actions-redundancy": "automation/enhanced-github-actions-redundancy.cjs",
      "enhanced-netlify-functions-redundancy": "automation/enhanced-netlify-functions-redundancy.cjs"
    };
    
    return processScriptMap[processName];
  }

  // GitHub Actions Redundancy Management
  async checkGitHubActionsHealth() {
    this.log("🔍 Checking GitHub Actions workflows health...");
    
    try {
      const workflows = this.config.githubActions.workflows;
      let healthyCount = 0;
      let failedWorkflows = [];

      for (const workflow of workflows) {
        if (fs.existsSync(workflow)) {
          const isValid = await this.validateWorkflow(workflow);
          if (isValid) {
            healthyCount++;
          } else {
            failedWorkflows.push(workflow);
          }
        } else {
          this.log(`⚠️ Workflow file not found: ${workflow}`, "WARN");
          failedWorkflows.push(workflow);
        }
      }

      this.log(`📊 GitHub Actions Health: ${healthyCount}/${workflows.length} workflows healthy`);
      
      if (failedWorkflows.length > 0) {
        this.log(`⚠️ Failed workflows: ${failedWorkflows.join(", ")}`, "WARN");
        await this.recoverGitHubActions(failedWorkflows);
      }

      return healthyCount === workflows.length;
    } catch (error) {
      this.log(`❌ GitHub Actions health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async validateWorkflow(workflowPath) {
    try {
      const content = fs.readFileSync(workflowPath, 'utf8');
      
      // Basic YAML validation
      if (!content.includes('name:') || !content.includes('on:')) {
        return false;
      }
      
      // Check for required permissions
      if (!content.includes('permissions:')) {
        return false;
      }
      
      // Check for required jobs
      if (!content.includes('jobs:')) {
        return false;
      }
      
      return true;
    } catch (error) {
      this.log(`❌ Workflow validation error for ${workflowPath}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async recoverGitHubActions(failedWorkflows) {
    this.log(`🔄 Attempting to recover ${failedWorkflows.length} failed GitHub Actions workflows...`);
    
    for (const workflow of failedWorkflows) {
      try {
        if (workflow.includes('backup')) {
          // Restore from backup
          await this.restoreWorkflowFromBackup(workflow);
        } else {
          // Create backup and regenerate
          await this.createWorkflowBackup(workflow);
          await this.regenerateWorkflow(workflow);
        }
      } catch (error) {
        this.log(`❌ Failed to recover ${workflow}: ${error.message}`, "ERROR");
      }
    }
  }

  async createWorkflowBackup(workflowPath) {
    const backupPath = workflowPath.replace('.yml', '-backup.yml');
    if (fs.existsSync(workflowPath)) {
      fs.copyFileSync(workflowPath, backupPath);
      this.log(`✅ Created backup: ${backupPath}`);
    }
  }

  async restoreWorkflowFromBackup(workflowPath) {
    const backupPath = workflowPath.replace('.yml', '-backup.yml');
    if (fs.existsSync(backupPath)) {
      fs.copyFileSync(backupPath, workflowPath);
      this.log(`✅ Restored from backup: ${backupPath}`);
    }
  }

  async regenerateWorkflow(workflowPath) {
    const workflowName = path.basename(workflowPath, '.yml');
    
    // Generate basic workflow template
    const template = this.generateWorkflowTemplate(workflowName);
    fs.writeFileSync(workflowPath, template);
    this.log(`✅ Regenerated workflow: ${workflowPath}`);
  }

  generateWorkflowTemplate(workflowName) {
    const templates = {
      'marketing-sync': `name: Marketing Sync

on:
  schedule:
    - cron: '0 */12 * * *'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  run-marketing-sync:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Run marketing-sync
        env:
          LINKEDIN_ACCESS_TOKEN: \${{ secrets.LINKEDIN_ACCESS_TOKEN }}
          LINKEDIN_URN: \${{ secrets.LINKEDIN_URN }}
          IG_USER_ID: \${{ secrets.IG_USER_ID }}
          IG_ACCESS_TOKEN: \${{ secrets.IG_ACCESS_TOKEN }}
        run: node automation/marketing-sync.js

      - name: Commit report if changed
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          if [ -n "\$(git status --porcelain)" ]; then
            git add -A
            git commit -m "chore(marketing): update marketing-sync report"
            git push origin HEAD:main
          else
            echo "No changes to commit."
          fi`,

      'sync-health': `name: Sync Health

on:
  schedule:
    - cron: '*/15 * * * *'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  check-sync:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Run pm2-auto-sync (safe mode)
        env:
          AUTO_SYNC_STRATEGY: hardreset
          AUTO_SYNC_CLEAN: '0'
        run: node automation/pm2-auto-sync.js || true

      - name: Push if repository is ahead
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          AHEAD=\$(git rev-list --left-right --count HEAD...origin/main | awk '{print \$1}')
          if [ "\$AHEAD" != "0" ]; then
            git push origin HEAD:main
          else
            echo "No push needed."
          fi`
    };
    
    return templates[workflowName] || `name: ${workflowName}

on:
  workflow_dispatch:

permissions:
  contents: write

jobs:
  run-${workflowName}:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Run ${workflowName}
        run: echo "Workflow ${workflowName} placeholder"`;
  }

  // Netlify Functions Redundancy Management
  async checkNetlifyFunctionsHealth() {
    this.log("🔍 Checking Netlify functions health...");
    
    try {
      if (!fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        this.log("❌ Netlify functions manifest not found", "ERROR");
        await this.regenerateNetlifyFunctionsManifest();
        return false;
      }

      const manifest = JSON.parse(fs.readFileSync(this.config.netlifyFunctions.manifestFile, 'utf8'));
      const functions = manifest.functions || [];
      
      if (functions.length === 0) {
        this.log("⚠️ No Netlify functions found in manifest", "WARN");
        await this.regenerateNetlifyFunctionsManifest();
        return false;
      }

      this.log(`📊 Netlify Functions Health: ${functions.length} functions found`);
      
      // Check if manifest is recent
      const manifestAge = Date.now() - new Date(manifest.generatedAt).getTime();
      const maxAge = 24 * 60 * 60 * 1000; // 24 hours
      
      if (manifestAge > maxAge) {
        this.log("⚠️ Netlify functions manifest is outdated", "WARN");
        await this.regenerateNetlifyFunctionsManifest();
      }

      return true;
    } catch (error) {
      this.log(`❌ Netlify functions health check error: ${error.message}`, "ERROR");
      await this.regenerateNetlifyFunctionsManifest();
      return false;
    }
  }

  async regenerateNetlifyFunctionsManifest() {
    this.log("🔄 Regenerating Netlify functions manifest...");
    
    try {
      const result = await this.runCommand("node", ["scripts/generate-netlify-functions-manifest.cjs"]);
      
      if (result.status === 0) {
        this.log("✅ Netlify functions manifest regenerated successfully");
      } else {
        this.log(`❌ Failed to regenerate manifest: ${result.stderr}`, "ERROR");
      }
    } catch (error) {
      this.log(`❌ Error regenerating manifest: ${error.message}`, "ERROR");
    }
  }

  // Comprehensive Health Check
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
    results.githubActions = await this.checkGitHubActionsHealth();
    
    // Check Netlify Functions health
    results.netlifyFunctions = await this.checkNetlifyFunctionsHealth();

    // Generate health report
    const healthReport = this.generateHealthReport(results);
    this.saveHealthReport(healthReport);

    // Overall health status
    const overallHealth = results.pm2 && results.githubActions && results.netlifyFunctions;
    
    if (overallHealth) {
      this.log("✅ All systems are healthy!");
    } else {
      this.log("⚠️ Some systems need attention", "WARN");
    }

    return results;
  }

  generateHealthReport(results) {
    return {
      timestamp: results.timestamp,
      overall: results.pm2 && results.githubActions && results.netlifyFunctions,
      systems: {
        pm2: {
          status: results.pm2 ? "healthy" : "unhealthy",
          description: "PM2 process management system"
        },
        githubActions: {
          status: results.githubActions ? "healthy" : "unhealthy",
          description: "GitHub Actions workflows"
        },
        netlifyFunctions: {
          status: results.netlifyFunctions ? "healthy" : "unhealthy",
          description: "Netlify serverless functions"
        }
      },
      recommendations: this.generateRecommendations(results)
    };
  }

  generateRecommendations(results) {
    const recommendations = [];
    
    if (!results.pm2) {
      recommendations.push("Check PM2 process status and restart failed processes");
    }
    
    if (!results.githubActions) {
      recommendations.push("Validate GitHub Actions workflows and restore from backups if needed");
    }
    
    if (!results.netlifyFunctions) {
      recommendations.push("Regenerate Netlify functions manifest and verify deployment");
    }
    
    return recommendations;
  }

  saveHealthReport(report) {
    const reportPath = path.join(this.config.logging.logDir, `health-report-${new Date().toISOString().split('T')[0]}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Health report saved to: ${reportPath}`);
  }

  // Monitoring and Auto-Recovery
  initializeMonitoring() {
    this.log("🔧 Initializing comprehensive monitoring system...");
    
    // Set up health check intervals
    setInterval(async () => {
      await this.performComprehensiveHealthCheck();
    }, this.config.monitoring.interval);
    
    // Set up backup intervals
    if (this.config.backup.enabled) {
      setInterval(async () => {
        await this.performBackup();
      }, this.config.backup.interval);
    }
  }

  async performBackup() {
    this.log("💾 Performing system backup...");
    
    try {
      const backupDir = path.join(this.config.logging.logDir, 'backups', new Date().toISOString().split('T')[0]);
      fs.mkdirSync(backupDir, { recursive: true });
      
      // Backup PM2 ecosystem files
      for (const ecosystemFile of this.config.pm2.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          const backupPath = path.join(backupDir, path.basename(ecosystemFile));
          fs.copyFileSync(ecosystemFile, backupPath);
        }
      }
      
      // Backup GitHub Actions workflows
      for (const workflow of this.config.githubActions.workflows) {
        if (fs.existsSync(workflow)) {
          const backupPath = path.join(backupDir, path.basename(workflow));
          fs.copyFileSync(workflow, backupPath);
        }
      }
      
      // Backup Netlify functions manifest
      if (fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        const backupPath = path.join(backupDir, 'functions-manifest.json');
        fs.copyFileSync(this.config.netlifyFunctions.manifestFile, backupPath);
      }
      
      this.log(`✅ Backup completed: ${backupDir}`);
      
      // Clean up old backups
      await this.cleanupOldBackups();
    } catch (error) {
      this.log(`❌ Backup failed: ${error.message}`, "ERROR");
    }
  }

  async cleanupOldBackups() {
    try {
      const backupDir = path.join(this.config.logging.logDir, 'backups');
      if (!fs.existsSync(backupDir)) return;
      
      const backups = fs.readdirSync(backupDir);
      const now = new Date();
      
      for (const backup of backups) {
        const backupPath = path.join(backupDir, backup);
        const stats = fs.statSync(backupPath);
        const ageInDays = (now - stats.mtime) / (1000 * 60 * 60 * 24);
        
        if (ageInDays > this.config.backup.retention) {
          fs.rmSync(backupPath, { recursive: true, force: true });
          this.log(`🗑️ Cleaned up old backup: ${backup}`);
        }
      }
    } catch (error) {
      this.log(`❌ Backup cleanup failed: ${error.message}`, "ERROR");
    }
  }

  startComprehensiveMonitoring() {
    this.log("🚀 Starting ultimate redundancy automation system...");
    
    // Initial health check
    setTimeout(async () => {
      await this.performComprehensiveHealthCheck();
    }, 5000);
    
    this.log("✅ Ultimate redundancy automation system is now running");
    this.log(`📊 Health checks every: ${this.config.monitoring.interval / 1000} seconds`);
    this.log(`💾 Backups every: ${this.config.backup.interval / (1000 * 60 * 60)} hours`);
  }

  // Public API methods
  async start() {
    this.log("🚀 Starting ultimate redundancy automation...");
    await this.performComprehensiveHealthCheck();
  }

  async stop() {
    this.log("🛑 Stopping ultimate redundancy automation...");
    // Cleanup logic here
  }

  async status() {
    return await this.performComprehensiveHealthCheck();
  }

  async health() {
    return await this.performComprehensiveHealthCheck();
  }
}

// CLI interface
if (require.main === module) {
  const automation = new UltimateRedundancyAutomation();
  const command = process.argv[2] || 'start';
  
  switch (command) {
    case 'start':
      automation.start();
      break;
    case 'stop':
      automation.stop();
      break;
    case 'status':
      automation.status().then(results => {
        console.log(JSON.stringify(results, null, 2));
        process.exit(0);
      });
      break;
    case 'health':
      automation.health().then(results => {
        console.log(JSON.stringify(results, null, 2));
        process.exit(0);
      });
      break;
    default:
      console.log('Usage: node ultimate-redundancy-automation.cjs [start|stop|status|health]');
      process.exit(1);
  }
}

module.exports = UltimateRedundancyAutomation;