import React, { useState, useEffect } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Globe,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Code,
  Database,
  Cloud,
  Bot,
  Briefcase
} from "lucide-react";
import { MICRO_SAAS_SERVICES, getServiceCategories, getServicesByCategory, MicroSaasService } from "@/data/microSaasServices";
import { motion, AnimatePresence } from "framer-motion";

export default function MicroSaasServices() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [services, setServices] = useState<MicroSaasService[]>(MICRO_SAAS_SERVICES);
  const [filteredServices, setFilteredServices] = useState<MicroSaasService[]>(MICRO_SAAS_SERVICES);

  const categories = getServiceCategories();

  useEffect(() => {
    let filtered = services;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(service =>
        service.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory
      );
    }

    // Sort services
    switch (sortBy) {
      case "price-low":
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case "ai-score":
        filtered = [...filtered].sort((a, b) => b.aiScore - a.aiScore);
        break;
      case "featured":
      default:
        filtered = [...filtered].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    setFilteredServices(filtered);
  }, [searchQuery, selectedCategory, sortBy, services]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI Services":
        return <Bot className="w-6 h-6" />;
      case "IT Services":
        return <Shield className="w-6 h-6" />;
      case "Micro SAAS":
        return <TrendingUp className="w-6 h-6" />;
      case "Development":
        return <Code className="w-6 h-6" />;
      case "Analytics":
        return <Database className="w-6 h-6" />;
      case "Security":
        return <Shield className="w-6 h-6" />;
      case "Cloud":
        return <Cloud className="w-6 h-6" />;
      case "Automation":
        return <Zap className="w-6 h-6" />;
      default:
        return <Briefcase className="w-6 h-6" />;
    }
  };

  const getPricingModelColor = (model: string) => {
    switch (model) {
      case "monthly":
        return "bg-blue-100 text-blue-800";
      case "yearly":
        return "bg-green-100 text-green-800";
      case "one-time":
        return "bg-purple-100 text-purple-800";
      case "usage-based":
        return "bg-orange-100 text-orange-800";
      case "hourly":
        return "bg-cyan-100 text-cyan-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      <SEO 
        title="Micro SAAS Services - Zion Tech Group" 
        description="Discover innovative micro SAAS solutions, AI services, and IT consulting. Transform your business with our cutting-edge technology services."
        keywords="micro SAAS, AI services, IT consulting, business solutions, technology services"
        canonical="https://ziontechgroup.com/micro-saas-services"
      />
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-zion-purple/20 rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-zion-cyan/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-zion-purple-light/10 rounded-full filter blur-3xl animate-pulse delay-2000"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Micro SAAS & AI Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto"
            >
              Transform your business with our innovative micro SAAS solutions, AI-powered services, and expert IT consulting. 
              Affordable, scalable, and designed for the modern digital economy.
            </motion.p>
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto border border-white/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-6 h-6 text-zion-cyan mb-2" />
                  <span className="text-zion-slate-light text-sm">Phone</span>
                  <span className="text-white font-semibold">+1 302 464 0950</span>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-6 h-6 text-zion-cyan mb-2" />
                  <span className="text-zion-slate-light text-sm">Email</span>
                  <span className="text-white font-semibold">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex flex-col items-center">
                  <Globe className="w-6 h-6 text-zion-cyan mb-2" />
                  <span className="text-zion-slate-light text-sm">Website</span>
                  <span className="text-white font-semibold">ziontechgroup.com</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="py-8 bg-white/5 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                  <Input
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder-zion-slate-light"
                  />
                </div>
              </div>
              
              <div className="flex gap-4">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-40 bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label} ({category.count})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40 bg-white/10 border-white/20 text-white">
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
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredServices.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-zion-purple/20 rounded-lg">
                              {getCategoryIcon(service.category)}
                            </div>
                            <Badge className={getPricingModelColor(service.pricingModel)}>
                              {service.pricingModel.replace('-', ' ')}
                            </Badge>
                          </div>
                          {service.featured && (
                            <Badge className="bg-zion-cyan text-zion-blue-dark">
                              Featured
                            </Badge>
                          )}
                        </div>
                        
                        <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                          {service.title}
                        </CardTitle>
                        
                        <CardDescription className="text-zion-slate-light">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        {/* Price and Rating */}
                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-bold text-white">
                            {service.currency}{service.price}
                            <span className="text-sm text-zion-slate-light ml-1">
                              {service.pricingModel === 'monthly' ? '/mo' : 
                               service.pricingModel === 'yearly' ? '/yr' :
                               service.pricingModel === 'hourly' ? '/hr' : ''}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-white">{service.rating}</span>
                            <span className="text-zion-slate-light">({service.reviewCount})</span>
                          </div>
                        </div>
                        
                        {/* AI Score */}
                        <div className="flex items-center justify-between">
                          <span className="text-zion-slate-light">AI Score:</span>
                          <Badge className="bg-zion-purple text-white">
                            {service.aiScore}/100
                          </Badge>
                        </div>
                        
                        {/* Market Price */}
                        <div className="bg-zion-blue-dark/50 rounded-lg p-3">
                          <p className="text-sm text-zion-slate-light mb-1">Market Price:</p>
                          <p className="text-white text-sm">{service.marketPrice}</p>
                        </div>
                        
                        {/* Features */}
                        <div>
                          <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <Badge key={idx} variant="outline" className="text-zion-cyan border-zion-cyan/30">
                                {feature}
                              </Badge>
                            ))}
                            {service.features.length > 4 && (
                              <Badge variant="outline" className="text-zion-slate-light border-zion-slate-light/30">
                                +{service.features.length - 4} more
                              </Badge>
                            )}
                          </div>
                        </div>
                        
                        {/* Contact and Actions */}
                        <div className="pt-4 border-t border-white/20">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                              <Clock className="w-4 h-4" />
                              {service.availability}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                              <MapPin className="w-4 h-4" />
                              {service.location}
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button 
                              className="flex-1 bg-zion-purple hover:bg-zion-purple-light text-white"
                              onClick={() => window.open(`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`)}
                            >
                              <Mail className="w-4 h-4 mr-2" />
                              Get Quote
                            </Button>
                            <Button 
                              variant="outline" 
                              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark"
                              onClick={() => window.open(`tel:${service.contactInfo.phone}`)}
                            >
                              <Phone className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
                <p className="text-zion-slate-light">Try adjusting your search criteria or browse all categories.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8"
            >
              Our team of experts is ready to help you implement the perfect solution for your business needs. 
              Get in touch today for a free consultation and quote.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg" 
                className="bg-white text-zion-purple hover:bg-zion-slate-light"
                onClick={() => window.open(`mailto:kleber@ziontechgroup.com?subject=Business Consultation Request`)}
              >
                <Mail className="w-4 h-4 mr-2" />
                Get Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-zion-purple"
                onClick={() => window.open(`tel:+13024640950`)}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}