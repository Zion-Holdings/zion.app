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
        enableMetrics: true
      },
      monitoring: {
        enableHealthChecks: true,
        enablePerformanceMonitoring: true,
        enableAlerting: true,
        metricsCollection: true
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
    fs.appendFileSync(logFile, logEntry + "\n");
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      try {
        const result = spawnSync(command, args, {
          cwd: process.cwd(),
          env: process.env,
          shell: false,
          encoding: "utf8",
          maxBuffer: 1024 * 1024 * 20,
          timeout: 30000, // 30 second timeout
          ...options
        });
        
        resolve({
          status: result.status,
          stdout: result.stdout || "",
          stderr: result.stderr || "",
          error: result.error,
          timedOut: result.signal === 'SIGTERM',
          pid: result.pid
        });
      } catch (error) {
        this.log(`Command execution error: ${error.message}`, "ERROR");
        resolve({
          status: -1,
          stdout: "",
          stderr: error.message,
          error: error,
          timedOut: false,
          pid: null
        });
      }
    });
  }

  async checkPM2ComprehensiveHealth() {
    this.log("🔍 Performing comprehensive PM2 health check...");
    
    try {
      // Check PM2 daemon status
      const daemonStatus = await this.runCommand("pm2", ["ping"]);
      if (daemonStatus.status !== 0) {
        this.log("⚠️ PM2 daemon not responding, restarting...", "WARN");
        await this.runCommand("pm2", ["kill"]);
        await this.runCommand("pm2", ["start"]);
        return false;
      }

      // Check all ecosystem files
      for (const ecosystemFile of this.config.pm2.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          this.log(`📋 Checking ecosystem file: ${ecosystemFile}`);
          const ecosystemStatus = await this.runCommand("pm2", ["start", ecosystemFile, "--no-daemon"]);
          if (ecosystemStatus.status !== 0) {
            this.log(`⚠️ Failed to start ecosystem: ${ecosystemFile}`, "WARN");
          }
        }
      }

      // Check individual process health
      const processes = this.config.pm2.processes;
      let healthyProcesses = 0;

      for (const processName of processes) {
        const processStatus = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
        
        if (processStatus.status === 0) {
          healthyProcesses++;
          this.log(`✅ Process ${processName} is healthy`);
        } else {
          this.log(`⚠️ Process ${processName} not found, restarting...`, "WARN");
          await this.runCommand("pm2", ["restart", processName]);
        }
      }

      this.log(`📊 PM2 Health Summary: ${healthyProcesses}/${processes.length} processes healthy`);
      return healthyProcesses === processes.length;
    } catch (error) {
      this.log(`❌ PM2 health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkGitHubActionsComprehensive() {
    this.log("🔍 Performing comprehensive GitHub Actions health check...");
    
    try {
      const workflowsDir = ".github/workflows";
      if (!fs.existsSync(workflowsDir)) {
        this.log("❌ GitHub workflows directory not found", "ERROR");
        return false;
      }

      const workflowFiles = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));
      this.log(`📋 Found ${workflowFiles.length} workflow files`);

      let healthyWorkflows = 0;
      for (const workflow of workflowFiles) {
        const workflowPath = path.join(workflowsDir, workflow);
        try {
          const content = fs.readFileSync(workflowPath, 'utf8');
          
          // Basic YAML validation
          if (content.includes('on:') && content.includes('jobs:')) {
            healthyWorkflows++;
            this.log(`✅ Workflow ${workflow} appears valid`);
          } else {
            this.log(`⚠️ Workflow ${workflow} may have syntax issues`, "WARN");
          }
        } catch (error) {
          this.log(`❌ Error reading workflow ${workflow}: ${error.message}`, "ERROR");
        }
      }

      // Check if workflows are properly configured
      const marketingSyncExists = workflowFiles.includes('marketing-sync.yml');
      const syncHealthExists = workflowFiles.includes('sync-health.yml');

      if (!marketingSyncExists || !syncHealthExists) {
        this.log("⚠️ Missing critical workflows, attempting to restore...", "WARN");
        await this.restoreMissingWorkflows();
      }

      this.log(`📊 GitHub Actions Health Summary: ${healthyWorkflows}/${workflowFiles.length} workflows healthy`);
      return healthyWorkflows === workflowFiles.length;
    } catch (error) {
      this.log(`❌ GitHub Actions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkNetlifyFunctionsComprehensive() {
    this.log("🔍 Performing comprehensive Netlify functions health check...");
    
    try {
      const netlifyDir = "netlify";
      if (!fs.existsSync(netlifyDir)) {
        this.log("❌ Netlify directory not found", "ERROR");
        return false;
      }

      const functionsDir = path.join(netlifyDir, "functions");
      if (!fs.existsSync(functionsDir)) {
        this.log("❌ Netlify functions directory not found", "ERROR");
        return false;
      }

      // Check functions manifest
      const manifestPath = this.config.netlifyFunctions.manifestFile;
      if (fs.existsSync(manifestPath)) {
        try {
          const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
          this.log(`📋 Functions manifest contains ${manifest.functions?.length || 0} functions`);
          
          if (manifest.functions && manifest.functions.length > 0) {
            this.log("✅ Netlify functions manifest is valid");
          } else {
            this.log("⚠️ Netlify functions manifest is empty", "WARN");
          }
        } catch (error) {
          this.log(`❌ Error parsing functions manifest: ${error.message}`, "ERROR");
        }
      } else {
        this.log("⚠️ Netlify functions manifest not found", "WARN");
      }

      // Check for netlify.toml configuration
      const netlifyConfig = path.join(netlifyDir, "netlify.toml");
      if (fs.existsSync(netlifyConfig)) {
        this.log("✅ Netlify configuration file exists");
      } else {
        this.log("⚠️ Netlify configuration file missing", "WARN");
      }

      return true;
    } catch (error) {
      this.log(`❌ Netlify functions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restoreMissingWorkflows() {
    this.log("🔧 Attempting to restore missing GitHub Actions workflows...");
    
    try {
      // Create marketing-sync.yml if missing
      const marketingSyncPath = ".github/workflows/marketing-sync.yml";
      if (!fs.existsSync(marketingSyncPath)) {
        const marketingSyncContent = `name: Marketing Sync

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
          fi`;

        fs.writeFileSync(marketingSyncPath, marketingSyncContent);
        this.log("✅ Restored marketing-sync.yml workflow");
      }

      // Create sync-health.yml if missing
      const syncHealthPath = ".github/workflows/sync-health.yml";
      if (!fs.existsSync(syncHealthPath)) {
        const syncHealthContent = `name: Sync Health

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
          fi`;

        fs.writeFileSync(syncHealthPath, syncHealthContent);
        this.log("✅ Restored sync-health.yml workflow");
      }
    } catch (error) {
      this.log(`❌ Failed to restore workflows: ${error.message}`, "ERROR");
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
    results.githubActions = await this.checkGitHubActionsComprehensive();
    
    // Check Netlify functions health
    results.netlifyFunctions = await this.checkNetlifyFunctionsComprehensive();

    // Generate health report
    const healthReport = this.generateHealthReport(results);
    this.log(healthReport);

    // Save health report
    this.saveHealthReport(results);

    return results;
  }

  generateHealthReport(results) {
    const status = {
      pm2: results.pm2 ? "✅ HEALTHY" : "❌ UNHEALTHY",
      githubActions: results.githubActions ? "✅ HEALTHY" : "❌ UNHEALTHY",
      netlifyFunctions: results.netlifyFunctions ? "✅ HEALTHY" : "❌ UNHEALTHY"
    };

    const overallHealth = Object.values(results).filter(Boolean).length === 3 ? "✅ ALL SYSTEMS HEALTHY" : "⚠️ SOME SYSTEMS UNHEALTHY";

    return `
📊 COMPREHENSIVE HEALTH REPORT
===============================
Timestamp: ${results.timestamp}
Overall Status: ${overallHealth}

🔧 PM2 Processes: ${status.pm2}
🔄 GitHub Actions: ${status.githubActions}
☁️ Netlify Functions: ${status.netlifyFunctions}

${results.pm2 && results.githubActions && results.netlifyFunctions ? 
  "🎉 All automation systems are operating normally!" : 
  "⚠️ Some automation systems require attention. Check logs for details."}
`;
  }

  saveHealthReport(results) {
    try {
      const reportPath = path.join(this.config.logging.logDir, `health-report-${new Date().toISOString().split('T')[0]}.json`);
      const reportData = {
        ...results,
        summary: {
          totalSystems: 3,
          healthySystems: Object.values(results).filter(Boolean).length,
          unhealthySystems: Object.values(results).filter(Boolean).length - 3
        }
      };
      
      fs.writeFileSync(reportPath, JSON.stringify(reportData, null, 2));
      this.log(`📝 Health report saved to ${reportPath}`);
    } catch (error) {
      this.log(`❌ Failed to save health report: ${error.message}`, "ERROR");
    }
  }

  async startComprehensiveMonitoring() {
    this.log("🚀 Starting comprehensive monitoring system...");
    
    // Initial health check
    await this.performComprehensiveHealthCheck();
    
    // Set up periodic monitoring
    setInterval(async () => {
      await this.performComprehensiveHealthCheck();
    }, 5 * 60 * 1000); // Every 5 minutes

    // Set up PM2 monitoring
    setInterval(async () => {
      await this.checkPM2ComprehensiveHealth();
    }, this.config.pm2.healthCheckInterval);

    // Set up GitHub Actions monitoring
    setInterval(async () => {
      await this.checkGitHubActionsComprehensive();
    }, this.config.githubActions.healthCheckInterval);

    // Set up Netlify functions monitoring
    setInterval(async () => {
      await this.checkNetlifyFunctionsComprehensive();
    }, this.config.netlifyFunctions.healthCheckInterval);

    this.log("✅ Comprehensive monitoring system started successfully");
  }

  initializeMonitoring() {
    this.log("🔧 Initializing comprehensive redundancy monitoring...");
    
    // Ensure all required directories exist
    const requiredDirs = [
      this.config.logging.logDir,
      ".github/workflows",
      "netlify/functions"
    ];

    requiredDirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        this.log(`📁 Created directory: ${dir}`);
      }
    });
  }
}

// Start the comprehensive redundancy system
if (require.main === module) {
  const redundancySystem = new ComprehensiveRedundancySystem();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down comprehensive redundancy system...');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    console.log('\n🛑 Terminating comprehensive redundancy system...');
    process.exit(0);
  });
}

module.exports = ComprehensiveRedundancySystem;