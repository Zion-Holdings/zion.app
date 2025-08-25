import React, { useState } from 'react';
import { MICRO_SAAS_SERVICES, getServiceByCategory, getPopularServices, getNewServices } from '@/data/microSaasServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, TrendingUp, Sparkles, Shield, Zap, Globe, Code, BarChart3, Settings, Monitor, Database, Bot } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { FuturisticAnimatedBackground } from '@/components/ui/FuturisticAnimatedBackground';
import { FuturisticNeonButton } from '@/components/ui/FuturisticNeonButton';

const categoryIcons = {
  AI: <Sparkles className="w-5 h-5" />,
  IT: <Settings className="w-5 h-5" />,
  Development: <Code className="w-5 h-5" />,
  Analytics: <BarChart3 className="w-5 h-5" />,
  Security: <Shield className="w-5 h-5" />,
  Automation: <Zap className="w-5 h-5" />,
  Integration: <Database className="w-5 h-5" />,
  Monitoring: <Monitor className="w-5 h-5" />
};

const categoryColors = {
  AI: 'from-purple-500 to-pink-500',
  IT: 'from-blue-500 to-cyan-500',
  Development: 'from-green-500 to-emerald-500',
  Analytics: 'from-orange-500 to-red-500',
  Security: 'from-red-500 to-pink-500',
  Automation: 'from-yellow-500 to-orange-500',
  Integration: 'from-indigo-500 to-purple-500',
  Monitoring: 'from-teal-500 to-blue-500'
};

export default function MicroSaasServices() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('rating');

  const filteredServices = MICRO_SAAS_SERVICES.filter(service => {
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
      case 'aiScore':
        return b.aiScore - a.aiScore;
      case 'price':
        return a.pricing.monthly - b.pricing.monthly;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  const popularServices = getPopularServices();
  const newServices = getNewServices();

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark relative">
      <FuturisticAnimatedBackground intensity="medium" colorScheme="zion" />
      
      <SEO 
        title="Micro SAAS Services - Zion Tech Group" 
        description="Discover innovative micro SAAS solutions for AI, IT, development, analytics, security, and automation. Real pricing, features, and benefits."
        keywords="micro SAAS, AI services, IT solutions, development tools, analytics platform, cybersecurity, automation"
        canonical="https://ziontechgroup.com/micro-saas-services"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-blue/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
              Micro SAAS
            </span>
            <br />
            <span className="text-zion-slate-light">Solutions</span>
        </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover cutting-edge micro SAAS services designed to transform your business. 
            From AI-powered solutions to enterprise-grade tools, we've got everything you need to succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <FuturisticNeonButton size="lg" variant="primary" glowIntensity="high" icon={<TrendingUp className="w-5 h-5" />}>
              Explore Services
            </FuturisticNeonButton>
            <FuturisticNeonButton size="lg" variant="secondary" glowIntensity="medium" icon={<Globe className="w-5 h-5" />}>
              Contact Sales
            </FuturisticNeonButton>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="bg-zion-blue-dark/50 backdrop-blur-md rounded-2xl p-6 border border-zion-blue-light/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Input
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-zion-blue-dark border-zion-blue-light text-white placeholder-zion-slate-light"
              />
            </div>
            <div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                  <SelectItem value="all">All Categories</SelectItem>
                  {Object.keys(categoryIcons).map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-zion-blue-dark border-zion-blue-light text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="aiScore">Best AI Score</SelectItem>
                  <SelectItem value="price">Lowest Price</SelectItem>
                  <SelectItem value="name">Alphabetical</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-zion-blue-dark/50 backdrop-blur-md border border-zion-blue-light/20">
            <TabsTrigger value="all" className="text-zion-cyan">All Services</TabsTrigger>
            <TabsTrigger value="popular" className="text-zion-cyan">Popular</TabsTrigger>
            <TabsTrigger value="new" className="text-zion-cyan">New</TabsTrigger>
            <TabsTrigger value="ai" className="text-zion-cyan">AI Focus</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedServices.map((service) => (
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

          <TabsContent value="ai" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getServiceByCategory('AI').map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-3xl p-12 text-center border border-zion-purple/30">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Contact our team to learn more about our micro SAAS services and how they can transform your business.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-zion-slate-light">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-zion-cyan" />
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ServiceCardProps {
  service: typeof MICRO_SAAS_SERVICES[0];
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="bg-zion-blue-dark/50 backdrop-blur-md border border-zion-blue-light/20 hover:border-zion-purple/50 transition-all duration-300 hover:scale-105 group">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${categoryColors[service.category]} flex items-center justify-center`}>
            {categoryIcons[service.category]}
          </div>
          <div className="flex items-center gap-2">
            {service.isNew && (
              <Badge className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white">
                <Sparkles className="w-3 h-3 mr-1" />
                New
              </Badge>
            )}
            {service.isPopular && (
              <Badge className="bg-gradient-to-r from-zion-purple to-zion-pink text-white">
                <TrendingUp className="w-3 h-3 mr-1" />
                Popular
              </Badge>
            )}
          </div>
        </div>
        <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
          {service.title}
        </CardTitle>
        <CardDescription className="text-zion-slate-light">
          {service.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Features */}
        <div>
          <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features</h4>
          <div className="flex flex-wrap gap-1">
            {service.features.slice(0, 4).map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-xs bg-zion-blue-light/20 text-zion-slate-light border-zion-blue-light/30">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div>
          <h4 className="text-sm font-semibold text-zion-cyan mb-2">Benefits</h4>
          <ul className="text-sm text-zion-slate-light space-y-1">
            {service.benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-zion-cyan mt-2 flex-shrink-0"></div>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing */}
        <div className="border-t border-zion-blue-light/20 pt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-zion-slate-light">Starting from</span>
            <span className="text-2xl font-bold text-white">${service.pricing.monthly}</span>
          </div>
          <div className="flex items-center justify-between text-sm text-zion-slate-light">
            <span>Market average: ${service.marketPrice.average}</span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>{service.rating}</span>
              <span className="text-zion-slate-light">({service.reviewCount})</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-4">
          <FuturisticNeonButton className="flex-1" variant="primary" glowIntensity="medium">
            Learn More
          </FuturisticNeonButton>
          <FuturisticNeonButton variant="secondary" glowIntensity="low">
            Contact
          </FuturisticNeonButton>
        </div>
      </CardContent>
    </Card>
  );
}