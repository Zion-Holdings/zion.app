import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Cloud, 
  Database, 
  Smartphone, 
  Link as LinkIcon,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Target
} from 'lucide-react';
import { EXPANDED_SERVICES, SERVICE_CATEGORIES, FEATURED_SERVICES, NEW_SERVICES } from '../data/expandedServices';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const ServiceCard: React.FC<{ service: typeof EXPANDED_SERVICES[0] }> = ({ service }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Automation': return <Zap className="w-5 h-5" />;
      case 'Cybersecurity': return <Shield className="w-5 h-5" />;
      case 'Cloud & DevOps': return <Cloud className="w-5 h-5" />;
      case 'Data & Analytics': return <Database className="w-5 h-5" />;
      case 'Digital Transformation': return <Target className="w-5 h-5" />;
      case 'IoT & Edge Computing': return <Smartphone className="w-5 h-5" />;
      case 'Blockchain & Web3': return <LinkIcon className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
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

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            {getCategoryIcon(service.category)}
            <Badge variant="secondary" className="text-xs">
              {service.category}
            </Badge>
          </div>
          {service.isNew && (
            <Badge className="bg-green-500 text-white text-xs">New</Badge>
          )}
        </div>
        <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
        <CardDescription className="text-sm text-gray-600 leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 pb-3">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">
              ${service.price.toLocaleString()}
            </span>
            <Badge className={getPricingModelColor(service.pricingModel)}>
              {service.pricingModel.replace('-', ' ')}
            </Badge>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{service.rating}</span>
            <span>•</span>
            <span>{service.reviewCount} reviews</span>
            <span>•</span>
            <span>AI Score: {service.aiScore}</span>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium text-sm">Key Features:</h4>
            <ul className="space-y-1">
              {service.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-center text-xs text-gray-600">
                  <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button asChild className="w-full" size="sm">
          <Link to={`/service/${service.id}`}>
            Learn More
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const ExpandedServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = useMemo(() => {
    let filtered = EXPANDED_SERVICES;
    
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(service => service.category === selectedCategory);
    }
    
    return filtered;
  }, [searchTerm, selectedCategory]);

  const handleContactClick = () => {
    window.open('https://ziontechgroup.com/contact', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Enterprise Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Cutting-edge AI, cybersecurity, cloud, and digital transformation services 
              designed to accelerate your business growth and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={handleContactClick}
                className="text-lg px-8 py-3"
              >
                Get Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search services, features, or use cases..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {SERVICE_CATEGORIES.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured Services Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Featured Solutions
            </h2>
            <Badge variant="secondary" className="text-sm">
              {FEATURED_SERVICES.length} Services
            </Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_SERVICES.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* New Services Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Latest Innovations
            </h2>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <Badge variant="secondary" className="text-sm">
                {NEW_SERVICES.length} New
              </Badge>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEW_SERVICES.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* All Services Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              All Enterprise Services
            </h2>
            <Badge variant="secondary" className="text-sm">
              {filteredServices.length} Services
            </Badge>
          </div>
          
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map(service => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg mb-6 text-blue-100">
            Get expert consultation and custom solutions tailored to your enterprise needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={handleContactClick}
              className="text-lg px-8 py-3"
            >
              Contact Our Experts
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-blue-600"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedServicesPage;