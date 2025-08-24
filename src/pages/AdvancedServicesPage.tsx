import React, { useState, useMemo } from 'react';
import { ADVANCED_SERVICES, SERVICE_CATEGORIES, AdvancedService } from '@/data/advancedServices';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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

interface FilterState {
  search: string;
  category: string;
  pricingModel: string;
  priceRange: string;
  location: string;
}

export default function AdvancedServicesPage() {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: 'all',
    pricingModel: 'all',
    priceRange: 'all',
    location: 'all'
  });

  const [selectedService, setSelectedService] = useState<AdvancedService | null>(null);

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

  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case 'subscription': return 'Monthly/Annual';
      case 'one-time': return 'One-time';
      case 'usage-based': return 'Pay-per-use';
      case 'project-based': return 'Project-based';
      default: return model;
    }
  };

  const getPriceRangeLabel = (range: string) => {
    switch (range) {
      case '0-1000': return '$0 - $1,000';
      case '1000-5000': return '$1,000 - $5,000';
      case '5000-10000': return '$5,000 - $10,000';
      case '10000+': return '$10,000+';
      default: return 'All Prices';
    }
  };

  return (
    <>
      <SEO 
        title="Advanced IT & AI Services - Zion Tech Group" 
        description="Discover comprehensive micro SAAS services, IT solutions, and AI services. Expert consulting, development, and managed services for modern businesses."
        keywords="AI services, IT consulting, cybersecurity, cloud migration, data analytics, digital transformation, micro SAAS"
        canonical="https://ziontechgroup.com/advanced-services"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <GradientHeading level="h1" className="text-4xl md:text-6xl font-bold mb-6">
            Advanced IT & AI Services
          </GradientHeading>
          <p className="text-zion-slate-light text-xl md:text-2xl max-w-4xl mx-auto mb-8">
            Comprehensive micro SAAS solutions, enterprise IT services, and cutting-edge AI implementations. 
            Transform your business with our expert team and proven methodologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              🤖 AI & Machine Learning
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              ☁️ Cloud & DevOps
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              🔒 Cybersecurity
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              📊 Data & Analytics
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              🚀 Digital Transformation
            </Badge>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
              <Phone className="w-5 h-5 mr-2" />
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="w-5 h-5 mr-2" />
              Request Quote
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

      {/* Services Grid */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
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
                className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 cursor-pointer"
                onClick={() => setSelectedService(service)}
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
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Service Categories
            </h2>
            <p className="text-zion-slate-light text-lg">
              Explore our comprehensive range of technology services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_CATEGORIES.map((category) => (
              <Card 
                key={category.id}
                className="bg-zion-blue border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 text-center"
              >
                <CardHeader>
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <CardTitle className="text-white">{category.name}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-zion-cyan font-semibold mb-4">
                    {category.services.length} Services
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10"
                    onClick={() => handleFilterChange('category', category.name)}
                  >
                    View Services
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-zion-slate-light text-lg">
              Your trusted partner for innovative technology solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-light">
                Bank-level security and compliance with industry standards
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Rapid Implementation</h3>
              <p className="text-zion-slate-light">
                Quick deployment with minimal disruption to your business
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven ROI</h3>
              <p className="text-zion-slate-light">
                Measurable results and return on investment for all services
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Global Reach</h3>
              <p className="text-zion-slate-light">
                Services available worldwide with local expertise
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
              <p className="text-zion-slate-light">
                Certified professionals with years of industry experience
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-blue to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation Focus</h3>
              <p className="text-zion-slate-light">
                Cutting-edge solutions using the latest technologies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Get started with a free consultation. Our experts will analyze your needs and recommend the perfect solution.
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