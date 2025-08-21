import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Star, TrendingUp, Zap, Brain, Cpu, Shield, Rocket, Globe, Database, Lock, Cloud, Eye, Timer, Sparkles, Filter, Search } from 'lucide-react';
import UltraFuturisticServiceCard from '../ui/UltraFuturisticServiceCard';

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
  marketPosition: string;
  targetAudience: string[];
  trialDays: number;
  setupTime: string;
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
  innovationLevel: 'Revolutionary' | 'Breakthrough' | 'Advanced' | 'Emerging';
  patentStatus: 'Patented' | 'Patent Pending' | 'Trade Secret' | 'Open Source';
  aiCapabilities?: string[];
  spaceCapabilities?: string[];
  quantumCapabilities?: string[];
  iotCapabilities?: string[];
  edgeCapabilities?: string[];
  securityCapabilities?: string[];
  blockchainCapabilities?: string[];
  marketDisruption: string;
  variant: string;
}

interface UltraFuturistic2029ServiceShowcaseProps {
  services: Service[];
  title?: string;
  subtitle?: string;
  maxServices?: number;
}

const categoryColors: { [key: string]: string } = {
  'AI & Consciousness': 'from-purple-600 to-pink-600',
  'Quantum & Neuroscience': 'from-indigo-600 to-purple-600',
  'Space Colonization': 'from-red-600 to-orange-600',
  'Space Mining': 'from-yellow-600 to-orange-600',
  'Space Architecture': 'from-green-600 to-teal-600',
  'Space Energy': 'from-yellow-500 to-orange-500',
  'AI & Business': 'from-blue-600 to-cyan-600',
  'Quantum & Time': 'from-green-600 to-emerald-600',
  'AI & Augmented Reality': 'from-orange-600 to-red-600',
  'AI & Emotional Intelligence': 'from-pink-600 to-rose-600',
  'AI & Transportation': 'from-blue-600 to-indigo-600',
  'AI & Creative Content': 'from-purple-600 to-pink-600',
  'AI & Healthcare': 'from-green-600 to-emerald-600',
  'AI & Finance': 'from-yellow-600 to-orange-600',
  'Cybersecurity & Quantum': 'from-indigo-600 to-purple-600',
  'Blockchain & Identity': 'from-green-600 to-teal-600',
  'AI & Cybersecurity': 'from-red-600 to-pink-600',
  'Blockchain & Supply Chain': 'from-blue-600 to-cyan-600',
  'DeFi & AI': 'from-yellow-500 to-orange-500',
  'IoT & Smart Cities': 'from-blue-600 to-cyan-600',
  'IoT & Industrial': 'from-gray-600 to-blue-600',
  'IoT & Environment': 'from-green-600 to-emerald-600',
  'Edge Computing & AI': 'from-yellow-600 to-orange-600',
  'IoT & Security': 'from-red-600 to-pink-600'
};

const categoryIcons: { [key: string]: any } = {
  'AI & Consciousness': Brain,
  'Quantum & Neuroscience': Cpu,
  'Space Colonization': Rocket,
  'Space Mining': Zap,
  'Space Architecture': Globe,
  'Space Energy': Sparkles,
  'AI & Business': Database,
  'Quantum & Time': Timer,
  'AI & Augmented Reality': Eye,
  'AI & Emotional Intelligence': Brain,
  'AI & Transportation': Globe,
  'AI & Creative Content': Sparkles,
  'AI & Healthcare': Shield,
  'AI & Finance': TrendingUp,
  'Cybersecurity & Quantum': Lock,
  'Blockchain & Identity': Shield,
  'AI & Cybersecurity': Shield,
  'Blockchain & Supply Chain': Database,
  'DeFi & AI': TrendingUp,
  'IoT & Smart Cities': Globe,
  'IoT & Industrial': Database,
  'IoT & Environment': Globe,
  'Edge Computing & AI': Cpu,
  'IoT & Security': Lock
};

const UltraFuturistic2029ServiceShowcase: React.FC<UltraFuturistic2029ServiceShowcaseProps> = ({
  services,
  title = "2029 Ultra-Futuristic Innovations",
  subtitle = "Experience the future of technology with our revolutionary services",
  maxServices = 20
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'innovation' | 'price' | 'rating' | 'popularity'>('innovation');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(services.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = services
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'innovation':
          const innovationOrder = { 'Revolutionary': 4, 'Breakthrough': 3, 'Advanced': 2, 'Emerging': 1 };
          return (innovationOrder[b.innovationLevel] || 0) - (innovationOrder[a.innovationLevel] || 0);
        case 'price':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        default:
          return 0;
      }
    })
    .slice(0, maxServices);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-black/50 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-quantum-gradient-2029 opacity-30" />
      <div className="absolute inset-0 holographic-matrix-2029 opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-glow-2029">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 neon-glow-2029">{services.length}+</div>
              <div className="text-gray-400">Innovative Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 neon-glow-2029">
                {services.filter(s => s.innovationLevel === 'Revolutionary').length}
              </div>
              <div className="text-gray-400">Revolutionary</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 neon-glow-2029">
                {services.filter(s => s.popular).length}
              </div>
              <div className="text-gray-400">Popular</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 neon-glow-2029">
                {Math.round(services.reduce((acc, s) => acc + s.rating, 0) / services.length * 10) / 10}
              </div>
              <div className="text-gray-400">Avg Rating</div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search innovative services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.slice(0, 8).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                      : 'bg-black/50 text-gray-300 hover:bg-black/70 border border-gray-600 hover:border-cyan-500/50'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category}
                </button>
              ))}
            </div>

            {/* Sort and Advanced Filters */}
            <div className="flex items-center gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 bg-black/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="innovation">Sort by Innovation</option>
                <option value="price">Sort by Price</option>
                <option value="rating">Sort by Rating</option>
                <option value="popularity">Sort by Popularity</option>
              </select>
              
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-2 bg-black/50 border border-gray-600 rounded-lg text-white hover:bg-black/70 hover:border-cyan-500/50 transition-all flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 mt-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Innovation Level</label>
                  <div className="space-y-2">
                    {['Revolutionary', 'Breakthrough', 'Advanced', 'Emerging'].map((level) => (
                      <label key={level} className="flex items-center">
                        <input type="checkbox" className="mr-2 text-cyan-500" />
                        <span className="text-gray-300">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-cyan-500" />
                      <span className="text-gray-300">Under $5K/month</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-cyan-500" />
                      <span className="text-gray-300">$5K - $20K/month</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-cyan-500" />
                      <span className="text-gray-300">Over $20K/month</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Technology</label>
                  <div className="space-y-2">
                    {['AI', 'Quantum', 'Blockchain', 'IoT', 'Edge Computing', 'Cybersecurity'].map((tech) => (
                      <label key={tech} className="flex items-center">
                        <input type="checkbox" className="mr-2 text-cyan-500" />
                        <span className="text-gray-300">{tech}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group"
            >
              <UltraFuturisticServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Call to Action */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-gray-300 mb-4">No services found</h3>
            <p className="text-gray-500 mb-8">Try adjusting your search criteria or browse all categories</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-600 transition-all transform hover:scale-105"
            >
              View All Services
            </button>
          </motion.div>
        )}

        {/* Enhanced Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join the future of technology with our cutting-edge services. 
              Get in touch to discuss how we can revolutionize your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-medium hover:from-cyan-600 hover:to-purple-600 transition-all transform hover:scale-105">
                Schedule a Demo
              </button>
              <button className="px-8 py-3 bg-transparent border border-cyan-500 text-cyan-400 rounded-xl font-medium hover:bg-cyan-500/10 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraFuturistic2029ServiceShowcase;