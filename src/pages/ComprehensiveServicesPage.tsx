import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  Globe, 
  Shield, 
  Zap, 
  TrendingUp,
  Users,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { 
  COMPREHENSIVE_SERVICES, 
  SERVICE_CATEGORIES, 
  SERVICE_PRICING_TIERS, 
  SERVICE_ADDONS 
} from "@/data/comprehensiveServices";
import { SEO } from "@/components/SEO";

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
                        (priceRange === 'budget' && service.price && service.price <= 500) ||
                        (priceRange === 'mid' && service.price && service.price > 500 && service.price <= 2000) ||
                        (priceRange === 'premium' && service.price && service.price > 2000);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getCategoryIcon = (categoryName: string) => {
    const category = SERVICE_CATEGORIES.find(cat => cat.name === categoryName);
    return category?.icon || '🔧';
  };

  const getCategoryColor = (categoryName: string) => {
    const category = SERVICE_CATEGORIES.find(cat => cat.name === categoryName);
    return category?.color || 'from-gray-500 to-gray-600';
  };

  const formatPrice = (price: number | null) => {
    if (price === null) return 'Contact Us';
    return `$${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Comprehensive IT & AI Services - Zion Tech Group" 
        description="Discover our comprehensive range of micro SAAS services including AI development, cloud solutions, cybersecurity, and more. Competitive pricing and expert support."
        keywords="AI services, cloud solutions, cybersecurity, web development, mobile apps, blockchain, IoT, micro SAAS, IT services"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue to-zion-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive IT & AI Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Professional micro SAAS solutions for modern businesses. From AI chatbots to blockchain development, 
            we provide cutting-edge technology services with competitive pricing and expert support.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-8 text-zion-cyan">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border-b py-6 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search services, technologies, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="All Categories" />
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

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="All Prices" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="budget">Budget ($0 - $500)</SelectItem>
                <SelectItem value="mid">Mid-Range ($501 - $2,000)</SelectItem>
                <SelectItem value="premium">Premium ($2,001+)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
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
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                      Featured
                    </Badge>
                  )}
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br ${getCategoryColor(service.category)} flex items-center justify-center text-2xl`}>
                    {getCategoryIcon(service.category)}
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {service.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{service.rating}</span>
                      <span className="text-gray-400">({service.reviewCount})</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-zion-purple transition-colors">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-600 line-clamp-3">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{service.availability}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" />
                      <span>{service.location}</span>
                    </div>
                  </div>

                  {service.aiScore && (
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">AI Score: {service.aiScore}/100</span>
                    </div>
                  )}
                </CardContent>

                <CardFooter className="flex flex-col gap-4">
                  <div className="w-full text-center">
                    <div className="text-3xl font-bold text-zion-purple mb-2">
                      {formatPrice(service.price)}
                    </div>
                    {service.price && (
                      <div className="text-sm text-gray-500">
                        One-time setup • No hidden fees
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-2 w-full">
                    <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-dark">
                      <Mail className="h-4 w-4 mr-2" />
                      Get Quote
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Learn More
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or browse all categories</p>
            </div>
          )}
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Tiers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business size and requirements. All plans include our core services with varying levels of support and customization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(SERVICE_PRICING_TIERS).map(([key, tier]) => (
              <Card key={key} className={`text-center ${key === 'business' ? 'ring-2 ring-zion-purple scale-105' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-2xl text-zion-purple">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-left">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                    Choose {tier.name}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Service Add-ons */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Enhancements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Boost your service experience with our premium add-ons and enhancements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {SERVICE_ADDONS.map((addon) => (
              <Card key={addon.id} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{addon.name}</CardTitle>
                  <CardDescription className="text-sm">{addon.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-zion-purple mb-2">
                    {addon.currency}{addon.price}
                  </div>
                  <div className="text-sm text-gray-500">
                    {addon.monthly ? 'per month' : 'one-time'}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Add to Service
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-zion-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business solutions to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Implementation</h3>
              <p className="text-zion-slate-light">Quick setup and deployment with our proven methodologies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-light">Bank-level security and compliance for your peace of mind</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Support</h3>
              <p className="text-zion-slate-light">24/7 support from certified professionals</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Scalable Solutions</h3>
              <p className="text-zion-slate-light">Grow with confidence using our scalable architecture</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your technology goals. 
            Get in touch for a free consultation and custom quote.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-gray-100">
              <Phone className="h-5 w-5 mr-2" />
              Call +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple">
              <Mail className="h-5 w-5 mr-2" />
              Email kleber@ziontechgroup.com
            </Button>
          </div>
          
          <div className="mt-8 text-zion-cyan">
            <p>Visit us: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Website: <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}