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
        processes: ["zion-auto-sync", "zion-auto-sync-cron", "redundancy-automation-system", "redundancy-health-monitor", "redundancy-git-sync", "redundancy-build-monitor"],
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
        metricsCollection: true,
        alerting: true,
        healthDashboard: true
      }
    };
    
    this.ensureLogDirectory();
    this.initializeMonitoring();
    this.startHealthChecks();
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
    try {
      fs.appendFileSync(logFile, logEntry + "\n");
    } catch (error) {
      console.error(`Failed to write to log file: ${error.message}`);
    }
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: process.cwd(),
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

  async checkPM2Health() {
    this.log("🔍 Checking PM2 process health...");
    
    try {
      const statusResult = await this.runCommand("pm2", ["status", "--no-daemon"]);
      
      if (statusResult.status !== 0) {
        this.log("⚠️ PM2 status check failed, attempting to restart PM2", "WARN");
        await this.runCommand("pm2", ["kill"]);
        await this.runCommand("pm2", ["start", this.config.pm2.ecosystemFiles[0]]);
        if (fs.existsSync(this.config.pm2.ecosystemFiles[1])) {
          await this.runCommand("pm2", ["start", this.config.pm2.ecosystemFiles[1]]);
        }
        return false;
      }

      const processes = this.config.pm2.processes;
      let allHealthy = true;
      let recoveredCount = 0;

      for (const processName of processes) {
        const processStatus = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
        
        if (processStatus.status !== 0) {
          this.log(`⚠️ PM2 process ${processName} not found, restarting...`, "WARN");
          await this.runCommand("pm2", ["restart", processName]);
          allHealthy = false;
          recoveredCount++;
        } else {
          // Check if process is actually running
          const isRunning = await this.runCommand("pm2", ["jlist"]);
          if (isRunning.status === 0) {
            try {
              const processes = JSON.parse(isRunning.stdout);
              const targetProcess = processes.find(p => p.name === processName);
              if (targetProcess && targetProcess.pm2_env.status !== "online") {
                this.log(`⚠️ PM2 process ${processName} is not online, restarting...`, "WARN");
                await this.runCommand("pm2", ["restart", processName]);
                allHealthy = false;
                recoveredCount++;
              }
            } catch (parseError) {
              this.log(`⚠️ Failed to parse PM2 process list: ${parseError.message}`, "WARN");
            }
          }
        }
      }

      if (recoveredCount > 0) {
        this.log(`✅ Recovered ${recoveredCount} PM2 processes`, "INFO");
      }

      return allHealthy;
    } catch (error) {
      this.log(`❌ PM2 health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkGitHubActionsHealth() {
    this.log("🔍 Checking GitHub Actions workflows...");
    
    try {
      const workflowsDir = path.join(process.cwd(), ".github/workflows");
      if (!fs.existsSync(workflowsDir)) {
        this.log("❌ GitHub workflows directory not found", "ERROR");
        return false;
      }

      const workflowFiles = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));
      this.log(`📋 Found ${workflowFiles.length} workflow files`);
      
      let allHealthy = true;
      let issuesFound = 0;

      for (const workflowFile of workflowFiles) {
        const workflowPath = path.join(workflowsDir, workflowFile);
        try {
          const content = fs.readFileSync(workflowPath, 'utf8');
          
          // Basic YAML validation
          if (!content.includes('name:') || !content.includes('on:')) {
            this.log(`⚠️ Workflow ${workflowFile} appears to have invalid structure`, "WARN");
            issuesFound++;
            allHealthy = false;
          }

          // Check for common issues
          if (content.includes('cron:') && content.includes('*/0')) {
            this.log(`⚠️ Workflow ${workflowFile} has invalid cron syntax (*/0)`, "WARN");
            issuesFound++;
            allHealthy = false;
          }

        } catch (error) {
          this.log(`❌ Failed to read workflow ${workflowFile}: ${error.message}`, "ERROR");
          issuesFound++;
          allHealthy = false;
        }
      }

      if (issuesFound > 0) {
        this.log(`⚠️ Found ${issuesFound} workflow issues`, "WARN");
      } else {
        this.log("✅ All GitHub Actions workflows appear healthy", "INFO");
      }

      return allHealthy;
    } catch (error) {
      this.log(`❌ GitHub Actions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkNetlifyFunctionsHealth() {
    this.log("🔍 Checking Netlify functions...");
    
    try {
      const netlifyDir = path.join(process.cwd(), "netlify");
      if (!fs.existsSync(netlifyDir)) {
        this.log("❌ Netlify directory not found", "ERROR");
        return false;
      }

      const functionsDir = path.join(netlifyDir, "functions");
      const manifestFile = path.join(netlifyDir, "functions/functions-manifest.json");
      
      if (!fs.existsSync(functionsDir)) {
        this.log("❌ Netlify functions directory not found", "ERROR");
        return false;
      }

      if (!fs.existsSync(manifestFile)) {
        this.log("⚠️ Netlify functions manifest not found, attempting to regenerate...", "WARN");
        await this.regenerateNetlifyFunctionsManifest();
        return false;
      }

      try {
        const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
        const functions = manifest.functions || [];
        
        this.log(`📋 Found ${functions.length} Netlify functions`);
        
        // Check if manifest is recent (within last hour)
        const manifestAge = Date.now() - new Date(manifest.generatedAt).getTime();
        if (manifestAge > 3600000) { // 1 hour
          this.log("⚠️ Netlify functions manifest is stale, regenerating...", "WARN");
          await this.regenerateNetlifyFunctionsManifest();
        }

        return true;
      } catch (parseError) {
        this.log(`❌ Failed to parse Netlify functions manifest: ${parseError.message}`, "ERROR");
        await this.regenerateNetlifyFunctionsManifest();
        return false;
      }
    } catch (error) {
      this.log(`❌ Netlify functions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async regenerateNetlifyFunctionsManifest() {
    this.log("🔄 Regenerating Netlify functions manifest...");
    
    try {
      const scriptPath = path.join(process.cwd(), "scripts/generate-netlify-functions-manifest.cjs");
      if (fs.existsSync(scriptPath)) {
        const result = await this.runCommand("node", [scriptPath]);
        if (result.status === 0) {
          this.log("✅ Netlify functions manifest regenerated successfully", "INFO");
        } else {
          this.log(`⚠️ Failed to regenerate manifest: ${result.stderr}`, "WARN");
        }
      } else {
        this.log("⚠️ Netlify functions manifest generator script not found", "WARN");
      }
    } catch (error) {
      this.log(`❌ Failed to regenerate Netlify functions manifest: ${error.message}`, "ERROR");
    }
  }

  async performComprehensiveHealthCheck() {
    this.log("🚀 Starting comprehensive health check...");
    
    const results = {
      timestamp: new Date().toISOString(),
      pm2: false,
      githubActions: false,
      netlifyFunctions: false,
      overall: false
    };

    // Check PM2 health
    results.pm2 = await this.checkPM2Health();
    
    // Check GitHub Actions health
    results.githubActions = await this.checkGitHubActionsHealth();
    
    // Check Netlify functions health
    results.netlifyFunctions = await this.checkNetlifyFunctionsHealth();
    
    // Overall health
    results.overall = results.pm2 && results.githubActions && results.netlifyFunctions;
    
    this.log(`📊 Health Check Results: PM2: ${results.pm2 ? '✅' : '❌'}, GitHub Actions: ${results.githubActions ? '✅' : '❌'}, Netlify Functions: ${results.netlifyFunctions ? '✅' : '❌'}`);
    
    // Save health check results
    this.saveHealthCheckResults(results);
    
    return results;
  }

  saveHealthCheckResults(results) {
    try {
      const healthFile = path.join(this.config.logging.logDir, `health-check-${new Date().toISOString().split('T')[0]}.json`);
      const existingData = fs.existsSync(healthFile) ? JSON.parse(fs.readFileSync(healthFile, 'utf8')) : [];
      existingData.push(results);
      
      // Keep only last 100 results
      if (existingData.length > 100) {
        existingData.splice(0, existingData.length - 100);
      }
      
      fs.writeFileSync(healthFile, JSON.stringify(existingData, null, 2));
    } catch (error) {
      this.log(`⚠️ Failed to save health check results: ${error.message}`, "WARN");
    }
  }

  async startHealthChecks() {
    this.log("🔄 Starting periodic health checks...");
    
    setInterval(async () => {
      await this.performComprehensiveHealthCheck();
    }, 300000); // Every 5 minutes
    
    // Initial health check
    setTimeout(async () => {
      await this.performComprehensiveHealthCheck();
    }, 10000); // After 10 seconds
  }

  async emergencyRecovery() {
    this.log("🚨 Starting emergency recovery procedures...");
    
    try {
      // Kill all PM2 processes
      await this.runCommand("pm2", ["kill"]);
      
      // Wait a moment
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Restart PM2 ecosystem files
      for (const ecosystemFile of this.config.pm2.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          this.log(`🔄 Restarting ${ecosystemFile}...`);
          await this.runCommand("pm2", ["start", ecosystemFile]);
        }
      }
      
      // Regenerate Netlify functions manifest
      await this.regenerateNetlifyFunctionsManifest();
      
      this.log("✅ Emergency recovery completed", "INFO");
    } catch (error) {
      this.log(`❌ Emergency recovery failed: ${error.message}`, "ERROR");
    }
  }

  async generateHealthReport() {
    this.log("📊 Generating comprehensive health report...");
    
    try {
      const report = {
        timestamp: new Date().toISOString(),
        system: {
          nodeVersion: process.version,
          platform: process.platform,
          arch: process.arch,
          uptime: process.uptime()
        },
        pm2: {
          status: "unknown",
          processes: []
        },
        githubActions: {
          workflows: [],
          issues: []
        },
        netlifyFunctions: {
          count: 0,
          manifestStatus: "unknown"
        },
        recommendations: []
      };

      // Get PM2 status
      try {
        const pm2Status = await this.runCommand("pm2", ["jlist"]);
        if (pm2Status.status === 0) {
          const processes = JSON.parse(pm2Status.stdout);
          report.pm2.status = "running";
          report.pm2.processes = processes.map(p => ({
            name: p.name,
            status: p.pm2_env.status,
            uptime: p.pm2_env.pm_uptime,
            restarts: p.pm2_env.restart_time
          }));
        } else {
          report.pm2.status = "not_running";
        }
      } catch (error) {
        report.pm2.status = "error";
        report.pm2.error = error.message;
      }

      // Get GitHub Actions workflows
      try {
        const workflowsDir = path.join(process.cwd(), ".github/workflows");
        if (fs.existsSync(workflowsDir)) {
          const workflowFiles = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));
          report.githubActions.workflows = workflowFiles;
        }
      } catch (error) {
        report.githubActions.error = error.message;
      }

      // Get Netlify functions status
      try {
        const manifestFile = path.join(process.cwd(), "netlify/functions/functions-manifest.json");
        if (fs.existsSync(manifestFile)) {
          const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
          report.netlifyFunctions.count = manifest.functions ? manifest.functions.length : 0;
          report.netlifyFunctions.manifestStatus = "valid";
        } else {
          report.netlifyFunctions.manifestStatus = "missing";
        }
      } catch (error) {
        report.netlifyFunctions.manifestStatus = "error";
        report.netlifyFunctions.error = error.message;
      }

      // Generate recommendations
      if (report.pm2.status !== "running") {
        report.recommendations.push("Restart PM2 processes");
      }
      if (report.netlifyFunctions.manifestStatus === "missing") {
        report.recommendations.push("Regenerate Netlify functions manifest");
      }

      // Save report
      const reportFile = path.join(this.config.logging.logDir, `health-report-${new Date().toISOString().split('T')[0]}.json`);
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      this.log("✅ Health report generated and saved", "INFO");
      return report;
    } catch (error) {
      this.log(`❌ Failed to generate health report: ${error.message}`, "ERROR");
      return null;
    }
  }

  initializeMonitoring() {
    this.log("🔧 Initializing comprehensive redundancy monitoring...");
    
    // Set up process error handling
    process.on('uncaughtException', (error) => {
      this.log(`💥 Uncaught Exception: ${error.message}`, "ERROR");
      this.log(`Stack: ${error.stack}`, "ERROR");
    });

    process.on('unhandledRejection', (reason, promise) => {
      this.log(`💥 Unhandled Rejection at: ${promise}, reason: ${reason}`, "ERROR");
    });

    // Graceful shutdown
    process.on('SIGTERM', async () => {
      this.log("🛑 Received SIGTERM, shutting down gracefully...", "INFO");
      await this.cleanup();
      process.exit(0);
    });

    process.on('SIGINT', async () => {
      this.log("🛑 Received SIGINT, shutting down gracefully...", "INFO");
      await this.cleanup();
      process.exit(0);
    });
  }

  async cleanup() {
    this.log("🧹 Performing cleanup...");
    // Add any cleanup logic here
  }
}

// Start the comprehensive redundancy system
if (require.main === module) {
  const redundancySystem = new ComprehensiveRedundancySystem();
  
  // Handle command line arguments
  const args = process.argv.slice(2);
  
  if (args.includes('--health-check')) {
    redundancySystem.performComprehensiveHealthCheck().then(() => {
      process.exit(0);
    });
  } else if (args.includes('--emergency-recovery')) {
    redundancySystem.emergencyRecovery().then(() => {
      process.exit(0);
    });
  } else if (args.includes('--health-report')) {
    redundancySystem.generateHealthReport().then(() => {
      process.exit(0);
    });
  } else {
    // Keep running for continuous monitoring
    redundancySystem.log("🚀 Comprehensive Redundancy System started and running...", "INFO");
  }
}

module.exports = ComprehensiveRedundancySystem;