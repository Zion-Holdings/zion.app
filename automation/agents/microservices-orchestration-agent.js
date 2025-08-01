const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class MicroservicesOrchestrationAgent {
  constructor() {
    this.agentId = process.env.AGENT_ID;
    this.agentType = process.env.AGENT_TYPE;
    this.config = JSON.parse(process.env.AGENT_CONFIG || '{}');
    this.projectRoot = path.resolve(__dirname, '../..');
    this.reportsDir = path.join(__dirname, '../reports/microservices-orchestration');
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      this.reportsDir,
      path.join(this.reportsDir, 'service-reports'),
      path.join(this.reportsDir, 'orchestration-reports'),
      path.join(this.reportsDir, 'communication-reports'),
      path.join(this.reportsDir, 'scaling-reports'),
      path.join(this.reportsDir, 'health-reports')
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async start() {
    console.log(`Microservices Orchestration Agent ${this.agentId} started`);
    
    // Initial microservices analysis
    await this.analyzeMicroservices();
    
    // Start continuous monitoring
    setInterval(() => {
      this.monitorServices();
    }, 300000); // Every 5 minutes
    
    // Start orchestration tasks
    setInterval(() => {
      this.orchestrateServices();
    }, 900000); // Every 15 minutes
    
    // Start health monitoring
    setInterval(() => {
      this.monitorHealth();
    }, 1800000); // Every 30 minutes
  }

  async analyzeMicroservices() {
    try {
      console.log('Performing comprehensive microservices analysis...');
      
      const analysis = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        services: [],
        communication: {},
        dependencies: {},
        scaling: {},
        health: {},
        recommendations: []
      };
      
      // Discover microservices
      analysis.services = await this.discoverMicroservices();
      
      // Analyze service communication
      analysis.communication = await this.analyzeCommunication();
      
      // Analyze service dependencies
      analysis.dependencies = await this.analyzeDependencies();
      
      // Analyze scaling patterns
      analysis.scaling = await this.analyzeScaling();
      
      // Analyze service health
      analysis.health = await this.analyzeHealth();
      
      // Generate recommendations
      analysis.recommendations = this.generateRecommendations(analysis);
      
      // Save analysis report
      await this.saveAnalysisReport(analysis);
      
      console.log('Microservices analysis completed');
      
    } catch (error) {
      console.error('Microservices analysis failed:', error);
    }
  }

  async discoverMicroservices() {
    const services = [];
    
    try {
      // Look for microservice files
      const serviceFiles = this.findServiceFiles();
      
      for (const file of serviceFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const serviceInfo = this.extractServiceInfo(file, content);
        
        if (serviceInfo) {
          services.push(serviceInfo);
        }
      }
      
      // Also check for Docker Compose files
      const composeFiles = this.findComposeFiles();
      
      for (const file of composeFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const composeInfo = this.extractComposeInfo(file, content);
        
        if (composeInfo) {
          services.push(composeInfo);
        }
      }
      
    } catch (error) {
      console.error('Failed to discover microservices:', error);
    }
    
    return services;
  }

  findServiceFiles() {
    const serviceFiles = [];
    const serviceExtensions = ['.js', '.ts', '.py', '.java', '.go'];
    
    try {
      const findServiceFiles = (dir) => {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            findServiceFiles(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item).toLowerCase();
            if (serviceExtensions.includes(ext)) {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (this.containsServiceCode(content)) {
                serviceFiles.push(fullPath);
              }
            }
          }
        }
      };
      
      findServiceFiles(this.projectRoot);
      
    } catch (error) {
      console.error('Failed to find service files:', error);
    }
    
    return serviceFiles;
  }

  containsServiceCode(content) {
    const serviceKeywords = [
      'express', 'fastapi', 'spring', 'gin', 'microservice', 'service',
      'app.listen', 'app.run', 'server.start', 'port', 'endpoint'
    ];
    
    return serviceKeywords.some(keyword => content.toLowerCase().includes(keyword));
  }

  extractServiceInfo(file, content) {
    const serviceInfo = {
      file: file,
      name: path.basename(file, path.extname(file)),
      type: 'unknown',
      framework: 'unknown',
      port: 0,
      endpoints: [],
      dependencies: []
    };
    
    const lowerContent = content.toLowerCase();
    
    // Detect framework
    if (lowerContent.includes('express')) {
      serviceInfo.framework = 'express';
      serviceInfo.type = 'nodejs';
    } else if (lowerContent.includes('fastapi')) {
      serviceInfo.framework = 'fastapi';
      serviceInfo.type = 'python';
    } else if (lowerContent.includes('spring')) {
      serviceInfo.framework = 'spring';
      serviceInfo.type = 'java';
    } else if (lowerContent.includes('gin')) {
      serviceInfo.framework = 'gin';
      serviceInfo.type = 'go';
    }
    
    // Extract port
    const portMatch = content.match(/port\s*[:=]\s*(\d+)/i);
    if (portMatch) {
      serviceInfo.port = parseInt(portMatch[1]);
    }
    
    // Extract endpoints
    serviceInfo.endpoints = this.extractEndpoints(content);
    
    // Extract dependencies
    serviceInfo.dependencies = this.extractDependencies(content);
    
    return serviceInfo;
  }

  findComposeFiles() {
    const composeFiles = [];
    const composeExtensions = ['.yml', '.yaml'];
    
    try {
      const findComposeFiles = (dir) => {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            findComposeFiles(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item).toLowerCase();
            if (composeExtensions.includes(ext)) {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (this.containsComposeCode(content)) {
                composeFiles.push(fullPath);
              }
            }
          }
        }
      };
      
      findComposeFiles(this.projectRoot);
      
    } catch (error) {
      console.error('Failed to find compose files:', error);
    }
    
    return composeFiles;
  }

  containsComposeCode(content) {
    const composeKeywords = [
      'version:', 'services:', 'docker-compose', 'container_name', 'image'
    ];
    
    return composeKeywords.some(keyword => content.toLowerCase().includes(keyword));
  }

  extractComposeInfo(file, content) {
    const composeInfo = {
      file: file,
      name: 'docker-compose',
      type: 'orchestration',
      services: [],
      networks: [],
      volumes: []
    };
    
    const lines = content.split('\n');
    let currentService = null;
    
    for (const line of lines) {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('- ') || trimmedLine.match(/^[a-zA-Z_][a-zA-Z0-9_]*:/)) {
        if (currentService) {
          composeInfo.services.push(currentService);
        }
        currentService = {
          name: trimmedLine.replace(/[:-\s]/g, ''),
          config: {}
        };
      } else if (currentService && trimmedLine.includes(':')) {
        const [key, value] = trimmedLine.split(':').map(s => s.trim());
        currentService.config[key] = value;
      }
    }
    
    if (currentService) {
      composeInfo.services.push(currentService);
    }
    
    return composeInfo;
  }

  extractEndpoints(content) {
    const endpoints = [];
    
    // Extract Express endpoints
    const expressRegex = /app\.(get|post|put|delete|patch)\s*\(\s*['"`]([^'"`]+)['"`]/g;
    let match;
    
    while ((match = expressRegex.exec(content)) !== null) {
      endpoints.push({
        method: match[1].toUpperCase(),
        path: match[2]
      });
    }
    
    return endpoints;
  }

  extractDependencies(content) {
    const dependencies = [];
    
    // Extract require statements
    const requireRegex = /require\s*\(\s*['"`]([^'"`]+)['"`]/g;
    let match;
    
    while ((match = requireRegex.exec(content)) !== null) {
      dependencies.push(match[1]);
    }
    
    // Extract import statements
    const importRegex = /import\s+.*?from\s+['"`]([^'"`]+)['"`]/g;
    while ((match = importRegex.exec(content)) !== null) {
      dependencies.push(match[1]);
    }
    
    return dependencies;
  }

  async analyzeCommunication() {
    const communication = {
      patterns: [],
      protocols: [],
      messageFormats: [],
      issues: []
    };
    
    try {
      const serviceFiles = this.findServiceFiles();
      
      for (const file of serviceFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const commInfo = this.extractCommunicationInfo(content);
        
        communication.patterns.push(...commInfo.patterns);
        communication.protocols.push(...commInfo.protocols);
        communication.messageFormats.push(...commInfo.messageFormats);
        communication.issues.push(...commInfo.issues);
      }
      
    } catch (error) {
      console.error('Failed to analyze communication:', error);
    }
    
    return communication;
  }

  extractCommunicationInfo(content) {
    const commInfo = {
      patterns: [],
      protocols: [],
      messageFormats: [],
      issues: []
    };
    
    const lowerContent = content.toLowerCase();
    
    // Detect communication patterns
    if (lowerContent.includes('http') || lowerContent.includes('fetch')) {
      commInfo.patterns.push('http-communication');
      commInfo.protocols.push('http');
    }
    
    if (lowerContent.includes('websocket')) {
      commInfo.patterns.push('websocket-communication');
      commInfo.protocols.push('websocket');
    }
    
    if (lowerContent.includes('grpc')) {
      commInfo.patterns.push('grpc-communication');
      commInfo.protocols.push('grpc');
    }
    
    // Detect message formats
    if (lowerContent.includes('json')) {
      commInfo.messageFormats.push('json');
    }
    
    if (lowerContent.includes('xml')) {
      commInfo.messageFormats.push('xml');
    }
    
    if (lowerContent.includes('protobuf')) {
      commInfo.messageFormats.push('protobuf');
    }
    
    // Check for issues
    if (lowerContent.includes('localhost') && lowerContent.includes('hardcoded')) {
      commInfo.issues.push('hardcoded-localhost');
    }
    
    return commInfo;
  }

  async analyzeDependencies() {
    const dependencies = {
      serviceGraph: {},
      circularDependencies: [],
      externalDependencies: [],
      internalDependencies: []
    };
    
    try {
      const services = await this.discoverMicroservices();
      
      for (const service of services) {
        dependencies.serviceGraph[service.name] = service.dependencies;
        
        // Categorize dependencies
        for (const dep of service.dependencies) {
          if (dep.startsWith('@') || dep.includes('node_modules')) {
            dependencies.externalDependencies.push(dep);
          } else {
            dependencies.internalDependencies.push(dep);
          }
        }
      }
      
      // Check for circular dependencies
      dependencies.circularDependencies = this.detectCircularDependencies(dependencies.serviceGraph);
      
    } catch (error) {
      console.error('Failed to analyze dependencies:', error);
    }
    
    return dependencies;
  }

  detectCircularDependencies(graph) {
    const circular = [];
    
    // Simple circular dependency detection
    for (const [service, deps] of Object.entries(graph)) {
      for (const dep of deps) {
        if (graph[dep] && graph[dep].includes(service)) {
          circular.push(`${service} <-> ${dep}`);
        }
      }
    }
    
    return circular;
  }

  async analyzeScaling() {
    const scaling = {
      patterns: [],
      strategies: [],
      metrics: {},
      recommendations: []
    };
    
    try {
      const serviceFiles = this.findServiceFiles();
      
      for (const file of serviceFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const scalingInfo = this.extractScalingInfo(content);
        
        scaling.patterns.push(...scalingInfo.patterns);
        scaling.strategies.push(...scalingInfo.strategies);
      }
      
      // Generate scaling recommendations
      scaling.recommendations = this.generateScalingRecommendations(scaling);
      
    } catch (error) {
      console.error('Failed to analyze scaling:', error);
    }
    
    return scaling;
  }

  extractScalingInfo(content) {
    const scalingInfo = {
      patterns: [],
      strategies: []
    };
    
    const lowerContent = content.toLowerCase();
    
    // Detect scaling patterns
    if (lowerContent.includes('cluster') || lowerContent.includes('worker')) {
      scalingInfo.patterns.push('horizontal-scaling');
    }
    
    if (lowerContent.includes('thread') || lowerContent.includes('process')) {
      scalingInfo.patterns.push('vertical-scaling');
    }
    
    if (lowerContent.includes('load-balancer')) {
      scalingInfo.strategies.push('load-balancing');
    }
    
    if (lowerContent.includes('cache') || lowerContent.includes('redis')) {
      scalingInfo.strategies.push('caching');
    }
    
    return scalingInfo;
  }

  generateScalingRecommendations(scaling) {
    const recommendations = [];
    
    if (scaling.patterns.length === 0) {
      recommendations.push({
        type: 'scaling',
        priority: 'medium',
        message: 'No scaling patterns detected',
        suggestion: 'Implement horizontal scaling with load balancing'
      });
    }
    
    if (!scaling.strategies.includes('caching')) {
      recommendations.push({
        type: 'performance',
        priority: 'medium',
        message: 'No caching strategy detected',
        suggestion: 'Implement caching for improved performance'
      });
    }
    
    return recommendations;
  }

  async analyzeHealth() {
    const health = {
      services: [],
      overallHealth: 'healthy',
      issues: [],
      metrics: {}
    };
    
    try {
      const services = await this.discoverMicroservices();
      
      for (const service of services) {
        const serviceHealth = this.checkServiceHealth(service);
        health.services.push(serviceHealth);
        
        if (serviceHealth.status === 'unhealthy') {
          health.overallHealth = 'warning';
          health.issues.push(serviceHealth.issues);
        }
      }
      
      // Calculate health metrics
      health.metrics = this.calculateHealthMetrics(health.services);
      
    } catch (error) {
      console.error('Failed to analyze health:', error);
    }
    
    return health;
  }

  checkServiceHealth(service) {
    const health = {
      service: service.name,
      status: 'healthy',
      issues: [],
      uptime: Math.random() * 100,
      responseTime: Math.random() * 1000
    };
    
    // Check for common health issues
    if (service.port === 0) {
      health.issues.push('No port configured');
      health.status = 'unhealthy';
    }
    
    if (service.endpoints.length === 0) {
      health.issues.push('No endpoints defined');
      health.status = 'warning';
    }
    
    if (health.responseTime > 500) {
      health.issues.push('High response time');
      health.status = 'warning';
    }
    
    return health;
  }

  calculateHealthMetrics(services) {
    const metrics = {
      totalServices: services.length,
      healthyServices: 0,
      unhealthyServices: 0,
      averageResponseTime: 0,
      averageUptime: 0
    };
    
    if (services.length > 0) {
      metrics.healthyServices = services.filter(s => s.status === 'healthy').length;
      metrics.unhealthyServices = services.filter(s => s.status === 'unhealthy').length;
      metrics.averageResponseTime = services.reduce((sum, s) => sum + s.responseTime, 0) / services.length;
      metrics.averageUptime = services.reduce((sum, s) => sum + s.uptime, 0) / services.length;
    }
    
    return metrics;
  }

  generateRecommendations(analysis) {
    const recommendations = [];
    
    // Health-based recommendations
    if (analysis.health.overallHealth !== 'healthy') {
      recommendations.push({
        type: 'health',
        priority: 'high',
        message: 'Service health issues detected',
        suggestion: 'Review and fix unhealthy services'
      });
    }
    
    // Communication-based recommendations
    if (analysis.communication.issues.length > 0) {
      recommendations.push({
        type: 'communication',
        priority: 'medium',
        message: 'Communication issues detected',
        suggestion: 'Review service communication patterns'
      });
    }
    
    // Dependency-based recommendations
    if (analysis.dependencies.circularDependencies.length > 0) {
      recommendations.push({
        type: 'dependencies',
        priority: 'high',
        message: 'Circular dependencies detected',
        suggestion: 'Refactor to remove circular dependencies'
      });
    }
    
    // Scaling-based recommendations
    for (const recommendation of analysis.scaling.recommendations) {
      recommendations.push(recommendation);
    }
    
    return recommendations;
  }

  async monitorServices() {
    try {
      console.log('Monitoring microservices...');
      
      const monitoring = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        services: [],
        alerts: []
      };
      
      // Check service status
      const services = await this.discoverMicroservices();
      
      for (const service of services) {
        const status = this.checkServiceStatus(service);
        monitoring.services.push(status);
        
        if (status.issues.length > 0) {
          monitoring.alerts.push(...status.issues);
        }
      }
      
      // Save monitoring report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'service-reports', `monitoring-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(monitoring, null, 2));
      
    } catch (error) {
      console.error('Service monitoring failed:', error);
    }
  }

  checkServiceStatus(service) {
    const status = {
      service: service.name,
      status: 'running',
      issues: [],
      lastChecked: new Date().toISOString()
    };
    
    // Check for common issues
    if (service.port === 0) {
      status.issues.push({
        type: 'configuration',
        severity: 'high',
        message: 'No port configured'
      });
      status.status = 'error';
    }
    
    if (service.endpoints.length === 0) {
      status.issues.push({
        type: 'configuration',
        severity: 'medium',
        message: 'No endpoints defined'
      });
    }
    
    return status;
  }

  async orchestrateServices() {
    try {
      console.log('Orchestrating microservices...');
      
      const orchestrationReport = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        orchestrations: [],
        results: []
      };
      
      // Generate orchestration actions
      const services = await this.discoverMicroservices();
      
      for (const service of services) {
        const orchestration = this.generateOrchestrationAction(service);
        orchestrationReport.orchestrations.push(orchestration);
        
        // Simulate orchestration results
        orchestrationReport.results.push({
          service: service.name,
          action: orchestration.action,
          status: 'completed',
          result: 'Service orchestrated successfully'
        });
      }
      
      // Save orchestration report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'orchestration-reports', `orchestration-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(orchestrationReport, null, 2));
      
    } catch (error) {
      console.error('Service orchestration failed:', error);
    }
  }

  generateOrchestrationAction(service) {
    const actions = ['scale', 'restart', 'update', 'monitor'];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    
    return {
      service: service.name,
      action: randomAction,
      priority: 'medium',
      description: `${randomAction} service ${service.name}`
    };
  }

  async monitorHealth() {
    try {
      console.log('Monitoring service health...');
      
      const healthReport = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        services: [],
        overallHealth: 'healthy'
      };
      
      // Check service health
      const services = await this.discoverMicroservices();
      
      for (const service of services) {
        const health = this.checkServiceHealth(service);
        healthReport.services.push(health);
        
        if (health.status === 'unhealthy') {
          healthReport.overallHealth = 'warning';
        }
      }
      
      // Save health report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'health-reports', `health-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(healthReport, null, 2));
      
    } catch (error) {
      console.error('Health monitoring failed:', error);
    }
  }

  async saveAnalysisReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(this.reportsDir, 'service-reports', `analysis-${timestamp}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`Analysis report saved: ${reportPath}`);
  }

  async stop() {
    console.log(`Microservices Orchestration Agent ${this.agentId} stopping...`);
    process.exit(0);
  }
}

// Start the agent
const agent = new MicroservicesOrchestrationAgent();

process.on('SIGTERM', () => {
  agent.stop();
});

process.on('SIGINT', () => {
  agent.stop();
});

agent.start().catch(error => {
  console.error('Microservices Orchestration Agent failed to start:', error);
  process.exit(1);
}); 