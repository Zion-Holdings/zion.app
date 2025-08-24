import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  COMPREHENSIVE_SERVICES, 
  SERVICE_CATEGORIES, 
  SERVICE_PRICING_TIERS, 
  SERVICE_BENEFITS,
  CONTACT_INFO 
} from "@/data/comprehensiveServices";
import { 
  Search, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Clock, 
  Star, 
  TrendingUp,
  Shield,
  Zap,
  Users,
  Building,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ComprehensiveServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'low' && service.price && service.price < 5000) ||
                        (priceRange === 'medium' && service.price && service.price >= 5000 && service.price < 15000) ||
                        (priceRange === 'high' && service.price && service.price >= 15000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getPriceRangeLabel = (price: number | null) => {
    if (!price) return 'Contact Us';
    if (price < 5000) return 'Low';
    if (price < 15000) return 'Medium';
    return 'High';
  };

  const getPriceRangeColor = (price: number | null) => {
    if (!price) return 'bg-gray-100 text-gray-800';
    if (price < 5000) return 'bg-green-100 text-green-800';
    if (price < 15000) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive IT & AI Solutions
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover our extensive portfolio of innovative micro SAAS services, IT solutions, and AI-powered tools designed to transform your business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
              <Globe className="mr-2 h-5 w-5" />
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Phone className="mr-2 h-5 w-5" />
              Get Free Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-zion-blue-dark py-6 border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-zion-slate-light">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-zion-cyan" />
              <span>{CONTACT_INFO.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-zion-cyan" />
              <span>{CONTACT_INFO.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-zion-cyan" />
              <span>{CONTACT_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-zion-cyan" />
              <span>{CONTACT_INFO.businessHours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-zion-blue py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search services, technologies, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white border-0"
                  />
                </div>
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48 bg-white border-0">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {SERVICE_CATEGORIES.map(category => (
                    <SelectItem key={category.id} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-full md:w-48 bg-white border-0">
                  <SelectValue placeholder="All Prices" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="low">Under $5,000</SelectItem>
                  <SelectItem value="medium">$5,000 - $15,000</SelectItem>
                  <SelectItem value="high">Over $15,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories Overview */}
      <div className="py-16 bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Service Categories
            </h2>
            <p className="text-lg text-zion-slate-dark max-w-3xl mx-auto">
              Explore our comprehensive range of technology services across multiple domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_CATEGORIES.map((category) => (
              <Card key={category.id} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <CardTitle className="text-zion-blue">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Featured Services
            </h2>
            <p className="text-lg text-zion-slate-dark max-w-3xl mx-auto">
              Discover our premium selection of AI, IT, and business solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={service.images[0]} 
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {service.featured && (
                    <Badge className="absolute top-4 right-4 bg-zion-purple text-white">
                      Featured
                    </Badge>
                  )}
                  <Badge className={`absolute top-4 left-4 ${getPriceRangeColor(service.price)}`}>
                    {getPriceRangeLabel(service.price)}
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg text-zion-blue group-hover:text-zion-purple transition-colors">
                      {service.title}
                    </CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{service.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="text-sm text-zion-slate-dark">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-zion-slate-dark">
                      <Users className="h-4 w-4" />
                      <span>{service.author.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zion-slate-dark">
                      <Calendar className="h-4 w-4" />
                      <span>{service.availability}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-zion-blue">
                      {service.price ? `$${service.price.toLocaleString()}` : 'Contact Us'}
                    </div>
                    <Button className="bg-zion-purple hover:bg-zion-purple-dark text-white">
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="py-16 bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Flexible Pricing Options
            </h2>
            <p className="text-lg text-zion-slate-dark max-w-3xl mx-auto">
              Choose the perfect plan for your business needs with our tiered pricing structure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {Object.entries(SERVICE_PRICING_TIERS).map(([key, tier]) => (
              <Card key={key} className={`text-center ${key === 'business' ? 'border-zion-purple border-2 scale-105' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-2xl text-zion-blue">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  {key === 'business' && (
                    <Badge className="bg-zion-purple text-white w-fit mx-auto">Most Popular</Badge>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-zion-blue">
                      {tier.discount > 0 ? `${Math.round(tier.discount * 100)}% Off` : 'Full Price'}
                    </div>
                    <div className="text-sm text-zion-slate-dark">
                      {tier.discount > 0 ? 'Available for qualifying services' : 'Enterprise pricing'}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
                    Choose {tier.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Service Benefits */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-lg text-zion-slate-dark max-w-3xl mx-auto">
              Experience the advantages of working with a leading technology solutions provider
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Innovation First</h3>
              <p className="text-zion-slate-dark">Cutting-edge solutions using the latest technologies and methodologies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-zion-blue" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-dark">Bank-level security and compliance for all our solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Rapid Deployment</h3>
              <p className="text-zion-slate-dark">Quick implementation and deployment with minimal disruption</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-zion-green" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Expert Support</h3>
              <p className="text-zion-slate-dark">24/7 technical support and dedicated account management</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-zion-blue to-zion-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Get started with our comprehensive technology solutions today. Our experts are ready to help you achieve your digital transformation goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Mail className="mr-2 h-5 w-5" />
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-zion-slate-dark">
                Ready to discuss your project? Contact our team of experts today.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zion-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-zion-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zion-blue mb-1">Phone</h3>
                    <p className="text-zion-slate-dark">{CONTACT_INFO.phone}</p>
                    <p className="text-sm text-zion-slate-dark">{CONTACT_INFO.emergencySupport}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zion-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-zion-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zion-blue mb-1">Email</h3>
                    <p className="text-zion-slate-dark">{CONTACT_INFO.email}</p>
                    <p className="text-sm text-zion-slate-dark">Response within 2 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zion-cyan/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-zion-cyan" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zion-blue mb-1">Address</h3>
                    <p className="text-zion-slate-dark">{CONTACT_INFO.address}</p>
                    <p className="text-sm text-zion-slate-dark">Global services available</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-zion-blue mb-4">Quick Contact Form</h3>
                <div className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Company" />
                  <Input placeholder="Email" />
                  <Input placeholder="Phone" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Service Interest" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICE_CATEGORIES.map(category => (
                        <SelectItem key={category.id} value={category.name}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}