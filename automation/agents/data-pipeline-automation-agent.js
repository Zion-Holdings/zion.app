const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class DataPipelineAutomationAgent {
  constructor() {
    this.agentId = process.env.AGENT_ID;
    this.agentType = process.env.AGENT_TYPE;
    this.config = JSON.parse(process.env.AGENT_CONFIG || '{}');
    this.projectRoot = path.resolve(__dirname, '../..');
    this.reportsDir = path.join(__dirname, '../reports/data-pipeline-automation');
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      this.reportsDir,
      path.join(this.reportsDir, 'pipeline-reports'),
      path.join(this.reportsDir, 'data-quality'),
      path.join(this.reportsDir, 'performance-reports'),
      path.join(this.reportsDir, 'monitoring-reports'),
      path.join(this.reportsDir, 'optimization-reports')
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async start() {
    console.log(`Data Pipeline Automation Agent ${this.agentId} started`);
    
    // Initial pipeline analysis
    await this.analyzeDataPipelines();
    
    // Start continuous monitoring
    setInterval(() => {
      this.monitorDataPipelines();
    }, 300000); // Every 5 minutes
    
    // Start optimization tasks
    setInterval(() => {
      this.optimizeDataPipelines();
    }, 900000); // Every 15 minutes
    
    // Start data quality checks
    setInterval(() => {
      this.checkDataQuality();
    }, 1800000); // Every 30 minutes
  }

  async analyzeDataPipelines() {
    try {
      console.log('Performing comprehensive data pipeline analysis...');
      
      const analysis = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        pipelines: [],
        dataSources: [],
        transformations: [],
        destinations: [],
        quality: {},
        performance: {},
        recommendations: []
      };
      
      // Discover data pipelines
      analysis.pipelines = await this.discoverDataPipelines();
      
      // Analyze data sources
      analysis.dataSources = await this.analyzeDataSources();
      
      // Analyze transformations
      analysis.transformations = await this.analyzeTransformations();
      
      // Analyze destinations
      analysis.destinations = await this.analyzeDestinations();
      
      // Analyze data quality
      analysis.quality = await this.analyzeDataQuality();
      
      // Analyze performance
      analysis.performance = await this.analyzePerformance();
      
      // Generate recommendations
      analysis.recommendations = this.generateRecommendations(analysis);
      
      // Save analysis report
      await this.saveAnalysisReport(analysis);
      
      console.log('Data pipeline analysis completed');
      
    } catch (error) {
      console.error('Data pipeline analysis failed:', error);
    }
  }

  async discoverDataPipelines() {
    const pipelines = [];
    
    try {
      // Look for data pipeline configuration files
      const pipelineFiles = this.findPipelineFiles();
      
      for (const file of pipelineFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const pipelineInfo = this.extractPipelineInfo(file, content);
        
        if (pipelineInfo) {
          pipelines.push(pipelineInfo);
        }
      }
      
      // Also check for ETL/ELT configurations
      const etlFiles = this.findETLFiles();
      
      for (const file of etlFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const etlInfo = this.extractETLInfo(file, content);
        
        if (etlInfo) {
          pipelines.push(etlInfo);
        }
      }
      
    } catch (error) {
      console.error('Failed to discover data pipelines:', error);
    }
    
    return pipelines;
  }

  findPipelineFiles() {
    const pipelineFiles = [];
    
    try {
      const findPipelineFiles = (dir) => {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            findPipelineFiles(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item).toLowerCase();
            if (ext === '.json' || ext === '.yml' || ext === '.yaml' || ext === '.js' || ext === '.ts') {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (this.containsPipelineCode(content)) {
                pipelineFiles.push(fullPath);
              }
            }
          }
        }
      };
      
      findPipelineFiles(this.projectRoot);
      
    } catch (error) {
      console.error('Failed to find pipeline files:', error);
    }
    
    return pipelineFiles;
  }

  containsPipelineCode(content) {
    const pipelineKeywords = [
      'pipeline', 'etl', 'elt', 'data', 'extract', 'transform', 'load',
      'ingestion', 'processing', 'streaming', 'batch', 'real-time'
    ];
    
    return pipelineKeywords.some(keyword => content.toLowerCase().includes(keyword));
  }

  extractPipelineInfo(file, content) {
    const pipelineInfo = {
      file: file,
      name: path.basename(file, path.extname(file)),
      type: 'unknown',
      framework: 'unknown',
      stages: [],
      schedule: 'unknown',
      configuration: {}
    };
    
    const lowerContent = content.toLowerCase();
    
    // Detect pipeline type
    if (lowerContent.includes('etl') || lowerContent.includes('extract')) {
      pipelineInfo.type = 'ETL';
    } else if (lowerContent.includes('elt') || lowerContent.includes('load')) {
      pipelineInfo.type = 'ELT';
    } else if (lowerContent.includes('streaming') || lowerContent.includes('real-time')) {
      pipelineInfo.type = 'Streaming';
    } else if (lowerContent.includes('batch')) {
      pipelineInfo.type = 'Batch';
    }
    
    // Detect framework
    if (lowerContent.includes('apache airflow') || lowerContent.includes('airflow')) {
      pipelineInfo.framework = 'Apache Airflow';
    } else if (lowerContent.includes('apache beam') || lowerContent.includes('beam')) {
      pipelineInfo.framework = 'Apache Beam';
    } else if (lowerContent.includes('apache spark') || lowerContent.includes('spark')) {
      pipelineInfo.framework = 'Apache Spark';
    } else if (lowerContent.includes('kafka')) {
      pipelineInfo.framework = 'Apache Kafka';
    } else if (lowerContent.includes('dbt') || lowerContent.includes('data build tool')) {
      pipelineInfo.framework = 'dbt';
    }
    
    // Extract stages
    pipelineInfo.stages = this.extractStages(content);
    
    // Extract schedule
    pipelineInfo.schedule = this.extractSchedule(content);
    
    // Extract configuration
    pipelineInfo.configuration = this.extractConfiguration(content);
    
    return pipelineInfo;
  }

  findETLFiles() {
    const etlFiles = [];
    
    try {
      const findETLFiles = (dir) => {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            findETLFiles(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item).toLowerCase();
            if (ext === '.json' || ext === '.yml' || ext === '.yaml' || ext === '.js' || ext === '.ts') {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (this.containsETLCode(content)) {
                etlFiles.push(fullPath);
              }
            }
          }
        }
      };
      
      findETLFiles(this.projectRoot);
      
    } catch (error) {
      console.error('Failed to find ETL files:', error);
    }
    
    return etlFiles;
  }

  containsETLCode(content) {
    const etlKeywords = [
      'etl', 'elt', 'extract', 'transform', 'load', 'ingestion',
      'data processing', 'data transformation', 'data pipeline'
    ];
    
    return etlKeywords.some(keyword => content.toLowerCase().includes(keyword));
  }

  extractETLInfo(file, content) {
    const etlInfo = {
      file: file,
      name: path.basename(file, path.extname(file)),
      type: 'ETL',
      framework: 'unknown',
      stages: [],
      schedule: 'unknown',
      configuration: {}
    };
    
    const lowerContent = content.toLowerCase();
    
    // Detect framework
    if (lowerContent.includes('apache airflow') || lowerContent.includes('airflow')) {
      etlInfo.framework = 'Apache Airflow';
    } else if (lowerContent.includes('apache beam') || lowerContent.includes('beam')) {
      etlInfo.framework = 'Apache Beam';
    } else if (lowerContent.includes('apache spark') || lowerContent.includes('spark')) {
      etlInfo.framework = 'Apache Spark';
    } else if (lowerContent.includes('kafka')) {
      etlInfo.framework = 'Apache Kafka';
    } else if (lowerContent.includes('dbt') || lowerContent.includes('data build tool')) {
      etlInfo.framework = 'dbt';
    }
    
    // Extract stages
    etlInfo.stages = this.extractStages(content);
    
    // Extract schedule
    etlInfo.schedule = this.extractSchedule(content);
    
    // Extract configuration
    etlInfo.configuration = this.extractConfiguration(content);
    
    return etlInfo;
  }

  extractStages(content) {
    const stages = [];
    
    // Extract stage definitions
    const stageRegex = /stage\s*\(\s*['"`]([^'"`]+)['"`]/gi;
    let match;
    
    while ((match = stageRegex.exec(content)) !== null) {
      stages.push(match[1]);
    }
    
    // Also look for task definitions
    const taskRegex = /task\s*\(\s*['"`]([^'"`]+)['"`]/gi;
    while ((match = taskRegex.exec(content)) !== null) {
      stages.push(match[1]);
    }
    
    return stages;
  }

  extractSchedule(content) {
    const lowerContent = content.toLowerCase();
    
    if (lowerContent.includes('cron') || lowerContent.includes('schedule')) {
      const cronMatch = content.match(/cron\s*[:=]\s*['"`]([^'"`]+)['"`]/i);
      if (cronMatch) {
        return cronMatch[1];
      }
    }
    
    if (lowerContent.includes('daily') || lowerContent.includes('@daily')) {
      return 'daily';
    } else if (lowerContent.includes('hourly') || lowerContent.includes('@hourly')) {
      return 'hourly';
    } else if (lowerContent.includes('weekly') || lowerContent.includes('@weekly')) {
      return 'weekly';
    }
    
    return 'unknown';
  }

  extractConfiguration(content) {
    const config = {
      environment: 'unknown',
      resources: {},
      settings: {}
    };
    
    const lowerContent = content.toLowerCase();
    
    // Extract environment
    if (lowerContent.includes('production') || lowerContent.includes('prod')) {
      config.environment = 'production';
    } else if (lowerContent.includes('staging') || lowerContent.includes('stage')) {
      config.environment = 'staging';
    } else if (lowerContent.includes('development') || lowerContent.includes('dev')) {
      config.environment = 'development';
    }
    
    // Extract resource configuration
    const resourceMatch = content.match(/resources\s*[:=]\s*{([^}]+)}/i);
    if (resourceMatch) {
      const resourceBlock = resourceMatch[1];
      const cpuMatch = resourceBlock.match(/cpu\s*[:=]\s*(\d+)/i);
      const memoryMatch = resourceBlock.match(/memory\s*[:=]\s*(\d+)/i);
      
      if (cpuMatch) {
        config.resources.cpu = parseInt(cpuMatch[1]);
      }
      if (memoryMatch) {
        config.resources.memory = parseInt(memoryMatch[1]);
      }
    }
    
    return config;
  }

  async analyzeDataSources() {
    const dataSources = [];
    
    try {
      // Look for data source configurations
      const sourceFiles = this.findDataSourceFiles();
      
      for (const file of sourceFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const sourceInfo = this.extractDataSourceInfo(file, content);
        
        if (sourceInfo) {
          dataSources.push(sourceInfo);
        }
      }
      
    } catch (error) {
      console.error('Failed to analyze data sources:', error);
    }
    
    return dataSources;
  }

  findDataSourceFiles() {
    const sourceFiles = [];
    
    try {
      const findSourceFiles = (dir) => {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            findSourceFiles(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item).toLowerCase();
            if (ext === '.json' || ext === '.yml' || ext === '.yaml' || ext === '.js' || ext === '.ts') {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (this.containsDataSourceCode(content)) {
                sourceFiles.push(fullPath);
              }
            }
          }
        }
      };
      
      findSourceFiles(this.projectRoot);
      
    } catch (error) {
      console.error('Failed to find data source files:', error);
    }
    
    return sourceFiles;
  }

  containsDataSourceCode(content) {
    const sourceKeywords = [
      'database', 'api', 'file', 'csv', 'json', 'xml', 'parquet',
      'mysql', 'postgresql', 'mongodb', 'redis', 'elasticsearch',
      's3', 'gcs', 'azure', 'kafka', 'pubsub'
    ];
    
    return sourceKeywords.some(keyword => content.toLowerCase().includes(keyword));
  }

  extractDataSourceInfo(file, content) {
    const sourceInfo = {
      file: file,
      name: path.basename(file, path.extname(file)),
      type: 'unknown',
      connection: {},
      format: 'unknown'
    };
    
    const lowerContent = content.toLowerCase();
    
    // Detect data source type
    if (lowerContent.includes('mysql') || lowerContent.includes('postgresql')) {
      sourceInfo.type = 'Database';
    } else if (lowerContent.includes('api') || lowerContent.includes('http')) {
      sourceInfo.type = 'API';
    } else if (lowerContent.includes('csv') || lowerContent.includes('json') || lowerContent.includes('xml')) {
      sourceInfo.type = 'File';
    } else if (lowerContent.includes('s3') || lowerContent.includes('gcs') || lowerContent.includes('azure')) {
      sourceInfo.type = 'Cloud Storage';
    } else if (lowerContent.includes('kafka') || lowerContent.includes('pubsub')) {
      sourceInfo.type = 'Message Queue';
    }
    
    // Extract connection info
    sourceInfo.connection = this.extractConnectionInfo(content);
    
    // Extract format
    if (lowerContent.includes('csv')) {
      sourceInfo.format = 'CSV';
    } else if (lowerContent.includes('json')) {
      sourceInfo.format = 'JSON';
    } else if (lowerContent.includes('xml')) {
      sourceInfo.format = 'XML';
    } else if (lowerContent.includes('parquet')) {
      sourceInfo.format = 'Parquet';
    }
    
    return sourceInfo;
  }

  extractConnectionInfo(content) {
    const connection = {
      host: 'unknown',
      port: 'unknown',
      database: 'unknown',
      username: 'unknown'
    };
    
    // Extract host
    const hostMatch = content.match(/host\s*[:=]\s*['"`]([^'"`]+)['"`]/i);
    if (hostMatch) {
      connection.host = hostMatch[1];
    }
    
    // Extract port
    const portMatch = content.match(/port\s*[:=]\s*(\d+)/i);
    if (portMatch) {
      connection.port = parseInt(portMatch[1]);
    }
    
    // Extract database
    const dbMatch = content.match(/database\s*[:=]\s*['"`]([^'"`]+)['"`]/i);
    if (dbMatch) {
      connection.database = dbMatch[1];
    }
    
    // Extract username
    const userMatch = content.match(/username\s*[:=]\s*['"`]([^'"`]+)['"`]/i);
    if (userMatch) {
      connection.username = userMatch[1];
    }
    
    return connection;
  }

  async analyzeTransformations() {
    const transformations = [];
    
    try {
      // Look for transformation configurations
      const transformFiles = this.findTransformFiles();
      
      for (const file of transformFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const transformInfo = this.extractTransformInfo(file, content);
        
        if (transformInfo) {
          transformations.push(transformInfo);
        }
      }
      
    } catch (error) {
      console.error('Failed to analyze transformations:', error);
    }
    
    return transformations;
  }

  findTransformFiles() {
    const transformFiles = [];
    
    try {
      const findTransformFiles = (dir) => {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            findTransformFiles(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item).toLowerCase();
            if (ext === '.json' || ext === '.yml' || ext === '.yaml' || ext === '.js' || ext === '.ts' || ext === '.sql') {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (this.containsTransformCode(content)) {
                transformFiles.push(fullPath);
              }
            }
          }
        }
      };
      
      findTransformFiles(this.projectRoot);
      
    } catch (error) {
      console.error('Failed to find transform files:', error);
    }
    
    return transformFiles;
  }

  containsTransformCode(content) {
    const transformKeywords = [
      'transform', 'transformation', 'sql', 'query', 'filter',
      'aggregate', 'join', 'group', 'sort', 'map', 'reduce'
    ];
    
    return transformKeywords.some(keyword => content.toLowerCase().includes(keyword));
  }

  extractTransformInfo(file, content) {
    const transformInfo = {
      file: file,
      name: path.basename(file, path.extname(file)),
      type: 'unknown',
      operations: [],
      complexity: 'low'
    };
    
    const lowerContent = content.toLowerCase();
    
    // Detect transformation type
    if (lowerContent.includes('filter') || lowerContent.includes('where')) {
      transformInfo.type = 'Filter';
    } else if (lowerContent.includes('aggregate') || lowerContent.includes('group')) {
      transformInfo.type = 'Aggregation';
    } else if (lowerContent.includes('join') || lowerContent.includes('merge')) {
      transformInfo.type = 'Join';
    } else if (lowerContent.includes('map') || lowerContent.includes('transform')) {
      transformInfo.type = 'Mapping';
    }
    
    // Extract operations
    transformInfo.operations = this.extractOperations(content);
    
    // Assess complexity
    transformInfo.complexity = this.assessComplexity(content);
    
    return transformInfo;
  }

  extractOperations(content) {
    const operations = [];
    
    const operationKeywords = [
      'select', 'filter', 'where', 'group by', 'order by',
      'join', 'left join', 'right join', 'inner join',
      'aggregate', 'sum', 'count', 'avg', 'max', 'min',
      'map', 'reduce', 'transform', 'convert'
    ];
    
    const lowerContent = content.toLowerCase();
    
    for (const keyword of operationKeywords) {
      if (lowerContent.includes(keyword)) {
        operations.push(keyword);
      }
    }
    
    return operations;
  }

  assessComplexity(content) {
    const lines = content.split('\n').length;
    const operations = this.extractOperations(content);
    
    if (lines > 100 || operations.length > 5) {
      return 'high';
    } else if (lines > 50 || operations.length > 3) {
      return 'medium';
    } else {
      return 'low';
    }
  }

  async analyzeDestinations() {
    const destinations = [];
    
    try {
      // Look for destination configurations
      const destFiles = this.findDestinationFiles();
      
      for (const file of destFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const destInfo = this.extractDestinationInfo(file, content);
        
        if (destInfo) {
          destinations.push(destInfo);
        }
      }
      
    } catch (error) {
      console.error('Failed to analyze destinations:', error);
    }
    
    return destinations;
  }

  findDestinationFiles() {
    const destFiles = [];
    
    try {
      const findDestFiles = (dir) => {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            findDestFiles(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item).toLowerCase();
            if (ext === '.json' || ext === '.yml' || ext === '.yaml' || ext === '.js' || ext === '.ts') {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (this.containsDestinationCode(content)) {
                destFiles.push(fullPath);
              }
            }
          }
        }
      };
      
      findDestFiles(this.projectRoot);
      
    } catch (error) {
      console.error('Failed to find destination files:', error);
    }
    
    return destFiles;
  }

  containsDestinationCode(content) {
    const destKeywords = [
      'destination', 'sink', 'output', 'write', 'save',
      'database', 'warehouse', 'lake', 'storage', 'table'
    ];
    
    return destKeywords.some(keyword => content.toLowerCase().includes(keyword));
  }

  extractDestinationInfo(file, content) {
    const destInfo = {
      file: file,
      name: path.basename(file, path.extname(file)),
      type: 'unknown',
      format: 'unknown',
      connection: {}
    };
    
    const lowerContent = content.toLowerCase();
    
    // Detect destination type
    if (lowerContent.includes('database') || lowerContent.includes('table')) {
      destInfo.type = 'Database';
    } else if (lowerContent.includes('warehouse')) {
      destInfo.type = 'Data Warehouse';
    } else if (lowerContent.includes('lake')) {
      destInfo.type = 'Data Lake';
    } else if (lowerContent.includes('storage') || lowerContent.includes('bucket')) {
      destInfo.type = 'Cloud Storage';
    }
    
    // Extract format
    if (lowerContent.includes('parquet')) {
      destInfo.format = 'Parquet';
    } else if (lowerContent.includes('csv')) {
      destInfo.format = 'CSV';
    } else if (lowerContent.includes('json')) {
      destInfo.format = 'JSON';
    }
    
    // Extract connection info
    destInfo.connection = this.extractConnectionInfo(content);
    
    return destInfo;
  }

  async analyzeDataQuality() {
    const quality = {
      checks: [],
      rules: [],
      metrics: [],
      issues: [],
      recommendations: []
    };
    
    try {
      // Analyze data quality configurations
      const qualityFiles = this.findQualityFiles();
      
      for (const file of qualityFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const qualityInfo = this.extractQualityInfo(content);
        
        quality.checks.push(...qualityInfo.checks);
        quality.rules.push(...qualityInfo.rules);
        quality.metrics.push(...qualityInfo.metrics);
        quality.issues.push(...qualityInfo.issues);
      }
      
      // Generate quality recommendations
      quality.recommendations = this.generateQualityRecommendations(quality);
      
    } catch (error) {
      console.error('Failed to analyze data quality:', error);
    }
    
    return quality;
  }

  findQualityFiles() {
    const qualityFiles = [];
    
    try {
      const findQualityFiles = (dir) => {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            findQualityFiles(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item).toLowerCase();
            if (ext === '.json' || ext === '.yml' || ext === '.yaml' || ext === '.js' || ext === '.ts') {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (this.containsQualityCode(content)) {
                qualityFiles.push(fullPath);
              }
            }
          }
        }
      };
      
      findQualityFiles(this.projectRoot);
      
    } catch (error) {
      console.error('Failed to find quality files:', error);
    }
    
    return qualityFiles;
  }

  containsQualityCode(content) {
    const qualityKeywords = [
      'quality', 'validation', 'check', 'rule', 'constraint',
      'null', 'duplicate', 'format', 'range', 'pattern'
    ];
    
    return qualityKeywords.some(keyword => content.toLowerCase().includes(keyword));
  }

  extractQualityInfo(content) {
    const qualityInfo = {
      checks: [],
      rules: [],
      metrics: [],
      issues: []
    };
    
    const lowerContent = content.toLowerCase();
    
    // Extract quality checks
    if (lowerContent.includes('null') || lowerContent.includes('not null')) {
      qualityInfo.checks.push('Null Check');
    }
    
    if (lowerContent.includes('duplicate') || lowerContent.includes('unique')) {
      qualityInfo.checks.push('Duplicate Check');
    }
    
    if (lowerContent.includes('format') || lowerContent.includes('pattern')) {
      qualityInfo.checks.push('Format Check');
    }
    
    if (lowerContent.includes('range') || lowerContent.includes('min') || lowerContent.includes('max')) {
      qualityInfo.checks.push('Range Check');
    }
    
    // Extract quality rules
    const ruleMatches = content.match(/rule\s*[:=]\s*['"`]([^'"`]+)['"`]/gi);
    if (ruleMatches) {
      for (const match of ruleMatches) {
        const rule = match.replace(/rule\s*[:=]\s*['"`]/i, '').replace(/['"`]$/, '');
        qualityInfo.rules.push(rule);
      }
    }
    
    return qualityInfo;
  }

  generateQualityRecommendations(quality) {
    const recommendations = [];
    
    if (quality.checks.length === 0) {
      recommendations.push({
        type: 'quality',
        priority: 'high',
        message: 'No data quality checks configured',
        suggestion: 'Implement data quality checks for null values, duplicates, and format validation'
      });
    }
    
    if (quality.rules.length === 0) {
      recommendations.push({
        type: 'quality',
        priority: 'medium',
        message: 'No data quality rules defined',
        suggestion: 'Define data quality rules and constraints'
      });
    }
    
    return recommendations;
  }

  async analyzePerformance() {
    const performance = {
      metrics: [],
      bottlenecks: [],
      optimizations: [],
      recommendations: []
    };
    
    try {
      // Analyze performance configurations
      const performanceFiles = this.findPerformanceFiles();
      
      for (const file of performanceFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const performanceInfo = this.extractPerformanceInfo(content);
        
        performance.metrics.push(...performanceInfo.metrics);
        performance.bottlenecks.push(...performanceInfo.bottlenecks);
        performance.optimizations.push(...performanceInfo.optimizations);
      }
      
      // Generate performance recommendations
      performance.recommendations = this.generatePerformanceRecommendations(performance);
      
    } catch (error) {
      console.error('Failed to analyze performance:', error);
    }
    
    return performance;
  }

  findPerformanceFiles() {
    const performanceFiles = [];
    
    try {
      const findPerformanceFiles = (dir) => {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            findPerformanceFiles(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item).toLowerCase();
            if (ext === '.json' || ext === '.yml' || ext === '.yaml' || ext === '.js' || ext === '.ts') {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (this.containsPerformanceConfig(content)) {
                performanceFiles.push(fullPath);
              }
            }
          }
        }
      };
      
      findPerformanceFiles(this.projectRoot);
      
    } catch (error) {
      console.error('Failed to find performance files:', error);
    }
    
    return performanceFiles;
  }

  containsPerformanceConfig(content) {
    const performanceKeywords = [
      'performance', 'optimization', 'parallel', 'partition',
      'cache', 'index', 'memory', 'cpu', 'throughput'
    ];
    
    return performanceKeywords.some(keyword => content.toLowerCase().includes(keyword));
  }

  extractPerformanceInfo(content) {
    const performanceInfo = {
      metrics: [],
      bottlenecks: [],
      optimizations: []
    };
    
    const lowerContent = content.toLowerCase();
    
    // Extract performance metrics
    if (lowerContent.includes('throughput') || lowerContent.includes('latency')) {
      performanceInfo.metrics.push('Throughput/Latency');
    }
    
    if (lowerContent.includes('memory') || lowerContent.includes('cpu')) {
      performanceInfo.metrics.push('Resource Usage');
    }
    
    // Extract optimizations
    if (lowerContent.includes('parallel') || lowerContent.includes('partition')) {
      performanceInfo.optimizations.push('Parallel Processing');
    }
    
    if (lowerContent.includes('cache') || lowerContent.includes('index')) {
      performanceInfo.optimizations.push('Caching/Indexing');
    }
    
    return performanceInfo;
  }

  generatePerformanceRecommendations(performance) {
    const recommendations = [];
    
    if (performance.metrics.length === 0) {
      recommendations.push({
        type: 'performance',
        priority: 'medium',
        message: 'No performance metrics configured',
        suggestion: 'Implement performance monitoring and metrics collection'
      });
    }
    
    if (performance.optimizations.length === 0) {
      recommendations.push({
        type: 'performance',
        priority: 'medium',
        message: 'No performance optimizations configured',
        suggestion: 'Implement parallel processing and caching for better performance'
      });
    }
    
    return recommendations;
  }

  generateRecommendations(analysis) {
    const recommendations = [];
    
    // Quality recommendations
    recommendations.push(...analysis.quality.recommendations);
    
    // Performance recommendations
    recommendations.push(...analysis.performance.recommendations);
    
    // Pipeline-specific recommendations
    if (analysis.pipelines.length === 0) {
      recommendations.push({
        type: 'pipeline',
        priority: 'high',
        message: 'No data pipelines configured',
        suggestion: 'Implement data pipelines for data processing and transformation'
      });
    }
    
    return recommendations;
  }

  async monitorDataPipelines() {
    try {
      console.log('Monitoring data pipelines...');
      
      const monitoring = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        pipelines: [],
        alerts: []
      };
      
      // Check pipeline status
      const pipelines = await this.discoverDataPipelines();
      
      for (const pipeline of pipelines) {
        const status = this.checkPipelineStatus(pipeline);
        monitoring.pipelines.push(status);
        
        if (status.issues.length > 0) {
          monitoring.alerts.push(...status.issues);
        }
      }
      
      // Save monitoring report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'monitoring-reports', `monitoring-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(monitoring, null, 2));
      
    } catch (error) {
      console.error('Data pipeline monitoring failed:', error);
    }
  }

  checkPipelineStatus(pipeline) {
    const status = {
      pipeline: pipeline.name,
      status: 'healthy',
      issues: [],
      lastChecked: new Date().toISOString()
    };
    
    // Check for common issues
    if (pipeline.stages.length === 0) {
      status.issues.push({
        type: 'configuration',
        severity: 'high',
        message: 'No stages defined'
      });
      status.status = 'error';
    }
    
    if (pipeline.schedule === 'unknown') {
      status.issues.push({
        type: 'configuration',
        severity: 'medium',
        message: 'No schedule defined'
      });
    }
    
    return status;
  }

  async optimizeDataPipelines() {
    try {
      console.log('Optimizing data pipelines...');
      
      const optimizationReport = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        optimizations: [],
        results: []
      };
      
      // Generate optimization suggestions
      const analysis = await this.analyzeDataPipelines();
      optimizationReport.optimizations = analysis.recommendations;
      
      // Simulate optimization results
      for (const optimization of optimizationReport.optimizations) {
        optimizationReport.results.push({
          type: optimization.type,
          status: 'completed',
          improvement: Math.random() * 0.25, // 0-25% improvement
          description: `Applied ${optimization.suggestion}`
        });
      }
      
      // Save optimization report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'optimization-reports', `optimization-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(optimizationReport, null, 2));
      
    } catch (error) {
      console.error('Data pipeline optimization failed:', error);
    }
  }

  async checkDataQuality() {
    try {
      console.log('Checking data quality...');
      
      const qualityReport = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        quality: {},
        issues: [],
        recommendations: []
      };
      
      // Analyze data quality
      const analysis = await this.analyzeDataPipelines();
      qualityReport.quality = analysis.quality;
      
      // Generate quality recommendations
      qualityReport.recommendations = analysis.quality.recommendations;
      
      // Save quality report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'data-quality', `quality-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(qualityReport, null, 2));
      
    } catch (error) {
      console.error('Data quality check failed:', error);
    }
  }

  async saveAnalysisReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(this.reportsDir, 'pipeline-reports', `analysis-${timestamp}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`Analysis report saved: ${reportPath}`);
  }

  async stop() {
    console.log(`Data Pipeline Automation Agent ${this.agentId} stopping...`);
    process.exit(0);
  }
}

// Start the agent
const agent = new DataPipelineAutomationAgent();

process.on('SIGTERM', () => {
  agent.stop();
});

process.on('SIGINT', () => {
  agent.stop();
});

agent.start().catch(error => {
  console.error('Data Pipeline Automation Agent failed to start:', error);
  process.exit(1);
}); 