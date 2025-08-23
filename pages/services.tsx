import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Lock, Database
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

// Import our new 2025 comprehensive services
import { advancedEnterpriseSolutions2025 } from '../data/2025-advanced-enterprise-solutions';
import { innovativeAIAutomationServices2025 } from '../data/2025-innovative-ai-automation-services';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeMicroSaasSolutions2025 } from '../data/2025-innovative-micro-saas-solutions';

// Import our new 2025 Q4 innovative services
import { innovative2025Q4NewServices } from '../data/innovative-2025-q4-new-services';
import { emergingTech2025Innovations } from '../data/emerging-tech-2025-innovations';

// Import Q4 2037 cutting-edge services
import { cuttingEdgeServices } from '../data/real-2037-q4-cutting-edge-services';
import { itInfrastructureServices } from '../data/real-2037-q4-it-infrastructure-services';
import { businessSolutionServices } from '../data/real-2037-q4-business-solutions';

// Import revolutionary 2025-2026 services
import { revolutionary20252026MicroSaasServices } from '../data/revolutionary-2025-2026-micro-saas-services';
import { revolutionary20252026AIServices } from '../data/revolutionary-2025-2026-ai-services';
import { revolutionary20252026ITInfrastructureServices } from '../data/revolutionary-2025-2026-it-infrastructure-services';

// Import our new 2026 advanced services
import { real2026AdvancedServices } from '../data/real-2026-advanced-services';
import { real2026InnovativeSolutions } from '../data/real-2026-innovative-solutions';
import { real2026SpecializedServices } from '../data/real-2026-specialized-services';

// Import our latest innovative services
import { innovative2040FuturisticServices } from '../data/innovative-2040-futuristic-services';
import { advanced2041EnterpriseServices } from '../data/advanced-2041-enterprise-services';
import { revolutionary2042MicroSaasServices } from '../data/revolutionary-2042-micro-saas-services';

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

// Import 2026 innovative services
import { innovative2026AIServicesAdditions } from '../data/innovative-2026-ai-services-additions';
import { innovative2026ITServicesAdditions } from '../data/innovative-2026-it-services-additions';
import { innovative2026MicroSaasAdditions } from '../data/innovative-2026-micro-saas-additions';
import { innovative2026IndustryAIServices } from '../data/innovative-2026-industry-ai-services';
import { innovative2026EmergingTechServices } from '../data/innovative-2026-emerging-tech-services';

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
  if (service.pricing?.starter) return service.pricing.starter;
  if (service.pricing?.monthly) return `$${service.pricing.monthly}/month`;
  if (service.price?.monthly) return `$${service.price.monthly}/month`;
  if (typeof service.price === 'string') return service.price;
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
  ...validatedServices2025Q4,
  ...real2035Q2Additions,
  ...real2036ServiceExpansions,
  ...innovative2036MicroSaasServices,
  ...innovative2036ITServices,
  // 2026 Innovative Services
  ...innovative2026AIServicesAdditions,
  ...innovative2026ITServicesAdditions,
  ...innovative2026MicroSaasAdditions,
  ...innovative2026IndustryAIServices,
  ...innovative2026EmergingTechServices
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
    id: 'cybersecurity',
    name: 'Cybersecurity & Security',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-red-500 to-orange-500',
    description: 'Advanced security and compliance solutions'
  },
  {
    id: 'blockchain-defi',
    name: 'Blockchain & DeFi',
    icon: <Database className="w-6 h-6" />,
    color: 'from-yellow-500 to-green-500',
    description: 'Blockchain and decentralized finance solutions'
  },
  {
    id: 'biometric-identity',
    name: 'Biometric & Identity',
    icon: <Lock className="w-6 h-6" />,
    color: 'from-purple-500 to-indigo-500',
    description: 'Biometric authentication and identity management'
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

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Cloud Infrastructure</h3>
                <p className="text-white/70 mb-6">
                  Scalable cloud solutions with automated deployment, monitoring, and optimization for peak performance.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Cloud Migration</li>
                  <li>• Auto-scaling</li>
                  <li>• Performance Optimization</li>
                  <li>• Security Hardening</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">DevOps & CI/CD</h3>
                <p className="text-white/70 mb-6">
                  Streamlined development and deployment pipelines with automated testing, building, and deployment processes.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• CI/CD Pipeline Setup</li>
                  <li>• Automated Testing</li>
                  <li>• Infrastructure as Code</li>
                  <li>• Monitoring & Alerting</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Data Analytics</h3>
                <p className="text-white/70 mb-6">
                  Advanced analytics and business intelligence solutions that turn your data into actionable insights.
                </p>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Data Visualization</li>
                  <li>• Predictive Analytics</li>
                  <li>• Business Intelligence</li>
                  <li>• Real-time Dashboards</li>
                </ul>
              </div>

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

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Why Choose Our Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">AI-Powered Excellence</h3>
                  <p className="text-white/70">
                    Our services leverage cutting-edge AI technology to deliver superior results, faster implementation, and continuous improvement.
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
    </>
  );
}
