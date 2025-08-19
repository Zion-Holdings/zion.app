#!/usr/bin/env node
"use strict";

const { spawnSync, spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const cron = require("node-cron");
const https = require("https");

class ComprehensiveRedundancySystem {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "comprehensive-redundancy.log");
    this.ensureLogDir();
    this.config = this.loadConfig();
    
    // Initialize component managers
    this.pm2Manager = new PM2RedundancyManager(this);
    this.githubManager = new GitHubActionsRedundancyManager(this);
    this.netlifyManager = new NetlifyFunctionsRedundancyManager(this);
    
    // Status tracking
    this.systemStatus = {
      pm2: { status: 'unknown', health: 'unknown', lastCheck: null },
      github: { status: 'unknown', health: 'unknown', lastCheck: null },
      netlify: { status: 'unknown', health: 'unknown', lastCheck: null }
    };
    
    this.recoveryAttempts = new Map();
    this.healthHistory = [];
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
    
    // Enhanced default configuration
    return {
      pm2: {
        enabled: true,
        checkInterval: 30000, // 30 seconds
        maxRestarts: 5,
        healthCheckTimeout: 10000,
        backupProcesses: true,
        autoRecovery: true
      },
      githubActions: {
        enabled: true,
        checkInterval: 60000, // 1 minute
        maxFailures: 3,
        retryDelay: 30000,
        backupWorkflows: true,
        localExecution: true
      },
      netlify: {
        enabled: true,
        checkInterval: 120000, // 2 minutes
        maxFailures: 3,
        healthCheckTimeout: 15000,
        backupFunctions: true,
        deploymentMonitoring: true
      },
      monitoring: {
        enabled: true,
        reportInterval: 300000, // 5 minutes
        alertThreshold: 0.8,
        healthHistoryRetention: 1000
      },
      recovery: {
        enabled: true,
        maxRecoveryAttempts: 5,
        recoveryCooldown: 300000, // 5 minutes
        escalationThreshold: 3
      }
    };
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [COMPREHENSIVE] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + "\n");
      
      // Add to health history
      this.healthHistory.push({
        timestamp: new Date(),
        message: message,
        level: level
      });
      
      // Trim history if too long
      if (this.healthHistory.length > this.config.monitoring.healthHistoryRetention) {
        this.healthHistory = this.healthHistory.slice(-this.config.monitoring.healthHistoryRetention);
      }
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

  async startSystem() {
    this.log("🚀 Starting Comprehensive Redundancy System...");
    
    try {
      // Start all component managers
      await this.pm2Manager.start();
      await this.githubManager.start();
      await this.netlifyManager.start();
      
      // Start health monitoring
      await this.startHealthMonitoring();
      
      // Start recovery monitoring
      await this.startRecoveryMonitoring();
      
      this.log("✅ Comprehensive Redundancy System started successfully");
      
    } catch (error) {
      this.log(`❌ Failed to start system: ${error.message}`, "ERROR");
      throw error;
    }
  }

  async startHealthMonitoring() {
    this.log("🔍 Starting health monitoring...");
    
    // PM2 health check every 30 seconds
    cron.schedule("*/30 * * * * *", async () => {
      await this.checkPM2Health();
    });
    
    // GitHub Actions health check every minute
    cron.schedule("0 * * * * *", async () => {
      await this.checkGitHubHealth();
    });
    
    // Netlify functions health check every 2 minutes
    cron.schedule("0 */2 * * * *", async () => {
      await this.checkNetlifyHealth();
    });
    
    // Full system health check every 5 minutes
    cron.schedule("0 */5 * * * *", async () => {
      await this.fullSystemHealthCheck();
    });
    
    // Health report every hour
    cron.schedule("0 0 * * * *", async () => {
      await this.generateHealthReport();
    });
  }

  async startRecoveryMonitoring() {
    this.log("🔄 Starting recovery monitoring...");
    
    // Check for recovery opportunities every minute
    cron.schedule("0 * * * * *", async () => {
      await this.checkRecoveryOpportunities();
    });
  }

  async checkPM2Health() {
    try {
      const health = await this.pm2Manager.checkHealth();
      this.systemStatus.pm2 = {
        status: health.status,
        health: health.health,
        lastCheck: new Date()
      };
      
      if (health.health === 'unhealthy' && this.config.recovery.enabled) {
        await this.triggerRecovery('pm2', health.issues);
      }
      
    } catch (error) {
      this.log(`PM2 health check failed: ${error.message}`, "ERROR");
      this.systemStatus.pm2 = {
        status: 'error',
        health: 'unknown',
        lastCheck: new Date()
      };
    }
  }

  async checkGitHubHealth() {
    try {
      const health = await this.githubManager.checkHealth();
      this.systemStatus.github = {
        status: health.status,
        health: health.health,
        lastCheck: new Date()
      };
      
      if (health.health === 'unhealthy' && this.config.recovery.enabled) {
        await this.triggerRecovery('github', health.issues);
      }
      
    } catch (error) {
      this.log(`GitHub Actions health check failed: ${error.message}`, "ERROR");
      this.systemStatus.github = {
        status: 'error',
        health: 'unknown',
        lastCheck: new Date()
      };
    }
  }

  async checkNetlifyHealth() {
    try {
      const health = await this.netlifyManager.checkHealth();
      this.systemStatus.netlify = {
        status: health.status,
        health: health.health,
        lastCheck: new Date()
      };
      
      if (health.health === 'unhealthy' && this.config.recovery.enabled) {
        await this.triggerRecovery('netlify', health.issues);
      }
      
    } catch (error) {
      this.log(`Netlify functions health check failed: ${error.message}`, "ERROR");
      this.systemStatus.netlify = {
        status: 'error',
        health: 'unknown',
        lastCheck: new Date()
      };
    }
  }

  async fullSystemHealthCheck() {
    this.log("🔍 Running full system health check...");
    
    const overallHealth = Object.values(this.systemStatus).every(
      component => component.health === 'healthy'
    );
    
    if (!overallHealth) {
      this.log("⚠️ System health issues detected", "WARN");
      
      // Log component status
      for (const [component, status] of Object.entries(this.systemStatus)) {
        this.log(`${component}: ${status.health} (${status.status})`);
      }
      
      // Generate recovery report
      await this.generateRecoveryReport();
    } else {
      this.log("✅ All systems healthy");
    }
  }

  async triggerRecovery(component, issues) {
    const recoveryKey = `${component}-recovery`;
    const attempts = this.recoveryAttempts.get(recoveryKey) || 0;
    
    if (attempts >= this.config.recovery.maxRecoveryAttempts) {
      this.log(`🚨 Maximum recovery attempts reached for ${component}`, "ERROR");
      return;
    }
    
    this.log(`🔄 Triggering recovery for ${component} (attempt ${attempts + 1})`);
    
    try {
      let recoveryResult;
      
      switch (component) {
        case 'pm2':
          recoveryResult = await this.pm2Manager.triggerRecovery(issues);
          break;
        case 'github':
          recoveryResult = await this.githubManager.triggerRecovery(issues);
          break;
        case 'netlify':
          recoveryResult = await this.netlifyManager.triggerRecovery(issues);
          break;
        default:
          this.log(`Unknown component for recovery: ${component}`, "ERROR");
          return;
      }
      
      if (recoveryResult.success) {
        this.log(`✅ Recovery successful for ${component}`);
        this.recoveryAttempts.delete(recoveryKey);
      } else {
        this.log(`❌ Recovery failed for ${component}: ${recoveryResult.error}`, "ERROR");
        this.recoveryAttempts.set(recoveryKey, attempts + 1);
      }
      
    } catch (error) {
      this.log(`Recovery error for ${component}: ${error.message}`, "ERROR");
      this.recoveryAttempts.set(recoveryKey, attempts + 1);
    }
  }

  async checkRecoveryOpportunities() {
    for (const [component, status] of Object.entries(this.systemStatus)) {
      if (status.health === 'unhealthy') {
        const recoveryKey = `${component}-recovery`;
        const attempts = this.recoveryAttempts.get(recoveryKey) || 0;
        
        // Check if enough time has passed since last recovery attempt
        if (attempts > 0) {
          const lastAttempt = this.recoveryAttempts.get(`${recoveryKey}-timestamp`);
          const now = Date.now();
          
          if (!lastAttempt || (now - lastAttempt) > this.config.recovery.recoveryCooldown) {
            this.log(`🔄 Recovery cooldown expired for ${component}, attempting recovery`);
            await this.triggerRecovery(component, ['Automatic recovery attempt']);
          }
        }
      }
    }
  }

  async generateHealthReport() {
    const reportPath = path.join(this.logDir, `health-report-${new Date().toISOString().split('T')[0]}.json`);
    
    const report = {
      timestamp: new Date().toISOString(),
      systemStatus: this.systemStatus,
      recoveryAttempts: Object.fromEntries(this.recoveryAttempts),
      recentHealthHistory: this.healthHistory.slice(-100),
      config: this.config
    };
    
    try {
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`📊 Health report generated: ${path.basename(reportPath)}`);
    } catch (error) {
      this.log(`Failed to generate health report: ${error.message}`, "ERROR");
    }
  }

  async generateRecoveryReport() {
    const reportPath = path.join(this.logDir, `recovery-report-${new Date().toISOString().split('T')[0]}.json`);
    
    const report = {
      timestamp: new Date().toISOString(),
      systemStatus: this.systemStatus,
      recoveryAttempts: Object.fromEntries(this.recoveryAttempts),
      issues: this.collectCurrentIssues()
    };
    
    try {
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`📊 Recovery report generated: ${path.basename(reportPath)}`);
    } catch (error) {
      this.log(`Failed to generate recovery report: ${error.message}`, "ERROR");
    }
  }

  collectCurrentIssues() {
    const issues = [];
    
    for (const [component, status] of Object.entries(this.systemStatus)) {
      if (status.health !== 'healthy') {
        issues.push({
          component,
          status: status.status,
          health: status.health,
          lastCheck: status.lastCheck
        });
      }
    }
    
    return issues;
  }

  async stopSystem() {
    this.log("🛑 Stopping Comprehensive Redundancy System...");
    
    try {
      await this.pm2Manager.stop();
      await this.githubManager.stop();
      await this.netlifyManager.stop();
      
      this.log("✅ Comprehensive Redundancy System stopped");
      
    } catch (error) {
      this.log(`❌ Error stopping system: ${error.message}`, "ERROR");
    }
  }

  getStatus() {
    return {
      systemStatus: this.systemStatus,
      recoveryAttempts: Object.fromEntries(this.recoveryAttempts),
      uptime: process.uptime(),
      config: this.config
    };
  }
}

// PM2 Redundancy Manager
class PM2RedundancyManager {
  constructor(master) {
    this.master = master;
    this.logDir = path.join(process.cwd(), 'automation', 'logs');
    this.ecosystemPath = path.join(process.cwd(), 'ecosystem.pm2.cjs');
    this.backupProcesses = new Map();
    this.healthChecks = new Map();
  }

  log(message, level = 'INFO') {
    this.master.log(`[PM2] ${message}`, level);
  }

  async start() {
    this.log('Starting PM2 Redundancy Manager...');
    
    try {
      // Validate ecosystem file
      if (!fs.existsSync(this.ecosystemPath)) {
        throw new Error('PM2 ecosystem file not found');
      }
      
      // Start backup processes
      await this.startBackupProcesses();
      
      this.log('PM2 Redundancy Manager started successfully');
      
    } catch (error) {
      this.log(`Failed to start: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async startBackupProcesses() {
    this.log('Starting backup PM2 processes...');
    
    // Start backup auto-sync process
    await this.startBackupProcess('zion-auto-sync-backup', 'automation/pm2-auto-sync.js');
    
    // Start backup cron process
    await this.startBackupProcess('zion-auto-sync-cron-backup', 'automation/pm2-auto-sync.js');
    
    // Start backup monitoring process
    await this.startBackupProcess('zion-monitoring-backup', 'automation/pm2-redundancy-monitor.cjs');
  }

  async startBackupProcess(name, scriptPath) {
    try {
      const fullScriptPath = path.join(process.cwd(), scriptPath);
      
      if (!fs.existsSync(fullScriptPath)) {
        this.log(`Script not found: ${scriptPath}`, 'WARN');
        return;
      }
      
      // Start process with PM2
      const result = await this.master.runCommand('pm2', [
        'start', fullScriptPath,
        '--name', name,
        '--interpreter', 'node',
        '--cwd', process.cwd(),
        '--watch', 'false',
        '--autorestart', 'true',
        '--max-restarts', '10'
      ]);
      
      if (result.status === 0) {
        this.backupProcesses.set(name, {
          script: scriptPath,
          started: new Date(),
          status: 'running'
        });
        this.log(`Backup process started: ${name}`);
      } else {
        this.log(`Failed to start backup process ${name}: ${result.stderr}`, 'ERROR');
      }
      
    } catch (error) {
      this.log(`Error starting backup process ${name}: ${error.message}`, 'ERROR');
    }
  }

  async checkHealth() {
    this.log('Checking PM2 health...');
    
    try {
      // Check PM2 status
      const result = await this.master.runCommand('pm2', ['status', '--no-daemon']);
      
      if (result.status !== 0) {
        return {
          status: 'error',
          health: 'unhealthy',
          issues: ['PM2 status check failed'],
          error: result.stderr
        };
      }
      
      // Parse PM2 status
      const processes = this.parsePM2Status(result.stdout);
      const issues = [];
      
      // Check for failed processes
      const failedProcesses = processes.filter(p => p.status === 'errored' || p.status === 'stopped');
      if (failedProcesses.length > 0) {
        issues.push(`${failedProcesses.length} failed processes`);
      }
      
      // Check for high memory/CPU usage
      const highUsageProcesses = processes.filter(p => {
        const memory = parseFloat(p.memory) || 0;
        const cpu = parseFloat(p.cpu) || 0;
        return memory > 80 || cpu > 80;
      });
      
      if (highUsageProcesses.length > 0) {
        issues.push(`${highUsageProcesses.length} high resource usage processes`);
      }
      
      const health = issues.length === 0 ? 'healthy' : 'unhealthy';
      
      return {
        status: 'running',
        health,
        issues,
        processes,
        summary: {
          total: processes.length,
          running: processes.filter(p => p.status === 'online').length,
          failed: failedProcesses.length,
          highUsage: highUsageProcesses.length
        }
      };
      
    } catch (error) {
      return {
        status: 'error',
        health: 'unhealthy',
        issues: ['PM2 health check error'],
        error: error.message
      };
    }
  }

  parsePM2Status(output) {
    const lines = output.split('\n');
    const processes = [];
    
    for (const line of lines) {
      if (line.includes('│') && !line.includes('App name')) {
        const parts = line.split('│').map(p => p.trim()).filter(p => p);
        if (parts.length >= 4) {
          processes.push({
            name: parts[0],
            status: parts[1],
            cpu: parts[2],
            memory: parts[3],
            uptime: parts[4] || 'N/A'
          });
        }
      }
    }
    
    return processes;
  }

  async triggerRecovery(issues) {
    this.log('Triggering PM2 recovery...');
    
    try {
      // Restart failed processes
      const result = await this.master.runCommand('pm2', ['restart', 'all']);
      
      if (result.status === 0) {
        this.log('PM2 recovery successful');
        return { success: true };
      } else {
        this.log(`PM2 recovery failed: ${result.stderr}`, 'ERROR');
        return { success: false, error: result.stderr };
      }
      
    } catch (error) {
      this.log(`PM2 recovery error: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async stop() {
    this.log('Stopping PM2 Redundancy Manager...');
    
    try {
      // Stop backup processes
      for (const [name] of this.backupProcesses) {
        await this.master.runCommand('pm2', ['stop', name]);
        this.log(`Stopped backup process: ${name}`);
      }
      
      this.backupProcesses.clear();
      this.log('PM2 Redundancy Manager stopped');
      
    } catch (error) {
      this.log(`Error stopping PM2 manager: ${error.message}`, 'ERROR');
    }
  }
}

// GitHub Actions Redundancy Manager
class GitHubActionsRedundancyManager {
  constructor(master) {
    this.master = master;
    this.workflowsDir = path.join(process.cwd(), '.github', 'workflows');
    this.backupWorkflows = new Map();
    this.healthChecks = new Map();
  }

  log(message, level = 'INFO') {
    this.master.log(`[GitHub] ${message}`, level);
  }

  async start() {
    this.log('Starting GitHub Actions Redundancy Manager...');
    
    try {
      // Validate workflows directory
      if (!fs.existsSync(this.workflowsDir)) {
        throw new Error('GitHub workflows directory not found');
      }
      
      // Create backup workflows
      await this.createBackupWorkflows();
      
      this.log('GitHub Actions Redundancy Manager started successfully');
      
    } catch (error) {
      this.log(`Failed to start: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async createBackupWorkflows() {
    this.log('Creating backup workflows...');
    
    const workflowFiles = await this.scanWorkflows();
    
    for (const workflowPath of workflowFiles) {
      await this.createBackupWorkflow(workflowPath);
    }
  }

  async scanWorkflows() {
    if (!fs.existsSync(this.workflowsDir)) {
      return [];
    }

    const workflowFiles = fs.readdirSync(this.workflowsDir)
      .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'))
      .map(file => path.join(this.workflowsDir, file));

    this.log(`Found ${workflowFiles.length} workflow files`);
    return workflowFiles;
  }

  async createBackupWorkflow(workflowPath) {
    const workflowName = path.basename(workflowPath, path.extname(workflowPath));
    const backupName = `${workflowName}-backup`;
    const backupPath = path.join(this.workflowsDir, `${backupName}.yml`);
    
    try {
      const workflowContent = fs.readFileSync(workflowPath, 'utf8');
      const backupContent = this.generateBackupWorkflow(workflowContent, backupName);
      
      fs.writeFileSync(backupPath, backupContent);
      
      this.log(`Created backup workflow: ${backupName}`);
      this.backupWorkflows.set(backupName, {
        original: workflowName,
        path: backupPath,
        created: new Date(),
        health: 'healthy'
      });
      
    } catch (error) {
      this.log(`Failed to create backup for ${workflowName}: ${error.message}`, 'ERROR');
    }
  }

  generateBackupWorkflow(originalContent, backupName) {
    // Create a backup workflow that can be triggered manually
    return `# Backup workflow for ${backupName}
# This is an automated backup created by the redundancy system

name: ${backupName}

on:
  workflow_dispatch:
    inputs:
      trigger_backup:
        description: 'Trigger backup execution'
        required: true
        default: 'true'
        type: string

permissions:
  contents: write

jobs:
  backup-execution:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Execute backup workflow
        run: |
          echo "Backup workflow execution started at $(date)"
          # Add your backup logic here
          echo "Backup workflow execution completed at $(date)"

      - name: Commit backup execution
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git add -A
          git commit -m "chore(backup): execute ${backupName} workflow"
          git push origin HEAD:main
`;
  }

  async checkHealth() {
    this.log('Checking GitHub Actions health...');
    
    try {
      const workflowFiles = await this.scanWorkflows();
      const issues = [];
      
      // Validate workflow syntax
      for (const workflowPath of workflowFiles) {
        const validation = await this.validateWorkflow(workflowPath);
        if (!validation.valid) {
          issues.push(`Invalid workflow ${path.basename(workflowPath)}: ${validation.error}`);
        }
      }
      
      // Check backup workflows
      for (const [name, backup] of this.backupWorkflows) {
        if (!fs.existsSync(backup.path)) {
          issues.push(`Backup workflow ${name} missing`);
        }
      }
      
      // Check git status
      const gitStatus = await this.checkGitStatus();
      if (gitStatus.hasChanges) {
        issues.push('Uncommitted changes detected');
      }
      
      const health = issues.length === 0 ? 'healthy' : 'unhealthy';
      
      return {
        status: 'running',
        health,
        issues,
        summary: {
          totalWorkflows: workflowFiles.length,
          backupWorkflows: this.backupWorkflows.size,
          hasUncommittedChanges: gitStatus.hasChanges
        }
      };
      
    } catch (error) {
      return {
        status: 'error',
        health: 'unhealthy',
        issues: ['GitHub Actions health check error'],
        error: error.message
      };
    }
  }

  async validateWorkflow(workflowPath) {
    try {
      const content = fs.readFileSync(workflowPath, 'utf8');
      
      // Basic YAML validation (check for common syntax errors)
      if (content.includes('  -') && !content.includes('on:')) {
        return { valid: false, error: 'Missing trigger section' };
      }
      
      if (content.includes('jobs:') && !content.includes('runs-on:')) {
        return { valid: false, error: 'Missing runs-on specification' };
      }
      
      return { valid: true };
      
    } catch (error) {
      return { valid: false, error: error.message };
    }
  }

  async checkGitStatus() {
    try {
      const result = await this.master.runCommand('git', ['status', '--porcelain']);
      return {
        hasChanges: result.stdout.trim().length > 0,
        changes: result.stdout
      };
    } catch (error) {
      return { hasChanges: false, error: error.message };
    }
  }

  async triggerRecovery(issues) {
    this.log('Triggering GitHub Actions recovery...');
    
    try {
      // Recreate backup workflows if needed
      await this.createBackupWorkflows();
      
      // Commit any uncommitted changes
      const gitStatus = await this.checkGitStatus();
      if (gitStatus.hasChanges) {
        const result = await this.master.runCommand('git', ['add', '-A']);
        if (result.status === 0) {
          await this.master.runCommand('git', ['commit', '-m', 'chore(recovery): restore backup workflows']);
          await this.master.runCommand('git', ['push', 'origin', 'main']);
          this.log('GitHub Actions recovery successful');
          return { success: true };
        }
      }
      
      this.log('GitHub Actions recovery completed (no changes needed)');
      return { success: true };
      
    } catch (error) {
      this.log(`GitHub Actions recovery error: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async stop() {
    this.log('Stopping GitHub Actions Redundancy Manager...');
    
    try {
      // Clean up backup workflows
      for (const [name, backup] of this.backupWorkflows) {
        if (fs.existsSync(backup.path)) {
          fs.unlinkSync(backup.path);
          this.log(`Removed backup workflow: ${name}`);
        }
      }
      
      this.backupWorkflows.clear();
      this.log('GitHub Actions Redundancy Manager stopped');
      
    } catch (error) {
      this.log(`Error stopping GitHub manager: ${error.message}`, 'ERROR');
    }
  }
}

// Netlify Functions Redundancy Manager
class NetlifyFunctionsRedundancyManager {
  constructor(master) {
    this.master = master;
    this.netlifyDir = path.join(process.cwd(), 'netlify');
    this.functionsDir = path.join(this.netlifyDir, 'functions');
    this.backupFunctions = new Map();
    this.healthChecks = new Map();
  }

  log(message, level = 'INFO') {
    this.master.log(`[Netlify] ${message}`, level);
  }

  async start() {
    this.log('Starting Netlify Functions Redundancy Manager...');
    
    try {
      // Validate Netlify directory
      if (!fs.existsSync(this.netlifyDir)) {
        fs.mkdirSync(this.netlifyDir, { recursive: true });
      }
      
      if (!fs.existsSync(this.functionsDir)) {
        fs.mkdirSync(this.functionsDir, { recursive: true });
      }
      
      // Create backup functions
      await this.createBackupFunctions();
      
      this.log('Netlify Functions Redundancy Manager started successfully');
      
    } catch (error) {
      this.log(`Failed to start: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async createBackupFunctions() {
    this.log('Creating backup Netlify functions...');
    
    const functions = await this.scanFunctions();
    
    for (const func of functions) {
      await this.createBackupFunction(func);
    }
  }

  async scanFunctions() {
    // Check functions manifest
    const manifestPath = path.join(this.netlifyDir, 'functions', 'functions-manifest.json');
    let functions = [];
    
    if (fs.existsSync(manifestPath)) {
      try {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        functions = manifest.functions || [];
        this.log(`Found ${functions.length} functions in manifest`);
      } catch (error) {
        this.log(`Failed to parse functions manifest: ${error.message}`, 'ERROR');
      }
    }

    // Also scan for actual function files
    const functionFiles = this.scanFunctionFiles();
    this.log(`Found ${functionFiles.length} function files on disk`);
    
    return { manifestFunctions: functions, diskFunctions: functionFiles };
  }

  scanFunctionFiles() {
    const functionFiles = [];
    
    if (fs.existsSync(this.functionsDir)) {
      const items = fs.readdirSync(this.functionsDir, { withFileTypes: true });
      
      for (const item of items) {
        if (item.isDirectory()) {
          const functionPath = path.join(this.functionsDir, item.name);
          const indexFile = path.join(functionPath, 'index.js');
          
          if (fs.existsSync(indexFile)) {
            functionFiles.push({
              name: item.name,
              path: functionPath,
              indexFile: indexFile,
              type: 'directory'
            });
          }
        } else if (item.isFile() && (item.name.endsWith('.js') || item.name.endsWith('.ts'))) {
          functionFiles.push({
            name: item.name.replace(/\.(js|ts)$/, ''),
            path: path.join(this.functionsDir, item.name),
            indexFile: path.join(this.functionsDir, item.name),
            type: 'file'
          });
        }
      }
    }
    
    return functionFiles;
  }

  async createBackupFunction(func) {
    const backupName = `${func.name}-backup`;
    const backupPath = path.join(this.functionsDir, backupName);
    
    try {
      if (func.type === 'directory') {
        // Create backup directory
        if (!fs.existsSync(backupPath)) {
          fs.mkdirSync(backupPath, { recursive: true });
        }
        
        // Create backup index.js
        const backupIndexPath = path.join(backupPath, 'index.js');
        const backupContent = this.generateBackupFunction(func.name);
        fs.writeFileSync(backupIndexPath, backupContent);
        
      } else {
        // Create backup file
        const backupFilePath = `${backupPath}.js`;
        const backupContent = this.generateBackupFunction(func.name);
        fs.writeFileSync(backupFilePath, backupContent);
      }
      
      this.log(`Created backup function: ${backupName}`);
      this.backupFunctions.set(backupName, {
        original: func.name,
        path: backupPath,
        created: new Date(),
        health: 'healthy'
      });
      
    } catch (error) {
      this.log(`Failed to create backup for ${func.name}: ${error.message}`, 'ERROR');
    }
  }

  generateBackupFunction(functionName) {
    return `// Backup function for ${functionName}
// This is an automated backup created by the redundancy system

exports.handler = async function(event, context) {
  try {
    console.log('Backup function ${functionName} executed at:', new Date().toISOString());
    
    // Add your backup logic here
    const result = {
      function: '${functionName}-backup',
      timestamp: new Date().toISOString(),
      status: 'success',
      message: 'Backup function executed successfully'
    };
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(result)
    };
    
  } catch (error) {
    console.error('Backup function error:', error);
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        function: '${functionName}-backup',
        timestamp: new Date().toISOString(),
        status: 'error',
        error: error.message
      })
    };
  }
};
`;
  }

  async checkHealth() {
    this.log('Checking Netlify functions health...');
    
    try {
      const functions = await this.scanFunctions();
      const issues = [];
      
      // Check manifest validity
      if (functions.manifestFunctions.length === 0) {
        issues.push('No functions found in manifest');
      }
      
      // Check backup functions
      for (const [name, backup] of this.backupFunctions) {
        if (!fs.existsSync(backup.path) && !fs.existsSync(`${backup.path}.js`)) {
          issues.push(`Backup function ${name} missing`);
        }
      }
      
      // Check function file integrity
      for (const func of functions.diskFunctions) {
        if (!fs.existsSync(func.indexFile)) {
          issues.push(`Function file missing: ${func.name}`);
        }
      }
      
      const health = issues.length === 0 ? 'healthy' : 'unhealthy';
      
      return {
        status: 'running',
        health,
        issues,
        summary: {
          manifestFunctions: functions.manifestFunctions.length,
          diskFunctions: functions.diskFunctions.length,
          backupFunctions: this.backupFunctions.size
        }
      };
      
    } catch (error) {
      return {
        status: 'error',
        health: 'unhealthy',
        issues: ['Netlify functions health check error'],
        error: error.message
      };
    }
  }

  async triggerRecovery(issues) {
    this.log('Triggering Netlify functions recovery...');
    
    try {
      // Recreate backup functions
      await this.createBackupFunctions();
      
      // Regenerate functions manifest
      await this.regenerateFunctionsManifest();
      
      this.log('Netlify functions recovery successful');
      return { success: true };
      
    } catch (error) {
      this.log(`Netlify functions recovery error: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async regenerateFunctionsManifest() {
    try {
      const functions = await this.scanFunctions();
      const manifest = {
        generatedAt: new Date().toISOString(),
        functions: [
          ...functions.manifestFunctions,
          ...Array.from(this.backupFunctions.keys())
        ]
      };
      
      const manifestPath = path.join(this.netlifyDir, 'functions', 'functions-manifest.json');
      fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
      
      this.log('Functions manifest regenerated');
      
    } catch (error) {
      this.log(`Failed to regenerate manifest: ${error.message}`, 'ERROR');
    }
  }

  async stop() {
    this.log('Stopping Netlify Functions Redundancy Manager...');
    
    try {
      // Clean up backup functions
      for (const [name, backup] of this.backupFunctions) {
        if (fs.existsSync(backup.path)) {
          if (fs.statSync(backup.path).isDirectory()) {
            fs.rmSync(backup.path, { recursive: true, force: true });
          } else {
            fs.unlinkSync(backup.path);
          }
          this.log(`Removed backup function: ${name}`);
        }
      }
      
      this.backupFunctions.clear();
      this.log('Netlify Functions Redundancy Manager stopped');
      
    } catch (error) {
      this.log(`Error stopping Netlify manager: ${error.message}`, 'ERROR');
    }
  }
}

// Main execution
if (require.main === module) {
  const system = new ComprehensiveRedundancySystem();
  
  const command = process.argv[2] || 'start';
  
  switch (command) {
    case 'start':
      system.startSystem().catch(console.error);
      break;
      
    case 'stop':
      system.stopSystem().catch(console.error);
      break;
      
    case 'status':
      console.log(JSON.stringify(system.getStatus(), null, 2));
      break;
      
    case 'health':
      system.fullSystemHealthCheck().catch(console.error);
      break;
      
    case 'recovery':
      system.checkRecoveryOpportunities().catch(console.error);
      break;
      
    default:
      console.log(`
Comprehensive Redundancy System

Usage: node comprehensive-redundancy-system.cjs [command]

Commands:
  start     Start the comprehensive redundancy system
  stop      Stop the comprehensive redundancy system
  status    Show system status
  health    Run full health check
  recovery  Check recovery opportunities

This system provides comprehensive redundancy for:
- PM2 process management
- GitHub Actions workflows
- Netlify functions
- Automated monitoring and recovery
      `);
  }
}

module.exports = ComprehensiveRedundancySystem;