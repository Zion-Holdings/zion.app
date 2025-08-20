#!/usr/bin/env node
"use strict";

const { spawnSync, execSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class UltimateRedundancySystem {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.ensureLogDirectory();
    
    this.config = {
      pm2: {
        ecosystemFiles: [
          "ecosystem.pm2.cjs",
          "ecosystem.redundancy.cjs",
          "ecosystem.comprehensive-redundancy.cjs"
        ],
        processes: [
          "zion-auto-sync",
          "zion-auto-sync-cron",
          "redundancy-automation-system",
          "redundancy-health-monitor",
          "redundancy-git-sync",
          "redundancy-build-monitor",
          "comprehensive-redundancy-orchestrator",
          "enhanced-pm2-redundancy",
          "enhanced-github-actions-redundancy",
          "enhanced-netlify-functions-redundancy"
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
        fallbackScripts: [
          "automation/marketing-sync.js",
          "automation/git-sync.cjs",
          "automation/pm2-auto-sync.js",
          "automation/redundancy-automation-system.cjs"
        ],
        backupTriggers: true
      },
      netlifyFunctions: {
        manifestFile: "netlify/functions/functions-manifest.json",
        healthCheckInterval: 120000,
        maxFailureThreshold: 2,
        autoRegenerate: true,
        deploymentCheck: true,
        functions: [
          "a11y-alt-text-runner",
          "adaptive-orchestrator",
          "ai-changelog-runner",
          "ai-trends-radar-runner",
          "anchor-links-auto-fixer",
          "auto-discovery-runner",
          "auto-scheduler",
          "automation-matrix",
          "autonomous-invention-orchestrator",
          "autonomous-meta-orchestrator",
          "broken-image-scanner",
          "broken-image-scanner-runner",
          "canonical-auditor",
          "cloud_deep_research",
          "cloud_orchestrator",
          "code-smell-audit-runner",
          "component-coupling-graph-runner",
          "component-props-docs-runner",
          "component-size-report",
          "content-freshness-score-runner",
          "continuous-front-runner",
          "continuous-orchestrator",
          "dead-code-audit",
          "dead-code-report",
          "deps-auto-upgrade-runner",
          "docs-index-runner",
          "docs-search-index-runner",
          "duplicate-media-finder-runner",
          "external-link-check-runner",
          "fast-front-promoter",
          "fast-orchestrator",
          "feature-advertiser",
          "features-capabilities-benefits-advertiser",
          "front-ads-promoter",
          "front-enhancer",
          "front-index-futurizer",
          "front-index-orchestrator",
          "front-index-scheduler",
          "front-maximizer",
          "front-visionary-expander",
          "frontpage-enhancer",
          "frontpage-scheduler",
          "headers-enforcer",
          "home-visionary-expander",
          "homepage-advertiser-scheduler",
          "homepage-enhancer",
          "homepage-updater",
          "homepage-updater-scheduler",
          "homepage_advertiser",
          "hyper-front-index-accelerator",
          "image-optimizer-runner",
          "innovation-lab",
          "innovations-promoter",
          "intelligent-meta-orchestrator",
          "internal-link-graph-runner",
          "knowledge-pack-runner",
          "license-compliance-auditor"
        ]
      },
      npmScripts: {
        critical: [
          "build",
          "build:health-check",
          "build:validate",
          "build:recovery",
          "build:smart",
          "build:orchestrator"
        ],
        automation: [
          "redundancy:start",
          "redundancy:pm2",
          "redundancy:github",
          "redundancy:netlify",
          "automation:pm2",
          "automation:git-sync"
        ],
        monitoring: [
          "redundancy:status",
          "redundancy:health",
          "redundancy:logs"
        ]
      }
    };
    
    this.status = {
      pm2: { healthy: false, processes: [], lastCheck: null },
      githubActions: { healthy: false, workflows: [], lastCheck: null },
      netlifyFunctions: { healthy: false, functions: [], lastCheck: null },
      npmScripts: { healthy: false, scripts: [], lastCheck: null },
      overall: { healthy: false, lastCheck: null }
    };
    
    this.monitoring = false;
    this.recoveryMode = false;
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, `ultimate-redundancy-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logMessage + "\n");
  }

  async executeCommand(command, options = {}) {
    return new Promise((resolve, reject) => {
      const { timeout = 30000, cwd = this.workspace } = options;
      
      const child = spawn(command, [], {
        shell: true,
        cwd,
        stdio: ['pipe', 'pipe', 'pipe']
      });

      let stdout = '';
      let stderr = '';
      
      child.stdout.on('data', (data) => {
        stdout += data.toString();
      });
      
      child.stderr.on('data', (data) => {
        stderr += data.toString();
      });
      
      const timeoutId = setTimeout(() => {
        child.kill('SIGTERM');
        reject(new Error(`Command timed out after ${timeout}ms`));
      }, timeout);
      
      child.on('close', (code) => {
        clearTimeout(timeoutId);
        if (code === 0) {
          resolve({ stdout, stderr, code });
        } else {
          reject(new Error(`Command failed with code ${code}: ${stderr}`));
        }
      });
      
      child.on('error', (error) => {
        clearTimeout(timeoutId);
        reject(error);
      });
    });
  }

  async checkPM2Health() {
    try {
      this.log("Checking PM2 health...");
      
      // Check PM2 daemon
      const pm2Status = await this.executeCommand("pm2 ping");
      if (pm2Status.code !== 0) {
        this.log("PM2 daemon not responding, attempting to start...", "WARN");
        await this.executeCommand("pm2 start");
      }
      
      // Get PM2 process list
      const pm2List = await this.executeCommand("pm2 list");
      const processes = [];
      
      // Parse PM2 list output manually since --format json might not be available
      const lines = pm2List.stdout.split('\n');
      for (const line of lines) {
        if (line.includes('│') && !line.includes('App name')) {
          const parts = line.split('│').map(p => p.trim()).filter(p => p);
          if (parts.length >= 4) {
            processes.push({
              name: parts[1],
              pm2_env: { status: parts[4] }
            });
          }
        }
      }
      
      // Check each configured process
      const healthyProcesses = [];
      const unhealthyProcesses = [];
      
      for (const processName of this.config.pm2.processes) {
        const process = processes.find(p => p.name === processName);
        if (process && process.pm2_env.status === "online") {
          healthyProcesses.push(processName);
        } else {
          unhealthyProcesses.push(processName);
          this.log(`Process ${processName} is unhealthy: ${process?.pm2_env?.status || 'not found'}`, "WARN");
        }
      }
      
      this.status.pm2 = {
        healthy: unhealthyProcesses.length === 0,
        processes: healthyProcesses,
        unhealthy: unhealthyProcesses,
        lastCheck: new Date()
      };
      
      this.log(`PM2 Health: ${this.status.pm2.healthy ? 'HEALTHY' : 'UNHEALTHY'} - ${healthyProcesses.length}/${this.config.pm2.processes.length} processes healthy`);
      
      return this.status.pm2.healthy;
    } catch (error) {
      this.log(`PM2 health check failed: ${error.message}`, "ERROR");
      this.status.pm2 = { healthy: false, processes: [], lastCheck: new Date(), error: error.message };
      return false;
    }
  }

  async checkGitHubActionsHealth() {
    try {
      this.log("Checking GitHub Actions health...");
      
      // Check if workflows exist
      const workflows = [];
      const missingWorkflows = [];
      
      for (const workflow of this.config.githubActions.workflows) {
        if (fs.existsSync(workflow)) {
          workflows.push(workflow);
        } else {
          missingWorkflows.push(workflow);
          this.log(`Workflow ${workflow} not found`, "WARN");
        }
      }
      
      // Check if we can access GitHub API (basic check)
      let canAccessGitHub = false;
      try {
        const gitRemote = await this.executeCommand("git remote get-url origin");
        canAccessGitHub = gitRemote.stdout.includes("github.com");
      } catch (error) {
        this.log("Cannot access GitHub remote", "WARN");
      }
      
      this.status.githubActions = {
        healthy: missingWorkflows.length === 0 && canAccessGitHub,
        workflows,
        missing: missingWorkflows,
        canAccessGitHub,
        lastCheck: new Date()
      };
      
      this.log(`GitHub Actions Health: ${this.status.githubActions.healthy ? 'HEALTHY' : 'UNHEALTHY'} - ${workflows.length}/${this.config.githubActions.workflows.length} workflows found`);
      
      return this.status.githubActions.healthy;
    } catch (error) {
      this.log(`GitHub Actions health check failed: ${error.message}`, "ERROR");
      this.status.githubActions = { healthy: false, workflows: [], lastCheck: new Date(), error: error.message };
      return false;
    }
  }

  async checkNetlifyFunctionsHealth() {
    try {
      this.log("Checking Netlify Functions health...");
      
      // Check manifest file
      let manifestExists = false;
      let manifestData = null;
      
      if (fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        manifestExists = true;
        try {
          manifestData = JSON.parse(fs.readFileSync(this.config.netlifyFunctions.manifestFile, 'utf8'));
        } catch (error) {
          this.log(`Failed to parse Netlify manifest: ${error.message}`, "WARN");
        }
      }
      
      // Check if functions directory exists
      const functionsDir = path.dirname(this.config.netlifyFunctions.manifestFile);
      const functionsDirExists = fs.existsSync(functionsDir);
      
      this.status.netlifyFunctions = {
        healthy: manifestExists && functionsDirExists,
        manifestExists,
        functionsDirExists,
        manifestData,
        lastCheck: new Date()
      };
      
      this.log(`Netlify Functions Health: ${this.status.netlifyFunctions.healthy ? 'HEALTHY' : 'UNHEALTHY'} - Manifest: ${manifestExists}, Directory: ${functionsDirExists}`);
      
      return this.status.netlifyFunctions.healthy;
    } catch (error) {
      this.log(`Netlify Functions health check failed: ${error.message}`, "ERROR");
      this.status.netlifyFunctions = { healthy: false, lastCheck: new Date(), error: error.message };
      return false;
    }
  }

  async checkNPMScriptsHealth() {
    try {
      this.log("Checking NPM scripts health...");
      
      // Check if package.json exists and has required scripts
      const packageJsonPath = path.join(this.workspace, "package.json");
      if (!fs.existsSync(packageJsonPath)) {
        throw new Error("package.json not found");
      }
      
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const scripts = packageJson.scripts || {};
      
      const availableScripts = [];
      const missingScripts = [];
      
      for (const processName of this.config.npmScripts.critical) {
        if (scripts[processName]) {
          availableScripts.push(processName);
        } else {
          missingScripts.push(processName);
        }
      }
      
      this.status.npmScripts = {
        healthy: missingScripts.length === 0,
        scripts: availableScripts,
        missing: missingScripts,
        lastCheck: new Date()
      };
      
      this.log(`NPM Scripts Health: ${this.status.npmScripts.healthy ? 'HEALTHY' : 'UNHEALTHY'} - ${availableScripts.length}/${this.config.npmScripts.critical.length} scripts available`);
      
      return this.status.npmScripts.healthy;
    } catch (error) {
      this.log(`NPM Scripts health check failed: ${error.message}`, "ERROR");
      this.status.npmScripts = { healthy: false, scripts: [], lastCheck: new Date(), error: error.message };
      return false;
    }
  }

  async performHealthCheck() {
    this.log("Performing comprehensive health check...");
    
    const pm2Healthy = await this.checkPM2Health();
    const githubActionsHealthy = await this.checkGitHubActionsHealth();
    const netlifyFunctionsHealthy = await this.checkNetlifyFunctionsHealth();
    const npmScriptsHealthy = await this.checkNPMScriptsHealth();
    
    this.status.overall = {
      healthy: pm2Healthy && githubActionsHealthy && netlifyFunctionsHealthy && npmScriptsHealthy,
      lastCheck: new Date(),
      components: {
        pm2: pm2Healthy,
        githubActions: githubActionsHealthy,
        netlifyFunctions: netlifyFunctionsHealthy,
        npmScripts: npmScriptsHealthy
      }
    };
    
    this.log(`Overall Health: ${this.status.overall.healthy ? 'HEALTHY' : 'UNHEALTHY'}`);
    this.log(`Component Status: PM2(${pm2Healthy ? '✓' : '✗'}) GitHub(${githubActionsHealthy ? '✓' : '✗'}) Netlify(${netlifyFunctionsHealthy ? '✓' : '✗'}) NPM(${npmScriptsHealthy ? '✓' : '✗'})`);
    
    return this.status.overall.healthy;
  }

  async startPM2Processes() {
    try {
      this.log("Starting PM2 processes...");
      
      // Start with main ecosystem file
      await this.executeCommand("pm2 start ecosystem.pm2.cjs --update-env");
      
      // Start redundancy processes
      if (fs.existsSync("ecosystem.redundancy.cjs")) {
        await this.executeCommand("pm2 start ecosystem.redundancy.cjs --update-env");
      }
      
      if (fs.existsSync("ecosystem.comprehensive-redundancy.cjs")) {
        await this.executeCommand("pm2 start ecosystem.comprehensive-redundancy.cjs --update-env");
      }
      
      // Save PM2 configuration
      await this.executeCommand("pm2 save");
      
      this.log("PM2 processes started successfully");
      return true;
    } catch (error) {
      this.log(`Failed to start PM2 processes: ${error.message}`, "ERROR");
      return false;
    }
  }

  async triggerGitHubActions() {
    try {
      this.log("Triggering GitHub Actions workflows...");
      
      // Use gh CLI if available, otherwise use GitHub API
      try {
        await this.executeCommand("gh workflow run marketing-sync.yml");
        await this.executeCommand("gh workflow run sync-health.yml");
        this.log("GitHub Actions workflows triggered via gh CLI");
      } catch (error) {
        this.log("gh CLI not available, using fallback scripts", "WARN");
        // Run fallback scripts locally
        for (const script of this.config.githubActions.fallbackScripts) {
          if (fs.existsSync(script)) {
            try {
              await this.executeCommand(`node ${script}`);
              this.log(`Fallback script ${script} executed successfully`);
            } catch (scriptError) {
              this.log(`Fallback script ${script} failed: ${scriptError.message}`, "WARN");
            }
          }
        }
      }
      
      return true;
    } catch (error) {
      this.log(`Failed to trigger GitHub Actions: ${error.message}`, "ERROR");
      return false;
    }
  }

  async regenerateNetlifyFunctions() {
    try {
      this.log("Regenerating Netlify Functions manifest...");
      
      // Run the manifest generation script
      if (fs.existsSync("scripts/generate-netlify-functions-manifest.cjs")) {
        await this.executeCommand("node scripts/generate-netlify-functions-manifest.cjs");
        this.log("Netlify Functions manifest regenerated");
      }
      
      // Check if we need to run npm script
      try {
        await this.executeCommand("npm run netlify:manifest");
        this.log("Netlify manifest generated via npm script");
      } catch (error) {
        this.log("npm script failed, using direct script execution", "WARN");
      }
      
      return true;
    } catch (error) {
      this.log(`Failed to regenerate Netlify Functions: ${error.message}`, "ERROR");
      return false;
    }
  }

  async runNPMScripts() {
    try {
      this.log("Running critical NPM scripts...");
      
      for (const script of this.config.npmScripts.critical) {
        try {
          this.log(`Running npm run ${script}...`);
          await this.executeCommand(`npm run ${script}`);
          this.log(`npm run ${script} completed successfully`);
        } catch (error) {
          this.log(`npm run ${script} failed: ${error.message}`, "WARN");
        }
      }
      
      return true;
    } catch (error) {
      this.log(`Failed to run NPM scripts: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performRecovery() {
    if (this.recoveryMode) {
      this.log("Recovery already in progress, skipping...");
      return false;
    }
    
    this.recoveryMode = true;
    this.log("Starting recovery procedures...");
    
    try {
      // PM2 Recovery
      if (!this.status.pm2.healthy) {
        this.log("Recovering PM2 processes...");
        await this.startPM2Processes();
      }
      
      // GitHub Actions Recovery
      if (!this.status.githubActions.healthy) {
        this.log("Recovering GitHub Actions...");
        await this.triggerGitHubActions();
      }
      
      // Netlify Functions Recovery
      if (!this.status.netlifyFunctions.healthy) {
        this.log("Recovering Netlify Functions...");
        await this.regenerateNetlifyFunctions();
      }
      
      // NPM Scripts Recovery
      if (!this.status.npmScripts.healthy) {
        this.log("Recovering NPM scripts...");
        await this.runNPMScripts();
      }
      
      this.log("Recovery procedures completed");
      return true;
    } catch (error) {
      this.log(`Recovery failed: ${error.message}`, "ERROR");
      return false;
    } finally {
      this.recoveryMode = false;
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("Monitoring already active");
      return;
    }
    
    this.monitoring = true;
    this.log("Starting monitoring mode...");
    
    const monitorInterval = setInterval(async () => {
      if (!this.monitoring) {
        clearInterval(monitorInterval);
        return;
      }
      
      try {
        const healthy = await this.performHealthCheck();
        
        if (!healthy && this.config.pm2.autoRecovery) {
          this.log("System unhealthy, attempting recovery...");
          await this.performRecovery();
        }
      } catch (error) {
        this.log(`Monitoring error: ${error.message}`, "ERROR");
      }
    }, this.config.pm2.healthCheckInterval);
    
    this.log("Monitoring mode started");
  }

  stopMonitoring() {
    this.monitoring = false;
    this.log("Monitoring mode stopped");
  }

  getStatus() {
    return {
      ...this.status,
      monitoring: this.monitoring,
      recoveryMode: this.recoveryMode,
      uptime: process.uptime(),
      memory: process.memoryUsage(),
      timestamp: new Date().toISOString()
    };
  }

  async runCommand(command) {
    switch (command) {
      case "start":
        await this.startPM2Processes();
        await this.performHealthCheck();
        break;
        
      case "health":
        await this.performHealthCheck();
        break;
        
      case "recovery":
        await this.performRecovery();
        break;
        
      case "monitor":
        await this.startMonitoring();
        // Keep process alive by not resolving the promise
        return new Promise(() => {});
        break;
        
      case "stop-monitor":
        this.stopMonitoring();
        break;
        
      case "status":
        console.log(JSON.stringify(this.getStatus(), null, 2));
        break;
        
      case "trigger-github":
        await this.triggerGitHubActions();
        break;
        
      case "regenerate-netlify":
        await this.regenerateNetlifyFunctions();
        break;
        
      case "run-npm":
        await this.runNPMScripts();
        break;
        
      default:
        this.log(`Unknown command: ${command}`, "ERROR");
        this.log("Available commands: start, health, recovery, monitor, stop-monitor, status, trigger-github, regenerate-netlify, run-npm");
    }
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new UltimateRedundancySystem();
  const command = process.argv[2] || "status";
  
  orchestrator.runCommand(command).catch(error => {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  });
}

module.exports = UltimateRedundancySystem;
