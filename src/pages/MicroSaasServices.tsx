import React, { useState } from 'react';
import { DynamicListingPage } from "@/components/DynamicListingPage";
import { TrustedBySection } from "@/components/TrustedBySection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MICRO_SAAS_SERVICES, 
  MICRO_SAAS_CATEGORIES, 
  MICRO_SAAS_SUBCATEGORIES,
  PRICING_TIERS,
  CONTACT_INFO 
} from "@/data/microSaasServices";
import { 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3, 
  Code, 
  DollarSign, 
  Heart, 
  ShoppingCart, 
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Globe,
  CheckCircle,
  Star,
  TrendingUp,
  Zap,
  Users,
  Lock,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const categoryIcons = {
  'AI Business Solutions': Brain,
  'IT Infrastructure': Cloud,
  'Data Analytics': BarChart3,
  'AI Development': Code,
  'FinTech': DollarSign,
  'HealthTech': Heart,
  'E-commerce': ShoppingCart,
  'EdTech': GraduationCap
};

const benefits = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Immediate Deployment",
    description: "All services are ready for immediate deployment with no setup delays"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance and 24/7 monitoring"
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Dedicated Support",
    description: "24/7 technical support with dedicated account managers"
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Proven ROI",
    description: "Average 300% ROI within 6 months of implementation"
  }
];

const features = [
  "AI-Powered Automation",
  "Real-time Analytics",
  "Multi-cloud Support",
  "API-First Architecture",
  "Scalable Infrastructure",
  "Custom Integrations",
  "White-label Solutions",
  "Comprehensive Documentation"
];

export default function MicroSaasServices() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredServices = selectedCategory === 'all' 
    ? MICRO_SAAS_SERVICES 
    : MICRO_SAAS_SERVICES.filter(service => 
        service.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory
      );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Transform your business with our comprehensive suite of AI-powered micro SAAS services. 
            From automation to analytics, we provide enterprise-grade solutions at startup prices.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">
              <Globe className="h-5 w-5 mr-2" />
              View All Services
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Phone className="h-5 w-5 mr-2" />
              Contact Sales
            </Button>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              We deliver enterprise-grade solutions with startup agility and proven results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-zion-blue-dark border-zion-blue-light text-white">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-zion-purple rounded-full flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-zion-slate-light">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Enterprise Features, Startup Pricing
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Every service includes our comprehensive feature set designed for growth and scalability
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-zion-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-zion-purple" />
                </div>
                <p className="font-medium text-zion-blue">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Choose the plan that fits your business needs and scale as you grow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(PRICING_TIERS).map(([key, tier]) => (
              <Card key={key} className={`relative ${key === 'professional' ? 'border-zion-purple border-2 scale-105' : ''}`}>
                {key === 'professional' && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-zion-purple text-white px-4 py-2">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-zion-blue">{tier.name}</CardTitle>
                  <CardDescription>
                    Perfect for {key === 'basic' ? 'startups' : key === 'professional' ? 'growing businesses' : 'enterprises'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-zion-blue">{tier.multiplier}x</span>
                    <span className="text-gray-600 ml-2">base pricing</span>
                  </div>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      All core features included
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {key === 'enterprise' ? 'Unlimited' : 'Standard'} support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      {key === 'enterprise' ? 'Custom' : 'Standard'} integrations
                    </li>
                  </ul>
                  <Button className="w-full" variant={key === 'professional' ? 'default' : 'outline'}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Services by Category
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Explore our comprehensive range of micro SAAS solutions organized by industry and function
            </p>
          </div>
          
          <Tabs defaultValue="all" className="w-full" onValueChange={(value) => setSelectedCategory(value)}>
            <TabsList className="grid w-full grid-cols-9 bg-zion-blue-dark border-zion-blue-light">
              <TabsTrigger value="all" className="text-white">All</TabsTrigger>
              {MICRO_SAAS_CATEGORIES.map((category) => {
                const IconComponent = categoryIcons[category.label as keyof typeof categoryIcons];
                return (
                  <TabsTrigger key={category.value} value={category.value} className="text-white">
                    {IconComponent && <IconComponent className="h-4 w-4 mr-2" />}
                    {category.label.split(' ')[0]}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            
            <TabsContent value={selectedCategory} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                  <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light text-white hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
                    <div className="relative">
                      <img 
                        src={service.images[0]} 
                        alt={service.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <Badge className="absolute top-4 right-4 bg-zion-purple">
                        {service.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-zion-slate-light">
                        {service.description.substring(0, 120)}...
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span className="text-sm">{service.rating}</span>
                          <span className="text-zion-slate-light text-sm ml-1">({service.reviewCount})</span>
                        </div>
                        <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                          AI Score: {service.aiScore}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-zion-cyan">
                          ${service.price}
                          <span className="text-sm text-zion-slate-light">/month</span>
                        </div>
                        <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-dark">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Get in touch with our team to discuss your needs and discover how our micro SAAS solutions can drive your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-zion-blue mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-zion-purple mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">{CONTACT_INFO.mobile}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-zion-purple mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">{CONTACT_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-zion-purple mr-3" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-zion-purple mr-3" />
                  <div>
                    <p className="font-medium">Website</p>
                    <a href={CONTACT_INFO.website} className="text-zion-cyan hover:underline">
                      {CONTACT_INFO.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-zion-blue mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <Link to="/request-quote">
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                    Request Custom Quote
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Schedule Consultation
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="w-full border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white">
                    View All Services
                  </Button>
                </Link>
              </div>
              
              <div className="mt-8 p-6 bg-zion-blue/5 rounded-lg border border-zion-blue/20">
                <h4 className="font-medium text-zion-blue mb-2">Why Choose Zion Tech Group?</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 24/7 Technical Support</li>
                  <li>• 99.9% Uptime Guarantee</li>
                  <li>• SOC 2 Type II Compliant</li>
                  <li>• 30-Day Money Back Guarantee</li>
                  <li>• Free Migration Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedBySection />
    </div>
  );
}