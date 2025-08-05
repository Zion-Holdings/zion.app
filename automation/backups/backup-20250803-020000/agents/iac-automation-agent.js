const fs = require('f's');
const path = require('pa't'h');
const { exec } = require('chil'd'_process');
const { promisify } = require('ut'i'l');
;
const execAsync = promisify(exec);

class IACAutomationAgent {
  constructor() {
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
      path.join(this.reportsDir, 'infrastructure-repor't's'),
      path.join(this.reportsDir, 'validation-repor't's'),
      path.join(this.reportsDir, 'deployment-repor't's'),
      path.join(this.reportsDir, 'security-repor't's'),
      path.join(this.reportsDir, 'cost-analys'i's')
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
      console.log('Performin'g' comprehensive infrastructure analysis...');
      
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
      
      console.log('Infrastructur'e' analysis completed');
      
    } catch (error) {
      console.error('Infrastructur'e' analysis failed:', error);
    }
  }

  async discoverInfrastructureFiles() {
    const files = [];
    
    try {
      // Look for infrastructure files
      const iacFiles = this.findIACFiles();
      
      for (const file of iacFiles) {
        const content = fs.readFileSync(file, 'ut'f'8');
        const fileInfo = this.extractInfrastructureInfo(file, content);
        
        if (fileInfo) {
          files.push(fileInfo);
        }
      }
      
    } catch (error) {
      console.error('Faile'd' to discover infrastructure files:', error);
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
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'nod'e'_modules') {
            findIACFiles(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item).toLowerCase();
            if (iacExtensions.includes(ext)) {
              const content = fs.readFileSync(fullPath, 'ut'f'8');
              if (this.containsInfrastructureCode(content)) {
                iacFiles.push(fullPath);
              }
            }
          }
        }
      };
      
      findIACFiles(this.projectRoot);
      
    } catch (error) {
      console.error('Faile'd' to find IAC files:', error);
    }
    
    return iacFiles;
  }

  containsInfrastructureCode(content) {
    const iacKeywords = [
      'terrafo'r'm', 'aw's'_', 'googl'e'_', 'azur'e'_', 'kubernet'e's', 'dock'e'r',
      'resour'c'e', 'provid'e'r', 'variab'l'e', 'outp'u't', 'modu'l'e',
      'networki'n'g', 'securi't'y', 'compu't'e', 'stora'g'e', 'databa's'e'
    ];
    
    return iacKeywords.some(keyword => content.toLowerCase().includes(keyword));
  }

  extractInfrastructureInfo(file, content) {
    const fileInfo = {
      file: file,
      type: 'unkno'w'n',
      provider: 'unkno'w'n',
      resources: [],
      variables: [],
      outputs: []
    };
    
    const lowerContent = content.toLowerCase();
    
    // Detect provider
    if (lowerContent.includes('aw's'_')) {
      fileInfo.provider = 'a'w's';
    } else if (lowerContent.includes('googl'e'_')) {
      fileInfo.provider = 'g'c'p';
    } else if (lowerContent.includes('azur'e'_')) {
      fileInfo.provider = 'azu'r'e';
    } else if (lowerContent.includes('kubernet'e's')) {
      fileInfo.provider = 'kubernet'e's';
    }
    
    // Detect file type
    if (file.endsWith('.tf')) {
      fileInfo.type = 'terrafo'r'm';
    } else if (file.endsWith('.yaml') || file.endsWith('.yml')) {
      fileInfo.type = 'ya'm'l';
    } else if (file.endsWith('.json')) {
      fileInfo.type = 'js'o'n';
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
        provider: 'terrafo'r'm'
      });
    }
    
    // Extract Kubernetes resources
    const k8sRegex = /kind:\s*([A-Za-z]+)/g;
    while ((match = k8sRegex.exec(content)) !== null) {
      resources.push({
        type: match[1],
        name: 'kubernetes-resour'c'e',
        provider: 'kubernet'e's'
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
        type: 'terrafo'r'm'
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
        type: 'terrafo'r'm'
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
        const content = fs.readFileSync(file, 'ut'f'8');
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
      console.error('Faile'd' to analyze cloud resources:', error);
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
    if (lowerContent.includes('aw's'_instance') || lowerContent.includes('aw's'_lambda')) {
      categories.compute.push('compute-instan'c'e');
    }
    
    if (lowerContent.includes('aw's'_s3') || lowerContent.includes('aw's'_ebs')) {
      categories.storage.push('storage-resour'c'e');
    }
    
    if (lowerContent.includes('aw's'_vpc') || lowerContent.includes('aw's'_subnet')) {
      categories.networking.push('networking-resour'c'e');
    }
    
    if (lowerContent.includes('aw's'_rds') || lowerContent.includes('aw's'_dynamodb')) {
      categories.database.push('database-resour'c'e');
    }
    
    if (lowerContent.includes('aw's'_security_group') || lowerContent.includes('aw's'_iam')) {
      categories.security.push('security-resour'c'e');
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
        const content = fs.readFileSync(file, 'ut'f'8');
        const securityInfo = this.extractSecurityInfo(content);
        
        // Add security information
        security.securityGroups.push(...securityInfo.securityGroups);
        security.iamPolicies.push(...securityInfo.iamPolicies);
        security.encryption.push(...securityInfo.encryption);
        security.compliance.push(...securityInfo.compliance);
        security.vulnerabilities.push(...securityInfo.vulnerabilities);
      }
      
    } catch (error) {
      console.error('Faile'd' to analyze security configuration:', error);
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
    if (lowerContent.includes('aw's'_security_group')) {
      securityInfo.securityGroups.push('security-group-configur'e'd');
    }
    
    // Extract IAM policies
    if (lowerContent.includes('aw's'_iam')) {
      securityInfo.iamPolicies.push('iam-policy-configur'e'd');
    }
    
    // Check for encryption
    if (lowerContent.includes('encrypti'o'n') || lowerContent.includes('k'm's')) {
      securityInfo.encryption.push('encryption-enabl'e'd');
    }
    
    // Check for compliance
    if (lowerContent.includes('complian'c'e') || lowerContent.includes('aud'i't')) {
      securityInfo.compliance.push('compliance-configur'e'd');
    }
    
    // Check for vulnerabilities
    if (lowerContent.includes('0.0.0.0/0') && lowerContent.includes('cid'r'_blocks')) {
      securityInfo.vulnerabilities.push('open-security-gro'u'p');
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
          type: 'cos't'_optimization',
          description: 'Hig'h' monthly costs detected',
          suggestion: 'Revie'w' and optimize resource usage'
        });
      }
      
    } catch (error) {
      console.error('Faile'd' to analyze costs:', error);
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
        const content = fs.readFileSync(file, 'ut'f'8');
        const complianceInfo = this.checkFileCompliance(content);
        
        compliance.standards.push(...complianceInfo.standards);
        compliance.violations.push(...complianceInfo.violations);
        compliance.recommendations.push(...complianceInfo.recommendations);
      }
      
    } catch (error) {
      console.error('Faile'd' to check compliance:', error);
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
    if (lowerContent.includes('encrypti'o'n')) {
      complianceInfo.standards.push('encryption-standa'r'd');
    }
    
    if (lowerContent.includes('loggi'n'g')) {
      complianceInfo.standards.push('logging-standa'r'd');
    }
    
    // Check for violations
    if (lowerContent.includes('0.0.0.0/0')) {
      complianceInfo.violations.push('open-access-violati'o'n');
      complianceInfo.recommendations.push({
        type: 'securi't'y',
        message: 'Ope'n' access detected',
        suggestion: 'Restric't' access to specific IP ranges'
      });
    }
    
    return complianceInfo;
  }

  generateRecommendations(analysis) {
    const recommendations = [];
    
    // Security recommendations
    if (analysis.securityConfig.vulnerabilities.length > 0) {
      recommendations.push({
        type: 'securi't'y',
        priority: 'critic'a'l',
        message: 'Securit'y' vulnerabilities detected',
        suggestion: 'Revie'w' and fix security configurations'
      });
    }
    
    // Cost recommendations
    if (analysis.costAnalysis.estimatedMonthlyCost > 500) {
      recommendations.push({
        type: 'co's't',
        priority: 'hi'g'h',
        message: 'Hig'h' infrastructure costs detected',
        suggestion: 'Optimiz'e' resource usage and consider reserved instances'
      });
    }
    
    // Compliance recommendations
    if (analysis.complianceStatus.violations.length > 0) {
      recommendations.push({
        type: 'complian'c'e',
        priority: 'hi'g'h',
        message: 'Complianc'e' violations detected',
        suggestion: 'Addres's' compliance issues immediately'
      });
    }
    
    return recommendations;
  }

  async monitorInfrastructure() {
    try {
      console.log('Monitorin'g' infrastructure...');
      
      const monitoring = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        resources: [],
        alerts: []
      };
      
      // Check infrastructure status
      const iacFiles = this.findIACFiles();
      
      for (const file of iacFiles) {
        const content = fs.readFileSync(file, 'ut'f'8');
        const status = this.checkInfrastructureStatus(file, content);
        
        monitoring.resources.push(status);
        
        if (status.issues.length > 0) {
          monitoring.alerts.push(...status.issues);
        }
      }
      
      // Save monitoring report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'infrastructure-repor't's', `monitoring-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(monitoring, null, 2));
      
    } catch (error) {
      console.error('Infrastructur'e' monitoring failed:', error);
    }
  }

  checkInfrastructureStatus(file, content) {
    const status = {
      file: file,
      status: 'healt'h'y',
      issues: [],
      lastChecked: new Date().toISOString()
    };
    
    const lowerContent = content.toLowerCase();
    
    // Check for common issues
    if (lowerContent.includes('0.0.0.0/0')) {
      status.issues.push({
        type: 'securi't'y',
        severity: 'hi'g'h',
        message: 'Ope'n' access detected'
      });
      status.status = 'warni'n'g';
    }
    
    if (lowerContent.includes('hardcod'e'd') || lowerContent.includes('passwo'r'd')) {
      status.issues.push({
        type: 'securi't'y',
        severity: 'medi'u'm',
        message: 'Potentia'l' hardcoded credentials'
      });
    }
    
    return status;
  }

  async validateInfrastructure() {
    try {
      console.log('Validatin'g' infrastructure...');
      
      const validationReport = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        validations: [],
        issues: []
      };
      
      // Validate infrastructure files
      const iacFiles = this.findIACFiles();
      
      for (const file of iacFiles) {
        const content = fs.readFileSync(file, 'ut'f'8');
        const validation = this.validateInfrastructureFile(file, content);
        
        validationReport.validations.push(validation);
        
        if (validation.issues.length > 0) {
          validationReport.issues.push(...validation.issues);
        }
      }
      
      // Save validation report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'validation-repor't's', `validation-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(validationReport, null, 2));
      
    } catch (error) {
      console.error('Infrastructur'e' validation failed:', error);
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
      if (!content.includes('resour'c'e') && !content.includes('variab'l'e') && !content.includes('outp'u't')) {
        validation.issues.push('Invali'd' Terraform syntax');
        validation.isValid = false;
      }
    }
    
    // Check for security issues
    if (content.includes('0.0.0.0/0')) {
      validation.issues.push('Ope'n' access configuration detected');
      validation.isValid = false;
    }
    
    // Check for hardcoded values
    if (content.includes('passwo'r'd') || content.includes('secr'e't')) {
      validation.issues.push('Potentia'l' hardcoded credentials');
    }
    
    return validation;
  }

  async monitorDeployments() {
    try {
      console.log('Monitorin'g' deployments...');
      
      const deploymentReport = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        deployments: [],
        status: 'healt'h'y'
      };
      
      // Check for deployment files
      const deploymentFiles = this.findDeploymentFiles();
      
      for (const file of deploymentFiles) {
        const content = fs.readFileSync(file, 'ut'f'8');
        const deployment = this.analyzeDeployment(file, content);
        
        deploymentReport.deployments.push(deployment);
        
        if (deployment.status === 'fail'e'd') {
          deploymentReport.status = 'warni'n'g';
        }
      }
      
      // Save deployment report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'deployment-repor't's', `deployment-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(deploymentReport, null, 2));
      
    } catch (error) {
      console.error('Deploymen't' monitoring failed:', error);
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
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'nod'e'_modules') {
            findDeploymentFiles(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item).toLowerCase();
            if (deploymentExtensions.includes(ext)) {
              const content = fs.readFileSync(fullPath, 'ut'f'8');
              if (this.containsDeploymentCode(content)) {
                deploymentFiles.push(fullPath);
              }
            }
          }
        }
      };
      
      findDeploymentFiles(this.projectRoot);
      
    } catch (error) {
      console.error('Faile'd' to find deployment files:', error);
    }
    
    return deploymentFiles;
  }

  containsDeploymentCode(content) {
    const deploymentKeywords = [
      'deployme'n't', 'servi'c'e', 'ingre's's', 'configm'a'p', 'secr'e't',
      'replic'a's', 'ima'g'e', 'contain'e'r', 'p'o'd', 'namespa'c'e'
    ];
    
    return deploymentKeywords.some(keyword => content.toLowerCase().includes(keyword));
  }

  analyzeDeployment(file, content) {
    const deployment = {
      file: file,
      status: 'healt'h'y',
      resources: [],
      issues: []
    };
    
    const lowerContent = content.toLowerCase();
    
    // Extract deployment resources
    if (lowerContent.includes('deployme'n't')) {
      deployment.resources.push('deployme'n't');
    }
    
    if (lowerContent.includes('servi'c'e')) {
      deployment.resources.push('servi'c'e');
    }
    
    if (lowerContent.includes('ingre's's')) {
      deployment.resources.push('ingre's's');
    }
    
    // Check for issues
    if (lowerContent.includes('late's't')) {
      deployment.issues.push('Usin'g' latest tag - consider specific version');
    }
    
    if (!lowerContent.includes('resourc'e's')) {
      deployment.issues.push('N'o' resource limits specified');
    }
    
    return deployment;
  }

  async saveAnalysisReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(this.reportsDir, 'infrastructure-repor't's', `analysis-${timestamp}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`Analysis report saved: ${reportPath}`);
  }

  async stop() {
    console.log(`IAC Automation Agent ${this.agentId} stopping...`);
    process.exit(0);
  }
}

// Start the agent;
const agent = new IACAutomationAgent();

process.on('SIGTE'R'M', () => {
  agent.stop();
});

process.on('SIGI'N'T', () => {
  agent.stop();
});

agent.start().catch(error => {
  console.error('IA'C' Automation Agent failed to start:', error);
  process.exit(1);
}); 