import React, { useState, useMemo } from 'react';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES } from '@/data/comprehensiveServices';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const filteredServices = useMemo(() => {
    return COMPREHENSIVE_SERVICES.filter(service => {
      const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           service.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      
      const matchesPrice = priceRange === 'all' || 
        (priceRange === 'low' && parseInt(service.price.replace(/[^0-9]/g, '')) < 5000) ||
        (priceRange === 'medium' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 5000 && parseInt(service.price.replace(/[^0-9]/g, '')) < 15000) ||
        (priceRange === 'high' && parseInt(service.price.replace(/[^0-9]/g, '')) >= 15000);
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedCategory, priceRange]);

  const getPriceDisplay = (service: any) => {
    if (service.priceType === 'monthly') {
      return `$${service.price}/month`;
    } else if (service.priceType === 'yearly') {
      return `$${service.price}/year`;
    } else if (service.priceType === 'per-user') {
      return `$${service.price}/user`;
    } else {
      return `$${service.price.toLocaleString()}`;
    }
  };

  const getCategoryIcon = (category: string) => {
    const categoryData = SERVICE_CATEGORIES.find(cat => cat.name === category);
    return categoryData?.icon || '💼';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive IT Services
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover our complete range of IT services designed to transform your business. From AI development to cybersecurity, we have the expertise you need.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
              <Input
                type="text"
                placeholder="Search for services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border-zion-blue-light text-white placeholder-zion-slate-light"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-zion-blue-light rounded-lg text-white"
            >
              <option value="all">All Categories</option>
              {SERVICE_CATEGORIES.map(category => (
                <option key={category.id} value={category.name}>{category.name}</option>
              ))}
            </select>
            
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-zion-blue-light rounded-lg text-white"
            >
              <option value="all">All Prices</option>
              <option value="low">Under $5,000</option>
              <option value="medium">$5,000 - $15,000</option>
              <option value="high">$15,000+</option>
            </select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card key={service.id} className="bg-white/10 backdrop-blur-sm border-zion-blue-light hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {SERVICE_CATEGORIES.find(cat => cat.id === service.category)?.name || 'Service'}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-zion-slate-light">{service.rating || 4.5}</span>
                    </div>
                  </div>
                  <CardTitle className="text-white text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan font-semibold text-lg">
                        {getPriceDisplay(service)}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {service.priceType || 'Project-based'}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-zion-slate-light">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{service.duration || '2-4 weeks'}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>2-5 people</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {service.tags?.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <div className="px-6 pb-6">
                  <Button asChild className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                    <Link to={`/services/${service.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let our team of experts help you find the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                <Link to="/request-quote">Request Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}