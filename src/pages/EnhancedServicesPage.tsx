import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Briefcase,
  Zap,
  Star, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Globe,
  ArrowRight,
  CheckCircle,
  X,
  Plus,
  Calendar,
  TrendingUp,
  Users,
  MessageSquare,
  BarChart3,
  Code,
  Database,
  Network,
  Brain,
  Settings,
  BookOpen,
  Cloud,
  Shield
} from "lucide-react";
import { 
  MICRO_SAAS_SERVICES, 
  IT_SERVICES, 
  AI_SERVICES, 
  SERVICE_CATEGORIES,
  PRICING_TIERS,
  CONTACT_INFO 
} from '@/data/microSaasServices';
import { ProductListing } from '@/types/listings';

interface ServiceCardProps {
  service: ProductListing;
  onContact: (service: ProductListing) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onContact }) => {
  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI Content Tools': <BarChart3 className="w-5 h-5" />,
      'Social Media Tools': <Users className="w-5 h-5" />,
      'Email Marketing': <Mail className="w-5 h-5" />,
      'Customer Support': <MessageSquare className="w-5 h-5" />,
              'Inventory Management': <Briefcase className="w-5 h-5" />,
      'Project Management': <Calendar className="w-5 h-5" />,
              'Financial Tools': <Zap className="w-5 h-5" />,
      'HR Management': <Briefcase className="w-5 h-5" />,
      'Marketing Analytics': <TrendingUp className="w-5 h-5" />,
      'Sales CRM': <Users className="w-5 h-5" />,
      'Cloud Services': <Cloud className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'DevOps': <Code className="w-5 h-5" />,
      'Data Analytics': <Database className="w-5 h-5" />,
      'Network Infrastructure': <Network className="w-5 h-5" />,
      'AI Development': <Brain className="w-5 h-5" />,
      'AI Integration': <Zap className="w-5 h-5" />,
      'AI Consulting': <BookOpen className="w-5 h-5" />,
      'AI Training': <BookOpen className="w-5 h-5" />,
      'AI Maintenance': <Settings className="w-5 h-5" />
    };
    return iconMap[category] || <Zap className="w-5 h-5" />;
  };

  const getPricingBadge = (price: number) => {
    if (price < 1000) return <Badge className="bg-green-500 hover:bg-green-600">Budget</Badge>;
    if (price < 10000) return <Badge className="bg-blue-500 hover:bg-blue-600">Professional</Badge>;
    return <Badge className="bg-purple-500 hover:bg-purple-600">Enterprise</Badge>;
  };

  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-zion-purple/20 hover:border-zion-purple/50 bg-gradient-to-br from-zion-blue-dark/50 to-zion-blue/30">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-zion-purple to-zion-cyan text-white">
              {getCategoryIcon(service.category)}
            </div>
            <div>
              <CardTitle className="text-lg text-white group-hover:text-zion-cyan transition-colors">
                {service.title}
              </CardTitle>
              <div className="flex items-center space-x-2 mt-1">
                {getPricingBadge(service.price)}
                {service.featured && (
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black">
                    Featured
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-zion-cyan">
              {service.currency}{service.price.toLocaleString()}
            </div>
            <div className="text-sm text-zion-slate-light">
              {service.category}
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <CardDescription className="text-zion-slate-light text-sm leading-relaxed">
          {service.description}
        </CardDescription>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-white">{service.rating}</span>
              <span className="text-zion-slate-light">({service.reviewCount})</span>
            </div>
            <div className="flex items-center space-x-1 text-zion-cyan">
              <Brain className="w-4 h-4" />
              <span>{service.aiScore}%</span>
            </div>
          </div>
          <div className="flex items-center space-x-1 text-zion-slate-light">
            <Clock className="w-4 h-4" />
            <span>{service.availability}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {service.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs border-zion-purple/30 text-zion-slate-light">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="pt-2">
          <Button 
            onClick={() => onContact(service)}
            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
          >
            Get Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const EnhancedServicesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [contactModal, setContactModal] = useState<{ open: boolean; service: ProductListing | null }>({
    open: false,
    service: null
  });

  const allServices = [...MICRO_SAAS_SERVICES, ...IT_SERVICES, ...AI_SERVICES];

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'budget' && service.price < 1000) ||
                        (priceRange === 'professional' && service.price >= 1000 && service.price < 10000) ||
                        (priceRange === 'enterprise' && service.price >= 10000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getServicesByTab = (tab: string) => {
    switch (tab) {
      case 'micro-saas':
        return MICRO_SAAS_SERVICES;
      case 'it-services':
        return IT_SERVICES;
      case 'ai-services':
        return AI_SERVICES;
      default:
        return allServices;
    }
  };

  const handleContact = (service: ProductListing) => {
    setContactModal({ open: true, service });
  };

  const closeContactModal = () => {
    setContactModal({ open: false, service: null });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/20 via-zion-cyan/20 to-zion-blue/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                Professional Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 leading-relaxed">
              Discover cutting-edge micro SAAS solutions, enterprise IT services, and AI-powered innovations. 
              Transform your business with our comprehensive service ecosystem.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg px-8 py-3">
                <Globe className="w-5 h-5 mr-2" />
                Global Services
              </Button>
              <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark text-lg px-8 py-3">
                <TrendingUp className="w-5 h-5 mr-2" />
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-zion-blue-dark border-y border-zion-purple/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <h3 className="text-white font-semibold text-lg mb-2">Ready to get started?</h3>
              <p className="text-zion-slate-light">Contact our team for personalized solutions</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Globe className="w-4 h-4" />
                <span>{CONTACT_INFO.website}</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Mail className="w-4 h-4" />
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Users className="w-4 h-4" />
                <span>{CONTACT_INFO.mobile}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <Input
                placeholder="Search services, features, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-zion-blue-dark/50 border-zion-purple/30 text-white placeholder:text-zion-slate-light"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48 bg-zion-blue-dark/50 border-zion-purple/30 text-white">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent className="bg-zion-blue-dark border-zion-purple/30">
                <SelectItem value="all">All Categories</SelectItem>
                {SERVICE_CATEGORIES.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-full md:w-48 bg-zion-blue-dark/50 border-zion-purple/30 text-white">
                <SelectValue placeholder="All Prices" />
              </SelectTrigger>
              <SelectContent className="bg-zion-blue-dark border-zion-purple/30">
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="budget">Budget ($0 - $999)</SelectItem>
                <SelectItem value="professional">Professional ($1K - $9.9K)</SelectItem>
                <SelectItem value="enterprise">Enterprise ($10K+)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Service Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-zion-blue-dark/50 border border-zion-purple/30">
            <TabsTrigger value="all" className="text-white data-[state=active]:bg-zion-purple">
              All Services ({allServices.length})
            </TabsTrigger>
            <TabsTrigger value="micro-saas" className="text-white data-[state=active]:bg-zion-purple">
              Micro SAAS ({MICRO_SAAS_SERVICES.length})
            </TabsTrigger>
            <TabsTrigger value="it-services" className="text-white data-[state=active]:bg-zion-purple">
              IT Services ({IT_SERVICES.length})
            </TabsTrigger>
            <TabsTrigger value="ai-services" className="text-white data-[state=active]:bg-zion-purple">
              AI Services ({AI_SERVICES.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getServicesByTab(activeTab)
                .filter(service => {
                  const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                       service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                       service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
                  
                  const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
                  
                  const matchesPrice = priceRange === 'all' || 
                                      (priceRange === 'budget' && service.price < 1000) ||
                                      (priceRange === 'professional' && service.price >= 1000 && service.price < 10000) ||
                                      (priceRange === 'enterprise' && service.price >= 10000);
                  
                  return matchesSearch && matchesCategory && matchesPrice;
                })
                .map((service) => (
                  <ServiceCard key={service.id} service={service} onContact={handleContact} />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-zion-slate-light text-lg mb-4">No services found matching your criteria</div>
            <Button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setPriceRange('all');
              }}
              variant="outline"
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Contact Modal */}
      {contactModal.open && contactModal.service && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-zion-blue-dark border border-zion-purple/30 rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <p className="text-zion-slate-light mb-4">
              Interested in <strong>{contactModal.service.title}</strong>? Our team will get back to you within 24 hours.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Mail className="w-4 h-4" />
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Users className="w-4 h-4" />
                <span>{CONTACT_INFO.mobile}</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Globe className="w-4 h-4" />
                <span>{CONTACT_INFO.website}</span>
              </div>
            </div>
            <div className="flex space-x-3">
              <Button 
                onClick={closeContactModal}
                variant="outline"
                className="flex-1 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark"
              >
                Close
              </Button>
              <Button 
                onClick={() => {
                  window.open(`mailto:${CONTACT_INFO.email}?subject=Inquiry about ${contactModal.service?.title}`, '_blank');
                  closeContactModal();
                }}
                className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
              >
                Send Email
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedServicesPage;