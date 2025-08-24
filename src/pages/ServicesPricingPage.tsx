import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  COMPREHENSIVE_SERVICES, 
  SERVICE_CATEGORIES, 
  SERVICE_PRICING_TIERS,
  CONTACT_INFO 
} from "@/data/comprehensiveServices";
import { 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  Building, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  DollarSign,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesPricingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = selectedCategory === 'all' 
    ? COMPREHENSIVE_SERVICES 
    : COMPREHENSIVE_SERVICES.filter(service => service.category === selectedCategory);

  const getCategoryIcon = (categoryName: string) => {
    const category = SERVICE_CATEGORIES.find(cat => cat.name === categoryName);
    return category?.icon || "💼";
  };

  const getCategoryColor = (categoryName: string) => {
    const category = SERVICE_CATEGORIES.find(cat => cat.name === categoryName);
    if (!category) return "from-gray-500 to-gray-600";
    
    switch (category.id) {
      case "ai-services": return "from-purple-500 to-indigo-600";
      case "cloud-solutions": return "from-blue-500 to-cyan-600";
      case "cybersecurity": return "from-red-500 to-pink-600";
      case "data-analytics": return "from-green-500 to-emerald-600";
      case "web-development": return "from-orange-500 to-yellow-600";
      case "business-solutions": return "from-teal-500 to-blue-600";
      case "blockchain": return "from-indigo-500 to-purple-600";
      case "iot-solutions": return "from-gray-500 to-slate-600";
      default: return "from-gray-500 to-gray-600";
    }
  };

  const getPriceRangeLabel = (price: number | null) => {
    if (!price) return 'Contact Us';
    if (price < 5000) return 'Budget';
    if (price < 15000) return 'Professional';
    return 'Enterprise';
  };

  const getPriceRangeColor = (price: number | null) => {
    if (!price) return 'bg-gray-100 text-gray-800';
    if (price < 5000) return 'bg-green-100 text-green-800';
    if (price < 15000) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  // Market price comparisons
  const marketComparisons = {
    "AI Chatbot Development": { zion: 2500, market: 3500, savings: "29%" },
    "Predictive Analytics Platform": { zion: 8500, market: 12000, savings: "29%" },
    "Computer Vision Solutions": { zion: 12000, market: 18000, savings: "33%" },
    "Multi-Cloud Management": { zion: 4500, market: 6500, savings: "31%" },
    "DevOps Automation Suite": { zion: 6800, market: 9500, savings: "28%" },
    "Zero Trust Security": { zion: 15000, market: 22000, savings: "32%" },
    "Threat Intelligence Platform": { zion: 9500, market: 14000, savings: "32%" },
    "Real-Time Data Pipeline": { zion: 11000, market: 16000, savings: "31%" },
    "Business Intelligence Dashboard": { zion: 5800, market: 8500, savings: "32%" },
    "Progressive Web App": { zion: 4200, market: 6000, savings: "30%" },
    "Cross-Platform Mobile App": { zion: 7800, market: 11000, savings: "29%" },
    "E-commerce Platform": { zion: 12500, market: 18000, savings: "31%" },
    "Workflow Automation": { zion: 6500, market: 9000, savings: "28%" },
    "Custom CRM Development": { zion: 9200, market: 13000, savings: "29%" },
    "Smart Contract Development": { zion: 8500, market: 12000, savings: "29%" },
    "DeFi Platform Development": { zion: 25000, market: 35000, savings: "29%" },
    "NFT Marketplace": { zion: 12000, market: 18000, savings: "33%" },
    "IoT Platform Development": { zion: 16000, market: 24000, savings: "33%" },
    "Smart City Infrastructure": { zion: 35000, market: 50000, savings: "30%" },
    "Industrial Automation": { zion: 28000, market: 40000, savings: "30%" }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transparent Pricing & Market Comparison
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover our competitive pricing for 30+ micro SAAS services. Save up to 33% compared to market rates while getting enterprise-grade quality.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
              <DollarSign className="mr-2 h-5 w-5" />
              View All Pricing
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Phone className="mr-2 h-5 w-5" />
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-zion-blue-dark py-6 border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-zion-slate-light">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-zion-cyan" />
              <span>{CONTACT_INFO.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-zion-cyan" />
              <span>{CONTACT_INFO.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-zion-cyan" />
              <span>{CONTACT_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-zion-cyan" />
              <span>{CONTACT_INFO.businessHours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="py-16 bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Flexible Pricing Options
            </h2>
            <p className="text-lg text-zion-slate-dark max-w-3xl mx-auto">
              Choose the perfect plan for your business needs with our tiered pricing structure and volume discounts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {Object.entries(SERVICE_PRICING_TIERS).map(([key, tier]) => (
              <Card key={key} className={`text-center ${key === 'business' ? 'border-zion-purple border-2 scale-105' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-2xl text-zion-blue">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  {key === 'business' && (
                    <Badge className="bg-zion-purple text-white w-fit mx-auto">Most Popular</Badge>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-zion-blue">
                      {tier.discount > 0 ? `${Math.round(tier.discount * 100)}% Off` : 'Full Price'}
                    </div>
                    <div className="text-sm text-zion-slate-dark">
                      {tier.discount > 0 ? 'Available for qualifying services' : 'Enterprise pricing'}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
                    Choose {tier.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Market Comparison */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Market Price Comparison
            </h2>
            <p className="text-lg text-zion-slate-dark max-w-3xl mx-auto">
              See how our competitive pricing stacks up against industry standards. Save up to 33% on enterprise solutions.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-zion-blue text-white p-4">
                <h3 className="text-xl font-semibold text-center">Price Comparison Table</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zion-slate">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-zion-slate-dark uppercase tracking-wider">
                        Service
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-zion-slate-dark uppercase tracking-wider">
                        Zion Price
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-zion-slate-dark uppercase tracking-wider">
                        Market Price
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-zion-slate-dark uppercase tracking-wider">
                        Savings
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-zion-slate-dark uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-zion-slate">
                    {Object.entries(marketComparisons).map(([serviceName, pricing]) => (
                      <tr key={serviceName} className="hover:bg-zion-slate/5">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-zion-blue">{serviceName}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <div className="text-lg font-bold text-green-600">${pricing.zion.toLocaleString()}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <div className="text-sm text-zion-slate-dark line-through">${pricing.market.toLocaleString()}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <Badge className="bg-green-100 text-green-800">
                            Save {pricing.savings}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
                            Get Quote
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-16 bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Service Pricing by Category
            </h2>
            <p className="text-lg text-zion-slate-dark max-w-3xl mx-auto">
              Filter services by category to find the perfect solution for your business needs
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            >
              All Categories
            </Button>
            {SERVICE_CATEGORIES.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.name ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.name)}
                className={selectedCategory === category.name ? 'bg-zion-purple hover:bg-zion-purple-dark text-white' : ''}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-10 h-10 bg-gradient-to-br ${getCategoryColor(service.category)} rounded-lg flex items-center justify-center text-white text-lg`}>
                      {getCategoryIcon(service.category)}
                    </div>
                    <Badge className={getPriceRangeColor(service.price)}>
                      {getPriceRangeLabel(service.price)}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-zion-blue group-hover:text-zion-purple transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-zion-slate-dark">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-zion-blue mb-2">
                      {service.price ? `$${service.price.toLocaleString()}` : 'Contact Us'}
                    </div>
                    {service.price && marketComparisons[service.title as keyof typeof marketComparisons] && (
                      <div className="text-sm text-zion-slate-dark">
                        <span className="line-through">Market: ${marketComparisons[service.title as keyof typeof marketComparisons].market.toLocaleString()}</span>
                        <span className="text-green-600 ml-2">
                          Save {marketComparisons[service.title as keyof typeof marketComparisons].savings}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{service.rating}</span>
                      <span className="text-sm text-zion-slate-dark">({service.reviewCount} reviews)</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {service.subcategory}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-zion-slate-dark">
                      <Calendar className="h-4 w-4" />
                      <span>{service.availability}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zion-slate-dark">
                      <Users className="h-4 w-4" />
                      <span>{service.author.name}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Zion */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-lg text-zion-slate-dark max-w-3xl mx-auto">
              Experience the advantages of working with a leading technology solutions provider
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Competitive Pricing</h3>
              <p className="text-zion-slate-dark">Save up to 33% compared to market rates while maintaining enterprise quality</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-zion-blue" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-dark">Bank-level security and compliance for all our solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Rapid Deployment</h3>
              <p className="text-zion-slate-dark">Quick implementation and deployment with minimal disruption</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-zion-green" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Expert Support</h3>
              <p className="text-zion-slate-dark">24/7 technical support and dedicated account management</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-zion-blue to-zion-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Contact our team today to discuss your project requirements and get a custom quote tailored to your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Mail className="mr-2 h-5 w-5" />
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-zion-slate">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-zion-slate-dark">
                Ready to discuss your project? Contact our team of experts today.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zion-purple/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-zion-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zion-blue mb-1">Phone</h3>
                    <p className="text-zion-slate-dark">{CONTACT_INFO.phone}</p>
                    <p className="text-sm text-zion-slate-dark">{CONTACT_INFO.emergencySupport}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zion-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-zion-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zion-blue mb-1">Email</h3>
                    <p className="text-zion-slate-dark">{CONTACT_INFO.email}</p>
                    <p className="text-sm text-zion-slate-dark">Response within 2 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zion-cyan/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-zion-cyan" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zion-blue mb-1">Address</h3>
                    <p className="text-zion-slate-dark">{CONTACT_INFO.address}</p>
                    <p className="text-sm text-zion-slate-dark">Global services available</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-zion-blue mb-4">Quick Contact Form</h3>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-3 py-2 border border-zion-slate rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple"
                  />
                  <input 
                    type="text" 
                    placeholder="Company" 
                    className="w-full px-3 py-2 border border-zion-slate rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple"
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-3 py-2 border border-zion-slate rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone" 
                    className="w-full px-3 py-2 border border-zion-slate rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple"
                  />
                  <select className="w-full px-3 py-2 border border-zion-slate rounded-md focus:outline-none focus:ring-2 focus:ring-zion-purple">
                    <option value="">Service Interest</option>
                    {SERVICE_CATEGORIES.map(category => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}