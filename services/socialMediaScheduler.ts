export interface SocialMediaAccount {
  id: string;
  platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube' | 'tiktok';
  username: string;
  displayName: string;
  profileImage: string;
  followers: number;
  isConnected: boolean;
  lastSync: Date;
  permissions: string[];
}

export interface SocialMediaPost {
  id: string;
  content: string;
  media: {
    type: 'image' | 'video' | 'gif' | 'none';
    url?: string;
    altText?: string;
  }[];
  platforms: string[];
  status: 'draft' | 'scheduled' | 'published' | 'failed';
  schedule: {
    publishAt: Date;
    timezone: string;
  };
  engagement: {
    likes: number;
    shares: number;
    comments: number;
    clicks: number;
    reach: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface SocialMediaCampaign {
  id: string;
  name: string;
  description: string;
  goal: 'awareness' | 'engagement' | 'traffic' | 'conversions' | 'branding';
  platforms: string[];
  posts: SocialMediaPost[];
  startDate: Date;
  endDate: Date;
  status: 'draft' | 'active' | 'paused' | 'completed';
  budget?: number;
  metrics: {
    totalPosts: number;
    totalEngagement: number;
    totalReach: number;
    averageEngagementRate: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface ContentCalendar {
  id: string;
  name: string;
  description: string;
  posts: SocialMediaPost[];
  themes: string[];
  colorScheme: string;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface SocialMediaAnalytics {
  platform: string;
  date: string;
  followers: number;
  posts: number;
  engagement: number;
  reach: number;
  impressions: number;
  clicks: number;
  profileVisits: number;
}

export class SocialMediaSchedulerService {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string = 'https://api.ziontech.ai') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async connectAccount(platform: string, credentials: any): Promise<SocialMediaAccount> {
    try {
      const response = await fetch(`${this.baseUrl}/social/connect`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ platform, credentials }),
      });

      if (!response.ok) {
        throw new Error(`Failed to connect account: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      // Mock account connection for demo
      return {
        id: `account_${Date.now()}`,
        platform: platform as any,
        username: `user_${platform}`,
        displayName: `${platform.charAt(0).toUpperCase() + platform.slice(1)} User`,
        profileImage: `https://via.placeholder.com/150/1DA1F2/FFFFFF?text=${platform.charAt(0).toUpperCase()}`,
        followers: Math.floor(Math.random() * 10000) + 1000,
        isConnected: true,
        lastSync: new Date(),
        permissions: ['read', 'write', 'publish']
      };
    }
  }

  async getConnectedAccounts(): Promise<SocialMediaAccount[]> {
    try {
      const response = await fetch(`${this.baseUrl}/social/accounts`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch accounts: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      // Mock connected accounts for demo
      const platforms = ['facebook', 'twitter', 'instagram', 'linkedin'];
      return platforms.map((platform, index) => ({
        id: `account_${index + 1}`,
        platform: platform as any,
        username: `ziontech_${platform}`,
        displayName: `Zion Tech Group - ${platform.charAt(0).toUpperCase() + platform.slice(1)}`,
        profileImage: `https://via.placeholder.com/150/1DA1F2/FFFFFF?text=${platform.charAt(0).toUpperCase()}`,
        followers: Math.floor(Math.random() * 50000) + 5000,
        isConnected: Math.random() > 0.2,
        lastSync: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
        permissions: ['read', 'write', 'publish']
      }));
    }
  }

  async createPost(post: Omit<SocialMediaPost, 'id' | 'createdAt' | 'updatedAt' | 'engagement'>): Promise<SocialMediaPost> {
    try {
      const response = await fetch(`${this.baseUrl}/social/posts`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });

      if (!response.ok) {
        throw new Error(`Failed to create post: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      // Mock post creation for demo
      return {
        ...post,
        id: `post_${Date.now()}`,
        createdAt: new Date(),
        updatedAt: new Date(),
        engagement: {
          likes: 0,
          shares: 0,
          comments: 0,
          clicks: 0,
          reach: 0
        }
      };
    }
  }

  async getPosts(limit: number = 100, offset: number = 0): Promise<SocialMediaPost[]> {
    try {
      const response = await fetch(`${this.baseUrl}/social/posts?limit=${limit}&offset=${offset}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      // Mock posts for demo
      return [
        {
          id: 'post_1',
          content: '🚀 Exciting news! We\'ve just launched our new AI-powered automation platform. Discover how it can transform your business! #AI #Automation #Innovation',
          media: [{
            type: 'image',
            url: 'https://via.placeholder.com/800/400/1DA1F2/FFFFFF?text=AI+Platform+Launch',
            altText: 'AI Platform Launch Announcement'
          }],
          platforms: ['twitter', 'linkedin'],
          status: 'published' as const,
          schedule: {
            publishAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
            timezone: 'UTC'
          },
          engagement: {
            likes: 45,
            shares: 12,
            comments: 8,
            clicks: 23,
            reach: 1250
          },
          createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
          updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000)
        },
        {
          id: 'post_2',
          content: '💡 Did you know? Our performance monitoring service can detect issues before they impact your users. Stay ahead of the curve! #Performance #Monitoring #Proactive',
          media: [{
            type: 'none'
          }],
          platforms: ['facebook', 'twitter'],
          status: 'scheduled' as const,
          schedule: {
            publishAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
            timezone: 'UTC'
          },
          engagement: {
            likes: 0,
            shares: 0,
            comments: 0,
            clicks: 0,
            reach: 0
          },
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ];
    }
  }

  async schedulePost(postId: string, publishAt: Date): Promise<void> {
    try {
      const response = await fetch(`${this.baseUrl}/social/posts/${postId}/schedule`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ publishAt }),
      });

      if (!response.ok) {
        throw new Error(`Failed to schedule post: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Failed to schedule post:', error);
      throw error;
    }
  }

  async publishPost(postId: string): Promise<void> {
    try {
      const response = await fetch(`${this.baseUrl}/social/posts/${postId}/publish`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to publish post: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Failed to publish post:', error);
      throw error;
    }
  }

  async createCampaign(campaign: Omit<SocialMediaCampaign, 'id' | 'createdAt' | 'updatedAt' | 'metrics'>): Promise<SocialMediaCampaign> {
    try {
      const response = await fetch(`${this.baseUrl}/social/campaigns`, {
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
        metrics: {
          totalPosts: campaign.posts.length,
          totalEngagement: 0,
          totalReach: 0,
          averageEngagementRate: 0
        }
      };
    }
  }

  async getCampaigns(): Promise<SocialMediaCampaign[]> {
    try {
      const response = await fetch(`${this.baseUrl}/social/campaigns`, {
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
          name: 'AI Platform Launch',
          description: 'Promoting our new AI-powered automation platform',
          goal: 'awareness' as const,
          platforms: ['twitter', 'linkedin', 'facebook'],
          posts: [],
          startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          status: 'active' as const,
          budget: 500,
          metrics: {
            totalPosts: 15,
            totalEngagement: 1250,
            totalReach: 15000,
            averageEngagementRate: 8.3
          },
          createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          updatedAt: new Date()
        }
      ];
    }
  }

  async getAnalytics(platform: string, startDate: Date, endDate: Date): Promise<SocialMediaAnalytics[]> {
    try {
      const params = new URLSearchParams({
        platform,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString()
      });

      const response = await fetch(`${this.baseUrl}/social/analytics?${params}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch analytics: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      // Mock analytics for demo
      const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      const analytics: SocialMediaAnalytics[] = [];

      for (let i = 0; i < days; i++) {
        const date = new Date(startDate);
        date.setDate(date.getDate() + i);
        
        analytics.push({
          platform,
          date: date.toISOString().split('T')[0],
          followers: Math.floor(Math.random() * 1000) + 5000,
          posts: Math.floor(Math.random() * 5) + 1,
          engagement: Math.floor(Math.random() * 200) + 100,
          reach: Math.floor(Math.random() * 5000) + 2000,
          impressions: Math.floor(Math.random() * 8000) + 3000,
          clicks: Math.floor(Math.random() * 100) + 50,
          profileVisits: Math.floor(Math.random() * 50) + 20
        });
      }

      return analytics;
    }
  }

  async generateReport(): Promise<{
    overview: {
      totalAccounts: number;
      totalPosts: number;
      totalEngagement: number;
      totalReach: number;
      averageEngagementRate: number;
    };
    topPosts: {
      content: string;
      platform: string;
      engagement: number;
      reach: number;
    }[];
    platformPerformance: {
      platform: string;
      followers: number;
      posts: number;
      engagement: number;
      reach: number;
    }[];
  }> {
    const accounts = await this.getConnectedAccounts();
    const posts = await this.getPosts(1000);
    const campaigns = await this.getCampaigns();

    const totalEngagement = posts.reduce((sum, post) => sum + post.engagement.likes + post.engagement.shares + post.engagement.comments, 0);
    const totalReach = posts.reduce((sum, post) => sum + post.engagement.reach, 0);
    const averageEngagementRate = posts.length > 0 ? totalEngagement / posts.length : 0;

    const topPosts = posts
      .sort((a, b) => (b.engagement.likes + b.engagement.shares + b.engagement.comments) - (a.engagement.likes + a.engagement.shares + a.engagement.comments))
      .slice(0, 5)
      .map(post => ({
        content: post.content.substring(0, 100) + (post.content.length > 100 ? '...' : ''),
        platform: post.platforms[0],
        engagement: post.engagement.likes + post.engagement.shares + post.engagement.comments,
        reach: post.engagement.reach
      }));

    const platformPerformance = accounts.map(account => {
      const platformPosts = posts.filter(post => post.platforms.includes(account.platform));
      const platformEngagement = platformPosts.reduce((sum, post) => sum + post.engagement.likes + post.engagement.shares + post.engagement.comments, 0);
      const platformReach = platformPosts.reduce((sum, post) => sum + post.engagement.reach, 0);

      return {
        platform: account.platform,
        followers: account.followers,
        posts: platformPosts.length,
        engagement: platformEngagement,
        reach: platformReach
      };
    });

    return {
      overview: {
        totalAccounts: accounts.filter(a => a.isConnected).length,
        totalPosts: posts.length,
        totalEngagement,
        totalReach,
        averageEngagementRate: Math.round(averageEngagementRate * 100) / 100
      },
      topPosts,
      platformPerformance
    };
  }
}

// Pricing tiers for the Social Media Scheduler service
export const SOCIAL_MEDIA_SCHEDULER_PRICING = {
  starter: {
    name: 'Starter',
    price: 19,
    period: '/month',
    features: [
      'Connect up to 3 social accounts',
      'Basic post scheduling',
      'Simple content calendar',
      'Basic analytics',
      'Email support',
      'Standard templates'
    ]
  },
  professional: {
    name: 'Professional',
    price: 49,
    period: '/month',
    features: [
      'Connect up to 10 social accounts',
      'Advanced scheduling',
      'Content calendar',
      'Advanced analytics',
      'Priority support',
      'Custom templates',
      'Campaign management',
      'API access',
      'Team collaboration'
    ]
  },
  enterprise: {
    name: 'Enterprise',
    price: 129,
    period: '/month',
    features: [
      'Connect unlimited social accounts',
      'Enterprise scheduling',
      'Advanced content calendar',
      'Enterprise analytics',
      'Dedicated support',
      'Custom integrations',
      'White-label options',
      'Advanced automation',
      'SLA guarantee'
    ]
  }
};