<<<<<<< HEAD
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, ExternalLink, Zap, Shield, Cloud, Brain, Globe, Lock } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';

interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  features: string[];
  technology: string[];
  icon: React.ComponentType<any>;
  popular?: boolean;
  new?: boolean;
}

const services: Service[] = [
  {
    id: 'ai-platform',
    name: 'AI-Powered Analytics Platform',
    description: 'Advanced machine learning platform for business intelligence and predictive analytics.',
    category: 'AI & Machine Learning',
    price: '$2,500/month',
    features: ['Real-time analytics', 'Predictive modeling', 'Natural language processing', 'Custom AI models'],
    technology: ['Python', 'TensorFlow', 'React', 'Node.js'],
    icon: Brain,
    popular: true
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing Solutions',
    description: 'Next-generation quantum computing services for complex problem solving.',
    category: 'Quantum Computing',
    price: '$5,000/month',
    features: ['Quantum algorithms', 'Optimization problems', 'Cryptography', 'Research support'],
    technology: ['Qiskit', 'Python', 'Quantum circuits'],
    icon: Zap,
    new: true
  },
  {
    id: 'cybersecurity',
    name: 'Advanced Cybersecurity Suite',
    description: 'Comprehensive security solutions for enterprise protection.',
    category: 'Cybersecurity',
    price: '$3,500/month',
    features: ['Threat detection', 'Incident response', 'Compliance management', '24/7 monitoring'],
    technology: ['Python', 'Machine Learning', 'Blockchain', 'Zero Trust'],
    icon: Shield,
    popular: true
  },
  {
    id: 'cloud-platform',
    name: 'Cloud-Native Platform',
    description: 'Scalable cloud infrastructure and DevOps automation.',
    category: 'Cloud & DevOps',
    price: '$2,000/month',
    features: ['Auto-scaling', 'CI/CD pipelines', 'Monitoring', 'Cost optimization'],
    technology: ['AWS', 'Kubernetes', 'Docker', 'Terraform'],
    icon: Cloud
  },
  {
    id: 'blockchain',
    name: 'Blockchain Development',
    description: 'Custom blockchain solutions and smart contract development.',
    category: 'Blockchain',
    price: '$4,000/month',
    features: ['Smart contracts', 'DeFi platforms', 'NFT marketplaces', 'Cross-chain solutions'],
    technology: ['Solidity', 'Ethereum', 'Polygon', 'Web3.js'],
    icon: Lock
  },
  {
    id: 'iot-platform',
    name: 'IoT Management Platform',
    description: 'Internet of Things platform for device management and data collection.',
    category: 'IoT',
    price: '$1,800/month',
    features: ['Device management', 'Real-time monitoring', 'Data analytics', 'Automation'],
    technology: ['Node.js', 'MQTT', 'React', 'MongoDB'],
    icon: Globe
  }
];

const categories = ['All', 'AI & Machine Learning', 'Quantum Computing', 'Cybersecurity', 'Cloud & DevOps', 'Blockchain', 'IoT'];
const priceRanges = ['all', '0-2000', '2000-4000', '4000-6000', '6000+'];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const filteredServices = useMemo(() => {
    let filtered = services;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.technology.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by price range
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(service => {
        const price = parseInt(service.price.replace(/[^0-9]/g, ''));
        if (max === 0) return price >= min;
        return price >= min && price <= max;
      });
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
          const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
          return priceA - priceB;
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'new':
          return (b.new ? 1 : 0) - (a.new ? 1 : 0);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [selectedCategory, searchTerm, priceRange, sortBy]);

  const getPriceRangeLabel = (range: string) => {
    switch (range) {
      case '0-2000': return 'Under $2,000/month';
      case '2000-4000': return '$2,000 - $4,000/month';
      case '4000-6000': return '$4,000 - $6,000/month';
      case '6000+': return 'Over $6,000/month';
      default: return 'All Prices';
    }
  };

  return (
    <>
      <SEO
        title="Services"
        description="Discover our comprehensive portfolio of innovative technology solutions including AI, quantum computing, cybersecurity, and more."
        keywords="AI solutions, quantum computing, cybersecurity, cloud services, blockchain, IoT, Zion Tech Group"
      />
      
      <Header />
      
      <main className="min-h-screen bg-zion-blue-dark">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-zion-cyan bg-clip-text text-transparent">
                Revolutionary Technology Services
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Discover our cutting-edge portfolio of innovative technology solutions designed to transform your business. 
                From AI-powered analytics to quantum computing platforms, we're building the future today.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-zion-slate-light">
                <span className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-zion-cyan" />
                  8+ Revolutionary Services
                </span>
                <span className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-zion-cyan" />
                  99.9% Uptime Guarantee
                </span>
                <span className="flex items-center gap-2">
                  <Brain className="w-4 h-4 text-zion-cyan" />
                  AI-Powered Solutions
                </span>
                <span className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-zion-cyan" />
                  Competitive Pricing
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-16 px-6 bg-zion-blue">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
            >
              <div className="grid md:grid-cols-4 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-zion-slate-light mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-zion-slate-light mb-2">Price Range</label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  >
                    {priceRanges.map(range => (
                      <option key={range} value={range}>{getPriceRangeLabel(range)}</option>
                    ))}
                  </select>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-sm font-medium text-zion-slate-light mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  >
                    <option value="name">Name</option>
                    <option value="price">Price</option>
                    <option value="popularity">Popularity</option>
                    <option value="new">Newest</option>
                  </select>
                </div>

                {/* Search */}
                <div>
                  <label className="block text-sm font-medium text-zion-slate-light mb-2">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6 bg-zion-blue-dark">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Choose from our comprehensive range of technology services designed to drive innovation and growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex gap-2">
                      {service.popular && (
                        <span className="bg-zion-cyan text-white text-xs px-2 py-1 rounded-full">Popular</span>
                      )}
                      {service.new && (
                        <span className="bg-zion-purple text-white text-xs px-2 py-1 rounded-full">New</span>
                      )}
                    </div>
                  </div>

                  {/* Service Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-zion-slate-light mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Price */}
                  <div className="text-2xl font-bold text-zion-cyan mb-4">
                    {service.price}
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-sm text-zion-slate-light flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technology Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Technology:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technology.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="bg-white/10 text-zion-slate-light text-xs px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold py-3 px-4 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105">
                    <span>Get Started</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="text-zion-slate-light text-lg mb-4">No services found matching your criteria</div>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchTerm('');
                    setPriceRange('all');
                  }}
                  className="bg-zion-cyan text-white px-6 py-3 rounded-lg hover:bg-zion-cyan-dark transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-zion-purple to-zion-cyan">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/90 mb-8">
                Let's discuss how our technology services can help you achieve your goals and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-zion-purple font-semibold py-4 px-8 rounded-lg hover:bg-zion-slate-light transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href="/about"
                  className="bg-transparent text-white font-semibold py-4 px-8 rounded-lg border-2 border-white hover:bg-white hover:text-zion-purple transition-all duration-300 flex items-center justify-center space-x-2"
=======
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Brain, Cloud, Code, Shield, Globe, Zap, Database, Lock, Cpu, Network, BarChart3, Smartphone } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Development',
      description: 'Custom AI solutions and machine learning models tailored to your business needs.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots',
        'Recommendation Systems'
      ],
      benefits: [
        'Increased operational efficiency',
        'Data-driven decision making',
        'Automated processes',
        'Competitive advantage'
      ],
      href: '/services/ai-development'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Scalable cloud solutions and infrastructure design for modern applications.',
      features: [
        'AWS/Azure/GCP Migration',
        'Microservices Architecture',
        'Serverless Solutions',
        'DevOps Automation',
        'Container Orchestration',
        'Cloud Security'
      ],
      benefits: [
        'Scalable infrastructure',
        'Cost optimization',
        'High availability',
        'Reduced maintenance'
      ],
      href: '/services/cloud-services'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      features: [
        'React/Next.js Applications',
        'Full-Stack Development',
        'Progressive Web Apps',
        'API Development',
        'E-commerce Solutions',
        'Custom CMS'
      ],
      benefits: [
        'Modern user experience',
        'Mobile-first design',
        'Fast performance',
        'SEO optimization'
      ],
      href: '/services/web-development'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Compliance Management',
        'Incident Response',
        'Security Training',
        'Threat Intelligence'
      ],
      benefits: [
        'Protect sensitive data',
        'Meet compliance requirements',
        'Reduce security risks',
        'Build customer trust'
      ],
      href: '/services/cybersecurity'
    },
    {
      icon: Globe,
      title: 'IoT Platforms',
      description: 'Connected device solutions for smart environments and automation.',
      features: [
        'Sensor Networks',
        'Edge Computing',
        'Real-time Analytics',
        'Device Management',
        'Data Collection',
        'Remote Monitoring'
      ],
      benefits: [
        'Automated operations',
        'Real-time insights',
        'Cost savings',
        'Improved efficiency'
      ],
      href: '/services/iot-platforms'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business.',
      features: [
        'Process Automation',
        'Legacy Modernization',
        'Change Management',
        'Training Programs',
        'Workflow Optimization',
        'Technology Roadmaps'
      ],
      benefits: [
        'Streamlined operations',
        'Improved productivity',
        'Better customer experience',
        'Future-ready business'
      ],
      href: '/services/digital-transformation'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights for strategic decision making.',
      features: [
        'Business Intelligence',
        'Data Warehousing',
        'Predictive Analytics',
        'Data Visualization',
        'ETL Processes',
        'Performance Dashboards'
      ],
      benefits: [
        'Data-driven decisions',
        'Identify opportunities',
        'Optimize operations',
        'Measure performance'
      ],
      href: '/services/data-analytics'
    },
    {
      icon: Lock,
      title: 'Blockchain Solutions',
      description: 'Secure, transparent, and decentralized applications for modern businesses.',
      features: [
        'Smart Contracts',
        'DeFi Applications',
        'NFT Marketplaces',
        'Supply Chain Tracking',
        'Identity Management',
        'Cross-chain Solutions'
      ],
      benefits: [
        'Enhanced security',
        'Transparent operations',
        'Reduced costs',
        'New business models'
      ],
      href: '/services/blockchain'
    },
    {
      icon: Cpu,
      title: 'Machine Learning',
      description: 'Advanced ML solutions that learn and adapt to your business needs.',
      features: [
        'Custom ML Models',
        'Deep Learning',
        'Neural Networks',
        'Model Training',
        'A/B Testing',
        'Continuous Learning'
      ],
      benefits: [
        'Automated insights',
        'Pattern recognition',
        'Predictive capabilities',
        'Scalable intelligence'
      ],
      href: '/services/machine-learning'
    },
    {
      icon: Network,
      title: 'API Development',
      description: 'Robust and scalable APIs that power modern applications.',
      features: [
        'RESTful APIs',
        'GraphQL Services',
        'API Gateway',
        'Rate Limiting',
        'Authentication',
        'Documentation'
      ],
      benefits: [
        'Seamless integration',
        'Scalable architecture',
        'Developer experience',
        'Faster development'
      ],
      href: '/services/api-development'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Comprehensive BI solutions for data-driven business decisions.',
      features: [
        'Interactive Dashboards',
        'KPI Tracking',
        'Report Automation',
        'Data Mining',
        'Trend Analysis',
        'Executive Reporting'
      ],
      benefits: [
        'Real-time insights',
        'Better decisions',
        'Performance tracking',
        'Competitive advantage'
      ],
      href: '/services/business-intelligence'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: [
        'iOS Development',
        'Android Development',
        'React Native',
        'Flutter Apps',
        'Mobile UI/UX',
        'App Store Optimization'
      ],
      benefits: [
        'Mobile presence',
        'User engagement',
        'Brand visibility',
        'Revenue growth'
      ],
      href: '/services/mobile-development'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs, current systems, and objectives to understand your requirements.'
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design a tailored solution that aligns with your business goals and technical requirements.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We develop your solution using best practices and conduct thorough testing to ensure quality.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing support and maintenance to ensure optimal performance.'
    }
  ];

  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of technology services including AI development, cloud architecture, web development, cybersecurity, and more." />
        <meta name="keywords" content="technology services, AI development, cloud architecture, web development, cybersecurity, digital transformation" />
      </Head>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver cutting-edge technology solutions that drive innovation, efficiency, and growth 
            for forward-thinking organizations across industries.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Technology Solutions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From AI and machine learning to cloud architecture and cybersecurity, we offer end-to-end 
              solutions that transform businesses and drive measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 hover:bg-gray-900/80 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-300 flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-white mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-xs text-gray-300 flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-transform"
>>>>>>> d0d58136d327183e53cdbb308d5ed67246f24274
                >
                  <span>Learn More</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
<<<<<<< HEAD
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
=======
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We follow a proven methodology that ensures successful project delivery and maximum value 
              for your investment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let&rsquo;s discuss how our technology services can transform your business and drive 
            innovation in your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </Link>
            <Link 
              href="/about" 
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
>>>>>>> d0d58136d327183e53cdbb308d5ed67246f24274
