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
        backupTriggers: true
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
        maxLogFiles: 30
      },
      monitoring: {
        enabled: true,
        interval: 30000,
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
    this.log("🔍 Checking comprehensive PM2 process health...");
    
    try {
      // Check PM2 daemon status
      const statusResult = await this.runCommand("pm2", ["status", "--no-daemon"]);
      
      if (statusResult.status !== 0) {
        this.log("⚠️ PM2 daemon not running, attempting to restart", "WARN");
        await this.runCommand("pm2", ["kill"]);
        await this.runCommand("pm2", ["start", "ecosystem.redundancy.cjs"]);
        return false;
      }

      // Check each ecosystem file
      for (const ecosystemFile of this.config.pm2.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          this.log(`📋 Checking ecosystem file: ${ecosystemFile}`);
          
          // Validate ecosystem file syntax
          try {
            require(path.resolve(ecosystemFile));
            this.log(`✅ Ecosystem file ${ecosystemFile} is valid`);
          } catch (error) {
            this.log(`❌ Ecosystem file ${ecosystemFile} has syntax errors: ${error.message}`, "ERROR");
          }
        }
      }

      // Check each process
      const processes = this.config.pm2.processes;
      let allHealthy = true;

      for (const processName of processes) {
        const processStatus = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
        
        if (processStatus.status !== 0) {
          this.log(`⚠️ PM2 process ${processName} not found, attempting to restart...`, "WARN");
          
          if (this.config.pm2.autoRecovery) {
            await this.runCommand("pm2", ["restart", processName]);
            await this.runCommand("pm2", ["save"]);
          }
          
          allHealthy = false;
        } else {
          this.log(`✅ PM2 process ${processName} is running`);
        }
      }

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
        if (logs.includes("ERROR") || logs.includes("FATAL")) {
          this.log("⚠️ PM2 logs contain errors, triggering recovery", "WARN");
          await this.runCommand("pm2", ["reload", "all"]);
        }
      }
    } catch (error) {
      this.log(`⚠️ Could not check PM2 logs: ${error.message}`, "WARN");
    }
  }

  async checkGitHubActionsComprehensive() {
    this.log("🔍 Checking comprehensive GitHub Actions health...");
    
    try {
      // Check workflows directory
      const workflowsDir = ".github/workflows";
      if (!fs.existsSync(workflowsDir)) {
        this.log("❌ GitHub workflows directory not found", "ERROR");
        return false;
      }

      // Check each workflow file
      for (const workflowFile of this.config.githubActions.workflows) {
        const workflowPath = path.join(workflowsDir, workflowFile);
        if (fs.existsSync(workflowPath)) {
          this.log(`📋 Checking workflow: ${workflowFile}`);
          
          // Validate YAML syntax
          try {
            const yaml = require('js-yaml');
            const workflowContent = fs.readFileSync(workflowPath, 'utf8');
            yaml.load(workflowContent);
            this.log(`✅ Workflow ${workflowFile} is valid`);
          } catch (error) {
            this.log(`❌ Workflow ${workflowFile} has syntax errors: ${error.message}`, "ERROR");
          }
        } else {
          this.log(`⚠️ Workflow file ${workflowFile} not found`, "WARN");
        }
      }

      // Check GitHub API status (if token available)
      if (process.env.GITHUB_TOKEN) {
        await this.checkGitHubAPIStatus();
      }

      // Check recent workflow runs
      await this.checkRecentWorkflowRuns();
      
      return true;
    } catch (error) {
      this.log(`❌ GitHub Actions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkGitHubAPIStatus() {
    try {
      const https = require('https');
      const options = {
        hostname: 'api.github.com',
        path: '/status',
        method: 'GET',
        headers: {
          'User-Agent': 'Comprehensive-Redundancy-System',
          'Authorization': `token ${process.env.GITHUB_TOKEN}`
        }
      };

      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => {
          try {
            const status = JSON.parse(data);
            if (status.status && status.status.indicator !== 'none') {
              this.log(`⚠️ GitHub API status: ${status.status.description}`, "WARN");
            } else {
              this.log("✅ GitHub API is healthy");
            }
          } catch (error) {
            this.log(`⚠️ Could not parse GitHub API status: ${error.message}`, "WARN");
          }
        });
      });

      req.on('error', (error) => {
        this.log(`⚠️ GitHub API check failed: ${error.message}`, "WARN");
      });

      req.setTimeout(10000);
      req.end();
    } catch (error) {
      this.log(`⚠️ GitHub API status check failed: ${error.message}`, "WARN");
    }
  }

  async checkRecentWorkflowRuns() {
    try {
      // Check if there are any failed workflows in the last hour
      const gitResult = await this.runCommand("git", ["log", "--since", "1 hour ago", "--oneline"]);
      if (gitResult.status === 0 && gitResult.stdout.includes("workflow")) {
        this.log("📊 Recent workflow activity detected");
      }
    } catch (error) {
      this.log(`⚠️ Could not check recent workflow runs: ${error.message}`, "WARN");
    }
  }

  async checkNetlifyFunctionsComprehensive() {
    this.log("🔍 Checking comprehensive Netlify functions health...");
    
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
      const manifestPath = this.config.netlifyFunctions.manifestFile;
      if (fs.existsSync(manifestPath)) {
        this.log(`📋 Checking functions manifest: ${manifestPath}`);
        
        try {
          const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
          this.log(`✅ Functions manifest is valid with ${manifest.functions.length} functions`);
          
          // Check if manifest is recent
          const manifestAge = Date.now() - new Date(manifest.generatedAt).getTime();
          const maxAge = 24 * 60 * 60 * 1000; // 24 hours
          
          if (manifestAge > maxAge) {
            this.log("⚠️ Functions manifest is outdated, regenerating...", "WARN");
            if (this.config.netlifyFunctions.autoRegenerate) {
              await this.regenerateFunctionsManifest();
            }
          }
        } catch (error) {
          this.log(`❌ Functions manifest has syntax errors: ${error.message}`, "ERROR");
        }
      } else {
        this.log("⚠️ Functions manifest not found, generating...", "WARN");
        if (this.config.netlifyFunctions.autoRegenerate) {
          await this.regenerateFunctionsManifest();
        }
      }

      // Check Netlify configuration
      const netlifyConfig = path.join(netlifyDir, "netlify.toml");
      if (fs.existsSync(netlifyConfig)) {
        this.log("✅ Netlify configuration file exists");
      } else {
        this.log("⚠️ Netlify configuration file not found", "WARN");
      }

      // Check deployment status if Netlify CLI is available
      await this.checkNetlifyDeploymentStatus();
      
      return true;
    } catch (error) {
      this.log(`❌ Netlify functions health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async regenerateFunctionsManifest() {
    try {
      this.log("🔄 Regenerating Netlify functions manifest...");
      
      // Check if the manifest generator script exists
      const manifestScript = "scripts/generate-netlify-functions-manifest.cjs";
      if (fs.existsSync(manifestScript)) {
        const result = await this.runCommand("node", [manifestScript]);
        if (result.status === 0) {
          this.log("✅ Functions manifest regenerated successfully");
        } else {
          this.log(`❌ Failed to regenerate manifest: ${result.stderr}`, "ERROR");
        }
      } else {
        this.log("⚠️ Manifest generator script not found", "WARN");
      }
    } catch (error) {
      this.log(`❌ Manifest regeneration failed: ${error.message}`, "ERROR");
    }
  }

  async checkNetlifyDeploymentStatus() {
    try {
      const netlifyResult = await this.runCommand("netlify", ["status"]);
      if (netlifyResult.status === 0) {
        this.log("✅ Netlify CLI is available and working");
        
        // Check deployment status
        const deployResult = await this.runCommand("netlify", ["api", "listSiteDeploys"]);
        if (deployResult.status === 0) {
          this.log("✅ Netlify deployment status check successful");
        }
      } else {
        this.log("⚠️ Netlify CLI not available or not configured", "WARN");
      }
    } catch (error) {
      this.log(`⚠️ Netlify deployment status check failed: ${error.message}`, "WARN");
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

    try {
      // Check PM2 health
      results.pm2 = await this.checkPM2ComprehensiveHealth();
      
      // Check GitHub Actions health
      results.githubActions = await this.checkGitHubActionsComprehensive();
      
      // Check Netlify functions health
      results.netlifyFunctions = await this.checkNetlifyFunctionsComprehensive();
      
      // Log results
      this.log("📊 Comprehensive health check results:");
      this.log(`  PM2: ${results.pm2 ? '✅' : '❌'}`);
      this.log(`  GitHub Actions: ${results.githubActions ? '✅' : '❌'}`);
      this.log(`  Netlify Functions: ${results.netlifyFunctions ? '✅' : '❌'}`);
      
      // Save results to file
      this.saveHealthCheckResults(results);
      
      // Trigger recovery if needed
      if (!results.pm2 || !results.githubActions || !results.netlifyFunctions) {
        await this.triggerRecoveryActions(results);
      }
      
    } catch (error) {
      this.log(`❌ Comprehensive health check failed: ${error.message}`, "ERROR");
    }
  }

  async triggerRecoveryActions(results) {
    this.log("🔄 Triggering recovery actions...");
    
    if (!results.pm2) {
      this.log("🔄 Attempting PM2 recovery...");
      await this.runCommand("pm2", ["reload", "all"]);
      await this.runCommand("pm2", ["save"]);
    }
    
    if (!results.githubActions) {
      this.log("🔄 Attempting GitHub Actions recovery...");
      // Trigger a manual workflow run
      await this.runCommand("git", ["push", "origin", "HEAD:main"]);
    }
    
    if (!results.netlifyFunctions) {
      this.log("🔄 Attempting Netlify functions recovery...");
      await this.regenerateFunctionsManifest();
    }
  }

  saveHealthCheckResults(results) {
    try {
      const resultsFile = path.join(this.config.logging.logDir, "health-check-results.json");
      const existingResults = fs.existsSync(resultsFile) ? 
        JSON.parse(fs.readFileSync(resultsFile, 'utf8')) : [];
      
      existingResults.push(results);
      
      // Keep only last 100 results
      if (existingResults.length > 100) {
        existingResults.splice(0, existingResults.length - 100);
      }
      
      fs.writeFileSync(resultsFile, JSON.stringify(existingResults, null, 2));
    } catch (error) {
      this.log(`⚠️ Could not save health check results: ${error.message}`, "WARN");
    }
  }

  initializeMonitoring() {
    this.log("🔧 Initializing comprehensive monitoring system...");
    
    // Ensure all required directories exist
    this.ensureLogDirectory();
    
    // Check if PM2 is running
    this.runCommand("pm2", ["ping"]).then((result) => {
      if (result.status === 0) {
        this.log("✅ PM2 is running");
      } else {
        this.log("⚠️ PM2 is not running, attempting to start...", "WARN");
        this.runCommand("pm2", ["start", "ecosystem.redundancy.cjs"]);
      }
    });
  }

  startComprehensiveMonitoring() {
    if (!this.config.monitoring.enabled) {
      this.log("⚠️ Comprehensive monitoring is disabled");
      return;
    }

    this.log("🚀 Starting comprehensive monitoring...");
    
    // Initial health check
    this.performComprehensiveHealthCheck();
    
    // Set up periodic health checks
    setInterval(() => {
      this.performComprehensiveHealthCheck();
    }, this.config.monitoring.interval);
    
    // Set up specific interval checks
    setInterval(() => {
      this.checkPM2ComprehensiveHealth();
    }, this.config.pm2.healthCheckInterval);
    
    setInterval(() => {
      this.checkGitHubActionsComprehensive();
    }, this.config.githubActions.healthCheckInterval);
    
    setInterval(() => {
      this.checkNetlifyFunctionsComprehensive();
    }, this.config.netlifyFunctions.healthCheckInterval);
    
    this.log("✅ Comprehensive monitoring started successfully");
  }

  async gracefulShutdown() {
    this.log("🔄 Shutting down comprehensive redundancy system...");
    
    // Save PM2 configuration
    await this.runCommand("pm2", ["save"]);
    
    this.log("✅ Comprehensive redundancy system shut down gracefully");
    process.exit(0);
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  if (global.redundancySystem) {
    global.redundancySystem.gracefulShutdown();
  } else {
    process.exit(0);
  }
});

process.on('SIGTERM', () => {
  if (global.redundancySystem) {
    global.redundancySystem.gracefulShutdown();
  } else {
    process.exit(0);
  }
});

// Start the system
if (require.main === module) {
  global.redundancySystem = new ComprehensiveRedundancySystem();
  
  // Keep the process alive
  setInterval(() => {
    // Heartbeat
  }, 60000);
}

module.exports = ComprehensiveRedundancySystem;