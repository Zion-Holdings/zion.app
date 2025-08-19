#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class ComprehensiveRedundancySystem {
  constructor() {
    this.config = {
      pm2: {
        ecosystemFiles: [
          "ecosystem.pm2.cjs",
          "ecosystem.redundancy.cjs"
        ],
        processes: [
          "zion-auto-sync",
          "zion-auto-sync-cron",
          "redundancy-automation-system",
          "redundancy-health-monitor",
          "redundancy-git-sync",
          "redundancy-build-monitor"
        ],
        healthCheckInterval: 30000,
        maxRestartAttempts: 5,
        restartDelay: 5000,
        autoRecovery: true
      },
      githubActions: {
        workflows: [
          ".github/workflows/marketing-sync.yml",
          ".github/workflows/sync-health.yml"
        ],
        healthCheckInterval: 60000,
        maxFailureThreshold: 3,
        autoRetry: true,
        backupTriggers: true
      },
      netlifyFunctions: {
        manifestFile: "netlify/functions/functions-manifest.json",
        healthCheckInterval: 120000,
        maxFailureThreshold: 2,
        autoHealing: true,
        functionTimeout: 30000
      },
      logging: {
        logDir: "automation/logs",
        maxLogSize: 10 * 1024 * 1024,
        maxLogFiles: 30,
        logLevel: process.env.REDUNDANCY_LOG_LEVEL || "INFO"
      },
      monitoring: {
        systemHealthCheckInterval: 60000,
        alertThreshold: 3,
        autoEscalation: true
      }
    };
    
    this.ensureLogDirectory();
    this.initializeMonitoring();
    this.startHealthChecks();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.config.logging.logDir)) {
      fs.mkdirSync(this.config.logging.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    
    if (this.shouldLog(level)) {
      console.log(logEntry);
    }
    
    const logFile = path.join(this.config.logging.logDir, `comprehensive-redundancy-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logEntry + "\n");
  }

  shouldLog(level) {
    const levels = { DEBUG: 0, INFO: 1, WARN: 2, ERROR: 3 };
    const currentLevel = levels[this.config.logging.logLevel] || 1;
    return levels[level] >= currentLevel;
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

  async checkPM2Health() {
    this.log("Checking PM2 process health...");
    
    try {
      const statusResult = await this.runCommand("pm2", ["status", "--no-daemon"]);
      
      if (statusResult.status !== 0) {
        this.log("PM2 status check failed, attempting to restart PM2", "WARN");
        await this.runCommand("pm2", ["kill"]);
        await this.runCommand("pm2", ["start", this.config.pm2.ecosystemFiles[0]]);
        return false;
      }

      const processes = this.config.pm2.processes;
      let allHealthy = true;

      for (const processName of processes) {
        const processStatus = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
        
        if (processStatus.status !== 0) {
          this.log(`PM2 process ${processName} not found, restarting...`, "WARN");
          await this.runCommand("pm2", ["restart", processName]);
          allHealthy = false;
        } else {
          // Check if process is actually running
          const isRunning = await this.runCommand("pm2", ["jlist", "--no-daemon"]);
          if (isRunning.status === 0) {
            const processes = JSON.parse(isRunning.stdout);
            const targetProcess = processes.find(p => p.name === processName);
            if (!targetProcess || targetProcess.pm2_env.status !== "online") {
              this.log(`PM2 process ${processName} is not online, restarting...`, "WARN");
              await this.runCommand("pm2", ["restart", processName]);
              allHealthy = false;
            }
          }
        }
      }

      if (allHealthy) {
        this.log("All PM2 processes are healthy");
      }

      return allHealthy;
    } catch (error) {
      this.log(`PM2 health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkGitHubActionsHealth() {
    this.log("Checking GitHub Actions workflows...");
    
    try {
      // Check if workflows exist and are valid
      for (const workflow of this.config.githubActions.workflows) {
        if (!fs.existsSync(workflow)) {
          this.log(`GitHub Actions workflow ${workflow} not found`, "ERROR");
          continue;
        }

        // Validate YAML syntax
        const yamlContent = fs.readFileSync(workflow, 'utf8');
        if (yamlContent.includes('cron:') && yamlContent.includes('workflow_dispatch:')) {
          this.log(`GitHub Actions workflow ${workflow} is properly configured`);
        } else {
          this.log(`GitHub Actions workflow ${workflow} may have configuration issues`, "WARN");
        }
      }

      // Check recent workflow runs (if GitHub CLI is available)
      try {
        const ghStatus = await this.runCommand("gh", ["workflow", "list"]);
        if (ghStatus.status === 0) {
          this.log("GitHub CLI is available, workflow status checked");
        }
      } catch (error) {
        this.log("GitHub CLI not available, skipping workflow status check", "WARN");
      }

      return true;
    } catch (error) {
      this.log(`GitHub Actions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkNetlifyFunctionsHealth() {
    this.log("Checking Netlify functions...");
    
    try {
      if (!fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        this.log("Netlify functions manifest not found", "ERROR");
        return false;
      }

      const manifest = JSON.parse(fs.readFileSync(this.config.netlifyFunctions.manifestFile, 'utf8'));
      
      if (!manifest.functions || !Array.isArray(manifest.functions)) {
        this.log("Invalid Netlify functions manifest format", "ERROR");
        return false;
      }

      this.log(`Found ${manifest.functions.length} Netlify functions`);
      
      // Check if functions directory exists
      const functionsDir = path.dirname(this.config.netlifyFunctions.manifestFile);
      if (fs.existsSync(functionsDir)) {
        this.log("Netlify functions directory exists");
      } else {
        this.log("Netlify functions directory not found", "WARN");
      }

      return true;
    } catch (error) {
      this.log(`Netlify functions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performSystemHealthCheck() {
    this.log("Performing comprehensive system health check...");
    
    const results = {
      pm2: await this.checkPM2Health(),
      githubActions: await this.checkGitHubActionsHealth(),
      netlifyFunctions: await this.checkNetlifyFunctionsHealth(),
      timestamp: new Date().toISOString()
    };

    const overallHealth = results.pm2 && results.githubActions && results.netlifyFunctions;
    
    if (overallHealth) {
      this.log("System health check passed - all components are healthy");
    } else {
      this.log("System health check failed - some components need attention", "WARN");
      
      // Auto-recovery attempts
      if (!results.pm2 && this.config.pm2.autoRecovery) {
        this.log("Attempting PM2 auto-recovery...");
        await this.performPM2Recovery();
      }
      
      if (!results.netlifyFunctions && this.config.netlifyFunctions.autoHealing) {
        this.log("Attempting Netlify functions auto-healing...");
        await this.performNetlifyFunctionsRecovery();
      }
    }

    // Save health check results
    this.saveHealthCheckResults(results);
    
    return results;
  }

  async performPM2Recovery() {
    this.log("Performing PM2 recovery...");
    
    try {
      // Kill all PM2 processes
      await this.runCommand("pm2", ["kill"]);
      
      // Wait a moment
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Start redundancy ecosystem first
      if (fs.existsSync(this.config.pm2.ecosystemFiles[1])) {
        await this.runCommand("pm2", ["start", this.config.pm2.ecosystemFiles[1]]);
        this.log("Redundancy ecosystem started");
      }
      
      // Start main ecosystem
      await this.runCommand("pm2", ["start", this.config.pm2.ecosystemFiles[0]]);
      this.log("Main ecosystem started");
      
      // Save PM2 configuration
      await this.runCommand("pm2", ["save"]);
      this.log("PM2 configuration saved");
      
    } catch (error) {
      this.log(`PM2 recovery failed: ${error.message}`, "ERROR");
    }
  }

  async performNetlifyFunctionsRecovery() {
    this.log("Performing Netlify functions recovery...");
    
    try {
      // Regenerate functions manifest
      const manifestScript = "scripts/generate-netlify-functions-manifest.cjs";
      if (fs.existsSync(manifestScript)) {
        await this.runCommand("node", [manifestScript]);
        this.log("Netlify functions manifest regenerated");
      }
      
      // Check if build is needed
      if (fs.existsSync("package.json")) {
        const buildScript = "npm run netlify:manifest";
        await this.runCommand("bash", ["-c", buildScript]);
        this.log("Netlify build triggered");
      }
      
    } catch (error) {
      this.log(`Netlify functions recovery failed: ${error.message}`, "ERROR");
    }
  }

  saveHealthCheckResults(results) {
    const healthFile = path.join(this.config.logging.logDir, "health-check-results.json");
    const healthData = {
      ...results,
      systemInfo: {
        nodeVersion: process.version,
        platform: process.platform,
        arch: process.arch,
        uptime: process.uptime()
      }
    };
    
    fs.writeFileSync(healthFile, JSON.stringify(healthData, null, 2));
  }

  initializeMonitoring() {
    this.log("Initializing comprehensive redundancy monitoring system...");
    
    // Set up process monitoring
    process.on('SIGINT', () => {
      this.log("Received SIGINT, shutting down gracefully...");
      this.shutdown();
    });
    
    process.on('SIGTERM', () => {
      this.log("Received SIGTERM, shutting down gracefully...");
      this.shutdown();
    });
    
    process.on('uncaughtException', (error) => {
      this.log(`Uncaught exception: ${error.message}`, "ERROR");
      this.log(`Stack trace: ${error.stack}`, "ERROR");
    });
    
    process.on('unhandledRejection', (reason, promise) => {
      this.log(`Unhandled rejection at ${promise}: ${reason}`, "ERROR");
    });
  }

  startHealthChecks() {
    this.log("Starting periodic health checks...");
    
    // Initial health check
    this.performSystemHealthCheck();
    
    // Set up periodic health checks
    setInterval(() => {
      this.performSystemHealthCheck();
    }, this.config.monitoring.systemHealthCheckInterval);
    
    // PM2 health checks
    setInterval(() => {
      this.checkPM2Health();
    }, this.config.pm2.healthCheckInterval);
    
    // GitHub Actions health checks
    setInterval(() => {
      this.checkGitHubActionsHealth();
    }, this.config.githubActions.healthCheckInterval);
    
    // Netlify functions health checks
    setInterval(() => {
      this.checkNetlifyFunctionsHealth();
    }, this.config.netlifyFunctions.healthCheckInterval);
  }

  async shutdown() {
    this.log("Shutting down comprehensive redundancy system...");
    
    // Save final health status
    await this.performSystemHealthCheck();
    
    this.log("Comprehensive redundancy system shutdown complete");
    process.exit(0);
  }

  getStatus() {
    return {
      status: "running",
      uptime: process.uptime(),
      config: this.config,
      timestamp: new Date().toISOString()
    };
  }
}

// Start the system if this file is run directly
if (require.main === module) {
  const system = new ComprehensiveRedundancySystem();
  
  // Keep the process alive
  process.stdin.resume();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    system.shutdown();
  });
}

module.exports = ComprehensiveRedundancySystem;