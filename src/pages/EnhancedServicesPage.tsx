import React, { useState, useEffect } from 'react';
import { ENHANCED_SERVICES, SERVICE_CATEGORIES, SERVICE_SUBCATEGORIES, EnhancedService } from '@/data/enhancedServices';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Shield, 
  Zap, 
  TrendingUp, 
  Users, 
  Globe,
  Phone,
  Mail,
  ExternalLink,
  CheckCircle,
  DollarSign,
  Calendar,
  Lightbulb
} from 'lucide-react';
import Target from 'lucide-react/dist/esm/icons/target';
import { SEO } from '@/components/SEO';

export default function EnhancedServicesPage() {
  const [filteredServices, setFilteredServices] = useState<EnhancedService[]>(ENHANCED_SERVICES);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [sortBy, setSortBy] = useState<string>('rating');

  useEffect(() => {
    let filtered = ENHANCED_SERVICES;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }

    // Filter by subcategory
    if (selectedSubcategory !== 'all') {
      filtered = filtered.filter(service => service.subcategory === selectedSubcategory);
    }

    // Filter by price range
    filtered = filtered.filter(service => 
      service.price >= priceRange[0] && service.price <= priceRange[1]
    );

    // Sort services
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'ai-score':
          return b.aiScore - a.aiScore;
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        default:
          return 0;
      }
    });

    setFilteredServices(filtered);
  }, [searchTerm, selectedCategory, selectedSubcategory, priceRange, sortBy]);

  const getSubcategories = () => {
    if (selectedCategory === 'all') return [];
    return SERVICE_SUBCATEGORIES[selectedCategory as keyof typeof SERVICE_SUBCATEGORIES] || [];
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}k`;
    }
    return `$${price}`;
  };

  const getPricingModelColor = (model: string) => {
    switch (model) {
      case 'subscription': return 'bg-blue-100 text-blue-800';
      case 'project-based': return 'bg-purple-100 text-purple-800';
      case 'one-time': return 'bg-green-100 text-green-800';
      case 'usage-based': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case 'enterprise': return 'bg-red-100 text-red-800';
      case 'premium': return 'bg-yellow-100 text-yellow-800';
      case 'basic': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Enhanced IT & AI Services - Zion Tech Group" 
        description="Discover comprehensive AI, cybersecurity, cloud, and digital transformation services. Expert solutions for modern businesses."
        keywords="AI services, cybersecurity, cloud solutions, digital transformation, IT consulting, blockchain, IoT"
        canonical="https://ziontechgroup.com/enhanced-services"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Enhanced IT & AI Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Comprehensive technology solutions powered by AI, designed to transform your business and drive innovation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us: +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Mail className="mr-2 h-5 w-5" />
              kleber@ziontechgroup.com
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-zion-blue-dark py-4 px-4 md:px-8 border-b border-zion-blue-light">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-white">
          <div className="flex items-center gap-4">
            <Globe className="h-5 w-5 text-zion-cyan" />
            <span className="font-medium">Global IT Services Available</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-zion-cyan" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white border-b py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {SERVICE_CATEGORIES.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Subcategory Filter */}
            <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Subcategories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subcategories</SelectItem>
                {getSubcategories().map(subcategory => (
                  <SelectItem key={subcategory} value={subcategory}>{subcategory}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Range */}
            <div className="flex gap-2">
              <Input
                type="number"
                placeholder="Min $"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-20"
              />
              <Input
                type="number"
                placeholder="Max $"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-20"
              />
            </div>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="ai-score">Best AI Score</SelectItem>
                <SelectItem value="price-low">Lowest Price</SelectItem>
                <SelectItem value="price-high">Highest Price</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <Card key={service.id} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {service.category}
                  </Badge>
                  <Badge className={getPricingModelColor(service.pricingModel)}>
                    {service.pricingModel.replace('-', ' ')}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-4">
                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-yellow-500" />
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {service.features.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{service.features.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    Key Benefits
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Target Audience */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-500" />
                    Target Audience
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {service.targetAudience.slice(0, 3).map((audience, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {audience}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Compliance & Integrations */}
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <h5 className="font-semibold mb-1 flex items-center gap-1">
                      <Shield className="h-3 w-3" />
                      Compliance
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      {service.compliance.slice(0, 2).map((comp, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {comp}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1 flex items-center gap-1">
                      <Zap className="h-3 w-3" />
                      Integrations
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      {service.integrations.slice(0, 2).map((integration, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {integration}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-0">
                <div className="w-full space-y-4">
                  {/* Pricing & Savings */}
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-zion-blue">
                        {formatPrice(service.price)}
                      </div>
                      <div className="text-sm text-gray-500">
                        {service.pricingModel === 'subscription' ? '/month' : 'one-time'}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 line-through">
                        {formatPrice(service.marketPrice)}
                      </div>
                      <div className="text-sm font-semibold text-green-600">
                        Save {service.savings}%
                      </div>
                    </div>
                  </div>

                  {/* Service Metrics */}
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="flex items-center gap-1 justify-center">
                      <Star className="h-3 w-3 text-yellow-500" />
                      <span>{service.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 justify-center">
                      <Zap className="h-3 w-3 text-blue-500" />
                      <span>{service.aiScore}</span>
                    </div>
                    <div className="flex items-center gap-1 justify-center">
                      <Clock className="h-3 w-3 text-green-500" />
                      <span>{service.deliveryTime}</span>
                    </div>
                  </div>

                  {/* Support Level */}
                  <div className="flex items-center justify-between">
                    <Badge className={getSupportLevelColor(service.supportLevel)}>
                      {service.supportLevel} Support
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {service.reviewCount} reviews
                    </Badge>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <Button className="w-full" size="sm">
                      <Phone className="mr-2 h-4 w-4" />
                      Contact
                    </Button>
                    <Button variant="outline" className="w-full" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Learn More
                    </Button>
                  </div>

                  {/* Contact Info */}
                  <div className="text-center text-xs text-gray-500 space-y-1">
                    <div className="flex items-center justify-center gap-2">
                      <Phone className="h-3 w-3" />
                      <span>{service.phone}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="h-3 w-3" />
                      <span>{service.contactEmail}</span>
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
            <p className="text-gray-500">Try adjusting your filters or search terms</p>
          </div>
        )}
      </div>

      {/* Contact CTA Section */}
      <div className="bg-zion-blue-dark py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you implement cutting-edge technology solutions that drive growth and innovation.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-zion-cyan" />
              <div className="text-left">
                <div className="text-sm text-zion-slate-light">Call us today</div>
                <div className="text-xl font-semibold">+1 302 464 0950</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-zion-cyan" />
              <div className="text-left">
                <div className="text-sm text-zion-slate-light">Email us</div>
                <div className="text-xl font-semibold">kleber@ziontechgroup.com</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-zion-cyan" />
              <div className="text-left">
                <div className="text-sm text-zion-slate-light">Visit us</div>
                <div className="text-xl font-semibold">Middletown, DE</div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}