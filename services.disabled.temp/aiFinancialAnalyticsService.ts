export interface MarketData {
  symbol: string;
  price: number;
  volume: number;
  change: number;
  changePercent: number;
  marketCap: number;
  peRatio: number;
  dividendYield: number;
  timestamp: Date;
  exchange: string;
}

export interface TradingSignal {
  id: string;
  symbol: string;
  type: 'buy' | 'sell' | 'hold';
  confidence: number; // 0-1
  price: number;
  targetPrice: number;
  stopLoss: number;
  timeframe: 'short' | 'medium' | 'long';
  reasoning: string[];
  riskLevel: 'low' | 'medium' | 'high';
  expectedReturn: number;
  timestamp: Date;
}

export interface Portfolio {
  id: string;
  name: string;
  totalValue: number;
  cash: number;
  positions: PortfolioPosition[];
  performance: PortfolioPerformance;
  riskMetrics: RiskMetrics;
  rebalanceRecommendations: RebalanceRecommendation[];
}

export interface PortfolioPosition {
  symbol: string;
  shares: number;
  averagePrice: number;
  currentPrice: number;
  marketValue: number;
  unrealizedPnL: number;
  unrealizedPnLPercent: number;
  weight: number;
}

export interface PortfolioPerformance {
  totalReturn: number;
  totalReturnPercent: number;
  annualizedReturn: number;
  sharpeRatio: number;
  maxDrawdown: number;
  volatility: number;
  beta: number;
  alpha: number;
  trackingError: number;
}

export interface RiskMetrics {
  var95: number; // Value at Risk 95%
  var99: number; // Value at Risk 99%
  expectedShortfall: number;
  downsideDeviation: number;
  sortinoRatio: number;
  calmarRatio: number;
  informationRatio: number;
}

export interface RebalanceRecommendation {
  symbol: string;
  action: 'buy' | 'sell';
  shares: number;
  reason: string;
  priority: 'low' | 'medium' | 'high';
  expectedImpact: number;
}

export interface MarketSentiment {
  symbol: string;
  overallSentiment: 'bullish' | 'bearish' | 'neutral';
  socialMediaSentiment: number; // -1 to 1
  newsSentiment: number; // -1 to 1
  technicalSentiment: number; // -1 to 1
  fundamentalSentiment: number; // -1 to 1
  confidence: number;
  factors: string[];
  timestamp: Date;
}

export interface FinancialMetrics {
  totalSignals: number;
  profitableSignals: number;
  averageReturn: number;
  portfolioPerformance: number;
  riskAdjustedReturn: number;
  marketBeating: number;
  volatilityReduction: number;
}

class AIFinancialAnalyticsService {
  private marketData: Map<string, MarketData> = new Map();
  private tradingSignals: TradingSignal[] = [];
  private portfolios: Map<string, Portfolio> = new Map();
  private marketSentiments: Map<string, MarketSentiment> = new Map();

  async analyzeMarket(symbols: string[]): Promise<MarketData[]> {
    const marketData: MarketData[] = [];
    
    for (const symbol of symbols) {
      const data = await this.fetchMarketData(symbol);
      this.marketData.set(symbol, data);
      marketData.push(data);
    }
    
    return marketData;
  }

  async generateTradingSignals(symbols: string[]): Promise<TradingSignal[]> {
    const signals: TradingSignal[] = [];
    
    for (const symbol of symbols) {
      const marketData = this.marketData.get(symbol);
      if (!marketData) continue;

      const signal = await this.analyzeTradingOpportunity(symbol, marketData);
      if (signal) {
        signals.push(signal);
        this.tradingSignals.push(signal);
      }
    }
    
    return signals;
  }

  async createPortfolio(portfolioId: string, name: string, initialCash: number): Promise<Portfolio> {
    const portfolio: Portfolio = {
      id: portfolioId,
      name,
      totalValue: initialCash,
      cash: initialCash,
      positions: [],
      performance: this.initializePerformance(),
      riskMetrics: this.initializeRiskMetrics(),
      rebalanceRecommendations: []
    };

    this.portfolios.set(portfolioId, portfolio);
    return portfolio;
  }

  async executeTrade(portfolioId: string, signal: TradingSignal, shares: number): Promise<boolean> {
    const portfolio = this.portfolios.get(portfolioId);
    if (!portfolio) return false;

    const position = portfolio.positions.find(p => p.symbol === signal.symbol);
    const tradeValue = shares * signal.price;
    const commission = tradeValue * 0.001; // 0.1% commission

    if (signal.type === 'buy') {
      if (portfolio.cash < (tradeValue + commission)) return false;

      if (position) {
        // Update existing position
        const totalShares = position.shares + shares;
        const totalCost = (position.averagePrice * position.shares) + tradeValue;
        position.averagePrice = totalCost / totalShares;
        position.shares = totalShares;
      } else {
        // Create new position
        portfolio.positions.push({
          symbol: signal.symbol,
          shares,
          averagePrice: signal.price,
          currentPrice: signal.price,
          marketValue: tradeValue,
          unrealizedPnL: 0,
          unrealizedPnLPercent: 0,
          weight: 0
        });
      }

      portfolio.cash -= (tradeValue + commission);
    } else if (signal.type === 'sell' && position) {
      if (position.shares < shares) return false;

      if (position.shares === shares) {
        // Close position
        portfolio.positions = portfolio.positions.filter(p => p.symbol !== signal.symbol);
      } else {
        // Reduce position
        position.shares -= shares;
      }

      portfolio.cash += (tradeValue - commission);
    }

    // Update portfolio metrics
    await this.updatePortfolioMetrics(portfolio);
    return true;
  }

  async analyzeMarketSentiment(symbols: string[]): Promise<MarketSentiment[]> {
    const sentiments: MarketSentiment[] = [];
    
    for (const symbol of symbols) {
      const sentiment = await this.calculateSentiment(symbol);
      this.marketSentiments.set(symbol, sentiment);
      sentiments.push(sentiment);
    }
    
    return sentiments;
  }

  async optimizePortfolio(portfolioId: string): Promise<RebalanceRecommendation[]> {
    const portfolio = this.portfolios.get(portfolioId);
    if (!portfolio) return [];

    const recommendations: RebalanceRecommendation[] = [];
    
    // Analyze current allocation
    const targetAllocation = this.calculateTargetAllocation(portfolio);
    
    for (const position of portfolio.positions) {
      const targetWeight = targetAllocation[position.symbol] || 0;
      const currentWeight = position.weight;
      const weightDiff = targetWeight - currentWeight;
      
      if (Math.abs(weightDiff) > 0.05) { // 5% threshold
        const shares = Math.round((weightDiff * portfolio.totalValue) / position.currentPrice);
        
        if (shares !== 0) {
          recommendations.push({
            symbol: position.symbol,
            action: shares > 0 ? 'buy' : 'sell',
            shares: Math.abs(shares),
            reason: `Rebalance to target allocation of ${(targetWeight * 100).toFixed(1)}%`,
            priority: Math.abs(weightDiff) > 0.1 ? 'high' : 'medium',
            expectedImpact: Math.abs(weightDiff) * 0.02 // 2% expected improvement
          });
        }
      }
    }

    // Add new position recommendations
    for (const [symbol, targetWeight] of Object.entries(targetAllocation)) {
      const existingPosition = portfolio.positions.find(p => p.symbol === symbol);
      if (!existingPosition && targetWeight > 0.02) { // 2% minimum weight
        const shares = Math.round((targetWeight * portfolio.totalValue) / (this.marketData.get(symbol)?.price || 100));
        
        if (shares > 0) {
          recommendations.push({
            symbol,
            action: 'buy',
            shares,
            reason: `New position with target allocation of ${(targetWeight * 100).toFixed(1)}%`,
            priority: 'medium',
            expectedImpact: targetWeight * 0.03 // 3% expected improvement
          });
        }
      }
    }

    portfolio.rebalanceRecommendations = recommendations;
    return recommendations;
  }

  async getFinancialMetrics(): Promise<FinancialMetrics> {
    const totalSignals = this.tradingSignals.length;
    const profitableSignals = this.tradingSignals.filter(s => 
      s.type === 'buy' && s.expectedReturn > 0
    ).length;

    const averageReturn = this.tradingSignals.length > 0
      ? this.tradingSignals.reduce((sum, s) => sum + s.expectedReturn, 0) / this.tradingSignals.length
      : 0;

    const portfolioPerformance = Array.from(this.portfolios.values()).reduce((sum, p) => 
      sum + p.performance.totalReturnPercent, 0
    ) / Math.max(this.portfolios.size, 1);

    const riskAdjustedReturn = Array.from(this.portfolios.values()).reduce((sum, p) => 
      sum + p.performance.sharpeRatio, 0
    ) / Math.max(this.portfolios.size, 1);

    const marketBeating = Array.from(this.portfolios.values()).reduce((sum, p) => 
      sum + p.performance.alpha, 0
    ) / Math.max(this.portfolios.size, 1);

    const volatilityReduction = Array.from(this.portfolios.values()).reduce((sum, p) => 
      sum + (1 - p.performance.volatility), 0
    ) / Math.max(this.portfolios.size, 1);

    return {
      totalSignals,
      profitableSignals,
      averageReturn,
      portfolioPerformance,
      riskAdjustedReturn,
      marketBeating,
      volatilityReduction
    };
  }

  private async fetchMarketData(symbol: string): Promise<MarketData> {
    // Simulate market data fetching
    const basePrice = 100 + Math.random() * 900;
    const change = (Math.random() - 0.5) * 20;
    
    return {
      symbol,
      price: basePrice + change,
      volume: Math.floor(Math.random() * 1000000) + 100000,
      change,
      changePercent: (change / basePrice) * 100,
      marketCap: basePrice * (Math.floor(Math.random() * 1000000) + 100000),
      peRatio: Math.random() * 30 + 10,
      dividendYield: Math.random() * 5,
      timestamp: new Date(),
      exchange: 'NASDAQ'
    };
  }

  private async analyzeTradingOpportunity(symbol: string, marketData: MarketData): Promise<TradingSignal | null> {
    // AI-powered trading analysis
    const technicalScore = this.calculateTechnicalScore(marketData);
    const fundamentalScore = this.calculateFundamentalScore(marketData);
    const sentimentScore = this.calculateSentimentScore(symbol);
    
    const overallScore = (technicalScore + fundamentalScore + sentimentScore) / 3;
    
    if (Math.abs(overallScore) < 0.3) return null; // No clear signal
    
    const signal: TradingSignal = {
      id: `signal_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      symbol,
      type: overallScore > 0 ? 'buy' : 'sell',
      confidence: Math.abs(overallScore),
      price: marketData.price,
      targetPrice: marketData.price * (1 + (overallScore * 0.1)),
      stopLoss: marketData.price * (1 - (Math.abs(overallScore) * 0.05)),
      timeframe: Math.abs(overallScore) > 0.7 ? 'short' : 'medium',
      reasoning: this.generateTradingReasoning(technicalScore, fundamentalScore, sentimentScore),
      riskLevel: Math.abs(overallScore) > 0.8 ? 'high' : Math.abs(overallScore) > 0.5 ? 'medium' : 'low',
      expectedReturn: overallScore * 0.15, // 15% max return
      timestamp: new Date()
    };
    
    return signal;
  }

  private calculateTechnicalScore(marketData: MarketData): number {
    // Simulate technical analysis
    const priceMomentum = marketData.changePercent / 100;
    const volumeStrength = Math.min(marketData.volume / 500000, 1);
    const volatility = Math.abs(marketData.changePercent) / 100;
    
    return (priceMomentum * 0.4 + volumeStrength * 0.3 + volatility * 0.3);
  }

  private calculateFundamentalScore(marketData: MarketData): number {
    // Simulate fundamental analysis
    const peScore = marketData.peRatio < 15 ? 1 : marketData.peRatio > 25 ? -1 : 0;
    const dividendScore = marketData.dividendYield > 3 ? 0.5 : 0;
    const marketCapScore = marketData.marketCap > 10000000000 ? 0.3 : -0.3; // $10B threshold
    
    return (peScore * 0.5 + dividendScore * 0.3 + marketCapScore * 0.2);
  }

  private calculateSentimentScore(symbol: string): number {
    // Simulate sentiment analysis
    return (Math.random() - 0.5) * 2; // -1 to 1
  }

  private generateTradingReasoning(technical: number, fundamental: number, sentiment: number): string[] {
    const reasons: string[] = [];
    
    if (Math.abs(technical) > 0.5) {
      reasons.push(technical > 0 ? 'Strong technical momentum' : 'Technical weakness detected');
    }
    
    if (Math.abs(fundamental) > 0.5) {
      reasons.push(fundamental > 0 ? 'Favorable fundamentals' : 'Fundamental concerns');
    }
    
    if (Math.abs(sentiment) > 0.5) {
      reasons.push(sentiment > 0 ? 'Positive market sentiment' : 'Negative market sentiment');
    }
    
    return reasons;
  }

  private async calculateSentiment(symbol: string): Promise<MarketSentiment> {
    const socialMediaSentiment = (Math.random() - 0.5) * 2;
    const newsSentiment = (Math.random() - 0.5) * 2;
    const technicalSentiment = (Math.random() - 0.5) * 2;
    const fundamentalSentiment = (Math.random() - 0.5) * 2;
    
    const overallSentiment = (socialMediaSentiment + newsSentiment + technicalSentiment + fundamentalSentiment) / 4;
    
    return {
      symbol,
      overallSentiment: overallSentiment > 0.2 ? 'bullish' : overallSentiment < -0.2 ? 'bearish' : 'neutral',
      socialMediaSentiment,
      newsSentiment,
      technicalSentiment,
      fundamentalSentiment,
      confidence: Math.abs(overallSentiment),
      factors: this.generateSentimentFactors(socialMediaSentiment, newsSentiment, technicalSentiment, fundamentalSentiment),
      timestamp: new Date()
    };
  }

  private generateSentimentFactors(social: number, news: number, technical: number, fundamental: number): string[] {
    const factors: string[] = [];
    
    if (Math.abs(social) > 0.5) factors.push('Social media buzz');
    if (Math.abs(news) > 0.5) factors.push('News sentiment');
    if (Math.abs(technical) > 0.5) factors.push('Technical indicators');
    if (Math.abs(fundamental) > 0.5) factors.push('Fundamental analysis');
    
    return factors;
  }

  private calculateTargetAllocation(portfolio: Portfolio): Record<string, number> {
    // Modern portfolio theory allocation
    const targetAllocation: Record<string, number> = {};
    const totalPositions = portfolio.positions.length;
    
    if (totalPositions === 0) return {};
    
    // Equal weight allocation for simplicity
    const weightPerPosition = 1 / totalPositions;
    
    for (const position of portfolio.positions) {
      targetAllocation[position.symbol] = weightPerPosition;
    }
    
    return targetAllocation;
  }

  private async updatePortfolioMetrics(portfolio: Portfolio): Promise<void> {
    // Update position weights and market values
    let totalMarketValue = portfolio.cash;
    
    for (const position of portfolio.positions) {
      const marketData = this.marketData.get(position.symbol);
      if (marketData) {
        position.currentPrice = marketData.price;
        position.marketValue = position.shares * position.currentPrice;
        position.unrealizedPnL = position.marketValue - (position.shares * position.averagePrice);
        position.unrealizedPnLPercent = (position.unrealizedPnL / (position.shares * position.averagePrice)) * 100;
        totalMarketValue += position.marketValue;
      }
    }
    
    portfolio.totalValue = totalMarketValue;
    
    // Update weights
    for (const position of portfolio.positions) {
      position.weight = position.marketValue / portfolio.totalValue;
    }
    
    // Update performance metrics
    portfolio.performance = this.calculatePerformance(portfolio);
    portfolio.riskMetrics = this.calculateRiskMetrics(portfolio);
  }

  private calculatePerformance(portfolio: Portfolio): PortfolioPerformance {
    // Simplified performance calculation
    const totalReturn = portfolio.totalValue - portfolio.cash;
    const totalReturnPercent = (totalReturn / portfolio.cash) * 100;
    
    return {
      totalReturn,
      totalReturnPercent,
      annualizedReturn: totalReturnPercent * 12, // Assuming monthly data
      sharpeRatio: totalReturnPercent / 10, // Simplified Sharpe ratio
      maxDrawdown: Math.max(0, totalReturnPercent * 0.3),
      volatility: Math.abs(totalReturnPercent) * 0.5,
      beta: 1.0, // Market beta
      alpha: totalReturnPercent - 10, // Assuming 10% market return
      trackingError: Math.abs(totalReturnPercent - 10) * 0.2
    };
  }

  private calculateRiskMetrics(portfolio: Portfolio): RiskMetrics {
    // Simplified risk metrics
    const volatility = portfolio.performance.volatility;
    
    return {
      var95: portfolio.totalValue * (volatility / 100) * 1.65,
      var99: portfolio.totalValue * (volatility / 100) * 2.33,
      expectedShortfall: portfolio.totalValue * (volatility / 100) * 2.5,
      downsideDeviation: volatility * 0.7,
      sortinoRatio: portfolio.performance.totalReturnPercent / (volatility * 0.7),
      calmarRatio: portfolio.performance.totalReturnPercent / Math.max(portfolio.performance.maxDrawdown, 1),
      informationRatio: portfolio.performance.alpha / portfolio.performance.trackingError
    };
  }

  private initializePerformance(): PortfolioPerformance {
    return {
      totalReturn: 0,
      totalReturnPercent: 0,
      annualizedReturn: 0,
      sharpeRatio: 0,
      maxDrawdown: 0,
      volatility: 0,
      beta: 1.0,
      alpha: 0,
      trackingError: 0
    };
  }

  private initializeRiskMetrics(): RiskMetrics {
    return {
      var95: 0,
      var99: 0,
      expectedShortfall: 0,
      downsideDeviation: 0,
      sortinoRatio: 0,
      calmarRatio: 0,
      informationRatio: 0
    };
  }
}

export const aiFinancialAnalyticsService = new AIFinancialAnalyticsService();