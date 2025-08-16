#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class MasterAutomationOrchestrator {
  constructor() {
    this.reportsDir = path.resolve(__dirname, "reports");
    this.configPath = path.resolve(__dirname, "config/master-orchestrator.json");
    this.automationSystems = new Map();
    this.executionHistory = [];
    this.healthStatus = {};
    
    this.ensureDirectories();
    this.loadConfiguration();
    this.initializeAutomationSystems();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  loadConfiguration() {
    this.config = {
      executionMode: 'intelligent', // 'aggressive', 'conservative', 'intelligent'
      maxConcurrentSystems: 3,
      healthCheckInterval: 300000, // 5 minutes
      autoRecovery: true,
      reporting: {
        enabled: true,
        format: 'json',
        retention: 30 // days
      },
      priorities: {
        critical: ['workflow-health', 'dependency-health', 'security'],
        high: ['resource-optimization', 'workflow-standardization'],
        medium: ['smart-dispatch', 'retry-system'],
        low: ['reporting', 'cleanup']
      },
      schedules: {
        hourly: ['workflow-health', 'smart-dispatch'],
        daily: ['dependency-health', 'resource-optimization', 'workflow-standardization'],
        weekly: ['comprehensive-audit', 'cleanup']
      }
    };
    
    // Save default configuration
    this.saveConfiguration();
  }

  saveConfiguration() {
    fs.writeFileSync(this.configPath, JSON.stringify(this.config, null, 2));
  }

  initializeAutomationSystems() {
    // Initialize all automation systems
    this.automationSystems.set('workflow-health', {
      name: 'Workflow Health Monitor',
      class: require('./workflow-health-monitor.cjs'),
      instance: null,
      status: 'stopped',
      lastRun: null,
      nextRun: null,
      priority: 'critical'
    });
    
    this.automationSystems.set('retry-system', {
      name: 'Intelligent Retry System',
      class: require('./intelligent-retry-system.cjs'),
      instance: null,
      status: 'stopped',
      lastRun: null,
      nextRun: null,
      priority: 'medium'
    });
    
    this.automationSystems.set('resource-optimization', {
      name: 'Resource Optimization Orchestrator',
      class: require('./resource-optimization-orchestrator.cjs'),
      instance: null,
      status: 'stopped',
      lastRun: null,
      nextRun: null,
      priority: 'high'
    });
    
    this.automationSystems.set('dependency-health', {
      name: 'Dependency Health Checker',
      class: require('./dependency-health-checker.cjs'),
      instance: null,
      status: 'stopped',
      lastRun: null,
      nextRun: null,
      priority: 'critical'
    });
    
    this.automationSystems.set('workflow-standardization', {
      name: 'Workflow Template Standardizer',
      class: require('./workflow-template-standardizer.cjs'),
      instance: null,
      status: 'stopped',
      lastRun: null,
      nextRun: null,
      priority: 'high'
    });
    
    this.automationSystems.set('smart-dispatch', {
      name: 'Smart Workflow Dispatcher',
      class: require('./smart-workflow-dispatcher.cjs'),
      instance: null,
      status: 'stopped',
      lastRun: null,
      nextRun: null,
      priority: 'medium'
    });
    
    console.log(`🚀 Initialized ${this.automationSystems.size} automation systems`);
  }

  async startAutomationSystem(systemKey) {
    const system = this.automationSystems.get(systemKey);
    if (!system) {
      throw new Error(`Unknown automation system: ${systemKey}`);
    }
    
    try {
      console.log(`🚀 Starting ${system.name}...`);
      
      // Create instance if not exists
      if (!system.instance) {
        system.instance = new system.class();
      }
      
      system.status = 'running';
      system.lastRun = new Date().toISOString();
      
      console.log(`✅ ${system.name} started successfully`);
      return true;
      
    } catch (error) {
      console.error(`❌ Failed to start ${system.name}:`, error.message);
      system.status = 'error';
      system.lastError = error.message;
      return false;
    }
  }

  async stopAutomationSystem(systemKey) {
    const system = this.automationSystems.get(systemKey);
    if (!system) {
      throw new Error(`Unknown automation system: ${systemKey}`);
    }
    
    try {
      console.log(`🛑 Stopping ${system.name}...`);
      
      system.status = 'stopped';
      system.lastRun = new Date().toISOString();
      
      console.log(`✅ ${system.name} stopped successfully`);
      return true;
      
    } catch (error) {
      console.error(`❌ Failed to stop ${system.name}:`, error.message);
      return false;
    }
  }

  async runAutomationSystem(systemKey, options = {}) {
    const system = this.automationSystems.get(systemKey);
    if (!system) {
      throw new Error(`Unknown automation system: ${systemKey}`);
    }
    
    try {
      console.log(`🔄 Running ${system.name}...`);
      
      // Start system if not running
      if (system.status !== 'running') {
        await this.startAutomationSystem(systemKey);
      }
      
      const startTime = Date.now();
      
      // Execute the system based on its type
      let result;
      switch (systemKey) {
        case 'workflow-health':
          result = await system.instance.analyzeWorkflowHealth();
          break;
          
        case 'retry-system':
          // Run retry analysis on a sample failure
          const sampleFailure = `
          npm ERR! code ETIMEDOUT
          npm ERR! errno ETIMEDOUT
          npm ERR! network timeout at: https://registry.npmjs.org/package-name
          `;
          result = await system.instance.analyzeFailure(sampleFailure, 'ci.yml', 1);
          break;
          
        case 'resource-optimization':
          result = await system.instance.optimizeWorkflowSchedule();
          break;
          
        case 'dependency-health':
          result = await system.instance.checkDependencyHealth();
          break;
          
        case 'workflow-standardization':
          result = await system.instance.standardizeWorkflows();
          break;
          
        case 'smart-dispatch':
          result = await system.instance.dispatchWorkflows(['package.json', 'src/components/Button.tsx']);
          break;
          
        default:
          throw new Error(`Unknown system execution method for: ${systemKey}`);
      }
      
      const duration = Date.now() - startTime;
      
      // Record execution
      const execution = {
        system: systemKey,
        timestamp: new Date().toISOString(),
        duration,
        success: true,
        result: result,
        error: null
      };
      
      this.executionHistory.push(execution);
      system.lastRun = new Date().toISOString();
      
      console.log(`✅ ${system.name} completed successfully in ${duration}ms`);
      return result;
      
    } catch (error) {
      console.error(`❌ ${system.name} failed:`, error.message);
      
      // Record failed execution
      const execution = {
        system: systemKey,
        timestamp: new Date().toISOString(),
        duration: 0,
        success: false,
        result: null,
        error: error.message
      };
      
      this.executionHistory.push(execution);
      system.lastRun = new Date().toISOString();
      system.status = 'error';
      system.lastError = error.message;
      
      // Auto-recovery if enabled
      if (this.config.autoRecovery) {
        await this.attemptRecovery(systemKey, error);
      }
      
      throw error;
    }
  }

  async attemptRecovery(systemKey, error) {
    const system = this.automationSystems.get(systemKey);
    if (!system) return;
    
    console.log(`🔄 Attempting recovery for ${system.name}...`);
    
    try {
      // Stop the system
      await this.stopAutomationSystem(systemKey);
      
      // Wait a bit
      await this.sleep(5000);
      
      // Restart the system
      await this.startAutomationSystem(systemKey);
      
      console.log(`✅ Recovery successful for ${system.name}`);
      
    } catch (recoveryError) {
      console.error(`❌ Recovery failed for ${system.name}:`, recoveryError.message);
      system.status = 'unrecoverable';
    }
  }

  async runComprehensiveAudit() {
    console.log("🔍 Running comprehensive automation audit...");
    
    const audit = {
      timestamp: new Date().toISOString(),
      systems: {},
      overallHealth: 0,
      recommendations: [],
      actions: []
    };
    
    let totalHealth = 0;
    let systemCount = 0;
    
    // Audit each system
    for (const [key, system] of this.automationSystems) {
      try {
        const systemHealth = await this.auditSystem(key);
        audit.systems[key] = systemHealth;
        
        totalHealth += systemHealth.score;
        systemCount++;
        
        if (systemHealth.score < 70) {
          audit.recommendations.push({
            system: key,
            issue: systemHealth.issues.join(', '),
            priority: systemHealth.score < 50 ? 'high' : 'medium',
            action: `Run ${key} to resolve issues`
          });
          
          audit.actions.push({
            type: 'run_system',
            system: key,
            priority: systemHealth.score < 50 ? 'immediate' : 'scheduled'
          });
        }
        
      } catch (error) {
        console.error(`❌ Failed to audit ${key}:`, error.message);
        audit.systems[key] = {
          score: 0,
          status: 'error',
          issues: ['Audit failed'],
          lastRun: null
        };
      }
    }
    
    // Calculate overall health
    audit.overallHealth = systemCount > 0 ? Math.round(totalHealth / systemCount) : 0;
    
    // Save audit report
    this.saveAuditReport(audit);
    
    console.log(`📊 Comprehensive audit completed. Overall health: ${audit.overallHealth}/100`);
    
    return audit;
  }

  async auditSystem(systemKey) {
    const system = this.automationSystems.get(systemKey);
    if (!system) {
      throw new Error(`Unknown system: ${systemKey}`);
    }
    
    const audit = {
      score: 100,
      status: system.status,
      issues: [],
      lastRun: system.lastRun,
      recommendations: []
    };
    
    // Check system status
    if (system.status === 'error') {
      audit.score -= 30;
      audit.issues.push('System in error state');
    } else if (system.status === 'stopped') {
      audit.score -= 20;
      audit.issues.push('System stopped');
    }
    
    // Check last run time
    if (system.lastRun) {
      const lastRun = new Date(system.lastRun);
      const hoursSinceLastRun = (Date.now() - lastRun.getTime()) / (1000 * 60 * 60);
      
      if (hoursSinceLastRun > 24) {
        audit.score -= 15;
        audit.issues.push('System not run recently');
      } else if (hoursSinceLastRun > 6) {
        audit.score -= 5;
        audit.issues.push('System run more than 6 hours ago');
      }
    } else {
      audit.score -= 25;
      audit.issues.push('System never run');
    }
    
    // Check for errors
    if (system.lastError) {
      audit.score -= 20;
      audit.issues.push('System has recent errors');
    }
    
    // Ensure score doesn't go below 0
    audit.score = Math.max(0, audit.score);
    
    // Generate recommendations
    if (audit.score < 70) {
      if (system.status === 'error') {
        audit.recommendations.push('Restart system to clear error state');
      }
      if (system.status === 'stopped') {
        audit.recommendations.push('Start system to enable automation');
      }
      if (!system.lastRun || (new Date(system.lastRun) < new Date(Date.now() - 24 * 60 * 60 * 1000))) {
        audit.recommendations.push('Run system to update status');
      }
    }
    
    return audit;
  }

  async runPriorityQueue() {
    console.log("🚀 Running priority queue...");
    
    const priorityOrder = ['critical', 'high', 'medium', 'low'];
    const results = {};
    
    for (const priority of priorityOrder) {
      const systems = Array.from(this.automationSystems.entries())
        .filter(([key, system]) => system.priority === priority);
      
      if (systems.length === 0) continue;
      
      console.log(`\n📋 Executing ${priority} priority systems (${systems.length} systems)`);
      
      results[priority] = [];
      
      for (const [key, system] of systems) {
        try {
          console.log(`  🚀 Running ${system.name}...`);
          const result = await this.runAutomationSystem(key);
          results[priority].push({
            system: key,
            success: true,
            result: result
          });
        } catch (error) {
          console.error(`  ❌ ${system.name} failed:`, error.message);
          results[priority].push({
            system: key,
            success: false,
            error: error.message
          });
        }
      }
    }
    
    return results;
  }

  async runScheduledTasks() {
    console.log("⏰ Running scheduled tasks...");
    
    const now = new Date();
    const hour = now.getHours();
    const dayOfWeek = now.getDay();
    
    const results = {
      timestamp: now.toISOString(),
      hourly: [],
      daily: [],
      weekly: []
    };
    
    // Hourly tasks
    if (this.config.schedules.hourly) {
      console.log("🕐 Executing hourly tasks...");
      for (const systemKey of this.config.schedules.hourly) {
        try {
          await this.runAutomationSystem(systemKey);
          results.hourly.push({ system: systemKey, success: true });
        } catch (error) {
          results.hourly.push({ system: systemKey, success: false, error: error.message });
        }
      }
    }
    
    // Daily tasks (run once per day)
    if (this.config.schedules.daily && hour === 2) { // 2 AM
      console.log("🌅 Executing daily tasks...");
      for (const systemKey of this.config.schedules.daily) {
        try {
          await this.runAutomationSystem(systemKey);
          results.daily.push({ system: systemKey, success: true });
        } catch (error) {
          results.daily.push({ system: systemKey, success: false, error: error.message });
        }
      }
    }
    
    // Weekly tasks (run once per week on Sunday)
    if (this.config.schedules.weekly && dayOfWeek === 0 && hour === 3) { // Sunday 3 AM
      console.log("📅 Executing weekly tasks...");
      for (const systemKey of this.config.schedules.weekly) {
        try {
          if (systemKey === 'comprehensive-audit') {
            await this.runComprehensiveAudit();
          } else {
            await this.runAutomationSystem(systemKey);
          }
          results.weekly.push({ system: systemKey, success: true });
        } catch (error) {
          results.weekly.push({ system: systemKey, success: false, error: error.message });
        }
      }
    }
    
    return results;
  }

  async startContinuousMode() {
    console.log("🔄 Starting continuous automation mode...");
    
    this.continuousMode = true;
    
    while (this.continuousMode) {
      try {
        // Run scheduled tasks
        await this.runScheduledTasks();
        
        // Health check
        await this.performHealthCheck();
        
        // Wait for next cycle
        await this.sleep(this.config.healthCheckInterval);
        
      } catch (error) {
        console.error("❌ Error in continuous mode:", error.message);
        await this.sleep(60000); // Wait 1 minute before retrying
      }
    }
  }

  async performHealthCheck() {
    console.log("🏥 Performing health check...");
    
    const healthStatus = {
      timestamp: new Date().toISOString(),
      systems: {},
      overallStatus: 'healthy'
    };
    
    let healthySystems = 0;
    let totalSystems = 0;
    
    for (const [key, system] of this.automationSystems) {
      totalSystems++;
      
      if (system.status === 'running' && !system.lastError) {
        healthStatus.systems[key] = 'healthy';
        healthySystems++;
      } else if (system.status === 'error') {
        healthStatus.systems[key] = 'unhealthy';
        healthStatus.overallStatus = 'degraded';
      } else {
        healthStatus.systems[key] = 'warning';
        if (healthStatus.overallStatus === 'healthy') {
          healthStatus.overallStatus = 'warning';
        }
      }
    }
    
    const healthPercentage = Math.round((healthySystems / totalSystems) * 100);
    healthStatus.healthPercentage = healthPercentage;
    
    this.healthStatus = healthStatus;
    
    console.log(`🏥 Health check completed: ${healthPercentage}% healthy (${healthStatus.overallStatus})`);
    
    return healthStatus;
  }

  stopContinuousMode() {
    console.log("🛑 Stopping continuous automation mode...");
    this.continuousMode = false;
  }

  getSystemStatus(systemKey) {
    const system = this.automationSystems.get(systemKey);
    if (!system) return null;
    
    return {
      name: system.name,
      status: system.status,
      priority: system.priority,
      lastRun: system.lastRun,
      lastError: system.lastError,
      nextRun: system.nextRun
    };
  }

  getAllSystemsStatus() {
    const status = {};
    
    for (const [key, system] of this.automationSystems) {
      status[key] = this.getSystemStatus(key);
    }
    
    return status;
  }

  getExecutionHistory(limit = 50) {
    return this.executionHistory.slice(-limit);
  }

  saveAuditReport(audit) {
    const reportPath = path.join(this.reportsDir, 'comprehensive-audit-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(audit, null, 2));
    
    console.log(`📊 Audit report saved to: ${reportPath}`);
  }

  saveConfiguration() {
    fs.writeFileSync(this.configPath, JSON.stringify(this.config, null, 2));
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  printStatus() {
    console.log("\n" + "=".repeat(60));
    console.log("🚀 MASTER AUTOMATION ORCHESTRATOR STATUS");
    console.log("=".repeat(60));
    
    console.log(`Continuous Mode: ${this.continuousMode ? 'Running' : 'Stopped'}`);
    console.log(`Total Systems: ${this.automationSystems.size}`);
    
    const statusCounts = { running: 0, stopped: 0, error: 0, unrecoverable: 0 };
    for (const [key, system] of this.automationSystems) {
      statusCounts[system.status]++;
    }
    
    console.log(`\nSystem Status:`);
    console.log(`  Running: ${statusCounts.running}`);
    console.log(`  Stopped: ${statusCounts.stopped}`);
    console.log(`  Error: ${statusCounts.error}`);
    console.log(`  Unrecoverable: ${statusCounts.unrecoverable}`);
    
    if (this.healthStatus.overallStatus) {
      console.log(`\nOverall Health: ${this.healthStatus.overallStatus} (${this.healthStatus.healthPercentage}%)`);
    }
    
    console.log(`\nRecent Executions: ${this.executionHistory.length}`);
    
    console.log("=".repeat(60));
  }
}

// Run the master orchestrator
async function main() {
  try {
    const orchestrator = new MasterAutomationOrchestrator();
    
    // Print initial status
    orchestrator.printStatus();
    
    // Run a comprehensive audit
    console.log("\n🔍 Running initial comprehensive audit...");
    const audit = await orchestrator.runComprehensiveAudit();
    
    // Run priority queue
    console.log("\n🚀 Running priority queue...");
    const priorityResults = await orchestrator.runPriorityQueue();
    
    // Print final status
    orchestrator.printStatus();
    
    // Example: Start continuous mode for a short time
    console.log("\n🔄 Starting continuous mode for 30 seconds...");
    orchestrator.startContinuousMode();
    
    setTimeout(() => {
      orchestrator.stopContinuousMode();
      console.log("\n✅ Demo completed successfully!");
      process.exit(0);
    }, 30000);
    
  } catch (error) {
    console.error("❌ Error running master automation orchestrator:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = MasterAutomationOrchestrator;