#!/usr/bin/env node
"use strict";

const { spawnSync, execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class UltimateRedundancyV2System {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.ensureLogDirectory();
    
    this.config = {
      pm2: {
        ecosystemFiles: [
          "ecosystem.pm2.cjs",
          "ecosystem.redundancy.cjs", 
          "ecosystem.comprehensive-redundancy.cjs",
          "ecosystem-redundancy.pm2.cjs",
          "ecosystem.ultimate-redundancy.pm2.cjs",
          "ecosystem.ultimate-redundancy.cjs"
        ],
        processes: [
          "zion-auto-sync",
          "zion-auto-sync-cron",
          "redundancy-automation-system",
          "redundancy-health-monitor",
          "redundancy-git-sync",
          "redundancy-build-monitor",
          "comprehensive-redundancy-orchestrator",
          "enhanced-pm2-redundancy",
          "enhanced-github-actions-redundancy",
          "enhanced-netlify-functions-redundancy",
          "ultimate-pm2-redundancy-manager",
          "ultimate-github-redundancy-manager",
          "ultimate-netlify-redundancy-manager",
          "ultimate-redundancy-master",
          "redundancy-health-monitor",
          "redundancy-git-sync",
          "redundancy-build-monitor",
          "continuous-build-monitor",
          "build-failure-recovery",
          "master-build-orchestrator",
          "enhanced-git-sync-orchestrator",
          "comprehensive-monitoring-dashboard"
        ],
        healthCheckInterval: 30000,
        maxRestartAttempts: 5,
        restartDelay: 5000,
        autoRecovery: true,
        logRotation: true,
        loadBalancing: true,
        performanceMonitoring: true
      },
      githubActions: {
        workflows: [
          ".github/workflows/marketing-sync.yml",
          ".github/workflows/sync-health.yml"
        ],
        backupWorkflows: [
          ".github/workflows/backups/marketing-sync.yml.backup",
          ".github/workflows/backups/sync-health.yml.backup"
        ],
        healthCheckInterval: 60000,
        maxFailureThreshold: 3,
        autoTrigger: true,
        fallbackScripts: [
          "automation/marketing-sync.js",
          "automation/git-sync.cjs",
          "automation/pm2-auto-sync.js",
          "automation/github-actions-redundancy.cjs",
          "automation/enhanced-github-actions-redundancy.cjs"
        ],
        backupWorkflows: true,
        workflowValidation: true
      },
      netlifyFunctions: {
        manifestFile: "netlify/functions/functions-manifest.json",
        healthCheckInterval: 120000,
        maxFailureThreshold: 2,
        autoRegenerate: true,
        deploymentCheck: true,
        functionValidation: true,
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
        ]
      },
      monitoring: {
        dashboardPort: 3001,
        metricsCollection: true,
        alertEnabled: true,
        healthScoreThreshold: 80,
        monitoringInterval: 60000,
        autoHealing: true
      }
    };
    
    this.status = {
      pm2: { healthy: false, processes: [], lastCheck: null },
      githubActions: { healthy: false, workflows: [], lastCheck: null },
      netlifyFunctions: { healthy: false, functions: [], lastCheck: null },
      overall: { healthy: false, score: 0, lastUpdate: null }
    };
    
    this.logFile = path.join(this.logDir, "ultimate-redundancy-v2.log");
    this.healthFile = path.join(this.logDir, "ultimate-redundancy-v2-health.json");
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    fs.appendFileSync(this.logFile, logMessage + "\n");
  }

  async start() {
    this.log("Starting Ultimate Redundancy V2 System...");
    
    try {
      // Start all redundancy managers
      await this.startPM2Redundancy();
      await this.startGitHubActionsRedundancy();
      await this.startNetlifyFunctionsRedundancy();
      
      // Start monitoring
      this.startMonitoring();
      
      this.log("Ultimate Redundancy V2 System started successfully");
      return true;
    } catch (error) {
      this.log(`Failed to start Ultimate Redundancy V2 System: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startPM2Redundancy() {
    this.log("Starting PM2 Redundancy Manager...");
    
    try {
      // Check if PM2 is installed
      const pm2Check = spawnSync("pm2", ["--version"], { stdio: "pipe" });
      if (pm2Check.status !== 0) {
        throw new Error("PM2 is not installed");
      }

      // Start the ultimate redundancy ecosystem
      const startResult = spawnSync("pm2", ["start", "ecosystem.ultimate-redundancy.pm2.cjs", "--update-env"], {
        stdio: "pipe",
        cwd: this.workspace
      });

      if (startResult.status === 0) {
        this.log("PM2 Redundancy Manager started successfully");
        this.status.pm2.healthy = true;
      } else {
        throw new Error(`Failed to start PM2: ${startResult.stderr?.toString()}`);
      }
    } catch (error) {
      this.log(`PM2 Redundancy Manager failed: ${error.message}`, "ERROR");
      this.status.pm2.healthy = false;
      throw error;
    }
  }

  async startGitHubActionsRedundancy() {
    this.log("Starting GitHub Actions Redundancy Manager...");
    
    try {
      // Check GitHub Actions workflows
      const workflows = this.config.githubActions.workflows;
      const validWorkflows = [];
      
      for (const workflow of workflows) {
        if (fs.existsSync(workflow)) {
          validWorkflows.push(workflow);
        }
      }
      
      if (validWorkflows.length === 0) {
        throw new Error("No valid GitHub Actions workflows found");
      }
      
      // Start GitHub Actions redundancy manager
      const managerProcess = spawn("node", ["automation/github-actions-redundancy-manager.cjs"], {
        stdio: "pipe",
        cwd: this.workspace
      });
      
      this.status.githubActions.healthy = true;
      this.log("GitHub Actions Redundancy Manager started successfully");
    } catch (error) {
      this.log(`GitHub Actions Redundancy Manager failed: ${error.message}`, "ERROR");
      this.status.githubActions.healthy = false;
      throw error;
    }
  }

  async startNetlifyFunctionsRedundancy() {
    this.log("Starting Netlify Functions Redundancy Manager...");
    
    try {
      // Check Netlify functions manifest
      if (!fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        throw new Error("Netlify functions manifest not found");
      }
      
      // Start Netlify functions redundancy manager
      const managerProcess = spawn("node", ["automation/netlify-functions-redundancy-manager.cjs"], {
        stdio: "pipe",
        cwd: this.workspace
      });
      
      this.status.netlifyFunctions.healthy = true;
      this.log("Netlify Functions Redundancy Manager started successfully");
    } catch (error) {
      this.log(`Netlify Functions Redundancy Manager failed: ${error.message}`, "ERROR");
      this.status.netlifyFunctions.healthy = false;
      throw error;
    }
  }

  startMonitoring() {
    this.log("Starting monitoring system...");
    
    // Health check interval
    setInterval(() => {
      this.performHealthCheck();
    }, this.config.monitoring.monitoringInterval);
    
    // Status update interval
    setInterval(() => {
      this.updateStatus();
    }, 30000);
    
    this.log("Monitoring system started");
  }

  async performHealthCheck() {
    this.log("Performing health check...");
    
    try {
      // Check PM2 health
      await this.checkPM2Health();
      
      // Check GitHub Actions health
      await this.checkGitHubActionsHealth();
      
      // Check Netlify Functions health
      await this.checkNetlifyFunctionsHealth();
      
      // Update overall health
      this.updateOverallHealth();
      
      // Save health status
      this.saveHealthStatus();
      
    } catch (error) {
      this.log(`Health check failed: ${error.message}`, "ERROR");
    }
  }

  async checkPM2Health() {
    try {
      // Use pm2 jlist to get JSON output for better parsing
      const pm2Jlist = spawnSync("pm2", ["jlist"], { stdio: "pipe" });
      if (pm2Jlist.status === 0) {
        const output = pm2Jlist.stdout.toString();
        let processes = [];
        
        try {
          processes = JSON.parse(output);
        } catch (parseError) {
          this.log(`Failed to parse PM2 JSON output: ${parseError.message}`, "WARN");
          // Fallback to simple process count check
          const pm2List = spawnSync("pm2", ["list"], { stdio: "pipe" });
          if (pm2List.status === 0) {
            const listOutput = pm2List.stdout.toString();
            const onlineCount = (listOutput.match(/online/g) || []).length;
            processes = [{ status: onlineCount > 0 ? "online" : "stopped" }];
          }
        }
        
        // Extract process information
        const processInfo = processes.map(proc => ({
          id: proc.pm_id || proc.pid || "unknown",
          name: proc.name || "unknown",
          mode: proc.pm2_env?.exec_mode || "unknown",
          status: proc.pm2_env?.status || proc.status || "unknown",
          cpu: proc.monit?.cpu || "0",
          memory: proc.monit?.memory || "0"
        }));
        
        this.status.pm2.processes = processInfo;
        this.status.pm2.healthy = processInfo.some(p => p.status === "online");
        this.status.pm2.lastCheck = new Date().toISOString();
      }
    } catch (error) {
      this.log(`PM2 health check failed: ${error.message}`, "ERROR");
      this.status.pm2.healthy = false;
    }
  }

  async checkGitHubActionsHealth() {
    try {
      const workflows = this.config.githubActions.workflows;
      const validWorkflows = workflows.filter(w => fs.existsSync(w));
      
      this.status.githubActions.workflows = validWorkflows;
      this.status.githubActions.healthy = validWorkflows.length > 0;
      this.status.githubActions.lastCheck = new Date().toISOString();
    } catch (error) {
      this.log(`GitHub Actions health check failed: ${error.message}`, "ERROR");
      this.status.githubActions.healthy = false;
    }
  }

  async checkNetlifyFunctionsHealth() {
    try {
      if (fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        const manifest = JSON.parse(fs.readFileSync(this.config.netlifyFunctions.manifestFile, "utf8"));
        this.status.netlifyFunctions.functions = manifest.functions || [];
        this.status.netlifyFunctions.healthy = this.status.netlifyFunctions.functions.length > 0;
        this.status.netlifyFunctions.lastCheck = new Date().toISOString();
      } else {
        this.status.netlifyFunctions.healthy = false;
      }
    } catch (error) {
      this.log(`Netlify Functions health check failed: ${error.message}`, "ERROR");
      this.status.netlifyFunctions.healthy = false;
    }
  }

  updateOverallHealth() {
    const scores = [
      this.status.pm2.healthy ? 100 : 0,
      this.status.githubActions.healthy ? 100 : 0,
      this.status.netlifyFunctions.healthy ? 100 : 0
    ];
    
    const averageScore = scores.reduce((a, b) => a + b, 0) / scores.length;
    this.status.overall.score = Math.round(averageScore);
    this.status.overall.healthy = averageScore >= this.config.monitoring.healthScoreThreshold;
    this.status.overall.lastUpdate = new Date().toISOString();
  }

  saveHealthStatus() {
    try {
      fs.writeFileSync(this.healthFile, JSON.stringify(this.status, null, 2));
    } catch (error) {
      this.log(`Failed to save health status: ${error.message}`, "ERROR");
    }
  }

  updateStatus() {
    this.log(`Status Update - PM2: ${this.status.pm2.healthy ? 'Healthy' : 'Unhealthy'}, GitHub: ${this.status.githubActions.healthy ? 'Healthy' : 'Unhealthy'}, Netlify: ${this.status.netlifyFunctions.healthy ? 'Healthy' : 'Unhealthy'}, Overall Score: ${this.status.overall.score}%`);
  }

  async stop() {
    this.log("Stopping Ultimate Redundancy V2 System...");
    
    try {
      // Stop PM2 processes
      spawnSync("pm2", ["stop", "ecosystem.ultimate-redundancy.pm2.cjs"], { stdio: "pipe" });
      
      this.log("Ultimate Redundancy V2 System stopped successfully");
      return true;
    } catch (error) {
      this.log(`Failed to stop Ultimate Redundancy V2 System: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restart() {
    this.log("Restarting Ultimate Redundancy V2 System...");
    
    try {
      await this.stop();
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.start();
      
      this.log("Ultimate Redundancy V2 System restarted successfully");
      return true;
    } catch (error) {
      this.log(`Failed to restart Ultimate Redundancy V2 System: ${error.message}`, "ERROR");
      return false;
    }
  }

  getStatus() {
    return this.status;
  }

  async autoRecovery() {
    this.log("Starting auto-recovery process...");
    
    try {
      if (!this.status.pm2.healthy) {
        this.log("Attempting PM2 recovery...");
        await this.startPM2Redundancy();
      }
      
      if (!this.status.githubActions.healthy) {
        this.log("Attempting GitHub Actions recovery...");
        await this.startGitHubActionsRedundancy();
      }
      
      if (!this.status.netlifyFunctions.healthy) {
        this.log("Attempting Netlify Functions recovery...");
        await this.startNetlifyFunctionsRedundancy();
      }
      
      this.log("Auto-recovery process completed");
      return true;
    } catch (error) {
      this.log(`Auto-recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }
}

// CLI interface
if (require.main === module) {
  const system = new UltimateRedundancyV2System();
  const command = process.argv[2] || "start";
  
  switch (command) {
    case "start":
      system.start().then(success => {
        if (success) {
          console.log("Ultimate Redundancy V2 System started successfully");
          process.exit(0);
        } else {
          console.error("Failed to start Ultimate Redundancy V2 System");
          process.exit(1);
        }
      });
      break;
      
    case "stop":
      system.stop().then(success => {
        if (success) {
          console.log("Ultimate Redundancy V2 System stopped successfully");
          process.exit(0);
        } else {
          console.error("Failed to stop Ultimate Redundancy V2 System");
          process.exit(1);
        }
      });
      break;
      
    case "restart":
      system.restart().then(success => {
        if (success) {
          console.log("Ultimate Redundancy V2 System restarted successfully");
          process.exit(0);
        } else {
          console.error("Failed to restart Ultimate Redundancy V2 System");
          process.exit(1);
        }
      });
      break;
      
    case "status":
      console.log(JSON.stringify(system.getStatus(), null, 2));
      break;
      
    case "health":
      system.performHealthCheck().then(() => {
        console.log(JSON.stringify(system.getStatus(), null, 2));
      });
      break;
      
    case "recovery":
      system.autoRecovery().then(success => {
        if (success) {
          console.log("Auto-recovery completed successfully");
          process.exit(0);
        } else {
          console.error("Auto-recovery failed");
          process.exit(1);
        }
      });
      break;
      
    default:
      console.log("Usage: node ultimate-redundancy-v2-system.cjs [start|stop|restart|status|health|recovery]");
      process.exit(1);
  }
}

module.exports = UltimateRedundancyV2System;