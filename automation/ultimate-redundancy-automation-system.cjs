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
    this.logFile = path.join(this.logDir, "ultimate-redundancy-automation.log");
    this.statusFile = path.join(this.workspace, "automation/ultimate-redundancy-status.json");
    this.ensureLogDir();
    
    this.config = {
      // PM2 Redundancy Configuration
      pm2: {
        ecosystemFiles: [
          "ecosystem.pm2.cjs",
          "ecosystem-redundancy.pm2.cjs",
          "ecosystem.redundancy.cjs",
          "ecosystem.comprehensive-redundancy.cjs"
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
          "redundancy-automation-system",
          "comprehensive-redundancy-orchestrator",
          "ultimate-redundancy-master"
        ],
        healthCheckInterval: 30000,
        maxRestartAttempts: 5,
        restartDelay: 5000,
        memoryThreshold: 80,
        cpuThreshold: 90,
        autoRecovery: true
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
        retryDelay: 60000, // 1 minute
        autoTrigger: true,
        healthMonitoring: true
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
        retryDelay: 30000, // 30 seconds
        autoRecovery: true,
        manifestValidation: true
      },
      
      // System Configuration
      system: {
        healthCheckInterval: 60000, // 1 minute
        logRotation: true,
        maxLogSize: "100M",
        maxLogFiles: 10,
        performanceMonitoring: true,
        alertThresholds: {
          cpu: 85,
          memory: 80,
          disk: 90
        }
      }
    };
    
    this.status = {
      pm2: { healthy: false, processes: [], lastCheck: null },
      github: { healthy: false, workflows: [], lastCheck: null },
      netlify: { healthy: false, functions: [], lastCheck: null },
      system: { healthy: false, lastCheck: null },
      lastUpdate: new Date().toISOString()
    };
    
    this.isRunning = false;
    this.healthCheckInterval = null;
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async start() {
    if (this.isRunning) {
      this.log("System is already running", "WARN");
      return;
    }

    this.log("Starting Ultimate Redundancy Automation System...", "INFO");
    this.isRunning = true;

    // Initialize all redundancy systems
    await this.initializePM2Redundancy();
    await this.initializeGitHubActionsRedundancy();
    await this.initializeNetlifyFunctionsRedundancy();
    
    // Start health monitoring
    this.startHealthMonitoring();
    
    // Start performance monitoring
    this.startPerformanceMonitoring();
    
    this.log("Ultimate Redundancy Automation System started successfully", "INFO");
    this.updateStatus();
  }

  async stop() {
    if (!this.isRunning) {
      this.log("System is not running", "WARN");
      return;
    }

    this.log("Stopping Ultimate Redundancy Automation System...", "INFO");
    this.isRunning = false;

    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval);
      this.healthCheckInterval = null;
    }

    this.log("Ultimate Redundancy Automation System stopped", "INFO");
  }

  async initializePM2Redundancy() {
    this.log("Initializing PM2 Redundancy System...", "INFO");
    
    try {
      // Check if PM2 is installed
      const pm2Check = spawnSync("pm2", ["--version"], { stdio: "pipe" });
      if (pm2Check.status !== 0) {
        this.log("PM2 is not installed. Installing PM2...", "WARN");
        execSync("npm install -g pm2", { stdio: "inherit" });
      }

      // Start redundancy processes
      for (const ecosystemFile of this.config.pm2.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          try {
            execSync(`pm2 start ${ecosystemFile} --update-env`, { stdio: "inherit" });
            this.log(`Started PM2 ecosystem: ${ecosystemFile}`, "INFO");
          } catch (error) {
            this.log(`Failed to start PM2 ecosystem ${ecosystemFile}: ${error.message}`, "ERROR");
          }
        }
      }

      // Install PM2 logrotate
      try {
        execSync("pm2 install pm2-logrotate", { stdio: "inherit" });
        execSync("pm2 set pm2-logrotate:max_size 10M", { stdio: "inherit" });
        execSync("pm2 set pm2-logrotate:retain 30", { stdio: "inherit" });
        execSync("pm2 set pm2-logrotate:compress true", { stdio: "inherit" });
        execSync("pm2 set pm2-logrotate:workerInterval 60", { stdio: "inherit" });
        execSync("pm2 set pm2-logrotate:rotateInterval '0 0 * * *'", { stdio: "inherit" });
        this.log("PM2 logrotate configured successfully", "INFO");
      } catch (error) {
        this.log(`Failed to configure PM2 logrotate: ${error.message}`, "ERROR");
      }

      this.status.pm2.healthy = true;
      this.log("PM2 Redundancy System initialized successfully", "INFO");
    } catch (error) {
      this.log(`Failed to initialize PM2 Redundancy System: ${error.message}`, "ERROR");
      this.status.pm2.healthy = false;
    }
  }

  async initializeGitHubActionsRedundancy() {
    this.log("Initializing GitHub Actions Redundancy System...", "INFO");
    
    try {
      // Check if GitHub CLI is available
      const ghCheck = spawnSync("gh", ["--version"], { stdio: "pipe" });
      if (ghCheck.status !== 0) {
        this.log("GitHub CLI is not installed. Please install it manually.", "WARN");
      }

      // Validate workflow files
      for (const workflow of this.config.github.workflows) {
        const workflowFile = `.github/workflows/${workflow}.yml`;
        if (fs.existsSync(workflowFile)) {
          this.log(`GitHub workflow found: ${workflow}`, "INFO");
        } else {
          this.log(`GitHub workflow missing: ${workflow}`, "WARN");
        }
      }

      this.status.github.healthy = true;
      this.log("GitHub Actions Redundancy System initialized successfully", "INFO");
    } catch (error) {
      this.log(`Failed to initialize GitHub Actions Redundancy System: ${error.message}`, "ERROR");
      this.status.github.healthy = false;
    }
  }

  async initializeNetlifyFunctionsRedundancy() {
    this.log("Initializing Netlify Functions Redundancy System...", "INFO");
    
    try {
      // Check Netlify CLI
      const netlifyCheck = spawnSync("netlify", ["--version"], { stdio: "pipe" });
      if (netlifyCheck.status !== 0) {
        this.log("Netlify CLI is not installed. Installing...", "WARN");
        execSync("npm install -g netlify-cli", { stdio: "inherit" });
      }

      // Validate functions manifest
      const manifestPath = "netlify/functions/functions-manifest.json";
      if (fs.existsSync(manifestPath)) {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
        this.log(`Netlify functions manifest found with ${manifest.functions.length} functions`, "INFO");
        
        // Validate each function
        for (const func of this.config.netlify.functions) {
          if (manifest.functions.includes(func)) {
            this.log(`Netlify function validated: ${func}`, "INFO");
          } else {
            this.log(`Netlify function missing from manifest: ${func}`, "WARN");
          }
        }
      } else {
        this.log("Netlify functions manifest not found", "WARN");
      }

      this.status.netlify.healthy = true;
      this.log("Netlify Functions Redundancy System initialized successfully", "INFO");
    } catch (error) {
      this.log(`Failed to initialize Netlify Functions Redundancy System: ${error.message}`, "ERROR");
      this.status.netlify.healthy = false;
    }
  }

  startHealthMonitoring() {
    this.log("Starting health monitoring...", "INFO");
    
    this.healthCheckInterval = setInterval(async () => {
      if (!this.isRunning) return;
      
      await this.performHealthCheck();
    }, this.config.system.healthCheckInterval);
  }

  startPerformanceMonitoring() {
    this.log("Starting performance monitoring...", "INFO");
    
    setInterval(async () => {
      if (!this.isRunning) return;
      
      await this.monitorPerformance();
    }, 300000); // Every 5 minutes
  }

  async performHealthCheck() {
    this.log("Performing health check...", "INFO");
    
    try {
      // PM2 Health Check
      await this.checkPM2Health();
      
      // GitHub Actions Health Check
      await this.checkGitHubActionsHealth();
      
      // Netlify Functions Health Check
      await this.checkNetlifyFunctionsHealth();
      
      // System Health Check
      await this.checkSystemHealth();
      
      this.updateStatus();
      this.log("Health check completed", "INFO");
    } catch (error) {
      this.log(`Health check failed: ${error.message}`, "ERROR");
    }
  }

  async checkPM2Health() {
    try {
      const pm2Status = execSync("pm2 status --json", { encoding: "utf8" });
      const status = JSON.parse(pm2Status);
      
      this.status.pm2.processes = status.map(proc => ({
        name: proc.name,
        status: proc.pm2_env.status,
        memory: proc.monit.memory,
        cpu: proc.monit.cpu,
        uptime: proc.pm2_env.pm_uptime
      }));
      
      this.status.pm2.healthy = this.status.pm2.processes.every(proc => 
        proc.status === "online" && proc.memory < this.config.pm2.memoryThreshold
      );
      
      this.status.pm2.lastCheck = new Date().toISOString();
      
      if (!this.status.pm2.healthy) {
        this.log("PM2 health check failed - attempting recovery", "WARN");
        await this.recoverPM2();
      }
    } catch (error) {
      this.log(`PM2 health check failed: ${error.message}`, "ERROR");
      this.status.pm2.healthy = false;
    }
  }

  async checkGitHubActionsHealth() {
    try {
      // Check if workflows are properly configured
      let healthyWorkflows = 0;
      
      for (const workflow of this.config.github.workflows) {
        const workflowFile = `.github/workflows/${workflow}.yml`;
        if (fs.existsSync(workflowFile)) {
          healthyWorkflows++;
        }
      }
      
      this.status.github.workflows = this.config.github.workflows.map(workflow => ({
        name: workflow,
        exists: fs.existsSync(`.github/workflows/${workflow}.yml`),
        lastRun: null // Would need GitHub API to get actual last run
      }));
      
      this.status.github.healthy = healthyWorkflows === this.config.github.workflows.length;
      this.status.github.lastCheck = new Date().toISOString();
      
      if (!this.status.github.healthy) {
        this.log("GitHub Actions health check failed", "WARN");
      }
    } catch (error) {
      this.log(`GitHub Actions health check failed: ${error.message}`, "ERROR");
      this.status.github.healthy = false;
    }
  }

  async checkNetlifyFunctionsHealth() {
    try {
      const manifestPath = "netlify/functions/functions-manifest.json";
      
      if (fs.existsSync(manifestPath)) {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
        
        this.status.netlify.functions = this.config.netlify.functions.map(func => ({
          name: func,
          exists: manifest.functions.includes(func),
          lastRun: null
        }));
        
        this.status.netlify.healthy = this.status.netlify.functions.every(f => f.exists);
      } else {
        this.status.netlify.healthy = false;
      }
      
      this.status.netlify.lastCheck = new Date().toISOString();
      
      if (!this.status.netlify.healthy) {
        this.log("Netlify Functions health check failed", "WARN");
      }
    } catch (error) {
      this.log(`Netlify Functions health check failed: ${error.message}`, "ERROR");
      this.status.netlify.healthy = false;
    }
  }

  async checkSystemHealth() {
    try {
      // Check system resources
      const cpuUsage = await this.getCPUUsage();
      const memoryUsage = await this.getMemoryUsage();
      const diskUsage = await this.getDiskUsage();
      
      this.status.system.healthy = 
        cpuUsage < this.config.system.alertThresholds.cpu &&
        memoryUsage < this.config.system.alertThresholds.memory &&
        diskUsage < this.config.system.alertThresholds.disk;
      
      this.status.system.lastCheck = new Date().toISOString();
      
      if (!this.status.system.healthy) {
        this.log(`System health check failed - CPU: ${cpuUsage}%, Memory: ${memoryUsage}%, Disk: ${diskUsage}%`, "WARN");
      }
    } catch (error) {
      this.log(`System health check failed: ${error.message}`, "ERROR");
      this.status.system.healthy = false;
    }
  }

  async getCPUUsage() {
    try {
      const topOutput = execSync("top -bn1 | grep 'Cpu(s)' | awk '{print $2}' | cut -d'%' -f1", { encoding: "utf8" });
      return parseFloat(topOutput.trim());
    } catch {
      return 0;
    }
  }

  async getMemoryUsage() {
    try {
      const freeOutput = execSync("free | grep Mem | awk '{printf \"%.1f\", $3/$2 * 100.0}'", { encoding: "utf8" });
      return parseFloat(freeOutput.trim());
    } catch {
      return 0;
    }
  }

  async getDiskUsage() {
    try {
      const dfOutput = execSync("df / | tail -1 | awk '{print $5}' | cut -d'%' -f1", { encoding: "utf8" });
      return parseFloat(dfOutput.trim());
    } catch {
      return 0;
    }
  }

  async monitorPerformance() {
    try {
      const cpuUsage = await this.getCPUUsage();
      const memoryUsage = await this.getMemoryUsage();
      const diskUsage = await this.getDiskUsage();
      
      if (cpuUsage > this.config.system.alertThresholds.cpu ||
          memoryUsage > this.config.system.alertThresholds.memory ||
          diskUsage > this.config.system.alertThresholds.disk) {
        
        this.log(`Performance alert - CPU: ${cpuUsage}%, Memory: ${memoryUsage}%, Disk: ${diskUsage}%`, "WARN");
        
        // Take corrective actions
        if (cpuUsage > 90) {
          this.log("High CPU usage detected - optimizing processes", "WARN");
          await this.optimizeProcesses();
        }
        
        if (memoryUsage > 85) {
          this.log("High memory usage detected - cleaning up", "WARN");
          await this.cleanupMemory();
        }
      }
    } catch (error) {
      this.log(`Performance monitoring failed: ${error.message}`, "ERROR");
    }
  }

  async recoverPM2() {
    if (!this.config.pm2.autoRecovery) return;
    
    this.log("Attempting PM2 recovery...", "INFO");
    
    try {
      // Restart failed processes
      execSync("pm2 restart all", { stdio: "inherit" });
      this.log("PM2 recovery completed", "INFO");
    } catch (error) {
      this.log(`PM2 recovery failed: ${error.message}`, "ERROR");
    }
  }

  async optimizeProcesses() {
    this.log("Optimizing processes...", "INFO");
    
    try {
      // Restart PM2 processes to free up resources
      execSync("pm2 restart all", { stdio: "inherit" });
      this.log("Process optimization completed", "INFO");
    } catch (error) {
      this.log(`Process optimization failed: ${error.message}`, "ERROR");
    }
  }

  async cleanupMemory() {
    this.log("Cleaning up memory...", "INFO");
    
    try {
      // Force garbage collection if possible
      if (global.gc) {
        global.gc();
        this.log("Garbage collection completed", "INFO");
      }
      
      // Clear PM2 logs if they're too large
      execSync("pm2 flush", { stdio: "inherit" });
      this.log("Memory cleanup completed", "INFO");
    } catch (error) {
      this.log(`Memory cleanup failed: ${error.message}`, "ERROR");
    }
  }

  updateStatus() {
    this.status.lastUpdate = new Date().toISOString();
    
    try {
      fs.writeFileSync(this.statusFile, JSON.stringify(this.status, null, 2));
    } catch (error) {
      this.log(`Failed to update status file: ${error.message}`, "ERROR");
    }
  }

  getStatus() {
    return this.status;
  }

  async runCommand(command, args = []) {
    return new Promise((resolve, reject) => {
      const child = spawn(command, args, { stdio: "pipe" });
      let stdout = "";
      let stderr = "";
      
      child.stdout.on("data", (data) => {
        stdout += data.toString();
      });
      
      child.stderr.on("data", (data) => {
        stderr += data.toString();
      });
      
      child.on("close", (code) => {
        if (code === 0) {
          resolve(stdout);
        } else {
          reject(new Error(`Command failed with code ${code}: ${stderr}`));
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
  const system = new UltimateRedundancyAutomationSystem();
  const command = process.argv[2];
  
  switch (command) {
    case "start":
      system.start().catch(console.error);
      break;
    case "stop":
      system.stop().catch(console.error);
      break;
    case "status":
      console.log(JSON.stringify(system.getStatus(), null, 2));
      break;
    case "health":
      system.performHealthCheck().catch(console.error);
      break;
    default:
      console.log("Usage: node ultimate-redundancy-automation-system.cjs [start|stop|status|health]");
      process.exit(1);
  }
}

module.exports = UltimateRedundancyAutomationSystem;