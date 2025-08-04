const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');

class ServiceGenerationFactory {
  constructor() {
    this.services = new Map();
    this.salesAgents = new Map();
    this.marketData = new Map();
    this.serviceTemplates = new Map();
    this.analytics = {
      servicesCreated: 0,
      revenueGenerated: 0,
      salesAgentsActive: 0,
      marketTrends: []
    };
    
    this.serviceTypes = {
      'web-application': {
        capabilities: ['frontend-development', 'backend-api', 'database-design'],
        marketRange: { min: 5000, max: 50000, avg: 15000 },
        technologies: ['react', 'node.js', 'postgresql', 'aws'],
        features: ['user-authentication', 'payment-processing', 'admin-dashboard'],
        developmentTime: { min: 2, max: 8, avg: 4 }, // weeks
        complexity: 'medium'
      },
      'mobile-app': {
        capabilities: ['ios-development', 'android-development', 'cross-platform'],
        marketRange: { min: 8000, max: 75000, avg: 25000 },
        technologies: ['react-native', 'flutter', 'swift', 'kotlin'],
        features: ['push-notifications', 'offline-support', 'biometric-auth'],
        developmentTime: { min: 3, max: 12, avg: 6 },
        complexity: 'high'
      },
      'e-commerce-platform': {
        capabilities: ['product-catalog', 'shopping-cart', 'payment-gateway'],
        marketRange: { min: 10000, max: 100000, avg: 35000 },
        technologies: ['shopify', 'woocommerce', 'magento', 'custom'],
        features: ['inventory-management', 'order-tracking', 'customer-reviews'],
        developmentTime: { min: 4, max: 16, avg: 8 },
        complexity: 'high'
      },
      'saas-platform': {
        capabilities: ['subscription-management', 'multi-tenancy', 'analytics'],
        marketRange: { min: 15000, max: 150000, avg: 50000 },
        technologies: ['microservices', 'kubernetes', 'redis', 'elasticsearch'],
        features: ['user-roles', 'billing-system', 'api-gateway'],
        developmentTime: { min: 6, max: 24, avg: 12 },
        complexity: 'very-high'
      },
      'ai-chatbot': {
        capabilities: ['nlp-processing', 'conversation-flow', 'integration'],
        marketRange: { min: 3000, max: 25000, avg: 8000 },
        technologies: ['openai', 'dialogflow', 'rasa', 'custom-nlp'],
        features: ['multi-language', 'sentiment-analysis', 'api-integration'],
        developmentTime: { min: 2, max: 6, avg: 3 },
        complexity: 'medium'
      },
      'data-analytics-dashboard': {
        capabilities: ['data-visualization', 'real-time-processing', 'reporting'],
        marketRange: { min: 5000, max: 40000, avg: 15000 },
        technologies: ['tableau', 'power-bi', 'd3.js', 'apache-kafka'],
        features: ['interactive-charts', 'data-export', 'scheduled-reports'],
        developmentTime: { min: 3, max: 10, avg: 5 },
        complexity: 'medium'
      },
      'automation-script': {
        capabilities: ['process-automation', 'api-integration', 'scheduling'],
        marketRange: { min: 1000, max: 15000, avg: 5000 },
        technologies: ['python', 'node.js', 'bash', 'powershell'],
        features: ['error-handling', 'logging', 'email-notifications'],
        developmentTime: { min: 1, max: 4, avg: 2 },
        complexity: 'low'
      },
      'blockchain-dapp': {
        capabilities: ['smart-contracts', 'web3-integration', 'decentralized-storage'],
        marketRange: { min: 20000, max: 200000, avg: 75000 },
        technologies: ['ethereum', 'polygon', 'ipfs', 'web3.js'],
        features: ['token-economics', 'governance', 'staking-mechanisms'],
        developmentTime: { min: 8, max: 32, avg: 16 },
        complexity: 'very-high'
      }
    };

    this.salesAgentTypes = {
      'digital-marketer': {
        capabilities: ['seo-optimization', 'social-media-marketing', 'content-creation'],
        commission: 0.15,
        targetMarkets: ['startups', 'small-businesses', 'e-commerce'],
        channels: ['linkedin', 'facebook', 'google-ads', 'email']
      },
      'enterprise-sales': {
        capabilities: ['b2b-sales', 'contract-negotiation', 'relationship-building'],
        commission: 0.20,
        targetMarkets: ['enterprises', 'government', 'large-corporations'],
        channels: ['linkedin', 'cold-calling', 'trade-shows', 'referrals']
      },
      'startup-specialist': {
        capabilities: ['pitch-deck-creation', 'fundraising-support', 'mvp-development'],
        commission: 0.25,
        targetMarkets: ['startups', 'investors', 'accelerators'],
        channels: ['angel-list', 'crunchbase', 'startup-events', 'networking']
      },
      'freelance-connector': {
        capabilities: ['project-matching', 'client-communication', 'quality-assurance'],
        commission: 0.10,
        targetMarkets: ['freelancers', 'small-projects', 'quick-deliveries'],
        channels: ['upwork', 'fiverr', 'freelancer', 'local-networks']
      }
    };

    this.init();
  }

  async init() {
    await this.loadServiceRegistry();
    await this.loadSalesAgentRegistry();
    await this.updateMarketData();
    this.startAutomatedProcesses();
  }

  async createService(type, config = {}) {
    const serviceType = this.serviceTypes[type];
    if (!serviceType) {
      throw new Error(`Unknown service type: ${type}`);
    }

    const serviceId = uuidv4();
    const marketPrice = this.calculateMarketPrice(serviceType.marketRange);
    const developmentTime = this.calculateDevelopmentTime(serviceType.developmentTime);

    const service = {
      id: serviceId,
      type: type,
      name: this.generateServiceName(type),
      description: this.generateServiceDescription(type, config),
      price: marketPrice,
      developmentTime: developmentTime,
      technologies: serviceType.technologies,
      features: serviceType.features,
      capabilities: serviceType.capabilities,
      complexity: serviceType.complexity,
      status: 'created',
      createdAt: new Date(),
      config: config,
      marketData: {
        demand: this.analyzeMarketDemand(type),
        competition: this.analyzeCompetition(type),
        trends: this.analyzeMarketTrends(type)
      }
    };

    this.services.set(serviceId, service);
    await this.saveServiceRegistry();
    await this.createSalesAgentForService(serviceId);
    
    this.analytics.servicesCreated++;
    return service;
  }

  async createSalesAgentForService(serviceId) {
    const service = this.services.get(serviceId);
    if (!service) return;

    const agentType = this.selectBestSalesAgentType(service);
    const agentId = uuidv4();

    const salesAgent = {
      id: agentId,
      serviceId: serviceId,
      type: agentType,
      name: this.generateAgentName(agentType),
      capabilities: this.salesAgentTypes[agentType].capabilities,
      commission: this.salesAgentTypes[agentType].commission,
      targetMarkets: this.salesAgentTypes[agentType].targetMarkets,
      channels: this.salesAgentTypes[agentType].channels,
      status: 'active',
      performance: {
        leadsGenerated: 0,
        dealsClosed: 0,
        revenueGenerated: 0,
        conversionRate: 0
      },
      createdAt: new Date()
    };

    this.salesAgents.set(agentId, salesAgent);
    await this.saveSalesAgentRegistry();
    this.analytics.salesAgentsActive++;
    
    // Start the sales agent
    this.startSalesAgent(agentId);
  }

  calculateMarketPrice(range) {
    const { min, max, avg } = range;
    // Add some randomness to the average price
    const variation = (Math.random() - 0.5) * 0.3; // ±15% variation
    return Math.round(avg * (1 + variation));
  }

  calculateDevelopmentTime(timeRange) {
    const { min, max, avg } = timeRange;
    const variation = (Math.random() - 0.5) * 0.4; // ±20% variation
    return Math.round(avg * (1 + variation));
  }

  generateServiceName(type) {
    const prefixes = {
      'web-application': ['Smart', 'Pro', 'Elite', 'Advanced'],
      'mobile-app': ['Mobile', 'App', 'Go', 'Quick'],
      'e-commerce-platform': ['Shop', 'Store', 'Market', 'Trade'],
      'saas-platform': ['Cloud', 'SaaS', 'Enterprise', 'Business'],
      'ai-chatbot': ['AI', 'Smart', 'Intelligent', 'Auto'],
      'data-analytics-dashboard': ['Analytics', 'Insights', 'Data', 'Metrics'],
      'automation-script': ['Auto', 'Script', 'Bot', 'Process'],
      'blockchain-dapp': ['DeFi', 'Crypto', 'Chain', 'Token']
    };

    const suffixes = {
      'web-application': ['Platform', 'System', 'Solution', 'Hub'],
      'mobile-app': ['App', 'Mobile', 'Go', 'Pro'],
      'e-commerce-platform': ['Store', 'Marketplace', 'Shop', 'Platform'],
      'saas-platform': ['Suite', 'Platform', 'System', 'Hub'],
      'ai-chatbot': ['Assistant', 'Bot', 'Helper', 'Agent'],
      'data-analytics-dashboard': ['Dashboard', 'Analytics', 'Insights', 'Reports'],
      'automation-script': ['Automation', 'Script', 'Bot', 'Process'],
      'blockchain-dapp': ['DApp', 'Protocol', 'Platform', 'Network']
    };

    const prefix = prefixes[type][Math.floor(Math.random() * prefixes[type].length)];
    const suffix = suffixes[type][Math.floor(Math.random() * suffixes[type].length)];
    
    return `${prefix} ${suffix}`;
  }

  generateServiceDescription(type, config) {
    const descriptions = {
      'web-application': 'A modern, responsive web application built with cutting-edge technologies, featuring user authentication, payment processing, and an intuitive admin dashboard.',
      'mobile-app': 'A cross-platform mobile application with offline capabilities, push notifications, and seamless user experience across iOS and Android platforms.',
      'e-commerce-platform': 'A comprehensive e-commerce solution with product catalog management, secure payment processing, and advanced inventory tracking.',
      'saas-platform': 'A scalable SaaS platform with multi-tenant architecture, subscription management, and advanced analytics capabilities.',
      'ai-chatbot': 'An intelligent chatbot powered by advanced NLP, capable of handling complex conversations and integrating with multiple platforms.',
      'data-analytics-dashboard': 'A powerful analytics dashboard with real-time data visualization, interactive charts, and comprehensive reporting capabilities.',
      'automation-script': 'An efficient automation script that streamlines business processes, reduces manual work, and improves operational efficiency.',
      'blockchain-dapp': 'A decentralized application built on blockchain technology, featuring smart contracts, token economics, and secure transactions.'
    };

    return descriptions[type] || 'A custom solution tailored to your specific requirements.';
  }

  generateAgentName(type) {
    const names = {
      'digital-marketer': ['Alex', 'Jordan', 'Casey', 'Taylor', 'Morgan'],
      'enterprise-sales': ['Sarah', 'Michael', 'Jennifer', 'David', 'Emily'],
      'startup-specialist': ['Chris', 'Ashley', 'Ryan', 'Jessica', 'Brandon'],
      'freelance-connector': ['Sam', 'Alex', 'Jordan', 'Taylor', 'Morgan']
    };

    const surnames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis'];
    const name = names[type][Math.floor(Math.random() * names[type].length)];
    const surname = surnames[Math.floor(Math.random() * surnames.length)];
    
    return `${name} ${surname}`;
  }

  selectBestSalesAgentType(service) {
    const { type, price, complexity } = service;
    
    // Enterprise sales for high-value, complex services
    if (price > 50000 || complexity === 'very-high') {
      return 'enterprise-sales';
    }
    
    // Startup specialist for innovative, high-potential services
    if (type === 'blockchain-dapp' || type === 'saas-platform') {
      return 'startup-specialist';
    }
    
    // Freelance connector for simple, quick services
    if (price < 10000 || complexity === 'low') {
      return 'freelance-connector';
    }
    
    // Digital marketer for everything else
    return 'digital-marketer';
  }

  async updateMarketData() {
    try {
      // Simulate market data updates
      const marketTrends = [
        { trend: 'AI/ML Services', growth: 0.25, demand: 'high' },
        { trend: 'Blockchain Solutions', growth: 0.15, demand: 'medium' },
        { trend: 'E-commerce Platforms', growth: 0.20, demand: 'high' },
        { trend: 'Mobile Applications', growth: 0.18, demand: 'high' },
        { trend: 'SaaS Platforms', growth: 0.22, demand: 'high' },
        { trend: 'Automation Scripts', growth: 0.12, demand: 'medium' },
        { trend: 'Data Analytics', growth: 0.30, demand: 'very-high' }
      ];

      this.marketData.set('trends', marketTrends);
      this.marketData.set('lastUpdate', new Date());
    } catch (error) {
      console.error('Error updating market data:', error);
    }
  }

  analyzeMarketDemand(type) {
    const trends = this.marketData.get('trends') || [];
    const relevantTrend = trends.find(t => 
      t.trend.toLowerCase().includes(type.replace('-', ' '))
    );
    
    return relevantTrend ? relevantTrend.demand : 'medium';
  }

  analyzeCompetition(type) {
    const competitionLevels = {
      'web-application': 'high',
      'mobile-app': 'high',
      'e-commerce-platform': 'medium',
      'saas-platform': 'medium',
      'ai-chatbot': 'low',
      'data-analytics-dashboard': 'medium',
      'automation-script': 'high',
      'blockchain-dapp': 'low'
    };
    
    return competitionLevels[type] || 'medium';
  }

  analyzeMarketTrends(type) {
    const trends = this.marketData.get('trends') || [];
    return trends.filter(t => 
      t.trend.toLowerCase().includes(type.replace('-', ' '))
    );
  }

  async startSalesAgent(agentId) {
    const agent = this.salesAgents.get(agentId);
    if (!agent) return;

    // Simulate sales agent activities
    setInterval(async () => {
      await this.simulateSalesActivity(agentId);
    }, 300000); // Every 5 minutes
  }

  async simulateSalesActivity(agentId) {
    const agent = this.salesAgents.get(agentId);
    if (!agent) return;

    const service = this.services.get(agent.serviceId);
    if (!service) return;

    // Simulate lead generation
    const leadChance = Math.random();
    if (leadChance > 0.7) {
      agent.performance.leadsGenerated++;
      
      // Simulate deal closing
      const dealChance = Math.random();
      if (dealChance > 0.8) {
        agent.performance.dealsClosed++;
        const revenue = service.price * agent.commission;
        agent.performance.revenueGenerated += revenue;
        this.analytics.revenueGenerated += revenue;
      }
    }

    // Update conversion rate
    if (agent.performance.leadsGenerated > 0) {
      agent.performance.conversionRate = 
        agent.performance.dealsClosed / agent.performance.leadsGenerated;
    }

    await this.saveSalesAgentRegistry();
  }

  async generateAdvertisement(serviceId) {
    const service = this.services.get(serviceId);
    if (!service) return null;

    const adTemplates = {
      'web-application': {
        headline: `Transform Your Business with Our ${service.name}`,
        subheadline: `Professional web application with ${service.features.join(', ')}`,
        cta: 'Get Started Today',
        benefits: ['24/7 Support', 'Scalable Architecture', 'Modern UI/UX']
      },
      'mobile-app': {
        headline: `Go Mobile with ${service.name}`,
        subheadline: `Cross-platform mobile app with ${service.features.join(', ')}`,
        cta: 'Download Now',
        benefits: ['iOS & Android', 'Offline Support', 'Push Notifications']
      },
      'e-commerce-platform': {
        headline: `Launch Your Online Store with ${service.name}`,
        subheadline: `Complete e-commerce solution with ${service.features.join(', ')}`,
        cta: 'Start Selling',
        benefits: ['Secure Payments', 'Inventory Management', 'Analytics Dashboard']
      },
      'saas-platform': {
        headline: `Scale Your Business with ${service.name}`,
        subheadline: `Enterprise SaaS platform with ${service.features.join(', ')}`,
        cta: 'Start Free Trial',
        benefits: ['Multi-tenant', 'API Access', 'Advanced Analytics']
      },
      'ai-chatbot': {
        headline: `Automate Customer Support with ${service.name}`,
        subheadline: `AI-powered chatbot with ${service.features.join(', ')}`,
        cta: 'Deploy Now',
        benefits: ['24/7 Availability', 'Multi-language', 'Smart Responses']
      },
      'data-analytics-dashboard': {
        headline: `Get Insights with ${service.name}`,
        subheadline: `Advanced analytics dashboard with ${service.features.join(', ')}`,
        cta: 'View Demo',
        benefits: ['Real-time Data', 'Interactive Charts', 'Custom Reports']
      },
      'automation-script': {
        headline: `Automate Everything with ${service.name}`,
        subheadline: `Efficient automation script with ${service.features.join(', ')}`,
        cta: 'Automate Now',
        benefits: ['Time Saving', 'Error Reduction', 'Cost Effective']
      },
      'blockchain-dapp': {
        headline: `Join the Future with ${service.name}`,
        subheadline: `Decentralized application with ${service.features.join(', ')}`,
        cta: 'Launch DApp',
        benefits: ['Smart Contracts', 'Token Economics', 'Secure Transactions']
      }
    };

    const template = adTemplates[service.type];
    if (!template) return null;

    return {
      serviceId: serviceId,
      serviceName: service.name,
      headline: template.headline,
      subheadline: template.subheadline,
      cta: template.cta,
      benefits: template.benefits,
      price: service.price,
      developmentTime: service.developmentTime,
      technologies: service.technologies.slice(0, 3), // Show top 3 technologies
      marketData: service.marketData
    };
  }

  async batchCreateServices(serviceSpecs) {
    const createdServices = [];
    
    for (const spec of serviceSpecs) {
      try {
        const service = await this.createService(spec.type, spec.config);
        createdServices.push(service);
      } catch (error) {
        console.error(`Error creating service ${spec.type}:`, error);
      }
    }
    
    return createdServices;
  }

  async getServiceAnalytics() {
    const servicesByType = {};
    const revenueByType = {};
    
    for (const service of this.services.values()) {
      if (!servicesByType[service.type]) {
        servicesByType[service.type] = 0;
        revenueByType[service.type] = 0;
      }
      servicesByType[service.type]++;
      revenueByType[service.type] += service.price;
    }
    
    return {
      totalServices: this.services.size,
      servicesByType,
      revenueByType,
      averagePrice: this.calculateAveragePrice(),
      marketTrends: this.marketData.get('trends') || [],
      salesAgentPerformance: this.getSalesAgentPerformance()
    };
  }

  calculateAveragePrice() {
    if (this.services.size === 0) return 0;
    const totalPrice = Array.from(this.services.values())
      .reduce((sum, service) => sum + service.price, 0);
    return Math.round(totalPrice / this.services.size);
  }

  getSalesAgentPerformance() {
    const performance = {
      totalAgents: this.salesAgents.size,
      activeAgents: 0,
      totalRevenue: 0,
      averageConversionRate: 0
    };
    
    let totalConversionRate = 0;
    let activeCount = 0;
    
    for (const agent of this.salesAgents.values()) {
      if (agent.status === 'active') {
        performance.activeAgents++;
        activeCount++;
      }
      performance.totalRevenue += agent.performance.revenueGenerated;
      totalConversionRate += agent.performance.conversionRate;
    }
    
    if (activeCount > 0) {
      performance.averageConversionRate = totalConversionRate / activeCount;
    }
    
    return performance;
  }

  async loadServiceRegistry() {
    try {
      const registryPath = path.join(__dirname, 'data', 'service-registry.json');
      if (fs.existsSync(registryPath)) {
        const data = fs.readFileSync(registryPath, 'utf8');
        const registry = JSON.parse(data);
        this.services = new Map(Object.entries(registry));
      }
    } catch (error) {
      console.error('Error loading service registry:', error);
    }
  }

  async saveServiceRegistry() {
    try {
      const registryPath = path.join(__dirname, 'data', 'service-registry.json');
      const dataDir = path.dirname(registryPath);
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      
      const registry = Object.fromEntries(this.services);
      fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2));
    } catch (error) {
      console.error('Error saving service registry:', error);
    }
  }

  async loadSalesAgentRegistry() {
    try {
      const registryPath = path.join(__dirname, 'data', 'sales-agent-registry.json');
      if (fs.existsSync(registryPath)) {
        const data = fs.readFileSync(registryPath, 'utf8');
        const registry = JSON.parse(data);
        this.salesAgents = new Map(Object.entries(registry));
      }
    } catch (error) {
      console.error('Error loading sales agent registry:', error);
    }
  }

  async saveSalesAgentRegistry() {
    try {
      const registryPath = path.join(__dirname, 'data', 'sales-agent-registry.json');
      const dataDir = path.dirname(registryPath);
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      
      const registry = Object.fromEntries(this.salesAgents);
      fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2));
    } catch (error) {
      console.error('Error saving sales agent registry:', error);
    }
  }

  startAutomatedProcesses() {
    // Update market data every hour
    setInterval(async () => {
      await this.updateMarketData();
    }, 3600000);

    // Generate new services every 2 hours
    setInterval(async () => {
      await this.generateRandomService();
    }, 7200000);

    // Generate advertisements every 30 minutes
    setInterval(async () => {
      await this.generateAdvertisementsForAllServices();
    }, 1800000);
  }

  async generateRandomService() {
    const serviceTypes = Object.keys(this.serviceTypes);
    const randomType = serviceTypes[Math.floor(Math.random() * serviceTypes.length)];
    
    try {
      await this.createService(randomType, {});
      console.log(`Generated new service: ${randomType}`);
    } catch (error) {
      console.error('Error generating random service:', error);
    }
  }

  async generateAdvertisementsForAllServices() {
    for (const service of this.services.values()) {
      const advertisement = await this.generateAdvertisement(service.id);
      if (advertisement) {
        // Store advertisement or send to marketing channels
        console.log(`Generated advertisement for ${service.name}`);
      }
    }
  }

  getService(id) {
    return this.services.get(id);
  }

  getAllServices() {
    return Array.from(this.services.values());
  }

  getServicesByType(type) {
    return Array.from(this.services.values())
      .filter(service => service.type === type);
  }

  getSalesAgent(id) {
    return this.salesAgents.get(id);
  }

  getAllSalesAgents() {
    return Array.from(this.salesAgents.values());
  }

  getSalesAgentsByType(type) {
    return Array.from(this.salesAgents.values())
      .filter(agent => agent.type === type);
  }
}

module.exports = ServiceGenerationFactory; 