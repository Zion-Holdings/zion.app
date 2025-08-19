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
          ecosystemFiles: [
            "ecosystem.pm2.cjs",
            "ecosystem.ultimate-redundancy.cjs",
            "ecosystem.comprehensive-redundancy.cjs",
            "ecosystem.ultimate-redundancy-automation.cjs"
          ],
          healthCheck: "pm2 status --no-daemon",
          startCommand: "pm2 start",
          stopCommand: "pm2 stop",
          restartCommand: "pm2 restart"
        },
        githubActions: {
          name: "GitHub Actions Workflows",
          workflows: [
            ".github/workflows/marketing-sync.yml",
            ".github/workflows/sync-health.yml",
            ".github/workflows/marketing-sync-backup.yml",
            ".github/workflows/sync-health-backup.yml"
          ],
          healthCheck: "gh workflow list",
          triggerCommand: "gh workflow run"
        },
        netlifyFunctions: {
          name: "Netlify Functions",
          manifestFile: "netlify/functions/functions-manifest.json",
          healthCheck: "npm run netlify:manifest",
          deployCommand: "npm run netlify:trigger"
        },
        automation: {
          name: "Automation Scripts",
          scripts: [
            "automation/ultimate-redundancy-automation-system.cjs",
            "automation/comprehensive-redundancy-system.cjs",
            "automation/redundancy-automation-system.cjs",
            "automation/master-redundancy-orchestrator.cjs"
          ],
          healthCheck: "node -e \"console.log('Automation scripts check')\"",
          startCommand: "node"
        }
      },
      monitoring: {
        interval: 30000,
        healthCheckTimeout: 30000,
        maxFailures: 3,
        autoRecovery: true
      },
      logging: {
        logDir: "automation/logs",
        maxLogSize: 10 * 1024 * 1024,
        rotationInterval: 86400000
      }
    };
    
    this.status = {
      systems: {},
      overall: { healthy: false, lastCheck: null, startTime: new Date() },
      failures: {},
      recovery: { enabled: true, attempts: 0, maxAttempts: 5 }
    };
    
    this.ensureLogDirectory();
    this.initializeSystems();
    this.startMonitoring();
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

  initializeSystems() {
    this.log("🚀 Initializing Ultimate Automation Orchestrator...");
    
    // Initialize status for each system
    for (const [key, system] of Object.entries(this.config.systems)) {
      this.status.systems[key] = {
        healthy: false,
        lastCheck: null,
        failures: 0,
        lastFailure: null,
        uptime: 0
      };
      this.failures[key] = [];
    }
    
    this.log("✅ Systems initialized");
  }

  async checkPM2Health() {
    this.log("🔍 Checking PM2 system health...");
    
    try {
      const result = await this.runCommand("pm2", ["status", "--no-daemon"]);
      
      if (result.status === 0) {
        const processes = this.parsePM2Status(result.stdout);
        const totalProcesses = processes.length;
        const healthyProcesses = processes.filter(p => p.status === "online").length;
        
        const health = healthyProcesses / totalProcesses >= 0.8;
        this.updateSystemStatus("pm2", health, {
          totalProcesses,
          healthyProcesses,
          processes
        });
        
        this.log(`✅ PM2 Health: ${healthyProcesses}/${totalProcesses} processes healthy`);
        return health;
      } else {
        throw new Error(`PM2 status check failed: ${result.stderr}`);
      }
    } catch (error) {
      this.log(`❌ PM2 Health Check Error: ${error.message}`, "ERROR");
      this.updateSystemStatus("pm2", false, { error: error.message });
      return false;
    }
  }

  async checkGitHubActionsHealth() {
    this.log("🔍 Checking GitHub Actions system health...");
    
    try {
      // Check if workflow files exist and are valid
      const validWorkflows = [];
      
      for (const workflow of this.config.systems.githubActions.workflows) {
        if (fs.existsSync(workflow)) {
          try {
            const content = fs.readFileSync(workflow, 'utf8');
            if (content.includes('name:') && content.includes('on:')) {
              validWorkflows.push(workflow);
            }
          } catch (error) {
            this.log(`⚠️ Invalid workflow file: ${workflow}`, "WARN");
          }
        }
      }
      
      const health = validWorkflows.length >= this.config.systems.githubActions.workflows.length * 0.75;
      this.updateSystemStatus("githubActions", health, {
        totalWorkflows: this.config.systems.githubActions.workflows.length,
        validWorkflows: validWorkflows.length,
        workflows: validWorkflows
      });
      
      this.log(`✅ GitHub Actions Health: ${validWorkflows.length}/${this.config.systems.githubActions.workflows.length} workflows valid`);
      return health;
    } catch (error) {
      this.log(`❌ GitHub Actions Health Check Error: ${error.message}`, "ERROR");
      this.updateSystemStatus("githubActions", false, { error: error.message });
      return false;
    }
  }

  async checkNetlifyFunctionsHealth() {
    this.log("🔍 Checking Netlify Functions system health...");
    
    try {
      if (!fs.existsSync(this.config.systems.netlifyFunctions.manifestFile)) {
        throw new Error("Functions manifest not found");
      }
      
      const manifest = JSON.parse(fs.readFileSync(this.config.systems.netlifyFunctions.manifestFile, 'utf8'));
      const functions = manifest.functions || [];
      
      const health = functions.length > 0;
      this.updateSystemStatus("netlifyFunctions", health, {
        totalFunctions: functions.length,
        functions: functions.slice(0, 10) // Show first 10 functions
      });
      
      this.log(`✅ Netlify Functions Health: ${functions.length} functions available`);
      return health;
    } catch (error) {
      this.log(`❌ Netlify Functions Health Check Error: ${error.message}`, "ERROR");
      this.updateSystemStatus("netlifyFunctions", false, { error: error.message });
      return false;
    }
  }

  async checkAutomationScriptsHealth() {
    this.log("🔍 Checking automation scripts system health...");
    
    try {
      const validScripts = [];
      
      for (const script of this.config.systems.automation.scripts) {
        if (fs.existsSync(script)) {
          try {
            const content = fs.readFileSync(script, 'utf8');
            if (content.includes('class') || content.includes('function')) {
              validScripts.push(script);
            }
          } catch (error) {
            this.log(`⚠️ Invalid script file: ${script}`, "WARN");
          }
        }
      }
      
      const health = validScripts.length >= this.config.systems.automation.scripts.length * 0.8;
      this.updateSystemStatus("automation", health, {
        totalScripts: this.config.systems.automation.scripts.length,
        validScripts: validScripts.length,
        scripts: validScripts
      });
      
      this.log(`✅ Automation Scripts Health: ${validScripts.length}/${this.config.systems.automation.scripts.length} scripts valid`);
      return health;
    } catch (error) {
      this.log(`❌ Automation Scripts Health Check Error: ${error.message}`, "ERROR");
      this.updateSystemStatus("automation", false, { error: error.message });
      return false;
    }
  }

  updateSystemStatus(systemKey, healthy, details = {}) {
    const system = this.status.systems[systemKey];
    const wasHealthy = system.healthy;
    
    system.healthy = healthy;
    system.lastCheck = new Date();
    
    if (!healthy && wasHealthy) {
      system.failures++;
      system.lastFailure = new Date();
      this.failures[systemKey].push({
        timestamp: new Date(),
        details
      });
      
      // Keep only recent failures
      if (this.failures[systemKey].length > 10) {
        this.failures[systemKey] = this.failures[systemKey].slice(-10);
      }
      
      this.log(`⚠️ System ${systemKey} became unhealthy`, "WARN");
      
      // Trigger recovery if enabled
      if (this.config.monitoring.autoRecovery && system.failures <= this.config.monitoring.maxFailures) {
        this.triggerRecovery(systemKey);
      }
    } else if (healthy && !wasHealthy) {
      this.log(`✅ System ${systemKey} recovered`, "INFO");
    }
    
    // Update uptime
    if (healthy) {
      system.uptime = Date.now() - (system.lastFailure ? system.lastFailure.getTime() : system.lastCheck.getTime());
    }
    
    // Add details to status
    Object.assign(system, details);
  }

  async triggerRecovery(systemKey) {
    if (!this.status.recovery.enabled || this.status.recovery.attempts >= this.status.recovery.maxAttempts) {
      this.log(`❌ Recovery disabled or max attempts reached for ${systemKey}`, "ERROR");
      return;
    }
    
    this.log(`🔄 Triggering recovery for ${systemKey}...`);
    this.status.recovery.attempts++;
    
    try {
      switch (systemKey) {
        case "pm2":
          await this.recoverPM2System();
          break;
        case "githubActions":
          await this.recoverGitHubActionsSystem();
          break;
        case "netlifyFunctions":
          await this.recoverNetlifyFunctionsSystem();
          break;
        case "automation":
          await this.recoverAutomationScriptsSystem();
          break;
        default:
          this.log(`⚠️ Unknown system for recovery: ${systemKey}`, "WARN");
      }
      
      this.log(`✅ Recovery completed for ${systemKey}`);
    } catch (error) {
      this.log(`❌ Recovery failed for ${systemKey}: ${error.message}`, "ERROR");
    }
  }

  async recoverPM2System() {
    this.log("🔄 Recovering PM2 system...");
    
    try {
      // Restart all PM2 processes
      await this.runCommand("pm2", ["restart", "all"]);
      
      // Start from ecosystem files
      for (const ecosystemFile of this.config.systems.pm2.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          await this.runCommand("pm2", ["start", ecosystemFile, "--update-env"]);
        }
      }
      
      this.log("✅ PM2 system recovered");
    } catch (error) {
      this.log(`❌ PM2 recovery failed: ${error.message}`, "ERROR");
      throw error;
    }
  }

  async recoverGitHubActionsSystem() {
    this.log("🔄 Recovering GitHub Actions system...");
    
    try {
      // Regenerate workflow files if needed
      for (const workflow of this.config.systems.githubActions.workflows) {
        if (workflow.includes('backup') && !fs.existsSync(workflow)) {
          await this.createBackupWorkflow(workflow);
        }
      }
      
      // Trigger workflows manually
      await this.runCommand("npm", ["run", "gh:trigger"]);
      
      this.log("✅ GitHub Actions system recovered");
    } catch (error) {
      this.log(`❌ GitHub Actions recovery failed: ${error.message}`, "ERROR");
      throw error;
    }
  }

  async recoverNetlifyFunctionsSystem() {
    this.log("🔄 Recovering Netlify Functions system...");
    
    try {
      // Regenerate manifest
      await this.runCommand("npm", ["run", "netlify:manifest"]);
      
      // Trigger deployment
      await this.runCommand("npm", ["run", "netlify:trigger"]);
      
      this.log("✅ Netlify Functions system recovered");
    } catch (error) {
      this.log(`❌ Netlify Functions recovery failed: ${error.message}`, "ERROR");
      throw error;
    }
  }

  async recoverAutomationScriptsSystem() {
    this.log("🔄 Recovering automation scripts system...");
    
    try {
      // Restart monitoring
      await this.runCommand("npm", ["run", "redundancy:comprehensive:restart"]);
      
      // Restart redundancy systems
      await this.runCommand("npm", ["run", "redundancy:ultimate:restart"]);
      
      this.log("✅ Automation scripts system recovered");
    } catch (error) {
      this.log(`❌ Automation scripts recovery failed: ${error.message}`, "ERROR");
      throw error;
    }
  }

  async createBackupWorkflow(workflowPath) {
    try {
      const baseWorkflow = workflowPath.replace('-backup.yml', '.yml');
      if (fs.existsSync(baseWorkflow)) {
        const content = fs.readFileSync(baseWorkflow, 'utf8');
        const backupContent = content.replace(
          /cron: '([^']+)'/g,
          (match, cron) => {
            // Adjust cron timing for backup
            const parts = cron.split(' ');
            if (parts.length >= 5) {
              const minute = parseInt(parts[0]) + 5;
              parts[0] = minute.toString();
              return `cron: '${parts.join(' ')}'`;
            }
            return match;
          }
        );
        
        fs.writeFileSync(workflowPath, backupContent);
        this.log(`✅ Created backup workflow: ${workflowPath}`);
      }
    } catch (error) {
      this.log(`❌ Failed to create backup workflow: ${error.message}`, "ERROR");
    }
  }

  parsePM2Status(statusOutput) {
    const lines = statusOutput.split('\n');
    const processes = [];
    
    for (const line of lines) {
      if (line.includes('│') && !line.includes('App name')) {
        const parts = line.split('│').map(p => p.trim()).filter(p => p);
        if (parts.length >= 4) {
          processes.push({
            name: parts[0],
            status: parts[1],
            cpu: parts[2],
            memory: parts[3]
          });
        }
      }
    }
    
    return processes;
  }

  async comprehensiveHealthCheck() {
    this.log("🏥 Starting comprehensive health check...");
    
    const results = await Promise.allSettled([
      this.checkPM2Health(),
      this.checkGitHubActionsHealth(),
      this.checkNetlifyFunctionsHealth(),
      this.checkAutomationScriptsHealth()
    ]);
    
    const healthyCount = results.filter(r => r.status === 'fulfilled' && r.value).length;
    const totalCount = results.length;
    
    this.status.overall.healthy = healthyCount >= totalCount * 0.75;
    this.status.overall.lastCheck = new Date();
    
    this.log(`🏥 Comprehensive Health: ${healthyCount}/${totalCount} systems healthy`);
    
    // Reset recovery attempts if overall health is good
    if (this.status.overall.healthy) {
      this.status.recovery.attempts = 0;
    }
    
    return this.status.overall.healthy;
  }

  startMonitoring() {
    this.log("🎯 Starting monitoring...");
    
    // Set up monitoring intervals
    setInterval(async () => {
      await this.comprehensiveHealthCheck();
    }, this.config.monitoring.interval);
    
    // Initial health check
    setTimeout(async () => {
      await this.comprehensiveHealthCheck();
    }, 5000);
    
    this.log("✅ Monitoring started");
  }

  getStatus() {
    return {
      ...this.status,
      config: this.config,
      uptime: Date.now() - this.status.overall.startTime.getTime()
    };
  }

  async stop() {
    this.log("🛑 Stopping Ultimate Automation Orchestrator...");
    // Cleanup logic here
    this.log("✅ System stopped");
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new UltimateAutomationOrchestrator();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    await orchestrator.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    await orchestrator.stop();
    process.exit(0);
  });
  
  // Export for programmatic use
  module.exports = orchestrator;
} else {
  module.exports = UltimateAutomationOrchestrator;
}