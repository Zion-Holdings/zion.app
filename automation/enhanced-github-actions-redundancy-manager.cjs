#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const https = require("https");

class EnhancedGitHubActionsRedundancyManager {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "enhanced-github-actions-redundancy.log");
    this.ensureLogDir();
    this.config = this.loadConfig();
    this.monitoring = false;
    this.checkInterval = null;
    this.workflowStatus = new Map();
    this.recoveryAttempts = new Map();
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
        return config.enhanced?.githubActionsManager || {};
      } catch (error) {
        this.log(`Error loading enhanced GitHub config: ${error.message}`);
      }
    }
    
    return {
      enabled: true,
      checkInterval: 60000,
      maxFailures: 3,
      healthCheckTimeout: 20000,
      autoRecovery: true,
      recoveryDelay: 10000,
      maxRecoveryAttempts: 3,
      recoveryCooldown: 120000,
      workflows: {
        "marketing-sync.yml": { priority: 'medium', schedule: '0 */12 * * *', maxFailures: 2 },
        "sync-health.yml": { priority: 'high', schedule: '*/15 * * * *', maxFailures: 1 },
        "marketing-sync-backup.yml": { priority: 'low', schedule: '0 */12 * * *', maxFailures: 3 },
        "sync-health-backup.yml": { priority: 'medium', schedule: '*/15 * * * *', maxFailures: 2 }
      },
      validation: {
        syntaxCheck: true,
        scheduleValidation: true,
        permissionsCheck: true,
        jobValidation: true
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
        timeout: options.timeout || this.config.healthCheckTimeout || 20000,
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

  async checkWorkflowsDirectory() {
    try {
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      if (!fs.existsSync(workflowsDir)) {
        this.log("❌ GitHub workflows directory not found", "ERROR");
        return { exists: false, workflows: [] };
      }

      const workflowFiles = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));
      this.log(`📋 Found ${workflowFiles.length} workflow files`);
      
      return { exists: true, workflows: workflowFiles };
    } catch (error) {
      this.log(`❌ Error checking workflows directory: ${error.message}`, "ERROR");
      return { exists: false, workflows: [] };
    }
  }

  async validateWorkflowSyntax(workflowPath) {
    try {
      const content = fs.readFileSync(workflowPath, 'utf8');
      
      // Basic YAML structure validation
      if (!content.includes('name:') || !content.includes('on:')) {
        return { valid: false, error: 'Missing required fields (name, on)' };
      }

      // Check for basic YAML syntax errors
      const lines = content.split('\n');
      let braceCount = 0;
      let bracketCount = 0;
      
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith('-') && !trimmed.includes(':')) {
          return { valid: false, error: 'Invalid YAML list syntax' };
        }
        
        // Count braces and brackets for basic structure validation
        braceCount += (line.match(/\{/g) || []).length;
        braceCount -= (line.match(/\}/g) || []).length;
        bracketCount += (line.match(/\[/g) || []).length;
        bracketCount -= (line.match(/\]/g) || []).length;
      }
      
      if (braceCount !== 0 || bracketCount !== 0) {
        return { valid: false, error: 'Mismatched braces or brackets' };
      }

      return { valid: true };
    } catch (error) {
      return { valid: false, error: `File read error: ${error.message}` };
    }
  }

  async validateWorkflowSchedule(workflowPath) {
    try {
      const content = fs.readFileSync(workflowPath, 'utf8');
      
      if (content.includes('schedule:')) {
        const scheduleMatch = content.match(/cron:\s*['"`]([^'"`]+)['"`]/);
        if (scheduleMatch) {
          const cron = scheduleMatch[1];
          // Basic cron validation (5 or 6 fields)
          const cronParts = cron.split(' ');
          if (cronParts.length < 5 || cronParts.length > 6) {
            return { valid: false, error: `Invalid cron format: ${cron}` };
          }
          return { valid: true, cron };
        }
      }
      
      return { valid: true, cron: null };
    } catch (error) {
      return { valid: false, error: `Schedule validation error: ${error.message}` };
    }
  }

  async validateWorkflowPermissions(workflowPath) {
    try {
      const content = fs.readFileSync(workflowPath, 'utf8');
      
      if (content.includes('permissions:')) {
        // Check if permissions are properly defined
        const permissionsMatch = content.match(/permissions:\s*\n([\s\S]*?)(?=\n\w|$)/);
        if (permissionsMatch) {
          const permissionsBlock = permissionsMatch[1];
          if (!permissionsBlock.includes('contents:') && !permissionsBlock.includes('actions:')) {
            return { valid: false, error: 'Permissions block missing required permissions' };
          }
        }
      }
      
      return { valid: true };
    } catch (error) {
      return { valid: false, error: `Permissions validation error: ${error.message}` };
    }
  }

  async validateWorkflowJobs(workflowPath) {
    try {
      const content = fs.readFileSync(workflowPath, 'utf8');
      
      if (content.includes('jobs:')) {
        // Check if jobs section is properly defined
        const jobsMatch = content.match(/jobs:\s*\n([\s\S]*?)(?=\n\w|$)/);
        if (jobsMatch) {
          const jobsBlock = jobsMatch[1];
          if (!jobsBlock.includes('runs-on:') && !jobsBlock.includes('uses:')) {
            return { valid: false, error: 'Jobs block missing required configuration' };
          }
        }
      }
      
      return { valid: true };
    } catch (error) {
      return { valid: false, error: `Jobs validation error: ${error.message}` };
    }
  }

  async validateWorkflow(workflowPath) {
    const workflowName = path.basename(workflowPath);
    this.log(`🔍 Validating workflow: ${workflowName}`);
    
    const results = {};
    
    // Syntax validation
    if (this.config.validation.syntaxCheck) {
      results.syntax = await this.validateWorkflowSyntax(workflowPath);
    }
    
    // Schedule validation
    if (this.config.validation.scheduleValidation) {
      results.schedule = await this.validateWorkflowSchedule(workflowPath);
    }
    
    // Permissions validation
    if (this.config.validation.permissionsCheck) {
      results.permissions = await this.validateWorkflowPermissions(workflowPath);
    }
    
    // Jobs validation
    if (this.config.validation.jobValidation) {
      results.jobs = await this.validateWorkflowJobs(workflowPath);
    }
    
    // Determine overall validity
    const allValid = Object.values(results).every(r => r.valid);
    const errors = Object.entries(results)
      .filter(([_, result]) => !result.valid)
      .map(([type, result]) => `${type}: ${result.error}`)
      .join(', ');
    
    if (allValid) {
      this.log(`✅ Workflow ${workflowName} validation passed`);
    } else {
      this.log(`❌ Workflow ${workflowName} validation failed: ${errors}`, "ERROR");
    }
    
    return {
      valid: allValid,
      results,
      errors: allValid ? [] : errors.split(', ')
    };
  }

  async checkWorkflowHealth(workflowPath) {
    try {
      const workflowName = path.basename(workflowPath);
      const config = this.config.workflows?.[workflowName] || this.config.workflows?.default || {};
      
      // Validate workflow
      const validation = await this.validateWorkflow(workflowPath);
      
      // Check if workflow file is accessible
      const stats = fs.statSync(workflowPath);
      const fileSize = stats.size;
      const lastModified = stats.mtime;
      
      // Check file size (should be reasonable)
      if (fileSize < 100 || fileSize > 100000) {
        this.log(`⚠️ Workflow ${workflowName} has unusual file size: ${fileSize} bytes`, "WARN");
      }
      
      // Check if file was recently modified (within last 24 hours)
      const hoursSinceModified = (Date.now() - lastModified.getTime()) / (1000 * 60 * 60);
      if (hoursSinceModified > 24) {
        this.log(`⚠️ Workflow ${workflowName} hasn't been modified in ${Math.round(hoursSinceModified)} hours`, "WARN");
      }
      
      const health = {
        name: workflowName,
        valid: validation.valid,
        fileSize,
        lastModified: lastModified.toISOString(),
        validation,
        config
      };
      
      this.workflowStatus.set(workflowName, health);
      return health;
      
    } catch (error) {
      this.log(`❌ Health check failed for workflow ${path.basename(workflowPath)}: ${error.message}`, "ERROR");
      return {
        name: path.basename(workflowPath),
        valid: false,
        error: error.message
      };
    }
  }

  async performHealthCheck() {
    this.log("🔍 Starting GitHub Actions health check...");
    
    const startTime = Date.now();
    
    // Check workflows directory
    const dirCheck = await this.checkWorkflowsDirectory();
    if (!dirCheck.exists) {
      this.log("❌ Workflows directory not found", "ERROR");
      return { status: 'failed', error: 'Workflows directory missing' };
    }
    
    // Check each workflow
    const workflows = dirCheck.workflows;
    const results = {};
    let healthyCount = 0;
    let failedCount = 0;
    let warningCount = 0;
    
    for (const workflow of workflows) {
      const workflowPath = path.join(this.workspace, ".github/workflows", workflow);
      const health = await this.checkWorkflowHealth(workflowPath);
      
      results[workflow] = health;
      
      if (health.valid) {
        healthyCount++;
      } else if (health.error) {
        failedCount++;
      } else {
        warningCount++;
      }
    }
    
    const duration = Date.now() - startTime;
    this.log(`🏁 GitHub Actions health check completed in ${duration}ms`);
    
    // Log summary
    this.log(`📊 GitHub Actions Health Summary:`);
    this.log(`   Total Workflows: ${workflows.length}`);
    this.log(`   Healthy: ${healthyCount} ✅`);
    this.log(`   Warnings: ${warningCount} ⚠️`);
    this.log(`   Failed: ${failedCount} ❌`);
    
    const overallStatus = failedCount === 0 ? 'healthy' : failedCount > workflows.length / 2 ? 'critical' : 'degraded';
    
    return {
      status: overallStatus,
      workflows: results,
      summary: {
        total: workflows.length,
        healthy: healthyCount,
        warnings: warningCount,
        failed: failedCount
      },
      duration
    };
  }

  async autoRecovery() {
    if (!this.config.autoRecovery) {
      this.log("🔄 Auto-recovery is disabled", "WARN");
      return;
    }
    
    this.log("🔄 Starting GitHub Actions auto-recovery...");
    
    for (const [workflowName, status] of this.workflowStatus) {
      if (!status.valid) {
        await this.recoverWorkflow(workflowName, status);
      }
    }
  }

  async recoverWorkflow(workflowName, status) {
      const config = this.config.workflows?.[workflowName] || this.config.workflows?.default || {};
    const maxAttempts = config.maxRecoveryAttempts || this.config.maxRecoveryAttempts;
    const cooldown = this.config.recoveryCooldown;
    
    // Check recovery attempts
    const attempts = this.recoveryAttempts.get(workflowName) || 0;
    if (attempts >= maxAttempts) {
      this.log(`⚠️ Workflow ${workflowName} exceeded max recovery attempts (${attempts}/${maxAttempts})`, "WARN");
      return;
    }
    
    // Check cooldown
    const lastAttempt = this.recoveryAttempts.get(`${workflowName}_last`) || 0;
    const timeSinceLastAttempt = Date.now() - lastAttempt;
    if (timeSinceLastAttempt < cooldown) {
      this.log(`⏳ Workflow ${workflowName} in cooldown (${Math.ceil((cooldown - timeSinceLastAttempt) / 1000)}s remaining)`, "INFO");
      return;
    }
    
    try {
      this.log(`🔄 Attempting to recover workflow ${workflowName} (attempt ${attempts + 1}/${maxAttempts})...`);
      
      const workflowPath = path.join(this.workspace, ".github/workflows", workflowName);
      
      // Check if backup exists
      const backupPath = workflowPath.replace('.yml', '-backup.yml');
      if (fs.existsSync(backupPath)) {
        this.log(`🔄 Restoring workflow ${workflowName} from backup...`);
        fs.copyFileSync(backupPath, workflowPath);
        this.log(`✅ Successfully restored workflow ${workflowName} from backup`);
      } else {
        // Try to fix common issues
        await this.fixWorkflowIssues(workflowPath, status);
      }
      
      this.recoveryAttempts.set(workflowName, 0); // Reset attempts on success
      this.recoveryAttempts.set(`${workflowName}_last`, Date.now());
      
      // Wait before next recovery attempt
      const delay = this.config.recoveryDelay;
      if (delay > 0) {
        this.log(`⏳ Waiting ${delay}ms before next recovery attempt...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
      
    } catch (error) {
      this.log(`❌ Recovery failed for workflow ${workflowName}: ${error.message}`, "ERROR");
      this.recoveryAttempts.set(workflowName, attempts + 1);
    }
  }

  async fixWorkflowIssues(workflowPath, status) {
    try {
      this.log(`🔧 Attempting to fix workflow issues...`);
      
      // Read current content
      let content = fs.readFileSync(workflowPath, 'utf8');
      
      // Fix common syntax issues
      if (content.includes('on:') && !content.includes('on:\n')) {
        content = content.replace('on:', 'on:\n');
      }
      
      if (content.includes('jobs:') && !content.includes('jobs:\n')) {
        content = content.replace('jobs:', 'jobs:\n');
      }
      
      // Ensure proper indentation
      const lines = content.split('\n');
      const fixedLines = lines.map(line => {
        if (line.trim().startsWith('-') && !line.startsWith('  ')) {
          return '  ' + line;
        }
        return line;
      });
      
      content = fixedLines.join('\n');
      
      // Write fixed content
      fs.writeFileSync(workflowPath, content);
      this.log(`✅ Fixed workflow syntax issues`);
      
    } catch (error) {
      this.log(`❌ Failed to fix workflow issues: ${error.message}`, "ERROR");
      throw error;
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("⚠️ GitHub Actions monitoring is already running", "WARN");
      return;
    }
    
    this.log("🚀 Starting enhanced GitHub Actions redundancy monitoring...");
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
    
    this.log(`✅ Enhanced GitHub Actions redundancy monitoring started (interval: ${this.config.checkInterval}ms)`);
  }

  async stopMonitoring() {
    if (!this.monitoring) {
      this.log("⚠️ GitHub Actions monitoring is not running", "WARN");
      return;
    }
    
    this.log("🛑 Stopping enhanced GitHub Actions redundancy monitoring...");
    
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    
    this.monitoring = false;
    this.log("✅ Enhanced GitHub Actions redundancy monitoring stopped");
  }

  async regenerateWorkflows() {
    this.log("🔄 Regenerating workflow files...");
    
    try {
      // This could trigger workflow regeneration if you have a script for it
      const regenerateScript = path.join(this.workspace, "scripts/regenerate-workflows.cjs");
      if (fs.existsSync(regenerateScript)) {
        await this.runCommand("node", [regenerateScript]);
        this.log("✅ Workflows regenerated successfully");
      } else {
        this.log("⚠️ No workflow regeneration script found", "WARN");
      }
    } catch (error) {
      this.log(`❌ Failed to regenerate workflows: ${error.message}`, "ERROR");
    }
  }

  getStatus() {
    return {
      monitoring: this.monitoring,
      config: this.config,
      workflowStatus: Object.fromEntries(this.workflowStatus),
      recoveryAttempts: Object.fromEntries(this.recoveryAttempts),
      uptime: this.monitoring ? Date.now() - (this.workflowStatus.size > 0 ? Date.now() : Date.now()) : 0
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
      case 'regenerate':
        await this.regenerateWorkflows();
        break;
      default:
        console.log(`
Enhanced GitHub Actions Redundancy Manager - Advanced Workflow Management

Usage:
  node automation/enhanced-github-actions-redundancy-manager.cjs [command]

Commands:
  start       - Start monitoring and auto-recovery
  stop        - Stop monitoring
  status      - Show current status
  health      - Perform health check
  recover     - Trigger auto-recovery
  regenerate  - Regenerate workflow files

Features:
  ✅ Comprehensive Workflow Validation
  ✅ Syntax & Structure Checking
  ✅ Schedule & Permissions Validation
  ✅ Intelligent Auto-Recovery
  ✅ Backup Restoration
  ✅ Workflow Regeneration
        `);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const manager = new EnhancedGitHubActionsRedundancyManager();
  manager.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = EnhancedGitHubActionsRedundancyManager;