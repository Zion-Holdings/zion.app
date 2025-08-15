#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const CONFIG = {
  logDir: path.join(__dirname, 'logs'),
  reportDir: path.join(process.cwd(), 'public', 'reports', 'advanced-analytics'),
  dataRetentionDays: 30,
  analysisInterval: 300000, // 5 minutes
  alertThresholds: {
    quality: 0.8,
    performance: 0.7,
    accessibility: 0.9,
    seo: 0.8
  }
};

// Utility functions
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function log(message, level = 'INFO') {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [${level}] ${message}`;
  console.log(logMessage);
  
  // Write to log file
  const logFile = path.join(CONFIG.logDir, 'advanced-analytics-engine.log');
  ensureDir(path.dirname(logFile));
  fs.appendFileSync(logFile, logMessage + '\n');
}

// Advanced Analytics Engine Class
class AdvancedAnalyticsEngine {
  constructor() {
    this.analyticsData = new Map();
    this.insights = new Map();
    this.alerts = [];
    this.performanceMetrics = new Map();
    this.qualityTrends = new Map();
    this.isRunning = false;
    this.startTime = Date.now();
  }

  // Initialize the analytics engine
  async initialize() {
    log('Initializing Advanced Analytics Engine...');
    
    try {
      // Ensure directories exist
      ensureDir(CONFIG.logDir);
      ensureDir(CONFIG.reportDir);
      
      // Load existing analytics data
      await this.loadAnalyticsData();
      
      // Initialize performance monitoring
      this.initializePerformanceMonitoring();
      
      // Start analytics collection
      this.startAnalyticsCollection();
      
      log('Advanced Analytics Engine initialized successfully');
      return true;
    } catch (error) {
      log(`Initialization failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  // Load existing analytics data
  async loadAnalyticsData() {
    try {
      const dataFile = path.join(CONFIG.reportDir, 'analytics-data.json');
      if (fs.existsSync(dataFile)) {
        const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
        this.analyticsData = new Map(Object.entries(data));
        log(`Loaded ${this.analyticsData.size} analytics datasets`);
      } else {
        this.analyticsData = new Map();
        log('Initialized empty analytics dataset');
      }
    } catch (error) {
      log(`Failed to load analytics data: ${error.message}`, 'ERROR');
      this.analyticsData = new Map();
    }
  }

  // Initialize performance monitoring
  initializePerformanceMonitoring() {
    log('Initializing performance monitoring...');
    
    // Monitor system performance
    setInterval(() => {
      this.collectSystemMetrics();
    }, 60000); // Every minute
    
    // Monitor quality trends
    setInterval(() => {
      this.analyzeQualityTrends();
    }, 300000); // Every 5 minutes
    
    // Generate insights
    setInterval(() => {
      this.generateInsights();
    }, 900000); // Every 15 minutes
  }

  // Start analytics collection
  startAnalyticsCollection() {
    this.isRunning = true;
    log('Analytics collection started');
    
    // Collect initial data
    this.collectComprehensiveData();
    
    // Set up periodic collection
    setInterval(() => {
      if (this.isRunning) {
        this.collectComprehensiveData();
      }
    }, CONFIG.analysisInterval);
  }

  // Collect comprehensive data
  async collectComprehensiveData() {
    try {
      log('Collecting comprehensive analytics data...');
      
      const timestamp = new Date().toISOString();
      const dataPoint = {
        timestamp,
        system: await this.collectSystemMetrics(),
        quality: await this.collectQualityMetrics(),
        performance: await this.collectPerformanceMetrics(),
        content: await this.collectContentMetrics(),
        automation: await this.collectAutomationMetrics()
      };
      
      // Store data point
      this.analyticsData.set(timestamp, dataPoint);
      
      // Clean up old data
      this.cleanupOldData();
      
      // Analyze for insights
      await this.analyzeDataPoint(dataPoint);
      
      log(`Analytics data collected for ${timestamp}`);
    } catch (error) {
      log(`Data collection failed: ${error.message}`, 'ERROR');
    }
  }

  // Collect system metrics
  async collectSystemMetrics() {
    try {
      const memUsage = process.memoryUsage();
      const uptime = process.uptime();
      
      return {
        memory: {
          rss: memUsage.rss,
          heapTotal: memUsage.heapTotal,
          heapUsed: memUsage.heapUsed,
          external: memUsage.external
        },
        uptime,
        platform: process.platform,
        nodeVersion: process.version,
        pid: process.pid
      };
    } catch (error) {
      log(`System metrics collection failed: ${error.message}`, 'ERROR');
      return {};
    }
  }

  // Collect quality metrics
  async collectQualityMetrics() {
    try {
      // Run quality check
      const qualityResult = execSync('npm run quality:check', { encoding: 'utf8' });
      
      // Parse quality results
      const qualityMatch = qualityResult.match(/Analysis complete: (\d+) files, (\d+) issues \((\d+) critical, (\d+) warnings, (\d+) errors\)/);
      
      if (qualityMatch) {
        return {
          filesAnalyzed: parseInt(qualityMatch[1]),
          totalIssues: parseInt(qualityMatch[2]),
          criticalIssues: parseInt(qualityMatch[3]),
          warnings: parseInt(qualityMatch[4]),
          errors: parseInt(qualityMatch[5]),
          qualityScore: this.calculateQualityScore(parseInt(qualityMatch[3]), parseInt(qualityMatch[4]), parseInt(qualityMatch[5]))
        };
      }
      
      return { qualityScore: 0.5 };
    } catch (error) {
      log(`Quality metrics collection failed: ${error.message}`, 'ERROR');
      return { qualityScore: 0.5 };
    }
  }

  // Calculate quality score
  calculateQualityScore(critical, warnings, errors) {
    const totalIssues = critical + warnings + errors;
    if (totalIssues === 0) return 1.0;
    
    // Weight critical issues more heavily
    const weightedScore = (critical * 0.6 + warnings * 0.3 + errors * 0.1) / totalIssues;
    return Math.max(0, 1 - weightedScore);
  }

  // Collect performance metrics
  async collectPerformanceMetrics() {
    try {
      // Check build performance
      const buildStart = Date.now();
      let buildSuccess = false;
      
      try {
        execSync('npm run build --dry-run', { stdio: 'ignore' });
        buildSuccess = true;
      } catch {
        buildSuccess = false;
      }
      
      const buildTime = Date.now() - buildStart;
      
      // Check export performance
      const exportStart = Date.now();
      let exportSuccess = false;
      
      try {
        execSync('npm run export --dry-run', { stdio: 'ignore' });
        exportSuccess = true;
      } catch {
        exportSuccess = false;
      }
      
      const exportTime = Date.now() - exportStart;
      
      return {
        build: {
          success: buildSuccess,
          time: buildTime,
          timestamp: new Date().toISOString()
        },
        export: {
          success: exportSuccess,
          time: exportTime,
          timestamp: new Date().toISOString()
        }
      };
    } catch (error) {
      log(`Performance metrics collection failed: ${error.message}`, 'ERROR');
      return {};
    }
  }

  // Collect content metrics
  async collectContentMetrics() {
    try {
      const contentDir = path.join(process.cwd(), 'pages');
      const contentStats = this.analyzeContentDirectory(contentDir);
      
      return {
        totalFiles: contentStats.totalFiles,
        fileTypes: contentStats.fileTypes,
        averageFileSize: contentStats.averageFileSize,
        contentDistribution: contentStats.contentDistribution,
        lastModified: contentStats.lastModified
      };
    } catch (error) {
      log(`Content metrics collection failed: ${error.message}`, 'ERROR');
      return {};
    }
  }

  // Analyze content directory
  analyzeContentDirectory(dir) {
    try {
      const stats = {
        totalFiles: 0,
        fileTypes: {},
        totalSize: 0,
        contentDistribution: {},
        lastModified: null
      };
      
      const analyzeRecursive = (currentDir) => {
        const items = fs.readdirSync(currentDir);
        
        for (const item of items) {
          const itemPath = path.join(currentDir, item);
          const itemStat = fs.statSync(itemPath);
          
          if (itemStat.isDirectory()) {
            analyzeRecursive(itemPath);
          } else {
            stats.totalFiles++;
            stats.totalSize += itemStat.size;
            
            const ext = path.extname(item);
            stats.fileTypes[ext] = (stats.fileTypes[ext] || 0) + 1;
            
            if (!stats.lastModified || itemStat.mtime > stats.lastModified) {
              stats.lastModified = itemStat.mtime;
            }
            
            // Analyze content distribution
            if (itemPath.includes('reports')) {
              const reportType = this.extractReportType(itemPath);
              if (reportType) {
                stats.contentDistribution[reportType] = (stats.contentDistribution[reportType] || 0) + 1;
              }
            }
          }
        }
      };
      
      analyzeRecursive(dir);
      
      stats.averageFileSize = stats.totalFiles > 0 ? stats.totalSize / stats.totalFiles : 0;
      
      return stats;
    } catch (error) {
      log(`Content directory analysis failed: ${error.message}`, 'ERROR');
      return {};
    }
  }

  // Extract report type from path
  extractReportType(filePath) {
    const reportTypes = ['updates', 'insights', 'guides', 'cases', 'patterns', 'playbooks'];
    
    for (const type of reportTypes) {
      if (filePath.includes(type)) {
        return type;
      }
    }
    
    return 'other';
  }

  // Collect automation metrics
  async collectAutomationMetrics() {
    try {
      // Check automation system status
      let automationStatus = 'unknown';
      let activeTasks = 0;
      
      try {
        const statusResult = execSync('npm run enhanced:status', { encoding: 'utf8' });
        const status = JSON.parse(statusResult);
        automationStatus = status.isRunning ? 'running' : 'idle';
        activeTasks = status.tasks ? status.tasks.length : 0;
      } catch {
        automationStatus = 'error';
      }
      
      // Check content generation status
      let contentGenerationStatus = 'unknown';
      let generatedContent = 0;
      
      try {
        const contentDir = path.join(process.cwd(), 'pages', 'reports');
        if (fs.existsSync(contentDir)) {
          const files = fs.readdirSync(contentDir, { recursive: true });
          generatedContent = files.filter(file => file.endsWith('.tsx')).length;
        }
      } catch {
        contentGenerationStatus = 'error';
      }
      
      return {
        systemStatus: automationStatus,
        activeTasks,
        generatedContent,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      log(`Automation metrics collection failed: ${error.message}`, 'ERROR');
      return {};
    }
  }

  // Analyze data point for insights
  async analyzeDataPoint(dataPoint) {
    try {
      const insights = [];
      
      // Quality insights
      if (dataPoint.quality.qualityScore < CONFIG.alertThresholds.quality) {
        insights.push({
          type: 'quality_alert',
          severity: 'warning',
          message: `Quality score below threshold: ${(dataPoint.quality.qualityScore * 100).toFixed(2)}%`,
          recommendation: 'Run quality optimization and review critical issues',
          timestamp: dataPoint.timestamp
        });
      }
      
      // Performance insights
      if (dataPoint.performance.build && dataPoint.performance.build.time > 30000) {
        insights.push({
          type: 'performance_alert',
          severity: 'info',
          message: `Build time is high: ${dataPoint.performance.build.time}ms`,
          recommendation: 'Consider optimizing build process and dependencies',
          timestamp: dataPoint.timestamp
        });
      }
      
      // Content insights
      if (dataPoint.content.totalFiles > 1000) {
        insights.push({
          type: 'content_insight',
          severity: 'info',
          message: `Large content base: ${dataPoint.content.totalFiles} files`,
          recommendation: 'Consider implementing content archiving and optimization',
          timestamp: dataPoint.timestamp
        });
      }
      
      // Automation insights
      if (dataPoint.automation.activeTasks > 5) {
        insights.push({
          type: 'automation_insight',
          severity: 'info',
          message: `High automation activity: ${dataPoint.automation.activeTasks} active tasks`,
          recommendation: 'Monitor system performance and resource usage',
          timestamp: dataPoint.timestamp
        });
      }
      
      // Store insights
      for (const insight of insights) {
        this.insights.set(`${insight.type}_${insight.timestamp}`, insight);
      }
      
      // Generate alerts for high-severity insights
      const alerts = insights.filter(insight => insight.severity === 'warning' || insight.severity === 'error');
      this.alerts.push(...alerts);
      
      log(`Generated ${insights.length} insights from data point`);
    } catch (error) {
      log(`Data point analysis failed: ${error.message}`, 'ERROR');
    }
  }

  // Analyze quality trends
  analyzeQualityTrends() {
    try {
      const qualityData = Array.from(this.analyticsData.values())
        .filter(data => data.quality && data.quality.qualityScore)
        .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
      
      if (qualityData.length < 2) return;
      
      // Calculate trend
      const recentScores = qualityData.slice(-10).map(d => d.quality.qualityScore);
      const trend = this.calculateTrend(recentScores);
      
      // Store trend data
      this.qualityTrends.set(new Date().toISOString(), {
        trend,
        recentScores,
        averageScore: recentScores.reduce((sum, score) => sum + score, 0) / recentScores.length,
        timestamp: new Date().toISOString()
      });
      
      log(`Quality trend analyzed: ${trend > 0 ? 'improving' : trend < 0 ? 'declining' : 'stable'}`);
    } catch (error) {
      log(`Quality trend analysis failed: ${error.message}`, 'ERROR');
    }
  }

  // Calculate trend from data points
  calculateTrend(dataPoints) {
    if (dataPoints.length < 2) return 0;
    
    const n = dataPoints.length;
    const sumX = (n * (n - 1)) / 2;
    const sumY = dataPoints.reduce((sum, y) => sum + y, 0);
    const sumXY = dataPoints.reduce((sum, y, i) => sum + (i * y), 0);
    const sumX2 = (n * (n - 1) * (2 * n - 1)) / 6;
    
    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    return slope;
  }

  // Generate insights
  generateInsights() {
    try {
      log('Generating comprehensive insights...');
      
      const insights = {
        timestamp: new Date().toISOString(),
        system: this.generateSystemInsights(),
        quality: this.generateQualityInsights(),
        performance: this.generatePerformanceInsights(),
        content: this.generateContentInsights(),
        automation: this.generateAutomationInsights(),
        recommendations: this.generateRecommendations()
      };
      
      // Save insights
      const insightsFile = path.join(CONFIG.reportDir, 'comprehensive-insights.json');
      fs.writeFileSync(insightsFile, JSON.stringify(insights, null, 2));
      
      // Save alerts
      const alertsFile = path.join(CONFIG.reportDir, 'alerts.json');
      fs.writeFileSync(alertsFile, JSON.stringify(this.alerts, null, 2));
      
      log(`Generated comprehensive insights and ${this.alerts.length} alerts`);
    } catch (error) {
      log(`Insight generation failed: ${error.message}`, 'ERROR');
    }
  }

  // Generate system insights
  generateSystemInsights() {
    const systemData = Array.from(this.analyticsData.values())
      .filter(data => data.system && data.system.memory)
      .slice(-10);
    
    if (systemData.length === 0) return {};
    
    const memoryUsage = systemData.map(d => d.system.memory.heapUsed / d.system.memory.heapTotal);
    const avgMemoryUsage = memoryUsage.reduce((sum, usage) => sum + usage, 0) / memoryUsage.length;
    
    return {
      memoryUsage: {
        average: avgMemoryUsage,
        trend: this.calculateTrend(memoryUsage),
        recommendation: avgMemoryUsage > 0.8 ? 'Consider memory optimization' : 'Memory usage is healthy'
      },
      uptime: {
        current: process.uptime(),
        average: systemData.reduce((sum, d) => sum + d.system.uptime, 0) / systemData.length
      }
    };
  }

  // Generate quality insights
  generateQualityInsights() {
    const qualityData = Array.from(this.analyticsData.values())
      .filter(data => data.quality && data.quality.qualityScore)
      .slice(-20);
    
    if (qualityData.length === 0) return {};
    
    const scores = qualityData.map(d => d.quality.qualityScore);
    const avgScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    const trend = this.calculateTrend(scores);
    
    return {
      currentScore: scores[scores.length - 1],
      averageScore: avgScore,
      trend: trend,
      improvement: scores[scores.length - 1] - scores[0],
      recommendation: this.getQualityRecommendation(avgScore, trend)
    };
  }

  // Get quality recommendation
  getQualityRecommendation(score, trend) {
    if (score < 0.7) {
      return 'Critical: Immediate quality improvement needed';
    } else if (score < 0.8) {
      return 'Warning: Quality optimization recommended';
    } else if (trend < 0) {
      return 'Monitor: Quality trend is declining';
    } else {
      return 'Healthy: Quality is maintained at good levels';
    }
  }

  // Generate performance insights
  generatePerformanceInsights() {
    const performanceData = Array.from(this.analyticsData.values())
      .filter(data => data.performance && data.performance.build)
      .slice(-10);
    
    if (performanceData.length === 0) return {};
    
    const buildTimes = performanceData.map(d => d.performance.build.time);
    const avgBuildTime = buildTimes.reduce((sum, time) => sum + time, 0) / buildTimes.length;
    
    return {
      buildPerformance: {
        averageTime: avgBuildTime,
        trend: this.calculateTrend(buildTimes),
        recommendation: avgBuildTime > 30000 ? 'Consider build optimization' : 'Build performance is good'
      },
      successRate: {
        builds: performanceData.filter(d => d.performance.build.success).length / performanceData.length,
        exports: performanceData.filter(d => d.performance.export.success).length / performanceData.length
      }
    };
  }

  // Generate content insights
  generateContentInsights() {
    const contentData = Array.from(this.analyticsData.values())
      .filter(data => data.content && data.content.totalFiles)
      .slice(-5);
    
    if (contentData.length === 0) return {};
    
    const latest = contentData[contentData.length - 1];
    const previous = contentData[0];
    
    return {
      growth: {
        totalFiles: latest.content.totalFiles,
        growth: latest.content.totalFiles - previous.content.totalFiles,
        growthRate: ((latest.content.totalFiles - previous.content.totalFiles) / previous.content.totalFiles * 100).toFixed(2) + '%'
      },
      distribution: latest.content.contentDistribution,
      averageFileSize: latest.content.averageFileSize,
      recommendation: this.getContentRecommendation(latest.content)
    };
  }

  // Get content recommendation
  getContentRecommendation(content) {
    if (content.totalFiles > 1000) {
      return 'Consider implementing content archiving and optimization strategies';
    } else if (content.averageFileSize > 10000) {
      return 'Monitor file sizes and consider optimization for large files';
    } else {
      return 'Content structure is healthy and well-managed';
    }
  }

  // Generate automation insights
  generateAutomationInsights() {
    const automationData = Array.from(this.analyticsData.values())
      .filter(data => data.automation && data.automation.systemStatus)
      .slice(-10);
    
    if (automationData.length === 0) return {};
    
    const latest = automationData[automationData.length - 1];
    const statusCounts = automationData.reduce((counts, d) => {
      counts[d.automation.systemStatus] = (counts[d.automation.systemStatus] || 0) + 1;
      return counts;
    }, {});
    
    return {
      currentStatus: latest.automation.systemStatus,
      activeTasks: latest.automation.activeTasks,
      generatedContent: latest.automation.generatedContent,
      statusDistribution: statusCounts,
      recommendation: this.getAutomationRecommendation(latest.automation, statusCounts)
    };
  }

  // Get automation recommendation
  getAutomationRecommendation(automation, statusCounts) {
    if (automation.systemStatus === 'error') {
      return 'Critical: Automation system needs immediate attention';
    } else if (automation.activeTasks > 10) {
      return 'Monitor: High automation load, consider scaling';
    } else if (statusCounts.error > 0) {
      return 'Warning: Some automation errors detected';
    } else {
      return 'Healthy: Automation system is running smoothly';
    }
  }

  // Generate recommendations
  generateRecommendations() {
    const recommendations = [];
    
    // Quality recommendations
    const qualityInsight = this.insights.get(Array.from(this.insights.keys()).find(key => key.startsWith('quality_alert')));
    if (qualityInsight) {
      recommendations.push({
        priority: 'high',
        category: 'quality',
        action: qualityInsight.recommendation,
        impact: 'Build success and code quality'
      });
    }
    
    // Performance recommendations
    const performanceInsight = this.insights.get(Array.from(this.insights.keys()).find(key => key.startsWith('performance_alert')));
    if (performanceInsight) {
      recommendations.push({
        priority: 'medium',
        category: 'performance',
        action: performanceInsight.recommendation,
        impact: 'Build and export speed'
      });
    }
    
    // Content recommendations
    const contentInsight = this.insights.get(Array.from(this.insights.keys()).find(key => key.startsWith('content_insight')));
    if (contentInsight) {
      recommendations.push({
        priority: 'low',
        category: 'content',
        action: contentInsight.recommendation,
        impact: 'Content management and optimization'
      });
    }
    
    return recommendations;
  }

  // Clean up old data
  cleanupOldData() {
    try {
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - CONFIG.dataRetentionDays);
      
      const keysToDelete = [];
      
      for (const [key, value] of this.analyticsData) {
        if (new Date(key) < cutoffDate) {
          keysToDelete.push(key);
        }
      }
      
      for (const key of keysToDelete) {
        this.analyticsData.delete(key);
      }
      
      if (keysToDelete.length > 0) {
        log(`Cleaned up ${keysToDelete.length} old data points`);
      }
    } catch (error) {
      log(`Data cleanup failed: ${error.message}`, 'ERROR');
    }
  }

  // Stop the analytics engine
  stop() {
    this.isRunning = false;
    log('Advanced Analytics Engine stopped');
  }

  // Get analytics status
  getStatus() {
    return {
      isRunning: this.isRunning,
      uptime: Date.now() - this.startTime,
      dataPoints: this.analyticsData.size,
      insights: this.insights.size,
      alerts: this.alerts.length,
      qualityTrends: this.qualityTrends.size,
      timestamp: new Date().toISOString()
    };
  }
}

// Main execution
async function main() {
  const analytics = new AdvancedAnalyticsEngine();
  
  try {
    await analytics.initialize();
    
    // Keep the process running
    process.on('SIGINT', () => {
      log('Received SIGINT, shutting down gracefully...');
      analytics.stop();
      process.exit(0);
    });
    
    process.on('SIGTERM', () => {
      log('Received SIGTERM, shutting down gracefully...');
      analytics.stop();
      process.exit(0);
    });
    
    // Log status every 10 minutes
    setInterval(() => {
      const status = analytics.getStatus();
      log(`Status: ${status.isRunning ? 'Running' : 'Stopped'}, Data Points: ${status.dataPoints}, Insights: ${status.insights}, Alerts: ${status.alerts}`);
    }, 600000);
    
  } catch (error) {
    log(`Failed to start analytics engine: ${error.message}`, 'ERROR');
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = AdvancedAnalyticsEngine;