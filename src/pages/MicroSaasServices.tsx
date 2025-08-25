import React, { useState } from 'react';
import { Header } from '@/components/Header';
import Footer from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { MICRO_SAAS_SERVICES, MicroSaasService, getServiceByCategory, getServiceBySubcategory } from '@/data/microSaasServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Cloud, 
  Code, 
  BarChart3, 
  Bot, 
  Briefcase,
  Globe,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Clock,
  DollarSign
} from 'lucide-react';

export default function MicroSaasServices() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricingTier, setSelectedPricingTier] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('rating');

  const categories = ['all', ...Array.from(new Set(MICRO_SAAS_SERVICES.map(service => service.category)))];
  const pricingTiers = ['all', ...Array.from(new Set(MICRO_SAAS_SERVICES.map(service => service.pricingTier)))];

  const filteredServices = MICRO_SAAS_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.subcategory.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPricing = selectedPricingTier === 'all' || service.pricingTier === selectedPricingTier;
    
    return matchesSearch && matchesCategory && matchesPricing;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return (a.price.monthly || a.price.oneTime || 0) - (b.price.monthly || b.price.oneTime || 0);
      case 'newest':
        return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
      default:
        return 0;
    }
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI': return <Bot className="h-5 w-5" />;
      case 'IT': return <Shield className="h-5 w-5" />;
      case 'Development': return <Code className="h-5 w-5" />;
      case 'Analytics': return <BarChart3 className="h-5 w-5" />;
      case 'Security': return <Shield className="h-5 w-5" />;
      case 'Automation': return <Zap className="h-5 w-5" />;
      case 'Cloud': return <Cloud className="h-5 w-5" />;
      case 'Marketing': return <TrendingUp className="h-5 w-5" />;
      case 'Productivity': return <Briefcase className="h-5 w-5" />;
      case 'Finance': return <DollarSign className="h-5 w-5" />;
      default: return <Globe className="h-5 w-5" />;
    }
  };

  const getPricingDisplay = (service: MicroSaasService) => {
    if (service.price.oneTime) {
      return `${service.price.currency}${service.price.oneTime.toLocaleString()}`;
    } else if (service.price.monthly) {
      return `${service.price.currency}${service.price.monthly}/month`;
    }
    return 'Contact for pricing';
  };

  return (
    <>
      <SEO 
        title="Micro SAAS Services - Zion Tech Group" 
        description="Discover innovative micro SAAS services, IT solutions, and AI-powered tools designed to transform your business operations."
        keywords="micro SAAS, AI services, IT solutions, business automation, cloud services, cybersecurity"
      />
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-72 h-72 bg-zion-purple/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-zion-cyan/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-zion-blue/20 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
          </div>
          
          <div className="relative z-10 container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
              Micro SAAS Services
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Discover cutting-edge micro SAAS solutions, IT services, and AI-powered tools designed to accelerate your business growth and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                <Zap className="mr-2 h-5 w-5" />
                Get Started Today
              </Button>
              <Button variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <Users className="mr-2 h-5 w-5" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="bg-zion-blue-dark/50 backdrop-blur-md rounded-2xl p-6 border border-zion-blue-light/20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-4 w-4" />
                  <Input
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-zion-blue-dark/50 border-zion-blue-light/30 text-white placeholder:text-zion-slate-light"
                  />
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="bg-zion-blue-dark/50 border-zion-blue-light/30 text-white">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                    {categories.map(category => (
                      <SelectItem key={category} value={category} className="text-white hover:bg-zion-purple/20">
                        {category === 'all' ? 'All Categories' : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedPricingTier} onValueChange={setSelectedPricingTier}>
                  <SelectTrigger className="bg-zion-blue-dark/50 border-zion-blue-light/30 text-white">
                    <SelectValue placeholder="All Pricing Tiers" />
                  </SelectTrigger>
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                    {pricingTiers.map(tier => (
                      <SelectItem key={tier} value={tier} className="text-white hover:bg-zion-purple/20">
                        {tier === 'all' ? 'All Pricing Tiers' : tier}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="bg-zion-blue-dark/50 border-zion-blue-light/30 text-white">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                    <SelectItem value="rating" className="text-white hover:bg-zion-purple/20">Highest Rated</SelectItem>
                    <SelectItem value="price" className="text-white hover:bg-zion-purple/20">Lowest Price</SelectItem>
                    <SelectItem value="newest" className="text-white hover:bg-zion-purple/20">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                {filteredServices.length} Services Found
              </h2>
              <p className="text-zion-slate-light">
                Discover the perfect solution for your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedServices.map((service) => (
                <Card key={service.id} className="bg-zion-blue-dark/50 backdrop-blur-md border-zion-blue-light/20 hover:border-zion-purple/50 transition-all duration-300 hover:transform hover:scale-105 group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-zion-purple/20 text-zion-purple">
                          {getCategoryIcon(service.category)}
                        </div>
                        <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                          {service.category}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-medium">{service.rating}</span>
                        <span className="text-xs text-zion-slate-light">({service.reviewCount})</span>
                      </div>
                    </div>
                    
                    <CardTitle className="text-white text-lg group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </CardTitle>
                    
                    <CardDescription className="text-zion-slate-light text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Pricing */}
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-zion-cyan">
                        {getPricingDisplay(service)}
                      </div>
                      <Badge variant="outline" className="border-zion-purple text-zion-purple">
                        {service.pricingTier}
                      </Badge>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <Badge key={index} variant="secondary" className="bg-zion-blue-dark/50 text-zion-slate-light text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {service.features.length > 3 && (
                          <Badge variant="secondary" className="bg-zion-blue-dark/50 text-zion-slate-light text-xs">
                            +{service.features.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white">Benefits:</h4>
                      <div className="space-y-1">
                        {service.benefits.slice(0, 2).map((benefit, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="pt-4 border-t border-zion-blue-light/20">
                      <div className="flex items-center justify-between text-sm text-zion-slate-light mb-3">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>Launched {new Date(service.launchDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>{service.targetAudience.length} target audiences</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2 text-xs text-zion-slate-light">
                        <div className="flex items-center gap-2">
                          <Mail className="h-3 w-3" />
                          <span>{service.contactInfo.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-3 w-3" />
                          <span>{service.contactInfo.phone}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pt-4">
                      <Button 
                        className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                        size="sm"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Learn More
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                        size="sm"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Contact
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {sortedServices.length === 0 && (
              <div className="text-center py-12">
                <div className="text-zion-slate-light text-lg mb-4">
                  No services found matching your criteria
                </div>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedPricingTier('all');
                  }}
                  variant="outline"
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 backdrop-blur-md rounded-3xl p-12 border border-zion-purple/30">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
                Our team of experts is ready to help you implement the perfect solution for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1 302 464 0950
                </Button>
                <Button variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                  <Mail className="mr-2 h-5 w-5" />
                  Email kleber@ziontechgroup.com
                </Button>
              </div>
              <div className="mt-6 text-sm text-zion-slate-light">
                <MapPin className="inline h-4 w-4 mr-2" />
                364 E Main St STE 1008, Middletown DE 19709
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}