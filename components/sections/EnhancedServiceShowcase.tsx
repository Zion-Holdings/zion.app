import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Star, TrendingUp, Zap, Brain, Cpu, Shield, Rocket, Globe, Database, Lock, Cloud } from 'lucide-react';
import UltraFuturisticServiceCard from '../ui/UltraFuturisticServiceCard';
import { AnimatePresence } from 'framer-motion';

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
  targetAudience: string;
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
  variant: string;
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

interface EnhancedServiceShowcaseProps {
  services: Service[];
  title?: string;
  subtitle?: string;
  maxServices?: number;
}

const categoryIcons: { [key: string]: React.ComponentType<any> } = {
  'AI': Brain,
  'Quantum': Cpu,
  'Cybersecurity': Shield,
  'Cloud': Cloud,
  'Blockchain': Database,
  'IoT': Globe,
  'Space': Rocket,
  'Biotech': Brain,
  'Metaverse': Globe,
  'Autonomous': Zap,
  'DevOps': Zap,
  'Analytics': TrendingUp,
  'Infrastructure': Database,
  'Identity': Lock,
  'Backup': Database,
  'Network': Globe,
  'API': Database,
  'Migration': Cloud,
  'Zero Trust': Shield,
  'Data Center': Database
};

const categoryColors: { [key: string]: string } = {
  'AI': 'from-blue-500 to-cyan-600',
  'Quantum': 'from-purple-500 to-pink-600',
  'Cybersecurity': 'from-red-500 to-pink-600',
  'Cloud': 'from-blue-500 to-indigo-600',
  'Blockchain': 'from-orange-500 to-red-600',
  'IoT': 'from-teal-500 to-green-600',
  'Space': 'from-indigo-500 to-purple-600',
  'Biotech': 'from-green-500 to-teal-600',
  'Metaverse': 'from-purple-500 to-pink-600',
  'Autonomous': 'from-blue-500 to-cyan-600',
  'DevOps': 'from-green-500 to-emerald-600',
  'Analytics': 'from-indigo-500 to-blue-600',
  'Infrastructure': 'from-gray-500 to-slate-600',
  'Identity': 'from-yellow-500 to-orange-600',
  'Backup': 'from-emerald-500 to-green-600',
  'Network': 'from-cyan-500 to-blue-600',
  'API': 'from-purple-500 to-pink-600',
  'Migration': 'from-blue-500 to-cyan-600',
  'Zero Trust': 'from-red-500 to-pink-600',
  'Data Center': 'from-gray-500 to-slate-600'
};

export default function EnhancedServiceShowcase({ 
  services, 
  title = "Revolutionary AI, Quantum & IT Services", 
  subtitle = "Discover 1000+ cutting-edge solutions that deliver 1000% ROI through breakthrough technology",
  maxServices = 12 
}: EnhancedServiceShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Get unique categories from services
  const categories = ['All', ...Array.from(new Set(services.map(service => service.category)))];

  // Filter and sort services
  const filteredServices = services
    .filter(service => 
      (selectedCategory === 'All' || service.category === selectedCategory) &&
      (searchTerm === '' || 
        service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tagline.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'price-high':
          return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        case 'roi':
          return parseFloat(b.roi.replace(/[^0-9.]/g, '')) - parseFloat(a.roi.replace(/[^0-9.]/g, ''));
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        default:
          return b.popular ? 1 : -1;
      }
    })
    .slice(0, maxServices);

  const toggleFilters = () => setShowFilters(!showFilters);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-purple-500/10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Filters and Controls */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 backdrop-blur-sm"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-2 bg-gray-800/50 rounded-xl p-1 backdrop-blur-sm border border-gray-700/50">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid' 
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === 'list' 
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Toggle */}
            <button
              onClick={toggleFilters}
              className="flex items-center space-x-2 px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-gray-300 hover:text-white transition-all duration-200 backdrop-blur-sm"
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Expanded Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 backdrop-blur-sm"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Category</label>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                            selectedCategory === category
                              ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                              : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 hover:text-white'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sort Options */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Sort By</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                      <option value="roi">Highest ROI</option>
                      <option value="newest">Newest</option>
                    </select>
                  </div>

                  {/* Quick Stats */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">Quick Stats</label>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Total Services:</span>
                        <span className="text-cyan-400 font-semibold">{filteredServices.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Categories:</span>
                        <span className="text-purple-400 font-semibold">{categories.length - 1}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Avg Rating:</span>
                        <span className="text-yellow-400 font-semibold">
                          {(filteredServices.reduce((acc, service) => acc + service.rating, 0) / filteredServices.length).toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Services Grid */}
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <UltraFuturisticServiceCard
                service={service}
              />
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-300 mb-2">No services found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your search terms or filters</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSortBy('featured');
              }}
              className="px-6 py-3 bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/30 transition-all duration-200"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Load More Button */}
        {filteredServices.length >= maxServices && (
          <div className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
            >
              Load More Services
            </motion.button>
          </div>
        )}

        {/* Contact CTA */}
        <motion.div 
          className="text-center mt-20 p-8 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-cyan-500/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already leveraging our revolutionary AI and quantum solutions
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
            >
              Get Started Today
            </a>
            <a
              href="/pricing"
              className="px-8 py-4 border border-cyan-500/30 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Icon components for the search and view controls
const Search = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const Grid = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const List = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
  </svg>
);

const Filter = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
  </svg>
);