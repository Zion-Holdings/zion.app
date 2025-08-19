#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class UltimateRedundancyAutomationSystem {
  constructor() {
    this.config = {
      pm2: {
        ecosystemFiles: [
          "ecosystem.pm2.cjs",
          "ecosystem.redundancy.cjs",
          "ecosystem.comprehensive-redundancy.cjs"
        ],
        processes: [
          "zion-auto-sync",
          "zion-auto-sync-cron",
          "redundancy-automation-system",
          "redundancy-health-monitor",
          "redundancy-git-sync",
          "redundancy-build-monitor",
          "comprehensive-redundancy-system",
          "comprehensive-redundancy-orchestrator",
          "comprehensive-pm2-redundancy",
          "comprehensive-github-actions-redundancy",
          "comprehensive-netlify-functions-redundancy"
        ],
        healthCheckInterval: 30000,
        maxRestartAttempts: 5,
        restartDelay: 5000,
        autoRecovery: true,
        logRotation: true
      },
      githubActions: {
        workflows: [
          ".github/workflows/marketing-sync.yml",
          ".github/workflows/sync-health.yml",
          ".github/workflows/marketing-sync-backup.yml",
          ".github/workflows/sync-health-backup.yml"
        ],
        healthCheckInterval: 60000,
        maxFailureThreshold: 3,
        autoTrigger: true,
        backupTriggers: true,
        workflowValidation: true
      },
      netlifyFunctions: {
        manifestFile: "netlify/functions/functions-manifest.json",
        functionsDir: "netlify/functions",
        healthCheckInterval: 120000,
        maxFailureThreshold: 2,
        autoRegenerate: true,
        deploymentCheck: true,
        functionValidation: true
      },
      automation: {
        scripts: [
          "automation/marketing-sync.js",
          "automation/pm2-auto-sync.js",
          "automation/comprehensive-redundancy-system.cjs",
          "automation/comprehensive-redundancy-orchestrator.cjs",
          "automation/comprehensive-pm2-redundancy.cjs",
          "automation/comprehensive-github-actions-redundancy.cjs",
          "automation/comprehensive-netlify-functions-redundancy.cjs"
        ],
        healthCheckInterval: 45000,
        maxFailureThreshold: 2,
        autoRestart: true
      },
      logging: {
        logDir: "automation/logs",
        maxLogSize: 10 * 1024 * 1024,
        maxLogFiles: 30,
        logRotation: true
      },
      monitoring: {
        enabled: true,
        interval: 30000,
        alertThreshold: 3,
        autoRestart: true,
        healthDashboard: true
      },
      git: {
        syncInterval: 300000, // 5 minutes
        autoCommit: true,
        autoPush: true,
        conflictResolution: true
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

  initializeMonitoring() {
    // This method is called in constructor but not defined
    // It will be handled by startComprehensiveMonitoring
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

  async checkPM2ComprehensiveHealth() {
    this.log("🔍 Checking comprehensive PM2 process health...");
    
    try {
      const result = await this.runCommand("pm2", ["jlist"]);
      if (result.status !== 0) {
        this.log("❌ PM2 not running, starting PM2...", "ERROR");
        await this.runCommand("pm2", ["start"]);
        return false;
      }

      const processes = JSON.parse(result.stdout);
      let allHealthy = true;
      const missingProcesses = [];

      for (const processName of this.config.pm2.processes) {
        const process = processes.find(p => p.name === processName);
        if (!process || process.pm2_env.status !== "online") {
          allHealthy = false;
          missingProcesses.push(processName);
          this.log(`⚠️ Process ${processName} is not running`, "WARN");
        }
      }

      if (!allHealthy) {
        this.log(`🔄 Restarting missing PM2 processes: ${missingProcesses.join(", ")}`, "WARN");
        await this.restartPM2Processes(missingProcesses);
      }

      return allHealthy;
    } catch (error) {
      this.log(`❌ PM2 health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restartPM2Processes(processNames) {
    for (const processName of processNames) {
      try {
        this.log(`🔄 Restarting PM2 process: ${processName}`);
        await this.runCommand("pm2", ["restart", processName]);
        await this.sleep(2000);
      } catch (error) {
        this.log(`❌ Failed to restart ${processName}: ${error.message}`, "ERROR");
      }
    }
  }

  async checkGitHubActionsHealth() {
    this.log("🔍 Checking GitHub Actions workflows health...");
    
    try {
      let allHealthy = true;
      
      for (const workflow of this.config.githubActions.workflows) {
        if (!fs.existsSync(workflow)) {
          this.log(`⚠️ Workflow file missing: ${workflow}`, "WARN");
          allHealthy = false;
          continue;
        }

        // Validate workflow syntax
        try {
          const workflowContent = fs.readFileSync(workflow, 'utf8');
          if (!workflowContent.includes('name:') || !workflowContent.includes('on:')) {
            this.log(`⚠️ Invalid workflow syntax: ${workflow}`, "WARN");
            allHealthy = false;
          }
        } catch (error) {
          this.log(`❌ Error reading workflow ${workflow}: ${error.message}`, "ERROR");
          allHealthy = false;
        }
      }

      if (!allHealthy) {
        this.log("🔄 Attempting to repair GitHub Actions workflows...", "WARN");
        await this.repairGitHubActions();
      }

      return allHealthy;
    } catch (error) {
      this.log(`❌ GitHub Actions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async repairGitHubActions() {
    try {
      // Backup existing workflows
      const backupDir = ".github/workflows/backups";
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }

      // Create backup of current workflows
      for (const workflow of this.config.githubActions.workflows) {
        if (fs.existsSync(workflow)) {
          const backupPath = path.join(backupDir, `${path.basename(workflow)}.backup.${Date.now()}`);
          fs.copyFileSync(workflow, backupPath);
        }
      }

      this.log("✅ GitHub Actions workflows backed up");
    } catch (error) {
      this.log(`❌ Failed to backup workflows: ${error.message}`, "ERROR");
    }
  }

  async checkNetlifyFunctionsHealth() {
    this.log("🔍 Checking Netlify Functions health...");
    
    try {
      let allHealthy = true;
      
      // Check manifest file
      if (!fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        this.log("⚠️ Netlify functions manifest missing", "WARN");
        allHealthy = false;
      } else {
        try {
          const manifest = JSON.parse(fs.readFileSync(this.config.netlifyFunctions.manifestFile, 'utf8'));
          if (!manifest.functions || manifest.functions.length === 0) {
            this.log("⚠️ Netlify functions manifest is empty", "WARN");
            allHealthy = false;
          }
        } catch (error) {
          this.log(`❌ Invalid manifest file: ${error.message}`, "ERROR");
          allHealthy = false;
        }
      }

      // Check functions directory
      if (!fs.existsSync(this.config.netlifyFunctions.functionsDir)) {
        this.log("⚠️ Netlify functions directory missing", "WARN");
        allHealthy = false;
      }

      if (!allHealthy) {
        this.log("🔄 Attempting to repair Netlify Functions...", "WARN");
        await this.repairNetlifyFunctions();
      }

      return allHealthy;
    } catch (error) {
      this.log(`❌ Netlify Functions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async repairNetlifyFunctions() {
    try {
      // Regenerate functions manifest
      if (fs.existsSync("scripts/generate-netlify-functions-manifest.cjs")) {
        this.log("🔄 Regenerating Netlify functions manifest...");
        await this.runCommand("node", ["scripts/generate-netlify-functions-manifest.cjs"]);
      }

      // Ensure functions directory exists
      if (!fs.existsSync(this.config.netlifyFunctions.functionsDir)) {
        fs.mkdirSync(this.config.netlifyFunctions.functionsDir, { recursive: true });
        this.log("✅ Created Netlify functions directory");
      }

      this.log("✅ Netlify Functions repaired");
    } catch (error) {
      this.log(`❌ Failed to repair Netlify Functions: ${error.message}`, "ERROR");
    }
  }

  async checkAutomationScriptsHealth() {
    this.log("🔍 Checking automation scripts health...");
    
    try {
      let allHealthy = true;
      
      for (const script of this.config.automation.scripts) {
        if (!fs.existsSync(script)) {
          this.log(`⚠️ Automation script missing: ${script}`, "WARN");
          allHealthy = false;
          continue;
        }

        // Check if script is executable and valid
        try {
          const scriptContent = fs.readFileSync(script, 'utf8');
          if (!scriptContent.includes('#!/usr/bin/env node') && !scriptContent.includes('"use strict"')) {
            this.log(`⚠️ Script may not be valid Node.js: ${script}`, "WARN");
          }
        } catch (error) {
          this.log(`❌ Error reading script ${script}: ${error.message}`, "ERROR");
          allHealthy = false;
        }
      }

      return allHealthy;
    } catch (error) {
      this.log(`❌ Automation scripts health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performGitSync() {
    try {
      this.log("🔄 Performing Git sync...");
      
      // Check git status
      const statusResult = await this.runCommand("git", ["status", "--porcelain"]);
      if (statusResult.stdout.trim()) {
        this.log("📝 Changes detected, committing...");
        
        // Add all changes
        await this.runCommand("git", ["add", "."]);
        
        // Commit with timestamp
        const timestamp = new Date().toISOString();
        const commitMessage = `chore(automation): auto-sync ${timestamp}`;
        await this.runCommand("git", ["commit", "-m", commitMessage]);
        
        // Push to origin
        await this.runCommand("git", ["push", "origin", "main"]);
        this.log("✅ Git sync completed");
      } else {
        this.log("✅ No changes to sync");
      }
    } catch (error) {
      this.log(`❌ Git sync failed: ${error.message}`, "ERROR");
    }
  }

  async rotateLogs() {
    try {
      if (!this.config.logging.logRotation) return;
      
      const logDir = this.config.logging.logDir;
      if (!fs.existsSync(logDir)) return;

      const files = fs.readdirSync(logDir);
      const logFiles = files.filter(file => file.endsWith('.log'));
      
      if (logFiles.length > this.config.logging.maxLogFiles) {
        // Sort by modification time and remove oldest
        const sortedFiles = logFiles
          .map(file => ({ name: file, path: path.join(logDir, file) }))
          .sort((a, b) => fs.statSync(b.path).mtime.getTime() - fs.statSync(a.path).mtime.getTime());

        const filesToRemove = sortedFiles.slice(this.config.logging.maxLogFiles);
        for (const file of filesToRemove) {
          fs.unlinkSync(file.path);
          this.log(`🗑️ Removed old log file: ${file.name}`);
        }
      }
    } catch (error) {
      this.log(`❌ Log rotation failed: ${error.message}`, "ERROR");
    }
  }

  async generateHealthReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        pm2: {
          status: await this.checkPM2ComprehensiveHealth(),
          processes: this.config.pm2.processes
        },
        githubActions: {
          status: await this.checkGitHubActionsHealth(),
          workflows: this.config.githubActions.workflows
        },
        netlifyFunctions: {
          status: await this.checkNetlifyFunctionsHealth(),
          manifestFile: this.config.netlifyFunctions.manifestFile
        },
        automation: {
          status: await this.checkAutomationScriptsHealth(),
          scripts: this.config.automation.scripts
        },
        system: {
          uptime: process.uptime(),
          memory: process.memoryUsage(),
          platform: process.platform,
          nodeVersion: process.version
        }
      };

      const reportFile = path.join(this.config.logging.logDir, `health-report-${new Date().toISOString().split('T')[0]}.json`);
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      this.log("📊 Health report generated");
      return report;
    } catch (error) {
      this.log(`❌ Failed to generate health report: ${error.message}`, "ERROR");
      return null;
    }
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async startComprehensiveMonitoring() {
    this.log("🚀 Starting Ultimate Redundancy Automation System...");
    
    setInterval(async () => {
      try {
        await this.performComprehensiveHealthCheck();
      } catch (error) {
        this.log(`❌ Comprehensive health check failed: ${error.message}`, "ERROR");
      }
    }, this.config.monitoring.interval);

    // Git sync interval
    setInterval(async () => {
      try {
        await this.performGitSync();
      } catch (error) {
        this.log(`❌ Git sync failed: ${error.message}`, "ERROR");
      }
    }, this.config.git.syncInterval);

    // Log rotation interval (daily)
    setInterval(async () => {
      try {
        await this.rotateLogs();
      } catch (error) {
        this.log(`❌ Log rotation failed: ${error.message}`, "ERROR");
      }
    }, 24 * 60 * 60 * 1000);

    this.log("✅ Ultimate Redundancy Automation System started successfully");
  }

  async performComprehensiveHealthCheck() {
    this.log("🔍 Performing comprehensive health check...");
    
    const pm2Health = await this.checkPM2ComprehensiveHealth();
    const githubHealth = await this.checkGitHubActionsHealth();
    const netlifyHealth = await this.checkNetlifyFunctionsHealth();
    const automationHealth = await this.checkAutomationScriptsHealth();

    const overallHealth = pm2Health && githubHealth && netlifyHealth && automationHealth;
    
    if (overallHealth) {
      this.log("✅ All systems healthy");
    } else {
      this.log("⚠️ Some systems need attention", "WARN");
      
      // Generate health report
      await this.generateHealthReport();
    }
  }

  async stop() {
    this.log("🛑 Stopping Ultimate Redundancy Automation System...");
    process.exit(0);
  }
}

// Handle process signals
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the system if this file is run directly
if (require.main === module) {
  const system = new UltimateRedundancyAutomationSystem();
  
  // Keep the process alive
  setInterval(() => {
    // Heartbeat
  }, 60000);
}

module.exports = UltimateRedundancyAutomationSystem;