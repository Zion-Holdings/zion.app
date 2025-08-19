#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

// Import the enhanced redundancy classes
const { EnhancedPM2Redundancy } = require("./enhanced-pm2-redundancy.cjs");
const { EnhancedGitHubActionsRedundancy } = require("./enhanced-github-actions-redundancy.cjs");
const { EnhancedNetlifyFunctionsRedundancy } = require("./enhanced-netlify-functions-redundancy.cjs");

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
          priority: 1,
          autoRecovery: true,
          healthThreshold: 80
        },
        githubActions: {
          enabled: true,
          priority: 2,
          autoRecovery: true,
          healthThreshold: 80
        },
        netlifyFunctions: {
          enabled: true,
          priority: 3,
          autoRecovery: true,
          healthThreshold: 80
        }
      },
      orchestration: {
        checkInterval: 60000, // 1 minute
        maxConcurrentRecoveries: 2,
        recoveryTimeout: 300000, // 5 minutes
        emergencyMode: false,
        loadBalancing: true,
        performanceMonitoring: true
      },
      monitoring: {
        dashboard: true,
        alerts: true,
        metrics: true,
        reporting: true
      }
    };
    
    this.systems = new Map();
    this.orchestration = false;
    this.checkInterval = null;
    this.systemStatus = new Map();
    this.recoveryQueue = [];
    this.metrics = {
      totalChecks: 0,
      successfulRecoveries: 0,
      failedRecoveries: 0,
      systemUptime: Date.now(),
      lastOrchestration: null
    };
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] [ORCHESTRATOR] ${message}`;
    console.log(logEntry);
    
    try {
      fs.appendFileSync(this.logFile, logEntry + "\n");
    } catch (error) {
      console.error(`Failed to write to log file: ${error.message}`);
    }
  }

  async initializeSystems() {
    try {
      this.log("Initializing redundancy systems...", "INFO");
      
      // Initialize PM2 redundancy
      if (this.config.systems.pm2.enabled) {
        const pm2System = new EnhancedPM2Redundancy();
        this.systems.set("pm2", pm2System);
        this.log("PM2 redundancy system initialized", "INFO");
      }
      
      // Initialize GitHub Actions redundancy
      if (this.config.systems.githubActions.enabled) {
        const githubSystem = new EnhancedGitHubActionsRedundancy();
        this.systems.set("githubActions", githubSystem);
        this.log("GitHub Actions redundancy system initialized", "INFO");
      }
      
      // Initialize Netlify Functions redundancy
      if (this.config.systems.netlifyFunctions.enabled) {
        const netlifySystem = new EnhancedNetlifyFunctionsRedundancy();
        this.systems.set("netlifyFunctions", netlifySystem);
        this.log("Netlify Functions redundancy system initialized", "INFO");
      }
      
      this.log(`Initialized ${this.systems.size} redundancy systems`, "INFO");
      return true;
    } catch (error) {
      this.log(`Failed to initialize systems: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkSystemHealth(systemName) {
    try {
      const system = this.systems.get(systemName);
      if (!system) {
        return { healthy: false, error: "System not found" };
      }
      
      let healthResult;
      
      switch (systemName) {
        case "pm2":
          healthResult = await system.performHealthCheck();
          break;
        case "githubActions":
          healthResult = await system.performHealthCheck();
          break;
        case "netlifyFunctions":
          healthResult = await system.performHealthCheck();
          break;
        default:
          return { healthy: false, error: "Unknown system type" };
      }
      
      // Store system status
      this.systemStatus.set(systemName, {
        timestamp: Date.now(),
        health: healthResult,
        healthy: healthResult.healthy,
        percentage: healthResult.percentage || 0
      });
      
      return healthResult;
    } catch (error) {
      this.log(`Health check failed for ${systemName}: ${error.message}`, "ERROR");
      return { healthy: false, error: error.message };
    }
  }

  async performOrchestratedHealthCheck() {
    try {
      this.log("Performing orchestrated health check...", "INFO");
      
      const healthResults = new Map();
      let totalSystems = 0;
      let healthySystems = 0;
      
      // Check all systems concurrently
      const healthPromises = [];
      for (const [systemName, system] of this.systems) {
        healthPromises.push(
          this.checkSystemHealth(systemName).then(result => ({ systemName, result }))
        );
      }
      
      const results = await Promise.all(healthPromises);
      
      for (const { systemName, result } of results) {
        healthResults.set(systemName, result);
        totalSystems++;
        
        if (result.healthy) {
          healthySystems++;
        } else {
          this.log(`Unhealthy system detected: ${systemName}`, "WARN");
          
          // Queue for recovery if auto-recovery is enabled
          if (this.config.systems[systemName]?.autoRecovery) {
            this.queueRecovery(systemName, result);
          }
        }
      }
      
      // Calculate overall health
      const overallHealth = totalSystems > 0 ? (healthySystems / totalSystems) * 100 : 100;
      
      this.log(`Orchestrated health check complete: ${healthySystems}/${totalSystems} systems healthy (${overallHealth.toFixed(1)}%)`, "INFO");
      
      // Update metrics
      this.metrics.totalChecks++;
      this.metrics.lastOrchestration = Date.now();
      
      // Trigger emergency mode if needed
      if (overallHealth < 50 && !this.config.orchestration.emergencyMode) {
        await this.activateEmergencyMode();
      } else if (overallHealth >= 80 && this.config.orchestration.emergencyMode) {
        await this.deactivateEmergencyMode();
      }
      
      return {
        overallHealth,
        totalSystems,
        healthySystems,
        systems: Object.fromEntries(healthResults)
      };
      
    } catch (error) {
      this.log(`Orchestrated health check failed: ${error.message}`, "ERROR");
      return { overallHealth: 0, error: error.message };
    }
  }

  queueRecovery(systemName, healthResult) {
    try {
      const recoveryItem = {
        systemName,
        healthResult,
        timestamp: Date.now(),
        priority: this.config.systems[systemName]?.priority || 999,
        attempts: 0,
        maxAttempts: 3
      };
      
      this.recoveryQueue.push(recoveryItem);
      
      // Sort by priority (lower number = higher priority)
      this.recoveryQueue.sort((a, b) => a.priority - b.priority);
      
      this.log(`Queued recovery for ${systemName} (priority: ${recoveryItem.priority})`, "INFO");
    } catch (error) {
      this.log(`Failed to queue recovery for ${systemName}: ${error.message}`, "ERROR");
    }
  }

  async processRecoveryQueue() {
    try {
      if (this.recoveryQueue.length === 0) {
        return;
      }
      
      this.log(`Processing recovery queue (${this.recoveryQueue.length} items)`, "INFO");
      
      const maxConcurrent = this.config.orchestration.maxConcurrentRecoveries;
      const activeRecoveries = [];
      
      while (this.recoveryQueue.length > 0 && activeRecoveries.length < maxConcurrent) {
        const recoveryItem = this.recoveryQueue.shift();
        
        if (recoveryItem.attempts >= recoveryItem.maxAttempts) {
          this.log(`Max recovery attempts reached for ${recoveryItem.systemName}`, "ERROR");
          this.metrics.failedRecoveries++;
          continue;
        }
        
        // Start recovery
        const recoveryPromise = this.attemptSystemRecovery(recoveryItem);
        activeRecoveries.push(recoveryPromise);
        
        // Process the promise
        recoveryPromise.then(() => {
          const index = activeRecoveries.indexOf(recoveryPromise);
          if (index > -1) {
            activeRecoveries.splice(index, 1);
          }
        });
      }
      
      // Wait for all active recoveries to complete
      if (activeRecoveries.length > 0) {
        await Promise.allSettled(activeRecoveries);
      }
      
    } catch (error) {
      this.log(`Error processing recovery queue: ${error.message}`, "ERROR");
    }
  }

  async attemptSystemRecovery(recoveryItem) {
    try {
      const { systemName, healthResult } = recoveryItem;
      recoveryItem.attempts++;
      
      this.log(`Attempting recovery for ${systemName} (attempt ${recoveryItem.attempts})`, "WARN");
      
      const system = this.systems.get(systemName);
      if (!system) {
        throw new Error("System not found");
      }
      
      let recoveryResult;
      
      switch (systemName) {
        case "pm2":
          recoveryResult = await system.recoverFailedProcesses();
          break;
        case "githubActions":
          recoveryResult = await system.recoverFailedWorkflows();
          break;
        case "netlifyFunctions":
          recoveryResult = await system.recoverFailedFunctions();
          break;
        default:
          throw new Error("Unknown system type");
      }
      
      if (recoveryResult > 0) {
        this.log(`Recovery successful for ${systemName}: ${recoveryResult} items recovered`, "INFO");
        this.metrics.successfulRecoveries++;
        
        // Re-check health after recovery
        await this.checkSystemHealth(systemName);
      } else {
        this.log(`Recovery failed for ${systemName}`, "WARN");
        
        // Re-queue if we haven't reached max attempts
        if (recoveryItem.attempts < recoveryItem.maxAttempts) {
          this.recoveryQueue.push(recoveryItem);
        } else {
          this.metrics.failedRecoveries++;
        }
      }
      
    } catch (error) {
      this.log(`Recovery attempt failed for ${recoveryItem.systemName}: ${error.message}`, "ERROR");
      
      // Re-queue if we haven't reached max attempts
      if (recoveryItem.attempts < recoveryItem.maxAttempts) {
        this.recoveryQueue.push(recoveryItem);
      } else {
        this.metrics.failedRecoveries++;
      }
    }
  }

  async activateEmergencyMode() {
    try {
      this.log("ACTIVATING EMERGENCY MODE", "WARN");
      this.config.orchestration.emergencyMode = true;
      
      // Trigger emergency procedures for all systems
      for (const [systemName, system] of this.systems) {
        try {
          switch (systemName) {
            case "pm2":
              await system.emergencyRestart();
              break;
            case "githubActions":
              await system.emergencyTrigger();
              break;
            case "netlifyFunctions":
              await system.emergencyRegenerate();
              break;
          }
        } catch (error) {
          this.log(`Emergency procedure failed for ${systemName}: ${error.message}`, "ERROR");
        }
      }
      
      this.log("Emergency mode activated", "WARN");
    } catch (error) {
      this.log(`Failed to activate emergency mode: ${error.message}`, "ERROR");
    }
  }

  async deactivateEmergencyMode() {
    try {
      this.log("Deactivating emergency mode", "INFO");
      this.config.orchestration.emergencyMode = false;
    } catch (error) {
      this.log(`Failed to deactivate emergency mode: ${error.message}`, "ERROR");
    }
  }

  async startOrchestration() {
    if (this.orchestration) {
      this.log("Orchestration already active", "WARN");
      return;
    }
    
    try {
      this.log("Starting master redundancy orchestration...", "INFO");
      
      // Initialize systems
      const initSuccess = await this.initializeSystems();
      if (!initSuccess) {
        throw new Error("Failed to initialize systems");
      }
      
      // Initial health check
      await this.performOrchestratedHealthCheck();
      
      // Set up periodic orchestration
      this.checkInterval = setInterval(async () => {
        try {
          await this.performOrchestratedHealthCheck();
          await this.processRecoveryQueue();
        } catch (error) {
          this.log(`Orchestration cycle error: ${error.message}`, "ERROR");
        }
      }, this.config.orchestration.checkInterval);
      
      this.orchestration = true;
      this.log("Master redundancy orchestration started", "INFO");
      
    } catch (error) {
      this.log(`Failed to start orchestration: ${error.message}`, "ERROR");
      throw error;
    }
  }

  async stopOrchestration() {
    try {
      if (this.checkInterval) {
        clearInterval(this.checkInterval);
        this.checkInterval = null;
      }
      
      // Stop all systems
      for (const [systemName, system] of this.systems) {
        try {
          if (system.stopMonitoring) {
            await system.stopMonitoring();
          }
        } catch (error) {
          this.log(`Error stopping ${systemName}: ${error.message}`, "ERROR");
        }
      }
      
      this.orchestration = false;
      this.log("Master redundancy orchestration stopped", "INFO");
      
    } catch (error) {
      this.log(`Error stopping orchestration: ${error.message}`, "ERROR");
    }
  }

  async startAllSystems() {
    try {
      this.log("Starting all redundancy systems...", "INFO");
      
      for (const [systemName, system] of this.systems) {
        try {
          if (system.startMonitoring) {
            await system.startMonitoring();
            this.log(`Started ${systemName} system`, "INFO");
          }
        } catch (error) {
          this.log(`Failed to start ${systemName}: ${error.message}`, "ERROR");
        }
      }
      
      this.log("All systems started", "INFO");
      
    } catch (error) {
      this.log(`Failed to start all systems: ${error.message}`, "ERROR");
    }
  }

  async stopAllSystems() {
    try {
      this.log("Stopping all redundancy systems...", "INFO");
      
      for (const [systemName, system] of this.systems) {
        try {
          if (system.stopMonitoring) {
            await system.stopMonitoring();
            this.log(`Stopped ${systemName} system`, "INFO");
          }
        } catch (error) {
          this.log(`Failed to stop ${systemName}: ${error.message}`, "ERROR");
        }
      }
      
      this.log("All systems stopped", "INFO");
      
    } catch (error) {
      this.log(`Failed to stop all systems: ${error.message}`, "ERROR");
    }
  }

  getStatus() {
    return {
      orchestration: this.orchestration,
      systems: Object.fromEntries(this.systemStatus),
      recoveryQueue: this.recoveryQueue.length,
      metrics: this.metrics,
      config: this.config,
      uptime: process.uptime()
    };
  }

  generateReport() {
    try {
      const status = this.getStatus();
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          overallHealth: this.calculateOverallHealth(),
          totalSystems: this.systems.size,
          activeRecoveries: this.recoveryQueue.length,
          emergencyMode: this.config.orchestration.emergencyMode
        },
        systems: status.systems,
        metrics: status.metrics,
        recommendations: this.generateRecommendations()
      };
      
      return report;
    } catch (error) {
      this.log(`Failed to generate report: ${error.message}`, "ERROR");
      return { error: error.message };
    }
  }

  calculateOverallHealth() {
    if (this.systemStatus.size === 0) return 100;
    
    let totalHealth = 0;
    let count = 0;
    
    for (const status of this.systemStatus.values()) {
      if (status.percentage !== undefined) {
        totalHealth += status.percentage;
        count++;
      }
    }
    
    return count > 0 ? totalHealth / count : 100;
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Check system health
    for (const [systemName, status] of this.systemStatus) {
      if (status.percentage < 80) {
        recommendations.push(`System ${systemName} health is low (${status.percentage.toFixed(1)}%). Consider manual intervention.`);
      }
    }
    
    // Check recovery queue
    if (this.recoveryQueue.length > 5) {
      recommendations.push(`Recovery queue is long (${this.recoveryQueue.length} items). Consider increasing recovery capacity.`);
    }
    
    // Check emergency mode
    if (this.config.orchestration.emergencyMode) {
      recommendations.push("System is in emergency mode. Review system health and consider manual recovery procedures.");
    }
    
    return recommendations;
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
    case "start-systems":
      orchestrator.startAllSystems();
      break;
    case "stop-systems":
      orchestrator.stopAllSystems();
      break;
    case "health":
      orchestrator.performOrchestratedHealthCheck().then(result => {
        console.log(JSON.stringify(result, null, 2));
        process.exit(0);
      });
      break;
    case "recover":
      orchestrator.processRecoveryQueue().then(() => {
        console.log("Recovery queue processed");
        process.exit(0);
      });
      break;
    case "emergency":
      orchestrator.activateEmergencyMode().then(() => {
        console.log("Emergency mode activated");
        process.exit(0);
      });
      break;
    case "status":
      console.log(JSON.stringify(orchestrator.getStatus(), null, 2));
      break;
    case "report":
      console.log(JSON.stringify(orchestrator.generateReport(), null, 2));
      break;
    default:
      console.log("Usage: node master-redundancy-orchestrator.cjs [start|stop|start-systems|stop-systems|health|recover|emergency|status|report]");
      process.exit(1);
  }
}

module.exports = { MasterRedundancyOrchestrator };