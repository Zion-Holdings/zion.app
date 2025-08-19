#!/usr/bin/env node
"use strict";

const { spawnSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const cron = require("node-cron");

class RedundancyAutomationSystem {
  constructor() {
    this.config = {
      pm2: {
        processes: ["zion-auto-sync", "zion-auto-sync-cron"],
        healthCheckInterval: 30000, // 30 seconds
        restartAttempts: 3,
        restartDelay: 5000 // 5 seconds
      },
      githubActions: {
        workflows: ["marketing-sync", "sync-health"],
        checkInterval: 60000, // 1 minute
        maxFailures: 3
      },
      netlify: {
        functions: this.loadNetlifyFunctions(),
        healthCheckInterval: 120000, // 2 minutes
        maxFailures: 2
      },
      logging: {
        enabled: true,
        logFile: "logs/redundancy-automation.log",
        maxLogSize: 10 * 1024 * 1024, // 10MB
        maxLogFiles: 5
      }
    };
    
    this.stats = {
      pm2: { checks: 0, failures: 0, restarts: 0 },
      githubActions: { checks: 0, failures: 0, triggers: 0 },
      netlify: { checks: 0, failures: 0, recoveries: 0 }
    };
    
    this.init();
  }

  init() {
    this.ensureLogDirectory();
    this.log("Redundancy Automation System initialized");
    this.startHealthChecks();
    this.startMonitoring();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.config.logging.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  loadNetlifyFunctions() {
    try {
      const manifestPath = path.join(process.cwd(), "netlify/functions/functions-manifest.json");
      if (fs.existsSync(manifestPath)) {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
        return manifest.functions || [];
      }
    } catch (err) {
      this.log(`Error loading Netlify functions manifest: ${err.message}`);
    }
    return [];
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    
    if (this.config.logging.enabled) {
      console.log(logEntry);
      try {
        fs.appendFileSync(this.config.logging.logFile, logEntry + "\n");
        this.rotateLogsIfNeeded();
      } catch (err) {
        console.error(`Log write failed: ${err.message}`);
      }
    }
  }

  rotateLogsIfNeeded() {
    try {
      const stats = fs.statSync(this.config.logging.logFile);
      if (stats.size > this.config.logging.maxLogSize) {
        for (let i = this.config.logging.maxLogFiles - 1; i > 0; i--) {
          const oldFile = `${this.config.logging.logFile}.${i}`;
          const newFile = `${this.config.logging.logFile}.${i + 1}`;
          if (fs.existsSync(oldFile)) {
            fs.renameSync(oldFile, newFile);
          }
        }
        fs.renameSync(this.config.logging.logFile, `${this.config.logging.logFile}.1`);
        fs.writeFileSync(this.config.logging.logFile, "");
      }
    } catch (err) {
      // Ignore rotation errors
    }
  }

  runCommand(command, args = [], options = {}) {
    const result = spawnSync(command, args, {
      cwd: options.cwd || process.cwd(),
      env: process.env,
      shell: false,
      encoding: "utf8",
      maxBuffer: 1024 * 1024 * 10
    });
    
    return {
      status: result.status,
      stdout: result.stdout || "",
      stderr: result.stderr || "",
      success: result.status === 0
    };
  }

  // PM2 Redundancy Management
  async checkPM2Health() {
    this.stats.pm2.checks++;
    
    try {
      const status = this.runCommand("pm2", ["status", "--no-daemon"]);
      if (!status.success) {
        this.log(`PM2 status check failed: ${status.stderr}`, "ERROR");
        this.stats.pm2.failures++;
        await this.recoverPM2();
        return false;
      }

      // Check if all expected processes are running
      const processes = this.config.pm2.processes;
      for (const processName of processes) {
        if (!status.stdout.includes(processName)) {
          this.log(`PM2 process ${processName} not found, restarting...`, "WARN");
          await this.restartPM2Process(processName);
        }
      }

      return true;
    } catch (err) {
      this.log(`PM2 health check error: ${err.message}`, "ERROR");
      this.stats.pm2.failures++;
      return false;
    }
  }

  async restartPM2Process(processName) {
    this.log(`Restarting PM2 process: ${processName}`);
    
    for (let attempt = 1; attempt <= this.config.pm2.restartAttempts; attempt++) {
      try {
        const result = this.runCommand("pm2", ["restart", processName]);
        if (result.success) {
          this.log(`Successfully restarted ${processName} on attempt ${attempt}`);
          this.stats.pm2.restarts++;
          return true;
        } else {
          this.log(`Restart attempt ${attempt} failed for ${processName}: ${result.stderr}`, "WARN");
          if (attempt < this.config.pm2.restartAttempts) {
            await new Promise(resolve => setTimeout(resolve, this.config.pm2.restartDelay));
          }
        }
      } catch (err) {
        this.log(`Restart error for ${processName}: ${err.message}`, "ERROR");
      }
    }

    // If all attempts failed, try to start the process
    this.log(`All restart attempts failed for ${processName}, trying to start...`);
    const startResult = this.runCommand("pm2", ["start", "ecosystem.pm2.cjs", "--update-env"]);
    if (startResult.success) {
      this.log(`Successfully started ${processName} via ecosystem`);
      return true;
    }
    
    return false;
  }

  async recoverPM2() {
    this.log("Attempting PM2 recovery...");
    
    try {
      // Kill all PM2 processes
      this.runCommand("pm2", ["kill"]);
      
      // Wait a moment
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Start fresh from ecosystem
      const result = this.runCommand("pm2", ["start", "ecosystem.pm2.cjs", "--update-env"]);
      if (result.success) {
        this.log("PM2 recovery successful");
        return true;
      } else {
        this.log(`PM2 recovery failed: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (err) {
      this.log(`PM2 recovery error: ${err.message}`, "ERROR");
      return false;
    }
  }

  // GitHub Actions Redundancy Management
  async checkGitHubActionsHealth() {
    this.stats.githubActions.checks++;
    
    try {
      // Check if workflows are properly configured
      const workflowsDir = path.join(process.cwd(), ".github/workflows");
      if (!fs.existsSync(workflowsDir)) {
        this.log("GitHub workflows directory not found", "ERROR");
        this.stats.githubActions.failures++;
        return false;
      }

      // Check each workflow file
      for (const workflow of this.config.githubActions.workflows) {
        const workflowFile = path.join(workflowsDir, `${workflow}.yml`);
        if (!fs.existsSync(workflowFile)) {
          this.log(`GitHub workflow ${workflow}.yml not found`, "ERROR");
          this.stats.githubActions.failures++;
          continue;
        }

        // Validate workflow syntax
        const workflowContent = fs.readFileSync(workflowFile, "utf8");
        if (!this.validateWorkflowSyntax(workflowContent)) {
          this.log(`GitHub workflow ${workflow}.yml has syntax issues`, "WARN");
        }
      }

      return true;
    } catch (err) {
      this.log(`GitHub Actions health check error: ${err.message}`, "ERROR");
      this.stats.githubActions.failures++;
      return false;
    }
  }

  validateWorkflowSyntax(content) {
    try {
      // Basic YAML validation
      if (!content.includes("name:") || !content.includes("on:")) {
        return false;
      }
      
      // Check for common syntax issues
      const lines = content.split("\n");
      let braceCount = 0;
      
      for (const line of lines) {
        if (line.includes("{")) braceCount++;
        if (line.includes("}")) braceCount--;
      }
      
      return braceCount === 0;
    } catch (err) {
      return false;
    }
  }

  async triggerGitHubWorkflow(workflowName) {
    this.log(`Triggering GitHub workflow: ${workflowName}`);
    
    try {
      // Use GitHub CLI if available
      const ghResult = this.runCommand("gh", ["workflow", "run", workflowName]);
      if (ghResult.success) {
        this.log(`Successfully triggered ${workflowName} via GitHub CLI`);
        this.stats.githubActions.triggers++;
        return true;
      }

      // Fallback: manual trigger via git push
      this.log(`GitHub CLI not available, using manual trigger for ${workflowName}`);
      const triggerFile = `.github/workflows/${workflowName}-trigger.txt`;
      fs.writeFileSync(triggerFile, `Manual trigger: ${new Date().toISOString()}`);
      
      const gitResult = this.runCommand("git", ["add", triggerFile]);
      if (gitResult.success) {
        this.runCommand("git", ["commit", "-m", `Trigger ${workflowName} workflow`]);
        this.runCommand("git", ["push", "origin", "main"]);
        this.log(`Manually triggered ${workflowName} via git push`);
        this.stats.githubActions.triggers++;
        return true;
      }

      return false;
    } catch (err) {
      this.log(`Error triggering workflow ${workflowName}: ${err.message}`, "ERROR");
      return false;
    }
  }

  // Netlify Functions Redundancy Management
  async checkNetlifyFunctionsHealth() {
    this.stats.netlify.checks++;
    
    try {
      const functions = this.config.netlify.functions;
      if (functions.length === 0) {
        this.log("No Netlify functions found", "WARN");
        return false;
      }

      let healthyFunctions = 0;
      let failedFunctions = 0;

      for (const functionName of functions) {
        if (await this.checkFunctionHealth(functionName)) {
          healthyFunctions++;
        } else {
          failedFunctions++;
        }
      }

      const healthPercentage = (healthyFunctions / functions.length) * 100;
      this.log(`Netlify functions health: ${healthPercentage.toFixed(1)}% (${healthyFunctions}/${functions.length})`);

      if (healthPercentage < 80) {
        this.log("Netlify functions health below threshold, initiating recovery", "WARN");
        await this.recoverNetlifyFunctions();
        return false;
      }

      return true;
    } catch (err) {
      this.log(`Netlify functions health check error: ${err.message}`, "ERROR");
      this.stats.netlify.failures++;
      return false;
    }
  }

  async checkFunctionHealth(functionName) {
    try {
      const functionPath = path.join(process.cwd(), "netlify/functions", functionName);
      
      if (!fs.existsSync(functionPath)) {
        this.log(`Netlify function ${functionName} not found`, "WARN");
        return false;
      }

      // Check if function has required files
      const requiredFiles = ["index.js", "index.mjs", "index.ts"];
      const hasRequiredFile = requiredFiles.some(file => fs.existsSync(path.join(functionPath, file)));
      
      if (!hasRequiredFile) {
        this.log(`Netlify function ${functionName} missing required files`, "WARN");
        return false;
      }

      return true;
    } catch (err) {
      this.log(`Error checking function ${functionName}: ${err.message}`, "WARN");
      return false;
    }
  }

  async recoverNetlifyFunctions() {
    this.log("Attempting Netlify functions recovery...");
    
    try {
      // Regenerate functions manifest
      const manifestResult = this.runCommand("node", ["scripts/generate-netlify-functions-manifest.cjs"]);
      if (manifestResult.success) {
        this.log("Netlify functions manifest regenerated");
      }

      // Trigger Netlify rebuild
      const netlifyResult = this.runCommand("netlify", ["build"]);
      if (netlifyResult.success) {
        this.log("Netlify rebuild successful");
        this.stats.netlify.recoveries++;
        return true;
      } else {
        this.log(`Netlify rebuild failed: ${netlifyResult.stderr}`, "ERROR");
        return false;
      }
    } catch (err) {
      this.log(`Netlify functions recovery error: ${err.message}`, "ERROR");
      return false;
    }
  }

  // System Monitoring
  startHealthChecks() {
    // PM2 health checks
    setInterval(async () => {
      await this.checkPM2Health();
    }, this.config.pm2.healthCheckInterval);

    // GitHub Actions health checks
    setInterval(async () => {
      await this.checkGitHubActionsHealth();
    }, this.config.githubActions.checkInterval);

    // Netlify functions health checks
    setInterval(async () => {
      await this.checkNetlifyFunctionsHealth();
    }, this.config.netlify.healthCheckInterval);

    this.log("Health checks started");
  }

  startMonitoring() {
    // System status monitoring
    setInterval(() => {
      this.logSystemStatus();
    }, 300000); // Every 5 minutes

    // Memory and performance monitoring
    setInterval(() => {
      this.monitorSystemResources();
    }, 60000); // Every minute

    this.log("System monitoring started");
  }

  logSystemStatus() {
    const status = {
      timestamp: new Date().toISOString(),
      stats: this.stats,
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      config: {
        pm2: { processes: this.config.pm2.processes.length },
        githubActions: { workflows: this.config.githubActions.workflows.length },
        netlify: { functions: this.config.netlify.functions.length }
      }
    };

    this.log(`System Status: ${JSON.stringify(status, null, 2)}`);
  }

  monitorSystemResources() {
    const memUsage = process.memoryUsage();
    const memUsageMB = {
      rss: Math.round(memUsage.rss / 1024 / 1024),
      heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024),
      heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024),
      external: Math.round(memUsage.external / 1024 / 1024)
    };

    if (memUsageMB.heapUsed > 500) { // 500MB threshold
      this.log(`High memory usage detected: ${memUsageMB.heapUsed}MB`, "WARN");
    }

    if (memUsageMB.rss > 1000) { // 1GB threshold
      this.log(`High RSS memory usage: ${memUsageMB.rss}MB`, "WARN");
    }
  }

  // Emergency Recovery
  async emergencyRecovery() {
    this.log("Initiating emergency recovery...", "ERROR");
    
    try {
      // Stop all PM2 processes
      this.runCommand("pm2", ["kill"]);
      
      // Wait for cleanup
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Restart PM2 ecosystem
      const pm2Result = this.runCommand("pm2", ["start", "ecosystem.pm2.cjs", "--update-env"]);
      
      // Trigger GitHub Actions recovery
      for (const workflow of this.config.githubActions.workflows) {
        await this.triggerGitHubWorkflow(workflow);
      }
      
      // Rebuild Netlify functions
      await this.recoverNetlifyFunctions();
      
      this.log("Emergency recovery completed");
      return true;
    } catch (err) {
      this.log(`Emergency recovery failed: ${err.message}`, "ERROR");
      return false;
    }
  }

  // Graceful shutdown
  async shutdown() {
    this.log("Shutting down Redundancy Automation System...");
    
    try {
      // Stop all health checks
      clearInterval(this.pm2Interval);
      clearInterval(this.githubInterval);
      clearInterval(this.netlifyInterval);
      
      // Final status report
      this.logSystemStatus();
      
      this.log("Redundancy Automation System shutdown complete");
      process.exit(0);
    } catch (err) {
      this.log(`Shutdown error: ${err.message}`, "ERROR");
      process.exit(1);
    }
  }
}

// Main execution
if (require.main === module) {
  const redundancySystem = new RedundancyAutomationSystem();
  
  // Handle graceful shutdown
  process.on("SIGINT", () => redundancySystem.shutdown());
  process.on("SIGTERM", () => redundancySystem.shutdown());
  process.on("uncaughtException", (err) => {
    redundancySystem.log(`Uncaught exception: ${err.message}`, "ERROR");
    redundancySystem.emergencyRecovery().then(() => {
      process.exit(1);
    });
  });
  
  process.on("unhandledRejection", (reason, promise) => {
    redundancySystem.log(`Unhandled rejection at ${promise}: ${reason}`, "ERROR");
  });
}

module.exports = RedundancyAutomationSystem;