const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json(),
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}

/**
 * Start Working Automations Script
 *
 * Starts all working automation systems in the project:
 * - Core automation orchestrator
 * - Netlify monitoring
 * - Performance monitoring
 * - Task automation
 */

const path = require('path');

class WorkingAutomationStarter {
  constructor() {
    this.runningSystems = new Map();
    this.startTime = Date.now();
  }

  async startAllWorkingSystems() {
    logger.info('🚀 Starting Working Automation Systems');
    logger.info('='.repeat(50));
    logger.info('Initializing working automation systems...\n');

    try {
      // Start core automation orchestrator
      await this.startCoreOrchestrator();

      // Start Netlify automation
      await this.startNetlifyAutomation();

      // Start performance monitoring
      await this.startPerformanceMonitoring();

      // Start task automation
      await this.startTaskAutomation();

      logger.info('\n✅ All working automation systems started successfully!');
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
      const IntelligentAutomationOrchestrator = require('./intelligent-automation-orchestrator.js');
      const orchestrator = new IntelligentAutomationOrchestrator({
        autonomous: {
          enabled: true,
          selfHealing: true,
          learning: true,
          adaptiveScheduling: true,
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
          realTime: true,
        },
        dashboard: {
          enabled: true,
          port: 3001,
          autoRefresh: true,
        },
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

      // Start monitoring in background
      netlifyMonitor.monitorBuilds().catch(error => {
        logger.error('Netlify monitoring error:', error);
      });

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

      // Start monitoring
      performanceMonitor.start();
      this.runningSystems.set('performanceMonitor', performanceMonitor);
      logger.info('✅ Performance Monitoring started');
    } catch (error) {
      logger.error('❌ Failed to start Performance Monitoring:', error.message);
    }
  }

  async startTaskAutomation() {
    logger.info('📋 Starting Task Automation...');

    try {
      const DependencyUpdater = require('./tasks/DependencyUpdater.js');
      const dependencyUpdater = new DependencyUpdater();

      // Start the task
      await dependencyUpdater.run();
      this.runningSystems.set('dependencyUpdater', dependencyUpdater);
      logger.info('✅ Task Automation started');
    } catch (error) {
      logger.error('❌ Failed to start Task Automation:', error.message);
    }
  }

  printStatus() {
    logger.info('\n📊 Automation Systems Status:');
    logger.info('='.repeat(40));

    for (const [name, system] of this.runningSystems) {
      const status = system.isRunning ? '🟢 Running' : '🔴 Stopped';
      logger.info(`${name}: ${status}`);
    }

    const duration = Date.now() - this.startTime;
    logger.info(`\n⏱️  Startup time: ${duration}ms`);
    logger.info(`📈 Systems running: ${this.runningSystems.size}`);
  }

  keepAlive() {
    logger.info('\n🔄 Keeping automation systems alive...');
    logger.info('Press Ctrl+C to stop all systems');

    // Handle graceful shutdown
    process.on('SIGINT', async () => {
      logger.info('\n🛑 Shutting down automation systems...');
      
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
      
      logger.info('👋 All systems stopped. Goodbye!');
      process.exit(0);
    });

    // Keep the process running
    setInterval(() => {
      // Heartbeat
      const runningCount = Array.from(this.runningSystems.values()).filter(s => s.isRunning).length;
      if (runningCount < this.runningSystems.size) {
        logger.warn(`⚠️  Some systems may have stopped. Running: ${runningCount}/${this.runningSystems.size}`);
      }
    }, 300000); // Check every 5 minutes
  }
}

// Start the automation systems
if (require.main === module) {
  const starter = new WorkingAutomationStarter();
  starter.startAllWorkingSystems().catch((error) => {
    logger.error('Failed to start automation systems:', error);
    process.exit(1);
  });
}

module.exports = WorkingAutomationStarter; 