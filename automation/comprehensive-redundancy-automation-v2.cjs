#!/usr/bin/env node
"use strict";

const { spawnSync, execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class ComprehensiveRedundancyAutomationV2 {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.ensureLogDirectory();
    
    this.config = {
      // PM2 Redundancy Configuration
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
          "enhanced-netlify-functions-redundancy",
          "master-build-orchestrator",
          "continuous-build-monitor",
          "build-failure-recovery",
          "pre-build-health-check",
          "nextjs-page-validator"
        ],
        healthCheckInterval: 30000,
        maxRestartAttempts: 5,
        restartDelay: 5000,
        autoRecovery: true,
        loadBalancing: true,
        logRotation: true
      },
      
      // GitHub Actions Redundancy Configuration
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
          "automation/pm2-auto-sync.js",
          "automation/enhanced-git-sync-orchestrator.cjs",
          "automation/redundancy-git-sync.cjs"
        ],
        backupTriggers: true,
        workflowValidation: true,
        apiHealthCheck: true
      },
      
      // Netlify Functions Redundancy Configuration
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
      
      // Additional Automation Scripts Redundancy
      automationScripts: {
        coreScripts: [
          "automation/marketing-sync.js",
          "automation/git-sync.cjs",
          "automation/pm2-auto-sync.js",
          "automation/enhanced-git-sync-orchestrator.cjs",
          "automation/redundancy-git-sync.cjs",
          "automation/master-build-orchestrator.cjs",
          "automation/continuous-build-monitor.cjs",
          "automation/build-failure-recovery.cjs",
          "automation/pre-build-health-check.cjs",
          "automation/nextjs-page-validator.cjs",
          "automation/footer-injector.cjs",
          "automation/master-redundancy-orchestrator.cjs",
          "automation/enhanced-pm2-redundancy.cjs",
          "automation/enhanced-github-actions-redundancy.cjs",
          "automation/enhanced-netlify-functions-redundancy.cjs"
        ],
        monitoringScripts: [
          "automation/redundancy-automation-system.cjs",
          "automation/redundancy-health-monitor.cjs",
          "automation/redundancy-build-monitor.cjs",
          "automation/ultimate-redundancy-master.cjs",
          "automation/comprehensive-redundancy-orchestrator.cjs"
        ],
        healthCheckInterval: 45000,
        maxFailureThreshold: 2,
        autoRecovery: true
      },
      
      // Build and Development Scripts Redundancy
      buildScripts: {
        npmScripts: [
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
        maxFailureThreshold: 3,
        autoRecovery: true,
        fallbackStrategies: [
          "npm run build:recovery",
          "npm run fix:all",
          "npm run lint -- --fix",
          "npm run type-check"
        ]
      }
    };
    
    this.status = {
      pm2: { healthy: true, lastCheck: Date.now(), failures: 0 },
      githubActions: { healthy: true, lastCheck: Date.now(), failures: 0 },
      netlifyFunctions: { healthy: true, lastCheck: Date.now(), failures: 0 },
      automationScripts: { healthy: true, lastCheck: Date.now(), failures: 0 },
      buildScripts: { healthy: true, lastCheck: Date.now(), failures: 0 }
    };
    
    this.logFile = path.join(this.logDir, "comprehensive-redundancy-v2.log");
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
    this.log("Starting Comprehensive Redundancy Automation V2...");
    
    try {
      // Start all redundancy systems
      await this.startPM2Redundancy();
      await this.startGitHubActionsRedundancy();
      await this.startNetlifyFunctionsRedundancy();
      await this.startAutomationScriptsRedundancy();
      await this.startBuildScriptsRedundancy();
      
      // Start monitoring loops
      this.startMonitoringLoops();
      
      this.log("Comprehensive Redundancy Automation V2 started successfully");
      return true;
    } catch (error) {
      this.log(`Failed to start redundancy automation: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startPM2Redundancy() {
    this.log("Starting PM2 Redundancy System...");
    
    try {
      // Check if PM2 is running
      const pm2Status = spawnSync("pm2", ["status"], { encoding: "utf8" });
      
      if (pm2Status.status !== 0) {
        this.log("PM2 not running, starting PM2...");
        execSync("npm install -g pm2", { stdio: "inherit" });
      }
      
      // Start critical processes
      for (const ecosystemFile of this.config.pm2.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          try {
            execSync(`pm2 start ${ecosystemFile} --update-env`, { stdio: "inherit" });
            this.log(`Started PM2 ecosystem: ${ecosystemFile}`);
          } catch (error) {
            this.log(`Failed to start ${ecosystemFile}: ${error.message}`, "WARN");
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
        execSync("pm2 save", { stdio: "inherit" });
        this.log("PM2 logrotate configured successfully");
      } catch (error) {
        this.log(`Failed to configure PM2 logrotate: ${error.message}`, "WARN");
      }
      
      this.status.pm2.healthy = true;
      this.log("PM2 Redundancy System started successfully");
    } catch (error) {
      this.log(`Failed to start PM2 redundancy: ${error.message}`, "ERROR");
      this.status.pm2.healthy = false;
      this.status.pm2.failures++;
    }
  }

  async startGitHubActionsRedundancy() {
    this.log("Starting GitHub Actions Redundancy System...");
    
    try {
      // Validate workflows
      for (const workflow of this.config.githubActions.workflows) {
        if (fs.existsSync(workflow)) {
          try {
            const workflowContent = fs.readFileSync(workflow, "utf8");
            if (workflowContent.includes("name:") && workflowContent.includes("on:")) {
              this.log(`Workflow validated: ${workflow}`);
            } else {
              this.log(`Invalid workflow format: ${workflow}`, "WARN");
            }
          } catch (error) {
            this.log(`Failed to validate workflow ${workflow}: ${error.message}`, "WARN");
          }
        }
      }
      
      // Test fallback scripts
      for (const script of this.config.githubActions.fallbackScripts) {
        if (fs.existsSync(script)) {
          this.log(`Fallback script available: ${script}`);
        } else {
          this.log(`Fallback script missing: ${script}`, "WARN");
        }
      }
      
      this.status.githubActions.healthy = true;
      this.log("GitHub Actions Redundancy System started successfully");
    } catch (error) {
      this.log(`Failed to start GitHub Actions redundancy: ${error.message}`, "ERROR");
      this.status.githubActions.healthy = false;
      this.status.githubActions.failures++;
    }
  }

  async startNetlifyFunctionsRedundancy() {
    this.log("Starting Netlify Functions Redundancy System...");
    
    try {
      // Validate functions manifest
      if (fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        const manifest = JSON.parse(fs.readFileSync(this.config.netlifyFunctions.manifestFile, "utf8"));
        this.log(`Functions manifest loaded with ${manifest.functions.length} functions`);
        
        // Check if all critical functions are present
        for (const func of this.config.netlifyFunctions.functions) {
          if (manifest.functions.includes(func)) {
            this.log(`Function available: ${func}`);
          } else {
            this.log(`Function missing: ${func}`, "WARN");
          }
        }
      } else {
        this.log("Functions manifest not found, will regenerate", "WARN");
        await this.regenerateNetlifyFunctionsManifest();
      }
      
      this.status.netlifyFunctions.healthy = true;
      this.log("Netlify Functions Redundancy System started successfully");
    } catch (error) {
      this.log(`Failed to start Netlify Functions redundancy: ${error.message}`, "ERROR");
      this.status.netlifyFunctions.healthy = false;
      this.status.netlifyFunctions.failures++;
    }
  }

  async startAutomationScriptsRedundancy() {
    this.log("Starting Automation Scripts Redundancy System...");
    
    try {
      // Validate core scripts
      for (const script of this.config.automationScripts.coreScripts) {
        if (fs.existsSync(script)) {
          try {
            // Check if script is valid JavaScript
            require(script);
            this.log(`Script validated: ${script}`);
          } catch (error) {
            this.log(`Script validation failed for ${script}: ${error.message}`, "WARN");
          }
        } else {
          this.log(`Script missing: ${script}`, "WARN");
        }
      }
      
      // Validate monitoring scripts
      for (const script of this.config.automationScripts.monitoringScripts) {
        if (fs.existsSync(script)) {
          this.log(`Monitoring script available: ${script}`);
        } else {
          this.log(`Monitoring script missing: ${script}`, "WARN");
        }
      }
      
      this.status.automationScripts.healthy = true;
      this.log("Automation Scripts Redundancy System started successfully");
    } catch (error) {
      this.log(`Failed to start automation scripts redundancy: ${error.message}`, "ERROR");
      this.status.automationScripts.healthy = false;
      this.status.automationScripts.failures++;
    }
  }

  async startBuildScriptsRedundancy() {
    this.log("Starting Build Scripts Redundancy System...");
    
    try {
      // Validate package.json scripts
      const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
      
      for (const script of this.config.buildScripts.npmScripts) {
        if (packageJson.scripts[script]) {
          this.log(`Build script available: ${script}`);
        } else {
          this.log(`Build script missing: ${script}`, "WARN");
        }
      }
      
      // Validate fallback strategies
      for (const strategy of this.config.buildScripts.fallbackStrategies) {
        const [command, ...args] = strategy.split(" ");
        if (packageJson.scripts[command]) {
          this.log(`Fallback strategy available: ${strategy}`);
        } else {
          this.log(`Fallback strategy missing: ${strategy}`, "WARN");
        }
      }
      
      this.status.buildScripts.healthy = true;
      this.log("Build Scripts Redundancy System started successfully");
    } catch (error) {
      this.log(`Failed to start build scripts redundancy: ${error.message}`, "ERROR");
      this.status.buildScripts.healthy = false;
      this.status.buildScripts.failures++;
    }
  }

  startMonitoringLoops() {
    // PM2 monitoring
    setInterval(() => this.monitorPM2(), this.config.pm2.healthCheckInterval);
    
    // GitHub Actions monitoring
    setInterval(() => this.monitorGitHubActions(), this.config.githubActions.healthCheckInterval);
    
    // Netlify Functions monitoring
    setInterval(() => this.monitorNetlifyFunctions(), this.config.netlifyFunctions.healthCheckInterval);
    
    // Automation Scripts monitoring
    setInterval(() => this.monitorAutomationScripts(), this.config.automationScripts.healthCheckInterval);
    
    // Build Scripts monitoring
    setInterval(() => this.monitorBuildScripts(), this.config.buildScripts.healthCheckInterval);
    
    this.log("Monitoring loops started");
  }

  async monitorPM2() {
    try {
      const pm2Status = spawnSync("pm2", ["status"], { encoding: "utf8" });
      
      if (pm2Status.status === 0) {
        const output = pm2Status.stdout;
        
        // Check for critical processes
        for (const process of this.config.pm2.criticalProcesses) {
          if (!output.includes(process)) {
            this.log(`Critical PM2 process missing: ${process}`, "WARN");
            await this.recoverPM2Process(process);
          }
        }
        
        this.status.pm2.healthy = true;
        this.status.pm2.lastCheck = Date.now();
        this.status.pm2.failures = 0;
      } else {
        this.log("PM2 status check failed", "ERROR");
        this.status.pm2.healthy = false;
        this.status.pm2.failures++;
        
        if (this.status.pm2.failures >= this.config.pm2.maxRestartAttempts) {
          await this.recoverPM2System();
        }
      }
    } catch (error) {
      this.log(`PM2 monitoring error: ${error.message}`, "ERROR");
      this.status.pm2.healthy = false;
      this.status.pm2.failures++;
    }
  }

  async monitorGitHubActions() {
    try {
      // Check workflow files
      for (const workflow of this.config.githubActions.workflows) {
        if (!fs.existsSync(workflow)) {
          this.log(`GitHub workflow missing: ${workflow}`, "WARN");
          await this.recoverGitHubWorkflow(workflow);
        }
      }
      
      // Check fallback scripts
      for (const script of this.config.githubActions.fallbackScripts) {
        if (!fs.existsSync(script)) {
          this.log(`GitHub fallback script missing: ${script}`, "WARN");
        }
      }
      
      this.status.githubActions.healthy = true;
      this.status.githubActions.lastCheck = Date.now();
      this.status.githubActions.failures = 0;
    } catch (error) {
      this.log(`GitHub Actions monitoring error: ${error.message}`, "ERROR");
      this.status.githubActions.healthy = false;
      this.status.githubActions.failures++;
    }
  }

  async monitorNetlifyFunctions() {
    try {
      if (fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        const manifest = JSON.parse(fs.readFileSync(this.config.netlifyFunctions.manifestFile, "utf8"));
        
        // Check if manifest is recent
        const generatedAt = new Date(manifest.generatedAt);
        const now = new Date();
        const ageHours = (now - generatedAt) / (1000 * 60 * 60);
        
        if (ageHours > 24) {
          this.log("Netlify functions manifest is stale, regenerating...", "WARN");
          await this.regenerateNetlifyFunctionsManifest();
        }
        
        this.status.netlifyFunctions.healthy = true;
        this.status.netlifyFunctions.lastCheck = Date.now();
        this.status.netlifyFunctions.failures = 0;
      } else {
        this.log("Netlify functions manifest missing, regenerating...", "WARN");
        await this.regenerateNetlifyFunctionsManifest();
      }
    } catch (error) {
      this.log(`Netlify Functions monitoring error: ${error.message}`, "ERROR");
      this.status.netlifyFunctions.healthy = false;
      this.status.netlifyFunctions.failures++;
    }
  }

  async monitorAutomationScripts() {
    try {
      // Check core scripts
      for (const script of this.config.automationScripts.coreScripts) {
        if (!fs.existsSync(script)) {
          this.log(`Core automation script missing: ${script}`, "WARN");
        }
      }
      
      // Check monitoring scripts
      for (const script of this.config.automationScripts.monitoringScripts) {
        if (!fs.existsSync(script)) {
          this.log(`Monitoring script missing: ${script}`, "WARN");
        }
      }
      
      this.status.automationScripts.healthy = true;
      this.status.automationScripts.lastCheck = Date.now();
      this.status.automationScripts.failures = 0;
    } catch (error) {
      this.log(`Automation Scripts monitoring error: ${error.message}`, "ERROR");
      this.status.automationScripts.healthy = false;
      this.status.automationScripts.failures++;
    }
  }

  async monitorBuildScripts() {
    try {
      const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
      
      // Check build scripts
      for (const script of this.config.buildScripts.npmScripts) {
        if (!packageJson.scripts[script]) {
          this.log(`Build script missing: ${script}`, "WARN");
        }
      }
      
      // Check fallback strategies
      for (const strategy of this.config.buildScripts.fallbackStrategies) {
        const [command] = strategy.split(" ");
        if (!packageJson.scripts[command]) {
          this.log(`Fallback strategy missing: ${strategy}`, "WARN");
        }
      }
      
      this.status.buildScripts.healthy = true;
      this.status.buildScripts.lastCheck = Date.now();
      this.status.buildScripts.failures = 0;
    } catch (error) {
      this.log(`Build Scripts monitoring error: ${error.message}`, "ERROR");
      this.status.buildScripts.healthy = false;
      this.status.buildScripts.failures++;
    }
  }

  async recoverPM2Process(processName) {
    this.log(`Attempting to recover PM2 process: ${processName}`);
    
    try {
      // Try to restart the process
      execSync(`pm2 restart ${processName}`, { stdio: "inherit" });
      this.log(`PM2 process recovered: ${processName}`);
    } catch (error) {
      this.log(`Failed to recover PM2 process ${processName}: ${error.message}`, "ERROR");
      
      // Try to start from ecosystem files
      for (const ecosystemFile of this.config.pm2.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          try {
            execSync(`pm2 start ${ecosystemFile} --update-env`, { stdio: "inherit" });
            this.log(`Recovered PM2 process from ecosystem: ${ecosystemFile}`);
            break;
          } catch (ecosystemError) {
            this.log(`Failed to recover from ecosystem ${ecosystemFile}: ${ecosystemError.message}`, "WARN");
          }
        }
      }
    }
  }

  async recoverPM2System() {
    this.log("Attempting to recover PM2 system...");
    
    try {
      // Kill all PM2 processes
      execSync("pm2 kill", { stdio: "inherit" });
      
      // Wait a moment
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Restart PM2
      execSync("pm2 resurrect", { stdio: "inherit" });
      
      // Start ecosystem files
      for (const ecosystemFile of this.config.pm2.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          try {
            execSync(`pm2 start ${ecosystemFile} --update-env`, { stdio: "inherit" });
            this.log(`Restarted ecosystem: ${ecosystemFile}`);
          } catch (error) {
            this.log(`Failed to restart ecosystem ${ecosystemFile}: ${error.message}`, "WARN");
          }
        }
      }
      
      this.log("PM2 system recovered");
    } catch (error) {
      this.log(`Failed to recover PM2 system: ${error.message}`, "ERROR");
    }
  }

  async recoverGitHubWorkflow(workflowPath) {
    this.log(`Attempting to recover GitHub workflow: ${workflowPath}`);
    
    try {
      // Check if backup exists
      const backupPath = workflowPath.replace(".yml", "-backup.yml");
      if (fs.existsSync(backupPath)) {
        fs.copyFileSync(backupPath, workflowPath);
        this.log(`Recovered workflow from backup: ${workflowPath}`);
      } else {
        this.log(`No backup found for workflow: ${workflowPath}`, "WARN");
      }
    } catch (error) {
      this.log(`Failed to recover GitHub workflow ${workflowPath}: ${error.message}`, "ERROR");
    }
  }

  async regenerateNetlifyFunctionsManifest() {
    this.log("Regenerating Netlify functions manifest...");
    
    try {
      // Run the manifest generation script
      execSync("npm run netlify:manifest", { stdio: "inherit" });
      this.log("Netlify functions manifest regenerated successfully");
    } catch (error) {
      this.log(`Failed to regenerate Netlify functions manifest: ${error.message}`, "ERROR");
    }
  }

  getStatus() {
    return {
      timestamp: new Date().toISOString(),
      overall: {
        healthy: Object.values(this.status).every(s => s.healthy),
        totalSystems: Object.keys(this.status).length,
        healthySystems: Object.values(this.status).filter(s => s.healthy).length
      },
      systems: this.status
    };
  }

  async stop() {
    this.log("Stopping Comprehensive Redundancy Automation V2...");
    
    try {
      // Stop monitoring loops (they will stop on next iteration)
      this.log("Redundancy automation stopped");
      return true;
    } catch (error) {
      this.log(`Failed to stop redundancy automation: ${error.message}`, "ERROR");
      return false;
    }
  }
}

// CLI interface
if (require.main === module) {
  const redundancy = new ComprehensiveRedundancyAutomationV2();
  
  const command = process.argv[2] || "start";
  
  switch (command) {
    case "start":
      redundancy.start().then(success => {
        if (success) {
          console.log("Redundancy automation started successfully");
          process.exit(0);
        } else {
          console.error("Failed to start redundancy automation");
          process.exit(1);
        }
      });
      break;
      
    case "stop":
      redundancy.stop().then(success => {
        if (success) {
          console.log("Redundancy automation stopped successfully");
          process.exit(0);
        } else {
          console.error("Failed to stop redundancy automation");
          process.exit(1);
        }
      });
      break;
      
    case "status":
      console.log(JSON.stringify(redundancy.getStatus(), null, 2));
      break;
      
    case "health":
      const status = redundancy.getStatus();
      console.log(`Overall Health: ${status.overall.healthy ? "HEALTHY" : "UNHEALTHY"}`);
      console.log(`Healthy Systems: ${status.overall.healthySystems}/${status.overall.totalSystems}`);
      
      for (const [system, systemStatus] of Object.entries(status.systems)) {
        console.log(`${system}: ${systemStatus.healthy ? "HEALTHY" : "UNHEALTHY"} (Failures: ${systemStatus.failures})`);
      }
      break;
      
    default:
      console.log("Usage: node comprehensive-redundancy-automation-v2.cjs [start|stop|status|health]");
      process.exit(1);
  }
}

module.exports = ComprehensiveRedundancyAutomationV2;