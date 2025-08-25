import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Code, 
  BarChart3,
  Bot,
  Globe,
  Building,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Brain,
  Database,
  Cloud,
  Smartphone,
  FileText,
  Lock,
  Settings
} from 'lucide-react';
import { MICRO_SAAS_SERVICES, MicroSaasService, getServiceByCategory, getFeaturedServices } from '@/data/microSaasServices';
import { motion } from 'framer-motion';

const categoryIcons = {
  'AI Services': Brain,
  'IT Services': Settings,
  'Micro SAAS': Building,
  'Development': Code,
  'Analytics': BarChart3,
  'Security': Shield,
  'Automation': Bot
};

const categoryColors = {
  'AI Services': 'from-purple-500 to-pink-500',
  'IT Services': 'from-blue-500 to-cyan-500',
  'Micro SAAS': 'from-green-500 to-emerald-500',
  'Development': 'from-orange-500 to-red-500',
  'Analytics': 'from-indigo-500 to-purple-500',
  'Security': 'from-red-500 to-pink-500',
  'Automation': 'from-teal-500 to-blue-500'
};

export function MicroSaasServicesShowcase() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');

  const filteredServices = MICRO_SAAS_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'free' && service.price.monthly === 0) ||
                        (priceRange === 'low' && service.price.monthly > 0 && service.price.monthly <= 50) ||
                        (priceRange === 'medium' && service.price.monthly > 50 && service.price.monthly <= 150) ||
                        (priceRange === 'high' && service.price.monthly > 150);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const categories = Array.from(new Set(MICRO_SAAS_SERVICES.map(service => service.category)));
  const featuredServices = getFeaturedServices();

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-zion-blue/20 to-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-full px-6 py-3 mb-8">
            <Sparkles className="h-5 w-5 text-zion-cyan" />
            <span className="text-zion-cyan font-medium">Innovative Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent leading-tight">
            Zion Tech Services
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-10 leading-relaxed">
            Discover our comprehensive suite of AI-powered services, IT solutions, and micro SAAS platforms designed to transform your business operations and drive innovation.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 justify-center">
              <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                <Building className="h-6 w-6 text-zion-cyan" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-zion-cyan">{MICRO_SAAS_SERVICES.length}+</div>
                <div className="text-sm text-zion-slate-light">Services</div>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-12 h-12 bg-zion-purple/20 rounded-lg flex items-center justify-center">
                <Star className="h-6 w-6 text-zion-purple" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-zion-purple">4.8</div>
                <div className="text-sm text-zion-slate-light">Rating</div>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-zion-cyan" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-zion-cyan">50+</div>
                <div className="text-sm text-zion-slate-light">Clients</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 mb-16 border border-white/20 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
                <Input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/20 border-white/30 text-white placeholder-zion-slate-light focus:bg-white/30 focus:border-zion-cyan/50 h-12"
                />
              </div>
            </div>
            
            {/* Category Filter */}
            <div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-white/20 border-white/30 text-white focus:bg-white/30 focus:border-zion-cyan/50 h-12">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-zion-slate-dark border-zion-cyan/30">
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* Price Filter */}
            <div>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="bg-white/20 border-white/30 text-white focus:bg-white/30 focus:border-zion-cyan/50 h-12">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent className="bg-zion-slate-dark border-zion-cyan/30">
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="low">$1 - $50</SelectItem>
                  <SelectItem value="medium">$51 - $150</SelectItem>
                  <SelectItem value="high">$150+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Featured Services
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Our most popular and highly-rated solutions that are transforming businesses worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {featuredServices.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Browse by Category
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Explore our services organized by category to find exactly what you need.
            </p>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 bg-white/10 backdrop-blur-md border-white/20 mb-8">
              <TabsTrigger value="all" className="data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
                All
              </TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                  {getServiceByCategory(category).map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </TabsContent>
            ))}
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                {filteredServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-8 lg:p-12 border border-white/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-zion-slate-light max-w-2xl mx-auto mb-8">
            Can't find exactly what you're looking for? Our team can create a custom solution 
            tailored to your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 h-auto text-lg font-semibold">
              <Sparkles className="h-5 w-5 mr-2" />
              Get Custom Quote
            </Button>
            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 h-auto text-lg font-semibold">
              <ArrowRight className="h-5 w-5 mr-2" />
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function for formatting prices
const formatPrice = (price: number, currency: string = 'USD') => {
  if (price === 0) return 'Free';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

// Service Card Component
const ServiceCard: React.FC<{ service: MicroSaasService }> = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zion-dark/80 via-zion-dark/60 to-zion-primary/20 backdrop-blur-sm border border-zion-primary/30 hover:border-zion-primary/60 transition-all duration-500"
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-primary/5 via-transparent to-zion-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-primary/20 via-transparent to-zion-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
      
      <div className="relative p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                service.badge === 'New' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                service.badge === 'Popular' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                service.badge === 'Featured' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                'bg-zion-primary/20 text-zion-primary border border-zion-primary/30'
              }`}>
                {service.badge}
              </span>
              <span className="text-zion-secondary/60 text-xs">{service.category}</span>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-zion-primary transition-colors duration-300">
              {service.name}
            </h3>
          </div>
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zion-primary/20 to-zion-secondary/20 flex items-center justify-center border border-zion-primary/30">
            <service.icon className="w-6 h-6 text-zion-primary" />
          </div>
        </div>

        {/* Description */}
        <p className="text-zion-light/80 text-sm leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-zion-primary">Key Features:</h4>
          <div className="grid grid-cols-2 gap-2">
            {service.features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-zion-light/70">
                <div className="w-1.5 h-1.5 rounded-full bg-zion-primary" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-zion-primary">Pricing:</h4>
          <div className="grid grid-cols-3 gap-2 text-xs">
            {service.price.monthly && (
              <div className="text-center p-2 rounded-lg bg-zion-dark/50 border border-zion-primary/20">
                <div className="text-zion-light/60">Monthly</div>
                <div className="text-white font-semibold">{formatPrice(service.price.monthly)}</div>
              </div>
            )}
            {service.price.yearly && (
              <div className="text-center p-2 rounded-lg bg-zion-primary/20 border border-zion-primary/30">
                <div className="text-zion-light/60">Yearly</div>
                <div className="text-white font-semibold">{formatPrice(service.price.yearly)}</div>
                {service.price.monthly && (
                  <div className="text-zion-secondary text-xs">
                    Save {Math.round(((service.price.monthly * 12 - service.price.yearly) / (service.price.monthly * 12)) * 100)}%
                  </div>
                )}
              </div>
            )}
            {service.price.oneTime && (
              <div className="text-center p-2 rounded-lg bg-zion-dark/50 border border-zion-primary/20">
                <div className="text-zion-light/60">One-time</div>
                <div className="text-white font-semibold">{formatPrice(service.price.oneTime)}</div>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="pt-2">
          <button className="w-full bg-gradient-to-r from-zion-primary to-zion-secondary hover:from-zion-primary/90 hover:to-zion-secondary/90 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-primary/25">
            Get Started
          </button>
        </div>
      </div>

      {/* Hover overlay */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-zion-primary/10 to-zion-secondary/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </motion.div>
  );
};