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
        ecosystemFiles: ["ecosystem.pm2.cjs", "ecosystem.redundancy.cjs"],
        processes: [
          "zion-auto-sync",
          "zion-auto-sync-cron",
          "redundancy-automation-system",
          "redundancy-health-monitor",
          "redundancy-git-sync",
          "redundancy-build-monitor"
        ],
        healthCheckInterval: 30000,
        maxRestartAttempts: 5,
        restartDelay: 5000,
        autoRecovery: true
      },
      githubActions: {
        workflows: [
          ".github/workflows/marketing-sync.yml",
          ".github/workflows/sync-health.yml"
        ],
        healthCheckInterval: 60000,
        maxFailureThreshold: 3,
        autoTrigger: true,
        backupWorkflows: true
      },
      netlifyFunctions: {
        manifestFile: "netlify/functions/functions-manifest.json",
        healthCheckInterval: 120000,
        maxFailureThreshold: 2,
        autoRegenerate: true,
        deploymentCheck: true
      },
      logging: {
        logDir: "automation/logs",
        maxLogSize: 10 * 1024 * 1024,
        maxLogFiles: 30,
        logLevel: "INFO"
      },
      monitoring: {
        enabled: true,
        checkInterval: 30000,
        alertThreshold: 3,
        autoRestart: true
      }
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

  async checkPM2ComprehensiveHealth() {
    this.log("🔍 Performing comprehensive PM2 health check...");
    
    try {
      // Check PM2 daemon status
      const statusResult = await this.runCommand("pm2", ["status", "--no-daemon"]);
      
      if (statusResult.status !== 0) {
        this.log("⚠️ PM2 daemon not responding, attempting restart", "WARN");
        await this.runCommand("pm2", ["kill"]);
        await this.runCommand("pm2", ["start", this.config.pm2.ecosystemFiles[0]]);
        return false;
      }

      // Check each ecosystem file
      for (const ecosystemFile of this.config.pm2.ecosystemFiles) {
        if (!fs.existsSync(ecosystemFile)) {
          this.log(`❌ Ecosystem file ${ecosystemFile} not found`, "ERROR");
          continue;
        }
        
        this.log(`✅ Found ecosystem file: ${ecosystemFile}`);
      }

      // Check each process
      const processes = this.config.pm2.processes;
      let allHealthy = true;
      let healthyCount = 0;

      for (const processName of processes) {
        const processStatus = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
        
        if (processStatus.status !== 0) {
          this.log(`⚠️ PM2 process ${processName} not found, attempting restart...`, "WARN");
          
          if (this.config.pm2.autoRecovery) {
            await this.runCommand("pm2", ["restart", processName]);
            await this.runCommand("pm2", ["save"]);
          }
          
          allHealthy = false;
        } else {
          healthyCount++;
          this.log(`✅ Process ${processName} is healthy`);
        }
      }

      this.log(`📊 PM2 Health Summary: ${healthyCount}/${processes.length} processes healthy`);
      
      // Check PM2 logs for errors
      await this.checkPM2Logs();
      
      return allHealthy;
    } catch (error) {
      this.log(`❌ PM2 health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkPM2Logs() {
    try {
      const logResult = await this.runCommand("pm2", ["logs", "--lines", "50", "--nostream"]);
      
      if (logResult.status === 0) {
        const logs = logResult.stdout;
        const errorLines = logs.split('\n').filter(line => 
          line.toLowerCase().includes('error') || 
          line.toLowerCase().includes('failed') ||
          line.toLowerCase().includes('exception')
        );
        
        if (errorLines.length > 0) {
          this.log(`⚠️ Found ${errorLines.length} error lines in PM2 logs`, "WARN");
          errorLines.slice(0, 5).forEach(line => {
            this.log(`   ${line.trim()}`, "WARN");
          });
        }
      }
    } catch (error) {
      this.log(`⚠️ Could not check PM2 logs: ${error.message}`, "WARN");
    }
  }

  async checkGitHubActionsComprehensive() {
    this.log("🔍 Performing comprehensive GitHub Actions health check...");
    
    try {
      // Check workflows directory
      const workflowsDir = ".github/workflows";
      if (!fs.existsSync(workflowsDir)) {
        this.log("❌ GitHub workflows directory not found", "ERROR");
        return false;
      }

      // Check each workflow file
      const workflows = this.config.githubActions.workflows;
      let allHealthy = true;
      let healthyCount = 0;

      for (const workflow of workflows) {
        const workflowPath = path.join(workflowsDir, workflow);
        
        if (!fs.existsSync(workflowPath)) {
          this.log(`❌ Workflow file ${workflow} not found`, "ERROR");
          allHealthy = false;
          continue;
        }

        try {
          const workflowContent = fs.readFileSync(workflowPath, 'utf8');
          
          // Basic YAML validation
          if (workflowContent.includes('name:') && workflowContent.includes('on:')) {
            healthyCount++;
            this.log(`✅ Workflow ${workflow} is valid`);
          } else {
            this.log(`⚠️ Workflow ${workflow} appears to be invalid`, "WARN");
            allHealthy = false;
          }
        } catch (error) {
          this.log(`❌ Error reading workflow ${workflow}: ${error.message}`, "ERROR");
          allHealthy = false;
        }
      }

      this.log(`📊 GitHub Actions Health Summary: ${healthyCount}/${workflows.length} workflows healthy`);

      // Check for backup workflows
      if (this.config.githubActions.backupWorkflows) {
        await this.createBackupWorkflows();
      }

      return allHealthy;
    } catch (error) {
      this.log(`❌ GitHub Actions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async createBackupWorkflows() {
    try {
      const backupDir = ".github/workflows/backup";
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }

      const workflows = this.config.githubActions.workflows;
      for (const workflow of workflows) {
        const sourcePath = path.join(".github/workflows", workflow);
        const backupPath = path.join(backupDir, `${workflow}.backup`);
        
        if (fs.existsSync(sourcePath) && !fs.existsSync(backupPath)) {
          fs.copyFileSync(sourcePath, backupPath);
          this.log(`💾 Created backup for workflow: ${workflow}`);
        }
      }
    } catch (error) {
      this.log(`⚠️ Could not create backup workflows: ${error.message}`, "WARN");
    }
  }

  async checkNetlifyFunctionsComprehensive() {
    this.log("🔍 Performing comprehensive Netlify functions health check...");
    
    try {
      // Check Netlify directory structure
      const netlifyDir = "netlify";
      if (!fs.existsSync(netlifyDir)) {
        this.log("❌ Netlify directory not found", "ERROR");
        return false;
      }

      // Check functions directory
      const functionsDir = path.join(netlifyDir, "functions");
      if (!fs.existsSync(functionsDir)) {
        this.log("❌ Netlify functions directory not found", "ERROR");
        return false;
      }

      // Check functions manifest
      const manifestFile = this.config.netlifyFunctions.manifestFile;
      if (!fs.existsSync(manifestFile)) {
        this.log("❌ Netlify functions manifest not found", "ERROR");
        
        if (this.config.netlifyFunctions.autoRegenerate) {
          this.log("🔄 Attempting to regenerate functions manifest...");
          await this.regenerateFunctionsManifest();
        }
        
        return false;
      }

      // Validate manifest
      try {
        const manifestContent = fs.readFileSync(manifestFile, 'utf8');
        const manifest = JSON.parse(manifestContent);
        
        if (manifest.functions && Array.isArray(manifest.functions)) {
          this.log(`✅ Functions manifest is valid with ${manifest.functions.length} functions`);
          
          // Check for critical functions
          const criticalFunctions = [
            "netlify-auto-healer-runner",
            "marketing-scheduler",
            "homepage-updater-scheduler"
          ];
          
          let criticalCount = 0;
          for (const func of criticalFunctions) {
            if (manifest.functions.includes(func)) {
              criticalCount++;
              this.log(`✅ Critical function found: ${func}`);
            } else {
              this.log(`⚠️ Critical function missing: ${func}`, "WARN");
            }
          }
          
          this.log(`📊 Critical Functions: ${criticalCount}/${criticalFunctions.length} present`);
        } else {
          this.log("⚠️ Functions manifest is invalid", "WARN");
          return false;
        }
      } catch (error) {
        this.log(`❌ Error parsing functions manifest: ${error.message}`, "ERROR");
        return false;
      }

      // Check deployment status if enabled
      if (this.config.netlifyFunctions.deploymentCheck) {
        await this.checkNetlifyDeployment();
      }

      return true;
    } catch (error) {
      this.log(`❌ Netlify functions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async regenerateFunctionsManifest() {
    try {
      const scriptPath = "scripts/generate-netlify-functions-manifest.cjs";
      
      if (fs.existsSync(scriptPath)) {
        const result = await this.runCommand("node", [scriptPath]);
        
        if (result.status === 0) {
          this.log("✅ Successfully regenerated functions manifest");
        } else {
          this.log(`⚠️ Failed to regenerate manifest: ${result.stderr}`, "WARN");
        }
      } else {
        this.log("⚠️ Functions manifest generator script not found", "WARN");
      }
    } catch (error) {
      this.log(`⚠️ Could not regenerate functions manifest: ${error.message}`, "WARN");
    }
  }

  async checkNetlifyDeployment() {
    try {
      // Check if netlify CLI is available
      const netlifyResult = await this.runCommand("netlify", ["status"]);
      
      if (netlifyResult.status === 0) {
        this.log("✅ Netlify CLI is available and deployment status checked");
      } else {
        this.log("⚠️ Netlify CLI not available or deployment check failed", "WARN");
      }
    } catch (error) {
      this.log(`⚠️ Could not check Netlify deployment: ${error.message}`, "WARN");
    }
  }

  async performComprehensiveHealthCheck() {
    this.log("🚀 Starting comprehensive health check...");
    
    const results = {
      pm2: false,
      githubActions: false,
      netlifyFunctions: false,
      timestamp: new Date().toISOString()
    };

    // Check PM2
    try {
      results.pm2 = await this.checkPM2ComprehensiveHealth();
    } catch (error) {
      this.log(`❌ PM2 health check error: ${error.message}`, "ERROR");
    }

    // Check GitHub Actions
    try {
      results.githubActions = await this.checkGitHubActionsComprehensive();
    } catch (error) {
      this.log(`❌ GitHub Actions health check error: ${error.message}`, "ERROR");
    }

    // Check Netlify Functions
    try {
      results.netlifyFunctions = await this.checkNetlifyFunctionsComprehensive();
    } catch (error) {
      this.log(`❌ Netlify functions health check error: ${error.message}`, "ERROR");
    }

    // Generate health report
    const healthScore = Object.values(results).filter(Boolean).length;
    const totalChecks = Object.keys(results).length - 1; // Exclude timestamp
    
    this.log(`📊 Comprehensive Health Score: ${healthScore}/${totalChecks}`);
    
    if (healthScore === totalChecks) {
      this.log("🎉 All systems are healthy!");
    } else {
      this.log("⚠️ Some systems need attention", "WARN");
    }

    // Save health report
    await this.saveHealthReport(results);
    
    return results;
  }

  async saveHealthReport(results) {
    try {
      const reportPath = path.join(this.config.logging.logDir, "comprehensive-health-report.json");
      fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
      this.log(`💾 Health report saved to ${reportPath}`);
    } catch (error) {
      this.log(`⚠️ Could not save health report: ${error.message}`, "WARN");
    }
  }

  async startComprehensiveMonitoring() {
    if (!this.config.monitoring.enabled) {
      this.log("📴 Comprehensive monitoring is disabled");
      return;
    }

    this.log("🔍 Starting comprehensive monitoring...");
    
    setInterval(async () => {
      try {
        await this.performComprehensiveHealthCheck();
      } catch (error) {
        this.log(`❌ Monitoring cycle failed: ${error.message}`, "ERROR");
      }
    }, this.config.monitoring.checkInterval);

    this.log(`✅ Comprehensive monitoring started with ${this.config.monitoring.checkInterval}ms intervals`);
  }

  async emergencyRecovery() {
    this.log("🚨 Emergency recovery mode activated...");
    
    try {
      // Kill all PM2 processes
      await this.runCommand("pm2", ["kill"]);
      this.log("🔄 Killed all PM2 processes");
      
      // Wait a moment
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Restart with redundancy ecosystem
      await this.runCommand("pm2", ["start", "ecosystem.redundancy.cjs"]);
      this.log("🔄 Restarted PM2 with redundancy ecosystem");
      
      // Save PM2 configuration
      await this.runCommand("pm2", ["save"]);
      this.log("💾 Saved PM2 configuration");
      
      // Perform health check
      await this.performComprehensiveHealthCheck();
      
      this.log("✅ Emergency recovery completed");
    } catch (error) {
      this.log(`❌ Emergency recovery failed: ${error.message}`, "ERROR");
    }
  }

  async gracefulShutdown() {
    this.log("🛑 Graceful shutdown initiated...");
    
    try {
      // Save PM2 configuration
      await this.runCommand("pm2", ["save"]);
      
      // Stop monitoring
      this.log("📴 Monitoring stopped");
      
      this.log("✅ Graceful shutdown completed");
      process.exit(0);
    } catch (error) {
      this.log(`❌ Graceful shutdown failed: ${error.message}`, "ERROR");
      process.exit(1);
    }
  }

  initializeMonitoring() {
    // Handle process signals
    process.on('SIGINT', () => this.gracefulShutdown());
    process.on('SIGTERM', () => this.gracefulShutdown());
    
    // Handle uncaught exceptions
    process.on('uncaughtException', (error) => {
      this.log(`❌ Uncaught exception: ${error.message}`, "ERROR");
      this.emergencyRecovery();
    });
    
    // Handle unhandled rejections
    process.on('unhandledRejection', (reason, promise) => {
      this.log(`❌ Unhandled rejection at ${promise}: ${reason}`, "ERROR");
    });
    
    this.log("✅ Process monitoring initialized");
  }
}

// Start the comprehensive redundancy system
if (require.main === module) {
  const system = new ComprehensiveRedundancySystem();
  
  // Perform initial health check
  system.performComprehensiveHealthCheck().then(results => {
    console.log("🎯 Initial health check completed:", results);
  }).catch(error => {
    console.error("❌ Initial health check failed:", error);
  });
}

module.exports = ComprehensiveRedundancySystem;