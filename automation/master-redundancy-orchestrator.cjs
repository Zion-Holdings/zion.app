#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

class MasterRedundancyOrchestrator {
  constructor() {
    this.config = {
      // PM2 Automation Coverage
      pm2: {
        ecosystemFiles: [
          "ecosystem.pm2.cjs",
          "ecosystem.redundancy.cjs"
        ],
        processes: [
          "zion-auto-sync",
          "zion-auto-sync-cron",
          "redundancy-automation-system",
          "redundancy-health-monitor",
          "redundancy-git-sync",
          "redundancy-build-monitor"
        ],
        healthCheckInterval: 30000,
        maxRestartAttempts: 5,
        restartDelay: 5000,
        backupProcesses: [
          "automation:pm2",
          "automation:pm2:restart",
          "automation:pm2:status"
        ]
      },
      
      // GitHub Actions Coverage
      githubActions: {
        workflows: [
          ".github/workflows/marketing-sync.yml",
          ".github/workflows/sync-health.yml"
        ],
        healthCheckInterval: 60000,
        maxFailureThreshold: 3,
        backupTriggers: [
          "gh:trigger",
          "gh:auto-heal"
        ],
        scheduledTasks: [
          "marketing-sync",
          "sync-health"
        ]
      },
      
      // Netlify Functions Coverage
      netlifyFunctions: {
        manifestFile: "netlify/functions/functions-manifest.json",
        healthCheckInterval: 120000,
        maxFailureThreshold: 2,
        criticalFunctions: [
          "netlify-auto-healer-runner",
          "continuous-orchestrator",
          "automation-matrix",
          "maintenance-scheduler"
        ],
        backupTriggers: [
          "netlify:trigger",
          "netlify:manifest"
        ]
      },
      
      // Build System Coverage
      build: {
        commands: [
          "npm run build",
          "npm run build:smart",
          "npm run build:orchestrator",
          "npm run build:recovery"
        ],
        healthCheckInterval: 300000, // 5 minutes
        maxBuildFailures: 3,
        backupCommands: [
          "npm run build:heal",
          "npm run build:auto-fix"
        ]
      },
      
      // Package Scripts Coverage
      packageScripts: {
        critical: [
          "automation:all",
          "redundancy:start",
          "git:sync",
          "content:fix",
          "security:scan"
        ],
        backup: [
          "automation:status",
          "redundancy:health",
          "git:health",
          "healing:scan"
        ]
      },
      
      // Logging Configuration
      logging: {
        logDir: "automation/logs",
        maxLogSize: 10 * 1024 * 1024, // 10MB
        maxLogFiles: 30,
        logLevels: ["INFO", "WARN", "ERROR", "DEBUG"]
      }
    };
    
    this.ensureLogDirectory();
    this.initializeMonitoring();
    this.startHealthChecks();
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
    
    const logFile = path.join(this.config.logging.logDir, `master-redundancy-${new Date().toISOString().split('T')[0]}.log`);
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

  async checkPM2Health() {
    this.log("Checking PM2 process health...");
    
    try {
      const statusResult = await this.runCommand("pm2", ["status", "--no-daemon"]);
      
      if (statusResult.status !== 0) {
        this.log("PM2 status check failed, attempting to restart PM2", "WARN");
        await this.runCommand("pm2", ["kill"]);
        await this.runCommand("pm2", ["start", this.config.pm2.ecosystemFiles[0]]);
        return false;
      }

      const processes = this.config.pm2.processes;
      let allHealthy = true;

      for (const processName of processes) {
        const processStatus = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
        
        if (processStatus.status !== 0) {
          this.log(`PM2 process ${processName} not found, restarting...`, "WARN");
          await this.runCommand("pm2", ["restart", processName]);
          allHealthy = false;
        } else {
          // Check if process is actually running
          const statusOutput = processStatus.stdout;
          if (statusOutput.includes("errored") || statusOutput.includes("stopped")) {
            this.log(`PM2 process ${processName} is not running, restarting...`, "WARN");
            await this.runCommand("pm2", ["restart", processName]);
            allHealthy = false;
          }
        }
      }

      if (allHealthy) {
        this.log("All PM2 processes are healthy");
      }

      return allHealthy;
    } catch (error) {
      this.log(`PM2 health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkGitHubActionsHealth() {
    this.log("Checking GitHub Actions health...");
    
    try {
      // Check if workflow files exist and are valid
      for (const workflow of this.config.githubActions.workflows) {
        if (!fs.existsSync(workflow)) {
          this.log(`Workflow file ${workflow} not found`, "ERROR");
          continue;
        }
        
        // Validate YAML syntax (basic check)
        try {
          const content = fs.readFileSync(workflow, 'utf8');
          if (!content.includes('name:') || !content.includes('on:')) {
            this.log(`Workflow file ${workflow} appears to be invalid`, "WARN");
          }
        } catch (error) {
          this.log(`Error reading workflow ${workflow}: ${error.message}`, "ERROR");
        }
      }

      // Check if we can trigger workflows manually
      for (const trigger of this.config.githubActions.backupTriggers) {
        try {
          const result = await this.runCommand("npm", ["run", trigger]);
          if (result.status === 0) {
            this.log(`GitHub Actions trigger ${trigger} is working`);
          } else {
            this.log(`GitHub Actions trigger ${trigger} failed`, "WARN");
          }
        } catch (error) {
          this.log(`Error testing GitHub Actions trigger ${trigger}: ${error.message}`, "WARN");
        }
      }

      return true;
    } catch (error) {
      this.log(`GitHub Actions health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkNetlifyFunctionsHealth() {
    this.log("Checking Netlify functions health...");
    
    try {
      if (!fs.existsSync(this.config.netlifyFunctions.manifestFile)) {
        this.log("Netlify functions manifest not found", "ERROR");
        return false;
      }

      const manifest = JSON.parse(fs.readFileSync(this.config.netlifyFunctions.manifestFile, 'utf8'));
      
      if (!manifest.functions || manifest.functions.length === 0) {
        this.log("No Netlify functions found in manifest", "WARN");
        return false;
      }

      this.log(`Found ${manifest.functions.length} Netlify functions`);

      // Check critical functions
      for (const criticalFunc of this.config.netlifyFunctions.criticalFunctions) {
        if (!manifest.functions.includes(criticalFunc)) {
          this.log(`Critical function ${criticalFunc} not found in manifest`, "WARN");
        }
      }

      // Test backup triggers
      for (const trigger of this.config.netlifyFunctions.backupTriggers) {
        try {
          const result = await this.runCommand("npm", ["run", trigger]);
          if (result.status === 0) {
            this.log(`Netlify trigger ${trigger} is working`);
          } else {
            this.log(`Netlify trigger ${trigger} failed`, "WARN");
          }
        } catch (error) {
          this.log(`Error testing Netlify trigger ${trigger}: ${error.message}`, "WARN");
        }
      }

      return true;
    } catch (error) {
      this.log(`Netlify functions health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkBuildSystemHealth() {
    this.log("Checking build system health...");
    
    try {
      // Check if build commands are available
      for (const command of this.config.build.commands) {
        try {
          const result = await this.runCommand("npm", ["run", command.replace("npm run ", "")]);
          if (result.status === 0) {
            this.log(`Build command ${command} is working`);
          } else {
            this.log(`Build command ${command} failed`, "WARN");
          }
        } catch (error) {
          this.log(`Error testing build command ${command}: ${error.message}`, "WARN");
        }
      }

      return true;
    } catch (error) {
      this.log(`Build system health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkPackageScriptsHealth() {
    this.log("Checking package scripts health...");
    
    try {
      // Check critical scripts
      for (const script of this.config.packageScripts.critical) {
        try {
          const result = await this.runCommand("npm", ["run", script]);
          if (result.status === 0) {
            this.log(`Critical script ${script} is working`);
          } else {
            this.log(`Critical script ${script} failed`, "WARN");
          }
        } catch (error) {
          this.log(`Error testing critical script ${script}: ${error.message}`, "WARN");
        }
      }

      return true;
    } catch (error) {
      this.log(`Package scripts health check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async runFullHealthCheck() {
    this.log("Running full health check...");
    
    const results = {
      pm2: await this.checkPM2Health(),
      githubActions: await this.checkGitHubActionsHealth(),
      netlifyFunctions: await this.checkNetlifyFunctionsHealth(),
      buildSystem: await this.checkBuildSystemHealth(),
      packageScripts: await this.checkPackageScriptsHealth(),
      timestamp: new Date().toISOString()
    };

    const allHealthy = Object.values(results).filter(v => typeof v === 'boolean').every(v => v);
    
    if (allHealthy) {
      this.log("All systems are healthy");
    } else {
      this.log("Some systems have issues, check logs for details", "WARN");
    }

    // Save health check results
    const healthFile = path.join(this.config.logging.logDir, `health-check-${new Date().toISOString().split('T')[0]}.json`);
    fs.writeFileSync(healthFile, JSON.stringify(results, null, 2));

    return results;
  }

  async startHealthChecks() {
    this.log("Starting health check monitoring...");
    
    // Run initial health check
    await this.runFullHealthCheck();
    
    // Set up periodic health checks
    setInterval(async () => {
      await this.runFullHealthCheck();
    }, this.config.pm2.healthCheckInterval);
  }

  async initializeMonitoring() {
    this.log("Initializing master redundancy monitoring...");
    
    // Ensure all required directories exist
    const requiredDirs = [
      this.config.logging.logDir,
      "automation/backups",
      "automation/redundancy"
    ];
    
    for (const dir of requiredDirs) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        this.log(`Created directory: ${dir}`);
      }
    }
  }

  async generateRedundancyReport() {
    this.log("Generating redundancy report...");
    
    const report = {
      timestamp: new Date().toISOString(),
      systems: {
        pm2: {
          status: "monitored",
          processes: this.config.pm2.processes.length,
          ecosystemFiles: this.config.pm2.ecosystemFiles.length
        },
        githubActions: {
          status: "monitored",
          workflows: this.config.githubActions.workflows.length,
          scheduledTasks: this.config.githubActions.scheduledTasks.length
        },
        netlifyFunctions: {
          status: "monitored",
          criticalFunctions: this.config.netlifyFunctions.criticalFunctions.length
        },
        buildSystem: {
          status: "monitored",
          commands: this.config.build.commands.length
        },
        packageScripts: {
          status: "monitored",
          critical: this.config.packageScripts.critical.length
        }
      },
      redundancy: {
        pm2Backup: this.config.pm2.backupProcesses,
        githubBackup: this.config.githubActions.backupTriggers,
        netlifyBackup: this.config.netlifyFunctions.backupTriggers,
        buildBackup: this.config.build.backupCommands,
        scriptsBackup: this.config.packageScripts.backup
      }
    };

    const reportFile = path.join(this.config.logging.logDir, `redundancy-report-${new Date().toISOString().split('T')[0]}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Redundancy report generated: ${reportFile}`);
    return report;
  }

  async start() {
    this.log("Starting Master Redundancy Orchestrator...");
    
    try {
      await this.initializeMonitoring();
      await this.runFullHealthCheck();
      await this.generateRedundancyReport();
      
      this.log("Master Redundancy Orchestrator started successfully");
      
      // Keep the process running
      setInterval(() => {
        // Heartbeat
        this.log("Master Redundancy Orchestrator heartbeat");
      }, 300000); // 5 minutes
      
    } catch (error) {
      this.log(`Error starting Master Redundancy Orchestrator: ${error.message}`, "ERROR");
      process.exit(1);
    }
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new MasterRedundancyOrchestrator();
  
  const command = process.argv[2] || 'start';
  
  switch (command) {
    case 'start':
      orchestrator.start();
      break;
    case 'health':
      orchestrator.runFullHealthCheck();
      break;
    case 'report':
      orchestrator.generateRedundancyReport();
      break;
    case 'pm2':
      orchestrator.checkPM2Health();
      break;
    case 'github':
      orchestrator.checkGitHubActionsHealth();
      break;
    case 'netlify':
      orchestrator.checkNetlifyFunctionsHealth();
      break;
    case 'build':
      orchestrator.checkBuildSystemHealth();
      break;
    case 'scripts':
      orchestrator.checkPackageScriptsHealth();
      break;
    default:
      console.log(`
Master Redundancy Orchestrator

Usage: node master-redundancy-orchestrator.cjs [command]

Commands:
  start     Start the orchestrator (default)
  health    Run full health check
  report    Generate redundancy report
  pm2       Check PM2 health
  github    Check GitHub Actions health
  netlify   Check Netlify functions health
  build     Check build system health
  scripts   Check package scripts health
      `);
      process.exit(0);
  }
}

module.exports = MasterRedundancyOrchestrator;