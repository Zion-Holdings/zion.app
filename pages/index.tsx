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
        </section>

        {/* Features */}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Features</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Self‑Improving', desc: 'Agents continuously analyze, invent, and evolve automations.' },
              { title: 'Repo Sync', desc: 'Changes are committed and pushed automatically to main.' },
              { title: 'Zero Ops', desc: 'Runs fully in the cloud—no servers or manual intervention.' },
              { title: 'Safety‑First', desc: 'Conservative edits with logs, reports, and guardrails.' },
              { title: 'Scalable', desc: 'Generates domain‑specific factories on demand.' },
              { title: 'Observability', desc: 'Dashboards, reports, and artifacts across hubs.' },
              { title: 'Futuristic UI', desc: 'Neon, animated, holographic surfaces with tilt and beams.' },
              { title: 'Cloud Automations', desc: 'Scheduled functions that replace GitHub Actions.' },
              { title: 'Edge‑Optimized', desc: 'Global performance with smart bundling and caching.' },
            ].map((f) => (
              <article key={f.title} className="group glow-card relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:border-cyan-400/30">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-white/75">{f.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">How it works</h2>
          <div className="mx-auto mt-6 max-w-4xl grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              ['Discover', 'Scan code, issues, UX, and ops signals'],
              ['Plan', 'Draft safe, high‑impact improvements'],
              ['Apply', 'Open edits with conservative diffs'],
              ['Validate', 'Audit builds, links, a11y, and performance'],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5 text-left backdrop-blur-xl">
                <div className="text-sm font-semibold text-white">{title}</div>
                <div className="mt-1 text-xs text-white/70">{desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Capabilities</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { title: 'Code Quality & Refactors', desc: 'Lints, fixes, and proposes refactors with type‑safety improvements.' },
              { title: 'Performance & A11y', desc: 'Optimizes bundles, assets, and accessibility with continuous checks.' },
              { title: 'Content & SEO', desc: 'Curates content, updates promotions, and tunes metadata for reach.' },
              { title: 'Front Systems', desc: 'Futuristic front with animated templates and layouts.' },
              { title: 'Automation Hub', desc: 'Orchestrate cloud agents and review outputs.' },
              { title: 'Reports & Insights', desc: 'Health, SEO and AI trend dashboards.' },
            ].map((c) => (
              <article key={c.title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl">
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[4rem] bg-cyan-400/10 blur-2xl" />
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-white/75">{c.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Futuristic Templates */}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Futuristic Templates</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Beautiful, animated surfaces and layouts ready to accelerate front‑of‑house experiences.</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/main/front"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Front Systems Hub</h3>
              <p className="mt-1 text-sm text-white/75">Explore comprehensive templates, effects, and layouts.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a></Link>
            <Link href="/automation"><a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Automation‑Driven UI</h3>
              <p className="mt-1 text-sm text-white/75">Live promos and content curated by continuous automations.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a></Link>
            <a href="/.netlify/functions/front-enhancer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover holo">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">On‑Demand Front Enhancer</h3>
              <p className="mt-1 text-sm text-white/75">Trigger the curator now and see updates flow to main.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
          </div>
        </section>

        {/* Automation Engine — New Tools */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Automation Engine — New Tools</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Now powered by scheduled cloud functions — no GitHub Actions required. Live homepage promos, health checks, and link integrity run automatically.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
               { title: 'Frontpage Enhancer', desc: 'Auto‑advertises features and refreshes homepage content hourly.', href: '/.netlify/functions/frontpage-enhancer' },
               { title: 'Link & Health Scheduler', desc: 'Runs link checks, health scans, and sitemap updates every 6h.', href: '/.netlify/functions/link-and-health-scheduler' },
               { title: 'Marketing & Features Promo', desc: 'Regenerates homepage promos and deep links every 2h.', href: '/.netlify/functions/marketing-and-features-promo' },
               { title: 'Front Enhancer (fast)', desc: 'Runs front improvements every 10 minutes.', href: '/.netlify/functions/front-enhancer' },
               { title: 'Homepage Advertiser', desc: 'Pushes fresh highlights every 15 minutes.', href: '/.netlify/functions/homepage_advertiser' },
               { title: 'Cloud Orchestrator', desc: 'Coordinates broader agents on a 4h cadence.', href: '/.netlify/functions/cloud_orchestrator' },
               { title: 'Fast Orchestrator (1m)', desc: 'Continuously refreshes front + homepage and commits to main every minute.', href: '/.netlify/functions/fast-orchestrator' },
               { title: 'Continuous Orchestrator (5m)', desc: 'Runs a lightweight pipeline including sitemap and UI futurizer.', href: '/.netlify/functions/continuous-orchestrator' },
               { title: 'Front Maximizer', desc: 'High‑frequency auto‑advertising and futurizing every 5m.', href: '/.netlify/functions/front-maximizer' },
               { title: 'Continuous Front Runner', desc: 'Ultra‑fast subset runner every 3m.', href: '/.netlify/functions/continuous-front-runner' },
               { title: 'README Advertiser', desc: 'Refresh README and docs indexes every 6h.', href: '/.netlify/functions/readme-advertiser' },
               { title: 'Features/Capabilities/Benefits Advertiser (2m)', desc: 'Continuously advertises new features with deep links on the front pages.', href: '/.netlify/functions/features-capabilities-benefits-advertiser' },
               { title: 'Hyper Front Index Accelerator (1m)', desc: 'Ultra-fast front index futurizer and directory builder.', href: '/.netlify/functions/hyper-front-index-accelerator' },
               { title: 'Dead Code Report', desc: 'Scans the codebase and updates reports with dead and unused code.', href: '/.netlify/functions/dead-code-report' },
               { title: 'Security Audit Runner', desc: 'Runs security checks and commits actionable findings.', href: '/.netlify/functions/security-audit-runner' },
               { title: 'Docs Index Runner', desc: 'Refreshes docs indexes and README for better discovery.', href: '/.netlify/functions/docs-index-runner' },
               { title: 'Repo Knowledge Graph', desc: 'Regenerates the repository knowledge graph and radar metrics.', href: '/.netlify/functions/repo-knowledge-graph-runner' },
               { title: 'Image Optimizer', desc: 'Optimizes media assets for performance and quality.', href: '/.netlify/functions/image-optimizer-runner' },
               { title: 'AI Changelog Runner', desc: 'Generates human-friendly release notes automatically.', href: '/.netlify/functions/ai-changelog-runner' },
               { title: 'Newsroom Runner', desc: 'Publishes autonomous product updates to the newsroom.', href: '/.netlify/functions/newsroom-runner' },
               { title: 'TODO Scanner', desc: 'Generates a consolidated TODO report and dashboard.', href: '/.netlify/functions/todo-scanner-runner' },
               { title: 'Broken Image Scanner', desc: 'Detects broken images and proposes or applies fixes.', href: '/.netlify/functions/broken-image-scanner-runner' },
               { title: 'External Link Check', desc: 'Crawls external links and opens fixes for rot and redirects.', href: '/.netlify/functions/external-link-check-runner' },
               { title: 'OG Image Update', desc: 'Regenerates Open Graph images for rich social sharing.', href: '/.netlify/functions/og-image-update-runner' },
               { title: 'Docs Search Index', desc: 'Refreshes the site search index for instant discovery.', href: '/.netlify/functions/docs-search-index-runner' },
               { title: 'Netlify Auto‑Healer', desc: 'Monitors and self-heals Netlify deploy issues.', href: '/.netlify/functions/netlify-auto-healer-runner' },
               { title: 'Innovation Lab (10m)', desc: 'Invents, curates, and promotes fresh ideas across the site.', href: '/.netlify/functions/innovation-lab' },
               { title: 'Auto Scheduler (15m)', desc: 'Smart time-based runner that chooses and executes the best tasks.', href: '/.netlify/functions/auto-scheduler' },
               { title: 'Broken Image Scanner (6h)', desc: 'Finds broken images, optimizes assets, and syncs fixes.', href: '/.netlify/functions/broken-image-scanner' },
               { title: 'Internal Link Graph', desc: 'Builds a live graph of internal links across pages.', href: '/.netlify/functions/internal-link-graph-runner' },
               { title: 'Robots.txt Enhancer', desc: 'Ensures robots.txt is present and references the sitemap.', href: '/.netlify/functions/robots-enhancer-runner' },
               { title: 'Alt Text Indexer', desc: 'Generates humanized alt text suggestions for all public images.', href: '/.netlify/functions/alt-text-indexer-runner' },
               { title: 'Content Registry Builder', desc: 'Continuously indexes pages and reports for discovery.', href: '/.netlify/functions/content-registry-runner' },
             ].map((tool) => (
              <a key={tool.title} href={tool.href} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{tool.title}</h3>
                <p className="mt-1 text-sm text-white/75">{tool.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
            ))}
          </div>
        </section>

        {/* New: Autonomous Automations */}
        <section className="mx-auto max-w-7xl px-6 pb-14">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">New Autonomous Automations</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/.netlify/functions/stale-content-auditor-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Stale Content Auditor</h3>
              <p className="mt-1 text-sm text-white/75">Finds stale files across pages, docs and components; publishes a report and summary.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

            <a href="/.netlify/functions/deps-auto-upgrade-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Dependency Auto‑Upgrade</h3>
              <p className="mt-1 text-sm text-white/75">Auto-upgrades dependencies on a safe cadence, validates with build, and syncs.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

            {/* Newly added autonomous scanners */}
            <a href="/.netlify/functions/unused-media-scanner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Unused Media Scanner</h3>
              <p className="mt-1 text-sm text-white/75">Find and report unreferenced assets; writes a public JSON for visibility.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

            <a href="/.netlify/functions/orphan-pages-detector" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Orphan Pages Detector</h3>
              <p className="mt-1 text-sm text-white/75">Discovers pages with few/no inbound references to improve navigation.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

            <a href="/.netlify/functions/component-size-report" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Component Size Report</h3>
              <p className="mt-1 text-sm text-white/75">Ranks components by lines and bytes to target refactors.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

            {/* Invented intelligent automations */}
            <a href="/.netlify/functions/internal-link-graph-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Internal Link Graph</h3>
              <p className="mt-1 text-sm text-white/75">Builds and publishes the internal link graph for navigation insights.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

            <a href="/.netlify/functions/anchor-links-auto-fixer" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Anchor Links Auditor</h3>
              <p className="mt-1 text-sm text-white/75">Finds missing anchors in internal links and proposes fixes.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

            <a href="/.netlify/functions/site-404-map-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">404 Map</h3>
              <p className="mt-1 text-sm text-white/75">Aggregates broken links from crawls into a single actionable map.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

            <a href="/.netlify/functions/content-freshness-score-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Content Freshness</h3>
              <p className="mt-1 text-sm text-white/75">Scores pages based on last commit; surfaces stale content fast.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

            <a href="/.netlify/functions/component-coupling-graph-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Component Coupling Graph</h3>
              <p className="mt-1 text-sm text-white/75">Analyzes component import relationships to guide refactors.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
          </div>
        </section>

        {/* Ops Intelligence & Graphs */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Ops Intelligence & Graphs</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Autonomous reports and graphs generated by cloud functions, committed back to the repo.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'License Compliance Auditor', desc: 'Summarizes dependencies weekly for compliance visibility.', href: '/.netlify/functions/license-compliance-auditor' },
              { title: 'PageSpeed Runner', desc: 'Placeholder runner for PageSpeed reporting (extend with API).', href: '/.netlify/functions/pagespeed-insights-runner' },
              { title: 'Knowledge Pack', desc: 'Builds a compact knowledge pack from pages, components and docs.', href: '/.netlify/functions/knowledge-pack-runner' },
              { title: 'Adaptive Orchestrator', desc: 'Runs a curated set of front and docs generators on a 5m cadence.', href: '/.netlify/functions/adaptive-orchestrator' },
              { title: '404 Map', desc: 'Scans homepage links and records 404s to data/404-map.json.', href: '/.netlify/functions/site-404-map-runner' },
              { title: 'Component Coupling Graph', desc: 'Builds an import dependency graph for pages/components.', href: '/.netlify/functions/component-coupling-graph-runner' },
              { title: 'Content Freshness Score', desc: 'Scores docs and pages by last update to surface stale content.', href: '/.netlify/functions/content-freshness-score-runner' },
              { title: 'Anchor Links Auditor', desc: 'Reports missing in-page anchors across docs and pages.', href: '/.netlify/functions/anchor-links-auto-fixer' },
              { title: 'Internal Link Graph', desc: 'Extracts internal links from the homepage into a graph JSON.', href: '/.netlify/functions/internal-link-graph-runner' },
            ].map((tool) => (
              <a key={tool.title} href={tool.href} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <h3 className="text-lg font-semibold">{tool.title}</h3>
                <p className="mt-1 text-sm text-white/75">{tool.desc}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
            ))}
          </div>
        </section>

        {/* Intelligent Docs & Topics */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Intelligent Docs & Topics</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Autonomous documentation and knowledge mapping generated directly from the codebase.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/.netlify/functions/component-props-docs-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Component Props Docs</h3>
              <p className="mt-1 text-sm text-white/75">Scans components and publishes props documentation (Markdown + JSON).</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>

            <a href="/.netlify/functions/topics-map-runner" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Topics Map</h3>
              <p className="mt-1 text-sm text-white/75">Builds a live topics map from pages and docs; publishes JSON + Markdown.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
          </div>
        </section>

        {/* CI Orchestrators */}
        <section className="mx-auto max-w-7xl px-6 pb-8">
          <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <a href="https://github.com/Zion-Holdings/zion.app/actions/workflows/ultrafast-cloud-orchestrator.yml" className="group rounded-xl border border-white/10 bg-white/5 p-4 hover:border-cyan-400/30">
              <div className="text-sm font-semibold">Ultrafast Cloud Orchestrator</div>
              <div className="mt-1 text-xs text-white/70">Runs every minute to trigger cloud automations and sync changes.</div>
              <div className="mt-2 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
            <a href="https://github.com/Zion-Holdings/zion.app/actions/workflows/readme-autogen.yml" className="group rounded-xl border border-white/10 bg-white/5 p-4 hover:border-cyan-400/30">
              <div className="text-sm font-semibold">README Autogeneration</div>
              <div className="mt-1 text-xs text-white/70">Refreshes README with live routes and automations every 15m.</div>
              <div className="mt-2 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
            <a href="https://github.com/Zion-Holdings/zion.app/actions/workflows/homepage-auto-update.yml" className="group rounded-xl border border-white/10 bg-white/5 p-4 hover:border-cyan-400/30">
              <div className="text-sm font-semibold">Homepage Auto Update</div>
              <div className="mt-1 text-xs text-white/70">Refreshes homepage promos and deep links every 10m.</div>
              <div className="mt-2 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
            </a>
          </div>
        </section>

        {/* AUTO-GENERATED: HOME_UPDATER_START */}
 <section className="mx-auto max-w-7xl px-6 pb-16">
   <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Explore more</h2>
   <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

            <Link href="/automation"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Automation Hub — live agents & reports</span></a></Link>
  
            <Link href="/newsroom"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Newsroom — latest autonomous updates</span></a></Link>
  
            <Link href="/site-health"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Site Health — audits & insights</span></a></Link>
  
            <Link href="/.netlify/functions/netlify-auto-healer-runner"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Site Health — Netlify Auto‑Healer</span></a></Link>
  
            <Link href="/.netlify/functions/docs-index-runner"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Docs — technical notes & guides</span></a></Link>
  
   </div>
 </section>
 /* AUTO-GENERATED: HOME_UPDATER_END */}
  
         {
/* AUTO-GENERATED: HOME_LATEST_CONTENT_START */

 <section className="mx-auto max-w-7xl px-6 pb-14">
   <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Latest Autonomous Content</h2>
   <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/reports/updates/update-2025-08-12-1915" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 12: 1915</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
            <a href="/reports/updates/update-2025-08-12-1851" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 12: 1851</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
            <a href="/reports/updates/update-2025-08-12-1846" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 12: 1846</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
            <a href="/reports/updates/update-2025-08-12-1842" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 12: 1842</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
            <a href="/reports/updates/update-2025-08-12-1831" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 12: 1831</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
            <a href="/reports/updates/update-2025-08-12-1730" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
              <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              <h3 className="text-lg font-semibold">Autonomous Update — 2025: 08: 12: 1730</h3>
              <p className="mt-1 text-sm text-white/75">Freshly published by autonomous agents.</p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>→</span></div>
            </a>
   </div>
 </section>
 
/* AUTO-GENERATED: HOME_LATEST_CONTENT_END */
/* AUTO-GENERATED: HOME_VISIONARY_START */}

        <section id="home-visionary" className="mx-auto max-w-7xl px-6 pb-20">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">New Visionary Automations</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Futuristic templates, animated backgrounds, and deep links — continuously curated by cloud functions.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

              <a key="Front Visionary Expander" href="/.netlify/functions/front-visionary-expander" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Front Visionary Expander</div>
                <div className="mt-1 text-sm text-white/75">Enhances main/front with animated sections and deep links.</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>

              <a key="Home Visionary Expander" href="/.netlify/functions/home-visionary-expander" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Home Visionary Expander</div>
                <div className="mt-1 text-sm text-white/75">Refreshes homepage highlights and links.</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>

              <a key="Continuous Orchestrator" href="/.netlify/functions/continuous-orchestrator" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-base font-semibold">Continuous Orchestrator</div>
                <div className="mt-1 text-sm text-white/75">Runs multi‑tool refresh and sitemap on a fast cadence.</div>
                <div className="mt-3 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">

            <Link href="/main/front#features"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Features — explore capabilities</span></a></Link>

            <Link href="/main/front#capabilities"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Capabilities — what agents can do</span></a></Link>

            <Link href="/main/front#benefits"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Benefits — outcomes & ROI</span></a></Link>

            <Link href="/automation"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Automation Hub — live agents & reports</span></a></Link>

            <Link href="/site-health"><a className="bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-colors border border-white/10"><span className="text-white/90">Site Health — audits & insights</span></a></Link>
          </div>
        </section>

        {/* Live GitHub Actions */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Live GitHub Actions</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-sm text-white/70">Autonomous workflows running in the cloud and syncing changes back to the repository.</p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { file: 'front-hyper-refresh.yml', title: 'Front Hyper Refresh', desc: 'Ultra-fast homepage and front index updates (every 2m).'},
              { file: 'code-intel-sweeper.yml', title: 'Code Intelligence Sweeper', desc: 'Dead code, code smells, and broken images (every 5m).'},
              { file: 'media-optimizer.yml', title: 'Media Optimizer', desc: 'Optimizes images and assets to keep the site fast (every 15m).'},
              { file: 'docs-knowledge-synth.yml', title: 'Docs & Knowledge Synthesizer', desc: 'Generates component props docs and docs index (every 30m).'},
            ].map((w) => (
              <a key={w.file} href={`https://github.com/Zion-Holdings/zion.app/actions/workflows/${w.file}`} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30 tilt-on-hover">
                <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="text-lg font-semibold">{w.title}</div>
                <p className="mt-1 text-sm text-white/75">{w.desc}</p>
                <img alt={`${w.title} status`} className="mt-3 h-5 opacity-90" src={`https://github.com/Zion-Holdings/zion.app/actions/workflows/${w.file}/badge.svg`} />
                <div className="mt-2 inline-flex items-center gap-1 text-xs text-cyan-300/90">Open <span aria-hidden>↗</span></div>
              </a>
            ))}
          </div>
        </section>

/* AUTO-GENERATED: HOME_VISIONARY_END */
</main>
    </div>
  );
};

export default HomePage;