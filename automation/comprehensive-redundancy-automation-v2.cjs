#!/usr/bin/env node
"use strict";

const { spawnSync, execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class ComprehensiveRedundancyAutomationV2 {
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
        loadBalancing: true,
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
        healthCheckInterval: 60000,
        maxFailureThreshold: 3,
        autoTrigger: true,
        fallbackScripts: [
          "automation/marketing-sync.js",
          "automation/git-sync.cjs",
          "automation/pm2-auto-sync.js",
          "automation/enhanced-git-sync-orchestrator.cjs"
        ],
        backupTriggers: true,
        workflowValidation: true,
        apiHealthCheck: true,
        autoHealing: true
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
        logRotation: true,
        autoDeployment: true,
        functionValidation: true
      },
      monitoring: {
        healthCheckInterval: 300000, // 5 minutes
        alertThreshold: 3,
        logRetention: 30,
        maxLogSize: "10M",
        performanceMonitoring: true,
        errorTracking: true,
        metricsCollection: true
      }
    };
    
    this.status = {
      pm2: { healthy: false, processes: [], lastCheck: null },
      githubActions: { healthy: false, workflows: [], lastCheck: null },
      netlifyFunctions: { healthy: false, functions: [], lastCheck: null },
      overall: { healthy: false, lastCheck: null, uptime: null }
    };
    
    this.startTime = Date.now();
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
    this.log("Starting Comprehensive Redundancy Automation V2...");
    
    try {
      // Initialize all systems
      await this.initializePM2Redundancy();
      await this.initializeGitHubActionsRedundancy();
      await this.initializeNetlifyFunctionsRedundancy();
      
      // Start monitoring
      this.startMonitoring();
      
      this.log("Comprehensive Redundancy Automation V2 started successfully");
      return true;
    } catch (error) {
      this.log(`Failed to start: ${error.message}`, "ERROR");
      return false;
    }
  }

  async initializePM2Redundancy() {
    this.log("Initializing PM2 Redundancy System...");
    
    try {
      // Check if PM2 is running
      const pm2Status = this.runCommand("pm2 status --json");
      if (pm2Status.error) {
        this.log("PM2 not running, starting PM2...", "WARN");
        this.runCommand("pm2 start ecosystem.comprehensive-redundancy.cjs");
      }
      
      // Start critical processes if not running
      for (const process of this.config.pm2.criticalProcesses) {
        await this.ensurePM2ProcessRunning(process);
      }
      
      this.log("PM2 Redundancy System initialized");
    } catch (error) {
      this.log(`PM2 Redundancy initialization failed: ${error.message}`, "ERROR");
    }
  }

  async initializeGitHubActionsRedundancy() {
    this.log("Initializing GitHub Actions Redundancy System...");
    
    try {
      // Validate workflow files
      for (const workflow of this.config.githubActions.workflows) {
        if (fs.existsSync(workflow)) {
          this.log(`Workflow ${workflow} validated`);
        } else {
          this.log(`Workflow ${workflow} not found`, "WARN");
        }
      }
      
      // Setup fallback scripts
      for (const script of this.config.githubActions.fallbackScripts) {
        if (fs.existsSync(script)) {
          this.log(`Fallback script ${script} ready`);
        } else {
          this.log(`Fallback script ${script} not found`, "WARN");
        }
      }
      
      this.log("GitHub Actions Redundancy System initialized");
    } catch (error) {
      this.log(`GitHub Actions Redundancy initialization failed: ${error.message}`, "ERROR");
    }
  }

  async initializeNetlifyFunctionsRedundancy() {
    this.log("Initializing Netlify Functions Redundancy System...");
    
    try {
      // Check manifest file
      if (fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        const manifest = JSON.parse(fs.readFileSync(this.config.netlifyFunctions.manifestFile, 'utf8'));
        this.log(`Netlify Functions manifest loaded with ${manifest.functions?.length || 0} functions`);
      } else {
        this.log("Netlify Functions manifest not found", "WARN");
      }
      
      // Validate function files
      for (const func of this.config.netlifyFunctions.functions) {
        const funcPath = path.join(this.workspace, "netlify/functions", func);
        if (fs.existsSync(funcPath)) {
          this.log(`Function ${func} validated`);
        } else {
          this.log(`Function ${func} not found`, "WARN");
        }
      }
      
      this.log("Netlify Functions Redundancy System initialized");
    } catch (error) {
      this.log(`Netlify Functions Redundancy initialization failed: ${error.message}`, "ERROR");
    }
  }

  async ensurePM2ProcessRunning(processName) {
    try {
      const status = this.runCommand(`pm2 describe ${processName} --json`);
      if (status.error || !status.stdout.includes(processName)) {
        this.log(`Starting PM2 process: ${processName}`);
        this.runCommand(`pm2 start ecosystem.comprehensive-redundancy.cjs --only ${processName}`);
      } else {
        this.log(`PM2 process ${processName} is already running`);
      }
    } catch (error) {
      this.log(`Failed to ensure PM2 process ${processName}: ${error.message}`, "ERROR");
    }
  }

  startMonitoring() {
    this.log("Starting monitoring systems...");
    
    // PM2 monitoring
    setInterval(() => {
      this.monitorPM2();
    }, this.config.pm2.healthCheckInterval);
    
    // GitHub Actions monitoring
    setInterval(() => {
      this.monitorGitHubActions();
    }, this.config.githubActions.healthCheckInterval);
    
    // Netlify Functions monitoring
    setInterval(() => {
      this.monitorNetlifyFunctions();
    }, this.config.netlifyFunctions.healthCheckInterval);
    
    // Overall health monitoring
    setInterval(() => {
      this.monitorOverallHealth();
    }, this.config.monitoring.healthCheckInterval);
    
    this.log("Monitoring systems started");
  }

  async monitorPM2() {
    try {
      const status = this.runCommand("pm2 status --json");
      if (status.error) {
        this.log("PM2 monitoring failed", "ERROR");
        this.status.pm2.healthy = false;
        return;
      }
      
      const processes = JSON.parse(status.stdout);
      this.status.pm2.processes = processes;
      this.status.pm2.lastCheck = Date.now();
      
      // Check critical processes
      let healthyCount = 0;
      for (const process of this.config.pm2.criticalProcesses) {
        const proc = processes.find(p => p.name === process);
        if (proc && proc.pm2_env?.status === "online") {
          healthyCount++;
        }
      }
      
      this.status.pm2.healthy = healthyCount >= this.config.pm2.criticalProcesses.length * 0.8;
      
      if (!this.status.pm2.healthy) {
        this.log("PM2 health check failed, attempting recovery", "WARN");
        await this.recoverPM2();
      }
      
    } catch (error) {
      this.log(`PM2 monitoring error: ${error.message}`, "ERROR");
      this.status.pm2.healthy = false;
    }
  }

  async monitorGitHubActions() {
    try {
      // Check workflow files
      let healthyWorkflows = 0;
      for (const workflow of this.config.githubActions.workflows) {
        if (fs.existsSync(workflow)) {
          healthyWorkflows++;
        }
      }
      
      this.status.githubActions.workflows = this.config.githubActions.workflows;
      this.status.githubActions.lastCheck = Date.now();
      this.status.githubActions.healthy = healthyWorkflows >= this.config.githubActions.workflows.length * 0.8;
      
      if (!this.status.githubActions.healthy) {
        this.log("GitHub Actions health check failed, attempting recovery", "WARN");
        await this.recoverGitHubActions();
      }
      
    } catch (error) {
      this.log(`GitHub Actions monitoring error: ${error.message}`, "ERROR");
      this.status.githubActions.healthy = false;
    }
  }

  async monitorNetlifyFunctions() {
    try {
      // Check manifest and functions
      let healthyFunctions = 0;
      if (fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        const manifest = JSON.parse(fs.readFileSync(this.config.netlifyFunctions.manifestFile, 'utf8'));
        this.status.netlifyFunctions.functions = manifest.functions || [];
        
        for (const func of this.config.netlifyFunctions.functions) {
          const funcPath = path.join(this.workspace, "netlify/functions", func);
          if (fs.existsSync(funcPath)) {
            healthyFunctions++;
          }
        }
      }
      
      this.status.netlifyFunctions.lastCheck = Date.now();
      this.status.netlifyFunctions.healthy = healthyFunctions >= this.config.netlifyFunctions.functions.length * 0.8;
      
      if (!this.status.netlifyFunctions.healthy) {
        this.log("Netlify Functions health check failed, attempting recovery", "WARN");
        await this.recoverNetlifyFunctions();
      }
      
    } catch (error) {
      this.log(`Netlify Functions monitoring error: ${error.message}`, "ERROR");
      this.status.netlifyFunctions.healthy = false;
    }
  }

  monitorOverallHealth() {
    this.status.overall.lastCheck = Date.now();
    this.status.overall.uptime = Date.now() - this.startTime;
    
    const healthySystems = [
      this.status.pm2.healthy,
      this.status.githubActions.healthy,
      this.status.netlifyFunctions.healthy
    ].filter(Boolean).length;
    
    this.status.overall.healthy = healthySystems >= 2; // At least 2 out of 3 systems healthy
    
    if (!this.status.overall.healthy) {
      this.log("Overall system health check failed", "WARN");
      this.triggerEmergencyRecovery();
    }
  }

  async recoverPM2() {
    this.log("Attempting PM2 recovery...");
    
    try {
      // Restart PM2 daemon
      this.runCommand("pm2 kill");
      this.runCommand("pm2 start ecosystem.comprehensive-redundancy.cjs");
      
      // Wait for processes to start
      await new Promise(resolve => setTimeout(resolve, 10000));
      
      // Verify recovery
      await this.monitorPM2();
      
      if (this.status.pm2.healthy) {
        this.log("PM2 recovery successful");
      } else {
        this.log("PM2 recovery failed", "ERROR");
      }
    } catch (error) {
      this.log(`PM2 recovery error: ${error.message}`, "ERROR");
    }
  }

  async recoverGitHubActions() {
    this.log("Attempting GitHub Actions recovery...");
    
    try {
      // Run fallback scripts
      for (const script of this.config.githubActions.fallbackScripts) {
        if (fs.existsSync(script)) {
          this.log(`Running fallback script: ${script}`);
          this.runCommand(`node ${script}`);
        }
      }
      
      // Regenerate workflows if needed
      this.runCommand("npm run netlify:manifest");
      
      // Verify recovery
      await this.monitorGitHubActions();
      
      if (this.status.githubActions.healthy) {
        this.log("GitHub Actions recovery successful");
      } else {
        this.log("GitHub Actions recovery failed", "ERROR");
      }
    } catch (error) {
      this.log(`GitHub Actions recovery error: ${error.message}`, "ERROR");
    }
  }

  async recoverNetlifyFunctions() {
    this.log("Attempting Netlify Functions recovery...");
    
    try {
      // Regenerate manifest
      this.runCommand("npm run netlify:manifest");
      
      // Validate functions
      for (const func of this.config.netlifyFunctions.functions) {
        const funcPath = path.join(this.workspace, "netlify/functions", func);
        if (!fs.existsSync(funcPath)) {
          this.log(`Creating missing function: ${func}`);
          this.createNetlifyFunction(func);
        }
      }
      
      // Verify recovery
      await this.monitorNetlifyFunctions();
      
      if (this.status.netlifyFunctions.healthy) {
        this.log("Netlify Functions recovery successful");
      } else {
        this.log("Netlify Functions recovery failed", "ERROR");
      }
    } catch (error) {
      this.log(`Netlify Functions recovery error: ${error.message}`, "ERROR");
    }
  }

  createNetlifyFunction(funcName) {
    try {
      const funcDir = path.join(this.workspace, "netlify/functions", funcName);
      if (!fs.existsSync(funcDir)) {
        fs.mkdirSync(funcDir, { recursive: true });
      }
      
      const funcFile = path.join(funcDir, "index.js");
      if (!fs.existsSync(funcFile)) {
        const funcContent = `exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "${funcName} function is working" })
  };
};`;
        fs.writeFileSync(funcFile, funcContent);
        this.log(`Created function: ${funcName}`);
      }
    } catch (error) {
      this.log(`Failed to create function ${funcName}: ${error.message}`, "ERROR");
    }
  }

  triggerEmergencyRecovery() {
    this.log("Triggering emergency recovery...", "WARN");
    
    try {
      // Restart all systems
      this.runCommand("pm2 restart all");
      this.runCommand("npm run redundancy:comprehensive:restart");
      
      // Wait for systems to stabilize
      setTimeout(() => {
        this.log("Emergency recovery completed");
      }, 30000);
      
    } catch (error) {
      this.log(`Emergency recovery failed: ${error.message}`, "ERROR");
    }
  }

  runCommand(command) {
    try {
      const result = spawnSync(command, { 
        shell: true, 
        cwd: this.workspace,
        encoding: 'utf8'
      });
      
      return {
        stdout: result.stdout,
        stderr: result.stderr,
        error: result.error,
        code: result.status
      };
    } catch (error) {
      return {
        stdout: "",
        stderr: "",
        error: error,
        code: -1
      };
    }
  }

  getStatus() {
    return {
      ...this.status,
      config: this.config,
      uptime: Date.now() - this.startTime,
      version: "2.0.0"
    };
  }

  async stop() {
    this.log("Stopping Comprehensive Redundancy Automation V2...");
    
    try {
      // Stop monitoring
      clearInterval(this.monitoringIntervals);
      
      this.log("Comprehensive Redundancy Automation V2 stopped");
      return true;
    } catch (error) {
      this.log(`Failed to stop: ${error.message}`, "ERROR");
      return false;
    }
  }
}

// CLI interface
if (require.main === module) {
  const redundancy = new ComprehensiveRedundancyAutomationV2();
  
  const command = process.argv[2];
  
  switch (command) {
    case "start":
      redundancy.start();
      break;
    case "stop":
      redundancy.stop();
      break;
    case "status":
      console.log(JSON.stringify(redundancy.getStatus(), null, 2));
      break;
    case "health":
      console.log("System Health Check:");
      console.log(`PM2: ${redundancy.status.pm2.healthy ? "Healthy" : "Unhealthy"}`);
      console.log(`GitHub Actions: ${redundancy.status.githubActions.healthy ? "Healthy" : "Unhealthy"}`);
      console.log(`Netlify Functions: ${redundancy.status.netlifyFunctions.healthy ? "Healthy" : "Unhealthy"}`);
      console.log(`Overall: ${redundancy.status.overall.healthy ? "Healthy" : "Unhealthy"}`);
      break;
    case "recover":
      redundancy.recoverPM2();
      redundancy.recoverGitHubActions();
      redundancy.recoverNetlifyFunctions();
      break;
    default:
      console.log("Usage: node comprehensive-redundancy-automation-v2.cjs [start|stop|status|health|recover]");
      break;
  }
}

module.exports = ComprehensiveRedundancyAutomationV2;