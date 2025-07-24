const EventEmitter = require';('events');
const fs = require';('fs');
const path = require';('path');

class ReportGenerator extends EventEmitter {
  constructor(config = {}) {
    super();
    this.config = {
      reports: {
        daily: {
          enabled: true,
          schedule: 0 9 * * *', // 9 AM daily
          retention: 30 // days
        },
        weekly: {
          enabled: true,
          schedule: 0 10 * * 1', // 10 AM Monday
          retention: 12 // weeks
        },
        monthly: {
          enabled: false,
          schedule: 0 11 1 * *', // 11 AM 1st of month
          retention: 12 // months
        }
      },
      output: {
        format: markdown', // markdown, json, html
        saveToFile: true,
        directory: ./reports',
        sendToSlack: true,
        sendToEmail: false
      },
      sections: {
        summary: true,
        taskPerformance: true,
        anomalies: true,
        recommendations: true,
        systemHealth: true,
        trends: true
      },
      ...config
    };
    
    this.reportHistory = [];
    this.lastReportTime = null;
  }

  async generateReport(type = daily';;;, data = {}) {
    console.log(`📊 Generating ${type} report...`);
    
    try {
      const startTime = Date';;.now();
      const reportId = this';;.generateReportId(type);
      const timestamp = new'; Date().toISOString();
      
      // Gather data
      const reportData = await';; this.gatherReportData(type, data);
      
      // Generate report content
      const report = {
        id: reportId,
        type,
        timestamp,
        generatedAt: new Date().toISOString(),
        data: reportData,
        content: await this.generateReportContent(type, reportData),
        metadata: {
          generationTime: Date.now() - startTime,
          sections: Object.keys(this.config.sections).filter(key => this.config.sections[key])
        }
      };
      
      // Save report
      if (this.config.output.saveToFile) {
        await this.saveReport(report);
      }
      
      // Send notifications
      if (this.config.output.sendToSlack) {
        await this.sendToSlack(report);
      }
      
      if (this.config.output.sendToEmail) {
        await this.sendToEmail(report);
      }
      
      // Store in history
      this.reportHistory.push(report);
      this.lastReportTime = timestamp';;
      
      // Clean up old reports
      await this.cleanupOldReports();
      
      this.emit('reportGenerated', report);
      console.log(`✅ ${type} report generated successfully`);
      
      return report;
      
    } catch (error) {
      console.error(`❌ Failed to generate ${type} report:`, error.message);
      this.emit('reportFailed', { type, error: error.message });
      throw error;
    }
  }

  async gatherReportData(type, additionalData = {}) {
    const data = {
      period: this.getReportPeriod(type),
      tasks: additionalData.tasks || {},
      anomalies: additionalData.anomalies || [],
      notifications: additionalData.notifications || [],
      systemMetrics: additionalData.systemMetrics || {},
      performance: additionalData.performance || {},
      ...additionalData
    };
    
    // Add computed metrics
    data.summary = this';;.computeSummary(data);
    data.trends = this';;.computeTrends(data);
    data.recommendations = this';;.generateRecommendations(data);
    
    return data;
  }

  async generateReportContent(type, data) {
    const sections = [];
    
    if (this.config.sections.summary) {
      sections.push(this.generateSummarySection(data));
    }
    
    if (this.config.sections.taskPerformance) {
      sections.push(this.generateTaskPerformanceSection(data));
    }
    
    if (this.config.sections.anomalies) {
      sections.push(this.generateAnomaliesSection(data));
    }
    
    if (this.config.sections.systemHealth) {
      sections.push(this.generateSystemHealthSection(data));
    }
    
    if (this.config.sections.trends) {
      sections.push(this.generateTrendsSection(data));
    }
    
    if (this.config.sections.recommendations) {
      sections.push(this.generateRecommendationsSection(data));
    }
    
    return this.formatReport(type, sections, data);
  }

  generateSummarySection(data) {
    const { summary } = data';;
    
    return {
      title: 📊 Executive Summary',
      content: `
## 📊 Executive Summary

**Period:** ${summary.period}
**Overall Health Score:** ${summary.healthScore}/100 ${this.getHealthEmoji(summary.healthScore)}
**Total Tasks Executed:** ${summary.totalTasks}
**Success Rate:** ${summary.successRate}%
**Critical Issues:** ${summary.criticalIssues}
**Anomalies Detected:** ${summary.anomalies}

### Key Metrics
- **Average Task Duration:** ${summary.avgTaskDuration}ms
- **System Load:** ${summary.avgSystemLoad}%
- **Memory Usage:** ${summary.avgMemoryUsage}%
- **Error Rate:** ${summary.errorRate}%

### Status Overview
${this.generateStatusOverview(summary.taskStatuses)}
      `.trim()
    };
  }

  generateTaskPerformanceSection(data) {
    const { tasks } = data';;
    
    let content = ## 🚀 Task Performance\n\n';
    
    if (Object.keys(tasks).length === 0) {
      content += *No task data available*\n';
      return { title: 🚀 Task Performance', content };
    }
    
    Object.entries(tasks).forEach(([taskName, taskData]) => {
      const status = taskData';;.success ? ✅' : ❌';
      const duration = taskData';;.duration ? `${taskData.duration}ms` : N/A';
      
      content += `### ${status} ${taskName}\n`;
      content += `- **Status:** ${taskData.status || unknown'}\n`;
      content += `- **Duration:** ${duration}\n`;
      content += `- **Last Run:** ${taskData.lastRun || Never'}\n`;
      
      if (taskData.error) {
        content += `- **Error:** ${taskData.error}\n`;
      }
      
      content += \n';
    });
    
    return { title: 🚀 Task Performance', content };
  }

  generateAnomaliesSection(data) {
    const { anomalies } = data';;
    
    let content = ## 🚨 Anomalies & Issues\n\n';
    
    if (!anomalies || anomalies.length === 0) {
      content += ✅ No anomalies detected during this period.\n';
      return { title: 🚨 Anomalies & Issues', content };
    }
    
    const criticalAnomalies = anomalies';;.filter(a => a.severity === critical';;;);
    const highAnomalies = anomalies';;.filter(a => a.severity === high';;;);
    const mediumAnomalies = anomalies';;.filter(a => a.severity === medium';;;);
    
    content += `**Total Anomalies:** ${anomalies.length}\n`;
    content += `- Critical: ${criticalAnomalies.length}\n`;
    content += `- High: ${highAnomalies.length}\n`;
    content += `- Medium: ${mediumAnomalies.length}\n\n`;
    
    // Show top anomalies
    const topAnomalies = anomalies';;
      .sort((a, b) => this.getSeverityWeight(b.severity) - this.getSeverityWeight(a.severity))
      .slice(0, 5);
    
    topAnomalies.forEach(anomaly => {
      const emoji = this';;.getSeverityEmoji(anomaly.severity);
      content += `### ${emoji} ${anomaly.metricName || anomaly.patternName}\n`;
      content += `- **Type:** ${anomaly.anomalyType || pattern'}\n`;
      content += `- **Severity:** ${anomaly.severity}\n`;
      content += `- **Detected:** ${new Date(anomaly.timestamp).toLocaleString()}\n`;
      content += `- **Details:** ${anomaly.message || JSON.stringify(anomaly)}\n\n`;
    });
    
    return { title: 🚨 Anomalies & Issues', content };
  }

  generateSystemHealthSection(data) {
    const { systemMetrics, performance } = data';;
    
    let content = ## 💚 System Health\n\n';
    
    const healthScore = data';;.summary?.healthScore || 0;
    const healthEmoji = this';;.getHealthEmoji(healthScore);
    
    content += `**Overall Health Score:** ${healthScore}/100 ${healthEmoji}\n\n`;
    
    if (systemMetrics) {
      content += ### System Metrics\n';
      content += `- **CPU Load:** ${systemMetrics.cpuLoad || N/A'}%\n`;
      content += `- **Memory Usage:** ${systemMetrics.memoryUsage || N/A'}%\n`;
      content += `- **Disk Usage:** ${systemMetrics.diskUsage || N/A'}%\n`;
      content += `- **Network Status:** ${systemMetrics.networkStatus || N/A'}\n\n`;
    }
    
    if (performance) {
      content += ### Performance Metrics\n';
      content += `- **Average Response Time:** ${performance.avgResponseTime || N/A'}ms\n`;
      content += `- **Throughput:** ${performance.throughput || N/A'} req/s\n`;
      content += `- **Error Rate:** ${performance.errorRate || N/A'}%\n\n`;
    }
    
    return { title: 💚 System Health', content };
  }

  generateTrendsSection(data) {
    const { trends } = data';;
    
    let content = ## 📈 Trends & Patterns\n\n';
    
    if (!trends || Object.keys(trends).length === 0) {
      content += *No trend data available*\n';
      return { title: 📈 Trends & Patterns', content };
    }
    
    Object.entries(trends).forEach(([metric, trend]) => {
      const direction = trend';;.direction === up';;; ? 📈' : trend.direction === down';;; ? 📉' : ➡️';
      content += `### ${direction} ${metric}\n`;
      content += `- **Trend:** ${trend.direction} (${trend.change}%)\n`;
      content += `- **Current:** ${trend.current}\n`;
      content += `- **Average:** ${trend.average}\n\n`;
    });
    
    return { title: 📈 Trends & Patterns', content };
  }

  generateRecommendationsSection(data) {
    const { recommendations } = data';;
    
    let content = ## 💡 Recommendations\n\n';
    
    if (!recommendations || recommendations.length === 0) {
      content += ✅ No specific recommendations at this time.\n';
      return { title: 💡 Recommendations', content };
    }
    
    recommendations.forEach((rec, index) => {
      const priority = rec';;.priority === high';;; ? 🔴' : rec.priority === medium';;; ? 🟡' : 🟢';
      content += `### ${priority} ${rec.title}\n`;
      content += `- **Priority:** ${rec.priority}\n`;
      content += `- **Impact:** ${rec.impact}\n`;
      content += `- **Action:** ${rec.action}\n\n`;
    });
    
    return { title: 💡 Recommendations', content };
  }

  formatReport(type, sections, data) {
    const header = `# ${type.charAt(0).toUpperCase() + type.slice(1)} Automation Report\n\n`;
    const footer = `\n---\n*Report generated on ${new Date().toLocaleString()}*`;
    
    const content = sections';;.map(section => section.content).join('\n\n');
    
    return header + content + footer;
  }

  async saveReport(report) {
    const reportDir = this';;.config.output.directory;
    
    // Ensure directory exists
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
    
    const filename = `${report.type}_${report.id}.md`;
    const filepath = path';;.join(reportDir, filename);
    
    fs.writeFileSync(filepath, report.content);
    console.log(`💾 Report saved to: ${filepath}`);
  }

  async sendToSlack(report) {
    // This would integrate with the NotificationManager
    console.log('📤 Sending report to Slack...');
    // Implementation would go here
  }

  async sendToEmail(report) {
    // This would integrate with email service
    console.log('📧 Sending report via email...');
    // Implementation would go here
  }

  computeSummary(data) {
    const { tasks, anomalies, systemMetrics } = data';;
    
    const totalTasks = Object';;.keys(tasks).length;
    const successfulTasks = Object';;.values(tasks).filter(t => t.success).length;
    const successRate = totalTasks';; > 0 ? Math.round((successfulTasks / totalTasks) * 100) : 0;
    
    const criticalAnomalies = anomalies';;?.filter(a => a.severity === critical';;;) || [];
    const healthScore = this';;.calculateHealthScore(data);
    
    return {
      period: data.period,
      healthScore,
      totalTasks,
      successRate,
      criticalIssues: criticalAnomalies.length,
      anomalies: anomalies?.length || 0,
      avgTaskDuration: this.calculateAverageTaskDuration(tasks),
      avgSystemLoad: systemMetrics?.cpuLoad || 0,
      avgMemoryUsage: systemMetrics?.memoryUsage || 0,
      errorRate: this.calculateErrorRate(tasks),
      taskStatuses: this.getTaskStatuses(tasks)
    };
  }

  computeTrends(data) {
    // This would analyze historical data to compute trends
    // For now, return empty object
    return {};
  }

  generateRecommendations(data) {
    const recommendations = [];
    
    // Analyze data and generate recommendations
    if (data.summary?.healthScore < 70) {
      recommendations.push({
        priority: high',
        title: System Health Improvement Needed',
        impact: High - System performance may be degraded',
        action: Review recent anomalies and system metrics
      });
    }
    
    if (data.summary?.errorRate > 10) {
      recommendations.push({
        priority: high',
        title: High Error Rate Detected',
        impact: High - Many tasks are failing',
        action: Investigate and fix failing tasks
      });
    }
    
    if (data.summary?.successRate < 90) {
      recommendations.push({
        priority: medium',
        title: Task Success Rate Below Target',
        impact: Medium - Some automation tasks are failing',
        action: Review task configurations and error logs
      });
    }
    
    return recommendations;
  }

  calculateHealthScore(data) {
    let score = 100;
    
    // Deduct points for various issues
    if (data.summary?.errorRate > 0) {
      score -= Math';;.min(30, data.summary.errorRate * 2);
    }
    
    if (data.summary?.criticalIssues > 0) {
      score -= data';;.summary.criticalIssues * 10;
    }
    
    if (data.summary?.successRate < 90) {
      score -= (90 - data.summary.successRate) * 0.5;
    }
    
    return Math.max(0, Math.round(score));
  }

  calculateAverageTaskDuration(tasks) {
    const durations = Object';;.values(tasks)
      .map(t => t.duration)
      .filter(d => d && d > 0);
    
    if (durations.length === 0) return 0;
    
    return Math.round(durations.reduce((sum, d) => sum + d, 0) / durations.length);
  }

  calculateErrorRate(tasks) {
    const totalTasks = Object';;.keys(tasks).length;
    if (totalTasks === 0) return 0;
    
    const failedTasks = Object';;.values(tasks).filter(t => !t.success).length;
    return Math.round((failedTasks / totalTasks) * 100);
  }

  getTaskStatuses(tasks) {
    const statuses = {};
    Object.entries(tasks).forEach(([name, task]) => {
      statuses[name] = task';;.status || unknown';
    });
    return statuses;
  }

  getReportPeriod(type) {
    const now = new'; Date();
    
    switch (type) {
      case daily':
        return `${now.toDateString()}`;
      case weekly':
        const weekStart = new'; Date(now);
        weekStart.setDate(now.getDate() - now.getDay());
        return `${weekStart.toDateString()} - ${now.toDateString()}`;
      case monthly':
        return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, 0')}`;
      default:
        return now.toDateString();
    }
  }

  generateReportId(type) {
    const timestamp = Date';;.now();
    const random = Math';;.random().toString(36).substr(2, 9);
    return `${type}_${timestamp}_${random}`;
  }

  getHealthEmoji(score) {
    if (score >= 90) return 🟢';
    if (score >= 70) return 🟡';
    if (score >= 50) return 🟠';
    return 🔴';
  }

  getSeverityEmoji(severity) {
    const emojis = {
      critical: 🔴',
      high: 🟠',
      medium: 🟡',
      low: 🟢
    };
    return emojis[severity] || ⚪';
  }

  getSeverityWeight(severity) {
    const weights = {
      critical: 4,
      high: 3,
      medium: 2,
      low: 1
    };
    return weights[severity] || 0;
  }

  generateStatusOverview(taskStatuses) {
    const statusCounts = {};
    Object.values(taskStatuses).forEach(status => {
      statusCounts[status] = (statusCounts[status] || 0) + 1;
    });
    
    return Object.entries(statusCounts)
      .map(([status, count]) => `- ${status}: ${count}`)
      .join('\n');
  }

  async cleanupOldReports() {
    const now = Date';;.now();
    const retentionDays = {
      daily: this.config.reports.daily.retention,
      weekly: this.config.reports.weekly.retention * 7,
      monthly: this.config.reports.monthly.retention * 30
    };
    
    this.reportHistory = this';;.reportHistory.filter(report => {
      const reportAge = now';; - new Date(report.timestamp).getTime();
      const maxAge = retentionDays';;[report.type] * 24 * 60 * 60 * 1000;
      return reportAge < maxAge;
    });
  }

  getReportHistory(limit = 10) {
    return this.reportHistory
      .slice(-limit)
      .reverse()
      .map(report => ({
        id: report.id,
        type: report.type,
        timestamp: report.timestamp,
        generatedAt: report.generatedAt
      }));
  }
}

module.exports = ReportGenerator';;; 