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
    this.logFile = path.join(this.logDir, "ultimate-redundancy-master.log");
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
        "build", "build:heal", "build:recovery", "build:smart",
        "build:monitor", "build:guardian", "build:orchestrator",
        "security:scan", "auto:intel", "autonomous",
        "linkedin:run", "linkedin:cron", "linkedin:generate",
        "mcp:start", "mcp:client", "mcp:orchestrator",
        "google-docs:start", "google-docs:dev", "google-docs:status",
        "cursor:memory", "automation:factory", "automation:orchestrator",
        "ai:research", "ai:innovate", "ai:cron:start",
        "automation:all", "automation:status", "automation:report",
        "automation:git-sync", "git:sync", "git:sync:enhanced",
        "redundancy:start", "redundancy:stop", "redundancy:restart",
        "redundancy:system", "redundancy:health", "redundancy:git-sync",
        "redundancy:build", "redundancy:pm2", "redundancy:github",
        "redundancy:netlify", "redundancy:enhanced:start",
        "redundancy:comprehensive:start", "redundancy:orchestrator"
      ]
    };
    
    this.status = {
      pm2: { healthy: false, processes: [], lastCheck: null },
      github: { healthy: false, workflows: [], lastCheck: null },
      netlify: { healthy: false, functions: [], lastCheck: null },
      npm: { healthy: false, scripts: [], lastCheck: null },
      overall: { healthy: false, score: 0, lastCheck: null }
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

  async executeCommand(command, options = {}) {
    return new Promise((resolve) => {
      try {
        const result = execSync(command, {
          encoding: 'utf8',
          cwd: this.workspace,
          stdio: options.silent ? 'pipe' : 'inherit',
          ...options
        });
        resolve({ success: true, output: result, error: null });
      } catch (error) {
        resolve({ success: false, output: null, error: error.message });
      }
    });
  }

  async checkPM2Status() {
    this.log("Checking PM2 status...");
    
    try {
      // Check if PM2 is running
      const pm2Status = await this.executeCommand("pm2 status --json", { silent: true });
      
      if (!pm2Status.success) {
        this.log("PM2 not running, starting PM2...", "WARN");
        await this.executeCommand("pm2 resurrect || pm2 start ecosystem.pm2.cjs");
        return false;
      }

      // Parse PM2 status
      let processes = [];
      try {
        processes = JSON.parse(pm2Status.output);
      } catch (e) {
        this.log("Failed to parse PM2 status", "ERROR");
        return false;
      }

      // Check all required processes
      const requiredProcesses = Object.values(this.config.pm2ProcessGroups).flat();
      const runningProcesses = processes.map(p => p.name);
      const missingProcesses = requiredProcesses.filter(p => !runningProcesses.includes(p));

      if (missingProcesses.length > 0) {
        this.log(`Missing PM2 processes: ${missingProcesses.join(", ")}`, "WARN");
        
        // Start missing processes
        for (const process of missingProcesses) {
          this.log(`Starting missing process: ${process}`);
          await this.executeCommand(`pm2 start ecosystem.pm2.cjs --only ${process} || pm2 start ecosystem.redundancy.cjs --only ${process} || pm2 start ecosystem.comprehensive-redundancy.cjs --only ${process}`);
        }
      }

      this.status.pm2.processes = processes;
      this.status.pm2.healthy = missingProcesses.length === 0;
      this.status.pm2.lastCheck = new Date();
      
      this.log(`PM2 Status: ${this.status.pm2.healthy ? 'HEALTHY' : 'UNHEALTHY'} (${processes.length} processes running)`);
      return this.status.pm2.healthy;
      
    } catch (error) {
      this.log(`PM2 check failed: ${error.message}`, "ERROR");
      this.status.pm2.healthy = false;
      this.status.pm2.lastCheck = new Date();
      return false;
    }
  }

  async checkGitHubActions() {
    this.log("Checking GitHub Actions workflows...");
    
    try {
      // Check if workflows directory exists
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      if (!fs.existsSync(workflowsDir)) {
        this.log("GitHub workflows directory not found", "ERROR");
        return false;
      }

      // Check each workflow file
      const workflows = [];
      for (const workflow of this.config.githubWorkflows) {
        const workflowPath = path.join(workflowsDir, workflow);
        if (fs.existsSync(workflowPath)) {
          workflows.push(workflow);
        } else {
          this.log(`Workflow not found: ${workflow}`, "WARN");
        }
      }

      // Check if workflows are properly configured
      let healthy = true;
      for (const workflow of workflows) {
        const workflowPath = path.join(workflowsDir, workflow);
        const content = fs.readFileSync(workflowPath, 'utf8');
        
        // Basic validation
        if (!content.includes('name:') || !content.includes('on:')) {
          this.log(`Invalid workflow configuration: ${workflow}`, "WARN");
          healthy = false;
        }
      }

      this.status.github.workflows = workflows;
      this.status.github.healthy = healthy && workflows.length > 0;
      this.status.github.lastCheck = new Date();
      
      this.log(`GitHub Actions Status: ${this.status.github.healthy ? 'HEALTHY' : 'UNHEALTHY'} (${workflows.length} workflows)`);
      return this.status.github.healthy;
      
    } catch (error) {
      this.log(`GitHub Actions check failed: ${error.message}`, "ERROR");
      this.status.github.healthy = false;
      this.status.github.lastCheck = new Date();
      return false;
    }
  }

  async checkNetlifyFunctions() {
    this.log("Checking Netlify functions...");
    
    try {
      // Check if functions directory exists
      const functionsDir = path.join(this.workspace, "netlify/functions");
      if (!fs.existsSync(functionsDir)) {
        this.log("Netlify functions directory not found", "ERROR");
        return false;
      }

      // Check functions manifest
      const manifestPath = path.join(functionsDir, "functions-manifest.json");
      if (!fs.existsSync(manifestPath)) {
        this.log("Functions manifest not found, regenerating...", "WARN");
        await this.executeCommand("npm run netlify:manifest");
      }

      // Read manifest
      let manifest;
      try {
        const manifestContent = fs.readFileSync(manifestPath, 'utf8');
        manifest = JSON.parse(manifestContent);
      } catch (e) {
        this.log("Failed to parse functions manifest", "ERROR");
        return false;
      }

      // Check if all required functions are in manifest
      const requiredFunctions = this.config.netlifyFunctions;
      const manifestFunctions = manifest.functions || [];
      const missingFunctions = requiredFunctions.filter(f => !manifestFunctions.includes(f));

      if (missingFunctions.length > 0) {
        this.log(`Missing functions in manifest: ${missingFunctions.join(", ")}`, "WARN");
      }

      this.status.netlify.functions = manifestFunctions;
      this.status.netlify.healthy = missingFunctions.length === 0;
      this.status.netlify.lastCheck = new Date();
      
      this.log(`Netlify Functions Status: ${this.status.netlify.healthy ? 'HEALTHY' : 'UNHEALTHY'} (${manifestFunctions.length} functions)`);
      return this.status.netlify.healthy;
      
    } catch (error) {
      this.log(`Netlify functions check failed: ${error.message}`, "ERROR");
      this.status.netlify.healthy = false;
      this.status.netlify.lastCheck = new Date();
      return false;
    }
  }

  async checkNpmScripts() {
    this.log("Checking npm scripts...");
    
    try {
      // Check if package.json exists
      const packagePath = path.join(this.workspace, "package.json");
      if (!fs.existsSync(packagePath)) {
        this.log("package.json not found", "ERROR");
        return false;
      }

      // Read package.json
      const packageContent = fs.readFileSync(packagePath, 'utf8');
      const packageJson = JSON.parse(packageContent);
      const availableScripts = Object.keys(packageJson.scripts || {});

      // Check if all required scripts exist
      const requiredScripts = this.config.npmScripts;
      const missingScripts = requiredScripts.filter(s => !availableScripts.includes(s));

      if (missingScripts.length > 0) {
        this.log(`Missing npm scripts: ${missingScripts.join(", ")}`, "WARN");
      }

      this.status.npm.scripts = availableScripts;
      this.status.npm.healthy = missingScripts.length === 0;
      this.status.npm.lastCheck = new Date();
      
      this.log(`NPM Scripts Status: ${this.status.npm.healthy ? 'HEALTHY' : 'UNHEALTHY'} (${availableScripts.length} scripts)`);
      return this.status.npm.healthy;
      
    } catch (error) {
      this.log(`NPM scripts check failed: ${error.message}`, "ERROR");
      this.status.npm.healthy = false;
      this.status.npm.lastCheck = new Date();
      return false;
    }
  }

  async runComprehensiveCheck() {
    this.log("Starting comprehensive redundancy check...");
    
    const startTime = Date.now();
    
    // Run all checks in parallel
    const [pm2Healthy, githubHealthy, netlifyHealthy, npmHealthy] = await Promise.all([
      this.checkPM2Status(),
      this.checkGitHubActions(),
      this.checkNetlifyFunctions(),
      this.checkNpmScripts()
    ]);

    // Calculate overall health score
    const checks = [pm2Healthy, githubHealthy, netlifyHealthy, npmHealthy];
    const healthyChecks = checks.filter(Boolean).length;
    const overallScore = Math.round((healthyChecks / checks.length) * 100);
    
    this.status.overall.healthy = overallScore >= 80;
    this.status.overall.score = overallScore;
    this.status.overall.lastCheck = new Date();

    const duration = Date.now() - startTime;
    
    this.log(`Comprehensive check completed in ${duration}ms`);
    this.log(`Overall Health Score: ${overallScore}% (${healthyChecks}/${checks.length} systems healthy)`);
    
    return this.status.overall.healthy;
  }

  async startRedundancySystems() {
    this.log("Starting all redundancy systems...");
    
    try {
      // Start PM2 redundancy
      await this.executeCommand("npm run redundancy:pm2:manager");
      
      // Start GitHub Actions redundancy
      await this.executeCommand("npm run redundancy:github:manager");
      
      // Start Netlify functions redundancy
      await this.executeCommand("npm run redundancy:netlify:manager");
      
      // Start comprehensive redundancy orchestrator
      await this.executeCommand("npm run redundancy:orchestrator");
      
      this.log("All redundancy systems started successfully");
      return true;
      
    } catch (error) {
      this.log(`Failed to start redundancy systems: ${error.message}`, "ERROR");
      return false;
    }
  }

  async stopRedundancySystems() {
    this.log("Stopping all redundancy systems...");
    
    try {
      // Stop PM2 processes
      await this.executeCommand("pm2 stop all");
      
      // Stop any running Node processes
      await this.executeCommand("pkill -f 'node.*redundancy' || true");
      
      this.log("All redundancy systems stopped successfully");
      return true;
      
    } catch (error) {
      this.log(`Failed to stop redundancy systems: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restartRedundancySystems() {
    this.log("Restarting all redundancy systems...");
    
    await this.stopRedundancySystems();
    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
    return await this.startRedundancySystems();
  }

  getStatus() {
    return this.status;
  }

  async generateReport() {
    this.log("Generating redundancy report...");
    
    const report = {
      timestamp: new Date().toISOString(),
      overall: this.status.overall,
      systems: {
        pm2: this.status.pm2,
        github: this.status.github,
        netlify: this.status.netlify,
        npm: this.status.npm
      },
      recommendations: []
    };

    // Generate recommendations
    if (!this.status.pm2.healthy) {
      report.recommendations.push("PM2 system needs attention - check process status and restart if needed");
    }
    
    if (!this.status.github.healthy) {
      report.recommendations.push("GitHub Actions workflows need attention - validate workflow configurations");
    }
    
    if (!this.status.netlify.healthy) {
      report.recommendations.push("Netlify functions need attention - regenerate manifest and check function files");
    }
    
    if (!this.status.npm.healthy) {
      report.recommendations.push("NPM scripts need attention - check package.json for missing scripts");
    }

    // Save report
    const reportPath = path.join(this.logDir, "redundancy-report.json");
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportPath}`);
    return report;
  }

  async runContinuousMonitoring(intervalMs = 60000) {
    this.log(`Starting continuous monitoring (interval: ${intervalMs}ms)...`);
    
    const monitor = async () => {
      try {
        await this.runComprehensiveCheck();
        await this.generateReport();
        
        // Auto-heal if needed
        if (!this.status.overall.healthy) {
          this.log("System unhealthy, attempting auto-healing...", "WARN");
          await this.restartRedundancySystems();
        }
        
      } catch (error) {
        this.log(`Monitoring cycle failed: ${error.message}`, "ERROR");
      }
    };

    // Run initial check
    await monitor();
    
    // Set up interval
    const intervalId = setInterval(monitor, intervalMs);
    
    // Return function to stop monitoring
    return () => {
      clearInterval(intervalId);
      this.log("Continuous monitoring stopped");
    };
  }
}

// CLI interface
async function main() {
  const orchestrator = new UltimateRedundancyMaster();
  const command = process.argv[2] || "check";
  
  try {
    switch (command) {
      case "check":
        await orchestrator.runComprehensiveCheck();
        break;
        
      case "start":
        await orchestrator.startRedundancySystems();
        break;
        
      case "stop":
        await orchestrator.stopRedundancySystems();
        break;
        
      case "restart":
        await orchestrator.restartRedundancySystems();
        break;
        
      case "status":
        console.log(JSON.stringify(orchestrator.getStatus(), null, 2));
        break;
        
      case "report":
        await orchestrator.generateReport();
        break;
        
      case "monitor":
        const stopMonitoring = await orchestrator.runContinuousMonitoring();
        process.on('SIGINT', () => {
          stopMonitoring();
          process.exit(0);
        });
        break;
        
      default:
        console.log(`
Ultimate Redundancy Master - Usage:
  node ultimate-redundancy-master.cjs [command]

Commands:
  check     - Run comprehensive redundancy check
  start     - Start all redundancy systems
  stop      - Stop all redundancy systems
  restart   - Restart all redundancy systems
  status    - Show current status
  report    - Generate redundancy report
  monitor   - Start continuous monitoring
        `);
    }
  } catch (error) {
    console.error(`Command failed: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = UltimateRedundancyMaster;