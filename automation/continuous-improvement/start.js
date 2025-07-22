#!/usr/bin/env node

/**
 * Zion App - Enhanced Continuous Improvement Startup Script
 * 
 * This script starts the comprehensive AI-powered automation system
 * that continuously monitors and improves the application using multiple AI tools.
 */

const path = require('path')
const fs = require('fs')
const { spawn } = require('child_process');
// Import the enhanced automation system
const EnhancedAutomation = require('./enhanced-automation');
class AutomationStartup {
  constructor() {
    this.automation = null;
    this.isRunning = false;
    this.startTime = null;
    
    // Configuration
    this.config = {
      port: process.env.AUTOMATION_PORT || 3001,
      logLevel: process.env.LOG_LEVEL || 'info','      enableDashboard: process.env.ENABLE_DASHBOARD === 'true','      enableSlack: process.env.ENABLE_SLACK === 'true','      enableMonitoring: process.env.ENABLE_MONITORING === 'true''    };
  }

  /**
   * Start the automation system
   */
  async start() {
    console.log('🚀 Starting Zion App Enhanced Automation System...');    console.log('=' .repeat(60));'    
    try {
      // Validate environment
      await this.validateEnvironment();
      
      // Initialize automation
      await this.initializeAutomation();
      
      // Start monitoring
      if (this.config.enableMonitoring) {
        await this.startMonitoring();
      }
      
      // Start dashboard
      if (this.config.enableDashboard) {
        await this.startDashboard();
      }
      
      // Start Slack integration
      if (this.config.enableSlack) {
        await this.startSlackIntegration();
      }
      
      // Set up graceful shutdown
      this.setupGracefulShutdown();
      
      this.isRunning = true;
      this.startTime = new Date();
      
      console.log('✅ Enhanced Automation System started successfully!');      console.log('📊 Dashboard: http://localhost:' + this.config.port + '/dashboard');      console.log('🔗 Health Check: http://localhost:' + this.config.port + '/health');      console.log('📈 Monitoring: ' + (this.config.enableMonitoring ? 'Enabled' : 'Disabled'));'      console.log('🤖 Slack Integration: ' + (this.config.enableSlack ? 'Enabled' : 'Disabled'));'      console.log('=' .repeat(60));'      
      // Log initial status
      this.logStatus();
      
      // Start periodic status updates
      this.startStatusUpdates();
      
    } catch (error) {
      console.error('❌ Failed to start automation system:', error);      process.exit(1);
    }
  }

  /**
   * Validate environment configuration
   */
  async validateEnvironment() {
    console.log('🔍 Validating environment configuration...')
const requiredEnvVars = [
      'CURSOR_API_KEY','      'CURSOR_WORKSPACE_ID''    ]
const optionalEnvVars = [
      'OPENAI_API_KEY','      'CLAUDE_API_KEY','      'LOCAL_AI_ENDPOINT','      'SLACK_BOT_TOKEN','      'SLACK_SIGNING_SECRET''    ];
    
    // Check required environment variables
    const missing = requiredEnvVars.filter(varName => !process.env[varName]);
    if (missing.length > 0) {
      console.warn('⚠️ Missing required environment variables:', missing.join(', '));'      console.warn('Some features may be limited without proper configuration');    }
    
    // Check optional environment variables
    const available = optionalEnvVars.filter(varName => process.env[varName]);
    if (available.length > 0) {
      console.log('✅ Available optional features:', available.join(', '));'    }
    
    // Check project structure
    const requiredFiles = [
      'package.json','      'next.config.js','      'tsconfig.json''    ];
    
    for (const file of requiredFiles) {
      if (!fs.existsSync(file)) {
        throw new Error(`Required file not found: ${file}`);
      }
    }
    
    console.log('✅ Environment validation completed');  }

  /**
   * Initialize the automation system
   */
  async initializeAutomation() {
    console.log('🔧 Initializing enhanced automation system...');    
    this.automation = new EnhancedAutomation();
    
    // Start the automation
    await this.automation.start();
    
    console.log('✅ Automation system initialized');  }

  /**
   * Start monitoring system
   */
  async startMonitoring() {
    console.log('📡 Starting monitoring system...');    
    // Start performance monitoring
    const monitorProcess = spawn('node', ['automation/performance/monitor.js'], {'      stdio: 'pipe','      detached: false
    });
    
    monitorProcess.stdout.on('data', (data) => {'      console.log(`📊 Monitor: ${data.toString().trim()}`);
    });
    
    monitorProcess.stderr.on('data', (data) => {'      console.error(`❌ Monitor Error: ${data.toString().trim()}`);
    });
    
    monitorProcess.on('close', (code) => {'      console.log(`📡 Monitor process exited with code ${code}`);
    });
    
    console.log('✅ Monitoring system started');  }

  /**
   * Start dashboard
   */
  async startDashboard() {
    console.log('📊 Starting dashboard...');    
    // Create simple dashboard server
    const express = require('express');'    const app = express();
    
    app.use(express.json());
    app.use(express.static(path.join(__dirname, 'dashboard')));'    
    // Dashboard routes
    app.get('/dashboard', (req, res) => {'      res.sendFile(path.join(__dirname, 'dashboard', 'index.html'));'    });
    
    app.get('/api/status', (req, res) => {'      res.json(this.automation.getStatus());
    });
    
    app.get('/api/performance', (req, res) => {'      res.json({
        history: this.automation.performanceHistory.slice(-100),
        current: this.automation.performanceHistory[this.automation.performanceHistory.length - 1]
      });
    });
    
    app.get('/api/improvements', (req, res) => {'      res.json(this.automation.improvementHistory.slice(-50));
    });
    
    app.get('/api/errors', (req, res) => {'      res.json(this.automation.errors.slice(-20));
    });
    
    app.get('/health', (req, res) => {'      res.json({
        status: 'healthy','        uptime: process.uptime(),
        automation: this.automation.getStatus(),
        timestamp: new Date().toISOString()
      });
    });
    
    // Start dashboard server
    app.listen(this.config.port, () => {
      console.log(`📊 Dashboard running on port ${this.config.port}`);
    });
    
    console.log('✅ Dashboard started');  }

  /**
   * Start Slack integration
   */
  async startSlackIntegration() {
    console.log('🤖 Starting Slack integration...');    
    try {
      const SlackBot = require('../slack/slack-bot');'      const slackBot = new SlackBot();
      
      await slackBot.start();
      
      console.log('✅ Slack integration started');    } catch (error) {
      console.warn('⚠️ Slack integration failed:', error.message);    }
  }

  /**
   * Setup graceful shutdown
   */
  setupGracefulShutdown() {
    const shutdown = async (signal) => {
      console.log(`\n🛑 Received ${signal}. Shutting down gracefully...`);
      
      this.isRunning = false;
      
      if (this.automation) {
        await this.automation.stop();
      }
      
      console.log('✅ Shutdown completed');      process.exit(0);
    };
    
    process.on('SIGINT', () => shutdown('SIGINT'));'    process.on('SIGTERM', () => shutdown('SIGTERM'));'    process.on('SIGQUIT', () => shutdown('SIGQUIT'));'  }

  /**
   * Log system status
   */
  logStatus() {
    const status = {
      isRunning: this.isRunning,
      startTime: this.startTime?.toISOString(),
      uptime: process.uptime(),
      automation: this.automation?.getStatus(),
      config: this.config,
      timestamp: new Date().toISOString()
    };
    
    console.log('📊 Initial Status:', JSON.stringify(status, null, 2));'    
    // Save status to file
    const statusPath = path.join(__dirname, '..', 'logs', 'automation-status.json');    fs.writeFileSync(statusPath, JSON.stringify(status, null, 2));
  }

  /**
   * Start periodic status updates
   */
  startStatusUpdates() {
    setInterval(() => {
      if (this.isRunning) {
        this.logStatus();
      }
    }, 5 * 60 * 1000); // Every 5 minutes
  }

  /**
   * Generate comprehensive report
   */
  async generateReport() {
    console.log('📋 Generating comprehensive report...');    
    if (!this.automation) {
      throw new Error('Automation system not initialized');'    }
    
    const report = this.automation.generateReport();
    
    // Save report
    const reportPath = path.join(__dirname, '..', 'reports', `comprehensive-report-${Date.now()}.json`);'    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`✅ Report generated: ${reportPath}`);
    
    return report;
  }

  /**
   * Stop the automation system
   */
  async stop() {
    console.log('🛑 Stopping automation system...');    
    this.isRunning = false;
    
    if (this.automation) {
      await this.automation.stop();
    }
    
    console.log('✅ Automation system stopped');  }
}

// Main execution
if (require.main === module) {
  const startup = new AutomationStartup();
  
  // Handle command line arguments
  const args = process.argv.slice(2);
  
  if (args.includes('--help') || args.includes('-h')) {'    console.log(`
Zion App Enhanced Automation System

Usage:
  node start.js [options]

Options:
  --help, -h          Show this help message
  --report, -r        Generate a comprehensive report and exit
  --status, -s        Show current status and exit
  --stop              Stop the automation system
  --restart           Restart the automation system

Environment Variables:
  CURSOR_API_KEY              Cursor AI API key (required)
  CURSOR_WORKSPACE_ID         Cursor workspace ID (required)
  OPENAI_API_KEY              OpenAI API key (optional)
  CLAUDE_API_KEY              Claude API key (optional)
  LOCAL_AI_ENDPOINT           Local AI endpoint (optional)
  SLACK_BOT_TOKEN             Slack bot token (optional)
  SLACK_SIGNING_SECRET        Slack signing secret (optional)
  AUTOMATION_PORT             Dashboard port (default: 3001)
  LOG_LEVEL                   Log level (default: info)
  ENABLE_DASHBOARD            Enable dashboard (default: true)
  ENABLE_SLACK                Enable Slack integration (default: false)
  ENABLE_MONITORING           Enable monitoring (default: true)

Examples:
  node start.js                    # Start automation system
  node start.js --report           # Generate report and exit
  node start.js --status           # Show status and exit
  node start.js --stop             # Stop automation system
    `);
    process.exit(0);
  }
  
  if (args.includes('--report') || args.includes('-r')) {'    startup.start().then(() => {
      return startup.generateReport();
    }).then((report) => {
      console.log('📋 Report Summary:');      console.log(`- Total Tasks: ${report.summary.totalTasks}`);
      console.log(`- Successful: ${report.summary.successfulTasks}`);
      console.log(`- Failed: ${report.summary.failedTasks}`);
      console.log(`- Improvements: ${report.summary.totalImprovements}`);
      console.log(`- Errors: ${report.summary.totalErrors}`);
      process.exit(0);
    }).catch((error) => {
      console.error('❌ Error generating report:', error);      process.exit(1);
    });
  }
  
  if (args.includes('--status') || args.includes('-s')) {'    startup.start().then(() => {
      const status = startup.automation.getStatus();
      console.log('📊 Current Status:', JSON.stringify(status, null, 2));'      process.exit(0);
    }).catch((error) => {
      console.error('❌ Error getting status:', error);      process.exit(1);
    });
  }
  
  if (args.includes('--stop')) {'    // Implementation for stopping would require process management
    console.log('🛑 Stop command received. Use Ctrl+C to stop the running process.');    process.exit(0);
  }
  
  if (args.includes('--restart')) {'    // Implementation for restarting would require process management
    console.log('🔄 Restart command received. Please stop and start manually.');    process.exit(0);
  }
  
  // Default: start the automation system
  startup.start().catch((error) => {
    console.error('❌ Failed to start automation system:', error);    process.exit(1);
  });
}

module.exports = AutomationStartup; 