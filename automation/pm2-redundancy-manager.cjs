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
      // PM2 Ecosystems to monitor
      ecosystems: [
        "ecosystem.pm2.cjs",
        "ecosystem.redundancy.cjs",
        "ecosystem.fast-ads.local.cjs",
        "ecosystem.cron.local.cjs"
      ],
      
      // Process groups with their expected processes
      processGroups: {
        core: {
          ecosystem: "ecosystem.pm2.cjs",
          processes: ["zion-auto-sync", "zion-auto-sync-cron"],
          restartStrategy: "individual",
          maxRestarts: 3
        },
        redundancy: {
          ecosystem: "ecosystem.redundancy.cjs",
          processes: [
            "redundancy-automation-system",
            "redundancy-health-monitor",
            "redundancy-git-sync",
            "redundancy-build-monitor"
          ],
          restartStrategy: "group",
          maxRestarts: 5
        },
        fastads: {
          ecosystem: "ecosystem.fast-ads.local.cjs",
          processes: ["fast-ads-orchestrator", "fast-ads-scheduler"],
          restartStrategy: "individual",
          maxRestarts: 3
        },
        cron: {
          ecosystem: "ecosystem.cron.local.cjs",
          processes: ["cron-automation-system", "cron-scheduler"],
          restartStrategy: "individual",
          maxRestarts: 3
        }
      },
      
      // Health check intervals
      intervals: {
        processHealth: 30000,    // 30 seconds
        groupHealth: 60000,      // 1 minute
        overallHealth: 300000,   // 5 minutes
        recoveryCheck: 120000    // 2 minutes
      },
      
      // Resource thresholds
      thresholds: {
        memory: 80,              // 80% memory usage
        cpu: 90,                 // 90% CPU usage
        restartDelay: 5000,      // 5 seconds between restarts
        maxConsecutiveFailures: 3
      }
    };
    
    this.monitoring = false;
    this.checkIntervals = new Map();
    this.processHealth = new Map();
    this.restartCounts = new Map();
    this.failureHistory = new Map();
    this.lastRecovery = new Date();
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

  // Check if PM2 daemon is running
  async checkPM2Daemon() {
    try {
      const result = await this.runCommand("pm2", ["status", "--no-daemon"]);
      return result.status === 0;
    } catch (error) {
      this.log(`PM2 daemon check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  // Start PM2 daemon if not running
  async startPM2Daemon() {
    try {
      this.log("Starting PM2 daemon...", "INFO");
      await this.runCommand("pm2", ["start"]);
      this.log("PM2 daemon started successfully", "INFO");
      return true;
    } catch (error) {
      this.log(`Failed to start PM2 daemon: ${error.message}`, "ERROR");
      return false;
    }
  }

  // Get PM2 process list
  async getPM2ProcessList() {
    try {
      const result = await this.runCommand("pm2", ["list", "--no-daemon"]);
      if (result.status === 0) {
        return this.parsePM2ProcessList(result.stdout);
      }
      return [];
    } catch (error) {
      this.log(`Failed to get PM2 process list: ${error.message}`, "ERROR");
      return [];
    }
  }

  // Parse PM2 process list output
  parsePM2ProcessList(output) {
    const processes = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      if (line.includes('│') && !line.includes('id')) {
        const parts = line.split('│').map(p => p.trim()).filter(p => p);
        if (parts.length >= 4) {
          processes.push({
            id: parts[0],
            name: parts[1],
            status: parts[2],
            cpu: parts[3],
            memory: parts[4] || '0%'
          });
        }
      }
    }
    
    return processes;
  }

  // Check individual process health
  async checkProcessHealth(processName) {
    try {
      const result = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
      if (result.status === 0) {
        const output = result.stdout;
        const health = this.parseProcessHealth(output);
        
        this.processHealth.set(processName, {
          timestamp: new Date().toISOString(),
          ...health
        });
        
        return health;
      }
      return null;
    } catch (error) {
      this.log(`Failed to check process health for ${processName}: ${error.message}`, "ERROR");
      return null;
    }
  }

  // Parse process health information
  parseProcessHealth(output) {
    const health = {
      status: 'unknown',
      memory: 0,
      cpu: 0,
      uptime: 0,
      restarts: 0,
      online: false
    };
    
    if (output.includes('online')) {
      health.status = 'online';
      health.online = true;
    } else if (output.includes('stopped')) {
      health.status = 'stopped';
    } else if (output.includes('errored')) {
      health.status = 'errored';
    }
    
    // Extract memory usage
    const memoryMatch = output.match(/memory\s+(\d+)/);
    if (memoryMatch) {
      health.memory = parseInt(memoryMatch[1]);
    }
    
    // Extract CPU usage
    const cpuMatch = output.match(/cpu\s+(\d+)/);
    if (cpuMatch) {
      health.cpu = parseInt(cpuMatch[1]);
    }
    
    // Extract uptime
    const uptimeMatch = output.match(/pm_uptime\s+(\d+)/);
    if (uptimeMatch) {
      health.uptime = parseInt(uptimeMatch[1]);
    }
    
    // Extract restart count
    const restartMatch = output.match(/restart_time\s+(\d+)/);
    if (restartMatch) {
      health.restarts = parseInt(restartMatch[1]);
    }
    
    return health;
  }

  // Check process group health
  async checkProcessGroupHealth(groupName, groupConfig) {
    this.log(`Checking health for process group: ${groupName}`, "INFO");
    
    const groupHealth = {
      groupName,
      timestamp: new Date().toISOString(),
      processes: {},
      overall: true,
      issues: []
    };
    
    for (const processName of groupConfig.processes) {
      const health = await this.checkProcessHealth(processName);
      
      if (health) {
        groupHealth.processes[processName] = health;
        
        // Check for issues
        if (!health.online) {
          groupHealth.overall = false;
          groupHealth.issues.push(`${processName} is not online`);
        }
        
        if (health.memory > this.config.thresholds.memory) {
          groupHealth.issues.push(`${processName} high memory usage: ${health.memory}%`);
        }
        
        if (health.cpu > this.config.thresholds.cpu) {
          groupHealth.issues.push(`${processName} high CPU usage: ${health.cpu}%`);
        }
      } else {
        groupHealth.overall = false;
        groupHealth.issues.push(`${processName} health check failed`);
      }
    }
    
    // Store group health
    this.processHealth.set(groupName, groupHealth);
    
    // Trigger recovery if needed
    if (!groupHealth.overall) {
      await this.triggerGroupRecovery(groupName, groupConfig, groupHealth);
    }
    
    return groupHealth;
  }

  // Trigger recovery for a process group
  async triggerGroupRecovery(groupName, groupConfig, groupHealth) {
    this.log(`Triggering recovery for group: ${groupName}`, "WARN");
    
    const restartCount = this.restartCounts.get(groupName) || 0;
    if (restartCount >= groupConfig.maxRestarts) {
      this.log(`Group ${groupName} exceeded max restart attempts (${groupConfig.maxRestarts})`, "ERROR");
      return false;
    }
    
    try {
      if (groupConfig.restartStrategy === "group") {
        // Restart entire group
        await this.restartProcessGroup(groupName, groupConfig);
      } else {
        // Restart individual processes
        for (const [processName, health] of Object.entries(groupHealth.processes)) {
          if (!health.online || health.status === 'errored') {
            await this.restartProcess(processName);
          }
        }
      }
      
      this.restartCounts.set(groupName, restartCount + 1);
      this.log(`Recovery triggered for group ${groupName} (attempt ${restartCount + 1})`, "INFO");
      
      // Reset restart count after successful recovery
      setTimeout(() => {
        this.restartCounts.set(groupName, 0);
      }, 300000); // 5 minutes
      
      return true;
    } catch (error) {
      this.log(`Recovery failed for group ${groupName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  // Restart entire process group
  async restartProcessGroup(groupName, groupConfig) {
    try {
      this.log(`Restarting entire process group: ${groupName}`, "INFO");
      
      // Stop all processes in group
      for (const processName of groupConfig.processes) {
        await this.runCommand("pm2", ["stop", processName]);
      }
      
      // Wait a moment
      await new Promise(resolve => setTimeout(resolve, this.config.thresholds.restartDelay));
      
      // Start all processes from ecosystem
      await this.runCommand("pm2", ["start", groupConfig.ecosystem, "--update-env"]);
      
      this.log(`Process group ${groupName} restarted successfully`, "INFO");
    } catch (error) {
      this.log(`Failed to restart process group ${groupName}: ${error.message}`, "ERROR");
      throw error;
    }
  }

  // Restart individual process
  async restartProcess(processName) {
    try {
      this.log(`Restarting process: ${processName}`, "INFO");
      
      const result = await this.runCommand("pm2", ["restart", processName]);
      if (result.status === 0) {
        this.log(`Process ${processName} restarted successfully`, "INFO");
        return true;
      } else {
        this.log(`Failed to restart process ${processName}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Error restarting process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  // Start missing processes
  async startMissingProcesses() {
    try {
      this.log("Checking for missing processes...", "INFO");
      
      const runningProcesses = await this.getPM2ProcessList();
      const runningNames = runningProcesses.map(p => p.name);
      
      for (const [groupName, groupConfig] of Object.entries(this.config.processGroups)) {
        for (const processName of groupConfig.processes) {
          if (!runningNames.includes(processName)) {
            this.log(`Starting missing process: ${processName}`, "INFO");
            await this.runCommand("pm2", ["start", groupConfig.ecosystem, "--update-env"]);
          }
        }
      }
    } catch (error) {
      this.log(`Failed to start missing processes: ${error.message}`, "ERROR");
    }
  }

  // Save PM2 process list
  async savePM2Processes() {
    try {
      await this.runCommand("pm2", ["save"]);
      this.log("PM2 process list saved", "INFO");
    } catch (error) {
      this.log(`Failed to save PM2 process list: ${error.message}`, "ERROR");
    }
  }

  // Overall health check
  async checkOverallHealth() {
    try {
      this.log("Performing overall PM2 health check", "INFO");
      
      // Check PM2 daemon
      const daemonRunning = await this.checkPM2Daemon();
      if (!daemonRunning) {
        this.log("PM2 daemon not running, starting...", "WARN");
        await this.startPM2Daemon();
      }
      
      // Check each process group
      const groupHealthResults = {};
      for (const [groupName, groupConfig] of Object.entries(this.config.processGroups)) {
        groupHealthResults[groupName] = await this.checkProcessGroupHealth(groupName, groupConfig);
      }
      
      // Start missing processes
      await this.startMissingProcesses();
      
      // Save process list
      await this.savePM2Processes();
      
      const overallHealth = {
        timestamp: new Date().toISOString(),
        daemonRunning,
        groups: groupHealthResults,
        overall: daemonRunning && Object.values(groupHealthResults).every(g => g.overall)
      };
      
      this.log(`Overall health check completed. Healthy: ${overallHealth.overall}`, "INFO");
      return overallHealth;
      
    } catch (error) {
      this.log(`Overall health check failed: ${error.message}`, "ERROR");
      return { overall: false, error: error.message };
    }
  }

  // Start monitoring
  start() {
    if (this.monitoring) {
      this.log("Monitoring already started", "WARN");
      return;
    }
    
    this.monitoring = true;
    this.log("Starting PM2 redundancy monitoring", "INFO");
    
    // Start process health monitoring
    this.checkIntervals.set("process", setInterval(async () => {
      for (const [groupName, groupConfig] of Object.entries(this.config.processGroups)) {
        await this.checkProcessGroupHealth(groupName, groupConfig);
      }
    }, this.config.intervals.processHealth));
    
    // Start overall health monitoring
    this.checkIntervals.set("overall", setInterval(async () => {
      await this.checkOverallHealth();
    }, this.config.intervals.overallHealth));
    
    // Start recovery check monitoring
    this.checkIntervals.set("recovery", setInterval(async () => {
      const now = new Date();
      const timeSinceLastRecovery = now - this.lastRecovery;
      
      if (timeSinceLastRecovery > this.config.intervals.recoveryCheck) {
        await this.checkOverallHealth();
        this.lastRecovery = now;
      }
    }, this.config.intervals.recoveryCheck));
    
    this.log("PM2 redundancy monitoring started", "INFO");
  }

  // Stop monitoring
  stop() {
    if (!this.monitoring) {
      this.log("Monitoring not started", "WARN");
      return;
    }
    
    this.monitoring = false;
    
    // Clear all intervals
    for (const [name, interval] of this.checkIntervals) {
      clearInterval(interval);
      this.log(`Stopped ${name} monitoring`, "INFO");
    }
    this.checkIntervals.clear();
    
    this.log("PM2 redundancy monitoring stopped", "INFO");
  }

  // Get status
  getStatus() {
    return {
      monitoring: this.monitoring,
      processHealth: Object.fromEntries(this.processHealth),
      restartCounts: Object.fromEntries(this.restartCounts),
      failureHistory: Object.fromEntries(this.failureHistory),
      lastRecovery: this.lastRecovery,
      config: this.config
    };
  }

  // Run once
  async runOnce() {
    this.log("Running PM2 redundancy check once", "INFO");
    return await this.checkOverallHealth();
  }
}

// CLI interface
if (require.main === module) {
  const manager = new PM2RedundancyManager();
  const command = process.argv[2] || "start";
  
  switch (command) {
    case "start":
      manager.start();
      break;
    case "stop":
      manager.stop();
      break;
    case "status":
      console.log(JSON.stringify(manager.getStatus(), null, 2));
      break;
    case "once":
      manager.runOnce().then(status => {
        console.log(JSON.stringify(status, null, 2));
        process.exit(0);
      });
      break;
    case "health":
      manager.checkOverallHealth().then(status => {
        console.log(JSON.stringify(status, null, 2));
        process.exit(0);
      });
      break;
    default:
      console.log("Usage: node pm2-redundancy-manager.cjs [start|stop|status|once|health]");
      process.exit(1);
  }
}

module.exports = PM2RedundancyManager;