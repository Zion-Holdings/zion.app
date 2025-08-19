#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const https = require("https");

class EnhancedGitHubActionsRedundancy {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "enhanced-github-actions-redundancy.log");
    this.ensureLogDir();
    
    this.config = {
      enabled: true,
      checkInterval: 60000,
      maxFailures: 3,
      retryDelay: 30000,
      autoTrigger: true,
      backupWorkflows: true,
      healthCheckWorkflow: "sync-health.yml",
      criticalWorkflows: [
        "marketing-sync.yml",
        "sync-health.yml"
      ],
      workflowValidation: true,
      yamlValidation: true,
      cronValidation: true,
      autoFix: true,
      maxFixAttempts: 3,
      alertThreshold: 3,
      logRotation: true,
      maxLogSize: 10 * 1024 * 1024, // 10MB
      maxLogFiles: 30
    };
    
    this.monitoring = false;
    this.checkInterval = null;
    this.failureCount = 0;
    this.healthHistory = [];
    this.fixAttempts = new Map();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
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

  async checkWorkflowsDirectory() {
    try {
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      if (!fs.existsSync(workflowsDir)) {
        this.log("❌ GitHub workflows directory not found", "ERROR");
        return { exists: false, workflows: [], error: "Directory not found" };
      }

      const workflowFiles = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));
      this.log(`📋 Found ${workflowFiles.length} workflow files in .github/workflows`);
      
      return { exists: true, workflows: workflowFiles, error: null };
    } catch (error) {
      this.log(`❌ Error checking workflows directory: ${error.message}`, "ERROR");
      return { exists: false, workflows: [], error: error.message };
    }
  }

  async validateWorkflow(workflowPath) {
    try {
      const workflowContent = fs.readFileSync(workflowPath, 'utf8');
      const validation = {
        valid: true,
        errors: [],
        warnings: [],
        hasName: false,
        hasTriggers: false,
        hasJobs: false,
        cronValid: true
      };

      // Check for required sections
      if (workflowContent.includes('name:')) {
        validation.hasName = true;
      } else {
        validation.errors.push("Missing 'name:' field");
        validation.valid = false;
      }

      if (workflowContent.includes('on:')) {
        validation.hasTriggers = true;
      } else {
        validation.errors.push("Missing 'on:' section");
        validation.valid = false;
      }

      if (workflowContent.includes('jobs:')) {
        validation.hasJobs = true;
      } else {
        validation.errors.push("Missing 'jobs:' section");
        validation.valid = false;
      }

      // Validate cron syntax if present
      if (workflowContent.includes('cron:')) {
        const cronMatches = workflowContent.match(/cron:\s*['"`]([^'"`]+)['"`]/g);
        if (cronMatches) {
          for (const match of cronMatches) {
            const cronExpression = match.match(/cron:\s*['"`]([^'"`]+)['"`]/)[1];
            if (!this.isValidCronExpression(cronExpression)) {
              validation.errors.push(`Invalid cron expression: ${cronExpression}`);
              validation.cronValid = false;
              validation.valid = false;
            }
          }
        }
      }

      // Check for common YAML issues
      if (workflowContent.includes('\t')) {
        validation.warnings.push("Contains tabs (should use spaces)");
      }

      if (workflowContent.includes('  - ')) {
        // Check for proper YAML list formatting
        const lines = workflowContent.split('\n');
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          if (line.trim().startsWith('-') && !line.startsWith('  -')) {
            validation.warnings.push(`List item at line ${i + 1} may have incorrect indentation`);
          }
        }
      }

      return validation;
    } catch (error) {
      return {
        valid: false,
        errors: [`Error reading workflow: ${error.message}`],
        warnings: [],
        hasName: false,
        hasTriggers: false,
        hasJobs: false,
        cronValid: false
      };
    }
  }

  isValidCronExpression(cron) {
    // Basic cron validation (5 or 6 fields)
    const parts = cron.split(' ');
    if (parts.length !== 5 && parts.length !== 6) {
      return false;
    }

    // Check each field
    for (let i = 0; i < Math.min(parts.length, 5); i++) {
      const part = parts[i];
      if (part === '*' || part === '?') continue;
      
      // Check for valid ranges and lists
      if (part.includes(',')) {
        const values = part.split(',');
        for (const value of values) {
          if (!this.isValidCronField(value, i)) {
            return false;
          }
        }
      } else if (part.includes('-')) {
        const [start, end] = part.split('-');
        if (!this.isValidCronField(start, i) || !this.isValidCronField(end, i)) {
          return false;
        }
      } else if (part.includes('/')) {
        const [value, step] = part.split('/');
        if (!this.isValidCronField(value, i) || !this.isValidCronField(step, i)) {
          return false;
        }
      } else {
        if (!this.isValidCronField(part, i)) {
          return false;
        }
      }
    }

    return true;
  }

  isValidCronField(field, position) {
    if (field === '*' || field === '?') return true;
    
    const num = parseInt(field);
    if (isNaN(num)) return false;
    
    // Field-specific validation
    switch (position) {
      case 0: // minute: 0-59
        return num >= 0 && num <= 59;
      case 1: // hour: 0-23
        return num >= 0 && num <= 23;
      case 2: // day of month: 1-31
        return num >= 1 && num <= 31;
      case 3: // month: 1-12
        return num >= 1 && num <= 12;
      case 4: // day of week: 0-7 (0 and 7 are Sunday)
        return num >= 0 && num <= 7;
      default:
        return true;
    }
  }

  async createBackupWorkflows() {
    try {
      const backupDir = path.join(this.workspace, ".github/workflows/backup");
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }

      const workflowsDir = path.join(this.workspace, ".github/workflows");
      const workflowFiles = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));

      for (const workflow of workflowFiles) {
        const sourcePath = path.join(workflowsDir, workflow);
        const backupPath = path.join(backupDir, `${workflow}.backup`);
        
        if (fs.existsSync(sourcePath) && !fs.existsSync(backupPath)) {
          fs.copyFileSync(sourcePath, backupPath);
          this.log(`💾 Created backup for workflow: ${workflow}`);
        }
      }

      this.log(`✅ Created backups for ${workflowFiles.length} workflows`);
    } catch (error) {
      this.log(`⚠️ Could not create backup workflows: ${error.message}`, "WARN");
    }
  }

  async validateAllWorkflows() {
    this.log("🔍 Validating all GitHub Actions workflows...");
    
    const workflowsDir = path.join(this.workspace, ".github/workflows");
    const workflowFiles = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));
    
    const validationResults = {};
    let totalValid = 0;
    let totalErrors = 0;
    let totalWarnings = 0;

    for (const workflow of workflowFiles) {
      const workflowPath = path.join(workflowsDir, workflow);
      const validation = await this.validateWorkflow(workflowPath);
      
      validationResults[workflow] = validation;
      
      if (validation.valid) {
        totalValid++;
        this.log(`✅ Workflow ${workflow} is valid`);
      } else {
        this.log(`❌ Workflow ${workflow} has validation errors:`, "ERROR");
        validation.errors.forEach(error => this.log(`   - ${error}`, "ERROR"));
        totalErrors += validation.errors.length;
      }
      
      if (validation.warnings.length > 0) {
        this.log(`⚠️ Workflow ${workflow} has warnings:`, "WARN");
        validation.warnings.forEach(warning => this.log(`   - ${warning}`, "WARN"));
        totalWarnings += validation.warnings.length;
      }
    }

    this.log(`📊 Workflow Validation Summary:`);
    this.log(`   Total workflows: ${workflowFiles.length}`);
    this.log(`   Valid: ${totalValid}`);
    this.log(`   Errors: ${totalErrors}`);
    this.log(`   Warnings: ${totalWarnings}`);

    return validationResults;
  }

  async checkWorkflowTriggers() {
    this.log("🔍 Checking workflow triggers and schedules...");
    
    const workflowsDir = path.join(this.workspace, ".github/workflows");
    const workflowFiles = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));
    
    const triggerResults = {};
    
    for (const workflow of workflowFiles) {
      const workflowPath = path.join(workflowsDir, workflow);
      const content = fs.readFileSync(workflowPath, 'utf8');
      
      const triggers = {
        manual: content.includes('workflow_dispatch:'),
        push: content.includes('push:'),
        pull_request: content.includes('pull_request:'),
        schedule: content.includes('schedule:'),
        cron: content.includes('cron:'),
        repository_dispatch: content.includes('repository_dispatch:')
      };
      
      triggerResults[workflow] = triggers;
      
      this.log(`📋 Workflow ${workflow} triggers:`);
      Object.entries(triggers).forEach(([trigger, enabled]) => {
        if (enabled) {
          this.log(`   ✅ ${trigger}`);
        }
      });
    }

    return triggerResults;
  }

  async checkWorkflowDependencies() {
    this.log("🔍 Checking workflow dependencies and actions...");
    
    const workflowsDir = path.join(this.workspace, ".github/workflows");
    const workflowFiles = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));
    
    const dependencyResults = {};
    
    for (const workflow of workflowFiles) {
      const workflowPath = path.join(workflowsDir, workflow);
      const content = fs.readFileSync(workflowPath, 'utf8');
      
      // Extract action references
      const actionMatches = content.match(/uses:\s*([^\s\n]+)/g);
      const actions = actionMatches ? actionMatches.map(match => match.replace('uses:', '').trim()) : [];
      
      // Extract Node.js version
      const nodeVersionMatch = content.match(/node-version:\s*['"`]([^'"`]+)['"`]/);
      const nodeVersion = nodeVersionMatch ? nodeVersionMatch[1] : null;
      
      dependencyResults[workflow] = {
        actions: actions,
        nodeVersion: nodeVersion,
        actionCount: actions.length
      };
      
      this.log(`📦 Workflow ${workflow} dependencies:`);
      this.log(`   Node.js version: ${nodeVersion || 'Not specified'}`);
      this.log(`   Actions used: ${actions.length}`);
      actions.forEach(action => this.log(`     - ${action}`));
    }

    return dependencyResults;
  }

  async performComprehensiveHealthCheck() {
    this.log("🚀 Starting comprehensive GitHub Actions health check...");
    
    const results = {
      workflowsDirectory: {},
      workflowValidation: {},
      triggers: {},
      dependencies: {},
      overall: false,
      timestamp: new Date().toISOString()
    };

    try {
      // Check workflows directory
      results.workflowsDirectory = await this.checkWorkflowsDirectory();
      
      if (!results.workflowsDirectory.exists) {
        this.log("❌ Workflows directory check failed", "ERROR");
        results.overall = false;
        return results;
      }

      // Validate workflows
      results.workflowValidation = await this.validateAllWorkflows();
      
      // Check triggers
      results.triggers = await this.checkWorkflowTriggers();
      
      // Check dependencies
      results.dependencies = await this.checkWorkflowDependencies();
      
      // Create backups if enabled
      if (this.config.backupWorkflows) {
        await this.createBackupWorkflows();
      }
      
      // Determine overall health
      const hasErrors = Object.values(results.workflowValidation).some(validation => !validation.valid);
      results.overall = !hasErrors && results.workflowsDirectory.exists;
      
      // Generate health summary
      this.log(`📊 GitHub Actions Health Summary:`);
      this.log(`   Workflows directory: ${results.workflowsDirectory.exists ? '✅' : '❌'}`);
      this.log(`   Workflows valid: ${results.overall ? '✅' : '❌'}`);
      this.log(`   Total workflows: ${results.workflowsDirectory.workflows.length}`);
      
      if (results.overall) {
        this.log("🎉 All GitHub Actions workflows are healthy!");
        this.failureCount = 0; // Reset failure count on success
      } else {
        this.failureCount++;
        this.log(`⚠️ GitHub Actions health check failed (attempt ${this.failureCount})`, "WARN");
        
        if (this.failureCount >= this.config.alertThreshold) {
          this.log(`🚨 Alert threshold reached (${this.failureCount}/${this.config.alertThreshold})`, "ERROR");
        }
      }
      
      // Save health history
      this.healthHistory.push(results);
      if (this.healthHistory.length > 100) {
        this.healthHistory = this.healthHistory.slice(-100);
      }
      
      // Save detailed health report
      await this.saveHealthReport(results);
      
    } catch (error) {
      this.log(`❌ Comprehensive health check failed: ${error.message}`, "ERROR");
      results.overall = false;
      this.failureCount++;
    }

    return results;
  }

  async saveHealthReport(results) {
    try {
      const reportPath = path.join(this.logDir, "github-actions-health-report.json");
      fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
      
      // Also save to logs directory with timestamp
      const logReportPath = path.join(this.logDir, `github-actions-health-${new Date().toISOString().split('T')[0]}.json`);
      fs.writeFileSync(logReportPath, JSON.stringify(results, null, 2));
      
      this.log(`💾 Health report saved`);
    } catch (error) {
      this.log(`⚠️ Could not save health report: ${error.message}`, "WARN");
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("⚠️ Monitoring is already running", "WARN");
      return;
    }

    this.log("🔍 Starting enhanced GitHub Actions redundancy monitoring...");
    this.monitoring = true;

    // Perform initial health check
    await this.performComprehensiveHealthCheck();

    // Start periodic monitoring
    this.checkInterval = setInterval(async () => {
      try {
        await this.performComprehensiveHealthCheck();
      } catch (error) {
        this.log(`❌ Monitoring cycle failed: ${error.message}`, "ERROR");
      }
    }, this.config.checkInterval);

    this.log(`✅ Enhanced GitHub Actions redundancy monitoring started with ${this.config.checkInterval}ms intervals`);
  }

  async stopMonitoring() {
    if (!this.monitoring) {
      this.log("⚠️ Monitoring is not running", "WARN");
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

  async emergencyRecovery() {
    this.log("🚨 Emergency recovery mode activated for GitHub Actions...");
    
    try {
      // Stop monitoring temporarily
      await this.stopMonitoring();
      
      // Create emergency backups
      await this.createBackupWorkflows();
      
      // Attempt to fix common issues
      if (this.config.autoFix) {
        await this.attemptAutoFix();
      }
      
      // Restart monitoring
      await this.startMonitoring();
      
      this.log("✅ Emergency recovery completed");
    } catch (error) {
      this.log(`❌ Emergency recovery failed: ${error.message}`, "ERROR");
      
      // Try to restart monitoring anyway
      try {
        await this.startMonitoring();
      } catch (monitoringError) {
        this.log(`❌ Failed to restart monitoring: ${monitoringError.message}`, "ERROR");
      }
    }
  }

  async attemptAutoFix() {
    this.log("🔧 Attempting automatic fixes...");
    
    try {
      // Check for common issues and fix them
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      const workflowFiles = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));
      
      for (const workflow of workflowFiles) {
        const attempts = this.fixAttempts.get(workflow) || 0;
        
        if (attempts >= this.config.maxFixAttempts) {
          this.log(`⚠️ Skipping ${workflow} - max fix attempts reached`, "WARN");
          continue;
        }
        
        const workflowPath = path.join(workflowsDir, workflow);
        const content = fs.readFileSync(workflowPath, 'utf8');
        let fixed = false;
        
        // Fix common YAML issues
        if (content.includes('\t')) {
          const fixedContent = content.replace(/\t/g, '  ');
          fs.writeFileSync(workflowPath, fixedContent);
          this.log(`🔧 Fixed tabs in ${workflow}`);
          fixed = true;
        }
        
        // Fix common cron syntax issues
        if (content.includes('cron:') && content.includes('*/')) {
          // Check for invalid cron expressions
          const cronMatches = content.match(/cron:\s*['"`]([^'"`]+)['"`]/g);
          if (cronMatches) {
            for (const match of cronMatches) {
              const cronExpression = match.match(/cron:\s*['"`]([^'"`]+)['"`]/)[1];
              if (!this.isValidCronExpression(cronExpression)) {
                this.log(`⚠️ Invalid cron expression found in ${workflow}: ${cronExpression}`, "WARN");
                // Could implement cron fixing logic here
              }
            }
          }
        }
        
        if (fixed) {
          this.fixAttempts.set(workflow, attempts + 1);
        }
      }
      
      this.log("✅ Auto-fix attempts completed");
    } catch (error) {
      this.log(`⚠️ Auto-fix failed: ${error.message}`, "WARN");
    }
  }

  getHealthHistory() {
    return this.healthHistory;
  }

  getFailureCount() {
    return this.failureCount;
  }

  getFixAttempts() {
    return Object.fromEntries(this.fixAttempts);
  }

  async cleanup() {
    this.log("🧹 Cleaning up enhanced GitHub Actions redundancy...");
    
    try {
      await this.stopMonitoring();
      
      // Rotate logs if enabled
      if (this.config.logRotation) {
        await this.rotateLogs();
      }
      
      this.log("✅ Cleanup completed");
    } catch (error) {
      this.log(`❌ Cleanup failed: ${error.message}`, "ERROR");
    }
  }

  async rotateLogs() {
    try {
      const logFiles = fs.readdirSync(this.logDir)
        .filter(file => file.startsWith('enhanced-github-actions-redundancy'))
        .sort();

      // Remove old log files if we exceed maxLogFiles
      if (logFiles.length > this.config.maxLogFiles) {
        const filesToRemove = logFiles.slice(0, logFiles.length - this.config.maxLogFiles);
        
        for (const file of filesToRemove) {
          const filePath = path.join(this.logDir, file);
          fs.unlinkSync(filePath);
          this.log(`🗑️ Removed old log file: ${file}`);
        }
      }
    } catch (error) {
      this.log(`⚠️ Could not rotate logs: ${error.message}`, "WARN");
    }
  }
}

// Start the enhanced GitHub Actions redundancy monitor if run directly
if (require.main === module) {
  const monitor = new EnhancedGitHubActionsRedundancy();
  
  // Handle process signals
  process.on('SIGINT', async () => {
    console.log('\n🛑 Received SIGINT, shutting down gracefully...');
    await monitor.cleanup();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
    await monitor.cleanup();
    process.exit(0);
  });
  
  // Start monitoring
  monitor.startMonitoring().catch(error => {
    console.error('❌ Failed to start monitoring:', error);
    process.exit(1);
  });
}

module.exports = EnhancedGitHubActionsRedundancy;