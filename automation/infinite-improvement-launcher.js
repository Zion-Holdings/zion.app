#!/usr/bin/env node

/**
 * Infinite Improvement Loop Launcher
 * 
 * Integrates the infinite improvement loop with the existing automation system
 * to provide continuous, intelligent optimization and enhancement.
 */

const { InfiniteImprovementLoop } = require('./infinite-improvement-loop');
const { IntelligentAutomationOrchestrator } = require('./intelligent-automation-orchestrator');
const path = require('path');
const fs = require('fs');

class InfiniteImprovementLauncher {
  constructor(config = {}) {
    this.config = {
      enableInfiniteLoop: true,
      enableOrchestrator: true,
      enableIntegration: true,
      dashboardPort: 3001,
      improvementPort: 3002,
      logLevel: 'info',
      ...config
    };

    this.improvementLoop = null;
    this.orchestrator = null;
    this.isRunning = false;
    this.startTime = null;
  }

  /**
   * Initialize the launcher
   */
  async initialize() {
    console.log('🚀 Initializing Infinite Improvement Launcher...');

    try {
      // Load configuration
      const config = this.loadConfiguration();

      // Initialize infinite improvement loop
      if (this.config.enableInfiniteLoop) {
        this.improvementLoop = new InfiniteImprovementLoop({
          analysisInterval: 30000,
          optimizationInterval: 120000,
          learningInterval: 300000,
          improvementInterval: 600000,
          logLevel: this.config.logLevel
        });

        await this.improvementLoop.initialize();
        console.log('✅ Infinite Improvement Loop initialized');
      }

      // Initialize orchestrator
      if (this.config.enableOrchestrator) {
        this.orchestrator = new IntelligentAutomationOrchestrator({
          ...config,
          dashboard: {
            ...config.dashboard,
            port: this.config.dashboardPort
          }
        });

        await this.orchestrator.initialize();
        console.log('✅ Intelligent Automation Orchestrator initialized');
      }

      // Setup integration
      if (this.config.enableIntegration) {
        await this.setupIntegration();
        console.log('✅ System integration configured');
      }

      console.log('✅ Infinite Improvement Launcher initialized successfully');
      return true;
    } catch (error) {
      console.error('❌ Failed to initialize launcher:', error);
      throw error;
    }
  }

  /**
   * Start the infinite improvement system
   */
  async start() {
    if (this.isRunning) {
      console.warn('⚠️ System is already running');
      return;
    }

    console.log('🔄 Starting Infinite Improvement System...');
    this.isRunning = true;
    this.startTime = new Date();

    try {
      // Start orchestrator first
      if (this.orchestrator) {
        await this.orchestrator.start();
        console.log('✅ Orchestrator started successfully');
      }

      // Start infinite improvement loop
      if (this.improvementLoop) {
        await this.improvementLoop.start();
        console.log('✅ Infinite Improvement Loop started successfully');
      }

      // Setup event listeners
      this.setupEventListeners();

      // Display status
      this.displayStatus();

      console.log('🎉 Infinite Improvement System is now running!');
      console.log(`📊 Dashboard: http://localhost:${this.config.dashboardPort}`);
      console.log(`🔍 Improvement Monitor: http://localhost:${this.config.improvementPort}`);

    } catch (error) {
      console.error('❌ Failed to start system:', error);
      this.isRunning = false;
      throw error;
    }
  }

  /**
   * Stop the infinite improvement system
   */
  async stop() {
    if (!this.isRunning) {
      console.warn('⚠️ System is not running');
      return;
    }

    console.log('🛑 Stopping Infinite Improvement System...');

    try {
      // Stop infinite improvement loop
      if (this.improvementLoop) {
        await this.improvementLoop.stop();
        console.log('✅ Infinite Improvement Loop stopped');
      }

      // Stop orchestrator
      if (this.orchestrator) {
        await this.orchestrator.stop();
        console.log('✅ Orchestrator stopped');
      }

      this.isRunning = false;
      console.log('✅ Infinite Improvement System stopped successfully');

    } catch (error) {
      console.error('❌ Error stopping system:', error);
      throw error;
    }
  }

  /**
   * Setup integration between components
   */
  async setupIntegration() {
    if (!this.improvementLoop || !this.orchestrator) {
      return;
    }

    // Listen to orchestrator events and feed to improvement loop
    this.orchestrator.on('system-update', (data) => {
      if (this.improvementLoop) {
        this.improvementLoop.emit('orchestrator-update', data);
      }
    });

    this.orchestrator.on('health-update', (data) => {
      if (this.improvementLoop) {
        this.improvementLoop.emit('health-update', data);
      }
    });

    // Listen to improvement loop events and feed to orchestrator
    this.improvementLoop.on('analysis-complete', (data) => {
      if (this.orchestrator) {
        this.orchestrator.emit('improvement-analysis', data);
      }
    });

    this.improvementLoop.on('optimization-complete', (data) => {
      if (this.orchestrator) {
        this.orchestrator.emit('improvement-optimization', data);
      }
    });

    this.improvementLoop.on('improvement-complete', (data) => {
      if (this.orchestrator) {
        this.orchestrator.emit('improvement-applied', data);
      }
    });
  }

  /**
   * Setup event listeners
   */
  setupEventListeners() {
    // Handle graceful shutdown
    process.on('SIGINT', async () => {
      console.log('\n🛑 Received SIGINT, shutting down gracefully...');
      await this.stop();
      process.exit(0);
    });

    process.on('SIGTERM', async () => {
      console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
      await this.stop();
      process.exit(0);
    });

    // Handle uncaught exceptions
    process.on('uncaughtException', async (error) => {
      console.error('❌ Uncaught Exception:', error);
      await this.stop();
      process.exit(1);
    });

    process.on('unhandledRejection', async (reason, promise) => {
      console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
      await this.stop();
      process.exit(1);
    });
  }

  /**
   * Display system status
   */
  displayStatus() {
    console.log('\n📊 System Status:');
    console.log('================');
    console.log(`🔄 Status: ${this.isRunning ? 'Running' : 'Stopped'}`);
    console.log(`⏰ Started: ${this.startTime?.toISOString() || 'N/A'}`);
    console.log(`🎯 Infinite Loop: ${this.improvementLoop ? 'Active' : 'Inactive'}`);
    console.log(`🎼 Orchestrator: ${this.orchestrator ? 'Active' : 'Inactive'}`);
    
    if (this.improvementLoop) {
      const stats = this.improvementLoop.getImprovementStats();
      console.log(`📈 Improvements: ${stats.totalImprovements} total, ${stats.successRate}% success rate`);
      console.log(`🔄 Current Iteration: ${stats.currentIteration}`);
      console.log(`📋 Queue Length: ${stats.queueLength}`);
    }

    console.log('\n🔗 Access Points:');
    console.log(`📊 Dashboard: http://localhost:${this.config.dashboardPort}`);
    console.log(`🔍 Improvement Monitor: http://localhost:${this.config.improvementPort}`);
    console.log('================\n');
  }

  /**
   * Load configuration
   */
  loadConfiguration() {
    const configPath = path.join(__dirname, 'automation-config.json');

    if (fs.existsSync(configPath)) {
      try {
        const configData = fs.readFileSync(configPath, 'utf8');
        return JSON.parse(configData);
      } catch (error) {
        console.warn('⚠️ Failed to load automation-config.json, using defaults:', error.message);
      }
    }

    // Default configuration
    return {
      autonomous: {
        enabled: true,
        selfHealing: true,
        learning: true,
        adaptiveScheduling: true,
      },
      monitoring: {
        enabled: true,
        interval: 60000,
        healthCheckInterval: 300000,
      },
      reporting: {
        enabled: true,
        daily: true,
        weekly: true,
        monthly: false,
      },
      dashboard: {
        enabled: true,
        port: this.config.dashboardPort,
      },
      tasks: {
        dependencyUpdater: {
          enabled: true,
          interval: 24 * 60 * 60 * 1000,
        },
        securityScanner: {
          enabled: true,
          interval: 6 * 60 * 60 * 1000,
        },
        codeQualityEnforcer: {
          enabled: true,
          interval: 2 * 60 * 60 * 1000,
        },
        staleCleaner: {
          enabled: true,
          interval: 12 * 60 * 60 * 1000,
        },
      },
      notifications: {
        slack: {
          enabled: !!process.env.SLACK_WEBHOOK_URL,
          webhookUrl: process.env.SLACK_WEBHOOK_URL,
          channel: process.env.SLACK_CHANNEL || '#automation',
        },
        email: {
          enabled: false,
        },
      },
    };
  }

  /**
   * Get system statistics
   */
  getStats() {
    const stats = {
      isRunning: this.isRunning,
      startTime: this.startTime,
      uptime: this.startTime ? Date.now() - this.startTime.getTime() : 0,
      improvementLoop: this.improvementLoop ? this.improvementLoop.getImprovementStats() : null,
      orchestrator: this.orchestrator ? {
        systems: Array.from(this.orchestrator.automationSystems.entries()).map(([name, system]) => ({
          name,
          status: system.status,
          health: system.health
        }))
      } : null
    };

    return stats;
  }

  /**
   * Restart the system
   */
  async restart() {
    console.log('🔄 Restarting Infinite Improvement System...');
    await this.stop();
    await this.initialize();
    await this.start();
    console.log('✅ System restarted successfully');
  }
}

// Command line interface
function parseArguments() {
  const args = process.argv.slice(2);
  const parsed = {
    help: false,
    start: false,
    stop: false,
    restart: false,
    status: false,
    config: null,
    logLevel: 'info'
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    switch (arg) {
      case '--help':
      case '-h':
        parsed.help = true;
        break;
      case '--start':
      case '-s':
        parsed.start = true;
        break;
      case '--stop':
        parsed.stop = true;
        break;
      case '--restart':
      case '-r':
        parsed.restart = true;
        break;
      case '--status':
        parsed.status = true;
        break;
      case '--config':
      case '-c':
        parsed.config = args[++i];
        break;
      case '--log-level':
        parsed.logLevel = args[++i];
        break;
      default:
        console.warn(`⚠️ Unknown argument: ${arg}`);
    }
  }

  return parsed;
}

function showHelp() {
  console.log(`
🚀 Infinite Improvement Loop Launcher

Usage: node automation/infinite-improvement-launcher.js [options]

Options:
  -h, --help           Show this help message
  -s, --start          Start the infinite improvement system
  --stop               Stop the infinite improvement system
  -r, --restart        Restart the infinite improvement system
  --status             Show system status
  -c, --config         Specify custom config file
  --log-level          Set log level (error, warn, info, debug)

Examples:
  node automation/infinite-improvement-launcher.js --start
  node automation/infinite-improvement-launcher.js --status
  node automation/infinite-improvement-launcher.js --restart

Features:
  • Continuous system analysis and optimization
  • Intelligent decision making and learning
  • Integration with existing automation systems
  • Real-time monitoring and reporting
  • Self-healing and adaptive capabilities
  • Performance tracking and improvement validation
  `);
}

// Main execution
async function main() {
  try {
    const args = parseArguments();

    if (args.help) {
      showHelp();
      return;
    }

    const launcher = new InfiniteImprovementLauncher({
      logLevel: args.logLevel
    });

    if (args.status) {
      await launcher.initialize();
      launcher.displayStatus();
      return;
    }

    if (args.stop) {
      await launcher.initialize();
      await launcher.stop();
      return;
    }

    if (args.restart) {
      await launcher.initialize();
      await launcher.restart();
      return;
    }

    // Default: start the system
    await launcher.initialize();
    await launcher.start();

    // Keep the process running
    console.log('🔄 System is running. Press Ctrl+C to stop.');

  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  }
}

// Run the main function
if (require.main === module) {
  main().catch((error) => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { InfiniteImprovementLauncher }; 