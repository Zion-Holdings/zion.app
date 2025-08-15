#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

class LinkHealthScheduler {
  constructor() {
    this.ROOT = process.cwd();
    this.LOG_DIR = path.join(this.ROOT, 'automation', 'logs');
    this.ensureDir(this.LOG_DIR);
    
    this.schedules = {
      hourly: '0 * * * *',      // Every hour
      daily: '0 9 * * *',      // Daily at 9 AM
      weekly: '0 9 * * 1',     // Weekly on Monday at 9 AM
      critical: '*/15 * * * *'  // Every 15 minutes for critical monitoring
    };
    
    this.tasks = new Map();
    this.isRunning = false;
  }

  ensureDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    const logFile = path.join(this.LOG_DIR, `link-scheduler-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logEntry);
    
    console.log(`[${level}] ${message}`);
  }

  async runLinkHealthCheck() {
    try {
      this.log('Starting scheduled link health check...');
      
      // Run the link health monitor
      const { execSync } = require('child_process');
      const result = execSync('npm run links:monitor', { 
        cwd: this.ROOT, 
        encoding: 'utf8',
        timeout: 300000 // 5 minutes timeout
      });
      
      this.log('Link health check completed successfully');
      
      // Check if there are critical issues
      await this.checkForCriticalIssues();
      
    } catch (error) {
      this.log(`Link health check failed: ${error.message}`, 'ERROR');
      await this.sendAlert('Link health check failed', error.message);
    }
  }

  async runRouteValidation() {
    try {
      this.log('Starting scheduled route validation...');
      
      const { execSync } = require('child_process');
      const result = execSync('npm run routes:validate', { 
        cwd: this.ROOT, 
        encoding: 'utf8',
        timeout: 120000 // 2 minutes timeout
      });
      
      this.log('Route validation completed successfully');
      
    } catch (error) {
      this.log(`Route validation failed: ${error.message}`, 'ERROR');
    }
  }

  async runAutoFix() {
    try {
      this.log('Starting scheduled auto-fix process...');
      
      const { execSync } = require('child_process');
      const result = execSync('npm run links:fix', { 
        cwd: this.ROOT, 
        encoding: 'utf8',
        timeout: 180000 // 3 minutes timeout
      });
      
      this.log('Auto-fix process completed successfully');
      
    } catch (error) {
      this.log(`Auto-fix process failed: ${error.message}`, 'ERROR');
    }
  }

  async checkForCriticalIssues() {
    try {
      const reportPath = path.join(this.ROOT, 'data', 'reports', 'link-health', 'latest.json');
      if (!fs.existsSync(reportPath)) return;
      
      const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
      
      if (report.summary.brokenLinks > 5) {
        await this.sendAlert(
          'High number of broken links detected',
          `Found ${report.summary.brokenLinks} broken links. Consider running auto-fix.`
        );
      }
      
      // Check for specific critical issues
      const criticalIssues = report.brokenLinks.filter(([url, data]) => {
        return data.statusCode >= 500 || data.error === 'timeout';
      });
      
      if (criticalIssues.length > 0) {
        await this.sendAlert(
          'Critical link issues detected',
          `Found ${criticalIssues.length} critical issues (5xx errors or timeouts).`
        );
      }
      
    } catch (error) {
      this.log(`Error checking for critical issues: ${error.message}`, 'ERROR');
    }
  }

  async sendAlert(title, message) {
    try {
      // Create alert file for external monitoring systems
      const alert = {
        timestamp: new Date().toISOString(),
        title,
        message,
        severity: 'warning'
      };
      
      const alertFile = path.join(this.ROOT, 'data', 'reports', 'alerts', `alert-${Date.now()}.json`);
      this.ensureDir(path.dirname(alertFile));
      fs.writeFileSync(alertFile, JSON.stringify(alert, null, 2));
      
      this.log(`Alert sent: ${title} - ${message}`, 'WARN');
      
    } catch (error) {
      this.log(`Failed to send alert: ${error.message}`, 'ERROR');
    }
  }

  startScheduledMonitoring() {
    if (this.isRunning) {
      this.log('Scheduler is already running', 'WARN');
      return;
    }

    this.log('Starting link health scheduler...');

    // Hourly monitoring
    this.tasks.set('hourly', cron.schedule(this.schedules.hourly, () => {
      this.runLinkHealthCheck();
    }));

    // Daily route validation
    this.tasks.set('daily', cron.schedule(this.schedules.daily, () => {
      this.runRouteValidation();
    }));

    // Weekly auto-fix
    this.tasks.set('weekly', cron.schedule(this.schedules.weekly, () => {
      this.runAutoFix();
    }));

    // Critical monitoring (every 15 minutes)
    this.tasks.set('critical', cron.schedule(this.schedules.critical, () => {
      this.checkForCriticalIssues();
    }));

    this.isRunning = true;
    this.log('Link health scheduler started successfully');
    this.log(`Scheduled tasks: ${Array.from(this.tasks.keys()).join(', ')}`);
  }

  stopScheduledMonitoring() {
    if (!this.isRunning) {
      this.log('Scheduler is not running', 'WARN');
      return;
    }

    this.log('Stopping link health scheduler...');

    for (const [name, task] of this.tasks) {
      task.stop();
      this.log(`Stopped task: ${name}`);
    }

    this.tasks.clear();
    this.isRunning = false;
    this.log('Link health scheduler stopped successfully');
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      activeTasks: Array.from(this.tasks.keys()),
      schedules: this.schedules,
      uptime: this.isRunning ? 'Active' : 'Stopped'
    };
  }

  async run() {
    const command = process.argv[2];
    
    switch (command) {
      case 'start':
        this.startScheduledMonitoring();
        // Keep the process running
        process.on('SIGINT', () => {
          this.log('Received SIGINT, shutting down gracefully...');
          this.stopScheduledMonitoring();
          process.exit(0);
        });
        break;
        
      case 'stop':
        this.stopScheduledMonitoring();
        break;
        
      case 'status':
        console.log('Link Health Scheduler Status:');
        console.log(JSON.stringify(this.getStatus(), null, 2));
        break;
        
      case 'run-now':
        await this.runLinkHealthCheck();
        break;
        
      default:
        console.log('Link Health Scheduler');
        console.log('Usage:');
        console.log('  node link-health-scheduler.cjs start    - Start scheduled monitoring');
        console.log('  node link-health-scheduler.cjs stop     - Stop scheduled monitoring');
        console.log('  node link-health-scheduler.cjs status   - Show current status');
        console.log('  node link-health-scheduler.cjs run-now  - Run health check immediately');
        break;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const scheduler = new LinkHealthScheduler();
  scheduler.run().catch(console.error);
}

module.exports = LinkHealthScheduler;