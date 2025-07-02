/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs').promises;
const path = require('path');
const axios = require('axios');
const { performance } = require('perf_hooks');

class PerformanceMonitor {
  constructor() {
    this.thresholds = {
      bundleSize: parseInt(process.env.BUNDLE_SIZE_THRESHOLD) || 5242880, // 5MB
      pageLoad: parseInt(process.env.PAGE_LOAD_THRESHOLD) || 3000, // 3s
      coreWebVitals: parseFloat(process.env.CORE_WEB_VITALS_THRESHOLD) || 2.5
    };
    
    this.metrics = new Map();
    this.alertCooldown = new Map();
    this.isMonitoring = false;
    
    this.slackWebhook = process.env.SLACK_WEBHOOK_URL;
    this.checkInterval = parseInt(process.env.PERFORMANCE_CHECK_INTERVAL) || 300000; // 5 minutes
  }

  async start() {
    if (this.isMonitoring) {
      console.log('Performance monitor already running');
      return;
    }

    console.log('🚀 Starting Performance Monitor...');
    this.isMonitoring = true;
    
    // Initial performance check
    await this.performComprehensiveCheck();
    
    // Set up periodic monitoring
    this.monitoringInterval = setInterval(async () => {
      try {
        await this.performComprehensiveCheck();
      } catch (error) {
        console.error('Monitoring check failed:', error);
      }
    }, this.checkInterval);

    console.log(`📊 Performance monitoring active (interval: ${this.checkInterval/1000}s)`);
  }

  async stop() {
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
    }
    this.isMonitoring = false;
    console.log('⏹️ Performance monitor stopped');
  }

  async performComprehensiveCheck() {
    console.log('🔍 Performing comprehensive performance check...');
    
    const startTime = performance.now();
    
    try {
      // Collect all performance metrics
      const metrics = await this.collectMetrics();
      
      // Store metrics with timestamp
      metrics.timestamp = new Date().toISOString();
      await this.storeMetrics(metrics);
      
      // Check thresholds and trigger alerts
      await this.checkThresholds(metrics);
      
      // Update performance dashboard
      await this.updateDashboard(metrics);
      
      const duration = performance.now() - startTime;
      console.log(`✅ Performance check completed in ${duration.toFixed(2)}ms`);
      
      return metrics;
    } catch (error) {
      console.error('❌ Performance check failed:', error);
      await this.sendErrorAlert(error);
      throw error;
    }
  }

  async collectMetrics() {
    const metrics = {
      bundleSize: await this.getBundleSize(),
      buildMetrics: await this.getBuildMetrics(),
      lighthouse: await this.getLighthouseScores(),
      dependencies: await this.analyzeDependencies(),
      codeQuality: await this.analyzeCodeQuality(),
      performance: await this.getPerformanceMetrics()
    };

    return metrics;
  }

  async getBundleSize() {
    try {
      const buildDir = path.join(process.cwd(), '.next');
      const stats = await this.getDirectorySize(buildDir);
      
      return {
        total: stats.total,
        static: stats.static || 0,
        chunks: stats.chunks || 0,
        threshold: this.thresholds.bundleSize,
        status: stats.total > this.thresholds.bundleSize ? 'critical' : 
                stats.total > this.thresholds.bundleSize * 0.8 ? 'warning' : 'good'
      };
    } catch (error) {
      console.error('Bundle size check failed:', error);
      return { error: error.message };
    }
  }

  async getDirectorySize(dirPath) {
    let totalSize = 0;
    
    try {
      const files = await fs.readdir(dirPath, { withFileTypes: true });
      
      for (const file of files) {
        const filePath = path.join(dirPath, file.name);
        
        if (file.isDirectory()) {
          const subDirSize = await this.getDirectorySize(filePath);
          totalSize += subDirSize.total;
        } else {
          const stats = await fs.stat(filePath);
          totalSize += stats.size;
        }
      }
    } catch (_error) {
      // Directory might not exist (e.g., not built yet)
      return { total: 0 };
    }
    
    return { total: totalSize };
  }

  async getBuildMetrics() {
    try {
      // Read Next.js build info if available
      const buildManifest = path.join(process.cwd(), '.next', 'build-manifest.json');
      
      try {
        const manifest = JSON.parse(await fs.readFile(buildManifest, 'utf8'));
        return {
          pages: Object.keys(manifest.pages || {}).length,
          chunks: Object.keys(manifest.chunks || {}).length,
          buildTime: await this.getLastBuildTime()
        };
      } catch {
        return { status: 'no_build' };
      }
    } catch (error) {
      return { error: error.message };
    }
  }

  async getLastBuildTime() {
    try {
      const buildDir = path.join(process.cwd(), '.next');
      const stats = await fs.stat(buildDir);
      return stats.mtime;
    } catch {
      return null;
    }
  }

  async getLighthouseScores() {
    // This would integrate with Lighthouse CI or PageSpeed Insights API
    // For now, return mock data structure
    return {
      performance: 75,
      accessibility: 95,
      bestPractices: 88,
      seo: 92,
      coreWebVitals: {
        lcp: 2.1,
        fid: 85,
        cls: 0.08
      },
      status: 'pending' // Would be 'complete' with real data
    };
  }

  async analyzeDependencies() {
    try {
      const packagePath = path.join(process.cwd(), 'package.json');
      const packageData = JSON.parse(await fs.readFile(packagePath, 'utf8'));
      
      const deps = packageData.dependencies || {};
      const devDeps = packageData.devDependencies || {};
      
      return {
        total: Object.keys(deps).length,
        dev: Object.keys(devDeps).length,
        heavy: this.identifyHeavyDependencies(deps),
        outdated: await this.checkOutdatedDependencies()
      };
    } catch (error) {
      return { error: error.message };
    }
  }

  identifyHeavyDependencies(dependencies) {
    const heavyPackages = [
      'three', 'recharts', '@chakra-ui/react', 'framer-motion', 
      'react-player', 'ethers', 'axios', 'lodash'
    ];
    
    return Object.keys(dependencies).filter(dep => 
      heavyPackages.some(heavy => dep.includes(heavy))
    );
  }

  async checkOutdatedDependencies() {
    // This would run npm outdated programmatically
    // For now, return placeholder
    return { count: 0, packages: [] };
  }

  async analyzeCodeQuality() {
    try {
      // Basic code quality metrics
      const srcDir = path.join(process.cwd(), 'src');
      const files = await this.getFileCount(srcDir);
      
      return {
        totalFiles: files.total,
        jsFiles: files.js,
        tsFiles: files.ts,
        componentFiles: files.components,
        averageFileSize: files.averageSize
      };
    } catch (error) {
      return { error: error.message };
    }
  }

  async getFileCount(dirPath) {
    let counts = { total: 0, js: 0, ts: 0, components: 0, totalSize: 0 };
    
    try {
      const files = await fs.readdir(dirPath, { withFileTypes: true });
      
      for (const file of files) {
        const filePath = path.join(dirPath, file.name);
        
        if (file.isDirectory()) {
          const subCounts = await this.getFileCount(filePath);
          counts.total += subCounts.total;
          counts.js += subCounts.js;
          counts.ts += subCounts.ts;
          counts.components += subCounts.components;
          counts.totalSize += subCounts.totalSize;
        } else {
          counts.total++;
          const stats = await fs.stat(filePath);
          counts.totalSize += stats.size;
          
          if (file.name.endsWith('.js') || file.name.endsWith('.jsx')) {
            counts.js++;
          } else if (file.name.endsWith('.ts') || file.name.endsWith('.tsx')) {
            counts.ts++;
            if (file.name.includes('Component') || filePath.includes('components')) {
              counts.components++;
            }
          }
        }
      }
    } catch (_error) {
      // Directory might not exist
    }
    
    counts.averageSize = counts.total > 0 ? counts.totalSize / counts.total : 0;
    return counts;
  }

  async getPerformanceMetrics() {
    // This would integrate with real performance monitoring
    // For now, return structure for existing metrics
    try {
      const metricsPath = path.join(process.cwd(), 'performance-metrics.json');
      const metrics = JSON.parse(await fs.readFile(metricsPath, 'utf8'));
      return metrics;
    } catch {
      return {
        loadTime: 0,
        renderTime: 0,
        interactiveTime: 0
      };
    }
  }

  async checkThresholds(metrics) {
    const alerts = [];
    
    // Bundle size check
    if (metrics.bundleSize && metrics.bundleSize.total > this.thresholds.bundleSize) {
      alerts.push({
        type: 'bundle_size',
        severity: 'critical',
        message: `Bundle size (${(metrics.bundleSize.total / 1024 / 1024).toFixed(2)}MB) exceeds threshold (${(this.thresholds.bundleSize / 1024 / 1024).toFixed(2)}MB)`,
        currentValue: metrics.bundleSize.total,
        threshold: this.thresholds.bundleSize,
        component: 'bundle'
      });
    }

    // Core Web Vitals check
    if (metrics.lighthouse && metrics.lighthouse.coreWebVitals) {
      const { lcp, cls } = metrics.lighthouse.coreWebVitals;
      
      if (lcp > this.thresholds.coreWebVitals) {
        alerts.push({
          type: 'core_web_vitals',
          severity: 'warning',
          message: `LCP (${lcp}s) exceeds threshold (${this.thresholds.coreWebVitals}s)`,
          currentValue: lcp,
          threshold: this.thresholds.coreWebVitals,
          component: 'lcp'
        });
      }
      
      if (cls > 0.1) {
        alerts.push({
          type: 'core_web_vitals',
          severity: 'warning',
          message: `CLS (${cls}) exceeds threshold (0.1)`,
          currentValue: cls,
          threshold: 0.1,
          component: 'cls'
        });
      }
    }

    // Send alerts
    for (const alert of alerts) {
      await this.sendAlert(alert);
    }

    return alerts;
  }

  async sendAlert(alert) {
    const alertKey = `${alert.type}_${alert.component}`;
    const cooldownMinutes = parseInt(process.env.ALERT_COOLDOWN_MINUTES) || 15;
    const now = Date.now();
    
    // Check cooldown
    if (this.alertCooldown.has(alertKey)) {
      const lastAlert = this.alertCooldown.get(alertKey);
      if (now - lastAlert < cooldownMinutes * 60 * 1000) {
        console.log(`Alert ${alertKey} on cooldown, skipping`);
        return;
      }
    }

    console.log(`🚨 Sending ${alert.severity} alert: ${alert.message}`);
    
    try {
      // Send to Slack
      await this.sendSlackAlert(alert);
      
      // Trigger auto-optimization if enabled
      if (process.env.ENABLE_AUTO_OPTIMIZATION === 'true' && alert.severity === 'critical') {
        await this.triggerAutoOptimization(alert);
      }
      
      // Update cooldown
      this.alertCooldown.set(alertKey, now);
    } catch (error) {
      console.error('Failed to send alert:', error);
    }
  }

  async sendSlackAlert(alert) {
    if (!this.slackWebhook) {
      console.log('Slack webhook not configured, skipping alert');
      return;
    }

    const emoji = alert.severity === 'critical' ? '🚨' : '⚠️';
    const color = alert.severity === 'critical' ? '#ff0000' : '#ffaa00';
    
    const payload = {
      channel: process.env.SLACK_CHANNEL,
      username: 'Performance Monitor',
      icon_emoji: ':chart_with_upwards_trend:',
      attachments: [
        {
          color,
          title: `${emoji} Performance Alert - ${alert.type}`,
          text: alert.message,
          fields: [
            {
              title: 'Current Value',
              value: alert.currentValue,
              short: true
            },
            {
              title: 'Threshold',
              value: alert.threshold,
              short: true
            },
            {
              title: 'Component',
              value: alert.component,
              short: true
            },
            {
              title: 'Severity',
              value: alert.severity,
              short: true
            }
          ],
          ts: Math.floor(Date.now() / 1000)
        }
      ]
    };

    await axios.post(this.slackWebhook, payload);
  }

  async triggerAutoOptimization(alert) {
    console.log(`🤖 Triggering auto-optimization for: ${alert.component}`);
    
    try {
      // This would trigger the Cursor agent optimization
      await axios.post('http://localhost:3001/api/optimization/trigger', {
        target: alert.component,
        reason: 'auto_optimization',
        alert: alert
      });
    } catch (error) {
      console.error('Auto-optimization trigger failed:', error);
    }
  }

  async storeMetrics(metrics) {
    try {
      const metricsPath = path.join(process.cwd(), 'performance-metrics.json');
      await fs.writeFile(metricsPath, JSON.stringify(metrics, null, 2));
      
      // Also store historical data
      const historyPath = path.join(process.cwd(), 'logs', 'performance-history.jsonl');
      await fs.appendFile(historyPath, JSON.stringify(metrics) + '\n');
    } catch (error) {
      console.error('Failed to store metrics:', error);
    }
  }

  async updateDashboard(metrics) {
    // This would update a real-time dashboard
    // For now, just log summary
    console.log('📊 Performance Summary:', {
      bundleSize: metrics.bundleSize ? `${(metrics.bundleSize.total / 1024 / 1024).toFixed(2)}MB` : 'N/A',
      status: metrics.bundleSize ? metrics.bundleSize.status : 'unknown',
      timestamp: metrics.timestamp
    });
  }

  async sendErrorAlert(error) {
    if (!this.slackWebhook) return;

    const payload = {
      channel: process.env.SLACK_CHANNEL,
      username: 'Performance Monitor',
      icon_emoji: ':warning:',
      text: `❌ Performance monitoring error: ${error.message}`,
      color: '#ff0000'
    };

    try {
      await axios.post(this.slackWebhook, payload);
    } catch (slackError) {
      console.error('Failed to send error alert to Slack:', slackError);
    }
  }

  async getMetrics() {
    return this.metrics;
  }

  async getHistory(hours = 24) {
    try {
      const historyPath = path.join(process.cwd(), 'logs', 'performance-history.jsonl');
      const content = await fs.readFile(historyPath, 'utf8');
      const lines = content.trim().split('\n');
      
      const cutoff = new Date(Date.now() - hours * 60 * 60 * 1000);
      
      return lines
        .map(line => JSON.parse(line))
        .filter(metric => new Date(metric.timestamp) > cutoff);
    } catch (error) {
      console.error('Failed to get performance history:', error);
      return [];
    }
  }
}

module.exports = PerformanceMonitor;