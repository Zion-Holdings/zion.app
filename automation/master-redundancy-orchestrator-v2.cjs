#!/usr/bin/env node
"use strict";

const { spawnSync, execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class MasterRedundancyOrchestratorV2 {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "master-redundancy-v2.log");
    this.ensureLogDir();
    
    this.config = {
      // All PM2 Ecosystems - Complete Coverage
      pm2Ecosystems: [
        "ecosystem.pm2.cjs",
        "ecosystem.redundancy.cjs", 
        "ecosystem.comprehensive-redundancy.cjs",
        "ecosystem.ultimate-redundancy.pm2.cjs",
        "ecosystem.fast-ads.local.cjs",
        "ecosystem.cron.local.cjs",
        "ecosystem.ultimate-redundancy.pm2.cjs"
      ],
      
      // All PM2 Process Groups - Complete Coverage
      pm2ProcessGroups: {
        core: ["zion-auto-sync", "zion-auto-sync-cron"],
        redundancy: [
          "redundancy-automation-system",
          "redundancy-health-monitor",
          "redundancy-git-sync", 
          "redundancy-build-monitor",
          "pm2-redundancy-monitor",
          "comprehensive-redundancy-orchestrator",
          "ultimate-redundancy-master"
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
          "ultimate-redundancy-orchestrator"
        ]
      },
      
      // All GitHub Actions Workflows - Complete Coverage
      githubWorkflows: [
        "marketing-sync.yml",
        "sync-health.yml",
        "marketing-sync-backup.yml",
        "sync-health-backup.yml"
      ],
      
      // All Netlify Functions from manifest - Complete Coverage
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
      
      // All Package.json Scripts - Complete Coverage
      packageScripts: [
        "pm2:start", "pm2:stop", "pm2:restart", "pm2:status", "pm2:logs",
        "pm2:fastads:start", "pm2:fastads:restart", "pm2:fastads:stop",
        "pm2:cron:start", "pm2:cron:restart", "pm2:cron:stop",
        "pm2:bootstrap:logrotate",
        "functions:run", "functions:run:execute",
        "front:advertise", "deps:maintain", "deps:cron:start",
        "sitemap", "netlify:manifest", "netlify:trigger",
        "readme:generate", "search:index", "content:fix",
        "dev", "build", "prebuild", "export", "start", "postbuild",
        "lint", "type-check", "prepare", "fix:all", "build:heal",
        "ci:heal", "build:health-check", "build:validate", "build:recovery",
        "build:smart", "build:auto-fix", "build:monitor", "build:guardian",
        "build:orchestrator", "build:orchestrator:start", "build:orchestrator:status",
        "build:smart:full", "security:scan", "auto:intel", "autonomous",
        "autonomous:dev", "autonomous:status", "linkedin:run", "linkedin:cron",
        "linkedin:generate", "linkedin:start", "linkedin:test",
        "mcp:start", "mcp:client", "mcp:orchestrator", "mcp:enhance",
        "mcp:workflow", "mcp:report", "mcp:setup-cron", "mcp:daily",
        "mcp:weekly", "mcp:monitor", "mcp:status", "mcp:test",
        "google-docs:start", "google-docs:dev", "google-docs:status",
        "google-docs:report", "google-docs:test", "cursor:memory",
        "cursor:memory:dev", "cursor:memory:config", "cursor:memory:status",
        "automation:factory", "automation:factory:dev", "automation:orchestrator",
        "automation:dashboard", "ai:research", "ai:innovate", "ai:cron:start",
        "ai:cron:run", "ai:cron:stop", "ai:cron:status", "automation:all",
        "automation:status", "automation:report", "automation:git-sync",
        "git:sync", "git:sync:enhanced", "git:health", "git:resolve",
        "git:cleanup", "git:status", "git:report", "automation:improvement",
        "automation:guardian", "automation:cloud", "automation:discover",
        "redundancy:start", "redundancy:stop", "redundancy:restart",
        "redundancy:status", "redundancy:logs", "redundancy:system",
        "redundancy:health", "redundancy:git-sync", "redundancy:build",
        "redundancy:pm2", "redundancy:pm2:stop", "redundancy:pm2:restart",
        "redundancy:pm2:status", "automation:improvement:dev",
        "automation:coordinator", "automation:coordinator:dev",
        "automation:restart", "automation:enhance", "automation:beautify",
        "autonomous:start", "autonomous:stop", "autonomous:restart",
        "autonomous:factory", "autonomous:orchestrator", "autonomous:cron",
        "autonomous:cron:start", "autonomous:cron:stop", "autonomous:cron:status",
        "autonomous:cron:fix", "autonomous:all", "design:start",
        "design:navigation", "design:layout", "design:visual", "design:cycle",
        "design:status", "design:stop", "design:all", "syntax:start",
        "syntax:start:monitor", "syntax:start:orchestrator", "syntax:start:continuous",
        "syntax:stop", "syntax:status", "syntax:quick-fix", "syntax:build-check",
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
    
    this.status = {
      pm2: { running: [], stopped: [], failed: [] },
      github: { active: [], failed: [], backup: [] },
      netlify: { active: [], failed: [], backup: [] },
      scripts: { available: [], tested: [], failed: [] },
      lastCheck: null,
      health: "unknown"
    };
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

  async executeCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      try {
        const result = spawnSync(command, args, {
          stdio: 'pipe',
          encoding: 'utf8',
          cwd: this.workspace,
          ...options
        });
        
        resolve({
          success: result.status === 0,
          stdout: result.stdout,
          stderr: result.stderr,
          status: result.status,
          error: result.error
        });
      } catch (error) {
        resolve({
          success: false,
          stdout: "",
          stderr: error.message,
          status: -1,
          error: error
        });
      }
    });
  }

  async checkPM2Status() {
    this.log("Checking PM2 status...");
    
    try {
      const result = await this.executeCommand("pm2", ["status", "--json"]);
      if (result.success && result.stdout.trim()) {
        try {
          const pm2Status = JSON.parse(result.stdout);
          this.status.pm2.running = [];
          this.status.pm2.stopped = [];
          this.status.pm2.failed = [];
          
          if (Array.isArray(pm2Status)) {
            pm2Status.forEach(process => {
              if (process.pm2_env && process.pm2_env.status === "online") {
                this.status.pm2.running.push(process.name);
              } else if (process.pm2_env && process.pm2_env.status === "stopped") {
                this.status.pm2.stopped.push(process.name);
              } else if (process.pm2_env && process.pm2_env.status) {
                this.status.pm2.failed.push(process.name);
              }
            });
          }
          
          this.log(`PM2 Status: ${this.status.pm2.running.length} running, ${this.status.pm2.stopped.length} stopped, ${this.status.pm2.failed.length} failed`);
        } catch (parseError) {
          this.log(`Failed to parse PM2 JSON output: ${parseError.message}`, "ERROR");
          // Fallback to simple status check
          const simpleResult = await this.executeCommand("pm2", ["status"]);
          if (simpleResult.success) {
            this.log("PM2 processes detected (using simple status)");
            this.status.pm2.running = ["detected"];
          }
        }
      } else {
        // Try alternative PM2 status command
        const altResult = await this.executeCommand("pm2", ["list"]);
        if (altResult.success && altResult.stdout.includes("online")) {
          this.log("PM2 processes detected (using list command)");
          this.status.pm2.running = ["detected"];
        } else {
          this.log("No PM2 processes running");
        }
      }
    } catch (error) {
      this.log(`Failed to check PM2 status: ${error.message}`, "ERROR");
    }
  }

  async checkGitHubActionsStatus() {
    this.log("Checking GitHub Actions status...");
    
    try {
      // Check if workflows exist
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      if (fs.existsSync(workflowsDir)) {
        const workflowFiles = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));
        this.status.github.active = workflowFiles;
        this.log(`Found ${workflowFiles.length} GitHub Actions workflows`);
      }
    } catch (error) {
      this.log(`Failed to check GitHub Actions status: ${error.message}`, "ERROR");
    }
  }

  async checkNetlifyFunctionsStatus() {
    this.log("Checking Netlify Functions status...");
    
    try {
      const manifestPath = path.join(this.workspace, "netlify/functions/functions-manifest.json");
      if (fs.existsSync(manifestPath)) {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        this.status.netlify.active = manifest.functions || [];
        this.log(`Found ${this.status.netlify.active.length} Netlify functions`);
      }
    } catch (error) {
      this.log(`Failed to check Netlify Functions status: ${error.message}`, "ERROR");
    }
  }

  async checkPackageScripts() {
    this.log("Checking package.json scripts...");
    
    try {
      const packagePath = path.join(this.workspace, "package.json");
      if (fs.existsSync(packagePath)) {
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        this.status.scripts.available = Object.keys(packageJson.scripts || {});
        this.log(`Found ${this.status.scripts.available.length} package.json scripts`);
      }
    } catch (error) {
      this.log(`Failed to check package.json scripts: ${error.message}`, "ERROR");
    }
  }

  async startPM2Redundancy() {
    this.log("Starting PM2 redundancy systems...");
    
    try {
      // Start all redundancy ecosystems
      for (const ecosystem of this.config.pm2Ecosystems) {
        if (fs.existsSync(ecosystem)) {
          this.log(`Starting PM2 ecosystem: ${ecosystem}`);
          await this.executeCommand("pm2", ["start", ecosystem, "--update-env"]);
        }
      }
      
      // Start individual redundancy processes
      for (const group of Object.values(this.config.pm2ProcessGroups)) {
        for (const process of group) {
          this.log(`Starting PM2 process: ${process}`);
          await this.executeCommand("pm2", ["start", process]);
        }
      }
      
      this.log("PM2 redundancy systems started");
    } catch (error) {
      this.log(`Failed to start PM2 redundancy: ${error.message}`, "ERROR");
    }
  }

  async startGitHubActionsRedundancy() {
    this.log("Starting GitHub Actions redundancy...");
    
    try {
      // Create backup workflows
      for (const workflow of this.config.githubWorkflows) {
        const sourcePath = path.join(this.workspace, ".github/workflows", workflow);
        const backupPath = path.join(this.workspace, ".github/workflows", workflow.replace('.yml', '-redundancy.yml'));
        
        if (fs.existsSync(sourcePath) && !fs.existsSync(backupPath)) {
          const content = fs.readFileSync(sourcePath, 'utf8');
          const backupContent = content.replace(
            /name:\s*([^\n]+)/,
            `name: $1 (Redundancy)`
          );
          fs.writeFileSync(backupPath, backupContent);
          this.log(`Created backup workflow: ${workflow.replace('.yml', '-redundancy.yml')}`);
        }
      }
      
      this.log("GitHub Actions redundancy configured");
    } catch (error) {
      this.log(`Failed to start GitHub Actions redundancy: ${error.message}`, "ERROR");
    }
  }

  async startNetlifyFunctionsRedundancy() {
    this.log("Starting Netlify Functions redundancy...");
    
    try {
      // Create backup function runners
      for (const func of this.config.netlifyFunctions) {
        const sourcePath = path.join(this.workspace, "netlify/functions", func);
        const backupPath = path.join(this.workspace, "netlify/functions", `${func}-redundancy`);
        
        if (fs.existsSync(sourcePath) && !fs.existsSync(backupPath)) {
          // Copy function with redundancy suffix
          if (fs.statSync(sourcePath).isDirectory()) {
            this.executeCommand("cp", ["-r", sourcePath, backupPath]);
          } else {
            this.executeCommand("cp", [sourcePath, backupPath]);
          }
          this.log(`Created backup function: ${func}-redundancy`);
        }
      }
      
      this.log("Netlify Functions redundancy configured");
    } catch (error) {
      this.log(`Failed to start Netlify Functions redundancy: ${error.message}`, "ERROR");
    }
  }

  async startPackageScriptsRedundancy() {
    this.log("Starting package.json scripts redundancy...");
    
    try {
      // Create redundancy script runners
      const redundancyScripts = {};
      
      for (const script of this.config.packageScripts) {
        const redundancyScript = `redundancy:${script}`;
        redundancyScripts[redundancyScript] = `npm run ${script} || (echo "Primary script failed, running backup..." && npm run ${script}:backup || true)`;
      }
      
      // Add redundancy scripts to package.json
      const packagePath = path.join(this.workspace, "package.json");
      if (fs.existsSync(packagePath)) {
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        packageJson.scripts = { ...packageJson.scripts, ...redundancyScripts };
        fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
        this.log(`Added ${Object.keys(redundancyScripts).length} redundancy scripts to package.json`);
      }
      
      this.log("Package.json scripts redundancy configured");
    } catch (error) {
      this.log(`Failed to start package.json scripts redundancy: ${error.message}`, "ERROR");
    }
  }

  async startAllRedundancy() {
    this.log("Starting comprehensive redundancy system...");
    
    await this.startPM2Redundancy();
    await this.startGitHubActionsRedundancy();
    await this.startNetlifyFunctionsRedundancy();
    await this.startPackageScriptsRedundancy();
    
    this.log("Comprehensive redundancy system started successfully");
  }

  async stopAllRedundancy() {
    this.log("Stopping comprehensive redundancy system...");
    
    try {
      // Stop all PM2 processes
      await this.executeCommand("pm2", ["stop", "all"]);
      await this.executeCommand("pm2", ["delete", "all"]);
      
      this.log("Comprehensive redundancy system stopped");
    } catch (error) {
      this.log(`Failed to stop redundancy system: ${error.message}`, "ERROR");
    }
  }

  async restartAllRedundancy() {
    this.log("Restarting comprehensive redundancy system...");
    
    await this.stopAllRedundancy();
    await this.startAllRedundancy();
    
    this.log("Comprehensive redundancy system restarted");
  }

  async checkAllStatus() {
    this.log("Checking comprehensive status...");
    
    await this.checkPM2Status();
    await this.checkGitHubActionsStatus();
    await this.checkNetlifyFunctionsStatus();
    await this.checkPackageScripts();
    
    this.status.lastCheck = new Date().toISOString();
    
    // Determine overall health
    const totalProcesses = this.status.pm2.running.length + this.status.pm2.stopped.length + this.status.pm2.failed.length;
    const runningPercentage = totalProcesses > 0 ? (this.status.pm2.running.length / totalProcesses) * 100 : 0;
    
    if (runningPercentage >= 90) {
      this.status.health = "excellent";
    } else if (runningPercentage >= 75) {
      this.status.health = "good";
    } else if (runningPercentage >= 50) {
      this.status.health = "fair";
    } else {
      this.status.health = "poor";
    }
    
    this.log(`Overall health: ${this.status.health} (${runningPercentage.toFixed(1)}% running)`);
    
    return this.status;
  }

  async generateReport() {
    const status = await this.checkAllStatus();
    
    const report = {
      timestamp: new Date().toISOString(),
      overallHealth: status.health,
      pm2: {
        total: status.pm2.running.length + status.pm2.stopped.length + status.pm2.failed.length,
        running: status.pm2.running.length,
        stopped: status.pm2.stopped.length,
        failed: status.pm2.failed.length,
        runningPercentage: status.pm2.running.length / (status.pm2.running.length + status.pm2.stopped.length + status.pm2.failed.length) * 100
      },
      github: {
        total: status.github.active.length,
        active: status.github.active.length
      },
      netlify: {
        total: status.netlify.active.length,
        active: status.netlify.active.length
      },
      scripts: {
        total: status.scripts.available.length,
        available: status.scripts.available.length
      },
      recommendations: []
    };
    
    // Generate recommendations
    if (status.pm2.failed.length > 0) {
      report.recommendations.push("Restart failed PM2 processes");
    }
    if (status.pm2.stopped.length > status.pm2.running.length) {
      report.recommendations.push("Start stopped PM2 processes");
    }
    if (status.health === "poor") {
      report.recommendations.push("System health is poor - immediate attention required");
    }
    
    return report;
  }

  async monitor() {
    this.log("Starting continuous monitoring...");
    
    const monitorInterval = setInterval(async () => {
      try {
        const status = await this.checkAllStatus();
        
        if (status.health === "poor") {
          this.log("System health is poor - attempting auto-recovery", "WARN");
          await this.restartAllRedundancy();
        }
        
        // Log status every 5 minutes
        if (new Date().getMinutes() % 5 === 0) {
          this.log(`Monitoring update - Health: ${status.health}, PM2: ${status.pm2.running.length}/${status.pm2.running.length + status.pm2.stopped.length + status.pm2.failed.length} running`);
        }
      } catch (error) {
        this.log(`Monitoring error: ${error.message}`, "ERROR");
      }
    }, 60000); // Check every minute
    
    return monitorInterval;
  }
}

// CLI Interface
async function main() {
  const orchestrator = new MasterRedundancyOrchestratorV2();
  const command = process.argv[2] || "status";
  
  try {
    switch (command) {
      case "start":
        await orchestrator.startAllRedundancy();
        break;
      case "stop":
        await orchestrator.stopAllRedundancy();
        break;
      case "restart":
        await orchestrator.restartAllRedundancy();
        break;
      case "status":
        const status = await orchestrator.checkAllStatus();
        console.log(JSON.stringify(status, null, 2));
        break;
      case "report":
        const report = await orchestrator.generateReport();
        console.log(JSON.stringify(report, null, 2));
        break;
      case "monitor":
        const interval = await orchestrator.monitor();
        console.log("Monitoring started. Press Ctrl+C to stop.");
        process.on('SIGINT', () => {
          clearInterval(interval);
          process.exit(0);
        });
        break;
      default:
        console.log("Usage: node master-redundancy-orchestrator-v2.cjs [start|stop|restart|status|report|monitor]");
        process.exit(1);
    }
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = MasterRedundancyOrchestratorV2;