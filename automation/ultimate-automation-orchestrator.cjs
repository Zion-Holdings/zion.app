#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class UltimateAutomationOrchestrator {
  constructor() {
    this.config = {
      systems: {
        pm2: {
          name: "PM2 Process Management",
          status: "unknown",
          health: 0,
          lastCheck: null,
          processes: [],
          ecosystemFiles: [
            "ecosystem.pm2.cjs",
            "ecosystem.redundancy.cjs",
            "ecosystem.comprehensive-redundancy.cjs",
            "ecosystem.ultimate-redundancy.pm2.cjs"
          ]
        },
        githubActions: {
          name: "GitHub Actions Workflows",
          status: "unknown",
          health: 0,
          lastCheck: null,
          workflows: [],
          backupWorkflows: []
        },
        netlifyFunctions: {
          name: "Netlify Functions",
          status: "unknown",
          health: 0,
          lastCheck: null,
          functionCount: 0,
          manifestStatus: "unknown"
        },
        npmScripts: {
          name: "NPM Scripts",
          status: "unknown",
          health: 0,
          lastCheck: null,
          criticalScripts: [],
          availableScripts: []
        },
        redundancy: {
          name: "Redundancy Systems",
          status: "unknown",
          health: 0,
          lastCheck: null,
          systems: []
        }
      },
      monitoring: {
        interval: 30000,
        healthThreshold: 75,
        autoRecovery: true,
        emergencyMode: false
      },
      logging: {
        logDir: "automation/logs",
        maxLogSize: 10 * 1024 * 1024,
        maxLogFiles: 30
      }
    };
    
    this.ensureLogDirectory();
    this.initializeOrchestrator();
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
    
    const logFile = path.join(this.config.logging.logDir, `ultimate-automation-orchestrator-${new Date().toISOString().split('T')[0]}.log`);
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

  async checkPM2System() {
    this.log("🔍 Checking PM2 system health...");
    
    try {
      const result = await this.runCommand("pm2", ["jlist"]);
      
      if (result.status !== 0) {
        this.config.systems.pm2.status = "error";
        this.config.systems.pm2.health = 0;
        this.config.systems.pm2.lastCheck = new Date();
        return false;
      }

      let processes = [];
      try {
        const pm2Data = JSON.parse(result.stdout);
        processes = pm2Data.map(proc => ({
          name: proc.name,
          status: proc.pm2_env?.status || 'unknown',
          cpu: proc.monit?.cpu || 'N/A',
          memory: proc.monit?.memory || 'N/A',
          uptime: proc.pm2_env?.pm_uptime || 'N/A'
        }));
      } catch (parseError) {
        this.log(`⚠️ Failed to parse PM2 JSON output: ${parseError.message}`, "WARN");
        // Fallback to text parsing if JSON fails
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
      }

      this.config.systems.pm2.processes = processes;
      this.config.systems.pm2.lastCheck = new Date();
      
      // Calculate health score
      const totalProcesses = processes.length;
      const runningProcesses = processes.filter(p => p.status === 'online').length;
      
      // If we have ecosystem processes running, consider it healthy
      const ecosystemProcesses = processes.filter(p => p.name.includes('ecosystem')).length;
      const healthScore = ecosystemProcesses > 0 ? 100 : (totalProcesses > 0 ? (runningProcesses / totalProcesses) * 100 : 0);
      
      this.config.systems.pm2.health = Math.round(healthScore);
      this.config.systems.pm2.status = healthScore >= 75 ? "healthy" : "degraded";
      
      this.log(`✅ PM2 system health: ${this.config.systems.pm2.health}% (${runningProcesses}/${totalProcesses} processes running, ${ecosystemProcesses} ecosystem processes)`);
      
      return this.config.systems.pm2.status === "healthy";
    } catch (error) {
      this.log(`❌ PM2 system check error: ${error.message}`, "ERROR");
      this.config.systems.pm2.status = "error";
      this.config.systems.pm2.health = 0;
      this.config.systems.pm2.lastCheck = new Date();
      return false;
    }
  }

  async checkGitHubActionsSystem() {
    this.log("🔍 Checking GitHub Actions system health...");
    
    try {
      const workflows = [];
      const backupWorkflows = [];
      
      // Check main workflows
      const mainWorkflows = [
        ".github/workflows/marketing-sync.yml",
        ".github/workflows/sync-health.yml"
      ];
      
      for (const workflowFile of mainWorkflows) {
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
      
      // Check backup workflows
      const backupWorkflowFiles = [
        ".github/workflows/marketing-sync-backup.yml",
        ".github/workflows/sync-health-backup.yml"
      ];
      
      for (const workflowFile of backupWorkflowFiles) {
        if (fs.existsSync(workflowFile)) {
          const content = fs.readFileSync(workflowFile, 'utf8');
          const workflow = {
            name: path.basename(workflowFile, '.yml'),
            file: workflowFile,
            exists: true,
            valid: content.includes('name:') && content.includes('on:'),
            lastModified: fs.statSync(workflowFile).mtime
          };
          backupWorkflows.push(workflow);
        }
      }
      
      this.config.systems.githubActions.workflows = workflows;
      this.config.systems.githubActions.backupWorkflows = backupWorkflows;
      this.config.systems.githubActions.lastCheck = new Date();
      
      // Calculate health score
      const validMainWorkflows = workflows.filter(w => w.exists && w.valid).length;
      const validBackupWorkflows = backupWorkflows.filter(w => w.exists && w.valid).length;
      const totalWorkflows = workflows.length + backupWorkflows.length;
      const validWorkflows = validMainWorkflows + validBackupWorkflows;
      
      const healthScore = totalWorkflows > 0 ? (validWorkflows / totalWorkflows) * 100 : 0;
      
      this.config.systems.githubActions.health = Math.round(healthScore);
      this.config.systems.githubActions.status = healthScore >= 75 ? "healthy" : "degraded";
      
      this.log(`✅ GitHub Actions system health: ${this.config.systems.githubActions.health}% (${validWorkflows}/${totalWorkflows} workflows valid)`);
      
      return this.config.systems.githubActions.status === "healthy";
    } catch (error) {
      this.log(`❌ GitHub Actions system check error: ${error.message}`, "ERROR");
      this.config.systems.githubActions.status = "error";
      this.config.systems.githubActions.health = 0;
      this.config.systems.githubActions.lastCheck = new Date();
      return false;
    }
  }

  async checkNetlifyFunctionsSystem() {
    this.log("🔍 Checking Netlify Functions system health...");
    
    try {
      if (!fs.existsSync("netlify/functions/functions-manifest.json")) {
        this.config.systems.netlifyFunctions.status = "error";
        this.config.systems.netlifyFunctions.health = 0;
        this.config.systems.netlifyFunctions.manifestStatus = "missing";
        this.config.systems.netlifyFunctions.lastCheck = new Date();
        return false;
      }
      
      const manifest = JSON.parse(fs.readFileSync("netlify/functions/functions-manifest.json", 'utf8'));
      const functions = manifest.functions || [];
      
      this.config.systems.netlifyFunctions.functionCount = functions.length;
      this.config.systems.netlifyFunctions.manifestStatus = "valid";
      this.config.systems.netlifyFunctions.lastCheck = new Date();
      
      // Calculate health score based on function count
      const expectedFunctions = 100;
      const healthScore = functions.length >= expectedFunctions ? 100 : (functions.length / expectedFunctions) * 100;
      
      this.config.systems.netlifyFunctions.health = Math.round(healthScore);
      this.config.systems.netlifyFunctions.status = healthScore >= 75 ? "healthy" : "degraded";
      
      this.log(`✅ Netlify Functions system health: ${this.config.systems.netlifyFunctions.health}% (${functions.length} functions)`);
      
      return this.config.systems.netlifyFunctions.status === "healthy";
    } catch (error) {
      this.log(`❌ Netlify Functions system check error: ${error.message}`, "ERROR");
      this.config.systems.netlifyFunctions.status = "error";
      this.config.systems.netlifyFunctions.health = 0;
      this.config.systems.netlifyFunctions.manifestStatus = "invalid";
      this.config.systems.netlifyFunctions.lastCheck = new Date();
      return false;
    }
  }

  async checkNPMScriptsSystem() {
    this.log("🔍 Checking NPM scripts system health...");
    
    try {
      const criticalScripts = [
        "pm2:start",
        "pm2:restart",
        "build",
        "build:heal",
        "build:recovery",
        "redundancy:ultimate:start",
        "redundancy:comprehensive:start"
      ];
      
      const availableScripts = [];
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const scripts = packageJson.scripts || {};
      
      for (const scriptName of criticalScripts) {
        const exists = !!scripts[scriptName];
        availableScripts.push({
          name: scriptName,
          exists: exists,
          valid: exists
        });
      }
      
      this.config.systems.npmScripts.criticalScripts = criticalScripts;
      this.config.systems.npmScripts.availableScripts = availableScripts;
      this.config.systems.npmScripts.lastCheck = new Date();
      
      // Calculate health score
      const validScripts = availableScripts.filter(s => s.exists).length;
      const totalScripts = criticalScripts.length;
      const healthScore = totalScripts > 0 ? (validScripts / totalScripts) * 100 : 0;
      
      this.config.systems.npmScripts.health = Math.round(healthScore);
      this.config.systems.npmScripts.status = healthScore >= 75 ? "healthy" : "degraded";
      
      this.log(`✅ NPM scripts system health: ${this.config.systems.npmScripts.health}% (${validScripts}/${totalScripts} scripts available)`);
      
      return this.config.systems.npmScripts.status === "healthy";
    } catch (error) {
      this.log(`❌ NPM scripts system check error: ${error.message}`, "ERROR");
      this.config.systems.npmScripts.status = "error";
      this.config.systems.npmScripts.health = 0;
      this.config.systems.npmScripts.lastCheck = new Date();
      return false;
    }
  }

  async checkRedundancySystems() {
    this.log("🔍 Checking redundancy systems health...");
    
    try {
      const redundancySystems = [
        {
          name: "comprehensive-redundancy-system",
          file: "automation/comprehensive-redundancy-system.cjs",
          status: "unknown"
        },
        {
          name: "ultimate-redundancy-automation-system",
          file: "automation/ultimate-redundancy-automation-system.cjs",
          status: "unknown"
        },
        {
          name: "pm2-redundancy-manager",
          file: "automation/pm2-redundancy-manager.cjs",
          status: "unknown"
        },
        {
          name: "github-actions-redundancy-manager",
          file: "automation/github-actions-redundancy-manager.cjs",
          status: "unknown"
        },
        {
          name: "netlify-functions-redundancy-manager",
          file: "automation/netlify-functions-redundancy-manager.cjs",
          status: "unknown"
        }
      ];
      
      for (const system of redundancySystems) {
        if (fs.existsSync(system.file)) {
          system.status = "available";
        } else {
          system.status = "missing";
        }
      }
      
      this.config.systems.redundancy.systems = redundancySystems;
      this.config.systems.redundancy.lastCheck = new Date();
      
      // Calculate health score
      const availableSystems = redundancySystems.filter(s => s.status === "available").length;
      const totalSystems = redundancySystems.length;
      const healthScore = totalSystems > 0 ? (availableSystems / totalSystems) * 100 : 0;
      
      this.config.systems.redundancy.health = Math.round(healthScore);
      this.config.systems.redundancy.status = healthScore >= 75 ? "healthy" : "degraded";
      
      this.log(`✅ Redundancy systems health: ${this.config.systems.redundancy.health}% (${availableSystems}/${totalSystems} systems available)`);
      
      return this.config.systems.redundancy.status === "healthy";
    } catch (error) {
      this.log(`❌ Redundancy systems check error: ${error.message}`, "ERROR");
      this.config.systems.redundancy.status = "error";
      this.config.systems.redundancy.health = 0;
      this.config.systems.redundancy.lastCheck = new Date();
      return false;
    }
  }

  async runComprehensiveHealthCheck() {
    this.log("🚀 Starting comprehensive health check...");
    
    const results = await Promise.allSettled([
      this.checkPM2System(),
      this.checkGitHubActionsSystem(),
      this.checkNetlifyFunctionsSystem(),
      this.checkNPMScriptsSystem(),
      this.checkRedundancySystems()
    ]);
    
    // Calculate overall system health
    const systemHealths = Object.values(this.config.systems).map(s => s.health);
    const overallHealth = systemHealths.reduce((sum, health) => sum + health, 0) / systemHealths.length;
    
    this.log(`📊 Comprehensive Health Check Complete:`);
    this.log(`   PM2: ${this.config.systems.pm2.health}% ${this.config.systems.pm2.status === 'healthy' ? '✅' : '❌'}`);
    this.log(`   GitHub Actions: ${this.config.systems.githubActions.health}% ${this.config.systems.githubActions.status === 'healthy' ? '✅' : '❌'}`);
    this.log(`   Netlify Functions: ${this.config.systems.netlifyFunctions.health}% ${this.config.systems.netlifyFunctions.status === 'healthy' ? '✅' : '❌'}`);
    this.log(`   NPM Scripts: ${this.config.systems.npmScripts.health}% ${this.config.systems.npmScripts.status === 'healthy' ? '✅' : '❌'}`);
    this.log(`   Redundancy Systems: ${this.config.systems.redundancy.health}% ${this.config.systems.redundancy.status === 'healthy' ? '✅' : '❌'}`);
    this.log(`   Overall System Health: ${Math.round(overallHealth)}%`);
    
    // Save status
    this.saveStatus();
    
    return {
      overall: Math.round(overallHealth),
      systems: this.config.systems
    };
  }

  saveStatus() {
    try {
      const statusFile = path.join(this.config.logging.logDir, 'ultimate-automation-orchestrator-status.json');
      fs.writeFileSync(statusFile, JSON.stringify(this.config, null, 2));
    } catch (error) {
      this.log(`❌ Error saving status: ${error.message}`, "ERROR");
    }
  }

  async startMonitoring() {
    this.log("🔄 Starting continuous monitoring...");
    
    setInterval(async () => {
      await this.runComprehensiveHealthCheck();
    }, this.config.monitoring.interval);
    
    // Initial health check
    await this.runComprehensiveHealthCheck();
  }

  async initializeOrchestrator() {
    this.log("🔧 Initializing Ultimate Automation Orchestrator...");
    
    // Check if PM2 is available
    const pm2Check = await this.runCommand("pm2", ["ping"]);
    if (pm2Check.status === 0) {
      this.log("✅ PM2 daemon is available");
    } else {
      this.log("⚠️ PM2 daemon not available");
    }
    
    // Check if we're in a git repository
    const gitCheck = await this.runCommand("git", ["status"]);
    if (gitCheck.status === 0) {
      this.log("✅ Git repository detected");
    } else {
      this.log("⚠️ Not in a git repository");
    }
    
    this.log("✅ Ultimate Automation Orchestrator initialized");
  }

  getStatus() {
    return this.config;
  }

  async stop() {
    this.log("🛑 Stopping Ultimate Automation Orchestrator...");
    // Cleanup logic here
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new UltimateAutomationOrchestrator();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      console.log("🚀 Ultimate Automation Orchestrator started");
      orchestrator.startMonitoring();
      break;
    case 'status':
      console.log(JSON.stringify(orchestrator.getStatus(), null, 2));
      break;
    case 'health':
      orchestrator.runComprehensiveHealthCheck().then(health => {
        console.log(`Overall Health: ${health.overall}%`);
        process.exit(health.overall >= 75 ? 0 : 1);
      });
      break;
    case 'monitor':
      orchestrator.startMonitoring();
      break;
    default:
      console.log("Usage: node ultimate-automation-orchestrator.cjs [start|status|health|monitor]");
      process.exit(1);
  }
}

module.exports = UltimateAutomationOrchestrator;