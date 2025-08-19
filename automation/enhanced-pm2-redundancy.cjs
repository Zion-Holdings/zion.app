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
    
    this.config = {
      enabled: true,
      checkInterval: 30000,
      maxRestartAttempts: 5,
      restartDelay: 5000,
      autoRecovery: true,
      healthCheckTimeout: 15000,
      criticalProcesses: [
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
      backupEcosystems: true,
      logRotation: true,
      maxLogSize: 10 * 1024 * 1024, // 10MB
      maxLogFiles: 30
    };
    
    this.monitoring = false;
    this.checkInterval = null;
    this.restartAttempts = new Map();
    this.healthHistory = [];
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
        maxBuffer: 1024 * 1024 * 10,
        timeout: options.timeout || this.config.healthCheckTimeout,
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
      const result = await this.runCommand("pm2", ["status", "--no-daemon"]);
      
      if (result.status !== 0) {
        this.log("❌ PM2 daemon not responding", "ERROR");
        return false;
      }
      
      this.log("✅ PM2 daemon is healthy");
      return true;
    } catch (error) {
      this.log(`❌ PM2 daemon check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkEcosystemFiles() {
    this.log("🔍 Checking PM2 ecosystem files...");
    
    const results = {
      exists: [],
      missing: [],
      valid: [],
      invalid: []
    };

    for (const ecosystemFile of this.config.ecosystemFiles) {
      const filePath = path.join(this.workspace, ecosystemFile);
      
      if (fs.existsSync(filePath)) {
        results.exists.push(ecosystemFile);
        
        try {
          // Basic validation - check if it's a valid CommonJS module
          const content = fs.readFileSync(filePath, 'utf8');
          if (content.includes('module.exports') && content.includes('apps:')) {
            results.valid.push(ecosystemFile);
            this.log(`✅ Ecosystem file ${ecosystemFile} is valid`);
          } else {
            results.invalid.push(ecosystemFile);
            this.log(`⚠️ Ecosystem file ${ecosystemFile} appears invalid`, "WARN");
          }
        } catch (error) {
          results.invalid.push(ecosystemFile);
          this.log(`❌ Error reading ecosystem file ${ecosystemFile}: ${error.message}`, "ERROR");
        }
      } else {
        results.missing.push(ecosystemFile);
        this.log(`❌ Ecosystem file ${ecosystemFile} not found`, "ERROR");
      }
    }

    // Create backup ecosystems if enabled
    if (this.config.backupEcosystems) {
      await this.createBackupEcosystems(results.exists);
    }

    return results;
  }

  async createBackupEcosystems(existingFiles) {
    try {
      const backupDir = path.join(this.workspace, "automation/backup/ecosystems");
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }

      for (const ecosystemFile of existingFiles) {
        const sourcePath = path.join(this.workspace, ecosystemFile);
        const backupPath = path.join(backupDir, `${ecosystemFile}.backup`);
        
        if (fs.existsSync(sourcePath) && !fs.existsSync(backupPath)) {
          fs.copyFileSync(sourcePath, backupPath);
          this.log(`💾 Created backup for ecosystem: ${ecosystemFile}`);
        }
      }
    } catch (error) {
      this.log(`⚠️ Could not create backup ecosystems: ${error.message}`, "WARN");
    }
  }

  async checkProcessHealth(processName) {
    try {
      const result = await this.runCommand("pm2", ["show", processName, "--no-daemon"]);
      
      if (result.status !== 0) {
        this.log(`❌ Process ${processName} not found`, "ERROR");
        return {
          healthy: false,
          status: "not_found",
          restartCount: 0,
          uptime: 0
        };
      }

      // Parse process information
      const output = result.stdout;
      const restartCount = this.extractRestartCount(output);
      const uptime = this.extractUptime(output);
      const status = this.extractStatus(output);

      const isHealthy = status === "online" && uptime > 0;
      
      if (isHealthy) {
        this.log(`✅ Process ${processName} is healthy (uptime: ${uptime}s, restarts: ${restartCount})`);
      } else {
        this.log(`⚠️ Process ${processName} is unhealthy (status: ${status}, uptime: ${uptime}s)`, "WARN");
      }

      return {
        healthy: isHealthy,
        status: status,
        restartCount: restartCount,
        uptime: uptime
      };
    } catch (error) {
      this.log(`❌ Error checking process ${processName}: ${error.message}`, "ERROR");
      return {
        healthy: false,
        status: "error",
        restartCount: 0,
        uptime: 0
      };
    }
  }

  extractRestartCount(output) {
    const match = output.match(/restarts:\s*(\d+)/i);
    return match ? parseInt(match[1]) : 0;
  }

  extractUptime(output) {
    const match = output.match(/uptime:\s*([^\n]+)/i);
    if (match) {
      const uptimeStr = match[1].trim();
      // Convert uptime string to seconds
      if (uptimeStr.includes('d')) {
        const days = parseInt(uptimeStr.match(/(\d+)d/)?.[1] || 0);
        const hours = parseInt(uptimeStr.match(/(\d+)h/)?.[1] || 0);
        const minutes = parseInt(uptimeStr.match(/(\d+)m/)?.[1] || 0);
        const seconds = parseInt(uptimeStr.match(/(\d+)s/)?.[1] || 0);
        return days * 86400 + hours * 3600 + minutes * 60 + seconds;
      }
      return 0;
    }
    return 0;
  }

  extractStatus(output) {
    const match = output.match(/status:\s*(\w+)/i);
    return match ? match[1].toLowerCase() : "unknown";
  }

  async restartProcess(processName) {
    try {
      const attempts = this.restartAttempts.get(processName) || 0;
      
      if (attempts >= this.config.maxRestartAttempts) {
        this.log(`🚨 Process ${processName} has exceeded max restart attempts (${attempts})`, "ERROR");
        return false;
      }

      this.log(`🔄 Restarting process ${processName} (attempt ${attempts + 1})`);
      
      const result = await this.runCommand("pm2", ["restart", processName]);
      
      if (result.status === 0) {
        this.log(`✅ Successfully restarted process ${processName}`);
        this.restartAttempts.set(processName, attempts + 1);
        
        // Wait before checking health
        await new Promise(resolve => setTimeout(resolve, this.config.restartDelay));
        
        // Check if restart was successful
        const health = await this.checkProcessHealth(processName);
        if (health.healthy) {
          this.log(`✅ Process ${processName} is healthy after restart`);
          this.restartAttempts.delete(processName); // Reset counter on success
          return true;
        } else {
          this.log(`⚠️ Process ${processName} still unhealthy after restart`, "WARN");
          return false;
        }
      } else {
        this.log(`❌ Failed to restart process ${processName}: ${result.stderr}`, "ERROR");
        this.restartAttempts.set(processName, attempts + 1);
        return false;
      }
    } catch (error) {
      this.log(`❌ Error restarting process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performComprehensiveHealthCheck() {
    this.log("🚀 Starting comprehensive PM2 health check...");
    
    const results = {
      daemon: false,
      ecosystems: {},
      processes: {},
      overall: false,
      timestamp: new Date().toISOString()
    };

    // Check PM2 daemon
    results.daemon = await this.checkPM2Daemon();
    
    // Check ecosystem files
    results.ecosystems = await this.checkEcosystemFiles();
    
    // Check each critical process
    const processResults = {};
    let healthyProcesses = 0;
    let totalProcesses = this.config.criticalProcesses.length;

    for (const processName of this.config.criticalProcesses) {
      const health = await this.checkProcessHealth(processName);
      processResults[processName] = health;
      
      if (health.healthy) {
        healthyProcesses++;
      } else if (this.config.autoRecovery) {
        // Attempt to restart unhealthy processes
        const restartSuccess = await this.restartProcess(processName);
        if (restartSuccess) {
          healthyProcesses++;
          processResults[processName].recovered = true;
        }
      }
    }

    results.processes = processResults;
    results.overall = results.daemon && healthyProcesses === totalProcesses;

    // Generate health summary
    this.log(`📊 PM2 Health Summary:`);
    this.log(`   Daemon: ${results.daemon ? '✅' : '❌'}`);
    this.log(`   Ecosystems: ${results.ecosystems.valid.length}/${results.ecosystems.exists.length} valid`);
    this.log(`   Processes: ${healthyProcesses}/${totalProcesses} healthy`);
    this.log(`   Overall: ${results.overall ? '✅' : '❌'}`);

    // Save health history
    this.healthHistory.push(results);
    if (this.healthHistory.length > 100) {
      this.healthHistory = this.healthHistory.slice(-100);
    }

    // Save detailed health report
    await this.saveHealthReport(results);

    return results;
  }

  async saveHealthReport(results) {
    try {
      const reportPath = path.join(this.logDir, "pm2-health-report.json");
      fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
      
      // Also save to logs directory
      const logReportPath = path.join(this.logDir, `pm2-health-${new Date().toISOString().split('T')[0]}.json`);
      fs.writeFileSync(logReportPath, JSON.stringify(results, null, 2));
      
      this.log(`💾 Health report saved`);
    } catch (error) {
      this.log(`⚠️ Could not save health report: ${error.message}`, "WARN");
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("⚠️ Monitoring is already running", "WARN");
      return;
    }

    this.log("🔍 Starting enhanced PM2 redundancy monitoring...");
    this.monitoring = true;

    // Perform initial health check
    await this.performComprehensiveHealthCheck();

    // Start periodic monitoring
    this.checkInterval = setInterval(async () => {
      try {
        await this.performComprehensiveHealthCheck();
      } catch (error) {
        this.log(`❌ Monitoring cycle failed: ${error.message}`, "ERROR");
      }
    }, this.config.checkInterval);

    this.log(`✅ Enhanced PM2 redundancy monitoring started with ${this.config.checkInterval}ms intervals`);
  }

  async stopMonitoring() {
    if (!this.monitoring) {
      this.log("⚠️ Monitoring is not running", "WARN");
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

  async emergencyRecovery() {
    this.log("🚨 Emergency recovery mode activated...");
    
    try {
      // Stop monitoring temporarily
      await this.stopMonitoring();
      
      // Kill all PM2 processes
      await this.runCommand("pm2", ["kill"]);
      this.log("🔄 Killed all PM2 processes");
      
      // Wait for cleanup
      await new Promise(resolve => setTimeout(resolve, 10000));
      
      // Start with primary ecosystem
      const primaryEcosystem = this.config.ecosystemFiles[0];
      if (fs.existsSync(primaryEcosystem)) {
        await this.runCommand("pm2", ["start", primaryEcosystem]);
        this.log(`🔄 Started PM2 with ${primaryEcosystem}`);
      }
      
      // Save PM2 configuration
      await this.runCommand("pm2", ["save"]);
      this.log("💾 Saved PM2 configuration");
      
      // Wait for processes to stabilize
      await new Promise(resolve => setTimeout(resolve, 15000));
      
      // Restart monitoring
      await this.startMonitoring();
      
      this.log("✅ Emergency recovery completed");
    } catch (error) {
      this.log(`❌ Emergency recovery failed: ${error.message}`, "ERROR");
      
      // Try to restart monitoring anyway
      try {
        await this.startMonitoring();
      } catch (monitoringError) {
        this.log(`❌ Failed to restart monitoring: ${monitoringError.message}`, "ERROR");
      }
    }
  }

  getHealthHistory() {
    return this.healthHistory;
  }

  getRestartAttempts() {
    return Object.fromEntries(this.restartAttempts);
  }

  async cleanup() {
    this.log("🧹 Cleaning up enhanced PM2 redundancy...");
    
    try {
      await this.stopMonitoring();
      
      // Rotate logs if enabled
      if (this.config.logRotation) {
        await this.rotateLogs();
      }
      
      this.log("✅ Cleanup completed");
    } catch (error) {
      this.log(`❌ Cleanup failed: ${error.message}`, "ERROR");
    }
  }

  async rotateLogs() {
    try {
      const logFiles = fs.readdirSync(this.logDir)
        .filter(file => file.startsWith('enhanced-pm2-redundancy'))
        .sort();

      // Remove old log files if we exceed maxLogFiles
      if (logFiles.length > this.config.maxLogFiles) {
        const filesToRemove = logFiles.slice(0, logFiles.length - this.config.maxLogFiles);
        
        for (const file of filesToRemove) {
          const filePath = path.join(this.logDir, file);
          fs.unlinkSync(filePath);
          this.log(`🗑️ Removed old log file: ${file}`);
        }
      }
    } catch (error) {
      this.log(`⚠️ Could not rotate logs: ${error.message}`, "WARN");
    }
  }
}

// Start the enhanced PM2 redundancy monitor if run directly
if (require.main === module) {
  const monitor = new EnhancedPM2Redundancy();
  
  // Handle process signals
  process.on('SIGINT', async () => {
    console.log('\n🛑 Received SIGINT, shutting down gracefully...');
    await monitor.cleanup();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
    await monitor.cleanup();
    process.exit(0);
  });
  
  // Start monitoring
  monitor.startMonitoring().catch(error => {
    console.error('❌ Failed to start monitoring:', error);
    process.exit(1);
  });
}

module.exports = EnhancedPM2Redundancy;