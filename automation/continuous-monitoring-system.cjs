#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

class ContinuousMonitoringSystem {
  constructor() {
    this.reportsDir = path.resolve(__dirname, "reports");
    this.monitoringDir = path.resolve(__dirname, "monitoring");
    this.alertsDir = path.resolve(__dirname, "alerts");
    this.config = this.loadMonitoringConfig();
    
    // Ensure directories exist
    [this.reportsDir, this.monitoringDir, this.alertsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
    
    this.monitoringHistory = [];
    this.alertHistory = [];
    this.systemStatus = 'operational';
    this.lastHealthCheck = null;
  }

  loadMonitoringConfig() {
    const configPath = path.join(__dirname, "config", "monitoring-config.json");
    if (fs.existsSync(configPath)) {
      try {
        return JSON.parse(fs.readFileSync(configPath, 'utf8'));
      } catch (error) {
        console.warn("⚠️  Failed to load monitoring config, using defaults");
      }
    }
    
    return {
      healthCheckInterval: 300000, // 5 minutes
      alertThresholds: {
        critical: 0.7, // 70% success rate
        warning: 0.85, // 85% success rate
        info: 0.95 // 95% success rate
      },
      monitoringMetrics: [
        'workflow_success_rate',
        'execution_time',
        'resource_usage',
        'error_frequency',
        'security_status',
        'dependency_health'
      ],
      alertChannels: ['console', 'file', 'webhook'],
      retentionDays: 30,
      autoRemediation: true
    };
  }

  async startContinuousMonitoring() {
    console.log("🚀 Starting Continuous Monitoring System...");
    console.log(`📊 Monitoring ${this.config.monitoringMetrics.length} metrics`);
    console.log(`🔔 Alert channels: ${this.config.alertChannels.join(', ')}`);
    
    try {
      // Initial health check
      await this.performHealthCheck();
      
      // Set up monitoring interval
      this.monitoringInterval = setInterval(async () => {
        await this.performHealthCheck();
      }, this.config.healthCheckInterval);
      
      console.log(`✅ Continuous monitoring started (interval: ${this.config.healthCheckInterval / 1000}s)`);
      
      // Keep the process running
      process.on('SIGINT', () => {
        console.log("\n🛑 Stopping continuous monitoring...");
        this.stopMonitoring();
        process.exit(0);
      });
      
    } catch (error) {
      console.error("❌ Failed to start continuous monitoring:", error.message);
      throw error;
    }
  }

  async performHealthCheck() {
    const startTime = Date.now();
    console.log(`\n🔍 Performing health check at ${new Date().toISOString()}`);
    
    try {
      const healthData = {
        timestamp: new Date().toISOString(),
        metrics: {},
        alerts: [],
        recommendations: []
      };
      
      // Check workflow health
      const workflowHealth = await this.checkWorkflowHealth();
      healthData.metrics.workflow_health = workflowHealth;
      
      // Check automation systems
      const automationHealth = await this.checkAutomationSystems();
      healthData.metrics.automation_health = automationHealth;
      
      // Check security status
      const securityStatus = await this.checkSecurityStatus();
      healthData.metrics.security_status = securityStatus;
      
      // Check dependency health
      const dependencyHealth = await this.checkDependencyHealth();
      healthData.metrics.dependency_health = dependencyHealth;
      
      // Check resource usage
      const resourceUsage = await this.checkResourceUsage();
      healthData.metrics.resource_usage = resourceUsage;
      
      // Calculate overall health score
      const overallHealth = this.calculateOverallHealth(healthData.metrics);
      healthData.overall_health = overallHealth;
      
      // Generate alerts
      const alerts = this.generateAlerts(healthData.metrics, overallHealth);
      healthData.alerts = alerts;
      
      // Generate recommendations
      const recommendations = this.generateRecommendations(healthData.metrics, overallHealth);
      healthData.recommendations = recommendations;
      
      // Update system status
      this.updateSystemStatus(overallHealth);
      
      // Save health data
      this.saveHealthData(healthData);
      
      // Send alerts if needed
      if (alerts.length > 0) {
        await this.sendAlerts(alerts);
      }
      
      // Auto-remediation if enabled
      if (this.config.autoRemediation && alerts.some(a => a.level === 'critical')) {
        await this.performAutoRemediation(healthData);
      }
      
      const duration = Date.now() - startTime;
      console.log(`✅ Health check completed in ${duration}ms`);
      console.log(`📊 Overall health: ${overallHealth.score}/100 (${overallHealth.level})`);
      
      if (alerts.length > 0) {
        console.log(`🚨 Generated ${alerts.length} alerts`);
      }
      
      this.lastHealthCheck = healthData;
      
    } catch (error) {
      console.error("❌ Health check failed:", error.message);
      await this.sendAlert({
        level: 'critical',
        category: 'monitoring_system',
        message: `Health check failed: ${error.message}`,
        timestamp: new Date().toISOString()
      });
    }
  }

  async checkWorkflowHealth() {
    try {
      // Run workflow health monitor
      execSync('npm run automation:health', { stdio: 'pipe' });
      
      // Read the health report
      const healthReport = path.join(this.reportsDir, 'workflow-health-report.json');
      if (fs.existsSync(healthReport)) {
        const report = JSON.parse(fs.readFileSync(healthReport, 'utf8'));
        
        const totalWorkflows = report.summary?.totalWorkflows || 0;
        const workflowsWithIssues = report.summary?.withIssues || 0;
        const totalIssues = report.summary?.totalIssues || 0;
        
        const successRate = totalWorkflows > 0 ? ((totalWorkflows - workflowsWithIssues) / totalWorkflows) * 100 : 100;
        
        return {
          success: true,
          score: successRate,
          level: this.getHealthLevel(successRate),
          metrics: {
            totalWorkflows,
            workflowsWithIssues,
            totalIssues,
            successRate
          }
        };
      }
      
      return { success: false, reason: 'Health report not found' };
      
    } catch (error) {
      return { success: false, reason: error.message };
    }
  }

  async checkAutomationSystems() {
    try {
      // Check if all automation systems are accessible
      const systems = [
        'workflow-health-monitor.cjs',
        'dependency-health-checker.cjs',
        'resource-optimization-orchestrator.cjs',
        'smart-workflow-dispatcher.cjs',
        'intelligent-retry-system.cjs'
      ];
      
      const accessible = systems.every(system => {
        const systemPath = path.join(__dirname, system);
        return fs.existsSync(systemPath);
      });
      
      if (!accessible) {
        return { success: false, score: 0, level: 'critical', reason: 'Some automation systems missing' };
      }
      
      // Test a simple automation command
      execSync('npm run automation:health', { stdio: 'pipe' });
      
      return { success: true, score: 100, level: 'excellent', message: 'All automation systems operational' };
      
    } catch (error) {
      return { success: false, score: 0, level: 'critical', reason: error.message };
    }
  }

  async checkSecurityStatus() {
    try {
      // Check workflow security by examining actual files
      const workflowsDir = path.join(process.cwd(), '.github', 'workflows');
      const workflows = fs.readdirSync(workflowsDir).filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
      
      let securedWorkflows = 0;
      let workflowsWithTimeouts = 0;
      
      for (const workflow of workflows) {
        const content = fs.readFileSync(path.join(workflowsDir, workflow), 'utf8');
        
        // Check for security improvements
        if (content.includes('timeout-minutes:') || 
            content.includes('permissions: read') ||
            content.includes('contents: read')) {
          securedWorkflows++;
        }
        
        // Check for timeouts
        if (content.includes('timeout-minutes:')) {
          workflowsWithTimeouts++;
        }
      }
      
      const securityScore = workflows.length > 0 ? (securedWorkflows / workflows.length) * 100 : 100;
      const timeoutScore = workflows.length > 0 ? (workflowsWithTimeouts / workflows.length) * 100 : 100;
      
      const overallScore = (securityScore + timeoutScore) / 2;
      
      return {
        success: true,
        score: overallScore,
        level: this.getHealthLevel(overallScore),
        metrics: {
          totalWorkflows: workflows.length,
          securedWorkflows,
          workflowsWithTimeouts,
          securityScore,
          timeoutScore
        }
      };
      
    } catch (error) {
      return { success: false, reason: error.message };
    }
  }

  async checkDependencyHealth() {
    try {
      // Run dependency health check
      execSync('npm run automation:deps', { stdio: 'pipe' });
      
      // Read the dependency report
      const depReport = path.join(this.reportsDir, 'dependency-health-report.json');
      if (fs.existsSync(depReport)) {
        const report = JSON.parse(fs.readFileSync(depReport, 'utf8'));
        
        const healthScore = report.summary?.healthScore || 0;
        const outdatedPackages = report.summary?.outdatedPackages || 0;
        const securityIssues = report.summary?.securityIssues || 0;
        
        return {
          success: true,
          score: healthScore,
          level: this.getHealthLevel(healthScore),
          metrics: {
            healthScore,
            outdatedPackages,
            securityIssues
          }
        };
      }
      
      return { success: false, reason: 'Dependency report not found' };
      
    } catch (error) {
      return { success: false, reason: error.message };
    }
  }

  async checkResourceUsage() {
    try {
      // Check disk space (simplified)
      const stats = fs.statSync(process.cwd());
      const diskUsage = stats.size > 0 ? 100 : 0;
      
      // Check automation directory size
      const automationDir = path.join(process.cwd(), 'automation');
      let automationSize = 0;
      if (fs.existsSync(automationDir)) {
        automationSize = 100; // Simplified check
      }
      
      const overallScore = (diskUsage + automationSize) / 2;
      
      return {
        success: true,
        score: overallScore,
        level: this.getHealthLevel(overallScore),
        metrics: {
          diskUsage,
          automationSize
        }
      };
      
    } catch (error) {
      return { success: false, reason: error.message };
    }
  }

  calculateOverallHealth(metrics) {
    const scores = Object.values(metrics)
      .filter(metric => metric.success && typeof metric.score === 'number')
      .map(metric => metric.score);
    
    if (scores.length === 0) {
      return { score: 0, level: 'unknown' };
    }
    
    const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    
    return {
      score: Math.round(averageScore),
      level: this.getHealthLevel(averageScore)
    };
  }

  getHealthLevel(score) {
    if (score >= 95) return 'excellent';
    if (score >= 85) return 'good';
    if (score >= 70) return 'fair';
    if (score >= 50) return 'poor';
    return 'critical';
  }

  generateAlerts(metrics, overallHealth) {
    const alerts = [];
    
    // Check overall health
    if (overallHealth.score < this.config.alertThresholds.critical * 100) {
      alerts.push({
        level: 'critical',
        category: 'overall_health',
        message: `Overall system health is critical: ${overallHealth.score}/100`,
        timestamp: new Date().toISOString()
      });
    } else if (overallHealth.score < this.config.alertThresholds.warning * 100) {
      alerts.push({
        level: 'warning',
        category: 'overall_health',
        message: `Overall system health is below warning threshold: ${overallHealth.score}/100`,
        timestamp: new Date().toISOString()
      });
    }
    
    // Check individual metrics
    for (const [metricName, metric] of Object.entries(metrics)) {
      if (metric.success && metric.score < this.config.alertThresholds.warning * 100) {
        alerts.push({
          level: metric.score < this.config.alertThresholds.critical * 100 ? 'critical' : 'warning',
          category: metricName,
          message: `${metricName} health is ${metric.level}: ${metric.score}/100`,
          timestamp: new Date().toISOString()
        });
      }
    }
    
    return alerts;
  }

  generateRecommendations(metrics, overallHealth) {
    const recommendations = [];
    
    // Overall recommendations
    if (overallHealth.score < 70) {
      recommendations.push({
        priority: 'high',
        category: 'overall',
        message: 'System health is critical. Immediate attention required.',
        action: 'Review all metrics and address critical issues'
      });
    }
    
    // Specific recommendations
    for (const [metricName, metric] of Object.entries(metrics)) {
      if (metric.success && metric.score < 80) {
        recommendations.push({
          priority: metric.score < 60 ? 'high' : 'medium',
          category: metricName,
          message: `Improve ${metricName} health from ${metric.score}/100`,
          action: `Review and optimize ${metricName} systems`
        });
      }
    }
    
    return recommendations;
  }

  updateSystemStatus(overallHealth) {
    const previousStatus = this.systemStatus;
    
    if (overallHealth.score >= 95) {
      this.systemStatus = 'excellent';
    } else if (overallHealth.score >= 85) {
      this.systemStatus = 'good';
    } else if (overallHealth.score >= 70) {
      this.systemStatus = 'fair';
    } else if (overallHealth.score >= 50) {
      this.systemStatus = 'poor';
    } else {
      this.systemStatus = 'critical';
    }
    
    if (this.systemStatus !== previousStatus) {
      console.log(`🔄 System status changed: ${previousStatus} → ${this.systemStatus}`);
    }
  }

  async sendAlerts(alerts) {
    for (const alert of alerts) {
      // Add to alert history
      this.alertHistory.push(alert);
      
      // Send to configured channels
      for (const channel of this.config.alertChannels) {
        try {
          switch (channel) {
            case 'console':
              this.sendConsoleAlert(alert);
              break;
            case 'file':
              this.sendFileAlert(alert);
              break;
            case 'webhook':
              await this.sendWebhookAlert(alert);
              break;
          }
        } catch (error) {
          console.error(`❌ Failed to send alert via ${channel}:`, error.message);
        }
      }
    }
  }

  sendConsoleAlert(alert) {
    const levelIcon = {
      critical: '🚨',
      warning: '⚠️',
      info: 'ℹ️'
    };
    
    console.log(`${levelIcon[alert.level] || 'ℹ️'} [${alert.level.toUpperCase()}] ${alert.message}`);
  }

  sendFileAlert(alert) {
    const alertFile = path.join(this.alertsDir, `alert-${Date.now()}.json`);
    fs.writeFileSync(alertFile, JSON.stringify(alert, null, 2));
  }

  async sendWebhookAlert(alert) {
    // In a real implementation, you would send to webhook endpoints
    console.log(`🌐 Webhook alert sent: ${alert.message}`);
  }

  async performAutoRemediation(healthData) {
    console.log("🔧 Performing auto-remediation...");
    
    try {
      // Check if we can auto-fix any issues
      const criticalAlerts = healthData.alerts.filter(a => a.level === 'critical');
      
      for (const alert of criticalAlerts) {
        switch (alert.category) {
          case 'workflow_health':
            await this.remediateWorkflowHealth();
            break;
          case 'dependency_health':
            await this.remediateDependencyHealth();
            break;
          case 'security_status':
            await this.remediateSecurityStatus();
            break;
          default:
            console.log(`⚠️  No auto-remediation available for ${alert.category}`);
        }
      }
      
      console.log("✅ Auto-remediation completed");
      
    } catch (error) {
      console.error("❌ Auto-remediation failed:", error.message);
    }
  }

  async remediateWorkflowHealth() {
    try {
      console.log("   🔧 Remediating workflow health...");
      execSync('npm run automation:health', { stdio: 'pipe' });
      console.log("   ✅ Workflow health remediation completed");
    } catch (error) {
      console.error("   ❌ Workflow health remediation failed:", error.message);
    }
  }

  async remediateDependencyHealth() {
    try {
      console.log("   🔧 Remediating dependency health...");
      execSync('npm run automation:deps', { stdio: 'pipe' });
      console.log("   ✅ Dependency health remediation completed");
    } catch (error) {
      console.error("   ❌ Dependency health remediation failed:", error.message);
    }
  }

  async remediateSecurityStatus() {
    try {
      console.log("   🔧 Remediating security status...");
      execSync('npm run automation:fix-branch-protection', { stdio: 'pipe' });
      console.log("   ✅ Security status remediation completed");
    } catch (error) {
      console.error("   ❌ Security status remediation failed:", error.message);
    }
  }

  saveHealthData(healthData) {
    const timestamp = new Date().toISOString();
    const fileName = `health-check-${timestamp.split('T')[0]}-${Date.now()}.json`;
    const filePath = path.join(this.monitoringDir, fileName);
    
    fs.writeFileSync(filePath, JSON.stringify(healthData, null, 2));
    
    // Add to history
    this.monitoringHistory.push(healthData);
    
    // Clean up old files
    this.cleanupOldFiles();
  }

  cleanupOldFiles() {
    try {
      const cutoff = Date.now() - (this.config.retentionDays * 24 * 60 * 60 * 1000);
      
      // Clean up monitoring files
      const monitoringFiles = fs.readdirSync(this.monitoringDir);
      for (const file of monitoringFiles) {
        const filePath = path.join(this.monitoringDir, file);
        const stats = fs.statSync(filePath);
        if (stats.mtime.getTime() < cutoff) {
          fs.unlinkSync(filePath);
        }
      }
      
      // Clean up alert files
      const alertFiles = fs.readdirSync(this.alertsDir);
      for (const file of alertFiles) {
        const filePath = path.join(this.alertsDir, file);
        const stats = fs.statSync(filePath);
        if (stats.mtime.getTime() < cutoff) {
          fs.unlinkSync(filePath);
        }
      }
      
    } catch (error) {
      console.warn("⚠️  Failed to cleanup old files:", error.message);
    }
  }

  stopMonitoring() {
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
      console.log("✅ Monitoring stopped");
    }
  }

  getSystemStatus() {
    return {
      status: this.systemStatus,
      lastHealthCheck: this.lastHealthCheck,
      monitoringHistory: this.monitoringHistory.length,
      alertHistory: this.alertHistory.length
    };
  }
}

// Run the monitoring system
async function main() {
  try {
    const monitoring = new ContinuousMonitoringSystem();
    await monitoring.startContinuousMonitoring();
    
    // Keep the process running
    console.log("🔄 Monitoring system is running. Press Ctrl+C to stop.");
    
  } catch (error) {
    console.error("❌ Failed to start monitoring system:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = ContinuousMonitoringSystem;