const ServiceGenerationFactory = require('./service-generation-factory');
const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

class ServiceGenerationOrchestrator {
  constructor() {
    this.factory = new ServiceGenerationFactory();
    this.isRunning = false;
    this.scheduledTasks = new Map();
    this.performanceMetrics = {
      servicesCreated: 0,
      agentsDeployed: 0,
      revenueGenerated: 0,
      marketAnalyses: 0
    };
  }

  async initialize() {
    console.log('🚀 Initializing Service Generation Orchestrator...');
    
    // Create data directory if it doesn't exist
    const dataDir = path.join(__dirname, 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Load existing registries
    await this.factory.loadServiceRegistry();
    await this.factory.loadSalesAgentRegistry();

    console.log('✅ Service Generation Orchestrator initialized');
  }

  async start() {
    if (this.isRunning) {
      console.log('⚠️ Orchestrator is already running');
      return;
    }

    console.log('🚀 Starting Service Generation Orchestrator...');
    this.isRunning = true;

    // Start continuous service generation
    this.startContinuousServiceGeneration();
    
    // Start market analysis monitoring
    this.startMarketAnalysisMonitoring();
    
    // Start sales agent optimization
    this.startSalesAgentOptimization();
    
    // Start performance tracking
    this.startPerformanceTracking();

    console.log('✅ Service Generation Orchestrator started');
  }

  async stop() {
    console.log('🛑 Stopping Service Generation Orchestrator...');
    this.isRunning = false;

    // Stop all scheduled tasks
    this.scheduledTasks.forEach((task, name) => {
      if (task && task.stop) {
        task.stop();
      }
    });
    this.scheduledTasks.clear();

    console.log('✅ Service Generation Orchestrator stopped');
  }

  startContinuousServiceGeneration() {
    // Generate new services every 6 hours
    const task = cron.schedule('0 */6 * * *', async () => {
      if (!this.isRunning) return;
      
      console.log('🔄 Starting continuous service generation...');
      await this.generateNewServices();
    });

    this.scheduledTasks.set('continuous-service-generation', task);
    
    // Also run immediately
    this.generateNewServices();
  }

  startMarketAnalysisMonitoring() {
    // Update market analysis every 12 hours
    const task = cron.schedule('0 */12 * * *', async () => {
      if (!this.isRunning) return;
      
      console.log('📊 Updating market analysis...');
      await this.updateMarketAnalysis();
    });

    this.scheduledTasks.set('market-analysis-monitoring', task);
    
    // Also run immediately
    this.updateMarketAnalysis();
  }

  startSalesAgentOptimization() {
    // Optimize sales agents every 4 hours
    const task = cron.schedule('0 */4 * * *', async () => {
      if (!this.isRunning) return;
      
      console.log('🤖 Optimizing sales agents...');
      await this.optimizeSalesAgents();
    });

    this.scheduledTasks.set('sales-agent-optimization', task);
    
    // Also run immediately
    this.optimizeSalesAgents();
  }

  startPerformanceTracking() {
    // Track performance every hour
    const task = cron.schedule('0 * * * *', async () => {
      if (!this.isRunning) return;
      
      console.log('📈 Tracking performance metrics...');
      await this.trackPerformance();
    });

    this.scheduledTasks.set('performance-tracking', task);
  }

  async generateNewServices() {
    try {
      const serviceTypes = Object.keys(this.factory.serviceTypes);
      const servicesToGenerate = Math.floor(Math.random() * 3) + 1; // 1-3 services
      
      console.log(`🎯 Generating ${servicesToGenerate} new services...`);

      for (let i = 0; i < servicesToGenerate; i++) {
        const serviceType = serviceTypes[Math.floor(Math.random() * serviceTypes.length)];
        const complexity = ['low', 'medium', 'high'][Math.floor(Math.random() * 3)];
        const rushDelivery = Math.random() > 0.7; // 30% chance
        const flexibleTimeline = Math.random() > 0.8; // 20% chance

        const config = {
          complexity,
          rushDelivery,
          flexibleTimeline,
          name: this.generateServiceName(serviceType),
          description: this.generateServiceDescription(serviceType)
        };

        const service = await this.factory.createService(serviceType, config);
        
        console.log(`✅ Created service: ${service.name} (${serviceType})`);
        this.performanceMetrics.servicesCreated++;
      }

      await this.savePerformanceMetrics();
    } catch (error) {
      console.error('❌ Error generating new services:', error);
    }
  }

  async updateMarketAnalysis() {
    try {
      const serviceTypes = Object.keys(this.factory.serviceTypes);
      
      console.log('📊 Updating market analysis for all service types...');

      for (const serviceType of serviceTypes) {
        const marketData = await this.factory.performMarketAnalysis(serviceType);
        console.log(`✅ Updated market analysis for ${serviceType}`);
        this.performanceMetrics.marketAnalyses++;
      }

      await this.savePerformanceMetrics();
    } catch (error) {
      console.error('❌ Error updating market analysis:', error);
    }
  }

  async optimizeSalesAgents() {
    try {
      const agents = this.factory.getAllSalesAgents();
      
      console.log(`🤖 Optimizing ${agents.length} sales agents...`);

      for (const agent of agents) {
        // Simulate performance updates
        const performanceUpdate = {
          leadsGenerated: agent.performance.leadsGenerated + Math.floor(Math.random() * 10),
          dealsClosed: agent.performance.dealsClosed + Math.floor(Math.random() * 2),
          revenueGenerated: agent.performance.revenueGenerated + Math.floor(Math.random() * 5000),
          conversionRate: Math.min(1, (agent.performance.dealsClosed / Math.max(1, agent.performance.leadsGenerated)) * 100)
        };

        await this.factory.updateAgentPerformance(agent.id, performanceUpdate);
        
        // Update total revenue
        this.performanceMetrics.revenueGenerated += performanceUpdate.revenueGenerated;
        
        console.log(`✅ Optimized agent: ${agent.name}`);
      }

      await this.savePerformanceMetrics();
    } catch (error) {
      console.error('❌ Error optimizing sales agents:', error);
    }
  }

  async trackPerformance() {
    try {
      const health = await this.factory.healthCheck();
      const metrics = {
        ...this.performanceMetrics,
        systemHealth: health,
        timestamp: new Date()
      };

      // Save performance metrics
      await this.savePerformanceMetrics(metrics);
      
      // Generate performance report
      await this.generatePerformanceReport(metrics);
      
      console.log('📈 Performance tracking completed');
    } catch (error) {
      console.error('❌ Error tracking performance:', error);
    }
  }

  async savePerformanceMetrics(metrics = null) {
    const dataToSave = metrics || this.performanceMetrics;
    
    try {
      await fs.promises.writeFile(
        path.join(__dirname, 'data', 'performance-metrics.json'),
        JSON.stringify(dataToSave, null, 2)
      );
    } catch (error) {
      console.error('❌ Error saving performance metrics:', error);
    }
  }

  async generatePerformanceReport(metrics) {
    const report = {
      summary: {
        totalServices: metrics.systemHealth.services,
        totalAgents: metrics.systemHealth.salesAgents,
        totalRevenue: metrics.revenueGenerated,
        marketAnalyses: metrics.marketAnalyses
      },
      topPerformingServices: await this.getTopPerformingServices(),
      topPerformingAgents: await this.getTopPerformingAgents(),
      marketInsights: await this.getMarketInsights(),
      recommendations: await this.generateRecommendations(metrics),
      timestamp: new Date()
    };

    try {
      await fs.promises.writeFile(
        path.join(__dirname, 'data', 'performance-report.json'),
        JSON.stringify(report, null, 2)
      );
    } catch (error) {
      console.error('❌ Error generating performance report:', error);
    }
  }

  async getTopPerformingServices() {
    const services = this.factory.getAllServices();
    return services
      .sort((a, b) => (b.pricing?.finalPrice || 0) - (a.pricing?.finalPrice || 0))
      .slice(0, 5)
      .map(service => ({
        name: service.name,
        type: service.type,
        price: service.pricing?.finalPrice,
        status: service.status
      }));
  }

  async getTopPerformingAgents() {
    const agents = this.factory.getAllSalesAgents();
    return agents
      .sort((a, b) => b.performance.revenueGenerated - a.performance.revenueGenerated)
      .slice(0, 5)
      .map(agent => ({
        name: agent.name,
        type: agent.type,
        revenue: agent.performance.revenueGenerated,
        conversionRate: agent.performance.conversionRate
      }));
  }

  async getMarketInsights() {
    const insights = [];
    const serviceTypes = Object.keys(this.factory.serviceTypes);
    
    for (const serviceType of serviceTypes) {
      const marketData = this.factory.getMarketData(serviceType);
      if (marketData) {
        insights.push({
          serviceType,
          marketSize: marketData.marketSize,
          growthRate: marketData.growthRate,
          competition: marketData.competition,
          demand: marketData.demand
        });
      }
    }
    
    return insights;
  }

  async generateRecommendations(metrics) {
    const recommendations = [];
    
    // Service recommendations
    if (metrics.servicesCreated < 10) {
      recommendations.push({
        type: 'service_generation',
        priority: 'high',
        action: 'Increase service generation frequency',
        reason: 'Low number of services created'
      });
    }
    
    // Agent recommendations
    if (metrics.revenueGenerated < 50000) {
      recommendations.push({
        type: 'sales_optimization',
        priority: 'medium',
        action: 'Optimize sales agent performance',
        reason: 'Revenue below target'
      });
    }
    
    // Market analysis recommendations
    if (metrics.marketAnalyses < 5) {
      recommendations.push({
        type: 'market_research',
        priority: 'low',
        action: 'Increase market analysis frequency',
        reason: 'Limited market insights'
      });
    }
    
    return recommendations;
  }

  // Helper methods for service generation
  generateServiceName(serviceType) {
    const prefixes = ['NextGen', 'Smart', 'Pro', 'Enterprise', 'Cloud', 'AI-Powered'];
    const suffixes = ['Solution', 'Platform', 'System', 'Service', 'Application'];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    return `${prefix} ${serviceType.replace('-', ' ').toUpperCase()} ${suffix}`;
  }

  generateServiceDescription(serviceType) {
    const descriptions = {
      'web-application': 'A cutting-edge web application solution designed to revolutionize business operations and deliver exceptional user experiences.',
      'mobile-app': 'A state-of-the-art mobile application that provides seamless cross-platform functionality and intuitive user interfaces.',
      'ai-service': 'An advanced AI-powered service that leverages cutting-edge machine learning algorithms to automate complex business processes.',
      'blockchain-service': 'A secure and transparent blockchain-based solution that ensures trust and reliability in digital transactions.',
      'iot-platform': 'A comprehensive IoT platform that enables real-time monitoring, data collection, and intelligent device management.',
      'data-analytics': 'A powerful data analytics solution that transforms complex data into actionable business insights and strategic recommendations.'
    };
    return descriptions[serviceType] || 'A professional-grade service solution engineered to meet and exceed your business requirements.';
  }

  // Getter methods
  getStatus() {
    return {
      isRunning: this.isRunning,
      scheduledTasks: this.scheduledTasks.size,
      performanceMetrics: this.performanceMetrics
    };
  }

  getServices() {
    return this.factory.getAllServices();
  }

  getSalesAgents() {
    return this.factory.getAllSalesAgents();
  }

  getMarketData() {
    return Array.from(this.factory.marketData.entries());
  }

  // Manual service creation
  async createServiceManually(serviceType, config) {
    try {
      const service = await this.factory.createService(serviceType, config);
      this.performanceMetrics.servicesCreated++;
      await this.savePerformanceMetrics();
      return service;
    } catch (error) {
      console.error('❌ Error creating service manually:', error);
      throw error;
    }
  }

  // Manual agent creation
  async createSalesAgentManually(agentType, serviceId, config) {
    try {
      const agent = await this.factory.createSalesAgent(agentType, serviceId, config);
      this.performanceMetrics.agentsDeployed++;
      await this.savePerformanceMetrics();
      return agent;
    } catch (error) {
      console.error('❌ Error creating sales agent manually:', error);
      throw error;
    }
  }
}

module.exports = ServiceGenerationOrchestrator; 