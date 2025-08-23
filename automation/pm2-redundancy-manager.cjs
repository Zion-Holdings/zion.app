#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class PM2RedundancyManager {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "pm2-redundancy.log");
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
          maxRestarts: 5
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
          maxRestarts: 3
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
      healthCheckInterval: 30000, // 30 seconds
      restartDelay: 5000, // 5 seconds
      
      // Resource thresholds
      memoryThreshold: 80, // 80% memory usage
      cpuThreshold: 90,    // 90% CPU usage
      
      // Log rotation
      logRotation: {
        maxSize: 10 * 1024 * 1024, // 10MB
        maxFiles: 30,
        compress: true
      }
    };
    
    this.monitoring = false;
    this.checkInterval = null;
    this.restartCounts = new Map();
    this.healthHistory = new Map();
    this.lastRestart = new Map();
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
      this.log("Starting PM2 daemon", "INFO");
      const result = await this.runCommand("pm2", ["start"]);
      
      if (result.status === 0) {
        this.log("PM2 daemon started successfully", "INFO");
        return true;
      } else {
        this.log(`Failed to start PM2 daemon: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`PM2 daemon start failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  // Get PM2 process list
  async getPM2ProcessList() {
    try {
      const result = await this.runCommand("pm2", ["list", "--no-daemon"]);
      if (result.status === 0) {
        return this.parsePM2List(result.stdout);
      }
      return [];
    } catch (error) {
      this.log(`Failed to get PM2 process list: ${error.message}`, "ERROR");
      return [];
    }
  }

  // Parse PM2 list output
  parsePM2List(output) {
    const processes = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      const match = line.match(/^(\d+)\s+(\S+)\s+(\S+)\s+(\S+)\s+(\S+)\s+(\S+)\s+(\S+)\s+(\S+)/);
      if (match) {
        processes.push({
          id: match[1],
          name: match[2],
          namespace: match[3],
          version: match[4],
          mode: match[5],
          pid: match[6],
          uptime: match[7],
          status: match[8]
        });
      }
    }
    
    return processes;
  }

  // Check process health
  async checkProcessHealth(processName) {
    try {
      const result = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
      if (result.status !== 0) {
        return { status: "not_found", error: "Process not found" };
      }
      
      const output = result.stdout;
      const health = {
        status: "unknown",
        memory: 0,
        cpu: 0,
        uptime: 0,
        restarts: 0
      };
      
      // Parse status
      if (output.includes("online")) {
        health.status = "online";
      } else if (output.includes("stopped")) {
        health.status = "stopped";
      } else if (output.includes("errored")) {
        health.status = "errored";
      }
      
      // Parse memory usage
      const memoryMatch = output.match(/memory\s+(\d+)/);
      if (memoryMatch) {
        health.memory = parseInt(memoryMatch[1]);
      }
      
      // Parse CPU usage
      const cpuMatch = output.match(/cpu\s+(\d+)/);
      if (cpuMatch) {
        health.cpu = parseInt(cpuMatch[1]);
      }
      
      // Parse uptime
      const uptimeMatch = output.match(/uptime\s+(\d+)/);
      if (uptimeMatch) {
        health.uptime = parseInt(uptimeMatch[1]);
      }
      
      // Parse restart count
      const restartMatch = output.match(/restarts\s+(\d+)/);
      if (restartMatch) {
        health.restarts = parseInt(restartMatch[1]);
      }
      
      return health;
    } catch (error) {
      return { status: "error", error: error.message };
    }
  }

  // Check if process needs restart
  shouldRestartProcess(processName, health) {
    // Check if process is not online
    if (health.status !== "online") {
      return true;
    }
    
    // Check resource thresholds
    if (health.memory > this.config.memoryThreshold || health.cpu > this.config.cpuThreshold) {
      return true;
    }
    
    // Check restart count threshold
    const restartCount = this.restartCounts.get(processName) || 0;
    if (restartCount >= this.config.processGroups[this.getProcessGroup(processName)]?.maxRestarts || 5) {
      return false; // Don't restart if max attempts reached
    }
    
    // Check if enough time has passed since last restart
    const lastRestart = this.lastRestart.get(processName);
    if (lastRestart && (Date.now() - lastRestart) < this.config.restartDelay) {
      return false;
    }
    
    return false;
  }

  // Get process group for a process
  getProcessGroup(processName) {
    for (const [groupName, group] of Object.entries(this.config.processGroups)) {
      if (group.processes.includes(processName)) {
        return groupName;
      }
    }
    return "core"; // Default to core group
  }

  // Restart individual process
  async restartProcess(processName) {
    try {
      const restartCount = this.restartCounts.get(processName) || 0;
      const maxRestarts = this.config.processGroups[this.getProcessGroup(processName)]?.maxRestarts || 5;
      
      if (restartCount >= maxRestarts) {
        this.log(`Process ${processName} exceeded max restart attempts (${maxRestarts})`, "ERROR");
        return false;
      }
      
      this.log(`Restarting process ${processName} (attempt ${restartCount + 1}/${maxRestarts})`, "WARN");
      
      const result = await this.runCommand("pm2", ["restart", processName]);
      if (result.status === 0) {
        this.restartCounts.set(processName, restartCount + 1);
        this.lastRestart.set(processName, Date.now());
        this.log(`Process ${processName} restarted successfully`, "INFO");
        
        // Reset restart count after successful restart
        setTimeout(() => {
          this.restartCounts.set(processName, 0);
        }, 300000); // 5 minutes
        
        return true;
      } else {
        this.log(`Failed to restart process ${processName}: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Process restart failed for ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  // Restart process group
  async restartProcessGroup(groupName) {
    try {
      const group = this.config.processGroups[groupName];
      if (!group) {
        this.log(`Unknown process group: ${groupName}`, "ERROR");
        return false;
      }
      
      this.log(`Restarting process group: ${groupName}`, "WARN");
      
      // Restart the entire ecosystem
      const result = await this.runCommand("pm2", ["restart", group.ecosystem, "--update-env"]);
      if (result.status === 0) {
        this.log(`Process group ${groupName} restarted successfully`, "INFO");
        
        // Reset restart counts for all processes in the group
        for (const processName of group.processes) {
          this.restartCounts.set(processName, 0);
          this.lastRestart.set(processName, Date.now());
        }
        
        return true;
      } else {
        this.log(`Failed to restart process group ${groupName}: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Process group restart failed for ${groupName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  // Start missing processes
  async startMissingProcesses() {
    try {
      const runningProcesses = await this.getPM2ProcessList();
      const runningNames = runningProcesses.map(p => p.name);
      
      for (const [groupName, group] of Object.entries(this.config.processGroups)) {
        for (const processName of group.processes) {
          if (!runningNames.includes(processName)) {
            this.log(`Starting missing process: ${processName}`, "INFO");
            await this.startProcess(processName, group.ecosystem);
          }
        }
      }
    } catch (error) {
      this.log(`Failed to start missing processes: ${error.message}`, "ERROR");
    }
  }

  // Start a process
  async startProcess(processName, ecosystemFile) {
    try {
      if (!fs.existsSync(ecosystemFile)) {
        this.log(`Ecosystem file not found: ${ecosystemFile}`, "ERROR");
        return false;
      }
      
      const result = await this.runCommand("pm2", ["start", ecosystemFile, "--update-env"]);
      if (result.status === 0) {
        this.log(`Process ${processName} started from ${ecosystemFile}`, "INFO");
        return true;
      } else {
        this.log(`Failed to start process ${processName}: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`Process start failed for ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  // Perform health check on all processes
  async performHealthCheck() {
    try {
      this.log("Performing PM2 health check", "INFO");
      
      // Ensure PM2 daemon is running
      if (!(await this.checkPM2Daemon())) {
        this.log("PM2 daemon not running, starting it", "WARN");
        await this.startPM2Daemon();
        return false;
      }
      
      // Start missing processes
      await this.startMissingProcesses();
      
      // Check health of all processes
      const healthResults = {};
      let overallHealth = true;
      
      for (const [groupName, group] of Object.entries(this.config.processGroups)) {
        healthResults[groupName] = {};
        
        for (const processName of group.processes) {
          const health = await this.checkProcessHealth(processName);
          healthResults[groupName][processName] = health;
          
          if (this.shouldRestartProcess(processName, health)) {
            this.log(`Process ${processName} needs restart`, "WARN");
            
            if (group.restartStrategy === "group") {
              await this.restartProcessGroup(groupName);
              break; // Restart the entire group
            } else {
              await this.restartProcess(processName);
            }
            
            overallHealth = false;
          }
        }
      }
      
      // Save health history
      this.healthHistory.set("pm2", {
        timestamp: new Date().toISOString(),
        health: healthResults,
        overall: overallHealth
      });
      
      if (overallHealth) {
        this.log("All PM2 processes healthy", "INFO");
      } else {
        this.log("Some PM2 processes unhealthy, recovery actions taken", "WARN");
      }
      
      return overallHealth;
    } catch (error) {
      this.log(`PM2 health check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  // Start monitoring
  start() {
    if (this.monitoring) {
      this.log("PM2 redundancy monitoring already started", "WARN");
      return;
    }
    
    this.monitoring = true;
    this.log("Starting PM2 redundancy monitoring", "INFO");
    
    this.checkInterval = setInterval(async () => {
      await this.performHealthCheck();
    }, this.config.healthCheckInterval);
    
    this.log("PM2 redundancy monitoring started", "INFO");
  }

  // Stop monitoring
  stop() {
    if (!this.monitoring) {
      this.log("PM2 redundancy monitoring not running", "WARN");
      return;
    }
    
    this.monitoring = false;
    
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    
    this.log("PM2 redundancy monitoring stopped", "INFO");
  }

  // Get status
  getStatus() {
    return {
      monitoring: this.monitoring,
      health: this.healthHistory.get("pm2") || null,
      restartCounts: Object.fromEntries(this.restartCounts),
      lastRestart: Object.fromEntries(this.lastRestart),
      config: this.config
    };
  }

  // Run health check once
  async runOnce() {
    this.log("Running PM2 health check once", "INFO");
    return await this.performHealthCheck();
  }

  // Save PM2 process list
  async saveProcessList() {
    try {
      const result = await this.runCommand("pm2", ["save"]);
      if (result.status === 0) {
        this.log("PM2 process list saved", "INFO");
        return true;
      } else {
        this.log(`Failed to save PM2 process list: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`PM2 save failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  // Resurrect PM2 processes
  async resurrectProcesses() {
    try {
      const result = await this.runCommand("pm2", ["resurrect"]);
      if (result.status === 0) {
        this.log("PM2 processes resurrected", "INFO");
        return true;
      } else {
        this.log(`Failed to resurrect PM2 processes: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`PM2 resurrect failed: ${error.message}`, "ERROR");
      return false;
    }
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
      manager.runOnce().then(result => {
        console.log(JSON.stringify(result, null, 2));
        process.exit(0);
      });
      break;
    case "health":
      manager.performHealthCheck().then(result => {
        console.log(JSON.stringify(result, null, 2));
        process.exit(0);
      });
      break;
    case "save":
      manager.saveProcessList().then(result => {
        console.log(JSON.stringify({ saved: result }, null, 2));
        process.exit(0);
      });
      break;
    case "resurrect":
      manager.resurrectProcesses().then(result => {
        console.log(JSON.stringify({ resurrected: result }, null, 2));
        process.exit(0);
      });
      break;
    default:
      console.log("Usage: node pm2-redundancy-manager.cjs [start|stop|status|once|health|save|resurrect]");
      process.exit(1);
  }
}

module.exports = PM2RedundancyManager;