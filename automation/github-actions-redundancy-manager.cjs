#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

class GitHubActionsRedundancyManager {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "github-actions-redundancy.log");
    this.ensureLogDir();
    
    this.config = {
      // GitHub Actions workflows directory
      workflowsDir: path.join(this.workspace, ".github/workflows"),
      
      // Primary workflows that need redundancy
      primaryWorkflows: [
        "marketing-sync.yml",
        "sync-health.yml"
      ],
      
      // Backup workflows
      backupWorkflows: [
        "marketing-sync-backup.yml",
        "sync-health-backup.yml"
      ],
      
      // All workflows to monitor
      allWorkflows: [
        "marketing-sync.yml",
        "sync-health.yml",
        "marketing-sync-backup.yml",
        "sync-health-backup.yml"
      ],
      
      // Workflow validation rules
      validationRules: {
        requiredSections: ["on", "jobs"],
        requiredPermissions: ["contents"],
        requiredTriggers: ["schedule", "workflow_dispatch"],
        maxFileSize: 10 * 1024, // 10KB
        maxWorkflowDuration: 3600 // 1 hour
      },
      
      // Monitoring intervals
      intervals: {
        workflowHealth: 60000,      // 1 minute
        backupValidation: 300000,   // 5 minutes
        overallHealth: 900000       // 15 minutes
      },
      
      // Recovery settings
      recovery: {
        maxAttempts: 3,
        retryDelay: 10000,          // 10 seconds
        backupThreshold: 2          // Minimum backup workflows required
      }
    };
    
    this.monitoring = false;
    this.checkIntervals = new Map();
    this.workflowHealth = new Map();
    this.backupStatus = new Map();
    this.recoveryAttempts = new Map();
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
    return true;
  }

  // Get list of existing workflows
  getExistingWorkflows() {
    try {
      if (!this.checkWorkflowsDirectory()) {
        return [];
      }
      
      const files = fs.readdirSync(this.config.workflowsDir);
      return files.filter(file => file.endsWith('.yml') || file.endsWith('.yaml'));
    } catch (error) {
      this.log(`Failed to read workflows directory: ${error.message}`, "ERROR");
      return [];
    }
  }

  // Validate workflow file syntax and structure
  validateWorkflow(workflowName) {
    try {
      const workflowPath = path.join(this.config.workflowsDir, workflowName);
      
      if (!fs.existsSync(workflowPath)) {
        return {
          valid: false,
          errors: [`Workflow file not found: ${workflowName}`]
        };
      }
      
      const stats = fs.statSync(workflowPath);
      const content = fs.readFileSync(workflowPath, "utf8");
      
      const validation = {
        valid: true,
        errors: [],
        warnings: [],
        info: {
          size: stats.size,
          lastModified: stats.mtime,
          lines: content.split('\n').length
        }
      };
      
      // Check file size
      if (stats.size > this.config.validationRules.maxFileSize) {
        validation.warnings.push(`File size (${stats.size} bytes) exceeds recommended limit`);
      }
      
      // Check required sections
      for (const section of this.config.validationRules.requiredSections) {
        if (!content.includes(`${section}:`)) {
          validation.errors.push(`Missing required section: ${section}`);
          validation.valid = false;
        }
      }
      
      // Check for basic YAML structure
      if (!content.includes('---') && !content.includes('on:')) {
        validation.warnings.push("File may not be valid YAML");
      }
      
      // Check for required permissions
      if (!content.includes('permissions:') || !content.includes('contents: write')) {
        validation.warnings.push("Missing or insufficient permissions configuration");
      }
      
      // Check for required triggers
      let hasValidTrigger = false;
      for (const trigger of this.config.validationRules.requiredTriggers) {
        if (content.includes(trigger)) {
          hasValidTrigger = true;
          break;
        }
      }
      
      if (!hasValidTrigger) {
        validation.warnings.push("Missing recommended triggers (schedule or workflow_dispatch)");
      }
      
      // Check for common workflow issues
      if (content.includes('on:') && !content.includes('jobs:')) {
        validation.errors.push("Workflow has triggers but no jobs defined");
        validation.valid = false;
      }
      
      if (content.includes('jobs:') && !content.includes('runs-on:')) {
        validation.warnings.push("Jobs defined but no runner specified");
      }
      
      return validation;
      
    } catch (error) {
      return {
        valid: false,
        errors: [`Validation failed: ${error.message}`]
      };
    }
  }

  // Check backup workflow configuration
  checkBackupWorkflowConfiguration() {
    try {
      this.log("Checking backup workflow configuration", "INFO");
      
      const backupStatus = {};
      let overallHealthy = true;
      
      for (const primaryWorkflow of this.config.primaryWorkflows) {
        const backupWorkflow = primaryWorkflow.replace('.yml', '-backup.yml');
        const primaryPath = path.join(this.config.workflowsDir, primaryWorkflow);
        const backupPath = path.join(this.config.workflowsDir, backupWorkflow);
        
        const status = {
          primary: fs.existsSync(primaryPath),
          backup: fs.existsSync(backupPath),
          healthy: false,
          issues: []
        };
        
        if (status.primary && status.backup) {
          // Validate both workflows
          const primaryValidation = this.validateWorkflow(primaryWorkflow);
          const backupValidation = this.validateWorkflow(backupWorkflow);
          
          if (primaryValidation.valid && backupValidation.valid) {
            status.healthy = true;
            status.primaryValidation = primaryValidation;
            status.backupValidation = backupValidation;
          } else {
            status.healthy = false;
            if (!primaryValidation.valid) {
              status.issues.push(`Primary workflow validation failed: ${primaryValidation.errors.join(', ')}`);
            }
            if (!backupValidation.valid) {
              status.issues.push(`Backup workflow validation failed: ${backupValidation.errors.join(', ')}`);
            }
          }
        } else {
          status.healthy = false;
          if (!status.primary) {
            status.issues.push("Primary workflow not found");
          }
          if (!status.backup) {
            status.issues.push("Backup workflow not found");
          }
        }
        
        backupStatus[primaryWorkflow] = status;
        
        if (!status.healthy) {
          overallHealthy = false;
        }
      }
      
      this.backupStatus = backupStatus;
      
      if (overallHealthy) {
        this.log("All backup workflows are properly configured", "INFO");
      } else {
        this.log("Some backup workflows have issues", "WARN");
      }
      
      return {
        overall: overallHealthy,
        workflows: backupStatus
      };
      
    } catch (error) {
      this.log(`Backup workflow configuration check failed: ${error.message}`, "ERROR");
      return {
        overall: false,
        error: error.message
      };
    }
  }

  // Create backup workflow if missing
  async createBackupWorkflow(primaryWorkflow) {
    try {
      const primaryPath = path.join(this.config.workflowsDir, primaryWorkflow);
      const backupWorkflow = primaryWorkflow.replace('.yml', '-backup.yml');
      const backupPath = path.join(this.config.workflowsDir, backupWorkflow);
      
      if (!fs.existsSync(primaryPath)) {
        this.log(`Primary workflow not found: ${primaryWorkflow}`, "ERROR");
        return false;
      }
      
      if (fs.existsSync(backupPath)) {
        this.log(`Backup workflow already exists: ${backupWorkflow}`, "INFO");
        return true;
      }
      
      this.log(`Creating backup workflow: ${backupWorkflow}`, "INFO");
      
      // Read primary workflow content
      const primaryContent = fs.readFileSync(primaryPath, "utf8");
      
      // Create backup workflow content with modifications
      let backupContent = primaryContent;
      
      // Modify the name to indicate it's a backup
      backupContent = backupContent.replace(
        /^name:\s*(.+)$/m,
        'name: $1 (Backup)'
      );
      
      // Add backup indicator in description
      if (backupContent.includes('description:')) {
        backupContent = backupContent.replace(
          /^description:\s*(.+)$/m,
          'description: $1 - Backup workflow'
        );
      } else {
        // Add description if it doesn't exist
        backupContent = backupContent.replace(
          /^name:\s*(.+)$/m,
          'name: $1 (Backup)\ndescription: Backup workflow for redundancy'
        );
      }
      
      // Modify schedule to run at different times (offset by 1 hour)
      backupContent = backupContent.replace(
        /cron:\s*'(\d+)\s+(\d+)\s+\*\s+\*\s+\*'/,
        (match, hour, minute) => {
          const newHour = (parseInt(hour) + 1) % 24;
          return `cron: '${newHour} ${minute} * * *'`;
        }
      );
      
      // Write backup workflow
      fs.writeFileSync(backupPath, backupContent);
      
      this.log(`Backup workflow created successfully: ${backupWorkflow}`, "INFO");
      return true;
      
    } catch (error) {
      this.log(`Failed to create backup workflow for ${primaryWorkflow}: ${error.message}`, "ERROR");
      return false;
    }
  }

  // Validate all workflows
  async validateAllWorkflows() {
    try {
      this.log("Validating all GitHub Actions workflows", "INFO");
      
      const existingWorkflows = this.getExistingWorkflows();
      const validationResults = {};
      let overallHealthy = true;
      
      for (const workflow of this.config.allWorkflows) {
        const validation = this.validateWorkflow(workflow);
        validationResults[workflow] = validation;
        
        if (!validation.valid) {
          overallHealthy = false;
        }
      }
      
      // Check for orphaned workflows
      const orphanedWorkflows = existingWorkflows.filter(w => !this.config.allWorkflows.includes(w));
      if (orphanedWorkflows.length > 0) {
        validationResults.orphaned = {
          workflows: orphanedWorkflows,
          warning: "Found workflows not in monitored list"
        };
      }
      
      this.workflowHealth = validationResults;
      
      if (overallHealthy) {
        this.log("All workflows are valid", "INFO");
      } else {
        this.log("Some workflows have validation issues", "WARN");
      }
      
      return {
        overall: overallHealthy,
        workflows: validationResults
      };
      
    } catch (error) {
      this.log(`Workflow validation failed: ${error.message}`, "ERROR");
      return {
        overall: false,
        error: error.message
      };
    }
  }

  // Check workflow execution status (if possible)
  async checkWorkflowExecutionStatus() {
    try {
      // This would typically use GitHub API to check workflow runs
      // For now, we'll check if the workflow files are accessible and valid
      
      const executionStatus = {
        timestamp: new Date().toISOString(),
        workflows: {},
        overall: true
      };
      
      for (const workflow of this.config.primaryWorkflows) {
        const status = {
          accessible: false,
          valid: false,
          lastRun: null,
          nextRun: null
        };
        
        const workflowPath = path.join(this.config.workflowsDir, workflow);
        
        if (fs.existsSync(workflowPath)) {
          status.accessible = true;
          
          const validation = this.validateWorkflow(workflow);
          status.valid = validation.valid;
          
          // Try to parse schedule information
          try {
            const content = fs.readFileSync(workflowPath, "utf8");
            const scheduleMatch = content.match(/cron:\s*'([^']+)'/);
            if (scheduleMatch) {
              status.nextRun = `Scheduled: ${scheduleMatch[1]}`;
            }
          } catch (error) {
            // Ignore parsing errors
          }
        }
        
        executionStatus.workflows[workflow] = status;
        
        if (!status.accessible || !status.valid) {
          executionStatus.overall = false;
        }
      }
      
      return executionStatus;
      
    } catch (error) {
      this.log(`Workflow execution status check failed: ${error.message}`, "ERROR");
      return {
        overall: false,
        error: error.message
      };
    }
  }

  // Perform recovery actions
  async performRecovery() {
    try {
      this.log("Performing GitHub Actions recovery", "INFO");
      
      const recoveryResults = {
        timestamp: new Date().toISOString(),
        actions: [],
        success: true
      };
      
      // Check backup workflow configuration
      const backupStatus = this.checkBackupWorkflowConfiguration();
      
      if (!backupStatus.overall) {
        // Create missing backup workflows
        for (const [primaryWorkflow, status] of Object.entries(backupStatus.workflows)) {
          if (!status.healthy) {
            this.log(`Attempting to fix backup workflow for: ${primaryWorkflow}`, "INFO");
            
            const success = await this.createBackupWorkflow(primaryWorkflow);
            if (success) {
              recoveryResults.actions.push(`Created backup workflow for ${primaryWorkflow}`);
            } else {
              recoveryResults.actions.push(`Failed to create backup workflow for ${primaryWorkflow}`);
              recoveryResults.success = false;
            }
          }
        }
      }
      
      // Validate all workflows
      const validationResults = await this.validateAllWorkflows();
      if (!validationResults.overall) {
        recoveryResults.actions.push("Workflow validation issues detected");
        recoveryResults.success = false;
      }
      
      // Check execution status
      const executionStatus = await this.checkWorkflowExecutionStatus();
      if (!executionStatus.overall) {
        recoveryResults.actions.push("Workflow execution issues detected");
        recoveryResults.success = false;
      }
      
      if (recoveryResults.success) {
        this.log("GitHub Actions recovery completed successfully", "INFO");
      } else {
        this.log("GitHub Actions recovery completed with issues", "WARN");
      }
      
      return recoveryResults;
      
    } catch (error) {
      this.log(`Recovery failed: ${error.message}`, "ERROR");
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Overall health check
  async checkOverallHealth() {
    try {
      this.log("Performing overall GitHub Actions health check", "INFO");
      
      // Check workflows directory
      if (!this.checkWorkflowsDirectory()) {
        return {
          overall: false,
          error: "Workflows directory not found"
        };
      }
      
      // Validate all workflows
      const validationResults = await this.validateAllWorkflows();
      
      // Check backup configuration
      const backupStatus = this.checkBackupWorkflowConfiguration();
      
      // Check execution status
      const executionStatus = await this.checkWorkflowExecutionStatus();
      
      const overallHealth = {
        timestamp: new Date().toISOString(),
        workflowsDirectory: true,
        validation: validationResults,
        backupConfiguration: backupStatus,
        execution: executionStatus,
        overall: validationResults.overall && backupStatus.overall && executionStatus.overall
      };
      
      if (overallHealth.overall) {
        this.log("All GitHub Actions systems are healthy", "INFO");
      } else {
        this.log("Some GitHub Actions systems have issues", "WARN");
        
        // Trigger recovery if needed
        const recoveryAttempts = this.recoveryAttempts.get("overall") || 0;
        if (recoveryAttempts < this.config.recovery.maxAttempts) {
          this.log(`Triggering recovery (attempt ${recoveryAttempts + 1})`, "INFO");
          this.recoveryAttempts.set("overall", recoveryAttempts + 1);
          
          setTimeout(async () => {
            await this.performRecovery();
          }, this.config.recovery.retryDelay);
        } else {
          this.log("Maximum recovery attempts exceeded", "ERROR");
        }
      }
      
      return overallHealth;
      
    } catch (error) {
      this.log(`Overall health check failed: ${error.message}`, "ERROR");
      return {
        overall: false,
        error: error.message
      };
    }
  }

  // Start monitoring
  start() {
    if (this.monitoring) {
      this.log("Monitoring already started", "WARN");
      return;
    }
    
    this.monitoring = true;
    this.log("Starting GitHub Actions redundancy monitoring", "INFO");
    
    // Start workflow health monitoring
    this.checkIntervals.set("workflow", setInterval(async () => {
      await this.validateAllWorkflows();
    }, this.config.intervals.workflowHealth));
    
    // Start backup validation monitoring
    this.checkIntervals.set("backup", setInterval(async () => {
      this.checkBackupWorkflowConfiguration();
    }, this.config.intervals.backupValidation));
    
    // Start overall health monitoring
    this.checkIntervals.set("overall", setInterval(async () => {
      await this.checkOverallHealth();
    }, this.config.intervals.overallHealth));
    
    this.log("GitHub Actions redundancy monitoring started", "INFO");
  }

  // Stop monitoring
  stop() {
    if (!this.monitoring) {
      this.log("Monitoring not started", "WARN");
      return;
    }
    
    this.monitoring = false;
    
    // Clear all intervals
    for (const [name, interval] of this.checkIntervals) {
      clearInterval(interval);
      this.log(`Stopped ${name} monitoring`, "INFO");
    }
    this.checkIntervals.clear();
    
    this.log("GitHub Actions redundancy monitoring stopped", "INFO");
  }

  // Get status
  getStatus() {
    return {
      monitoring: this.monitoring,
      workflowHealth: Object.fromEntries(this.workflowHealth),
      backupStatus: Object.fromEntries(this.backupStatus),
      recoveryAttempts: Object.fromEntries(this.recoveryAttempts),
      lastBackupSync: this.lastBackupSync,
      config: this.config
    };
  }

  // Run once
  async runOnce() {
    this.log("Running GitHub Actions redundancy check once", "INFO");
    return await this.checkOverallHealth();
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
      manager.runOnce().then(status => {
        console.log(JSON.stringify(status, null, 2));
        process.exit(0);
      });
      break;
    case "health":
      manager.checkOverallHealth().then(status => {
        console.log(JSON.stringify(status, null, 2));
        process.exit(0);
      });
      break;
    case "recovery":
      manager.performRecovery().then(results => {
        console.log(JSON.stringify(results, null, 2));
        process.exit(0);
      });
      break;
    default:
      console.log("Usage: node github-actions-redundancy-manager.cjs [start|stop|status|once|health|recovery]");
      process.exit(1);
  }
}

module.exports = GitHubActionsRedundancyManager;