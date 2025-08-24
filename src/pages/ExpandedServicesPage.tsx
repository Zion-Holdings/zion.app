import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  Globe, 
  Mail, 
  Phone,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
  Brain,
  Cloud,
  Lock,
  Smartphone,
  Database,
  Link as LinkIcon
} from 'lucide-react';
import { expandedServiceCategories, Service, getAllServices } from '@/data/expandedServices';
import { TrustedBySection } from '@/components/TrustedBySection';

export default function ExpandedServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'rating' | 'price' | 'aiScore'>('rating');

  const allServices = getAllServices();
  
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.pricing.amount - b.pricing.amount;
      case 'aiScore':
        return b.aiScore - a.aiScore;
      default:
        return 0;
    }
  });

  const formatPrice = (service: Service) => {
    const { pricing } = service;
    switch (pricing.type) {
      case 'monthly':
        return `$${pricing.amount.toLocaleString()}/month`;
      case 'hourly':
        return `$${pricing.hourlyRate}/hour`;
      case 'project':
        return `$${pricing.amount.toLocaleString()}`;
      default:
        return `$${pricing.amount.toLocaleString()}`;
    }
  };

  const getCategoryIcon = (categoryName: string) => {
    const category = expandedServiceCategories.find(cat => cat.name === categoryName);
    return category?.icon || '🔧';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-zion-blue py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Tech Solutions
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our extensive range of micro SAAS, IT services, and AI solutions designed to transform your business. 
            From AI chatbots to cloud migration, we provide enterprise-grade solutions at competitive prices.
          </p>
          
          {/* Search and Filter Bar */}
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for services, features, or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-lg border-0 bg-white/10 text-white placeholder:text-gray-300"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('all')}
                className="bg-zion-purple hover:bg-zion-purple-dark"
              >
                All Services
              </Button>
              {expandedServiceCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.name ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.name)}
                  className="bg-zion-purple hover:bg-zion-purple-dark"
                >
                  {category.icon} {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Sort Controls */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-sm text-gray-600">
              Showing {sortedServices.length} of {allServices.length} services
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'rating' | 'price' | 'aiScore')}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm"
              >
                <option value="rating">Rating</option>
                <option value="price">Price</option>
                <option value="aiScore">AI Score</option>
              </select>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {service.featured && (
                    <Badge className="absolute top-3 right-3 bg-zion-purple text-white">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    {service.rating}
                    <span className="text-gray-300">({service.reviewCount})</span>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg group-hover:text-zion-purple transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-600 mt-2">
                        {service.shortDescription}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Brain className="h-4 w-4" />
                      {service.aiScore}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-3">
                    <Badge variant="secondary" className="text-xs">
                      {getCategoryIcon(service.category)} {service.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {service.subcategory}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Key Features
                    </h4>
                    <div className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="text-xs text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-zion-purple rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-zion-purple">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-blue-500" />
                      Benefits
                    </h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="text-xs text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Delivery */}
                  <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-zion-purple">
                        {formatPrice(service)}
                      </div>
                      <div className="text-xs text-gray-500">
                        {service.pricing.details}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-700 flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {service.deliveryTime}
                      </div>
                      <div className="text-xs text-gray-500">Delivery</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {service.tags.slice(0, 4).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Contact and Actions */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="h-4 w-4" />
                        {service.contactEmail}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="h-4 w-4" />
                        {service.contactPhone}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-dark">
                        Get Quote
                      </Button>
                      {service.website && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={service.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {sortedServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search terms or category filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-zion-blue py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our team of experts is ready to help you implement the perfect solution. 
            Get in touch for a personalized consultation and quote.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-lg px-8 py-4">
              <Mail className="h-5 w-5 mr-2" />
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 text-lg px-8 py-4">
              <Phone className="h-5 w-5 mr-2" />
              Call +1 302 464 0950
            </Button>
          </div>
          
          <div className="mt-8 text-zion-slate-light">
            <p className="mb-2">
              <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
            </p>
            <p>
              <strong>Website:</strong> <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline">ziontechgroup.com</a>
            </p>
          </div>
        </div>
      </section>

      <TrustedBySection />
    </div>
  );
}