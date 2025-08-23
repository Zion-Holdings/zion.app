import React, { useState } from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List, Filter,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Star, TrendingUp,
  Building, Cpu, Database, Cloud, Lock,
  Globe, Zap, Users, BarChart3
} from 'lucide-react';
import SEO from '../components/SEO';

// Import our new 2037 service data
import { real2037Q1InnovativeAdditions } from '../data/real-2037-q1-innovative-additions';
import { real2037Q1ITInnovations } from '../data/real-2037-q1-it-innovations';
import { real2037Q1MicroSaasInnovations } from '../data/real-2037-q1-micro-saas-innovations';

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Combine all services
const all2037Services = [
  ...real2037Q1InnovativeAdditions,
  ...real2037Q1ITInnovations,
  ...real2037Q1MicroSaasInnovations
];

const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-5 h-5" />,
    color: 'from-gray-500 to-slate-500',
    count: all2037Services.length
  },
  {
    id: 'AI Governance & Compliance',
    name: 'AI Governance',
    icon: <Brain className="w-5 h-5" />,
    color: 'from-emerald-500 to-green-600',
    count: all2037Services.filter(s => s.category === 'AI Governance & Compliance').length
  },
  {
    id: 'Cybersecurity & Cryptography',
    name: 'Cybersecurity',
    icon: <Shield className="w-5 h-5" />,
    color: 'from-red-500 to-orange-600',
    count: all2037Services.filter(s => s.category === 'Cybersecurity & Cryptography').length
  },
  {
    id: 'DevOps & Automation',
    name: 'DevOps',
    icon: <Rocket className="w-5 h-5" />,
    color: 'from-orange-500 to-red-600',
    count: all2037Services.filter(s => s.category === 'DevOps & Automation').length
  },
  {
    id: 'Edge Computing & IoT',
    name: 'Edge & IoT',
    icon: <Globe className="w-5 h-5" />,
    color: 'from-blue-500 to-cyan-600',
    count: all2037Services.filter(s => s.category === 'Edge Computing & IoT').length
  },
  {
    id: 'Content & Localization',
    name: 'Content',
    icon: <BarChart3 className="w-5 h-5" />,
    color: 'from-teal-500 to-cyan-600',
    count: all2037Services.filter(s => s.category === 'Content & Localization').length
  },
  {
    id: 'E-commerce & Retail',
    name: 'E-commerce',
    icon: <Target className="w-5 h-5" />,
    color: 'from-orange-500 to-amber-600',
    count: all2037Services.filter(s => s.category === 'E-commerce & Retail').length
  },
  {
    id: 'Marketing & Automation',
    name: 'Marketing',
    icon: <Zap className="w-5 h-5" />,
    color: 'from-purple-500 to-violet-600',
    count: all2037Services.filter(s => s.category.includes('Marketing') || s.category.includes('Social Media')).length
  }
];

const ServiceCard: React.FC<{ service: any; index: number }> = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 group"
  >
    <div className={`absolute inset-0 bg-gradient-to-r ${service.color || 'from-blue-500 to-purple-600'} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-20`}></div>
    <div className={`relative bg-gradient-to-r ${(service.color || 'from-blue-500 to-purple-600').replace('from-', 'from-').replace('to-', 'to-')} bg-opacity-10 border border-opacity-30 rounded-2xl p-8 hover:border-opacity-50 transition-all duration-300 h-full`}>
      <div className="flex items-start justify-between mb-6">
        <div className="text-4xl">{service.icon}</div>
        {service.popular && (
          <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full">
            Popular
          </span>
        )}
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
      <p className="text-gray-300 mb-6 text-sm leading-relaxed">{service.description}</p>
      
      <div className="space-y-3 mb-6">
        {service.features.slice(0, 4).map((feature: string, idx: number) => (
          <div key={idx} className="flex items-center space-x-2">
            <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
            <span className="text-gray-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>
      
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {service.name}
          </h3>
          <p className="text-gray-400 text-sm">{service.category}</p>
        </div>
      </div>
      {service.popular && (
        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
          POPULAR
        </div>
      )}
    </div>

    {/* Tagline */}
    <p className="text-gray-300 mb-4 leading-relaxed">{service.tagline}</p>

    {/* Features */}
    <div className="space-y-2 mb-4">
      {service.features.slice(0, 3).map((feature: string, idx: number) => (
        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-400">
          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
          <span>{feature}</span>
        </div>
        <div className="flex justify-between">
          <span>Customers:</span>
          <span>{service.customers ? service.customers.toLocaleString() : 'N/A'}</span>
        </div>
      </div>
    </div>

    {/* ROI & Benefits */}
    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-3 mb-4">
      <div className="text-sm text-green-400 font-medium mb-1">Key Benefits</div>
      <div className="text-xs text-gray-300">{service.roi}</div>
    </div>

    {/* CTA */}
    <div className="flex space-x-2">
      <a
        href={service.link}
        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 font-medium text-sm"
      >
        Learn More
      </a>
      <a
        href={`mailto:${contact.email}?subject=Inquiry about ${service.name}`}
        className="bg-gray-700 text-gray-300 py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors duration-300 text-sm"
      >
        Contact
      </a>
    </div>
  </motion.div>
);

const ContactSection: React.FC = () => (
  <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
    <div className="max-w-6xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Our innovative 2037 services are designed to give you a competitive edge in the rapidly evolving technology landscape.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Get Started Today</h3>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-center space-x-3">
              <Check className="w-5 h-5 text-green-400" />
              <span>Free consultation and assessment</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="w-5 h-5 text-green-400" />
              <span>Custom implementation plan</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="w-5 h-5 text-green-400" />
              <span>Ongoing support and optimization</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
              <span>{contact.mobile}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
              <span>{contact.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
              <span>{contact.address}</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <a
          href={`mailto:${contact.email}?subject=2037 Services Consultation`}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-semibold text-lg transform hover:scale-105"
        >
          <span>Start Your Transformation</span>
          <ArrowRight className="w-5 h-5" />
        </a>
      </motion.div>
    </div>
  </section>
);

const ServicesShowcase2037: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredServices = all2037Services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <SEO
        title="2037 Innovative Services Showcase | Zion Tech Group"
        description="Discover our cutting-edge 2037 services portfolio featuring AI governance, quantum security, edge computing, and innovative micro SAAS solutions. Transform your business with next-generation technology."
        keywords={["2037 services", "AI governance", "quantum security", "edge computing", "micro SAAS", "innovative technology", "Zion Tech Group"]}
        canonical="https://ziontechgroup.com/2037-innovative-services-showcase"
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        
        <div className="text-center max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium"
            >
              <TrendingUp className="w-4 h-4" />
              <span>Innovation Leader 2037</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              2037 Services Showcase
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the future of technology with our comprehensive portfolio of innovative AI, IT, and micro SAAS solutions designed to transform your business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="#services">
                <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                  <span className="flex items-center gap-2">
                    Explore Services
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </a>
              <a href={`mailto:${contact.email}?subject=2037 Services Consultation`}>
                <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                  Get Consultation
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-black relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Revolutionary 2037 Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our cutting-edge portfolio featuring {all2037Services.length} innovative services across AI governance, quantum security, edge computing, and specialized micro SAAS solutions
            </p>
          </motion.div>

          {/* Filters and Search */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white border-transparent`
                      : 'bg-gray-800/50 text-gray-300 border-gray-700 hover:border-gray-600'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex justify-center">
              <div className="bg-gray-800/50 rounded-lg p-1 border border-gray-700">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 rounded-md transition-all duration-300 ${
                    viewMode === 'grid'
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 rounded-md transition-all duration-300 ${
                    viewMode === 'list'
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'md:grid-cols-2 lg:grid-cols-3' 
              : 'md:grid-cols-1'
          }`}>
            {filteredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 text-xl mb-4">No services found</div>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </Layout>
  );
};

export default ServicesShowcase2037;