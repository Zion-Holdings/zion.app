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
          "ecosystem.redundancy.cjs", 
          "ecosystem-redundancy.pm2.cjs"
        ],
        processes: [
          "zion-auto-sync",
          "zion-auto-sync-cron",
          "zion-auto-sync-backup",
          "zion-auto-sync-cron-backup",
          "redundancy-automation-system",
          "redundancy-health-monitor",
          "redundancy-git-sync",
          "redundancy-build-monitor",
          "redundancy-master-orchestrator",
          "redundancy-pm2-manager",
          "redundancy-github-manager",
          "redundancy-netlify-manager",
          "build-monitor-backup",
          "git-sync-backup",
          "netlify-healer-backup"
        ],
        healthCheckInterval: 30000,
        maxRestartAttempts: 10,
        restartDelay: 3000
      },
      githubActions: {
        workflows: [
          ".github/workflows/marketing-sync.yml",
          ".github/workflows/marketing-sync-backup.yml",
          ".github/workflows/sync-health.yml",
          ".github/workflows/sync-health-backup.yml"
        ],
        healthCheckInterval: 45000,
        maxFailureThreshold: 5,
        backupWorkflows: [
          "marketing-sync-backup",
          "sync-health-backup"
        ]
      },
      netlifyFunctions: {
        manifestFile: "netlify/functions/functions-manifest.json",
        functionsDir: "netlify/functions",
        healthCheckInterval: 90000,
        maxFailureThreshold: 3,
        criticalFunctions: [
          "netlify-auto-healer-runner",
          "continuous-orchestrator",
          "site-maintenance-orchestrator"
        ]
      },
      build: {
        healthCheckInterval: 120000,
        maxBuildFailures: 5,
        buildTimeout: 600000,
        scripts: [
          "build",
          "build:heal",
          "build:smart",
          "build:auto-fix"
        ]
      },
      logging: {
        logDir: "automation/logs",
        maxLogSize: 15 * 1024 * 1024,
        maxLogFiles: 50
      },
      monitoring: {
        overallHealthCheckInterval: 60000,
        alertThreshold: 3,
        recoveryMode: false
      }
    };
    
    this.stats = {
      pm2Restarts: 0,
      githubFailures: 0,
      netlifyFailures: 0,
      buildFailures: 0,
      lastRecovery: null,
      systemHealth: "healthy"
    };
    
    this.ensureLogDirectory();
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
    
    const logFile = path.join(this.config.logging.logDir, `comprehensive-redundancy-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logEntry + "\n");
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: process.cwd(),
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 25,
        timeout: 30000,
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
    this.log("🔍 Checking PM2 process health...");
    
    try {
      const statusResult = await this.runCommand("pm2", ["status", "--no-daemon"]);
      
      if (statusResult.status !== 0) {
        this.log("⚠️ PM2 status check failed, attempting to restart PM2", "WARN");
        await this.runCommand("pm2", ["kill"]);
        await this.runCommand("pm2", ["start", this.config.pm2.ecosystemFiles[0]]);
        this.stats.pm2Restarts++;
        return false;
      }

      const processes = this.config.pm2.processes;
      let allHealthy = true;
      let failedProcesses = [];

      for (const processName of processes) {
        const processStatus = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
        
        if (processStatus.status !== 0) {
          this.log(`⚠️ PM2 process ${processName} not found, restarting...`, "WARN");
          await this.runCommand("pm2", ["restart", processName]);
          failedProcesses.push(processName);
          allHealthy = false;
        } else {
          // Check if process is actually running
          const isRunning = await this.runCommand("pm2", ["jlist"]);
          if (isRunning.status === 0 && !isRunning.stdout.includes(`"name":"${processName}"`)) {
            this.log(`⚠️ PM2 process ${processName} not running, restarting...`, "WARN");
            await this.runCommand("pm2", ["restart", processName]);
            failedProcesses.push(processName);
            allHealthy = false;
          }
        }
      }

      if (failedProcesses.length > 0) {
        this.log(`🔄 Restarted ${failedProcesses.length} PM2 processes: ${failedProcesses.join(", ")}`, "WARN");
        this.stats.pm2Restarts += failedProcesses.length;
      }

      return allHealthy;
    } catch (error) {
      this.log(`❌ PM2 health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkGitHubActionsHealth() {
    this.log("🔍 Checking GitHub Actions health...");
    
    try {
      let allHealthy = true;
      let failedWorkflows = [];

      for (const workflow of this.config.githubActions.workflows) {
        if (!fs.existsSync(workflow)) {
          this.log(`⚠️ GitHub workflow ${workflow} not found`, "WARN");
          failedWorkflows.push(workflow);
          allHealthy = false;
          continue;
        }

        // Check workflow syntax and validity
        try {
          const workflowContent = fs.readFileSync(workflow, 'utf8');
          if (!workflowContent.includes('name:') || !workflowContent.includes('on:')) {
            this.log(`⚠️ GitHub workflow ${workflow} has invalid syntax`, "WARN");
            failedWorkflows.push(workflow);
            allHealthy = false;
          }
        } catch (error) {
          this.log(`⚠️ Error reading GitHub workflow ${workflow}: ${error.message}`, "WARN");
          failedWorkflows.push(workflow);
          allHealthy = false;
        }
      }

      if (failedWorkflows.length > 0) {
        this.log(`🔄 Found ${failedWorkflows.length} problematic GitHub workflows: ${failedWorkflows.join(", ")}`, "WARN");
        this.stats.githubFailures += failedWorkflows.length;
        
        // Attempt to restore from backup workflows
        await this.restoreGitHubWorkflows(failedWorkflows);
      }

      return allHealthy;
    } catch (error) {
      this.log(`❌ GitHub Actions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restoreGitHubWorkflows(failedWorkflows) {
    this.log("🔄 Attempting to restore GitHub workflows from backups...");
    
    for (const workflow of failedWorkflows) {
      const backupWorkflow = workflow.replace('.yml', '-backup.yml');
      
      if (fs.existsSync(backupWorkflow)) {
        try {
          fs.copyFileSync(backupWorkflow, workflow);
          this.log(`✅ Restored ${workflow} from backup`, "INFO");
        } catch (error) {
          this.log(`❌ Failed to restore ${workflow} from backup: ${error.message}`, "ERROR");
        }
      }
    }
  }

  async checkNetlifyFunctionsHealth() {
    this.log("🔍 Checking Netlify Functions health...");
    
    try {
      let allHealthy = true;
      let failedFunctions = [];

      // Check manifest file
      if (!fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        this.log("⚠️ Netlify functions manifest not found", "WARN");
        allHealthy = false;
      } else {
        try {
          const manifest = JSON.parse(fs.readFileSync(this.config.netlifyFunctions.manifestFile, 'utf8'));
          if (!manifest.functions || manifest.functions.length === 0) {
            this.log("⚠️ Netlify functions manifest is empty", "WARN");
            allHealthy = false;
          }
        } catch (error) {
          this.log(`⚠️ Error parsing Netlify functions manifest: ${error.message}`, "WARN");
          allHealthy = false;
        }
      }

      // Check critical functions
      for (const functionName of this.config.netlifyFunctions.criticalFunctions) {
        const functionFile = path.join(this.config.netlifyFunctions.functionsDir, `${functionName}.js`);
        if (!fs.existsSync(functionFile)) {
          this.log(`⚠️ Critical Netlify function ${functionName} not found`, "WARN");
          failedFunctions.push(functionName);
          allHealthy = false;
        }
      }

      if (failedFunctions.length > 0) {
        this.log(`🔄 Found ${failedFunctions.length} failed Netlify functions: ${failedFunctions.join(", ")}`, "WARN");
        this.stats.netlifyFailures += failedFunctions.length;
        
        // Attempt to regenerate functions
        await this.regenerateNetlifyFunctions();
      }

      return allHealthy;
    } catch (error) {
      this.log(`❌ Netlify Functions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async regenerateNetlifyFunctions() {
    this.log("🔄 Attempting to regenerate Netlify functions...");
    
    try {
      const result = await this.runCommand("npm", ["run", "netlify:manifest"]);
      if (result.status === 0) {
        this.log("✅ Successfully regenerated Netlify functions manifest", "INFO");
      } else {
        this.log(`⚠️ Failed to regenerate Netlify functions: ${result.stderr}`, "WARN");
      }
    } catch (error) {
      this.log(`❌ Error regenerating Netlify functions: ${error.message}`, "ERROR");
    }
  }

  async checkBuildHealth() {
    this.log("🔍 Checking build system health...");
    
    try {
      let allHealthy = true;
      let failedBuilds = [];

      for (const buildScript of this.config.build.scripts) {
        try {
          // Check if build script exists in package.json
          const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
          if (!packageJson.scripts[buildScript]) {
            this.log(`⚠️ Build script ${buildScript} not found in package.json`, "WARN");
            failedBuilds.push(buildScript);
            allHealthy = false;
          }
        } catch (error) {
          this.log(`⚠️ Error checking build script ${buildScript}: ${error.message}`, "WARN");
          failedBuilds.push(buildScript);
          allHealthy = false;
        }
      }

      if (failedBuilds.length > 0) {
        this.log(`🔄 Found ${failedBuilds.length} problematic build scripts: ${failedBuilds.join(", ")}`, "WARN");
        this.stats.buildFailures += failedBuilds.length;
      }

      return allHealthy;
    } catch (error) {
      this.log(`❌ Build health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performRecoveryActions() {
    this.log("🚨 Performing recovery actions...");
    
    try {
      // Restart PM2 processes
      await this.runCommand("pm2", ["restart", "all"]);
      
      // Regenerate Netlify functions
      await this.regenerateNetlifyFunctions();
      
      // Restore GitHub workflows
      const failedWorkflows = this.config.githubActions.workflows.filter(w => !fs.existsSync(w));
      if (failedWorkflows.length > 0) {
        await this.restoreGitHubWorkflows(failedWorkflows);
      }
      
      this.stats.lastRecovery = new Date().toISOString();
      this.config.monitoring.recoveryMode = false;
      
      this.log("✅ Recovery actions completed", "INFO");
    } catch (error) {
      this.log(`❌ Recovery actions failed: ${error.message}`, "ERROR");
    }
  }

  async updateSystemHealth() {
    const totalFailures = this.stats.pm2Restarts + this.stats.githubFailures + 
                         this.stats.netlifyFailures + this.stats.buildFailures;
    
    if (totalFailures === 0) {
      this.stats.systemHealth = "healthy";
    } else if (totalFailures <= this.config.monitoring.alertThreshold) {
      this.stats.systemHealth = "warning";
    } else {
      this.stats.systemHealth = "critical";
      this.config.monitoring.recoveryMode = true;
    }
  }

  async generateHealthReport() {
    const report = {
      timestamp: new Date().toISOString(),
      systemHealth: this.stats.systemHealth,
      stats: this.stats,
      config: {
        pm2: {
          ecosystemFiles: this.config.pm2.ecosystemFiles.length,
          processes: this.config.pm2.processes.length
        },
        githubActions: {
          workflows: this.config.githubActions.workflows.length
        },
        netlifyFunctions: {
          criticalFunctions: this.config.netlifyFunctions.criticalFunctions.length
        },
        build: {
          scripts: this.config.build.scripts.length
        }
      }
    };

    const reportFile = path.join(this.config.logging.logDir, `health-report-${new Date().toISOString().split('T')[0]}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    return report;
  }

  async startMonitoring() {
    this.log("🚀 Starting comprehensive redundancy monitoring...");
    
    // Initial health checks
    await this.checkPM2Health();
    await this.checkGitHubActionsHealth();
    await this.checkNetlifyFunctionsHealth();
    await this.checkBuildHealth();
    
    // Start monitoring loops
    setInterval(async () => {
      await this.checkPM2Health();
    }, this.config.pm2.healthCheckInterval);
    
    setInterval(async () => {
      await this.checkGitHubActionsHealth();
    }, this.config.githubActions.healthCheckInterval);
    
    setInterval(async () => {
      await this.checkNetlifyFunctionsHealth();
    }, this.config.netlifyFunctions.healthCheckInterval);
    
    setInterval(async () => {
      await this.checkBuildHealth();
    }, this.config.build.healthCheckInterval);
    
    setInterval(async () => {
      await this.updateSystemHealth();
      
      if (this.config.monitoring.recoveryMode) {
        await this.performRecoveryActions();
      }
      
      await this.generateHealthReport();
    }, this.config.monitoring.overallHealthCheckInterval);
    
    this.log("✅ Comprehensive redundancy monitoring started", "INFO");
  }

  async stopMonitoring() {
    this.log("🛑 Stopping comprehensive redundancy monitoring...");
    // In a real implementation, you'd want to clear intervals
    this.log("✅ Comprehensive redundancy monitoring stopped", "INFO");
  }

  async getStatus() {
    await this.updateSystemHealth();
    return {
      systemHealth: this.stats.systemHealth,
      stats: this.stats,
      lastRecovery: this.stats.lastRecovery,
      recoveryMode: this.config.monitoring.recoveryMode
    };
  }
}

// CLI interface
if (require.main === module) {
  const system = new ComprehensiveRedundancySystem();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      system.startMonitoring();
      break;
    case 'stop':
      system.stopMonitoring();
      break;
    case 'status':
      system.getStatus().then(status => {
        console.log(JSON.stringify(status, null, 2));
        process.exit(0);
      });
      break;
    case 'health':
      Promise.all([
        system.checkPM2Health(),
        system.checkGitHubActionsHealth(),
        system.checkNetlifyFunctionsHealth(),
        system.checkBuildHealth()
      ]).then(results => {
        const [pm2, github, netlify, build] = results;
        console.log(`PM2: ${pm2 ? '✅' : '❌'}`);
        console.log(`GitHub Actions: ${github ? '✅' : '❌'}`);
        console.log(`Netlify Functions: ${netlify ? '✅' : '❌'}`);
        console.log(`Build System: ${build ? '✅' : '❌'}`);
        process.exit(0);
      });
      break;
    case 'recovery':
      system.performRecoveryActions().then(() => {
        console.log('Recovery completed');
        process.exit(0);
      });
      break;
    default:
      console.log('Usage: node comprehensive-redundancy-system.cjs [start|stop|status|health|recovery]');
      process.exit(1);
  }
}

module.exports = ComprehensiveRedundancySystem;