const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cron = require('node-cron');
const nodemailer = require('nodemailer');

class LinkMonitorAgent {
  constructor() {
    this.agentId = process.env.AGENT_ID || `link-monitor-${Date.now()}`;
    this.agentType = process.env.AGENT_TYPE || 'link-monitor';
    this.baseUrl = process.env.BASE_URL || 'https://ziontechgroup.netlify.app';
    this.config = {
      checkInterval: parseInt(process.env.checkInterval) || 300000, // 5 minutes
      alertThreshold: parseInt(process.env.alertThreshold) || 5,
      reportGeneration: process.env.reportGeneration === 'true',
      emailAlerts: process.env.emailAlerts === 'true'
    };
    
    this.stats = {
      linksChecked: 0,
      brokenLinksFound: 0,
      linksFixed: 0,
      errors: 0
    };
    
    this.performance = {
      tasksCompleted: 0,
      tasksFailed: 0,
      avgResponseTime: 0,
      successRate: 0
    };
    
    this.monitoredLinks = new Map();
    this.alertHistory = [];
    this.healthMetrics = {
      totalLinks: 0,
      healthyLinks: 0,
      brokenLinks: 0,
      slowLinks: 0,
      lastCheck: null
    };
    
    this.ensureDirectories();
  }

  ensureDirectories() {
    const directories = [
      'link-monitoring',
      'link-alerts',
      'link-reports',
      'link-logs'
    ];

    directories.forEach(dir => {
      const dirPath = path.join(__dirname, '..', dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  async initialize() {
    console.log(`📊 Initializing Link Monitor Agent: ${this.agentId}`);
    
    try {
      // Load existing monitored links
      await this.loadMonitoredLinks();
      
      // Initialize email transporter if alerts are enabled
      if (this.config.emailAlerts) {
        await this.initializeEmailTransporter();
      }
      
      console.log('✅ Link Monitor Agent initialized successfully');
      return true;
    } catch (error) {
      console.error('❌ Failed to initialize Link Monitor Agent:', error);
      return false;
    }
  }

  async start() {
    console.log(`🚀 Starting Link Monitor Agent: ${this.agentId}`);
    
    if (!await this.initialize()) {
      return false;
    }

    // Start continuous monitoring
    this.startContinuousMonitoring();
    
    return true;
  }

  startContinuousMonitoring() {
    // Start monitoring at the configured interval
    cron.schedule(`*/${Math.floor(this.config.checkInterval / 60000)} * * * *`, async () => {
      try {
        await this.performHealthCheck();
      } catch (error) {
        console.error('Error in health check:', error);
        this.stats.errors++;
      }
    });

    // Also perform initial health check
    this.performHealthCheck();
  }

  async performHealthCheck() {
    console.log('🔍 Performing link health check...');
    
    try {
      const startTime = Date.now();
      
      // Get all monitored links
      const linksToCheck = Array.from(this.monitoredLinks.values());
      
      if (linksToCheck.length === 0) {
        console.log('📋 No links to monitor, loading from previous reports...');
        await this.loadLinksFromReports();
      }
      
      // Perform health checks
      const healthResults = await this.checkLinksHealth(linksToCheck);
      
      // Update health metrics
      this.updateHealthMetrics(healthResults);
      
      // Check for alerts
      await this.checkForAlerts(healthResults);
      
      // Generate monitoring report
      await this.generateMonitoringReport(healthResults);
      
      const responseTime = Date.now() - startTime;
      this.performance.avgResponseTime = responseTime;
      this.performance.tasksCompleted++;
      this.updatePerformanceMetrics();
      
      console.log(`✅ Health check completed. Checked: ${healthResults.length}, Issues: ${this.healthMetrics.brokenLinks}`);
      
    } catch (error) {
      console.error('Error performing health check:', error);
      this.stats.errors++;
      this.performance.tasksFailed++;
    }
  }

  async loadLinksFromReports() {
    const reportsDir = path.join(__dirname, '..', 'link-reports');
    
    if (!fs.existsSync(reportsDir)) {
      return;
    }
    
    const files = fs.readdirSync(reportsDir).filter(file => 
      file.startsWith('validation-report-') || file.startsWith('fix-report-')
    );
    
    const allLinks = new Set();
    
    for (const file of files.slice(-5)) { // Last 5 reports
      try {
        const filePath = path.join(reportsDir, file);
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        
        if (data.brokenLinks) {
          data.brokenLinks.forEach(link => allLinks.add(link.url));
        }
        
        if (data.fixedLinks) {
          data.fixedLinks.forEach(link => allLinks.add(link.originalUrl));
        }
        
      } catch (error) {
        console.error(`Error loading links from ${file}:`, error);
      }
    }
    
    // Add links to monitoring
    for (const url of allLinks) {
      this.monitoredLinks.set(url, {
        url,
        lastCheck: null,
        status: 'unknown',
        responseTime: 0,
        statusCode: 0,
        errorCount: 0,
        lastError: null
      });
    }
    
    console.log(`📋 Loaded ${this.monitoredLinks.size} links for monitoring`);
  }

  async checkLinksHealth(links) {
    const results = [];
    const concurrentChecks = 10;
    
    console.log(`🔍 Checking health of ${links.length} links...`);
    
    for (let i = 0; i < links.length; i += concurrentChecks) {
      const batch = links.slice(i, i + concurrentChecks);
      const batchPromises = batch.map(link => this.checkSingleLinkHealth(link));
      
      const batchResults = await Promise.allSettled(batchPromises);
      
      for (const result of batchResults) {
        if (result.status === 'fulfilled') {
          results.push(result.value);
        } else {
          console.error('Link health check error:', result.reason);
          this.stats.errors++;
        }
      }
    }
    
    return results;
  }

  async checkSingleLinkHealth(link) {
    const startTime = Date.now();
    
    try {
      const response = await axios.head(link.url, {
        timeout: 10000,
        maxRedirects: 5,
        validateStatus: () => true
      });
      
      const responseTime = Date.now() - startTime;
      
      const result = {
        url: link.url,
        statusCode: response.status,
        responseTime,
        isHealthy: response.status < 400,
        isSlow: responseTime > 3000,
        timestamp: new Date().toISOString(),
        finalUrl: response.request.res.responseUrl || link.url
      };
      
      // Update monitored link
      const monitoredLink = this.monitoredLinks.get(link.url);
      if (monitoredLink) {
        monitoredLink.lastCheck = new Date().toISOString();
        monitoredLink.status = result.isHealthy ? 'healthy' : 'broken';
        monitoredLink.responseTime = responseTime;
        monitoredLink.statusCode = response.status;
        
        if (!result.isHealthy) {
          monitoredLink.errorCount++;
          monitoredLink.lastError = `HTTP ${response.status}`;
        } else {
          monitoredLink.errorCount = 0;
          monitoredLink.lastError = null;
        }
      }
      
      this.stats.linksChecked++;
      
      return result;
      
    } catch (error) {
      const responseTime = Date.now() - startTime;
      
      const result = {
        url: link.url,
        statusCode: 0,
        responseTime,
        isHealthy: false,
        isSlow: false,
        error: error.message,
        timestamp: new Date().toISOString()
      };
      
      // Update monitored link
      const monitoredLink = this.monitoredLinks.get(link.url);
      if (monitoredLink) {
        monitoredLink.lastCheck = new Date().toISOString();
        monitoredLink.status = 'broken';
        monitoredLink.responseTime = responseTime;
        monitoredLink.statusCode = 0;
        monitoredLink.errorCount++;
        monitoredLink.lastError = error.message;
      }
      
      this.stats.linksChecked++;
      this.stats.brokenLinksFound++;
      
      return result;
    }
  }

  updateHealthMetrics(results) {
    this.healthMetrics.totalLinks = results.length;
    this.healthMetrics.healthyLinks = results.filter(r => r.isHealthy).length;
    this.healthMetrics.brokenLinks = results.filter(r => !r.isHealthy).length;
    this.healthMetrics.slowLinks = results.filter(r => r.isSlow).length;
    this.healthMetrics.lastCheck = new Date().toISOString();
  }

  async checkForAlerts(results) {
    const brokenLinks = results.filter(r => !r.isHealthy);
    const slowLinks = results.filter(r => r.isSlow);
    
    // Check for broken links alert
    if (brokenLinks.length >= this.config.alertThreshold) {
      await this.createAlert('broken_links', {
        count: brokenLinks.length,
        threshold: this.config.alertThreshold,
        links: brokenLinks.slice(0, 10) // Limit to first 10
      });
    }
    
    // Check for slow links alert
    if (slowLinks.length >= this.config.alertThreshold) {
      await this.createAlert('slow_links', {
        count: slowLinks.length,
        threshold: this.config.alertThreshold,
        links: slowLinks.slice(0, 10)
      });
    }
    
    // Check for high error rate
    const errorRate = (this.stats.errors / this.stats.linksChecked) * 100;
    if (errorRate > 10) {
      await this.createAlert('high_error_rate', {
        errorRate: errorRate.toFixed(2),
        errors: this.stats.errors,
        totalChecks: this.stats.linksChecked
      });
    }
  }

  async createAlert(type, data) {
    const alert = {
      id: `alert-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      type,
      data,
      timestamp: new Date().toISOString(),
      agentId: this.agentId,
      severity: this.getAlertSeverity(type, data)
    };
    
    this.alertHistory.push(alert);
    
    // Save alert
    await this.saveAlert(alert);
    
    // Send email alert if enabled
    if (this.config.emailAlerts) {
      await this.sendEmailAlert(alert);
    }
    
    console.log(`🚨 Created alert: ${type} - ${data.count || data.errorRate}%`);
  }

  getAlertSeverity(type, data) {
    switch (type) {
      case 'broken_links':
        return data.count > 20 ? 'critical' : data.count > 10 ? 'high' : 'medium';
      case 'slow_links':
        return data.count > 15 ? 'high' : 'medium';
      case 'high_error_rate':
        return data.errorRate > 20 ? 'critical' : 'high';
      default:
        return 'medium';
    }
  }

  async saveAlert(alert) {
    const alertPath = path.join(__dirname, '..', 'link-alerts', `alert-${Date.now()}.json`);
    fs.writeFileSync(alertPath, JSON.stringify(alert, null, 2));
  }

  async sendEmailAlert(alert) {
    if (!this.emailTransporter) {
      console.warn('Email transporter not initialized, skipping email alert');
      return;
    }
    
    try {
      const subject = `Link Monitor Alert: ${alert.type}`;
      const body = this.generateEmailBody(alert);
      
      await this.emailTransporter.sendMail({
        from: process.env.ALERT_EMAIL_FROM || 'noreply@ziontechgroup.netlify.app',
        to: process.env.ALERT_EMAIL_TO || 'admin@ziontechgroup.netlify.app',
        subject,
        html: body
      });
      
      console.log(`📧 Email alert sent: ${alert.type}`);
      
    } catch (error) {
      console.error('Error sending email alert:', error);
    }
  }

  generateEmailBody(alert) {
    const severityColors = {
      critical: '#dc3545',
      high: '#fd7e14',
      medium: '#ffc107',
      low: '#28a745'
    };
    
    const color = severityColors[alert.severity] || '#6c757d';
    
    let body = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: ${color}; color: white; padding: 20px; border-radius: 5px 5px 0 0;">
          <h2>🔗 Link Monitor Alert</h2>
          <p><strong>Type:</strong> ${alert.type}</p>
          <p><strong>Severity:</strong> ${alert.severity.toUpperCase()}</p>
          <p><strong>Time:</strong> ${new Date(alert.timestamp).toLocaleString()}</p>
        </div>
        <div style="padding: 20px; border: 1px solid #ddd; border-radius: 0 0 5px 5px;">
    `;
    
    switch (alert.type) {
      case 'broken_links':
        body += `
          <h3>Broken Links Detected</h3>
          <p><strong>Count:</strong> ${alert.data.count} (threshold: ${alert.data.threshold})</p>
          <h4>Affected Links:</h4>
          <ul>
        `;
        alert.data.links.forEach(link => {
          body += `<li>${link.url} (HTTP ${link.statusCode})</li>`;
        });
        body += `</ul>`;
        break;
        
      case 'slow_links':
        body += `
          <h3>Slow Links Detected</h3>
          <p><strong>Count:</strong> ${alert.data.count} (threshold: ${alert.data.threshold})</p>
          <h4>Slow Links:</h4>
          <ul>
        `;
        alert.data.links.forEach(link => {
          body += `<li>${link.url} (${link.responseTime}ms)</li>`;
        });
        body += `</ul>`;
        break;
        
      case 'high_error_rate':
        body += `
          <h3>High Error Rate</h3>
          <p><strong>Error Rate:</strong> ${alert.data.errorRate}%</p>
          <p><strong>Errors:</strong> ${alert.data.errors}</p>
          <p><strong>Total Checks:</strong> ${alert.data.totalChecks}</p>
        `;
        break;
    }
    
    body += `
        </div>
        <div style="text-align: center; margin-top: 20px; color: #666;">
          <p>This alert was generated by the Link Monitor Agent</p>
        </div>
      </div>
    `;
    
    return body;
  }

  async initializeEmailTransporter() {
    try {
      this.emailTransporter = nodemailer.createTransporter({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT) || 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });
      
      console.log('📧 Email transporter initialized');
    } catch (error) {
      console.error('Error initializing email transporter:', error);
    }
  }

  async loadMonitoredLinks() {
    const linksPath = path.join(__dirname, '..', 'link-monitoring', 'monitored-links.json');
    
    if (fs.existsSync(linksPath)) {
      try {
        const data = JSON.parse(fs.readFileSync(linksPath, 'utf8'));
        this.monitoredLinks = new Map(data.links || []);
        console.log(`📋 Loaded ${this.monitoredLinks.size} monitored links`);
      } catch (error) {
        console.error('Error loading monitored links:', error);
      }
    }
  }

  async saveMonitoredLinks() {
    const linksPath = path.join(__dirname, '..', 'link-monitoring', 'monitored-links.json');
    
    const data = {
      timestamp: new Date().toISOString(),
      agentId: this.agentId,
      links: Array.from(this.monitoredLinks.entries())
    };
    
    fs.writeFileSync(linksPath, JSON.stringify(data, null, 2));
  }

  async generateMonitoringReport(results) {
    const reportPath = path.join(__dirname, '..', 'link-reports', `monitoring-report-${Date.now()}.json`);
    
    const report = {
      agentId: this.agentId,
      timestamp: new Date().toISOString(),
      healthMetrics: this.healthMetrics,
      summary: {
        totalLinks: results.length,
        healthyLinks: results.filter(r => r.isHealthy).length,
        brokenLinks: results.filter(r => !r.isHealthy).length,
        slowLinks: results.filter(r => r.isSlow).length,
        healthScore: ((results.filter(r => r.isHealthy).length / results.length) * 100).toFixed(2)
      },
      alerts: this.alertHistory.slice(-10), // Last 10 alerts
      monitoredLinks: Array.from(this.monitoredLinks.values()),
      recommendations: this.generateMonitoringRecommendations()
    };
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Generated monitoring report: ${reportPath}`);
  }

  generateMonitoringRecommendations() {
    const recommendations = [];
    
    if (this.healthMetrics.brokenLinks > 0) {
      recommendations.push({
        type: 'immediate',
        message: `${this.healthMetrics.brokenLinks} broken links need immediate attention`,
        action: 'fix_broken_links'
      });
    }
    
    if (this.healthMetrics.slowLinks > 0) {
      recommendations.push({
        type: 'performance',
        message: `${this.healthMetrics.slowLinks} slow links affecting user experience`,
        action: 'optimize_slow_links'
      });
    }
    
    const healthScore = (this.healthMetrics.healthyLinks / this.healthMetrics.totalLinks) * 100;
    if (healthScore < 90) {
      recommendations.push({
        type: 'maintenance',
        message: `Overall health score is ${healthScore.toFixed(2)}%, below target of 90%`,
        action: 'improve_overall_health'
      });
    }
    
    return recommendations;
  }

  updatePerformanceMetrics() {
    const totalTasks = this.performance.tasksCompleted + this.performance.tasksFailed;
    this.performance.successRate = totalTasks > 0 ? 
      (this.performance.tasksCompleted / totalTasks) * 100 : 0;
  }

  async cleanup() {
    // Save monitored links
    await this.saveMonitoredLinks();
    console.log(`🧹 Link Monitor Agent ${this.agentId} cleaned up`);
  }

  getStats() {
    return {
      agentId: this.agentId,
      type: this.agentType,
      stats: this.stats,
      performance: this.performance,
      healthMetrics: this.healthMetrics,
      timestamp: new Date().toISOString()
    };
  }
}

// Start the agent if this file is run directly
if (require.main === module) {
  const agent = new LinkMonitorAgent();
  
  agent.start().then(() => {
    console.log('Link Monitor Agent started successfully');
  }).catch(error => {
    console.error('Failed to start Link Monitor Agent:', error);
    process.exit(1);
  });

  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    console.log('Received SIGINT, shutting down gracefully...');
    await agent.cleanup();
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    console.log('Received SIGTERM, shutting down gracefully...');
    await agent.cleanup();
    process.exit(0);
  });
}

module.exports = LinkMonitorAgent; 