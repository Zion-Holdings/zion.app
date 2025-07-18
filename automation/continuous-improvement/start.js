#!/usr/bin/env node

/**
 * Zion App - Continuous Improvement System Startup
 * 
 * Main entry point that orchestrates the entire continuous improvement system
 */

const ContinuousImprovementSystem = require('./index');
const ZionMonitor = require('./monitor');
const ZionImprover = require('./improve');
const CursorIntegration = require('./cursor-integration');
const winston = require('winston');

// Configure logging
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'zion-continuous-improvement' },
  transports: [
    new winston.transports.File({ filename: 'logs/system-error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/system-combined.log' }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    })
  ]
});

class ZionContinuousImprovementOrchestrator {
  constructor() {
    this.system = null;
    this.monitor = null;
    this.improver = null;
    this.cursorIntegration = null;
    this.isRunning = false;
    this.stats = {
      startTime: null,
      improvementsApplied: 0,
      improvementsFailed: 0,
      alertsGenerated: 0,
      suggestionsGenerated: 0
    };
  }

  /**
   * Initialize the entire continuous improvement system
   */
  async initialize() {
    logger.info('🚀 Initializing Zion App Continuous Improvement System...');
    
    try {
      // Create logs directory
      this.ensureLogsDirectory();
      
      // Initialize components
      await this.initializeComponents();
      
      // Start the system
      await this.start();
      
      logger.info('✅ Continuous Improvement System initialized and started successfully');
      this.logSystemStatus();
    } catch (error) {
      logger.error('❌ Failed to initialize Continuous Improvement System:', error);
      throw error;
    }
  }

  /**
   * Ensure logs directory exists
   */
  ensureLogsDirectory() {
    const logsDir = 'logs';
    if (!require('fs').existsSync(logsDir)) {
      require('fs').mkdirSync(logsDir, { recursive: true });
    }
  }

  /**
   * Initialize all system components
   */
  async initializeComponents() {
    logger.info('🔧 Initializing system components...');
    
    // Initialize Cursor integration
    this.cursorIntegration = new CursorIntegration();
    logger.info('✅ Cursor integration initialized');
    
    // Initialize improvement engine
    this.improver = new ZionImprover();
    logger.info('✅ Improvement engine initialized');
    
    // Initialize monitoring system
    this.monitor = new ZionMonitor();
    logger.info('✅ Monitoring system initialized');
    
    // Initialize main system
    this.system = new ContinuousImprovementSystem();
    logger.info('✅ Main system initialized');
  }

  /**
   * Start the continuous improvement system
   */
  async start() {
    logger.info('▶️  Starting Continuous Improvement System...');
    
    this.isRunning = true;
    this.stats.startTime = new Date().toISOString();
    
    // Start monitoring
    this.monitor.start();
    
    // Start main system
    await this.system.initialize();
    
    // Set up event handlers
    this.setupEventHandlers();
    
    // Start periodic health checks
    this.startHealthChecks();
    
    logger.info('✅ Continuous Improvement System started successfully');
  }

  /**
   * Setup event handlers for system coordination
   */
  setupEventHandlers() {
    // Handle alerts from monitor
    this.monitor.on('alert', async (alert) => {
      logger.info(`🚨 Alert received: ${alert.message}`);
      this.stats.alertsGenerated++;
      
      try {
        // Generate improvement suggestions
        const suggestions = await this.cursorIntegration.generateSuggestions(alert);
        this.stats.suggestionsGenerated += suggestions.length;
        
        if (suggestions.length > 0) {
          // Process improvements
          await this.improver.processImprovements(suggestions);
          
          // Update stats
          const improverStats = this.improver.getStats();
          this.stats.improvementsApplied += improverStats.applied;
          this.stats.improvementsFailed += improverStats.failed;
        }
      } catch (error) {
        logger.error('Error processing alert:', error);
      }
    });

    // Handle successful improvements
    this.improver.on('improvement-applied', (improvement) => {
      logger.info(`✅ Improvement applied: ${improvement.description}`);
      this.stats.improvementsApplied++;
    });

    // Handle failed improvements
    this.improver.on('improvement-failed', (improvement, error) => {
      logger.error(`❌ Improvement failed: ${improvement.description}`, error);
      this.stats.improvementsFailed++;
    });
  }

  /**
   * Start periodic health checks
   */
  startHealthChecks() {
    // Health check every 5 minutes
    setInterval(() => {
      this.performHealthCheck();
    }, 5 * 60 * 1000);
  }

  /**
   * Perform system health check
   */
  async performHealthCheck() {
    logger.info('🏥 Performing system health check...');
    
    try {
      const health = {
        timestamp: new Date().toISOString(),
        system: {
          isRunning: this.isRunning,
          uptime: process.uptime(),
          memoryUsage: process.memoryUsage(),
          cpuUsage: process.cpuUsage()
        },
        components: {
          monitor: this.monitor ? 'running' : 'stopped',
          improver: this.improver ? 'running' : 'stopped',
          cursorIntegration: this.cursorIntegration ? 'available' : 'unavailable'
        },
        stats: this.stats
      };

      // Log health status
      logger.info('System health check completed', health);
      
      // Save health report
      this.saveHealthReport(health);
      
      // Check for critical issues
      this.checkForCriticalIssues(health);
    } catch (error) {
      logger.error('Error during health check:', error);
    }
  }

  /**
   * Save health report
   */
  saveHealthReport(health) {
    try {
      const healthFile = 'logs/health-reports.json';
      let reports = [];
      
      if (require('fs').existsSync(healthFile)) {
        const content = require('fs').readFileSync(healthFile, 'utf8');
        reports = JSON.parse(content);
      }
      
      reports.push(health);
      
      // Keep only last 100 reports
      if (reports.length > 100) {
        reports.splice(0, reports.length - 100);
      }
      
      require('fs').writeFileSync(healthFile, JSON.stringify(reports, null, 2));
    } catch (error) {
      logger.error('Error saving health report:', error);
    }
  }

  /**
   * Check for critical issues
   */
  checkForCriticalIssues(health) {
    const memUsage = health.system.memoryUsage;
    const memoryUsagePercent = (memUsage.heapUsed / memUsage.heapTotal) * 100;
    
    if (memoryUsagePercent > 90) {
      logger.error('🚨 CRITICAL: High memory usage detected!', { memoryUsagePercent });
      this.handleCriticalIssue('high_memory_usage', { memoryUsagePercent });
    }
    
    if (health.stats.improvementsFailed > 10) {
      logger.error('🚨 CRITICAL: High failure rate detected!', { failedImprovements: health.stats.improvementsFailed });
      this.handleCriticalIssue('high_failure_rate', { failedImprovements: health.stats.improvementsFailed });
    }
  }

  /**
   * Handle critical issues
   */
  async handleCriticalIssue(type, data) {
    logger.error(`🚨 Handling critical issue: ${type}`, data);
    
    try {
      // Generate emergency improvement suggestions
      const suggestions = await this.cursorIntegration.generateSuggestions({
        type: 'critical_issue',
        severity: 'critical',
        data: { issueType: type, ...data }
      });
      
      if (suggestions.length > 0) {
        await this.improver.processImprovements(suggestions);
      }
    } catch (error) {
      logger.error('Error handling critical issue:', error);
    }
  }

  /**
   * Log system status
   */
  logSystemStatus() {
    logger.info('📊 System Status:', {
      isRunning: this.isRunning,
      startTime: this.stats.startTime,
      components: {
        monitor: 'active',
        improver: 'active',
        cursorIntegration: 'active'
      },
      configuration: {
        monitoringIntervals: {
          codeQuality: '30 minutes',
          performance: '15 minutes',
          security: '1 hour',
          userExperience: '45 minutes',
          dependencies: '24 hours'
        }
      }
    });
  }

  /**
   * Get system statistics
   */
  getStats() {
    return {
      ...this.stats,
      uptime: process.uptime(),
      memoryUsage: process.memoryUsage(),
      improverStats: this.improver ? this.improver.getStats() : null,
      monitorMetrics: this.monitor ? this.monitor.getMetrics() : null
    };
  }

  /**
   * Stop the continuous improvement system
   */
  async stop() {
    logger.info('🛑 Stopping Continuous Improvement System...');
    
    this.isRunning = false;
    
    try {
      // Stop monitoring
      if (this.monitor) {
        this.monitor.stop();
      }
      
      // Stop main system
      if (this.system) {
        this.system.stop();
      }
      
      logger.info('✅ Continuous Improvement System stopped successfully');
    } catch (error) {
      logger.error('Error stopping system:', error);
    }
  }

  /**
   * Restart the system
   */
  async restart() {
    logger.info('🔄 Restarting Continuous Improvement System...');
    
    await this.stop();
    await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds
    await this.initialize();
  }
}

// Create and export the orchestrator
const orchestrator = new ZionContinuousImprovementOrchestrator();

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  await orchestrator.stop();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  await orchestrator.stop();
  process.exit(0);
});

// Handle uncaught exceptions
process.on('uncaughtException', async (error) => {
  logger.error('Uncaught Exception:', error);
  await orchestrator.stop();
  process.exit(1);
});

process.on('unhandledRejection', async (reason, promise) => {
  logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
  await orchestrator.stop();
  process.exit(1);
});

// Export the orchestrator
module.exports = orchestrator;

// Start the system if this file is executed directly
if (require.main === module) {
  console.log(`
🤖 Zion App - Continuous Improvement System
===========================================

This system automatically monitors and improves the Zion App by:
- Monitoring code quality, performance, security, and user experience
- Generating intelligent improvement suggestions using Cursor AI
- Automatically applying improvements and committing changes
- Providing comprehensive logging and health monitoring

Starting system...
  `);

  orchestrator.initialize().catch(error => {
    console.error('❌ Failed to start Continuous Improvement System:', error);
    process.exit(1);
  });
} 