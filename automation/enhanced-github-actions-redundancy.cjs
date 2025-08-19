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
      workflows: [
        "marketing-sync.yml",
        "sync-health.yml"
      ],
      localExecution: true,
      checkInterval: 60000, // 1 minute
      maxFailures: 3,
      retryDelay: 30000,
      autoTrigger: true,
      healthCheckWorkflow: "sync-health.yml",
      backupExecution: true,
      workflowSimulation: true,
      dependencyCheck: true,
      securityScanning: true
    };
    
    this.monitoring = false;
    this.checkInterval = null;
    this.workflowRegistry = new Map();
    this.executionHistory = new Map();
    this.failureCounts = new Map();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    try {
      fs.appendFileSync(this.logFile, logEntry + "\n");
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
      const content = fs.readFileSync(workflowPath, 'utf8');
      
      // Basic YAML validation
      if (!content.includes('name:') || !content.includes('on:')) {
        return { valid: false, error: "Missing required workflow fields" };
      }
      
      // Check for common issues
      const issues = [];
      
      if (!content.includes('runs-on:')) {
        issues.push("Missing runs-on specification");
      }
      
      if (!content.includes('steps:')) {
        issues.push("Missing steps section");
      }
      
      if (issues.length > 0) {
        return { valid: false, error: issues.join(', ') };
      }
      
      return { valid: true, content };
    } catch (error) {
      return { valid: false, error: error.message };
    }
  }

  async executeWorkflowLocally(workflowName) {
    try {
      this.log(`Executing workflow locally: ${workflowName}`, "INFO");
      
      const workflowPath = path.join(this.workspace, ".github/workflows", workflowName);
      
      if (!fs.existsSync(workflowPath)) {
        throw new Error(`Workflow file not found: ${workflowName}`);
      }
      
      const validation = await this.validateWorkflow(workflowPath);
      if (!validation.valid) {
        throw new Error(`Invalid workflow: ${validation.error}`);
      }
      
      // Parse workflow content to extract steps
      const content = validation.content;
      const steps = this.extractStepsFromWorkflow(content);
      
      if (steps.length === 0) {
        throw new Error("No executable steps found in workflow");
      }
      
      // Execute steps locally
      const results = [];
      for (const step of steps) {
        try {
          const result = await this.executeStep(step);
          results.push({ step: step.name, success: true, result });
        } catch (error) {
          results.push({ step: step.name, success: false, error: error.message });
        }
      }
      
      const successCount = results.filter(r => r.success).length;
      const totalCount = results.length;
      
      this.log(`Local execution completed: ${successCount}/${totalCount} steps successful`, "INFO");
      
      // Record execution
      this.executionHistory.set(workflowName, {
        timestamp: Date.now(),
        results,
        successCount,
        totalCount
      });
      
      return {
        success: successCount === totalCount,
        results,
        successCount,
        totalCount
      };
      
    } catch (error) {
      this.log(`Local workflow execution failed: ${error.message}`, "ERROR");
      return { success: false, error: error.message };
    }
  }

  extractStepsFromWorkflow(content) {
    const steps = [];
    const lines = content.split('\n');
    let inSteps = false;
    let currentStep = null;
    
    for (const line of lines) {
      const trimmed = line.trim();
      
      if (trimmed === 'steps:') {
        inSteps = true;
        continue;
      }
      
      if (inSteps && trimmed.startsWith('- name:')) {
        if (currentStep) {
          steps.push(currentStep);
        }
        currentStep = { name: trimmed.substring(7).trim().replace(/"/g, ''), commands: [] };
      } else if (inSteps && currentStep && (trimmed.startsWith('run:') || trimmed.startsWith('uses:'))) {
        if (trimmed.startsWith('run:')) {
          currentStep.commands.push(trimmed.substring(4).trim());
        } else {
          currentStep.commands.push(trimmed.substring(5).trim());
        }
      }
    }
    
    if (currentStep) {
      steps.push(currentStep);
    }
    
    return steps;
  }

  async executeStep(step) {
    try {
      this.log(`Executing step: ${step.name}`, "INFO");
      
      const results = [];
      
      for (const command of step.commands) {
        if (command.startsWith('node ')) {
          // Execute Node.js script
          const scriptPath = command.substring(5).trim();
          const result = await this.runCommand("node", [scriptPath]);
          results.push({ command, success: result.status === 0, result });
        } else if (command.startsWith('npm run ')) {
          // Execute npm script
          const scriptName = command.substring(8).trim();
          const result = await this.runCommand("npm", ["run", scriptName]);
          results.push({ command, success: result.status === 0, result });
        } else if (command.startsWith('git ')) {
          // Execute git command
          const gitArgs = command.substring(4).trim().split(' ');
          const result = await this.runCommand("git", gitArgs);
          results.push({ command, success: result.status === 0, result });
        } else {
          // Execute shell command
          const result = await this.runCommand("bash", ["-c", command]);
          results.push({ command, success: result.status === 0, result });
        }
      }
      
      return results;
    } catch (error) {
      throw new Error(`Step execution failed: ${error.message}`);
    }
  }

  async checkWorkflowHealth(workflowName) {
    try {
      const workflowPath = path.join(this.workspace, ".github/workflows", workflowName);
      
      if (!fs.existsSync(workflowPath)) {
        return { healthy: false, error: "Workflow file not found" };
      }
      
      const validation = await this.validateWorkflow(workflowPath);
      if (!validation.valid) {
        return { healthy: false, error: validation.error };
      }
      
      // Check if workflow has been executed recently
      const lastExecution = this.executionHistory.get(workflowName);
      const isRecent = lastExecution && (Date.now() - lastExecution.timestamp) < 3600000; // 1 hour
      
      return {
        healthy: true,
        valid: true,
        lastExecution: lastExecution ? new Date(lastExecution.timestamp).toISOString() : null,
        isRecent,
        successRate: lastExecution ? (lastExecution.successCount / lastExecution.totalCount) * 100 : null
      };
    } catch (error) {
      return { healthy: false, error: error.message };
    }
  }

  async performHealthCheck() {
    try {
      this.log("Performing GitHub Actions health check...", "INFO");
      
      const workflowsDir = await this.checkWorkflowsDirectory();
      if (!workflowsDir.exists) {
        return { healthy: false, error: "Workflows directory not found" };
      }
      
      let healthyWorkflows = 0;
      let totalWorkflows = workflowsDir.workflows.length;
      
      for (const workflow of workflowsDir.workflows) {
        const health = await this.checkWorkflowHealth(workflow);
        this.workflowRegistry.set(workflow, health);
        
        if (health.healthy) {
          healthyWorkflows++;
        } else {
          this.log(`Unhealthy workflow detected: ${workflow} - ${health.error}`, "WARN");
        }
      }
      
      // Calculate health percentage
      const healthPercentage = totalWorkflows > 0 ? (healthyWorkflows / totalWorkflows) * 100 : 100;
      
      this.log(`Health check complete: ${healthyWorkflows}/${totalWorkflows} workflows healthy (${healthPercentage.toFixed(1)}%)`, "INFO");
      
      return {
        healthy: healthPercentage >= 80,
        percentage: healthPercentage,
        totalWorkflows,
        healthyWorkflows,
        workflows: Object.fromEntries(this.workflowRegistry)
      };
    } catch (error) {
      this.log(`Health check failed: ${error.message}`, "ERROR");
      return { healthy: false, error: error.message };
    }
  }

  async triggerWorkflow(workflowName) {
    try {
      this.log(`Triggering workflow: ${workflowName}`, "INFO");
      
      if (this.config.localExecution) {
        return await this.executeWorkflowLocally(workflowName);
      } else {
        // Trigger via GitHub API (would require authentication)
        this.log("Remote workflow triggering not implemented", "WARN");
        return { success: false, error: "Remote triggering not implemented" };
      }
    } catch (error) {
      this.log(`Workflow triggering failed: ${error.message}`, "ERROR");
      return { success: false, error: error.message };
    }
  }

  async recoverFailedWorkflows() {
    try {
      let recoveredCount = 0;
      
      for (const [workflowName, health] of this.workflowRegistry) {
        if (!health.healthy) {
          this.log(`Attempting to recover failed workflow: ${workflowName}`, "WARN");
          
          const recoverySuccess = await this.triggerWorkflow(workflowName);
          if (recoverySuccess.success) {
            recoveredCount++;
          }
          
          // Wait before next recovery attempt
          await new Promise(resolve => setTimeout(resolve, this.config.retryDelay));
        }
      }
      
      if (recoveredCount > 0) {
        this.log(`Recovered ${recoveredCount} failed workflows`, "INFO");
      }
      
      return recoveredCount;
    } catch (error) {
      this.log(`Error during workflow recovery: ${error.message}`, "ERROR");
      return 0;
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("Monitoring already active", "WARN");
      return;
    }
    
    this.log("Starting enhanced GitHub Actions redundancy monitoring...", "INFO");
    this.monitoring = true;
    
    // Initial health check
    await this.performHealthCheck();
    
    // Set up periodic monitoring
    this.checkInterval = setInterval(async () => {
      try {
        await this.performHealthCheck();
      } catch (error) {
        this.log(`Monitoring cycle error: ${error.message}`, "ERROR");
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

  async emergencyTrigger() {
    try {
      this.log("Initiating emergency workflow trigger...", "WARN");
      
      const workflowsDir = await this.checkWorkflowsDirectory();
      if (!workflowsDir.exists) {
        throw new Error("Workflows directory not found");
      }
      
      let triggeredCount = 0;
      
      for (const workflow of workflowsDir.workflows) {
        try {
          const result = await this.triggerWorkflow(workflow);
          if (result.success) {
            triggeredCount++;
          }
        } catch (error) {
          this.log(`Failed to trigger ${workflow}: ${error.message}`, "ERROR");
        }
        
        // Wait between triggers
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
      
      this.log(`Emergency trigger completed: ${triggeredCount} workflows triggered`, "INFO");
      return triggeredCount;
    } catch (error) {
      this.log(`Emergency trigger failed: ${error.message}`, "ERROR");
      return 0;
    }
  }

  getStatus() {
    return {
      monitoring: this.monitoring,
      workflowRegistry: Object.fromEntries(this.workflowRegistry),
      executionHistory: Object.fromEntries(this.executionHistory),
      config: this.config,
      uptime: process.uptime()
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
    case "health":
      redundancy.performHealthCheck().then(result => {
        console.log(JSON.stringify(result, null, 2));
        process.exit(0);
      });
      break;
    case "trigger":
      const workflowName = process.argv[3];
      if (!workflowName) {
        console.log("Usage: node enhanced-github-actions-redundancy.cjs trigger <workflow-name>");
        process.exit(1);
      }
      redundancy.triggerWorkflow(workflowName).then(result => {
        console.log(JSON.stringify(result, null, 2));
        process.exit(result.success ? 0 : 1);
      });
      break;
    case "recover":
      redundancy.recoverFailedWorkflows().then(count => {
        console.log(`Recovered ${count} workflows`);
        process.exit(0);
      });
      break;
    case "emergency":
      redundancy.emergencyTrigger().then(count => {
        console.log(`Emergency triggered ${count} workflows`);
        process.exit(0);
      });
      break;
    case "status":
      console.log(JSON.stringify(redundancy.getStatus(), null, 2));
      break;
    default:
      console.log("Usage: node enhanced-github-actions-redundancy.cjs [start|stop|health|trigger <workflow>|recover|emergency|status]");
      process.exit(1);
  }
}

module.exports = { EnhancedGitHubActionsRedundancy };