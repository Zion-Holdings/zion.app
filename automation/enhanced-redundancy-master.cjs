#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const https = require("https");

class EnhancedRedundancyMaster {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "enhanced-redundancy-master.log");
    this.ensureLogDir();
    this.config = this.loadConfig();
    this.monitoring = false;
    this.checkInterval = null;
    this.healthStatus = {
      pm2: { status: 'unknown', lastCheck: null, failures: 0 },
      github: { status: 'unknown', lastCheck: null, failures: 0 },
      netlify: { status: 'unknown', lastCheck: null, failures: 0 },
      overall: { status: 'unknown', lastCheck: null }
    };
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
        const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
        return config.enhanced || {};
      } catch (error) {
        this.log(`Error loading enhanced config: ${error.message}`);
      }
    }
    
    return {
      enabled: true,
      checkInterval: 30000,
      maxFailures: 3,
      autoRecovery: true,
      recoveryDelay: 10000,
      healthCheckTimeout: 15000,
      alertThreshold: 2,
      systems: {
        pm2: { enabled: true, priority: 'high' },
        github: { enabled: true, priority: 'medium' },
        netlify: { enabled: true, priority: 'medium' }
      }
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
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
        timeout: options.timeout || this.config.healthCheckTimeout || 15000,
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
    try {
      this.log("🔍 Checking PM2 health...");
      
      // Check PM2 daemon status
      const pm2Status = await this.runCommand("pm2", ["ping"]);
      if (pm2Status.status !== 0) {
        this.log("❌ PM2 daemon is not responding", "ERROR");
        return { status: 'failed', error: 'PM2 daemon not responding' };
      }

      // Check PM2 processes
      const pm2List = await this.runCommand("pm2", ["jlist"]);
      if (pm2List.status === 0) {
        const processes = JSON.parse(pm2List.stdout);
        const runningProcesses = processes.filter(p => p.pm2_env.status === 'online');
        
        if (runningProcesses.length === 0) {
          this.log("❌ No PM2 processes are running", "ERROR");
          return { status: 'failed', error: 'No processes running' };
        }

        this.log(`✅ PM2 health check passed - ${runningProcesses.length} processes running`);
        return { status: 'healthy', processes: runningProcesses.length };
      } else {
        this.log("❌ Failed to get PM2 process list", "ERROR");
        return { status: 'failed', error: 'Cannot get process list' };
      }
    } catch (error) {
      this.log(`❌ PM2 health check error: ${error.message}`, "ERROR");
      return { status: 'failed', error: error.message };
    }
  }

  async checkGitHubActionsHealth() {
    try {
      this.log("🔍 Checking GitHub Actions health...");
      
      // Check workflows directory
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      if (!fs.existsSync(workflowsDir)) {
        this.log("❌ GitHub workflows directory not found", "ERROR");
        return { status: 'failed', error: 'Workflows directory missing' };
      }

      // Check workflow files
      const workflowFiles = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));
      if (workflowFiles.length === 0) {
        this.log("❌ No workflow files found", "ERROR");
        return { status: 'failed', error: 'No workflow files' };
      }

      // Validate workflow syntax (basic check)
      let validWorkflows = 0;
      for (const workflow of workflowFiles) {
        try {
          const workflowPath = path.join(workflowsDir, workflow);
          const content = fs.readFileSync(workflowPath, 'utf8');
          if (content.includes('name:') && content.includes('on:')) {
            validWorkflows++;
          }
        } catch (error) {
          this.log(`⚠️ Warning: Could not validate workflow ${workflow}`, "WARN");
        }
      }

      if (validWorkflows === 0) {
        this.log("❌ No valid workflow files found", "ERROR");
        return { status: 'failed', error: 'No valid workflows' };
      }

      this.log(`✅ GitHub Actions health check passed - ${validWorkflows} valid workflows`);
      return { status: 'healthy', workflows: validWorkflows };
    } catch (error) {
      this.log(`❌ GitHub Actions health check error: ${error.message}`, "ERROR");
      return { status: 'failed', error: error.message };
    }
  }

  async checkNetlifyFunctionsHealth() {
    try {
      this.log("🔍 Checking Netlify functions health...");
      
      // Check netlify directory
      const netlifyDir = path.join(this.workspace, "netlify");
      if (!fs.existsSync(netlifyDir)) {
        this.log("❌ Netlify directory not found", "ERROR");
        return { status: 'failed', error: 'Netlify directory missing' };
      }

      // Check functions directory
      const functionsDir = path.join(netlifyDir, "functions");
      if (!fs.existsSync(functionsDir)) {
        this.log("❌ Netlify functions directory not found", "ERROR");
        return { status: 'failed', error: 'Functions directory missing' };
      }

      // Check functions manifest
      const manifestPath = path.join(netlifyDir, "functions/functions-manifest.json");
      if (!fs.existsSync(manifestPath)) {
        this.log("❌ Netlify functions manifest not found", "ERROR");
        return { status: 'failed', error: 'Functions manifest missing' };
      }

      // Validate manifest
      try {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        if (!manifest.functions || !Array.isArray(manifest.functions)) {
          this.log("❌ Invalid functions manifest format", "ERROR");
          return { status: 'failed', error: 'Invalid manifest format' };
        }

        this.log(`✅ Netlify functions health check passed - ${manifest.functions.length} functions`);
        return { status: 'healthy', functions: manifest.functions.length };
      } catch (error) {
        this.log(`❌ Failed to parse functions manifest: ${error.message}`, "ERROR");
        return { status: 'failed', error: 'Manifest parse error' };
      }
    } catch (error) {
      this.log(`❌ Netlify functions health check error: ${error.message}`, "ERROR");
      return { status: 'failed', error: error.message };
    }
  }

  async performHealthCheck() {
    this.log("🚀 Starting comprehensive health check...");
    
    const startTime = Date.now();
    
    // Check all systems
    const pm2Health = await this.checkPM2Health();
    const githubHealth = await this.checkGitHubActionsHealth();
    const netlifyHealth = await this.checkNetlifyFunctionsHealth();
    
    // Update health status
    this.healthStatus.pm2 = {
      status: pm2Health.status,
      lastCheck: new Date(),
      failures: pm2Health.status === 'failed' ? this.healthStatus.pm2.failures + 1 : 0
    };
    
    this.healthStatus.github = {
      status: githubHealth.status,
      lastCheck: new Date(),
      failures: githubHealth.status === 'failed' ? this.healthStatus.github.failures + 1 : 0
    };
    
    this.healthStatus.netlify = {
      status: netlifyHealth.status,
      lastCheck: new Date(),
      failures: netlifyHealth.status === 'failed' ? this.healthStatus.netlify.failures + 1 : 0
    };
    
    // Determine overall status
    const allHealthy = [pm2Health, githubHealth, netlifyHealth].every(h => h.status === 'healthy');
    this.healthStatus.overall = {
      status: allHealthy ? 'healthy' : 'degraded',
      lastCheck: new Date()
    };
    
    const duration = Date.now() - startTime;
    this.log(`🏁 Health check completed in ${duration}ms`);
    
    // Log summary
    this.log(`📊 Health Summary:`);
    this.log(`   PM2: ${pm2Health.status} ${pm2Health.status === 'healthy' ? '✅' : '❌'}`);
    this.log(`   GitHub Actions: ${githubHealth.status} ${githubHealth.status === 'healthy' ? '✅' : '❌'}`);
    this.log(`   Netlify Functions: ${netlifyHealth.status} ${netlifyHealth.status === 'healthy' ? '✅' : '❌'}`);
    this.log(`   Overall: ${this.healthStatus.overall.status} ${this.healthStatus.overall.status === 'healthy' ? '✅' : '⚠️'}`);
    
    return this.healthStatus;
  }

  async autoRecovery() {
    if (!this.config.autoRecovery) {
      this.log("🔄 Auto-recovery is disabled", "WARN");
      return;
    }
    
    this.log("🔄 Starting auto-recovery process...");
    
    // Check PM2 failures
    if (this.healthStatus.pm2.failures >= this.config.alertThreshold) {
      this.log("🔄 Attempting PM2 recovery...", "WARN");
      await this.recoverPM2();
    }
    
    // Check GitHub Actions failures
    if (this.healthStatus.github.failures >= this.config.alertThreshold) {
      this.log("🔄 Attempting GitHub Actions recovery...", "WARN");
      await this.recoverGitHubActions();
    }
    
    // Check Netlify failures
    if (this.healthStatus.netlify.failures >= this.config.alertThreshold) {
      this.log("🔄 Attempting Netlify functions recovery...", "WARN");
      await this.recoverNetlifyFunctions();
    }
  }

  async recoverPM2() {
    try {
      this.log("🔄 Recovering PM2 system...");
      
      // Restart PM2 daemon
      await this.runCommand("pm2", ["kill"]);
      await this.runCommand("pm2", ["resurrect"]);
      
      // Start redundancy ecosystem
      await this.runCommand("pm2", ["start", "ecosystem-redundancy.pm2.cjs"]);
      await this.runCommand("pm2", ["save"]);
      
      this.log("✅ PM2 recovery completed");
      this.healthStatus.pm2.failures = 0;
    } catch (error) {
      this.log(`❌ PM2 recovery failed: ${error.message}`, "ERROR");
    }
  }

  async recoverGitHubActions() {
    try {
      this.log("🔄 Recovering GitHub Actions...");
      
      // Regenerate workflow files if needed
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      if (fs.existsSync(workflowsDir)) {
        // Check if backup workflows exist
        const backupWorkflows = fs.readdirSync(workflowsDir).filter(f => f.includes('backup'));
        if (backupWorkflows.length > 0) {
          this.log("🔄 Restoring from backup workflows...");
          for (const backup of backupWorkflows) {
            const original = backup.replace('-backup', '');
            const backupPath = path.join(workflowsDir, backup);
            const originalPath = path.join(workflowsDir, original);
            
            if (fs.existsSync(backupPath)) {
              fs.copyFileSync(backupPath, originalPath);
              this.log(`✅ Restored ${original} from backup`);
            }
          }
        }
      }
      
      this.log("✅ GitHub Actions recovery completed");
      this.healthStatus.github.failures = 0;
    } catch (error) {
      this.log(`❌ GitHub Actions recovery failed: ${error.message}`, "ERROR");
    }
  }

  async recoverNetlifyFunctions() {
    try {
      this.log("🔄 Recovering Netlify functions...");
      
      // Regenerate functions manifest
      const manifestScript = path.join(this.workspace, "scripts/generate-netlify-functions-manifest.cjs");
      if (fs.existsSync(manifestScript)) {
        await this.runCommand("node", [manifestScript]);
        this.log("✅ Regenerated Netlify functions manifest");
      }
      
      this.log("✅ Netlify functions recovery completed");
      this.healthStatus.netlify.failures = 0;
    } catch (error) {
      this.log(`❌ Netlify functions recovery failed: ${error.message}`, "ERROR");
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("⚠️ Monitoring is already running", "WARN");
      return;
    }
    
    this.log("🚀 Starting enhanced redundancy monitoring...");
    this.monitoring = true;
    
    // Initial health check
    await this.performHealthCheck();
    
    // Start monitoring loop
    this.checkInterval = setInterval(async () => {
      try {
        await this.performHealthCheck();
        await this.autoRecovery();
      } catch (error) {
        this.log(`❌ Monitoring loop error: ${error.message}`, "ERROR");
      }
    }, this.config.checkInterval);
    
    this.log(`✅ Enhanced redundancy monitoring started (interval: ${this.config.checkInterval}ms)`);
  }

  async stopMonitoring() {
    if (!this.monitoring) {
      this.log("⚠️ Monitoring is not running", "WARN");
      return;
    }
    
    this.log("🛑 Stopping enhanced redundancy monitoring...");
    
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    
    this.monitoring = false;
    this.log("✅ Enhanced redundancy monitoring stopped");
  }

  getStatus() {
    return {
      monitoring: this.monitoring,
      config: this.config,
      health: this.healthStatus,
      uptime: this.monitoring ? Date.now() - (this.healthStatus.overall.lastCheck?.getTime() || Date.now()) : 0
    };
  }

  async run() {
    const command = process.argv[2];
    
    switch (command) {
      case 'start':
        await this.startMonitoring();
        break;
      case 'stop':
        await this.stopMonitoring();
        break;
      case 'status':
        console.log(JSON.stringify(this.getStatus(), null, 2));
        break;
      case 'health':
        const health = await this.performHealthCheck();
        console.log(JSON.stringify(health, null, 2));
        break;
      case 'recover':
        await this.autoRecovery();
        break;
      default:
        console.log(`
Enhanced Redundancy Master - Comprehensive Automation Redundancy System

Usage:
  node automation/enhanced-redundancy-master.cjs [command]

Commands:
  start     - Start monitoring and auto-recovery
  stop      - Stop monitoring
  status    - Show current status
  health    - Perform health check
  recover   - Trigger auto-recovery

Features:
  ✅ PM2 Process Monitoring & Recovery
  ✅ GitHub Actions Workflow Health
  ✅ Netlify Functions Validation
  ✅ Automatic Failure Detection
  ✅ Intelligent Auto-Recovery
  ✅ Comprehensive Health Reporting
        `);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const master = new EnhancedRedundancyMaster();
  master.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = EnhancedRedundancyMaster;