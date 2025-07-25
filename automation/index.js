#!/usr/bin/env node

/**
 * Intelligent Automation System - Main Entry Point
 *
 * This is the main entry point for the autonomous automation system.
 * It initializes and starts the IntelligentAutomationOrchestrator which
 * coordinates all automation components.
 */

const path = require('path');
const fs = require('fs');

// Load configuration
function loadConfiguration() {
  const configPath = path.join(__dirname, 'automation-config.json');

  if (fs.existsSync(configPath)) {
    try {
      const configData = fs.readFileSync(configPath, 'utf8');
      return JSON.parse(configData);
    } catch (error) {
      console.warn(
        '⚠️ Failed to load automation-config.json, using defaults:',
        error.message,
      );
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
      port: process.env.DASHBOARD_PORT || 3001,
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

// Initialize the automation system
async function main() {
  try {
    const config = loadConfiguration();

    console.log('🚀 Starting Intelligent Automation System...');
    console.log('📋 Configuration loaded successfully');

    // Import and initialize the orchestrator
    const {
      IntelligentAutomationOrchestrator,
    } = require('./intelligent-automation-orchestrator');

    // Import infinite improvement loop
    const { InfiniteImprovementLoop } = require('./infinite-improvement-loop');
    const { InfiniteImprovementLauncher } = require('./infinite-improvement-launcher');

    const orchestrator = new IntelligentAutomationOrchestrator(config);
    
    // Initialize infinite improvement loop if enabled
    let improvementLoop = null;
    let improvementLauncher = null;
    
    if (config.infiniteImprovement?.enabled) {
      console.log('🔄 Initializing Infinite Improvement Loop...');
      
      try {
        improvementLauncher = new InfiniteImprovementLauncher({
          enableInfiniteLoop: true,
          enableOrchestrator: false, // We already have the orchestrator
          enableIntegration: true,
          dashboardPort: config.infiniteImprovement.dashboardPort || 3002,
          logLevel: config.infiniteImprovement.logLevel || 'info'
        });
        
        await improvementLauncher.initialize();
        console.log('✅ Infinite Improvement Loop initialized');
      } catch (error) {
        console.warn('⚠️ Failed to initialize Infinite Improvement Loop:', error.message);
      }
    }

    // Parse command line arguments
    const args = parseArguments();

    if (args.help) {
      showHelp();
      return;
    }

    // Start the automation system
    await orchestrator.start();

    // Start infinite improvement loop if available
    if (improvementLauncher) {
      try {
        await improvementLauncher.start();
        console.log('✅ Infinite Improvement Loop started successfully');
      } catch (error) {
        console.warn('⚠️ Failed to start Infinite Improvement Loop:', error.message);
      }
    }

    console.log('✅ Intelligent Automation System started successfully');

    // Keep the process running
    process.on('SIGINT', async () => {
      console.log('\n🛑 Shutting down automation system...');
      
      // Stop infinite improvement loop first
      if (improvementLauncher) {
        try {
          await improvementLauncher.stop();
          console.log('✅ Infinite Improvement Loop stopped');
        } catch (error) {
          console.warn('⚠️ Error stopping Infinite Improvement Loop:', error.message);
        }
      }
      
      // Stop orchestrator
      await orchestrator.stop();
      process.exit(0);
    });
  } catch (error) {
    console.error('❌ Failed to start automation system:', error);
    process.exit(1);
  }
}

function parseArguments() {
  const args = process.argv.slice(2);
  const parsed = {
    help: false,
    watch: false,
    daemon: false,
    config: null,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    switch (arg) {
      case '--help':
      case '-h':
        parsed.help = true;
        break;
      case '--watch':
      case '-w':
        parsed.watch = true;
        break;
      case '--daemon':
      case '-d':
        parsed.daemon = true;
        break;
      case '--config':
      case '-c':
        parsed.config = args[++i];
        break;
      default:
        console.warn(`⚠️ Unknown argument: ${arg}`);
    }
  }

  return parsed;
}

function showHelp() {
  console.log(`
🤖 Intelligent Automation System

Usage: node automation/index.js [options]

Options:
  -h, --help     Show this help message
  -w, --watch    Enable file watching mode
  -d, --daemon   Run as daemon process
  -c, --config   Specify custom config file

Examples:
  node automation/index.js
  node automation/index.js --watch
  node automation/index.js --daemon

Features:
  • Autonomous Git operations (commit, push, conflict resolution)
  • Performance monitoring and optimization
  • Security scanning and vulnerability detection
  • Code quality enforcement
  • Intelligent decision making
  • Self-healing and error recovery
  • Real-time reporting and notifications
  `);
}

// Run the main function
if (require.main === module) {
  main().catch((error) => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
}

module.exports = { main, loadConfiguration };
