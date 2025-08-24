import React, { useState } from 'react';
import { ENHANCED_SERVICES, ENHANCED_SERVICE_CATEGORIES, PRICING_TIERS } from '@/data/enhancedServices';
import { ProductListing } from '@/types/listings';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EnhancedServicesOverview from '@/components/EnhancedServicesOverview';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Globe, 
  Shield, 
  TrendingUp, 
  Zap,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  CheckCircle,
  DollarSign,
  Users,

  BarChart3,
  Brain,
  Lock,
  Database,
  Briefcase,
  ShoppingCart,
  GraduationCap,
  Truck,
  Home,
  Heart,
  BookOpen,
  Eye
} from 'lucide-react';
import { SEO } from '@/components/SEO';

interface ServiceCardProps {
  service: ProductListing;
  onContact: (service: ProductListing) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onContact }) => {
  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI Automation': <Brain className="w-5 h-5" />,
      'Content AI': <BookOpen className="w-5 h-5" />,
      'Customer Analytics': <BarChart3 className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'Compliance': <Lock className="w-5 h-5" />,
      'Data Engineering': <Database className="w-5 h-5" />,
      'IoT Analytics': <Database className="w-5 h-5" />,
      'Business Automation': <Briefcase className="w-5 h-5" />,
      'HR Tech': <Users className="w-5 h-5" />,
      'Marketing AI': <TrendingUp className="w-5 h-5" />,
      'Sales Intelligence': <TrendingUp className="w-5 h-5" />,
      'FinTech': <DollarSign className="w-5 h-5" />,
      'Fraud Prevention': <Eye className="w-5 h-5" />,
      'Healthcare Tech': <Heart className="w-5 h-5" />,
      'Life Sciences': <Zap className="w-5 h-5" />,
      'EdTech': <GraduationCap className="w-5 h-5" />,
      'Skills Assessment': <CheckCircle className="w-5 h-5" />,
      'Supply Chain': <Truck className="w-5 h-5" />,
      'Logistics': <Truck className="w-5 h-5" />,
      'Real Estate Tech': <Home className="w-5 h-5" />,
      'Property Management': <Home className="w-5 h-5" />,
      'Legal Tech': <Lock className="w-5 h-5" />,
      'IP Management': <Lock className="w-5 h-5" />,
    };
    return iconMap[category] || <Briefcase className="w-5 h-5" />;
  };

  const getPricingTier = (price: number) => {
    if (price <= 299) return { tier: 'Startup', color: 'bg-green-100 text-green-800' };
    if (price <= 799) return { tier: 'Small Business', color: 'bg-blue-100 text-blue-800' };
    if (price <= 1999) return { tier: 'Enterprise', color: 'bg-purple-100 text-purple-800' };
    return { tier: 'Custom', color: 'bg-orange-100 text-orange-800' };
  };

  const pricingTier = getPricingTier(service.price || 0);

  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 border-zion-blue-light bg-zion-blue-dark">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-zion-purple/20 rounded-lg">
              {getCategoryIcon(service.category)}
            </div>
            <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
              {service.category}
            </Badge>
          </div>
          {service.featured && (
            <Badge className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
              Featured
            </Badge>
          )}
        </div>
        <CardTitle className="text-white text-lg leading-tight">{service.title}</CardTitle>
        <CardDescription className="text-zion-slate-light text-sm leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0">
        <div className="space-y-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {service.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Metrics */}
          <div className="flex items-center justify-between text-sm text-zion-slate-light">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>{service.rating}</span>
                <span className="text-zion-slate">({service.reviewCount})</span>
              </div>
              <div className="flex items-center space-x-1">
                <Brain className="w-4 h-4 text-zion-cyan" />
                <span>AI Score: {service.aiScore}%</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{service.availability}</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-2xl font-bold text-white">
                ${service.price?.toLocaleString()}
                <span className="text-sm text-zion-slate-light font-normal">/month</span>
              </div>
              <Badge className={pricingTier.color}>
                {pricingTier.tier}
              </Badge>
            </div>
            <Button 
              onClick={() => onContact(service)}
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
            >
              Get Started
            </Button>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2 text-sm text-zion-slate-light">
            <Globe className="w-4 h-4" />
            <span>{service.location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ContactModal: React.FC<{ service: ProductListing | null; onClose: () => void }> = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 space-y-4">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900">Contact Zion Tech Group</h3>
          <p className="text-gray-600 mt-2">Get started with {service.title}</p>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <Mail className="w-5 h-5 text-zion-purple" />
            <div>
              <p className="font-medium">Email</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-zion-purple hover:underline">
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <Phone className="w-5 h-5 text-zion-purple" />
            <div>
              <p className="font-medium">Phone</p>
              <a href="tel:+13024640950" className="text-zion-purple hover:underline">
                +1 302 464 0950
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <MapPin className="w-5 h-5 text-zion-purple" />
            <div>
              <p className="font-medium">Address</p>
              <p className="text-sm text-gray-600">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
          </div>
        </div>

        <div className="flex space-x-3">
          <Button 
            onClick={onClose}
            variant="outline" 
            className="flex-1"
          >
            Close
          </Button>
          <Button 
            onClick={() => window.open('https://ziontechgroup.com', '_blank')}
            className="flex-1 bg-zion-purple hover:bg-zion-purple-dark text-white"
          >
            Visit Website
          </Button>
        </div>
      </div>
    </div>
  );
};

export default function EnhancedServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPricingTier, setSelectedPricingTier] = useState('all');
  const [contactService, setContactService] = useState<ProductListing | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  const filteredServices = ENHANCED_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || 
                           service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    
    const matchesPricing = selectedPricingTier === 'all' || 
                           (selectedPricingTier === 'startup' && (service.price || 0) <= 299) ||
                           (selectedPricingTier === 'smb' && (service.price || 0) > 299 && (service.price || 0) <= 799) ||
                           (selectedPricingTier === 'enterprise' && (service.price || 0) > 799 && (service.price || 0) <= 1999) ||
                           (selectedPricingTier === 'custom' && (service.price || 0) > 1999);

    return matchesSearch && matchesCategory && matchesPricing;
  });

  const handleContact = (service: ProductListing) => {
    setContactService(service);
  };

  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="Enhanced Micro SAAS Services - Zion Tech Group" 
        description="Discover our comprehensive suite of innovative micro SAAS services, AI solutions, and IT services. Transform your business with cutting-edge technology."
        keywords="micro SAAS, AI services, IT solutions, business automation, cybersecurity, data analytics"
        canonical="https://ziontechgroup.com/enhanced-services"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue to-zion-blue-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Enhanced Micro SAAS Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your business with our comprehensive suite of innovative micro SAAS solutions, 
            AI-powered services, and cutting-edge IT solutions. From startups to enterprises, 
            we have the tools you need to succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
              onClick={() => handleContact(ENHANCED_SERVICES[0])}
            >
              Get Started Today
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
              onClick={() => window.open('https://ziontechgroup.com', '_blank')}
            >
              Visit Our Website
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-zion-blue-light border-b border-zion-blue-light py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-zion-cyan text-sm">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:kleber@ziontechgroup.com" className="hover:underline">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+13024640950" className="hover:underline">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-zion-blue-dark py-6 px-4 border-b border-zion-blue-light">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-4 h-4" />
                <Input
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light"
                />
              </div>
            </div>
            
            <div className="flex gap-3">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40 bg-zion-blue border-zion-blue-light text-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {ENHANCED_SERVICE_CATEGORIES.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedPricingTier} onValueChange={setSelectedPricingTier}>
                <SelectTrigger className="w-40 bg-zion-blue border-zion-blue-light text-white">
                  <SelectValue placeholder="Pricing Tier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Tiers</SelectItem>
                  {Object.entries(PRICING_TIERS).map(([key, tier]) => (
                    <SelectItem key={key} value={key}>
                      {tier.label} (${tier.min}-${tier.max})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Tabs */}
      <div className="py-12 px-4">
        <div className="container mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-5 bg-zion-blue-dark border border-zion-blue-light">
              <TabsTrigger value="overview" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                Overview
              </TabsTrigger>
              <TabsTrigger value="services" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                All Services
              </TabsTrigger>
              <TabsTrigger value="pricing" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                Pricing Tiers
              </TabsTrigger>
              <TabsTrigger value="comparison" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                Service Comparison
              </TabsTrigger>
              <TabsTrigger value="contact" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                Contact Us
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <EnhancedServicesOverview />
            </TabsContent>

            {/* Services Tab */}
            <TabsContent value="services" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {filteredServices.length} Services Available
                </h2>
                <p className="text-zion-slate-light">
                  Find the perfect solution for your business needs
                </p>
              </div>

              {filteredServices.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-zion-slate-light text-lg">No services match your current filters.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      setSelectedPricingTier('all');
                    }}
                    className="mt-4 border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredServices.map((service) => (
                    <ServiceCard 
                      key={service.id} 
                      service={service} 
                      onContact={handleContact}
                    />
                  ))}
                </div>
              )}
            </TabsContent>

            {/* Pricing Tiers Tab */}
            <TabsContent value="pricing" className="space-y-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Pricing Tiers</h2>
                <p className="text-zion-slate-light max-w-3xl mx-auto">
                  Choose the pricing tier that best fits your business size and requirements. 
                  All tiers include our core features and support.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(PRICING_TIERS).map(([key, tier]) => (
                  <div key={key} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">{tier.label}</h3>
                    <p className="text-zion-slate-light mb-4">
                      ${tier.min.toLocaleString()} - ${tier.max.toLocaleString()}/month
                    </p>
                    <div className="text-3xl font-bold text-zion-cyan mb-4">
                      {ENHANCED_SERVICES.filter(service => 
                        (service.price || 0) >= tier.min && (service.price || 0) <= tier.max
                      ).length}
                    </div>
                    <div className="text-zion-slate-light mb-6">Services Available</div>
                    <Button 
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                      onClick={() => window.open('https://ziontechgroup.com', '_blank')}
                    >
                      Explore {tier.label} Services
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Service Comparison Tab */}
            <TabsContent value="comparison" className="space-y-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Detailed Service Comparison</h2>
                <p className="text-zion-slate-light max-w-3xl mx-auto">
                  Compare features, capabilities, and pricing across our service categories to make an informed decision.
                </p>
              </div>

              {ENHANCED_SERVICE_CATEGORIES.map((category) => {
                const categoryServices = ENHANCED_SERVICES.filter(service => 
                  service.category.toLowerCase().includes(category.value.toLowerCase())
                );
                
                if (categoryServices.length === 0) return null;

                return (
                  <div key={category.value} className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{category.label} Services Comparison</h3>
                      <p className="text-zion-slate-light">Compare features, pricing, and capabilities</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryServices.map((service) => (
                        <div key={service.id} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center">
                          <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
                          <div className="text-3xl font-bold text-zion-cyan mb-2">
                            ${service.price?.toLocaleString()}/month
                          </div>
                          <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 mb-3">
                            {service.category}
                          </Badge>
                          <div className="flex items-center justify-center space-x-1 text-sm text-zion-slate-light mb-3">
                            <span className="w-2 h-2 bg-zion-cyan rounded-full"></span>
                            <span>AI Score: {service.aiScore}%</span>
                          </div>
                          <Button 
                            className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                            onClick={() => window.open('https://ziontechgroup.com', '_blank')}
                          >
                            Get Started
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </TabsContent>

            {/* Contact Tab */}
            <TabsContent value="contact" className="space-y-8">
              <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                  Contact our team to discuss your specific needs and find the perfect solution for your business. 
                  We offer personalized consultations and custom implementations.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center justify-center space-x-3 p-4 bg-zion-blue rounded-lg">
                    <Mail className="w-6 h-6 text-zion-cyan" />
                    <div className="text-left">
                      <p className="font-medium text-white">Email</p>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:underline text-sm">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-3 p-4 bg-zion-blue rounded-lg">
                    <Phone className="w-6 h-6 text-zion-cyan" />
                    <div className="text-left">
                      <p className="font-medium text-white">Phone</p>
                      <a href="tel:+13024640950" className="text-zion-cyan hover:underline text-sm">
                        +1 302 464 0950
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-3 p-4 bg-zion-blue rounded-lg">
                    <MapPin className="w-6 h-6 text-zion-cyan" />
                    <div className="text-left">
                      <p className="font-medium text-white">Address</p>
                      <p className="text-zion-slate-light text-sm">
                        364 E Main St STE 1008<br />
                        Middletown DE 19709
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                    onClick={() => window.open('mailto:kleber@ziontechgroup.com', '_blank')}
                  >
                    Send Email
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
                    onClick={() => window.open('https://ziontechgroup.com', '_blank')}
                  >
                    Visit Website
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        service={contactService} 
        onClose={() => setContactService(null)} 
      />
    </div>
  );
}