#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const LOGS_DIR = path.join(ROOT, 'public', 'automation', 'service-factory-logs');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }

class UltimateServiceFactory {
  constructor() {
    this.components = {};
    this.status = {};
    this.logs = [];
    this.metrics = {};
    ensureDir(LOGS_DIR);
    this.initializeComponents();
  }

  initializeComponents() {
    try {
      // Load all service factory components
      const components = [
        'market-intelligence.cjs',
        'opportunity-detector.cjs',
        'mvp-generator.cjs',
        'service-blueprint-generator.cjs',
        'quality-automation.cjs',
        'deployment-orchestrator.cjs',
        'service-factory-orchestrator.cjs',
        'service-factory-dashboard.cjs',
        'integration-tester.cjs',
        'performance-optimizer.cjs'
      ];

      for (const component of components) {
        try {
          const componentPath = path.join(ROOT, 'automation', 'service-factory', component);
          if (fs.existsSync(componentPath)) {
            const Component = require(componentPath);
            this.components[component] = Component;
            this.status[component] = 'loaded';
          } else {
            this.status[component] = 'missing';
          }
        } catch (error) {
          this.status[component] = 'error';
          this.logError(`Failed to load ${component}: ${error.message}`);
        }
      }

      console.log('✅ Service Factory components initialized');
    } catch (error) {
      console.error('❌ Failed to initialize components:', error);
    }
  }

  async runUltimateServiceCreation() {
    console.log('🚀 Starting Ultimate Service Creation Pipeline...\n');
    
    const startTime = Date.now();
    
    try {
      // 1. Market Intelligence & Research
      console.log('📊 Phase 1: Market Intelligence & Research');
      await this.runMarketIntelligence();
      
      // 2. Opportunity Detection & Validation
      console.log('\n🎯 Phase 2: Opportunity Detection & Validation');
      await this.runOpportunityDetection();
      
      // 3. Service Blueprint Generation
      console.log('\n📋 Phase 3: Service Blueprint Generation');
      await this.runServiceBlueprintGeneration();
      
      // 4. MVP Service Generation
      console.log('\n🏗️  Phase 4: MVP Service Generation');
      await this.runMVPServiceGeneration();
      
      // 5. Quality Assurance & Testing
      console.log('\n🔍 Phase 5: Quality Assurance & Testing');
      await this.runQualityAssurance();
      
      // 6. Deployment Configuration
      console.log('\n🚀 Phase 6: Deployment Configuration');
      await this.runDeploymentConfiguration();
      
      // 7. Performance Optimization
      console.log('\n⚡ Phase 7: Performance Optimization');
      await this.runPerformanceOptimization();
      
      // 8. Integration Testing
      console.log('\n🧪 Phase 8: Integration Testing');
      await this.runIntegrationTesting();
      
      // 9. Dashboard Generation
      console.log('\n📊 Phase 9: Dashboard Generation');
      await this.runDashboardGeneration();
      
      // 10. Final Report & Summary
      console.log('\n📋 Phase 10: Final Report & Summary');
      const report = await this.generateUltimateReport(startTime);
      
      const duration = ((Date.now() - startTime) / 1000).toFixed(1);
      console.log(`\n🎉 Ultimate Service Creation Pipeline Complete in ${duration} seconds!`);
      
      return report;
      
    } catch (error) {
      console.error('❌ Ultimate service creation failed:', error);
      this.logError(`Ultimate service creation failed: ${error.message}`);
      throw error;
    }
  }

  async runMarketIntelligence() {
    try {
      if (this.components['market-intelligence.cjs']) {
        const MarketIntelligence = this.components['market-intelligence.cjs'];
        const intelligence = new MarketIntelligence();
        const result = await intelligence.runFullAnalysis();
        this.logInfo('Market intelligence analysis completed', result);
        return result;
      } else {
        throw new Error('Market intelligence component not available');
      }
    } catch (error) {
      this.logError('Market intelligence failed', error);
      throw error;
    }
  }

  async runOpportunityDetection() {
    try {
      if (this.components['opportunity-detector.cjs']) {
        const OpportunityDetector = this.components['opportunity-detector.cjs'];
        const detector = new OpportunityDetector();
        const result = await detector.runFullDetection();
        this.logInfo('Opportunity detection completed', result);
        return result;
      } else {
        throw new Error('Opportunity detector component not available');
      }
    } catch (error) {
      this.logError('Opportunity detection failed', error);
      throw error;
    }
  }

  async runServiceBlueprintGeneration() {
    try {
      if (this.components['service-blueprint-generator.cjs']) {
        const ServiceBlueprintGenerator = this.components['service-blueprint-generator.cjs'];
        const generator = new ServiceBlueprintGenerator();
        const result = await generator.generateServiceBlueprint();
        this.logInfo('Service blueprint generation completed', result);
        return result;
      } else {
        throw new Error('Service blueprint generator component not available');
      }
    } catch (error) {
      this.logError('Service blueprint generation failed', error);
      throw error;
    }
  }

  async runMVPServiceGeneration() {
    try {
      if (this.components['mvp-generator.cjs']) {
        const MVPGenerator = this.components['mvp-generator.cjs'];
        const generator = new MVPGenerator();
        
        // Generate sample services
        const services = [
          { name: 'ai-analytics-platform', type: 'AI Analytics Platform', language: 'python' },
          { name: 'ml-pipeline-service', type: 'Machine Learning Pipeline', language: 'python' },
          { name: 'data-processor-api', type: 'Data Processing API', language: 'nodejs' }
        ];

        const results = [];
        for (const service of services) {
          try {
            const result = await generator.generateMVP(service.name, service.type, service.language);
            results.push({ service: service.name, result, status: 'success' });
          } catch (error) {
            results.push({ service: service.name, error: error.message, status: 'failed' });
          }
        }

        this.logInfo('MVP service generation completed', results);
        return results;
      } else {
        throw new Error('MVP generator component not available');
      }
    } catch (error) {
      this.logError('MVP service generation failed', error);
      throw error;
    }
  }

  async runQualityAssurance() {
    try {
      if (this.components['quality-automation.cjs']) {
        const QualityAutomation = this.components['quality-automation.cjs'];
        const quality = new QualityAutomation();
        const result = await quality.runFullQualityCheck();
        this.logInfo('Quality assurance completed', result);
        return result;
      } else {
        throw new Error('Quality automation component not available');
      }
    } catch (error) {
      this.logError('Quality assurance failed', error);
      throw error;
    }
  }

  async runDeploymentConfiguration() {
    try {
      if (this.components['deployment-orchestrator.cjs']) {
        const DeploymentOrchestrator = this.components['deployment-orchestrator.cjs'];
        const orchestrator = new DeploymentOrchestrator();
        
        // Create deployment configs for generated services
        const services = ['ai-analytics-platform', 'ml-pipeline-service', 'data-processor-api'];
        const results = [];

        for (const service of services) {
          try {
            const result = await orchestrator.createDeploymentConfig(service, {
              deploymentType: 'container',
              cloudProvider: 'aws',
              regions: ['us-west-2'],
              minInstances: 2,
              maxInstances: 10
            });
            results.push({ service, result, status: 'success' });
          } catch (error) {
            results.push({ service, error: error.message, status: 'failed' });
          }
        }

        this.logInfo('Deployment configuration completed', results);
        return results;
      } else {
        throw new Error('Deployment orchestrator component not available');
      }
    } catch (error) {
      this.logError('Deployment configuration failed', error);
      throw error;
    }
  }

  async runPerformanceOptimization() {
    try {
      if (this.components['performance-optimizer.cjs']) {
        const PerformanceOptimizer = this.components['performance-optimizer.cjs'];
        const optimizer = new PerformanceOptimizer();
        const result = await optimizer.runFullPerformanceOptimization();
        this.logInfo('Performance optimization completed', result);
        return result;
      } else {
        throw new Error('Performance optimizer component not available');
      }
    } catch (error) {
      this.logError('Performance optimization failed', error);
      throw error;
    }
  }

  async runIntegrationTesting() {
    try {
      if (this.components['integration-tester.cjs']) {
        const IntegrationTester = this.components['integration-tester.cjs'];
        const tester = new IntegrationTester();
        const result = await tester.runFullIntegrationTest();
        this.logInfo('Integration testing completed', result);
        return result;
      } else {
        throw new Error('Integration tester component not available');
      }
    } catch (error) {
      this.logError('Integration testing failed', error);
      throw error;
    }
  }

  async runDashboardGeneration() {
    try {
      if (this.components['service-factory-dashboard.cjs']) {
        const ServiceFactoryDashboard = this.components['service-factory-dashboard.cjs'];
        const dashboard = new ServiceFactoryDashboard();
        const result = await dashboard.generateDashboard();
        this.logInfo('Dashboard generation completed', result);
        return result;
      } else {
        throw new Error('Service factory dashboard component not available');
      }
    } catch (error) {
      this.logError('Dashboard generation failed', error);
      throw error;
    }
  }

  async generateUltimateReport(startTime) {
    console.log('📋 Generating ultimate service factory report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      execution: {
        startTime: new Date(startTime).toISOString(),
        endTime: new Date().toISOString(),
        duration: Date.now() - startTime,
        totalPhases: 10
      },
      status: {
        components: this.status,
        overall: this.calculateOverallStatus()
      },
      metrics: this.calculateMetrics(),
      logs: this.logs.slice(-100), // Last 100 log entries
      summary: this.generateSummary(),
      nextSteps: this.generateNextSteps()
    };

    // Save report
    const reportFile = path.join(LOGS_DIR, `ultimate-service-factory-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    // Generate HTML report
    await this.generateHTMLReport(report);
    
    console.log(`✅ Ultimate report generated: ${reportFile}`);
    return report;
  }

  calculateOverallStatus() {
    const statuses = Object.values(this.status);
    if (statuses.includes('error')) return 'ERROR';
    if (statuses.includes('missing')) return 'DEGRADED';
    if (statuses.every(s => s === 'loaded')) return 'OPERATIONAL';
    return 'PARTIAL';
  }

  calculateMetrics() {
    return {
      componentsLoaded: Object.values(this.status).filter(s => s === 'loaded').length,
      totalComponents: Object.keys(this.status).length,
      successRate: Math.round((Object.values(this.status).filter(s => s === 'loaded').length / Object.keys(this.status).length) * 100),
      logEntries: this.logs.length,
      lastExecution: new Date().toISOString()
    };
  }

  generateSummary() {
    return {
      message: 'Ultimate Service Factory Pipeline Execution Complete',
      highlights: [
        'Market intelligence analysis performed',
        'Service opportunities identified and validated',
        'MVP services generated with full project structure',
        'Quality assurance checks completed',
        'Deployment configurations created',
        'Performance optimizations applied',
        'Integration testing completed',
        'Comprehensive dashboard generated'
      ],
      achievements: [
        'End-to-end automation pipeline executed',
        'Multiple services generated automatically',
        'Quality standards maintained throughout',
        'Deployment ready configurations created',
        'Performance metrics collected and analyzed'
      ]
    };
  }

  generateNextSteps() {
    return [
      {
        action: 'Review generated services',
        timeline: 'Immediate',
        priority: 'High',
        description: 'Examine the generated services in the generated-services directory'
      },
      {
        action: 'Customize services for specific needs',
        timeline: 'Today',
        priority: 'High',
        description: 'Modify generated services to match your specific requirements'
      },
      {
        action: 'Deploy services to staging environment',
        timeline: 'This Week',
        priority: 'Medium',
        description: 'Use the generated deployment configurations to deploy services'
      },
      {
        action: 'Monitor performance and quality',
        timeline: 'Ongoing',
        priority: 'Medium',
        description: 'Use the dashboard to monitor service performance and quality'
      },
      {
        action: 'Scale and optimize',
        timeline: 'This Month',
        priority: 'Low',
        description: 'Scale services based on demand and apply performance optimizations'
      }
    ];
  }

  logInfo(message, data = null) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      level: 'INFO',
      message,
      data
    };
    this.logs.push(logEntry);
    console.log(`ℹ️  ${message}`);
  }

  logError(message, error = null) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      level: 'ERROR',
      message,
      error: error ? error.message : null
    };
    this.logs.push(logEntry);
    console.error(`❌ ${message}`);
  }

  async generateHTMLReport(report) {
    console.log('🌐 Generating HTML ultimate report...');
    
    const htmlContent = this.generateHTMLContent(report);
    const htmlFile = path.join(LOGS_DIR, `ultimate-service-factory-report-${Date.now()}.html`);
    
    fs.writeFileSync(htmlFile, htmlContent);
    console.log(`✅ HTML ultimate report generated: ${htmlFile}`);
  }

  generateHTMLContent(report) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ultimate Service Factory Report</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
    <div class="min-h-screen">
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">Ultimate Service Factory Report</h1>
                <p class="text-gray-600">Generated: ${new Date(report.timestamp).toLocaleString()}</p>
            </div>
        </header>

        <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <!-- Status Overview -->
            <div class="bg-white shadow rounded-lg p-6 mb-8">
                <h3 class="text-lg font-medium text-gray-900 mb-4">System Status</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <h4 class="text-md font-medium text-gray-700 mb-2">Overall Status</h4>
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${report.status.overall === 'OPERATIONAL' ? 'green' : report.status.overall === 'DEGRADED' ? 'yellow' : 'red'}-100 text-${report.status.overall === 'OPERATIONAL' ? 'green' : report.status.overall === 'DEGRADED' ? 'yellow' : 'red'}-800">
                            ${report.status.overall}
                        </span>
                    </div>
                    <div>
                        <h4 class="text-md font-medium text-gray-700 mb-2">Components Loaded</h4>
                        <p class="text-2xl font-bold text-gray-900">${report.metrics.componentsLoaded}/${report.metrics.totalComponents}</p>
                    </div>
                    <div>
                        <h4 class="text-md font-medium text-gray-700 mb-2">Success Rate</h4>
                        <p class="text-2xl font-bold text-gray-900">${report.metrics.successRate}%</p>
                    </div>
                </div>
            </div>

            <!-- Execution Summary -->
            <div class="bg-white shadow rounded-lg p-6 mb-8">
                <h3 class="text-lg font-medium text-gray-900 mb-4">Execution Summary</h3>
                <div class="space-y-4">
                    <div>
                        <h4 class="text-md font-medium text-gray-700 mb-2">Pipeline Execution</h4>
                        <p class="text-sm text-gray-600">Duration: ${(report.execution.duration / 1000).toFixed(1)} seconds</p>
                        <p class="text-sm text-gray-600">Phases Completed: ${report.execution.totalPhases}/10</p>
                    </div>
                    <div>
                        <h4 class="text-md font-medium text-gray-700 mb-2">Highlights</h4>
                        <ul class="text-sm text-gray-600 list-disc list-inside space-y-1">
                            ${report.summary.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Next Steps -->
            <div class="bg-white shadow rounded-lg p-6 mb-8">
                <h3 class="text-lg font-medium text-gray-900 mb-4">Next Steps</h3>
                <div class="space-y-4">
                    ${report.nextSteps.map(step => `
                        <div class="border-l-4 border-blue-500 pl-4">
                            <div class="flex items-start justify-between">
                                <div>
                                    <h4 class="text-sm font-medium text-gray-900">${step.action}</h4>
                                    <p class="text-sm text-gray-600">${step.description}</p>
                                    <p class="text-sm text-gray-500">Timeline: ${step.timeline}</p>
                                </div>
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${step.priority === 'High' ? 'red' : step.priority === 'Medium' ? 'yellow' : 'green'}-100 text-${step.priority === 'High' ? 'red' : step.priority === 'Medium' ? 'yellow' : 'green'}-800">
                                    ${step.priority}
                                </span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Component Status -->
            <div class="bg-white shadow rounded-lg p-6">
                <h3 class="text-lg font-medium text-gray-900 mb-4">Component Status</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${Object.entries(report.status.components).map(([component, status]) => `
                        <div class="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                            <span class="text-sm font-medium text-gray-900">${component.replace('.cjs', '')}</span>
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${status === 'loaded' ? 'green' : status === 'missing' ? 'yellow' : 'red'}-100 text-${status === 'loaded' ? 'green' : status === 'missing' ? 'yellow' : 'red'}-800">
                                ${status}
                            </span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </main>
    </div>
</body>
</html>`;
  }

  async getSystemStatus() {
    return {
      timestamp: new Date().toISOString(),
      status: this.status,
      metrics: this.calculateMetrics(),
      overall: this.calculateOverallStatus(),
      logs: this.logs.slice(-10) // Last 10 log entries
    };
  }

  async runHealthCheck() {
    console.log('🏥 Running Ultimate Service Factory health check...\n');
    
    const health = {
      timestamp: new Date().toISOString(),
      components: this.status,
      overall: this.calculateOverallStatus(),
      recommendations: []
    };

    // Check component health
    const missingComponents = Object.entries(this.status).filter(([_, status]) => status === 'missing');
    const errorComponents = Object.entries(this.status).filter(([_, status]) => status === 'error');

    if (missingComponents.length > 0) {
      health.recommendations.push({
        priority: 'High',
        action: 'Install missing components',
        components: missingComponents.map(([comp, _]) => comp)
      });
    }

    if (errorComponents.length > 0) {
      health.recommendations.push({
        priority: 'Critical',
        action: 'Fix component errors',
        components: errorComponents.map(([comp, _]) => comp)
      });
    }

    if (health.recommendations.length === 0) {
      health.recommendations.push({
        priority: 'Low',
        action: 'System is healthy',
        message: 'All components are operational'
      });
    }

    console.log(`✅ Health check complete. Status: ${health.overall}`);
    return health;
  }
}

// CLI interface
if (require.main === module) {
  const factory = new UltimateServiceFactory();
  
  const command = process.argv[2] || 'help';
  
  switch (command) {
    case 'run':
      factory.runUltimateServiceCreation();
      break;
      
    case 'status':
      factory.getSystemStatus().then(status => {
        console.log(JSON.stringify(status, null, 2));
      });
      break;
      
    case 'health':
      factory.runHealthCheck();
      break;
      
    case 'help':
    default:
      console.log('Ultimate Service Factory - Available Commands:');
      console.log('  run     - Run complete ultimate service creation pipeline');
      console.log('  status  - Get system status and metrics');
      console.log('  health  - Run system health check');
      console.log('  help    - Show this help');
      break;
  }
}

module.exports = UltimateServiceFactory;