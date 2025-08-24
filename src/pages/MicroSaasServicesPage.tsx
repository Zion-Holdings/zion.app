import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  Zap, 
  Shield, 
  Cloud, 
  Code, 
  BarChart3,
  Users,
  Settings,
  ArrowRight,
  ExternalLink,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import { MICRO_SAAS_SERVICES, MicroSaasService, getMicroSaasServicesByCategory } from '@/data/microSaasServices';
import { SEO } from '@/components/SEO';

const categoryIcons = {
  'AI Services': <Zap className="h-5 w-5" />,
  'IT Services': <Settings className="h-5 w-5" />,
  'Micro SAAS': <Users className="h-5 w-5" />,
  'Development': <Code className="h-5 w-5" />,
  'Analytics': <BarChart3 className="h-5 w-5" />,
  'Security': <Shield className="h-5 w-5" />,
  'Cloud': <Cloud className="h-5 w-5" />,
  'Automation': <Zap className="h-5 w-5" />
};

const pricingModelColors = {
  'one-time': 'bg-blue-100 text-blue-800',
  'monthly': 'bg-green-100 text-green-800',
  'yearly': 'bg-purple-100 text-purple-800',
  'usage-based': 'bg-orange-100 text-orange-800'
};

export default function MicroSaasServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [filteredServices, setFilteredServices] = useState<MicroSaasService[]>(MICRO_SAAS_SERVICES);

  useEffect(() => {
    let filtered = MICRO_SAAS_SERVICES;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by price range
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(service => {
        if (priceRange === '1000+') return service.price >= 1000;
        return service.price >= min && service.price <= max;
      });
    }

    setFilteredServices(filtered);
  }, [searchQuery, selectedCategory, priceRange]);

  const categories = Array.from(new Set(MICRO_SAAS_SERVICES.map(service => service.category)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
      <SEO 
        title="Micro SAAS Services & IT Solutions - Zion Tech Group" 
        description="Discover innovative micro SAAS services, AI solutions, and IT services. From AI chatbots to cloud migration, we provide cutting-edge technology solutions."
        keywords="micro SAAS, AI services, IT services, cloud migration, cybersecurity, automation, development services"
        canonical="https://ziontechgroup.com/micro-saas-services"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-purple via-zion-blue to-zion-cyan py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/30 via-zion-blue/30 to-zion-cyan/30"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-zion-cyan/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-zion-purple/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-zion-blue/20 rounded-full animate-pulse delay-2000"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Micro SAAS Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
            Discover innovative micro SAAS solutions, cutting-edge AI services, and professional IT solutions designed to transform your business
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-zion-cyan" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
              <Input
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-white/20 border-white/30 text-white">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="bg-white/20 border-white/30 text-white">
                <SelectValue placeholder="All Prices" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-100">$0 - $100</SelectItem>
                <SelectItem value="100-500">$100 - $500</SelectItem>
                <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                <SelectItem value="1000+">$1,000+</SelectItem>
              </SelectContent>
            </Select>

            <Button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setPriceRange('all');
              }}
              variant="outline"
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white"
            >
              Clear Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <Card key={service.id} className="group overflow-hidden bg-white/10 backdrop-blur-md border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
              <div className="relative">
                <img 
                  src={service.images[0]} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-zion-purple/90 text-white">
                    {categoryIcons[service.category]}
                    {service.category}
                  </Badge>
                  {service.featured && (
                    <Badge className="bg-zion-cyan text-zion-slate-dark">
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className={`${pricingModelColors[service.pricingModel]} text-xs`}>
                    {service.pricingModel}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </CardTitle>
                  <div className="flex items-center gap-1 text-zion-cyan">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium">{service.rating}</span>
                    <span className="text-xs text-white/60">({service.reviewCount})</span>
                  </div>
                </div>
                <CardDescription className="text-white/70 line-clamp-2">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-4">
                <div className="space-y-4">
                  {/* Price and Market Info */}
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-zion-cyan">
                        {service.currency}{service.price.toLocaleString()}
                      </span>
                      <Badge className="bg-zion-blue text-white">
                        AI Score: {service.aiScore}
                      </Badge>
                    </div>
                    <p className="text-xs text-white/60">{service.marketPrice}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-white/70">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-zion-cyan mt-1">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-white/70">
                          <Zap className="h-3 w-3 text-zion-cyan" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-white/20 text-white/80">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <div className="w-full space-y-3">
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <div className="flex items-center gap-1">
                      <Globe className="h-3 w-3" />
                      {service.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {service.availability}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      asChild 
                      className="flex-1 bg-gradient-to-r from-zion-purple to-zion-blue hover:from-zion-purple-light hover:to-zion-blue-light text-white"
                    >
                      <a href={service.contactLink} target="_blank" rel="noopener noreferrer">
                        Get Quote
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white"
                      asChild
                    >
                      <a href="mailto:kleber@ziontechgroup.com?subject=Inquiry about service">
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-white mb-2">No services found</h3>
            <p className="text-white/60 mb-6">Try adjusting your search criteria or browse all services</p>
            <Button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setPriceRange('all');
              }}
              className="bg-zion-cyan text-zion-slate-dark hover:bg-zion-cyan-light"
            >
              View All Services
            </Button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-zion-purple/20 via-zion-blue/20 to-zion-cyan/20 rounded-3xl p-12 text-center border border-white/20">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to help you implement the perfect solution for your business needs. 
            Get in touch today for a personalized consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:from-zion-cyan-light hover:to-zion-blue-light"
              asChild
            >
              <a href="tel:+13024640950">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: +1 302 464 0950
              </a>
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white"
              asChild
            >
              <a href="mailto:kleber@ziontechgroup.com">
                <Mail className="h-5 w-5 mr-2" />
                Email Us
              </a>
            </Button>
          </div>
          
          <div className="mt-8 text-white/60">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🌐 <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline">ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}