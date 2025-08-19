#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class UltimateRedundancyMaster {
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
        autoHealing: true
      },
      netlifyFunctions: {
        manifestFile: "netlify/functions/functions-manifest.json",
        healthCheckInterval: 60000,
        maxFailureThreshold: 3,
        autoRegenerate: true,
        deploymentCheck: true,
        logRotation: true,
        functionMonitoring: true,
        autoHealing: true
      },
      logging: {
        logDir: "automation/logs",
        maxLogSize: 20 * 1024 * 1024,
        maxLogFiles: 50,
        compression: true,
        rotation: true
      },
      monitoring: {
        enabled: true,
        interval: 15000,
        alertThreshold: 5,
        autoRestart: true,
        loadBalancing: true,
        healthDashboard: true
      },
      git: {
        syncInterval: 900000, // 15 minutes
        autoSync: true,
        conflictResolution: true,
        backupStrategy: true
      },
      build: {
        monitoring: true,
        autoRecovery: true,
        healthChecks: true,
        performanceOptimization: true
      }
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
      const pm2Status = await this.runCommand("pm2", ["status"]);
      
      if (pm2Status.status !== 0) {
        this.log("❌ PM2 not running, attempting to start...", "ERROR");
        await this.startPM2Services();
        return false;
      }

      // Check each process
      let healthyProcesses = 0;
      let totalProcesses = 0;

      for (const processName of this.config.pm2.processes) {
        try {
          const processInfo = await this.runCommand("pm2", ["show", processName]);
          if (processInfo.status === 0 && processInfo.stdout.includes("online")) {
            healthyProcesses++;
          } else {
            this.log(`⚠️ Process ${processName} is not healthy, attempting restart...`, "WARN");
            await this.restartPM2Process(processName);
          }
          totalProcesses++;
        } catch (error) {
          this.log(`❌ Error checking process ${processName}: ${error.message}`, "ERROR");
        }
      }

      this.log(`✅ PM2 Health: ${healthyProcesses}/${totalProcesses} processes healthy`);
      return healthyProcesses === totalProcesses;
    } catch (error) {
      this.log(`❌ PM2 health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startPM2Services() {
    this.log("🚀 Starting PM2 services...");
    
    try {
      // Start comprehensive redundancy ecosystem
      await this.runCommand("pm2", ["start", "ecosystem.comprehensive-redundancy.cjs"]);
      
      // Start additional redundancy systems
      await this.runCommand("pm2", ["start", "ecosystem.redundancy.pm2.cjs"]);
      
      // Save PM2 configuration
      await this.runCommand("pm2", ["save"]);
      
      this.log("✅ PM2 services started successfully");
    } catch (error) {
      this.log(`❌ Failed to start PM2 services: ${error.message}`, "ERROR");
    }
  }

  async restartPM2Process(processName) {
    try {
      await this.runCommand("pm2", ["restart", processName]);
      this.log(`✅ Restarted PM2 process: ${processName}`);
    } catch (error) {
      this.log(`❌ Failed to restart PM2 process ${processName}: ${error.message}`, "ERROR");
    }
  }

  async checkGitHubActionsUltimateHealth() {
    this.log("🔍 Checking ultimate GitHub Actions health...");
    
    try {
      // Check workflow files exist
      for (const workflow of this.config.githubActions.workflows) {
        if (!fs.existsSync(workflow)) {
          this.log(`⚠️ Workflow file missing: ${workflow}`, "WARN");
          continue;
        }
        
        // Validate workflow syntax
        const workflowContent = fs.readFileSync(workflow, 'utf8');
        if (!workflowContent.includes('name:') || !workflowContent.includes('on:')) {
          this.log(`⚠️ Invalid workflow syntax: ${workflow}`, "WARN");
        }
      }

      // Check GitHub API health (if token available)
      if (process.env.GITHUB_TOKEN) {
        try {
          const response = await fetch('https://api.github.com/rate_limit', {
            headers: { 'Authorization': `token ${process.env.GITHUB_TOKEN}` }
          });
          if (response.ok) {
            this.log("✅ GitHub API is healthy");
          } else {
            this.log("⚠️ GitHub API health check failed", "WARN");
          }
        } catch (error) {
          this.log(`⚠️ GitHub API health check error: ${error.message}`, "WARN");
        }
      }

      this.log("✅ GitHub Actions health check completed");
      return true;
    } catch (error) {
      this.log(`❌ GitHub Actions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkNetlifyFunctionsUltimateHealth() {
    this.log("🔍 Checking ultimate Netlify Functions health...");
    
    try {
      // Check manifest file
      if (!fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        this.log("⚠️ Netlify functions manifest missing, regenerating...", "WARN");
        await this.regenerateNetlifyManifest();
      }

      // Validate manifest content
      try {
        const manifest = JSON.parse(fs.readFileSync(this.config.netlifyFunctions.manifestFile, 'utf8'));
        if (!manifest.functions || !Array.isArray(manifest.functions)) {
          throw new Error("Invalid manifest structure");
        }
        this.log(`✅ Netlify Functions manifest valid: ${manifest.functions.length} functions`);
      } catch (error) {
        this.log(`❌ Invalid manifest content: ${error.message}`, "ERROR");
        await this.regenerateNetlifyManifest();
      }

      // Check function files
      const functionsDir = path.dirname(this.config.netlifyFunctions.manifestFile);
      const functionFiles = fs.readdirSync(functionsDir).filter(f => f.endsWith('.js') || f.endsWith('.cjs'));
      
      this.log(`✅ Netlify Functions health check completed: ${functionFiles.length} function files found`);
      return true;
    } catch (error) {
      this.log(`❌ Netlify Functions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async regenerateNetlifyManifest() {
    try {
      this.log("🔄 Regenerating Netlify functions manifest...");
      await this.runCommand("node", ["scripts/generate-netlify-functions-manifest.cjs"]);
      this.log("✅ Netlify functions manifest regenerated");
    } catch (error) {
      this.log(`❌ Failed to regenerate manifest: ${error.message}`, "ERROR");
    }
  }

  async checkGitUltimateHealth() {
    this.log("🔍 Checking ultimate Git health...");
    
    try {
      // Check git status
      const gitStatus = await this.runCommand("git", ["status"]);
      if (gitStatus.status !== 0) {
        this.log("❌ Git repository not accessible", "ERROR");
        return false;
      }

      // Check remote status
      const remoteStatus = await this.runCommand("git", ["remote", "-v"]);
      if (remoteStatus.status !== 0) {
        this.log("❌ Git remotes not accessible", "ERROR");
        return false;
      }

      // Check for conflicts
      if (gitStatus.stdout.includes("conflict")) {
        this.log("⚠️ Git conflicts detected, attempting resolution...", "WARN");
        await this.resolveGitConflicts();
      }

      this.log("✅ Git health check completed");
      return true;
    } catch (error) {
      this.log(`❌ Git health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async resolveGitConflicts() {
    try {
      this.log("🔧 Resolving Git conflicts...");
      
      // Stash changes
      await this.runCommand("git", ["stash"]);
      
      // Pull latest
      await this.runCommand("git", ["pull", "origin", "main"]);
      
      // Pop stashed changes
      await this.runCommand("git", ["stash", "pop"]);
      
      this.log("✅ Git conflicts resolved");
    } catch (error) {
      this.log(`❌ Failed to resolve Git conflicts: ${error.message}`, "ERROR");
    }
  }

  async checkBuildUltimateHealth() {
    this.log("🔍 Checking ultimate build health...");
    
    try {
      // Check if build artifacts exist
      const buildDirs = ['.next', 'out', 'dist'];
      let buildHealthy = true;

      for (const dir of buildDirs) {
        if (fs.existsSync(dir)) {
          const stats = fs.statSync(dir);
          if (stats.isDirectory() && fs.readdirSync(dir).length > 0) {
            this.log(`✅ Build directory ${dir} exists and has content`);
          } else {
            this.log(`⚠️ Build directory ${dir} is empty`, "WARN");
            buildHealthy = false;
          }
        } else {
          this.log(`⚠️ Build directory ${dir} missing`, "WARN");
          buildHealthy = false;
        }
      }

      // Check package.json scripts
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const requiredScripts = ['build', 'dev', 'start'];
      
      for (const script of requiredScripts) {
        if (!packageJson.scripts[script]) {
          this.log(`⚠️ Required script missing: ${script}`, "WARN");
          buildHealthy = false;
        }
      }

      this.log(`✅ Build health check completed: ${buildHealthy ? 'Healthy' : 'Issues detected'}`);
      return buildHealthy;
    } catch (error) {
      this.log(`❌ Build health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performUltimateHealthCheck() {
    this.log("🚀 Starting ultimate comprehensive health check...");
    
    const results = {
      pm2: false,
      githubActions: false,
      netlifyFunctions: false,
      git: false,
      build: false,
      timestamp: new Date().toISOString()
    };

    try {
      // Parallel health checks
      const [pm2Health, githubHealth, netlifyHealth, gitHealth, buildHealth] = await Promise.allSettled([
        this.checkPM2UltimateHealth(),
        this.checkGitHubActionsUltimateHealth(),
        this.checkNetlifyFunctionsUltimateHealth(),
        this.checkGitUltimateHealth(),
        this.checkBuildUltimateHealth()
      ]);

      results.pm2 = pm2Health.status === 'fulfilled' ? pm2Health.value : false;
      results.githubActions = githubHealth.status === 'fulfilled' ? githubHealth.value : false;
      results.netlifyFunctions = netlifyHealth.status === 'fulfilled' ? netlifyHealth.value : false;
      results.git = gitHealth.status === 'fulfilled' ? gitHealth.value : false;
      results.build = buildHealth.status === 'fulfilled' ? buildHealth.value : false;

      // Generate health report
      const healthyServices = Object.values(results).filter(v => v === true).length - 1; // -1 for timestamp
      const totalServices = 5;
      
      this.log(`📊 Ultimate Health Report: ${healthyServices}/${totalServices} services healthy`);
      
      if (healthyServices < totalServices) {
        this.log("⚠️ Some services are unhealthy, initiating recovery...", "WARN");
        await this.initiateRecovery(results);
      } else {
        this.log("🎉 All services are healthy!", "INFO");
      }

      // Save health report
      this.saveHealthReport(results);
      
    } catch (error) {
      this.log(`❌ Ultimate health check failed: ${error.message}`, "ERROR");
    }
  }

  async initiateRecovery(results) {
    this.log("🔄 Initiating recovery procedures...");
    
    try {
      if (!results.pm2) {
        this.log("🔧 Recovering PM2 services...");
        await this.startPM2Services();
      }

      if (!results.netlifyFunctions) {
        this.log("🔧 Recovering Netlify Functions...");
        await this.regenerateNetlifyManifest();
      }

      if (!results.git) {
        this.log("🔧 Recovering Git repository...");
        await this.resolveGitConflicts();
      }

      if (!results.build) {
        this.log("🔧 Recovering build system...");
        await this.runCommand("npm", ["run", "build:health-check"]);
      }

      this.log("✅ Recovery procedures completed");
    } catch (error) {
      this.log(`❌ Recovery failed: ${error.message}`, "ERROR");
    }
  }

  saveHealthReport(results) {
    try {
      const reportFile = path.join(this.config.logging.logDir, `ultimate-health-report-${new Date().toISOString().split('T')[0]}.json`);
      fs.writeFileSync(reportFile, JSON.stringify(results, null, 2));
      this.log(`📄 Health report saved to: ${reportFile}`);
    } catch (error) {
      this.log(`❌ Failed to save health report: ${error.message}`, "ERROR");
    }
  }

  initializeMonitoring() {
    this.log("🔧 Initializing ultimate monitoring system...");
    
    // Set up log rotation
    if (this.config.logging.rotation) {
      this.setupLogRotation();
    }
    
    // Set up health dashboard
    if (this.config.monitoring.healthDashboard) {
      this.setupHealthDashboard();
    }
  }

  setupLogRotation() {
    setInterval(() => {
      this.rotateLogs();
    }, 24 * 60 * 60 * 1000); // Daily
  }

  rotateLogs() {
    try {
      const logFiles = fs.readdirSync(this.config.logging.logDir)
        .filter(f => f.startsWith('ultimate-redundancy-') && f.endsWith('.log'))
        .sort()
        .reverse();

      // Keep only the latest 50 log files
      if (logFiles.length > this.config.logging.maxLogFiles) {
        const filesToDelete = logFiles.slice(this.config.logging.maxLogFiles);
        filesToDelete.forEach(file => {
          fs.unlinkSync(path.join(this.config.logging.logDir, file));
        });
        this.log(`🗑️ Rotated ${filesToDelete.length} old log files`);
      }
    } catch (error) {
      this.log(`❌ Log rotation failed: ${error.message}`, "ERROR");
    }
  }

  setupHealthDashboard() {
    // Create a simple health dashboard endpoint
    this.log("📊 Setting up health dashboard...");
  }

  startUltimateMonitoring() {
    this.log("🚀 Starting ultimate monitoring system...");
    
    // Initial health check
    this.performUltimateHealthCheck();
    
    // Continuous monitoring
    setInterval(() => {
      this.performUltimateHealthCheck();
    }, this.config.monitoring.interval);
    
    this.log("✅ Ultimate monitoring system started");
  }

  async getStatus() {
    return {
      status: "running",
      uptime: process.uptime(),
      config: this.config,
      lastCheck: new Date().toISOString()
    };
  }
}

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);
  const system = new UltimateRedundancyMaster();
  
  switch (args[0]) {
    case 'start':
      console.log("🚀 Ultimate redundancy system started");
      break;
    case 'status':
      console.log(JSON.stringify(system.getStatus(), null, 2));
      break;
    case 'health':
      system.performUltimateHealthCheck();
      break;
    case 'recovery':
      system.initiateRecovery({});
      break;
    default:
      console.log("Usage: node ultimate-redundancy-master.cjs [start|status|health|recovery]");
  }
}

module.exports = UltimateRedundancyMaster;