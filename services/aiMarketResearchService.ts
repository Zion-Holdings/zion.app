export interface MarketTrend {
  id: string;
  keyword: string;
  searchVolume: number;
  trendDirection: 'rising' | 'falling' | 'stable';
  growthRate: number;
  relatedKeywords: string[];
  marketSize: number;
  competitors: string[];
  opportunities: string[];
  timestamp: Date;
}

export interface CompetitorAnalysis {
  id: string;
  competitorName: string;
  marketShare: number;
  strengths: string[];
  weaknesses: string[];
  pricing: {
    min: number;
    max: number;
    currency: string;
  };
  features: string[];
  customerReviews: {
    rating: number;
    count: number;
    sentiment: 'positive' | 'negative' | 'neutral';
  };
  socialMediaPresence: {
    followers: number;
    engagement: number;
    platforms: string[];
  };
}

export interface MarketOpportunity {
  id: string;
  title: string;
  description: string;
  marketSize: number;
  growthPotential: number;
  entryBarriers: string[];
  competitiveAdvantage: string;
  estimatedROI: number;
  timeToMarket: string;
  requiredResources: string[];
}

export interface MarketReport {
  id: string;
  title: string;
  summary: string;
  marketTrends: MarketTrend[];
  competitorAnalysis: CompetitorAnalysis[];
  opportunities: MarketOpportunity[];
  recommendations: string[];
  generatedAt: Date;
  expiresAt: Date;
}

export class AIMarketResearchService {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string = 'https://api.ziontechgroup.com') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async analyzeMarketTrends(keywords: string[], industry: string): Promise<MarketTrend[]> {
    try {
      const response = await fetch(`${this.baseUrl}/api/market-research/trends`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({ keywords, industry }),
      });

      if (!response.ok) {
        throw new Error(`Market trends analysis failed: ${response.statusText}`);
      }

      const data = await response.json();
      return data.trends.map((trend: any) => ({
        ...trend,
        timestamp: new Date(trend.timestamp),
      }));
    } catch (error) {
      console.error('Error analyzing market trends:', error);
      throw error;
    }
  }

  async getCompetitorAnalysis(competitors: string[], industry: string): Promise<CompetitorAnalysis[]> {
    try {
      const response = await fetch(`${this.baseUrl}/api/market-research/competitors`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({ competitors, industry }),
      });

      if (!response.ok) {
        throw new Error(`Competitor analysis failed: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error getting competitor analysis:', error);
      throw error;
    }
  }

  async identifyMarketOpportunities(industry: string, budget: number): Promise<MarketOpportunity[]> {
    try {
      const response = await fetch(`${this.baseUrl}/api/market-research/opportunities`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({ industry, budget }),
      });

      if (!response.ok) {
        throw new Error(`Market opportunities identification failed: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error identifying market opportunities:', error);
      throw error;
    }
  }

  async generateMarketReport(
    industry: string,
    keywords: string[],
    competitors: string[]
  ): Promise<MarketReport> {
    try {
      const [trends, competitorAnalysis, opportunities] = await Promise.all([
        this.analyzeMarketTrends(keywords, industry),
        this.getCompetitorAnalysis(competitors, industry),
        this.identifyMarketOpportunities(industry, 100000), // Default budget
      ]);

      const recommendations = this.generateRecommendations(trends, competitorAnalysis, opportunities);

      return {
        id: `report_${Date.now()}`,
        title: `${industry} Market Intelligence Report`,
        summary: this.generateSummary(trends, competitorAnalysis, opportunities),
        marketTrends: trends,
        competitorAnalysis,
        opportunities,
        recommendations,
        generatedAt: new Date(),
        expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
      };
    } catch (error) {
      console.error('Error generating market report:', error);
      throw error;
    }
  }

  private generateRecommendations(
    trends: MarketTrend[],
    competitors: CompetitorAnalysis[],
    opportunities: MarketOpportunity[]
  ): string[] {
    const recommendations: string[] = [];

    // Analyze trends for recommendations
    const risingTrends = trends.filter(t => t.trendDirection === 'rising');
    if (risingTrends.length > 0) {
      recommendations.push(`Focus on rising trends: ${risingTrends.map(t => t.keyword).join(', ')}`);
    }

    // Analyze competitors for recommendations
    const weakCompetitors = competitors.filter(c => c.strengths.length < c.weaknesses.length);
    if (weakCompetitors.length > 0) {
      recommendations.push(`Target weak competitors: ${weakCompetitors.map(c => c.competitorName).join(', ')}`);
    }

    // Analyze opportunities for recommendations
    const highROIOpportunities = opportunities.filter(o => o.estimatedROI > 200);
    if (highROIOpportunities.length > 0) {
      recommendations.push(`Prioritize high-ROI opportunities: ${highROIOpportunities.map(o => o.title).join(', ')}`);
    }

    return recommendations;
  }

  private generateSummary(
    trends: MarketTrend[],
    competitors: CompetitorAnalysis[],
    opportunities: MarketOpportunity[]
  ): string {
    const totalTrends = trends.length;
    const risingTrends = trends.filter(t => t.trendDirection === 'rising').length;
    const totalOpportunities = opportunities.length;
    const highValueOpportunities = opportunities.filter(o => o.estimatedROI > 150).length;

    return `Market analysis reveals ${totalTrends} key trends with ${risingTrends} showing growth potential. 
    Found ${totalOpportunities} market opportunities, including ${highValueOpportunities} high-value prospects. 
    Competitive landscape analysis covers ${competitors.length} key players.`;
  }
}

export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || '');