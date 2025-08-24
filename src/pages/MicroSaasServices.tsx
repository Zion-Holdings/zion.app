import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MICRO_SAAS_SERVICES, 
  getServiceByCategory, 
  getPopularServices, 
  getNewServices,
  type MicroSaasService 
} from "@/data/microSaasServices";
import { 
  Search, 
  Filter, 
  ExternalLink, 
  Phone, 
  Mail, 
  MapPin,
  Star,
  TrendingUp,
  Sparkles,
  Zap,
  Shield,
  Code,
  Building,
  BarChart3,
  Settings,
  Link
} from "lucide-react";
import { SEO } from "@/components/SEO";

const categoryIcons = {
  AI: Sparkles,
  IT: Settings,
  Development: Code,
  Business: Building,
  Security: Shield,
  Analytics: BarChart3,
  Automation: Zap,
  Integration: Link
};

export default function MicroSaasServices() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('name');

  const filteredServices = MICRO_SAAS_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.pricing.monthly - b.pricing.monthly;
      case 'price-high':
        return b.pricing.monthly - a.pricing.monthly;
      case 'name':
        return a.title.localeCompare(b.title);
      case 'popular':
        return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
      default:
        return 0;
    }
  });

  const categories = ['all', ...Array.from(new Set(MICRO_SAAS_SERVICES.map(s => s.category)))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
      <SEO 
        title="Micro SAAS Services - Zion Tech Group" 
        description="Discover our comprehensive suite of micro SAAS services including AI, IT, Development, Business, Security, Analytics, Automation, and Integration solutions."
        keywords="micro SAAS, AI services, IT services, development tools, business automation, cybersecurity, data analytics"
        canonical="https://ziontechgroup.com/micro-saas-services"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-purple via-zion-purple-light to-zion-cyan py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-zion-cyan to-white bg-clip-text text-transparent">
            Micro SAAS Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-cyan-light max-w-4xl mx-auto mb-8">
            Transform your business with our cutting-edge micro SAAS solutions. 
            From AI-powered tools to enterprise integration platforms, we have everything you need to succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30 px-4 py-2 text-lg">
              🤖 AI-Powered Solutions
            </Badge>
            <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple-light border-zion-purple/30 px-4 py-2 text-lg">
              ☁️ Cloud-Native Architecture
            </Badge>
            <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30 px-4 py-2 text-lg">
              🔒 Enterprise Security
            </Badge>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-zion-cyan/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-zion-purple/20 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-zion-cyan/30 rounded-full animate-bounce"></div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-zion-slate/50 backdrop-blur-md rounded-2xl p-6 border border-zion-purple/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-cyan w-5 h-5" />
              <Input
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-zion-slate border-zion-purple/30 text-white placeholder:text-zion-cyan/60"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-zion-slate border-zion-purple/30 text-white">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent className="bg-zion-slate border-zion-purple/30">
                {categories.map(category => (
                  <SelectItem key={category} value={category} className="text-white hover:bg-zion-purple/20">
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="bg-zion-slate border-zion-purple/30 text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-zion-slate border-zion-purple/30">
                <SelectItem value="name" className="text-white hover:bg-zion-purple/20">Name</SelectItem>
                <SelectItem value="price-low" className="text-white hover:bg-zion-purple/20">Price: Low to High</SelectItem>
                <SelectItem value="price-high" className="text-white hover:bg-zion-purple/20">Price: High to Low</SelectItem>
                <SelectItem value="popular" className="text-white hover:bg-zion-purple/20">Most Popular</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="text-zion-cyan text-sm flex items-center justify-center">
              {filteredServices.length} services found
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        {sortedServices.length === 0 && (
          <div className="text-center py-20">
            <div className="text-zion-cyan text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
            <p className="text-zion-cyan/60">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-zion-slate to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-zion-cyan-light mb-8 max-w-2xl mx-auto">
            Contact our team to learn more about our micro SAAS services and how they can transform your business.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="flex items-center justify-center gap-3 text-zion-cyan">
              <Mail className="w-6 h-6" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-zion-cyan">
              <Phone className="w-6 h-6" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-zion-cyan">
              <MapPin className="w-6 h-6" />
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ServiceCardProps {
  service: MicroSaasService;
}

function ServiceCard({ service }: ServiceCardProps) {
  const CategoryIcon = categoryIcons[service.category as keyof typeof categoryIcons] || Settings;
  
  return (
    <Card className="group bg-gradient-to-br from-zion-slate/80 to-zion-blue-dark/80 backdrop-blur-md border-zion-purple/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 hover:-translate-y-2">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-4">
          <div className="text-4xl">{service.icon}</div>
          <div className="flex gap-2">
            {service.isPopular && (
              <Badge className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white border-0">
                <TrendingUp className="w-3 h-3 mr-1" />
                Popular
              </Badge>
            )}
            {service.isNew && (
              <Badge className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white border-0">
                <Sparkles className="w-3 h-3 mr-1" />
                New
              </Badge>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
          <CategoryIcon className="w-5 h-5 text-zion-cyan" />
          <Badge variant="outline" className="border-zion-purple/30 text-zion-purple-light">
            {service.category}
          </Badge>
        </div>
        
        <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
          {service.title}
        </CardTitle>
        <CardDescription className="text-zion-cyan/70 line-clamp-3">
          {service.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Features */}
        <div>
          <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Features</h4>
          <div className="grid grid-cols-1 gap-1">
            {service.features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-zion-cyan/80">
                <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                <span className="line-clamp-1">{feature}</span>
              </div>
            ))}
            {service.features.length > 4 && (
              <div className="text-xs text-zion-cyan/60">
                +{service.features.length - 4} more features
              </div>
            )}
          </div>
        </div>
        
        {/* Benefits */}
        <div>
          <h4 className="text-sm font-semibold text-zion-cyan mb-2">Key Benefits</h4>
          <div className="grid grid-cols-1 gap-1">
            {service.benefits.slice(0, 3).map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-zion-cyan/80">
                <Star className="w-3 h-3 text-zion-cyan" />
                <span className="line-clamp-1">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Pricing */}
        <div className="bg-zion-purple/10 rounded-lg p-3 border border-zion-purple/20">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-zion-cyan">Pricing</span>
            <span className="text-xs text-zion-cyan/60">Market: ${service.marketPrice.min}-${service.marketPrice.max}</span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <span className="text-2xl font-bold text-white">${service.pricing.monthly}</span>
              <span className="text-sm text-zion-cyan/60">/month</span>
            </div>
            <div className="text-right">
              <div className="text-sm text-zion-cyan">${service.pricing.yearly}</div>
              <div className="text-xs text-zion-cyan/60">/year</div>
            </div>
          </div>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {service.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-zion-blue/20 text-zion-cyan border-zion-blue/30 text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-col gap-3 pt-0">
        <Button 
          asChild 
          className="w-full bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white border-0"
        >
          <a href={service.website} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            Learn More
          </a>
        </Button>
        
        <div className="flex gap-2 w-full">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 border-zion-purple/30 text-zion-purple-light hover:bg-zion-purple/10"
            asChild
          >
            <a href={`mailto:${service.contact.email}`}>
              <Mail className="w-4 h-4 mr-1" />
              Email
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 border-zion-cyan/30 text-zion-cyan hover:bg-zion-cyan/10"
            asChild
          >
            <a href={`tel:${service.contact.phone}`}>
              <Phone className="w-4 h-4 mr-1" />
              Call
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}