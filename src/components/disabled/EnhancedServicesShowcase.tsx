import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FuturisticNeonButton, CyberpunkButton, QuantumButton, NeonButton } from '@/components/ui/FuturisticNeonButton';
import { FuturisticAnimatedBackground } from '@/components/ui/FuturisticAnimatedBackground';
import { ENHANCED_SERVICES_DATA, ENHANCED_SERVICE_CATEGORIES, SERVICE_PRICING_TIERS, SERVICE_BENEFITS, MARKET_ANALYSIS } from '@/data/enhancedServicesData';
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  Clock, 
  Users,
  CheckCircle,
  ExternalLink,
  Filter,
  Search,
  Grid,
  List
} from 'lucide-react';

interface EnhancedServicesShowcaseProps {
  className?: string;
}

export const EnhancedServicesShowcase: React.FC<EnhancedServicesShowcaseProps> = ({ className = '' }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'aiScore' | 'newest'>('aiScore');

  // Filter and sort services
  const filteredServices = ENHANCED_SERVICES_DATA
    .filter(service => {
      const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price;
        case 'rating':
          return b.rating - a.rating;
        case 'aiScore':
          return b.aiScore - a.aiScore;
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });

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
    <div className={`relative min-h-screen ${className}`}>
      {/* Futuristic Background */}
      <FuturisticAnimatedBackground variant="cyberpunk" intensity="medium" />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Next-Gen Tech Services
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-4xl mx-auto">
            Discover cutting-edge AI, blockchain, quantum computing, and enterprise solutions 
            that will transform your business into the future
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Services', value: ENHANCED_SERVICES_DATA.length, icon: Zap },
              { label: 'Categories', value: ENHANCED_SERVICE_CATEGORIES.length, icon: Grid },
              { label: 'AI-Powered', value: ENHANCED_SERVICES_DATA.filter(s => s.aiScore > 90).length, icon: Star },
              { label: 'Global Reach', value: '150+', icon: Globe }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-zinc-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className="bg-cyan-500 hover:bg-cyan-600 text-white border-cyan-500"
            >
              All Services ({ENHANCED_SERVICES_DATA.length})
            </Button>
            {ENHANCED_SERVICE_CATEGORIES.filter(cat => cat.featured).map(category => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
                className="bg-purple-500 hover:bg-purple-600 text-white border-purple-500"
              >
                {category.icon} {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Search and Controls */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search services, technologies, or features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-3 bg-zinc-900/50 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="aiScore">Sort by AI Score</option>
              <option value="rating">Sort by Rating</option>
              <option value="price">Sort by Price</option>
              <option value="newest">Sort by Newest</option>
            </select>
            
            <Button
              variant="outline"
              onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
              className="px-4 py-3 border-zinc-700 text-zinc-300 hover:bg-zinc-800"
            >
              {viewMode === 'grid' ? <List className="w-5 h-5" /> : <Grid className="w-5 h-5" />}
            </Button>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                layout
                className={viewMode === 'grid' ? '' : 'flex gap-4'}
              >
                <Card className={`bg-zinc-900/50 border-zinc-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <CardHeader className="relative">
                    {service.featured && (
                      <Badge className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                        Featured
                      </Badge>
                    )}
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl text-white hover:text-cyan-400 transition-colors">
                        {service.title}
                      </CardTitle>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm">{service.rating}</span>
                      </div>
                    </div>
                    <CardDescription className="text-zinc-300 text-sm line-clamp-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-zinc-800 text-zinc-300 border-zinc-600 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Service Details */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zinc-400">AI Score:</span>
                        <span className="text-cyan-400 font-bold">{service.aiScore}%</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zinc-400">Price:</span>
                        <span className="text-green-400 font-bold">
                          {service.currency}{service.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zinc-400">Availability:</span>
                        <span className="text-blue-400">{service.availability}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zinc-400">Location:</span>
                        <span className="text-purple-400">{service.location}</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <CyberpunkButton
                        size="sm"
                        className="flex-1"
                        onClick={() => window.open(`/services/${service.id}`, '_blank')}
                      >
                        Learn More
                      </CyberpunkButton>
                      <QuantumButton
                        size="sm"
                        variant="success"
                        onClick={() => window.open('/request-quote', '_blank')}
                      >
                        Get Quote
                      </QuantumButton>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-zinc-300 mb-2">No services found</h3>
            <p className="text-zinc-400 mb-6">Try adjusting your search criteria or browse all categories</p>
            <Button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="bg-cyan-500 hover:bg-cyan-600"
            >
              View All Services
            </Button>
          </motion.div>
        )}

        {/* Market Analysis Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Market Insights & Competitive Analysis
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pricing Analysis */}
            <Card className="bg-zinc-900/50 border-zinc-700">
              <CardHeader>
                <CardTitle className="text-cyan-400 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Market Pricing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(MARKET_ANALYSIS.averagePrices).slice(0, 5).map(([category, price]) => (
                    <div key={category} className="flex justify-between text-sm">
                      <span className="text-zinc-400">{category}</span>
                      <span className="text-green-400 font-bold">{price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Market Trends */}
            <Card className="bg-zinc-900/50 border-zinc-700">
              <CardHeader>
                <CardTitle className="text-purple-400 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Market Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {MARKET_ANALYSIS.marketTrends.map((trend, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-zinc-300">{trend}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Competitive Advantages */}
            <Card className="bg-zinc-900/50 border-zinc-700">
              <CardHeader>
                <CardTitle className="text-yellow-400 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Our Advantages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {MARKET_ANALYSIS.competitiveAdvantages.map((advantage, index) => (
                    <div key={index} className="flex items-start gap-2 text-sm">
                      <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-zinc-300">{advantage}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already leveraging our cutting-edge technology services 
            to stay ahead of the competition
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CyberpunkButton
              size="lg"
              onClick={() => window.open('/contact', '_blank')}
              icon={<Users className="w-5 h-5" />}
            >
              Schedule Consultation
            </CyberpunkButton>
            <NeonButton
              size="lg"
              variant="success"
              onClick={() => window.open('/request-quote', '_blank')}
              icon={<ExternalLink className="w-5 h-5" />}
            >
              Get Custom Quote
            </NeonButton>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedServicesShowcase;