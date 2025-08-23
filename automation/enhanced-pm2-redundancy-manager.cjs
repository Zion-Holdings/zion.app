#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class EnhancedPM2RedundancyManager {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "enhanced-pm2-redundancy.log");
    this.ensureLogDir();
    this.config = this.loadConfig();
    this.monitoring = false;
    this.checkInterval = null;
    this.processStatus = new Map();
    this.recoveryAttempts = new Map();
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
        return config.enhanced?.pm2Manager || {};
      } catch (error) {
        this.log(`Error loading enhanced PM2 config: ${error.message}`);
      }
    }
    
    return {
      enabled: true,
      checkInterval: 30000,
      maxRestarts: 10,
      healthCheckTimeout: 15000,
      autoRestart: true,
      restartDelay: 5000,
      maxRecoveryAttempts: 3,
      recoveryCooldown: 60000,
      processes: {
        "zion-auto-sync": { priority: 'high', maxRestarts: 15, restartDelay: 3000 },
        "zion-auto-sync-cron": { priority: 'medium', maxRestarts: 8, restartDelay: 5000 },
        "redundancy-automation-system": { priority: 'high', maxRestarts: 5, restartDelay: 2000 },
        "redundancy-health-monitor": { priority: 'high', maxRestarts: 5, restartDelay: 10000 },
        "redundancy-git-sync": { priority: 'medium', maxRestarts: 8, restartDelay: 15000 },
        "redundancy-build-monitor": { priority: 'medium', maxRestarts: 3, restartDelay: 15000 }
      },
      ecosystems: [
        "ecosystem.pm2.cjs",
        "ecosystem.redundancy.cjs",
        "ecosystem-redundancy.pm2.cjs"
      ]
    };
  }

  log(message, level = 'INFO') {
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
        maxBuffer: 1024 * 1024 * 10,
        timeout: options.timeout || this.config.healthCheckTimeout || 15000,
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

  async checkPM2Daemon() {
    try {
      const result = await this.runCommand("pm2", ["ping"]);
      return result.status === 0;
    } catch (error) {
      this.log(`❌ PM2 daemon check failed: ${error.message}`, "ERROR");
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
      this.log(`❌ Failed to get PM2 processes: ${error.message}`, "ERROR");
      return [];
    }
  }

  async checkProcessHealth(process) {
    const processName = process.name;
    const config = this.config.processes[processName] || this.config.processes.default || {};
    
    try {
      // Check if process is online
      if (process.pm2_env.status !== 'online') {
        this.log(`⚠️ Process ${processName} is not online (status: ${process.pm2_env.status})`, "WARN");
        return { status: 'failed', error: `Status: ${process.pm2_env.status}` };
      }

      // Check restart count
      const restartCount = process.pm2_env.restart_time || 0;
      if (restartCount > (config.maxRestarts || this.config.maxRestarts)) {
        this.log(`❌ Process ${processName} exceeded max restarts (${restartCount})`, "ERROR");
        return { status: 'failed', error: `Too many restarts: ${restartCount}` };
      }

      // Check uptime
      const uptime = process.pm2_env.pm_uptime || 0;
      if (uptime < 10000) { // Less than 10 seconds
        this.log(`⚠️ Process ${processName} recently started (uptime: ${uptime}ms)`, "WARN");
        return { status: 'warning', uptime };
      }

      this.log(`✅ Process ${processName} is healthy (uptime: ${uptime}ms, restarts: ${restartCount})`);
      return { status: 'healthy', uptime, restarts: restartCount };
    } catch (error) {
      this.log(`❌ Health check failed for ${processName}: ${error.message}`, "ERROR");
      return { status: 'failed', error: error.message };
    }
  }

  async performHealthCheck() {
    this.log("🔍 Starting PM2 health check...");
    
    const startTime = Date.now();
    
    // Check PM2 daemon
    const daemonHealthy = await this.checkPM2Daemon();
    if (!daemonHealthy) {
      this.log("❌ PM2 daemon is not responding", "ERROR");
      return { status: 'failed', error: 'PM2 daemon down' };
    }

    // Get all processes
    const processes = await this.getPM2Processes();
    if (processes.length === 0) {
      this.log("❌ No PM2 processes found", "ERROR");
      return { status: 'failed', error: 'No processes' };
    }

    // Check each process
    const results = {};
    let healthyCount = 0;
    let failedCount = 0;
    let warningCount = 0;

    for (const process of processes) {
      const processName = process.name;
      const health = await this.checkProcessHealth(process);
      
      results[processName] = health;
      this.processStatus.set(processName, health);
      
      switch (health.status) {
        case 'healthy':
          healthyCount++;
          break;
        case 'failed':
          failedCount++;
          break;
        case 'warning':
          warningCount++;
          break;
      }
    }

    const duration = Date.now() - startTime;
    this.log(`🏁 PM2 health check completed in ${duration}ms`);
    
    // Log summary
    this.log(`📊 PM2 Health Summary:`);
    this.log(`   Total Processes: ${processes.length}`);
    this.log(`   Healthy: ${healthyCount} ✅`);
    this.log(`   Warnings: ${warningCount} ⚠️`);
    this.log(`   Failed: ${failedCount} ❌`);
    
    const overallStatus = failedCount === 0 ? 'healthy' : failedCount > processes.length / 2 ? 'critical' : 'degraded';
    
    return {
      status: overallStatus,
      daemon: daemonHealthy,
      processes: results,
      summary: {
        total: processes.length,
        healthy: healthyCount,
        warnings: warningCount,
        failed: failedCount
      },
      duration
    };
  }

  async autoRecovery() {
    if (!this.config.autoRestart) {
      this.log("🔄 Auto-recovery is disabled", "WARN");
      return;
    }

    this.log("🔄 Starting PM2 auto-recovery...");
    
    for (const [processName, status] of this.processStatus) {
      if (status.status === 'failed') {
        await this.recoverProcess(processName);
      }
    }
  }

  async recoverProcess(processName) {
    const config = this.config.processes[processName] || {};
    const maxAttempts = config.maxRecoveryAttempts || this.config.maxRecoveryAttempts;
    const cooldown = this.config.recoveryCooldown;
    
    // Check recovery attempts
    const attempts = this.recoveryAttempts.get(processName) || 0;
    if (attempts >= maxAttempts) {
      this.log(`⚠️ Process ${processName} exceeded max recovery attempts (${attempts}/${maxAttempts})`, "WARN");
      return;
    }

    // Check cooldown
    const lastAttempt = this.recoveryAttempts.get(`${processName}_last`) || 0;
    const timeSinceLastAttempt = Date.now() - lastAttempt;
    if (timeSinceLastAttempt < cooldown) {
      this.log(`⏳ Process ${processName} in cooldown (${Math.ceil((cooldown - timeSinceLastAttempt) / 1000)}s remaining)`, "INFO");
      return;
    }

    try {
      this.log(`🔄 Attempting to recover process ${processName} (attempt ${attempts + 1}/${maxAttempts})...`);
      
      // Restart the process
      const result = await this.runCommand("pm2", ["restart", processName]);
      
      if (result.status === 0) {
        this.log(`✅ Successfully restarted process ${processName}`);
        this.recoveryAttempts.set(processName, 0); // Reset attempts on success
      } else {
        this.log(`❌ Failed to restart process ${processName}: ${result.stderr}`, "ERROR");
        this.recoveryAttempts.set(processName, attempts + 1);
      }
      
      this.recoveryAttempts.set(`${processName}_last`, Date.now());
      
      // Wait before next recovery attempt
      const delay = config.restartDelay || this.config.restartDelay;
      if (delay > 0) {
        this.log(`⏳ Waiting ${delay}ms before next recovery attempt...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
      
    } catch (error) {
      this.log(`❌ Recovery failed for process ${processName}: ${error.message}`, "ERROR");
      this.recoveryAttempts.set(processName, attempts + 1);
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("⚠️ PM2 monitoring is already running", "WARN");
      return;
    }
    
    this.log("🚀 Starting enhanced PM2 redundancy monitoring...");
    this.monitoring = true;
    
    // Initial health check
    await this.performHealthCheck();
    
    // Start monitoring loop
    this.checkInterval = setInterval(async () => {
      try {
        await this.performHealthCheck();
        await this.autoRecovery();
      } catch (error) {
        this.log(`❌ Monitoring loop error: ${error.message}`, "ERROR");
      }
    }, this.config.checkInterval);
    
    this.log(`✅ Enhanced PM2 redundancy monitoring started (interval: ${this.config.checkInterval}ms)`);
  }

  async stopMonitoring() {
    if (!this.monitoring) {
      this.log("⚠️ PM2 monitoring is not running", "WARN");
      return;
    }
    
    this.log("🛑 Stopping enhanced PM2 redundancy monitoring...");
    
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    
    this.monitoring = false;
    this.log("✅ Enhanced PM2 redundancy monitoring stopped");
  }

  async restartAllProcesses() {
    this.log("🔄 Restarting all PM2 processes...");
    
    try {
      await this.runCommand("pm2", ["restart", "all"]);
      this.log("✅ All PM2 processes restarted");
      
      // Wait for processes to stabilize
      await new Promise(resolve => setTimeout(resolve, 10000));
      
      // Perform health check
      await this.performHealthCheck();
      
    } catch (error) {
      this.log(`❌ Failed to restart all processes: ${error.message}`, "ERROR");
    }
  }

  async reloadEcosystem(ecosystemFile) {
    this.log(`🔄 Reloading ecosystem: ${ecosystemFile}...`);
    
    try {
      // Stop all processes
      await this.runCommand("pm2", ["stop", "all"]);
      await this.runCommand("pm2", ["delete", "all"]);
      
      // Start new ecosystem
      await this.runCommand("pm2", ["start", ecosystemFile]);
      await this.runCommand("pm2", ["save"]);
      
      this.log(`✅ Ecosystem ${ecosystemFile} reloaded successfully`);
      
      // Wait for processes to start
      await new Promise(resolve => setTimeout(resolve, 15000));
      
      // Perform health check
      await this.performHealthCheck();
      
    } catch (error) {
      this.log(`❌ Failed to reload ecosystem ${ecosystemFile}: ${error.message}`, "ERROR");
    }
  }

  getStatus() {
    return {
      monitoring: this.monitoring,
      config: this.config,
      processStatus: Object.fromEntries(this.processStatus),
      recoveryAttempts: Object.fromEntries(this.recoveryAttempts),
      uptime: this.monitoring ? Date.now() - (this.processStatus.size > 0 ? Date.now() : Date.now()) : 0
    };
  }

  async run() {
    const command = process.argv[2];
    const arg = process.argv[3];
    
    switch (command) {
      case 'start':
        await this.startMonitoring();
        break;
      case 'stop':
        await this.stopMonitoring();
        break;
      case 'status':
        console.log(JSON.stringify(this.getStatus(), null, 2));
        break;
      case 'health':
        const health = await this.performHealthCheck();
        console.log(JSON.stringify(health, null, 2));
        break;
      case 'recover':
        await this.autoRecovery();
        break;
      case 'restart-all':
        await this.restartAllProcesses();
        break;
      case 'reload':
        await this.reloadEcosystem(arg || "ecosystem-redundancy.pm2.cjs");
        break;
      default:
        console.log(`
Enhanced PM2 Redundancy Manager - Advanced PM2 Process Management

Usage:
  node automation/enhanced-pm2-redundancy-manager.cjs [command] [arg]

Commands:
  start         - Start monitoring and auto-recovery
  stop          - Stop monitoring
  status        - Show current status
  health        - Perform health check
  recover       - Trigger auto-recovery
  restart-all   - Restart all PM2 processes
  reload [file] - Reload ecosystem file (default: ecosystem-redundancy.pm2.cjs)

Features:
  ✅ Comprehensive Process Health Monitoring
  ✅ Intelligent Auto-Recovery with Cooldown
  ✅ Process-Specific Configuration
  ✅ Restart Attempt Limiting
  ✅ Ecosystem Reloading
  ✅ Detailed Health Reporting
        `);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const manager = new EnhancedPM2RedundancyManager();
  manager.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = EnhancedPM2RedundancyManager;