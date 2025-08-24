import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Star, TrendingUp, Zap, Shield, Brain, Code, BarChart3, Settings, Globe, Smartphone, Cloud, Lock, Database } from 'lucide-react';
import { COMPREHENSIVE_SERVICES, serviceCategories, ComprehensiveService } from '../data/comprehensiveServices';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select } from './ui/select';
import FuturisticNeonButton from './ui/FuturisticNeonButton';

const categoryIcons = {
  'AI & Machine Learning': Brain,
  'Cloud & Infrastructure': Cloud,
  'Cybersecurity': Lock,
  'Data Analytics': BarChart3,
  'Digital Transformation': TrendingUp,
  'E-commerce Solutions': Globe,
  'Mobile Development': Smartphone,
  'Web Development': Code,
  'Business Process Automation': Zap,
  'IT Consulting': Settings
};

const ComprehensiveServicesShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');

  const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.title.localeCompare(b.title);
      case 'price':
        const aMinPrice = Math.min(...a.pricing.map(p => p.amount));
        const bMinPrice = Math.min(...b.pricing.map(p => p.amount));
        return aMinPrice - bMinPrice;
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const categories = ['all', ...serviceCategories];

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
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark relative overflow-hidden">
      {/* Header Section */}
      <motion.div 
        className="relative z-10 text-center py-20 px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Comprehensive Services
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover our comprehensive range of professional services designed to transform your business and drive innovation
        </motion.p>
        <motion.div 
          className="flex flex-wrap justify-center gap-4 text-zion-cyan"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6" />
            <span>AI-Powered</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6" />
            <span>Enterprise Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6" />
            <span>Professional Grade</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Search and Filter Section */}
      <motion.div 
        className="relative z-10 max-w-6xl mx-auto px-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Card className="bg-zion-blue-dark/50 backdrop-blur-lg border-zion-blue-light/30 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <Input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan"
              />
            </div>

            {/* Category Filter */}
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <option value="all">All Categories</option>
              {categories.filter(cat => cat !== 'all').map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </Select>

            {/* Sort By */}
            <Select
              value={sortBy}
              onValueChange={(value) => setSortBy(value as 'name' | 'price' | 'category')}
            >
              <option value="name">Sort by Name</option>
              <option value="price">Sort by Price</option>
              <option value="category">Sort by Category</option>
            </Select>
          </div>
        </Card>
      </motion.div>

      {/* Services Grid */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedServices.map((service) => {
            const CategoryIcon = categoryIcons[service.category as keyof typeof categoryIcons] || Globe;
            const minPrice = Math.min(...service.pricing.map(p => p.amount));
            const maxPrice = Math.max(...service.pricing.map(p => p.amount));
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className="bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300 h-full overflow-hidden">
                  {/* Service Header */}
                  <div className="p-6 border-b border-zion-blue-light/20">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg">
                          <CategoryIcon className="w-6 h-6 text-white" />
                        </div>
                        <Badge variant="outline" className="border-zion-cyan/50 text-zion-cyan">
                          {service.category}
                        </Badge>
                      </div>
                      {service.status === 'coming-soon' && (
                        <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple border-zion-purple/30">
                          Coming Soon
                        </Badge>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-zion-slate-light text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Pricing */}
                    <div className="bg-zion-slate-dark/30 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-zion-slate-light text-sm">Starting from</span>
                        <span className="text-zion-cyan font-bold">
                          ${minPrice}
                          {minPrice !== maxPrice && ` - $${maxPrice}`}
                        </span>
                      </div>
                      <div className="text-xs text-zion-slate-light">
                        {service.pricing.length} pricing options available
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-zion-cyan" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 gap-2 mb-4">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 4 && (
                        <div className="text-xs text-zion-cyan">
                          +{service.features.length - 4} more features
                        </div>
                      )}
                    </div>

                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-zion-cyan" />
                        Benefits
                      </h4>
                      <div className="text-sm text-zion-slate-light">
                        {service.benefits[0]} • {service.benefits[1]}
                      </div>
                    </div>

                    {/* Support Level */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-zion-cyan" />
                        Support Level
                      </h4>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${
                          service.supportLevel === 'enterprise' 
                            ? 'border-zion-purple/50 text-zion-purple' 
                            : service.supportLevel === 'premium'
                            ? 'border-zion-cyan/50 text-zion-cyan'
                            : 'border-zion-slate-light/50 text-zion-slate-light'
                        }`}
                      >
                        {service.supportLevel.charAt(0).toUpperCase() + service.supportLevel.slice(1)}
                      </Badge>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="text-xs border-zion-slate-light/30 text-zion-slate-light hover:border-zion-cyan/50 hover:text-zion-cyan transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <FuturisticNeonButton
                        onClick={() => window.location.href = `mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                        className="flex-1"
                      >
                        Get Quote
                      </FuturisticNeonButton>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.location.href = `tel:${service.contactInfo.phone}`}
                        className="border-zion-blue-light/30 text-zion-cyan hover:bg-zion-cyan/10 hover:border-zion-cyan"
                      >
                        Call Now
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* No Results */}
        {sortedServices.length === 0 && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-zion-slate-light text-lg mb-4">
              No services found matching your criteria
            </div>
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-zion-cyan hover:bg-zion-cyan-light text-white"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </motion.div>

      {/* Contact CTA Section */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto px-4 pb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <Card className="bg-gradient-to-r from-zion-blue-dark/50 to-zion-purple-dark/50 backdrop-blur-lg border-zion-cyan/30 p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-zion-slate-light text-lg mb-6 max-w-2xl mx-auto">
            Our team of experts is ready to help you implement the perfect solution for your business needs. 
            Get in touch today for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticNeonButton
              onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com?subject=Business Consultation Request'}
              size="lg"
            >
              Schedule Consultation
            </FuturisticNeonButton>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = 'tel:+13024640950'}
              className="border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan/10 hover:border-zion-cyan"
            >
              Call +1 (302) 464-0950
            </Button>
          </div>
          <div className="mt-6 text-zion-slate-light">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com</p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default ComprehensiveServicesShowcase;