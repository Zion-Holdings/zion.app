export interface ShortUrl {
  id: string;
  originalUrl: string;
  shortCode: string;
  shortUrl: string;
  createdAt: Date;
  expiresAt?: Date;
  isActive: boolean;
  clicks: number;
  lastClicked?: Date;
  tags: string[];
  customAlias?: string;
  password?: string;
  analytics: UrlAnalytics;
}

export interface UrlAnalytics {
  totalClicks: number;
  uniqueClicks: number;
  clickHistory: ClickEvent[];
  referrers: { referrer: string; count: number }[];
  countries: { country: string; count: number }[];
  devices: { device: string; count: number }[];
  browsers: { browser: string; count: number }[];
  operatingSystems: { os: string; count: number }[];
  hourlyDistribution: { hour: number; count: number }[];
  dailyDistribution: { date: string; count: number }[];
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
  operatingSystem?: string;
  isUnique: boolean;
}

export interface ShortenerStats {
  totalUrls: number;
  totalClicks: number;
  activeUrls: number;
  expiredUrls: number;
  averageClicksPerUrl: number;
  topUrls: { url: string; clicks: number }[];
  recentActivity: { url: string; clicks: number; lastClick: Date }[];
}

class UrlShortenerService {
  private readonly urls = new Map<string, ShortUrl>();
  private readonly shortCodeToId = new Map<string, string>();
  private readonly customAliasToId = new Map<string, string>();
  private readonly stats = {
    totalUrls: 0,
    totalClicks: 0
  };

  private readonly baseUrl = 'https://zion.app/s/';
  private readonly validUrlRegex = /^https?:\/\/.+/;

  async createShortUrl(
    originalUrl: string,
    options?: {
      customAlias?: string;
      expiresIn?: number; // days
      tags?: string[];
      password?: string;
    }
  ): Promise<ShortUrl> {
    // Validate URL
    if (!this.validUrlRegex.test(originalUrl)) {
      throw new Error('Invalid URL format. Must start with http:// or https://');
    }

    // Check if custom alias is available
    if (options?.customAlias) {
      if (this.customAliasToId.has(options.customAlias)) {
        throw new Error('Custom alias already exists');
      }
      if (!/^[a-zA-Z0-9_-]{3,20}$/.test(options.customAlias)) {
        throw new Error('Custom alias must be 3-20 characters long and contain only letters, numbers, hyphens, and underscores');
      }
    }

    const id = this.generateId();
    const shortCode = options?.customAlias || this.generateShortCode();
    const shortUrl = this.baseUrl + shortCode;
    
    const now = new Date();
    const expiresAt = options?.expiresIn 
      ? new Date(now.getTime() + options.expiresIn * 24 * 60 * 60 * 1000)
      : undefined;

    const shortUrlObj: ShortUrl = {
      id,
      originalUrl,
      shortCode,
      shortUrl,
      createdAt: now,
      expiresAt,
      isActive: true,
      clicks: 0,
      tags: options?.tags || [],
      customAlias: options?.customAlias,
      password: options?.password,
      analytics: {
        totalClicks: 0,
        uniqueClicks: 0,
        clickHistory: [],
        referrers: [],
        countries: [],
        devices: [],
        browsers: [],
        operatingSystems: [],
        hourlyDistribution: Array.from({ length: 24 }, (_, i) => ({ hour: i, count: 0 })),
        dailyDistribution: []
      }
    };

    this.urls.set(id, shortUrlObj);
    this.shortCodeToId.set(shortCode, id);
    if (options?.customAlias) {
      this.customAliasToId.set(options.customAlias, id);
    }

    this.stats.totalUrls++;

    return shortUrlObj;
  }

  async getShortUrl(shortCode: string, password?: string): Promise<ShortUrl | null> {
    const id = this.shortCodeToId.get(shortCode);
    if (!id) return null;

    const shortUrl = this.urls.get(id);
    if (!shortUrl || !shortUrl.isActive) return null;

    // Check if expired
    if (shortUrl.expiresAt && shortUrl.expiresAt < new Date()) {
      shortUrl.isActive = false;
      return null;
    }

    // Check password if required
    if (shortUrl.password && shortUrl.password !== password) {
      throw new Error('Password required for this URL');
    }

    return shortUrl;
  }

  async redirectToUrl(shortCode: string, clickData: {
    ip: string;
    userAgent: string;
    referrer?: string;
    country?: string;
    city?: string;
  }): Promise<string> {
    const shortUrl = await this.getShortUrl(shortCode);
    if (!shortUrl) {
      throw new Error('URL not found or expired');
    }

    // Record click
    await this.recordClick(shortUrl.id, clickData);

    return shortUrl.originalUrl;
  }

  async recordClick(urlId: string, clickData: {
    ip: string;
    userAgent: string;
    referrer?: string;
    country?: string;
    city?: string;
  }): Promise<void> {
    const shortUrl = this.urls.get(urlId);
    if (!shortUrl) return;

    const now = new Date();
    const device = this.detectDevice(clickData.userAgent);
    const browser = this.detectBrowser(clickData.userAgent);
    const os = this.detectOperatingSystem(clickData.userAgent);

    // Check if this is a unique click (based on IP and time window)
    const isUnique = this.isUniqueClick(urlId, clickData.ip, now);

    const clickEvent: ClickEvent = {
      timestamp: now,
      ip: clickData.ip,
      userAgent: clickData.userAgent,
      referrer: clickData.referrer,
      country: clickData.country,
      city: clickData.city,
      device,
      browser,
      operatingSystem: os,
      isUnique
    };

    // Update analytics
    shortUrl.analytics.clickHistory.push(clickEvent);
    shortUrl.analytics.totalClicks++;
    if (isUnique) {
      shortUrl.analytics.uniqueClicks++;
    }

    // Update click counts
    shortUrl.clicks++;
    shortUrl.lastClicked = now;
    this.stats.totalClicks++;

    // Update referrer stats
    if (clickData.referrer) {
      this.updateReferrerStats(shortUrl, clickData.referrer);
    }

    // Update country stats
    if (clickData.country) {
      this.updateCountryStats(shortUrl, clickData.country);
    }

    // Update device stats
    this.updateDeviceStats(shortUrl, device);
    this.updateBrowserStats(shortUrl, browser);
    this.updateOSStats(shortUrl, os);

    // Update time distribution
    this.updateTimeDistribution(shortUrl, now);

    // Keep only last 1000 click events for performance
    if (shortUrl.analytics.clickHistory.length > 1000) {
      shortUrl.analytics.clickHistory = shortUrl.analytics.clickHistory.slice(-1000);
    }
  }

  private isUniqueClick(urlId: string, ip: string, timestamp: Date): boolean {
    const shortUrl = this.urls.get(urlId);
    if (!shortUrl) return false;

    // Consider a click unique if it's from a different IP or more than 1 hour apart
    const oneHourAgo = new Date(timestamp.getTime() - 60 * 60 * 1000);
    
    const recentClick = shortUrl.analytics.clickHistory.find(click => 
      click.ip === ip && click.timestamp > oneHourAgo
    );

    return !recentClick;
  }

  private updateReferrerStats(shortUrl: ShortUrl, referrer: string): void {
    const existing = shortUrl.analytics.referrers.find(r => r.referrer === referrer);
    if (existing) {
      existing.count++;
    } else {
      shortUrl.analytics.referrers.push({ referrer, count: 1 });
    }
  }

  private updateCountryStats(shortUrl: ShortUrl, country: string): void {
    const existing = shortUrl.analytics.countries.find(c => c.country === country);
    if (existing) {
      existing.count++;
    } else {
      shortUrl.analytics.countries.push({ country, count: 1 });
    }
  }

  private updateDeviceStats(shortUrl: ShortUrl, device: string): void {
    const existing = shortUrl.analytics.devices.find(d => d.device === device);
    if (existing) {
      existing.count++;
    } else {
      shortUrl.analytics.devices.push({ device, count: 1 });
    }
  }

  private updateBrowserStats(shortUrl: ShortUrl, browser: string): void {
    const existing = shortUrl.analytics.browsers.find(b => b.browser === browser);
    if (existing) {
      existing.count++;
    } else {
      shortUrl.analytics.browsers.push({ browser, count: 1 });
    }
  }

  private updateOSStats(shortUrl: ShortUrl, os: string): void {
    const existing = shortUrl.analytics.operatingSystems.find(o => o.os === os);
    if (existing) {
      existing.count++;
    } else {
      shortUrl.analytics.operatingSystems.push({ os, count: 1 });
    }
  }

  private updateTimeDistribution(shortUrl: ShortUrl, timestamp: Date): void {
    const hour = timestamp.getHours();
    const hourStat = shortUrl.analytics.hourlyDistribution.find(h => h.hour === hour);
    if (hourStat) {
      hourStat.count++;
    }

    const dateStr = timestamp.toISOString().split('T')[0];
    const dateStat = shortUrl.analytics.dailyDistribution.find(d => d.date === dateStr);
    if (dateStat) {
      dateStat.count++;
    } else {
      shortUrl.analytics.dailyDistribution.push({ date: dateStr, count: 1 });
    }
  }

  private detectDevice(userAgent: string): string {
    if (/Mobile|Android|iPhone|iPad/.test(userAgent)) {
      if (/iPad/.test(userAgent)) return 'Tablet';
      return 'Mobile';
    }
    return 'Desktop';
  }

  private detectBrowser(userAgent: string): string {
    if (/Chrome/.test(userAgent)) return 'Chrome';
    if (/Firefox/.test(userAgent)) return 'Firefox';
    if (/Safari/.test(userAgent)) return 'Safari';
    if (/Edge/.test(userAgent)) return 'Edge';
    if (/Opera/.test(userAgent)) return 'Opera';
    return 'Other';
  }

  private detectOperatingSystem(userAgent: string): string {
    if (/Windows/.test(userAgent)) return 'Windows';
    if (/Mac OS X/.test(userAgent)) return 'macOS';
    if (/Linux/.test(userAgent)) return 'Linux';
    if (/Android/.test(userAgent)) return 'Android';
    if (/iOS/.test(userAgent)) return 'iOS';
    return 'Other';
  }

  async updateShortUrl(
    urlId: string,
    updates: Partial<{
      originalUrl: string;
      tags: string[];
      expiresIn: number;
      isActive: boolean;
      password: string;
    }>
  ): Promise<ShortUrl> {
    const shortUrl = this.urls.get(urlId);
    if (!shortUrl) {
      throw new Error('URL not found');
    }

    if (updates.originalUrl && !this.validUrlRegex.test(updates.originalUrl)) {
      throw new Error('Invalid URL format');
    }

    if (updates.originalUrl) shortUrl.originalUrl = updates.originalUrl;
    if (updates.tags) shortUrl.tags = updates.tags;
    if (updates.isActive !== undefined) shortUrl.isActive = updates.isActive;
    if (updates.password !== undefined) shortUrl.password = updates.password;

    if (updates.expiresIn !== undefined) {
      shortUrl.expiresAt = updates.expiresIn > 0 
        ? new Date(Date.now() + updates.expiresIn * 24 * 60 * 60 * 1000)
        : undefined;
    }

    return shortUrl;
  }

  async deleteShortUrl(urlId: string): Promise<void> {
    const shortUrl = this.urls.get(urlId);
    if (!shortUrl) return;

    this.shortCodeToId.delete(shortUrl.shortCode);
    if (shortUrl.customAlias) {
      this.customAliasToId.delete(shortUrl.customAlias);
    }
    this.urls.delete(urlId);
  }

  async searchUrls(query: string, tags?: string[]): Promise<ShortUrl[]> {
    const results: ShortUrl[] = [];
    
    for (const url of this.urls.values()) {
      if (!url.isActive) continue;
      
      const matchesQuery = url.originalUrl.toLowerCase().includes(query.toLowerCase()) ||
                          url.shortCode.toLowerCase().includes(query.toLowerCase()) ||
                          url.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
      
      const matchesTags = !tags || tags.length === 0 || 
                         tags.some(tag => url.tags.includes(tag));
      
      if (matchesQuery && matchesTags) {
        results.push(url);
      }
    }
    
    return results.sort((a, b) => b.clicks - a.clicks);
  }

  async getStats(): Promise<ShortenerStats> {
    const urls = Array.from(this.urls.values());
    const activeUrls = urls.filter(url => url.isActive).length;
    const expiredUrls = urls.filter(url => url.expiresAt && url.expiresAt < new Date()).length;
    const averageClicksPerUrl = this.stats.totalUrls > 0 
      ? this.stats.totalClicks / this.stats.totalUrls 
      : 0;

    const topUrls = urls
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, 10)
      .map(url => ({ url: url.shortCode, clicks: url.clicks }));

    const recentActivity = urls
      .filter(url => url.lastClicked)
      .sort((a, b) => (b.lastClicked?.getTime() || 0) - (a.lastClicked?.getTime() || 0))
      .slice(0, 10)
      .map(url => ({ 
        url: url.shortCode, 
        clicks: url.clicks, 
        lastClick: url.lastClicked! 
      }));

    return {
      totalUrls: this.stats.totalUrls,
      totalClicks: this.stats.totalClicks,
      activeUrls,
      expiredUrls,
      averageClicksPerUrl: Math.round(averageClicksPerUrl * 100) / 100,
      topUrls,
      recentActivity
    };
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  }

  private generateShortCode(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    // Ensure uniqueness
    if (this.shortCodeToId.has(result)) {
      return this.generateShortCode();
    }
    
    return result;
  }

  async exportAnalytics(urlId: string): Promise<string> {
    const shortUrl = this.urls.get(urlId);
    if (!shortUrl) throw new Error('URL not found');

    const csv = [
      'Timestamp,IP,User Agent,Referrer,Country,City,Device,Browser,OS,Is Unique'
    ];

    shortUrl.analytics.clickHistory.forEach(click => {
      csv.push([
        click.timestamp.toISOString(),
        click.ip,
        `"${click.userAgent}"`,
        click.referrer || '',
        click.country || '',
        click.city || '',
        click.device || '',
        click.browser || '',
        click.operatingSystem || '',
        click.isUnique ? 'Yes' : 'No'
      ].join(','));
    });

    return csv.join('\n');
  }
}

export default new UrlShortenerService();