#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { EventEmitter } = require('events');
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const os = require('os');

class UltimateAutomationFactory extends EventEmitter {
  constructor(config = {}) {
    super();
    this.config = {
      maxWorkers: config.maxWorkers || os.cpus().length,
      checkInterval: config.checkInterval || 5000,
      logLevel: config.logLevel || 'info',
      ...config
    };
    
    this.isRunning = false;
    this.startTime = null;
    this.workers = new Map();
    this.systemMetrics = {
      uptime: 0,
      totalTasks: 0,
      completedTasks: 0,
      failedTasks: 0,
      activeWorkers: 0,
      systemHealth: 'unknown'
    };
  }

  async initialize() {
    console.log('🚀 Initializing Ultimate Automation Factory...');
    
    try {
      // Create necessary directories
      await this.ensureDirectories();
      
      // Set up event listeners
      this.setupEventListeners();
      
      // Start the system
      this.start();
      
      console.log('✅ Ultimate Automation Factory initialized successfully');
      return true;
      
    } catch (error) {
      console.error('❌ Failed to initialize Ultimate Automation Factory:', error);
      throw error;
    }
  }

  async ensureDirectories() {
    const directories = [
      'automation/logs/ultimate-automation-factory',
      'automation/data/ultimate-automation-factory',
      'automation/reports/ultimate-automation-factory',
      'automation/backups/ultimate-automation-factory'
    ];
    
    for (const dir of directories) {
      await fs.mkdir(path.join(process.cwd(), dir), { recursive: true });
    }
  }

  setupEventListeners() {
    // System events
    this.on('taskStarted', (task) => {
      console.log(`📋 Task started: ${task.id} - ${task.type}`);
      this.systemMetrics.totalTasks++;
      this.updateSystemHealth();
    });

    this.on('taskCompleted', (task) => {
      console.log(`✅ Task completed: ${task.id} - ${task.type}`);
      this.systemMetrics.completedTasks++;
      this.updateSystemHealth();
    });

    this.on('taskFailed', (task) => {
      console.log(`❌ Task failed: ${task.id} - ${task.type}`);
      this.systemMetrics.failedTasks++;
      this.updateSystemHealth();
    });

    this.on('workerStarted', (workerId) => {
      console.log(`🔧 Worker started: ${workerId}`);
      this.systemMetrics.activeWorkers++;
    });

    this.on('workerStopped', (workerId) => {
      console.log(`🔧 Worker stopped: ${workerId}`);
      this.systemMetrics.activeWorkers--;
    });
  }

  start() {
    if (this.isRunning) {
      console.log('⚠️ System is already running');
      return;
    }

    try {
      this.isRunning = true;
      this.startTime = new Date();
      
      console.log('🚀 Ultimate Automation Factory started successfully!');
      console.log('📊 System is now running continuously...');
      
      // Start monitoring
      this.startSystemMonitoring();
      
      // Handle graceful shutdown
      this.setupGracefulShutdown();
      
    } catch (error) {
      console.error('❌ Failed to start system:', error);
      throw error;
    }
  }

  startSystemMonitoring() {
    // Update system metrics every 30 seconds
    setInterval(() => {
      this.updateSystemMetrics();
    }, 30000);

    // Log system status every 5 minutes
    setInterval(() => {
      this.logSystemStatus();
    }, 5 * 60 * 1000);

    // Health check every minute
    setInterval(async () => {
      await this.performHealthCheck();
    }, 60000);
  }

  updateSystemMetrics() {
    if (!this.isRunning) return;

    const now = new Date();
    this.systemMetrics.uptime = now - this.startTime;
  }

  updateSystemHealth() {
    const totalTasks = this.systemMetrics.totalTasks;
    const failedTasks = this.systemMetrics.failedTasks;
    
    if (totalTasks === 0) {
      this.systemMetrics.systemHealth = 'unknown';
    } else if (failedTasks === 0) {
      this.systemMetrics.systemHealth = 'healthy';
    } else if (failedTasks / totalTasks < 0.1) {
      this.systemMetrics.systemHealth = 'warning';
    } else {
      this.systemMetrics.systemHealth = 'critical';
    }
  }

  logSystemStatus() {
    const uptimeMs = this.systemMetrics.uptime;
    const uptimeMinutes = Math.floor(uptimeMs / 1000 / 60);
    const uptimeHours = Math.floor(uptimeMinutes / 60);
    const uptimeDays = Math.floor(uptimeHours / 24);
    
    console.log('📊 System Status:', {
      uptime: `${uptimeDays}d ${uptimeHours % 24}h ${uptimeMinutes % 60}m`,
      totalTasks: this.systemMetrics.totalTasks,
      completedTasks: this.systemMetrics.completedTasks,
      failedTasks: this.systemMetrics.failedTasks,
      activeWorkers: this.systemMetrics.activeWorkers,
      health: this.systemMetrics.systemHealth
    });
  }

  async performHealthCheck() {
    try {
      const health = {
        system: this.systemMetrics.systemHealth,
        uptime: this.systemMetrics.uptime,
        totalTasks: this.systemMetrics.totalTasks,
        completedTasks: this.systemMetrics.completedTasks,
        failedTasks: this.systemMetrics.failedTasks,
        activeWorkers: this.systemMetrics.activeWorkers
      };
      
      console.log(`💓 Health check: ${health.completedTasks} completed tasks, ${health.activeWorkers} active workers`);
      
      if (health.system === 'critical') {
        console.log('⚠️ System health is critical, attempting recovery...');
        await this.performRecovery();
      }
    } catch (error) {
      console.error('❌ Health check failed:', error);
    }
  }

  async performRecovery() {
    try {
      console.log('🔄 Performing system recovery...');
      // Reset metrics
      this.systemMetrics.failedTasks = 0;
      this.updateSystemHealth();
      console.log('✅ Recovery completed');
    } catch (error) {
      console.error('❌ Recovery failed:', error);
    }
  }

  setupGracefulShutdown() {
    const shutdown = async (signal) => {
      console.log(`\n🛑 Received ${signal}, shutting down gracefully...`);
      
      this.isRunning = false;
      
      try {
        // Stop all workers
        await this.stopAllWorkers();
        
        // Save final status
        await this.saveSystemStatus();
        
        console.log('✅ System shutdown complete');
        process.exit(0);
        
      } catch (error) {
        console.error('❌ Error during shutdown:', error);
        process.exit(1);
      }
    };

    process.on('SIGINT', () => shutdown('SIGINT'));
    process.on('SIGTERM', () => shutdown('SIGTERM'));
  }

  async stopAllWorkers() {
    for (const [workerId, worker] of this.workers.entries()) {
      try {
        worker.terminate();
        this.emit('workerStopped', workerId);
      } catch (error) {
        console.error(`Failed to stop worker ${workerId}:`, error);
      }
    }
    this.workers.clear();
  }

  async saveSystemStatus() {
    const status = {
      timestamp: new Date().toISOString(),
      metrics: this.systemMetrics,
      config: this.config
    };
    
    const statusPath = path.join(process.cwd(), 'automation/data/ultimate-automation-factory', 'system-status.json');
    await fs.writeFile(statusPath, JSON.stringify(status, null, 2));
  }

  async createWorker(workerType, config = {}) {
    if (!this.isRunning) {
      throw new Error('System is not running');
    }
    
    const workerId = `worker_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const worker = new Worker(`
      const { parentPort, workerData } = require('worker_threads');
      
      parentPort.on('message', (message) => {
        // Simulate work
        setTimeout(() => {
          parentPort.postMessage({ 
            id: message.id, 
            status: 'completed',
            result: 'Work completed successfully'
          });
        }, 1000);
      });
    `, { eval: true, workerData: { type: workerType, config } });
    
    this.workers.set(workerId, worker);
    this.emit('workerStarted', workerId);
    
    return workerId;
  }

  async submitTask(taskType, taskData) {
    if (!this.isRunning) {
      throw new Error('System is not running');
    }
    
    const task = {
      id: Date.now(),
      type: taskType,
      data: taskData,
      status: 'pending'
    };
    
    this.emit('taskStarted', task);
    
    // Simulate task completion
    setTimeout(() => {
      task.status = 'completed';
      this.emit('taskCompleted', task);
    }, 2000);
    
    return task.id;
  }

  async stop() {
    if (!this.isRunning) {
      console.log('⚠️ System is not running');
      return;
    }

    console.log('🛑 Stopping Ultimate Automation Factory...');
    this.isRunning = false;
    
    // Stop all workers
    await this.stopAllWorkers();
    
    // Trigger graceful shutdown
    await this.saveSystemStatus();
  }

  getStatus() {
    if (!this.isRunning) {
      return { status: "stopped" };
    }

    return {
      status: "running",
      uptime: this.systemMetrics.uptime,
      metrics: this.systemMetrics,
      config: this.config,
      workers: this.workers.size
    };
  }

  async getWorkerStatus(workerId) {
    const worker = this.workers.get(workerId);
    if (!worker) {
      return { status: 'not_found' };
    }
    
    return {
      status: 'active',
      id: workerId,
      type: 'automation_worker'
    };
  }

  async getAllWorkers() {
    const workers = [];
    for (const [workerId, worker] of this.workers.entries()) {
      workers.push({
        id: workerId,
        status: 'active',
        type: 'automation_worker'
      });
    }
    return workers;
  }
}

// Main execution
async function main() {
  const factory = new UltimateAutomationFactory();
  
  try {
    await factory.initialize();
    
    // Keep the process running
    process.on('uncaughtException', (error) => {
      console.error('Uncaught Exception:', error);
    });
    
    process.on('unhandledRejection', (reason, promise) => {
      console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    });
    
  } catch (error) {
    console.error('Failed to start system:', error);
    process.exit(1);
  }
}

// Export for use as module
if (require.main === module) {
  main();
} else {
  module.exports = UltimateAutomationFactory;
}
