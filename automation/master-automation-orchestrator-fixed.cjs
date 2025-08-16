#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class MasterAutomationOrchestrator {
  constructor() {
    this.configPath = path.resolve(__dirname, "config/orchestrator-config.json");
    this.reportsDir = path.resolve(__dirname, "reports");
    this.automationSystems = new Map();
    this.systemStatus = new Map();
    this.executionHistory = [];
    
    this.ensureDirectories();
    this.loadConfiguration();
    this.initializeAutomationSystems();
  }

  ensureDirectories() {
    [path.dirname(this.configPath), this.reportsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  loadConfiguration() {
    this.config = {
      maxConcurrentSystems: 3,
      systemTimeoutMs: 300000, // 5 minutes
      autoRetry: true,
      maxRetries: 2,
      retryDelayMs: 30000,
      healthCheckInterval: 60000, // 1 minute
      workflowProtection: true, // Prevent automation from modifying workflows
      backupBeforeModification: true,
      logLevel: 'info'
    };
    
    // Save default configuration
    this.saveConfiguration();
  }

  saveConfiguration() {
    fs.writeFileSync(this.configPath, JSON.stringify(this.config, null, 2));
  }

  initializeAutomationSystems() {
    console.log("🚀 Initializing automation systems...");
    
    // Initialize core automation systems
    this.automationSystems.set('dependency-health', {
      name: 'Dependency Health Checker',
      class: this.safeRequire('./dependency-health-checker.cjs'),
      instance: null,
      status: 'stopped',
      lastRun: null,
      nextRun: null,
      priority: 'critical',
      safeMode: true
    });
    
    this.automationSystems.set('workflow-standardization', {
      name: 'Workflow Template Standardizer (Safe Mode)',
      class: this.safeRequire('./workflow-template-standardizer-simple.cjs'),
      instance: null,
      status: 'stopped',
      lastRun: null,
      nextRun: null,
      priority: 'high',
      safeMode: true,
      workflowProtection: true
    });
    
    this.automationSystems.set('smart-dispatch', {
      name: 'Smart Workflow Dispatcher',
      class: this.safeRequire('./smart-workflow-dispatcher.cjs'),
      instance: null,
      status: 'stopped',
      lastRun: null,
      nextRun: null,
      priority: 'medium',
      safeMode: true
    });
    
    this.automationSystems.set('security-monitor', {
      name: 'Security Monitor',
      class: this.safeRequire('./security-auto-heal.cjs'),
      instance: null,
      status: 'stopped',
      lastRun: null,
      nextRun: null,
      priority: 'high',
      safeMode: true
    });
    
    this.automationSystems.set('performance-optimizer', {
      name: 'Performance Optimizer',
      class: this.safeRequire('./performance-optimizer.cjs'),
      instance: null,
      status: 'stopped',
      lastRun: null,
      nextRun: null,
      priority: 'medium',
      safeMode: true
    });
    
    console.log(`🚀 Initialized ${this.automationSystems.size} automation systems`);
  }

  safeRequire(modulePath) {
    try {
      const fullPath = path.resolve(__dirname, modulePath);
      if (fs.existsSync(fullPath)) {
        return require(fullPath);
      } else {
        console.warn(`⚠️  Module not found: ${modulePath}`);
        return null;
      }
    } catch (error) {
      console.warn(`⚠️  Failed to require ${modulePath}:`, error.message);
      return null;
    }
  }

  async startAutomationSystem(systemKey) {
    const system = this.automationSystems.get(systemKey);
    if (!system) {
      throw new Error(`Unknown automation system: ${systemKey}`);
    }
    
    if (!system.class) {
      throw new Error(`System ${systemKey} has no valid class`);
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
    
    if (!system.class) {
      throw new Error(`System ${systemKey} has no valid class`);
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
      if (systemKey === 'workflow-standardization') {
        result = await this.runWorkflowStandardizer(system, options);
      } else if (systemKey === 'smart-dispatch') {
        result = await this.runSmartDispatcher(system, options);
      } else {
        result = await this.runGenericSystem(system, options);
      }
      
      const executionTime = Date.now() - startTime;
      
      // Record execution
      this.recordExecution(systemKey, {
        status: 'success',
        executionTime,
        result,
        timestamp: new Date().toISOString()
      });
      
      console.log(`✅ ${system.name} completed successfully in ${executionTime}ms`);
      return result;
      
    } catch (error) {
      console.error(`❌ Error running ${system.name}:`, error.message);
      
      // Record failure
      this.recordExecution(systemKey, {
        status: 'error',
        error: error.message,
        timestamp: new Date().toISOString()
      });
      
      system.status = 'error';
      system.lastError = error.message;
      
      // Auto-retry if enabled
      if (this.config.autoRetry && system.retryCount < this.config.maxRetries) {
        system.retryCount = (system.retryCount || 0) + 1;
        console.log(`🔄 Retrying ${system.name} (attempt ${system.retryCount}/${this.config.maxRetries})...`);
        
        setTimeout(() => {
          this.runAutomationSystem(systemKey, options);
        }, this.config.retryDelayMs);
      }
      
      throw error;
    }
  }

  async runWorkflowStandardizer(system, options) {
    // Special handling for workflow standardizer to prevent conflicts
    if (this.config.workflowProtection) {
      console.log("🛡️  Workflow protection enabled - running in safe mode");
      
      // Check if workflows are currently stable
      const workflowStatus = await this.checkWorkflowHealth();
      if (workflowStatus.hasIssues) {
        console.log("⚠️  Workflows have issues - skipping standardization");
        return { skipped: true, reason: 'Workflows have issues' };
      }
    }
    
    // Run the standardizer
    const standardizer = system.instance;
    if (standardizer && typeof standardizer.standardizeWorkflows === 'function') {
      return await standardizer.standardizeWorkflows();
    } else {
      throw new Error('Workflow standardizer not properly initialized');
    }
  }

  async runSmartDispatcher(system, options) {
    // Run the smart dispatcher
    const dispatcher = system.instance;
    if (dispatcher && typeof dispatcher.dispatchWorkflows === 'function') {
      return await dispatcher.dispatchWorkflows();
    } else {
      throw new Error('Smart dispatcher not properly initialized');
    }
  }

  async runGenericSystem(system, options) {
    // Generic system execution
    const instance = system.instance;
    if (instance && typeof instance.run === 'function') {
      return await instance.run(options);
    } else if (instance && typeof instance.execute === 'function') {
      return await instance.execute(options);
    } else {
      throw new Error(`System ${system.name} has no run/execute method`);
    }
  }

  async checkWorkflowHealth() {
    const workflowsDir = path.resolve(__dirname, "../.github/workflows");
    if (!fs.existsSync(workflowsDir)) {
      return { hasIssues: false, issues: [] };
    }
    
    const workflows = fs.readdirSync(workflowsDir)
      .filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
    
    const issues = [];
    
    for (const workflow of workflows) {
      const workflowPath = path.join(workflowsDir, workflow);
      const content = fs.readFileSync(workflowPath, 'utf8');
      
      // Check for common issues
      if (!content.includes('jobs:')) {
        issues.push(`${workflow}: Missing jobs section`);
      }
      
      if (!content.includes('steps:')) {
        issues.push(`${workflow}: Missing steps section`);
      }
      
      if (!content.includes('runs-on:')) {
        issues.push(`${workflow}: Missing runs-on configuration`);
      }
      
      // Check for YAML syntax issues (basic)
      if (content.includes('  - name:') && content.includes('    - name:')) {
        issues.push(`${workflow}: Inconsistent indentation detected`);
      }
    }
    
    return {
      hasIssues: issues.length > 0,
      issues,
      totalWorkflows: workflows.length
    };
  }

  recordExecution(systemKey, execution) {
    this.executionHistory.push({
      system: systemKey,
      ...execution
    });
    
    // Keep only last 100 executions
    if (this.executionHistory.length > 100) {
      this.executionHistory = this.executionHistory.slice(-100);
    }
    
    // Save to file
    const historyPath = path.join(this.reportsDir, 'execution-history.json');
    fs.writeFileSync(historyPath, JSON.stringify(this.executionHistory, null, 2));
  }

  async runAllSystems(options = {}) {
    console.log("🚀 Running all automation systems...");
    
    const results = {};
    const runningSystems = [];
    
    for (const [systemKey, system] of this.automationSystems) {
      if (system.status === 'running') {
        runningSystems.push(systemKey);
      }
    }
    
    // Limit concurrent systems
    const maxConcurrent = Math.min(this.config.maxConcurrentSystems, runningSystems.length);
    
    for (let i = 0; i < runningSystems.length; i += maxConcurrent) {
      const batch = runningSystems.slice(i, i + maxConcurrent);
      
      const batchPromises = batch.map(async (systemKey) => {
        try {
          const result = await this.runAutomationSystem(systemKey, options);
          results[systemKey] = { success: true, result };
        } catch (error) {
          results[systemKey] = { success: false, error: error.message };
        }
      });
      
      await Promise.all(batchPromises);
      
      // Small delay between batches
      if (i + maxConcurrent < runningSystems.length) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    return results;
  }

  async startAllSystems() {
    console.log("🚀 Starting all automation systems...");
    
    const results = {};
    
    for (const [systemKey, system] of this.automationSystems) {
      try {
        const success = await this.startAutomationSystem(systemKey);
        results[systemKey] = success;
      } catch (error) {
        console.error(`❌ Failed to start ${systemKey}:`, error.message);
        results[systemKey] = false;
      }
    }
    
    return results;
  }

  async stopAllSystems() {
    console.log("🛑 Stopping all automation systems...");
    
    const results = {};
    
    for (const [systemKey, system] of this.automationSystems) {
      try {
        const success = await this.stopAutomationSystem(systemKey);
        results[systemKey] = success;
      } catch (error) {
        console.error(`❌ Failed to stop ${systemKey}:`, error.message);
        results[systemKey] = false;
      }
    }
    
    return results;
  }

  getSystemStatus() {
    const status = {};
    
    for (const [systemKey, system] of this.automationSystems) {
      status[systemKey] = {
        name: system.name,
        status: system.status,
        lastRun: system.lastRun,
        nextRun: system.nextRun,
        priority: system.priority,
        safeMode: system.safeMode || false,
        lastError: system.lastError
      };
    }
    
    return status;
  }

  generateHealthReport() {
    const status = this.getSystemStatus();
    const healthReport = {
      timestamp: new Date().toISOString(),
      totalSystems: Object.keys(status).length,
      runningSystems: Object.values(status).filter(s => s.status === 'running').length,
      stoppedSystems: Object.values(status).filter(s => s.status === 'stopped').length,
      errorSystems: Object.values(status).filter(s => s.status === 'error').length,
      systems: status,
      recentExecutions: this.executionHistory.slice(-10),
      recommendations: this.generateRecommendations(status)
    };
    
    // Save health report
    const reportPath = path.join(this.reportsDir, `health-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(healthReport, null, 2));
    
    return healthReport;
  }

  generateRecommendations(status) {
    const recommendations = [];
    
    const errorSystems = Object.values(status).filter(s => s.status === 'error');
    if (errorSystems.length > 0) {
      recommendations.push(`Review ${errorSystems.length} systems with errors`);
    }
    
    const stoppedSystems = Object.values(status).filter(s => s.status === 'stopped');
    if (stoppedSystems.length > 0) {
      recommendations.push(`Consider starting ${stoppedSystems.length} stopped systems`);
    }
    
    if (Object.values(status).filter(s => s.status === 'running').length > this.config.maxConcurrentSystems) {
      recommendations.push('Reduce concurrent systems to prevent resource conflicts');
    }
    
    return recommendations;
  }

  printStatus() {
    console.log('\n📊 Automation Systems Status');
    console.log('==============================');
    
    const status = this.getSystemStatus();
    
    for (const [systemKey, system] of Object.entries(status)) {
      const statusIcon = system.status === 'running' ? '🟢' : 
                        system.status === 'stopped' ? '🔴' : '🟡';
      
      console.log(`${statusIcon} ${system.name} (${systemKey})`);
      console.log(`   Status: ${system.status}`);
      console.log(`   Priority: ${system.priority}`);
      console.log(`   Safe Mode: ${system.safeMode ? 'Yes' : 'No'}`);
      
      if (system.lastRun) {
        console.log(`   Last Run: ${system.lastRun}`);
      }
      
      if (system.lastError) {
        console.log(`   Last Error: ${system.lastError}`);
      }
      
      console.log('');
    }
  }
}

// Run the orchestrator if called directly
if (require.main === module) {
  (async () => {
    try {
      console.log("🚀 Starting Master Automation Orchestrator...");
      
      const orchestrator = new MasterAutomationOrchestrator();
      
      // Start all systems
      await orchestrator.startAllSystems();
      
      // Print status
      orchestrator.printStatus();
      
      // Generate health report
      const healthReport = orchestrator.generateHealthReport();
      console.log(`💾 Health report saved to: ${orchestrator.reportsDir}`);
      
      // Run all systems
      console.log("\n🔄 Running all systems...");
      const results = await orchestrator.runAllSystems();
      
      console.log("\n📊 Execution Results:");
      for (const [system, result] of Object.entries(results)) {
        const icon = result.success ? '✅' : '❌';
        console.log(`${icon} ${system}: ${result.success ? 'Success' : result.error}`);
      }
      
    } catch (error) {
      console.error("❌ Error running master automation orchestrator:", error);
      process.exit(1);
    }
  })();
}

module.exports = MasterAutomationOrchestrator;
