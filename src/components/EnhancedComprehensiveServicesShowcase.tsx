import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  MapPin, 
  ArrowRight,
  Brain,
  Cloud,
  Shield,
  Zap,
  Globe,
  Smartphone,
  BarChart3,
  Database
} from 'lucide-react';
import { ENHANCED_SERVICES_DATA } from '../data/enhancedServicesData';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  tags: string[];
  rating: number;
  reviewCount: number;
  availability: string;
  location: string;
  aiScore?: number;
}

const categoryIcons: Record<string, React.ReactNode> = {
  'AI & Automation': <Brain className="w-6 h-6" />,
  'AI & Content': <Brain className="w-6 h-6" />,
  'AI & Security': <Shield className="w-6 h-6" />,
  'Cloud & Infrastructure': <Cloud className="w-6 h-6" />,
  'DevOps & Automation': <Zap className="w-6 h-6" />,
  'Cybersecurity': <Shield className="w-6 h-6" />,
  'Data & Analytics': <BarChart3 className="w-6 h-6" />,
  'Web & Mobile': <Smartphone className="w-6 h-6" />,
  'Digital Transformation': <Globe className="w-6 h-6" />,
  'IT Consulting': <Database className="w-6 h-6" />
};

export function EnhancedComprehensiveServicesShowcase() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'rating' | 'price' | 'newest'>('rating');

  const categories = ['All', ...Array.from(new Set(ENHANCED_SERVICES_DATA.map(service => service.category)))];

  const filteredServices = useMemo(() => {
    let filtered = ENHANCED_SERVICES_DATA;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return a.price - b.price;
        case 'newest':
          return new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime();
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

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
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Comprehensive Service Portfolio
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover our extensive range of micro SAAS, AI, and IT services designed to transform your business
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/50 transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-400'
                      : 'bg-white/10 border-white/20 text-white/80 hover:border-cyan-400/30 hover:text-cyan-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'rating' | 'price' | 'newest')}
              className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400/50 transition-all duration-300"
            >
              <option value="rating">Sort by Rating</option>
              <option value="price">Sort by Price</option>
              <option value="newest">Sort by Newest</option>
            </select>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-cyan-400/50 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-500/20 rounded-lg border border-cyan-400/30">
                    {categoryIcons[service.category] || <Globe className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-sm text-cyan-400">{service.category}</p>
                  </div>
                </div>
                {service.aiScore && (
                  <div className="text-right">
                    <div className="text-xs text-gray-400">AI Score</div>
                    <div className="text-lg font-bold text-green-400">{service.aiScore}%</div>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-white/80 text-sm mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded border border-cyan-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Service Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>{service.rating} ({service.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>{service.availability}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span>{service.location}</span>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-white/20">
                <div className="text-2xl font-bold text-white">
                  {service.currency}{service.price.toLocaleString()}
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2 group-hover:gap-3">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12 text-white/60"
        >
          Showing {filteredServices.length} of {ENHANCED_SERVICES_DATA.length} services
        </motion.div>
      </div>
    </section>
  );
}