#!/usr/bin/env node

/**
 * Autonomous Automation System - Main Entry Point
 * 
 * This script starts the complete autonomous automation system with:
 * - Intelligent task scheduling
 * - Self-healing capabilities
 * - Dynamic performance optimization
 * - Multi-channel notifications
 * - Comprehensive monitoring and reporting
 */

require('dotenv').config();
const path = require('path');
const fs = require('fs').promises;

// Import the main orchestrator
const IntelligentAutomationOrchestrator = require('./core/IntelligentAutomationOrchestrator');

class AutonomousAutomationSystem {
  constructor() {
    this.orchestrator = null;
    this.isRunning = false;
  }

  async initialize() {
    console.log('🚀 Initializing Autonomous Automation System...');
    
    try {
      // Create necessary directories
      await this.ensureDirectories();
      
      // Initialize the orchestrator
      this.orchestrator = new IntelligentAutomationOrchestrator({
        port: process.env.AUTOMATION_PORT || 3001,
        logLevel: process.env.LOG_LEVEL || info',
        enableDashboard: process.env.ENABLE_DASHBOARD !== false',
        enableAPI: process.env.ENABLE_API !== false',
        
        // Task configuration
        autoLoadTasks: true,
        defaultTaskConfig: {
          enabled: true,
          priority: normal',
          retryAttempts: 3,
          timeout: 300000
        },
        
        // Monitoring configuration
        healthCheckInterval: 60000,
        performanceTracking: true,
        anomalyDetection: true,
        
        // Notification configuration
        notifications: {
          enabled: true,
          channels: ['console', slack', webhook'],
          levels: ['warning', error', critical']
        }
      });
      
      // Set up graceful shutdown
      this.setupGracefulShutdown();
      
      console.log('✅ Autonomous Automation System initialized');
      
    } catch (error) {
      console.error('❌ Failed to initialize system:', error);
      throw error;
    }
  }

  async ensureDirectories() {
    const dirs = ['logs', reports', temp', data'];
    
    for (const dir of dirs) {
      const dirPath = path.join(process.cwd(), dir);
      try {
        await fs.access(dirPath);
      } catch {
        await fs.mkdir(dirPath, { recursive: true });
      }
    }
  }

  async start() {
    if (this.isRunning) {
      console.warn('⚠️ System is already running');
      return;
    }
    
    try {
      console.log('🚀 Starting Autonomous Automation System...');
      
      // Start the orchestrator
      await this.orchestrator.start();
      
      this.isRunning = true;
      
      console.log('✅ Autonomous Automation System started successfully');
      console.log('📊 System is now running autonomously');
      console.log('🔍 Monitoring and self-healing are active');
      console.log('📈 Performance optimization is enabled');
      console.log('🔔 Notifications are configured');
      
      // Display initial status
      await this.displayStatus();
      
    } catch (error) {
      console.error('❌ Failed to start system:', error);
      throw error;
    }
  }

  async stop() {
    if (!this.isRunning) {
      console.warn('⚠️ System is not running');
      return;
    }
    
    try {
      console.log('🛑 Stopping Autonomous Automation System...');
      
      // Stop the orchestrator
      await this.orchestrator.stop();
      
      this.isRunning = false;
      
      console.log('✅ Autonomous Automation System stopped');
      
    } catch (error) {
      console.error('❌ Error stopping system:', error);
      throw error;
    }
  }

  async restart() {
    console.log('🔄 Restarting Autonomous Automation System...');
    
    try {
      await this.stop();
      await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds
      await this.start();
      
      console.log('✅ System restarted successfully');
      
    } catch (error) {
      console.error('❌ Restart failed:', error);
      throw error;
    }
  }

  async displayStatus() {
    if (!this.orchestrator) return;
    
    const status = this.orchestrator.getStatus();
    
    console.log('\n📊 System Status:');
    console.log('================');
    console.log(`Status: ${status.isRunning ? 🟢 Running' : 🔴 Stopped'}`);
    console.log(`Uptime: ${Math.floor(status.uptime / 1000)} seconds`);
    console.log(`Total Tasks: ${status.tasks.total}`);
    console.log(`Successful Tasks: ${status.performance.successfulTasks}`);
    console.log(`Failed Tasks: ${status.performance.failedTasks}`);
    console.log(`Success Rate: ${status.performance.totalTasks > 0 
      ? (status.performance.successfulTasks / status.performance.totalTasks * 100).toFixed(2) + %
      : 0%'}`);
    console.log(`Average Response Time: ${status.performance.averageResponseTime.toFixed(2)}ms`);
    console.log(`System Health: ${status.health.status}`);
    
    if (status.tasks.status) {
      console.log('\n📋 Task Status:');
      console.log('==============');
      for (const [taskName, taskStatus] of Object.entries(status.tasks.status)) {
        const statusIcon = taskStatus.enabled ? 🟢' : 🔴';
        const runningIcon = taskStatus.isRunning ? ⚡' : ⏸️';
        console.log(`${statusIcon} ${taskName}: ${runningIcon} ${taskStatus.successRate.toFixed(1)}% success`);
      }
    }
    
    console.log('\n🎯 System Features:');
    console.log('==================');
    console.log('🤖 Autonomous Operation: Enabled');
    console.log('🔧 Self-Healing: Active');
    console.log('📈 Performance Optimization: Active');
    console.log('🔔 Multi-Channel Notifications: Configured');
    console.log('📊 Real-Time Monitoring: Active');
    console.log('🚨 Anomaly Detection: Active');
    console.log('📋 Intelligent Task Scheduling: Active');
  }

  setupGracefulShutdown() {
    const shutdown = async (signal) => {
      console.log(`\n🛑 Received ${signal}. Shutting down gracefully...`);
      
      try {
        if (this.isRunning) {
          await this.stop();
        }
        
        console.log('✅ Shutdown completed successfully');
        process.exit(0);
        
      } catch (error) {
        console.error('❌ Error during shutdown:', error);
        process.exit(1);
      }
    };
    
    process.on('SIGINT', () => shutdown('SIGINT'));
    process.on('SIGTERM', () => shutdown('SIGTERM'));
    process.on('SIGQUIT', () => shutdown('SIGQUIT'));
  }

  async generateReport() {
    if (!this.orchestrator) {
      console.error('❌ System not initialized');
      return;
    }
    
    try {
      console.log('📄 Generating system report...');
      
      const report = await this.orchestrator.generateReport();
      
      console.log('✅ Report generated successfully');
      console.log(`📊 Success Rate: ${report.summary.successRate}`);
      console.log(`⏱️ Average Response Time: ${report.summary.averageResponseTime}`);
      console.log(`🕐 Uptime: ${report.summary.uptime}`);
      
      return report;
      
    } catch (error) {
      console.error('❌ Failed to generate report:', error);
      throw error;
    }
  }

  async emergencyStop() {
    console.log('🚨 Emergency stop initiated...');
    
    try {
      if (this.orchestrator) {
        await this.orchestrator.emergencyStop();
      }
      
      this.isRunning = false;
      console.log('✅ Emergency stop completed');
      
    } catch (error) {
      console.error('❌ Emergency stop failed:', error);
      throw error;
    }
  }
}

// CLI interface
async function main()  {
  const system = new AutonomousAutomationSystem();
  const command = process.argv[2];
  
  try {
    await system.initialize();
    
    switch (command) {
      case start':
        await system.start();
        break;
        
      case stop':
        await system.stop();
        break;
        
      case restart':
        await system.restart();
        break;
        
      case status':
        await system.displayStatus();
        break;
        
      case report':
        await system.generateReport();
        break;
        
      case emergency-stop':
        await system.emergencyStop();
        break;
        
      default:
        console.log('🤖 Autonomous Automation System');
        console.log('==============================');
        console.log('');
        console.log('Usage: node start-autonomous-system.js [command]);
        console.log('');
        console.log('Commands:');
        console.log('  start           Start the autonomous automation system');
        console.log('  stop            Stop the system gracefully');
        console.log('  restart         Restart the system');
        console.log('  status          Display system status');
        console.log('  report          Generate system report');
        console.log('  emergency-stop  Emergency stop (use with caution));
        console.log('');
        console.log('Features:');
        console.log('  🤖 Autonomous operation with self-healing');
        console.log('  📈 Dynamic performance optimization');
        console.log('  🔔 Multi-channel notifications');
        console.log('  📊 Real-time monitoring and reporting');
        console.log('  🚨 Anomaly detection and alerting');
        console.log('  📋 Intelligent task scheduling');
        console.log('');
        
        // Start the system by default
        await system.start();
    }
    
  } catch (error) {
    console.error('❌ System error:', error);
    process.exit(1);
  }
}

// Start the system if this file is executed directly
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
}

module.exports = AutonomousAutomationSystem; 