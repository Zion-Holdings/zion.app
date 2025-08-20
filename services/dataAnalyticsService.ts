export interface DataSource {
  id: string;
  name: string;
  type: 'database' | 'api' | 'file' | 'stream' | 'webhook';
  connectionString?: string;
  credentials?: {
    apiKey?: string;
    username?: string;
    password?: string;
    endpoint?: string;
  };
  status: 'connected' | 'disconnected' | 'error';
  lastSyncAt?: Date;
  syncFrequency: number; // in minutes
  createdAt: Date;
  updatedAt: Date;
}

export interface Dataset {
  id: string;
  name: string;
  description: string;
  sourceId: string;
  schema: {
    fields: {
      name: string;
      type: 'string' | 'number' | 'boolean' | 'date' | 'object' | 'array';
      required: boolean;
      description?: string;
    }[];
  };
  rowCount: number;
  lastUpdated: Date;
  isActive: boolean;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface DataTransformation {
  id: string;
  name: string;
  description: string;
  datasetId: string;
  type: 'filter' | 'aggregate' | 'join' | 'calculate' | 'clean' | 'custom';
  config: {
    operation: string;
    parameters: Record<string, any>;
    outputSchema?: any;
  };
  isActive: boolean;
  executionOrder: number;
  lastExecutedAt?: Date;
  executionTime: number; // in milliseconds
  createdAt: Date;
  updatedAt: Date;
}

export interface DataVisualization {
  id: string;
  name: string;
  description: string;
  type: 'chart' | 'table' | 'dashboard' | 'report';
  config: {
    chartType?: 'line' | 'bar' | 'pie' | 'scatter' | 'area' | 'heatmap';
    dataSource: string;
    dimensions: string[];
    measures: string[];
    filters?: Record<string, any>;
    styling?: Record<string, any>;
  };
  isPublic: boolean;
  viewCount: number;
  lastViewedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface DataAlert {
  id: string;
  name: string;
  description: string;
  datasetId: string;
  condition: {
    field: string;
    operator: 'equals' | 'not_equals' | 'greater_than' | 'less_than' | 'contains' | 'not_contains';
    value: any;
    threshold?: number;
  };
  isActive: boolean;
  notificationChannels: ('email' | 'slack' | 'webhook')[];
  lastTriggeredAt?: Date;
  triggerCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface DataAnalytics {
  totalDatasets: number;
  activeDatasets: number;
  totalTransformations: number;
  activeTransformations: number;
  totalVisualizations: number;
  publicVisualizations: number;
  totalAlerts: number;
  activeAlerts: number;
  dataProcessingVolume: number; // in MB
  averageProcessingTime: number; // in milliseconds
  topDatasets: {
    datasetId: string;
    datasetName: string;
    rowCount: number;
    lastUpdated: Date;
  }[];
  processingTrends: {
    date: string;
    datasetsProcessed: number;
    dataVolume: number;
    averageTime: number;
  }[];
}

export interface DataAnalyticsServiceConfig {
  maxDataSources: number;
  maxDatasets: number;
  maxTransformations: number;
  maxVisualizations: number;
  maxAlerts: number;
  dataRetentionDays: number;
  realTimeProcessing: boolean;
  machineLearningEnabled: boolean;
}

class DataAnalyticsService {
  private config: DataAnalyticsServiceConfig;
  private dataSources: DataSource[] = [];
  private datasets: Dataset[] = [];
  private transformations: DataTransformation[] = [];
  private visualizations: DataVisualization[] = [];
  private alerts: DataAlert[] = [];

  constructor(config: DataAnalyticsServiceConfig) {
    this.config = config;
    this.initializeMockData();
  }

  private initializeMockData(): void {
    // Initialize mock data sources
    this.dataSources = [
      {
        id: '1',
        name: 'Customer Database',
        type: 'database',
        connectionString: 'postgresql://user:pass@localhost:5432/customers',
        status: 'connected',
        lastSyncAt: new Date('2025-01-15T10:00:00Z'),
        syncFrequency: 60,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date()
      },
      {
        id: '2',
        name: 'Sales API',
        type: 'api',
        credentials: {
          apiKey: 'sk_1234567890abcdef',
          endpoint: 'https://api.salesplatform.com/v1'
        },
        status: 'connected',
        lastSyncAt: new Date('2025-01-15T09:30:00Z'),
        syncFrequency: 30,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date()
      },
      {
        id: '3',
        name: 'Website Analytics',
        type: 'api',
        credentials: {
          apiKey: 'ga_9876543210fedcba',
          endpoint: 'https://analytics.google.com/analytics/web/'
        },
        status: 'connected',
        lastSyncAt: new Date('2025-01-15T09:45:00Z'),
        syncFrequency: 15,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date()
      }
    ];

    // Initialize mock datasets
    this.datasets = [
      {
        id: '1',
        name: 'Customer Transactions',
        description: 'Daily customer transaction data from POS system',
        sourceId: '1',
        schema: {
          fields: [
            { name: 'transaction_id', type: 'string', required: true, description: 'Unique transaction identifier' },
            { name: 'customer_id', type: 'string', required: true, description: 'Customer identifier' },
            { name: 'amount', type: 'number', required: true, description: 'Transaction amount' },
            { name: 'date', type: 'date', required: true, description: 'Transaction date' },
            { name: 'category', type: 'string', required: false, description: 'Transaction category' },
            { name: 'store_id', type: 'string', required: true, description: 'Store identifier' }
          ]
        },
        rowCount: 15420,
        lastUpdated: new Date('2025-01-15T10:00:00Z'),
        isActive: true,
        tags: ['transactions', 'customers', 'sales'],
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date()
      },
      {
        id: '2',
        name: 'Website Traffic',
        description: 'Hourly website traffic and engagement metrics',
        sourceId: '3',
        schema: {
          fields: [
            { name: 'timestamp', type: 'date', required: true, description: 'Hourly timestamp' },
            { name: 'page_views', type: 'number', required: true, description: 'Number of page views' },
            { name: 'unique_visitors', type: 'number', required: true, description: 'Unique visitors count' },
            { name: 'bounce_rate', type: 'number', required: true, description: 'Bounce rate percentage' },
            { name: 'avg_session_duration', type: 'number', required: true, description: 'Average session duration in seconds' },
            { name: 'conversion_rate', type: 'number', required: false, description: 'Conversion rate percentage' }
          ]
        },
        rowCount: 8760,
        lastUpdated: new Date('2025-01-15T09:45:00Z'),
        isActive: true,
        tags: ['website', 'traffic', 'analytics'],
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date()
      }
    ];

    // Initialize mock transformations
    this.transformations = [
      {
        id: '1',
        name: 'Daily Sales Aggregation',
        description: 'Aggregate daily sales by customer and category',
        datasetId: '1',
        type: 'aggregate',
        config: {
          operation: 'group_by',
          parameters: {
            groupBy: ['customer_id', 'category', 'date'],
            aggregations: [
              { field: 'amount', operation: 'sum', alias: 'total_amount' },
              { field: 'transaction_id', operation: 'count', alias: 'transaction_count' }
            ]
          }
        },
        isActive: true,
        executionOrder: 1,
        lastExecutedAt: new Date('2025-01-15T10:00:00Z'),
        executionTime: 1250,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date()
      },
      {
        id: '2',
        name: 'Customer Segmentation',
        description: 'Segment customers based on spending patterns',
        datasetId: '1',
        type: 'calculate',
        config: {
          operation: 'customer_segmentation',
          parameters: {
            spendingThresholds: [100, 500, 1000, 5000],
            segments: ['Bronze', 'Silver', 'Gold', 'Platinum']
          }
        },
        isActive: true,
        executionOrder: 2,
        lastExecutedAt: new Date('2025-01-15T10:05:00Z'),
        executionTime: 2100,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date()
      }
    ];

    // Initialize mock visualizations
    this.visualizations = [
      {
        id: '1',
        name: 'Daily Sales Dashboard',
        description: 'Comprehensive view of daily sales performance',
        type: 'dashboard',
        config: {
          dataSource: '1',
          dimensions: ['date', 'category', 'store_id'],
          measures: ['total_amount', 'transaction_count'],
          filters: { date_range: 'last_30_days' }
        },
        isPublic: true,
        viewCount: 156,
        lastViewedAt: new Date('2025-01-15T09:30:00Z'),
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date()
      },
      {
        id: '2',
        name: 'Customer Spending Trends',
        description: 'Line chart showing customer spending over time',
        type: 'chart',
        config: {
          chartType: 'line',
          dataSource: '1',
          dimensions: ['date'],
          measures: ['total_amount'],
          filters: { customer_segment: 'Gold' }
        },
        isPublic: true,
        viewCount: 89,
        lastViewedAt: new Date('2025-01-15T08:45:00Z'),
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date()
      }
    ];

    // Initialize mock alerts
    this.alerts = [
      {
        id: '1',
        name: 'High Bounce Rate Alert',
        description: 'Alert when website bounce rate exceeds threshold',
        datasetId: '2',
        condition: {
          field: 'bounce_rate',
          operator: 'greater_than',
          value: 70,
          threshold: 70
        },
        isActive: true,
        notificationChannels: ['email', 'slack'],
        lastTriggeredAt: new Date('2025-01-14T15:30:00Z'),
        triggerCount: 3,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date()
      },
      {
        id: '2',
        name: 'Low Conversion Rate Alert',
        description: 'Alert when conversion rate drops below threshold',
        datasetId: '2',
        condition: {
          field: 'conversion_rate',
          operator: 'less_than',
          value: 2.5,
          threshold: 2.5
        },
        isActive: true,
        notificationChannels: ['email'],
        lastTriggeredAt: new Date('2025-01-13T12:15:00Z'),
        triggerCount: 1,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date()
      }
    ];
  }

  async connectDataSource(
    name: string,
    type: DataSource['type'],
    connectionString?: string,
    credentials?: DataSource['credentials']
  ): Promise<DataSource> {
    if (this.dataSources.length >= this.config.maxDataSources) {
      throw new Error('Maximum number of data sources reached');
    }

    const dataSource: DataSource = {
      id: this.generateId(),
      name,
      type,
      connectionString,
      credentials,
      status: 'disconnected',
      syncFrequency: 60,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Simulate connection process
    await this.simulateDataSourceConnection(dataSource);

    this.dataSources.push(dataSource);
    return dataSource;
  }

  private async simulateDataSourceConnection(dataSource: DataSource): Promise<void> {
    // Simulate connection delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate connection success/failure
    if (Math.random() > 0.1) { // 90% success rate
      dataSource.status = 'connected';
      dataSource.lastSyncAt = new Date();
    } else {
      dataSource.status = 'error';
    }
  }

  async createDataset(
    name: string,
    description: string,
    sourceId: string,
    schema: Dataset['schema']
  ): Promise<Dataset> {
    const source = this.dataSources.find(s => s.id === sourceId);
    if (!source) {
      throw new Error('Data source not found');
    }

    if (this.datasets.length >= this.config.maxDatasets) {
      throw new Error('Maximum number of datasets reached');
    }

    const dataset: Dataset = {
      id: this.generateId(),
      name,
      description,
      sourceId,
      schema,
      rowCount: 0,
      lastUpdated: new Date(),
      isActive: true,
      tags: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.datasets.push(dataset);
    
    // Simulate initial data sync
    await this.simulateDatasetSync(dataset);
    
    return dataset;
  }

  private async simulateDatasetSync(dataset: Dataset): Promise<void> {
    // Simulate sync delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate realistic row count based on dataset type
    const baseRowCount = Math.floor(Math.random() * 10000) + 1000;
    dataset.rowCount = baseRowCount;
    dataset.lastUpdated = new Date();
    dataset.updatedAt = new Date();
  }

  async createTransformation(
    name: string,
    description: string,
    datasetId: string,
    type: DataTransformation['type'],
    config: DataTransformation['config']
  ): Promise<DataTransformation> {
    const dataset = this.datasets.find(d => d.id === datasetId);
    if (!dataset) {
      throw new Error('Dataset not found');
    }

    if (this.transformations.length >= this.config.maxTransformations) {
      throw new Error('Maximum number of transformations reached');
    }

    const transformation: DataTransformation = {
      id: this.generateId(),
      name,
      description,
      datasetId,
      type,
      config,
      isActive: true,
      executionOrder: this.transformations.length + 1,
      executionTime: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.transformations.push(transformation);
    return transformation;
  }

  async executeTransformation(transformationId: string): Promise<void> {
    const transformation = this.transformations.find(t => t.id === transformationId);
    if (!transformation) {
      throw new Error('Transformation not found');
    }

    if (!transformation.isActive) {
      throw new Error('Transformation is not active');
    }

    const startTime = Date.now();
    transformation.lastExecutedAt = new Date();
    transformation.updatedAt = new Date();

    // Simulate transformation execution
    await this.simulateTransformationExecution(transformation);

    transformation.executionTime = Date.now() - startTime;
    transformation.updatedAt = new Date();
  }

  private async simulateTransformationExecution(transformation: DataTransformation): Promise<void> {
    // Simulate processing delay based on transformation type
    const baseDelay = {
      filter: 500,
      aggregate: 1500,
      join: 2000,
      calculate: 1000,
      clean: 800,
      custom: 3000
    };

    const delay = baseDelay[transformation.type] || 1000;
    await new Promise(resolve => setTimeout(resolve, delay));
  }

  async createVisualization(
    name: string,
    description: string,
    type: DataVisualization['type'],
    config: DataVisualization['config']
  ): Promise<DataVisualization> {
    if (this.visualizations.length >= this.config.maxVisualizations) {
      throw new Error('Maximum number of visualizations reached');
    }

    const visualization: DataVisualization = {
      id: this.generateId(),
      name,
      description,
      type,
      config,
      isPublic: false,
      viewCount: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.visualizations.push(visualization);
    return visualization;
  }

  async viewVisualization(visualizationId: string): Promise<void> {
    const visualization = this.visualizations.find(v => v.id === visualizationId);
    if (!visualization) {
      throw new Error('Visualization not found');
    }

    visualization.viewCount++;
    visualization.lastViewedAt = new Date();
    visualization.updatedAt = new Date();
  }

  async createAlert(
    name: string,
    description: string,
    datasetId: string,
    condition: DataAlert['condition'],
    notificationChannels: DataAlert['notificationChannels']
  ): Promise<DataAlert> {
    const dataset = this.datasets.find(d => d.id === datasetId);
    if (!dataset) {
      throw new Error('Dataset not found');
    }

    if (this.alerts.length >= this.config.maxAlerts) {
      throw new Error('Maximum number of alerts reached');
    }

    const alert: DataAlert = {
      id: this.generateId(),
      name,
      description,
      datasetId,
      condition,
      isActive: true,
      notificationChannels,
      triggerCount: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.alerts.push(alert);
    return alert;
  }

  async checkAlerts(): Promise<DataAlert[]> {
    const triggeredAlerts: DataAlert[] = [];

    for (const alert of this.alerts) {
      if (!alert.isActive) continue;

      const dataset = this.datasets.find(d => d.id === alert.datasetId);
      if (!dataset) continue;

      // Simulate alert condition checking
      const shouldTrigger = this.simulateAlertCondition(alert, dataset);
      
      if (shouldTrigger) {
        alert.lastTriggeredAt = new Date();
        alert.triggerCount++;
        alert.updatedAt = new Date();
        triggeredAlerts.push(alert);
      }
    }

    return triggeredAlerts;
  }

  private simulateAlertCondition(alert: DataAlert, dataset: Dataset): boolean {
    // Simulate alert triggering based on condition
    const triggerProbability = 0.05; // 5% chance of triggering
    return Math.random() < triggerProbability;
  }

  async getAnalytics(startDate?: Date, endDate?: Date): Promise<DataAnalytics> {
    let filteredDatasets = this.datasets;
    let filteredTransformations = this.transformations;
    let filteredVisualizations = this.visualizations;
    let filteredAlerts = this.alerts;
    
    if (startDate) {
      filteredDatasets = filteredDatasets.filter(d => d.createdAt >= startDate);
      filteredTransformations = filteredTransformations.filter(t => t.createdAt >= startDate);
      filteredVisualizations = filteredVisualizations.filter(v => v.createdAt >= startDate);
      filteredAlerts = filteredAlerts.filter(a => a.createdAt >= startDate);
    }
    
    if (endDate) {
      filteredDatasets = filteredDatasets.filter(d => d.createdAt <= endDate);
      filteredTransformations = filteredTransformations.filter(t => t.createdAt <= endDate);
      filteredVisualizations = filteredVisualizations.filter(v => v.createdAt <= endDate);
      filteredAlerts = filteredAlerts.filter(a => a.createdAt <= endDate);
    }

    const totalDatasets = filteredDatasets.length;
    const activeDatasets = filteredDatasets.filter(d => d.isActive).length;
    const totalTransformations = filteredTransformations.length;
    const activeTransformations = filteredTransformations.filter(t => t.isActive).length;
    const totalVisualizations = filteredVisualizations.length;
    const publicVisualizations = filteredVisualizations.filter(v => v.isPublic).length;
    const totalAlerts = filteredAlerts.length;
    const activeAlerts = filteredAlerts.filter(a => a.isActive).length;

    const dataProcessingVolume = filteredDatasets.reduce((sum, d) => sum + d.rowCount * 0.001, 0); // Approximate MB
    const activeTransformationsWithTime = filteredTransformations.filter(t => t.isActive && t.executionTime > 0);
    const averageProcessingTime = activeTransformationsWithTime.length > 0
      ? activeTransformationsWithTime.reduce((sum, t) => sum + t.executionTime, 0) / activeTransformationsWithTime.length
      : 0;

    const topDatasets = [...filteredDatasets]
      .sort((a, b) => b.rowCount - a.rowCount)
      .slice(0, 5)
      .map(d => ({
        datasetId: d.id,
        datasetName: d.name,
        rowCount: d.rowCount,
        lastUpdated: d.lastUpdated
      }));

    const processingTrends = this.generateProcessingTrends(filteredDatasets, filteredTransformations);

    return {
      totalDatasets,
      activeDatasets,
      totalTransformations,
      activeTransformations,
      totalVisualizations,
      publicVisualizations,
      totalAlerts,
      activeAlerts,
      dataProcessingVolume: Math.round(dataProcessingVolume * 100) / 100,
      averageProcessingTime: Math.round(averageProcessingTime),
      topDatasets,
      processingTrends
    };
  }

  private generateProcessingTrends(datasets: Dataset[], transformations: DataTransformation[]): { date: string; datasetsProcessed: number; dataVolume: number; averageTime: number }[] {
    const trends = [];
    const today = new Date();
    
    for (let i = 30; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      
      const dayDatasets = datasets.filter(d => 
        d.lastUpdated.toISOString().split('T')[0] === dateStr
      );
      
      const dayTransformations = transformations.filter(t => 
        t.lastExecutedAt && t.lastExecutedAt.toISOString().split('T')[0] === dateStr
      );
      
      const datasetsProcessed = dayDatasets.length;
      const dataVolume = dayDatasets.reduce((sum, d) => sum + d.rowCount * 0.001, 0);
      const averageTime = dayTransformations.length > 0
        ? dayTransformations.reduce((sum, t) => sum + t.executionTime, 0) / dayTransformations.length
        : 0;
      
      trends.push({ 
        date: dateStr, 
        datasetsProcessed, 
        dataVolume: Math.round(dataVolume * 100) / 100, 
        averageTime: Math.round(averageTime) 
      });
    }
    
    return trends;
  }

  async getDataSources(): Promise<DataSource[]> {
    return [...this.dataSources];
  }

  async getDatasets(sourceId?: string): Promise<Dataset[]> {
    let filteredDatasets = [...this.datasets];
    
    if (sourceId) {
      filteredDatasets = filteredDatasets.filter(d => d.sourceId === sourceId);
    }
    
    return filteredDatasets.sort((a, b) => b.lastUpdated.getTime() - a.lastUpdated.getTime());
  }

  async getTransformations(datasetId?: string): Promise<DataTransformation[]> {
    let filteredTransformations = [...this.transformations];
    
    if (datasetId) {
      filteredTransformations = filteredTransformations.filter(t => t.datasetId === datasetId);
    }
    
    return filteredTransformations.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getVisualizations(type?: string): Promise<DataVisualization[]> {
    let filteredVisualizations = [...this.visualizations];
    
    if (type) {
      filteredVisualizations = filteredVisualizations.filter(v => v.type === type);
    }
    
    return filteredVisualizations.sort((a, b) => b.viewCount - a.viewCount);
  }

  async getAlerts(datasetId?: string): Promise<DataAlert[]> {
    let filteredAlerts = [...this.alerts];
    
    if (datasetId) {
      filteredAlerts = filteredAlerts.filter(a => a.datasetId === datasetId);
    }
    
    return filteredAlerts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async updateDataSourceStatus(sourceId: string, status: DataSource['status']): Promise<void> {
    const source = this.dataSources.find(s => s.id === sourceId);
    if (!source) {
      throw new Error('Data source not found');
    }

    source.status = status;
    source.updatedAt = new Date();
  }

  async toggleTransformation(transformationId: string): Promise<void> {
    const transformation = this.transformations.find(t => t.id === transformationId);
    if (!transformation) {
      throw new Error('Transformation not found');
    }

    transformation.isActive = !transformation.isActive;
    transformation.updatedAt = new Date();
  }

  async toggleAlert(alertId: string): Promise<void> {
    const alert = this.alerts.find(a => a.id === alertId);
    if (!alert) {
      throw new Error('Alert not found');
    }

    alert.isActive = !alert.isActive;
    alert.updatedAt = new Date();
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}

export default DataAnalyticsService;