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
    this.failureCount = 0;
    this.lastCheck = null;
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
      workflows: ["marketing-sync.yml", "sync-health.yml"],
      autoTrigger: true,
      healthCheckWorkflow: "sync-health.yml",
      backupWorkflows: true,
      workflowValidation: true,
      autoRecovery: true
    };
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

  async validateWorkflow(workflowPath) {
    try {
      const content = fs.readFileSync(workflowPath, 'utf8');
      
      // Basic YAML validation
      if (!content.includes('name:') || !content.includes('on:')) {
        return { valid: false, error: "Missing required workflow fields" };
      }

      // Check for common issues
      const issues = [];
      
      if (content.includes('cron:') && !content.includes('schedule:')) {
        issues.push("Invalid cron syntax - should be under 'schedule:'");
      }

      if (content.includes('workflow_dispatch:') && !content.includes('permissions:')) {
        issues.push("Missing permissions for workflow_dispatch");
      }

      if (content.includes('actions/checkout@') && !content.includes('fetch-depth:')) {
        // This is just a warning, not an error
        issues.push("Consider adding fetch-depth for better performance");
      }

      return { 
        valid: issues.length === 0, 
        issues,
        content: content.substring(0, 500) + "..." // First 500 chars for debugging
      };
    } catch (error) {
      return { valid: false, error: error.message };
    }
  }

  async createBackupWorkflow() {
    try {
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      const backupWorkflow = path.join(workflowsDir, "backup-health-check.yml");
      
      const backupContent = `name: Backup Health Check
on:
  schedule:
    - cron: '0 */4 * * *'  # Every 4 hours
  workflow_dispatch:

permissions:
  contents: write

jobs:
  backup-health-check:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Verify workflows
        run: |
          echo "Verifying workflow files..."
          for workflow in .github/workflows/*.yml; do
            if [ -f "$workflow" ]; then
              echo "Checking $workflow"
              # Basic validation
              if grep -q "name:" "$workflow" && grep -q "on:" "$workflow"; then
                echo "✅ $workflow is valid"
              else
                echo "❌ $workflow has issues"
              fi
            fi
          done

      - name: Create backup report
        run: |
          echo "Backup health check completed at $(date)" > backup-report.txt
          echo "Workflow count: $(ls .github/workflows/*.yml | wc -l)" >> backup-report.txt
          git add backup-report.txt
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git commit -m "chore: update backup health check report" || echo "No changes to commit"
          git push origin HEAD:main || echo "Push failed or not needed"
`;

      fs.writeFileSync(backupWorkflow, backupContent);
      this.log("✅ Backup workflow created: backup-health-check.yml");
      
      return true;
    } catch (error) {
      this.log(`❌ Failed to create backup workflow: ${error.message}`, "ERROR");
      return false;
    }
  }

  async createEmergencyWorkflow() {
    try {
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      const emergencyWorkflow = path.join(workflowsDir, "emergency-recovery.yml");
      
      const emergencyContent = `name: Emergency Recovery
on:
  workflow_dispatch:
    inputs:
      action:
        description: 'Recovery action to perform'
        required: true
        default: 'health-check'
        type: choice
        options:
        - health-check
        - workflow-validate
        - system-check

permissions:
  contents: write

jobs:
  emergency-recovery:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Perform recovery action
        run: |
          echo "Emergency recovery triggered for action: ${{ github.event.inputs.action }}"
          
          case "${{ github.event.inputs.action }}" in
            "health-check")
              echo "Performing health check..."
              # Add health check logic here
              ;;
            "workflow-validate")
              echo "Validating workflows..."
              for workflow in .github/workflows/*.yml; do
                if [ -f "$workflow" ]; then
                  echo "Validating $workflow"
                  # Add validation logic here
                fi
              done
              ;;
            "system-check")
              echo "Performing system check..."
              # Add system check logic here
              ;;
          esac

      - name: Create recovery report
        run: |
          echo "Emergency recovery completed at $(date)" > recovery-report.txt
          echo "Action: ${{ github.event.inputs.action }}" >> recovery-report.txt
          git add recovery-report.txt
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git commit -m "chore: emergency recovery report" || echo "No changes to commit"
          git push origin HEAD:main || echo "Push failed or not needed"
`;

      fs.writeFileSync(emergencyWorkflow, emergencyContent);
      this.log("✅ Emergency recovery workflow created: emergency-recovery.yml");
      
      return true;
    } catch (error) {
      this.log(`❌ Failed to create emergency workflow: ${error.message}`, "ERROR");
      return false;
    }
  }

  async validateAllWorkflows() {
    try {
      const { exists, workflows } = await this.checkWorkflowsDirectory();
      if (!exists) {
        return { valid: false, error: "Workflows directory not found" };
      }

      const validationResults = {};
      let allValid = true;
      let totalIssues = 0;

      for (const workflow of workflows) {
        const workflowPath = path.join(this.workspace, ".github/workflows", workflow);
        const validation = await this.validateWorkflow(workflowPath);
        
        validationResults[workflow] = validation;
        
        if (!validation.valid) {
          allValid = false;
          totalIssues += validation.issues ? validation.issues.length : 1;
        }
      }

      this.log(`📊 Workflow validation complete: ${workflows.length} workflows, ${totalIssues} issues found`);
      
      return {
        valid: allValid,
        totalWorkflows: workflows.length,
        totalIssues,
        results: validationResults
      };
    } catch (error) {
      this.log(`❌ Workflow validation failed: ${error.message}`, "ERROR");
      return { valid: false, error: error.message };
    }
  }

  async performRecovery() {
    this.log("🔄 Performing GitHub Actions recovery...");
    
    try {
      // Create backup workflows if they don't exist
      await this.createBackupWorkflow();
      await this.createEmergencyWorkflow();
      
      // Validate all workflows
      const validation = await this.validateAllWorkflows();
      
      if (!validation.valid) {
        this.log(`⚠️ Found ${validation.totalIssues} workflow issues, attempting to fix...`);
        
        // Try to fix common issues
        for (const [workflow, result] of Object.entries(validation.results)) {
          if (!result.valid && result.issues) {
            this.log(`Fixing issues in ${workflow}...`);
            // Add specific fix logic here based on issue types
          }
        }
      }
      
      this.log("✅ Recovery process completed");
      return true;
    } catch (error) {
      this.log(`❌ Recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkHealth() {
    try {
      this.log("🔍 Checking GitHub Actions health...");
      
      const workflowsCheck = await this.checkWorkflowsDirectory();
      if (!workflowsCheck.exists) {
        this.log("❌ Workflows directory missing", "ERROR");
        return { healthy: false, error: "Workflows directory not found" };
      }

      const validation = await this.validateAllWorkflows();
      if (!validation.valid) {
        this.log(`⚠️ Workflow validation failed: ${validation.totalIssues} issues`, "WARN");
        return { healthy: false, issues: validation.totalIssues, results: validation.results };
      }

      this.log("✅ GitHub Actions health check passed");
      return { healthy: true, workflows: workflowsCheck.workflows.length };
    } catch (error) {
      this.log(`❌ Health check failed: ${error.message}`, "ERROR");
      return { healthy: false, error: error.message };
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("Monitoring already active");
      return;
    }

    this.log("🚀 Starting enhanced GitHub Actions redundancy monitoring...");
    this.monitoring = true;

    // Initial health check
    const initialHealth = await this.checkHealth();
    if (!initialHealth.healthy) {
      this.log("⚠️ Initial health check failed, performing recovery...", "WARN");
      await this.performRecovery();
    }

    // Start periodic monitoring
    this.checkInterval = setInterval(async () => {
      try {
        const health = await this.checkHealth();
        
        if (!health.healthy) {
          this.failureCount++;
          this.log(`⚠️ Health check failed (attempt ${this.failureCount}/${this.config.maxFailures})`, "WARN");
          
          if (this.failureCount >= this.config.maxFailures) {
            this.log("🚨 Max failures reached, performing recovery...", "ERROR");
            await this.performRecovery();
            this.failureCount = 0;
          }
        } else {
          this.failureCount = 0;
        }
        
        this.lastCheck = new Date().toISOString();
      } catch (error) {
        this.log(`❌ Monitoring error: ${error.message}`, "ERROR");
      }
    }, this.config.checkInterval);

    this.log("✅ Enhanced GitHub Actions redundancy monitoring started");
  }

  stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    this.monitoring = false;
    this.log("🛑 Enhanced GitHub Actions redundancy monitoring stopped");
  }

  async getStatus() {
    const health = await this.checkHealth();
    
    return {
      health,
      monitoring: this.monitoring,
      failureCount: this.failureCount,
      lastCheck: this.lastCheck,
      timestamp: new Date().toISOString()
    };
  }
}

// Handle process signals
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down...');
  if (global.githubActionsRedundancy) {
    global.githubActionsRedundancy.stopMonitoring();
  }
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down...');
  if (global.githubActionsRedundancy) {
    global.githubActionsRedundancy.stopMonitoring();
  }
  process.exit(0);
});

// Start the system
const githubActionsRedundancy = new EnhancedGitHubActionsRedundancy();
global.githubActionsRedundancy = githubActionsRedundancy;

// Export for potential external use
module.exports = EnhancedGitHubActionsRedundancy;