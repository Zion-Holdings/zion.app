#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class PM2RedundancyManager {
  constructor() {
    this.config = {
      // Primary PM2 ecosystem files
      ecosystemFiles: [
        "ecosystem.pm2.cjs",
        "ecosystem.redundancy.cjs"
      ],
      
      // All PM2 processes to monitor
      processes: [
        // Core automation processes
        "zion-auto-sync",
        "zion-auto-sync-cron",
        
        // Redundancy system processes
        "redundancy-automation-system",
        "redundancy-health-monitor",
        "redundancy-git-sync",
        "redundancy-build-monitor",
        
        // Additional automation processes
        "automation-orchestrator",
        "continuous-build-monitor",
        "master-build-orchestrator",
        "pre-build-health-check"
      ],
      
      // Backup npm scripts for PM2 operations
      backupScripts: {
        start: [
          "pm2:start",
          "pm2:restart",
          "automation:pm2",
          "automation:pm2:restart"
        ],
        stop: [
          "pm2:stop",
          "pm2:status"
        ],
        status: [
          "pm2:status",
          "automation:pm2:status"
        ],
        logs: [
          "pm2:logs",
          "automation:pm2:logs"
        ]
      },
      
      // Health check configuration
      healthCheck: {
        interval: 30000, // 30 seconds
        maxRestartAttempts: 5,
        restartDelay: 5000,
        criticalProcesses: [
          "zion-auto-sync",
          "redundancy-automation-system",
          "redundancy-health-monitor"
        ]
      },
      
      // Logging configuration
      logging: {
        logDir: "automation/logs",
        maxLogSize: 10 * 1024 * 1024, // 10MB
        maxLogFiles: 30
      }
    };
    
    this.ensureLogDirectory();
    this.processStatus = new Map();
    this.restartAttempts = new Map();
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
    
    const logFile = path.join(this.config.logging.logDir, `pm2-redundancy-${new Date().toISOString().split('T')[0]}.log`);
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

  async checkPM2Status() {
    try {
      const result = await this.runCommand("pm2", ["status", "--no-daemon"]);
      return result.status === 0;
    } catch (error) {
      this.log(`PM2 status check error: ${error.message}`, "ERROR");
      return false;
    }
  }

  async getProcessStatus(processName) {
    try {
      const result = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
      
      if (result.status !== 0) {
        return { status: "not_found", running: false };
      }
      
      const output = result.stdout;
      let status = "unknown";
      let running = false;
      
      if (output.includes("online")) {
        status = "online";
        running = true;
      } else if (output.includes("errored")) {
        status = "errored";
        running = false;
      } else if (output.includes("stopped")) {
        status = "stopped";
        running = false;
      } else if (output.includes("restarting")) {
        status = "restarting";
        running = false;
      }
      
      return { status, running, output };
    } catch (error) {
      this.log(`Error getting status for ${processName}: ${error.message}`, "ERROR");
      return { status: "error", running: false, error: error.message };
    }
  }

  async startProcess(processName) {
    this.log(`Starting process: ${processName}`);
    
    try {
      // Try PM2 start first
      let result = await this.runCommand("pm2", ["start", processName]);
      
      if (result.status !== 0) {
        // Try restart if start fails
        result = await this.runCommand("pm2", ["restart", processName]);
      }
      
      if (result.status !== 0) {
        // Try starting from ecosystem file
        for (const ecosystemFile of this.config.ecosystemFiles) {
          if (fs.existsSync(ecosystemFile)) {
            result = await this.runCommand("pm2", ["start", ecosystemFile]);
            if (result.status === 0) break;
          }
        }
      }
      
      if (result.status === 0) {
        this.log(`Successfully started ${processName}`);
        return true;
      } else {
        this.log(`Failed to start ${processName} with PM2`, "WARN");
        
        // Try npm scripts as backup
        return await this.startProcessWithNPM(processName);
      }
    } catch (error) {
      this.log(`Error starting ${processName}: ${error.message}`, "ERROR");
      return await this.startProcessWithNPM(processName);
    }
  }

  async startProcessWithNPM(processName) {
    this.log(`Trying to start ${processName} with npm scripts...`);
    
    // Map process names to npm scripts
    const processToScript = {
      "zion-auto-sync": "pm2:start",
      "zion-auto-sync-cron": "pm2:cron:start",
      "redundancy-automation-system": "redundancy:pm2",
      "redundancy-health-monitor": "redundancy:health",
      "redundancy-git-sync": "redundancy:git-sync",
      "redundancy-build-monitor": "redundancy:build"
    };
    
    const script = processToScript[processName];
    if (script) {
      try {
        const result = await this.runCommand("npm", ["run", script]);
        if (result.status === 0) {
          this.log(`Successfully started ${processName} with npm script: ${script}`);
          return true;
        }
      } catch (error) {
        this.log(`Error running npm script ${script}: ${error.message}`, "WARN");
      }
    }
    
    // Try generic automation scripts
    for (const backupScript of this.config.backupScripts.start) {
      try {
        const result = await this.runCommand("npm", ["run", backupScript]);
        if (result.status === 0) {
          this.log(`Successfully started processes with backup script: ${backupScript}`);
          return true;
        }
      } catch (error) {
        this.log(`Error running backup script ${backupScript}: ${error.message}`, "WARN");
      }
    }
    
    this.log(`Failed to start ${processName} with all methods`, "ERROR");
    return false;
  }

  async restartProcess(processName) {
    this.log(`Restarting process: ${processName}`);
    
    try {
      // Try PM2 restart first
      let result = await this.runCommand("pm2", ["restart", processName]);
      
      if (result.status !== 0) {
        // Try stop then start
        await this.runCommand("pm2", ["stop", processName]);
        result = await this.runCommand("pm2", ["start", processName]);
      }
      
      if (result.status === 0) {
        this.log(`Successfully restarted ${processName}`);
        return true;
      } else {
        this.log(`Failed to restart ${processName} with PM2, trying npm scripts`, "WARN");
        return await this.startProcessWithNPM(processName);
      }
    } catch (error) {
      this.log(`Error restarting ${processName}: ${error.message}`, "ERROR");
      return await this.startProcessWithNPM(processName);
    }
  }

  async checkProcessHealth(processName) {
    const processInfo = await this.getProcessStatus(processName);
    const isHealthy = processInfo.running && processInfo.status === "online";
    
    this.processStatus.set(processName, {
      ...processInfo,
      lastCheck: new Date().toISOString(),
      healthy: isHealthy
    });
    
    if (!isHealthy) {
      this.log(`Process ${processName} is unhealthy (status: ${processInfo.status})`, "WARN");
      
      // Check if we should attempt restart
      const restartCount = this.restartAttempts.get(processName) || 0;
      
      if (restartCount < this.config.healthCheck.maxRestartAttempts) {
        this.log(`Attempting to restart ${processName} (attempt ${restartCount + 1}/${this.config.healthCheck.maxRestartAttempts})`);
        
        const restartSuccess = await this.restartProcess(processName);
        if (restartSuccess) {
          this.restartAttempts.set(processName, 0);
          this.log(`Successfully restarted ${processName}`);
        } else {
          this.restartAttempts.set(processName, restartCount + 1);
          this.log(`Failed to restart ${processName}, attempt ${restartCount + 1}/${this.config.healthCheck.maxRestartAttempts}`, "ERROR");
        }
      } else {
        this.log(`Max restart attempts reached for ${processName}, marking as failed`, "ERROR");
      }
    } else {
      // Reset restart attempts if process is healthy
      this.restartAttempts.set(processName, 0);
    }
    
    return isHealthy;
  }

  async checkAllProcesses() {
    this.log("Checking health of all PM2 processes...");
    
    const results = {};
    let allHealthy = true;
    
    for (const processName of this.config.processes) {
      const isHealthy = await this.checkProcessHealth(processName);
      results[processName] = isHealthy;
      
      if (!isHealthy) {
        allHealthy = false;
      }
      
      // Add delay between checks to avoid overwhelming the system
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    if (allHealthy) {
      this.log("All PM2 processes are healthy");
    } else {
      this.log("Some PM2 processes are unhealthy, check logs for details", "WARN");
    }
    
    return results;
  }

  async startAllProcesses() {
    this.log("Starting all PM2 processes...");
    
    const results = {};
    
    for (const processName of this.config.processes) {
      const success = await this.startProcess(processName);
      results[processName] = success;
      
      if (success) {
        this.log(`Successfully started ${processName}`);
      } else {
        this.log(`Failed to start ${processName}`, "ERROR");
      }
      
      // Add delay between starts
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    return results;
  }

  async restartAllProcesses() {
    this.log("Restarting all PM2 processes...");
    
    const results = {};
    
    for (const processName of this.config.processes) {
      const success = await this.restartProcess(processName);
      results[processName] = success;
      
      if (success) {
        this.log(`Successfully restarted ${processName}`);
      } else {
        this.log(`Failed to restart ${processName}`, "ERROR");
      }
      
      // Add delay between restarts
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    return results;
  }

  async generateHealthReport() {
    const report = {
      timestamp: new Date().toISOString(),
      pm2Status: await this.checkPM2Status(),
      processes: {},
      restartAttempts: Object.fromEntries(this.restartAttempts),
      summary: {
        total: this.config.processes.length,
        healthy: 0,
        unhealthy: 0,
        failed: 0
      }
    };
    
    for (const [processName, status] of this.processStatus) {
      report.processes[processName] = status;
      
      if (status.healthy) {
        report.summary.healthy++;
      } else if (this.restartAttempts.get(processName) >= this.config.healthCheck.maxRestartAttempts) {
        report.summary.failed++;
      } else {
        report.summary.unhealthy++;
      }
    }
    
    const reportFile = path.join(this.config.logging.logDir, `pm2-health-report-${new Date().toISOString().split('T')[0]}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Health report generated: ${reportFile}`);
    return report;
  }

  async startMonitoring() {
    this.log("Starting PM2 redundancy monitoring...");
    
    // Initial health check
    await this.checkAllProcesses();
    
    // Set up periodic health checks
    setInterval(async () => {
      await this.checkAllProcesses();
    }, this.config.healthCheck.interval);
    
    // Set up periodic report generation
    setInterval(async () => {
      await this.generateHealthReport();
    }, 300000); // 5 minutes
    
    this.log("PM2 redundancy monitoring started");
  }

  async start() {
    this.log("Starting PM2 Redundancy Manager...");
    
    try {
      // Ensure PM2 is running
      if (!(await this.checkPM2Status())) {
        this.log("PM2 is not running, attempting to start it", "WARN");
        // Try to start PM2 with npm scripts
        for (const script of this.config.backupScripts.start) {
          try {
            const result = await this.runCommand("npm", ["run", script]);
            if (result.status === 0) break;
          } catch (error) {
            this.log(`Error running script ${script}: ${error.message}`, "WARN");
          }
        }
      }
      
      // Start all processes
      await this.startAllProcesses();
      
      // Start monitoring
      await this.startMonitoring();
      
      this.log("PM2 Redundancy Manager started successfully");
      
      // Keep the process running
      setInterval(() => {
        this.log("PM2 Redundancy Manager heartbeat");
      }, 300000); // 5 minutes
      
    } catch (error) {
      this.log(`Error starting PM2 Redundancy Manager: ${error.message}`, "ERROR");
      process.exit(1);
    }
  }
}

// CLI interface
if (require.main === module) {
  const manager = new PM2RedundancyManager();
  
  const command = process.argv[2] || 'start';
  
  switch (command) {
    case 'start':
      manager.start();
      break;
    case 'monitor':
      manager.startMonitoring();
      break;
    case 'health':
      manager.checkAllProcesses();
      break;
    case 'start-all':
      manager.startAllProcesses();
      break;
    case 'restart-all':
      manager.restartAllProcesses();
      break;
    case 'report':
      manager.generateHealthReport();
      break;
    case 'status':
      console.log("PM2 Status:");
      console.log(JSON.stringify(manager.processStatus, null, 2));
      break;
    default:
      console.log(`
PM2 Redundancy Manager

Usage: node pm2-redundancy-manager.cjs [command]

Commands:
  start       Start the manager and all processes (default)
  monitor     Start monitoring only
  health      Check health of all processes
  start-all   Start all processes
  restart-all Restart all processes
  report      Generate health report
  status      Show current process status
      `);
      process.exit(0);
  }
}

module.exports = PM2RedundancyManager;