#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class RedundancyAutomationSystem {
  constructor() {
    this.config = {
      pm2: {
        ecosystemFile: "ecosystem.pm2.cjs",
        processes: ["zion-auto-sync", "zion-auto-sync-cron"],
        healthCheckInterval: 30000, // 30 seconds
        maxRestartAttempts: 5,
        restartDelay: 5000 // 5 seconds
      },
      githubActions: {
        workflows: [
          ".github/workflows/marketing-sync.yml",
          ".github/workflows/sync-health.yml"
        ],
        healthCheckInterval: 60000, // 1 minute
        maxFailureThreshold: 3
      },
      netlifyFunctions: {
        manifestFile: "netlify/functions/functions-manifest.json",
        healthCheckInterval: 120000, // 2 minutes
        maxFailureThreshold: 2
      },
      logging: {
        logDir: "automation/logs",
        maxLogSize: 10 * 1024 * 1024, // 10MB
        maxLogFiles: 30
      }
    };
    
    this.ensureLogDirectory();
    this.initializeMonitoring();
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
    
    const logFile = path.join(this.config.logging.logDir, `redundancy-system-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logEntry + "\n");
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      try {
        const result = spawnSync(command, args, {
          cwd: process.cwd(),
          env: process.env,
          shell: false,
          encoding: "utf8",
          maxBuffer: 1024 * 1024 * 20,
          timeout: 30000, // 30 second timeout
          ...options
        });
        
        resolve({
          status: result.status,
          stdout: result.stdout || "",
          stderr: result.stderr || "",
          error: result.error,
          timedOut: result.signal === 'SIGTERM'
        });
      } catch (error) {
        this.log(`Command execution error: ${error.message}`, "ERROR");
        resolve({
          status: -1,
          stdout: "",
          stderr: error.message,
          error: error,
          timedOut: false
        });
      }
    });
  }

  async checkPM2Health() {
    this.log("Checking PM2 process health...");
    
    try {
      const statusResult = await this.runCommand("pm2", ["status", "--no-daemon"]);
      
      if (statusResult.status !== 0) {
        this.log("PM2 status check failed, attempting to restart PM2", "WARN");
        await this.runCommand("pm2", ["kill"]);
        await this.runCommand("pm2", ["start", this.config.pm2.ecosystemFile]);
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
          const isRunning = await this.runCommand("pm2", ["jlist"]);
          if (isRunning.status === 0) {
            const processes = JSON.parse(isRunning.stdout);
            const targetProcess = processes.find(p => p.name === processName);
            if (!targetProcess || targetProcess.pm2_env.status !== "online") {
              this.log(`PM2 process ${processName} not online, restarting...`, "WARN");
              await this.runCommand("pm2", ["restart", processName]);
              allHealthy = false;
            }
          }
        }
      }

      return allHealthy;
    } catch (error) {
      this.log(`PM2 health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkGitHubActionsHealth() {
    this.log("Checking GitHub Actions workflows health...");
    
    try {
      for (const workflow of this.config.githubActions.workflows) {
        if (!fs.existsSync(workflow)) {
          this.log(`GitHub Actions workflow ${workflow} not found`, "WARN");
          continue;
        }

        // Check workflow syntax
        const workflowContent = fs.readFileSync(workflow, 'utf8');
        if (!workflowContent.includes('name:') || !workflowContent.includes('on:')) {
          this.log(`GitHub Actions workflow ${workflow} has invalid syntax`, "ERROR");
          continue;
        }

        // Check if workflow is properly configured
        if (workflow.includes('marketing-sync') && !workflowContent.includes('LINKEDIN_ACCESS_TOKEN')) {
          this.log(`GitHub Actions workflow ${workflow} missing required environment variables`, "WARN");
        }
      }

      return true;
    } catch (error) {
      this.log(`GitHub Actions health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkNetlifyFunctionsHealth() {
    this.log("Checking Netlify functions health...");
    
    try {
      if (!fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        this.log("Netlify functions manifest not found", "WARN");
        return false;
      }

      const manifest = JSON.parse(fs.readFileSync(this.config.netlifyFunctions.manifestFile, 'utf8'));
      
      if (!manifest.functions || !Array.isArray(manifest.functions)) {
        this.log("Netlify functions manifest is invalid", "ERROR");
        return false;
      }

      // Check if functions are properly generated
      if (manifest.functions.length === 0) {
        this.log("No Netlify functions found in manifest", "WARN");
        return false;
      }

      // Check if manifest is recent (within last hour)
      const manifestAge = Date.now() - new Date(manifest.generatedAt).getTime();
      if (manifestAge > 3600000) { // 1 hour
        this.log("Netlify functions manifest is stale, regenerating...", "WARN");
        await this.runCommand("node", ["scripts/generate-netlify-functions-manifest.cjs"]);
      }

      return true;
    } catch (error) {
      this.log(`Netlify functions health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performGitSync() {
    this.log("Performing Git synchronization...");
    
    try {
      // Check if we're in a git repository
      const gitStatus = await this.runCommand("git", ["status"]);
      if (gitStatus.status !== 0) {
        this.log("Not in a git repository", "ERROR");
        return false;
      }

      // Fetch latest changes
      const fetchResult = await this.runCommand("git", ["fetch", "--prune", "origin"]);
      if (fetchResult.status !== 0) {
        this.log("Git fetch failed", "ERROR");
        return false;
      }

      // Check if we're behind origin/main
      const behindCheck = await this.runCommand("git", ["rev-list", "--left-right", "--count", "HEAD...origin/main"]);
      if (behindCheck.status === 0) {
        const [ahead, behind] = behindCheck.stdout.trim().split('\t').map(Number);
        
        if (behind > 0) {
          this.log(`Repository is ${behind} commits behind origin/main, pulling...`, "INFO");
          
          // Stash any local changes
          await this.runCommand("git", ["stash", "push", "-u", "-m", `redundancy-sync-${Date.now()}`]);
          
          // Pull latest changes
          const pullResult = await this.runCommand("git", ["pull", "origin", "main"]);
          if (pullResult.status !== 0) {
            this.log("Git pull failed", "ERROR");
            return false;
          }
          
          this.log("Successfully pulled latest changes", "INFO");
        }
      }

      return true;
    } catch (error) {
      this.log(`Git sync error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performBuildHealthCheck() {
    this.log("Performing build health check...");
    
    try {
      // Check if build script exists
      if (!fs.existsSync("package.json")) {
        this.log("package.json not found", "ERROR");
        return false;
      }

      const packageJson = JSON.parse(fs.readFileSync("package.json", 'utf8'));
      if (!packageJson.scripts || !packageJson.scripts.build) {
        this.log("Build script not found in package.json", "ERROR");
        return false;
      }

      // Check if build dependencies are available
      const nodeModulesExists = fs.existsSync("node_modules");
      if (!nodeModulesExists) {
        this.log("node_modules not found, installing dependencies...", "WARN");
        const installResult = await this.runCommand("npm", ["install"]);
        if (installResult.status !== 0) {
          this.log("Dependency installation failed", "ERROR");
          return false;
        }
      }

      // Run build health check if available
      if (packageJson.scripts["build:health-check"]) {
        this.log("Running build health check...", "INFO");
        const healthCheckResult = await this.runCommand("npm", ["run", "build:health-check"]);
        if (healthCheckResult.status !== 0) {
          this.log("Build health check failed", "WARN");
          return false;
        }
      }

      return true;
    } catch (error) {
      this.log(`Build health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async rotateLogs() {
    try {
      const logFiles = fs.readdirSync(this.config.logging.logDir)
        .filter(file => file.startsWith('redundancy-system-') && file.endsWith('.log'))
        .map(file => ({
          name: file,
          path: path.join(this.config.logging.logDir, file),
          stats: fs.statSync(path.join(this.config.logging.logDir, file))
        }))
        .sort((a, b) => b.stats.mtime.getTime() - a.stats.mtime.getTime());

      // Remove old log files
      if (logFiles.length > this.config.logging.maxLogFiles) {
        const filesToRemove = logFiles.slice(this.config.logging.maxLogFiles);
        for (const file of filesToRemove) {
          fs.unlinkSync(file.path);
          this.log(`Removed old log file: ${file.name}`, "INFO");
        }
      }

      // Check log file sizes
      for (const file of logFiles) {
        if (file.stats.size > this.config.logging.maxLogSize) {
          const backupPath = file.path.replace('.log', `.${Date.now()}.log`);
          fs.renameSync(file.path, backupPath);
          this.log(`Rotated large log file: ${file.name} -> ${path.basename(backupPath)}`, "INFO");
        }
      }
    } catch (error) {
      this.log(`Log rotation error: ${error.message}`, "ERROR");
    }
  }

  async runFullHealthCheck() {
    this.log("Starting full health check cycle...", "INFO");
    
    const results = {
      pm2: false,
      githubActions: false,
      netlifyFunctions: false,
      gitSync: false,
      buildHealth: false,
      timestamp: new Date().toISOString()
    };

    try {
      // Run all health checks in parallel
      const [pm2Health, githubHealth, netlifyHealth, gitSyncResult, buildHealth] = await Promise.all([
        this.checkPM2Health(),
        this.checkGitHubActionsHealth(),
        this.checkNetlifyFunctionsHealth(),
        this.performGitSync(),
        this.performBuildHealthCheck()
      ]);

      results.pm2 = pm2Health;
      results.githubActions = githubHealth;
      results.netlifyFunctions = netlifyHealth;
      results.gitSync = gitSyncResult;
      results.buildHealth = buildHealth;

      // Log results
      this.log("Health check results:", "INFO");
      this.log(`  PM2: ${pm2Health ? 'HEALTHY' : 'UNHEALTHY'}`, "INFO");
      this.log(`  GitHub Actions: ${githubHealth ? 'HEALTHY' : 'UNHEALTHY'}`, "INFO");
      this.log(`  Netlify Functions: ${netlifyHealth ? 'HEALTHY' : 'UNHEALTHY'}`, "INFO");
      this.log(`  Git Sync: ${gitSyncResult ? 'SUCCESS' : 'FAILED'}`, "INFO");
      this.log(`  Build Health: ${buildHealth ? 'HEALTHY' : 'UNHEALTHY'}`, "INFO");

      // Perform log rotation
      await this.rotateLogs();

      return results;
    } catch (error) {
      this.log(`Full health check error: ${error.message}`, "ERROR");
      return results;
    }
  }

  initializeMonitoring() {
    this.log("Initializing redundancy automation system...", "INFO");
    
    // Start monitoring loops
    this.startPM2Monitoring();
    this.startGitHubActionsMonitoring();
    this.startNetlifyFunctionsMonitoring();
    this.startPeriodicHealthChecks();
    
    this.log("Redundancy automation system initialized", "INFO");
  }

  startPM2Monitoring() {
    setInterval(async () => {
      try {
        await this.checkPM2Health();
      } catch (error) {
        this.log(`PM2 monitoring error: ${error.message}`, "ERROR");
      }
    }, this.config.pm2.healthCheckInterval);
  }

  startGitHubActionsMonitoring() {
    setInterval(async () => {
      try {
        await this.checkGitHubActionsHealth();
      } catch (error) {
        this.log(`GitHub Actions monitoring error: ${error.message}`, "ERROR");
      }
    }, this.config.githubActions.healthCheckInterval);
  }

  startNetlifyFunctionsMonitoring() {
    setInterval(async () => {
      try {
        await this.checkNetlifyFunctionsHealth();
      } catch (error) {
        this.log(`Netlify functions monitoring error: ${error.message}`, "ERROR");
      }
    }, this.config.netlifyFunctions.healthCheckInterval);
  }

  startPeriodicHealthChecks() {
    // Run full health check every 5 minutes
    setInterval(async () => {
      try {
        await this.runFullHealthCheck();
      } catch (error) {
        this.log(`Periodic health check error: ${error.message}`, "ERROR");
      }
    }, 5 * 60 * 1000);
  }

  async emergencyRecovery() {
    this.log("Initiating emergency recovery procedures...", "WARN");
    
    try {
      // Kill all PM2 processes
      await this.runCommand("pm2", ["kill"]);
      
      // Clear PM2 logs
      await this.runCommand("pm2", ["flush"]);
      
      // Restart PM2 processes
      await this.runCommand("pm2", ["start", this.config.pm2.ecosystemFile]);
      
      // Regenerate Netlify functions manifest
      if (fs.existsSync("scripts/generate-netlify-functions-manifest.cjs")) {
        await this.runCommand("node", ["scripts/generate-netlify-functions-manifest.cjs"]);
      }
      
      // Force Git sync
      await this.performGitSync();
      
      this.log("Emergency recovery completed", "INFO");
      return true;
    } catch (error) {
      this.log(`Emergency recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  getStatus() {
    return {
      system: "Redundancy Automation System",
      version: "1.0.0",
      status: "running",
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      config: this.config,
      timestamp: new Date().toISOString()
    };
  }
}

// Export the class
module.exports = RedundancyAutomationSystem;

// If run directly, start the system
if (require.main === module) {
  const system = new RedundancyAutomationSystem();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    system.log("Shutting down redundancy automation system...", "INFO");
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    system.log("Shutting down redundancy automation system...", "INFO");
    process.exit(0);
  });
  
  system.log("Redundancy automation system started", "INFO");
}