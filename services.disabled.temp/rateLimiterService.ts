export interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
  blockDuration?: number;
  skipSuccessfulRequests?: boolean;
  skipFailedRequests?: boolean;
}

export interface RateLimitInfo {
  remaining: number;
  resetTime: number;
  totalRequests: number;
  blocked: boolean;
  blockExpiry?: number;
}

export interface RateLimitStats {
  totalRequests: number;
  blockedRequests: number;
  uniqueIPs: number;
  topIPs: { ip: string; requests: number }[];
  averageRequestsPerMinute: number;
}

class RateLimiterService {
  private readonly store = new Map<string, {
    requests: number;
    resetTime: number;
    blocked: boolean;
    blockExpiry?: number;
  }>();

  private readonly configs = new Map<string, RateLimitConfig>();
  private readonly stats = {
    totalRequests: 0,
    blockedRequests: 0,
    uniqueIPs: new Set<string>()
  };

  constructor() {
    // Set up default configurations
    this.setConfig('default', {
      maxRequests: 100,
      windowMs: 15 * 60 * 1000, // 15 minutes
      blockDuration: 60 * 60 * 1000, // 1 hour
      skipSuccessfulRequests: false,
      skipFailedRequests: false
    });

    this.setConfig('strict', {
      maxRequests: 20,
      windowMs: 5 * 60 * 1000, // 5 minutes
      blockDuration: 2 * 60 * 60 * 1000, // 2 hours
      skipSuccessfulRequests: false,
      skipFailedRequests: false
    });

    this.setConfig('permissive', {
      maxRequests: 1000,
      windowMs: 60 * 60 * 1000, // 1 hour
      blockDuration: 30 * 60 * 1000, // 30 minutes
      skipSuccessfulRequests: false,
      skipFailedRequests: false
    });
  }

  setConfig(name: string, config: RateLimitConfig): void {
    this.configs.set(name, config);
  }

  async checkRateLimit(identifier: string, configName: string = 'default'): Promise<RateLimitInfo> {
    const config = this.configs.get(configName) || this.configs.get('default')!;
    const now = Date.now();
    const key = `${identifier}:${configName}`;
    
    let record = this.store.get(key);
    
    if (!record || now >= record.resetTime) {
      // Reset window or create new record
      record = {
        requests: 0,
        resetTime: now + config.windowMs,
        blocked: false
      };
    }

    // Check if currently blocked
    if (record.blocked && record.blockExpiry && now < record.blockExpiry) {
      this.stats.blockedRequests++;
      return {
        remaining: 0,
        resetTime: record.blockExpiry,
        totalRequests: record.requests,
        blocked: true,
        blockExpiry: record.blockExpiry
      };
    }

    // Reset block if expired
    if (record.blocked && record.blockExpiry && now >= record.blockExpiry) {
      record.blocked = false;
      record.blockExpiry = undefined;
    }

    // Increment request count
    record.requests++;
    this.stats.totalRequests++;
    this.stats.uniqueIPs.add(identifier);

    // Check if limit exceeded
    if (record.requests > config.maxRequests) {
      record.blocked = true;
      record.blockExpiry = now + (config.blockDuration || 60 * 60 * 1000);
      this.stats.blockedRequests++;
    }

    this.store.set(key, record);

    return {
      remaining: Math.max(0, config.maxRequests - record.requests),
      resetTime: record.resetTime,
      totalRequests: record.requests,
      blocked: record.blocked,
      blockExpiry: record.blockExpiry
    };
  }

  async getRateLimitInfo(identifier: string, configName: string = 'default'): Promise<RateLimitInfo> {
    const config = this.configs.get(configName) || this.configs.get('default')!;
    const key = `${identifier}:${configName}`;
    const record = this.store.get(key);
    
    if (!record) {
      return {
        remaining: config.maxRequests,
        resetTime: Date.now() + config.windowMs,
        totalRequests: 0,
        blocked: false
      };
    }

    return {
      remaining: Math.max(0, config.maxRequests - record.requests),
      resetTime: record.resetTime,
      totalRequests: record.requests,
      blocked: record.blocked,
      blockExpiry: record.blockExpiry
    };
  }

  async resetRateLimit(identifier: string, configName: string = 'default'): Promise<void> {
    const key = `${identifier}:${configName}`;
    this.store.delete(key);
  }

  async getStats(): Promise<RateLimitStats> {
    const now = Date.now();
    const topIPs = Array.from(this.store.entries())
      .map(([key, record]) => {
        const ip = key.split(':')[0];
        return { ip, requests: record.requests };
      })
      .sort((a, b) => b.requests - a.requests)
      .slice(0, 10);

    // Calculate average requests per minute
    const totalTimeMinutes = 60; // Assume 1 hour window for calculation
    const averageRequestsPerMinute = this.stats.totalRequests / totalTimeMinutes;

    return {
      totalRequests: this.stats.totalRequests,
      blockedRequests: this.stats.blockedRequests,
      uniqueIPs: this.stats.uniqueIPs.size,
      topIPs,
      averageRequestsPerMinute: Math.round(averageRequestsPerMinute * 100) / 100
    };
  }

  async clearStats(): Promise<void> {
    this.stats.totalRequests = 0;
    this.stats.blockedRequests = 0;
    this.stats.uniqueIPs.clear();
  }

  async clearAllData(): Promise<void> {
    this.store.clear();
    await this.clearStats();
  }

  // Utility methods for different identifier types
  async checkRateLimitByIP(ip: string, configName: string = 'default'): Promise<RateLimitInfo> {
    return this.checkRateLimit(ip, configName);
  }

  async checkRateLimitByUser(userId: string, configName: string = 'default'): Promise<RateLimitInfo> {
    return this.checkRateLimit(`user:${userId}`, configName);
  }

  async checkRateLimitByAPIKey(apiKey: string, configName: string = 'default'): Promise<RateLimitInfo> {
    return this.checkRateLimit(`key:${apiKey}`, configName);
  }

  // Middleware helper for Express.js
  createMiddleware(configName: string = 'default') {
    return (req: any, res: any, next: any) => {
      const identifier = req.ip || req.connection.remoteAddress || 'unknown';
      
      this.checkRateLimit(identifier, configName)
        .then((info) => {
          if (info.blocked) {
            res.status(429).json({
              error: 'Too Many Requests',
              message: 'Rate limit exceeded. Please try again later.',
              retryAfter: Math.ceil((info.blockExpiry! - Date.now()) / 1000)
            });
            return;
          }

          // Add rate limit headers
          res.set({
            'X-RateLimit-Limit': this.configs.get(configName)?.maxRequests || 100,
            'X-RateLimit-Remaining': info.remaining,
            'X-RateLimit-Reset': info.resetTime
          });

          next();
        })
        .catch((error) => {
          console.error('Rate limiter error:', error);
          next(); // Continue on error
        });
    };
  }

  // Generate rate limit configuration recommendations
  async generateRecommendations(currentStats: RateLimitStats): Promise<string[]> {
    const recommendations: string[] = [];

    if (currentStats.blockedRequests > currentStats.totalRequests * 0.1) {
      recommendations.push('High block rate detected. Consider increasing rate limits or implementing better client-side throttling.');
    }

    if (currentStats.averageRequestsPerMinute > 100) {
      recommendations.push('High request volume. Consider implementing caching or optimizing API endpoints.');
    }

    if (currentStats.uniqueIPs > 1000) {
      recommendations.push('Large number of unique IPs. Consider implementing IP-based rate limiting tiers.');
    }

    if (currentStats.topIPs.some(ip => ip.requests > 1000)) {
      recommendations.push('Some IPs have very high request counts. Consider implementing stricter limits for high-volume users.');
    }

    return recommendations;
  }
}

export default new RateLimiterService();