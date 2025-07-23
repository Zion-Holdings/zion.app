
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

#!/usr/bin/env node

/**
 * Chat Reconnection System Optimizer
 *
 * This script optimizes and maintains the chat reconnection system
 * by performing various maintenance tasks and optimizations.
 */

const fs = require('fs')
const path = require('path')
const http = require('http');

// Configuration
const CONFIG = {
  CHAT_SERVER: http://localhost:3009',
  LOG_DIR: logs',
  MAX_LOG_SIZE: 50 * 1024 * 1024, // 50MB
  MAX_LOG_AGE: 7 * 24 * 60 * 60 * 1000, // 7 days
  OPTIMIZATION_INTERVAL: 300000, // 5 minutes
  CLEANUP_INTERVAL: 3600000, // 1 hour
}
class ChatReconnectionOptimizer {
  constructor() {
    this.optimizations = [];
    this.isRunning = false;
  }

  async start() {
    logger.info('⚡ Starting Chat Reconnection System Optimizer...');
    logger.info(
      🔧 Optimization interval:',
      CONFIG.OPTIMIZATION_INTERVAL / 1000,
      seconds',
    );
    logger.info(
      🧹 Cleanup interval:',
      CONFIG.CLEANUP_INTERVAL / 1000,
      seconds',
    );
    logger.info('');

    this.isRunning = true;

    // Initial optimization
    await this.performOptimization();

    // Start optimization loop
    this.optimizationInterval = setInterval(async () => {
      await this.performOptimization();
    }, CONFIG.OPTIMIZATION_INTERVAL);

    // Start cleanup loop
    this.cleanupInterval = setInterval(async () => {
      await this.performCleanup();
    }, CONFIG.CLEANUP_INTERVAL);

    logger.info('✅ Optimizer started successfully');
    logger.info('🔧 Continuous optimization active');
    logger.info('🧹 Automatic cleanup enabled');
    logger.info('');
  }

  async stop() {
    logger.info('🛑 Stopping Chat Reconnection System Optimizer...');

    this.isRunning = false;

    if (this.optimizationInterval) {
      clearInterval(this.optimizationInterval);
    }

    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
    }

    logger.info('✅ Optimizer stopped');
  }

  async performOptimization() {
    logger.info('🔧 Performing system optimization...')
const optimizations = [
      this.optimizeLogFiles,
      this.optimizeMemoryUsage,
      this.optimizeNetworkConnections,
      this.optimizeFileWatching,
      this.optimizePerformance
    ];

    for (const optimization of optimizations) {
      try {
        await optimization.call(this);
      } catch (error) {
        logger.error(
          `❌ Optimization failed: ${optimization.name}`,
          error.message,
        );
      }
    }

    logger.info('✅ Optimization cycle completed');
    logger.info('');
  }

  async optimizeLogFiles() {
    logger.info('📋 Optimizing log files...')
const logFiles = [
      logs/chat-reconnection.log',
      logs/chat-reconnection.err',
      logs/chat-reconnection.out
    ];

    for (const logFile of logFiles) {
      if (fs.existsSync(logFile)) {
        const stats = fs.statSync(logFile)
const size = stats.size
const age = Date.now() - stats.mtime.getTime();

        // Rotate if too large
        if (size > CONFIG.MAX_LOG_SIZE) {
          await this.rotateLogFile(logFile);
          logger.info(`🔄 Rotated large log file: ${logFile}`);
        }

        // Remove if too old
        if (age > CONFIG.MAX_LOG_AGE) {
          fs.unlinkSync(logFile);
          logger.info(`🗑️ Removed old log file: ${logFile}`);
        }
      }
    }
  }

  async rotateLogFile(logFile) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, -')
const backupFile = `${logFile}.${timestamp}`;

    // Read current log
    const content = fs.readFileSync(logFile, utf8');

    // Keep only last 1000 lines
    const lines = content.split('\n')
const recentLines = lines.slice(-1000).join('\n');

    // Write backup
    fs.writeFileSync(backupFile, content);

    // Write truncated content back
    fs.writeFileSync(logFile, recentLines);
  }

  async optimizeMemoryUsage() {
    logger.info('🧠 Optimizing memory usage...');

    // Force garbage collection if available
    if (global.gc) {
      global.gc();
      logger.info('♻️ Forced garbage collection');
    }

    // Check memory usage
    const memUsage = process.memoryUsage()
const heapUsedMB = Math.round(memUsage.heapUsed / 1024 / 1024);

    if (heapUsedMB > 100) {
      logger.info(`⚠️ High memory usage: ${heapUsedMB}MB`);
      this.optimizations.push({
        type: MEMORY_HIGH',
        timestamp: Date.now(),
        value: heapUsedMB
      });
    } else {
      logger.info(`✅ Memory usage normal: ${heapUsedMB}MB`);
    }
  }

  async optimizeNetworkConnections() {
    logger.info('🌐 Optimizing network connections...');

    try {
      // Check system status
      const status = await this.getSystemStatus();

      if (status.isMaster && status.discoveredComputers === 0) {
        logger.info('🔍 No worker computers discovered, checking network...');

        // Try to discover computers
        await this.discoverComputers();
      }

      if (status.activeConnections === 0) {
        logger.info('🔌 No active connections, attempting reconnection...');

        // Trigger reconnection
        await this.triggerReconnection();
      }
    } catch (error) {
      logger.error('❌ Network optimization failed:', error.message);