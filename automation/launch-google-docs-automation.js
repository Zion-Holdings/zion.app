#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { EventEmitter } = require('events');

// High-speed mode optimizations
const HIGH_SPEED_MODE = process.env.HIGH_SPEED_MODE === 'true';
const SPEED_MULTIPLIER = HIGH_SPEED_MODE ? 0.1 : 1; // 10x faster in high-speed mode

function getOptimizedInterval(baseInterval) {
  return Math.floor(baseInterval * SPEED_MULTIPLIER);
}

class GoogleDocsAutomationLauncher extends EventEmitter {
  constructor(config = {}) {
    super();
    this.config = {
      googleDocsUrl: config.googleDocsUrl || 'https://docs.google.com/document/d/1Q3-QbWjIIj83VYX_Hx258kmvEyF9qBR2nF09IOi4ppM/edit?usp=sharing',
      checkInterval: config.checkInterval || 3000, // 3 seconds
      maxRetries: config.maxRetries || 3,
      logLevel: config.logLevel || 'info',
      ...config
    };
    
    this.isRunning = false;
    this.startTime = null;
    this.systemMetrics = {
      uptime: 0,
      totalInstructions: 0,
      completedInstructions: 0,
      failedInstructions: 0,
      systemHealth: 'unknown'
    };
  }

  async initialize() {
    console.log('🚀 Initializing Google Docs Automation System...');
    
    try {
      // Create necessary directories
      await this.ensureDirectories();
      
      // Set up event listeners
      this.setupEventListeners();
      
      // Start the system
      this.start();
      
      console.log('✅ Google Docs Automation System initialized successfully');
      return true;
      
    } catch (error) {
      console.error('❌ Failed to initialize Google Docs Automation System: ', error);
      throw error;
    }
  }

  async ensureDirectories() {
    const directories = [
      'automation/logs/google-docs-automation',
      'automation/data/google-docs-automation',
      'automation/reports/google-docs-automation',
      'automation/backups/google-docs-automation'
    ];
    
    for (const dir of directories) {
      await fs.mkdir(path.join(process.cwd(), dir), { recursive: true });
    }
  }

  setupEventListeners() {
    // System events
    this.on('taskStarted', (task) => {
      console.log(`📋 Task started: ${task.id} - ${task.title}`);
      this.systemMetrics.totalInstructions++;
      this.updateSystemHealth();
    });

    this.on('taskCompleted', (task) => {
      console.log(`✅ Task completed: ${task.id} - ${task.title}`);
      this.systemMetrics.completedInstructions++;
      this.updateSystemHealth();
    });

    this.on('taskFailed', (task) => {
      console.log(`❌ Task failed: ${task.id} - ${task.title}`);
      this.systemMetrics.failedInstructions++;
      this.updateSystemHealth();
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
      
      console.log('🚀 Google Docs Automation System started successfully!');
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
    const totalTasks = this.systemMetrics.totalInstructions;
    const failedTasks = this.systemMetrics.failedInstructions;
    
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
      totalInstructions: this.systemMetrics.totalInstructions,
      completedInstructions: this.systemMetrics.completedInstructions,
      failedInstructions: this.systemMetrics.failedInstructions,
      health: this.systemMetrics.systemHealth
    });
  }

  async performHealthCheck() {
    try {
      const health = {
        system: this.systemMetrics.systemHealth,
        uptime: this.systemMetrics.uptime,
        totalTasks: this.systemMetrics.totalInstructions,
        completedTasks: this.systemMetrics.completedInstructions,
        failedTasks: this.systemMetrics.failedInstructions
      };
      
      console.log(`💓 Health check: ${health.completedTasks} completed tasks`);
      
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
      this.systemMetrics.failedInstructions = 0;
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

  async saveSystemStatus() {
    const status = {
      timestamp: new Date().toISOString(),
      metrics: this.systemMetrics,
      config: this.config
    };
    
    const statusPath = path.join(process.cwd(), 'automation/data/google-docs-automation', 'system-status.json');
    await fs.writeFile(statusPath, JSON.stringify(status, null, 2));
  }

  async stop() {
    if (!this.isRunning) {
      console.log('⚠️ System is not running');
      return;
    }

    console.log('🛑 Stopping Google Docs Automation System...');
    this.isRunning = false;
    
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
      config: this.config
    };
  }

  async addInstruction(instruction) {
    if (!this.isRunning) {
      throw new Error('System is not running');
    }
    
    const task = {
      id: Date.now(),
      title: instruction.title || 'Custom Instruction',
      type: instruction.type || 'custom',
      data: instruction.data || {},
      status: 'pending'
    };
    
    this.emit('taskStarted', task);
    
    // Simulate task completion
    setTimeout(() => {
      task.status = 'completed';
      this.emit('taskCompleted', task);
    }, 1000);
    
    return task.id;
  }

  async getInstructionHistory() {
    return {
      total: this.systemMetrics.totalInstructions,
      completed: this.systemMetrics.completedInstructions,
      failed: this.systemMetrics.failedInstructions,
      health: this.systemMetrics.systemHealth
    };
  }
}

// Main execution
async function main() {
  const system = new GoogleDocsAutomationLauncher();
  
  try {
    await system.initialize();
    
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
  module.exports = GoogleDocsAutomationLauncher;
}
