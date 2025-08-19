#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

class GitHubActionsRedundancyManager {
  constructor() {
    this.config = {
      // GitHub Actions workflows to monitor
      workflows: [
        ".github/workflows/marketing-sync.yml",
        ".github/workflows/sync-health.yml"
      ],
      
      // Backup npm scripts for GitHub Actions operations
      backupScripts: {
        trigger: [
          "gh:trigger",
          "gh:auto-heal"
        ],
        manual: [
          "marketing:sync:start",
          "sync:health:start"
        ],
        status: [
          "automation:status",
          "redundancy:github"
        ]
      },
      
      // Scheduled tasks that should run
      scheduledTasks: [
        {
          name: "marketing-sync",
          cron: "0 */12 * * *", // Every 12 hours
          script: "automation/marketing-sync.js",
          backupScripts: ["marketing:sync:start", "front:advertise"]
        },
        {
          name: "sync-health",
          cron: "*/15 * * * *", // Every 15 minutes
          script: "automation/pm2-auto-sync.js",
          backupScripts: ["sync:health:start", "git:sync"]
        }
      ],
      
      // Health check configuration
      healthCheck: {
        interval: 60000, // 1 minute
        maxFailureThreshold: 3,
        workflowValidation: true,
        cronValidation: true
      },
      
      // Logging configuration
      logging: {
        logDir: "automation/logs",
        maxLogSize: 10 * 1024 * 1024, // 10MB
        maxLogFiles: 30
      }
    };
    
    this.ensureLogDirectory();
    this.workflowStatus = new Map();
    this.failureCounts = new Map();
    this.lastRunTimes = new Map();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.config.logging.logDir)) {
      fs.mkdirSync(this.config.logging.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    const logFile = path.join(this.config.logging.logDir, `github-actions-redundancy-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logEntry + "\n");
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: process.cwd(),
        env: process.env,
        shell: false,
        encoding: "utf8",
        maxBuffer: 1024 * 1024 * 20,
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

  validateWorkflowFile(workflowPath) {
    try {
      if (!fs.existsSync(workflowPath)) {
        return { valid: false, error: "File not found" };
      }
      
      const content = fs.readFileSync(workflowPath, 'utf8');
      
      // Basic YAML validation
      try {
        const parsed = yaml.load(content);
        
        if (!parsed.name) {
          return { valid: false, error: "Missing workflow name" };
        }
        
        if (!parsed.on) {
          return { valid: false, error: "Missing trigger configuration" };
        }
        
        if (!parsed.jobs) {
          return { valid: false, error: "Missing jobs configuration" };
        }
        
        return { valid: true, parsed };
      } catch (yamlError) {
        return { valid: false, error: `YAML parsing error: ${yamlError.message}` };
      }
    } catch (error) {
      return { valid: false, error: `File read error: ${error.message}` };
    }
  }

  async checkWorkflowHealth(workflowPath) {
    this.log(`Checking workflow health: ${workflowPath}`);
    
    const validation = this.validateWorkflowFile(workflowPath);
    
    if (!validation.valid) {
      this.log(`Workflow ${workflowPath} is invalid: ${validation.error}`, "ERROR");
      return false;
    }
    
    const workflow = validation.parsed;
    const workflowName = path.basename(workflowPath, '.yml');
    
    // Check if workflow has proper triggers
    const hasTriggers = workflow.on && (
      workflow.on.schedule || 
      workflow.on.workflow_dispatch || 
      workflow.on.push || 
      workflow.on.pull_request
    );
    
    if (!hasTriggers) {
      this.log(`Workflow ${workflowName} has no valid triggers`, "WARN");
    }
    
    // Check if workflow has proper permissions
    const hasPermissions = workflow.permissions && (
      workflow.permissions.contents || 
      workflow.permissions.actions
    );
    
    if (!hasPermissions) {
      this.log(`Workflow ${workflowName} has no proper permissions`, "WARN");
    }
    
    // Check if workflow has proper jobs
    const hasJobs = workflow.jobs && Object.keys(workflow.jobs).length > 0;
    
    if (!hasJobs) {
      this.log(`Workflow ${workflowName} has no jobs`, "ERROR");
      return false;
    }
    
    // Check if workflow has proper steps
    let hasValidSteps = false;
    for (const jobName in workflow.jobs) {
      const job = workflow.jobs[jobName];
      if (job.steps && Array.isArray(job.steps) && job.steps.length > 0) {
        hasValidSteps = true;
        break;
      }
    }
    
    if (!hasValidSteps) {
      this.log(`Workflow ${workflowName} has no valid steps`, "ERROR");
      return false;
    }
    
    this.log(`Workflow ${workflowName} is healthy`);
    return true;
  }

  async checkAllWorkflows() {
    this.log("Checking health of all GitHub Actions workflows...");
    
    const results = {};
    let allHealthy = true;
    
    for (const workflow of this.config.workflows) {
      const isHealthy = await this.checkWorkflowHealth(workflow);
      results[workflow] = isHealthy;
      
      if (!isHealthy) {
        allHealthy = false;
        this.failureCounts.set(workflow, (this.failureCounts.get(workflow) || 0) + 1);
      } else {
        this.failureCounts.set(workflow, 0);
      }
      
      this.workflowStatus.set(workflow, {
        healthy: isHealthy,
        lastCheck: new Date().toISOString(),
        failureCount: this.failureCounts.get(workflow) || 0
      });
    }
    
    if (allHealthy) {
      this.log("All GitHub Actions workflows are healthy");
    } else {
      this.log("Some GitHub Actions workflows are unhealthy, check logs for details", "WARN");
    }
    
    return results;
  }

  async triggerWorkflow(workflowName) {
    this.log(`Triggering workflow: ${workflowName}`);
    
    try {
      // Try to trigger via GitHub CLI if available
      let result = await this.runCommand("gh", ["workflow", "run", workflowName]);
      
      if (result.status === 0) {
        this.log(`Successfully triggered workflow ${workflowName} via GitHub CLI`);
        return true;
      }
      
      // Try npm scripts as backup
      for (const script of this.config.backupScripts.trigger) {
        try {
          result = await this.runCommand("npm", ["run", script]);
          if (result.status === 0) {
            this.log(`Successfully triggered workflow via npm script: ${script}`);
            return true;
          }
        } catch (error) {
          this.log(`Error running trigger script ${script}: ${error.message}`, "WARN");
        }
      }
      
      // Try manual execution of workflow scripts
      const scheduledTask = this.config.scheduledTasks.find(task => task.name === workflowName);
      if (scheduledTask) {
        try {
          result = await this.runCommand("node", [scheduledTask.script]);
          if (result.status === 0) {
            this.log(`Successfully executed workflow script: ${scheduledTask.script}`);
            return true;
          }
        } catch (error) {
          this.log(`Error executing workflow script ${scheduledTask.script}: ${error.message}`, "WARN");
        }
        
        // Try backup scripts
        for (const backupScript of scheduledTask.backupScripts) {
          try {
            result = await this.runCommand("npm", ["run", backupScript]);
            if (result.status === 0) {
              this.log(`Successfully executed backup script: ${backupScript}`);
              return true;
            }
          } catch (error) {
            this.log(`Error executing backup script ${backupScript}: ${error.message}`, "WARN");
          }
        }
      }
      
      this.log(`Failed to trigger workflow ${workflowName} with all methods`, "ERROR");
      return false;
    } catch (error) {
      this.log(`Error triggering workflow ${workflowName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async runScheduledTask(taskName) {
    this.log(`Running scheduled task: ${taskName}`);
    
    const scheduledTask = this.config.scheduledTasks.find(task => task.name === taskName);
    if (!scheduledTask) {
      this.log(`Scheduled task ${taskName} not found`, "ERROR");
      return false;
    }
    
    try {
      // Check if it's time to run the task based on cron
      const shouldRun = this.shouldRunBasedOnCron(scheduledTask.cron);
      if (!shouldRun) {
        this.log(`Scheduled task ${taskName} is not due to run yet`);
        return true;
      }
      
      // Try to run the main script
      let result = await this.runCommand("node", [scheduledTask.script]);
      
      if (result.status === 0) {
        this.log(`Successfully executed scheduled task ${taskName}`);
        this.lastRunTimes.set(taskName, new Date().toISOString());
        return true;
      } else {
        this.log(`Failed to execute scheduled task ${taskName}, trying backup scripts`, "WARN");
        
        // Try backup scripts
        for (const backupScript of scheduledTask.backupScripts) {
          try {
            result = await this.runCommand("npm", ["run", backupScript]);
            if (result.status === 0) {
              this.log(`Successfully executed backup script for ${taskName}: ${backupScript}`);
              this.lastRunTimes.set(taskName, new Date().toISOString());
              return true;
            }
          } catch (error) {
            this.log(`Error executing backup script ${backupScript}: ${error.message}`, "WARN");
          }
        }
        
        this.log(`Failed to execute scheduled task ${taskName} with all methods`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error running scheduled task ${taskName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  shouldRunBasedOnCron(cronExpression) {
    try {
      // Simple cron validation - this is a basic implementation
      // In production, you might want to use a proper cron parser
      const parts = cronExpression.split(' ');
      if (parts.length !== 5) {
        return false;
      }
      
      const now = new Date();
      const minute = now.getMinutes();
      const hour = now.getHours();
      const dayOfMonth = now.getDate();
      const month = now.getMonth() + 1;
      const dayOfWeek = now.getDay();
      
      // Basic cron matching (simplified)
      const matchMinute = this.matchesCronPart(parts[0], minute);
      const matchHour = this.matchesCronPart(parts[1], hour);
      const matchDayOfMonth = this.matchesCronPart(parts[2], dayOfMonth);
      const matchMonth = this.matchesCronPart(parts[3], month);
      const matchDayOfWeek = this.matchesCronPart(parts[4], dayOfWeek);
      
      return matchMinute && matchHour && matchDayOfMonth && matchMonth && matchDayOfWeek;
    } catch (error) {
      this.log(`Error parsing cron expression ${cronExpression}: ${error.message}`, "ERROR");
      return false;
    }
  }

  matchesCronPart(cronPart, value) {
    if (cronPart === '*') return true;
    if (cronPart === value.toString()) return true;
    
    // Handle ranges like "0-59"
    if (cronPart.includes('-')) {
      const [min, max] = cronPart.split('-').map(Number);
      return value >= min && value <= max;
    }
    
    // Handle steps like "*/15"
    if (cronPart.includes('/')) {
      const [range, step] = cronPart.split('/');
      if (range === '*') {
        return value % step === 0;
      }
    }
    
    return false;
  }

  async runAllScheduledTasks() {
    this.log("Running all scheduled tasks...");
    
    const results = {};
    
    for (const task of this.config.scheduledTasks) {
      const success = await this.runScheduledTask(task.name);
      results[task.name] = success;
      
      if (success) {
        this.log(`Successfully executed scheduled task: ${task.name}`);
      } else {
        this.log(`Failed to execute scheduled task: ${task.name}`, "ERROR");
      }
      
      // Add delay between tasks
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
    
    return results;
  }

  async testBackupScripts() {
    this.log("Testing backup scripts...");
    
    const results = {};
    
    for (const category in this.config.backupScripts) {
      results[category] = {};
      
      for (const script of this.config.backupScripts[category]) {
        try {
          const result = await this.runCommand("npm", ["run", script]);
          results[category][script] = {
            success: result.status === 0,
            status: result.status,
            output: result.stdout
          };
          
          if (result.status === 0) {
            this.log(`Backup script ${script} is working`);
          } else {
            this.log(`Backup script ${script} failed`, "WARN");
          }
        } catch (error) {
          results[category][script] = {
            success: false,
            error: error.message
          };
          this.log(`Error testing backup script ${script}: ${error.message}`, "ERROR");
        }
      }
    }
    
    return results;
  }

  async generateHealthReport() {
    const report = {
      timestamp: new Date().toISOString(),
      workflows: {},
      scheduledTasks: {},
      backupScripts: {},
      summary: {
        totalWorkflows: this.config.workflows.length,
        healthyWorkflows: 0,
        unhealthyWorkflows: 0,
        totalScheduledTasks: this.config.scheduledTasks.length,
        lastRunTimes: Object.fromEntries(this.lastRunTimes)
      }
    };
    
    // Workflow status
    for (const [workflow, status] of this.workflowStatus) {
      report.workflows[workflow] = status;
      
      if (status.healthy) {
        report.summary.healthyWorkflows++;
      } else {
        report.summary.unhealthyWorkflows++;
      }
    }
    
    // Scheduled task status
    for (const task of this.config.scheduledTasks) {
      report.scheduledTasks[task.name] = {
        cron: task.cron,
        script: task.script,
        backupScripts: task.backupScripts,
        lastRun: this.lastRunTimes.get(task.name) || "never"
      };
    }
    
    // Test backup scripts
    report.backupScripts = await this.testBackupScripts();
    
    const reportFile = path.join(this.config.logging.logDir, `github-actions-health-report-${new Date().toISOString().split('T')[0]}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Health report generated: ${reportFile}`);
    return report;
  }

  async startMonitoring() {
    this.log("Starting GitHub Actions redundancy monitoring...");
    
    // Initial health check
    await this.checkAllWorkflows();
    
    // Set up periodic health checks
    setInterval(async () => {
      await this.checkAllWorkflows();
    }, this.config.healthCheck.interval);
    
    // Set up periodic scheduled task execution
    setInterval(async () => {
      await this.runAllScheduledTasks();
    }, 300000); // 5 minutes
    
    // Set up periodic report generation
    setInterval(async () => {
      await this.generateHealthReport();
    }, 600000); // 10 minutes
    
    this.log("GitHub Actions redundancy monitoring started");
  }

  async start() {
    this.log("Starting GitHub Actions Redundancy Manager...");
    
    try {
      // Check all workflows
      await this.checkAllWorkflows();
      
      // Test backup scripts
      await this.testBackupScripts();
      
      // Start monitoring
      await this.startMonitoring();
      
      this.log("GitHub Actions Redundancy Manager started successfully");
      
      // Keep the process running
      setInterval(() => {
        this.log("GitHub Actions Redundancy Manager heartbeat");
      }, 300000); // 5 minutes
      
    } catch (error) {
      this.log(`Error starting GitHub Actions Redundancy Manager: ${error.message}`, "ERROR");
      process.exit(1);
    }
  }
}

// CLI interface
if (require.main === module) {
  const manager = new GitHubActionsRedundancyManager();
  
  const command = process.argv[2] || 'start';
  
  switch (command) {
    case 'start':
      manager.start();
      break;
    case 'monitor':
      manager.startMonitoring();
      break;
    case 'health':
      manager.checkAllWorkflows();
      break;
    case 'scheduled':
      manager.runAllScheduledTasks();
      break;
    case 'test-backups':
      manager.testBackupScripts();
      break;
    case 'report':
      manager.generateHealthReport();
      break;
    case 'trigger':
      const workflowName = process.argv[3];
      if (workflowName) {
        manager.triggerWorkflow(workflowName);
      } else {
        console.log("Please specify a workflow name to trigger");
      }
      break;
    default:
      console.log(`
GitHub Actions Redundancy Manager

Usage: node github-actions-redundancy-manager.cjs [command]

Commands:
  start           Start the manager and monitoring (default)
  monitor         Start monitoring only
  health          Check health of all workflows
  scheduled       Run all scheduled tasks
  test-backups    Test all backup scripts
  report          Generate health report
  trigger <name>  Trigger a specific workflow
      `);
      process.exit(0);
  }
}

module.exports = GitHubActionsRedundancyManager;