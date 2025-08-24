export interface DatabaseConnection {
  id: string;
  name: string;
  type: 'postgresql' | 'mysql' | 'mongodb' | 'redis' | 'elasticsearch' | 'dynamodb';
  host: string;
  port: number;
  database: string;
  username: string;
  status: 'connected' | 'disconnected' | 'error';
  lastConnected: Date;
  metrics: ConnectionMetrics;
}

export interface ConnectionMetrics {
  activeConnections: number;
  maxConnections: number;
  connectionPoolSize: number;
  connectionWaitTime: number;
  failedConnections: number;
  connectionErrors: number;
}

export interface QueryPerformance {
  id: string;
  query: string;
  executionTime: number;
  timestamp: Date;
  database: string;
  user: string;
  application: string;
  parameters: Record<string, any>;
  executionPlan?: ExecutionPlan;
  performanceMetrics: QueryMetrics;
  recommendations: QueryRecommendation[];
}

export interface ExecutionPlan {
  id: string;
  planType: 'explain' | 'analyze' | 'estimated';
  nodes: PlanNode[];
  totalCost: number;
  totalTime: number;
  rows: number;
  width: number;
}

export interface PlanNode {
  id: string;
  nodeType: string;
  cost: number;
  estimatedRows: number;
  actualRows: number;
  estimatedWidth: number;
  actualWidth: number;
  actualTime: number;
  description: string;
  children: PlanNode[];
}

export interface QueryMetrics {
  cpuTime: number;
  ioTime: number;
  networkTime: number;
  lockTime: number;
  waitTime: number;
  rowsProcessed: number;
  bytesTransferred: number;
  cacheHits: number;
  cacheMisses: number;
}

export interface QueryRecommendation {
  id: string;
  type: 'index' | 'query_optimization' | 'schema_optimization' | 'configuration';
  title: string;
  description: string;
  impact: 'low' | 'medium' | 'high';
  effort: 'low' | 'medium' | 'high';
  estimatedImprovement: number;
  sql?: string;
  explanation: string;
}

export interface DatabaseMetrics {
  id: string;
  database: string;
  timestamp: Date;
  cpu: {
    usage: number;
    load: number;
    processes: number;
  };
  memory: {
    used: number;
    available: number;
    total: number;
    cache: number;
    buffer: number;
  };
  disk: {
    readBytes: number;
    writeBytes: number;
    readIOPS: number;
    writeIOPS: number;
    latency: number;
    utilization: number;
  };
  network: {
    bytesIn: number;
    bytesOut: number;
    packetsIn: number;
    packetsOut: number;
    errors: number;
  };
  queries: {
    active: number;
    waiting: number;
    slow: number;
    total: number;
    avgResponseTime: number;
  };
}

export interface DatabasePerformanceAlert {
  id: string;
  type: 'performance' | 'connection' | 'error' | 'capacity';
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  database: string;
  timestamp: Date;
  resolved: boolean;
  resolvedAt?: Date;
  metrics: Record<string, any>;
  recommendations: string[];
}

export interface IndexRecommendation {
  id: string;
  table: string;
  columns: string[];
  type: 'btree' | 'hash' | 'gin' | 'gist' | 'brin';
  estimatedImprovement: number;
  currentQueryTime: number;
  projectedQueryTime: number;
  spaceOverhead: number;
  maintenanceOverhead: number;
  sql: string;
  priority: number;
}

class DatabasePerformanceMonitorService {
  private connections: Map<string, DatabaseConnection> = new Map();
  private queryHistory: QueryPerformance[] = [];
  private metricsHistory: DatabaseMetrics[] = [];
  private alerts: DatabasePerformanceAlert[] = [];

  async connectDatabase(
    name: string,
    type: DatabaseConnection['type'],
    host: string,
    port: number,
    database: string,
    username: string,
    password: string
  ): Promise<DatabaseConnection> {
    const connection: DatabaseConnection = {
      id: `conn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      name,
      type,
      host,
      port,
      database,
      username,
      status: 'connected',
      lastConnected: new Date(),
      metrics: {
        activeConnections: Math.floor(Math.random() * 10) + 1,
        maxConnections: 100,
        connectionPoolSize: 20,
        connectionWaitTime: Math.random() * 100,
        failedConnections: 0,
        connectionErrors: 0
      }
    };

    this.connections.set(connection.id, connection);
    return connection;
  }

  async disconnectDatabase(connectionId: string): Promise<void> {
    const connection = this.connections.get(connectionId);
    if (connection) {
      connection.status = 'disconnected';
      connection.metrics.activeConnections = 0;
    }
  }

  async monitorQuery(
    connectionId: string,
    query: string,
    parameters: Record<string, any> = {},
    user: string = 'system',
    application: string = 'unknown'
  ): Promise<QueryPerformance> {
    const connection = this.connections.get(connectionId);
    if (!connection) {
      throw new Error(`Connection ${connectionId} not found`);
    }

    const startTime = Date.now();
    
    // Simulate query execution
    await this.simulateQueryExecution(query, parameters);
    
    const executionTime = Date.now() - startTime;
    
    const queryPerformance: QueryPerformance = {
      id: `query_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      query,
      executionTime,
      timestamp: new Date(),
      database: connection.database,
      user,
      application,
      parameters,
      executionPlan: await this.generateExecutionPlan(query, executionTime),
      performanceMetrics: this.calculateQueryMetrics(executionTime, query),
      recommendations: []
    };

    // Generate recommendations
    queryPerformance.recommendations = this.generateQueryRecommendations(queryPerformance);
    
    // Store query performance
    this.queryHistory.push(queryPerformance);
    
    // Check for performance alerts
    await this.checkPerformanceAlerts(queryPerformance);
    
    return queryPerformance;
  }

  private async simulateQueryExecution(query: string, parameters: Record<string, any>): Promise<void> {
    // Simulate different query execution times based on query complexity
    const baseTime = 10;
    const complexityMultiplier = this.calculateQueryComplexity(query);
    const executionTime = baseTime * complexityMultiplier;
    
    await new Promise(resolve => setTimeout(resolve, executionTime));
  }

  private calculateQueryComplexity(query: string): number {
    let complexity = 1;
    
    // Add complexity for different query types
    if (query.toLowerCase().includes('join')) complexity += 2;
    if (query.toLowerCase().includes('group by')) complexity += 1.5;
    if (query.toLowerCase().includes('order by')) complexity += 1;
    if (query.toLowerCase().includes('subquery')) complexity += 2;
    if (query.toLowerCase().includes('union')) complexity += 1.5;
    
    return Math.max(complexity, 0.5);
  }

  private async generateExecutionPlan(query: string, executionTime: number): Promise<ExecutionPlan> {
    const plan: ExecutionPlan = {
      id: `plan_${Date.now()}`,
      planType: 'analyze',
      nodes: [],
      totalCost: executionTime * 0.1,
      totalTime: executionTime,
      rows: Math.floor(Math.random() * 10000) + 100,
      width: Math.floor(Math.random() * 1000) + 50
    };

    // Generate plan nodes based on query type
    if (query.toLowerCase().includes('select')) {
      plan.nodes.push({
        id: 'seq_scan',
        nodeType: 'Seq Scan',
        cost: executionTime * 0.05,
        estimatedRows: plan.rows,
        actualRows: plan.rows,
        estimatedWidth: plan.width,
        actualWidth: plan.width,
        actualTime: executionTime * 0.8,
        description: 'Sequential scan on table',
        children: []
      });
    }

    if (query.toLowerCase().includes('where')) {
      plan.nodes.push({
        id: 'filter',
        nodeType: 'Filter',
        cost: executionTime * 0.03,
        estimatedRows: Math.floor(plan.rows * 0.3),
        actualRows: Math.floor(plan.rows * 0.3),
        estimatedWidth: plan.width,
        actualWidth: plan.width,
        actualTime: executionTime * 0.2,
        description: 'Filter rows based on WHERE clause',
        children: []
      });
    }

    return plan;
  }

  private calculateQueryMetrics(executionTime: number, query: string): QueryMetrics {
    return {
      cpuTime: executionTime * 0.6,
      ioTime: executionTime * 0.3,
      networkTime: executionTime * 0.05,
      lockTime: executionTime * 0.02,
      waitTime: executionTime * 0.03,
      rowsProcessed: Math.floor(Math.random() * 10000) + 100,
      bytesTransferred: Math.floor(Math.random() * 1000000) + 10000,
      cacheHits: Math.floor(Math.random() * 100) + 50,
      cacheMisses: Math.floor(Math.random() * 50) + 10
    };
  }

  private generateQueryRecommendations(queryPerformance: QueryPerformance): QueryRecommendation[] {
    const recommendations: QueryRecommendation[] = [];

    // Check for slow queries
    if (queryPerformance.executionTime > 1000) {
      recommendations.push({
        id: `rec_${Date.now()}_1`,
        type: 'query_optimization',
        title: 'Optimize Slow Query',
        description: `Query execution time of ${queryPerformance.executionTime}ms exceeds recommended threshold`,
        impact: 'high',
        effort: 'medium',
        estimatedImprovement: 70,
        explanation: 'Consider adding indexes, rewriting the query, or optimizing the execution plan'
      });
    }

    // Check for missing indexes
    if (queryPerformance.query.toLowerCase().includes('where') && 
        queryPerformance.executionTime > 500) {
      recommendations.push({
        id: `rec_${Date.now()}_2`,
        type: 'index',
        title: 'Add Missing Index',
        description: 'Query could benefit from an index on WHERE clause columns',
        impact: 'high',
        effort: 'low',
        estimatedImprovement: 60,
        sql: this.generateIndexSQL(queryPerformance.query),
        explanation: 'Adding an index will significantly reduce query execution time'
      });
    }

    // Check for table scans
    if (queryPerformance.executionPlan?.nodes.some(n => n.nodeType === 'Seq Scan')) {
      recommendations.push({
        id: `rec_${Date.now()}_3`,
        type: 'schema_optimization',
        title: 'Avoid Table Scans',
        description: 'Query is performing full table scans which can be expensive',
        impact: 'medium',
        effort: 'medium',
        estimatedImprovement: 50,
        explanation: 'Consider adding indexes or restructuring the query to use index scans'
      });
    }

    return recommendations;
  }

  private generateIndexSQL(query: string): string {
    // Simple index generation based on WHERE clause
    const whereMatch = query.match(/where\s+(\w+)\s*=/i);
    if (whereMatch) {
      const column = whereMatch[1];
      return `CREATE INDEX idx_${column}_${Date.now()} ON table_name(${column});`;
    }
    return '-- Add appropriate index based on WHERE clause columns';
  }

  async collectDatabaseMetrics(connectionId: string): Promise<DatabaseMetrics> {
    const connection = this.connections.get(connectionId);
    if (!connection) {
      throw new Error(`Connection ${connectionId} not found`);
    }

    const metrics: DatabaseMetrics = {
      id: `metrics_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      database: connection.database,
      timestamp: new Date(),
      cpu: {
        usage: Math.random() * 100,
        load: Math.random() * 10,
        processes: Math.floor(Math.random() * 50) + 10
      },
      memory: {
        used: Math.floor(Math.random() * 8000000000) + 2000000000,
        available: Math.floor(Math.random() * 2000000000) + 500000000,
        total: 10000000000,
        cache: Math.floor(Math.random() * 1000000000) + 100000000,
        buffer: Math.floor(Math.random() * 500000000) + 50000000
      },
      disk: {
        readBytes: Math.floor(Math.random() * 1000000000) + 100000000,
        writeBytes: Math.floor(Math.random() * 1000000000) + 100000000,
        readIOPS: Math.floor(Math.random() * 1000) + 100,
        writeIOPS: Math.floor(Math.random() * 1000) + 100,
        latency: Math.random() * 10 + 1,
        utilization: Math.random() * 100
      },
      network: {
        bytesIn: Math.floor(Math.random() * 100000000) + 10000000,
        bytesOut: Math.floor(Math.random() * 100000000) + 10000000,
        packetsIn: Math.floor(Math.random() * 100000) + 10000,
        packetsOut: Math.floor(Math.random() * 100000) + 10000,
        errors: Math.floor(Math.random() * 10)
      },
      queries: {
        active: Math.floor(Math.random() * 20) + 5,
        waiting: Math.floor(Math.random() * 10) + 1,
        slow: Math.floor(Math.random() * 5),
        total: Math.floor(Math.random() * 1000) + 100,
        avgResponseTime: Math.random() * 100 + 10
      }
    };

    this.metricsHistory.push(metrics);
    return metrics;
  }

  async generateIndexRecommendations(connectionId: string): Promise<IndexRecommendation[]> {
    const recommendations: IndexRecommendation[] = [];
    
    // Analyze query history for index opportunities
    const slowQueries = this.queryHistory.filter(q => q.executionTime > 500);
    
    for (const query of slowQueries.slice(0, 5)) {
      const whereMatch = query.query.match(/where\s+(\w+)\s*=/i);
      if (whereMatch) {
        const column = whereMatch[1];
        const table = this.extractTableName(query.query);
        
        recommendations.push({
          id: `index_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          table: table || 'unknown_table',
          columns: [column],
          type: 'btree',
          estimatedImprovement: Math.floor(Math.random() * 40) + 60,
          currentQueryTime: query.executionTime,
          projectedQueryTime: query.executionTime * 0.3,
          spaceOverhead: Math.floor(Math.random() * 100) + 50,
          maintenanceOverhead: Math.floor(Math.random() * 10) + 5,
          sql: `CREATE INDEX idx_${column}_${Date.now()} ON ${table || 'table_name'}(${column});`,
          priority: Math.floor(Math.random() * 5) + 1
        });
      }
    }

    return recommendations.sort((a, b) => b.priority - a.priority);
  }

  private extractTableName(query: string): string | null {
    const fromMatch = query.match(/from\s+(\w+)/i);
    const joinMatch = query.match(/join\s+(\w+)/i);
    return fromMatch?.[1] || joinMatch?.[1] || null;
  }

  private async checkPerformanceAlerts(queryPerformance: QueryPerformance): Promise<void> {
    // Check for slow query alerts
    if (queryPerformance.executionTime > 5000) {
      const alert: DatabasePerformanceAlert = {
        id: `alert_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        type: 'performance',
        severity: 'critical',
        title: 'Critical: Very Slow Query Detected',
        description: `Query execution time of ${queryPerformance.executionTime}ms is critically slow`,
        database: queryPerformance.database,
        timestamp: new Date(),
        resolved: false,
        metrics: {
          executionTime: queryPerformance.executionTime,
          query: queryPerformance.query.substring(0, 100)
        },
        recommendations: [
          'Review query execution plan',
          'Add appropriate indexes',
          'Consider query optimization',
          'Check for table locks or blocking'
        ]
      };
      
      this.alerts.push(alert);
    }
  }

  async getPerformanceReport(
    connectionId: string,
    startDate: Date,
    endDate: Date
  ): Promise<{
    summary: {
      totalQueries: number;
      avgExecutionTime: number;
      slowQueries: number;
      topSlowQueries: QueryPerformance[];
    };
    trends: {
      executionTimeTrend: Array<{ date: string; avgTime: number }>;
      queryVolumeTrend: Array<{ date: string; count: number }>;
    };
    recommendations: QueryRecommendation[];
  }> {
    const connection = this.connections.get(connectionId);
    if (!connection) {
      throw new Error(`Connection ${connectionId} not found`);
    }

    const filteredQueries = this.queryHistory.filter(q => 
      q.database === connection.database &&
      q.timestamp >= startDate &&
      q.timestamp <= endDate
    );

    const totalQueries = filteredQueries.length;
    const avgExecutionTime = totalQueries > 0 
      ? filteredQueries.reduce((sum, q) => sum + q.executionTime, 0) / totalQueries 
      : 0;
    const slowQueries = filteredQueries.filter(q => q.executionTime > 1000).length;
    const topSlowQueries = filteredQueries
      .sort((a, b) => b.executionTime - a.executionTime)
      .slice(0, 10);

    // Generate trends (simplified)
    const trends = {
      executionTimeTrend: this.generateExecutionTimeTrend(startDate, endDate),
      queryVolumeTrend: this.generateQueryVolumeTrend(startDate, endDate)
    };

    // Collect all recommendations
    const allRecommendations: QueryRecommendation[] = [];
    filteredQueries.forEach(q => {
      allRecommendations.push(...q.recommendations);
    });

    return {
      summary: {
        totalQueries,
        avgExecutionTime: Math.round(avgExecutionTime),
        slowQueries,
        topSlowQueries
      },
      trends,
      recommendations: allRecommendations
        .filter((r, index, arr) => arr.findIndex(rec => rec.title === r.title) === index)
        .slice(0, 20)
    };
  }

  private generateExecutionTimeTrend(startDate: Date, endDate: Date): Array<{ date: string; avgTime: number }> {
    const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    const data = [];
    
    for (let i = 0; i < days; i++) {
      const date = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
      data.push({
        date: date.toISOString().split('T')[0],
        avgTime: Math.floor(Math.random() * 200) + 50
      });
    }
    
    return data;
  }

  private generateQueryVolumeTrend(startDate: Date, endDate: Date): Array<{ date: string; count: number }> {
    const days = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    const data = [];
    
    for (let i = 0; i < days; i++) {
      const date = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
      data.push({
        date: date.toISOString().split('T')[0],
        count: Math.floor(Math.random() * 1000) + 100
      });
    }
    
    return data;
  }

  async getActiveAlerts(connectionId?: string): Promise<DatabasePerformanceAlert[]> {
    if (connectionId) {
      const connection = this.connections.get(connectionId);
      return this.alerts.filter(a => 
        !a.resolved && a.database === connection?.database
      );
    }
    return this.alerts.filter(a => !a.resolved);
  }

  async resolveAlert(alertId: string): Promise<void> {
    const alert = this.alerts.find(a => a.id === alertId);
    if (alert) {
      alert.resolved = true;
      alert.resolvedAt = new Date();
    }
  }
}

export const databasePerformanceMonitorService = new DatabasePerformanceMonitorService();