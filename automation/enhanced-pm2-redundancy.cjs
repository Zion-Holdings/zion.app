#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class EnhancedPM2Redundancy {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "enhanced-pm2-redundancy.log");
    this.ensureLogDir();
    this.config = this.loadConfig();
    this.monitoring = false;
    this.checkInterval = null;
    this.recoveryAttempts = new Map();
    this.maxRecoveryAttempts = 5;
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
      maxFailures: 3,
      retryDelay: 10000,
      processes: [
        "zion-auto-sync",
        "zion-auto-sync-cron",
        "redundancy-automation-system",
        "redundancy-health-monitor",
        "redundancy-git-sync",
        "redundancy-build-monitor"
      ],
      ecosystemFiles: [
        "ecosystem.pm2.cjs",
        "ecosystem.redundancy.cjs"
      ],
      autoRecovery: true,
      healthChecks: true,
      metrics: true
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
      this.log(`❌ PM2 status check failed: ${error.message}`);
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
      this.log(`❌ Failed to get PM2 processes: ${error.message}`);
      return [];
    }
  }

  async checkProcessHealth(processName) {
    try {
      const result = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
      if (result.status === 0) {
        // Check if process is actually running
        const processes = await this.getPM2Processes();
        const targetProcess = processes.find(p => p.name === processName);
        
        if (targetProcess) {
          return {
            healthy: targetProcess.pm2_env.status === "online",
            status: targetProcess.pm2_env.status,
            uptime: targetProcess.pm2_env.pm_uptime,
            restarts: targetProcess.pm2_env.restart_time,
            memory: targetProcess.monit.memory,
            cpu: targetProcess.monit.cpu
          };
        }
      }
      
      return {
        healthy: false,
        status: "not_found",
        uptime: 0,
        restarts: 0,
        memory: 0,
        cpu: 0
      };
    } catch (error) {
      this.log(`❌ Failed to check process health for ${processName}: ${error.message}`);
      return {
        healthy: false,
        status: "error",
        error: error.message
      };
    }
  }

  async restartProcess(processName) {
    try {
      this.log(`🔄 Restarting PM2 process: ${processName}`);
      
      const result = await this.runCommand("pm2", ["restart", processName]);
      if (result.status === 0) {
        this.log(`✅ Successfully restarted ${processName}`);
        return true;
      } else {
        this.log(`⚠️ Failed to restart ${processName}: ${result.stderr}`);
        return false;
      }
    } catch (error) {
      this.log(`❌ Error restarting ${processName}: ${error.message}`);
      return false;
    }
  }

  async startProcess(processName) {
    try {
      this.log(`🚀 Starting PM2 process: ${processName}`);
      
      // Try to start from ecosystem files first
      for (const ecosystemFile of this.config.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          const result = await this.runCommand("pm2", ["start", ecosystemFile]);
          if (result.status === 0) {
            this.log(`✅ Successfully started processes from ${ecosystemFile}`);
            return true;
          }
        }
      }
      
      // If ecosystem files don't work, try to start individual process
      const result = await this.runCommand("pm2", ["start", processName]);
      if (result.status === 0) {
        this.log(`✅ Successfully started ${processName}`);
        return true;
      } else {
        this.log(`⚠️ Failed to start ${processName}: ${result.stderr}`);
        return false;
      }
    } catch (error) {
      this.log(`❌ Error starting ${processName}: ${error.message}`);
      return false;
    }
  }

  async recoverProcess(processName) {
    const attempts = this.recoveryAttempts.get(processName) || 0;
    
    if (attempts >= this.maxRecoveryAttempts) {
      this.log(`🚨 Maximum recovery attempts reached for ${processName}, skipping recovery`);
      return false;
    }
    
    this.recoveryAttempts.set(processName, attempts + 1);
    this.log(`🔄 Recovery attempt ${attempts + 1}/${this.maxRecoveryAttempts} for ${processName}`);
    
    try {
      // First try to restart
      let success = await this.restartProcess(processName);
      
      if (!success) {
        // If restart fails, try to start fresh
        success = await this.startProcess(processName);
      }
      
      if (success) {
        // Reset recovery attempts on success
        this.recoveryAttempts.set(processName, 0);
        this.log(`✅ Successfully recovered ${processName}`);
        return true;
      } else {
        this.log(`⚠️ Recovery attempt ${attempts + 1} failed for ${processName}`);
        return false;
      }
    } catch (error) {
      this.log(`❌ Error during recovery of ${processName}: ${error.message}`);
      return false;
    }
  }

  async checkAllProcesses() {
    this.log("🔍 Checking all PM2 processes...");
    
    const processes = this.config.processes;
    const results = {
      timestamp: new Date().toISOString(),
      total: processes.length,
      healthy: 0,
      unhealthy: 0,
      recovered: 0,
      failed: 0,
      details: {}
    };
    
    for (const processName of processes) {
      const health = await this.checkProcessHealth(processName);
      results.details[processName] = health;
      
      if (health.healthy) {
        results.healthy++;
        this.log(`✅ ${processName}: ${health.status} (uptime: ${Math.floor(health.uptime / 1000)}s)`);
      } else {
        results.unhealthy++;
        this.log(`❌ ${processName}: ${health.status}`);
        
        if (this.config.autoRecovery) {
          const recovered = await this.recoverProcess(processName);
          if (recovered) {
            results.recovered++;
          } else {
            results.failed++;
          }
        }
      }
    }
    
    this.log(`📊 PM2 Health Summary: ${results.healthy}/${results.total} healthy, ${results.recovered} recovered, ${results.failed} failed`);
    
    // Save results
    this.saveHealthResults(results);
    
    return results;
  }

  async saveHealthResults(results) {
    try {
      const healthFile = path.join(this.logDir, `pm2-health-${new Date().toISOString().split('T')[0]}.json`);
      const existingData = fs.existsSync(healthFile) ? JSON.parse(fs.readFileSync(healthFile, "utf8")) : [];
      existingData.push(results);
      
      // Keep only last 100 results
      if (existingData.length > 100) {
        existingData.splice(0, existingData.length - 100);
      }
      
      fs.writeFileSync(healthFile, JSON.stringify(existingData, null, 2));
    } catch (error) {
      this.log(`⚠️ Failed to save health results: ${error.message}`);
    }
  }

  async emergencyRecovery() {
    this.log("🚨 Starting emergency PM2 recovery...");
    
    try {
      // Kill all PM2 processes
      await this.runCommand("pm2", ["kill"]);
      this.log("🔄 Killed all PM2 processes");
      
      // Wait for cleanup
      await new Promise(resolve => setTimeout(resolve, 5000));
      
      // Restart from ecosystem files
      for (const ecosystemFile of this.config.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          this.log(`🔄 Starting processes from ${ecosystemFile}`);
          await this.runCommand("pm2", ["start", ecosystemFile]);
        }
      }
      
      // Wait for processes to start
      await new Promise(resolve => setTimeout(resolve, 10000));
      
      // Check health
      const health = await this.checkAllProcesses();
      
      this.log(`✅ Emergency recovery completed. Health: ${health.healthy}/${health.total} healthy`);
      
      return health;
    } catch (error) {
      this.log(`❌ Emergency recovery failed: ${error.message}`);
      return null;
    }
  }

  async generateMetrics() {
    try {
      const processes = await this.getPM2Processes();
      const metrics = {
        timestamp: new Date().toISOString(),
        totalProcesses: processes.length,
        onlineProcesses: processes.filter(p => p.pm2_env.status === "online").length,
        stoppedProcesses: processes.filter(p => p.pm2_env.status === "stopped").length,
        erroredProcesses: processes.filter(p => p.pm2_env.status === "errored").length,
        totalMemory: processes.reduce((sum, p) => sum + (p.monit?.memory || 0), 0),
        totalCPU: processes.reduce((sum, p) => sum + (p.monit?.cpu || 0), 0),
        processDetails: processes.map(p => ({
          name: p.name,
          status: p.pm2_env.status,
          memory: p.monit?.memory || 0,
          cpu: p.monit?.cpu || 0,
          uptime: p.pm2_env.pm_uptime,
          restarts: p.pm2_env.restart_time
        }))
      };
      
      // Save metrics
      const metricsFile = path.join(this.logDir, `pm2-metrics-${new Date().toISOString().split('T')[0]}.json`);
      const existingMetrics = fs.existsSync(metricsFile) ? JSON.parse(fs.readFileSync(metricsFile, "utf8")) : [];
      existingMetrics.push(metrics);
      
      if (existingMetrics.length > 100) {
        existingMetrics.splice(0, existingMetrics.length - 100);
      }
      
      fs.writeFileSync(metricsFile, JSON.stringify(existingMetrics, null, 2));
      
      this.log(`📊 Metrics saved: ${metrics.onlineProcesses}/${metrics.totalProcesses} processes online`);
      
      return metrics;
    } catch (error) {
      this.log(`❌ Failed to generate metrics: ${error.message}`);
      return null;
    }
  }

  startMonitoring() {
    if (this.monitoring) {
      this.log("⚠️ Monitoring already started");
      return;
    }
    
    this.log("🚀 Starting PM2 redundancy monitoring...");
    this.monitoring = true;
    
    this.checkInterval = setInterval(async () => {
      await this.checkAllProcesses();
      
      if (this.config.metrics) {
        await this.generateMetrics();
      }
    }, this.config.checkInterval);
    
    // Initial check
    setTimeout(async () => {
      await this.checkAllProcesses();
    }, 5000);
  }

  stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    this.monitoring = false;
    this.log("🛑 PM2 redundancy monitoring stopped");
  }

  async cleanup() {
    this.log("🧹 Cleaning up PM2 redundancy monitor...");
    this.stopMonitoring();
    this.recoveryAttempts.clear();
  }
}

// Handle command line arguments
if (require.main === module) {
  const monitor = new EnhancedPM2Redundancy();
  
  const args = process.argv.slice(2);
  
  if (args.includes('--check')) {
    monitor.checkAllProcesses().then(() => {
      process.exit(0);
    });
  } else if (args.includes('--emergency-recovery')) {
    monitor.emergencyRecovery().then(() => {
      process.exit(0);
    });
  } else if (args.includes('--metrics')) {
    monitor.generateMetrics().then(() => {
      process.exit(0);
    });
  } else if (args.includes('--start')) {
    monitor.startMonitoring();
  } else if (args.includes('--stop')) {
    monitor.stopMonitoring();
    process.exit(0);
  } else {
    // Default: start monitoring
    monitor.startMonitoring();
    
    // Handle shutdown signals
    process.on('SIGTERM', async () => {
      await monitor.cleanup();
      process.exit(0);
    });
    
    process.on('SIGINT', async () => {
      await monitor.cleanup();
      process.exit(0);
    });
  }
}

module.exports = EnhancedPM2Redundancy;