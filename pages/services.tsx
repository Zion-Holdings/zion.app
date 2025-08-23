import React from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Grid, List,
  Brain, Atom, Shield, Target, Rocket,
  ArrowRight, Check, Palette, Heart, Truck, GraduationCap,
  Building
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

// Import our new 2025 cutting-edge innovative services
import { innovative2025CuttingEdgeServices } from '../data/innovative-2025-cutting-edge-services';
import { innovative2025EnterpriseSolutions } from '../data/innovative-2025-enterprise-solutions';
import { innovative2025IndustrySolutions } from '../data/innovative-2025-industry-solutions';

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
  if (service.price && service.period) return `${service.price}${service.period}`;
  if (service.price) return service.price;
  // Handle case where pricing is just a number
  if (typeof service.pricing === 'number') return `$${service.pricing}/month`;
  if (typeof service.pricing === 'object' && service.pricing !== null) {
    // If pricing is an object but doesn't have expected fields, return a default
    // Check if it has yearly field and use that as fallback
    if (service.pricing.yearly) return service.pricing.yearly;
    return 'Contact for pricing';
  }
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
  ...cuttingEdgeFuturisticServices,
  ...advancedAIAutomationServices2025,
  ...advancedITInfrastructureServices,
  ...emergingTechServices,
  ...newRealServices,
  ...realOperationalServices,
  ...marketReadyServices,
  ...marketValidatedServices,
  ...advancedEnterpriseSolutions,
  ...innovativeAISolutions,
  ...innovativeMicroSaasSolutions2025,
  ...innovativeITInfrastructureServices,
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
  ...innovative2037MicroSaasServices,
  ...innovative2037ITServices,
  ...innovative2037AIServices,
  // Add our new 2037 Q1 innovative services
  ...real2037Q1InnovativeAdditions,
  ...real2037Q1ITInnovations,
  ...real2037Q1MicroSaasInnovations
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
    id: 'ai-business-intelligence',
    name: 'AI & Business Intelligence',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-600 via-blue-600 to-cyan-600',
    description: 'AI-powered business intelligence and analytics'
  },
  {
    id: 'cybersecurity-compliance',
    name: 'Cybersecurity & Compliance',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-red-600 via-orange-600 to-yellow-600',
    description: 'Advanced security and compliance solutions'
  },
  {
    id: 'cloud-devops',
    name: 'Cloud & DevOps',
    icon: <Cpu className="w-6 h-6" />,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    description: 'Cloud orchestration and DevOps automation'
  },
  {
    id: 'digital-transformation',
    name: 'Digital Transformation',
    icon: <Rocket className="w-6 h-6" />,
    color: 'from-purple-600 via-pink-600 to-red-600',
    description: 'Business transformation and innovation'
  },
  {
    id: 'healthcare-biotech',
    name: 'Healthcare & Biotech',
    icon: <Heart className="w-6 h-6" />,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    description: 'Healthcare analytics and biotech innovation'
  },
  {
    id: 'fintech',
    name: 'Fintech Innovation',
    icon: <Target className="w-6 h-6" />,
    color: 'from-green-600 via-emerald-600 to-teal-600',
    description: 'Financial technology and blockchain solutions'
  },
  {
    id: 'sustainability-green-tech',
    name: 'Sustainability & Green Tech',
    icon: <Palette className="w-6 h-6" />,
    color: 'from-green-600 via-emerald-600 to-teal-600',
    description: 'Environmental sustainability and green technology'
  },
  {
    id: 'space-tech-aerospace',
    name: 'Space Tech & Aerospace',
    icon: <Atom className="w-6 h-6" />,
    color: 'from-blue-600 via-indigo-600 to-purple-600',
    description: 'Space technology and aerospace innovation'
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-600 via-violet-600 to-indigo-600',
    description: 'Quantum computing and advanced technology'
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
    id: 'financial-tech',
    name: 'Financial Technology',
    icon: <DollarSign className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-500',
    description: 'Advanced financial technology solutions'
  },
  {
    id: 'healthcare-tech',
    name: 'Healthcare Technology',
    icon: <Heart className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    description: 'Cutting-edge healthcare technology platforms'
  },
  {
    id: 'logistics-supply-chain',
    name: 'Logistics & Supply Chain',
    icon: <Truck className="w-6 h-6" />,
    color: 'from-orange-500 to-red-500',
    description: 'Intelligent logistics and supply chain solutions'
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-purple-500 to-indigo-500',
    description: 'Advanced cybersecurity and data protection'
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
    name: 'Cybersecurity',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-red-500 to-orange-500',
    description: 'Advanced security and threat protection'
  },
  {
    id: 'ai-ml',
    name: 'AI & Machine Learning',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-600',
    description: 'Intelligent automation and analytics'
  },
  {
    id: 'fintech-blockchain',
    name: 'Fintech & Blockchain',
    icon: <Target className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-600',
    description: 'Financial technology and blockchain solutions'
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
    
    const serviceCategory = getServiceDescription(service).toLowerCase();
    const categoryName = categories.find(cat => cat.id === selectedCategory)?.name.toLowerCase();
    
    // Handle specialized category filtering
    if (selectedCategory === 'cybersecurity') {
      return matchesSearch && (
        serviceCategory.includes('cybersecurity') || 
        serviceCategory.includes('security') || 
        serviceCategory.includes('threat') ||
        serviceCategory.includes('vulnerability') ||
        serviceCategory.includes('compliance')
      );
    }
    
    if (selectedCategory === 'ai-ml') {
      return matchesSearch && (
        serviceCategory.includes('ai') || 
        serviceCategory.includes('machine learning') || 
        serviceCategory.includes('artificial intelligence') ||
        serviceCategory.includes('neural') ||
        serviceCategory.includes('automation')
      );
    }
    
    if (selectedCategory === 'fintech-blockchain') {
      return matchesSearch && (
        serviceCategory.includes('fintech') || 
        serviceCategory.includes('blockchain') || 
        serviceCategory.includes('crypto') ||
        serviceCategory.includes('defi') ||
        serviceCategory.includes('nft') ||
        serviceCategory.includes('payment')
      );
    }
    
    if (selectedCategory === 'healthcare-biotech') {
      return matchesSearch && (
        serviceCategory.includes('healthcare') || 
        serviceCategory.includes('biotech') || 
        serviceCategory.includes('medical') ||
        serviceCategory.includes('pharmaceutical') ||
        serviceCategory.includes('clinical')
      );
    }
    
    // Default category matching
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
      case 'ai & business intelligence':
        return <Brain className="w-6 h-6 text-purple-400" />;
      case 'cybersecurity & compliance':
        return <Shield className="w-6 h-6 text-red-400" />;
      case 'cloud & devops':
        return <Cpu className="w-6 h-6 text-blue-400" />;
      case 'digital transformation':
        return <Rocket className="w-6 h-6 text-pink-400" />;
      case 'healthcare & biotech':
        return <Heart className="w-6 h-6 text-blue-400" />;
      case 'fintech':
        return <Target className="w-6 h-6 text-green-400" />;
      case 'sustainability & green tech':
        return <Palette className="w-6 h-6 text-green-400" />;
      case 'space technology':
      case 'aerospace':
        return <Atom className="w-6 h-6 text-blue-400" />;
      case 'quantum computing':
        return <Brain className="w-6 h-6 text-purple-400" />;
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
        return <Building className="w-6 h-6 text-blue-400" />;
      case 'cybersecurity':
        return <Shield className="w-6 h-6 text-red-400" />;
      case 'ai & consciousness':
      case 'ai services':
      case 'artificial intelligence':
      case 'ai & machine learning':
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
      case 'transportation':
      case 'transportation & logistics':
        return <Truck className="w-6 h-6 text-blue-400" />;
      case 'education':
      case 'education & research':
        return <GraduationCap className="w-6 h-6 text-yellow-400" />;
      case 'fintech':
      case 'fintech & blockchain':
        return <Target className="w-6 h-6 text-green-400" />;
      default:
        return <Shield className="w-6 h-6 text-gray-400" />;
    }
=======
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Shield, Rocket, Star } from 'lucide-react';
import Link from 'next/link';
import { formatServicePrice } from '../utils/servicePriceUtils';

// Disable static generation for this page
export const getServerSideProps = async () => {
  return {
    props: {}
  };
};

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Services | Zion Tech Group - Enterprise IT, AI, Micro SAAS Solutions" 
        description="Discover our comprehensive portfolio of enterprise IT solutions, AI services, and innovative micro SAAS platforms. Transform your business with cutting-edge technology." 
        canonical="https://ziontechgroup.com/services/" 
      />

      <div className="min-h-screen bg-black text-white pt-24">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive technology solutions designed to transform your business and drive innovation
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-2xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-lg"
              >
                Get Started
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
              
              <Link 
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-lg"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Categories</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive range of technology solutions
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
              >
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  AI & Consciousness
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                  Quantum Computing
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                  Enterprise IT
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-2"></div>
                  Micro SAAS
                </div>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "AI & Machine Learning",
                  description: "Advanced artificial intelligence solutions for enterprise automation and decision-making",
                  color: "from-cyan-500 to-blue-600",
                  link: "/ai-services"
                },
                {
                  icon: Shield,
                  title: "Cybersecurity",
                  description: "Comprehensive security solutions to protect your digital assets and infrastructure",
                  color: "from-red-500 to-pink-600",
                  link: "/cybersecurity"
                },
                {
                  icon: Rocket,
                  title: "Space Technology",
                  description: "Innovative space solutions and satellite technology for modern businesses",
                  color: "from-purple-500 to-indigo-600",
                  link: "/space-tech"
                },
                {
                  icon: Star,
                  title: "Micro SaaS Solutions",
                  description: "Scalable software-as-a-service platforms for niche markets and specialized needs",
                  color: "from-green-500 to-emerald-600",
                  link: "/micro-saas"
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/25"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <Link 
                      href={service.link}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Business?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Let's discuss how our innovative solutions can drive your success and accelerate your digital transformation journey.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-2xl hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-lg"
                >
                  Get Started Today
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Link>
                
                <Link 
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-2xl hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-400/50 text-lg"
                >
                  Learn More About Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;