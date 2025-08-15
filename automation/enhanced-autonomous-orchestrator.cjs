#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const CONFIG = {
  logDir: path.join(__dirname, 'logs'),
  reportDir: path.join(process.cwd(), 'public', 'reports', 'enhanced-autonomous'),
  maxConcurrentTasks: 3,
  healthCheckInterval: 300000, // 5 minutes
  performanceThreshold: 0.8,
  qualityThreshold: 0.9
};

// Utility functions
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function log(message, level = 'INFO') {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level}] ${message}`;
  console.log(logMessage);
  
  // Write to log file
  const logFile = path.join(CONFIG.logDir, 'enhanced-autonomous-orchestrator.log');
  ensureDir(path.dirname(logFile));
  fs.appendFileSync(logFile, logMessage + '\n');
}

// Enhanced Autonomous Orchestrator Class
class EnhancedAutonomousOrchestrator {
  constructor() {
    this.tasks = new Map();
    this.performanceMetrics = new Map();
    this.qualityMetrics = new Map();
    this.isRunning = false;
    this.startTime = Date.now();
  }

  // Initialize the orchestrator
  async initialize() {
    log('Initializing Enhanced Autonomous Orchestrator...');
    
    try {
      // Ensure directories exist
      ensureDir(CONFIG.logDir);
      ensureDir(CONFIG.reportDir);
      
      // Run initial health check
      await this.runHealthCheck();
      
      // Initialize performance monitoring
      this.initializePerformanceMonitoring();
      
      log('Enhanced Autonomous Orchestrator initialized successfully');
      return true;
    } catch (error) {
      log(`Initialization failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  // Run comprehensive health check
  async runHealthCheck() {
    log('Running comprehensive health check...');
    
    try {
      // Check quality system health
      const qualityHealth = await this.checkQualitySystemHealth();
      
      // Check automation system health
      const automationHealth = await this.checkAutomationSystemHealth();
      
      // Check build system health
      const buildHealth = await this.checkBuildSystemHealth();
      
      // Generate health report
      const healthReport = {
        timestamp: new Date().toISOString(),
        quality: qualityHealth,
        automation: automationHealth,
        build: buildHealth,
        overall: this.calculateOverallHealth(qualityHealth, automationHealth, buildHealth)
      };
      
      // Save health report
      const reportFile = path.join(CONFIG.reportDir, 'health-report.json');
      fs.writeFileSync(reportFile, JSON.stringify(healthReport, null, 2));
      
      log(`Health check completed. Overall status: ${healthReport.overall.status}`);
      return healthReport;
    } catch (error) {
      log(`Health check failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  // Check quality system health
  async checkQualitySystemHealth() {
    try {
      const result = execSync('npm run quality:health', { encoding: 'utf8' });
      return {
        status: 'healthy',
        details: 'Quality system operational',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        status: 'unhealthy',
        details: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  // Check automation system health
  async checkAutomationSystemHealth() {
    try {
      const result = execSync('npm run autonomous:status', { encoding: 'utf8' });
      const status = JSON.parse(result);
      
      return {
        status: status.currentStatus === 'idle' ? 'healthy' : 'running',
        details: `Current status: ${status.currentStatus}`,
        uptime: status.uptime,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        status: 'unhealthy',
        details: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  // Check build system health
  async checkBuildSystemHealth() {
    try {
      // Check if build directories exist and are accessible
      const buildDirs = ['.next', 'out', 'public/reports'];
      const accessible = buildDirs.every(dir => {
        try {
          fs.accessSync(dir);
          return true;
        } catch {
          return false;
        }
      });
      
      return {
        status: accessible ? 'healthy' : 'degraded',
        details: accessible ? 'Build directories accessible' : 'Some build directories missing',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        status: 'unhealthy',
        details: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  // Calculate overall health status
  calculateOverallHealth(quality, automation, build) {
    const statuses = [quality.status, automation.status, build.status];
    const healthyCount = statuses.filter(s => s === 'healthy').length;
    const totalCount = statuses.length;
    const healthScore = healthyCount / totalCount;
    
    let status = 'healthy';
    if (healthScore < CONFIG.qualityThreshold) {
      status = healthScore < 0.5 ? 'critical' : 'degraded';
    }
    
    return {
      status,
      score: healthScore,
      details: `${healthyCount}/${totalCount} systems healthy`,
      timestamp: new Date().toISOString()
    };
  }

  // Initialize performance monitoring
  initializePerformanceMonitoring() {
    log('Initializing performance monitoring...');
    
    // Monitor memory usage
    setInterval(() => {
      const memUsage = process.memoryUsage();
      this.performanceMetrics.set('memory', {
        rss: memUsage.rss,
        heapTotal: memUsage.heapTotal,
        heapUsed: memUsage.heapUsed,
        external: memUsage.external,
        timestamp: new Date().toISOString()
      });
    }, 60000); // Every minute
    
    // Monitor task performance
    setInterval(() => {
      this.analyzePerformance();
    }, 300000); // Every 5 minutes
  }

  // Analyze performance metrics
  analyzePerformance() {
    const memory = this.performanceMetrics.get('memory');
    if (!memory) return;
    
    const memoryUsage = memory.heapUsed / memory.heapTotal;
    
    if (memoryUsage > CONFIG.performanceThreshold) {
      log(`High memory usage detected: ${(memoryUsage * 100).toFixed(2)}%`, 'WARN');
      
      // Trigger memory optimization
      this.optimizeMemory();
    }
    
    // Save performance report
    const performanceReport = {
      timestamp: new Date().toISOString(),
      memory: memory,
      memoryUsage: memoryUsage,
      uptime: Date.now() - this.startTime,
      tasks: Array.from(this.tasks.keys())
    };
    
    const reportFile = path.join(CONFIG.reportDir, 'performance-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(performanceReport, null, 2));
  }

  // Optimize memory usage
  optimizeMemory() {
    log('Running memory optimization...');
    
    // Clear completed tasks
    for (const [taskId, task] of this.tasks) {
      if (task.status === 'completed' || task.status === 'failed') {
        this.tasks.delete(taskId);
      }
    }
    
    // Force garbage collection if available
    if (global.gc) {
      global.gc();
      log('Garbage collection completed');
    }
  }

  // Start the orchestrator
  async start() {
    if (this.isRunning) {
      log('Orchestrator is already running');
      return;
    }
    
    log('Starting Enhanced Autonomous Orchestrator...');
    
    try {
      const initialized = await this.initialize();
      if (!initialized) {
        throw new Error('Failed to initialize orchestrator');
      }
      
      this.isRunning = true;
      
      // Start health monitoring
      this.startHealthMonitoring();
      
      // Start autonomous tasks
      this.startAutonomousTasks();
      
      log('Enhanced Autonomous Orchestrator started successfully');
    } catch (error) {
      log(`Failed to start orchestrator: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  // Start health monitoring
  startHealthMonitoring() {
    setInterval(async () => {
      try {
        await this.runHealthCheck();
      } catch (error) {
        log(`Health check failed: ${error.message}`, 'ERROR');
      }
    }, CONFIG.healthCheckInterval);
  }

  // Start autonomous tasks
  startAutonomousTasks() {
    // Start content generation
    this.scheduleTask('content-generation', async () => {
      try {
        log('Starting autonomous content generation...');
        execSync('npm run content:generate', { stdio: 'inherit' });
        log('Content generation completed');
      } catch (error) {
        log(`Content generation failed: ${error.message}`, 'ERROR');
      }
    }, 1800000); // Every 30 minutes
    
    // Start quality optimization
    this.scheduleTask('quality-optimization', async () => {
      try {
        log('Starting quality optimization...');
        execSync('npm run quality:autofix', { stdio: 'inherit' });
        log('Quality optimization completed');
      } catch (error) {
        log(`Quality optimization failed: ${error.message}`, 'ERROR');
      }
    }, 3600000); // Every hour
    
    // Start performance analysis
    this.scheduleTask('performance-analysis', async () => {
      try {
        log('Starting performance analysis...');
        this.analyzePerformance();
        log('Performance analysis completed');
      } catch (error) {
        log(`Performance analysis failed: ${error.message}`, 'ERROR');
      }
    }, 900000); // Every 15 minutes
  }

  // Schedule a task
  scheduleTask(taskId, taskFunction, interval) {
    const task = {
      id: taskId,
      function: taskFunction,
      interval: interval,
      status: 'scheduled',
      lastRun: null,
      nextRun: Date.now() + interval,
      timer: null
    };
    
    this.tasks.set(taskId, task);
    
    // Schedule the task
    task.timer = setInterval(async () => {
      try {
        task.status = 'running';
        task.lastRun = Date.now();
        
        await task.function();
        
        task.status = 'completed';
        task.nextRun = Date.now() + interval;
      } catch (error) {
        task.status = 'failed';
        log(`Task ${taskId} failed: ${error.message}`, 'ERROR');
      }
    }, interval);
    
    log(`Task ${taskId} scheduled to run every ${interval / 1000} seconds`);
  }

  // Stop the orchestrator
  stop() {
    log('Stopping Enhanced Autonomous Orchestrator...');
    
    this.isRunning = false;
    
    // Clear all task timers
    for (const [taskId, task] of this.tasks) {
      if (task.timer) {
        clearInterval(task.timer);
      }
    }
    
    this.tasks.clear();
    
    log('Enhanced Autonomous Orchestrator stopped');
  }

  // Get orchestrator status
  getStatus() {
    return {
      isRunning: this.isRunning,
      uptime: Date.now() - this.startTime,
      tasks: Array.from(this.tasks.values()).map(task => ({
        id: task.id,
        status: task.status,
        lastRun: task.lastRun,
        nextRun: task.nextRun
      })),
      performance: {
        memory: this.performanceMetrics.get('memory'),
        quality: this.qualityMetrics.get('latest')
      },
      timestamp: new Date().toISOString()
    };
  }
}

// Main execution
async function main() {
  const orchestrator = new EnhancedAutonomousOrchestrator();
  
  try {
    await orchestrator.start();
    
    // Keep the process running
    process.on('SIGINT', () => {
      log('Received SIGINT, shutting down gracefully...');
      orchestrator.stop();
      process.exit(0);
    });
    
    process.on('SIGTERM', () => {
      log('Received SIGTERM, shutting down gracefully...');
      orchestrator.stop();
      process.exit(0);
    });
    
    // Log status every 5 minutes
    setInterval(() => {
      const status = orchestrator.getStatus();
      log(`Status: ${status.isRunning ? 'Running' : 'Stopped'}, Uptime: ${Math.round(status.uptime / 1000)}s, Tasks: ${status.tasks.length}`);
    }, 300000);
    
  } catch (error) {
    log(`Failed to start orchestrator: ${error.message}`, 'ERROR');
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = EnhancedAutonomousOrchestrator;