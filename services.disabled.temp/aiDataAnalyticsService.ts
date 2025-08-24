export interface DataSource {
  id: string;
  name: string;
  type: 'database' | 'api' | 'file' | 'stream';
  connectionString: string;
  schema: Record<string, any>;
  lastSync: Date;
  status: 'active' | 'inactive' | 'error';
}

export interface DataQuery {
  id: string;
  name: string;
  sql: string;
  parameters: Record<string, any>;
  schedule: string;
  lastRun: Date;
  nextRun: Date;
  status: 'scheduled' | 'running' | 'completed' | 'failed';
}

export interface DataVisualization {
  id: string;
  name: string;
  type: 'chart' | 'table' | 'dashboard' | 'report';
  config: Record<string, any>;
  data: any[];
  filters: Record<string, any>;
  lastUpdated: Date;
}

export interface PredictiveModel {
  id: string;
  name: string;
  type: 'regression' | 'classification' | 'clustering' | 'time-series';
  algorithm: string;
  accuracy: number;
  trainingData: string;
  lastTrained: Date;
  status: 'training' | 'ready' | 'deployed' | 'archived';
}

export interface AnalyticsInsight {
  id: string;
  title: string;
  description: string;
  category: 'trend' | 'anomaly' | 'opportunity' | 'risk';
  confidence: number;
  impact: 'low' | 'medium' | 'high';
  dataPoints: any[];
  recommendations: string[];
  timestamp: Date;
}

export interface DataAnalyticsRequest {
  dataSourceId: string;
  query: string;
  parameters?: Record<string, any>;
  visualizationType?: string;
  includeInsights?: boolean;
  includePredictions?: boolean;
}

export interface DataAnalyticsResponse {
  data: any[];
  insights: AnalyticsInsight[];
  predictions: any[];
  visualizations: DataVisualization[];
  summary: string;
  metadata: Record<string, any>;
}

export class AIDataAnalyticsService {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string = 'https://api.ziontechgroup.com') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async analyzeData(request: DataAnalyticsRequest): Promise<DataAnalyticsResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/data-analytics/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        throw new Error(`Data analysis failed: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Data analysis error:', error);
      throw error;
    }
  }

  async createDataSource(source: Omit<DataSource, 'id' | 'lastSync' | 'status'>): Promise<DataSource> {
    try {
      const response = await fetch(`${this.baseUrl}/api/data-analytics/sources`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(source),
      });

      if (!response.ok) {
        throw new Error(`Failed to create data source: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating data source:', error);
      throw error;
    }
  }

  async getDataSources(): Promise<DataSource[]> {
    try {
      const response = await fetch(`${this.baseUrl}/api/data-analytics/sources`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch data sources: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching data sources:', error);
      throw error;
    }
  }

  async createQuery(query: Omit<DataQuery, 'id' | 'lastRun' | 'nextRun' | 'status'>): Promise<DataQuery> {
    try {
      const response = await fetch(`${this.baseUrl}/api/data-analytics/queries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify(query),
      });

      if (!response.ok) {
        throw new Error(`Failed to create query: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating query:', error);
      throw error;
    }
  }

  async executeQuery(queryId: string, parameters?: Record<string, any>): Promise<any[]> {
    try {
      const response = await fetch(`${this.baseUrl}/api/data-analytics/queries/${queryId}/execute`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({ parameters }),
      });

      if (!response.ok) {
        throw new Error(`Query execution failed: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Query execution error:', error);
      throw error;
    }
  }

  async createVisualization(visualization: Omit<DataVisualization, 'id' | 'lastUpdated'>): Promise<DataVisualization> {
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
        throw new Error(`Failed to create visualization: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating visualization:', error);
      throw error;
    }
  }

  async trainPredictiveModel(model: Omit<PredictiveModel, 'id' | 'accuracy' | 'lastTrained' | 'status'>): Promise<PredictiveModel> {
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
        throw new Error(`Failed to train model: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error training model:', error);
      throw error;
    }
    }

  async getPredictions(modelId: string, inputData: any[]): Promise<any[]> {
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
        throw new Error(`Prediction failed: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Prediction error:', error);
      throw error;
    }
  }

  async generateInsights(data: any[], context?: string): Promise<AnalyticsInsight[]> {
    try {
      const response = await fetch(`${this.baseUrl}/api/data-analytics/insights`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({ data, context }),
      });

      if (!response.ok) {
        throw new Error(`Failed to generate insights: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error generating insights:', error);
      throw error;
    }
  }

  async createDashboard(name: string, visualizations: string[]): Promise<DataVisualization> {
    try {
      const response = await fetch(`${this.baseUrl}/api/data-analytics/dashboards`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({ name, visualizations }),
      });

      if (!response.ok) {
        throw new Error(`Failed to create dashboard: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating dashboard:', error);
      throw error;
    }
  }

  async exportData(queryId: string, format: 'csv' | 'json' | 'excel'): Promise<string> {
    try {
      const response = await fetch(`${this.baseUrl}/api/data-analytics/queries/${queryId}/export?format=${format}`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Export failed: ${response.statusText}`);
      }

      return await response.text();
    } catch (error) {
      console.error('Export error:', error);
      throw error;
    }
  }
}

export const aiDataAnalyticsService = new AIDataAnalyticsService(process.env.DATA_ANALYTICS_API_KEY || '');