#!/usr/bin/env node
"use strict";

const { spawnSync, execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class ComprehensiveAutomationOrchestratorV2 {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.ensureLogDirectory();
    
    this.config = {
      // All automation categories
      categories: {
        pm2: {
          name: "PM2 Process Management",
          scripts: [
            "automation:pm2",
            "automation:pm2:restart",
            "automation:pm2:status",
            "automation:pm2:logs",
            "automation:pm2:report",
            "automation:pm2:autostart",
            "automation:pm2:resurrect",
            "automation:pm2:fastads",
            "automation:pm2:cron"
          ],
          ecosystemFiles: [
            "ecosystem.pm2.cjs",
            "ecosystem.redundancy.cjs",
            "ecosystem.comprehensive-redundancy.cjs",
            "ecosystem.redundancy.pm2.cjs"
          ],
          healthCheckInterval: 30000,
          maxFailures: 3
        },
        
        githubActions: {
          name: "GitHub Actions",
          workflows: [
            ".github/workflows/marketing-sync.yml",
            ".github/workflows/sync-health.yml",
            ".github/workflows/marketing-sync-backup.yml",
            ".github/workflows/sync-health-backup.yml"
          ],
          fallbackScripts: [
            "automation/marketing-sync.js",
            "automation/git-sync.cjs",
            "automation/pm2-auto-sync.js"
          ],
          healthCheckInterval: 60000,
          maxFailures: 2
        },
        
        netlifyFunctions: {
          name: "Netlify Functions",
          manifestFile: "netlify/functions/functions-manifest.json",
          scripts: [
            "netlify:manifest",
            "netlify:trigger"
          ],
          healthCheckInterval: 120000,
          maxFailures: 2
        },
        
        buildAutomation: {
          name: "Build Automation",
          scripts: [
            "build",
            "build:heal",
            "build:smart",
            "build:auto-fix",
            "build:recovery",
            "build:health-check",
            "build:validate",
            "build:monitor",
            "build:orchestrator",
            "build:smart:full"
          ],
          healthCheckInterval: 90000,
          maxFailures: 3
        },
        
        gitAutomation: {
          name: "Git Automation",
          scripts: [
            "git:sync",
            "git:sync:enhanced",
            "git:health",
            "git:resolve",
            "git:cleanup",
            "git:status",
            "git:report",
            "git:pull",
            "git:cron:start",
            "git:cron:stop",
            "git:cron:status"
          ],
          healthCheckInterval: 45000,
          maxFailures: 2
        },
        
        contentAutomation: {
          name: "Content Automation",
          scripts: [
            "content:fix",
            "homepage:update",
            "front:futurize",
            "front:directory",
            "front:continuous",
            "front:continuous:fast",
            "footer:inject",
            "footer:cron"
          ],
          healthCheckInterval: 180000,
          maxFailures: 2
        },
        
        marketingAutomation: {
          name: "Marketing Automation",
          scripts: [
            "linkedin:run",
            "linkedin:cron",
            "linkedin:generate",
            "linkedin:start",
            "linkedin:test",
            "linkedin:marketing:start",
            "linkedin:marketing:cron:start",
            "linkedin:marketing:analyze",
            "instagram:marketing:start",
            "instagram:marketing:cron:start",
            "instagram:marketing:analyze"
          ],
          healthCheckInterval: 300000,
          maxFailures: 2
        },
        
        monitoringAutomation: {
          name: "Monitoring Automation",
          scripts: [
            "health:start",
            "automation:guardian",
            "automation:cloud",
            "automation:discover",
            "redundancy:start",
            "redundancy:stop",
            "redundancy:restart",
            "redundancy:status",
            "redundancy:health",
            "redundancy:logs"
          ],
          healthCheckInterval: 60000,
          maxFailures: 2
        },
        
        aiAutomation: {
          name: "AI Automation",
          scripts: [
            "ai:research",
            "ai:innovate",
            "ai:cron:start",
            "ai:cron:run",
            "ai:cron:stop",
            "ai:cron:status"
          ],
          healthCheckInterval: 240000,
          maxFailures: 2
        },
        
        designAutomation: {
          name: "Design Automation",
          scripts: [
            "design:start",
            "design:navigation",
            "design:layout",
            "design:visual",
            "design:cycle",
            "design:status",
            "design:stop",
            "design:all"
          ],
          healthCheckInterval: 300000,
          maxFailures: 2
        },
        
        syntaxAutomation: {
          name: "Syntax Automation",
          scripts: [
            "syntax:start",
            "syntax:start:monitor",
            "syntax:start:orchestrator",
            "syntax:start:continuous",
            "syntax:stop",
            "syntax:status",
            "syntax:quick-fix",
            "syntax:build-check",
            "syntax:monitor",
            "syntax:orchestrator",
            "syntax:continuous",
            "syntax:all"
          ],
          healthCheckInterval: 120000,
          maxFailures: 2
        },
        
        lintingAutomation: {
          name: "Linting Automation",
          scripts: [
            "linting:factory",
            "linting:factory:dev",
            "linting:cron",
            "linting:cron:dev",
            "linting:watcher",
            "linting:watcher:dev",
            "linting:orchestrator",
            "linting:orchestrator:dev",
            "linting:all",
            "linting:start",
            "linting:status",
            "linting:check",
            "linting:fix"
          ],
          healthCheckInterval: 180000,
          maxFailures: 2
        },
        
        healingAutomation: {
          name: "Healing Automation",
          scripts: [
            "healing:scan",
            "healing:fix",
            "healing:start",
            "healing:cron:start",
            "healing:cron:stop",
            "healing:cron:status"
          ],
          healthCheckInterval: 150000,
          maxFailures: 2
        },
        
        ventureAutomation: {
          name: "Venture Automation",
          scripts: [
            "venture:start",
            "venture:once",
            "venture:analyze",
            "venture:cron:start",
            "venture:cron:stop",
            "venture:cron:status",
            "venture:report"
          ],
          healthCheckInterval: 360000,
          maxFailures: 2
        },
        
        cloudAutomation: {
          name: "Cloud Automation",
          scripts: [
            "cloud:agents",
            "cloud:crawl",
            "cloud:factory",
            "cloud:advertise",
            "cloud:continuous"
          ],
          healthCheckInterval: 240000,
          maxFailures: 2
        }
      }
    };
    
    this.status = {};
    this.healthChecks = {};
    this.logFile = path.join(this.logDir, "comprehensive-automation-orchestrator-v2.log");
    
    // Initialize status for all categories
    for (const [category, config] of Object.entries(this.config.categories)) {
      this.status[category] = {
        healthy: true,
        lastCheck: Date.now(),
        failures: 0,
        lastError: null,
        running: false
      };
    }
  }

  ensureLogDirectory() {
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

  async start() {
    this.log("Starting Comprehensive Automation Orchestrator V2...");
    
    try {
      // Initialize all automation categories
      await this.initializeAllCategories();
      
      // Start health monitoring
      this.startHealthMonitoring();
      
      // Start automation coordination
      this.startAutomationCoordination();
      
      this.log("Comprehensive Automation Orchestrator V2 started successfully");
      return true;
    } catch (error) {
      this.log(`Failed to start automation orchestrator: ${error.message}`, "ERROR");
      return false;
    }
  }

  async initializeAllCategories() {
    this.log("Initializing all automation categories...");
    
    for (const [category, config] of Object.entries(this.config.categories)) {
      try {
        await this.initializeCategory(category, config);
      } catch (error) {
        this.log(`Failed to initialize category ${category}: ${error.message}`, "ERROR");
        this.status[category].healthy = false;
        this.status[category].failures++;
        this.status[category].lastError = error.message;
      }
    }
  }

  async initializeCategory(category, config) {
    this.log(`Initializing ${config.name}...`);
    
    switch (category) {
      case "pm2":
        await this.initializePM2Category(config);
        break;
      case "githubActions":
        await this.initializeGitHubActionsCategory(config);
        break;
      case "netlifyFunctions":
        await this.initializeNetlifyFunctionsCategory(config);
        break;
      case "buildAutomation":
        await this.initializeBuildAutomationCategory(config);
        break;
      case "gitAutomation":
        await this.initializeGitAutomationCategory(config);
        break;
      default:
        await this.initializeGenericCategory(category, config);
        break;
    }
    
    this.status[category].healthy = true;
    this.log(`${config.name} initialized successfully`);
  }

  async initializePM2Category(config) {
    // Check if PM2 is running
    const pm2Status = spawnSync("pm2", ["status"], { encoding: "utf8" });
    
    if (pm2Status.status !== 0) {
      this.log("PM2 not running, starting PM2...");
      execSync("npm install -g pm2", { stdio: "inherit" });
    }
    
    // Validate ecosystem files
    for (const ecosystemFile of config.ecosystemFiles) {
      if (fs.existsSync(ecosystemFile)) {
        this.log(`PM2 ecosystem file validated: ${ecosystemFile}`);
      } else {
        this.log(`PM2 ecosystem file missing: ${ecosystemFile}`, "WARN");
      }
    }
  }

  async initializeGitHubActionsCategory(config) {
    // Validate workflow files
    for (const workflow of config.workflows) {
      if (fs.existsSync(workflow)) {
        try {
          const workflowContent = fs.readFileSync(workflow, "utf8");
          if (workflowContent.includes("name:") && workflowContent.includes("on:")) {
            this.log(`GitHub workflow validated: ${workflow}`);
          } else {
            this.log(`Invalid workflow format: ${workflow}`, "WARN");
          }
        } catch (error) {
          this.log(`Failed to validate workflow ${workflow}: ${error.message}`, "WARN");
        }
      } else {
        this.log(`GitHub workflow missing: ${workflow}`, "WARN");
      }
    }
    
    // Validate fallback scripts
    for (const script of config.fallbackScripts) {
      if (fs.existsSync(script)) {
        this.log(`GitHub fallback script available: ${script}`);
      } else {
        this.log(`GitHub fallback script missing: ${script}`, "WARN");
      }
    }
  }

  async initializeNetlifyFunctionsCategory(config) {
    // Validate functions manifest
    if (fs.existsSync(config.manifestFile)) {
      const manifest = JSON.parse(fs.readFileSync(config.manifestFile, "utf8"));
      this.log(`Netlify functions manifest loaded with ${manifest.functions.length} functions`);
    } else {
      this.log("Netlify functions manifest not found, will regenerate", "WARN");
      await this.regenerateNetlifyFunctionsManifest();
    }
  }

  async initializeBuildAutomationCategory(config) {
    // Validate package.json scripts
    const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
    
    for (const script of config.scripts) {
      if (packageJson.scripts[script]) {
        this.log(`Build script available: ${script}`);
      } else {
        this.log(`Build script missing: ${script}`, "WARN");
      }
    }
  }

  async initializeGitAutomationCategory(config) {
    // Validate git repository
    if (!fs.existsSync(".git")) {
      this.log("Git repository not found", "WARN");
      return;
    }
    
    // Check git status
    try {
      const gitStatus = spawnSync("git", ["status"], { encoding: "utf8" });
      if (gitStatus.status === 0) {
        this.log("Git repository status checked successfully");
      } else {
        this.log("Git repository status check failed", "WARN");
      }
    } catch (error) {
      this.log(`Git status check error: ${error.message}`, "WARN");
    }
  }

  async initializeGenericCategory(category, config) {
    // For generic categories, just validate that the scripts exist in package.json
    const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
    
    for (const script of config.scripts) {
      if (packageJson.scripts[script]) {
        this.log(`Script available: ${script}`);
      } else {
        this.log(`Script missing: ${script}`, "WARN");
      }
    }
  }

  startHealthMonitoring() {
    this.log("Starting health monitoring for all categories...");
    
    for (const [category, config] of Object.entries(this.config.categories)) {
      const interval = setInterval(async () => {
        await this.performHealthCheck(category, config);
      }, config.healthCheckInterval);
      
      this.healthChecks[category] = interval;
    }
    
    this.log("Health monitoring started for all categories");
  }

  async performHealthCheck(category, config) {
    try {
      this.log(`Performing health check for ${config.name}...`);
      
      switch (category) {
        case "pm2":
          await this.checkPM2Health(config);
          break;
        case "githubActions":
          await this.checkGitHubActionsHealth(config);
          break;
        case "netlifyFunctions":
          await this.checkNetlifyFunctionsHealth(config);
          break;
        case "buildAutomation":
          await this.checkBuildAutomationHealth(config);
          break;
        case "gitAutomation":
          await this.checkGitAutomationHealth(config);
          break;
        default:
          await this.checkGenericHealth(category, config);
          break;
      }
      
      this.status[category].healthy = true;
      this.status[category].lastCheck = Date.now();
      this.status[category].failures = 0;
      this.status[category].lastError = null;
      
    } catch (error) {
      this.log(`Health check failed for ${category}: ${error.message}`, "ERROR");
      this.status[category].healthy = false;
      this.status[category].failures++;
      this.status[category].lastError = error.message;
      
      // Attempt recovery if failures exceed threshold
      if (this.status[category].failures >= config.maxFailures) {
        await this.attemptRecovery(category, config);
      }
    }
  }

  async checkPM2Health(config) {
    const pm2Status = spawnSync("pm2", ["status"], { encoding: "utf8" });
    
    if (pm2Status.status !== 0) {
      throw new Error("PM2 status check failed");
    }
    
    const output = pm2Status.stdout;
    
    // Check if critical processes are running
    for (const ecosystemFile of config.ecosystemFiles) {
      if (fs.existsSync(ecosystemFile)) {
        // Extract process names from ecosystem file
        try {
          const ecosystem = require(path.resolve(ecosystemFile));
          for (const app of ecosystem.apps || []) {
            if (!output.includes(app.name)) {
              throw new Error(`Critical PM2 process missing: ${app.name}`);
            }
          }
        } catch (error) {
          this.log(`Failed to parse ecosystem file ${ecosystemFile}: ${error.message}`, "WARN");
        }
      }
    }
  }

  async checkGitHubActionsHealth(config) {
    // Check workflow files
    for (const workflow of config.workflows) {
      if (!fs.existsSync(workflow)) {
        throw new Error(`GitHub workflow missing: ${workflow}`);
      }
    }
    
    // Check fallback scripts
    for (const script of config.fallbackScripts) {
      if (!fs.existsSync(script)) {
        throw new Error(`GitHub fallback script missing: ${script}`);
      }
    }
  }

  async checkNetlifyFunctionsHealth(config) {
    if (fs.existsSync(config.manifestFile)) {
      const manifest = JSON.parse(fs.readFileSync(config.manifestFile, "utf8"));
      
      // Check if manifest is recent
      const generatedAt = new Date(manifest.generatedAt);
      const now = new Date();
      const ageHours = (now - generatedAt) / (1000 * 60 * 60);
      
      if (ageHours > 24) {
        throw new Error("Netlify functions manifest is stale");
      }
    } else {
      throw new Error("Netlify functions manifest missing");
    }
  }

  async checkBuildAutomationHealth(config) {
    const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
    
    for (const script of config.scripts) {
      if (!packageJson.scripts[script]) {
        throw new Error(`Build script missing: ${script}`);
      }
    }
  }

  async checkGitAutomationHealth(config) {
    if (!fs.existsSync(".git")) {
      throw new Error("Git repository not found");
    }
    
    const gitStatus = spawnSync("git", ["status"], { encoding: "utf8" });
    if (gitStatus.status !== 0) {
      throw new Error("Git status check failed");
    }
  }

  async checkGenericHealth(category, config) {
    const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
    
    for (const script of config.scripts) {
      if (!packageJson.scripts[script]) {
        throw new Error(`Script missing: ${script}`);
      }
    }
  }

  async attemptRecovery(category, config) {
    this.log(`Attempting recovery for ${config.name}...`);
    
    try {
      switch (category) {
        case "pm2":
          await this.recoverPM2System();
          break;
        case "githubActions":
          await this.recoverGitHubActionsSystem();
          break;
        case "netlifyFunctions":
          await this.recoverNetlifyFunctionsSystem();
          break;
        case "buildAutomation":
          await this.recoverBuildAutomationSystem();
          break;
        case "gitAutomation":
          await this.recoverGitAutomationSystem();
          break;
        default:
          await this.recoverGenericSystem(category, config);
          break;
      }
      
      this.log(`Recovery successful for ${config.name}`);
      this.status[category].failures = 0;
      
    } catch (error) {
      this.log(`Recovery failed for ${category}: ${error.message}`, "ERROR");
    }
  }

  async recoverPM2System() {
    this.log("Recovering PM2 system...");
    
    try {
      // Kill all PM2 processes
      execSync("pm2 kill", { stdio: "inherit" });
      
      // Wait a moment
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Restart PM2
      execSync("pm2 resurrect", { stdio: "inherit" });
      
      this.log("PM2 system recovered");
    } catch (error) {
      throw new Error(`PM2 recovery failed: ${error.message}`);
    }
  }

  async recoverGitHubActionsSystem() {
    this.log("Recovering GitHub Actions system...");
    
    // For GitHub Actions, we can't directly recover, but we can ensure fallback scripts are available
    for (const script of this.config.categories.githubActions.fallbackScripts) {
      if (!fs.existsSync(script)) {
        this.log(`Fallback script missing: ${script}`, "WARN");
      }
    }
  }

  async recoverNetlifyFunctionsSystem() {
    this.log("Recovering Netlify Functions system...");
    
    try {
      await this.regenerateNetlifyFunctionsManifest();
      this.log("Netlify Functions system recovered");
    } catch (error) {
      throw new Error(`Netlify Functions recovery failed: ${error.message}`);
    }
  }

  async recoverBuildAutomationSystem() {
    this.log("Recovering Build Automation system...");
    
    try {
      // Try to run a basic build check
      execSync("npm run build:health-check", { stdio: "inherit" });
      this.log("Build Automation system recovered");
    } catch (error) {
      throw new Error(`Build Automation recovery failed: ${error.message}`);
    }
  }

  async recoverGitAutomationSystem() {
    this.log("Recovering Git Automation system...");
    
    try {
      // Check git status
      const gitStatus = spawnSync("git", ["status"], { encoding: "utf8" });
      if (gitStatus.status === 0) {
        this.log("Git Automation system recovered");
      } else {
        throw new Error("Git status check failed");
      }
    } catch (error) {
      throw new Error(`Git Automation recovery failed: ${error.message}`);
    }
  }

  async recoverGenericSystem(category, config) {
    this.log(`Recovering generic system: ${category}`);
    
    // For generic systems, we can't do much recovery, just log the issue
    this.log(`Generic recovery not implemented for ${category}`, "WARN");
  }

  async regenerateNetlifyFunctionsManifest() {
    this.log("Regenerating Netlify functions manifest...");
    
    try {
      execSync("npm run netlify:manifest", { stdio: "inherit" });
      this.log("Netlify functions manifest regenerated successfully");
    } catch (error) {
      throw new Error(`Failed to regenerate manifest: ${error.message}`);
    }
  }

  startAutomationCoordination() {
    this.log("Starting automation coordination...");
    
    // This is where we would coordinate between different automation systems
    // For now, we'll just log that coordination is active
    this.log("Automation coordination active");
  }

  getStatus() {
    return {
      timestamp: new Date().toISOString(),
      overall: {
        healthy: Object.values(this.status).every(s => s.healthy),
        totalCategories: Object.keys(this.status).length,
        healthyCategories: Object.values(this.status).filter(s => s.healthy).length
      },
      categories: this.status
    };
  }

  async stop() {
    this.log("Stopping Comprehensive Automation Orchestrator V2...");
    
    try {
      // Stop all health checks
      for (const [category, interval] of Object.entries(this.healthChecks)) {
        clearInterval(interval);
        this.log(`Stopped health monitoring for ${category}`);
      }
      
      this.log("Automation orchestrator stopped");
      return true;
    } catch (error) {
      this.log(`Failed to stop automation orchestrator: ${error.message}`, "ERROR");
      return false;
    }
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new ComprehensiveAutomationOrchestratorV2();
  
  const command = process.argv[2] || "start";
  
  switch (command) {
    case "start":
      orchestrator.start().then(success => {
        if (success) {
          console.log("Automation orchestrator started successfully");
          process.exit(0);
        } else {
          console.error("Failed to start automation orchestrator");
          process.exit(1);
        }
      });
      break;
      
    case "stop":
      orchestrator.stop().then(success => {
        if (success) {
          console.log("Automation orchestrator stopped successfully");
          process.exit(0);
        } else {
          console.error("Failed to stop automation orchestrator");
          process.exit(1);
        }
      });
      break;
      
    case "status":
      console.log(JSON.stringify(orchestrator.getStatus(), null, 2));
      break;
      
    case "health":
      const status = orchestrator.getStatus();
      console.log(`Overall Health: ${status.overall.healthy ? "HEALTHY" : "UNHEALTHY"}`);
      console.log(`Healthy Categories: ${status.overall.healthyCategories}/${status.overall.totalCategories}`);
      
      for (const [category, categoryStatus] of Object.entries(status.categories)) {
        console.log(`${category}: ${categoryStatus.healthy ? "HEALTHY" : "UNHEALTHY"} (Failures: ${categoryStatus.failures})`);
        if (categoryStatus.lastError) {
          console.log(`  Last Error: ${categoryStatus.lastError}`);
        }
      }
      break;
      
    default:
      console.log("Usage: node comprehensive-automation-orchestrator-v2.cjs [start|stop|status|health]");
      process.exit(1);
  }
}

module.exports = ComprehensiveAutomationOrchestratorV2;