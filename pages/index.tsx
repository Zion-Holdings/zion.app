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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  // AI Service Factory Services Data
  const services: Service[] = [
    {
      id: '1',
      name: 'AI-Powered Data Analytics Platform',
      type: 'Data Analytics',
      description: 'Advanced analytics platform with machine learning capabilities for business intelligence and predictive insights.',
      category: 'AI & Machine Learning',
      technology: 'Python, TensorFlow, React, Node.js',
      status: 'active',
      features: ['Real-time data processing', 'ML model training', 'Interactive dashboards', 'API integration'],
      pricing: {
        model: 'Usage-based',
        startingPrice: '$99/month',
        details: 'Pay per API call and data processed'
      },
      links: {
        demo: '/demo/analytics',
        documentation: '/docs/analytics',
        github: 'https://github.com/ai-factory/analytics',
        deployment: 'https://analytics.aiservicefactory.com'
      },
      metrics: {
        uptime: '99.9%',
        responseTime: '<200ms',
        users: '10,000+'
      },
      lastUpdated: '2025-01-15'
    },
    {
      id: '2',
      name: 'Intelligent Customer Support Bot',
      type: 'Customer Service',
      description: 'AI-powered chatbot that provides 24/7 customer support with natural language processing capabilities.',
      category: 'AI & Machine Learning',
      technology: 'Python, NLP, React, FastAPI',
      status: 'active',
      features: ['Natural language understanding', 'Multi-language support', 'Integration with CRM systems', 'Analytics dashboard'],
      pricing: {
        model: 'Per conversation',
        startingPrice: '$0.10/conversation',
        details: 'Volume discounts available'
      },
      links: {
        demo: '/demo/support-bot',
        documentation: '/docs/support-bot',
        github: 'https://github.com/ai-factory/support-bot',
        deployment: 'https://support.aiservicefactory.com'
      },
      metrics: {
        uptime: '99.8%',
        responseTime: '<100ms',
        users: '50,000+'
      },
      lastUpdated: '2025-01-14'
    },
    {
      id: '3',
      name: 'Real-time IoT Data Pipeline',
      type: 'Data Pipeline',
      description: 'High-performance data pipeline for processing IoT sensor data with real-time analytics and alerting.',
      category: 'IoT & Edge',
      technology: 'Apache Kafka, Python, Node.js, MongoDB',
      status: 'beta',
      features: ['Real-time streaming', 'Scalable architecture', 'Custom alerting rules', 'Data visualization'],
      pricing: {
        model: 'Per device',
        startingPrice: '$5/device/month',
        details: 'Includes data storage and processing'
      },
      links: {
        demo: '/demo/iot-pipeline',
        documentation: '/docs/iot-pipeline',
        github: 'https://github.com/ai-factory/iot-pipeline',
        deployment: 'https://iot.aiservicefactory.com'
      },
      metrics: {
        uptime: '99.7%',
        responseTime: '<50ms',
        users: '5,000+'
      },
      lastUpdated: '2025-01-13'
    },
    {
      id: '4',
      name: 'Blockchain Smart Contract Platform',
      type: 'Blockchain',
      description: 'Enterprise-grade blockchain platform for creating and deploying smart contracts with advanced security features.',
      category: 'Blockchain',
      technology: 'Ethereum, Solidity, Web3.js, React',
      status: 'development',
      features: ['Smart contract templates', 'Security auditing', 'Multi-chain support', 'Developer tools'],
      pricing: {
        model: 'Transaction-based',
        startingPrice: '$0.01/transaction',
        details: 'Gas fees not included'
      },
      links: {
        demo: '/demo/blockchain',
        documentation: '/docs/blockchain',
        github: 'https://github.com/ai-factory/blockchain',
        deployment: 'https://blockchain.aiservicefactory.com'
      },
      metrics: {
        uptime: '99.5%',
        responseTime: '<500ms',
        users: '2,000+'
      },
      lastUpdated: '2025-01-12'
    },
    {
      id: '5',
      name: 'Quantum Computing Simulator',
      type: 'Quantum Computing',
      description: 'Advanced quantum computing simulator for research and development of quantum algorithms.',
      category: 'Quantum Computing',
      technology: 'Python, Qiskit, React, WebAssembly',
      status: 'beta',
      features: ['Quantum circuit design', 'Algorithm testing', 'Performance analysis', 'Educational content'],
      pricing: {
        model: 'Compute time',
        startingPrice: '$0.50/minute',
        details: 'Free tier available for students'
      },
      links: {
        demo: '/demo/quantum',
        documentation: '/docs/quantum',
        github: 'https://github.com/ai-factory/quantum',
        deployment: 'https://quantum.aiservicefactory.com'
      },
      metrics: {
        uptime: '99.6%',
        responseTime: '<1s',
        users: '1,000+'
      },
      lastUpdated: '2025-01-11'
    },
    {
      id: '6',
      name: 'Microservice API Gateway',
      type: 'API Gateway',
      description: 'High-performance API gateway for managing microservices with advanced routing and security features.',
      category: 'Microservices',
      technology: 'Node.js, Express, Redis, Docker',
      status: 'active',
      features: ['Load balancing', 'Rate limiting', 'Authentication', 'API versioning'],
      pricing: {
        model: 'Per request',
        startingPrice: '$0.001/request',
        details: 'Volume discounts available'
      },
      links: {
        demo: '/demo/api-gateway',
        documentation: '/docs/api-gateway',
        github: 'https://github.com/ai-factory/api-gateway',
        deployment: 'https://gateway.aiservicefactory.com'
      },
      metrics: {
        uptime: '99.9%',
        responseTime: '<100ms',
        users: '25,000+'
      },
      lastUpdated: '2025-01-10'
    },
    {
      id: '7',
      name: 'Edge Computing Orchestrator',
      type: 'Edge Computing',
      description: 'Intelligent edge computing platform that optimizes resource allocation and workload distribution.',
      category: 'IoT & Edge',
      technology: 'Kubernetes, Docker, Python, Go',
      status: 'development',
      features: ['Edge node management', 'Workload optimization', 'Resource monitoring', 'Auto-scaling'],
      pricing: {
        model: 'Per edge node',
        startingPrice: '$20/node/month',
        details: 'Includes monitoring and support'
      },
      links: {
        demo: '/demo/edge-orchestrator',
        documentation: '/docs/edge-orchestrator',
        github: 'https://github.com/ai-factory/edge-orchestrator',
        deployment: 'https://edge.aiservicefactory.com'
      },
      metrics: {
        uptime: '99.8%',
        responseTime: '<200ms',
        users: '3,000+'
      },
      lastUpdated: '2025-01-09'
    },
    {
      id: '8',
      name: 'Predictive Maintenance System',
      type: 'Predictive Analytics',
      description: 'AI-driven predictive maintenance system that monitors equipment health and predicts failures.',
      category: 'AI & Machine Learning',
      technology: 'Python, Scikit-learn, React, PostgreSQL',
      status: 'active',
      features: ['Equipment monitoring', 'Failure prediction', 'Maintenance scheduling', 'Cost optimization'],
      pricing: {
        model: 'Per equipment',
        startingPrice: '$50/equipment/month',
        details: 'Includes AI model training'
      },
      links: {
        demo: '/demo/predictive-maintenance',
        documentation: '/docs/predictive-maintenance',
        github: 'https://github.com/ai-factory/predictive-maintenance',
        deployment: 'https://maintenance.aiservicefactory.com'
      },
      metrics: {
        uptime: '99.9%',
        responseTime: '<300ms',
        users: '15,000+'
      },
      lastUpdated: '2025-01-08'
    },
    {
      id: '9',
      name: 'Real-time Video Analytics',
      type: 'Computer Vision',
      description: 'Advanced video analytics platform with real-time object detection and tracking capabilities.',
      category: 'AI & Machine Learning',
      technology: 'Python, OpenCV, TensorFlow, WebRTC',
      status: 'beta',
      features: ['Real-time processing', 'Object detection', 'Video streaming', 'Analytics dashboard'],
      pricing: {
        model: 'Per video stream',
        startingPrice: '$25/stream/month',
        details: 'Includes processing and storage'
      },
      links: {
        demo: '/demo/video-analytics',
        documentation: '/docs/video-analytics',
        github: 'https://github.com/ai-factory/video-analytics',
        deployment: 'https://video.aiservicefactory.com'
      },
      metrics: {
        uptime: '99.7%',
        responseTime: '<500ms',
        users: '8,000+'
      },
      lastUpdated: '2025-01-07'
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const groupServicesByCategory = (services: Service[]): ServiceCategory[] => {
    const categories: { [key: string]: Service[] } = {};
    
    services.forEach(service => {
      if (!categories[service.category]) {
        categories[service.category] = [];
      }
      categories[service.category].push(service);
    });

    return Object.entries(categories).map(([name, services]) => ({
      name,
      description: getCategoryDescription(name),
      services
    }));
  };

  const getCategoryDescription = (category: string): string => {
    const descriptions: { [key: string]: string } = {
      'AI & Machine Learning': 'Cutting-edge AI and ML solutions for modern businesses',
      'Data Pipeline': 'Scalable data processing and analytics platforms',
      'Microservices': 'Modular and scalable service architectures',
      'IoT & Edge': 'Internet of Things and edge computing solutions',
      'Blockchain': 'Secure and transparent blockchain applications',
      'Quantum Computing': 'Next-generation quantum computing platforms'
    };
    return descriptions[category] || 'Innovative technology solutions';
  };

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.technology.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = groupServicesByCategory(filteredServices);
  const uniqueCategories = [...new Set(services.map(s => s.category))];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto"></div>
          <p className="text-white text-xl mt-4">Loading services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>AI Service Factory - AI-Powered Services</title>
        <meta name="description" content="Discover cutting-edge AI services and solutions powered by autonomous AI agents" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold text-white hover:text-blue-300 transition-colors">
                🚀 AI Service Factory
              </Link>
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-white/90 hover:text-white transition-colors">
                  🏠 Home
                </Link>
                <Link href="/dashboard" className="text-white/90 hover:text-white transition-colors">
                  📊 Dashboard
                </Link>
                <Link href="/system-status" className="text-white/90 hover:text-white transition-colors">
                  🔧 System Status
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-medium rounded-full">
                ⚡ TURBO MODE
              </span>
              <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium rounded-full">
                🤖 AI Generated
              </span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="text-center py-20 px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          AI Service Factory
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
          Discover cutting-edge AI services and solutions powered by autonomous AI agents. 
          From machine learning to blockchain, we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#services" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105">
            🚀 Explore Services
          </Link>
          <Link href="/dashboard" className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all border border-white/20">
            📊 Factory Dashboard
          </Link>
        </div>
        <div className="mt-8 text-white/60">
          <p className="text-lg">✨ {services.length} AI Services Available</p>
          <p className="text-sm">🔄 Continuously updated by autonomous agents</p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search services by name, description, or technology..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="lg:w-48">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  {uniqueCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4 text-white/60 text-sm">
              Showing {filteredServices.length} of {services.length} services
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          {categories.map((category) => (
            <div key={category.name} className="mb-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">{category.name}</h2>
                <p className="text-white/70 text-lg">{category.description}</p>
                <div className="mt-2 text-white/50 text-sm">
                  {category.services.length} service{category.services.length !== 1 ? 's' : ''} available
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service) => (
                  <div key={service.id} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                        <p className="text-white/70 text-sm mb-3">{service.description}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        service.status === 'active' ? 'bg-green-500/20 text-green-300' :
                        service.status === 'beta' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-blue-500/20 text-blue-300'
                      }`}>
                        {service.status}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-white/60 text-sm mb-2">Technology Stack:</div>
                      <div className="flex flex-wrap gap-2">
                        {service.technology.split(', ').map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-white/10 rounded text-xs text-white/80">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-white/60 text-sm mb-2">Key Features:</div>
                      <ul className="text-white/80 text-sm space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <span className="text-blue-400 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <div className="text-white/60 text-sm mb-2">Pricing:</div>
                      <div className="text-white font-medium">{service.pricing.startingPrice}</div>
                      <div className="text-white/60 text-xs">{service.pricing.details}</div>
                    </div>

                    <div className="mb-4">
                      <div className="text-white/60 text-sm mb-2">Performance:</div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="text-center">
                          <div className="text-white font-medium">{service.metrics.uptime}</div>
                          <div className="text-white/60">Uptime</div>
                        </div>
                        <div className="text-center">
                          <div className="text-white font-medium">{service.metrics.responseTime}</div>
                          <div className="text-white/60">Response</div>
                        </div>
                        <div className="text-center">
                          <div className="text-white font-medium">{service.metrics.users}</div>
                          <div className="text-white/60">Users</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Link href={service.links.demo} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                        🚀 Demo
                      </Link>
                      <Link href={service.links.documentation} className="flex-1 bg-white/20 hover:bg-white/30 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                        📚 Docs
                      </Link>
                      <Link href={service.links.github} className="flex-1 bg-white/20 hover:bg-white/30 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                        💻 Code
                      </Link>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/20 text-center">
                      <div className="text-white/50 text-xs">
                        Last updated: {service.lastUpdated}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/5 backdrop-blur-md border-t border-white/20 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white/60">
            🚀 AI Service Factory - Powered by Autonomous AI Agents
          </p>
          <p className="text-white/40 text-sm mt-2">
            Continuously generating and optimizing AI services for the future
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
