#!/usr/bin/env node
"use strict";

const { spawnSync, execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class UltimateRedundancyMaster {
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
        healthCheckInterval: 300000, // 5 minutes
        alertThreshold: 3,
        logRotation: true,
        performanceMetrics: true,
        errorTracking: true
      }
    };
    
    this.status = {
      pm2: { healthy: false, processes: [], lastCheck: null },
      githubActions: { healthy: false, workflows: [], lastCheck: null },
      netlifyFunctions: { healthy: false, functions: [], lastCheck: null },
      overall: { healthy: false, lastCheck: null }
    };
    
    this.logger = this.createLogger();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  createLogger() {
    const logFile = path.join(this.logDir, "ultimate-redundancy-master.log");
    return {
      info: (msg) => this.log("INFO", msg, logFile),
      warn: (msg) => this.log("WARN", msg, logFile),
      error: (msg) => this.log("ERROR", msg, logFile),
      debug: (msg) => this.log("DEBUG", msg, logFile)
    };
  }

  log(level, message, logFile) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    try {
      fs.appendFileSync(logFile, logEntry);
    } catch (err) {
      console.error(`Failed to write to log file: ${err.message}`);
    }
    
    console.log(`[${level}] ${message}`);
  }

  async start() {
    this.logger.info("Starting Ultimate Redundancy Master System");
    
    // Initialize all redundancy systems
    await this.initializePM2Redundancy();
    await this.initializeGitHubActionsRedundancy();
    await this.initializeNetlifyFunctionsRedundancy();
    
    // Start monitoring
    this.startMonitoring();
    
    this.logger.info("Ultimate Redundancy Master System started successfully");
  }

  async initializePM2Redundancy() {
    this.logger.info("Initializing PM2 Redundancy System");
    
    try {
      // Check if PM2 is installed
      const pm2Check = spawnSync("pm2", ["--version"], { stdio: "pipe" });
      if (pm2Check.status !== 0) {
        this.logger.error("PM2 is not installed. Installing PM2...");
        execSync("npm install -g pm2", { stdio: "inherit" });
      }

      // Start comprehensive redundancy ecosystem
      const ecosystemFile = "ecosystem.comprehensive-redundancy.cjs";
      if (fs.existsSync(ecosystemFile)) {
        this.logger.info(`Starting PM2 ecosystem: ${ecosystemFile}`);
        execSync(`pm2 start ${ecosystemFile}`, { stdio: "inherit" });
        
        // Install PM2 logrotate
        execSync("pm2 install pm2-logrotate", { stdio: "inherit" });
        execSync("pm2 set pm2-logrotate:max_size 10M", { stdio: "inherit" });
        execSync("pm2 set pm2-logrotate:retain 30", { stdio: "inherit" });
        execSync("pm2 set pm2-logrotate:compress true", { stdio: "inherit" });
        
        // Save PM2 configuration
        execSync("pm2 save", { stdio: "inherit" });
      } else {
        this.logger.warn(`Ecosystem file ${ecosystemFile} not found`);
      }
      
      this.status.pm2.healthy = true;
      this.logger.info("PM2 Redundancy System initialized successfully");
    } catch (error) {
      this.logger.error(`Failed to initialize PM2 Redundancy: ${error.message}`);
      this.status.pm2.healthy = false;
    }
  }

  async initializeGitHubActionsRedundancy() {
    this.logger.info("Initializing GitHub Actions Redundancy System");
    
    try {
      // Validate workflow files
      for (const workflow of this.config.githubActions.workflows) {
        if (fs.existsSync(workflow)) {
          this.logger.info(`Workflow file found: ${workflow}`);
        } else {
          this.logger.warn(`Workflow file missing: ${workflow}`);
        }
      }
      
      // Check if we can access GitHub API
      const gitRemote = execSync("git remote get-url origin", { encoding: "utf8" }).trim();
      this.logger.info(`Git remote: ${gitRemote}`);
      
      this.status.githubActions.healthy = true;
      this.logger.info("GitHub Actions Redundancy System initialized successfully");
    } catch (error) {
      this.logger.error(`Failed to initialize GitHub Actions Redundancy: ${error.message}`);
      this.status.githubActions.healthy = false;
    }
  }

  async initializeNetlifyFunctionsRedundancy() {
    this.logger.info("Initializing Netlify Functions Redundancy System");
    
    try {
      // Check manifest file
      if (fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        const manifest = JSON.parse(fs.readFileSync(this.config.netlifyFunctions.manifestFile, "utf8"));
        this.logger.info(`Netlify Functions manifest found with ${manifest.functions.length} functions`);
        
        // Validate function files
        for (const funcName of this.config.netlifyFunctions.functions) {
          const funcFile = path.join("netlify/functions", `${funcName}.js`);
          if (fs.existsSync(funcFile)) {
            this.logger.debug(`Function file found: ${funcFile}`);
          } else {
            this.logger.warn(`Function file missing: ${funcFile}`);
          }
        }
      } else {
        this.logger.warn("Netlify Functions manifest not found");
      }
      
      this.status.netlifyFunctions.healthy = true;
      this.logger.info("Netlify Functions Redundancy System initialized successfully");
    } catch (error) {
      this.logger.error(`Failed to initialize Netlify Functions Redundancy: ${error.message}`);
      this.status.netlifyFunctions.healthy = false;
    }
  }

  startMonitoring() {
    this.logger.info("Starting monitoring systems");
    
    // PM2 monitoring
    setInterval(() => this.monitorPM2(), this.config.pm2.healthCheckInterval);
    
    // GitHub Actions monitoring
    setInterval(() => this.monitorGitHubActions(), this.config.githubActions.healthCheckInterval);
    
    // Netlify Functions monitoring
    setInterval(() => this.monitorNetlifyFunctions(), this.config.netlifyFunctions.healthCheckInterval);
    
    // Overall health monitoring
    setInterval(() => this.monitorOverallHealth(), this.config.monitoring.healthCheckInterval);
    
    this.logger.info("Monitoring systems started");
  }

  async monitorPM2() {
    try {
      const pm2Status = execSync("pm2 jlist", { encoding: "utf8" });
      const processes = JSON.parse(pm2Status);
      
      this.status.pm2.processes = processes;
      this.status.pm2.lastCheck = new Date();
      
      // Check critical processes
      const criticalProcesses = this.config.pm2.criticalProcesses;
      const runningProcesses = processes.filter(p => p.pm2_env.status === "online");
      
      const missingProcesses = criticalProcesses.filter(name => 
        !runningProcesses.some(p => p.name === name)
      );
      
      if (missingProcesses.length > 0) {
        this.logger.warn(`Missing critical PM2 processes: ${missingProcesses.join(", ")}`);
        await this.recoverPM2Processes(missingProcesses);
      } else {
        this.status.pm2.healthy = true;
        this.logger.debug("PM2 system healthy");
      }
    } catch (error) {
      this.logger.error(`PM2 monitoring failed: ${error.message}`);
      this.status.pm2.healthy = false;
    }
  }

  async monitorGitHubActions() {
    try {
      // Check workflow files
      const workflowStatus = [];
      for (const workflow of this.config.githubActions.workflows) {
        if (fs.existsSync(workflow)) {
          const stats = fs.statSync(workflow);
          workflowStatus.push({
            name: workflow,
            exists: true,
            lastModified: stats.mtime,
            size: stats.size
          });
        } else {
          workflowStatus.push({
            name: workflow,
            exists: false
          });
        }
      }
      
      this.status.githubActions.workflows = workflowStatus;
      this.status.githubActions.lastCheck = new Date();
      
      // Check if any workflows are missing
      const missingWorkflows = workflowStatus.filter(w => !w.exists);
      if (missingWorkflows.length > 0) {
        this.logger.warn(`Missing workflow files: ${missingWorkflows.map(w => w.name).join(", ")}`);
        await this.recoverGitHubActions();
      } else {
        this.status.githubActions.healthy = true;
        this.logger.debug("GitHub Actions system healthy");
      }
    } catch (error) {
      this.logger.error(`GitHub Actions monitoring failed: ${error.message}`);
      this.status.githubActions.healthy = false;
    }
  }

  async monitorNetlifyFunctions() {
    try {
      if (fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        const manifest = JSON.parse(fs.readFileSync(this.config.netlifyFunctions.manifestFile, "utf8"));
        
        this.status.netlifyFunctions.functions = manifest.functions;
        this.status.netlifyFunctions.lastCheck = new Date();
        
        // Check if manifest is recent (within last hour)
        const manifestAge = Date.now() - new Date(manifest.generatedAt).getTime();
        if (manifestAge > 3600000) { // 1 hour
          this.logger.warn("Netlify Functions manifest is stale, regenerating...");
          await this.regenerateNetlifyFunctionsManifest();
        } else {
          this.status.netlifyFunctions.healthy = true;
          this.logger.debug("Netlify Functions system healthy");
        }
      } else {
        this.logger.warn("Netlify Functions manifest not found, regenerating...");
        await this.regenerateNetlifyFunctionsManifest();
      }
    } catch (error) {
      this.logger.error(`Netlify Functions monitoring failed: ${error.message}`);
      this.status.netlifyFunctions.healthy = false;
    }
  }

  async monitorOverallHealth() {
    this.status.overall.lastCheck = new Date();
    
    const allHealthy = this.status.pm2.healthy && 
                      this.status.githubActions.healthy && 
                      this.status.netlifyFunctions.healthy;
    
    this.status.overall.healthy = allHealthy;
    
    if (allHealthy) {
      this.logger.info("All redundancy systems are healthy");
    } else {
      this.logger.warn("Some redundancy systems are unhealthy, attempting recovery...");
      await this.performSystemRecovery();
    }
    
    // Generate health report
    this.generateHealthReport();
  }

  async recoverPM2Processes(missingProcesses) {
    this.logger.info(`Attempting to recover ${missingProcesses.length} PM2 processes`);
    
    try {
      // Restart comprehensive redundancy ecosystem
      execSync("pm2 restart ecosystem.comprehensive-redundancy.cjs", { stdio: "inherit" });
      
      // Wait for processes to start
      await new Promise(resolve => setTimeout(resolve, 10000));
      
      // Check if processes are now running
      const pm2Status = execSync("pm2 jlist", { encoding: "utf8" });
      const processes = JSON.parse(pm2Status);
      
      const stillMissing = missingProcesses.filter(name => 
        !processes.some(p => p.name === name && p.pm2_env.status === "online")
      );
      
      if (stillMissing.length > 0) {
        this.logger.error(`Failed to recover processes: ${stillMissing.join(", ")}`);
        this.status.pm2.healthy = false;
      } else {
        this.logger.info("PM2 processes recovered successfully");
        this.status.pm2.healthy = true;
      }
    } catch (error) {
      this.logger.error(`PM2 recovery failed: ${error.message}`);
      this.status.pm2.healthy = false;
    }
  }

  async recoverGitHubActions() {
    this.logger.info("Attempting to recover GitHub Actions workflows");
    
    try {
      // Check if backup workflows exist
      const backupWorkflows = [
        ".github/workflows/marketing-sync-backup.yml",
        ".github/workflows/sync-health-backup.yml"
      ];
      
      for (const backup of backupWorkflows) {
        if (fs.existsSync(backup)) {
          const original = backup.replace("-backup.yml", ".yml");
          if (!fs.existsSync(original)) {
            this.logger.info(`Restoring workflow from backup: ${backup} -> ${original}`);
            fs.copyFileSync(backup, original);
          }
        }
      }
      
      this.status.githubActions.healthy = true;
      this.logger.info("GitHub Actions workflows recovered");
    } catch (error) {
      this.logger.error(`GitHub Actions recovery failed: ${error.message}`);
      this.status.githubActions.healthy = false;
    }
  }

  async regenerateNetlifyFunctionsManifest() {
    this.logger.info("Regenerating Netlify Functions manifest");
    
    try {
      // Run the manifest generation script
      execSync("npm run netlify:manifest", { stdio: "inherit" });
      
      // Verify manifest was generated
      if (fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        this.status.netlifyFunctions.healthy = true;
        this.logger.info("Netlify Functions manifest regenerated successfully");
      } else {
        this.logger.error("Failed to regenerate Netlify Functions manifest");
        this.status.netlifyFunctions.healthy = false;
      }
    } catch (error) {
      this.logger.error(`Netlify Functions manifest regeneration failed: ${error.message}`);
      this.status.netlifyFunctions.healthy = false;
    }
  }

  async performSystemRecovery() {
    this.logger.info("Performing system-wide recovery");
    
    try {
      // Restart PM2 ecosystem
      if (!this.status.pm2.healthy) {
        this.logger.info("Restarting PM2 ecosystem");
        execSync("pm2 restart ecosystem.comprehensive-redundancy.cjs", { stdio: "inherit" });
      }
      
      // Regenerate Netlify Functions manifest
      if (!this.status.netlifyFunctions.healthy) {
        await this.regenerateNetlifyFunctionsManifest();
      }
      
      // Check GitHub Actions
      if (!this.status.githubActions.healthy) {
        await this.recoverGitHubActions();
      }
      
      this.logger.info("System recovery completed");
    } catch (error) {
      this.logger.error(`System recovery failed: ${error.message}`);
    }
  }

  generateHealthReport() {
    const report = {
      timestamp: new Date().toISOString(),
      overall: this.status.overall,
      pm2: {
        healthy: this.status.pm2.healthy,
        processCount: this.status.pm2.processes.length,
        lastCheck: this.status.pm2.lastCheck
      },
      githubActions: {
        healthy: this.status.githubActions.healthy,
        workflowCount: this.status.githubActions.workflows.length,
        lastCheck: this.status.githubActions.lastCheck
      },
      netlifyFunctions: {
        healthy: this.status.netlifyFunctions.healthy,
        functionCount: this.status.netlifyFunctions.functions.length,
        lastCheck: this.status.netlifyFunctions.lastCheck
      }
    };
    
    const reportFile = path.join(this.logDir, "health-report.json");
    try {
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      this.logger.debug("Health report generated");
    } catch (error) {
      this.logger.error(`Failed to generate health report: ${error.message}`);
    }
  }

  getStatus() {
    return this.status;
  }

  async stop() {
    this.logger.info("Stopping Ultimate Redundancy Master System");
    
    // Stop PM2 processes
    try {
      execSync("pm2 stop ecosystem.comprehensive-redundancy.cjs", { stdio: "inherit" });
    } catch (error) {
      this.logger.warn(`Failed to stop PM2 processes: ${error.message}`);
    }
    
    this.logger.info("Ultimate Redundancy Master System stopped");
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new UltimateRedundancyMaster();
  
  const command = process.argv[2];
  
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
    case "health":
      orchestrator.monitorOverallHealth();
      break;
    default:
      console.log("Usage: node ultimate-redundancy-master.cjs [start|stop|status|health]");
      process.exit(1);
  }
}

module.exports = UltimateRedundancyMaster;