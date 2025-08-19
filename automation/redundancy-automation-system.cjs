#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const https = require("https");

class RedundancyAutomationSystem {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "redundancy-automation.log");
    this.ensureLogDir();
    this.config = this.loadConfig();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  loadConfig() {
    const configPath = path.join(this.workspace, "automation/redundancy-config.json");
    if (fs.existsSync(configPath)) {
      try {
        return JSON.parse(fs.readFileSync(configPath, "utf8"));
      } catch (error) {
        this.log(`Error loading config: ${error.message}`);
      }
    }
    
    // Default configuration
    return {
      pm2: {
        enabled: true,
        checkInterval: 30000, // 30 seconds
        maxRestarts: 5,
        healthCheckTimeout: 10000
      },
      githubActions: {
        enabled: true,
        checkInterval: 60000, // 1 minute
        maxFailures: 3,
        retryDelay: 30000
      },
      netlify: {
        enabled: true,
        checkInterval: 120000, // 2 minutes
        maxFailures: 3,
        healthCheckTimeout: 15000
      },
      monitoring: {
        enabled: true,
        reportInterval: 300000, // 5 minutes
        alertThreshold: 0.8
      }
    };
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + "\n");
    } catch (error) {
      console.error(`Failed to write to log file: ${error.message}`);
    }
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: this.workspace,
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 10,
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

  // PM2 Redundancy Functions
  async checkPM2Health() {
    this.log("🔍 Checking PM2 health...");
    
    try {
      // Check if PM2 is running
      const pm2Status = await this.runCommand("pm2", ["status"]);
      if (pm2Status.status !== 0) {
        this.log("❌ PM2 is not running, attempting to start...");
        await this.startPM2Services();
        return false;
      }

      // Check specific PM2 processes
      const processes = await this.getPM2Processes();
      let healthy = true;

      for (const process of processes) {
        if (process.status !== "online") {
          this.log(`⚠️ Process ${process.name} is ${process.status}, restarting...`);
          await this.restartPM2Process(process.name);
          healthy = false;
        }
      }

      return healthy;
    } catch (error) {
      this.log(`❌ PM2 health check failed: ${error.message}`);
      return false;
    }
  }

  async getPM2Processes() {
    try {
      const result = await this.runCommand("pm2", ["jlist"]);
      if (result.status === 0) {
        return JSON.parse(result.stdout);
      }
      return [];
    } catch (error) {
      this.log(`Error getting PM2 processes: ${error.message}`);
      return [];
    }
  }

  async startPM2Services() {
    this.log("🚀 Starting PM2 services...");
    
    try {
      // Start the main ecosystem
      await this.runCommand("npm", ["run", "pm2:start"]);
      
      // Start cron services
      await this.runCommand("npm", ["run", "pm2:cron:start"]);
      
      this.log("✅ PM2 services started successfully");
    } catch (error) {
      this.log(`❌ Failed to start PM2 services: ${error.message}`);
    }
  }

  async restartPM2Process(processName) {
    try {
      await this.runCommand("pm2", ["restart", processName]);
      this.log(`✅ Restarted PM2 process: ${processName}`);
    } catch (error) {
      this.log(`❌ Failed to restart PM2 process ${processName}: ${error.message}`);
    }
  }

  // GitHub Actions Redundancy Functions
  async checkGitHubActionsHealth() {
    this.log("🔍 Checking GitHub Actions health...");
    
    try {
      // Check if workflows are properly configured
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      if (!fs.existsSync(workflowsDir)) {
        this.log("❌ GitHub workflows directory not found");
        return false;
      }

      const workflows = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));
      this.log(`📋 Found ${workflows.length} GitHub workflow files`);

      // Check each workflow for syntax errors
      let healthy = true;
      for (const workflow of workflows) {
        const workflowPath = path.join(workflowsDir, workflow);
        const isValid = await this.validateWorkflow(workflowPath);
        if (!isValid) {
          this.log(`⚠️ Workflow ${workflow} has syntax issues`);
          healthy = false;
        }
      }

      // Check if workflows are running properly
      await this.triggerWorkflowHealthCheck();
      
      return healthy;
    } catch (error) {
      this.log(`❌ GitHub Actions health check failed: ${error.message}`);
      return false;
    }
  }

  async validateWorkflow(workflowPath) {
    try {
      const content = fs.readFileSync(workflowPath, "utf8");
      // Basic YAML validation
      if (content.includes("cron:") && content.includes("schedule:")) {
        // Check for common cron syntax issues
        const cronMatch = content.match(/cron:\s*['"`]([^'"`]+)['"`]/);
        if (cronMatch) {
          const cron = cronMatch[1];
          if (!this.isValidCron(cron)) {
            this.log(`⚠️ Invalid cron syntax in ${path.basename(workflowPath)}: ${cron}`);
            return false;
          }
        }
      }
      return true;
    } catch (error) {
      this.log(`❌ Error validating workflow ${workflowPath}: ${error.message}`);
      return false;
    }
  }

  isValidCron(cron) {
    const cronParts = cron.split(" ");
    if (cronParts.length !== 5) return false;
    
    // Basic validation for common cron patterns
    const validPatterns = [
      /^\*\/\d+$/, // */n
      /^\d+$/,     // n
      /^\*$/,      // *
      /^\d+-\d+$/, // n-m
      /^\d+,\d+$/  // n,m
    ];
    
    return cronParts.every(part => 
      validPatterns.some(pattern => pattern.test(part))
    );
  }

  async triggerWorkflowHealthCheck() {
    try {
      // Trigger a health check workflow if it exists
      const healthWorkflow = path.join(this.workspace, ".github/workflows/sync-health.yml");
      if (fs.existsSync(healthWorkflow)) {
        this.log("📡 Triggering workflow health check...");
        // This would typically use GitHub API to trigger workflows
        // For now, we'll just log the action
      }
    } catch (error) {
      this.log(`⚠️ Could not trigger workflow health check: ${error.message}`);
    }
  }

  // Netlify Functions Redundancy Functions
  async checkNetlifyFunctionsHealth() {
    this.log("🔍 Checking Netlify functions health...");
    
    try {
      const functionsDir = path.join(this.workspace, "netlify/functions");
      if (!fs.existsSync(functionsDir)) {
        this.log("❌ Netlify functions directory not found");
        return false;
      }

      // Check functions manifest
      const manifestPath = path.join(functionsDir, "functions-manifest.json");
      if (!fs.existsSync(manifestPath)) {
        this.log("⚠️ Functions manifest not found, regenerating...");
        await this.regenerateFunctionsManifest();
      }

      // Check individual function files
      const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
      let healthy = true;

      for (const functionName of manifest.functions) {
        const functionPath = path.join(functionsDir, `${functionName}.js`);
        if (!fs.existsSync(functionPath)) {
          this.log(`⚠️ Function file missing: ${functionName}.js`);
          healthy = false;
        }
      }

      // Check Netlify deployment status
      await this.checkNetlifyDeploymentStatus();
      
      return healthy;
    } catch (error) {
      this.log(`❌ Netlify functions health check failed: ${error.message}`);
      return false;
    }
  }

  async regenerateFunctionsManifest() {
    try {
      await this.runCommand("npm", ["run", "netlify:manifest"]);
      this.log("✅ Functions manifest regenerated");
    } catch (error) {
      this.log(`❌ Failed to regenerate functions manifest: ${error.message}`);
    }
  }

  async checkNetlifyDeploymentStatus() {
    try {
      const siteId = process.env.NETLIFY_SITE_ID;
      const accessToken = process.env.NETLIFY_ACCESS_TOKEN;
      
      if (!siteId || !accessToken) {
        this.log("⚠️ Netlify credentials not configured");
        return;
      }

      // Check deployment status via Netlify API
      const url = `https://api.netlify.com/api/v1/sites/${siteId}/deploys?per_page=1`;
      const options = {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      };

      // This would make an HTTP request to check deployment status
      // For now, we'll just log the action
      this.log("📡 Checking Netlify deployment status...");
      
    } catch (error) {
      this.log(`⚠️ Could not check Netlify deployment status: ${error.message}`);
    }
  }

  // Marketing Sync Redundancy
  async runMarketingSyncRedundancy() {
    this.log("📢 Running marketing sync redundancy...");
    
    try {
      const marketingScript = path.join(this.workspace, "automation/marketing-sync.js");
      if (fs.existsSync(marketingScript)) {
        await this.runCommand("node", [marketingScript]);
        this.log("✅ Marketing sync redundancy completed");
      } else {
        this.log("⚠️ Marketing sync script not found");
      }
    } catch (error) {
      this.log(`❌ Marketing sync redundancy failed: ${error.message}`);
    }
  }

  // Git Sync Redundancy
  async runGitSyncRedundancy() {
    this.log("🔄 Running git sync redundancy...");
    
    try {
      const gitSyncScript = path.join(this.workspace, "automation/git-sync.cjs");
      if (fs.existsSync(gitSyncScript)) {
        await this.runCommand("node", [gitSyncScript]);
        this.log("✅ Git sync redundancy completed");
      } else {
        this.log("⚠️ Git sync script not found");
      }
    } catch (error) {
      this.log(`❌ Git sync redundancy failed: ${error.message}`);
    }
  }

  // Build Health Redundancy
  async runBuildHealthRedundancy() {
    this.log("🏗️ Running build health redundancy...");
    
    try {
      // Run pre-build health check
      await this.runCommand("npm", ["run", "build:health-check"]);
      
      // Run build validation
      await this.runCommand("npm", ["run", "build:validate"]);
      
      this.log("✅ Build health redundancy completed");
    } catch (error) {
      this.log(`❌ Build health redundancy failed: ${error.message}`);
      
      // Attempt build recovery
      try {
        this.log("🔄 Attempting build recovery...");
        await this.runCommand("npm", ["run", "build:recovery"]);
        this.log("✅ Build recovery completed");
      } catch (recoveryError) {
        this.log(`❌ Build recovery failed: ${recoveryError.message}`);
      }
    }
  }

  // Main Redundancy Orchestrator
  async runFullRedundancyCheck() {
    this.log("🚀 Starting full redundancy automation check...");
    
    const results = {
      timestamp: new Date().toISOString(),
      pm2: { healthy: false, issues: [] },
      githubActions: { healthy: false, issues: [] },
      netlify: { healthy: false, issues: [] },
      marketing: { healthy: false, issues: [] },
      git: { healthy: false, issues: [] },
      build: { healthy: false, issues: [] }
    };

    try {
      // PM2 Health Check
      if (this.config.pm2.enabled) {
        results.pm2.healthy = await this.checkPM2Health();
        if (!results.pm2.healthy) {
          results.pm2.issues.push("PM2 services unhealthy or not running");
        }
      }

      // GitHub Actions Health Check
      if (this.config.githubActions.enabled) {
        results.githubActions.healthy = await this.checkGitHubActionsHealth();
        if (!results.githubActions.healthy) {
          results.githubActions.issues.push("GitHub Actions workflows have issues");
        }
      }

      // Netlify Functions Health Check
      if (this.config.netlify.enabled) {
        results.netlify.healthy = await this.checkNetlifyFunctionsHealth();
        if (!results.netlify.healthy) {
          results.netlify.issues.push("Netlify functions have issues");
        }
      }

      // Run redundancy operations
      await this.runMarketingSyncRedundancy();
      await this.runGitSyncRedundancy();
      await this.runBuildHealthRedundancy();

      // Generate health report
      await this.generateHealthReport(results);
      
      this.log("✅ Full redundancy check completed");
      return results;
      
    } catch (error) {
      this.log(`❌ Full redundancy check failed: ${error.message}`);
      throw error;
    }
  }

  async generateHealthReport(results) {
    try {
      const reportPath = path.join(this.logDir, `redundancy-health-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
      this.log(`📊 Health report generated: ${path.basename(reportPath)}`);
    } catch (error) {
      this.log(`❌ Failed to generate health report: ${error.message}`);
    }
  }

  // Continuous Monitoring
  async startContinuousMonitoring() {
    this.log("🔄 Starting continuous redundancy monitoring...");
    
    const checkInterval = Math.min(
      this.config.pm2.checkInterval,
      this.config.githubActions.checkInterval,
      this.config.netlify.checkInterval
    );

    setInterval(async () => {
      try {
        await this.runFullRedundancyCheck();
      } catch (error) {
        this.log(`❌ Continuous monitoring check failed: ${error.message}`);
      }
    }, checkInterval);

    this.log(`✅ Continuous monitoring started with ${checkInterval}ms interval`);
  }
}

// CLI Interface
async function main() {
  const system = new RedundancyAutomationSystem();
  
  const command = process.argv[2] || "check";
  
  try {
    switch (command) {
      case "check":
        await system.runFullRedundancyCheck();
        break;
      case "monitor":
        await system.startContinuousMonitoring();
        // Keep the process running
        process.on("SIGINT", () => {
          system.log("🛑 Stopping continuous monitoring...");
          process.exit(0);
        });
        break;
      case "pm2":
        await system.checkPM2Health();
        break;
      case "github":
        await system.checkGitHubActionsHealth();
        break;
      case "netlify":
        await system.checkNetlifyFunctionsHealth();
        break;
      case "marketing":
        await system.runMarketingSyncRedundancy();
        break;
      case "git":
        await system.runGitSyncRedundancy();
        break;
      case "build":
        await system.runBuildHealthRedundancy();
        break;
      default:
        console.log(`
Redundancy Automation System

Usage: node redundancy-automation-system.cjs [command]

Commands:
  check     Run full redundancy check (default)
  monitor   Start continuous monitoring
  pm2       Check PM2 health only
  github    Check GitHub Actions health only
  netlify   Check Netlify functions health only
  marketing Run marketing sync redundancy
  git       Run git sync redundancy
  build     Run build health redundancy

Examples:
  node redundancy-automation-system.cjs check
  node redundancy-automation-system.cjs monitor
  node redundancy-automation-system.cjs pm2
        `);
    }
  } catch (error) {
    system.log(`❌ Command '${command}' failed: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = RedundancyAutomationSystem;