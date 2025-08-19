#!/usr/bin/env node
"use strict";

const { spawnSync, execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

class ComprehensiveRedundancyV2 {
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
          "ecosystem.redundancy.pm2.cjs"
        ],
        criticalProcesses: [
          "zion-auto-sync",
          "zion-auto-sync-cron",
          "redundancy-automation-system",
          "redundancy-health-monitor",
          "redundancy-git-sync",
          "redundancy-build-monitor",
          "master-redundancy-orchestrator",
          "enhanced-pm2-redundancy",
          "enhanced-github-actions-redundancy",
          "enhanced-netlify-functions-redundancy"
        ],
        healthCheckInterval: 30000,
        maxRestartAttempts: 5,
        restartDelay: 5000,
        autoRecovery: true,
        loadBalancing: true
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
        fallbackScripts: [
          "automation/marketing-sync.js",
          "automation/git-sync.cjs",
          "automation/pm2-auto-sync.js"
        ],
        backupTriggers: true,
        workflowValidation: true
      },
      netlifyFunctions: {
        manifestFile: "netlify/functions/functions-manifest.json",
        healthCheckInterval: 120000,
        maxFailureThreshold: 2,
        autoRegenerate: true,
        deploymentCheck: true,
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
        healthCheckInterval: 30000,
        alertThreshold: 0.8,
        autoRecovery: true,
        performanceMetrics: true,
        errorTracking: true
      }
    };
    
    this.status = {
      pm2: { healthy: false, processes: [], lastCheck: null },
      githubActions: { healthy: false, workflows: [], lastCheck: null },
      netlifyFunctions: { healthy: false, functions: [], lastCheck: null },
      overall: { healthy: false, score: 0, lastUpdate: null }
    };
    
    this.logFile = path.join(this.logDir, "comprehensive-redundancy-v2.log");
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
    
    try {
      fs.appendFileSync(this.logFile, logMessage + "\n");
    } catch (error) {
      console.error("Failed to write to log file:", error.message);
    }
  }

  async start() {
    this.log("Starting Comprehensive Redundancy V2 System");
    
    // Start all redundancy systems
    await this.startPM2Redundancy();
    await this.startGitHubActionsRedundancy();
    await this.startNetlifyFunctionsRedundancy();
    
    // Start monitoring
    this.startMonitoring();
    
    this.log("Comprehensive Redundancy V2 System started successfully");
  }

  async startPM2Redundancy() {
    this.log("Starting PM2 Redundancy System");
    
    try {
      // Check if PM2 is installed
      const pm2Check = spawnSync("pm2", ["--version"], { encoding: "utf8" });
      if (pm2Check.status !== 0) {
        this.log("PM2 not found, installing...", "WARN");
        execSync("npm install -g pm2", { stdio: "inherit" });
      }
      
      // Start redundancy processes
      const ecosystemFiles = this.config.pm2.ecosystemFiles;
      for (const file of ecosystemFiles) {
        if (fs.existsSync(file)) {
          try {
            execSync(`pm2 start ${file} --update-env`, { stdio: "inherit" });
            this.log(`Started PM2 ecosystem: ${file}`);
          } catch (error) {
            this.log(`Failed to start ${file}: ${error.message}`, "ERROR");
          }
        }
      }
      
      // Start critical processes if not running
      await this.ensureCriticalProcesses();
      
      this.status.pm2.healthy = true;
      this.log("PM2 Redundancy System started successfully");
    } catch (error) {
      this.log(`Failed to start PM2 Redundancy: ${error.message}`, "ERROR");
      this.status.pm2.healthy = false;
    }
  }

  async startGitHubActionsRedundancy() {
    this.log("Starting GitHub Actions Redundancy System");
    
    try {
      // Validate workflows
      for (const workflow of this.config.githubActions.workflows) {
        if (fs.existsSync(workflow)) {
          try {
            const content = fs.readFileSync(workflow, "utf8");
            if (content.includes("name:") && content.includes("on:")) {
              this.log(`Validated workflow: ${workflow}`);
            } else {
              this.log(`Invalid workflow format: ${workflow}`, "WARN");
            }
          } catch (error) {
            this.log(`Failed to validate ${workflow}: ${error.message}`, "ERROR");
          }
        }
      }
      
      // Start fallback scripts
      for (const script of this.config.githubActions.fallbackScripts) {
        if (fs.existsSync(script)) {
          try {
            // Start as background process
            spawn("node", [script], { 
              detached: true, 
              stdio: "ignore" 
            });
            this.log(`Started fallback script: ${script}`);
          } catch (error) {
            this.log(`Failed to start ${script}: ${error.message}`, "ERROR");
          }
        }
      }
      
      this.status.githubActions.healthy = true;
      this.log("GitHub Actions Redundancy System started successfully");
    } catch (error) {
      this.log(`Failed to start GitHub Actions Redundancy: ${error.message}`, "ERROR");
      this.status.githubActions.healthy = false;
    }
  }

  async startNetlifyFunctionsRedundancy() {
    this.log("Starting Netlify Functions Redundancy System");
    
    try {
      // Check manifest file
      if (fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        const manifest = JSON.parse(fs.readFileSync(this.config.netlifyFunctions.manifestFile, "utf8"));
        this.log(`Found ${manifest.functions.length} Netlify functions`);
        
        // Validate functions
        for (const funcName of this.config.netlifyFunctions.functions) {
          if (manifest.functions.includes(funcName)) {
            this.log(`Validated function: ${funcName}`);
          } else {
            this.log(`Function not found in manifest: ${funcName}`, "WARN");
          }
        }
      }
      
      // Generate functions manifest if needed
      if (this.config.netlifyFunctions.autoRegenerate) {
        try {
          execSync("npm run netlify:manifest", { stdio: "inherit" });
          this.log("Regenerated Netlify functions manifest");
        } catch (error) {
          this.log(`Failed to regenerate manifest: ${error.message}`, "ERROR");
        }
      }
      
      this.status.netlifyFunctions.healthy = true;
      this.log("Netlify Functions Redundancy System started successfully");
    } catch (error) {
      this.log(`Failed to start Netlify Functions Redundancy: ${error.message}`, "ERROR");
      this.status.netlifyFunctions.healthy = false;
    }
  }

  async ensureCriticalProcesses() {
    this.log("Ensuring critical PM2 processes are running");
    
    try {
      const pm2List = execSync("pm2 list --format json", { encoding: "utf8" });
      const processes = JSON.parse(pm2List);
      
      for (const processName of this.config.pm2.criticalProcesses) {
        const process = processes.find(p => p.name === processName);
        if (!process || process.pm2_env.status !== "online") {
          this.log(`Starting critical process: ${processName}`);
          try {
            execSync(`pm2 start ${processName}`, { stdio: "inherit" });
          } catch (error) {
            this.log(`Failed to start ${processName}: ${error.message}`, "ERROR");
          }
        }
      }
    } catch (error) {
      this.log(`Failed to check PM2 processes: ${error.message}`, "ERROR");
    }
  }

  startMonitoring() {
    this.log("Starting monitoring system");
    
    // Health check interval
    setInterval(async () => {
      await this.performHealthCheck();
    }, this.config.monitoring.healthCheckInterval);
    
    // PM2 health check
    setInterval(async () => {
      await this.checkPM2Health();
    }, this.config.pm2.healthCheckInterval);
    
    // GitHub Actions health check
    setInterval(async () => {
      await this.checkGitHubActionsHealth();
    }, this.config.githubActions.healthCheckInterval);
    
    // Netlify Functions health check
    setInterval(async () => {
      await this.checkNetlifyFunctionsHealth();
    }, this.config.netlifyFunctions.healthCheckInterval);
  }

  async performHealthCheck() {
    this.log("Performing comprehensive health check");
    
    try {
      const pm2Health = await this.checkPM2Health();
      const githubHealth = await this.checkGitHubActionsHealth();
      const netlifyHealth = await this.checkNetlifyFunctionsHealth();
      
      // Calculate overall health score
      const scores = [pm2Health.score, githubHealth.score, netlifyHealth.score];
      const overallScore = scores.reduce((a, b) => a + b, 0) / scores.length;
      
      this.status.overall = {
        healthy: overallScore >= this.config.monitoring.alertThreshold,
        score: overallScore,
        lastUpdate: new Date()
      };
      
      this.log(`Overall health score: ${(overallScore * 100).toFixed(2)}%`);
      
      // Auto-recovery if needed
      if (overallScore < this.config.monitoring.alertThreshold && this.config.monitoring.autoRecovery) {
        this.log("Health score below threshold, initiating auto-recovery", "WARN");
        await this.performAutoRecovery();
      }
      
    } catch (error) {
      this.log(`Health check failed: ${error.message}`, "ERROR");
    }
  }

  async checkPM2Health() {
    try {
      const pm2List = execSync("pm2 list --format json", { encoding: "utf8" });
      const processes = JSON.parse(pm2List);
      
      let healthyCount = 0;
      const totalCount = this.config.pm2.criticalProcesses.length;
      
      for (const processName of this.config.pm2.criticalProcesses) {
        const process = processes.find(p => p.name === processName);
        if (process && process.pm2_env.status === "online") {
          healthyCount++;
        }
      }
      
      const healthScore = healthyCount / totalCount;
      this.status.pm2 = {
        healthy: healthScore >= 0.8,
        processes: processes,
        lastCheck: new Date()
      };
      
      this.log(`PM2 Health: ${healthyCount}/${totalCount} processes healthy (${(healthScore * 100).toFixed(2)}%)`);
      
      return { score: healthScore, healthy: this.status.pm2.healthy };
    } catch (error) {
      this.log(`PM2 health check failed: ${error.message}`, "ERROR");
      return { score: 0, healthy: false };
    }
  }

  async checkGitHubActionsHealth(automation) {
    try {
      let healthyCount = 0;
      const totalCount = this.config.githubActions.workflows.length;
      
      for (const workflow of this.config.githubActions.workflows) {
        if (fs.existsSync(workflow)) {
          try {
            const content = fs.readFileSync(workflow, "utf8");
            if (content.includes("name:") && content.includes("on:")) {
              healthyCount++;
            }
          } catch (error) {
            this.log(`Failed to check workflow ${workflow}: ${error.message}`, "ERROR");
          }
        }
      }
      
      const healthScore = healthyCount / totalCount;
      this.status.githubActions = {
        healthy: healthScore >= 0.8,
        workflows: this.config.githubActions.workflows,
        lastCheck: new Date()
      };
      
      this.log(`GitHub Actions Health: ${healthyCount}/${totalCount} workflows healthy (${(healthScore * 100).toFixed(2)}%)`);
      
      return { score: healthScore, healthy: this.status.githubActions.healthy };
    } catch (error) {
      this.log(`GitHub Actions health check failed: ${error.message}`, "ERROR");
      return { score: 0, healthy: false };
    }
  }

  async checkNetlifyFunctionsHealth() {
    try {
      if (!fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        this.log("Netlify functions manifest not found", "WARN");
        return { score: 0, healthy: false };
      }
      
      const manifest = JSON.parse(fs.readFileSync(this.config.netlifyFunctions.manifestFile, "utf8"));
      let healthyCount = 0;
      const totalCount = this.config.netlifyFunctions.functions.length;
      
      for (const funcName of this.config.netlifyFunctions.functions) {
        if (manifest.functions.includes(funcName)) {
          healthyCount++;
        }
      }
      
      const healthScore = healthyCount / totalCount;
      this.status.netlifyFunctions = {
        healthy: healthScore >= 0.8,
        functions: manifest.functions,
        lastCheck: new Date()
      };
      
      this.log(`Netlify Functions Health: ${healthyCount}/${totalCount} functions healthy (${(healthScore * 100).toFixed(2)}%)`);
      
      return { score: healthScore, healthy: this.status.netlifyFunctions.healthy };
    } catch (error) {
      this.log(`Netlify Functions health check failed: ${error.message}`, "ERROR");
      return { score: 0, healthy: false };
    }
  }

  async performAutoRecovery() {
    this.log("Performing auto-recovery procedures");
    
    try {
      // Restart PM2 processes if unhealthy
      if (!this.status.pm2.healthy) {
        this.log("Restarting PM2 processes");
        execSync("pm2 restart all", { stdio: "inherit" });
      }
      
      // Regenerate Netlify functions if unhealthy
      if (!this.status.netlifyFunctions.healthy) {
        this.log("Regenerating Netlify functions manifest");
        execSync("npm run netlify:manifest", { stdio: "inherit" });
      }
      
      // Trigger GitHub Actions if unhealthy
      if (!this.status.githubActions.healthy) {
        this.log("Triggering GitHub Actions fallback");
        for (const script of this.config.githubActions.fallbackScripts) {
          if (fs.existsSync(script)) {
            spawn("node", [script], { detached: true, stdio: "ignore" });
          }
        }
      }
      
      this.log("Auto-recovery completed");
    } catch (error) {
      this.log(`Auto-recovery failed: ${error.message}`, "ERROR");
    }
  }

  getStatus() {
    return this.status;
  }

  async stop() {
    this.log("Stopping Comprehensive Redundancy V2 System");
    
    try {
      // Stop all PM2 processes
      execSync("pm2 stop all", { stdio: "inherit" });
      
      this.log("Comprehensive Redundancy V2 System stopped");
    } catch (error) {
      this.log(`Failed to stop system: ${error.message}`, "ERROR");
    }
  }
}

// CLI interface
if (require.main === module) {
  const system = new ComprehensiveRedundancyV2();
  const command = process.argv[2];
  
  switch (command) {
    case "start":
      system.start();
      break;
    case "stop":
      system.stop();
      break;
    case "status":
      console.log(JSON.stringify(system.getStatus(), null, 2));
      break;
    case "health":
      system.performHealthCheck();
      break;
    default:
      console.log("Usage: node comprehensive-redundancy-v2.cjs [start|stop|status|health]");
      process.exit(1);
  }
}

module.exports = ComprehensiveRedundancyV2;