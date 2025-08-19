#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
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
    this.healthMetrics = {
      totalChecks: 0,
      successfulChecks: 0,
      failedChecks: 0,
      workflowsTriggered: 0,
      lastCheck: null,
      uptime: Date.now()
    };
    this.workflowCache = new Map();
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
    
    return {
      githubActions: {
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
        validateSyntax: true,
        checkDependencies: true,
        monitorRuns: true
      }
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

  async checkGitHubActionsHealth() {
    this.log("🔍 Starting enhanced GitHub Actions health check...");
    this.healthMetrics.totalChecks++;
    this.healthMetrics.lastCheck = Date.now();
    
    try {
      // Check if workflows directory exists
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      if (!fs.existsSync(workflowsDir)) {
        this.log("❌ GitHub workflows directory not found", "ERROR");
        this.healthMetrics.failedChecks++;
        return false;
      }

      // Get all workflow files
      const workflows = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));
      this.log(`📋 Found ${workflows.length} GitHub workflow files`);

      let healthy = true;
      let criticalIssues = 0;

      // Validate each workflow
      for (const workflow of workflows) {
        const workflowPath = path.join(workflowsDir, workflow);
        const workflowHealth = await this.validateWorkflow(workflowPath);
        
        if (!workflowHealth.healthy) {
          this.log(`⚠️ Workflow ${workflow} has issues: ${workflowHealth.issues.join(", ")}`, "WARN");
          healthy = false;
          
          if (workflowHealth.critical) {
            criticalIssues++;
            await this.handleCriticalWorkflow(workflow, workflowHealth);
          } else {
            await this.handleNonCriticalWorkflow(workflow, workflowHealth);
          }
        }
      }

      // Check workflow dependencies
      const dependencyHealth = await this.checkWorkflowDependencies();
      if (!dependencyHealth.healthy) {
        this.log(`⚠️ Workflow dependency issues: ${dependencyHealth.issues.join(", ")}`, "WARN");
        healthy = false;
        await this.handleDependencyIssues(dependencyHealth);
      }

      // Check workflow syntax and structure
      const syntaxHealth = await this.checkWorkflowSyntax();
      if (!syntaxHealth.healthy) {
        this.log(`⚠️ Workflow syntax issues: ${syntaxHealth.issues.join(", ")}`, "WARN");
        healthy = false;
        await this.handleSyntaxIssues(syntaxHealth);
      }

      // Monitor active workflow runs
      const runHealth = await this.monitorWorkflowRuns();
      if (!runHealth.healthy) {
        this.log(`⚠️ Workflow run issues: ${runHealth.issues.join(", ")}`, "WARN");
        healthy = false;
        await this.handleRunIssues(runHealth);
      }

      // Check workflow permissions
      const permissionHealth = await this.checkWorkflowPermissions();
      if (!permissionHealth.healthy) {
        this.log(`⚠️ Workflow permission issues: ${permissionHealth.issues.join(", ")}`, "WARN");
        healthy = false;
        await this.handlePermissionIssues(permissionHealth);
      }

      if (healthy) {
        this.healthMetrics.successfulChecks++;
        this.log("✅ Enhanced GitHub Actions health check completed successfully");
      } else {
        this.healthMetrics.failedChecks++;
        this.log(`⚠️ GitHub Actions health check completed with ${criticalIssues} critical issues`, "WARN");
      }

      return healthy;
    } catch (error) {
      this.log(`❌ Enhanced GitHub Actions health check failed: ${error.message}`, "ERROR");
      this.healthMetrics.failedChecks++;
      return false;
    }
  }

  async validateWorkflow(workflowPath) {
    const issues = [];
    let critical = false;

    try {
      const content = fs.readFileSync(workflowPath, "utf8");
      const workflowName = path.basename(workflowPath);

      // Check for required workflow structure
      if (!content.includes("name:")) {
        issues.push("Missing workflow name");
        critical = true;
      }

      if (!content.includes("on:")) {
        issues.push("Missing trigger configuration");
        critical = true;
      }

      if (!content.includes("jobs:")) {
        issues.push("Missing jobs configuration");
        critical = true;
      }

      // Check cron syntax if schedule is used
      if (content.includes("cron:") && content.includes("schedule:")) {
        const cronMatch = content.match(/cron:\s*['"`]([^'"`]+)['"`]/);
        if (cronMatch) {
          const cron = cronMatch[1];
          if (!this.isValidCron(cron)) {
            issues.push(`Invalid cron syntax: ${cron}`);
            critical = true;
          }
        }
      }

      // Check for common workflow issues
      if (content.includes("actions/checkout@v4") && !content.includes("permissions:")) {
        issues.push("Missing permissions configuration (recommended for security)");
      }

      if (content.includes("GITHUB_TOKEN") && !content.includes("contents: write")) {
        issues.push("Missing write permissions for GITHUB_TOKEN");
      }

      // Check for deprecated actions
      const deprecatedActions = [
        "actions/checkout@v1",
        "actions/checkout@v2",
        "actions/checkout@v3",
        "actions/setup-node@v1",
        "actions/setup-node@v2",
        "actions/setup-node@v3"
      ];

      for (const deprecated of deprecatedActions) {
        if (content.includes(deprecated)) {
          issues.push(`Deprecated action: ${deprecated}`);
        }
      }

      // Check for security vulnerabilities
      if (content.includes("pull_request_target:")) {
        issues.push("Using pull_request_target (security consideration)");
      }

      // Validate YAML structure
      try {
        const yaml = require('js-yaml');
        yaml.load(content);
      } catch (yamlError) {
        issues.push(`YAML syntax error: ${yamlError.message}`);
        critical = true;
      }

    } catch (error) {
      issues.push(`File read error: ${error.message}`);
      critical = true;
    }

    return {
      healthy: issues.length === 0,
      critical,
      issues
    };
  }

  isValidCron(cron) {
    const cronParts = cron.split(" ");
    if (cronParts.length !== 5) return false;
    
    const validPatterns = [
      /^\*\/\d+$/, // */n
      /^\d+$/,     // n
      /^\*$/,      // *
      /^\d+-\d+$/, // n-m
      /^\d+,\d+$/  // n,m
    ];
    
    return cronParts.every(part => 
      validPatterns.some(pattern => pattern.test(part))
    );
  }

  async checkWorkflowDependencies() {
    const issues = [];
    let healthy = true;

    try {
      // Check if required Node.js version is available
      const nodeVersion = await this.runCommand("node", ["--version"]);
      if (nodeVersion.status !== 0) {
        issues.push("Node.js not available");
        healthy = false;
      }

      // Check if npm is available
      const npmVersion = await this.runCommand("npm", ["--version"]);
      if (npmVersion.status !== 0) {
        issues.push("npm not available");
        healthy = false;
      }

      // Check package.json dependencies
      const packagePath = path.join(this.workspace, "package.json");
      if (fs.existsSync(packagePath)) {
        try {
          const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));
          
          // Check for critical dependencies
          const criticalDeps = ["next", "react", "react-dom"];
          for (const dep of criticalDeps) {
            if (!packageJson.dependencies?.[dep] && !packageJson.devDependencies?.[dep]) {
              issues.push(`Critical dependency missing: ${dep}`);
              healthy = false;
            }
          }
        } catch (error) {
          issues.push(`Package.json parse error: ${error.message}`);
          healthy = false;
        }
      }

      // Check for required environment variables
      const requiredEnvVars = [
        "LINKEDIN_ACCESS_TOKEN",
        "LINKEDIN_URN",
        "IG_USER_ID",
        "IG_ACCESS_TOKEN"
      ];

      for (const envVar of requiredEnvVars) {
        if (!process.env[envVar]) {
          issues.push(`Required environment variable missing: ${envVar}`);
        }
      }

    } catch (error) {
      issues.push(`Dependency check error: ${error.message}`);
      healthy = false;
    }

    return { healthy, issues };
  }

  async checkWorkflowSyntax() {
    const issues = [];
    let healthy = true;

    try {
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      const workflows = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));

      for (const workflow of workflows) {
        const workflowPath = path.join(workflowsDir, workflow);
        const content = fs.readFileSync(workflowPath, "utf8");

        // Check for common syntax issues
        if (content.includes("  - name:")) {
          // Check for proper indentation
          const lines = content.split('\n');
          for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (line.includes("- name:") && !line.startsWith("      - name:")) {
              issues.push(`Improper indentation in ${workflow}: line ${i + 1}`);
              healthy = false;
            }
          }
        }

        // Check for missing quotes around values
        const unquotedValues = content.match(/:\s*[^"'\s][^"'\n]*$/gm);
        if (unquotedValues) {
          issues.push(`Unquoted values in ${workflow}: ${unquotedValues.length} instances`);
        }

        // Check for proper job structure
        if (!content.includes("runs-on:")) {
          issues.push(`Missing runs-on in ${workflow}`);
          healthy = false;
        }

        // Check for proper step structure
        if (content.includes("steps:") && !content.includes("- name:")) {
          issues.push(`Missing step names in ${workflow}`);
          healthy = false;
        }
      }

    } catch (error) {
      issues.push(`Syntax check error: ${error.message}`);
      healthy = false;
    }

    return { healthy, issues };
  }

  async monitorWorkflowRuns() {
    const issues = [];
    let healthy = true;

    try {
      // Check if workflows are properly configured for monitoring
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      const workflows = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));

      for (const workflow of workflows) {
        const workflowPath = path.join(workflowsDir, workflow);
        const content = fs.readFileSync(workflowPath, "utf8");

        // Check for proper error handling
        if (content.includes("continue-on-error: true")) {
          issues.push(`Workflow ${workflow} continues on error (may mask issues)`);
        }

        // Check for timeout configurations
        if (content.includes("timeout-minutes:")) {
          const timeoutMatch = content.match(/timeout-minutes:\s*(\d+)/);
          if (timeoutMatch) {
            const timeout = parseInt(timeoutMatch[1]);
            if (timeout > 360) { // 6 hours
              issues.push(`Long timeout in ${workflow}: ${timeout} minutes`);
            }
          }
        }

        // Check for proper job dependencies
        if (content.includes("needs:") && !content.includes("if:")) {
          issues.push(`Job dependencies without conditions in ${workflow}`);
        }
      }

    } catch (error) {
      issues.push(`Workflow run monitoring error: ${error.message}`);
      healthy = false;
    }

    return { healthy, issues };
  }

  async checkWorkflowPermissions() {
    const issues = [];
    let healthy = true;

    try {
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      const workflows = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));

      for (const workflow of workflows) {
        const workflowPath = path.join(workflowsDir, workflow);
        const content = fs.readFileSync(workflowPath, "utf8");

        // Check for overly permissive permissions
        if (content.includes("permissions:") && content.includes("contents: write")) {
          if (!content.includes("pull-requests: read")) {
            issues.push(`Write permissions without read permissions in ${workflow}`);
          }
        }

        // Check for GITHUB_TOKEN usage
        if (content.includes("GITHUB_TOKEN") && !content.includes("permissions:")) {
          issues.push(`GITHUB_TOKEN usage without explicit permissions in ${workflow}`);
        }

        // Check for security best practices
        if (content.includes("pull_request_target:")) {
          issues.push(`Using pull_request_target in ${workflow} (security consideration)`);
        }
      }

    } catch (error) {
      issues.push(`Permission check error: ${error.message}`);
      healthy = false;
    }

    return { healthy, issues };
  }

  async handleCriticalWorkflow(workflow, health) {
    this.log(`🚨 Handling critical workflow: ${workflow}`, "ERROR");
    
    try {
      // Create backup of the workflow
      const workflowPath = path.join(this.workspace, ".github/workflows", workflow);
      const backupPath = path.join(this.workspace, ".github/workflows", `${workflow}.backup.${Date.now()}`);
      
      fs.copyFileSync(workflowPath, backupPath);
      this.log(`📋 Created backup: ${backupPath}`);

      // Attempt to fix common issues
      await this.attemptWorkflowFix(workflow, health);
      
      // Validate the fix
      const fixedHealth = await this.validateWorkflow(workflowPath);
      if (fixedHealth.healthy) {
        this.log(`✅ Workflow ${workflow} fixed successfully`);
      } else {
        this.log(`❌ Workflow ${workflow} fix failed`, "ERROR");
        await this.escalateWorkflowIssue(workflow, health);
      }
    } catch (error) {
      this.log(`❌ Failed to handle critical workflow ${workflow}: ${error.message}`, "ERROR");
      await this.escalateWorkflowIssue(workflow, health);
    }
  }

  async handleNonCriticalWorkflow(workflow, health) {
    this.log(`⚠️ Handling non-critical workflow: ${workflow}`, "WARN");
    
    try {
      // Log the issues for review
      this.log(`📝 Workflow ${workflow} issues logged for review: ${health.issues.join(", ")}`);
      
      // Create a report
      const report = {
        timestamp: new Date().toISOString(),
        workflow,
        issues: health.issues,
        severity: "non-critical"
      };
      
      const reportPath = path.join(this.logDir, `workflow-issue-${workflow}-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`📋 Issue report created: ${reportPath}`);
    } catch (error) {
      this.log(`❌ Failed to handle non-critical workflow ${workflow}: ${error.message}`, "ERROR");
    }
  }

  async attemptWorkflowFix(workflow, health) {
    this.log(`🔧 Attempting to fix workflow: ${workflow}`);
    
    try {
      const workflowPath = path.join(this.workspace, ".github/workflows", workflow);
      let content = fs.readFileSync(workflowPath, "utf8");

      // Fix common issues
      if (health.issues.some(issue => issue.includes("Missing workflow name"))) {
        content = `name: ${workflow.replace('.yml', '')}\n${content}`;
      }

      if (health.issues.some(issue => issue.includes("Missing permissions"))) {
        const permissionsBlock = `
permissions:
  contents: write
  pull-requests: read
  issues: read
`;
        content = content.replace("jobs:", `${permissionsBlock}\njobs:`);
      }

      // Write the fixed content
      fs.writeFileSync(workflowPath, content);
      this.log(`✅ Applied fixes to ${workflow}`);
      
    } catch (error) {
      this.log(`❌ Failed to fix workflow ${workflow}: ${error.message}`, "ERROR");
    }
  }

  async handleDependencyIssues(health) {
    this.log("⚠️ Handling dependency issues", "WARN");
    
    try {
      // Check if we can install missing dependencies
      if (health.issues.some(issue => issue.includes("Critical dependency missing"))) {
        this.log("🔄 Attempting to install missing dependencies...");
        await this.runCommand("npm", ["install"]);
      }

      // Check environment variables
      const missingEnvVars = health.issues
        .filter(issue => issue.includes("Required environment variable missing"))
        .map(issue => issue.match(/missing: (\w+)/)?.[1])
        .filter(Boolean);

      if (missingEnvVars.length > 0) {
        this.log(`⚠️ Missing environment variables: ${missingEnvVars.join(", ")}`);
        this.log("Please set these environment variables for proper workflow execution");
      }
    } catch (error) {
      this.log(`❌ Failed to handle dependency issues: ${error.message}`, "ERROR");
    }
  }

  async handleSyntaxIssues(health) {
    this.log("⚠️ Handling syntax issues", "WARN");
    
    try {
      // Create syntax validation report
      const report = {
        timestamp: new Date().toISOString(),
        type: "syntax_issues",
        issues: health.issues,
        recommendations: [
          "Review workflow indentation",
          "Check YAML syntax",
          "Validate step structure",
          "Ensure proper quoting"
        ]
      };
      
      const reportPath = path.join(this.logDir, `syntax-issues-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`📋 Syntax issues report created: ${reportPath}`);
    } catch (error) {
      this.log(`❌ Failed to handle syntax issues: ${error.message}`, "ERROR");
    }
  }

  async handleRunIssues(health) {
    this.log("⚠️ Handling workflow run issues", "WARN");
    
    try {
      // Create run monitoring report
      const report = {
        timestamp: new Date().toISOString(),
        type: "run_issues",
        issues: health.issues,
        recommendations: [
          "Review timeout configurations",
          "Check job dependencies",
          "Validate error handling",
          "Monitor resource usage"
        ]
      };
      
      const reportPath = path.join(this.logDir, `run-issues-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`📋 Run issues report created: ${reportPath}`);
    } catch (error) {
      this.log(`❌ Failed to handle run issues: ${error.message}`, "ERROR");
    }
  }

  async handlePermissionIssues(health) {
    this.log("⚠️ Handling permission issues", "WARN");
    
    try {
      // Create permission audit report
      const report = {
        timestamp: new Date().toISOString(),
        type: "permission_issues",
        issues: health.issues,
        recommendations: [
          "Review workflow permissions",
          "Use least privilege principle",
          "Check GITHUB_TOKEN usage",
          "Validate security settings"
        ]
      };
      
      const reportPath = path.join(this.logDir, `permission-issues-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`📋 Permission issues report created: ${reportPath}`);
    } catch (error) {
      this.log(`❌ Failed to handle permission issues: ${error.message}`, "ERROR");
    }
  }

  async escalateWorkflowIssue(workflow, health) {
    this.log(`🚨 Escalating workflow issue: ${workflow}`, "ERROR");
    
    try {
      // Create incident report
      const incidentReport = {
        timestamp: new Date().toISOString(),
        workflow,
        issues: health.issues,
        severity: "critical",
        requiresManualIntervention: true
      };
      
      const reportPath = path.join(this.logDir, `incident-${workflow}-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(incidentReport, null, 2));
      this.log(`📋 Incident report created: ${reportPath}`);
      
      // Send alert (placeholder for notification system)
      this.log(`ALERT: Workflow ${workflow} requires manual intervention`, "ERROR");
    } catch (error) {
      this.log(`❌ Failed to escalate workflow issue: ${error.message}`, "ERROR");
    }
  }

  async triggerWorkflowHealthCheck() {
    try {
      const healthWorkflow = path.join(this.workspace, ".github/workflows/sync-health.yml");
      if (fs.existsSync(healthWorkflow)) {
        this.log("📡 Triggering workflow health check...");
        // This would typically use GitHub API to trigger workflows
        // For now, we'll just log the action
        this.healthMetrics.workflowsTriggered++;
      }
    } catch (error) {
      this.log(`⚠️ Could not trigger workflow health check: ${error.message}`, "WARN");
    }
  }

  async getHealthMetrics() {
    const uptime = Date.now() - this.healthMetrics.uptime;
    const successRate = this.healthMetrics.totalChecks > 0 
      ? (this.healthMetrics.successfulChecks / this.healthMetrics.totalChecks) * 100 
      : 0;
    
    return {
      ...this.healthMetrics,
      uptime,
      successRate: successRate.toFixed(2),
      healthStatus: successRate > 80 ? "HEALTHY" : successRate > 60 ? "DEGRADED" : "CRITICAL"
    };
  }

  async startMonitoring() {
    this.log("🚀 Starting enhanced GitHub Actions redundancy monitoring...");
    
    const interval = this.config.githubActions.checkInterval || 60000;
    
    setInterval(async () => {
      await this.checkGitHubActionsHealth();
    }, interval);
    
    // Initial health check
    await this.checkGitHubActionsHealth();
    
    this.log(`✅ Enhanced GitHub Actions redundancy monitoring started (interval: ${interval}ms)`);
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
    case "check":
      redundancy.checkGitHubActionsHealth().then(() => process.exit(0));
      break;
    case "status":
      console.log(JSON.stringify(redundancy.getHealthMetrics(), null, 2));
      break;
    default:
      console.log("Usage: node enhanced-github-actions-redundancy.cjs [start|check|status]");
      process.exit(1);
  }
}

module.exports = { EnhancedGitHubActionsRedundancy };