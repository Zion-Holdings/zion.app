#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const LOG_DIR = path.join(__dirname, 'logs');
const ANALYTICS_DIR = path.join(__dirname, 'analytics');
const OPTIMIZATION_DIR = path.join(__dirname, 'optimization');

class NetlifyAutomationDashboard {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.data = {
      system: {},
      components: {},
      performance: {},
      optimization: {},
      analytics: {},
      monitoring: {}
    };
  }

  async generateDashboard() {
    console.log('🚀 Netlify Automation System Dashboard');
    console.log('=====================================\n');

    try {
      await this.collectSystemData();
      await this.collectComponentData();
      await this.collectPerformanceData();
      await this.collectOptimizationData();
      await this.collectAnalyticsData();
      await this.collectMonitoringData();

      this.displaySystemOverview();
      this.displayComponentStatus();
      this.displayPerformanceMetrics();
      this.displayOptimizationHistory();
      this.displayAnalyticsSummary();
      this.displayMonitoringStatus();
      this.displayRecommendations();

    } catch (error) {
      console.error(`❌ Dashboard generation failed: ${error.message}`);
    }
  }

  async collectSystemData() {
    this.data.system = {
      timestamp: new Date().toISOString(),
      nodeVersion: process.version,
      platform: process.platform,
      arch: process.arch,
      memoryUsage: process.memoryUsage(),
      uptime: process.uptime()
    };
  }

  async collectComponentData() {
    const components = [
      'netlify-intelligent-build-orchestrator.cjs',
      'netlify-build-optimizer.cjs',
      'netlify-build-analytics.cjs',
      'netlify-build-artifact-optimizer.cjs',
      'netlify-build-error-analyzer.cjs',
      'netlify-comprehensive-build-automator.cjs',
      'netlify-continuous-monitor.cjs'
    ];

    this.data.components = {};

    for (const component of components) {
      const componentPath = path.join(__dirname, component);
      if (fs.existsSync(componentPath)) {
        const stats = fs.statSync(componentPath);
        this.data.components[component] = {
          exists: true,
          size: stats.size,
          sizeFormatted: this.formatBytes(stats.size),
          modified: stats.mtime.toISOString(),
          age: this.getAge(stats.mtime)
        };
      } else {
        this.data.components[component] = {
          exists: false,
          size: 0,
          sizeFormatted: '0 Bytes',
          modified: null,
          age: 'N/A'
        };
      }
    }
  }

  async collectPerformanceData() {
    this.data.performance = {
      buildArtifacts: await this.getBuildArtifactsSize(),
      optimizationSavings: await this.getOptimizationSavings(),
      systemHealth: await this.getSystemHealth()
    };
  }

  async collectOptimizationData() {
    this.data.optimization = {
      history: await this.getOptimizationHistory(),
      totalSavings: await this.calculateTotalSavings(),
      recentOptimizations: await this.getRecentOptimizations()
    };
  }

  async collectAnalyticsData() {
    this.data.analytics = {
      recentReports: await this.getRecentAnalytics(),
      buildHealth: await this.getBuildHealthTrend(),
      performanceMetrics: await this.getPerformanceMetrics()
    };
  }

  async collectMonitoringData() {
    try {
      const monitor = require('./netlify-continuous-monitor.cjs');
      const monitorInstance = new monitor();
      this.data.monitoring = await monitorInstance.getStatus();
    } catch (error) {
      this.data.monitoring = { error: error.message };
    }
  }

  async getBuildArtifactsSize() {
    try {
      const artifactOptimizer = require('./netlify-build-artifact-optimizer.cjs');
      const analyzer = new artifactOptimizer();
      const analysis = await analyzer.analyzeBuildArtifacts();
      return {
        current: analysis.totalSize,
        currentFormatted: this.formatBytes(analysis.totalSize),
        recommendations: analysis.recommendations
      };
    } catch (error) {
      return { error: error.message };
    }
  }

  async getOptimizationSavings() {
    try {
      const logFiles = fs.readdirSync(LOG_DIR)
        .filter(f => f.includes('build-artifact-optimization'))
        .sort()
        .slice(-5); // Last 5 optimizations

      const savings = [];
      for (const file of logFiles) {
        const content = JSON.parse(fs.readFileSync(path.join(LOG_DIR, file), 'utf8'));
        savings.push({
          timestamp: content.timestamp,
          savings: content.summary.totalSavingsFormatted,
          duration: content.durationFormatted
        });
      }
      return savings;
    } catch (error) {
      return [];
    }
  }

  async getSystemHealth() {
    try {
      const orchestrator = require('./netlify-intelligent-build-orchestrator.cjs');
      const health = await orchestrator.prototype.runHealthCheck.call({});
      return health;
    } catch (error) {
      return { error: error.message };
    }
  }

  async getOptimizationHistory() {
    try {
      const logFiles = fs.readdirSync(LOG_DIR)
        .filter(f => f.includes('build-artifact-optimization'))
        .sort();

      return logFiles.length;
    } catch (error) {
      return 0;
    }
  }

  async calculateTotalSavings() {
    try {
      const logFiles = fs.readdirSync(LOG_DIR)
        .filter(f => f.includes('build-artifact-optimization'));

      let totalSavings = 0;
      for (const file of logFiles) {
        const content = JSON.parse(fs.readFileSync(path.join(LOG_DIR, file), 'utf8'));
        totalSavings += content.summary.totalSavings;
      }
      return this.formatBytes(totalSavings);
    } catch (error) {
      return '0 Bytes';
    }
  }

  async getRecentOptimizations() {
    try {
      const logFiles = fs.readdirSync(LOG_DIR)
        .filter(f => f.includes('build-artifact-optimization'))
        .sort()
        .slice(-3); // Last 3 optimizations

      const optimizations = [];
      for (const file of logFiles) {
        const content = JSON.parse(fs.readFileSync(path.join(LOG_DIR, file), 'utf8'));
        optimizations.push({
          timestamp: content.timestamp,
          savings: content.summary.totalSavingsFormatted,
          duration: content.durationFormatted,
          originalSize: content.summary.totalOriginalSize,
          finalSize: content.summary.totalFinalSize
        });
      }
      return optimizations;
    } catch (error) {
      return [];
    }
  }

  async getRecentAnalytics() {
    try {
      const logFiles = fs.readdirSync(LOG_DIR)
        .filter(f => f.includes('build-analytics'))
        .sort()
        .slice(-3); // Last 3 analytics reports

      const reports = [];
      for (const file of logFiles) {
        const content = JSON.parse(fs.readFileSync(path.join(LOG_DIR, file), 'utf8'));
        reports.push({
          timestamp: content.timestamp,
          buildHealth: content.summary.buildHealth,
          totalMetrics: content.summary.totalMetrics,
          recommendations: content.summary.recommendations
        });
      }
      return reports;
    } catch (error) {
      return [];
    }
  }

  async getBuildHealthTrend() {
    try {
      const logFiles = fs.readdirSync(LOG_DIR)
        .filter(f => f.includes('build-analytics'))
        .sort()
        .slice(-5); // Last 5 analytics reports

      const trends = [];
      for (const file of logFiles) {
        const content = JSON.parse(fs.readFileSync(path.join(LOG_DIR, file), 'utf8'));
        trends.push({
          timestamp: content.timestamp,
          health: content.summary.buildHealth
        });
      }
      return trends;
    } catch (error) {
      return [];
    }
  }

  async getPerformanceMetrics() {
    try {
      const logFiles = fs.readdirSync(LOG_DIR)
        .filter(f => f.includes('performance'))
        .sort()
        .slice(-3); // Last 3 performance reports

      const metrics = [];
      for (const file of logFiles) {
        const content = JSON.parse(fs.readFileSync(path.join(LOG_DIR, file), 'utf8'));
        metrics.push({
          timestamp: content.timestamp,
          buildId: content.buildId,
          collectionTime: content.metrics.performance.collectionTime
        });
      }
      return metrics;
    } catch (error) {
      return [];
    }
  }

  displaySystemOverview() {
    console.log('📊 System Overview');
    console.log('------------------');
    console.log(`🕒 Timestamp: ${this.data.system.timestamp}`);
    console.log(`🖥️  Platform: ${this.data.system.platform} (${this.data.system.arch})`);
    console.log(`📦 Node.js: ${this.data.system.nodeVersion}`);
    console.log(`⏱️  Uptime: ${this.formatDuration(this.data.system.uptime * 1000)}`);
    console.log(`💾 Memory: ${this.formatBytes(this.data.system.memoryUsage.heapUsed)} / ${this.formatBytes(this.data.system.memoryUsage.heapTotal)}`);
    console.log('');
  }

  displayComponentStatus() {
    console.log('🔧 Component Status');
    console.log('-------------------');
    
    let operationalCount = 0;
    let totalCount = 0;

    for (const [name, component] of Object.entries(this.data.components)) {
      const status = component.exists ? '✅' : '❌';
      const shortName = name.replace('.cjs', '').replace('netlify-', '');
      
      if (component.exists) operationalCount++;
      totalCount++;

      console.log(`${status} ${shortName.padEnd(35)} ${component.sizeFormatted.padStart(10)} (${component.age})`);
    }

    console.log(`\n📈 Operational: ${operationalCount}/${totalCount} (${Math.round(operationalCount/totalCount*100)}%)`);
    console.log('');
  }

  displayPerformanceMetrics() {
    console.log('⚡ Performance Metrics');
    console.log('----------------------');
    
    if (this.data.performance.buildArtifacts.error) {
      console.log(`❌ Build artifacts: ${this.data.performance.buildArtifacts.error}`);
    } else {
      console.log(`📦 Current build artifacts: ${this.data.performance.buildArtifacts.currentFormatted}`);
      
      if (this.data.performance.buildArtifacts.recommendations.length > 0) {
        console.log(`💡 Recommendations: ${this.data.performance.buildArtifacts.recommendations.length}`);
      }
    }

    if (this.data.performance.systemHealth.error) {
      console.log(`❌ System health: ${this.data.performance.systemHealth.error}`);
    } else {
      console.log(`🏥 System health: ${this.data.performance.systemHealth.overall.toUpperCase()}`);
    }

    console.log('');
  }

  displayOptimizationHistory() {
    console.log('🔧 Optimization History');
    console.log('----------------------');
    console.log(`📊 Total optimizations: ${this.data.optimization.history}`);
    console.log(`💰 Total savings: ${this.data.optimization.totalSavings}`);
    
    if (this.data.optimization.recentOptimizations.length > 0) {
      console.log('\n📈 Recent Optimizations:');
      for (const opt of this.data.optimization.recentOptimizations) {
        const date = new Date(opt.timestamp).toLocaleDateString();
        console.log(`   ${date}: ${opt.savings} saved in ${opt.duration}`);
      }
    }
    console.log('');
  }

  displayAnalyticsSummary() {
    console.log('📊 Analytics Summary');
    console.log('-------------------');
    
    if (this.data.analytics.recentReports.length > 0) {
      console.log(`📈 Recent reports: ${this.data.analytics.recentReports.length}`);
      
      const latestReport = this.data.analytics.recentReports[0];
      console.log(`🏥 Latest build health: ${latestReport.buildHealth.toUpperCase()}`);
      console.log(`📊 Total metrics: ${latestReport.totalMetrics}`);
      console.log(`💡 Recommendations: ${latestReport.recommendations}`);
    } else {
      console.log('📊 No recent analytics reports found');
    }
    console.log('');
  }

  displayMonitoringStatus() {
    console.log('🔄 Monitoring Status');
    console.log('-------------------');
    
    if (this.data.monitoring.error) {
      console.log(`❌ Monitor error: ${this.data.monitoring.error}`);
    } else {
      console.log(`🔄 Status: ${this.data.monitoring.isRunning ? '🟢 RUNNING' : '🔴 STOPPED'}`);
      
      if (this.data.monitoring.isRunning) {
        console.log(`⏱️  Uptime: ${this.data.monitoring.uptimeFormatted}`);
        console.log(`📊 Health checks: ${this.data.monitoring.stats.healthChecks}`);
        console.log(`🔧 Optimizations: ${this.data.monitoring.stats.optimizations}`);
        console.log(`⚠️  Issues: ${this.data.monitoring.stats.issues}`);
      }
    }
    console.log('');
  }

  displayRecommendations() {
    console.log('💡 Recommendations');
    console.log('------------------');
    
    const recommendations = [];

    // Check build artifacts size
    if (this.data.performance.buildArtifacts.current > 100 * 1024 * 1024) { // > 100MB
      recommendations.push('🔧 Run artifact optimization to reduce build size');
    }

    // Check monitoring status
    if (!this.data.monitoring.isRunning) {
      recommendations.push('🔄 Start continuous monitoring for proactive optimization');
    }

    // Check component health
    const operationalComponents = Object.values(this.data.components).filter(c => c.exists).length;
    const totalComponents = Object.keys(this.data.components).length;
    if (operationalComponents < totalComponents) {
      recommendations.push('🔧 Review component status and fix any missing components');
    }

    if (recommendations.length === 0) {
      console.log('✅ All systems are operating optimally!');
    } else {
      recommendations.forEach((rec, index) => {
        console.log(`${index + 1}. ${rec}`);
      });
    }
    console.log('');
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  formatDuration(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ${hours % 24}h ${minutes % 60}m`;
    if (hours > 0) return `${hours}h ${minutes % 60}m ${seconds % 60}s`;
    if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
    return `${seconds}s`;
  }

  getAge(date) {
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return '<1h ago';
  }
}

// CLI interface
if (require.main === module) {
  const dashboard = new NetlifyAutomationDashboard();
  dashboard.generateDashboard();
}

module.exports = NetlifyAutomationDashboard;
