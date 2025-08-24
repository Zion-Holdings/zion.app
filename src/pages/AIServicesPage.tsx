import React, { useState } from 'react';
import { getServicesByCategory } from '@/data/comprehensiveServices';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Star, Clock, MapPin, Mail, Phone, ArrowRight, Brain, Zap, Shield, TrendingUp, Users, Globe } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function AIServicesPage() {
  const aiServices = getServicesByCategory('ai-services');

  const aiFeatures = [
    {
      icon: <Brain className="w-8 h-8 text-zion-purple" />,
      title: "Advanced AI Models",
      description: "State-of-the-art machine learning models trained on vast datasets for superior accuracy and performance."
    },
    {
      icon: <Zap className="w-8 h-8 text-zion-cyan" />,
      title: "Real-time Processing",
      description: "Lightning-fast AI processing with sub-second response times for seamless user experiences."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Enterprise Security",
      description: "Bank-grade security with data encryption, access controls, and compliance with industry standards."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: "Scalable Solutions",
      description: "Cloud-native architecture that scales automatically with your business growth and demands."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Multi-language Support",
      description: "Global reach with support for 50+ languages and localization capabilities."
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: "24/7 Availability",
      description: "Round-the-clock AI services with 99.9% uptime guarantee and global CDN distribution."
    }
  ];

  const aiUseCases = [
    {
      industry: "E-commerce",
      applications: ["Product Recommendations", "Customer Service Chatbots", "Fraud Detection", "Inventory Optimization"],
      icon: "🛒"
    },
    {
      industry: "Healthcare",
      applications: ["Medical Image Analysis", "Patient Data Insights", "Drug Discovery", "Predictive Diagnostics"],
      icon: "🏥"
    },
    {
      industry: "Finance",
      applications: ["Risk Assessment", "Fraud Prevention", "Algorithmic Trading", "Customer Insights"],
      icon: "💰"
    },
    {
      industry: "Manufacturing",
      applications: ["Predictive Maintenance", "Quality Control", "Supply Chain Optimization", "Process Automation"],
      icon: "🏭"
    },
    {
      industry: "Marketing",
      applications: ["Content Generation", "Customer Segmentation", "Campaign Optimization", "Sentiment Analysis"],
      icon: "📢"
    },
    {
      industry: "Education",
      applications: ["Personalized Learning", "Content Creation", "Student Assessment", "Administrative Automation"],
      icon: "🎓"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$2,999",
      description: "Perfect for small businesses starting their AI journey",
      features: [
        "Basic AI model integration",
        "Standard API access",
        "Email support",
        "Basic analytics dashboard",
        "5,000 API calls/month"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$8,999",
      description: "Ideal for growing businesses with advanced AI needs",
      features: [
        "Advanced AI model customization",
        "Priority API access",
        "Phone & email support",
        "Advanced analytics & reporting",
        "50,000 API calls/month",
        "Custom model training",
        "Integration support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$25,999",
      description: "Comprehensive AI solutions for large organizations",
      features: [
        "Full AI platform customization",
        "Unlimited API access",
        "Dedicated support team",
        "Custom AI model development",
        "Advanced security features",
        "SLA guarantees",
        "On-premise deployment options",
        "White-label solutions"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="AI Services & Solutions - Zion Tech Group" 
        description="Transform your business with cutting-edge AI services including chatbots, content moderation, predictive analytics, and machine learning solutions. Expert AI development with competitive pricing."
        keywords="AI services, machine learning, chatbots, content moderation, predictive analytics, AI development, Zion Tech Group"
        canonical="https://ziontechgroup.com/ai-services"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-6xl mb-8">
            🤖
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Services & Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge artificial intelligence. From chatbots to predictive analytics, 
            we deliver AI solutions that drive innovation and growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
              <Brain className="w-5 h-5 mr-2" />
              Start AI Project
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Phone className="w-5 h-5 mr-2" />
              +1 302 464 0950
            </Button>
          </div>
        </div>
        
        {/* Floating AI Elements */}
        <div className="absolute top-20 left-10 text-4xl animate-bounce">🧠</div>
        <div className="absolute top-40 right-20 text-3xl animate-pulse">⚡</div>
        <div className="absolute bottom-20 left-1/4 text-2xl animate-spin">🔮</div>
        <div className="absolute bottom-40 right-1/4 text-3xl animate-bounce">📊</div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-zion-blue-dark border-b border-zion-blue-light py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-zion-slate-light text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-zion-cyan" />
              <span>https://ziontechgroup.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Features Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Our AI solutions combine cutting-edge technology with enterprise-grade reliability to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => (
              <Card key={index} className="bg-zion-blue-dark border-zion-blue-light text-white hover:border-zion-purple/50 transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zion-slate-light text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate mb-4">
              Our AI Service Portfolio
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive AI solutions designed to address your specific business challenges and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-zion-blue-light">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={service.images[0]} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-zion-purple text-white">
                      {service.subcategory || service.category}
                    </Badge>
                  </div>
                  {service.aiScore && (
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-zion-cyan text-white">
                        AI Score: {service.aiScore}
                      </Badge>
                    </div>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-zion-slate group-hover:text-zion-purple transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <Clock className="w-4 h-4" />
                      <span>Delivery: {service.availability}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <MapPin className="w-4 h-4" />
                      <span>{service.location}</span>
                    </div>
                    {service.rating && (
                      <div className="flex items-center gap-2 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{service.rating}</span>
                        </div>
                        <span className="text-zion-slate-light">({service.reviewCount} reviews)</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-zion-purple">
                      {service.price ? `$${service.price.toLocaleString()}` : 'Contact Us'}
                    </div>
                    <Button className="bg-zion-purple hover:bg-zion-purple-dark group-hover:bg-zion-purple-dark">
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  <div className="mt-4 pt-4 border-t border-zion-blue-light">
                    <div className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <Mail className="w-4 h-4" />
                      <span>{service.author.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Use Cases by Industry */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Solutions Across Industries
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Discover how AI can transform your industry with our specialized solutions and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiUseCases.map((useCase, index) => (
              <Card key={index} className="bg-zion-blue-dark border-zion-blue-light text-white hover:border-zion-purple/50 transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <CardTitle className="text-xl">{useCase.industry}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {useCase.applications.map((app, appIndex) => (
                      <li key={appIndex} className="flex items-center gap-2 text-zion-slate-light">
                        <Check className="w-4 h-4 text-zion-cyan" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zion-slate mb-4">
              Transparent AI Service Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Choose the perfect AI service tier for your business needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? 'border-zion-purple ring-2 ring-zion-purple/20' : 'border-zion-blue-light'}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-zion-purple text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-zion-slate">{tier.name}</CardTitle>
                  <div className="text-4xl font-bold text-zion-purple mb-2">{tier.price}</div>
                  <CardDescription className="text-zion-slate-light">{tier.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-zion-slate">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${tier.popular ? 'bg-zion-purple hover:bg-zion-purple-dark' : 'bg-zion-blue hover:bg-zion-blue-dark'}`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Join hundreds of businesses already transforming their operations with our AI solutions. 
            Get started today with a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
              <Brain className="w-5 h-5 mr-2" />
              Start AI Project
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Mail className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Phone className="w-5 h-5 mr-2" />
              Call: +1 302 464 0950
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}