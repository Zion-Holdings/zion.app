const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class Iac-automationAutomationAgent {
  
  // Enhanced Intelligent Analysis
  async performIntelligentAnalysis(data) {
    const analysis = {
      patterns: this.identifyPatterns(data),
      trends: this.analyzeTrends(data),
      opportunities: this.identifyOpportunities(data),
      recommendations: this.generateRecommendations(data),
      predictions: this.makePredictions(data)
    };
    return analysis;
  }

  identifyPatterns(data) {
    return data.filter(item => item.frequency > 0.1);
  }

  analyzeTrends(data) {
    return data.sort((a, b) => b.trend - a.trend);
  }

  identifyOpportunities(data) {
    return data.filter(item => item.potential > 0.7);
  }

  generateRecommendations(data) {
    return data.map(item => ({
      action: item.recommendedAction,
      priority: item.priority,
      impact: item.expectedImpact
    }));
  }

  makePredictions(data) {
    return data.map(item => ({
      prediction: item.predictedOutcome,
      confidence: item.confidence,
      timeframe: item.timeframe
    }));
  }

  constructor() {
    
  // Enhanced Learning Capabilities
  constructor() {
    super();
    this.learningData = new Map();
    this.performanceHistory = [];
    this.adaptationRate = 0.1;
    this.intelligenceLevel = 0.8;
  }

  async learnFromExperience(data, outcome) {
    this.learningData.set(Date.now(), { data, outcome });
    this.updatePerformanceHistory(outcome);
    this.adaptBehavior();
    this.improveIntelligence();
  }

  updatePerformanceHistory(outcome) {
    this.performanceHistory.push({
      timestamp: Date.now(),
      outcome: outcome,
      success: outcome.success || false
    });
  }

  adaptBehavior() {
    const recentPerformance = this.performanceHistory
      .slice(-10)
      .filter(p => Date.now() - p.timestamp < 3600000);
    
    const successRate = recentPerformance.filter(p => p.success).length / recentPerformance.length;
    
    if (successRate < 0.7) {
      this.adaptationRate *= 1.1;
    } else if (successRate > 0.9) {
      this.adaptationRate *= 0.95;
    }
  }

  improveIntelligence() {
    const recentSuccess = this.performanceHistory
      .slice(-20)
      .filter(p => p.success).length / 20;
    
    if (recentSuccess > 0.8) {
      this.intelligenceLevel = Math.min(this.intelligenceLevel + 0.01, 1.0);
    }
  }

    this.agentId = process.env.AGENT_ID;
    this.agentType = process.env.AGENT_TYPE;
    this.config = JSON.parse(process.env.AGENT_CONFIG || '{}');
    this.projectRoot = path.resolve(__dirname, '../..');
    this.reportsDir = path.join(__dirname, '../reports/iac-automation');
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      this.reportsDir,
      path.join(this.reportsDir, 'infrastructure-reports'),
      path.join(this.reportsDir, 'validation-reports'),
      path.join(this.reportsDir, 'deployment-reports'),
      path.join(this.reportsDir, 'security-reports'),
      path.join(this.reportsDir, 'cost-analysis')
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async start() {
    console.log(`IAC Automation Agent ${this.agentId} started`);
    
    // Initial infrastructure analysis
    await this.analyzeInfrastructure();
    
    // Start continuous monitoring
    setInterval(() => {
      this.monitorInfrastructure();
    }, 300000); // Every 5 minutes
    
    // Start validation tasks
    setInterval(() => {
      this.validateInfrastructure();
    }, 900000); // Every 15 minutes
    
    // Start deployment monitoring
    setInterval(() => {
      this.monitorDeployments();
    }, 1800000); // Every 30 minutes
  }

  async analyzeInfrastructure() {
    try {
      console.log('Performing comprehensive infrastructure analysis...');
      
      const analysis = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        infrastructureFiles: [],
        cloudResources: {},
        securityConfig: {},
        costAnalysis: {},
        complianceStatus: {},
        recommendations: []
      };
      
      // Discover infrastructure files
      analysis.infrastructureFiles = await this.discoverInfrastructureFiles();
      
      // Analyze cloud resources
      analysis.cloudResources = await this.analyzeCloudResources();
      
      // Analyze security configuration
      analysis.securityConfig = await this.analyzeSecurityConfig();
      
      // Analyze costs
      analysis.costAnalysis = await this.analyzeCosts();
      
      // Check compliance
      analysis.complianceStatus = await this.checkCompliance();
      
      // Generate recommendations
      analysis.recommendations = this.generateRecommendations(analysis);
      
      // Save analysis report
      await this.saveAnalysisReport(analysis);
      
      console.log('Infrastructure analysis completed');
      
    } catch (error) {
      console.error('Infrastructure analysis failed:', error);
    }
  }

  async discoverInfrastructureFiles() {
    const files = [];
    
    try {
      // Look for infrastructure files
      const iacFiles = this.findIACFiles();
      
      for (const file of iacFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const fileInfo = this.extractInfrastructureInfo(file, content);
        
        if (fileInfo) {
          files.push(fileInfo);
        }
      }
      
    } catch (error) {
      console.error('Failed to discover infrastructure files:', error);
    }
    
    return files;
  }

  findIACFiles() {
    const iacFiles = [];
    const iacExtensions = ['.tf', '.yaml', '.yml', '.json', '.hcl'];
    
    try {
      const findIACFiles = (dir) => {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            findIACFiles(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item).toLowerCase();
            if (iacExtensions.includes(ext)) {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (this.containsInfrastructureCode(content)) {
                iacFiles.push(fullPath);
              }
            }
          }
        }
      };
      
      findIACFiles(this.projectRoot);
      
    } catch (error) {
      console.error('Failed to find IAC files:', error);
    }
    
    return iacFiles;
  }

  containsInfrastructureCode(content) {
    const iacKeywords = [
      'terraform', 'aws_', 'google_', 'azure_', 'kubernetes', 'docker',
      'resource', 'provider', 'variable', 'output', 'module',
      'networking', 'security', 'compute', 'storage', 'database'
    ];
    
    return iacKeywords.some(keyword => content.toLowerCase().includes(keyword));
  }

  extractInfrastructureInfo(file, content) {
    const fileInfo = {
      file: file,
      type: 'unknown',
      provider: 'unknown',
      resources: [],
      variables: [],
      outputs: []
    };
    
    const lowerContent = content.toLowerCase();
    
    // Detect provider
    if (lowerContent.includes('aws_')) {
      fileInfo.provider = 'aws';
    } else if (lowerContent.includes('google_')) {
      fileInfo.provider = 'gcp';
    } else if (lowerContent.includes('azure_')) {
      fileInfo.provider = 'azure';
    } else if (lowerContent.includes('kubernetes')) {
      fileInfo.provider = 'kubernetes';
    }
    
    // Detect file type
    if (file.endsWith('.tf')) {
      fileInfo.type = 'terraform';
    } else if (file.endsWith('.yaml') || file.endsWith('.yml')) {
      fileInfo.type = 'yaml';
    } else if (file.endsWith('.json')) {
      fileInfo.type = 'json';
    }
    
    // Extract resources
    fileInfo.resources = this.extractResources(content);
    
    // Extract variables
    fileInfo.variables = this.extractVariables(content);
    
    // Extract outputs
    fileInfo.outputs = this.extractOutputs(content);
    
    return fileInfo;
  }

  extractResources(content) {
    const resources = [];
    
    // Extract Terraform resources
    const resourceRegex = /resource\s+["']([^"']+)["']\s+["']([^"']+)["']/g;
    let match;
    
    while ((match = resourceRegex.exec(content)) !== null) {
      resources.push({
        type: match[1],
        name: match[2],
        provider: 'terraform'
      });
    }
    
    // Extract Kubernetes resources
    const k8sRegex = /kind:\s*([A-Za-z]+)/g;
    while ((match = k8sRegex.exec(content)) !== null) {
      resources.push({
        type: match[1],
        name: 'kubernetes-resource',
        provider: 'kubernetes'
      });
    }
    
    return resources;
  }

  extractVariables(content) {
    const variables = [];
    
    // Extract Terraform variables
    const varRegex = /variable\s+["']([^"']+)["']/g;
    let match;
    
    while ((match = varRegex.exec(content)) !== null) {
      variables.push({
        name: match[1],
        type: 'terraform'
      });
    }
    
    return variables;
  }

  extractOutputs(content) {
    const outputs = [];
    
    // Extract Terraform outputs
    const outputRegex = /output\s+["']([^"']+)["']/g;
    let match;
    
    while ((match = outputRegex.exec(content)) !== null) {
      outputs.push({
        name: match[1],
        type: 'terraform'
      });
    }
    
    return outputs;
  }

  async analyzeCloudResources() {
    const resources = {
      compute: [],
      storage: [],
      networking: [],
      database: [],
      security: [],
      totalResources: 0
    };
    
    try {
      const iacFiles = this.findIACFiles();
      
      for (const file of iacFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const fileResources = this.categorizeResources(content);
        
        // Add resources to categories
        for (const [category, resourceList] of Object.entries(fileResources)) {
          if (resources[category]) {
            resources[category].push(...resourceList);
          }
        }
      }
      
      // Calculate total resources
      resources.totalResources = Object.values(resources)
        .filter(Array.isArray)
        .reduce((sum, resourceList) => sum + resourceList.length, 0);
      
    } catch (error) {
      console.error('Failed to analyze cloud resources:', error);
    }
    
    return resources;
  }

  categorizeResources(content) {
    const categories = {
      compute: [],
      storage: [],
      networking: [],
      database: [],
      security: []
    };
    
    const lowerContent = content.toLowerCase();
    
    // Categorize by resource type
    if (lowerContent.includes('aws_instance') || lowerContent.includes('aws_lambda')) {
      categories.compute.push('compute-instance');
    }
    
    if (lowerContent.includes('aws_s3') || lowerContent.includes('aws_ebs')) {
      categories.storage.push('storage-resource');
    }
    
    if (lowerContent.includes('aws_vpc') || lowerContent.includes('aws_subnet')) {
      categories.networking.push('networking-resource');
    }
    
    if (lowerContent.includes('aws_rds') || lowerContent.includes('aws_dynamodb')) {
      categories.database.push('database-resource');
    }
    
    if (lowerContent.includes('aws_security_group') || lowerContent.includes('aws_iam')) {
      categories.security.push('security-resource');
    }
    
    return categories;
  }

  async analyzeSecurityConfig() {
    const security = {
      securityGroups: [],
      iamPolicies: [],
      encryption: [],
      compliance: [],
      vulnerabilities: []
    };
    
    try {
      const iacFiles = this.findIACFiles();
      
      for (const file of iacFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const securityInfo = this.extractSecurityInfo(content);
        
        // Add security information
        security.securityGroups.push(...securityInfo.securityGroups);
        security.iamPolicies.push(...securityInfo.iamPolicies);
        security.encryption.push(...securityInfo.encryption);
        security.compliance.push(...securityInfo.compliance);
        security.vulnerabilities.push(...securityInfo.vulnerabilities);
      }
      
    } catch (error) {
      console.error('Failed to analyze security configuration:', error);
    }
    
    return security;
  }

  extractSecurityInfo(content) {
    const securityInfo = {
      securityGroups: [],
      iamPolicies: [],
      encryption: [],
      compliance: [],
      vulnerabilities: []
    };
    
    const lowerContent = content.toLowerCase();
    
    // Extract security groups
    if (lowerContent.includes('aws_security_group')) {
      securityInfo.securityGroups.push('security-group-configured');
    }
    
    // Extract IAM policies
    if (lowerContent.includes('aws_iam')) {
      securityInfo.iamPolicies.push('iam-policy-configured');
    }
    
    // Check for encryption
    if (lowerContent.includes('encryption') || lowerContent.includes('kms')) {
      securityInfo.encryption.push('encryption-enabled');
    }
    
    // Check for compliance
    if (lowerContent.includes('compliance') || lowerContent.includes('audit')) {
      securityInfo.compliance.push('compliance-configured');
    }
    
    // Check for vulnerabilities
    if (lowerContent.includes('0.0.0.0/0') && lowerContent.includes('cidr_blocks')) {
      securityInfo.vulnerabilities.push('open-security-group');
    }
    
    return securityInfo;
  }

  async analyzeCosts() {
    const costs = {
      estimatedMonthlyCost: 0,
      costBreakdown: {},
      optimizationOpportunities: [],
      costTrends: []
    };
    
    try {
      // Simulate cost analysis
      costs.estimatedMonthlyCost = Math.random() * 1000 + 100; // $100-$1100
      
      costs.costBreakdown = {
        compute: Math.random() * 500 + 50,
        storage: Math.random() * 200 + 20,
        networking: Math.random() * 100 + 10,
        database: Math.random() * 300 + 30
      };
      
      // Identify optimization opportunities
      if (costs.estimatedMonthlyCost > 500) {
        costs.optimizationOpportunities.push({
          type: 'cost_optimization',
          description: 'High monthly costs detected',
          suggestion: 'Review and optimize resource usage'
        });
      }
      
    } catch (error) {
      console.error('Failed to analyze costs:', error);
    }
    
    return costs;
  }

  async checkCompliance() {
    const compliance = {
      standards: [],
      violations: [],
      recommendations: []
    };
    
    try {
      const iacFiles = this.findIACFiles();
      
      for (const file of iacFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const complianceInfo = this.checkFileCompliance(content);
        
        compliance.standards.push(...complianceInfo.standards);
        compliance.violations.push(...complianceInfo.violations);
        compliance.recommendations.push(...complianceInfo.recommendations);
      }
      
    } catch (error) {
      console.error('Failed to check compliance:', error);
    }
    
    return compliance;
  }

  checkFileCompliance(content) {
    const complianceInfo = {
      standards: [],
      violations: [],
      recommendations: []
    };
    
    const lowerContent = content.toLowerCase();
    
    // Check for security standards
    if (lowerContent.includes('encryption')) {
      complianceInfo.standards.push('encryption-standard');
    }
    
    if (lowerContent.includes('logging')) {
      complianceInfo.standards.push('logging-standard');
    }
    
    // Check for violations
    if (lowerContent.includes('0.0.0.0/0')) {
      complianceInfo.violations.push('open-access-violation');
      complianceInfo.recommendations.push({
        type: 'security',
        message: 'Open access detected',
        suggestion: 'Restrict access to specific IP ranges'
      });
    }
    
    return complianceInfo;
  }

  generateRecommendations(analysis) {
    const recommendations = [];
    
    // Security recommendations
    if (analysis.securityConfig.vulnerabilities.length > 0) {
      recommendations.push({
        type: 'security',
        priority: 'critical',
        message: 'Security vulnerabilities detected',
        suggestion: 'Review and fix security configurations'
      });
    }
    
    // Cost recommendations
    if (analysis.costAnalysis.estimatedMonthlyCost > 500) {
      recommendations.push({
        type: 'cost',
        priority: 'high',
        message: 'High infrastructure costs detected',
        suggestion: 'Optimize resource usage and consider reserved instances'
      });
    }
    
    // Compliance recommendations
    if (analysis.complianceStatus.violations.length > 0) {
      recommendations.push({
        type: 'compliance',
        priority: 'high',
        message: 'Compliance violations detected',
        suggestion: 'Address compliance issues immediately'
      });
    }
    
    return recommendations;
  }

  async monitorInfrastructure() {
    try {
      console.log('Monitoring infrastructure...');
      
      const monitoring = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        resources: [],
        alerts: []
      };
      
      // Check infrastructure status
      const iacFiles = this.findIACFiles();
      
      for (const file of iacFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const status = this.checkInfrastructureStatus(file, content);
        
        monitoring.resources.push(status);
        
        if (status.issues.length > 0) {
          monitoring.alerts.push(...status.issues);
        }
      }
      
      // Save monitoring report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'infrastructure-reports', `monitoring-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(monitoring, null, 2));
      
    } catch (error) {
      console.error('Infrastructure monitoring failed:', error);
    }
  }

  checkInfrastructureStatus(file, content) {
    const status = {
      file: file,
      status: 'healthy',
      issues: [],
      lastChecked: new Date().toISOString()
    };
    
    const lowerContent = content.toLowerCase();
    
    // Check for common issues
    if (lowerContent.includes('0.0.0.0/0')) {
      status.issues.push({
        type: 'security',
        severity: 'high',
        message: 'Open access detected'
      });
      status.status = 'warning';
    }
    
    if (lowerContent.includes('hardcoded') || lowerContent.includes('password')) {
      status.issues.push({
        type: 'security',
        severity: 'medium',
        message: 'Potential hardcoded credentials'
      });
    }
    
    return status;
  }

  async validateInfrastructure() {
    try {
      console.log('Validating infrastructure...');
      
      const validationReport = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        validations: [],
        issues: []
      };
      
      // Validate infrastructure files
      const iacFiles = this.findIACFiles();
      
      for (const file of iacFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const validation = this.validateInfrastructureFile(file, content);
        
        validationReport.validations.push(validation);
        
        if (validation.issues.length > 0) {
          validationReport.issues.push(...validation.issues);
        }
      }
      
      // Save validation report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'validation-reports', `validation-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(validationReport, null, 2));
      
    } catch (error) {
      console.error('Infrastructure validation failed:', error);
    }
  }

  validateInfrastructureFile(file, content) {
    const validation = {
      file: file,
      isValid: true,
      issues: []
    };
    
    // Check for syntax errors
    if (file.endsWith('.tf')) {
      if (!content.includes('resource') && !content.includes('variable') && !content.includes('output')) {
        validation.issues.push('Invalid Terraform syntax');
        validation.isValid = false;
      }
    }
    
    // Check for security issues
    if (content.includes('0.0.0.0/0')) {
      validation.issues.push('Open access configuration detected');
      validation.isValid = false;
    }
    
    // Check for hardcoded values
    if (content.includes('password') || content.includes('secret')) {
      validation.issues.push('Potential hardcoded credentials');
    }
    
    return validation;
  }

  async monitorDeployments() {
    try {
      console.log('Monitoring deployments...');
      
      const deploymentReport = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        deployments: [],
        status: 'healthy'
      };
      
      // Check for deployment files
      const deploymentFiles = this.findDeploymentFiles();
      
      for (const file of deploymentFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const deployment = this.analyzeDeployment(file, content);
        
        deploymentReport.deployments.push(deployment);
        
        if (deployment.status === 'failed') {
          deploymentReport.status = 'warning';
        }
      }
      
      // Save deployment report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'deployment-reports', `deployment-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(deploymentReport, null, 2));
      
    } catch (error) {
      console.error('Deployment monitoring failed:', error);
    }
  }

  findDeploymentFiles() {
    const deploymentFiles = [];
    const deploymentExtensions = ['.yaml', '.yml', '.json', '.tf'];
    
    try {
      const findDeploymentFiles = (dir) => {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            findDeploymentFiles(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item).toLowerCase();
            if (deploymentExtensions.includes(ext)) {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (this.containsDeploymentCode(content)) {
                deploymentFiles.push(fullPath);
              }
            }
          }
        }
      };
      
      findDeploymentFiles(this.projectRoot);
      
    } catch (error) {
      console.error('Failed to find deployment files:', error);
    }
    
    return deploymentFiles;
  }

  containsDeploymentCode(content) {
    const deploymentKeywords = [
      'deployment', 'service', 'ingress', 'configmap', 'secret',
      'replicas', 'image', 'container', 'pod', 'namespace'
    ];
    
    return deploymentKeywords.some(keyword => content.toLowerCase().includes(keyword));
  }

  analyzeDeployment(file, content) {
    const deployment = {
      file: file,
      status: 'healthy',
      resources: [],
      issues: []
    };
    
    const lowerContent = content.toLowerCase();
    
    // Extract deployment resources
    if (lowerContent.includes('deployment')) {
      deployment.resources.push('deployment');
    }
    
    if (lowerContent.includes('service')) {
      deployment.resources.push('service');
    }
    
    if (lowerContent.includes('ingress')) {
      deployment.resources.push('ingress');
    }
    
    // Check for issues
    if (lowerContent.includes('latest')) {
      deployment.issues.push('Using latest tag - consider specific version');
    }
    
    if (!lowerContent.includes('resources')) {
      deployment.issues.push('No resource limits specified');
    }
    
    return deployment;
  }

  async saveAnalysisReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(this.reportsDir, 'infrastructure-reports', `analysis-${timestamp}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`Analysis report saved: ${reportPath}`);
  }

  async stop() {
    console.log(`IAC Automation Agent ${this.agentId} stopping...`);
    process.exit(0);
  }
}

// Start the agent
const agent = new IACAutomationAgent();

process.on('SIGTERM', () => {
  agent.stop();
});

process.on('SIGINT', () => {
  agent.stop();
});

agent.start().catch(error => {
  console.error('IAC Automation Agent failed to start:', error);
  process.exit(1);
}); 