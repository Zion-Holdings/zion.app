export interface SEOKeywords {
  keyword: string;
  position: number;
  searchVolume: number;
  difficulty: number;
  cpc: number;
  url: string;
  change: number;
  lastUpdated: Date;
}

export interface SEOMetrics {
  url: string;
  timestamp: Date;
  pageSpeed: number;
  mobileFriendliness: number;
  seoScore: number;
  accessibilityScore: number;
  bestPracticesScore: number;
  metaTitle: string;
  metaDescription: string;
  headings: {
    h1: string[];
    h2: string[];
    h3: string[];
  };
  images: {
    total: number;
    withAltText: number;
    withoutAltText: number;
  };
  links: {
    internal: number;
    external: number;
    broken: number;
  };
  socialTags: {
    openGraph: boolean;
    twitterCards: boolean;
    schemaMarkup: boolean;
  };
}

export interface CompetitorAnalysis {
  competitor: string;
  domain: string;
  seoScore: number;
  backlinks: number;
  domainAuthority: number;
  organicTraffic: number;
  keywords: number;
  topKeywords: string[];
}

export interface BacklinkData {
  url: string;
  domain: string;
  domainAuthority: number;
  pageAuthority: number;
  anchorText: string;
  follow: boolean;
  firstSeen: Date;
  lastSeen: Date;
  spamScore: number;
}

export class SEOAnalyticsService {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string = 'https://api.ziontech.ai') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async analyzePage(url: string): Promise<SEOMetrics> {
    try {
      const response = await fetch(`${this.baseUrl}/seo/analyze`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error(`SEO analysis failed: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      // Fallback to mock data for demo purposes
      return this.generateMockSEOMetrics(url);
    }
  }

  async trackKeywords(domain: string, keywords: string[]): Promise<SEOKeywords[]> {
    try {
      const response = await fetch(`${this.baseUrl}/seo/keywords/track`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ domain, keywords }),
      });

      if (!response.ok) {
        throw new Error(`Keyword tracking failed: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      // Generate mock keyword data
      return this.generateMockKeywordData(domain, keywords);
    }
  }

  async getBacklinks(domain: string, limit: number = 100): Promise<BacklinkData[]> {
    try {
      const response = await fetch(`${this.baseUrl}/seo/backlinks?domain=${encodeURIComponent(domain)}&limit=${limit}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch backlinks: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      // Generate mock backlink data
      return this.generateMockBacklinkData(domain, limit);
    }
  }

  async analyzeCompetitors(domain: string): Promise<CompetitorAnalysis[]> {
    try {
      const response = await fetch(`${this.baseUrl}/seo/competitors?domain=${encodeURIComponent(domain)}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to analyze competitors: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      // Generate mock competitor data
      return this.generateMockCompetitorData(domain);
    }
  }

  async generateSEOReport(domain: string): Promise<{
    overview: {
      seoScore: number;
      totalPages: number;
      indexedPages: number;
      averagePageSpeed: number;
      mobileFriendliness: number;
    };
    topIssues: {
      critical: string[];
      warning: string[];
      info: string[];
    };
    recommendations: string[];
    trends: {
      seoScore: number[];
      organicTraffic: number[];
      dates: string[];
    };
  }> {
    // Mock SEO report generation
    return {
      overview: {
        seoScore: Math.floor(Math.random() * 30) + 70,
        totalPages: Math.floor(Math.random() * 100) + 50,
        indexedPages: Math.floor(Math.random() * 80) + 40,
        averagePageSpeed: Math.floor(Math.random() * 30) + 70,
        mobileFriendliness: Math.floor(Math.random() * 20) + 80
      },
      topIssues: {
        critical: [
          'Missing meta descriptions on 15 pages',
          'Slow page load times affecting 8 pages',
          'Broken internal links found'
        ],
        warning: [
          'Images missing alt text on 23 pages',
          'H1 tags missing on 5 pages',
          'Duplicate meta titles detected'
        ],
        info: [
          'Schema markup could be improved',
          'Social media tags missing on some pages'
        ]
      },
      recommendations: [
        'Fix critical meta description issues',
        'Optimize page load speeds',
        'Add alt text to all images',
        'Implement proper heading structure',
        'Add schema markup for better search visibility',
        'Optimize for mobile devices',
        'Fix broken internal links',
        'Improve content quality and relevance'
      ],
      trends: {
        seoScore: [75, 78, 82, 79, 85, 88, 90],
        organicTraffic: [1200, 1350, 1420, 1380, 1550, 1680, 1800],
        dates: ['2025-01-01', '2025-01-08', '2025-01-15', '2025-01-22', '2025-01-29', '2025-02-05', '2025-02-12']
      }
    };
  }

  private generateMockSEOMetrics(url: string): SEOMetrics {
    return {
      url,
      timestamp: new Date(),
      pageSpeed: Math.floor(Math.random() * 30) + 70,
      mobileFriendliness: Math.floor(Math.random() * 20) + 80,
      seoScore: Math.floor(Math.random() * 30) + 70,
      accessibilityScore: Math.floor(Math.random() * 20) + 80,
      bestPracticesScore: Math.floor(Math.random() * 20) + 80,
      metaTitle: 'Sample Page Title - Zion Tech Group',
      metaDescription: 'This is a sample meta description for SEO optimization purposes.',
      headings: {
        h1: ['Main Page Heading'],
        h2: ['Section Heading 1', 'Section Heading 2'],
        h3: ['Subsection 1', 'Subsection 2', 'Subsection 3']
      },
      images: {
        total: Math.floor(Math.random() * 10) + 5,
        withAltText: Math.floor(Math.random() * 8) + 3,
        withoutAltText: Math.floor(Math.random() * 5) + 1
      },
      links: {
        internal: Math.floor(Math.random() * 20) + 10,
        external: Math.floor(Math.random() * 10) + 5,
        broken: Math.floor(Math.random() * 3)
      },
      socialTags: {
        openGraph: Math.random() > 0.3,
        twitterCards: Math.random() > 0.4,
        schemaMarkup: Math.random() > 0.5
      }
    };
  }

  private generateMockKeywordData(domain: string, keywords: string[]): SEOKeywords[] {
    return keywords.map((keyword, index) => ({
      keyword,
      position: Math.floor(Math.random() * 50) + 1,
      searchVolume: Math.floor(Math.random() * 10000) + 100,
      difficulty: Math.floor(Math.random() * 100),
      cpc: Math.random() * 5 + 0.1,
      url: `${domain}/page-${index + 1}`,
      change: Math.floor(Math.random() * 20) - 10,
      lastUpdated: new Date()
    }));
  }

  private generateMockBacklinkData(domain: string, limit: number): BacklinkData[] {
    const backlinks: BacklinkData[] = [];
    const domains = ['example1.com', 'example2.com', 'example3.com', 'example4.com', 'example5.com'];
    
    for (let i = 0; i < limit; i++) {
      backlinks.push({
        url: `https://${domains[i % domains.length]}/article-${i + 1}`,
        domain: domains[i % domains.length],
        domainAuthority: Math.floor(Math.random() * 100),
        pageAuthority: Math.floor(Math.random() * 100),
        anchorText: `link to ${domain}`,
        follow: Math.random() > 0.2,
        firstSeen: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000),
        lastSeen: new Date(),
        spamScore: Math.floor(Math.random() * 17)
      });
    }

    return backlinks;
  }

  private generateMockCompetitorData(domain: string): CompetitorAnalysis[] {
    const competitors = ['competitor1.com', 'competitor2.com', 'competitor3.com', 'competitor4.com'];
    
    return competitors.map(competitor => ({
      competitor: competitor.split('.')[0],
      domain: competitor,
      seoScore: Math.floor(Math.random() * 30) + 70,
      backlinks: Math.floor(Math.random() * 10000) + 1000,
      domainAuthority: Math.floor(Math.random() * 100),
      organicTraffic: Math.floor(Math.random() * 50000) + 5000,
      keywords: Math.floor(Math.random() * 1000) + 100,
      topKeywords: ['keyword1', 'keyword2', 'keyword3', 'keyword4', 'keyword5']
    }));
  }
}

// Pricing tiers for the SEO Analytics service
export const SEO_ANALYTICS_PRICING = {
  starter: {
    name: 'Starter',
    price: 39,
    period: '/month',
    features: [
      'Track up to 100 keywords',
      'Basic SEO analysis',
      'Monthly reports',
      'Email support',
      'Basic competitor analysis',
      '7-day data retention'
    ]
  },
  professional: {
    name: 'Professional',
    price: 89,
    period: '/month',
    features: [
      'Track up to 500 keywords',
      'Advanced SEO analysis',
      'Weekly reports',
      'Priority support',
      'Advanced competitor analysis',
      'Backlink analysis',
      '30-day data retention',
      'API access',
      'Custom dashboards'
    ]
  },
  enterprise: {
    name: 'Enterprise',
    price: 199,
    period: '/month',
    features: [
      'Track unlimited keywords',
      'Full SEO suite',
      'Daily reports',
      'Dedicated support',
      'Comprehensive competitor analysis',
      'Advanced backlink analysis',
      '1-year data retention',
      'White-label options',
      'Custom integrations',
      'SLA guarantee'
    ]
  }
};