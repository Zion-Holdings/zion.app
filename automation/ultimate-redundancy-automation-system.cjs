#!/usr/bin/env node
"use strict";

const { spawnSync, execSync, spawn } = require("child_process");
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
          "ecosystem.comprehensive-redundancy.cjs",
          "ecosystem.redundancy.pm2.cjs"
        ],
        processes: [
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
        apiHealthCheck: true
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
        logRotation: true
      },
      logging: {
        logDir: "automation/logs",
        maxLogSize: 10 * 1024 * 1024,
        maxLogFiles: 30
      },
      monitoring: {
        enabled: true,
        interval: 30000,
        alertThreshold: 3,
        autoRestart: true,
        loadBalancing: true
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

  async checkPM2ComprehensiveHealth() {
    this.log("🔍 Checking comprehensive PM2 process health...");
    
    try {
      // Check PM2 status
      const pm2Status = await this.runCommand("pm2", ["status"]);
      
      if (pm2Status.status !== 0) {
        this.log("❌ PM2 not running, attempting to start...", "ERROR");
        await this.startPM2Processes();
        return false;
      }

      // Check each ecosystem file
      for (const ecosystemFile of this.config.pm2.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          this.log(`📋 Checking ecosystem file: ${ecosystemFile}`);
          
          try {
            const ecosystem = require(path.resolve(ecosystemFile));
            if (ecosystem && ecosystem.apps) {
              for (const app of ecosystem.apps) {
                await this.checkPM2ProcessHealth(app.name);
              }
            }
          } catch (error) {
            this.log(`⚠️ Error loading ecosystem file ${ecosystemFile}: ${error.message}`, "WARN");
          }
        }
      }

      // Check specific processes
      for (const processName of this.config.pm2.processes) {
        await this.checkPM2ProcessHealth(processName);
      }

      this.log("✅ PM2 comprehensive health check completed");
      return true;
    } catch (error) {
      this.log(`❌ PM2 comprehensive health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkPM2ProcessHealth(processName) {
    try {
      const processInfo = await this.runCommand("pm2", ["show", processName]);
      
      if (processInfo.status !== 0) {
        this.log(`⚠️ Process ${processName} not found, attempting to start...`, "WARN");
        await this.startPM2Process(processName);
        return false;
      }

      // Check if process is online
      if (processInfo.stdout.includes("status: online")) {
        this.log(`✅ Process ${processName} is healthy`);
        return true;
      } else {
        this.log(`⚠️ Process ${processName} is not online, restarting...`, "WARN");
        await this.restartPM2Process(processName);
        return false;
      }
    } catch (error) {
      this.log(`❌ Error checking process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startPM2Process(processName) {
    try {
      this.log(`🚀 Starting PM2 process: ${processName}`);
      
      // Try to start from different ecosystem files
      for (const ecosystemFile of this.config.pm2.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          const result = await this.runCommand("pm2", ["start", ecosystemFile, "--only", processName]);
          if (result.status === 0) {
            this.log(`✅ Successfully started ${processName} from ${ecosystemFile}`);
            return true;
          }
        }
      }
      
      this.log(`❌ Failed to start ${processName} from any ecosystem file`, "ERROR");
      return false;
    } catch (error) {
      this.log(`❌ Error starting process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restartPM2Process(processName) {
    try {
      this.log(`🔄 Restarting PM2 process: ${processName}`);
      const result = await this.runCommand("pm2", ["restart", processName]);
      
      if (result.status === 0) {
        this.log(`✅ Successfully restarted ${processName}`);
        return true;
      } else {
        this.log(`❌ Failed to restart ${processName}, attempting to start...`, "ERROR");
        return await this.startPM2Process(processName);
      }
    } catch (error) {
      this.log(`❌ Error restarting process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startPM2Processes() {
    try {
      this.log("🚀 Starting all PM2 processes...");
      
      // Start from comprehensive redundancy ecosystem
      if (fs.existsSync("ecosystem.comprehensive-redundancy.cjs")) {
        const result = await this.runCommand("pm2", ["start", "ecosystem.comprehensive-redundancy.cjs"]);
        if (result.status === 0) {
          this.log("✅ Successfully started comprehensive redundancy ecosystem");
          return true;
        }
      }
      
      // Fallback to other ecosystem files
      for (const ecosystemFile of this.config.pm2.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          const result = await this.runCommand("pm2", ["start", ecosystemFile]);
          if (result.status === 0) {
            this.log(`✅ Successfully started ecosystem: ${ecosystemFile}`);
            return true;
          }
        }
      }
      
      this.log("❌ Failed to start any PM2 ecosystem", "ERROR");
      return false;
    } catch (error) {
      this.log(`❌ Error starting PM2 processes: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkGitHubActionsHealth() {
    this.log("🔍 Checking GitHub Actions health...");
    
    try {
      // Check if workflows exist
      for (const workflow of this.config.githubActions.workflows) {
        if (!fs.existsSync(workflow)) {
          this.log(`⚠️ Workflow not found: ${workflow}`, "WARN");
          continue;
        }
        
        this.log(`📋 Checking workflow: ${workflow}`);
        
        // Validate workflow syntax
        try {
          const workflowContent = fs.readFileSync(workflow, 'utf8');
          if (workflowContent.includes('name:') && workflowContent.includes('on:')) {
            this.log(`✅ Workflow ${workflow} syntax is valid`);
          } else {
            this.log(`⚠️ Workflow ${workflow} syntax may be invalid`, "WARN");
          }
        } catch (error) {
          this.log(`❌ Error reading workflow ${workflow}: ${error.message}`, "ERROR");
        }
      }

      // Check GitHub API health (if token available)
      if (process.env.GITHUB_TOKEN) {
        await this.checkGitHubAPIHealth();
      }

      this.log("✅ GitHub Actions health check completed");
      return true;
    } catch (error) {
      this.log(`❌ GitHub Actions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkGitHubAPIHealth() {
    try {
      this.log("🔍 Checking GitHub API health...");
      
      const result = await this.runCommand("curl", [
        "-H", `Authorization: token ${process.env.GITHUB_TOKEN}`,
        "-H", "Accept: application/vnd.github.v3+json",
        "https://api.github.com/rate_limit"
      ]);
      
      if (result.status === 0) {
        this.log("✅ GitHub API is accessible");
        return true;
      } else {
        this.log("⚠️ GitHub API may be experiencing issues", "WARN");
        return false;
      }
    } catch (error) {
      this.log(`❌ Error checking GitHub API: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkNetlifyFunctionsHealth() {
    this.log("🔍 Checking Netlify Functions health...");
    
    try {
      // Check manifest file
      if (!fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        this.log(`❌ Netlify functions manifest not found: ${this.config.netlifyFunctions.manifestFile}`, "ERROR");
        return false;
      }

      const manifest = JSON.parse(fs.readFileSync(this.config.netlifyFunctions.manifestFile, 'utf8'));
      
      if (manifest.functions && Array.isArray(manifest.functions)) {
        this.log(`📋 Found ${manifest.functions.length} Netlify functions`);
        
        // Check if all expected functions are present
        for (const expectedFunction of this.config.netlifyFunctions.functions) {
          if (manifest.functions.includes(expectedFunction)) {
            this.log(`✅ Function ${expectedFunction} is present`);
          } else {
            this.log(`⚠️ Function ${expectedFunction} is missing`, "WARN");
          }
        }
      }

      // Check Netlify CLI if available
      const netlifyStatus = await this.runCommand("netlify", ["status"]);
      if (netlifyStatus.status === 0) {
        this.log("✅ Netlify CLI is accessible");
      } else {
        this.log("⚠️ Netlify CLI may not be available", "WARN");
      }

      this.log("✅ Netlify Functions health check completed");
      return true;
    } catch (error) {
      this.log(`❌ Netlify Functions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async regenerateNetlifyFunctionsManifest() {
    try {
      this.log("🔄 Regenerating Netlify functions manifest...");
      
      if (fs.existsSync("scripts/generate-netlify-functions-manifest.cjs")) {
        const result = await this.runCommand("node", ["scripts/generate-netlify-functions-manifest.cjs"]);
        if (result.status === 0) {
          this.log("✅ Successfully regenerated Netlify functions manifest");
          return true;
        } else {
          this.log("❌ Failed to regenerate Netlify functions manifest", "ERROR");
          return false;
        }
      } else {
        this.log("⚠️ Netlify functions manifest generator not found", "WARN");
        return false;
      }
    } catch (error) {
      this.log(`❌ Error regenerating Netlify functions manifest: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performComprehensiveHealthCheck() {
    this.log("🏥 Starting comprehensive health check...");
    
    const results = {
      pm2: false,
      githubActions: false,
      netlifyFunctions: false,
      timestamp: new Date().toISOString()
    };

    // Check PM2 health
    results.pm2 = await this.checkPM2ComprehensiveHealth();
    
    // Check GitHub Actions health
    results.githubActions = await this.checkGitHubActionsHealth();
    
    // Check Netlify Functions health
    results.netlifyFunctions = await this.checkNetlifyFunctionsHealth();

    // Generate health report
    await this.generateHealthReport(results);
    
    this.log("🏥 Comprehensive health check completed");
    return results;
  }

  async generateHealthReport(results) {
    try {
      const report = {
        timestamp: results.timestamp,
        status: {
          pm2: results.pm2 ? "HEALTHY" : "UNHEALTHY",
          githubActions: results.githubActions ? "HEALTHY" : "UNHEALTHY",
          netlifyFunctions: results.netlifyFunctions ? "HEALTHY" : "UNHEALTHY"
        },
        summary: {
          total: 3,
          healthy: Object.values(results).filter(Boolean).length - 1, // -1 for timestamp
          unhealthy: Object.values(results).filter(v => v === false).length
        },
        recommendations: []
      };

      if (!results.pm2) {
        report.recommendations.push("Restart PM2 processes and check ecosystem files");
      }
      if (!results.githubActions) {
        report.recommendations.push("Validate GitHub workflow syntax and check API access");
      }
      if (!results.netlifyFunctions) {
        report.recommendations.push("Regenerate Netlify functions manifest and check deployment");
      }

      const reportFile = path.join(this.config.logging.logDir, `health-report-${new Date().toISOString().split('T')[0]}.json`);
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      this.log(`📊 Health report generated: ${reportFile}`);
      return report;
    } catch (error) {
      this.log(`❌ Error generating health report: ${error.message}`, "ERROR");
      return null;
    }
  }

  async performAutoRecovery() {
    this.log("🔧 Starting auto-recovery process...");
    
    try {
      // PM2 recovery
      if (!(await this.checkPM2ComprehensiveHealth())) {
        this.log("🔄 Attempting PM2 recovery...");
        await this.startPM2Processes();
      }

      // Netlify Functions recovery
      if (!(await this.checkNetlifyFunctionsHealth())) {
        this.log("🔄 Attempting Netlify Functions recovery...");
        await this.regenerateNetlifyFunctionsManifest();
      }

      this.log("✅ Auto-recovery process completed");
      return true;
    } catch (error) {
      this.log(`❌ Auto-recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  initializeMonitoring() {
    this.log("🚀 Initializing ultimate redundancy automation system...");
    
    // Set up monitoring intervals
    this.monitoringIntervals = {
      healthCheck: setInterval(() => {
        this.performComprehensiveHealthCheck();
      }, this.config.monitoring.interval),
      
      autoRecovery: setInterval(() => {
        this.performAutoRecovery();
      }, this.config.monitoring.interval * 2)
    };
  }

  startComprehensiveMonitoring() {
    this.log("📡 Starting comprehensive monitoring...");
    
    // Initial health check
    setTimeout(() => {
      this.performComprehensiveHealthCheck();
    }, 5000);
    
    this.log("✅ Ultimate redundancy automation system is now running");
  }

  async stop() {
    this.log("🛑 Stopping ultimate redundancy automation system...");
    
    // Clear monitoring intervals
    for (const interval of Object.values(this.monitoringIntervals)) {
      clearInterval(interval);
    }
    
    this.log("✅ Ultimate redundancy automation system stopped");
  }

  async getStatus() {
    try {
      const pm2Status = await this.runCommand("pm2", ["status"]);
      const healthResults = await this.performComprehensiveHealthCheck();
      
      return {
        system: "Ultimate Redundancy Automation System",
        status: "RUNNING",
        timestamp: new Date().toISOString(),
        pm2: {
          status: pm2Status.status === 0 ? "RUNNING" : "STOPPED",
          output: pm2Status.stdout
        },
        health: healthResults,
        config: this.config
      };
    } catch (error) {
      return {
        system: "Ultimate Redundancy Automation System",
        status: "ERROR",
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }
}

// CLI interface
if (require.main === module) {
  const system = new UltimateRedundancyAutomationSystem();
  
  const command = process.argv[2];
  
  switch (command) {
    case "start":
      console.log("🚀 Ultimate redundancy automation system started");
      break;
    case "stop":
      system.stop();
      console.log("🛑 Ultimate redundancy automation system stopped");
      process.exit(0);
      break;
    case "status":
      system.getStatus().then(status => {
        console.log(JSON.stringify(status, null, 2));
        process.exit(0);
      });
      break;
    case "health":
      system.performComprehensiveHealthCheck().then(results => {
        console.log(JSON.stringify(results, null, 2));
        process.exit(0);
      });
      break;
    case "recovery":
      system.performAutoRecovery().then(success => {
        console.log(success ? "✅ Recovery successful" : "❌ Recovery failed");
        process.exit(success ? 0 : 1);
      });
      break;
    default:
      console.log("Ultimate Redundancy Automation System");
      console.log("Usage: node ultimate-redundancy-automation-system.cjs [start|stop|status|health|recovery]");
      console.log("Starting system...");
      break;
  }
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    console.log('\n🛑 Received SIGINT, shutting down gracefully...');
    await system.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
    await system.stop();
    process.exit(0);
  });
}

module.exports = UltimateRedundancyAutomationSystem;