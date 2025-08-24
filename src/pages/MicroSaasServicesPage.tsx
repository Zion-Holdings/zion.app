import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MICRO_SAAS_SERVICES, MicroSaasService, getServiceByCategory } from '@/data/microSaasServices';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Filter, Star, ExternalLink, Play, Shield, Zap, Globe, Brain, Database, Lock, Cloud, Code, PenTool, Network, Monitor, Link as LinkIcon, Smartphone, Paintbrush } from 'lucide-react';

// Category icons mapping
const categoryIcons: Record<string, React.ComponentType<any>> = {
  'ai-chatbots': Brain,
  'cybersecurity': Shield,
  'cloud-management': Cloud,
  'devops-automation': Code,
  'data-analytics': Database,
  'iot-edge': Monitor,
  'blockchain-web3': LinkIcon,
  'quantum-computing': Zap,
  'content-creation': PenTool,
  'api-management': Globe
};

// Status colors
const statusColors: Record<string, string> = {
  'live': 'bg-green-500',
  'beta': 'bg-yellow-500',
  'coming-soon': 'bg-blue-500'
};

export default function MicroSaasServices() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  // Filter services based on search and category
  const filteredServices = MICRO_SAAS_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.title.localeCompare(b.title);
      case 'price-low':
        return a.pricing.monthly - b.pricing.monthly;
      case 'price-high':
        return b.pricing.monthly - a.pricing.monthly;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(MICRO_SAAS_SERVICES.map(s => s.category)))];

  // Format price helper
  const formatPrice = (amount: number, currency: string) => {
    return `${currency}${amount.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue">
      <SEO 
        title="Micro SAAS Services - Zion Tech Group" 
        description="Discover our comprehensive suite of micro SAAS solutions for modern businesses. From AI chatbots to quantum computing, we have the tools you need."
        keywords="micro SAAS, AI services, cybersecurity, cloud management, DevOps, blockchain, quantum computing"
        canonical="https://ziontechgroup.com/micro-saas-services"
      />

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Micro SAAS Services
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Transform your business with our cutting-edge micro SAAS solutions. 
            From AI-powered chatbots to enterprise-grade cybersecurity, we have everything you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
              Get Started Today
            </Button>
            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg transition-all duration-300">
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search for services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-zion-cyan" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-white/10 border border-zion-blue-light/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-zion-blue-dark text-white">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort Options */}
              <div className="flex items-center space-x-2">
                <span className="text-zion-slate-light">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white/10 border border-zion-blue-light/30 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan/50"
                >
                  <option value="name" className="bg-zion-blue-dark text-white">Name</option>
                  <option value="price-low" className="bg-zion-blue-dark text-white">Price: Low to High</option>
                  <option value="price-high" className="bg-zion-blue-dark text-white">Price: High to Low</option>
                  <option value="rating" className="bg-zion-blue-dark text-white">Rating</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service) => {
              const IconComponent = categoryIcons[service.category.toLowerCase().replace(/\s+/g, '-')] || Globe;
              
              return (
                <Card key={service.id} className="bg-white/10 backdrop-blur-sm border border-zion-blue-light/20 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <Badge className={`${statusColors[service.status]} text-white`}>
                        {service.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-zion-slate-light line-clamp-2">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Pricing */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-zion-slate-light">Monthly:</span>
                        <span className="text-white font-semibold">
                          {formatPrice(service.pricing.monthly, service.pricing.currency)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-zion-slate-light">Yearly:</span>
                        <span className="text-white font-semibold">
                          {formatPrice(service.pricing.yearly, service.pricing.currency)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-zion-slate-light">Enterprise:</span>
                        <span className="text-white font-semibold">
                          {formatPrice(service.pricing.enterprise, service.pricing.currency)}
                        </span>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light'}`}
                          />
                        ))}
                      </div>
                      <span className="text-zion-slate-light text-sm">
                        {service.rating} ({service.reviewCount} reviews)
                      </span>
                    </div>

                    {/* Features Preview */}
                    <div>
                      <h4 className="text-white font-medium mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <Badge key={index} variant="secondary" className="bg-zion-blue-light/20 text-zion-slate-light border-zion-blue-light/30">
                            {feature}
                          </Badge>
                        ))}
                        {service.features.length > 3 && (
                          <Badge variant="secondary" className="bg-zion-blue-light/20 text-zion-slate-light border-zion-blue-light/30">
                            +{service.features.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2 pt-4">
                      <Button className="flex-1 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white">
                        Get Started
                      </Button>
                      {service.demoLink && (
                        <Button variant="outline" size="sm" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                          <Play className="w-4 h-4" />
                        </Button>
                      )}
                    </div>

                    {/* Tech Stack */}
                    <div className="pt-4 border-t border-zion-blue-light/20">
                      <h4 className="text-white font-medium mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.techStack.slice(0, 3).map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-zion-blue-light/30 text-zion-slate-light">
                            {tech}
                          </Badge>
                        ))}
                        {service.techStack.length > 3 && (
                          <Badge variant="outline" className="text-xs border-zion-blue-light/30 text-zion-slate-light">
                            +{service.techStack.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {sortedServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-zion-slate-light text-xl mb-4">No services found</div>
              <p className="text-zion-slate-light mb-6">Try adjusting your search or filter criteria</p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Join hundreds of companies already leveraging our micro SAAS solutions to drive innovation and growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Start Your Free Trial
            </Button>
            <Button variant="outline" className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}