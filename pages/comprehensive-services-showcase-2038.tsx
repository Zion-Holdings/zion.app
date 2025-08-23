import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List, Brain, Atom, Shield, Rocket,
  ArrowRight, Check, Globe, Cpu, Cloud, Users, Target
} from 'lucide-react';

// Import our new innovative services
import { innovative2038MicroSaasServices } from '../data/innovative-2038-micro-saas-services';
import { innovative2038ITServices } from '../data/innovative-2038-it-services';
import { innovative2038AIServices } from '../data/innovative-2038-ai-services';

// Import existing services for comprehensive coverage
import { innovative2037MicroSaasServices } from '../data/innovative-2037-micro-saas-services';
import { innovative2037ITServices } from '../data/innovative-2037-it-services';
import { innovative2037AIServices } from '../data/innovative-2037-ai-services';



// Helper function to get service pricing
const getServicePricing = (service: any) => {
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
  if (service.price?.monthly) return `$${service.price.monthly}/month`;
  return 'Contact for pricing';
};

// Helper function to get service features
const getServiceFeatures = (service: any) => {
  if (service.features) return service.features;
  if (service.keyFeatures) return service.keyFeatures;
  return [];
};

// Helper function to get service description
const getServiceDescription = (service: any) => {
  if (service.description) return service.description;
  if (service.tagline) return service.tagline;
  return 'No description available';
};

// Create unified services array
const allServices = [
  ...innovative2038MicroSaasServices,
  ...innovative2038ITServices,
  ...innovative2038AIServices,
  ...innovative2037MicroSaasServices,
  ...innovative2037ITServices,
  ...innovative2037AIServices
];

const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of all services'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    description: 'Innovative micro SAAS solutions'
  },
  {
    id: 'it-services',
    name: 'IT Services',
    icon: <Cpu className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Advanced IT infrastructure and services'
  },
  {
    id: 'ai-services',
    name: 'AI Services',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Cutting-edge AI and machine learning'
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing',
    icon: <Atom className="w-6 h-6" />,
    color: 'from-indigo-500 to-blue-500',
    description: 'Quantum computing solutions'
  },
  {
    id: 'space-technology',
    name: 'Space Technology',
    icon: <Globe className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    description: 'Space exploration and technology'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500',
    description: 'Advanced security solutions'
  },
  {
    id: 'cloud-infrastructure',
    name: 'Cloud Infrastructure',
    icon: <Cloud className="w-6 h-6" />,
    color: 'from-blue-500 to-indigo-500',
    description: 'Cloud computing and infrastructure'
  }
];

const ComprehensiveServicesShowcase2038: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'market'>('name');


  // Filter and sort services
  const filteredServices = allServices
    .filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || 
                             (service as any).type === selectedCategory || 
                             service.category?.toLowerCase().includes(selectedCategory);
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price': {
          const priceA = parseFloat(a.pricing?.starter?.replace(/[^0-9.]/g, '') || '0');
          const priceB = parseFloat(b.pricing?.starter?.replace(/[^0-9.]/g, '') || '0');
          return priceA - priceB;
        }
        case 'market': {
          const marketA = parseFloat((a as any).marketSize?.replace(/[^0-9.]/g, '') || '0');
          const marketB = parseFloat((b as any).marketSize?.replace(/[^0-9.]/g, '') || '0');
          return marketB - marketA;
        }
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO 
        title="Comprehensive Services Showcase 2038 - Zion Tech Group"
        description="Explore our revolutionary 2038 services portfolio featuring cutting-edge AI, quantum computing, space technology, and innovative micro SAAS solutions."
        keywords={[
          '2038 services', 'AI services', 'quantum computing', 'space technology', 
          'micro SAAS', 'IT services', 'Zion Tech Group', 'artificial intelligence',
          'machine learning', 'enterprise solutions', 'technology consulting'
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-20 w-40 h-40 border border-cyan-500/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-40 right-32 w-32 h-32 border border-purple-500/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-32 left-1/4 w-28 h-28 border border-blue-500/20 rounded-full"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              2038 Services
            </span>
            <br />
            <span className="text-white">Showcase</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          >
            Experience the future of technology with our revolutionary 2038 services portfolio. 
            From quantum AI fusion to autonomous consciousness evolution, we're building tomorrow's solutions today.
          </motion.p>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search our revolutionary 2038 services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {category.icon}
                    {category.name}
                  </div>
                </button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 rounded-lg p-1 border border-white/20">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'market')}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="market">Sort by Market Size</option>
              </select>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                {filteredServices.length}
              </div>
              <div className="text-gray-400 text-sm">Total Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                {categories.length}
              </div>
              <div className="text-gray-400 text-sm">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                $200B+
              </div>
              <div className="text-gray-400 text-sm">Market Value</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                99.9%
              </div>
              <div className="text-gray-400 text-sm">Success Rate</div>
=======
import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Star, CheckCircle, TrendingUp, Users, 
  Globe, Brain, Atom, Shield, Rocket,
  Target, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Database, Cloud, Lock
} from 'lucide-react';

export default function ComprehensiveServicesShowcase2038() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const marketStats = [
    { label: 'Total Market Size', value: '$2.5T+', description: 'Combined market value of all service categories' },
    { label: 'Annual Growth Rate', value: '45%+', description: 'Average growth across all service sectors' },
    { label: 'Active Customers', value: '50K+', description: 'Satisfied clients worldwide' },
    { label: 'Service Categories', value: '25+', description: 'Comprehensive solution coverage' }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      description: 'Revolutionary AI solutions that transform business operations',
      services: [
        'AI Neural Architecture Optimizer - $199/month',
        'AI Emotional Intelligence Coach - $89/month',
        'AI Content Generation Studio - $149/month',
        'Autonomous AI Systems - $399/month'
      ],
      marketSize: '$500B+',
      growthRate: '35% annually'
    },
    {
      name: 'Quantum Computing & Technology',
      description: 'Next-generation quantum solutions for unprecedented computational power',
      services: [
        'Quantum Edge Computing Orchestrator - $399/month',
        'Quantum Secure Communication Hub - $299/month',
        'Quantum Financial Trading Engine - $1,299/month',
        'Quantum Reality Fabric - $3,999/month'
      ],
      marketSize: '$65B+',
      growthRate: '100% annually'
    },
    {
      name: 'Cybersecurity & Autonomous Systems',
      description: 'AI-powered autonomous security and operational systems',
      services: [
        'Autonomous Cybersecurity Sentinel - $299/month',
        'Autonomous Logistics Optimizer - $449/month',
        'Autonomous Energy Grid Manager - $549/month',
        'Autonomous Reality Architect - $4,999/month'
      ],
      marketSize: '$200B+',
      growthRate: '25% annually'
    },
    {
      name: 'Metaverse & Digital Commerce',
      description: 'Complete business infrastructure for the virtual economy',
      services: [
        'Metaverse Business Infrastructure - $599/month',
        'Metaverse Advertising Platform - $499/month',
        'Virtual Event Hologram Platform - $799/month',
        'Digital Asset Marketplace - $399/month'
      ],
      marketSize: '$800B+',
      growthRate: '40% annually'
    },
    {
      name: 'Healthcare & Biotechnology',
      description: 'AI-powered healthcare solutions and biotech research platforms',
      services: [
        'Biotech AI Research Platform - $799/month',
        'AI Healthcare Analytics - $299/month',
        'AI Mental Health Companion - $149/month',
        'Quantum Biological Computing - $3,499/month'
      ],
      marketSize: '$150B+',
      growthRate: '45% annually'
    },
    {
      name: 'Space Technology & Exploration',
      description: 'Advanced space solutions for the new space economy',
      services: [
        'Space Resource Mining Platform - $899/month',
        'Space Technology AI Platform - $599/month',
        'Satellite Communication Hub - $399/month',
        'Space Logistics Optimization - $699/month'
      ],
      marketSize: '$469B+',
      growthRate: '60% annually'
    },
    {
      name: 'Advertising & Marketing',
      description: 'AI-powered marketing solutions for maximum ROI',
      services: [
        'AI Digital Marketing Suite - $299/month',
        'Quantum SEO Optimization - $199/month',
        'Autonomous Social Media Manager - $249/month',
        'AI Influencer Marketing Platform - $399/month'
      ],
      marketSize: '$100B+',
      growthRate: '30% annually'
    },
    {
      name: 'Consciousness & Human Augmentation',
      description: 'Revolutionary platforms for human consciousness and AI evolution',
      services: [
        'Consciousness AI Evolution Platform - $2,499/month',
        'Quantum AI Brain-Computer Interface - $1,599/month',
        'Autonomous Consciousness Evolution - $6,999/month',
        'Human Augmentation Suite - $899/month'
      ],
      marketSize: '$75B+',
      growthRate: '150% annually'
    }
  ];

  const competitiveAdvantages = [
    {
      title: 'First-to-Market Solutions',
      description: 'Pioneering innovative technologies and services that competitors cannot match',
      icon: '🚀'
    },
    {
      title: 'Quantum-Enhanced Technology',
      description: 'Leveraging quantum computing for unprecedented performance and capabilities',
      icon: '⚛️'
    },
    {
      title: 'AI-Powered Automation',
      description: 'Complete automation of complex processes reducing human intervention by 90%',
      icon: '🤖'
    },
    {
      title: 'Enterprise-Grade Security',
      description: 'Military-grade security protocols and quantum-resistant encryption',
      icon: '🛡️'
    },
    {
      title: 'Global Market Coverage',
      description: 'Comprehensive solutions covering 25+ service categories worldwide',
      icon: '🌍'
    },
    {
      title: 'Proven ROI & Results',
      description: 'Documented success with 300%+ ROI improvements for clients',
      icon: '📈'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      title: 'CTO, TechCorp Global',
      company: 'Fortune 500 Technology Company',
      content: 'Zion Tech Group\'s AI Neural Architecture Optimizer reduced our model development time by 80% and improved performance by 35%. The ROI was immediate and substantial.',
      rating: 5,
      service: 'AI Neural Architecture Optimizer'
    },
    {
      name: 'Marcus Rodriguez',
      title: 'Head of Cybersecurity',
      company: 'Global Financial Institution',
      content: 'The Autonomous Cybersecurity Sentinel provides 24/7 protection with zero false positives. Our security incidents dropped by 85% in the first month.',
      rating: 5,
      service: 'Autonomous Cybersecurity Sentinel'
    },
    {
      name: 'Dr. Emily Watson',
      title: 'Research Director',
      company: 'Leading Biotech Research Institute',
      content: 'The Biotech AI Research Platform accelerated our drug discovery process by 10x. We\'re now leading the industry in breakthrough treatments.',
      rating: 5,
      service: 'Biotech AI Research Platform'
    },
    {
      name: 'Alex Thompson',
      title: 'Marketing Director',
      company: 'E-commerce Giant',
      content: 'The AI Digital Marketing Suite increased our campaign ROI by 300% while reducing management time by 80%. It\'s a game-changer for digital marketing.',
      rating: 5,
      service: 'AI Digital Marketing Suite'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO 
        title="Comprehensive Services Showcase 2038 | Zion Tech Group"
        description="Discover Zion Tech Group's revolutionary 2038 services portfolio featuring AI, quantum computing, cybersecurity, metaverse solutions, and more. Transform your business with cutting-edge technology."
        keywords={['AI services', 'quantum computing', 'cybersecurity', 'metaverse', 'biotechnology', 'space technology', 'Zion Tech Group', '2038 services']}
        image="https://ziontechgroup.com/og-image-2038-services.jpg"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
              <br />
              <span className="text-4xl md:text-5xl text-gray-200">
                2038 Services Portfolio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary micro SAAS, IT, and AI services that define the future of technology. 
              From quantum computing to AI consciousness, we're building tomorrow's solutions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Call Now: {contactInfo.mobile}</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Email: {contactInfo.email}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </motion.div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${
                    viewMode === 'grid'
                      ? 'bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300'
                      : 'bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300'
                  }`}
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
                          {service.category?.includes('AI') ? <Brain className="w-8 h-8 text-white" /> :
                           service.category?.includes('Quantum') ? <Atom className="w-8 h-8 text-white" /> :
                           service.category?.includes('Space') ? <Globe className="w-8 h-8 text-white" /> :
                           service.category?.includes('Security') ? <Shield className="w-8 h-8 text-white" /> :
                           <Rocket className="w-8 h-8 text-white" />}
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-cyan-400 font-medium">{(service as any).type || service.category}</div>
                          <div className="text-xs text-gray-400">{(service as any).marketSize || 'Contact for pricing'}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{getServiceDescription(service)}</p>
                      
                      <div className="mb-4">
                        <div className="text-lg font-bold text-cyan-400 mb-2">
                          {getServicePricing(service)}
                        </div>
                        <div className="text-xs text-gray-400">Starting price</div>
                      </div>

                      <div className="space-y-2 mb-4">
                        {getServiceFeatures(service).slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-400">
                          {(service as any).targetAudience?.split(', ').slice(0, 2).join(', ') || 'Enterprise'}
                        </div>
                        <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300">
                          Learn More
                        </button>
                      </div>
                    </div>
                  ) : (
                    // List View
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                        {service.category?.includes('AI') ? <Brain className="w-10 h-10 text-white" /> :
                         service.category?.includes('Quantum') ? <Atom className="w-10 h-10 text-white" /> :
                         service.category?.includes('Space') ? <Globe className="w-10 h-10 text-white" /> :
                         service.category?.includes('Security') ? <Shield className="w-10 h-10 text-white" /> :
                         <Rocket className="w-10 h-10 text-white" />}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold text-white">{service.name}</h3>
                          <div className="text-right">
      {/* Services Grid/List */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>
            </motion.div>
          ) : (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`${
                    viewMode === 'grid'
                      ? 'bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300'
                      : 'bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300'
                  }`}
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
                          {service.category?.includes('AI') ? <Brain className="w-8 h-8 text-white" /> :
                           service.category?.includes('Quantum') ? <Atom className="w-8 h-8 text-white" /> :
                           service.category?.includes('Space') ? <Globe className="w-8 h-8 text-white" /> :
                           service.category?.includes('Security') ? <Shield className="w-8 h-8 text-white" /> :
                           <Rocket className="w-8 h-8 text-white" />}
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-cyan-400 font-medium">{(service as any).type || service.category}</div>
                          <div className="text-xs text-gray-400">{(service as any).marketSize || 'Contact for pricing'}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">{getServiceDescription(service)}</p>
                      
                      <div className="mb-4">
                        <div className="text-lg font-bold text-cyan-400 mb-2">
                          {getServicePricing(service)}
                        </div>
                        <div className="text-xs text-gray-400">Starting price</div>
                      </div>

                      <div className="space-y-2 mb-4">
                        {getServiceFeatures(service).slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                            <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                      </div>

                                              <div className="flex items-center justify-between">
                          <div className="text-xs text-gray-400">
                            {(service as any).targetAudience?.split(', ').slice(0, 2).join(', ') || 'Enterprise'}
                          </div>
                        <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300">
                          Learn More
                        </button>
                      </div>
                    </div>
                  ) : (
                    // List View
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                        {service.category?.includes('AI') ? <Brain className="w-10 h-10 text-white" /> :
                         service.category?.includes('Quantum') ? <Atom className="w-10 h-10 text-white" /> :
                         service.category?.includes('Space') ? <Globe className="w-10 h-10 text-white" /> :
                         service.category?.includes('Security') ? <Shield className="w-10 h-10 text-white" /> :
                         <Rocket className="w-10 h-10 text-white" />}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold text-white">{service.name}</h3>
                          <div className="text-right">
                            <div className="text-lg font-bold text-cyan-400">{getServicePricing(service)}</div>
                            <div className="text-xs text-gray-400">{(service as any).marketSize || 'Contact for pricing'}</div>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-3 line-clamp-2">{getServiceDescription(service)}</p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                          <span className="flex items-center gap-1">
                            <Target className="w-4 h-4" />
                            {(service as any).type || service.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {(service as any).targetAudience?.split(', ').slice(0, 2).join(', ') || 'Enterprise'}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          {getServiceFeatures(service).slice(0, 4).map((feature, idx) => (
                            <span key={idx} className="bg-white/10 px-3 py-1 rounded-full text-xs text-gray-300">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex-shrink-0">
                        Learn More
                      </button>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to Experience the Future?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-8"
          >
            Join the revolution and transform your business with our cutting-edge 2038 services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105">
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10">
              Schedule Demo
            </button>
=======
      {/* Market Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Market Leadership & Growth
            </h2>
            <p className="text-xl text-gray-300">
              Leading the technology revolution with proven market success and exponential growth
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Service Portfolio
            </h2>
            <p className="text-xl text-gray-300">
              25+ service categories covering every aspect of modern technology and business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  
                  <div className="bg-slate-700 p-4 rounded-lg mb-4">
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Featured Services:</h4>
                    <ul className="space-y-2">
                      {category.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="text-sm text-gray-300 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <div className="text-gray-400">
                      <span className="font-semibold">Market Size:</span> {category.marketSize}
                    </div>
                    <div className="text-gray-400">
                      <span className="font-semibold">Growth:</span> {category.growthRate}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300">
              Unmatched competitive advantages that set us apart in the technology landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 text-center"
              >
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{advantage.title}</h3>
                <p className="text-gray-300">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-300">
              Real results from real clients across industries worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600"
              >
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t border-slate-600 pt-4">
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-blue-400 text-sm">{testimonial.title}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  <div className="text-green-400 text-sm mt-1">Service: {testimonial.service}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of successful businesses already leveraging our revolutionary technology solutions
            </p>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-blue-400 font-semibold mb-2">Phone</div>
                  <div className="text-white">{contactInfo.mobile}</div>
                </div>
                <div>
                  <div className="text-blue-400 font-semibold mb-2">Email</div>
                  <div className="text-white">{contactInfo.email}</div>
                </div>
                <div>
                  <div className="text-blue-400 font-semibold mb-2">Address</div>
                  <div className="text-white text-sm">{contactInfo.address}</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                Call Now for Consultation
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Request Custom Quote
              </a>
            </div>

                          <div className="mt-8 text-gray-400">
                <p className="text-sm">
                  Visit our website: <a href={contactInfo.website} className="text-blue-400 hover:underline">{contactInfo.website}</a>
                </p>
                <p className="text-sm mt-2">
                  All services include comprehensive support, training, and ongoing optimization
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    );
  };
  
  export default ComprehensiveServicesShowcase2038;
