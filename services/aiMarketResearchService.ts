export interface MarketTrend {
  id: string;
  keyword: string;
  searchVolume: number;
  trendDirection: 'rising' | 'falling' | 'stable';
  growthRate: number;
  relatedKeywords: string[];
  marketOpportunity: number;
  competitionLevel: 'low' | 'medium' | 'high';
  estimatedValue: number;
  lastUpdated: Date;
}

export interface CompetitorAnalysis {
  id: string;
  competitorName: string;
  marketShare: number;
  strengths: string[];
  weaknesses: string[];
  pricingStrategy: string;
  targetAudience: string[];
  marketingChannels: string[];
  productFeatures: string[];
  customerReviews: {
    rating: number;
    count: number;
    sentiment: 'positive' | 'neutral' | 'negative';
  };
  lastAnalyzed: Date;
}

export interface MarketInsight {
  id: string;
  title: string;
  description: string;
  category: string;
  impact: 'high' | 'medium' | 'low';
  confidence: number;
  dataSources: string[];
  recommendations: string[];
  estimatedTimeline: string;
  investmentRequired: number;
  potentialROI: number;
}

export interface MarketResearchRequest {
  industry: string;
  targetMarket: string[];
  researchType: 'trends' | 'competitors' | 'opportunities' | 'comprehensive';
  budget: number;
  timeline: string;
  specificQuestions?: string[];
}

export interface MarketResearchResponse {
  requestId: string;
  status: 'processing' | 'completed' | 'failed';
  trends: MarketTrend[];
  competitors: CompetitorAnalysis[];
  insights: MarketInsight[];
  summary: string;
  recommendations: string[];
  nextSteps: string[];
  generatedAt: Date;
}

export class AIMarketResearchService {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string = 'https://api.ziontechgroup.com') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async analyzeMarketTrends(industry: string, timeframe: string = '30d'): Promise<MarketTrend[]> {
    try {
      const response = await fetch(`${this.baseUrl}/api/market-research/trends`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({ industry, timeframe }),
      });

      if (!response.ok) {
        throw new Error(`Market research API error: ${response.statusText}`);
      }

      const data = await response.json();
      return data.trends.map((trend: any) => ({
        ...trend,
        lastUpdated: new Date(trend.lastUpdated),
      }));
    } catch (error) {
      console.error('Error analyzing market trends:', error);
      throw error;
    }
  }

  async analyzeCompetitors(competitorNames: string[], industry: string): Promise<CompetitorAnalysis[]> {
    try {
      const response = await fetch(`${this.baseUrl}/api/market-research/competitors`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({ competitorNames, industry }),
      });

      if (!response.ok) {
        throw new Error(`Competitor analysis API error: ${response.statusText}`);
      }

      const data = await response.json();
      return data.competitors.map((competitor: any) => ({
        ...competitor,
        lastAnalyzed: new Date(competitor.lastAnalyzed),
      }));
    } catch (error) {
      console.error('Error analyzing competitors:', error);
      throw error;
    }
  }

  async generateMarketInsights(request: MarketResearchRequest): Promise<MarketInsight[]> {
    try {
      const response = await fetch(`${this.baseUrl}/api/market-research/insights`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`Market insights API error: ${response.statusText}`);
      }

      const data = await response.json();
      return data.insights;
    } catch (error) {
      console.error('Error generating market insights:', error);
      throw error;
    }
  }

  async getComprehensiveAnalysis(request: MarketResearchRequest): Promise<MarketResearchResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/market-research/comprehensive`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`Comprehensive analysis API error: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        ...data,
        generatedAt: new Date(data.generatedAt),
      };
    } catch (error) {
      console.error('Error getting comprehensive analysis:', error);
      throw error;
    }
  }

  async getMarketOpportunities(industry: string, investmentRange: [number, number]): Promise<MarketInsight[]> {
    try {
      const response = await fetch(`${this.baseUrl}/api/market-research/opportunities`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({ industry, investmentRange }),
      });

      if (!response.ok) {
        throw new Error(`Market opportunities API error: ${response.statusText}`);
      }

      const data = await response.json();
      return data.opportunities;
    } catch (error) {
      console.error('Error getting market opportunities:', error);
      throw error;
    }
  }

  async exportReport(response: MarketResearchResponse, format: 'pdf' | 'csv' | 'excel'): Promise<string> {
    try {
      const exportResponse = await fetch(`${this.baseUrl}/api/market-research/export`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({ response, format }),
      });

      if (!exportResponse.ok) {
        throw new Error(`Export API error: ${exportResponse.statusText}`);
      }

      const data = await exportResponse.json();
      return data.downloadUrl;
    } catch (error) {
      console.error('Error exporting report:', error);
      throw error;
    }
  }
}

export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || '');