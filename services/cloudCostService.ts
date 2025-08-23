export interface CloudResource {
  id: string;
  name: string;
  type: 'ec2' | 'rds' | 's3' | 'lambda' | 'ecs' | 'eks' | 'vpc' | 'other';
  provider: 'aws' | 'azure' | 'gcp' | 'digitalocean';
  region: string;
  cost: number;
  usage: number;
  utilization: number;
  tags: Record<string, string>;
  lastActivity: Date;
  recommendations: string[];
}

export interface CostAnalysis {
  totalCost: number;
  costByService: Record<string, number>;
  costByRegion: Record<string, number>;
  costByTag: Record<string, number>;
  costTrend: {
    date: string;
    cost: number;
  }[];
  savingsOpportunities: {
    type: 'resize' | 'shutdown' | 'reserved' | 'spot' | 'optimization';
    description: string;
    potentialSavings: number;
    effort: 'low' | 'medium' | 'high';
    resources: string[];
  }[];
}

export interface BudgetAlert {
  id: string;
  type: 'threshold' | 'anomaly' | 'forecast';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  currentSpend: number;
  threshold: number;
  triggeredAt: Date;
  status: 'active' | 'acknowledged' | 'resolved';
}

export interface OptimizationRecommendation {
  id: string;
  resourceId: string;
  resourceName: string;
  currentCost: number;
  projectedCost: number;
  savings: number;
  action: string;
  impact: 'low' | 'medium' | 'high';
  effort: 'low' | 'medium' | 'high';
  category: 'compute' | 'storage' | 'network' | 'database';
}

class CloudCostService {
  private mockResources: CloudResource[] = [
    {
      id: 'i-1234567890abcdef0',
      name: 'web-server-prod',
      type: 'ec2',
      provider: 'aws',
      region: 'us-east-1',
      cost: 156.78,
      usage: 85,
      utilization: 45,
      tags: { Environment: 'production', Service: 'web' },
      lastActivity: new Date('2025-01-17'),
      recommendations: ['Consider reserved instance for 1-year term', 'Right-size to t3.medium based on usage']
    },
    {
      id: 'vol-0987654321fedcba0',
      name: 'web-server-prod-ebs',
      type: 'other',
      provider: 'aws',
      region: 'us-east-1',
      cost: 23.45,
      usage: 100,
      utilization: 60,
      tags: { Environment: 'production', Service: 'web' },
      lastActivity: new Date('2025-01-17'),
      recommendations: ['Consider GP3 instead of GP2 for better performance/cost ratio']
    },
    {
      id: 'db-1234567890abcdef0',
      name: 'main-database',
      type: 'rds',
      provider: 'aws',
      region: 'us-east-1',
      cost: 89.12,
      usage: 95,
      utilization: 80,
      tags: { Environment: 'production', Service: 'database' },
      lastActivity: new Date('2025-01-17'),
      recommendations: ['Consider reserved instance for 3-year term', 'Enable storage autoscaling']
    }
  ];

  async getResources(provider?: string, region?: string): Promise<CloudResource[]> {
    try {
      let filtered = this.mockResources;
      
      if (provider) {
        filtered = filtered.filter(r => r.provider === provider);
      }
      
      if (region) {
        filtered = filtered.filter(r => r.region === region);
      }
      
      return filtered;
    } catch (error) {
      console.error('Failed to fetch resources:', error);
      throw new Error('Failed to fetch cloud resources');
    }
  }

  async analyzeCosts(startDate: Date, endDate: Date): Promise<CostAnalysis> {
    try {
      const totalCost = this.mockResources.reduce((sum, r) => sum + r.cost, 0);
      
      const costByService = this.mockResources.reduce((acc, r) => {
        acc[r.type] = (acc[r.type] || 0) + r.cost;
        return acc;
      }, {} as Record<string, number>);
      
      const costByRegion = this.mockResources.reduce((acc, r) => {
        acc[r.region] = (acc[r.region] || 0) + r.cost;
        return acc;
      }, {} as Record<string, number>);
      
      const costByTag = this.mockResources.reduce((acc, r) => {
        Object.entries(r.tags).forEach(([key, value]) => {
          const tagKey = `${key}:${value}`;
          acc[tagKey] = (acc[tagKey] || 0) + r.cost;
        });
        return acc;
      }, {} as Record<string, number>);
      
      // Generate mock cost trend data
      const costTrend = [];
      const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      
      for (let i = 0; i < days; i++) {
        const date = new Date(startDate);
        date.setDate(date.getDate() + i);
        costTrend.push({
          date: date.toISOString().split('T')[0],
          cost: totalCost + (Math.random() - 0.5) * 20
        });
      }
      
      const savingsOpportunities = [
        {
          type: 'resize' as const,
          description: 'Right-size underutilized EC2 instances',
          potentialSavings: 45.67,
          effort: 'low' as const,
          resources: ['i-1234567890abcdef0']
        },
        {
          type: 'reserved' as const,
          description: 'Convert on-demand instances to reserved instances',
          potentialSavings: 78.90,
          effort: 'medium' as const,
          resources: ['i-1234567890abcdef0', 'db-1234567890abcdef0']
        },
        {
          type: 'optimization' as const,
          description: 'Optimize EBS volume types and sizes',
          potentialSavings: 12.34,
          effort: 'low' as const,
          resources: ['vol-0987654321fedcba0']
        }
      ];
      
      return {
        totalCost,
        costByService,
        costByRegion,
        costByTag,
        costTrend,
        savingsOpportunities
      };
    } catch (error) {
      console.error('Cost analysis failed:', error);
      throw new Error('Failed to analyze costs');
    }
  }

  async getOptimizationRecommendations(): Promise<OptimizationRecommendation[]> {
    try {
      const recommendations: OptimizationRecommendation[] = [];
      
      this.mockResources.forEach(resource => {
        if (resource.type === 'ec2' && resource.utilization < 50) {
          recommendations.push({
            id: `rec-${resource.id}`,
            resourceId: resource.id,
            resourceName: resource.name,
            currentCost: resource.cost,
            projectedCost: resource.cost * 0.6,
            savings: resource.cost * 0.4,
            action: 'Right-size instance based on current utilization',
            impact: 'medium',
            effort: 'low',
            category: 'compute'
          });
        }
        
        if (resource.type === 'rds' && resource.cost > 50) {
          recommendations.push({
            id: `rec-${resource.id}`,
            resourceId: resource.id,
            resourceName: resource.name,
            currentCost: resource.cost,
            projectedCost: resource.cost * 0.7,
            savings: resource.cost * 0.3,
            action: 'Convert to reserved instance for 1-year term',
            impact: 'high',
            effort: 'medium',
            category: 'database'
          });
        }
      });
      
      return recommendations;
    } catch (error) {
      console.error('Failed to get optimization recommendations:', error);
      throw new Error('Failed to get optimization recommendations');
    }
  }

  async setBudgetAlerts(budget: number, threshold: number): Promise<void> {
    try {
      // In a real implementation, this would set up CloudWatch alarms or similar
      console.log(`Budget alert set for $${budget} with ${threshold}% threshold`);
    } catch (error) {
      console.error('Failed to set budget alerts:', error);
      throw new Error('Failed to set budget alerts');
    }
  }

  async getBudgetAlerts(): Promise<BudgetAlert[]> {
    try {
      const totalCost = this.mockResources.reduce((sum, r) => sum + r.cost, 0);
      const budget = 300; // Mock budget
      
      const alerts: BudgetAlert[] = [];
      
      if (totalCost > budget * 0.8) {
        alerts.push({
          id: 'alert-1',
          type: 'threshold',
          severity: totalCost > budget * 0.9 ? 'high' : 'medium',
          message: `Spending is at ${Math.round((totalCost / budget) * 100)}% of monthly budget`,
          currentSpend: totalCost,
          threshold: budget * 0.8,
          triggeredAt: new Date(),
          status: 'active'
        });
      }
      
      // Check for cost anomalies
      const avgCost = totalCost / this.mockResources.length;
      this.mockResources.forEach(resource => {
        if (resource.cost > avgCost * 2) {
          alerts.push({
            id: `alert-${resource.id}`,
            type: 'anomaly',
            severity: 'medium',
            message: `Unusual spending detected on ${resource.name}`,
            currentSpend: resource.cost,
            threshold: avgCost * 2,
            triggeredAt: new Date(),
            status: 'active'
          });
        }
      });
      
      return alerts;
    } catch (error) {
      console.error('Failed to get budget alerts:', error);
      throw new Error('Failed to get budget alerts');
    }
  }

  async forecastCosts(months: number = 3): Promise<{ month: string; cost: number }[]> {
    try {
      const currentCost = this.mockResources.reduce((sum, r) => sum + r.cost, 0);
      const forecast = [];
      
      for (let i = 1; i <= months; i++) {
        const date = new Date();
        date.setMonth(date.getMonth() + i);
        const month = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
        
        // Simple linear growth with some randomness
        const growthRate = 1 + (i * 0.05) + (Math.random() - 0.5) * 0.1;
        const cost = currentCost * growthRate;
        
        forecast.push({ month, cost: Math.round(cost * 100) / 100 });
      }
      
      return forecast;
    } catch (error) {
      console.error('Cost forecasting failed:', error);
      throw new Error('Failed to forecast costs');
    }
  }

  async applyOptimization(recommendationId: string): Promise<boolean> {
    try {
      const recommendation = await this.getOptimizationRecommendations()
        .then(recs => recs.find(r => r.id === recommendationId));
      
      if (!recommendation) {
        throw new Error('Recommendation not found');
      }
      
      // In a real implementation, this would apply the optimization
      // For now, we'll just log the action
      console.log(`Applying optimization: ${recommendation.action}`);
      
      return true;
    } catch (error) {
      console.error('Failed to apply optimization:', error);
      throw new Error('Failed to apply optimization');
    }
  }

  async getResourceUtilization(resourceId: string): Promise<{
    cpu: number;
    memory: number;
    network: number;
    storage: number;
  }> {
    try {
      const resource = this.mockResources.find(r => r.id === resourceId);
      if (!resource) {
        throw new Error('Resource not found');
      }
      
      // Mock utilization data
      return {
        cpu: Math.random() * 100,
        memory: Math.random() * 100,
        network: Math.random() * 100,
        storage: Math.random() * 100
      };
    } catch (error) {
      console.error('Failed to get resource utilization:', error);
      throw new Error('Failed to get resource utilization');
    }
  }
}

export const cloudCostService = new CloudCostService();