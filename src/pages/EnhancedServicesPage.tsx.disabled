<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { ENHANCED_SERVICES, ENHANCED_SERVICE_CATEGORIES, PRICING_TIERS } from '@/data/enhancedServices';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search, Filter, Star, Clock, Globe, Shield, Zap, Brain, Database, Cloud, Lock, Leaf, DollarSign, Eye, Users, CheckCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';

const EnhancedServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [availability, setAvailability] = useState<string>('all');

  const filteredServices = ENHANCED_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesPrice = priceRange === 'all' || 
                        (priceRange === 'low' && service.price < 10000) ||
                        (priceRange === 'medium' && service.price >= 10000 && service.price < 25000) ||
                        (priceRange === 'high' && service.price >= 25000);
    const matchesAvailability = availability === 'all' || service.availability === availability;

    return matchesCategory && matchesSearch && matchesPrice && matchesAvailability;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning': return <Brain className="w-5 h-5" />;
      case 'Cybersecurity': return <Shield className="w-5 h-5" />;
      case 'Cloud & DevOps': return <Cloud className="w-5 h-5" />;
      case 'Data & Analytics': return <Database className="w-5 h-5" />;
      case 'Blockchain & Web3': return <Zap className="w-5 h-5" />;
      case 'IoT & Edge Computing': return <Eye className="w-5 h-5" />;
      case 'Quantum Computing': return <Brain className="w-5 h-5" />;
      case 'AR/VR & Metaverse': return <Eye className="w-5 h-5" />;
      case 'Green Tech & Sustainability': return <Leaf className="w-5 h-5" />;
      case 'FinTech & Digital Banking': return <DollarSign className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  const getAvailabilityIcon = (availability: string) => {
    switch (availability) {
      case 'immediate': return <Clock className="w-4 h-4 text-green-500" />;
      case 'within-week': return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'within-month': return <Clock className="w-4 h-4 text-orange-500" />;
      default: return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getAvailabilityText = (availability: string) => {
    switch (availability) {
      case 'immediate': return 'Available Now';
      case 'within-week': return 'Within 1 Week';
      case 'within-month': return 'Within 1 Month';
      default: return 'Contact for Availability';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple-dark">
      <SEO 
        title="Enhanced Tech Services - Zion Tech Group" 
        description="Discover cutting-edge AI, cybersecurity, cloud, blockchain, and emerging technology services. Expert solutions for modern enterprises."
        keywords="AI services, cybersecurity, cloud solutions, blockchain, quantum computing, metaverse, sustainability, fintech"
        canonical="https://ziontechgroup.com/enhanced-services"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/90 to-zion-purple/90"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Next-Generation
            <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Tech Services
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge AI, cybersecurity, blockchain, quantum computing, and emerging technology solutions. 
            Expert services delivered globally with proven results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Banner */}
      <div className="bg-zion-blue-light border-b border-zion-blue">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
              <h3 className="text-white text-lg font-semibold mb-2">Ready to Transform Your Business?</h3>
              <p className="text-zion-slate-light">Speak with our technology experts today</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Globe className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2 text-zion-cyan">
                <Users className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
=======
import React, { useState } from 'react';
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { ProductListing } from "@/types/listings";
import { TrustedBySection } from "@/components/TrustedBySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Globe, Phone, Mail, MapPin, Clock, Star, Shield, Zap, TrendingUp, Users, Award } from "lucide-react";
import { ENHANCED_SERVICES, SERVICE_CATEGORIES, PRICING_TIERS, CONTACT_INFO } from "@/data/enhancedServices";
import { SEO } from "@/components/SEO";

export default function EnhancedServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = ENHANCED_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === "all" || 
      SERVICE_CATEGORIES.some(cat => cat.id === selectedCategory && cat.services.includes(service));
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredServices = ENHANCED_SERVICES.filter(service => service.featured);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Enterprise IT & AI Services - Zion Tech Group" 
        description="Comprehensive IT services, AI solutions, cybersecurity, cloud infrastructure, and digital transformation consulting. Expert technology solutions for modern businesses."
        keywords="IT services, AI solutions, cybersecurity, cloud computing, digital transformation, enterprise technology"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Enterprise IT & AI Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge technology solutions. From AI automation to cybersecurity, 
            we deliver enterprise-grade services that drive innovation and growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-zion-blue-light/20 px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-zion-blue-light/20 px-4 py-2 rounded-full">
              <Users className="w-5 h-5 text-zion-cyan" />
              <span>500+ Clients</span>
            </div>
            <div className="flex items-center gap-2 bg-zion-blue-light/20 px-4 py-2 rounded-full">
              <Award className="w-5 h-5 text-green-400" />
              <span>ISO 27001 Certified</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-bold">
              <Link to="/request-quote">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-zion-slate-dark py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Phone className="w-6 h-6 text-zion-cyan" />
              <div>
                <p className="text-sm text-zion-slate-light">Call Us</p>
                <a href={`tel:${CONTACT_INFO.mobile}`} className="text-white font-semibold hover:text-zion-cyan">
                  {CONTACT_INFO.mobile}
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="w-6 h-6 text-zion-cyan" />
              <div>
                <p className="text-sm text-zion-slate-light">Email Us</p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-white font-semibold hover:text-zion-cyan">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6 text-zion-cyan" />
              <div>
                <p className="text-sm text-zion-slate-light">Visit Us</p>
                <p className="text-white font-semibold">{CONTACT_INFO.address}</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-6 h-6 text-zion-cyan" />
              <div>
                <p className="text-sm text-zion-slate-light">Business Hours</p>
                <p className="text-white font-semibold">9:00 AM - 6:00 PM EST</p>
>>>>>>> cursor/expand-services-and-deploy-updates-7114
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>

      {/* Filters Section */}
      <div className="bg-zion-blue-dark border-b border-zion-blue-light">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {ENHANCED_SERVICE_CATEGORIES.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light"
              />
            </div>

            <div>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="low">Under $10K</SelectItem>
                  <SelectItem value="medium">$10K - $25K</SelectItem>
                  <SelectItem value="high">Over $25K</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Select value={availability} onValueChange={setAvailability}>
                <SelectTrigger className="bg-zion-blue border-zion-blue-light text-white">
                  <SelectValue placeholder="Availability" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Availability</SelectItem>
                  <SelectItem value="immediate">Available Now</SelectItem>
                  <SelectItem value="within-week">Within 1 Week</SelectItem>
                  <SelectItem value="within-month">Within 1 Month</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="text-zion-cyan text-sm">
              {filteredServices.length} services found
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2 text-zion-cyan">
                    {getCategoryIcon(service.category)}
                    <span className="text-sm font-medium">{service.category}</span>
                  </div>
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                    {service.pricingModel}
                  </Badge>
                </div>
                
                <CardTitle className="text-xl text-white mb-2 line-clamp-2">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-zion-slate-light line-clamp-3">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Price and Rating */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-zion-cyan">
                    ${service.price.toLocaleString()}
                    <span className="text-sm text-zion-slate-light font-normal">
                      /{service.pricingModel === 'subscription' ? 'month' : 'project'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-white font-medium">{service.rating}</span>
                    <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
                  </div>
                </div>

                {/* Market Price Comparison */}
                <div className="bg-zion-blue/30 rounded-lg p-3">
                  <p className="text-sm text-zion-slate-light mb-1">Market Price:</p>
                  <p className="text-zion-cyan font-medium">{service.marketPrice}</p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Key Features
                  </h4>
                  <div className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <div className="w-1.5 h-1.5 bg-zion-cyan rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-zion-cyan text-sm font-medium">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-white font-semibold mb-2">Benefits</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 4).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-zion-purple/30 text-zion-cyan">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Availability and Location */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    {getAvailabilityIcon(service.availability)}
                    {getAvailabilityText(service.availability)}
                  </div>
                  <div className="flex items-center gap-1 text-zion-slate-light">
                    <Globe className="w-4 h-4" />
                    {service.location}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-zion-blue/20 rounded-lg p-3 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-zion-cyan" />
                    <span className="text-white">{service.author.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Globe className="w-4 h-4 text-zion-cyan" />
                    <a href={service.contactInfo.website} className="text-zion-cyan hover:underline">
                      {service.contactInfo.website.replace('https://', '')}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-zion-cyan" />
                    <span className="text-zion-cyan">{service.contactInfo.email}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button className="flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                    Get Quote
                  </Button>
                  <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Pricing Tiers Section */}
      <div className="bg-zion-blue border-t border-zion-blue-light">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Transparent Pricing Tiers</h2>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Choose the right service level for your business needs. All our services come with 
              comprehensive support and proven results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(PRICING_TIERS).map(([key, tier]) => (
              <Card key={key} className={`bg-zion-blue-dark border-zion-blue-light ${
                key === 'professional' ? 'border-zion-purple/50 scale-105' : ''
              }`}>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-zion-cyan">{tier.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-zion-slate-light max-w-2xl mx-auto mb-8">
            Our team of technology experts is ready to help you implement cutting-edge solutions 
            that drive real business results. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Download Brochure
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-white mb-2">+1 302 464 0950</div>
              <div className="text-zion-slate-light">Phone Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">kleber@ziontechgroup.com</div>
              <div className="text-zion-slate-light">Email Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">Global</div>
              <div className="text-zion-slate-light">Service Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedServicesPage;
=======
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Our Service Categories
            </h2>
            <p className="text-zion-slate-dark text-lg max-w-3xl mx-auto">
              Comprehensive technology solutions across all major domains. Choose from our specialized service categories 
              designed to meet your specific business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICE_CATEGORIES.map((category) => (
              <div
                key={category.id}
                className={`p-6 rounded-lg border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedCategory === category.id
                    ? "border-zion-cyan bg-zion-cyan/10"
                    : "border-zion-slate-light bg-white hover:border-zion-cyan/50"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-zion-blue mb-2">{category.name}</h3>
                <p className="text-zion-slate-dark text-sm">{category.description}</p>
                <div className="mt-3 text-zion-cyan text-sm font-semibold">
                  {category.services.length} services available
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for services, technologies, or solutions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-zion-slate-light rounded-lg focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-dark" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-zion-slate-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Featured Services
            </h2>
            <p className="text-zion-slate-dark text-lg max-w-3xl mx-auto">
              Our most popular and highly-rated services that deliver exceptional value to businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.slice(0, 6).map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.images[0]} 
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-zion-cyan/20 text-zion-cyan text-xs font-semibold rounded-full">
                      {service.category}
                    </span>
                    {service.featured && (
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-zion-blue mb-3">{service.title}</h3>
                  <p className="text-zion-slate-dark text-sm mb-4 line-clamp-3">{service.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">{service.rating}</span>
                      <span className="text-sm text-zion-slate-dark">({service.reviewCount})</span>
                    </div>
                    <div className="text-2xl font-bold text-zion-cyan">
                      {service.currency}{service.price?.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-zion-slate-light text-zion-slate-dark text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-bold">
                    <Link to={`/services/${service.id}`}>Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              All Services
            </h2>
            <p className="text-zion-slate-dark text-lg max-w-3xl mx-auto">
              Browse our complete catalog of {ENHANCED_SERVICES.length} professional services and solutions.
            </p>
          </div>

          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <div key={service.id} className="bg-white border border-zion-slate-light rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-zion-blue mb-2">{service.title}</h3>
                      <p className="text-zion-slate-dark text-sm line-clamp-3">{service.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">{service.rating}</span>
                      <span className="text-sm text-zion-slate-dark">({service.reviewCount})</span>
                    </div>
                    <div className="text-xl font-bold text-zion-cyan">
                      {service.currency}{service.price?.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-zion-slate-light text-zion-slate-dark text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-zion-slate-dark mb-4">
                    <span>📍 {service.location}</span>
                    <span>⏱️ {service.availability}</span>
                  </div>
                  <Button asChild className="w-full bg-zion-blue hover:bg-zion-blue-dark text-white">
                    <Link to={`/services/${service.id}`}>View Details</Link>
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-zion-slate-dark text-lg">No services found matching your criteria.</p>
              <Button 
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchTerm("");
                }}
                className="mt-4 bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Flexible Pricing Options
            </h2>
            <p className="text-zion-slate-dark text-lg max-w-3xl mx-auto">
              Choose the pricing tier that best fits your business needs and budget requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {Object.entries(PRICING_TIERS).map(([key, tier]) => (
              <div key={key} className={`bg-white rounded-lg p-8 text-center ${
                key === 'professional' ? 'ring-2 ring-zion-cyan scale-105' : ''
              }`}>
                <h3 className="text-2xl font-bold text-zion-blue mb-2">{tier.name}</h3>
                <p className="text-zion-slate-dark mb-6">{tier.description}</p>
                <div className="text-3xl font-bold text-zion-cyan mb-6">{tier.priceRange}</div>
                <ul className="text-left space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                      <span className="text-zion-slate-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  asChild
                  className={`w-full ${
                    key === 'professional' 
                      ? 'bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue' 
                      : 'bg-zion-blue hover:bg-zion-blue-dark text-white'
                  }`}
                >
                  <Link to="/request-quote">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-zion-slate-dark text-lg max-w-3xl mx-auto">
              We deliver exceptional value through our expertise, innovation, and commitment to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-bold text-zion-blue mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-dark">ISO 27001 certified with enterprise-grade security protocols</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-bold text-zion-blue mb-2">Rapid Deployment</h3>
              <p className="text-zion-slate-dark">Quick implementation with proven methodologies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-bold text-zion-blue mb-2">Proven Results</h3>
              <p className="text-zion-slate-dark">Track record of successful transformations and ROI</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-bold text-zion-blue mb-2">Expert Team</h3>
              <p className="text-zion-slate-dark">Certified professionals with deep industry expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-zion-blue to-zion-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Let's discuss how our technology solutions can drive innovation, efficiency, and growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-bold">
              <Link to="/request-quote">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <a href={`tel:${CONTACT_INFO.mobile}`}>Call Now: {CONTACT_INFO.mobile}</a>
            </Button>
          </div>
        </div>
      </section>

      <TrustedBySection />
    </div>
  );
}
>>>>>>> cursor/expand-services-and-deploy-updates-7114
