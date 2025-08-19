#!/usr/bin/env node
"use strict";

const { spawnSync, execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class CompleteRedundancyMaster {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "complete-redundancy-master.log");
    this.statusFile = path.join(this.workspace, "automation/complete-redundancy-status.json");
    this.ensureLogDir();
    
    this.config = {
      // All PM2 Ecosystems
      pm2Ecosystems: [
        "ecosystem.pm2.cjs",
        "ecosystem.redundancy.cjs", 
        "ecosystem.comprehensive-redundancy.cjs",
        "ecosystem.ultimate-redundancy.pm2.cjs",
        "ecosystem.fast-ads.local.cjs",
        "ecosystem.cron.local.cjs"
      ],
      
      // All PM2 Process Groups
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
        ],
        ultimate: [
          "ultimate-redundancy-master",
          "ultimate-redundancy-system"
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
      
      // All npm scripts that need redundancy
      npmScripts: [
        "pm2:start", "pm2:stop", "pm2:restart", "pm2:status",
        "pm2:fastads:start", "pm2:fastads:restart", "pm2:fastads:stop",
        "pm2:cron:start", "pm2:cron:restart", "pm2:cron:stop",
        "functions:run", "functions:run:execute",
        "front:advertise", "deps:maintain", "deps:cron:start",
        "sitemap", "netlify:manifest", "netlify:trigger",
        "readme:generate", "search:index", "content:fix",
        "build", "build:heal", "build:smart", "build:auto-fix",
        "build:monitor", "build:guardian", "build:orchestrator",
        "security:scan", "auto:intel", "autonomous",
        "linkedin:run", "linkedin:cron", "linkedin:generate",
        "mcp:start", "mcp:client", "mcp:orchestrator",
        "google-docs:start", "google-docs:dev", "google-docs:status",
        "cursor:memory", "automation:factory", "automation:orchestrator",
        "ai:research", "ai:innovate", "ai:cron:start",
        "automation:all", "automation:status", "automation:report",
        "automation:git-sync", "git:sync", "git:sync:enhanced",
        "git:health", "git:resolve", "git:cleanup", "git:status",
        "automation:improvement", "automation:guardian", "automation:cloud",
        "automation:discover", "redundancy:start", "redundancy:stop",
        "redundancy:restart", "redundancy:status", "redundancy:logs",
        "redundancy:system", "redundancy:health", "redundancy:git-sync",
        "redundancy:build", "redundancy:pm2", "redundancy:pm2:stop",
        "redundancy:pm2:restart", "redundancy:pm2:status",
        "automation:improvement:dev", "automation:coordinator",
        "automation:coordinator:dev", "automation:restart",
        "automation:enhance", "automation:beautify", "autonomous:start",
        "autonomous:stop", "autonomous:restart", "autonomous:factory",
        "autonomous:orchestrator", "autonomous:cron", "autonomous:cron:start",
        "autonomous:cron:stop", "autonomous:cron:status", "autonomous:cron:fix",
        "autonomous:all", "design:start", "design:navigation", "design:layout",
        "design:visual", "design:cycle", "design:status", "design:stop",
        "design:all", "syntax:start", "syntax:start:monitor",
        "syntax:start:orchestrator", "syntax:start:continuous", "syntax:stop",
        "syntax:status", "syntax:quick-fix", "syntax:build-check",
        "syntax:monitor", "syntax:monitor:watch", "syntax:orchestrator",
        "syntax:orchestrator:watch", "syntax:continuous", "syntax:continuous:watch",
        "syntax:all", "linting:factory", "linting:factory:dev", "linting:cron",
        "linting:cron:dev", "linting:watcher", "linting:watcher:dev",
        "linting:orchestrator", "linting:orchestrator:dev", "linting:all",
        "linting:start", "linting:status", "linting:check", "linting:fix",
        "healing:scan", "healing:fix", "healing:start", "healing:cron:start",
        "healing:cron:stop", "healing:cron:status", "design:orchestrator",
        "design:cron:start", "design:analyze", "diversify", "responsive:start",
        "responsive:cron:start", "responsive:analyze", "variation:start",
        "variation:analyze", "monetization:start", "monetization:cron:start",
        "monetization:analyze", "frontend-sync:start", "frontend-sync:cron:start",
        "frontend-sync:analyze", "saas:start", "saas:cron:start", "saas:analyze",
        "homepage-promo:start", "homepage-promo:cron:start", "homepage-promo:analyze",
        "feature-marketing:start", "feature-marketing:cron:start", "feature-marketing:analyze",
        "linkedin:marketing:start", "linkedin:marketing:cron:start", "linkedin:marketing:analyze",
        "cursor:chat:start", "cursor:chat:cron:start", "cursor:chat:analyze",
        "links:start", "links:cron:start", "links:scan", "footer:inject",
        "footer:cron", "promo:start", "promo:cron:start", "promo:scan",
        "spec-dev:start", "spec-dev:cron:start", "spec-dev:scan",
        "linkedin:pro:start", "linkedin:pro:cron:start", "linkedin:pro:analyze",
        "instagram:marketing:start", "instagram:marketing:cron:start", "instagram:marketing:analyze",
        "alignment:start", "alignment:cron:start", "alignment:scan",
        "maintenance:run", "maintenance:cron:start", "maintenance:cron:stop",
        "maintenance:cron:status", "maintenance:cron:run", "health:start",
        "health:dev", "automation:all:plus", "automation:pm2", "automation:pm2:restart",
        "automation:pm2:status", "automation:pm2:logs", "automation:pm2:report",
        "automation:pm2:autostart", "automation:pm2:resurrect", "automation:pm2:fastads",
        "automation:pm2:cron", "postautomation", "lint:staged", "ui-evolution:start",
        "ui-evolution:once", "ui-evolution:analyze", "ui-evolution:factory",
        "ui-evolution:beautify", "ui-evolution:dashboard", "meta:factory",
        "meta:orchestrator", "meta:cron:start", "venture:start", "venture:once",
        "venture:analyze", "venture:cron:start", "venture:cron:stop",
        "venture:cron:status", "venture:report", "frontend-sync:autonomous:start",
        "frontend-sync:autonomous:once", "frontend-sync:autonomous:cron",
        "git:pull", "git:cron:start", "git:cron:stop", "git:cron:status",
        "homepage:update", "front:futurize", "front:futurize:cron",
        "front:directory", "front:continuous", "front:continuous:fast",
        "ads:fast", "cloud:agents", "cloud:crawl", "cloud:factory",
        "cloud:advertise", "cloud:continuous", "gh:trigger", "gh:auto-heal",
        "redundancy:check", "redundancy:monitor", "redundancy:github",
        "redundancy:netlify", "redundancy:enhanced:start", "redundancy:enhanced:stop",
        "redundancy:enhanced:status", "redundancy:enhanced:health",
        "redundancy:enhanced:restart", "redundancy:enhanced:pm2",
        "redundancy:enhanced:github", "redundancy:enhanced:netlify",
        "redundancy:enhanced:master", "redundancy:comprehensive:start",
        "redundancy:comprehensive:stop", "redundancy:comprehensive:restart",
        "redundancy:comprehensive:status", "redundancy:comprehensive:health",
        "redundancy:comprehensive:logs", "redundancy:comprehensive:check",
        "redundancy:pm2:manager", "redundancy:github:manager",
        "redundancy:netlify:manager", "redundancy:orchestrator",
        "redundancy:ultimate:start", "redundancy:ultimate:stop",
        "redundancy:ultimate:restart", "redundancy:ultimate:status",
        "redundancy:ultimate:health", "redundancy:ultimate:report",
        "redundancy:ultimate:logs", "redundancy:ultimate:check",
        "redundancy:ultimate:monitor", "redundancy:ultimate:pm2",
        "redundancy:ultimate:pm2:stop", "redundancy:ultimate:pm2:restart",
        "redundancy:ultimate:pm2:status", "redundancy:ultimate:master",
        "redundancy:ultimate:master:check", "redundancy:ultimate:master:start",
        "redundancy:ultimate:master:stop", "redundancy:ultimate:master:restart",
        "redundancy:ultimate:master:status", "redundancy:ultimate:master:report",
        "redundancy:ultimate:master:monitor"
      ]
    };
    
    this.status = this.loadStatus();
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
      console.error("Failed to write to log file:", error.message);
    }
  }

  loadStatus() {
    try {
      if (fs.existsSync(this.statusFile)) {
        return JSON.parse(fs.readFileSync(this.statusFile, "utf8"));
      }
    } catch (error) {
      this.log(`Failed to load status file: ${error.message}`, "WARN");
    }
    
    return {
      lastCheck: null,
      pm2Status: {},
      githubActionsStatus: {},
      netlifyFunctionsStatus: {},
      npmScriptsStatus: {},
      healthScore: 0,
      issues: []
    };
  }

  saveStatus() {
    try {
      this.status.lastCheck = new Date().toISOString();
      fs.writeFileSync(this.statusFile, JSON.stringify(this.status, null, 2));
    } catch (error) {
      this.log(`Failed to save status: ${error.message}`, "ERROR");
    }
  }

  async checkPM2Status() {
    this.log("Checking PM2 status...");
    
    try {
      const pm2Status = execSync("pm2 status --json", { encoding: "utf8" });
      const processes = JSON.parse(pm2Status);
      
      this.status.pm2Status = {
        total: processes.length,
        running: processes.filter(p => p.pm2_env.status === "online").length,
        stopped: processes.filter(p => p.pm2_env.status === "stopped").length,
        errored: processes.filter(p => p.pm2_env.status === "errored").length,
        processes: processes.map(p => ({
          name: p.name,
          status: p.pm2_env.status,
          pm_id: p.pm_id,
          pm_cwd: p.pm2_env.pm_cwd,
          restart_time: p.pm2_env.restart_time,
          unstable_restarts: p.pm2_env.unstable_restarts
        }))
      };
      
      this.log(`PM2 Status: ${this.status.pm2Status.running}/${this.status.pm2Status.total} processes running`);
      
      // Check if any critical processes are down
      const criticalProcesses = this.config.pm2ProcessGroups.core;
      const downCritical = criticalProcesses.filter(name => 
        !this.status.pm2Status.processes.some(p => p.name === name && p.status === "online")
      );
      
      if (downCritical.length > 0) {
        this.log(`Critical PM2 processes down: ${downCritical.join(", ")}`, "WARN");
        this.status.issues.push({
          type: "pm2_critical_down",
          processes: downCritical,
          timestamp: new Date().toISOString()
        });
      }
      
    } catch (error) {
      this.log(`Failed to check PM2 status: ${error.message}`, "ERROR");
      this.status.pm2Status = { error: error.message };
    }
  }

  async checkGitHubActionsStatus() {
    this.log("Checking GitHub Actions status...");
    
    try {
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      const workflows = this.config.githubWorkflows;
      
      this.status.githubActionsStatus = {
        total: workflows.length,
        workflows: []
      };
      
      for (const workflow of workflows) {
        const workflowPath = path.join(workflowsDir, workflow);
        const exists = fs.existsSync(workflowPath);
        
        this.status.githubActionsStatus.workflows.push({
          name: workflow,
          exists,
          path: workflowPath,
          lastModified: exists ? fs.statSync(workflowPath).mtime : null
        });
      }
      
      this.log(`GitHub Actions: ${workflows.length} workflows configured`);
      
    } catch (error) {
      this.log(`Failed to check GitHub Actions status: ${error.message}`, "ERROR");
      this.status.githubActionsStatus = { error: error.message };
    }
  }

  async checkNetlifyFunctionsStatus() {
    this.log("Checking Netlify Functions status...");
    
    try {
      const manifestPath = path.join(this.workspace, "netlify/functions/functions-manifest.json");
      const functionsDir = path.join(this.workspace, "netlify/functions");
      
      this.status.netlifyFunctionsStatus = {
        total: this.config.netlifyFunctions.length,
        manifestExists: fs.existsSync(manifestPath),
        functionsDirExists: fs.existsSync(functionsDir),
        functions: []
      };
      
      if (fs.existsSync(manifestPath)) {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
        this.status.netlifyFunctionsStatus.manifestFunctions = manifest.functions || [];
        this.status.netlifyFunctionsStatus.generatedAt = manifest.generatedAt;
      }
      
      this.log(`Netlify Functions: ${this.config.netlifyFunctions.length} functions configured`);
      
    } catch (error) {
      this.log(`Failed to check Netlify Functions status: ${error.message}`, "ERROR");
      this.status.netlifyFunctionsStatus = { error: error.message };
    }
  }

  async checkNpmScriptsStatus() {
    this.log("Checking npm scripts availability...");
    
    try {
      const packageJsonPath = path.join(this.workspace, "package.json");
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
      const availableScripts = Object.keys(packageJson.scripts || {});
      
      this.status.npmScriptsStatus = {
        total: this.config.npmScripts.length,
        available: availableScripts.length,
        missing: [],
        availableScripts: availableScripts
      };
      
      // Check which configured scripts are missing
      for (const script of this.config.npmScripts) {
        if (!availableScripts.includes(script)) {
          this.status.npmScriptsStatus.missing.push(script);
        }
      }
      
      this.log(`NPM Scripts: ${availableScripts.length} available, ${this.status.npmScriptsStatus.missing.length} missing`);
      
      if (this.status.npmScriptsStatus.missing.length > 0) {
        this.log(`Missing npm scripts: ${this.status.npmScriptsStatus.missing.join(", ")}`, "WARN");
      }
      
    } catch (error) {
      this.log(`Failed to check npm scripts status: ${error.message}`, "ERROR");
      this.status.npmScriptsStatus = { error: error.message };
    }
  }

  calculateHealthScore() {
    let score = 100;
    let totalChecks = 0;
    
    // PM2 Health (40% weight)
    if (this.status.pm2Status.total > 0) {
      const pm2Score = (this.status.pm2Status.running / this.status.pm2Status.total) * 100;
      score += pm2Score * 0.4;
      totalChecks++;
    }
    
    // GitHub Actions Health (20% weight)
    if (this.status.githubActionsStatus.total > 0) {
      const ghScore = (this.status.githubActionsStatus.workflows.filter(w => w.exists).length / this.status.githubActionsStatus.total) * 100;
      score += ghScore * 0.2;
      totalChecks++;
    }
    
    // Netlify Functions Health (20% weight)
    if (this.status.netlifyFunctionsStatus.total > 0) {
      const netlifyScore = this.status.netlifyFunctionsStatus.manifestExists ? 100 : 0;
      score += netlifyScore * 0.2;
      totalChecks++;
    }
    
    // NPM Scripts Health (20% weight)
    if (this.status.npmScriptsStatus.total > 0) {
      const npmScore = ((this.status.npmScriptsStatus.total - this.status.npmScriptsStatus.missing.length) / this.status.npmScriptsStatus.total) * 100;
      score += npmScore * 0.2;
      totalChecks++;
    }
    
    if (totalChecks > 0) {
      this.status.healthScore = Math.round(score / totalChecks);
    }
    
    return this.status.healthScore;
  }

  async startRedundancySystems() {
    this.log("Starting redundancy systems...");
    
    try {
      // Start PM2 redundancy
      execSync("npm run redundancy:pm2:manager", { stdio: "inherit" });
      
      // Start GitHub Actions redundancy
      execSync("npm run redundancy:github:manager", { stdio: "inherit" });
      
      // Start Netlify Functions redundancy
      execSync("npm run redundancy:netlify:manager", { stdio: "inherit" });
      
      this.log("All redundancy systems started successfully");
      
    } catch (error) {
      this.log(`Failed to start redundancy systems: ${error.message}`, "ERROR");
    }
  }

  async stopRedundancySystems() {
    this.log("Stopping redundancy systems...");
    
    try {
      // Stop PM2 redundancy
      execSync("npm run redundancy:pm2:stop", { stdio: "inherit" });
      
      // Stop GitHub Actions redundancy
      execSync("pm2 stop github-actions-redundancy-manager", { stdio: "inherit" });
      
      // Stop Netlify Functions redundancy
      execSync("pm2 stop netlify-functions-redundancy-manager", { stdio: "inherit" });
      
      this.log("All redundancy systems stopped successfully");
      
    } catch (error) {
      this.log(`Failed to stop redundancy systems: ${error.message}`, "ERROR");
    }
  }

  async restartRedundancySystems() {
    this.log("Restarting redundancy systems...");
    await this.stopRedundancySystems();
    await new Promise(resolve => setTimeout(resolve, 2000));
    await this.startRedundancySystems();
  }

  async runHealthCheck() {
    this.log("Running comprehensive health check...");
    
    await this.checkPM2Status();
    await this.checkGitHubActionsStatus();
    await this.checkNetlifyFunctionsStatus();
    await this.checkNpmScriptsStatus();
    
    const healthScore = this.calculateHealthScore();
    this.log(`Overall health score: ${healthScore}/100`);
    
    this.saveStatus();
    
    return this.status;
  }

  async runContinuousMonitoring(intervalMs = 60000) {
    this.log(`Starting continuous monitoring with ${intervalMs}ms interval...`);
    
    const monitor = async () => {
      try {
        await this.runHealthCheck();
        
        // Auto-recovery for critical issues
        if (this.status.healthScore < 70) {
          this.log("Health score below 70, attempting auto-recovery...", "WARN");
          await this.attemptAutoRecovery();
        }
        
      } catch (error) {
        this.log(`Monitoring error: ${error.message}`, "ERROR");
      }
    };
    
    // Run initial check
    await monitor();
    
    // Set up continuous monitoring
    setInterval(monitor, intervalMs);
    
    this.log("Continuous monitoring started");
  }

  async attemptAutoRecovery() {
    this.log("Attempting auto-recovery...");
    
    try {
      // Restart PM2 processes if needed
      if (this.status.pm2Status.errored > 0) {
        this.log("Restarting errored PM2 processes...");
        execSync("pm2 restart all", { stdio: "inherit" });
      }
      
      // Restart redundancy systems if needed
      if (this.status.healthScore < 50) {
        this.log("Health score critically low, restarting redundancy systems...");
        await this.restartRedundancySystems();
      }
      
      this.log("Auto-recovery completed");
      
    } catch (error) {
      this.log(`Auto-recovery failed: ${error.message}`, "ERROR");
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      healthScore: this.status.healthScore,
      summary: {
        pm2: `${this.status.pm2Status.running || 0}/${this.status.pm2Status.total || 0} processes running`,
        githubActions: `${this.status.githubActionsStatus.workflows?.filter(w => w.exists).length || 0}/${this.status.githubActionsStatus.total || 0} workflows configured`,
        netlifyFunctions: `${this.status.netlifyFunctionsStatus.total || 0} functions configured`,
        npmScripts: `${(this.status.npmScriptsStatus.total || 0) - (this.status.npmScriptsStatus.missing?.length || 0)}/${this.status.npmScriptsStatus.total || 0} scripts available`
      },
      issues: this.status.issues,
      recommendations: this.generateRecommendations()
    };
    
    return report;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.status.healthScore < 70) {
      recommendations.push("Health score is low - consider restarting critical services");
    }
    
    if (this.status.pm2Status.errored > 0) {
      recommendations.push("Some PM2 processes are in error state - restart recommended");
    }
    
    if (this.status.npmScriptsStatus.missing?.length > 0) {
      recommendations.push("Some npm scripts are missing - check package.json configuration");
    }
    
    if (this.status.issues.length > 0) {
      recommendations.push("Active issues detected - review and resolve");
    }
    
    return recommendations;
  }

  async runCommand(command, args = []) {
    switch (command) {
      case "start":
        await this.startRedundancySystems();
        break;
        
      case "stop":
        await this.stopRedundancySystems();
        break;
        
      case "restart":
        await this.restartRedundancySystems();
        break;
        
      case "status":
        await this.runHealthCheck();
        console.log(JSON.stringify(this.status, null, 2));
        break;
        
      case "monitor":
        await this.runContinuousMonitoring();
        break;
        
      case "report":
        await this.runHealthCheck();
        const report = this.generateReport();
        console.log(JSON.stringify(report, null, 2));
        break;
        
      case "health":
        await this.runHealthCheck();
        console.log(`Health Score: ${this.status.healthScore}/100`);
        break;
        
      case "recovery":
        await this.attemptAutoRecovery();
        break;
        
      default:
        console.log("Available commands: start, stop, restart, status, monitor, report, health, recovery");
        break;
    }
  }
}

// CLI Interface
if (require.main === module) {
  const master = new CompleteRedundancyMaster();
  const command = process.argv[2] || "status";
  
  master.runCommand(command, process.argv.slice(3))
    .then(() => {
      process.exit(0);
    })
    .catch((error) => {
      console.error("Error:", error.message);
      process.exit(1);
    });
}

module.exports = CompleteRedundancyMaster;