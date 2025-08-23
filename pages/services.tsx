import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building, Lock, Database
} from 'lucide-react';

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
import { advanced2041EnterpriseServices } from '../data/advanced-2041-enterprise-services';
import { revolutionary2042MicroSaasServices } from '../data/revolutionary-2042-micro-saas-services';

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

// Import our new 2025 advanced enterprise services
import { advancedEnterpriseServices } from '../data/2025-advanced-enterprise-services-expansion';
import { innovativeMicroSaasServices } from '../data/innovative-2025-micro-saas-expansions';
import { cuttingEdgeITInfrastructureServices } from '../data/2025-cutting-edge-it-infrastructure';

// Import our new 2025 cutting-edge futuristic services
import { cuttingEdgeFuturisticServices } from '../data/2025-cutting-edge-futuristic-services';
import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';
import { advancedITInfrastructureServices } from '../data/2025-advanced-it-infrastructure-services';

// Import our new 2025 advanced real micro SAAS expansion
import { advancedRealMicroSaasExpansion2025 } from '../data/2025-advanced-real-micro-saas-expansion';

// Import our new 2025 advanced IT infrastructure expansion
import { advancedITInfrastructureExpansion2025 } from '../data/2025-advanced-it-infrastructure-expansion';

// Import our new 2025 advanced AI services expansion
import { advancedAIServicesExpansion2025 } from '../data/2025-advanced-ai-services-expansion';

// Import our new 2025 emerging tech innovations expansion
import { emergingTechInnovationsExpansion2025 } from '../data/2025-emerging-tech-innovations-expansion';

// Import our new 2025 innovative business solutions expansion
import { innovativeBusinessSolutionsExpansion2025 } from '../data/2025-innovative-business-solutions-expansion';

// Import our new 2025 innovative services
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services';
import { innovativeMicroSaasSolutions2025 } from '../data/2025-innovative-micro-saas-solutions';
import { cuttingEdgeAIServices2025 } from '../data/2025-cutting-edge-ai-services';

// Import 2025 advanced services
import { real2025AdvancedAIServices } from '../data/real-2025-advanced-ai-services';
import { real2025ITInfrastructureServices } from '../data/real-2025-it-infrastructure-services';
import { real2025InnovativeMicroSaas } from '../data/real-2025-innovative-micro-saas';

// Import our latest innovative services
import { advancedAIAutomationServices } from '../data/advanced-ai-automation-services';
import { nextGenITInfrastructureServices } from '../data/next-gen-it-infrastructure-services';
import { innovativeMicroSaasSolutions2025 } from '../data/innovative-micro-saas-solutions-2025';
import { specializedIndustrySolutions } from '../data/specialized-industry-solutions';

// Import our new 2037 Q1 innovative services
import { real2037Q1InnovativeAdditions } from '../data/real-2037-q1-innovative-additions';
import { real2037Q1ITInnovations } from '../data/real-2037-q1-it-innovations';
import { real2037Q1MicroSaasInnovations } from '../data/real-2037-q1-micro-saas-innovations';

// Import our new 2025 cutting-edge innovative services
import { innovative2025CuttingEdgeServices } from '../data/innovative-2025-cutting-edge-services';
import { innovative2025EnterpriseSolutions } from '../data/innovative-2025-enterprise-solutions';
import { innovative2025IndustrySolutions } from '../data/innovative-2025-industry-solutions';

// Import new expanded services
import { innovativeMicroSaasServicesExpanded } from '../data/innovative-2025-micro-saas-expanded';
import { innovativeITServicesExpanded } from '../data/innovative-2025-it-services-expanded';
import { innovativeAIServicesExpanded } from '../data/innovative-2025-ai-services-expanded';

// Import our new innovative 2027 services
import { innovative2027AIBusinessIntelligenceServices } from '../data/innovative-2027-ai-business-intelligence';
import { innovative2027CybersecurityComplianceServices } from '../data/innovative-2027-cybersecurity-compliance';
import { innovative2027CloudDevOpsServices } from '../data/innovative-2027-cloud-devops';
import { innovative2027IndustrySolutions } from '../data/innovative-2027-industry-solutions';

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
  if (service.category) return service.category;
  if (service.type) return service.type;
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

  return (
    <>
      <SEO title="Services | Zion Tech Group - Enterprise IT, AI, Micro SAAS Solutions" description="Discover our comprehensive portfolio of enterprise IT solutions, AI services, and innovative micro SAAS platforms. Transform your business with cutting-edge technology." canonical="https://ziontechgroup.com/services/" />

          <section className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI Development</h3>
                <p className="text-white/70 mb-6">
                  Custom AI solutions including machine learning models, natural language processing, and computer vision systems.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• Machine Learning Models</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• Predictive Analytics</li>
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">Starting at $15K</div>
                  <div className="text-white/60 text-sm">Project-based pricing</div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Automation Systems</h3>
                <p className="text-white/70 mb-6">
                  End-to-end automation solutions that streamline operations and improve efficiency across your organization.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• Process Automation</li>
                  <li>• Workflow Optimization</li>
                  <li>• Robotic Process Automation</li>
                  <li>• Smart Workflows</li>
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-fuchsia-400 mb-2">Starting at $12K</div>
                  <div className="text-white/60 text-sm">Monthly subscription available</div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Transform Your <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent">Business</span> with Our Services
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From enterprise IT solutions to cutting-edge AI services and innovative micro SAAS platforms, 
                we provide the technology you need to succeed in the digital age.
              </p>
            </motion.div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Cloud Infrastructure</h3>
                <p className="text-white/70 mb-6">
                  Scalable cloud solutions with automated deployment, monitoring, and optimization for peak performance.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• Cloud Migration</li>
                  <li>• Auto-scaling</li>
                  <li>• Performance Optimization</li>
                  <li>• Security Hardening</li>
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">Starting at $8K</div>
                  <div className="text-white/60 text-sm">Setup + monthly maintenance</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-400">DevOps & CI/CD</h3>
                <p className="text-white/70 mb-6">
                  Streamlined development and deployment pipelines with automated testing, building, and deployment processes.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• CI/CD Pipeline Setup</li>
                  <li>• Automated Testing</li>
                  <li>• Infrastructure as Code</li>
                  <li>• Monitoring & Alerting</li>
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">Starting at $10K</div>
                  <div className="text-white/60 text-sm">One-time setup + support</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Data Analytics</h3>
                <p className="text-white/70 mb-6">
                  Advanced analytics and business intelligence solutions that turn your data into actionable insights.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• Data Visualization</li>
                  <li>• Predictive Analytics</li>
                  <li>• Business Intelligence</li>
                  <li>• Real-time Dashboards</li>
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">Starting at $18K</div>
                  <div className="text-white/60 text-sm">Custom dashboard development</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Technology Consulting</h3>
                <p className="text-white/70 mb-6">
                  Strategic technology consulting to help you navigate digital transformation and innovation challenges.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• Digital Strategy</li>
                  <li>• Technology Roadmap</li>
                  <li>• Innovation Workshops</li>
                  <li>• Performance Audits</li>
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-2">$250/hour</div>
                  <div className="text-white/60 text-sm">Expert consultation</div>
                </div>
              </div>
            </div>

            {/* New Service Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <div className="text-4xl mb-4">🔐</div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">AI Security & Ethics</h3>
                <p className="text-white/80 mb-6">
                  Comprehensive security solutions for AI systems, including ethical AI development, 
                  bias detection, and secure autonomous operations.
                </p>
                <ul className="space-y-2 text-white/70 mb-6">
                  <li>• AI Bias Detection & Mitigation</li>
                  <li>• Secure AI Model Deployment</li>
                  <li>• Ethical AI Guidelines</li>
                  <li>• Compliance & Governance</li>
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">Starting at $20K</div>
                  <div className="text-white/60 text-sm">Comprehensive security audit</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 rounded-2xl p-8 border border-fuchsia-500/20">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold mb-4 text-fuchsia-400">Edge AI & IoT</h3>
                <p className="text-white/80 mb-6">
                  Deploy AI models at the edge for real-time processing, enabling intelligent IoT devices 
                  and autonomous edge computing solutions.
                </p>
                <ul className="space-y-2 text-white/70 mb-6">
                  <li>• Edge AI Model Optimization</li>
                  <li>• IoT Device Intelligence</li>
                  <li>• Real-time Processing</li>
                  <li>• Edge-to-Cloud Integration</li>
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-fuchsia-400 mb-2">Starting at $25K</div>
                  <div className="text-white/60 text-sm">Edge AI platform setup</div>
                </div>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Service Success Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                  <div className="text-sm text-white/70">Client Satisfaction</div>
                  <div className="text-xs text-white/50 mt-1">Based on 150+ projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-fuchsia-400 mb-2">40%</div>
                  <div className="text-sm text-white/70">Average Cost Reduction</div>
                  <div className="text-xs text-white/50 mt-1">For automation clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">3.2x</div>
                  <div className="text-sm text-white/70">ROI Improvement</div>
                  <div className="text-xs text-white/50 mt-1">Within 12 months</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-sm text-white/70">System Reliability</div>
                  <div className="text-xs text-white/50 mt-1">Production uptime</div>
                </div>
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

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Why Choose Our Services?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-fuchsia-400">AI-Powered Excellence</h3>
                  <p className="text-white/70">
                    Our services leverage cutting-edge AI technology to deliver superior results, faster implementation, and continuous improvement.
                  </p>
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
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Industry Expertise</h3>
                  <p className="text-white/70">
                    Deep domain knowledge across healthcare, finance, retail, and manufacturing sectors with proven success stories.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Continuous Innovation</h3>
                  <p className="text-white/70">
                    We stay ahead of the curve with the latest AI research, tools, and methodologies to ensure your solutions are future-proof.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-fuchsia-400">Advanced AI Capabilities</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                  <h4 className="font-semibold text-fuchsia-300 mb-2">Machine Learning</h4>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• Supervised & Unsupervised Learning</li>
                    <li>• Deep Neural Networks</li>
                    <li>• Reinforcement Learning</li>
                    <li>• Transfer Learning</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                  <h4 className="font-semibold text-cyan-300 mb-2">Natural Language Processing</h4>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• Text Classification & Sentiment Analysis</li>
                    <li>• Named Entity Recognition</li>
                    <li>• Language Generation</li>
                    <li>• Multilingual Support</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/20">
                  <h4 className="font-semibold text-green-300 mb-2">Computer Vision</h4>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>• Image Classification & Detection</li>
                    <li>• Object Recognition</li>
                    <li>• Facial Recognition</li>
                    <li>• Medical Image Analysis</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Industry Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-300">Healthcare & Life Sciences</h3>
                  <div className="space-y-3">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/20">
                      <h4 className="font-semibold text-green-200 mb-1">Medical Imaging AI</h4>
                      <p className="text-white/70 text-sm">Advanced diagnostic assistance for radiologists and pathologists</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/20">
                      <h4 className="font-semibold text-green-200 mb-1">Drug Discovery</h4>
                      <p className="text-white/70 text-sm">AI-powered molecular modeling and drug candidate screening</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/20">
                      <h4 className="font-semibold text-green-200 mb-1">Patient Care Optimization</h4>
                      <p className="text-white/70 text-sm">Predictive analytics for patient outcomes and treatment planning</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-300">Financial Services</h3>
                  <div className="space-y-3">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/20">
                      <h4 className="font-semibold text-blue-200 mb-1">Fraud Detection</h4>
                      <p className="text-white/70 text-sm">Real-time fraud detection using advanced ML algorithms</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/20">
                      <h4 className="font-semibold text-blue-200 mb-1">Risk Assessment</h4>
                      <p className="text-white/70 text-sm">AI-powered credit scoring and risk modeling</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-white/20">
                      <h4 className="font-semibold text-blue-200 mb-1">Trading Algorithms</h4>
                      <p className="text-white/70 text-sm">Automated trading strategies with risk management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Service Delivery Process */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Service Delivery Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">1</div>
                  <h3 className="text-lg font-semibold mb-2">Discovery</h3>
                  <p className="text-sm text-white/70 mb-3">Understanding your needs and objectives</p>
                  <ul className="text-xs text-white/60 space-y-1">
                    <li>• Requirements Analysis</li>
                    <li>• Stakeholder Interviews</li>
                    <li>• Technical Assessment</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">2</div>
                  <h3 className="text-lg font-semibold mb-2">Planning</h3>
                  <p className="text-sm text-white/70 mb-3">Creating detailed roadmap and strategy</p>
                  <ul className="text-xs text-white/60 space-y-1">
                    <li>• Architecture Design</li>
                    <li>• Timeline Planning</li>
                    <li>• Resource Allocation</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">3</div>
                  <h3 className="text-lg font-semibold mb-2">Implementation</h3>
                  <p className="text-sm text-white/70 mb-3">Building and deploying solutions</p>
                  <ul className="text-xs text-white/60 space-y-1">
                    <li>• Agile Development</li>
                    <li>• Continuous Testing</li>
                    <li>• Staged Deployment</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">4</div>
                  <h3 className="text-lg font-semibold mb-2">Optimization</h3>
                  <p className="text-sm text-white/70 mb-3">Continuous improvement and support</p>
                  <ul className="text-xs text-white/60 space-y-1">
                    <li>• Performance Monitoring</li>
                    <li>• Regular Updates</li>
                    <li>• 24/7 Support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Client Testimonials */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">What Our Clients Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      GM
                    </div>
                    <div>
                      <div className="font-semibold text-white">Global Manufacturing Corp</div>
                      <div className="text-white/60 text-sm">Manufacturing Industry</div>
                    </div>
                  </div>
                  <p className="text-white/80 italic">
                    "Zion Tech Group's AI automation solutions transformed our production line. 
                    We saw a 40% increase in efficiency and 60% reduction in downtime within 6 months."
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      DM
                    </div>
                    <div>
                      <div className="font-semibold text-white">Digital Marketing Agency</div>
                      <div className="text-white/60 text-sm">Marketing Industry</div>
                    </div>
                  </div>
                  <p className="text-white/80 italic">
                    "Their autonomous content generation system scaled our output 10x while maintaining 
                    quality. It's like having an entire content team working 24/7."
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-purple-500/20 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-white/80 mb-6">
                Let's discuss how our AI and automation services can transform your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-fuchsia-400 hover:from-cyan-500 hover:to-fuchsia-500 text-white font-semibold rounded-lg transition-all duration-300">
                  Schedule Consultation
                </a>
                <a href="/case-studies" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-400/50 text-white font-semibold rounded-lg transition-all duration-300">
                  View Case Studies
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}