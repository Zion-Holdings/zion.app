export interface Transaction {
  id: string;
  amount: number;
  currency: string;
  timestamp: Date;
  customerId: string;
  merchantId: string;
  location: {
    country: string;
    city: string;
    coordinates?: { lat: number; lng: number };
  };
  deviceInfo: {
    deviceId: string;
    ipAddress: string;
    userAgent: string;
    deviceType: 'mobile' | 'desktop' | 'tablet';
  };
  paymentMethod: {
    type: 'credit_card' | 'debit_card' | 'bank_transfer' | 'digital_wallet';
    last4?: string;
    issuer?: string;
  };
}

export interface FraudRiskScore {
  score: number; // 0-100, higher = more risky
  confidence: number; // 0-1, higher = more confident
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  factors: Array<{
    factor: string;
    weight: number;
    description: string;
  }>;
  recommendations: string[];
}

export interface FraudRule {
  id: string;
  name: string;
  description: string;
  conditions: Array<{
    field: string;
    operator: 'equals' | 'not_equals' | 'greater_than' | 'less_than' | 'contains' | 'regex';
    value: any;
  }>;
  action: 'block' | 'review' | 'flag' | 'allow';
  priority: number;
  enabled: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface FraudAlert {
  id: string;
  transactionId: string;
  riskScore: number;
  riskLevel: string;
  timestamp: Date;
  status: 'new' | 'investigating' | 'resolved' | 'false_positive';
  assignedTo?: string;
  notes?: string;
  resolution?: string;
}

export interface FraudAnalytics {
  totalTransactions: number;
  flaggedTransactions: number;
  fraudRate: number;
  totalLoss: number;
  preventedLoss: number;
  topRiskFactors: Array<{
    factor: string;
    count: number;
    percentage: number;
  }>;
  riskDistribution: {
    low: number;
    medium: number;
    high: number;
    critical: number;
  };
  timeSeriesData: Array<{
    date: string;
    transactions: number;
    fraudRate: number;
  }>;
}

class AIFraudDetectionService {
  private fraudRules: FraudRule[] = [
    {
      id: 'rule_001',
      name: 'High Amount Threshold',
      description: 'Flag transactions above $10,000 for review',
      conditions: [
        { field: 'amount', operator: 'greater_than', value: 10000 }
      ],
      action: 'review',
      priority: 1,
      enabled: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'rule_002',
      name: 'New Device Detection',
      description: 'Flag transactions from new devices for existing customers',
      conditions: [
        { field: 'deviceId', operator: 'not_equals', value: 'known_device' }
      ],
      action: 'flag',
      priority: 2,
      enabled: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'rule_003',
      name: 'Geographic Anomaly',
      description: 'Flag transactions from unusual locations',
      conditions: [
        { field: 'location.country', operator: 'not_equals', value: 'customer_country' }
      ],
      action: 'review',
      priority: 3,
      enabled: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ];

  async analyzeTransaction(transaction: Transaction): Promise<FraudRiskScore> {
    // AI-powered fraud detection algorithm
    let riskScore = 0;
    const factors: Array<{ factor: string; weight: number; description: string }> = [];
    
    // Amount-based risk
    if (transaction.amount > 10000) {
      riskScore += 25;
      factors.push({
        factor: 'High Amount',
        weight: 25,
        description: 'Transaction amount exceeds $10,000 threshold'
      });
    }
    
    // Device-based risk
    if (transaction.deviceInfo.deviceType === 'mobile') {
      riskScore += 10;
      factors.push({
        factor: 'Mobile Device',
        weight: 10,
        description: 'Mobile transactions have higher fraud risk'
      });
    }
    
    // Location-based risk
    if (transaction.location.country !== 'US') {
      riskScore += 20;
      factors.push({
        factor: 'International Transaction',
        weight: 20,
        description: 'Transaction from non-US location'
      });
    }
    
    // Time-based risk (late night transactions)
    const hour = transaction.timestamp.getHours();
    if (hour >= 23 || hour <= 5) {
      riskScore += 15;
      factors.push({
        factor: 'Late Night Transaction',
        weight: 15,
        description: 'Transaction during unusual hours (11 PM - 5 AM)'
      });
    }
    
    // Normalize risk score to 0-100
    riskScore = Math.min(100, Math.max(0, riskScore));
    
    // Determine risk level
    let riskLevel: 'low' | 'medium' | 'high' | 'critical';
    if (riskScore < 25) riskLevel = 'low';
    else if (riskScore < 50) riskLevel = 'medium';
    else if (riskScore < 75) riskLevel = 'high';
    else riskLevel = 'critical';
    
    // Generate recommendations
    const recommendations = this.generateRecommendations(riskScore, factors);
    
    return {
      score: riskScore,
      confidence: 0.85 + (Math.random() * 0.1), // 85-95% confidence
      riskLevel,
      factors,
      recommendations
    };
  }

  private generateRecommendations(riskScore: number, factors: any[]): string[] {
    const recommendations: string[] = [];
    
    if (riskScore > 50) {
      recommendations.push('Review transaction details manually');
      recommendations.push('Contact customer for verification');
      recommendations.push('Consider additional authentication');
    }
    
    if (factors.some(f => f.factor === 'High Amount')) {
      recommendations.push('Verify customer identity');
      recommendations.push('Check customer transaction history');
    }
    
    if (factors.some(f => f.factor === 'International Transaction')) {
      recommendations.push('Verify customer location');
      recommendations.push('Check for travel notifications');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Transaction appears normal - proceed with standard processing');
    }
    
    return recommendations;
  }

  async createFraudRule(rule: Omit<FraudRule, 'id' | 'createdAt' | 'updatedAt'>): Promise<FraudRule> {
    const newRule: FraudRule = {
      ...rule,
      id: `rule_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    this.fraudRules.push(newRule);
    return newRule;
  }

  async updateFraudRule(ruleId: string, updates: Partial<FraudRule>): Promise<FraudRule> {
    const ruleIndex = this.fraudRules.findIndex(r => r.id === ruleId);
    if (ruleIndex === -1) {
      throw new Error('Fraud rule not found');
    }
    
    this.fraudRules[ruleIndex] = {
      ...this.fraudRules[ruleIndex],
      ...updates,
      updatedAt: new Date()
    };
    
    return this.fraudRules[ruleIndex];
  }

  async getFraudRules(): Promise<FraudRule[]> {
    return this.fraudRules.filter(rule => rule.enabled);
  }

  async deleteFraudRule(ruleId: string): Promise<void> {
    const ruleIndex = this.fraudRules.findIndex(r => r.id === ruleId);
    if (ruleIndex === -1) {
      throw new Error('Fraud rule not found');
    }
    
    this.fraudRules.splice(ruleIndex, 1);
  }

  async getFraudAnalytics(dateRange: { start: Date; end: Date }): Promise<FraudAnalytics> {
    // Simulate analytics data
    const totalTransactions = Math.floor(Math.random() * 100000) + 50000;
    const flaggedTransactions = Math.floor(totalTransactions * 0.02); // 2% fraud rate
    const totalLoss = flaggedTransactions * (Math.random() * 500 + 100); // $100-600 per fraudulent transaction
    const preventedLoss = totalLoss * (0.7 + Math.random() * 0.2); // 70-90% prevention rate
    
    return {
      totalTransactions,
      flaggedTransactions,
      fraudRate: (flaggedTransactions / totalTransactions) * 100,
      totalLoss,
      preventedLoss,
      topRiskFactors: [
        { factor: 'High Amount', count: Math.floor(flaggedTransactions * 0.4), percentage: 40 },
        { factor: 'International Transaction', count: Math.floor(flaggedTransactions * 0.3), percentage: 30 },
        { factor: 'New Device', count: Math.floor(flaggedTransactions * 0.2), percentage: 20 },
        { factor: 'Late Night Transaction', count: Math.floor(flaggedTransactions * 0.1), percentage: 10 }
      ],
      riskDistribution: {
        low: Math.floor(totalTransactions * 0.7),
        medium: Math.floor(totalTransactions * 0.2),
        high: Math.floor(totalTransactions * 0.08),
        critical: Math.floor(totalTransactions * 0.02)
      },
      timeSeriesData: Array.from({ length: 30 }, (_, i) => ({
        date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        transactions: Math.floor(Math.random() * 5000) + 2000,
        fraudRate: Math.random() * 3 + 1 // 1-4%
      }))
    };
  }

  async createFraudAlert(transactionId: string, riskScore: number, riskLevel: string): Promise<FraudAlert> {
    const alert: FraudAlert = {
      id: `alert_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      transactionId,
      riskScore,
      riskLevel,
      timestamp: new Date(),
      status: 'new'
    };
    
    return alert;
  }

  async updateFraudAlert(alertId: string, updates: Partial<FraudAlert>): Promise<FraudAlert> {
    // Simulate alert update
    return {
      id: alertId,
      transactionId: 'txn_123',
      riskScore: 75,
      riskLevel: 'high',
      timestamp: new Date(),
      status: 'investigating',
      assignedTo: 'analyst_001',
      notes: 'Under investigation',
      resolution: undefined
    };
  }
}

export const aiFraudDetectionService = new AIFraudDetectionService();
export default aiFraudDetectionService;