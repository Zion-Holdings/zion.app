import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Search, Grid, List,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Cpu, Database, Cloud, Lock, ShoppingCart, Lightbulb
} from 'lucide-react';
import { innovative2025MicroSaasExpansionV2 } from '../data/innovative-2025-micro-saas-expansion-v2';
import { innovative2025ITServicesExpansionV2 } from '../data/innovative-2025-it-services-expansion-v2';
import { innovative2025AIServicesExpansionV2 } from '../data/innovative-2025-ai-services-expansion-v2';
import Link from 'next/link';

// Import our new service data
import { enterpriseITSolutions } from '../data/2034-enterprise-it-solutions';
import { innovativeMicroSaasSolutions } from '../data/2034-innovative-micro-saas-solutions';
import { cuttingEdgeAIServices } from '../data/2034-cutting-edge-ai-services';
import { real2025Q4AugmentedBatch } from '../data/real-2025-q4-augmented-batch';
import { real2029Q3Additions } from '../data/real-2029-q3-additions';
import { validatedServices2025Q4 } from '../data/real-validated-2025-q4-additions';
import { real2035Q2Additions } from '../data/real-2035-q2-additions';
import { real2036ServiceExpansions } from '../data/real-2036-service-expansions';
import { innovative2036MicroSaasServices } from '../data/innovative-2036-micro-saas-services';
import { innovative2036ITServices } from '../data/innovative-2036-it-services';
import { innovative2037MicroSaasServices } from '../data/innovative-2037-micro-saas-services';
import { innovative2037ITServices } from '../data/innovative-2037-it-services';
import { innovative2037AIServices } from '../data/innovative-2037-ai-services';
import { innovative2038CuttingEdgeServices } from '../data/innovative-2038-cutting-edge-services';
import { innovative2038ITInfrastructureServices } from '../data/innovative-2038-it-infrastructure-services';
import { innovative2037Services } from '../data/innovative-2037-services';
import { advanced2038Services } from '../data/advanced-2038-services';
import { revolutionary2039Services } from '../data/revolutionary-2039-services';
import { revolutionary2040FuturisticServices } from '../data/revolutionary-2040-futuristic-services';
import { revolutionary2041AdvancedServices } from '../data/revolutionary-2041-advanced-services';
import { innovative2040FuturisticServices } from '../data/innovative-2040-futuristic-services';
import { advanced2041EnterpriseServices } from '../data/advanced-2041-enterprise-services';
import { revolutionary2042MicroSaasServices } from '../data/revolutionary-2042-micro-saas-services';

// Import our new 2025 advanced services
import { advanced2025MicroSaasExpansion } from '../data/2025-advanced-micro-saas-expansion';
import { advanced2025ITSolutionsExpansion } from '../data/2025-advanced-it-solutions-expansion';
import { advanced2025AIServicesExpansion } from '../data/2025-advanced-ai-services-expansion';
// Import our new 2025 innovative services expansion
import { innovative2025MicroSaasExpansion } from '../data/innovative-2025-micro-saas-expansion';
import { innovative2025ITSolutionsExpansion } from '../data/innovative-2025-it-solutions-expansion';
import { innovative2025AIServicesExpansion } from '../data/innovative-2025-ai-services-expansion';

// Import our new 2025 comprehensive services
import { advancedEnterpriseSolutions2025 } from '../data/2025-advanced-enterprise-solutions';
import { innovativeAIAutomationServices2025 } from '../data/2025-innovative-ai-automation-services';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeMicroSaasSolutions2025 } from '../data/2025-innovative-micro-saas-solutions';

// Import our new 2025 Q4 innovative services
import { innovative2025Q4NewServices } from '../data/innovative-2025-q4-new-services';
import { emergingTech2025Innovations } from '../data/emerging-tech-2025-innovations';

// Import additional 2038 services
import { innovative2038ITMicroSaasServices } from '../data/innovative-2038-it-micro-saas-services';

// Import 2038 innovative services
import { innovative2038AIServices } from '../data/innovative-2038-ai-services';
import { innovative2038ITServices } from '../data/innovative-2038-it-services';
import { innovative2038MicroSaasServices } from '../data/innovative-2038-micro-saas-services';
import { innovative2038IndustryServices } from '../data/innovative-2038-industry-services';
import { innovative2038ConsultingServices } from '../data/innovative-2038-consulting-services';

// Import new innovative 2037 services
import { innovative2037MicroSaasServices } from '../data/innovative-2037-micro-saas-services';
import { innovative2037ITServices } from '../data/innovative-2037-it-services';
import { innovative2037AIServices } from '../data/innovative-2037-ai-services';

// Import existing service data
import { realMicroSaasServices } from '../data/real-micro-saas-services';
import { innovativeAIServices } from '../data/innovative-ai-services';
import { enterpriseITServices } from '../data/enterprise-it-services';
import { emergingTechServices } from '../data/emerging-tech-services';
import { newRealServices } from '../data/new-real-services';
import { realOperationalServices } from '../data/real-operational-services';
import { marketReadyServices } from '../data/market-ready-services';
import { marketValidatedServices } from '../data/market-validated-services';
import { industryRealServices } from '../data/industry-real-services';

// Helper function to get service category
const getServiceCategory = (service: any) => {
  if (typeof service.category === 'string') return service.category;
  if (typeof service.type === 'string') return service.type;
  if (typeof service.industry === 'string') return service.industry;
  if (typeof service.sector === 'string') return service.sector;
  return 'Other';
};

// Helper function to get service pricing
const getServicePricing = (service: any) => {
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
  if (service.price?.monthly) return `$${service.price.monthly}/month`;
  if (typeof service.price === 'string') return service.price;
  return 'Contact for pricing';
};

// Helper function to get service features
const getServiceFeatures = (service: any) => {
  if (Array.isArray(service.features)) return service.features;
  if (Array.isArray(service.keyFeatures)) return service.keyFeatures;
  if (Array.isArray(service.capabilities)) return service.capabilities;
  if (Array.isArray(service.highlights)) return service.highlights;
  return [];
};

// Helper function to get service description
const getServiceDescription = (service: any) => {
  if (typeof service.description === 'string') return service.description;
  if (typeof service.tagline === 'string') return service.tagline;
  if (typeof service.summary === 'string') return service.summary;
  if (typeof service.overview === 'string') return service.overview;
  return 'No description available';
};

// Create unified services array
const allServices = [
  ...enterpriseITSolutions,
  ...innovativeMicroSaasSolutions,
  ...cuttingEdgeAIServices,
  ...realMicroSaasServices,
  ...innovativeAIServices,
  ...enterpriseITServices,
  ...emergingTechServices,
  ...advancedEnterpriseSolutions2025,
  ...innovativeAIAutomationServices2025,
  ...innovativeITInfrastructureServices2025,
  ...innovativeMicroSaasSolutions2025,
  ...newRealServices,
  ...realOperationalServices,
  ...marketReadyServices,
  ...marketValidatedServices,
  ...industryRealServices,
  ...real2025Q4AugmentedBatch,
  ...real2029Q3Additions,
  // Add our new 2025 cutting-edge innovative services
  ...innovative2025CuttingEdgeServices,
  ...innovative2025EnterpriseSolutions,
  ...innovative2025IndustrySolutions,
  ...validatedServices2025Q4,
  ...real2035Q2Additions,
  ...real2036ServiceExpansions,
  ...innovative2036MicroSaasServices,
  ...innovative2036ITServices,
  // New innovative 2037 services
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
    id: 'enterprise-it',
    name: 'Enterprise IT',
    icon: <Building className="w-6 h-6" />,
    color: 'from-blue-500 to-purple-500',
    description: 'Enterprise solutions and infrastructure'
  },
  {
    id: 'ai-consciousness',
    name: 'AI & Consciousness',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-cyan-500 to-blue-500',
    description: 'Revolutionary AI consciousness and emotional intelligence'
  },
  {
    id: 'quantum-emerging',
    name: 'Quantum & Emerging Tech',
    icon: <Atom className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Quantum computing and breakthrough technologies'
  },
  {
    id: 'space-metaverse',
    name: 'Space & Metaverse',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-pink-500 to-rose-500',
    description: 'Space exploration and virtual worlds'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Target className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    description: 'Innovative business solutions'
  },
  {
    id: 'creative-media',
    name: 'Creative & Media',
    icon: <Palette className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-500',
    description: 'AI-powered creative solutions'
  },
  {
    id: 'healthcare-biotech',
    name: 'Healthcare & Biotech',
    icon: <Heart className="w-6 h-6" />,
    color: 'from-red-500 to-pink-500',
    description: 'Advanced healthcare solutions'
  },
  {
    id: 'transportation-logistics',
    name: 'Transportation & Logistics',
    icon: <Truck className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    description: 'Smart transportation solutions'
  },
  {
    id: 'education-research',
    name: 'Education & Research',
    icon: <GraduationCap className="w-6 h-6" />,
    color: 'from-yellow-500 to-orange-500',
    description: 'Learning and research platforms'
  },
  {
    id: 'manufacturing-industry',
    name: 'Manufacturing & Industry',
    icon: <Building className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Industrial automation and smart manufacturing'
  },
  {
    id: 'retail-ecommerce',
    name: 'Retail & E-commerce',
    icon: <ShoppingCart className="w-6 h-6" />,
    color: 'from-pink-500 to-rose-500',
    description: 'Retail technology and e-commerce solutions'
  },
  {
    id: 'consulting-strategy',
    name: 'Consulting & Strategy',
    icon: <Lightbulb className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-500',
    description: 'Strategic consulting and advisory services'
  }
];

const ServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'popularity'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'ai' && service.name.toLowerCase().includes('ai')) ||
      (selectedCategory === 'quantum' && service.name.toLowerCase().includes('quantum')) ||
      (selectedCategory === 'it' && (service.name.toLowerCase().includes('infrastructure') || service.name.toLowerCase().includes('devops') || service.name.toLowerCase().includes('security'))) ||
      (selectedCategory === 'saas' && !service.name.toLowerCase().includes('ai') && !service.name.toLowerCase().includes('quantum') && !service.name.toLowerCase().includes('infrastructure'));
    
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    let comparison = 0;
    switch (sortBy) {
      case 'price':
        comparison = a.price.monthly - b.price.monthly;
        break;
      case 'rating':
        comparison = a.rating - b.rating;
        break;
      case 'popularity':
        comparison = a.customers - b.customers;
        break;
      default:
        comparison = a.name.localeCompare(b.name);
    }
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  const getCategoryIcon = (serviceName: string) => {
    if (serviceName.toLowerCase().includes('ai')) return <Users className="w-6 h-6" />;
    if (serviceName.toLowerCase().includes('quantum')) return <Filter className="w-6 h-6" />;
    if (serviceName.toLowerCase().includes('infrastructure') || serviceName.toLowerCase().includes('devops') || serviceName.toLowerCase().includes('security')) return <ArrowRight className="w-6 h-6" />;
    return <Award className="w-6 h-6" />;
  };

  // Reset to first page when filters/sort change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, sortBy]);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'enterprise it':
      case 'enterprise security':
      case 'devops & automation':
      case 'data & analytics':
      case 'cloud services':
      case 'cybersecurity':
        return <Building className="w-6 h-6 text-blue-400" />;
      case 'ai & consciousness':
      case 'ai services':
      case 'artificial intelligence':
        return <Brain className="w-6 h-6 text-cyan-400" />;
      case 'quantum':
      case 'quantum & emerging tech':
        return <Atom className="w-6 h-6 text-purple-400" />;
      case 'space':
      case 'space & metaverse':
        return <Rocket className="w-6 h-6 text-pink-400" />;
      case 'micro saas':
      case 'micro saas solutions':
        return <Target className="w-6 h-6 text-orange-400" />;
      case 'creative':
      case 'creative & media':
        return <Palette className="w-6 h-6 text-indigo-400" />;
      case 'healthcare':
      case 'healthcare & biotech':
        return <Heart className="w-6 h-6 text-red-400" />;
      case 'transportation':
      case 'transportation & logistics':
        return <Truck className="w-6 h-6 text-blue-400" />;
      case 'education':
      case 'education & research':
        return <GraduationCap className="w-6 h-6 text-yellow-400" />;
      case 'manufacturing':
      case 'manufacturing & industry':
        return <Building className="w-6 h-6 text-gray-400" />;
      case 'retail':
      case 'retail & e-commerce':
        return <ShoppingCart className="w-6 h-6 text-pink-400" />;
      case 'consulting':
      case 'consulting & strategy':
        return <Lightbulb className="w-6 h-6 text-indigo-400" />;
      default:
        return <Shield className="w-6 h-6 text-gray-400" />;
    }
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };
};

const ServicesPage: React.FC = () => {
  return (

export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <SEO 
        title="Services | Zion Tech Group - Enterprise IT, AI, Micro SAAS Solutions" 
        description="Discover our comprehensive portfolio of enterprise IT solutions, AI services, and innovative micro SAAS platforms. Transform your business with cutting-edge technology." 
        canonical="https://ziontechgroup.com/services/" 
      />
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center">Services Page Temporarily Disabled</h1>
        <p className="text-center text-gray-400 mt-4">This page is being updated to fix build issues.</p>
        <p className="text-center text-gray-400 mt-2">Please visit individual service pages or contact us directly.</p>
        <div className="mt-8 text-center">
          <a 
            href="/contact" 
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
=======
    <Layout>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover our comprehensive portfolio of AI, Quantum, IT, and Micro SAAS solutions designed to transform your business
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>{allServices.length}+ Revolutionary Services</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-blue-400" />
                <span>AI-Powered Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <Atom className="w-4 h-4 text-cyan-400" />
                <span>Quantum Technology</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Category Overview */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Service Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <div className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/50 shadow-lg shadow-cyan-500/25'
                      : 'bg-white/5 border-gray-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/25'
                  }`}>
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${category.color} w-fit mb-6`}>
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{category.name}</h3>
                    <p className="text-gray-300 mb-4">
                      {category.count} revolutionary services designed to transform your business
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 font-semibold">Explore Services</span>
                      <div className="text-2xl font-bold text-white">{category.count}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Technology Consulting</h3>
                <p className="text-white/70 mb-6">
                  Strategic technology consulting to help you navigate digital transformation and innovation challenges.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Digital Strategy</li>
                  <li>• Technology Roadmap</li>
                  <li>• Innovation Workshops</li>
                  <li>• Performance Audits</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🔮</div>
                <h3 className="text-2xl font-bold mb-4 text-indigo-400">Quantum Computing Solutions</h3>
                <p className="text-white/70 mb-6">
                  Next-generation quantum computing automation for complex optimization problems and advanced simulations.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Quantum Algorithm Development</li>
                  <li>• Hybrid Classical-Quantum Systems</li>
                  <li>• Optimization Problem Solving</li>
                  <li>• Quantum Machine Learning</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">Edge Computing & IoT</h3>
                <p className="text-white/70 mb-6">
                  Distributed computing solutions that bring intelligence closer to data sources for real-time decision making.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Edge Device Management</li>
                  <li>• IoT Infrastructure</li>
                  <li>• Real-time Processing</li>
                  <li>• Distributed Intelligence</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold mb-4 text-red-400">Cybersecurity & Compliance</h3>
                <p className="text-white/70 mb-6">
                  Comprehensive security solutions with automated threat detection and compliance management systems.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Threat Detection & Response</li>
                  <li>• Compliance Automation</li>
                  <li>• Security Monitoring</li>
                  <li>• Zero Trust Architecture</li>
                </ul>
              </div>
            </div>

            {/* Search and Sort */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price">Sort by Price</option>
                  <option value="rating">Sort by Rating</option>
                  <option value="popularity">Sort by Popularity</option>
                </select>
                <button
                  onClick={toggleSortOrder}
                  className="px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white hover:bg-white/10 transition-colors"
                >
                  {sortOrder === 'asc' ? <SortAsc className="w-5 h-5" /> : <SortDesc className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className={`relative p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                    service.popular 
                      ? 'bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/30 shadow-lg shadow-yellow-500/25' 
                      : 'bg-white/5 border-gray-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/25'
                  }`}>
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full">
                        Popular
                      </div>
                    )}

                    {/* Service Icon and Category */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(service.name)}`}>
                        {getCategoryIcon(service.name)}
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">{service.category}</div>
                        <div className="text-xs text-gray-500">{service.launchDate}</div>
                      </div>
                    </div>

                    {/* Service Name and Tagline */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {service.tagline}
                    </p>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-white">
                        ${service.price.monthly}
                        <span className="text-sm text-gray-400 font-normal">/month</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        ${service.price.yearly}/year • {service.price.trialDays} days free trial
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                            <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400" />
                        {service.rating} ({service.reviews})
                      </div>
                      <div>{service.customers.toLocaleString()} customers</div>
                    </div>

                    {/* CTA Button */}
                    <Link href={service.link}>
                      <button className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {sortedServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-2xl font-bold mb-4 text-red-400">AI Security & Compliance</h3>
                <p className="text-white/70 mb-6">
                  Comprehensive security solutions and compliance frameworks for AI systems and automation platforms.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• AI Model Security</li>
                  <li>• Data Privacy Protection</li>
                  <li>• Compliance Auditing</li>
                  <li>• Threat Detection</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4 text-orange-400">Edge Computing Solutions</h3>
                <p className="text-white/70 mb-6">
                  Edge AI deployment and optimization for real-time processing and reduced latency applications.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Edge AI Deployment</li>
                  <li>• IoT Integration</li>
                  <li>• Real-time Processing</li>
                  <li>• Edge-Cloud Orchestration</li>
                </ul>
              </div>
            </div>

            {/* Advanced AI Services Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-cyan-400">Advanced AI Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-3">🧠</div>
                  <h3 className="text-xl font-bold mb-3 text-cyan-400">Deep Learning Solutions</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Custom neural network architectures for complex pattern recognition and prediction tasks.
                  </p>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li>• Convolutional Neural Networks (CNN)</li>
                    <li>• Recurrent Neural Networks (RNN)</li>
                    <li>• Transformer Models</li>
                    <li>• Custom Architectures</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-3">🔍</div>
                  <h3 className="text-xl font-bold mb-3 text-fuchsia-400">Computer Vision</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Advanced image and video analysis for automation, quality control, and insights extraction.
                  </p>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li>• Object Detection & Recognition</li>
                    <li>• Image Segmentation</li>
                    <li>• Video Analytics</li>
                    <li>• Quality Assurance</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-3">💬</div>
                  <h3 className="text-xl font-bold mb-3 text-green-400">Natural Language Processing</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Language understanding and generation systems for enhanced communication and automation.
                  </p>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li>• Sentiment Analysis</li>
                    <li>• Text Classification</li>
                    <li>• Language Generation</li>
                    <li>• Translation Services</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-3">📈</div>
                  <h3 className="text-xl font-bold mb-3 text-blue-400">Predictive Analytics</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Data-driven forecasting and trend analysis for strategic decision-making and optimization.
                  </p>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li>• Time Series Forecasting</li>
                    <li>• Risk Assessment</li>
                    <li>• Demand Prediction</li>
                    <li>• Anomaly Detection</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-3">🤖</div>
                  <h3 className="text-xl font-bold mb-3 text-purple-400">Robotic Process Automation</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Intelligent automation of repetitive tasks and business processes for increased efficiency.
                  </p>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li>• Process Mining</li>
                    <li>• Workflow Automation</li>
                    <li>• Document Processing</li>
                    <li>• Integration Services</li>
                  </ul>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="text-3xl mb-3">🔐</div>
                  <h3 className="text-xl font-bold mb-3 text-yellow-400">AI Security & Compliance</h3>
                  <p className="text-white/70 text-sm mb-4">
                    Comprehensive security solutions for AI systems and regulatory compliance frameworks.
                  </p>
                  <ul className="space-y-1 text-xs text-white/60">
                    <li>• Model Security</li>
                    <li>• Data Privacy</li>
                    <li>• Compliance Auditing</li>
                    <li>• Threat Detection</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Industry Solutions Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-fuchsia-400">Industry-Specific Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3 text-fuchsia-400">🏥 Healthcare</h3>
                    <p className="text-white/70 text-sm mb-3">
                      AI-powered diagnostic tools, patient care optimization, and medical research acceleration.
                    </p>
                    <ul className="text-xs text-white/60">
                      <li>• Medical Imaging Analysis</li>
                      <li>• Drug Discovery Support</li>
                      <li>• Patient Risk Assessment</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3 text-green-400">🏦 Financial Services</h3>
                    <p className="text-white/70 text-sm mb-3">
                      Fraud detection, risk assessment, algorithmic trading, and customer service automation.
                    </p>
                    <ul className="text-xs text-white/60">
                      <li>• Credit Scoring Models</li>
                      <li>• Market Analysis</li>
                      <li>• Regulatory Compliance</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3 text-blue-400">🏭 Manufacturing</h3>
                    <p className="text-white/70 text-sm mb-3">
                      Predictive maintenance, quality control, supply chain optimization, and production planning.
                    </p>
                    <ul className="text-xs text-white/60">
                      <li>• IoT Integration</li>
                      <li>• Quality Assurance</li>
                      <li>• Energy Optimization</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3 text-yellow-400">🛒 Retail & E-commerce</h3>
                    <p className="text-white/70 text-sm mb-3">
                      Customer behavior analysis, inventory optimization, personalized marketing, and demand forecasting.
                    </p>
                    <ul className="text-xs text-white/60">
                      <li>• Recommendation Systems</li>
                      <li>• Price Optimization</li>
                      <li>• Customer Segmentation</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3 text-purple-400">🚚 Logistics & Transportation</h3>
                    <p className="text-white/70 text-sm mb-3">
                      Route optimization, fleet management, predictive maintenance, and supply chain visibility.
                    </p>
                    <ul className="text-xs text-white/60">
                      <li>• Route Planning</li>
                      <li>• Demand Forecasting</li>
                      <li>• Real-time Tracking</li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-3 text-cyan-400">🏢 Real Estate</h3>
                    <p className="text-white/70 text-sm mb-3">
                      Property valuation, market analysis, investment optimization, and customer relationship management.
                    </p>
                    <ul className="text-xs text-white/60">
                      <li>• Market Analysis</li>
                      <li>• Investment Modeling</li>
                      <li>• Customer Insights</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Support & Maintenance Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-green-400">Support & Maintenance</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🔄</div>
                  <h3 className="text-xl font-bold mb-3 text-green-400">24/7 Monitoring</h3>
                  <p className="text-white/70 text-sm">
                    Continuous monitoring and alerting for all AI systems with proactive issue resolution.
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <h3 className="text-xl font-bold mb-3 text-blue-400">Performance Optimization</h3>
                  <p className="text-white/70 text-sm">
                    Regular performance reviews and optimization to ensure systems operate at peak efficiency.
                  </p>
                </div>

                <div className="text-center">
                  <div className="text-4xl mb-4">🆘</div>
                  <h3 className="text-xl font-bold mb-3 text-purple-400">Emergency Support</h3>
                  <p className="text-white/70 text-sm">
                    Rapid response team for critical issues with guaranteed response times and resolution.
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing Tiers Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8 text-yellow-400">Service Tiers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <h3 className="text-xl font-bold mb-3 text-yellow-400">Starter</h3>
                  <p className="text-white/70 text-sm mb-4">Perfect for small businesses and startups</p>
                  <ul className="text-xs text-white/60 space-y-2 mb-6">
                    <li>• Basic AI Implementation</li>
                    <li>• Standard Support</li>
                    <li>• Monthly Reports</li>
                    <li>• Email Support</li>
                  </ul>
                  <button className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-500 transition-all duration-300">
                    Get Started
                  </button>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-cyan-400/30 text-center relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-black px-3 py-1 rounded-full text-xs font-bold">Most Popular</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-cyan-400">Professional</h3>
                  <p className="text-white/70 text-sm mb-4">Ideal for growing enterprises</p>
                  <ul className="text-xs text-white/60 space-y-2 mb-6">
                    <li>• Advanced AI Solutions</li>
                    <li>• Priority Support</li>
                    <li>• Real-time Monitoring</li>
                    <li>• Phone & Email Support</li>
                    <li>• Custom Integrations</li>
                  </ul>
                  <button className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300">
                    Choose Professional
                  </button>
                </div>

                <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <h3 className="text-xl font-bold mb-3 text-purple-400">Enterprise</h3>
                  <p className="text-white/70 text-sm mb-4">For large organizations with complex needs</p>
                  <ul className="text-xs text-white/60 space-y-2 mb-6">
                    <li>• Full AI Transformation</li>
                    <li>• Dedicated Support Team</li>
                    <li>• Custom Development</li>
                    <li>• 24/7 Support</li>
                    <li>• SLA Guarantees</li>
                  </ul>
                  <button className="bg-gradient-to-r from-purple-400 to-pink-400 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default ServicesPage;