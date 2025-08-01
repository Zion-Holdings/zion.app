#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { EventEmitter } = require('events');
const EnhancedAutonomousSystem = require('./enhanced-autonomous-system');
const EnhancedCronSystem = require('./enhanced-cron-system');

class EnhancedAutonomousSystemLauncher extends EventEmitter {
  constructor() {
    super();
    this.autonomousSystem = null;
    this.cronSystem = null;
    this.isRunning = false;
    this.startTime = null;
    
    this.config = {
      logLevel: 'info',
      autoRestart: true,
      healthCheckInterval: 30000,
      maxRestartAttempts: 5,
      restartDelay: 60000
    };
    
    this.restartAttempts = 0;
    this.setupProcessHandlers();
  }

  setupProcessHandlers() {
    // Handle graceful shutdown
    process.on('SIGINT', () => {
      console.log('\n[Launcher] Received SIGINT, shutting down gracefully...');
      this.shutdown();
    });

    process.on('SIGTERM', () => {
      console.log('\n[Launcher] Received SIGTERM, shutting down gracefully...');
      this.shutdown();
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

  async launch() {
    console.log('🚀 [Enhanced Autonomous System Launcher] Starting enhanced autonomous system...');
    console.log('=' * 80);
    
    try {
      this.startTime = Date.now();
      this.isRunning = true;
      
      // Initialize and start the enhanced autonomous system
      console.log('[Launcher] Initializing Enhanced Autonomous System...');
      this.autonomousSystem = new EnhancedAutonomousSystem();
      
      // Wait for autonomous system to be ready
      await this.waitForSystemReady(this.autonomousSystem);
      
      // Initialize and start the enhanced cron system
      console.log('[Launcher] Initializing Enhanced Cron System...');
      this.cronSystem = new EnhancedCronSystem();
      
      // Wait for cron system to be ready
      await this.waitForSystemReady(this.cronSystem);
      
      // Set up event listeners
      this.setupEventListeners();
      
      // Start health monitoring
      this.startHealthMonitoring();
      
      console.log('✅ [Launcher] Enhanced autonomous system successfully launched!');
      console.log('=' * 80);
      console.log('📊 System Status:');
      console.log(`   - Autonomous System: ${this.autonomousSystem ? 'Running' : 'Stopped'}`);
      console.log(`   - Cron System: ${this.cronSystem ? 'Running' : 'Stopped'}`);
      console.log(`   - Uptime: ${this.getUptime()}`);
      console.log('=' * 80);
      
      this.emit('systemLaunched');
      
    } catch (error) {
      console.error('[Launcher] Failed to launch system:', error);
      this.handleSystemError(error);
    }
  }

  async waitForSystemReady(system) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('System initialization timeout'));
      }, 30000); // 30 second timeout
      
      system.once('systemReady', () => {
        clearTimeout(timeout);
        resolve();
      });
      
      system.once('systemError', (error) => {
        clearTimeout(timeout);
        reject(error);
      });
    });
  }

  setupEventListeners() {
    if (this.autonomousSystem) {
      this.autonomousSystem.on('agentStarted', (agent) => {
        console.log(`[Launcher] Agent started: ${agent.name}`);
      });

      this.autonomousSystem.on('agentStopped', (agent) => {
        console.log(`[Launcher] Agent stopped: ${agent.name}`);
      });

      this.autonomousSystem.on('researchCompleted', (status) => {
        console.log(`[Launcher] Research completed - ${status.aiTrends.length} trends, ${status.newCapabilities.length} capabilities`);
      });

      this.autonomousSystem.on('improvementsApplied', (improvements) => {
        console.log(`[Launcher] ${improvements.length} improvements applied to system`);
      });

      this.autonomousSystem.on('systemError', (error) => {
        console.error('[Launcher] Autonomous system error:', error);
        this.handleSystemError(error);
      });
    }

    if (this.cronSystem) {
      this.cronSystem.on('agentCreated', (agent) => {
        console.log(`[Launcher] New agent created via cron: ${agent.name}`);
      });

      this.cronSystem.on('orchestratorCreated', (orchestrator) => {
        console.log(`[Launcher] New orchestrator created via cron: ${orchestrator.name}`);
      });

      this.cronSystem.on('healthWarning', (status) => {
        console.warn(`[Launcher] Health warning - System health: ${status.overallHealth}%`);
      });

      this.cronSystem.on('jobFailed', ({ job, error }) => {
        console.error(`[Launcher] Cron job failed: ${job.name}`, error);
      });

      this.cronSystem.on('cronSystemError', (error) => {
        console.error('[Launcher] Cron system error:', error);
        this.handleSystemError(error);
      });
    }
  }

  startHealthMonitoring() {
    setInterval(() => {
      this.performHealthCheck();
    }, this.config.healthCheckInterval);
  }

  async performHealthCheck() {
    try {
      if (this.autonomousSystem) {
        const systemStatus = this.autonomousSystem.getSystemStatus();
        
        if (systemStatus.overallHealth < 70) {
          console.warn(`[Launcher] System health is low: ${systemStatus.overallHealth}%`);
          
          if (this.config.autoRestart && this.restartAttempts < this.config.maxRestartAttempts) {
            console.log('[Launcher] Attempting system restart...');
            await this.restartSystem();
          }
        }
      }
      
      if (this.cronSystem) {
        const cronStatus = this.cronSystem.getCronStatus();
        
        if (cronStatus.failedJobs > 3) {
          console.warn(`[Launcher] Cron system has ${cronStatus.failedJobs} failed jobs`);
        }
      }
      
    } catch (error) {
      console.error('[Launcher] Health check error:', error);
    }
  }

  async restartSystem() {
    console.log('[Launcher] Restarting enhanced autonomous system...');
    
    try {
      this.restartAttempts++;
      
      // Shutdown current systems
      if (this.autonomousSystem) {
        await this.autonomousSystem.shutdown();
      }
      
      if (this.cronSystem) {
        await this.cronSystem.shutdown();
      }
      
      // Wait before restart
      await this.sleep(this.config.restartDelay);
      
      // Relaunch systems
      await this.launch();
      
      console.log('[Launcher] System restart completed successfully');
      
    } catch (error) {
      console.error('[Launcher] System restart failed:', error);
      this.handleSystemError(error);
    }
  }

  handleSystemError(error) {
    console.error('[Launcher] System error occurred:', error);
    
    if (this.config.autoRestart && this.restartAttempts < this.config.maxRestartAttempts) {
      console.log(`[Launcher] Attempting automatic restart (attempt ${this.restartAttempts + 1}/${this.config.maxRestartAttempts})`);
      setTimeout(() => {
        this.restartSystem();
      }, this.config.restartDelay);
    } else {
      console.error('[Launcher] Maximum restart attempts reached, shutting down');
      this.shutdown();
    }
  }

  async shutdown() {
    console.log('[Launcher] Shutting down enhanced autonomous system...');
    
    this.isRunning = false;
    
    try {
      if (this.cronSystem) {
        await this.cronSystem.shutdown();
      }
      
      if (this.autonomousSystem) {
        await this.autonomousSystem.shutdown();
      }
      
      console.log('[Launcher] Enhanced autonomous system shutdown completed');
      process.exit(0);
      
    } catch (error) {
      console.error('[Launcher] Error during shutdown:', error);
      process.exit(1);
    }
  }

  getUptime() {
    if (!this.startTime) return '0s';
    
    const uptime = Date.now() - this.startTime;
    const seconds = Math.floor(uptime / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) {
      return `${days}d ${hours % 24}h ${minutes % 60}m`;
    } else if (hours > 0) {
      return `${hours}h ${minutes % 60}m`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds % 60}s`;
    } else {
      return `${seconds}s`;
    }
  }

  getSystemStatus() {
    return {
      isRunning: this.isRunning,
      uptime: this.getUptime(),
      restartAttempts: this.restartAttempts,
      autonomousSystem: this.autonomousSystem ? this.autonomousSystem.getSystemStatus() : null,
      cronSystem: this.cronSystem ? this.cronSystem.getCronStatus() : null
    };
  }

  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Main execution
async function main() {
  const launcher = new EnhancedAutonomousSystemLauncher();
  
  try {
    await launcher.launch();
    
    // Keep the process running
    process.stdin.resume();
    
    // Log system status periodically
    setInterval(() => {
      const status = launcher.getSystemStatus();
      console.log(`[Launcher] System Status - Running: ${status.isRunning}, Uptime: ${status.uptime}`);
    }, 300000); // Every 5 minutes
    
  } catch (error) {
    console.error('[Launcher] Failed to start system:', error);
    process.exit(1);
  }
}

// Run the launcher if this file is executed directly
if (require.main === module) {
  main().catch(error => {
    console.error('[Launcher] Fatal error:', error);
    process.exit(1);
  });
}

module.exports = EnhancedAutonomousSystemLauncher; 