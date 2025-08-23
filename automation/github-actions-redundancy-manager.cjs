#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

class GitHubActionsRedundancyManager {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "github-actions-redundancy.log");
    this.ensureLogDir();
    
    this.config = {
      // GitHub Actions workflows directory
      workflowsDir: path.join(this.workspace, ".github/workflows"),
      
      // Primary workflows and their backup counterparts
      workflowPairs: {
        "marketing-sync.yml": "marketing-sync-backup.yml",
        "sync-health.yml": "sync-health-backup.yml"
      },
      
      // Workflow validation rules
      validationRules: {
        requiredSections: ["on", "jobs"],
        requiredPermissions: ["contents"],
        requiredSteps: ["checkout", "setup-node"],
        cronSchedulePattern: /^(\*|([0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])|\*\/([0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])) (\*|([0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])|\*\/([0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9])) (\*|([1-9]|1[0-9]|2[0-9]|3[0-1])|\*\/([1-9]|1[0-9]|2[0-9]|3[0-1])) (\*|([1-9]|1[0-2])|\*\/([1-9]|1[0-2])) (\*|([0-6])|\*\/([0-6]))$/
      },
      
      // Health check intervals
      healthCheckInterval: 60000, // 1 minute
      backupSyncInterval: 300000, // 5 minutes
      
      // Error thresholds
      maxValidationErrors: 3,
      maxWorkflowFailures: 2
    };
    
    this.monitoring = false;
    this.checkInterval = null;
    this.backupInterval = null;
    this.healthHistory = new Map();
    this.errorCounts = new Map();
    this.lastBackupSync = new Date();
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

  // Check if workflows directory exists
  checkWorkflowsDirectory() {
    if (!fs.existsSync(this.config.workflowsDir)) {
      this.log("GitHub workflows directory not found", "ERROR");
      return false;
    }
    
    this.log("GitHub workflows directory found", "INFO");
    return true;
  }

  // List all workflow files
  listWorkflowFiles() {
    try {
      if (!fs.existsSync(this.config.workflowsDir)) {
        return [];
      }
      
      const files = fs.readdirSync(this.config.workflowsDir);
      return files.filter(file => file.endsWith('.yml') || file.endsWith('.yaml'));
    } catch (error) {
      this.log(`Failed to list workflow files: ${error.message}`, "ERROR");
      return [];
    }
  }

  // Validate YAML syntax
  validateYAMLSyntax(content, filename) {
    try {
      yaml.load(content);
      return { valid: true, error: null };
    } catch (error) {
      return { valid: false, error: error.message };
    }
  }

  // Validate workflow structure
  validateWorkflowStructure(content, filename) {
    const errors = [];
    
    try {
      const workflow = yaml.load(content);
      
      // Check required sections
      for (const section of this.config.validationRules.requiredSections) {
        if (!workflow[section]) {
          errors.push(`Missing required section: ${section}`);
        }
      }
      
      // Check permissions
      if (workflow.permissions) {
        const hasContentsPermission = workflow.permissions.contents === "write" || 
                                   workflow.permissions.contents === "read";
        if (!hasContentsPermission) {
          errors.push("Missing or insufficient contents permission");
        }
      } else {
        errors.push("Missing permissions section");
      }
      
      // Check jobs structure
      if (workflow.jobs) {
        for (const [jobName, job] of Object.entries(workflow.jobs)) {
          if (!job.steps || !Array.isArray(job.steps)) {
            errors.push(`Job ${jobName} missing or invalid steps`);
            continue;
          }
          
          // Check for required steps
          const stepNames = job.steps.map(step => step.name || step.uses || '');
          const hasCheckout = stepNames.some(name => name.includes('checkout'));
          const hasSetupNode = stepNames.some(name => name.includes('setup-node'));
          
          if (!hasCheckout) {
            errors.push(`Job ${jobName} missing checkout step`);
          }
          if (!hasSetupNode) {
            errors.push(`Job ${jobName} missing setup-node step`);
          }
        }
      }
      
      // Check cron schedule if present
      if (workflow.on && workflow.on.schedule) {
        for (const schedule of workflow.on.schedule) {
          if (schedule.cron && !this.config.validationRules.cronSchedulePattern.test(schedule.cron)) {
            errors.push(`Invalid cron schedule: ${schedule.cron}`);
          }
        }
      }
      
    } catch (error) {
      errors.push(`YAML parsing error: ${error.message}`);
    }
    
    return {
      valid: errors.length === 0,
      errors: errors
    };
  }

  // Validate individual workflow
  async validateWorkflow(filename) {
    try {
      const filepath = path.join(this.config.workflowsDir, filename);
      
      if (!fs.existsSync(filepath)) {
        return {
          valid: false,
          error: "File not found",
          filename: filename
        };
      }
      
      const content = fs.readFileSync(filepath, 'utf8');
      
      // Check YAML syntax
      const yamlValidation = this.validateYAMLSyntax(content, filename);
      if (!yamlValidation.valid) {
        return {
          valid: false,
          error: `YAML syntax error: ${yamlValidation.error}`,
          filename: filename
        };
      }
      
      // Check workflow structure
      const structureValidation = this.validateWorkflowStructure(content, filename);
      if (!structureValidation.valid) {
        return {
          valid: false,
          error: `Structure validation failed: ${structureValidation.errors.join(', ')}`,
          filename: filename,
          details: structureValidation.errors
        };
      }
      
      return {
        valid: true,
        filename: filename
      };
      
    } catch (error) {
      return {
        valid: false,
        error: error.message,
        filename: filename
      };
    }
  }

  // Validate all workflows
  async validateAllWorkflows() {
    try {
      this.log("Validating all GitHub Actions workflows", "INFO");
      
      const workflowFiles = this.listWorkflowFiles();
      if (workflowFiles.length === 0) {
        this.log("No workflow files found", "WARN");
        return { valid: false, workflows: [] };
      }
      
      const validationResults = [];
      let overallValid = true;
      
      for (const filename of workflowFiles) {
        const result = await this.validateWorkflow(filename);
        validationResults.push(result);
        
        if (!result.valid) {
          overallValid = false;
          this.log(`Workflow ${filename} validation failed: ${result.error}`, "ERROR");
          
          // Increment error count
          const currentCount = this.errorCounts.get(filename) || 0;
          this.errorCounts.set(filename, currentCount + 1);
        } else {
          this.log(`Workflow ${filename} validation passed`, "INFO");
          // Reset error count on success
          this.errorCounts.set(filename, 0);
        }
      }
      
      return {
        valid: overallValid,
        workflows: validationResults,
        timestamp: new Date().toISOString()
      };
      
    } catch (error) {
      this.log(`Workflow validation failed: ${error.message}`, "ERROR");
      return { valid: false, error: error.message };
    }
  }

  // Check backup workflow pairs
  async checkBackupWorkflows() {
    try {
      this.log("Checking backup workflow pairs", "INFO");
      
      const results = {};
      let allBackupsValid = true;
      
      for (const [primary, backup] of Object.entries(this.config.workflowPairs)) {
        const primaryPath = path.join(this.config.workflowsDir, primary);
        const backupPath = path.join(this.config.workflowsDir, backup);
        
        const primaryExists = fs.existsSync(primaryPath);
        const backupExists = fs.existsSync(backupPath);
        
        if (!primaryExists) {
          this.log(`Primary workflow not found: ${primary}`, "ERROR");
          allBackupsValid = false;
          results[primary] = { status: "missing", backup: backupExists };
          continue;
        }
        
        if (!backupExists) {
          this.log(`Backup workflow missing: ${backup}`, "WARN");
          results[primary] = { status: "no_backup", backup: false };
          continue;
        }
        
        // Validate both workflows
        const primaryValidation = await this.validateWorkflow(primary);
        const backupValidation = await this.validateWorkflow(backup);
        
        if (primaryValidation.valid && backupValidation.valid) {
          this.log(`Backup pair valid: ${primary} ↔ ${backup}`, "INFO");
          results[primary] = { 
            status: "valid", 
            backup: true,
            primary: primaryValidation,
            backup: backupValidation
          };
        } else {
          this.log(`Backup pair validation failed: ${primary} ↔ ${backup}`, "ERROR");
          allBackupsValid = false;
          results[primary] = {
            status: "validation_failed",
            backup: true,
            primary: primaryValidation,
            backup: backupValidation
          };
        }
      }
      
      return {
        valid: allBackupsValid,
        results: results,
        timestamp: new Date().toISOString()
      };
      
    } catch (error) {
      this.log(`Backup workflow check failed: ${error.message}`, "ERROR");
      return { valid: false, error: error.message };
    }
  }

  // Create backup workflow if missing
  async createBackupWorkflow(primaryWorkflow, backupWorkflow) {
    try {
      const primaryPath = path.join(this.config.workflowsDir, primaryWorkflow);
      const backupPath = path.join(this.config.workflowsDir, backupWorkflow);
      
      if (!fs.existsSync(primaryPath)) {
        this.log(`Cannot create backup: primary workflow ${primaryWorkflow} not found`, "ERROR");
        return false;
      }
      
      if (fs.existsSync(backupPath)) {
        this.log(`Backup workflow ${backupWorkflow} already exists`, "INFO");
        return true;
      }
      
      // Read primary workflow content
      const primaryContent = fs.readFileSync(primaryPath, 'utf8');
      
      // Create backup content with modified triggers
      let backupContent = primaryContent;
      
      // Modify the backup workflow to have different triggers
      if (primaryContent.includes("schedule:")) {
        // Add a delay to the cron schedule for backup workflows
        backupContent = backupContent.replace(
          /cron:\s*'([^']+)'/g,
          (match, cron) => {
            // Add 5 minutes to the cron schedule
            const parts = cron.split(' ');
            if (parts.length >= 2) {
              const minute = parseInt(parts[1]);
              const newMinute = (minute + 5) % 60;
              parts[1] = newMinute.toString();
            }
            return `cron: '${parts.join(' ')}'`;
          }
        );
      }
      
      // Add backup indicator to workflow name
      backupContent = backupContent.replace(
        /name:\s*([^\n]+)/,
        "name: $1 (Backup)"
      );
      
      // Write backup workflow
      fs.writeFileSync(backupPath, backupContent);
      this.log(`Backup workflow created: ${backupWorkflow}`, "INFO");
      
      return true;
      
    } catch (error) {
      this.log(`Failed to create backup workflow: ${error.message}`, "ERROR");
      return false;
    }
  }

  // Sync backup workflows
  async syncBackupWorkflows() {
    try {
      this.log("Syncing backup workflows", "INFO");
      
      const now = new Date();
      const timeSinceLastSync = now - this.lastBackupSync;
      
      if (timeSinceLastSync < this.config.backupSyncInterval) {
        this.log("Backup sync not due yet", "INFO");
        return true;
      }
      
      for (const [primary, backup] of Object.entries(this.config.workflowPairs)) {
        await this.createBackupWorkflow(primary, backup);
      }
      
      this.lastBackupSync = now;
      this.log("Backup workflow sync completed", "INFO");
      
      return true;
      
    } catch (error) {
      this.log(`Backup workflow sync failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  // Check workflow execution status (if possible)
  async checkWorkflowExecutionStatus() {
    try {
      // This would typically involve GitHub API calls
      // For now, we'll check if the workflow files are recent
      const results = {};
      
      for (const [primary, backup] of Object.entries(this.config.workflowPairs)) {
        const primaryPath = path.join(this.config.workflowsDir, primary);
        const backupPath = path.join(this.config.workflowsDir, backup);
        
        if (fs.existsSync(primaryPath)) {
          const stats = fs.statSync(primaryPath);
          results[primary] = {
            lastModified: stats.mtime,
            size: stats.size
          };
        }
        
        if (fs.existsSync(backupPath)) {
          const stats = fs.statSync(backupPath);
          results[backup] = {
            lastModified: stats.mtime,
            size: stats.size
          };
        }
      }
      
      return results;
      
    } catch (error) {
      this.log(`Workflow execution status check failed: ${error.message}`, "ERROR");
      return {};
    }
  }

  // Perform comprehensive health check
  async performHealthCheck() {
    try {
      this.log("Performing GitHub Actions health check", "INFO");
      
      // Check workflows directory
      if (!this.checkWorkflowsDirectory()) {
        return { valid: false, error: "Workflows directory not found" };
      }
      
      // Validate all workflows
      const validationResult = await this.validateAllWorkflows();
      
      // Check backup workflows
      const backupResult = await this.checkBackupWorkflows();
      
      // Check execution status
      const executionStatus = await this.checkWorkflowExecutionStatus();
      
      // Determine overall health
      const overallHealth = validationResult.valid && backupResult.valid;
      
      const healthResult = {
        timestamp: new Date().toISOString(),
        valid: overallHealth,
        validation: validationResult,
        backup: backupResult,
        execution: executionStatus,
        errorCounts: Object.fromEntries(this.errorCounts)
      };
      
      this.healthHistory.set("github-actions", healthResult);
      
      if (overallHealth) {
        this.log("All GitHub Actions workflows healthy", "INFO");
      } else {
        this.log("Some GitHub Actions workflows unhealthy", "WARN");
      }
      
      return healthResult;
      
    } catch (error) {
      this.log(`GitHub Actions health check failed: ${error.message}`, "ERROR");
      return { valid: false, error: error.message };
    }
  }

  // Start monitoring
  start() {
    if (this.monitoring) {
      this.log("GitHub Actions redundancy monitoring already started", "WARN");
      return;
    }
    
    this.monitoring = true;
    this.log("Starting GitHub Actions redundancy monitoring", "INFO");
    
    // Start health check monitoring
    this.checkInterval = setInterval(async () => {
      await this.performHealthCheck();
    }, this.config.healthCheckInterval);
    
    // Start backup sync monitoring
    this.backupInterval = setInterval(async () => {
      await this.syncBackupWorkflows();
    }, this.config.backupSyncInterval);
    
    this.log("GitHub Actions redundancy monitoring started", "INFO");
  }

  // Stop monitoring
  stop() {
    if (!this.monitoring) {
      this.log("GitHub Actions redundancy monitoring not running", "WARN");
      return;
    }
    
    this.monitoring = false;
    
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    
    if (this.backupInterval) {
      clearInterval(this.backupInterval);
      this.backupInterval = null;
    }
    
    this.log("GitHub Actions redundancy monitoring stopped", "INFO");
  }

  // Get status
  getStatus() {
    return {
      monitoring: this.monitoring,
      health: this.healthHistory.get("github-actions") || null,
      errorCounts: Object.fromEntries(this.errorCounts),
      lastBackupSync: this.lastBackupSync,
      config: this.config
    };
  }

  // Run health check once
  async runOnce() {
    this.log("Running GitHub Actions health check once", "INFO");
    return await this.performHealthCheck();
  }

  // Force backup sync
  async forceBackupSync() {
    this.log("Forcing backup workflow sync", "INFO");
    this.lastBackupSync = new Date(0); // Reset to force sync
    return await this.syncBackupWorkflows();
  }
}

// CLI interface
if (require.main === module) {
  const manager = new GitHubActionsRedundancyManager();
  const command = process.argv[2] || "start";
  
  switch (command) {
    case "start":
      manager.start();
      break;
    case "stop":
      manager.stop();
      break;
    case "status":
      console.log(JSON.stringify(manager.getStatus(), null, 2));
      break;
    case "once":
      manager.runOnce().then(result => {
        console.log(JSON.stringify(result, null, 2));
        process.exit(0);
      });
      break;
    case "health":
      manager.performHealthCheck().then(result => {
        console.log(JSON.stringify(result, null, 2));
        process.exit(0);
      });
      break;
    case "sync":
      manager.forceBackupSync().then(result => {
        console.log(JSON.stringify({ synced: result }, null, 2));
        process.exit(0);
      });
      break;
    case "validate":
      manager.validateAllWorkflows().then(result => {
        console.log(JSON.stringify(result, null, 2));
        process.exit(0);
      });
      break;
    default:
      console.log("Usage: node github-actions-redundancy-manager.cjs [start|stop|status|once|health|sync|validate]");
      process.exit(1);
  }
}

module.exports = GitHubActionsRedundancyManager;