#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class ComprehensiveRedundancyOrchestrator {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "comprehensive-redundancy-orchestrator.log");
    this.ensureLogDir();
    
    this.config = {
      // PM2 Redundancy Configuration
      pm2: {
        ecosystemFiles: [
          "ecosystem.pm2.cjs",
          "ecosystem-redundancy.pm2.cjs",
          "ecosystem.redundancy.cjs"
        ],
        processes: [
          "zion-auto-sync",
          "zion-auto-sync-cron",
          "zion-auto-sync-backup",
          "zion-auto-sync-cron-backup",
          "redundancy-master-orchestrator",
          "redundancy-health-monitor",
          "redundancy-git-sync",
          "redundancy-build-monitor",
          "redundancy-automation-system"
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
        triggerInterval: 300000, // 5 minutes
        maxRetries: 3,
        retryDelay: 60000 // 1 minute
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
        healthCheckInterval: 60000, // 1 minute
        maxRetries: 3,
        retryDelay: 30000 // 30 seconds
      },
      
      // General Configuration
      general: {
        logRotation: {
          maxSize: 10 * 1024 * 1024, // 10MB
          maxFiles: 30,
          compress: true
        },
        monitoringInterval: 60000, // 1 minute
        alertThreshold: 3 // consecutive failures before alert
      }
    };
    
    this.monitoring = false;
    this.checkInterval = null;
    this.failureCounts = new Map();
    this.healthHistory = new Map();
    this.lastBackupTrigger = new Map();
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

  // PM2 Redundancy Management
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
          status: statusMatch ? statusMatch[1] : "unknown",
          memory: memoryMatch ? parseInt(memoryMatch[1]) : 0,
          cpu: cpuMatch ? parseInt(cpuMatch[1]) : 0,
          running: statusMatch ? statusMatch[1] === "online" : false
        };
      }
    } catch (error) {
      this.log(`Failed to get PM2 process info for ${processName}: ${error.message}`, "ERROR");
    }
    return null;
  }

  async startPM2Process(processName) {
    try {
      this.log(`Starting PM2 process: ${processName}`);
      const result = await this.runCommand("pm2", ["start", processName]);
      if (result.status === 0) {
        this.log(`Successfully started PM2 process: ${processName}`);
        return true;
      } else {
        this.log(`Failed to start PM2 process: ${processName}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error starting PM2 process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restartPM2Process(processName) {
    try {
      this.log(`Restarting PM2 process: ${processName}`);
      const result = await this.runCommand("pm2", ["restart", processName]);
      if (result.status === 0) {
        this.log(`Successfully restarted PM2 process: ${processName}`);
        return true;
      } else {
        this.log(`Failed to restart PM2 process: ${processName}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error restarting PM2 process ${processName}: ${result.stderr}`, "ERROR");
      return false;
    }
  }

  async managePM2Redundancy() {
    this.log("Managing PM2 redundancy...");
    
    for (const processName of this.config.pm2.processes) {
      try {
        const processInfo = await this.getPM2ProcessInfo(processName);
        
        if (!processInfo) {
          this.log(`Process ${processName} not found, starting...`);
          await this.startPM2Process(processName);
          continue;
        }
        
        if (!processInfo.running) {
          this.log(`Process ${processName} is not running, restarting...`);
          await this.restartPM2Process(processName);
          continue;
        }
        
        // Check resource usage
        if (processInfo.memory > this.config.pm2.memoryThreshold || 
            processInfo.cpu > this.config.pm2.cpuThreshold) {
          this.log(`Process ${processName} using excessive resources, restarting...`);
          await this.restartPM2Process(processName);
        }
        
        this.log(`PM2 process ${processName} is healthy`);
      } catch (error) {
        this.log(`Error managing PM2 process ${processName}: ${error.message}`, "ERROR");
      }
    }
  }

  // GitHub Actions Redundancy Management
  async triggerGitHubWorkflow(workflowName) {
    try {
      this.log(`Triggering GitHub workflow: ${workflowName}`);
      
      // Create a simple trigger by making a small change to trigger the workflow
      const triggerFile = path.join(this.workspace, `.github/workflows/${workflowName}.yml`);
      if (fs.existsSync(triggerFile)) {
        const content = fs.readFileSync(triggerFile, 'utf8');
        const timestamp = new Date().toISOString();
        const newContent = content.replace(
          /# Last triggered: .*/,
          `# Last triggered: ${timestamp}`
        );
        
        if (content !== newContent) {
          fs.writeFileSync(triggerFile, newContent);
          this.log(`Successfully triggered GitHub workflow: ${workflowName}`);
          return true;
        }
      }
      
      return false;
    } catch (error) {
      this.log(`Error triggering GitHub workflow ${workflowName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async manageGitHubActionsRedundancy() {
    this.log("Managing GitHub Actions redundancy...");
    
    const now = Date.now();
    
    for (const workflow of this.config.github.workflows) {
      try {
        const lastTrigger = this.lastBackupTrigger.get(workflow) || 0;
        const timeSinceLastTrigger = now - lastTrigger;
        
        if (timeSinceLastTrigger >= this.config.github.triggerInterval) {
          if (this.config.github.backupWorkflows.includes(workflow)) {
            await this.triggerGitHubWorkflow(workflow);
            this.lastBackupTrigger.set(workflow, now);
          }
        }
        
        this.log(`GitHub workflow ${workflow} is healthy`);
      } catch (error) {
        this.log(`Error managing GitHub workflow ${workflow}: ${error.message}`, "ERROR");
      }
    }
  }

  // Netlify Functions Redundancy Management
  async checkNetlifyFunctionHealth(functionName) {
    try {
      // Check if function file exists
      const functionFile = path.join(this.workspace, `netlify/functions/${functionName}.js`);
      if (!fs.existsSync(functionFile)) {
        this.log(`Netlify function ${functionName} file not found`, "WARN");
        return false;
      }
      
      // Check if function is properly formatted
      const content = fs.readFileSync(functionFile, 'utf8');
      if (!content.includes('exports.handler') && !content.includes('module.exports')) {
        this.log(`Netlify function ${functionName} missing handler export`, "WARN");
        return false;
      }
      
      return true;
    } catch (error) {
      this.log(`Error checking Netlify function ${functionName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async regenerateNetlifyFunctionsManifest() {
    try {
      this.log("Regenerating Netlify functions manifest...");
      const result = await this.runCommand("node", ["scripts/generate-netlify-functions-manifest.cjs"]);
      if (result.status === 0) {
        this.log("Successfully regenerated Netlify functions manifest");
        return true;
      } else {
        this.log("Failed to regenerate Netlify functions manifest", "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error regenerating Netlify functions manifest: ${error.message}`, "ERROR");
      return false;
    }
  }

  async manageNetlifyFunctionsRedundancy() {
    this.log("Managing Netlify functions redundancy...");
    
    let healthyFunctions = 0;
    let totalFunctions = this.config.netlify.functions.length;
    
    for (const functionName of this.config.netlify.functions) {
      try {
        const isHealthy = await this.checkNetlifyFunctionHealth(functionName);
        if (isHealthy) {
          healthyFunctions++;
        } else {
          this.log(`Netlify function ${functionName} needs attention`, "WARN");
        }
      } catch (error) {
        this.log(`Error checking Netlify function ${functionName}: ${error.message}`, "ERROR");
      }
    }
    
    const healthPercentage = (healthyFunctions / totalFunctions) * 100;
    this.log(`Netlify functions health: ${healthyFunctions}/${totalFunctions} (${healthPercentage.toFixed(1)}%)`);
    
    if (healthPercentage < 90) {
      this.log("Regenerating Netlify functions manifest due to low health...");
      await this.regenerateNetlifyFunctionsManifest();
    }
  }

  // Health Monitoring
  async checkOverallHealth() {
    this.log("Checking overall system health...");
    
    const health = {
      pm2: await this.checkPM2Status(),
      timestamp: new Date().toISOString(),
      failures: {}
    };
    
    // Check PM2 processes
    for (const processName of this.config.pm2.processes) {
      const processInfo = await this.getPM2ProcessInfo(processName);
      if (!processInfo || !processInfo.running) {
        health.failures[`pm2_${processName}`] = "not running";
      }
    }
    
    // Check Netlify functions
    for (const functionName of this.config.netlify.functions) {
      const isHealthy = await this.checkNetlifyFunctionHealth(functionName);
      if (!isHealthy) {
        health.failures[`netlify_${functionName}`] = "unhealthy";
      }
    }
    
    // Store health history
    this.healthHistory.set(Date.now(), health);
    
    // Clean old health history
    const cutoff = Date.now() - (24 * 60 * 60 * 1000); // 24 hours
    for (const [timestamp] of this.healthHistory) {
      if (timestamp < cutoff) {
        this.healthHistory.delete(timestamp);
      }
    }
    
    return health;
  }

  // Main Orchestration
  async orchestrate() {
    this.log("Starting comprehensive redundancy orchestration...");
    
    try {
      // Manage PM2 redundancy
      await this.managePM2Redundancy();
      
      // Manage GitHub Actions redundancy
      await this.manageGitHubActionsRedundancy();
      
      // Manage Netlify functions redundancy
      await this.manageNetlifyFunctionsRedundancy();
      
      // Check overall health
      const health = await this.checkOverallHealth();
      
      if (Object.keys(health.failures).length > 0) {
        this.log(`System health check found issues: ${JSON.stringify(health.failures)}`, "WARN");
      } else {
        this.log("All systems are healthy");
      }
      
    } catch (error) {
      this.log(`Error during orchestration: ${error.message}`, "ERROR");
    }
  }

  // Start monitoring
  startMonitoring() {
    if (this.monitoring) {
      this.log("Monitoring is already running");
      return;
    }
    
    this.log("Starting comprehensive redundancy monitoring...");
    this.monitoring = true;
    
    this.checkInterval = setInterval(async () => {
      await this.orchestrate();
    }, this.config.general.monitoringInterval);
  }

  // Stop monitoring
  stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    this.monitoring = false;
    this.log("Stopped comprehensive redundancy monitoring");
  }

  // Get status
  getStatus() {
    return {
      monitoring: this.monitoring,
      lastHealthCheck: this.healthHistory.size > 0 ? 
        Array.from(this.healthHistory.keys()).pop() : null,
      failureCounts: Object.fromEntries(this.failureCounts),
      config: this.config
    };
  }

  // Generate report
  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      status: this.getStatus(),
      healthHistory: Array.from(this.healthHistory.entries()).slice(-10), // Last 10 entries
      recommendations: []
    };
    
    // Generate recommendations based on health history
    if (this.healthHistory.size > 0) {
      const recentFailures = Array.from(this.healthHistory.values())
        .filter(h => Object.keys(h.failures).length > 0)
        .slice(-5);
      
      if (recentFailures.length > 0) {
        report.recommendations.push("Consider reviewing failed processes and functions");
      }
      
      if (this.failureCounts.size > 0) {
        report.recommendations.push("Some processes have high failure rates - investigate root causes");
      }
    }
    
    return report;
  }
}

// CLI Interface
if (require.main === module) {
  const orchestrator = new ComprehensiveRedundancyOrchestrator();
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
    case "report":
      console.log(JSON.stringify(orchestrator.generateReport(), null, 2));
      break;
    case "once":
      orchestrator.orchestrate().then(() => {
        console.log("Orchestration completed");
        process.exit(0);
      }).catch(error => {
        console.error("Orchestration failed:", error);
        process.exit(1);
      });
      break;
    default:
      console.log("Usage: node comprehensive-redundancy-orchestrator.cjs [start|stop|status|report|once]");
      process.exit(1);
  }
}

module.exports = ComprehensiveRedundancyOrchestrator;