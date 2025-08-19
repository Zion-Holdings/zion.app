#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

class SimpleMasterAutomationOrchestrator {
  constructor() {
    this.reportsDir = path.resolve(__dirname, "reports");
    this.automationSystems = new Map();
    this.executionHistory = [];
    
    this.initializeAutomationSystems();
  }

  initializeAutomationSystems() {
    // Initialize all automation systems
    this.automationSystems.set('workflow-health', {
      name: 'Workflow Health Monitor',
      script: './workflow-health-monitor.cjs',
      status: 'ready',
      priority: 'critical'
    });
    
    this.automationSystems.set('dependency-health', {
      name: 'Dependency Health Checker',
      script: './dependency-health-checker.cjs',
      status: 'ready',
      priority: 'critical'
    });
    
    this.automationSystems.set('resource-optimization', {
      name: 'Resource Optimization Orchestrator',
      script: './resource-optimization-orchestrator.cjs',
      status: 'ready',
      priority: 'high'
    });
    
    this.automationSystems.set('smart-dispatch', {
      name: 'Smart Workflow Dispatcher',
      script: './smart-workflow-dispatcher.cjs',
      status: 'ready',
      priority: 'medium'
    });
    
    this.automationSystems.set('retry-system', {
      name: 'Intelligent Retry System',
      script: './intelligent-retry-system.cjs',
      status: 'ready',
      priority: 'medium'
    });
    
    console.log(`🚀 Initialized ${this.automationSystems.size} automation systems`);
  }

  async runSystem(systemKey) {
    const system = this.automationSystems.get(systemKey);
    if (!system) {
      throw new Error(`Unknown automation system: ${systemKey}`);
    }
    
    try {
      console.log(`🔄 Running ${system.name}...`);
      
      const startTime = Date.now();
      const { execSync } = require('child_process');
      
      // Run the system
      execSync(`node ${system.script}`, { 
        stdio: 'inherit',
        cwd: __dirname
      });
      
      const duration = Date.now() - startTime;
      
      // Record execution
      const execution = {
        system: systemKey,
        timestamp: new Date().toISOString(),
        duration,
        success: true,
        error: null
      };
      
      this.executionHistory.push(execution);
      system.status = 'completed';
      system.lastRun = new Date().toISOString();
      
      console.log(`✅ ${system.name} completed successfully in ${duration}ms`);
      return { success: true, duration };
      
    } catch (error) {
      console.error(`❌ ${system.name} failed:`, error.message);
      
      // Record failed execution
      const execution = {
        system: systemKey,
        timestamp: new Date().toISOString(),
        duration: 0,
        success: false,
        error: error.message
      };
      
      this.executionHistory.push(execution);
      system.status = 'error';
      system.lastError = error.message;
      
      throw error;
    }
  }

  async runAllSystems() {
    console.log("🚀 Running all automation systems...");
    
    const results = {
      timestamp: new Date().toISOString(),
      systems: {},
      summary: {
        total: this.automationSystems.size,
        success: 0,
        failed: 0,
        totalDuration: 0
      }
    };
    
    // Run systems in priority order
    const priorityOrder = ['critical', 'high', 'medium', 'low'];
    
    for (const priority of priorityOrder) {
      const systems = Array.from(this.automationSystems.entries())
        .filter(([key, system]) => system.priority === priority);
      
      if (systems.length === 0) continue;
      
      console.log(`\n📋 Executing ${priority} priority systems (${systems.length} systems)`);
      
      for (const [key, system] of systems) {
        try {
          const result = await this.runSystem(key);
          results.systems[key] = {
            success: true,
            duration: result.duration,
            error: null
          };
          results.summary.success++;
          results.summary.totalDuration += result.duration;
        } catch (error) {
          results.systems[key] = {
            success: false,
            duration: 0,
            error: error.message
          };
          results.summary.failed++;
        }
      }
    }
    
    // Save results
    this.saveResults(results);
    
    return results;
  }

  async runComprehensiveAudit() {
    console.log("🔍 Running comprehensive automation audit...");
    
    const audit = {
      timestamp: new Date().toISOString(),
      systems: {},
      overallHealth: 0,
      recommendations: []
    };
    
    let totalHealth = 0;
    let systemCount = 0;
    
    // Check each system
    for (const [key, system] of this.automationSystems) {
      const health = this.calculateSystemHealth(system);
      audit.systems[key] = health;
      
      totalHealth += health.score;
      systemCount++;
      
      if (health.score < 70) {
        audit.recommendations.push({
          system: key,
          issue: health.issues.join(', '),
          priority: health.score < 50 ? 'high' : 'medium',
          action: `Run ${key} to resolve issues`
        });
      }
    }
    
    // Calculate overall health
    audit.overallHealth = systemCount > 0 ? Math.round(totalHealth / systemCount) : 0;
    
    // Save audit
    this.saveAudit(audit);
    
    console.log(`📊 Comprehensive audit completed. Overall health: ${audit.overallHealth}/100`);
    
    return audit;
  }

  calculateSystemHealth(system) {
    const health = {
      score: 100,
      status: system.status,
      issues: [],
      recommendations: []
    };
    
    // Check status
    if (system.status === 'error') {
      health.score -= 30;
      health.issues.push('System in error state');
    } else if (system.status === 'completed') {
      health.score += 10; // Bonus for recent completion
    }
    
    // Check last run
    if (system.lastRun) {
      const lastRun = new Date(system.lastRun);
      const hoursSinceLastRun = (Date.now() - lastRun.getTime()) / (1000 * 60 * 60);
      
      if (hoursSinceLastRun > 24) {
        health.score -= 15;
        health.issues.push('System not run recently');
      }
    } else {
      health.score -= 25;
      health.issues.push('System never run');
    }
    
    // Check for errors
    if (system.lastError) {
      health.score -= 20;
      health.issues.push('System has recent errors');
    }
    
    // Ensure score doesn't go below 0
    health.score = Math.max(0, health.score);
    
    // Generate recommendations
    if (health.score < 70) {
      if (system.status === 'error') {
        health.recommendations.push('Restart system to clear error state');
      }
      if (!system.lastRun || (new Date(system.lastRun) < new Date(Date.now() - 24 * 60 * 60 * 1000))) {
        health.recommendations.push('Run system to update status');
      }
    }
    
    return health;
  }

  saveResults(results) {
    const resultsPath = path.join(this.reportsDir, 'automation-execution-results.json');
    fs.writeFileSync(resultsPath, JSON.stringify(results, null, 2));
    console.log(`📊 Execution results saved to: ${resultsPath}`);
  }

  saveAudit(audit) {
    const auditPath = path.join(this.reportsDir, 'comprehensive-audit-report.json');
    fs.writeFileSync(auditPath, JSON.stringify(audit, null, 2));
    console.log(`📊 Audit report saved to: ${auditPath}`);
  }

  printStatus() {
    console.log("\n" + "=".repeat(60));
    console.log("🚀 SIMPLE MASTER AUTOMATION ORCHESTRATOR STATUS");
    console.log("=".repeat(60));
    
    console.log(`Total Systems: ${this.automationSystems.size}`);
    
    const statusCounts = { ready: 0, completed: 0, error: 0 };
    for (const [key, system] of this.automationSystems) {
      statusCounts[system.status]++;
    }
    
    console.log(`\nSystem Status:`);
    console.log(`  Ready: ${statusCounts.ready}`);
    console.log(`  Completed: ${statusCounts.completed}`);
    console.log(`  Error: ${statusCounts.error}`);
    
    console.log(`\nRecent Executions: ${this.executionHistory.length}`);
    
    if (this.executionHistory.length > 0) {
      const lastExecution = this.executionHistory[this.executionHistory.length - 1];
      console.log(`Last Execution: ${lastExecution.system} at ${lastExecution.timestamp}`);
    }
    
    console.log("=".repeat(60));
  }

  printSummary(results) {
    console.log("\n" + "=".repeat(60));
    console.log("📊 AUTOMATION EXECUTION SUMMARY");
    console.log("=".repeat(60));
    
    console.log(`Total Systems: ${results.summary.total}`);
    console.log(`Success: ${results.summary.success}`);
    console.log(`Failed: ${results.summary.failed}`);
    console.log(`Total Duration: ${results.summary.totalDuration}ms`);
    
    if (Object.keys(results.systems).length > 0) {
      console.log(`\n📋 SYSTEM RESULTS:`);
      for (const [key, result] of Object.entries(results.systems)) {
        const status = result.success ? '✅' : '❌';
        console.log(`  ${status} ${key}: ${result.success ? 'Success' : 'Failed'} (${result.duration}ms)`);
        if (!result.success && result.error) {
          console.log(`    Error: ${result.error}`);
        }
      }
    }
    
    console.log("=".repeat(60));
  }
}

// Run the orchestrator
async function main() {
  try {
    const orchestrator = new SimpleMasterAutomationOrchestrator();
    
    // Print initial status
    orchestrator.printStatus();
    
    // Run comprehensive audit
    console.log("\n🔍 Running comprehensive audit...");
    const audit = await orchestrator.runComprehensiveAudit();
    
    // Run all systems
    console.log("\n🚀 Running all automation systems...");
    const results = await orchestrator.runAllSystems();
    
    // Print summary
    orchestrator.printSummary(results);
    
    // Print final status
    orchestrator.printStatus();
    
    console.log("\n🎉 All automation systems completed successfully!");
    
  } catch (error) {
    console.error("❌ Error running simple master automation orchestrator:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = SimpleMasterAutomationOrchestrator;