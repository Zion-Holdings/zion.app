#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class UltimateRedundancyAutomationSystem {
  constructor() {
    this.config = {
      pm2: {
        ecosystemFiles: [
          "ecosystem.pm2.cjs",
          "ecosystem.redundancy.cjs", 
          "ecosystem.comprehensive-redundancy.cjs"
        ],
        processes: [
          "zion-auto-sync",
          "zion-auto-sync-cron",
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
        backupTriggers: true,
        workflowValidation: true,
        apiHealthCheck: true,
        autoHealing: true
      },
      netlifyFunctions: {
        manifestFile: "netlify/functions/functions-manifest.json",
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
        maxFailureThreshold: 2,
        autoRegenerate: true,
        deploymentCheck: true,
        logRotation: true,
        functionMonitoring: true
      },
      logging: {
        logDir: "automation/logs",
        maxLogSize: 10 * 1024 * 1024,
        maxLogFiles: 30,
        logLevel: "INFO"
      },
      monitoring: {
        enabled: true,
        interval: 30000,
        alertThreshold: 3,
        autoRestart: true,
        loadBalancing: true,
        failover: true
      },
      recovery: {
        autoRecovery: true,
        maxRecoveryAttempts: 5,
        recoveryDelay: 10000,
        healthCheckBeforeRecovery: true
      }
    };
    
    this.ensureLogDirectory();
    this.initializeMonitoring();
    this.startComprehensiveMonitoring();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.config.logging.logDir)) {
      fs.mkdirSync(this.config.logging.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    const logFile = path.join(this.config.logging.logDir, `ultimate-redundancy-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logEntry + "\n");
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: process.cwd(),
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 20,
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

  async checkPM2UltimateHealth() {
    this.log("🔍 Checking ultimate PM2 process health...");
    
    try {
      const result = await this.runCommand("pm2", ["status", "--no-daemon"]);
      
      if (result.status !== 0) {
        this.log("❌ PM2 status check failed", "ERROR");
        return false;
      }

      const processes = this.config.pm2.processes;
      let healthyProcesses = 0;
      let failedProcesses = [];

      for (const processName of processes) {
        const processCheck = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
        
        if (processCheck.status === 0 && processCheck.stdout.includes("online")) {
          healthyProcesses++;
        } else {
          failedProcesses.push(processName);
        }
      }

      this.log(`📊 PM2 Health: ${healthyProcesses}/${processes.length} processes healthy`);
      
      if (failedProcesses.length > 0) {
        this.log(`⚠️ Failed processes: ${failedProcesses.join(", ")}`, "WARN");
        return false;
      }

      return true;
    } catch (error) {
      this.log(`❌ PM2 health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkGitHubActionsUltimateHealth() {
    this.log("🔍 Checking ultimate GitHub Actions health...");
    
    try {
      const workflows = this.config.githubActions.workflows;
      let healthyWorkflows = 0;
      let failedWorkflows = [];

      for (const workflow of workflows) {
        if (fs.existsSync(workflow)) {
          try {
            const content = fs.readFileSync(workflow, 'utf8');
            if (content.includes('name:') && content.includes('on:')) {
              healthyWorkflows++;
            } else {
              failedWorkflows.push(workflow);
            }
          } catch (error) {
            failedWorkflows.push(workflow);
          }
        } else {
          failedWorkflows.push(workflow);
        }
      }

      this.log(`📊 GitHub Actions Health: ${healthyWorkflows}/${workflows.length} workflows healthy`);
      
      if (failedWorkflows.length > 0) {
        this.log(`⚠️ Failed workflows: ${failedWorkflows.join(", ")}`, "WARN");
        return false;
      }

      return true;
    } catch (error) {
      this.log(`❌ GitHub Actions health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkNetlifyFunctionsUltimateHealth() {
    this.log("🔍 Checking ultimate Netlify Functions health...");
    
    try {
      const manifestFile = this.config.netlifyFunctions.manifestFile;
      
      if (!fs.existsSync(manifestFile)) {
        this.log("❌ Netlify functions manifest not found", "ERROR");
        return false;
      }

      const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
      const functions = manifest.functions || [];
      
      if (functions.length === 0) {
        this.log("⚠️ No Netlify functions found in manifest", "WARN");
        return false;
      }

      this.log(`📊 Netlify Functions Health: ${functions.length} functions found`);
      
      // Check if functions are accessible
      let accessibleFunctions = 0;
      for (const funcName of functions) {
        const functionPath = path.join("netlify/functions", funcName);
        if (fs.existsSync(functionPath) || fs.existsSync(functionPath + ".js")) {
          accessibleFunctions++;
        }
      }

      this.log(`📊 Netlify Functions Accessibility: ${accessibleFunctions}/${functions.length} functions accessible`);
      
      return accessibleFunctions > 0;
    } catch (error) {
      this.log(`❌ Netlify Functions health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async recoverPM2System() {
    this.log("🔄 Attempting PM2 system recovery...");
    
    try {
      // Stop all processes
      await this.runCommand("pm2", ["stop", "all"]);
      
      // Delete all processes
      await this.runCommand("pm2", ["delete", "all"]);
      
      // Start comprehensive redundancy system
      const result = await this.runCommand("pm2", ["start", "ecosystem.comprehensive-redundancy.cjs"]);
      
      if (result.status === 0) {
        this.log("✅ PM2 system recovery successful");
        return true;
      } else {
        this.log("❌ PM2 system recovery failed", "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ PM2 recovery error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async recoverGitHubActionsSystem() {
    this.log("🔄 Attempting GitHub Actions system recovery...");
    
    try {
      // Check if backup workflows exist and are valid
      const backupWorkflows = [
        ".github/workflows/marketing-sync-backup.yml",
        ".github/workflows/sync-health-backup.yml"
      ];

      for (const backupWorkflow of backupWorkflows) {
        if (fs.existsSync(backupWorkflow)) {
          const backupContent = fs.readFileSync(backupWorkflow, 'utf8');
          const originalWorkflow = backupWorkflow.replace('-backup.yml', '.yml');
          
          if (fs.existsSync(originalWorkflow)) {
            fs.writeFileSync(originalWorkflow, backupContent);
            this.log(`✅ Restored ${originalWorkflow} from backup`);
          }
        }
      }

      return true;
    } catch (error) {
      this.log(`❌ GitHub Actions recovery error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async recoverNetlifyFunctionsSystem() {
    this.log("🔄 Attempting Netlify Functions system recovery...");
    
    try {
      // Regenerate functions manifest
      const result = await this.runCommand("node", ["scripts/generate-netlify-functions-manifest.cjs"]);
      
      if (result.status === 0) {
        this.log("✅ Netlify Functions manifest regeneration successful");
        return true;
      } else {
        this.log("❌ Netlify Functions manifest regeneration failed", "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Netlify Functions recovery error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performComprehensiveHealthCheck() {
    this.log("🚀 Starting comprehensive health check...");
    
    const pm2Health = await this.checkPM2UltimateHealth();
    const githubHealth = await this.checkGitHubActionsUltimateHealth();
    const netlifyHealth = await this.checkNetlifyFunctionsUltimateHealth();
    
    const overallHealth = pm2Health && githubHealth && netlifyHealth;
    
    this.log(`📊 Overall System Health: ${overallHealth ? '✅ HEALTHY' : '❌ UNHEALTHY'}`);
    
    if (!overallHealth) {
      this.log("⚠️ System health issues detected, initiating recovery...", "WARN");
      
      if (!pm2Health) {
        await this.recoverPM2System();
      }
      
      if (!githubHealth) {
        await this.recoverGitHubActionsSystem();
      }
      
      if (!netlifyHealth) {
        await this.recoverNetlifyFunctionsSystem();
      }
      
      // Perform another health check after recovery
      setTimeout(() => this.performComprehensiveHealthCheck(), 30000);
    }
    
    return overallHealth;
  }

  initializeMonitoring() {
    this.log("🔧 Initializing ultimate redundancy monitoring...");
    
    // Set up process monitoring
    process.on('SIGINT', () => {
      this.log("🛑 Shutting down ultimate redundancy system...");
      process.exit(0);
    });
    
    process.on('SIGTERM', () => {
      this.log("🛑 Shutting down ultimate redundancy system...");
      process.exit(0);
    });
    
    // Set up error handling
    process.on('uncaughtException', (error) => {
      this.log(`❌ Uncaught exception: ${error.message}`, "ERROR");
    });
    
    process.on('unhandledRejection', (reason, promise) => {
      this.log(`❌ Unhandled rejection at: ${promise}, reason: ${reason}`, "ERROR");
    });
  }

  startComprehensiveMonitoring() {
    this.log("🚀 Starting ultimate redundancy monitoring system...");
    
    // Initial health check
    this.performComprehensiveHealthCheck();
    
    // Set up periodic health checks
    setInterval(() => {
      this.performComprehensiveHealthCheck();
    }, this.config.monitoring.interval);
    
    // Set up log rotation
    setInterval(() => {
      this.rotateLogs();
    }, 24 * 60 * 60 * 1000); // Daily
    
    this.log("✅ Ultimate redundancy monitoring system started successfully");
  }

  rotateLogs() {
    try {
      const logDir = this.config.logging.logDir;
      const files = fs.readdirSync(logDir);
      
      files.forEach(file => {
        if (file.endsWith('.log')) {
          const filePath = path.join(logDir, file);
          const stats = fs.statSync(filePath);
          const fileSize = stats.size;
          
          if (fileSize > this.config.logging.maxLogSize) {
            const backupFile = filePath + '.backup';
            fs.renameSync(filePath, backupFile);
            this.log(`📁 Rotated log file: ${file} -> ${file}.backup`);
          }
        }
      });
    } catch (error) {
      this.log(`❌ Log rotation error: ${error.message}`, "ERROR");
    }
  }

  async getSystemStatus() {
    const pm2Health = await this.checkPM2UltimateHealth();
    const githubHealth = await this.checkGitHubActionsUltimateHealth();
    const netlifyHealth = await this.checkNetlifyFunctionsUltimateHealth();
    
    return {
      timestamp: new Date().toISOString(),
      overall: pm2Health && githubHealth && netlifyHealth,
      pm2: pm2Health,
      githubActions: githubHealth,
      netlifyFunctions: netlifyHealth,
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      config: this.config
    };
  }
}

// Main execution
if (require.main === module) {
  const system = new UltimateRedundancyAutomationSystem();
  
  // Handle command line arguments
  const args = process.argv.slice(2);
  
  if (args.includes('status')) {
    system.getSystemStatus().then(status => {
      console.log(JSON.stringify(status, null, 2));
      process.exit(0);
    });
  } else if (args.includes('health-check')) {
    system.performComprehensiveHealthCheck().then(health => {
      process.exit(health ? 0 : 1);
    });
  } else if (args.includes('recover')) {
    Promise.all([
      system.recoverPM2System(),
      system.recoverGitHubActionsSystem(),
      system.recoverNetlifyFunctionsSystem()
    ]).then(results => {
      const allRecovered = results.every(result => result);
      process.exit(allRecovered ? 0 : 1);
    });
  } else {
    // Default: start the system
    console.log("🚀 Ultimate Redundancy Automation System starting...");
  }
}

module.exports = UltimateRedundancyAutomationSystem;