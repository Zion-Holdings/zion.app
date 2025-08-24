import React, { useState, useMemo } from 'react';
import { COMPREHENSIVE_SERVICES, ServiceCategory, getServicesByCategory, getServicesByPriceRange, getServicesByTags } from '@/data/comprehensiveServices';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, Star, Clock, MapPin, Mail, Phone, Building, Globe, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function ComprehensiveServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get all unique tags from all services
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    COMPREHENSIVE_SERVICES.forEach(category => {
      category.services.forEach(service => {
        service.tags.forEach(tag => tags.add(tag));
      });
    });
    return Array.from(tags).sort();
  }, []);

  // Filter services based on search criteria
  const filteredServices = useMemo(() => {
    let services = COMPREHENSIVE_SERVICES;

    // Filter by category
    if (selectedCategory !== 'all') {
      services = services.filter(cat => cat.id === selectedCategory);
    }

    // Filter by price range
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      services = services.map(cat => ({
        ...cat,
        services: cat.services.filter(service => {
          if (!service.price) return false;
          if (max) {
            return service.price >= min && service.price <= max;
          }
          return service.price >= min;
        })
      })).filter(cat => cat.services.length > 0);
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      services = services.map(cat => ({
        ...cat,
        services: cat.services.filter(service =>
          selectedTags.some(tag => service.tags.includes(tag))
        )
      })).filter(cat => cat.services.length > 0);
    }

    // Filter by search query
    if (searchQuery) {
      services = services.map(cat => ({
        ...cat,
        services: cat.services.filter(service =>
          service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      })).filter(cat => cat.services.length > 0);
    }

    return services;
  }, [searchQuery, selectedCategory, priceRange, selectedTags]);

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setPriceRange('all');
    setSelectedTags([]);
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}k`;
    }
    return `$${price}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Comprehensive IT & AI Services - Zion Tech Group" 
        description="Discover our comprehensive range of micro SAAS services including AI development, cybersecurity, cloud solutions, blockchain, IoT, and more. Expert IT services with competitive pricing."
        keywords="AI services, cybersecurity, cloud solutions, blockchain development, IoT solutions, IT consulting, micro SAAS, Zion Tech Group"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive IT & AI Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Discover our innovative micro SAAS solutions designed to transform your business. 
            From AI development to cybersecurity, we provide expert services with competitive pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
              <Mail className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="w-5 h-5 mr-2" />
              +1 302 464 0950
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-zion-blue-dark border-b border-zion-blue-light py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-zion-slate-light text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4 text-zion-cyan" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-zion-cyan" />
              <span>https://ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-zion-blue py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1 text-zion-slate-light" />
              <Input
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white border-zion-blue-light focus:border-zion-purple"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-white border-zion-blue-light focus:border-zion-purple">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {COMPREHENSIVE_SERVICES.map(category => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Range Filter */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="bg-white border-zion-blue-light focus:border-zion-purple">
                <SelectValue placeholder="All Prices" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-5000">Under $5k</SelectItem>
                <SelectItem value="5000-15000">$5k - $15k</SelectItem>
                <SelectItem value="15000-30000">$15k - $30k</SelectItem>
                <SelectItem value="30000-999999">$30k+</SelectItem>
              </SelectContent>
            </Select>

            {/* Clear Filters */}
            <Button 
              variant="outline" 
              onClick={clearFilters}
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
            >
              <Filter className="w-4 h-4 mr-2" />
              Clear Filters
            </Button>
          </div>

          {/* Tags Filter */}
          <div className="mt-6">
            <div className="flex flex-wrap gap-2">
                          {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  selectedTags.includes(tag) 
                    ? 'bg-zion-purple text-white hover:bg-zion-purple-dark' 
                    : 'bg-transparent border border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10'
                }`}
              >
                {tag}
              </button>
            ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          {filteredServices.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-zion-slate mb-4">No services found</h3>
              <p className="text-zion-slate-light mb-6">Try adjusting your search criteria or filters</p>
              <Button onClick={clearFilters} className="bg-zion-purple hover:bg-zion-purple-dark">
                Clear All Filters
              </Button>
            </div>
          ) : (
            filteredServices.map(category => (
              <div key={category.id} className="mb-16">
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${category.color} text-4xl mb-6`}>
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-zion-slate mb-4">{category.name}</h2>
                  <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map(service => (
                    <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-zion-blue-light">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img 
                          src={service.images[0]} 
                          alt={service.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-zion-purple text-white">
                            {service.subcategory || service.category}
                          </Badge>
                        </div>
                        {service.aiScore && (
                          <div className="absolute bottom-4 left-4">
                            <Badge className="bg-zion-cyan text-white">
                              AI Score: {service.aiScore}
                            </Badge>
                          </div>
                        )}
                      </div>

                      <CardHeader>
                        <CardTitle className="text-xl text-zion-slate group-hover:text-zion-purple transition-colors">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-zion-slate-light line-clamp-3">
                          {service.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent>
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.tags.slice(0, 3).map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {service.tags.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{service.tags.length - 3} more
                            </Badge>
                          )}
                        </div>

                        {/* Service Details */}
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                            <Clock className="w-4 h-4" />
                            <span>Delivery: {service.availability}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                            <MapPin className="w-4 h-4" />
                            <span>{service.location}</span>
                          </div>
                          {service.rating && (
                            <div className="flex items-center gap-2 text-sm">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className="font-semibold">{service.rating}</span>
                              </div>
                              <span className="text-zion-slate-light">({service.reviewCount} reviews)</span>
                            </div>
                          )}
                        </div>

                        {/* Price and CTA */}
                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-bold text-zion-purple">
                            {service.price ? formatPrice(service.price) : 'Contact Us'}
                          </div>
                          <Button className="bg-zion-purple hover:bg-zion-purple-dark group-hover:bg-zion-purple-dark">
                            Get Quote
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-4 pt-4 border-t border-zion-blue-light">
                          <div className="flex items-center gap-2 text-sm text-zion-slate-light mb-2">
                            <span className="font-medium">Contact:</span>
                            <span>{service.author.name}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                            <Mail className="w-4 h-4" />
                            <span>{service.author.email}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
            Get in touch with our experts for a free consultation and discover how our services can drive your success.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
              <Mail className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +1 302 464 0950
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}