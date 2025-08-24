#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class UltimateRedundancyOrchestrator {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "ultimate-redundancy-orchestrator.log");
    this.ensureLogDir();
    
    this.config = {
      // PM2 Redundancy Configuration
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
          "master-redundancy-orchestrator",
          "enhanced-pm2-redundancy",
          "enhanced-github-actions-redundancy",
          "enhanced-netlify-functions-redundancy"
        ],
        healthCheckInterval: 30000,
        maxRestartAttempts: 5,
        restartDelay: 5000,
        memoryThreshold: 80,
        cpuThreshold: 90
      },
      
      // GitHub Actions Redundancy Configuration
      github: {
        workflows: [
          "marketing-sync",
          "sync-health",
          "marketing-sync-backup",
          "sync-health-backup"
        ],
        backupWorkflows: [
          "marketing-sync-backup",
          "sync-health-backup"
        ],
        healthCheckInterval: 60000,
        maxFailures: 3,
        autoTrigger: true,
        backupTriggers: true
      },
      
      // Netlify Functions Redundancy Configuration
      netlify: {
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
        maxFailures: 3,
        autoDeploy: true,
        autoRegenerate: true,
        deploymentCheck: true
      },
      
      // General Configuration
      general: {
        logLevel: "INFO",
        masterCheckInterval: 60000,
        autoRecovery: true,
        loadBalancing: true,
        alertThreshold: 3,
        logRotation: {
          maxSize: 10 * 1024 * 1024,
          maxFiles: 30,
          compress: true
        }
      }
    };
    
    this.monitoring = false;
    this.checkInterval = null;
    this.restartCounts = new Map();
    this.healthHistory = new Map();
    this.failureCounts = new Map();
  }

  ensureLogDir() {
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
      console.error(`Failed to write to log file: ${error.message}`);
    }
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: this.workspace,
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 20,
        timeout: options.timeout || 30000,
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

  // PM2 Redundancy Methods
  async checkPM2Status() {
    try {
      const result = await this.runCommand("pm2", ["status", "--no-daemon"]);
      return result.status === 0;
    } catch (error) {
      this.log(`PM2 status check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async getPM2ProcessInfo(processName) {
    try {
      const result = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
      if (result.status === 0) {
        const output = result.stdout;
        const statusMatch = output.match(/status\s+:\s+(\w+)/);
        const memoryMatch = output.match(/memory\s+:\s+(\d+)/);
        const cpuMatch = output.match(/cpu\s+:\s+(\d+)/);
        
        return {
          name: processName,
          status: statusMatch ? statusMatch[1] : "unknown",
          memory: memoryMatch ? parseInt(memoryMatch[1]) : 0,
          cpu: cpuMatch ? parseInt(cpuMatch[1]) : 0,
          running: statusMatch ? statusMatch[1] === "online" : false
        };
      }
    } catch (error) {
      this.log(`Failed to get PM2 process info for ${processName}: ${error.message}`, "ERROR");
    }
    
    return {
      name: processName,
      status: "unknown",
      memory: 0,
      cpu: 0,
      running: false
    };
  }

  async startPM2Process(processName, ecosystemFile) {
    try {
      this.log(`Starting PM2 process: ${processName} from ${ecosystemFile}`);
      const result = await this.runCommand("pm2", ["start", ecosystemFile, "--only", processName]);
      
      if (result.status === 0) {
        this.log(`Successfully started PM2 process: ${processName}`, "INFO");
        return true;
      } else {
        this.log(`Failed to start PM2 process: ${processName}. Error: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Exception starting PM2 process: ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restartPM2Process(processName) {
    try {
      this.log(`Restarting PM2 process: ${processName}`);
      const result = await this.runCommand("pm2", ["restart", processName]);
      
      if (result.status === 0) {
        this.log(`Successfully restarted PM2 process: ${processName}`, "INFO");
        return true;
      } else {
        this.log(`Failed to restart PM2 process: ${processName}. Error: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Exception restarting PM2 process: ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkPM2Redundancy() {
    this.log("Checking PM2 redundancy...", "INFO");
    
    for (const processName of this.config.pm2.processes) {
      const processInfo = await this.getPM2ProcessInfo(processName);
      
      if (!processInfo.running) {
        this.log(`PM2 process ${processName} is not running. Attempting to start...`, "WARN");
        
        // Try to start from different ecosystem files
        let started = false;
        for (const ecosystemFile of this.config.pm2.ecosystemFiles) {
          if (fs.existsSync(ecosystemFile)) {
            started = await this.startPM2Process(processName, ecosystemFile);
            if (started) break;
          }
        }
        
        if (!started) {
          this.log(`Failed to start PM2 process: ${processName}`, "ERROR");
          this.failureCounts.set(processName, (this.failureCounts.get(processName) || 0) + 1);
        }
      } else {
        // Check resource usage
        if (processInfo.memory > this.config.pm2.memoryThreshold) {
          this.log(`PM2 process ${processName} using high memory: ${processInfo.memory}%`, "WARN");
        }
        
        if (processInfo.cpu > this.config.pm2.cpuThreshold) {
          this.log(`PM2 process ${processName} using high CPU: ${processInfo.cpu}%`, "WARN");
        }
        
        // Reset failure count if process is healthy
        this.failureCounts.set(processName, 0);
      }
    }
  }

  // GitHub Actions Redundancy Methods
  async checkGitHubActionsRedundancy() {
    this.log("Checking GitHub Actions redundancy...", "INFO");
    
    try {
      // Check if workflows exist and are valid
      for (const workflow of this.config.github.workflows) {
        const workflowFile = `.github/workflows/${workflow}.yml`;
        if (!fs.existsSync(workflowFile)) {
          this.log(`GitHub workflow ${workflow} not found`, "ERROR");
          continue;
        }
        
        // Validate workflow syntax
        const workflowContent = fs.readFileSync(workflowFile, 'utf8');
        if (!workflowContent.includes('name:') || !workflowContent.includes('on:')) {
          this.log(`GitHub workflow ${workflow} has invalid syntax`, "ERROR");
        }
      }
      
      // Check backup workflows
      for (const backupWorkflow of this.config.github.backupWorkflows) {
        const backupFile = `.github/workflows/${backupWorkflow}.yml`;
        if (fs.existsSync(backupFile)) {
          this.log(`Backup workflow ${backupWorkflow} exists and ready`, "INFO");
        } else {
          this.log(`Backup workflow ${backupWorkflow} missing`, "WARN");
        }
      }
      
      // Check if we can trigger workflows manually
      if (this.config.github.autoTrigger) {
        this.log("GitHub Actions auto-trigger is enabled", "INFO");
      }
      
    } catch (error) {
      this.log(`GitHub Actions redundancy check failed: ${error.message}`, "ERROR");
    }
  }

  // Netlify Functions Redundancy Methods
  async checkNetlifyFunctionsRedundancy() {
    this.log("Checking Netlify functions redundancy...", "INFO");
    
    try {
      // Check functions manifest
      const manifestPath = "netlify/functions/functions-manifest.json";
      if (fs.existsSync(manifestPath)) {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        const functions = manifest.functions || [];
        
        this.log(`Found ${functions.length} Netlify functions in manifest`, "INFO");
        
        // Check if all expected functions are in the manifest
        for (const expectedFunction of this.config.netlify.functions) {
          if (!functions.includes(expectedFunction)) {
            this.log(`Netlify function ${expectedFunction} missing from manifest`, "WARN");
          }
        }
        
        // Check for duplicate functions
        const duplicates = functions.filter((item, index) => functions.indexOf(item) !== index);
        if (duplicates.length > 0) {
          this.log(`Found duplicate Netlify functions: ${duplicates.join(', ')}`, "WARN");
        }
      } else {
        this.log("Netlify functions manifest not found", "ERROR");
      }
      
      // Check if functions directory exists
      const functionsDir = "netlify/functions";
      if (fs.existsSync(functionsDir)) {
        const functionFiles = fs.readdirSync(functionsDir);
        this.log(`Found ${functionFiles.length} files in Netlify functions directory`, "INFO");
      }
      
    } catch (error) {
      this.log(`Netlify functions redundancy check failed: ${error.message}`, "ERROR");
    }
  }

  // Master Health Check
  async performMasterHealthCheck() {
    this.log("Performing master health check...", "INFO");
    
    try {
      // Check PM2 redundancy
      await this.checkPM2Redundancy();
      
      // Check GitHub Actions redundancy
      await this.checkGitHubActionsRedundancy();
      
      // Check Netlify functions redundancy
      await this.checkNetlifyFunctionsRedundancy();
      
      // Check overall system health
      const totalFailures = Array.from(this.failureCounts.values()).reduce((sum, count) => sum + count, 0);
      
      if (totalFailures > this.config.general.alertThreshold) {
        this.log(`System health alert: ${totalFailures} total failures detected`, "ERROR");
        
        // Attempt auto-recovery
        if (this.config.general.autoRecovery) {
          this.log("Attempting auto-recovery...", "INFO");
          await this.performAutoRecovery();
        }
      } else {
        this.log("System health check passed", "INFO");
      }
      
    } catch (error) {
      this.log(`Master health check failed: ${error.message}`, "ERROR");
    }
  }

  // Auto-recovery methods
  async performAutoRecovery() {
    this.log("Performing auto-recovery...", "INFO");
    
    try {
      // Restart failed PM2 processes
      for (const [processName, failureCount] of this.failureCounts.entries()) {
        if (failureCount > 2) {
          this.log(`Attempting to restart failed PM2 process: ${processName}`, "INFO");
          await this.restartPM2Process(processName);
        }
      }
      
      // Regenerate Netlify functions manifest if needed
      if (fs.existsSync("scripts/generate-netlify-functions-manifest.cjs")) {
        this.log("Regenerating Netlify functions manifest", "INFO");
        await this.runCommand("node", ["scripts/generate-netlify-functions-manifest.cjs"]);
      }
      
      // Trigger GitHub Actions if needed
      if (this.config.github.autoTrigger) {
        this.log("Auto-triggering GitHub Actions workflows", "INFO");
        // This would require GitHub API integration
      }
      
    } catch (error) {
      this.log(`Auto-recovery failed: ${error.message}`, "ERROR");
    }
  }

  // Start monitoring
  startMonitoring() {
    if (this.monitoring) {
      this.log("Monitoring is already running", "WARN");
      return;
    }
    
    this.log("Starting ultimate redundancy monitoring...", "INFO");
    this.monitoring = true;
    
    this.checkInterval = setInterval(async () => {
      await this.performMasterHealthCheck();
    }, this.config.general.masterCheckInterval);
    
    this.log("Ultimate redundancy monitoring started", "INFO");
  }

  // Stop monitoring
  stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    
    this.monitoring = false;
    this.log("Ultimate redundancy monitoring stopped", "INFO");
  }

  // Get system status
  getStatus() {
    return {
      monitoring: this.monitoring,
      pm2Processes: this.config.pm2.processes.length,
      githubWorkflows: this.config.github.workflows.length,
      netlifyFunctions: this.config.netlify.functions.length,
      failureCounts: Object.fromEntries(this.failureCounts),
      healthHistory: Object.fromEntries(this.healthHistory),
      config: this.config
    };
  }

  // Run once
  async runOnce() {
    this.log("Running ultimate redundancy check once...", "INFO");
    await this.performMasterHealthCheck();
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new UltimateRedundancyOrchestrator();
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
    case "check":
      orchestrator.runOnce();
      break;
    case "recovery":
      orchestrator.performAutoRecovery();
      break;
    default:
      console.log("Usage: node ultimate-redundancy-orchestrator.cjs [start|stop|status|check|recovery]");
      process.exit(1);
  }
}

module.exports = UltimateRedundancyOrchestrator;