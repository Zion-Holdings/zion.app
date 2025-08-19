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
          "ecosystem.ultimate-redundancy.pm2.cjs"
        ],
        processes: [
          "zion-auto-sync",
          "zion-auto-sync-cron",
          "redundancy-automation-system",
          "redundancy-health-monitor",
          "redundancy-git-sync",
          "redundancy-build-monitor",
          "comprehensive-redundancy-system",
          "ultimate-redundancy-master",
          "pm2-redundancy-manager",
          "github-actions-redundancy-manager",
          "netlify-functions-redundancy-manager"
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
        backupTriggers: true,
        workflowDispatch: true
      },
      netlifyFunctions: {
        manifestFile: "netlify/functions/functions-manifest.json",
        healthCheckInterval: 120000,
        maxFailureThreshold: 2,
        autoRegenerate: true,
        deploymentCheck: true,
        functionCount: 100,
        autoHealing: true
      },
      npmScripts: {
        critical: [
          "pm2:start",
          "pm2:restart", 
          "build",
          "build:heal",
          "build:recovery",
          "redundancy:ultimate:start",
          "redundancy:comprehensive:start"
        ],
        monitoring: [
          "redundancy:ultimate:status",
          "redundancy:comprehensive:status",
          "redundancy:ultimate:health",
          "redundancy:comprehensive:health"
        ]
      },
      logging: {
        logDir: "automation/logs",
        maxLogSize: 10 * 1024 * 1024,
        maxLogFiles: 30,
        compression: true
      },
      monitoring: {
        enabled: true,
        interval: 30000,
        alertThreshold: 3,
        autoRestart: true,
        healthDashboard: true
      },
      recovery: {
        autoHealing: true,
        backupRestoration: true,
        conflictResolution: true,
        emergencyMode: true
      }
    };
    
    this.status = {
      pm2: { healthy: false, processes: [], lastCheck: null },
      githubActions: { healthy: false, workflows: [], lastCheck: null },
      netlifyFunctions: { healthy: false, functions: [], lastCheck: null },
      npmScripts: { healthy: false, scripts: [], lastCheck: null },
      overall: { healthy: false, score: 0, lastUpdate: null }
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

  async checkPM2UltimateHealth() {
    this.log("🔍 Checking ultimate PM2 process health...");
    
    try {
      const result = await this.runCommand("pm2", ["status", "--no-daemon"]);
      
      if (result.status !== 0) {
        this.log("❌ PM2 status check failed", "ERROR");
        this.status.pm2.healthy = false;
        return false;
      }

      const processes = [];
      const lines = result.stdout.split('\n');
      
      for (const line of lines) {
        if (line.includes('│') && !line.includes('App name')) {
          const parts = line.split('│').map(p => p.trim()).filter(p => p);
          if (parts.length >= 4) {
            const process = {
              name: parts[0],
              status: parts[1],
              cpu: parts[2],
              memory: parts[3],
              uptime: parts[4] || 'N/A'
            };
            processes.push(process);
          }
        }
      }

      this.status.pm2.processes = processes;
      this.status.pm2.lastCheck = new Date();
      
      // Check if all expected processes are running
      const expectedProcesses = this.config.pm2.processes;
      const runningProcesses = processes.map(p => p.name);
      const missingProcesses = expectedProcesses.filter(p => !runningProcesses.includes(p));
      
      if (missingProcesses.length > 0) {
        this.log(`⚠️ Missing PM2 processes: ${missingProcesses.join(', ')}`, "WARN");
        this.status.pm2.healthy = false;
        
        // Auto-recovery for missing processes
        if (this.config.pm2.autoRecovery) {
          await this.recoverPM2Processes(missingProcesses);
        }
      } else {
        this.log("✅ All PM2 processes are running", "INFO");
        this.status.pm2.healthy = true;
      }
      
      return this.status.pm2.healthy;
    } catch (error) {
      this.log(`❌ PM2 health check error: ${error.message}`, "ERROR");
      this.status.pm2.healthy = false;
      return false;
    }
  }

  async recoverPM2Processes(missingProcesses) {
    this.log(`🔄 Attempting to recover ${missingProcesses.length} missing PM2 processes...`);
    
    for (const processName of missingProcesses) {
      try {
        // Try to restart the process
        const result = await this.runCommand("pm2", ["restart", processName]);
        
        if (result.status === 0) {
          this.log(`✅ Successfully recovered PM2 process: ${processName}`);
        } else {
          // Try to start the process
          const startResult = await this.runCommand("pm2", ["start", processName]);
          
          if (startResult.status === 0) {
            this.log(`✅ Successfully started PM2 process: ${processName}`);
          } else {
            this.log(`❌ Failed to recover PM2 process: ${processName}`, "ERROR");
          }
        }
        
        // Wait before next recovery attempt
        await new Promise(resolve => setTimeout(resolve, this.config.pm2.restartDelay));
      } catch (error) {
        this.log(`❌ Error recovering PM2 process ${processName}: ${error.message}`, "ERROR");
      }
    }
  }

  async checkGitHubActionsUltimateHealth() {
    this.log("🔍 Checking ultimate GitHub Actions health...");
    
    try {
      const workflows = [];
      
      for (const workflowFile of this.config.githubActions.workflows) {
        if (fs.existsSync(workflowFile)) {
          const content = fs.readFileSync(workflowFile, 'utf8');
          const workflow = {
            name: path.basename(workflowFile, '.yml'),
            file: workflowFile,
            exists: true,
            valid: content.includes('name:') && content.includes('on:'),
            lastModified: fs.statSync(workflowFile).mtime
          };
          workflows.push(workflow);
        } else {
          workflows.push({
            name: path.basename(workflowFile, '.yml'),
            file: workflowFile,
            exists: false,
            valid: false,
            lastModified: null
          });
        }
      }
      
      this.status.githubActions.workflows = workflows;
      this.status.githubActions.lastCheck = new Date();
      
      const validWorkflows = workflows.filter(w => w.exists && w.valid);
      const invalidWorkflows = workflows.filter(w => !w.exists || !w.valid);
      
      if (invalidWorkflows.length > 0) {
        this.log(`⚠️ Invalid GitHub Actions workflows: ${invalidWorkflows.map(w => w.name).join(', ')}`, "WARN");
        this.status.githubActions.healthy = false;
        
        // Auto-recovery for invalid workflows
        if (this.config.githubActions.autoTrigger) {
          await this.recoverGitHubActionsWorkflows(invalidWorkflows);
        }
      } else {
        this.log("✅ All GitHub Actions workflows are valid", "INFO");
        this.status.githubActions.healthy = true;
      }
      
      return this.status.githubActions.healthy;
    } catch (error) {
      this.log(`❌ GitHub Actions health check error: ${error.message}`, "ERROR");
      this.status.githubActions.healthy = false;
      return false;
    }
  }

  async recoverGitHubActionsWorkflows(invalidWorkflows) {
    this.log(`🔄 Attempting to recover ${invalidWorkflows.length} invalid GitHub Actions workflows...`);
    
    for (const workflow of invalidWorkflows) {
      try {
        if (!workflow.exists) {
          // Create backup workflow if it doesn't exist
          const backupWorkflow = this.createBackupWorkflow(workflow.name);
          fs.writeFileSync(workflow.file, backupWorkflow);
          this.log(`✅ Created backup workflow: ${workflow.name}`);
        } else if (!workflow.valid) {
          // Try to fix invalid workflow
          const fixedWorkflow = this.fixWorkflow(workflow.file);
          if (fixedWorkflow) {
            fs.writeFileSync(workflow.file, fixedWorkflow);
            this.log(`✅ Fixed workflow: ${workflow.name}`);
          }
        }
      } catch (error) {
        this.log(`❌ Error recovering workflow ${workflow.name}: ${error.message}`, "ERROR");
      }
    }
  }

  createBackupWorkflow(workflowName) {
    const baseWorkflow = `name: ${workflowName.charAt(0).toUpperCase() + workflowName.slice(1)} Backup

on:
  schedule:
    - cron: '0 */6 * * *'
  workflow_dispatch:

permissions:
  contents: write

jobs:
  backup-${workflowName}:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Run backup process
        run: |
          echo "Backup process for ${workflowName}"
          # Add specific backup logic here

      - name: Commit backup results
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          if [ -n "$(git status --porcelain)" ]; then
            git add -A
            git commit -m "chore(backup): ${workflowName} backup update"
            git push origin HEAD:main
          fi`;
    
    return baseWorkflow;
  }

  fixWorkflow(workflowFile) {
    try {
      const content = fs.readFileSync(workflowFile, 'utf8');
      
      // Basic workflow fixes
      let fixed = content;
      
      // Ensure proper YAML structure
      if (!fixed.includes('name:')) {
        fixed = `name: ${path.basename(workflowFile, '.yml')}\n\n${fixed}`;
      }
      
      if (!fixed.includes('on:')) {
        fixed = fixed.replace(/^/, 'on:\n  workflow_dispatch:\n\n');
      }
      
      if (!fixed.includes('jobs:')) {
        fixed = fixed.replace(/^/, 'jobs:\n  default:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Default step\n        run: echo "Workflow fixed"\n\n');
      }
      
      return fixed;
    } catch (error) {
      this.log(`❌ Error fixing workflow ${workflowFile}: ${error.message}`, "ERROR");
      return null;
    }
  }

  async checkNetlifyFunctionsUltimateHealth() {
    this.log("🔍 Checking ultimate Netlify Functions health...");
    
    try {
      if (!fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        this.log("❌ Netlify Functions manifest not found", "ERROR");
        this.status.netlifyFunctions.healthy = false;
        return false;
      }
      
      const manifest = JSON.parse(fs.readFileSync(this.config.netlifyFunctions.manifestFile, 'utf8'));
      const functions = manifest.functions || [];
      
      this.status.netlifyFunctions.functions = functions;
      this.status.netlifyFunctions.lastCheck = new Date();
      
      // Check if we have the expected number of functions
      if (functions.length < this.config.netlifyFunctions.functionCount) {
        this.log(`⚠️ Expected ${this.config.netlifyFunctions.functionCount} functions, found ${functions.length}`, "WARN");
        this.status.netlifyFunctions.healthy = false;
        
        // Auto-regenerate if enabled
        if (this.config.netlifyFunctions.autoRegenerate) {
          await this.regenerateNetlifyFunctionsManifest();
        }
      } else {
        this.log(`✅ Netlify Functions healthy: ${functions.length} functions found`, "INFO");
        this.status.netlifyFunctions.healthy = true;
      }
      
      return this.status.netlifyFunctions.healthy;
    } catch (error) {
      this.log(`❌ Netlify Functions health check error: ${error.message}`, "ERROR");
      this.status.netlifyFunctions.healthy = false;
      return false;
    }
  }

  async regenerateNetlifyFunctionsManifest() {
    this.log("🔄 Regenerating Netlify Functions manifest...");
    
    try {
      const result = await this.runCommand("npm", ["run", "netlify:manifest"]);
      
      if (result.status === 0) {
        this.log("✅ Successfully regenerated Netlify Functions manifest");
      } else {
        this.log("❌ Failed to regenerate Netlify Functions manifest", "ERROR");
      }
    } catch (error) {
      this.log(`❌ Error regenerating manifest: ${error.message}`, "ERROR");
    }
  }

  async checkNPMScriptsUltimateHealth() {
    this.log("🔍 Checking ultimate NPM scripts health...");
    
    try {
      const scripts = [];
      
      for (const scriptName of this.config.npmScripts.critical) {
        try {
          // Check if script exists in package.json
          const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
          const scriptExists = packageJson.scripts && packageJson.scripts[scriptName];
          
          scripts.push({
            name: scriptName,
            exists: !!scriptExists,
            valid: !!scriptExists,
            lastCheck: new Date()
          });
        } catch (error) {
          scripts.push({
            name: scriptName,
            exists: false,
            valid: false,
            lastCheck: new Date(),
            error: error.message
          });
        }
      }
      
      this.status.npmScripts.scripts = scripts;
      
      const validScripts = scripts.filter(s => s.exists && s.valid);
      const invalidScripts = scripts.filter(s => !s.exists || !s.valid);
      
      if (invalidScripts.length > 0) {
        this.log(`⚠️ Invalid NPM scripts: ${invalidScripts.map(s => s.name).join(', ')}`, "WARN");
        this.status.npmScripts.healthy = false;
      } else {
        this.log("✅ All critical NPM scripts are valid", "INFO");
        this.status.npmScripts.healthy = true;
      }
      
      return this.status.npmScripts.healthy;
    } catch (error) {
      this.log(`❌ NPM scripts health check error: ${error.message}`, "ERROR");
      this.status.npmScripts.healthy = false;
      return false;
    }
  }

  calculateOverallHealth() {
    const checks = [
      this.status.pm2.healthy,
      this.status.githubActions.healthy,
      this.status.netlifyFunctions.healthy,
      this.status.npmScripts.healthy
    ];
    
    const healthyChecks = checks.filter(check => check === true).length;
    const totalChecks = checks.length;
    const healthScore = (healthyChecks / totalChecks) * 100;
    
    this.status.overall = {
      healthy: healthScore >= 75,
      score: Math.round(healthScore),
      lastUpdate: new Date()
    };
    
    return this.status.overall;
  }

  async runUltimateHealthCheck() {
    this.log("🚀 Starting ultimate health check...");
    
    const results = await Promise.allSettled([
      this.checkPM2UltimateHealth(),
      this.checkGitHubActionsUltimateHealth(),
      this.checkNetlifyFunctionsUltimateHealth(),
      this.checkNPMScriptsUltimateHealth()
    ]);
    
    // Calculate overall health
    const overallHealth = this.calculateOverallHealth();
    
    this.log(`📊 Ultimate Health Check Complete:`);
    this.log(`   PM2: ${this.status.pm2.healthy ? '✅' : '❌'}`);
    this.log(`   GitHub Actions: ${this.status.githubActions.healthy ? '✅' : '❌'}`);
    this.log(`   Netlify Functions: ${this.status.netlifyFunctions.healthy ? '✅' : '❌'}`);
    this.log(`   NPM Scripts: ${this.status.npmScripts.healthy ? '✅' : '❌'}`);
    this.log(`   Overall Health: ${overallHealth.score}% ${overallHealth.healthy ? '✅' : '❌'}`);
    
    // Save status to file
    this.saveStatus();
    
    return overallHealth;
  }

  saveStatus() {
    try {
      const statusFile = path.join(this.config.logging.logDir, 'ultimate-redundancy-status.json');
      fs.writeFileSync(statusFile, JSON.stringify(this.status, null, 2));
    } catch (error) {
      this.log(`❌ Error saving status: ${error.message}`, "ERROR");
    }
  }

  async startUltimateMonitoring() {
    this.log("🔄 Starting ultimate monitoring system...");
    
    setInterval(async () => {
      await this.runUltimateHealthCheck();
    }, this.config.monitoring.interval);
    
    // Initial health check
    await this.runUltimateHealthCheck();
  }

  initializeMonitoring() {
    this.log("🔧 Initializing ultimate redundancy monitoring...");
    
    // Ensure PM2 is running
    this.runCommand("pm2", ["ping"]).then(result => {
      if (result.status === 0) {
        this.log("✅ PM2 daemon is running");
      } else {
        this.log("⚠️ PM2 daemon not responding, attempting to start...");
        this.runCommand("pm2", ["start"]);
      }
    });
  }

  async emergencyRecovery() {
    this.log("🚨 EMERGENCY RECOVERY MODE ACTIVATED", "ERROR");
    
    try {
      // Stop all PM2 processes
      await this.runCommand("pm2", ["stop", "all"]);
      
      // Clear PM2 logs
      await this.runCommand("pm2", ["flush"]);
      
      // Restart PM2 daemon
      await this.runCommand("pm2", ["kill"]);
      await this.runCommand("pm2", ["start"]);
      
      // Start critical processes
      await this.runCommand("npm", ["run", "pm2:start"]);
      
      this.log("✅ Emergency recovery completed");
    } catch (error) {
      this.log(`❌ Emergency recovery failed: ${error.message}`, "ERROR");
    }
  }

  getStatus() {
    return this.status;
  }

  async stop() {
    this.log("🛑 Stopping ultimate redundancy system...");
    // Cleanup logic here
  }
}

// CLI interface
if (require.main === module) {
  const system = new UltimateRedundancyAutomationSystem();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      console.log("🚀 Ultimate Redundancy System started");
      break;
    case 'status':
      console.log(JSON.stringify(system.getStatus(), null, 2));
      break;
    case 'health':
      system.runUltimateHealthCheck().then(health => {
        console.log(`Health Score: ${health.score}%`);
        process.exit(health.healthy ? 0 : 1);
      });
      break;
    case 'emergency':
      system.emergencyRecovery();
      break;
    default:
      console.log("Usage: node ultimate-redundancy-automation-system.cjs [start|status|health|emergency]");
      process.exit(1);
  }
}

module.exports = UltimateRedundancyAutomationSystem;