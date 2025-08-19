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
          checkInterval: 30000,
          maxFailures: 3
        },
        githubActions: {
          enabled: true,
          script: "automation/enhanced-github-actions-redundancy.cjs",
          checkInterval: 60000,
          maxFailures: 3
        },
        netlifyFunctions: {
          enabled: true,
          script: "automation/enhanced-netlify-functions-redundancy.cjs",
          checkInterval: 120000,
          maxFailures: 3
        }
      },
      orchestration: {
        checkInterval: 45000, // Every 45 seconds
        healthReportInterval: 300000, // Every 5 minutes
        autoRecovery: true,
        escalationThreshold: 5,
        logDir: "automation/logs",
        logFile: "master-orchestrator.log"
      }
    };
    
    this.ensureLogDirectory();
    this.systems = {};
    this.systemHealth = {};
    this.orchestrationInterval = null;
    this.healthReportInterval = null;
    this.totalFailures = 0;
    this.lastOrchestration = null;
    
    this.initializeSystems();
    this.startOrchestration();
  }

  ensureLogDirectory() {
    if (!fs.existsSync(this.config.orchestration.logDir)) {
      fs.mkdirSync(this.config.orchestration.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    try {
      const logPath = path.join(this.config.orchestration.logDir, this.config.orchestration.logFile);
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

  async initializeSystems() {
    this.log("🚀 Initializing master redundancy orchestrator...");
    
    for (const [systemName, systemConfig] of Object.entries(this.config.systems)) {
      if (systemConfig.enabled) {
        this.log(`🔧 Initializing ${systemName} redundancy system...`);
        
        try {
          // Check if the script exists
          if (!fs.existsSync(systemConfig.script)) {
            this.log(`❌ Script not found: ${systemConfig.script}`, "ERROR");
            continue;
          }

          // Initialize system health tracking
          this.systemHealth[systemName] = {
            status: "initializing",
            lastCheck: null,
            failureCount: 0,
            lastFailure: null,
            health: null
          };

          this.log(`✅ ${systemName} system initialized`);
        } catch (error) {
          this.log(`❌ Failed to initialize ${systemName}: ${error.message}`, "ERROR");
        }
      }
    }
    
    this.log("✅ All systems initialized");
  }

  async checkSystemHealth(systemName) {
    try {
      const systemConfig = this.config.systems[systemName];
      if (!systemConfig || !systemConfig.enabled) {
        return { healthy: false, error: "System not enabled" };
      }

      // Check if the system script is running
      const scriptName = path.basename(systemConfig.script, path.extname(systemConfig.script));
      const result = await this.runCommand("pgrep", ["-f", scriptName]);
      
      if (result.status === 0) {
        // System is running, check its health
        this.systemHealth[systemName].status = "running";
        this.systemHealth[systemName].lastCheck = new Date().toISOString();
        
        // Try to get status from the system if it's accessible
        try {
          // This would require the systems to expose status endpoints
          // For now, we'll assume they're healthy if running
          this.systemHealth[systemName].health = { healthy: true, status: "running" };
          return { healthy: true, status: "running" };
        } catch (error) {
          this.log(`⚠️ Could not get detailed health from ${systemName}: ${error.message}`, "WARN");
          return { healthy: true, status: "running" };
        }
      } else {
        // System is not running
        this.systemHealth[systemName].status = "stopped";
        this.systemHealth[systemName].lastCheck = new Date().toISOString();
        this.systemHealth[systemName].failureCount++;
        this.systemHealth[systemName].lastFailure = new Date().toISOString();
        
        return { healthy: false, status: "stopped", needsStart: true };
      }
    } catch (error) {
      this.log(`❌ Error checking ${systemName} health: ${error.message}`, "ERROR");
      this.systemHealth[systemName].status = "error";
      this.systemHealth[systemName].failureCount++;
      this.systemHealth[systemName].lastFailure = new Date().toISOString();
      
      return { healthy: false, status: "error", error: error.message };
    }
  }

  async startSystem(systemName) {
    try {
      const systemConfig = this.config.systems[systemName];
      if (!systemConfig || !systemConfig.enabled) {
        return false;
      }

      this.log(`🚀 Starting ${systemName} redundancy system...`);
      
      // Start the system in the background
      const result = await this.runCommand("node", [systemConfig.script], {
        timeout: 60000 // 1 minute timeout for startup
      });
      
      if (result.status === 0) {
        this.log(`✅ ${systemName} system started successfully`);
        this.systemHealth[systemName].status = "starting";
        return true;
      } else {
        this.log(`❌ Failed to start ${systemName}: ${result.stderr}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Error starting ${systemName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restartSystem(systemName) {
    try {
      this.log(`🔄 Restarting ${systemName} redundancy system...`);
      
      // First try to stop any existing processes
      const scriptName = path.basename(this.config.systems[systemName].script, path.extname(this.config.systems[systemName].script));
      await this.runCommand("pkill", ["-f", scriptName]);
      
      // Wait a moment
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Start the system
      const started = await this.startSystem(systemName);
      
      if (started) {
        this.systemHealth[systemName].failureCount = 0;
        this.log(`✅ ${systemName} system restarted successfully`);
        return true;
      } else {
        this.log(`❌ Failed to restart ${systemName}`, "ERROR");
        return false;
      }
    } catch (error) {
      this.log(`❌ Error restarting ${systemName}: ${error.message}`, "ERROR");
      return false;
    }
  }

  async performSystemRecovery(systemName) {
    try {
      this.log(`🔄 Performing recovery for ${systemName} system...`);
      
      const systemConfig = this.config.systems[systemName];
      if (this.systemHealth[systemName].failureCount >= systemConfig.maxFailures) {
        this.log(`🚨 ${systemName} has exceeded max failures, performing full recovery...`, "ERROR");
        
        // Full recovery: restart the system
        const recovered = await this.restartSystem(systemName);
        
        if (recovered) {
          this.systemHealth[systemName].failureCount = 0;
          this.log(`✅ ${systemName} recovery completed successfully`);
          return true;
        } else {
          this.log(`❌ ${systemName} recovery failed`, "ERROR");
          return false;
        }
      } else {
        // Simple restart
        return await this.restartSystem(systemName);
      }
    } catch (error) {
      this.log(`❌ Error during ${systemName} recovery: ${error.message}`, "ERROR");
      return false;
    }
  }

  async orchestrateSystems() {
    try {
      this.log("🎭 Orchestrating redundancy systems...");
      
      let allHealthy = true;
      const actionsTaken = [];

      for (const [systemName, systemConfig] of Object.entries(this.config.systems)) {
        if (!systemConfig.enabled) continue;

        const health = await this.checkSystemHealth(systemName);
        
        if (!health.healthy) {
          allHealthy = false;
          this.totalFailures++;
          
          this.log(`⚠️ ${systemName} is unhealthy: ${health.status}`, "WARN");
          
          if (this.config.orchestration.autoRecovery) {
            if (health.needsStart) {
              this.log(`🚀 Starting ${systemName}...`);
              const started = await this.startSystem(systemName);
              if (started) {
                actionsTaken.push(`Started ${systemName}`);
              }
            } else {
              this.log(`🔄 Restarting ${systemName}...`);
              const restarted = await this.restartSystem(systemName);
              if (restarted) {
                actionsTaken.push(`Restarted ${systemName}`);
              }
            }
          }
        } else {
          // Reset failure count for healthy systems
          if (this.systemHealth[systemName].failureCount > 0) {
            this.systemHealth[systemName].failureCount = 0;
            this.log(`✅ ${systemName} recovered, resetting failure count`);
          }
        }
      }

      this.lastOrchestration = new Date().toISOString();
      
      if (actionsTaken.length > 0) {
        this.log(`📋 Actions taken: ${actionsTaken.join(", ")}`);
      }
      
      if (allHealthy) {
        this.log("✅ All systems are healthy");
      } else {
        this.log(`⚠️ Some systems need attention (total failures: ${this.totalFailures})`);
      }

      return { allHealthy, actionsTaken, totalFailures: this.totalFailures };
    } catch (error) {
      this.log(`❌ Orchestration error: ${error.message}`, "ERROR");
      return { allHealthy: false, actionsTaken: [], error: error.message };
    }
  }

  async generateHealthReport() {
    try {
      this.log("📊 Generating comprehensive health report...");
      
      const report = {
        timestamp: new Date().toISOString(),
        overall: {
          totalSystems: Object.keys(this.config.systems).length,
          healthySystems: 0,
          unhealthySystems: 0,
          totalFailures: this.totalFailures
        },
        systems: {},
        orchestration: {
          lastCheck: this.lastOrchestration,
          status: "active"
        }
      };

      for (const [systemName, health] of Object.entries(this.systemHealth)) {
        const systemHealth = await this.checkSystemHealth(systemName);
        report.systems[systemName] = {
          status: systemHealth.healthy ? "healthy" : "unhealthy",
          lastCheck: health.lastCheck,
          failureCount: health.failureCount,
          lastFailure: health.lastFailure,
          details: systemHealth
        };

        if (systemHealth.healthy) {
          report.overall.healthySystems++;
        } else {
          report.overall.unhealthySystems++;
        }
      }

      // Save report to file
      const reportPath = path.join(this.config.orchestration.logDir, `health-report-${new Date().toISOString().split('T')[0]}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      this.log(`📋 Health report saved to ${reportPath}`);
      this.log(`📊 Overall status: ${report.overall.healthySystems}/${report.overall.totalSystems} systems healthy`);
      
      return report;
    } catch (error) {
      this.log(`❌ Error generating health report: ${error.message}`, "ERROR");
      return null;
    }
  }

  startOrchestration() {
    this.log("🎭 Starting master redundancy orchestration...");
    
    // Start periodic orchestration
    this.orchestrationInterval = setInterval(async () => {
      await this.orchestrateSystems();
    }, this.config.orchestration.checkInterval);

    // Start periodic health reporting
    this.healthReportInterval = setInterval(async () => {
      await this.generateHealthReport();
    }, this.config.orchestration.healthReportInterval);

    this.log("✅ Master redundancy orchestration started");
  }

  stopOrchestration() {
    if (this.orchestrationInterval) {
      clearInterval(this.orchestrationInterval);
      this.orchestrationInterval = null;
    }
    
    if (this.healthReportInterval) {
      clearInterval(this.healthReportInterval);
      this.healthReportInterval = null;
    }
    
    this.log("🛑 Master redundancy orchestration stopped");
  }

  async getStatus() {
    const status = {
      orchestrator: {
        status: "active",
        lastOrchestration: this.lastOrchestration,
        totalFailures: this.totalFailures
      },
      systems: this.systemHealth,
      config: this.config,
      timestamp: new Date().toISOString()
    };

    return status;
  }

  async shutdown() {
    this.log("🛑 Shutting down master redundancy orchestrator...");
    
    this.stopOrchestration();
    
    // Gracefully stop all systems
    for (const [systemName, systemConfig] of Object.entries(this.config.systems)) {
      if (systemConfig.enabled) {
        try {
          const scriptName = path.basename(systemConfig.script, path.extname(systemConfig.script));
          await this.runCommand("pkill", ["-f", scriptName]);
          this.log(`🛑 Stopped ${systemName} system`);
        } catch (error) {
          this.log(`⚠️ Error stopping ${systemName}: ${error.message}`, "WARN");
        }
      }
    }
    
    this.log("✅ Master redundancy orchestrator shutdown complete");
  }
}

// Handle process signals
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down...');
  if (global.masterOrchestrator) {
    global.masterOrchestrator.shutdown().then(() => process.exit(0));
  } else {
    process.exit(0);
  }
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down...');
  if (global.masterOrchestrator) {
    global.masterOrchestrator.shutdown().then(() => process.exit(0));
  } else {
    process.exit(0);
  }
});

// Start the orchestrator
const masterOrchestrator = new MasterRedundancyOrchestrator();
global.masterOrchestrator = masterOrchestrator;

// Export for potential external use
module.exports = MasterRedundancyOrchestrator;