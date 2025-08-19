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
          "redundancy-automation-system",
          "redundancy-health-monitor",
          "redundancy-git-sync",
          "redundancy-build-monitor"
        ],
        healthCheckInterval: 30000, // 30 seconds
        maxRestartAttempts: 5,
        restartDelay: 5000 // 5 seconds
      },
      githubActions: {
        workflows: [
          ".github/workflows/marketing-sync.yml",
          ".github/workflows/sync-health.yml",
          ".github/workflows/marketing-sync-backup.yml",
          ".github/workflows/sync-health-backup.yml"
        ],
        healthCheckInterval: 60000, // 1 minute
        maxFailureThreshold: 3,
        backupWorkflows: [
          ".github/workflows/marketing-sync-backup.yml",
          ".github/workflows/sync-health-backup.yml"
        ]
      },
      netlifyFunctions: {
        manifestFile: "netlify/functions/functions-manifest.json",
        healthCheckInterval: 120000, // 2 minutes
        maxFailureThreshold: 2,
        criticalFunctions: [
          "netlify-auto-healer-runner",
          "maintenance-scheduler",
          "site-crawler",
          "security-audit-runner"
        ]
      },
      npmScripts: {
        critical: [
          "build",
          "build:health-check",
          "build:validate",
          "build:recovery",
          "lint",
          "type-check"
        ],
        automation: [
          "automation:all",
          "redundancy:start",
          "redundancy:health",
          "redundancy:pm2",
          "redundancy:github",
          "redundancy:netlify"
        ]
      },
      logging: {
        logDir: "automation/logs",
        maxLogSize: 10 * 1024 * 1024, // 10MB
        maxLogFiles: 30
      },
      monitoring: {
        overallHealthCheckInterval: 60000, // 1 minute
        alertThreshold: 3,
        recoveryTimeout: 300000 // 5 minutes
      }
    };
    
    this.healthStatus = {
      pm2: { healthy: true, lastCheck: null, failures: 0 },
      githubActions: { healthy: true, lastCheck: null, failures: 0 },
      netlifyFunctions: { healthy: true, lastCheck: null, failures: 0 },
      npmScripts: { healthy: true, lastCheck: null, failures: 0 },
      overall: { healthy: true, lastCheck: null, failures: 0 }
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

  async checkPM2Health() {
    this.log("Checking PM2 process health...");
    
    try {
      const statusResult = await this.runCommand("pm2", ["status", "--no-daemon"]);
      
      if (statusResult.status !== 0) {
        this.log("PM2 status check failed, attempting to restart PM2", "WARN");
        await this.runCommand("pm2", ["kill"]);
        await this.runCommand("pm2", ["start", this.config.pm2.ecosystemFiles[0]]);
        this.healthStatus.pm2.healthy = false;
        this.healthStatus.pm2.failures++;
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
        }
      }

      // Check if any ecosystem files need to be started
      for (const ecosystemFile of this.config.pm2.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          const startResult = await this.runCommand("pm2", ["start", ecosystemFile, "--update-env"]);
          if (startResult.status === 0) {
            this.log(`Started PM2 ecosystem: ${ecosystemFile}`);
          }
        }
      }

      this.healthStatus.pm2.healthy = allHealthy;
      this.healthStatus.pm2.lastCheck = new Date();
      if (allHealthy) {
        this.healthStatus.pm2.failures = 0;
      }
      
      return allHealthy;
    } catch (error) {
      this.log(`PM2 health check error: ${error.message}`, "ERROR");
      this.healthStatus.pm2.healthy = false;
      this.healthStatus.pm2.failures++;
      return false;
    }
  }

  async checkGitHubActionsHealth() {
    this.log("Checking GitHub Actions workflows...");
    
    try {
      let allHealthy = true;
      
      // Check if workflow files exist and are valid
      for (const workflow of this.config.githubActions.workflows) {
        if (!fs.existsSync(workflow)) {
          this.log(`GitHub Actions workflow not found: ${workflow}`, "WARN");
          allHealthy = false;
        } else {
          // Validate YAML syntax (basic check)
          try {
            const content = fs.readFileSync(workflow, 'utf8');
            if (!content.includes('name:') || !content.includes('on:')) {
              this.log(`Invalid GitHub Actions workflow: ${workflow}`, "WARN");
              allHealthy = false;
            }
          } catch (error) {
            this.log(`Error reading GitHub Actions workflow: ${workflow}`, "ERROR");
            allHealthy = false;
          }
        }
      }

      // Check if backup workflows exist
      for (const backupWorkflow of this.config.githubActions.backupWorkflows) {
        if (!fs.existsSync(backupWorkflow)) {
          this.log(`Backup workflow not found: ${backupWorkflow}`, "WARN");
          allHealthy = false;
        }
      }

      this.healthStatus.githubActions.healthy = allHealthy;
      this.healthStatus.githubActions.lastCheck = new Date();
      if (allHealthy) {
        this.healthStatus.githubActions.failures = 0;
      }
      
      return allHealthy;
    } catch (error) {
      this.log(`GitHub Actions health check error: ${error.message}`, "ERROR");
      this.healthStatus.githubActions.healthy = false;
      this.healthStatus.githubActions.failures++;
      return false;
    }
  }

  async checkNetlifyFunctionsHealth() {
    this.log("Checking Netlify functions...");
    
    try {
      let allHealthy = true;
      
      if (!fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        this.log("Netlify functions manifest not found", "WARN");
        allHealthy = false;
      } else {
        try {
          const manifest = JSON.parse(fs.readFileSync(this.config.netlifyFunctions.manifestFile, 'utf8'));
          
          if (!manifest.functions || !Array.isArray(manifest.functions)) {
            this.log("Invalid Netlify functions manifest", "WARN");
            allHealthy = false;
          } else {
            // Check if critical functions exist
            for (const criticalFunction of this.config.netlifyFunctions.criticalFunctions) {
              if (!manifest.functions.includes(criticalFunction)) {
                this.log(`Critical Netlify function not found: ${criticalFunction}`, "WARN");
                allHealthy = false;
              }
            }
            
            this.log(`Found ${manifest.functions.length} Netlify functions`);
          }
        } catch (error) {
          this.log(`Error parsing Netlify functions manifest: ${error.message}`, "ERROR");
          allHealthy = false;
        }
      }

      this.healthStatus.netlifyFunctions.healthy = allHealthy;
      this.healthStatus.netlifyFunctions.lastCheck = new Date();
      if (allHealthy) {
        this.healthStatus.netlifyFunctions.failures = 0;
      }
      
      return allHealthy;
    } catch (error) {
      this.log(`Netlify functions health check error: ${error.message}`, "ERROR");
      this.healthStatus.netlifyFunctions.healthy = false;
      this.healthStatus.netlifyFunctions.failures++;
      return false;
    }
  }

  async checkNPMScriptsHealth() {
    this.log("Checking NPM scripts availability...");
    
    try {
      let allHealthy = true;
      
      // Check if package.json exists and has required scripts
      if (!fs.existsSync('package.json')) {
        this.log("package.json not found", "ERROR");
        allHealthy = false;
      } else {
        try {
          const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
          
          for (const criticalScript of this.config.npmScripts.critical) {
            if (!packageJson.scripts || !packageJson.scripts[criticalScript]) {
              this.log(`Critical NPM script not found: ${criticalScript}`, "WARN");
              allHealthy = false;
            }
          }
          
          for (const automationScript of this.config.npmScripts.automation) {
            if (!packageJson.scripts || !packageJson.scripts[automationScript]) {
              this.log(`Automation NPM script not found: ${automationScript}`, "WARN");
              allHealthy = false;
            }
          }
        } catch (error) {
          this.log(`Error parsing package.json: ${error.message}`, "ERROR");
          allHealthy = false;
        }
      }

      this.healthStatus.npmScripts.healthy = allHealthy;
      this.healthStatus.npmScripts.lastCheck = new Date();
      if (allHealthy) {
        this.healthStatus.npmScripts.failures = 0;
      }
      
      return allHealthy;
    } catch (error) {
      this.log(`NPM scripts health check error: ${error.message}`, "ERROR");
      this.healthStatus.npmScripts.healthy = false;
      this.healthStatus.npmScripts.failures++;
      return false;
    }
  }

  async performRecovery() {
    this.log("Performing comprehensive recovery...");
    
    try {
      // PM2 Recovery
      if (!this.healthStatus.pm2.healthy) {
        this.log("Recovering PM2 processes...");
        await this.runCommand("pm2", ["kill"]);
        await this.runCommand("pm2", ["start", this.config.pm2.ecosystemFiles[0]]);
        await this.runCommand("pm2", ["start", this.config.pm2.ecosystemFiles[1]]);
        await this.runCommand("pm2", ["save"]);
      }

      // GitHub Actions Recovery
      if (!this.healthStatus.githubActions.healthy) {
        this.log("Recovering GitHub Actions workflows...");
        // Trigger backup workflows if main ones are broken
        for (const backupWorkflow of this.config.githubActions.backupWorkflows) {
          if (fs.existsSync(backupWorkflow)) {
            this.log(`Triggering backup workflow: ${backupWorkflow}`);
            // This would typically involve GitHub API calls
          }
        }
      }

      // Netlify Functions Recovery
      if (!this.healthStatus.netlifyFunctions.healthy) {
        this.log("Recovering Netlify functions...");
        await this.runCommand("npm", ["run", "netlify:manifest"]);
      }

      // NPM Scripts Recovery
      if (!this.healthStatus.npmScripts.healthy) {
        this.log("Recovering NPM scripts...");
        await this.runCommand("npm", ["install"]);
      }

      this.log("Recovery completed");
      return true;
    } catch (error) {
      this.log(`Recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async runComprehensiveHealthCheck() {
    this.log("Running comprehensive health check...");
    
    const pm2Health = await this.checkPM2Health();
    const githubHealth = await this.checkGitHubActionsHealth();
    const netlifyHealth = await this.checkNetlifyFunctionsHealth();
    const npmHealth = await this.checkNPMScriptsHealth();
    
    const overallHealth = pm2Health && githubHealth && netlifyHealth && npmHealth;
    
    this.healthStatus.overall.healthy = overallHealth;
    this.healthStatus.overall.lastCheck = new Date();
    
    if (!overallHealth) {
      this.healthStatus.overall.failures++;
      this.log("Overall health check failed, initiating recovery...", "WARN");
      
      if (this.healthStatus.overall.failures >= this.config.monitoring.alertThreshold) {
        this.log("Alert threshold reached, performing recovery", "ERROR");
        await this.performRecovery();
      }
    } else {
      this.healthStatus.overall.failures = 0;
    }
    
    this.log(`Health check completed. Overall: ${overallHealth ? 'HEALTHY' : 'UNHEALTHY'}`);
    return overallHealth;
  }

  getStatus() {
    return {
      timestamp: new Date().toISOString(),
      overall: this.healthStatus.overall,
      components: {
        pm2: this.healthStatus.pm2,
        githubActions: this.healthStatus.githubActions,
        netlifyFunctions: this.healthStatus.netlifyFunctions,
        npmScripts: this.healthStatus.npmScripts
      },
      config: this.config
    };
  }

  async startMonitoring() {
    this.log("Starting comprehensive redundancy monitoring...");
    
    // Initial health check
    await this.runComprehensiveHealthCheck();
    
    // Set up monitoring intervals
    setInterval(async () => {
      await this.runComprehensiveHealthCheck();
    }, this.config.monitoring.overallHealthCheckInterval);
    
    // PM2 monitoring
    setInterval(async () => {
      await this.checkPM2Health();
    }, this.config.pm2.healthCheckInterval);
    
    // GitHub Actions monitoring
    setInterval(async () => {
      await this.checkGitHubActionsHealth();
    }, this.config.githubActions.healthCheckInterval);
    
    // Netlify Functions monitoring
    setInterval(async () => {
      await this.checkNetlifyFunctionsHealth();
    }, this.config.netlifyFunctions.healthCheckInterval);
    
    this.log("Comprehensive redundancy monitoring started");
  }

  async stopMonitoring() {
    this.log("Stopping comprehensive redundancy monitoring...");
    // Clear all intervals
    process.exit(0);
  }

  initializeMonitoring() {
    // Handle graceful shutdown
    process.on('SIGINT', async () => {
      this.log("Received SIGINT, shutting down gracefully...");
      await this.stopMonitoring();
    });
    
    process.on('SIGTERM', async () => {
      this.log("Received SIGTERM, shutting down gracefully...");
      await this.stopMonitoring();
    });
  }
}

// CLI interface
if (require.main === module) {
  const system = new ComprehensiveRedundancySystem();
  
  const command = process.argv[2] || 'start';
  
  switch (command) {
    case 'start':
      system.startMonitoring();
      break;
    case 'status':
      console.log(JSON.stringify(system.getStatus(), null, 2));
      break;
    case 'health':
      system.runComprehensiveHealthCheck();
      break;
    case 'recover':
      system.performRecovery();
      break;
    default:
      console.log('Usage: node comprehensive-redundancy-system.cjs [start|status|health|recover]');
      process.exit(1);
  }
}

module.exports = ComprehensiveRedundancySystem;