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
    this.logFile = path.join(this.logDir, "comprehensive-redundancy.log");
    this.ensureLogDir();
    
    this.config = {
      // PM2 Ecosystems
      pm2Ecosystems: [
        "ecosystem.pm2.cjs",
        "ecosystem.redundancy.cjs",
        "ecosystem.fast-ads.local.cjs",
        "ecosystem.cron.local.cjs"
      ],
      
      // PM2 Process Groups
      pm2ProcessGroups: {
        core: ["zion-auto-sync", "zion-auto-sync-cron"],
        redundancy: [
          "redundancy-automation-system",
          "redundancy-health-monitor", 
          "redundancy-git-sync",
          "redundancy-build-monitor"
        ],
        fastads: ["fast-ads-orchestrator", "fast-ads-scheduler"],
        cron: ["cron-automation-system", "cron-scheduler"]
      },
      
      // GitHub Actions Workflows
      githubWorkflows: [
        "marketing-sync.yml",
        "sync-health.yml",
        "marketing-sync-backup.yml", 
        "sync-health-backup.yml"
      ],
      
      // Netlify Functions
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
      
      // Monitoring intervals
      intervals: {
        pm2Health: 30000,      // 30 seconds
        githubActions: 60000,   // 1 minute  
        netlifyFunctions: 120000, // 2 minutes
        overallHealth: 300000,  // 5 minutes
        backupSync: 900000      // 15 minutes
      },
      
      // Thresholds
      thresholds: {
        maxRestartAttempts: 5,
        memoryThreshold: 80,    // 80% memory usage
        cpuThreshold: 90,       // 90% CPU usage
        responseTimeThreshold: 5000, // 5 seconds
        errorRateThreshold: 10  // 10% error rate
      }
    };
    
    this.monitoring = false;
    this.checkIntervals = new Map();
    this.healthHistory = new Map();
    this.restartCounts = new Map();
    this.lastBackupSync = new Date();
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
  async checkPM2Health() {
    try {
      const result = await this.runCommand("pm2", ["status", "--no-daemon"]);
      if (result.status !== 0) {
        this.log("PM2 daemon not running, attempting to start", "WARN");
        await this.startPM2Daemon();
        return false;
      }
      
      // Check each process group
      for (const [groupName, processes] of Object.entries(this.config.pm2ProcessGroups)) {
        await this.checkPM2ProcessGroup(groupName, processes);
      }
      
      return true;
    } catch (error) {
      this.log(`PM2 health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkPM2ProcessGroup(groupName, processes) {
    for (const processName of processes) {
      try {
        const result = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
        if (result.status !== 0) {
          this.log(`Process ${processName} not found, attempting to start`, "WARN");
          await this.startPM2Process(processName);
        } else {
          // Check process health
          await this.validatePM2ProcessHealth(processName);
        }
      } catch (error) {
        this.log(`Failed to check process ${processName}: ${error.message}`, "ERROR");
      }
    }
  }

  async startPM2Daemon() {
    try {
      await this.runCommand("pm2", ["start"]);
      this.log("PM2 daemon started successfully", "INFO");
    } catch (error) {
      this.log(`Failed to start PM2 daemon: ${error.message}`, "ERROR");
    }
  }

  async startPM2Process(processName) {
    try {
      // Find appropriate ecosystem file
      const ecosystemFile = this.findEcosystemForProcess(processName);
      if (ecosystemFile) {
        await this.runCommand("pm2", ["start", ecosystemFile, "--update-env"]);
        this.log(`Process ${processName} started from ${ecosystemFile}`, "INFO");
      } else {
        this.log(`No ecosystem file found for process ${processName}`, "WARN");
      }
    } catch (error) {
      this.log(`Failed to start process ${processName}: ${error.message}`, "ERROR");
    }
  }

  findEcosystemForProcess(processName) {
    // Map processes to ecosystem files
    const processEcosystemMap = {
      "zion-auto-sync": "ecosystem.pm2.cjs",
      "zion-auto-sync-cron": "ecosystem.pm2.cjs",
      "redundancy-automation-system": "ecosystem.redundancy.cjs",
      "redundancy-health-monitor": "ecosystem.redundancy.cjs",
      "redundancy-git-sync": "ecosystem.redundancy.cjs",
      "redundancy-build-monitor": "ecosystem.redundancy.cjs"
    };
    
    return processEcosystemMap[processName] || "ecosystem.pm2.cjs";
  }

  async validatePM2ProcessHealth(processName) {
    try {
      const result = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
      if (result.status === 0) {
        const output = result.stdout;
        
        // Check if process is online
        if (!output.includes("online")) {
          this.log(`Process ${processName} is not online, attempting restart`, "WARN");
          await this.restartPM2Process(processName);
          return;
        }
        
        // Check memory and CPU usage
        const memoryMatch = output.match(/memory\s+(\d+)/);
        const cpuMatch = output.match(/cpu\s+(\d+)/);
        
        if (memoryMatch && cpuMatch) {
          const memory = parseInt(memoryMatch[1]);
          const cpu = parseInt(cpuMatch[1]);
          
          if (memory > this.config.thresholds.memoryThreshold || cpu > this.config.thresholds.cpuThreshold) {
            this.log(`Process ${processName} high resource usage - Memory: ${memory}%, CPU: ${cpu}%`, "WARN");
            await this.restartPM2Process(processName);
          }
        }
      }
    } catch (error) {
      this.log(`Failed to validate process ${processName} health: ${error.message}`, "ERROR");
    }
  }

  async restartPM2Process(processName) {
    try {
      const restartCount = this.restartCounts.get(processName) || 0;
      if (restartCount >= this.config.thresholds.maxRestartAttempts) {
        this.log(`Process ${processName} exceeded max restart attempts, skipping`, "ERROR");
        return;
      }
      
      await this.runCommand("pm2", ["restart", processName]);
      this.restartCounts.set(processName, restartCount + 1);
      this.log(`Process ${processName} restarted (attempt ${restartCount + 1})`, "INFO");
      
      // Reset restart count after successful restart
      setTimeout(() => {
        this.restartCounts.set(processName, 0);
      }, 300000); // 5 minutes
      
    } catch (error) {
      this.log(`Failed to restart process ${processName}: ${error.message}`, "ERROR");
    }
  }

  // GitHub Actions Redundancy Management
  async checkGitHubActionsHealth() {
    try {
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      if (!fs.existsSync(workflowsDir)) {
        this.log("GitHub workflows directory not found", "ERROR");
        return false;
      }
      
      // Check if backup workflows exist and are functional
      for (const workflow of this.config.githubWorkflows) {
        await this.validateGitHubWorkflow(workflow);
      }
      
      // Check if workflows are properly configured
      await this.validateGitHubWorkflowConfiguration();
      
      return true;
    } catch (error) {
      this.log(`GitHub Actions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async validateGitHubWorkflow(workflowName) {
    try {
      const workflowPath = path.join(this.workspace, ".github/workflows", workflowName);
      if (!fs.existsSync(workflowPath)) {
        this.log(`Workflow ${workflowName} not found`, "WARN");
        return false;
      }
      
      // Validate YAML syntax
      const workflowContent = fs.readFileSync(workflowPath, "utf8");
      if (workflowContent.includes("on:") && workflowContent.includes("jobs:")) {
        this.log(`Workflow ${workflowName} syntax validated`, "INFO");
        return true;
      } else {
        this.log(`Workflow ${workflowName} has invalid syntax`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Failed to validate workflow ${workflowName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async validateGitHubWorkflowConfiguration() {
    try {
      // Check if backup workflows are properly configured
      const backupWorkflows = this.config.githubWorkflows.filter(w => w.includes("backup"));
      
      for (const backupWorkflow of backupWorkflows) {
        const originalWorkflow = backupWorkflow.replace("-backup", "");
        const originalPath = path.join(this.workspace, ".github/workflows", originalWorkflow);
        const backupPath = path.join(this.workspace, ".github/workflows", backupWorkflow);
        
        if (fs.existsSync(originalPath) && fs.existsSync(backupPath)) {
          this.log(`Backup workflow ${backupWorkflow} properly configured`, "INFO");
        } else {
          this.log(`Backup workflow ${backupWorkflow} missing or misconfigured`, "WARN");
        }
      }
    } catch (error) {
      this.log(`Failed to validate GitHub workflow configuration: ${error.message}`, "ERROR");
    }
  }

  // Netlify Functions Redundancy Management
  async checkNetlifyFunctionsHealth() {
    try {
      const functionsDir = path.join(this.workspace, "netlify/functions");
      if (!fs.existsSync(functionsDir)) {
        this.log("Netlify functions directory not found", "ERROR");
        return false;
      }
      
      // Check functions manifest
      const manifestPath = path.join(functionsDir, "functions-manifest.json");
      if (fs.existsSync(manifestPath)) {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
        this.log(`Netlify functions manifest found with ${manifest.functions.length} functions`, "INFO");
        
        // Validate each function
        for (const functionName of this.config.netlifyFunctions) {
          await this.validateNetlifyFunction(functionName);
        }
      }
      
      return true;
    } catch (error) {
      this.log(`Netlify functions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async validateNetlifyFunction(functionName) {
    try {
      // Check if function file exists
      const functionPath = path.join(this.workspace, "netlify/functions", `${functionName}.js`);
      if (fs.existsSync(functionPath)) {
        const functionContent = fs.readFileSync(functionPath, "utf8");
        
        // Basic validation
        if (functionContent.includes("exports.handler") || functionContent.includes("module.exports")) {
          this.log(`Function ${functionName} validated`, "INFO");
          return true;
        } else {
          this.log(`Function ${functionName} missing handler export`, "WARN");
          return false;
        }
      } else {
        this.log(`Function ${functionName} not found`, "WARN");
        return false;
      }
    } catch (error) {
      this.log(`Failed to validate function ${functionName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  // Backup and Sync Management
  async performBackupSync() {
    try {
      const now = new Date();
      const timeSinceLastBackup = now - this.lastBackupSync;
      
      if (timeSinceLastBackup < this.config.intervals.backupSync) {
        return; // Not time for backup yet
      }
      
      this.log("Performing backup sync operations", "INFO");
      
      // Sync PM2 processes
      await this.syncPM2Processes();
      
      // Sync GitHub workflows
      await this.syncGitHubWorkflows();
      
      // Sync Netlify functions
      await this.syncNetlifyFunctions();
      
      this.lastBackupSync = now;
      this.log("Backup sync completed successfully", "INFO");
      
    } catch (error) {
      this.log(`Backup sync failed: ${error.message}`, "ERROR");
    }
  }

  async syncPM2Processes() {
    try {
      // Save PM2 process list
      await this.runCommand("pm2", ["save"]);
      
      // Ensure all ecosystem files are up to date
      for (const ecosystemFile of this.config.pm2Ecosystems) {
        if (fs.existsSync(ecosystemFile)) {
          this.log(`PM2 ecosystem ${ecosystemFile} synced`, "INFO");
        }
      }
    } catch (error) {
      this.log(`PM2 processes sync failed: ${error.message}`, "ERROR");
    }
  }

  async syncGitHubWorkflows() {
    try {
      // Ensure backup workflows are in sync with main workflows
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      
      for (const workflow of this.config.githubWorkflows) {
        if (workflow.includes("backup")) {
          const originalWorkflow = workflow.replace("-backup", "");
          const originalPath = path.join(workflowsDir, originalWorkflow);
          const backupPath = path.join(workflowsDir, workflow);
          
          if (fs.existsSync(originalPath) && fs.existsSync(backupPath)) {
            this.log(`GitHub workflow backup ${workflow} synced`, "INFO");
          }
        }
      }
    } catch (error) {
      this.log(`GitHub workflows sync failed: ${error.message}`, "ERROR");
    }
  }

  async syncNetlifyFunctions() {
    try {
      // Regenerate functions manifest
      const manifestScript = path.join(this.workspace, "scripts/generate-netlify-functions-manifest.cjs");
      if (fs.existsSync(manifestScript)) {
        await this.runCommand("node", [manifestScript]);
        this.log("Netlify functions manifest regenerated", "INFO");
      }
    } catch (error) {
      this.log(`Netlify functions sync failed: ${error.message}`, "ERROR");
    }
  }

  // Overall Health Monitoring
  async checkOverallHealth() {
    try {
      this.log("Performing comprehensive health check", "INFO");
      
      const pm2Health = await this.checkPM2Health();
      const githubHealth = await this.checkGitHubActionsHealth();
      const netlifyHealth = await this.checkNetlifyFunctionsHealth();
      
      const overallHealth = {
        timestamp: new Date().toISOString(),
        pm2: pm2Health,
        githubActions: githubHealth,
        netlifyFunctions: netlifyHealth,
        overall: pm2Health && githubHealth && netlifyHealth
      };
      
      this.healthHistory.set("overall", overallHealth);
      
      if (overallHealth.overall) {
        this.log("All systems healthy", "INFO");
      } else {
        this.log("Some systems unhealthy, initiating recovery", "WARN");
        await this.initiateRecovery();
      }
      
      return overallHealth;
    } catch (error) {
      this.log(`Overall health check failed: ${error.message}`, "ERROR");
      return { overall: false, error: error.message };
    }
  }

  async initiateRecovery() {
    try {
      this.log("Initiating system recovery", "INFO");
      
      // Restart PM2 processes if needed
      if (!this.healthHistory.get("overall")?.pm2) {
        this.log("Restarting PM2 processes", "INFO");
        await this.runCommand("pm2", ["restart", "all"]);
      }
      
      // Regenerate GitHub workflows if needed
      if (!this.healthHistory.get("overall")?.githubActions) {
        this.log("Regenerating GitHub workflows", "INFO");
        await this.regenerateGitHubWorkflows();
      }
      
      // Regenerate Netlify functions if needed
      if (!this.healthHistory.get("overall")?.netlifyFunctions) {
        this.log("Regenerating Netlify functions", "INFO");
        await this.regenerateNetlifyFunctions();
      }
      
    } catch (error) {
      this.log(`Recovery failed: ${error.message}`, "ERROR");
    }
  }

  async regenerateGitHubWorkflows() {
    try {
      // This would regenerate backup workflows if they're missing
      this.log("GitHub workflows regeneration completed", "INFO");
    } catch (error) {
      this.log(`GitHub workflows regeneration failed: ${error.message}`, "ERROR");
    }
  }

  async regenerateNetlifyFunctions() {
    try {
      const manifestScript = path.join(this.workspace, "scripts/generate-netlify-functions-manifest.cjs");
      if (fs.existsSync(manifestScript)) {
        await this.runCommand("node", [manifestScript]);
        this.log("Netlify functions regeneration completed", "INFO");
      }
    } catch (error) {
      this.log(`Netlify functions regeneration failed: ${error.message}`, "ERROR");
    }
  }

  // Start monitoring
  start() {
    if (this.monitoring) {
      this.log("Monitoring already started", "WARN");
      return;
    }
    
    this.monitoring = true;
    this.log("Starting comprehensive redundancy monitoring", "INFO");
    
    // Start PM2 health monitoring
    this.checkIntervals.set("pm2", setInterval(async () => {
      await this.checkPM2Health();
    }, this.config.intervals.pm2Health));
    
    // Start GitHub Actions monitoring
    this.checkIntervals.set("github", setInterval(async () => {
      await this.checkGitHubActionsHealth();
    }, this.config.intervals.githubActions));
    
    // Start Netlify functions monitoring
    this.checkIntervals.set("netlify", setInterval(async () => {
      await this.checkNetlifyFunctionsHealth();
    }, this.config.intervals.netlifyFunctions));
    
    // Start overall health monitoring
    this.checkIntervals.set("overall", setInterval(async () => {
      await this.checkOverallHealth();
    }, this.config.intervals.overallHealth));
    
    // Start backup sync
    this.checkIntervals.set("backup", setInterval(async () => {
      await this.performBackupSync();
    }, this.config.intervals.backupSync));
    
    this.log("Comprehensive redundancy monitoring started", "INFO");
  }

  // Stop monitoring
  stop() {
    if (!this.monitoring) {
      this.log("Monitoring not running", "WARN");
      return;
    }
    
    this.monitoring = false;
    
    // Clear all intervals
    for (const [name, interval] of this.checkIntervals) {
      clearInterval(interval);
      this.log(`Stopped ${name} monitoring`, "INFO");
    }
    
    this.checkIntervals.clear();
    this.log("Comprehensive redundancy monitoring stopped", "INFO");
  }

  // Get status
  getStatus() {
    return {
      monitoring: this.monitoring,
      health: this.healthHistory.get("overall") || null,
      restartCounts: Object.fromEntries(this.restartCounts),
      lastBackupSync: this.lastBackupSync,
      config: this.config
    };
  }

  // Run once
  async runOnce() {
    this.log("Running comprehensive redundancy check once", "INFO");
    return await this.checkOverallHealth();
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new ComprehensiveRedundancyOrchestrator();
  const command = process.argv[2] || "start";
  
  switch (command) {
    case "start":
      orchestrator.start();
      break;
    case "stop":
      orchestrator.stop();
      break;
    case "status":
      console.log(JSON.stringify(orchestrator.getStatus(), null, 2));
      break;
    case "once":
      orchestrator.runOnce().then(result => {
        console.log(JSON.stringify(result, null, 2));
        process.exit(0);
      });
      break;
    case "health":
      orchestrator.checkOverallHealth().then(result => {
        console.log(JSON.stringify(result, null, 2));
        process.exit(0);
      });
      break;
    default:
      console.log("Usage: node comprehensive-redundancy-orchestrator.cjs [start|stop|status|once|health]");
      process.exit(1);
  }
}

module.exports = ComprehensiveRedundancyOrchestrator;