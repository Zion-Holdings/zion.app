#!/usr/bin/env node
"use strict";

const { spawnSync, execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class UltimateRedundancyV2 {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "ultimate-redundancy-v2.log");
    this.ensureLogDir();
    
    this.config = {
      // All PM2 Ecosystems and Processes
      pm2Ecosystems: [
        "ecosystem.pm2.cjs",
        "ecosystem.redundancy.cjs", 
        "ecosystem.comprehensive-redundancy.cjs",
        "ecosystem.ultimate-redundancy.pm2.cjs",
        "ecosystem.fast-ads.local.cjs",
        "ecosystem.cron.local.cjs"
      ],
      
      pm2ProcessGroups: {
        core: ["zion-auto-sync", "zion-auto-sync-cron"],
        redundancy: [
          "redundancy-automation-system",
          "redundancy-health-monitor",
          "redundancy-git-sync", 
          "redundancy-build-monitor",
          "pm2-redundancy-monitor",
          "comprehensive-redundancy-orchestrator"
        ],
        enhanced: [
          "enhanced-pm2-redundancy-manager",
          "enhanced-github-actions-redundancy-manager",
          "enhanced-netlify-functions-redundancy-manager"
        ],
        comprehensive: [
          "comprehensive-pm2-redundancy",
          "comprehensive-github-actions-redundancy",
          "comprehensive-netlify-functions-redundancy"
        ],
        ultimate: [
          "ultimate-pm2-redundancy-manager",
          "ultimate-github-redundancy-manager",
          "ultimate-netlify-redundancy-manager",
          "ultimate-redundancy-master"
        ]
      },
      
      // All GitHub Actions Workflows
      githubWorkflows: [
        "marketing-sync.yml",
        "sync-health.yml",
        "marketing-sync-backup.yml",
        "sync-health-backup.yml"
      ],
      
      // All Netlify Functions
      netlifyFunctions: [
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
        "front-maximizer"
      ],
      
      // Monitoring intervals
      intervals: {
        pm2Health: 30000,        // 30 seconds
        githubActions: 60000,    // 1 minute
        netlifyFunctions: 120000, // 2 minutes
        masterHealth: 60000      // 1 minute
      }
    };
    
    this.status = {
      pm2: { healthy: false, processes: [], lastCheck: null },
      githubActions: { healthy: false, workflows: [], lastCheck: null },
      netlifyFunctions: { healthy: false, functions: [], lastCheck: null },
      overall: { healthy: false, score: 0, lastCheck: null }
    };
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    
    console.log(logEntry);
    
    try {
      fs.appendFileSync(this.logFile, logEntry + "\n");
    } catch (error) {
      console.error("Failed to write to log file:", error.message);
    }
  }

  async checkPM2Health() {
    try {
      this.log("🔍 Checking PM2 health...");
      
      // Check PM2 daemon
      const pm2Status = spawnSync("pm2", ["status"], { encoding: "utf8" });
      if (pm2Status.status !== 0) {
        this.log("❌ PM2 daemon not running, attempting to start...", "ERROR");
        execSync("pm2 start", { stdio: "inherit" });
        return false;
      }

      // Check all ecosystems
      const healthyEcosystems = [];
      for (const ecosystem of this.config.pm2Ecosystems) {
        if (fs.existsSync(ecosystem)) {
          try {
            const result = spawnSync("pm2", ["start", ecosystem, "--dry-run"], { encoding: "utf8" });
            if (result.status === 0) {
              healthyEcosystems.push(ecosystem);
            }
          } catch (error) {
            this.log(`⚠️ Ecosystem ${ecosystem} has issues: ${error.message}`, "WARN");
          }
        }
      }

      // Check process groups
      const healthyProcesses = [];
      for (const [groupName, processes] of Object.entries(this.config.pm2ProcessGroups)) {
        for (const processName of processes) {
          try {
            const result = spawnSync("pm2", ["jlist"], { encoding: "utf8" });
            if (result.status === 0) {
              const processes = JSON.parse(result.stdout);
              const found = processes.find(p => p.name === processName);
              if (found && found.pm2_env.status === "online") {
                healthyProcesses.push(processName);
              }
            }
          } catch (error) {
            // Process not found or not running
          }
        }
      }

      this.status.pm2 = {
        healthy: healthyProcesses.length > 0,
        processes: healthyProcesses,
        lastCheck: new Date()
      };

      this.log(`✅ PM2 Health Check: ${healthyProcesses.length} processes healthy`);
      return this.status.pm2.healthy;
    } catch (error) {
      this.log(`❌ PM2 Health Check Failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkGitHubActionsHealth() {
    try {
      this.log("🔍 Checking GitHub Actions health...");
      
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      if (!fs.existsSync(workflowsDir)) {
        this.log("❌ GitHub workflows directory not found", "ERROR");
        return false;
      }

      const healthyWorkflows = [];
      for (const workflow of this.config.githubWorkflows) {
        const workflowPath = path.join(workflowsDir, workflow);
        if (fs.existsSync(workflowPath)) {
          try {
            const content = fs.readFileSync(workflowPath, "utf8");
            if (content.includes("name:") && content.includes("on:")) {
              healthyWorkflows.push(workflow);
            }
          } catch (error) {
            this.log(`⚠️ Workflow ${workflow} has issues: ${error.message}`, "WARN");
          }
        }
      }

      // Check backup workflows
      const backupDir = path.join(workflowsDir, "backups");
      if (fs.existsSync(backupDir)) {
        const backupFiles = fs.readdirSync(backupDir);
        for (const backup of backupFiles) {
          if (backup.endsWith(".yml") || backup.endsWith(".yaml")) {
            healthyWorkflows.push(`backups/${backup}`);
          }
        }
      }

      this.status.githubActions = {
        healthy: healthyWorkflows.length > 0,
        workflows: healthyWorkflows,
        lastCheck: new Date()
      };

      this.log(`✅ GitHub Actions Health Check: ${healthyWorkflows.length} workflows healthy`);
      return this.status.githubActions.healthy;
    } catch (error) {
      this.log(`❌ GitHub Actions Health Check Failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkNetlifyFunctionsHealth() {
    try {
      this.log("🔍 Checking Netlify Functions health...");
      
      const functionsDir = path.join(this.workspace, "netlify/functions");
      if (!fs.existsSync(functionsDir)) {
        this.log("⚠️ Netlify functions directory not found, creating...", "WARN");
        fs.mkdirSync(functionsDir, { recursive: true });
      }

      const healthyFunctions = [];
      for (const funcName of this.config.netlifyFunctions) {
        const funcDir = path.join(functionsDir, funcName);
        if (fs.existsSync(funcDir)) {
          const indexFile = path.join(funcDir, "index.js");
          if (fs.existsSync(indexFile)) {
            try {
              const content = fs.readFileSync(indexFile, "utf8");
              if (content.includes("exports.handler") || content.includes("module.exports")) {
                healthyFunctions.push(funcName);
              }
            } catch (error) {
              this.log(`⚠️ Function ${funcName} has issues: ${error.message}`, "WARN");
            }
          }
        }
      }

      // Check manifest
      const manifestPath = path.join(this.workspace, "public/reports/netlify/functions-manifest.json");
      if (fs.existsSync(manifestPath)) {
        try {
          const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
          if (manifest.functions && manifest.functions.length > 0) {
            healthyFunctions.push(...manifest.functions.map(f => f.name));
          }
        } catch (error) {
          this.log(`⚠️ Functions manifest has issues: ${error.message}`, "WARN");
        }
      }

      this.status.netlifyFunctions = {
        healthy: healthyFunctions.length > 0,
        functions: [...new Set(healthyFunctions)], // Remove duplicates
        lastCheck: new Date()
      };

      this.log(`✅ Netlify Functions Health Check: ${this.status.netlifyFunctions.functions.length} functions healthy`);
      return this.status.netlifyFunctions.healthy;
    } catch (error) {
      this.log(`❌ Netlify Functions Health Check Failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async calculateOverallHealth() {
    const checks = [
      this.status.pm2.healthy ? 1 : 0,
      this.status.githubActions.healthy ? 1 : 0,
      this.status.netlifyFunctions.healthy ? 1 : 0
    ];
    
    const score = (checks.reduce((a, b) => a + b, 0) / checks.length) * 100;
    
    this.status.overall = {
      healthy: score >= 80,
      score: Math.round(score),
      lastCheck: new Date()
    };

    this.log(`📊 Overall Health Score: ${this.status.overall.score}% (${this.status.overall.healthy ? 'HEALTHY' : 'UNHEALTHY'})`);
    return this.status.overall;
  }

  async startPM2Redundancy() {
    try {
      this.log("🚀 Starting PM2 Redundancy System...");
      
      // Start core redundancy processes
      const coreProcesses = [
        "automation/pm2-redundancy-manager.cjs",
        "automation/comprehensive-redundancy-orchestrator.cjs",
        "automation/ultimate-redundancy-master.cjs"
      ];

      for (const process of coreProcesses) {
        if (fs.existsSync(process)) {
          try {
            execSync(`pm2 start ${process} --name redundancy-${path.basename(process, '.cjs')}`, { stdio: "inherit" });
            this.log(`✅ Started ${process}`);
          } catch (error) {
            this.log(`⚠️ Failed to start ${process}: ${error.message}`, "WARN");
          }
        }
      }

      // Start ultimate redundancy ecosystem
      if (fs.existsSync("ecosystem.ultimate-redundancy.pm2.cjs")) {
        try {
          execSync("pm2 start ecosystem.ultimate-redundancy.pm2.cjs --update-env", { stdio: "inherit" });
          this.log("✅ Started ultimate redundancy ecosystem");
        } catch (error) {
          this.log(`⚠️ Failed to start ultimate redundancy ecosystem: ${error.message}`, "WARN");
        }
      }

      this.log("✅ PM2 Redundancy System started");
      return true;
    } catch (error) {
      this.log(`❌ Failed to start PM2 Redundancy System: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startGitHubActionsRedundancy() {
    try {
      this.log("🚀 Starting GitHub Actions Redundancy System...");
      
      // Create backup workflows if they don't exist
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      const backupDir = path.join(workflowsDir, "backups");
      
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }

      // Create enhanced backup workflows
      const enhancedWorkflows = [
        {
          name: "marketing-sync-enhanced.yml",
          content: this.generateEnhancedMarketingSyncWorkflow()
        },
        {
          name: "sync-health-enhanced.yml", 
          content: this.generateEnhancedSyncHealthWorkflow()
        }
      ];

      for (const workflow of enhancedWorkflows) {
        const workflowPath = path.join(backupDir, workflow.name);
        if (!fs.existsSync(workflowPath)) {
          fs.writeFileSync(workflowPath, workflow.content);
          this.log(`✅ Created enhanced workflow: ${workflow.name}`);
        }
      }

      // Start GitHub Actions redundancy manager
      if (fs.existsSync("automation/github-actions-redundancy-manager.cjs")) {
        try {
          execSync("pm2 start automation/github-actions-redundancy-manager.cjs --name github-actions-redundancy", { stdio: "inherit" });
          this.log("✅ Started GitHub Actions redundancy manager");
        } catch (error) {
          this.log(`⚠️ Failed to start GitHub Actions redundancy manager: ${error.message}`, "WARN");
        }
      }

      this.log("✅ GitHub Actions Redundancy System started");
      return true;
    } catch (error) {
      this.log(`❌ Failed to start GitHub Actions Redundancy System: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startNetlifyFunctionsRedundancy() {
    try {
      this.log("🚀 Starting Netlify Functions Redundancy System...");
      
      // Generate enhanced functions manifest
      if (fs.existsSync("scripts/generate-netlify-functions-manifest.cjs")) {
        try {
          execSync("node scripts/generate-netlify-functions-manifest.cjs", { stdio: "inherit" });
          this.log("✅ Generated enhanced Netlify functions manifest");
        } catch (error) {
          this.log(`⚠️ Failed to generate functions manifest: ${error.message}`, "WARN");
        }
      }

      // Start Netlify functions redundancy manager
      if (fs.existsSync("automation/netlify-functions-redundancy-manager.cjs")) {
        try {
          execSync("pm2 start automation/netlify-functions-redundancy-manager.cjs --name netlify-functions-redundancy", { stdio: "inherit" });
          this.log("✅ Started Netlify functions redundancy manager");
        } catch (error) {
          this.log(`⚠️ Failed to start Netlify functions redundancy manager: ${error.message}`, "WARN");
        }
      }

      this.log("✅ Netlify Functions Redundancy System started");
      return true;
    } catch (error) {
      this.log(`❌ Failed to start Netlify Functions Redundancy System: ${error.message}`, "ERROR");
      return false;
    }
  }

  generateEnhancedMarketingSyncWorkflow() {
    return `name: Marketing Sync Enhanced

on:
  schedule:
    - cron: '0 */6 * * *'  # Every 6 hours instead of 12
  workflow_dispatch:
  repository_dispatch:
    types: [marketing-sync-trigger]

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
            git commit -m "chore(marketing): update marketing-sync report [skip ci]"
            git push origin HEAD:main
          else
            echo "No changes to commit."
          fi

      - name: Trigger backup workflow
        if: always()
        run: |
          gh workflow run marketing-sync-backup.yml --ref main
`;
  }

  generateEnhancedSyncHealthWorkflow() {
    return `name: Sync Health Enhanced

on:
  schedule:
    - cron: '*/10 * * * *'  # Every 10 minutes instead of 15
  workflow_dispatch:
  repository_dispatch:
    types: [sync-health-trigger]

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
          fi

      - name: Trigger backup workflow
        if: always()
        run: |
          gh workflow run sync-health-backup.yml --ref main
`;
  }

  async runFullHealthCheck() {
    this.log("🏥 Starting Full Health Check...");
    
    const results = await Promise.all([
      this.checkPM2Health(),
      this.checkGitHubActionsHealth(),
      this.checkNetlifyFunctionsHealth()
    ]);

    await this.calculateOverallHealth();
    
    this.log("🏥 Full Health Check Completed");
    return this.status.overall.healthy;
  }

  async startAllRedundancySystems() {
    this.log("🚀 Starting All Redundancy Systems...");
    
    const results = await Promise.all([
      this.startPM2Redundancy(),
      this.startGitHubActionsRedundancy(),
      this.startNetlifyFunctionsRedundancy()
    ]);

    const successCount = results.filter(r => r).length;
    this.log(`✅ Started ${successCount}/3 redundancy systems`);
    
    return successCount >= 2; // At least 2 out of 3 should succeed
  }

  async monitor() {
    this.log("📡 Starting Continuous Monitoring...");
    
    const monitorInterval = setInterval(async () => {
      try {
        await this.runFullHealthCheck();
        
        if (!this.status.overall.healthy) {
          this.log("⚠️ System health degraded, attempting recovery...", "WARN");
          await this.startAllRedundancySystems();
        }
        
        // Save status to file
        const statusFile = path.join(this.logDir, "ultimate-redundancy-v2-status.json");
        fs.writeFileSync(statusFile, JSON.stringify(this.status, null, 2));
        
      } catch (error) {
        this.log(`❌ Monitoring error: ${error.message}`, "ERROR");
      }
    }, this.config.intervals.masterHealth);

    // Keep the process running
    process.on('SIGINT', () => {
      this.log("🛑 Stopping monitoring...");
      clearInterval(monitorInterval);
      process.exit(0);
    });

    return monitorInterval;
  }

  async run() {
    const command = process.argv[2];
    
    switch (command) {
      case "start":
        await this.startAllRedundancySystems();
        break;
      case "health":
        await this.runFullHealthCheck();
        break;
      case "monitor":
        await this.monitor();
        break;
      case "status":
        console.log(JSON.stringify(this.status, null, 2));
        break;
      default:
        this.log("Usage: node ultimate-redundancy-v2.cjs [start|health|monitor|status]");
        break;
    }
  }
}

// Run the script
if (require.main === module) {
  const redundancy = new UltimateRedundancyV2();
  redundancy.run().catch(error => {
    console.error("Fatal error:", error);
    process.exit(1);
  });
}

module.exports = { UltimateRedundancyV2 };