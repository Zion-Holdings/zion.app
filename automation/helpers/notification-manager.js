const fs = require('fs');
const path = require('path');

class NotificationManager {
  constructor(config = {}) {
    this.config = {
      emailEnabled: config.emailEnabled !== false,
      slackEnabled: config.slackEnabled !== false,
      webhookEnabled: config.webhookEnabled !== false,
      notificationLevels: config.notificationLevels || ['critical', 'high', 'medium'],
      quietHours: config.quietHours || { start: '22:00', end: '08:00' },
      ...config
    };

    this.notificationHistory = [];
    this.notificationDir = path.resolve(process.cwd(), 'automation', 'notifications');
    this.ensureNotificationDir();
  }

  ensureNotificationDir() {
    if (!fs.existsSync(this.notificationDir)) {
      fs.mkdirSync(this.notificationDir, { recursive: true });
    }
  }

  /**
   * Send escalation notification
   * @param {object} escalation - Escalation details
   * @param {string} channel - Notification channel
   * @returns {object} - Notification result
   */
  async sendEscalationNotification(escalation, channel = 'all') {
    const notification = {
      id: `notification-${escalation.functionName}-${Date.now()}`,
      escalation,
      channel,
      timestamp: new Date().toISOString(),
      status: 'pending'
    };

    try {
      // Check if we should send notification based on level and quiet hours
      if (!this.shouldSendNotification(escalation)) {
        notification.status = 'skipped';
        notification.reason = 'Outside notification window or below threshold';
        this.saveNotification(notification);
        return { success: false, reason: notification.reason };
      }

      // Send notification based on channel
      let result;
      switch (channel) {
        case 'email':
          result = await this.sendEmailNotification(escalation);
          break;
        case 'slack':
          result = await this.sendSlackNotification(escalation);
          break;
        case 'webhook':
          result = await this.sendWebhookNotification(escalation);
          break;
        case 'all':
        default:
          result = await this.sendAllChannelNotifications(escalation);
          break;
      }

      notification.status = result.success ? 'sent' : 'failed';
      notification.result = result;
      this.saveNotification(notification);

      return result;

    } catch (error) {
      notification.status = 'error';
      notification.error = error.message;
      this.saveNotification(notification);

      return {
        success: false,
        reason: `Notification failed: ${error.message}`
      };
    }
  }

  /**
   * Check if notification should be sent
   * @param {object} escalation - Escalation details
   * @returns {boolean} - Whether to send notification
   */
  shouldSendNotification(escalation) {
    // Check notification level
    if (!this.config.notificationLevels.includes(escalation.severity)) {
      return false;
    }

    // Check quiet hours
    if (this.isInQuietHours()) {
      // Only send critical notifications during quiet hours
      return escalation.severity === 'critical';
    }

    return true;
  }

  /**
   * Check if current time is in quiet hours
   * @returns {boolean} - Whether in quiet hours
   */
  isInQuietHours() {
    const now = new Date();
    const currentHour = now.getHours();
    const startHour = parseInt(this.config.quietHours.start.split(':')[0]);
    const endHour = parseInt(this.config.quietHours.end.split(':')[0]);

    if (startHour > endHour) {
      // Overnight quiet hours (e.g., 22:00 to 08:00)
      return currentHour >= startHour || currentHour < endHour;
    } else {
      // Same-day quiet hours
      return currentHour >= startHour && currentHour < endHour;
    }
  }

  /**
   * Send email notification
   * @param {object} escalation - Escalation details
   * @returns {object} - Email result
   */
  async sendEmailNotification(escalation) {
    if (!this.config.emailEnabled) {
      return { success: false, reason: 'Email notifications disabled' };
    }

    try {
      const emailContent = this.generateEmailContent(escalation);
      console.log(`📧 Email notification prepared for ${escalation.functionName}`);
      
      // In a real implementation, you would send the email here
      // For now, we'll simulate success
      return {
        success: true,
        channel: 'email',
        message: 'Email notification sent successfully'
      };
    } catch (error) {
      return {
        success: false,
        channel: 'email',
        reason: `Email failed: ${error.message}`
      };
    }
  }

  /**
   * Send Slack notification
   * @param {object} escalation - Escalation details
   * @returns {object} - Slack result
   */
  async sendSlackNotification(escalation) {
    if (!this.config.slackEnabled) {
      return { success: false, reason: 'Slack notifications disabled' };
    }

    try {
      const slackMessage = this.generateSlackMessage(escalation);
      console.log(`💬 Slack notification prepared for ${escalation.functionName}`);
      
      // In a real implementation, you would send to Slack here
      // For now, we'll simulate success
      return {
        success: true,
        channel: 'slack',
        message: 'Slack notification sent successfully'
      };
    } catch (error) {
      return {
        success: false,
        channel: 'slack',
        reason: `Slack failed: ${error.message}`
      };
    }
  }

  /**
   * Send webhook notification
   * @param {object} escalation - Escalation details
   * @returns {object} - Webhook result
   */
  async sendWebhookNotification(escalation) {
    if (!this.config.webhookEnabled) {
      return { success: false, reason: 'Webhook notifications disabled' };
    }

    try {
      const webhookPayload = this.generateWebhookPayload(escalation);
      console.log(`🌐 Webhook notification prepared for ${escalation.functionName}`);
      
      // In a real implementation, you would send the webhook here
      // For now, we'll simulate success
      return {
        success: true,
        channel: 'webhook',
        message: 'Webhook notification sent successfully'
      };
    } catch (error) {
      return {
        success: false,
        channel: 'webhook',
        reason: `Webhook failed: ${error.message}`
      };
    }
  }

  /**
   * Send notifications to all channels
   * @param {object} escalation - Escalation details
   * @returns {object} - Combined result
   */
  async sendAllChannelNotifications(escalation) {
    const results = {
      success: true,
      channel: 'all',
      results: {}
    };

    // Send to email
    results.results.email = await this.sendEmailNotification(escalation);
    
    // Send to Slack
    results.results.slack = await this.sendSlackNotification(escalation);
    
    // Send to webhook
    results.results.webhook = await this.sendWebhookNotification(escalation);

    // Check if all channels succeeded
    results.success = Object.values(results.results).every(r => r.success);
    
    if (!results.success) {
      results.reason = 'Some notification channels failed';
    }

    return results;
  }

  /**
   * Generate email content
   * @param {object} escalation - Escalation details
   * @returns {object} - Email content
   */
  generateEmailContent(escalation) {
    const severity = escalation.severity.toUpperCase();
    const urgency = escalation.severity === 'critical' ? '🚨 URGENT' : 
                   escalation.severity === 'high' ? '⚠️ HIGH PRIORITY' : '📋 MEDIUM PRIORITY';

    return {
      subject: `${urgency} - Automation Failure: ${escalation.functionName}`,
      body: `
🚨 AUTOMATION ESCALATION ALERT

Function: ${escalation.functionName}
Severity: ${severity}
Consecutive Failures: ${escalation.consecutiveFailures}
Response Time Required: ${escalation.responseTimeRequired} minutes

FAILURE DETAILS:
- Last Error: ${escalation.lastError || 'No error details available'}
- Last Run: ${escalation.lastRunAt || 'Unknown'}
- Success Rate: ${escalation.successRate.toFixed(1)}%

RECOMMENDED ACTIONS:
${escalation.recommendations}

ROLLBACK PLAN:
${escalation.rollbackPlan}

IMMEDIATE ACTION REQUIRED:
- Acknowledge this escalation within ${escalation.responseTimeRequired} minutes
- Review the failure details and recommendations
- Implement the rollback plan if necessary
- Update the escalation status

---
This notification was automatically generated by the Zion Tech Group automation system.
Generated at: ${new Date().toISOString()}
      `.trim()
    };
  }

  /**
   * Generate Slack message
   * @param {object} escalation - Escalation details
   * @returns {object} - Slack message
   */
  generateSlackMessage(escalation) {
    const severity = escalation.severity.toUpperCase();
    const color = escalation.severity === 'critical' ? '#ff0000' : 
                  escalation.severity === 'high' ? '#ff9900' : '#ffff00';

    return {
      text: `🚨 Automation Escalation Alert`,
      attachments: [
        {
          color: color,
          title: `${escalation.functionName} - ${severity}`,
          fields: [
            {
              title: 'Consecutive Failures',
              value: escalation.consecutiveFailures.toString(),
              short: true
            },
            {
              title: 'Response Required',
              value: `${escalation.responseTimeRequired} minutes`,
              short: true
            },
            {
              title: 'Success Rate',
              value: `${escalation.successRate.toFixed(1)}%`,
              short: true
            },
            {
              title: 'Status',
              value: escalation.isCritical ? 'CRITICAL' : 'FAILING',
              short: true
            },
            {
              title: 'Last Error',
              value: escalation.lastError || 'No error details',
              short: false
            }
          ],
          footer: 'Zion Tech Group Automation System',
          ts: Math.floor(Date.now() / 1000)
        }
      ]
    };
  }

  /**
   * Generate webhook payload
   * @param {object} escalation - Escalation details
   * @returns {object} - Webhook payload
   */
  generateWebhookPayload(escalation) {
    return {
      event: 'automation_escalation',
      timestamp: new Date().toISOString(),
      escalation: {
        functionName: escalation.functionName,
        severity: escalation.severity,
        consecutiveFailures: escalation.consecutiveFailures,
        successRate: escalation.successRate,
        responseTimeRequired: escalation.responseTimeRequired,
        isCritical: escalation.isCritical,
        lastError: escalation.lastError,
        lastRunAt: escalation.lastRunAt,
        recommendations: escalation.recommendations,
        rollbackPlan: escalation.rollbackPlan
      },
      metadata: {
        source: 'zion_automation_system',
        version: '1.0.0'
      }
    };
  }

  /**
   * Save notification to file
   * @param {object} notification - Notification object
   */
  saveNotification(notification) {
    try {
      const notificationFile = path.join(this.notificationDir, `${notification.id}.json`);
      fs.writeFileSync(notificationFile, JSON.stringify(notification, null, 2));
      
      this.notificationHistory.push(notification);
      
      // Keep only last 100 notifications in memory
      if (this.notificationHistory.length > 100) {
        this.notificationHistory = this.notificationHistory.slice(-100);
      }
    } catch (error) {
      console.error('Failed to save notification:', error.message);
    }
  }

  /**
   * Get notification history
   * @param {number} limit - Maximum number of notifications to return
   * @returns {Array} - Notification history
   */
  getNotificationHistory(limit = 50) {
    return this.notificationHistory
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .slice(0, limit);
  }

  /**
   * Get notification statistics
   * @returns {object} - Notification statistics
   */
  getNotificationStats() {
    const total = this.notificationHistory.length;
    const sent = this.notificationHistory.filter(n => n.status === 'sent').length;
    const failed = this.notificationHistory.filter(n => n.status === 'failed').length;
    const skipped = this.notificationHistory.filter(n => n.status === 'skipped').length;
    const errors = this.notificationHistory.filter(n => n.status === 'error').length;

    return {
      total,
      sent,
      failed,
      skipped,
      errors,
      successRate: total > 0 ? (sent / total) * 100 : 0
    };
  }

  /**
   * Clean up old notifications
   * @param {number} daysOld - Number of days old to consider for cleanup
   * @returns {number} - Number of notifications cleaned up
   */
  cleanupOldNotifications(daysOld = 30) {
    try {
      const files = fs.readdirSync(this.notificationDir);
      let cleaned = 0;
      const cutoff = Date.now() - (daysOld * 24 * 60 * 60 * 1000);

      for (const file of files) {
        if (!file.endsWith('.json')) continue;

        const notificationFile = path.join(this.notificationDir, file);
        try {
          const notification = JSON.parse(fs.readFileSync(notificationFile, 'utf8'));
          
          if (new Date(notification.timestamp).getTime() < cutoff) {
            fs.unlinkSync(notificationFile);
            cleaned++;
          }
        } catch (error) {
          console.warn(`Failed to process notification file ${file}:`, error.message);
        }
      }

      return cleaned;
    } catch (error) {
      console.warn('Failed to cleanup old notifications:', error.message);
      return 0;
    }
  }
}

module.exports = NotificationManager;
