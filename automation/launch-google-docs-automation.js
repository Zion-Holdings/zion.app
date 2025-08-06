#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { EventEmitter } = require('events');
const InstructionExecutionOrchestrator = require('./agents/instruction-execution-orchestrator');

class GoogleDocsAutomationLauncher extends EventEmitter {
  constructor(config = {}) {
    super();
    this.config = {
      googleDocsUrl: config.googleDocsUrl || 'https://docs.google.com/document/d/1Q3-QbWjIIj83VYX_Hx258kmvEyF9qBR2nF09IOi4ppM/edit?usp=sharing',
      checkInterval: config.checkInterval || 60000, // 1 minute
      maxRetries: config.maxRetries || 3,
      logLevel: config.logLevel || 'info',
      ...config
    };
    
    this.orchestrator = null;
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
      
      // Initialize orchestrator
      this.orchestrator = new InstructionExecutionOrchestrator({
        googleDocsUrl: this.config.googleDocsUrl,
        maxConcurrentTasks: 5,
        retryAttempts: this.config.maxRetries,
        taskTimeout: 300000 // 5 minutes
      });
      
      // Set up event listeners
      this.setupEventListeners();
      
      // Initialize orchestrator
      await this.orchestrator.initialize();
      
      // Start the system
      this.start();
      
      console.log('✅ Google Docs Automation System initialized successfully');
      return true;
      
    } catch (error) {
      console.error('❌ Failed to initialize Google Docs Automation System:', error);
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
      await fs.ensureDir(path.join(process.cwd(), dir));
    }
  }

  setupEventListeners() {
    // Orchestrator events
    this.orchestrator.on('taskStarted', (task) => {
      console.log(`📋 Task started: ${task.id} - ${task.title}`);
      this.systemMetrics.totalInstructions++;
      this.updateSystemHealth();
    });

    this.orchestrator.on('taskCompleted', (task) => {
      console.log(`✅ Task completed: ${task.id} - ${task.title}`);
      this.systemMetrics.completedInstructions++;
      this.updateSystemHealth();
    });

    this.orchestrator.on('taskFailed', (task) => {
      console.log(`❌ Task failed: ${task.id} - ${task.title}`);
      this.systemMetrics.failedInstructions++;
      this.updateSystemHealth();
    });

    this.orchestrator.on('healthCheck', (health) => {
      console.log(`💓 Health check: ${health.orchestrator.runningTasks} running tasks`);
      this.saveHealthReport(health);
    });

    this.orchestrator.on('error', (error) => {
      console.error('🚨 Orchestrator error:', error);
      this.emit('error', error);
    });
  }

  start() {
    if (this.isRunning) return;
    
    this.isRunning = true;
    this.startTime = new Date();
    console.log('🚀 Starting Google Docs Automation System...');
    
    // Set up periodic metrics update
    this.metricsInterval = setInterval(() => {
      this.updateSystemMetrics();
    }, 60000); // Every minute
    
    // Set up periodic report generation
    this.reportInterval = setInterval(async () => {
      await this.generateSystemReport();
    }, 300000); // Every 5 minutes
    
    console.log('✅ Google Docs Automation System started successfully');
  }

  updateSystemHealth() {
    const total = this.systemMetrics.totalInstructions;
    const completed = this.systemMetrics.completedInstructions;
    const failed = this.systemMetrics.failedInstructions;
    
    if (total === 0) {
      this.systemMetrics.systemHealth = 'unknown';
    } else if (failed === 0) {
      this.systemMetrics.systemHealth = 'excellent';
    } else if (failed / total < 0.1) {
      this.systemMetrics.systemHealth = 'good';
    } else if (failed / total < 0.3) {
      this.systemMetrics.systemHealth = 'fair';
    } else {
      this.systemMetrics.systemHealth = 'poor';
    }
  }

  updateSystemMetrics() {
    if (this.startTime) {
      this.systemMetrics.uptime = Date.now() - this.startTime.getTime();
    }
  }

  async saveHealthReport(health) {
    const healthFile = path.join(process.cwd(), 'automation/logs/google-docs-automation/health.json');
    try {
      await fs.writeJson(healthFile, health, { spaces: 2 });
    } catch (error) {
      console.error('❌ Failed to save health report:', error);
    }
  }

  async generateSystemReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        systemMetrics: this.systemMetrics,
        orchestratorStatus: this.orchestrator.getStatus(),
        performance: {
          uptime: this.systemMetrics.uptime,
          successRate: this.systemMetrics.totalInstructions > 0
            ? (this.systemMetrics.completedInstructions / this.systemMetrics.totalInstructions * 100).toFixed(2)
            : 0,
          averageTaskTime: await this.calculateAverageTaskTime()
        }
      };
      
      const reportFile = path.join(process.cwd(), 'automation/reports/google-docs-automation/system-report.json');
      await fs.writeJson(reportFile, report, { spaces: 2 });
      
      console.log('📊 System report generated');
      
    } catch (error) {
      console.error('❌ Failed to generate system report:', error);
    }
  }

  async calculateAverageTaskTime() {
    const status = this.orchestrator.getStatus();
    const completedTasks = status.completedTasks || 0;
    const failedTasks = status.failedTasks || 0;
    
    if (completedTasks + failedTasks === 0) return 0;
    
    // This is a simplified calculation - in a real implementation,
    // you'd track actual task execution times
    return 30000; // 30 seconds average (placeholder)
  }

  async stop() {
    console.log('🛑 Stopping Google Docs Automation System...');
    
    this.isRunning = false;
    
    // Clear intervals
    if (this.metricsInterval) {
      clearInterval(this.metricsInterval);
    }
    if (this.reportInterval) {
      clearInterval(this.reportInterval);
    }
    
    // Stop orchestrator
    if (this.orchestrator) {
      await this.orchestrator.stop();
    }
    
    console.log('✅ Google Docs Automation System stopped');
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      startTime: this.startTime,
      systemMetrics: this.systemMetrics,
      orchestratorStatus: this.orchestrator ? this.orchestrator.getStatus() : null
    };
  }

  async addInstruction(instruction) {
    if (!this.orchestrator) {
      throw new Error('Orchestrator not initialized');
    }
    
    await this.orchestrator.addTask(instruction);
  }

  async getInstructionHistory() {
    if (!this.orchestrator) {
      return [];
    }
    
    const googleDocsAgent = this.orchestrator.agents.get('google-docs');
    if (googleDocsAgent) {
      return googleDocsAgent.instructionHistory;
    }
    
    return [];
  }
}

// Main execution
async function main() {
  const launcher = new GoogleDocsAutomationLauncher({
    googleDocsUrl: 'https://docs.google.com/document/d/1Q3-QbWjIIj83VYX_Hx258kmvEyF9qBR2nF09IOi4ppM/edit?usp=sharing',
    checkInterval: 60000,
    maxRetries: 3,
    logLevel: 'info'
  });
  
  try {
    await launcher.initialize();
    
    // Keep the process running
    process.on('SIGINT', async () => {
      console.log('\n🛑 Received SIGINT, shutting down gracefully...');
      await launcher.stop();
      process.exit(0);
    });
    
    process.on('SIGTERM', async () => {
      console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
      await launcher.stop();
      process.exit(0);
    });
    
    console.log('🎯 Google Docs Automation System is running. Press Ctrl+C to stop.');
    
  } catch (error) {
    console.error('❌ Failed to start Google Docs Automation System:', error);
    process.exit(1);
  }
}

// Export for use as module
module.exports = GoogleDocsAutomationLauncher;

// Run if called directly
if (require.main === module) {
  main();
}
