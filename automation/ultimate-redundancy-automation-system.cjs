#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
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
          "ecosystem.ultimate-redundancy.cjs",
          "ecosystem-redundancy.pm2.cjs"
        ],
        processes: [
          "zion-auto-sync",
          "zion-auto-sync-cron",
          "master-redundancy-orchestrator",
          "enhanced-pm2-redundancy",
          "enhanced-github-actions-redundancy",
          "enhanced-netlify-functions-redundancy",
          "redundancy-automation-system",
          "redundancy-health-monitor",
          "redundancy-git-sync",
          "redundancy-build-monitor",
          "ultimate-redundancy-master",
          "ultimate-redundancy-system"
        ],
        healthCheckInterval: 15000,
        maxRestartAttempts: 10,
        restartDelay: 3000,
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
        healthCheckInterval: 30000,
        maxFailureThreshold: 5,
        autoTrigger: true,
        backupTriggers: true,
        workflowValidation: true,
        apiHealthCheck: true,
        backupRestoration: true
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
        healthCheckInterval: 60000,
        maxFailureThreshold: 3,
        autoDeploy: true,
        autoRegenerate: true,
        deploymentCheck: true,
        logRotation: true,
        functionValidation: true,
        backupFunctions: true
      },
      logging: {
        logDir: "automation/logs",
        maxLogSize: 20 * 1024 * 1024,
        maxLogFiles: 50,
        compression: true
      },
      monitoring: {
        enabled: true,
        interval: 15000,
        alertThreshold: 5,
        autoRestart: true,
        healthDashboard: true,
        performanceMetrics: true
      },
      backup: {
        enabled: true,
        interval: 3600000, // 1 hour
        retention: 168, // 7 days
        compression: true,
        encryption: false
      }
    };
    
    this.status = {
      pm2: { healthy: false, processes: [], lastCheck: null },
      githubActions: { healthy: false, workflows: [], lastCheck: null },
      netlifyFunctions: { healthy: false, functions: [], lastCheck: null },
      system: { healthy: false, uptime: 0, startTime: Date.now() }
    };
    
    this.ensureLogDirectory();
    this.initializeMonitoring();
    this.startUltimateMonitoring();
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
        maxBuffer: 1024 * 1024 * 50,
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

  async checkPM2UltimateHealth() {
    this.log("🔍 Checking ultimate PM2 process health...");
    
    try {
      // Check PM2 status
      const pm2Status = await this.runCommand("pm2", ["status", "--json"]);
      if (pm2Status.status !== 0) {
        throw new Error(`PM2 status check failed: ${pm2Status.stderr}`);
      }

      const processes = JSON.parse(pm2Status.stdout);
      const healthyProcesses = [];
      const unhealthyProcesses = [];

      for (const process of processes) {
        const isHealthy = process.pm2_env && process.pm2_env.status === "online";
        if (isHealthy) {
          healthyProcesses.push(process.name);
        } else {
          unhealthyProcesses.push(process.name);
        }
      }

      // Check if all required processes are running
      const requiredProcesses = this.config.pm2.processes;
      const missingProcesses = requiredProcesses.filter(p => !healthyProcesses.includes(p));

      if (missingProcesses.length > 0) {
        this.log(`⚠️ Missing PM2 processes: ${missingProcesses.join(", ")}`, "WARN");
        
        // Auto-recovery for missing processes
        if (this.config.pm2.autoRecovery) {
          await this.recoverPM2Processes(missingProcesses);
        }
      }

      this.status.pm2 = {
        healthy: missingProcesses.length === 0,
        processes: healthyProcesses,
        lastCheck: new Date().toISOString(),
        missing: missingProcesses,
        total: healthyProcesses.length,
        required: requiredProcesses.length
      };

      this.log(`✅ PM2 Health Check: ${healthyProcesses.length}/${requiredProcesses.length} processes healthy`);
      return this.status.pm2.healthy;

    } catch (error) {
      this.log(`❌ PM2 Health Check Failed: ${error.message}`, "ERROR");
      this.status.pm2.healthy = false;
      this.status.pm2.lastCheck = new Date().toISOString();
      return false;
    }
  }

  async recoverPM2Processes(missingProcesses) {
    this.log(`🔄 Attempting to recover ${missingProcesses.length} missing PM2 processes...`);
    
    for (const processName of missingProcesses) {
      try {
        // Try to restart the process
        const restartResult = await this.runCommand("pm2", ["restart", processName]);
        if (restartResult.status === 0) {
          this.log(`✅ Successfully restarted PM2 process: ${processName}`);
        } else {
          // If restart fails, try to start it
          const startResult = await this.runCommand("pm2", ["start", processName]);
          if (startResult.status === 0) {
            this.log(`✅ Successfully started PM2 process: ${processName}`);
          } else {
            this.log(`❌ Failed to start PM2 process: ${processName}`, "ERROR");
          }
        }
      } catch (error) {
        this.log(`❌ Error recovering PM2 process ${processName}: ${error.message}`, "ERROR");
      }
    }
  }

  async checkGitHubActionsUltimateHealth() {
    this.log("🔍 Checking ultimate GitHub Actions health...");
    
    try {
      const workflows = this.config.githubActions.workflows;
      const healthyWorkflows = [];
      const unhealthyWorkflows = [];

      for (const workflow of workflows) {
        if (fs.existsSync(workflow)) {
          const content = fs.readFileSync(workflow, 'utf8');
          const isValid = this.validateWorkflow(content);
          
          if (isValid) {
            healthyWorkflows.push(workflow);
          } else {
            unhealthyWorkflows.push(workflow);
          }
        } else {
          unhealthyWorkflows.push(workflow);
        }
      }

      // Check workflow syntax and trigger configuration
      const validationResults = await this.validateAllWorkflows(workflows);
      
      this.status.githubActions = {
        healthy: unhealthyWorkflows.length === 0 && validationResults.valid,
        workflows: healthyWorkflows,
        lastCheck: new Date().toISOString(),
        invalid: unhealthyWorkflows,
        validation: validationResults,
        total: workflows.length,
        healthy: healthyWorkflows.length
      };

      this.log(`✅ GitHub Actions Health Check: ${healthyWorkflows.length}/${workflows.length} workflows healthy`);
      return this.status.githubActions.healthy;

    } catch (error) {
      this.log(`❌ GitHub Actions Health Check Failed: ${error.message}`, "ERROR");
      this.status.githubActions.healthy = false;
      this.status.githubActions.lastCheck = new Date().toISOString();
      return false;
    }
  }

  validateWorkflow(content) {
    try {
      // Basic YAML validation
      const lines = content.split('\n');
      let indentLevel = 0;
      let isValid = true;

      for (const line of lines) {
        if (line.trim() === '') continue;
        if (line.trim().startsWith('#')) continue;
        
        const currentIndent = line.search(/\S/);
        if (currentIndent === -1) continue;
        
        if (currentIndent > indentLevel + 2) {
          isValid = false;
          break;
        }
        indentLevel = currentIndent;
      }

      return isValid;
    } catch (error) {
      return false;
    }
  }

  async validateAllWorkflows(workflows) {
    const results = {
      valid: true,
      errors: [],
      warnings: []
    };

    for (const workflow of workflows) {
      try {
        if (fs.existsSync(workflow)) {
          const content = fs.readFileSync(workflow, 'utf8');
          
          // Check for required workflow components
          if (!content.includes('name:') || !content.includes('on:')) {
            results.errors.push(`${workflow}: Missing required workflow components`);
            results.valid = false;
          }
          
          // Check for proper permissions
          if (content.includes('permissions:') && !content.includes('contents: write')) {
            results.warnings.push(`${workflow}: Consider adding contents: write permission`);
          }
          
        } else {
          results.errors.push(`${workflow}: File not found`);
          results.valid = false;
        }
      } catch (error) {
        results.errors.push(`${workflow}: ${error.message}`);
        results.valid = false;
      }
    }

    return results;
  }

  async checkNetlifyFunctionsUltimateHealth() {
    this.log("🔍 Checking ultimate Netlify Functions health...");
    
    try {
      const manifestFile = this.config.netlifyFunctions.manifestFile;
      const functions = this.config.netlifyFunctions.functions;
      
      if (!fs.existsSync(manifestFile)) {
        throw new Error("Netlify functions manifest not found");
      }

      const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
      const manifestFunctions = manifest.functions || [];
      
      const healthyFunctions = [];
      const missingFunctions = [];
      const outdatedFunctions = [];

      // Check each required function
      for (const functionName of functions) {
        if (manifestFunctions.includes(functionName)) {
          healthyFunctions.push(functionName);
        } else {
          missingFunctions.push(functionName);
        }
      }

      // Check for outdated manifest
      const manifestAge = Date.now() - new Date(manifest.generatedAt).getTime();
      const isOutdated = manifestAge > 24 * 60 * 60 * 1000; // 24 hours

      if (isOutdated) {
        this.log("⚠️ Netlify functions manifest is outdated, regenerating...", "WARN");
        await this.regenerateNetlifyFunctionsManifest();
      }

      this.status.netlifyFunctions = {
        healthy: missingFunctions.length === 0 && !isOutdated,
        functions: healthyFunctions,
        lastCheck: new Date().toISOString(),
        missing: missingFunctions,
        manifestAge: manifestAge,
        isOutdated: isOutdated,
        total: functions.length,
        healthy: healthyFunctions.length
      };

      this.log(`✅ Netlify Functions Health Check: ${healthyFunctions.length}/${functions.length} functions healthy`);
      return this.status.netlifyFunctions.healthy;

    } catch (error) {
      this.log(`❌ Netlify Functions Health Check Failed: ${error.message}`, "ERROR");
      this.status.netlifyFunctions.healthy = false;
      this.status.netlifyFunctions.lastCheck = new Date().toISOString();
      return false;
    }
  }

  async regenerateNetlifyFunctionsManifest() {
    try {
      this.log("🔄 Regenerating Netlify functions manifest...");
      
      const result = await this.runCommand("node", ["scripts/generate-netlify-functions-manifest.cjs"]);
      
      if (result.status === 0) {
        this.log("✅ Successfully regenerated Netlify functions manifest");
      } else {
        this.log(`❌ Failed to regenerate manifest: ${result.stderr}`, "ERROR");
      }
    } catch (error) {
      this.log(`❌ Error regenerating manifest: ${error.message}`, "ERROR");
    }
  }

  async performBackup() {
    if (!this.config.backup.enabled) return;

    try {
      this.log("💾 Performing system backup...");
      
      const backupDir = path.join(this.config.logging.logDir, "backups", new Date().toISOString().split('T')[0]);
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }

      // Backup PM2 ecosystem files
      for (const ecosystemFile of this.config.pm2.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          const backupPath = path.join(backupDir, `pm2-${path.basename(ecosystemFile)}`);
          fs.copyFileSync(ecosystemFile, backupPath);
        }
      }

      // Backup GitHub Actions workflows
      for (const workflow of this.config.githubActions.workflows) {
        if (fs.existsSync(workflow)) {
          const backupPath = path.join(backupDir, `github-${path.basename(workflow)}`);
          fs.copyFileSync(workflow, backupPath);
        }
      }

      // Backup Netlify functions manifest
      if (fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        const backupPath = path.join(backupDir, "netlify-functions-manifest.json");
        fs.copyFileSync(this.config.netlifyFunctions.manifestFile, backupPath);
      }

      // Cleanup old backups
      await this.cleanupOldBackups();

      this.log("✅ System backup completed successfully");
    } catch (error) {
      this.log(`❌ Backup failed: ${error.message}`, "ERROR");
    }
  }

  async cleanupOldBackups() {
    try {
      const backupDir = path.join(this.config.logging.logDir, "backups");
      if (!fs.existsSync(backupDir)) return;

      const dirs = fs.readdirSync(backupDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
        .sort()
        .reverse();

      // Keep only the most recent backups within retention period
      const retentionMs = this.config.backup.retention * 60 * 60 * 1000;
      const cutoffTime = Date.now() - retentionMs;

      for (let i = this.config.backup.retention; i < dirs.length; i++) {
        const dirPath = path.join(backupDir, dirs[i]);
        try {
          fs.rmSync(dirPath, { recursive: true, force: true });
          this.log(`🗑️ Cleaned up old backup: ${dirs[i]}`);
        } catch (error) {
          this.log(`⚠️ Failed to cleanup backup ${dirs[i]}: ${error.message}`, "WARN");
        }
      }
    } catch (error) {
      this.log(`❌ Backup cleanup failed: ${error.message}`, "ERROR");
    }
  }

  async runUltimateHealthCheck() {
    this.log("🚀 Starting ultimate health check cycle...");
    
    const startTime = Date.now();
    
    // Run all health checks in parallel
    const [pm2Healthy, githubHealthy, netlifyHealthy] = await Promise.all([
      this.checkPM2UltimateHealth(),
      this.checkGitHubActionsUltimateHealth(),
      this.checkNetlifyFunctionsUltimateHealth()
    ]);

    // Update overall system health
    this.status.system.healthy = pm2Healthy && githubHealthy && netlifyHealthy;
    this.status.system.uptime = Date.now() - this.status.system.startTime;

    const duration = Date.now() - startTime;
    
    if (this.status.system.healthy) {
      this.log(`✅ Ultimate health check completed successfully in ${duration}ms`);
    } else {
      this.log(`⚠️ Ultimate health check completed with issues in ${duration}ms`, "WARN");
    }

    // Generate health report
    await this.generateHealthReport();
    
    return this.status.system.healthy;
  }

  async generateHealthReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        system: this.status.system,
        pm2: this.status.pm2,
        githubActions: this.status.githubActions,
        netlifyFunctions: this.status.netlifyFunctions,
        config: {
          pm2: {
            processes: this.config.pm2.processes.length,
            healthCheckInterval: this.config.pm2.healthCheckInterval
          },
          githubActions: {
            workflows: this.config.githubActions.workflows.length,
            healthCheckInterval: this.config.githubActions.healthCheckInterval
          },
          netlifyFunctions: {
            functions: this.config.netlifyFunctions.functions.length,
            healthCheckInterval: this.config.netlifyFunctions.healthCheckInterval
          }
        }
      };

      const reportFile = path.join(this.config.logging.logDir, "ultimate-health-report.json");
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      this.log("📊 Health report generated successfully");
    } catch (error) {
      this.log(`❌ Failed to generate health report: ${error.message}`, "ERROR");
    }
  }

  initializeMonitoring() {
    this.log("🔧 Initializing ultimate redundancy monitoring...");
    
    // Set up periodic health checks
    setInterval(async () => {
      await this.runUltimateHealthCheck();
    }, this.config.monitoring.interval);

    // Set up periodic backups
    setInterval(async () => {
      await this.performBackup();
    }, this.config.backup.interval);

    this.log("✅ Ultimate redundancy monitoring initialized");
  }

  startUltimateMonitoring() {
    this.log("🚀 Starting ultimate redundancy automation system...");
    
    // Run initial health check
    this.runUltimateHealthCheck();
    
    this.log("✅ Ultimate redundancy automation system is now running");
    this.log(`📊 Health checks every ${this.config.monitoring.interval / 1000} seconds`);
    this.log(`💾 Backups every ${this.config.backup.interval / (1000 * 60 * 60)} hours`);
  }

  getStatus() {
    return this.status;
  }

  async stop() {
    this.log("🛑 Stopping ultimate redundancy automation system...");
    // Cleanup and stop monitoring
    process.exit(0);
  }
}

// Handle process signals
process.on('SIGINT', async () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Export for use as module
if (require.main === module) {
  const system = new UltimateRedundancyAutomationSystem();
  
  // Keep the process running
  setInterval(() => {
    // Keep alive
  }, 60000);
}

module.exports = UltimateRedundancyAutomationSystem;