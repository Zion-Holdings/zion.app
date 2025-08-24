#!/usr/bin/env node
"use strict";

const { spawnSync, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class ComprehensivePM2Redundancy {
  constructor() {
    this.config = {
      ecosystems: [
        "ecosystem.pm2.cjs",
        "ecosystem.redundancy.cjs",
        "ecosystem-redundancy.pm2.cjs"
      ],
      criticalProcesses: [
        "zion-auto-sync",
        "zion-auto-sync-cron",
        "redundancy-automation-system",
        "redundancy-health-monitor"
      ],
      backupProcesses: [
        "zion-auto-sync-backup",
        "zion-auto-sync-cron-backup",
        "redundancy-master-orchestrator",
        "redundancy-pm2-manager"
      ],
      healthCheckInterval: 25000,
      restartDelay: 2000,
      maxRestartAttempts: 15,
      logDir: "automation/logs"
    };
    
    this.stats = {
      totalRestarts: 0,
      processRestarts: {},
      lastHealthCheck: null,
      systemHealth: "healthy"
    };
    
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.config.logDir)) {
      fs.mkdirSync(this.config.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    const logFile = path.join(this.config.logDir, `pm2-redundancy-${new Date().toISOString().split('T')[0]}.log`);
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
        timeout: 25000,
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
      return [];
    }
  }

  async startEcosystem(ecosystemFile) {
    this.log(`🚀 Starting PM2 ecosystem: ${ecosystemFile}`);
    
    try {
      if (!fs.existsSync(ecosystemFile)) {
        this.log(`⚠️ Ecosystem file not found: ${ecosystemFile}`, "WARN");
        return false;
      }

      const result = await this.runCommand("pm2", ["start", ecosystemFile, "--update-env"]);
      
      if (result.status === 0) {
        this.log(`✅ Successfully started ecosystem: ${ecosystemFile}`);
        return true;
      } else {
        this.log(`❌ Failed to start ecosystem ${ecosystemFile}: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Error starting ecosystem ${ecosystemFile}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restartProcess(processName) {
    this.log(`🔄 Restarting PM2 process: ${processName}`);
    
    try {
      const result = await this.runCommand("pm2", ["restart", processName]);
      
      if (result.status === 0) {
        this.log(`✅ Successfully restarted process: ${processName}`);
        this.stats.totalRestarts++;
        this.stats.processRestarts[processName] = (this.stats.processRestarts[processName] || 0) + 1;
        return true;
      } else {
        this.log(`❌ Failed to restart process ${processName}: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Error restarting process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startProcess(processName) {
    this.log(`🚀 Starting PM2 process: ${processName}`);
    
    try {
      const result = await this.runCommand("pm2", ["start", processName]);
      
      if (result.status === 0) {
        this.log(`✅ Successfully started process: ${processName}`);
        return true;
      } else {
        this.log(`❌ Failed to start process ${processName}: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Error starting process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkProcessHealth(processName) {
    try {
      const result = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
      
      if (result.status !== 0) {
        return { healthy: false, status: "not_found" };
      }

      // Check if process is actually running
      const processes = await this.getPM2Processes();
      const process = processes.find(p => p.name === processName);
      
      if (!process) {
        return { healthy: false, status: "not_running" };
      }

      if (process.pm2_env && process.pm2_env.status === "online") {
        return { healthy: true, status: "online" };
      } else {
        return { healthy: false, status: process.pm2_env?.status || "unknown" };
      }
    } catch (error) {
      return { healthy: false, status: "error", error: error.message };
    }
  }

  async performHealthCheck() {
    this.log("🔍 Performing comprehensive PM2 health check...");
    
    const pm2Running = await this.checkPM2Status();
    if (!pm2Running) {
      this.log("⚠️ PM2 is not running, attempting to start it", "WARN");
      await this.runCommand("pm2", ["start"]);
      return false;
    }

    let allHealthy = true;
    const failedProcesses = [];
    const criticalProcesses = [...this.config.criticalProcesses, ...this.config.backupProcesses];

    for (const processName of criticalProcesses) {
      const health = await this.checkProcessHealth(processName);
      
      if (!health.healthy) {
        this.log(`⚠️ Process ${processName} is not healthy (status: ${health.status})`, "WARN");
        failedProcesses.push({ name: processName, status: health.status });
        allHealthy = false;
      } else {
        this.log(`✅ Process ${processName} is healthy`);
      }
    }

    if (failedProcesses.length > 0) {
      this.log(`🔄 Found ${failedProcesses.length} failed processes, attempting recovery...`, "WARN");
      await this.performRecovery(failedProcesses);
    }

    this.stats.lastHealthCheck = new Date().toISOString();
    this.updateSystemHealth();
    
    return allHealthy;
  }

  async performRecovery(failedProcesses) {
    this.log("🚨 Performing PM2 recovery actions...");
    
    for (const process of failedProcesses) {
      this.log(`🔄 Attempting to recover process: ${process.name}`);
      
      // Try to restart the process
      let recovered = await this.restartProcess(process.name);
      
      if (!recovered) {
        // If restart fails, try to start it fresh
        this.log(`⚠️ Restart failed for ${process.name}, trying fresh start`, "WARN");
        recovered = await this.startProcess(process.name);
      }
      
      if (recovered) {
        this.log(`✅ Successfully recovered process: ${process.name}`);
      } else {
        this.log(`❌ Failed to recover process: ${process.name}`, "ERROR");
      }
      
      // Add delay between process recoveries
      await new Promise(resolve => setTimeout(resolve, this.config.restartDelay));
    }
  }

  async startAllEcosystems() {
    this.log("🚀 Starting all PM2 ecosystems...");
    
    let successCount = 0;
    
    for (const ecosystem of this.config.ecosystems) {
      const success = await this.startEcosystem(ecosystem);
      if (success) successCount++;
      
      // Add delay between ecosystem starts
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    this.log(`✅ Started ${successCount}/${this.config.ecosystems.length} ecosystems`);
    
    // Save PM2 configuration
    await this.runCommand("pm2", ["save"]);
    
    return successCount === this.config.ecosystems.length;
  }

  async stopAllProcesses() {
    this.log("🛑 Stopping all PM2 processes...");
    
    try {
      await this.runCommand("pm2", ["stop", "all"]);
      await this.runCommand("pm2", ["kill"]);
      this.log("✅ All PM2 processes stopped");
      return true;
    } catch (error) {
      this.log(`❌ Error stopping PM2 processes: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restartAllProcesses() {
    this.log("🔄 Restarting all PM2 processes...");
    
    try {
      await this.stopAllProcesses();
      await new Promise(resolve => setTimeout(resolve, 2000));
      await this.startAllEcosystems();
      this.log("✅ All PM2 processes restarted");
      return true;
    } catch (error) {
      this.log(`❌ Error restarting PM2 processes: ${error.message}`, "ERROR");
      return false;
    }
  }

  updateSystemHealth() {
    const totalFailures = Object.values(this.stats.processRestarts).reduce((sum, count) => sum + count, 0);
    
    if (totalFailures === 0) {
      this.stats.systemHealth = "healthy";
    } else if (totalFailures <= 5) {
      this.stats.systemHealth = "warning";
    } else {
      this.stats.systemHealth = "critical";
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      systemHealth: this.stats.systemHealth,
      stats: this.stats,
      config: {
        ecosystems: this.config.ecosystems.length,
        criticalProcesses: this.config.criticalProcesses.length,
        backupProcesses: this.config.backupProcesses.length
      }
    };

    const reportFile = path.join(this.config.logDir, `pm2-redundancy-report-${new Date().toISOString().split('T')[0]}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    return report;
  }

  async startMonitoring() {
    this.log("🚀 Starting comprehensive PM2 redundancy monitoring...");
    
    // Initial health check
    await this.performHealthCheck();
    
    // Start monitoring loop
    setInterval(async () => {
      await this.performHealthCheck();
      await this.generateReport();
    }, this.config.healthCheckInterval);
    
    this.log("✅ PM2 redundancy monitoring started");
  }

  async getStatus() {
    const processes = await this.getPM2Processes();
    const status = {
      pm2Running: await this.checkPM2Status(),
      totalProcesses: processes.length,
      processDetails: processes.map(p => ({
        name: p.name,
        status: p.pm2_env?.status || "unknown",
        pm_id: p.pm_id
      })),
      stats: this.stats
    };
    
    return status;
  }
}

// CLI interface
if (require.main === module) {
  const manager = new ComprehensivePM2Redundancy();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      manager.startMonitoring();
      break;
    case 'health':
      manager.performHealthCheck().then(healthy => {
        console.log(`System health: ${healthy ? '✅ Healthy' : '❌ Unhealthy'}`);
        process.exit(healthy ? 0 : 1);
      });
      break;
    case 'recovery':
      manager.performRecovery([]).then(() => {
        console.log('Recovery completed');
        process.exit(0);
      });
      break;
    case 'restart':
      manager.restartAllProcesses().then(() => {
        console.log('All processes restarted');
        process.exit(0);
      });
      break;
    case 'status':
      manager.getStatus().then(status => {
        console.log(JSON.stringify(status, null, 2));
        process.exit(0);
      });
      break;
    case 'ecosystems':
      manager.startAllEcosystems().then(() => {
        console.log('All ecosystems started');
        process.exit(0);
      });
      break;
    default:
      console.log('Usage: node comprehensive-pm2-redundancy.cjs [start|health|recovery|restart|status|ecosystems]');
      process.exit(1);
  }
}

module.exports = ComprehensivePM2Redundancy;