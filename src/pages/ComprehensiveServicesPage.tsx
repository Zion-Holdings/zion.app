import React, { useState, useMemo } from 'react';
import { comprehensiveServices, serviceCategories, serviceSubcategories } from '@/data/comprehensiveServices';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
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
  const [priceRange, setPriceRange] = useState<string>('all');

  const filteredServices = useMemo(() => {
    return comprehensiveServices.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSubcategory = selectedSubcategory === 'all' || service.subcategory === selectedSubcategory;
      
      let matchesPrice = true;
      if (priceRange === 'low') matchesPrice = service.price <= 1000;
      else if (priceRange === 'medium') matchesPrice = service.price > 1000 && service.price <= 5000;
      else if (priceRange === 'high') matchesPrice = service.price > 5000;
      
      return matchesSearch && matchesCategory && matchesSubcategory && matchesPrice;
    });
  }, [searchQuery, selectedCategory, selectedSubcategory, priceRange]);

  const getSubcategories = (category: string) => {
    if (category === 'all') return [];
    return serviceSubcategories[category as keyof typeof serviceSubcategories] || [];
  };

  const formatPrice = (price: number, model: string) => {
    if (model === 'monthly') return `$${price}/month`;
    if (model === 'hourly') return `$${price}/hour`;
    if (model === 'project-based') return `$${price}`;
    return `$${price}`;
  };

  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case 'monthly': return 'Monthly Subscription';
      case 'hourly': return 'Hourly Rate';
      case 'project-based': return 'Project-Based';
      case 'one-time': return 'One-Time';
      default: return model;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-zion-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Tech Solutions
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our complete ecosystem of AI services, IT solutions, micro SAAS platforms, and digital transformation consulting. 
            All services include direct contact with our expert team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
                <Phone className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <Mail className="w-4 h-4 mr-2" />
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info Banner */}
      <section className="bg-zion-blue-dark py-6 border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center text-white">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-zion-cyan" />
              <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-zion-cyan transition-colors">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {serviceCategories.map(category => (
                  <SelectItem key={category.id} value={category.name}>
                    {category.icon} {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Subcategories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subcategories</SelectItem>
                {getSubcategories(selectedCategory).map(sub => (
                  <SelectItem key={sub} value={sub}>{sub}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="All Prices" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="low">Under $1,000</SelectItem>
                <SelectItem value="medium">$1,000 - $5,000</SelectItem>
                <SelectItem value="high">Over $5,000</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="h-full hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={service.images[0]} 
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-zion-purple text-white">
                    {service.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-purple">
                        {formatPrice(service.price, service.pricingModel)}
                      </div>
                      <div className="text-sm text-gray-500">
                        {getPricingModelLabel(service.pricingModel)}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="text-xs text-gray-600 flex items-center gap-1">
                          <div className="w-1 h-1 bg-zion-cyan rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-blue-500" />
                      Benefits
                    </h4>
                    <div className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <div key={index} className="text-xs text-gray-600 flex items-center gap-1">
                          <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{service.rating}</span>
                      <span>({service.reviewCount})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.estimatedDelivery}</span>
                    </div>
                  </div>

                  {/* Target Audience */}
                  <div>
                    <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-500" />
                      Perfect For
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {service.targetAudience.slice(0, 3).map((audience, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {audience}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Contact Section */}
                  <div className="border-t pt-4">
                    <div className="text-center space-y-3">
                      <div className="text-sm text-gray-600">
                        Ready to get started? Contact our team directly:
                      </div>
                      <div className="flex flex-col gap-2">
                        <a 
                          href={`tel:${service.contactInfo.phone}`}
                          className="flex items-center justify-center gap-2 text-zion-cyan hover:text-zion-cyan-dark transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          {service.contactInfo.phone}
                        </a>
                        <a 
                          href={`mailto:${service.contactInfo.email}`}
                          className="flex items-center justify-center gap-2 text-zion-cyan hover:text-zion-cyan-dark transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          {service.contactInfo.email}
                        </a>
                      </div>
                      <Link 
                        to="/contact"
                        className="inline-flex items-center gap-2 text-sm text-zion-purple hover:text-zion-purple-dark transition-colors"
                      >
                        Get Custom Quote <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No services found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search criteria or contact us for custom solutions.</p>
              <Link to="/contact">
                <Button className="bg-zion-purple hover:bg-zion-purple-dark">
                  Contact Us
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-zion-blue py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our expert team can create tailored solutions for your specific business needs. 
            Get in touch for a personalized consultation and quote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
                <Phone className="w-4 h-4 mr-2" />
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <Mail className="w-4 h-4 mr-2" />
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}