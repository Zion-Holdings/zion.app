import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  DollarSign, 
  Users, 
  Shield, 
  Zap,
  Brain,
  Globe,
  Database,
  Network,
  HardDrive,
  Leaf,
  Eye,
  CreditCard,
  Phone,
  Mail,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Lightbulb
} from "lucide-react";
import { EXPANDED_SERVICES, SERVICE_CATEGORIES, SERVICE_SUBCATEGORIES, type ExpandedService } from "@/data/expandedServices";
import { TrustedBySection } from "@/components/TrustedBySection";

export default function ExpandedServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [filteredServices, setFilteredServices] = useState<ExpandedService[]>(EXPANDED_SERVICES);

  useEffect(() => {
    let filtered = EXPANDED_SERVICES;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
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

    // Filter by price range
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(service => {
        if (max) {
          return service.price >= min && service.price <= max;
        }
        return service.price >= min;
      });
    }

    setFilteredServices(filtered);
  }, [searchTerm, selectedCategory, selectedSubcategory, priceRange]);

  const getSubcategories = () => {
    if (selectedCategory === 'all') return [];
    return SERVICE_SUBCATEGORIES[selectedCategory as keyof typeof SERVICE_SUBCATEGORIES] || [];
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      "AI & Machine Learning": <Brain className="w-6 h-6" />,
      "Cybersecurity": <Shield className="w-6 h-6" />,
      "Cloud & DevOps": <Globe className="w-6 h-6" />,
      "Data & Analytics": <Database className="w-6 h-6" />,
      "Blockchain & Web3": <Network className="w-6 h-6" />,
      "IoT & Edge Computing": <HardDrive className="w-6 h-6" />,
      "Quantum Computing": <Zap className="w-6 h-6" />,
      "Green Tech & Sustainability": <Leaf className="w-6 h-6" />,
      "AR/VR & Metaverse": <Eye className="w-6 h-6" />,
      "FinTech & Digital Banking": <CreditCard className="w-6 h-6" />
    };
    return icons[category] || <Lightbulb className="w-6 h-6" />;
  };

  const getPricingModelColor = (model: string) => {
    const colors: { [key: string]: string } = {
      "one-time": "bg-blue-100 text-blue-800",
      "subscription": "bg-green-100 text-green-800",
      "usage-based": "bg-purple-100 text-purple-800",
      "project-based": "bg-orange-100 text-orange-800"
    };
    return colors[model] || "bg-gray-100 text-gray-800";
  };

  const getSupportLevelColor = (level: string) => {
    const colors: { [key: string]: string } = {
      "basic": "bg-gray-100 text-gray-800",
      "standard": "bg-blue-100 text-blue-800",
      "premium": "bg-purple-100 text-purple-800",
      "enterprise": "bg-red-100 text-red-800"
    };
    return colors[level] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Advanced Technology Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Discover cutting-edge micro SAAS solutions and professional IT services designed to transform your business with innovative technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
              <Phone className="w-5 h-5 mr-2" />
              Contact Us: +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Mail className="w-5 h-5 mr-2" />
              kleber@ziontechgroup.com
            </Button>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border-b py-6 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {SERVICE_CATEGORIES.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select Subcategory" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Subcategories</SelectItem>
                {getSubcategories().map(subcategory => (
                  <SelectItem key={subcategory} value={subcategory}>{subcategory}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-5000">Under $5,000</SelectItem>
                <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                <SelectItem value="10000-20000">$10,000 - $20,000</SelectItem>
                <SelectItem value="20000-999999">$20,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {filteredServices.length} Services Available
          </h2>
          <p className="text-gray-600">
            Professional technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <Card key={service.id} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-zion-blue/10 rounded-lg">
                      {getCategoryIcon(service.category)}
                    </div>
                    <Badge variant="secondary" className={getPricingModelColor(service.pricingModel)}>
                      {service.pricingModel}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-zion-blue">
                      ${service.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500">
                      {service.currency} {service.pricingModel === 'subscription' ? '/month' : ''}
                    </div>
                  </div>
                </div>
                
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Rating and AI Score */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium">{service.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({service.reviewCount} reviews)</span>
                  </div>
                  <Badge className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white">
                    AI Score: {service.aiScore}
                  </Badge>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Key Benefits */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-gray-900 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <CheckCircle className="w-3 h-3 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{service.deliveryTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{service.supportLevel}</span>
                  </div>
                </div>

                {/* Market Price Comparison */}
                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Market Price:</span>
                    <span className="font-semibold text-zion-blue">{service.marketPrice}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Our competitive pricing saves you money
                  </div>
                </div>

                {/* Contact and Actions */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{service.contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{service.contactInfo.email}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-zion-blue hover:bg-zion-blue-dark">
                      <Phone className="w-4 h-4 mr-2" />
                      Get Quote
                    </Button>
                    <Button variant="outline" className="px-3">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Detailed Information Accordion */}
                <Accordion type="single" collapsible>
                  <AccordionItem value="details">
                    <AccordionTrigger className="text-sm text-zion-blue hover:text-zion-blue-dark">
                      View Full Details
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      {/* Features */}
                      <div>
                        <h5 className="font-semibold text-sm text-gray-900 mb-2">Features</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, index) => (
                            <li key={index} className="text-sm text-gray-600 flex items-start">
                              <CheckCircle className="w-3 h-3 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Use Cases */}
                      <div>
                        <h5 className="font-semibold text-sm text-gray-900 mb-2">Use Cases</h5>
                        <div className="flex flex-wrap gap-2">
                          {service.useCases.map((useCase, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {useCase}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Target Audience */}
                      <div>
                        <h5 className="font-semibold text-sm text-gray-900 mb-2">Target Audience</h5>
                        <div className="flex flex-wrap gap-2">
                          {service.targetAudience.map((audience, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {audience}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600">Try adjusting your search criteria or contact us for custom solutions.</p>
          </div>
        )}
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you implement cutting-edge technology solutions. 
            Get in touch today for a personalized consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Mail className="w-5 h-5 mr-2" />
              Email: kleber@ziontechgroup.com
            </Button>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p className="text-lg">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p className="text-lg">Website: <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </div>

      <TrustedBySection />
    </div>
  );
}