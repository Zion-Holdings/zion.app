export interface MarketTrend {
  id: string;
  keyword: string;
  searchVolume: number;
  growthRate: number;
  competition: 'low' | 'medium' | 'high';
  seasonality: string[];
  relatedKeywords: string[];
  estimatedClicks: number;
  estimatedCost: number;
}

export interface CompetitorAnalysis {
  id: string;
  competitorName: string;
  domain: string;
  marketShare: number;
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
  trafficSources: string[];
  contentStrategy: string[];
  pricingStrategy: string;
  lastUpdated: Date;
}

export interface MarketInsight {
  id: string;
  industry: string;
  trend: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
  timeframe: string;
  dataSources: string[];
  confidence: number;
  actionableInsights: string[];
}

export interface MarketResearchRequest {
  industry: string;
  keywords: string[];
  competitors: string[];
  timeframe: '7d' | '30d' | '90d' | '1y';
  includeTrends: boolean;
  includeCompetitors: boolean;
  includePricing: boolean;
}

export interface MarketResearchResponse {
  trends: MarketTrend[];
  competitors: CompetitorAnalysis[];
  insights: MarketInsight[];
  summary: string;
  recommendations: string[];
  nextSteps: string[];
}

export class AIMarketResearchService {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string = 'https://api.ziontechgroup.com') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async researchMarket(request: MarketResearchRequest): Promise<MarketResearchResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/market-research`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`Market research failed: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Market research error:', error);
      throw error;
    }
  }

  async getTrendingKeywords(industry: string, limit: number = 20): Promise<MarketTrend[]> {
    try {
      const response = await fetch(`${this.baseUrl}/api/market-research/trends?industry=${encodeURIComponent(industry)}&limit=${limit}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch trending keywords: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching trending keywords:', error);
      throw error;
    }
  }

  async analyzeCompetitor(domain: string): Promise<CompetitorAnalysis> {
    try {
      const response = await fetch(`${this.baseUrl}/api/market-research/competitor/${encodeURIComponent(domain)}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Competitor analysis failed: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Competitor analysis error:', error);
      throw error;
    }
  }

  async getMarketInsights(industry: string): Promise<MarketInsight[]> {
    try {
      const response = await fetch(`${this.baseUrl}/api/market-research/insights?industry=${encodeURIComponent(industry)}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch market insights: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching market insights:', error);
      throw error;
    }
  }

  async generateReport(request: MarketResearchRequest): Promise<string> {
    try {
      const research = await this.researchMarket(request);
      
      let report = `# Market Research Report\n\n`;
      report += `**Industry:** ${request.industry}\n`;
      report += `**Analysis Period:** ${request.timeframe}\n`;
      report += `**Generated:** ${new Date().toLocaleDateString()}\n\n`;
      
      if (research.trends.length > 0) {
        report += `## Market Trends\n\n`;
        research.trends.forEach(trend => {
          report += `### ${trend.keyword}\n`;
          report += `- Search Volume: ${trend.searchVolume.toLocaleString()}\n`;
          report += `- Growth Rate: ${trend.growthRate}%\n`;
          report += `- Competition: ${trend.competition}\n`;
          report += `- Estimated Clicks: ${trend.estimatedClicks.toLocaleString()}\n`;
          report += `- Estimated Cost: $${trend.estimatedCost.toLocaleString()}\n\n`;
        });
      }
      
      if (research.competitors.length > 0) {
        report += `## Competitor Analysis\n\n`;
        research.competitors.forEach(competitor => {
          report += `### ${competitor.competitorName}\n`;
          report += `- Market Share: ${competitor.marketShare}%\n`;
          report += `- Strengths: ${competitor.strengths.join(', ')}\n`;
          report += `- Weaknesses: ${competitor.weaknesses.join(', ')}\n`;
          report += `- Opportunities: ${competitor.opportunities.join(', ')}\n\n`;
        });
      }
      
      if (research.insights.length > 0) {
        report += `## Market Insights\n\n`;
        research.insights.forEach(insight => {
          report += `### ${insight.trend}\n`;
          report += `- Impact: ${insight.impact}\n`;
          report += `- Timeframe: ${insight.timeframe}\n`;
          report += `- Confidence: ${insight.confidence}%\n`;
          report += `- Actionable Insights:\n`;
          insight.actionableInsights.forEach(action => {
            report += `  - ${action}\n`;
          });
          report += `\n`;
        });
      }
      
      report += `## Summary\n\n${research.summary}\n\n`;
      report += `## Recommendations\n\n`;
      research.recommendations.forEach((rec, index) => {
        report += `${index + 1}. ${rec}\n`;
      });
      
      report += `\n## Next Steps\n\n`;
      research.nextSteps.forEach((step, index) => {
        report += `${index + 1}. ${step}\n`;
      });
      
      return report;
    } catch (error) {
      console.error('Report generation error:', error);
      throw error;
    }
  }
}

export const aiMarketResearchService = new AIMarketResearchService(process.env.MARKET_RESEARCH_API_KEY || '');