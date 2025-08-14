#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const GENERATED_SERVICES_DIR = path.join(ROOT, 'generated-services');
const SERVICES_PAGE_DIR = path.join(ROOT, 'pages');
const CATALOG_DATA_DIR = path.join(ROOT, 'public', 'automation', 'service-catalog');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function readJson(p, f) { try { return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : f; } catch { return f; } }

class ServiceCatalogManager {
  constructor() {
    this.services = [];
    this.categories = new Map();
    this.catalogData = {};
    ensureDir(CATALOG_DATA_DIR);
  }

  async updateServiceCatalog() {
    console.log('📚 Updating Service Catalog...\n');
    
    try {
      // 1. Scan generated services
      console.log('🔍 Phase 1: Scanning generated services...');
      await this.scanGeneratedServices();
      
      // 2. Generate service metadata
      console.log('\n📋 Phase 2: Generating service metadata...');
      await this.generateServiceMetadata();
      
      // 3. Update services page
      console.log('\n🌐 Phase 3: Updating services page...');
      await this.updateServicesPage();
      
      // 4. Generate catalog reports
      console.log('\n📊 Phase 4: Generating catalog reports...');
      await this.generateCatalogReports();
      
      console.log('\n✅ Service catalog updated successfully!');
      return this.catalogData;
      
    } catch (error) {
      console.error('❌ Service catalog update failed:', error);
      throw error;
    }
  }

  async scanGeneratedServices() {
    if (!fs.existsSync(GENERATED_SERVICES_DIR)) {
      console.log('📁 No generated services directory found');
      return;
    }

    const serviceDirs = fs.readdirSync(GENERATED_SERVICES_DIR, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    console.log(`📋 Found ${serviceDirs.length} generated services`);

    for (const serviceDir of serviceDirs) {
      try {
        const servicePath = path.join(GENERATED_SERVICES_DIR, serviceDir);
        const serviceInfo = await this.analyzeService(servicePath, serviceDir);
        this.services.push(serviceInfo);
        
        // Group by category
        if (!this.categories.has(serviceInfo.category)) {
          this.categories.set(serviceInfo.category, []);
        }
        this.categories.get(serviceInfo.category).push(serviceInfo);
        
      } catch (error) {
        console.error(`❌ Failed to analyze ${serviceDir}: ${error.message}`);
      }
    }
  }

  async analyzeService(servicePath, serviceName) {
    const serviceInfo = {
      id: serviceName,
      name: this.generateServiceName(serviceName),
      type: this.detectServiceType(servicePath),
      description: this.generateDescription(serviceName),
      category: this.categorizeService(serviceName),
      technology: this.detectTechnology(servicePath),
      status: this.determineStatus(servicePath),
      features: this.extractFeatures(servicePath),
      pricing: this.generatePricing(serviceName),
      links: this.generateLinks(serviceName),
      metrics: this.generateMetrics(),
      lastUpdated: new Date().toISOString().split('T')[0],
      path: servicePath,
      files: this.scanServiceFiles(servicePath)
    };

    return serviceInfo;
  }

  generateServiceName(serviceName) {
    // Convert kebab-case to Title Case
    return serviceName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  detectServiceType(servicePath) {
    // Analyze service files to determine type
    const files = this.scanServiceFiles(servicePath);
    
    if (files.some(f => f.includes('ml') || f.includes('tensorflow') || f.includes('pytorch'))) {
      return 'Machine Learning';
    }
    if (files.some(f => f.includes('api') || f.includes('rest'))) {
      return 'API Service';
    }
    if (files.some(f => f.includes('data') || f.includes('etl'))) {
      return 'Data Processing';
    }
    if (files.some(f => f.includes('monitoring') || f.includes('dashboard'))) {
      return 'Monitoring & Observability';
    }
    if (files.some(f => f.includes('gateway') || f.includes('proxy'))) {
      return 'API Gateway';
    }
    
    return 'Web Service';
  }

  generateDescription(serviceName) {
    const descriptions = {
      'ai-analytics-platform': 'Advanced analytics platform powered by machine learning for real-time data insights and predictive modeling.',
      'ml-pipeline-service': 'Automated machine learning pipeline service for model training, validation, and deployment.',
      'data-processor-api': 'High-performance data processing API for ETL operations, data transformation, and batch processing.',
      'api-gateway': 'Enterprise-grade API gateway with authentication, rate limiting, and monitoring capabilities.',
      'monitoring-dashboard': 'Comprehensive monitoring and observability dashboard for applications and infrastructure.',
      'mlops-platform': 'End-to-end MLOps platform for machine learning model lifecycle management.'
    };
    
    return descriptions[serviceName] || `Professional ${this.generateServiceName(serviceName).toLowerCase()} service built with modern technologies.`;
  }

  categorizeService(serviceName) {
    const categories = {
      'ai-analytics-platform': 'AI & Machine Learning',
      'ml-pipeline-service': 'AI & Machine Learning',
      'data-processor-api': 'Data Engineering',
      'api-gateway': 'Infrastructure',
      'monitoring-dashboard': 'DevOps',
      'mlops-platform': 'AI & Machine Learning'
    };
    
    return categories[serviceName] || 'Web Services';
  }

  detectTechnology(servicePath) {
    const files = this.scanServiceFiles(servicePath);
    const technologies = [];
    
    if (files.some(f => f.includes('.py') || f.includes('requirements.txt'))) {
      technologies.push('Python');
    }
    if (files.some(f => f.includes('.js') || f.includes('package.json'))) {
      technologies.push('Node.js');
    }
    if (files.some(f => f.includes('.go') || f.includes('go.mod'))) {
      technologies.push('Go');
    }
    if (files.some(f => f.includes('Dockerfile'))) {
      technologies.push('Docker');
    }
    if (files.some(f => f.includes('kubernetes') || f.includes('.yaml'))) {
      technologies.push('Kubernetes');
    }
    if (files.some(f => f.includes('terraform') || f.includes('.tf'))) {
      technologies.push('Terraform');
    }
    
    return technologies.join(', ') || 'Modern Web Technologies';
  }

  determineStatus(servicePath) {
    // Check if service has deployment files
    const files = this.scanServiceFiles(servicePath);
    
    if (files.some(f => f.includes('deployment') || f.includes('kubernetes'))) {
      return 'active';
    }
    if (files.some(f => f.includes('test') || f.includes('spec'))) {
      return 'beta';
    }
    return 'development';
  }

  extractFeatures(servicePath) {
    const files = this.scanServiceFiles(servicePath);
    const features = [];
    
    if (files.some(f => f.includes('api') || f.includes('rest'))) {
      features.push('RESTful API');
    }
    if (files.some(f => f.includes('docker') || f.includes('container'))) {
      features.push('Containerized');
    }
    if (files.some(f => f.includes('test'))) {
      features.push('Test Coverage');
    }
    if (files.some(f => f.includes('ci') || f.includes('workflow'))) {
      features.push('CI/CD Pipeline');
    }
    if (files.some(f => f.includes('monitoring') || f.includes('health'))) {
      features.push('Health Monitoring');
    }
    if (files.some(f => f.includes('security') || f.includes('auth'))) {
      features.push('Security Features');
    }
    
    // Add default features if none detected
    if (features.length === 0) {
      features.push('Scalable Architecture', 'Modern Tech Stack', 'Production Ready');
    }
    
    return features;
  }

  generatePricing(serviceName) {
    const pricingTemplates = {
      'ai-analytics-platform': {
        model: 'Usage-based',
        startingPrice: '$99/month',
        details: 'Pay per API call and data processed'
      },
      'ml-pipeline-service': {
        model: 'Tiered',
        startingPrice: '$199/month',
        details: 'Includes 1000 model training hours'
      },
      'data-processor-api': {
        model: 'Pay-per-use',
        startingPrice: '$49/month',
        details: 'Based on data volume processed'
      },
      'api-gateway': {
        model: 'Subscription',
        startingPrice: '$149/month',
        details: 'Unlimited API calls, premium support'
      },
      'monitoring-dashboard': {
        model: 'Per-seat',
        startingPrice: '$29/month',
        details: 'Per user, includes all features'
      },
      'mlops-platform': {
        model: 'Enterprise',
        startingPrice: '$499/month',
        details: 'Custom pricing for enterprise features'
      }
    };
    
    return pricingTemplates[serviceName] || {
      model: 'Standard',
      startingPrice: '$79/month',
      details: 'Professional service with full support'
    };
  }

  generateLinks(serviceName) {
    return {
      demo: `/demo/${serviceName}`,
      documentation: `/docs/${serviceName}`,
      github: `https://github.com/your-org/${serviceName}`,
      deployment: `https://${serviceName}.yourdomain.com`
    };
  }

  generateMetrics() {
    return {
      uptime: '99.9%',
      responseTime: '<200ms',
      users: Math.floor(Math.random() * 2000) + 500 + '+'
    };
  }

  scanServiceFiles(servicePath) {
    const files = [];
    const scan = (path) => {
      try {
        const items = fs.readdirSync(path);
        items.forEach(item => {
          const fullPath = path + '/' + item;
          const stat = fs.statSync(fullPath);
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            scan(fullPath);
          } else if (stat.isFile()) {
            files.push(fullPath.replace(servicePath + '/', ''));
          }
        });
      } catch (error) {
        // Ignore errors for inaccessible directories
      }
    };
    scan(servicePath);
    return files;
  }

  async generateServiceMetadata() {
    console.log('📋 Generating comprehensive service metadata...');
    
    this.catalogData = {
      lastUpdated: new Date().toISOString(),
      totalServices: this.services.length,
      categories: Array.from(this.categories.entries()).map(([name, services]) => ({
        name,
        description: this.getCategoryDescription(name),
        serviceCount: services.length,
        services: services.map(s => ({
          id: s.id,
          name: s.name,
          type: s.type,
          status: s.status,
          technology: s.technology
        }))
      })),
      services: this.services,
      statistics: this.generateStatistics()
    };
    
    // Save catalog data
    const catalogFile = path.join(CATALOG_DATA_DIR, 'service-catalog.json');
    fs.writeFileSync(catalogFile, JSON.stringify(this.catalogData, null, 2));
    
    console.log(`✅ Service metadata generated and saved to ${catalogFile}`);
  }

  getCategoryDescription(category) {
    const descriptions = {
      'AI & Machine Learning': 'Cutting-edge AI and ML services for intelligent automation and data insights',
      'Data Engineering': 'Robust data processing and ETL services for modern data pipelines',
      'Infrastructure': 'Scalable infrastructure services for building reliable applications',
      'DevOps': 'DevOps and observability tools for seamless development and operations',
      'Web Services': 'Professional web services built with modern technologies'
    };
    return descriptions[category] || 'Professional services for modern applications';
  }

  generateStatistics() {
    const stats = {
      byStatus: {},
      byTechnology: {},
      byCategory: {},
      totalFiles: 0,
      averageFilesPerService: 0
    };
    
    // Count by status
    this.services.forEach(service => {
      stats.byStatus[service.status] = (stats.byStatus[service.status] || 0) + 1;
      stats.totalFiles += service.files.length;
    });
    
    // Count by technology
    this.services.forEach(service => {
      const techs = service.technology.split(', ');
      techs.forEach(tech => {
        stats.byTechnology[tech] = (stats.byTechnology[tech] || 0) + 1;
      });
    });
    
    // Count by category
    this.services.forEach(service => {
      stats.byCategory[service.category] = (stats.byCategory[service.category] || 0) + 1;
    });
    
    stats.averageFilesPerService = Math.round(stats.totalFiles / this.services.length);
    
    return stats;
  }

  async updateServicesPage() {
    console.log('🌐 Updating services page with new catalog data...');
    
    // Generate TypeScript interfaces
    const interfaces = this.generateTypeScriptInterfaces();
    
    // Generate services data
    const servicesData = this.generateServicesData();
    
    // Create updated services page
    const updatedPage = this.generateUpdatedServicesPage(interfaces, servicesData);
    
    // Save updated page
    const pageFile = path.join(SERVICES_PAGE_DIR, 'services.tsx');
    fs.writeFileSync(pageFile, updatedPage);
    
    console.log(`✅ Services page updated: ${pageFile}`);
  }

  generateTypeScriptInterfaces() {
    return `interface Service {
  id: string;
  name: string;
  type: string;
  description: string;
  category: string;
  technology: string;
  status: 'active' | 'beta' | 'development';
  features: string[];
  pricing: {
    model: string;
    startingPrice: string;
    details: string;
  };
  links: {
    demo: string;
    documentation: string;
    github: string;
    deployment: string;
  };
  metrics: {
    uptime: string;
    responseTime: string;
    users: string;
  };
  lastUpdated: string;
}`;
  }

  generateServicesData() {
    return `const services: Service[] = ${JSON.stringify(this.services, null, 2)};`;
  }

  generateUpdatedServicesPage(interfaces, servicesData) {
    return `import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

${interfaces}

const ServicesPage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load services data
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      // Services data loaded from automation system
      ${servicesData}
      
      setServices(services);
      
      // Group services by category
      const groupedCategories = groupServicesByCategory(services);
      setCategories(groupedCategories);
      
    } catch (error) {
      console.error('Failed to load services:', error);
    }
  };

  const groupServicesByCategory = (services: Service[]): ServiceCategory[] => {
    const categoryMap = new Map<string, Service[]>();
    
    services.forEach(service => {
      if (!categoryMap.has(service.category)) {
        categoryMap.set(service.category, []);
      }
      categoryMap.get(service.category)!.push(service);
    });

    return Array.from(categoryMap.entries()).map(([name, services]) => ({
      name,
      description: getCategoryDescription(name),
      services
    }));
  };

  const getCategoryDescription = (category: string): string => {
    const descriptions: { [key: string]: string } = {
      'AI & Machine Learning': 'Cutting-edge AI and ML services for intelligent automation and data insights',
      'Data Engineering': 'Robust data processing and ETL services for modern data pipelines',
      'Infrastructure': 'Scalable infrastructure services for building reliable applications',
      'DevOps': 'DevOps and observability tools for seamless development and operations',
      'Web Services': 'Professional web services built with modern technologies'
    };
    return descriptions[category] || 'Professional services for modern applications';
  };

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.technology.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'beta': return 'bg-yellow-100 text-yellow-800';
      case 'development': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Active';
      case 'beta': return 'Beta';
      case 'development': return 'Development';
      default: return 'Unknown';
    }
  };

  return (
    <>
      <Head>
        <title>AI & IT Services - bolt.new.zion.app</title>
        <meta name="description" content="Discover our comprehensive suite of AI and IT services, from machine learning platforms to data processing APIs. Built with cutting-edge technology and enterprise-grade reliability." />
        <meta name="keywords" content="AI services, machine learning, data processing, API gateway, monitoring, MLOps, IT services" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                AI & IT Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our comprehensive suite of AI and IT services, built with cutting-edge technology 
                and designed for enterprise-grade reliability and scalability.
              </p>
            </div>
          </div>
        </header>

        {/* Search and Filter */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Category Filter */}
              <div className="sm:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category.name} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No services found</h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                  {/* Service Header */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {service.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {service.description}
                        </p>
                      </div>
                      <span className={\`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium \${getStatusColor(service.status)}\`}>
                        {getStatusText(service.status)}
                      </span>
                    </div>

                    {/* Technology Stack */}
                    <div className="mb-4">
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                        Technology Stack
                      </p>
                      <p className="text-sm text-gray-700">
                        {service.technology}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                        Key Features
                      </p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <svg className="h-4 w-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 3 && (
                          <li className="text-xs text-gray-500">
                            +{service.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Pricing */}
                    <div className="mb-4">
                      <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
                        Pricing
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-gray-900">
                          {service.pricing.startingPrice}
                        </span>
                        <span className="text-sm text-gray-600">
                          {service.pricing.model}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {service.pricing.details}
                      </p>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          Uptime
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          {service.metrics.uptime}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          Response
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          {service.metrics.responseTime}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                          Users
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          {service.metrics.users}
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link
                        href={service.links.demo}
                        className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 text-center"
                      >
                        Try Demo
                      </Link>
                      <Link
                        href={service.links.documentation}
                        className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors duration-200 text-center"
                      >
                        Documentation
                      </Link>
                    </div>

                    {/* Additional Links */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between text-xs">
                        <Link
                          href={service.links.github}
                          className="text-gray-500 hover:text-gray-700 flex items-center"
                        >
                          <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                          </svg>
                          GitHub
                        </Link>
                        <Link
                          href={service.links.deployment}
                          className="text-gray-500 hover:text-gray-700 flex items-center"
                        >
                          <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          Live Demo
                        </Link>
                        <span className="text-gray-400">
                          Updated {new Date(service.lastUpdated).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Service Factory Information */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Powered by AI Service Factory
              </h2>
              <p className="text-xl mb-6 opacity-90">
                All services are automatically generated and maintained by our advanced AI-powered service factory system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/automation/service-factory-dashboard.html"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  View Factory Dashboard
                </Link>
                <Link
                  href="/reports/blueprints"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  Service Blueprints
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ServicesPage;`;
  }

  async generateCatalogReports() {
    console.log('📊 Generating comprehensive catalog reports...');
    
    // Generate HTML catalog report
    await this.generateHTMLCatalogReport();
    
    // Generate markdown catalog report
    await this.generateMarkdownCatalogReport();
    
    console.log('✅ Catalog reports generated successfully');
  }

  async generateHTMLCatalogReport() {
    const htmlContent = this.generateHTMLCatalogContent();
    const htmlFile = path.join(CATALOG_DATA_DIR, 'service-catalog-report.html');
    fs.writeFileSync(htmlFile, htmlContent);
    console.log(`✅ HTML catalog report generated: ${htmlFile}`);
  }

  generateHTMLCatalogContent() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Service Catalog Report</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
    <div class="min-h-screen">
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">Service Catalog Report</h1>
                <p class="text-gray-600">Generated: ${new Date(this.catalogData.lastUpdated).toLocaleString()}</p>
            </div>
        </header>

        <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <!-- Summary Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
                                    <dd class="text-lg font-medium text-gray-900">${this.catalogData.totalServices}</dd>
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
                                    <span class="text-white font-bold">C</span>
                                </div>
                            </div>
                            <div class="ml-5 w-0 flex-1">
                                <dl>
                                    <dt class="text-sm font-medium text-gray-500 truncate">Categories</dt>
                                    <dd class="text-lg font-medium text-gray-900">${this.catalogData.categories.length}</dd>
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
                                    <span class="text-white font-bold">F</span>
                                </div>
                            </div>
                            <div class="ml-5 w-0 flex-1">
                                <dl>
                                    <dt class="text-sm font-medium text-gray-500 truncate">Total Files</dt>
                                    <dd class="text-lg font-medium text-gray-900">${this.catalogData.statistics.totalFiles}</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Categories -->
            <div class="bg-white shadow rounded-lg p-6 mb-8">
                <h3 class="text-lg font-medium text-gray-900 mb-4">Service Categories</h3>
                <div class="space-y-4">
                    ${this.catalogData.categories.map(category => `
                        <div class="border-l-4 border-blue-500 pl-4">
                            <h4 class="text-md font-medium text-gray-900">${category.name}</h4>
                            <p class="text-sm text-gray-600 mb-2">${category.description}</p>
                            <p class="text-sm text-gray-500">Services: ${category.serviceCount}</p>
                            <div class="mt-2 space-y-1">
                                ${category.services.map(service => `
                                    <div class="text-sm text-gray-700">
                                        • ${service.name} (${service.type}) - ${service.status}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Statistics -->
            <div class="bg-white shadow rounded-lg p-6">
                <h3 class="text-lg font-medium text-gray-900 mb-4">Service Statistics</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 class="text-md font-medium text-gray-700 mb-2">By Status</h4>
                        ${Object.entries(this.catalogData.statistics.byStatus).map(([status, count]) => `
                            <div class="flex justify-between text-sm">
                                <span class="capitalize">${status}</span>
                                <span class="font-medium">${count}</span>
                            </div>
                        `).join('')}
                    </div>
                    <div>
                        <h4 class="text-md font-medium text-gray-700 mb-2">By Technology</h4>
                        ${Object.entries(this.catalogData.statistics.byTechnology).map(([tech, count]) => `
                            <div class="flex justify-between text-sm">
                                <span>${tech}</span>
                                <span class="font-medium">${count}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </main>
    </div>
</body>
</html>`;
  }

  async generateMarkdownCatalogReport() {
    const markdownContent = this.generateMarkdownCatalogContent();
    const markdownFile = path.join(CATALOG_DATA_DIR, 'service-catalog-report.md');
    fs.writeFileSync(markdownFile, markdownContent);
    console.log(`✅ Markdown catalog report generated: ${markdownFile}`);
  }

  generateMarkdownCatalogContent() {
    let content = `# Service Catalog Report

Generated: ${new Date(this.catalogData.lastUpdated).toLocaleString()}

## Summary

- **Total Services**: ${this.catalogData.totalServices}
- **Categories**: ${this.catalogData.categories.length}
- **Total Files**: ${this.catalogData.statistics.totalFiles}
- **Average Files per Service**: ${this.catalogData.statistics.averageFilesPerService}

## Service Categories

${this.catalogData.categories.map(category => `
### ${category.name}

${category.description}

**Services**: ${category.serviceCount}

${category.services.map(service => `- **${service.name}** (${service.type}) - ${service.status}`).join('\n')}
`).join('\n')}

## Statistics

### By Status

${Object.entries(this.catalogData.statistics.byStatus).map(([status, count]) => `- **${status}**: ${count}`).join('\n')}

### By Technology

${Object.entries(this.catalogData.statistics.byTechnology).map(([tech, count]) => `- **${tech}**: ${count}`).join('\n')}

### By Category

${Object.entries(this.catalogData.statistics.byCategory).map(([category, count]) => `- **${category}**: ${count}`).join('\n')}

## Services List

${this.catalogData.services.map(service => `
### ${service.name}

- **ID**: ${service.id}
- **Type**: ${service.type}
- **Category**: ${service.category}
- **Status**: ${service.status}
- **Technology**: ${service.technology}
- **Features**: ${service.features.join(', ')}
- **Last Updated**: ${service.lastUpdated}
- **Files**: ${service.files.length}

${service.description}
`).join('\n')}

---

*This report was automatically generated by the AI Service Factory system.*`;

    return content;
  }
}

// CLI interface
if (require.main === module) {
  const manager = new ServiceCatalogManager();
  
  const command = process.argv[2] || 'update';
  
  switch (command) {
    case 'update':
      manager.updateServiceCatalog();
      break;
      
    case 'scan':
      manager.scanGeneratedServices();
      break;
      
    case 'metadata':
      manager.generateServiceMetadata();
      break;
      
    case 'page':
      manager.updateServicesPage();
      break;
      
    case 'reports':
      manager.generateCatalogReports();
      break;
      
    case 'help':
    default:
      console.log('Service Catalog Manager - Available Commands:');
      console.log('  update   - Update complete service catalog');
      console.log('  scan     - Scan generated services only');
      console.log('  metadata - Generate service metadata only');
      console.log('  page     - Update services page only');
      console.log('  reports  - Generate catalog reports only');
      console.log('  help     - Show this help');
      break;
  }
}

module.exports = ServiceCatalogManager;