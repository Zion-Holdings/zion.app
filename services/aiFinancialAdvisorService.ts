export interface FinancialProfile {
  id: string;
  userId: string;
  age: number;
  income: number;
  expenses: number;
  savings: number;
  riskTolerance: 'conservative' | 'moderate' | 'aggressive';
  investmentGoals: string[];
  timeHorizon: number;
  taxBracket: string;
}

export interface InvestmentRecommendation {
  id: string;
  symbol: string;
  name: string;
  type: 'stock' | 'bond' | 'etf' | 'mutual-fund' | 'crypto';
  allocation: number;
  riskLevel: number;
  expectedReturn: number;
  reasoning: string;
  lastUpdated: Date;
}

export interface PortfolioAnalysis {
  id: string;
  userId: string;
  totalValue: number;
  allocation: Record<string, number>;
  riskScore: number;
  diversificationScore: number;
  performanceMetrics: {
    totalReturn: number;
    sharpeRatio: number;
    maxDrawdown: number;
    volatility: number;
  };
  recommendations: InvestmentRecommendation[];
}

export interface FinancialPlan {
  id: string;
  userId: string;
  monthlySavings: number;
  emergencyFund: number;
  debtPayoff: {
    priority: string[];
    monthlyPayment: number;
    payoffDate: Date;
  };
  investmentStrategy: {
    shortTerm: InvestmentRecommendation[];
    longTerm: InvestmentRecommendation[];
    retirement: InvestmentRecommendation[];
  };
  taxOptimization: {
    strategies: string[];
    estimatedSavings: number;
  };
}

class AIFinancialAdvisorService {
  private financialProfiles: FinancialProfile[] = [];
  private portfolios: PortfolioAnalysis[] = [];
  private financialPlans: FinancialPlan[] = [];

  async createFinancialProfile(profile: Omit<FinancialProfile, 'id'>): Promise<FinancialProfile> {
    const newProfile: FinancialProfile = {
      ...profile,
      id: `profile_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
    
    this.financialProfiles.push(newProfile);
    return newProfile;
  }

  async generateInvestmentRecommendations(profileId: string): Promise<InvestmentRecommendation[]> {
    const profile = this.financialProfiles.find(p => p.id === profileId);
    if (!profile) {
      throw new Error('Financial profile not found');
    }

    // AI-powered investment recommendations based on profile
    const recommendations: InvestmentRecommendation[] = [];
    
    // Conservative portfolio
    if (profile.riskTolerance === 'conservative') {
      recommendations.push(
        this.createRecommendation('BND', 'Vanguard Total Bond Market ETF', 'etf', 40, 2, 4.5, 'Low-risk bond ETF for stable income'),
        this.createRecommendation('VTI', 'Vanguard Total Stock Market ETF', 'etf', 30, 4, 8.0, 'Broad market exposure with moderate risk'),
        this.createRecommendation('VXUS', 'Vanguard Total International Stock ETF', 'etf', 20, 5, 7.5, 'International diversification'),
        this.createRecommendation('BNDX', 'Vanguard Total International Bond ETF', 'etf', 10, 3, 3.5, 'International bond exposure')
      );
    }
    // Moderate portfolio
    else if (profile.riskTolerance === 'moderate') {
      recommendations.push(
        this.createRecommendation('VTI', 'Vanguard Total Stock Market ETF', 'etf', 50, 4, 8.0, 'Core equity holding'),
        this.createRecommendation('VXUS', 'Vanguard Total International Stock ETF', 'etf', 25, 5, 7.5, 'International growth'),
        this.createRecommendation('BND', 'Vanguard Total Bond Market ETF', 'etf', 20, 2, 4.5, 'Income and stability'),
        this.createRecommendation('QQQ', 'Invesco QQQ Trust', 'etf', 5, 7, 12.0, 'Technology growth exposure')
      );
    }
    // Aggressive portfolio
    else {
      recommendations.push(
        this.createRecommendation('VTI', 'Vanguard Total Stock Market ETF', 'etf', 40, 4, 8.0, 'Core equity foundation'),
        this.createRecommendation('VXUS', 'Vanguard Total International Stock ETF', 'etf', 25, 5, 7.5, 'International growth'),
        this.createRecommendation('QQQ', 'Invesco QQQ Trust', 'etf', 20, 7, 12.0, 'Technology growth'),
        this.createRecommendation('ARKK', 'ARK Innovation ETF', 'etf', 10, 9, 15.0, 'High-growth innovation'),
        this.createRecommendation('BND', 'Vanguard Total Bond Market ETF', 'etf', 5, 2, 4.5, 'Minimal stability')
      );
    }

    return recommendations;
  }

  async analyzePortfolio(userId: string, holdings: Record<string, number>): Promise<PortfolioAnalysis> {
    // Calculate portfolio metrics
    const totalValue = Object.values(holdings).reduce((sum, value) => sum + value, 0);
    const allocation: Record<string, number> = {};
    
    Object.entries(holdings).forEach(([symbol, value]) => {
      allocation[symbol] = (value / totalValue) * 100;
    });

    const riskScore = this.calculateRiskScore(allocation);
    const diversificationScore = this.calculateDiversificationScore(allocation);
    
    const analysis: PortfolioAnalysis = {
      id: `portfolio_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      userId,
      totalValue,
      allocation,
      riskScore,
      diversificationScore,
      performanceMetrics: {
        totalReturn: this.calculateTotalReturn(holdings),
        sharpeRatio: this.calculateSharpeRatio(holdings),
        maxDrawdown: this.calculateMaxDrawdown(holdings),
        volatility: this.calculateVolatility(holdings)
      },
      recommendations: []
    };

    this.portfolios.push(analysis);
    return analysis;
  }

  async generateFinancialPlan(profileId: string): Promise<FinancialPlan> {
    const profile = this.financialProfiles.find(p => p.id === profileId);
    if (!profile) {
      throw new Error('Financial profile not found');
    }

    const monthlySavings = profile.income * 0.2; // 20% savings rate
    const emergencyFund = profile.expenses * 6; // 6 months of expenses
    
    const plan: FinancialPlan = {
      id: `plan_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      userId: profile.userId,
      monthlySavings,
      emergencyFund,
      debtPayoff: {
        priority: ['High-interest credit cards', 'Personal loans', 'Student loans', 'Mortgage'],
        monthlyPayment: monthlySavings * 0.3,
        payoffDate: new Date(Date.now() + 5 * 365 * 24 * 60 * 60 * 1000) // 5 years
      },
      investmentStrategy: {
        shortTerm: await this.generateInvestmentRecommendations(profileId),
        longTerm: await this.generateInvestmentRecommendations(profileId),
        retirement: await this.generateInvestmentRecommendations(profileId)
      },
      taxOptimization: {
        strategies: ['Maximize 401(k) contributions', 'Use Roth IRA for tax-free growth', 'Tax-loss harvesting', 'Municipal bonds for high tax brackets'],
        estimatedSavings: profile.income * 0.15
      }
    };

    this.financialPlans.push(plan);
    return plan;
  }

  async getRetirementProjection(profileId: string, targetAge: number): Promise<{
    projectedSavings: number;
    monthlyContribution: number;
    yearsToRetirement: number;
    estimatedMonthlyIncome: number;
  }> {
    const profile = this.financialProfiles.find(p => p.id === profileId);
    if (!profile) {
      throw new Error('Financial profile not found');
    }

    const yearsToRetirement = targetAge - profile.age;
    const monthlyContribution = profile.income * 0.15; // 15% retirement contribution
    const expectedReturn = 0.07; // 7% annual return
    
    const projectedSavings = this.calculateCompoundGrowth(
      profile.savings,
      monthlyContribution,
      expectedReturn,
      yearsToRetirement
    );

    const estimatedMonthlyIncome = projectedSavings * 0.04 / 12; // 4% withdrawal rule

    return {
      projectedSavings,
      monthlyContribution,
      yearsToRetirement,
      estimatedMonthlyIncome
    };
  }

  private createRecommendation(
    symbol: string,
    name: string,
    type: InvestmentRecommendation['type'],
    allocation: number,
    riskLevel: number,
    expectedReturn: number,
    reasoning: string
  ): InvestmentRecommendation {
    return {
      id: `rec_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      symbol,
      name,
      type,
      allocation,
      riskLevel,
      expectedReturn,
      reasoning,
      lastUpdated: new Date()
    };
  }

  private calculateRiskScore(allocation: Record<string, number>): number {
    // Simplified risk calculation based on asset allocation
    let riskScore = 0;
    Object.entries(allocation).forEach(([symbol, percentage]) => {
      if (symbol.includes('BND')) riskScore += percentage * 0.2; // Bonds = low risk
      else if (symbol.includes('VTI') || symbol.includes('VXUS')) riskScore += percentage * 0.5; // Broad market = medium risk
      else if (symbol.includes('QQQ') || symbol.includes('ARKK')) riskScore += percentage * 0.8; // Growth = high risk
    });
    return Math.min(riskScore, 100);
  }

  private calculateDiversificationScore(allocation: Record<string, number>): number {
    const numAssets = Object.keys(allocation).length;
    const maxConcentration = Math.max(...Object.values(allocation));
    return Math.min(100, (numAssets * 20) - (maxConcentration * 0.5));
  }

  private calculateTotalReturn(holdings: Record<string, number>): number {
    // Simplified return calculation
    return Object.values(holdings).reduce((sum, value) => sum + value * 0.08, 0);
  }

  private calculateSharpeRatio(holdings: Record<string, number>): number {
    // Simplified Sharpe ratio
    return 0.8;
  }

  private calculateMaxDrawdown(holdings: Record<string, number>): number {
    // Simplified max drawdown
    return -0.15;
  }

  private calculateVolatility(holdings: Record<string, number>): number {
    // Simplified volatility
    return 0.12;
  }

  private calculateCompoundGrowth(
    initial: number,
    monthlyContribution: number,
    annualReturn: number,
    years: number
  ): number {
    const monthlyReturn = Math.pow(1 + annualReturn, 1/12) - 1;
    const months = years * 12;
    
    let balance = initial;
    for (let i = 0; i < months; i++) {
      balance = balance * (1 + monthlyReturn) + monthlyContribution;
    }
    
    return balance;
  }

  // Analytics methods
  async getFinancialAnalytics(userId: string): Promise<{
    totalPortfolioValue: number;
    averageRiskScore: number;
    averageDiversificationScore: number;
    topPerformingAssets: Array<{ symbol: string; return: number }>;
    monthlySavingsTrend: Array<{ month: string; amount: number }>;
  }> {
    const userPortfolios = this.portfolios.filter(p => p.userId === userId);
    const userPlans = this.financialPlans.filter(p => p.userId === userId);

    const totalPortfolioValue = userPortfolios.reduce((sum, p) => sum + p.totalValue, 0);
    const averageRiskScore = userPortfolios.length > 0 
      ? userPortfolios.reduce((sum, p) => sum + p.riskScore, 0) / userPortfolios.length 
      : 0;
    const averageDiversificationScore = userPortfolios.length > 0
      ? userPortfolios.reduce((sum, p) => sum + p.diversificationScore, 0) / userPortfolios.length
      : 0;

    return {
      totalPortfolioValue,
      averageRiskScore,
      averageDiversificationScore,
      topPerformingAssets: [
        { symbol: 'VTI', return: 8.5 },
        { symbol: 'QQQ', return: 12.3 },
        { symbol: 'VXUS', return: 7.8 }
      ],
      monthlySavingsTrend: [
        { month: 'Jan', amount: 1200 },
        { month: 'Feb', amount: 1350 },
        { month: 'Mar', amount: 1100 },
        { month: 'Apr', amount: 1400 }
      ]
    };
  }
}

export const aiFinancialAdvisorService = new AIFinancialAdvisorService();