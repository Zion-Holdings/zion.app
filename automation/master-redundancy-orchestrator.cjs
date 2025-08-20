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
    this.logFile = path.join(this.logDir, "master-redundancy-orchestrator.log");
    this.ensureLogDir();
    
    this.config = {
      systems: {
        comprehensive: true,
        pm2: true,
        githubActions: true,
        netlifyFunctions: true
      },
      orchestration: {
        healthCheckInterval: 300000, // 5 minutes
        systemStartupDelay: 10000, // 10 seconds between system starts
        enableCrossSystemRecovery: true,
        enableMetricsAggregation: true,
        enableAlerting: true
      },
      monitoring: {
        enableRealTimeMonitoring: true,
        enableHistoricalTracking: true,
        enablePerformanceMetrics: true,
        logRetentionDays: 30
      }
    };
    
    this.systems = {};
    this.monitoring = false;
    this.orchestrationInterval = null;
    this.systemStatus = new Map();
    this.performanceMetrics = new Map();
    this.startupTime = null;
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

  async initializeSystems() {
    this.log("🚀 Initializing master redundancy orchestrator...");
    this.startupTime = new Date();
    
    try {
      // Initialize comprehensive redundancy system
      if (this.config.systems.comprehensive) {
        this.log("🔧 Initializing comprehensive redundancy system...");
        this.systems.comprehensive = new ComprehensiveRedundancySystem();
        this.systemStatus.set('comprehensive', { status: 'initializing', timestamp: new Date() });
      }

      // Initialize enhanced PM2 redundancy system
      if (this.config.systems.pm2) {
        this.log("🔧 Initializing enhanced PM2 redundancy system...");
        this.systems.pm2 = new EnhancedPM2Redundancy();
        this.systemStatus.set('pm2', { status: 'initializing', timestamp: new Date() });
      }

      // Initialize enhanced GitHub Actions redundancy system
      if (this.config.systems.githubActions) {
        this.log("🔧 Initializing enhanced GitHub Actions redundancy system...");
        this.systems.githubActions = new EnhancedGitHubActionsRedundancy();
        this.systemStatus.set('githubActions', { status: 'initializing', timestamp: new Date() });
      }

      // Initialize enhanced Netlify functions redundancy system
      if (this.config.systems.netlifyFunctions) {
        this.log("🔧 Initializing enhanced Netlify functions redundancy system...");
        this.systems.netlifyFunctions = new EnhancedNetlifyFunctionsRedundancy();
        this.systemStatus.set('netlifyFunctions', { status: 'initializing', timestamp: new Date() });
      }

      this.log("✅ All redundancy systems initialized successfully");
      return true;
    } catch (error) {
      this.log(`❌ Failed to initialize systems: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startSystems() {
    this.log("🚀 Starting all redundancy systems...");
    
    try {
      // Start systems with staggered delays to prevent resource conflicts
      const systemStartPromises = [];
      
      if (this.systems.comprehensive) {
        systemStartPromises.push(
          this.startSystem('comprehensive', async () => {
            // Comprehensive system starts automatically
            this.systemStatus.set('comprehensive', { status: 'running', timestamp: new Date() });
          })
        );
      }

      if (this.systems.pm2) {
        systemStartPromises.push(
          this.startSystem('pm2', async () => {
            await this.systems.pm2.startMonitoring();
            this.systemStatus.set('pm2', { status: 'running', timestamp: new Date() });
          })
        );
      }

      if (this.systems.githubActions) {
        systemStartPromises.push(
          this.startSystem('githubActions', async () => {
            await this.systems.githubActions.startMonitoring();
            this.systemStatus.set('githubActions', { status: 'running', timestamp: new Date() });
          })
        );
      }

      if (this.systems.netlifyFunctions) {
        systemStartPromises.push(
          this.startSystem('netlifyFunctions', async () => {
            await this.systems.netlifyFunctions.startMonitoring();
            this.systemStatus.set('netlifyFunctions', { status: 'running', timestamp: new Date() });
          })
        );
      }

      // Execute all system starts with delays
      for (let i = 0; i < systemStartPromises.length; i++) {
        await systemStartPromises[i];
        if (i < systemStartPromises.length - 1) {
          await this.delay(this.config.orchestration.systemStartupDelay);
        }
      }

      this.log("✅ All redundancy systems started successfully");
      return true;
    } catch (error) {
      this.log(`❌ Failed to start systems: ${error.message}`, "ERROR");
      return false;
    }
  }

  async startSystem(systemName, startFunction) {
    try {
      this.log(`🚀 Starting ${systemName} system...`);
      await startFunction();
      this.log(`✅ ${systemName} system started successfully`);
    } catch (error) {
      this.log(`❌ Failed to start ${systemName} system: ${error.message}`, "ERROR");
      this.systemStatus.set(systemName, { status: 'failed', timestamp: new Date(), error: error.message });
      throw error;
    }
  }

  async delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async performOrchestratedHealthCheck() {
    this.log("🎯 Performing orchestrated health check across all systems...");
    
    const results = {
      timestamp: new Date().toISOString(),
      systems: {},
      summary: {
        total: 0,
        healthy: 0,
        unhealthy: 0,
        failed: 0
      },
      crossSystemIssues: [],
      recommendations: []
    };

    // Check each system's health
    for (const [systemName, system] of Object.entries(this.systems)) {
      try {
        this.log(`🔍 Checking health of ${systemName} system...`);
        
        let systemHealth;
        if (systemName === 'comprehensive') {
          systemHealth = await system.performComprehensiveHealthCheck();
        } else if (systemName === 'pm2') {
          systemHealth = await system.performComprehensiveHealthCheck();
        } else if (systemName === 'githubActions') {
          systemHealth = await system.performComprehensiveHealthCheck();
        } else if (systemName === 'netlifyFunctions') {
          systemHealth = await system.performComprehensiveHealthCheck();
        }

        results.systems[systemName] = {
          status: 'healthy',
          health: systemHealth,
          timestamp: new Date().toISOString()
        };

        results.summary.total++;
        results.summary.healthy++;
        
        this.systemStatus.set(systemName, { status: 'healthy', timestamp: new Date() });
        this.log(`✅ ${systemName} system is healthy`);
      } catch (error) {
        this.log(`❌ ${systemName} system health check failed: ${error.message}`, "ERROR");
        
        results.systems[systemName] = {
          status: 'unhealthy',
          error: error.message,
          timestamp: new Date().toISOString()
        };

        results.summary.total++;
        results.summary.unhealthy++;
        
        this.systemStatus.set(systemName, { status: 'unhealthy', timestamp: new Date(), error: error.message });
      }
    }

    // Analyze cross-system dependencies and issues
    results.crossSystemIssues = this.analyzeCrossSystemIssues(results);
    
    // Generate recommendations
    results.recommendations = this.generateRecommendations(results);

    // Generate and log orchestrated health report
    const healthReport = this.generateOrchestratedHealthReport(results);
    this.log(healthReport);

    // Save orchestrated health report
    this.saveOrchestratedHealthReport(results);

    // Update performance metrics
    this.updatePerformanceMetrics(results);

    return results;
  }

  analyzeCrossSystemIssues(results) {
    const issues = [];
    
    // Check for PM2 and GitHub Actions conflicts
    if (results.systems.pm2 && results.systems.githubActions) {
      if (results.systems.pm2.status === 'unhealthy' && results.systems.githubActions.status === 'unhealthy') {
        issues.push({
          type: 'cross_system_failure',
          systems: ['pm2', 'githubActions'],
          description: 'Both PM2 and GitHub Actions systems are unhealthy, potential automation conflict',
          severity: 'high'
        });
      }
    }

    // Check for Netlify functions and PM2 conflicts
    if (results.systems.netlifyFunctions && results.systems.pm2) {
      if (results.systems.netlifyFunctions.status === 'unhealthy' && results.systems.pm2.status === 'unhealthy') {
        issues.push({
          type: 'cross_system_failure',
          systems: ['netlifyFunctions', 'pm2'],
          description: 'Both Netlify functions and PM2 systems are unhealthy, potential deployment conflict',
          severity: 'high'
        });
      }
    }

    return issues;
  }

  generateRecommendations(results) {
    const recommendations = [];
    
    // System-specific recommendations
    for (const [systemName, systemResult] of Object.entries(results.systems)) {
      if (systemResult.status === 'unhealthy') {
        recommendations.push({
          system: systemName,
          action: 'restart',
          description: `Restart ${systemName} system to resolve health issues`,
          priority: 'high'
        });
      }
    }

    // Cross-system recommendations
    if (results.crossSystemIssues.length > 0) {
      recommendations.push({
        system: 'all',
        action: 'investigate',
        description: 'Investigate cross-system dependencies and resolve conflicts',
        priority: 'critical'
      });
    }

    return recommendations;
  }

  generateOrchestratedHealthReport(results) {
    let systemStatus = "";
    for (const [systemName, systemResult] of Object.entries(results.systems)) {
      const status = systemResult.status === 'healthy' ? "✅" : "❌";
      const details = systemResult.status === 'healthy' ? "HEALTHY" : `UNHEALTHY: ${systemResult.error || 'Unknown error'}`;
      systemStatus += `${status} ${systemName}: ${details}\n`;
    }

    let crossSystemIssues = "";
    if (results.crossSystemIssues.length > 0) {
      for (const issue of results.crossSystemIssues) {
        crossSystemIssues += `⚠️ ${issue.description} (Severity: ${issue.severity})\n`;
      }
    } else {
      crossSystemIssues = "No cross-system issues detected\n";
    }

    let recommendations = "";
    if (results.recommendations.length > 0) {
      for (const rec of results.recommendations) {
        recommendations += `💡 ${rec.description} (Priority: ${rec.priority})\n`;
      }
    } else {
      recommendations = "No immediate actions required\n";
    }

    return `
🎯 MASTER REDUNDANCY ORCHESTRATOR HEALTH REPORT
================================================
Timestamp: ${results.timestamp}
Uptime: ${this.getUptime()}

📊 System Health Summary:
Total Systems: ${results.summary.total}
Healthy: ${results.summary.healthy}
Unhealthy: ${results.summary.unhealthy}
Failed: ${results.summary.failed}

🔍 Individual System Status:
${systemStatus}

🔗 Cross-System Issues:
${crossSystemIssues}

💡 Recommendations:
${recommendations}

${results.summary.healthy === results.summary.total ? 
  "🎉 All redundancy systems are operating normally!" : 
  "⚠️ Some redundancy systems require attention. Check recommendations above."}
`;
  }

  getUptime() {
    if (!this.startupTime) return "Not started";
    
    const uptime = Date.now() - this.startupTime.getTime();
    const days = Math.floor(uptime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((uptime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((uptime % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${days}d ${hours}h ${minutes}m`;
  }

  saveOrchestratedHealthReport(results) {
    try {
      const reportPath = path.join(this.logDir, `orchestrated-health-report-${new Date().toISOString().split('T')[0]}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
      this.log(`📝 Orchestrated health report saved to ${reportPath}`);
    } catch (error) {
      this.log(`❌ Failed to save orchestrated health report: ${error.message}`, "ERROR");
    }
  }

  updatePerformanceMetrics(results) {
    const timestamp = new Date().toISOString();
    
    for (const [systemName, systemResult] of Object.entries(results.systems)) {
      if (!this.performanceMetrics.has(systemName)) {
        this.performanceMetrics.set(systemName, []);
      }
      
      const metrics = this.performanceMetrics.get(systemName);
      metrics.push({
        timestamp,
        status: systemResult.status,
        responseTime: Date.now() - new Date(results.timestamp).getTime()
      });
      
      // Keep only last 100 metrics per system
      if (metrics.length > 100) {
        metrics.splice(0, metrics.length - 100);
      }
    }
  }

  async startOrchestration() {
    if (this.monitoring) {
      this.log("⚠️ Orchestration is already running");
      return;
    }

    this.log("🚀 Starting master redundancy orchestration...");
    
    try {
      // Initialize systems
      const initialized = await this.initializeSystems();
      if (!initialized) {
        throw new Error("Failed to initialize systems");
      }

      // Start systems
      const started = await this.startSystems();
      if (!started) {
        throw new Error("Failed to start systems");
      }

      this.monitoring = true;

      // Set up orchestrated monitoring
      this.orchestrationInterval = setInterval(async () => {
        await this.performOrchestratedHealthCheck();
      }, this.config.orchestration.healthCheckInterval);

      this.log("✅ Master redundancy orchestration started successfully");
    } catch (error) {
      this.log(`❌ Failed to start orchestration: ${error.message}`, "ERROR");
      throw error;
    }
  }

  async stopOrchestration() {
    if (!this.monitoring) {
      this.log("⚠️ Orchestration is not running");
      return;
    }

    this.log("🛑 Stopping master redundancy orchestration...");
    this.monitoring = false;

    if (this.orchestrationInterval) {
      clearInterval(this.orchestrationInterval);
      this.orchestrationInterval = null;
    }

    // Stop all systems
    for (const [systemName, system] of Object.entries(this.systems)) {
      try {
        if (system && typeof system.stopMonitoring === 'function') {
          await system.stopMonitoring();
          this.log(`✅ Stopped ${systemName} system`);
        }
      } catch (error) {
        this.log(`⚠️ Error stopping ${systemName} system: ${error.message}`, "WARN");
      }
    }

    this.log("✅ Master redundancy orchestration stopped");
  }

  async emergencyRecovery() {
    this.log("🚨 Starting emergency recovery for all systems...");
    
    try {
      for (const [systemName, system] of Object.entries(this.systems)) {
        try {
          if (system && typeof system.emergencyRecovery === 'function') {
            this.log(`🚨 Starting emergency recovery for ${systemName} system...`);
            await system.emergencyRecovery();
            this.log(`✅ Emergency recovery completed for ${systemName} system`);
          }
        } catch (error) {
          this.log(`❌ Emergency recovery failed for ${systemName} system: ${error.message}`, "ERROR");
        }
      }

      this.log("✅ Emergency recovery completed for all systems");
      return true;
    } catch (error) {
      this.log(`❌ Emergency recovery failed: ${error.message}`, "ERROR");
      return false;
    }
  }

  getStatus() {
    return {
      monitoring: this.monitoring,
      config: this.config,
      systemStatus: Object.fromEntries(this.systemStatus),
      performanceMetrics: Object.fromEntries(this.performanceMetrics),
      startupTime: this.startupTime,
      uptime: this.getUptime()
    };
  }
}

// Start the master redundancy orchestrator
if (require.main === module) {
  const orchestrator = new MasterRedundancyOrchestrator();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    console.log('\n🛑 Shutting down master redundancy orchestrator...');
    await orchestrator.stopOrchestration();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\n🛑 Terminating master redundancy orchestrator...');
    await orchestrator.stopOrchestration();
    process.exit(0);
  });

  // Start orchestration
  orchestrator.startOrchestration().catch(error => {
    console.error('Failed to start orchestration:', error);
    process.exit(1);
  });
}

module.exports = MasterRedundancyOrchestrator;