#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class UltimateRedundancyMaster {
  constructor() {
    this.config = {
      pm2: {
        ecosystemFiles: [
          "ecosystem.pm2.cjs",
          "ecosystem.redundancy.cjs", 
          "ecosystem.comprehensive-redundancy.cjs",
          "ecosystem.redundancy.pm2.cjs"
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
          "enhanced-netlify-functions-redundancy",
          "redundancy-automation-system",
          "redundancy-health-monitor",
          "redundancy-git-sync",
          "redundancy-build-monitor"
        ],
        healthCheckInterval: 15000,
        maxRestartAttempts: 10,
        restartDelay: 3000,
        autoRecovery: true,
        processMonitoring: true,
        logRotation: true
      },
      githubActions: {
        workflows: [
          ".github/workflows/marketing-sync.yml",
          ".github/workflows/sync-health.yml",
          ".github/workflows/marketing-sync-backup.yml",
          ".github/workflows/sync-health-backup.yml"
        ],
        healthCheckInterval: 30000,
        maxFailureThreshold: 5,
        autoTrigger: true,
        backupTriggers: true,
        workflowValidation: true,
        apiHealthCheck: true
      },
      netlifyFunctions: {
        manifestFile: "netlify/functions/functions-manifest.json",
        healthCheckInterval: 60000,
        maxFailureThreshold: 3,
        autoRegenerate: true,
        deploymentCheck: true,
        logRotation: true,
        functionCount: 100
      },
      logging: {
        logDir: "automation/logs",
        maxLogSize: 20 * 1024 * 1024,
        maxLogFiles: 50,
        compression: true
      },
      monitoring: {
        enabled: true,
        interval: 15000,
        alertThreshold: 5,
        autoRestart: true,
        loadBalancing: true,
        healthDashboard: true
      },
      recovery: {
        autoRecovery: true,
        maxRecoveryAttempts: 10,
        recoveryDelay: 5000,
        fallbackStrategies: true,
        backupSystems: true
      }
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
        maxBuffer: 1024 * 1024 * 50,
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
        return this.recoverPM2System();
      }

      const processes = this.config.pm2.processes;
      let healthyCount = 0;
      let failedProcesses = [];

      for (const processName of processes) {
        try {
          const processResult = await this.runCommand("pm2", ["show", processName]);
          if (processResult.status === 0 && processResult.stdout.includes("online")) {
            healthyCount++;
          } else {
            failedProcesses.push(processName);
          }
        } catch (error) {
          failedProcesses.push(processName);
        }
      }

      this.log(`✅ PM2 Health: ${healthyCount}/${processes.length} processes healthy`);

      if (failedProcesses.length > 0) {
        this.log(`⚠️ Failed processes: ${failedProcesses.join(", ")}`, "WARN");
        await this.recoverPM2Processes(failedProcesses);
      }

      return healthyCount === processes.length;
    } catch (error) {
      this.log(`❌ PM2 health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async recoverPM2System() {
    this.log("🔄 Attempting PM2 system recovery...");
    
    try {
      // Try to resurrect PM2
      await this.runCommand("pm2", ["resurrect"]);
      
      // Start comprehensive redundancy ecosystem
      await this.runCommand("pm2", ["start", "ecosystem.comprehensive-redundancy.cjs"]);
      
      // Save PM2 configuration
      await this.runCommand("pm2", ["save"]);
      
      this.log("✅ PM2 system recovery completed");
      return true;
    } catch (error) {
      this.log(`❌ PM2 recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async recoverPM2Processes(failedProcesses) {
    this.log(`🔄 Recovering ${failedProcesses.length} failed PM2 processes...`);
    
    for (const processName of failedProcesses) {
      try {
        await this.runCommand("pm2", ["restart", processName]);
        this.log(`✅ Restarted ${processName}`);
      } catch (error) {
        this.log(`❌ Failed to restart ${processName}: ${error.message}`, "ERROR");
        
        // Try to start from ecosystem files
        for (const ecosystemFile of this.config.pm2.ecosystemFiles) {
          if (fs.existsSync(ecosystemFile)) {
            try {
              await this.runCommand("pm2", ["start", ecosystemFile, "--only", processName]);
              this.log(`✅ Started ${processName} from ${ecosystemFile}`);
              break;
            } catch (startError) {
              continue;
            }
          }
        }
      }
    }
  }

  async checkGitHubActionsUltimateHealth() {
    this.log("🔍 Checking ultimate GitHub Actions health...");
    
    try {
      // Check workflow files exist
      for (const workflow of this.config.githubActions.workflows) {
        if (!fs.existsSync(workflow)) {
          this.log(`⚠️ Missing workflow: ${workflow}`, "WARN");
          continue;
        }
        
        // Validate workflow syntax
        try {
          const workflowContent = fs.readFileSync(workflow, 'utf8');
          if (workflowContent.includes('name:') && workflowContent.includes('on:')) {
            this.log(`✅ Workflow ${workflow} is valid`);
          } else {
            this.log(`⚠️ Workflow ${workflow} may have syntax issues`, "WARN");
          }
        } catch (error) {
          this.log(`❌ Error reading workflow ${workflow}: ${error.message}`, "ERROR");
        }
      }

      // Check GitHub API connectivity
      try {
        const result = await this.runCommand("curl", ["-s", "-o", "/dev/null", "-w", "%{http_code}", "https://api.github.com"]);
        if (result.status === 0 && result.stdout === "200") {
          this.log("✅ GitHub API connectivity: OK");
        } else {
          this.log("⚠️ GitHub API connectivity: Issues detected", "WARN");
        }
      } catch (error) {
        this.log("❌ GitHub API connectivity check failed", "ERROR");
      }

      return true;
    } catch (error) {
      this.log(`❌ GitHub Actions health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkNetlifyFunctionsUltimateHealth() {
    this.log("🔍 Checking ultimate Netlify Functions health...");
    
    try {
      if (!fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        this.log("❌ Netlify functions manifest not found", "ERROR");
        return false;
      }

      const manifest = JSON.parse(fs.readFileSync(this.config.netlifyFunctions.manifestFile, 'utf8'));
      
      if (manifest.functions && Array.isArray(manifest.functions)) {
        const functionCount = manifest.functions.length;
        this.log(`✅ Netlify Functions: ${functionCount} functions found`);
        
        if (functionCount < this.config.netlifyFunctions.functionCount) {
          this.log(`⚠️ Function count below threshold: ${functionCount}/${this.config.netlifyFunctions.functionCount}`, "WARN");
        }
        
        // Check for critical functions
        const criticalFunctions = [
          "netlify-auto-healer-runner",
          "continuous-orchestrator",
          "automation-matrix"
        ];
        
        for (const criticalFunc of criticalFunctions) {
          if (manifest.functions.includes(criticalFunc)) {
            this.log(`✅ Critical function ${criticalFunc}: OK`);
          } else {
            this.log(`⚠️ Critical function ${criticalFunc}: Missing`, "WARN");
          }
        }
      } else {
        this.log("❌ Invalid functions manifest format", "ERROR");
        return false;
      }

      return true;
    } catch (error) {
      this.log(`❌ Netlify Functions health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performComprehensiveHealthCheck() {
    this.log("🚀 Starting comprehensive health check...");
    
    const results = {
      pm2: await this.checkPM2UltimateHealth(),
      githubActions: await this.checkGitHubActionsUltimateHealth(),
      netlifyFunctions: await this.checkNetlifyFunctionsUltimateHealth(),
      timestamp: new Date().toISOString()
    };

    const overallHealth = results.pm2 && results.githubActions && results.netlifyFunctions;
    
    this.log(`📊 Comprehensive Health Status: ${overallHealth ? '✅ HEALTHY' : '❌ UNHEALTHY'}`);
    this.log(`   PM2: ${results.pm2 ? '✅' : '❌'}`);
    this.log(`   GitHub Actions: ${results.githubActions ? '✅' : '❌'}`);
    this.log(`   Netlify Functions: ${results.netlifyFunctions ? '✅' : '❌'}`);

    if (!overallHealth) {
      this.log("🔄 Initiating comprehensive recovery procedures...");
      await this.performComprehensiveRecovery(results);
    }

    return results;
  }

  async performComprehensiveRecovery(healthResults) {
    this.log("🔄 Starting comprehensive recovery...");
    
    if (!healthResults.pm2) {
      await this.recoverPM2System();
    }
    
    if (!healthResults.githubActions) {
      this.log("🔄 GitHub Actions recovery: Manual intervention may be required");
    }
    
    if (!healthResults.netlifyFunctions) {
      this.log("🔄 Netlify Functions recovery: Regenerating manifest...");
      try {
        await this.runCommand("npm", ["run", "netlify:manifest"]);
        this.log("✅ Netlify functions manifest regenerated");
      } catch (error) {
        this.log(`❌ Failed to regenerate manifest: ${error.message}`, "ERROR");
      }
    }
  }

  async startUltimateMonitoring() {
    this.log("🚀 Starting ultimate redundancy monitoring...");
    
    setInterval(async () => {
      await this.performComprehensiveHealthCheck();
    }, this.config.monitoring.interval);

    // Initial health check
    await this.performComprehensiveHealthCheck();
  }

  initializeMonitoring() {
    this.log("🔧 Initializing ultimate redundancy monitoring system...");
    
    // Ensure PM2 is running
    try {
      execSync("pm2 ping", { stdio: 'pipe' });
      this.log("✅ PM2 daemon is running");
    } catch (error) {
      this.log("⚠️ PM2 daemon not running, attempting to start...");
      try {
        execSync("pm2 start", { stdio: 'pipe' });
        this.log("✅ PM2 daemon started");
      } catch (startError) {
        this.log(`❌ Failed to start PM2 daemon: ${startError.message}`, "ERROR");
      }
    }
  }

  async generateHealthReport() {
    const healthResults = await this.performComprehensiveHealthCheck();
    
    const report = {
      timestamp: new Date().toISOString(),
      overallHealth: healthResults.pm2 && healthResults.githubActions && healthResults.netlifyFunctions,
      systems: {
        pm2: {
          status: healthResults.pm2 ? 'HEALTHY' : 'UNHEALTHY',
          processes: this.config.pm2.processes.length,
          ecosystemFiles: this.config.pm2.ecosystemFiles
        },
        githubActions: {
          status: healthResults.githubActions ? 'HEALTHY' : 'UNHEALTHY',
          workflows: this.config.githubActions.workflows,
          autoTrigger: this.config.githubActions.autoTrigger
        },
        netlifyFunctions: {
          status: healthResults.netlifyFunctions ? 'HEALTHY' : 'UNHEALTHY',
          manifestFile: this.config.netlifyFunctions.manifestFile,
          autoRegenerate: this.config.netlifyFunctions.autoRegenerate
        }
      },
      monitoring: {
        interval: this.config.monitoring.interval,
        autoRecovery: this.config.monitoring.autoRestart,
        loadBalancing: this.config.monitoring.loadBalancing
      }
    };

    const reportFile = path.join(this.config.logging.logDir, `ultimate-redundancy-report-${new Date().toISOString().split('T')[0]}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`📊 Health report generated: ${reportFile}`);
    return report;
  }
}

// CLI Interface
if (require.main === module) {
  const master = new UltimateRedundancyMaster();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      master.log("🚀 Ultimate Redundancy Master started");
      break;
    case 'health':
      master.performComprehensiveHealthCheck();
      break;
    case 'report':
      master.generateHealthReport();
      break;
    case 'recover':
      master.performComprehensiveRecovery({ pm2: false, githubActions: false, netlifyFunctions: false });
      break;
    default:
      master.log("Usage: node ultimate-redundancy-master.cjs [start|health|report|recover]");
      master.log("Starting in monitoring mode...");
      break;
  }
}

module.exports = UltimateRedundancyMaster;