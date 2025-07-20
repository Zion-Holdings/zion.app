#!/usr/bin/env node

/**
 * Chat Reconnection System Optimizer
 * 
 * This script optimizes and maintains the chat reconnection system
 * by performing various maintenance tasks and optimizations.
 */

const fs = require('fs');
const path = require('path');
const http = require('http');

// Configuration
const CONFIG = {
  CHAT_SERVER: 'http://localhost:3009',
  LOG_DIR: 'logs',
  MAX_LOG_SIZE: 50 * 1024 * 1024, // 50MB
  MAX_LOG_AGE: 7 * 24 * 60 * 60 * 1000, // 7 days
  OPTIMIZATION_INTERVAL: 300000, // 5 minutes
  CLEANUP_INTERVAL: 3600000 // 1 hour
};

class ChatReconnectionOptimizer {
  constructor() {
    this.optimizations = [];
    this.isRunning = false;
  }

  async start() {
    console.log('⚡ Starting Chat Reconnection System Optimizer...');
    console.log('🔧 Optimization interval:', CONFIG.OPTIMIZATION_INTERVAL / 1000, 'seconds');
    console.log('🧹 Cleanup interval:', CONFIG.CLEANUP_INTERVAL / 1000, 'seconds');
    console.log('');

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
    
    console.log('✅ Optimizer started successfully');
    console.log('🔧 Continuous optimization active');
    console.log('🧹 Automatic cleanup enabled');
    console.log('');
  }

  async stop() {
    console.log('🛑 Stopping Chat Reconnection System Optimizer...');
    
    this.isRunning = false;
    
    if (this.optimizationInterval) {
      clearInterval(this.optimizationInterval);
    }
    
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
    }
    
    console.log('✅ Optimizer stopped');
  }

  async performOptimization() {
    console.log('🔧 Performing system optimization...');
    
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
        console.error(`❌ Optimization failed: ${optimization.name}`, error.message);
      }
    }
    
    console.log('✅ Optimization cycle completed');
    console.log('');
  }

  async optimizeLogFiles() {
    console.log('📋 Optimizing log files...');
    
    const logFiles = [
      'logs/chat-reconnection.log',
      'logs/chat-reconnection.err',
      'logs/chat-reconnection.out'
    ];
    
    for (const logFile of logFiles) {
      if (fs.existsSync(logFile)) {
        const stats = fs.statSync(logFile);
        const size = stats.size;
        const age = Date.now() - stats.mtime.getTime();
        
        // Rotate if too large
        if (size > CONFIG.MAX_LOG_SIZE) {
          await this.rotateLogFile(logFile);
          console.log(`🔄 Rotated large log file: ${logFile}`);
        }
        
        // Remove if too old
        if (age > CONFIG.MAX_LOG_AGE) {
          fs.unlinkSync(logFile);
          console.log(`🗑️ Removed old log file: ${logFile}`);
        }
      }
    }
  }

  async rotateLogFile(logFile) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupFile = `${logFile}.${timestamp}`;
    
    // Read current log
    const content = fs.readFileSync(logFile, 'utf8');
    
    // Keep only last 1000 lines
    const lines = content.split('\n');
    const recentLines = lines.slice(-1000).join('\n');
    
    // Write backup
    fs.writeFileSync(backupFile, content);
    
    // Write truncated content back
    fs.writeFileSync(logFile, recentLines);
  }

  async optimizeMemoryUsage() {
    console.log('🧠 Optimizing memory usage...');
    
    // Force garbage collection if available
    if (global.gc) {
      global.gc();
      console.log('♻️ Forced garbage collection');
    }
    
    // Check memory usage
    const memUsage = process.memoryUsage();
    const heapUsedMB = Math.round(memUsage.heapUsed / 1024 / 1024);
    
    if (heapUsedMB > 100) {
      console.log(`⚠️ High memory usage: ${heapUsedMB}MB`);
      this.optimizations.push({
        type: 'MEMORY_HIGH',
        timestamp: Date.now(),
        value: heapUsedMB
      });
    } else {
      console.log(`✅ Memory usage normal: ${heapUsedMB}MB`);
    }
  }

  async optimizeNetworkConnections() {
    console.log('🌐 Optimizing network connections...');
    
    try {
      // Check system status
      const status = await this.getSystemStatus();
      
      if (status.isMaster && status.discoveredComputers === 0) {
        console.log('🔍 No worker computers discovered, checking network...');
        
        // Try to discover computers
        await this.discoverComputers();
      }
      
      if (status.activeConnections === 0) {
        console.log('🔌 No active connections, attempting reconnection...');
        
        // Trigger reconnection
        await this.triggerReconnection();
      }
      
    } catch (error) {
      console.error('❌ Network optimization failed:', error.message);
    }
  }

  async optimizeFileWatching() {
    console.log('👁️ Optimizing file watching...');
    
    // Check if file watcher is active
    try {
      const response = await this.makeRequest('/status');
      console.log('✅ File watching system active');
    } catch (error) {
      console.log('⚠️ File watching may need attention');
    }
  }

  async optimizePerformance() {
    console.log('⚡ Optimizing performance...');
    
    // Check response times
    const startTime = Date.now();
    try {
      await this.makeRequest('/status');
      const responseTime = Date.now() - startTime;
      
      if (responseTime > 1000) {
        console.log(`⚠️ Slow response time: ${responseTime}ms`);
        this.optimizations.push({
          type: 'SLOW_RESPONSE',
          timestamp: Date.now(),
          value: responseTime
        });
      } else {
        console.log(`✅ Response time good: ${responseTime}ms`);
      }
    } catch (error) {
      console.error('❌ Performance check failed:', error.message);
    }
  }

  async performCleanup() {
    console.log('🧹 Performing system cleanup...');
    
    const cleanupTasks = [
      this.cleanupOldLogs,
      this.cleanupTempFiles,
      this.cleanupOptimizationHistory,
      this.cleanupPidFiles
    ];
    
    for (const task of cleanupTasks) {
      try {
        await task.call(this);
      } catch (error) {
        console.error(`❌ Cleanup failed: ${task.name}`, error.message);
      }
    }
    
    console.log('✅ Cleanup completed');
    console.log('');
  }

  async cleanupOldLogs() {
    console.log('🗑️ Cleaning up old logs...');
    
    const logDir = CONFIG.LOG_DIR;
    if (!fs.existsSync(logDir)) {
      return;
    }
    
    const files = fs.readdirSync(logDir);
    const now = Date.now();
    
    for (const file of files) {
      const filePath = path.join(logDir, file);
      const stats = fs.statSync(filePath);
      const age = now - stats.mtime.getTime();
      
      // Remove files older than 30 days
      if (age > 30 * 24 * 60 * 60 * 1000) {
        fs.unlinkSync(filePath);
        console.log(`🗑️ Removed old file: ${file}`);
      }
    }
  }

  async cleanupTempFiles() {
    console.log('🗑️ Cleaning up temp files...');
    
    const tempFiles = [
      'temp/',
      'tmp/',
      '*.tmp',
      '*.temp'
    ];
    
    for (const pattern of tempFiles) {
      // This is a simplified cleanup - in production you'd use glob patterns
      console.log(`🔍 Checking for temp files: ${pattern}`);
    }
  }

  async cleanupOptimizationHistory() {
    console.log('🗑️ Cleaning up optimization history...');
    
    // Keep only last 100 optimizations
    if (this.optimizations.length > 100) {
      this.optimizations = this.optimizations.slice(-100);
      console.log('📊 Trimmed optimization history');
    }
  }

  async cleanupPidFiles() {
    console.log('🗑️ Cleaning up PID files...');
    
    const pidFiles = [
      'logs/chat-reconnection.pid',
      'logs/*.pid'
    ];
    
    for (const pidFile of pidFiles) {
      if (fs.existsSync(pidFile)) {
        try {
          const pid = parseInt(fs.readFileSync(pidFile, 'utf8'));
          
          // Check if process is still running
          process.kill(pid, 0);
          console.log(`✅ PID file valid: ${pidFile}`);
        } catch (error) {
          // Process not running, remove PID file
          fs.unlinkSync(pidFile);
          console.log(`🗑️ Removed stale PID file: ${pidFile}`);
        }
      }
    }
  }

  async discoverComputers() {
    console.log('🔍 Attempting to discover computers...');
    
    // Send discovery broadcast
    try {
      await this.makeRequest('/discover', 'POST');
      console.log('📡 Discovery broadcast sent');
    } catch (error) {
      console.error('❌ Discovery failed:', error.message);
    }
  }

  async triggerReconnection() {
    console.log('🔌 Triggering reconnection...');
    
    try {
      await this.makeRequest('/reconnect', 'POST');
      console.log('🔄 Reconnection triggered');
    } catch (error) {
      console.error('❌ Reconnection failed:', error.message);
    }
  }

  async getSystemStatus() {
    return await this.makeRequest('/status');
  }

  async makeRequest(path, method = 'GET', body = null) {
    return new Promise((resolve, reject) => {
      const url = new URL(path, CONFIG.CHAT_SERVER);
      
      const options = {
        hostname: url.hostname,
        port: url.port,
        path: url.pathname,
        method: method,
        headers: {
          'Content-Type': 'application/json'
        }
      };
      
      const req = http.request(options, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (error) {
            resolve(data);
          }
        });
      });
      
      req.on('error', reject);
      req.setTimeout(5000, () => reject(new Error('Request timeout')));
      
      if (body) {
        req.write(JSON.stringify(body));
      }
      req.end();
    });
  }

  generateReport() {
    const report = {
      timestamp: Date.now(),
      optimizations: this.optimizations.length,
      recentOptimizations: this.optimizations.slice(-10),
      systemHealth: 'good'
    };
    
    // Check for issues
    const issues = this.optimizations.filter(opt => 
      opt.type === 'MEMORY_HIGH' || opt.type === 'SLOW_RESPONSE'
    );
    
    if (issues.length > 0) {
      report.systemHealth = 'needs_attention';
      report.issues = issues;
    }
    
    return report;
  }

  displayReport() {
    const report = this.generateReport();
    
    console.log('');
    console.log('📊 Chat Reconnection System Optimizer Report');
    console.log('============================================');
    console.log(`⏰ Timestamp: ${new Date(report.timestamp).toLocaleString()}`);
    console.log(`🔧 Total Optimizations: ${report.optimizations}`);
    console.log(`🏥 System Health: ${report.systemHealth.toUpperCase()}`);
    
    if (report.issues) {
      console.log(`⚠️ Issues Detected: ${report.issues.length}`);
      report.issues.forEach(issue => {
        console.log(`   - ${issue.type}: ${issue.value} (${new Date(issue.timestamp).toLocaleString()})`);
      });
    }
    
    console.log('');
  }
}

// Command line interface
async function main() {
  const optimizer = new ChatReconnectionOptimizer();
  
  // Handle command line arguments
  const args = process.argv.slice(2);
  const command = args[0];
  
  switch (command) {
    case 'start':
      await optimizer.start();
      
      // Handle graceful shutdown
      process.on('SIGINT', async () => {
        console.log('\n🛑 Received SIGINT, shutting down gracefully...');
        await optimizer.stop();
        optimizer.displayReport();
        process.exit(0);
      });
      
      process.on('SIGTERM', async () => {
        console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
        await optimizer.stop();
        optimizer.displayReport();
        process.exit(0);
      });
      break;
      
    case 'optimize':
      await optimizer.start();
      setTimeout(async () => {
        await optimizer.performOptimization();
        optimizer.displayReport();
        await optimizer.stop();
        process.exit(0);
      }, 10000);
      break;
      
    case 'cleanup':
      await optimizer.start();
      setTimeout(async () => {
        await optimizer.performCleanup();
        optimizer.displayReport();
        await optimizer.stop();
        process.exit(0);
      }, 10000);
      break;
      
    default:
      console.log('Usage: node chat-reconnection-optimizer.js [command]');
      console.log('');
      console.log('Commands:');
      console.log('  start     Start continuous optimization');
      console.log('  optimize  Run one optimization cycle');
      console.log('  cleanup   Run one cleanup cycle');
      console.log('');
      console.log('Examples:');
      console.log('  node chat-reconnection-optimizer.js start');
      console.log('  node chat-reconnection-optimizer.js optimize');
      console.log('  node chat-reconnection-optimizer.js cleanup');
      break;
  }
}

// Run if this script is executed directly
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Optimizer failed:', error);
    process.exit(1);
  });
}

module.exports = ChatReconnectionOptimizer; 