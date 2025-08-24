
import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SimpleFuturisticBackground } from "@/components/ui/FuturisticBackground";
import { ENHANCED_SERVICES, getPopularServices, getNewServices } from "@/data/enhancedServices";
import { Zap, Star, ArrowRight, Phone, Mail, MapPin, Brain, Cloud, Code, Shield, TrendingUp, Users, CheckCircle, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const popularServices = getPopularServices();
  const newServices = getNewServices();

  return (
    <>
      <SEO 
        title="Zion Tech Group - AI, IT & SAAS Solutions" 
        description="Transform your business with cutting-edge AI, IT, and SAAS solutions. Expert consulting, development, and support services." 
        keywords="AI solutions, IT services, SAAS platforms, technology consulting, Zion Tech Group"
        canonical="https://ziontechgroup.com"
      />
      <SimpleFuturisticBackground className="min-h-screen">
        <div className="relative z-10">
          {/* Hero Section */}
          <div className="container mx-auto px-4 pt-24 pb-20">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-full px-4 py-2 mb-6">
                <Zap className="h-4 w-4 text-zion-cyan" />
                <span className="text-sm font-medium text-zion-cyan">Innovation at Your Fingertips</span>
              </div>
              <GradientHeading className="mb-6">
                Transform Your Business with AI & Technology
              </GradientHeading>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto leading-relaxed">
                Zion Tech Group delivers cutting-edge AI, IT, and SAAS solutions that drive innovation, 
                efficiency, and growth. From AI-powered analytics to enterprise IT consulting, we're your 
                trusted technology partner.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <Link to="/enhanced-services">
                  <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white gap-2">
                    <Zap className="h-4 w-4" />
                    Explore Services
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                    <Phone className="h-4 w-4" />
                    Get Free Consultation
                  </Button>
                </Link>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan mb-2">500+</div>
                  <div className="text-sm text-zion-slate-light">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-purple mb-2">98%</div>
                  <div className="text-sm text-zion-slate-light">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
                  <div className="text-sm text-zion-slate-light">Support Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-purple mb-2">50+</div>
                  <div className="text-sm text-zion-slate-light">AI Solutions</div>
                </div>
              </div>
            </div>

            {/* Core Features */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <Card className="bg-zion-blue-dark/50 border-zion-purple/30 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="h-8 w-8 text-zion-cyan" />
                  </div>
                  <CardTitle className="text-white">AI Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zion-slate-light text-center">
                    Cutting-edge artificial intelligence solutions including machine learning, 
                    natural language processing, and predictive analytics tailored to your business needs.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="bg-zion-blue-dark/50 border-zion-purple/30 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code className="h-8 w-8 text-zion-cyan" />
                  </div>
                  <CardTitle className="text-white">Tech Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zion-slate-light text-center">
                    Comprehensive technology services from custom development to cloud deployment, 
                    ensuring scalable and secure solutions for your business.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="bg-zion-blue-dark/50 border-zion-purple/30 hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-zion-cyan" />
                  </div>
                  <CardTitle className="text-white">IT Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zion-slate-light text-center">
                    24/7 IT support and maintenance services for your infrastructure, 
                    ensuring business continuity and optimal performance.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Popular Services Showcase */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Popular Services</h2>
                <p className="text-zion-slate-light max-w-2xl mx-auto">
                  Discover our most requested AI, IT, and SAAS solutions that are transforming businesses worldwide.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularServices.slice(0, 6).map((service) => (
                  <Card key={service.id} className="bg-zion-blue-dark/50 border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/20 group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                          {service.category}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-zion-slate-light">{service.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-white text-lg group-hover:text-zion-cyan transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-zion-slate-light">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-zion-cyan">
                          ${service.price.min.toLocaleString()}-${service.price.max.toLocaleString()}
                        </span>
                        <Link to="/enhanced-services">
                          <Button variant="outline" size="sm" className="border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10">
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Information Banner */}
            <div className="bg-gradient-to-r from-zion-blue-dark/20 to-zion-cyan/20 border border-zion-blue-light/30 rounded-2xl p-8 mb-20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-zion-slate-light max-w-2xl mx-auto">
                  Get in touch with our experts to discuss your specific needs and discover how our services 
                  can drive innovation and growth for your organization.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Phone className="h-6 w-6 text-zion-cyan" />
                  <div className="text-white font-semibold">+1 302 464 0950</div>
                  <div className="text-zion-slate-light text-sm">Call us anytime</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Mail className="h-6 w-6 text-zion-cyan" />
                  <div className="text-white font-semibold">kleber@ziontechgroup.com</div>
                  <div className="text-zion-slate-light text-sm">Email us today</div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <MapPin className="h-6 w-6 text-zion-cyan" />
                  <div className="text-white font-semibold">364 E Main St STE 1008, Middletown DE 19709</div>
                  <div className="text-zion-slate-light text-sm">Visit our office</div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
                Join hundreds of companies already leveraging our expertise to drive innovation and growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white gap-2">
                    <Mail className="h-4 w-4" />
                    Contact Us Today
                  </Button>
                </Link>
                <Link to="/enhanced-services">
                  <Button size="lg" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                    <Zap className="h-4 w-4" />
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SimpleFuturisticBackground>
    </>
  );
}
