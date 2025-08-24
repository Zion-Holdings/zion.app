export interface DataSource {
  id: string;
  name: string;
  type: 'database' | 'api' | 'file' | 'stream';
  connectionString?: string;
  credentials?: {
    username?: string;
    password?: string;
    apiKey?: string;
  };
  status: 'connected' | 'disconnected' | 'error';
  lastSync: Date;
  tables?: string[];
  schemas?: Record<string, any>;
}

export interface Dashboard {
  id: string;
  name: string;
  description: string;
  layout: DashboardLayout;
  widgets: Widget[];
  filters: Filter[];
  refreshInterval: number;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface DashboardLayout {
  columns: number;
  rows: number;
  grid: GridItem[];
}

export interface GridItem {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  widgetId: string;
}

export interface Widget {
  id: string;
  name: string;
  type: 'chart' | 'metric' | 'table' | 'text' | 'filter';
  dataSource: string;
  query: string;
  config: WidgetConfig;
  position: { x: number; y: number; width: number; height: number };
}

export interface WidgetConfig {
  chartType?: 'line' | 'bar' | 'pie' | 'scatter' | 'area' | 'table';
  colors?: string[];
  showLegend?: boolean;
  showGrid?: boolean;
  format?: 'number' | 'currency' | 'percentage' | 'date';
  decimalPlaces?: number;
  threshold?: {
    warning: number;
    critical: number;
  };
}

export interface Filter {
  id: string;
  name: string;
  type: 'date' | 'dropdown' | 'text' | 'number' | 'boolean';
  dataSource: string;
  field: string;
  defaultValue?: any;
  options?: any[];
  validation?: {
    min?: number;
    max?: number;
    required?: boolean;
    pattern?: string;
  };
}

export interface Report {
  id: string;
  name: string;
  description: string;
  type: 'scheduled' | 'on-demand' | 'real-time';
  schedule?: {
    frequency: 'daily' | 'weekly' | 'monthly' | 'quarterly';
    time: string;
    timezone: string;
    recipients: string[];
  };
  template: string;
  dataSource: string;
  parameters: ReportParameter[];
  lastGenerated?: Date;
  status: 'active' | 'paused' | 'error';
}

export interface ReportParameter {
  name: string;
  type: 'string' | 'number' | 'date' | 'boolean';
  required: boolean;
  defaultValue?: any;
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
  };
}

export interface KPI {
  id: string;
  name: string;
  description: string;
  category: 'financial' | 'operational' | 'customer' | 'employee';
  formula: string;
  target: number;
  current: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  status: 'on-track' | 'at-risk' | 'off-track';
  lastUpdated: Date;
}

export interface DataQuery {
  id: string;
  name: string;
  description: string;
  sql: string;
  parameters: QueryParameter[];
  resultSchema: Record<string, any>;
  executionTime: number;
  lastExecuted: Date;
  cacheExpiry: Date;
}

export interface QueryParameter {
  name: string;
  type: 'string' | 'number' | 'date' | 'boolean';
  value: any;
  required: boolean;
}

class BusinessIntelligenceService {
  private dataSources: Map<string, DataSource> = new Map();
  private dashboards: Map<string, Dashboard> = new Map();
  private reports: Map<string, Report> = new Map();
  private kpis: Map<string, KPI> = new Map();
  private queries: Map<string, DataQuery> = new Map();
  private mockData: any = {};

  constructor() {
    this.initializeMockData();
    this.initializeDataSources();
    this.initializeDashboards();
    this.initializeKPIs();
  }

  private initializeMockData() {
    this.mockData = {
      sales: this.generateSalesData(),
      customers: this.generateCustomerData(),
      products: this.generateProductData(),
      employees: this.generateEmployeeData()
    };
  }

  private generateSalesData() {
    const data = [];
    const now = new Date();
    
    for (let i = 365; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
      data.push({
        date: date.toISOString().split('T')[0],
        revenue: Math.floor(Math.random() * 50000) + 10000,
        orders: Math.floor(Math.random() * 100) + 20,
        customers: Math.floor(Math.random() * 50) + 10,
        averageOrderValue: Math.floor(Math.random() * 200) + 50
      });
    }
    
    return data;
  }

  private generateCustomerData() {
    const segments = ['Enterprise', 'Mid-Market', 'SMB', 'Startup'];
    const data = [];
    
    for (let i = 0; i < 100; i++) {
      data.push({
        id: `cust_${i + 1}`,
        name: `Customer ${i + 1}`,
        segment: segments[Math.floor(Math.random() * segments.length)],
        revenue: Math.floor(Math.random() * 100000) + 1000,
        orders: Math.floor(Math.random() * 50) + 1,
        lastOrder: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000),
        status: Math.random() > 0.1 ? 'active' : 'inactive'
      });
    }
    
    return data;
  }

  private generateProductData() {
    const categories = ['Software', 'Hardware', 'Services', 'Consulting'];
    const data = [];
    
    for (let i = 0; i < 50; i++) {
      data.push({
        id: `prod_${i + 1}`,
        name: `Product ${i + 1}`,
        category: categories[Math.floor(Math.random() * categories.length)],
        price: Math.floor(Math.random() * 1000) + 100,
        cost: Math.floor(Math.random() * 500) + 50,
        inventory: Math.floor(Math.random() * 1000) + 100,
        sales: Math.floor(Math.random() * 500) + 50
      });
    }
    
    return data;
  }

  private generateEmployeeData() {
    const departments = ['Sales', 'Marketing', 'Engineering', 'Support', 'Operations'];
    const data = [];
    
    for (let i = 0; i < 200; i++) {
      data.push({
        id: `emp_${i + 1}`,
        name: `Employee ${i + 1}`,
        department: departments[Math.floor(Math.random() * departments.length)],
        salary: Math.floor(Math.random() * 50000) + 30000,
        performance: Math.floor(Math.random() * 20) + 80,
        hireDate: new Date(Date.now() - Math.random() * 5 * 365 * 24 * 60 * 60 * 1000)
      });
    }
    
    return data;
  }

  private initializeDataSources() {
    const sources: DataSource[] = [
      {
        id: 'sales_db',
        name: 'Sales Database',
        type: 'database',
        connectionString: 'postgresql://sales:password@localhost:5432/sales',
        status: 'connected',
        lastSync: new Date(),
        tables: ['sales', 'customers', 'products', 'orders']
      },
      {
        id: 'marketing_api',
        name: 'Marketing API',
        type: 'api',
        credentials: { apiKey: 'mk_api_key_123' },
        status: 'connected',
        lastSync: new Date(),
        schemas: { campaigns: {}, leads: {}, conversions: {} }
      },
      {
        id: 'customer_feedback',
        name: 'Customer Feedback',
        type: 'file',
        status: 'connected',
        lastSync: new Date()
      }
    ];

    sources.forEach(source => {
      this.dataSources.set(source.id, source);
    });
  }

  private initializeDashboards() {
    const salesDashboard: Dashboard = {
      id: 'sales_overview',
      name: 'Sales Overview',
      description: 'Comprehensive view of sales performance and trends',
      layout: {
        columns: 12,
        rows: 8,
        grid: [
          { id: 'grid_1', x: 0, y: 0, width: 6, height: 4, widgetId: 'revenue_chart' },
          { id: 'grid_2', x: 6, y: 0, width: 6, height: 4, widgetId: 'orders_metric' },
          { id: 'grid_3', x: 0, y: 4, width: 12, height: 4, widgetId: 'sales_table' }
        ]
      },
      widgets: [
        {
          id: 'revenue_chart',
          name: 'Revenue Trend',
          type: 'chart',
          dataSource: 'sales_db',
          query: 'SELECT date, revenue FROM sales ORDER BY date',
          config: {
            chartType: 'line',
            colors: ['#3B82F6'],
            showLegend: true,
            showGrid: true
          },
          position: { x: 0, y: 0, width: 6, height: 4 }
        },
        {
          id: 'orders_metric',
          name: 'Total Orders',
          type: 'metric',
          dataSource: 'sales_db',
          query: 'SELECT COUNT(*) as total FROM orders',
          config: {
            format: 'number',
            threshold: { warning: 1000, critical: 500 }
          },
          position: { x: 6, y: 0, width: 6, height: 4 }
        },
        {
          id: 'sales_table',
          name: 'Recent Sales',
          type: 'table',
          dataSource: 'sales_db',
          query: 'SELECT * FROM sales ORDER BY date DESC LIMIT 20',
          config: {},
          position: { x: 0, y: 4, width: 12, height: 4 }
        }
      ],
      filters: [
        {
          id: 'date_filter',
          name: 'Date Range',
          type: 'date',
          dataSource: 'sales_db',
          field: 'date',
          defaultValue: { start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), end: new Date() }
        }
      ],
      refreshInterval: 300,
      isPublic: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.dashboards.set(salesDashboard.id, salesDashboard);
  }

  private initializeKPIs() {
    const kpiData: KPI[] = [
      {
        id: 'monthly_revenue',
        name: 'Monthly Revenue',
        description: 'Total revenue generated in the current month',
        category: 'financial',
        formula: 'SUM(revenue) WHERE date >= start_of_month',
        target: 500000,
        current: 485000,
        unit: 'USD',
        trend: 'up',
        status: 'on-track',
        lastUpdated: new Date()
      },
      {
        id: 'customer_satisfaction',
        name: 'Customer Satisfaction',
        description: 'Average customer satisfaction score',
        category: 'customer',
        formula: 'AVG(satisfaction_score)',
        target: 4.5,
        current: 4.3,
        unit: 'score',
        trend: 'stable',
        status: 'at-risk',
        lastUpdated: new Date()
      },
      {
        id: 'employee_productivity',
        name: 'Employee Productivity',
        description: 'Average employee productivity score',
        category: 'employee',
        formula: 'AVG(productivity_score)',
        target: 85,
        current: 87,
        unit: 'percentage',
        trend: 'up',
        status: 'on-track',
        lastUpdated: new Date()
      }
    ];

    kpiData.forEach(kpi => {
      this.kpis.set(kpi.id, kpi);
    });
  }

  async getDataSources(): Promise<DataSource[]> {
    return Array.from(this.dataSources.values());
  }

  async getDashboards(): Promise<Dashboard[]> {
    return Array.from(this.dashboards.values());
  }

  async getDashboard(id: string): Promise<Dashboard | null> {
    return this.dashboards.get(id) || null;
  }

  async createDashboard(dashboard: Omit<Dashboard, 'id' | 'createdAt' | 'updatedAt'>): Promise<Dashboard> {
    const newDashboard: Dashboard = {
      ...dashboard,
      id: `dashboard_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.dashboards.set(newDashboard.id, newDashboard);
    return newDashboard;
  }

  async updateDashboard(id: string, updates: Partial<Dashboard>): Promise<Dashboard | null> {
    const dashboard = this.dashboards.get(id);
    if (!dashboard) return null;

    const updatedDashboard: Dashboard = {
      ...dashboard,
      ...updates,
      updatedAt: new Date()
    };

    this.dashboards.set(id, updatedDashboard);
    return updatedDashboard;
  }

  async deleteDashboard(id: string): Promise<boolean> {
    return this.dashboards.delete(id);
  }

  async executeQuery(query: string, parameters: QueryParameter[] = []): Promise<any[]> {
    // Simulate query execution with mock data
    if (query.toLowerCase().includes('sales')) {
      return this.mockData.sales;
    } else if (query.toLowerCase().includes('customer')) {
      return this.mockData.customers;
    } else if (query.toLowerCase().includes('product')) {
      return this.mockData.products;
    } else if (query.toLowerCase().includes('employee')) {
      return this.mockData.employees;
    }
    
    return [];
  }

  async getKPIs(): Promise<KPI[]> {
    return Array.from(this.kpis.values());
  }

  async updateKPI(id: string, current: number): Promise<KPI | null> {
    const kpi = this.kpis.get(id);
    if (!kpi) return null;

    const trend = current > kpi.current ? 'up' : current < kpi.current ? 'down' : 'stable';
    const status = current >= kpi.target * 0.9 ? 'on-track' : current >= kpi.target * 0.7 ? 'at-risk' : 'off-track';

    const updatedKPI: KPI = {
      ...kpi,
      current,
      trend,
      status,
      lastUpdated: new Date()
    };

    this.kpis.set(id, updatedKPI);
    return updatedKPI;
  }

  async createReport(report: Omit<Report, 'id' | 'lastGenerated'>): Promise<Report> {
    const newReport: Report = {
      ...report,
      id: `report_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      lastGenerated: undefined
    };

    this.reports.set(newReport.id, newReport);
    return newReport;
  }

  async getReports(): Promise<Report[]> {
    return Array.from(this.reports.values());
  }

  async generateReport(id: string, parameters: Record<string, any> = {}): Promise<string> {
    const report = this.reports.get(id);
    if (!report) throw new Error('Report not found');

    // Simulate report generation
    const reportData = await this.executeQuery(report.template, []);
    const reportContent = this.formatReport(report, reportData, parameters);
    
    // Update last generated timestamp
    report.lastGenerated = new Date();
    
    return reportContent;
  }

  private formatReport(report: Report, data: any[], parameters: Record<string, any>): string {
    let content = `# ${report.name}\n\n`;
    content += `${report.description}\n\n`;
    content += `Generated: ${new Date().toLocaleString()}\n`;
    content += `Parameters: ${JSON.stringify(parameters)}\n\n`;
    
    if (data.length > 0) {
      content += `## Data Summary\n\n`;
      content += `Total Records: ${data.length}\n\n`;
      
      // Add sample data
      content += `### Sample Data\n\n`;
      const sampleData = data.slice(0, 5);
      const headers = Object.keys(sampleData[0] || {});
      
      content += `| ${headers.join(' | ')} |\n`;
      content += `| ${headers.map(() => '---').join(' | ')} |\n`;
      
      sampleData.forEach(row => {
        content += `| ${headers.map(header => row[header] || '').join(' | ')} |\n`;
      });
    }
    
    return content;
  }

  async getDataInsights(dataSource: string, dimensions: string[], metrics: string[]): Promise<any> {
    // Simulate data insights generation
    const insights = {
      summary: {
        totalRecords: this.mockData[dataSource]?.length || 0,
        dimensions: dimensions,
        metrics: metrics
      },
      trends: this.generateTrends(dataSource),
      patterns: this.generatePatterns(dataSource),
      recommendations: this.generateRecommendations(dataSource)
    };

    return insights;
  }

  private generateTrends(dataSource: string): any[] {
    if (dataSource === 'sales') {
      return [
        { metric: 'Revenue', trend: 'increasing', change: '+15%', period: 'month-over-month' },
        { metric: 'Orders', trend: 'stable', change: '+2%', period: 'month-over-month' },
        { metric: 'Average Order Value', trend: 'increasing', change: '+8%', period: 'month-over-month' }
      ];
    }
    return [];
  }

  private generatePatterns(dataSource: string): any[] {
    if (dataSource === 'sales') {
      return [
        { pattern: 'Seasonal peaks in Q4', confidence: 0.95, impact: 'high' },
        { pattern: 'Weekend sales are 20% higher', confidence: 0.87, impact: 'medium' },
        { pattern: 'Enterprise customers prefer month-end purchases', confidence: 0.78, impact: 'medium' }
      ];
    }
    return [];
  }

  private generateRecommendations(dataSource: string): any[] {
    if (dataSource === 'sales') {
      return [
        { recommendation: 'Focus marketing efforts on Q4 to capitalize on seasonal trends', priority: 'high' },
        { recommendation: 'Implement weekend promotions to boost sales', priority: 'medium' },
        { recommendation: 'Target enterprise customers with month-end incentives', priority: 'medium' }
      ];
    }
    return [];
  }
}

export const businessIntelligenceService = new BusinessIntelligenceService();