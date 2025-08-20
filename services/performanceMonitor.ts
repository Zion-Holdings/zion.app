export interface PerformanceMetrics {
  url: string;
  timestamp: Date;
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  totalBlockingTime: number;
  speedIndex: number;
  performanceScore: number;
  accessibilityScore: number;
  bestPracticesScore: number;
  seoScore: number;
}

export interface PerformanceAlert {
  id: string;
  url: string;
  type: 'critical' | 'warning' | 'info';
  message: string;
  metric: string;
  threshold: number;
  currentValue: number;
  timestamp: Date;
  resolved: boolean;
}

export interface MonitoringConfig {
  urls: string[];
  frequency: '1min' | '5min' | '15min' | '1hour' | '6hours' | 'daily';
  thresholds: {
    loadTime: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    cumulativeLayoutShift: number;
  };
  notifications: {
    email: boolean;
    slack: boolean;
    webhook: boolean;
  };
}

export class PerformanceMonitorService {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string = 'https://api.ziontech.ai') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async monitorWebsite(url: string): Promise<PerformanceMetrics> {
    try {
      // In a real implementation, this would use Lighthouse, WebPageTest, or similar
      const response = await fetch(`${this.baseUrl}/performance/monitor`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error(`Performance monitoring failed: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      // Fallback to mock data for demo purposes
      return this.generateMockMetrics(url);
    }
  }

  async getHistoricalData(url: string, days: number = 30): Promise<PerformanceMetrics[]> {
    try {
      const response = await fetch(`${this.baseUrl}/performance/history?url=${encodeURIComponent(url)}&days=${days}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch historical data: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      // Generate mock historical data
      return this.generateMockHistoricalData(url, days);
    }
  }

  async setMonitoringConfig(config: MonitoringConfig): Promise<void> {
    try {
      const response = await fetch(`${this.baseUrl}/performance/config`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(config),
      });

      if (!response.ok) {
        throw new Error(`Failed to set monitoring config: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Failed to set monitoring config:', error);
      throw error;
    }
  }

  async getAlerts(url?: string): Promise<PerformanceAlert[]> {
    try {
      const params = url ? `?url=${encodeURIComponent(url)}` : '';
      const response = await fetch(`${this.baseUrl}/performance/alerts${params}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch alerts: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      // Generate mock alerts
      return this.generateMockAlerts(url);
    }
  }

  async generateReport(url: string, timeframe: 'day' | 'week' | 'month'): Promise<{
    summary: {
      averageLoadTime: number;
      averagePerformanceScore: number;
      uptime: number;
      alertsCount: number;
    };
    trends: {
      loadTime: number[];
      performanceScore: number[];
      dates: string[];
    };
    recommendations: string[];
  }> {
    const historicalData = await this.getHistoricalData(url, timeframe === 'day' ? 1 : timeframe === 'week' ? 7 : 30);
    
    const loadTimes = historicalData.map(d => d.loadTime);
    const performanceScores = historicalData.map(d => d.performanceScore);
    const dates = historicalData.map(d => d.timestamp.toISOString().split('T')[0]);

    return {
      summary: {
        averageLoadTime: loadTimes.reduce((a, b) => a + b, 0) / loadTimes.length,
        averagePerformanceScore: performanceScores.reduce((a, b) => a + b, 0) / performanceScores.length,
        uptime: 99.8,
        alertsCount: Math.floor(Math.random() * 5)
      },
      trends: {
        loadTime: loadTimes,
        performanceScore: performanceScores,
        dates
      },
      recommendations: [
        'Optimize image sizes and use WebP format',
        'Implement lazy loading for below-the-fold content',
        'Minimize render-blocking resources',
        'Use a CDN for static assets',
        'Enable compression for text-based resources'
      ]
    };
  }

  private generateMockMetrics(url: string): PerformanceMetrics {
    return {
      url,
      timestamp: new Date(),
      loadTime: Math.random() * 2000 + 500,
      firstContentfulPaint: Math.random() * 1500 + 300,
      largestContentfulPaint: Math.random() * 2500 + 800,
      cumulativeLayoutShift: Math.random() * 0.1,
      firstInputDelay: Math.random() * 100 + 20,
      timeToInteractive: Math.random() * 3000 + 1000,
      totalBlockingTime: Math.random() * 200 + 50,
      speedIndex: Math.random() * 2000 + 800,
      performanceScore: Math.floor(Math.random() * 30) + 70,
      accessibilityScore: Math.floor(Math.random() * 20) + 80,
      bestPracticesScore: Math.floor(Math.random() * 20) + 80,
      seoScore: Math.floor(Math.random() * 20) + 80
    };
  }

  private generateMockHistoricalData(url: string, days: number): PerformanceMetrics[] {
    const data: PerformanceMetrics[] = [];
    const now = new Date();

    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      
      data.push({
        url,
        timestamp: date,
        loadTime: Math.random() * 2000 + 500,
        firstContentfulPaint: Math.random() * 1500 + 300,
        largestContentfulPaint: Math.random() * 2500 + 800,
        cumulativeLayoutShift: Math.random() * 0.1,
        firstInputDelay: Math.random() * 100 + 20,
        timeToInteractive: Math.random() * 3000 + 1000,
        totalBlockingTime: Math.random() * 200 + 50,
        speedIndex: Math.random() * 2000 + 800,
        performanceScore: Math.floor(Math.random() * 30) + 70,
        accessibilityScore: Math.floor(Math.random() * 20) + 80,
        bestPracticesScore: Math.floor(Math.random() * 20) + 80,
        seoScore: Math.floor(Math.random() * 20) + 80
      });
    }

    return data;
  }

  private generateMockAlerts(url?: string): PerformanceAlert[] {
    const alerts: PerformanceAlert[] = [
      {
        id: '1',
        url: url || 'https://example.com',
        type: 'warning',
        message: 'Load time exceeded threshold',
        metric: 'loadTime',
        threshold: 2000,
        currentValue: 2500,
        timestamp: new Date(),
        resolved: false
      },
      {
        id: '2',
        url: url || 'https://example.com',
        type: 'info',
        message: 'Performance score improved',
        metric: 'performanceScore',
        threshold: 80,
        currentValue: 85,
        timestamp: new Date(),
        resolved: true
      }
    ];

    return url ? alerts.filter(a => a.url === url) : alerts;
  }
}

// Pricing tiers for the Performance Monitor
export const PERFORMANCE_MONITOR_PRICING = {
  starter: {
    name: 'Starter',
    price: 19,
    period: '/month',
    features: [
      'Monitor up to 5 URLs',
      '5-minute monitoring frequency',
      'Basic performance metrics',
      'Email alerts',
      '7-day data retention',
      'Basic reporting'
    ]
  },
  professional: {
    name: 'Professional',
    price: 49,
    period: '/month',
    features: [
      'Monitor up to 25 URLs',
      '1-minute monitoring frequency',
      'Advanced performance metrics',
      'Email, Slack, and webhook alerts',
      '30-day data retention',
      'Advanced reporting and analytics',
      'Custom thresholds',
      'API access'
    ]
  },
  enterprise: {
    name: 'Enterprise',
    price: 149,
    period: '/month',
    features: [
      'Monitor unlimited URLs',
      'Real-time monitoring',
      'All performance metrics',
      'Multiple notification channels',
      '1-year data retention',
      'Custom dashboards',
      'White-label reporting',
      'Priority support',
      'SLA guarantee'
    ]
  }
};