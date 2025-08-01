#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class EmailCampaignAgent {
  constructor() {
    this.name = 'Email Campaign Agent';
    this.status = 'idle';
    this.campaigns = [];
    this.subscribers = [];
    this.templates = [];
    this.logFile = path.join(__dirname, '../logs/email-campaign-agent.log');
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    fs.appendFileSync(this.logFile, logMessage);
    console.log(`📧 [Email Campaign Agent] ${message}`);
  }

  async initialize() {
    this.log('Initializing Email Campaign Agent...');
    
    try {
      // Load existing campaigns
      await this.loadCampaigns();
      
      // Load subscriber list
      await this.loadSubscribers();
      
      // Load email templates
      await this.loadTemplates();
      
      this.status = 'ready';
      this.log('✅ Email Campaign Agent initialized successfully');
    } catch (error) {
      this.log(`❌ Error initializing: ${error.message}`);
      throw error;
    }
  }

  async loadCampaigns() {
    const campaignsFile = path.join(__dirname, '../email-campaigns/campaigns.json');
    if (fs.existsSync(campaignsFile)) {
      this.campaigns = JSON.parse(fs.readFileSync(campaignsFile, 'utf8'));
    } else {
      this.campaigns = [];
    }
  }

  async loadSubscribers() {
    const subscribersFile = path.join(__dirname, '../email-campaigns/subscribers.json');
    if (fs.existsSync(subscribersFile)) {
      this.subscribers = JSON.parse(fs.readFileSync(subscribersFile, 'utf8'));
    } else {
      this.subscribers = [];
    }
  }

  async loadTemplates() {
    const templatesFile = path.join(__dirname, '../email-campaigns/templates.json');
    if (fs.existsSync(templatesFile)) {
      this.templates = JSON.parse(fs.readFileSync(templatesFile, 'utf8'));
    } else {
      this.templates = this.getDefaultTemplates();
    }
  }

  getDefaultTemplates() {
    return [
      {
        id: 'welcome',
        name: 'Welcome Email',
        subject: 'Welcome to Zion Tech Group!',
        body: 'Thank you for joining our community. We\'re excited to share our latest AI solutions with you.'
      },
      {
        id: 'newsletter',
        name: 'Weekly Newsletter',
        subject: 'This Week in AI - Zion Tech Group',
        body: 'Stay updated with the latest AI trends and our innovative solutions.'
      },
      {
        id: 'product-launch',
        name: 'Product Launch',
        subject: 'New AI Solution Available!',
        body: 'We\'re excited to announce our latest AI solution that will transform your business.'
      }
    ];
  }

  async createCampaign(campaignData) {
    this.log('Creating new email campaign...');
    
    const campaign = {
      id: `campaign-${Date.now()}`,
      name: campaignData.name,
      subject: campaignData.subject,
      template: campaignData.template,
      targetAudience: campaignData.targetAudience || 'all',
      status: 'draft',
      createdAt: new Date().toISOString(),
      scheduledFor: campaignData.scheduledFor,
      metrics: {
        sent: 0,
        opened: 0,
        clicked: 0,
        unsubscribed: 0
      }
    };

    this.campaigns.push(campaign);
    await this.saveCampaigns();
    
    this.log(`✅ Created campaign: ${campaign.name}`);
    return campaign;
  }

  async scheduleCampaign(campaignId, scheduleDate) {
    this.log(`Scheduling campaign ${campaignId} for ${scheduleDate}...`);
    
    const campaign = this.campaigns.find(c => c.id === campaignId);
    if (!campaign) {
      throw new Error('Campaign not found');
    }

    campaign.scheduledFor = scheduleDate;
    campaign.status = 'scheduled';
    await this.saveCampaigns();
    
    this.log(`✅ Campaign ${campaignId} scheduled successfully`);
  }

  async sendCampaign(campaignId) {
    this.log(`Sending campaign ${campaignId}...`);
    
    const campaign = this.campaigns.find(c => c.id === campaignId);
    if (!campaign) {
      throw new Error('Campaign not found');
    }

    campaign.status = 'sending';
    await this.saveCampaigns();

    // Simulate sending emails
    const targetSubscribers = this.getTargetSubscribers(campaign.targetAudience);
    
    for (const subscriber of targetSubscribers) {
      await this.sendEmail(subscriber, campaign);
      campaign.metrics.sent++;
    }

    campaign.status = 'sent';
    campaign.sentAt = new Date().toISOString();
    await this.saveCampaigns();
    
    this.log(`✅ Campaign ${campaignId} sent to ${campaign.metrics.sent} subscribers`);
  }

  getTargetSubscribers(targetAudience) {
    if (targetAudience === 'all') {
      return this.subscribers;
    }
    return this.subscribers.filter(sub => sub.tags && sub.tags.includes(targetAudience));
  }

  async sendEmail(subscriber, campaign) {
    // Simulate email sending
    this.log(`📧 Sending email to ${subscriber.email} - Subject: ${campaign.subject}`);
    
    // In a real implementation, this would integrate with an email service
    // like SendGrid, Mailchimp, etc.
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  async addSubscriber(subscriberData) {
    this.log('Adding new subscriber...');
    
    const subscriber = {
      id: `sub-${Date.now()}`,
      email: subscriberData.email,
      name: subscriberData.name,
      tags: subscriberData.tags || [],
      subscribedAt: new Date().toISOString(),
      status: 'active'
    };

    this.subscribers.push(subscriber);
    await this.saveSubscribers();
    
    this.log(`✅ Added subscriber: ${subscriber.email}`);
    return subscriber;
  }

  async removeSubscriber(email) {
    this.log(`Removing subscriber: ${email}...`);
    
    const index = this.subscribers.findIndex(sub => sub.email === email);
    if (index !== -1) {
      this.subscribers.splice(index, 1);
      await this.saveSubscribers();
      this.log(`✅ Removed subscriber: ${email}`);
    }
  }

  async saveCampaigns() {
    const campaignsFile = path.join(__dirname, '../email-campaigns/campaigns.json');
    fs.writeFileSync(campaignsFile, JSON.stringify(this.campaigns, null, 2));
  }

  async saveSubscribers() {
    const subscribersFile = path.join(__dirname, '../email-campaigns/subscribers.json');
    fs.writeFileSync(subscribersFile, JSON.stringify(this.subscribers, null, 2));
  }

  async getCampaignMetrics(campaignId) {
    const campaign = this.campaigns.find(c => c.id === campaignId);
    return campaign ? campaign.metrics : null;
  }

  async generateReport() {
    this.log('Generating email campaign report...');
    
    const report = {
      totalCampaigns: this.campaigns.length,
      activeCampaigns: this.campaigns.filter(c => c.status === 'scheduled' || c.status === 'sending').length,
      totalSubscribers: this.subscribers.length,
      totalEmailsSent: this.campaigns.reduce((sum, c) => sum + c.metrics.sent, 0),
      totalOpens: this.campaigns.reduce((sum, c) => sum + c.metrics.opened, 0),
      totalClicks: this.campaigns.reduce((sum, c) => sum + c.metrics.clicked, 0),
      averageOpenRate: this.calculateAverageOpenRate(),
      averageClickRate: this.calculateAverageClickRate()
    };

    const reportFile = path.join(__dirname, '../email-campaigns/report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log('✅ Email campaign report generated');
    return report;
  }

  calculateAverageOpenRate() {
    const campaignsWithSends = this.campaigns.filter(c => c.metrics.sent > 0);
    if (campaignsWithSends.length === 0) return 0;
    
    const totalOpens = campaignsWithSends.reduce((sum, c) => sum + c.metrics.opened, 0);
    const totalSends = campaignsWithSends.reduce((sum, c) => sum + c.metrics.sent, 0);
    
    return totalSends > 0 ? (totalOpens / totalSends * 100).toFixed(2) : 0;
  }

  calculateAverageClickRate() {
    const campaignsWithOpens = this.campaigns.filter(c => c.metrics.opened > 0);
    if (campaignsWithOpens.length === 0) return 0;
    
    const totalClicks = campaignsWithOpens.reduce((sum, c) => sum + c.metrics.clicked, 0);
    const totalOpens = campaignsWithOpens.reduce((sum, c) => sum + c.metrics.opened, 0);
    
    return totalOpens > 0 ? (totalClicks / totalOpens * 100).toFixed(2) : 0;
  }

  async run() {
    this.log('Starting Email Campaign Agent...');
    
    try {
      await this.initialize();
      
      // Check for scheduled campaigns
      await this.processScheduledCampaigns();
      
      // Generate reports
      await this.generateReport();
      
      this.log('✅ Email Campaign Agent completed successfully');
    } catch (error) {
      this.log(`❌ Error running Email Campaign Agent: ${error.message}`);
      throw error;
    }
  }

  async processScheduledCampaigns() {
    const now = new Date();
    const scheduledCampaigns = this.campaigns.filter(c => 
      c.status === 'scheduled' && 
      c.scheduledFor && 
      new Date(c.scheduledFor) <= now
    );

    for (const campaign of scheduledCampaigns) {
      this.log(`Processing scheduled campaign: ${campaign.name}`);
      await this.sendCampaign(campaign.id);
    }
  }
}

// Export for use in other modules
module.exports = EmailCampaignAgent;

// Run directly if called from command line
if (require.main === module) {
  const agent = new EmailCampaignAgent();
  agent.run().catch(error => {
    console.error('Email Campaign Agent failed:', error);
    process.exit(1);
  });
} 