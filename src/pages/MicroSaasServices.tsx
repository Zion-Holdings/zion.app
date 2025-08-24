<<<<<<< HEAD
import React from 'react';
import { MICRO_SAAS_SERVICES, MICRO_SAAS_CATEGORIES, CONTACT_INFO } from '../data/microSaasServices';

export default function MicroSaasServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Micro SAAS Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Transform your business with our comprehensive suite of micro SAAS solutions, 
            designed to streamline operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/pricing"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Pricing
            </a>
            <a
              href={`tel:${CONTACT_INFO.mobile}`}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MICRO_SAAS_SERVICES.slice(0, 6).map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  <a
                    href={service.link}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p>{CONTACT_INFO.mobile}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p>{CONTACT_INFO.email}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p>{CONTACT_INFO.address}</p>
            </div>
          </div>
          <a
            href={`tel:${CONTACT_INFO.mobile}`}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
=======
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { MICRO_SAAS_SERVICES, MicroSaasService } from '@/data/microSaasServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  Star, 
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Brain,
  Code,
  Database,
  BarChart3,
  Link as LinkIcon,
  Users
} from 'lucide-react';
import Workflow from "lucide-react/dist/esm/icons/workflow";

export default function MicroSaasServices() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');

  const categories = ['all', 'AI', 'IT', 'Development', 'Analytics', 'Security', 'Automation', 'Integration', 'Consulting'];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-200', label: '$0 - $200' },
    { value: '200-500', label: '$200 - $500' },
    { value: '500-1000', label: '$500 - $1000' },
    { value: '1000+', label: '$1000+' }
  ];

  const filteredServices = MICRO_SAAS_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    
    const matchesPrice = selectedPriceRange === 'all' || 
      (selectedPriceRange === '0-200' && service.pricing.starter <= 200) ||
      (selectedPriceRange === '200-500' && service.pricing.starter > 200 && service.pricing.starter <= 500) ||
      (selectedPriceRange === '500-1000' && service.pricing.starter > 500 && service.pricing.starter <= 1000) ||
      (selectedPriceRange === '1000+' && service.pricing.starter > 1000);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI': return <Brain className="w-6 h-6" />;
      case 'IT': return <Database className="w-6 h-6" />;
      case 'Development': return <Code className="w-6 h-6" />;
      case 'Analytics': return <BarChart3 className="w-6 h-6" />;
      case 'Security': return <Shield className="w-6 h-6" />;
      case 'Automation': return <Workflow className="w-6 h-6" />;
      case 'Integration': return <LinkIcon className="w-6 h-6" />;
      case 'Consulting': return <Users className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI': return 'from-purple-500 to-pink-500';
      case 'IT': return 'from-blue-500 to-cyan-500';
      case 'Development': return 'from-green-500 to-emerald-500';
      case 'Analytics': return 'from-orange-500 to-red-500';
      case 'Security': return 'from-red-500 to-pink-500';
      case 'Automation': return 'from-indigo-500 to-purple-500';
      case 'Integration': return 'from-teal-500 to-blue-500';
      case 'Consulting': return 'from-yellow-500 to-orange-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <>
      <SEO 
        title="Micro SAAS Services - Zion Tech Group" 
        description="Discover our comprehensive suite of micro SAAS services including AI solutions, IT services, development platforms, and more."
        keywords="micro SAAS, AI services, IT solutions, development platforms, business automation"
      />
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-72 h-72 bg-zion-purple/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute top-20 right-0 w-96 h-96 bg-zion-cyan/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-zion-purple-light/20 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
          </div>
          
          <div className="relative container mx-auto px-4 text-center">
            <div className="mb-8">
              <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 mb-4 px-4 py-2 text-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Premium Micro SAAS Solutions
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                Micro SAAS Services
              </span>
              <br />
              <span className="text-white">That Scale Your Business</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover our curated collection of intelligent, innovative, and diversified micro SAAS solutions. 
              From AI-powered platforms to enterprise-grade IT services, we deliver cutting-edge technology 
              that drives real business value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3 text-lg"
              >
                <Zap className="w-5 h-5 mr-2" />
                Explore Services
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales
              </Button>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-zion-blue-dark/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <Input
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-zion-blue-dark border-zion-blue-light text-white placeholder-zion-slate-light focus:border-zion-cyan"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 bg-zion-blue-dark border-zion-blue-light text-white">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                  {categories.map(category => (
                    <SelectItem key={category} value={category} className="text-white hover:bg-zion-blue-light">
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                <SelectTrigger className="w-48 bg-zion-blue-dark border-zion-blue-light text-white">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent className="bg-zion-blue-dark border-zion-blue-light">
                  {priceRanges.map(range => (
                    <SelectItem key={range.value} value={range.value} className="text-white hover:bg-zion-blue-light">
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                {filteredServices.length} Services Found
              </h2>
              <p className="text-zion-slate-light text-lg">
                Filtered by your criteria • Click any service to learn more
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <Card 
                  key={service.id} 
                  className="group bg-zion-blue-dark/80 border-zion-blue-light hover:border-zion-purple/50 hover:shadow-2xl hover:shadow-zion-purple/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  <CardHeader className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-zion-blue-light/10 to-transparent"></div>
                    <div className="relative flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${getCategoryColor(service.category)}`}>
                        {getCategoryIcon(service.category)}
                      </div>
                      <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                        {service.category}
                      </Badge>
                    </div>
                    
                    <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </CardTitle>
                    
                    <CardDescription className="text-zion-slate-light leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-semibold text-zion-cyan mb-3 flex items-center">
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-zion-slate-light">
                            <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                        {service.features.length > 4 && (
                          <div className="text-xs text-zion-slate-light mt-2">
                            +{service.features.length - 4} more features
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Pricing */}
                    <div className="bg-zion-blue-light/20 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-zion-cyan mb-3">Pricing Plans</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-zion-slate-light">Starter:</span>
                          <span className="text-white font-semibold">
                            {service.pricing.currency}{service.pricing.starter}/{service.pricing.billing}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-zion-slate-light">Professional:</span>
                          <span className="text-white font-semibold">
                            {service.pricing.currency}{service.pricing.professional}/{service.pricing.billing}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-zion-slate-light">Enterprise:</span>
                          <span className="text-white font-semibold">
                            {service.pricing.currency}{service.pricing.enterprise}/{service.pricing.billing}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-zion-cyan">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        {service.rating} ({service.reviewCount})
                      </div>
                      {service.aiScore && (
                        <div className="flex items-center text-zion-purple-light">
                          <Brain className="w-4 h-4 mr-1" />
                          AI Score: {service.aiScore}%
                        </div>
                      )}
                    </div>
                    
                    {/* Contact Info */}
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center text-zion-slate-light">
                        <Phone className="w-4 h-4 mr-2 text-zion-cyan" />
                        {service.contactInfo.phone}
                      </div>
                      <div className="flex items-center text-zion-slate-light">
                        <Mail className="w-4 h-4 mr-2 text-zion-cyan" />
                        {service.contactInfo.email}
                      </div>
                      <div className="flex items-center text-zion-slate-light">
                        <Globe className="w-4 h-4 mr-2 text-zion-cyan" />
                        {service.contactInfo.website}
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <Button 
                      className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white group-hover:shadow-lg group-hover:shadow-zion-purple/25 transition-all duration-300"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-zion-slate-light text-lg mb-4">
                  No services found matching your criteria
                </div>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedPriceRange('all');
                  }}
                  variant="outline"
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-zion-slate-light text-lg mb-8 leading-relaxed">
                Our team of experts is ready to help you implement the perfect solution for your business needs. 
                Get in touch today for a personalized consultation and demo.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Call Us</h3>
                  <p className="text-zion-slate-light">+1 302 464 0950</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email Us</h3>
                  <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                  <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule a Call
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3 text-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-da9e
  );
}