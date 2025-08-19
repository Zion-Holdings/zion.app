#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

// Import the enhanced redundancy systems
const EnhancedPM2Redundancy = require("./enhanced-pm2-redundancy.cjs");
const EnhancedGitHubActionsRedundancy = require("./enhanced-github-actions-redundancy.cjs");
const EnhancedNetlifyFunctionsRedundancy = require("./enhanced-netlify-functions-redundancy.cjs");

class MasterRedundancyOrchestrator {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "master-redundancy-orchestrator.log");
    this.ensureLogDir();
    
    this.config = {
      checkInterval: 60000, // 1 minute
      healthCheckTimeout: 30000,
      backupInterval: 900000, // 15 minutes
      maxLogSize: 10 * 1024 * 1024, // 10MB
      systems: {
        pm2: {
          enabled: true,
          priority: 1,
          autoRecovery: true,
          healthThreshold: 0.8
        },
        githubActions: {
          enabled: true,
          priority: 2,
          autoRecovery: true,
          healthThreshold: 0.8
        },
        netlifyFunctions: {
          enabled: true,
          priority: 3,
          autoRecovery: true,
          healthThreshold: 0.8
        }
      },
      monitoring: false,
      checkInterval: null,
      emergencyMode: false
    };
    
    // Initialize redundancy systems
    this.pm2Redundancy = new EnhancedPM2Redundancy();
    this.githubActionsRedundancy = new EnhancedGitHubActionsRedundancy();
    this.netlifyFunctionsRedundancy = new EnhancedNetlifyFunctionsRedundancy();
    
    this.systemStates = new Map();
    this.overallHealth = 1.0;
    this.lastBackup = Date.now();
    this.recoveryAttempts = 0;
    this.maxRecoveryAttempts = 5;
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
      this.rotateLogs();
    } catch (error) {
      console.error(`Failed to write to log file: ${error.message}`);
    }
  }

  rotateLogs() {
    try {
      const stats = fs.statSync(this.logFile);
      if (stats.size > this.config.maxLogSize) {
        const backupFile = `${this.logFile}.${Date.now()}`;
        fs.renameSync(this.logFile, backupFile);
        this.log("Log file rotated", "INFO");
      }
    } catch (error) {
      // Ignore rotation errors
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

  async checkSystemHealth(systemName) {
    try {
      let health = 0;
      let details = {};

      switch (systemName) {
        case 'pm2':
          if (this.config.systems.pm2.enabled) {
            const report = await this.pm2Redundancy.generateHealthReport();
            if (report) {
              health = report.summary.healthy / report.summary.total;
              details = report;
            }
          }
          break;

        case 'githubActions':
          if (this.config.systems.githubActions.enabled) {
            const report = await this.githubActionsRedundancy.generateHealthReport();
            if (report) {
              health = report.summary.healthy / report.summary.total;
              details = report;
            }
          }
          break;

        case 'netlifyFunctions':
          if (this.config.systems.netlifyFunctions.enabled) {
            const report = await this.netlifyFunctionsRedundancy.generateHealthReport();
            if (report) {
              health = report.summary.healthy / report.summary.total;
              details = report;
            }
          }
          break;
      }

      return { health, details };
    } catch (error) {
      this.log(`Error checking ${systemName} health: ${error.message}`, "ERROR");
      return { health: 0, details: { error: error.message } };
    }
  }

  async backupAllSystems() {
    try {
      const backupDir = path.join(this.workspace, "automation/backups/master");
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }

      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const backupPath = path.join(backupDir, `master-backup-${timestamp}`);
      fs.mkdirSync(backupPath, { recursive: true });

      // Backup PM2 ecosystem files
      if (this.config.systems.pm2.enabled) {
        await this.pm2Redundancy.backupEcosystemFiles();
      }

      // Backup GitHub Actions workflows
      if (this.config.systems.githubActions.enabled) {
        await this.githubActionsRedundancy.backupWorkflows();
      }

      // Backup Netlify functions
      if (this.config.systems.netlifyFunctions.enabled) {
        await this.netlifyFunctionsRedundancy.backupFunctions();
      }

      // Backup configuration files
      const configFiles = [
        "ecosystem.pm2.cjs",
        "ecosystem.redundancy.cjs",
        ".github/workflows/",
        "netlify/",
        "automation/redundancy-config.json"
      ];

      for (const configFile of configFiles) {
        const sourcePath = path.join(this.workspace, configFile);
        if (fs.existsSync(sourcePath)) {
          const targetPath = path.join(backupPath, configFile);
          if (fs.lstatSync(sourcePath).isDirectory()) {
            await this.runCommand("cp", ["-r", sourcePath, targetPath]);
          } else {
            fs.copyFileSync(sourcePath, targetPath);
          }
        }
      }

      this.log(`Master backup completed: ${backupPath}`, "INFO");
      this.lastBackup = Date.now();
      return true;
    } catch (error) {
      this.log(`Failed to backup all systems: ${error.message}`, "ERROR");
      return false;
    }
  }

  async restoreAllSystems(backupTimestamp = null) {
    try {
      this.log("Starting system-wide restoration", "WARN");
      
      // Stop all monitoring
      await this.stopAllMonitoring();

      // Restore each system
      if (this.config.systems.pm2.enabled) {
        await this.pm2Redundancy.restoreFromBackup();
      }

      if (this.config.systems.githubActions.enabled) {
        await this.githubActionsRedundancy.restoreWorkflowsFromBackup();
      }

      if (this.config.systems.netlifyFunctions.enabled) {
        await this.netlifyFunctionsRedundancy.restoreFunctionsFromBackup();
      }

      // Restart monitoring
      await this.startAllMonitoring();

      this.log("System-wide restoration completed", "INFO");
      return true;
    } catch (error) {
      this.log(`System-wide restoration failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startAllMonitoring() {
    try {
      this.log("Starting all redundancy systems", "INFO");

      if (this.config.systems.pm2.enabled) {
        await this.pm2Redundancy.startMonitoring();
      }

      if (this.config.systems.githubActions.enabled) {
        await this.githubActionsRedundancy.startMonitoring();
      }

      if (this.config.systems.netlifyFunctions.enabled) {
        await this.netlifyFunctionsRedundancy.startMonitoring();
      }

      this.log("All redundancy systems started", "INFO");
      return true;
    } catch (error) {
      this.log(`Failed to start all systems: ${error.message}`, "ERROR");
      return false;
    }
  }

  async stopAllMonitoring() {
    try {
      this.log("Stopping all redundancy systems", "INFO");

      if (this.config.systems.pm2.enabled) {
        await this.pm2Redundancy.stopMonitoring();
      }

      if (this.config.systems.githubActions.enabled) {
        await this.githubActionsRedundancy.stopMonitoring();
      }

      if (this.config.systems.netlifyFunctions.enabled) {
        await this.netlifyFunctionsRedundancy.stopMonitoring();
      }

      this.log("All redundancy systems stopped", "INFO");
      return true;
    } catch (error) {
      this.log(`Failed to stop all systems: ${error.message}`, "ERROR");
      return false;
    }
  }

  async monitorAllSystems() {
    this.log("Starting master system monitoring...", "INFO");
    
    const systemNames = Object.keys(this.config.systems);
    let totalHealth = 0;
    let healthySystems = 0;

    for (const systemName of systemNames) {
      if (this.config.systems[systemName].enabled) {
        try {
          const { health, details } = await this.checkSystemHealth(systemName);
          
          this.systemStates.set(systemName, { health, details, lastCheck: Date.now() });
          
          if (health >= this.config.systems[systemName].healthThreshold) {
            healthySystems++;
            this.log(`System ${systemName} healthy (${(health * 100).toFixed(1)}%)`, "INFO");
          } else {
            this.log(`System ${systemName} unhealthy (${(health * 100).toFixed(1)}%)`, "WARN");
            
            // Attempt auto-recovery if enabled
            if (this.config.systems[systemName].autoRecovery) {
              await this.attemptSystemRecovery(systemName);
            }
          }
          
          totalHealth += health;
          
        } catch (error) {
          this.log(`Error monitoring system ${systemName}: ${error.message}`, "ERROR");
          this.systemStates.set(systemName, { health: 0, details: { error: error.message }, lastCheck: Date.now() });
        }
      }
    }

    // Calculate overall health
    this.overallHealth = totalHealth / systemNames.length;
    
    // Check if emergency mode is needed
    if (this.overallHealth < 0.5 && !this.config.emergencyMode) {
      await this.enterEmergencyMode();
    } else if (this.overallHealth >= 0.8 && this.config.emergencyMode) {
      await this.exitEmergencyMode();
    }

    this.log(`Overall system health: ${(this.overallHealth * 100).toFixed(1)}% (${healthySystems}/${systemNames.length} healthy)`, "INFO");
  }

  async attemptSystemRecovery(systemName) {
    try {
      this.log(`Attempting recovery for system: ${systemName}`, "WARN");
      
      let recoverySuccess = false;
      
      switch (systemName) {
        case 'pm2':
          recoverySuccess = await this.pm2Redundancy.emergencyRecovery();
          break;
        case 'githubActions':
          recoverySuccess = await this.githubActionsRedundancy.emergencyRecovery();
          break;
        case 'netlifyFunctions':
          recoverySuccess = await this.netlifyFunctionsRedundancy.emergencyRecovery();
          break;
      }

      if (recoverySuccess) {
        this.log(`Successfully recovered system: ${systemName}`, "INFO");
        this.recoveryAttempts = 0;
      } else {
        this.recoveryAttempts++;
        this.log(`Failed to recover system: ${systemName} (attempt ${this.recoveryAttempts})`, "ERROR");
      }

      return recoverySuccess;
    } catch (error) {
      this.log(`Error during system recovery: ${error.message}`, "ERROR");
      return false;
    }
  }

  async enterEmergencyMode() {
    this.config.emergencyMode = true;
    this.log("🚨 ENTERING EMERGENCY MODE - System health critically low", "ERROR");
    
    try {
      // Stop all monitoring to prevent interference
      await this.stopAllMonitoring();
      
      // Perform emergency backup
      await this.backupAllSystems();
      
      // Attempt full system recovery
      if (this.recoveryAttempts < this.maxRecoveryAttempts) {
        await this.attemptFullSystemRecovery();
      } else {
        this.log("Maximum recovery attempts reached, manual intervention required", "ERROR");
      }
      
      // Restart monitoring
      await this.startAllMonitoring();
      
    } catch (error) {
      this.log(`Emergency mode error: ${error.message}`, "ERROR");
    }
  }

  async exitEmergencyMode() {
    this.config.emergencyMode = false;
    this.log("✅ EXITING EMERGENCY MODE - System health restored", "INFO");
    this.recoveryAttempts = 0;
  }

  async attemptFullSystemRecovery() {
    try {
      this.log("Attempting full system recovery", "WARN");
      
      // Restore from latest backup
      if (await this.restoreAllSystems()) {
        this.log("Full system recovery successful", "INFO");
        return true;
      }
      
      // If backup restoration fails, try individual system recovery
      const systemNames = Object.keys(this.config.systems);
      let recoveryCount = 0;
      
      for (const systemName of systemNames) {
        if (this.config.systems[systemName].enabled) {
          if (await this.attemptSystemRecovery(systemName)) {
            recoveryCount++;
          }
        }
      }
      
      this.log(`Recovered ${recoveryCount}/${systemNames.length} systems`, "INFO");
      return recoveryCount > 0;
      
    } catch (error) {
      this.log(`Full system recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  async generateMasterReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        overallHealth: this.overallHealth,
        emergencyMode: this.config.emergencyMode,
        recoveryAttempts: this.recoveryAttempts,
        systems: {},
        summary: {
          total: Object.keys(this.config.systems).length,
          healthy: 0,
          unhealthy: 0,
          disabled: 0
        }
      };

      for (const [systemName, systemConfig] of Object.entries(this.config.systems)) {
        const state = this.systemStates.get(systemName);
        
        if (systemConfig.enabled) {
          if (state && state.health >= systemConfig.healthThreshold) {
            report.summary.healthy++;
          } else {
            report.summary.unhealthy++;
          }
          
          report.systems[systemName] = {
            enabled: true,
            health: state ? state.health : 0,
            priority: systemConfig.priority,
            autoRecovery: systemConfig.autoRecovery,
            lastCheck: state ? state.lastCheck : null,
            details: state ? state.details : {}
          };
        } else {
          report.summary.disabled++;
          report.systems[systemName] = {
            enabled: false,
            health: 0,
            priority: systemConfig.priority,
            autoRecovery: systemConfig.autoRecovery
          };
        }
      }

      // Save report
      const reportPath = path.join(this.logDir, "master-redundancy-report.json");
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      this.log(`Master report generated: ${reportPath}`, "INFO");
      return report;
    } catch (error) {
      this.log(`Failed to generate master report: ${error.message}`, "ERROR");
      return null;
    }
  }

  async startMonitoring() {
    if (this.monitoring) {
      this.log("Monitoring already started", "WARN");
      return;
    }

    this.monitoring = true;
    this.log("Starting master redundancy orchestrator", "INFO");

    // Initial backup
    await this.backupAllSystems();

    // Start all system monitoring
    await this.startAllMonitoring();

    // Start master monitoring loop
    this.checkInterval = setInterval(async () => {
      try {
        await this.monitorAllSystems();
        
        // Backup all systems periodically
        if (Date.now() - this.lastBackup > this.config.backupInterval) {
          await this.backupAllSystems();
        }
        
        // Generate master report every 5 minutes
        if (Date.now() % 300000 < this.config.checkInterval) {
          await this.generateMasterReport();
        }
        
      } catch (error) {
        this.log(`Error in master monitoring loop: ${error.message}`, "ERROR");
      }
    }, this.config.checkInterval);

    this.log("Master redundancy orchestrator started", "INFO");
  }

  async stopMonitoring() {
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    }
    
    await this.stopAllMonitoring();
    this.monitoring = false;
    this.log("Master redundancy orchestrator stopped", "INFO");
  }

  async emergencyShutdown() {
    this.log("🚨 EMERGENCY SHUTDOWN INITIATED", "ERROR");
    
    try {
      // Stop all monitoring
      await this.stopAllMonitoring();
      
      // Perform final backup
      await this.backupAllSystems();
      
      this.log("Emergency shutdown completed", "INFO");
      process.exit(1);
    } catch (error) {
      this.log(`Emergency shutdown error: ${error.message}`, "ERROR");
      process.exit(1);
    }
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new MasterRedundancyOrchestrator();
  
  const command = process.argv[2];
  
  switch (command) {
    case "start":
      orchestrator.startMonitoring();
      break;
    case "stop":
      orchestrator.stopMonitoring();
      break;
    case "status":
      orchestrator.monitorAllSystems();
      break;
    case "report":
      orchestrator.generateMasterReport();
      break;
    case "backup":
      orchestrator.backupAllSystems();
      break;
    case "restore":
      orchestrator.restoreAllSystems();
      break;
    case "recovery":
      orchestrator.attemptFullSystemRecovery();
      break;
    case "emergency":
      orchestrator.enterEmergencyMode();
      break;
    case "shutdown":
      orchestrator.emergencyShutdown();
      break;
    default:
      console.log("Usage: node master-redundancy-orchestrator.cjs [start|stop|status|report|backup|restore|recovery|emergency|shutdown]");
      process.exit(1);
  }
}

module.exports = MasterRedundancyOrchestrator;