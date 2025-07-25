#!/usr/bin/env node

/**
 * Automation Monitor Script
 * 
 * Continuous monitoring and automatic fixing of automation systems:
 * - Runs health checks periodically
 * - Triggers fixes automatically
 * - Monitors system performance
 * - Sends alerts for critical issues
 */

const winston = require('winston');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

// Configure logging
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-monitor' },
  transports: [
    new winston.transports.File({ filename: 'logs/monitor.log' }),
    new winston.transports.File({ filename: 'logs/monitor-error.log', level: 'error' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

class AutomationMonitor {
  constructor() {
    this.config = {
      healthCheckInterval: 300000, // 5 minutes
      fixCheckInterval: 900000,    // 15 minutes
      maxConsecutiveFailures: 3,
      logsDir: path.join(__dirname, '../logs'),
      statusFile: path.join(__dirname, '../logs/monitor-status.json'),
    };
    
    this.status = {
      isRunning: false,
      startTime: null,
      lastHealthCheck: null,
      lastFixCheck: null,
      consecutiveFailures: 0,
      totalHealthChecks: 0,
      totalFixes: 0,
      errors: []
    };
    
    this.healthCheckProcess = null;
    this.fixProcess = null;
    
    this.loadStatus();
  }

  async start() {
    logger.info('🚀 Starting Automation Monitor');
    
    try {
      this.status.isRunning = true;
      this.status.startTime = new Date().toISOString();
      this.saveStatus();
      
      // Start monitoring loops
      this.startHealthCheckLoop();
      this.startFixCheckLoop();
      
      // Keep the process alive
      this.keepAlive();
      
      logger.info('✅ Automation Monitor started successfully');
    } catch (error) {
      logger.error('❌ Failed to start Automation Monitor:', error);
      this.status.isRunning = false;
      this.saveStatus();
      throw error;
    }
  }

  startHealthCheckLoop() {
    const runHealthCheck = async () => {
      if (!this.status.isRunning) return;
      
      try {
        logger.info('🔍 Running health check...');
        
        const healthChecker = require('./automation-health-check.js');
        const checker = new healthChecker();
        
        const success = await checker.run();
        
        this.status.lastHealthCheck = new Date().toISOString();
        this.status.totalHealthChecks++;
        
        if (success) {
          this.status.consecutiveFailures = 0;
          logger.info('✅ Health check completed successfully');
        } else {
          this.status.consecutiveFailures++;
          logger.warn(`⚠️ Health check failed (${this.status.consecutiveFailures}/${this.config.maxConsecutiveFailures})`);
          
          if (this.status.consecutiveFailures >= this.config.maxConsecutiveFailures) {
            logger.error('❌ Too many consecutive failures, triggering emergency fix');
            await this.triggerEmergencyFix();
          }
        }
        
        this.saveStatus();
      } catch (error) {
        logger.error('❌ Health check error:', error);
        this.status.consecutiveFailures++;
        this.status.errors.push({
          timestamp: new Date().toISOString(),
          type: 'health_check_error',
          error: error.message
        });
        this.saveStatus();
      }
      
      // Schedule next health check
      if (this.status.isRunning) {
        setTimeout(runHealthCheck, this.config.healthCheckInterval);
      }
    };
    
    // Start the first health check
    runHealthCheck();
  }

  startFixCheckLoop() {
    const runFixCheck = async () => {
      if (!this.status.isRunning) return;
      
      try {
        logger.info('🔧 Running fix check...');
        
        const fixer = require('./fix-automation-errors.js');
        const automationFixer = new fixer();
        
        const success = await automationFixer.run();
        
        this.status.lastFixCheck = new Date().toISOString();
        
        if (success) {
          this.status.totalFixes++;
          logger.info('✅ Fix check completed successfully');
        } else {
          logger.warn('⚠️ Fix check failed');
        }
        
        this.saveStatus();
      } catch (error) {
        logger.error('❌ Fix check error:', error);
        this.status.errors.push({
          timestamp: new Date().toISOString(),
          type: 'fix_check_error',
          error: error.message
        });
        this.saveStatus();
      }
      
      // Schedule next fix check
      if (this.status.isRunning) {
        setTimeout(runFixCheck, this.config.fixCheckInterval);
      }
    };
    
    // Start the first fix check
    runFixCheck();
  }

  async triggerEmergencyFix() {
    logger.info('🚨 Triggering emergency fix...');
    
    try {
      // Stop current automation processes
      await this.stopAutomationProcesses();
      
      // Wait a moment
      await this.sleep(5000);
      
      // Run comprehensive fix
      const fixer = require('./fix-automation-errors.js');
      const automationFixer = new fixer();
      
      const success = await automationFixer.run();
      
      if (success) {
        logger.info('✅ Emergency fix completed successfully');
        this.status.consecutiveFailures = 0;
      } else {
        logger.error('❌ Emergency fix failed');
      }
      
      this.saveStatus();
    } catch (error) {
      logger.error('❌ Emergency fix error:', error);
    }
  }

  async stopAutomationProcesses() {
    try {
      logger.info('🛑 Stopping automation processes...');
      
      // Find and stop automation-related processes
      const { execSync } = require('child_process');
      
      try {
        const output = execSync('ps aux | grep "automation" | grep -v grep', { encoding: 'utf8' });
        const lines = output.split('\n').filter(line => line.trim());
        
        for (const line of lines) {
          const pid = line.split(/\s+/)[1];
          if (pid && !isNaN(pid)) {
            try {
              execSync(`kill ${pid}`);
              logger.info(`Stopped process ${pid}`);
            } catch (killError) {
              logger.warn(`Could not stop process ${pid}: ${killError.message}`);
            }
          }
        }
      } catch (psError) {
        // Process list command failed, continue
      }
    } catch (error) {
      logger.warn('⚠️ Could not stop automation processes:', error.message);
    }
  }

  keepAlive() {
    // Keep the process running
    process.on('SIGINT', () => {
      logger.info('🛑 Received SIGINT, shutting down gracefully...');
      this.stop();
    });
    
    process.on('SIGTERM', () => {
      logger.info('🛑 Received SIGTERM, shutting down gracefully...');
      this.stop();
    });
    
    // Handle uncaught exceptions
    process.on('uncaughtException', (error) => {
      logger.error('❌ Uncaught exception:', error);
      this.status.errors.push({
        timestamp: new Date().toISOString(),
        type: 'uncaught_exception',
        error: error.message
      });
      this.saveStatus();
    });
    
    process.on('unhandledRejection', (reason, promise) => {
      logger.error('❌ Unhandled rejection:', reason);
      this.status.errors.push({
        timestamp: new Date().toISOString(),
        type: 'unhandled_rejection',
        error: reason.toString()
      });
      this.saveStatus();
    });
  }

  stop() {
    logger.info('🛑 Stopping Automation Monitor...');
    
    this.status.isRunning = false;
    this.saveStatus();
    
    // Clean up processes
    if (this.healthCheckProcess) {
      this.healthCheckProcess.kill();
    }
    
    if (this.fixProcess) {
      this.fixProcess.kill();
    }
    
    logger.info('✅ Automation Monitor stopped');
    process.exit(0);
  }

  getStatus() {
    return {
      ...this.status,
      uptime: this.status.startTime ? Date.now() - new Date(this.status.startTime).getTime() : 0,
      isHealthy: this.status.consecutiveFailures < this.config.maxConsecutiveFailures
    };
  }

  loadStatus() {
    try {
      if (fs.existsSync(this.config.statusFile)) {
        this.status = {
          ...this.status,
          ...JSON.parse(fs.readFileSync(this.config.statusFile, 'utf8'))
        };
      }
    } catch (error) {
      logger.warn('Could not load status file:', error.message);
    }
  }

  saveStatus() {
    try {
      if (!fs.existsSync(this.config.logsDir)) {
        fs.mkdirSync(this.config.logsDir, { recursive: true });
      }
      
      fs.writeFileSync(this.config.statusFile, JSON.stringify(this.status, null, 2));
    } catch (error) {
      logger.error('Error saving status:', error);
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Run the monitor if this script is executed directly
if (require.main === module) {
  const monitor = new AutomationMonitor();
  monitor.start().catch(error => {
    logger.error('Failed to start monitor:', error);
    process.exit(1);
  });
}

module.exports = AutomationMonitor; 