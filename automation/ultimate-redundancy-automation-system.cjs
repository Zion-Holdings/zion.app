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
          "ecosystem.comprehensive-redundancy.cjs",
          "ecosystem.redundancy.pm2.cjs"
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
        apiHealthCheck: true
      },
      netlifyFunctions: {
        manifestFile: "netlify/functions/functions-manifest.json",
        functions: [
          "a11y-alt-text-runner",
          "adaptive-orchestrator",
          "ai-changelog-runner",
          "ai-trends-radar-runner",
          "anchor-links-auto-fixer",
          "auto-discovery-runner",
          "auto-scheduler",
          "automation-matrix",
          "autonomous-invention-orchestrator",
          "autonomous-meta-orchestrator",
          "broken-image-scanner",
          "broken-image-scanner-runner",
          "canonical-auditor",
          "cloud_deep_research",
          "cloud_orchestrator",
          "code-smell-audit-runner",
          "component-coupling-graph-runner",
          "component-props-docs-runner",
          "component-size-report",
          "content-freshness-score-runner",
          "continuous-front-runner",
          "continuous-orchestrator",
          "dead-code-audit",
          "dead-code-report",
          "deps-auto-upgrade-runner",
          "docs-index-runner",
          "docs-search-index-runner",
          "duplicate-media-finder-runner",
          "external-link-check-runner",
          "fast-front-promoter",
          "fast-orchestrator",
          "feature-advertiser",
          "features-capabilities-benefits-advertiser",
          "front-ads-promoter",
          "front-enhancer",
          "front-index-futurizer",
          "front-index-orchestrator",
          "front-index-scheduler",
          "front-maximizer",
          "front-visionary-expander",
          "frontpage-enhancer",
          "frontpage-scheduler",
          "headers-enforcer",
          "home-visionary-expander",
          "homepage-advertiser-scheduler",
          "homepage-enhancer",
          "homepage-updater",
          "homepage-updater-scheduler",
          "homepage_advertiser",
          "hyper-front-index-accelerator",
          "image-optimizer-runner",
          "innovation-lab",
          "innovations-promoter",
          "intelligent-meta-orchestrator",
          "internal-link-graph-runner",
          "knowledge-pack-runner",
          "license-compliance-auditor",
          "link-and-health-scheduler",
          "link-crawler",
          "maintenance-scheduler",
          "marketing-and-features-promo",
          "marketing-scheduler",
          "media-og-and-optimize",
          "metadata-optimizer-runner",
          "netlify-auto-healer-runner",
          "newsroom-auto-publisher",
          "newsroom-runner",
          "og-image-update-runner",
          "orphan-pages-detector",
          "pagespeed-insights-runner",
          "readme-advertiser",
          "repo-knowledge-graph-runner",
          "repo-radar-and-graph",
          "repo-radar-runner",
          "revenue-ideas-lab",
          "roadmap-curator",
          "robots-auditor",
          "schedule-content-index",
          "schedule-homepage",
          "schedule-knowledge-graph",
          "schedule-site-health",
          "security-audit",
          "security-audit-runner",
          "seo-audit-runner",
          "site-404-map-runner",
          "site-crawler",
          "sitemap_runner",
          "stale-content-auditor-runner",
          "todo-scanner-runner",
          "todo-summary-runner",
          "topic-cluster-builder-runner",
          "topics-map-runner",
          "trigger-all-and-commit",
          "ui-enhancer",
          "ultrafast-front-orchestrator",
          "ultrafast-orchestrator",
          "unused-media-scanner"
        ],
        healthCheckInterval: 120000,
        maxFailureThreshold: 2,
        autoRegenerate: true,
        deploymentCheck: true,
        logRotation: true
      },
      logging: {
        logDir: "automation/logs",
        maxLogSize: 10 * 1024 * 1024,
        maxLogFiles: 30
      },
      monitoring: {
        enabled: true,
        interval: 30000,
        alertThreshold: 3,
        autoRestart: true,
        loadBalancing: true
      }
    };
    
    this.ensureLogDirectory();
    this.initializeMonitoring();
    this.startUltimateMonitoring();
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

  async checkPM2UltimateHealth() {
    this.log("🔍 Checking ultimate PM2 process health...");
    
    try {
      const result = await this.runCommand("pm2", ["status"]);
      
      if (result.status !== 0) {
        this.log("❌ PM2 status check failed", "ERROR");
        return false;
      }

      const processes = this.config.pm2.processes;
      let healthyCount = 0;
      let failedProcesses = [];

      for (const processName of processes) {
        try {
          const processResult = await this.runCommand("pm2", ["show", processName]);
          if (processResult.status === 0 && processResult.stdout.includes("online")) {
            healthyCount++;
          } else {
            failedProcesses.push(processName);
          }
        } catch (error) {
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
    this.log("🔄 Attempting to recover failed PM2 processes...");
    
    for (const processName of failedProcesses) {
      try {
        this.log(`🔄 Restarting ${processName}...`);
        
        // Try to restart the process
        const restartResult = await this.runCommand("pm2", ["restart", processName]);
        
        if (restartResult.status === 0) {
          this.log(`✅ Successfully restarted ${processName}`);
        } else {
          // If restart fails, try to start it
          const startResult = await this.runCommand("pm2", ["start", processName]);
          if (startResult.status === 0) {
            this.log(`✅ Successfully started ${processName}`);
          } else {
            this.log(`❌ Failed to start ${processName}`, "ERROR");
          }
        }
      } catch (error) {
        this.log(`❌ Error recovering ${processName}: ${error.message}`, "ERROR");
      }
    }
  }

  async checkGitHubActionsUltimateHealth() {
    this.log("🔍 Checking ultimate GitHub Actions health...");
    
    try {
      // Check if workflow files exist
      const workflows = this.config.githubActions.workflows;
      let existingWorkflows = [];
      let missingWorkflows = [];

      for (const workflow of workflows) {
        if (fs.existsSync(workflow)) {
          existingWorkflows.push(workflow);
        } else {
          missingWorkflows.push(workflow);
        }
      }

      this.log(`📊 GitHub Actions: ${existingWorkflows.length}/${workflows.length} workflows exist`);

      if (missingWorkflows.length > 0) {
        this.log(`⚠️ Missing workflows: ${missingWorkflows.join(", ")}`, "WARN");
        await this.recoverGitHubActionsWorkflows(missingWorkflows);
      }

      // Check backup workflows
      const backupWorkflows = this.config.githubActions.backupWorkflows;
      let existingBackups = [];
      let missingBackups = [];

      for (const backup of backupWorkflows) {
        if (fs.existsSync(backup)) {
          existingBackups.push(backup);
        } else {
          missingBackups.push(backup);
        }
      }

      this.log(`📊 Backup Workflows: ${existingBackups.length}/${backupWorkflows.length} exist`);

      if (missingBackups.length > 0) {
        this.log(`⚠️ Missing backup workflows: ${missingBackups.join(", ")}`, "WARN");
        await this.createBackupWorkflows(missingBackups);
      }

      return existingWorkflows.length === workflows.length && existingBackups.length === backupWorkflows.length;
    } catch (error) {
      this.log(`❌ GitHub Actions health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async recoverGitHubActionsWorkflows(missingWorkflows) {
    this.log("🔄 Attempting to recover missing GitHub Actions workflows...");
    
    for (const workflow of missingWorkflows) {
      try {
        if (workflow.includes("marketing-sync")) {
          await this.createMarketingSyncWorkflow(workflow);
        } else if (workflow.includes("sync-health")) {
          await this.createSyncHealthWorkflow(workflow);
        }
      } catch (error) {
        this.log(`❌ Error recovering workflow ${workflow}: ${error.message}`, "ERROR");
      }
    }
  }

  async createMarketingSyncWorkflow(workflowPath) {
    const workflowContent = `name: Marketing Sync

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

    try {
      fs.writeFileSync(workflowPath, workflowContent);
      this.log(`✅ Created marketing sync workflow: ${workflowPath}`);
    } catch (error) {
      this.log(`❌ Error creating workflow ${workflowPath}: ${error.message}`, "ERROR");
    }
  }

  async createSyncHealthWorkflow(workflowPath) {
    const workflowContent = `name: Sync Health

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
          # Only push if we have local commits not on origin
          AHEAD=\$(git rev-list --left-right --count HEAD...origin/main | awk '{print \$1}')
          if [ "\$AHEAD" != "0" ]; then
            git push origin HEAD:main
          else
            echo "No push needed."
          fi`;

    try {
      fs.writeFileSync(workflowPath, workflowContent);
      this.log(`✅ Created sync health workflow: ${workflowPath}`);
    } catch (error) {
      this.log(`❌ Error creating workflow ${workflowPath}: ${error.message}`, "ERROR");
    }
  }

  async createBackupWorkflows(missingBackups) {
    this.log("🔄 Creating backup workflows...");
    
    for (const backup of missingBackups) {
      try {
        if (backup.includes("marketing-sync-backup")) {
          await this.createMarketingSyncBackupWorkflow(backup);
        } else if (backup.includes("sync-health-backup")) {
          await this.createSyncHealthBackupWorkflow(backup);
        }
      } catch (error) {
        this.log(`❌ Error creating backup workflow ${backup}: ${error.message}`, "ERROR");
      }
    }
  }

  async createMarketingSyncBackupWorkflow(workflowPath) {
    const workflowContent = `name: Marketing Sync Backup

on:
  schedule:
    - cron: '30 */12 * * *'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  run-marketing-sync-backup:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Run marketing-sync backup
        env:
          LINKEDIN_ACCESS_TOKEN: \${{ secrets.LINKEDIN_ACCESS_TOKEN }}
          LINKEDIN_URN: \${{ secrets.LINKEDIN_URN }}
          IG_USER_ID: \${{ secrets.IG_USER_ID }}
          IG_ACCESS_TOKEN: \${{ secrets.IG_ACCESS_TOKEN }}
        run: node automation/marketing-sync.js

      - name: Commit backup report if changed
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          if [ -n "\$(git status --porcelain)" ]; then
            git add -A
            git commit -m "chore(marketing): update marketing-sync backup report"
            git push origin HEAD:main
          else
            echo "No changes to commit."
          fi`;

    try {
      fs.writeFileSync(workflowPath, workflowContent);
      this.log(`✅ Created marketing sync backup workflow: ${workflowPath}`);
    } catch (error) {
      this.log(`❌ Error creating backup workflow ${workflowPath}: ${error.message}`, "ERROR");
    }
  }

  async createSyncHealthBackupWorkflow(workflowPath) {
    const workflowContent = `name: Sync Health Backup

on:
  schedule:
    - cron: '45 */15 * * * *'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  check-sync-backup:
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

      - name: Run pm2-auto-sync backup (safe mode)
        env:
          AUTO_SYNC_STRATEGY: hardreset
          AUTO_SYNC_CLEAN: '0'
        run: node automation/pm2-auto-sync.js || true

      - name: Push backup if repository is ahead
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          # Only push if we have local commits not on origin
          AHEAD=\$(git rev-list --left-right --count HEAD...origin/main | awk '{print \$1}')
          if [ "\$AHEAD" != "0" ]; then
            git push origin HEAD:main
          else
            echo "No push needed."
          fi`;

    try {
      fs.writeFileSync(workflowPath, workflowContent);
      this.log(`✅ Created sync health backup workflow: ${workflowPath}`);
    } catch (error) {
      this.log(`❌ Error creating backup workflow ${workflowPath}: ${error.message}`, "ERROR");
    }
  }

  async checkNetlifyFunctionsUltimateHealth() {
    this.log("🔍 Checking ultimate Netlify Functions health...");
    
    try {
      // Check if manifest file exists
      if (!fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        this.log("❌ Netlify Functions manifest file not found", "ERROR");
        await this.regenerateNetlifyFunctionsManifest();
        return false;
      }

      // Check manifest content
      const manifestContent = JSON.parse(fs.readFileSync(this.config.netlifyFunctions.manifestFile, 'utf8'));
      const expectedFunctions = this.config.netlifyFunctions.functions;
      const existingFunctions = manifestContent.functions || [];
      
      this.log(`📊 Netlify Functions: ${existingFunctions.length}/${expectedFunctions.length} functions in manifest`);

      // Check for missing functions
      const missingFunctions = expectedFunctions.filter(func => !existingFunctions.includes(func));
      
      if (missingFunctions.length > 0) {
        this.log(`⚠️ Missing functions: ${missingFunctions.join(", ")}`, "WARN");
        await this.recoverNetlifyFunctions(missingFunctions);
      }

      return missingFunctions.length === 0;
    } catch (error) {
      this.log(`❌ Netlify Functions health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async regenerateNetlifyFunctionsManifest() {
    this.log("🔄 Regenerating Netlify Functions manifest...");
    
    try {
      const result = await this.runCommand("node", ["scripts/generate-netlify-functions-manifest.cjs"]);
      
      if (result.status === 0) {
        this.log("✅ Successfully regenerated Netlify Functions manifest");
      } else {
        this.log(`❌ Failed to regenerate manifest: ${result.stderr}`, "ERROR");
      }
    } catch (error) {
      this.log(`❌ Error regenerating manifest: ${error.message}`, "ERROR");
    }
  }

  async recoverNetlifyFunctions(missingFunctions) {
    this.log("🔄 Attempting to recover missing Netlify Functions...");
    
    try {
      // Regenerate the manifest to include missing functions
      await this.regenerateNetlifyFunctionsManifest();
      
      // Check if functions directory exists
      const functionsDir = "netlify/functions";
      if (!fs.existsSync(functionsDir)) {
        fs.mkdirSync(functionsDir, { recursive: true });
        this.log("✅ Created Netlify functions directory");
      }
      
      this.log(`✅ Attempted to recover ${missingFunctions.length} missing functions`);
    } catch (error) {
      this.log(`❌ Error recovering functions: ${error.message}`, "ERROR");
    }
  }

  async runUltimateHealthCheck() {
    this.log("🚀 Starting ultimate health check...");
    
    const results = {
      pm2: false,
      githubActions: false,
      netlifyFunctions: false,
      timestamp: new Date().toISOString()
    };

    // Check PM2 health
    results.pm2 = await this.checkPM2UltimateHealth();
    
    // Check GitHub Actions health
    results.githubActions = await this.checkGitHubActionsUltimateHealth();
    
    // Check Netlify Functions health
    results.netlifyFunctions = await this.checkNetlifyFunctionsUltimateHealth();

    // Generate health report
    const healthyServices = Object.values(results).filter(Boolean).length - 1; // -1 for timestamp
    const totalServices = 3;
    
    this.log(`📊 Ultimate Health Report: ${healthyServices}/${totalServices} services healthy`);
    
    if (results.pm2) this.log("✅ PM2: Healthy");
    else this.log("❌ PM2: Unhealthy");
    
    if (results.githubActions) this.log("✅ GitHub Actions: Healthy");
    else this.log("❌ GitHub Actions: Unhealthy");
    
    if (results.netlifyFunctions) this.log("✅ Netlify Functions: Healthy");
    else this.log("❌ Netlify Functions: Unhealthy");

    // Save health report
    this.saveHealthReport(results);
    
    return results;
  }

  saveHealthReport(results) {
    try {
      const reportPath = path.join(this.config.logging.logDir, "ultimate-health-report.json");
      fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
    } catch (error) {
      this.log(`❌ Error saving health report: ${error.message}`, "ERROR");
    }
  }

  initializeMonitoring() {
    this.log("🔧 Initializing ultimate monitoring system...");
    
    // Ensure all required directories exist
    const requiredDirs = [
      this.config.logging.logDir,
      ".github/workflows",
      "netlify/functions"
    ];
    
    for (const dir of requiredDirs) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        this.log(`✅ Created directory: ${dir}`);
      }
    }
  }

  startUltimateMonitoring() {
    this.log("🚀 Starting ultimate monitoring system...");
    
    // Run initial health check
    this.runUltimateHealthCheck();
    
    // Set up continuous monitoring
    setInterval(async () => {
      await this.runUltimateHealthCheck();
    }, this.config.monitoring.interval);
    
    this.log(`✅ Ultimate monitoring started with ${this.config.monitoring.interval}ms interval`);
  }

  async getStatus() {
    return {
      status: "running",
      config: this.config,
      timestamp: new Date().toISOString(),
      logDirectory: this.config.logging.logDir
    };
  }
}

// CLI interface
if (require.main === module) {
  const system = new UltimateRedundancyAutomationSystem();
  
  const command = process.argv[2];
  
  switch (command) {
    case "start":
      console.log("🚀 Ultimate Redundancy Automation System started");
      break;
    case "status":
      console.log(JSON.stringify(system.getStatus(), null, 2));
      break;
    case "health":
      system.runUltimateHealthCheck();
      break;
    case "test":
      console.log("🧪 Running ultimate redundancy tests...");
      system.runUltimateHealthCheck();
      break;
    default:
      console.log("Ultimate Redundancy Automation System");
      console.log("Usage: node ultimate-redundancy-automation-system.cjs [start|status|health|test]");
      break;
  }
}

module.exports = UltimateRedundancyAutomationSystem;