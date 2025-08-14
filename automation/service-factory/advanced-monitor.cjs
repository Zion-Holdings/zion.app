#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const MONITORING_DIR = path.join(ROOT, 'public', 'automation', 'monitoring');
const ALERTS_DIR = path.join(ROOT, 'public', 'automation', 'alerts');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

class AdvancedMonitor {
  constructor() {
    this.metrics = {};
    this.alerts = [];
    this.thresholds = {
      cpu: 80,
      memory: 85,
      errorRate: 5,
      responseTime: 2000,
      uptime: 99.5
    };
    this.alertHistory = [];
    ensureDir(MONITORING_DIR);
    ensureDir(ALERTS_DIR);
  }

  async startAdvancedMonitoring() {
    console.log('🔍 Starting Advanced Monitoring System...');

    // Start continuous monitoring
    this.startMetricsCollection();
    this.startAlerting();
    this.startPredictiveAnalytics();
    this.startHealthChecks();

    console.log('✅ Advanced monitoring system started');
  }

  startMetricsCollection() {
    setInterval(() => {
      this.collectSystemMetrics();
      this.collectPerformanceMetrics();
      this.collectBusinessMetrics();
    }, 30000); // Every 30 seconds
  }

  startAlerting() {
    setInterval(() => {
      this.checkAlertConditions();
      this.sendAlerts();
    }, 60000); // Every minute
  }

  startPredictiveAnalytics() {
    setInterval(() => {
      this.generatePredictions();
      this.identifyTrends();
    }, 300000); // Every 5 minutes
  }

  startHealthChecks() {
    setInterval(() => {
      this.runHealthChecks();
    }, 120000); // Every 2 minutes
  }

  async collectSystemMetrics() {
    const metrics = {
      timestamp: new Date().toISOString(),
      system: {
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        cpu: process.cpuUsage(),
        platform: process.platform,
        nodeVersion: process.version
      },
      processes: await this.getProcessMetrics(),
      resources: await this.getResourceMetrics()
    };

    this.metrics.system = metrics;
    this.saveMetrics('system', metrics);
  }

  async collectPerformanceMetrics() {
    const metrics = {
      timestamp: new Date().toISOString(),
      performance: {
        responseTimes: await this.getResponseTimes(),
        throughput: await this.getThroughput(),
        errorRates: await this.getErrorRates(),
        availability: await this.getAvailability()
      }
    };

    this.metrics.performance = metrics;
    this.saveMetrics('performance', metrics);
  }

  async collectBusinessMetrics() {
    const metrics = {
      timestamp: new Date().toISOString(),
      business: {
        servicesGenerated: await this.getServicesGenerated(),
        qualityScore: await this.getQualityScore(),
        deploymentSuccess: await this.getDeploymentSuccess(),
        marketOpportunities: await this.getMarketOpportunities()
      }
    };

    this.metrics.business = metrics;
    this.saveMetrics('business', metrics);
  }

  async getProcessMetrics() {
    try {
      const { exec } = require('child_process');
      const util = require('util');
      const execAsync = util.promisify(exec);

      const { stdout } = await execAsync('pm2 jlist');
      const processes = JSON.parse(stdout);

      return processes.map(proc => ({
        name: proc.name,
        status: proc.pm2_env.status,
        memory: proc.monit.memory,
        cpu: proc.monit.cpu,
        uptime: proc.pm2_env.pm_uptime,
        restarts: proc.pm2_env.restart_time
      }));
    } catch (error) {
      return [];
    }
  }

  async getResourceMetrics() {
    try {
      const { exec } = require('child_process');
      const util = require('util');
      const execAsync = util.promisify(exec);

      const { stdout: memory } = await execAsync('free -m | grep Mem');
      const { stdout: disk } = await execAsync('df -h / | tail -1');
      const { stdout: load } = await execAsync('uptime');

      return {
        memory: this.parseMemoryOutput(memory),
        disk: this.parseDiskOutput(disk),
        load: this.parseLoadOutput(load)
      };
    } catch (error) {
      return {};
    }
  }

  parseMemoryOutput(output) {
    const parts = output.trim().split(/\s+/);
    return {
      total: parseInt(parts[1]),
      used: parseInt(parts[2]),
      free: parseInt(parts[3]),
      available: parseInt(parts[6])
    };
  }

  parseDiskOutput(output) {
    const parts = output.trim().split(/\s+/);
    return {
      total: parts[1],
      used: parts[2],
      available: parts[3],
      usage: parts[4]
    };
  }

  parseLoadOutput(output) {
    const match = output.match(/load average: ([\d.]+), ([\d.]+), ([\d.]+)/);
    if (match) {
      return {
        '1min': parseFloat(match[1]),
        '5min': parseFloat(match[2]),
        '15min': parseFloat(match[3])
      };
    }
    return {};
  }

  async getResponseTimes() {
    try {
      const response = await fetch('http://localhost:3000/');
      const start = Date.now();
      await response.text();
      return Date.now() - start;
    } catch (error) {
      return null;
    }
  }

  async getThroughput() {
    // Simulate throughput calculation
    return Math.random() * 100 + 50;
  }

  async getErrorRates() {
    // Simulate error rate calculation
    return Math.random() * 2;
  }

  async getAvailability() {
    // Simulate availability calculation
    return 99.5 + Math.random() * 0.5;
  }

  async getServicesGenerated() {
    try {
      const servicesDir = path.join(ROOT, 'generated-services');
      if (fs.existsSync(servicesDir)) {
        const services = fs.readdirSync(servicesDir);
        return services.length;
      }
      return 0;
    } catch (error) {
      return 0;
    }
  }

  async getQualityScore() {
    // Simulate quality score
    return 85 + Math.random() * 15;
  }

  async getDeploymentSuccess() {
    // Simulate deployment success rate
    return 90 + Math.random() * 10;
  }

  async getMarketOpportunities() {
    // Simulate market opportunities
    return Math.floor(Math.random() * 20) + 5;
  }

  async checkAlertConditions() {
    const alerts = [];

    // Check system metrics
    if (this.metrics.system) {
      const memory = this.metrics.system.resources?.memory;
      if (memory && memory.used / memory.total > this.thresholds.memory / 100) {
        alerts.push({
          level: 'WARNING',
          category: 'SYSTEM',
          message: `High memory usage: ${Math.round((memory.used / memory.total) * 100)}%`,
          timestamp: new Date().toISOString(),
          value: Math.round((memory.used / memory.total) * 100),
          threshold: this.thresholds.memory
        });
      }
    }

    // Check performance metrics
    if (this.metrics.performance) {
      const responseTime = this.metrics.performance.performance?.responseTimes;
      if (responseTime && responseTime > this.thresholds.responseTime) {
        alerts.push({
          level: 'CRITICAL',
          category: 'PERFORMANCE',
          message: `High response time: ${responseTime}ms`,
          timestamp: new Date().toISOString(),
          value: responseTime,
          threshold: this.thresholds.responseTime
        });
      }
    }

    // Check business metrics
    if (this.metrics.business) {
      const qualityScore = this.metrics.business.business?.qualityScore;
      if (qualityScore && qualityScore < 80) {
        alerts.push({
          level: 'WARNING',
          category: 'QUALITY',
          message: `Low quality score: ${qualityScore}`,
          timestamp: new Date().toISOString(),
          value: qualityScore,
          threshold: 80
        });
      }
    }

    // Add new alerts
    this.alerts.push(...alerts);
    this.alertHistory.push(...alerts);

    // Save alerts
    this.saveAlerts();
  }

  async sendAlerts() {
    for (const alert of this.alerts) {
      console.log(`🚨 ALERT [${alert.level}] ${alert.category}: ${alert.message}`);
      
      // Here you could integrate with external alerting systems
      // - Slack notifications
      // - Email alerts
      // - PagerDuty
      // - Webhook calls
    }

    // Clear current alerts
    this.alerts = [];
  }

  async generatePredictions() {
    const predictions = {
      timestamp: new Date().toISOString(),
      predictions: {
        resourceUsage: this.predictResourceUsage(),
        performance: this.predictPerformance(),
        business: this.predictBusinessMetrics()
      }
    };

    this.saveMetrics('predictions', predictions);
  }

  predictResourceUsage() {
    const currentMemory = this.metrics.system?.resources?.memory;
    if (!currentMemory) return {};

    const trend = this.calculateTrend(this.getHistoricalValues('memory'));
    const prediction = {
      '1hour': this.extrapolate(currentMemory.used, trend, 1),
      '6hours': this.extrapolate(currentMemory.used, trend, 6),
      '24hours': this.extrapolate(currentMemory.used, trend, 24)
    };

    return prediction;
  }

  predictPerformance() {
    const currentResponseTime = this.metrics.performance?.performance?.responseTimes;
    if (!currentResponseTime) return {};

    const trend = this.calculateTrend(this.getHistoricalValues('responseTime'));
    const prediction = {
      '1hour': this.extrapolate(currentResponseTime, trend, 1),
      '6hours': this.extrapolate(currentResponseTime, trend, 6),
      '24hours': this.extrapolate(currentResponseTime, trend, 24)
    };

    return prediction;
  }

  predictBusinessMetrics() {
    const currentQuality = this.metrics.business?.business?.qualityScore;
    if (!currentQuality) return {};

    const trend = this.calculateTrend(this.getHistoricalValues('quality'));
    const prediction = {
      '1hour': this.extrapolate(currentQuality, trend, 1),
      '6hours': this.extrapolate(currentQuality, trend, 6),
      '24hours': this.extrapolate(currentQuality, trend, 24)
    };

    return prediction;
  }

  calculateTrend(values) {
    if (values.length < 2) return 0;
    
    const n = values.length;
    const sumX = (n * (n - 1)) / 2;
    const sumY = values.reduce((sum, val) => sum + val, 0);
    const sumXY = values.reduce((sum, val, i) => sum + (i * val), 0);
    const sumX2 = values.reduce((sum, val, i) => sum + (i * i), 0);
    
    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    return slope;
  }

  extrapolate(currentValue, trend, hours) {
    return Math.max(0, currentValue + (trend * hours));
  }

  getHistoricalValues(metric) {
    // This would typically come from a time-series database
    // For now, return simulated historical data
    return Array.from({ length: 24 }, (_, i) => 
      Math.random() * 100 + (i * 0.5)
    );
  }

  async identifyTrends() {
    const trends = {
      timestamp: new Date().toISOString(),
      trends: {
        system: this.analyzeSystemTrends(),
        performance: this.analyzePerformanceTrends(),
        business: this.analyzeBusinessTrends()
      }
    };

    this.saveMetrics('trends', trends);
  }

  analyzeSystemTrends() {
    return {
      memoryTrend: this.calculateTrend(this.getHistoricalValues('memory')),
      cpuTrend: this.calculateTrend(this.getHistoricalValues('cpu')),
      diskTrend: this.calculateTrend(this.getHistoricalValues('disk'))
    };
  }

  analyzePerformanceTrends() {
    return {
      responseTimeTrend: this.calculateTrend(this.getHistoricalValues('responseTime')),
      throughputTrend: this.calculateTrend(this.getHistoricalValues('throughput')),
      errorRateTrend: this.calculateTrend(this.getHistoricalValues('errorRate'))
    };
  }

  analyzeBusinessTrends() {
    return {
      qualityTrend: this.calculateTrend(this.getHistoricalValues('quality')),
      deploymentTrend: this.calculateTrend(this.getHistoricalValues('deployment')),
      opportunitiesTrend: this.calculateTrend(this.getHistoricalValues('opportunities'))
    };
  }

  async runHealthChecks() {
    const health = {
      timestamp: new Date().toISOString(),
      checks: {
        webInterface: await this.checkWebInterface(),
        pm2Processes: await this.checkPM2Processes(),
        fileSystem: await this.checkFileSystem(),
        automation: await this.checkAutomation()
      }
    };

    this.saveMetrics('health', health);
  }

  async checkWebInterface() {
    try {
      const response = await fetch('http://localhost:3000/');
      return {
        status: 'HEALTHY',
        responseTime: Date.now() - Date.now(),
        statusCode: response.status
      };
    } catch (error) {
      return {
        status: 'UNHEALTHY',
        error: error.message
      };
    }
  }

  async checkPM2Processes() {
    try {
      const { exec } = require('child_process');
      const util = require('util');
      const execAsync = util.promisify(exec);

      const { stdout } = await execAsync('pm2 jlist');
      const processes = JSON.parse(stdout);
      
      const healthy = processes.filter(p => p.pm2_env.status === 'online').length;
      const total = processes.length;

      return {
        status: healthy === total ? 'HEALTHY' : 'DEGRADED',
        healthy,
        total,
        percentage: Math.round((healthy / total) * 100)
      };
    } catch (error) {
      return {
        status: 'UNHEALTHY',
        error: error.message
      };
    }
  }

  async checkFileSystem() {
    try {
      const stats = fs.statSync(ROOT);
      const freeSpace = require('child_process').execSync('df -h / | tail -1').toString();
      
      return {
        status: 'HEALTHY',
        freeSpace: freeSpace.trim(),
        lastModified: stats.mtime
      };
    } catch (error) {
      return {
        status: 'UNHEALTHY',
        error: error.message
      };
    }
  }

  async checkAutomation() {
    try {
      const logFile = path.join(ROOT, 'ai-service-factory.log');
      if (fs.existsSync(logFile)) {
        const stats = fs.statSync(logFile);
        const timeSinceLastUpdate = Date.now() - stats.mtime.getTime();
        
        return {
          status: timeSinceLastUpdate < 300000 ? 'HEALTHY' : 'DEGRADED',
          lastUpdate: stats.mtime,
          timeSinceUpdate: Math.round(timeSinceLastUpdate / 1000)
        };
      }
      
      return {
        status: 'UNHEALTHY',
        error: 'Log file not found'
      };
    } catch (error) {
      return {
        status: 'UNHEALTHY',
        error: error.message
      };
    }
  }

  saveMetrics(type, data) {
    const file = path.join(MONITORING_DIR, `${type}-metrics-${Date.now()}.json`);
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
  }

  saveAlerts() {
    const file = path.join(ALERTS_DIR, `alerts-${Date.now()}.json`);
    fs.writeFileSync(file, JSON.stringify(this.alertHistory, null, 2));
  }

  async generateMonitoringReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        systemHealth: this.calculateOverallHealth(),
        activeAlerts: this.alerts.length,
        totalMetrics: Object.keys(this.metrics).length
      },
      metrics: this.metrics,
      alerts: this.alertHistory.slice(-50), // Last 50 alerts
      recommendations: this.generateRecommendations()
    };

    const reportFile = path.join(MONITORING_DIR, `monitoring-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    return report;
  }

  calculateOverallHealth() {
    const healthChecks = this.metrics.health?.checks;
    if (!healthChecks) return 'UNKNOWN';

    const checks = Object.values(healthChecks);
    const healthy = checks.filter(check => check.status === 'HEALTHY').length;
    const total = checks.length;

    if (healthy === total) return 'HEALTHY';
    if (healthy >= total * 0.7) return 'DEGRADED';
    return 'UNHEALTHY';
  }

  generateRecommendations() {
    const recommendations = [];

    // System recommendations
    if (this.metrics.system?.resources?.memory) {
      const memory = this.metrics.system.resources.memory;
      const usage = (memory.used / memory.total) * 100;
      
      if (usage > 80) {
        recommendations.push({
          priority: 'HIGH',
          category: 'SYSTEM',
          action: 'Consider scaling up memory or optimizing memory usage',
          reason: `Memory usage is at ${Math.round(usage)}%`
        });
      }
    }

    // Performance recommendations
    if (this.metrics.performance?.performance?.responseTimes) {
      const responseTime = this.metrics.performance.performance.responseTimes;
      
      if (responseTime > 1000) {
        recommendations.push({
          priority: 'MEDIUM',
          category: 'PERFORMANCE',
          action: 'Investigate response time degradation',
          reason: `Response time is ${responseTime}ms`
        });
      }
    }

    // Quality recommendations
    if (this.metrics.business?.business?.qualityScore) {
      const quality = this.metrics.business.business.qualityScore;
      
      if (quality < 85) {
        recommendations.push({
          priority: 'HIGH',
          category: 'QUALITY',
          action: 'Review quality assurance processes',
          reason: `Quality score is ${quality}`
        });
      }
    }

    return recommendations;
  }
}

// CLI interface
if (require.main === module) {
  const monitor = new AdvancedMonitor();

  const command = process.argv[2] || 'start';

  switch (command) {
    case 'start':
      monitor.startAdvancedMonitoring();
      break;

    case 'report':
      monitor.generateMonitoringReport().then(report => {
        console.log('📊 Monitoring report generated:', report.summary);
      });
      break;

    case 'health':
      monitor.runHealthChecks().then(() => {
        console.log('🏥 Health checks completed');
      });
      break;

    case 'help':
    default:
      console.log('Advanced Monitor - Available Commands:');
      console.log('  start   - Start advanced monitoring');
      console.log('  report  - Generate monitoring report');
      console.log('  health  - Run health checks');
      console.log('  help    - Show this help');
      break;
  }
}

module.exports = AdvancedMonitor;