import React, { useState } from 'react';
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
  Clock, 
  Globe, 
  Shield, 
  Cloud, 
  Database,
  Code,
  BarChart3,
  Building,
  Heart,
  GraduationCap,
  DollarSign,
  Zap,
  Eye,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from "lucide-react";
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, PRICING_TIERS, CONTACT_INFO } from "@/data/comprehensiveServices";
import { SEO } from "@/components/SEO";

export default function ComprehensiveServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    return matchesSearch && matchesCategory;
  });

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return (a.price || 0) - (b.price || 0);
      case 'price-high':
        return (b.price || 0) - (a.price || 0);
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      case 'ai-score':
        return (b.aiScore || 0) - (a.aiScore || 0);
      default:
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    }
  });

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI Automation': <Zap className="h-5 w-5" />,
      'Content AI': <Eye className="h-5 w-5" />,
      'Customer Analytics': <BarChart3 className="h-5 w-5" />,
      'Cybersecurity': <Shield className="h-5 w-5" />,
      'Compliance': <Shield className="h-5 w-5" />,
      'Cloud Management': <Cloud className="h-5 w-5" />,
      'Edge Computing': <Globe className="h-5 w-5" />,
      'Real-Time Analytics': <BarChart3 className="h-5 w-5" />,
      'Data Governance': <Database className="h-5 w-5" />,
      'Development Tools': <Code className="h-5 w-5" />,
      'DevOps': <Code className="h-5 w-5" />,
      'Business Intelligence': <BarChart3 className="h-5 w-5" />,
      'Reporting': <BarChart3 className="h-5 w-5" />,
      'IoT': <Globe className="h-5 w-5" />,
      'Smart Buildings': <Building className="h-5 w-5" />,
      'FinTech': <DollarSign className="h-5 w-5" />,
      'Fraud Detection': <Shield className="h-5 w-5" />,
      'Healthcare Tech': <Heart className="h-5 w-5" />,
      'Telemedicine': <Heart className="h-5 w-5" />,
      'EdTech': <GraduationCap className="h-5 w-5" />,
      'Virtual Learning': <GraduationCap className="h-5 w-5" />
    };
    return iconMap[category] || <Zap className="h-5 w-5" />;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'AI Automation': 'from-purple-500 to-indigo-600',
      'Content AI': 'from-blue-500 to-cyan-600',
      'Customer Analytics': 'from-green-500 to-emerald-600',
      'Cybersecurity': 'from-red-500 to-pink-600',
      'Compliance': 'from-orange-500 to-red-600',
      'Cloud Management': 'from-blue-500 to-indigo-600',
      'Edge Computing': 'from-purple-500 to-pink-600',
      'Real-Time Analytics': 'from-green-500 to-blue-600',
      'Data Governance': 'from-gray-500 to-blue-600',
      'Development Tools': 'from-yellow-500 to-orange-600',
      'DevOps': 'from-blue-500 to-green-600',
      'Business Intelligence': 'from-purple-500 to-green-600',
      'Reporting': 'from-blue-500 to-purple-600',
      'IoT': 'from-green-500 to-teal-600',
      'Smart Buildings': 'from-indigo-500 to-purple-600',
      'FinTech': 'from-green-500 to-emerald-600',
      'Fraud Detection': 'from-red-500 to-orange-600',
      'Healthcare Tech': 'from-red-500 to-pink-600',
      'Telemedicine': 'from-blue-500 to-cyan-600',
      'EdTech': 'from-purple-500 to-blue-600',
      'Virtual Learning': 'from-blue-500 to-indigo-600'
    };
    return colorMap[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Comprehensive Tech & AI Services - Zion Tech Group" 
        description="Discover our comprehensive suite of micro SAAS services, IT solutions, and AI-powered platforms. From automation to cybersecurity, we have the solutions your business needs."
        keywords="micro SAAS, AI services, IT solutions, cybersecurity, cloud management, data analytics, business intelligence, healthcare tech, fintech, edtech"
        canonical="https://ziontechgroup.com/comprehensive-services"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive Tech & AI Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover our innovative micro SAAS solutions, cutting-edge IT services, and AI-powered platforms designed to transform your business operations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
              <MessageSquare className="h-5 w-5 mr-2" />
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <ExternalLink className="h-5 w-5 mr-2" />
              View All Services
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-zion-blue-dark py-6 border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-zion-cyan">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>{CONTACT_INFO.mobile}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>{CONTACT_INFO.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>{CONTACT_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <ExternalLink className="h-5 w-5" />
              <a href={CONTACT_INFO.website} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {CONTACT_INFO.website}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-zion-blue py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white border-0"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 bg-white border-0">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {SERVICE_CATEGORIES.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 bg-white border-0">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="ai-score">AI Score</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service) => (
              <Card key={service.id} className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`rounded-full w-12 h-12 bg-gradient-to-br ${getCategoryColor(service.category)} flex items-center justify-center`}>
                      <div className="text-white">
                        {getCategoryIcon(service.category)}
                      </div>
                    </div>
                    {service.featured && (
                      <Badge className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
                        Featured
                      </Badge>
                    )}
                  </div>
                  
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{service.rating}</span>
                      <span className="text-sm text-gray-500">({service.reviewCount})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Zap className="h-4 w-4 text-blue-500" />
                      <span className="text-sm font-medium">AI Score: {service.aiScore}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{service.availability}</span>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-zion-blue">
                        {service.currency}{service.price?.toLocaleString()}
                      </div>
                      <Badge variant="outline" className="border-zion-blue text-zion-blue">
                        {service.category}
                      </Badge>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Get Quote
                      </Button>
                      <Button variant="outline" className="border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Tiers Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Flexible Pricing Tiers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs with our flexible pricing options
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(PRICING_TIERS).map(([key, tier]) => (
              <Card key={key} className={`text-center ${key === 'professional' ? 'ring-2 ring-zion-purple scale-105' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-2xl text-zion-blue">{tier.name}</CardTitle>
                  <CardDescription>
                    Perfect for {key === 'basic' ? 'startups and small teams' : key === 'professional' ? 'growing businesses' : 'enterprise organizations'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-left">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-zion-blue to-zion-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let our team of experts help you implement the perfect solution for your business needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
              <Phone className="h-5 w-5 mr-2" />
              Call {CONTACT_INFO.mobile}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Mail className="h-5 w-5 mr-2" />
              Email {CONTACT_INFO.email}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}