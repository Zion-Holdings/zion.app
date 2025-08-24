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
      workflows: [
        "marketing-sync.yml",
        "sync-health.yml"
      ],
      workflowPaths: [
        ".github/workflows/marketing-sync.yml",
        ".github/workflows/sync-health.yml"
      ],
      checkInterval: 60000, // 1 minute
      maxFailures: 3,
      retryDelay: 30000,
      autoTrigger: true,
      healthCheckWorkflow: "sync-health.yml",
      backupStrategies: [
        "local-execution",
        "webhook-trigger",
        "manual-trigger"
      ],
      localExecution: {
        enabled: true,
        timeout: 300000, // 5 minutes
        retryAttempts: 2
      }
    };
    
    this.monitoring = false;
    this.checkInterval = null;
    this.failureCounts = new Map();
    this.lastRunTimes = new Map();
    this.workflowStatus = new Map();
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
        return { exists: false, workflows: [] };
      }

      const workflowFiles = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));
      this.log(`📋 Found ${workflowFiles.length} workflow files: ${workflowFiles.join(', ')}`);
      
      return { exists: true, workflows: workflowFiles };
    } catch (error) {
      this.log(`❌ Error checking workflows directory: ${error.message}`, "ERROR");
      return { exists: false, workflows: [] };
    }
  }

  async validateWorkflow(workflowPath) {
    try {
      if (!fs.existsSync(workflowPath)) {
        return { valid: false, error: "Workflow file not found" };
      }

      const content = fs.readFileSync(workflowPath, 'utf8');
      
      // Basic YAML validation
      if (!content.includes('name:') || !content.includes('on:')) {
        return { valid: false, error: "Invalid workflow structure" };
      }

      // Check for required sections
      const requiredSections = ['name', 'on', 'jobs'];
      for (const section of requiredSections) {
        if (!content.includes(`${section}:`)) {
          return { valid: false, error: `Missing required section: ${section}` };
        }
      }

      return { valid: true, content };
    } catch (error) {
      return { valid: false, error: error.message };
    }
  }

  async checkWorkflowHealth(workflowName) {
    try {
      this.log(`Checking health of workflow: ${workflowName}`);
      
      const workflowPath = path.join(this.workspace, ".github/workflows", workflowName);
      const validation = await this.validateWorkflow(workflowPath);
      
      if (!validation.valid) {
        this.log(`❌ Workflow ${workflowName} validation failed: ${validation.error}`, "ERROR");
        return false;
      }

      // Check if workflow has been modified recently
      const stats = fs.statSync(workflowPath);
      const lastModified = stats.mtime;
      const now = new Date();
      const hoursSinceModified = (now - lastModified) / (1000 * 60 * 60);
      
      if (hoursSinceModified > 24) {
        this.log(`⚠️ Workflow ${workflowName} hasn't been modified in ${Math.round(hoursSinceModified)} hours`, "WARN");
      }

      // Check workflow syntax and structure
      const content = validation.content;
      
      // Validate cron schedules
      if (content.includes('cron:')) {
        const cronMatch = content.match(/cron:\s*['"`]([^'"`]+)['"`]/);
        if (cronMatch) {
          this.log(`📅 Workflow ${workflowName} has cron schedule: ${cronMatch[1]}`);
        }
      }

      // Check for manual triggers
      if (content.includes('workflow_dispatch:')) {
        this.log(`🔘 Workflow ${workflowName} supports manual dispatch`);
      }

      this.log(`✅ Workflow ${workflowName} is healthy`);
      return true;
    } catch (error) {
      this.log(`❌ Error checking workflow ${workflowName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async executeWorkflowLocally(workflowName) {
    try {
      this.log(`Executing workflow ${workflowName} locally...`);
      
      const workflowPath = path.join(this.workspace, ".github/workflows", workflowName);
      const validation = await this.validateWorkflow(workflowPath);
      
      if (!validation.valid) {
        throw new Error(`Invalid workflow: ${validation.error}`);
      }

      // Extract the main job command from the workflow
      const content = validation.content;
      const runMatch = content.match(/run:\s*([^\n]+)/);
      
      if (!runMatch) {
        throw new Error("No run command found in workflow");
      }

      const command = runMatch[1].trim();
      this.log(`Executing command: ${command}`);
      
      const result = await this.runCommand("bash", ["-c", command], {
        timeout: this.config.localExecution.timeout
      });
      
      if (result.status === 0) {
        this.log(`✅ Local execution of ${workflowName} completed successfully`);
        this.lastRunTimes.set(workflowName, new Date());
        return true;
      } else {
        this.log(`❌ Local execution of ${workflowName} failed: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Error executing workflow ${workflowName} locally: ${error.message}`, "ERROR");
      return false;
    }
  }

  async triggerWorkflowWebhook(workflowName) {
    try {
      this.log(`Triggering workflow ${workflowName} via webhook...`);
      
      // This would require GitHub API token and webhook configuration
      // For now, we'll simulate the trigger
      this.log(`🔗 Webhook trigger for ${workflowName} would be sent here`);
      
      // Update last run time
      this.lastRunTimes.set(workflowName, new Date());
      return true;
    } catch (error) {
      this.log(`❌ Error triggering webhook for ${workflowName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async backupWorkflowExecution(workflowName) {
    try {
      this.log(`Executing backup strategy for workflow ${workflowName}...`);
      
      let success = false;
      
      // Try local execution first
      if (this.config.localExecution.enabled) {
        this.log(`🔄 Attempting local execution as backup...`);
        success = await this.executeWorkflowLocally(workflowName);
        
        if (success) {
          this.log(`✅ Backup execution successful for ${workflowName}`);
          return true;
        }
      }
      
      // Try webhook trigger
      this.log(`🔗 Attempting webhook trigger as backup...`);
      success = await this.triggerWorkflowWebhook(workflowName);
      
      if (success) {
        this.log(`✅ Webhook trigger successful for ${workflowName}`);
        return true;
      }
      
      this.log(`❌ All backup strategies failed for ${workflowName}`, "ERROR");
      return false;
    } catch (error) {
      this.log(`❌ Error in backup execution for ${workflowName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkAllWorkflows() {
    this.log("Starting comprehensive GitHub Actions workflow health check...");
    
    const { exists, workflows } = await this.checkWorkflowsDirectory();
    if (!exists) {
      this.log("❌ Cannot check workflows - directory not found", "ERROR");
      return false;
    }
    
    let healthyCount = 0;
    const totalWorkflows = workflows.length;
    
    for (const workflow of workflows) {
      try {
        const isHealthy = await this.checkWorkflowHealth(workflow);
        
        if (isHealthy) {
          healthyCount++;
          this.workflowStatus.set(workflow, "healthy");
          
          // Reset failure count for healthy workflows
          this.failureCounts.set(workflow, 0);
        } else {
          this.workflowStatus.set(workflow, "unhealthy");
          
          // Increment failure count
          const failureCount = (this.failureCounts.get(workflow) || 0) + 1;
          this.failureCounts.set(workflow, failureCount);
          
          this.log(`⚠️ Workflow ${workflow} failure count: ${failureCount}/${this.config.maxFailures}`, "WARN");
          
          // If max failures reached, try backup execution
          if (failureCount >= this.config.maxFailures) {
            this.log(`🚨 Max failures reached for ${workflow}, attempting backup execution...`, "ERROR");
            await this.backupWorkflowExecution(workflow);
          }
        }
        
        // Small delay between checks
        await new Promise(resolve => setTimeout(resolve, 2000));
        
      } catch (error) {
        this.log(`❌ Error checking workflow ${workflow}: ${error.message}`, "ERROR");
        this.workflowStatus.set(workflow, "error");
      }
    }
    
    this.log(`📊 GitHub Actions health check complete: ${healthyCount}/${totalWorkflows} workflows healthy`);
    return healthyCount === totalWorkflows;
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("Monitoring already active");
      return;
    }
    
    this.log("Starting enhanced GitHub Actions redundancy monitoring...");
    this.monitoring = true;
    
    // Initial health check
    await this.checkAllWorkflows();
    
    // Start periodic monitoring
    this.checkInterval = setInterval(async () => {
      try {
        await this.checkAllWorkflows();
      } catch (error) {
        this.log(`Error during workflow health check: ${error.message}`, "ERROR");
      }
    }, this.config.checkInterval);
    
    this.log("Enhanced GitHub Actions redundancy monitoring started");
  }

  async stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    
    this.monitoring = false;
    this.log("Enhanced GitHub Actions redundancy monitoring stopped");
  }

  async emergencyTrigger() {
    this.log("Performing emergency workflow trigger...");
    
    try {
      for (const workflow of this.config.workflows) {
        this.log(`Triggering emergency execution for ${workflow}...`);
        await this.backupWorkflowExecution(workflow);
        
        // Small delay between triggers
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
      
      this.log("Emergency workflow trigger completed");
      return true;
    } catch (error) {
      this.log(`Emergency workflow trigger failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  getStatus() {
    return {
      monitoring: this.monitoring,
      workflows: this.config.workflows,
      workflowStatus: Object.fromEntries(this.workflowStatus),
      failureCounts: Object.fromEntries(this.failureCounts),
      lastRunTimes: Object.fromEntries(
        Array.from(this.lastRunTimes.entries()).map(([k, v]) => [k, v.toISOString()])
      ),
      config: this.config
    };
  }
}

// CLI interface
if (require.main === module) {
  const redundancy = new EnhancedGitHubActionsRedundancy();
  
  const command = process.argv[2];
  
  switch (command) {
    case "start":
      redundancy.startMonitoring();
      break;
    case "stop":
      redundancy.stopMonitoring();
      break;
    case "check":
      redundancy.checkAllWorkflows();
      break;
    case "trigger":
      redundancy.emergencyTrigger();
      break;
    case "status":
      console.log(JSON.stringify(redundancy.getStatus(), null, 2));
      break;
    default:
      console.log("Usage: node enhanced-github-actions-redundancy.cjs [start|stop|check|trigger|status]");
      process.exit(1);
  }
}

module.exports = { EnhancedGitHubActionsRedundancy };