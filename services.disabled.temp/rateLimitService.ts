export interface RateLimitConfig {
  windowMs: number; // Time window in milliseconds
  maxRequests: number; // Maximum requests per window
  message?: string; // Custom error message
  statusCode?: number; // HTTP status code for rate limit exceeded
}

export interface RateLimitInfo {
  remaining: number;
  resetTime: number;
  total: number;
}

export interface RateLimitResult {
  allowed: boolean;
  info: RateLimitInfo;
  retryAfter?: number;
}

class RateLimitService {
  private store: Map<string, { count: number; resetTime: number }> = new Map();
  private cleanupInterval: NodeJS.Timeout;

  constructor() {
    // Clean up expired entries every 5 minutes
    this.cleanupInterval = setInterval(() => {
      this.cleanup();
    }, 5 * 60 * 1000);
  }

  /**
   * Check if a request is allowed based on rate limiting rules
   */
  checkRateLimit(
    identifier: string, // Usually IP address or user ID
    config: RateLimitConfig
  ): RateLimitResult {
    const now = Date.now();
    const key = `${identifier}:${config.windowMs}`;
    
    let entry = this.store.get(key);
    
    if (!entry || now >= entry.resetTime) {
      // Create new window or reset existing one
      entry = {
        count: 1,
        resetTime: now + config.windowMs
      };
      this.store.set(key, entry);
    } else {
      // Increment count in existing window
      entry.count++;
    }

    const allowed = entry.count <= config.maxRequests;
    const remaining = Math.max(0, config.maxRequests - entry.count);
    
    return {
      allowed,
      info: {
        remaining,
        resetTime: entry.resetTime,
        total: entry.count
      },
      retryAfter: allowed ? undefined : Math.ceil((entry.resetTime - now) / 1000)
    };
  }

  /**
   * Get current rate limit status for an identifier
   */
  getRateLimitStatus(identifier: string, config: RateLimitConfig): RateLimitInfo | null {
    const key = `${identifier}:${config.windowMs}`;
    const entry = this.store.get(key);
    
    if (!entry) return null;
    
    return {
      remaining: Math.max(0, config.maxRequests - entry.count),
      resetTime: entry.resetTime,
      total: entry.count
    };
  }

  /**
   * Reset rate limit for an identifier
   */
  resetRateLimit(identifier: string, config: RateLimitConfig): void {
    const key = `${identifier}:${config.windowMs}`;
    this.store.delete(key);
  }

  /**
   * Clean up expired entries
   */
  private cleanup(): void {
    const now = Date.now();
    for (const [key, entry] of this.store.entries()) {
      if (now >= entry.resetTime) {
        this.store.delete(key);
      }
    }
  }

  /**
   * Get statistics about current rate limiting
   */
  getStats(): { totalEntries: number; activeWindows: number } {
    const now = Date.now();
    let activeWindows = 0;
    
    for (const entry of this.store.values()) {
      if (now < entry.resetTime) {
        activeWindows++;
      }
    }
    
    return {
      totalEntries: this.store.size,
      activeWindows
    };
  }

  /**
   * Destroy the service and clean up resources
   */
  destroy(): void {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
    }
    this.store.clear();
  }
}

// Export singleton instance
export const rateLimitService = new RateLimitService();

// Export the class for custom instances
export { RateLimitService };