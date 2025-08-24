#!/usr/bin/env node
"use strict";

const { spawnSync, execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class UltimateRedundancyAutomationSystem {
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
          "ecosystem-redundancy.pm2.cjs"
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
          "pm2-redundancy-monitor"
        ],
        healthCheckInterval: 30000,
        maxRestartAttempts: 5,
        restartDelay: 5000,
        autoRecovery: true,
        backupProcesses: [
          "automation:pm2",
          "automation:pm2:restart",
          "automation:pm2:status"
        ]
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
          "automation/pm2-auto-sync.js",
          "automation/enhanced-git-sync-orchestrator.cjs"
        ],
        backupTriggers: [
          "gh:trigger",
          "gh:auto-heal"
        ]
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
        ],
        backupScripts: [
          "scripts/generate-netlify-functions-manifest.cjs",
          "netlify:manifest",
          "netlify:trigger"
        ]
      },
      npmScripts: {
        redundancy: [
          "redundancy:start",
          "redundancy:stop", 
          "redundancy:restart",
          "redundancy:status",
          "redundancy:logs",
          "redundancy:check",
          "redundancy:monitor",
          "redundancy:pm2",
          "redundancy:github",
          "redundancy:netlify"
        ],
        comprehensive: [
          "redundancy:comprehensive:start",
          "redundancy:comprehensive:status",
          "redundancy:comprehensive:restart",
          "redundancy:comprehensive:stop",
          "redundancy:comprehensive:pm2",
          "redundancy:comprehensive:github",
          "redundancy:comprehensive:netlify"
        ],
        automation: [
          "automation:all",
          "automation:status",
          "automation:report",
          "automation:git-sync",
          "automation:improvement",
          "automation:guardian",
          "automation:cloud",
          "automation:discover"
        ],
        build: [
          "build",
          "build:heal",
          "build:smart",
          "build:auto-fix",
          "build:monitor",
          "build:guardian",
          "build:orchestrator"
        ]
      }
    };
    
    this.status = {
      pm2: { healthy: false, processes: [], lastCheck: null },
      githubActions: { healthy: false, workflows: [], lastCheck: null },
      netlifyFunctions: { healthy: false, functions: [], lastCheck: null },
      npmScripts: { healthy: false, scripts: [], lastCheck: null }
    };
    
    this.monitoring = false;
    this.recoveryMode = false;
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
    
    const logFile = path.join(this.logDir, `ultimate-redundancy-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logMessage + "\n");
  }

  async checkPM2Health() {
    try {
      this.log("Checking PM2 health...");
      
      // Check if PM2 is running
      const pm2Status = spawnSync("pm2", ["status"], { encoding: "utf8" });
      if (pm2Status.status !== 0) {
        this.log("PM2 not running, attempting to start...", "WARN");
        this.startPM2();
        return false;
      }

      // Check specific processes
      const processes = [];
      for (const processName of this.config.pm2.processes) {
        try {
          const processStatus = spawnSync("pm2", ["show", processName], { encoding: "utf8" });
          if (processStatus.status === 0) {
            const isOnline = processStatus.stdout.includes("online");
            processes.push({ name: processName, status: isOnline ? "online" : "stopped" });
          } else {
            processes.push({ name: processName, status: "not_found" });
          }
        } catch (error) {
          processes.push({ name: processName, status: "error" });
        }
      }

      this.status.pm2.processes = processes;
      this.status.pm2.lastCheck = new Date();
      
      const healthyProcesses = processes.filter(p => p.status === "online").length;
      const totalProcesses = processes.length;
      
      this.status.pm2.healthy = healthyProcesses === totalProcesses;
      
      this.log(`PM2 Health: ${healthyProcesses}/${totalProcesses} processes healthy`);
      
      return this.status.pm2.healthy;
    } catch (error) {
      this.log(`PM2 health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkGitHubActionsHealth() {
    try {
      this.log("Checking GitHub Actions health...");
      
      // Check if workflow files exist
      const workflows = [];
      for (const workflowPath of this.config.githubActions.workflows) {
        try {
          if (fs.existsSync(workflowPath)) {
            const content = fs.readFileSync(workflowPath, "utf8");
            const isValid = content.includes("name:") && content.includes("on:");
            workflows.push({ 
              path: workflowPath, 
              status: isValid ? "valid" : "invalid",
              lastModified: fs.statSync(workflowPath).mtime
            });
          } else {
            workflows.push({ path: workflowPath, status: "missing", lastModified: null });
          }
        } catch (error) {
          workflows.push({ path: workflowPath, status: "error", lastModified: null });
        }
      }

      this.status.githubActions.workflows = workflows;
      this.status.githubActions.lastCheck = new Date();
      
      const validWorkflows = workflows.filter(w => w.status === "valid").length;
      const totalWorkflows = workflows.length;
      
      this.status.githubActions.healthy = validWorkflows === totalWorkflows;
      
      this.log(`GitHub Actions Health: ${validWorkflows}/${totalWorkflows} workflows valid`);
      
      return this.status.githubActions.healthy;
    } catch (error) {
      this.log(`GitHub Actions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkNetlifyFunctionsHealth() {
    try {
      this.log("Checking Netlify Functions health...");
      
      // Check manifest file
      if (!fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        this.log("Netlify functions manifest not found, regenerating...", "WARN");
        this.regenerateNetlifyFunctionsManifest();
        return false;
      }

      const manifest = JSON.parse(fs.readFileSync(this.config.netlifyFunctions.manifestFile, "utf8"));
      const functions = [];
      
      for (const functionName of this.config.netlifyFunctions.functions) {
        const functionPath = path.join("netlify/functions", functionName);
        try {
          if (fs.existsSync(functionPath) || fs.existsSync(functionPath + ".js")) {
            functions.push({ name: functionName, status: "exists" });
          } else {
            functions.push({ name: functionName, status: "missing" });
          }
        } catch (error) {
          functions.push({ name: functionName, status: "error" });
        }
      }

      this.status.netlifyFunctions.functions = functions;
      this.status.netlifyFunctions.lastCheck = new Date();
      
      const existingFunctions = functions.filter(f => f.status === "exists").length;
      const totalFunctions = functions.length;
      
      this.status.netlifyFunctions.healthy = existingFunctions === totalFunctions;
      
      this.log(`Netlify Functions Health: ${existingFunctions}/${totalFunctions} functions exist`);
      
      return this.status.netlifyFunctions.healthy;
    } catch (error) {
      this.log(`Netlify Functions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkNPMScriptsHealth() {
    try {
      this.log("Checking NPM scripts health...");
      
      const scripts = [];
      
      // Check redundancy scripts
      for (const script of this.config.npmScripts.redundancy) {
        try {
          const result = spawnSync("npm", ["run", script, "--silent"], { 
            encoding: "utf8", 
            timeout: 10000 
          });
          scripts.push({ 
            name: script, 
            status: result.status === 0 ? "available" : "failed",
            exitCode: result.status
          });
        } catch (error) {
          scripts.push({ name: script, status: "error", exitCode: null });
        }
      }

      this.status.npmScripts.scripts = scripts;
      this.status.npmScripts.lastCheck = new Date();
      
      const availableScripts = scripts.filter(s => s.status === "available").length;
      const totalScripts = scripts.length;
      
      this.status.npmScripts.healthy = availableScripts === totalScripts;
      
      this.log(`NPM Scripts Health: ${availableScripts}/${totalScripts} scripts available`);
      
      return this.status.npmScripts.healthy;
    } catch (error) {
      this.log(`NPM scripts health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performHealthCheck() {
    this.log("Performing comprehensive health check...");
    
    const pm2Health = await this.checkPM2Health();
    const githubHealth = await this.checkGitHubActionsHealth();
    const netlifyHealth = await this.checkNetlifyFunctionsHealth();
    const npmHealth = await this.checkNPMScriptsHealth();
    
    const overallHealth = pm2Health && githubHealth && netlifyHealth && npmHealth;
    
    this.log(`Overall System Health: ${overallHealth ? "HEALTHY" : "UNHEALTHY"}`);
    
    if (!overallHealth) {
      this.log("System unhealthy, initiating recovery procedures...", "WARN");
      await this.initiateRecovery();
    }
    
    return overallHealth;
  }

  async initiateRecovery() {
    if (this.recoveryMode) {
      this.log("Recovery already in progress, skipping...", "WARN");
      return;
    }
    
    this.recoveryMode = true;
    this.log("Initiating system recovery...", "WARN");
    
    try {
      // PM2 Recovery
      if (!this.status.pm2.healthy) {
        this.log("Recovering PM2 processes...");
        await this.recoverPM2();
      }
      
      // GitHub Actions Recovery
      if (!this.status.githubActions.healthy) {
        this.log("Recovering GitHub Actions...");
        await this.recoverGitHubActions();
      }
      
      // Netlify Functions Recovery
      if (!this.status.netlifyFunctions.healthy) {
        this.log("Recovering Netlify Functions...");
        await this.recoverNetlifyFunctions();
      }
      
      // NPM Scripts Recovery
      if (!this.status.npmScripts.healthy) {
        this.log("Recovering NPM Scripts...");
        await this.recoverNPMScripts();
      }
      
      this.log("Recovery procedures completed");
    } catch (error) {
      this.log(`Recovery failed: ${error.message}`, "ERROR");
    } finally {
      this.recoveryMode = false;
    }
  }

  async recoverPM2() {
    try {
      this.log("Starting PM2 recovery...");
      
      // Stop all processes
      spawnSync("pm2", ["stop", "all"], { stdio: "inherit" });
      
      // Delete all processes
      spawnSync("pm2", ["delete", "all"], { stdio: "inherit" });
      
      // Start redundancy system
      spawnSync("npm", ["run", "redundancy:comprehensive:start"], { stdio: "inherit" });
      
      // Wait for processes to start
      await new Promise(resolve => setTimeout(resolve, 10000));
      
      this.log("PM2 recovery completed");
    } catch (error) {
      this.log(`PM2 recovery failed: ${error.message}`, "ERROR");
    }
  }

  async recoverGitHubActions() {
    try {
      this.log("Starting GitHub Actions recovery...");
      
      // Run backup scripts
      for (const script of this.config.githubActions.fallbackScripts) {
        try {
          if (fs.existsSync(script)) {
            this.log(`Running fallback script: ${script}`);
            spawnSync("node", [script], { stdio: "inherit" });
          }
        } catch (error) {
          this.log(`Fallback script ${script} failed: ${error.message}`, "WARN");
        }
      }
      
      // Run backup triggers
      for (const trigger of this.config.githubActions.backupTriggers) {
        try {
          this.log(`Running backup trigger: ${trigger}`);
          spawnSync("npm", ["run", trigger], { stdio: "inherit" });
        } catch (error) {
          this.log(`Backup trigger ${trigger} failed: ${error.message}`, "WARN");
        }
      }
      
      this.log("GitHub Actions recovery completed");
    } catch (error) {
      this.log(`GitHub Actions recovery failed: ${error.message}`, "ERROR");
    }
  }

  async recoverNetlifyFunctions() {
    try {
      this.log("Starting Netlify Functions recovery...");
      
      // Regenerate manifest
      this.regenerateNetlifyFunctionsManifest();
      
      // Run backup scripts
      for (const script of this.config.netlifyFunctions.backupScripts) {
        try {
          if (script.startsWith("netlify:")) {
            this.log(`Running backup script: ${script}`);
            spawnSync("npm", ["run", script], { stdio: "inherit" });
          } else if (fs.existsSync(script)) {
            this.log(`Running backup script: ${script}`);
            spawnSync("node", [script], { stdio: "inherit" });
          }
        } catch (error) {
          this.log(`Backup script ${script} failed: ${error.message}`, "WARN");
        }
      }
      
      this.log("Netlify Functions recovery completed");
    } catch (error) {
      this.log(`Netlify Functions recovery failed: ${error.message}`, "ERROR");
    }
  }

  async recoverNPMScripts() {
    try {
      this.log("Starting NPM Scripts recovery...");
      
      // Run comprehensive redundancy start
      spawnSync("npm", ["run", "redundancy:comprehensive:start"], { stdio: "inherit" });
      
      // Wait for processes to start
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      this.log("NPM Scripts recovery completed");
    } catch (error) {
      this.log(`NPM Scripts recovery failed: ${error.message}`, "ERROR");
    }
  }

  regenerateNetlifyFunctionsManifest() {
    try {
      this.log("Regenerating Netlify Functions manifest...");
      
      if (fs.existsSync("scripts/generate-netlify-functions-manifest.cjs")) {
        spawnSync("node", ["scripts/generate-netlify-functions-manifest.cjs"], { stdio: "inherit" });
      } else {
        this.log("Netlify functions manifest generator not found", "WARN");
      }
    } catch (error) {
      this.log(`Failed to regenerate manifest: ${error.message}`, "ERROR");
    }
  }

  startPM2() {
    try {
      this.log("Starting PM2...");
      spawnSync("npm", ["run", "automation:pm2"], { stdio: "inherit" });
    } catch (error) {
      this.log(`Failed to start PM2: ${error.message}`, "ERROR");
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("Monitoring already active", "WARN");
      return;
    }
    
    this.monitoring = true;
    this.log("Starting ultimate redundancy monitoring...");
    
    // Initial health check
    await this.performHealthCheck();
    
    // Set up monitoring intervals
    this.pm2Monitor = setInterval(async () => {
      if (!this.recoveryMode) {
        await this.checkPM2Health();
      }
    }, this.config.pm2.healthCheckInterval);
    
    this.githubMonitor = setInterval(async () => {
      if (!this.recoveryMode) {
        await this.checkGitHubActionsHealth();
      }
    }, this.config.githubActions.healthCheckInterval);
    
    this.netlifyMonitor = setInterval(async () => {
      if (!this.recoveryMode) {
        await this.checkNetlifyFunctionsHealth();
      }
    }, this.config.netlifyFunctions.healthCheckInterval);
    
    this.npmMonitor = setInterval(async () => {
      if (!this.recoveryMode) {
        await this.checkNPMScriptsHealth();
      }
    }, 300000); // Every 5 minutes
    
    this.overallMonitor = setInterval(async () => {
      if (!this.recoveryMode) {
        await this.performHealthCheck();
      }
    }, 600000); // Every 10 minutes
    
    this.log("Ultimate redundancy monitoring started");
  }

  stopMonitoring() {
    if (!this.monitoring) {
      this.log("Monitoring not active", "WARN");
      return;
    }
    
    this.monitoring = false;
    
    if (this.pm2Monitor) clearInterval(this.pm2Monitor);
    if (this.githubMonitor) clearInterval(this.githubMonitor);
    if (this.netlifyMonitor) clearInterval(this.netlifyMonitor);
    if (this.npmMonitor) clearInterval(this.npmMonitor);
    if (this.overallMonitor) clearInterval(this.overallMonitor);
    
    this.log("Ultimate redundancy monitoring stopped");
  }

  getStatus() {
    return {
      timestamp: new Date().toISOString(),
      monitoring: this.monitoring,
      recoveryMode: this.recoveryMode,
      overallHealth: this.status.pm2.healthy && this.status.githubActions.healthy && 
                    this.status.netlifyFunctions.healthy && this.status.npmScripts.healthy,
      pm2: this.status.pm2,
      githubActions: this.status.githubActions,
      netlifyFunctions: this.status.netlifyFunctions,
      npmScripts: this.status.npmScripts
    };
  }

  async runCommand(command, args = []) {
    return new Promise((resolve, reject) => {
      const child = spawn(command, args, { 
        stdio: "inherit",
        shell: true 
      });
      
      child.on("close", (code) => {
        if (code === 0) {
          resolve(code);
        } else {
          reject(new Error(`Command failed with exit code ${code}`));
        }
      });
      
      child.on("error", (error) => {
        reject(error);
      });
    });
  }
}

// CLI Interface
if (require.main === module) {
  const orchestrator = new UltimateRedundancyAutomationSystem();
  const command = process.argv[2] || "start";
  
  switch (command) {
    case "start":
      orchestrator.startMonitoring();
      break;
    case "stop":
      orchestrator.stopMonitoring();
      break;
    case "status":
      console.log(JSON.stringify(orchestrator.getStatus(), null, 2));
      break;
    case "health":
      orchestrator.performHealthCheck();
      break;
    case "recover":
      orchestrator.initiateRecovery();
      break;
    case "pm2":
      orchestrator.checkPM2Health();
      break;
    case "github":
      orchestrator.checkGitHubActionsHealth();
      break;
    case "netlify":
      orchestrator.checkNetlifyFunctionsHealth();
      break;
    case "npm":
      orchestrator.checkNPMScriptsHealth();
      break;
    default:
      console.log("Usage: node ultimate-redundancy-automation-system.cjs [start|stop|status|health|recover|pm2|github|netlify|npm]");
      process.exit(1);
  }
}

module.exports = UltimateRedundancyAutomationSystem;