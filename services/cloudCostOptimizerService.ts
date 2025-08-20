export interface CloudResource {
  id: string;
  name: string;
  type: 'ec2' | 'rds' | 's3' | 'lambda' | 'ecs' | 'eks' | 'elb' | 'cloudfront';
  provider: 'aws' | 'azure' | 'gcp';
  region: string;
  cost: {
    hourly: number;
    daily: number;
    monthly: number;
    yearly: number;
  };
  utilization: {
    cpu: number;
    memory: number;
    storage: number;
    network: number;
  };
  tags: Record<string, string>;
  status: 'running' | 'stopped' | 'terminated' | 'error';
  lastUpdated: Date;
}

export interface CostOptimization {
  id: string;
  resourceId: string;
  type: 'rightsizing' | 'scheduling' | 'reservation' | 'spot' | 'storage' | 'unused';
  currentCost: number;
  potentialSavings: number;
  savingsPercentage: number;
  recommendation: string;
  implementation: string;
  risk: 'low' | 'medium' | 'high';
  priority: 'low' | 'medium' | 'high' | 'critical';
  estimatedEffort: 'low' | 'medium' | 'high';
  status: 'pending' | 'implemented' | 'rejected' | 'in-progress';
  createdAt: Date;
  implementedAt?: Date;
}

export interface CostAlert {
  id: string;
  name: string;
  type: 'budget' | 'anomaly' | 'threshold' | 'forecast';
  condition: {
    metric: string;
    operator: 'gt' | 'lt' | 'eq' | 'gte' | 'lte';
    value: number;
    period: 'hour' | 'day' | 'week' | 'month';
  };
  threshold: number;
  currentValue: number;
  status: 'active' | 'triggered' | 'resolved' | 'disabled';
  severity: 'info' | 'warning' | 'critical';
  message: string;
  createdAt: Date;
  lastTriggered?: Date;
  recipients: string[];
}

export interface CostBudget {
  id: string;
  name: string;
  amount: number;
  period: 'monthly' | 'quarterly' | 'yearly';
  startDate: Date;
  endDate: Date;
  spent: number;
  remaining: number;
  status: 'on-track' | 'at-risk' | 'exceeded';
  alerts: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CostReport {
  id: string;
  name: string;
  period: {
    start: Date;
    end: Date;
  };
  totalCost: number;
  breakdown: {
    byService: Record<string, number>;
    byRegion: Record<string, number>;
    byTag: Record<string, number>;
    byAccount: Record<string, number>;
  };
  trends: {
    daily: Array<{ date: string; cost: number }>;
    weekly: Array<{ week: string; cost: number }>;
    monthly: Array<{ month: string; cost: number }>;
  };
  optimizations: CostOptimization[];
  generatedAt: Date;
}

export interface ResourceRecommendation {
  resourceId: string;
  resourceName: string;
  currentInstance: string;
  recommendedInstance: string;
  currentCost: number;
  recommendedCost: number;
  monthlySavings: number;
  confidence: number;
  reasoning: string[];
  implementation: string;
}

class CloudCostOptimizerService {
  private resources: Map<string, CloudResource> = new Map();
  private optimizations: Map<string, CostOptimization> = new Map();
  private alerts: Map<string, CostAlert> = new Map();
  private budgets: Map<string, CostBudget> = new Map();
  private mockData: any = {};

  constructor() {
    this.initializeMockData();
    this.initializeResources();
    this.initializeBudgets();
    this.initializeAlerts();
  }

  private initializeMockData() {
    this.mockData = {
      ec2Instances: this.generateEC2Data(),
      rdsInstances: this.generateRDSData(),
      s3Buckets: this.generateS3Data(),
      lambdaFunctions: this.generateLambdaData()
    };
  }

  private generateEC2Data() {
    const instanceTypes = ['t3.micro', 't3.small', 't3.medium', 'm5.large', 'c5.xlarge'];
    const regions = ['us-east-1', 'us-west-2', 'eu-west-1', 'ap-southeast-1'];
    const data = [];

    for (let i = 0; i < 50; i++) {
      const instanceType = instanceTypes[Math.floor(Math.random() * instanceTypes.length)];
      const region = regions[Math.floor(Math.random() * regions.length)];
      const hourlyCost = this.getEC2HourlyCost(instanceType);
      
      data.push({
        id: `i-${Math.random().toString(36).substr(2, 9)}`,
        name: `EC2-Instance-${i + 1}`,
        type: 'ec2',
        provider: 'aws',
        region,
        cost: {
          hourly: hourlyCost,
          daily: hourlyCost * 24,
          monthly: hourlyCost * 24 * 30,
          yearly: hourlyCost * 24 * 365
        },
        utilization: {
          cpu: Math.random() * 100,
          memory: Math.random() * 100,
          storage: Math.random() * 100,
          network: Math.random() * 100
        },
        tags: {
          Environment: Math.random() > 0.5 ? 'Production' : 'Development',
          Project: `Project-${Math.floor(Math.random() * 5) + 1}`,
          Owner: `Team-${Math.floor(Math.random() * 3) + 1}`
        },
        status: Math.random() > 0.1 ? 'running' : 'stopped',
        lastUpdated: new Date()
      });
    }

    return data;
  }

  private generateRDSData() {
    const instanceTypes = ['db.t3.micro', 'db.t3.small', 'db.m5.large', 'db.r5.xlarge'];
    const regions = ['us-east-1', 'us-west-2', 'eu-west-1'];
    const data = [];

    for (let i = 0; i < 20; i++) {
      const instanceType = instanceTypes[Math.floor(Math.random() * instanceTypes.length)];
      const region = regions[Math.floor(Math.random() * regions.length)];
      const hourlyCost = this.getRDSHourlyCost(instanceType);
      
      data.push({
        id: `db-${Math.random().toString(36).substr(2, 9)}`,
        name: `RDS-Instance-${i + 1}`,
        type: 'rds',
        provider: 'aws',
        region,
        cost: {
          hourly: hourlyCost,
          daily: hourlyCost * 24,
          monthly: hourlyCost * 24 * 30,
          yearly: hourlyCost * 24 * 365
        },
        utilization: {
          cpu: Math.random() * 100,
          memory: Math.random() * 100,
          storage: Math.random() * 100,
          network: Math.random() * 100
        },
        tags: {
          Environment: Math.random() > 0.5 ? 'Production' : 'Development',
          Database: Math.random() > 0.5 ? 'PostgreSQL' : 'MySQL',
          Backup: 'Enabled'
        },
        status: 'running',
        lastUpdated: new Date()
      });
    }

    return data;
  }

  private generateS3Data() {
    const regions = ['us-east-1', 'us-west-2', 'eu-west-1'];
    const data = [];

    for (let i = 0; i < 30; i++) {
      const region = regions[Math.floor(Math.random() * regions.length)];
      const storageGB = Math.random() * 1000 + 100;
      const monthlyCost = storageGB * 0.023; // S3 Standard pricing
      
      data.push({
        id: `bucket-${Math.random().toString(36).substr(2, 9)}`,
        name: `S3-Bucket-${i + 1}`,
        type: 's3',
        provider: 'aws',
        region,
        cost: {
          hourly: monthlyCost / (24 * 30),
          daily: monthlyCost / 30,
          monthly: monthlyCost,
          yearly: monthlyCost * 12
        },
        utilization: {
          cpu: 0,
          memory: 0,
          storage: storageGB,
          network: Math.random() * 100
        },
        tags: {
          Environment: Math.random() > 0.5 ? 'Production' : 'Development',
          StorageClass: 'Standard',
          Lifecycle: 'Enabled'
        },
        status: 'running',
        lastUpdated: new Date()
      });
    }

    return data;
  }

  private generateLambdaData() {
    const regions = ['us-east-1', 'us-west-2', 'eu-west-1'];
    const data = [];

    for (let i = 0; i < 40; i++) {
      const region = regions[Math.floor(Math.random() * regions.length)];
      const invocations = Math.random() * 1000000 + 100000;
      const duration = Math.random() * 1000 + 100;
      const memory = Math.random() * 1024 + 128;
      const monthlyCost = this.calculateLambdaCost(invocations, duration, memory);
      
      data.push({
        id: `lambda-${Math.random().toString(36).substr(2, 9)}`,
        name: `Lambda-Function-${i + 1}`,
        type: 'lambda',
        provider: 'aws',
        region,
        cost: {
          hourly: monthlyCost / (24 * 30),
          daily: monthlyCost / 30,
          monthly: monthlyCost,
          yearly: monthlyCost * 12
        },
        utilization: {
          cpu: 0,
          memory: memory,
          storage: 0,
          network: Math.random() * 100
        },
        tags: {
          Environment: Math.random() > 0.5 ? 'Production' : 'Development',
          Runtime: Math.random() > 0.5 ? 'Node.js' : 'Python',
          AutoScaling: 'Enabled'
        },
        status: 'running',
        lastUpdated: new Date()
      });
    }

    return data;
  }

  private getEC2HourlyCost(instanceType: string): number {
    const costs: Record<string, number> = {
      't3.micro': 0.0104,
      't3.small': 0.0208,
      't3.medium': 0.0416,
      'm5.large': 0.096,
      'c5.xlarge': 0.17
    };
    return costs[instanceType] || 0.1;
  }

  private getRDSHourlyCost(instanceType: string): number {
    const costs: Record<string, number> = {
      'db.t3.micro': 0.017,
      'db.t3.small': 0.034,
      'db.m5.large': 0.171,
      'db.r5.xlarge': 0.285
    };
    return costs[instanceType] || 0.1;
  }

  private calculateLambdaCost(invocations: number, duration: number, memory: number): number {
    const requestCost = invocations * 0.0000002;
    const computeCost = (invocations * duration * memory) / 1024 * 0.0000166667;
    return requestCost + computeCost;
  }

  private initializeResources() {
    const allResources = [
      ...this.mockData.ec2Instances,
      ...this.mockData.rdsInstances,
      ...this.mockData.s3Buckets,
      ...this.mockData.lambdaFunctions
    ];

    allResources.forEach(resource => {
      this.resources.set(resource.id, resource);
    });
  }

  private initializeBudgets() {
    const budgetData: CostBudget[] = [
      {
        id: 'monthly_budget',
        name: 'Monthly Cloud Budget',
        amount: 50000,
        period: 'monthly',
        startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
        endDate: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
        spent: 42000,
        remaining: 8000,
        status: 'on-track',
        alerts: ['budget_alert_1'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 'quarterly_budget',
        name: 'Q1 2025 Budget',
        amount: 150000,
        period: 'quarterly',
        startDate: new Date(2025, 0, 1),
        endDate: new Date(2025, 2, 31),
        spent: 125000,
        remaining: 25000,
        status: 'on-track',
        alerts: ['budget_alert_2'],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    budgetData.forEach(budget => {
      this.budgets.set(budget.id, budget);
    });
  }

  private initializeAlerts() {
    const alertData: CostAlert[] = [
      {
        id: 'budget_alert_1',
        name: 'Monthly Budget Alert',
        type: 'budget',
        condition: {
          metric: 'monthly_spend',
          operator: 'gte',
          value: 45000,
          period: 'month'
        },
        threshold: 45000,
        currentValue: 42000,
        status: 'active',
        severity: 'warning',
        message: 'Monthly spend is approaching budget limit',
        createdAt: new Date(),
        recipients: ['finance@ziontechgroup.com', 'devops@ziontechgroup.com']
      },
      {
        id: 'anomaly_alert_1',
        name: 'Cost Anomaly Detection',
        type: 'anomaly',
        condition: {
          metric: 'daily_cost',
          operator: 'gt',
          value: 2000,
          period: 'day'
        },
        threshold: 2000,
        currentValue: 1800,
        status: 'active',
        severity: 'info',
        message: 'Daily cost is within normal range',
        createdAt: new Date(),
        recipients: ['devops@ziontechgroup.com']
      }
    ];

    alertData.forEach(alert => {
      this.alerts.set(alert.id, alert);
    });
  }

  async getResources(): Promise<CloudResource[]> {
    return Array.from(this.resources.values());
  }

  async getResource(id: string): Promise<CloudResource | null> {
    return this.resources.get(id) || null;
  }

  async getResourcesByType(type: string): Promise<CloudResource[]> {
    return Array.from(this.resources.values()).filter(resource => resource.type === type);
  }

  async getResourcesByProvider(provider: string): Promise<CloudResource[]> {
    return Array.from(this.resources.values()).filter(resource => resource.provider === provider);
  }

  async getResourcesByRegion(region: string): Promise<CloudResource[]> {
    return Array.from(this.resources.values()).filter(resource => resource.region === region);
  }

  async getTotalCosts(period: 'hour' | 'day' | 'month' | 'year' = 'month'): Promise<number> {
    const resources = Array.from(this.resources.values());
    return resources.reduce((total, resource) => {
      return total + resource.cost[period];
    }, 0);
  }

  async getCostBreakdown(period: 'hour' | 'day' | 'month' | 'year' = 'month'): Promise<{
    byService: Record<string, number>;
    byRegion: Record<string, number>;
    byTag: Record<string, number>;
    byAccount: Record<string, number>;
  }> {
    const resources = Array.from(this.resources.values());
    const byService: Record<string, number> = {};
    const byRegion: Record<string, number> = {};
    const byTag: Record<string, number> = {};
    const byAccount: Record<string, number> = {};

    resources.forEach(resource => {
      // By service type
      byService[resource.type] = (byService[resource.type] || 0) + resource.cost[period];
      
      // By region
      byRegion[resource.region] = (byRegion[resource.region] || 0) + resource.cost[period];
      
      // By tags
      Object.entries(resource.tags).forEach(([key, value]) => {
        const tagKey = `${key}:${value}`;
        byTag[tagKey] = (byTag[tagKey] || 0) + resource.cost[period];
      });

      // By account (mock account data)
      const accountId = 'account-123'; // Mock account ID
      byAccount[accountId] = (byAccount[accountId] || 0) + resource.cost[period];
    });

    return { byService, byRegion, byTag, byAccount };
  }

  async generateOptimizations(): Promise<CostOptimization[]> {
    const resources = Array.from(this.resources.values());
    const optimizations: CostOptimization[] = [];

    resources.forEach(resource => {
      // Check for unused resources
      if (resource.status === 'stopped' && resource.type === 'ec2') {
        const monthlySavings = resource.cost.monthly;
        optimizations.push({
          id: `opt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          resourceId: resource.id,
          type: 'unused',
          currentCost: resource.cost.monthly,
          potentialSavings: monthlySavings,
          savingsPercentage: 100,
          recommendation: `Terminate unused EC2 instance ${resource.name}`,
          implementation: 'Terminate the instance if no longer needed',
          risk: 'low',
          priority: 'high',
          estimatedEffort: 'low',
          status: 'pending',
          createdAt: new Date()
        });
      }

      // Check for rightsizing opportunities
      if (resource.type === 'ec2' && resource.utilization.cpu < 20 && resource.utilization.memory < 30) {
        const currentCost = resource.cost.monthly;
        const recommendedCost = currentCost * 0.5; // Assume 50% cost reduction
        const monthlySavings = currentCost - recommendedCost;
        
        optimizations.push({
          id: `opt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          resourceId: resource.id,
          type: 'rightsizing',
          currentCost,
          potentialSavings: monthlySavings,
          savingsPercentage: 50,
          recommendation: `Downsize ${resource.name} to smaller instance type`,
          implementation: 'Change instance type to t3.micro or t3.small',
          risk: 'medium',
          priority: 'medium',
          estimatedEffort: 'medium',
          status: 'pending',
          createdAt: new Date()
        });
      }

      // Check for scheduling opportunities
      if (resource.type === 'ec2' && resource.tags.Environment === 'Development') {
        const currentCost = resource.cost.monthly;
        const potentialSavings = currentCost * 0.7; // Assume 70% savings with scheduling
        
        optimizations.push({
          id: `opt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          resourceId: resource.id,
          type: 'scheduling',
          currentCost,
          potentialSavings,
          savingsPercentage: 70,
          recommendation: `Implement auto-shutdown for development instance ${resource.name}`,
          implementation: 'Schedule shutdown during non-business hours',
          risk: 'low',
          priority: 'medium',
          estimatedEffort: 'low',
          status: 'pending',
          createdAt: new Date()
        });
      }
    });

    // Store optimizations
    optimizations.forEach(opt => {
      this.optimizations.set(opt.id, opt);
    });

    return optimizations;
  }

  async getOptimizations(): Promise<CostOptimization[]> {
    return Array.from(this.optimizations.values());
  }

  async getOptimizationsByType(type: string): Promise<CostOptimization[]> {
    return Array.from(this.optimizations.values()).filter(opt => opt.type === type);
  }

  async getOptimizationsByPriority(priority: string): Promise<CostOptimization[]> {
    return Array.from(this.optimizations.values()).filter(opt => opt.priority === priority);
  }

  async implementOptimization(optimizationId: string): Promise<boolean> {
    const optimization = this.optimizations.get(optimizationId);
    if (!optimization) return false;

    optimization.status = 'implemented';
    optimization.implementedAt = new Date();

    // Update resource if needed
    if (optimization.type === 'unused') {
      const resource = this.resources.get(optimization.resourceId);
      if (resource) {
        resource.status = 'terminated';
        resource.lastUpdated = new Date();
      }
    }

    return true;
  }

  async getBudgets(): Promise<CostBudget[]> {
    return Array.from(this.budgets.values());
  }

  async getBudget(id: string): Promise<CostBudget | null> {
    return this.budgets.get(id) || null;
  }

  async createBudget(budget: Omit<CostBudget, 'id' | 'createdAt' | 'updatedAt'>): Promise<CostBudget> {
    const newBudget: CostBudget = {
      ...budget,
      id: `budget_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.budgets.set(newBudget.id, newBudget);
    return newBudget;
  }

  async updateBudget(id: string, updates: Partial<CostBudget>): Promise<CostBudget | null> {
    const budget = this.budgets.get(id);
    if (!budget) return null;

    const updatedBudget: CostBudget = {
      ...budget,
      ...updates,
      updatedAt: new Date()
    };

    this.budgets.set(id, updatedBudget);
    return updatedBudget;
  }

  async getAlerts(): Promise<CostAlert[]> {
    return Array.from(this.alerts.values());
  }

  async getAlertsBySeverity(severity: string): Promise<CostAlert[]> {
    return Array.from(this.alerts.values()).filter(alert => alert.severity === severity);
  }

  async createAlert(alert: Omit<CostAlert, 'id' | 'createdAt'>): Promise<CostAlert> {
    const newAlert: CostAlert = {
      ...alert,
      id: `alert_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date()
    };

    this.alerts.set(newAlert.id, newAlert);
    return newAlert;
  }

  async generateCostReport(startDate: Date, endDate: Date): Promise<CostReport> {
    const resources = Array.from(this.resources.values());
    const totalCost = resources.reduce((sum, resource) => sum + resource.cost.monthly, 0);
    
    const breakdown = await this.getCostBreakdown('month');
    
    // Generate trends
    const trends = {
      daily: this.generateDailyTrends(startDate, endDate),
      weekly: this.generateWeeklyTrends(startDate, endDate),
      monthly: this.generateMonthlyTrends(startDate, endDate)
    };

    const optimizations = await this.generateOptimizations();

    const report: CostReport = {
      id: `report_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name: `Cost Report ${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`,
      period: { start: startDate, end: endDate },
      totalCost,
      breakdown,
      trends,
      optimizations,
      generatedAt: new Date()
    };

    return report;
  }

  private generateDailyTrends(startDate: Date, endDate: Date): Array<{ date: string; cost: number }> {
    const trends = [];
    const currentDate = new Date(startDate);
    
    while (currentDate <= endDate) {
      const dailyCost = Math.random() * 2000 + 1000; // Mock daily cost
      trends.push({
        date: currentDate.toISOString().split('T')[0],
        cost: Math.round(dailyCost)
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return trends;
  }

  private generateWeeklyTrends(startDate: Date, endDate: Date): Array<{ week: string; cost: number }> {
    const trends = [];
    const currentDate = new Date(startDate);
    
    while (currentDate <= endDate) {
      const weekStart = new Date(currentDate);
      weekStart.setDate(weekStart.getDate() - weekStart.getDay());
      
      const weeklyCost = Math.random() * 10000 + 5000; // Mock weekly cost
      trends.push({
        week: `Week of ${weekStart.toLocaleDateString()}`,
        cost: Math.round(weeklyCost)
      });
      
      currentDate.setDate(currentDate.getDate() + 7);
    }
    
    return trends;
  }

  private generateMonthlyTrends(startDate: Date, endDate: Date): Array<{ month: string; cost: number }> {
    const trends = [];
    const currentDate = new Date(startDate);
    
    while (currentDate <= endDate) {
      const monthlyCost = Math.random() * 30000 + 20000; // Mock monthly cost
      trends.push({
        month: currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        cost: Math.round(monthlyCost)
      });
      
      currentDate.setMonth(currentDate.getMonth() + 1);
    }
    
    return trends;
  }

  async getResourceRecommendations(): Promise<ResourceRecommendation[]> {
    const resources = Array.from(this.resources.values());
    const recommendations: ResourceRecommendation[] = [];

    resources.forEach(resource => {
      if (resource.type === 'ec2' && resource.utilization.cpu < 30) {
        const currentInstance = 't3.medium'; // Mock current instance
        const recommendedInstance = 't3.micro';
        const currentCost = resource.cost.monthly;
        const recommendedCost = currentCost * 0.5;
        const monthlySavings = currentCost - recommendedCost;

        recommendations.push({
          resourceId: resource.id,
          resourceName: resource.name,
          currentInstance,
          recommendedInstance,
          currentCost,
          recommendedCost,
          monthlySavings,
          confidence: 0.85,
          reasoning: [
            'Low CPU utilization (below 30%)',
            'Memory usage is minimal',
            'Current instance type is oversized for workload'
          ],
          implementation: 'Change instance type from t3.medium to t3.micro'
        });
      }
    });

    return recommendations;
  }

  async getSavingsSummary(): Promise<{
    totalPotentialSavings: number;
    savingsByType: Record<string, number>;
    topOptimizations: CostOptimization[];
  }> {
    const optimizations = Array.from(this.optimizations.values());
    const totalPotentialSavings = optimizations.reduce((sum, opt) => sum + opt.potentialSavings, 0);
    
    const savingsByType: Record<string, number> = {};
    optimizations.forEach(opt => {
      savingsByType[opt.type] = (savingsByType[opt.type] || 0) + opt.potentialSavings;
    });

    const topOptimizations = optimizations
      .sort((a, b) => b.potentialSavings - a.potentialSavings)
      .slice(0, 5);

    return {
      totalPotentialSavings,
      savingsByType,
      topOptimizations
    };
  }
}

export const cloudCostOptimizerService = new CloudCostOptimizerService();