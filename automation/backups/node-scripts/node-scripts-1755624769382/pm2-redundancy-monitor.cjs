#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class PM2RedundancyMonitor {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "pm2-redundancy.log");
    this.ensureLogDir();
    this.config = this.loadConfig();
    this.monitoring = false;
    this.checkInterval = null;
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
        return config.pm2 || {};
      } catch (error) {
        this.log(`Error loading PM2 config: ${error.message}`);
      }
    }
    
    return {
      enabled: true,
      checkInterval: 30000,
      maxRestarts: 5,
      healthCheckTimeout: 10000,
      processes: ["zion-auto-sync", "zion-auto-sync-cron"],
      autoRestart: true,
      restartDelay: 5000
    };
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
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
        timeout: options.timeout || this.config.healthCheckTimeout || 10000,
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
      const result = await this.runCommand("pm2", ["status"]);
      return result.status === 0;
    } catch (error) {
      this.log(`Error checking PM2 status: ${error.message}`);
      return false;
    }
  }

  async getPM2Processes() {
    try {
      const result = await this.runCommand("pm2", ["jlist"]);
      if (result.status === 0) {
        return JSON.parse(result.stdout);
      }
      return [];
    } catch (error) {
      this.log(`Error getting PM2 processes: ${error.message}`);
      return [];
    }
  }

  async checkProcessHealth(process) {
    const health = {
      name: process.name,
      status: process.status,
      healthy: false,
      issues: [],
      restartCount: process.restart_time || 0
    };

    // Check if process is online
    if (process.status !== "online") {
      health.issues.push(`Process status: ${process.status}`);
      health.healthy = false;
    } else {
      health.healthy = true;
    }

    // Check restart count
    if (health.restartCount > this.config.maxRestarts) {
      health.issues.push(`Excessive restarts: ${health.restartCount}`);
      health.healthy = false;
    }

    // Check memory usage
    if (process.monit && process.monit.memory > 500 * 1024 * 1024) { // 500MB
      health.issues.push(`High memory usage: ${Math.round(process.monit.memory / 1024 / 1024)}MB`);
    }

    // Check CPU usage
    if (process.monit && process.monit.cpu > 80) {
      health.issues.push(`High CPU usage: ${process.monit.cpu}%`);
    }

    return health;
  }

  async restartProcess(processName) {
    try {
      this.log(`🔄 Restarting PM2 process: ${processName}`);
      
      // Stop the process first
      await this.runCommand("pm2", ["stop", processName]);
      
      // Wait a bit before restarting
      await this.sleep(this.config.restartDelay || 5000);
      
      // Restart the process
      await this.runCommand("pm2", ["restart", processName]);
      
      this.log(`✅ Successfully restarted process: ${processName}`);
      return true;
    } catch (error) {
      this.log(`❌ Failed to restart process ${processName}: ${error.message}`);
      return false;
    }
  }

  async startProcess(processName) {
    try {
      this.log(`🚀 Starting PM2 process: ${processName}`);
      
      // Check if it's a cron process
      if (processName.includes("cron")) {
        await this.runCommand("npm", ["run", "pm2:cron:start"]);
      } else {
        await this.runCommand("npm", ["run", "pm2:start"]);
      }
      
      this.log(`✅ Successfully started process: ${processName}`);
      return true;
    } catch (error) {
      this.log(`❌ Failed to start process ${processName}: ${error.message}`);
      return false;
    }
  }

  async startAllPM2Services() {
    try {
      this.log("🚀 Starting all PM2 services...");
      
      // Start main ecosystem
      await this.runCommand("npm", ["run", "pm2:start"]);
      
      // Start cron services
      await this.runCommand("npm", ["run", "pm2:cron:start"]);
      
      // Wait for processes to stabilize
      await this.sleep(10000);
      
      this.log("✅ All PM2 services started successfully");
      return true;
    } catch (error) {
      this.log(`❌ Failed to start PM2 services: ${error.message}`);
      return false;
    }
  }

  async checkEcosystemFile() {
    try {
      const ecosystemPath = path.join(this.workspace, "ecosystem.pm2.cjs");
      if (!fs.existsSync(ecosystemPath)) {
        this.log("❌ PM2 ecosystem file not found");
        return false;
      }

      // Validate ecosystem file syntax
      try {
        require(ecosystemPath);
        this.log("✅ PM2 ecosystem file is valid");
        return true;
      } catch (error) {
        this.log(`❌ PM2 ecosystem file has syntax errors: ${error.message}`);
        return false;
      }
    } catch (error) {
      this.log(`❌ Error checking ecosystem file: ${error.message}`);
      return false;
    }
  }

  async runPM2HealthCheck() {
    this.log("🔍 Running PM2 health check...");
    
    const results = {
      timestamp: new Date().toISOString(),
      pm2Running: false,
      processes: [],
      overallHealth: false,
      issues: [],
      actions: []
    };

    try {
      // Check if PM2 is running
      results.pm2Running = await this.checkPM2Status();
      if (!results.pm2Running) {
        results.issues.push("PM2 is not running");
        results.actions.push("start_pm2");
      }

      // Check ecosystem file
      const ecosystemValid = await this.checkEcosystemFile();
      if (!ecosystemValid) {
        results.issues.push("PM2 ecosystem file is invalid");
        results.actions.push("fix_ecosystem");
      }

      // Get and check processes
      const processes = await this.getPM2Processes();
      let healthyProcesses = 0;
      let totalProcesses = 0;

      for (const process of processes) {
        const health = await this.checkProcessHealth(process);
        results.processes.push(health);
        
        if (health.healthy) {
          healthyProcesses++;
        } else {
          results.issues.push(`Process ${health.name}: ${health.issues.join(", ")}`);
          
          if (this.config.autoRestart) {
            results.actions.push(`restart_${health.name}`);
          }
        }
        totalProcesses++;
      }

      // Calculate overall health
      if (totalProcesses > 0) {
        results.overallHealth = (healthyProcesses / totalProcesses) >= 0.8;
      }

      // Take actions if auto-restart is enabled
      if (this.config.autoRestart && results.actions.length > 0) {
        await this.executeActions(results.actions, results.processes);
      }

      // Generate health report
      await this.generateHealthReport(results);
      
      this.log(`✅ PM2 health check completed. Health: ${results.overallHealth ? 'Good' : 'Poor'}`);
      return results;
      
    } catch (error) {
      this.log(`❌ PM2 health check failed: ${error.message}`);
      results.issues.push(`Health check error: ${error.message}`);
      return results;
    }
  }

  async executeActions(actions, processes) {
    this.log("⚡ Executing PM2 health actions...");
    
    for (const action of actions) {
      try {
        if (action === "start_pm2") {
          await this.startAllPM2Services();
        } else if (action === "fix_ecosystem") {
          this.log("⚠️ Manual intervention required for ecosystem file");
        } else if (action.startsWith("restart_")) {
          const processName = action.replace("restart_", "");
          const process = processes.find(p => p.name === processName);
          if (process) {
            await this.restartProcess(processName);
          }
        }
      } catch (error) {
        this.log(`❌ Failed to execute action ${action}: ${error.message}`);
      }
    }
  }

  async generateHealthReport(results) {
    try {
      const reportPath = path.join(this.logDir, `pm2-health-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
      this.log(`📊 PM2 health report generated: ${path.basename(reportPath)}`);
    } catch (error) {
      this.log(`❌ Failed to generate health report: ${error.message}`);
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("⚠️ PM2 monitoring is already running");
      return;
    }

    this.log("🔄 Starting PM2 redundancy monitoring...");
    this.monitoring = true;
    
    this.checkInterval = setInterval(async () => {
      try {
        await this.runPM2HealthCheck();
      } catch (error) {
        this.log(`❌ Monitoring check failed: ${error.message}`);
      }
    }, this.config.checkInterval);

    this.log(`✅ PM2 monitoring started with ${this.config.checkInterval}ms interval`);
  }

  async stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    this.monitoring = false;
    this.log("🛑 PM2 monitoring stopped");
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async cleanup() {
    await this.stopMonitoring();
    this.log("🧹 PM2 redundancy monitor cleanup completed");
  }
}

// CLI Interface
async function main() {
  const monitor = new PM2RedundancyMonitor();
  
  const command = process.argv[2] || "check";
  
  try {
    switch (command) {
      case "check":
        await monitor.runPM2HealthCheck();
        break;
      case "monitor":
        await monitor.startMonitoring();
        // Keep the process running
        process.on("SIGINT", async () => {
          monitor.log("🛑 Stopping PM2 monitoring...");
          await monitor.cleanup();
          process.exit(0);
        });
        break;
      case "start":
        await monitor.startAllPM2Services();
        break;
      case "restart":
        const processName = process.argv[3];
        if (processName) {
          await monitor.restartProcess(processName);
        } else {
          console.log("Usage: node pm2-redundancy-monitor.cjs restart <process-name>");
        }
        break;
      case "status":
        const processes = await monitor.getPM2Processes();
        console.log("PM2 Process Status:");
        processes.forEach(process => {
          console.log(`  ${process.name}: ${process.status} (restarts: ${process.restart_time || 0})`);
        });
        break;
      default:
        console.log(`
PM2 Redundancy Monitor

Usage: node pm2-redundancy-monitor.cjs [command]

Commands:
  check     Run PM2 health check (default)
  monitor   Start continuous monitoring
  start     Start all PM2 services
  restart   Restart specific process
  status    Show PM2 process status

Examples:
  node pm2-redundancy-monitor.cjs check
  node pm2-redundancy-monitor.cjs monitor
  node pm2-redundancy-monitor.cjs restart zion-auto-sync
  node pm2-redundancy-monitor.cjs status
        `);
    }
  } catch (error) {
    monitor.log(`❌ Command '${command}' failed: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = PM2RedundancyMonitor;