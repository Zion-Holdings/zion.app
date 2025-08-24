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
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-zion-purple/20 to-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-zion-blue/20 to-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-full px-6 py-3 mb-6">
            <Sparkles className="h-5 w-5 text-zion-cyan" />
            <span className="text-zion-cyan font-medium">Innovative Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Zion Tech Services
          </h1>
          
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover our comprehensive suite of AI-powered services, IT solutions, and micro SAAS platforms designed to transform your business operations and drive innovation.
          </p>

          {/* Search and Filter Bar */}
          <div className="max-w-4xl mx-auto bg-zion-slate-dark/50 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
                <Input
                  placeholder="Search services, features, or use cases..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-zion-slate-dark/50 border-zion-purple/30 text-white placeholder:text-zion-slate-light focus:border-zion-cyan"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48 bg-zion-slate-dark/50 border-zion-purple/30 text-white">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent className="bg-zion-slate-dark border-zion-purple/30">
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-full md:w-48 bg-zion-slate-dark/50 border-zion-purple/30 text-white">
                  <SelectValue placeholder="All Prices" />
                </SelectTrigger>
                <SelectContent className="bg-zion-slate-dark border-zion-purple/30">
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="low">$1 - $50/month</SelectItem>
                  <SelectItem value="medium">$51 - $150/month</SelectItem>
                  <SelectItem value="high">$150+/month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 text-zion-cyan">
              <Users className="h-5 w-5" />
              <span>{MICRO_SAAS_SERVICES.length}+ Services</span>
            </div>
            <div className="flex items-center gap-2 text-zion-purple">
              <Star className="h-5 w-5" />
              <span>4.8+ Average Rating</span>
            </div>
            <div className="flex items-center gap-2 text-zion-cyan">
              <Globe className="h-5 w-5" />
              <span>150+ Countries</span>
            </div>
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.slice(0, 6).map((service) => (
              <ServiceCard key={service.id} service={service} featured />
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 bg-zion-slate-dark/50 backdrop-blur-md border border-zion-purple/20 p-1 rounded-xl">
            <TabsTrigger value="all" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-cyan">
              All
            </TabsTrigger>
            {categories.map(category => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-cyan"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map(category => (
            <TabsContent key={category} value={category} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getServiceByCategory(category).map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>
          ))}

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Contact CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-2xl p-8 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Our expert team can create tailored solutions for your specific business needs. 
              Get in touch for a free consultation and custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Contact Us
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
              >
                <Phone className="h-5 w-5 mr-2" />
                +1 302 464 0950
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ServiceCardProps {
  service: MicroSaasService;
  featured?: boolean;
}

const formatPrice = (service: MicroSaasService) => {
  if (service.price.oneTime) {
    return `${service.price.currency}${service.price.oneTime.toLocaleString()}`;
  }
  if (service.price.monthly === 0) {
    return 'Free';
  }
  return `${service.price.currency}${service.price.monthly}/month`;
};

function ServiceCard({ service, featured }: ServiceCardProps) {
  const CategoryIcon = categoryIcons[service.category as keyof typeof categoryIcons] || Building;
  const categoryColor = categoryColors[service.category as keyof typeof categoryColors] || 'from-gray-500 to-gray-600';

  return (
    <Card className="group relative overflow-hidden bg-zion-slate-dark/50 backdrop-blur-md border border-zion-purple/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
      {/* Animated border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <CardHeader className="relative z-10 pb-4">
        <div className="flex justify-between items-start mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${categoryColor}`}>
            <CategoryIcon className="h-6 w-6 text-white" />
          </div>
          {service.badge && (
            <Badge 
              variant="secondary" 
              className={`${
                service.badge === 'Popular' ? 'bg-zion-purple/20 text-zion-purple' :
                service.badge === 'New' ? 'bg-zion-cyan/20 text-zion-cyan' :
                service.badge === 'Featured' ? 'bg-zion-blue/20 text-zion-blue' :
                service.badge === 'Premium' ? 'bg-amber-500/20 text-amber-400' :
                'bg-emerald-500/20 text-emerald-400'
              }`}
            >
              {service.badge}
            </Badge>
          )}
        </div>
        
        <CardTitle className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors">
          {service.title}
        </CardTitle>
        
        <CardDescription className="text-zion-slate-light line-clamp-3">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="relative z-10 pb-4">
        {/* Price */}
        <div className="mb-4">
          <div className="text-2xl font-bold text-white mb-2">
            {formatPrice(service)}
          </div>
          {service.price.yearly > 0 && service.price.monthly > 0 && (
            <div className="text-sm text-zion-slate-light">
              {service.price.currency}{service.price.yearly}/year (save {Math.round((1 - service.price.yearly / (service.price.monthly * 12)) * 100)}%)
            </div>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${
                  i < Math.floor(service.rating) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-zion-slate-light'
                }`} 
              />
            ))}
          </div>
          <span className="text-sm text-zion-slate-light">
            {service.rating} ({service.reviewCount} reviews)
          </span>
        </div>

        {/* AI Score */}
        <div className="flex items-center gap-2 mb-4">
          <Brain className="h-4 w-4 text-zion-cyan" />
          <span className="text-sm text-zion-cyan font-medium">AI Score: {service.aiScore}%</span>
        </div>

        {/* Key Features */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-white">Key Features:</h4>
          <div className="grid grid-cols-1 gap-1">
            {service.features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                <CheckCircle className="h-3 w-3 text-zion-cyan flex-shrink-0" />
                <span className="line-clamp-1">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="relative z-10 pt-0">
        <Button 
          asChild 
          className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white group-hover:shadow-lg group-hover:shadow-zion-purple/25 transition-all duration-300"
        >
          <a href={service.link} target="_blank" rel="noopener noreferrer">
            <span>Learn More</span>
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </CardFooter>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Card>
  );
}

// Missing icon component
const MessageSquare = ({ className, ...props }: any) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const Phone = ({ className, ...props }: any) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);