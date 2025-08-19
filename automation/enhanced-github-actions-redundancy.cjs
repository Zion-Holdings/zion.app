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
    this.config = this.loadConfig();
    this.monitoring = false;
    this.checkInterval = null;
    this.workflowStatus = new Map();
    this.lastRunTimes = new Map();
    this.failureCounts = new Map();
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
      autoTrigger: true,
      localExecution: true,
      workflows: [
        "marketing-sync.yml",
        "sync-health.yml"
      ],
      criticalWorkflows: [
        "sync-health.yml"
      ],
      healthCheckWorkflow: "sync-health.yml",
      monitoring: {
        checkLastRun: true,
        validateYaml: true,
        checkDependencies: true,
        autoFix: true
      },
      localExecutionConfig: {
        nodeVersion: "20",
        timeout: 300000,
        maxRetries: 2
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

  async checkWorkflowsDirectory() {
    try {
      const workflowsDir = path.join(this.workspace, ".github/workflows");
      if (!fs.existsSync(workflowsDir)) {
        this.log("❌ GitHub workflows directory not found", "ERROR");
        return { exists: false, workflows: [] };
      }

      const workflowFiles = fs.readdirSync(workflowsDir).filter(file => file.endsWith('.yml'));
      this.log(`📋 Found ${workflowFiles.length} workflow files`, "INFO");
      
      return { exists: true, workflows: workflowFiles };
    } catch (error) {
      this.log(`❌ Error checking workflows directory: ${error.message}`, "ERROR");
      return { exists: false, workflows: [] };
    }
  }

  async validateWorkflow(workflowPath) {
    try {
      const content = fs.readFileSync(workflowPath, "utf8");
      
      // Basic YAML validation
      if (!content.includes("name:") || !content.includes("on:")) {
        return { valid: false, reason: "Missing required workflow fields" };
      }

      // Check for critical sections
      const hasJobs = content.includes("jobs:");
      const hasSteps = content.includes("steps:");
      
      if (!hasJobs || !hasSteps) {
        return { valid: false, reason: "Missing jobs or steps section" };
      }

      // Check for Node.js setup
      const hasNodeSetup = content.includes("actions/setup-node");
      if (!hasNodeSetup) {
        this.log(`⚠️  Workflow ${workflowPath} doesn't have Node.js setup`, "WARN");
      }

      return { valid: true };
    } catch (error) {
      return { valid: false, reason: `File read error: ${error.message}` };
    }
  }

  async checkWorkflowDependencies(workflowPath) {
    try {
      const content = fs.readFileSync(workflowPath, "utf8");
      const dependencies = [];
      
      // Check for external actions
      const actionMatches = content.match(/uses:\s*([^\s]+)/g);
      if (actionMatches) {
        actionMatches.forEach(match => {
          const action = match.replace("uses:", "").trim();
          if (action.includes("/")) {
            dependencies.push(action);
          }
        });
      }

      // Check for Node.js version
      const nodeMatch = content.match(/node-version:\s*['"]?([^'"\s]+)['"]?/);
      if (nodeMatch) {
        dependencies.push(`Node.js ${nodeMatch[1]}`);
      }

      return { dependencies, count: dependencies.length };
    } catch (error) {
      this.log(`Error checking dependencies for ${workflowPath}: ${error.message}`, "ERROR");
      return { dependencies: [], count: 0 };
    }
  }

  async executeWorkflowLocally(workflowName) {
    if (!this.config.localExecution) {
      this.log(`Local execution disabled for ${workflowName}`, "INFO");
      return false;
    }

    try {
      this.log(`Executing workflow ${workflowName} locally`, "INFO");
      
      const workflowPath = path.join(this.workspace, ".github/workflows", workflowName);
      if (!fs.existsSync(workflowPath)) {
        this.log(`Workflow file ${workflowPath} not found`, "ERROR");
        return false;
      }

      // Parse workflow to find the main script to execute
      const content = fs.readFileSync(workflowPath, "utf8");
      const scriptMatch = content.match(/run:\s*node\s+([^\s]+)/);
      
      if (!scriptMatch) {
        this.log(`No executable script found in workflow ${workflowName}`, "WARN");
        return false;
      }

      const scriptPath = scriptMatch[1];
      const fullScriptPath = path.join(this.workspace, scriptPath);
      
      if (!fs.existsSync(fullScriptPath)) {
        this.log(`Script ${fullScriptPath} not found`, "ERROR");
        return false;
      }

      // Execute the script
      const result = await this.runCommand("node", [fullScriptPath], {
        timeout: this.config.localExecutionConfig.timeout
      });

      if (result.status === 0) {
        this.log(`Successfully executed ${workflowName} locally`, "INFO");
        this.lastRunTimes.set(workflowName, new Date().toISOString());
        return true;
      } else {
        this.log(`Failed to execute ${workflowName} locally: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error executing workflow ${workflowName} locally: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkWorkflowHealth(workflowName) {
    try {
      const workflowPath = path.join(this.workspace, ".github/workflows", workflowName);
      
      if (!fs.existsSync(workflowPath)) {
        return { healthy: false, reason: "Workflow file not found" };
      }

      // Validate workflow
      const validation = await this.validateWorkflow(workflowPath);
      if (!validation.valid) {
        return { healthy: false, reason: validation.reason };
      }

      // Check dependencies
      const dependencies = await this.checkWorkflowDependencies(workflowPath);
      if (dependencies.count === 0) {
        this.log(`⚠️  Workflow ${workflowName} has no external dependencies`, "WARN");
      }

      // Check if workflow should run based on schedule
      const content = fs.readFileSync(workflowPath, "utf8");
      const scheduleMatch = content.match(/cron:\s*['"]([^'"]+)['"]/);
      
      if (scheduleMatch) {
        const cronExpression = scheduleMatch[1];
        const shouldRun = this.shouldWorkflowRun(cronExpression, workflowName);
        
        if (shouldRun && this.config.autoTrigger) {
          this.log(`Workflow ${workflowName} should run, triggering locally`, "INFO");
          await this.executeWorkflowLocally(workflowName);
        }
      }

      return { healthy: true };
    } catch (error) {
      return { healthy: false, reason: `Health check error: ${error.message}` };
    }
  }

  shouldWorkflowRun(cronExpression, workflowName) {
    try {
      const lastRun = this.lastRunTimes.get(workflowName);
      if (!lastRun) return true;

      const lastRunTime = new Date(lastRun);
      const now = new Date();
      const timeSinceLastRun = now - lastRunTime;

      // Simple cron parsing for common patterns
      if (cronExpression.includes("*/15")) {
        // Every 15 minutes
        return timeSinceLastRun >= 15 * 60 * 1000;
      } else if (cronExpression.includes("*/10")) {
        // Every 10 minutes
        return timeSinceLastRun >= 10 * 60 * 1000;
      } else if (cronExpression.includes("0 */12")) {
        // Every 12 hours
        return timeSinceLastRun >= 12 * 60 * 60 * 1000;
      }

      return false;
    } catch (error) {
      this.log(`Error parsing cron expression: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkAllWorkflows() {
    this.log("Starting comprehensive GitHub Actions health check...", "INFO");
    
    const workflowsDir = await this.checkWorkflowsDirectory();
    if (!workflowsDir.exists) {
      this.log("GitHub workflows directory not found, cannot proceed", "ERROR");
      return 0;
    }

    let issuesFound = 0;
    const allWorkflows = [...this.config.workflows, ...workflowsDir.workflows.filter(w => !this.config.workflows.includes(w))];

    for (const workflowName of allWorkflows) {
      try {
        const health = await this.checkWorkflowHealth(workflowName);
        
        if (!health.healthy) {
          this.log(`Workflow ${workflowName} unhealthy: ${health.reason}`, "WARN");
          issuesFound++;
          
          // Attempt auto-fix if enabled
          if (this.config.monitoring.autoFix) {
            await this.attemptWorkflowFix(workflowName);
          }
        } else {
          this.log(`Workflow ${workflowName} is healthy`, "INFO");
          this.failureCounts.set(workflowName, 0);
        }
      } catch (error) {
        this.log(`Error checking workflow ${workflowName}: ${error.message}`, "ERROR");
        issuesFound++;
      }
    }

    if (issuesFound === 0) {
      this.log("All GitHub Actions workflows are healthy", "INFO");
    } else {
      this.log(`Found ${issuesFound} workflow issues`, "WARN");
    }

    return issuesFound;
  }

  async attemptWorkflowFix(workflowName) {
    try {
      this.log(`Attempting to fix workflow ${workflowName}`, "INFO");
      
      // Try local execution as a fix
      if (this.config.localExecution) {
        const success = await this.executeWorkflowLocally(workflowName);
        if (success) {
          this.log(`Successfully fixed workflow ${workflowName} via local execution`, "INFO");
          return true;
        }
      }

      // Check if workflow file is corrupted
      const workflowPath = path.join(this.workspace, ".github/workflows", workflowName);
      if (fs.existsSync(workflowPath)) {
        const content = fs.readFileSync(workflowPath, "utf8");
        
        // Try to fix common YAML issues
        if (content.includes("{{") && content.includes("}}")) {
          this.log(`Workflow ${workflowName} contains template variables, may need manual fix`, "WARN");
        }
      }

      return false;
    } catch (error) {
      this.log(`Error attempting to fix workflow ${workflowName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("Monitoring already active", "WARN");
      return;
    }

    this.monitoring = true;
    this.log("Starting enhanced GitHub Actions redundancy monitoring", "INFO");

    const monitor = async () => {
      if (!this.monitoring) return;
      
      try {
        await this.checkAllWorkflows();
      } catch (error) {
        this.log(`Monitoring error: ${error.message}`, "ERROR");
      }

      this.checkInterval = setTimeout(monitor, this.config.checkInterval);
    };

    await monitor();
  }

  async stopMonitoring() {
    this.monitoring = false;
    if (this.checkInterval) {
      clearTimeout(this.checkInterval);
      this.checkInterval = null;
    }
    this.log("Stopped enhanced GitHub Actions redundancy monitoring", "INFO");
  }

  async triggerWorkflow(workflowName) {
    try {
      this.log(`Manually triggering workflow ${workflowName}`, "INFO");
      
      if (this.config.localExecution) {
        return await this.executeWorkflowLocally(workflowName);
      } else {
        this.log("Local execution disabled, cannot trigger workflow", "WARN");
        return false;
      }
    } catch (error) {
      this.log(`Error triggering workflow ${workflowName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async generateHealthReport() {
    const workflowsDir = await this.checkWorkflowsDirectory();
    const report = {
      timestamp: new Date().toISOString(),
      workflowsDirectory: workflowsDir.exists,
      totalWorkflows: workflowsDir.workflows.length,
      configuredWorkflows: this.config.workflows,
      workflowHealth: {},
      issues: [],
      recommendations: []
    };

    for (const workflowName of this.config.workflows) {
      const health = await this.checkWorkflowHealth(workflowName);
      const dependencies = await this.checkWorkflowDependencies(
        path.join(this.workspace, ".github/workflows", workflowName)
      );
      
      report.workflowHealth[workflowName] = {
        healthy: health.healthy,
        reason: health.reason || null,
        dependencies: dependencies.dependencies,
        lastRun: this.lastRunTimes.get(workflowName) || null,
        failureCount: this.failureCounts.get(workflowName) || 0
      };

      if (!health.healthy) {
        report.issues.push(`${workflowName}: ${health.reason}`);
      }
    }

    if (report.issues.length > 0) {
      report.recommendations.push("Enable auto-fix for automatic workflow recovery");
      report.recommendations.push("Check workflow YAML syntax and dependencies");
      report.recommendations.push("Verify GitHub Actions permissions and secrets");
    }

    return report;
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
      const workflowName = process.argv[3];
      if (!workflowName) {
        console.log("Usage: node enhanced-github-actions-redundancy.cjs trigger <workflow-name>");
        process.exit(1);
      }
      redundancy.triggerWorkflow(workflowName);
      break;
    case "report":
      redundancy.generateHealthReport().then(report => {
        console.log(JSON.stringify(report, null, 2));
      });
      break;
    default:
      console.log("Usage: node enhanced-github-actions-redundancy.cjs [start|stop|check|trigger <workflow>|report]");
      process.exit(1);
  }
}

module.exports = { EnhancedGitHubActionsRedundancy };