import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Cloud, 
  Database, 
  Smartphone, 
  Code, 
  Globe,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Award,
  Users,
  Clock,
  DollarSign
} from "lucide-react";
import { EXPANDED_SERVICES, EXPANDED_SERVICE_CATEGORIES } from "@/data/expandedServices";

export default function PricingGuidePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = selectedCategory === 'all' 
    ? EXPANDED_SERVICES 
    : EXPANDED_SERVICES.filter(service => 
        service.category.toLowerCase().replace(' ', '-') === selectedCategory
      );

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}K`;
    }
    return `$${price}`;
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI Development': <Zap className="w-5 h-5" />,
      'Cloud Services': <Cloud className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'Data Analytics': <Database className="w-5 h-5" />,
      'Digital Transformation': <TrendingUp className="w-5 h-5" />,
      'Web Development': <Code className="w-5 h-5" />,
      'Mobile Development': <Smartphone className="w-5 h-5" />,
      'IoT Solutions': <Globe className="w-5 h-5" />,
      'Blockchain': <Code className="w-5 h-5" />,
      'Integration': <Code className="w-5 h-5" />
    };
    return iconMap[category] || <Code className="w-5 h-5" />;
  };

  const getMarketComparison = (price: number, category: string) => {
    const marketRates: { [key: string]: { min: number; max: number; avg: number } } = {
      'AI Development': { min: 8000, max: 15000, avg: 11500 },
      'Cloud Services': { min: 12000, max: 20000, avg: 16000 },
      'Cybersecurity': { min: 15000, max: 30000, avg: 22500 },
      'Data Analytics': { min: 12000, max: 25000, avg: 18500 },
      'Digital Transformation': { min: 25000, max: 50000, avg: 37500 },
      'Web Development': { min: 10000, max: 30000, avg: 20000 },
      'Mobile Development': { min: 15000, max: 35000, avg: 25000 },
      'IoT Solutions': { min: 25000, max: 45000, avg: 35000 },
      'Blockchain': { min: 15000, max: 30000, avg: 22500 },
      'Integration': { min: 12000, max: 35000, avg: 23500 }
    };

    const market = marketRates[category] || { min: 10000, max: 30000, avg: 20000 };
    const savings = market.avg - price;
    const savingsPercent = Math.round((savings / market.avg) * 100);

    if (price < market.min) {
      return { type: 'excellent', text: `Excellent Value - ${savingsPercent}% below market average` };
    } else if (price < market.avg) {
      return { type: 'good', text: `Great Value - ${savingsPercent}% below market average` };
    } else if (price <= market.max) {
      return { type: 'fair', text: `Competitive - In line with market rates` };
    } else {
      return { type: 'premium', text: `Premium Service - Above market average` };
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light">
      {/* Hero Section */}
      <div className="bg-zion-blue-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transparent Pricing Guide
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Get detailed pricing for all our enterprise technology services. Compare with market rates and discover the value Zion Tech Group delivers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
                <Mail className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-zion-purple py-6 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between text-white">
            <div className="flex items-center mb-4 md:mb-0">
              <Award className="w-6 h-6 mr-3 text-zion-cyan" />
              <span className="font-semibold">Competitive Pricing with Premium Quality</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 text-sm">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-zion-cyan" />
                <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-zion-cyan" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-zion-cyan" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-zion-blue py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className={selectedCategory === 'all' 
                ? 'bg-zion-purple text-white' 
                : 'border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
              }
            >
              All Categories
            </Button>
            {EXPANDED_SERVICE_CATEGORIES.map(category => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.value)}
                className={selectedCategory === category.value 
                  ? 'bg-zion-purple text-white' 
                  : 'border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Overview */}
      <div className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Service Pricing Overview
            </h2>
            <p className="text-zion-slate-light text-lg">
              {filteredServices.length} services available with transparent pricing and market comparisons
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const marketComparison = getMarketComparison(service.price, service.category);
              const comparisonColor = {
                'excellent': 'text-emerald-400',
                'good': 'text-green-400',
                'fair': 'text-yellow-400',
                'premium': 'text-purple-400'
              }[marketComparison.type];

              return (
                <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        {getCategoryIcon(service.category)}
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
                    <CardTitle className="text-white text-xl leading-tight">
                      {service.title}
                    </CardTitle>
                    {service.subcategory && (
                      <Badge variant="outline" className="text-zion-slate-light border-zion-slate-light/30 w-fit">
                        {service.subcategory}
                      </Badge>
                    )}
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <CardDescription className="text-zion-slate-light text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                    
                    <div className="flex flex-wrap gap-2">
                      {service.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs text-zion-cyan border-zion-cyan/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zion-slate-light">Rating:</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white">{service.rating}</span>
                          <span className="text-zion-slate-light">({service.reviewCount})</span>
                        </div>
                      </div>
                      
                      {service.aiScore && (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-zion-slate-light">AI Score:</span>
                          <div className="flex items-center gap-1">
                            <Zap className="w-4 h-4 text-zion-cyan" />
                            <span className="text-white">{service.aiScore}%</span>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zion-slate-light">Delivery:</span>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-zion-slate-light" />
                          <span className="text-white">{service.availability}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-zion-blue-light space-y-3">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">
                          {formatPrice(service.price)}
                        </div>
                        <div className={`text-sm ${comparisonColor} font-medium`}>
                          {marketComparison.text}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Link to="/contact" className="flex-1">
                          <Button size="sm" variant="outline" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                            <Mail className="w-4 h-4 mr-1" />
                            Contact
                          </Button>
                        </Link>
                        <Link to="/request-quote" className="flex-1">
                          <Button size="sm" className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                            <Phone className="w-4 h-4 mr-1" />
                            Quote
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="bg-zion-blue-dark py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Our Pricing is Unbeatable
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We deliver enterprise-grade solutions at competitive prices without compromising on quality or support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Competitive Pricing</h3>
              <p className="text-zion-slate-light">Up to 40% below market average while maintaining premium quality standards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">ROI Focused</h3>
              <p className="text-zion-slate-light">Proven track record of 300%+ return on investment for our clients</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-zion-slate-light">Most projects completed 20-30% faster than industry average</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-zion-slate-light">Certified professionals with 10+ years of enterprise experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-zion-slate-light">ISO 27001 certified with 99.9% uptime guarantee and support</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">Global Support</h3>
              <p className="text-zion-slate-light">24/7 support across all time zones with local expertise</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom quote tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light px-8 py-3">
                <Mail className="w-5 h-5 mr-2" />
                Schedule Free Consultation
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Button>
            </Link>
          </div>
          <div className="mt-8 text-white/80">
            <p>Call us directly: <a href="tel:+13024640950" className="text-white hover:text-zion-cyan transition-colors">+1 302 464 0950</a></p>
            <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-zion-cyan transition-colors">kleber@ziontechgroup.com</a></p>
            <p>Visit: <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-zion-cyan transition-colors">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}