#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const https = require("https");
const crypto = require("crypto");

class EnhancedGitHubActionsRedundancy {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "enhanced-github-actions-redundancy.log");
    this.ensureLogDir();
    
    this.config = {
      checkInterval: 60000, // 1 minute
      maxFailures: 3,
      retryDelay: 30000,
      healthCheckTimeout: 15000,
      backupInterval: 300000, // 5 minutes
      maxLogSize: 10 * 1024 * 1024, // 10MB
      workflows: [
        "marketing-sync.yml",
        "sync-health.yml"
      ],
      autoTrigger: true,
      healthCheckWorkflow: "sync-health.yml",
      backupWorkflows: true,
      validateYaml: true,
      monitoring: false,
      checkInterval: null
    };
    
    this.workflowStates = new Map();
    this.failureCounts = new Map();
    this.lastBackup = Date.now();
    this.githubToken = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
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
      this.rotateLogs();
    } catch (error) {
      console.error(`Failed to write to log file: ${error.message}`);
    }
  }

  rotateLogs() {
    try {
      const stats = fs.statSync(this.logFile);
      if (stats.size > this.config.maxLogSize) {
        const backupFile = `${this.logFile}.${Date.now()}`;
        fs.renameSync(this.logFile, backupFile);
        this.log("Log file rotated", "INFO");
      }
    } catch (error) {
      // Ignore rotation errors
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
        timeout: options.timeout || this.config.healthCheckTimeout,
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

  async checkGitStatus() {
    try {
      const result = await this.runCommand("git", ["status", "--porcelain"]);
      return result.status === 0;
    } catch (error) {
      this.log(`Git status check failed: ${error.message}`, "ERROR");
      return false;
    }
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

  async validateWorkflow(workflowPath) {
    try {
      const content = fs.readFileSync(workflowPath, 'utf8');
      
      // Basic YAML validation
      if (this.config.validateYaml) {
        try {
          const yaml = require('js-yaml');
          yaml.load(content);
        } catch (yamlError) {
          this.log(`YAML validation failed for ${workflowPath}: ${yamlError.message}`, "ERROR");
          return { valid: false, error: yamlError.message };
        }
      }

      // Check for required workflow fields
      const requiredFields = ['name', 'on', 'jobs'];
      const missingFields = requiredFields.filter(field => !content.includes(`${field}:`));
      
      if (missingFields.length > 0) {
        return { valid: false, error: `Missing required fields: ${missingFields.join(', ')}` };
      }

      // Check for syntax issues
      if (content.includes('{{') && !content.includes('}}')) {
        return { valid: false, error: "Unclosed template expression" };
      }

      return { valid: true, error: null };
    } catch (error) {
      return { valid: false, error: error.message };
    }
  }

  async backupWorkflows() {
    try {
      const backupDir = path.join(this.workspace, "automation/backups/github-actions");
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }

      const workflowsDir = path.join(this.workspace, ".github/workflows");
      if (!fs.existsSync(workflowsDir)) {
        this.log("No workflows directory to backup", "WARN");
        return false;
      }

      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupPath = path.join(backupDir, `workflows-${timestamp}`);
      fs.mkdirSync(backupPath, { recursive: true });

      const workflowFiles = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));
      
      for (const workflowFile of workflowFiles) {
        const sourcePath = path.join(workflowsDir, workflowFile);
        const targetPath = path.join(backupPath, workflowFile);
        fs.copyFileSync(sourcePath, targetPath);
      }

      // Also backup the entire .github directory
      const githubBackupPath = path.join(backupDir, `github-dir-${timestamp}`);
      await this.runCommand("cp", ["-r", ".github", githubBackupPath]);

      this.log(`Workflows backed up to ${backupPath}`, "INFO");
      this.lastBackup = Date.now();
      return true;
    } catch (error) {
      this.log(`Failed to backup workflows: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restoreWorkflowsFromBackup(backupTimestamp = null) {
    try {
      const backupDir = path.join(this.workspace, "automation/backups/github-actions");
      if (!fs.existsSync(backupDir)) {
        this.log("No backup directory found", "WARN");
        return false;
      }

      let backupPath;
      if (backupTimestamp) {
        backupPath = path.join(backupDir, `workflows-${backupTimestamp}`);
      } else {
        // Find the latest backup
        const backups = fs.readdirSync(backupDir)
          .filter(dir => dir.startsWith('workflows-'))
          .sort()
          .reverse();
        
        if (backups.length === 0) {
          this.log("No workflow backups found", "WARN");
          return false;
        }
        
        backupPath = path.join(backupDir, backups[0]);
      }

      if (!fs.existsSync(backupPath)) {
        this.log(`Backup path not found: ${backupPath}`, "ERROR");
        return false;
      }

      const workflowsDir = path.join(this.workspace, ".github/workflows");
      
      // Restore each workflow file
      const backupFiles = fs.readdirSync(backupPath).filter(file => file.endsWith('.yml'));
      
      for (const backupFile of backupFiles) {
        const sourcePath = path.join(backupPath, backupFile);
        const targetPath = path.join(workflowsDir, backupFile);
        fs.copyFileSync(sourcePath, targetPath);
        this.log(`Restored workflow: ${backupFile}`, "INFO");
      }

      this.log("Workflows restored from backup", "INFO");
      return true;
    } catch (error) {
      this.log(`Failed to restore workflows: ${error.message}`, "ERROR");
      return false;
    }
  }

  async triggerWorkflow(workflowName) {
    try {
      if (!this.githubToken) {
        this.log("No GitHub token available, cannot trigger workflow", "WARN");
        return false;
      }

      // Get the workflow file path
      const workflowPath = path.join(this.workspace, ".github/workflows", workflowName);
      if (!fs.existsSync(workflowPath)) {
        this.log(`Workflow file not found: ${workflowName}`, "ERROR");
        return false;
      }

      // Parse the workflow to get the workflow ID
      const content = fs.readFileSync(workflowPath, 'utf8');
      const nameMatch = content.match(/name:\s*(.+)/);
      const workflowDisplayName = nameMatch ? nameMatch[1].trim() : workflowName;

      this.log(`Triggering workflow: ${workflowDisplayName}`, "INFO");

      // Use GitHub CLI if available
      const ghResult = await this.runCommand("gh", ["workflow", "run", workflowName]);
      if (ghResult.status === 0) {
        this.log(`Successfully triggered workflow: ${workflowDisplayName}`, "INFO");
        return true;
      }

      // Fallback: commit and push to trigger workflow
      if (await this.checkGitStatus()) {
        await this.runCommand("git", ["add", ".github/workflows/"]);
        await this.runCommand("git", ["commit", "-m", `chore: trigger workflow ${workflowDisplayName}`]);
        await this.runCommand("git", ["push", "origin", "main"]);
        this.log(`Triggered workflow via git push: ${workflowDisplayName}`, "INFO");
        return true;
      }

      this.log(`Failed to trigger workflow: ${workflowDisplayName}`, "ERROR");
      return false;
    } catch (error) {
      this.log(`Error triggering workflow: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkWorkflowHealth(workflowName) {
    try {
      const workflowPath = path.join(this.workspace, ".github/workflows", workflowName);
      if (!fs.existsSync(workflowPath)) {
        return { healthy: false, reason: "Workflow file not found" };
      }

      // Validate workflow syntax
      const validation = await this.validateWorkflow(workflowPath);
      if (!validation.valid) {
        return { healthy: false, reason: `Validation failed: ${validation.error}` };
      }

      // Check if workflow is properly configured
      const content = fs.readFileSync(workflowPath, 'utf8');
      
      // Check for common issues
      if (content.includes('${{') && content.includes('}}')) {
        // Check for unclosed expressions
        const openCount = (content.match(/\{\{/g) || []).length;
        const closeCount = (content.match(/\}\}/g) || []).length;
        if (openCount !== closeCount) {
          return { healthy: false, reason: "Unclosed template expressions" };
        }
      }

      // Check for required sections
      if (!content.includes('jobs:')) {
        return { healthy: false, reason: "Missing jobs section" };
      }

      if (!content.includes('runs-on:')) {
        return { healthy: false, reason: "Missing runs-on specification" };
      }

      return { healthy: true, reason: "OK" };
    } catch (error) {
      return { healthy: false, reason: `Health check failed: ${error.message}` };
    }
  }

  async recoverWorkflow(workflowName) {
    try {
      const failureCount = this.failureCounts.get(workflowName) || 0;
      
      if (failureCount >= this.config.maxFailures) {
        this.log(`Workflow ${workflowName} exceeded failure limit, attempting recovery`, "WARN");
        
        // Try to restore from backup
        if (await this.restoreWorkflowsFromBackup()) {
          this.failureCounts.set(workflowName, 0);
          this.log(`Successfully recovered workflow ${workflowName} from backup`, "INFO");
          return true;
        }
        
        // If backup restoration fails, try to fix common issues
        if (await this.fixWorkflowIssues(workflowName)) {
          this.failureCounts.set(workflowName, 0);
          this.log(`Successfully fixed workflow ${workflowName}`, "INFO");
          return true;
        }
        
        this.log(`Failed to recover workflow ${workflowName}`, "ERROR");
        return false;
      } else {
        // Try to trigger the workflow
        if (await this.triggerWorkflow(workflowName)) {
          this.failureCounts.set(workflowName, 0);
          return true;
        } else {
          this.failureCounts.set(workflowName, failureCount + 1);
          return false;
        }
      }
    } catch (error) {
      this.log(`Error during workflow recovery: ${error.message}`, "ERROR");
      return false;
    }
  }

  async fixWorkflowIssues(workflowName) {
    try {
      const workflowPath = path.join(this.workspace, ".github/workflows", workflowName);
      if (!fs.existsSync(workflowPath)) {
        return false;
      }

      let content = fs.readFileSync(workflowPath, 'utf8');
      let fixed = false;

      // Fix common YAML issues
      if (content.includes('{{') && !content.includes('}}')) {
        content = content.replace(/\{\{/g, '${{');
        fixed = true;
      }

      // Fix missing quotes around values
      content = content.replace(/:\s*([^"\s][^:\n]*[^"\s]):/g, ': "$1":');
      
      // Fix indentation issues
      const lines = content.split('\n');
      const fixedLines = lines.map(line => {
        if (line.trim() && !line.startsWith(' ') && !line.startsWith('-')) {
          return '  ' + line;
        }
        return line;
      });
      
      if (fixedLines.join('\n') !== content) {
        content = fixedLines.join('\n');
        fixed = true;
      }

      if (fixed) {
        fs.writeFileSync(workflowPath, content);
        this.log(`Fixed issues in workflow: ${workflowName}`, "INFO");
        return true;
      }

      return false;
    } catch (error) {
      this.log(`Error fixing workflow issues: ${error.message}`, "ERROR");
      return false;
    }
  }

  async monitorAllWorkflows() {
    this.log("Starting GitHub Actions workflow monitoring...", "INFO");
    
    for (const workflowName of this.config.workflows) {
      try {
        const health = await this.checkWorkflowHealth(workflowName);
        
        if (!health.healthy) {
          this.log(`Workflow ${workflowName} unhealthy: ${health.reason}`, "WARN");
          
          if (await this.recoverWorkflow(workflowName)) {
            this.log(`Successfully recovered workflow ${workflowName}`, "INFO");
          } else {
            this.log(`Failed to recover workflow ${workflowName}`, "ERROR");
          }
        } else {
          this.log(`Workflow ${workflowName} healthy`, "INFO");
          // Reset failure count for healthy workflows
          this.failureCounts.set(workflowName, 0);
        }
        
        // Store workflow state
        this.workflowStates.set(workflowName, health);
        
      } catch (error) {
        this.log(`Error monitoring workflow ${workflowName}: ${error.message}`, "ERROR");
      }
    }
  }

  async generateHealthReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        gitStatus: await this.checkGitStatus(),
        workflowsDirectory: await this.checkWorkflowsDirectory(),
        workflows: {},
        summary: {
          total: this.config.workflows.length,
          healthy: 0,
          unhealthy: 0,
          recovering: 0
        }
      };

      for (const workflowName of this.config.workflows) {
        const state = this.workflowStates.get(workflowName);
        const health = await this.checkWorkflowHealth(workflowName);
        
        report.workflows[workflowName] = {
          health: health.healthy,
          reason: health.reason,
          failureCount: this.failureCounts.get(workflowName) || 0,
          lastCheck: new Date().toISOString()
        };

        if (health.healthy) {
          report.summary.healthy++;
        } else {
          report.summary.unhealthy++;
        }
      }

      // Save report
      const reportPath = path.join(this.logDir, "github-actions-health-report.json");
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      this.log(`Health report generated: ${reportPath}`, "INFO");
      return report;
    } catch (error) {
      this.log(`Failed to generate health report: ${error.message}`, "ERROR");
      return null;
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("Monitoring already started", "WARN");
      return;
    }

    this.monitoring = true;
    this.log("Starting enhanced GitHub Actions redundancy monitoring", "INFO");

    // Initial backup
    if (this.config.backupWorkflows) {
      await this.backupWorkflows();
    }

    // Start monitoring loop
    this.checkInterval = setInterval(async () => {
      try {
        await this.monitorAllWorkflows();
        
        // Backup workflows periodically
        if (this.config.backupWorkflows && Date.now() - this.lastBackup > this.config.backupInterval) {
          await this.backupWorkflows();
        }
        
        // Generate health report every 5 minutes
        if (Date.now() % 300000 < this.config.checkInterval) {
          await this.generateHealthReport();
        }
        
      } catch (error) {
        this.log(`Error in monitoring loop: ${error.message}`, "ERROR");
      }
    }, this.config.checkInterval);

    this.log("Enhanced GitHub Actions redundancy monitoring started", "INFO");
  }

  async stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    
    this.monitoring = false;
    this.log("Enhanced GitHub Actions redundancy monitoring stopped", "INFO");
  }

  async emergencyRecovery() {
    this.log("Starting emergency GitHub Actions recovery", "WARN");
    
    try {
      // Backup current state
      await this.backupWorkflows();
      
      // Restore from latest backup
      if (await this.restoreWorkflowsFromBackup()) {
        this.log("Emergency recovery completed", "INFO");
        return true;
      } else {
        this.log("Emergency recovery failed", "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Emergency recovery failed: ${error.message}`, "ERROR");
      return false;
    }
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
    case "status":
      redundancy.monitorAllWorkflows();
      break;
    case "report":
      redundancy.generateHealthReport();
      break;
    case "recovery":
      redundancy.emergencyRecovery();
      break;
    case "backup":
      redundancy.backupWorkflows();
      break;
    case "restore":
      redundancy.restoreWorkflowsFromBackup();
      break;
    default:
      console.log("Usage: node enhanced-github-actions-redundancy.cjs [start|stop|status|report|recovery|backup|restore]");
      process.exit(1);
  }
}

module.exports = EnhancedGitHubActionsRedundancy;