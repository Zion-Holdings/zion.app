import React, { useState } from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ENHANCED_SERVICES, getServicesByCategory, getPopularServices, getNewServices, getPremiumServices, type EnhancedService } from "@/data/enhancedServices";
import { Search, Filter, Star, Clock, Users, Zap, TrendingUp, Shield, Brain, Cloud, Code, Settings, BarChart3, ArrowRight, Play, ExternalLink, Phone, Mail, MapPin, CheckCircle, DollarSign, Calendar } from "lucide-react";

export default function EnhancedServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popularity');
  const [activeTab, setActiveTab] = useState<string>('all');

  const popularServices = getPopularServices();
  const newServices = getNewServices();
  const premiumServices = getPremiumServices();

  const categories = [
    { id: 'all', label: 'All Services', icon: <Zap className="h-4 w-4" /> },
    { id: 'AI', label: 'AI Services', icon: <Brain className="h-4 w-4" /> },
    { id: 'IT', label: 'IT Services', icon: <Settings className="h-4 w-4" /> },
    { id: 'SAAS', label: 'SAAS Solutions', icon: <Cloud className="h-4 w-4" /> },
    { id: 'Development', label: 'Development', icon: <Code className="h-4 w-4" /> },
    { id: 'Consulting', label: 'Consulting', icon: <Users className="h-4 w-4" /> },
    { id: 'Security', label: 'Security', icon: <Shield className="h-4 w-4" /> },
    { id: 'Analytics', label: 'Analytics', icon: <BarChart3 className="h-4 w-4" /> },
    { id: 'Cloud', label: 'Cloud', icon: <Cloud className="h-4 w-4" /> },
    { id: 'Automation', label: 'Automation', icon: <TrendingUp className="h-4 w-4" /> },
    { id: 'Integration', label: 'Integration', icon: <BarChart3 className="h-4 w-4" /> }
  ];

  const pricingModels = [
    { id: 'all', label: 'All Pricing' },
    { id: 'hourly', label: 'Hourly' },
    { id: 'monthly', label: 'Monthly' },
    { id: 'project', label: 'Project-based' },
    { id: 'subscription', label: 'Subscription' }
  ];

  const sortOptions = [
    { id: 'popularity', label: 'Most Popular' },
    { id: 'rating', label: 'Highest Rated' },
    { id: 'price-low', label: 'Price: Low to High' },
    { id: 'price-high', label: 'Price: High to Low' },
    { id: 'newest', label: 'Newest First' }
  ];

  const getFilteredServices = () => {
    let filtered = ENHANCED_SERVICES;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Pricing filter
    if (selectedPricing !== 'all') {
      filtered = filtered.filter(service => service.price.pricingModel === selectedPricing);
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(service => 
        service.title.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
        case 'rating':
          return b.rating - a.rating;
        case 'price-low':
          return a.price.min - b.price.min;
        case 'price-high':
          return b.price.min - a.price.min;
        case 'newest':
          return new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime();
        default:
          return 0;
      }
    });

    return filtered;
  };

  const formatPrice = (service: EnhancedService) => {
    const { min, max, currency, pricingModel } = service.price;
    if (pricingModel === 'hourly') {
      return `${currency}${min}-${max}/hour`;
    } else if (pricingModel === 'monthly') {
      return `${currency}${min}-${max}/month`;
    } else if (pricingModel === 'project') {
      return `${currency}${min.toLocaleString()}-${max.toLocaleString()}`;
    }
    return `${currency}${min}-${max}`;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI': return <Brain className="h-5 w-5 text-purple-400" />;
      case 'IT': return <Settings className="h-5 w-5 text-blue-400" />;
      case 'SAAS': return <Cloud className="h-5 w-5 text-cyan-400" />;
      case 'Development': return <Code className="h-5 w-5 text-green-400" />;
      case 'Consulting': return <Users className="h-5 w-5 text-orange-400" />;
      case 'Security': return <Shield className="h-5 w-5 text-red-400" />;
      case 'Analytics': return <BarChart3 className="h-5 w-5 text-indigo-400" />;
      case 'Cloud': return <Cloud className="h-5 w-5 text-sky-400" />;
      case 'Automation': return <TrendingUp className="h-5 w-5 text-pink-400" />;
      case 'Integration': return <BarChart3 className="h-5 w-5 text-yellow-400" />;
      default: return <Zap className="h-5 w-5 text-gray-400" />;
    }
  };

  return (
    <>
      <SEO 
        title="Enhanced Services - Zion Tech Group" 
        description="Discover our premium AI, IT, and SAAS services with advanced features, competitive pricing, and expert support." 
        keywords="premium services, AI solutions, IT consulting, SAAS platforms, enterprise solutions"
        canonical="https://ziontechgroup.com/enhanced-services"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-zion-cyan" />
              <span className="text-sm font-medium text-zion-cyan">Premium Services</span>
            </div>
            <GradientHeading>Enhanced Services</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              From AI-powered solutions to enterprise IT services, we offer comprehensive technology solutions 
              that drive innovation and business growth. Explore our curated selection of premium services.
            </p>
          </div>

          {/* Contact Information Banner */}
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-6 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <Phone className="h-6 w-6 text-zion-cyan" />
                <div className="text-white font-semibold">+1 302 464 0950</div>
                <div className="text-zion-slate-light text-sm">Call us anytime</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Mail className="h-6 w-6 text-zion-cyan" />
                <div className="text-white font-semibold">kleber@ziontechgroup.com</div>
                <div className="text-zion-slate-light text-sm">Email us today</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MapPin className="h-6 w-6 text-zion-cyan" />
                <div className="text-white font-semibold">364 E Main St STE 1008, Middletown DE 19709</div>
                <div className="text-zion-slate-light text-sm">Visit our office</div>
              </div>
            </div>
          </div>

          {/* Featured Services Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-16">
            <TabsList className="grid w-full grid-cols-5 bg-zion-blue-dark/50 border border-zion-purple/30 p-1 rounded-lg">
              <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                <Zap className="h-4 w-4 mr-2" />
                All
              </TabsTrigger>
              <TabsTrigger value="popular" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                <Star className="h-4 w-4 mr-2" />
                Popular
              </TabsTrigger>
              <TabsTrigger value="new" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                <Zap className="h-4 w-4 mr-2" />
                New
              </TabsTrigger>
              <TabsTrigger value="premium" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                <Shield className="h-4 w-4 mr-2" />
                Premium
              </TabsTrigger>
              <TabsTrigger value="custom" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                <Filter className="h-4 w-4 mr-2" />
                Custom
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ENHANCED_SERVICES.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="popular" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="new" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="premium" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {premiumServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="custom" className="mt-8">
              {/* Filters and Search */}
              <div className="bg-zion-blue-dark/30 border border-zion-purple/30 rounded-xl p-6 mb-8 backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">Search Services</label>
                    <Input
                      placeholder="Search by name, description, or tags..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-zion-blue-dark/50 border-zion-purple/30 text-white placeholder:text-zion-slate-light"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">Category</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="bg-zion-blue-dark/50 border-zion-purple/30 text-white">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="bg-zion-blue-dark border-zion-purple/30">
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id} className="text-white">
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">Pricing Model</label>
                    <Select value={selectedPricing} onValueChange={setSelectedPricing}>
                      <SelectTrigger className="bg-zion-blue-dark/50 border-zion-purple/30 text-white">
                        <SelectValue placeholder="Select pricing" />
                      </SelectTrigger>
                      <SelectContent className="bg-zion-blue-dark border-zion-purple/30">
                        {pricingModels.map((pricing) => (
                          <SelectItem key={pricing.id} value={pricing.id} className="text-white">
                            {pricing.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">Sort By</label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="bg-zion-blue-dark/50 border-zion-purple/30 text-white">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent className="bg-zion-blue-dark border-zion-purple/30">
                        {sortOptions.map((option) => (
                          <SelectItem key={option.id} value={option.id} className="text-white">
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Filtered Results */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getFilteredServices().map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Get in touch with our experts to discuss your specific needs and discover how our services 
                can drive innovation and growth for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white gap-2">
                  <Mail className="h-4 w-4" />
                  Contact Us
                </Button>
                <Button size="lg" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                  <Phone className="h-4 w-4" />
                  Call +1 302 464 0950
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

interface ServiceCardProps {
  service: EnhancedService;
}

function ServiceCard({ service }: ServiceCardProps) {
  const formatPrice = (service: EnhancedService) => {
    const { min, max, currency, pricingModel } = service.price;
    if (pricingModel === 'hourly') {
      return `${currency}${min}-${max}/hour`;
    } else if (pricingModel === 'monthly') {
      return `${currency}${min}-${max}/month`;
    } else if (pricingModel === 'project') {
      return `${currency}${min.toLocaleString()}-${max.toLocaleString()}`;
    }
    return `${currency}${min}-${max}`;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI': return <Brain className="h-5 w-5 text-purple-400" />;
      case 'IT': return <Settings className="h-5 w-5 text-blue-400" />;
      case 'SAAS': return <Cloud className="h-5 w-5 text-cyan-400" />;
      case 'Development': return <Code className="h-5 w-5 text-green-400" />;
      case 'Consulting': return <Users className="h-5 w-5 text-orange-400" />;
      case 'Security': return <Shield className="h-5 w-5 text-red-400" />;
      case 'Analytics': return <BarChart3 className="h-5 w-5 text-indigo-400" />;
      case 'Cloud': return <Cloud className="h-5 w-5 text-sky-400" />;
      case 'Automation': return <TrendingUp className="h-5 w-5 text-pink-400" />;
      case 'Integration': return <BarChart3 className="h-5 w-5 text-yellow-400" />;
      default: return <Zap className="h-5 w-5 text-gray-400" />;
    }
  };

  return (
    <Card className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
            {service.category}
          </Badge>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-zion-slate-light">{service.rating}</span>
          </div>
        </div>
        <CardTitle className="text-white text-lg group-hover:text-zion-cyan transition-colors duration-300">
          {service.title}
        </CardTitle>
        <CardDescription className="text-zion-slate-light">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-zion-cyan">
              {formatPrice(service)}
            </span>
            <Badge variant="outline" className="border-zion-purple/30 text-zion-purple">
              {service.price.pricingModel}
            </Badge>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-zion-slate-light">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{service.deliveryTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{service.reviewCount} reviews</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {service.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="pt-4 border-t border-zion-blue-light">
            <a
              href={service.contactLink}
              className="inline-flex items-center gap-2 text-zion-cyan hover:text-zion-purple transition-colors duration-300"
            >
              <span className="text-sm font-medium">Get Quote</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}