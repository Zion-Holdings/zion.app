#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const MasterAutomationController = require('./master-automation-controller');

class AutonomousSystemLauncher {
  constructor() {
    this.controller = null;
    this.startupTime = Date.now();
    this.config = {
      autoRestart: true,
      restartDelay: 5000,
      maxRestartAttempts: 10,
      logLevel: 'info'
    };
    
    this.loadConfiguration();
    this.setupProcessHandlers();
  }

  loadConfiguration() {
    const configPath = path.join(__dirname, 'launcher-config.json');
    if (fs.existsSync(configPath)) {
      const savedConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      this.config = { ...this.config, ...savedConfig };
    }
  }

  saveConfiguration() {
    const configPath = path.join(__dirname, 'launcher-config.json');
    fs.writeFileSync(configPath, JSON.stringify(this.config, null, 2));
  }

  setupProcessHandlers() {
    // Handle graceful shutdown
    process.on('SIGINT', () => {
      console.log('\n[Launcher] Received SIGINT, shutting down gracefully...');
      this.gracefulShutdown();
    });

    process.on('SIGTERM', () => {
      console.log('\n[Launcher] Received SIGTERM, shutting down gracefully...');
      this.gracefulShutdown();
    });

    // Handle uncaught exceptions
    process.on('uncaughtException', (error) => {
      console.error('[Launcher] Uncaught Exception:', error);
      this.handleSystemError(error);
    });

    process.on('unhandledRejection', (reason, promise) => {
      console.error('[Launcher] Unhandled Rejection at:', promise, 'reason:', reason);
      this.handleSystemError(reason);
    });
  }

  async start() {
    try {
      console.log('[Launcher] Starting Autonomous Agent System...');
      console.log(`[Launcher] Startup time: ${new Date().toISOString()}`);
      
      // Create logs directory if it doesn't exist
      const logsDir = path.join(__dirname, 'logs');
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }
      
      // Initialize master controller
      this.controller = new MasterAutomationController();
      
      // Set up event listeners
      this.setupControllerEventListeners();
      
      // Start the system
      await this.startSystem();
      
      console.log('[Launcher] Autonomous Agent System started successfully');
      
      // Keep the process running
      this.keepAlive();
      
    } catch (error) {
      console.error('[Launcher] Error starting system:', error);
      this.handleSystemError(error);
    }
  }

  setupControllerEventListeners() {
    if (!this.controller) return;
    
    // Listen to system events
    this.controller.on('taskAdded', (task) => {
      console.log(`[Launcher] Task added: ${task.id}`);
    });
    
    this.controller.on('taskCompleted', (task) => {
      console.log(`[Launcher] Task completed: ${task.id}`);
    });
    
    this.controller.on('taskFailed', (task) => {
      console.error(`[Launcher] Task failed: ${task.id} - ${task.error}`);
    });
    
    this.controller.on('healthUpdate', (health) => {
      console.log(`[Launcher] Health update: ${JSON.stringify(health)}`);
    });
    
    this.controller.on('systemHealthUpdate', (health) => {
      console.log(`[Launcher] System health: ${health.overallHealth}%`);
    });
  }

  async startSystem() {
    if (!this.controller) {
      throw new Error('Controller not initialized');
    }
    
    // Wait for system to be ready
    await this.waitForSystemReady();
    
    // Add initial workloads
    await this.addInitialWorkloads();
    
    console.log('[Launcher] System initialization completed');
  }

  async waitForSystemReady() {
    let attempts = 0;
    const maxAttempts = 30; // 30 seconds
    
    while (attempts < maxAttempts) {
      try {
        const status = this.controller.getSystemStatus();
        
        if (status.overallHealth > 0) {
          console.log('[Launcher] System is ready');
          return;
        }
        
        console.log(`[Launcher] Waiting for system to be ready... (${attempts + 1}/${maxAttempts})`);
        await this.sleep(1000);
        attempts++;
        
      } catch (error) {
        console.error('[Launcher] Error checking system status:', error);
        attempts++;
        await this.sleep(1000);
      }
    }
    
    throw new Error('System failed to become ready within timeout');
  }

  async addInitialWorkloads() {
    console.log('[Launcher] Adding initial workloads...');
    
    const initialWorkloads = [
      {
        type: 'content-generation',
        subtype: 'blog',
        priority: 1,
        data: {
          target: 'blog',
          keywords: ['autonomous', 'agents', 'automation'],
          length: 500
        }
      },
      {
        type: 'analytics',
        subtype: 'performance',
        priority: 2,
        data: {
          metric: 'system-performance',
          timeframe: '1h',
          granularity: 'minute'
        }
      },
      {
        type: 'improvement',
        subtype: 'code',
        priority: 3,
        data: {
          target: 'optimization',
          scope: 'global',
          impact: 'medium'
        }
      },
      {
        type: 'integration',
        subtype: 'api',
        priority: 2,
        data: {
          service: 'monitoring',
          endpoint: '/health',
          method: 'GET'
        }
      }
    ];
    
    for (const workload of initialWorkloads) {
      try {
        const taskId = await this.controller.addWorkload(workload);
        console.log(`[Launcher] Added initial workload: ${taskId}`);
      } catch (error) {
        console.error(`[Launcher] Error adding initial workload:`, error);
      }
    }
  }

  keepAlive() {
    // Keep the process running
    setInterval(() => {
      const uptime = Date.now() - this.startupTime;
      const hours = Math.floor(uptime / 3600000);
      const minutes = Math.floor((uptime % 3600000) / 60000);
      
      console.log(`[Launcher] System running for ${hours}h ${minutes}m`);
      
      // Check system health periodically
      if (this.controller) {
        const status = this.controller.getSystemStatus();
        if (status.overallHealth < 50) {
          console.warn(`[Launcher] Low system health: ${status.overallHealth}%`);
        }
      }
    }, 300000); // Every 5 minutes
  }

  async gracefulShutdown() {
    console.log('[Launcher] Initiating graceful shutdown...');
    
    try {
      if (this.controller) {
        this.controller.stop();
      }
      
      this.saveConfiguration();
      
      console.log('[Launcher] Graceful shutdown completed');
      process.exit(0);
      
    } catch (error) {
      console.error('[Launcher] Error during graceful shutdown:', error);
      process.exit(1);
    }
  }

  handleSystemError(error) {
    console.error('[Launcher] System error occurred:', error);
    
    // Log error to file
    const errorLogPath = path.join(__dirname, 'logs', 'error.log');
    const errorLog = `${new Date().toISOString()} - ${error.stack || error.message}\n`;
    fs.appendFileSync(errorLogPath, errorLog);
    
    if (this.config.autoRestart) {
      console.log('[Launcher] Auto-restart enabled, restarting system...');
      this.restartSystem();
    } else {
      console.log('[Launcher] Auto-restart disabled, shutting down...');
      process.exit(1);
    }
  }

  async restartSystem() {
    console.log('[Launcher] Restarting system...');
    
    try {
      if (this.controller) {
        this.controller.stop();
      }
      
      // Wait before restart
      await this.sleep(this.config.restartDelay);
      
      // Restart the system
      await this.start();
      
    } catch (error) {
      console.error('[Launcher] Error during restart:', error);
      process.exit(1);
    }
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  getSystemStatus() {
    if (!this.controller) {
      return {
        status: 'not_initialized',
        uptime: Date.now() - this.startupTime
      };
    }
    
    return {
      status: 'running',
      uptime: Date.now() - this.startupTime,
      systemStatus: this.controller.getSystemStatus()
    };
  }
}

// Main execution
async function main() {
  const launcher = new AutonomousSystemLauncher();
  
  try {
    await launcher.start();
  } catch (error) {
    console.error('[Launcher] Fatal error:', error);
    process.exit(1);
  }
}

// Handle command line arguments
const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log(`
Autonomous Agent System Launcher

Usage: node start-autonomous-system.js [options]

Options:
  --help, -h          Show this help message
  --status            Show system status
  --restart           Restart the system
  --stop              Stop the system gracefully

Examples:
  node start-autonomous-system.js
  node start-autonomous-system.js --status
  `);
  process.exit(0);
}

if (args.includes('--status')) {
  const launcher = new AutonomousSystemLauncher();
  const status = launcher.getSystemStatus();
  console.log(JSON.stringify(status, null, 2));
  process.exit(0);
}

// Start the system
main().catch(error => {
  console.error('[Launcher] Fatal error in main:', error);
  process.exit(1);
}); 