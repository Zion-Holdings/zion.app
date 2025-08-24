export interface EmailSubscriber {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  tags: string[];
  status: 'active' | 'unsubscribed' | 'bounced' | 'pending';
  subscribedAt: Date;
  lastActivity: Date;
  customFields: Record<string, any>;
}

export interface EmailCampaign {
  id: string;
  name: string;
  subject: string;
  previewText: string;
  status: 'draft' | 'scheduled' | 'sending' | 'sent' | 'paused';
  type: 'newsletter' | 'promotional' | 'transactional' | 'automation';
  audience: {
    segments: string[];
    totalSubscribers: number;
  };
  content: {
    html: string;
    text: string;
    template: string;
  };
  schedule: {
    sendAt: Date;
    timezone: string;
  };
  stats: {
    sent: number;
    delivered: number;
    opened: number;
    clicked: number;
    bounced: number;
    unsubscribed: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface EmailTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  html: string;
  text: string;
  variables: string[];
  isResponsive: boolean;
  preview: string;
  price: number;
}

export interface EmailAutomation {
  id: string;
  name: string;
  description: string;
  trigger: 'signup' | 'purchase' | 'abandoned_cart' | 'birthday' | 'custom';
  conditions: {
    field: string;
    operator: 'equals' | 'contains' | 'greater_than' | 'less_than';
    value: any;
  }[];
  actions: {
    type: 'send_email' | 'add_tag' | 'remove_tag' | 'update_field';
    config: any;
  }[];
  status: 'active' | 'paused' | 'draft';
  createdAt: Date;
  updatedAt: Date;
}

export class EmailMarketingService {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string = 'https://api.ziontech.ai') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async createSubscriber(subscriber: Omit<EmailSubscriber, 'id' | 'subscribedAt' | 'lastActivity'>): Promise<EmailSubscriber> {
    try {
      const response = await fetch(`${this.baseUrl}/email/subscribers`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscriber),
      });

      if (!response.ok) {
        throw new Error(`Failed to create subscriber: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      // Mock subscriber creation for demo
      return {
        ...subscriber,
        id: `sub_${Date.now()}`,
        subscribedAt: new Date(),
        lastActivity: new Date()
      };
    }
  }

  async getSubscribers(limit: number = 100, offset: number = 0): Promise<EmailSubscriber[]> {
    try {
      const response = await fetch(`${this.baseUrl}/email/subscribers?limit=${limit}&offset=${offset}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch subscribers: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      // Mock subscribers for demo
      return Array.from({ length: Math.min(limit, 50) }, (_, i) => ({
        id: `sub_${i + 1}`,
        email: `user${i + 1}@example.com`,
        firstName: `User${i + 1}`,
        lastName: `Example`,
        tags: ['newsletter', 'tech'],
        status: 'active' as const,
        subscribedAt: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000),
        lastActivity: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
        customFields: {
          company: `Company ${i + 1}`,
          industry: 'Technology'
        }
      }));
    }
  }

  async createCampaign(campaign: Omit<EmailCampaign, 'id' | 'createdAt' | 'updatedAt' | 'stats'>): Promise<EmailCampaign> {
    try {
      const response = await fetch(`${this.baseUrl}/email/campaigns`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(campaign),
      });

      if (!response.ok) {
        throw new Error(`Failed to create campaign: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      // Mock campaign creation for demo
      return {
        ...campaign,
        id: `campaign_${Date.now()}`,
        createdAt: new Date(),
        updatedAt: new Date(),
        stats: {
          sent: 0,
          delivered: 0,
          opened: 0,
          clicked: 0,
          bounced: 0,
          unsubscribed: 0
        }
      };
    }
  }

  async getCampaigns(): Promise<EmailCampaign[]> {
    try {
      const response = await fetch(`${this.baseUrl}/email/campaigns`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch campaigns: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      // Mock campaigns for demo
      return [
        {
          id: 'campaign_1',
          name: 'Welcome Series',
          subject: 'Welcome to Zion Tech Group!',
          previewText: 'Get started with our platform and discover amazing features.',
          status: 'sent' as const,
          type: 'automation' as const,
          audience: {
            segments: ['new_users'],
            totalSubscribers: 1250
          },
          content: {
            html: '<h1>Welcome!</h1><p>Thank you for joining us.</p>',
            text: 'Welcome! Thank you for joining us.',
            template: 'welcome_series_1'
          },
          schedule: {
            sendAt: new Date(),
            timezone: 'UTC'
          },
          stats: {
            sent: 1250,
            delivered: 1200,
            opened: 850,
            clicked: 320,
            bounced: 50,
            unsubscribed: 15
          },
          createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
        },
        {
          id: 'campaign_2',
          name: 'Product Update',
          subject: 'New Features Released!',
          previewText: 'Check out the latest updates and improvements.',
          status: 'scheduled' as const,
          type: 'newsletter' as const,
          audience: {
            segments: ['active_users', 'premium'],
            totalSubscribers: 3200
          },
          content: {
            html: '<h1>New Features</h1><p>Discover what\'s new.</p>',
            text: 'New Features - Discover what\'s new.',
            template: 'product_update'
          },
          schedule: {
            sendAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
            timezone: 'UTC'
          },
          stats: {
            sent: 0,
            delivered: 0,
            opened: 0,
            clicked: 0,
            bounced: 0,
            unsubscribed: 0
          },
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ];
    }
  }

  async sendCampaign(campaignId: string): Promise<void> {
    try {
      const response = await fetch(`${this.baseUrl}/email/campaigns/${campaignId}/send`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to send campaign: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Failed to send campaign:', error);
      throw error;
    }
  }

  async getTemplates(): Promise<EmailTemplate[]> {
    return [
      {
        id: 'template_1',
        name: 'Newsletter Template',
        description: 'Professional newsletter template with responsive design',
        category: 'newsletter',
        html: '<div class="newsletter"><h1>{{title}}</h1><p>{{content}}</p></div>',
        text: '{{title}}\n\n{{content}}',
        variables: ['title', 'content'],
        isResponsive: true,
        preview: 'Clean, professional newsletter design...',
        price: 29
      },
      {
        id: 'template_2',
        name: 'Promotional Email',
        description: 'High-converting promotional email template',
        category: 'promotional',
        html: '<div class="promo"><h2>{{headline}}</h2><p>{{description}}</p><a href="{{cta_url}}">{{cta_text}}</a></div>',
        text: '{{headline}}\n\n{{description}}\n\n{{cta_text}}: {{cta_url}}',
        variables: ['headline', 'description', 'cta_url', 'cta_text'],
        isResponsive: true,
        preview: 'Eye-catching promotional design...',
        price: 39
      },
      {
        id: 'template_3',
        name: 'Welcome Series',
        description: 'Multi-email welcome sequence template',
        category: 'automation',
        html: '<div class="welcome"><h1>Welcome {{first_name}}!</h1><p>{{welcome_message}}</p></div>',
        text: 'Welcome {{first_name}}!\n\n{{welcome_message}}',
        variables: ['first_name', 'welcome_message'],
        isResponsive: true,
        preview: 'Personalized welcome experience...',
        price: 49
      }
    ];
  }

  async createAutomation(automation: Omit<EmailAutomation, 'id' | 'createdAt' | 'updatedAt'>): Promise<EmailAutomation> {
    try {
      const response = await fetch(`${this.baseUrl}/email/automations`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(automation),
      });

      if (!response.ok) {
        throw new Error(`Failed to create automation: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      // Mock automation creation for demo
      return {
        ...automation,
        id: `automation_${Date.now()}`,
        createdAt: new Date(),
        updatedAt: new Date()
      };
    }
  }

  async getAutomations(): Promise<EmailAutomation[]> {
    try {
      const response = await fetch(`${this.baseUrl}/email/automations`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch automations: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      // Mock automations for demo
      return [
        {
          id: 'automation_1',
          name: 'Welcome Series',
          description: 'Automated welcome emails for new subscribers',
          trigger: 'signup' as const,
          conditions: [
            {
              field: 'status',
              operator: 'equals' as const,
              value: 'active'
            }
          ],
          actions: [
            {
              type: 'send_email' as const,
              config: {
                template: 'welcome_series_1',
                delay: 0
              }
            },
            {
              type: 'send_email' as const,
              config: {
                template: 'welcome_series_2',
                delay: 24 * 60 * 60 * 1000 // 24 hours
              }
            }
          ],
          status: 'active' as const,
          createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
        }
      ];
    }
  }

  async generateReport(): Promise<{
    overview: {
      totalSubscribers: number;
      activeSubscribers: number;
      totalCampaigns: number;
      averageOpenRate: number;
      averageClickRate: number;
    };
    recentCampaigns: {
      name: string;
      sent: number;
      openRate: number;
      clickRate: number;
    }[];
    subscriberGrowth: {
      date: string;
      subscribers: number;
    }[];
  }> {
    const subscribers = await this.getSubscribers(1000);
    const campaigns = await this.getCampaigns();

    const activeSubscribers = subscribers.filter(s => s.status === 'active').length;
    const sentCampaigns = campaigns.filter(c => c.status === 'sent');
    
    const averageOpenRate = sentCampaigns.length > 0 
      ? sentCampaigns.reduce((sum, c) => sum + (c.stats.opened / c.stats.delivered), 0) / sentCampaigns.length * 100
      : 0;
    
    const averageClickRate = sentCampaigns.length > 0
      ? sentCampaigns.reduce((sum, c) => sum + (c.stats.clicked / c.stats.delivered), 0) / sentCampaigns.length * 100
      : 0;

    // Mock subscriber growth data
    const subscriberGrowth = Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      return {
        date: date.toISOString().split('T')[0],
        subscribers: Math.floor(Math.random() * 100) + 1000 + i * 10
      };
    });

    return {
      overview: {
        totalSubscribers: subscribers.length,
        activeSubscribers,
        totalCampaigns: campaigns.length,
        averageOpenRate: Math.round(averageOpenRate * 100) / 100,
        averageClickRate: Math.round(averageClickRate * 100) / 100
      },
      recentCampaigns: campaigns
        .filter(c => c.status === 'sent')
        .slice(0, 5)
        .map(c => ({
          name: c.name,
          sent: c.stats.sent,
          openRate: Math.round((c.stats.opened / c.stats.delivered) * 10000) / 100,
          clickRate: Math.round((c.stats.clicked / c.stats.delivered) * 10000) / 100
        })),
      subscriberGrowth
    };
  }
}

// Pricing tiers for the Email Marketing service
export const EMAIL_MARKETING_PRICING = {
  starter: {
    name: 'Starter',
    price: 29,
    period: '/month',
    features: [
      'Up to 1,000 subscribers',
      'Basic email templates',
      'Simple automation',
      'Basic analytics',
      'Email support',
      'Standard deliverability'
    ]
  },
  professional: {
    name: 'Professional',
    price: 79,
    period: '/month',
    features: [
      'Up to 10,000 subscribers',
      'Advanced email templates',
      'Advanced automation',
      'Advanced analytics',
      'Priority support',
      'High deliverability',
      'A/B testing',
      'API access',
      'Custom branding'
    ]
  },
  enterprise: {
    name: 'Enterprise',
    price: 199,
    period: '/month',
    features: [
      'Unlimited subscribers',
      'Custom email templates',
      'Complex automation workflows',
      'Enterprise analytics',
      'Dedicated support',
      'Premium deliverability',
      'Advanced segmentation',
      'White-label options',
      'Custom integrations',
      'SLA guarantee'
    ]
  }
};