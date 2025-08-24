import React, { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Star, 
  ExternalLink, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle,
  TrendingUp,
  Zap,
  Shield,
  Globe,
  Monitor,
  Database,
  Settings,
  Users,
  Brain,
  Cloud,
  Lock,
  Zap as ZapIcon,
  BarChart3
} from 'lucide-react';
import { MICRO_SAAS_SERVICES, MicroSaasService, getServicesByCategory } from '@/data/microSaasServices';
import { Link } from 'react-router-dom';

export default function MicroSaasServices() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPricing, setSelectedPricing] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('rating');

  const categories = ['all', ...Array.from(new Set(MICRO_SAAS_SERVICES.map(service => service.category)))];
  const pricingModels = ['all', 'subscription', 'usage', 'one-time', 'enterprise'];

  const filteredServices = useMemo(() => {
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

    // Filter by pricing model
    if (selectedPricing !== 'all') {
      filtered = filtered.filter(service => service.price.pricingModel === selectedPricing);
    }

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return a.price.monthly - b.price.monthly;
        case 'newest':
          return new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime();
        case 'name':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedPricing, sortBy]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI Services':
        return <Brain className="w-6 h-6" />;
      case 'IT Services':
        return <Monitor className="w-6 h-6" />;
      case 'Innovation':
        return <ZapIcon className="w-6 h-6" />;
      case 'Business Solutions':
        return <Settings className="w-6 h-6" />;
      default:
        return <Zap className="w-6 h-6" />;
    }
  };

  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case 'subscription':
        return 'Monthly/Yearly';
      case 'usage':
        return 'Pay per use';
      case 'one-time':
        return 'One-time payment';
      case 'enterprise':
        return 'Custom pricing';
      default:
        return model;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'live':
        return <Badge className="bg-green-500 hover:bg-green-600">Live</Badge>;
      case 'beta':
        return <Badge className="bg-blue-500 hover:bg-blue-600">Beta</Badge>;
      case 'coming-soon':
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">Coming Soon</Badge>;
      default:
        return null;
    }
  };

  return (
    <>
      <SEO 
        title="Micro SAAS Services - Zion Tech Group" 
        description="Discover our comprehensive suite of micro SAAS services including AI solutions, IT services, and innovative business tools."
        keywords="micro SAAS, AI services, IT solutions, business automation, cloud services, cybersecurity"
        canonical="https://ziontechgroup.com/micro-saas-services"
      />
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20"></div>
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-white to-zion-purple-light bg-clip-text text-transparent">
                Micro SAAS Services
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
                Transform your business with our cutting-edge micro SAAS solutions. 
                From AI-powered tools to enterprise-grade infrastructure, we've got you covered.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-light text-white px-8 py-3">
                  <Zap className="w-5 h-5 mr-2" />
                  Explore Services
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white/10 px-8 py-3"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-zion-blue-dark/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan">{MICRO_SAAS_SERVICES.length}+</div>
                <div className="text-zion-slate-light">Services Available</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-zion-purple-light">99.9%</div>
                <div className="text-zion-slate-light">Uptime Guarantee</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-zion-cyan">24/7</div>
                <div className="text-zion-slate-light">Support Available</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-zion-purple-light">1000+</div>
                <div className="text-zion-slate-light">Happy Customers</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-zion-blue">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col md:flex-row gap-4 flex-1 max-w-2xl">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
                  <Input
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder:text-zion-slate-light"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-48 bg-zion-blue-dark border-zion-blue-light text-white">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedPricing} onValueChange={setSelectedPricing}>
                  <SelectTrigger className="w-full md:w-48 bg-zion-blue-dark border-zion-blue-light text-white">
                    <SelectValue placeholder="Pricing Model" />
                  </SelectTrigger>
                  <SelectContent>
                    {pricingModels.map(model => (
                      <SelectItem key={model} value={model}>
                        {model === 'all' ? 'All Models' : getPricingModelLabel(model)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-40 bg-zion-blue-dark border-zion-blue-light text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price">Lowest Price</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="name">Alphabetical</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredServices.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-zion-slate-light">Try adjusting your search criteria or filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <Card 
                    key={service.id} 
                    className="group bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20"
                  >
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 flex gap-2">
                        {getStatusBadge(service.status)}
                        <Badge className="bg-zion-purple/80 hover:bg-zion-purple text-white">
                          {service.category}
                        </Badge>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <div className="flex items-center gap-2 text-white">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{service.rating}</span>
                          <span className="text-sm text-gray-300">({service.reviewCount})</span>
                        </div>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2 mb-2">
                          {getCategoryIcon(service.category)}
                          <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                            {service.title}
                          </CardTitle>
                        </div>
                      </div>
                      <CardDescription className="text-zion-slate-light leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {/* Pricing */}
                      <div className="bg-zion-blue/30 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-zion-slate-light text-sm">Starting at</span>
                          <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                            {getPricingModelLabel(service.price.pricingModel)}
                          </Badge>
                        </div>
                        <div className="text-2xl font-bold text-white">
                          {service.price.currency}{service.price.monthly}
                          <span className="text-sm text-zion-slate-light font-normal">/month</span>
                        </div>
                        <div className="text-sm text-zion-slate-light">
                          {service.price.yearly && `${service.price.currency}${service.price.yearly}/year`}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-zion-cyan" />
                          Key Features
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {service.features.slice(0, 4).map((feature, index) => (
                            <div key={index} className="text-sm text-zion-slate-light flex items-center gap-1">
                              <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {service.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="secondary" className="bg-zion-blue/50 text-zion-slate-light hover:bg-zion-blue/70">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-light text-white" asChild>
                          <a href={service.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Learn More
                          </a>
                        </Button>
                        <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10" asChild>
                          <a href={`mailto:${service.contact.email}?subject=Inquiry about ${service.title}`}>
                            <Mail className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>

                      {/* Contact Info */}
                      <div className="pt-4 border-t border-zion-blue-light">
                        <div className="text-sm text-zion-slate-light space-y-1">
                          <div className="flex items-center gap-2">
                            <Phone className="w-3 h-3" />
                            <a href={`tel:${service.contact.phone}`} className="hover:text-zion-cyan transition-colors">
                              {service.contact.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="w-3 h-3" />
                            <a href={`mailto:${service.contact.email}`} className="hover:text-zion-cyan transition-colors">
                              {service.contact.email}
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Our team of experts is ready to help you choose the perfect solutions and implement them seamlessly.
              Get started today with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3">
                <Mail className="w-5 h-5 mr-2" />
                Contact Sales Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}