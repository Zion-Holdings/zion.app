#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const GENERATED_SERVICES_DIR = path.join(ROOT, 'generated-services');
const SERVICES_DIR = path.join(ROOT, 'public', 'automation', 'services');
const MARKET_DATA_DIR = path.join(ROOT, 'public', 'automation', 'market-intelligence');
const OPPORTUNITIES_DIR = path.join(ROOT, 'public', 'automation', 'opportunities');
const QUALITY_REPORTS_DIR = path.join(ROOT, 'public', 'automation', 'quality-reports');
const DEPLOYMENT_CONFIGS_DIR = path.join(ROOT, 'public', 'automation', 'deployments');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function readJson(p, f) { try { return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : f; } catch { return f; } }

class ServiceFactoryDashboard {
  constructor() {
    this.components = {};
    this.status = {};
    this.metrics = {};
    this.initializeDirectories();
  }

  initializeDirectories() {
    [SERVICES_DIR, MARKET_DATA_DIR, OPPORTUNITIES_DIR, QUALITY_REPORTS_DIR, DEPLOYMENT_CONFIGS_DIR].forEach(dir => {
      ensureDir(dir);
    });
  }

  async generateDashboard() {
    console.log('📊 Generating Service Factory Dashboard...\n');
    
    try {
      // Collect data from all components
      await this.collectServiceData();
      await this.collectMarketData();
      await this.collectOpportunityData();
      await this.collectQualityData();
      await this.collectDeploymentData();
      
      // Generate comprehensive dashboard
      const dashboard = await this.createDashboard();
      
      // Save dashboard
      const dashboardFile = path.join(ROOT, 'public', 'automation', 'service-factory-dashboard.json');
      ensureDir(path.dirname(dashboardFile));
      fs.writeFileSync(dashboardFile, JSON.stringify(dashboard, null, 2));
      
      // Generate HTML dashboard
      await this.generateHTMLDashboard(dashboard);
      
      console.log('✅ Service Factory Dashboard generated successfully!');
      return dashboard;
      
    } catch (error) {
      console.error('❌ Failed to generate dashboard:', error);
      throw error;
    }
  }

  async collectServiceData() {
    console.log('🔍 Collecting service data...');
    
    this.components.services = {
      generated: [],
      blueprints: [],
      total: 0
    };

    // Collect generated services
    if (fs.existsSync(GENERATED_SERVICES_DIR)) {
      const services = fs.readdirSync(GENERATED_SERVICES_DIR, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => {
          const servicePath = path.join(GENERATED_SERVICES_DIR, dirent.name);
          const stats = fs.statSync(servicePath);
          
          return {
            name: dirent.name,
            path: servicePath,
            createdAt: stats.birthtime,
            lastModified: stats.mtime,
            size: this.getDirectorySize(servicePath),
            hasDocker: fs.existsSync(path.join(servicePath, 'Dockerfile')),
            hasTests: fs.existsSync(path.join(servicePath, 'tests')),
            hasCICD: fs.existsSync(path.join(servicePath, '.github', 'workflows'))
          };
        });
      
      this.components.services.generated = services;
      this.components.services.total = services.length;
    }

    // Collect service blueprints
    const blueprintDir = path.join(ROOT, 'pages', 'reports', 'blueprints');
    if (fs.existsSync(blueprintDir)) {
      const blueprints = fs.readdirSync(blueprintDir, { withFileTypes: true })
        .filter(dirent => dirent.isFile() && dirent.name.endsWith('.tsx'))
        .map(dirent => {
          const blueprintPath = path.join(blueprintDir, dirent.name);
          const stats = fs.statSync(blueprintPath);
          
          return {
            name: dirent.name.replace('.tsx', ''),
            path: blueprintPath,
            createdAt: stats.birthtime,
            lastModified: stats.mtime
          };
        });
      
      this.components.services.blueprints = blueprints;
    }
  }

  async collectMarketData() {
    console.log('📈 Collecting market intelligence data...');
    
    this.components.marketIntelligence = {
      gaps: [],
      trends: [],
      competitors: [],
      opportunities: [],
      lastUpdated: null
    };

    // Collect market data
    const marketDataFile = path.join(MARKET_DATA_DIR, 'market-data.json');
    if (fs.existsSync(marketDataFile)) {
      const marketData = readJson(marketDataFile, {});
      this.components.marketIntelligence = {
        gaps: marketData.gaps || [],
        trends: marketData.trends?.current || [],
        competitors: marketData.competitiveIntelligence?.competitors || [],
        opportunities: marketData.opportunities || [],
        lastUpdated: marketData.lastUpdated
      };
    }

    // Collect market reports
    if (fs.existsSync(MARKET_DATA_DIR)) {
      const reports = fs.readdirSync(MARKET_DATA_DIR, { withFileTypes: true })
        .filter(dirent => dirent.isFile() && dirent.name.includes('market-report'))
        .map(dirent => dirent.name);
      
      this.components.marketIntelligence.reports = reports;
    }
  }

  async collectOpportunityData() {
    console.log('🎯 Collecting opportunity data...');
    
    this.components.opportunities = {
      detected: [],
      validated: [],
      total: 0,
      lastUpdated: null
    };

    // Collect opportunity data
    const opportunitiesFile = path.join(OPPORTUNITIES_DIR, 'opportunities.json');
    if (fs.existsSync(opportunitiesFile)) {
      const opportunities = readJson(opportunitiesFile, {});
      this.components.opportunities = {
        detected: opportunities.opportunities || [],
        validated: opportunities.validatedOpportunities || [],
        total: (opportunities.opportunities || []).length,
        lastUpdated: opportunities.lastUpdated
      };
    }

    // Collect opportunity reports
    if (fs.existsSync(OPPORTUNITIES_DIR)) {
      const reports = fs.readdirSync(OPPORTUNITIES_DIR, { withFileTypes: true })
        .filter(dirent => dirent.isFile() && dirent.name.includes('opportunity-report'))
        .map(dirent => dirent.name);
      
      this.components.opportunities.reports = reports;
    }
  }

  async collectQualityData() {
    console.log('🔍 Collecting quality data...');
    
    this.components.quality = {
      reports: [],
      services: {},
      averageScore: 0,
      lastUpdated: null
    };

    // Collect quality reports
    if (fs.existsSync(QUALITY_REPORTS_DIR)) {
      const reports = fs.readdirSync(QUALITY_REPORTS_DIR, { withFileTypes: true })
        .filter(dirent => dirent.isFile() && dirent.name.includes('quality-report'))
        .map(dirent => dirent.name);
      
      this.components.quality.reports = reports;
    }

    // Collect individual service quality reports
    if (fs.existsSync(QUALITY_REPORTS_DIR)) {
      const serviceReports = fs.readdirSync(QUALITY_REPORTS_DIR, { withFileTypes: true })
        .filter(dirent => dirent.isFile() && dirent.name.includes('-quality-report.json'))
        .map(dirent => {
          const reportPath = path.join(QUALITY_REPORTS_DIR, dirent.name);
          const report = readJson(reportPath, {});
          return {
            serviceName: dirent.name.replace('-quality-report.json', ''),
            score: report.overall?.score || 0,
            grade: report.overall?.grade || 'N/A',
            status: report.overall?.status || 'Unknown'
          };
        });
      
      this.components.quality.services = serviceReports.reduce((acc, service) => {
        acc[service.serviceName] = service;
        return acc;
      }, {});

      // Calculate average score
      if (serviceReports.length > 0) {
        const totalScore = serviceReports.reduce((sum, service) => sum + service.score, 0);
        this.components.quality.averageScore = Math.round(totalScore / serviceReports.length);
      }
    }
  }

  async collectDeploymentData() {
    console.log('🚀 Collecting deployment data...');
    
    this.components.deployments = {
      configured: [],
      deployed: [],
      total: 0,
      lastUpdated: null
    };

    // Collect deployment configurations
    if (fs.existsSync(DEPLOYMENT_CONFIGS_DIR)) {
      const configs = fs.readdirSync(DEPLOYMENT_CONFIGS_DIR, { withFileTypes: true })
        .filter(dirent => dirent.isFile() && dirent.name.includes('-deployment.json'))
        .map(dirent => {
          const configPath = path.join(DEPLOYMENT_CONFIGS_DIR, dirent.name);
          const config = readJson(configPath, {});
          return {
            serviceName: dirent.name.replace('-deployment.json', ''),
            deploymentType: config.deploymentType,
            cloudProvider: config.cloudProvider,
            regions: config.regions,
            scaling: config.scaling,
            createdAt: config.timestamp
          };
        });
      
      this.components.deployments.configured = configs;
      this.components.deployments.total = configs.length;
    }
  }

  async createDashboard() {
    const dashboard = {
      generatedAt: new Date().toISOString(),
      summary: {
        totalServices: this.components.services.total,
        totalBlueprints: this.components.services.blueprints.length,
        marketGaps: this.components.marketIntelligence.gaps.length,
        marketTrends: this.components.marketIntelligence.trends.length,
        opportunities: this.components.opportunities.total,
        qualityScore: this.components.quality.averageScore,
        deployments: this.components.deployments.total
      },
      components: this.components,
      metrics: this.calculateMetrics(),
      recommendations: this.generateRecommendations(),
      nextActions: this.generateNextActions()
    };

    return dashboard;
  }

  calculateMetrics() {
    const metrics = {
      serviceGeneration: {
        rate: this.components.services.total > 0 ? 'Active' : 'Inactive',
        efficiency: this.components.services.total > 0 ? 'Good' : 'Needs Improvement'
      },
      marketIntelligence: {
        coverage: this.components.marketIntelligence.gaps.length > 0 ? 'Good' : 'Limited',
        freshness: this.isDataFresh(this.components.marketIntelligence.lastUpdated) ? 'Fresh' : 'Stale'
      },
      opportunityDetection: {
        accuracy: this.components.opportunities.validated.length > 0 ? 'High' : 'Low',
        volume: this.components.opportunities.total > 0 ? 'Good' : 'Limited'
      },
      qualityAssurance: {
        average: this.components.quality.averageScore,
        distribution: this.calculateQualityDistribution()
      },
      deployment: {
        coverage: this.calculateDeploymentCoverage(),
        diversity: this.calculateDeploymentDiversity()
      }
    };

    return metrics;
  }

  isDataFresh(timestamp) {
    if (!timestamp) return false;
    const lastUpdate = new Date(timestamp);
    const now = new Date();
    const hoursDiff = (now - lastUpdate) / (1000 * 60 * 60);
    return hoursDiff < 24; // Consider fresh if less than 24 hours old
  }

  calculateQualityDistribution() {
    const services = Object.values(this.components.quality.services);
    const distribution = {
      excellent: services.filter(s => s.score >= 80).length,
      good: services.filter(s => s.score >= 60 && s.score < 80).length,
      fair: services.filter(s => s.score >= 40 && s.score < 60).length,
      needsImprovement: services.filter(s => s.score < 40).length
    };
    return distribution;
  }

  calculateDeploymentCoverage() {
    const totalServices = this.components.services.total;
    const deployedServices = this.components.deployments.total;
    return totalServices > 0 ? Math.round((deployedServices / totalServices) * 100) : 0;
  }

  calculateDeploymentDiversity() {
    const cloudProviders = new Set(this.components.deployments.configured.map(d => d.cloudProvider));
    const deploymentTypes = new Set(this.components.deployments.configured.map(d => d.deploymentType));
    
    return {
      cloudProviders: cloudProviders.size,
      deploymentTypes: deploymentTypes.size,
      diversity: cloudProviders.size + deploymentTypes.size > 2 ? 'High' : 'Low'
    };
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Service generation recommendations
    if (this.components.services.total === 0) {
      recommendations.push({
        priority: 'High',
        category: 'Service Generation',
        action: 'Run the service factory to generate your first services',
        reasoning: 'No services have been generated yet'
      });
    }

    // Market intelligence recommendations
    if (!this.isDataFresh(this.components.marketIntelligence.lastUpdated)) {
      recommendations.push({
        priority: 'Medium',
        category: 'Market Intelligence',
        action: 'Update market intelligence data',
        reasoning: 'Market data is stale and may not reflect current opportunities'
      });
    }

    // Quality recommendations
    if (this.components.quality.averageScore < 70) {
      recommendations.push({
        priority: 'High',
        category: 'Quality Assurance',
        action: 'Improve service quality standards',
        reasoning: `Average quality score is ${this.components.quality.averageScore}, below target of 70`
      });
    }

    // Deployment recommendations
    const deploymentCoverage = this.calculateDeploymentCoverage();
    if (deploymentCoverage < 50) {
      recommendations.push({
        priority: 'Medium',
        category: 'Deployment',
        action: 'Increase deployment coverage',
        reasoning: `Only ${deploymentCoverage}% of services have deployment configurations`
      });
    }

    return recommendations;
  }

  generateNextActions() {
    const actions = [];
    
    // Immediate actions
    if (this.components.services.total === 0) {
      actions.push({
        timeline: 'Immediate',
        action: 'Run full service creation pipeline',
        command: 'npm run service:factory:full'
      });
    }

    // Short-term actions
    if (this.components.marketIntelligence.gaps.length === 0) {
      actions.push({
        timeline: 'Today',
        action: 'Run market intelligence analysis',
        command: 'npm run market:intelligence'
      });
    }

    if (this.components.opportunities.total === 0) {
      actions.push({
        timeline: 'Today',
        action: 'Run opportunity detection',
        command: 'npm run opportunity:detect'
      });
    }

    // Medium-term actions
    if (this.components.quality.averageScore < 80) {
      actions.push({
        timeline: 'This Week',
        action: 'Run quality assessment on all services',
        command: 'npm run quality:check'
      });
    }

    // Long-term actions
    actions.push({
      timeline: 'This Month',
      action: 'Review and optimize deployment strategies',
      command: 'npm run deployment:list'
    });

    return actions;
  }

  getDirectorySize(dirPath) {
    let size = 0;
    try {
      const items = fs.readdirSync(dirPath, { withFileTypes: true });
      items.forEach(item => {
        const fullPath = path.join(dirPath, item.name);
        if (item.isDirectory()) {
          size += this.getDirectorySize(fullPath);
        } else {
          size += fs.statSync(fullPath).size;
        }
      });
    } catch (error) {
      // Ignore errors for inaccessible directories
    }
    return size;
  }

  async generateHTMLDashboard(dashboard) {
    console.log('🌐 Generating HTML dashboard...');
    
    const htmlContent = this.generateHTMLContent(dashboard);
    const htmlFile = path.join(ROOT, 'public', 'automation', 'service-factory-dashboard.html');
    
    fs.writeFileSync(htmlFile, htmlContent);
    console.log(`✅ HTML dashboard generated: ${htmlFile}`);
  }

  generateHTMLContent(dashboard) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Service Factory Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body class="bg-gray-100">
    <div class="min-h-screen">
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">Service Factory Dashboard</h1>
                <p class="text-gray-600">Generated: ${new Date(dashboard.generatedAt).toLocaleString()}</p>
            </div>
        </header>

        <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <!-- Summary Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="p-5">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <div class="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                                    <span class="text-white font-bold">S</span>
                                </div>
                            </div>
                            <div class="ml-5 w-0 flex-1">
                                <dl>
                                    <dt class="text-sm font-medium text-gray-500 truncate">Total Services</dt>
                                    <dd class="text-lg font-medium text-gray-900">${dashboard.summary.totalServices}</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="p-5">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <div class="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center">
                                    <span class="text-white font-bold">M</span>
                                </div>
                            </div>
                            <div class="ml-5 w-0 flex-1">
                                <dl>
                                    <dt class="text-sm font-medium text-gray-500 truncate">Market Gaps</dt>
                                    <dd class="text-lg font-medium text-gray-900">${dashboard.summary.marketGaps}</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="p-5">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <div class="w-8 h-8 bg-yellow-500 rounded-md flex items-center justify-center">
                                    <span class="text-white font-bold">O</span>
                                </div>
                            </div>
                            <div class="ml-5 w-0 flex-1">
                                <dl>
                                    <dt class="text-sm font-medium text-gray-500 truncate">Opportunities</dt>
                                    <dd class="text-lg font-medium text-gray-900">${dashboard.summary.opportunities}</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="p-5">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                                <div class="w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center">
                                    <span class="text-white font-bold">Q</span>
                                </div>
                            </div>
                            <div class="ml-5 w-0 flex-1">
                                <dl>
                                    <dt class="text-sm font-medium text-gray-500 truncate">Quality Score</dt>
                                    <dd class="text-lg font-medium text-gray-900">${dashboard.summary.qualityScore}/100</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Quality Distribution Chart -->
            <div class="bg-white shadow rounded-lg p-6 mb-8">
                <h3 class="text-lg font-medium text-gray-900 mb-4">Quality Distribution</h3>
                <div class="h-64">
                    <canvas id="qualityChart"></canvas>
                </div>
            </div>

            <!-- Recommendations -->
            <div class="bg-white shadow rounded-lg p-6 mb-8">
                <h3 class="text-lg font-medium text-gray-900 mb-4">Recommendations</h3>
                <div class="space-y-4">
                    ${dashboard.recommendations.map(rec => `
                        <div class="border-l-4 border-${rec.priority === 'High' ? 'red' : rec.priority === 'Medium' ? 'yellow' : 'green'}-500 pl-4">
                            <div class="flex items-start">
                                <div class="flex-shrink-0">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${rec.priority === 'High' ? 'red' : rec.priority === 'Medium' ? 'yellow' : 'green'}-100 text-${rec.priority === 'High' ? 'red' : rec.priority === 'Medium' ? 'yellow' : 'green'}-800">
                                        ${rec.priority}
                                    </span>
                                </div>
                                <div class="ml-3">
                                    <h4 class="text-sm font-medium text-gray-900">${rec.category}</h4>
                                    <p class="text-sm text-gray-600">${rec.action}</p>
                                    <p class="text-sm text-gray-500">${rec.reasoning}</p>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Next Actions -->
            <div class="bg-white shadow rounded-lg p-6">
                <h3 class="text-lg font-medium text-gray-900 mb-4">Next Actions</h3>
                <div class="space-y-4">
                    ${dashboard.nextActions.map(action => `
                        <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                            <div>
                                <h4 class="text-sm font-medium text-gray-900">${action.action}</h4>
                                <p class="text-sm text-gray-500">Timeline: ${action.timeline}</p>
                            </div>
                            <code class="text-xs bg-gray-100 px-2 py-1 rounded">${action.command}</code>
                        </div>
                    `).join('')}
                </div>
            </div>
        </main>
    </div>

    <script>
        // Quality Distribution Chart
        const ctx = document.getElementById('qualityChart').getContext('2d');
        const qualityData = ${JSON.stringify(dashboard.metrics.qualityAssurance.distribution)};
        
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Excellent', 'Good', 'Fair', 'Needs Improvement'],
                datasets: [{
                    data: [qualityData.excellent, qualityData.good, qualityData.fair, qualityData.needsImprovement],
                    backgroundColor: ['#10B981', '#3B82F6', '#F59E0B', '#EF4444']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    </script>
</body>
</html>`;
  }
}

// CLI interface
if (require.main === module) {
  const dashboard = new ServiceFactoryDashboard();
  
  const command = process.argv[2] || 'generate';
  
  switch (command) {
    case 'generate':
      dashboard.generateDashboard();
      break;
      
    case 'help':
    default:
      console.log('Service Factory Dashboard - Available Commands:');
      console.log('  generate  - Generate comprehensive dashboard');
      console.log('  help      - Show this help');
      break;
  }
}

module.exports = ServiceFactoryDashboard;