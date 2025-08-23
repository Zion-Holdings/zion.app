import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building
} from 'lucide-react';

// Import our new 2025 service data
import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';
import { innovative2025ITInfrastructureServices } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeMicroSaasSolutions2025 } from '../data/2025-innovative-micro-saas-solutions';
import { cuttingEdgeAIServices2025 } from '../data/2025-cutting-edge-ai-services';
import { innovative2025AIAutonomousServices } from '../data/2025-innovative-ai-autonomous-services';

// Import our new practical and specialized services
import { realPracticalMicroSaasServices2025 } from '../data/2025-real-practical-micro-saas-services';
import { advancedAIITSpecializedServices2025 } from '../data/2025-advanced-ai-it-specialized-services';

// Import our new 2025 enterprise services
import { realEnterpriseMicroSaas2025 } from '../data/2025-real-enterprise-micro-saas';

// Import our new innovative 2025 services
import { realInnovativeMicroSaasServices2025 } from '../data/2025-real-innovative-micro-saas-expansion';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services-expansion';
import { innovativeAIServices2025Expansion } from '../data/2025-innovative-ai-services-expansion';

// Import our new 2025 advanced services
import { advancedBusinessIntelligenceServices2025 } from '../data/2025-advanced-business-intelligence-services';
import { advancedITInfrastructureServices2025 } from '../data/2025-advanced-it-infrastructure-services';

// Import our new real services
import { realMicroSaas2025Expansion } from '../data/real-micro-saas-2025-expansion';
import { realITServices2025Expansion } from '../data/real-it-services-2025-expansion';
import { realAIServices2025Expansion } from '../data/real-ai-services-2025-expansion';

// Import our new innovative 2025 services
import { innovativeAIAutonomousEcosystemServices2025 } from '../data/2025-innovative-ai-autonomous-ecosystem';
import { cuttingEdgeITInfrastructureInnovations2025 } from '../data/2025-cutting-edge-it-infrastructure-innovations';
import { innovativeMicroSaasBreakthroughs2025 } from '../data/2025-innovative-micro-saas-breakthroughs';

// Import our new service data
import { enterpriseITSolutions } from '../data/2034-enterprise-it-solutions';
import { innovativeMicroSaasSolutions as innovativeMicroSaasSolutions2034 } from '../data/2034-innovative-micro-saas-solutions';
import { cuttingEdgeAIServices } from '../data/2034-cutting-edge-ai-services';
import { real2025Q4AugmentedBatch } from '../data/real-2025-q4-augmented-batch';
import { real2029Q3Additions } from '../data/real-2029-q3-additions';

// Import our new 2025 advanced services
import { advanced2025MicroSaasExpansion } from '../data/2025-advanced-micro-saas-expansion';
import { advanced2025ITSolutionsExpansion } from '../data/2025-advanced-it-solutions-expansion';
import { advanced2025AIServicesExpansion } from '../data/2025-advanced-ai-services-expansion';

// Import our new 2025 advanced services V2
import { advanced2025MicroSaasExpansionV2 } from '../data/2025-advanced-micro-saas-expansion-v2';
import { advanced2025ITSolutionsExpansionV2 } from '../data/2025-advanced-it-solutions-expansion-v2';
import { advanced2025AIServicesExpansionV2 } from '../data/2025-advanced-ai-services-expansion-v2';
// Import our new 2025 innovative services expansion
import { innovative2025MicroSaasExpansion } from '../data/innovative-2025-micro-saas-expansion';
import { innovative2025ITSolutionsExpansion } from '../data/innovative-2025-it-solutions-expansion';
import { innovative2025AIServicesExpansion } from '../data/innovative-2025-ai-services-expansion';

// Import our new innovative 2040 services
import { innovative2040ITServices } from '../data/innovative-2040-it-services';
// Import our new 2025 advanced enterprise services
import { advancedEnterpriseServices } from '../data/2025-advanced-enterprise-services-expansion';
import { innovativeMicroSaasServices } from '../data/innovative-2025-micro-saas-expansions';
import { cuttingEdgeITInfrastructureServices } from '../data/2025-cutting-edge-it-infrastructure';

// Import Q4 2037 cutting-edge services
import { cuttingEdgeServices } from '../data/real-2037-q4-cutting-edge-services';
import { itInfrastructureServices } from '../data/real-2037-q4-it-infrastructure-services';
import { businessSolutionServices } from '../data/real-2037-q4-business-solutions';

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
  if (Array.isArray(service?.category)) return service.category[0] || 'Other';
  if (service?.category) return service.category;
  if (Array.isArray(service?.type)) return service.type[0] || 'Other';
  if (service?.type) return service.type;
  return 'Other';
};

// Helper function to get service pricing
const getServicePricing = (service: any) => {
  // Debug logging to identify problematic services
  if (!service.price && !service.pricing) {
    console.warn('Service missing price field:', service.id, service.name);
    return 'Contact for pricing';
  }
  
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
  if (service.price?.monthly) return `$${service.price.monthly}/month`;
  if (service.price && typeof service.price === 'object' && service.price.monthly) {
    return `$${service.price.monthly}/month`;
  }
  if (service.price && service.period) return `${service.price}${service.period}`;
  if (service.price && typeof service.price === 'string') return service.price;
  
  // If we get here, log the problematic service
  console.warn('Service with unexpected price structure:', service.id, service.name, service.price);
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
  // ...enterpriseITSolutions,
  // ...innovativeMicroSaasSolutions,
  // ...cuttingEdgeAIServices,
  // ...realMicroSaasServices,
  // ...innovativeAIServices,
  // ...enterpriseITServices,
  // ...emergingTechServices,
  // ...newRealServices,
  // ...realOperationalServices,
  // ...marketReadyServices,
  // ...marketValidatedServices,
  // ...industryRealServices,
  // ...real2025Q4AugmentedBatch,
  // ...real2029Q3Additions,
  // Our new 2025 advanced services V2
  ...advanced2025MicroSaasExpansionV2,
  ...advanced2025ITSolutionsExpansionV2,
  ...advanced2025AIServicesExpansionV2,
  // ...validatedServices2025Q4,
  // ...real2035Q2Additions,
  // ...real2036ServiceExpansions,
  // ...innovative2036MicroSaasServices,
  // ...innovative2036ITServices,
  // Our new 2025 advanced services
  // ...advanced2025MicroSaasExpansion,
  // ...advanced2025ITSolutionsExpansion,
  // ...advanced2025AIServicesExpansion,
  // Our new innovative services
  // ...innovative2037MicroSaasServices,
  // ...innovative2037ITServices,
  // ...innovative2037AIServices,
  // ...innovative2038CuttingEdgeServices,
  // ...innovative2038ITInfrastructureServices,
  // Our additional innovative services
  // ...innovative2037Services,
  // ...advanced2038Services,
  // ...revolutionary2039Services,
  // Our revolutionary 2040-2041 services
  // ...revolutionary2040FuturisticServices,
  // ...revolutionary2041AdvancedServices,
  // Our latest innovative services
  // ...innovative2040FuturisticServices,
  // ...advanced2041EnterpriseServices,
  // ...revolutionary2042MicroSaasServices,
  // Our new 2025 innovative services expansion
  // ...innovative2025MicroSaasExpansion,
  // ...innovative2025ITSolutionsExpansion,
  // ...innovative2025AIServicesExpansion
].filter(service => {
  // Filter out malformed services
  if (!service || typeof service !== 'object') return false;
  if (!service.id || !service.name) return false;
  return true;
});

const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Grid className="w-6 h-6" />,
    color: 'from-gray-500 to-slate-500',
    description: 'Complete portfolio of all services'
  },
  {
    id: 'ai-automation',
    name: 'AI Automation',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-blue-500 to-purple-500',
    description: 'AI-powered automation solutions'
  },
  {
    id: 'it-infrastructure',
    name: 'IT Infrastructure',
    icon: <Building className="w-6 h-6" />,
    color: 'from-indigo-500 to-purple-500',
    description: 'Enterprise infrastructure and cloud solutions'
  },
  {
    id: 'micro-saas',
    name: 'Micro SAAS',
    icon: <Target className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Innovative business solutions'
  },
  {
    id: 'ai-services',
    name: 'AI Services',
    icon: <Cpu className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    description: 'Cutting-edge AI and machine learning services'
  },
  {
    id: 'business-intelligence',
    name: 'Business Intelligence',
    icon: <Target className="w-6 h-6" />,
    color: 'from-emerald-500 to-teal-500',
    description: 'Advanced analytics and business intelligence solutions'
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
    id: 'innovative-ai',
    name: 'Innovative AI Solutions',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-500 to-indigo-500',
    description: 'Cutting-edge AI and machine learning services'
  },
  {
    id: 'enterprise-ai',
    name: 'Enterprise AI',
    icon: <Building className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    description: 'AI-powered enterprise solutions and automation'
  },
  {
    id: 'industry-solutions',
    name: 'Industry Solutions',
    icon: <Cpu className="w-6 h-6" />,
    color: 'from-green-600 to-teal-700',
    description: 'AI-powered autonomous decision-making systems'
  },
  {
    id: 'metaverse-business',
    name: 'Metaverse Business',
    icon: <Globe className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-600',
    description: 'Business infrastructure for the metaverse'
  },
  {
    id: 'neural-quantum',
    name: 'Neural & Quantum',
    icon: <Atom className="w-6 h-6" />,
    color: 'from-purple-600 to-pink-700',
    description: 'Neural networks and quantum computing fusion'
  },
  {
    id: 'revolutionary-2040',
    name: 'Revolutionary 2040',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-purple-600 to-pink-700',
    description: 'Revolutionary 2040 services with quantum consciousness and interdimensional capabilities'
  },
  {
    id: 'revolutionary-2041',
    name: 'Revolutionary 2041',
    icon: <Globe className="w-6 h-6" />,
    color: 'from-indigo-700 to-purple-800',
    description: 'Revolutionary 2041 services with multiverse AI and temporal computing'
  },
  {
    id: 'revolutionary-advertising',
    name: 'Revolutionary Advertising',
    icon: <Target className="w-6 h-6" />,
    color: 'from-orange-600 to-red-700',
    description: 'Revolutionary services with comprehensive advertising and marketing content'
  }
];

const sortOptions = [
  { value: 'name', label: 'Name A-Z' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'newest', label: 'Newest First' },
  { value: 'rating', label: 'Highest Rated' }
];

export default function Services() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const pageSize = 18;

  // Simulate loading state for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         getServiceDescription(service).toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedCategory === 'all') return matchesSearch;
    
    const serviceCategory = getServiceCategory(service).toLowerCase();
    const categoryName = categories.find(cat => cat.id === selectedCategory)?.name.toLowerCase();
    
    // Special filtering for revolutionary categories
    if (selectedCategory === 'revolutionary-2040') {
      return matchesSearch && (service.id.includes('quantum-consciousness') || 
                              service.id.includes('interdimensional') || 
                              service.id.includes('neural-quantum') || 
                              service.id.includes('autonomous-quantum') || 
                              service.id.includes('metaverse-business') || 
                              service.id.includes('quantum-financial') || 
                              service.id.includes('space-resource') || 
                              service.id.includes('quantum-healthcare') || 
                              service.id.includes('quantum-education') || 
                              service.id.includes('quantum-logistics'));
    }
    
    if (selectedCategory === 'revolutionary-2041') {
      return matchesSearch && (service.id.includes('multiverse') || 
                              service.id.includes('temporal') || 
                              service.id.includes('consciousness-upload') || 
                              service.id.includes('quantum-reality') || 
                              service.id.includes('interdimensional-commerce') || 
                              service.id.includes('quantum-creative') || 
                              service.id.includes('quantum-emotional') || 
                              service.id.includes('quantum-neural') || 
                              service.id.includes('quantum-synthetic') || 
                              service.id.includes('quantum-psychic'));
    }
    
    if (selectedCategory === 'revolutionary-advertising') {
      return matchesSearch && service.id.includes('advertising');
    }
    
    return matchesSearch && serviceCategory.includes(categoryName || '');
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.name.localeCompare(b.name);
      case 'price-low':
        return (parseInt(getServicePricing(a).replace(/[^0-9]/g, '')) || 0) - 
               (parseInt(getServicePricing(b).replace(/[^0-9]/g, '')) || 0);
      case 'price-high':
        return (parseInt(getServicePricing(b).replace(/[^0-9]/g, '')) || 0) - 
               (parseInt(getServicePricing(a).replace(/[^0-9]/g, '')) || 0);
      case 'newest':
        return new Date((b as any).launchDate || '2020-01-01').getTime() - 
               new Date((a as any).launchDate || '2020-01-01').getTime();
      case 'rating':
        return (((b as any).rating || 0) as number) - (((a as any).rating || 0) as number);
      default:
        return 0;
    }
  });

  // Pagination helpers
  const totalPages = Math.max(1, Math.ceil(sortedServices.length / pageSize));
  const currentPageClamped = Math.min(currentPage, totalPages);
  const paginatedServices = sortedServices.slice(
    (currentPageClamped - 1) * pageSize,
    currentPageClamped * pageSize
  );

  // Reset to first page when filters/sort change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, sortBy]);

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai automation':
        return <Brain className="w-6 h-6 text-blue-400" />;
      case 'it infrastructure':
        return <Building className="w-6 h-6 text-indigo-400" />;
      case 'micro saas':
        return <Target className="w-6 h-6 text-green-400" />;
      case 'ai services':
        return <Cpu className="w-6 h-6 text-purple-400" />;
      case 'enterprise it':
      case 'enterprise security':
      case 'devops & automation':
      case 'data & analytics':
      case 'cloud services':
      case 'cybersecurity':
        return <Building className="w-6 h-6 text-blue-400" />;
      case 'ai & consciousness':
      case 'artificial intelligence':
      case 'innovative ai solutions':
        return <Brain className="w-6 h-6 text-cyan-400" />;
      case 'quantum':
      case 'quantum & emerging tech':
        return <Atom className="w-6 h-6 text-purple-400" />;
      case 'space':
      case 'space & metaverse':
        return <Rocket className="w-6 h-6 text-pink-400" />;
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
      case 'enterprise ai':
        return <Building className="w-6 h-6 text-blue-400" />;
      case 'industry solutions':
        return <Cpu className="w-6 h-6 text-emerald-400" />;
      default:
        return <Shield className="w-6 h-6 text-gray-400" />;
    }
  };

  return (
    <>
      <SEO title="Services | Zion Tech Group - Enterprise IT, AI, Micro SAAS Solutions" description="Discover our comprehensive portfolio of enterprise IT solutions, AI services, and innovative micro SAAS platforms. Transform your business with cutting-edge technology." canonical="https://ziontechgroup.com/services/" />

      <div className="min-h-screen bg-black text-white pt-24">
        {/* Loading State */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-cyan-400 text-lg font-medium">Loading Services...</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <AnimatePresence>
          {isVisible && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="py-20 relative overflow-hidden"
            >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-red-500/5 to-blue-500/5 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
                <Shield className="w-4 h-4 mr-2 text-blue-400" />
                Complete Service Portfolio
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transform Your <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent">Business</span> with Our Services
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From enterprise IT solutions to cutting-edge AI services and innovative micro SAAS platforms, 
                we provide the technology you need to succeed in the digital age.
              </p>
              
              {/* Innovative 2025 Services CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8"
              >
                <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/20 max-w-2xl mx-auto">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">🚀 New for 2025!</h3>
                  <p className="text-gray-300 mb-4">
                    Discover our latest innovative services including quantum computing, AI autonomy, and space technology solutions.
                  </p>
                  <a
                    href="/innovative-2025-services-showcase"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <span>View 2025 Services</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Search and Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-black/50 border border-blue-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-lg border transition-all duration-200 flex items-center space-x-2 ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 border-blue-500 text-white shadow-lg shadow-blue-500/25'
                          : 'bg-black/50 border-blue-500/30 text-gray-300 hover:border-blue-500/50 hover:text-blue-300'
                      }`}
                    >
                      {category.icon}
                      <span className="hidden sm:inline">{category.name}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Sort Options */}
                <div className="flex items-center space-x-2">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 bg-black/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-lg border transition-all duration-200 ${
                      viewMode === 'grid'
                        ? 'bg-blue-500/20 border-blue-500 text-blue-300'
                        : 'bg-black/50 border-blue-500/30 text-gray-400 hover:text-blue-300'
                    }`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg border transition-all duration-200 ${
                      viewMode === 'list'
                        ? 'bg-blue-500/20 border-blue-500 text-blue-300'
                        : 'bg-black/50 border-blue-500/30 text-gray-400 hover:text-blue-300'
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Services Count */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-8"
            >
              <p className="text-gray-300">
                Showing <span className="text-blue-400 font-semibold">{sortedServices.length}</span> services
                {selectedCategory !== 'all' && ` in ${categories.find(cat => cat.id === selectedCategory)?.name}`}
              </p>
            </motion.div>
          </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Services Grid/List */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {paginatedServices.length > 0 ? (<>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={viewMode === 'grid' 
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "space-y-6"
                }
              >
                {paginatedServices.map((service, index) => (
                  <motion.div
                    key={(service as any).id || (service as any).slug || (service as any).name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className={`group relative ${
                      viewMode === 'list' ? 'flex items-start space-x-6' : ''
                    }`}
                  >
                    <div className="relative bg-gradient-to-br from-gray-500/20 to-slate-500/20 border border-cyan-500/30 rounded-2xl p-6 h-full backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4 flex items-center space-x-2">
                        {getCategoryIcon(getServiceCategory(service))}
                        <span className="text-xs font-medium text-cyan-300 bg-black/50 px-2 py-1 rounded-full">
                          {getServiceCategory(service)}
                        </span>
                      </div>

                      {/* Service Header */}
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {getServiceDescription(service)}
                        </p>
                      </div>

                      {/* Features Preview */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-cyan-300 mb-3">Key Features</h4>
                        <div className="space-y-2">
                          {getServiceFeatures(service).slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-xs text-gray-300">{feature}</span>
                            </div>
                          ))}
                          {getServiceFeatures(service).length > 3 && (
                            <div className="text-xs text-cyan-400">
                              +{getServiceFeatures(service).length - 3} more features
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-cyan-300 mb-2">Starting at</h4>
                        <div className="text-2xl font-bold text-white">
                          {getServicePricing(service)}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="flex flex-col space-y-3">
                        <motion.a
                          href={(service as any).link || `/services/${((service as any).slug || (service as any).name || 'service').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg shadow-cyan-500/25"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                          href="/contact"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-center space-x-2 px-4 py-3 border border-gray-600 text-gray-200 font-medium rounded-lg hover:bg-white/5 transition-all duration-200"
                        >
                          <span>Contact Sales</span>
                        </motion.a>
                      </div>

                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2 flex-wrap">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPageClamped - 1))}
                    className="px-4 py-2 rounded-lg border border-blue-500/40 text-blue-300 hover:border-blue-400 disabled:opacity-40"
                    disabled={currentPageClamped === 1}
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }).slice(0, 7).map((_, idx) => {
                    const page = idx + 1;
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-2 rounded-lg border ${
                          page === currentPageClamped
                            ? 'bg-blue-600/30 border-blue-400 text-white'
                            : 'border-blue-500/30 text-blue-200 hover:border-blue-400'
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPageClamped + 1))}
                    className="px-4 py-2 rounded-lg border border-blue-500/40 text-blue-300 hover:border-blue-400 disabled:opacity-40"
                    disabled={currentPageClamped === totalPages}
                  >
                    Next
                  </button>
                </div>
              )}
            </>) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
                <p className="text-gray-300 mb-8">
                  Try adjusting your search terms or filters to find the services you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/30 rounded-3xl p-12 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Business</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join leading businesses that trust Zion Tech Group for their digital transformation. 
                Our expert team is ready to guide you through your technology journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-2xl shadow-cyan-500/25"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-6 h-6" />
                </motion.a>
                
                <motion.a
                  href="/enterprise-solutions-showcase"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-black/50 border-2 border-cyan-500/50 text-cyan-300 font-bold text-lg rounded-xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-200"
                >
                  <Building className="w-6 h-6" />
                  <span>Enterprise Solutions</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
