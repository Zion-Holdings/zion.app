#!/usr/bin/env node

/**
 * Automation Health Monitor v2.0
 * Advanced monitoring, alerting, and predictive maintenance for automation systems
 */

const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');

class AutomationHealthMonitorV2 extends EventEmitter {
  constructor() {
    super();
    
    this.monitors = new Map();
    this.alerts = [];
    this.metrics = new Map();
    this.healthScores = new Map();
    this.predictiveInsights = [];
    
    this.config = {
      checkInterval: 30000, // 30 seconds
      alertThresholds: {
        cpu: 80,
        memory: 85,
        responseTime: 2000,
        errorRate: 5,
        successRate: 90
      },
      healthWeights: {
        performance: 0.3,
        reliability: 0.25,
        efficiency: 0.2,
        security: 0.15,
        maintainability: 0.1
      }
    };
    
    this.startMonitoring();
  }

  /**
   * Register an automation system for monitoring
   */
  registerAutomation(name, config = {}) {
    const monitor = {
      name,
      config: { ...this.config, ...config },
      status: 'unknown',
      lastCheck: null,
      metrics: {
        cpu: 0,
        memory: 0,
        responseTime: 0,
        errorRate: 0,
        successRate: 100,
        throughput: 0,
        uptime: 0
      },
      history: [],
      alerts: [],
      healthScore: 0
    };
    
    this.monitors.set(name, monitor);
    console.log(`🔍 Registered automation for monitoring: ${name}`);
    
    return monitor;
  }

  /**
   * Start the monitoring system
   */
  startMonitoring() {
    console.log('🚀 Starting Automation Health Monitor v2.0...');
    
    // Start periodic health checks
    this.healthCheckInterval = setInterval(() => {
      this.performHealthChecks();
    }, this.config.checkInterval);
    
    // Start predictive analysis
    this.predictiveInterval = setInterval(() => {
      this.performPredictiveAnalysis();
    }, 300000); // Every 5 minutes
    
    // Start alert processing
    this.alertInterval = setInterval(() => {
      this.processAlerts();
    }, 10000); // Every 10 seconds
    
    console.log('✅ Monitoring system started successfully');
  }

  /**
   * Perform health checks on all registered automations
   */
  async performHealthChecks() {
    const promises = Array.from(this.monitors.keys()).map(name => 
      this.checkAutomationHealth(name)
    );
    
    try {
      await Promise.allSettled(promises);
      this.updateOverallHealth();
      this.emit('healthCheckComplete', this.getOverallHealth());
    } catch (error) {
      console.error('❌ Error during health checks:', error);
      this.emit('healthCheckError', error);
    }
  }

  /**
   * Check health of a specific automation
   */
  async checkAutomationHealth(name) {
    const monitor = this.monitors.get(name);
    if (!monitor) return;
    
    try {
      const startTime = Date.now();
      
      // Simulate health check (replace with actual health check logic)
      const healthData = await this.simulateHealthCheck(name);
      
      // Update metrics
      monitor.metrics = { ...monitor.metrics, ...healthData };
      monitor.lastCheck = new Date();
      
      // Calculate health score
      monitor.healthScore = this.calculateHealthScore(monitor.metrics, monitor.config);
      
      // Update status
      monitor.status = this.determineStatus(monitor.healthScore);
      
      // Store in history
      monitor.history.push({
        timestamp: new Date(),
        metrics: { ...monitor.metrics },
        healthScore: monitor.healthScore,
        status: monitor.status
      });
      
      // Keep only last 100 entries
      if (monitor.history.length > 100) {
        monitor.history = monitor.history.slice(-100);
      }
      
      // Check for alerts
      this.checkForAlerts(name, monitor);
      
      // Emit health update event
      this.emit('automationHealthUpdate', { name, monitor });
      
      console.log(`✅ Health check completed for ${name}: ${monitor.healthScore}/100`);
      
    } catch (error) {
      console.error(`❌ Health check failed for ${name}:`, error);
      monitor.status = 'error';
      monitor.lastError = error.message;
      
      // Create error alert
      this.createAlert(name, 'error', `Health check failed: ${error.message}`);
    }
  }

  /**
   * Simulate health check (replace with actual implementation)
   */
  async simulateHealthCheck(name) {
    // Simulate realistic metrics
    const baseMetrics = {
      cpu: Math.random() * 100,
      memory: Math.random() * 100,
      responseTime: Math.random() * 3000,
      errorRate: Math.random() * 10,
      successRate: 90 + Math.random() * 10,
      throughput: 100 + Math.random() * 900,
      uptime: 3600 + Math.random() * 86400 // 1 hour to 1 day
    };
    
    // Add some variation based on automation type
    if (name.includes('content')) {
      baseMetrics.cpu *= 0.8; // Content automations typically use less CPU
      baseMetrics.memory *= 0.7;
    } else if (name.includes('security')) {
      baseMetrics.cpu *= 1.2; // Security scans can be CPU intensive
      baseMetrics.errorRate *= 0.5; // Lower error rate for security
    }
    
    return baseMetrics;
  }

  /**
   * Calculate health score based on metrics
   */
  calculateHealthScore(metrics, config) {
    let score = 0;
    const weights = config.healthWeights;
    
    // Performance score (CPU, Memory, Response Time)
    const performanceScore = this.calculatePerformanceScore(metrics);
    score += performanceScore * weights.performance;
    
    // Reliability score (Error Rate, Success Rate)
    const reliabilityScore = this.calculateReliabilityScore(metrics);
    score += reliabilityScore * weights.reliability;
    
    // Efficiency score (Throughput, Uptime)
    const efficiencyScore = this.calculateEfficiencyScore(metrics);
    score += efficiencyScore * weights.efficiency;
    
    // Security score (placeholder for security metrics)
    const securityScore = 95; // Assume good security for now
    score += securityScore * weights.security;
    
    // Maintainability score (based on code quality, documentation, etc.)
    const maintainabilityScore = 90; // Assume good maintainability
    score += maintainabilityScore * weights.maintainability;
    
    return Math.round(score);
  }

  /**
   * Calculate performance score
   */
  calculatePerformanceScore(metrics) {
    let score = 100;
    
    // CPU penalty
    if (metrics.cpu > 80) score -= (metrics.cpu - 80) * 2;
    else if (metrics.cpu > 60) score -= (metrics.cpu - 60);
    
    // Memory penalty
    if (metrics.memory > 85) score -= (metrics.memory - 85) * 2;
    else if (metrics.memory > 70) score -= (metrics.memory - 70);
    
    // Response time penalty
    if (metrics.responseTime > 2000) score -= (metrics.responseTime - 2000) / 100;
    
    return Math.max(0, score);
  }

  /**
   * Calculate reliability score
   */
  calculateReliabilityScore(metrics) {
    let score = 100;
    
    // Error rate penalty
    score -= metrics.errorRate * 5;
    
    // Success rate bonus/penalty
    if (metrics.successRate < 90) score -= (90 - metrics.successRate) * 2;
    else if (metrics.successRate > 95) score += (metrics.successRate - 95);
    
    return Math.max(0, Math.min(100, score));
  }

  /**
   * Calculate efficiency score
   */
  calculateEfficiencyScore(metrics) {
    let score = 100;
    
    // Throughput bonus
    if (metrics.throughput > 500) score += 10;
    else if (metrics.throughput < 200) score -= 20;
    
    // Uptime bonus
    if (metrics.uptime > 86400) score += 10; // More than 1 day
    else if (metrics.uptime < 3600) score -= 30; // Less than 1 hour
    
    return Math.max(0, Math.min(100, score));
  }

  /**
   * Determine status based on health score
   */
  determineStatus(healthScore) {
    if (healthScore >= 90) return 'excellent';
    if (healthScore >= 80) return 'good';
    if (healthScore >= 70) return 'fair';
    if (healthScore >= 60) return 'poor';
    return 'critical';
  }

  /**
   * Check for alerts based on metrics
   */
  checkForAlerts(name, monitor) {
    const { metrics, config } = monitor;
    const thresholds = config.alertThresholds;
    
    // CPU alert
    if (metrics.cpu > thresholds.cpu) {
      this.createAlert(name, 'warning', `High CPU usage: ${metrics.cpu.toFixed(1)}%`);
    }
    
    // Memory alert
    if (metrics.memory > thresholds.memory) {
      this.createAlert(name, 'warning', `High memory usage: ${metrics.memory.toFixed(1)}%`);
    }
    
    // Response time alert
    if (metrics.responseTime > thresholds.responseTime) {
      this.createAlert(name, 'warning', `Slow response time: ${metrics.responseTime.toFixed(0)}ms`);
    }
    
    // Error rate alert
    if (metrics.errorRate > thresholds.errorRate) {
      this.createAlert(name, 'error', `High error rate: ${metrics.errorRate.toFixed(2)}%`);
    }
    
    // Success rate alert
    if (metrics.successRate < thresholds.successRate) {
      this.createAlert(name, 'error', `Low success rate: ${metrics.successRate.toFixed(1)}%`);
    }
    
    // Health score alert
    if (monitor.healthScore < 70) {
      this.createAlert(name, 'critical', `Low health score: ${monitor.healthScore}/100`);
    }
  }

  /**
   * Create an alert
   */
  createAlert(automationName, level, message) {
    const alert = {
      id: this.generateAlertId(),
      automationName,
      level,
      message,
      timestamp: new Date(),
      acknowledged: false,
      resolved: false
    };
    
    this.alerts.push(alert);
    
    // Emit alert event
    this.emit('alert', alert);
    
    // Log alert
    const levelEmoji = {
      info: 'ℹ️',
      warning: '⚠️',
      error: '❌',
      critical: '🚨'
    };
    
    console.log(`${levelEmoji[level] || 'ℹ️'} [${level.toUpperCase()}] ${automationName}: ${message}`);
    
    return alert;
  }

  /**
   * Generate unique alert ID
   */
  generateAlertId() {
    return `alert-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Process and manage alerts
   */
  processAlerts() {
    // Auto-resolve old info alerts
    this.alerts = this.alerts.filter(alert => {
      if (alert.level === 'info' && this.isAlertOld(alert, 300000)) { // 5 minutes
        alert.resolved = true;
        return false;
      }
      return true;
    });
    
    // Escalate critical alerts
    this.alerts.forEach(alert => {
      if (alert.level === 'critical' && !alert.acknowledged && this.isAlertOld(alert, 60000)) { // 1 minute
        this.escalateAlert(alert);
      }
    });
  }

  /**
   * Check if alert is old
   */
  isAlertOld(alert, maxAge) {
    return Date.now() - alert.timestamp.getTime() > maxAge;
  }

  /**
   * Escalate critical alert
   */
  escalateAlert(alert) {
    console.log(`🚨 ESCALATING CRITICAL ALERT: ${alert.automationName} - ${alert.message}`);
    
    // Emit escalation event
    this.emit('alertEscalated', alert);
    
    // Here you could implement actual escalation logic:
    // - Send SMS/email notifications
    // - Create incident tickets
    // - Trigger automated recovery procedures
    // - Page on-call engineers
  }

  /**
   * Perform predictive analysis
   */
  performPredictiveAnalysis() {
    this.predictiveInsights = [];
    
    this.monitors.forEach((monitor, name) => {
      if (monitor.history.length < 10) return; // Need enough data
      
      const insights = this.analyzeTrends(name, monitor);
      this.predictiveInsights.push(...insights);
    });
    
    // Emit predictive insights
    this.emit('predictiveInsights', this.predictiveInsights);
    
    console.log(`🔮 Generated ${this.predictiveInsights.length} predictive insights`);
  }

  /**
   * Analyze trends for predictive insights
   */
  analyzeTrends(name, monitor) {
    const insights = [];
    const history = monitor.history.slice(-20); // Last 20 entries
    
    if (history.length < 5) return insights;
    
    // Analyze CPU trend
    const cpuTrend = this.calculateTrend(history.map(h => h.metrics.cpu));
    if (cpuTrend > 0.5) {
      insights.push({
        type: 'trend',
        automation: name,
        metric: 'CPU',
        trend: 'increasing',
        severity: 'medium',
        message: `CPU usage is trending upward. Consider optimization or scaling.`
      });
    }
    
    // Analyze memory trend
    const memoryTrend = this.calculateTrend(history.map(h => h.metrics.memory));
    if (memoryTrend > 0.3) {
      insights.push({
        type: 'trend',
        automation: name,
        metric: 'Memory',
        trend: 'increasing',
        severity: 'medium',
        message: `Memory usage is trending upward. Monitor for potential memory leaks.`
      });
    }
    
    // Analyze health score trend
    const healthTrend = this.calculateTrend(history.map(h => h.healthScore));
    if (healthTrend < -0.5) {
      insights.push({
        type: 'trend',
        automation: name,
        metric: 'Health Score',
        trend: 'decreasing',
        severity: 'high',
        message: `Health score is declining. Investigate root causes immediately.`
      });
    }
    
    // Predict potential failures
    if (monitor.healthScore < 75 && healthTrend < -1) {
      insights.push({
        type: 'prediction',
        automation: name,
        severity: 'critical',
        message: `High risk of failure within the next hour. Take preventive action.`,
        confidence: 85
      });
    }
    
    return insights;
  }

  /**
   * Calculate trend slope
   */
  calculateTrend(values) {
    if (values.length < 2) return 0;
    
    const n = values.length;
    const sumX = (n * (n - 1)) / 2;
    const sumY = values.reduce((sum, val, i) => sum + val, 0);
    const sumXY = values.reduce((sum, val, i) => sum + (i * val), 0);
    const sumX2 = values.reduce((sum, val, i) => sum + (i * i), 0);
    
    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    return slope;
  }

  /**
   * Update overall health metrics
   */
  updateOverallHealth() {
    const automations = Array.from(this.monitors.values());
    
    if (automations.length === 0) return;
    
    const overallHealth = {
      totalAutomations: automations.length,
      averageHealthScore: automations.reduce((sum, a) => sum + a.healthScore, 0) / automations.length,
      statusDistribution: {
        excellent: automations.filter(a => a.status === 'excellent').length,
        good: automations.filter(a => a.status === 'good').length,
        fair: automations.filter(a => a.status === 'fair').length,
        poor: automations.filter(a => a.status === 'poor').length,
        critical: automations.filter(a => a.status === 'critical').length
      },
      activeAlerts: this.alerts.filter(a => !a.resolved).length,
      lastUpdated: new Date()
    };
    
    this.overallHealth = overallHealth;
    this.emit('overallHealthUpdate', overallHealth);
  }

  /**
   * Get overall health status
   */
  getOverallHealth() {
    return this.overallHealth || {
      totalAutomations: 0,
      averageHealthScore: 0,
      statusDistribution: {},
      activeAlerts: 0,
      lastUpdated: new Date()
    };
  }

  /**
   * Get detailed health report
   */
  getHealthReport() {
    return {
      overall: this.getOverallHealth(),
      automations: Array.from(this.monitors.entries()).map(([name, monitor]) => ({
        name,
        status: monitor.status,
        healthScore: monitor.healthScore,
        lastCheck: monitor.lastCheck,
        metrics: monitor.metrics,
        alerts: monitor.alerts.filter(a => !a.resolved)
      })),
      alerts: this.alerts.filter(a => !a.resolved),
      insights: this.predictiveInsights,
      timestamp: new Date()
    };
  }

  /**
   * Acknowledge an alert
   */
  acknowledgeAlert(alertId) {
    const alert = this.alerts.find(a => a.id === alertId);
    if (alert) {
      alert.acknowledged = true;
      alert.acknowledgedAt = new Date();
      this.emit('alertAcknowledged', alert);
      return true;
    }
    return false;
  }

  /**
   * Resolve an alert
   */
  resolveAlert(alertId) {
    const alert = this.alerts.find(a => a.id === alertId);
    if (alert) {
      alert.resolved = true;
      alert.resolvedAt = new Date();
      this.emit('alertResolved', alert);
      return true;
    }
    return false;
  }

  /**
   * Stop monitoring
   */
  stop() {
    console.log('🛑 Stopping Automation Health Monitor...');
    
    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval);
    }
    
    if (this.predictiveInterval) {
      clearInterval(this.predictiveInterval);
    }
    
    if (this.alertInterval) {
      clearInterval(this.alertInterval);
    }
    
    console.log('✅ Monitoring system stopped');
  }

  /**
   * Export health data
   */
  exportHealthData(format = 'json') {
    const data = this.getHealthReport();
    
    if (format === 'json') {
      return JSON.stringify(data, null, 2);
    } else if (format === 'csv') {
      return this.convertToCSV(data);
    }
    
    return data;
  }

  /**
   * Convert data to CSV format
   */
  convertToCSV(data) {
    // Implementation for CSV conversion
    // This is a simplified version
    let csv = 'Automation,Status,Health Score,Last Check,CPU,Memory,Response Time\n';
    
    data.automations.forEach(auto => {
      csv += `${auto.name},${auto.status},${auto.healthScore},${auto.lastCheck},${auto.metrics.cpu},${auto.metrics.memory},${auto.metrics.responseTime}\n`;
    });
    
    return csv;
  }
}

// CLI interface
if (require.main === module) {
  const monitor = new AutomationHealthMonitorV2();
  
  const command = process.argv[2];
  
  if (!command) {
    console.log(`
Usage: node automation-health-monitor-v2.cjs <command>

Commands:
  status      Show current health status
  report      Generate detailed health report
  export      Export health data
  demo        Run demo with sample automations
  help        Show this help message

Examples:
  node automation-health-monitor-v2.cjs status
  node automation-health-monitor-v2.cjs report
  node automation-health-monitor-v2.cjs demo
    `);
    process.exit(1);
  }
  
  (async () => {
    try {
      switch (command) {
        case 'status':
          console.log('\n📊 Current Health Status:');
          console.log(JSON.stringify(monitor.getOverallHealth(), null, 2));
          break;
          
        case 'report':
          console.log('\n📋 Detailed Health Report:');
          console.log(JSON.stringify(monitor.getHealthReport(), null, 2));
          break;
          
        case 'export':
          const data = monitor.exportHealthData('json');
          const filename = `health-report-${Date.now()}.json`;
          fs.writeFileSync(filename, data);
          console.log(`📁 Health report exported to: ${filename}`);
          break;
          
        case 'demo':
          console.log('\n🎭 Running demo with sample automations...');
          
          // Register sample automations
          monitor.registerAutomation('Content Generator', { checkInterval: 15000 });
          monitor.registerAutomation('SEO Optimizer', { checkInterval: 20000 });
          monitor.registerAutomation('Security Scanner', { checkInterval: 25000 });
          
          // Wait for some data to accumulate
          setTimeout(() => {
            console.log('\n📊 Demo Results:');
            console.log(JSON.stringify(monitor.getHealthReport(), null, 2));
            process.exit(0);
          }, 60000); // Wait 1 minute
          break;
          
        default:
          console.log(`Unknown command: ${command}`);
          process.exit(1);
      }
    } catch (error) {
      console.error('Error:', error.message);
      process.exit(1);
    }
  })();
}

module.exports = AutomationHealthMonitorV2;