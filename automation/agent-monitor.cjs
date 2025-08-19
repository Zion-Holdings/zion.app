#!/usr/bin/env node

'use strict';

/*
  Agent Monitor
  - Monitors agent creation and performance
  - Provides health checks and alerts
  - Generates monitoring reports
*/

const fs = require('fs');
const path = require('path');

class AgentMonitor {
  constructor() {
    this.appRoot = process.cwd();
    this.agentsDir = path.join(this.appRoot, 'automation', 'agents');
    this.factoriesDir = path.join(this.appRoot, 'automation', 'factories');
    this.reportsDir = path.join(this.appRoot, 'automation', 'reports');
    this.logsDir = path.join(this.appRoot, 'automation', 'logs');
    
    this.monitoringInterval = parseInt(process.env.MONITORING_INTERVAL) || 60000; // 1 minute
    this.alertThreshold = parseFloat(process.env.ALERT_THRESHOLD) || 0.8;
    
    this.isRunning = false;
    this.cycleCount = 0;
    this.startTime = new Date();
    
    this.setupDirectories();
  }

  setupDirectories() {
    const dirs = [this.reportsDir, this.logsDir];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async start() {
    if (this.isRunning) {
      console.log('Agent Monitor is already running');
      return;
    }

    console.log('🚀 Starting Agent Monitor...');
    console.log(`📊 Monitoring interval: ${this.monitoringInterval / 1000}s`);
    console.log(`⚠️  Alert threshold: ${this.alertThreshold}`);
    
    this.isRunning = true;
    
    // Start monitoring cycle
    this.startMonitoringCycle();
    
    console.log('✅ Agent Monitor started successfully');
  }

  startMonitoringCycle() {
    setInterval(async () => {
      if (!this.isRunning) return;
      
      try {
        this.cycleCount++;
        console.log(`\n🔍 Monitoring Cycle ${this.cycleCount}: Checking system health...`);
        
        await this.performHealthCheck();
        await this.generateMonitoringReport();
        
      } catch (error) {
        console.error('❌ Error in monitoring cycle:', error.message);
      }
    }, this.monitoringInterval);
  }

  async performHealthCheck() {
    console.log('🏥 Performing health check...');
    
    const healthMetrics = {
      timestamp: new Date().toISOString(),
      cycle: this.cycleCount,
      agents: await this.checkAgentsHealth(),
      factories: await this.checkFactoriesHealth(),
      system: await this.checkSystemHealth()
    };
    
    // Check for alerts
    const alerts = this.generateAlerts(healthMetrics);
    if (alerts.length > 0) {
      console.log('⚠️  Alerts generated:');
      alerts.forEach(alert => console.log(`  - ${alert}`));
    }
    
    // Save health metrics
    const healthPath = path.join(this.reportsDir, `health-check-${Date.now()}.json`);
    fs.writeFileSync(healthPath, JSON.stringify(healthMetrics, null, 2));
    
    console.log('✅ Health check completed');
    
    return healthMetrics;
  }

  async checkAgentsHealth() {
    try {
      if (!fs.existsSync(this.agentsDir)) {
        return { count: 0, health: 0, status: 'directory_not_found' };
      }
      
      const agentDirs = fs.readdirSync(this.agentsDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
      
      let totalHealth = 0;
      let validAgents = 0;
      
      for (const agentDir of agentDirs) {
        const configPath = path.join(this.agentsDir, agentDir, 'config.json');
        if (fs.existsSync(configPath)) {
          try {
            const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
            if (config.createdAt && config.type && config.complexity) {
              validAgents++;
              totalHealth += 1.0; // Valid agent
            }
          } catch (error) {
            console.warn(`⚠️  Invalid agent config in ${agentDir}:`, error.message);
          }
        }
      }
      
      const health = validAgents > 0 ? totalHealth / validAgents : 0;
      
      return {
        count: agentDirs.length,
        validCount: validAgents,
        health: health,
        status: health >= this.alertThreshold ? 'healthy' : 'degraded'
      };
      
    } catch (error) {
      console.error('❌ Error checking agents health:', error.message);
      return { count: 0, health: 0, status: 'error', error: error.message };
    }
  }

  async checkFactoriesHealth() {
    try {
      if (!fs.existsSync(this.factoriesDir)) {
        return { count: 0, health: 0, status: 'directory_not_found' };
      }
      
      const factoryDirs = fs.readdirSync(this.factoriesDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
      
      let totalHealth = 0;
      let validFactories = 0;
      
      for (const factoryDir of factoryDirs) {
        const configPath = path.join(this.factoriesDir, factoryDir, 'factory-config.json');
        if (fs.existsSync(configPath)) {
          try {
            const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
            if (config.createdAt && config.type && config.complexity) {
              validFactories++;
              totalHealth += 1.0; // Valid factory
            }
          } catch (error) {
            console.warn(`⚠️  Invalid factory config in ${factoryDir}:`, error.message);
          }
        }
      }
      
      const health = validFactories > 0 ? totalHealth / validFactories : 0;
      
      return {
        count: factoryDirs.length,
        validCount: validFactories,
        health: health,
        status: health >= this.alertThreshold ? 'healthy' : 'degraded'
      };
      
    } catch (error) {
      console.error('❌ Error checking factories health:', error.message);
      return { count: 0, health: 0, status: 'error', error: error.message };
    }
  }

  async checkSystemHealth() {
    try {
      const uptime = Date.now() - this.startTime.getTime();
      const memoryUsage = process.memoryUsage();
      
      return {
        uptime: uptime,
        memory: {
          rss: memoryUsage.rss,
          heapTotal: memoryUsage.heapTotal,
          heapUsed: memoryUsage.heapUsed,
          external: memoryUsage.external
        },
        status: 'healthy'
      };
      
    } catch (error) {
      console.error('❌ Error checking system health:', error.message);
      return { status: 'error', error: error.message };
    }
  }

  generateAlerts(healthMetrics) {
    const alerts = [];
    
    if (healthMetrics.agents.health < this.alertThreshold) {
      alerts.push(`Agent health below threshold: ${healthMetrics.agents.health.toFixed(2)} < ${this.alertThreshold}`);
    }
    
    if (healthMetrics.factories.health < this.alertThreshold) {
      alerts.push(`Factory health below threshold: ${healthMetrics.factories.health.toFixed(2)} < ${this.alertThreshold}`);
    }
    
    if (healthMetrics.agents.count === 0) {
      alerts.push('No agents found in the system');
    }
    
    if (healthMetrics.factories.count === 0) {
      alerts.push('No factories found in the system');
    }
    
    return alerts;
  }

  async generateMonitoringReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        cycle: this.cycleCount,
        uptime: Date.now() - this.startTime.getTime(),
        summary: {
          totalAgents: await this.countAgents(),
          totalFactories: await this.countFactories(),
          systemHealth: 'healthy'
        },
        recommendations: this.generateRecommendations()
      };
      
      const reportPath = path.join(this.reportsDir, `monitoring-report-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      console.log('📊 Monitoring report generated');
      
    } catch (error) {
      console.error('❌ Error generating monitoring report:', error.message);
    }
  }

  async countAgents() {
    try {
      if (!fs.existsSync(this.agentsDir)) return 0;
      const items = fs.readdirSync(this.agentsDir, { withFileTypes: true });
      return items.filter(dirent => dirent.isDirectory()).length;
    } catch (error) {
      return 0;
    }
  }

  async countFactories() {
    try {
      if (!fs.existsSync(this.factoriesDir)) return 0;
      const items = fs.readdirSync(this.factoriesDir, { withFileTypes: true });
      return items.filter(dirent => dirent.isDirectory()).length;
    } catch (error) {
      return 0;
    }
  }

  generateRecommendations() {
    const recommendations = [];
    
    recommendations.push('Continue monitoring agent and factory creation');
    recommendations.push('Ensure all processes are running in PM2');
    recommendations.push('Check logs for any errors or warnings');
    recommendations.push('Monitor system resource usage');
    
    return recommendations;
  }

  stop() {
    console.log('🛑 Stopping Agent Monitor...');
    this.isRunning = false;
    console.log('✅ Agent Monitor stopped');
  }
}

// CLI interface
if (require.main === module) {
  const monitor = new AgentMonitor();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    monitor.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    monitor.stop();
    process.exit(0);
  });
  
  // Start the monitor
  monitor.start().catch(console.error);
}

module.exports = AgentMonitor;
