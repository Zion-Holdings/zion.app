import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  Users, 
  Shield, 
  Zap, 
  Code,
  Brain,
  Server,
  BarChart3,
  Lock,
  Globe,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Award
} from "lucide-react";
import { MICRO_SAAS_SERVICES, MicroSaasService, getServiceByCategory } from "@/data/microSaasServices";
import { SEO } from "@/components/SEO";

export default function MicroSaasServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");

  const categories = [
    { value: "all", label: "All Services" },
    { value: "AI Services", label: "AI Services" },
    { value: "IT Services", label: "IT Services" },
    { value: "Business Solutions", label: "Business Solutions" },
    { value: "Development Tools", label: "Development Tools" },
    { value: "Analytics", label: "Analytics" },
    { value: "Security", label: "Security" },
    { value: "Automation", label: "Automation" }
  ];

  const priceRanges = [
    { value: "all", label: "All Prices" },
    { value: "0-200", label: "$0 - $200" },
    { value: "200-500", label: "$200 - $500" },
    { value: "500-1000", label: "$500 - $1,000" },
    { value: "1000+", label: "$1,000+" }
  ];

  const filteredServices = MICRO_SAAS_SERVICES.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number);
      if (max) {
        matchesPrice = service.price >= min && service.price <= max;
      } else {
        matchesPrice = service.price >= min;
      }
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI Services":
        return <Brain className="h-6 w-6 text-blue-500" />;
      case "IT Services":
        return <Server className="h-6 w-6 text-green-500" />;
      case "Business Solutions":
        return <Code className="h-6 w-6 text-purple-500" />;
      case "Development Tools":
        return <Code className="h-6 w-6 text-orange-500" />;
      case "Analytics":
        return <BarChart3 className="h-6 w-6 text-cyan-500" />;
      case "Security":
        return <Shield className="h-6 w-6 text-red-500" />;
      case "Automation":
        return <Zap className="h-6 w-6 text-yellow-500" />;
      default:
        return <Globe className="h-6 w-6 text-gray-500" />;
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
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getSupportLevelColor = (level: string) => {
    switch (level) {
      case "basic":
        return "bg-gray-100 text-gray-800";
      case "premium":
        return "bg-blue-100 text-blue-800";
      case "enterprise":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-purple-dark">
      <SEO 
        title="Micro SAAS Services - Zion Tech Group" 
        description="Discover our comprehensive suite of micro SAAS services including AI solutions, IT services, and business automation tools."
        keywords="micro SAAS, AI services, IT services, business automation, Zion Tech Group"
        canonical="https://ziontechgroup.com/micro-saas-services"
      />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark py-20">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-white to-zion-purple-light bg-clip-text text-transparent">
            Micro SAAS Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-cyan mb-8 max-w-4xl mx-auto">
            Transform your business with our cutting-edge micro SAAS solutions. From AI-powered tools to enterprise-grade IT services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
              <TrendingUp className="h-5 w-5 mr-2" />
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3">
              <Phone className="h-5 w-5 mr-2" />
              Contact Sales
            </Button>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-gray-300"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-white/20 border-white/30 text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="bg-white/20 border-white/30 text-white">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map((range) => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button 
              variant="outline" 
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setPriceRange("all");
              }}
            >
              <Filter className="h-4 w-4 mr-2" />
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Card key={service.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {getCategoryIcon(service.category)}
                    <Badge variant="secondary" className={getPricingModelColor(service.pricingModel)}>
                      {service.pricingModel}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-white">{service.rating}</span>
                    <span className="text-sm text-gray-300">({service.reviewCount})</span>
                  </div>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-300 line-clamp-3">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-zion-cyan">
                      {service.currency}{service.price}
                    </span>
                    <span className="text-sm text-gray-300 ml-1">
                      /{service.pricingModel === "one-time" ? "project" : service.pricingModel}
                    </span>
                  </div>
                  <Badge className="bg-zion-purple/20 text-zion-purple-light border-zion-purple/30">
                    {service.marketPrice}
                  </Badge>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle className="h-3 w-3 text-green-400" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <div className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs text-gray-300">
                        <TrendingUp className="h-3 w-3 text-blue-400" />
                        <span className="line-clamp-1">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Service Details */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="h-3 w-3 text-zion-cyan" />
                    <span>{service.implementationTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Users className="h-3 w-3 text-zion-purple" />
                    <span>{service.supportLevel}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Shield className="h-3 w-3 text-green-400" />
                    <span>{service.availability}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Award className="h-3 w-3 text-yellow-400" />
                    <span>AI Score: {service.aiScore}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {service.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-zion-cyan/30 text-zion-cyan bg-zion-cyan/10">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <div className="p-4 pt-0 space-y-3">
                {/* Contact Information */}
                <div className="bg-white/10 rounded-lg p-3 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Mail className="h-4 w-4 text-zion-cyan" />
                    <span>{service.contactInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Phone className="h-4 w-4 text-zion-cyan" />
                    <span>{service.contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <MapPin className="h-4 w-4 text-zion-cyan" />
                    <span className="line-clamp-1">{service.contactInfo.address}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                  >
                    <a href={service.website} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Learn More
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No services found matching your criteria</div>
            <Button 
              variant="outline" 
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setPriceRange("all");
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>

      {/* Contact CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to help you implement the perfect solution for your business needs.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-gray-100 px-8 py-3">
              <Phone className="h-5 w-5 mr-2" />
              Call +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple px-8 py-3">
              <Mail className="h-5 w-5 mr-2" />
              Email kleber@ziontechgroup.com
            </Button>
          </div>
          <div className="mt-8 text-center text-zion-cyan">
            <p className="text-sm">
              <MapPin className="h-4 w-4 inline mr-2" />
              364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}