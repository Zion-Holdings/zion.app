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
    this.config = this.loadConfig();
    this.monitoring = false;
    this.checkInterval = null;
    this.workflowIssues = new Map();
    this.recoveryAttempts = new Map();
    this.maxRecoveryAttempts = 3;
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
        return config.githubActions || {};
      } catch (error) {
        this.log(`Error loading GitHub Actions config: ${error.message}`);
      }
    }
    
    return {
      enabled: true,
      checkInterval: 60000,
      maxFailures: 3,
      retryDelay: 30000,
      workflows: [
        "marketing-sync.yml",
        "sync-health.yml"
      ],
      autoTrigger: true,
      healthCheckWorkflow: "sync-health.yml",
      validation: {
        yamlSyntax: true,
        cronValidation: true,
        structureValidation: true,
        permissionValidation: true
      },
      backupWorkflows: true,
      autoFix: true
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

  async checkWorkflowsDirectory() {
    try {
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      if (!fs.existsSync(workflowsDir)) {
        this.log("❌ GitHub workflows directory not found");
        return { exists: false, workflows: [] };
      }

      const workflowFiles = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));
      this.log(`📋 Found ${workflowFiles.length} workflow files`);
      
      return { exists: true, workflows: workflowFiles };
    } catch (error) {
      this.log(`❌ Error checking workflows directory: ${error.message}`);
      return { exists: false, workflows: [] };
    }
  }

  validateWorkflowStructure(content, filename) {
    const issues = [];
    
    // Check for required sections
    if (!content.includes('name:')) {
      issues.push("Missing 'name' section");
    }
    if (!content.includes('on:')) {
      issues.push("Missing 'on' section");
    }
    if (!content.includes('jobs:')) {
      issues.push("Missing 'jobs' section");
    }
    
    // Check for valid YAML structure
    if (content.includes('\t')) {
      issues.push("Contains tabs (should use spaces)");
    }
    
    // Check for common syntax issues
    if (content.includes('  - cron:')) {
      if (!content.includes('schedule:')) {
        issues.push("Cron syntax found but missing 'schedule' section");
      }
    }
    
    return issues;
  }

  validateCronSyntax(content, filename) {
    const issues = [];
    
    // Find cron expressions
    const cronMatches = content.match(/cron:\s*['"`]([^'"`]+)['"`]/g);
    if (cronMatches) {
      cronMatches.forEach(match => {
        const cronExpression = match.match(/cron:\s*['"`]([^'"`]+)['"`]/)[1];
        
        // Basic cron validation
        const parts = cronExpression.split(' ');
        if (parts.length !== 5) {
          issues.push(`Invalid cron expression: ${cronExpression} (should have 5 parts)`);
        }
        
        // Check for invalid patterns
        if (cronExpression.includes('*/0')) {
          issues.push(`Invalid cron expression: ${cronExpression} (*/0 is invalid)`);
        }
        
        // Check for reasonable intervals
        if (cronExpression.includes('*/1') && cronExpression.includes('* * *')) {
          issues.push(`Warning: Very frequent cron: ${cronExpression} (runs every minute)`);
        }
      });
    }
    
    return issues;
  }

  validatePermissions(content, filename) {
    const issues = [];
    
    // Check for permissions section
    if (content.includes('permissions:')) {
      // Check if permissions are properly formatted
      const permissionLines = content.split('\n').filter(line => 
        line.trim().startsWith('-') && line.includes(':')
      );
      
      permissionLines.forEach(line => {
        if (!line.match(/^\s*-\s*\w+:\s*\w+/)) {
          issues.push(`Invalid permission format: ${line.trim()}`);
        }
      });
    }
    
    return issues;
  }

  async validateWorkflow(workflowPath, filename) {
    try {
      const content = fs.readFileSync(workflowPath, 'utf8');
      const issues = [];
      
      // Structure validation
      if (this.config.validation.structureValidation) {
        const structureIssues = this.validateWorkflowStructure(content, filename);
        issues.push(...structureIssues);
      }
      
      // Cron validation
      if (this.config.validation.cronValidation) {
        const cronIssues = this.validateCronSyntax(content, filename);
        issues.push(...cronIssues);
      }
      
      // Permissions validation
      if (this.config.validation.permissionValidation) {
        const permissionIssues = this.validatePermissions(content, filename);
        issues.push(...permissionIssues);
      }
      
      return {
        valid: issues.length === 0,
        issues: issues,
        content: content
      };
    } catch (error) {
      return {
        valid: false,
        issues: [`Failed to read workflow: ${error.message}`],
        content: null
      };
    }
  }

  async backupWorkflow(workflowPath, filename) {
    try {
      const backupDir = path.join(this.workspace, ".github/workflows/backup");
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }
      
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupPath = path.join(backupDir, `${filename}.backup.${timestamp}`);
      
      fs.copyFileSync(workflowPath, backupPath);
      this.log(`✅ Backed up ${filename} to ${backupPath}`);
      
      return backupPath;
    } catch (error) {
      this.log(`❌ Failed to backup ${filename}: ${error.message}`);
      return null;
    }
  }

  async fixWorkflowIssues(workflowPath, filename, issues, content) {
    if (!this.config.autoFix) {
      return false;
    }
    
    try {
      this.log(`🔧 Attempting to fix issues in ${filename}...`);
      
      let fixedContent = content;
      let fixed = false;
      
      // Fix common issues
      issues.forEach(issue => {
        if (issue.includes("*/0")) {
          // Fix invalid cron syntax
          fixedContent = fixedContent.replace(/\*\/0/g, "*/1");
          fixed = true;
        }
        
        if (issue.includes("Contains tabs")) {
          // Replace tabs with spaces
          fixedContent = fixedContent.replace(/\t/g, "  ");
          fixed = true;
        }
      });
      
      if (fixed) {
        // Backup original
        await this.backupWorkflow(workflowPath, filename);
        
        // Write fixed content
        fs.writeFileSync(workflowPath, fixedContent);
        this.log(`✅ Fixed issues in ${filename}`);
        
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`❌ Failed to fix issues in ${filename}: ${error.message}`);
      return false;
    }
  }

  async checkWorkflowHealth(workflowPath, filename) {
    try {
      const validation = await this.validateWorkflow(workflowPath, filename);
      
      if (!validation.valid) {
        this.log(`⚠️ Workflow ${filename} has issues: ${validation.issues.join(', ')}`);
        
        // Attempt to fix issues
        if (validation.content) {
          const fixed = await this.fixWorkflowIssues(workflowPath, filename, validation.issues, validation.content);
          if (fixed) {
            // Re-validate after fix
            const revalidation = await this.validateWorkflow(workflowPath, filename);
            if (revalidation.valid) {
              this.log(`✅ Successfully fixed ${filename}`);
              return { healthy: true, issues: [], fixed: true };
            }
          }
        }
        
        return { healthy: false, issues: validation.issues, fixed: false };
      }
      
      return { healthy: true, issues: [], fixed: false };
    } catch (error) {
      this.log(`❌ Error checking workflow health for ${filename}: ${error.message}`);
      return { healthy: false, issues: [error.message], fixed: false };
    }
  }

  async triggerWorkflow(workflowName) {
    if (!this.config.autoTrigger) {
      return false;
    }
    
    try {
      this.log(`🚀 Triggering workflow: ${workflowName}`);
      
      // Use GitHub CLI if available
      const ghResult = await this.runCommand("gh", ["workflow", "run", workflowName]);
      if (ghResult.status === 0) {
        this.log(`✅ Successfully triggered ${workflowName}`);
        return true;
      }
      
      // Fallback: use git push to trigger workflows
      this.log(`🔄 Using git push fallback to trigger ${workflowName}`);
      const gitResult = await this.runCommand("git", ["push", "origin", "HEAD:main"]);
      if (gitResult.status === 0) {
        this.log(`✅ Successfully triggered ${workflowName} via git push`);
        return true;
      }
      
      this.log(`⚠️ Failed to trigger ${workflowName}`);
      return false;
    } catch (error) {
      this.log(`❌ Error triggering workflow ${workflowName}: ${error.message}`);
      return false;
    }
  }

  async checkAllWorkflows() {
    this.log("🔍 Checking all GitHub Actions workflows...");
    
    const { exists, workflows } = await this.checkWorkflowsDirectory();
    if (!exists) {
      this.log("❌ Workflows directory not found, cannot proceed");
      return null;
    }
    
    const results = {
      timestamp: new Date().toISOString(),
      total: workflows.length,
      healthy: 0,
      unhealthy: 0,
      fixed: 0,
      details: {}
    };
    
    for (const workflow of workflows) {
      const workflowPath = path.join(this.workspace, ".github/workflows", workflow);
      const health = await this.checkWorkflowHealth(workflowPath, workflow);
      
      results.details[workflow] = health;
      
      if (health.healthy) {
        results.healthy++;
        this.log(`✅ ${workflow}: Healthy`);
      } else {
        results.unhealthy++;
        this.log(`❌ ${workflow}: ${health.issues.join(', ')}`);
        
        if (health.fixed) {
          results.fixed++;
        }
      }
    }
    
    this.log(`📊 Workflow Health Summary: ${results.healthy}/${results.total} healthy, ${results.fixed} fixed, ${results.unhealthy - results.fixed} with issues`);
    
    // Save results
    this.saveHealthResults(results);
    
    return results;
  }

  async saveHealthResults(results) {
    try {
      const healthFile = path.join(this.logDir, `github-actions-health-${new Date().toISOString().split('T')[0]}.json`);
      const existingData = fs.existsSync(healthFile) ? JSON.parse(fs.readFileSync(healthFile, "utf8")) : [];
      existingData.push(results);
      
      // Keep only last 100 results
      if (existingData.length > 100) {
        existingData.splice(0, existingData.length - 100);
      }
      
      fs.writeFileSync(healthFile, JSON.stringify(existingData, null, 2));
    } catch (error) {
      this.log(`⚠️ Failed to save health results: ${error.message}`);
    }
  }

  async emergencyRecovery() {
    this.log("🚨 Starting emergency GitHub Actions recovery...");
    
    try {
      // Check all workflows
      const health = await this.checkAllWorkflows();
      
      if (!health) {
        this.log("❌ Cannot proceed with recovery - workflows directory not found");
        return null;
      }
      
      // Attempt to fix all unhealthy workflows
      let fixedCount = 0;
      for (const [workflow, details] of Object.entries(health.details)) {
        if (!details.healthy && details.issues.length > 0) {
          const workflowPath = path.join(this.workspace, ".github/workflows", workflow);
          const fixed = await this.fixWorkflowIssues(workflowPath, workflow, details.issues, null);
          if (fixed) {
            fixedCount++;
          }
        }
      }
      
      // Trigger health check workflow
      if (this.config.healthCheckWorkflow) {
        await this.triggerWorkflow(this.config.healthCheckWorkflow);
      }
      
      this.log(`✅ Emergency recovery completed. Fixed ${fixedCount} workflows`);
      
      return { health, fixedCount };
    } catch (error) {
      this.log(`❌ Emergency recovery failed: ${error.message}`);
      return null;
    }
  }

  async generateWorkflowReport() {
    try {
      const { exists, workflows } = await this.checkWorkflowsDirectory();
      if (!exists) {
        return null;
      }
      
      const report = {
        timestamp: new Date().toISOString(),
        totalWorkflows: workflows.length,
        workflowDetails: {},
        recommendations: []
      };
      
      for (const workflow of workflows) {
        const workflowPath = path.join(this.workspace, ".github/workflows", workflow);
        const health = await this.checkWorkflowHealth(workflowPath, workflow);
        
        report.workflowDetails[workflow] = {
          healthy: health.healthy,
          issues: health.issues,
          fixed: health.fixed
        };
        
        if (!health.healthy) {
          report.recommendations.push(`Fix issues in ${workflow}: ${health.issues.join(', ')}`);
        }
      }
      
      // Save report
      const reportFile = path.join(this.logDir, `workflow-report-${new Date().toISOString().split('T')[0]}.json`);
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      this.log(`📊 Workflow report generated and saved`);
      
      return report;
    } catch (error) {
      this.log(`❌ Failed to generate workflow report: ${error.message}`);
      return null;
    }
  }

  startMonitoring() {
    if (this.monitoring) {
      this.log("⚠️ Monitoring already started");
      return;
    }
    
    this.log("🚀 Starting GitHub Actions redundancy monitoring...");
    this.monitoring = true;
    
    this.checkInterval = setInterval(async () => {
      await this.checkAllWorkflows();
    }, this.config.checkInterval);
    
    // Initial check
    setTimeout(async () => {
      await this.checkAllWorkflows();
    }, 5000);
  }

  stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    this.monitoring = false;
    this.log("🛑 GitHub Actions redundancy monitoring stopped");
  }

  async cleanup() {
    this.log("🧹 Cleaning up GitHub Actions redundancy monitor...");
    this.stopMonitoring();
    this.workflowIssues.clear();
    this.recoveryAttempts.clear();
  }
}

// Handle command line arguments
if (require.main === module) {
  const monitor = new EnhancedGitHubActionsRedundancy();
  
  const args = process.argv.slice(2);
  
  if (args.includes('--check')) {
    monitor.checkAllWorkflows().then(() => {
      process.exit(0);
    });
  } else if (args.includes('--emergency-recovery')) {
    monitor.emergencyRecovery().then(() => {
      process.exit(0);
    });
  } else if (args.includes('--report')) {
    monitor.generateWorkflowReport().then(() => {
      process.exit(0);
    });
  } else if (args.includes('--start')) {
    monitor.startMonitoring();
  } else if (args.includes('--stop')) {
    monitor.stopMonitoring();
    process.exit(0);
  } else {
    // Default: start monitoring
    monitor.startMonitoring();
    
    // Handle shutdown signals
    process.on('SIGTERM', async () => {
      await monitor.cleanup();
      process.exit(0);
    });
    
    process.on('SIGINT', async () => {
      await monitor.cleanup();
      process.exit(0);
    });
  }
}

module.exports = EnhancedGitHubActionsRedundancy;