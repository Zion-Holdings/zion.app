import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Globe, 
  Shield, 
  Cloud, 
  Database, 
  Zap,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from "lucide-react";
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, PRICING_TIERS } from "@/data/comprehensiveServices";
import { ProductListing } from "@/types/listings";

export default function ComprehensiveServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricingTier, setSelectedPricingTier] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  // Filter services based on search and filters
  const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    const matchesPricing = selectedPricingTier === 'all' || 
      (service.price && 
       ((selectedPricingTier === 'starter' && service.price >= PRICING_TIERS.starter.min && service.price <= PRICING_TIERS.starter.max) ||
        (selectedPricingTier === 'professional' && service.price >= PRICING_TIERS.professional.min && service.price <= PRICING_TIERS.professional.max) ||
        (selectedPricingTier === 'enterprise' && service.price >= PRICING_TIERS.enterprise.min && service.price <= PRICING_TIERS.enterprise.max) ||
        (selectedPricingTier === 'custom' && service.price >= PRICING_TIERS.custom.min)));
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

  // Sort services
  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return (a.price || 0) - (b.price || 0);
      case 'price-high':
        return (b.price || 0) - (a.price || 0);
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'ai-score':
        return (b.aiScore || 0) - (a.aiScore || 0);
      case 'featured':
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai & automation':
      case 'ai & content':
      case 'ai & analytics':
        return <Zap className="h-5 w-5" />;
      case 'cybersecurity':
        return <Shield className="h-5 w-5" />;
      case 'cloud & devops':
        return <Cloud className="h-5 w-5" />;
      case 'data & analytics':
        return <Database className="h-5 w-5" />;
      case 'iot & edge':
        return <Database className="h-5 w-5" />;
      case 'blockchain & web3':
        return <Database className="h-5 w-5" />;
      case 'digital transformation':
        return <Globe className="h-5 w-5" />;
      case 'api & integration':
        return <Database className="h-5 w-5" />;
      default:
        return <Zap className="h-5 w-5" />;
    }
  };

  const getPricingTierColor = (price: number) => {
    if (price <= PRICING_TIERS.starter.max) return 'bg-green-100 text-green-800';
    if (price <= PRICING_TIERS.professional.max) return 'bg-blue-100 text-blue-800';
    if (price <= PRICING_TIERS.enterprise.max) return 'bg-purple-100 text-purple-800';
    return 'bg-orange-100 text-orange-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark via-zion-purple to-zion-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive IT & AI Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-zion-cyan max-w-4xl mx-auto">
            Discover our extensive portfolio of micro SAAS solutions, IT services, and AI-powered innovations designed to transform your business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan/90">
              <Phone className="h-5 w-5 mr-2" />
              +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="h-5 w-5 mr-2" />
              kleber@ziontechgroup.com
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-zinc-400" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {SERVICE_CATEGORIES.map(category => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedPricingTier} onValueChange={setSelectedPricingTier}>
              <SelectTrigger>
                <SelectValue placeholder="All Pricing Tiers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Pricing Tiers</SelectItem>
                {Object.entries(PRICING_TIERS).map(([key, tier]) => (
                  <SelectItem key={key} value={key}>
                    {tier.label} (${tier.min.toLocaleString()}-${tier.max.toLocaleString()})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="ai-score">AI Score</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedServices.map((service) => (
            <Card key={service.id} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <div className="relative">
                <img
                  src={service.images[0]}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {service.featured && (
                  <Badge className="absolute top-3 right-3 bg-zion-cyan text-zion-blue-dark">
                    Featured
                  </Badge>
                )}
                <div className="absolute top-3 left-3 flex gap-2">
                  {getCategoryIcon(service.category)}
                  <Badge variant="secondary" className="bg-white/90 text-zinc-700">
                    {service.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zion-purple">
                      ${service.price?.toLocaleString()}
                    </div>
                    <Badge className={getPricingTierColor(service.price || 0)}>
                      {Object.entries(PRICING_TIERS).find(([_, tier]) => 
                        service.price && service.price >= tier.min && service.price <= tier.max
                      )?.[1]?.label || 'Custom'}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="text-sm text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 4).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Service Details */}
                <div className="space-y-2 mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Availability: {service.availability}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <span>Location: {service.location}</span>
                  </div>
                  {service.aiScore && (
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      <span>AI Score: {service.aiScore}/100</span>
                    </div>
                  )}
                </div>

                {/* Rating and Reviews */}
                {service.rating && (
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(service.rating!) ? 'text-yellow-400 fill-current' : 'text-zinc-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                      {service.rating} ({service.reviewCount} reviews)
                    </span>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-dark text-white">
                    <Phone className="h-4 w-4 mr-2" />
                    Get Quote
                  </Button>
                  <Button variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {sortedServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No services found</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Try adjusting your search criteria or filters
            </p>
            <Button onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSelectedPricingTier('all');
            }}>
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Results Summary */}
        {sortedServices.length > 0 && (
          <div className="mt-8 text-center text-zinc-600 dark:text-zinc-400">
            Showing {sortedServices.length} of {COMPREHENSIVE_SERVICES.length} services
          </div>
        )}
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-zion-cyan max-w-2xl mx-auto">
            Our team of experts is ready to help you implement the perfect solution for your needs. 
            Get in touch today for a personalized consultation and quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan/90">
              <Phone className="h-5 w-5 mr-2" />
              Call Now: +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="h-5 w-5 mr-2" />
              Email: kleber@ziontechgroup.com
            </Button>
          </div>
          <div className="mt-8 text-zion-cyan">
            <p className="text-lg">
              Visit us at: <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">ziontechgroup.com</a>
            </p>
            <p className="text-sm mt-2">
              364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}