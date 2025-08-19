#!/usr/bin/env node
"use strict";

const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Import the enhanced redundancy systems
const ComprehensiveRedundancySystem = require('./comprehensive-redundancy-system.cjs');
const EnhancedPM2Redundancy = require('./enhanced-pm2-redundancy.cjs');
const EnhancedGitHubActionsRedundancy = require('./enhanced-github-actions-redundancy.cjs');
const EnhancedNetlifyFunctionsRedundancy = require('./enhanced-netlify-functions-redundancy.cjs');

class MasterRedundancyOrchestrator {
  constructor() {
    this.workspace = process.cwd();
    this.logDir = path.join(this.workspace, "automation/logs");
    this.logFile = path.join(this.logDir, "master-orchestrator.log");
    this.ensureLogDir();
    this.config = this.loadConfig();
    
    // Initialize redundancy systems
    this.systems = {
      comprehensive: null,
      pm2: null,
      githubActions: null,
      netlifyFunctions: null
    };
    
    this.monitoring = false;
    this.orchestrationInterval = null;
    this.healthCheckInterval = null;
    this.systemStatus = new Map();
    this.recoveryQueue = [];
    this.isRecovering = false;
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
        return config.orchestrator || {};
      } catch (error) {
        this.log(`Error loading orchestrator config: ${error.message}`);
      }
    }
    
    return {
      enabled: true,
      orchestrationInterval: 60000, // 1 minute
      healthCheckInterval: 300000, // 5 minutes
      maxConcurrentRecoveries: 2,
      autoRecovery: true,
      escalationThreshold: 3,
      notification: {
        enabled: true,
        channels: ["log", "console"]
      },
      systems: {
        comprehensive: { enabled: true, priority: 1 },
        pm2: { enabled: true, priority: 2 },
        githubActions: { enabled: true, priority: 3 },
        netlifyFunctions: { enabled: true, priority: 4 }
      }
    };
  }

  log(message, level = "INFO") {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    console.log(logEntry);
    
    try {
      fs.appendFileSync(this.logFile, logEntry + "\n");
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

  async initializeSystems() {
    this.log("🚀 Initializing redundancy systems...");
    
    try {
      // Initialize comprehensive redundancy system
      if (this.config.systems.comprehensive.enabled) {
        this.log("📋 Initializing comprehensive redundancy system...");
        this.systems.comprehensive = new ComprehensiveRedundancySystem();
        this.systemStatus.set('comprehensive', { status: 'initialized', lastCheck: Date.now() });
      }

      // Initialize PM2 redundancy system
      if (this.config.systems.pm2.enabled) {
        this.log("📋 Initializing PM2 redundancy system...");
        this.systems.pm2 = new EnhancedPM2Redundancy();
        this.systemStatus.set('pm2', { status: 'initialized', lastCheck: Date.now() });
      }

      // Initialize GitHub Actions redundancy system
      if (this.config.systems.githubActions.enabled) {
        this.log("📋 Initializing GitHub Actions redundancy system...");
        this.systems.githubActions = new EnhancedGitHubActionsRedundancy();
        this.systemStatus.set('githubActions', { status: 'initialized', lastCheck: Date.now() });
      }

      // Initialize Netlify functions redundancy system
      if (this.config.systems.netlifyFunctions.enabled) {
        this.log("📋 Initializing Netlify functions redundancy system...");
        this.systems.netlifyFunctions = new EnhancedNetlifyFunctionsRedundancy();
        this.systemStatus.set('netlifyFunctions', { status: 'initialized', lastCheck: Date.now() });
      }

      this.log("✅ All enabled redundancy systems initialized");
      return true;
    } catch (error) {
      this.log(`❌ Failed to initialize systems: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startSystemMonitoring() {
    this.log("🔄 Starting system monitoring...");
    
    try {
      // Start monitoring for each system
      if (this.systems.comprehensive) {
        this.log("🔄 Starting comprehensive system monitoring...");
        // The comprehensive system starts its own monitoring
      }

      if (this.systems.pm2) {
        this.log("🔄 Starting PM2 system monitoring...");
        this.systems.pm2.startMonitoring();
      }

      if (this.systems.githubActions) {
        this.log("🔄 Starting GitHub Actions system monitoring...");
        this.systems.githubActions.startMonitoring();
      }

      if (this.systems.netlifyFunctions) {
        this.log("🔄 Starting Netlify functions system monitoring...");
        this.systems.netlifyFunctions.startMonitoring();
      }

      this.log("✅ All system monitoring started");
      return true;
    } catch (error) {
      this.log(`❌ Failed to start system monitoring: ${error.message}`, "ERROR");
      return false;
    }
  }

  async checkSystemHealth() {
    this.log("🔍 Checking system health...");
    
    const healthResults = {
      timestamp: new Date().toISOString(),
      systems: {},
      overall: true,
      issues: []
    };

    try {
      // Check comprehensive system health
      if (this.systems.comprehensive) {
        try {
          const health = await this.systems.comprehensive.performComprehensiveHealthCheck();
          healthResults.systems.comprehensive = {
            healthy: health.overall,
            details: health
          };
          if (!health.overall) {
            healthResults.overall = false;
            healthResults.issues.push("Comprehensive system has issues");
          }
        } catch (error) {
          healthResults.systems.comprehensive = {
            healthy: false,
            error: error.message
          };
          healthResults.overall = false;
          healthResults.issues.push(`Comprehensive system error: ${error.message}`);
        }
      }

      // Check PM2 system health
      if (this.systems.pm2) {
        try {
          const health = await this.systems.pm2.checkAllProcesses();
          healthResults.systems.pm2 = {
            healthy: health.healthy === health.total,
            details: health
          };
          if (health.healthy !== health.total) {
            healthResults.overall = false;
            healthResults.issues.push(`PM2 system: ${health.unhealthy} unhealthy processes`);
          }
        } catch (error) {
          healthResults.systems.pm2 = {
            healthy: false,
            error: error.message
          };
          healthResults.overall = false;
          healthResults.issues.push(`PM2 system error: ${error.message}`);
        }
      }

      // Check GitHub Actions system health
      if (this.systems.githubActions) {
        try {
          const health = await this.systems.githubActions.checkAllWorkflows();
          if (health) {
            healthResults.systems.githubActions = {
              healthy: health.healthy === health.total,
              details: health
            };
            if (health.healthy !== health.total) {
              healthResults.overall = false;
              healthResults.issues.push(`GitHub Actions: ${health.unhealthy} unhealthy workflows`);
            }
          } else {
            healthResults.systems.githubActions = {
              healthy: false,
              error: "Workflows directory not found"
            };
            healthResults.overall = false;
            healthResults.issues.push("GitHub Actions: workflows directory not found");
          }
        } catch (error) {
          healthResults.systems.githubActions = {
            healthy: false,
            error: error.message
          };
          healthResults.overall = false;
          healthResults.issues.push(`GitHub Actions error: ${error.message}`);
        }
      }

      // Check Netlify functions system health
      if (this.systems.netlifyFunctions) {
        try {
          const health = await this.systems.netlifyFunctions.performHealthCheck();
          healthResults.systems.netlifyFunctions = {
            healthy: health.overall,
            details: health
          };
          if (!health.overall) {
            healthResults.overall = false;
            healthResults.issues.push("Netlify functions system has issues");
          }
        } catch (error) {
          healthResults.systems.netlifyFunctions = {
            healthy: false,
            error: error.message
          };
          healthResults.overall = false;
          healthResults.issues.push(`Netlify functions error: ${error.message}`);
        }
      }

      // Update system status
      for (const [systemName, result] of Object.entries(healthResults.systems)) {
        if (this.systemStatus.has(systemName)) {
          const status = this.systemStatus.get(systemName);
          status.lastCheck = Date.now();
          status.healthy = result.healthy;
          status.lastResult = result;
          this.systemStatus.set(systemName, status);
        }
      }

      // Save health results
      this.saveHealthResults(healthResults);

      if (healthResults.overall) {
        this.log("✅ All systems healthy");
      } else {
        this.log(`⚠️ System health issues detected: ${healthResults.issues.join(', ')}`);
        
        // Queue recovery if auto-recovery is enabled
        if (this.config.autoRecovery && !this.isRecovering) {
          this.queueRecovery(healthResults);
        }
      }

      return healthResults;
    } catch (error) {
      this.log(`❌ Health check failed: ${error.message}`, "ERROR");
      return null;
    }
  }

  queueRecovery(healthResults) {
    this.log("🔄 Queuing system recovery...");
    
    // Add unhealthy systems to recovery queue
    for (const [systemName, result] of Object.entries(healthResults.systems)) {
      if (!result.healthy && this.systems[systemName]) {
        const priority = this.config.systems[systemName]?.priority || 999;
        this.recoveryQueue.push({
          system: systemName,
          priority: priority,
          timestamp: Date.now(),
          result: result
        });
      }
    }

    // Sort by priority
    this.recoveryQueue.sort((a, b) => a.priority - b.priority);
    
    this.log(`📋 Recovery queue: ${this.recoveryQueue.length} systems queued`);
    
    // Start recovery if not already running
    if (this.recoveryQueue.length > 0 && !this.isRecovering) {
      this.processRecoveryQueue();
    }
  }

  async processRecoveryQueue() {
    if (this.isRecovering || this.recoveryQueue.length === 0) {
      return;
    }

    this.isRecovering = true;
    this.log("🚨 Starting system recovery process...");

    try {
      const maxConcurrent = this.config.maxConcurrentRecoveries;
      const currentRecoveries = [];

      while (this.recoveryQueue.length > 0 && currentRecoveries.length < maxConcurrent) {
        const recovery = this.recoveryQueue.shift();
        if (recovery) {
          currentRecoveries.push(this.performSystemRecovery(recovery));
        }
      }

      // Wait for all recoveries to complete
      if (currentRecoveries.length > 0) {
        await Promise.allSettled(currentRecoveries);
      }

      this.log("✅ Recovery process completed");
    } catch (error) {
      this.log(`❌ Recovery process failed: ${error.message}`, "ERROR");
    } finally {
      this.isRecovering = false;
      
      // Process remaining items in queue
      if (this.recoveryQueue.length > 0) {
        setTimeout(() => this.processRecoveryQueue(), 10000);
      }
    }
  }

  async performSystemRecovery(recovery) {
    const { system, result } = recovery;
    this.log(`🔄 Recovering ${system} system...`);

    try {
      let recoveryResult = null;

      switch (system) {
        case 'comprehensive':
          recoveryResult = await this.systems.comprehensive.emergencyRecovery();
          break;
        case 'pm2':
          recoveryResult = await this.systems.pm2.emergencyRecovery();
          break;
        case 'githubActions':
          recoveryResult = await this.systems.githubActions.emergencyRecovery();
          break;
        case 'netlifyFunctions':
          recoveryResult = await this.systems.netlifyFunctions.emergencyRecovery();
          break;
        default:
          this.log(`⚠️ Unknown system for recovery: ${system}`);
          return false;
      }

      if (recoveryResult) {
        this.log(`✅ ${system} system recovery completed successfully`);
        return true;
      } else {
        this.log(`⚠️ ${system} system recovery failed`);
        return false;
      }
    } catch (error) {
      this.log(`❌ ${system} system recovery error: ${error.message}`, "ERROR");
      return false;
    }
  }

  saveHealthResults(results) {
    try {
      const healthFile = path.join(this.logDir, `master-orchestrator-health-${new Date().toISOString().split('T')[0]}.json`);
      const existingData = fs.existsSync(healthFile) ? JSON.parse(fs.readFileSync(healthFile, "utf8")) : [];
      existingData.push(results);
      
      // Keep only last 100 results
      if (existingData.length > 100) {
        existingData.splice(0, existingData.length - 100);
      }
      
      fs.writeFileSync(healthFile, JSON.stringify(existingData, null, 2));
    } catch (error) {
      this.log(`⚠️ Failed to save health results: ${error.message}`, "WARN");
    }
  }

  async generateSystemReport() {
    try {
      this.log("📊 Generating comprehensive system report...");
      
      const report = {
        timestamp: new Date().toISOString(),
        orchestrator: {
          status: this.monitoring ? 'running' : 'stopped',
          config: this.config
        },
        systems: {},
        recommendations: []
      };

      // Collect system reports
      for (const [systemName, system] of Object.entries(this.systems)) {
        if (system) {
          try {
            switch (systemName) {
              case 'comprehensive':
                report.systems[systemName] = await system.generateHealthReport();
                break;
              case 'pm2':
                report.systems[systemName] = await system.generateMetrics();
                break;
              case 'githubActions':
                report.systems[systemName] = await system.generateWorkflowReport();
                break;
              case 'netlifyFunctions':
                report.systems[systemName] = await system.generateFunctionsReport();
                break;
            }
          } catch (error) {
            report.systems[systemName] = { error: error.message };
          }
        }
      }

      // Generate recommendations
      for (const [systemName, status] of this.systemStatus.entries()) {
        if (status.lastResult && !status.healthy) {
          report.recommendations.push(`Investigate issues in ${systemName} system`);
        }
      }

      // Save report
      const reportFile = path.join(this.logDir, `master-orchestrator-report-${new Date().toISOString().split('T')[0]}.json`);
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      this.log("✅ System report generated and saved");
      
      return report;
    } catch (error) {
      this.log(`❌ Failed to generate system report: ${error.message}`, "ERROR");
      return null;
    }
  }

  startOrchestration() {
    if (this.monitoring) {
      this.log("⚠️ Orchestration already started");
      return;
    }

    this.log("🚀 Starting master redundancy orchestration...");
    
    // Initialize systems
    this.initializeSystems().then(() => {
      // Start system monitoring
      this.startSystemMonitoring().then(() => {
        this.monitoring = true;
        
        // Start orchestration loop
        this.orchestrationInterval = setInterval(async () => {
          await this.checkSystemHealth();
        }, this.config.orchestrationInterval);
        
        // Start periodic health checks
        this.healthCheckInterval = setInterval(async () => {
          await this.checkSystemHealth();
        }, this.config.healthCheckInterval);
        
        this.log("✅ Master redundancy orchestration started successfully");
      });
    });
  }

  stopOrchestration() {
    if (this.orchestrationInterval) {
      clearInterval(this.orchestrationInterval);
      this.orchestrationInterval = null;
    }
    
    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval);
      this.healthCheckInterval = null;
    }
    
    this.monitoring = false;
    this.log("🛑 Master redundancy orchestration stopped");
  }

  async cleanup() {
    this.log("🧹 Cleaning up master orchestrator...");
    
    this.stopOrchestration();
    
    // Cleanup individual systems
    for (const [systemName, system] of Object.entries(this.systems)) {
      if (system && typeof system.cleanup === 'function') {
        try {
          await system.cleanup();
        } catch (error) {
          this.log(`⚠️ Error cleaning up ${systemName}: ${error.message}`);
        }
      }
    }
    
    this.systemStatus.clear();
    this.recoveryQueue.length = 0;
    this.isRecovering = false;
  }
}

// Handle command line arguments
if (require.main === module) {
  const orchestrator = new MasterRedundancyOrchestrator();
  
  const args = process.argv.slice(2);
  
  if (args.includes('--health-check')) {
    orchestrator.checkSystemHealth().then(() => {
      process.exit(0);
    });
  } else if (args.includes('--report')) {
    orchestrator.generateSystemReport().then(() => {
      process.exit(0);
    });
  } else if (args.includes('--start')) {
    orchestrator.startOrchestration();
  } else if (args.includes('--stop')) {
    orchestrator.stopOrchestration();
    process.exit(0);
  } else if (args.includes('--emergency-recovery')) {
    orchestrator.checkSystemHealth().then((health) => {
      if (health && !health.overall) {
        orchestrator.queueRecovery(health);
      }
      process.exit(0);
    });
  } else {
    // Default: start orchestration
    orchestrator.startOrchestration();
    
    // Handle shutdown signals
    process.on('SIGTERM', async () => {
      await orchestrator.cleanup();
      process.exit(0);
    });
    
    process.on('SIGINT', async () => {
      await orchestrator.cleanup();
      process.exit(0);
    });
  }
}

module.exports = MasterRedundancyOrchestrator;