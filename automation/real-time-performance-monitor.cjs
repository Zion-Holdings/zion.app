#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

class RealTimePerformanceMonitor {
  constructor() {
    this.ROOT = process.cwd();
    this.REPORTS_DIR = path.join(this.ROOT, 'data', 'reports');
    this.REALTIME_DIR = path.join(this.ROOT, 'data', 'reports', 'real-time');
    this.ensureDir(this.REALTIME_DIR);
    
    this.metrics = {
      linkHealth: {
        total: 0,
        healthy: 0,
        broken: 0,
        score: 0,
        trend: 'stable'
      },
      performance: {
        responseTime: 0,
        throughput: 0,
        errorRate: 0,
        uptime: 100
      },
      system: {
        memoryUsage: 0,
        cpuUsage: 0,
        activeConnections: 0,
        lastUpdate: new Date().toISOString()
      }
    };
    
    this.alerts = [];
    this.history = [];
    this.isMonitoring = false;
    this.monitoringInterval = null;
    this.updateInterval = 5000; // 5 seconds
  }

  ensureDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  }

  async startRealTimeMonitoring() {
    if (this.isMonitoring) {
      console.log('⚠️  Real-time monitoring is already running');
      return;
    }

    console.log('🚀 Starting Real-time Performance Monitor...');
    
    try {
      this.isMonitoring = true;
      
      // Initial metrics collection
      await this.collectMetrics();
      
      // Start continuous monitoring
      this.startContinuousMonitoring();
      
      // Start WebSocket-like updates (file-based for simplicity)
      this.startRealTimeUpdates();
      
      console.log('✅ Real-time monitoring started successfully');
      console.log(`📊 Update interval: ${this.updateInterval / 1000} seconds`);
      
    } catch (error) {
      console.error('❌ Error starting real-time monitoring:', error.message);
      this.isMonitoring = false;
      throw error;
    }
  }

  async collectMetrics() {
    try {
      // Collect link health metrics
      await this.collectLinkHealthMetrics();
      
      // Collect performance metrics
      await this.collectPerformanceMetrics();
      
      // Collect system metrics
      await this.collectSystemMetrics();
      
      // Calculate trends
      this.calculateTrends();
      
      // Check for alerts
      await this.checkAlerts();
      
      // Save current metrics
      await this.saveMetrics();
      
      // Update timestamp
      this.metrics.system.lastUpdate = new Date().toISOString();
      
    } catch (error) {
      console.error('❌ Error collecting metrics:', error.message);
    }
  }

  async collectLinkHealthMetrics() {
    try {
      const healthPath = path.join(this.REPORTS_DIR, 'link-health', 'latest.json');
      if (fs.existsSync(healthPath)) {
        const healthData = JSON.parse(fs.readFileSync(healthPath, 'utf8'));
        
        this.metrics.linkHealth.total = healthData.summary.totalLinks;
        this.metrics.linkHealth.healthy = healthData.summary.healthyLinks;
        this.metrics.linkHealth.broken = healthData.summary.brokenLinks;
        this.metrics.linkHealth.score = (healthData.summary.healthyLinks / healthData.summary.totalLinks) * 100;
      }
    } catch (error) {
      console.warn('Warning: Could not collect link health metrics:', error.message);
    }
  }

  async collectPerformanceMetrics() {
    try {
      // Calculate average response time from recent reports
      const healthDir = path.join(this.REPORTS_DIR, 'link-health');
      if (fs.existsSync(healthDir)) {
        const files = fs.readdirSync(healthDir)
          .filter(f => f.startsWith('link-health-report-'))
          .sort()
          .slice(-5); // Last 5 reports
        
        let totalResponseTime = 0;
        let totalLinks = 0;
        
        for (const file of files) {
          const data = JSON.parse(fs.readFileSync(path.join(healthDir, file), 'utf8'));
          
          for (const [url, linkData] of data.allLinks) {
            if (linkData.responseTime) {
              totalResponseTime += linkData.responseTime;
              totalLinks++;
            }
          }
        }
        
        this.metrics.performance.responseTime = totalLinks > 0 ? totalResponseTime / totalLinks : 0;
        this.metrics.performance.throughput = this.calculateThroughput();
        this.metrics.performance.errorRate = this.calculateErrorRate();
      }
    } catch (error) {
      console.warn('Warning: Could not collect performance metrics:', error.message);
    }
  }

  async collectSystemMetrics() {
    try {
      // Simulate system metrics (in a real environment, you'd use actual system calls)
      this.metrics.system.memoryUsage = Math.random() * 100; // Simulated memory usage
      this.metrics.system.cpuUsage = Math.random() * 100; // Simulated CPU usage
      this.metrics.system.activeConnections = Math.floor(Math.random() * 100); // Simulated connections
      
      // Calculate uptime (simplified)
      this.metrics.system.uptime = this.calculateUptime();
      
    } catch (error) {
      console.warn('Warning: Could not collect system metrics:', error.message);
    }
  }

  calculateThroughput() {
    // Calculate links processed per minute
    const recentReports = this.history.slice(-10);
    if (recentReports.length < 2) return 0;
    
    const timeSpan = (new Date(recentReports[recentReports.length - 1].timestamp) - 
                     new Date(recentReports[0].timestamp)) / (1000 * 60); // minutes
    
    const totalLinks = recentReports.reduce((sum, report) => sum + report.metrics.linkHealth.total, 0);
    return timeSpan > 0 ? totalLinks / timeSpan : 0;
  }

  calculateErrorRate() {
    // Calculate error rate percentage
    if (this.metrics.linkHealth.total === 0) return 0;
    return (this.metrics.linkHealth.broken / this.metrics.linkHealth.total) * 100;
  }

  calculateUptime() {
    // Simplified uptime calculation
    const startTime = new Date(this.history[0]?.timestamp || new Date());
    const currentTime = new Date();
    const uptimeMs = currentTime - startTime;
    const uptimeHours = uptimeMs / (1000 * 60 * 60);
    
    // Simulate high uptime
    return Math.max(95, 100 - (uptimeHours * 0.1));
  }

  calculateTrends() {
    try {
      if (this.history.length < 2) return;
      
      const current = this.metrics.linkHealth.score;
      const previous = this.history[this.history.length - 1].metrics.linkHealth.score;
      
      if (current > previous + 2) {
        this.metrics.linkHealth.trend = 'improving';
      } else if (current < previous - 2) {
        this.metrics.linkHealth.trend = 'declining';
      } else {
        this.metrics.linkHealth.trend = 'stable';
      }
      
    } catch (error) {
      console.warn('Warning: Could not calculate trends:', error.message);
    }
  }

  async checkAlerts() {
    const newAlerts = [];
    
    try {
      // Check link health alerts
      if (this.metrics.linkHealth.score < 90) {
        newAlerts.push({
          id: `health-${Date.now()}`,
          type: 'warning',
          category: 'link-health',
          message: `Link health score is below 90%: ${this.metrics.linkHealth.score.toFixed(1)}%`,
          timestamp: new Date().toISOString(),
          severity: this.metrics.linkHealth.score < 80 ? 'high' : 'medium'
        });
      }
      
      // Check performance alerts
      if (this.metrics.performance.errorRate > 10) {
        newAlerts.push({
          id: `performance-${Date.now()}`,
          type: 'error',
          category: 'performance',
          message: `Error rate is above 10%: ${this.metrics.performance.errorRate.toFixed(1)}%`,
          timestamp: new Date().toISOString(),
          severity: 'high'
        });
      }
      
      // Check system alerts
      if (this.metrics.system.memoryUsage > 80) {
        newAlerts.push({
          id: `system-${Date.now()}`,
          type: 'warning',
          category: 'system',
          message: `Memory usage is high: ${this.metrics.system.memoryUsage.toFixed(1)}%`,
          timestamp: new Date().toISOString(),
          severity: 'medium'
        });
      }
      
      // Add new alerts
      this.alerts.push(...newAlerts);
      
      // Keep only recent alerts (last 100)
      if (this.alerts.length > 100) {
        this.alerts = this.alerts.slice(-100);
      }
      
      // Log new alerts
      if (newAlerts.length > 0) {
        console.log(`🚨 Generated ${newAlerts.length} new alerts`);
        newAlerts.forEach(alert => {
          console.log(`  [${alert.severity.toUpperCase()}] ${alert.message}`);
        });
      }
      
    } catch (error) {
      console.warn('Warning: Could not check alerts:', error.message);
    }
  }

  async saveMetrics() {
    try {
      // Save current metrics
      const metricsData = {
        timestamp: new Date().toISOString(),
        metrics: this.metrics,
        alerts: this.alerts.slice(-20) // Last 20 alerts
      };
      
      const filename = `real-time-metrics-${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
      const filepath = path.join(this.REALTIME_DIR, filename);
      
      fs.writeFileSync(filepath, JSON.stringify(metricsData, null, 2));
      fs.writeFileSync(path.join(this.REALTIME_DIR, 'latest.json'), JSON.stringify(metricsData, null, 2));
      
      // Add to history
      this.history.push({
        timestamp: new Date().toISOString(),
        metrics: JSON.parse(JSON.stringify(this.metrics)) // Deep copy
      });
      
      // Keep only recent history (last 100 entries)
      if (this.history.length > 100) {
        this.history = this.history.slice(-100);
      }
      
    } catch (error) {
      console.error('Error saving metrics:', error.message);
    }
  }

  startContinuousMonitoring() {
    this.monitoringInterval = setInterval(async () => {
      try {
        await this.collectMetrics();
      } catch (error) {
        console.error('❌ Error in continuous monitoring:', error.message);
      }
    }, this.updateInterval);
  }

  startRealTimeUpdates() {
    // Create a status file that external systems can monitor
    setInterval(() => {
      try {
        const statusData = {
          status: 'running',
          lastUpdate: this.metrics.system.lastUpdate,
          metrics: this.metrics,
          activeAlerts: this.alerts.filter(a => a.severity === 'high').length
        };
        
        const statusFile = path.join(this.REALTIME_DIR, 'status.json');
        fs.writeFileSync(statusFile, JSON.stringify(statusData, null, 2));
        
      } catch (error) {
        console.warn('Warning: Could not update status file:', error.message);
      }
    }, 1000); // Update status every second
  }

  stopRealTimeMonitoring() {
    if (!this.isMonitoring) {
      console.log('⚠️  Real-time monitoring is not running');
      return;
    }

    console.log('🛑 Stopping Real-time Performance Monitor...');
    
    try {
      this.isMonitoring = false;
      
      if (this.monitoringInterval) {
        clearInterval(this.monitoringInterval);
        this.monitoringInterval = null;
      }
      
      // Save final metrics
      this.saveMetrics();
      
      console.log('✅ Real-time monitoring stopped successfully');
      
    } catch (error) {
      console.error('❌ Error stopping real-time monitoring:', error.message);
    }
  }

  getCurrentMetrics() {
    return {
      timestamp: new Date().toISOString(),
      metrics: this.metrics,
      alerts: this.alerts.slice(-10),
      status: this.isMonitoring ? 'running' : 'stopped'
    };
  }

  generatePerformanceReport() {
    try {
      const report = {
        generatedAt: new Date().toISOString(),
        summary: {
          monitoringStatus: this.isMonitoring ? 'active' : 'inactive',
          totalMetrics: this.history.length,
          activeAlerts: this.alerts.filter(a => a.severity === 'high').length,
          uptime: this.metrics.system.uptime
        },
        currentMetrics: this.metrics,
        recentAlerts: this.alerts.slice(-20),
        performanceTrends: this.analyzePerformanceTrends(),
        recommendations: this.generatePerformanceRecommendations()
      };
      
      return report;
      
    } catch (error) {
      console.error('Error generating performance report:', error.message);
      return null;
    }
  }

  analyzePerformanceTrends() {
    const trends = {
      linkHealth: 'stable',
      performance: 'stable',
      system: 'stable'
    };
    
    try {
      if (this.history.length < 3) return trends;
      
      const recent = this.history.slice(-3);
      
      // Analyze link health trend
      const healthScores = recent.map(h => h.metrics.linkHealth.score);
      if (healthScores[2] > healthScores[0] + 5) trends.linkHealth = 'improving';
      else if (healthScores[2] < healthScores[0] - 5) trends.linkHealth = 'declining';
      
      // Analyze performance trend
      const errorRates = recent.map(h => h.metrics.performance.errorRate);
      if (errorRates[2] < errorRates[0] - 2) trends.performance = 'improving';
      else if (errorRates[2] > errorRates[0] + 2) trends.performance = 'declining';
      
      // Analyze system trend
      const memoryUsage = recent.map(h => h.metrics.system.memoryUsage);
      if (memoryUsage[2] < memoryUsage[0] - 5) trends.system = 'improving';
      else if (memoryUsage[2] > memoryUsage[0] + 5) trends.system = 'declining';
      
    } catch (error) {
      console.warn('Warning: Could not analyze performance trends:', error.message);
    }
    
    return trends;
  }

  generatePerformanceRecommendations() {
    const recommendations = [];
    
    try {
      // Link health recommendations
      if (this.metrics.linkHealth.score < 90) {
        recommendations.push({
          priority: 'high',
          action: 'Investigate link health issues',
          description: `Current health score: ${this.metrics.linkHealth.score.toFixed(1)}%`,
          effort: 'medium'
        });
      }
      
      // Performance recommendations
      if (this.metrics.performance.errorRate > 5) {
        recommendations.push({
          priority: 'medium',
          action: 'Optimize error handling',
          description: `Current error rate: ${this.metrics.performance.errorRate.toFixed(1)}%`,
          effort: 'medium'
        });
      }
      
      // System recommendations
      if (this.metrics.system.memoryUsage > 70) {
        recommendations.push({
          priority: 'low',
          action: 'Monitor memory usage',
          description: `Current memory usage: ${this.metrics.system.memoryUsage.toFixed(1)}%`,
          effort: 'low'
        });
      }
      
      // General recommendations
      if (this.metrics.linkHealth.trend === 'declining') {
        recommendations.push({
          priority: 'high',
          action: 'Address declining link health trend',
          description: 'Link health is decreasing over time',
          effort: 'high'
        });
      }
      
    } catch (error) {
      console.warn('Warning: Could not generate performance recommendations:', error.message);
    }
    
    return recommendations;
  }

  async run() {
    const command = process.argv[2];
    
    try {
      switch (command) {
        case 'start':
          await this.startRealTimeMonitoring();
          // Keep the process running
          process.on('SIGINT', () => {
            console.log('\n🛑 Received SIGINT, shutting down gracefully...');
            this.stopRealTimeMonitoring();
            process.exit(0);
          });
          break;
          
        case 'stop':
          this.stopRealTimeMonitoring();
          break;
          
        case 'status':
          console.log('Real-time Performance Monitor Status:');
          console.log(JSON.stringify(this.getCurrentMetrics(), null, 2));
          break;
          
        case 'report':
          const report = this.generatePerformanceReport();
          if (report) {
            console.log('Performance Report:');
            console.log(JSON.stringify(report, null, 2));
          }
          break;
          
        default:
          console.log('Real-time Performance Monitor');
          console.log('Usage:');
          console.log('  node real-time-performance-monitor.cjs start   - Start monitoring');
          console.log('  node real-time-performance-monitor.cjs stop    - Stop monitoring');
          console.log('  node real-time-performance-monitor.cjs status  - Show current status');
          console.log('  node real-time-performance-monitor.cjs report  - Generate performance report');
          break;
      }
    } catch (error) {
      console.error('❌ Error:', error.message);
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new RealTimePerformanceMonitor();
  monitor.run().catch(console.error);
}

module.exports = RealTimePerformanceMonitor;