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
      ecosystemFiles: [
        "ecosystem.pm2.cjs",
        "ecosystem.redundancy.cjs"
      ],
      criticalProcesses: [
        "zion-auto-sync",
        "zion-auto-sync-cron"
      ],
      redundancyProcesses: [
        "redundancy-automation-system",
        "redundancy-health-monitor",
        "redundancy-git-sync",
        "redundancy-build-monitor"
      ],
      allProcesses: [],
      healthCheckInterval: 30000,
      maxRestartAttempts: 5,
      restartDelay: 5000,
      enableAutoRecovery: true,
      enableProcessMonitoring: true,
      enableEcosystemValidation: true
    };
    
    this.initializeProcesses();
    this.monitoring = false;
    this.checkInterval = null;
    this.restartAttempts = new Map();
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  initializeProcesses() {
    this.config.allProcesses = [
      ...this.config.criticalProcesses,
      ...this.config.redundancyProcesses
    ];
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
      try {
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
          error: result.error,
          timedOut: result.signal === 'SIGTERM',
          pid: result.pid
        });
      } catch (error) {
        this.log(`Command execution error: ${error.message}`, "ERROR");
        resolve({
          status: -1,
          stdout: "",
          stderr: error.message,
          error: error,
          timedOut: false,
          pid: null
        });
      }
    });
  }

  async checkPM2Daemon() {
    try {
      const result = await this.runCommand("pm2", ["ping"]);
      if (result.status === 0) {
        this.log("✅ PM2 daemon is responding");
        return true;
      } else {
        this.log("❌ PM2 daemon not responding", "WARN");
        return false;
      }
    } catch (error) {
      this.log(`❌ PM2 daemon check failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restartPM2Daemon() {
    this.log("🔄 Restarting PM2 daemon...");
    try {
      await this.runCommand("pm2", ["kill"]);
      await this.runCommand("pm2", ["start"]);
      this.log("✅ PM2 daemon restarted successfully");
      return true;
    } catch (error) {
      this.log(`❌ Failed to restart PM2 daemon: ${error.message}`, "ERROR");
      return false;
    }
  }

  async validateEcosystemFiles() {
    this.log("🔍 Validating PM2 ecosystem files...");
    
    const validFiles = [];
    for (const ecosystemFile of this.config.ecosystemFiles) {
      const filePath = path.join(this.workspace, ecosystemFile);
      if (fs.existsSync(filePath)) {
        try {
          // Try to require the ecosystem file to validate syntax
          require(filePath);
          validFiles.push(ecosystemFile);
          this.log(`✅ Ecosystem file ${ecosystemFile} is valid`);
        } catch (error) {
          this.log(`❌ Ecosystem file ${ecosystemFile} has syntax errors: ${error.message}`, "ERROR");
        }
      } else {
        this.log(`⚠️ Ecosystem file ${ecosystemFile} not found`, "WARN");
      }
    }
    
    return validFiles;
  }

  async startEcosystemFile(ecosystemFile) {
    this.log(`🚀 Starting ecosystem file: ${ecosystemFile}`);
    try {
      const result = await this.runCommand("pm2", ["start", ecosystemFile]);
      if (result.status === 0) {
        this.log(`✅ Successfully started ecosystem: ${ecosystemFile}`);
        return true;
      } else {
        this.log(`❌ Failed to start ecosystem: ${ecosystemFile}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Error starting ecosystem ${ecosystemFile}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkProcessHealth(processName) {
    try {
      const result = await this.runCommand("pm2", ["show", processName]);
      if (result.status === 0) {
        // Parse process status from output
        const output = result.stdout;
        if (output.includes("status") && output.includes("online")) {
          this.log(`✅ Process ${processName} is healthy and online`);
          return { healthy: true, status: "online" };
        } else if (output.includes("status") && output.includes("stopped")) {
          this.log(`⚠️ Process ${processName} is stopped`, "WARN");
          return { healthy: false, status: "stopped" };
        } else if (output.includes("status") && output.includes("errored")) {
          this.log(`❌ Process ${processName} has errors`, "ERROR");
          return { healthy: false, status: "errored" };
        } else {
          this.log(`⚠️ Process ${processName} status unclear`, "WARN");
          return { healthy: false, status: "unknown" };
        }
      } else {
        this.log(`❌ Process ${processName} not found`, "WARN");
        return { healthy: false, status: "not_found" };
      }
    } catch (error) {
      this.log(`❌ Error checking process ${processName}: ${error.message}`, "ERROR");
      return { healthy: false, status: "error" };
    }
  }

  async restartProcess(processName) {
    const attempts = this.restartAttempts.get(processName) || 0;
    
    if (attempts >= this.config.maxRestartAttempts) {
      this.log(`⚠️ Process ${processName} has exceeded max restart attempts (${attempts}/${this.config.maxRestartAttempts})`, "WARN");
      return false;
    }
    
    this.log(`🔄 Restarting process ${processName} (attempt ${attempts + 1}/${this.config.maxRestartAttempts})`);
    
    try {
      const result = await this.runCommand("pm2", ["restart", processName]);
      if (result.status === 0) {
        this.log(`✅ Successfully restarted process: ${processName}`);
        this.restartAttempts.set(processName, attempts + 1);
        
        // Reset restart attempts after successful restart
        setTimeout(() => {
          this.restartAttempts.set(processName, 0);
        }, 60000); // Reset after 1 minute
        
        return true;
      } else {
        this.log(`❌ Failed to restart process: ${processName}`, "ERROR");
        this.restartAttempts.set(processName, attempts + 1);
        return false;
      }
    } catch (error) {
      this.log(`❌ Error restarting process ${processName}: ${error.message}`, "ERROR");
      this.restartAttempts.set(processName, attempts + 1);
      return false;
    }
  }

  async startProcess(processName) {
    this.log(`🚀 Starting process: ${processName}`);
    try {
      const result = await this.runCommand("pm2", ["start", processName]);
      if (result.status === 0) {
        this.log(`✅ Successfully started process: ${processName}`);
        return true;
      } else {
        this.log(`❌ Failed to start process: ${processName}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Error starting process ${processName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performComprehensiveHealthCheck() {
    this.log("🚀 Starting comprehensive PM2 health check...");
    
    const results = {
      daemon: false,
      ecosystem: false,
      processes: {},
      summary: {
        total: this.config.allProcesses.length,
        healthy: 0,
        unhealthy: 0,
        restarted: 0
      },
      timestamp: new Date().toISOString()
    };

    // Check PM2 daemon
    results.daemon = await this.checkPM2Daemon();
    if (!results.daemon) {
      this.log("⚠️ PM2 daemon unhealthy, attempting restart...", "WARN");
      results.daemon = await this.restartPM2Daemon();
    }

    // Validate ecosystem files
    const validEcosystems = await this.validateEcosystemFiles();
    results.ecosystem = validEcosystems.length > 0;

    // Check all processes
    for (const processName of this.config.allProcesses) {
      const processHealth = await this.checkProcessHealth(processName);
      results.processes[processName] = processHealth;
      
      if (processHealth.healthy) {
        results.summary.healthy++;
      } else {
        results.summary.unhealthy++;
        
        if (this.config.enableAutoRecovery) {
          if (processHealth.status === "not_found") {
            // Try to start the process
            const started = await this.startProcess(processName);
            if (started) results.summary.restarted++;
          } else {
            // Try to restart the process
            const restarted = await this.restartProcess(processName);
            if (restarted) results.summary.restarted++;
          }
        }
      }
    }

    // Generate and log health report
    const healthReport = this.generateHealthReport(results);
    this.log(healthReport);

    // Save health report
    this.saveHealthReport(results);

    return results;
  }

  generateHealthReport(results) {
    const daemonStatus = results.daemon ? "✅ HEALTHY" : "❌ UNHEALTHY";
    const ecosystemStatus = results.ecosystem ? "✅ VALID" : "❌ INVALID";
    
    let processStatus = "";
    for (const [processName, health] of Object.entries(results.processes)) {
      const status = health.healthy ? "✅" : "❌";
      processStatus += `${status} ${processName}: ${health.status}\n`;
    }

    return `
📊 ENHANCED PM2 HEALTH REPORT
==============================
Timestamp: ${results.timestamp}

🔧 PM2 Daemon: ${daemonStatus}
📋 Ecosystem Files: ${ecosystemStatus}

📊 Process Health Summary:
Total Processes: ${results.summary.total}
Healthy: ${results.summary.healthy}
Unhealthy: ${results.summary.unhealthy}
Restarted: ${results.summary.restarted}

🔍 Individual Process Status:
${processStatus}

${results.summary.healthy === results.summary.total ? 
  "🎉 All PM2 processes are healthy!" : 
  "⚠️ Some PM2 processes require attention. Check logs for details."}
`;
  }

  saveHealthReport(results) {
    try {
      const reportPath = path.join(this.logDir, `pm2-health-report-${new Date().toISOString().split('T')[0]}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
      this.log(`📝 PM2 health report saved to ${reportPath}`);
    } catch (error) {
      this.log(`❌ Failed to save PM2 health report: ${error.message}`, "ERROR");
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("⚠️ Monitoring is already running");
      return;
    }

    this.log("🚀 Starting enhanced PM2 redundancy monitoring...");
    this.monitoring = true;

    // Initial health check
    await this.performComprehensiveHealthCheck();

    // Set up periodic monitoring
    this.checkInterval = setInterval(async () => {
      await this.performComprehensiveHealthCheck();
    }, this.config.healthCheckInterval);

    this.log("✅ Enhanced PM2 redundancy monitoring started successfully");
  }

  async stopMonitoring() {
    if (!this.monitoring) {
      this.log("⚠️ Monitoring is not running");
      return;
    }

    this.log("🛑 Stopping enhanced PM2 redundancy monitoring...");
    this.monitoring = false;

    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }

    this.log("✅ Enhanced PM2 redundancy monitoring stopped");
  }

  async emergencyRecovery() {
    this.log("🚨 Starting emergency PM2 recovery...");
    
    try {
      // Kill all PM2 processes
      await this.runCommand("pm2", ["kill"]);
      
      // Restart PM2 daemon
      await this.runCommand("pm2", ["start"]);
      
      // Start all ecosystem files
      for (const ecosystemFile of this.config.ecosystemFiles) {
        if (fs.existsSync(ecosystemFile)) {
          await this.startEcosystemFile(ecosystemFile);
        }
      }
      
      this.log("✅ Emergency PM2 recovery completed");
      return true;
    } catch (error) {
      this.log(`❌ Emergency PM2 recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  getStatus() {
    return {
      monitoring: this.monitoring,
      config: this.config,
      restartAttempts: Object.fromEntries(this.restartAttempts)
    };
  }
}

// Start the enhanced PM2 redundancy system
if (require.main === module) {
  const pm2Redundancy = new EnhancedPM2Redundancy();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    console.log('\n🛑 Shutting down enhanced PM2 redundancy system...');
    await pm2Redundancy.stopMonitoring();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\n🛑 Terminating enhanced PM2 redundancy system...');
    await pm2Redundancy.stopMonitoring();
    process.exit(0);
  });

  // Start monitoring
  pm2Redundancy.startMonitoring();
}

module.exports = EnhancedPM2Redundancy;