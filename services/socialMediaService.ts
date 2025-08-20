export interface SocialMediaPost {
  id: string;
  platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'tiktok';
  content: string;
  mediaUrls?: string[];
  scheduledAt?: Date;
  publishedAt?: Date;
  status: 'draft' | 'scheduled' | 'published' | 'failed';
  engagement: {
    likes: number;
    shares: number;
    comments: number;
    clicks: number;
    reach: number;
  };
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface SocialMediaAccount {
  id: string;
  platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'tiktok';
  username: string;
  displayName: string;
  profileImageUrl?: string;
  isConnected: boolean;
  accessToken?: string;
  refreshToken?: string;
  tokenExpiresAt?: Date;
  followers: number;
  following: number;
  posts: number;
  lastSyncAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface SocialMediaAnalytics {
  totalPosts: number;
  totalEngagement: number;
  totalReach: number;
  averageEngagementRate: number;
  topPerformingPosts: SocialMediaPost[];
  platformBreakdown: {
    platform: string;
    posts: number;
    engagement: number;
    reach: number;
  }[];
  engagementTrends: {
    date: string;
    engagement: number;
    reach: number;
  }[];
}

export interface ContentCalendar {
  id: string;
  name: string;
  description?: string;
  posts: SocialMediaPost[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface SocialMediaServiceConfig {
  apiKeys: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    tiktok?: string;
  };
  webhookUrl?: string;
  defaultTimezone: string;
}

class SocialMediaService {
  private config: SocialMediaServiceConfig;
  private accounts: SocialMediaAccount[] = [];
  private posts: SocialMediaPost[] = [];
  private contentCalendars: ContentCalendar[] = [];

  constructor(config: SocialMediaServiceConfig) {
    this.config = config;
    this.initializeMockAccounts();
  }

  private initializeMockAccounts(): void {
    this.accounts = [
      {
        id: '1',
        platform: 'facebook',
        username: 'ziontechgroup',
        displayName: 'Zion Tech Group',
        isConnected: true,
        followers: 15420,
        following: 89,
        posts: 156,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date()
      },
      {
        id: '2',
        platform: 'twitter',
        username: '@ziontech',
        displayName: 'Zion Tech Group',
        isConnected: true,
        followers: 8920,
        following: 156,
        posts: 89,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date()
      },
      {
        id: '3',
        platform: 'linkedin',
        username: 'zion-tech-group',
        displayName: 'Zion Tech Group',
        isConnected: true,
        followers: 23450,
        following: 234,
        posts: 67,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date()
      }
    ];
  }

  async connectAccount(platform: string, accessToken: string, refreshToken?: string): Promise<SocialMediaAccount> {
    const existingAccount = this.accounts.find(a => a.platform === platform);
    if (existingAccount) {
      existingAccount.accessToken = accessToken;
      existingAccount.refreshToken = refreshToken;
      existingAccount.isConnected = true;
      existingAccount.updatedAt = new Date();
      return existingAccount;
    }

    const newAccount: SocialMediaAccount = {
      id: this.generateId(),
      platform: platform as any,
      username: `new_${platform}_account`,
      displayName: `New ${platform} Account`,
      isConnected: true,
      accessToken,
      refreshToken,
      followers: 0,
      following: 0,
      posts: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.accounts.push(newAccount);
    return newAccount;
  }

  async createPost(
    platform: string,
    content: string,
    mediaUrls?: string[],
    scheduledAt?: Date,
    tags: string[] = []
  ): Promise<SocialMediaPost> {
    const post: SocialMediaPost = {
      id: this.generateId(),
      platform: platform as any,
      content,
      mediaUrls,
      scheduledAt,
      status: scheduledAt ? 'scheduled' : 'draft',
      engagement: {
        likes: 0,
        shares: 0,
        comments: 0,
        clicks: 0,
        reach: 0
      },
      tags,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.posts.push(post);
    return post;
  }

  async publishPost(postId: string): Promise<void> {
    const post = this.posts.find(p => p.id === postId);
    if (!post) {
      throw new Error('Post not found');
    }

    if (post.status !== 'draft' && post.status !== 'scheduled') {
      throw new Error('Post cannot be published');
    }

    post.status = 'published';
    post.publishedAt = new Date();
    
    // Simulate publishing process
    await this.simulatePostPublishing(post);
    
    post.updatedAt = new Date();
  }

  private async simulatePostPublishing(post: SocialMediaPost): Promise<void> {
    // Simulate publishing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Generate realistic engagement metrics based on platform
    const baseReach = this.getBaseReach(post.platform);
    const engagementRate = this.getEngagementRate(post.platform);
    
    post.engagement.reach = Math.floor(baseReach * (0.8 + Math.random() * 0.4)); // 80-120% of base
    post.engagement.likes = Math.floor(post.engagement.reach * engagementRate * (0.6 + Math.random() * 0.8));
    post.engagement.shares = Math.floor(post.engagement.likes * 0.1 * (0.5 + Math.random() * 1.0));
    post.engagement.comments = Math.floor(post.engagement.likes * 0.05 * (0.5 + Math.random() * 1.0));
    post.engagement.clicks = Math.floor(post.engagement.reach * 0.02 * (0.5 + Math.random() * 1.0));
  }

  private getBaseReach(platform: string): number {
    const reachMap = {
      facebook: 5000,
      twitter: 3000,
      instagram: 4000,
      linkedin: 2000,
      tiktok: 8000
    };
    return reachMap[platform as keyof typeof reachMap] || 3000;
  }

  private getEngagementRate(platform: string): number {
    const rateMap = {
      facebook: 0.03,
      twitter: 0.02,
      instagram: 0.04,
      linkedin: 0.025,
      tiktok: 0.06
    };
    return rateMap[platform as keyof typeof rateMap] || 0.03;
  }

  async schedulePost(postId: string, scheduledAt: Date): Promise<void> {
    const post = this.posts.find(p => p.id === postId);
    if (!post) {
      throw new Error('Post not found');
    }

    post.scheduledAt = scheduledAt;
    post.status = 'scheduled';
    post.updatedAt = new Date();
  }

  async getAnalytics(platform?: string, startDate?: Date, endDate?: Date): Promise<SocialMediaAnalytics> {
    let filteredPosts = this.posts.filter(p => p.status === 'published');
    
    if (platform) {
      filteredPosts = filteredPosts.filter(p => p.platform === platform);
    }
    
    if (startDate) {
      filteredPosts = filteredPosts.filter(p => p.publishedAt && p.publishedAt >= startDate);
    }
    
    if (endDate) {
      filteredPosts = filteredPosts.filter(p => p.publishedAt && p.publishedAt <= endDate);
    }

    const totalPosts = filteredPosts.length;
    const totalEngagement = filteredPosts.reduce((sum, p) => 
      sum + p.engagement.likes + p.engagement.shares + p.engagement.comments, 0);
    const totalReach = filteredPosts.reduce((sum, p) => sum + p.engagement.reach, 0);
    
    const averageEngagementRate = totalReach > 0 ? totalEngagement / totalReach : 0;

    const topPerformingPosts = [...filteredPosts]
      .sort((a, b) => (b.engagement.likes + b.engagement.shares + b.engagement.comments) - 
                       (a.engagement.likes + a.engagement.shares + a.engagement.comments))
      .slice(0, 5);

    const platformBreakdown = this.getPlatformBreakdown(filteredPosts);
    const engagementTrends = this.generateEngagementTrends(filteredPosts);

    return {
      totalPosts,
      totalEngagement,
      totalReach,
      averageEngagementRate,
      topPerformingPosts,
      platformBreakdown,
      engagementTrends
    };
  }

  private getPlatformBreakdown(posts: SocialMediaPost[]): { platform: string; posts: number; engagement: number; reach: number }[] {
    const breakdown = new Map();
    
    posts.forEach(post => {
      const platform = post.platform;
      if (!breakdown.has(platform)) {
        breakdown.set(platform, { platform, posts: 0, engagement: 0, reach: 0 });
      }
      
      const stats = breakdown.get(platform);
      stats.posts++;
      stats.engagement += post.engagement.likes + post.engagement.shares + post.engagement.comments;
      stats.reach += post.engagement.reach;
    });
    
    return Array.from(breakdown.values());
  }

  private generateEngagementTrends(posts: SocialMediaPost[]): { date: string; engagement: number; reach: number }[] {
    const trends = [];
    const today = new Date();
    
    for (let i = 30; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      
      const dayPosts = posts.filter(p => 
        p.publishedAt && p.publishedAt.toISOString().split('T')[0] === dateStr
      );
      
      const engagement = dayPosts.reduce((sum, p) => 
        sum + p.engagement.likes + p.engagement.shares + p.engagement.comments, 0);
      const reach = dayPosts.reduce((sum, p) => sum + p.engagement.reach, 0);
      
      trends.push({ date: dateStr, engagement, reach });
    }
    
    return trends;
  }

  async createContentCalendar(name: string, description?: string): Promise<ContentCalendar> {
    const calendar: ContentCalendar = {
      id: this.generateId(),
      name,
      description,
      posts: [],
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.contentCalendars.push(calendar);
    return calendar;
  }

  async addPostToCalendar(calendarId: string, postId: string): Promise<void> {
    const calendar = this.contentCalendars.find(c => c.id === calendarId);
    const post = this.posts.find(p => p.id === postId);
    
    if (!calendar) {
      throw new Error('Calendar not found');
    }
    
    if (!post) {
      throw new Error('Post not found');
    }
    
    if (!calendar.posts.find(p => p.id === postId)) {
      calendar.posts.push(post);
      calendar.updatedAt = new Date();
    }
  }

  async getAccounts(): Promise<SocialMediaAccount[]> {
    return [...this.accounts];
  }

  async getPosts(platform?: string, status?: string): Promise<SocialMediaPost[]> {
    let filteredPosts = [...this.posts];
    
    if (platform) {
      filteredPosts = filteredPosts.filter(p => p.platform === platform);
    }
    
    if (status) {
      filteredPosts = filteredPosts.filter(p => p.status === status);
    }
    
    return filteredPosts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getContentCalendars(): Promise<ContentCalendar[]> {
    return [...this.contentCalendars];
  }

  async updatePost(postId: string, updates: Partial<SocialMediaPost>): Promise<SocialMediaPost> {
    const post = this.posts.find(p => p.id === postId);
    if (!post) {
      throw new Error('Post not found');
    }

    Object.assign(post, updates);
    post.updatedAt = new Date();
    return post;
  }

  async deletePost(postId: string): Promise<void> {
    const index = this.posts.findIndex(p => p.id === postId);
    if (index === -1) {
      throw new Error('Post not found');
    }

    this.posts.splice(index, 1);
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}

export default SocialMediaService;