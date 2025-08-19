#!/usr/bin/env node
"use strict";

const { spawnSync, execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class UltimateRedundancyV2Master {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "ultimate-redundancy-v2-master.log");
    this.statusFile = path.join(this.workspace, "automation/ultimate-redundancy-v2-status.json");
    this.ensureLogDir();
    
    this.config = {
      // All PM2 Ecosystems with full coverage
      pm2Ecosystems: [
        "ecosystem.pm2.cjs",
        "ecosystem.redundancy.cjs", 
        "ecosystem.comprehensive-redundancy.cjs",
        "ecosystem.ultimate-redundancy.pm2.cjs",
        "ecosystem.fast-ads.local.cjs",
        "ecosystem.cron.local.cjs",
        "ecosystem.ultimate-redundancy.pm2.cjs"
      ],
      
      // All PM2 Process Groups with comprehensive coverage
      pm2ProcessGroups: {
        core: ["zion-auto-sync", "zion-auto-sync-cron"],
        redundancy: [
          "redundancy-automation-system",
          "redundancy-health-monitor",
          "redundancy-git-sync", 
          "redundancy-build-monitor",
          "pm2-redundancy-monitor",
          "comprehensive-redundancy-orchestrator",
          "ultimate-pm2-redundancy-manager",
          "ultimate-github-redundancy-manager",
          "ultimate-netlify-redundancy-manager",
          "ultimate-redundancy-master",
          "enhanced-pm2-redundancy-manager",
          "enhanced-github-actions-redundancy-manager",
          "enhanced-netlify-functions-redundancy-manager",
          "redundancy-health-monitor",
          "redundancy-git-sync",
          "redundancy-build-monitor",
          "continuous-build-monitor",
          "build-failure-recovery",
          "master-build-orchestrator",
          "enhanced-git-sync-orchestrator",
          "comprehensive-monitoring-dashboard"
        ],
        fastads: ["fast-ads-orchestrator", "fast-ads-scheduler"],
        cron: ["cron-automation-system", "cron-scheduler"],
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
      
      // All GitHub Actions Workflows with full coverage
      githubWorkflows: [
        "marketing-sync.yml",
        "sync-health.yml",
        "marketing-sync-backup.yml",
        "sync-health-backup.yml"
      ],
      
      // All Netlify Functions from manifest with full coverage
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
      
      // Enhanced monitoring intervals
      monitoring: {
        pm2HealthCheck: 30000,      // 30 seconds
        githubActionsCheck: 60000,   // 1 minute
        netlifyFunctionsCheck: 120000, // 2 minutes
        overallHealthCheck: 60000,   // 1 minute
        recoveryAttempts: 5,
        maxFailureThreshold: 3
      }
    };
    
    this.status = this.loadStatus();
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

  loadStatus() {
    try {
      if (fs.existsSync(this.statusFile)) {
        return JSON.parse(fs.readFileSync(this.statusFile, "utf8"));
      }
    } catch (error) {
      this.log(`Failed to load status file: ${error.message}`, "ERROR");
    }
    
    return {
      lastCheck: null,
      pm2Status: {},
      githubActionsStatus: {},
      netlifyFunctionsStatus: {},
      overallHealth: "unknown",
      lastRecovery: null,
      totalRecoveries: 0,
      failures: []
    };
  }

  saveStatus() {
    try {
      this.status.lastCheck = new Date().toISOString();
      fs.writeFileSync(this.statusFile, JSON.stringify(this.status, null, 2));
    } catch (error) {
      this.log(`Failed to save status: ${error.message}`, "ERROR");
    }
  }

  async checkPM2Health() {
    this.log("Checking PM2 health...");
    
    try {
      // Check PM2 daemon status
      const pm2Status = spawnSync("pm2", ["status"], { encoding: "utf8" });
      
      if (pm2Status.status !== 0) {
        this.log("PM2 daemon not running, attempting to start...", "WARN");
        this.startPM2Daemon();
        return false;
      }

      // Check all ecosystem files
      for (const ecosystem of this.config.pm2Ecosystems) {
        if (fs.existsSync(ecosystem)) {
          this.log(`Checking ecosystem: ${ecosystem}`);
          this.checkEcosystemHealth(ecosystem);
        }
      }

      // Check all process groups
      for (const [groupName, processes] of Object.entries(this.config.pm2ProcessGroups)) {
        this.log(`Checking process group: ${groupName}`);
        for (const processName of processes) {
          this.checkProcessHealth(processName);
        }
      }

      return true;
    } catch (error) {
      this.log(`PM2 health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  startPM2Daemon() {
    try {
      this.log("Starting PM2 daemon...");
      spawnSync("pm2", ["startup"], { stdio: "inherit" });
      spawnSync("pm2", ["resurrect"], { stdio: "inherit" });
      this.log("PM2 daemon started successfully");
    } catch (error) {
      this.log(`Failed to start PM2 daemon: ${error.message}`, "ERROR");
    }
  }

  checkEcosystemHealth(ecosystem) {
    try {
      const ecosystemPath = path.join(this.workspace, ecosystem);
      if (!fs.existsSync(ecosystemPath)) {
        this.log(`Ecosystem file not found: ${ecosystem}`, "WARN");
        return;
      }

      // Check if ecosystem is running
      const status = spawnSync("pm2", ["status"], { encoding: "utf8" });
      if (status.status === 0 && status.stdout.includes(ecosystem.replace(".cjs", ""))) {
        this.log(`Ecosystem ${ecosystem} is running`);
      } else {
        this.log(`Ecosystem ${ecosystem} not running, starting...`, "WARN");
        this.startEcosystem(ecosystem);
      }
    } catch (error) {
      this.log(`Failed to check ecosystem ${ecosystem}: ${error.message}`, "ERROR");
    }
  }

  startEcosystem(ecosystem) {
    try {
      this.log(`Starting ecosystem: ${ecosystem}`);
      spawnSync("pm2", ["start", ecosystem, "--update-env"], { 
        stdio: "inherit",
        cwd: this.workspace 
      });
      this.log(`Ecosystem ${ecosystem} started successfully`);
    } catch (error) {
      this.log(`Failed to start ecosystem ${ecosystem}: ${error.message}`, "ERROR");
    }
  }

  checkProcessHealth(processName) {
    try {
      const status = spawnSync("pm2", ["jlist"], { encoding: "utf8" });
      
      if (status.status === 0) {
        const processes = JSON.parse(status.stdout);
        const process = processes.find(p => p.name === processName);
        
        if (process) {
          if (process.pm2_env.status === "online") {
            this.log(`Process ${processName} is healthy`);
            this.status.pm2Status[processName] = "healthy";
          } else {
            this.log(`Process ${processName} is not healthy (${process.pm2_env.status})`, "WARN");
            this.status.pm2Status[processName] = "unhealthy";
            this.recoverProcess(processName);
          }
        } else {
          this.log(`Process ${processName} not found, attempting to start...`, "WARN");
          this.startProcess(processName);
        }
      }
    } catch (error) {
      this.log(`Failed to check process ${processName}: ${error.message}`, "ERROR");
    }
  }

  startProcess(processName) {
    try {
      this.log(`Starting process: ${processName}`);
      
      // Try to start from appropriate ecosystem
      for (const ecosystem of this.config.pm2Ecosystems) {
        if (fs.existsSync(ecosystem)) {
          spawnSync("pm2", ["start", ecosystem, "--only", processName, "--update-env"], {
            stdio: "inherit",
            cwd: this.workspace
          });
          break;
        }
      }
      
      this.log(`Process ${processName} start attempted`);
    } catch (error) {
      this.log(`Failed to start process ${processName}: ${error.message}`, "ERROR");
    }
  }

  recoverProcess(processName) {
    try {
      this.log(`Attempting to recover process: ${processName}`);
      
      // Restart the process
      spawnSync("pm2", ["restart", processName], { stdio: "inherit" });
      
      // Wait a moment and check status
      setTimeout(() => {
        this.checkProcessHealth(processName);
      }, 5000);
      
      this.status.totalRecoveries++;
      this.status.lastRecovery = new Date().toISOString();
      
    } catch (error) {
      this.log(`Failed to recover process ${processName}: ${error.message}`, "ERROR");
    }
  }

  async checkGitHubActionsHealth() {
    this.log("Checking GitHub Actions health...");
    
    try {
      // Check if workflows exist and are valid
      for (const workflow of this.config.githubWorkflows) {
        const workflowPath = path.join(this.workspace, ".github/workflows", workflow);
        
        if (fs.existsSync(workflowPath)) {
          this.log(`Workflow ${workflow} exists`);
          this.status.githubActionsStatus[workflow] = "exists";
          
          // Validate workflow syntax
          this.validateWorkflow(workflowPath);
        } else {
          this.log(`Workflow ${workflow} not found`, "WARN");
          this.status.githubActionsStatus[workflow] = "missing";
        }
      }

      // Check for backup workflows
      const backupWorkflows = this.config.githubWorkflows.filter(w => w.includes("backup"));
      for (const backup of backupWorkflows) {
        if (this.status.githubActionsStatus[backup] === "missing") {
          this.log(`Backup workflow ${backup} missing, creating...`, "WARN");
          this.createBackupWorkflow(backup);
        }
      }

      return true;
    } catch (error) {
      this.log(`GitHub Actions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  validateWorkflow(workflowPath) {
    try {
      const content = fs.readFileSync(workflowPath, "utf8");
      
      // Basic YAML validation
      if (content.includes("name:") && content.includes("on:") && content.includes("jobs:")) {
        this.log(`Workflow ${path.basename(workflowPath)} syntax appears valid`);
      } else {
        this.log(`Workflow ${path.basename(workflowPath)} syntax may be invalid`, "WARN");
      }
    } catch (error) {
      this.log(`Failed to validate workflow ${workflowPath}: ${error.message}`, "ERROR");
    }
  }

  createBackupWorkflow(workflowName) {
    try {
      const originalName = workflowName.replace("-backup.yml", ".yml");
      const originalPath = path.join(this.workspace, ".github/workflows", originalName);
      const backupPath = path.join(this.workspace, ".github/workflows", workflowName);
      
      if (fs.existsSync(originalPath)) {
        const content = fs.readFileSync(originalPath, "utf8");
        fs.writeFileSync(backupPath, content);
        this.log(`Backup workflow ${workflowName} created successfully`);
        this.status.githubActionsStatus[workflowName] = "created";
      }
    } catch (error) {
      this.log(`Failed to create backup workflow ${workflowName}: ${error.message}`, "ERROR");
    }
  }

  async checkNetlifyFunctionsHealth() {
    this.log("Checking Netlify Functions health...");
    
    try {
      const manifestPath = path.join(this.workspace, "netlify/functions/functions-manifest.json");
      
      if (fs.existsSync(manifestPath)) {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
        const functions = manifest.functions || [];
        
        this.log(`Found ${functions.length} Netlify functions in manifest`);
        
        // Check each function
        for (const functionName of this.config.netlifyFunctions) {
          if (functions.includes(functionName)) {
            this.log(`Function ${functionName} exists in manifest`);
            this.status.netlifyFunctionsStatus[functionName] = "exists";
          } else {
            this.log(`Function ${functionName} missing from manifest`, "WARN");
            this.status.netlifyFunctionsStatus[functionName] = "missing";
          }
        }
        
        // Check for missing functions in manifest
        const missingInManifest = this.config.netlifyFunctions.filter(f => 
          !functions.includes(f)
        );
        
        if (missingInManifest.length > 0) {
          this.log(`Functions missing from manifest: ${missingInManifest.join(", ")}`, "WARN");
          this.regenerateFunctionsManifest();
        }
      } else {
        this.log("Netlify functions manifest not found, regenerating...", "WARN");
        this.regenerateFunctionsManifest();
      }

      return true;
    } catch (error) {
      this.log(`Netlify Functions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  regenerateFunctionsManifest() {
    try {
      this.log("Regenerating Netlify functions manifest...");
      
      // Run the manifest generation script
      const result = spawnSync("node", ["scripts/generate-netlify-functions-manifest.cjs"], {
        stdio: "inherit",
        cwd: this.workspace
      });
      
      if (result.status === 0) {
        this.log("Netlify functions manifest regenerated successfully");
      } else {
        this.log("Failed to regenerate Netlify functions manifest", "ERROR");
      }
    } catch (error) {
      this.log(`Failed to regenerate functions manifest: ${error.message}`, "ERROR");
    }
  }

  async checkOverallHealth() {
    this.log("Checking overall system health...");
    
    try {
      const pm2Health = await this.checkPM2Health();
      const githubHealth = await this.checkGitHubActionsHealth();
      const netlifyHealth = await this.checkNetlifyFunctionsHealth();
      
      // Calculate health score
      let healthScore = 0;
      let totalChecks = 0;
      
      if (pm2Health) {
        const pm2Score = this.calculatePM2HealthScore();
        healthScore += pm2Score;
        totalChecks++;
      }
      
      if (githubHealth) {
        const githubScore = this.calculateGitHubHealthScore();
        healthScore += githubScore;
        totalChecks++;
      }
      
      if (netlifyHealth) {
        const netlifyScore = this.calculateNetlifyHealthScore();
        healthScore += netlifyScore;
        totalChecks++;
      }
      
      const overallScore = totalChecks > 0 ? healthScore / totalChecks : 0;
      
      if (overallScore >= 90) {
        this.status.overallHealth = "excellent";
      } else if (overallScore >= 75) {
        this.status.overallHealth = "good";
      } else if (overallScore >= 60) {
        this.status.overallHealth = "fair";
      } else {
        this.status.overallHealth = "poor";
      }
      
      this.log(`Overall health score: ${overallScore.toFixed(1)}% (${this.status.overallHealth})`);
      
      // Trigger recovery if health is poor
      if (this.status.overallHealth === "poor") {
        this.log("System health is poor, triggering recovery procedures...", "WARN");
        this.triggerRecoveryProcedures();
      }
      
      return this.status.overallHealth;
    } catch (error) {
      this.log(`Overall health check failed: ${error.message}`, "ERROR");
      return "unknown";
    }
  }

  calculatePM2HealthScore() {
    const processes = Object.values(this.status.pm2Status);
    const healthy = processes.filter(p => p === "healthy").length;
    const total = processes.length;
    
    return total > 0 ? (healthy / total) * 100 : 100;
  }

  calculateGitHubHealthScore() {
    const workflows = Object.values(this.status.githubActionsStatus);
    const healthy = workflows.filter(w => w === "exists" || w === "created").length;
    const total = workflows.length;
    
    return total > 0 ? (healthy / total) * 100 : 100;
  }

  calculateNetlifyHealthScore() {
    const functions = Object.values(this.status.netlifyFunctionsStatus);
    const healthy = functions.filter(f => f === "exists").length;
    const total = functions.length;
    
    return total > 0 ? (healthy / total) * 100 : 100;
  }

  triggerRecoveryProcedures() {
    try {
      this.log("Triggering recovery procedures...");
      
      // Restart all PM2 processes
      spawnSync("pm2", ["restart", "all"], { stdio: "inherit" });
      
      // Regenerate Netlify functions manifest
      this.regenerateFunctionsManifest();
      
      // Force git sync
      this.forceGitSync();
      
      this.log("Recovery procedures completed");
    } catch (error) {
      this.log(`Recovery procedures failed: ${error.message}`, "ERROR");
    }
  }

  forceGitSync() {
    try {
      this.log("Forcing git sync...");
      
      // Pull latest changes
      spawnSync("git", ["pull", "origin", "main"], { 
        stdio: "inherit",
        cwd: this.workspace 
      });
      
      // Reset any local changes
      spawnSync("git", ["reset", "--hard", "origin/main"], { 
        stdio: "inherit",
        cwd: this.workspace 
      });
      
      this.log("Git sync completed");
    } catch (error) {
      this.log(`Git sync failed: ${error.message}`, "ERROR");
    }
  }

  async startMonitoring() {
    this.log("Starting Ultimate Redundancy V2 monitoring...");
    
    // Initial health check
    await this.checkOverallHealth();
    
    // Set up continuous monitoring
    setInterval(async () => {
      await this.checkOverallHealth();
      this.saveStatus();
    }, this.config.monitoring.overallHealthCheck);
    
    // PM2 specific monitoring
    setInterval(async () => {
      await this.checkPM2Health();
    }, this.config.monitoring.pm2HealthCheck);
    
    // GitHub Actions monitoring
    setInterval(async () => {
      await this.checkGitHubActionsHealth();
    }, this.config.monitoring.githubActionsCheck);
    
    // Netlify Functions monitoring
    setInterval(async () => {
      await this.checkNetlifyFunctionsHealth();
    }, this.config.monitoring.netlifyFunctionsCheck);
    
    this.log("Monitoring started successfully");
  }

  async stopMonitoring() {
    this.log("Stopping Ultimate Redundancy V2 monitoring...");
    // Clear all intervals
    process.exit(0);
  }

  getStatus() {
    return {
      ...this.status,
      config: {
        pm2Ecosystems: this.config.pm2Ecosystems.length,
        pm2ProcessGroups: Object.keys(this.config.pm2ProcessGroups).length,
        githubWorkflows: this.config.githubWorkflows.length,
        netlifyFunctions: this.config.netlifyFunctions.length
      }
    };
  }

  async runCommand(command, args = []) {
    switch (command) {
      case "start":
        await this.startMonitoring();
        break;
      case "stop":
        await this.stopMonitoring();
        break;
      case "check":
        await this.checkOverallHealth();
        this.saveStatus();
        break;
      case "status":
        console.log(JSON.stringify(this.getStatus(), null, 2));
        break;
      case "recover":
        this.triggerRecoveryProcedures();
        break;
      case "pm2":
        await this.checkPM2Health();
        break;
      case "github":
        await this.checkGitHubActionsHealth();
        break;
      case "netlify":
        await this.checkNetlifyFunctionsHealth();
        break;
      default:
        console.log("Available commands: start, stop, check, status, recover, pm2, github, netlify");
        break;
    }
  }
}

// CLI interface
if (require.main === module) {
  const master = new UltimateRedundancyV2Master();
  const command = process.argv[2] || "check";
  
  master.runCommand(command).catch(error => {
    console.error("Error:", error.message);
    process.exit(1);
  });
}

module.exports = UltimateRedundancyV2Master;