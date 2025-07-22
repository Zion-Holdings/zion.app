const { EventEmitter } = require('events');
const https = require('https');
const http = require('http');

class NotificationManager extends EventEmitter {
  constructor(config = {}) {
    super();
    
    this.config = {
      // Notification channels
      channels: {
        slack: {
          enabled: false,
          webhookUrl: process.env.SLACK_WEBHOOK_URL,
          channel: process.env.SLACK_CHANNEL || '#automation',
          username: 'Automation Bot',
          icon: ':robot_face:'
        },
        email: {
          enabled: false,
          smtp: {
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT || 587,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS
            }
          },
          from: process.env.EMAIL_FROM,
          to: process.env.EMAIL_TO
        },
        webhook: {
          enabled: false,
          url: process.env.WEBHOOK_URL,
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        },
        console: {
          enabled: true
        }
      },
      
      // Notification levels
      levels: {
        debug: 0,
        info: 1,
        warning: 2,
        error: 3,
        critical: 4
      },
      
      // Filtering
      minLevel: 'info',
      includeSystemInfo: true,
      
      // Rate limiting
      rateLimit: {
        enabled: true,
        maxPerHour: 10,
        maxPerDay: 100
      },
      
      ...config
    };
    
    // Rate limiting state
    this.notificationCounts = {
      hourly: new Map(),
      daily: new Map()
    };
    
    // Initialize channels
    this.initializeChannels();
  }

  initializeChannels() {
    // Validate and initialize each channel
    for (const [channelName, channelConfig] of Object.entries(this.config.channels)) {
      if (channelConfig.enabled) {
        this.validateChannel(channelName, channelConfig);
      }
    }
  }

  validateChannel(channelName, config) {
    switch (channelName) {
      case 'slack':
        if (!config.webhookUrl) {
          console.warn('⚠️ Slack webhook URL not configured, disabling Slack notifications');
          config.enabled = false;
        }
        break;
        
      case 'email':
        if (!config.smtp.host || !config.smtp.auth.user || !config.smtp.auth.pass) {
          console.warn('⚠️ Email SMTP configuration incomplete, disabling email notifications');
          config.enabled = false;
        }
        break;
        
      case 'webhook':
        if (!config.url) {
          console.warn('⚠️ Webhook URL not configured, disabling webhook notifications');
          config.enabled = false;
        }
        break;
    }
  }

  async notify(level, title, message, data = {}) {
    // Check minimum level
    if (this.config.levels[level] < this.config.levels[this.config.minLevel]) {
      return;
    }
    
    // Check rate limiting
    if (this.config.rateLimit.enabled && !this.checkRateLimit(level)) {
      console.warn('⚠️ Rate limit exceeded, notification suppressed');
      return;
    }
    
    // Create notification object
    const notification = {
      level,
      title,
      message,
      data,
      timestamp: new Date().toISOString(),
      systemInfo: this.config.includeSystemInfo ? this.getSystemInfo() : null
    };
    
    // Send to all enabled channels
    const promises = [];
    
    for (const [channelName, channelConfig] of Object.entries(this.config.channels)) {
      if (channelConfig.enabled) {
        promises.push(this.sendToChannel(channelName, notification));
      }
    }
    
    // Wait for all notifications to be sent
    try {
      await Promise.allSettled(promises);
      this.emit('notificationSent', notification);
    } catch (error) {
      console.error('❌ Error sending notifications:', error);
      this.emit('notificationError', error);
    }
  }

  async sendToChannel(channelName, notification) {
    try {
      switch (channelName) {
        case 'slack':
          await this.sendToSlack(notification);
          break;
        case 'email':
          await this.sendToEmail(notification);
          break;
        case 'webhook':
          await this.sendToWebhook(notification);
          break;
        case 'console':
          this.sendToConsole(notification);
          break;
      }
    } catch (error) {
      console.error(`❌ Failed to send notification to ${channelName}:`, error);
      throw error;
    }
  }

  async sendToSlack(notification) {
    const config = this.config.channels.slack;
    
    const payload = {
      channel: config.channel,
      username: config.username,
      icon_emoji: config.icon,
      attachments: [{
        color: this.getSlackColor(notification.level),
        title: notification.title,
        text: notification.message,
        fields: this.formatSlackFields(notification),
        footer: 'Automation System',
        ts: Math.floor(Date.now() / 1000)
      }]
    };
    
    await this.makeHttpRequest(config.webhookUrl, 'POST', payload);
  }

  getSlackColor(level) {
    const colors = {
      debug: '#36a64f',
      info: '#36a64f',
      warning: '#ffaa00',
      error: '#ff0000',
      critical: '#8b0000'
    };
    return colors[level] || colors.info;
  }

  formatSlackFields(notification) {
    const fields = [];
    
    if (notification.data) {
      for (const [key, value] of Object.entries(notification.data)) {
        fields.push({
          title: key.charAt(0).toUpperCase() + key.slice(1),
          value: typeof value === 'object' ? JSON.stringify(value) : String(value),
          short: true
        });
      }
    }
    
    if (notification.systemInfo) {
      fields.push({
        title: 'System Info',
        value: `Load: ${notification.systemInfo.load.toFixed(2)}, Memory: ${notification.systemInfo.memory.toFixed(2)}`,
        short: true
      });
    }
    
    return fields;
  }

  async sendToEmail(notification) {
    const config = this.config.channels.email;
    
    // This is a simplified email implementation
    // In production, you'd use a proper email library like nodemailer
    const emailContent = this.formatEmailContent(notification);
    
    console.log('📧 Email notification (simulated):', emailContent);
    
    // For now, just log the email content
    // In production, implement actual SMTP sending
  }

  formatEmailContent(notification) {
    return `
Subject: [${notification.level.toUpperCase()}] ${notification.title}

${notification.message}

Details:
${Object.entries(notification.data).map(([k, v]) => `${k}: ${v}`).join('\n')}

Timestamp: ${notification.timestamp}
System Info: ${notification.systemInfo ? JSON.stringify(notification.systemInfo) : 'N/A'}

---
Sent by Automation System
    `.trim();
  }

  async sendToWebhook(notification) {
    const config = this.config.channels.webhook;
    
    await this.makeHttpRequest(
      config.url,
      config.method,
      notification,
      config.headers
    );
  }

  sendToConsole(notification) {
    const emoji = this.getConsoleEmoji(notification.level);
    const color = this.getConsoleColor(notification.level);
    
    console.log(`${emoji} [${notification.level.toUpperCase()}] ${notification.title}`);
    console.log(`   ${notification.message}`);
    
    if (notification.data && Object.keys(notification.data).length > 0) {
      console.log(`   Data:`, notification.data);
    }
    
    if (notification.systemInfo) {
      console.log(`   System: Load ${notification.systemInfo.load.toFixed(2)}, Memory ${notification.systemInfo.memory.toFixed(2)}`);
    }
  }

  getConsoleEmoji(level) {
    const emojis = {
      debug: '🔍',
      info: 'ℹ️',
      warning: '⚠️',
      error: '❌',
      critical: '🚨'
    };
    return emojis[level] || emojis.info;
  }

  getConsoleColor(level) {
    const colors = {
      debug: '\x1b[36m', // Cyan
      info: '\x1b[32m',  // Green
      warning: '\x1b[33m', // Yellow
      error: '\x1b[31m',   // Red
      critical: '\x1b[35m' // Magenta
    };
    return colors[level] || colors.info;
  }

  async makeHttpRequest(url, method, data, headers = {}) {
    return new Promise((resolve, reject) => {
      const urlObj = new URL(url);
      const options = {
        hostname: urlObj.hostname,
        port: urlObj.port || (urlObj.protocol === 'https:' ? 443 : 80),
        path: urlObj.pathname + urlObj.search,
        method: method,
        headers: {
          'Content-Type': 'application/json',
          ...headers
        }
      };
      
      const request = (urlObj.protocol === 'https:' ? https : http).request(options, (response) => {
        let responseData = '';
        
        response.on('data', (chunk) => {
          responseData += chunk;
        });
        
        response.on('end', () => {
          if (response.statusCode >= 200 && response.statusCode < 300) {
            resolve(responseData);
          } else {
            reject(new Error(`HTTP ${response.statusCode}: ${responseData}`));
          }
        });
      });
      
      request.on('error', (error) => {
        reject(error);
      });
      
      if (data) {
        request.write(JSON.stringify(data));
      }
      
      request.end();
    });
  }

  checkRateLimit(level) {
    const now = Date.now();
    const hourKey = Math.floor(now / (60 * 60 * 1000));
    const dayKey = Math.floor(now / (24 * 60 * 60 * 1000));
    
    // Clean old entries
    this.cleanupRateLimitCounts();
    
    // Check hourly limit
    const hourlyCount = this.notificationCounts.hourly.get(hourKey) || 0;
    if (hourlyCount >= this.config.rateLimit.maxPerHour) {
      return false;
    }
    
    // Check daily limit
    const dailyCount = this.notificationCounts.daily.get(dayKey) || 0;
    if (dailyCount >= this.config.rateLimit.maxPerDay) {
      return false;
    }
    
    // Update counts
    this.notificationCounts.hourly.set(hourKey, hourlyCount + 1);
    this.notificationCounts.daily.set(dayKey, dailyCount + 1);
    
    return true;
  }

  cleanupRateLimitCounts() {
    const now = Date.now();
    const currentHour = Math.floor(now / (60 * 60 * 1000));
    const currentDay = Math.floor(now / (24 * 60 * 60 * 1000));
    
    // Remove old hourly entries
    for (const [key] of this.notificationCounts.hourly) {
      if (key < currentHour) {
        this.notificationCounts.hourly.delete(key);
      }
    }
    
    // Remove old daily entries
    for (const [key] of this.notificationCounts.daily) {
      if (key < currentDay) {
        this.notificationCounts.daily.delete(key);
      }
    }
  }

  getSystemInfo() {
    const usage = process.memoryUsage();
    const cpuUsage = process.cpuUsage();
    
    return {
      load: (cpuUsage.user + cpuUsage.system) / 1000000,
      memory: usage.heapUsed / usage.heapTotal,
      uptime: process.uptime(),
      pid: process.pid,
      version: process.version
    };
  }

  // Convenience methods for different notification levels
  async debug(title, message, data = {}) {
    return this.notify('debug', title, message, data);
  }

  async info(title, message, data = {}) {
    return this.notify('info', title, message, data);
  }

  async warning(title, message, data = {}) {
    return this.notify('warning', title, message, data);
  }

  async error(title, message, data = {}) {
    return this.notify('error', title, message, data);
  }

  async critical(title, message, data = {}) {
    return this.notify('critical', title, message, data);
  }

  // Specialized notification methods
  async taskStarted(taskName, data = {}) {
    return this.info('Task Started', `Task "${taskName}" has started`, {
      task: taskName,
      ...data
    });
  }

  async taskCompleted(taskName, duration, data = {}) {
    return this.info('Task Completed', `Task "${taskName}" completed successfully`, {
      task: taskName,
      duration: `${duration}ms`,
      ...data
    });
  }

  async taskFailed(taskName, error, data = {}) {
    return this.error('Task Failed', `Task "${taskName}" failed`, {
      task: taskName,
      error: error.message,
      ...data
    });
  }

  async systemHealth(health, data = {}) {
    const level = health.isHealthy ? 'info' : 'warning';
    return this.notify(level, 'System Health', `System health check: ${health.isHealthy ? 'Healthy' : 'Issues detected'}`, {
      health,
      ...data
    });
  }

  async securityAlert(issues, data = {}) {
    return this.critical('Security Alert', `Found ${issues.length} security issues`, {
      issues,
      ...data
    });
  }

  async performanceAlert(metrics, data = {}) {
    return this.warning('Performance Alert', 'Performance degradation detected', {
      metrics,
      ...data
    });
  }

  getStatus() {
    return {
      channels: Object.fromEntries(
        Object.entries(this.config.channels).map(([name, config]) => [
          name,
          { enabled: config.enabled }
        ])
      ),
      rateLimit: {
        enabled: this.config.rateLimit.enabled,
        hourlyCount: Array.from(this.notificationCounts.hourly.values()).reduce((sum, count) => sum + count, 0),
        dailyCount: Array.from(this.notificationCounts.daily.values()).reduce((sum, count) => sum + count, 0)
      },
      minLevel: this.config.minLevel
    };
  }
}

module.exports = NotificationManager; 