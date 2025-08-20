export interface ShortUrl {
  id: string;
  originalUrl: string;
  shortCode: string;
  shortUrl: string;
  title?: string;
  description?: string;
  tags?: string[];
  createdAt: Date;
  expiresAt?: Date;
  isActive: boolean;
  password?: string;
  clickCount: number;
  lastClicked?: Date;
  createdBy?: string;
}

export interface UrlAnalytics {
  shortCode: string;
  totalClicks: number;
  uniqueVisitors: number;
  referrers: { [key: string]: number };
  countries: { [key: string]: number };
  devices: { [key: string]: number };
  browsers: { [key: string]: number };
  clickHistory: ClickEvent[];
  lastUpdated: Date;
}

export interface ClickEvent {
  timestamp: Date;
  ip: string;
  userAgent: string;
  referrer?: string;
  country?: string;
  city?: string;
  device?: string;
  browser?: string;
  os?: string;
}

export interface CreateUrlOptions {
  originalUrl: string;
  customCode?: string;
  title?: string;
  description?: string;
  tags?: string[];
  expiresAt?: Date;
  password?: string;
  createdBy?: string;
}

class UrlShortenerService {
  private urls: Map<string, ShortUrl> = new Map();
  private analytics: Map<string, UrlAnalytics> = new Map();
  private codeToId: Map<string, string> = new Map();
  private clickEvents: Map<string, ClickEvent[]> = new Map();

  constructor() {
    // Initialize with some sample data
    this.initializeSampleData();
  }

  /**
   * Create a new shortened URL
   */
  async createShortUrl(options: CreateUrlOptions): Promise<ShortUrl> {
    const { originalUrl, customCode, title, description, tags, expiresAt, password, createdBy } = options;

    // Validate original URL
    if (!this.isValidUrl(originalUrl)) {
      throw new Error('Invalid URL provided');
    }

    // Generate or use custom short code
    let shortCode = customCode;
    if (!shortCode) {
      shortCode = this.generateShortCode();
    } else {
      // Check if custom code is available
      if (this.codeToId.has(shortCode)) {
        throw new Error('Custom code already exists');
      }
    }

    // Create short URL object
    const shortUrl: ShortUrl = {
      id: this.generateId(),
      originalUrl,
      shortCode,
      shortUrl: `${this.getBaseUrl()}/${shortCode}`,
      title,
      description,
      tags: tags || [],
      createdAt: new Date(),
      expiresAt,
      isActive: true,
      password,
      clickCount: 0,
      createdBy
    };

    // Store the URL
    this.urls.set(shortUrl.id, shortUrl);
    this.codeToId.set(shortCode, shortUrl.id);

    // Initialize analytics
    this.analytics.set(shortCode, {
      shortCode,
      totalClicks: 0,
      uniqueVisitors: 0,
      referrers: {},
      countries: {},
      devices: {},
      browsers: {},
      clickHistory: [],
      lastUpdated: new Date()
    });

    this.clickEvents.set(shortCode, []);

    return shortUrl;
  }

  /**
   * Get original URL by short code
   */
  async getOriginalUrl(shortCode: string, options?: { password?: string; ip?: string; userAgent?: string }): Promise<string> {
    const urlId = this.codeToId.get(shortCode);
    if (!urlId) {
      throw new Error('Short URL not found');
    }

    const shortUrl = this.urls.get(urlId);
    if (!shortUrl) {
      throw new Error('Short URL not found');
    }

    // Check if URL is active
    if (!shortUrl.isActive) {
      throw new Error('Short URL is inactive');
    }

    // Check if URL has expired
    if (shortUrl.expiresAt && shortUrl.expiresAt < new Date()) {
      throw new Error('Short URL has expired');
    }

    // Check password if required
    if (shortUrl.password && shortUrl.password !== options?.password) {
      throw new Error('Password required');
    }

    // Record click
    if (options?.ip && options?.userAgent) {
      await this.recordClick(shortCode, options.ip, options.userAgent);
    }

    // Update click count
    shortUrl.clickCount++;
    shortUrl.lastClicked = new Date();

    return shortUrl.originalUrl;
  }

  /**
   * Get short URL details
   */
  async getShortUrl(shortCode: string): Promise<ShortUrl | null> {
    const urlId = this.codeToId.get(shortCode);
    if (!urlId) return null;
    return this.urls.get(urlId) || null;
  }

  /**
   * Get analytics for a short URL
   */
  async getAnalytics(shortCode: string): Promise<UrlAnalytics | null> {
    return this.analytics.get(shortCode) || null;
  }

  /**
   * Update short URL
   */
  async updateShortUrl(shortCode: string, updates: Partial<ShortUrl>): Promise<ShortUrl> {
    const urlId = this.codeToId.get(shortCode);
    if (!urlId) {
      throw new Error('Short URL not found');
    }

    const shortUrl = this.urls.get(urlId);
    if (!shortUrl) {
      throw new Error('Short URL not found');
    }

    // Update fields
    Object.assign(shortUrl, updates);
    shortUrl.shortUrl = `${this.getBaseUrl()}/${shortUrl.shortCode}`;

    return shortUrl;
  }

  /**
   * Delete short URL
   */
  async deleteShortUrl(shortCode: string): Promise<boolean> {
    const urlId = this.codeToId.get(shortCode);
    if (!urlId) return false;

    // Remove from all maps
    this.urls.delete(urlId);
    this.codeToId.delete(shortCode);
    this.analytics.delete(shortCode);
    this.clickEvents.delete(shortCode);

    return true;
  }

  /**
   * Get all URLs (with pagination)
   */
  async getAllUrls(page: number = 1, limit: number = 20): Promise<{ urls: ShortUrl[]; total: number; page: number; totalPages: number }> {
    const allUrls = Array.from(this.urls.values());
    const total = allUrls.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const urls = allUrls.slice(startIndex, endIndex);

    return { urls, total, page, totalPages };
  }

  /**
   * Search URLs
   */
  async searchUrls(query: string): Promise<ShortUrl[]> {
    const searchTerm = query.toLowerCase();
    const results: ShortUrl[] = [];

    for (const url of this.urls.values()) {
      if (
        url.originalUrl.toLowerCase().includes(searchTerm) ||
        url.title?.toLowerCase().includes(searchTerm) ||
        url.description?.toLowerCase().includes(searchTerm) ||
        url.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
      ) {
        results.push(url);
      }
    }

    return results;
  }

  /**
   * Get click statistics
   */
  async getClickStats(shortCode: string, days: number = 30): Promise<{ date: string; clicks: number }[]> {
    const events = this.clickEvents.get(shortCode) || [];
    const stats: { [key: string]: number } = {};
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);

    // Group clicks by date
    for (const event of events) {
      if (event.timestamp >= cutoffDate) {
        const dateStr = event.timestamp.toISOString().split('T')[0];
        stats[dateStr] = (stats[dateStr] || 0) + 1;
      }
    }

    // Convert to array and sort by date
    return Object.entries(stats)
      .map(([date, clicks]) => ({ date, clicks }))
      .sort((a, b) => a.date.localeCompare(b.date));
  }

  /**
   * Generate a unique short code
   */
  private generateShortCode(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code: string;
    
    do {
      code = '';
      for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
      }
    } while (this.codeToId.has(code));

    return code;
  }

  /**
   * Generate a unique ID
   */
  private generateId(): string {
    return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
  }

  /**
   * Validate URL format
   */
  private isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Get base URL for short URLs
   */
  private getBaseUrl(): string {
    // In production, this would come from environment variables
    return process.env.BASE_URL || 'https://zion.app';
  }

  /**
   * Record a click event
   */
  private async recordClick(shortCode: string, ip: string, userAgent: string): Promise<void> {
    const events = this.clickEvents.get(shortCode) || [];
    const analytics = this.analytics.get(shortCode);

    if (!analytics) return;

    // Parse user agent
    const device = this.parseDevice(userAgent);
    const browser = this.parseBrowser(userAgent);
    const os = this.parseOS(userAgent);

    // Create click event
    const clickEvent: ClickEvent = {
      timestamp: new Date(),
      ip,
      userAgent,
      device,
      browser,
      os
    };

    events.push(clickEvent);
    this.clickEvents.set(shortCode, events);

    // Update analytics
    analytics.totalClicks++;
    analytics.lastUpdated = new Date();
    analytics.clickHistory.push(clickEvent);

    // Update device stats
    if (device) {
      analytics.devices[device] = (analytics.devices[device] || 0) + 1;
    }

    // Update browser stats
    if (browser) {
      analytics.browsers[browser] = (analytics.browsers[browser] || 0) + 1;
    }

    // Keep only last 1000 events for performance
    if (analytics.clickHistory.length > 1000) {
      analytics.clickHistory = analytics.clickHistory.slice(-1000);
    }
  }

  /**
   * Parse device type from user agent
   */
  private parseDevice(userAgent: string): string {
    const ua = userAgent.toLowerCase();
    if (ua.includes('mobile')) return 'Mobile';
    if (ua.includes('tablet')) return 'Tablet';
    if (ua.includes('desktop')) return 'Desktop';
    if (ua.includes('android') || ua.includes('iphone') || ua.includes('ipad')) return 'Mobile';
    return 'Desktop';
  }

  /**
   * Parse browser from user agent
   */
  private parseBrowser(userAgent: string): string {
    const ua = userAgent.toLowerCase();
    if (ua.includes('chrome')) return 'Chrome';
    if (ua.includes('firefox')) return 'Firefox';
    if (ua.includes('safari')) return 'Safari';
    if (ua.includes('edge')) return 'Edge';
    if (ua.includes('opera')) return 'Opera';
    return 'Other';
  }

  /**
   * Parse OS from user agent
   */
  private parseOS(userAgent: string): string {
    const ua = userAgent.toLowerCase();
    if (ua.includes('windows')) return 'Windows';
    if (ua.includes('mac')) return 'macOS';
    if (ua.includes('linux')) return 'Linux';
    if (ua.includes('android')) return 'Android';
    if (ua.includes('ios')) return 'iOS';
    return 'Other';
  }

  /**
   * Initialize with sample data
   */
  private initializeSampleData(): void {
    // Add some sample URLs for demonstration
    const sampleUrls = [
      {
        originalUrl: 'https://github.com/Zion-Holdings/zion.app',
        title: 'Zion Tech Group Repository',
        description: 'Advanced autonomous technology platform',
        tags: ['github', 'technology', 'automation']
      },
      {
        originalUrl: 'https://nextjs.org',
        title: 'Next.js Framework',
        description: 'React framework for production',
        tags: ['react', 'framework', 'web']
      }
    ];

    sampleUrls.forEach(async (sample) => {
      try {
        await this.createShortUrl(sample);
      } catch (error) {
        console.error('Failed to create sample URL:', error);
      }
    });
  }

  /**
   * Get service statistics
   */
  getStats(): { totalUrls: number; totalClicks: number; totalAnalytics: number } {
    let totalClicks = 0;
    for (const analytics of this.analytics.values()) {
      totalClicks += analytics.totalClicks;
    }

    return {
      totalUrls: this.urls.size,
      totalClicks,
      totalAnalytics: this.analytics.size
    };
  }

  /**
   * Clean up expired URLs
   */
  cleanupExpiredUrls(): number {
    const now = new Date();
    let cleanedCount = 0;

    for (const [id, url] of this.urls.entries()) {
      if (url.expiresAt && url.expiresAt < now) {
        this.deleteShortUrl(url.shortCode);
        cleanedCount++;
      }
    }

    return cleanedCount;
  }
}

// Export singleton instance
export const urlShortenerService = new UrlShortenerService();

// Export the class for custom instances
export { UrlShortenerService };