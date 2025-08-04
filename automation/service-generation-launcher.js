const ServiceGenerationFactory = require('./service-generation-factory');
const fs = require('fs');
const path = require('path');

class ServiceGenerationLauncher {
  constructor() {
    this.factory = null;
    this.isRunning = false;
    this.config = {
      autoGenerateServices: true,
      autoGenerateAds: true,
      autoUpdateMarketData: true,
      serviceGenerationInterval: 7200000, // 2 hours
      adGenerationInterval: 1800000, // 30 minutes
      marketDataUpdateInterval: 3600000, // 1 hour
      maxServices: 100,
      maxSalesAgents: 50
    };
  }

  async start() {
    try {
      console.log('🚀 Starting Service Generation Factory...');
      
      this.factory = new ServiceGenerationFactory();
      this.isRunning = true;
      
      // Start automated processes
      if (this.config.autoGenerateServices) {
        this.startServiceGeneration();
      }
      
      if (this.config.autoGenerateAds) {
        this.startAdGeneration();
      }
      
      if (this.config.autoUpdateMarketData) {
        this.startMarketDataUpdates();
      }
      
      // Start monitoring
      this.startMonitoring();
      
      console.log('✅ Service Generation Factory started successfully');
      console.log(`📊 Current stats: ${this.factory.services.size} services, ${this.factory.salesAgents.size} sales agents`);
      
      return true;
    } catch (error) {
      console.error('❌ Error starting Service Generation Factory:', error);
      return false;
    }
  }

  async stop() {
    try {
      console.log('🛑 Stopping Service Generation Factory...');
      
      this.isRunning = false;
      
      if (this.factory) {
        await this.factory.saveServiceRegistry();
        await this.factory.saveSalesAgentRegistry();
      }
      
      console.log('✅ Service Generation Factory stopped successfully');
      return true;
    } catch (error) {
      console.error('❌ Error stopping Service Generation Factory:', error);
      return false;
    }
  }

  startServiceGeneration() {
    console.log('🔄 Starting automated service generation...');
    
    setInterval(async () => {
      if (!this.isRunning) return;
      
      try {
        if (this.factory.services.size < this.config.maxServices) {
          await this.factory.generateRandomService();
          console.log(`📈 Generated new service. Total: ${this.factory.services.size}`);
        }
      } catch (error) {
        console.error('Error in service generation:', error);
      }
    }, this.config.serviceGenerationInterval);
  }

  startAdGeneration() {
    console.log('📢 Starting automated advertisement generation...');
    
    setInterval(async () => {
      if (!this.isRunning) return;
      
      try {
        await this.factory.generateAdvertisementsForAllServices();
        console.log(`📊 Generated advertisements for ${this.factory.services.size} services`);
      } catch (error) {
        console.error('Error in ad generation:', error);
      }
    }, this.config.adGenerationInterval);
  }

  startMarketDataUpdates() {
    console.log('📈 Starting automated market data updates...');
    
    setInterval(async () => {
      if (!this.isRunning) return;
      
      try {
        await this.factory.updateMarketData();
        console.log('📊 Market data updated successfully');
      } catch (error) {
        console.error('Error updating market data:', error);
      }
    }, this.config.marketDataUpdateInterval);
  }

  startMonitoring() {
    console.log('📊 Starting system monitoring...');
    
    setInterval(async () => {
      if (!this.isRunning) return;
      
      try {
        const analytics = await this.factory.getServiceAnalytics();
        this.logAnalytics(analytics);
      } catch (error) {
        console.error('Error in monitoring:', error);
      }
    }, 300000); // Every 5 minutes
  }

  logAnalytics(analytics) {
    console.log('\n📊 Service Generation Analytics:');
    console.log(`📦 Total Services: ${analytics.totalServices}`);
    console.log(`💰 Average Price: $${analytics.averagePrice.toLocaleString()}`);
    console.log(`🤖 Active Sales Agents: ${analytics.salesAgentPerformance.activeAgents}`);
    console.log(`💵 Total Revenue: $${analytics.salesAgentPerformance.totalRevenue.toLocaleString()}`);
    console.log(`📈 Conversion Rate: ${(analytics.salesAgentPerformance.averageConversionRate * 100).toFixed(2)}%`);
    
    console.log('\n📋 Services by Type:');
    Object.entries(analytics.servicesByType).forEach(([type, count]) => {
      console.log(`  ${type}: ${count} services`);
    });
    
    console.log('\n💵 Revenue by Type:');
    Object.entries(analytics.revenueByType).forEach(([type, revenue]) => {
      console.log(`  ${type}: $${revenue.toLocaleString()}`);
    });
  }

  async createService(type, config = {}) {
    if (!this.factory) {
      throw new Error('Factory not initialized');
    }
    
    return await this.factory.createService(type, config);
  }

  async generateAdvertisement(serviceId) {
    if (!this.factory) {
      throw new Error('Factory not initialized');
    }
    
    return await this.factory.generateAdvertisement(serviceId);
  }

  async getAnalytics() {
    if (!this.factory) {
      throw new Error('Factory not initialized');
    }
    
    return await this.factory.getServiceAnalytics();
  }

  async batchCreateServices(serviceSpecs) {
    if (!this.factory) {
      throw new Error('Factory not initialized');
    }
    
    return await this.factory.batchCreateServices(serviceSpecs);
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      servicesCount: this.factory ? this.factory.services.size : 0,
      salesAgentsCount: this.factory ? this.factory.salesAgents.size : 0,
      config: this.config
    };
  }
}

// CLI interface
if (require.main === module) {
  const launcher = new ServiceGenerationLauncher();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      launcher.start().then(() => {
        console.log('Service Generation Factory is running...');
        console.log('Press Ctrl+C to stop');
      });
      break;
      
    case 'stop':
      launcher.stop().then(() => {
        console.log('Service Generation Factory stopped');
        process.exit(0);
      });
      break;
      
    case 'status':
      console.log('Service Generation Factory Status:');
      console.log(JSON.stringify(launcher.getStatus(), null, 2));
      break;
      
    case 'create-service':
      const type = process.argv[3];
      if (!type) {
        console.error('Usage: node service-generation-launcher.js create-service <type>');
        process.exit(1);
      }
      
      launcher.start().then(async () => {
        try {
          const service = await launcher.createService(type);
          console.log('Created service:', service);
          process.exit(0);
        } catch (error) {
          console.error('Error creating service:', error);
          process.exit(1);
        }
      });
      break;
      
    case 'analytics':
      launcher.start().then(async () => {
        try {
          const analytics = await launcher.getAnalytics();
          console.log('Analytics:', JSON.stringify(analytics, null, 2));
          process.exit(0);
        } catch (error) {
          console.error('Error getting analytics:', error);
          process.exit(1);
        }
      });
      break;
      
    default:
      console.log('Service Generation Factory Launcher');
      console.log('');
      console.log('Usage:');
      console.log('  node service-generation-launcher.js start     - Start the factory');
      console.log('  node service-generation-launcher.js stop      - Stop the factory');
      console.log('  node service-generation-launcher.js status    - Show status');
      console.log('  node service-generation-launcher.js create-service <type> - Create a service');
      console.log('  node service-generation-launcher.js analytics - Show analytics');
      console.log('');
      console.log('Available service types:');
      console.log('  web-application, mobile-app, e-commerce-platform, saas-platform');
      console.log('  ai-chatbot, data-analytics-dashboard, automation-script, blockchain-dapp');
      break;
  }
}

module.exports = ServiceGenerationLauncher; 