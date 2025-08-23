import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Brain, Atom, Shield, Cloud, Rocket, Target, Users, Heart, DollarSign, Cog, FileText, 
  Calendar, Lightbulb, HelpCircle, Monitor, Star, Award, TrendingUp, Globe, 
  Lock, Palette, Cpu, Layers, Globe2, Truck, Zap, ArrowRight, CheckCircle, ShoppingCart
} from 'lucide-react';


// Import our new innovative 2025 services
import { realInnovativeMicroSaasServices2025 } from '../data/2025-real-innovative-micro-saas-expansion';
import { innovativeITInfrastructureServices2025 } from '../data/2025-innovative-it-infrastructure-services-expansion';
import { innovativeAIServices2025 } from '../data/2025-innovative-ai-services-expansion';

// Import our new innovative 2025 services expansion v2
import { innovativeMicroSaas2025ExpansionV2 } from '../data/2025-innovative-micro-saas-expansion-v2';
import { innovativeITServices2025ExpansionV2 } from '../data/2025-innovative-it-services-expansion-v2';
import { innovativeAIServices2025ExpansionV2 } from '../data/2025-innovative-ai-services-expansion-v2';

// Import our new 2025 advanced services
import { advancedBusinessIntelligenceServices2025 } from '../data/2025-advanced-business-intelligence-services';
import { advancedITInfrastructureServices2025 } from '../data/2025-advanced-it-infrastructure-services';

// Import our new real services
import { realMicroSaas2025Expansion } from '../data/real-micro-saas-2025-expansion';
import { realITServices2025Expansion } from '../data/real-it-services-2025-expansion';
import { realAIServices2025Expansion } from '../data/real-ai-services-2025-expansion';

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

// Import our new 2025 ultimate services expansion
import { ultimate2025MicroSaasExpansion } from '../data/2025-ultimate-micro-saas-expansion';
import { ultimate2025ITServicesExpansion } from '../data/2025-ultimate-it-services-expansion';
import { ultimate2025AIServicesExpansion } from '../data/2025-ultimate-ai-services-expansion';

// Import our new 2025 Q4 innovative services
import { innovative2025Q4NewServices } from '../data/innovative-2025-q4-new-services';


// Import our new innovative 2040 services
import { innovative2040ITServices } from '../data/innovative-2040-it-services';
import { innovative2040FuturisticServices } from '../data/innovative-2040-futuristic-services';

// Import our new 2025 advanced enterprise services
import { advancedEnterpriseServices } from '../data/2025-advanced-enterprise-services-expansion';
import { cuttingEdgeITInfrastructureServices } from '../data/2025-cutting-edge-it-infrastructure';

// Import our new 2025 cutting-edge futuristic services
import { cuttingEdgeFuturisticServices } from '../data/2025-cutting-edge-futuristic-services';
import { advancedAIAutomationServices } from '../data/2026-advanced-ai-automation-services';

// Import our new 2025 cutting-edge innovative services expansion
import { cuttingEdgeInnovativeServices2025 } from '../data/2025-cutting-edge-innovative-services-expansion';
import { advancedITInfrastructureSolutions2025 } from '../data/2025-advanced-it-infrastructure-solutions';
import { advancedAIAutomationSolutions2025 } from '../data/2025-advanced-ai-automation-solutions';

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
  // Our new 2025 services
  ...realInnovativeMicroSaasServices2025,
  ...innovativeITInfrastructureServices2025,
  ...innovativeAIServices2025,
  
  // Our new 2025 services expansion v2
  ...innovativeMicroSaas2025ExpansionV2,
  ...innovativeITServices2025ExpansionV2,
  ...innovativeAIServices2025ExpansionV2,
  
  // Our new 2025 advanced services
  ...advancedBusinessIntelligenceServices2025,
  ...advancedITInfrastructureServices2025,
  
  // Our new real services 2025
  ...realMicroSaas2025Expansion,
  ...realITServices2025Expansion,
  ...realAIServices2025Expansion,
  
  ...enterpriseITSolutions,
  ...innovativeMicroSaasSolutions,
  ...cuttingEdgeAIServices,
  ...realMicroSaasServices,
  ...innovativeAIServices,
  ...enterpriseITServices,
  ...cuttingEdgeFuturisticServices,
  ...advancedAIAutomationServices,
  ...emergingTechServices,
  ...newRealServices,
  ...realOperationalServices,
  ...marketReadyServices,
  ...marketValidatedServices,
  // Our new 2025 Q4 innovative services
  ...innovative2025Q4NewServices,
  ...advancedITInfrastructureServices2025,
  ...industryRealServices,
  ...real2025Q4AugmentedBatch,
  ...real2029Q3Additions,
  ...validatedServices2025Q4,
  ...real2035Q2Additions,
  ...real2036ServiceExpansions,
  ...innovative2036MicroSaasServices,
  ...innovative2036ITServices,
  // Our new 2025 advanced services
  ...ultimate2025MicroSaasExpansion,
  ...ultimate2025ITServicesExpansion,
  ...ultimate2025AIServicesExpansion,
  // Our new innovative services
  ...innovative2037MicroSaasServices,
  ...innovative2037ITServices,
  ...innovative2037AIServices,
  ...innovative2038CuttingEdgeServices,
  ...innovative2038ITInfrastructureServices,
  // Our additional innovative services
  ...innovative2037Services,
  ...advanced2038Services,
  ...revolutionary2039Services,
  
  // Our new innovative 2040 services
  ...innovative2040FuturisticServices,
  ...innovative2040ITServices,
  // Our new comprehensive services
  ...revolutionary2040FuturisticServices,
  ...revolutionary2041AdvancedServices,
  // Our latest innovative services
  ...advanced2041EnterpriseServices,
  ...revolutionary2042MicroSaasServices,
  // Our new 2025 ultimate services expansion
  ...ultimate2025MicroSaasExpansion,
  ...ultimate2025ITServicesExpansion,
  ...ultimate2025AIServicesExpansion,
  // Our new 2025 advanced enterprise services
  ...advancedEnterpriseServices,
  ...cuttingEdgeITInfrastructureServices,
  
  // Our new 2025 cutting-edge innovative services expansion
  ...cuttingEdgeInnovativeServices2025,
  ...advancedITInfrastructureSolutions2025,
  ...advancedAIAutomationSolutions2025
];

const categories = [
  {
    id: 'all',
    name: 'All Services',
    icon: <Target className="w-6 h-6" />,
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
    icon: <Cloud className="w-6 h-6" />,
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
    icon: <Cloud className="w-6 h-6" />,
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
    icon: <Target className="w-6 h-6" />,
    color: 'from-yellow-500 to-orange-500',
    description: 'Learning and research platforms'
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
  ];

  const specializedServices = [
    {
      name: 'AI Consciousness Evolution',
      description: 'Advanced AI systems with emotional intelligence and self-awareness',
      href: '/ai-consciousness-evolution-2045',
      icon: <Brain className="w-6 h-6" />,
      category: 'AI'
    },
    {
      name: 'Quantum AI Neural Networks',
      description: 'Quantum-powered artificial intelligence with consciousness integration',
      href: '/quantum-ai-neural-network-platform-2045',
      icon: <Atom className="w-6 h-6" />,
      category: 'Quantum'
    },
    {
      name: 'Quantum Cybersecurity Platform',
      description: 'Quantum-resistant security solutions for the post-quantum era',
      href: '/quantum-cybersecurity-platform-2045',
      icon: <Shield className="w-6 h-6" />,
      category: 'Security'
    },
    {
      name: 'Cloud AI Platform',
      description: 'AI and machine learning platform on cloud infrastructure',
      href: '/cloud-ai-platform',
      icon: <Cloud className="w-6 h-6" />,
      category: 'Cloud'
    },
    {
      name: 'Zero Trust Security',
      description: 'Comprehensive zero trust architecture implementation',
      href: '/zero-trust-security',
      icon: <Lock className="w-6 h-6" />,
      category: 'Security'
    },
    {
      name: 'DevOps as a Service',
      description: 'Complete DevOps pipeline implementation and management',
      href: '/devops-as-a-service',
      icon: <Cog className="w-6 h-6" />,
      category: 'Cloud'
    }
  ];

  const industrySolutions = [
    {
      industry: 'Financial Services',
      solutions: [
        'AI-Powered Trading Algorithms',
        'Quantum Financial Intelligence',
        'Cybersecurity & Compliance',
        'Cloud Infrastructure'
      ],
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      industry: 'Healthcare',
      solutions: [
        'AI Diagnostics & Imaging',
        'Quantum Drug Discovery',
        'Patient Data Security',
        'Cloud-Based Systems'
      ],
      icon: <Heart className="w-8 h-8" />
    },
    {
      industry: 'Manufacturing',
      solutions: [
        'AI Process Optimization',
        'Quantum Materials Research',
        'IoT Security',
        'Smart Factory Solutions'
      ],
      icon: <Cog className="w-8 h-8" />
    },
    {
      industry: 'Retail & E-commerce',
      solutions: [
        'AI Customer Analytics',
        'Personalization Engines',
        'Fraud Detection',
        'Scalable Infrastructure'
      ],
      icon: <ShoppingCart className="w-8 h-8" />
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your current technology landscape and identify opportunities for improvement',
      icon: <Target className="w-8 h-8" />
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive roadmap tailored to your business goals and requirements',
      icon: <FileText className="w-8 h-8" />
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the solution with our expert team, ensuring minimal disruption to your operations',
      icon: <Rocket className="w-8 h-8" />
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'Continuous monitoring, optimization, and 24/7 support to ensure peak performance',
      icon: <Monitor className="w-8 h-8" />
    }
  ];

  return (
    <Layout
      title="Services - Zion Tech Group"
      description="Comprehensive technology services including AI, quantum computing, cybersecurity, and cloud solutions. Transform your business with our expert services."
      keywords="services, AI services, quantum computing, cybersecurity, cloud services, Zion Tech Group"
      canonicalUrl="https://ziontechgroup.com/services"
    >
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions that drive innovation, enhance security, 
              and accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-indigo-500/25"
                onClick={() => document.getElementById('main-services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-indigo-500 text-indigo-400 rounded-lg font-semibold text-lg hover:bg-indigo-500 hover:text-white transition-all duration-200"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section id="main-services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Core Service Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our four main service areas work together to provide comprehensive 
              technology solutions for modern businesses.
            </p>
          </motion.div>

          <div className="space-y-12">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-3xl border border-gray-700/50 overflow-hidden"
              >
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mr-4`}>
                          {service.icon}
                        </div>
                        <h3 className="text-3xl font-bold text-white">{service.name}</h3>
                      </div>
                      <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <Link href={service.href}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center`}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </motion.button>
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                              <Star className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                          <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                          Benefits
                        </h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="text-gray-300 text-sm flex items-center">
                              <Star className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-gradient-to-r from-indigo-900/10 to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Specialized Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced, cutting-edge solutions that address specific business challenges 
              and unlock new possibilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={service.href}>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-indigo-500/40 transition-all duration-300 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                        {service.icon}
                      </div>
                      <span className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 rounded-full border border-indigo-500/30">
                        {service.category}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                      {service.name}
                    </h4>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-indigo-400 group-hover:text-indigo-300 transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored technology solutions designed to address the unique challenges 
              and opportunities of specific industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industrySolutions.map((industry, index) => (
              <motion.div
                key={industry.industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 hover:border-indigo-500/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mr-4">
                    {industry.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{industry.industry}</h3>
                </div>
                <ul className="space-y-3">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-indigo-400 mr-3 flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gradient-to-r from-indigo-900/10 to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and 
              maximum value for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-3xl p-12 border border-indigo-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss how our comprehensive technology services can help you 
                achieve your business goals and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold text-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-indigo-500/25"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Your Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-indigo-500 text-indigo-400 rounded-lg font-semibold text-lg hover:bg-indigo-500 hover:text-white transition-all duration-200"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;