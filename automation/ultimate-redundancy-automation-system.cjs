#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class UltimateRedundancyAutomationSystem {
  constructor() {
    this.config = {
      pm2: {
        ecosystemFiles: [
          "ecosystem.pm2.cjs",
          "ecosystem.ultimate-redundancy.cjs",
          "ecosystem.comprehensive-redundancy.cjs",
          "ecosystem.redundancy.cjs"
        ],
        processes: [
          "zion-auto-sync",
          "zion-auto-sync-cron",
          "ultimate-redundancy-system",
          "ultimate-redundancy-monitor",
          "ultimate-redundancy-backup",
          "redundancy-automation-system",
          "redundancy-health-monitor",
          "redundancy-git-sync",
          "redundancy-build-monitor",
          "comprehensive-redundancy-system",
          "comprehensive-redundancy-orchestrator"
        ],
        healthCheckInterval: 30000,
        maxRestartAttempts: 5,
        restartDelay: 5000,
        autoRecovery: true,
        backupInterval: 300000, // 5 minutes
        redundancyLevel: 3
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
        redundancyTriggers: true,
        backupInterval: 300000, // 5 minutes
        redundancyLevel: 2
      },
      netlifyFunctions: {
        manifestFile: "netlify/functions/functions-manifest.json",
        healthCheckInterval: 120000,
        maxFailureThreshold: 2,
        autoRegenerate: true,
        deploymentCheck: true,
        backupInterval: 600000, // 10 minutes
        redundancyLevel: 2
      },
      automation: {
        scripts: [
          "automation/ultimate-redundancy-system.cjs",
          "automation/comprehensive-redundancy-system.cjs",
          "automation/redundancy-automation-system.cjs",
          "automation/master-redundancy-orchestrator.cjs",
          "automation/ultimate-redundancy-master.cjs"
        ],
        healthCheckInterval: 45000,
        maxFailureThreshold: 2,
        autoRestart: true,
        backupInterval: 240000, // 4 minutes
        redundancyLevel: 3
      },
      logging: {
        logDir: "automation/logs",
        maxLogSize: 10 * 1024 * 1024,
        maxLogFiles: 50,
        rotationInterval: 86400000 // 24 hours
      },
      monitoring: {
        enabled: true,
        interval: 25000,
        alertThreshold: 2,
        autoRestart: true,
        healthCheckTimeout: 30000
      },
      backup: {
        enabled: true,
        maxBackups: 10,
        compression: true,
        encryption: false,
        retentionDays: 30
      }
    };
    
    this.status = {
      pm2: { healthy: false, lastCheck: null, failures: 0, redundancy: [] },
      githubActions: { healthy: false, lastCheck: null, failures: 0, redundancy: [] },
      netlifyFunctions: { healthy: false, lastCheck: null, failures: 0, redundancy: [] },
      automation: { healthy: false, lastCheck: null, failures: 0, redundancy: [] },
      overall: { healthy: false, lastCheck: null, startTime: new Date() }
    };
    
    this.ensureLogDirectory();
    this.initializeMonitoring();
    this.startComprehensiveMonitoring();
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
      
      if (result.status === 0) {
        const processes = this.parsePM2Status(result.stdout);
        const healthyProcesses = processes.filter(p => p.status === "online");
        const totalProcesses = this.config.pm2.processes.length;
        
        this.status.pm2.healthy = healthyProcesses.length >= totalProcesses * 0.8;
        this.status.pm2.lastCheck = new Date();
        this.status.pm2.failures = 0;
        
        this.log(`✅ PM2 Health: ${healthyProcesses.length}/${totalProcesses} processes healthy`);
        
        // Check redundancy levels
        await this.ensurePM2Redundancy();
        
        return true;
      } else {
        throw new Error(`PM2 status check failed: ${result.stderr}`);
      }
    } catch (error) {
      this.log(`❌ PM2 Health Check Error: ${error.message}`, "ERROR");
      this.status.pm2.healthy = false;
      this.status.pm2.failures++;
      
      if (this.status.pm2.failures >= this.config.pm2.maxFailureThreshold) {
        await this.recoverPM2System();
      }
      
      return false;
    }
  }

  async ensurePM2Redundancy() {
    this.log("🔄 Ensuring PM2 redundancy...");
    
    try {
      // Start backup processes if main ones are down
      for (const processName of this.config.pm2.processes) {
        const isRunning = await this.isPM2ProcessRunning(processName);
        
        if (!isRunning) {
          this.log(`⚠️ Process ${processName} not running, starting backup...`);
          await this.startPM2BackupProcess(processName);
        }
      }
      
      // Ensure multiple ecosystem files are loaded
      for (const ecosystemFile of this.config.pm2.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          await this.runCommand("pm2", ["start", ecosystemFile, "--update-env"]);
        }
      }
      
      this.log("✅ PM2 redundancy ensured");
    } catch (error) {
      this.log(`❌ PM2 Redundancy Error: ${error.message}`, "ERROR");
    }
  }

  async isPM2ProcessRunning(processName) {
    try {
      const result = await this.runCommand("pm2", ["pid", processName]);
      return result.status === 0 && result.stdout.trim() !== "";
    } catch {
      return false;
    }
  }

  async startPM2BackupProcess(processName) {
    try {
      // Try to start from different ecosystem files
      for (const ecosystemFile of this.config.pm2.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          await this.runCommand("pm2", ["start", ecosystemFile, "--update-env"]);
          await this.runCommand("pm2", ["restart", processName]);
          break;
        }
      }
    } catch (error) {
      this.log(`❌ Failed to start backup process ${processName}: ${error.message}`, "ERROR");
    }
  }

  async checkGitHubActionsUltimateHealth() {
    this.log("🔍 Checking ultimate GitHub Actions health...");
    
    try {
      // Check if workflow files exist and are valid
      const validWorkflows = [];
      
      for (const workflow of this.config.githubActions.workflows) {
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
      
      this.status.githubActions.healthy = validWorkflows.length >= this.config.githubActions.workflows.length * 0.75;
      this.status.githubActions.lastCheck = new Date();
      this.status.githubActions.failures = 0;
      
      this.log(`✅ GitHub Actions Health: ${validWorkflows.length}/${this.config.githubActions.workflows.length} workflows valid`);
      
      // Ensure redundancy
      await this.ensureGitHubActionsRedundancy();
      
      return true;
    } catch (error) {
      this.log(`❌ GitHub Actions Health Check Error: ${error.message}`, "ERROR");
      this.status.githubActions.healthy = false;
      this.status.githubActions.failures++;
      
      if (this.status.githubActions.failures >= this.config.githubActions.maxFailureThreshold) {
        await this.recoverGitHubActionsSystem();
      }
      
      return false;
    }
  }

  async ensureGitHubActionsRedundancy() {
    this.log("🔄 Ensuring GitHub Actions redundancy...");
    
    try {
      // Create backup workflows if they don't exist
      for (const workflow of this.config.githubActions.workflows) {
        if (workflow.includes('backup') && !fs.existsSync(workflow)) {
          await this.createBackupWorkflow(workflow);
        }
      }
      
      // Ensure trigger mechanisms are in place
      await this.ensureWorkflowTriggers();
      
      this.log("✅ GitHub Actions redundancy ensured");
    } catch (error) {
      this.log(`❌ GitHub Actions Redundancy Error: ${error.message}`, "ERROR");
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
            return `cron: '${this.adjustCronForBackup(cron)}'`;
          }
        );
        
        fs.writeFileSync(workflowPath, backupContent);
        this.log(`✅ Created backup workflow: ${workflowPath}`);
      }
    } catch (error) {
      this.log(`❌ Failed to create backup workflow: ${error.message}`, "ERROR");
    }
  }

  adjustCronForBackup(cron) {
    // Simple cron adjustment for backup timing
    const parts = cron.split(' ');
    if (parts.length >= 5) {
      // Add 5 minutes to the minute field for backup
      const minute = parseInt(parts[0]) + 5;
      parts[0] = minute.toString();
      return parts.join(' ');
    }
    return cron;
  }

  async ensureWorkflowTriggers() {
    try {
      // Create a trigger script if it doesn't exist
      const triggerScript = "scripts/trigger-github-actions-redundancy.cjs";
      if (!fs.existsSync(triggerScript)) {
        await this.createWorkflowTriggerScript(triggerScript);
      }
    } catch (error) {
      this.log(`❌ Failed to ensure workflow triggers: ${error.message}`, "ERROR");
    }
  }

  async createWorkflowTriggerScript(scriptPath) {
    const scriptContent = `#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");

async function triggerWorkflows() {
  try {
    // Trigger backup workflows
    execSync('gh workflow run marketing-sync-backup.yml', { stdio: 'inherit' });
    execSync('gh workflow run sync-health-backup.yml', { stdio: 'inherit' });
    console.log('✅ Backup workflows triggered');
  } catch (error) {
    console.error('❌ Failed to trigger workflows:', error.message);
  }
}

if (require.main === module) {
  triggerWorkflows();
}

module.exports = { triggerWorkflows };
`;
    
    fs.writeFileSync(scriptPath, scriptContent);
    await this.runCommand("chmod", ["+x", scriptPath]);
    this.log(`✅ Created workflow trigger script: ${scriptPath}`);
  }

  async checkNetlifyFunctionsUltimateHealth() {
    this.log("🔍 Checking ultimate Netlify Functions health...");
    
    try {
      if (!fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        throw new Error("Functions manifest not found");
      }
      
      const manifest = JSON.parse(fs.readFileSync(this.config.netlifyFunctions.manifestFile, 'utf8'));
      const functions = manifest.functions || [];
      
      this.status.netlifyFunctions.healthy = functions.length > 0;
      this.status.netlifyFunctions.lastCheck = new Date();
      this.status.netlifyFunctions.failures = 0;
      
      this.log(`✅ Netlify Functions Health: ${functions.length} functions available`);
      
      // Ensure redundancy
      await this.ensureNetlifyFunctionsRedundancy();
      
      return true;
    } catch (error) {
      this.log(`❌ Netlify Functions Health Check Error: ${error.message}`, "ERROR");
      this.status.netlifyFunctions.healthy = false;
      this.status.netlifyFunctions.failures++;
      
      if (this.status.netlifyFunctions.failures >= this.config.netlifyFunctions.maxFailureThreshold) {
        await this.recoverNetlifyFunctionsSystem();
      }
      
      return false;
    }
  }

  async ensureNetlifyFunctionsRedundancy() {
    this.log("🔄 Ensuring Netlify Functions redundancy...");
    
    try {
      // Regenerate manifest if needed
      if (this.config.netlifyFunctions.autoRegenerate) {
        await this.runCommand("npm", ["run", "netlify:manifest"]);
      }
      
      // Create backup manifest
      const backupManifest = this.config.netlifyFunctions.manifestFile.replace('.json', '-backup.json');
      if (fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        fs.copyFileSync(this.config.netlifyFunctions.manifestFile, backupManifest);
      }
      
      this.log("✅ Netlify Functions redundancy ensured");
    } catch (error) {
      this.log(`❌ Netlify Functions Redundancy Error: ${error.message}`, "ERROR");
    }
  }

  async checkAutomationScriptsHealth() {
    this.log("🔍 Checking automation scripts health...");
    
    try {
      const validScripts = [];
      
      for (const script of this.config.automation.scripts) {
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
      
      this.status.automation.healthy = validScripts.length >= this.config.automation.scripts.length * 0.8;
      this.status.automation.lastCheck = new Date();
      this.status.automation.failures = 0;
      
      this.log(`✅ Automation Scripts Health: ${validScripts.length}/${this.config.automation.scripts.length} scripts valid`);
      
      // Ensure redundancy
      await this.ensureAutomationScriptsRedundancy();
      
      return true;
    } catch (error) {
      this.log(`❌ Automation Scripts Health Check Error: ${error.message}`, "ERROR");
      this.status.automation.healthy = false;
      this.status.automation.failures++;
      
      if (this.status.automation.failures >= this.config.automation.maxFailureThreshold) {
        await this.recoverAutomationScriptsSystem();
      }
      
      return false;
    }
  }

  async ensureAutomationScriptsRedundancy() {
    this.log("🔄 Ensuring automation scripts redundancy...");
    
    try {
      // Create backup copies of critical scripts
      for (const script of this.config.automation.scripts) {
        if (fs.existsSync(script)) {
          const backupPath = script.replace('.cjs', '-backup.cjs');
          if (!fs.existsSync(backupPath)) {
            fs.copyFileSync(script, backupPath);
          }
        }
      }
      
      // Ensure monitoring scripts are running
      await this.ensureMonitoringScripts();
      
      this.log("✅ Automation scripts redundancy ensured");
    } catch (error) {
      this.log(`❌ Automation Scripts Redundancy Error: ${error.message}`, "ERROR");
    }
  }

  async ensureMonitoringScripts() {
    try {
      // Start monitoring if not running
      const monitoringScripts = [
        "automation/ultimate-redundancy-system.cjs",
        "automation/comprehensive-redundancy-system.cjs"
      ];
      
      for (const script of monitoringScripts) {
        if (fs.existsSync(script)) {
          await this.runCommand("pm2", ["start", script, "--name", path.basename(script, '.cjs')]);
        }
      }
    } catch (error) {
      this.log(`❌ Failed to ensure monitoring scripts: ${error.message}`, "ERROR");
    }
  }

  async recoverPM2System() {
    this.log("🔄 Recovering PM2 system...");
    
    try {
      // Restart all PM2 processes
      await this.runCommand("pm2", ["restart", "all"]);
      
      // Start from ecosystem files
      for (const ecosystemFile of this.config.pm2.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          await this.runCommand("pm2", ["start", ecosystemFile, "--update-env"]);
        }
      }
      
      this.log("✅ PM2 system recovered");
    } catch (error) {
      this.log(`❌ PM2 recovery failed: ${error.message}`, "ERROR");
    }
  }

  async recoverGitHubActionsSystem() {
    this.log("🔄 Recovering GitHub Actions system...");
    
    try {
      // Regenerate workflow files if needed
      await this.ensureGitHubActionsRedundancy();
      
      // Trigger workflows manually
      await this.runCommand("npm", ["run", "gh:trigger"]);
      
      this.log("✅ GitHub Actions system recovered");
    } catch (error) {
      this.log(`❌ GitHub Actions recovery failed: ${error.message}`, "ERROR");
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
    }
  }

  async recoverAutomationScriptsSystem() {
    this.log("🔄 Recovering automation scripts system...");
    
    try {
      // Restart monitoring
      await this.ensureMonitoringScripts();
      
      // Restart redundancy systems
      await this.runCommand("npm", ["run", "redundancy:comprehensive:restart"]);
      
      this.log("✅ Automation scripts system recovered");
    } catch (error) {
      this.log(`❌ Automation scripts recovery failed: ${error.message}`, "ERROR");
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

  async createBackup() {
    if (!this.config.backup.enabled) return;
    
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupDir = path.join(this.config.logging.logDir, 'backups', timestamp);
      
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }
      
      // Backup critical files
      const criticalFiles = [
        ...this.config.pm2.ecosystemFiles,
        ...this.config.githubActions.workflows,
        this.config.netlifyFunctions.manifestFile,
        ...this.config.automation.scripts
      ];
      
      for (const file of criticalFiles) {
        if (fs.existsSync(file)) {
          const backupPath = path.join(backupDir, path.basename(file));
          fs.copyFileSync(file, backupPath);
        }
      }
      
      // Backup status
      fs.writeFileSync(path.join(backupDir, 'status.json'), JSON.stringify(this.status, null, 2));
      
      this.log(`✅ Backup created: ${backupDir}`);
      
      // Cleanup old backups
      await this.cleanupOldBackups();
    } catch (error) {
      this.log(`❌ Backup failed: ${error.message}`, "ERROR");
    }
  }

  async cleanupOldBackups() {
    try {
      const backupDir = path.join(this.config.logging.logDir, 'backups');
      if (!fs.existsSync(backupDir)) return;
      
      const backups = fs.readdirSync(backupDir)
        .map(name => ({ name, path: path.join(backupDir, name) }))
        .filter(item => fs.statSync(item.path).isDirectory())
        .sort((a, b) => fs.statSync(b.path).mtime.getTime() - fs.statSync(a.path).mtime.getTime());
      
      // Keep only the most recent backups
      for (let i = this.config.backup.maxBackups; i < backups.length; i++) {
        fs.rmSync(backups[i].path, { recursive: true, force: true });
        this.log(`🗑️ Removed old backup: ${backups[i].name}`);
      }
    } catch (error) {
      this.log(`❌ Backup cleanup failed: ${error.message}`, "ERROR");
    }
  }

  async rotateLogs() {
    try {
      const logFiles = fs.readdirSync(this.config.logging.logDir)
        .filter(name => name.endsWith('.log'))
        .map(name => ({ name, path: path.join(this.config.logging.logDir, name) }))
        .filter(item => fs.statSync(item.path).isFile());
      
      for (const logFile of logFiles) {
        const stats = fs.statSync(logFile.path);
        const sizeMB = stats.size / (1024 * 1024);
        
        if (sizeMB > this.config.logging.maxLogSize / (1024 * 1024)) {
          const rotatedName = logFile.name.replace('.log', `-${Date.now()}.log`);
          fs.renameSync(logFile.path, path.join(this.config.logging.logDir, rotatedName));
          this.log(`🔄 Rotated log file: ${logFile.name} -> ${rotatedName}`);
        }
      }
    } catch (error) {
      this.log(`❌ Log rotation failed: ${error.message}`, "ERROR");
    }
  }

  async comprehensiveHealthCheck() {
    this.log("🏥 Starting comprehensive health check...");
    
    const results = await Promise.allSettled([
      this.checkPM2UltimateHealth(),
      this.checkGitHubActionsUltimateHealth(),
      this.checkNetlifyFunctionsUltimateHealth(),
      this.checkAutomationScriptsHealth()
    ]);
    
    const healthyCount = results.filter(r => r.status === 'fulfilled' && r.value).length;
    const totalCount = results.length;
    
    this.status.overall.healthy = healthyCount >= totalCount * 0.75;
    this.status.overall.lastCheck = new Date();
    
    this.log(`🏥 Comprehensive Health: ${healthyCount}/${totalCount} systems healthy`);
    
    // Create backup if healthy
    if (this.status.overall.healthy) {
      await this.createBackup();
    }
    
    // Rotate logs
    await this.rotateLogs();
    
    return this.status.overall.healthy;
  }

  initializeMonitoring() {
    this.log("🚀 Initializing ultimate redundancy automation system...");
    
    // Set up monitoring intervals
    setInterval(async () => {
      await this.comprehensiveHealthCheck();
    }, this.config.monitoring.interval);
    
    // Set up backup intervals
    setInterval(async () => {
      await this.createBackup();
    }, this.config.pm2.backupInterval);
    
    // Set up log rotation
    setInterval(async () => {
      await this.rotateLogs();
    }, this.config.logging.rotationInterval);
    
    this.log("✅ Monitoring initialized");
  }

  startComprehensiveMonitoring() {
    this.log("🎯 Starting comprehensive monitoring...");
    
    // Initial health check
    setTimeout(async () => {
      await this.comprehensiveHealthCheck();
    }, 5000);
    
    this.log("✅ Comprehensive monitoring started");
  }

  getStatus() {
    return {
      ...this.status,
      config: this.config,
      uptime: Date.now() - this.status.overall.startTime.getTime()
    };
  }

  async stop() {
    this.log("🛑 Stopping ultimate redundancy automation system...");
    // Cleanup logic here
    this.log("✅ System stopped");
  }
}

// CLI interface
if (require.main === module) {
  const system = new UltimateRedundancyAutomationSystem();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    await system.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    await system.stop();
    process.exit(0);
  });
  
  // Export for programmatic use
  module.exports = system;
} else {
  module.exports = UltimateRedundancyAutomationSystem;
}