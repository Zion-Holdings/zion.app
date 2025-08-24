import React, { useState, useMemo } from 'react';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Star, Clock, DollarSign, Users, ArrowRight, Search, Filter, LayoutGrid, List } from 'lucide-react';
import { comprehensiveServices, serviceCategories, serviceSubcategories } from '@/data/comprehensiveServices';

export default function ComprehensiveServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredServices = useMemo(() => {
    return comprehensiveServices.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
      
      return matchesSearch && matchesCategory && matchesSubcategory;
    });
  }, [searchTerm, selectedCategory, selectedSubcategory]);

  const getSubcategoriesForCategory = (category: string) => {
    if (category === 'all') return [];
    return serviceSubcategories[category as keyof typeof serviceSubcategories] || [];
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="All Services - Zion Tech Group" 
        description="Explore our comprehensive suite of AI services, IT solutions, Micro SAAS platforms, and digital transformation services."
        keywords="AI services, IT services, Micro SAAS, digital transformation, business solutions, technology services"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-light">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-40 animate-pulse"></div>
        </div>
        
        <div className="container relative z-10 px-4 mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            All Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-4xl mx-auto">
            Discover our complete portfolio of technology solutions designed to transform your business. 
            From AI-powered insights to enterprise infrastructure, we have everything you need to succeed.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2 bg-zion-purple/20 px-4 py-2 rounded-full border border-zion-purple/30">
                <span className="text-2xl">{category.icon}</span>
                <span className="text-zion-purple font-medium">{category.name}</span>
                <Badge variant="secondary" className="bg-zion-purple/30 text-white">
                  {category.count}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-zion-blue-light border-zion-purple/20 text-white placeholder-zion-slate-light focus:border-zion-purple focus:ring-zion-purple"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="text-zion-slate-light w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setSelectedSubcategory('all');
                }}
                className="bg-zion-blue-light border-zion-purple/20 text-white rounded-md px-3 py-2 focus:border-zion-purple focus:ring-zion-purple"
              >
                <option value="all">All Categories</option>
                {serviceCategories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>

              {/* Subcategory Filter */}
              {selectedCategory !== 'all' && (
                <select
                  value={selectedSubcategory}
                  onChange={(e) => setSelectedSubcategory(e.target.value)}
                  className="bg-zion-blue-light border-zion-purple/20 text-white rounded-md px-3 py-2 focus:border-zion-purple focus:ring-zion-purple"
                >
                  <option value="all">All Subcategories</option>
                  {getSubcategoriesForCategory(selectedCategory).map((subcategory) => (
                    <option key={subcategory} value={subcategory}>
                      {subcategory}
                    </option>
                  ))}
                </select>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="bg-zion-purple hover:bg-zion-purple-dark text-white"
              >
                <LayoutGrid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="bg-zion-purple hover:bg-zion-purple-dark text-white"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-center">
            <p className="text-zion-slate-light">
              Showing {filteredServices.length} of {comprehensiveServices.length} services
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
              <p className="text-zion-slate-light mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedSubcategory('all');
                }}
                className="bg-zion-purple hover:bg-zion-purple-dark text-white"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-6"
            }>
              {filteredServices.map((service) => (
                <Card key={service.id} className={`bg-zion-blue-light border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:scale-105 group ${
                  viewMode === 'list' ? 'flex flex-col lg:flex-row' : ''
                }`}>
                  <div className={`relative overflow-hidden rounded-t-lg ${
                    viewMode === 'list' ? 'lg:w-1/3' : ''
                  }`}>
                    <img
                      src={service.images[0]}
                      alt={service.title}
                      className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${
                        viewMode === 'list' ? 'h-48 lg:h-full' : 'h-48'
                      }`}
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-zion-purple text-white">
                        {service.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="secondary" className="bg-zion-blue-dark/80 text-zion-cyan">
                        {service.subcategory}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className={`flex-1 ${viewMode === 'list' ? 'lg:pl-6' : ''}`}>
                    <CardHeader className="pb-4">
                      <CardTitle className="text-2xl text-white group-hover:text-zion-cyan transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-zion-slate-light text-lg">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      {/* Pricing and Rating */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-5 h-5 text-zion-cyan" />
                          <span className="text-white font-bold text-xl">
                            {service.currency}{service.price}
                          </span>
                          <span className="text-zion-slate-light">
                            /{service.pricingModel === 'monthly' ? 'mo' : service.pricingModel === 'hourly' ? 'hr' : 'project'}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          <span className="text-white font-semibold">{service.rating}</span>
                          <span className="text-zion-slate-light">({service.reviewCount} reviews)</span>
                        </div>
                      </div>

                      {/* Features Preview */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 4).map((feature, index) => (
                            <Badge key={index} variant="outline" className="border-zion-purple/30 text-zion-slate-light text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Delivery and Contact */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-2 text-zion-slate-light">
                          <Clock className="w-4 h-4" />
                          <span>Delivery: {service.estimatedDelivery}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-zion-slate-light">
                          <Users className="w-4 h-4" />
                          <span>{service.targetAudience.length} target audiences</span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button 
                        className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 group-hover:shadow-lg transition-all duration-300"
                        asChild
                      >
                        <a href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}>
                          Get Quote
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Contact us today to discuss your project requirements and get a personalized quote for any of our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg px-8 py-6"
              asChild
            >
              <a href="mailto:kleber@ziontechgroup.com?subject=Service Inquiry">
                Contact Sales Team
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark text-lg px-8 py-6"
              asChild
            >
              <a href="tel:+13024640950">
                Call +1 (302) 464-0950
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}