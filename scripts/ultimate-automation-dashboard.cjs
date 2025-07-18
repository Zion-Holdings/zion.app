#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

class UltimateAutomationDashboard {
  constructor() {
    this.processes = [
      'ai-app-improver.cjs',
      'continuous-optimization.cjs',
      'automation-monitor.cjs',
      'ai-error-fixer.cjs',
      'performance-optimizer.cjs',
      'security-scanner.cjs',
      'code-quality-enhancer.cjs',
      'dependency-manager.cjs',
      'build-optimizer.cjs',
      'test-automation.cjs',
      'super-automation-orchestrator.cjs',
      'ultimate-automation-master.cjs'
    ];
    this.startTime = Date.now();
  }

  log(message, type = 'info') {
    const colors = {
      info: '\x1b[36m',
      success: '\x1b[32m',
      error: '\x1b[31m',
      warning: '\x1b[33m',
      reset: '\x1b[0m'
    };
    console.log(`${colors[type]}${message}${colors.reset}`);
  }

  checkProcess(processName) {
    try {
      const result = execSync(`ps aux | grep "${processName}" | grep -v grep`, { encoding: 'utf8' });
      return result.trim().split('\n').length;
    } catch (error) {
      return 0;
    }
  }

  async generateDashboard() {
    console.clear();
    console.log('\n🎯 ULTIMATE AUTOMATION DASHBOARD');
    console.log('==================================\n');

    let totalRunning = 0;
    let totalProcesses = this.processes.length;

    // Process Status
    console.log('🤖 AUTOMATION PROCESSES:');
    console.log('========================\n');

    for (const process of this.processes) {
      const count = this.checkProcess(process);
      const status = count > 0 ? '✅ RUNNING' : '❌ STOPPED';
      const instances = count > 0 ? ` (${count} instances)` : '';
      
      this.log(`${status} ${process}${instances}`, count > 0 ? 'success' : 'error');
      totalRunning += count;
    }

    // Statistics
    console.log('\n📊 AUTOMATION STATISTICS:');
    console.log('==========================');
    const runtime = Date.now() - this.startTime;
    const uptime = Math.round(runtime / 1000);
    
    this.log(`Total Processes: ${totalProcesses}`, 'info');
    this.log(`Running Instances: ${totalRunning}`, totalRunning > 0 ? 'success' : 'error');
    this.log(`Coverage: ${Math.round((totalRunning / totalProcesses) * 100)}%`, totalRunning > 0 ? 'success' : 'error');
    this.log(`Uptime: ${uptime}s`, 'info');

    // Reports Status
    console.log('\n📈 AUTOMATION REPORTS:');
    console.log('======================');

    const reportFiles = [
      'automation/ai-improvement-report.json',
      'automation/health-report.json',
      'automation/optimization-report.json',
      'automation/performance-report.json',
      'automation/security-report.json',
      'automation/super-health-report.json'
    ];

    for (const file of reportFiles) {
      try {
        if (fs.existsSync(file)) {
          const data = JSON.parse(fs.readFileSync(file, 'utf8'));
          const timestamp = new Date(data.timestamp || Date.now()).toLocaleString();
          this.log(`✅ ${file} - Last updated: ${timestamp}`, 'success');
        } else {
          this.log(`❌ ${file} - Not found`, 'error');
        }
      } catch (error) {
        this.log(`⚠️ ${file} - Error reading: ${error.message}`, 'warning');
      }
    }

    // System Health
    console.log('\n🏥 SYSTEM HEALTH:');
    console.log('=================');
    
    const healthStatus = totalRunning >= totalProcesses * 0.8 ? 'EXCELLENT' : 
                        totalRunning >= totalProcesses * 0.6 ? 'GOOD' : 
                        totalRunning >= totalProcesses * 0.4 ? 'FAIR' : 'POOR';
    
    const healthColor = healthStatus === 'EXCELLENT' ? 'success' : 
                       healthStatus === 'GOOD' ? 'success' : 
                       healthStatus === 'FAIR' ? 'warning' : 'error';
    
    this.log(`Overall Health: ${healthStatus}`, healthColor);
    this.log(`Active Processes: ${totalRunning}/${totalProcesses}`, totalRunning > 0 ? 'success' : 'error');

    // Performance Metrics
    console.log('\n⚡ PERFORMANCE METRICS:');
    console.log('=======================');
    
    const memoryUsage = process.memoryUsage();
    this.log(`Memory Usage: ${Math.round(memoryUsage.heapUsed / 1024 / 1024)}MB`, 'info');
    this.log(`CPU Usage: ${process.cpuUsage().user / 1000}ms`, 'info');

    return { totalProcesses, totalRunning, coverage: Math.round((totalRunning / totalProcesses) * 100) };
  }

  async startContinuousMonitoring() {
    console.log('\n🔄 Starting continuous monitoring...\n');
    
    setInterval(async () => {
      await this.generateDashboard();
    }, 10000); // Every 10 seconds
  }

  async start() {
    if (process.argv.includes('--continuous')) {
      await this.startContinuousMonitoring();
    } else {
      await this.generateDashboard();
    }
  }
}

// Start the dashboard
const dashboard = new UltimateAutomationDashboard();
dashboard.start().catch(console.error); 