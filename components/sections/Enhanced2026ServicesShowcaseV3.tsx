import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Users, TrendingUp, DollarSign, Clock, CheckCircle, ArrowRight, Rocket, Brain, Shield, Globe, Zap, Atom, Microscope, Car, Leaf, Factory, Truck, FlaskConical, Dna, GraduationCap, ShieldCheck, Globe2, Bot, Crown, Infinity, Sparkles, Palette, Code, Database, Cloud, Smartphone, Palette as PaletteIcon, Search as SearchIcon, MessageSquare, FileText, Calendar, CreditCard, BarChart3, Settings, Code as CodeIcon, BookOpen, Activity, Database as DatabaseIcon, Play, Mail, Phone, MapPin, Filter, Grid, List, ChevronDown, ChevronUp, FlaskConical as FlaskConicalIcon, Dna as DnaIcon, Car as CarIcon, Leaf as LeafIcon, Factory as FactoryIcon, Truck as TruckIcon, Microscope as MicroscopeIcon, GraduationCap as GraduationCapIcon, ShieldCheck as ShieldCheckIcon, Brain as BrainIcon, Atom as AtomIcon, Globe2 as Globe2Icon, Bot as BotIcon, ChevronRight, ChevronDown as ChevronDownIcon, ChevronUp as ChevronUpIcon, Sparkles as SparklesIcon, FlaskConical as FlaskConicalIcon2, Dna as DnaIcon2, Car as CarIcon2, Leaf as LeafIcon2, Factory as FactoryIcon2, Truck as TruckIcon2, Microscope as MicroscopeIcon2, GraduationCap as GraduationCapIcon2, ShieldCheck as ShieldCheckIcon2, Brain as BrainIcon2, Atom as AtomIcon2, Globe2 as Globe2Icon2, Bot as BotIcon2, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { innovative2026MicroSaasServicesV3 } from '../../data/innovative-2026-micro-saas-v3';
import { emergingTech2026ServicesV3 } from '../../data/emerging-tech-2026-services-v3';
import { enterpriseIT2026ServicesV3 } from '../../data/enterprise-it-2026-services-v3';
import { nextGenAI2026ServicesV3 } from '../../data/next-gen-ai-2026-services-v3';

interface Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number;
}

export default function Enhanced2026ServicesShowcaseV3() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Combine all new services
  const allServices: Service[] = [
    ...innovative2026MicroSaasServicesV3,
    ...emergingTech2026ServicesV3,
    ...enterpriseIT2026ServicesV3,
    ...nextGenAI2026ServicesV3
  ];

  // Dynamic category counts
  const aiCount = allServices.filter(service => service.category?.includes('AI')).length;
  const quantumCount = allServices.filter(service => service.category?.includes('Quantum')).length;
  const enterpriseCount = allServices.filter(service => service.category?.includes('Enterprise')).length;
  const microSaasCount = allServices.filter(service => service.category?.includes('Micro SaaS')).length;
  const emergingCount = allServices.filter(service => service.category?.includes('Emerging')).length;
  const spaceCount = allServices.filter(service => service.category?.includes('Space')).length;
  const biotechCount = allServices.filter(service => service.category?.includes('Biotech')).length;
  const climateCount = allServices.filter(service => service.category?.includes('Climate')).length;
  const metaverseCount = allServices.filter(service => service.category?.includes('Metaverse')).length;
  const autonomousCount = allServices.filter(service => service.category?.includes('Autonomous')).length;
  const blockchainCount = allServices.filter(service => service.category?.includes('Blockchain')).length;
  const devopsCount = allServices.filter(service => service.category?.includes('DevOps')).length;
  const legalCount = allServices.filter(service => service.category?.includes('Legal')).length;
  const creativeCount = allServices.filter(service => service.category?.includes('Creative')).length;
  const supplyChainCount = allServices.filter(service => service.category?.includes('Supply Chain')).length;

  const categories = [
    { id: 'all', name: 'All Services', icon: '🚀', count: allServices.length },
    { id: 'ai', name: 'AI & Machine Learning', icon: '🧠', count: aiCount },
    { id: 'quantum', name: 'Quantum & Space', icon: '⚛️', count: quantumCount },
    { id: 'enterprise', name: 'Enterprise IT', icon: '🏢', count: enterpriseCount },
    { id: 'micro-saas', name: 'Micro SaaS', icon: '💻', count: microSaasCount },
    { id: 'emerging', name: 'Emerging Tech', icon: '🌟', count: emergingCount },
    { id: 'space', name: 'Space Technology', icon: '🚀', count: spaceCount },
    { id: 'biotech', name: 'Biotech & Healthcare', icon: '🧬', count: biotechCount },
    { id: 'climate', name: 'Climate & Environment', icon: '🌍', count: climateCount },
    { id: 'metaverse', name: 'Metaverse & 3D', icon: '🌐', count: metaverseCount },
    { id: 'autonomous', name: 'Autonomous Systems', icon: '🤖', count: autonomousCount },
    { id: 'blockchain', name: 'Blockchain & Web3', icon: '⛓️', count: blockchainCount },
    { id: 'devops', name: 'DevOps & Automation', icon: '🔧', count: devopsCount },
    { id: 'legal', name: 'Legal Technology', icon: '⚖️', count: legalCount },
    { id: 'creative', name: 'Creative AI', icon: '🎨', count: creativeCount },
    { id: 'supply-chain', name: 'Supply Chain', icon: '📦', count: supplyChainCount }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices', range: 'All' },
    { id: 'low', name: 'Under $500/month', range: 'Under $500' },
    { id: 'medium', name: '$500 - $2K/month', range: '$500 - $2K' },
    { id: 'high', name: '$2K - $10K/month', range: '$2K - $10K' },
    { id: 'enterprise', name: 'Over $10K/month', range: 'Over $10K' }
  ];

  // Filter and sort services
  const filteredServices = useMemo(() => {
    let filtered = allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || 
                             (selectedCategory === 'ai' && service.category?.includes('AI')) ||
                             (selectedCategory === 'quantum' && service.category?.includes('Quantum')) ||
                             (selectedCategory === 'enterprise' && service.category?.includes('Enterprise')) ||
                             (selectedCategory === 'micro-saas' && service.category?.includes('Micro SaaS')) ||
                             (selectedCategory === 'emerging' && service.category?.includes('Emerging')) ||
                             (selectedCategory === 'space' && service.category?.includes('Space')) ||
                             (selectedCategory === 'biotech' && service.category?.includes('Biotech')) ||
                             (selectedCategory === 'climate' && service.category?.includes('Climate')) ||
                             (selectedCategory === 'metaverse' && service.category?.includes('Metaverse')) ||
                             (selectedCategory === 'autonomous' && service.category?.includes('Autonomous')) ||
                             (selectedCategory === 'blockchain' && service.category?.includes('Blockchain')) ||
                             (selectedCategory === 'devops' && service.category?.includes('DevOps')) ||
                             (selectedCategory === 'legal' && service.category?.includes('Legal')) ||
                             (selectedCategory === 'creative' && service.category?.includes('Creative')) ||
                             (selectedCategory === 'supply-chain' && service.category?.includes('Supply Chain'));

      const price = parseInt(service.price.replace(/[^0-9]/g, ''));
      const matchesPrice = selectedPriceRange === 'all' ||
                          (selectedPriceRange === 'low' && price < 500) ||
                          (selectedPriceRange === 'medium' && price >= 500 && price < 2000) ||
                          (selectedPriceRange === 'high' && price >= 2000 && price < 10000) ||
                          (selectedPriceRange === 'enterprise' && price >= 10000);

      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort services
    switch (sortBy) {
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price':
        filtered.sort((a, b) => parseInt(a.price.replace(/[^0-9]/g, '')) - parseInt(b.price.replace(/[^0-9]/g, '')));
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'customers':
        filtered.sort((a, b) => b.customers - a.customers);
        break;
      case 'growth':
        filtered.sort((a, b) => parseInt(b.growthRate.replace(/[^0-9]/g, '')) - parseInt(a.growthRate.replace(/[^0-9]/g, '')));
        break;
      default:
        break;
    }

    return filtered;
  }, [allServices, searchTerm, selectedCategory, selectedPriceRange, sortBy]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Revolutionary 2026 Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our cutting-edge micro SAAS, AI, and emerging technology solutions that are transforming industries and driving innovation forward.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for services, technologies, or use cases..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none cursor-pointer"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id} className="bg-gray-800 text-white">
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>

              {/* Price Range Filter */}
              <div className="relative">
                <select
                  value={selectedPriceRange}
                  onChange={(e) => setSelectedPriceRange(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none cursor-pointer"
                >
                  {priceRanges.map((range) => (
                    <option key={range.id} value={range.id} className="bg-gray-800 text-white">
                      {range.name}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>

              {/* Sort By */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="name" className="bg-gray-800 text-white">Sort by Name</option>
                  <option value="price" className="bg-gray-800 text-white">Sort by Price</option>
                  <option value="rating" className="bg-gray-800 text-white">Sort by Rating</option>
                  <option value="customers" className="bg-gray-800 text-white">Sort by Customers</option>
                  <option value="growth" className="bg-gray-800 text-white">Sort by Growth</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>

              {/* View Mode Toggle */}
              <div className="flex bg-white/10 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex-1 px-4 py-2 rounded-lg transition-all ${
                    viewMode === 'grid' 
                      ? 'bg-purple-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="w-4 h-4 mx-auto" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`flex-1 px-4 py-2 rounded-lg transition-all ${
                    viewMode === 'list' 
                      ? 'bg-purple-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="w-4 h-4 mx-auto" />
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center text-gray-300">
              Showing {filteredServices.length} of {allServices.length} services
            </div>
          </div>
        </motion.div>

        {/* Services Grid/List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="mb-12"
        >
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                    {/* Service Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      {service.popular && (
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                          POPULAR
                        </span>
                      )}
                    </div>

                    {/* Service Info */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {service.tagline}
                    </p>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-white">
                        {service.price}
                        <span className="text-sm text-gray-400 font-normal">{service.period}</span>
                      </div>
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm text-white">{service.rating}</span>
                      </div>
                    </div>

                    {/* Features Preview */}
                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                      <div className="space-y-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 3 && (
                          <div className="text-xs text-gray-500 text-center">
                            +{service.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                      <div className="text-center">
                        <div className="text-gray-400">Customers</div>
                        <div className="text-white font-semibold">{service.customers.toLocaleString()}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-gray-400">Growth</div>
                        <div className="text-green-400 font-semibold">{service.growthRate}</div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-xl font-semibold text-center block hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="inline-block w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-6">
                    <div className="text-4xl flex-shrink-0">{service.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                          {service.name}
                        </h3>
                        {service.popular && (
                          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                            POPULAR
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 text-sm mb-2">{service.tagline}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span>Category: {service.category}</span>
                        <span>•</span>
                        <span>Rating: {service.rating}/5</span>
                        <span>•</span>
                        <span>{service.customers.toLocaleString()} customers</span>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-2xl font-bold text-white mb-2">
                        {service.price}
                        <span className="text-sm text-gray-400 font-normal">{service.period}</span>
                      </div>
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg font-semibold text-sm hover:from-purple-600 hover:to-pink-600 transition-all duration-300 inline-flex items-center"
                      >
                        Learn More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search criteria or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedPriceRange('all');
              }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our team of experts is ready to help you implement these cutting-edge solutions. 
              Get in touch to discuss your specific needs and discover how our services can drive your success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-purple-400 mb-2" />
                <div className="text-white font-semibold">+1 302 464 0950</div>
                <div className="text-gray-400 text-sm">Mobile</div>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-purple-400 mb-2" />
                <div className="text-white font-semibold">kleber@ziontechgroup.com</div>
                <div className="text-gray-400 text-sm">Email</div>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-purple-400 mb-2" />
                <div className="text-white font-semibold">364 E Main St STE 1008</div>
                <div className="text-gray-400 text-sm">Middletown DE 19709</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}