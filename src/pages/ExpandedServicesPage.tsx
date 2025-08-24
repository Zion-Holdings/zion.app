import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  Shield, 
  Zap, 
  Globe,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  BookOpen,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Lightbulb
} from 'lucide-react';
import { EXPANDED_SERVICES, SERVICE_CATEGORIES, type ExpandedService } from '@/data/expandedServices';
import { TrustedBySection } from '@/components/TrustedBySection';

export default function ExpandedServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('rating');

  const filteredServices = EXPANDED_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
    
    let matchesPrice = true;
    if (priceRange === 'low') matchesPrice = service.price < 500;
    else if (priceRange === 'medium') matchesPrice = service.price >= 500 && service.price < 2000;
    else if (priceRange === 'high') matchesPrice = service.price >= 2000;
    
    return matchesSearch && matchesCategory && matchesSubcategory && matchesPrice;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'aiScore':
        return b.aiScore - a.aiScore;
      case 'newest':
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      default:
        return 0;
    }
  });

  const getSubcategories = (category: string) => {
    if (category === 'all') return [];
    const service = EXPANDED_SERVICES.find(s => s.category === category);
    return service ? [service.subcategory] : [];
  };

  const getPricingModelIcon = (model: string) => {
    switch (model) {
      case 'monthly': return <Clock className="w-4 h-4" />;
      case 'hourly': return <Zap className="w-4 h-4" />;
      case 'project-based': return <Zap className="w-4 h-4" />;
      default: return <DollarSign className="w-4 h-4" />;
    }
  };

  const getPricingModelText = (model: string) => {
    switch (model) {
      case 'monthly': return 'Monthly';
      case 'hourly': return 'Hourly';
      case 'project-based': return 'Project-based';
      default: return 'One-time';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-zion-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Enterprise Technology Solutions
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our comprehensive suite of AI-powered services, cloud solutions, cybersecurity, and digital transformation consulting. 
            Built for modern businesses, powered by cutting-edge technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
                <Mail className="w-5 h-5 mr-2" />
                Get Started
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <DollarSign className="w-5 h-5 mr-2" />
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-zion-blue-dark py-6 border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-zion-slate-light">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-zion-cyan" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-zion-cyan" />
              <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
              <Input
                placeholder="Search services, features, or use cases..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder:text-zion-slate-light"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48 bg-zion-blue-dark border-zion-blue-light text-white">
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

            <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
              <SelectTrigger className="w-full lg:w-48 bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="Subcategory" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subcategories</SelectItem>
                {getSubcategories(selectedCategory).map(sub => (
                  <SelectItem key={sub} value={sub}>{sub}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-full lg:w-32 bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="low">Under $500</SelectItem>
                <SelectItem value="medium">$500 - $2K</SelectItem>
                <SelectItem value="high">Over $2K</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-40 bg-zion-blue-dark border-zion-blue-light text-white">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="aiScore">AI Score</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">
              {filteredServices.length} Services Found
            </h2>
            <p className="text-zion-slate-light">
              Explore our comprehensive technology solutions designed to drive your business forward
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sortedServices.map((service) => (
              <Card key={service.id} className="h-full border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-xl">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="secondary" className="bg-zion-blue-light text-zion-cyan">
                      {service.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-zion-slate-light">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{service.rating}</span>
                      <span className="text-xs">({service.reviewCount})</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl text-zion-blue mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light line-clamp-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Pricing */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {getPricingModelIcon(service.pricingModel)}
                      <span className="text-sm text-zion-slate-light">
                        {getPricingModelText(service.pricingModel)}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-purple">
                        {service.currency}{service.price.toLocaleString()}
                      </div>
                      {service.pricingModel === 'monthly' && (
                        <div className="text-xs text-zion-slate-light">per month</div>
                      )}
                    </div>
                  </div>

                  {/* AI Score */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zion-slate-light">AI Score</span>
                    <Badge className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
                      {service.aiScore}/100
                    </Badge>
                  </div>

                  {/* Features Preview */}
                  <div>
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Key Features</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                          {feature}
                        </Badge>
                      ))}
                      {service.features.length > 3 && (
                        <Badge variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                          +{service.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Key Benefits</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {service.tags.slice(0, 4).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2 pt-4">
                    <Link to={`/services/${service.id}`}>
                      <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
                        <Lightbulb className="w-4 h-4 mr-2" />
                        Learn More
                      </Button>
                    </Link>
                    
                    <div className="flex gap-2">
                      {service.website && (
                        <a 
                          href={service.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button variant="outline" className="w-full border-zion-blue-light text-zion-cyan hover:bg-zion-blue-light/10">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Website
                          </Button>
                        </a>
                      )}
                      
                      <Link to="/contact" className="flex-1">
                        <Button variant="outline" className="w-full border-zion-blue-light text-zion-cyan hover:bg-zion-blue-light/10">
                          <Mail className="w-4 h-4 mr-2" />
                          Contact
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="pt-4 border-t border-zion-blue-light">
                    <div className="grid grid-cols-2 gap-4 text-xs text-zion-slate-light">
                      {service.documentation && (
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          <span>Documentation</span>
                        </div>
                      )}
                      {service.support && (
                        <div className="flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          <span>Support</span>
                        </div>
                      )}
                      {service.compliance && service.compliance.length > 0 && (
                        <div className="flex items-center gap-1">
                          <Shield className="w-3 h-3" />
                          <span>{service.compliance.length} Compliance</span>
                        </div>
                      )}
                      {service.sla && (
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>SLA</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-zion-slate-light mb-2">No services found</h3>
              <p className="text-zion-slate-light mb-4">Try adjusting your search criteria or browse all categories</p>
              <Button onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedSubcategory('all');
                setPriceRange('all');
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Service Categories</h2>
            <p className="text-zion-slate-light text-lg">
              Explore our comprehensive technology service categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_CATEGORIES.map((category) => (
              <Card key={category.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <CardTitle className="text-white">{category.name}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.subcategories.slice(0, 3).map((sub, index) => (
                      <div key={index} className="text-sm text-zion-slate-light flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {sub}
                      </div>
                    ))}
                    {category.subcategories.length > 3 && (
                      <div className="text-xs text-zion-cyan">
                        +{category.subcategories.length - 3} more services
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Why Choose Zion Technology Group?</h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Cutting-Edge Technology</h3>
              <p className="text-zion-slate-light">
                Leverage the latest AI, cloud, and security technologies to stay ahead of the competition
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Expert Team</h3>
              <p className="text-zion-slate-light">
                Our certified professionals bring years of experience across industries and technologies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-light">
                Bank-level security and compliance standards to protect your business and data
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Global Reach</h3>
              <p className="text-zion-slate-light">
                Serving clients worldwide with localized expertise and 24/7 support
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Proven Results</h3>
              <p className="text-zion-slate-light">
                Track record of successful implementations and measurable business outcomes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Innovation Focus</h3>
              <p className="text-zion-slate-light">
                Constantly evolving our solutions to meet emerging business challenges
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can drive innovation, efficiency, and growth for your organization
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
                <Mail className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <DollarSign className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Button>
            </Link>
            <a href="tel:+13024640950">
              <Button size="lg" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <TrustedBySection />
    </div>
  );
}