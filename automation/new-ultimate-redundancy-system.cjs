#!/usr/bin/env node
"use strict";

const { spawnSync, execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class NewUltimateRedundancySystem {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.ensureLogDirectory();
    
    this.config = {
      pm2: {
        ecosystemFiles: [
          "ecosystem.pm2.cjs",
          "ecosystem.redundancy.cjs", 
          "ecosystem.comprehensive-redundancy.cjs",
          "ecosystem-redundancy.pm2.cjs",
          "ecosystem.ultimate-redundancy.pm2.cjs"
        ],
        processes: [
          "zion-auto-sync",
          "zion-auto-sync-cron",
          "redundancy-automation-system",
          "redundancy-health-monitor",
          "redundancy-git-sync",
          "redundancy-build-monitor",
          "comprehensive-redundancy-orchestrator",
          "enhanced-pm2-redundancy",
          "enhanced-github-actions-redundancy",
          "enhanced-netlify-functions-redundancy",
          "ultimate-redundancy-master",
          "ultimate-redundancy-system"
        ],
        healthCheckInterval: 30000,
        maxRestartAttempts: 5,
        restartDelay: 5000,
        autoRecovery: true,
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
        fallbackScripts: [
          "automation/marketing-sync.js",
          "automation/git-sync.cjs",
          "automation/pm2-auto-sync.js"
        ],
        backupWorkflows: true
      },
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
          "front-index-futurizer"
        ]
      },
      npmScripts: {
        automation: [
          "automation:all",
          "automation:pm2",
          "automation:git-sync",
          "automation:build",
          "automation:health",
          "automation:redundancy"
        ],
        redundancy: [
          "redundancy:start",
          "redundancy:stop",
          "redundancy:restart",
          "redundancy:status",
          "redundancy:health"
        ],
        build: [
          "build",
          "build:heal",
          "build:smart",
          "build:recovery"
        ]
      }
    };
    
    this.status = {
      pm2: { healthy: false, processes: [], lastCheck: null },
      githubActions: { healthy: false, workflows: [], lastCheck: null },
      netlifyFunctions: { healthy: false, functions: [], lastCheck: null },
      npmScripts: { healthy: false, scripts: [], lastCheck: null }
    };
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] [NEW-ULTIMATE-REDUNDANCY] ${message}`;
    console.log(logEntry);
    
    const logFile = path.join(this.logDir, `new-ultimate-redundancy-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logEntry + "\n");
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve, reject) => {
      const child = spawn(command, args, {
        stdio: 'pipe',
        shell: true,
        ...options
      });

      let stdout = '';
      let stderr = '';

      child.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      child.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      child.on('close', (code) => {
        if (code === 0) {
          resolve({ success: true, stdout, stderr, code });
        } else {
          reject({ success: false, stdout, stderr, code });
        }
      });

      child.on('error', (error) => {
        reject({ success: false, error: error.message });
      });
    });
  }

  async checkPM2Health() {
    try {
      this.log("Checking PM2 health...");
      
      // Check PM2 status
      const statusResult = await this.runCommand("pm2", ["status", "--json"]);
      const status = JSON.parse(statusResult.stdout);
      
      this.status.pm2.processes = status.map(proc => ({
        name: proc.name,
        status: proc.pm2_env.status,
        restart: proc.pm2_env.restart_time,
        uptime: proc.pm2_env.pm_uptime
      }));
      
      this.status.pm2.healthy = this.status.pm2.processes.every(proc => 
        proc.status === "online" && proc.restart < 10
      );
      
      this.status.pm2.lastCheck = new Date();
      
      this.log(`PM2 health check completed. Healthy: ${this.status.pm2.healthy}`);
      return this.status.pm2.healthy;
    } catch (error) {
      this.log(`PM2 health check failed: ${error.message}`, "ERROR");
      this.status.pm2.healthy = false;
      return false;
    }
  }

  async checkGitHubActionsHealth() {
    try {
      this.log("Checking GitHub Actions health...");
      
      // Check if workflows exist
      const workflowsExist = this.config.githubActions.workflows.every(workflow => 
        fs.existsSync(path.join(this.workspace, workflow))
      );
      
      // Check if backup workflows exist
      const backupWorkflowsExist = fs.existsSync(path.join(this.workspace, ".github/workflows/backups"));
      
      this.status.githubActions.workflows = this.config.githubActions.workflows.map(workflow => ({
        path: workflow,
        exists: fs.existsSync(path.join(this.workspace, workflow)),
        backup: fs.existsSync(path.join(this.workspace, workflow.replace(".yml", "-backup.yml")))
      }));
      
      this.status.githubActions.healthy = workflowsExist && backupWorkflowsExist;
      this.status.githubActions.lastCheck = new Date();
      
      this.log(`GitHub Actions health check completed. Healthy: ${this.status.githubActions.healthy}`);
      return this.status.githubActions.healthy;
    } catch (error) {
      this.log(`GitHub Actions health check failed: ${error.message}`, "ERROR");
      this.status.githubActions.healthy = false;
      return false;
    }
  }

  async checkNetlifyFunctionsHealth() {
    try {
      this.log("Checking Netlify functions health...");
      
      // Check if netlify directory exists
      const netlifyDir = path.join(this.workspace, "netlify");
      const functionsDir = path.join(netlifyDir, "functions");
      
      if (!fs.existsSync(netlifyDir) || !fs.existsSync(functionsDir)) {
        this.log("Netlify functions directory not found", "WARN");
        this.status.netlifyFunctions.healthy = false;
        return false;
      }
      
      // Check functions manifest
      const manifestPath = path.join(this.workspace, this.config.netlifyFunctions.manifestFile);
      let manifest = {};
      
      if (fs.existsSync(manifestPath)) {
        try {
          manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        } catch (e) {
          this.log("Failed to parse functions manifest", "WARN");
        }
      }
      
      // Check individual functions
      this.status.netlifyFunctions.functions = this.config.netlifyFunctions.functions.map(funcName => {
        const funcPath = path.join(functionsDir, funcName);
        return {
          name: funcName,
          exists: fs.existsSync(funcPath),
          hasIndex: fs.existsSync(path.join(funcPath, "index.js")) || fs.existsSync(path.join(funcPath, "index.cjs")),
          inManifest: manifest.functions && manifest.functions.includes(funcName)
        };
      });
      
      this.status.netlifyFunctions.healthy = this.status.netlifyFunctions.functions.every(func => 
        func.exists && func.hasIndex
      );
      
      this.status.netlifyFunctions.lastCheck = new Date();
      
      this.log(`Netlify functions health check completed. Healthy: ${this.status.netlifyFunctions.healthy}`);
      return this.status.netlifyFunctions.healthy;
    } catch (error) {
      this.log(`Netlify functions health check failed: ${error.message}`, "ERROR");
      this.status.netlifyFunctions.healthy = false;
      return false;
    }
  }

  async checkNpmScriptsHealth() {
    try {
      this.log("Checking NPM scripts health...");
      
      // Check if package.json exists and has required scripts
      const packagePath = path.join(this.workspace, "package.json");
      if (!fs.existsSync(packagePath)) {
        this.log("package.json not found", "ERROR");
        this.status.npmScripts.healthy = false;
        return false;
      }
      
      const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      const scripts = packageJson.scripts || {};
      
      this.status.npmScripts.scripts = this.config.npmScripts.automation.map(script => ({
        name: script,
        exists: !!scripts[script],
        canRun: true
      }));
      
      this.status.npmScripts.healthy = this.status.npmScripts.scripts.every(script => script.exists);
      this.status.npmScripts.lastCheck = new Date();
      
      this.log(`NPM scripts health check completed. Healthy: ${this.status.npmScripts.healthy}`);
      return this.status.npmScripts.healthy;
    } catch (error) {
      this.log(`NPM scripts health check failed: ${error.message}`, "ERROR");
      this.status.npmScripts.healthy = false;
      return false;
    }
  }

  async performPM2Recovery() {
    try {
      this.log("Performing PM2 recovery...");
      
      // Stop all PM2 processes
      await this.runCommand("pm2", ["stop", "all"]);
      
      // Delete PM2 processes
      await this.runCommand("pm2", ["delete", "all"]);
      
      // Clear PM2 logs
      await this.runCommand("pm2", ["flush"]);
      
      // Start redundancy system
      await this.runCommand("npm", ["run", "redundancy:start"]);
      
      // Wait for processes to stabilize
      await new Promise(resolve => setTimeout(resolve, 10000));
      
      this.log("PM2 recovery completed");
      return true;
    } catch (error) {
      this.log(`PM2 recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performGitHubActionsRecovery() {
    try {
      this.log("Performing GitHub Actions recovery...");
      
      // Run fallback scripts
      for (const script of this.config.githubActions.fallbackScripts) {
        if (fs.existsSync(path.join(this.workspace, script))) {
          this.log(`Running fallback script: ${script}`);
          try {
            await this.runCommand("node", [script]);
          } catch (e) {
            this.log(`Fallback script ${script} failed: ${e.message}`, "WARN");
          }
        }
      }
      
      this.log("GitHub Actions recovery completed");
      return true;
    } catch (error) {
      this.log(`GitHub Actions recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performNetlifyFunctionsRecovery() {
    try {
      this.log("Performing Netlify functions recovery...");
      
      // Regenerate functions manifest
      const manifestScript = "scripts/generate-netlify-functions-manifest.cjs";
      if (fs.existsSync(path.join(this.workspace, manifestScript))) {
        await this.runCommand("node", [manifestScript]);
      }
      
      // Trigger Netlify build if possible
      try {
        await this.runCommand("netlify", ["build"]);
        this.log("Netlify build completed successfully");
      } catch (e) {
        this.log("Netlify CLI not available, using alternative build method", "WARN");
        // Alternative: run npm build
        await this.runCommand("npm", ["run", "build"]);
      }
      
      this.log("Netlify functions recovery completed");
      return true;
    } catch (error) {
      this.log(`Netlify functions recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performNpmScriptsRecovery() {
    try {
      this.log("Performing NPM scripts recovery...");
      
      // Run key automation scripts
      const recoveryScripts = [
        "automation:git-sync",
        "redundancy:health",
        "build:health-check"
      ];
      
      for (const script of recoveryScripts) {
        try {
          this.log(`Running recovery script: ${script}`);
          await this.runCommand("npm", ["run", script]);
        } catch (e) {
          this.log(`Recovery script ${script} failed: ${e.message}`, "WARN");
        }
      }
      
      this.log("NPM scripts recovery completed");
      return true;
    } catch (error) {
      this.log(`NPM scripts recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async runFullHealthCheck() {
    this.log("Starting full health check...");
    
    const results = {
      pm2: await this.checkPM2Health(),
      githubActions: await this.checkGitHubActionsHealth(),
      netlifyFunctions: await this.checkNetlifyFunctionsHealth(),
      npmScripts: await this.checkNpmScriptsHealth()
    };
    
    const overallHealth = Object.values(results).every(health => health);
    
    this.log(`Full health check completed. Overall health: ${overallHealth}`);
    
    return {
      overall: overallHealth,
      details: results,
      status: this.status
    };
  }

  async runFullRecovery() {
    this.log("Starting full recovery process...");
    
    const results = {
      pm2: await this.performPM2Recovery(),
      githubActions: await this.performGitHubActionsRecovery(),
      netlifyFunctions: await this.performNetlifyFunctionsRecovery(),
      npmScripts: await this.performNpmScriptsRecovery()
    };
    
    const overallSuccess = Object.values(results).every(result => result);
    
    this.log(`Full recovery completed. Overall success: ${overallSuccess}`);
    
    return {
      overall: overallSuccess,
      details: results
    };
  }

  async startMonitoring() {
    this.log("Starting continuous monitoring...");
    
    const monitor = async () => {
      try {
        const health = await this.runFullHealthCheck();
        
        if (!health.overall) {
          this.log("System health issues detected, initiating recovery...", "WARN");
          await this.runFullRecovery();
        }
        
        // Save status
        const statusFile = path.join(this.logDir, "new-ultimate-redundancy-status.json");
        fs.writeFileSync(statusFile, JSON.stringify({
          timestamp: new Date().toISOString(),
          health: health,
          status: this.status
        }, null, 2));
        
      } catch (error) {
        this.log(`Monitoring cycle failed: ${error.message}`, "ERROR");
      }
    };
    
    // Run initial check
    await monitor();
    
    // Set up continuous monitoring
    this.monitoringInterval = setInterval(monitor, this.config.pm2.healthCheckInterval);
    
    this.log("Continuous monitoring started");
  }

  async stopMonitoring() {
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
      this.monitoringInterval = null;
      this.log("Continuous monitoring stopped");
    }
  }

  getStatus() {
    return {
      timestamp: new Date().toISOString(),
      overall: this.status.pm2.healthy && this.status.githubActions.healthy && 
               this.status.netlifyFunctions.healthy && this.status.npmScripts.healthy,
      pm2: this.status.pm2,
      githubActions: this.status.githubActions,
      netlifyFunctions: this.status.netlifyFunctions,
      npmScripts: this.status.npmScripts
    };
  }

  async shutdown() {
    this.log("Shutting down new ultimate redundancy system...");
    
    await this.stopMonitoring();
    
    const statusFile = path.join(this.logDir, "new-ultimate-redundancy-status.json");
    fs.writeFileSync(statusFile, JSON.stringify({
      timestamp: new Date().toISOString(),
      status: "shutdown",
      finalStatus: this.status
    }, null, 2));
    
    this.log("New ultimate redundancy system shutdown complete");
  }
}

// CLI interface
async function main() {
  const system = new NewUltimateRedundancySystem();
  
  const command = process.argv[2] || "start";
  
  try {
    switch (command) {
      case "start":
        await system.startMonitoring();
        // Keep the process running
        process.on('SIGINT', async () => {
          await system.shutdown();
          process.exit(0);
        });
        break;
        
      case "health":
        const health = await system.runFullHealthCheck();
        console.log(JSON.stringify(health, null, 2));
        break;
        
      case "recovery":
        const recovery = await system.runFullRecovery();
        console.log(JSON.stringify(recovery, null, 2));
        break;
        
      case "status":
        const status = system.getStatus();
        console.log(JSON.stringify(status, null, 2));
        break;
        
      case "monitor":
        await system.startMonitoring();
        break;
        
      case "stop":
        await system.shutdown();
        break;
        
      default:
        console.log("Usage: node new-ultimate-redundancy-system.cjs [start|health|recovery|status|monitor|stop]");
        process.exit(1);
    }
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = NewUltimateRedundancySystem;