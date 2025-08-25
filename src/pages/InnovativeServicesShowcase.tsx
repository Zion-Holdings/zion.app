import React, { useState, useEffect } from 'react';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  DollarSign, 
  TrendingUp,
  Brain,
  Shield,
  Cloud,
  Database,
  Code,
  Target,
  Zap,
  Globe,
  Atom,
  Eye,
  Leaf,
  Phone,
  Mail
} from 'lucide-react';
import { 
  MICRO_SERVICES, 
  SERVICE_CATEGORIES, 
  getServiceStats,
  getServicesByCategory,
  getFeaturedServices,
  getPopularServices,
  getHighAIScoreServices,
  getServicesByPriceRange
} from '@/data/comprehensiveServices';

export default function InnovativeServicesShowcase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [sortBy, setSortBy] = useState<'rating' | 'price' | 'aiScore' | 'deliveryTime'>('rating');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const stats = getServiceStats();
  const featuredServices = getFeaturedServices();
  const popularServices = getPopularServices();
  const highAIScoreServices = getHighAIScoreServices();

  const filteredServices = MICRO_SERVICES.filter(service => {
    const matchesSearch = searchQuery === '' || 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPrice = service.price >= priceRange[0] && service.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.price - b.price;
      case 'aiScore':
        return b.aiScore - a.aiScore;
      case 'deliveryTime':
        const aWeeks = parseInt(a.deliveryTime.split('-')[0]);
        const bWeeks = parseInt(b.deliveryTime.split('-')[0]);
        return aWeeks - bWeeks;
      default:
        return 0;
    }
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = SERVICE_CATEGORIES.find(cat => cat.id === categoryId);
    return category?.icon || '🚀';
  };

  const getCategoryColor = (categoryId: string) => {
    const category = SERVICE_CATEGORIES.find(cat => cat.id === categoryId);
    return category?.color || 'from-gray-500 to-gray-600';
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      <SEO 
        title="Innovative Services Showcase - Zion Tech Group"
        description="Discover our cutting-edge micro SAAS, IT, and AI services. From quantum computing to sustainable tech, explore innovative solutions that drive business transformation."
        keywords="innovative services, micro SAAS, AI services, quantum computing, IoT, AR/VR, sustainable tech, cybersecurity, cloud solutions"
        canonical="https://ziontechgroup.com/innovative-services"
      />

      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovative Services
              <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-gold bg-clip-text text-transparent">
                Showcase
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
              Discover our comprehensive portfolio of cutting-edge micro SAAS, IT, and AI services. 
              From quantum computing to sustainable technology, we deliver innovative solutions that drive business transformation.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-zion-blue-light/20 rounded-lg p-4 border border-zion-blue-light/30">
                <div className="text-2xl font-bold text-zion-cyan">{stats.totalServices}</div>
                <div className="text-zion-slate-light text-sm">Total Services</div>
              </div>
              <div className="bg-zion-blue-light/20 rounded-lg p-4 border border-zion-blue-light/30">
                <div className="text-2xl font-bold text-zion-purple">{stats.featuredCount}</div>
                <div className="text-zion-slate-light text-sm">Featured</div>
              </div>
              <div className="bg-zion-blue-light/20 rounded-lg p-4 border border-zion-blue-light/30">
                <div className="text-2xl font-bold text-zion-gold">{formatPrice(stats.averagePrice)}</div>
                <div className="text-zion-slate-light text-sm">Avg Price</div>
              </div>
              <div className="bg-zion-blue-light/20 rounded-lg p-4 border border-zion-blue-light/30">
                <div className="text-2xl font-bold text-zion-cyan">{stats.highAIScoreCount}</div>
                <div className="text-zion-slate-light text-sm">High AI Score</div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-zion-blue-light/20 rounded-lg p-6 border border-zion-blue-light/30 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-white mb-3">Ready to Get Started?</h3>
              <p className="text-zion-slate-light mb-4">
                Contact our team to discuss your project requirements and get a personalized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-zion-cyan hover:bg-zion-cyan-dark">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 302 464 0950
                </Button>
                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                  <Mail className="w-4 h-4 mr-2" />
                  kleber@ziontechgroup.com
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="px-4 pb-8">
          <div className="container mx-auto">
            <div className="bg-zion-blue-light/20 rounded-lg p-6 border border-zion-blue-light/30">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
                  <Input
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder:text-zion-slate-light"
                  />
                </div>
                
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-zion-blue-dark border border-zion-blue-light text-white rounded-md px-3 py-2"
                >
                  <option value="all">All Categories</option>
                  {SERVICE_CATEGORIES.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-zion-blue-dark border border-zion-blue-light text-white rounded-md px-3 py-2"
                >
                  <option value="rating">Sort by Rating</option>
                  <option value="price">Sort by Price</option>
                  <option value="aiScore">Sort by AI Score</option>
                  <option value="deliveryTime">Sort by Delivery Time</option>
                </select>

                <div className="flex gap-2">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="bg-zion-cyan hover:bg-zion-cyan-dark"
                  >
                    Grid
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="bg-zion-cyan hover:bg-zion-cyan-dark"
                  >
                    List
                  </Button>
                </div>
              </div>

              {/* Price Range Slider */}
              <div className="mb-4">
                <label className="block text-zion-slate-light text-sm mb-2">
                  Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                </label>
                <div className="flex gap-4">
                  <Input
                    type="number"
                    placeholder="Min Price"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className="bg-zion-blue-dark border-zion-blue-light text-white"
                  />
                  <Input
                    type="number"
                    placeholder="Max Price"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 50000])}
                    className="bg-zion-blue-dark border-zion-blue-light text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 pb-16">
          <div className="container mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">
                {filteredServices.length} Services Found
              </h2>
              <p className="text-zion-slate-light">
                Showing results for "{searchQuery}" in {selectedCategory === 'all' ? 'all categories' : SERVICE_CATEGORIES.find(c => c.id === selectedCategory)?.name}
              </p>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedServices.map((service) => (
                  <Card key={service.id} className="bg-zion-blue-light/20 border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={`bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                          {getCategoryIcon(service.category)} {SERVICE_CATEGORIES.find(c => c.id === service.category)?.name}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm">{service.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                      <CardDescription className="text-zion-slate-light">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-zion-cyan font-semibold text-lg">
                            {formatPrice(service.price)}
                          </span>
                          <Badge variant="outline" className="border-zion-gold text-zion-gold">
                            {service.pricingModel}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{service.deliveryTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Brain className="w-4 h-4" />
                            <span>AI Score: {service.aiScore}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {service.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="pt-3 border-t border-zion-blue-light/30">
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-zion-slate-light">
                              Market: {service.marketPrice}
                            </div>
                            <Button size="sm" className="bg-zion-cyan hover:bg-zion-cyan-dark">
                              View Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {sortedServices.map((service) => (
                  <Card key={service.id} className="bg-zion-blue-light/20 border-zion-blue-light/30">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="lg:w-1/3">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={`bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                              {getCategoryIcon(service.category)} {SERVICE_CATEGORIES.find(c => c.id === service.category)?.name}
                            </Badge>
                            <Badge variant="outline" className="border-zion-gold text-zion-gold">
                              {service.pricingModel}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                          <p className="text-zion-slate-light text-sm">{service.description}</p>
                        </div>
                        
                        <div className="lg:w-1/3">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <div className="text-zion-cyan font-semibold">Price</div>
                              <div className="text-white">{formatPrice(service.price)}</div>
                            </div>
                            <div>
                              <div className="text-zion-cyan font-semibold">Delivery</div>
                              <div className="text-white">{service.deliveryTime}</div>
                            </div>
                            <div>
                              <div className="text-zion-cyan font-semibold">Rating</div>
                              <div className="text-white flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                {service.rating}
                              </div>
                            </div>
                            <div>
                              <div className="text-zion-cyan font-semibold">AI Score</div>
                              <div className="text-white">{service.aiScore}</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="lg:w-1/3">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.tags.map((tag, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="text-sm text-zion-slate-light mb-4">
                            Market: {service.marketPrice}
                          </div>
                          <Button className="w-full bg-zion-cyan hover:bg-zion-cyan-dark">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}