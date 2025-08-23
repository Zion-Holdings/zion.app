#!/usr/bin/env node
"use strict";

const { spawnSync, execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class ComprehensiveRedundancyV2 {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "comprehensive-redundancy-v2.log");
    this.ensureLogDir();
    
    this.config = {
      // PM2 Ecosystems to monitor and backup
      pm2Ecosystems: [
        "ecosystem.pm2.cjs",
        "ecosystem.redundancy.cjs", 
        "ecosystem.comprehensive-redundancy.cjs",
        "ecosystem.ultimate-redundancy.pm2.cjs",
        "ecosystem.fast-ads.local.cjs",
        "ecosystem.cron.local.cjs"
      ],
      
      // PM2 Process Groups to monitor
      pm2ProcessGroups: {
        core: ["zion-auto-sync", "zion-auto-sync-cron"],
        redundancy: [
          "redundancy-automation-system",
          "redundancy-health-monitor",
          "redundancy-git-sync", 
          "redundancy-build-monitor",
          "pm2-redundancy-monitor",
          "comprehensive-redundancy-orchestrator"
        ],
        fastads: ["fast-ads-orchestrator", "fast-ads-scheduler"],
        cron: ["cron-automation-system", "cron-scheduler"],
        enhanced: [
          "enhanced-pm2-redundancy-manager",
          "enhanced-github-actions-redundancy-manager",
          "enhanced-netlify-functions-redundancy-manager"
        ],
        comprehensive: [
          "comprehensive-pm2-redundancy",
          "comprehensive-github-actions-redundancy",
          "comprehensive-netlify-functions-redundancy"
        ]
      },
      
      // GitHub Actions Workflows to monitor and backup
      githubWorkflows: [
        "marketing-sync.yml",
        "sync-health.yml",
        "marketing-sync-backup.yml",
        "sync-health-backup.yml"
      ],
      
      // Netlify Functions to monitor and backup
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
      
      // Backup intervals (in milliseconds)
      intervals: {
        pm2: 30000,        // 30 seconds
        github: 300000,     // 5 minutes
        netlify: 600000,    // 10 minutes
        health: 60000       // 1 minute
      }
    };
    
    this.status = {
      pm2: { healthy: false, lastCheck: null, processes: {} },
      github: { healthy: false, lastCheck: null, workflows: {} },
      netlify: { healthy: false, lastCheck: null, functions: {} },
      overall: { healthy: false, lastCheck: null }
    };
    
    this.backupDir = path.join(this.workspace, "automation/backups/redundancy-v2");
    this.ensureBackupDir();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  ensureBackupDir() {
    if (!fs.existsSync(this.backupDir)) {
      fs.mkdirSync(this.backupDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    fs.appendFileSync(this.logFile, logEntry);
    
    if (level === "ERROR") {
      console.error(`[${timestamp}] [${level}] ${message}`);
    } else if (level === "WARN") {
      console.warn(`[${timestamp}] [${level}] ${message}`);
    } else {
      console.log(`[${timestamp}] [${level}] ${message}`);
    }
  }

  async checkPM2Health() {
    try {
      this.log("Checking PM2 health...");
      
      // Check PM2 daemon status
      const pm2Status = spawnSync("pm2", ["status"], { 
        encoding: "utf8",
        stdio: ["pipe", "pipe", "pipe"]
      });
      
      if (pm2Status.status !== 0) {
        this.log("PM2 daemon not running, attempting to start...", "WARN");
        this.startPM2Daemon();
        return false;
      }
      
      // Check each ecosystem file
      for (const ecosystem of this.config.pm2Ecosystems) {
        const ecosystemPath = path.join(this.workspace, ecosystem);
        if (fs.existsSync(ecosystemPath)) {
          this.log(`Found ecosystem: ${ecosystem}`);
          
          // Try to start/restart the ecosystem
          try {
            const result = spawnSync("pm2", ["start", ecosystem, "--update-env"], {
              encoding: "utf8",
              stdio: ["pipe", "pipe", "pipe"]
            });
            
            if (result.status === 0) {
              this.log(`Successfully started ecosystem: ${ecosystem}`);
            } else {
              this.log(`Failed to start ecosystem: ${ecosystem}`, "WARN");
            }
          } catch (error) {
            this.log(`Error starting ecosystem ${ecosystem}: ${error.message}`, "ERROR");
          }
        }
      }
      
      // Check process health
      const processes = spawnSync("pm2", ["jlist"], { encoding: "utf8" });
      if (processes.status === 0) {
        try {
          const processList = JSON.parse(processes.stdout);
          this.status.pm2.processes = {};
          
          for (const proc of processList) {
            this.status.pm2.processes[proc.name] = {
              status: proc.pm2_env.status,
              restartCount: proc.pm2_env.restart_time,
              uptime: proc.pm2_env.pm_uptime,
              memory: proc.monit.memory,
              cpu: proc.monit.cpu
            };
            
            // Check if process needs restart
            if (proc.pm2_env.status === "stopped" || proc.pm2_env.status === "errored") {
              this.log(`Restarting stopped/errored process: ${proc.name}`, "WARN");
              spawnSync("pm2", ["restart", proc.name]);
            }
          }
          
          this.status.pm2.healthy = true;
          this.status.pm2.lastCheck = new Date();
        } catch (parseError) {
          this.log(`Error parsing PM2 process list: ${parseError.message}`, "ERROR");
        }
      }
      
      return this.status.pm2.healthy;
    } catch (error) {
      this.log(`Error checking PM2 health: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkGitHubActionsHealth() {
    try {
      this.log("Checking GitHub Actions health...");
      
      // Check if workflows exist and are accessible
      for (const workflow of this.config.githubWorkflows) {
        const workflowPath = path.join(this.workspace, ".github/workflows", workflow);
        if (fs.existsSync(workflowPath)) {
          this.log(`Found workflow: ${workflow}`);
          
          // Create backup of workflow
          const backupPath = path.join(this.backupDir, `github-${workflow.replace('.yml', '')}-${Date.now()}.yml`);
          fs.copyFileSync(workflowPath, backupPath);
          
          // Check workflow syntax
          try {
            const yaml = require("js-yaml");
            const workflowContent = fs.readFileSync(workflowPath, "utf8");
            const parsed = yaml.load(workflowContent);
            
            this.status.github.workflows[workflow] = {
              valid: true,
              lastBackup: new Date(),
              backupPath: backupPath
            };
          } catch (parseError) {
            this.log(`Invalid workflow syntax in ${workflow}: ${parseError.message}`, "ERROR");
            this.status.github.workflows[workflow] = {
              valid: false,
              error: parseError.message,
              lastBackup: new Date(),
              backupPath: backupPath
            };
          }
        }
      }
      
      // Check if we can trigger workflows manually
      try {
        const gitStatus = spawnSync("git", ["status"], { encoding: "utf8" });
        if (gitStatus.status === 0) {
          this.log("Git repository accessible");
          this.status.github.healthy = true;
          this.status.github.lastCheck = new Date();
        }
      } catch (error) {
        this.log(`Git repository not accessible: ${error.message}`, "ERROR");
      }
      
      return this.status.github.healthy;
    } catch (error) {
      this.log(`Error checking GitHub Actions health: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkNetlifyFunctionsHealth() {
    try {
      this.log("Checking Netlify Functions health...");
      
      // Check functions manifest
      const manifestPath = path.join(this.workspace, "netlify/functions/functions-manifest.json");
      if (fs.existsSync(manifestPath)) {
        try {
          const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
          this.log(`Found ${manifest.functions.length} Netlify functions`);
          
          // Create backup of manifest
          const backupPath = path.join(this.backupDir, `netlify-manifest-${Date.now()}.json`);
          fs.copyFileSync(manifestPath, backupPath);
          
          // Check each function
          for (const funcName of manifest.functions) {
            const funcPath = path.join(this.workspace, "netlify/functions", funcName);
            
            if (fs.existsSync(funcPath)) {
              this.status.netlify.functions[funcName] = {
                exists: true,
                lastBackup: new Date(),
                backupPath: backupPath
              };
            } else {
              this.log(`Function ${funcName} not found at expected path`, "WARN");
              this.status.netlify.functions[funcName] = {
                exists: false,
                lastBackup: new Date(),
                backupPath: backupPath
              };
            }
          }
          
          this.status.netlify.healthy = true;
          this.status.netlify.lastCheck = new Date();
        } catch (parseError) {
          this.log(`Error parsing Netlify functions manifest: ${parseError.message}`, "ERROR");
        }
      } else {
        this.log("Netlify functions manifest not found", "WARN");
      }
      
      return this.status.netlify.healthy;
    } catch (error) {
      this.log(`Error checking Netlify functions health: ${error.message}`, "ERROR");
      return false;
    }
  }

  startPM2Daemon() {
    try {
      this.log("Starting PM2 daemon...");
      spawnSync("pm2", ["start"]);
      this.log("PM2 daemon started");
    } catch (error) {
      this.log(`Error starting PM2 daemon: ${error.message}`, "ERROR");
    }
  }

  async createBackup() {
    try {
      this.log("Creating comprehensive backup...");
      
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      const backupPath = path.join(this.backupDir, `comprehensive-backup-${timestamp}`);
      
      if (!fs.existsSync(backupPath)) {
        fs.mkdirSync(backupPath, { recursive: true });
      }
      
      // Backup PM2 ecosystems
      const pm2BackupPath = path.join(backupPath, "pm2");
      fs.mkdirSync(pm2BackupPath, { recursive: true });
      
      for (const ecosystem of this.config.pm2Ecosystems) {
        const sourcePath = path.join(this.workspace, ecosystem);
        if (fs.existsSync(sourcePath)) {
          const destPath = path.join(pm2BackupPath, ecosystem);
          fs.copyFileSync(sourcePath, destPath);
        }
      }
      
      // Backup GitHub workflows
      const githubBackupPath = path.join(backupPath, "github");
      fs.mkdirSync(githubBackupPath, { recursive: true });
      
      for (const workflow of this.config.githubWorkflows) {
        const sourcePath = path.join(this.workspace, ".github/workflows", workflow);
        if (fs.existsSync(sourcePath)) {
          const destPath = path.join(githubBackupPath, workflow);
          fs.copyFileSync(sourcePath, destPath);
        }
      }
      
      // Backup Netlify functions
      const netlifyBackupPath = path.join(backupPath, "netlify");
      fs.mkdirSync(netlifyBackupPath, { recursive: true });
      
      const manifestPath = path.join(this.workspace, "netlify/functions/functions-manifest.json");
      if (fs.existsSync(manifestPath)) {
        const destPath = path.join(netlifyBackupPath, "functions-manifest.json");
        fs.copyFileSync(manifestPath, destPath);
      }
      
      // Backup automation scripts
      const automationBackupPath = path.join(backupPath, "automation");
      fs.mkdirSync(automationBackupPath, { recursive: true });
      
      const automationFiles = [
        "ultimate-redundancy-master.cjs",
        "comprehensive-redundancy-orchestrator.cjs",
        "pm2-redundancy-monitor.cjs",
        "github-actions-redundancy-manager.cjs",
        "netlify-functions-redundancy-manager.cjs"
      ];
      
      for (const file of automationFiles) {
        const sourcePath = path.join(this.workspace, "automation", file);
        if (fs.existsSync(sourcePath)) {
          const destPath = path.join(automationBackupPath, file);
          fs.copyFileSync(sourcePath, destPath);
        }
      }
      
      // Create backup manifest
      const backupManifest = {
        timestamp: new Date().toISOString(),
        backupPath: backupPath,
        components: {
          pm2: this.config.pm2Ecosystems,
          github: this.config.githubWorkflows,
          netlify: this.config.netlifyFunctions.length,
          automation: automationFiles
        },
        status: this.status
      };
      
      const manifestPath = path.join(backupPath, "backup-manifest.json");
      fs.writeFileSync(manifestPath, JSON.stringify(backupManifest, null, 2));
      
      this.log(`Comprehensive backup created at: ${backupPath}`);
      return backupPath;
    } catch (error) {
      this.log(`Error creating backup: ${error.message}`, "ERROR");
      return null;
    }
  }

  async runHealthCheck() {
    try {
      this.log("Running comprehensive health check...");
      
      const pm2Health = await this.checkPM2Health();
      const githubHealth = await this.checkGitHubActionsHealth();
      const netlifyHealth = await this.checkNetlifyFunctionsHealth();
      
      this.status.overall.healthy = pm2Health && githubHealth && netlifyHealth;
      this.status.overall.lastCheck = new Date();
      
      if (this.status.overall.healthy) {
        this.log("All systems healthy");
      } else {
        this.log("Some systems unhealthy, creating backup...", "WARN");
        await this.createBackup();
      }
      
      return this.status.overall.healthy;
    } catch (error) {
      this.log(`Error running health check: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startMonitoring() {
    this.log("Starting comprehensive redundancy monitoring...");
    
    // Initial health check
    await this.runHealthCheck();
    
    // Set up monitoring intervals
    setInterval(async () => {
      await this.checkPM2Health();
    }, this.config.intervals.pm2);
    
    setInterval(async () => {
      await this.checkGitHubActionsHealth();
    }, this.config.intervals.github);
    
    setInterval(async () => {
      await this.checkNetlifyFunctionsHealth();
    }, this.config.intervals.netlify);
    
    setInterval(async () => {
      await this.runHealthCheck();
    }, this.config.intervals.health);
    
    this.log("Comprehensive redundancy monitoring started");
  }

  getStatus() {
    return {
      timestamp: new Date().toISOString(),
      status: this.status,
      config: {
        pm2Ecosystems: this.config.pm2Ecosystems.length,
        githubWorkflows: this.config.githubWorkflows.length,
        netlifyFunctions: this.config.netlifyFunctions.length,
        intervals: this.config.intervals
      }
    };
  }

  async runCommand(command, args = []) {
    try {
      const result = spawnSync(command, args, { 
        encoding: "utf8",
        stdio: ["pipe", "pipe", "pipe"]
      });
      
      return {
        success: result.status === 0,
        stdout: result.stdout,
        stderr: result.stderr,
        status: result.status
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        stdout: "",
        stderr: error.message,
        status: -1
      };
    }
  }
}

// CLI interface
if (require.main === module) {
  const redundancy = new ComprehensiveRedundancyV2();
  const command = process.argv[2];
  
  switch (command) {
    case "start":
      redundancy.startMonitoring();
      break;
    case "health":
      redundancy.runHealthCheck().then(healthy => {
        console.log(`Health check result: ${healthy ? "HEALTHY" : "UNHEALTHY"}`);
        process.exit(healthy ? 0 : 1);
      });
      break;
    case "status":
      console.log(JSON.stringify(redundancy.getStatus(), null, 2));
      break;
    case "backup":
      redundancy.createBackup().then(path => {
        if (path) {
          console.log(`Backup created at: ${path}`);
          process.exit(0);
        } else {
          console.error("Backup failed");
          process.exit(1);
        }
      });
      break;
    case "check-pm2":
      redundancy.checkPM2Health().then(healthy => {
        console.log(`PM2 health: ${healthy ? "HEALTHY" : "UNHEALTHY"}`);
        process.exit(healthy ? 0 : 1);
      });
      break;
    case "check-github":
      redundancy.checkGitHubActionsHealth().then(healthy => {
        console.log(`GitHub Actions health: ${healthy ? "HEALTHY" : "UNHEALTHY"}`);
        process.exit(healthy ? 0 : 1);
      });
      break;
    case "check-netlify":
      redundancy.checkNetlifyFunctionsHealth().then(healthy => {
        console.log(`Netlify Functions health: ${healthy ? "HEALTHY" : "UNHEALTHY"}`);
        process.exit(healthy ? 0 : 1);
      });
      break;
    default:
      console.log(`
Comprehensive Redundancy V2 - Usage:
  node comprehensive-redundancy-v2.cjs <command>

Commands:
  start     - Start monitoring all systems
  health    - Run comprehensive health check
  status    - Show current status
  backup    - Create comprehensive backup
  check-pm2 - Check PM2 health only
  check-github - Check GitHub Actions health only
  check-netlify - Check Netlify Functions health only

Examples:
  node comprehensive-redundancy-v2.cjs start
  node comprehensive-redundancy-v2.cjs health
  node comprehensive-redundancy-v2.cjs status
      `);
      break;
  }
}

module.exports = ComprehensiveRedundancyV2;