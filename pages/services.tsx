import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import { 
  Brain, Atom, Shield, Rocket, ArrowRight, CheckCircle, 
  Star, Users, Globe, Zap, Target, TrendingUp,
  Cpu, Database, Lock, Satellite, Microscope, Network
} from 'lucide-react';
import Link from 'next/link';

// Import our new 2025 service data
import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';
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
import { innovativeAIServices2025 } from '../data/2025-innovative-ai-services-expansion';

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

// Import our new innovative 2040 services
import { innovative2040ITServices } from '../data/innovative-2040-it-services';
// Import our new 2025 advanced enterprise services
import { advancedEnterpriseServices } from '../data/2025-advanced-enterprise-services-expansion';
import { cuttingEdgeITInfrastructureServices } from '../data/2025-cutting-edge-it-infrastructure';

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
  if (service.price) return service.price;
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
  ...innovativeMicroSaasSolutions2025,
  ...cuttingEdgeAIServices2025,
  ...realEnterpriseMicroSaas2025,
  ...innovative2025AIAutonomousServices,
  
  // Our new 2025 advanced services
  ...advancedBusinessIntelligenceServices2025,
  ...advancedITInfrastructureServices2025,
  
  // Our new real services 2025
  ...realMicroSaas2025Expansion,
  ...realITServices2025Expansion,
  ...realAIServices2025Expansion,
  
  // Our new innovative 2025 services
  ...innovativeAIAutonomousEcosystemServices2025,
  ...cuttingEdgeITInfrastructureInnovations2025,
  ...innovativeMicroSaasBreakthroughs2025,
  
  // Existing services
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
  ...advanced2025MicroSaasExpansion,
  ...advanced2025ITSolutionsExpansion,
  ...advanced2025AIServicesExpansion,
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
  // Our new 2025 innovative services expansion
  ...innovative2025MicroSaasExpansion,
  ...innovative2025ITSolutionsExpansion,
  ...innovative2025AIServicesExpansion,
  // Our new 2025 advanced enterprise services
  ...advancedEnterpriseServices,
  ...innovative2025MicroSaasExpansion,
  ...cuttingEdgeITInfrastructureServices
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
      title: "Business Intelligence & Analytics",
      description: "AI-powered insights that transform data into actionable business strategies.",
      icon: <TrendingUp className="w-6 h-6" />,
      category: "Business Solutions"
    },
    {
      title: "Healthcare AI Systems",
      description: "Revolutionary medical diagnosis and treatment planning powered by consciousness AI.",
      icon: <Users className="w-6 h-6" />,
      category: "Healthcare"
    },
    {
      title: "Financial Technology",
      description: "Quantum-powered financial modeling and risk assessment systems.",
      icon: <Target className="w-6 h-6" />,
      category: "FinTech"
    },
    {
      title: "Manufacturing Intelligence",
      description: "AI-driven predictive maintenance and quality control systems.",
      icon: <Cpu className="w-6 h-6" />,
      category: "Manufacturing"
    },
    {
      title: "Education Technology",
      description: "Personalized learning experiences powered by consciousness AI.",
      icon: <Globe className="w-6 h-6" />,
      category: "Education"
    },
    {
      title: "Government Solutions",
      description: "Secure, scalable technology solutions for government agencies.",
      icon: <Lock className="w-6 h-6" />,
      category: "Government"
    }
  ];

  const serviceFeatures = [
    {
      title: "Scalable Architecture",
      description: "Our services are built to grow with your business, from startup to enterprise.",
      icon: <Network className="w-6 h-6" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring for all our services.",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Custom Development",
      description: "Tailored solutions designed specifically for your unique requirements.",
      icon: <Microscope className="w-6 h-6" />
    },
    {
      title: "Integration Services",
      description: "Seamless integration with your existing systems and workflows.",
      icon: <Database className="w-6 h-6" />
    }
  ];

  const industries = [
    "Healthcare & Life Sciences",
    "Financial Services",
    "Manufacturing & Logistics",
    "Technology & Software",
    "Government & Defense",
    "Education & Research",
    "Energy & Utilities",
    "Retail & E-commerce"
  ];

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };
};

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO title="Services | Zion Tech Group - Enterprise IT, AI, Micro SAAS Solutions" description="Discover our comprehensive portfolio of enterprise IT solutions, AI services, and innovative micro SAAS platforms. Transform your business with cutting-edge technology." canonicalUrl="https://ziontechgroup.com/services/" />

      <UltraFuturisticNavigation2046 />
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
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• Machine Learning Models</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• Predictive Analytics</li>
                  <li>• Neural Network Architecture</li>
                  <li>• AI Model Training & Optimization</li>
                </ul>
                <div className="text-cyan-400 font-semibold">Starting at $15,000</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🔮</div>
                <h3 className="text-2xl font-bold mb-4 text-indigo-400">Quantum Computing Solutions</h3>
                <p className="text-white/70 mb-6">
                  Next-generation quantum computing automation for complex optimization problems and advanced simulations.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• Process Automation</li>
                  <li>• Workflow Optimization</li>
                  <li>• Robotic Process Automation</li>
                  <li>• Smart Workflows</li>
                  <li>• Business Process Reengineering</li>
                  <li>• Autonomous Decision Systems</li>
                </ul>
                <div className="text-fuchsia-400 font-semibold">Starting at $12,000</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold mb-4 text-emerald-400">Edge Computing & IoT</h3>
                <p className="text-white/70 mb-6">
                  Distributed computing solutions that bring intelligence closer to data sources for real-time decision making.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• Cloud Migration</li>
                  <li>• Auto-scaling</li>
                  <li>• Performance Optimization</li>
                  <li>• Security Hardening</li>
                  <li>• Multi-cloud Strategy</li>
                  <li>• Disaster Recovery</li>
                </ul>
                <div className="text-green-400 font-semibold">Starting at $18,000</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold mb-4 text-red-400">Cybersecurity & Compliance</h3>
                <p className="text-white/70 mb-6">
                  Comprehensive security solutions with automated threat detection and compliance management systems.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• CI/CD Pipeline Setup</li>
                  <li>• Automated Testing</li>
                  <li>• Infrastructure as Code</li>
                  <li>• Monitoring & Alerting</li>
                  <li>• Container Orchestration</li>
                  <li>• Security Scanning</li>
                </ul>
                <div className="text-blue-400 font-semibold">Starting at $10,000</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-2xl font-bold mb-4 text-red-400">AI Security & Compliance</h3>
                <p className="text-white/70 mb-6">
                  Comprehensive security solutions and compliance frameworks for AI systems and automation platforms.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• Data Visualization</li>
                  <li>• Predictive Analytics</li>
                  <li>• Business Intelligence</li>
                  <li>• Real-time Dashboards</li>
                  <li>• Data Warehousing</li>
                  <li>• Advanced Reporting</li>
                </ul>
                <div className="text-purple-400 font-semibold">Starting at $14,000</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4 text-orange-400">Edge Computing Solutions</h3>
                <p className="text-white/70 mb-6">
                  Edge AI deployment and optimization for real-time processing and reduced latency applications.
                </p>
                <ul className="space-y-2 text-sm text-white/60 mb-6">
                  <li>• Digital Strategy</li>
                  <li>• Technology Roadmap</li>
                  <li>• Innovation Workshops</li>
                  <li>• Performance Audits</li>
                  <li>• Risk Assessment</li>
                  <li>• Change Management</li>
                </ul>
                <div className="text-yellow-400 font-semibold">Starting at $8,000</div>
              </div>
            </div>

            {/* Technology Stack Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Our Technology Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-3 text-fuchsia-400">AI & Machine Learning</h3>
                  <div className="space-y-2 text-sm text-white/70">
                    <div>• TensorFlow & PyTorch</div>
                    <div>• OpenAI GPT Models</div>
                    <div>• Computer Vision APIs</div>
                    <div>• NLP Frameworks</div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-3 text-green-400">Cloud & Infrastructure</h3>
                  <div className="space-y-2 text-sm text-white/70">
                    <div>• AWS, Azure, GCP</div>
                    <div>• Kubernetes & Docker</div>
                    <div>• Terraform & Ansible</div>
                    <div>• Serverless Functions</div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-3 text-blue-400">Development Tools</h3>
                  <div className="space-y-2 text-sm text-white/70">
                    <div>• React & Next.js</div>
                    <div>• Python & Node.js</div>
                    <div>• Git & CI/CD</div>
                    <div>• Testing Frameworks</div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-3 text-purple-400">Data & Analytics</h3>
                  <div className="space-y-2 text-sm text-white/70">
                    <div>• PostgreSQL & MongoDB</div>
                    <div>• Apache Kafka</div>
                    <div>• Tableau & Power BI</div>
                    <div>• Apache Spark</div>
                  </div>
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
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">Industry Expertise</h3>
                  <p className="text-white/70">
                    Deep domain knowledge across healthcare, finance, retail, and manufacturing sectors with proven success stories.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-400">Continuous Innovation</h3>
                  <p className="text-white/70">
                    With 248 active automations and 3,127+ pages generated, we have a track record of delivering measurable business value.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">24/7 Autonomous Operation</h3>
                  <p className="text-white/70">
                    Our systems run continuously, monitoring, optimizing, and improving your operations around the clock without human intervention.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-yellow-400">Scalable Solutions</h3>
                  <p className="text-white/70">
                    Built to grow with your business, our solutions automatically scale up or down based on demand and performance requirements.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Delivery Process */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Service Delivery Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">1</div>
                  <h3 className="text-lg font-semibold mb-2">Discovery</h3>
                  <p className="text-sm text-white/70">Understanding your needs and objectives</p>
                  <div className="text-xs text-white/50 mt-2">• Requirements Analysis</div>
                  <div className="text-xs text-white/50">• Current State Assessment</div>
                  <div className="text-xs text-white/50">• Stakeholder Interviews</div>
                </div>
              </div>
            </div>

            {/* Support & Maintenance Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-8 text-green-400">Support & Maintenance</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">2</div>
                  <h3 className="text-lg font-semibold mb-2">Planning</h3>
                  <p className="text-sm text-white/70">Creating detailed roadmap and strategy</p>
                  <div className="text-xs text-white/50 mt-2">• Architecture Design</div>
                  <div className="text-xs text-white/50">• Implementation Plan</div>
                  <div className="text-xs text-white/50">• Risk Mitigation</div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">3</div>
                  <h3 className="text-lg font-semibold mb-2">Implementation</h3>
                  <p className="text-sm text-white/70">Building and deploying solutions</p>
                  <div className="text-xs text-white/50 mt-2">• Agile Development</div>
                  <div className="text-xs text-white/50">• Continuous Testing</div>
                  <div className="text-xs text-white/50">• Phased Rollout</div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">4</div>
                  <h3 className="text-lg font-semibold mb-2">Optimization</h3>
                  <p className="text-sm text-white/70">Continuous improvement and support</p>
                  <div className="text-xs text-white/50 mt-2">• Performance Monitoring</div>
                  <div className="text-xs text-white/50">• Automated Optimization</div>
                  <div className="text-xs text-white/50">• Ongoing Support</div>
                </div>
              </div>
            </div>

            {/* Pricing Tiers */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-purple-400">Service Tiers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/5 rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">Starter</h3>
                  <div className="text-3xl font-bold text-white mb-4">$8,000</div>
                  <p className="text-white/70 mb-6">Perfect for small businesses starting their automation journey</p>
                  <ul className="space-y-2 text-sm text-white/60 mb-6">
                    <li>• Basic AI Integration</li>
                    <li>• Process Automation</li>
                    <li>• 3 Months Support</li>
                    <li>• Basic Analytics</li>
                  </ul>
                  <div className="text-center">
                    <button className="w-full px-6 py-3 bg-cyan-400 text-white font-semibold rounded-lg hover:bg-cyan-500 transition-colors">
                      Get Started
                    </button>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 rounded-xl p-6 border border-purple-400/30 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-400 to-fuchsia-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-400">Professional</h3>
                  <div className="text-3xl font-bold text-white mb-4">$25,000</div>
                  <p className="text-white/70 mb-6">Comprehensive solution for growing businesses</p>
                  <ul className="space-y-2 text-sm text-white/60 mb-6">
                    <li>• Advanced AI Systems</li>
                    <li>• Full Process Automation</li>
                    <li>• 12 Months Support</li>
                    <li>• Advanced Analytics</li>
                    <li>• Custom Integrations</li>
                  </ul>
                  <div className="text-center">
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-400 to-fuchsia-400 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-fuchsia-500 transition-all duration-300">
                      Get Started
                    </button>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-green-400">Enterprise</h3>
                  <div className="text-3xl font-bold text-white mb-4">$75,000+</div>
                  <p className="text-white/70 mb-6">Full-scale transformation for large organizations</p>
                  <ul className="space-y-2 text-sm text-white/60 mb-6">
                    <li>• Custom AI Development</li>
                    <li>• Enterprise Integration</li>
                    <li>• 24/7 Support</li>
                    <li>• Advanced Security</li>
                    <li>• Dedicated Team</li>
                  </ul>
                  <div className="text-center">
                    <button className="w-full px-6 py-3 bg-green-400 text-white font-semibold rounded-lg hover:bg-green-500 transition-colors">
                      Contact Sales
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-green-400">Success Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
                  <div className="text-white/70">Average Efficiency Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-fuchsia-400 mb-2">50%</div>
                  <div className="text-white/70">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-white/70">System Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-white/70">Autonomous Operation</div>
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
            <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl rounded-3xl p-12 text-center border border-white/20 mt-16">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
                Let's discuss how our AI and automation services can drive innovation, 
                improve efficiency, and create competitive advantages for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
                  Get Started Today
                </a>
                <a href="/case-studies" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105">
                  View Case Studies
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
=======
    <Layout
      title="Services - Zion Tech Group"
      description="Revolutionary AI consciousness, quantum computing, cybersecurity, and space technology services that transform businesses and industries."
      keywords="AI consciousness services, quantum computing solutions, cybersecurity services, space technology, Zion Tech Group services"
    >
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Our Services
                </h1>
              </div>
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Revolutionary technology solutions that redefine what's possible
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                From AI consciousness evolution to quantum computing breakthroughs, 
                our services empower organizations to achieve the impossible and shape the future.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Core Technology Services
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our flagship services that represent the cutting edge of technological innovation
              </p>
            </motion.div>
            
            <div className="space-y-12">
              {mainServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-3xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4`}>
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{service.description}</p>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-gray-300">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                            <Star className="w-5 h-5 text-yellow-400 mr-2" />
                            Benefits
                          </h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start space-x-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                                <span className="text-gray-300">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Link
                          href={`/contact?service=${encodeURIComponent(service.title)}`}
                          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Specialized Solutions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Industry-specific services tailored to your unique challenges and requirements
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specializedServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors duration-300">
                    Explore Service
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Why Choose Our Services?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                The advantages that set Zion Tech Group apart from the competition
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {serviceFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our revolutionary services are transforming organizations across diverse sectors
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-4 rounded-xl border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 text-center cursor-pointer group"
                >
                  <div className="text-gray-300 group-hover:text-purple-300 transition-colors duration-300 text-sm font-medium">
                    {industry}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Our Service Process
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A proven methodology that ensures successful implementation and results
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Analysis",
                  description: "We analyze your requirements and design a tailored solution strategy."
                },
                {
                  step: "02",
                  title: "Solution Design",
                  description: "Our experts design a comprehensive solution architecture."
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "We implement the solution with rigorous testing and quality assurance."
                },
                {
                  step: "04",
                  title: "Optimization",
                  description: "Continuous monitoring and optimization for peak performance."
                }
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{process.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
                Discover how our revolutionary services can accelerate your growth and give you a competitive edge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-2xl hover:from-purple-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-500/30 text-purple-400 font-semibold rounded-2xl hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;
