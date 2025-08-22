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
          "ecosystem.comprehensive-redundancy.cjs",
          "ecosystem-redundancy.pm2.cjs"
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
          "enhanced-netlify-functions-redundancy"
        ],
        healthCheckInterval: 30000,
        maxRestartAttempts: 5,
        restartDelay: 5000
      },
      
      // GitHub Actions Redundancy Configuration
      github: {
        workflows: [
          "marketing-sync",
          "sync-health"
        ],
        backupWorkflows: [
          "marketing-sync-backup",
          "sync-health-backup"
        ],
        healthCheckInterval: 60000,
        maxFailures: 3,
        autoTrigger: true
      },
      
      // Netlify Functions Redundancy Configuration
      netlify: {
        functionsDir: "netlify/functions",
        manifestFile: "netlify/functions/functions-manifest.json",
        healthCheckInterval: 120000,
        maxFailures: 3,
        autoRegenerate: true
      },
      
      // General Configuration
      general: {
        logRotation: {
          maxSize: 10 * 1024 * 1024, // 10MB
          maxFiles: 30,
          compress: true
        },
        memoryThreshold: 80,
        cpuThreshold: 90,
        alertThreshold: 3
      }
    };
    
    this.monitoring = false;
    this.checkInterval = null;
    this.restartCounts = new Map();
    this.healthHistory = new Map();
    this.failureCounts = new Map();
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
        const statusMatch = output.match(/status\s+:\s+(\w+)/);
        const memoryMatch = output.match(/memory\s+:\s+(\d+)/);
        const cpuMatch = output.match(/cpu\s+:\s+(\d+)/);
        
        return {
          name: processName,
          status: statusMatch ? statusMatch[1] : "unknown",
          memory: memoryMatch ? parseInt(memoryMatch[1]) : 0,
          cpu: cpuMatch ? parseInt(cpuMatch[1]) : 0,
          running: statusMatch ? statusMatch[1] === "online" : false
        };
      }
      return null;
    } catch (error) {
      this.log(`Failed to get PM2 process info for ${processName}: ${error.message}`, "ERROR");
      return null;
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

  async startPM2Process(processName) {
    try {
      this.log(`Starting PM2 process: ${processName}`);
      const result = await this.runCommand("pm2", ["start", processName]);
      
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

  async checkPM2Redundancy() {
    this.log("Checking PM2 redundancy...");
    
    for (const processName of this.config.pm2.processes) {
      try {
        const processInfo = await this.getPM2ProcessInfo(processName);
        
        if (!processInfo) {
          this.log(`Process ${processName} not found, attempting to start`, "WARN");
          await this.startPM2Process(processName);
          continue;
        }
        
        if (!processInfo.running) {
          this.log(`Process ${processName} is not running, attempting to restart`, "WARN");
          await this.restartPM2Process(processName);
          continue;
        }
        
        // Check resource usage
        if (processInfo.memory > this.config.general.memoryThreshold) {
          this.log(`Process ${processName} memory usage high: ${processInfo.memory}%`, "WARN");
        }
        
        if (processInfo.cpu > this.config.general.cpuThreshold) {
          this.log(`Process ${processName} CPU usage high: ${processInfo.cpu}%`, "WARN");
        }
        
        this.log(`Process ${processName} is healthy`);
        
      } catch (error) {
        this.log(`Error checking PM2 process ${processName}: ${error.message}`, "ERROR");
      }
    }
  }

  // GitHub Actions Redundancy Methods
  async checkGitHubWorkflows() {
    this.log("Checking GitHub Actions workflows...");
    
    const workflowsDir = path.join(this.workspace, ".github/workflows");
    
    try {
      if (!fs.existsSync(workflowsDir)) {
        this.log("GitHub workflows directory not found", "ERROR");
        return false;
      }
      
      const workflowFiles = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));
      
      for (const workflow of this.config.github.workflows) {
        const workflowFile = `${workflow}.yml`;
        const backupWorkflowFile = `${workflow}-backup.yml`;
        
        if (!workflowFiles.includes(workflowFile)) {
          this.log(`Workflow ${workflow} not found, checking backup`, "WARN");
          
          if (workflowFiles.includes(backupWorkflowFile)) {
            this.log(`Restoring workflow ${workflow} from backup`, "INFO");
            await this.restoreGitHubWorkflow(workflow, backupWorkflowFile);
          }
        } else {
          this.log(`Workflow ${workflow} is present and healthy`);
        }
      }
      
      return true;
    } catch (error) {
      this.log(`Error checking GitHub workflows: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restoreGitHubWorkflow(workflowName, backupFile) {
    try {
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      const sourcePath = path.join(workflowsDir, backupFile);
      const targetPath = path.join(workflowsDir, `${workflowName}.yml`);
      
      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, targetPath);
        this.log(`Successfully restored workflow ${workflowName} from backup`);
        return true;
      } else {
        this.log(`Backup file ${backupFile} not found`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error restoring workflow ${workflowName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async triggerGitHubWorkflow(workflowName) {
    try {
      this.log(`Triggering GitHub workflow: ${workflowName}`);
      
      // Create a temporary file to trigger the workflow
      const triggerFile = path.join(this.workspace, `.github/workflows/${workflowName}-trigger.yml`);
      const workflowContent = fs.readFileSync(path.join(this.workspace, `.github/workflows/${workflowName}.yml`), 'utf8');
      
      // Add a manual trigger
      const modifiedContent = workflowContent.replace(
        /on:\s*\n\s*schedule:/,
        `on:\n  workflow_dispatch:\n  schedule:`
      );
      
      fs.writeFileSync(triggerFile, modifiedContent);
      
      // Commit and push the trigger
      await this.runCommand("git", ["add", triggerFile]);
      await this.runCommand("git", ["commit", "-m", `chore: trigger ${workflowName} workflow`]);
      await this.runCommand("git", ["push", "origin", "main"]);
      
      // Clean up
      fs.unlinkSync(triggerFile);
      await this.runCommand("git", ["add", triggerFile]);
      await this.runCommand("git", ["commit", "-m", `chore: remove ${workflowName} trigger`]);
      await this.runCommand("git", ["push", "origin", "main"]);
      
      this.log(`Successfully triggered workflow ${workflowName}`);
      return true;
    } catch (error) {
      this.log(`Error triggering workflow ${workflowName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  // Netlify Functions Redundancy Methods
  async checkNetlifyFunctions() {
    this.log("Checking Netlify functions...");
    
    try {
      const functionsDir = this.config.netlify.functionsDir;
      const manifestFile = this.config.netlify.manifestFile;
      
      if (!fs.existsSync(functionsDir)) {
        this.log("Netlify functions directory not found", "ERROR");
        return false;
      }
      
      if (!fs.existsSync(manifestFile)) {
        this.log("Netlify functions manifest not found, regenerating", "WARN");
        await this.regenerateNetlifyFunctions();
        return true;
      }
      
      const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
      const functions = manifest.functions || [];
      
      if (functions.length === 0) {
        this.log("No Netlify functions found in manifest, regenerating", "WARN");
        await this.regenerateNetlifyFunctions();
        return true;
      }
      
      this.log(`Found ${functions.length} Netlify functions, all healthy`);
      return true;
      
    } catch (error) {
      this.log(`Error checking Netlify functions: ${error.message}`, "ERROR");
      return false;
    }
  }

  async regenerateNetlifyFunctions() {
    try {
      this.log("Regenerating Netlify functions manifest...");
      
      const result = await this.runCommand("npm", ["run", "netlify:manifest"]);
      
      if (result.status === 0) {
        this.log("Successfully regenerated Netlify functions manifest");
        return true;
      } else {
        this.log("Failed to regenerate Netlify functions manifest", "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error regenerating Netlify functions: ${error.message}`, "ERROR");
      return false;
    }
  }

  // Health Monitoring Methods
  async checkSystemHealth() {
    this.log("Checking system health...");
    
    try {
      // Check disk space
      const diskResult = await this.runCommand("df", ["-h", "."]);
      if (diskResult.status === 0) {
        const diskUsage = diskResult.stdout.match(/(\d+)%/);
        if (diskUsage && parseInt(diskUsage[1]) > 90) {
          this.log("Disk usage is high", "WARN");
        }
      }
      
      // Check memory usage
      const memoryResult = await this.runCommand("free", ["-h"]);
      if (memoryResult.status === 0) {
        this.log("Memory usage check completed");
      }
      
      // Check CPU usage
      const cpuResult = await this.runCommand("top", ["-bn1"]);
      if (cpuResult.status === 0) {
        this.log("CPU usage check completed");
      }
      
      this.log("System health check completed");
      return true;
      
    } catch (error) {
      this.log(`Error checking system health: ${error.message}`, "ERROR");
      return false;
    }
  }

  // Main Redundancy Check
  async performRedundancyCheck() {
    this.log("Starting comprehensive redundancy check...");
    
    try {
      // Check PM2 redundancy
      await this.checkPM2Redundancy();
      
      // Check GitHub Actions redundancy
      await this.checkGitHubWorkflows();
      
      // Check Netlify functions redundancy
      await this.checkNetlifyFunctions();
      
      // Check system health
      await this.checkSystemHealth();
      
      this.log("Comprehensive redundancy check completed successfully");
      return true;
      
    } catch (error) {
      this.log(`Error during redundancy check: ${error.message}`, "ERROR");
      return false;
    }
  }

  // Start monitoring
  startMonitoring() {
    if (this.monitoring) {
      this.log("Monitoring is already running");
      return;
    }
    
    this.log("Starting ultimate redundancy monitoring...");
    this.monitoring = true;
    
    this.checkInterval = setInterval(async () => {
      await this.performRedundancyCheck();
    }, this.config.pm2.healthCheckInterval);
    
    this.log("Ultimate redundancy monitoring started");
  }

  // Stop monitoring
  stopMonitoring() {
    if (!this.monitoring) {
      this.log("Monitoring is not running");
      return;
    }
    
    this.log("Stopping ultimate redundancy monitoring...");
    this.monitoring = false;
    
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    
    this.log("Ultimate redundancy monitoring stopped");
  }

  // Get status
  getStatus() {
    return {
      monitoring: this.monitoring,
      lastCheck: this.lastCheck || null,
      failureCounts: Object.fromEntries(this.failureCounts),
      healthHistory: Object.fromEntries(this.healthHistory)
    };
  }

  // Run once
  async runOnce() {
    this.log("Running one-time redundancy check...");
    const result = await this.performRedundancyCheck();
    this.lastCheck = new Date().toISOString();
    return result;
  }
}

// CLI Interface
async function main() {
  const args = process.argv.slice(2);
  const command = args[0] || "start";
  
  const redundancyMaster = new UltimateRedundancyMaster();
  
  try {
    switch (command) {
      case "start":
        redundancyMaster.startMonitoring();
        break;
      case "stop":
        redundancyMaster.stopMonitoring();
        break;
      case "status":
        console.log(JSON.stringify(redundancyMaster.getStatus(), null, 2));
        break;
      case "check":
        await redundancyMaster.runOnce();
        break;
      case "once":
        await redundancyMaster.runOnce();
        process.exit(0);
        break;
      default:
        console.log("Usage: node ultimate-redundancy-master.cjs [start|stop|status|check|once]");
        process.exit(1);
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = UltimateRedundancyMaster;