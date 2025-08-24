import React from 'react';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Clock, DollarSign, Users, ArrowRight, Cloud, Zap, Shield, TrendingUp } from 'lucide-react';
import { comprehensiveServices } from '@/data/comprehensiveServices';

export default function MicroSAASShowcase() {
  const saasServices = comprehensiveServices.filter(service => service.category === "Micro SAAS");

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Micro SAAS Solutions - Zion Tech Group" 
        description="Discover innovative Software-as-a-Service solutions including inventory management, project management, and CRM systems."
        keywords="Micro SAAS, software solutions, inventory management, project management, CRM, business software"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-light">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-zion-purple-light opacity-40 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-zion-cyan opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-zion-purple opacity-40 animate-pulse"></div>
        </div>
        
        <div className="container relative z-10 px-4 mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Cloud className="w-12 h-12 text-zion-purple mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold text-white">
              Micro SAAS Solutions
            </h1>
            <Cloud className="w-12 h-12 text-zion-purple ml-4" />
          </div>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-10 max-w-4xl mx-auto">
            Powerful, affordable software solutions designed for modern businesses. 
            Streamline operations, boost productivity, and scale efficiently with our cloud-based platforms.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-zion-purple/20 px-4 py-2 rounded-full border border-zion-purple/30">
              <Zap className="w-5 h-5 text-zion-purple" />
              <span className="text-zion-purple font-medium">Cloud-Based</span>
            </div>
            <div className="flex items-center space-x-2 bg-zion-cyan/20 px-4 py-2 rounded-full border border-zion-cyan/30">
              <Shield className="w-5 h-5 text-zion-cyan" />
              <span className="text-zion-cyan font-medium">Enterprise Security</span>
            </div>
            <div className="flex items-center space-x-2 bg-zion-purple/20 px-4 py-2 rounded-full border border-zion-purple/30">
              <TrendingUp className="w-5 h-5 text-zion-purple" />
              <span className="text-zion-purple font-medium">Scalable Growth</span>
            </div>
          </div>
        </div>
      </section>

      {/* SAAS Services Grid */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our SAAS Platforms
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Each platform is built with modern technology, designed for ease of use, and optimized for business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {saasServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue-light border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:scale-105 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-zion-purple text-white">
                      {service.subcategory}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-zion-blue-dark/80 text-zion-cyan">
                      {service.pricingModel === 'monthly' ? 'Monthly' : 'One-time'}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-white group-hover:text-zion-cyan transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Pricing and Rating */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-5 h-5 text-zion-cyan" />
                      <span className="text-white font-bold text-xl">
                        {service.currency}{service.price}
                      </span>
                      <span className="text-zion-slate-light">
                        /{service.pricingModel === 'monthly' ? 'mo' : service.pricingModel === 'hourly' ? 'hr' : 'project'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{service.rating}</span>
                      <span className="text-zion-slate-light">({service.reviewCount} reviews)</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Platform Features:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-zion-purple rounded-full"></div>
                          <span className="text-zion-slate-light text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Business Benefits:</h4>
                    <div className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-zion-cyan rounded-full mt-2"></div>
                          <span className="text-zion-slate-light text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Target Audience */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Perfect For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.targetAudience.map((audience, index) => (
                        <Badge key={index} variant="outline" className="border-zion-purple/30 text-zion-slate-light">
                          {audience}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Setup and Contact */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2 text-zion-slate-light">
                      <Clock className="w-4 h-4" />
                      <span>Setup: {service.estimatedDelivery}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-zion-slate-light">
                      <Users className="w-4 h-4" />
                      <span>{service.targetAudience.length} target audiences</span>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-zion-blue-dark/50 p-4 rounded-lg mb-6">
                    <h4 className="text-white font-semibold mb-3">Get Started:</h4>
                    <div className="space-y-2 text-sm text-zion-slate-light">
                      <div className="flex items-center space-x-2">
                        <span>📧</span>
                        <span>{service.contactInfo.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>📱</span>
                        <span>{service.contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>🌐</span>
                        <span>{service.contactInfo.website}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg py-6 group-hover:shadow-lg transition-all duration-300"
                    asChild
                  >
                    <a href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}>
                      Start Free Trial
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our SAAS Solutions */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion SAAS Solutions?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We deliver enterprise-grade software with the simplicity and affordability that growing businesses need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cloud className="w-10 h-10 text-zion-purple" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud-First Architecture</h3>
              <p className="text-zion-slate-light">
                Built for the cloud with 99.9% uptime, automatic backups, and seamless scalability.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-zion-cyan" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-zion-slate-light">
                SOC 2 compliant with advanced encryption, role-based access, and audit trails.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-zion-purple" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Scalable Growth</h3>
              <p className="text-zion-slate-light">
                Start small and grow seamlessly with flexible pricing and feature expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Affordable Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Transparent pricing with no hidden fees. Choose the plan that fits your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {saasServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue-light border-zion-purple/20 text-center">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {service.subcategory}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{service.currency}{service.price}</span>
                    <span className="text-zion-slate-light ml-2">
                      /{service.pricingModel === 'monthly' ? 'month' : 'project'}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8 text-left">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-zion-purple rounded-full"></div>
                        <span className="text-zion-slate-light text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                    asChild
                  >
                    <a href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}>
                      Get Started
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}