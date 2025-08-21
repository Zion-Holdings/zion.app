import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Star, TrendingUp, Zap, Brain, Cpu, Shield, Rocket, Globe, Database, Lock, Cloud } from 'lucide-react';
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
  targetAudience: string | string[];
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

const categoryIcons: { [key: string]: any } = {
  'AI': Brain,
  'Quantum': Zap,
  'Cybersecurity': Shield,
  'Cloud': Cloud,
  'Blockchain': Lock,
  'IoT': Cpu,
  'Space': Rocket,
  'Biotech': Database,
  'Metaverse': Globe,
  'Autonomous': Brain,
  'DevOps': Zap,
  'Analytics': TrendingUp,
  'Infrastructure': Cloud,
  'Identity': Shield,
  'Backup': Database,
  'Network': Cloud,
  'API': Zap,
  'Migration': Cloud,
  'Zero Trust': Shield,
  'Data Center': Database
};

export default function EnhancedServiceShowcase({
  services,
  title = "Revolutionary AI, Quantum & IT Services",
  subtitle = "Discover 1000+ cutting-edge solutions that will transform your business",
  maxServices = 20
}: EnhancedServiceShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'popular' | 'price' | 'rating' | 'newest'>('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(services.map(s => s.category.split('&')[0].trim())))];
  
  // Filter and sort services
  const filteredServices = services
    .filter(service => selectedCategory === 'All' || service.category.includes(selectedCategory))
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.popular ? 1 : -1;
        case 'price':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''));
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          {/* Service Statistics */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                {services.length}+
              </div>
              <div className="text-gray-400">Total Services</div>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                {services.filter(s => s.category.includes('AI')).length}+
              </div>
              <div className="text-gray-400">AI Services</div>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">
                {services.filter(s => s.category.includes('Quantum')).length}+
              </div>
              <div className="text-gray-400">Quantum Solutions</div>
            </motion.div>
            
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                {services.filter(s => s.category.includes('IT')).length}+
              </div>
              <div className="text-gray-400">IT Services</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Filters and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const Icon = categoryIcons[category] || Globe;
                const isActive = selectedCategory === category;
                
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                      isActive
                        ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400'
                        : 'border-gray-600 text-gray-400 hover:border-gray-500 hover:text-gray-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="popular">Most Popular</option>
                <option value="price">Price: Low to High</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>

              <div className="flex border border-gray-600 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-cyan-400 text-black'
                      : 'bg-gray-800 text-gray-400 hover:text-gray-300'
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 transition-colors ${
                    viewMode === 'list'
                      ? 'bg-cyan-400 text-black'
                      : 'bg-gray-800 text-gray-400 hover:text-gray-300'
                  }`}
                >
                  List
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className={`grid gap-6 ${
            viewMode === 'grid'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1'
          }`}
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={viewMode === 'list' ? 'col-span-1' : ''}
            >
              <UltraFuturisticServiceCard
                service={service}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        {filteredServices.length < services.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Load More Services
            </button>
          </motion.div>
        )}

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contact our team of experts to discuss how our revolutionary services can drive your business forward with unprecedented ROI and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-cyan-400">
                <span>📱</span>
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <span>✉️</span>
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2 text-pink-400">
                <span>📍</span>
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}