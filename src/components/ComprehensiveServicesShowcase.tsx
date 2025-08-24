import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Globe, 
  Mail, 
  Phone, 
  MapPin,
  ChevronRight,
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  TrendingUp,
  Users,
  Database,
  Cloud,
  Lock,
  Code,
  Smartphone,
  Blockchain,
  Cpu,
  Building
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, SERVICES_BY_PRICE } from '@/data/comprehensiveServices';

interface ComprehensiveServicesShowcaseProps {
  showTitle?: boolean;
  maxServices?: number;
  featuredOnly?: boolean;
}

export function ComprehensiveServicesShowcase({ 
  showTitle = true, 
  maxServices,
  featuredOnly = false 
}: ComprehensiveServicesShowcaseProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  // Filter services based on search, category, and price range
  let filteredServices = COMPREHENSIVE_SERVICES;
  
  if (featuredOnly) {
    filteredServices = filteredServices.filter(service => service.featured);
  }
  
  if (searchTerm) {
    filteredServices = filteredServices.filter(service =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }
  
  if (selectedCategory !== 'all') {
    filteredServices = filteredServices.filter(service => service.category === selectedCategory);
  }
  
  if (selectedPriceRange !== 'all') {
    switch (selectedPriceRange) {
      case 'budget':
        filteredServices = filteredServices.filter(service => service.price && service.price < 5000);
        break;
      case 'midRange':
        filteredServices = filteredServices.filter(service => service.price && service.price >= 5000 && service.price < 15000);
        break;
      case 'enterprise':
        filteredServices = filteredServices.filter(service => service.price && service.price >= 15000);
        break;
    }
  }

  // Limit services if maxServices is specified
  if (maxServices) {
    filteredServices = filteredServices.slice(0, maxServices);
  }

  const getCategoryIcon = (category: string) => {
    const categoryData = SERVICE_CATEGORIES.find(cat => cat.name === category);
    return categoryData?.icon || '💼';
  };

  const formatPrice = (price: number | null) => {
    if (!price) return 'Contact Us';
    if (price < 1000) return `$${price}`;
    if (price < 10000) return `$${(price / 1000).toFixed(1)}K`;
    return `$${(price / 1000).toFixed(0)}K`;
  };

  const getPriceRangeLabel = (price: number | null) => {
    if (!price) return 'Custom Pricing';
    if (price < 5000) return 'Budget';
    if (price < 15000) return 'Mid-Range';
    return 'Enterprise';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive Tech Solutions
            </h2>
            <p className="text-zion-slate-light text-xl max-w-4xl mx-auto mb-8">
              Discover our extensive portfolio of innovative micro SAAS services, IT solutions, and AI-powered tools designed to transform your business
            </p>
            
            {/* Contact Information */}
            <div className="flex flex-wrap justify-center gap-6 text-zion-cyan mb-8">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>

            {/* Search and Filter Controls */}
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                  <Input
                    placeholder="Search services, technologies, or solutions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/10 border-zion-blue-light text-white placeholder:text-zion-slate-light"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-48 bg-white/10 border-zion-blue-light text-white">
                    <SelectValue placeholder="All Categories" />
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
                <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                  <SelectTrigger className="w-full sm:w-48 bg-white/10 border-zion-blue-light text-white">
                    <SelectValue placeholder="All Price Ranges" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Price Ranges</SelectItem>
                    <SelectItem value="budget">Budget ($0 - $5K)</SelectItem>
                    <SelectItem value="midRange">Mid-Range ($5K - $15K)</SelectItem>
                    <SelectItem value="enterprise">Enterprise ($15K+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        {/* Service Categories Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {SERVICE_CATEGORIES.map((category) => (
            <Link key={category.id} to={`/services?category=${category.id}`}>
              <Card className="h-full bg-zion-blue-dark/50 border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardHeader className="text-center pb-3">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <CardTitle className="text-white text-lg">{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-zion-slate-light text-sm text-center">
                    {category.services.length} services
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <Card key={service.id} className="h-full bg-zion-blue-dark/30 border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:scale-105 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={service.images[0]}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-zion-purple/80 text-white">
                    {getPriceRangeLabel(service.price)}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-zion-cyan/80 text-white">
                    {service.aiScore}% AI
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{getCategoryIcon(service.category)}</span>
                    <Badge variant="outline" className="border-zion-blue-light text-zion-slate-light">
                      {service.subcategory || service.category}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-white text-xl group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-zion-slate-light line-clamp-3">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Service Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zion-slate-light">Rating:</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-white">{service.rating}</span>
                      <span className="text-zion-slate-light">({service.reviewCount})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zion-slate-light">Availability:</span>
                    <div className="flex items-center gap-1 text-zion-cyan">
                      <Clock className="w-4 h-4" />
                      <span>{service.availability}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zion-slate-light">Location:</span>
                    <div className="flex items-center gap-1 text-zion-cyan">
                      <Globe className="w-4 h-4" />
                      <span>{service.location}</span>
                    </div>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-zion-cyan">
                    {formatPrice(service.price)}
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-zion-purple hover:bg-zion-purple-dark text-white"
                    asChild
                  >
                    <Link to={`/services/${service.id}`}>
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>

                {/* Contact CTA */}
                <div className="text-center">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white"
                    asChild
                  >
                    <Link to="/contact">
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4">No services found</h3>
            <p className="text-zion-slate-light mb-6">
              Try adjusting your search criteria or browse all our services
            </p>
            <Button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedPriceRange('all');
              }}
              className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            >
              View All Services
            </Button>
          </div>
        )}

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <Card className="bg-zion-blue-dark/50 border-zion-purple/30">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </CardTitle>
              <CardDescription className="text-zion-slate-light text-lg">
                Our team of experts is ready to help you implement the perfect solution for your needs
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3 text-zion-cyan">
                  <CheckCircle className="w-6 h-6" />
                  <span className="text-white">Free Consultation</span>
                </div>
                <div className="flex items-center gap-3 text-zion-cyan">
                  <Shield className="w-6 h-6" />
                  <span className="text-white">Enterprise Security</span>
                </div>
                <div className="flex items-center gap-3 text-zion-cyan">
                  <Zap className="w-6 h-6" />
                  <span className="text-white">24/7 Support</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-zion-purple hover:bg-zion-purple-dark text-white"
                  asChild
                >
                  <Link to="/contact">
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Us
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white"
                  asChild
                >
                  <Link to="/request-quote">
                    <Mail className="w-5 h-5 mr-2" />
                    Request Quote
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}