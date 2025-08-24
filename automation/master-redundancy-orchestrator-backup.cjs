#!/usr/bin/env node
"use strict";

const { EnhancedPM2Redundancy } = require("./enhanced-pm2-redundancy.cjs");
const { EnhancedGitHubActionsRedundancy } = require("./enhanced-github-actions-redundancy.cjs");
const { EnhancedNetlifyFunctionsRedundancy } = require("./enhanced-netlify-functions-redundancy.cjs");

const fs = require("fs");
const path = require("path");

class MasterRedundancyOrchestrator {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "master-redundancy-orchestrator.log");
    this.ensureLogDir();
    
    this.config = {
      orchestrationInterval: 60000, // 1 minute
      healthCheckInterval: 300000, // 5 minutes
      emergencyThreshold: 2, // Number of systems that can fail before emergency mode
      autoRecovery: true,
      notificationLevel: "WARN", // INFO, WARN, ERROR
      systems: {
        pm2: {
          enabled: true,
          priority: "HIGH",
          checkInterval: 30000
        },
        githubActions: {
          enabled: true,
          priority: "MEDIUM",
          checkInterval: 60000
        },
        netlifyFunctions: {
          enabled: true,
          priority: "MEDIUM",
          checkInterval: 120000
        }
      }
    };
    
    // Initialize redundancy systems
    this.pm2Redundancy = new EnhancedPM2Redundancy();
    this.githubActionsRedundancy = new EnhancedGitHubActionsRedundancy();
    this.netlifyFunctionsRedundancy = new EnhancedNetlifyFunctionsRedundancy();
    
    this.orchestrating = false;
    this.orchestrationInterval = null;
    this.healthCheckInterval = null;
    this.systemStatus = new Map();
    this.emergencyMode = false;
    this.recoveryAttempts = 0;
    this.maxRecoveryAttempts = 3;
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [MASTER] ${message}`;
    console.log(logMessage);
    
    try {
      fs.appendFileSync(this.logFile, logMessage + "\n");
    } catch (error) {
      console.error(`Failed to write to log file: ${error.message}`);
    }
  }

  async startPM2Redundancy() {
    try {
      if (this.config.systems.pm2.enabled) {
        this.log("Starting PM2 redundancy system...");
        await this.pm2Redundancy.startMonitoring();
        this.systemStatus.set("pm2", { status: "running", lastCheck: new Date() });
        this.log("✅ PM2 redundancy system started");
        return true;
      }
      return false;
    } catch (error) {
      this.log(`❌ Failed to start PM2 redundancy: ${error.message}`, "ERROR");
      this.systemStatus.set("pm2", { status: "failed", lastCheck: new Date(), error: error.message });
      return false;
    }
  }

  async startGitHubActionsRedundancy() {
    try {
      if (this.config.systems.githubActions.enabled) {
        this.log("Starting GitHub Actions redundancy system...");
        await this.githubActionsRedundancy.startMonitoring();
        this.systemStatus.set("githubActions", { status: "running", lastCheck: new Date() });
        this.log("✅ GitHub Actions redundancy system started");
        return true;
      }
      return false;
    } catch (error) {
      this.log(`❌ Failed to start GitHub Actions redundancy: ${error.message}`, "ERROR");
      this.systemStatus.set("githubActions", { status: "failed", lastCheck: new Date(), error: error.message });
      return false;
    }
  }

  async startNetlifyFunctionsRedundancy() {
    try {
      if (this.config.systems.netlifyFunctions.enabled) {
        this.log("Starting Netlify Functions redundancy system...");
        await this.netlifyFunctionsRedundancy.startMonitoring();
        this.systemStatus.set("netlifyFunctions", { status: "running", lastCheck: new Date() });
        this.log("✅ Netlify Functions redundancy system started");
        return true;
      }
      return false;
    } catch (error) {
      this.log(`❌ Failed to start Netlify Functions redundancy: ${error.message}`, "ERROR");
      this.systemStatus.set("netlifyFunctions", { status: "failed", lastCheck: new Date(), error: error.message });
      return false;
    }
  }

  async startAllSystems() {
    this.log("🚀 Starting all redundancy systems...");
    
    const results = await Promise.allSettled([
      this.startPM2Redundancy(),
      this.startGitHubActionsRedundancy(),
      this.startNetlifyFunctionsRedundancy()
    ]);
    
    let successCount = 0;
    results.forEach((result, index) => {
      const systemNames = ["pm2", "githubActions", "netlifyFunctions"];
      if (result.status === "fulfilled" && result.value) {
        successCount++;
      } else {
        this.log(`❌ System ${systemNames[index]} failed to start`, "ERROR");
      }
    });
    
    this.log(`📊 Started ${successCount}/${results.length} redundancy systems`);
    return successCount === results.length;
  }

  async stopAllSystems() {
    this.log("🛑 Stopping all redundancy systems...");
    
    try {
      await this.pm2Redundancy.stopMonitoring();
      await this.githubActionsRedundancy.stopMonitoring();
      await this.netlifyFunctionsRedundancy.stopMonitoring();
      
      this.log("✅ All redundancy systems stopped");
      return true;
    } catch (error) {
      this.log(`❌ Error stopping systems: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkSystemHealth(systemName) {
    try {
      let status = null;
      
      switch (systemName) {
        case "pm2":
          status = await this.pm2Redundancy.checkAllProcesses();
          break;
        case "githubActions":
          status = await this.githubActionsRedundancy.checkAllWorkflows();
          break;
        case "netlifyFunctions":
          status = await this.netlifyFunctionsRedundancy.checkAllFunctions();
          break;
        default:
          this.log(`❌ Unknown system: ${systemName}`, "ERROR");
          return false;
      }
      
      this.systemStatus.set(systemName, {
        status: status ? "healthy" : "unhealthy",
        lastCheck: new Date()
      });
      
      return status;
    } catch (error) {
      this.log(`❌ Error checking ${systemName} health: ${error.message}`, "ERROR");
      this.systemStatus.set(systemName, {
        status: "error",
        lastCheck: new Date(),
        error: error.message
      });
      return false;
    }
  }

  async checkAllSystemsHealth() {
    this.log("🔍 Performing comprehensive system health check...");
    
    const healthResults = await Promise.allSettled([
      this.checkSystemHealth("pm2"),
      this.checkSystemHealth("githubActions"),
      this.checkSystemHealth("netlifyFunctions")
    ]);
    
    let healthyCount = 0;
    const systemNames = ["pm2", "githubActions", "netlifyFunctions"];
    
    healthResults.forEach((result, index) => {
      const systemName = systemNames[index];
      if (result.status === "fulfilled" && result.value) {
        healthyCount++;
        this.log(`✅ ${systemName} system is healthy`);
      } else {
        this.log(`❌ ${systemName} system is unhealthy`);
      }
    });
    
    this.log(`📊 System health check complete: ${healthyCount}/${healthResults.length} systems healthy`);
    
    // Check if we need to enter emergency mode
    const unhealthyCount = healthResults.length - healthyCount;
    if (unhealthyCount >= this.config.emergencyThreshold) {
      await this.enterEmergencyMode();
    } else if (this.emergencyMode) {
      await this.exitEmergencyMode();
    }
    
    return healthyCount === healthResults.length;
  }

  async enterEmergencyMode() {
    if (this.emergencyMode) {
      return; // Already in emergency mode
    }
    
    this.log("🚨 ENTERING EMERGENCY MODE - Multiple systems unhealthy!", "ERROR");
    this.emergencyMode = true;
    
    try {
      // Attempt emergency recovery
      if (this.config.autoRecovery && this.recoveryAttempts < this.maxRecoveryAttempts) {
        this.recoveryAttempts++;
        this.log(`🔄 Attempting emergency recovery (attempt ${this.recoveryAttempts}/${this.maxRecoveryAttempts})...`);
        
        await this.performEmergencyRecovery();
      } else {
        this.log("⚠️ Auto-recovery disabled or max attempts reached", "WARN");
      }
    } catch (error) {
      this.log(`❌ Emergency recovery failed: ${error.message}`, "ERROR");
    }
  }

  async exitEmergencyMode() {
    if (!this.emergencyMode) {
      return; // Not in emergency mode
    }
    
    this.log("✅ EXITING EMERGENCY MODE - Systems recovered", "INFO");
    this.emergencyMode = false;
    this.recoveryAttempts = 0;
  }

  async performEmergencyRecovery() {
    this.log("🆘 Performing emergency recovery procedures...");
    
    try {
      // Emergency PM2 restart
      this.log("🔄 Emergency PM2 restart...");
      await this.pm2Redundancy.emergencyRestart();
      
      // Emergency GitHub Actions trigger
      this.log("🔄 Emergency GitHub Actions trigger...");
      await this.githubActionsRedundancy.emergencyTrigger();
      
      // Emergency Netlify Functions regeneration
      this.log("🔄 Emergency Netlify Functions regeneration...");
      await this.netlifyFunctionsRedundancy.emergencyRegeneration();
      
      this.log("✅ Emergency recovery procedures completed");
      return true;
    } catch (error) {
      this.log(`❌ Emergency recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startOrchestration() {
    if (this.orchestrating) {
      this.log("Orchestration already active");
      return;
    }
    
    this.log("🎼 Starting master redundancy orchestration...");
    this.orchestrating = true;
    
    // Start all systems
    await this.startAllSystems();
    
    // Start periodic orchestration
    this.orchestrationInterval = setInterval(async () => {
      try {
        await this.checkAllSystemsHealth();
      } catch (error) {
        this.log(`Error during orchestration: ${error.message}`, "ERROR");
      }
    }, this.config.orchestrationInterval);
    
    // Start periodic health checks
    this.healthCheckInterval = setInterval(async () => {
      try {
        await this.checkAllSystemsHealth();
      } catch (error) {
        this.log(`Error during health check: ${error.message}`, "ERROR");
      }
    }, this.config.healthCheckInterval);
    
    this.log("🎼 Master redundancy orchestration started");
  }

  async stopOrchestration() {
    if (this.orchestrationInterval) {
      clearInterval(this.orchestrationInterval);
      this.orchestrationInterval = null;
    }
    
    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval);
      this.healthCheckInterval = null;
    }
    
    this.orchestrating = false;
    this.log("🎼 Master redundancy orchestration stopped");
  }

  getSystemStatus() {
    const status = {};
    
    for (const [systemName, systemInfo] of this.systemStatus) {
      status[systemName] = {
        ...systemInfo,
        lastCheck: systemInfo.lastCheck.toISOString()
      };
    }
    
    return status;
  }

  getOrchestratorStatus() {
    return {
      orchestrating: this.orchestrating,
      emergencyMode: this.emergencyMode,
      recoveryAttempts: this.recoveryAttempts,
      maxRecoveryAttempts: this.maxRecoveryAttempts,
      systemStatus: this.getSystemStatus(),
      config: this.config
    };
  }

  async generateHealthReport() {
    this.log("📊 Generating comprehensive health report...");
    
    const report = {
      timestamp: new Date().toISOString(),
      orchestrator: this.getOrchestratorStatus(),
      pm2: this.pm2Redundancy.getStatus(),
      githubActions: this.githubActionsRedundancy.getStatus(),
      netlifyFunctions: this.netlifyFunctionsRedundancy.getStatus()
    };
    
    const reportPath = path.join(this.logDir, `health-report-${new Date().toISOString().split('T')[0]}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Health report generated: ${reportPath}`);
    return report;
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new MasterRedundancyOrchestrator();
  
  const command = process.argv[2];
  
  switch (command) {
    case "start":
      orchestrator.startOrchestration();
      break;
    case "stop":
      orchestrator.stopOrchestration();
      break;
    case "health":
      orchestrator.checkAllSystemsHealth();
      break;
    case "emergency":
      orchestrator.performEmergencyRecovery();
      break;
    case "report":
      orchestrator.generateHealthReport();
      break;
    case "status":
      console.log(JSON.stringify(orchestrator.getOrchestratorStatus(), null, 2));
      break;
    case "systems":
      console.log(JSON.stringify(orchestrator.getSystemStatus(), null, 2));
      break;
    default:
      console.log("Usage: node master-redundancy-orchestrator.cjs [start|stop|health|emergency|report|status|systems]");
      process.exit(1);
  }
}

module.exports = { MasterRedundancyOrchestrator };