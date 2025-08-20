export interface FinancialProfile {
  id: string;
  userId: string;
  age: number;
  income: number;
  expenses: number;
  savings: number;
  investments: number;
  debt: number;
  riskTolerance: 'conservative' | 'moderate' | 'aggressive';
  investmentGoals: string[];
  timeHorizon: number; // years
  taxBracket: string;
  employmentStatus: 'employed' | 'self_employed' | 'retired' | 'student';
  lastUpdated: Date;
}

export interface InvestmentRecommendation {
  id: string;
  userId: string;
  assetClass: string;
  investmentType: string;
  allocation: number; // percentage
  riskLevel: 'low' | 'medium' | 'high';
  expectedReturn: number;
  expectedRisk: number;
  liquidity: 'high' | 'medium' | 'low';
  minimumInvestment: number;
  fees: number;
  taxImplications: string[];
  rationale: string;
  alternatives: string[];
  generatedAt: Date;
}

export interface FinancialPlan {
  id: string;
  userId: string;
  title: string;
  description: string;
  goals: FinancialGoal[];
  strategies: FinancialStrategy[];
  timeline: number; // years
  estimatedValue: number;
  riskAssessment: RiskAssessment;
  monthlyActions: MonthlyAction[];
  reviewSchedule: string;
  generatedAt: Date;
  nextReview: Date;
}

export interface FinancialGoal {
  id: string;
  name: string;
  targetAmount: number;
  targetDate: Date;
  priority: 'high' | 'medium' | 'low';
  category: 'retirement' | 'education' | 'home' | 'emergency' | 'vacation' | 'other';
  currentProgress: number;
  monthlyContribution: number;
  estimatedAchievement: Date;
}

export interface FinancialStrategy {
  id: string;
  name: string;
  description: string;
  category: 'savings' | 'investment' | 'debt' | 'insurance' | 'tax';
  priority: 'high' | 'medium' | 'low';
  implementationSteps: string[];
  estimatedCost: number;
  expectedBenefit: number;
  timeline: number; // months
  riskLevel: 'low' | 'medium' | 'high';
}

export interface RiskAssessment {
  overallRisk: 'low' | 'medium' | 'high';
  riskFactors: RiskFactor[];
  mitigationStrategies: string[];
  insuranceRecommendations: InsuranceRecommendation[];
  emergencyFundRecommendation: number;
}

export interface RiskFactor {
  category: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
  probability: 'low' | 'medium' | 'high';
  mitigation: string;
}

export interface InsuranceRecommendation {
  type: string;
  coverage: number;
  monthlyPremium: number;
  provider: string;
  rationale: string;
  priority: 'high' | 'medium' | 'low';
}

export interface MonthlyAction {
  month: number;
  actions: string[];
  estimatedCost: number;
  expectedOutcome: string;
}

export interface FinancialAnalysis {
  id: string;
  userId: string;
  netWorth: number;
  cashFlow: number;
  debtToIncomeRatio: number;
  savingsRate: number;
  investmentDiversification: number;
  emergencyFundAdequacy: number;
  retirementReadiness: number;
  recommendations: string[];
  generatedAt: Date;
}

export interface FinancialAdvisorRequest {
  userId: string;
  analysisType: 'profile' | 'plan' | 'investment' | 'risk' | 'comprehensive';
  goals?: string[];
  riskTolerance?: 'conservative' | 'moderate' | 'aggressive';
  timeHorizon?: number;
  budget?: number;
}

export interface FinancialAdvisorResponse {
  requestId: string;
  status: 'processing' | 'completed' | 'failed';
  profile?: FinancialProfile;
  plan?: FinancialPlan;
  recommendations?: InvestmentRecommendation[];
  analysis?: FinancialAnalysis;
  summary: string;
  nextSteps: string[];
  generatedAt: Date;
}

export class AIFinancialAdvisorService {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string = 'https://api.ziontechgroup.com') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async createFinancialProfile(userId: string, profileData: Partial<FinancialProfile>): Promise<FinancialProfile> {
    try {
      const response = await fetch(`${this.baseUrl}/api/financial-advisor/profiles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({ userId, ...profileData }),
      });

      if (!response.ok) {
        throw new Error(`Create profile API error: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        ...data,
        lastUpdated: new Date(data.lastUpdated),
      };
    } catch (error) {
      console.error('Error creating financial profile:', error);
      throw error;
    }
  }

  async getFinancialProfile(userId: string): Promise<FinancialProfile> {
    try {
      const response = await fetch(`${this.baseUrl}/api/financial-advisor/profiles/${userId}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Get profile API error: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        ...data,
        lastUpdated: new Date(data.lastUpdated),
      };
    } catch (error) {
      console.error('Error getting financial profile:', error);
      throw error;
    }
  }

  async generateFinancialPlan(request: FinancialAdvisorRequest): Promise<FinancialPlan> {
    try {
      const response = await fetch(`${this.baseUrl}/api/financial-advisor/plans`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`Generate plan API error: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        ...data,
        generatedAt: new Date(data.generatedAt),
        nextReview: new Date(data.nextReview),
        goals: data.goals.map((goal: any) => ({
          ...goal,
          targetDate: new Date(goal.targetDate),
          estimatedAchievement: new Date(goal.estimatedAchievement),
        })),
      };
    } catch (error) {
      console.error('Error generating financial plan:', error);
      throw error;
    }
  }

  async getInvestmentRecommendations(userId: string, riskTolerance?: string): Promise<InvestmentRecommendation[]> {
    try {
      const params = new URLSearchParams({ userId });
      if (riskTolerance) params.append('riskTolerance', riskTolerance);

      const response = await fetch(`${this.baseUrl}/api/financial-advisor/investments?${params}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Get investment recommendations API error: ${response.statusText}`);
      }

      const data = await response.json();
      return data.recommendations.map((rec: any) => ({
        ...rec,
        generatedAt: new Date(rec.generatedAt),
      }));
    } catch (error) {
      console.error('Error getting investment recommendations:', error);
      throw error;
    }
  }

  async performRiskAssessment(userId: string): Promise<RiskAssessment> {
    try {
      const response = await fetch(`${this.baseUrl}/api/financial-advisor/risk-assessment/${userId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Risk assessment API error: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error performing risk assessment:', error);
      throw error;
    }
  }

  async generateFinancialAnalysis(userId: string): Promise<FinancialAnalysis> {
    try {
      const response = await fetch(`${this.baseUrl}/api/financial-advisor/analysis/${userId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Financial analysis API error: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        ...data,
        generatedAt: new Date(data.generatedAt),
      };
    } catch (error) {
      console.error('Error generating financial analysis:', error);
      throw error;
    }
  }

  async getComprehensiveAdvice(request: FinancialAdvisorRequest): Promise<FinancialAdvisorResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/financial-advisor/comprehensive`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`Comprehensive advice API error: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        ...data,
        generatedAt: new Date(data.generatedAt),
        profile: data.profile ? {
          ...data.profile,
          lastUpdated: new Date(data.profile.lastUpdated),
        } : undefined,
        plan: data.plan ? {
          ...data.plan,
          generatedAt: new Date(data.plan.generatedAt),
          nextReview: new Date(data.plan.nextReview),
          goals: data.plan.goals.map((goal: any) => ({
            ...goal,
            targetDate: new Date(goal.targetDate),
            estimatedAchievement: new Date(goal.estimatedAchievement),
          })),
        } : undefined,
        recommendations: data.recommendations?.map((rec: any) => ({
          ...rec,
          generatedAt: new Date(rec.generatedAt),
        })),
        analysis: data.analysis ? {
          ...data.analysis,
          generatedAt: new Date(data.analysis.generatedAt),
        } : undefined,
      };
    } catch (error) {
      console.error('Error getting comprehensive advice:', error);
      throw error;
    }
  }

  async updateFinancialProfile(userId: string, updates: Partial<FinancialProfile>): Promise<FinancialProfile> {
    try {
      const response = await fetch(`${this.baseUrl}/api/financial-advisor/profiles/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(updates),
      });

      if (!response.ok) {
        throw new Error(`Update profile API error: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        ...data,
        lastUpdated: new Date(data.lastUpdated),
      };
    } catch (error) {
      console.error('Error updating financial profile:', error);
      throw error;
    }
  }

  async generateFinancialReport(userId: string, format: 'pdf' | 'csv' | 'excel'): Promise<string> {
    try {
      const response = await fetch(`${this.baseUrl}/api/financial-advisor/reports`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({ userId, format }),
      });

      if (!response.ok) {
        throw new Error(`Generate report API error: ${response.statusText}`);
      }

      const data = await response.json();
      return data.downloadUrl;
    } catch (error) {
      console.error('Error generating financial report:', error);
      throw error;
    }
  }
}

export const aiFinancialAdvisorService = new AIFinancialAdvisorService(process.env.FINANCIAL_ADVISOR_API_KEY || '');