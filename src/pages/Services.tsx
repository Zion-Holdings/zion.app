<<<<<<< HEAD
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, Shield, Filter, SortAsc, SortDesc, X } from 'lucide-react';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { useSearch } from '../hooks/useSearch';
import { OptimizedImage } from '../components/OptimizedImage';
import { usePerformance } from '../hooks/usePerformance';

export default function Services() {
  const { trackRender } = usePerformance();
  
  // Track render performance
  useState(() => {
    const cleanup = trackRender('Services');
    return cleanup;
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  // Enhanced search with the new hook
  const {
    query,
    setQuery,
    filters,
    setFilter,
    clearFilters,
    sortBy,
    setSort,
    sortOrder,
    totalResults,
    isLoading,
    getSuggestions,
    getPaginatedResults
  } = useSearch(COMPREHENSIVE_SERVICES, {
    searchFields: ['title', 'description', 'category', 'subcategory', 'tags'],
    debounceMs: 300,
    fuzzySearch: true
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;
  const paginatedResults = getPaginatedResults(currentPage, pageSize);

  // Category filter
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(COMPREHENSIVE_SERVICES.map(service => service.category))];
    return uniqueCategories.sort();
  }, []);

  // Handle category selection
  const handleCategorySelect = (category: string) => {
    if (category === 'all') {
      setFilter('category', '');
      setSelectedCategory('all');
    } else {
      setFilter('category', category);
      setSelectedCategory(category);
    }
    setCurrentPage(1);
  };

  // Handle sort change
  const handleSort = (field: keyof typeof COMPREHENSIVE_SERVICES[0]) => {
    const newOrder = sortBy === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSort(field, newOrder);
  };

  // Get search suggestions
  const suggestions = getSuggestions(query, 5);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
=======
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, ExternalLink, Zap, Shield, Cloud, Brain, Globe, Lock, Cpu, Database, Network, Code, BarChart3, Users, Smartphone, Server, Key, Eye, Rocket, Target, TrendingUp, Award, Clock, CheckCircle, ArrowRight, Phone } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  features: string[];
  technology: string[];
  icon: React.ComponentType<any>;
  popular?: boolean;
  new?: boolean;
  marketPrice: string;
  benefits: string[];
  useCases: string[];
  link: string;
}

const services: Service[] = [
  // AI & Machine Learning Services
  {
    id: 'ai-content-generator',
    name: 'AI Content Generator Pro',
    description: 'Advanced AI-powered content creation platform for blogs, social media, and marketing materials with SEO optimization.',
    category: 'AI & Machine Learning',
    price: '$299/month',
    marketPrice: '$500-800/month',
    features: [
      'Multi-language content generation',
      'SEO-optimized writing',
      'Brand voice customization',
      'Plagiarism-free content',
      'Content calendar planning',
      'Performance analytics'
    ],
    technology: ['GPT-4', 'BERT', 'Python', 'React', 'Node.js', 'MongoDB'],
    icon: Brain,
    popular: true,
    benefits: [
      'Save 80% of content creation time',
      'Improve SEO rankings by 40%',
      'Maintain consistent brand voice',
      'Scale content production 10x'
    ],
    useCases: [
      'Marketing agencies',
      'E-commerce businesses',
      'Content creators',
      'Startups and enterprises'
    ],
    link: 'https://ziontechgroup.com/ai-content-generator'
  },
  {
    id: 'ai-customer-support',
    name: 'AI Customer Support Suite',
    description: 'Intelligent customer support automation with 24/7 availability, multilingual support, and seamless human handoff.',
    category: 'AI & Machine Learning',
    price: '$199/month',
    marketPrice: '$300-600/month',
    features: [
      'Natural language processing',
      'Multi-language support',
      'Sentiment analysis',
      'Ticket routing automation',
      'Knowledge base integration',
      'Performance analytics'
    ],
    technology: ['NLP', 'Machine Learning', 'Python', 'React', 'WebSocket', 'Redis'],
    icon: Users,
    popular: true,
    benefits: [
      'Reduce support costs by 60%',
      'Improve response time by 90%',
      'Handle 80% of queries automatically',
      '24/7 customer availability'
    ],
    useCases: [
      'E-commerce platforms',
      'SaaS companies',
      'Customer service teams',
      'Online businesses'
    ],
    link: 'https://ziontechgroup.com/ai-customer-support'
  },
  {
    id: 'ai-data-analytics',
    name: 'AI-Powered Business Intelligence',
    description: 'Advanced analytics platform that transforms raw data into actionable insights using machine learning algorithms.',
    category: 'AI & Machine Learning',
    price: '$499/month',
    marketPrice: '$800-1500/month',
    features: [
      'Predictive analytics',
      'Real-time dashboards',
      'Custom reporting',
      'Data visualization',
      'Automated insights',
      'API integrations'
    ],
    technology: ['TensorFlow', 'Python', 'React', 'D3.js', 'PostgreSQL', 'Redis'],
    icon: BarChart3,
    new: true,
    benefits: [
      'Make data-driven decisions faster',
      'Identify trends before competitors',
      'Reduce manual reporting by 70%',
      'Improve forecasting accuracy by 85%'
    ],
    useCases: [
      'Financial institutions',
      'Retail businesses',
      'Manufacturing companies',
      'Healthcare organizations'
    ],
    link: 'https://ziontechgroup.com/ai-business-intelligence'
  },

  // Cybersecurity Services
  {
    id: 'threat-detection',
    name: 'Advanced Threat Detection System',
    description: 'Real-time cybersecurity monitoring with AI-powered threat detection, automated response, and compliance reporting.',
    category: 'Cybersecurity',
    price: '$399/month',
    marketPrice: '$600-1200/month',
    features: [
      'Real-time threat monitoring',
      'AI-powered detection',
      'Automated incident response',
      'Compliance reporting',
      'Vulnerability assessment',
      'Security training modules'
    ],
    technology: ['Machine Learning', 'Python', 'Elasticsearch', 'Kafka', 'React', 'Docker'],
    icon: Shield,
    popular: true,
    benefits: [
      'Detect threats 90% faster',
      'Reduce false positives by 70%',
      'Meet compliance requirements',
      'Protect against zero-day attacks'
    ],
    useCases: [
      'Financial services',
      'Healthcare organizations',
      'Government agencies',
      'Enterprise businesses'
    ],
    link: 'https://ziontechgroup.com/threat-detection'
  },
  {
    id: 'identity-management',
    name: 'Zero Trust Identity Management',
    description: 'Comprehensive identity and access management solution with multi-factor authentication and behavioral analytics.',
    category: 'Cybersecurity',
    price: '$299/month',
    marketPrice: '$400-800/month',
    features: [
      'Multi-factor authentication',
      'Single sign-on (SSO)',
      'Role-based access control',
      'Behavioral analytics',
      'Audit logging',
      'API security'
    ],
    technology: ['OAuth 2.0', 'SAML', 'React', 'Node.js', 'PostgreSQL', 'Redis'],
    icon: Key,
    new: true,
    benefits: [
      'Reduce security breaches by 80%',
      'Simplify user access management',
      'Meet compliance requirements',
      'Improve user experience'
    ],
    useCases: [
      'Enterprise organizations',
      'Healthcare providers',
      'Financial institutions',
      'Educational institutions'
    ],
    link: 'https://ziontechgroup.com/identity-management'
  },

  // Cloud & DevOps Services
  {
    id: 'cloud-automation',
    name: 'Cloud Infrastructure Automation',
    description: 'Automated cloud infrastructure management with cost optimization, auto-scaling, and disaster recovery.',
    category: 'Cloud & DevOps',
    price: '$599/month',
    marketPrice: '$800-2000/month',
    features: [
      'Infrastructure as Code',
      'Auto-scaling',
      'Cost optimization',
      'Disaster recovery',
      'Monitoring & alerting',
      'Security compliance'
    ],
    technology: ['Terraform', 'Kubernetes', 'AWS/Azure/GCP', 'Docker', 'Prometheus', 'Grafana'],
    icon: Cloud,
    popular: true,
    benefits: [
      'Reduce infrastructure costs by 40%',
      'Deploy 10x faster',
      'Improve reliability to 99.99%',
      'Automate compliance checks'
    ],
    useCases: [
      'Startups scaling rapidly',
      'Enterprise cloud migration',
      'DevOps teams',
      'E-commerce platforms'
    ],
    link: 'https://ziontechgroup.com/cloud-automation'
  },
  {
    id: 'ci-cd-pipeline',
    name: 'Enterprise CI/CD Pipeline',
    description: 'Complete continuous integration and deployment pipeline with automated testing, security scanning, and rollback capabilities.',
    category: 'Cloud & DevOps',
    price: '$399/month',
    marketPrice: '$500-1000/month',
    features: [
      'Automated testing',
      'Security scanning',
      'Deployment automation',
      'Rollback capabilities',
      'Performance monitoring',
      'Team collaboration tools'
    ],
    technology: ['Jenkins', 'GitLab CI', 'Docker', 'Kubernetes', 'SonarQube', 'React'],
    icon: Rocket,
    benefits: [
      'Deploy code 50x faster',
      'Reduce deployment failures by 90%',
      'Improve code quality',
      'Enable team collaboration'
    ],
    useCases: [
      'Software development teams',
      'DevOps engineers',
      'Startups and enterprises',
      'Digital agencies'
    ],
    link: 'https://ziontechgroup.com/ci-cd-pipeline'
  },

  // Blockchain & Web3 Services
  {
    id: 'defi-platform',
    name: 'DeFi Platform Development',
    description: 'Custom decentralized finance platform development with smart contracts, liquidity pools, and yield farming.',
    category: 'Blockchain',
    price: '$2,999/month',
    marketPrice: '$5000-15000/month',
    features: [
      'Smart contract development',
      'Liquidity pool management',
      'Yield farming protocols',
      'Cross-chain bridges',
      'Security auditing',
      'User interface'
    ],
    technology: ['Solidity', 'Ethereum', 'Polygon', 'Web3.js', 'React', 'Hardhat'],
    icon: Lock,
    new: true,
    benefits: [
      'Launch DeFi protocols faster',
      'Ensure smart contract security',
      'Access to DeFi market',
      'Innovative financial products'
    ],
    useCases: [
      'Financial startups',
      'Crypto projects',
      'Traditional banks',
      'Investment firms'
    ],
    link: 'https://ziontechgroup.com/defi-platform'
  },
  {
    id: 'nft-marketplace',
    name: 'NFT Marketplace Platform',
    description: 'Complete NFT marketplace with minting, trading, auctions, and royalty distribution systems.',
    category: 'Blockchain',
    price: '$1,999/month',
    marketPrice: '$3000-8000/month',
    features: [
      'NFT minting tools',
      'Marketplace functionality',
      'Auction system',
      'Royalty distribution',
      'Multi-chain support',
      'Analytics dashboard'
    ],
    technology: ['Solidity', 'IPFS', 'Ethereum', 'Polygon', 'React', 'Node.js'],
    icon: Globe,
    benefits: [
      'Launch NFT marketplace quickly',
      'Generate revenue from trading fees',
      'Support multiple blockchains',
      'Built-in royalty system'
    ],
    useCases: [
      'Art galleries',
      'Gaming companies',
      'Content creators',
      'Brands and celebrities'
    ],
    link: 'https://ziontechgroup.com/nft-marketplace'
  },

  // IoT & Edge Computing
  {
    id: 'iot-platform',
    name: 'Enterprise IoT Management Platform',
    description: 'Comprehensive IoT platform for device management, data collection, analytics, and automation.',
    category: 'IoT',
    price: '$799/month',
    marketPrice: '$1000-3000/month',
    features: [
      'Device management',
      'Real-time monitoring',
      'Data analytics',
      'Automation rules',
      'Security protocols',
      'API integrations'
    ],
    technology: ['MQTT', 'Node.js', 'React', 'MongoDB', 'Redis', 'Docker'],
    icon: Smartphone,
    popular: true,
    benefits: [
      'Monitor thousands of devices',
      'Reduce operational costs by 30%',
      'Improve efficiency through automation',
      'Real-time insights and alerts'
    ],
    useCases: [
      'Manufacturing companies',
      'Smart cities',
      'Healthcare facilities',
      'Energy companies'
    ],
    link: 'https://ziontechgroup.com/iot-platform'
  },
  {
    id: 'edge-computing',
    name: 'Edge Computing Solutions',
    description: 'Edge computing infrastructure for low-latency applications, real-time processing, and distributed computing.',
    category: 'IoT',
    price: '$1,299/month',
    marketPrice: '$2000-5000/month',
    features: [
      'Edge node deployment',
      'Real-time processing',
      'Load balancing',
      'Security protocols',
      'Monitoring tools',
      'API management'
    ],
    technology: ['Kubernetes', 'Docker', 'Python', 'React', 'PostgreSQL', 'Redis'],
    icon: Server,
    new: true,
    benefits: [
      'Reduce latency by 90%',
      'Process data closer to source',
      'Improve application performance',
      'Reduce bandwidth costs'
    ],
    useCases: [
      'Gaming companies',
      'Financial trading platforms',
      'Autonomous vehicles',
      'Smart manufacturing'
    ],
    link: 'https://ziontechgroup.com/edge-computing'
  },

  // Quantum Computing Services
  {
    id: 'quantum-algorithms',
    name: 'Quantum Algorithm Development',
    description: 'Custom quantum algorithm development for optimization, cryptography, and machine learning applications.',
    category: 'Quantum Computing',
    price: '$3,999/month',
    marketPrice: '$5000-20000/month',
    features: [
      'Custom algorithm development',
      'Quantum circuit design',
      'Optimization problems',
      'Cryptography solutions',
      'Performance testing',
      'Documentation & training'
    ],
    technology: ['Qiskit', 'Cirq', 'Python', 'Quantum circuits', 'IBM Quantum', 'Google Quantum'],
    icon: Cpu,
    new: true,
    benefits: [
      'Solve complex problems faster',
      'Access quantum advantage',
      'Future-proof your applications',
      'Competitive edge in research'
    ],
    useCases: [
      'Research institutions',
      'Pharmaceutical companies',
      'Financial services',
      'Government agencies'
    ],
    link: 'https://ziontechgroup.com/quantum-algorithms'
  },

  // Data & Analytics Services
  {
    id: 'data-warehouse',
    name: 'Modern Data Warehouse',
    description: 'Cloud-native data warehouse with real-time analytics, ETL pipelines, and business intelligence tools.',
    category: 'Data & Analytics',
    price: '$899/month',
    marketPrice: '$1200-3000/month',
    features: [
      'Real-time data processing',
      'ETL pipeline automation',
      'Business intelligence tools',
      'Data governance',
      'Security & compliance',
      'Scalable architecture'
    ],
    technology: ['Snowflake', 'Apache Airflow', 'dbt', 'React', 'Python', 'Docker'],
    icon: Database,
    popular: true,
    benefits: [
      'Unify all data sources',
      'Real-time insights',
      'Scale with business growth',
      'Reduce data silos'
    ],
    useCases: [
      'E-commerce companies',
      'Financial services',
      'Healthcare organizations',
      'Retail businesses'
    ],
    link: 'https://ziontechgroup.com/data-warehouse'
  }
];

const categories = [
  'All', 
  'AI & Machine Learning', 
  'Cybersecurity', 
  'Cloud & DevOps', 
  'Blockchain', 
  'IoT', 
  'Quantum Computing',
  'Data & Analytics'
];

const priceRanges = ['all', '0-500', '500-1000', '1000-2000', '2000-4000', '4000+'];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const filteredServices = useMemo(() => {
    let filtered = services;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.technology.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by price range
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(service => {
        const price = parseInt(service.price.replace(/[^0-9]/g, ''));
        if (max === 0) return price >= min;
        return price >= min && price <= max;
      });
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
          const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
          return priceA - priceB;
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'new':
          return (b.new ? 1 : 0) - (a.new ? 1 : 0);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [selectedCategory, searchTerm, priceRange, sortBy]);

  const getPriceRangeLabel = (range: string) => {
    switch (range) {
      case '0-500': return 'Under $500/month';
      case '500-1000': return '$500 - $1,000/month';
      case '1000-2000': return '$1,000 - $2,000/month';
      case '2000-4000': return '$2,000 - $4,000/month';
      case '4000+': return 'Over $4,000/month';
      default: return 'All Prices';
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
    }
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="quantum-particles">
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
        <div className="quantum-particle"></div>
      </div>
      
      <div className="neural-lines">
        <div className="neural-line"></div>
        <div className="neural-line"></div>
        <div className="neural-line"></div>
        <div className="neural-line"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 futuristic-bg opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-zion-blue-dark/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="neon-text">
                Services
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover our comprehensive range of cutting-edge technology solutions designed to transform your business
            </p>
          </motion.div>

          {/* Enhanced Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto mb-8"
          >
            <div className="relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for services, technologies, or solutions..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 futuristic-card border border-zion-cyan/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Enhanced Search Suggestions */}
              {suggestions.length > 0 && query && (
                <div className="absolute top-full left-0 right-0 mt-2 futuristic-card rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => setQuery(suggestion)}
                      className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      <div className="flex items-center gap-3">
                        <Search className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-700 dark:text-gray-300">{suggestion}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Enhanced Category Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <button
              onClick={() => handleCategorySelect('all')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'quantum-button shadow-lg shadow-zion-cyan/30'
                  : 'futuristic-card text-zion-slate-light hover:bg-white/20 border border-zion-cyan/30'
              }`}
            >
              All Services ({COMPREHENSIVE_SERVICES.length})
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'quantum-button shadow-lg shadow-zion-cyan/30'
                    : 'futuristic-card text-zion-slate-light hover:bg-white/20 border border-zion-cyan/30'
                }`}
              >
                {category} ({COMPREHENSIVE_SERVICES.filter(s => s.category === category).length})
              </button>
            ))}
          </motion.div>

          {/* Enhanced Filters and Sort Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8"
          >
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 futuristic-card hover:bg-white/20 text-zion-slate-light rounded-lg transition-colors"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
              
              {Object.keys(filters).length > 0 && (
                <button
                  onClick={clearFilters}
                  className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm hover:bg-red-500/30 transition-colors"
                >
                  Clear Filters
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-zion-slate-light text-sm">Sort by:</span>
              <button
                onClick={() => handleSort('title')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  sortBy === 'title' ? 'quantum-button' : 'futuristic-card text-zion-slate-light hover:bg-white/20'
                }`}
              >
                Name
                {sortBy === 'title' && (
                  sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={() => handleSort('price')}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  sortBy === 'price' ? 'quantum-button' : 'futuristic-card text-zion-slate-light hover:bg-white/20'
                }`}
              >
                Price
                {sortBy === 'price' && (
                  sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />
                )}
              </button>
            </div>
          </motion.div>

          {/* Enhanced Filters Panel */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="futuristic-card backdrop-blur-sm border border-zion-cyan/30 rounded-xl p-6 mb-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-zion-slate-light text-sm font-medium mb-2">Pricing Model</label>
                  <select
                    value={filters.pricingModel || ''}
                    onChange={(e) => setFilter('pricingModel', e.target.value || '')}
                    className="w-full px-3 py-2 futuristic-card border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  >
                    <option value="">All Models</option>
                    <option value="monthly">Monthly</option>
                    <option value="one-time">One-time</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-zion-slate-light text-sm font-medium mb-2">Support Level</label>
                  <select
                    value={filters.supportLevel || ''}
                    onChange={(e) => setFilter('supportLevel', e.target.value || '')}
                    className="w-full px-3 py-2 futuristic-card border border-zion-cyan/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                  >
                    <option value="">All Levels</option>
                    <option value="basic">Basic</option>
                    <option value="premium">Premium</option>
                    <option value="enterprise">Enterprise</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-zion-slate-light text-sm font-medium mb-2">Price Range</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={filters.minPrice || ''}
                      onChange={(e) => setFilter('minPrice', e.target.value ? Number(e.target.value) : '')}
                      className="flex-1 px-3 py-2 futuristic-card border border-zion-cyan/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={filters.maxPrice || ''}
                      onChange={(e) => setFilter('maxPrice', e.target.value ? Number(e.target.value) : '')}
                      className="flex-1 px-3 py-2 futuristic-card border border-zion-cyan/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    />
                  </div>
                </div>
              </div>
=======
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-zion-blue-dark via-zion-blue-light to-zion-purple overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Revolutionary Technology Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Discover our cutting-edge portfolio of innovative technology solutions designed to transform your business. 
              From AI-powered analytics to quantum computing platforms, we're building the future today.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-zion-slate-light">
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Zap className="w-4 h-4 text-zion-cyan" />
                {services.length}+ Revolutionary Services
              </span>
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Shield className="w-4 h-4 text-zion-cyan" />
                99.9% Uptime Guarantee
              </span>
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Brain className="w-4 h-4 text-zion-cyan" />
                AI-Powered Solutions
              </span>
              <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-zion-cyan" />
                Competitive Pricing
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-16 px-6 bg-zion-blue-dark/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl"
          >
            <div className="grid md:grid-cols-4 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-zion-slate-light mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-zion-slate-light mb-2">Price Range</label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300"
                >
                  {priceRanges.map(range => (
                    <option key={range} value={range}>{getPriceRangeLabel(range)}</option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="block text-sm font-medium text-zion-slate-light mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300"
                >
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="popularity">Popularity</option>
                  <option value="new">Newest</option>
                </select>
              </div>

              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-zion-slate-light mb-2">Search</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-zion-blue-dark">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              Choose from our comprehensive range of technology services designed to drive innovation and growth. 
              Each service is carefully crafted to deliver real business value and competitive advantage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/20"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex gap-2">
                    {service.popular && (
                      <span className="bg-zion-cyan text-white text-xs px-2 py-1 rounded-full font-medium">Popular</span>
                    )}
                    {service.new && (
                      <span className="bg-zion-purple text-white text-xs px-2 py-1 rounded-full font-medium">New</span>
                    )}
                  </div>
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                  {service.name}
                </h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Price Comparison */}
                <div className="mb-4">
                  <div className="text-2xl font-bold text-zion-cyan">
                    {service.price}
                  </div>
                  <div className="text-sm text-zion-slate-light">
                    Market: {service.marketPrice}
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-zion-cyan" />
                    Key Benefits:
                  </h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <li key={idx} className="text-sm text-zion-slate-light flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-zion-cyan" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <Code className="w-4 h-4 text-zion-cyan" />
                    Technology:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technology.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="bg-white/10 text-zion-slate-light text-xs px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold py-3 px-4 rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105 transform"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-zion-slate-light text-lg mb-4">No services found matching your criteria</div>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchTerm('');
                  setPriceRange('all');
                }}
                className="bg-zion-cyan text-white px-6 py-3 rounded-lg hover:bg-zion-cyan-dark transition-colors"
              >
                Clear Filters
              </button>
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
            </motion.div>
          )}
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 futuristic-bg opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Enhanced Results Summary */}
          <div className="text-center mb-12">
            <p className="text-zion-slate-light neon-text">
              {isLoading ? 'Searching...' : `Showing ${totalResults} services`}
              {query && ` for "${query}"`}
              {selectedCategory !== 'all' && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Enhanced Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {paginatedResults.results.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <div className="group futuristic-card overflow-hidden border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-zion-cyan/20">
                  {/* Enhanced Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <OptimizedImage
                      src={`https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 futuristic-card text-zion-cyan text-xs font-medium rounded-full neon-border">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Enhanced Service Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:neon-text transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Enhanced Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 rounded-md futuristic-card text-zion-slate-light text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Enhanced Service Details */}
                    <div className="space-y-2 mb-4 text-sm text-zion-slate-light">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 neon-text" />
                        <span>Delivery: {service.estimatedDelivery}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 neon-text" />
                        <span>Support: {service.supportLevel}</span>
                      </div>
                    </div>
                    
                    {/* Enhanced Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold neon-text">
                        {service.currency}{service.price.toLocaleString()}
                        <span className="text-sm text-zion-slate-light font-normal">/{service.pricingModel}</span>
                      </div>
                      <button className="quantum-button px-4 py-2 font-medium transform hover:scale-105">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Pagination */}
          {paginatedResults.totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={!paginatedResults.hasPrevPage}
                className="px-4 py-2 futuristic-card text-zion-slate-light rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
              >
                Previous
              </button>
              
              <span className="px-4 py-2 text-zion-slate-light neon-text">
                Page {currentPage} of {paginatedResults.totalPages}
              </span>
              
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={!paginatedResults.hasNextPage}
                className="px-4 py-2 futuristic-card text-zion-slate-light rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
              >
                Next
              </button>
            </div>
          )}
=======
      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-zion-purple via-zion-blue-light to-zion-cyan relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-zion-purple/20 via-zion-blue-light/20 to-zion-cyan/20"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our technology services can help you achieve your goals and stay ahead of the competition. 
              Our team of experts is ready to guide you through the digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white text-zion-purple font-semibold py-4 px-8 rounded-lg hover:bg-zion-slate-light transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+13024640950"
                className="bg-transparent text-white font-semibold py-4 px-8 rounded-lg border-2 border-white hover:bg-white hover:text-zion-purple transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Call Now</span>
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
        </div>
      </section>
    </div>
  );
}