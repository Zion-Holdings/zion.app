<<<<<<< HEAD
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import { enhancedRealMicroSaasServices, serviceCategories, getServicesByCategory, getServicesByTechnology, getServicesByPriceRange } from '../data/enhanced-real-micro-saas-services';

const Services: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const filteredServices = useMemo(() => {
    let services = enhancedRealMicroSaasServices;

    // Filter by category
    if (selectedCategory !== 'All') {
      services = getServicesByCategory(selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      services = services.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.technology.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by price range
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      services = getServicesByPriceRange(min, max === 0 ? Infinity : max);
    }

    // Sort services
    services.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
        case 'popularity':
          return b.popular ? 1 : -1;
        case 'growth':
          return parseFloat(b.growthRate) - parseFloat(a.growthRate);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return services;
  }, [selectedCategory, searchTerm, priceRange, sortBy]);

  const getPriceRangeLabel = (range: string) => {
    switch (range) {
      case '0-100': return 'Under $100/month';
      case '100-300': return '$100 - $300/month';
      case '300-500': return '$300 - $500/month';
      case '500-1000': return '$500 - $1000/month';
      case '1000-0': return 'Over $1000/month';
      default: return 'All Prices';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Head>
        <title>Micro SAAS Services - Zion Tech Group | Innovative Technology Solutions</title>
        <meta name="description" content="Discover our comprehensive portfolio of innovative micro SAAS services including AI, quantum computing, cybersecurity, and more. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="micro SAAS services, AI solutions, quantum computing, cybersecurity, DevOps, healthcare AI, metaverse platform" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Revolutionary Micro SAAS Services
          </h1>
                      <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Discover our cutting-edge portfolio of innovative technology solutions designed to transform your business. 
              From AI-powered analytics to quantum computing platforms, we&apos;re building the future today.
            </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <span>🚀 8+ Revolutionary Services</span>
            <span>⚡ 99.9% Uptime Guarantee</span>
            <span>🤖 AI-Powered Solutions</span>
            <span>💰 Competitive Pricing</span>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="grid md:grid-cols-4 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {serviceCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Prices</option>
                <option value="0-100">Under $100/month</option>
                <option value="100-300">$100 - $300/month</option>
                <option value="300-500">$300 - $500/month</option>
                <option value="500-1000">$500 - $1000/month</option>
                <option value="1000-0">Over $1000/month</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="popularity">Popularity</option>
                <option value="growth">Growth Rate</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredServices.length}</span> services
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
            {priceRange !== 'all' && ` in ${getPriceRangeLabel(priceRange)}`}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Service Header */}
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-sm opacity-90">{service.tagline}</p>
                {service.popular && (
                  <span className="inline-block bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold mt-2">
                    ⭐ Popular
                  </span>
                )}
              </div>

              {/* Service Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                
                {/* Price */}
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                  <span className="text-gray-500">{service.period}</span>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-blue-600">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Technology Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Technology:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.technology.slice(0, 3).map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {service.technology.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{service.technology.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Market Info */}
                <div className="mb-4 text-sm text-gray-600">
                  <div className="flex justify-between mb-1">
                    <span>Market Size:</span>
                    <span className="font-medium">{service.marketSize}</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Growth Rate:</span>
                    <span className="font-medium text-green-600">{service.growthRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ROI:</span>
                    <span className="font-medium text-blue-600">{service.roi}</span>
                  </div>
                </div>

                {/* Trial & Setup */}
                <div className="mb-4 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Free Trial:</span>
                    <span className="font-medium">{service.trialDays} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Setup Time:</span>
                    <span className="font-medium">{service.setupTime}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={service.link}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                  >
                    Learn More
                  </a>
                  <Link
                    href="/contact"
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your filters or search terms to find what you&apos;re looking for.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchTerm('');
                setPriceRange('all');
                setSortBy('name');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Our team of experts is ready to help you implement the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Get Started Today
              </Link>
              <a
                href="tel:+13024640950"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
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
                >
                  <span className="inline-flex items-center">
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
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
>>>>>>> 6d7be8fce1d5e66d749ea8dd439e0663bfd83322
