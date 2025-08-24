import React, { useState, useMemo } from 'react';
import { ADVANCED_SERVICES, SERVICE_CATEGORIES } from '@/data/advancedServices';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Globe, 
  Shield, 
  Zap, 
  TrendingUp,
  Phone,
  Mail,
  ExternalLink,
  CheckCircle,
  Users,
  Lightbulb,
  DollarSign,
  Calendar,
  Award,
  Building,
  MapPin
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';

interface FilterState {
  search: string;
  category: string;
  pricingModel: string;
  priceRange: string;
  location: string;
}

export default function ServicesPricingPage() {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: 'all',
    pricingModel: 'all',
    priceRange: 'all',
    location: 'all'
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const filteredServices = useMemo(() => {
    return ADVANCED_SERVICES.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                           service.description.toLowerCase().includes(filters.search.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(filters.search.toLowerCase()));
      
      const matchesCategory = filters.category === 'all' || service.category === filters.category;
      const matchesPricing = filters.pricingModel === 'all' || service.pricingModel === filters.pricingModel;
      const matchesLocation = filters.location === 'all' || service.location === filters.location;
      
      let matchesPrice = true;
      if (filters.priceRange !== 'all') {
        const [min, max] = filters.priceRange.split('-').map(Number);
        if (max) {
          matchesPrice = service.price >= min && service.price <= max;
        } else {
          matchesPrice = service.price >= min;
        }
      }
      
      return matchesSearch && matchesCategory && matchesPricing && matchesPrice && matchesLocation;
    });
  }, [filters]);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const toggleServiceSelection = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case 'subscription': return 'Monthly/Annual';
      case 'one-time': return 'One-time';
      case 'usage-based': return 'Pay-per-use';
      case 'project-based': return 'Project-based';
      default: return model;
    }
  };

  const getPricingModelIcon = (model: string) => {
    switch (model) {
      case 'subscription': return <Calendar className="w-4 h-4" />;
      case 'one-time': return <DollarSign className="w-4 h-4" />;
      case 'usage-based': return <TrendingUp className="w-4 h-4" />;
      case 'project-based': return <Award className="w-4 h-4" />;
      default: return <DollarSign className="w-4 h-4" />;
    }
  };

  const selectedServicesData = ADVANCED_SERVICES.filter(s => selectedServices.includes(s.id));

  return (
    <>
      <SEO 
        title="Services Pricing & Comparison - Zion Tech Group" 
        description="Compare pricing, features, and benefits of our comprehensive IT and AI services. Find the perfect solution for your business needs."
        keywords="service pricing, IT services pricing, AI services cost, service comparison, enterprise pricing"
        canonical="https://ziontechgroup.com/services-pricing"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <GradientHeading level="h1" className="text-4xl md:text-6xl font-bold mb-6">
            Services Pricing & Comparison
          </GradientHeading>
          <p className="text-zion-slate-light text-xl md:text-2xl max-w-4xl mx-auto mb-8">
            Compare our comprehensive range of IT and AI services. Find the perfect solution that fits your budget and business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
              <Phone className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="w-5 h-5 mr-2" />
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info Banner */}
      <section className="bg-zion-blue-light py-6 border-b border-zion-blue">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2 text-zion-cyan">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-zion-slate-light">
              <Globe className="w-5 h-5" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-zion-blue-dark py-8 border-b border-zion-blue">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
              <Input
                placeholder="Search services..."
                value={filters.search}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light"
              />
            </div>
            
            <Select value={filters.category} onValueChange={(value) => handleFilterChange('category', value)}>
              <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {SERVICE_CATEGORIES.map(category => (
                  <SelectItem key={category.id} value={category.name}>
                    {category.icon} {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={filters.pricingModel} onValueChange={(value) => handleFilterChange('pricingModel', value)}>
              <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">
                <SelectValue placeholder="Pricing Model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Models</SelectItem>
                <SelectItem value="subscription">Monthly/Annual</SelectItem>
                <SelectItem value="one-time">One-time</SelectItem>
                <SelectItem value="usage-based">Pay-per-use</SelectItem>
                <SelectItem value="project-based">Project-based</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.priceRange} onValueChange={(value) => handleFilterChange('priceRange', value)}>
              <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-1000">$0 - $1,000</SelectItem>
                <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                <SelectItem value="10000+">$10,000+</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters.location} onValueChange={(value) => handleFilterChange('location', value)}>
              <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="Global">Global</SelectItem>
                <SelectItem value="North America">North America</SelectItem>
                <SelectItem value="Europe">Europe</SelectItem>
                <SelectItem value="Asia">Asia</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="grid" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-zion-blue-dark border-zion-blue-light mb-8">
              <TabsTrigger value="grid" className="text-zion-slate-light data-[state=active]:text-white data-[state=active]:bg-zion-purple">
                Grid View
              </TabsTrigger>
              <TabsTrigger value="comparison" className="text-zion-slate-light data-[state=active]:text-white data-[state=active]:bg-zion-purple">
                Compare Services ({selectedServices.length})
              </TabsTrigger>
              <TabsTrigger value="categories" className="text-zion-slate-light data-[state=active]:text-white data-[state=active]:bg-zion-purple">
                By Category
              </TabsTrigger>
            </TabsList>

            <TabsContent value="grid" className="mt-0">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {filteredServices.length} Services Available
                </h2>
                <p className="text-zion-slate-light text-lg">
                  Find the perfect solution for your business needs
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <Card 
                    key={service.id} 
                    className={`bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 cursor-pointer ${
                      selectedServices.includes(service.id) ? 'ring-2 ring-zion-purple' : ''
                    }`}
                    onClick={() => toggleServiceSelection(service.id)}
                  >
                    <div className="relative">
                      <img 
                        src={service.images[0]} 
                        alt={service.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      {service.featured && (
                        <Badge className="absolute top-4 right-4 bg-zion-purple">
                          Featured
                        </Badge>
                      )}
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <Badge variant="secondary" className="bg-zion-blue-dark/80">
                          {service.aiScore} AI Score
                        </Badge>
                      </div>
                      {selectedServices.includes(service.id) && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-zion-cyan text-white">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            Selected
                          </Badge>
                        </div>
                      )}
                    </div>
                    
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-white text-xl line-clamp-2">
                          {service.title}
                        </CardTitle>
                        <div className="flex items-center gap-1 text-zion-cyan">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-semibold">{service.rating}</span>
                        </div>
                      </div>
                      <CardDescription className="text-zion-slate-light line-clamp-3">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-zion-cyan">
                          {service.currency}{service.price.toLocaleString()}
                        </div>
                        <Badge variant="outline" className="border-zion-purple text-zion-purple">
                          {getPricingModelLabel(service.pricingModel)}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-zion-slate-light mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{service.availability}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Globe className="w-4 h-4" />
                          <span>{service.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{service.reviewCount} reviews</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          className="flex-1 bg-zion-purple hover:bg-zion-purple-dark"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Handle contact action
                          }}
                        >
                          <Phone className="w-4 h-4 mr-2" />
                          Contact
                        </Button>
                        <Button 
                          variant="outline" 
                          className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(service.contactInfo.website, '_blank');
                          }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredServices.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-zion-slate-light text-lg mb-4">
                    No services match your current filters
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => setFilters({
                      search: '',
                      category: 'all',
                      pricingModel: 'all',
                      priceRange: 'all',
                      location: 'all'
                    })}
                    className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="comparison" className="mt-0">
              {selectedServices.length === 0 ? (
                <div className="text-center py-16">
                  <h3 className="text-2xl font-bold text-white mb-4">No Services Selected</h3>
                  <p className="text-zion-slate-light text-lg mb-6">
                    Select services from the grid view to compare their features and pricing
                  </p>
                  <Button onClick={() => setFilters({
                    search: '',
                    category: 'all',
                    pricingModel: 'all',
                    priceRange: 'all',
                    location: 'all'
                  })}>
                    Go to Grid View
                  </Button>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Service Comparison ({selectedServices.length} services)
                    </h3>
                    <p className="text-zion-slate-light">
                      Compare features, pricing, and benefits of selected services
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full bg-zion-blue-dark rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-zion-blue border-b border-zion-blue-light">
                          <th className="px-6 py-4 text-left text-white font-semibold">Service</th>
                          <th className="px-6 py-4 text-left text-white font-semibold">Category</th>
                          <th className="px-6 py-4 text-left text-white font-semibold">Price</th>
                          <th className="px-6 py-4 text-left text-white font-semibold">Pricing Model</th>
                          <th className="px-6 py-4 text-left text-white font-semibold">AI Score</th>
                          <th className="px-6 py-4 text-left text-white font-semibold">Rating</th>
                          <th className="px-6 py-4 text-left text-white font-semibold">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedServicesData.map((service, index) => (
                          <tr key={service.id} className={`border-b border-zion-blue-light ${index % 2 === 0 ? 'bg-zion-blue-dark' : 'bg-zion-blue'}`}>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <img 
                                  src={service.images[0]} 
                                  alt={service.title}
                                  className="w-12 h-12 rounded object-cover"
                                />
                                <div>
                                  <div className="text-white font-semibold">{service.title}</div>
                                  <div className="text-zion-slate-light text-sm line-clamp-2">
                                    {service.description}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple border-zion-purple/30">
                                {service.category}
                              </Badge>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-zion-cyan font-bold text-lg">
                                {service.currency}{service.price.toLocaleString()}
                              </div>
                              <div className="text-zion-slate-light text-sm">
                                {service.marketPrice}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                {getPricingModelIcon(service.pricingModel)}
                                <span className="text-white">{getPricingModelLabel(service.pricingModel)}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                                {service.aiScore}
                              </Badge>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-white font-semibold">{service.rating}</span>
                                <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex gap-2">
                                <Button 
                                  size="sm" 
                                  className="bg-zion-purple hover:bg-zion-purple-dark"
                                >
                                  <Phone className="w-4 h-4 mr-1" />
                                  Contact
                                </Button>
                                <Link to={`/services/${service.id}`}>
                                  <Button size="sm" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                                    Details
                                  </Button>
                                </Link>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="categories" className="mt-0">
              <div className="space-y-12">
                {SERVICE_CATEGORIES.map((category) => (
                  <div key={category.id}>
                    <div className="text-center mb-8">
                      <h3 className="text-3xl font-bold text-white mb-4">
                        {category.icon} {category.name}
                      </h3>
                      <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                        {category.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                      {category.services.map((service) => (
                        <Card 
                          key={service.id} 
                          className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300"
                        >
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <CardTitle className="text-white text-lg line-clamp-2">
                                {service.title}
                              </CardTitle>
                              <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                                {service.aiScore} AI Score
                              </Badge>
                            </div>
                            <CardDescription className="text-zion-slate-light line-clamp-2">
                              {service.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center justify-between mb-4">
                              <div className="text-xl font-bold text-zion-cyan">
                                {service.currency}{service.price.toLocaleString()}
                              </div>
                              <Badge variant="outline" className="border-zion-purple text-zion-purple">
                                {getPricingModelLabel(service.pricingModel)}
                              </Badge>
                            </div>
                            <div className="flex gap-2">
                              <Button 
                                className="flex-1 bg-zion-purple hover:bg-zion-purple-dark"
                                size="sm"
                              >
                                <Phone className="w-4 h-4 mr-2" />
                                Contact
                              </Button>
                              <Link to={`/services/${service.id}`}>
                                <Button size="sm" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                                  Details
                                </Button>
                              </Link>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Choosing the Right Service?
          </h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Our expert team is here to help you find the perfect solution for your business needs. 
            Get a free consultation and customized recommendation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light">
              <Phone className="w-5 h-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Mail className="w-5 h-5 mr-2" />
              Get Custom Quote
            </Button>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>📞 Call us: +1 302 464 0950</p>
            <p>📧 Email: kleber@ziontechgroup.com</p>
            <p>🌐 Visit: https://ziontechgroup.com</p>
          </div>
        </div>
      </section>
    </>
  );
}