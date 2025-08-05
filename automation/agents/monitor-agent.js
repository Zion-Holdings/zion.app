#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class MonitorAgent {
  constructor() {
    
  // Enhanced Learning Capabilities
  constructor() {
    super();
    this.learningData = new Map();
    this.performanceHistory = [];
    this.adaptationRate = 0.1;
    this.intelligenceLevel = 0.8;
  }

  async learnFromExperience(data, outcome) {
    this.learningData.set(Date.now(), { data, outcome });
    this.updatePerformanceHistory(outcome);
    this.adaptBehavior();
    this.improveIntelligence();
  }

  updatePerformanceHistory(outcome) {
    this.performanceHistory.push({
      timestamp: Date.now(),
      outcome: outcome,
      success: outcome.success || false
    });
  }

  adaptBehavior() {
    const recentPerformance = this.performanceHistory
      .slice(-10)
      .filter(p => Date.now() - p.timestamp < 3600000);
    
    const successRate = recentPerformance.filter(p => p.success).length / recentPerformance.length;
    
    if (successRate < 0.7) {
      this.adaptationRate *= 1.1;
    } else if (successRate > 0.9) {
      this.adaptationRate *= 0.95;
    }
  }

  improveIntelligence() {
    const recentSuccess = this.performanceHistory
      .slice(-20)
      .filter(p => p.success).length / 20;
    
    if (recentSuccess > 0.8) {
      this.intelligenceLevel = Math.min(this.intelligenceLevel + 0.01, 1.0);
    }
  }

    this.agentId = process.env.AGENT_ID;
    this.agentType = process.env.AGENT_TYPE;
    this.config = JSON.parse(process.env.AGENT_CONFIG || '{}');
    this.isRunning = false;
    this.monitoringData = new Map();
    this.alerts = [];
    this.performance = {
      checksCompleted: 0,
      alertsGenerated: 0,
      averageResponseTime: 0
    };
  }

  async initialize() {
    console.log(`🏥 Monitor Agent ${this.agentId} initializing...`);
    
    // Set up signal handlers
    process.on('SIGTERM', () => this.shutdown());
    process.on('SIGINT', () => this.shutdown());
    
    this.isRunning = true;
    console.log(`✅ Monitor Agent ${this.agentId} started`);
    
    // Start monitoring loop
    this.startMonitoringLoop();
  }

  async startMonitoringLoop() {
    while (this.isRunning) {
      try {
        // Perform system health checks
        await this.performHealthChecks();
        
        // Check for alerts
        await this.checkForAlerts();
        
        // Generate reports
        await this.generateMonitoringReport();
        
        // Wait before next cycle
        await new Promise(resolve => setTimeout(resolve, 10000)); // 10 seconds
      } catch (error) {
        console.error('Error in monitoring loop:', error.message);
        await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds on error
      }
    }
  }

  async performHealthChecks() {
    console.log(`🔍 Performing health checks...`);
    
    try {
      const startTime = Date.now();
      
      // Simulate various health checks
      const healthChecks = [
        this.checkSystemResources(),
        this.checkAgentHealth(),
        this.checkTaskQueue(),
        this.checkErrorRates(),
        this.checkPerformanceMetrics()
      ];
      
      const results = await Promise.all(healthChecks);
      
      const responseTime = Date.now() - startTime;
      this.performance.checksCompleted++;
      this.performance.averageResponseTime = 
        (this.performance.averageResponseTime * (this.performance.checksCompleted - 1) + responseTime) / 
        this.performance.checksCompleted;
      
      // Store monitoring data
      this.monitoringData.set(Date.now(), {
        checks: results,
        responseTime,
        timestamp: new Date().toISOString()
      });
      
      console.log(`✅ Health checks completed in ${responseTime}ms`);
      
    } catch (error) {
      console.error('Health check error:', error.message);
      this.generateAlert('HEALTH_CHECK_ERROR', error.message);
    }
  }

  async checkSystemResources() {
    // Simulate system resource monitoring
    const resources = {
      cpuUsage: Math.random() * 100,
      memoryUsage: Math.random() * 100,
      diskUsage: Math.random() * 100,
      networkLatency: Math.random() * 100
    };
    
    // Check for resource thresholds
    if (resources.cpuUsage > 80) {
      this.generateAlert('HIGH_CPU_USAGE', `CPU usage at ${resources.cpuUsage.toFixed(1)}%`);
    }
    
    if (resources.memoryUsage > 85) {
      this.generateAlert('HIGH_MEMORY_USAGE', `Memory usage at ${resources.memoryUsage.toFixed(1)}%`);
    }
    
    return { type: 'system_resources', data: resources };
  }

  async checkAgentHealth() {
    // Simulate agent health monitoring
    const agentHealth = {
      totalAgents: Math.floor(Math.random() * 20) + 10,
      healthyAgents: Math.floor(Math.random() * 15) + 8,
      unhealthyAgents: Math.floor(Math.random() * 5),
      agentResponseTime: Math.random() * 1000
    };
    
    const healthPercentage = (agentHealth.healthyAgents / agentHealth.totalAgents) * 100;
    
    if (healthPercentage < 80) {
      this.generateAlert('LOW_AGENT_HEALTH', `Agent health at ${healthPercentage.toFixed(1)}%`);
    }
    
    return { type: 'agent_health', data: agentHealth };
  }

  async checkTaskQueue() {
    // Simulate task queue monitoring
    const queueStatus = {
      pendingTasks: Math.floor(Math.random() * 50),
      completedTasks: Math.floor(Math.random() * 200),
      failedTasks: Math.floor(Math.random() * 10),
      averageWaitTime: Math.random() * 5000
    };
    
    if (queueStatus.pendingTasks > 30) {
      this.generateAlert('HIGH_TASK_QUEUE', `${queueStatus.pendingTasks} pending tasks`);
    }
    
    if (queueStatus.failedTasks > 5) {
      this.generateAlert('HIGH_FAILURE_RATE', `${queueStatus.failedTasks} failed tasks`);
    }
    
    return { type: 'task_queue', data: queueStatus };
  }

  async checkErrorRates() {
    // Simulate error rate monitoring
    const errorMetrics = {
      totalErrors: Math.floor(Math.random() * 20),
      errorRate: Math.random() * 10,
      criticalErrors: Math.floor(Math.random() * 5),
      lastErrorTime: new Date().toISOString()
    };
    
    if (errorMetrics.errorRate > 5) {
      this.generateAlert('HIGH_ERROR_RATE', `Error rate at ${errorMetrics.errorRate.toFixed(1)}%`);
    }
    
    if (errorMetrics.criticalErrors > 0) {
      this.generateAlert('CRITICAL_ERRORS', `${errorMetrics.criticalErrors} critical errors detected`);
    }
    
    return { type: 'error_rates', data: errorMetrics };
  }

  async checkPerformanceMetrics() {
    // Simulate performance monitoring
    const performance = {
      averageResponseTime: Math.random() * 2000,
      throughput: Math.random() * 1000,
      successRate: Math.random() * 100,
      systemEfficiency: Math.random() * 100
    };
    
    if (performance.averageResponseTime > 1500) {
      this.generateAlert('SLOW_RESPONSE_TIME', `Average response time: ${performance.averageResponseTime.toFixed(0)}ms`);
    }
    
    if (performance.successRate < 90) {
      this.generateAlert('LOW_SUCCESS_RATE', `Success rate at ${performance.successRate.toFixed(1)}%`);
    }
    
    return { type: 'performance_metrics', data: performance };
  }

  async checkForAlerts() {
    console.log(`🚨 Checking for alerts...`);
    
    try {
      // Process any pending alerts
      const pendingAlerts = this.alerts.filter(alert => !alert.processed);
      
      for (const alert of pendingAlerts) {
        await this.processAlert(alert);
        alert.processed = true;
      }
      
      // Clean up old alerts
      this.alerts = this.alerts.filter(alert => 
        Date.now() - alert.timestamp < 24 * 60 * 60 * 1000 // Keep for 24 hours
      );
      
    } catch (error) {
      console.error('Alert processing error:', error.message);
    }
  }

  generateAlert(type, message, severity = 'warning') {
    const alert = {
      id: `alert-${Date.now()}`,
      type,
      message,
      severity,
      timestamp: Date.now(),
      processed: false
    };
    
    this.alerts.push(alert);
    this.performance.alertsGenerated++;
    
    console.log(`🚨 Alert generated: ${type} - ${message}`);
  }

  async processAlert(alert) {
    console.log(`📋 Processing alert: ${alert.type}`);
    
    try {
      // Simulate alert processing
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Log alert details
      const alertLog = {
        timestamp: new Date().toISOString(),
        alertId: alert.id,
        type: alert.type,
        message: alert.message,
        severity: alert.severity,
        processed: true
      };
      
      console.log(`✅ Alert processed: ${alert.type}`);
      
    } catch (error) {
      console.error(`❌ Failed to process alert ${alert.id}:`, error.message);
    }
  }

  async generateMonitoringReport() {
    console.log(`📊 Generating monitoring report...`);
    
    try {
      const report = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        performance: this.performance,
        alerts: this.alerts.length,
        monitoringDataPoints: this.monitoringData.size,
        systemStatus: this.calculateSystemStatus()
      };
      
      console.log(`📈 Monitoring report:`, report);
      
    } catch (error) {
      console.error('Report generation error:', error.message);
    }
  }

  calculateSystemStatus() {
    const recentData = Array.from(this.monitoringData.entries())
      .slice(-10) // Last 10 data points
      .map(([timestamp, data]) => data);
    
    if (recentData.length === 0) {
      return 'unknown';
    }
    
    const hasErrors = recentData.some(data => 
      data.checks.some(check => check.type === 'error_rates' && check.data.errorRate > 5)
    );
    
    const hasAlerts = this.alerts.some(alert => !alert.processed);
    
    if (hasErrors || hasAlerts) {
      return 'warning';
    }
    
    return 'healthy';
  }

  async shutdown() {
    console.log(`🛑 Monitor Agent ${this.agentId} shutting down...`);
    this.isRunning = false;
    
    // Save final monitoring data
    const finalReport = {
      agentId: this.agentId,
      agentType: this.agentType,
      performance: this.performance,
      totalAlerts: this.alerts.length,
      monitoringDataPoints: this.monitoringData.size,
      shutdownTime: new Date().toISOString()
    };
    
    console.log(`📊 Final monitoring report:`, finalReport);
    process.exit(0);
  }
}

// Start the agent
const agent = new MonitorAgent();
agent.initialize().catch(error => {
  console.error('Failed to initialize monitor agent:', error);
  process.exit(1);
}); 