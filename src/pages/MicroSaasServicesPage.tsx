import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Cloud, 
  Code, 
  BarChart3,
  Globe,
  Phone,
  Mail,
  ExternalLink,
  Play,
  FileText,
  CheckCircle,
  TrendingUp,
  Clock,
  DollarSign
} from "lucide-react";
import { MICRO_SAAS_SERVICES, MicroSaasService, getServicesByCategory } from '@/data/microSaasServices';
import { SEO } from '@/components/SEO';

export default function MicroSaasServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  const filteredServices = useMemo(() => {
    let services = MICRO_SAAS_SERVICES;

    // Filter by category
    if (selectedCategory !== 'all') {
      services = services.filter(service => service.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      services = services.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Sort services
    switch (sortBy) {
      case 'price-low':
        services = [...services].sort((a, b) => (a.pricing.monthly || 0) - (b.pricing.monthly || 0));
        break;
      case 'price-high':
        services = [...services].sort((a, b) => (b.pricing.monthly || 0) - (a.pricing.monthly || 0));
        break;
      case 'rating':
        services = [...services].sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        services = [...services].sort((a, b) => Number(b.featured) - Number(a.featured));
        break;
    }

    return services;
  }, [searchQuery, selectedCategory, sortBy]);

  const categories = [
    { value: 'all', label: 'All Services', icon: <Globe className="h-4 w-4" /> },
    { value: 'AI Services', label: 'AI Services', icon: <Zap className="h-4 w-4" /> },
    { value: 'IT Services', label: 'IT Services', icon: <Shield className="h-4 w-4" /> },
    { value: 'Micro SAAS', label: 'Micro SAAS', icon: <Users className="h-4 w-4" /> },
    { value: 'Development', label: 'Development', icon: <Code className="h-4 w-4" /> },
  ];

  const renderPricing = (service: MicroSaasService) => {
    if (service.pricing.custom) {
      return (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Custom Pricing</p>
          <p className="text-xs text-muted-foreground">{service.pricing.custom}</p>
        </div>
      );
    }

    return (
      <div className="text-center">
        <div className="flex items-center justify-center gap-1 mb-1">
          <span className="text-2xl font-bold text-primary">{service.pricing.currency}</span>
          <span className="text-2xl font-bold">{service.pricing.monthly}</span>
          <span className="text-sm text-muted-foreground">/mo</span>
        </div>
        <p className="text-xs text-muted-foreground">
          {service.pricing.currency}{service.pricing.yearly}/year
        </p>
      </div>
    );
  };

  const renderServiceCard = (service: MicroSaasService) => (
    <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-zion-purple/20 hover:border-zion-purple/40 overflow-hidden">
      <div className="relative">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {service.featured && (
          <Badge className="absolute top-3 right-3 bg-gradient-to-r from-zion-purple to-zion-cyan text-white border-0">
            Featured
          </Badge>
        )}
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-md">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-medium">{service.rating}</span>
          <span className="text-xs text-gray-300">({service.reviewCount})</span>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg group-hover:text-zion-cyan transition-colors">
              {service.title}
            </CardTitle>
            <CardDescription className="line-clamp-2 mt-2">
              {service.description}
            </CardDescription>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mt-3">
          {service.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs bg-zion-purple/10 text-zion-purple hover:bg-zion-purple/20">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Pricing */}
        <div className="bg-gradient-to-r from-zion-blue-dark/10 to-zion-purple/10 p-3 rounded-lg border border-zion-blue/20">
          {renderPricing(service)}
        </div>

        {/* Key Benefits */}
        <div>
          <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-zion-cyan" />
            Key Benefits
          </h4>
          <ul className="space-y-1">
            {service.benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                <CheckCircle className="h-3 w-3 text-zion-cyan mt-0.5 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Target Audience */}
        <div>
          <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
            <Users className="h-4 w-4 text-zion-cyan" />
            Perfect For
          </h4>
          <div className="flex flex-wrap gap-1">
            {service.targetAudience.slice(0, 2).map((audience, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {audience}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <div className="px-6 pb-6 space-y-3">
        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button asChild className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
            <a href={service.website} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Visit Website
            </a>
          </Button>
          {service.demoUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={service.demoUrl} target="_blank" rel="noopener noreferrer">
                <Play className="h-4 w-4 mr-2" />
                Demo
              </a>
            </Button>
          )}
        </div>

        {/* Contact Info */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Mail className="h-3 w-3" />
            <a href={`mailto:${service.contactEmail}`} className="hover:text-zion-cyan transition-colors">
              {service.contactEmail}
            </a>
          </div>
          {service.phone && (
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3" />
              <a href={`tel:${service.phone}`} className="hover:text-zion-cyan transition-colors">
                {service.phone}
              </a>
            </div>
          )}
        </div>
      </div>
    </Card>
  );

  return (
    <>
      <SEO 
        title="Micro SAAS Services & IT Solutions - Zion Tech Group" 
        description="Discover our comprehensive suite of micro SAAS services, AI solutions, IT services, and development solutions. Transform your business with cutting-edge technology."
        keywords="micro SAAS, AI services, IT services, software development, cloud migration, cybersecurity, project management"
        canonical="https://ziontechgroup.com/micro-saas-services"
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-purple-dark overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/20 to-zion-purple/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-zion-blue/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
        </div>

        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-zion-cyan via-white to-zion-purple-light bg-clip-text text-transparent">
              Micro SAAS Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8">
            Transform your business with our comprehensive suite of AI-powered services, 
            IT solutions, and innovative micro SAAS platforms
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Zap className="h-5 w-5 text-zion-cyan" />
              <span className="text-white">AI Services</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Shield className="h-5 w-5 text-zion-cyan" />
              <span className="text-white">IT Solutions</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Users className="h-5 w-5 text-zion-cyan" />
              <span className="text-white">Micro SAAS</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Code className="h-5 w-5 text-zion-cyan" />
              <span className="text-white">Development</span>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-3">Ready to Get Started?</h3>
            <p className="text-zion-slate-light mb-4">
              Contact our team for personalized consultation and pricing
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light">
                <a href="mailto:kleber@ziontechgroup.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Us
                </a>
              </Button>
              <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                <Phone className="h-4 w-4 mr-2" />
                +1 302 464 0950
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Filters and Search */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white/5 border-zion-purple/20 focus:border-zion-purple/40"
                />
              </div>
            </div>
            
            <div className="flex gap-3">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 bg-white/5 border-zion-purple/20">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      <div className="flex items-center gap-2">
                        {category.icon}
                        {category.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 bg-white/5 border-zion-purple/20">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured First</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map(renderServiceCard)}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No services found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria or browse all categories
            </p>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Our team of experts can create tailored solutions to meet your specific business needs. 
            Let's discuss how we can help transform your business.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Mail className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-slate-light mb-3">Get in touch for detailed quotes</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Phone className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-slate-light mb-3">Speak directly with our team</p>
              <a href="tel:+13024640950" className="text-zion-cyan hover:text-zion-cyan-light transition-colors">
                +1 302 464 0950
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <Globe className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-slate-light mb-3">Our headquarters</p>
              <p className="text-zion-cyan">
                364 E Main St STE 1008<br />
                Middletown, DE 19709
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}