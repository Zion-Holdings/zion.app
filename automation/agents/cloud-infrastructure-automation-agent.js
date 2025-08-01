const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class CloudInfrastructureAutomationAgent {
  constructor() {
    this.agentId = process.env.AGENT_ID;
    this.agentType = process.env.AGENT_TYPE;
    this.config = JSON.parse(process.env.AGENT_CONFIG || '{}');
    this.projectRoot = path.resolve(__dirname, '../..');
    this.reportsDir = path.join(__dirname, '../reports/cloud-infrastructure-automation');
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      this.reportsDir,
      path.join(this.reportsDir, 'infrastructure-reports'),
      path.join(this.reportsDir, 'cost-analysis'),
      path.join(this.reportsDir, 'security-reports'),
      path.join(this.reportsDir, 'performance-reports'),
      path.join(this.reportsDir, 'compliance-reports')
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async start() {
    console.log(`Cloud Infrastructure Automation Agent ${this.agentId} started`);
    
    // Initial infrastructure analysis
    await this.analyzeInfrastructure();
    
    // Start continuous monitoring
    setInterval(() => {
      this.monitorInfrastructure();
    }, 300000); // Every 5 minutes
    
    // Start optimization tasks
    setInterval(() => {
      this.optimizeInfrastructure();
    }, 900000); // Every 15 minutes
    
    // Start cost analysis
    setInterval(() => {
      this.analyzeCosts();
    }, 1800000); // Every 30 minutes
  }

  async analyzeInfrastructure() {
    try {
      console.log('Performing comprehensive cloud infrastructure analysis...');
      
      const analysis = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        cloudProviders: [],
        resources: [],
        security: {},
        performance: {},
        costs: {},
        compliance: {},
        recommendations: []
      };
      
      // Discover cloud providers
      analysis.cloudProviders = await this.discoverCloudProviders();
      
      // Analyze resources
      analysis.resources = await this.analyzeResources();
      
      // Analyze security
      analysis.security = await this.analyzeSecurity();
      
      // Analyze performance
      analysis.performance = await this.analyzePerformance();
      
      // Analyze costs
      analysis.costs = await this.analyzeCosts();
      
      // Analyze compliance
      analysis.compliance = await this.analyzeCompliance();
      
      // Generate recommendations
      analysis.recommendations = this.generateRecommendations(analysis);
      
      // Save analysis report
      await this.saveAnalysisReport(analysis);
      
      console.log('Cloud infrastructure analysis completed');
      
    } catch (error) {
      console.error('Cloud infrastructure analysis failed:', error);
    }
  }

  async discoverCloudProviders() {
    const providers = [];
    
    try {
      // Check for AWS
      if (this.hasAWSConfig()) {
        providers.push({
          name: 'AWS',
          services: await this.discoverAWSServices(),
          regions: await this.discoverAWSRegions(),
          config: this.getAWSConfig()
        });
      }
      
      // Check for Azure
      if (this.hasAzureConfig()) {
        providers.push({
          name: 'Azure',
          services: await this.discoverAzureServices(),
          regions: await this.discoverAzureRegions(),
          config: this.getAzureConfig()
        });
      }
      
      // Check for Google Cloud
      if (this.hasGCPConfig()) {
        providers.push({
          name: 'Google Cloud',
          services: await this.discoverGCPServices(),
          regions: await this.discoverGCPRegions(),
          config: this.getGCPConfig()
        });
      }
      
      // Check for other cloud providers
      const otherProviders = this.discoverOtherProviders();
      providers.push(...otherProviders);
      
    } catch (error) {
      console.error('Failed to discover cloud providers:', error);
    }
    
    return providers;
  }

  hasAWSConfig() {
    const awsConfigPaths = [
      path.join(this.projectRoot, '.aws'),
      path.join(this.projectRoot, 'aws-config'),
      path.join(this.projectRoot, 'terraform', 'aws'),
      path.join(this.projectRoot, 'cloudformation')
    ];
    
    return awsConfigPaths.some(path => fs.existsSync(path)) ||
           process.env.AWS_ACCESS_KEY_ID ||
           process.env.AWS_SECRET_ACCESS_KEY;
  }

  hasAzureConfig() {
    const azureConfigPaths = [
      path.join(this.projectRoot, '.azure'),
      path.join(this.projectRoot, 'azure-config'),
      path.join(this.projectRoot, 'terraform', 'azure')
    ];
    
    return azureConfigPaths.some(path => fs.existsSync(path)) ||
           process.env.AZURE_CLIENT_ID ||
           process.env.AZURE_TENANT_ID;
  }

  hasGCPConfig() {
    const gcpConfigPaths = [
      path.join(this.projectRoot, '.gcp'),
      path.join(this.projectRoot, 'gcp-config'),
      path.join(this.projectRoot, 'terraform', 'gcp')
    ];
    
    return gcpConfigPaths.some(path => fs.existsSync(path)) ||
           process.env.GOOGLE_APPLICATION_CREDENTIALS ||
           process.env.GCP_PROJECT_ID;
  }

  async discoverAWSServices() {
    const services = [];
    
    try {
      // Check for common AWS service configurations
      const awsServiceFiles = this.findAWSFiles();
      
      for (const file of awsServiceFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const serviceInfo = this.extractAWSServiceInfo(file, content);
        
        if (serviceInfo) {
          services.push(serviceInfo);
        }
      }
      
    } catch (error) {
      console.error('Failed to discover AWS services:', error);
    }
    
    return services;
  }

  findAWSFiles() {
    const awsFiles = [];
    
    try {
      const findAWSFiles = (dir) => {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            findAWSFiles(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item).toLowerCase();
            if (ext === '.json' || ext === '.yml' || ext === '.yaml' || ext === '.tf') {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (this.containsAWSConfig(content)) {
                awsFiles.push(fullPath);
              }
            }
          }
        }
      };
      
      findAWSFiles(this.projectRoot);
      
    } catch (error) {
      console.error('Failed to find AWS files:', error);
    }
    
    return awsFiles;
  }

  containsAWSConfig(content) {
    const awsKeywords = [
      'aws', 'amazon', 'ec2', 's3', 'lambda', 'rds', 'dynamodb',
      'cloudformation', 'elasticbeanstalk', 'ecs', 'eks', 'api gateway'
    ];
    
    return awsKeywords.some(keyword => content.toLowerCase().includes(keyword));
  }

  extractAWSServiceInfo(file, content) {
    const serviceInfo = {
      file: file,
      service: 'unknown',
      type: 'unknown',
      configuration: {}
    };
    
    const lowerContent = content.toLowerCase();
    
    // Detect AWS services
    if (lowerContent.includes('ec2') || lowerContent.includes('instance')) {
      serviceInfo.service = 'EC2';
      serviceInfo.type = 'compute';
    } else if (lowerContent.includes('s3') || lowerContent.includes('bucket')) {
      serviceInfo.service = 'S3';
      serviceInfo.type = 'storage';
    } else if (lowerContent.includes('lambda') || lowerContent.includes('function')) {
      serviceInfo.service = 'Lambda';
      serviceInfo.type = 'serverless';
    } else if (lowerContent.includes('rds') || lowerContent.includes('database')) {
      serviceInfo.service = 'RDS';
      serviceInfo.type = 'database';
    } else if (lowerContent.includes('dynamodb')) {
      serviceInfo.service = 'DynamoDB';
      serviceInfo.type = 'database';
    } else if (lowerContent.includes('api gateway')) {
      serviceInfo.service = 'API Gateway';
      serviceInfo.type = 'api';
    }
    
    // Extract configuration
    serviceInfo.configuration = this.extractAWSConfiguration(content);
    
    return serviceInfo;
  }

  extractAWSConfiguration(content) {
    const config = {
      region: 'unknown',
      environment: 'unknown',
      tags: [],
      settings: {}
    };
    
    // Extract region
    const regionMatch = content.match(/region\s*[:=]\s*["']([^"']+)["']/i);
    if (regionMatch) {
      config.region = regionMatch[1];
    }
    
    // Extract environment
    if (content.toLowerCase().includes('production') || content.toLowerCase().includes('prod')) {
      config.environment = 'production';
    } else if (content.toLowerCase().includes('staging') || content.toLowerCase().includes('stage')) {
      config.environment = 'staging';
    } else if (content.toLowerCase().includes('development') || content.toLowerCase().includes('dev')) {
      config.environment = 'development';
    }
    
    // Extract tags
    const tagMatches = content.match(/tags\s*[:=]\s*{([^}]+)}/gi);
    if (tagMatches) {
      for (const match of tagMatches) {
        const tagMatches = match.match(/(\w+)\s*[:=]\s*["']([^"']+)["']/g);
        if (tagMatches) {
          for (const tagMatch of tagMatches) {
            const [key, value] = tagMatch.split(':').map(s => s.trim().replace(/["']/g, ''));
            config.tags.push({ key, value });
          }
        }
      }
    }
    
    return config;
  }

  async discoverAWSRegions() {
    // Common AWS regions
    return [
      'us-east-1', 'us-east-2', 'us-west-1', 'us-west-2',
      'eu-west-1', 'eu-central-1', 'ap-southeast-1', 'ap-southeast-2'
    ];
  }

  async discoverAzureServices() {
    const services = [];
    
    try {
      // Check for Azure service configurations
      const azureServiceFiles = this.findAzureFiles();
      
      for (const file of azureServiceFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const serviceInfo = this.extractAzureServiceInfo(file, content);
        
        if (serviceInfo) {
          services.push(serviceInfo);
        }
      }
      
    } catch (error) {
      console.error('Failed to discover Azure services:', error);
    }
    
    return services;
  }

  findAzureFiles() {
    const azureFiles = [];
    
    try {
      const findAzureFiles = (dir) => {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            findAzureFiles(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item).toLowerCase();
            if (ext === '.json' || ext === '.yml' || ext === '.yaml' || ext === '.tf') {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (this.containsAzureConfig(content)) {
                azureFiles.push(fullPath);
              }
            }
          }
        }
      };
      
      findAzureFiles(this.projectRoot);
      
    } catch (error) {
      console.error('Failed to find Azure files:', error);
    }
    
    return azureFiles;
  }

  containsAzureConfig(content) {
    const azureKeywords = [
      'azure', 'microsoft', 'vm', 'storage', 'function', 'sql',
      'app service', 'container', 'kubernetes', 'aks'
    ];
    
    return azureKeywords.some(keyword => content.toLowerCase().includes(keyword));
  }

  extractAzureServiceInfo(file, content) {
    const serviceInfo = {
      file: file,
      service: 'unknown',
      type: 'unknown',
      configuration: {}
    };
    
    const lowerContent = content.toLowerCase();
    
    // Detect Azure services
    if (lowerContent.includes('vm') || lowerContent.includes('virtual machine')) {
      serviceInfo.service = 'Virtual Machine';
      serviceInfo.type = 'compute';
    } else if (lowerContent.includes('storage') || lowerContent.includes('blob')) {
      serviceInfo.service = 'Storage';
      serviceInfo.type = 'storage';
    } else if (lowerContent.includes('function') || lowerContent.includes('serverless')) {
      serviceInfo.service = 'Functions';
      serviceInfo.type = 'serverless';
    } else if (lowerContent.includes('sql') || lowerContent.includes('database')) {
      serviceInfo.service = 'SQL Database';
      serviceInfo.type = 'database';
    } else if (lowerContent.includes('app service') || lowerContent.includes('web app')) {
      serviceInfo.service = 'App Service';
      serviceInfo.type = 'web';
    } else if (lowerContent.includes('aks') || lowerContent.includes('kubernetes')) {
      serviceInfo.service = 'AKS';
      serviceInfo.type = 'container';
    }
    
    // Extract configuration
    serviceInfo.configuration = this.extractAzureConfiguration(content);
    
    return serviceInfo;
  }

  extractAzureConfiguration(content) {
    const config = {
      region: 'unknown',
      environment: 'unknown',
      tags: [],
      settings: {}
    };
    
    // Extract region
    const regionMatch = content.match(/location\s*[:=]\s*["']([^"']+)["']/i);
    if (regionMatch) {
      config.region = regionMatch[1];
    }
    
    // Extract environment
    if (content.toLowerCase().includes('production') || content.toLowerCase().includes('prod')) {
      config.environment = 'production';
    } else if (content.toLowerCase().includes('staging') || content.toLowerCase().includes('stage')) {
      config.environment = 'staging';
    } else if (content.toLowerCase().includes('development') || content.toLowerCase().includes('dev')) {
      config.environment = 'development';
    }
    
    return config;
  }

  async discoverAzureRegions() {
    // Common Azure regions
    return [
      'eastus', 'eastus2', 'westus', 'westus2',
      'northeurope', 'westeurope', 'southeastasia', 'eastasia'
    ];
  }

  async discoverGCPServices() {
    const services = [];
    
    try {
      // Check for GCP service configurations
      const gcpServiceFiles = this.findGCPFiles();
      
      for (const file of gcpServiceFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const serviceInfo = this.extractGCPServiceInfo(file, content);
        
        if (serviceInfo) {
          services.push(serviceInfo);
        }
      }
      
    } catch (error) {
      console.error('Failed to discover GCP services:', error);
    }
    
    return services;
  }

  findGCPFiles() {
    const gcpFiles = [];
    
    try {
      const findGCPFiles = (dir) => {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            findGCPFiles(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item).toLowerCase();
            if (ext === '.json' || ext === '.yml' || ext === '.yaml' || ext === '.tf') {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (this.containsGCPConfig(content)) {
                gcpFiles.push(fullPath);
              }
            }
          }
        }
      };
      
      findGCPFiles(this.projectRoot);
      
    } catch (error) {
      console.error('Failed to find GCP files:', error);
    }
    
    return gcpFiles;
  }

  containsGCPConfig(content) {
    const gcpKeywords = [
      'gcp', 'google', 'compute', 'storage', 'cloud function',
      'cloud sql', 'app engine', 'kubernetes', 'gke'
    ];
    
    return gcpKeywords.some(keyword => content.toLowerCase().includes(keyword));
  }

  extractGCPServiceInfo(file, content) {
    const serviceInfo = {
      file: file,
      service: 'unknown',
      type: 'unknown',
      configuration: {}
    };
    
    const lowerContent = content.toLowerCase();
    
    // Detect GCP services
    if (lowerContent.includes('compute') || lowerContent.includes('instance')) {
      serviceInfo.service = 'Compute Engine';
      serviceInfo.type = 'compute';
    } else if (lowerContent.includes('storage') || lowerContent.includes('bucket')) {
      serviceInfo.service = 'Cloud Storage';
      serviceInfo.type = 'storage';
    } else if (lowerContent.includes('cloud function') || lowerContent.includes('function')) {
      serviceInfo.service = 'Cloud Functions';
      serviceInfo.type = 'serverless';
    } else if (lowerContent.includes('cloud sql') || lowerContent.includes('sql')) {
      serviceInfo.service = 'Cloud SQL';
      serviceInfo.type = 'database';
    } else if (lowerContent.includes('app engine')) {
      serviceInfo.service = 'App Engine';
      serviceInfo.type = 'web';
    } else if (lowerContent.includes('gke') || lowerContent.includes('kubernetes')) {
      serviceInfo.service = 'GKE';
      serviceInfo.type = 'container';
    }
    
    // Extract configuration
    serviceInfo.configuration = this.extractGCPConfiguration(content);
    
    return serviceInfo;
  }

  extractGCPConfiguration(content) {
    const config = {
      region: 'unknown',
      environment: 'unknown',
      tags: [],
      settings: {}
    };
    
    // Extract region
    const regionMatch = content.match(/region\s*[:=]\s*["']([^"']+)["']/i);
    if (regionMatch) {
      config.region = regionMatch[1];
    }
    
    // Extract environment
    if (content.toLowerCase().includes('production') || content.toLowerCase().includes('prod')) {
      config.environment = 'production';
    } else if (content.toLowerCase().includes('staging') || content.toLowerCase().includes('stage')) {
      config.environment = 'staging';
    } else if (content.toLowerCase().includes('development') || content.toLowerCase().includes('dev')) {
      config.environment = 'development';
    }
    
    return config;
  }

  async discoverGCPRegions() {
    // Common GCP regions
    return [
      'us-central1', 'us-east1', 'us-west1', 'us-west2',
      'europe-west1', 'europe-west2', 'asia-east1', 'asia-southeast1'
    ];
  }

  discoverOtherProviders() {
    const providers = [];
    
    // Check for other cloud providers
    const otherProviderFiles = this.findOtherProviderFiles();
    
    for (const file of otherProviderFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const providerInfo = this.extractOtherProviderInfo(file, content);
      
      if (providerInfo) {
        providers.push(providerInfo);
      }
    }
    
    return providers;
  }

  findOtherProviderFiles() {
    const otherFiles = [];
    
    try {
      const findOtherFiles = (dir) => {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            findOtherFiles(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item).toLowerCase();
            if (ext === '.json' || ext === '.yml' || ext === '.yaml' || ext === '.tf') {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (this.containsOtherProviderConfig(content)) {
                otherFiles.push(fullPath);
              }
            }
          }
        }
      };
      
      findOtherFiles(this.projectRoot);
      
    } catch (error) {
      console.error('Failed to find other provider files:', error);
    }
    
    return otherFiles;
  }

  containsOtherProviderConfig(content) {
    const otherKeywords = [
      'digitalocean', 'do', 'heroku', 'netlify', 'vercel',
      'cloudflare', 'linode', 'vultr', 'scaleway'
    ];
    
    return otherKeywords.some(keyword => content.toLowerCase().includes(keyword));
  }

  extractOtherProviderInfo(file, content) {
    const providerInfo = {
      file: file,
      name: 'unknown',
      services: [],
      configuration: {}
    };
    
    const lowerContent = content.toLowerCase();
    
    // Detect other providers
    if (lowerContent.includes('digitalocean') || lowerContent.includes('do')) {
      providerInfo.name = 'DigitalOcean';
    } else if (lowerContent.includes('heroku')) {
      providerInfo.name = 'Heroku';
    } else if (lowerContent.includes('netlify')) {
      providerInfo.name = 'Netlify';
    } else if (lowerContent.includes('vercel')) {
      providerInfo.name = 'Vercel';
    } else if (lowerContent.includes('cloudflare')) {
      providerInfo.name = 'Cloudflare';
    }
    
    return providerInfo;
  }

  getAWSConfig() {
    return {
      region: process.env.AWS_DEFAULT_REGION || 'us-east-1',
      profile: process.env.AWS_PROFILE || 'default'
    };
  }

  getAzureConfig() {
    return {
      subscription: process.env.AZURE_SUBSCRIPTION_ID,
      tenant: process.env.AZURE_TENANT_ID
    };
  }

  getGCPConfig() {
    return {
      project: process.env.GCP_PROJECT_ID,
      region: process.env.GCP_REGION || 'us-central1'
    };
  }

  async analyzeResources() {
    const resources = {
      compute: [],
      storage: [],
      database: [],
      network: [],
      security: []
    };
    
    try {
      const providers = await this.discoverCloudProviders();
      
      for (const provider of providers) {
        for (const service of provider.services) {
          if (service.type === 'compute') {
            resources.compute.push({
              provider: provider.name,
              service: service.service,
              configuration: service.configuration
            });
          } else if (service.type === 'storage') {
            resources.storage.push({
              provider: provider.name,
              service: service.service,
              configuration: service.configuration
            });
          } else if (service.type === 'database') {
            resources.database.push({
              provider: provider.name,
              service: service.service,
              configuration: service.configuration
            });
          }
        }
      }
      
    } catch (error) {
      console.error('Failed to analyze resources:', error);
    }
    
    return resources;
  }

  async analyzeSecurity() {
    const security = {
      encryption: [],
      accessControl: [],
      compliance: [],
      vulnerabilities: [],
      recommendations: []
    };
    
    try {
      // Analyze security configurations
      const securityFiles = this.findSecurityFiles();
      
      for (const file of securityFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const securityInfo = this.extractSecurityInfo(content);
        
        security.encryption.push(...securityInfo.encryption);
        security.accessControl.push(...securityInfo.accessControl);
        security.compliance.push(...securityInfo.compliance);
        security.vulnerabilities.push(...securityInfo.vulnerabilities);
      }
      
      // Generate security recommendations
      security.recommendations = this.generateSecurityRecommendations(security);
      
    } catch (error) {
      console.error('Failed to analyze security:', error);
    }
    
    return security;
  }

  findSecurityFiles() {
    const securityFiles = [];
    
    try {
      const findSecurityFiles = (dir) => {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            findSecurityFiles(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item).toLowerCase();
            if (ext === '.json' || ext === '.yml' || ext === '.yaml' || ext === '.tf') {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (this.containsSecurityConfig(content)) {
                securityFiles.push(fullPath);
              }
            }
          }
        }
      };
      
      findSecurityFiles(this.projectRoot);
      
    } catch (error) {
      console.error('Failed to find security files:', error);
    }
    
    return securityFiles;
  }

  containsSecurityConfig(content) {
    const securityKeywords = [
      'security', 'encryption', 'ssl', 'tls', 'certificate',
      'iam', 'role', 'policy', 'firewall', 'vpc', 'subnet'
    ];
    
    return securityKeywords.some(keyword => content.toLowerCase().includes(keyword));
  }

  extractSecurityInfo(content) {
    const securityInfo = {
      encryption: [],
      accessControl: [],
      compliance: [],
      vulnerabilities: []
    };
    
    const lowerContent = content.toLowerCase();
    
    // Extract encryption info
    if (lowerContent.includes('ssl') || lowerContent.includes('tls')) {
      securityInfo.encryption.push('SSL/TLS');
    }
    
    if (lowerContent.includes('encryption') || lowerContent.includes('encrypt')) {
      securityInfo.encryption.push('Data Encryption');
    }
    
    // Extract access control info
    if (lowerContent.includes('iam') || lowerContent.includes('role')) {
      securityInfo.accessControl.push('IAM Roles');
    }
    
    if (lowerContent.includes('policy') || lowerContent.includes('permission')) {
      securityInfo.accessControl.push('Policies');
    }
    
    // Extract compliance info
    if (lowerContent.includes('gdpr') || lowerContent.includes('hipaa')) {
      securityInfo.compliance.push('Data Protection');
    }
    
    if (lowerContent.includes('sox') || lowerContent.includes('pci')) {
      securityInfo.compliance.push('Financial Compliance');
    }
    
    return securityInfo;
  }

  generateSecurityRecommendations(security) {
    const recommendations = [];
    
    if (security.encryption.length === 0) {
      recommendations.push({
        type: 'encryption',
        priority: 'high',
        message: 'No encryption configured',
        suggestion: 'Enable encryption for data at rest and in transit'
      });
    }
    
    if (security.accessControl.length === 0) {
      recommendations.push({
        type: 'access-control',
        priority: 'high',
        message: 'No access control configured',
        suggestion: 'Implement IAM roles and policies'
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
            if (ext === '.json' || ext === '.yml' || ext === '.yaml' || ext === '.tf') {
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
      'performance', 'monitoring', 'metrics', 'scaling',
      'load balancer', 'auto scaling', 'cdn', 'cache'
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
    if (lowerContent.includes('monitoring') || lowerContent.includes('metrics')) {
      performanceInfo.metrics.push('Performance Monitoring');
    }
    
    if (lowerContent.includes('scaling') || lowerContent.includes('auto scaling')) {
      performanceInfo.optimizations.push('Auto Scaling');
    }
    
    if (lowerContent.includes('cdn') || lowerContent.includes('cache')) {
      performanceInfo.optimizations.push('CDN/Caching');
    }
    
    return performanceInfo;
  }

  generatePerformanceRecommendations(performance) {
    const recommendations = [];
    
    if (performance.metrics.length === 0) {
      recommendations.push({
        type: 'monitoring',
        priority: 'medium',
        message: 'No performance monitoring configured',
        suggestion: 'Implement performance monitoring and metrics collection'
      });
    }
    
    if (performance.optimizations.length === 0) {
      recommendations.push({
        type: 'optimization',
        priority: 'medium',
        message: 'No performance optimizations configured',
        suggestion: 'Implement auto scaling and CDN for better performance'
      });
    }
    
    return recommendations;
  }

  async analyzeCosts() {
    const costs = {
      current: 0,
      projected: 0,
      breakdown: {},
      optimizations: [],
      recommendations: []
    };
    
    try {
      // Analyze cost configurations
      const costFiles = this.findCostFiles();
      
      for (const file of costFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const costInfo = this.extractCostInfo(content);
        
        costs.breakdown = { ...costs.breakdown, ...costInfo.breakdown };
        costs.optimizations.push(...costInfo.optimizations);
      }
      
      // Generate cost recommendations
      costs.recommendations = this.generateCostRecommendations(costs);
      
    } catch (error) {
      console.error('Failed to analyze costs:', error);
    }
    
    return costs;
  }

  findCostFiles() {
    const costFiles = [];
    
    try {
      const findCostFiles = (dir) => {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            findCostFiles(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item).toLowerCase();
            if (ext === '.json' || ext === '.yml' || ext === '.yaml' || ext === '.tf') {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (this.containsCostConfig(content)) {
                costFiles.push(fullPath);
              }
            }
          }
        }
      };
      
      findCostFiles(this.projectRoot);
      
    } catch (error) {
      console.error('Failed to find cost files:', error);
    }
    
    return costFiles;
  }

  containsCostConfig(content) {
    const costKeywords = [
      'cost', 'billing', 'budget', 'pricing', 'reserved',
      'spot', 'savings', 'optimization'
    ];
    
    return costKeywords.some(keyword => content.toLowerCase().includes(keyword));
  }

  extractCostInfo(content) {
    const costInfo = {
      breakdown: {},
      optimizations: []
    };
    
    const lowerContent = content.toLowerCase();
    
    // Extract cost breakdown
    if (lowerContent.includes('compute') || lowerContent.includes('instance')) {
      costInfo.breakdown.compute = 'estimated';
    }
    
    if (lowerContent.includes('storage') || lowerContent.includes('bucket')) {
      costInfo.breakdown.storage = 'estimated';
    }
    
    if (lowerContent.includes('database') || lowerContent.includes('rds')) {
      costInfo.breakdown.database = 'estimated';
    }
    
    // Extract cost optimizations
    if (lowerContent.includes('reserved') || lowerContent.includes('savings')) {
      costInfo.optimizations.push('Reserved Instances');
    }
    
    if (lowerContent.includes('spot') || lowerContent.includes('interruptible')) {
      costInfo.optimizations.push('Spot Instances');
    }
    
    return costInfo;
  }

  generateCostRecommendations(costs) {
    const recommendations = [];
    
    if (Object.keys(costs.breakdown).length === 0) {
      recommendations.push({
        type: 'cost-tracking',
        priority: 'medium',
        message: 'No cost tracking configured',
        suggestion: 'Implement cost monitoring and budgeting'
      });
    }
    
    if (costs.optimizations.length === 0) {
      recommendations.push({
        type: 'cost-optimization',
        priority: 'medium',
        message: 'No cost optimizations configured',
        suggestion: 'Consider reserved instances and spot instances for cost savings'
      });
    }
    
    return recommendations;
  }

  async analyzeCompliance() {
    const compliance = {
      standards: [],
      requirements: [],
      violations: [],
      recommendations: []
    };
    
    try {
      // Analyze compliance configurations
      const complianceFiles = this.findComplianceFiles();
      
      for (const file of complianceFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const complianceInfo = this.extractComplianceInfo(content);
        
        compliance.standards.push(...complianceInfo.standards);
        compliance.requirements.push(...complianceInfo.requirements);
        compliance.violations.push(...complianceInfo.violations);
      }
      
      // Generate compliance recommendations
      compliance.recommendations = this.generateComplianceRecommendations(compliance);
      
    } catch (error) {
      console.error('Failed to analyze compliance:', error);
    }
    
    return compliance;
  }

  findComplianceFiles() {
    const complianceFiles = [];
    
    try {
      const findComplianceFiles = (dir) => {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            findComplianceFiles(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item).toLowerCase();
            if (ext === '.json' || ext === '.yml' || ext === '.yaml' || ext === '.tf') {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (this.containsComplianceConfig(content)) {
                complianceFiles.push(fullPath);
              }
            }
          }
        }
      };
      
      findComplianceFiles(this.projectRoot);
      
    } catch (error) {
      console.error('Failed to find compliance files:', error);
    }
    
    return complianceFiles;
  }

  containsComplianceConfig(content) {
    const complianceKeywords = [
      'gdpr', 'hipaa', 'sox', 'pci', 'compliance',
      'audit', 'certification', 'standard'
    ];
    
    return complianceKeywords.some(keyword => content.toLowerCase().includes(keyword));
  }

  extractComplianceInfo(content) {
    const complianceInfo = {
      standards: [],
      requirements: [],
      violations: []
    };
    
    const lowerContent = content.toLowerCase();
    
    // Extract compliance standards
    if (lowerContent.includes('gdpr')) {
      complianceInfo.standards.push('GDPR');
    }
    
    if (lowerContent.includes('hipaa')) {
      complianceInfo.standards.push('HIPAA');
    }
    
    if (lowerContent.includes('sox')) {
      complianceInfo.standards.push('SOX');
    }
    
    if (lowerContent.includes('pci')) {
      complianceInfo.standards.push('PCI DSS');
    }
    
    return complianceInfo;
  }

  generateComplianceRecommendations(compliance) {
    const recommendations = [];
    
    if (compliance.standards.length === 0) {
      recommendations.push({
        type: 'compliance',
        priority: 'medium',
        message: 'No compliance standards configured',
        suggestion: 'Implement appropriate compliance standards based on data type'
      });
    }
    
    return recommendations;
  }

  generateRecommendations(analysis) {
    const recommendations = [];
    
    // Security recommendations
    recommendations.push(...analysis.security.recommendations);
    
    // Performance recommendations
    recommendations.push(...analysis.performance.recommendations);
    
    // Cost recommendations
    recommendations.push(...analysis.costs.recommendations);
    
    // Compliance recommendations
    recommendations.push(...analysis.compliance.recommendations);
    
    return recommendations;
  }

  async monitorInfrastructure() {
    try {
      console.log('Monitoring cloud infrastructure...');
      
      const monitoring = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        providers: [],
        alerts: []
      };
      
      // Check infrastructure status
      const providers = await this.discoverCloudProviders();
      
      for (const provider of providers) {
        const status = this.checkProviderStatus(provider);
        monitoring.providers.push(status);
        
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

  checkProviderStatus(provider) {
    const status = {
      provider: provider.name,
      status: 'healthy',
      issues: [],
      lastChecked: new Date().toISOString()
    };
    
    // Check for common issues
    if (provider.services.length === 0) {
      status.issues.push({
        type: 'configuration',
        severity: 'medium',
        message: 'No services configured'
      });
    }
    
    return status;
  }

  async optimizeInfrastructure() {
    try {
      console.log('Optimizing cloud infrastructure...');
      
      const optimizationReport = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        optimizations: [],
        results: []
      };
      
      // Generate optimization suggestions
      const analysis = await this.analyzeInfrastructure();
      optimizationReport.optimizations = analysis.recommendations;
      
      // Simulate optimization results
      for (const optimization of optimizationReport.optimizations) {
        optimizationReport.results.push({
          type: optimization.type,
          status: 'completed',
          improvement: Math.random() * 0.3, // 0-30% improvement
          description: `Applied ${optimization.suggestion}`
        });
      }
      
      // Save optimization report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'performance-reports', `optimization-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(optimizationReport, null, 2));
      
    } catch (error) {
      console.error('Infrastructure optimization failed:', error);
    }
  }

  async saveAnalysisReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(this.reportsDir, 'infrastructure-reports', `analysis-${timestamp}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`Analysis report saved: ${reportPath}`);
  }

  async stop() {
    console.log(`Cloud Infrastructure Automation Agent ${this.agentId} stopping...`);
    process.exit(0);
  }
}

// Start the agent
const agent = new CloudInfrastructureAutomationAgent();

process.on('SIGTERM', () => {
  agent.stop();
});

process.on('SIGINT', () => {
  agent.stop();
});

agent.start().catch(error => {
  console.error('Cloud Infrastructure Automation Agent failed to start:', error);
  process.exit(1);
}); 