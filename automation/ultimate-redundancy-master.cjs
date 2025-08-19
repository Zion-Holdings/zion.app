#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
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
      // PM2 Redundancy Configuration
      pm2: {
        ecosystemFiles: [
          "ecosystem.pm2.cjs",
          "ecosystem.redundancy.cjs",
          "ecosystem.comprehensive-redundancy.cjs"
        ],
        processes: [
          "zion-auto-sync",
          "zion-auto-sync-cron",
          "redundancy-automation-system",
          "redundancy-health-monitor",
          "redundancy-git-sync",
          "redundancy-build-monitor",
          "enhanced-pm2-redundancy",
          "enhanced-github-actions-redundancy",
          "enhanced-netlify-functions-redundancy"
        ],
        healthCheckInterval: 30000,
        maxRestartAttempts: 5,
        restartDelay: 5000
      },
      
      // GitHub Actions Redundancy Configuration
      githubActions: {
        workflows: [
          "marketing-sync",
          "sync-health"
        ],
        backupWorkflows: [
          "marketing-sync-backup",
          "sync-health-backup"
        ],
        triggerInterval: 300000, // 5 minutes
        healthCheckInterval: 60000 // 1 minute
      },
      
      // Netlify Functions Redundancy Configuration
      netlify: {
        functionsDir: "netlify/functions",
        manifestFile: "netlify/functions/functions-manifest.json",
        healthCheckInterval: 120000, // 2 minutes
        functionTimeout: 30000,
        maxRetries: 3
      },
      
      // General Configuration
      monitoring: false,
      checkInterval: null,
      restartCounts: new Map(),
      healthHistory: new Map()
    };
    
    this.restartCounts = new Map();
    this.healthHistory = new Map();
    this.lastHealthCheck = new Map();
  }

  ensureLogDir() {
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
      console.error(`Failed to write to log file: ${error.message}`);
    }
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: this.workspace,
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 20,
        timeout: options.timeout || 30000,
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

  // PM2 Redundancy Methods
  async checkPM2Status() {
    try {
      const result = await this.runCommand("pm2", ["status", "--no-daemon"]);
      return result.status === 0;
    } catch (error) {
      this.log(`PM2 status check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async getPM2ProcessInfo(processName) {
    try {
      const result = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
      if (result.status === 0) {
        const output = result.stdout;
        const statusMatch = output.match(/status\s*:\s*(\w+)/);
        const memoryMatch = output.match(/memory\s*:\s*(\d+)/);
        const cpuMatch = output.match(/cpu\s*:\s*(\d+)/);
        
        return {
          name: processName,
          status: statusMatch ? statusMatch[1] : "unknown",
          memory: memoryMatch ? parseInt(memoryMatch[1]) : 0,
          cpu: cpuMatch ? parseInt(cpuMatch[1]) : 0,
          lastCheck: Date.now()
        };
      }
      return null;
    } catch (error) {
      this.log(`Failed to get PM2 process info for ${processName}: ${error.message}`, "ERROR");
      return null;
    }
  }

  async startPM2Process(processName) {
    try {
      this.log(`Starting PM2 process: ${processName}`);
      const result = await this.runCommand("pm2", ["start", processName, "--update-env"]);
      if (result.status === 0) {
        this.log(`Successfully started PM2 process: ${processName}`);
        return true;
      } else {
        this.log(`Failed to start PM2 process: ${processName}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error starting PM2 process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restartPM2Process(processName) {
    try {
      this.log(`Restarting PM2 process: ${processName}`);
      const result = await this.runCommand("pm2", ["restart", processName]);
      if (result.status === 0) {
        this.log(`Successfully restarted PM2 process: ${processName}`);
        return true;
      } else {
        this.log(`Failed to restart PM2 process: ${processName}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error restarting PM2 process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async ensurePM2Processes() {
    this.log("Ensuring all PM2 processes are running...");
    
    for (const processName of this.config.pm2.processes) {
      const processInfo = await this.getPM2ProcessInfo(processName);
      
      if (!processInfo || processInfo.status !== "online") {
        this.log(`Process ${processName} is not running, attempting to start...`);
        
        if (processInfo && processInfo.status === "errored") {
          await this.restartPM2Process(processName);
        } else {
          await this.startPM2Process(processName);
        }
        
        // Wait a bit before checking the next process
        await new Promise(resolve => setTimeout(resolve, 2000));
      } else {
        this.log(`Process ${processName} is running (${processInfo.status})`);
      }
    }
  }

  // GitHub Actions Redundancy Methods
  async checkGitHubWorkflowStatus(workflowName) {
    try {
      const workflowFile = path.join(this.workspace, ".github/workflows", `${workflowName}.yml`);
      if (!fs.existsSync(workflowFile)) {
        this.log(`Workflow file not found: ${workflowFile}`, "WARN");
        return false;
      }
      
      // Check if workflow is properly configured
      const workflowContent = fs.readFileSync(workflowFile, "utf8");
      const isValid = workflowContent.includes("on:") && workflowContent.includes("jobs:");
      
      if (!isValid) {
        this.log(`Invalid workflow configuration: ${workflowName}`, "ERROR");
        return false;
      }
      
      this.log(`Workflow ${workflowName} is properly configured`);
      return true;
    } catch (error) {
      this.log(`Error checking GitHub workflow ${workflowName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async triggerGitHubWorkflow(workflowName) {
    try {
      this.log(`Triggering GitHub workflow: ${workflowName}`);
      
      // Create a trigger file to simulate workflow dispatch
      const triggerFile = path.join(this.workspace, `.github/workflows/.${workflowName}-trigger`);
      fs.writeFileSync(triggerFile, Date.now().toString());
      
      // Commit and push the trigger
      await this.runCommand("git", ["add", triggerFile]);
      await this.runCommand("git", ["commit", "-m", `chore(workflow): trigger ${workflowName} [skip ci]`]);
      await this.runCommand("git", ["push", "origin", "main"]);
      
      // Clean up trigger file
      fs.unlinkSync(triggerFile);
      await this.runCommand("git", ["add", triggerFile]);
      await this.runCommand("git", ["commit", "-m", `chore(workflow): cleanup ${workflowName} trigger [skip ci]`]);
      await this.runCommand("git", ["push", "origin", "main"]);
      
      this.log(`Successfully triggered GitHub workflow: ${workflowName}`);
      return true;
    } catch (error) {
      this.log(`Error triggering GitHub workflow ${workflowName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async ensureGitHubWorkflows() {
    this.log("Ensuring all GitHub workflows are properly configured...");
    
    for (const workflow of this.config.githubActions.workflows) {
      const isHealthy = await this.checkGitHubWorkflowStatus(workflow);
      
      if (!isHealthy) {
        this.log(`Workflow ${workflow} is unhealthy, attempting to trigger...`);
        await this.triggerGitHubWorkflow(workflow);
      }
    }
  }

  // Netlify Functions Redundancy Methods
  async checkNetlifyFunctionHealth(functionName) {
    try {
      const functionDir = path.join(this.config.netlify.functionsDir, functionName);
      if (!fs.existsSync(functionDir)) {
        this.log(`Netlify function directory not found: ${functionDir}`, "WARN");
        return false;
      }
      
      // Check if function has required files
      const requiredFiles = ["index.js", "index.mjs", "index.ts"];
      const hasRequiredFile = requiredFiles.some(file => fs.existsSync(path.join(functionDir, file)));
      
      if (!hasRequiredFile) {
        this.log(`Netlify function ${functionName} missing required files`, "ERROR");
        return false;
      }
      
      this.log(`Netlify function ${functionName} is healthy`);
      return true;
    } catch (error) {
      this.log(`Error checking Netlify function ${functionName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async regenerateNetlifyManifest() {
    try {
      this.log("Regenerating Netlify functions manifest...");
      const result = await this.runCommand("node", ["scripts/generate-netlify-functions-manifest.cjs"]);
      
      if (result.status === 0) {
        this.log("Successfully regenerated Netlify functions manifest");
        return true;
      } else {
        this.log("Failed to regenerate Netlify functions manifest", "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error regenerating Netlify functions manifest: ${error.message}`, "ERROR");
      return false;
    }
  }

  async ensureNetlifyFunctions() {
    try {
      this.log("Ensuring all Netlify functions are healthy...");
      
      // Read the manifest to get function names
      if (fs.existsSync(this.config.netlify.manifestFile)) {
        const manifest = JSON.parse(fs.readFileSync(this.config.netlify.manifestFile, "utf8"));
        
        if (manifest.functions && Array.isArray(manifest.functions)) {
          for (const functionName of manifest.functions) {
            const isHealthy = await this.checkNetlifyFunctionHealth(functionName);
            
            if (!isHealthy) {
              this.log(`Netlify function ${functionName} is unhealthy, attempting to regenerate...`);
              await this.regenerateNetlifyManifest();
              break; // Break after one regeneration attempt
            }
          }
        }
      } else {
        this.log("Netlify functions manifest not found, regenerating...");
        await this.regenerateNetlifyManifest();
      }
    } catch (error) {
      this.log(`Error ensuring Netlify functions: ${error.message}`, "ERROR");
    }
  }

  // Health Monitoring Methods
  async performHealthCheck() {
    this.log("Performing comprehensive health check...");
    
    const healthResults = {
      timestamp: Date.now(),
      pm2: {},
      githubActions: {},
      netlify: {},
      overall: "healthy"
    };
    
    // Check PM2 processes
    for (const processName of this.config.pm2.processes) {
      const processInfo = await this.getPM2ProcessInfo(processName);
      healthResults.pm2[processName] = processInfo;
      
      if (!processInfo || processInfo.status !== "online") {
        healthResults.overall = "unhealthy";
      }
    }
    
    // Check GitHub workflows
    for (const workflow of this.config.githubActions.workflows) {
      const isHealthy = await this.checkGitHubWorkflowStatus(workflow);
      healthResults.githubActions[workflow] = isHealthy;
      
      if (!isHealthy) {
        healthResults.overall = "unhealthy";
      }
    }
    
    // Check Netlify functions
    try {
      if (fs.existsSync(this.config.netlify.manifestFile)) {
        const manifest = JSON.parse(fs.readFileSync(this.config.netlify.manifestFile, "utf8"));
        healthResults.netlify.manifestExists = true;
        healthResults.netlify.functionCount = manifest.functions ? manifest.functions.length : 0;
      } else {
        healthResults.netlify.manifestExists = false;
        healthResults.overall = "unhealthy";
      }
    } catch (error) {
      healthResults.netlify.error = error.message;
      healthResults.overall = "unhealthy";
    }
    
    // Store health results
    this.healthHistory.set(Date.now(), healthResults);
    
    // Clean up old health history (keep last 100 entries)
    const healthKeys = Array.from(this.healthHistory.keys()).sort((a, b) => b - a);
    if (healthKeys.length > 100) {
      healthKeys.slice(100).forEach(key => this.healthHistory.delete(key));
    }
    
    // Update last health check timestamp
    this.lastHealthCheck.set('overall', Date.now());
    
    this.log(`Health check completed. Overall status: ${healthResults.overall}`);
    return healthResults;
  }

  // Main Orchestration Methods
  async startMonitoring() {
    if (this.config.monitoring) {
      this.log("Monitoring is already running");
      return;
    }
    
    this.log("Starting ultimate redundancy monitoring...");
    this.config.monitoring = true;
    
    // Initial health check
    await this.performHealthCheck();
    
    // Start monitoring loop
    this.config.checkInterval = setInterval(async () => {
      try {
        await this.performHealthCheck();
        await this.ensurePM2Processes();
        await this.ensureGitHubWorkflows();
        await this.ensureNetlifyFunctions();
      } catch (error) {
        this.log(`Error in monitoring loop: ${error.message}`, "ERROR");
      }
    }, this.config.pm2.healthCheckInterval);
    
    this.log("Ultimate redundancy monitoring started successfully");
  }

  async stopMonitoring() {
    if (!this.config.monitoring) {
      this.log("Monitoring is not running");
      return;
    }
    
    this.log("Stopping ultimate redundancy monitoring...");
    this.config.monitoring = false;
    
    if (this.config.checkInterval) {
      clearInterval(this.config.checkInterval);
      this.config.checkInterval = null;
    }
    
    this.log("Ultimate redundancy monitoring stopped");
  }

  async getStatus() {
    const status = {
      monitoring: this.config.monitoring,
      lastHealthCheck: this.lastHealthCheck.size > 0 ? 
        Math.max(...Array.from(this.lastHealthCheck.keys())) : null,
      healthHistorySize: this.healthHistory.size,
      restartCounts: Object.fromEntries(this.config.restartCounts),
      config: {
        pm2: {
          processCount: this.config.pm2.processes.length,
          healthCheckInterval: this.config.pm2.healthCheckInterval
        },
        githubActions: {
          workflowCount: this.config.githubActions.workflows.length,
          triggerInterval: this.config.githubActions.triggerInterval
        },
        netlify: {
          healthCheckInterval: this.config.netlify.healthCheckInterval
        }
      }
    };
    
    return status;
  }

  async generateReport() {
    const status = await this.getStatus();
    const latestHealth = this.healthHistory.size > 0 ? 
      this.healthHistory.get(Math.max(...Array.from(this.healthHistory.keys()))) : null;
    
    const report = {
      timestamp: new Date().toISOString(),
      status,
      latestHealth,
      recommendations: []
    };
    
    // Generate recommendations based on health status
    if (latestHealth) {
      if (latestHealth.overall === "unhealthy") {
        report.recommendations.push("System health is degraded. Review PM2 processes, GitHub workflows, and Netlify functions.");
      }
      
      // PM2 recommendations
      Object.entries(latestHealth.pm2).forEach(([processName, processInfo]) => {
        if (!processInfo || processInfo.status !== "online") {
          report.recommendations.push(`PM2 process ${processName} needs attention. Current status: ${processInfo?.status || 'unknown'}`);
        }
      });
      
      // GitHub Actions recommendations
      Object.entries(latestHealth.githubActions).forEach(([workflow, isHealthy]) => {
        if (!isHealthy) {
          report.recommendations.push(`GitHub workflow ${workflow} needs attention.`);
        }
      });
      
      // Netlify recommendations
      if (!latestHealth.netlify.manifestExists) {
        report.recommendations.push("Netlify functions manifest is missing. Regenerate using npm run netlify:manifest");
      }
    }
    
    return report;
  }

  // CLI Interface
  async runCommandLine(args) {
    const command = args[0];
    
    switch (command) {
      case "start":
        await this.startMonitoring();
        break;
      case "stop":
        await this.stopMonitoring();
        break;
      case "status":
        const status = await this.getStatus();
        console.log(JSON.stringify(status, null, 2));
        break;
      case "report":
        const report = await this.generateReport();
        console.log(JSON.stringify(report, null, 2));
        break;
      case "health":
        const health = await this.performHealthCheck();
        console.log(JSON.stringify(health, null, 2));
        break;
      case "ensure":
        await this.ensurePM2Processes();
        await this.ensureGitHubWorkflows();
        await this.ensureNetlifyFunctions();
        this.log("All systems ensured");
        break;
      default:
        console.log(`
Ultimate Redundancy Master - Comprehensive Automation Redundancy System

Usage:
  node automation/ultimate-redundancy-master.cjs <command>

Commands:
  start     - Start monitoring and redundancy management
  stop      - Stop monitoring
  status    - Show current status
  report    - Generate comprehensive health report
  health    - Perform immediate health check
  ensure    - Ensure all systems are running

This system provides redundancy for:
- PM2 process management
- GitHub Actions workflows
- Netlify functions
- Comprehensive health monitoring
- Automatic recovery and restart
        `);
    }
  }
}

// Main execution
if (require.main === module) {
  const master = new UltimateRedundancyMaster();
  const args = process.argv.slice(2);
  
  master.runCommandLine(args).catch(error => {
    console.error("Fatal error:", error);
    process.exit(1);
  });
}

module.exports = UltimateRedundancyMaster;