#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class MasterRedundancyOrchestrator {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "master-redundancy-orchestrator.log");
    this.ensureLogDir();
    
    this.config = {
      systems: {
        pm2: {
          enabled: true,
          script: "automation/enhanced-pm2-redundancy.cjs",
          healthCheckInterval: 30000,
          autoRecovery: true
        },
        githubActions: {
          enabled: true,
          script: "automation/enhanced-github-actions-redundancy.cjs",
          healthCheckInterval: 60000,
          autoRecovery: true
        },
        netlifyFunctions: {
          enabled: true,
          script: "automation/enhanced-netlify-functions-redundancy.cjs",
          healthCheckInterval: 120000,
          autoRecovery: true
        }
      },
      orchestration: {
        masterCheckInterval: 60000,
        systemStartupDelay: 10000,
        maxConcurrentRecoveries: 2,
        emergencyMode: false
      },
      logging: {
        logLevel: "INFO",
        maxLogSize: 10 * 1024 * 1024,
        maxLogFiles: 30
      }
    };
    
    this.systems = new Map();
    this.monitoring = false;
    this.checkInterval = null;
    this.recoveryInProgress = false;
    this.systemStatus = new Map();
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

  async startSystem(systemName, systemConfig) {
    try {
      this.log(`🚀 Starting ${systemName} redundancy system...`);
      
      if (!fs.existsSync(systemConfig.script)) {
        this.log(`❌ Script not found for ${systemName}: ${systemConfig.script}`, "ERROR");
        return false;
      }

      // Start the system process
      const result = await this.runCommand("node", [systemConfig.script], {
        timeout: 60000
      });

      if (result.status === 0) {
        this.log(`✅ ${systemName} redundancy system started successfully`);
        this.systemStatus.set(systemName, { status: "running", lastStart: new Date().toISOString() });
        return true;
      } else {
        this.log(`❌ Failed to start ${systemName} redundancy system: ${result.stderr}`, "ERROR");
        this.systemStatus.set(systemName, { status: "failed", lastStart: new Date().toISOString(), error: result.stderr });
        return false;
      }
    } catch (error) {
      this.log(`❌ Error starting ${systemName} redundancy system: ${error.message}`, "ERROR");
      this.systemStatus.set(systemName, { status: "error", lastStart: new Date().toISOString(), error: error.message });
      return false;
    }
  }

  async stopSystem(systemName) {
    try {
      this.log(`🛑 Stopping ${systemName} redundancy system...`);
      
      // Find and kill the process
      const result = await this.runCommand("pkill", ["-f", systemName]);
      
      if (result.status === 0 || result.status === 1) { // 1 means no processes found
        this.log(`✅ ${systemName} redundancy system stopped`);
        this.systemStatus.set(systemName, { status: "stopped", lastStop: new Date().toISOString() });
        return true;
      } else {
        this.log(`⚠️ Could not stop ${systemName} redundancy system cleanly`, "WARN");
        return false;
      }
    } catch (error) {
      this.log(`❌ Error stopping ${systemName} redundancy system: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restartSystem(systemName, systemConfig) {
    try {
      this.log(`🔄 Restarting ${systemName} redundancy system...`);
      
      await this.stopSystem(systemName);
      await this.sleep(5000); // Wait for cleanup
      const success = await this.startSystem(systemName, systemConfig);
      
      if (success) {
        this.log(`✅ ${systemName} redundancy system restarted successfully`);
      } else {
        this.log(`❌ Failed to restart ${systemName} redundancy system`, "ERROR");
      }
      
      return success;
    } catch (error) {
      this.log(`❌ Error restarting ${systemName} redundancy system: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkSystemHealth(systemName, systemConfig) {
    try {
      this.log(`🔍 Checking health of ${systemName} redundancy system...`);
      
      // Check if the system process is running
      const result = await this.runCommand("pgrep", ["-f", systemName]);
      const isRunning = result.status === 0;
      
      if (isRunning) {
        this.log(`✅ ${systemName} redundancy system is running`);
        this.systemStatus.set(systemName, { 
          status: "healthy", 
          lastCheck: new Date().toISOString(),
          uptime: await this.getSystemUptime(systemName)
        });
        return true;
      } else {
        this.log(`⚠️ ${systemName} redundancy system is not running`, "WARN");
        this.systemStatus.set(systemName, { 
          status: "down", 
          lastCheck: new Date().toISOString()
        });
        return false;
      }
    } catch (error) {
      this.log(`❌ Error checking health of ${systemName} redundancy system: ${error.message}`, "ERROR");
      return false;
    }
  }

  async getSystemUptime(systemName) {
    try {
      const result = await this.runCommand("pgrep", ["-o", "-f", systemName]);
      if (result.status === 0) {
        const pid = result.stdout.trim();
        const psResult = await this.runCommand("ps", ["-o", "etime=", "-p", pid]);
        if (psResult.status === 0) {
          return psResult.stdout.trim();
        }
      }
      return "unknown";
    } catch (error) {
      return "unknown";
    }
  }

  async performSystemRecovery(systemName, systemConfig) {
    if (this.recoveryInProgress) {
      this.log(`⚠️ Recovery already in progress, skipping ${systemName}`, "WARN");
      return false;
    }

    try {
      this.recoveryInProgress = true;
      this.log(`🚨 Starting recovery for ${systemName} redundancy system...`);
      
      const recoverySuccess = await this.restartSystem(systemName, systemConfig);
      
      if (recoverySuccess) {
        this.log(`✅ Recovery completed successfully for ${systemName}`);
        this.systemStatus.set(systemName, { 
          status: "recovered", 
          lastRecovery: new Date().toISOString()
        });
      } else {
        this.log(`❌ Recovery failed for ${systemName}`, "ERROR");
        this.systemStatus.set(systemName, { 
          status: "recovery_failed", 
          lastRecovery: new Date().toISOString()
        });
      }
      
      return recoverySuccess;
    } catch (error) {
      this.log(`❌ Error during recovery of ${systemName}: ${error.message}`, "ERROR");
      return false;
    } finally {
      this.recoveryInProgress = false;
    }
  }

  async performMasterHealthCheck() {
    this.log("🚀 Starting master redundancy orchestrator health check...");
    
    const results = {
      systems: {},
      overall: {
        healthy: 0,
        unhealthy: 0,
        total: 0
      },
      timestamp: new Date().toISOString()
    };

    // Check each system
    for (const [systemName, systemConfig] of Object.entries(this.config.systems)) {
      if (!systemConfig.enabled) {
        this.log(`⏭️ Skipping disabled system: ${systemName}`);
        continue;
      }

      const isHealthy = await this.checkSystemHealth(systemName, systemConfig);
      results.systems[systemName] = {
        enabled: systemConfig.enabled,
        healthy: isHealthy,
        status: this.systemStatus.get(systemName) || { status: "unknown" }
      };

      if (isHealthy) {
        results.overall.healthy++;
      } else {
        results.overall.unhealthy++;
        
        // Attempt recovery if enabled
        if (systemConfig.autoRecovery && !this.recoveryInProgress) {
          this.log(`🔄 Initiating auto-recovery for ${systemName}...`);
          setTimeout(() => this.performSystemRecovery(systemName, systemConfig), 1000);
        }
      }
      
      results.overall.total++;
    }

    // Log results
    this.log(`📊 Master Health Check Results:
    - Total Systems: ${results.overall.total}
    - Healthy: ${results.overall.healthy} ✅
    - Unhealthy: ${results.overall.unhealthy} ❌
    - Health Rate: ${results.overall.total > 0 ? Math.round((results.overall.healthy / results.overall.total) * 100) : 0}%`);

    // Save health check results
    const healthCheckFile = path.join(this.logDir, `master-health-check-${new Date().toISOString().split('T')[0]}.json`);
    try {
      fs.writeFileSync(healthCheckFile, JSON.stringify(results, null, 2));
    } catch (error) {
      this.log(`❌ Failed to save master health check results: ${error.message}`, "ERROR");
    }

    return results;
  }

  async emergencyMode() {
    this.log("🚨 Entering emergency mode - attempting full system recovery...");
    
    try {
      this.config.orchestration.emergencyMode = true;
      
      // Stop all systems
      for (const [systemName, systemConfig] of Object.entries(this.config.systems)) {
        if (systemConfig.enabled) {
          await this.stopSystem(systemName);
        }
      }
      
      await this.sleep(10000); // Wait for cleanup
      
      // Start all systems in sequence
      for (const [systemName, systemConfig] of Object.entries(this.config.systems)) {
        if (systemConfig.enabled) {
          await this.startSystem(systemName, systemConfig);
          await this.sleep(this.config.orchestration.systemStartupDelay);
        }
      }
      
      // Perform health check
      await this.performMasterHealthCheck();
      
      this.config.orchestration.emergencyMode = false;
      this.log("✅ Emergency mode recovery completed");
      return true;
    } catch (error) {
      this.log(`❌ Emergency mode recovery failed: ${error.message}`, "ERROR");
      this.config.orchestration.emergencyMode = false;
      return false;
    }
  }

  async startAllSystems() {
    this.log("🚀 Starting all redundancy systems...");
    
    const startupResults = {};
    
    for (const [systemName, systemConfig] of Object.entries(this.config.systems)) {
      if (systemConfig.enabled) {
        this.log(`📝 Starting ${systemName}...`);
        const success = await this.startSystem(systemName, systemConfig);
        startupResults[systemName] = success;
        
        if (success) {
          await this.sleep(this.config.orchestration.systemStartupDelay);
        }
      } else {
        this.log(`⏭️ Skipping disabled system: ${systemName}`);
        startupResults[systemName] = "disabled";
      }
    }
    
    // Log startup results
    const successful = Object.values(startupResults).filter(r => r === true).length;
    const total = Object.keys(startupResults).length;
    
    this.log(`📊 System Startup Results: ${successful}/${total} systems started successfully`);
    
    return startupResults;
  }

  async stopAllSystems() {
    this.log("🛑 Stopping all redundancy systems...");
    
    const stopResults = {};
    
    for (const [systemName, systemConfig] of Object.entries(this.config.systems)) {
      if (systemConfig.enabled) {
        this.log(`📝 Stopping ${systemName}...`);
        const success = await this.stopSystem(systemName);
        stopResults[systemName] = success;
      } else {
        this.log(`⏭️ Skipping disabled system: ${systemName}`);
        stopResults[systemName] = "disabled";
      }
    }
    
    this.log("✅ All redundancy systems stopped");
    return stopResults;
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("⚠️ Monitoring is already running");
      return;
    }

    this.log("🚀 Starting master redundancy orchestrator monitoring...");
    this.monitoring = true;

    // Start all systems
    await this.startAllSystems();

    // Initial health check
    await this.performMasterHealthCheck();

    // Start monitoring loop
    this.checkInterval = setInterval(async () => {
      try {
        await this.performMasterHealthCheck();
      } catch (error) {
        this.log(`❌ Error in master monitoring loop: ${error.message}`, "ERROR");
      }
    }, this.config.orchestration.masterCheckInterval);

    this.log(`✅ Master redundancy orchestrator monitoring started with ${this.config.orchestration.masterCheckInterval}ms intervals`);
  }

  async stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    
    this.monitoring = false;
    this.log("🛑 Master redundancy orchestrator monitoring stopped");
  }

  async cleanup() {
    this.log("🧹 Cleaning up master redundancy orchestrator...");
    
    try {
      await this.stopMonitoring();
      await this.stopAllSystems();
      
      this.log("✅ Cleanup completed");
    } catch (error) {
      this.log(`❌ Error during cleanup: ${error.message}`, "ERROR");
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getSystemStatus() {
    return Object.fromEntries(this.systemStatus);
  }

  getConfiguration() {
    return this.config;
  }
}

// Start the master redundancy orchestrator
if (require.main === module) {
  const orchestrator = new MasterRedundancyOrchestrator();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    orchestrator.log("🛑 Shutting down master redundancy orchestrator...");
    await orchestrator.cleanup();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    orchestrator.log("🛑 Shutting down master redundancy orchestrator...");
    await orchestrator.cleanup();
    process.exit(0);
  });
  
  // Start monitoring
  orchestrator.startMonitoring();
}

module.exports = MasterRedundancyOrchestrator;