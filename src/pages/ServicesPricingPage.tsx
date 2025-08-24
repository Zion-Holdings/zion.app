import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Check, 
  X, 
  Star, 
  Zap, 
  Shield, 
  Globe, 
  TrendingUp, 
  Users, 
  Building, 
  Smartphone, 
  ShoppingCart,
  Heart,
  GraduationCap,
  Truck,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  DollarSign,
  Clock
} from "lucide-react";
import { EXPANDED_SERVICES, SERVICE_PRICING_TIERS, SERVICE_BENEFITS } from "@/data/expandedServices";

// Group services by category for better organization
const servicesByCategory = EXPANDED_SERVICES.reduce((acc, service) => {
  if (!acc[service.category]) {
    acc[service.category] = [];
  }
  acc[service.category].push(service);
  return acc;
}, {} as { [key: string]: typeof EXPANDED_SERVICES });

// Pricing comparison features
const pricingFeatures = [
  "AI-Powered Solutions",
  "24/7 Support",
  "Global Coverage",
  "Custom Integration",
  "Training & Documentation",
  "Regular Updates",
  "Security Compliance",
  "Scalable Architecture"
];

export default function ServicesPricingPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = Object.keys(servicesByCategory);
  const filteredServices = selectedCategory === 'all' 
    ? EXPANDED_SERVICES 
    : servicesByCategory[selectedCategory] || [];

  const getCategoryIcon = (category: string) => {
    const categoryIcons: { [key: string]: React.ReactNode } = {
      'AI Automation': <Zap className="h-5 w-5" />,
      'Customer Intelligence': <Users className="h-5 w-5" />,
      'Content Marketing': <TrendingUp className="h-5 w-5" />,
      'Cybersecurity': <Shield className="h-5 w-5" />,
      'Threat Intelligence': <Shield className="h-5 w-5" />,
      'Cloud Management': <Globe className="h-5 w-5" />,
      'DevOps': <Zap className="h-5 w-5" />,
      'Data Analytics': <TrendingUp className="h-5 w-5" />,
      'IoT & Predictive Analytics': <Zap className="h-5 w-5" />,
      'Business Intelligence': <TrendingUp className="h-5 w-5" />,
      'Digital Transformation': <Building className="h-5 w-5" />,
      'Edge Computing': <Globe className="h-5 w-5" />,
      'API Management': <Zap className="h-5 w-5" />,
      'Blockchain & Web3': <Zap className="h-5 w-5" />,
      'Mobile Development': <Smartphone className="h-5 w-5" />,
      'E-commerce': <ShoppingCart className="h-5 w-5" />,
      'Healthcare Technology': <Heart className="h-5 w-5" />,
      'FinTech': <TrendingUp className="h-5 w-5" />,
      'Education Technology': <GraduationCap className="h-5 w-5" />,
      'Supply Chain': <Truck className="h-5 w-5" />
    };
    return categoryIcons[category] || <Zap className="h-5 w-5" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Services Pricing & Comparison
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-zion-cyan-light max-w-4xl mx-auto">
            Transparent pricing for all our IT & AI services. Choose the perfect solution for your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-zion-cyan">$1,999</div>
              <div className="text-sm">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-zion-purple">4 Tiers</div>
              <div className="text-sm">Pricing Options</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-zion-cyan">25+</div>
              <div className="text-sm">Services Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-zion-purple/20 border-b border-zion-purple/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white">
            <div className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-zion-cyan" />
              <span className="font-medium">+1 302 464 0950</span>
              <Mail className="h-5 w-5 text-zion-cyan ml-4" />
              <span className="font-medium">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-zion-cyan" />
              <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Pricing Tiers Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Pricing Tiers Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(SERVICE_PRICING_TIERS).map(([key, tier]) => (
              <Card key={key} className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-zion-cyan text-xl">{key.charAt(0).toUpperCase() + key.slice(1)}</CardTitle>
                  <CardDescription className="text-zion-cyan-light text-lg font-semibold">{tier.range}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-center mb-6">{tier.description}</p>
                  <div className="space-y-3">
                    {pricingFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-400" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full mt-6 bg-zion-purple hover:bg-zion-purple-dark text-white"
                    onClick={() => window.open('mailto:kleber@ziontechgroup.com?subject=Pricing Inquiry', '_blank')}
                  >
                    Get Custom Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Categories Tabs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Services by Category</h2>
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6 bg-white/10 border-white/20">
              <TabsTrigger value="all" className="text-white data-[state=active]:bg-zion-purple">
                All Services
              </TabsTrigger>
              {categories.slice(0, 5).map(category => (
                <TabsTrigger key={category} value={category} className="text-white data-[state=active]:bg-zion-purple">
                  {category.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value={selectedCategory} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                  <Card key={service.id} className="bg-white/5 backdrop-blur-sm border-white/20 text-white hover:bg-white/10 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center">
                            {getCategoryIcon(service.category)}
                          </div>
                          <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                            {service.price && service.price <= 4999 ? 'Starter' : 
                             service.price && service.price <= 9999 ? 'Professional' : 
                             service.price && service.price <= 25000 ? 'Enterprise' : 'Custom'}
                          </Badge>
                        </div>
                      </div>
                      <CardTitle className="text-lg text-white line-clamp-2">{service.title}</CardTitle>
                      <CardDescription className="text-zion-cyan-light line-clamp-3">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        {/* Pricing and Details */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-zion-cyan-light">Price:</span>
                            <span className="font-semibold text-zion-cyan text-lg">
                              ${service.price?.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-zion-cyan-light">Availability:</span>
                            <span className="flex items-center gap-1 text-sm">
                              <Clock className="h-3 w-3" />
                              {service.availability}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-zion-cyan-light">Location:</span>
                            <span className="flex items-center gap-1 text-sm">
                              <Globe className="h-3 w-3" />
                              {service.location}
                            </span>
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {service.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="secondary" className="bg-white/10 text-zion-cyan-light border-white/20 text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Rating and AI Score */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm">{service.rating}</span>
                            <span className="text-xs text-zion-cyan-light">({service.reviewCount} reviews)</span>
                          </div>
                          {service.aiScore && (
                            <Badge className="bg-zion-purple/20 text-zion-purple border-zion-purple/30">
                              AI Score: {service.aiScore}
                            </Badge>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-2">
                          <Button 
                            className="flex-1 bg-zion-purple hover:bg-zion-purple-dark text-white"
                            onClick={() => window.open(`mailto:kleber@ziontechgroup.com?subject=Quote for ${service.title}`, '_blank')}
                          >
                            <Mail className="h-4 w-4 mr-2" />
                            Get Quote
                          </Button>
                          <Button 
                            variant="outline" 
                            className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                            onClick={() => window.open('https://ziontechgroup.com', '_blank')}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Service Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose ZionTech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(SERVICE_BENEFITS).map(([key, benefit]) => (
              <Card key={key} className="bg-white/5 backdrop-blur-sm border-white/20 text-white text-center hover:bg-white/10 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-zion-cyan" />
                  </div>
                  <p className="text-zion-cyan-light">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white/5 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-zion-cyan">What's included in the pricing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-cyan-light">
                  All our services include implementation, training, documentation, and 24/7 support. 
                  Custom integrations and additional features can be added based on your requirements.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-zion-cyan">Do you offer custom pricing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-cyan-light">
                  Yes, we provide custom pricing for enterprise solutions and specialized requirements. 
                  Contact us for a personalized quote tailored to your business needs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-zion-cyan">What payment terms do you offer?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-cyan-light">
                  We offer flexible payment terms including upfront payment, milestone-based payments, 
                  and monthly/annual subscription options for ongoing services.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <CardTitle className="text-zion-cyan">Is there a money-back guarantee?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-cyan-light">
                  We offer a satisfaction guarantee. If you're not completely satisfied with our services 
                  within the first 30 days, we'll work to make it right or provide a refund.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="bg-gradient-to-r from-zion-purple to-zion-blue rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-6 text-zion-cyan-light">
            Let's discuss your project requirements and find the perfect solution for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-zion-purple hover:bg-zion-cyan-light"
              onClick={() => window.open(`mailto:kleber@ziontechgroup.com?subject=Service Consultation`, '_blank')}
            >
              <Mail className="h-5 w-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => window.open('tel:+13024640950', '_blank')}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}