export interface RateLimitConfig {
  requestsPerMinute: number;
  requestsPerHour: number;
  requestsPerDay: number;
  burstLimit: number;
  windowSize: number; // in milliseconds
  strategy: 'sliding' | 'fixed' | 'leaky-bucket';
}

export interface RateLimitInfo {
  remaining: number;
  reset: number;
  limit: number;
  used: number;
  resetTime: Date;
}

export interface RateLimitViolation {
  timestamp: number;
  ip: string;
  endpoint: string;
  limit: number;
  used: number;
  resetTime: Date;
  blocked: boolean;
}

export interface APIUsageStats {
  totalRequests: number;
  successfulRequests: number;
  blockedRequests: number;
  averageResponseTime: number;
  peakRequestsPerMinute: number;
  uniqueIPs: number;
  topEndpoints: Array<{
    endpoint: string;
    requests: number;
    averageResponseTime: number;
  }>;
}

export interface RateLimitRule {
  id: string;
  name: string;
  pattern: string; // URL pattern to match
  config: RateLimitConfig;
  enabled: boolean;
  priority: number;
}

class APIRateLimiterService {
  private rateLimitRules: Map<string, RateLimitRule> = new Map();
  private requestCounts: Map<string, Map<string, number[]>> = new Map(); // endpoint -> ip -> timestamps[]
  private violations: RateLimitViolation[] = [];
  private usageStats: Map<string, {
    total: number;
    successful: number;
    blocked: number;
    responseTimes: number[];
    lastRequest: number;
  }> = new Map();

  constructor() {
    this.initializeDefaultRules();
  }

  private initializeDefaultRules(): void {
    const defaultRules: RateLimitRule[] = [
      {
        id: 'default',
        name: 'Default Rate Limit',
        pattern: '*',
        config: {
          requestsPerMinute: 60,
          requestsPerHour: 1000,
          requestsPerDay: 10000,
          burstLimit: 10,
          windowSize: 60000, // 1 minute
          strategy: 'sliding'
        },
        enabled: true,
        priority: 100
      },
      {
        id: 'auth',
        name: 'Authentication Endpoints',
        pattern: '/auth/*',
        config: {
          requestsPerMinute: 10,
          requestsPerHour: 100,
          requestsPerDay: 1000,
          burstLimit: 3,
          windowSize: 60000,
          strategy: 'fixed'
        },
        enabled: true,
        priority: 200
      },
      {
        id: 'api',
        name: 'API Endpoints',
        pattern: '/api/*',
        config: {
          requestsPerMinute: 120,
          requestsPerHour: 2000,
          requestsPerDay: 20000,
          burstLimit: 20,
          windowSize: 60000,
          strategy: 'sliding'
        },
        enabled: true,
        priority: 150
      }
    ];

    defaultRules.forEach(rule => this.addRule(rule));
  }

  addRule(rule: RateLimitRule): void {
    this.rateLimitRules.set(rule.id, rule);
  }

  removeRule(ruleId: string): boolean {
    return this.rateLimitRules.delete(ruleId);
  }

  getRules(): RateLimitRule[] {
    return Array.from(this.rateLimitRules.values()).sort((a, b) => a.priority - b.priority);
  }

  async checkRateLimit(endpoint: string, ip: string): Promise<{
    allowed: boolean;
    info: RateLimitInfo;
    rule: RateLimitRule;
  }> {
    const rule = this.findMatchingRule(endpoint);
    if (!rule || !rule.enabled) {
      return {
        allowed: true,
        info: { remaining: 999999, reset: Date.now() + 60000, limit: 999999, used: 0, resetTime: new Date(Date.now() + 60000) },
        rule: rule || this.rateLimitRules.get('default')!
      };
    }

    const key = `${endpoint}:${ip}`;
    const now = Date.now();
    
    // Initialize request tracking for this key
    if (!this.requestCounts.has(key)) {
      this.requestCounts.set(key, new Map());
    }
    
    const ipCounts = this.requestCounts.get(key)!;
    if (!ipCounts.has(ip)) {
      ipCounts.set(ip, []);
    }
    
    const timestamps = ipCounts.get(ip)!;
    
    // Clean old timestamps based on rule strategy
    this.cleanOldTimestamps(timestamps, rule.config);
    
    // Check if request is allowed
    const allowed = this.isRequestAllowed(timestamps, rule.config);
    
    // Record the request
    timestamps.push(now);
    
    // Update usage statistics
    this.updateUsageStats(endpoint, allowed);
    
    // Generate rate limit info
    const info = this.generateRateLimitInfo(timestamps, rule.config);
    
    // Record violation if blocked
    if (!allowed) {
      this.recordViolation(endpoint, ip, rule, info);
    }
    
    return { allowed, info, rule };
  }

  private findMatchingRule(endpoint: string): RateLimitRule | null {
    const rules = Array.from(this.rateLimitRules.values())
      .filter(rule => rule.enabled)
      .sort((a, b) => a.priority - b.priority);
    
    for (const rule of rules) {
      if (this.matchesPattern(endpoint, rule.pattern)) {
        return rule;
      }
    }
    
    return null;
  }

  private matchesPattern(endpoint: string, pattern: string): boolean {
    if (pattern === '*') return true;
    
    const patternParts = pattern.split('/');
    const endpointParts = endpoint.split('/');
    
    if (patternParts.length > endpointParts.length) return false;
    
    for (let i = 0; i < patternParts.length; i++) {
      if (patternParts[i] === '*') continue;
      if (patternParts[i] !== endpointParts[i]) return false;
    }
    
    return true;
  }

  private cleanOldTimestamps(timestamps: number[], config: RateLimitConfig): void {
    const now = Date.now();
    
    if (config.strategy === 'sliding') {
      // Remove timestamps older than the window
      const cutoff = now - config.windowSize;
      const filtered = timestamps.filter(timestamp => timestamp > cutoff);
      timestamps.splice(0, timestamps.length, ...filtered);
    } else if (config.strategy === 'fixed') {
      // For fixed windows, we'll implement a more sophisticated approach
      // This is a simplified version
      const cutoff = now - config.windowSize;
      const filtered = timestamps.filter(timestamp => timestamp > cutoff);
      timestamps.splice(0, timestamps.length, ...filtered);
    }
  }

  private isRequestAllowed(timestamps: number[], config: RateLimitConfig): boolean {
    const now = Date.now();
    
    if (config.strategy === 'sliding') {
      const windowStart = now - config.windowSize;
      const requestsInWindow = timestamps.filter(timestamp => timestamp > windowStart).length;
      
      return requestsInWindow < config.requestsPerMinute;
    } else if (config.strategy === 'fixed') {
      // Fixed window approach
      const windowStart = Math.floor(now / config.windowSize) * config.windowSize;
      const requestsInWindow = timestamps.filter(timestamp => timestamp >= windowStart).length;
      
      return requestsInWindow < config.requestsPerMinute;
    } else if (config.strategy === 'leaky-bucket') {
      // Leaky bucket implementation
      const bucketCapacity = config.requestsPerMinute;
      const leakRate = bucketCapacity / (config.windowSize / 1000); // requests per second
      
      const now = Date.now();
      const timeSinceLastRequest = timestamps.length > 0 ? now - timestamps[timestamps.length - 1] : 0;
      const leakedTokens = Math.floor(timeSinceLastRequest / 1000 * leakRate);
      
      const currentTokens = Math.min(bucketCapacity, timestamps.length + leakedTokens);
      
      return currentTokens < bucketCapacity;
    }
    
    return true;
  }

  private generateRateLimitInfo(timestamps: number[], config: RateLimitConfig): RateLimitInfo {
    const now = Date.now();
    const windowStart = now - config.windowSize;
    const requestsInWindow = timestamps.filter(timestamp => timestamp > windowStart).length;
    
    return {
      remaining: Math.max(0, config.requestsPerMinute - requestsInWindow),
      reset: now + config.windowSize,
      limit: config.requestsPerMinute,
      used: requestsInWindow,
      resetTime: new Date(now + config.windowSize)
    };
  }

  private recordViolation(endpoint: string, ip: string, rule: RateLimitRule, info: RateLimitInfo): void {
    const violation: RateLimitViolation = {
      timestamp: Date.now(),
      ip,
      endpoint,
      limit: info.limit,
      used: info.used,
      resetTime: info.resetTime,
      blocked: true
    };
    
    this.violations.push(violation);
    
    // Keep only last 1000 violations
    if (this.violations.length > 1000) {
      this.violations = this.violations.slice(-1000);
    }
  }

  private updateUsageStats(endpoint: string, allowed: boolean): void {
    if (!this.usageStats.has(endpoint)) {
      this.usageStats.set(endpoint, {
        total: 0,
        successful: 0,
        blocked: 0,
        responseTimes: [],
        lastRequest: Date.now()
      });
    }
    
    const stats = this.usageStats.get(endpoint)!;
    stats.total++;
    stats.lastRequest = Date.now();
    
    if (allowed) {
      stats.successful++;
    } else {
      stats.blocked++;
    }
  }

  async recordResponseTime(endpoint: string, responseTime: number): Promise<void> {
    if (!this.usageStats.has(endpoint)) {
      this.usageStats.set(endpoint, {
        total: 0,
        successful: 0,
        blocked: 0,
        responseTimes: [],
        lastRequest: Date.now()
      });
    }
    
    const stats = this.usageStats.get(endpoint)!;
    stats.responseTimes.push(responseTime);
    
    // Keep only last 100 response times
    if (stats.responseTimes.length > 100) {
      stats.responseTimes = stats.responseTimes.slice(-100);
    }
  }

  getRateLimitInfo(endpoint: string, ip: string): RateLimitInfo | null {
    const key = `${endpoint}:${ip}`;
    const ipCounts = this.requestCounts.get(key);
    
    if (!ipCounts || !ipCounts.has(ip)) {
      return null;
    }
    
    const rule = this.findMatchingRule(endpoint);
    if (!rule) return null;
    
    const timestamps = ipCounts.get(ip)!;
    return this.generateRateLimitInfo(timestamps, rule.config);
  }

  getViolations(limit: number = 100): RateLimitViolation[] {
    return this.violations.slice(-limit);
  }

  getViolationsByIP(ip: string, limit: number = 100): RateLimitViolation[] {
    return this.violations
      .filter(v => v.ip === ip)
      .slice(-limit);
  }

  getViolationsByEndpoint(endpoint: string, limit: number = 100): RateLimitViolation[] {
    return this.violations
      .filter(v => v.endpoint === endpoint)
      .slice(-limit);
  }

  getUsageStats(): APIUsageStats {
    const endpoints = Array.from(this.usageStats.keys());
    const totalRequests = endpoints.reduce((sum, endpoint) => sum + this.usageStats.get(endpoint)!.total, 0);
    const successfulRequests = endpoints.reduce((sum, endpoint) => sum + this.usageStats.get(endpoint)!.successful, 0);
    const blockedRequests = endpoints.reduce((sum, endpoint) => sum + this.usageStats.get(endpoint)!.blocked, 0);
    
    const allResponseTimes = endpoints.flatMap(endpoint => this.usageStats.get(endpoint)!.responseTimes);
    const averageResponseTime = allResponseTimes.length > 0 
      ? allResponseTimes.reduce((sum, time) => sum + time, 0) / allResponseTimes.length 
      : 0;
    
    const topEndpoints = endpoints
      .map(endpoint => {
        const stats = this.usageStats.get(endpoint)!;
        const avgResponseTime = stats.responseTimes.length > 0
          ? stats.responseTimes.reduce((sum, time) => sum + time, 0) / stats.responseTimes.length
          : 0;
        
        return {
          endpoint,
          requests: stats.total,
          averageResponseTime: avgResponseTime
        };
      })
      .sort((a, b) => b.requests - a.requests)
      .slice(0, 10);
    
    // Calculate peak requests per minute (simplified)
    const peakRequestsPerMinute = Math.max(...endpoints.map(endpoint => {
      const stats = this.usageStats.get(endpoint)!;
      return stats.total;
    }));
    
    // Count unique IPs (simplified)
    const uniqueIPs = new Set(this.violations.map(v => v.ip)).size;
    
    return {
      totalRequests,
      successfulRequests,
      blockedRequests,
      averageResponseTime,
      peakRequestsPerMinute,
      uniqueIPs,
      topEndpoints
    };
  }

  async resetCounters(endpoint?: string, ip?: string): Promise<void> {
    if (endpoint && ip) {
      const key = `${endpoint}:${ip}`;
      const ipCounts = this.requestCounts.get(key);
      if (ipCounts) {
        ipCounts.delete(ip);
      }
    } else if (endpoint) {
      const key = `${endpoint}:*`;
      this.requestCounts.delete(key);
    } else {
      this.requestCounts.clear();
    }
  }

  async getEndpointStats(endpoint: string): Promise<{
    totalRequests: number;
    successfulRequests: number;
    blockedRequests: number;
    averageResponseTime: number;
    lastRequest: Date;
    rateLimitInfo: RateLimitInfo | null;
  }> {
    const stats = this.usageStats.get(endpoint);
    if (!stats) {
      return {
        totalRequests: 0,
        successfulRequests: 0,
        blockedRequests: 0,
        averageResponseTime: 0,
        lastRequest: new Date(0),
        rateLimitInfo: null
      };
    }
    
    const averageResponseTime = stats.responseTimes.length > 0
      ? stats.responseTimes.reduce((sum, time) => sum + time, 0) / stats.responseTimes.length
      : 0;
    
    return {
      totalRequests: stats.total,
      successfulRequests: stats.successful,
      blockedRequests: stats.blocked,
      averageResponseTime,
      lastRequest: new Date(stats.lastRequest),
      rateLimitInfo: null // This would need to be calculated based on current state
    };
  }

  async exportMetrics(): Promise<{
    rules: RateLimitRule[];
    usageStats: APIUsageStats;
    violations: RateLimitViolation[];
    timestamp: number;
  }> {
    return {
      rules: this.getRules(),
      usageStats: this.getUsageStats(),
      violations: this.getViolations(1000),
      timestamp: Date.now()
    };
  }
}

export default APIRateLimiterService;