import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, Users, 
  Award, ExternalLink, Github, Globe, Zap, Star, CheckCircle,
  TrendingUp, BarChart3, Cloud, Network, Search, Filter, ArrowRight,
  BookOpen, FileText, Building, Lock, Satellite, Microchip
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'quantum', name: 'Quantum Computing', icon: Atom },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'space', name: 'Space Technology', icon: Rocket },
    { id: 'edge', name: 'Edge Computing', icon: Cpu },
    { id: 'enterprise', name: 'Enterprise Solutions', icon: Building }
  ];

  const services = [
    {
      id: 1,
      title: 'AI Business Intelligence Platform',
      category: 'ai',
      description: 'Transform your data into actionable insights with our AI-powered analytics platform. Real-time processing, predictive analytics, and automated reporting.',
      features: [
        'AI-powered dashboards and visualizations',
        'Predictive analytics and forecasting',
        'Real-time data processing',
        'Automated reporting and alerts',
        'Natural language query interface',
        'Custom ML model development'
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'AWS', 'PostgreSQL', 'Kubernetes'],
      pricing: 'Starting at $499/month',
      image: '/api/placeholder/600/400',
      link: '/services/ai-business-intelligence',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum-Resistant Cybersecurity Framework',
      category: 'cybersecurity',
      description: 'Future-proof your security with quantum-resistant encryption and AI-powered threat detection. Zero-trust architecture with 24/7 monitoring.',
      features: [
        'Post-quantum cryptography',
        'AI-powered threat detection',
        'Zero-trust architecture',
        'Real-time monitoring and alerts',
        'Compliance automation',
        'Incident response automation'
      ],
      technologies: ['Rust', 'Post-Quantum Cryptography', 'AI/ML', 'Kubernetes', 'Zero Trust'],
      pricing: 'Starting at $799/month',
      image: '/api/placeholder/600/400',
      link: '/services/quantum-cybersecurity',
      featured: true
    },
    {
      id: 3,
      title: 'Edge Computing Orchestration Platform',
      category: 'edge',
      description: 'Deploy and manage applications at the edge with intelligent orchestration. IoT device management, real-time analytics, and distributed computing.',
      features: [
        'Edge node management and monitoring',
        'IoT device orchestration',
        'Real-time analytics processing',
        'Load balancing and optimization',
        'Automatic scaling and failover',
        'Multi-cloud edge deployment'
      ],
      technologies: ['Kubernetes', 'Edge Computing', 'IoT Protocols', 'Real-time Analytics', 'Microservices'],
      pricing: 'Starting at $349/month',
      image: '/api/placeholder/600/400',
      link: '/services/edge-computing',
      featured: false
    },
    {
      id: 4,
      title: 'Space Technology Innovation Platform',
      category: 'space',
      description: 'Accelerate space exploration with cutting-edge technology solutions. Satellite management, AI mission planning, and quantum communication.',
      features: [
        'Satellite constellation management',
        'AI-powered mission planning',
        'Quantum communication systems',
        'Space resource optimization',
        'Real-time satellite monitoring',
        'Autonomous navigation systems'
      ],
      technologies: ['Python', 'AI/ML', 'Satellite APIs', 'Real-time Processing', 'Cloud Infrastructure'],
      pricing: 'Starting at $2,499/month',
      image: '/api/placeholder/600/400',
      link: '/services/space-technology',
      featured: false
    },
    {
      id: 5,
      title: 'Neural Interface Development Kit',
      category: 'ai',
      description: 'Build the future of human-computer interaction with our comprehensive neural interface development toolkit.',
      features: [
        'BCI development tools and SDKs',
        'Neural signal processing',
        'AI pattern recognition',
        'Real-time data analysis',
        'Medical compliance tools',
        'Custom interface development'
      ],
      technologies: ['Python', 'Signal Processing', 'AI/ML', 'Real-time Systems', 'Medical Standards'],
      pricing: 'Starting at $899/month',
      image: '/api/placeholder/600/400',
      link: '/services/neural-interface',
      featured: false
    },
    {
      id: 6,
      title: 'AI Customer Experience Platform',
      category: 'ai',
      description: 'Deliver personalized customer experiences at scale with AI-powered automation and intelligent insights.',
      features: [
        'Customer journey mapping',
        'AI personalization engine',
        'Sentiment analysis',
        'Automated customer support',
        'Predictive customer behavior',
        'Multi-channel integration'
      ],
      technologies: ['Python', 'AI/ML', 'NLP', 'React', 'AWS', 'Analytics'],
      pricing: 'Starting at $399/month',
      image: '/api/placeholder/600/400',
      link: '/services/ai-customer-experience',
      featured: false
    },
    {
      id: 7,
      title: 'Enterprise Digital Transformation Suite',
      category: 'enterprise',
      description: 'Comprehensive digital transformation solution including process automation, data analytics, and AI-powered decision support.',
      features: [
        'Digital twin technology',
        'Process automation',
        'Data analytics and insights',
        'AI decision support',
        'Cloud migration services',
        'Change management support'
      ],
      technologies: ['Digital Twins', 'AI/ML', 'Process Automation', 'Data Analytics', 'Cloud Migration'],
      pricing: 'Custom pricing',
      image: '/api/placeholder/600/400',
      link: '/services/digital-transformation',
      featured: false
    },
    {
      id: 8,
      title: 'Quantum AI Neural Networks',
      category: 'quantum',
      description: 'Quantum-powered AI with advanced consciousness capabilities. Hybrid quantum-classical neural networks for complex problem solving.',
      features: [
        'Hybrid quantum-classical networks',
        'Quantum consciousness simulation',
        'Advanced pattern recognition',
        'Quantum optimization algorithms',
        'Real-time quantum processing',
        'Scalable quantum architecture'
      ],
      technologies: ['Qiskit', 'Python', 'Quantum Algorithms', 'AI/ML', 'Quantum Hardware'],
      pricing: 'Starting at $1,499/month',
      image: '/api/placeholder/600/400',
      link: '/services/quantum-ai',
      featured: false
    }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredServices = services.filter(service => service.featured);

  const stats = [
    { number: '50+', label: 'Services Available', icon: Zap },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Users },
    { number: '30', label: 'Day Free Trial', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Services - Zion Tech Group | AI, Quantum Computing, Cybersecurity & More</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive range of technology services including AI, quantum computing, cybersecurity, edge computing, and space technology solutions." />
        <meta name="keywords" content="Zion Tech Group services, AI services, quantum computing services, cybersecurity solutions, edge computing, space technology, technology consulting" />
        <meta property="og:title" content="Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive technology services for the future." />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Cutting-edge technology solutions that drive innovation and transform businesses. 
              From AI and quantum computing to cybersecurity and space technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      {featuredServices.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Services</h2>
              <p className="text-white/70">Our most popular and innovative solutions</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
                >
                  {/* Service Image */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                      <categories.find(cat => cat.id === service.category)?.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-medium rounded-full">
                      Featured
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-cyan-400 font-medium mb-3">
                        {categories.find(cat => cat.id === service.category)?.name}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-4">{service.description}</p>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2 text-sm">Key Features</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-white/70">
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="text-cyan-400 font-semibold">{service.pricing}</div>
                    </div>

                    {/* CTA */}
                    <a
                      href={service.link}
                      className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters and Search */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 border-blue-500 text-white'
                      : 'border-white/20 text-white/70 hover:border-white/40 hover:text-white'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-full text-white placeholder-white/50 focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">All Services</h2>
            <p className="text-white/70">Explore our complete range of technology solutions</p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${searchTerm}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
                >
                  {/* Service Image */}
                  <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                      {(() => {
                        const category = categories.find(cat => cat.id === service.category);
                        return category ? <category.icon className="w-8 h-8 text-white" /> : <Globe className="w-8 h-8 text-white" />;
                      })()}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-cyan-400 font-medium mb-3">
                        {categories.find(cat => cat.id === service.category)?.name}
                      </span>
                      <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-4">{service.description}</p>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2 text-sm">Key Features</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 2).map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-white/70">
                            <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="text-cyan-400 font-semibold text-sm">{service.pricing}</div>
                    </div>

                    {/* CTA */}
                    <a
                      href={service.link}
                      className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center">
                <Search className="w-8 h-8 text-white/50" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No services found</h3>
              <p className="text-white/70">Try adjusting your search criteria or category selection.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl rounded-3xl border border-blue-500/30 p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our cutting-edge technology solutions can transform your business 
              and drive innovation in your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Get Started
              </a>
              <a
                href="/pricing-2025"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                View Pricing
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  );
}
