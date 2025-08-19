#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class EnhancedPM2Redundancy {
  constructor() {
    this.config = {
      ecosystemFiles: ["ecosystem.pm2.cjs", "ecosystem.redundancy.cjs"],
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
      autoRecovery: true,
      logDir: "automation/logs",
      logFile: "enhanced-pm2-redundancy.log"
    };
    
    this.ensureLogDirectory();
    this.monitoring = false;
    this.checkInterval = null;
    this.restartAttempts = new Map();
    
    this.startMonitoring();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.config.logDir)) {
      fs.mkdirSync(this.config.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    try {
      const logPath = path.join(this.config.logDir, this.config.logFile);
      fs.appendFileSync(logPath, logMessage + "\n");
    } catch (error) {
      console.error(`Failed to write to log file: ${error.message}`);
    }
  }

  async runCommand(command, args = [], options = {}) {
    return new Promise((resolve) => {
      const result = spawnSync(command, args, {
        cwd: process.cwd(),
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

  async checkPM2Status() {
    try {
      const result = await this.runCommand("pm2", ["ping"]);
      return result.status === 0;
    } catch (error) {
      this.log(`PM2 ping failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startPM2() {
    this.log("Starting PM2 daemon...");
    try {
      const result = await this.runCommand("pm2", ["start"]);
      if (result.status === 0) {
        this.log("✅ PM2 daemon started successfully");
        return true;
      } else {
        this.log(`❌ Failed to start PM2: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Error starting PM2: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkProcessHealth(processName) {
    try {
      const result = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
      if (result.status === 0) {
        // Check if process is actually running
        const statusResult = await this.runCommand("pm2", ["status", "--no-daemon"]);
        if (statusResult.status === 0) {
          const output = statusResult.stdout;
          if (output.includes(processName) && output.includes("online")) {
            return { healthy: true, status: "online" };
          } else if (output.includes(processName) && output.includes("errored")) {
            return { healthy: false, status: "errored", needsRestart: true };
          } else if (output.includes(processName) && output.includes("stopped")) {
            return { healthy: false, status: "stopped", needsStart: true };
          }
        }
      }
      return { healthy: false, status: "not_found", needsStart: true };
    } catch (error) {
      this.log(`Error checking process ${processName}: ${error.message}`, "ERROR");
      return { healthy: false, status: "error", needsStart: true };
    }
  }

  async restartProcess(processName) {
    this.log(`🔄 Restarting process: ${processName}`);
    
    try {
      // First try to restart
      let result = await this.runCommand("pm2", ["restart", processName]);
      
      if (result.status !== 0) {
        // If restart fails, try to delete and start fresh
        this.log(`⚠️ Restart failed for ${processName}, trying delete and start...`);
        await this.runCommand("pm2", ["delete", processName]);
        
        // Find the ecosystem file that contains this process
        for (const ecosystemFile of this.config.ecosystemFiles) {
          if (fs.existsSync(ecosystemFile)) {
            result = await this.runCommand("pm2", ["start", ecosystemFile]);
            if (result.status === 0) {
              this.log(`✅ Process ${processName} restarted from ${ecosystemFile}`);
              return true;
            }
          }
        }
      } else {
        this.log(`✅ Process ${processName} restarted successfully`);
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`❌ Error restarting process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startProcess(processName) {
    this.log(`🚀 Starting process: ${processName}`);
    
    try {
      // Find the ecosystem file that contains this process
      for (const ecosystemFile of this.config.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          const result = await this.runCommand("pm2", ["start", ecosystemFile]);
          if (result.status === 0) {
            this.log(`✅ Process ${processName} started from ${ecosystemFile}`);
            return true;
          }
        }
      }
      
      this.log(`❌ Could not start process ${processName} from any ecosystem file`, "ERROR");
      return false;
    } catch (error) {
      this.log(`❌ Error starting process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkAllProcesses() {
    this.log("🔍 Checking all PM2 processes...");
    
    const results = {};
    let allHealthy = true;
    let processesNeedingAction = [];

    for (const processName of this.config.processes) {
      const health = await this.checkProcessHealth(processName);
      results[processName] = health;
      
      if (!health.healthy) {
        allHealthy = false;
        processesNeedingAction.push({ name: processName, ...health });
      }
    }

    if (processesNeedingAction.length > 0) {
      this.log(`⚠️ Found ${processesNeedingAction.length} processes needing attention`);
      
      for (const process of processesNeedingAction) {
        this.log(`Process ${process.name}: ${process.status}`);
        
        if (this.config.autoRecovery) {
          if (process.needsRestart) {
            await this.restartProcess(process.name);
          } else if (process.needsStart) {
            await this.startProcess(process.name);
          }
        }
      }
    } else {
      this.log("✅ All PM2 processes are healthy");
    }

    return { allHealthy, results, processesNeedingAction };
  }

  async performFullRecovery() {
    this.log("🔄 Performing full PM2 recovery...");
    
    try {
      // Kill all processes
      await this.runCommand("pm2", ["kill"]);
      this.log("Killed all PM2 processes");
      
      // Wait a moment
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Start fresh from ecosystem files
      for (const ecosystemFile of this.config.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          this.log(`Starting processes from ${ecosystemFile}`);
          const result = await this.runCommand("pm2", ["start", ecosystemFile]);
          if (result.status === 0) {
            this.log(`✅ Started processes from ${ecosystemFile}`);
          } else {
            this.log(`❌ Failed to start processes from ${ecosystemFile}: ${result.stderr}`);
          }
        }
      }
      
      // Wait for processes to stabilize
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Check health again
      const healthCheck = await this.checkAllProcesses();
      this.log(`Recovery completed. All healthy: ${healthCheck.allHealthy}`);
      
      return healthCheck.allHealthy;
    } catch (error) {
      this.log(`❌ Full recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("Monitoring already active");
      return;
    }

    this.log("🚀 Starting enhanced PM2 redundancy monitoring...");
    this.monitoring = true;

    // Initial health check
    await this.checkAllProcesses();

    // Start periodic monitoring
    this.checkInterval = setInterval(async () => {
      try {
        const pm2Running = await this.checkPM2Status();
        if (!pm2Running) {
          this.log("⚠️ PM2 not running, attempting to start...", "WARN");
          await this.startPM2();
        } else {
          await this.checkAllProcesses();
        }
      } catch (error) {
        this.log(`❌ Monitoring error: ${error.message}`, "ERROR");
      }
    }, this.config.healthCheckInterval);

    this.log("✅ Enhanced PM2 redundancy monitoring started");
  }

  stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    this.monitoring = false;
    this.log("🛑 Enhanced PM2 redundancy monitoring stopped");
  }

  async getStatus() {
    const pm2Running = await this.checkPM2Status();
    const processHealth = await this.checkAllProcesses();
    
    return {
      pm2Running,
      processHealth,
      monitoring: this.monitoring,
      timestamp: new Date().toISOString()
    };
  }
}

// Handle process signals
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down...');
  if (global.pm2Redundancy) {
    global.pm2Redundancy.stopMonitoring();
  }
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down...');
  if (global.pm2Redundancy) {
    global.pm2Redundancy.stopMonitoring();
  }
  process.exit(0);
});

// Start the system
const pm2Redundancy = new EnhancedPM2Redundancy();
global.pm2Redundancy = pm2Redundancy;

// Export for potential external use
module.exports = EnhancedPM2Redundancy;