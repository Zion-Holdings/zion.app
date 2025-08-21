export interface DataSource {
  id: string;
  name: string;
  type: 'database' | 'api' | 'file' | 'stream' | 'webhook';
  connectionString?: string;
  credentials?: {
    apiKey?: string;
    username?: string;
    password?: string;
    token?: string;
  };
  schema?: Record<string, any>;
  refreshInterval?: number; // in minutes
  lastSync?: Date;
  status: 'active' | 'inactive' | 'error';
  errorMessage?: string;
}

export interface DataTransformation {
  id: string;
  name: string;
  description: string;
  sourceDataSourceId: string;
  targetDataSourceId?: string;
  transformations: {
    type: 'filter' | 'map' | 'aggregate' | 'join' | 'sort' | 'custom';
    config: Record<string, any>;
  }[];
  schedule?: string; // cron expression
  lastRun?: Date;
  nextRun?: Date;
  status: 'active' | 'inactive' | 'error';
  errorMessage?: string;
}

export interface DataVisualization {
  id: string;
  name: string;
  type: 'chart' | 'table' | 'dashboard' | 'report';
  dataSourceId: string;
  query?: string;
  config: {
    chartType?: 'line' | 'bar' | 'pie' | 'scatter' | 'area' | 'heatmap';
    dimensions: string[];
    measures: string[];
    filters?: Record<string, any>;
    styling?: Record<string, any>;
  };
  refreshInterval?: number; // in minutes
  lastRefresh?: Date;
  status: 'active' | 'inactive' | 'error';
  errorMessage?: string;
}

export interface PredictiveModel {
  id: string;
  name: string;
  description: string;
  type: 'regression' | 'classification' | 'clustering' | 'time-series' | 'anomaly-detection';
  algorithm: string;
  dataSourceId: string;
  features: string[];
  target: string;
  hyperparameters: Record<string, any>;
  trainingStatus: 'not-started' | 'training' | 'completed' | 'failed';
  accuracy?: number;
  lastTrained?: Date;
  modelVersion: string;
  status: 'active' | 'inactive' | 'archived';
  errorMessage?: string;
}

export interface DataInsight {
  id: string;
  title: string;
  description: string;
  type: 'trend' | 'anomaly' | 'correlation' | 'forecast' | 'recommendation';
  dataSourceId: string;
  confidence: number; // 0-1
  impact: 'low' | 'medium' | 'high' | 'critical';
  actionable: boolean;
  recommendations: string[];
  generatedAt: Date;
  expiresAt?: Date;
  status: 'active' | 'acknowledged' | 'resolved';
}

export interface DataAnalyticsMetrics {
  totalDataSources: number;
  activeDataSources: number;
  totalTransformations: number;
  successfulTransformations: number;
  totalVisualizations: number;
  activeVisualizations: number;
  totalModels: number;
  activeModels: number;
  averageModelAccuracy: number;
  dataQualityScore: number;
  insightsGenerated: number;
  actionableInsights: number;
}

export class AIDataAnalyticsService {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string = 'https://api.ziontechgroup.com') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async createDataSource(dataSource: Omit<DataSource, 'id' | 'lastSync' | 'status'>): Promise<DataSource> {
    try {
      const response = await fetch(`${this.baseUrl}/api/data-analytics/data-sources`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(dataSource),
      });

      if (!response.ok) {
        throw new Error(`Failed to create data source: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        ...data,
        lastSync: data.lastSync ? new Date(data.lastSync) : undefined,
      };
    } catch (error) {
      console.error('Error creating data source:', error);
      throw error;
    }
  }

  async getDataSources(): Promise<DataSource[]> {
    try {
      const response = await fetch(`${this.baseUrl}/api/data-analytics/data-sources`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch data sources: ${response.statusText}`);
      }

      const data = await response.json();
      return data.dataSources.map((ds: any) => ({
        ...ds,
        lastSync: ds.lastSync ? new Date(ds.lastSync) : undefined,
      }));
    } catch (error) {
      console.error('Error fetching data sources:', error);
      throw error;
    }
  }

  async testDataSourceConnection(dataSourceId: string): Promise<{ success: boolean; message: string }> {
    try {
      const response = await fetch(`${this.baseUrl}/api/data-analytics/data-sources/${dataSourceId}/test`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to test data source connection: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error testing data source connection:', error);
      throw error;
    }
  }

  async createDataTransformation(transformation: Omit<DataTransformation, 'id' | 'lastRun' | 'nextRun' | 'status'>): Promise<DataTransformation> {
    try {
      const response = await fetch(`${this.baseUrl}/api/data-analytics/transformations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(transformation),
      });

      if (!response.ok) {
        throw new Error(`Failed to create data transformation: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        ...data,
        lastRun: data.lastRun ? new Date(data.lastRun) : undefined,
        nextRun: data.nextRun ? new Date(data.nextRun) : undefined,
      };
    } catch (error) {
      console.error('Error creating data transformation:', error);
      throw error;
    }
  }

  async runDataTransformation(transformationId: string): Promise<{ success: boolean; message: string; recordsProcessed: number }> {
    try {
      const response = await fetch(`${this.baseUrl}/api/data-analytics/transformations/${transformationId}/run`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to run data transformation: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error running data transformation:', error);
      throw error;
    }
  }

  async createDataVisualization(visualization: Omit<DataVisualization, 'id' | 'lastRefresh' | 'status'>): Promise<DataVisualization> {
    try {
      const response = await fetch(`${this.baseUrl}/api/data-analytics/visualizations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(visualization),
      });

      if (!response.ok) {
        throw new Error(`Failed to create data visualization: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        ...data,
        lastRefresh: data.lastRefresh ? new Date(data.lastRefresh) : undefined,
      };
    } catch (error) {
      console.error('Error creating data visualization:', error);
      throw error;
    }
  }

  async getVisualizationData(visualizationId: string): Promise<{ data: any[]; metadata: Record<string, any> }> {
    try {
      const response = await fetch(`${this.baseUrl}/api/data-analytics/visualizations/${visualizationId}/data`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch visualization data: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching visualization data:', error);
      throw error;
    }
  }

  async createPredictiveModel(model: Omit<PredictiveModel, 'id' | 'trainingStatus' | 'accuracy' | 'lastTrained' | 'modelVersion' | 'status'>): Promise<PredictiveModel> {
    try {
      const response = await fetch(`${this.baseUrl}/api/data-analytics/models`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(model),
      });

      if (!response.ok) {
        throw new Error(`Failed to create predictive model: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        ...data,
        lastTrained: data.lastTrained ? new Date(data.lastTrained) : undefined,
      };
    } catch (error) {
      console.error('Error creating predictive model:', error);
      throw error;
    }
  }

  async trainModel(modelId: string): Promise<{ success: boolean; message: string; trainingJobId: string }> {
    try {
      const response = await fetch(`${this.baseUrl}/api/data-analytics/models/${modelId}/train`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to start model training: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error starting model training:', error);
      throw error;
    }
  }

  async getModelTrainingStatus(trainingJobId: string): Promise<{
    status: string;
    progress: number;
    currentEpoch?: number;
    totalEpochs?: number;
    currentAccuracy?: number;
    estimatedTimeRemaining?: number;
  }> {
    try {
      const response = await fetch(`${this.baseUrl}/api/data-analytics/models/training/${trainingJobId}/status`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch training status: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching training status:', error);
      throw error;
    }
  }

  async makePrediction(modelId: string, inputData: Record<string, any>): Promise<{
    prediction: any;
    confidence: number;
    explanation?: string;
  }> {
    try {
      const response = await fetch(`${this.baseUrl}/api/data-analytics/models/${modelId}/predict`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({ inputData }),
      });

      if (!response.ok) {
        throw new Error(`Failed to make prediction: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error making prediction:', error);
      throw error;
    }
  }

  async generateDataInsights(dataSourceId: string, insightTypes?: string[]): Promise<DataInsight[]> {
    try {
      const response = await fetch(`${this.baseUrl}/api/data-analytics/insights/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({ dataSourceId, insightTypes }),
      });

      if (!response.ok) {
        throw new Error(`Failed to generate data insights: ${response.statusText}`);
      }

      const data = await response.json();
      return data.insights.map((insight: any) => ({
        ...insight,
        generatedAt: new Date(insight.generatedAt),
        expiresAt: insight.expiresAt ? new Date(insight.expiresAt) : undefined,
      }));
    } catch (error) {
      console.error('Error generating data insights:', error);
      throw error;
    }
  }

  async getDataAnalyticsMetrics(): Promise<DataAnalyticsMetrics> {
    try {
      const response = await fetch(`${this.baseUrl}/api/data-analytics/metrics`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch data analytics metrics: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching data analytics metrics:', error);
      throw error;
    }
  }

  async generateAnalyticsReport(timeRange: 'day' | 'week' | 'month' = 'month'): Promise<{
    metrics: DataAnalyticsMetrics;
    insights: DataInsight[];
    recommendations: string[];
  }> {
    try {
      const [metrics, insights] = await Promise.all([
        this.getDataAnalyticsMetrics(),
        this.generateDataInsights('all'),
      ]);

      const recommendations = this.generateRecommendations(metrics, insights);

      return {
        metrics,
        insights,
        recommendations,
      };
    } catch (error) {
      console.error('Error generating analytics report:', error);
      throw error;
    }
  }

  private generateRecommendations(metrics: DataAnalyticsMetrics, insights: DataInsight[]): string[] {
    const recommendations: string[] = [];

    if (metrics.dataQualityScore < 0.8) {
      recommendations.push('Improve data quality by implementing data validation and cleaning processes');
      recommendations.push('Review data source configurations and error handling');
    }

    if (metrics.averageModelAccuracy < 0.85) {
      recommendations.push('Retrain models with updated data and improved hyperparameters');
      recommendations.push('Consider ensemble methods or different algorithms for better accuracy');
    }

    if (insights.filter(i => i.actionable).length < insights.length * 0.3) {
      recommendations.push('Focus on generating more actionable insights by improving data context');
      recommendations.push('Implement automated insight prioritization based on business impact');
    }

    return recommendations;
  }
}

export const aiDataAnalyticsService = new AIDataAnalyticsService(process.env.DATA_ANALYTICS_API_KEY || '');