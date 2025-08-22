import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Star, CheckCircle, ArrowRight, 
  Shield, Cpu, Database, Cloud, Lock, Users, 
  Building, Globe, Zap, TrendingUp, Award,
  Phone, Mail, MapPin, ExternalLink, Briefcase,
  Server, Network, Key, Eye, ShieldCheck,
  BarChart3, Settings, Code, GitBranch, Workflow
} from 'lucide-react';

// Import enterprise IT solutions
import { enterpriseITSolutions } from '../data/2034-enterprise-it-solutions';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

// Price helpers to normalize varying data shapes
const getMonthlyPriceValue = (solution: any): number => {
  if (solution?.price?.monthly) return Number(solution.price.monthly) || 0;
  if (solution?.pricing?.starter) return parseInt(String(solution.pricing.starter).replace(/[^0-9]/g, '')) || 0;
  return 0;
};

const getStarterPriceLabel = (solution: any): string => {
  if (solution?.pricing?.starter) return String(solution.pricing.starter);
  if (solution?.price?.monthly) return `$${solution.price.monthly}/month`;
  if (typeof solution?.price === 'string') return solution.price;
  return 'Contact for pricing';
};

const getProPriceLabel = (solution: any): string => {
  if (solution?.pricing?.professional) return String(solution.pricing.professional);
  if (solution?.price?.yearly) return `$${solution.price.yearly}/year`;
  return 'Custom/annual available';
};

const solutionCategories = [
  {
    id: 'all',
    title: '🏢 All Enterprise Solutions',
    description: 'Complete portfolio of enterprise IT solutions',
    icon: Building,
    color: 'from-blue-500 to-purple-500',
    solutions: enterpriseITSolutions,
    gradient: 'from-blue-500/20 to-purple-500/20'
  },
  {
    id: 'Enterprise Security',
    title: '🔒 Enterprise Security',
    description: 'Advanced security solutions for enterprise protection',
    icon: Shield,
    color: 'from-red-500 to-pink-500',
    solutions: enterpriseITSolutions.filter(s => s.category === 'Enterprise Security'),
    gradient: 'from-red-500/20 to-pink-500/20'
  },
  {
    id: 'DevOps & Automation',
    title: '⚙️ DevOps & Automation',
    description: 'Intelligent automation and DevOps solutions',
    icon: GitBranch,
    color: 'from-green-500 to-emerald-500',
    solutions: enterpriseITSolutions.filter(s => s.category === 'DevOps & Automation'),
    gradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    id: 'Data & Analytics',
    title: '📊 Data & Analytics',
    description: 'Enterprise data analytics and business intelligence',
    icon: BarChart3,
    color: 'from-indigo-500 to-blue-500',
    solutions: enterpriseITSolutions.filter(s => s.category === 'Data & Analytics'),
    gradient: 'from-indigo-500/20 to-blue-500/20'
  },
  {
    id: 'Cloud Services',
    title: '☁️ Cloud Services',
    description: 'Cloud migration and transformation solutions',
    icon: Cloud,
    color: 'from-cyan-500 to-blue-500',
    solutions: enterpriseITSolutions.filter(s => s.category === 'Cloud Services'),
    gradient: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    id: 'Cybersecurity',
    title: '🛡️ Cybersecurity',
    description: 'Comprehensive cybersecurity and threat protection',
    icon: ShieldCheck,
    color: 'from-orange-500 to-red-500',
    solutions: enterpriseITSolutions.filter(s => s.category === 'Cybersecurity'),
    gradient: 'from-orange-500/20 to-red-500/20'
  }
];

export default function EnterpriseSolutionsShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setSelectedPriceRange] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredSolutions = solutionCategories
    .find(cat => cat.id === selectedCategory)?.solutions || []
    .filter(solution => {
      const matchesSearch = solution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           solution.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           solution.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      
      if (priceRange === 'all') return matchesSearch;
      
      // Handle different pricing structures
      let priceValue = getMonthlyPriceValue(solution);
      
      switch (priceRange) {
        case 'low':
          return matchesSearch && priceValue < 3000;
        case 'medium':
          return matchesSearch && priceValue >= 3000 && priceValue < 8000;
        case 'high':
          return matchesSearch && priceValue >= 8000;
        default:
          return matchesSearch;
      }
    });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Enterprise Security':
        return <Shield className="w-6 h-6 text-red-400" />;
      case 'DevOps & Automation':
        return <GitBranch className="w-6 h-6 text-green-400" />;
      case 'Data & Analytics':
        return <BarChart3 className="w-6 h-6 text-indigo-400" />;
      case 'Cloud Services':
        return <Cloud className="w-6 h-6 text-cyan-400" />;
      case 'Cybersecurity':
        return <ShieldCheck className="w-6 h-6 text-orange-400" />;
      default:
        return <Building className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <>
      <Head>
        <title>Enterprise IT Solutions Showcase | Zion Tech Group - Security, DevOps, Analytics, Cloud</title>
        <meta name="description" content="Discover our comprehensive enterprise IT solutions: Zero Trust Security, AI-Powered DevOps, Data Analytics, Cloud Migration, and Cybersecurity Operations Center." />
        <meta name="keywords" content="enterprise IT solutions, zero trust security, DevOps automation, data analytics, cloud migration, cybersecurity, enterprise software" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Enterprise IT Solutions Showcase | Zion Tech Group" />
        <meta property="og:description" content="Comprehensive enterprise IT solutions for security, DevOps, analytics, and cloud transformation." />
        <meta property="og:url" content="https://ziontechgroup.com/enterprise-solutions-showcase" />
        <meta property="og:type" content="website" />
        
        {/* Contact Information */}
        <meta name="contact:phone" content="+1 302 464 0950" />
        <meta name="contact:email" content="kleber@ziontechgroup.com" />
        <meta name="contact:address" content="364 E Main St STE 1008 Middletown DE 19709" />
        
        <link rel="canonical" href="https://ziontechgroup.com/enterprise-solutions-showcase" />
      </Head>

      <div className="min-h-screen bg-black text-white pt-24">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
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
                <Building className="w-4 h-4 mr-2 text-blue-400" />
                Enterprise IT Solutions
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Enterprise <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent">Solutions</span> for the Digital Age
              </h1>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your enterprise with cutting-edge IT solutions: Zero Trust Security, 
                AI-Powered DevOps, Advanced Analytics, Cloud Migration, and 24/7 Cybersecurity Operations.
              </p>
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
                    placeholder="Search enterprise solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-black/50 border border-blue-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {solutionCategories.map((category) => (
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
                      <category.icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{category.title.replace(/[\u{1F5BC}\u{1F512}\u{2699}\u{1F4CA}\u{2601}\u{1F6E1}]/gu, '').trim()}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Price Filter */}
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-blue-400" />
                  <select
                    value={priceRange}
                    onChange={(e) => setSelectedPriceRange(e.target.value)}
                    className="px-3 py-2 bg-black/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
                  >
                    <option value="all">All Prices</option>
                    <option value="low">Under $3K/month</option>
                    <option value="medium">$3K - $8K/month</option>
                    <option value="high">Over $8K/month</option>
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
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-lg border transition-all duration-200 ${
                      viewMode === 'list'
                        ? 'bg-blue-500/20 border-blue-500 text-blue-300'
                        : 'bg-black/50 border-blue-500/30 text-gray-400 hover:text-blue-300'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Solutions Count */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-8"
            >
              <p className="text-gray-300">
                Showing <span className="text-blue-400 font-semibold">{filteredSolutions.length}</span> enterprise solutions
                {selectedCategory !== 'all' && ` in ${solutionCategories.find(cat => cat.id === selectedCategory)?.title.replace(/[\u{1F5BC}\u{1F512}\u{2699}\u{1F4CA}\u{2601}\u{1F6E1}]/gu, '').trim()}`}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid/List */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredSolutions.length > 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={viewMode === 'grid' 
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "space-y-6"
                }
              >
                {filteredSolutions.map((solution, index) => (
                  <motion.div
                    key={solution.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className={`group relative ${
                      viewMode === 'list' ? 'flex items-start space-x-6' : ''
                    }`}
                  >
                    <div className={`relative bg-gradient-to-br ${solutionCategories.find(cat => cat.id === solution.category)?.gradient || 'from-gray-500/20 to-slate-500/20'} border border-blue-500/30 rounded-2xl p-6 h-full backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 ${
                      viewMode === 'list' ? 'flex-1' : ''
                    }`}>
                      {/* Category Badge */}
                      <div className="absolute top-4 right-4 flex items-center space-x-2">
                        {getCategoryIcon(solution.category)}
                        <span className="text-xs font-medium text-blue-300 bg-black/50 px-2 py-1 rounded-full">
                          {solution.category}
                        </span>
                      </div>

                      {/* Solution Header */}
                      <div className="mb-6">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                          {solution.name}
                        </h3>
                        <p className="text-blue-300 text-sm font-medium mb-2">
                          {solution.tagline}
                        </p>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {solution.description}
                        </p>
                      </div>

                      {/* Features Preview */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-blue-300 mb-3">Key Features</h4>
                        <div className="space-y-2">
                          {solution.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-xs text-gray-300">{feature}</span>
                            </div>
                          ))}
                          {solution.features.length > 3 && (
                            <div className="text-xs text-blue-400">
                              +{solution.features.length - 3} more features
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-blue-300 mb-2">Starting at</h4>
                        <div className="text-2xl font-bold text-white">
                          {getStarterPriceLabel(solution)}
                        </div>
                        <div className="text-xs text-gray-400">
                          {getProPriceLabel(solution)}
                        </div>
                      </div>

                      {/* Market Info */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400">Market Size:</span>
                          <span className="text-green-400 font-medium">{solution.marketSize}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs mt-1">
                          <span className="text-gray-400">Customers:</span>
                          <span className="text-blue-400 font-medium">{solution.customerCount}+</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col space-y-3">
                        <motion.a
                          href={solution.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg shadow-blue-500/25"
                        >
                          <span>View Demo</span>
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                        
                        <motion.a
                          href={`mailto:${solution.contact}?subject=Inquiry about ${solution.name}`}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-center space-x-2 px-4 py-3 bg-black/50 border border-blue-500/30 text-blue-300 font-medium rounded-lg hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-200"
                        >
                          <Mail className="w-4 h-4" />
                          <span>Contact Sales</span>
                        </motion.a>
                      </div>

                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center py-20"
              >
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No solutions found</h3>
                <p className="text-gray-300 mb-8">
                  Try adjusting your search terms or filters to find the enterprise solutions you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-red-500/10 border border-blue-500/30 rounded-3xl p-12 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Enterprise</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join leading enterprises that trust Zion Tech Group for their digital transformation. 
                Our expert team is ready to guide you through your enterprise IT journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-2xl shadow-blue-500/25"
                >
                  <span>Get Enterprise Consultation</span>
                  <ArrowRight className="w-6 h-6" />
                </motion.a>
                
                <motion.a
                  href="tel:+13024640950"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-black/50 border-2 border-blue-500/50 text-blue-300 font-bold text-lg rounded-xl hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-200"
                >
                  <Phone className="w-6 h-6" />
                  <span>Call +1 302 464 0950</span>
                </motion.a>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}