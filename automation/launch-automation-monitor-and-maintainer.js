#!/usr/bin/env node

/**
 * Automation Monitor and Maintainer Launcher
 * 
 * This script launches and manages the Automation Monitor and Maintainer Factory
 * which continuously monitors all project automation systems.
 */

const AutomationMonitorAndMaintainerFactory = require('./automation-monitor-and-maintainer-factory');
const fs = require('fs-extra');
const path = require('path');

class AutomationMonitorAndMaintainerLauncher {
  constructor() {
    this.factory = new AutomationMonitorAndMaintainerFactory();
    this.pidFile = path.join(__dirname, 'automation-monitor.pid');
    this.configFile = path.join(__dirname, 'automation-monitor-config.json');
  }

  async start() {
    try {
      console.log('🚀 Starting Automation Monitor and Maintainer System...');
      
      // Check if already running
      if (await this.isRunning()) {
        console.log('⚠️ System is already running');
        return;
      }

      // Save PID
      await fs.writeFile(this.pidFile, process.pid.toString());
      
      // Start the factory
      await this.factory.startMonitoring();
      
      console.log('✅ Automation Monitor and Maintainer System started successfully');
      console.log('📊 Monitoring all automation factories, agents, scripts, and cron jobs');
      console.log('🔍 Health checks every 2 minutes');
      console.log('💾 Backups every 6 hours');
      console.log('🧹 Cleanup daily at 2 AM');
      console.log('📊 Reports every hour');
      
    } catch (error) {
      console.error('❌ Error starting system:', error.message);
      process.exit(1);
    }
  }

  async stop() {
    try {
      console.log('🛑 Stopping Automation Monitor and Maintainer System...');
      
      if (await fs.pathExists(this.pidFile)) {
        const pid = await fs.readFile(this.pidFile, 'utf8');
        process.kill(parseInt(pid), 'SIGTERM');
        await fs.remove(this.pidFile);
      }
      
      console.log('✅ System stopped successfully');
      
    } catch (error) {
      console.error('❌ Error stopping system:', error.message);
    }
  }

  async status() {
    try {
      const isRunning = await this.isRunning();
      console.log(`📊 System Status: ${isRunning ? '🟢 RUNNING' : '🔴 STOPPED'}`);
      
      if (isRunning) {
        const pid = await fs.readFile(this.pidFile, 'utf8');
        console.log(`📋 PID: ${pid}`);
        
        // Show monitoring stats
        const stats = await this.getMonitoringStats();
        console.log('📈 Monitoring Stats:');
        console.log(`   - Factories: ${stats.factories}`);
        console.log(`   - Agents: ${stats.agents}`);
        console.log(`   - Scripts: ${stats.scripts}`);
        console.log(`   - Cron Jobs: ${stats.cronJobs}`);
        console.log(`   - Healthy: ${stats.healthy}`);
        console.log(`   - Errors: ${stats.errors}`);
      }
      
    } catch (error) {
      console.error('❌ Error checking status:', error.message);
    }
  }

  async health() {
    try {
      console.log('🏥 Performing health check...');
      
      // Check system health
      const health = await this.performHealthCheck();
      
      console.log('📊 Health Check Results:');
      console.log(`   - System Status: ${health.systemStatus}`);
      console.log(`   - Memory Usage: ${health.memoryUsage}%`);
      console.log(`   - CPU Usage: ${health.cpuUsage}%`);
      console.log(`   - Disk Space: ${health.diskSpace}%`);
      console.log(`   - Log Files: ${health.logFiles}`);
      console.log(`   - Error Rate: ${health.errorRate}%`);
      
      if (health.systemStatus === 'healthy') {
        console.log('✅ System is healthy');
      } else {
        console.log('⚠️ System has issues');
      }
      
    } catch (error) {
      console.error('❌ Error performing health check:', error.message);
    }
  }

  async report() {
    try {
      console.log('📊 Generating comprehensive report...');
      
      await this.factory.generateComprehensiveReport();
      
      // Get latest report
      const reportsDir = path.join(__dirname, 'reports');
      const reportFiles = await fs.readdir(reportsDir);
      const latestReport = reportFiles
        .filter(f => f.startsWith('comprehensive-report-'))
        .sort()
        .pop();
      
      if (latestReport) {
        const reportPath = path.join(reportsDir, latestReport);
        const report = await fs.readJson(reportPath);
        
        console.log('📋 Report Summary:');
        console.log(`   - Timestamp: ${report.timestamp}`);
        console.log(`   - System Status: ${report.systemStatus}`);
        console.log(`   - Uptime: ${Math.floor(report.performance.uptime / 60)} minutes`);
        console.log(`   - Report File: ${reportPath}`);
      }
      
    } catch (error) {
      console.error('❌ Error generating report:', error.message);
    }
  }

  async backup() {
    try {
      console.log('💾 Creating system backup...');
      
      await this.factory.createBackup();
      
      console.log('✅ Backup created successfully');
      
    } catch (error) {
      console.error('❌ Error creating backup:', error.message);
    }
  }

  async cleanup() {
    try {
      console.log('🧹 Performing system cleanup...');
      
      await this.factory.performCleanup();
      
      console.log('✅ Cleanup completed successfully');
      
    } catch (error) {
      console.error('❌ Error performing cleanup:', error.message);
    }
  }

  async isRunning() {
    try {
      if (!await fs.pathExists(this.pidFile)) {
        return false;
      }
      
      const pid = await fs.readFile(this.pidFile, 'utf8');
      
      // Check if process is actually running
      const { exec } = require('child_process');
      return new Promise((resolve) => {
        exec(`ps -p ${pid}`, (error) => {
          resolve(!error);
        });
      });
      
    } catch (error) {
      return false;
    }
  }

  async getMonitoringStats() {
    try {
      const stats = {
        factories: this.factory.monitoringData.factories.length,
        agents: this.factory.monitoringData.agents.length,
        scripts: this.factory.monitoringData.scripts.length,
        cronJobs: this.factory.monitoringData.cronJobs.length,
        healthy: 0,
        errors: 0
      };

      const allComponents = [
        ...this.factory.monitoringData.factories,
        ...this.factory.monitoringData.agents,
        ...this.factory.monitoringData.scripts,
        ...this.factory.monitoringData.cronJobs
      ];

      stats.healthy = allComponents.filter(c => 
        c.status === 'healthy' || c.status === 'running'
      ).length;
      
      stats.errors = allComponents.filter(c => 
        c.status !== 'healthy' && c.status !== 'running'
      ).length;

      return stats;
      
    } catch (error) {
      return { factories: 0, agents: 0, scripts: 0, cronJobs: 0, healthy: 0, errors: 0 };
    }
  }

  async performHealthCheck() {
    try {
      const health = {
        systemStatus: 'unknown',
        memoryUsage: 0,
        cpuUsage: 0,
        diskSpace: 0,
        logFiles: 0,
        errorRate: 0
      };

      // Check memory usage
      const memUsage = process.memoryUsage();
      health.memoryUsage = Math.round((memUsage.heapUsed / memUsage.heapTotal) * 100);

      // Check disk space
      const { exec } = require('child_process');
      const diskSpace = await new Promise((resolve) => {
        exec('df . | tail -1 | awk \'{print $5}\' | sed \'s/%//\'', (error, stdout) => {
          resolve(error ? 0 : parseInt(stdout.trim()));
        });
      });
      health.diskSpace = diskSpace;

      // Count log files
      const logDir = path.join(__dirname, 'logs');
      if (await fs.pathExists(logDir)) {
        const logFiles = await fs.readdir(logDir);
        health.logFiles = logFiles.length;
      }

      // Calculate error rate
      const allComponents = [
        ...this.factory.monitoringData.factories,
        ...this.factory.monitoringData.agents,
        ...this.factory.monitoringData.scripts,
        ...this.factory.monitoringData.cronJobs
      ];
      
      const totalComponents = allComponents.length;
      const errorComponents = allComponents.filter(c => 
        c.status !== 'healthy' && c.status !== 'running'
      ).length;
      
      health.errorRate = totalComponents > 0 ? Math.round((errorComponents / totalComponents) * 100) : 0;

      // Determine system status
      if (health.memoryUsage < 80 && health.diskSpace < 90 && health.errorRate < 20) {
        health.systemStatus = 'healthy';
      } else if (health.memoryUsage < 90 && health.diskSpace < 95 && health.errorRate < 50) {
        health.systemStatus = 'warning';
      } else {
        health.systemStatus = 'critical';
      }

      return health;
      
    } catch (error) {
      return {
        systemStatus: 'error',
        memoryUsage: 0,
        cpuUsage: 0,
        diskSpace: 0,
        logFiles: 0,
        errorRate: 0
      };
    }
  }
}

// Handle command line arguments
async function main() {
  const launcher = new AutomationMonitorAndMaintainerLauncher();
  const command = process.argv[2] || 'start';

  switch (command) {
  case 'start':
    await launcher.start();
    break;
  case 'stop':
    await launcher.stop();
    break;
  case 'status':
    await launcher.status();
    break;
  case 'health':
    await launcher.health();
    break;
  case 'report':
    await launcher.report();
    break;
  case 'backup':
    await launcher.backup();
    break;
  case 'cleanup':
    await launcher.cleanup();
    break;
  default:
    console.log('Usage: node launch-automation-monitor-and-maintainer.js [start|stop|status|health|report|backup|cleanup]');
    break;
  }
}

// If run directly, execute main
if (require.main === module) {
  main().catch(console.error);
}

module.exports = AutomationMonitorAndMaintainerLauncher;