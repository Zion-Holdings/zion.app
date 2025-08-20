export interface EmailCampaign {
  id: string;
  name: string;
  subject: string;
  content: string;
  recipientCount: number;
  openRate: number;
  clickRate: number;
  conversionRate: number;
  status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'failed';
  scheduledAt?: Date;
  sentAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface EmailSubscriber {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  tags: string[];
  status: 'subscribed' | 'unsubscribed' | 'bounced';
  subscribedAt: Date;
  lastActivityAt: Date;
  source: string;
  updatedAt: Date;
}

export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  htmlContent: string;
  textContent: string;
  category: string;
  isDefault: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface EmailAnalytics {
  totalEmails: number;
  totalOpens: number;
  totalClicks: number;
  totalConversions: number;
  averageOpenRate: number;
  averageClickRate: number;
  averageConversionRate: number;
  topPerformingCampaigns: EmailCampaign[];
  subscriberGrowth: {
    date: string;
    subscribers: number;
  }[];
}

export interface EmailMarketingServiceConfig {
  apiKey: string;
  fromEmail: string;
  fromName: string;
  replyToEmail?: string;
  webhookUrl?: string;
}

class EmailMarketingService {
  private config: EmailMarketingServiceConfig;
  private subscribers: EmailSubscriber[] = [];
  private campaigns: EmailCampaign[] = [];
  private templates: EmailTemplate[] = [];

  constructor(config: EmailMarketingServiceConfig) {
    this.config = config;
    this.initializeDefaultTemplates();
  }

  private initializeDefaultTemplates(): void {
    this.templates = [
      {
        id: 'welcome-email',
        name: 'Welcome Email',
        subject: 'Welcome to {{company_name}}!',
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #333;">Welcome to {{company_name}}!</h1>
            <p>Hi {{first_name}},</p>
            <p>Thank you for subscribing to our newsletter. We're excited to have you on board!</p>
            <p>Here's what you can expect from us:</p>
            <ul>
              <li>Weekly industry insights</li>
              <li>Exclusive offers and discounts</li>
              <li>Product updates and announcements</li>
            </ul>
            <p>Best regards,<br>The {{company_name}} Team</p>
          </div>
        `,
        textContent: `
          Welcome to {{company_name}}!
          
          Hi {{first_name}},
          
          Thank you for subscribing to our newsletter. We're excited to have you on board!
          
          Here's what you can expect from us:
          - Weekly industry insights
          - Exclusive offers and discounts
          - Product updates and announcements
          
          Best regards,
          The {{company_name}} Team
        `,
        category: 'onboarding',
        isDefault: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
  }

  async addSubscriber(email: string, firstName?: string, lastName?: string, tags: string[] = [], source: string = 'website'): Promise<EmailSubscriber> {
    const existingSubscriber = this.subscribers.find(s => s.email === email);
    if (existingSubscriber) {
      throw new Error('Subscriber already exists');
    }

    const subscriber: EmailSubscriber = {
      id: this.generateId(),
      email,
      firstName,
      lastName,
      tags,
      status: 'subscribed',
      subscribedAt: new Date(),
      lastActivityAt: new Date(),
      source,
      updatedAt: new Date()
    };

    this.subscribers.push(subscriber);
    return subscriber;
  }

  async createCampaign(name: string, subject: string, content: string, recipientCount: number): Promise<EmailCampaign> {
    const campaign: EmailCampaign = {
      id: this.generateId(),
      name,
      subject,
      content,
      recipientCount,
      openRate: 0,
      clickRate: 0,
      conversionRate: 0,
      status: 'draft',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.campaigns.push(campaign);
    return campaign;
  }

  async sendCampaign(campaignId: string, scheduledAt?: Date): Promise<void> {
    const campaign = this.campaigns.find(c => c.id === campaignId);
    if (!campaign) {
      throw new Error('Campaign not found');
    }

    if (scheduledAt) {
      campaign.status = 'scheduled';
      campaign.scheduledAt = scheduledAt;
    } else {
      campaign.status = 'sending';
      // Simulate sending process
      await this.simulateEmailSending(campaign);
    }

    campaign.updatedAt = new Date();
  }

  private async simulateEmailSending(campaign: EmailCampaign): Promise<void> {
    // Simulate email sending with realistic metrics
    campaign.status = 'sending';
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate realistic metrics
    campaign.openRate = Math.random() * 0.4 + 0.15; // 15-55%
    campaign.clickRate = campaign.openRate * (Math.random() * 0.3 + 0.05); // 5-35% of opens
    campaign.conversionRate = campaign.clickRate * (Math.random() * 0.2 + 0.02); // 2-22% of clicks
    
    campaign.status = 'sent';
    campaign.sentAt = new Date();
  }

  async getAnalytics(): Promise<EmailAnalytics> {
    const totalEmails = this.campaigns.reduce((sum, c) => sum + c.recipientCount, 0);
    const totalOpens = this.campaigns.reduce((sum, c) => sum + Math.floor(c.recipientCount * c.openRate), 0);
    const totalClicks = this.campaigns.reduce((sum, c) => sum + Math.floor(c.recipientCount * c.clickRate), 0);
    const totalConversions = this.campaigns.reduce((sum, c) => sum + Math.floor(c.recipientCount * c.conversionRate), 0);

    const averageOpenRate = totalEmails > 0 ? totalOpens / totalEmails : 0;
    const averageClickRate = totalOpens > 0 ? totalClicks / totalOpens : 0;
    const averageConversionRate = totalClicks > 0 ? totalConversions / totalClicks : 0;

    const topPerformingCampaigns = [...this.campaigns]
      .filter(c => c.status === 'sent')
      .sort((a, b) => b.openRate - a.openRate)
      .slice(0, 5);

    const subscriberGrowth = this.generateSubscriberGrowthData();

    return {
      totalEmails,
      totalOpens,
      totalClicks,
      totalConversions,
      averageOpenRate,
      averageClickRate,
      averageConversionRate,
      topPerformingCampaigns,
      subscriberGrowth
    };
  }

  private generateSubscriberGrowthData(): { date: string; subscribers: number }[] {
    const data = [];
    const today = new Date();
    
    for (let i = 30; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      // Simulate realistic growth pattern
      const baseSubscribers = 100;
      const growthRate = 0.05; // 5% daily growth
      const subscribers = Math.floor(baseSubscribers * Math.pow(1 + growthRate, 30 - i));
      
      data.push({
        date: date.toISOString().split('T')[0],
        subscribers
      });
    }
    
    return data;
  }

  async getSubscribers(page: number = 1, limit: number = 20): Promise<{ subscribers: EmailSubscriber[]; total: number; page: number; totalPages: number }> {
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedSubscribers = this.subscribers.slice(start, end);
    const totalPages = Math.ceil(this.subscribers.length / limit);

    return {
      subscribers: paginatedSubscribers,
      total: this.subscribers.length,
      page,
      totalPages
    };
  }

  async getCampaigns(): Promise<EmailCampaign[]> {
    return [...this.campaigns].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getTemplates(): Promise<EmailTemplate[]> {
    return [...this.templates];
  }

  async updateSubscriberTags(subscriberId: string, tags: string[]): Promise<EmailSubscriber> {
    const subscriber = this.subscribers.find(s => s.id === subscriberId);
    if (!subscriber) {
      throw new Error('Subscriber not found');
    }

    subscriber.tags = tags;
    subscriber.updatedAt = new Date();
    return subscriber;
  }

  async unsubscribeSubscriber(subscriberId: string): Promise<void> {
    const subscriber = this.subscribers.find(s => s.id === subscriberId);
    if (!subscriber) {
      throw new Error('Subscriber not found');
    }

    subscriber.status = 'unsubscribed';
    subscriber.updatedAt = new Date();
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}

export default EmailMarketingService;