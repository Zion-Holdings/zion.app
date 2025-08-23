#!/usr/bin/env node
"use strict";

const { spawnSync, execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class ComprehensiveRedundancyV3 {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "comprehensive-redundancy-v3.log");
    this.ensureLogDir();
    
    this.config = {
      // All PM2 Ecosystems and Processes
      pm2Ecosystems: [
        "ecosystem.pm2.cjs",
        "ecosystem.redundancy.cjs", 
        "ecosystem.comprehensive-redundancy.cjs",
        "ecosystem.ultimate-redundancy.pm2.cjs",
        "ecosystem.fast-ads.local.cjs",
        "ecosystem.cron.local.cjs"
      ],
      
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
      
      // All GitHub Actions Workflows
      githubWorkflows: [
        "marketing-sync.yml",
        "sync-health.yml",
        "marketing-sync-backup.yml",
        "sync-health-backup.yml"
      ],
      
      // All Netlify Functions from manifest
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
      
      // Redundancy intervals
      intervals: {
        pm2Check: 30000, // 30 seconds
        githubCheck: 60000, // 1 minute
        netlifyCheck: 120000, // 2 minutes
        healthReport: 300000 // 5 minutes
      }
    };
    
    this.status = {
      pm2: { healthy: false, processes: [], lastCheck: null },
      github: { healthy: false, workflows: [], lastCheck: null },
      netlify: { healthy: false, functions: [], lastCheck: null },
      overall: { healthy: false, lastReport: null }
    };
    
    this.log("Comprehensive Redundancy V3 initialized");
  }

  ensureLogDir() {
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

  async checkPM2Health() {
    try {
      this.log("Checking PM2 health...");
      
      // Check PM2 daemon status
      const pm2Status = spawnSync("pm2", ["status"], { encoding: "utf8" });
      if (pm2Status.status !== 0) {
        this.log("PM2 daemon not running, attempting to start", "WARN");
        spawnSync("pm2", ["start"], { encoding: "utf8" });
        return false;
      }

      // Get running processes
      const pm2List = spawnSync("pm2", ["jlist"], { encoding: "utf8" });
      if (pm2List.status === 0) {
        const processes = JSON.parse(pm2List.stdout);
        this.status.pm2.processes = processes;
        
        // Check each ecosystem
        for (const ecosystem of this.config.pm2Ecosystems) {
          if (fs.existsSync(ecosystem)) {
            this.log(`Checking ecosystem: ${ecosystem}`);
            try {
              spawnSync("pm2", ["start", ecosystem, "--update-env"], { encoding: "utf8" });
            } catch (error) {
              this.log(`Failed to start ecosystem ${ecosystem}: ${error.message}`, "ERROR");
            }
          }
        }
        
        this.status.pm2.healthy = true;
        this.status.pm2.lastCheck = new Date();
        this.log("PM2 health check completed successfully");
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`PM2 health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkGitHubActionsHealth() {
    try {
      this.log("Checking GitHub Actions health...");
      
      // Check if workflows directory exists
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      if (!fs.existsSync(workflowsDir)) {
        this.log("GitHub workflows directory not found", "WARN");
        return false;
      }

      // Check each workflow file
      const workflows = [];
      for (const workflow of this.config.githubWorkflows) {
        const workflowPath = path.join(workflowsDir, workflow);
        if (fs.existsSync(workflowPath)) {
          try {
            const content = fs.readFileSync(workflowPath, "utf8");
            const isValid = this.validateYAML(content);
            workflows.push({
              name: workflow,
              path: workflowPath,
              valid: isValid,
              lastModified: fs.statSync(workflowPath).mtime
            });
          } catch (error) {
            this.log(`Failed to read workflow ${workflow}: ${error.message}`, "ERROR");
          }
        }
      }

      // Check for backup workflows
      const backupDir = path.join(workflowsDir, "backups");
      if (fs.existsSync(backupDir)) {
        const backupFiles = fs.readdirSync(backupDir);
        for (const backup of backupFiles) {
          if (backup.endsWith(".yml") || backup.endsWith(".yaml")) {
            workflows.push({
              name: `backup/${backup}`,
              path: path.join(backupDir, backup),
              valid: true,
              lastModified: fs.statSync(path.join(backupDir, backup)).mtime
            });
          }
        }
      }

      this.status.github.workflows = workflows;
      this.status.github.healthy = workflows.length > 0;
      this.status.github.lastCheck = new Date();
      this.log(`GitHub Actions health check completed: ${workflows.length} workflows found`);
      return this.status.github.healthy;
    } catch (error) {
      this.log(`GitHub Actions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkNetlifyFunctionsHealth() {
    try {
      this.log("Checking Netlify Functions health...");
      
      // Check functions manifest
      const manifestPath = path.join(this.workspace, "netlify/functions/functions-manifest.json");
      if (!fs.existsSync(manifestPath)) {
        this.log("Netlify functions manifest not found", "WARN");
        return false;
      }

      const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
      const functions = manifest.functions || [];
      
      // Check each function
      const functionStatus = [];
      for (const funcName of functions) {
        const funcPath = path.join(this.workspace, "netlify/functions", funcName);
        if (fs.existsSync(funcPath)) {
          functionStatus.push({
            name: funcName,
            path: funcPath,
            exists: true,
            lastModified: fs.statSync(funcPath).mtime
          });
        } else {
          functionStatus.push({
            name: funcName,
            path: funcPath,
            exists: false,
            lastModified: null
          });
        }
      }

      this.status.netlify.functions = functionStatus;
      this.status.netlify.healthy = functionStatus.filter(f => f.exists).length > 0;
      this.status.netlify.lastCheck = new Date();
      this.log(`Netlify Functions health check completed: ${functionStatus.filter(f => f.exists).length}/${functions.length} functions found`);
      return this.status.netlify.healthy;
    } catch (error) {
      this.log(`Netlify Functions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  validateYAML(content) {
    try {
      // Simple YAML validation - check for basic structure
      const lines = content.split("\n");
      let hasName = false;
      let hasOn = false;
      let hasJobs = false;
      
      for (const line of lines) {
        if (line.includes("name:")) hasName = true;
        if (line.includes("on:")) hasOn = true;
        if (line.includes("jobs:")) hasJobs = true;
      }
      
      return hasName && hasOn && hasJobs;
    } catch (error) {
      return false;
    }
  }

  async startRedundancyMonitoring() {
    this.log("Starting comprehensive redundancy monitoring...");
    
    // Start PM2 monitoring
    setInterval(async () => {
      await this.checkPM2Health();
    }, this.config.intervals.pm2Check);

    // Start GitHub Actions monitoring
    setInterval(async () => {
      await this.checkGitHubActionsHealth();
    }, this.config.intervals.githubCheck);

    // Start Netlify Functions monitoring
    setInterval(async () => {
      await this.checkNetlifyFunctionsHealth();
    }, this.config.intervals.netlifyCheck);

    // Start health reporting
    setInterval(async () => {
      await this.generateHealthReport();
    }, this.config.intervals.healthReport);

    // Initial health checks
    await this.checkPM2Health();
    await this.checkGitHubActionsHealth();
    await this.checkNetlifyFunctionsHealth();
    
    this.log("Comprehensive redundancy monitoring started");
  }

  async generateHealthReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        overall: {
          healthy: this.status.pm2.healthy && this.status.github.healthy && this.status.netlify.healthy,
          score: this.calculateHealthScore()
        },
        pm2: {
          healthy: this.status.pm2.healthy,
          processCount: this.status.pm2.processes.length,
          lastCheck: this.status.pm2.lastCheck
        },
        github: {
          healthy: this.status.github.healthy,
          workflowCount: this.status.github.workflows.length,
          lastCheck: this.status.github.lastCheck
        },
        netlify: {
          healthy: this.status.netlify.healthy,
          functionCount: this.status.netlify.functions.length,
          lastCheck: this.status.netlify.lastCheck
        }
      };

      // Save report
      const reportPath = path.join(this.logDir, "comprehensive-redundancy-v3-report.json");
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      this.status.overall.healthy = report.overall.healthy;
      this.status.overall.lastReport = new Date();
      
      this.log(`Health report generated: Overall health score: ${report.overall.score}%`);
      return report;
    } catch (error) {
      this.log(`Failed to generate health report: ${error.message}`, "ERROR");
      return null;
    }
  }

  calculateHealthScore() {
    let score = 0;
    let total = 0;
    
    // PM2 health (40% weight)
    if (this.status.pm2.healthy) score += 40;
    total += 40;
    
    // GitHub Actions health (30% weight)
    if (this.status.github.healthy) score += 30;
    total += 30;
    
    // Netlify Functions health (30% weight)
    if (this.status.netlify.healthy) score += 30;
    total += 30;
    
    return Math.round((score / total) * 100);
  }

  async getStatus() {
    return {
      ...this.status,
      config: this.config,
      uptime: process.uptime(),
      memory: process.memoryUsage()
    };
  }

  async stop() {
    this.log("Stopping comprehensive redundancy monitoring...");
    process.exit(0);
  }
}

// CLI interface
if (require.main === module) {
  const redundancy = new ComprehensiveRedundancyV3();
  
  const command = process.argv[2] || "start";
  
  switch (command) {
    case "start":
      redundancy.startRedundancyMonitoring();
      break;
    case "status":
      redundancy.getStatus().then(status => {
        console.log(JSON.stringify(status, null, 2));
        process.exit(0);
      });
      break;
    case "health":
      redundancy.generateHealthReport().then(report => {
        console.log(JSON.stringify(report, null, 2));
        process.exit(0);
      });
      break;
    case "check":
      Promise.all([
        redundancy.checkPM2Health(),
        redundancy.checkGitHubActionsHealth(),
        redundancy.checkNetlifyFunctionsHealth()
      ]).then(() => {
        redundancy.getStatus().then(status => {
          console.log(JSON.stringify(status, null, 2));
          process.exit(0);
        });
      });
      break;
    default:
      console.log("Usage: node comprehensive-redundancy-v3.cjs [start|status|health|check]");
      process.exit(1);
  }
}

module.exports = ComprehensiveRedundancyV3;