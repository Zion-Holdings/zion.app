
const winston = require('winston');

const logger = winston.createLogger({
  level: info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: automation-script' },
  transports: [
    new winston.transports.File({ filename: logs/error.log', level: error' }),
    new winston.transports.File({ filename: logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

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
    logger.info('🚀 Starting All Automation Systems');
    logger.info('='.repeat(50));
    logger.info('Initializing automation systems...\n');

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
      
      // Start Cursor integration system
      await this.startCursorIntegrationSystem();
      
      // Start task automation
      await this.startTaskAutomation();
      
      logger.info('\n✅ All automation systems started successfully!');
      this.printStatus();
      
      // Keep the process running
      this.keepAlive();
      
    } catch (error) {
      logger.error('❌ Failed to start automation systems:', error);
      process.exit(1);
    }
  }

  async startCoreOrchestrator() {
    logger.info('🔧 Starting Core Automation Orchestrator...');
    
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
      logger.info('✅ Core Automation Orchestrator started');
      
    } catch (error) {
      logger.error('❌ Failed to start Core Orchestrator:', error.message);
    }
  }

  async startNetlifyAutomation() {
    logger.info('🌐 Starting Netlify Automation...');
    
    try {
      const NetlifyMonitor = require('./netlify-monitor.js');
      const netlifyMonitor = new NetlifyMonitor();
      
      netlifyMonitor.start();
      this.runningSystems.set('netlifyMonitor', netlifyMonitor);
      logger.info('✅ Netlify Automation started');
      
    } catch (error) {
      logger.error('❌ Failed to start Netlify Automation:', error.message);
    }
  }

  async startPerformanceMonitoring() {
    logger.info('⚡ Starting Performance Monitoring...');
    
    try {
      const PerformanceMonitor = require('./performance/monitor.js');
      const performanceMonitor = new PerformanceMonitor();
      
      performanceMonitor.start();
      this.runningSystems.set('performanceMonitor', performanceMonitor);
      logger.info('✅ Performance Monitoring started');
      
    } catch (error) {
      logger.error('❌ Failed to start Performance Monitoring:', error.message);
    }
  }

  async startContinuousImprovement() {
    logger.info('🔄 Starting Continuous Improvement...');
    
    try {
      const ContinuousImprovement = require('./continuous-improvement/enhanced-automation.js');
      const continuousImprovement = new ContinuousImprovement();
      
      continuousImprovement.start();
      this.runningSystems.set('continuousImprovement', continuousImprovement);
      logger.info('✅ Continuous Improvement started');
      
    } catch (error) {
      logger.error('❌ Failed to start Continuous Improvement:', error.message);
    }
  }

  async startCursorAutomation() {
    logger.info('🤖 Starting Cursor Automation...');
    
    try {
      const CursorAutomation = require('./cursor-automated-communication.js');
      const cursorAutomation = new CursorAutomation({
        autoCommit: true,
        projectPath: path.resolve('..')
      });
      
      await cursorAutomation.start();
      this.runningSystems.set('cursorAutomation', cursorAutomation);
      logger.info('✅ Cursor Automation started');
      
    } catch (error) {
      logger.error('❌ Failed to start Cursor Automation:', error.message);
    }
  }

  async startCursorIntegrationSystem() {
    console.log('🔗 Starting Cursor Integration System...');
    
    try {
      const CursorIntegrationSystem = require('./cursor-integration-system.js');
      const cursorIntegrationSystem = new CursorIntegrationSystem({
        enableChatAutomation: true,
        enableChatMonitor: true,
        enableTodoQueue: true,
        autoProcessChats: true
      });
      
      await cursorIntegrationSystem.initialize();
      this.runningSystems.set('cursorIntegrationSystem', cursorIntegrationSystem);
      console.log('✅ Cursor Integration System started');
      
    } catch (error) {
      console.error('❌ Failed to start Cursor Integration System:', error.message);
    }
  }

  async startTaskAutomation() {
    logger.info('📋 Starting Task Automation...');
    
    try {
      const TaskAutomation = require('./tasks/DependencyUpdater.js');
      const taskAutomation = new TaskAutomation();
      
      taskAutomation.start();
      this.runningSystems.set('taskAutomation', taskAutomation);
      logger.info('✅ Task Automation started');
      
    } catch (error) {
      logger.error('❌ Failed to start Task Automation:', error.message);
    }
  }

  printStatus() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    logger.info('\n📊 Automation Systems Status');
    logger.info('='.repeat(50));
    logger.info(`Startup Duration: ${duration}ms`);
    logger.info(`Running Systems: ${this.runningSystems.size}`);
    
    this.runningSystems.forEach((system, name) => {
      const status = system.getStatus ? system.getStatus() : { isRunning: true };
      console.log(`  - ${name}: ${status.isRunning ? '✅ Running' : '❌ Stopped'}`);
    });
    
    logger.info('\n🎯 Automation Dashboard: http://localhost:3001');
    logger.info('📝 Logs: Check individual system logs for details');
    logger.info('🛑 Press Ctrl+C to stop all systems');
  }

  keepAlive() {
    // Keep the process running
    process.stdin.resume();
    
    // Handle graceful shutdown
    process.on('SIGINT', async () => {
      logger.info('\n🛑 Shutting down all automation systems...');
      
      for (const [name, system] of this.runningSystems) {
        try {
          if (system.stop) {
            await system.stop();
          }
          logger.info(`✅ Stopped ${name}`);
        } catch (error) {
          logger.error(`❌ Error stopping ${name}:`, error.message);
        }
      }
      
      logger.info('👋 All automation systems stopped');
      process.exit(0);
    });

    process.on('SIGTERM', async () => {
      logger.info('\n🛑 Received SIGTERM, shutting down...');
      
      for (const [name, system] of this.runningSystems) {
        try {
          if (system.stop) {
            await system.stop();
          }
        } catch (error) {
          logger.error(`Error stopping ${name}:`, error.message);
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
    logger.error('Failed to start automation systems:', error);
    process.exit(1);
  });
}

module.exports = AutomationStarter; 