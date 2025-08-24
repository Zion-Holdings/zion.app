import React, { useState, useMemo } from 'react';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, SUBSCRIPTION_TIERS } from '@/data/comprehensiveServices';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Zap,
  Globe,
  Phone,
  Mail,
  ExternalLink,
  Award,
  Users,
  ArrowUpRight
} from 'lucide-react';
import { SEO } from '@/components/SEO';

interface FilterState {
  search: string;
  category: string;
  pricingModel: string;
  priceRange: string;
}

export default function ComprehensiveServicesPage() {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: '',
    pricingModel: '',
    priceRange: ''
  });

  const filteredServices = useMemo(() => {
    return COMPREHENSIVE_SERVICES.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                           service.description.toLowerCase().includes(filters.search.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(filters.search.toLowerCase()));
      
      const matchesCategory = !filters.category || service.category === filters.category;
      const matchesPricingModel = !filters.pricingModel || service.pricingModel === filters.pricingModel;
      
      let matchesPriceRange = true;
      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split('-').map(Number);
        if (max) {
          matchesPriceRange = service.price >= min && service.price <= max;
        } else {
          matchesPriceRange = service.price >= min;
        }
      }
      
      return matchesSearch && matchesCategory && matchesPricingModel && matchesPriceRange;
    });
  }, [filters]);

  const featuredServices = COMPREHENSIVE_SERVICES.filter(service => service.featured);
  const categories = SERVICE_CATEGORIES;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
        return <Zap className="h-5 w-5" />;
      case 'Cloud & DevOps':
        return <Globe className="h-5 w-5" />;
      case 'Cybersecurity':
        return <Shield className="h-5 w-5" />;
      case 'Data & Analytics':
        return <TrendingUp className="h-5 w-5" />;
      case 'Web & Mobile Development':
        return <ArrowUpRight className="h-5 w-5" />;
      case 'Blockchain & Web3':
        return <Award className="h-5 w-5" />;
      case 'IoT & Hardware':
        return <Users className="h-5 w-5" />;
      case 'Digital Transformation':
        return <TrendingUp className="h-5 w-5" />;
      default:
        return <ArrowUpRight className="h-5 w-5" />;
    }
  };

  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case 'one-time':
        return 'One-time';
      case 'subscription':
        return 'Subscription';
      case 'usage-based':
        return 'Usage-based';
      case 'project-based':
        return 'Project-based';
      default:
        return model;
    }
  };

  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="Comprehensive IT & AI Services - Zion Tech Group" 
        description="Discover our comprehensive range of micro SAAS services, IT solutions, and AI services. From AI development to cybersecurity, we offer enterprise-grade solutions at competitive prices."
        keywords="AI services, IT solutions, micro SAAS, cybersecurity, cloud migration, data analytics, blockchain, IoT, digital transformation"
        canonical="https://ziontechgroup.com/comprehensive-services"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive IT & AI Services
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our extensive range of micro SAAS services, enterprise IT solutions, and cutting-edge AI services. 
            From AI-powered chatbots to zero-trust security, we deliver innovative solutions that drive business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
              <Phone className="h-5 w-5 mr-2" />
              Contact Us: +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="h-5 w-5 mr-2" />
              kleber@ziontechgroup.com
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-xl">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                      {getCategoryIcon(service.category)}
                      <span className="ml-2">{service.category}</span>
                    </Badge>
                    <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                      Featured
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light">Price:</span>
                      <span className="text-white font-semibold">
                        {service.currency}{service.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light">Market Price:</span>
                      <span className="text-zion-cyan">{service.marketPrice}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light">Delivery:</span>
                      <span className="text-white">{service.deliveryTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light">Rating:</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-white">{service.rating}</span>
                        <span className="text-zion-slate-light ml-1">({service.reviewCount})</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-3">
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                    <Phone className="h-4 w-4 mr-2" />
                    Get Quote
                  </Button>
                  <div className="text-center text-sm text-zion-slate-light">
                    <div>Contact: {service.contactInfo.phone}</div>
                    <div>{service.contactInfo.email}</div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4 bg-zion-blue-dark">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Service Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="bg-zion-blue border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-xl cursor-pointer">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full w-16 h-16 flex items-center justify-center">
                    {getCategoryIcon(category.name)}
                  </div>
                  <CardTitle className="text-white text-lg">{category.name}</CardTitle>
                  <CardDescription className="text-zion-slate-light text-sm">
                    {category.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <Card className="bg-zion-blue-dark border-zion-blue-light">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                Find Your Perfect Service
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
                  <Input
                    placeholder="Search services..."
                    value={filters.search}
                    onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
                    className="pl-10 bg-zion-blue border-zion-blue-light focus:border-zion-purple text-white"
                  />
                </div>
                
                <Select value={filters.category} onValueChange={(value) => setFilters(prev => ({ ...prev, category: value }))}>
                  <SelectTrigger className="bg-zion-blue border-zion-blue-light focus:border-zion-purple text-white">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.name}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={filters.pricingModel} onValueChange={(value) => setFilters(prev => ({ ...prev, pricingModel: value }))}>
                  <SelectTrigger className="bg-zion-blue border-zion-blue-light focus:border-zion-purple text-white">
                    <SelectValue placeholder="All Pricing Models" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Pricing Models</SelectItem>
                    <SelectItem value="one-time">One-time</SelectItem>
                    <SelectItem value="subscription">Subscription</SelectItem>
                    <SelectItem value="usage-based">Usage-based</SelectItem>
                    <SelectItem value="project-based">Project-based</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filters.priceRange} onValueChange={(value) => setFilters(prev => ({ ...prev, priceRange: value }))}>
                  <SelectTrigger className="bg-zion-blue border-zion-blue-light focus:border-zion-purple text-white">
                    <SelectValue placeholder="All Price Ranges" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Price Ranges</SelectItem>
                    <SelectItem value="0-2000">Under $2,000</SelectItem>
                    <SelectItem value="2000-5000">$2,000 - $5,000</SelectItem>
                    <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10000-25000">$10,000 - $25,000</SelectItem>
                    <SelectItem value="25000-">$25,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* All Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">All Services</h2>
            <span className="text-zion-slate-light">
              {filteredServices.length} services found
            </span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                        {getCategoryIcon(service.category)}
                        <span className="ml-2">{service.category}</span>
                      </Badge>
                      <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                        {getPricingModelLabel(service.pricingModel)}
                      </Badge>
                    </div>
                    {service.featured && (
                      <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-white text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {/* Key Features */}
                    <div>
                      <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.slice(0, 6).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-zion-slate-light">
                            <CheckCircle className="h-4 w-4 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.benefits.slice(0, 4).map((benefit, index) => (
                          <div key={index} className="flex items-center text-sm text-zion-slate-light">
                            <TrendingUp className="h-4 w-4 text-zion-cyan mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-zion-blue-light">
                      <div className="text-center">
                        <div className="text-zion-slate-light text-sm">Price</div>
                        <div className="text-white font-semibold">
                          {service.currency}{service.price.toLocaleString()}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-zion-slate-light text-sm">Market Price</div>
                        <div className="text-zion-cyan text-sm">{service.marketPrice}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-zion-slate-light text-sm">Delivery</div>
                        <div className="text-white text-sm">{service.deliveryTime}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-zion-slate-light text-sm">Rating</div>
                        <div className="flex items-center justify-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          <span className="text-white text-sm">{service.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col space-y-3">
                  <div className="flex space-x-2 w-full">
                    <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-dark">
                      <Phone className="h-4 w-4 mr-2" />
                      Get Quote
                    </Button>
                    <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Learn More
                    </Button>
                  </div>
                  
                  {/* Contact Information */}
                  <div className="w-full p-3 bg-zion-blue rounded-lg">
                    <div className="text-center text-sm">
                      <div className="text-zion-cyan font-semibold mb-2">Contact Information</div>
                      <div className="space-y-1 text-zion-slate-light">
                        <div className="flex items-center justify-center">
                          <Phone className="h-3 w-3 mr-2" />
                          {service.contactInfo.phone}
                        </div>
                        <div className="flex items-center justify-center">
                          <Mail className="h-3 w-3 mr-2" />
                          {service.contactInfo.email}
                        </div>
                        <div className="flex items-center justify-center">
                          <Globe className="h-3 w-3 mr-2" />
                          <a 
                            href={service.contactInfo.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-zion-cyan hover:underline"
                          >
                            Visit Website
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 px-4 bg-zion-blue-dark">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Subscription Pricing Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {SUBSCRIPTION_TIERS.map((tier, index) => (
              <Card key={tier.name} className={`bg-zion-blue border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 ${
                index === 1 ? 'border-zion-purple scale-105' : ''
              }`}>
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-xl">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-zion-cyan">
                    {tier.currency}{tier.price}
                    <span className="text-lg text-zion-slate-light">/{tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="h-4 w-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                    Choose Plan
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Card className="bg-gradient-to-r from-zion-purple to-zion-purple-dark border-0 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white text-3xl mb-4">
                Ready to Transform Your Business?
              </CardTitle>
              <CardDescription className="text-zion-slate-light text-lg">
                Our team of experts is ready to help you implement the perfect solution for your business needs.
                Get in touch today for a free consultation and quote.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <Phone className="h-8 w-8 text-zion-cyan mx-auto mb-2" />
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-zion-slate-light">+1 302 464 0950</div>
                </div>
                <div className="text-center">
                  <Mail className="h-8 w-8 text-zion-cyan mx-auto mb-2" />
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-zion-slate-light">kleber@ziontechgroup.com</div>
                </div>
                <div className="text-center">
                  <Globe className="h-8 w-8 text-zion-cyan mx-auto mb-2" />
                  <div className="text-white font-semibold">Website</div>
                  <div className="text-zion-slate-light">ziontechgroup.com</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
                <ArrowUpRight className="h-5 w-5 mr-2" />
                Start Your Project Today
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}