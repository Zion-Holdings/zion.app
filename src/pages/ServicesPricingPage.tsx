import React, { useState } from 'react';
import { ENHANCED_SERVICES, SERVICE_CATEGORIES } from '@/data/enhancedServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  CheckCircle, XCircle, Star, Zap, Clock, Users, Shield, TrendingUp,
  Phone, Mail, Globe, Award, DollarSign, Calendar, ArrowRight,
  Lightbulb, Brain, Cloud, BarChart3, Shield as ShieldIcon, RefreshCw, Link
} from 'lucide-react';
import Target from 'lucide-react/dist/esm/icons/target';
import Rocket from 'lucide-react/dist/esm/icons/rocket';
import Wifi from 'lucide-react/dist/esm/icons/wifi';
import { SEO } from '@/components/SEO';

const categoryIcons = {
  "AI & Machine Learning": Brain,
  "Cybersecurity": ShieldIcon,
  "Cloud & DevOps": Cloud,
  "Data & Analytics": BarChart3,
  "Digital Transformation": RefreshCw,
  "IoT & Smart Solutions": Wifi,
  "Blockchain & Web3": Link
};

const pricingTiers = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups",
    price: "From $199",
    features: [
      "Basic implementation",
      "Email support",
      "Standard features",
      "Community access"
    ]
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses",
    price: "From $599",
    features: [
      "Full implementation",
      "Priority support",
      "Advanced features",
      "Custom integrations",
      "Training sessions"
    ]
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "Custom pricing",
    features: [
      "Custom development",
      "24/7 dedicated support",
      "White-label solutions",
      "On-site training",
      "SLA guarantees",
      "Custom compliance"
    ]
  }
];

export default function ServicesPricingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getServicesByCategory = (category: string) => {
    if (category === 'all') return ENHANCED_SERVICES;
    return ENHANCED_SERVICES.filter(service => service.category === category);
  };

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(1)}k`;
    }
    return `$${price}`;
  };

  const getPricingModelColor = (model: string) => {
    switch (model) {
      case 'subscription': return 'bg-blue-100 text-blue-800';
      case 'project-based': return 'bg-purple-100 text-purple-800';
      case 'one-time': return 'bg-green-100 text-green-800';
      case 'usage-based': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="IT & AI Services Pricing - Zion Tech Group"
        description="Transparent pricing for all our AI, cybersecurity, cloud, and digital transformation services. Find the perfect plan for your business needs."
        keywords="IT services pricing, AI services cost, cybersecurity pricing, cloud solutions pricing, digital transformation cost"
        canonical="https://ziontechgroup.com/services-pricing"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transparent Service Pricing
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Competitive pricing for enterprise-grade technology solutions. No hidden fees, no surprises.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
              <Phone className="mr-2 h-5 w-5" />
              Get Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Mail className="mr-2 h-5 w-5" />
              Contact Sales
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Banner */}
      <div className="bg-zion-blue-dark py-4 px-4 md:px-8 border-b border-zion-blue-light">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-white">
          <div className="flex items-center gap-4">
            <Globe className="h-5 w-5 text-zion-cyan" />
            <span className="font-medium">Global Pricing • Volume Discounts • Custom Solutions</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Tiers Overview */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Choose Your Service Tier
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card key={tier.name} className={`relative ${index === 1 ? 'border-2 border-zion-blue shadow-xl scale-105' : ''}`}>
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-zion-blue text-white px-4 py-2">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                  <CardDescription className="text-gray-600">{tier.description}</CardDescription>
                  <div className="text-3xl font-bold text-zion-blue mt-4">{tier.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={index === 1 ? "default" : "outline"}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Services by Category Pricing */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Detailed Service Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore pricing for each service category with detailed feature breakdowns
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mb-8">
              <TabsTrigger value="all" className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                All Services
              </TabsTrigger>
              {SERVICE_CATEGORIES.map((category) => {
                const Icon = categoryIcons[category as keyof typeof categoryIcons];
                return (
                  <TabsTrigger
                    key={category}
                    value={category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}
                    className="flex items-center gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {category.split(' ')[0]}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {ENHANCED_SERVICES.map((service) => (
                  <Card key={service.id} className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {service.category}
                        </Badge>
                        <Badge className={getPricingModelColor(service.pricingModel)}>
                          {service.pricingModel.replace('-', ' ')}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Pricing */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-zion-blue">
                              {formatPrice(service.price)}
                            </div>
                            <div className="text-sm text-gray-500">
                              {service.pricingModel === 'subscription' ? '/month' : 'one-time'}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-500 line-through">
                              {formatPrice(service.marketPrice)}
                            </div>
                            <div className="text-sm font-semibold text-green-600">
                              Save {service.savings}%
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-gray-700">
                          <Lightbulb className="h-4 w-4 text-yellow-500" />
                          Key Features
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {service.features.slice(0, 4).map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div>
                        <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-gray-700">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          Key Benefits
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {service.benefits.slice(0, 2).map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Service Metrics */}
                      <div className="grid grid-cols-3 gap-2 text-center text-xs bg-gray-50 rounded-lg p-3">
                        <div className="flex items-center gap-1 justify-center">
                          <Star className="h-3 w-3 text-yellow-500" />
                          <span>{service.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 justify-center">
                          <Zap className="h-3 w-3 text-blue-500" />
                          <span>{service.aiScore}</span>
                        </div>
                        <div className="flex items-center gap-1 justify-center">
                          <Clock className="h-3 w-3 text-green-500" />
                          <span>{service.deliveryTime}</span>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="grid grid-cols-2 gap-3">
                        <Button className="w-full" size="sm">
                          <Phone className="mr-2 h-4 w-4" />
                          Get Quote
                        </Button>
                        <Button variant="outline" className="w-full" size="sm">
                          <ArrowRight className="mr-2 h-4 w-4" />
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {SERVICE_CATEGORIES.map((category) => {
              const services = getServicesByCategory(category);
              return (
                <TabsContent
                  key={category}
                  value={category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}
                  className="space-y-8"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{category} Services</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      {category === "AI & Machine Learning" && "Transform your business with AI-powered solutions"}
                      {category === "Cybersecurity" && "Protect your digital assets with enterprise security"}
                      {category === "Cloud & DevOps" && "Accelerate development and optimize infrastructure"}
                      {category === "Data & Analytics" && "Turn data into actionable business insights"}
                      {category === "Digital Transformation" && "Modernize your business for the digital age"}
                      {category === "IoT & Smart Solutions" && "Connect and monitor with intelligent platforms"}
                      {category === "Blockchain & Web3" && "Embrace the future with blockchain innovation"}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {services.map((service) => (
                      <Card key={service.id} className="h-full hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between mb-3">
                            <Badge variant="secondary" className="text-xs">
                              {service.subcategory}
                            </Badge>
                            <Badge className={getPricingModelColor(service.pricingModel)}>
                              {service.pricingModel.replace('-', ' ')}
                            </Badge>
                          </div>
                          <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                          <CardDescription className="text-sm leading-relaxed">
                            {service.description}
                          </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          {/* Pricing */}
                          <div className="bg-gray-50 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-3">
                              <div className="text-center">
                                <div className="text-2xl font-bold text-zion-blue">
                                  {formatPrice(service.price)}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {service.pricingModel === 'subscription' ? '/month' : 'one-time'}
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm text-gray-500 line-through">
                                  {formatPrice(service.marketPrice)}
                                </div>
                                <div className="text-sm font-semibold text-green-600">
                                  Save {service.savings}%
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Key Features */}
                          <div>
                            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-gray-700">
                              <Lightbulb className="h-4 w-4 text-yellow-500" />
                              Key Features
                            </h4>
                            <div className="flex flex-wrap gap-1">
                              {service.features.slice(0, 4).map((feature, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Benefits */}
                          <div>
                            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2 text-gray-700">
                              <TrendingUp className="h-4 w-4 text-green-500" />
                              Key Benefits
                            </h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {service.benefits.slice(0, 2).map((benefit, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Service Metrics */}
                          <div className="grid grid-cols-3 gap-2 text-center text-xs bg-gray-50 rounded-lg p-3">
                            <div className="flex items-center gap-1 justify-center">
                              <Star className="h-3 w-3 text-yellow-500" />
                              <span>{service.rating}</span>
                            </div>
                            <div className="flex items-center gap-1 justify-center">
                              <Zap className="h-3 w-3 text-blue-500" />
                              <span>{service.aiScore}</span>
                            </div>
                            <div className="flex items-center gap-1 justify-center">
                              <Clock className="h-3 w-3 text-green-500" />
                              <span>{service.deliveryTime}</span>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="grid grid-cols-2 gap-3">
                            <Button className="w-full" size="sm">
                              <Phone className="mr-2 h-4 w-4" />
                              Get Quote
                            </Button>
                            <Button variant="outline" className="w-full" size="sm">
                              <ArrowRight className="mr-2 h-4 w-4" />
                              Learn More
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </div>

      {/* Pricing FAQ */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pricing FAQ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our pricing and service delivery
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer volume discounts?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we offer significant volume discounts for enterprise clients and long-term contracts.
                  Contact our sales team for custom pricing based on your specific needs and scale.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's included in the pricing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our pricing includes implementation, training, support, and ongoing maintenance.
                  Additional services like custom development or on-site support are quoted separately.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I customize the services?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Absolutely! We specialize in custom solutions tailored to your business requirements.
                  Our team will work with you to design the perfect solution within your budget.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What payment terms do you offer?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We offer flexible payment terms including monthly subscriptions, quarterly payments,
                  and annual contracts. Enterprise clients can discuss custom payment arrangements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact CTA Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-slate-light mb-12 max-w-3xl mx-auto">
            Contact our team to discuss your specific needs and get a customized quote
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Phone className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-zion-slate-light mb-4">Speak with our experts</p>
              <div className="text-2xl font-bold">+1 302 464 0950</div>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Mail className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-zion-slate-light mb-4">Get detailed pricing</p>
              <div className="text-lg font-semibold">kleber@ziontechgroup.com</div>
            </div>

            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <Target className="h-12 w-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-zion-slate-light mb-4">Meet our team</p>
              <div className="text-sm font-semibold">Middletown, DE 19709</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light text-lg px-8 py-6">
              <Rocket className="mr-3 h-6 w-6" />
              Get Custom Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue text-lg px-8 py-6">
              <Phone className="mr-3 h-6 w-6" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}