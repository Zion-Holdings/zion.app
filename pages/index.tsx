import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface Service {
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
  path?: string;
  files?: string[];
}

interface ServiceCategory {
  name: string;
  description: string;
  services: Service[];
}

const HomePage: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [categories, setCategories] = useState<ServiceCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load services data
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      setLoading(true);
      
      // Dynamic services data based on generated services
      const services: Service[] = [
        {
          id: "ai-ml-platform-demo",
          name: "AI/ML Platform",
          type: "Machine Learning Platform",
          description: "Advanced AI/ML platform with automated model training, deployment, and monitoring capabilities.",
          category: "AI & Machine Learning",
          technology: "Python, TensorFlow, PyTorch, Docker, Kubernetes",
          status: "active",
          features: [
            "Automated ML Pipeline",
            "Model Versioning",
            "Real-time Inference",
            "AutoML Capabilities",
            "MLOps Integration"
          ],
          pricing: {
            model: "Enterprise",
            startingPrice: "$299/month",
            details: "Full AI/ML platform with enterprise support"
          },
          links: {
            demo: "/demo/ai-ml-platform-demo",
            documentation: "/docs/ai-ml-platform-demo",
            github: "https://github.com/your-org/ai-ml-platform-demo",
            deployment: "https://ai-ml-platform.yourdomain.com"
          },
          metrics: {
            uptime: "99.9%",
            responseTime: "<100ms",
            users: "1,200+"
          },
          lastUpdated: "2025-08-15",
          path: "/workspace/generated-services/ai-ml-platform-demo"
        },
        {
          id: "data-pipeline-demo",
          name: "Data Pipeline Service",
          type: "Data Engineering",
          description: "Scalable data processing pipeline with ETL, streaming, and real-time analytics capabilities.",
          category: "Data Engineering",
          technology: "Apache Kafka, Apache Spark, Python, Docker",
          status: "active",
          features: [
            "Real-time Streaming",
            "ETL Processing",
            "Data Quality Checks",
            "Scalable Architecture",
            "Monitoring Dashboard"
          ],
          pricing: {
            model: "Professional",
            startingPrice: "$199/month",
            details: "Enterprise-grade data pipeline service"
          },
          links: {
            demo: "/demo/data-pipeline-demo",
            documentation: "/docs/data-pipeline-demo",
            github: "https://github.com/your-org/data-pipeline-demo",
            deployment: "https://data-pipeline.yourdomain.com"
          },
          metrics: {
            uptime: "99.8%",
            responseTime: "<50ms",
            users: "850+"
          },
          lastUpdated: "2025-08-15",
          path: "/workspace/generated-services/data-pipeline-demo"
        },
        {
          id: "microservice-api-demo",
          name: "Microservice API Gateway",
          type: "API Service",
          description: "High-performance microservice API gateway with load balancing, authentication, and monitoring.",
          category: "Infrastructure",
          technology: "Node.js, Express, Redis, Docker, Kubernetes",
          status: "active",
          features: [
            "API Gateway",
            "Load Balancing",
            "Authentication",
            "Rate Limiting",
            "API Documentation"
          ],
          pricing: {
            model: "Standard",
            startingPrice: "$149/month",
            details: "Production-ready API gateway service"
          },
          links: {
            demo: "/demo/microservice-api-demo",
            documentation: "/docs/microservice-api-demo",
            github: "https://github.com/your-org/microservice-api-demo",
            deployment: "https://api-gateway.yourdomain.com"
          },
          metrics: {
            uptime: "99.9%",
            responseTime: "<25ms",
            users: "2,100+"
          },
          lastUpdated: "2025-08-15",
          path: "/workspace/generated-services/microservice-api-demo"
        },
        {
          id: "real-time-analytics-demo",
          name: "Real-time Analytics Platform",
          type: "Analytics Service",
          description: "Real-time analytics platform with streaming data processing and interactive dashboards.",
          category: "Data Engineering",
          technology: "Apache Flink, InfluxDB, Grafana, Python",
          status: "beta",
          features: [
            "Real-time Processing",
            "Interactive Dashboards",
            "Data Visualization",
            "Alerting System",
            "Custom Metrics"
          ],
          pricing: {
            model: "Professional",
            startingPrice: "$179/month",
            details: "Real-time analytics with custom dashboards"
          },
          links: {
            demo: "/demo/real-time-analytics-demo",
            documentation: "/docs/real-time-analytics-demo",
            github: "https://github.com/your-org/real-time-analytics-demo",
            deployment: "https://analytics.yourdomain.com"
          },
          metrics: {
            uptime: "99.7%",
            responseTime: "<75ms",
            users: "650+"
          },
          lastUpdated: "2025-08-15",
          path: "/workspace/generated-services/real-time-analytics-demo"
        },
        {
          id: "iot-platform-demo",
          name: "IoT Platform",
          type: "IoT Service",
          description: "Comprehensive IoT platform for device management, data collection, and real-time monitoring.",
          category: "IoT & Edge",
          technology: "MQTT, Node.js, MongoDB, Docker, Kubernetes",
          status: "beta",
          features: [
            "Device Management",
            "Data Collection",
            "Real-time Monitoring",
            "Alert System",
            "Scalable Architecture"
          ],
          pricing: {
            model: "Enterprise",
            startingPrice: "$399/month",
            details: "Full IoT platform with device management"
          },
          links: {
            demo: "/demo/iot-platform-demo",
            documentation: "/docs/iot-platform-demo",
            github: "https://github.com/your-org/iot-platform-demo",
            deployment: "https://iot-platform.yourdomain.com"
          },
          metrics: {
            uptime: "99.6%",
            responseTime: "<150ms",
            users: "450+"
          },
          lastUpdated: "2025-08-15",
          path: "/workspace/generated-services/iot-platform-demo"
        },
        {
          id: "blockchain-service-demo",
          name: "Blockchain Service",
          type: "Blockchain Platform",
          description: "Enterprise blockchain service with smart contract deployment and decentralized application support.",
          category: "Blockchain",
          technology: "Ethereum, Solidity, Web3.js, Docker",
          status: "development",
          features: [
            "Smart Contracts",
            "DApp Support",
            "Blockchain Explorer",
            "Wallet Integration",
            "DeFi Tools"
          ],
          pricing: {
            model: "Enterprise",
            startingPrice: "$599/month",
            details: "Full blockchain platform with smart contracts"
          },
          links: {
            demo: "/demo/blockchain-service-demo",
            documentation: "/docs/blockchain-service-demo",
            github: "https://github.com/your-org/blockchain-service-demo",
            deployment: "https://blockchain.yourdomain.com"
          },
          metrics: {
            uptime: "99.5%",
            responseTime: "<200ms",
            users: "300+"
          },
          lastUpdated: "2025-08-15",
          path: "/workspace/generated-services/blockchain-service-demo"
        },
        {
          id: "edge-computing-demo",
          name: "Edge Computing Platform",
          type: "Edge Service",
          description: "Distributed edge computing platform for low-latency processing and real-time decision making.",
          category: "IoT & Edge",
          technology: "Docker, Kubernetes, Python, Redis, MQTT",
          status: "development",
          features: [
            "Edge Nodes",
            "Low Latency",
            "Distributed Processing",
            "Auto-scaling",
            "Edge AI"
          ],
          pricing: {
            model: "Professional",
            startingPrice: "$249/month",
            details: "Edge computing platform with distributed nodes"
          },
          links: {
            demo: "/demo/edge-computing-demo",
            documentation: "/docs/edge-computing-demo",
            github: "https://github.com/your-org/edge-computing-demo",
            deployment: "https://edge-computing.yourdomain.com"
          },
          metrics: {
            uptime: "99.4%",
            responseTime: "<10ms",
            users: "200+"
          },
          lastUpdated: "2025-08-15",
          path: "/workspace/generated-services/edge-computing-demo"
        },
        {
          id: "quantum-computing-demo",
          name: "Quantum Computing Service",
          type: "Quantum Service",
          description: "Quantum computing service with quantum algorithms and hybrid classical-quantum processing.",
          category: "Quantum Computing",
          technology: "Qiskit, Python, Docker, Jupyter",
          status: "development",
          features: [
            "Quantum Algorithms",
            "Hybrid Processing",
            "Quantum Simulators",
            "Algorithm Library",
            "Research Tools"
          ],
          pricing: {
            model: "Research",
            startingPrice: "$799/month",
            details: "Advanced quantum computing research platform"
          },
          links: {
            demo: "/demo/quantum-computing-demo",
            documentation: "/docs/quantum-computing-demo",
            github: "https://github.com/your-org/quantum-computing-demo",
            deployment: "https://quantum.yourdomain.com"
          },
          metrics: {
            uptime: "99.3%",
            responseTime: "<500ms",
            users: "100+"
          },
          lastUpdated: "2025-08-15",
          path: "/workspace/generated-services/quantum-computing-demo"
        },
        {
          id: "demo-ai-service",
          name: "Demo AI Service",
          type: "Machine Learning",
          description: "Professional demo AI service built with modern technologies and best practices.",
          category: "AI & Machine Learning",
          technology: "Python, Docker, Kubernetes",
          status: "active",
          features: [
            "RESTful API",
            "Containerized",
            "Test Coverage",
            "Documentation",
            "Deployment Scripts"
          ],
          pricing: {
            model: "Standard",
            startingPrice: "$79/month",
            details: "Professional AI service with full support"
          },
          links: {
            demo: "/demo/demo-ai-service",
            documentation: "/docs/demo-ai-service",
            github: "https://github.com/your-org/demo-ai-service",
            deployment: "https://demo-ai-service.yourdomain.com"
          },
          metrics: {
            uptime: "99.9%",
            responseTime: "<200ms",
            users: "762+"
          },
          lastUpdated: "2025-08-15",
          path: "/workspace/generated-services/demo-ai-service"
        }
      ];
      
      setServices(services);
      
      // Group services by category
      const groupedCategories = groupServicesByCategory(services);
      setCategories(groupedCategories);
      
      setLoading(false);
    } catch (error) {
      console.error('Failed to load services:', error);
      setLoading(false);
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
      'Web Services': 'Professional web services built with modern technologies',
      'IoT & Edge': 'Internet of Things and edge computing services for connected devices',
      'Blockchain': 'Decentralized blockchain services and smart contract platforms',
      'Quantum Computing': 'Advanced quantum computing services for research and development'
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Loading services...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>AI Service Factory - bolt.new.zion.app</title>
        <meta name="description" content="Discover our comprehensive suite of AI and IT services, from machine learning platforms to data processing APIs. Built with cutting-edge technology and enterprise-grade reliability." />
        <meta name="keywords" content="AI services, machine learning, data processing, API gateway, monitoring, MLOps, IT services" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Navigation Header */}
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <h1 className="text-2xl font-bold text-gray-900">🚀 AI Service Factory</h1>
                <div className="hidden md:flex items-center space-x-6">
                  <Link href="/" className="text-blue-600 font-medium">
                    🏠 Home
                  </Link>
                  <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">
                    📊 Dashboard
                  </Link>
                  <Link href="/system-status" className="text-gray-600 hover:text-gray-900 transition-colors">
                    ⚡ System Status
                  </Link>
                  <Link href="/updates" className="text-gray-600 hover:text-gray-900 transition-colors">
                    📰 Updates
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  TURBO MODE
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  AI Generated
                </span>
              </div>
            </div>
            
            {/* Mobile Navigation */}
            <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                <Link href="/" className="text-blue-600 font-medium">
                  🏠 Home
                </Link>
                <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">
                  📊 Dashboard
                </Link>
                <Link href="/system-status" className="text-gray-600 hover:text-gray-900 transition-colors">
                  ⚡ System Status
                </Link>
                <Link href="/updates" className="text-gray-600 hover:text-gray-900 transition-colors">
                  📰 Updates
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Header */}
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">
                🚀 AI Service Factory
              </h1>
              <p className="text-2xl mb-8 opacity-90 max-w-4xl mx-auto">
                Discover our comprehensive suite of AI and IT services, automatically generated and maintained by our advanced AI-powered service factory system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <span className="bg-white/20 text-white px-6 py-2 rounded-lg font-medium">
                  {services.length} Services Available
                </span>
                <span className="bg-white/20 text-white px-6 py-2 rounded-lg font-medium">
                  Auto-Generated by AI
                </span>
                <span className="bg-white/20 text-white px-6 py-2 rounded-lg font-medium">
                  TURBO MODE Active
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#services"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  🚀 Explore Services
                </Link>
                <Link
                  href="/dashboard"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  📊 Factory Dashboard
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Search and Filter */}
        <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search services by name, description, or technology..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                >
                  <option value="all">All Categories ({services.length})</option>
                  {categories.map(category => (
                    <option key={category.name} value={category.name}>
                      {category.name} ({category.services.length})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <main id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
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
                All {services.length} services are automatically generated and maintained by our advanced AI-powered service factory system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/dashboard"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  View Factory Dashboard
                </Link>
                <Link
                  href="/system-status"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors duration-200"
                >
                  System Status
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default HomePage;