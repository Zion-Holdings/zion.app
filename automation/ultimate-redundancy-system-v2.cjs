#!/usr/bin/env node
"use strict";

const { spawnSync, execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class UltimateRedundancySystemV2 {
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
          "ecosystem.redundancy.pm2.cjs",
          "ecosystem-ultimate-redundancy.pm2.cjs"
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
          "redundancy-build-monitor",
          "continuous-build-monitor",
          "build-failure-recovery",
          "master-build-orchestrator",
          "pre-build-health-check",
          "nextjs-page-validator"
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
        backupWorkflows: [
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
          "automation/redundancy-git-sync.cjs",
          "automation/enhanced-git-sync-orchestrator.cjs"
        ],
        backupTriggers: true,
        workflowValidation: true,
        apiHealthCheck: true,
        autoRecovery: true
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
        autoDeploy: true,
        logRotation: true,
        performanceMonitoring: true
      },
      build: {
        healthCheckInterval: 300000,
        maxBuildFailures: 3,
        autoRecovery: true,
        buildTimeout: 300000,
        preBuildChecks: true,
        postBuildValidation: true
      },
      monitoring: {
        dashboardEnabled: true,
        alertThreshold: 3,
        logRetention: 30,
        performanceMetrics: true,
        healthReporting: true
      }
    };
    
    this.status = {
      pm2: { healthy: true, lastCheck: null, failures: 0 },
      githubActions: { healthy: true, lastCheck: null, failures: 0 },
      netlifyFunctions: { healthy: true, lastCheck: null, failures: 0 },
      build: { healthy: true, lastCheck: null, failures: 0 }
    };
    
    this.logFile = path.join(this.logDir, "ultimate-redundancy-v2.log");
  }

  ensureLogDirectory() {
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

  async start() {
    this.log("Starting Ultimate Redundancy System V2...");
    
    // Start all monitoring systems
    await this.startPM2Redundancy();
    await this.startGitHubActionsRedundancy();
    await this.startNetlifyFunctionsRedundancy();
    await this.startBuildMonitoring();
    
    // Start the main monitoring loop
    this.startMonitoringLoop();
    
    this.log("Ultimate Redundancy System V2 started successfully");
  }

  async startPM2Redundancy() {
    this.log("Starting PM2 Redundancy System...");
    
    try {
      // Ensure all ecosystem files are present
      for (const ecosystemFile of this.config.pm2.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          this.log(`Found ecosystem file: ${ecosystemFile}`);
        }
      }
      
      // Start the comprehensive redundancy system
      const result = spawnSync("pm2", ["start", "ecosystem.comprehensive-redundancy.cjs", "--update-env"], {
        cwd: this.workspace,
        stdio: "pipe"
      });
      
      if (result.status === 0) {
        this.log("PM2 Redundancy System started successfully");
        this.status.pm2.healthy = true;
      } else {
        this.log(`Failed to start PM2 Redundancy System: ${result.stderr?.toString()}`, "ERROR");
        this.status.pm2.healthy = false;
      }
    } catch (error) {
      this.log(`Error starting PM2 Redundancy System: ${error.message}`, "ERROR");
      this.status.pm2.healthy = false;
    }
  }

  async startGitHubActionsRedundancy() {
    this.log("Starting GitHub Actions Redundancy System...");
    
    try {
      // Validate all workflows exist
      for (const workflow of this.config.githubActions.workflows) {
        if (fs.existsSync(workflow)) {
          this.log(`Found workflow: ${workflow}`);
        } else {
          this.log(`Missing workflow: ${workflow}`, "WARN");
        }
      }
      
      // Start the enhanced GitHub Actions redundancy manager
      const result = spawnSync("node", ["automation/enhanced-github-actions-redundancy.cjs"], {
        cwd: this.workspace,
        stdio: "pipe"
      });
      
      if (result.status === 0) {
        this.log("GitHub Actions Redundancy System started successfully");
        this.status.githubActions.healthy = true;
      } else {
        this.log(`Failed to start GitHub Actions Redundancy System: ${result.stderr?.toString()}`, "ERROR");
        this.status.githubActions.healthy = false;
      }
    } catch (error) {
      this.log(`Error starting GitHub Actions Redundancy System: ${error.message}`, "ERROR");
      this.status.githubActions.healthy = false;
    }
  }

  async startNetlifyFunctionsRedundancy() {
    this.log("Starting Netlify Functions Redundancy System...");
    
    try {
      // Check if functions manifest exists
      if (fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        this.log("Found Netlify functions manifest");
        
        const manifest = JSON.parse(fs.readFileSync(this.config.netlifyFunctions.manifestFile, "utf8"));
        this.log(`Found ${manifest.functions?.length || 0} Netlify functions`);
      }
      
      // Start the enhanced Netlify functions redundancy manager
      const result = spawnSync("node", ["automation/enhanced-netlify-functions-redundancy.cjs"], {
        cwd: this.workspace,
        stdio: "pipe"
      });
      
      if (result.status === 0) {
        this.log("Netlify Functions Redundancy System started successfully");
        this.status.netlifyFunctions.healthy = true;
      } else {
        this.log(`Failed to start Netlify Functions Redundancy System: ${result.stderr?.toString()}`, "ERROR");
        this.status.netlifyFunctions.healthy = false;
      }
    } catch (error) {
      this.log(`Error starting Netlify Functions Redundancy System: ${error.message}`, "ERROR");
      this.status.netlifyFunctions.healthy = false;
    }
  }

  async startBuildMonitoring() {
    this.log("Starting Build Monitoring System...");
    
    try {
      // Start the continuous build monitor
      const result = spawnSync("node", ["automation/continuous-build-monitor.cjs"], {
        cwd: this.workspace,
        stdio: "pipe"
      });
      
      if (result.status === 0) {
        this.log("Build Monitoring System started successfully");
        this.status.build.healthy = true;
      } else {
        this.log(`Failed to start Build Monitoring System: ${result.stderr?.toString()}`, "ERROR");
        this.status.build.healthy = false;
      }
    } catch (error) {
      this.log(`Error starting Build Monitoring System: ${error.message}`, "ERROR");
      this.status.build.healthy = false;
    }
  }

  startMonitoringLoop() {
    setInterval(() => {
      this.performHealthChecks();
    }, 60000); // Check every minute
    
    this.log("Monitoring loop started");
  }

  async performHealthChecks() {
    this.log("Performing health checks...");
    
    await this.checkPM2Health();
    await this.checkGitHubActionsHealth();
    await this.checkNetlifyFunctionsHealth();
    await this.checkBuildHealth();
    
    this.generateHealthReport();
  }

  async checkPM2Health() {
    try {
      const result = spawnSync("pm2", ["status"], { cwd: this.workspace, stdio: "pipe" });
      
      if (result.status === 0) {
        const output = result.stdout.toString();
        
        // Check if critical processes are running
        let criticalProcessesRunning = 0;
        for (const process of this.config.pm2.criticalProcesses) {
          if (output.includes(process)) {
            criticalProcessesRunning++;
          }
        }
        
        if (criticalProcessesRunning >= this.config.pm2.criticalProcesses.length * 0.8) {
          this.status.pm2.healthy = true;
          this.status.pm2.failures = 0;
        } else {
          this.status.pm2.healthy = false;
          this.status.pm2.failures++;
          this.log(`PM2 health check failed: Only ${criticalProcessesRunning}/${this.config.pm2.criticalProcesses.length} critical processes running`, "WARN");
        }
      } else {
        this.status.pm2.healthy = false;
        this.status.pm2.failures++;
        this.log("PM2 health check failed: Unable to get status", "ERROR");
      }
      
      this.status.pm2.lastCheck = new Date();
    } catch (error) {
      this.log(`PM2 health check error: ${error.message}`, "ERROR");
      this.status.pm2.healthy = false;
      this.status.pm2.failures++;
    }
  }

  async checkGitHubActionsHealth() {
    try {
      // Check if workflow files exist and are valid
      let validWorkflows = 0;
      for (const workflow of this.config.githubActions.workflows) {
        if (fs.existsSync(workflow)) {
          try {
            const content = fs.readFileSync(workflow, "utf8");
            if (content.includes("name:") && content.includes("on:")) {
              validWorkflows++;
            }
          } catch (error) {
            this.log(`Failed to read workflow ${workflow}: ${error.message}`, "WARN");
          }
        }
      }
      
      if (validWorkflows >= this.config.githubActions.workflows.length * 0.8) {
        this.status.githubActions.healthy = true;
        this.status.githubActions.failures = 0;
      } else {
        this.status.githubActions.healthy = false;
        this.status.githubActions.failures++;
        this.log(`GitHub Actions health check failed: Only ${validWorkflows}/${this.config.githubActions.workflows.length} valid workflows`, "WARN");
      }
      
      this.status.githubActions.lastCheck = new Date();
    } catch (error) {
      this.log(`GitHub Actions health check error: ${error.message}`, "ERROR");
      this.status.githubActions.healthy = false;
      this.status.githubActions.failures++;
    }
  }

  async checkNetlifyFunctionsHealth() {
    try {
      if (fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        const manifest = JSON.parse(fs.readFileSync(this.config.netlifyFunctions.manifestFile, "utf8"));
        
        if (manifest.functions && manifest.functions.length > 0) {
          this.status.netlifyFunctions.healthy = true;
          this.status.netlifyFunctions.failures = 0;
        } else {
          this.status.netlifyFunctions.healthy = false;
          this.status.netlifyFunctions.failures++;
          this.log("Netlify Functions health check failed: No functions found in manifest", "WARN");
        }
      } else {
        this.status.netlifyFunctions.healthy = false;
        this.status.netlifyFunctions.failures++;
        this.log("Netlify Functions health check failed: Manifest file not found", "WARN");
      }
      
      this.status.netlifyFunctions.lastCheck = new Date();
    } catch (error) {
      this.log(`Netlify Functions health check error: ${error.message}`, "ERROR");
      this.status.netlifyFunctions.healthy = false;
      this.status.netlifyFunctions.failures++;
    }
  }

  async checkBuildHealth() {
    try {
      // Check if build-related files exist
      const buildFiles = [
        "package.json",
        "next.config.js",
        "tsconfig.json",
        ".eslintrc.js"
      ];
      
      let validBuildFiles = 0;
      for (const file of buildFiles) {
        if (fs.existsSync(file)) {
          validBuildFiles++;
        }
      }
      
      if (validBuildFiles === buildFiles.length) {
        this.status.build.healthy = true;
        this.status.build.failures = 0;
      } else {
        this.status.build.healthy = false;
        this.status.build.failures++;
        this.log(`Build health check failed: Only ${validBuildFiles}/${buildFiles.length} build files found`, "WARN");
      }
      
      this.status.build.lastCheck = new Date();
    } catch (error) {
      this.log(`Build health check error: ${error.message}`, "ERROR");
      this.status.build.healthy = false;
      this.status.build.failures++;
    }
  }

  generateHealthReport() {
    const report = {
      timestamp: new Date().toISOString(),
      overallHealth: this.status.pm2.healthy && this.status.githubActions.healthy && 
                    this.status.netlifyFunctions.healthy && this.status.build.healthy,
      systems: {
        pm2: this.status.pm2,
        githubActions: this.status.githubActions,
        netlifyFunctions: this.status.netlifyFunctions,
        build: this.status.build
      },
      summary: {
        totalSystems: 4,
        healthySystems: Object.values(this.status).filter(s => s.healthy).length,
        criticalFailures: Object.values(this.status).filter(s => s.failures >= 3).length
      }
    };
    
    this.log(`Health Report: ${report.summary.healthySystems}/${report.summary.totalSystems} systems healthy`);
    
    // Save health report
    try {
      const reportFile = path.join(this.logDir, "health-report.json");
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    } catch (error) {
      this.log(`Failed to save health report: ${error.message}`, "ERROR");
    }
    
    return report;
  }

  async stop() {
    this.log("Stopping Ultimate Redundancy System V2...");
    
    try {
      // Stop all PM2 processes
      spawnSync("pm2", ["stop", "all"], { cwd: this.workspace, stdio: "pipe" });
      this.log("All PM2 processes stopped");
    } catch (error) {
      this.log(`Error stopping PM2 processes: ${error.message}`, "ERROR");
    }
    
    this.log("Ultimate Redundancy System V2 stopped");
  }

  getStatus() {
    return {
      system: "Ultimate Redundancy System V2",
      version: "2.0.0",
      status: this.status,
      config: this.config,
      uptime: process.uptime(),
      memory: process.memoryUsage()
    };
  }
}

// CLI interface
if (require.main === module) {
  const system = new UltimateRedundancySystemV2();
  
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
      system.performHealthChecks();
      break;
    default:
      console.log("Usage: node ultimate-redundancy-system-v2.cjs [start|stop|status|health]");
      process.exit(1);
  }
}

module.exports = UltimateRedundancySystemV2;