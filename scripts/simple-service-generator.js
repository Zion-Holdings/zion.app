#!/usr/bin/env node

/**
 * Simple Service Generator - Creates new services continuously
 * This is a lightweight version for maximum compatibility
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SimpleServiceGenerator {
  constructor() {
    this.appRoot = process.cwd();
    this.servicesDir = path.join(this.appRoot, 'pages', 'services');
    this.configPath = path.join(this.appRoot, 'automation', 'simple-service-config.json');
    
    this.config = this.loadConfiguration();
    this.serviceCount = 0;
    
    this.serviceTemplates = this.loadServiceTemplates();
    this.serviceCategories = this.loadServiceCategories();
    
    this.results = {
      timestamp: new Date().toISOString(),
      servicesCreated: [],
      totalServices: 0
    };
  }

  async run() {
    console.log('🚀 Starting Simple Service Generator...');
    
    try {
      await this.ensureDirectories();
      await this.analyzeCurrentServices();
      await this.startContinuousGeneration();
      await this.saveResults();
      
      console.log('✅ Simple Service Generator completed successfully!');
      return this.results;
    } catch (error) {
      console.error('❌ Error in Simple Service Generator:', error);
      throw error;
    }
  }

  loadConfiguration() {
    if (fs.existsSync(this.configPath)) {
      return JSON.parse(fs.readFileSync(this.configPath, 'utf8'));
    }
    
    const defaultConfig = {
      generation: {
        enabled: true,
        intervalMs: 20000, // Generate every 20 seconds
        batchSize: 2, // Create 2 services per batch
        maxServices: 1000
      },
      deployment: {
        autoCommit: true,
        autoPush: true
      }
    };
    
    fs.writeFileSync(this.configPath, JSON.stringify(defaultConfig, null, 2));
    return defaultConfig;
  }

  loadServiceTemplates() {
    return {
      basicService: {
        title: '{category} Service',
        description: 'Professional {category} solution for modern businesses',
        features: [
          'Professional service delivery',
          'Quality assurance',
          'Customer support',
          'Regular updates',
          'Scalable solutions'
        ],
        pricing: [
          { plan: 'Basic', price: '$49/month', features: ['Core features', 'Email support'] },
          { plan: 'Professional', price: '$149/month', features: ['All features', 'Priority support'] },
          { plan: 'Enterprise', price: '$299/month', features: ['Custom features', 'Dedicated support'] }
        ]
      },
      premiumService: {
        title: 'Premium {category} Solution',
        description: 'Advanced {category} solution with premium features',
        features: [
          'Advanced capabilities',
          'Premium support',
          'Custom integrations',
          'Performance optimization',
          'Security features'
        ],
        pricing: [
          { plan: 'Standard', price: '$99/month', features: ['Premium features', 'Email support'] },
          { plan: 'Premium', price: '$199/month', features: ['All premium features', 'Phone support'] },
          { plan: 'Enterprise', price: '$399/month', features: ['Full customization', 'Dedicated support'] }
        ]
      }
    };
  }

  loadServiceCategories() {
    return [
      'Web Development',
      'Mobile Development',
      'Cloud Services',
      'Data Analytics',
      'AI Solutions',
      'Cybersecurity',
      'DevOps',
      'Consulting',
      'Training',
      'Support'
    ];
  }

  async ensureDirectories() {
    console.log('📁 Ensuring service directories exist...');
    
    const dirs = [
      this.servicesDir,
      path.join(this.appRoot, 'automation', 'services'),
      path.join(this.appRoot, 'pages', 'api', 'services')
    ];
    
    for (const dir of dirs) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`✅ Created directory: ${dir}`);
      }
    }
  }

  async analyzeCurrentServices() {
    console.log('🔍 Analyzing current services...');
    
    const totalServices = this.countFiles(this.servicesDir, '*.tsx');
    this.serviceCount = totalServices;
    
    console.log(`📊 Current services: ${totalServices}`);
    
    this.results.totalServices = totalServices;
  }

  async startContinuousGeneration() {
    console.log('🚀 Starting continuous service generation...');
    
    // Generate services immediately
    await this.generateServiceBatch();
    
    // Set up continuous generation
    setInterval(async () => {
      await this.generateServiceBatch();
    }, this.config.generation.intervalMs);
    
    console.log(`✅ Continuous generation started (every ${this.config.generation.intervalMs}ms)`);
  }

  async generateServiceBatch() {
    const batchSize = this.config.generation.batchSize;
    const servicesCreated = [];
    
    console.log(`🏭 Generating batch of ${batchSize} services...`);
    
    for (let i = 0; i < batchSize; i++) {
      try {
        const service = await this.createNewService();
        servicesCreated.push(service);
        this.serviceCount++;
      } catch (error) {
        console.error(`❌ Failed to create service ${i}:`, error.message);
      }
    }
    
    this.results.servicesCreated.push(...servicesCreated);
    
    console.log(`✅ Generated ${servicesCreated.length} services. Total: ${this.serviceCount}`);
    
    // Deploy if configured
    if (this.config.deployment.autoCommit) {
      await this.deployServices();
    }
  }

  async createNewService() {
    const timestamp = Date.now();
    const serviceId = `simple-service-${timestamp}-${Math.random().toString(36).substr(2, 9)}`;
    const category = this.pickRandom(this.serviceCategories);
    const template = this.pickRandom(Object.keys(this.serviceTemplates));
    
    const serviceData = {
      id: serviceId,
      category: category,
      template: template,
      title: this.serviceTemplates[template].title.replace('{category}', category),
      description: this.serviceTemplates[template].description.replace('{category}', category),
      features: this.serviceTemplates[template].features,
      pricing: this.serviceTemplates[template].pricing,
      createdAt: new Date().toISOString(),
      status: 'active',
      metadata: {
        generatedBy: 'simple-service-generator',
        version: '1.0.0'
      }
    };
    
    // Create service page
    await this.createServicePage(serviceData);
    
    // Create service configuration
    await this.createServiceConfig(serviceData);
    
    console.log(`✅ Created service: ${serviceData.title}`);
    return serviceData;
  }

  async createServicePage(serviceData) {
    const pagePath = path.join(this.servicesDir, `${serviceData.id}.tsx`);
    
    const pageContent = this.generateServicePageContent(serviceData);
    fs.writeFileSync(pagePath, pageContent);
    
    console.log(`📄 Created service page: ${pagePath}`);
  }

  generateServicePageContent(serviceData) {
    return `import Head from 'next/head';
import { useState } from 'react';

export default function ${serviceData.id.charAt(0).toUpperCase() + serviceData.id.slice(1)}Service() {
  const [selectedPlan, setSelectedPlan] = useState(0);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>${serviceData.title} - Zion Tech Group</title>
        <meta name="description" content="${serviceData.description}" />
        <meta name="keywords" content="${serviceData.category.toLowerCase()}, technology services" />
        <link rel="canonical" href="https://ziontechgroup.com/services/${serviceData.id}" />
      </Head>
      
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            ${serviceData.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ${serviceData.description}
          </p>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.features.map((feature, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <h3 className="text-lg font-semibold mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {serviceData.pricing.map((plan, index) => (
              <div 
                key={index} 
                className={\`bg-slate-800 p-6 rounded-lg border-2 \${
                  selectedPlan === index ? 'border-blue-500' : 'border-slate-700'
                }\`}
                onClick={() => setSelectedPlan(index)}
              >
                <h3 className="text-xl font-bold mb-2">{plan.plan}</h3>
                <div className="text-3xl font-bold mb-4 text-blue-400">{plan.price}</div>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6">Transform your business with our ${serviceData.category.toLowerCase()} solutions</p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
            Contact Us Today
          </button>
        </div>
      </main>
    </div>
  );
}`;
  }

  async createServiceConfig(serviceData) {
    const configPath = path.join(this.appRoot, 'automation', 'services', `${serviceData.id}.json`);
    fs.writeFileSync(configPath, JSON.stringify(serviceData, null, 2));
    
    console.log(`⚙️ Created service config: ${configPath}`);
  }

  async deployServices() {
    console.log('🚀 Deploying services...');
    
    try {
      if (this.config.deployment.autoCommit) {
        execSync('git add .', { cwd: this.appRoot });
        execSync('git commit -m "Auto-generate services"', { cwd: this.appRoot });
        console.log('✅ Services committed');
      }
      
      if (this.config.deployment.autoPush) {
        execSync('git push origin main', { cwd: this.appRoot });
        console.log('✅ Services pushed to repository');
      }
      
    } catch (error) {
      console.error('❌ Deployment failed:', error.message);
    }
  }

  async saveResults() {
    const resultsPath = path.join(this.appRoot, 'automation', 'reports', 'simple-service-generator-results.json');
    
    // Ensure reports directory exists
    const reportsDir = path.dirname(resultsPath);
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }
    
    fs.writeFileSync(resultsPath, JSON.stringify(this.results, null, 2));
    console.log(`💾 Saved results to: ${resultsPath}`);
  }

  countFiles(directory, pattern) {
    if (!fs.existsSync(directory)) return 0;
    
    try {
      const files = fs.readdirSync(directory);
      return files.filter(file => file.includes(pattern.replace('*', ''))).length;
    } catch (error) {
      return 0;
    }
  }

  pickRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  async stop() {
    console.log('🛑 Stopping Simple Service Generator...');
    console.log('✅ Service generator stopped');
  }
}

// Export the class
module.exports = SimpleServiceGenerator;

// If run directly, start the generator
if (require.main === module) {
  const generator = new SimpleServiceGenerator();
  
  // Handle graceful shutdown
  process.on('SIGINT', async () => {
    console.log('\n🛑 Received SIGINT, shutting down gracefully...');
    await generator.stop();
    process.exit(0);
  });
  
  process.on('SIGTERM', async () => {
    console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
    await generator.stop();
    process.exit(0);
  });
  
  // Start the generator
  generator.run().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  });
}
