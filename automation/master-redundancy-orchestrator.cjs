#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

class MasterRedundancyOrchestrator {
  constructor() {
    this.config = {
      systems: {
        pm2: {
          enabled: true,
          script: "automation/enhanced-pm2-redundancy.cjs",
          healthCheckInterval: 30000,
          maxFailures: 3
        },
        githubActions: {
          enabled: true,
          script: "automation/enhanced-github-actions-redundancy.cjs",
          healthCheckInterval: 60000,
          maxFailures: 3
        },
        netlifyFunctions: {
          enabled: true,
          script: "automation/enhanced-netlify-functions-redundancy.cjs",
          healthCheckInterval: 120000,
          maxFailures: 3
        }
      },
      orchestration: {
        masterHealthCheckInterval: 60000, // 1 minute
        systemStartupDelay: 5000, // 5 seconds between system starts
        failureThreshold: 5,
        autoRecovery: true,
        loadBalancing: true
      },
      logging: {
        logDir: "automation/logs",
        maxLogSize: 10 * 1024 * 1024, // 10MB
        maxLogFiles: 30
      }
    };
    
    this.systems = new Map();
    this.systemStatus = new Map();
    this.failureCounts = new Map();
    this.ensureDirectories();
    this.initializeOrchestration();
  }

  ensureDirectories() {
    // Ensure logs directory exists
    if (!fs.existsSync(this.config.logging.logDir)) {
      fs.mkdirSync(this.config.logging.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] [MASTER] ${message}`;
    console.log(logEntry);
    
    const logFile = path.join(this.config.logging.logDir, `master-orchestrator-${new Date().toISOString().split('T')[0]}.log`);
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
        this.log(`❌ Script not found: ${systemConfig.script}`, "ERROR");
        return false;
      }
      
      // Start the system using PM2
      const startResult = await this.runCommand("pm2", [
        "start", 
        systemConfig.script, 
        "--name", 
        `redundancy-${systemName}`,
        "--interpreter", 
        "node"
      ]);
      
      if (startResult.status === 0) {
        this.log(`✅ ${systemName} redundancy system started successfully`);
        this.systemStatus.set(systemName, { status: 'running', startedAt: new Date().toISOString() });
        return true;
      } else {
        this.log(`❌ Failed to start ${systemName} system: ${startResult.stderr}`, "ERROR");
        this.systemStatus.set(systemName, { status: 'failed', error: startResult.stderr });
        return false;
      }
    } catch (error) {
      this.log(`❌ Error starting ${systemName} system: ${error.message}`, "ERROR");
      this.systemStatus.set(systemName, { status: 'error', error: error.message });
      return false;
    }
  }

  async stopSystem(systemName) {
    try {
      this.log(`🛑 Stopping ${systemName} redundancy system...`);
      
      const stopResult = await this.runCommand("pm2", ["stop", `redundancy-${systemName}`]);
      
      if (stopResult.status === 0) {
        this.log(`✅ ${systemName} redundancy system stopped successfully`);
        this.systemStatus.set(systemName, { status: 'stopped', stoppedAt: new Date().toISOString() });
        return true;
      } else {
        this.log(`❌ Failed to stop ${systemName} system: ${stopResult.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Error stopping ${systemName} system: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restartSystem(systemName) {
    try {
      this.log(`🔄 Restarting ${systemName} redundancy system...`);
      
      const restartResult = await this.runCommand("pm2", ["restart", `redundancy-${systemName}`]);
      
      if (restartResult.status === 0) {
        this.log(`✅ ${systemName} redundancy system restarted successfully`);
        this.systemStatus.set(systemName, { status: 'running', restartedAt: new Date().toISOString() });
        return true;
      } else {
        this.log(`❌ Failed to restart ${systemName} system: ${stopResult.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Error restarting ${systemName} system: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkSystemHealth(systemName, systemConfig) {
    try {
      this.log(`🔍 Checking health of ${systemName} system...`);
      
      // Check if the PM2 process is running
      const statusResult = await this.runCommand("pm2", ["show", `redundancy-${systemName}`]);
      
      if (statusResult.status === 0) {
        const output = statusResult.stdout;
        
        if (output.includes('status: online')) {
          this.log(`✅ ${systemName} system is healthy`);
          this.systemStatus.set(systemName, { status: 'healthy', lastCheck: new Date().toISOString() });
          
          // Reset failure count
          this.failureCounts.set(systemName, 0);
          
          return true;
        } else if (output.includes('status: errored')) {
          this.log(`❌ ${systemName} system has errors`, "ERROR");
          this.systemStatus.set(systemName, { status: 'errored', lastCheck: new Date().toISOString() });
          
          // Increment failure count
          const currentFailures = this.failureCounts.get(systemName) || 0;
          this.failureCounts.set(systemName, currentFailures + 1);
          
          return false;
        } else {
          this.log(`⚠️ ${systemName} system has unknown status`, "WARN");
          this.systemStatus.set(systemName, { status: 'unknown', lastCheck: new Date().toISOString() });
          return false;
        }
      } else {
        this.log(`❌ ${systemName} system not found in PM2`, "ERROR");
        this.systemStatus.set(systemName, { status: 'not_found', lastCheck: new Date().toISOString() });
        
        // Increment failure count
        const currentFailures = this.failureCounts.get(systemName) || 0;
        this.failureCounts.set(systemName, currentFailures + 1);
        
        return false;
      }
    } catch (error) {
      this.log(`❌ Health check failed for ${systemName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performSystemRecovery(systemName, systemConfig) {
    try {
      this.log(`🔄 Performing recovery for ${systemName} system...`);
      
      const failureCount = this.failureCounts.get(systemName) || 0;
      
      if (failureCount >= systemConfig.maxFailures) {
        this.log(`⚠️ ${systemName} system has exceeded failure threshold (${failureCount}/${systemConfig.maxFailures})`, "WARN");
        
        // Stop the system
        await this.stopSystem(systemName);
        
        // Wait a moment
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Start the system again
        const startSuccess = await this.startSystem(systemName, systemConfig);
        
        if (startSuccess) {
          this.log(`✅ ${systemName} system recovery successful`);
          this.failureCounts.set(systemName, 0);
          return true;
        } else {
          this.log(`❌ ${systemName} system recovery failed`, "ERROR");
          return false;
        }
      } else {
        this.log(`⚠️ ${systemName} system failure count (${failureCount}) below threshold, attempting restart`);
        
        // Try a simple restart first
        const restartSuccess = await this.restartSystem(systemName);
        
        if (restartSuccess) {
          this.log(`✅ ${systemName} system restart successful`);
          return true;
        } else {
          this.log(`❌ ${systemName} system restart failed`, "ERROR");
          return false;
        }
      }
    } catch (error) {
      this.log(`❌ Recovery failed for ${systemName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performMasterHealthCheck() {
    this.log("🚀 Starting master health check...");
    
    const results = {
      timestamp: new Date().toISOString(),
      systems: {},
      overall: true
    };
    
    for (const [systemName, systemConfig] of Object.entries(this.config.systems)) {
      if (systemConfig.enabled) {
        const isHealthy = await this.checkSystemHealth(systemName, systemConfig);
        results.systems[systemName] = {
          healthy: isHealthy,
          status: this.systemStatus.get(systemName) || {},
          failureCount: this.failureCounts.get(systemName) || 0
        };
        
        if (!isHealthy) {
          results.overall = false;
          
          // Trigger recovery if enabled
          if (this.config.orchestration.autoRecovery) {
            await this.performSystemRecovery(systemName, systemConfig);
          }
        }
      }
    }
    
    // Log results
    this.log("📊 Master Health Check Results:");
    this.log(`  Overall Status: ${results.overall ? '✅' : '❌'}`);
    
    for (const [systemName, systemResult] of Object.entries(results.systems)) {
      const status = systemResult.healthy ? '✅' : '❌';
      const failures = systemResult.failureCount;
      this.log(`  ${systemName}: ${status} (failures: ${failures})`);
    }
    
    // Save results
    this.saveHealthCheckResults(results);
    
    return results;
  }

  saveHealthCheckResults(results) {
    try {
      const resultsFile = path.join(this.config.logging.logDir, "master-orchestrator-health-check-results.json");
      const existingResults = fs.existsSync(resultsFile) ? 
        JSON.parse(fs.readFileSync(resultsFile, 'utf8')) : [];
      
      existingResults.push(results);
      
      // Keep only last 100 results
      if (existingResults.length > 100) {
        existingResults.splice(0, existingResults.length - 100);
      }
      
      fs.writeFileSync(resultsFile, JSON.stringify(existingResults, null, 2));
    } catch (error) {
      this.log(`⚠️ Could not save health check results: ${error.message}`, "WARN");
    }
  }

  async startAllSystems() {
    this.log("🚀 Starting all redundancy systems...");
    
    const startupResults = {};
    
    for (const [systemName, systemConfig] of Object.entries(this.config.systems)) {
      if (systemConfig.enabled) {
        this.log(`🚀 Starting ${systemName} system...`);
        const success = await this.startSystem(systemName, systemConfig);
        startupResults[systemName] = success;
        
        if (success) {
          // Wait before starting next system to avoid overwhelming the system
          await new Promise(resolve => setTimeout(resolve, this.config.orchestration.systemStartupDelay));
        }
      }
    }
    
    // Log startup results
    this.log("📊 System Startup Results:");
    for (const [systemName, success] of Object.entries(startupResults)) {
      const status = success ? '✅' : '❌';
      this.log(`  ${systemName}: ${status}`);
    }
    
    return startupResults;
  }

  async stopAllSystems() {
    this.log("🛑 Stopping all redundancy systems...");
    
    const stopResults = {};
    
    for (const [systemName, systemConfig] of Object.entries(this.config.systems)) {
      if (systemConfig.enabled) {
        this.log(`🛑 Stopping ${systemName} system...`);
        const success = await this.stopSystem(systemName);
        stopResults[systemName] = success;
      }
    }
    
    // Log stop results
    this.log("📊 System Stop Results:");
    for (const [systemName, success] of Object.entries(stopResults)) {
      const status = success ? '✅' : '❌';
      this.log(`  ${systemName}: ${status}`);
    }
    
    return stopResults;
  }

  async restartAllSystems() {
    this.log("🔄 Restarting all redundancy systems...");
    
    const restartResults = {};
    
    for (const [systemName, systemConfig] of Object.entries(this.config.systems)) {
      if (systemConfig.enabled) {
        this.log(`🔄 Restarting ${systemName} system...`);
        const success = await this.restartSystem(systemName);
        restartResults[systemName] = success;
        
        if (success) {
          // Wait before restarting next system
          await new Promise(resolve => setTimeout(resolve, this.config.orchestration.systemStartupDelay));
        }
      }
    }
    
    // Log restart results
    this.log("📊 System Restart Results:");
    for (const [systemName, success] of Object.entries(restartResults)) {
      const status = success ? '✅' : '❌';
      this.log(`  ${systemName}: ${status}`);
    }
    
    return restartResults;
  }

  async getSystemStatus() {
    const status = {};
    
    for (const [systemName, systemConfig] of Object.entries(this.config.systems)) {
      if (systemConfig.enabled) {
        status[systemName] = {
          config: systemConfig,
          status: this.systemStatus.get(systemName) || {},
          failureCount: this.failureCounts.get(systemName) || 0,
          enabled: systemConfig.enabled
        };
      }
    }
    
    return status;
  }

  initializeOrchestration() {
    this.log("🔧 Initializing master redundancy orchestrator...");
    
    // Start all systems
    this.startAllSystems().then(() => {
      this.log("✅ All systems started successfully");
      
      // Perform initial health check
      this.performMasterHealthCheck();
      
      // Set up periodic health checks
      setInterval(() => {
        this.performMasterHealthCheck();
      }, this.config.orchestration.masterHealthCheckInterval);
      
      // Set up individual system health checks
      for (const [systemName, systemConfig] of Object.entries(this.config.systems)) {
        if (systemConfig.enabled) {
          setInterval(() => {
            this.checkSystemHealth(systemName, systemConfig);
          }, systemConfig.healthCheckInterval);
        }
      }
      
      this.log("✅ Master redundancy orchestrator initialized successfully");
    }).catch((error) => {
      this.log(`❌ Failed to initialize orchestrator: ${error.message}`, "ERROR");
    });
  }

  async gracefulShutdown() {
    this.log("🔄 Shutting down master redundancy orchestrator...");
    
    // Stop all systems
    await this.stopAllSystems();
    
    // Save PM2 configuration
    await this.runCommand("pm2", ["save"]);
    
    this.log("✅ Master redundancy orchestrator shut down gracefully");
    process.exit(0);
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  if (global.masterOrchestrator) {
    global.masterOrchestrator.gracefulShutdown();
  } else {
    process.exit(0);
  }
});

process.on('SIGTERM', () => {
  if (global.masterOrchestrator) {
    global.masterOrchestrator.gracefulShutdown();
  } else {
    process.exit(0);
  }
});

// Start the orchestrator
if (require.main === module) {
  global.masterOrchestrator = new MasterRedundancyOrchestrator();
  
  // Keep the process alive
  setInterval(() => {
    // Heartbeat
  }, 60000);
}

module.exports = MasterRedundancyOrchestrator;