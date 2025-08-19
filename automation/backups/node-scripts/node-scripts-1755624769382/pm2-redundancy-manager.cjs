#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class PM2RedundancyManager {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "pm2-redundancy-manager.log");
    this.ensureLogDir();
    
    this.config = {
      ecosystemFiles: [
        "ecosystem.pm2.cjs",
        "ecosystem-redundancy.pm2.cjs",
        "ecosystem.redundancy.cjs"
      ],
      primaryProcesses: [
        "zion-auto-sync",
        "zion-auto-sync-cron"
      ],
      backupProcesses: [
        "zion-auto-sync-backup",
        "zion-auto-sync-cron-backup"
      ],
      redundancyProcesses: [
        "redundancy-master-orchestrator",
        "redundancy-health-monitor",
        "redundancy-git-sync",
        "redundancy-build-monitor",
        "redundancy-automation-system"
      ],
      allProcesses: [],
      healthCheckInterval: 30000, // 30 seconds
      maxRestartAttempts: 5,
      restartDelay: 5000,
      memoryThreshold: 80, // 80% memory usage
      cpuThreshold: 90, // 90% CPU usage
      backupProcessInterval: 300000, // 5 minutes
      processRotationInterval: 600000 // 10 minutes
    };
    
    // Initialize all processes list
    this.config.allProcesses = [
      ...this.config.primaryProcesses,
      ...this.config.backupProcesses,
      ...this.config.redundancyProcesses
    ];
    
    this.monitoring = false;
    this.checkInterval = null;
    this.restartCounts = new Map();
    this.healthHistory = new Map();
    this.lastProcessRotation = Date.now();
    this.backupProcessStatus = new Map();
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
        maxBuffer: 1024 * 1024 * 20,
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

  async checkPM2Status() {
    try {
      const result = await this.runCommand("pm2", ["status", "--no-daemon"]);
      return result.status === 0;
    } catch (error) {
      this.log(`PM2 status check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async getProcessInfo(processName) {
    try {
      const result = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
      if (result.status === 0) {
        const output = result.stdout;
        const statusMatch = output.match(/status\s+:\s+(\w+)/);
        const memoryMatch = output.match(/memory\s+:\s+(\d+)/);
        const cpuMatch = output.match(/cpu\s+:\s+(\d+)/);
        const uptimeMatch = output.match(/pm_uptime\s+:\s+(\d+)/);
        const restartMatch = output.match(/restart_time\s+:\s+(\d+)/);
        
        return {
          status: statusMatch ? statusMatch[1] : "unknown",
          memory: memoryMatch ? parseInt(memoryMatch[1]) : 0,
          cpu: cpuMatch ? parseInt(cpuMatch[1]) : 0,
          uptime: uptimeMatch ? parseInt(uptimeMatch[1]) : 0,
          restarts: restartMatch ? parseInt(restartMatch[1]) : 0,
          running: statusMatch ? statusMatch[1] === "online" : false
        };
      }
    } catch (error) {
      this.log(`Failed to get PM2 process info for ${processName}: ${error.message}`, "ERROR");
    }
    return null;
  }

  async startProcess(processName) {
    try {
      this.log(`Starting PM2 process: ${processName}`);
      
      // Try to start from ecosystem file first
      let result = await this.runCommand("pm2", ["start", processName]);
      
      if (result.status !== 0) {
        // Try to start from ecosystem files
        for (const ecosystemFile of this.config.ecosystemFiles) {
          if (fs.existsSync(ecosystemFile)) {
            this.log(`Trying to start ${processName} from ${ecosystemFile}`);
            result = await this.runCommand("pm2", ["start", ecosystemFile, "--only", processName]);
            if (result.status === 0) break;
          }
        }
      }
      
      if (result.status === 0) {
        this.log(`Successfully started PM2 process: ${processName}`);
        this.restartCounts.set(processName, 0);
        return true;
      } else {
        this.log(`Failed to start PM2 process: ${processName}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error starting PM2 process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restartProcess(processName) {
    try {
      this.log(`Restarting PM2 process: ${processName}`);
      const result = await this.runCommand("pm2", ["restart", processName]);
      if (result.status === 0) {
        this.log(`Successfully restarted PM2 process: ${processName}`);
        return true;
      } else {
        this.log(`Failed to restart PM2 process: ${processName}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error restarting PM2 process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async stopProcess(processName) {
    try {
      this.log(`Stopping PM2 process: ${processName}`);
      const result = await this.runCommand("pm2", ["stop", processName]);
      if (result.status === 0) {
        this.log(`Successfully stopped PM2 process: ${processName}`);
        return true;
      } else {
        this.log(`Failed to stop PM2 process: ${processName}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error stopping PM2 process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async deleteProcess(processName) {
    try {
      this.log(`Deleting PM2 process: ${processName}`);
      const result = await this.runCommand("pm2", ["delete", processName]);
      if (result.status === 0) {
        this.log(`Successfully deleted PM2 process: ${processName}`);
        return true;
      } else {
        this.log(`Failed to delete PM2 process: ${processName}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error deleting PM2 process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async managePrimaryProcesses() {
    this.log("Managing primary PM2 processes...");
    
    for (const processName of this.config.primaryProcesses) {
      try {
        const processInfo = await this.getProcessInfo(processName);
        
        if (!processInfo) {
          this.log(`Primary process ${processName} not found, starting...`);
          await this.startProcess(processName);
          continue;
        }
        
        if (!processInfo.running) {
          this.log(`Primary process ${processName} is not running, restarting...`);
          await this.restartProcess(processName);
          continue;
        }
        
        // Check resource usage
        if (processInfo.memory > this.config.memoryThreshold || 
            processInfo.cpu > this.config.cpuThreshold) {
          this.log(`Primary process ${processName} using excessive resources, restarting...`);
          await this.restartProcess(processName);
          continue;
        }
        
        // Check restart count
        if (processInfo.restarts > this.config.maxRestartAttempts) {
          this.log(`Primary process ${processName} has too many restarts, stopping and restarting...`);
          await this.stopProcess(processName);
          await new Promise(resolve => setTimeout(resolve, this.config.restartDelay));
          await this.startProcess(processName);
          continue;
        }
        
        this.log(`Primary process ${processName} is healthy`);
      } catch (error) {
        this.log(`Error managing primary process ${processName}: ${error.message}`, "ERROR");
      }
    }
  }

  async manageBackupProcesses() {
    this.log("Managing backup PM2 processes...");
    
    const now = Date.now();
    
    for (const processName of this.config.backupProcesses) {
      try {
        const processInfo = await this.getProcessInfo(processName);
        const lastStatus = this.backupProcessStatus.get(processName) || { lastCheck: 0, status: "unknown" };
        
        // Check if it's time to rotate backup processes
        if (now - lastStatus.lastCheck >= this.config.backupProcessInterval) {
          if (processInfo && processInfo.running) {
            // Stop backup process to allow primary to take over
            this.log(`Rotating backup process ${processName}...`);
            await this.stopProcess(processName);
            this.backupProcessStatus.set(processName, { lastCheck: now, status: "stopped" });
          } else if (!processInfo || !processInfo.running) {
            // Start backup process if primary is having issues
            this.log(`Starting backup process ${processName}...`);
            await this.startProcess(processName);
            this.backupProcessStatus.set(processName, { lastCheck: now, status: "started" });
          }
        } else {
          // Regular health check
          if (processInfo && !processInfo.running) {
            this.log(`Backup process ${processName} is not running, starting...`);
            await this.startProcess(processName);
            this.backupProcessStatus.set(processName, { lastCheck: now, status: "started" });
          }
        }
        
        this.log(`Backup process ${processName} status: ${processInfo ? processInfo.status : 'not found'}`);
      } catch (error) {
        this.log(`Error managing backup process ${processName}: ${error.message}`, "ERROR");
      }
    }
  }

  async manageRedundancyProcesses() {
    this.log("Managing redundancy PM2 processes...");
    
    for (const processName of this.config.redundancyProcesses) {
      try {
        const processInfo = await this.getProcessInfo(processName);
        
        if (!processInfo) {
          this.log(`Redundancy process ${processName} not found, starting...`);
          await this.startProcess(processName);
          continue;
        }
        
        if (!processInfo.running) {
          this.log(`Redundancy process ${processName} is not running, restarting...`);
          await this.restartProcess(processName);
          continue;
        }
        
        // Check resource usage
        if (processInfo.memory > this.config.memoryThreshold || 
            processInfo.cpu > this.config.cpuThreshold) {
          this.log(`Redundancy process ${processName} using excessive resources, restarting...`);
          await this.restartProcess(processName);
          continue;
        }
        
        this.log(`Redundancy process ${processName} is healthy`);
      } catch (error) {
        this.log(`Error managing redundancy process ${processName}: ${error.message}`, "ERROR");
      }
    }
  }

  async rotateProcesses() {
    const now = Date.now();
    if (now - this.lastProcessRotation >= this.config.processRotationInterval) {
      this.log("Performing process rotation...");
      
      // Stop all backup processes
      for (const processName of this.config.backupProcesses) {
        await this.stopProcess(processName);
      }
      
      // Wait a moment
      await new Promise(resolve => setTimeout(resolve, this.config.restartDelay));
      
      // Start all backup processes
      for (const processName of this.config.backupProcesses) {
        await this.startProcess(processName);
      }
      
      this.lastProcessRotation = now;
      this.log("Process rotation completed");
    }
  }

  async cleanupStaleProcesses() {
    this.log("Cleaning up stale PM2 processes...");
    
    try {
      const result = await this.runCommand("pm2", ["list"]);
      if (result.status === 0) {
        const output = result.stdout;
        const lines = output.split('\n');
        
        for (const line of lines) {
          if (line.includes('errored') || line.includes('stopped')) {
            const processMatch = line.match(/^\s*(\d+)\s+(\S+)/);
            if (processMatch) {
              const [, id, name] = processMatch;
              if (this.config.allProcesses.includes(name)) {
                this.log(`Cleaning up stale process: ${name} (ID: ${id})`);
                await this.deleteProcess(name);
              }
            }
          }
        }
      }
    } catch (error) {
      this.log(`Error cleaning up stale processes: ${error.message}`, "ERROR");
    }
  }

  async savePM2Configuration() {
    try {
      this.log("Saving PM2 configuration...");
      const result = await this.runCommand("pm2", ["save"]);
      if (result.status === 0) {
        this.log("PM2 configuration saved successfully");
        return true;
      } else {
        this.log("Failed to save PM2 configuration", "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error saving PM2 configuration: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkOverallHealth() {
    this.log("Checking PM2 system health...");
    
    const health = {
      timestamp: new Date().toISOString(),
      pm2Status: await this.checkPM2Status(),
      processes: {},
      summary: {
        total: 0,
        running: 0,
        stopped: 0,
        errored: 0
      }
    };
    
    for (const processName of this.config.allProcesses) {
      const processInfo = await this.getProcessInfo(processName);
      if (processInfo) {
        health.processes[processName] = processInfo;
        health.summary.total++;
        
        if (processInfo.running) {
          health.summary.running++;
        } else if (processInfo.status === 'stopped') {
          health.summary.stopped++;
        } else if (processInfo.status === 'errored') {
          health.summary.errored++;
        }
      }
    }
    
    // Store health history
    this.healthHistory.set(Date.now(), health);
    
    // Clean old health history
    const cutoff = Date.now() - (24 * 60 * 60 * 1000); // 24 hours
    for (const [timestamp] of this.healthHistory) {
      if (timestamp < cutoff) {
        this.healthHistory.delete(timestamp);
      }
    }
    
    return health;
  }

  async orchestrate() {
    this.log("Starting PM2 redundancy orchestration...");
    
    try {
      // Check PM2 status
      if (!(await this.checkPM2Status())) {
        this.log("PM2 is not running, attempting to start...", "WARN");
        // Try to start PM2 daemon
        await this.runCommand("pm2", ["start"]);
      }
      
      // Manage all process types
      await this.managePrimaryProcesses();
      await this.manageBackupProcesses();
      await this.manageRedundancyProcesses();
      
      // Perform process rotation if needed
      await this.rotateProcesses();
      
      // Clean up stale processes
      await this.cleanupStaleProcesses();
      
      // Save configuration
      await this.savePM2Configuration();
      
      // Check overall health
      const health = await this.checkOverallHealth();
      
      this.log(`PM2 system health: ${health.summary.running}/${health.summary.total} processes running`);
      
      if (health.summary.errored > 0) {
        this.log(`Warning: ${health.summary.errored} processes in error state`, "WARN");
      }
      
    } catch (error) {
      this.log(`Error during PM2 orchestration: ${error.message}`, "ERROR");
    }
  }

  startMonitoring() {
    if (this.monitoring) {
      this.log("PM2 monitoring is already running");
      return;
    }
    
    this.log("Starting PM2 redundancy monitoring...");
    this.monitoring = true;
    
    this.checkInterval = setInterval(async () => {
      await this.orchestrate();
    }, this.config.healthCheckInterval);
  }

  stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    this.monitoring = false;
    this.log("Stopped PM2 redundancy monitoring");
  }

  getStatus() {
    return {
      monitoring: this.monitoring,
      lastHealthCheck: this.healthHistory.size > 0 ? 
        Array.from(this.healthHistory.keys()).pop() : null,
      restartCounts: Object.fromEntries(this.restartCounts),
      backupProcessStatus: Object.fromEntries(this.backupProcessStatus),
      config: this.config
    };
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      status: this.getStatus(),
      healthHistory: Array.from(this.healthHistory.entries()).slice(-10), // Last 10 entries
      recommendations: []
    };
    
    // Generate recommendations based on health history
    if (this.healthHistory.size > 0) {
      const recentHealth = Array.from(this.healthHistory.values()).slice(-5);
      
      const totalProcesses = recentHealth.reduce((sum, h) => sum + h.summary.total, 0);
      const totalRunning = recentHealth.reduce((sum, h) => sum + h.summary.running, 0);
      const totalErrored = recentHealth.reduce((sum, h) => sum + h.summary.errored, 0);
      
      if (totalErrored > 0) {
        report.recommendations.push("Some PM2 processes are in error state - investigate root causes");
      }
      
      if (totalRunning < totalProcesses * 0.8) {
        report.recommendations.push("Many PM2 processes are not running - check system resources");
      }
    }
    
    return report;
  }
}

// CLI Interface
if (require.main === module) {
  const manager = new PM2RedundancyManager();
  const command = process.argv[2] || "start";
  
  switch (command) {
    case "start":
      manager.startMonitoring();
      break;
    case "stop":
      manager.stopMonitoring();
      break;
    case "status":
      console.log(JSON.stringify(manager.getStatus(), null, 2));
      break;
    case "report":
      console.log(JSON.stringify(manager.generateReport(), null, 2));
      break;
    case "once":
      manager.orchestrate().then(() => {
        console.log("PM2 orchestration completed");
        process.exit(0);
      }).catch(error => {
        console.error("PM2 orchestration failed:", error);
        process.exit(1);
      });
      break;
    default:
      console.log("Usage: node pm2-redundancy-manager.cjs [start|stop|status|report|once]");
      process.exit(1);
  }
}

module.exports = PM2RedundancyManager;