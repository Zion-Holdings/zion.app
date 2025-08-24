import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MICRO_SAAS_SERVICES, 
  MICRO_SAAS_CATEGORIES,
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
  Star,
  CheckCircle,
  X,
  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowRight,
  Zap,
  Users,
  Lock,
  Clock,
  TrendingUp
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

const pricingFeatures = {
  basic: [
    "Core service functionality",
    "Standard support (8/5)",
    "Basic integrations",
    "Community documentation",
    "Email support"
  ],
  professional: [
    "All Basic features",
    "Advanced analytics",
    "Priority support (12/7)",
    "Custom integrations",
    "Phone & email support",
    "Dedicated account manager",
    "Training sessions"
  ],
  enterprise: [
    "All Professional features",
    "Custom development",
    "24/7 dedicated support",
    "White-label solutions",
    "SLA guarantees",
    "On-site training",
    "Custom contracts",
    "Dedicated infrastructure"
  ]
};

const comparisonFeatures = [
  "AI-Powered Automation",
  "Real-time Analytics",
  "Multi-cloud Support",
  "API-First Architecture",
  "Scalable Infrastructure",
  "Custom Integrations",
  "White-label Solutions",
  "24/7 Technical Support",
  "99.9% Uptime Guarantee",
  "SOC 2 Type II Compliant",
  "30-Day Money Back Guarantee",
  "Free Migration Support"
];

export default function PricingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const filteredServices = selectedCategory === 'all' 
    ? MICRO_SAAS_SERVICES 
    : MICRO_SAAS_SERVICES.filter(service => 
        service.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory
      );

  const getDiscountedPrice = (price: number) => {
    return billingCycle === 'yearly' ? Math.round(price * 0.8) : price;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Choose the perfect plan for your business. All our micro SAAS services come with 
            flexible pricing and enterprise-grade features at startup prices.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-zion-slate-light'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors ${
                billingCycle === 'yearly' ? 'bg-zion-purple' : 'bg-zion-slate-light'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-zion-slate-light'}`}>
              Yearly
              <Badge className="ml-2 bg-green-500 text-white">Save 20%</Badge>
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Choose Your Plan
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Start with Basic and scale up as your business grows. All plans include our core features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(PRICING_TIERS).map(([key, tier]) => (
              <Card key={key} className={`relative ${key === 'professional' ? 'border-zion-purple border-2 scale-105 shadow-xl' : ''}`}>
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
                  <ul className="text-left space-y-3 mb-8">
                    {pricingFeatures[key as keyof typeof pricingFeatures].map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Service Pricing by Category
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Explore our comprehensive range of micro SAAS solutions with transparent pricing
            </p>
          </div>
          
          <Tabs defaultValue="all" className="w-full" onValueChange={(value) => setSelectedCategory(value)}>
            <TabsList className="grid w-full grid-cols-9 bg-zion-blue border-zion-blue-light mb-8">
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
                  <Card key={service.id} className="bg-white border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
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
                      <CardDescription className="text-gray-600">
                        {service.description.substring(0, 120)}...
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span className="text-sm">{service.rating}</span>
                          <span className="text-gray-500 text-sm ml-1">({service.reviewCount})</span>
                        </div>
                        <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                          AI Score: {service.aiScore}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-zion-blue">
                          ${getDiscountedPrice(service.price)}
                          <span className="text-sm text-gray-500">/{billingCycle === 'monthly' ? 'month' : 'month (billed yearly)'}</span>
                        </div>
                        {billingCycle === 'yearly' && (
                          <Badge className="bg-green-500 text-white">
                            Save ${Math.round(service.price * 0.2)}/month
                          </Badge>
                        )}
                      </div>
                      <div className="space-y-2 mb-4">
                        {service.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="outline" className="mr-2 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Feature Comparison
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              See what's included in each plan and choose the one that fits your needs
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-zion-blue">
                  <th className="text-left p-4 text-zion-blue font-bold">Features</th>
                  <th className="text-center p-4 text-zion-blue font-bold">Basic</th>
                  <th className="text-center p-4 text-zion-purple font-bold">Professional</th>
                  <th className="text-center p-4 text-zion-blue font-bold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="p-4 font-medium">{feature}</td>
                    <td className="text-center p-4">
                      {index < 4 ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="text-center p-4">
                      {index < 8 ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="text-center p-4">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
            {[
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Immediate Deployment",
                description: "All services ready for instant deployment"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Enterprise Security",
                description: "SOC 2 compliance and 24/7 monitoring"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Dedicated Support",
                description: "24/7 technical support with account managers"
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Proven ROI",
                description: "Average 300% ROI within 6 months"
              }
            ].map((benefit, index) => (
              <Card key={index} className="bg-zion-blue-dark border-zion-blue-light text-white">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mb-4">
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

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-blue mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Contact our team to discuss your needs and get a custom quote for your business
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
                <Link to="/micro-saas-services">
                  <Button variant="outline" className="w-full border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white">
                    View All Services
                  </Button>
                </Link>
              </div>
              
              <div className="mt-8 p-6 bg-zion-blue/5 rounded-lg border border-zion-blue/20">
                <h4 className="font-medium text-zion-blue mb-2">What's Included:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 24/7 Technical Support</li>
                  <li>• 99.9% Uptime Guarantee</li>
                  <li>• SOC 2 Type II Compliant</li>
                  <li>• 30-Day Money Back Guarantee</li>
                  <li>• Free Migration Support</li>
                  <li>• Custom Integration Services</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/micro-saas-services">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
                Explore All Micro SAAS Services
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}