import React, { useState, useMemo } from 'react';
import { comprehensiveServices, serviceCategories, serviceSubcategories } from '@/data/comprehensiveServices';
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
  Phone,
  Mail,
  Globe,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ComprehensiveServicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [selectedPricingModel, setSelectedPricingModel] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  const filteredServices = useMemo(() => {
    let filtered = comprehensiveServices;

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

    // Filter by subcategory
    if (selectedSubcategory !== 'all') {
      filtered = filtered.filter(service => service.subcategory === selectedSubcategory);
    }

    // Filter by pricing model
    if (selectedPricingModel !== 'all') {
      filtered = filtered.filter(service => service.pricingModel === selectedPricingModel);
    }

    // Sort services
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case 'ai-score':
        filtered = [...filtered].sort((a, b) => b.aiScore - a.aiScore);
        break;
      case 'featured':
      default:
        filtered = [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedSubcategory, selectedPricingModel, sortBy]);

  const getSubcategories = () => {
    if (selectedCategory === 'all') return [];
    return serviceSubcategories[selectedCategory as keyof typeof serviceSubcategories] || [];
  };

  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case 'one-time': return 'One-time';
      case 'monthly': return 'Monthly';
      case 'hourly': return 'Hourly';
      case 'project-based': return 'Project-based';
      default: return model;
    }
  };

  const getPricingModelColor = (model: string) => {
    switch (model) {
      case 'one-time': return 'bg-blue-100 text-blue-800';
      case 'monthly': return 'bg-green-100 text-green-800';
      case 'hourly': return 'bg-purple-100 text-purple-800';
      case 'project-based': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-zion-cyan mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Comprehensive Tech Services
            </h1>
          </div>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Discover our complete ecosystem of AI-powered solutions, IT services, and innovative technology solutions. 
            From micro SAAS to enterprise solutions, we've got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/it-onsite-services">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
                <Globe className="w-5 h-5 mr-2" />
                Global IT Onsite Services
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <DollarSign className="w-5 h-5 mr-2" />
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-zion-blue-light border-b border-zion-blue">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search services, features, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white border-zion-blue-light focus:border-zion-purple"
                />
              </div>
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48 bg-white border-zion-blue-light">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {serviceCategories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Subcategory Filter */}
            <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
              <SelectTrigger className="w-48 bg-white border-zion-blue-light">
                <SelectValue placeholder="All Subcategories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subcategories</SelectItem>
                {getSubcategories().map(subcategory => (
                  <SelectItem key={subcategory} value={subcategory}>{subcategory}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Pricing Model Filter */}
            <Select value={selectedPricingModel} onValueChange={setSelectedPricingModel}>
              <SelectTrigger className="w-40 bg-white border-zion-blue-light">
                <SelectValue placeholder="All Pricing" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Pricing</SelectItem>
                <SelectItem value="one-time">One-time</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="hourly">Hourly</SelectItem>
                <SelectItem value="project-based">Project-based</SelectItem>
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-40 bg-white border-zion-blue-light">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="ai-score">AI Score</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-zion-blue mb-2">
              {filteredServices.length} Services Found
            </h2>
            <p className="text-zion-slate-light">
              Discover the perfect solution for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card key={service.id} className="h-full border-zion-blue-light hover:border-zion-purple transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {service.category}
                    </Badge>
                    {service.featured && (
                      <Badge className="bg-zion-purple text-white text-xs">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg text-zion-blue line-clamp-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-zion-slate-light line-clamp-3">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pb-3">
                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate">
                          {feature}
                        </Badge>
                      ))}
                      {service.features.length > 3 && (
                        <Badge variant="outline" className="text-xs border-zion-blue-light text-zion-slate">
                          +{service.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-zion-slate-light line-clamp-2">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and Details */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-green-600" />
                      <span className="text-lg font-bold text-zion-blue">
                        {service.currency}{service.price.toLocaleString()}
                      </span>
                      <Badge className={`text-xs ${getPricingModelColor(service.pricingModel)}`}>
                        {getPricingModelLabel(service.pricingModel)}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-sm text-zion-slate-light">
                        <Star className="w-3 h-3 text-yellow-500" />
                        <span>{service.rating}</span>
                        <span className="text-xs">({service.reviewCount})</span>
                      </div>
                      <div className="text-xs text-zion-slate-light">
                        AI Score: {service.aiScore}
                      </div>
                    </div>
                  </div>

                  {/* Market Price and Delivery */}
                  <div className="flex items-center justify-between text-xs text-zion-slate-light mb-3">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      <span>Market: {service.marketPrice}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{service.deliveryTime}</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <div className="w-full space-y-3">
                    {/* Contact Buttons */}
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="flex-1 bg-zion-purple hover:bg-zion-purple-dark text-white"
                        onClick={() => window.open(`tel:${service.contactInfo.phone}`)}
                      >
                        <Phone className="w-3 h-3 mr-1" />
                        Call Now
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1 border-zion-blue-light text-zion-blue hover:bg-zion-blue/10"
                        onClick={() => window.open(`mailto:${service.contactInfo.email}`)}
                      >
                        <Mail className="w-3 h-3 mr-1" />
                        Email
                      </Button>
                    </div>

                    {/* Website Link */}
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="w-full text-zion-cyan hover:text-zion-cyan-dark hover:bg-zion-cyan/10"
                      onClick={() => window.open(service.contactInfo.website, '_blank')}
                    >
                      <Globe className="w-3 h-3 mr-1" />
                      Visit Website
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-zion-slate-light text-lg mb-4">
                No services found matching your criteria
              </div>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedSubcategory('all');
                  setSelectedPricingModel('all');
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Our team of experts can create tailored solutions for your specific business needs. 
            Get in touch for a personalized consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center gap-2 text-zion-cyan">
              <Phone className="w-5 h-5" />
              <span className="text-lg font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-zion-cyan">
              <Mail className="w-5 h-5" />
              <span className="text-lg font-semibold">kleber@ziontechgroup.com</span>
            </div>
          </div>
          <div className="mt-8">
            <Link to="/request-quote">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
                Request Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}