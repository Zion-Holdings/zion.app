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
  ExternalLink, 
  Play, 
  FileText, 
  DollarSign,
  Users,
  Zap,
  Shield,
  BarChart3,
  MessageSquare,
  Calendar,
  Mail,
  Heart,
  ShoppingCart,
  GraduationCap,
  Building,
  Globe,
  TrendingUp,
  Award,
  Clock,
  Code
} from "lucide-react";
// import { MICRO_SAAS_SERVICES, MicroSaasService, getMicroSaasServicesByCategory, getFeaturedMicroSaasServices } from "@/data/microSaasServices";
import { SEO } from "@/components/SEO";

export default function MicroSaasServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [filteredServices, setFilteredServices] = useState<any[]>([]);

  const categories = [
    { value: 'all', label: 'All Categories', icon: <Globe className="h-4 w-4" /> },
    { value: 'AI & ML', label: 'AI & Machine Learning', icon: <Zap className="h-4 w-4" /> },
    { value: 'Development', label: 'Development Tools', icon: <Code className="h-4 w-4" /> },
    { value: 'Business Tools', label: 'Business Tools', icon: <Building className="h-4 w-4" /> },
    { value: 'Security', label: 'Security', icon: <Shield className="h-4 w-4" /> },
    { value: 'Analytics', label: 'Analytics', icon: <BarChart3 className="h-4 w-4" /> },
    { value: 'Communication', label: 'Communication', icon: <MessageSquare className="h-4 w-4" /> },
    { value: 'Productivity', label: 'Productivity', icon: <Calendar className="h-4 w-4" /> },
    { value: 'Marketing', label: 'Marketing', icon: <Mail className="h-4 w-4" /> },
    { value: 'Finance', label: 'Finance', icon: <DollarSign className="h-4 w-4" /> },
    { value: 'Healthcare', label: 'Healthcare', icon: <Heart className="h-4 w-4" /> },
    { value: 'Education', label: 'Education', icon: <GraduationCap className="h-4 w-4" /> },
    { value: 'E-commerce', label: 'E-commerce', icon: <ShoppingCart className="h-4 w-4" /> }
  ];

  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-50', label: '$0 - $50' },
    { value: '50-100', label: '$50 - $100' },
    { value: '100-200', label: '$100 - $200' },
    { value: '200+', label: '$200+' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest' }
  ];

  useEffect(() => {
    let filtered: any[] = [];

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
        if (priceRange === '200+') {
          return service.pricing.starter >= 200;
        }
        return service.pricing.starter >= min && service.pricing.starter <= max;
      });
    }

    // Sort services
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.pricing.starter - b.pricing.starter);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.pricing.starter - a.pricing.starter);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.launchDate).getTime() - new Date(a.launchDate).getTime());
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    setFilteredServices(filtered);
  }, [searchQuery, selectedCategory, priceRange, sortBy]);

  const getPriceRange = (service: any) => {
    const { starter, professional, enterprise, currency } = service.pricing;
    return `${currency}${starter} - ${currency}${enterprise}`;
  };

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.value === category);
    return cat ? cat.icon : <Globe className="h-4 w-4" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark">
      <SEO 
        title="Micro SAAS Services - Zion Tech Group" 
        description="Discover innovative micro SAAS solutions for your business needs. AI, security, analytics, and more with competitive pricing and expert support."
        keywords="micro saas, software as a service, business tools, AI solutions, security, analytics"
        canonical="https://ziontechgroup.com/micro-saas-services"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-purple-dark via-zion-purple to-zion-cyan py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/30 to-zion-cyan/30"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-zion-cyan/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-zion-purple/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-zion-blue/20 rounded-full animate-bounce"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-zion-cyan-light mb-8 leading-relaxed">
              Transform your business with our curated collection of intelligent, innovative, and cost-effective micro SAAS services. 
              From AI-powered tools to enterprise security solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate-dark font-semibold px-8 py-3">
                <TrendingUp className="h-5 w-5 mr-2" />
                Explore Services
              </Button>
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 font-semibold px-8 py-3">
                <Award className="h-5 w-5 mr-2" />
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-zion-slate-dark/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan">0+</div>
              <div className="text-zion-slate-light">Micro SAAS Services</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-zion-purple-light">12</div>
              <div className="text-zion-slate-light">Categories</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-zion-blue-light">4.8</div>
              <div className="text-zion-slate-light">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-zion-cyan-light">24/7</div>
              <div className="text-zion-slate-light">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="py-8 bg-zion-slate-dark border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-4 w-4" />
              <Input
                placeholder="Search micro SAAS services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-zion-slate border-zion-blue-light text-white placeholder-zion-slate-light"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48 bg-zion-slate border-zion-blue-light text-white">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent className="bg-zion-slate border-zion-blue-light">
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value} className="text-white hover:bg-zion-blue-dark">
                    <div className="flex items-center gap-2">
                      {category.icon}
                      {category.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Range Filter */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-40 bg-zion-slate border-zion-blue-light text-white">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent className="bg-zion-slate border-zion-blue-light">
                {priceRanges.map((range) => (
                  <SelectItem key={range.value} value={range.value} className="text-white hover:bg-zion-blue-dark">
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort Options */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40 bg-zion-slate border-zion-blue-light text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-zion-slate border-zion-blue-light">
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value} className="text-white hover:bg-zion-blue-dark">
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="group overflow-hidden bg-zion-slate-dark border-zion-blue-light hover:border-zion-cyan transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 transform hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {service.featured && (
                    <Badge className="absolute top-4 right-4 bg-zion-cyan text-zion-slate-dark font-semibold">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple-light border-zion-purple-light">
                      {getCategoryIcon(service.category)}
                      <span className="ml-1">{service.category}</span>
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light line-clamp-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-zion-slate-light'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-zion-slate-light text-sm">
                      {service.rating} ({service.reviewCount} reviews)
                    </span>
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-zion-cyan" />
                    <span className="text-white font-semibold">{getPriceRange(service)}</span>
                    <span className="text-zion-slate-light text-sm">/month</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Key Benefits */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-zion-cyan">Key Benefits:</h4>
                    <ul className="text-xs text-zion-slate-light space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mt-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-3 pt-0">
                  <div className="flex gap-2 w-full">
                    <Button 
                      asChild 
                      className="flex-1 bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate-dark font-semibold"
                    >
                      <a href={service.website} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Site
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="border-zion-purple text-zion-purple-light hover:bg-zion-purple/10"
                    >
                      <a href={service.demo} target="_blank" rel="noopener noreferrer">
                        <Play className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  
                  <div className="flex gap-2 w-full">
                    <Button 
                      asChild 
                      variant="outline" 
                      className="flex-1 border-zion-blue-light text-zion-blue-light hover:bg-zion-blue-dark/20"
                    >
                      <a href={service.documentation} target="_blank" rel="noopener noreferrer">
                        <FileText className="h-4 w-4 mr-2" />
                        Docs
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="flex-1 border-zion-blue-light text-zion-blue-light hover:bg-zion-blue-dark/20"
                    >
                      <a href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}>
                        <Mail className="h-4 w-4 mr-2" />
                        Contact
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-zion-slate-light text-lg mb-4">No services found matching your criteria</div>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setPriceRange('all');
                  setSortBy('featured');
                }}
                variant="outline"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-zion-purple-dark via-zion-purple to-zion-cyan">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">
            Our micro SAAS solutions are designed to scale with your business. Get started today with expert support and implementation guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-zion-slate-dark hover:bg-zion-cyan-light font-semibold px-8 py-3">
              <Clock className="h-5 w-5 mr-2" />
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-3">
              <MessageSquare className="h-5 w-5 mr-2" />
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}