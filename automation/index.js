#!/usr/bin/env node

/**
 * Intelligent Automation System - Main Entry Point
 *
 * This is the main entry point for the autonomous automation system.
 * It initializes and starts the IntelligentAutomationOrchestrator which
 * coordinates all automation components.
 */

const IntelligentAutomationOrchestrator = require('./core/IntelligentAutomationOrchestrator');
const path = require('path');
const fs = require('fs');

// Load configuration
function loadConfiguration() {
  const configPath = path.join(__dirname, 'config.json');

  if (fs.existsSync(configPath)) {
    try {
      const configData = fs.readFileSync(configPath, 'utf8');
      return JSON.parse(configData);
    } catch (error) {
      console.warn(
        '⚠️ Failed to load config.json, using defaults:',
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
      adaptiveScheduling: true
    },
    monitoring: {
      enabled: true,
      interval: 60000,
      healthCheckInterval: 300000
    },
    reporting: {
      enabled: true,
      daily: true,
      weekly: true,
      monthly: false
    },
    dashboard: {
      enabled: true,
      port: process.env.DASHBOARD_PORT || 3001
    },
    tasks: {
      dependencyUpdater: {
        enabled: true,
        interval: 24 * 60 * 60 * 1000
      },
      securityScanner: {
        enabled: true,
        interval: 6 * 60 * 60 * 1000
      },
      codeQualityEnforcer: {
        enabled: true,
        interval: 2 * 60 * 60 * 1000
      },
      staleCleaner: {
        enabled: true,
        interval: 12 * 60 * 60 * 1000
      }
    },
    notifications: {
      slack: {
        enabled: !!process.env.SLACK_WEBHOOK_URL,
        webhookUrl: process.env.SLACK_WEBHOOK_URL,
        channel: process.env.SLACK_CHANNEL || '#automation'
      },
      email: {
        enabled: false
      }
    }
  };
}

// Main function
async function main() {
  console.log('🚀 Starting Intelligent Automation System...');
  console.log('='.repeat(60));

  try {
    // Load configuration
    const config = loadConfiguration();
    console.log('📋 Configuration loaded');

    // Create orchestrator
    const orchestrator = new IntelligentAutomationOrchestrator(config);

    // Setup event listeners
    orchestrator.on('initialized', () => {
      console.log('✅ System initialized successfully');
    });

    orchestrator.on('started', () => {
      console.log('🎉 Intelligent Automation System is now running!');
      console.log('='.repeat(60));
      console.log('📊 Dashboard: http://localhost:' + config.dashboard.port);
      console.log('🔧 Press Ctrl+C to stop the system');
      console.log('='.repeat(60));
    });

    orchestrator.on('stopped', () => {
      console.log('🛑 System stopped gracefully');
    });

    orchestrator.on('error', (error) => {
      console.error('❌ System error:', error);
    });

    // Start the orchestrator
    await orchestrator.start();
  } catch (error) {
    console.error('❌ Failed to start automation system:', error);
    process.exit(1);
  }
}

// Handle command line arguments
function parseArguments() {
  const args = process.argv.slice(2);
  const options = {};

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    switch (arg) {
      case '--help':
      case '-h':
        showHelp();
        process.exit(0);
        break;

      case --version':
      case -v':
        showVersion();
        process.exit(0);
        break;

      case --config':
        if (i + 1 < args.length) {
          options.configFile = args[++i];
        }
        break;

      case --dry-run':
        options.dryRun = true;
        break;

      case --no-dashboard':
        options.noDashboard = true;
        break;

      case --port':
        if (i + 1 < args.length) {
          options.port = parseInt(args[++i]);
        }
        break;

      default:
        console.warn('⚠️ Unknown argument:', arg);
        break;
    }
  }

  return options;
}

function showHelp() {
  console.log(`
Intelligent Automation System

Usage: node automation/index.js [options]

Options:
  -h, --help              Show this help message
  -v, --version           Show version information
  --config <file>         Specify configuration file
  --dry-run               Run in dry-run mode (no actual changes)
  --no-dashboard          Disable web dashboard
  --port <number>         Set dashboard port (default: 3001)

Environment Variables:
  SLACK_WEBHOOK_URL       Slack webhook URL for notifications
  SLACK_CHANNEL           Slack channel for notifications
  DASHBOARD_PORT          Dashboard port number
  DASHBOARD_USERNAME      Dashboard username (for basic auth)
  DASHBOARD_PASSWORD      Dashboard password (for basic auth)

Examples:
  node automation/index.js
  node automation/index.js --dry-run
  node automation/index.js --port 3002
  node automation/index.js --no-dashboard
  `);
}

function showVersion() {
  const packagePath = path.join(__dirname, ..', package.json');

  if (fs.existsSync(packagePath)) {
    try {
      const packageData = JSON.parse(fs.readFileSync(packagePath, utf8'));
      console.log(`Intelligent Automation System v${packageData.version}`);
    } catch (error) {
      console.log('Intelligent Automation System v1.0.0');
    }
  } else {
    console.log('Intelligent Automation System v1.0.0');
  }
}

// Check if this is the main module
if (require.main === module) {
  // Parse command line arguments
  const options = parseArguments();

  // Apply options to environment
  if (options.port) {
    process.env.DASHBOARD_PORT = options.port.toString();
  }

  if (options.noDashboard) {
    process.env.DISABLE_DASHBOARD = true';
  }

  if (options.dryRun) {
    process.env.DRY_RUN = true';
  }

  // Start the system
  main().catch((error) => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
}

module.exports = {
  IntelligentAutomationOrchestrator,
  main,
  loadConfiguration
};
