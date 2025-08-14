#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const SERVICES_DIR = path.join(ROOT, 'public', 'automation', 'services');
const GENERATED_SERVICES_DIR = path.join(ROOT, 'generated-services');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function readJson(p, f) { try { return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : f; } catch { return f; } }

class ServiceFactoryOrchestrator {
  constructor() {
    this.components = {};
    this.services = [];
    this.marketIntelligence = null;
    this.opportunityDetector = null;
    this.mvpGenerator = null;
    this.loadComponents();
  }

  async loadComponents() {
    try {
      // Load market intelligence
      const MarketIntelligence = require('./market-intelligence.cjs');
      this.marketIntelligence = new MarketIntelligence();
      
      // Load opportunity detector
      const OpportunityDetector = require('./opportunity-detector.cjs');
      this.opportunityDetector = new OpportunityDetector();
      
      // Load MVP generator
      const MVPGenerator = require('./mvp-generator.cjs');
      this.mvpGenerator = new MVPGenerator();
      
      console.log('✅ All service factory components loaded successfully');
    } catch (error) {
      console.error('❌ Failed to load components:', error.message);
    }
  }

  async runFullServiceCreation() {
    console.log('🚀 Starting full service creation pipeline...\n');
    
    try {
      // 1. Market Intelligence Analysis
      console.log('📊 Phase 1: Market Intelligence Analysis');
      const marketReport = await this.marketIntelligence.runFullAnalysis();
      
      // 2. Opportunity Detection
      console.log('\n🎯 Phase 2: Opportunity Detection');
      const opportunityReport = await this.opportunityDetector.runFullDetection();
      
      // 3. Service Generation
      console.log('\n🏗️  Phase 3: Service Generation');
      const generatedServices = await this.generateTopServices(opportunityReport);
      
      // 4. Generate Summary Report
      console.log('\n📋 Phase 4: Generating Summary Report');
      const summaryReport = await this.generateSummaryReport(marketReport, opportunityReport, generatedServices);
      
      console.log('\n🎉 Full service creation pipeline complete!');
      console.log(`📊 Market analysis: ${marketReport.summary.totalGaps} gaps, ${marketReport.summary.totalTrends} trends`);
      console.log(`🎯 Opportunities: ${opportunityReport.summary.totalOpportunities} identified, ${opportunityReport.summary.validatedOpportunities} validated`);
      console.log(`🏗️  Services generated: ${generatedServices.length}`);
      
      return summaryReport;
      
    } catch (error) {
      console.error('❌ Full service creation pipeline failed:', error);
      throw error;
    }
  }

  async generateTopServices(opportunityReport, count = 3) {
    const topOpportunities = opportunityReport.summary.topOpportunities.slice(0, count);
    const generatedServices = [];
    
    for (const opportunity of topOpportunities) {
      try {
        console.log(`\n🏗️  Generating service for: ${opportunity.name}`);
        
        const serviceDir = await this.mvpGenerator.generateMVP(
          opportunity.name.toLowerCase().replace(/\s+/g, '-'),
          opportunity.description,
          'python', // Default to Python for AI/ML services
          {
            marketSize: opportunity.marketSize,
            estimatedRevenue: opportunity.estimatedRevenue,
            technologyStack: opportunity.technologyStack
          }
        );
        
        generatedServices.push({
          name: opportunity.name,
          description: opportunity.description,
          projectDir: serviceDir,
          opportunity: opportunity,
          generatedAt: new Date().toISOString()
        });
        
        console.log(`✅ Service generated: ${opportunity.name}`);
        
      } catch (error) {
        console.error(`❌ Failed to generate service for ${opportunity.name}: ${error.message}`);
      }
    }
    
    return generatedServices;
  }

  async generateSummaryReport(marketReport, opportunityReport, generatedServices) {
    const summaryReport = {
      generatedAt: new Date().toISOString(),
      pipeline: 'Full Service Creation Pipeline',
      summary: {
        marketAnalysis: {
          gaps: marketReport.summary.totalGaps,
          trends: marketReport.summary.totalTrends,
          competitors: marketReport.summary.totalCompetitors
        },
        opportunities: {
          total: opportunityReport.summary.totalOpportunities,
          validated: opportunityReport.summary.validatedOpportunities,
          partiallyValidated: opportunityReport.summary.partiallyValidated
        },
        servicesGenerated: generatedServices.length
      },
      marketIntelligence: marketReport,
      opportunities: opportunityReport,
      generatedServices: generatedServices,
      recommendations: this.generateStrategicRecommendations(marketReport, opportunityReport, generatedServices)
    };

    const reportFile = path.join(SERVICES_DIR, `service-factory-summary-${Date.now()}.json`);
    ensureDir(path.dirname(reportFile));
    fs.writeFileSync(reportFile, JSON.stringify(summaryReport, null, 2));
    
    console.log(`✅ Summary report generated: ${reportFile}`);
    return summaryReport;
  }

  generateStrategicRecommendations(marketReport, opportunityReport, generatedServices) {
    const recommendations = [];
    
    // Market entry recommendations
    if (marketReport.summary.totalGaps > 0) {
      recommendations.push({
        type: 'Market Entry',
        priority: 'High',
        action: 'Focus on validated opportunities with low competition',
        reasoning: `${opportunityReport.summary.validatedOpportunities} opportunities validated with strong market signals`,
        timeline: '3-6 months',
        resources: 'Product team + 2-3 developers'
      });
    }
    
    // Technology recommendations
    if (generatedServices.length > 0) {
      recommendations.push({
        type: 'Technology Stack',
        priority: 'Medium',
        action: 'Standardize on Python/FastAPI for AI/ML services',
        reasoning: 'Python ecosystem provides best ML/AI libraries and fastest development',
        timeline: '1-2 months',
        resources: 'Tech lead + DevOps engineer'
      });
    }
    
    // Go-to-market recommendations
    recommendations.push({
      type: 'Go-to-Market',
      priority: 'High',
      action: 'Launch beta program with 3-5 early adopters',
      reasoning: 'Validate market demand and gather feedback before full launch',
      timeline: '2-3 months',
      resources: 'Product manager + Sales team'
    });
    
    return recommendations;
  }

  async createServiceFromBlueprint(blueprint, options = {}) {
    console.log(`🚀 Creating service from blueprint: ${blueprint.name}`);
    
    try {
      const serviceDir = await this.mvpGenerator.generateMVP(
        blueprint.name.toLowerCase().replace(/\s+/g, '-'),
        blueprint.description,
        options.language || 'python',
        options
      );
      
      console.log(`✅ Service created from blueprint: ${serviceDir}`);
      return serviceDir;
      
    } catch (error) {
      console.error(`❌ Failed to create service from blueprint: ${error.message}`);
      throw error;
    }
  }

  async analyzeAndCreateService(serviceName, serviceType, options = {}) {
    console.log(`🔍 Analyzing and creating service: ${serviceName}`);
    
    try {
      // 1. Quick market analysis
      const marketGaps = await this.marketIntelligence.analyzeMarketGaps();
      const relevantGaps = marketGaps.filter(gap => 
        gap.category.toLowerCase().includes(serviceType.toLowerCase()) ||
        gap.description.toLowerCase().includes(serviceType.toLowerCase())
      );
      
      // 2. Generate service
      const serviceDir = await this.mvpGenerator.generateMVP(
        serviceName,
        serviceType,
        options.language || 'python',
        {
          ...options,
          marketGaps: relevantGaps,
          estimatedMarketSize: relevantGaps[0]?.marketSize || 'Unknown',
          estimatedRevenue: relevantGaps[0]?.estimatedRevenue || 'Unknown'
        }
      );
      
      console.log(`✅ Service created with market analysis: ${serviceDir}`);
      return serviceDir;
      
    } catch (error) {
      console.error(`❌ Failed to analyze and create service: ${error.message}`);
      throw error;
    }
  }

  async listGeneratedServices() {
    if (!fs.existsSync(GENERATED_SERVICES_DIR)) {
      return [];
    }
    
    const services = fs.readdirSync(GENERATED_SERVICES_DIR, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => {
        const servicePath = path.join(GENERATED_SERVICES_DIR, dirent.name);
        const readmePath = path.join(servicePath, 'README.md');
        
        let description = 'No description available';
        if (fs.existsSync(readmePath)) {
          const readmeContent = fs.readFileSync(readmePath, 'utf8');
          const firstLine = readmeContent.split('\n')[0];
          if (firstLine.startsWith('#')) {
            description = firstLine.replace('#', '').trim();
          }
        }
        
        return {
          name: dirent.name,
          description: description,
          path: servicePath,
          createdAt: fs.statSync(servicePath).birthtime
        };
      });
    
    return services;
  }

  async getServiceStatus(serviceName) {
    const servicePath = path.join(GENERATED_SERVICES_DIR, serviceName);
    
    if (!fs.existsSync(servicePath)) {
      return { exists: false, status: 'Not Found' };
    }
    
    const status = {
      exists: true,
      name: serviceName,
      path: servicePath,
      files: [],
      hasDocker: false,
      hasTests: false,
      hasCICD: false,
      lastModified: fs.statSync(servicePath).mtime
    };
    
    // Check for key files
    const keyFiles = ['README.md', 'Dockerfile', 'docker-compose.yml'];
    keyFiles.forEach(file => {
      const filePath = path.join(servicePath, file);
      if (fs.existsSync(filePath)) {
        status.files.push(file);
        if (file === 'Dockerfile') status.hasDocker = true;
      }
    });
    
    // Check for tests
    const testDirs = ['tests', 'test', '__tests__'];
    testDirs.forEach(dir => {
      const testPath = path.join(servicePath, dir);
      if (fs.existsSync(testPath)) {
        status.hasTests = true;
      }
    });
    
    // Check for CI/CD
    const cicdPath = path.join(servicePath, '.github', 'workflows');
    if (fs.existsSync(cicdPath)) {
      status.hasCICD = true;
    }
    
    return status;
  }

  async runHealthCheck() {
    console.log('🏥 Running service factory health check...\n');
    
    const health = {
      timestamp: new Date().toISOString(),
      components: {},
      services: {},
      overall: 'healthy'
    };
    
    try {
      // Check components
      health.components.marketIntelligence = this.marketIntelligence ? 'loaded' : 'missing';
      health.components.opportunityDetector = this.opportunityDetector ? 'loaded' : 'missing';
      health.components.mvpGenerator = this.mvpGenerator ? 'loaded' : 'missing';
      
      // Check directories
      health.directories = {
        services: fs.existsSync(SERVICES_DIR) ? 'exists' : 'missing',
        generatedServices: fs.existsSync(GENERATED_SERVICES_DIR) ? 'exists' : 'missing'
      };
      
      // Check generated services
      const services = await this.listGeneratedServices();
      health.services.count = services.length;
      health.services.list = services.map(s => s.name);
      
      // Determine overall health
      const componentHealth = Object.values(health.components);
      if (componentHealth.includes('missing')) {
        health.overall = 'degraded';
      }
      
      console.log(`✅ Health check complete. Status: ${health.overall}`);
      return health;
      
    } catch (error) {
      health.overall = 'unhealthy';
      health.error = error.message;
      console.error(`❌ Health check failed: ${error.message}`);
      return health;
    }
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new ServiceFactoryOrchestrator();
  
  const command = process.argv[2] || 'help';
  
  switch (command) {
    case 'full':
      orchestrator.runFullServiceCreation();
      break;
      
    case 'create':
      const serviceName = process.argv[3];
      const serviceType = process.argv[4];
      const language = process.argv[5] || 'python';
      
      if (!serviceName || !serviceType) {
        console.log('Usage: node service-factory-orchestrator.cjs create <service-name> <service-type> [language]');
        process.exit(1);
      }
      
      orchestrator.mvpGenerator.generateMVP(serviceName, serviceType, language);
      break;
      
    case 'analyze':
      const analyzeName = process.argv[3];
      const analyzeType = process.argv[4];
      
      if (!analyzeName || !analyzeType) {
        console.log('Usage: node service-factory-orchestrator.cjs analyze <service-name> <service-type>');
        process.exit(1);
      }
      
      orchestrator.analyzeAndCreateService(analyzeName, analyzeType);
      break;
      
    case 'list':
      orchestrator.listGeneratedServices().then(services => {
        console.log(`📋 Generated Services (${services.length}):`);
        services.forEach(service => {
          console.log(`  - ${service.name}: ${service.description}`);
        });
      });
      break;
      
    case 'status':
      const statusName = process.argv[3];
      if (!statusName) {
        console.log('Usage: node service-factory-orchestrator.cjs status <service-name>');
        process.exit(1);
      }
      
      orchestrator.getServiceStatus(statusName).then(status => {
        console.log(JSON.stringify(status, null, 2));
      });
      break;
      
    case 'health':
      orchestrator.runHealthCheck();
      break;
      
    case 'help':
    default:
      console.log('Service Factory Orchestrator - Available Commands:');
      console.log('  full                    - Run complete service creation pipeline');
      console.log('  create <name> <type>    - Create a new service');
      console.log('  analyze <name> <type>   - Analyze market and create service');
      console.log('  list                    - List all generated services');
      console.log('  status <name>           - Get service status');
      console.log('  health                  - Run health check');
      console.log('  help                    - Show this help');
      break;
  }
}

module.exports = ServiceFactoryOrchestrator;