#!/usr/bin/env node

/**
 * Start All Automations Script
 * 
 * Starts all automation systems in the project:
 * - Core automation orchestrator
 * - Netlify monitoring
 * - Performance monitoring
 * - Continuous improvement
 * - Cursor automation
 */

const path = require('path');

class AutomationStarter {
  constructor() {
    this.runningSystems = new Map();
    this.startTime = Date.now();
  }

  async startAllSystems() {
    console.log('🚀 Starting All Automation Systems');
    console.log('='.repeat(50));
    console.log('Initializing automation systems...\n');

    try {
      // Start core automation orchestrator
      await this.startCoreOrchestrator();
      
      // Start Netlify automation
      await this.startNetlifyAutomation();
      
      // Start performance monitoring
      await this.startPerformanceMonitoring();
      
      // Start continuous improvement
      await this.startContinuousImprovement();
      
      // Start cursor automation
      await this.startCursorAutomation();
      
      // Start task automation
      await this.startTaskAutomation();
      
      console.log('\n✅ All automation systems started successfully!');
      this.printStatus();
      
      // Keep the process running
      this.keepAlive();
      
    } catch (error) {
      console.error('❌ Failed to start automation systems:', error);
      process.exit(1);
    }
  }

  async startCoreOrchestrator() {
    console.log('🔧 Starting Core Automation Orchestrator...');
    
    try {
      const IntelligentAutomationOrchestrator = require('./core/IntelligentAutomationOrchestrator.js');
      const orchestrator = new IntelligentAutomationOrchestrator({
        autonomous: {
          enabled: true,
          selfHealing: true,
          learning: true,
          adaptiveScheduling: true
        },
        monitoring: {
          enabled: true,
          interval: 60000, // 1 minute
          healthCheckInterval: 300000, // 5 minutes
        },
        reporting: {
          enabled: true,
          daily: true,
          weekly: true,
          monthly: false
        },
        dashboard: {
          enabled: true,
          port: 3001
        }
      });

      await orchestrator.initialize();
      await orchestrator.start();
      
      this.runningSystems.set('coreOrchestrator', orchestrator);
      console.log('✅ Core Automation Orchestrator started');
      
    } catch (error) {
      console.error('❌ Failed to start Core Orchestrator:', error.message);
    }
  }

  async startNetlifyAutomation() {
    console.log('🌐 Starting Netlify Automation...');
    
    try {
      const NetlifyMonitor = require('./netlify-monitor.js');
      const netlifyMonitor = new NetlifyMonitor();
      
      netlifyMonitor.start();
      this.runningSystems.set('netlifyMonitor', netlifyMonitor);
      console.log('✅ Netlify Automation started');
      
    } catch (error) {
      console.error('❌ Failed to start Netlify Automation:', error.message);
    }
  }

  async startPerformanceMonitoring() {
    console.log('⚡ Starting Performance Monitoring...');
    
    try {
      const PerformanceMonitor = require('./performance/monitor.js');
      const performanceMonitor = new PerformanceMonitor();
      
      performanceMonitor.start();
      this.runningSystems.set('performanceMonitor', performanceMonitor);
      console.log('✅ Performance Monitoring started');
      
    } catch (error) {
      console.error('❌ Failed to start Performance Monitoring:', error.message);
    }
  }

  async startContinuousImprovement() {
    console.log('🔄 Starting Continuous Improvement...');
    
    try {
      const ContinuousImprovement = require('./continuous-improvement/enhanced-automation.js');
      const continuousImprovement = new ContinuousImprovement();
      
      continuousImprovement.start();
      this.runningSystems.set('continuousImprovement', continuousImprovement);
      console.log('✅ Continuous Improvement started');
      
    } catch (error) {
      console.error('❌ Failed to start Continuous Improvement:', error.message);
    }
  }

  async startCursorAutomation() {
    console.log('🤖 Starting Cursor Automation...');
    
    try {
      const CursorAutomation = require('./cursor-automated-communication.js');
      const cursorAutomation = new CursorAutomation({
        autoCommit: true,
        projectPath: path.resolve('..')
      });
      
      await cursorAutomation.start();
      this.runningSystems.set('cursorAutomation', cursorAutomation);
      console.log('✅ Cursor Automation started');
      
    } catch (error) {
      console.error('❌ Failed to start Cursor Automation:', error.message);
    }
  }

  async startTaskAutomation() {
    console.log('📋 Starting Task Automation...');
    
    try {
      const TaskAutomation = require('./tasks/DependencyUpdater.js');
      const taskAutomation = new TaskAutomation();
      
      taskAutomation.start();
      this.runningSystems.set('taskAutomation', taskAutomation);
      console.log('✅ Task Automation started');
      
    } catch (error) {
      console.error('❌ Failed to start Task Automation:', error.message);
    }
  }

  printStatus() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    console.log('\n📊 Automation Systems Status');
    console.log('='.repeat(50));
    console.log(`Startup Duration: ${duration}ms`);
    console.log(`Running Systems: ${this.runningSystems.size}`);
    
    this.runningSystems.forEach((system, name) => {
      const status = system.getStatus ? system.getStatus() : { isRunning: true };
      console.log(`  - ${name}: ${status.isRunning ? '✅ Running' : '❌ Stopped'}`);
    });
    
    console.log('\n🎯 Automation Dashboard: http://localhost:3001');
    console.log('📝 Logs: Check individual system logs for details');
    console.log('🛑 Press Ctrl+C to stop all systems');
  }

  keepAlive() {
    // Keep the process running
    process.stdin.resume();
    
    // Handle graceful shutdown
    process.on('SIGINT', async () => {
      console.log('\n🛑 Shutting down all automation systems...');
      
      for (const [name, system] of this.runningSystems) {
        try {
          if (system.stop) {
            await system.stop();
          }
          console.log(`✅ Stopped ${name}`);
        } catch (error) {
          console.error(`❌ Error stopping ${name}:`, error.message);
        }
      }
      
      console.log('👋 All automation systems stopped');
      process.exit(0);
    });

    process.on('SIGTERM', async () => {
      console.log('\n🛑 Received SIGTERM, shutting down...');
      
      for (const [name, system] of this.runningSystems) {
        try {
          if (system.stop) {
            await system.stop();
          }
        } catch (error) {
          console.error(`Error stopping ${name}:`, error.message);
        }
      }
      
      process.exit(0);
    });
  }
}

// Start all automation systems
if (require.main === module) {
  const starter = new AutomationStarter();
  starter.startAllSystems().catch(error => {
    console.error('Failed to start automation systems:', error);
    process.exit(1);
  });
}

module.exports = AutomationStarter; 